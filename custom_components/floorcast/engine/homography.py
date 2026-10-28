"""Mapping points of a camera image onto the plan.

The ground seen by a camera is a plane, so a homography (a 3 x 3 matrix) maps image
points on the ground onto plan points. It is found from four or more pairs of the same
spot in the image (normalised 0..1) and on the plan (metres), by least squares when there
are more than four, over coordinates moved to their centre and scaled. The same calculation
runs in the editor (model.ts).
"""

from __future__ import annotations

import math
from collections.abc import Sequence

Point = tuple[float, float]
Matrix = list[list[float]]


def solve(a: list[list[float]], b: list[float]) -> list[float] | None:
    """Gaussian elimination with partial pivoting; None when the pairs do not fix a mapping."""
    n = len(b)
    m = [[*row, b[i]] for i, row in enumerate(a)]
    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(m[r][col]))
        if abs(m[pivot][col]) < 1e-12:
            return None
        m[col], m[pivot] = m[pivot], m[col]
        for r in range(n):
            if r == col:
                continue
            k = m[r][col] / m[col][col]
            for c in range(col, n + 1):
                m[r][c] -= k * m[col][c]
    return [m[i][n] / m[i][i] for i in range(n)]


def _normaliser(points: Sequence[Point]) -> Matrix:
    """Moves points to their centre and scales them to a mean distance of sqrt(2) from it."""
    cx = sum(p[0] for p in points) / len(points)
    cy = sum(p[1] for p in points) / len(points)
    spread = sum(math.hypot(p[0] - cx, p[1] - cy) for p in points) / len(points)
    s = math.sqrt(2) / spread if spread > 1e-12 else 1.0
    return [[s, 0.0, -s * cx], [0.0, s, -s * cy], [0.0, 0.0, 1.0]]


def _multiply(a: Matrix, b: Matrix) -> Matrix:
    return [[sum(a[r][k] * b[k][c] for k in range(3)) for c in range(3)] for r in range(3)]


def _transform(m: Matrix, p: Point) -> Point:
    w = m[2][0] * p[0] + m[2][1] * p[1] + m[2][2]
    return ((m[0][0] * p[0] + m[0][1] * p[1] + m[0][2]) / w, (m[1][0] * p[0] + m[1][1] * p[1] + m[1][2]) / w)


def homography(pairs: Sequence[tuple[Point, Point]]) -> Matrix | None:
    """Matrix taking image points to plan points, from (image, plan) pairs; None below four pairs.

    Both sides are first moved to their centre and scaled (Hartley); without it, least squares over
    plan coordinates of many metres fits five or more pairs badly. The sign of the result makes the
    calibration points lie before the camera, so apply() tells them from points beyond the horizon.
    """
    if len(pairs) < 4:
        return None
    to_image = _normaliser([p for p, _ in pairs])
    to_plan = _normaliser([q for _, q in pairs])
    normalised = [(_transform(to_image, p), _transform(to_plan, q)) for p, q in pairs]
    rows: list[list[float]] = []
    values: list[float] = []
    for (u, v), (x, y) in normalised:
        rows.append([u, v, 1, 0, 0, 0, -u * x, -v * x])
        values.append(x)
        rows.append([0, 0, 0, u, v, 1, -u * y, -v * y])
        values.append(y)
    # Normal equations: exact for four pairs, least squares for more.
    a = [[sum(r[i] * r[j] for r in rows) for j in range(8)] for i in range(8)]
    b = [sum(r[i] * value for r, value in zip(rows, values, strict=True)) for i in range(8)]
    h = solve(a, b)
    if h is None:
        return None
    s = 1 / to_plan[0][0]
    from_plan = [[s, 0.0, -to_plan[0][2] * s], [0.0, s, -to_plan[1][2] * s], [0.0, 0.0, 1.0]]
    m = _multiply(from_plan, _multiply([h[0:3], h[3:6], [h[6], h[7], 1.0]], to_image))
    if abs(m[2][2]) < 1e-12:
        return None
    m = [[value / m[2][2] for value in row] for row in m]
    w = sum(m[2][0] * p[0] + m[2][1] * p[1] + m[2][2] for p, _ in pairs)
    return [[-value for value in row] for row in m] if w < 0 else m


def apply(matrix: Matrix, p: Point) -> Point | None:
    """Plan point of an image point; None for a point on or beyond the horizon of the image."""
    u, v = p
    w = matrix[2][0] * u + matrix[2][1] * v + matrix[2][2]
    if w <= 1e-9:
        return None
    return (
        (matrix[0][0] * u + matrix[0][1] * v + matrix[0][2]) / w,
        (matrix[1][0] * u + matrix[1][1] * v + matrix[1][2]) / w,
    )
