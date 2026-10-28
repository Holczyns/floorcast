"""FloorCast: a floor plan of the home with live states drawn on it."""

from __future__ import annotations

from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from .cameras import CameraObjects
from .const import DATA_GROUND, DATA_HISTORY, DATA_OBJECTS, DATA_PEOPLE, DATA_ROBOTS, DATA_STILLS, DOMAIN
from .frontend import async_register_frontend
from .ground import GroundViews
from .history import PeopleHistory
from .people import PeopleTracking
from .plan import PlanStore
from .robots import RobotTracking
from .services import async_register_services
from .stills import CameraStills
from .websocket import async_register_commands

PLATFORMS = [Platform.BINARY_SENSOR, Platform.SENSOR]
CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    # Panel, card and commands live as long as Home Assistant, so a reload of the entry keeps them.
    store = PlanStore(hass)
    await store.async_load()
    hass.data[DOMAIN] = store
    async_register_commands(hass)
    async_register_services(hass)
    await async_register_frontend(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    # People tracking runs with the entry; its entities follow the rooms the radars see.
    history = PeopleHistory(hass)
    await history.async_load()
    hass.data[DATA_HISTORY] = history
    tracking = PeopleTracking(hass, hass.data[DOMAIN].plan, history)
    hass.data[DATA_PEOPLE] = tracking
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    tracking.async_start()
    objects = CameraObjects(hass, hass.data[DOMAIN].plan)
    hass.data[DATA_OBJECTS] = objects
    await objects.async_start()
    robots = RobotTracking(hass, hass.data[DOMAIN].plan)
    hass.data[DATA_ROBOTS] = robots
    robots.async_start()
    stills = CameraStills(hass, hass.data[DOMAIN].plan)
    hass.data[DATA_STILLS] = stills
    stills.async_start()
    # Experimental: camera images laid on the ground (ground.py).
    ground = GroundViews(hass, hass.data[DOMAIN].plan, stills, robots)
    hass.data[DATA_GROUND] = ground
    ground.async_start()
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    hass.data[DATA_PEOPLE].async_stop()
    hass.data.pop(DATA_OBJECTS).async_stop()
    hass.data.pop(DATA_ROBOTS).async_stop()
    hass.data.pop(DATA_GROUND).async_stop()
    hass.data.pop(DATA_STILLS).async_stop()
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        hass.data.pop(DATA_PEOPLE)
        hass.data.pop(DATA_HISTORY)
    return unloaded
