"""The lamp game rules: targets, the draw of the next lamp and reaching it."""

from custom_components.floorcast.engine.game import DEFAULT_GOAL, Viewer, pick, reached, settings, targets

# A radar at the south edge of a 4 m room, looking north.
RADAR = Viewer(at=(2.0, 4.0), heading=0.0, view=120.0, reach=6.0)


def plan(*devices):
    return {"levels": [{"id": "ground", "devices": list(devices)}]}


def lamp(entity, at, to=None):
    device = {"id": entity, "kind": "light", "entity": entity, "at": at}
    if to:
        device["to"] = to
    return device


def person(x, y, status="seen"):
    return {"x": x, "y": y, "status": status}


def test_settings_default_to_off_and_ten_points():
    assert settings({}) == (False, [], DEFAULT_GOAL)
    assert settings({"game": {"enabled": True, "lights": ["light.a", "light.a", 3], "goal": 4}}) == (
        True,
        ["light.a"],
        4,
    )


def test_a_lamp_no_radar_sees_does_not_take_part():
    found = targets(
        plan(lamp("light.a", [1, 1]), lamp("light.far", [30, 30])), ["light.a", "light.far"], {"ground": [RADAR]}
    )
    assert [t.entity for t in found] == ["light.a"]


def test_an_entity_with_two_points_is_one_target_reached_at_either():
    found = targets(plan(lamp("light.a", [1, 1]), lamp("light.a", [3, 1])), ["light.a"], {"ground": [RADAR]})
    assert len(found) == 1 and len(found[0].points) == 2
    assert reached(found[0], {"ground": [person(3.5, 1.5)]})


def test_a_strip_is_reached_along_its_length():
    found = targets(plan(lamp("light.strip", [0.5, 1], [3.5, 1])), ["light.strip"], {"ground": [RADAR]})
    assert reached(found[0], {"ground": [person(2, 1.8)]})
    assert not reached(found[0], {"ground": [person(2, 2.5)]})


def test_only_someone_seen_now_reaches_a_lamp():
    found = targets(plan(lamp("light.a", [1, 1])), ["light.a"], {"ground": [RADAR]})
    assert not reached(found[0], {"ground": [person(1, 1, "held")]})
    assert not reached(found[0], {"other": [person(1, 1)]})


def test_the_next_lamp_is_never_the_last_one_nor_one_with_someone_at_it():
    found = targets(
        plan(lamp("light.a", [1, 1]), lamp("light.b", [3, 1]), lamp("light.c", [2, 3])),
        ["light.a", "light.b", "light.c"],
        {"ground": [RADAR]},
    )
    people = {"ground": [person(3, 1.2, "held")]}
    assert pick(found, "light.a", people, choose=lambda free: free[0]).entity == "light.c"
    assert pick(found, "light.c", {"ground": [person(3, 1)]}, choose=lambda free: free[0]).entity == "light.a"


def test_no_lamp_lights_while_every_one_has_someone_at_it():
    found = targets(plan(lamp("light.a", [1, 1])), ["light.a"], {"ground": [RADAR]})
    assert pick(found, None, {"ground": [person(1, 1)]}) is None
