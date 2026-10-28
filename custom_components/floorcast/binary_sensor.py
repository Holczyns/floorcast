"""Occupancy of each counted area: on while someone is counted there and for its hold time after.

The people tracking decides it (people.py, rule 5), so the entity and the cards always agree;
the entity keeps no state of its own.
"""

from __future__ import annotations

from homeassistant.components.binary_sensor import BinarySensorDeviceClass, BinarySensorEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DATA_PEOPLE
from .entities import AreaEntity, async_follow_areas
from .people import Area, PeopleTracking


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, add_entities: AddEntitiesCallback) -> None:
    tracking: PeopleTracking = hass.data[DATA_PEOPLE]
    entry.async_on_unload(async_follow_areas(hass, tracking, add_entities, Occupancy))


class Occupancy(AreaEntity, BinarySensorEntity):
    _attr_device_class = BinarySensorDeviceClass.OCCUPANCY

    def __init__(self, tracking: PeopleTracking, area: Area) -> None:
        super().__init__(tracking, area)
        self._attr_unique_id = f"{area.key}_occupancy"
        self.entity_id = f"binary_sensor.floorcast_{area.key}_occupancy"

    @property
    def is_on(self) -> bool:
        return self.tracking.occupied.get(self.key, False)
