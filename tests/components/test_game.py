"""The lamp game inside a running Home Assistant: start, hits, the dark pause, winning and running out of time."""

from datetime import timedelta

import pytest
from homeassistant.core import HomeAssistant
from homeassistant.util import dt as dt_util
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_time_changed, async_mock_service

from custom_components.floorcast.const import DOMAIN
from custom_components.floorcast.game import COUNTDOWN, IDLE, PAUSE

GAME = "switch.floorcast_game"
SQUARE = [[0, 0], [4, 0], [4, 4], [0, 4]]
# Two lamps in a room the radar on its south wall sees.
LAMPS = {"light.a": (1.0, 1.0), "light.b": (3.0, 1.0)}


def plan(goal=2, enabled=True):
    return {
        "tracking": {"confirm_delay": 0, "lost_hold": 0},
        "game": {"enabled": enabled, "lights": list(LAMPS), "goal": goal},
        "levels": [
            {
                "id": "ground",
                "walls": [],
                "openings": [],
                "items": [],
                "rooms": [{"id": "salon", "name": "Salon", "points": SQUARE}],
                "devices": [
                    {"id": "r1", "kind": "radar", "source": "radar", "at": [2, 4], "heading": 0},
                    *({"id": e, "kind": "light", "entity": e, "at": list(at)} for e, at in LAMPS.items()),
                ],
            }
        ],
    }


def stand(hass, at):
    """The radar on the south wall looking north sees the plan point at: right is +x, ahead is -y."""
    hass.states.async_set("sensor.radar_target_1_x", str(round((at[0] - 2) * 1000)), {"unit_of_measurement": "mm"})
    hass.states.async_set("sensor.radar_target_1_y", str(round((4 - at[1]) * 1000)), {"unit_of_measurement": "mm"})


async def tick(hass, seconds=0.5):
    async_fire_time_changed(hass, dt_util.utcnow() + timedelta(seconds=seconds))
    await hass.async_block_till_done()


@pytest.fixture
def services(hass: HomeAssistant):
    return async_mock_service(hass, "homeassistant", "turn_on"), async_mock_service(hass, "homeassistant", "turn_off")


async def setup(hass, hass_storage, game_plan):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": game_plan}
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()


async def advance(hass, freezer, seconds):
    freezer.tick(seconds)
    await tick(hass, 0)


async def test_the_game_is_unavailable_while_the_plan_has_it_off(hass: HomeAssistant, hass_storage, services):
    await setup(hass, hass_storage, plan(enabled=False))
    assert hass.states.get(GAME).state == "unavailable"


async def test_a_game_lights_one_lamp_after_the_dark_and_counts_hits_to_the_goal(
    hass: HomeAssistant, hass_storage, services, freezer
):
    turn_on, turn_off = services
    await setup(hass, hass_storage, plan(goal=2))
    stand(hass, (2, 3.5))
    await hass.services.async_call("switch", "turn_on", {"entity_id": GAME}, blocking=True)
    await hass.async_block_till_done()
    assert turn_off[0].data["entity_id"] == ["light.a", "light.b"]
    assert not turn_on
    assert hass.states.get(GAME).attributes["phase"] == "countdown"
    await advance(hass, freezer, COUNTDOWN - 1)
    assert not turn_on
    await advance(hass, freezer, 1.1)
    first = hass.states.get(GAME).attributes["target"]
    assert first in LAMPS and turn_on[-1].data["entity_id"] == [first]

    # Someone runs to the lit lamp: it goes off and the other lights only after the dark pause.
    stand(hass, LAMPS[first])
    await advance(hass, freezer, 0.6)
    state = hass.states.get(GAME)
    assert state.attributes["score"] == 1 and state.attributes["target"] is None
    assert state.attributes["phase"] == "dark"
    assert turn_off[-1].data["entity_id"] == [first]
    calls = len(turn_on)
    await advance(hass, freezer, PAUSE + 0.1)
    second = hass.states.get(GAME).attributes["target"]
    assert second != first and len(turn_on) == calls + 1

    # The goal: the game ends won and the lamp goes off.
    stand(hass, LAMPS[second])
    await advance(hass, freezer, 0.6)
    state = hass.states.get(GAME)
    assert state.state == "off"
    assert state.attributes["result"] == "won" and state.attributes["score"] == 2
    # From the first lamp: two runs of 0.6 s and the dark pause between them.
    assert state.attributes["duration"] == pytest.approx(0.6 + PAUSE + 0.1 + 0.6, abs=0.2)
    assert state.attributes["phase"] is None
    assert turn_off[-1].data["entity_id"] == [second]


async def test_a_game_without_a_hit_ends_after_the_idle_time(hass: HomeAssistant, hass_storage, services, freezer):
    await setup(hass, hass_storage, plan())
    stand(hass, (2, 3.5))
    await hass.services.async_call("switch", "turn_on", {"entity_id": GAME}, blocking=True)
    await advance(hass, freezer, COUNTDOWN + 0.1)
    assert hass.states.get(GAME).state == "on"
    await advance(hass, freezer, IDLE)
    state = hass.states.get(GAME)
    assert state.state == "off" and state.attributes["result"] == "timeout"


async def test_a_lamp_with_someone_at_it_does_not_light_first(hass: HomeAssistant, hass_storage, services, freezer):
    stand(hass, LAMPS["light.a"])
    await setup(hass, hass_storage, plan())
    await advance(hass, freezer, 0.6)
    await hass.services.async_call("switch", "turn_on", {"entity_id": GAME}, blocking=True)
    # The radar keeps sending the person, as it does while someone moves.
    await advance(hass, freezer, COUNTDOWN - 1)
    stand(hass, (1.0, 1.05))
    await advance(hass, freezer, 1.1)
    assert hass.states.get(GAME).attributes["target"] == "light.b"


async def test_a_stop_ends_the_game_and_puts_the_lamp_out(hass: HomeAssistant, hass_storage, services, freezer):
    _turn_on, turn_off = services
    await setup(hass, hass_storage, plan())
    await hass.services.async_call("switch", "turn_on", {"entity_id": GAME}, blocking=True)
    await advance(hass, freezer, COUNTDOWN + 0.1)
    lit = hass.states.get(GAME).attributes["target"]
    await hass.services.async_call("switch", "turn_off", {"entity_id": GAME}, blocking=True)
    await hass.async_block_till_done()
    state = hass.states.get(GAME)
    assert state.state == "off" and state.attributes["result"] == "stopped"
    assert turn_off[-1].data["entity_id"] == [lit]
