// Stairs of the pixel look, drawn pixel by pixel from how far up the walking line each point lies. A
// rectangular stair room is one straight flight. An L-shaped one is a flight along each arm joined by
// winders in the corner: steps fanning out from the inner corner of the L, narrow there and wide outside.
// Lower steps are darker, higher ones lighter, with a dark riser at the front of each step.
import { type Point, type Room, pointInPolygon } from "../model";
import { PPM, hash } from "./art";
import type { Scene } from "./scene";

const GOING = 0.24;
const LOW: [number, number, number] = [96, 64, 40];
const HIGH: [number, number, number] = [206, 160, 112];

type Side = "left" | "right" | "top" | "bottom";

/** The corners of a shape without points lying on a straight edge between two others. */
function corners(points: Point[]): Point[] {
  return points.filter((p, i) => {
    const a = points[(i + points.length - 1) % points.length];
    const b = points[(i + 1) % points.length];
    return Math.abs((p[0] - a[0]) * (b[1] - a[1]) - (p[1] - a[1]) * (b[0] - a[0])) > 1e-4;
  });
}

/** For each point of the room, how far up the walking line it lies in metres, and the length of the line. */
function walkingLine(room: Room): { along: (p: Point) => number; length: number } | undefined {
  const points = corners(room.points);
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const from = room.stairsFrom;
  if (points.length === 4) {
    const wide = x1 - x0 >= y1 - y0;
    const start: Side = from ?? (wide ? "left" : "bottom");
    const along = (p: Point) => (start === "left" ? p[0] - x0 : start === "right" ? x1 - p[0] : start === "top" ? p[1] - y0 : y1 - p[1]);
    return { along, length: start === "left" || start === "right" ? x1 - x0 : y1 - y0 };
  }
  if (points.length !== 6) return undefined;
  // L shape: the corner of its box missing from it, the inner corner of the L, the outer corner opposite.
  const pad = 0.03;
  const missing = ([[x0, y0], [x1, y0], [x0, y1], [x1, y1]] as Point[]).find(
    (c) => !pointInPolygon([c[0] + (c[0] === x0 ? pad : -pad), c[1] + (c[1] === y0 ? pad : -pad)], points),
  );
  const inner = points.find((p) => p[0] > x0 + pad && p[0] < x1 - pad && p[1] > y0 + pad && p[1] < y1 - pad);
  if (!missing || !inner) return undefined;
  const outer: Point = [missing[0] === x0 ? x1 : x0, missing[1] === y0 ? y1 : y0];
  // The free ends of the two arms: of the arm along the outer horizontal side, and of the one along the outer vertical side.
  const endX = missing[0];
  const endY = missing[1];
  const flatLength = Math.abs(inner[0] - endX);
  const tallLength = Math.abs(inner[1] - endY);
  const radius = (Math.abs(outer[1] - inner[1]) + Math.abs(outer[0] - inner[0])) / 4;
  const turn = (Math.PI / 2) * radius;
  const startSide: Side = endX === x0 ? "left" : "right";
  const startTall: Side = endY === y0 ? "top" : "bottom";
  const fromFlat = from ? from === startSide || (from !== startTall && flatLength >= tallLength) : flatLength >= tallLength;
  const inCorner = (p: Point) => (p[0] - inner[0]) * (outer[0] - inner[0]) >= 0 && (p[1] - inner[1]) * (outer[1] - inner[1]) >= 0;
  const inFlat = (p: Point) => (p[1] - inner[1]) * (outer[1] - inner[1]) >= 0;
  const along = (p: Point): number => {
    if (inCorner(p)) {
      // The share of the quarter turn, from the side of the flat arm to the side of the tall arm.
      const share = Math.atan2(Math.abs(p[0] - inner[0]), Math.abs(p[1] - inner[1])) / (Math.PI / 2);
      return fromFlat ? flatLength + share * turn : tallLength + (1 - share) * turn;
    }
    if (inFlat(p)) return fromFlat ? Math.abs(p[0] - endX) : tallLength + turn + Math.abs(p[0] - inner[0]);
    return fromFlat ? flatLength + turn + Math.abs(p[1] - inner[1]) : Math.abs(p[1] - endY);
  };
  return { along, length: flatLength + turn + tallLength };
}

export function drawStairs(c: CanvasRenderingContext2D, scene: Scene, room: Room): void {
  const line = walkingLine(room);
  const xs = room.points.map((p) => p[0]);
  const ys = room.points.map((p) => p[1]);
  const [left, top] = scene.px([Math.min(...xs), Math.min(...ys)]);
  const [right, bottom] = scene.px([Math.max(...xs), Math.max(...ys)]);
  const w = right - left;
  const h = bottom - top;
  if (w <= 0 || h <= 0) return;
  const steps = line ? Math.max(2, Math.round(line.length / GOING)) : 1;
  const step = new Int16Array(w * h).fill(-1);
  for (let j = 0; j < h; j++)
    for (let i = 0; i < w; i++) {
      const p: Point = [scene.x0 + (left + i + 0.5) / PPM, scene.y0 + (top + j + 0.5) / PPM];
      if (!pointInPolygon(p, room.points)) continue;
      const along = line ? line.along(p) : 0;
      step[j * w + i] = Math.min(steps - 1, Math.max(0, Math.floor((along / (line?.length ?? 1)) * steps)));
    }
  const image = c.getImageData(left, top, w, h);
  const d = image.data;
  for (let j = 0; j < h; j++)
    for (let i = 0; i < w; i++) {
      const k = step[j * w + i];
      if (k < 0) continue;
      const height = (k + 0.5) / steps;
      let colour = LOW.map((v, n) => Math.round(v + (HIGH[n] - v) * height)) as [number, number, number];
      // The front of a step: next to a lower one, a dark riser and a light nose just above it.
      const lower = (di: number, dj: number) => {
        const ii = i + di;
        const jj = j + dj;
        if (ii < 0 || jj < 0 || ii >= w || jj >= h) return false;
        const other = step[jj * w + ii];
        return other >= 0 && other < k;
      };
      if (lower(0, 1) || lower(1, 0) || lower(-1, 0) || lower(0, -1)) colour = [58, 38, 24];
      else if (lower(0, 2) || lower(2, 0) || lower(-2, 0) || lower(0, -2)) colour = colour.map((v) => Math.min(255, v + 34)) as [number, number, number];
      else if (hash(i, j, 11) < 0.08) colour = colour.map((v) => v - 14) as [number, number, number];
      const o = (j * w + i) * 4;
      d[o] = colour[0];
      d[o + 1] = colour[1];
      d[o + 2] = colour[2];
      d[o + 3] = 255;
    }
  c.putImageData(image, left, top);
}
