"""The switch of the lamp game: on while a game runs; turning it on starts one, turning it off ends it.

Its attributes tell the cards and automations the lit lamp, the score, the goal and how the last game ended.
The switch is unavailable while the plan has the game off or no chosen lamp a radar or camera sees.
"""

from __future__ import annotations

from typing import Any

from homeassistant.components.switch import SwitchEntity
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import DATA_GAME, SIGNAL_GAME
from .game import LampGame


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry, add_entities: AddEntitiesCallback) -> None:
    add_entities([GameSwitch(hass.data[DATA_GAME])])


class GameSwitch(SwitchEntity):
    _attr_should_poll = False
    _attr_icon = "mdi:lightbulb-on-outline"
    _attr_name = "FloorCast Game"
    _attr_unique_id = "floorcast_game"

    def __init__(self, game: LampGame) -> None:
        self.game = game
        self.entity_id = "switch.floorcast_game"

    async def async_added_to_hass(self) -> None:
        self.async_on_remove(async_dispatcher_connect(self.hass, SIGNAL_GAME, self._changed))

    @callback
    def _changed(self) -> None:
        self.async_write_ha_state()

    @property
    def available(self) -> bool:
        return self.game.available

    @property
    def is_on(self) -> bool:
        return self.game.running

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        return {
            "floorcast": "game",
            "target": self.game.target.entity if self.game.target else None,
            "score": self.game.score,
            "goal": self.game.goal,
            "lights": [target.entity for target in self.game.targets],
            "result": self.game.result,
            "ended": self.game.ended,
        }

    async def async_turn_on(self, **kwargs: Any) -> None:
        self.game.start(self._context)

    async def async_turn_off(self, **kwargs: Any) -> None:
        self.game.stop()
