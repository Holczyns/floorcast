// What a level looks like in the pixel look, worked out once from the plan: walls cut by their openings,
// the base picture (ground, floors, wall faces, wall tops), furniture guessed from the obstacles and what
// each light, window and screen can reach past the walls.
import { type Device, type FenceStyle, type FurnitureKind, type Item, type Level, type Opening, type Plan, type Point, type Room, deviceCentre, drawnBounds, itemPoints, pointInPolygon } from "../model";
import { FURNITURE_COLOURS, furnitureOf } from "./furniture";
import { LOOKS, PPM, type RoomKind, type RoomLook, type Texture, canvas, crops, disc, flowers, hash, rect, roomKind, texture, tone } from "./art";
import { drawStairs } from "./stairs";

/** Pixels of the light buffer cell. */
export const LIGHT_CELL = 4;
/**
 * Height of a wall on the screen, in metres of the plan. The plan gives the foot of every wall; its top is
 * drawn this much higher, with its face between top and foot.
 */
export const FACE = 0.5;

export type Side = "top" | "bottom" | "left" | "right";

export type Box = [number, number, number, number];

export interface SceneRoom {
  room: Room;
  kind: RoomKind;
  look: RoomLook;
  indoor: boolean;
}

/** A stretch of a wall: solid, or the opening of a door or window. */
export interface Piece {
  kind: "solid" | "window" | "door";
  wallId: string;
  /** Bounding box in metres: x0, y0, x1, y1. */
  box: Box;
  horizontal: boolean;
  /** Along the wall and across it. */
  u: Point;
  n: Point;
  t: number;
  length: number;
  opening?: Opening;
  centre: Point;
  /** Out of the house, or out of the room the opening belongs to. */
  out: Point;
  room: SceneRoom | null;
  other: SceneRoom | null;
  exterior: boolean;
  /** A window down to the floor that people walk through. */
  terrace: boolean;
  /** Pixels: the face below a wall running left to right, and the glass of a window. */
  face?: Box;
  glass?: Box;
  daylight?: Mask;
  spill?: Mask;
  sun?: HTMLCanvasElement;
}

export interface Mask {
  cells: Int32Array;
  values: Float32Array;
}

export interface Furniture {
  item: Item;
  points: Point[];
  box: Box;
  kind: FurnitureKind;
  room: SceneRoom | null;
  units: [Point, "sink" | "stove" | "kettle"][];
}

export interface SceneLight {
  device: Device;
  entity: string;
  masks: Mask[];
  colour: [number, number, number];
  line: boolean;
}

const DOOR_LIKE = new Set(["door", "gate"]);

/** How tall a fence stands in the picture, a little lower than the walls of the house. */
export const FENCE_HEIGHT = 0.4;

/** A fence along a line: its kind, where it starts, which way it runs, and its gates and wickets. */
export interface Fence {
  style: FenceStyle;
  a: Point;
  u: Point;
  length: number;
  gaps: { s: number; e: number; opening: Opening }[];
}

/** The colour of a fence of each kind at a pixel along it (s) and above the ground (z), or none where it is open. */
function fencePixel(style: FenceStyle, s: number, z: number, h: number): string | null {
  switch (style) {
    case "picket": {
      if (s % 40 < 2) return z === h - 1 ? "#7a5232" : "#6b4a33";
      const m = s % 4;
      if (m === 3) return z === 3 || z === h - 4 ? "#8a6440" : null;
      if (z === h - 1) return m === 1 ? "#d9b483" : null;
      return m === 0 ? "#b88f60" : "#c8a070";
    }
    case "boards": {
      if (s % 48 < 2) return "#5a3c28";
      if (z === h - 1) return "#b8865a";
      if (z % 3 === 2) return "#6b4a33";
      return Math.floor(z / 3) % 2 ? "#9a6a44" : "#a87650";
    }
    case "panel": {
      if (s % 80 < 2) return "#2a2c31";
      if (z === 1 || z === Math.floor(h / 2) || z === h - 2) return "#3a3d42";
      return s % 3 === 0 ? "#43474e" : null;
    }
    case "mesh": {
      if (s % 80 < 2) return "#5d6a5a";
      if (z === h - 1) return "#7d868f";
      return (s + z) % 4 === 0 || (s - z + 400) % 4 === 0 ? "#9aa3ad" : null;
    }
    case "brick": {
      if (z >= h - 2) return z === h - 1 ? "#cfc9bf" : "#b8b2a8";
      const row = Math.floor(z / 3);
      if (z % 3 === 2 || (s + (row % 2) * 4) % 8 === 7) return "#c9c0b0";
      return ["#b5654a", "#a85a40", "#bf7055"][Math.floor(hash(Math.floor((s + (row % 2) * 4) / 8), row, 5) * 3)];
    }
    case "gabion": {
      if (s % 6 === 0 || z % 6 === 0 || z === h - 1) return "#8a9099";
      return ["#9a958d", "#857f77", "#b0aba2", "#6f6a63"][Math.floor(hash(s >> 1, z >> 1, 9) * 4)];
    }
  }
  return null;
}

/** A shut gate or wicket in a fence: a frame with bars of dark metal. */
function gatePixel(s: number, z: number, h: number, width: number): string | null {
  if (z === 0 || z === h - 1 || s < 2 || s >= width - 2) return "#2a2c31";
  return s % 3 === 0 ? "#3a3d42" : null;
}

function boxOf(points: Point[]): Box {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}

export class Scene {
  readonly level: Level;
  readonly x0: number;
  readonly y0: number;
  readonly width: number;
  readonly height: number;
  /** Ground and floors. */
  readonly base: HTMLCanvasElement;
  /** Walls standing up from their feet: faces, windows in them and tops. */
  readonly walls: HTMLCanvasElement;
  /** Everything drawn, ground and walls, as a mask for the space round a house without a garden. */
  readonly outline: HTMLCanvasElement;
  /** Strips of the walls in the order of drawing: a wall covers what stands behind it and goes behind what stands in front. */
  readonly wallParts: { x: number; y: number; w: number; h: number; order: number }[] = [];
  /** Whether the picture covers every pixel; without a garden the space round the house stays clear. */
  readonly opaque: boolean;
  readonly rooms: SceneRoom[] = [];
  readonly pieces: Piece[] = [];
  readonly windows: Piece[] = [];
  readonly doors: Piece[] = [];
  readonly furniture: Furniture[] = [];
  readonly garden: { item: Item; points: Point[]; box: Box }[] = [];
  readonly lights: SceneLight[] = [];
  readonly fences: Fence[] = [];
  /** Fences drawn once, and slices of them for the drawing order like the walls. */
  readonly fenceArt: HTMLCanvasElement;
  readonly fenceParts: { x: number; y: number; w: number; h: number; order: number }[] = [];
  readonly screens: { device: Device; mask: Mask }[] = [];
  /** Light buffer: size and, by cell, the room index, -1 outside, -2 on a wall top. */
  readonly lightWidth: number;
  readonly lightHeight: number;
  readonly region: Int16Array;
  private readonly blockers: Box[];

  constructor(level: Level, plan: Plan | undefined) {
    this.level = level;
    const bounds = drawnBounds(level, 0.6);
    this.x0 = bounds.x;
    this.y0 = bounds.y - FACE;
    this.width = Math.ceil(bounds.w * PPM);
    this.height = Math.ceil((bounds.h + FACE) * PPM);
    this.opaque = level.items.some((item) => item.type === "lawn" || item.type === "paving");
    for (const room of level.rooms) {
      const kind = roomKind(room);
      this.rooms.push({ room, kind, look: LOOKS[kind], indoor: !room.outdoor && !room.garden });
    }
    this.cutWalls(plan);
    this.sideOfOpenings();
    for (const item of level.items) {
      const points = itemPoints(item);
      if (!points.length) continue;
      if (item.type === "obstacle" || item.type === "round_obstacle") this.furniture.push(this.guess(item, points));
      else this.garden.push({ item, points, box: boxOf(points) });
    }
    for (const piece of this.furniture) if (piece.kind === "kitchen") this.placeUnits(piece);
    // Lamps light through doors, not through windows: what leaves a room by a window is its glow, as open as its blind.
    this.blockers = this.pieces.filter((piece) => piece.kind !== "door").map((piece) => piece.box);
    this.lightWidth = Math.ceil(this.width / LIGHT_CELL);
    this.lightHeight = Math.ceil(this.height / LIGHT_CELL);
    this.region = new Int16Array(this.lightWidth * this.lightHeight);
    this.fillRegions();
    this.makeLights();
    const [base, bc] = canvas(this.width, this.height);
    this.base = base;
    this.drawBase(bc);
    const [walls, wc] = canvas(this.width, this.height);
    this.walls = walls;
    this.drawFaces(wc);
    this.drawWallTops(wc);
    this.drawJambs(wc);
    const [outline, oc] = canvas(this.width, this.height);
    oc.drawImage(base, 0, 0);
    oc.drawImage(walls, 0, 0);
    this.outline = outline;
    this.cutWallParts();
    const [fenceArt, fc] = canvas(this.width, this.height);
    this.fenceArt = fenceArt;
    for (const fence of this.fences) this.drawFenceArt(fc, fence);
  }

  /**
   * A fence into the picture of fences, standing up from its line, with slices for the drawing order: across
   * a fence running sideways, down one running down the screen, each as far as the fence reaches the other way.
   */
  private drawFenceArt(c: CanvasRenderingContext2D, f: Fence): void {
    const h = Math.round(FENCE_HEIGHT * PPM);
    const sideways = Math.abs(f.u[0]) >= Math.abs(f.u[1]);
    const column = sideways ? 1 : 2;
    const steps = Math.ceil(f.length * PPM);
    const at = (k: number) => this.px([f.a[0] + (f.u[0] * k) / PPM, f.a[1] + (f.u[1] * k) / PPM]);
    const open = (k: number) => f.gaps.some((g) => k / PPM >= g.s && k / PPM < g.e);
    for (let k = 0; k <= steps; k++) {
      if (open(k)) continue;
      const [x, y] = at(k);
      rect(c, sideways ? x : x + column, sideways ? y + 1 : y, 1, 1, "rgba(0,0,0,.2)");
      for (let z = 0; z < h; z++) {
        const colour = fencePixel(f.style, k, z, h);
        if (colour) rect(c, x, y - 1 - z, column, 1, colour);
      }
    }
    const [ax, ay] = at(0);
    const [bx, by] = at(steps);
    const x0 = Math.min(ax, bx) - 1;
    const x1 = Math.max(ax, bx) + column + 2;
    const y0 = Math.min(ay, by) - h - 1;
    const y1 = Math.max(ay, by) + 2;
    const slice = 16;
    if (sideways) {
      for (let x = x0; x < x1; x += slice) {
        // The foot of the fence where this slice ends nearest the viewer.
        const k0 = Math.max(0, Math.min(steps, Math.round(((x - ax) / (bx - ax || 1)) * steps)));
        const k1 = Math.max(0, Math.min(steps, Math.round(((x + slice - ax) / (bx - ax || 1)) * steps)));
        this.fenceParts.push({ x, y: y0, w: Math.min(slice, x1 - x), h: y1 - y0, order: Math.max(at(k0)[1], at(k1)[1]) + 0.2 });
      }
    } else {
      for (let y = y0; y < y1; y += slice) {
        const part = Math.min(slice, y1 - y);
        this.fenceParts.push({ x: x0, y, w: x1 - x0, h: part, order: Math.min(y + part + h, y1) + 0.2 });
      }
    }
  }

  /** A shut gate or wicket in a fence, drawn in the order of things as it opens and shuts. */
  drawGate(c: CanvasRenderingContext2D, f: Fence, gap: Fence["gaps"][number]): void {
    const h = Math.round(FENCE_HEIGHT * PPM);
    const sideways = Math.abs(f.u[0]) >= Math.abs(f.u[1]);
    const column = sideways ? 1 : 2;
    const from = Math.round(gap.s * PPM);
    const width = Math.round((gap.e - gap.s) * PPM);
    for (let k = 0; k < width; k++) {
      const [x, y] = this.px([f.a[0] + (f.u[0] * (from + k)) / PPM, f.a[1] + (f.u[1] * (from + k)) / PPM]);
      for (let z = 0; z < h; z++) {
        const colour = gatePixel(k, z, h, width);
        if (colour) rect(c, x, y - 1 - z, column, 1, colour);
      }
    }
  }

  /**
   * A car standing like the rest of the picture: the body raised as tall as its kind, wheels peeping out,
   * the cabin on top with the windscreen towards its front, and lights at the end facing the viewer.
   */
  drawCar(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const [bx, by, bw, bh] = this.pxBox(g.box);
    const item = g.item;
    const main = item.colour ?? "#9aa3ad";
    const body = item.body ?? "hatchback";
    const front = item.front ?? (bh >= bw ? "top" : "left");
    const lengthwise = front === "top" || front === "bottom";
    const h = Math.round((body === "van" ? 0.34 : body === "suv" ? 0.3 : 0.24) * PPM);
    const wheel = "#1d1f25";
    for (const t of [0.18, 0.8]) {
      if (lengthwise) {
        const wy = by + Math.round(bh * t) - 3 - Math.round(h / 2);
        rect(c, bx - 1, wy, 2, 6, wheel);
        rect(c, bx + bw - 1, wy, 2, 6, wheel);
      }
    }
    this.box(c, g.points, h, tone(main, 0.08), tone(main, -0.22), { edge: tone(main, 0.3) });
    if (!lengthwise) for (const t of [0.18, 0.8]) rect(c, bx + Math.round(bw * t) - 3, by + bh - 3, 6, 3, wheel);
    // A band of the top from t0 to t1 of the length counted from the front, inset from the sides.
    const top = by - h;
    const band = (t0: number, t1: number, inset: number): Box => {
      const forward = front === "top" || front === "left";
      const a = forward ? t0 : 1 - t1;
      const b = forward ? t1 : 1 - t0;
      return lengthwise
        ? [bx + inset, top + Math.round(a * bh), bw - 2 * inset, Math.round((b - a) * bh)]
        : [bx + Math.round(a * bw), top + inset, Math.round((b - a) * bw), bh - 2 * inset];
    };
    const [c0, c1] = { hatchback: [0.36, 0.86], sedan: [0.35, 0.72], estate: [0.35, 0.93], suv: [0.33, 0.93], van: [0.16, 0.96] }[body];
    const rise = 3;
    const [gx, gy, gw, gh] = band(c0, c1, 2);
    rect(c, gx, gy - rise, gw, gh + rise, "#2b3540");
    const [sx, sy, sw, sh] = band(c0, c0 + 0.1, 2);
    rect(c, sx, sy - rise, sw, sh, "#5f7d95");
    const [rx, ry, rw, rh] = band(c0 + 0.12, c1 - 0.06, 3);
    rect(c, rx, ry - rise, rw, rh, tone(main, 0.15));
    rect(c, rx, ry - rise, rw, 1, tone(main, 0.35));
    // Lights on the face towards the viewer: headlights when the front is there, tail lights when the back is.
    const face = by + bh - h + 2;
    if (lengthwise) {
      const colour = front === "bottom" ? "#f5e6a0" : "#d0312d";
      rect(c, bx + 2, face, 3, 2, colour);
      rect(c, bx + bw - 5, face, 3, 2, colour);
    } else {
      rect(c, front === "left" ? bx + 1 : bx + bw - 3, face, 2, 2, "#f5e6a0");
      rect(c, front === "left" ? bx + bw - 3 : bx + 1, face, 2, 2, "#d0312d");
    }
  }

  /** The place of a car that is away: a dashed outline on the ground. */
  drawParking(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const [bx, by, bw, bh] = this.pxBox(g.box);
    const line = "rgba(255,255,255,.45)";
    for (let x = bx; x < bx + bw; x += 5) {
      rect(c, x, by, Math.min(3, bx + bw - x), 1, line);
      rect(c, x, by + bh - 1, Math.min(3, bx + bw - x), 1, line);
    }
    for (let y = by; y < by + bh; y += 5) {
      rect(c, bx, y, 1, Math.min(3, by + bh - y), line);
      rect(c, bx + bw - 1, y, 1, Math.min(3, by + bh - y), line);
    }
  }

  /** Each wall as strips for the drawing order; walls running down the screen in short strips, so a person beside one is not covered by all of it. */
  private cutWallParts(): void {
    const face = Math.round(FACE * PPM);
    for (const piece of this.pieces) {
      const [x, y, w, h] = this.pxBox(piece.box);
      if (piece.horizontal) {
        this.wallParts.push({ x, y: y - face, w, h: h + face, order: y + h });
        continue;
      }
      for (let top = y - face; top < y + h; top += 8) {
        const part = Math.min(8, y + h - top);
        this.wallParts.push({ x, y: top, w, h: part, order: Math.min(top + part + face, y + h) });
      }
    }
  }

  /** Whether a point lies within the walls of the house, in a room or not. */
  insideHouse(p: Point): boolean {
    const boxes = this.pieces.map((piece) => piece.box);
    if (!boxes.length) return false;
    return p[0] > Math.min(...boxes.map((b) => b[0])) && p[0] < Math.max(...boxes.map((b) => b[2])) && p[1] > Math.min(...boxes.map((b) => b[1])) && p[1] < Math.max(...boxes.map((b) => b[3]));
  }

  /** The floor of a room: the one chosen in the editor, or the one of its kind. */
  floorOf(r: SceneRoom): Texture {
    return r.room.floor ?? r.look.floor;
  }

  /** Pixel position of a point of the plan. */
  px(p: Point): Point {
    return [Math.round((p[0] - this.x0) * PPM), Math.round((p[1] - this.y0) * PPM)];
  }

  pxBox(b: Box): Box {
    const [x0, y0] = this.px([b[0], b[1]]);
    const [x1, y1] = this.px([b[2], b[3]]);
    return [x0, y0, x1 - x0, y1 - y0];
  }

  roomAt(p: Point, indoorOnly = true): SceneRoom | null {
    return this.rooms.find((r) => (!indoorOnly || r.indoor) && pointInPolygon(p, r.room.points)) ?? null;
  }

  // ---------------------------------------------------------------- walls
  private cutWalls(plan: Plan | undefined): void {
    for (const wall of this.level.walls) {
      const dx = wall.b[0] - wall.a[0];
      const dy = wall.b[1] - wall.a[1];
      const length = Math.hypot(dx, dy);
      if (length < 0.01) continue;
      const u: Point = [dx / length, dy / length];
      if (wall.fence) {
        // A fence is no wall of the house: only its gates and wickets open it; a window in it is ignored.
        const gaps = this.level.openings
          .filter((o) => o.wall === wall.id && DOOR_LIKE.has(o.type))
          .map((o) => ({ s: Math.max(0, o.at - o.width / 2), e: Math.min(length, o.at + o.width / 2), opening: o }))
          .sort((p, q) => p.s - q.s);
        this.fences.push({ style: wall.fence, a: wall.a, u, length, gaps });
        continue;
      }
      const n: Point = [-u[1], u[0]];
      const t = wall.t || plan?.wallTypes?.find((type) => type.id === wall.type)?.t || 0.15;
      const horizontal = Math.abs(dy) < Math.abs(dx);
      const openings = this.level.openings
        .filter((o) => o.wall === wall.id)
        .map((o) => ({ o, s: Math.max(0, o.at - o.width / 2), e: Math.min(length, o.at + o.width / 2) }))
        .sort((p, q) => p.s - q.s);
      const add = (s: number, e: number, kind: Piece["kind"], opening?: Opening) => {
        const s0 = s <= 0.001 ? -t / 2 : s;
        const e0 = e >= length - 0.001 ? length + t / 2 : e;
        const p1: Point = [wall.a[0] + u[0] * s0, wall.a[1] + u[1] * s0];
        const p2: Point = [wall.a[0] + u[0] * e0, wall.a[1] + u[1] * e0];
        const box: Box = [
          Math.min(p1[0], p2[0]) - (Math.abs(n[0]) * t) / 2,
          Math.min(p1[1], p2[1]) - (Math.abs(n[1]) * t) / 2,
          Math.max(p1[0], p2[0]) + (Math.abs(n[0]) * t) / 2,
          Math.max(p1[1], p2[1]) + (Math.abs(n[1]) * t) / 2,
        ];
        const centre: Point = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
        const piece: Piece = { kind, wallId: wall.id, box, horizontal, u, n, t, length: e - s, opening, centre, out: n, room: null, other: null, exterior: true, terrace: false };
        this.pieces.push(piece);
        if (kind === "window") this.windows.push(piece);
        if (kind === "door") this.doors.push(piece);
      };
      let at = 0;
      for (const { o, s, e } of openings) {
        if (s > at) add(at, s, "solid");
        add(s, e, DOOR_LIKE.has(o.type) ? "door" : "window", o);
        at = Math.max(at, e);
      }
      if (at < length) add(at, length, "solid");
    }
  }

  /** Which side of every opening is inside, the room it belongs to and the room or garden beyond. */
  private sideOfOpenings(): void {
    for (const piece of [...this.windows, ...this.doors]) {
      const off = piece.t / 2 + 0.2;
      const a: Point = [piece.centre[0] + piece.n[0] * off, piece.centre[1] + piece.n[1] * off];
      const b: Point = [piece.centre[0] - piece.n[0] * off, piece.centre[1] - piece.n[1] * off];
      const ra = this.roomAt(a);
      const rb = this.roomAt(b);
      piece.out = ra && !rb ? [-piece.n[0], -piece.n[1]] : piece.n;
      piece.room = ra && !rb ? ra : rb && !ra ? rb : (ra ?? rb);
      piece.other = ra && rb ? (piece.room === ra ? rb : ra) : null;
      piece.exterior = !(ra && rb);
      piece.terrace = piece.kind === "window" && piece.exterior && (piece.opening?.width ?? 0) >= 1.8;
    }
  }

  // ---------------------------------------------------------------- furniture
  /** An obstacle as the piece of furniture chosen for it in the editor, or the one guessed for it. */
  private guess(item: Item, points: Point[]): Furniture {
    const box = boxOf(points);
    const room = this.roomAt([(box[0] + box[2]) / 2, (box[1] + box[3]) / 2], false);
    return { item, points, box, kind: furnitureOf(item, this.level), room, units: [] };
  }

  /**
   * The piece of furniture of the given kinds nearest to a point within reach metres, and the spot on it
   * nearest to the point, kept a little inside its edges.
   */
  restNear(p: Point, reach: number, kinds: (kind: FurnitureKind) => boolean): { furniture: Furniture; at: Point } | undefined {
    let best: { furniture: Furniture; at: Point; distance: number } | undefined;
    for (const f of this.furniture) {
      if (!kinds(f.kind)) continue;
      const [x0, y0, x1, y1] = f.box;
      const inset = Math.min(0.15, (x1 - x0) / 3, (y1 - y0) / 3);
      const at: Point = [Math.min(Math.max(p[0], x0 + inset), x1 - inset), Math.min(Math.max(p[1], y0 + inset), y1 - inset)];
      // In an L-shaped piece the clamped spot may fall in its notch: take the nearest corner of it then.
      const spot = pointInPolygon(at, f.points)
        ? at
        : f.points.reduce((q, r) => (Math.hypot(r[0] - p[0], r[1] - p[1]) < Math.hypot(q[0] - p[0], q[1] - p[1]) ? r : q));
      const distance = Math.hypot(spot[0] - p[0], spot[1] - p[1]);
      if (distance <= reach && (!best || distance < best.distance)) best = { furniture: f, at: spot, distance };
    }
    return best && { furniture: best.furniture, at: best.at };
  }

  /** Sides of a box that stand against a wall. */
  wallSides(box: Box, reach = 0.1): ("top" | "bottom" | "left" | "right")[] {
    const wall = (x: number, y: number) => this.pieces.some((p) => p.kind !== "door" && x >= p.box[0] - 0.06 && x <= p.box[2] + 0.06 && y >= p.box[1] - 0.06 && y <= p.box[3] + 0.06);
    // A wall up to reach metres off the side counts, so a piece standing a little away from it still backs onto it.
    const offsets = [0.05, reach / 2, reach].filter((d, i, all) => all.indexOf(d) === i);
    const near = (x: number, y: number, dx: number, dy: number) => offsets.some((d) => wall(x + dx * d, y + dy * d));
    const cx = (box[0] + box[2]) / 2;
    const cy = (box[1] + box[3]) / 2;
    const sides: ("top" | "bottom" | "left" | "right")[] = [];
    if (near(cx, box[1], 0, -1)) sides.push("top");
    if (near(box[0], cy, -1, 0)) sides.push("left");
    if (near(box[2], cy, 1, 0)) sides.push("right");
    if (near(cx, box[3], 0, 1)) sides.push("bottom");
    return sides;
  }

  /** The sink under the window of the kitchen, the hob about one and a half metres away, a kettle between. */
  private placeUnits(counter: Furniture): void {
    // Only spots on the visible worktop: it is drawn raised by its height, so a wall behind hides its back strip.
    const clear = 0.2;
    const worktop = 0.28;
    const hidden = (q: Point) =>
      this.pieces.some((w) => q[0] > w.box[0] - clear && q[0] < w.box[2] + clear && q[1] - worktop > w.box[1] - clear && q[1] - worktop < w.box[3] + clear);
    const all: Point[] = [];
    for (let y = counter.box[1] + 0.2; y < counter.box[3]; y += 0.1)
      for (let x = counter.box[0] + 0.2; x < counter.box[2]; x += 0.1) if (pointInPolygon([x, y], counter.points)) all.push([x, y]);
    // The whole unit stays on the worktop: the hob, the largest, is about 44 by 38 cm.
    const fits = (q: Point) =>
      [[-0.23, -0.2], [0.23, -0.2], [-0.23, 0.2], [0.23, 0.2]].every(([dx, dy]) => pointInPolygon([q[0] + dx, q[1] + dy], counter.points));
    const fitting = all.filter(fits);
    const room = fitting.length ? fitting : all;
    const open = room.filter((q) => !hidden(q));
    const spots = open.length ? open : room;
    if (!spots.length) return;
    const window = this.windows.find((w) => w.room === counter.room);
    const near = (target: Point, distance: number, avoid?: Point) =>
      spots.reduce((best, p) => {
        const score = (q: Point) => Math.abs(Math.hypot(q[0] - target[0], q[1] - target[1]) - distance) + (avoid && Math.hypot(q[0] - avoid[0], q[1] - avoid[1]) < 0.6 ? 9 : 0);
        return score(p) < score(best) ? p : best;
      });
    const sink = near(window ? window.centre : spots[0], 0);
    const stove = near(sink, 1.6);
    counter.units = [
      [sink, "sink"],
      [stove, "stove"],
      [near(sink, 0.8, stove), "kettle"],
    ];
  }

  // ---------------------------------------------------------------- light
  private fillRegions(): void {
    const cell = LIGHT_CELL / PPM;
    for (let j = 0; j < this.lightHeight; j++)
      for (let i = 0; i < this.lightWidth; i++) {
        const p: Point = [this.x0 + (i + 0.5) * cell, this.y0 + (j + 0.5) * cell];
        const standing = this.pieces.filter((w) => w.kind !== "door" && p[0] >= w.box[0] && p[0] <= w.box[2] && p[1] >= w.box[1] - FACE && p[1] <= w.box[3]);
        const top = standing.some((w) => p[1] < w.box[3] - FACE);
        const face = standing.find((w) => p[1] >= w.box[3] - FACE);
        const room = face ? this.roomAt([p[0], face.box[3] + 0.1]) : this.roomAt(p);
        this.region[j * this.lightWidth + i] = top ? -2 : room ? this.rooms.indexOf(room) : -1;
      }
  }

  /** Whether a wall stands between two points. */
  wallBetween(a: Point, b: Point): boolean {
    const [ax, ay] = a;
    const [bx, by] = b;
    const dx = bx - ax;
    const dy = by - ay;
    for (const [x0, y0, x1, y1] of this.blockers) {
      let t0 = 0;
      let t1 = 1;
      const clip = (p: number, q: number): boolean => {
        if (Math.abs(p) < 1e-9) return q >= 0;
        const r = q / p;
        if (p < 0) {
          if (r > t1) return false;
          if (r > t0) t0 = r;
        } else {
          if (r < t0) return false;
          if (r < t1) t1 = r;
        }
        return true;
      };
      if (clip(-dx, ax - x0) && clip(dx, x1 - ax) && clip(-dy, ay - y0) && clip(dy, y1 - ay) && t1 - t0 > 0.02) return true;
    }
    return false;
  }

  /** Cells a source lights, with how much: fading with distance, stopped by walls, optionally only ahead of it. */
  mask(at: Point, radius: number, ahead?: Point): Mask {
    const cell = LIGHT_CELL / PPM;
    const i0 = Math.max(0, Math.floor((at[0] - radius - this.x0) / cell));
    const i1 = Math.min(this.lightWidth - 1, Math.ceil((at[0] + radius - this.x0) / cell));
    const j0 = Math.max(0, Math.floor((at[1] - radius - this.y0) / cell));
    const j1 = Math.min(this.lightHeight - 1, Math.ceil((at[1] + radius - this.y0) / cell));
    const cells: number[] = [];
    const values: number[] = [];
    for (let j = j0; j <= j1; j++)
      for (let i = i0; i <= i1; i++) {
        const x = this.x0 + (i + 0.5) * cell;
        const y = this.y0 + (j + 0.5) * cell;
        const d = Math.hypot(x - at[0], y - at[1]);
        if (d >= radius) continue;
        if (ahead && (x - at[0]) * ahead[0] + (y - at[1]) * ahead[1] < -0.05) continue;
        if (this.wallBetween(at, [x, y])) continue;
        const k = 1 - d / radius;
        cells.push(j * this.lightWidth + i);
        values.push(k * k);
      }
    return { cells: Int32Array.from(cells), values: Float32Array.from(values) };
  }

  private makeLights(): void {
    for (const device of this.level.devices ?? []) {
      if (device.kind === "light" && device.entity) {
        const room = this.roomAt(deviceCentre(device), false);
        const along: Point[] = device.to ? Array.from({ length: 5 }, (_, k) => [device.at[0] + ((device.to![0] - device.at[0]) * k) / 4, device.at[1] + ((device.to![1] - device.at[1]) * k) / 4] as Point) : [device.at];
        const reach = (device.radius ?? 2) * (device.to ? 1.1 : 2);
        this.lights.push({ device, entity: device.entity, masks: along.map((p) => this.mask(p, reach)), colour: (room?.look.light ?? [255, 210, 150]) as [number, number, number], line: !!device.to });
      }
      if (device.kind === "screen" && device.entity) {
        const middle = deviceCentre(device);
        this.screens.push({ device, mask: this.mask(middle, 3.2) });
      }
    }
    // Rooms that still list their lights glow from their middle.
    for (const r of this.rooms)
      for (const entity of r.room.lights ?? []) {
        if (this.lights.some((l) => l.entity === entity)) continue;
        const box = boxOf(r.room.points);
        const middle: Point = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
        this.lights.push({ device: { id: entity, kind: "light", entity, at: middle }, entity, masks: [this.mask(middle, Math.max(box[2] - box[0], box[3] - box[1]) * 0.8)], colour: r.look.light as [number, number, number], line: false });
      }
    for (const w of this.windows) {
      const inner: Point = [w.centre[0] - w.out[0] * (w.t / 2 + 0.05), w.centre[1] - w.out[1] * (w.t / 2 + 0.05)];
      const outer: Point = [w.centre[0] + w.out[0] * (w.t / 2 + 0.05), w.centre[1] + w.out[1] * (w.t / 2 + 0.05)];
      const inward: Point = [-w.out[0], -w.out[1]];
      w.daylight = this.mask(inner, 4.5 + w.length, inward);
      w.spill = this.mask(outer, 1.6 + w.length / 2, w.out);
      const sun = this.mask(inner, 9, inward);
      const [element, sc] = canvas(this.lightWidth, this.lightHeight);
      const image = sc.createImageData(this.lightWidth, this.lightHeight);
      for (const k of sun.cells) if (this.region[k] >= 0) image.data[k * 4 + 3] = 255;
      sc.putImageData(image, 0, 0);
      w.sun = element;
    }
  }

  // ---------------------------------------------------------------- base picture
  private path(c: CanvasRenderingContext2D, points: Point[], lift = 0): void {
    c.beginPath();
    points.forEach((p, i) => {
      const [x, y] = this.px(p);
      if (i) c.lineTo(x, y - lift);
      else c.moveTo(x, y - lift);
    });
    c.closePath();
  }

  private drawBase(c: CanvasRenderingContext2D): void {
    if (this.opaque) {
      c.fillStyle = texture(c, "neighbour");
      c.fillRect(0, 0, this.width, this.height);
    }
    const order = ["lawn", "paving", "terrace", "bed", "vegetable", "manhole"];
    for (const type of order)
      for (const g of this.garden) {
        if (g.item.type !== type) continue;
        if (type === "manhole") {
          const [cx, cy] = this.px(g.item.center ?? [(g.box[0] + g.box[2]) / 2, (g.box[1] + g.box[3]) / 2]);
          const r = Math.round(((g.item.diameter ?? 0.6) / 2) * PPM);
          disc(c, cx, cy, r, "#5d5a55");
          disc(c, cx, cy, Math.max(1, r - 2), "#77736c");
          rect(c, cx - r + 2, cy, 2 * r - 4, 1, "#5d5a55");
          rect(c, cx, cy - r + 2, 1, 2 * r - 4, "#5d5a55");
          continue;
        }
        const fill = type === "lawn" ? "grass" : type === "paving" ? "paving" : type === "terrace" ? "deck" : "soil";
        this.path(c, g.points);
        c.fillStyle = texture(c, fill);
        c.fill();
        if (type === "bed" || type === "vegetable") {
          const [x, y, w, h] = this.pxBox(g.box);
          const seed = [...g.item.id].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
          c.save();
          this.path(c, g.points);
          c.clip();
          if (type === "vegetable") crops(c, x, y, w, h, seed);
          else flowers(c, x, y, w, h, seed);
          c.restore();
          // A border: stones round a flower bed, boards round a vegetable patch.
          c.save();
          c.translate(0.5, 0.5);
          this.path(c, g.points);
          c.lineWidth = 2;
          c.strokeStyle = type === "vegetable" ? "#7a5232" : "#b8b0a2";
          c.stroke();
          c.lineWidth = 1;
          c.strokeStyle = type === "vegetable" ? "#a8774f" : "#d8d2c6";
          c.stroke();
          c.restore();
        }
      }
    for (const r of this.rooms) {
      if (r.kind === "driveway" || (!r.indoor && r.kind !== "terrace")) continue;
      if (r.kind === "stairs") {
        drawStairs(c, this, r.room);
        continue;
      }
      this.path(c, r.room.points);
      c.fillStyle = texture(c, this.floorOf(r));
      c.fill();
    }
    for (const d of this.doors) {
      const room = d.room ?? d.other;
      const [x, y, w, h] = this.pxBox(d.box);
      c.fillStyle = texture(c, room ? this.floorOf(room) : "paving");
      c.fillRect(x, y, w, h);
    }
  }

  /** Frames of the doors, standing up from the foot of the wall like the wall. */
  private drawJambs(c: CanvasRenderingContext2D): void {
    const face = Math.round(FACE * PPM);
    for (const d of this.doors) {
      const [x, y, w, h] = this.pxBox(d.box);
      if (d.horizontal) {
        rect(c, x, y - face, 2, h + face, "#5b3b24");
        rect(c, x + w - 2, y - face, 2, h + face, "#5b3b24");
      } else {
        rect(c, x, y - face, w, 2, "#5b3b24");
        rect(c, x, y + h - face - 2, w, 2, "#5b3b24");
      }
    }
  }

  /**
   * Faces of the walls, from the foot of each wall up to its top: wallpaper of the room in front, brick
   * outside. Windows sit in the faces of walls running left to right.
   */
  private drawFaces(c: CanvasRenderingContext2D): void {
    const face = Math.round(FACE * PPM);
    for (const piece of this.pieces) {
      if (piece.kind === "door") continue;
      const [x, y, w, h] = this.pxBox(piece.box);
      const bottom = y + h - face;
      for (let xx = x; xx < x + w; xx += 4) {
        const ww = Math.min(4, x + w - xx);
        // The room in front of the foot of the wall gives the wallpaper.
        const front = this.roomAt([this.x0 + (xx + 2) / PPM, this.y0 + (y + h + 4) / PPM]);
        if (front) {
          const [p0, p1] = front.look.paper;
          rect(c, xx, bottom, ww, face, p0);
          for (let i = 0; i < ww; i++) if ((xx + i) % 4 === 1) rect(c, xx + i, bottom + 2, 1, face - 5, p1);
          rect(c, xx, bottom, ww, 2, "rgba(0,0,0,.25)");
          rect(c, xx, bottom + face - 4, ww, 1, "#8a6446");
          rect(c, xx, bottom + face - 3, ww, 3, "#6b4a33");
        } else if (this.insideHouse([this.x0 + (xx + 2) / PPM, this.y0 + (y + h + 4) / PPM])) {
          // A space inside the house that is no room (under the stairs, a shaft): plain plaster.
          rect(c, xx, bottom, ww, face, "#cfc4b0");
          rect(c, xx, bottom, ww, 2, "rgba(0,0,0,.25)");
          rect(c, xx, bottom + face - 3, ww, 3, "#8a7c66");
        } else {
          rect(c, xx, bottom, ww, face, "#b56a4e");
          for (let r = 0; r < face; r += 4) {
            rect(c, xx, bottom + r, ww, 1, "#8f4f3a");
            const shift = (r / 4) % 2 ? 0 : 4;
            for (let i = 0; i < ww; i++) if ((xx + i - shift) % 8 === 0) rect(c, xx + i, bottom + r, 1, 4, "#8f4f3a");
          }
          rect(c, xx, bottom + face - 3, ww, 3, "#5c5550");
        }
      }
      piece.face = [x, bottom, w, face];
    }
    for (const w of this.windows) {
      const [x, y, ww, h] = this.pxBox(w.box);
      if (w.horizontal && w.face) {
        const [fx, fy, fw, fh] = w.face;
        const top = w.terrace ? fy + 1 : fy + 2;
        const bottom = w.terrace ? fy + fh - 1 : fy + fh - 5;
        w.glass = [fx + 2, top + 1, fw - 4, bottom - top - 2];
        rect(c, fx + 1, top, fw - 2, bottom - top, "#f2efe6");
        if (!w.terrace) {
          rect(c, fx, bottom, fw, 2, "#d8d2c4");
          rect(c, fx, bottom + 1, fw, 1, "#b0a998");
        }
      } else {
        w.glass = [x + 1, y - face + 1, ww - 2, h - 2];
        rect(c, x, y - face, ww, h, "#f2efe6");
      }
    }
  }

  /** Wall tops, one face above the feet of the walls, with a light edge where they meet something lower. */
  private drawWallTops(c: CanvasRenderingContext2D): void {
    const face = Math.round(FACE * PPM);
    const [, mc] = canvas(this.width, this.height);
    mc.fillStyle = "#000";
    for (const piece of this.pieces) {
      if (piece.kind === "door" || (piece.kind === "window" && !piece.horizontal)) continue;
      const [x, y, w, h] = this.pxBox(piece.box);
      mc.fillRect(x, y - face, w, h);
    }
    const mask = mc.getImageData(0, 0, this.width, this.height).data;
    const at = (x: number, y: number) => x >= 0 && y >= 0 && x < this.width && y < this.height && mask[(y * this.width + x) * 4 + 3] > 0;
    const image = c.getImageData(0, 0, this.width, this.height);
    const d = image.data;
    for (let y = 0; y < this.height; y++)
      for (let x = 0; x < this.width; x++) {
        if (!at(x, y)) continue;
        // Light enough to stand out on a dark card, with a bright upper rim so the back wall reads too.
        let colour: [number, number, number] = [104, 94, 112];
        if (!at(x, y - 1) || !at(x, y - 2)) colour = [196, 186, 204];
        else if (!at(x - 1, y)) colour = [150, 140, 158];
        else if (!at(x + 1, y) || !at(x, y + 1)) colour = [64, 56, 72];
        else if (hash(x, y, 5) < 0.05) colour = [118, 108, 126];
        const i = (y * this.width + x) * 4;
        d[i] = colour[0];
        d[i + 1] = colour[1];
        d[i + 2] = colour[2];
        d[i + 3] = 255;
      }
    c.putImageData(image, 0, 0);
  }

  // ---------------------------------------------------------------- objects drawn every frame
  /**
   * A box seen at three quarters: its top lifted by lift pixels and a front on the edges facing the viewer.
   */
  box(
    c: CanvasRenderingContext2D,
    points: Point[],
    lift: number,
    top: string,
    front: string,
    extra: { edge?: string; handles?: string; base?: string; modules?: number; seam?: string; drawers?: boolean } = {},
  ): void {
    // A shadow round its foot and a dark outline keep it apart from a floor of the same colour.
    c.save();
    c.translate(2, 1);
    this.path(c, points, 0);
    c.fillStyle = "rgba(0,0,0,.3)";
    c.fill();
    c.restore();
    this.path(c, points, lift);
    c.fillStyle = top;
    c.fill();
    const fronts: [number, number, number, number][] = [];
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      const b = points[(i + 1) % points.length];
      if (Math.abs(a[1] - b[1]) > 0.01) continue;
      if (!pointInPolygon([(a[0] + b[0]) / 2, a[1] - 0.02], points)) continue;
      const [xa, y] = this.px(a);
      const [xb] = this.px(b);
      const x = Math.min(xa, xb);
      const w = Math.abs(xb - xa);
      rect(c, x, y - lift, w, lift, front);
      if (extra.edge) rect(c, x, y - lift, w, 1, extra.edge);
      if (extra.modules) {
        // Doors of modules along the front, each with its handle.
        for (let mx = x; mx < x + w - 3; mx += extra.modules) {
          if (mx > x && extra.seam) rect(c, mx, y - lift + 1, 1, lift - 1, extra.seam);
          if (extra.handles) rect(c, mx + Math.min(extra.modules, x + w - mx) / 2 - 1, y - Math.ceil(lift * 0.6), 2, 1, extra.handles);
        }
      } else if (extra.handles) for (let hx = x + 6; hx < x + w - 3; hx += Math.max(8, Math.round(0.6 * PPM))) rect(c, hx, y - Math.ceil(lift * 0.6), 2, 1, extra.handles);
      if (extra.drawers && lift > 4)
        for (let dy = Math.floor(lift / 2); dy < lift - 1; dy += Math.max(3, Math.floor(lift / 2))) {
          rect(c, x + 1, y - lift + dy, w - 2, 1, "rgba(40,25,15,.5)");
          rect(c, x + Math.floor(w / 2) - 1, y - lift + dy - 2, 2, 1, "#e0c890");
        }
      if (extra.base) rect(c, x, y - 1, w, 1, extra.base);
      fronts.push([x, y - lift, w, lift]);
    }
    c.save();
    c.translate(0.5, 0.5);
    c.lineWidth = 1;
    c.strokeStyle = "rgba(30,20,14,.6)";
    this.path(c, points, lift);
    c.stroke();
    for (const [x, y, w, h] of fronts) if (h > 1) c.strokeRect(x, y, w - 1, h - 1);
    c.restore();
  }

  drawFurniture(c: CanvasRenderingContext2D, f: Furniture): void {
    const P = PPM;
    const [bx, by, bw, bh] = this.pxBox(f.box);
    const lift = (m: number) => Math.round(m * P);
    const round = !!f.item.center;
    const sides = this.wallSides(f.box);
    // The side a back, a headboard or a shelf front is on: against a wall, otherwise at the back of the room.
    // Never the front side: a back or headboard there would face away from the viewer.
    const back: Side = f.item.back ?? sides.find((side) => side !== "bottom") ?? "top";
    const module = lift(0.6);
    // The main colour and its tones: the colour chosen for the piece, or its own.
    const main = f.item.colour ?? FURNITURE_COLOURS[f.kind];
    const shade = { base: main, light: tone(main, 0.18), lighter: tone(main, 0.35), dark: tone(main, -0.18), darker: tone(main, -0.35) };
    const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
    const time = performance.now() / 1000;
    switch (f.kind) {
      case "kitchen": {
        const h = lift(0.28);
        this.box(c, f.points, h, "#dcd6c8", shade.base, { edge: "#f0ebe0", base: shade.darker, modules: module, seam: shade.dark, handles: shade.lighter });
        for (const [spot, unit] of f.units) {
          const [ux, uy] = this.px(spot);
          const y = uy - h;
          if (unit === "sink") {
            // Steel rim, a basin lit from the front, a drain and a tap at the back.
            rect(c, ux - 7, y - 5, 14, 10, "#8d969f");
            rect(c, ux - 6, y - 4, 12, 8, "#c3cad1");
            rect(c, ux - 5, y - 3, 10, 6, "#7b8590");
            rect(c, ux - 5, y - 3, 10, 2, "#5d6670");
            rect(c, ux - 5, y + 2, 10, 1, "#9aa4ae");
            rect(c, ux, y, 1, 1, "#3e454d");
            rect(c, ux - 1, y - 7, 2, 3, "#e2e7eb");
            rect(c, ux, y - 4, 1, 2, "#e2e7eb");
          } else if (unit === "stove") {
            rect(c, ux - 7, y - 6, 14, 12, "#2a2c31");
            for (const [a, b] of [[-5, -4], [1, -4], [-5, 1], [1, 1]]) rect(c, ux + a, y + b, 4, 3, "#4d4f55");
          } else {
            rect(c, ux - 3, y - 5, 6, 6, "#e3c46a");
            rect(c, ux - 2, y - 6, 4, 1, "#c9a84f");
          }
        }
        break;
      }
      case "sofa":
        this.drawSofa(c, f, { seat: shade.base, side: shade.dark, light: shade.light, dark: tone(main, -0.27), base: shade.darker }, f.item.back);
        break;
      case "bed": {
        const h = lift(0.18);
        this.box(c, f.points, h, "#efe9df", "#cfc6b6", { edge: "#ffffff" });
        const y0 = by - h;
        const across = back === "top" || back === "bottom";
        const width = across ? bw : bh;
        const double = width > 1.2 * P;
        const pillow = (x: number, y: number, w: number, hh: number) => {
          rect(c, x, y, w, hh, "#ffffff");
          rect(c, x, y + hh - 1, w, 1, "#d8d2c6");
        };
        if (across) {
          const atTop = back === "top";
          rect(c, bx, atTop ? y0 - 5 : y0 + bh - 1, bw, 6, "#6b4a33");
          const pw = double ? Math.floor(bw / 2) - 5 : bw - 8;
          const py = atTop ? y0 + 3 : y0 + bh - 10;
          pillow(bx + 4, py, pw, 7);
          if (double) pillow(bx + bw / 2 + 1, py, pw, 7);
          const blanketH = Math.round(bh * 0.68) - 2;
          const blanketY = atTop ? y0 + Math.round(bh * 0.32) : y0 + 1;
          rect(c, bx + 1, blanketY, bw - 2, blanketH, shade.base);
          rect(c, bx + 1, atTop ? blanketY : blanketY + blanketH - 2, bw - 2, 2, shade.light);
        } else {
          const hx = back === "left" ? bx : bx + bw - 6;
          rect(c, hx, y0, 6, bh, "#6b4a33");
          const px = back === "left" ? bx + 7 : bx + bw - 15;
          const ph = double ? Math.floor(bh / 2) - 5 : bh - 8;
          pillow(px, y0 + 4, 8, ph);
          if (double) pillow(px, y0 + bh / 2 + 1, 8, ph);
          const blanketX = back === "left" ? bx + Math.round(bw * 0.32) : bx + 1;
          const blanketW = Math.round(bw * 0.68) - 2;
          rect(c, blanketX, y0 + 1, blanketW, bh - 2, shade.base);
          rect(c, back === "left" ? blanketX : blanketX + blanketW - 2, y0 + 1, 2, bh - 2, shade.light);
        }
        break;
      }
      case "wardrobe": {
        const h = lift(0.45);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light, base: shade.darker, modules: lift(0.5), seam: shade.darker, handles: "#e0c890" });
        if (bh > bw) for (let y = by - h + lift(0.5); y < by + bh - h - 2; y += lift(0.5)) rect(c, bx + 1, y, bw - 2, 1, shade.dark);
        break;
      }
      case "shelf": {
        const h = lift(0.45);
        this.box(c, f.points, h, shade.base, shade.darker, { edge: shade.light });
        const books = ["#c0564b", "#3f6fd1", "#e0b04a", "#4c9a5b", "#8a5bb5", "#e8e3d6"];
        if (bw >= bh) {
          for (let row = 0; row < 3; row++) {
            const y = by - h + 2 + Math.round((row * (h - 3)) / 3);
            for (let x = bx + 2; x < bx + bw - 3; ) {
              const w = 1 + Math.floor(hash(x, row, 3) * 3);
              rect(c, x, y, w, Math.max(2, Math.round(h / 3) - 2), books[Math.floor(hash(x, row, 5) * books.length)]);
              x += w + (hash(x, row, 7) < 0.2 ? 2 : 0);
            }
          }
        } else for (let y = by - h + 2; y < by + bh - h - 2; y += 3) rect(c, bx + 2, y, bw - 4, 2, books[Math.floor(hash(bx, y, 5) * books.length)]);
        break;
      }
      case "fridge": {
        const h = lift(0.45);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.lighter, base: shade.darker });
        rect(c, bx + bw - 4, by + bh - h + 3, 1, Math.max(3, h - 6), "#9aa1a8");
        rect(c, bx + 3, by - h + 3, 3, 3, "#e8505b");
        break;
      }
      case "table": {
        const h = lift(0.3);
        if (round) this.disc3(c, f, h, shade.darker, shade.base, shade.light);
        else this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
        disc(c, cx, cy - h, 3, "#f2efe6");
        rect(c, cx - 1, cy - h - 2, 2, 2, "#e8505b");
        break;
      }
      case "chair": {
        const h = lift(0.18);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
        if (back === "top") rect(c, bx, by - h - 3, bw, 4, shade.dark);
        else if (back === "bottom") rect(c, bx, by + bh - h - 4, bw, 4, shade.dark);
        else rect(c, back === "left" ? bx : bx + bw - 3, by - h - 3, 3, bh + 2, shade.dark);
        break;
      }
      case "desk": {
        const h = lift(0.3);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light, handles: "#e0c890" });
        const [sx, sy] =
          back === "top" ? [cx - 6, by - h + 2] : back === "bottom" ? [cx - 6, by + bh - h - 9] : back === "left" ? [bx + 2, cy - h - 4] : [bx + bw - 14, cy - h - 4];
        rect(c, sx, sy, 12, 7, "#1d1f25");
        rect(c, sx + 1, sy + 1, 10, 5, back === "bottom" ? "#2a2c31" : "#4a7bd0");
        break;
      }
      case "tvstand": {
        const h = lift(0.2);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
        if (back === "top" || back === "bottom") {
          const tv = lift(0.32);
          const ty = back === "top" ? by - h - tv + 2 : by + bh - h - tv;
          rect(c, bx + Math.round(bw * 0.1), ty, Math.round(bw * 0.8), tv, "#15161b");
          // From behind only its dark back shows.
          if (back === "top") rect(c, bx + Math.round(bw * 0.1) + 2, ty + 2, Math.round(bw * 0.8) - 4, tv - 4, "#262a35");
        } else rect(c, back === "left" ? bx + 2 : bx + bw - 5, by - h + 2, 3, bh - 4, "#15161b");
        break;
      }
      case "dresser":
      case "nightstand": {
        const h = lift(f.kind === "nightstand" ? 0.25 : 0.3);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light, drawers: true });
        if (f.kind === "nightstand") {
          rect(c, cx - 3, cy - h - 7, 6, 5, "#d9c896");
          rect(c, cx - 1, cy - h - 2, 2, 2, "#555");
        }
        break;
      }
      case "bathtub":
        this.box(c, f.points, lift(0.25), shade.base, shade.dark, { edge: shade.lighter });
        rect(c, bx + 3, by - lift(0.25) + 3, bw - 6, bh - 6, "#8fd0ea");
        rect(c, bx + 3, by - lift(0.25) + 3, bw - 6, 1, "#b9e4f3");
        break;
      case "shower":
        this.box(c, f.points, lift(0.45), "rgba(190,230,245,.55)", "rgba(160,205,225,.6)", { edge: shade.base });
        break;
      case "toilet":
        this.box(c, f.points, lift(0.2), shade.base, shade.dark, { edge: shade.lighter });
        disc(c, bx + bw / 2, by + bh / 2 - lift(0.2), Math.max(2, Math.round(Math.min(bw, bh) / 2) - 3), "#cfd8de");
        break;
      case "washbasin": {
        const h = lift(0.28);
        this.box(c, f.points, h, shade.base, "#8f6a42", { edge: shade.lighter });
        rect(c, cx - 5, cy - h - 3, 10, 6, "#cfd8de");
        rect(c, cx - 1, cy - h - 6, 2, 3, "#c0c6cc");
        break;
      }
      case "washer": {
        const h = lift(0.28);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.lighter });
        disc(c, cx, cy - h, Math.max(2, Math.round(Math.min(bw, bh) / 2) - 3), "#7f8a96");
        disc(c, cx, cy - h, Math.max(1, Math.round(Math.min(bw, bh) / 2) - 5), "#b9d7ea");
        break;
      }
      case "plant": {
        const r = Math.max(3, Math.round(Math.min(bw, bh) / 2));
        rect(c, cx - r / 2 + 1, cy - 2, r, 4, "rgba(0,0,0,.3)");
        rect(c, cx - r / 2, cy - 6, r, 6, shade.base);
        rect(c, cx - r / 2, cy - 6, r, 1, shade.light);
        disc(c, cx, cy - 10, r, "#2f7a3a");
        disc(c, cx - 2, cy - 12, Math.max(2, r - 3), "#4aa04e");
        rect(c, cx - 2, cy - 14, 1, 1, "#7cd06e");
        break;
      }
      case "garden_sofa": {
        const h = lift(0.22);
        this.box(c, f.points, h, "#8c7a66", "#6e5e4e", { edge: "#a89480" });
        this.path(c, f.points, h);
        c.save();
        c.clip();
        c.fillStyle = shade.base;
        c.fillRect(bx + 3, by - h + 3, bw - 6, bh - 6);
        c.restore();
        break;
      }
      case "garden_table": {
        const h = lift(0.28);
        if (round) this.disc3(c, f, h, shade.dark, shade.base, shade.light);
        else {
          this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
          // Slats along its length, as on a wooden garden table.
          if (bw >= bh) for (let y = by - h + 3; y < by + bh - h - 1; y += 3) rect(c, bx + 1, y, bw - 2, 1, shade.dark);
          else for (let x = bx + 3; x < bx + bw - 1; x += 3) rect(c, x, by - h + 1, 1, bh - 2, shade.dark);
        }
        break;
      }
      case "bench": {
        const h = lift(0.22);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
        if (bw >= bh) for (let y = by - h + 3; y < by + bh - h - 1; y += 3) rect(c, bx + 1, y, bw - 2, 1, shade.dark);
        else for (let x = bx + 3; x < bx + bw - 1; x += 3) rect(c, x, by - h + 1, 1, bh - 2, shade.dark);
        break;
      }
      case "fireplace": {
        // Stone, with a fire flickering in its opening.
        const h = lift(0.5);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light, base: shade.darker });
        for (let y = by + bh - h + 2; y < by + bh - 2; y += 4) for (let x = bx + ((y / 4) % 2) * 3; x < bx + bw; x += 6) rect(c, x, y, 1, 3, shade.darker);
        // The opening: in the face towards the viewer when the back is at the top, else in the top by the open side.
        const facing = back === "top";
        const w = facing ? Math.max(6, Math.round(bw * 0.5)) : back === "bottom" ? Math.max(6, Math.round(bw * 0.5)) : Math.max(4, Math.round(bw * 0.4));
        const tall = facing ? Math.round(h * 0.7) - 1 : back === "bottom" ? Math.max(4, Math.round(bh * 0.4)) : Math.max(6, Math.round(bh * 0.5));
        const ox = back === "left" ? bx + bw - w - 2 : back === "right" ? bx + 2 : bx + Math.round((bw - w) / 2);
        const oy = facing ? by + bh - Math.round(h * 0.7) : back === "bottom" ? by - h + 2 : by - h + Math.round((bh - tall) / 2);
        rect(c, ox, oy, w, tall, "#1a1210");
        for (let i = 0; i < w - 2; i += 2) {
          const flame = 2 + Math.round((Math.sin(time * 9 + i * 1.7) * 0.5 + 0.5) * Math.max(2, tall * 0.55));
          rect(c, ox + 1 + i, oy + tall - 1 - flame, 2, flame, i % 4 ? "#f2a33a" : "#e0392f");
          rect(c, ox + 1 + i, oy + tall - 1 - Math.round(flame / 2), 1, Math.round(flame / 2), "#ffe08a");
        }
        break;
      }
      case "piano": {
        const h = lift(0.38);
        this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.lighter });
        if (back === "top") {
          const ky = by + bh - Math.round(h * 0.55);
          rect(c, bx + 2, ky, bw - 4, 3, "#f4f4f0");
          for (let x = bx + 3; x < bx + bw - 3; x += 3) if (x % 7 !== 0) rect(c, x, ky, 1, 2, "#1a1a1a");
        } else if (back === "bottom") {
          rect(c, bx + 2, by - h + 2, bw - 4, 3, "#f4f4f0");
          for (let x = bx + 3; x < bx + bw - 3; x += 3) if (x % 7 !== 0) rect(c, x, by - h + 2, 1, 2, "#1a1a1a");
        } else {
          const kx = back === "left" ? bx + bw - 5 : bx + 2;
          rect(c, kx, by - h + 2, 3, bh - 4, "#f4f4f0");
          for (let y = by - h + 3; y < by + bh - h - 3; y += 3) if (y % 7 !== 0) rect(c, kx, y, 2, 1, "#1a1a1a");
        }
        break;
      }
      case "aquarium": {
        // A glass tank of water with fish going to and fro.
        const h = lift(0.4);
        this.box(c, f.points, h, tone(main, 0.3), shade.base, { edge: "#e6f6fc", base: "#3a3a40" });
        const front = by + bh - h;
        for (let i = 0; i < 4; i++) {
          const k = (Math.sin(time * (0.6 + i * 0.2) + i * 2) + 1) / 2;
          const fx = bx + 2 + Math.round(k * (bw - 6));
          const fy = front + 2 + ((i * 5) % Math.max(3, h - 5));
          rect(c, fx, fy, 3, 2, ["#f2a33a", "#e8505b", "#f5d34a", "#ffffff"][i]);
        }
        for (let x = bx + 3; x < bx + bw - 3; x += 7) rect(c, x, by + bh - 4, 2, 3, "#3f8a3e");
        break;
      }
      case "cat_tree": {
        // A post with platforms at three heights.
        const post = Math.max(3, Math.round(Math.min(bw, bh) * 0.25));
        const top = lift(0.75);
        rect(c, cx - post / 2 + 2, cy + 1, post + 2, 2, "rgba(0,0,0,.3)");
        rect(c, cx - post / 2, cy - top, post, top, "#b8a07a");
        for (let y = cy - top; y < cy; y += 3) rect(c, cx - post / 2, y, post, 1, "#9a8460");
        for (const [k, size] of [[0.15, 1], [0.5, 0.75], [0.9, 0.6]] as [number, number][]) {
          const w = Math.max(6, Math.round(bw * size));
          const y = cy - Math.round(top * k);
          rect(c, cx - w / 2, y - 3, w, 4, shade.base);
          rect(c, cx - w / 2, y - 3, w, 1, shade.light);
          rect(c, cx - w / 2, y + 1, w, 1, shade.darker);
        }
        break;
      }
      case "pet_bed": {
        const r = Math.max(4, Math.round(Math.min(bw, bh) / 2));
        disc(c, cx + 1, cy + 1, r, "rgba(0,0,0,.25)");
        disc(c, cx, cy - 1, r, shade.dark);
        disc(c, cx, cy - 1, Math.max(2, r - 3), shade.light);
        break;
      }
      case "pouf": {
        const h = lift(0.15);
        if (round) this.disc3(c, f, h, shade.darker, shade.base, shade.light);
        else this.box(c, f.points, h, shade.base, shade.dark, { edge: shade.light });
        break;
      }
      case "barbecue": {
        const h = lift(0.35);
        rect(c, bx + 1, by + bh - 2, bw, 2, "rgba(0,0,0,.25)");
        for (const x of [bx + 2, bx + bw - 3]) rect(c, x, by + bh - h, 1, h, "#3a3a40");
        disc(c, cx, by + bh - h - 2, Math.max(3, Math.round(Math.min(bw, bh) / 2)), shade.base);
        disc(c, cx - 1, by + bh - h - 3, Math.max(1, Math.round(Math.min(bw, bh) / 2) - 3), shade.lighter);
        for (let k = 0; k < 2; k++) {
          const rise = ((time * 0.6 + k * 0.5) % 1) * 12;
          rect(c, cx - 1 + Math.round(Math.sin(time * 2 + k) * 2), by + bh - h - 6 - Math.round(rise), 2, 2, `rgba(220,220,220,${(0.6 * (1 - rise / 12)).toFixed(2)})`);
        }
        break;
      }
      case "swing": {
        // A frame with two posts and a beam, a seat swinging under it.
        const h = lift(1.2);
        const across = f.item.back ? f.item.back === "top" || f.item.back === "bottom" : bw >= bh;
        rect(c, bx + 2, by + bh - 1, bw - 2, 2, "rgba(0,0,0,.25)");
        if (across) {
          rect(c, bx, by + bh - h, 2, h, shade.base);
          rect(c, bx + bw - 2, by + bh - h, 2, h, shade.base);
          rect(c, bx, by + bh - h, bw, 2, shade.light);
          const sway = Math.round(Math.sin(time * 1.6) * 3);
          const sx = bx + Math.round(bw / 2) - 5 + sway;
          rect(c, sx, by + bh - h + 2, 1, h - 8, "#bcbcbc");
          rect(c, sx + 9, by + bh - h + 2, 1, h - 8, "#bcbcbc");
          rect(c, sx, by + bh - 7, 10, 2, shade.dark);
        } else {
          rect(c, bx + Math.round(bw / 2) - 1, by - h + bh, 2, h, shade.base);
          rect(c, bx + Math.round(bw / 2) - 1, by + bh - h, 2, bh, shade.light);
        }
        break;
      }
      case "sandbox": {
        const h = lift(0.12);
        this.box(c, f.points, h, "#e8d49a", shade.base, { edge: shade.light });
        rect(c, bx + 2, by - h + 2, bw - 4, 1, shade.base);
        rect(c, bx + 2, by + bh - h - 3, bw - 4, 1, shade.base);
        for (let i = 0; i < 12; i++) rect(c, bx + 3 + Math.floor(hash(i, bx, 2) * (bw - 6)), by - h + 3 + Math.floor(hash(i, by, 3) * (bh - 6)), 1, 1, "#d4be82");
        rect(c, cx, cy - h - 2, 3, 3, "#e8505b");
        break;
      }
      case "pool": {
        // Water inside a light rim, with ripples.
        if (round) {
          const r = Math.max(4, Math.round(Math.min(bw, bh) / 2));
          disc(c, cx, cy, r, "#d8d2c6");
          disc(c, cx, cy, r - 3, shade.base);
        } else {
          this.path(c, f.points);
          c.fillStyle = "#d8d2c6";
          c.fill();
          rect(c, bx + 3, by + 3, bw - 6, bh - 6, shade.base);
        }
        for (let i = 0; i < 14; i++) {
          const x = bx + 4 + Math.floor(hash(i, bx, 4) * Math.max(1, bw - 10)) + Math.round(Math.sin(time + i) * 2);
          const y = by + 4 + Math.floor(hash(i, by, 5) * Math.max(1, bh - 8));
          rect(c, x, y, 3, 1, shade.lighter);
        }
        break;
      }
      case "fire_pit": {
        const r = Math.max(4, Math.round(Math.min(bw, bh) / 2));
        disc(c, cx, cy, r, shade.base);
        disc(c, cx, cy, Math.max(2, r - 3), "#2a2220");
        for (let i = 0; i < 4; i++) {
          const flame = 3 + Math.round((Math.sin(time * 8 + i * 2) * 0.5 + 0.5) * 5);
          rect(c, cx - 3 + i * 2, cy - flame, 2, flame, i % 2 ? "#f2a33a" : "#e0392f");
        }
        break;
      }
      case "rug":
        // Flat on the floor: drawn with the floor by drawRug.
        break;
      default:
        this.box(c, f.points, lift(0.25), shade.base, shade.dark, { edge: shade.light });
    }
  }

  /** A rug lying flat on the floor, under everything else: a border, a field and a fringe. */
  drawRug(c: CanvasRenderingContext2D, f: Furniture): void {
    const main = f.item.colour ?? FURNITURE_COLOURS.rug;
    const [bx, by, bw, bh] = this.pxBox(f.box);
    if (f.item.center) {
      const [cx, cy] = this.px(f.item.center);
      const r = Math.max(3, Math.round(Math.min(bw, bh) / 2));
      disc(c, cx, cy, r, tone(main, -0.3));
      disc(c, cx, cy, Math.max(1, r - 2), main);
      disc(c, cx, cy, Math.max(1, r - 5), tone(main, 0.2));
      disc(c, cx, cy, Math.max(1, r - 7), main);
      return;
    }
    c.save();
    this.path(c, f.points);
    c.clip();
    rect(c, bx, by, bw, bh, tone(main, -0.3));
    rect(c, bx + 2, by + 2, bw - 4, bh - 4, main);
    rect(c, bx + 4, by + 4, bw - 8, bh - 8, tone(main, 0.25));
    rect(c, bx + 5, by + 5, bw - 10, bh - 10, main);
    for (let x = bx + 8; x < bx + bw - 8; x += 6) for (let y = by + 8; y < by + bh - 8; y += 6) rect(c, x, y, 2, 2, tone(main, (x + y) % 12 ? 0.2 : -0.2));
    c.restore();
    for (let x = bx + 1; x < bx + bw - 1; x += 2) {
      rect(c, x, by - 1, 1, 1, tone(main, 0.45));
      rect(c, x, by + bh, 1, 1, tone(main, 0.45));
    }
  }

  /** A round top on a leg, with its shadow, for round tables. */
  private disc3(c: CanvasRenderingContext2D, f: Furniture, h: number, side: string, top: string, light: string): void {
    const centre = f.item.center ?? ([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2] as Point);
    const [cx, cy] = this.px(centre);
    const r = Math.max(3, Math.round(((f.item.diameter ?? f.box[2] - f.box[0]) / 2) * PPM));
    disc(c, cx + 2, cy + 1, r, "rgba(0,0,0,.3)");
    disc(c, cx, cy, r, side);
    disc(c, cx, cy - h, r + 1, "#2e1d12");
    disc(c, cx, cy - h, r, top);
    disc(c, cx - 2, cy - h - 2, Math.max(1, r - 5), light);
  }

  /**
   * A sofa, an armchair or a corner sofa built of blocks: the seat, a backrest along its back and armrests
   * on its free ends. The back is the side against a wall (the longest one when several are), otherwise
   * the long side farther from the middle of the room. A corner sofa is cut into its two arms; their
   * backrests run along the outer sides of the corner and the armrests close their free ends.
   */
  private drawSofa(c: CanvasRenderingContext2D, f: Furniture, fabric: { seat: string; side: string; light: string; dark: string; base: string }, chosen?: Side): void {
    const P = PPM;
    const [x0, y0, x1, y1] = f.box;
    const armchair = x1 - x0 < 1.2 && y1 - y0 < 1.2;
    const backDepth = Math.min(0.22, (Math.min(x1 - x0, y1 - y0)) * 0.3);
    const armDepth = armchair ? Math.min(0.2, (Math.max(x1 - x0, y1 - y0)) * 0.22) : 0.15;
    const seatLift = Math.round(0.2 * P);
    const backLift = Math.round(0.42 * P);
    const armLift = Math.round(0.3 * P);
    type Block = { box: Box; lift: number; top: string; front: string };
    const blocks: Block[] = [];
    const band = (b: Box, side: Side, depth: number): Box =>
      side === "top" ? [b[0], b[1], b[2], b[1] + depth] : side === "bottom" ? [b[0], b[3] - depth, b[2], b[3]] : side === "left" ? [b[0], b[1], b[0] + depth, b[3]] : [b[2] - depth, b[1], b[2], b[3]];
    const across = (side: Side): [Side, Side] => (side === "top" || side === "bottom" ? ["left", "right"] : ["top", "bottom"]);
    const length = (b: Box, side: Side) => (side === "top" || side === "bottom" ? b[2] - b[0] : b[3] - b[1]);
    // Seams between the cushions, across the seat every 0.6 m, between the armrests.
    const seams: [Box, Side][] = [];
    const notch = this.notchOf(f);
    if (notch) {
      // Corner sofa: the corner of the box missing from the shape, and the two arms beside it.
      const { corner, inner } = notch;
      const backs: [Side, Side] = [corner[1] === "top" ? "bottom" : "top", corner[0] === "left" ? "right" : "left"];
      const armA: Box = backs[0] === "top" ? [x0, y0, x1, inner[1]] : [x0, inner[1], x1, y1];
      const armB: Box = backs[1] === "left" ? [x0, y0, inner[0], y1] : [inner[0], y0, x1, y1];
      blocks.push({ box: band(armA, backs[0], backDepth), lift: backLift, top: fabric.dark, front: fabric.base });
      blocks.push({ box: band(armB, backs[1], backDepth), lift: backLift, top: fabric.dark, front: fabric.base });
      // Free ends: the side of each arm away from the other arm's back.
      const endA: Side = backs[1] === "left" ? "right" : "left";
      const endB: Side = backs[0] === "top" ? "bottom" : "top";
      blocks.push({ box: band(armA, endA, armDepth), lift: armLift, top: fabric.side, front: fabric.dark });
      blocks.push({ box: band(armB, endB, armDepth), lift: armLift, top: fabric.side, front: fabric.dark });
      seams.push([armA, backs[0]], [armB, backs[1]]);
    } else {
      const walls = this.wallSides(f.box, 0.25);
      const room = f.room?.room.points;
      const middle: Point = room ? [room.reduce((s, p) => s + p[0], 0) / room.length, room.reduce((s, p) => s + p[1], 0) / room.length] : [(x0 + x1) / 2, (y0 + y1) / 2];
      const longSides: Side[] = x1 - x0 >= y1 - y0 ? ["top", "bottom"] : ["left", "right"];
      const distance = (side: Side) => {
        const b = band(f.box, side, 0);
        return Math.hypot((b[0] + b[2]) / 2 - middle[0], (b[1] + b[3]) / 2 - middle[1]);
      };
      const fitted: Side = walls.length
        ? walls.reduce((best, side) => (length(f.box, side) > length(f.box, best) ? side : best))
        : longSides.reduce((best, side) => (distance(side) > distance(best) ? side : best));
      const back: Side = chosen ?? fitted;
      blocks.push({ box: band(f.box, back, backDepth), lift: backLift, top: fabric.dark, front: fabric.base });
      for (const end of across(back)) blocks.push({ box: band(f.box, end, armDepth), lift: armLift, top: fabric.side, front: fabric.dark });
      seams.push([f.box, back]);
    }
    this.box(c, f.points, seatLift, fabric.seat, fabric.side, { edge: fabric.light, base: fabric.base });
    for (const [b, back] of seams) {
      const [bx, by, bw, bh] = this.pxBox(b);
      const step = Math.round(0.6 * P);
      if (back === "top" || back === "bottom") for (let x = bx + step; x < bx + bw - step / 2; x += step) rect(c, x, by - seatLift + 2, 1, bh - 4, fabric.side);
      else for (let y = by + step; y < by + bh - step / 2; y += step) rect(c, bx + 2, y - seatLift, bw - 4, 1, fabric.side);
    }
    // Blocks further back first, so the nearer ones cover them.
    blocks.sort((a, b) => a.box[3] - b.box[3]);
    for (const block of blocks) {
      const [bx0, by0, bx1, by1] = block.box;
      this.box(c, [[bx0, by0], [bx1, by0], [bx1, by1], [bx0, by1]], block.lift, block.top, block.front, { edge: fabric.light });
    }
  }

  /**
   * An L-shaped piece: which corner of its box is cut away (as left or right, top or bottom) and the point
   * of the inner corner of the L. Undefined for any other shape.
   */
  private notchOf(f: Furniture): { corner: ["left" | "right", "top" | "bottom"]; inner: Point } | undefined {
    if (f.item.rotation) return undefined;
    // Corners only: a point on a straight edge between two others is dropped.
    const points = f.points.filter((p, i) => {
      const a = f.points[(i + f.points.length - 1) % f.points.length];
      const b = f.points[(i + 1) % f.points.length];
      return Math.abs((p[0] - a[0]) * (b[1] - a[1]) - (p[1] - a[1]) * (b[0] - a[0])) > 1e-4;
    });
    if (points.length !== 6) return undefined;
    const [x0, y0, x1, y1] = f.box;
    const pad = 0.03;
    for (const [h, v] of [["left", "top"], ["right", "top"], ["left", "bottom"], ["right", "bottom"]] as ["left" | "right", "top" | "bottom"][]) {
      const probe: Point = [h === "left" ? x0 + pad : x1 - pad, v === "top" ? y0 + pad : y1 - pad];
      if (pointInPolygon(probe, f.points)) continue;
      // The inner corner is the point of the shape strictly inside its box.
      const inner = points.find((p) => p[0] > x0 + pad && p[0] < x1 - pad && p[1] > y0 + pad && p[1] < y1 - pad);
      return inner ? { corner: [h, v], inner } : undefined;
    }
    return undefined;
  }

  drawGardenObject(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const [bx, by, bw, bh] = this.pxBox(g.box);
    const P = PPM;
    switch (g.item.type) {
      case "hedge": {
        const h = Math.round(0.5 * P);
        this.box(c, g.points, h, "#3a7d3c", "#2f6b33", { base: "#24552a" });
        for (let x = bx + 2; x < bx + bw - 2; x += 5) for (let y = by - h + 2; y < by + bh - h - 1; y += 5) if (hash(x, y, 2) < 0.5) rect(c, x, y, 2, 1, "#5aa850");
        break;
      }
      case "greenhouse":
        this.drawGreenhouse(c, g);
        break;
      case "garden_house":
        this.drawShed(c, g);
        break;
      case "tree":
        this.drawTree(c, g);
        break;
      case "trampoline": {
        const [cx, cy] = this.px(g.item.center ?? [(g.box[0] + g.box[2]) / 2, (g.box[1] + g.box[3]) / 2]);
        const r = Math.round(((g.item.diameter ?? 3) / 2) * P);
        const top = cy - 6;
        disc(c, cx + 2, cy + 1, r, "rgba(0,0,0,.18)");
        // Legs in front, then the padded frame, a ring of springs and the mat with a sheen.
        for (const side of [-0.75, -0.3, 0.3, 0.75]) {
          const lx = cx + Math.round(side * r);
          rect(c, lx - 1, top + Math.round(Math.sqrt(1 - side * side) * r) - 2, 2, 8, "#5a5f68");
        }
        disc(c, cx, top, r, "#3f6fd1");
        disc(c, cx, top - 1, r - 1, "#5b86e0");
        disc(c, cx, top, r - 3, "#9aa3ad");
        for (let k = 0; k < 48; k++) {
          const a = (k / 48) * Math.PI * 2;
          rect(c, cx + Math.round(Math.cos(a) * (r - 4)), top + Math.round(Math.sin(a) * (r - 4)), 1, 1, "#6b737d");
        }
        disc(c, cx, top, r - 6, "#1d1f25");
        disc(c, cx - Math.round(r * 0.25), top - Math.round(r * 0.25), Math.round(r * 0.35), "rgba(255,255,255,.05)");
        break;
      }
      case "shelter": {
        // Seen like the walls of the house: the roof raised a little below their height, the front posts
        // from its edge down to the ground, a beam along its front as its thickness.
        const h = Math.round(0.45 * P);
        rect(c, bx + 1, by + bh - h, 2, h, "#5a3c28");
        rect(c, bx + bw - 3, by + bh - h, 2, h, "#5a3c28");
        rect(c, bx, by + bh - h, bw, 3, "#4a3020");
        if (g.item.roof !== "polycarbonate") {
          for (let y = by - h; y < by + bh - h; y += 4) rect(c, bx, y, bw, 2, "rgba(139,94,60,.85)");
          break;
        }
        // Clear sheets on a frame: rafters across the short span about every 60 cm, a beam round the edge,
        // glints on the sheets between the rafters.
        const top = by - h;
        rect(c, bx, top, bw, bh, "rgba(200,232,245,.28)");
        const along = bw >= bh;
        const span = along ? bw : bh;
        const bays = Math.max(1, Math.round(span / (0.6 * P)));
        for (let k = 0; k <= bays; k++) {
          const at = Math.round((k * (span - 2)) / bays);
          if (along) rect(c, bx + at, top, 2, bh, "#6b4a33");
          else rect(c, bx, top + at, bw, 2, "#6b4a33");
        }
        for (let k = 0; k < bays; k++) {
          const from = Math.round((k * (span - 2)) / bays) + 3;
          const size = Math.round((span - 2) / bays) - 4;
          for (let d = 0; d < 3; d++) {
            const gx = along ? bx + from + 1 + d : bx + 3 + d * 2;
            const gy = along ? top + 3 + d * 2 : top + from + 1 + d;
            rect(c, gx, gy, along ? 1 : Math.min(4, size), along ? Math.min(4, bh - 6) : 1, "rgba(255,255,255,.45)");
          }
        }
        rect(c, bx, top, bw, 2, "#5a3c28");
        rect(c, bx, top + bh - 2, bw, 2, "#5a3c28");
        rect(c, bx, top, 2, bh, "#5a3c28");
        rect(c, bx + bw - 2, top, 2, bh, "#5a3c28");
        break;
      }
    }
  }
  /**
   * A pitched roof over a box: the ridge along its longer side, the slope facing the viewer lighter, the
   * far one darker, rows of shingles or glazing bars, eaves standing out a little.
   */
  private roof(c: CanvasRenderingContext2D, x: number, top: number, w: number, depth: number, rise: number, colours: { near: string; far: string; line: string; ridge: string }, glass: boolean): void {
    const ridge = top - rise + Math.round(depth / 2);
    rect(c, x - 2, top - rise, w + 4, ridge - (top - rise), colours.far);
    rect(c, x - 2, ridge, w + 4, top + depth - ridge, colours.near);
    for (let y = top - rise + 3; y < top + depth; y += 3) {
      if (Math.abs(y - ridge) < 2) continue;
      rect(c, x - 2, y, w + 4, 1, colours.line);
      if (!glass) for (let xx = x + ((y / 3) % 2) * 3; xx < x + w + 2; xx += 6) rect(c, xx, y - 2, 1, 2, colours.line);
    }
    if (glass) for (let xx = x; xx <= x + w; xx += 8) rect(c, xx, top - rise, 1, depth + rise, "rgba(255,255,255,.75)");
    rect(c, x - 2, ridge - 1, w + 4, 2, colours.ridge);
    rect(c, x - 2, top + depth - 1, w + 4, 2, "rgba(0,0,0,.35)");
  }

  /** A greenhouse: plants on its floor seen through glass walls and a glass roof. */
  private drawGreenhouse(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const [bx, by, bw, bh] = this.pxBox(g.box);
    const wall = Math.round(0.6 * PPM);
    const rise = Math.round(0.35 * PPM);
    rect(c, bx + 2, by + 1, bw, bh, "rgba(0,0,0,.25)");
    // Inside: a path down the middle and plants either side, seen through the glass.
    rect(c, bx, by - wall, bw, bh, "#6e4c33");
    rect(c, bx + Math.round(bw / 2) - 2, by - wall, 4, bh, "#a59a86");
    for (let y = by - wall + 4; y < by + bh - wall - 2; y += 6)
      for (const x of [bx + 5, bx + Math.round(bw / 4) + 2, bx + bw - Math.round(bw / 4) - 2, bx + bw - 6]) {
        if (Math.abs(x - (bx + bw / 2)) < 4) continue;
        rect(c, x, y - 4, 1, 6, "#8a6446");
        disc(c, x, y - 1, 3, "#3f8a3e");
        disc(c, x - 1, y - 2, 1, "#5fae4a");
        if (hash(x, y, 4) < 0.6) rect(c, x + 1, y, 2, 2, "#e0392f");
        else rect(c, x - 2, y, 2, 1, "#f5d34a");
      }
    // Front glass wall with its frame.
    rect(c, bx, by + bh - wall, bw, wall, "rgba(190,230,235,.55)");
    for (let x = bx; x <= bx + bw; x += 8) rect(c, x, by + bh - wall, 1, wall, "rgba(255,255,255,.85)");
    rect(c, bx, by + bh - wall, bw, 1, "#ffffff");
    rect(c, bx, by + bh - 1, bw, 1, "#9aa1a8");
    rect(c, bx + Math.round(bw / 2) - 3, by + bh - wall + 2, 6, wall - 2, "rgba(255,255,255,.35)");
    this.roof(c, bx, by - wall - 2, bw, bh - 4, rise, { near: "rgba(215,242,246,.3)", far: "rgba(180,220,228,.35)", line: "rgba(255,255,255,.4)", ridge: "#ffffff" }, true);
  }

  /** A garden shed: plank walls with a door and a window, a pitched roof of shingles. */
  private drawShed(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const [bx, by, bw, bh] = this.pxBox(g.box);
    const wall = Math.round(0.7 * PPM);
    const rise = Math.round(0.45 * PPM);
    rect(c, bx + 3, by + 2, bw, bh, "rgba(0,0,0,.28)");
    const front = by + bh - wall;
    rect(c, bx, front, bw, wall, "#9a6a44");
    for (let x = bx + 3; x < bx + bw; x += 4) rect(c, x, front, 1, wall, "#7a5232");
    rect(c, bx, by + bh - 1, bw, 1, "#5a3c28");
    const door = Math.min(12, Math.round(bw / 3));
    rect(c, bx + Math.round(bw / 2) - door / 2, front + 4, door, wall - 4, "#6b4529");
    rect(c, bx + Math.round(bw / 2) + door / 2 - 3, front + Math.round(wall / 2), 1, 2, "#e0c35f");
    if (bw > 40) {
      rect(c, bx + 5, front + 5, 9, 7, "#f2efe6");
      rect(c, bx + 6, front + 6, 7, 5, "#7fb3d0");
      rect(c, bx + 9, front + 6, 1, 5, "#f2efe6");
    }
    this.roof(c, bx, front - (bh - 6), bw, bh - 6, rise, { near: "#a84a38", far: "#7e3528", line: "#6e2c22", ridge: "#5a2219" }, false);
  }

  /** A tree: a trunk and a round crown of leaves high above its shadow. */
  private drawTree(c: CanvasRenderingContext2D, g: { item: Item; points: Point[]; box: Box }): void {
    const centre = g.item.center ?? ([(g.box[0] + g.box[2]) / 2, (g.box[1] + g.box[3]) / 2] as Point);
    const [cx, cy] = this.px(centre);
    const r = Math.max(6, Math.round(((g.item.diameter ?? 3) / 2) * PPM));
    const trunk = Math.round(0.9 * PPM);
    const seed = [...g.item.id].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    c.save();
    c.globalAlpha = 0.22;
    disc(c, cx + 3, cy + 2, r, "#000");
    c.restore();
    rect(c, cx - 2, cy - trunk, 5, trunk, "#6b4a2f");
    rect(c, cx - 2, cy - trunk, 1, trunk, "#86603e");
    rect(c, cx - 4, cy - 1, 9, 2, "#5a3c28");
    const crown = cy - trunk - Math.round(r * 0.6);
    disc(c, cx, crown, r, "#2c6431");
    disc(c, cx - Math.round(r * 0.15), crown - Math.round(r * 0.1), Math.round(r * 0.85), "#3a823d");
    disc(c, cx - Math.round(r * 0.3), crown - Math.round(r * 0.35), Math.round(r * 0.45), "#4f9e4a");
    for (let i = 0; i < r * 2; i++) {
      const a = hash(i, seed, 1) * Math.PI * 2;
      const d = Math.sqrt(hash(i, seed, 2)) * r * 0.9;
      rect(c, cx + Math.round(Math.cos(a) * d), crown + Math.round(Math.sin(a) * d), 1, 1, hash(i, seed, 3) < 0.5 ? "#6cc060" : "#24552a");
    }
    // Some trees bear fruit.
    if (hash(seed, 7, 1) < 0.4) for (let i = 0; i < 6; i++) rect(c, cx + Math.round((hash(i, seed, 5) - 0.5) * r * 1.4), crown + Math.round((hash(i, seed, 6) - 0.5) * r), 2, 2, "#e0392f");
  }
}


/** Garden objects that stand up and take part in the drawing order; the rest is flat ground. */
export const STANDING_GARDEN = new Set(["hedge", "greenhouse", "garden_house", "trampoline", "tree"]);
