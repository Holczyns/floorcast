"""Geometry of the plan in metres: polygons and where a radar target lies.

The plan has x to the east and y to the south. Bearings are compass bearings in
degrees, clockwise from north. These functions match the card and the editor.
"""

from __future__ import annotations

import math
from collections.abc import Sequence

Point = tuple[float, float]


def point_in_polygon(p: Point, polygon: Sequence[Sequence[float]]) -> bool:
    """Even-odd rule; points on a horizontal edge never raise, unlike a naive crossing test."""
    if len(polygon) < 3:
        return False
    x, y = p
    inside = False
    j = len(polygon) - 1
    for i in range(len(polygon)):
        xi, yi = polygon[i][0], polygon[i][1]
        xj, yj = polygon[j][0], polygon[j][1]
        if (yi > y) != (yj > y) and x < (xj - xi) * (y - yi) / (yj - yi) + xi:
            inside = not inside
        j = i
    return inside


def polygon_centre(polygon: Sequence[Sequence[float]]) -> Point:
    xs = [p[0] for p in polygon]
    ys = [p[1] for p in polygon]
    return ((min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2)


def radar_to_plan(at: Point, heading: float, mirror: bool, x_mm: float, y_mm: float) -> Point:
    """Plan point of a target: the radar looks along its heading, its x axis points to its right."""
    h = math.radians(heading)
    ahead = (math.sin(h), -math.cos(h))
    right = (math.cos(h), math.sin(h))
    side = (-x_mm if mirror else x_mm) / 1000
    forward = y_mm / 1000
    return (at[0] + right[0] * side + ahead[0] * forward, at[1] + right[1] * side + ahead[1] * forward)


def in_view(at: Point, heading: float, view: float, reach: float, p: Point) -> bool:
    """True when the point lies within reach and within the angle the radar sees, with a small margin."""
    dx = p[0] - at[0]
    dy = p[1] - at[1]
    if math.hypot(dx, dy) > reach:
        return False
    bearing = math.degrees(math.atan2(dx, -dy)) % 360
    off = (bearing - heading + 180) % 360 - 180
    return abs(off) <= view / 2 + 10


def _nearest_on_segment(p: Point, a: Sequence[float], b: Sequence[float]) -> Point:
    dx, dy = b[0] - a[0], b[1] - a[1]
    length = dx * dx + dy * dy
    k = 0.0 if length == 0 else max(0.0, min(1.0, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / length))
    return (a[0] + k * dx, a[1] + k * dy)


INSIDE = 0.1


def snap_into(p: Point, areas: Sequence[Sequence[Sequence[float]]], limit: float) -> Point | None:
    """The point itself when it lies in an area; else the nearest point a little inside the
    nearest area edge, when that edge is within the limit; else None."""
    if any(point_in_polygon(p, area) for area in areas):
        return p
    best: Point | None = None
    best_distance = limit
    best_area: Sequence[Sequence[float]] | None = None
    for area in areas:
        for i in range(len(area)):
            q = _nearest_on_segment(p, area[i], area[(i + 1) % len(area)])
            d = math.hypot(q[0] - p[0], q[1] - p[1])
            if d <= best_distance:
                best, best_distance, best_area = q, d, area
    if best is None or best_area is None:
        return None
    # A little past the edge towards the inside, so the point lies in the area, not on its edge.
    dx, dy = best[0] - p[0], best[1] - p[1]
    d = math.hypot(dx, dy) or 1.0
    inside = (best[0] + dx / d * INSIDE, best[1] + dy / d * INSIDE)
    if point_in_polygon(inside, best_area):
        return inside
    centre = polygon_centre(best_area)
    towards = math.hypot(centre[0] - best[0], centre[1] - best[1]) or 1.0
    return (best[0] + (centre[0] - best[0]) / towards * INSIDE, best[1] + (centre[1] - best[1]) / towards * INSIDE)
