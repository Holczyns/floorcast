// What a level looks like in the pixel look, worked out once from the plan: walls cut by their openings,
// the base picture (ground, floors, wall faces, wall tops), furniture guessed from the obstacles and what
// each light, window and screen can reach past the walls.
import { type Device, type FurnitureKind, type Item, type Level, type Opening, type Plan, type Point, type Room, deviceCentre, drawnBounds, itemPoints, pointInPolygon } from "../model";
import { furnitureOf } from "./furniture";
import { LOOKS, PPM, type RoomKind, type RoomLook, type Texture, canvas, crops, disc, flowers, hash, rect, roomKind, texture } from "./art";
import { drawStairs } from "./stairs";

/** Pixels of the light buffer cell. */
export const LIGHT_CELL = 4;
/**
 * Height of a wall on the screen, in metres of the plan. The plan gives the foot of every wall; its top is
 * drawn this much higher, with its face between top and foot.
 */
export const FACE = 0.5;

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
    const spots: Point[] = [];
    for (let y = counter.box[1] + 0.2; y < counter.box[3]; y += 0.2)
      for (let x = counter.box[0] + 0.2; x < counter.box[2]; x += 0.2) if (pointInPolygon([x, y], counter.points)) spots.push([x, y]);
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
    const rectangle = f.points.length === 4 && !f.item.rotation;
    const round = !!f.item.center;
    const sides = this.wallSides(f.box);
    // The side a back, a headboard or a shelf front is on: against a wall, otherwise at the back of the room.
    // Never the front side: a back or headboard there would face away from the viewer.
    const back = sides.find((side) => side !== "bottom") ?? "top";
    const module = lift(0.6);
    switch (f.kind) {
      case "kitchen": {
        const h = lift(0.28);
        this.box(c, f.points, h, "#dcd6c8", "#6f87a3", { edge: "#f0ebe0", base: "#4f6580", modules: module, seam: "#58708c", handles: "#c9d3de" });
        for (const [spot, unit] of f.units) {
          const [ux, uy] = this.px(spot);
          const y = uy - h;
          if (unit === "sink") {
            rect(c, ux - 6, y - 4, 12, 8, "#9aa3ad");
            rect(c, ux - 5, y - 3, 10, 6, "#7d8792");
            rect(c, ux - 1, y - 7, 2, 4, "#c0c6cc");
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
        this.drawSofa(c, f);
        break;
      case "bed": {
        const h = lift(0.18);
        this.box(c, f.points, h, "#efe9df", "#cfc6b6", { edge: "#ffffff" });
        const y0 = by - h;
        const head = back;
        const across = head === "top";
        const width = across ? bw : bh;
        const double = width > 1.2 * P;
        const pillow = (x: number, y: number, w: number, hh: number) => {
          rect(c, x, y, w, hh, "#ffffff");
          rect(c, x, y + hh - 1, w, 1, "#d8d2c6");
        };
        if (across) {
          const hy = head === "top" ? y0 : y0 + bh - 5;
          rect(c, bx, hy - (head === "top" ? 5 : 0), bw, 6, "#6b4a33");
          const py = head === "top" ? y0 + 3 : y0 + bh - 12;
          const pw = double ? Math.floor(bw / 2) - 5 : bw - 8;
          pillow(bx + 4, py, pw, 7);
          if (double) pillow(bx + bw / 2 + 1, py, pw, 7);
          const blanketY = head === "top" ? y0 + Math.round(bh * 0.32) : y0 + 1;
          const blanketH = Math.round(bh * 0.68) - 2;
          rect(c, bx + 1, blanketY, bw - 2, blanketH, "#5b7fbf");
          rect(c, bx + 1, head === "top" ? blanketY : blanketY + blanketH - 2, bw - 2, 2, "#7d9bd2");
        } else {
          const hx = head === "left" ? bx - 4 : bx + bw - 2;
          rect(c, hx, y0, 6, bh, "#6b4a33");
          const px = head === "left" ? bx + 3 : bx + bw - 11;
          const ph = double ? Math.floor(bh / 2) - 5 : bh - 8;
          pillow(px, y0 + 4, 8, ph);
          if (double) pillow(px, y0 + bh / 2 + 1, 8, ph);
          const blanketX = head === "left" ? bx + Math.round(bw * 0.32) : bx + 1;
          const blanketW = Math.round(bw * 0.68) - 2;
          rect(c, blanketX, y0 + 1, blanketW, bh - 2, "#5b7fbf");
          rect(c, head === "left" ? blanketX : blanketX + blanketW - 2, y0 + 1, 2, bh - 2, "#7d9bd2");
        }
        break;
      }
      case "wardrobe": {
        const h = lift(0.45);
        this.box(c, f.points, h, "#8a5d3b", "#7a5236", { edge: "#a8774f", base: "#5a3c28", modules: lift(0.5), seam: "#5e3f28", handles: "#e0c890" });
        if (bh > bw) for (let y = by - h + lift(0.5); y < by + bh - h - 2; y += lift(0.5)) rect(c, bx + 1, y, bw - 2, 1, "#6e4a30");
        break;
      }
      case "shelf": {
        const h = lift(0.45);
        this.box(c, f.points, h, "#6e4a30", "#4e3322", { edge: "#8a5d3b" });
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
        this.box(c, f.points, h, "#f2f4f6", "#dfe3e7", { edge: "#ffffff", base: "#b9c0c7" });
        rect(c, bx + bw - 4, by + bh - h + 3, 1, Math.max(3, h - 6), "#9aa1a8");
        rect(c, bx + 3, by - h + 3, 3, 3, "#e8505b");
        break;
      }
      case "table": {
        const h = lift(0.3);
        if (round) {
          this.disc3(c, f, h, "#4f301b", "#6e4528", "#86573a");
        } else this.box(c, f.points, h, "#7c4f2c", "#5c3920", { edge: "#94633b" });
        const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
        disc(c, cx, cy - h, 3, "#f2efe6");
        rect(c, cx - 1, cy - h - 2, 2, 2, "#e8505b");
        break;
      }
      case "chair": {
        const h = lift(0.18);
        this.box(c, f.points, h, "#6a4226", "#4f301b", { edge: "#80522f" });
        rect(c, bx, by - h - 3, bw, 3, "#4f301b");
        break;
      }
      case "desk": {
        const h = lift(0.3);
        this.box(c, f.points, h, "#b58a5a", "#8f6a42", { edge: "#c99d6b", handles: "#e0c890" });
        const [cx] = this.px([(f.box[0] + f.box[2]) / 2, 0]);
        rect(c, cx - 6, by - h + 2, 12, 7, "#1d1f25");
        rect(c, cx - 5, by - h + 3, 10, 5, "#4a7bd0");
        break;
      }
      case "tvstand": {
        const h = lift(0.2);
        this.box(c, f.points, h, "#4a3a30", "#3a2d25", { edge: "#5e4a3d" });
        if (bw >= bh) {
          const tv = lift(0.32);
          rect(c, bx + Math.round(bw * 0.1), by - h - tv + 2, Math.round(bw * 0.8), tv, "#15161b");
          rect(c, bx + Math.round(bw * 0.1) + 2, by - h - tv + 4, Math.round(bw * 0.8) - 4, tv - 4, "#262a35");
        } else rect(c, bx + Math.round(bw / 2) - 1, by - h + 2, 3, bh - 4, "#15161b");
        break;
      }
      case "dresser":
      case "nightstand": {
        const h = lift(f.kind === "nightstand" ? 0.25 : 0.3);
        this.box(c, f.points, h, "#946645", "#7a5236", { edge: "#a8774f", drawers: true });
        if (f.kind === "nightstand") {
          const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
          rect(c, cx - 3, cy - h - 7, 6, 5, "#d9c896");
          rect(c, cx - 1, cy - h - 2, 2, 2, "#555");
        }
        break;
      }
      case "bathtub":
        this.box(c, f.points, lift(0.25), "#f4f6f8", "#dfe5ea", { edge: "#ffffff" });
        rect(c, bx + 3, by - lift(0.25) + 3, bw - 6, bh - 6, "#8fd0ea");
        rect(c, bx + 3, by - lift(0.25) + 3, bw - 6, 1, "#b9e4f3");
        break;
      case "shower":
        this.box(c, f.points, lift(0.45), "rgba(190,230,245,.55)", "rgba(160,205,225,.6)", { edge: "#e6f6fc" });
        break;
      case "toilet":
        this.box(c, f.points, lift(0.2), "#f4f6f8", "#dfe5ea", { edge: "#ffffff" });
        disc(c, bx + bw / 2, by + bh / 2 - lift(0.2), Math.max(2, Math.round(Math.min(bw, bh) / 2) - 3), "#cfd8de");
        break;
      case "washbasin": {
        const h = lift(0.28);
        this.box(c, f.points, h, "#f4f6f8", "#8f6a42", { edge: "#ffffff" });
        const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
        rect(c, cx - 5, cy - h - 3, 10, 6, "#cfd8de");
        rect(c, cx - 1, cy - h - 6, 2, 3, "#c0c6cc");
        break;
      }
      case "washer": {
        const h = lift(0.28);
        this.box(c, f.points, h, "#eef0f2", "#e1e4e8", { edge: "#ffffff" });
        const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
        disc(c, cx, cy - h, Math.max(2, Math.round(Math.min(bw, bh) / 2) - 3), "#7f8a96");
        disc(c, cx, cy - h, Math.max(1, Math.round(Math.min(bw, bh) / 2) - 5), "#b9d7ea");
        break;
      }
      case "plant": {
        const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
        const r = Math.max(3, Math.round(Math.min(bw, bh) / 2));
        rect(c, cx - r / 2 + 1, cy - 2, r, 4, "rgba(0,0,0,.3)");
        rect(c, cx - r / 2, cy - 6, r, 6, "#b5653a");
        rect(c, cx - r / 2, cy - 6, r, 1, "#d07a4a");
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
        c.fillStyle = "#e8dcc4";
        c.fillRect(bx + 3, by - h + 3, bw - 6, bh - 6);
        c.restore();
        break;
      }
      case "garden_table": {
        const h = lift(0.28);
        if (round) this.disc3(c, f, h, "#6e5e4e", "#a89480", "#bfae98");
        else this.box(c, f.points, h, "#a89480", "#8c7a66", { edge: "#bfae98" });
        break;
      }
      case "bench": {
        const h = lift(0.22);
        this.box(c, f.points, h, "#9a6a40", "#7a5030", { edge: "#b8844f" });
        if (bw >= bh) for (let y = by - h + 3; y < by + bh - h - 1; y += 3) rect(c, bx + 1, y, bw - 2, 1, "#7a5030");
        else for (let x = bx + 3; x < bx + bw - 1; x += 3) rect(c, x, by - h + 1, 1, bh - 2, "#7a5030");
        break;
      }
      default:
        this.box(c, f.points, lift(0.25), "#946645", "#7a5236", { edge: "#a8774f" });
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
  private drawSofa(c: CanvasRenderingContext2D, f: Furniture): void {
    const P = PPM;
    const fabric = { seat: "#c0564b", side: "#a8473d", light: "#cf6f62", dark: "#8c3b35", base: "#7a332e" };
    const [x0, y0, x1, y1] = f.box;
    const armchair = x1 - x0 < 1.2 && y1 - y0 < 1.2;
    const backDepth = Math.min(0.22, (Math.min(x1 - x0, y1 - y0)) * 0.3);
    const armDepth = armchair ? Math.min(0.2, (Math.max(x1 - x0, y1 - y0)) * 0.22) : 0.15;
    const seatLift = Math.round(0.2 * P);
    const backLift = Math.round(0.42 * P);
    const armLift = Math.round(0.3 * P);
    type Side = "top" | "bottom" | "left" | "right";
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
      const back: Side = walls.length
        ? walls.reduce((best, side) => (length(f.box, side) > length(f.box, best) ? side : best))
        : longSides.reduce((best, side) => (distance(side) > distance(best) ? side : best));
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
        disc(c, cx, cy, r, "rgba(0,0,0,.18)");
        disc(c, cx, cy - 6, r, "#3f6fd1");
        disc(c, cx, cy - 6, r - 4, "#1d1f25");
        break;
      }
      case "shelter": {
        const h = Math.round(1.1 * P);
        rect(c, bx + 1, by - h, 2, bh + h, "#5a3c28");
        rect(c, bx + bw - 3, by - h, 2, bh + h, "#5a3c28");
        for (let y = by - h; y < by + bh - h; y += 4) rect(c, bx, y, bw, 2, "rgba(139,94,60,.85)");
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
