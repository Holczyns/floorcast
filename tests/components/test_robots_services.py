"""Robots, the press service and active cameras inside a running Home Assistant."""

import copy
from unittest.mock import patch

import pytest
from homeassistant.core import HomeAssistant, ServiceResponse, SupportsResponse
from homeassistant.helpers.dispatcher import async_dispatcher_send
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_mock_service

from custom_components.floorcast.const import DATA_ROBOTS, DOMAIN, SIGNAL_PLAN_UPDATED
from custom_components.floorcast.robots import between

PROJECTION = {"maxX": 1000, "minY": -1000, "scale": 0.1, "padding": 10, "width": 300, "height": 400}
SQUARE = [[0, 0], [4, 0], [4, 4], [0, 4]]
PLAN = {
    "levels": [
        {
            "id": "ground",
            "walls": [],
            "items": [],
            "rooms": [{"id": "salon", "name": "Salon", "points": SQUARE}],
            "openings": [{"id": "w1", "wall": "x", "at": 1, "width": 1, "type": "window", "cover": "cover.blind"}],
            "devices": [
                {"id": "l1", "kind": "light", "entity": "light.a", "at": [1, 1]},
                {"id": "l2", "kind": "light", "entity": "light.b", "at": [3, 3]},
                {"id": "l3", "kind": "light", "entity": "light.outside", "at": [9, 9]},
                {"id": "p1", "kind": "screen", "entity": "remote.projector", "at": [0, 2], "to": [2, 2]},
                {
                    "id": "m1",
                    "kind": "mower",
                    "entity": "lawn_mower.m",
                    "map": "camera.map",
                    "at": [2, 3],
                    "projection": PROJECTION,
                },
                {
                    "id": "v1",
                    "kind": "vacuum",
                    "entity": "vacuum.v",
                    "roomSensor": "sensor.v_room",
                    "pairs": [{"robot": [25000, 25000], "plan": [1, 1]}, {"robot": [28000, 25000], "plan": [4, 1]}],
                },
            ],
        }
    ]
}


@pytest.fixture
async def floorcast(hass: HomeAssistant, hass_storage):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": PLAN}
    hass.states.async_set("lawn_mower.m", "docked")
    hass.states.async_set("vacuum.v", "docked")
    hass.states.async_set("camera.map", "idle", {"runtime_pose_x": 1000, "runtime_pose_y": -1000})
    positions = iter([{"x": 26000, "y": 25000}, {"x": 27000, "y": 25000}] * 20)

    async def position(call) -> ServiceResponse:
        return {"vacuum.v": next(positions)}

    hass.services.async_register(
        "roborock", "get_vacuum_current_position", position, supports_response=SupportsResponse.ONLY
    )
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return hass.data[DATA_ROBOTS]


async def test_a_mowing_mower_leaves_a_track_that_empties_on_its_dock(hass: HomeAssistant, floorcast):
    hass.states.async_set("lawn_mower.m", "mowing")
    for x in (1000, 0, -1000):
        hass.states.async_set("camera.map", "idle", {"runtime_pose_x": x, "runtime_pose_y": -1000})
        await hass.async_block_till_done()
    robot = floorcast.robots["m1"]
    assert len(robot.track) == 3
    # The last pose, 2000 mm from the corner of the map: 200 px of the map, 2 m on the plan.
    assert robot.place["at"] == pytest.approx([4.1, 3.1])
    hass.states.async_set("lawn_mower.m", "docked")
    await hass.async_block_till_done()
    assert robot.track == []


async def test_a_delayed_mower_moves_smoothly_between_its_reports(hass: HomeAssistant, floorcast):
    clock = [1000.0]
    with patch("custom_components.floorcast.robots.time.monotonic", lambda: clock[0]):
        plan = copy.deepcopy(PLAN)
        plan["levels"][0]["devices"][4]["ground"] = {"delay": 5}
        async_dispatcher_send(hass, SIGNAL_PLAN_UPDATED, plan)
        await hass.async_block_till_done()
        robots = floorcast
        start = list(robots.robots["m1"].place["at"])
        # The map camera changes without the mower moving: not a report.
        clock[0] = 1003.0
        hass.states.async_set("camera.map", "idle", {"runtime_pose_x": 1000, "runtime_pose_y": -1000, "other": 1})
        await hass.async_block_till_done()
        # A report 5 s after the first, 2 m further along the map.
        clock[0] = 1005.0
        hass.states.async_set("camera.map", "idle", {"runtime_pose_x": -1000, "runtime_pose_y": -1000})
        await hass.async_block_till_done()
        # Nothing new shown yet: the delay has not passed for the second report.
        robots._smooth()
        assert robots.robots["m1"].place["at"] == pytest.approx(start)
        # Halfway between the reports, 5 s late: the mower is halfway between the two places.
        clock[0] = 1007.5
        robots._smooth()
        assert robots.robots["m1"].place["at"] == pytest.approx([(start[0] + 4.1) / 2, (start[1] + 3.1) / 2])
        clock[0] = 1010.0
        robots._smooth()
        assert robots.robots["m1"].place["at"] == pytest.approx([4.1, 3.1])


def test_the_heading_between_two_places_turns_the_short_way():
    place = between({"at": [0, 0], "heading": 350}, {"at": [2, 0], "heading": 10}, 0.5)
    assert place["at"] == [1, 0]
    assert place["heading"] == 360


async def test_a_cleaning_vacuum_is_asked_for_its_place_and_names_its_room(hass: HomeAssistant, floorcast):
    hass.states.async_set("sensor.v_room", "salon")
    hass.states.async_set("vacuum.v", "cleaning")
    await hass.async_block_till_done()
    robot = floorcast.robots["v1"]
    robot.asked = 0
    floorcast._tick()
    await hass.async_block_till_done()
    assert robot.place["at"] == pytest.approx([2, 1])
    assert robot.place["room"] == "salon"
    assert floorcast.snapshot()["ground"]["v1"]["track"]


async def test_pressing_a_room_switches_its_lights_together(hass: HomeAssistant, floorcast):
    turn_on = async_mock_service(hass, "homeassistant", "turn_on")
    turn_off = async_mock_service(hass, "homeassistant", "turn_off")
    hass.states.async_set("light.a", "off")
    hass.states.async_set("light.b", "on")
    await hass.services.async_call(DOMAIN, "press", {"room": "salon"}, blocking=True)
    assert turn_off[0].data["entity_id"] == ["light.a", "light.b"] and not turn_on
    hass.states.async_set("light.b", "off")
    await hass.services.async_call(DOMAIN, "press", {"room": "salon"}, blocking=True)
    assert turn_on[0].data["entity_id"] == ["light.a", "light.b"]


async def test_pressing_a_window_moves_its_blind(hass: HomeAssistant, floorcast):
    close = async_mock_service(hass, "cover", "close_cover")
    stop = async_mock_service(hass, "cover", "stop_cover")
    hass.states.async_set("cover.blind", "open", {"current_position": 40})
    await hass.services.async_call(DOMAIN, "press", {"opening": "w1"}, blocking=True)
    hass.states.async_set("cover.blind", "closing")
    await hass.services.async_call(DOMAIN, "press", {"opening": "w1"}, blocking=True)
    assert len(close) == 1 and len(stop) == 1


async def test_pressing_a_projector_switches_it(hass: HomeAssistant, floorcast):
    turn_on = async_mock_service(hass, "remote", "turn_on")
    hass.states.async_set("remote.projector", "off")
    await hass.services.async_call(DOMAIN, "press", {"device": "p1"}, blocking=True)
    assert turn_on[0].data["entity_id"] == "remote.projector"
