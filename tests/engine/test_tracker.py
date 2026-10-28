import pytest

from custom_components.floorcast.engine.geometry import in_view, point_in_polygon, radar_to_plan
from custom_components.floorcast.engine.tracker import Detection, Tracker, TrackerSettings, Zone, merge

ROOM = [(0, 0), (4, 0), (4, 4), (0, 4)]


def run(tracker, detections, now, **zones):
    return tracker.update([Detection(*d) for d in detections], now, **zones)


def test_targets_of_two_radars_close_together_are_one_person():
    people = merge([Detection(1.0, 1.0, "a"), Detection(1.4, 1.2, "b")], 0.8)
    assert len(people) == 1
    assert people[0][0] == pytest.approx((1.2, 1.1))


def test_two_targets_of_one_radar_stay_two_people():
    assert len(merge([Detection(1.0, 1.0, "a"), Detection(1.3, 1.0, "a")], 0.8)) == 2


def test_far_targets_of_two_radars_stay_two_people():
    assert len(merge([Detection(1.0, 1.0, "a"), Detection(3.0, 1.0, "b")], 0.8)) == 2


def test_a_new_track_counts_after_the_confirm_delay():
    tracker = Tracker(TrackerSettings(confirm_delay=1.0))
    assert run(tracker, [(1, 1, "a")], 0.0)[0].status == "unconfirmed"
    assert run(tracker, [(1, 1, "a")], 0.5)[0].status == "unconfirmed"
    assert run(tracker, [(1, 1, "a")], 1.0)[0].status == "seen"


def test_born_in_an_entrance_zone_counts_at_once():
    tracker = Tracker(TrackerSettings(confirm_delay=5.0))
    people = run(tracker, [(1, 1, "a")], 0.0, entrance=[Zone([(0, 0), (2, 0), (2, 2), (0, 2)])])
    assert people[0].status == "seen"


def test_born_in_an_excluded_zone_never_counts():
    tracker = Tracker(TrackerSettings(confirm_delay=0.5))
    fan = [Zone([(0, 0), (2, 0), (2, 2), (0, 2)])]
    for now in (0.0, 1.0, 2.0, 5.0):
        people = run(tracker, [(1, 1, "a")], now, exclude=fan)
    assert people[0].status == "unconfirmed"


def test_the_same_person_keeps_the_id_while_walking():
    tracker = Tracker(TrackerSettings(confirm_delay=0))
    first = run(tracker, [(1, 1, "a")], 0.0)[0]
    second = run(tracker, [(1.4, 1, "a")], 0.5)[0]
    assert second.id == first.id
    assert 1.0 < second.x < 1.4


def test_standing_still_is_smoothed_more_than_walking():
    tracker = Tracker(TrackerSettings(confirm_delay=0, smoothing=0.5))
    run(tracker, [(1, 1, "a")], 0.0)
    still = run(tracker, [(1.1, 1, "a")], 0.5)[0].x - 1.0
    tracker = Tracker(TrackerSettings(confirm_delay=0, smoothing=0.5))
    run(tracker, [(1, 1, "a")], 0.0)
    walk = run(tracker, [(1.5, 1, "a")], 0.5)[0].x - 1.0
    assert still / 0.1 < walk / 0.5


def test_a_jump_beyond_the_limit_starts_a_new_track():
    tracker = Tracker(TrackerSettings(confirm_delay=0, jump_base=1.5, jump_speed=2.5, interval=0.5))
    first = run(tracker, [(0, 0, "a")], 0.0)[0]
    people = run(tracker, [(6, 0, "a")], 0.5)
    assert all(p.id != first.id for p in people if p.status == "seen")


def test_a_lost_person_sleeps_and_wakes_with_the_same_id():
    tracker = Tracker(TrackerSettings(confirm_delay=0))
    first = run(tracker, [(1, 1, "a")], 0.0)[0]
    gone = run(tracker, [], 6.0)
    assert gone[0].status == "sleeping" and not gone[0].counted
    back = run(tracker, [(1.5, 1.2, "a")], 60.0)[0]
    assert back.id == first.id and back.status == "seen"


def test_a_lost_person_in_a_stationary_zone_stays_counted_for_its_hold():
    tracker = Tracker(TrackerSettings(confirm_delay=0))
    sofa = [Zone([(0, 0), (2, 0), (2, 2), (0, 2)], hold=60)]
    run(tracker, [(1, 1, "a")], 0.0, stationary=sofa)
    assert run(tracker, [], 30.0, stationary=sofa)[0].status == "held"
    assert run(tracker, [], 61.0, stationary=sofa)[0].status == "sleeping"


def test_an_unconfirmed_lost_track_disappears():
    tracker = Tracker(TrackerSettings(confirm_delay=5))
    run(tracker, [(1, 1, "a")], 0.0)
    assert run(tracker, [], 0.5)[0:0] == []
    assert run(tracker, [], 2.0) == []


def test_point_on_a_horizontal_edge_does_not_fail():
    assert point_in_polygon((1, 0), ROOM) in (True, False)
    assert point_in_polygon((2, 2), ROOM)
    assert not point_in_polygon((5, 2), ROOM)


def test_radar_axes_match_the_card():
    # Looking south from (0, 0): a target 2 m ahead lies 2 m further south.
    assert radar_to_plan((0, 0), 180, False, 0, 2000) == pytest.approx((0, 2))
    # Its right hand is west; mirrored, a target on its x axis lies east.
    assert radar_to_plan((0, 0), 180, False, 1000, 0) == pytest.approx((-1, 0))
    assert radar_to_plan((0, 0), 180, True, 1000, 0) == pytest.approx((1, 0))


def test_in_view_follows_heading_and_reach():
    assert in_view((0, 0), 180, 120, 6, (0, 3))
    assert not in_view((0, 0), 180, 120, 6, (0, -3))
    assert not in_view((0, 0), 180, 120, 2, (0, 3))


def test_a_person_missed_for_a_moment_stays_counted_where_they_were():
    tracker = Tracker(TrackerSettings(confirm_delay=0, lost_hold=5))
    first = run(tracker, [(1, 1, "a")], 0.0)[0]
    missed = run(tracker, [], 2.0)[0]
    assert missed.status == "held" and missed.counted
    assert (missed.x, missed.y) == (first.x, first.y)


def test_walking_on_while_missed_keeps_the_same_person():
    tracker = Tracker(TrackerSettings(confirm_delay=1.0, lost_hold=5))
    run(tracker, [(1, 1, "a")], 0.0)
    first = run(tracker, [(1, 1, "a")], 1.0)[0]
    run(tracker, [], 2.0)
    # Three seconds unseen, 3 m farther: beyond a normal step, within walking pace.
    back = run(tracker, [(4, 1, "a")], 4.0)[0]
    assert back.id == first.id and back.status == "seen"


def test_a_track_lost_long_ago_wakes_only_close_by():
    tracker = Tracker(TrackerSettings(confirm_delay=0, lost_hold=0))
    first = run(tracker, [(1, 1, "a")], 0.0)[0]
    run(tracker, [], 1.0)
    other = run(tracker, [(4, 1, "a")], 120.0)
    assert all(p.id != first.id for p in other if p.status != "sleeping")


def test_the_order_of_the_targets_does_not_swap_two_people():
    tracker = Tracker(TrackerSettings(confirm_delay=0, smoothing=1.0))
    tracker.update([Detection(0, 0, "r"), Detection(1.2, 0, "r")], 0.0)
    # The radar now lists them the other way round, each a little to the right.
    people = tracker.update([Detection(1.4, 0, "r"), Detection(0.4, 0, "r")], 0.5)
    by_id = {p.id: p.x for p in people}
    assert by_id[1] < 0.6 < 1.0 < by_id[2]


def test_two_people_passing_each_other_keep_their_numbers():
    tracker = Tracker(TrackerSettings(confirm_delay=0, smoothing=1.0))
    # One walks right, the other left, 20 cm apart, at 1 m/s.
    for step in range(5):
        t = step * 0.5
        tracker.update([Detection(-2 + t, 0, "r"), Detection(2 - t, 0.2, "r")], t)
    # Past each other now, and each drifted to the other's line: still nearer by line than by way.
    people = tracker.update([Detection(0.6, 0.2, "r"), Detection(-0.6, 0, "r")], 2.5)
    by_id = {p.id: round(p.x, 1) for p in people}
    assert by_id[1] > 0
    assert by_id[2] < 0
