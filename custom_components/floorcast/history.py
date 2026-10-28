"""Where people walked: the positions of tracked people over the last day.

1. A person seen or held gets a new point when they moved MIN_STEP since their last point,
   at most every MIN_GAP seconds, so a person standing still adds nothing.
2. Points older than KEEP or beyond MOST per level go.
3. A walk of one person breaks where their points are more than BREAK seconds apart.

State kept: the points of every level, saved to .storage a few minutes after a change, so they
outlast a restart. They stay in Home Assistant; the editor can clear them.
"""

from __future__ import annotations

import math
from typing import Any

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.storage import Store

from .const import DOMAIN

STORE_KEY = f"{DOMAIN}.history"
STORE_VERSION = 1
SAVE_DELAY = 300
MIN_STEP = 0.3
MIN_GAP = 2.0
KEEP = 24 * 3600
MOST = 20_000
BREAK = 30.0
RECENT = 20.0


class PeopleHistory:
    def __init__(self, hass: HomeAssistant) -> None:
        self._store: Store[dict[str, Any]] = Store(hass, STORE_VERSION, STORE_KEY)
        # Level id: points as [x, y, time in seconds since the epoch, person id].
        self.points: dict[str, list[list[Any]]] = {}
        self._last: dict[tuple[str, str], list[Any]] = {}

    async def async_load(self) -> None:
        stored = await self._store.async_load()
        if stored:
            self.points = stored.get("points") or {}
            for level, points in self.points.items():
                for point in points:
                    self._last[(level, point[3])] = point

    @callback
    def record(self, level: str, people: list[dict[str, Any]], now: float) -> None:
        """Rules 1 and 2 for the people of one cycle of the tracking."""
        points = self.points.setdefault(level, [])
        added = False
        for person in people:
            if person["status"] not in ("seen", "held"):
                continue
            key = (level, str(person["id"]))
            last = self._last.get(key)
            if last and (
                now - last[2] < MIN_GAP or math.hypot(person["x"] - last[0], person["y"] - last[1]) < MIN_STEP
            ):
                continue
            point = [person["x"], person["y"], round(now, 1), str(person["id"])]
            points.append(point)
            self._last[key] = point
            added = True
        if not added:
            return
        cutoff = now - KEEP
        first = next((i for i, p in enumerate(points) if p[2] >= cutoff), len(points))
        del points[: max(first, len(points) - MOST)]
        self._store.async_delay_save(lambda: {"points": self.points}, SAVE_DELAY)

    def recent(self, level: str, person: str, now: float) -> list[list[float]]:
        """The last RECENT seconds of one person, for the short track behind the dot."""
        points = self.points.get(level) or []
        trail = []
        for point in reversed(points):
            if now - point[2] > RECENT:
                break
            if point[3] == person:
                trail.append([point[0], point[1]])
        trail.reverse()
        return trail

    def walks(self, level: str, hours: float, now: float) -> list[list[list[float]]]:
        """Rule 3: the walks of the last hours on a level, each a list of [x, y]."""
        cutoff = now - hours * 3600
        last: dict[str, list[Any]] = {}
        walks: dict[str, list[list[float]]] = {}
        done: list[list[list[float]]] = []
        for point in self.points.get(level) or []:
            if point[2] < cutoff:
                continue
            person = point[3]
            if person in last and point[2] - last[person][2] > BREAK:
                done.append(walks.pop(person))
            walks.setdefault(person, []).append([point[0], point[1]])
            last[person] = point
        done.extend(walks.values())
        return [walk for walk in done if len(walk) > 1]

    @callback
    def clear(self) -> None:
        self.points = {}
        self._last = {}
        self._store.async_delay_save(lambda: {"points": self.points}, 1)
