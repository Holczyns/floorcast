"""Objects of Frigate events placed on the plan inside a running Home Assistant."""

import json

import pytest
from homeassistant.core import HomeAssistant
from pytest_homeassistant_custom_component.common import MockConfigEntry, async_fire_mqtt_message

from custom_components.floorcast.const import DATA_OBJECTS, DOMAIN

# Image corners of the lawn and where they lie on the plan; detect stream 1000 x 500 px.
CALIBRATION = [
    {"image": [0, 1], "plan": [0, 0]},
    {"image": [1, 1], "plan": [4, 0]},
    {"image": [0.75, 0.4], "plan": [4, 8]},
    {"image": [0.25, 0.4], "plan": [0, 8]},
]
PLAN = {
    "levels": [
        {
            "id": "ground",
            "walls": [],
            "openings": [],
            "rooms": [],
            "items": [],
            "devices": [
                {
                    "id": "c1",
                    "kind": "camera",
                    "entity": "camera.back",
                    "frigate": "back",
                    "at": [2, -1],
                    "detect": [1000, 500],
                    "calibration": CALIBRATION,
                }
            ],
        }
    ]
}


def event(kind, box, object_id="o1", camera="back", label="person"):
    after = {"id": object_id, "camera": camera, "label": label, "box": box, "stationary": False}
    return json.dumps({"type": kind, "before": after, "after": after})


@pytest.fixture
async def objects(hass: HomeAssistant, hass_storage, mqtt_mock):
    hass_storage["floorcast.plan"] = {"version": 1, "key": "floorcast.plan", "data": PLAN}
    entry = MockConfigEntry(domain=DOMAIN)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return hass.data[DATA_OBJECTS]


async def test_a_person_stands_where_the_bottom_of_the_box_maps(hass: HomeAssistant, objects):
    # Feet in the middle of the bottom of the image: the middle of the near edge of the lawn.
    async_fire_mqtt_message(hass, "frigate/events", event("new", [450, 300, 550, 500]))
    await hass.async_block_till_done()
    [person] = objects.people("ground")
    assert (person["x"], person["y"]) == pytest.approx((2.0, 0.0), abs=0.01)
    # People go to the people tracking, not to the objects the cards get.
    assert objects.objects == {}


async def test_a_car_goes_to_the_cards(hass: HomeAssistant, objects):
    async_fire_mqtt_message(hass, "frigate/events", event("new", [400, 200, 600, 500], label="car"))
    await hass.async_block_till_done()
    [car] = objects.objects["ground"]
    assert car["label"] == "car"


async def test_the_end_event_removes_the_object(hass: HomeAssistant, objects):
    async_fire_mqtt_message(hass, "frigate/events", event("new", [450, 300, 550, 500]))
    async_fire_mqtt_message(hass, "frigate/events", event("end", [450, 300, 550, 500]))
    await hass.async_block_till_done()
    assert objects.people("ground") == []


async def test_an_uncalibrated_camera_is_ignored(hass: HomeAssistant, objects):
    async_fire_mqtt_message(hass, "frigate/events", event("new", [450, 300, 550, 500], camera="front"))
    await hass.async_block_till_done()
    assert objects.people("ground") == []


async def test_a_camera_seeing_someone_is_active(hass: HomeAssistant, objects):
    assert objects.active == []
    async_fire_mqtt_message(hass, "frigate/events", event("new", [450, 300, 550, 500]))
    await hass.async_block_till_done()
    assert objects.active == ["back"]
