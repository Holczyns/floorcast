"""EXPERIMENTAL: a camera image laid on the ground of the plan, like the top view of a car.

1. An image (normalised 0..1) maps onto the plan by a homography from calibration pairs: on the plan
   for a fixed camera, ahead of the mower for a mower camera (rule 6).
2. The image is laid only inside the clip polygons (zones or the square ahead of a mower) and only
   on the side of the horizon facing the camera; everything else stays transparent.
3. The result is a WebP with transparency over the box of the clip, at PX_PER_METRE at most.
4. With five or more calibration spots the fit misses each a little; a smooth bend makes every spot land
   where it was marked (Bend).
5. The image fades with the distance from the camera, like the glow of a lamp: whole up to FADE_FROM of
   its range, gone at the range. It also fades softly over EDGE of the image at its bottom, nearest the
   camera, and at its sides, so its edges do not cut the plan.
6. A calibrated mower camera has its spots relative to the mower (ahead and right of its centre, in
   metres); they are placed on the plan from its pose and calibrate it as a fixed camera would be.

Pure calculations with Pillow, no Home Assistant; run it in an executor.
"""

from __future__ import annotations

import io
import math
from collections.abc import Sequence

from PIL import Image, ImageChops, ImageDraw, ImageFilter

from .homography import Matrix, Point, homography, solve

PX_PER_METRE = 60
MOST_PX = 1200
# How many times farther than the middle of its clip the image is laid at most.
HORIZON_FAR = 10
# Side of a mesh cell in output pixels.
MESH_PX = 16
# Part of the range over which the image stays whole; it fades out over the rest (rule 5).
FADE_FROM = 0.5
FADE_STEPS = 24
# Part of the image width and height over which its sides and bottom fade in (rule 5).
EDGE = 0.1


def invert(m: Matrix) -> Matrix | None:
    (a, b, c), (d, e, f), (g, h, i) = m
    det = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)
    if abs(det) < 1e-12:
        return None
    return [
        [(e * i - f * h) / det, (c * h - b * i) / det, (b * f - c * e) / det],
        [(f * g - d * i) / det, (a * i - c * g) / det, (c * d - a * f) / det],
        [(d * h - e * g) / det, (b * g - a * h) / det, (a * e - b * d) / det],
    ]


def _multiply(a: Matrix, b: Matrix) -> Matrix:
    return [[sum(a[r][k] * b[k][c] for k in range(3)) for c in range(3)] for r in range(3)]


def ahead_to_plan(ahead: Point, at: Point, heading: float) -> Point:
    """Rule 6: a point ahead and right of a mower centre on the plan; ahead is along the heading, right a
    quarter turn clockwise from it."""
    ax, ay = math.cos(math.radians(heading)), math.sin(math.radians(heading))
    return (at[0] + ahead[0] * ax - ahead[1] * ay, at[1] + ahead[0] * ay + ahead[1] * ax)


def mower_calibrated(
    spots: Sequence[tuple[Point, Point]], reach: float, at: Point, heading: float
) -> tuple[Matrix, list[Point], list[tuple[Point, Point]]] | None:
    """Rule 6: the matrix of a mower camera from (image, ahead) spots, the square of ground ahead of the
    mower within its reach, and the spots on the plan for the bend."""
    pairs = [(image, ahead_to_plan(ahead, at, heading)) for image, ahead in spots]
    matrix = homography(pairs)
    if matrix is None:
        return None
    square = [ahead_to_plan(p, at, heading) for p in ((0, -reach), (reach, -reach), (reach, reach), (0, reach))]
    return matrix, square, pairs


def fade_mask(size: tuple[int, int], x0: float, y0: float, scale: float, centre: Point, reach: float) -> Image.Image:
    """Rule 5: whole up to FADE_FROM of the reach around the centre, fading to nothing at the reach."""
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    cx, cy = (centre[0] - x0) * scale, (centre[1] - y0) * scale
    outer, inner = reach * scale, reach * FADE_FROM * scale
    # Rings from the outside in, each a little more opaque; the blur smooths their steps.
    for step in range(FADE_STEPS + 1):
        r = outer - (outer - inner) * step / FADE_STEPS
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=round(255 * step / FADE_STEPS))
    return mask.filter(ImageFilter.GaussianBlur(max(1.0, (outer - inner) / FADE_STEPS)))


def edge_mask(size: tuple[int, int]) -> Image.Image:
    """Rule 5: opaque inside, fading to nothing over EDGE at the sides and the bottom of an image."""
    width, height = size
    side = max(1, round(width * EDGE))
    bottom = max(1, round(height * EDGE))
    columns = Image.new("L", (width, 1))
    columns.putdata([round(255 * min(1.0, (x + 0.5) / side, (width - x - 0.5) / side)) for x in range(width)])
    rows = Image.new("L", (1, height))
    rows.putdata([round(255 * min(1.0, (height - y - 0.5) / bottom)) for y in range(height)])
    return ImageChops.darker(columns.resize(size), rows.resize(size))


def _front(polygon: Sequence[Point], line: tuple[float, float, float]) -> list[Point]:
    """Rule 2: the part of a polygon where a x + b y + c > 0 (Sutherland-Hodgman against one line)."""
    a, b, c = line
    out: list[Point] = []
    for i, p in enumerate(polygon):
        q = polygon[(i + 1) % len(polygon)]
        fp = a * p[0] + b * p[1] + c
        fq = a * q[0] + b * q[1] + c
        if fp > 0:
            out.append(p)
        if (fp > 0) != (fq > 0):
            t = fp / (fp - fq)
            out.append((p[0] + t * (q[0] - p[0]), p[1] + t * (q[1] - p[1])))
    return out


class Bend:
    """Rule 4: a smooth correction of the matrix so every calibration spot lands exactly where it was marked.

    The matrix is a least squares fit; with five or more spots, and a lens that bends the edges, each spot
    misses its mark by some decimetres. The misses, as image offsets at the plan spots, are spread over the
    plan by a thin plate spline: exact at the spots, smooth and nearly flat between and beyond them.
    """

    def __init__(self, inverse: Matrix, pairs: Sequence[tuple[Point, Point]]) -> None:
        self.points: list[Point] = []
        self.weights: list[tuple[float, float]] = []
        self.affine: list[tuple[float, float]] = [(0.0, 0.0)] * 3
        if len(pairs) < 5:
            return
        plan = [q for _, q in pairs]
        misses = []
        for image, spot in pairs:
            placed = _apply(inverse, spot)
            if placed is None:
                return
            misses.append((image[0] - placed[0], image[1] - placed[1]))
        n = len(plan)
        size = n + 3
        a = [[0.0] * size for _ in range(size)]
        for i in range(n):
            for j in range(n):
                a[i][j] = _kernel(math.hypot(plan[i][0] - plan[j][0], plan[i][1] - plan[j][1]))
            for k, value in enumerate((1.0, plan[i][0], plan[i][1])):
                a[i][n + k] = value
                a[n + k][i] = value
        solved = []
        for axis in (0, 1):
            solution = solve(a, [miss[axis] for miss in misses] + [0.0, 0.0, 0.0])
            if solution is None:
                return
            solved.append(solution)
        self.points = plan
        self.weights = [(solved[0][i], solved[1][i]) for i in range(n)]
        self.affine = [(solved[0][n + k], solved[1][n + k]) for k in range(3)]

    def offset(self, p: Point) -> Point:
        du = self.affine[0][0] + self.affine[1][0] * p[0] + self.affine[2][0] * p[1]
        dv = self.affine[0][1] + self.affine[1][1] * p[0] + self.affine[2][1] * p[1]
        for (x, y), (wu, wv) in zip(self.points, self.weights, strict=True):
            k = _kernel(math.hypot(p[0] - x, p[1] - y))
            du += wu * k
            dv += wv * k
        return (du, dv)


def _kernel(r: float) -> float:
    return r * r * math.log(r) if r > 1e-12 else 0.0


def _apply(m: Matrix, p: Point) -> Point | None:
    w = m[2][0] * p[0] + m[2][1] * p[1] + m[2][2]
    if abs(w) < 1e-12:
        return None
    return ((m[0][0] * p[0] + m[0][1] * p[1] + m[0][2]) / w, (m[1][0] * p[0] + m[1][1] * p[1] + m[1][2]) / w)


def warp(
    content: bytes,
    matrix: Matrix,
    clips: Sequence[Sequence[Point]],
    pairs: Sequence[tuple[Point, Point]] = (),
    fade: tuple[Point, float] | None = None,
) -> tuple[bytes, list[float]] | None:
    """Rules 2 to 5: the image laid on the plan inside the clips, as WebP, with its box [x, y, w, h] in metres.

    Fade is the camera on the plan and its range; without it the image does not fade.
    """
    inverse = invert(matrix)
    if inverse is None or not clips:
        return None
    # The third row of the inverse grows with the distance of a ground point from the camera and changes
    # sign behind it. The bottom middle of the image is ground before the camera and gives the sign. Near
    # the horizon the image stretches without end: with a range the fade ends it there, so the image fades
    # out at the range as set; without one it stops HORIZON_FAR times farther than that point.
    a, b, c = inverse[2]
    w = matrix[2][0] * 0.5 + matrix[2][1] * 0.95 + matrix[2][2]
    if abs(w) < 1e-12:
        return None
    sign = 1.0 if w > 0 else -1.0
    before = (sign * a, sign * b, sign * c)
    near_enough = (-sign * a, -sign * b, HORIZON_FAR / abs(w) - sign * c)
    ranged = bool(fade and fade[1] > 0)
    visible = [
        p
        for p in (_front(clip, before) if ranged else _front(_front(clip, before), near_enough) for clip in clips)
        if len(p) >= 3
    ]
    if not visible:
        return None
    xs = [p[0] for clip in visible for p in clip]
    ys = [p[1] for clip in visible for p in clip]
    x0, y0 = min(xs), min(ys)
    w, h = max(xs) - x0, max(ys) - y0
    if w <= 0 or h <= 0:
        return None
    scale = min(PX_PER_METRE, MOST_PX / max(w, h))
    size = (max(1, math.ceil(w * scale)), max(1, math.ceil(h * scale)))

    with Image.open(io.BytesIO(content)) as source:
        image = source.convert("RGBA")
    image.putalpha(edge_mask(image.size))
    bend = Bend(inverse, pairs)

    def pixel(px: float, py: float) -> tuple[float, float] | None:
        """Image pixel shown at an output pixel: through the matrix, then the bend of rule 4."""
        p = (x0 + px / scale, y0 + py / scale)
        uv = _apply(inverse, p)
        if uv is None or (inverse[2][0] * p[0] + inverse[2][1] * p[1] + inverse[2][2]) * sign <= 0:
            return None
        du, dv = bend.offset(p)
        return ((uv[0] + du) * image.width, (uv[1] + dv) * image.height)

    # A mesh of quads, each mapped bilinearly; fine enough that the bend and perspective look smooth.
    cells: list[tuple[tuple[int, int, int, int], tuple[float, ...]]] = []
    columns = max(1, math.ceil(size[0] / MESH_PX))
    rows = max(1, math.ceil(size[1] / MESH_PX))
    xs_px = [round(size[0] * i / columns) for i in range(columns + 1)]
    ys_px = [round(size[1] * j / rows) for j in range(rows + 1)]
    corners = [[pixel(x, y) for x in xs_px] for y in ys_px]
    for j in range(rows):
        for i in range(columns):
            quad = (corners[j][i], corners[j + 1][i], corners[j + 1][i + 1], corners[j][i + 1])
            if any(q is None for q in quad):
                continue
            cells.append(((xs_px[i], ys_px[j], xs_px[i + 1], ys_px[j + 1]), tuple(v for q in quad for v in q)))
    if not cells:
        return None
    laid = image.transform(size, Image.Transform.MESH, cells, Image.Resampling.BILINEAR, fillcolor=(0, 0, 0, 0))

    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    for clip in visible:
        draw.polygon([((p[0] - x0) * scale, (p[1] - y0) * scale) for p in clip], fill=255)
    if fade and fade[1] > 0:
        mask = ImageChops.multiply(mask, fade_mask(size, x0, y0, scale, fade[0], fade[1]))
    laid.putalpha(ImageChops.multiply(laid.getchannel("A"), mask))

    out = io.BytesIO()
    laid.save(out, "WEBP", quality=70, method=4)
    return out.getvalue(), [round(x0, 3), round(y0, 3), round(w, 3), round(h, 3)]


def track_heading(track: Sequence[Sequence[float]]) -> float | None:
    """Heading of the last step of a track at least 5 cm long, as drawn on the plan; as trackHeading in render.ts."""
    if not track:
        return None
    last = track[-1]
    for p in reversed(track[:-1]):
        if math.hypot(last[0] - p[0], last[1] - p[1]) >= 0.05:
            return math.degrees(math.atan2(last[1] - p[1], last[0] - p[0]))
    return None
