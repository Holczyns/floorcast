"""Places of robots from their maps, and the history of where people walked."""

import pytest

from custom_components.floorcast.engine.maps import map_pixel, map_to_plan, mower_place, robot_to_plan
from custom_components.floorcast.history import KEEP, PeopleHistory

PROJECTION = {"maxX": 1000, "minY": -1000, "scale": 0.1, "padding": 10, "width": 300, "height": 400}
MOWER = {"kind": "mower", "at": [2.0, 3.0], "rotation": 0, "mirror": False, "projection": PROJECTION}


def test_a_map_pixel_lies_on_the_plan_from_the_corner_of_the_map():
    # 0.1 px per mm: the pixel (10, 10) of the padding is 10 mm, 1 cm, from the corner.
    assert map_pixel(PROJECTION, 1000, -1000) == (10, 10)
    assert map_to_plan(MOWER, (10, 10)) == pytest.approx((2.1, 3.1))


def test_the_runtime_pose_wins_over_the_last_known_position():
    place = mower_place(MOWER, {"runtime_pose_x": 1000, "runtime_pose_y": -1000, "position_x": 0, "position_y": 0})
    assert place["at"] == pytest.approx([2.1, 3.1])


def test_a_mower_without_calibration_or_position_has_no_place():
    assert mower_place({**MOWER, "projection": None}, {"position_x": 0, "position_y": 0}) is None
    assert mower_place(MOWER, {"position_x": "unknown"}) is None


def test_a_vacuum_with_two_pairs_lands_on_both():
    vacuum = {"pairs": [{"robot": [25000, 25000], "plan": [1, 1]}, {"robot": [28000, 25000], "plan": [4, 1]}]}
    assert robot_to_plan(vacuum, (25000, 25000)) == pytest.approx((1, 1))
    assert robot_to_plan(vacuum, (28000, 25000)) == pytest.approx((4, 1))
    assert robot_to_plan({"pairs": []}, (0, 0)) is None


@pytest.fixture
def history(hass):
    return PeopleHistory(hass)


async def test_a_person_standing_still_adds_no_points(history):
    person = {"id": "r1", "x": 1.0, "y": 1.0, "status": "seen"}
    history.record("ground", [person], 100.0)
    history.record("ground", [{**person, "x": 1.1}], 110.0)
    history.record("ground", [{**person, "x": 2.0}], 101.0)
    assert len(history.points["ground"]) == 1
    history.record("ground", [{**person, "x": 2.0}], 103.0)
    assert len(history.points["ground"]) == 2


async def test_walks_break_on_long_gaps_and_old_points_go(history):
    for t, x in ((0, 0), (3, 1), (6, 2), (100, 5), (103, 6)):
        history.record("ground", [{"id": "r1", "x": x, "y": 0, "status": "seen"}], 1000.0 + t)
    assert history.walks("ground", 1, 1103.0) == [[[0, 0], [1, 0], [2, 0]], [[5, 0], [6, 0]]]
    history.record("ground", [{"id": "r1", "x": 9, "y": 0, "status": "seen"}], 1000.0 + KEEP + 50)
    assert [p[0] for p in history.points["ground"]] == [5, 6, 9]


async def test_the_short_track_is_the_last_seconds_of_that_person(history):
    for t, x in ((0, 0), (10, 1), (20, 2), (30, 3)):
        history.record(
            "ground",
            [{"id": "r1", "x": x, "y": 0, "status": "seen"}, {"id": "c1", "x": -x, "y": 5, "status": "seen"}],
            t,
        )
    assert history.recent("ground", "r1", 30.0) == [[1, 0], [2, 0], [3, 0]]
