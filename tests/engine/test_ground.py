"""Camera images laid on the ground of the plan (experimental)."""

import io
import math
import time

from PIL import Image

from custom_components.floorcast.engine.ground import (
    Bend,
    ahead_to_plan,
    edge_mask,
    fade_mask,
    invert,
    mower_calibrated,
    track_heading,
    warp,
)
from custom_components.floorcast.engine.homography import apply, homography


def jpeg(width=1280, height=720) -> bytes:
    # Left half red, right half blue, so it shows which way the image lies.
    image = Image.new("RGB", (width, height), (220, 30, 30))
    image.paste((30, 30, 220), (width // 2, 0, width, height))
    out = io.BytesIO()
    image.save(out, "JPEG")
    return out.getvalue()


def test_an_image_laid_flat_keeps_its_sides_inside_the_zone():
    # The image covers 4 x 2 m of plan from (10, 20); the zone is its middle 2 x 1 m.
    matrix = homography([((0, 0), (10, 20)), ((1, 0), (14, 20)), ((1, 1), (14, 22)), ((0, 1), (10, 22))])
    zone = [(11, 20.5), (13, 20.5), (13, 21.5), (11, 21.5)]
    data, box = warp(jpeg(), matrix, [zone])
    assert box == [11, 20.5, 2, 1]
    laid = Image.open(io.BytesIO(data)).convert("RGBA")
    assert laid.size == (120, 60)
    left = laid.getpixel((10, 30))
    right = laid.getpixel((110, 30))
    assert left[0] > 150 and left[2] < 100 and left[3] == 255
    assert right[2] > 150 and right[0] < 100 and right[3] == 255


def test_ground_beyond_the_horizon_is_left_out():
    # A camera looking along +y: the image top is the horizon, so a zone reaching far is cut short.
    pairs = [((0.2, 1), (-1, 1)), ((0.8, 1), (1, 1)), ((0.6, 0.6), (1, 5)), ((0.4, 0.6), (-1, 5))]
    matrix = homography(pairs)
    zone = [(-1, 1), (1, 1), (1, 1000), (-1, 1000)]
    _data, box = warp(jpeg(), matrix, [zone])
    assert box[1] >= 1 and box[1] + box[3] < 100


def test_the_heading_of_a_track_is_its_last_real_step():
    assert track_heading([[0, 0], [1, 0], [1.01, 0]]) == 0
    assert track_heading([[0, 0]]) is None


def test_a_large_image_is_laid_quickly():
    matrix = homography([((0, 0), (0, 0)), ((1, 0), (8, 0)), ((1, 1), (8, 4.5)), ((0, 1), (0, 4.5))])
    content = jpeg()
    started = time.perf_counter()
    for _ in range(5):
        warp(content, matrix, [[(0, 0), (8, 0), (8, 4.5), (0, 4.5)]])
    assert (time.perf_counter() - started) / 5 < 0.25


def test_five_spots_far_from_the_origin_fit_within_a_metre():
    # The ground calibration of the driveway camera: five spots, plan coordinates up to 8.5 m.
    pairs = [
        ((0.294, 0.251), (-8.5, 0)),
        ((0.012, 0.561), (-8.5, 6)),
        ((0.837, 0.403), (0, 0)),
        ((0.768, 0.997), (0, 5)),
        ((0.171, 0.993), (-2.3, 5.95)),
    ]
    matrix = homography(pairs)
    for image, plan in pairs:
        placed = apply(matrix, image)
        assert placed is not None
        assert math.hypot(placed[0] - plan[0], placed[1] - plan[1]) < 1.2


def test_the_bend_lays_every_spot_exactly_where_it_was_marked():
    pairs = [
        ((0.294, 0.251), (-8.5, 0)),
        ((0.012, 0.561), (-8.5, 6)),
        ((0.837, 0.403), (0, 0)),
        ((0.768, 0.997), (0, 5)),
        ((0.171, 0.993), (-2.3, 5.95)),
    ]
    inverse = invert(homography(pairs))
    bend = Bend(inverse, pairs)
    for image, plan in pairs:
        w = inverse[2][0] * plan[0] + inverse[2][1] * plan[1] + inverse[2][2]
        u = (inverse[0][0] * plan[0] + inverse[0][1] * plan[1] + inverse[0][2]) / w
        v = (inverse[1][0] * plan[0] + inverse[1][1] * plan[1] + inverse[1][2]) / w
        du, dv = bend.offset(plan)
        assert math.isclose(u + du, image[0], abs_tol=1e-6)
        assert math.isclose(v + dv, image[1], abs_tol=1e-6)


def test_points_ahead_of_a_mower_follow_its_heading():
    # Heading 90 is down the plan; right of it is to the west.
    x, y = ahead_to_plan((1.0, 0.5), (5.0, 5.0), 90.0)
    assert math.isclose(x, 4.5) and math.isclose(y, 6.0)


def test_a_mower_calibrated_by_spots_lays_them_where_they_are_ahead_of_it():
    spots = [((0.2, 1.0), (0.4, -0.3)), ((0.8, 1.0), (0.4, 0.3)), ((0.7, 0.5), (1.5, 0.8)), ((0.3, 0.5), (1.5, -0.8))]
    matrix, square, pairs = mower_calibrated(spots, 2.0, (0.0, 0.0), 0.0)
    for image, plan in pairs:
        placed = apply(matrix, image)
        assert math.isclose(placed[0], plan[0], abs_tol=1e-6) and math.isclose(placed[1], plan[1], abs_tol=1e-6)
    assert square == [(0, -2), (2, -2), (2, 2), (0, 2)]


def test_the_image_fades_out_at_the_range_of_the_camera():
    mask = fade_mask((200, 200), 0.0, 0.0, 10.0, (10.0, 10.0), 8.0)
    assert mask.getpixel((100, 100)) == 255
    assert mask.getpixel((100, 100 + 30)) == 255
    assert 0 < mask.getpixel((100, 100 + 60)) < 255
    assert mask.getpixel((100, 199)) == 0


def test_the_image_fades_in_at_its_sides_and_bottom_but_not_at_its_top():
    mask = edge_mask((200, 100))
    assert mask.getpixel((100, 0)) == 255
    assert mask.getpixel((100, 50)) == 255
    assert mask.getpixel((0, 50)) < 30 and mask.getpixel((199, 50)) < 30
    assert mask.getpixel((100, 99)) < 30
    assert 100 < mask.getpixel((10, 50)) < 160
