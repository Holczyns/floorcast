"""Diagnostics tell what the plan holds without names, ids or geometry."""

import json

from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.floorcast.const import DOMAIN
from custom_components.floorcast.diagnostics import async_get_config_entry_diagnostics

PLAN = {
    "levels": [
        {
            "id": "ground",
            "name": "Ground floor",
            "walls": [{"id": "w1", "a": [0, 0], "b": [4, 0], "t": 0.2}],
            "openings": [
                {"id": "o1", "wall": "w1", "at": 1, "width": 0.9, "type": "door", "contact": "binary_sensor.door"},
                {"id": "o2", "wall": "w1", "at": 3, "width": 1.2, "type": "window", "cover": "cover.living_room"},
            ],
            "rooms": [{"id": "living_room", "name": "Living room", "points": [[0, 0], [4, 0], [4, 4], [0, 4]]}],
            "items": [],
            "zones": [{"id": "sofa", "name": "Sofa", "kind": "stationary", "points": [[0, 0], [1, 0], [1, 1]]}],
            "devices": [
                {"id": "l1", "kind": "light", "entity": "light.living_room", "at": [2, 2]},
                {"id": "l2", "kind": "light", "entity": None, "at": [3, 2]},
                {"id": "r1", "kind": "radar", "source": "radar", "at": [2, 4]},
            ],
        }
    ]
}


async def test_diagnostics_count_the_plan_without_private_names(hass: HomeAssistant, hass_storage):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": PLAN}
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()

    result = await async_get_config_entry_diagnostics(hass, entry)

    level = result["plan"]["levels"][0]
    assert level["rooms"] == 1
    assert level["openings"] == {"door": 1, "window": 1}
    assert level["openings_with_contact"] == 1
    assert level["openings_with_cover"] == 1
    assert level["zones"] == {"stationary": 1}
    assert level["devices"] == {"light": 2, "radar": 1}
    assert level["devices_without_entity"] == 1
    assert result["tracking"]["people"] == 0
    text = json.dumps(result)
    for private in ("Living room", "living_room", "light.", "binary_sensor.", "cover.", "Ground floor"):
        assert private not in text
