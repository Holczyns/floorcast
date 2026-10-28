"""Storage of the floor plan drawn in the panel.

The plan is one JSON document in metres: levels with walls, openings,
rooms and items. The integration keeps it as it is; only the panel and
the card read its contents. Validation here only guards the shape the
card depends on and the size of the document.
"""

from __future__ import annotations

import json
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.storage import Store

from .const import SIGNAL_PLAN_UPDATED, STORE_KEY, STORE_VERSION

MAX_PLAN_BYTES = 1_000_000
LEVEL_LISTS = ("walls", "openings", "rooms", "items", "devices", "zones")
EMPTY_PLAN: dict[str, Any] = {
    "levels": [
        {
            "id": "ground",
            "name": "Ground floor",
            "walls": [],
            "openings": [],
            "rooms": [],
            "items": [],
        }
    ]
}


class PlanStore:
    def __init__(self, hass: HomeAssistant) -> None:
        self._hass = hass
        self._store: Store[dict[str, Any]] = Store(hass, STORE_VERSION, STORE_KEY)
        self.plan: dict[str, Any] = EMPTY_PLAN

    async def async_load(self) -> None:
        stored = await self._store.async_load()
        if stored is not None:
            self.plan = stored

    async def async_save(self, plan: dict[str, Any]) -> None:
        validate_plan(plan)
        self.plan = plan
        await self._store.async_save(plan)
        async_dispatcher_send(self._hass, SIGNAL_PLAN_UPDATED, plan)


def validate_plan(plan: Any) -> None:
    if not isinstance(plan, dict):
        raise HomeAssistantError("The plan must be an object")
    levels = plan.get("levels")
    if not isinstance(levels, list) or not levels:
        raise HomeAssistantError("The plan needs at least one level")
    ids: set[str] = set()
    for level in levels:
        if not isinstance(level, dict) or not isinstance(level.get("id"), str):
            raise HomeAssistantError("Every level needs an id")
        if level["id"] in ids:
            raise HomeAssistantError(f"Level id {level['id']} is used twice")
        ids.add(level["id"])
        for key in LEVEL_LISTS:
            if not isinstance(level.get(key, []), list):
                raise HomeAssistantError(f"{key} of level {level['id']} must be a list")
    if len(json.dumps(plan)) > MAX_PLAN_BYTES:
        raise HomeAssistantError("The plan is too large")
