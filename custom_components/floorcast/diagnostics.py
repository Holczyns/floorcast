"""Diagnostics of FloorCast: what the plan holds and what the tracking sees, without names, ids or geometry."""

from __future__ import annotations

from collections import Counter
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant

from .const import DATA_PEOPLE, DATA_ROBOTS, DOMAIN


def _level_summary(level: dict[str, Any]) -> dict[str, Any]:
    devices = level.get("devices") or []
    openings = level.get("openings") or []
    return {
        "walls": len(level.get("walls") or []),
        "rooms": len(level.get("rooms") or []),
        "openings": dict(Counter(opening.get("type") for opening in openings)),
        "openings_with_contact": sum(1 for opening in openings if opening.get("contact")),
        "openings_with_cover": sum(1 for opening in openings if opening.get("cover")),
        "items": len(level.get("items") or []),
        "zones": dict(Counter(zone.get("kind") for zone in level.get("zones") or [])),
        "devices": dict(Counter(device.get("kind") for device in devices)),
        # A radar names its sensors by source and has no entity of its own.
        "devices_without_entity": sum(
            1 for device in devices if device.get("kind") != "radar" and not device.get("entity")
        ),
    }


async def async_get_config_entry_diagnostics(hass: HomeAssistant, entry: ConfigEntry) -> dict[str, Any]:
    plan = hass.data[DOMAIN].plan
    tracking = hass.data.get(DATA_PEOPLE)
    robots = hass.data.get(DATA_ROBOTS)
    return {
        "plan": {
            "levels": [_level_summary(level) for level in plan.get("levels", [])],
            "tracking_settings": plan.get("tracking") or {},
        },
        "tracking": None
        if tracking is None
        else {
            "counted_areas": len(tracking.areas),
            "occupied_areas": sum(1 for occupied in tracking.occupied.values() if occupied),
            "people": sum(len(people) for people in tracking.people.values()),
        },
        "robots": None
        if robots is None
        else {"placed": sum(1 for robot in robots.robots.values() if getattr(robot, "place", None))},
    }
