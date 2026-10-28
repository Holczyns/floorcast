"""People on the plan, from the mmWave radars and the calibrated Frigate cameras placed on it.

Twice a second every source of a level is read: the targets of each radar from its sensors,
and the people each camera tracks (cameras.py). One set of rules places them:

1. A detection outside the field of its source (heading, view, reach) is dropped.
2. A detection inside a room stays where it is. One just outside the rooms the source sees,
   within the snap distance, is moved into the nearest of them: a radar target a metre
   behind a wall stands just before it. A radar target farther out is a reflection and is
   dropped; a camera keeps it, as cameras look at the garden too.
3. Radar targets and camera people go to their own trackers (engine/tracker.py), each with
   its own settings, but with the same entrance, exclude and stationary zones.
4. Counted people of both are counted per room and counting zone. A camera person within the
   merge distance of a radar person is the same person and counts once.
5. A room or zone is occupied while someone is counted in it and for its hold time after; the
   occupancy entities and the cards both show this one state.
6. People positions go to the history of where people walked (history.py); each person carries
   its last seconds from there as its short track.
7. Only what a radar sends counts: a target whose x or y it has not sent for STALE seconds is one
   it lost, though its sensors still hold the last values, and is dropped. So are all targets of
   a radar whose target count is 0.

Counts feed the sensor and binary sensor entities, positions go to the cards through a
websocket subscription. Rooms get a count when some source sees into them. The areas,
trackers and their settings follow the plan whenever it is saved.
"""

from __future__ import annotations

import math
import time
from dataclasses import dataclass
from datetime import timedelta
from functools import partial
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.event import async_call_later, async_track_time_interval
from homeassistant.util import dt as dt_util

from .const import DATA_OBJECTS, SIGNAL_AREAS_CHANGED, SIGNAL_PEOPLE, SIGNAL_PLAN_UPDATED, SIGNAL_POSITIONS
from .engine.geometry import in_view, point_in_polygon, polygon_centre, radar_to_plan, snap_into
from .engine.tracker import Detection, Person, Tracker, TrackerSettings, Zone
from .history import PeopleHistory

INTERVAL = 0.5
TARGETS = 3
STALE = timedelta(seconds=3)
DEFAULT_RANGE = 6.0
DEFAULT_VIEW = 120.0
DEFAULT_CAMERA_RANGE = 8.0
DEFAULT_CAMERA_VIEW = 100.0
DEFAULT_HOLD = 30.0
DEFAULT_SNAP = 1.0
# Cameras lose a person less often than radars and report only on change.
CAMERA_DEFAULTS = {"confirm_delay": 0.5, "lost_hold": 10.0, "smoothing": 0.6}
SETTING_NAMES = (
    "merge_distance",
    "smoothing",
    "confirm_delay",
    "jump_base",
    "jump_speed",
    "stationary_hold",
    "lost_hold",
)

Polygon = tuple[tuple[float, float], ...]


@dataclass(frozen=True)
class Area:
    """A room or counting zone whose people are counted."""

    key: str
    level: str
    id: str
    name: str
    points: Polygon
    hold: float


@dataclass
class Source:
    """A radar or a camera: where it is, what it sees and the rooms in its view."""

    kind: str
    name: str
    at: tuple[float, float]
    heading: float
    view: float
    reach: float
    mirror: bool
    visible: list[Polygon]


@dataclass
class LevelSetup:
    radars: list[Source]
    cameras: list[Source]
    rooms: list[Polygon]
    areas: list[Area]
    entrance: list[Zone]
    exclude: list[Zone]
    stationary: list[Zone]


@dataclass
class KindSettings:
    tracker: TrackerSettings
    snap: float


def _points(raw: Any) -> Polygon:
    return tuple((float(p[0]), float(p[1])) for p in raw or [])


def _settings(values: dict[str, Any], defaults: dict[str, float]) -> KindSettings:
    tracker = TrackerSettings(interval=INTERVAL)
    for name, value in defaults.items():
        setattr(tracker, name, value)
    for name in SETTING_NAMES:
        if isinstance(values.get(name), int | float):
            setattr(tracker, name, float(values[name]))
    if isinstance(values.get("sleep_hours"), int | float):
        tracker.sleep_time = float(values["sleep_hours"]) * 3600
    snap = values.get("snap_distance")
    return KindSettings(tracker, float(snap) if isinstance(snap, int | float) else DEFAULT_SNAP)


def plan_settings(plan: dict[str, Any]) -> dict[str, KindSettings]:
    """Settings of the radar and the camera tracking; the radar ones sit at the top of plan.tracking."""
    tracking = plan.get("tracking") or {}
    return {"radar": _settings(tracking, {}), "camera": _settings(tracking.get("camera") or {}, CAMERA_DEFAULTS)}


def _sees(source: Source, polygon: Polygon) -> bool:
    probes = [polygon_centre(polygon), *polygon]
    return any(in_view(source.at, source.heading, source.view, source.reach, p) for p in probes)


def level_setup(level: dict[str, Any]) -> LevelSetup | None:
    """What tracking needs from a level, or None when it has no radar nor calibrated camera."""
    sources: list[Source] = []
    for device in level.get("devices") or []:
        at = device.get("at")
        if not at:
            continue
        common = {
            "at": (float(at[0]), float(at[1])),
            "heading": float(device.get("heading", 0)),
            "mirror": bool(device.get("mirror")),
            "visible": [],
        }
        if device.get("kind") == "radar" and device.get("source"):
            sources.append(
                Source(
                    "radar",
                    device["source"],
                    view=float(device.get("arc") or DEFAULT_VIEW),
                    reach=float(device.get("radius") or DEFAULT_RANGE),
                    **common,
                )
            )
        elif device.get("kind") == "camera" and device.get("frigate") and len(device.get("calibration") or []) >= 4:
            sources.append(
                Source(
                    "camera",
                    device["frigate"],
                    view=float(device.get("arc") or DEFAULT_CAMERA_VIEW),
                    reach=float(device.get("radius") or DEFAULT_CAMERA_RANGE),
                    **common,
                )
            )
    if not sources:
        return None
    rooms = [_points(room.get("points")) for room in level.get("rooms") or []]
    rooms = [room for room in rooms if len(room) >= 3]
    for source in sources:
        source.visible = [room for room in rooms if _sees(source, room)]
    areas: list[Area] = []
    for room in level.get("rooms") or []:
        points = _points(room.get("points"))
        if len(points) < 3 or room.get("stairs"):
            continue
        # A room gets a count when some source sees its middle or one of its corners.
        if not any(_sees(source, points) for source in sources):
            continue
        hold = room.get("hold")
        areas.append(
            Area(
                f"{level['id']}_{room['id']}",
                level["id"],
                room["id"],
                room.get("name") or room["id"],
                points,
                float(hold) if isinstance(hold, int | float) else DEFAULT_HOLD,
            )
        )
    zones: dict[str, list[Zone]] = {"entrance": [], "exclude": [], "stationary": []}
    for zone in level.get("zones") or []:
        points = _points(zone.get("points"))
        if len(points) < 3:
            continue
        kind = zone.get("kind", "count")
        hold = zone.get("hold") if isinstance(zone.get("hold"), int | float) else None
        if kind == "count":
            areas.append(
                Area(
                    f"{level['id']}_{zone['id']}",
                    level["id"],
                    zone["id"],
                    zone.get("name") or zone["id"],
                    points,
                    hold if hold is not None else DEFAULT_HOLD,
                )
            )
        elif kind in zones:
            zones[kind].append(Zone(points, hold))
    return LevelSetup(
        [s for s in sources if s.kind == "radar"],
        [s for s in sources if s.kind == "camera"],
        rooms,
        areas,
        zones["entrance"],
        zones["exclude"],
        zones["stationary"],
    )


def place(source: Source, p: tuple[float, float], snap: float) -> tuple[float, float] | None:
    """Rules 1 and 2: the plan point of a detection after its field and the rooms it sees, or None."""
    if not in_view(source.at, source.heading, source.view, source.reach, p):
        return None
    snapped = snap_into(p, source.visible, snap) if source.visible else None
    if snapped is not None:
        return snapped
    return p if source.kind == "camera" else None


def counted_once(radar: list[Person], camera: list[Person], merge: float) -> list[Person]:
    """Rule 4: counted people of both trackers, a camera person next to a radar person only once."""
    counted = [p for p in radar if p.counted]
    for person in camera:
        if person.counted and not any(math.hypot(person.x - r.x, person.y - r.y) < merge for r in counted):
            counted.append(person)
    return counted


class PeopleTracking:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any], history: PeopleHistory | None = None) -> None:
        self.hass = hass
        self.history = history
        self.levels: dict[str, LevelSetup] = {}
        self.trackers: dict[str, dict[str, Tracker]] = {}
        self.settings = plan_settings(plan)
        self.people: dict[str, list[dict[str, Any]]] = {}
        # Camera people before the rules, per level and camera, for checking a camera in the editor.
        self.raw: dict[str, dict[str, list[list[float]]]] = {}
        self.counts: dict[str, int] = {}
        # Rule 5: whether each area is occupied, and the timers ending the hold of emptied ones.
        self.occupied: dict[str, bool] = {}
        self._release: dict[str, Any] = {}
        # Count and occupancy of every room and zone, by level and id, for the cards.
        self.area_states: dict[str, dict[str, dict[str, Any]]] = {}
        self.areas: dict[str, Area] = {}
        self._unsubscribe: list = []
        self.configure(plan)

    @callback
    def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))
        self._unsubscribe.append(async_track_time_interval(self.hass, self._cycle, timedelta(seconds=INTERVAL)))

    @callback
    def async_stop(self) -> None:
        for unsubscribe in [*self._unsubscribe, *self._release.values()]:
            unsubscribe()
        self._unsubscribe.clear()
        self._release.clear()

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.settings = plan_settings(plan)
        levels = {}
        for level in plan.get("levels") or []:
            setup = level_setup(level)
            if setup:
                levels[level["id"]] = setup
        # Trackers survive a save of the plan, so people keep their ids while it is edited.
        self.trackers = {
            lid: {kind: self.trackers.get(lid, {}).get(kind) or Tracker() for kind in ("radar", "camera")}
            for lid in levels
        }
        for trackers in self.trackers.values():
            for kind, tracker in trackers.items():
                tracker.settings = self.settings[kind].tracker
        self.levels = levels
        areas = {area.key: area for setup in levels.values() for area in setup.areas}
        changed = areas != self.areas
        self.areas = areas
        self.counts = {key: self.counts.get(key, 0) for key in areas}
        self.occupied = {key: self.occupied.get(key, False) for key in areas}
        self.people = {lid: self.people.get(lid, []) for lid in levels}
        if changed:
            async_dispatcher_send(self.hass, SIGNAL_AREAS_CHANGED)

    def _radar_detections(self, setup: LevelSetup) -> list[Detection]:
        detections = []
        snap = self.settings["radar"].snap
        now = dt_util.utcnow()
        for radar in setup.radars:
            # Rule 7: a radar that counts no target has none, whatever its target sensors still hold.
            if self._number(f"sensor.{radar.name}_presence_target_count") == 0:
                continue
            for i in range(1, TARGETS + 1):
                x = self._millimetres(f"sensor.{radar.name}_target_{i}_x")
                y = self._millimetres(f"sensor.{radar.name}_target_{i}_y")
                if x is None or y is None or (abs(x) < 100 and abs(y) < 100):
                    continue
                if now - self._sent(f"sensor.{radar.name}_target_{i}_x", f"sensor.{radar.name}_target_{i}_y") > STALE:
                    continue
                p = place(radar, radar_to_plan(radar.at, radar.heading, radar.mirror, x, y), snap)
                if p is not None:
                    detections.append(Detection(p[0], p[1], radar.name))
        return detections

    def _camera_detections(self, level_id: str, setup: LevelSetup) -> list[Detection]:
        objects = self.hass.data.get(DATA_OBJECTS)
        if objects is None or not setup.cameras:
            return []
        cameras = {camera.name: camera for camera in setup.cameras}
        snap = self.settings["camera"].snap
        detections = []
        raw: dict[str, list[list[float]]] = {}
        for person in objects.people(level_id):
            raw.setdefault(person["camera"], []).append([person["x"], person["y"]])
            camera = cameras.get(person["camera"])
            p = place(camera, (person["x"], person["y"]), snap) if camera else None
            if p is not None:
                detections.append(Detection(p[0], p[1], person["camera"]))
        self.raw[level_id] = raw
        return detections

    def _number(self, entity_id: str) -> float | None:
        state = self.hass.states.get(entity_id)
        try:
            return float(state.state) if state else None
        except ValueError:
            return None

    def _sent(self, *entity_ids: str) -> Any:
        """Rule 7: when the radar last sent the older of these values, changed or not."""
        return min(self.hass.states.get(entity_id).last_reported for entity_id in entity_ids)

    def _millimetres(self, entity_id: str) -> float | None:
        state = self.hass.states.get(entity_id)
        if state is None:
            return None
        try:
            value = float(state.state)
        except ValueError:
            return None
        unit = state.attributes.get("unit_of_measurement")
        return value * 1000 if unit == "m" else value * 10 if unit == "cm" else value

    @callback
    def _cycle(self, _now: Any = None) -> None:
        now = time.monotonic()
        wall = time.time()
        counts = dict.fromkeys(self.areas, 0)
        raw_before = {level: dict(cameras) for level, cameras in self.raw.items()}
        people_changed = False
        for level_id, setup in self.levels.items():
            zones = (setup.entrance, setup.exclude, setup.stationary)
            trackers = self.trackers[level_id]
            radar = trackers["radar"].update(self._radar_detections(setup), now, *zones)
            camera = trackers["camera"].update(self._camera_detections(level_id, setup), now, *zones)
            for person in counted_once(radar, camera, self.settings["radar"].tracker.merge_distance):
                for area in setup.areas:
                    if point_in_polygon((person.x, person.y), area.points):
                        counts[area.key] += 1
            shown = [
                *(_shown(p, "radar") for p in radar if p.status != "sleeping"),
                *(_shown(p, "camera") for p in camera if p.status != "sleeping"),
            ]
            if self.history is not None:
                self.history.record(level_id, shown, wall)
                for person in shown:
                    person["trail"] = self.history.recent(level_id, person["id"], wall)
            if shown != self.people.get(level_id):
                self.people[level_id] = shown
                people_changed = True
        # Rule 5: someone counted occupies the area at once; an emptied area stays occupied for its hold.
        occupied = {key: self.occupied.get(key, False) for key in self.areas}
        for key, area in self.areas.items():
            if counts[key]:
                occupied[key] = True
                if key in self._release:
                    self._release.pop(key)()
            elif occupied[key] and key not in self._release:
                self._release[key] = async_call_later(self.hass, area.hold, partial(self._released, key))
        self._publish(counts, occupied, people_changed or self.raw != raw_before)

    @callback
    def _released(self, key: str, _now: Any) -> None:
        """The hold of an emptied area is over."""
        self._release.pop(key, None)
        if key in self.occupied and not self.counts.get(key):
            self._publish(self.counts, {**self.occupied, key: False}, False)

    def _publish(self, counts: dict[str, int], occupied: dict[str, bool], people_changed: bool) -> None:
        area_states: dict[str, dict[str, dict[str, Any]]] = {}
        for key, area in self.areas.items():
            area_states.setdefault(area.level, {})[area.id] = {"count": counts[key], "occupied": occupied[key]}
        if counts != self.counts or occupied != self.occupied:
            self.counts = counts
            self.occupied = occupied
            async_dispatcher_send(self.hass, SIGNAL_PEOPLE)
        if people_changed or area_states != self.area_states:
            self.area_states = area_states
            async_dispatcher_send(self.hass, SIGNAL_POSITIONS, self.people, self.raw, self.area_states)


def _shown(person: Person, kind: str) -> dict[str, Any]:
    """A person as the cards get it, with the radars or cameras that see it now; a camera person names its camera."""
    shown: dict[str, Any] = {
        "id": f"{kind[0]}{person.id}",
        "x": round(person.x, 3),
        "y": round(person.y, 3),
        "status": person.status,
        "source": kind,
    }
    if person.status == "seen" and person.sources:
        shown["sources"] = person.sources
        if kind == "camera":
            shown["camera"] = person.sources[0]
    return shown
