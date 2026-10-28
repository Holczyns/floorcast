"""Websocket commands of the panel and the card.

Reading and following the plan is open to every user, since the card shows
it on dashboards; saving a plan requires an administrator.
"""

from __future__ import annotations

import time
from typing import Any

import voluptuous as vol
from homeassistant.components import websocket_api
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.dispatcher import async_dispatcher_connect

from .cameras import detect_size, frigate_config
from .const import (
    DATA_GROUND,
    DATA_HISTORY,
    DATA_OBJECTS,
    DATA_PEOPLE,
    DATA_ROBOTS,
    DATA_STILLS,
    DOMAIN,
    SIGNAL_GROUND,
    SIGNAL_OBJECTS,
    SIGNAL_PLAN_UPDATED,
    SIGNAL_POSITIONS,
    SIGNAL_ROBOTS,
    SIGNAL_STILL,
)
from .plan import PlanStore


@callback
def async_register_commands(hass: HomeAssistant) -> None:
    for command in (
        ws_get_plan,
        ws_save_plan,
        ws_subscribe_plan,
        ws_subscribe_people,
        ws_subscribe_objects,
        ws_subscribe_robots,
        ws_subscribe_still,
        ws_subscribe_ground,
        ws_get_history,
        ws_clear_history,
        ws_frigate_cameras,
    ):
        websocket_api.async_register_command(hass, command)


def _store(hass: HomeAssistant) -> PlanStore:
    return hass.data[DOMAIN]


@websocket_api.websocket_command({vol.Required("type"): "floorcast/plan/get"})
@callback
def ws_get_plan(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    connection.send_result(msg["id"], {"plan": _store(hass).plan})


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): "floorcast/plan/save", vol.Required("plan"): dict})
@websocket_api.async_response
async def ws_save_plan(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    try:
        await _store(hass).async_save(msg["plan"])
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "invalid_plan", str(err))
        return
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "floorcast/plan/subscribe"})
@callback
def ws_subscribe_plan(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    @callback
    def forward(plan: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"plan": plan}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_PLAN_UPDATED, forward)
    connection.send_result(msg["id"])
    forward(_store(hass).plan)


@websocket_api.websocket_command({vol.Required("type"): "floorcast/people/subscribe"})
@callback
def ws_subscribe_people(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """People the tracking follows, per level, and the camera people before the rules; sent on every change."""

    @callback
    def forward(people: dict[str, list[dict[str, Any]]], raw: dict[str, Any], areas: dict[str, Any]) -> None:
        message = {"people": people, "raw": raw, "areas": areas}
        connection.send_message(websocket_api.event_message(msg["id"], message))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_POSITIONS, forward)
    connection.send_result(msg["id"])
    tracking = hass.data.get(DATA_PEOPLE)
    if tracking:
        forward(tracking.people, tracking.raw, tracking.area_states)
    else:
        forward({}, {}, {})


@websocket_api.websocket_command({vol.Required("type"): "floorcast/objects/subscribe"})
@callback
def ws_subscribe_objects(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Objects Frigate tracks, per level, placed through the calibrated cameras."""

    @callback
    def forward(objects: dict[str, list[dict[str, Any]]], active: list[str]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"objects": objects, "active": active}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_OBJECTS, forward)
    connection.send_result(msg["id"])
    objects = hass.data.get(DATA_OBJECTS)
    forward(objects.objects if objects else {}, objects.active if objects else [])


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): "floorcast/frigate/cameras"})
@callback
def ws_frigate_cameras(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Cameras of Frigate with their detect resolution, for the calibration in the editor."""
    names = sorted((frigate_config(hass).get("cameras") or {}).keys())
    connection.send_result(msg["id"], {"cameras": [{"name": name, "size": detect_size(hass, name)} for name in names]})


@websocket_api.websocket_command({vol.Required("type"): "floorcast/robots/subscribe"})
@callback
def ws_subscribe_robots(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Mowers and vacuums: first every robot with its whole track, then each change with the new track points."""

    @callback
    def forward(change: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"change": change}))

    connection.subscriptions[msg["id"]] = async_dispatcher_connect(hass, SIGNAL_ROBOTS, forward)
    connection.send_result(msg["id"])
    robots = hass.data.get(DATA_ROBOTS)
    connection.send_message(websocket_api.event_message(msg["id"], {"snapshot": robots.snapshot() if robots else {}}))


@websocket_api.websocket_command(
    {
        vol.Required("type"): "floorcast/history/get",
        vol.Required("level"): str,
        vol.Optional("hours", default=24): vol.All(vol.Coerce(float), vol.Range(min=0.1, max=24)),
    }
)
@callback
def ws_get_history(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Walks of people on a level over the last hours, each a list of plan points."""
    history = hass.data.get(DATA_HISTORY)
    walks = history.walks(msg["level"], msg["hours"], time.time()) if history else []
    connection.send_result(msg["id"], {"walks": walks})


@websocket_api.require_admin
@websocket_api.websocket_command({vol.Required("type"): "floorcast/history/clear"})
@callback
def ws_clear_history(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    history = hass.data.get(DATA_HISTORY)
    if history:
        history.clear()
    connection.send_result(msg["id"])


@websocket_api.websocket_command({vol.Required("type"): "floorcast/still/subscribe", vol.Required("entity_id"): str})
@callback
def ws_subscribe_still(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """A small image of a camera, the last one at once and a new one about every second while subscribed."""
    stills = hass.data.get(DATA_STILLS)
    if stills is None:
        connection.send_error(msg["id"], "not_ready", "FloorCast is not set up")
        return
    entity_id = msg["entity_id"]
    if not entity_id.startswith("camera.") or hass.states.get(entity_id) is None:
        connection.send_error(msg["id"], "not_found", f"No camera {entity_id}")
        return

    @callback
    def forward(image: dict[str, Any]) -> None:
        connection.send_message(websocket_api.event_message(msg["id"], {"image": image}))

    disconnect = async_dispatcher_connect(hass, f"{SIGNAL_STILL}_{entity_id}", forward)

    @callback
    def unsubscribe() -> None:
        disconnect()
        stills.unsubscribe(entity_id)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])
    image = stills.subscribe(entity_id)
    if image:
        forward(image)


@websocket_api.websocket_command(
    {
        vol.Required("type"): "floorcast/ground/subscribe",
        vol.Required("devices"): [str],
        vol.Optional("preview", default=False): bool,
    }
)
@callback
def ws_subscribe_ground(hass: HomeAssistant, connection: websocket_api.ActiveConnection, msg: dict[str, Any]) -> None:
    """Experimental: camera images of these devices laid on the ground, now and each new one; preview also
    lays a mower in its dock."""
    ground = hass.data.get(DATA_GROUND)
    if ground is None:
        connection.send_error(msg["id"], "not_ready", "FloorCast is not set up")
        return
    devices = set(msg["devices"])

    @callback
    def forward(view: dict[str, Any]) -> None:
        if view["id"] in devices:
            connection.send_message(websocket_api.event_message(msg["id"], {"view": view}))

    disconnect = async_dispatcher_connect(hass, SIGNAL_GROUND, forward)
    token, views = ground.subscribe(sorted(devices), msg["preview"])

    @callback
    def unsubscribe() -> None:
        disconnect()
        ground.unsubscribe(token)

    connection.subscriptions[msg["id"]] = unsubscribe
    connection.send_result(msg["id"])
    connection.send_message(websocket_api.event_message(msg["id"], {"views": views}))
