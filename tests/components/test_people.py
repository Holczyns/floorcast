"""People tracking inside a running Home Assistant: counts, occupancy and entities following the plan."""

from datetime import timedelta

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.helpers import entity_registry as er
from homeassistant.util import dt as dt_util
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_time_changed

from custom_components.floorcast.const import DOMAIN

COUNT = "sensor.floorcast_ground_salon_count"
OCCUPANCY = "binary_sensor.floorcast_ground_salon_occupancy"
SQUARE = [[0, 0], [4, 0], [4, 4], [0, 4]]


def plan(rooms):
    return {
        "tracking": {"confirm_delay": 0, "lost_hold": 0},
        "levels": [
            {
                "id": "ground",
                "walls": [],
                "openings": [],
                "items": [],
                "rooms": rooms,
                # On the south wall, looking north into the room.
                "devices": [{"id": "r1", "kind": "radar", "source": "radar", "at": [2, 4], "heading": 0}],
            }
        ],
    }


SALON = {"id": "salon", "name": "Salon", "points": SQUARE, "hold": 5}
GARDEN = {"id": "garden", "name": "Garden", "points": [[10, 10], [12, 10], [12, 12], [10, 12]]}


def target(hass, x, y):
    hass.states.async_set("sensor.radar_target_1_x", str(x), {"unit_of_measurement": "mm"})
    hass.states.async_set("sensor.radar_target_1_y", str(y), {"unit_of_measurement": "mm"})


async def tick(hass, seconds=0.5):
    async_fire_time_changed(hass, dt_util.utcnow() + timedelta(seconds=seconds))
    await hass.async_block_till_done()


@pytest.fixture
async def setup(hass: HomeAssistant, hass_storage):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": plan([SALON, GARDEN])}
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def test_rooms_the_radar_sees_get_entities(hass: HomeAssistant, setup):
    assert hass.states.get(COUNT).state == "0"
    assert hass.states.get(OCCUPANCY).state == "off"
    assert hass.states.get("sensor.floorcast_ground_garden_count") is None


async def test_a_person_in_view_is_counted_and_occupancy_holds(hass: HomeAssistant, setup):
    target(hass, 0, 2000)
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"
    assert hass.states.get(OCCUPANCY).state == "on"
    target(hass, 0, 0)
    await tick(hass, 1)
    assert hass.states.get(COUNT).state == "0"
    assert hass.states.get(OCCUPANCY).state == "on"
    await tick(hass, 7)
    assert hass.states.get(OCCUPANCY).state == "off"


async def test_a_target_far_outside_every_room_is_ignored(hass: HomeAssistant, setup):
    # 6 m ahead lies 2 m north of the room, beyond the snap distance.
    target(hass, 0, 6000)
    await tick(hass)
    assert hass.states.get(COUNT).state == "0"


async def test_a_target_just_behind_the_wall_counts_in_the_room(hass: HomeAssistant, setup):
    # 4.5 m ahead lies half a metre north of the room, within the snap distance.
    target(hass, 0, 4500)
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"


async def test_a_room_removed_from_the_plan_loses_its_entities(hass: HomeAssistant, setup):
    await hass.data[DOMAIN].async_save(plan([GARDEN]))
    await hass.async_block_till_done()
    registry = er.async_get(hass)
    assert registry.async_get(COUNT) is None
    assert registry.async_get(OCCUPANCY) is None


async def test_unload_stops_the_tracking(hass: HomeAssistant, setup):
    assert await hass.config_entries.async_unload(setup.entry_id)
    target(hass, 0, 2000)
    await tick(hass)
    assert hass.states.get(COUNT).state == "unavailable"


async def test_a_target_the_radar_no_longer_sends_is_dropped(hass: HomeAssistant, setup, freezer):
    target(hass, 0, 2000)
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"
    # Sent again unchanged, the person still counts.
    freezer.tick(2)
    target(hass, 0, 2000)
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"
    # The radar lost the person and sends nothing more; its sensors still hold the values.
    freezer.tick(4)
    await tick(hass)
    assert hass.states.get(COUNT).state == "0"
    target(hass, 3, 2001)
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"


async def test_a_radar_counting_no_target_has_none(hass: HomeAssistant, setup):
    target(hass, 0, 2000)
    hass.states.async_set("sensor.radar_presence_target_count", "0")
    await tick(hass)
    assert hass.states.get(COUNT).state == "0"
    hass.states.async_set("sensor.radar_presence_target_count", "1")
    await tick(hass)
    assert hass.states.get(COUNT).state == "1"
