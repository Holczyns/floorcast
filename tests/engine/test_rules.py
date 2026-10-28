"""The common rules placing detections of radars and cameras (people.py)."""

import pytest

from custom_components.floorcast.engine.geometry import snap_into
from custom_components.floorcast.engine.tracker import Person
from custom_components.floorcast.people import Source, counted_once, place

ROOM = ((0.0, 0.0), (4.0, 0.0), (4.0, 4.0), (0.0, 4.0))


def source(kind):
    # At the middle of the south wall, looking north into the room.
    return Source(kind, "s", (2.0, 4.0), 0.0, 120.0, 8.0, False, [ROOM])


def test_a_point_in_a_room_stays():
    assert snap_into((1.0, 1.0), [ROOM], 1.0) == (1.0, 1.0)


def test_a_point_just_behind_a_wall_moves_inside():
    p = snap_into((2.0, -0.6), [ROOM], 1.0)
    assert p == pytest.approx((2.0, 0.1))


def test_a_point_far_behind_a_wall_is_not_moved():
    assert snap_into((2.0, -2.0), [ROOM], 1.0) is None


def test_a_radar_target_far_outside_is_dropped_but_a_camera_keeps_it():
    assert place(source("radar"), (2.0, -2.0), 1.0) is None
    assert place(source("camera"), (2.0, -2.0), 1.0) == (2.0, -2.0)


def test_a_detection_behind_the_source_is_dropped():
    assert place(source("camera"), (2.0, 6.0), 1.0) is None


def test_a_person_seen_by_a_camera_and_a_radar_counts_once():
    radar = [Person(1, 1.0, 1.0, "seen", ["r"])]
    camera = [Person(1, 1.3, 1.0, "seen", ["c"]), Person(2, 3.0, 3.0, "seen", ["c"])]
    counted = counted_once(radar, camera, 0.8)
    assert [(p.x, p.y) for p in counted] == [(1.0, 1.0), (3.0, 3.0)]
