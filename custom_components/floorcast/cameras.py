"""Objects Frigate tracks, placed on the plan through the calibration of each camera.

Frigate sends every change of a tracked object to MQTT (frigate/events). The middle
of the bottom edge of its box is where it stands; the homography of the camera on the
plan (engine/homography.py) turns that image point into a plan point. People are handed to
the people tracking (people.py), which places and counts them together with the radar
targets; other objects (cars, animals) go to the cards through a websocket subscription.

A camera is active while it sees a person or an object and for ACTIVE seconds after its last
event; the cards open its still by this one state.

State kept: the objects of the last events, dropped on their end event or after
STALE seconds without news, as a still object is reported rarely; the time of the last
event of every camera.
"""

from __future__ import annotations

import json
import logging
import time
from dataclasses import dataclass
from datetime import timedelta
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.event import async_track_time_interval

from .const import SIGNAL_OBJECTS, SIGNAL_PLAN_UPDATED
from .engine.homography import Matrix, apply, homography

_LOGGER = logging.getLogger(__name__)

STALE = 30.0
ACTIVE = 15.0
FRIGATE = "frigate"
PERSON = "person"


@dataclass
class CameraSetup:
    level: str
    matrix: Matrix
    # Detect resolution typed in the editor; otherwise the one Frigate reports.
    size: tuple[float, float] | None


def frigate_config(hass: HomeAssistant) -> dict[str, Any]:
    """Configuration the Frigate integration read from its server; empty when it is not set up."""
    for value in (hass.data.get(FRIGATE) or {}).values():
        if isinstance(value, dict) and isinstance(value.get("config"), dict):
            return value["config"]
    return {}


def detect_size(hass: HomeAssistant, camera: str) -> tuple[float, float] | None:
    detect = ((frigate_config(hass).get("cameras") or {}).get(camera) or {}).get("detect") or {}
    if detect.get("width") and detect.get("height"):
        return (float(detect["width"]), float(detect["height"]))
    return None


def camera_setups(hass: HomeAssistant, plan: dict[str, Any]) -> dict[str, CameraSetup]:
    """Calibrated cameras of the plan by their Frigate name."""
    setups: dict[str, CameraSetup] = {}
    for level in plan.get("levels") or []:
        for device in level.get("devices") or []:
            if device.get("kind") != "camera" or not device.get("frigate"):
                continue
            pairs = [
                ((float(p["image"][0]), float(p["image"][1])), (float(p["plan"][0]), float(p["plan"][1])))
                for p in device.get("calibration") or []
            ]
            matrix = homography(pairs)
            if matrix is None:
                continue
            own = device.get("detect")
            size = (float(own[0]), float(own[1])) if own else None
            setups[device["frigate"]] = CameraSetup(level["id"], matrix, size)
    return setups


class CameraObjects:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any]) -> None:
        self.hass = hass
        self.cameras: dict[str, CameraSetup] = {}
        # Object id: level, plan point, label, camera, stationary flag, time of the last event.
        self._objects: dict[str, dict[str, Any]] = {}
        self.objects: dict[str, list[dict[str, Any]]] = {}
        self.active: list[str] = []
        self._last_event: dict[str, float] = {}
        self._unsubscribe: list = []
        self.configure(plan)

    async def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))
        self._unsubscribe.append(async_track_time_interval(self.hass, self._expire, timedelta(seconds=1)))
        if "mqtt" not in self.hass.config.components:
            _LOGGER.info("MQTT is not set up; objects of Frigate are not shown")
            return
        from homeassistant.components import mqtt

        prefix = (frigate_config(self.hass).get("mqtt") or {}).get("topic_prefix") or FRIGATE
        self._unsubscribe.append(await mqtt.async_subscribe(self.hass, f"{prefix}/events", self._event))

    @callback
    def async_stop(self) -> None:
        for unsubscribe in self._unsubscribe:
            unsubscribe()
        self._unsubscribe.clear()

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.cameras = camera_setups(self.hass, plan)

    @callback
    def _event(self, message: Any) -> None:
        try:
            event = json.loads(message.payload)
        except ValueError:
            return
        after = event.get("after") or {}
        object_id = after.get("id")
        if not object_id:
            return
        if after.get("camera"):
            self._last_event[after["camera"]] = time.monotonic()
        if event.get("type") == "end" or after.get("false_positive"):
            self._drop(object_id)
            return
        setup = self.cameras.get(after.get("camera"))
        box = after.get("box")
        if setup is None or not box or len(box) != 4:
            return
        size = setup.size or detect_size(self.hass, after["camera"])
        if size is None:
            return
        width, height = size
        foot = ((box[0] + box[2]) / 2 / width, box[3] / height)
        point = apply(setup.matrix, foot)
        if point is None:
            return
        self._objects[object_id] = {
            "level": setup.level,
            "id": object_id,
            "x": round(point[0], 3),
            "y": round(point[1], 3),
            "label": after.get("label"),
            "camera": after.get("camera"),
            "stationary": bool(after.get("stationary")),
            "seen": time.monotonic(),
        }
        self._publish(people_only=after.get("label") == PERSON)

    def _drop(self, object_id: str) -> None:
        dropped = self._objects.pop(object_id, None)
        if dropped is not None:
            self._publish(people_only=dropped["label"] == PERSON)

    def people(self, level: str) -> list[dict[str, Any]]:
        """People the cameras of the level see now, for the people tracking."""
        return [obj for obj in self._objects.values() if obj["level"] == level and obj["label"] == PERSON]

    @callback
    def _expire(self, _now: Any = None) -> None:
        limit = time.monotonic() - STALE
        stale = [key for key, obj in self._objects.items() if obj["seen"] < limit]
        for key in stale:
            del self._objects[key]
        self._publish(people_only=not stale)

    def _publish(self, people_only: bool = False) -> None:
        """Sends the objects other than people and the active cameras, when either changed."""
        now = time.monotonic()
        seeing = {obj["camera"] for obj in self._objects.values()}
        active = sorted(name for name in self._last_event if name in seeing or now - self._last_event[name] < ACTIVE)
        if people_only and active == self.active:
            return
        self.active = active
        objects: dict[str, list[dict[str, Any]]] = {}
        for obj in self._objects.values():
            if obj["label"] == PERSON:
                continue
            shown = {key: value for key, value in obj.items() if key not in ("level", "seen")}
            objects.setdefault(obj["level"], []).append(shown)
        self.objects = objects
        async_dispatcher_send(self.hass, SIGNAL_OBJECTS, objects, active)
