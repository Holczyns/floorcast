import pytest

from custom_components.floorcast.engine.homography import apply, homography

# A camera looking down a 4 x 8 m lawn: the far edge is narrow and high in the image.
PAIRS = [
    ((0.0, 1.0), (0.0, 0.0)),
    ((1.0, 1.0), (4.0, 0.0)),
    ((0.75, 0.4), (4.0, 8.0)),
    ((0.25, 0.4), (0.0, 8.0)),
]


def test_the_pairs_map_onto_themselves():
    matrix = homography(PAIRS)
    for image, plan in PAIRS:
        assert apply(matrix, image) == pytest.approx(plan, abs=1e-6)


def test_the_middle_of_the_image_bottom_is_the_middle_of_the_near_edge():
    assert apply(homography(PAIRS), (0.5, 1.0)) == pytest.approx((2.0, 0.0), abs=1e-6)


def test_extra_pairs_are_fitted_by_least_squares():
    matrix = homography(PAIRS)
    noisy = [*PAIRS, ((0.5, 0.7), tuple(c + 0.05 for c in apply(matrix, (0.5, 0.7))))]
    fitted = homography(noisy)
    assert apply(fitted, (0.5, 0.7)) == pytest.approx(apply(matrix, (0.5, 0.7)), abs=0.06)


def test_fewer_than_four_pairs_or_a_line_give_no_mapping():
    assert homography(PAIRS[:3]) is None
    assert homography([((0.1 * i, 0.1 * i), (i, i)) for i in range(4)]) is None
