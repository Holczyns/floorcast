"""Camera stills fetched for the cards while they show them."""

import asyncio
import time
from datetime import timedelta
from types import SimpleNamespace
from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_time_changed

from custom_components.floorcast.const import DATA_STILLS, DOMAIN
from custom_components.floorcast.stills import jpeg_size, rounded


async def settle(hass) -> None:
    """Lets the fetch loop, which runs in the background and waits for the executor, finish its work."""
    for _ in range(5):
        await hass.async_block_till_done()
        # A real pause for the executor thread; the loop clock may be patched by the test.
        time.sleep(0.02)
        await asyncio.sleep(0)


# The smallest JPEG header with a frame of 640 x 360: start, a frame marker, its length and size.
JPEG = (
    b"\xff\xd8" + b"\xff\xc0\x00\x11\x08" + (360).to_bytes(2, "big") + (640).to_bytes(2, "big") + b"\x03" + b"\x00" * 9
)


def test_the_size_of_a_jpeg_comes_from_its_frame_header():
    assert jpeg_size(JPEG) == (640, 360)
    assert jpeg_size(b"not a jpeg") is None


async def test_a_subscribed_camera_is_fetched_every_second_until_nobody_watches(hass: HomeAssistant, hass_storage):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": {"levels": [{"id": "g"}]}}
    hass.states.async_set("camera.back", "idle")
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    calls = []

    async def image(hass, entity_id, large=False):
        calls.append(entity_id)
        return SimpleNamespace(content_type="image/jpeg", content=JPEG)

    with patch("custom_components.floorcast.stills.get_image", image):
        assert await hass.config_entries.async_setup(entry.entry_id)
        stills = hass.data[DATA_STILLS]
        stills.subscribe("camera.back")
        await settle(hass)
        assert calls == ["camera.back"]
        assert stills.stills["camera.back"].image["width"] == 640
        # A later subscriber gets the last image at once.
        assert stills.subscribe("camera.back")["data"].startswith("data:image/jpeg;base64,")
        stills.unsubscribe("camera.back")
        stills.unsubscribe("camera.back")
        await settle(hass)
        async_fire_time_changed(hass, dt_util.utcnow() + timedelta(seconds=5))
        await settle(hass)
        assert stills.stills["camera.back"].task is None


def test_a_still_gets_rounded_transparent_corners():
    import io

    from PIL import Image

    out = io.BytesIO()
    Image.new("RGB", (640, 360), (200, 50, 50)).save(out, "JPEG")
    data, size = rounded(out.getvalue())
    assert size == (640, 360)
    image = Image.open(io.BytesIO(data)).convert("RGBA")
    assert image.getpixel((0, 0))[3] == 0
    assert image.getpixel((320, 180))[3] == 255
    assert rounded(b"not an image") is None
