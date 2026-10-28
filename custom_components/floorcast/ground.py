"""EXPERIMENTAL: camera images laid on the ground of the plan, the same for every card.

1. A camera with zones or rooms and at least MIN_SPOTS ground calibration spots is laid on them
   (engine/ground.py).
2. A mower camera with at least MIN_SPOTS spots, relative to the mower, is laid ahead of the mower from its
   place and heading (robots.py) while it is out of its dock, or also in its dock while the editor
   previews it.
3. A camera fades out at its range (ground range, or the range of its view), a mower camera at its range
   from the mower; both fade softly at the edges of their image.
4. A mower camera with a view delay lays the image that came that many seconds ago, so the image keeps
   pace with the mower shown late by its position delay (robots.py): the view delay is the position
   delay less the time its images come late.
5. Cards and the editor subscribe to the devices they show; only those are drawn. While drawn, a camera is
   fetched large (stills.py) and drawn again with every new image, a mower also whenever it moves. One
   drawing per device runs at a time; a newer request waits for it and then runs.

Settings live on the devices of the plan, under "ground"; nothing else reads them, so removing this
module, its command and its call in __init__.py leaves them inert.
State kept: the last view of each device, the subscriptions and the cameras watched for them, and the
images of the last MOST_VIEW_DELAY seconds of a delayed mower camera.
"""

from __future__ import annotations

import base64
import itertools
import logging
import time
from collections import deque
from dataclasses import dataclass
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send

from .const import SIGNAL_GROUND, SIGNAL_PLAN_UPDATED, SIGNAL_ROBOTS, SIGNAL_STILL
from .engine.ground import mower_calibrated, track_heading, warp
from .engine.homography import Matrix, homography

_LOGGER = logging.getLogger(__name__)

MIN_SPOTS = 5
# Range of a camera without its own, and of a mower camera, in metres.
DEFAULT_RANGE = 8.0
DEFAULT_MOWER_RANGE = 2.0
MOST_VIEW_DELAY = 10.0


@dataclass
class Source:
    level: str
    device: dict[str, Any]
    entity: str
    # Fixed cameras: their matrix, the polygons of their zones and their calibration spots, and where
    # they are with their range for fading; a mower gets them from its pose when drawn.
    matrix: Matrix | None = None
    clips: list[list[tuple[float, float]]] | None = None
    pairs: list[tuple[tuple[float, float], tuple[float, float]]] | None = None
    fade: tuple[tuple[float, float], float] | None = None

    @property
    def mower(self) -> bool:
        return self.device.get("kind") == "mower"


def sources_of(plan: dict[str, Any]) -> dict[str, Source]:
    """Rules 1 and 2: every camera and mower calibrated well enough to be laid on the ground."""
    sources: dict[str, Source] = {}
    for level in plan.get("levels") or []:
        areas = {area["id"]: area for area in [*(level.get("zones") or []), *(level.get("rooms") or [])]}
        for device in level.get("devices") or []:
            ground = device.get("ground") or {}
            if device.get("kind") == "camera" and device.get("entity") and ground.get("zones"):
                spots = [(tuple(p["image"]), tuple(p["plan"])) for p in ground.get("calibration") or []]
                matrix = homography(spots) if len(spots) >= MIN_SPOTS else None
                clips = [[tuple(p) for p in areas[key]["points"]] for key in ground["zones"] if key in areas]
                reach = ground.get("range") or device.get("radius") or DEFAULT_RANGE
                fade = (tuple(device["at"]), float(reach))
                if matrix and clips:
                    sources[device["id"]] = Source(level["id"], device, device["entity"], matrix, clips, spots, fade)
            if device.get("kind") == "mower" and device.get("camera") and len(ground.get("spots") or []) >= MIN_SPOTS:
                sources[device["id"]] = Source(level["id"], device, device["camera"])
    return sources


def view_delay(device: dict[str, Any]) -> float:
    """Rule 4: seconds the image of a mower camera is laid late."""
    value = (device.get("ground") or {}).get("viewDelay")
    return min(max(float(value), 0.0), MOST_VIEW_DELAY) if isinstance(value, int | float) else 0.0


def mower_range(device: dict[str, Any]) -> float:
    """Range of a mower camera; reach is its former name."""
    ground = device.get("ground") or {}
    value = ground.get("range", ground.get("reach"))
    return float(value) if isinstance(value, int | float) and value > 0 else DEFAULT_MOWER_RANGE


class GroundViews:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any], stills: Any, robots: Any) -> None:
        self.hass = hass
        self.stills = stills
        self.robots = robots
        self.sources: dict[str, Source] = {}
        self.views: dict[str, dict[str, Any]] = {}
        # Rule 5: every subscription with its devices and whether it previews a docked mower.
        self._subscriptions: dict[int, tuple[frozenset[str], bool]] = {}
        self._tokens = itertools.count()
        # Camera entities fetched large for the views, each with its signal subscription.
        self._watched: dict[str, Any] = {}
        self._running: set[str] = set()
        self._again: set[str] = set()
        # Rule 4: images of a camera as they came, (monotonic time, bytes), for a mower with a view delay.
        self._frames: dict[str, deque[tuple[float, bytes]]] = {}
        self._unsubscribe: list = []
        self.configure(plan)

    @callback
    def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_ROBOTS, self._robot_changed))

    @callback
    def async_stop(self) -> None:
        for unsubscribe in self._unsubscribe:
            unsubscribe()
        self._unsubscribe.clear()
        for entity in list(self._watched):
            self._unwatch(entity)

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.sources = sources_of(plan)
        for key in [key for key in self.views if key not in self.sources]:
            self._remove(key)
        self._sync()
        for key in self.sources:
            self._request(key)

    @callback
    def subscribe(self, devices: list[str], preview: bool) -> tuple[int, list[dict[str, Any]]]:
        """Rule 5: a token for unsubscribing, and the views of these devices drawn now."""
        token = next(self._tokens)
        self._subscriptions[token] = (frozenset(devices), preview)
        self._sync()
        for key in devices:
            if key not in self.views:
                self._request(key)
        return token, [view for key, view in self.views.items() if key in devices]

    @callback
    def unsubscribe(self, token: int) -> None:
        self._subscriptions.pop(token, None)
        self._sync()

    def _asked(self, key: str) -> tuple[bool, bool]:
        """Whether some subscription shows a device, and whether one of those previews it."""
        asked = [preview for devices, preview in self._subscriptions.values() if key in devices]
        return bool(asked), any(asked)

    def _pose(self, source: Source, preview: bool) -> dict[str, Any] | None:
        """Place and heading of a mower; None while it should not be laid (rule 2)."""
        robot = self.robots.robots.get(source.device["id"]) if self.robots else None
        place = robot.place if robot else None
        if not place or not place.get("at"):
            return None
        if place.get("state") == "docked" and not preview:
            return None
        heading = place.get("heading")
        if heading is None:
            heading = track_heading(robot.track)
        return {"at": place["at"], "heading": heading} if heading is not None else None

    def _wanted(self, key: str) -> bool:
        source = self.sources.get(key)
        shown, preview = self._asked(key)
        if source is None or not shown:
            return False
        return not source.mower or self._pose(source, preview) is not None

    @callback
    def _sync(self) -> None:
        """Rule 5: watches the cameras of the devices shown now, and drops views no longer shown."""
        wanted = {source.entity for key, source in self.sources.items() if self._wanted(key)}
        for entity in wanted - set(self._watched):
            self._watched[entity] = async_dispatcher_connect(
                self.hass, f"{SIGNAL_STILL}_{entity}", self._still_changed(entity)
            )
            self.stills.subscribe(entity, large=True)
        for entity in set(self._watched) - wanted:
            self._unwatch(entity)
        for key in list(self.views):
            if not self._wanted(key):
                self._remove(key)

    def _unwatch(self, entity: str) -> None:
        self._watched.pop(entity)()
        self._frames.pop(entity, None)
        self.stills.unsubscribe(entity, large=True)

    def _still_changed(self, entity: str):
        @callback
        def changed(_image: dict[str, Any]) -> None:
            delayed = any(source.entity == entity and view_delay(source.device) for source in self.sources.values())
            still = self.stills.stills.get(entity)
            if delayed and still is not None and still.content:
                frames = self._frames.setdefault(entity, deque())
                frames.append((time.monotonic(), still.content))
                while frames and frames[0][0] < time.monotonic() - MOST_VIEW_DELAY - 2:
                    frames.popleft()
            for key, source in self.sources.items():
                if source.entity == entity:
                    self._request(key)

        return changed

    @callback
    def _robot_changed(self, change: dict[str, Any]) -> None:
        if change.get("id") in self.sources:
            self._sync()
            self._request(change["id"])

    @callback
    def _remove(self, key: str) -> None:
        view = self.views.pop(key, None)
        if view:
            async_dispatcher_send(self.hass, SIGNAL_GROUND, {"id": key, "level": view["level"], "data": None})

    @callback
    def _request(self, key: str) -> None:
        if not self._wanted(key):
            return
        if key in self._running:
            self._again.add(key)
            return
        self._running.add(key)
        self.hass.async_create_task(self._draw(key), f"floorcast ground {key}")

    async def _draw(self, key: str) -> None:
        try:
            while True:
                self._again.discard(key)
                await self._draw_once(key)
                if key not in self._again:
                    return
        finally:
            self._running.discard(key)

    async def _draw_once(self, key: str) -> None:
        source = self.sources.get(key)
        still = self.stills.stills.get(source.entity) if source else None
        if source is None or still is None or not still.content or not self._wanted(key):
            return
        matrix, clips, pairs, fade = source.matrix, source.clips, source.pairs or [], source.fade
        content = still.content
        if source.mower and view_delay(source.device):
            # Rule 4: the newest image that came at least the view delay ago; none yet, nothing drawn.
            due = time.monotonic() - view_delay(source.device)
            late = [frame for frame in self._frames.get(source.entity) or () if frame[0] <= due]
            if not late:
                return
            content = late[-1][1]
        if source.mower:
            pose = self._pose(source, self._asked(key)[1])
            reach = mower_range(source.device)
            spots = [
                (tuple(s["image"]), tuple(s["ahead"])) for s in (source.device.get("ground") or {}).get("spots") or []
            ]
            calibrated = mower_calibrated(spots, reach, tuple(pose["at"]), pose["heading"]) if pose else None
            if calibrated is None:
                self._remove(key)
                return
            matrix, clips, pairs = calibrated[0], [calibrated[1]], calibrated[2]
            fade = (tuple(pose["at"]), reach)
        try:
            drawn = await self.hass.async_add_executor_job(warp, content, matrix, clips, pairs, fade)
        except (OSError, ValueError) as err:
            _LOGGER.debug("Ground view of %s not drawn: %s", key, err)
            return
        if drawn is None:
            self._remove(key)
            return
        data, box = drawn
        view = {
            "id": key,
            "level": source.level,
            "data": f"data:image/webp;base64,{base64.b64encode(data).decode()}",
            "box": box,
        }
        self.views[key] = view
        async_dispatcher_send(self.hass, SIGNAL_GROUND, view)
