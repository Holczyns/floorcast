"""The lamp game add-on: one lamp lights up, someone runs to it, the next one lights up.

1. The game runs only while the plan turns it on (Settings, Game) and some chosen lamp is seen by a radar or a
   camera (engine/game.py rules 1 and 2).
2. A start turns off every chosen lamp, waits PAUSE and lights a random target (engine rule 3); while every
   target has someone at it, the next people update tries again.
3. When someone seen stands within a metre of the lit target, it goes off, the score grows by one and after
   PAUSE in the dark the next target lights up.
4. The game ends won at the goal of the plan, after IDLE seconds without a hit, on a stop, or when a saved plan
   turns it off or drops the lit lamp; the lit target goes off. The result and the time it ended stay for the
   cards, which show the end.
5. Only the chosen lamps are switched; every call runs with the context of the start, so the logbook names who
   started the game.

State kept between people updates: whether it runs, the target, the score, the timers, and the last result.
"""

from __future__ import annotations

from collections.abc import Callable
from datetime import UTC, datetime
from typing import Any

from homeassistant.core import Context, HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect, async_dispatcher_send
from homeassistant.helpers.event import async_call_later

from .const import SIGNAL_GAME, SIGNAL_PLAN_UPDATED, SIGNAL_POSITIONS
from .engine.game import Target, Viewer, pick, reached, settings, targets
from .people import PeopleTracking

PAUSE = 1.5
IDLE = 120.0


class LampGame:
    def __init__(self, hass: HomeAssistant, plan: dict[str, Any], tracking: PeopleTracking) -> None:
        self.hass = hass
        self.tracking = tracking
        self.plan = plan
        self.enabled = False
        self.lights: list[str] = []
        self.goal = 0
        self.targets: list[Target] = []
        self.running = False
        self.target: Target | None = None
        self.previous: str | None = None
        self.score = 0
        self.result: str | None = None
        self.ended: str | None = None
        self._context: Context | None = None
        self._pause: Callable[[], None] | None = None
        self._idle: Callable[[], None] | None = None
        self._unsubscribe: list[Callable[[], None]] = []

    @callback
    def async_start(self) -> None:
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_PLAN_UPDATED, self.configure))
        self._unsubscribe.append(async_dispatcher_connect(self.hass, SIGNAL_POSITIONS, self._positions))
        self.configure(self.plan)

    @callback
    def async_stop(self) -> None:
        if self.running:
            self.finish("stopped")
        for unsubscribe in self._unsubscribe:
            unsubscribe()
        self._unsubscribe.clear()

    @property
    def available(self) -> bool:
        """Rule 1: the game is on in the plan and has a lamp to light."""
        return self.enabled and bool(self.targets)

    def _viewers(self) -> dict[str, list[Viewer]]:
        return {
            level: [Viewer(s.at, s.heading, s.view, s.reach) for s in [*setup.radars, *setup.cameras]]
            for level, setup in self.tracking.levels.items()
        }

    @callback
    def configure(self, plan: dict[str, Any]) -> None:
        self.plan = plan
        self.enabled, self.lights, self.goal = settings(plan)
        self.targets = targets(plan, self.lights, self._viewers())
        # Rule 4: a game whose lit lamp left the plan, or which the plan turned off, ends.
        lit = self.target.entity if self.target else None
        if self.running and (not self.available or (lit and lit not in {t.entity for t in self.targets})):
            self.finish("stopped")
        self._changed()

    def start(self, context: Context | None = None) -> None:
        """Rule 2: every chosen lamp off, then the first target after a pause."""
        if not self.available:
            return
        if self.running:
            self.finish("stopped")
        self._context = context
        self.running = True
        self.score = 0
        self.previous = None
        self.target = None
        self.result = None
        self.ended = None
        self._switch("turn_off", self.lights)
        self._restart_idle()
        self._after_pause()
        self._changed()

    def stop(self) -> None:
        if self.running:
            self.finish("stopped")

    @callback
    def finish(self, result: str) -> None:
        """Rule 4: the end of the game, with the lit target off."""
        if self.target:
            self._switch("turn_off", [self.target.entity])
        for cancel in (self._pause, self._idle):
            if cancel:
                cancel()
        self._pause = self._idle = None
        self.running = False
        self.target = None
        self.result = result
        self.ended = datetime.now(UTC).isoformat()
        self._changed()

    def _switch(self, service: str, entities: list[str]) -> None:
        if entities:
            self.hass.async_create_task(
                self.hass.services.async_call(
                    "homeassistant", service, {"entity_id": entities}, blocking=False, context=self._context
                )
            )

    def _restart_idle(self) -> None:
        if self._idle:
            self._idle()
        self._idle = async_call_later(self.hass, IDLE, self._timed_out)

    @callback
    def _timed_out(self, _now: Any) -> None:
        self._idle = None
        if self.running:
            self.finish("timeout")

    def _after_pause(self) -> None:
        self._pause = async_call_later(self.hass, PAUSE, self._paused)

    @callback
    def _paused(self, _now: Any) -> None:
        self._pause = None
        self._light_next()

    @callback
    def _light_next(self) -> None:
        """Rule 2: a random free target lights up; none while every target has someone at it."""
        if not self.running or self.target or self._pause:
            return
        target = pick(self.targets, self.previous, self.tracking.people)
        if target is None:
            return
        self.target = target
        self._switch("turn_on", [target.entity])
        self._changed()

    @callback
    def _positions(self, people: dict[str, list[dict[str, Any]]], *_rest: Any) -> None:
        """Rule 3: a hit puts the target out and lights the next one after a pause in the dark."""
        if not self.running or self._pause:
            return
        if self.target is None:
            self._light_next()
            return
        if not reached(self.target, people):
            return
        self._switch("turn_off", [self.target.entity])
        self.previous = self.target.entity
        self.target = None
        self.score += 1
        if self.score >= self.goal:
            self.finish("won")
            return
        self._restart_idle()
        self._after_pause()
        self._changed()

    def _changed(self) -> None:
        async_dispatcher_send(self.hass, SIGNAL_GAME)
