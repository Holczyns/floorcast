"""Camera stills for the cards: one fresh small image a second while some card shows it.

1. A card showing the still of a camera subscribes to it. While a camera has subscribers its
   image is fetched again every INTERVAL seconds, small (WIDTH x HEIGHT at most), and sent to
   them; the next fetch starts only when the last one ended, so a slow camera is not flooded.
2. The last image of every camera stays in memory; a new subscriber gets it at once, so a still
   opens without waiting for the camera.
3. When the cameras that see someone change (cameras.py), each newly active one is fetched once,
   so its still is ready before a card opens it.
4. A camera laid on the ground (ground.py) is fetched larger, LARGE_WIDTH x LARGE_HEIGHT, while it is,
   so the far ground is sharper; its cards then get the larger image too. The bytes of the last image
   stay for it.

5. The image sent to the cards has rounded corners, cut here once instead of in every card: a WebP
   transparent outside a corner radius of CORNER of its shorter side. One that cannot be read goes
   as it came.

Images go through the websocket of the card, so they need no separate signed links.
State kept: the last image of each camera and the count of its subscribers.
"""

from __future__ import annotations

import asyncio
import base64
import io
import logging
import time
from dataclasses import dataclass
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from PIL import Image, ImageDraw, UnidentifiedImageError

from .const import SIGNAL_OBJECTS, SIGNAL_PLAN_UPDATED, SIGNAL_STILL

_LOGGER = logging.getLogger(__name__)

INTERVAL = 1.0
WIDTH, HEIGHT = 640, 360
LARGE_WIDTH, LARGE_HEIGHT = 1280, 720
CORNER = 0.06
TIMEOUT = 10


async def get_image(hass: HomeAssistant, entity_id: str, large: bool = False) -> Any:
    """An image of a camera entity, small or large; the camera component is imported only when needed."""
    from homeassistant.components.camera import async_get_image

    width, height = (LARGE_WIDTH, LARGE_HEIGHT) if large else (WIDTH, HEIGHT)
    return await async_get_image(hass, entity_id, timeout=TIMEOUT, width=width, height=height)


def rounded(content: bytes) -> tuple[bytes, tuple[int, int]] | None:
    """Rule 5: the image as a WebP with rounded transparent corners, and its size; None if unreadable."""
    try:
        with Image.open(io.BytesIO(content)) as source:
            image = source.convert("RGBA")
    except (OSError, UnidentifiedImageError):
        return None
    mask = Image.new("L", image.size, 0)
    radius = round(min(image.size) * CORNER)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, image.width - 1, image.height - 1), radius=radius, fill=255)
    image.putalpha(mask)
    out = io.BytesIO()
    image.save(out, "WEBP", quality=80, method=4)
    return out.getvalue(), image.size


def jpeg_size(data: bytes) -> tuple[int, int] | None:
    """Width and height of a JPEG from its frame header; None for anything else."""
    if data[:2] != b"\xff\xd8":
        return None
    i = 2
    while i + 9 < len(data):
        if data[i] != 0xFF:
            return None
        marker = data[i + 1]
        length = int.from_bytes(data[i + 2 : i + 4], "big")
        # Start of frame markers carry the size; others are skipped by their length.
        if marker in (0xC0, 0xC1, 0xC2):
            return int.from_bytes(data[i + 7 : i + 9], "big"), int.from_bytes(data[i + 5 : i + 7], "big")
        i += 2 + length
    return None


@dataclass
class Still:
    subscribers: int = 0
    # Subscribers that want the large image (rule 4).
    large: int = 0
    image: dict[str, Any] | None = None
    content: bytes | None = None
    task: asyncio.Task | None = None


class CameraStills:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any]) -> None:
        self.hass = hass
        self.stills: dict[str, Still] = {}
        # Frigate camera name to its camera entity on the plan, for rule 3.
        self.frigate_cameras: dict[str, str] = {}
        self._active: list[str] = []
        self._unsubscribe: list = []
        self.configure(plan)

    @callback
    def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_OBJECTS, self._objects_changed))
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.frigate_cameras = {
            device["frigate"]: device["entity"]
            for level in plan.get("levels") or []
            for device in level.get("devices") or []
            if device.get("kind") == "camera" and device.get("frigate") and device.get("entity")
        }

    @callback
    def async_stop(self) -> None:
        for unsubscribe in self._unsubscribe:
            unsubscribe()
        self._unsubscribe.clear()
        for still in self.stills.values():
            if still.task:
                still.task.cancel()

    @callback
    def _objects_changed(self, _objects: Any, active: list[str]) -> None:
        for name in set(active) - set(self._active):
            entity = self.frigate_cameras.get(name)
            if entity:
                self.hass.async_create_task(self._fetch(entity))
        self._active = list(active)

    @callback
    def subscribe(self, entity_id: str, large: bool = False) -> dict[str, Any] | None:
        """Rules 1, 2 and 4: counts a subscriber, starts fetching, and gives the last image."""
        still = self.stills.setdefault(entity_id, Still())
        still.subscribers += 1
        still.large += int(large)
        if still.task is None or still.task.done():
            still.task = self.hass.async_create_background_task(self._loop(entity_id), f"floorcast still {entity_id}")
        return still.image

    @callback
    def unsubscribe(self, entity_id: str, large: bool = False) -> None:
        still = self.stills.get(entity_id)
        if still is None:
            return
        still.subscribers = max(0, still.subscribers - 1)
        still.large = max(0, still.large - int(large))
        if not still.subscribers and still.task:
            still.task.cancel()
            still.task = None

    async def _loop(self, entity_id: str) -> None:
        while self.stills[entity_id].subscribers:
            started = time.monotonic()
            await self._fetch(entity_id)
            await asyncio.sleep(max(0.0, INTERVAL - (time.monotonic() - started)))

    async def _fetch(self, entity_id: str) -> None:
        try:
            image = await get_image(self.hass, entity_id, large=bool(self.stills.get(entity_id, Still()).large))
        except HomeAssistantError as err:
            _LOGGER.debug("No still of %s: %s", entity_id, err)
            return
        size = jpeg_size(image.content)
        data = f"data:{image.content_type};base64,{base64.b64encode(image.content).decode()}"
        cut = await self.hass.async_add_executor_job(rounded, image.content)
        if cut is not None:
            data = f"data:image/webp;base64,{base64.b64encode(cut[0]).decode()}"
            size = cut[1]
        still = self.stills.setdefault(entity_id, Still())
        still.content = image.content
        still.image = {
            "entity": entity_id,
            "data": data,
            "width": size[0] if size else None,
            "height": size[1] if size else None,
            "time": time.time(),
        }
        async_dispatcher_send(self.hass, f"{SIGNAL_STILL}_{entity_id}", still.image)
