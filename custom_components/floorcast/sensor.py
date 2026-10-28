"""Number of people in each room a radar sees into and in each counting zone."""

from __future__ import annotations

from homeassistant.components.sensor import SensorEntity, SensorStateClass
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DATA_PEOPLE
from .entities import AreaEntity, async_follow_areas
from .people import Area, PeopleTracking


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, add_entities: AddEntitiesCallback) -> None:
    tracking: PeopleTracking = hass.data[DATA_PEOPLE]
    entry.async_on_unload(async_follow_areas(hass, tracking, add_entities, PeopleCount))


class PeopleCount(AreaEntity, SensorEntity):
    _attr_icon = "mdi:account-multiple"
    _attr_state_class = SensorStateClass.MEASUREMENT
    _attr_native_unit_of_measurement = "people"

    def __init__(self, tracking: PeopleTracking, area: Area) -> None:
        super().__init__(tracking, area)
        self._attr_unique_id = f"{area.key}_count"
        self.entity_id = f"sensor.floorcast_{area.key}_count"

    @property
    def native_value(self) -> int:
        return self.count
