"""Following people seen by mmWave radars and cameras, in metres.

Every cycle takes the targets all radars of a level see, already placed on the plan:

1. Targets of different radars closer than the merge distance are one person; the
   person stands at their average. Targets of one radar are never merged.
2. People and tracks of the last cycle are paired all at once, the closest pair first, so
   the order in which a radar lists its targets does not decide who is who. A track is
   measured where it would be by now at its recent speed, so two people passing each other
   keep their numbers. A confirmed track may take a person within the jump limit, a
   sleeping one within the wake radius (it wakes with its old id), an unconfirmed one
   within the jump limit; a sleeping or unconfirmed track counts UNSURE metres farther, so
   a confirmed one wins an even pair. A person left without a track starts a new one.
3. Position is smoothed: little when standing still, as set when walking, not at all
   after a jump, so a person neither trembles nor lags behind.
4. A new track counts once it lasted the confirm delay, or at once when born in an
   entrance zone. Born in an excluded zone it never counts, and a confirmed track
   inside an excluded zone is not reported.
5. A confirmed track nobody sees any more stays counted where it was for the lost hold
   (a radar often misses a person for a second or two), and inside a stationary zone
   for that zone's hold time (someone asleep or reading); after that it sleeps,
   uncounted, for the sleep time, ready to wake when someone appears near it. A
   sleeping track next to a live one is dropped. An unconfirmed track lives one second
   unseen.
6. The longer a track is unseen, the farther from it the same person may reappear: by
   walking pace, up to MAX_REACH, within RECENT seconds of losing it, so a person walking on while the radar missed them
   keeps their number instead of becoming someone new.

State kept between cycles: the tracks of the last cycle only, with their speeds.
"""

from __future__ import annotations

import math
from collections.abc import Sequence
from dataclasses import dataclass, field

from .geometry import Point, point_in_polygon

WAKE_RADIUS = 1.5
WALK_SPEED = 1.2
MAX_REACH = 4.0
RECENT = 30.0
STILL = 0.2
WALK = 1.0
JUMP = 1.5
UNCONFIRMED_LIFE = 1.0
# Rule 2: the extra distance of a sleeping or unconfirmed track, the fastest a person is
# expected to walk, and how far ahead a track is expected to have moved at most.
UNSURE = 0.5
MAX_SPEED = 2.0
PREDICT = 1.0


@dataclass
class TrackerSettings:
    merge_distance: float = 0.8
    # Weight of the newest position when walking: 1 follows at once, 0.1 is very smooth.
    smoothing: float = 0.5
    confirm_delay: float = 1.0
    sleep_time: float = 12 * 3600
    jump_base: float = 1.5
    jump_speed: float = 2.5
    stationary_hold: float = 300.0
    lost_hold: float = 5.0
    interval: float = 0.5


@dataclass
class Detection:
    x: float
    y: float
    radar: str


@dataclass
class Zone:
    points: Sequence[Sequence[float]]
    hold: float | None = None

    def contains(self, p: Point) -> bool:
        return point_in_polygon(p, self.points)


@dataclass
class Track:
    id: int
    x: float
    y: float
    confirmed: bool
    valid_birth: bool
    born: float
    last_seen: float
    sleeping: bool = False
    sources: list[str] = field(default_factory=list)
    # Rule 2: metres per second, smoothed.
    vx: float = 0.0
    vy: float = 0.0

    @property
    def point(self) -> Point:
        return (self.x, self.y)


@dataclass
class Person:
    """A person reported by a cycle. Counted ones are seen and confirmed, or held in a stationary zone."""

    id: int
    x: float
    y: float
    status: str
    sources: list[str]

    @property
    def counted(self) -> bool:
        return self.status in ("seen", "held")


def _dist(a: Point, b: Point) -> float:
    return math.hypot(a[0] - b[0], a[1] - b[1])


def merge(detections: Sequence[Detection], distance: float) -> list[tuple[Point, list[str]]]:
    """People from targets: targets of different radars closer than the distance are one person."""
    used = [False] * len(detections)
    people: list[tuple[Point, list[str]]] = []
    for i, first in enumerate(detections):
        if used[i]:
            continue
        group = [first]
        used[i] = True
        for j in range(i + 1, len(detections)):
            other = detections[j]
            if used[j] or any(d.radar == other.radar for d in group):
                continue
            if _dist((first.x, first.y), (other.x, other.y)) < distance:
                group.append(other)
                used[j] = True
        x = sum(d.x for d in group) / len(group)
        y = sum(d.y for d in group) / len(group)
        people.append(((x, y), [d.radar for d in group]))
    return people


class Tracker:
    def __init__(self, settings: TrackerSettings | None = None) -> None:
        self.settings = settings or TrackerSettings()
        self.tracks: dict[int, Track] = {}

    def update(
        self,
        detections: Sequence[Detection],
        now: float,
        entrance: Sequence[Zone] = (),
        exclude: Sequence[Zone] = (),
        stationary: Sequence[Zone] = (),
    ) -> list[Person]:
        s = self.settings
        jump_limit = max(1.5, s.jump_base) + s.jump_speed * max(0.1, s.interval)
        in_any = lambda zones, p: any(zone.contains(p) for zone in zones)  # noqa: E731
        old = dict(self.tracks)
        free = set(old)
        tracks: dict[int, Track] = {}
        people: list[Person] = []

        merged = merge(detections, s.merge_distance)
        pairs = self._pair([point for point, _ in merged], old, jump_limit, now)
        for index, (point, sources) in enumerate(merged):
            match, woken = pairs.get(index, (None, False))
            if match is not None:
                free.discard(match.id)
                track = match
                distance = _dist(point, track.point)
                alpha = self._alpha(distance) if track.confirmed else 1.0
                before, seen = track.point, track.last_seen
                track.x = alpha * point[0] + (1 - alpha) * track.x
                track.y = alpha * point[1] + (1 - alpha) * track.y
                self._move(track, before, now - seen, woken)
                track.sleeping = False
                if woken:
                    track.confirmed = True
                elif not track.confirmed:
                    if in_any(entrance, track.point):
                        track.confirmed = track.valid_birth = True
                    if track.confirmed and in_any(exclude, track.point):
                        track.confirmed = track.valid_birth = False
                    if not track.confirmed and track.valid_birth and now - track.born >= s.confirm_delay:
                        track.confirmed = True
            else:
                track = Track(self._new_id(old, tracks), point[0], point[1], False, True, now, now)
                if in_any(entrance, point):
                    track.confirmed = True
                if in_any(exclude, point):
                    track.confirmed = track.valid_birth = False
                if track.valid_birth and s.confirm_delay <= 0:
                    track.confirmed = True
            track.last_seen = now
            track.sources = sources
            tracks[track.id] = track
            if track.confirmed:
                if not in_any(exclude, track.point):
                    people.append(Person(track.id, track.x, track.y, "seen", sources))
            else:
                people.append(Person(track.id, track.x, track.y, "unconfirmed", sources))

        live = [t.point for t in tracks.values() if t.confirmed]
        for track_id in free:
            track = old[track_id]
            unseen = now - track.last_seen
            if not track.confirmed or now - track.born < s.confirm_delay:
                if unseen <= UNCONFIRMED_LIFE:
                    tracks[track_id] = track
                continue
            if any(_dist(track.point, p) < WAKE_RADIUS for p in live):
                continue
            if unseen < s.lost_hold and not in_any(exclude, track.point):
                track.sleeping = False
                tracks[track_id] = track
                people.append(Person(track.id, track.x, track.y, "held", ["lost"]))
                continue
            zone = next((z for z in stationary if z.contains(track.point)), None)
            hold = zone.hold if zone and zone.hold is not None else s.stationary_hold
            if zone and not in_any(exclude, track.point) and unseen < hold:
                track.sleeping = False
                tracks[track_id] = track
                people.append(Person(track.id, track.x, track.y, "held", ["hold"]))
            elif unseen < s.sleep_time:
                track.sleeping = True
                tracks[track_id] = track
                people.append(Person(track.id, track.x, track.y, "sleeping", []))
        self.tracks = tracks
        return people

    def _pair(
        self, points: Sequence[Point], old: dict[int, Track], jump: float, now: float
    ) -> dict[int, tuple[Track, bool]]:
        """Rule 2: each person index with its track and whether that track wakes."""

        def reach(track: Track, base: float) -> float:
            # Unseen for a while, the person may have walked on meanwhile; a track lost long
            # ago wakes only close by, so an old one does not take over someone else.
            unseen = now - track.last_seen
            if unseen > RECENT:
                return base
            return max(base, min(MAX_REACH, WALK_SPEED * unseen))

        candidates: list[tuple[float, int, int]] = []
        for index, p in enumerate(points):
            for track in old.values():
                d = _dist(p, self._expected(track, now))
                if track.sleeping:
                    if d < WAKE_RADIUS:
                        candidates.append((d + UNSURE, index, track.id))
                elif d < reach(track, jump):
                    candidates.append((d if track.confirmed else d + UNSURE, index, track.id))
        pairs: dict[int, tuple[Track, bool]] = {}
        taken: set[int] = set()
        for _cost, index, track_id in sorted(candidates):
            if index in pairs or track_id in taken:
                continue
            track = old[track_id]
            pairs[index] = (track, track.sleeping)
            taken.add(track_id)
        return pairs

    @staticmethod
    def _expected(track: Track, now: float) -> Point:
        """Rule 2: where an awake track would be by now at its speed; a sleeping one stays put."""
        if track.sleeping:
            return track.point
        ahead = min(PREDICT, max(0.0, now - track.last_seen))
        return (track.x + track.vx * ahead, track.y + track.vy * ahead)

    @staticmethod
    def _move(track: Track, before: Point, seconds: float, woken: bool) -> None:
        """Rule 2: the speed of a track from its last step, smoothed and limited to a walk."""
        if woken or seconds <= 0:
            track.vx = track.vy = 0.0
            return
        vx = (track.x - before[0]) / seconds
        vy = (track.y - before[1]) / seconds
        speed = math.hypot(vx, vy)
        if speed > MAX_SPEED:
            vx, vy = vx * MAX_SPEED / speed, vy * MAX_SPEED / speed
        track.vx = 0.5 * track.vx + 0.5 * vx
        track.vy = 0.5 * track.vy + 0.5 * vy

    def _alpha(self, distance: float) -> float:
        base = max(0.1, min(1.0, self.settings.smoothing))
        if distance < STILL:
            return base * 0.5
        if distance < WALK:
            return base
        if distance > JUMP:
            return 1.0
        return base + (1.0 - base) * (distance - WALK) / (JUMP - WALK)

    @staticmethod
    def _new_id(old: dict[int, Track], new: dict[int, Track]) -> int:
        used = set(old) | set(new)
        number = 1
        while number in used:
            number += 1
        return number
