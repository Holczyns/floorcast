"""Service floorcast.press: what a tap on the plan does, the same from a card, an automation or a button.

1. A room: all its lights together, off when any is on, otherwise on. Its lights are the light
   points standing in it and the lights it still lists itself.
2. A window or door: a blind stops while it moves, closes when open (even partly), opens when closed.
3. A device: a screen switches its power entity on or off; any other device toggles its entity.

The service runs with the context of the call, so the user who tapped is the one Home Assistant
checks and writes in the logbook.
"""

from __future__ import annotations

from typing import Any

import voluptuous as vol
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.exceptions import ServiceValidationError
from homeassistant.helpers import config_validation as cv

from .const import DOMAIN
from .engine.geometry import point_in_polygon

SERVICE_PRESS = "press"
OFF_STATES = {"off", "standby", "unavailable", "unknown"}
SCHEMA = vol.All(
    vol.Schema(
        {vol.Optional("room"): cv.string, vol.Optional("opening"): cv.string, vol.Optional("device"): cv.string}
    ),
    cv.has_at_least_one_key("room", "opening", "device"),
)


def _find(plan: dict[str, Any], key: str, item_id: str) -> tuple[dict[str, Any], dict[str, Any]] | None:
    for level in plan.get("levels") or []:
        for item in level.get(key) or []:
            if item.get("id") == item_id:
                return level, item
    return None


def _centre(device: dict[str, Any]) -> tuple[float, float]:
    at, to = device["at"], device.get("to")
    return ((at[0] + to[0]) / 2, (at[1] + to[1]) / 2) if to else (at[0], at[1])


def room_lights(level: dict[str, Any], room: dict[str, Any]) -> list[str]:
    """Rule 1: the lights of a room, as the card finds them."""
    placed = [
        device["entity"]
        for device in level.get("devices") or []
        if device.get("kind") == "light" and device.get("entity") and point_in_polygon(_centre(device), room["points"])
    ]
    return list(dict.fromkeys([*placed, *(room.get("lights") or [])]))


def async_register_services(hass: HomeAssistant) -> None:
    async def press(call: ServiceCall) -> None:
        plan = hass.data[DOMAIN].plan
        state = lambda entity: hass.states.get(entity)  # noqa: E731

        async def run(domain: str, service: str, entity: str | list[str]) -> None:
            await hass.services.async_call(domain, service, {"entity_id": entity}, blocking=True, context=call.context)

        if "room" in call.data:
            found = _find(plan, "rooms", call.data["room"])
            if not found:
                raise ServiceValidationError(f"No room {call.data['room']} on the plan")
            lights = room_lights(*found)
            if lights:
                on = any((s := state(e)) is not None and s.state == "on" for e in lights)
                await run("homeassistant", "turn_off" if on else "turn_on", lights)
            return
        if "opening" in call.data:
            found = _find(plan, "openings", call.data["opening"])
            if not found:
                raise ServiceValidationError(f"No window or door {call.data['opening']} on the plan")
            cover = found[1].get("cover")
            current = state(cover) if cover else None
            if current is None:
                return
            position = current.attributes.get("current_position")
            is_open = position > 0 if isinstance(position, int | float) else current.state == "open"
            moving = current.state in ("opening", "closing")
            await run("cover", "stop_cover" if moving else "close_cover" if is_open else "open_cover", cover)
            return
        found = _find(plan, "devices", call.data["device"])
        if not found:
            raise ServiceValidationError(f"No device {call.data['device']} on the plan")
        device = found[1]
        entity = device.get("entity") or device.get("remote")
        if not entity:
            return
        if device.get("kind") == "screen":
            current = state(entity)
            on = current is not None and current.state not in OFF_STATES
            await run(entity.split(".")[0], "turn_off" if on else "turn_on", entity)
            return
        await run("homeassistant", "toggle", entity)

    hass.services.async_register(DOMAIN, SERVICE_PRESS, press, schema=SCHEMA)
