"""Entities that follow the counted areas of the people tracking.

Each platform keeps one entity per area. When a saved plan adds an area, its entity
is added; when it drops one, the entity leaves the registry too.
"""

from __future__ import annotations

from collections.abc import Callable

from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity import Entity
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import SIGNAL_AREAS_CHANGED, SIGNAL_PEOPLE
from .people import Area, PeopleTracking


class AreaEntity(Entity):
    _attr_should_poll = False

    def __init__(self, tracking: PeopleTracking, area: Area) -> None:
        self.tracking = tracking
        self.key = area.key
        self._attr_name = f"FloorCast {area.name}"

    @property
    def area(self) -> Area:
        return self.tracking.areas[self.key]

    @property
    def count(self) -> int:
        return self.tracking.counts.get(self.key, 0)

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(self.hass, SIGNAL_PEOPLE, self._people_changed))

    @callback
    def _people_changed(self) -> None:
        self.async_write_ha_state()

    @callback
    def area_changed(self) -> None:
        self._attr_name = f"FloorCast {self.area.name}"
        if self.hass is not None:
            self.async_write_ha_state()


@callback
def async_follow_areas(
    hass: HomeAssistant,
    tracking: PeopleTracking,
    add_entities: AddEntitiesCallback,
    create: Callable[[PeopleTracking, Area], AreaEntity],
) -> Callable[[], None]:
    entities: dict[str, AreaEntity] = {}

    @callback
    def sync() -> None:
        registry = er.async_get(hass)
        for key in [key for key in entities if key not in tracking.areas]:
            entity = entities.pop(key)
            if entity.entity_id and registry.async_get(entity.entity_id):
                registry.async_remove(entity.entity_id)
        for entity in entities.values():
            entity.area_changed()
        new = [create(tracking, area) for key, area in tracking.areas.items() if key not in entities]
        entities.update({entity.key: entity for entity in new})
        if new:
            add_entities(new)

    sync()
    return async_dispatcher_connect(hass, SIGNAL_AREAS_CHANGED, sync)
