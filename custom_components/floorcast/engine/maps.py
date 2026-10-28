"""Where a mower or a vacuum stands on the plan, from the coordinates of its own map.

The same calculations as the editor (model.ts, render.ts), so a calibration made there
places the robot here exactly as it is drawn.

Mower: the Dreame integration gives millimetres of its map and the projection of the map
image; the image lies on the plan at the calibrated corner, turned and maybe mirrored.
Vacuum: Roborock gives millimetres of its map; pairs of the same spot in its map and on the
plan place it, one pair with the set rotation, two pairs with their own.
"""

from __future__ import annotations

import math
from collections.abc import Mapping
from typing import Any

Point = tuple[float, float]


def rotate(p: Point, origin: Point, degrees: float) -> Point:
    r = math.radians(degrees)
    dx, dy = p[0] - origin[0], p[1] - origin[1]
    return (origin[0] + dx * math.cos(r) - dy * math.sin(r), origin[1] + dx * math.sin(r) + dy * math.cos(r))


def map_pixel(projection: Mapping[str, float], x: float, y: float) -> Point:
    """Pixel of the mower map image for a position in millimetres."""
    scale = projection["scale"]
    return (
        projection["padding"] + (projection["maxX"] - x) * scale,
        projection["padding"] + (y - projection["minY"]) * scale,
    )


def map_to_plan(mower: Mapping[str, Any], pixel: Point) -> Point:
    """Plan point of a pixel of the mower map, through the calibration stored on the mower."""
    projection = mower["projection"]
    metres_per_pixel = 1 / (projection["scale"] * 1000)
    u = (projection["width"] - pixel[0] if mower.get("mirror") else pixel[0]) * metres_per_pixel
    v = pixel[1] * metres_per_pixel
    turned = rotate((u, v), (0.0, 0.0), float(mower.get("rotation") or 0))
    return (mower["at"][0] + turned[0], mower["at"][1] + turned[1])


def _number(value: Any) -> float | None:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if math.isfinite(number) else None


def mower_place(mower: Mapping[str, Any], attributes: Mapping[str, Any] | None) -> dict[str, Any] | None:
    """Plan point, heading (degrees, 0 east, clockwise) and dock of a mower; None without a calibration or position."""
    if not mower.get("projection") or not attributes:
        return None
    projection = mower["projection"]
    # The runtime pose follows the mower while it works; the reported position can stay at its
    # last known place for hours, so it only stands in when there is no pose.
    live = (
        _number(attributes.get("runtime_pose_x")) is not None and _number(attributes.get("runtime_pose_y")) is not None
    )
    x = _number(attributes.get("runtime_pose_x" if live else "position_x"))
    y = _number(attributes.get("runtime_pose_y" if live else "position_y"))
    if x is None or y is None:
        return None
    at = map_to_plan(mower, map_pixel(projection, x, y))
    place: dict[str, Any] = {"at": [round(at[0], 3), round(at[1], 3)]}
    heading = _number(attributes.get("runtime_heading_deg" if live else "position_heading"))
    if heading is not None:
        # Heading in the map frame, turned into the plan frame by mapping a point ahead of the mower.
        r = math.radians(heading)
        ahead = map_to_plan(mower, map_pixel(projection, x + math.cos(r) * 300, y + math.sin(r) * 300))
        place["heading"] = round(math.degrees(math.atan2(ahead[1] - at[1], ahead[0] - at[0])), 1)
    cx, cy = _number(attributes.get("charger_x")), _number(attributes.get("charger_y"))
    charger = (cx, cy) if cx is not None and cy is not None else mower.get("dock")
    if charger:
        dock = map_to_plan(mower, map_pixel(projection, float(charger[0]), float(charger[1])))
        place["dock"] = [round(dock[0], 3), round(dock[1], 3)]
    return place


def robot_to_plan(vacuum: Mapping[str, Any], robot: Point) -> Point | None:
    """Plan point of a vacuum position in millimetres, from its calibration pairs; None without one."""
    pairs = vacuum.get("pairs") or []
    if not pairs:
        return None

    def flip(p: Any) -> Point:
        return (float(p[0]) / 1000, (1 if vacuum.get("mirror") else -1) * (float(p[1]) / 1000))

    angle = float(vacuum.get("rotation") or 0)
    first = flip(pairs[0]["robot"])
    origin = (float(pairs[0]["plan"][0]), float(pairs[0]["plan"][1]))
    if len(pairs) > 1:
        second = flip(pairs[1]["robot"])
        r = (second[0] - first[0], second[1] - first[1])
        q = (float(pairs[1]["plan"][0]) - origin[0], float(pairs[1]["plan"][1]) - origin[1])
        angle = math.degrees(math.atan2(q[1], q[0]) - math.atan2(r[1], r[0]))
    here = flip(robot)
    local = rotate((here[0] - first[0], here[1] - first[1]), (0.0, 0.0), angle)
    return (origin[0] + local[0], origin[1] + local[1])
