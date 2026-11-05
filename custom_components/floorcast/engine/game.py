"""The lamp game, without Home Assistant: which lamps take part, which lights next, and when someone reached it.

1. A target is one chosen light entity with all its light points on the plan; a strip counts along its length.
2. Only points some radar or camera sees take part; an entity without such a point never lights.
3. The next target is drawn at random, never the one just reached, and never one with someone already within
   REACH of it, so a person sitting by a lamp does not score at once.
4. A target is reached when a person seen now stands within REACH of any of its points.

Everything is computed again from its arguments; nothing is kept between calls.
"""

from __future__ import annotations

import math
import random
from collections.abc import Callable, Iterable, Sequence
from dataclasses import dataclass
from typing import Any

from .geometry import in_view

REACH = 1.0
DEFAULT_GOAL = 10
Point = tuple[float, float]
# A light point: one end, and the other end of a strip (the same point for a lamp).
Segment = tuple[Point, Point]


@dataclass(frozen=True)
class Viewer:
    """A radar or camera of a level: where it stands and what it sees."""

    at: Point
    heading: float
    view: float
    reach: float


@dataclass(frozen=True)
class Target:
    """Rule 1: a light entity of the game with its seen points, by level."""

    entity: str
    points: tuple[tuple[str, Segment], ...]


def settings(plan: dict[str, Any]) -> tuple[bool, list[str], int]:
    """Whether the game is on, its chosen light entities and the points to win, as the plan sets them."""
    game = plan.get("game") or {}
    lights = [entity for entity in game.get("lights") or [] if isinstance(entity, str)]
    goal = game.get("goal")
    goal = int(goal) if isinstance(goal, int | float) and goal >= 1 else DEFAULT_GOAL
    return bool(game.get("enabled")), list(dict.fromkeys(lights)), goal


def _segment(device: dict[str, Any]) -> Segment:
    at = (float(device["at"][0]), float(device["at"][1]))
    to = device.get("to")
    return (at, (float(to[0]), float(to[1])) if to else at)


def _seen(segment: Segment, viewers: Sequence[Viewer]) -> bool:
    a, b = segment
    probes = [a, b, ((a[0] + b[0]) / 2, (a[1] + b[1]) / 2)]
    return any(in_view(v.at, v.heading, v.view, v.reach, p) for v in viewers for p in probes)


def targets(plan: dict[str, Any], chosen: Iterable[str], viewers: dict[str, Sequence[Viewer]]) -> list[Target]:
    """Rules 1 and 2: the chosen entities with the light points a radar or camera sees, in the order chosen."""
    found: list[Target] = []
    for entity in chosen:
        points = [
            (level["id"], _segment(device))
            for level in plan.get("levels") or []
            for device in level.get("devices") or []
            if device.get("kind") == "light" and device.get("entity") == entity and device.get("at")
        ]
        seen = tuple((level, segment) for level, segment in points if _seen(segment, viewers.get(level, ())))
        if seen:
            found.append(Target(entity, seen))
    return found


def _distance(p: Point, segment: Segment) -> float:
    (ax, ay), (bx, by) = segment
    dx, dy = bx - ax, by - ay
    length = dx * dx + dy * dy
    t = 0.0 if length == 0 else max(0.0, min(1.0, ((p[0] - ax) * dx + (p[1] - ay) * dy) / length))
    return math.hypot(p[0] - (ax + t * dx), p[1] - (ay + t * dy))


def near(target: Target, people: dict[str, list[dict[str, Any]]], statuses: tuple[str, ...]) -> bool:
    """Whether a person of the given statuses stands within REACH of any point of the target."""
    return any(
        _distance((person["x"], person["y"]), segment) <= REACH
        for level, segment in target.points
        for person in people.get(level) or []
        if person.get("status") in statuses
    )


def reached(target: Target, people: dict[str, list[dict[str, Any]]]) -> bool:
    """Rule 4: someone seen now stands at the target."""
    return near(target, people, ("seen",))


def pick(
    found: Sequence[Target],
    previous: str | None,
    people: dict[str, list[dict[str, Any]]],
    choose: Callable[[Sequence[Target]], Target] = random.choice,
) -> Target | None:
    """Rule 3: a random target other than the previous one with nobody at it; None while there is none."""
    free = [t for t in found if t.entity != previous and not near(t, people, ("seen", "held"))]
    return choose(free) if free else None
