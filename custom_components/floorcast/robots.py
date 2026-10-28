"""Mowers and vacuums on the plan: where they are and where they went, the same for every card.

1. A mower is placed whenever its map camera changes (engine/maps.py).
2. A vacuum does not publish its position as a state, so it is asked for it every few seconds
   while it cleans or returns, and once a minute otherwise; docked it stands on its dock.
3. While a mower mows or a vacuum cleans, a point joins its track whenever it moved a little;
   the track keeps the last points and empties when the robot is back on its dock.
4. A vacuum names the room it cleans through its room sensor, matched to the room names.
5. EXPERIMENTAL: a mower with a position delay (ground settings) is shown that many seconds late, for
   moving it smoothly; its camera image on the ground (ground.py) follows it with its own view delay. Every
   SMOOTH seconds it takes the place it had then; between two reported places, which come every few
   seconds, that place lies on the line between them, so the mower moves smoothly once the delay is
   as long as the time between reports. A change of state is taken as it came, not smoothed.

State kept: the last place and the track of every robot, in memory only, and the reported places of a
delayed mower until they are shown.
Cards get a snapshot when they subscribe and then each change with the new track points.
"""

from __future__ import annotations

import logging
import math
import time
from dataclasses import dataclass, field
from datetime import timedelta
from typing import Any

from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.event import async_track_state_change_event, async_track_time_interval

from .const import SIGNAL_PLAN_UPDATED, SIGNAL_ROBOTS
from .engine.maps import mower_place, robot_to_plan

_LOGGER = logging.getLogger(__name__)

POLL_MOVING = 4.0
POLL_IDLE = 60.0
TICK = 2.0
# Spacing of track points and the most points kept: three times what the cards kept before.
MOWER_STEP, MOWER_POINTS = 0.15, 1200
VACUUM_STEP, VACUUM_POINTS = 0.1, 1800
WORKING = {"mower": "mowing", "vacuum": "cleaning"}
MOST_DELAY = 10.0
SMOOTH = 1.0


@dataclass
class Robot:
    level: str
    device: dict[str, Any]
    place: dict[str, Any] | None = None
    track: list[list[float]] = field(default_factory=list)
    asked: float = 0.0
    robot_point: tuple[float, float] | None = None
    # Rule 5: reported places of a delayed mower, as (monotonic time, place, state), oldest first.
    reports: list[tuple[float, dict[str, Any] | None, str | None]] = field(default_factory=list)

    @property
    def kind(self) -> str:
        return self.device["kind"]

    @property
    def delay(self) -> float:
        """Rule 5: seconds a mower takes each new place late; none for a vacuum."""
        value = (self.device.get("ground") or {}).get("delay") if self.kind == "mower" else None
        return min(max(float(value), 0.0), MOST_DELAY) if isinstance(value, int | float) else 0.0


def robots_of(plan: dict[str, Any]) -> dict[str, Robot]:
    robots = {}
    for level in plan.get("levels") or []:
        for device in level.get("devices") or []:
            if (device.get("kind") == "mower" and device.get("map") and device.get("projection")) or (
                device.get("kind") == "vacuum" and device.get("entity") and device.get("pairs")
            ):
                robots[device["id"]] = Robot(level["id"], device)
    return robots


class RobotTracking:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any]) -> None:
        self.hass = hass
        self.plan = plan
        self.robots: dict[str, Robot] = {}
        self._unsubscribe: list = []
        self._unsubscribe_states: Any = None
        self.configure(plan)

    @callback
    def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))
        self._unsubscribe.append(async_track_time_interval(self.hass, self._tick, timedelta(seconds=TICK)))
        self._unsubscribe.append(async_track_time_interval(self.hass, self._smooth, timedelta(seconds=SMOOTH)))
        self._follow_states()
        for robot in self.robots.values():
            self._update(robot)

    @callback
    def async_stop(self) -> None:
        for unsubscribe in self._unsubscribe:
            unsubscribe()
        self._unsubscribe.clear()
        if self._unsubscribe_states:
            self._unsubscribe_states()
            self._unsubscribe_states = None

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.plan = plan
        # Places and tracks of robots that stay in the plan survive a save of it; a delayed mower keeps
        # its place until the new one comes.
        old = self.robots
        self.robots = robots_of(plan)
        for device_id, robot in self.robots.items():
            if device_id in old:
                robot.place = old[device_id].place
                robot.track = old[device_id].track
                robot.reports = old[device_id].reports
                robot.robot_point = old[device_id].robot_point
                robot.asked = old[device_id].asked
        if self._unsubscribe:
            self._follow_states()
            for robot in self.robots.values():
                self._update(robot)

    def _follow_states(self) -> None:
        if self._unsubscribe_states:
            self._unsubscribe_states()
        entities = set()
        for robot in self.robots.values():
            for key in ("map", "entity", "roomSensor"):
                if robot.device.get(key):
                    entities.add(robot.device[key])
        self._unsubscribe_states = (
            async_track_state_change_event(self.hass, sorted(entities), self._state_changed) if entities else None
        )

    @callback
    def _state_changed(self, event: Event) -> None:
        entity_id = event.data["entity_id"]
        for robot in self.robots.values():
            if entity_id in (robot.device.get("map"), robot.device.get("entity"), robot.device.get("roomSensor")):
                self._update(robot)

    def _state(self, robot: Robot) -> str | None:
        entity = robot.device.get("entity")
        state = self.hass.states.get(entity) if entity else None
        return state.state if state else None

    @callback
    def _tick(self, _now: Any = None) -> None:
        """Rule 2: asks every vacuum that is due for its position."""
        now = time.monotonic()
        for robot in self.robots.values():
            if robot.kind != "vacuum":
                continue
            moving = self._state(robot) in ("cleaning", "returning")
            if now - robot.asked >= (POLL_MOVING if moving else POLL_IDLE):
                robot.asked = now
                self.hass.async_create_task(self._ask_vacuum(robot))

    async def _ask_vacuum(self, robot: Robot) -> None:
        entity = robot.device["entity"]
        try:
            response = await self.hass.services.async_call(
                "roborock",
                "get_vacuum_current_position",
                {"entity_id": entity},
                blocking=True,
                return_response=True,
            )
        except Exception as err:
            _LOGGER.debug("Position of %s not read: %s", entity, err)
            return
        position = (response or {}).get(entity) or {}
        if "x" in position and "y" in position:
            robot.robot_point = (float(position["x"]), float(position["y"]))
            self._update(robot)

    def _rooms(self, level_id: str) -> list[dict[str, Any]]:
        for level in self.plan.get("levels") or []:
            if level["id"] == level_id:
                return level.get("rooms") or []
        return []

    @callback
    def _update(self, robot: Robot) -> None:
        """Rule 5: the place as it is now, taken at once, or kept for _smooth while the mower is delayed."""
        place, state = self._measure(robot)
        if robot.delay <= 0:
            robot.reports.clear()
            self._take(robot, place, state)
            return
        # The map camera changes more often than the mower moves; only a new place or state is a report,
        # timed when it first came, so the mower glides over the whole time between reports.
        if robot.reports and robot.reports[-1][1] == place and robot.reports[-1][2] == state:
            return
        robot.reports.append((time.monotonic(), place, state))

    @callback
    def _smooth(self, _now: Any = None) -> None:
        """Rule 5: every delayed mower takes the place it had its delay ago, between the reports around it."""
        now = time.monotonic()
        for robot in self.robots.values():
            if robot.delay <= 0 or not robot.reports:
                continue
            target = now - robot.delay
            earlier = [i for i, report in enumerate(robot.reports) if report[0] <= target]
            if not earlier:
                continue
            i = earlier[-1]
            del robot.reports[:i]
            then, place, state = robot.reports[0]
            if len(robot.reports) > 1:
                after, next_place, next_state = robot.reports[1]
                if state == next_state and place and next_place and after > then:
                    place = between(place, next_place, (target - then) / (after - then))
            self._take(robot, place, state)

    def _measure(self, robot: Robot) -> tuple[dict[str, Any] | None, str | None]:
        """Rules 1 and 4: where the robot is now, with its state and the room it cleans."""
        state = self._state(robot)
        if robot.kind == "mower":
            camera = self.hass.states.get(robot.device["map"])
            place = mower_place(robot.device, camera.attributes if camera else None)
        else:
            dock = robot_to_plan(robot.device, tuple(robot.device["pairs"][0]["robot"]))
            here = robot_to_plan(robot.device, robot.robot_point) if robot.robot_point else None
            at = dock if state == "docked" or here is None else here
            place = (
                {"at": [round(at[0], 3), round(at[1], 3)], "dock": [round(dock[0], 3), round(dock[1], 3)]}
                if at
                else None
            )
            room = self._cleaned_room(robot) if place and state == "cleaning" else None
            if place and room:
                place["room"] = room
        if place is not None:
            place["state"] = state
        return place, state

    @callback
    def _take(self, robot: Robot, place: dict[str, Any] | None, state: str | None) -> None:
        """Rule 3: the robot takes its new place; a new track point while working."""
        reset = state == "docked" and bool(robot.track)
        if reset:
            robot.track = []
        added: list[list[float]] = []
        if place and state == WORKING[robot.kind]:
            step, most = (MOWER_STEP, MOWER_POINTS) if robot.kind == "mower" else (VACUUM_STEP, VACUUM_POINTS)
            last = robot.track[-1] if robot.track else None
            if not last or math.hypot(last[0] - place["at"][0], last[1] - place["at"][1]) > step:
                added.append(list(place["at"]))
                robot.track.append(list(place["at"]))
                del robot.track[:-most]
        if place == robot.place and not added and not reset:
            return
        robot.place = place
        async_dispatcher_send(
            self.hass,
            SIGNAL_ROBOTS,
            {"id": robot.device["id"], "level": robot.level, "place": place, "added": added, "reset": reset},
        )

    def _cleaned_room(self, robot: Robot) -> str | None:
        sensor = robot.device.get("roomSensor")
        state = self.hass.states.get(sensor) if sensor else None
        if state is None:
            return None
        name = state.state.strip().lower()
        for room in self._rooms(robot.level):
            if (room.get("name") or "").strip().lower() == name:
                return room["id"]
        return None

    def snapshot(self) -> dict[str, dict[str, Any]]:
        """Every robot with its place and whole track, by level, for a card that subscribes."""
        levels: dict[str, dict[str, Any]] = {}
        for device_id, robot in self.robots.items():
            levels.setdefault(robot.level, {})[device_id] = {"place": robot.place, "track": robot.track}
        return levels


def between(a: dict[str, Any], b: dict[str, Any], f: float) -> dict[str, Any]:
    """Rule 5: a place a part f of the way from a to b; the heading turns the short way."""
    place = dict(a)
    place["at"] = [round(a["at"][i] + (b["at"][i] - a["at"][i]) * f, 3) for i in (0, 1)]
    if a.get("heading") is not None and b.get("heading") is not None:
        turn = (b["heading"] - a["heading"] + 180) % 360 - 180
        place["heading"] = round(a["heading"] + turn * f, 1)
    return place
