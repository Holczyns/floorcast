"""Camera images laid on the ground while someone subscribes (experimental)."""

import asyncio
import io
import time
from types import SimpleNamespace
from unittest.mock import patch

from homeassistant.core import HomeAssistant
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from PIL import Image
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.floorcast.const import DATA_GROUND, DATA_STILLS, DOMAIN, SIGNAL_GROUND


async def settle(hass, until=lambda: True) -> None:
    """Lets the fetch loop, which runs in the background and waits for the executor, finish its work.

    Waits at least five rounds, then until the condition holds, at most about two seconds on a slow machine.
    """
    for round_ in range(100):
        await hass.async_block_till_done()
        # A real pause for the executor thread; the loop clock may be patched by the test.
        time.sleep(0.02)
        await asyncio.sleep(0)
        if round_ >= 4 and until():
            return


CALIBRATION = [
    {"image": [0, 0], "plan": [0, 0]},
    {"image": [1, 0], "plan": [4, 0]},
    {"image": [1, 1], "plan": [4, 2]},
    {"image": [0, 1], "plan": [0, 2]},
    {"image": [0.5, 0.5], "plan": [2, 1]},
]


def jpeg() -> bytes:
    out = io.BytesIO()
    Image.new("RGB", (640, 360), (40, 160, 40)).save(out, "JPEG")
    return out.getvalue()


async def test_a_camera_is_laid_on_its_zone_fetched_large_while_a_card_shows_it(hass: HomeAssistant, hass_storage):
    level = {
        "id": "g",
        "rooms": [{"id": "terrace", "name": "Terrace", "points": [[1, 0.5], [3, 0.5], [3, 1.5], [1, 1.5]]}],
        "devices": [
            {
                "id": "cam",
                "kind": "camera",
                "entity": "camera.back",
                "at": [0, 0],
                "ground": {"zones": ["terrace"], "calibration": CALIBRATION},
            }
        ],
    }
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": {"levels": [level]}}
    hass.states.async_set("camera.back", "idle")
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    asked = []

    async def image(hass, entity_id, large=False):
        asked.append(large)
        return SimpleNamespace(content_type="image/jpeg", content=jpeg())

    views = []
    with patch("custom_components.floorcast.stills.get_image", image):
        assert await hass.config_entries.async_setup(entry.entry_id)
        async_dispatcher_connect(hass, SIGNAL_GROUND, views.append)
        ground = hass.data[DATA_GROUND]
        token, views_now = ground.subscribe(["cam"], preview=False)
        assert views_now == []
        await settle(hass, until=lambda: bool(views))
        assert asked and all(asked)
        assert views[-1]["id"] == "cam"
        assert views[-1]["data"].startswith("data:image/webp;base64,")
        assert views[-1]["box"] == [1, 0.5, 2, 1]
        ground.unsubscribe(token)
        await settle(hass, until=lambda: hass.data[DATA_STILLS].stills["camera.back"].subscribers == 0)
        assert hass.data[DATA_STILLS].stills["camera.back"].subscribers == 0


async def test_a_camera_with_four_ground_spots_is_not_laid(hass: HomeAssistant, hass_storage):
    level = {
        "id": "g",
        "rooms": [{"id": "terrace", "name": "Terrace", "points": [[1, 0.5], [3, 0.5], [3, 1.5], [1, 1.5]]}],
        "devices": [
            {
                "id": "cam",
                "kind": "camera",
                "entity": "camera.back",
                "at": [0, 0],
                "calibration": CALIBRATION,
                "ground": {"zones": ["terrace"], "calibration": CALIBRATION[:4]},
            }
        ],
    }
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": {"levels": [level]}}
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    assert hass.data[DATA_GROUND].sources == {}


async def test_a_mower_camera_with_a_view_delay_lays_the_image_that_came_that_long_ago(
    hass: HomeAssistant, hass_storage
):
    level = {
        "id": "g",
        "rooms": [],
        "devices": [
            {
                "id": "mower",
                "kind": "mower",
                "entity": "lawn_mower.m",
                "camera": "camera.mower",
                "map": "camera.map",
                "at": [0, 0],
                "ground": {
                    "viewDelay": 2,
                    "spots": [
                        {"image": s["image"], "ahead": [s["plan"][0] + 0.5, s["plan"][1] - 1]} for s in CALIBRATION
                    ],
                },
            }
        ],
    }
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": {"levels": [level]}}
    hass.states.async_set("camera.mower", "streaming")
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    clock = [100.0]
    with (
        patch("custom_components.floorcast.stills.get_image", lambda *a, **k: _image()),
        patch("custom_components.floorcast.ground.time.monotonic", lambda: clock[0]),
    ):
        assert await hass.config_entries.async_setup(entry.entry_id)
        ground = hass.data[DATA_GROUND]
        ground.robots = SimpleNamespace(
            robots={"mower": SimpleNamespace(place={"at": [0, 0], "heading": 0, "state": "mowing"}, track=[])}
        )
        ground.subscribe(["mower"], preview=False)
        await settle(hass)
        # The first image came just now: with a 2 s view delay nothing is laid yet.
        assert "mower" not in ground.views
        clock[0] = 102.5
        ground._request("mower")
        await settle(hass, until=lambda: "mower" in ground.views)
        assert ground.views["mower"]["data"].startswith("data:image/webp;base64,")


async def _image():
    return SimpleNamespace(content_type="image/jpeg", content=jpeg())
