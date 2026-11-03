// What a level looks like in the pixel look, worked out once from the plan: walls cut by their openings,
// the base picture (ground, floors, wall faces, wall tops), furniture guessed from the obstacles and what
// each light, window and screen can reach past the walls.
import { type Device, type Item, type Level, type Opening, type Plan, type Point, type Room, deviceCentre, drawnBounds, itemPoints, pointInPolygon } from "../model";
import { LOOKS, PPM, type RoomKind, type RoomLook, canvas, disc, hash, plants, rect, roomKind, texture } from "./art";

/** Pixels of the light buffer cell. */
export const LIGHT_CELL = 4;
/** Height of a wall face on the screen, in metres of the plan. */
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

export type FurnitureKind =
  | "counter"
  | "sofa"
  | "bed"
  | "wardrobe"
  | "tvstand"
  | "cabinet"
  | "desk"
  | "nightstand"
  | "table"
  | "chair"
  | "roundtable"
  | "bathtub"
  | "shower"
  | "toilet"
  | "lounge"
  | "gardenbench"
  | "gardentable";

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
const SOLID_GARDEN = new Set(["hedge", "greenhouse", "garden_house", "trampoline"]);

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
  readonly base: HTMLCanvasElement;
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
    for (const piece of this.furniture) if (piece.kind === "counter") this.placeUnits(piece);
    this.blockers = this.pieces.filter((piece) => piece.kind === "solid").map((piece) => piece.box);
    this.lightWidth = Math.ceil(this.width / LIGHT_CELL);
    this.lightHeight = Math.ceil(this.height / LIGHT_CELL);
    this.region = new Int16Array(this.lightWidth * this.lightHeight);
    this.fillRegions();
    this.makeLights();
    const [base, bc] = canvas(this.width, this.height);
    this.base = base;
    this.drawBase(bc);
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
  /** What an obstacle most likely is, from the room it stands in, its size and its shape. */
  private guess(item: Item, points: Point[]): Furniture {
    const box = boxOf(points);
    const centre: Point = [(box[0] + box[2]) / 2, (box[1] + box[3]) / 2];
    const room = this.roomAt(centre, false);
    const w = box[2] - box[0];
    const h = box[3] - box[1];
    const short = Math.min(w, h);
    const long = Math.max(w, h);
    const kind = ((): FurnitureKind => {
      if (item.type === "round_obstacle") return "roundtable";
      if (!room || !room.indoor) return points.length > 4 ? "lounge" : long > 1.2 ? "gardenbench" : "gardentable";
      switch (room.kind) {
        case "kitchen":
          return "counter";
        case "living":
          return points.length > 4 ? "sofa" : short < 0.5 && long > 1.5 ? "tvstand" : long > 1.6 && short > 0.7 ? "sofa" : "cabinet";
        case "dining":
          return long < 0.45 ? "chair" : "table";
        case "bath":
          return long < 0.7 ? "toilet" : short < 0.5 && long > 0.9 ? "shower" : "bathtub";
        case "bedroom":
        case "kids":
        case "room":
          if (short >= 0.7 && w * h >= 1.2) return "bed";
          if (long <= 0.6) return "nightstand";
          if (short <= 0.6 && long >= 1) return "wardrobe";
          return "desk";
        default:
          return "wardrobe";
      }
    })();
    return { item, points, box, kind, room, units: [] };
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

  /** Cells a walker cannot stand on: walls, furniture and solid garden objects. */
  blocked(p: Point): boolean {
    if (this.pieces.some((piece) => piece.kind !== "door" && !piece.terrace && p[0] > piece.box[0] && p[0] < piece.box[2] && p[1] > piece.box[1] && p[1] < piece.box[3])) return true;
    if (this.furniture.some((f) => p[0] >= f.box[0] && p[0] <= f.box[2] && p[1] >= f.box[1] && p[1] <= f.box[3] && pointInPolygon(p, f.points))) return true;
    return this.garden.some((g) => SOLID_GARDEN.has(g.item.type) && p[0] >= g.box[0] && p[0] <= g.box[2] && p[1] >= g.box[1] && p[1] <= g.box[3]);
  }

  // ---------------------------------------------------------------- light
  private fillRegions(): void {
    const cell = LIGHT_CELL / PPM;
    for (let j = 0; j < this.lightHeight; j++)
      for (let i = 0; i < this.lightWidth; i++) {
        const p: Point = [this.x0 + (i + 0.5) * cell, this.y0 + (j + 0.5) * cell];
        const onWall = this.pieces.some((w) => w.kind !== "door" && p[0] >= w.box[0] && p[0] <= w.box[2] && p[1] >= w.box[1] && p[1] <= w.box[3]);
        const room = this.roomAt(p);
        this.region[j * this.lightWidth + i] = onWall ? -2 : room ? this.rooms.indexOf(room) : -1;
      }
  }

  /** Whether a wall stands between two points. */
  private shaded(ax: number, ay: number, bx: number, by: number): boolean {
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
        if (this.shaded(at[0], at[1], x, y)) continue;
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
          plants(c, x, y, w, h, type === "vegetable");
        }
      }
    for (const r of this.rooms) {
      if (r.kind === "driveway" || (!r.indoor && r.kind !== "terrace")) continue;
      this.path(c, r.room.points);
      c.fillStyle = texture(c, r.look.floor);
      c.fill();
    }
    for (const d of this.doors) {
      const room = d.room ?? d.other;
      const [x, y, w, h] = this.pxBox(d.box);
      c.fillStyle = texture(c, room ? room.look.floor : "paving");
      c.fillRect(x, y, w, h);
    }
    this.drawFaces(c);
    this.drawWallTops(c);
    const face = Math.round(FACE * PPM);
    for (const d of this.doors) {
      const [x, y, w, h] = this.pxBox(d.box);
      if (d.horizontal) {
        rect(c, x, y, 2, h + face, "#5b3b24");
        rect(c, x + w - 2, y, 2, h + face, "#5b3b24");
      } else {
        rect(c, x, y, w, 2, "#5b3b24");
        rect(c, x, y + h - 2, w, 2, "#5b3b24");
      }
    }
  }

  /** Faces of walls running left to right: wallpaper of the room in front, brick outside. Windows sit in them. */
  private drawFaces(c: CanvasRenderingContext2D): void {
    const face = Math.round(FACE * PPM);
    for (const piece of this.pieces) {
      if (!piece.horizontal || piece.kind === "door") continue;
      const [x, y, w, h] = this.pxBox(piece.box);
      const bottom = y + h;
      for (let xx = x; xx < x + w; xx += 4) {
        const ww = Math.min(4, x + w - xx);
        const front = this.roomAt([this.x0 + (xx + 2) / PPM, this.y0 + (bottom + 4) / PPM]);
        if (front) {
          const [p0, p1] = front.look.paper;
          rect(c, xx, bottom, ww, face, p0);
          for (let i = 0; i < ww; i++) if ((xx + i) % 4 === 1) rect(c, xx + i, bottom + 2, 1, face - 5, p1);
          rect(c, xx, bottom, ww, 2, "rgba(0,0,0,.25)");
          rect(c, xx, bottom + face - 4, ww, 1, "#8a6446");
          rect(c, xx, bottom + face - 3, ww, 3, "#6b4a33");
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
        w.glass = [x + 1, y + 1, ww - 2, h - 2];
        rect(c, x, y, ww, h, "#f2efe6");
      }
    }
  }

  /** Wall tops seen from above, with a light edge where they meet something lower. */
  private drawWallTops(c: CanvasRenderingContext2D): void {
    const [, mc] = canvas(this.width, this.height);
    mc.fillStyle = "#000";
    for (const piece of this.pieces) {
      if (piece.kind === "door" || (piece.kind === "window" && !piece.horizontal)) continue;
      const [x, y, w, h] = this.pxBox(piece.box);
      mc.fillRect(x, y, w, h);
    }
    const mask = mc.getImageData(0, 0, this.width, this.height).data;
    const at = (x: number, y: number) => x >= 0 && y >= 0 && x < this.width && y < this.height && mask[(y * this.width + x) * 4 + 3] > 0;
    const image = c.getImageData(0, 0, this.width, this.height);
    const d = image.data;
    for (let y = 0; y < this.height; y++)
      for (let x = 0; x < this.width; x++) {
        if (!at(x, y)) continue;
        let colour: [number, number, number] = [59, 51, 66];
        if (!at(x, y - 1)) colour = [90, 80, 100];
        else if (!at(x - 1, y)) colour = [77, 69, 86];
        else if (!at(x + 1, y) || !at(x, y + 1)) colour = [44, 38, 50];
        else if (hash(x, y, 5) < 0.04) colour = [68, 59, 76];
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
  box(c: CanvasRenderingContext2D, points: Point[], lift: number, top: string, front: string, extra: { edge?: string; handles?: string; base?: string } = {}): void {
    this.path(c, points, lift);
    c.fillStyle = top;
    c.fill();
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
      if (extra.handles) for (let hx = x + 6; hx < x + w - 3; hx += Math.max(8, Math.round(0.6 * PPM))) rect(c, hx, y - Math.ceil(lift * 0.6), 2, 1, extra.handles);
      if (extra.base) rect(c, x, y - 1, w, 1, extra.base);
    }
  }

  drawFurniture(c: CanvasRenderingContext2D, f: Furniture): void {
    const P = PPM;
    const [bx, by, bw, bh] = this.pxBox(f.box);
    const lift = (m: number) => Math.round(m * P);
    switch (f.kind) {
      case "counter": {
        const h = lift(0.28);
        this.box(c, f.points, h, "#dcd6c8", "#6f87a3", { edge: "#f0ebe0", handles: "#c9d3de", base: "#4f6580" });
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
      case "sofa": {
        const h = lift(0.22);
        this.box(c, f.points, h, "#c0564b", "#a8473d", { edge: "#cf6f62", base: "#96403a" });
        // Backrest along the sides that touch a wall.
        for (let i = 0; i < f.points.length; i++) {
          const a = f.points[i];
          const b = f.points[(i + 1) % f.points.length];
          const middle: Point = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
          const touches = this.pieces.some((p) => middle[0] >= p.box[0] - 0.1 && middle[0] <= p.box[2] + 0.1 && middle[1] >= p.box[1] - 0.1 && middle[1] <= p.box[3] + 0.1);
          if (!touches) continue;
          const [xa, ya] = this.px(a);
          const [xb, yb] = this.px(b);
          const k = lift(0.18);
          if (Math.abs(ya - yb) < 1) rect(c, Math.min(xa, xb), (ya < by + bh / 2 ? ya : ya - k) - h, Math.abs(xb - xa), k, "#96403a");
          else rect(c, xa < bx + bw / 2 ? xa : xa - k, Math.min(ya, yb) - h, k, Math.abs(yb - ya), "#96403a");
        }
        break;
      }
      case "bed": {
        const h = lift(0.18);
        this.box(c, f.points, h, "#efe9df", "#cfc6b6", { edge: "#ffffff" });
        if (bh >= bw) {
          rect(c, bx + 1, by - h - 5, bw - 2, 6, "#6b4a33");
          const double = bw > 1.2 * P;
          const pw = double ? Math.floor(bw / 2) - 4 : bw - 6;
          rect(c, bx + 3, by - h + 3, pw, 7, "#ffffff");
          if (double) rect(c, bx + bw / 2 + 1, by - h + 3, pw, 7, "#ffffff");
          rect(c, bx + 1, by - h + Math.round(bh * 0.3), bw - 2, Math.round(bh * 0.7) - 1, "#5b7fbf");
          rect(c, bx + 1, by - h + Math.round(bh * 0.3), bw - 2, 2, "#7d9bd2");
        } else {
          rect(c, bx - 4, by - h, 6, bh, "#6b4a33");
          rect(c, bx + 3, by - h + 3, 7, bh - 6, "#ffffff");
          rect(c, bx + Math.round(bw * 0.3), by - h + 1, Math.round(bw * 0.7) - 1, bh - 2, "#5b7fbf");
          rect(c, bx + Math.round(bw * 0.3), by - h + 1, 2, bh - 2, "#7d9bd2");
        }
        break;
      }
      case "wardrobe": {
        const h = lift(0.45);
        this.box(c, f.points, h, "#8a5d3b", "#7a5236", { edge: "#a8774f", base: "#5a3c28" });
        if (bw > bh) for (let x = bx + lift(0.5); x < bx + bw - 2; x += lift(0.5)) rect(c, x, by + bh - h, 1, h - 1, "#5e3f28");
        break;
      }
      case "tvstand":
        this.box(c, f.points, lift(0.2), "#4a3a30", "#3a2d25", { edge: "#5e4a3d" });
        rect(c, bx + 1, by - 2, Math.max(3, bw - 2), bh - 4, "#15161b");
        break;
      case "cabinet":
      case "desk":
      case "nightstand":
        this.box(c, f.points, lift(f.kind === "nightstand" ? 0.25 : 0.35), "#946645", "#7a5236", { edge: "#a8774f", handles: "#d8c08a" });
        break;
      case "table": {
        const h = lift(0.3);
        this.box(c, f.points, h, "#a8784a", "#80592f", { edge: "#c08d5c" });
        const [cx, cy] = this.px([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2]);
        disc(c, cx, cy - h, 3, "#f2efe6");
        rect(c, cx - 1, cy - h - 2, 2, 2, "#e8505b");
        break;
      }
      case "chair":
        this.box(c, f.points, lift(0.18), "#9a6a40", "#7a5030", { edge: "#b4824f" });
        break;
      case "roundtable": {
        const centre = f.item.center ?? ([(f.box[0] + f.box[2]) / 2, (f.box[1] + f.box[3]) / 2] as Point);
        const [cx, cy] = this.px(centre);
        const r = Math.round(((f.item.diameter ?? f.box[2] - f.box[0]) / 2) * P);
        const h = lift(0.2);
        disc(c, cx, cy, r, "#6b4529");
        disc(c, cx, cy - h, r, "#8b5e3c");
        disc(c, cx - 2, cy - h - 2, Math.max(1, r - 5), "#a5744d");
        break;
      }
      case "bathtub":
        this.box(c, f.points, lift(0.25), "#f4f6f8", "#dfe5ea", { edge: "#ffffff" });
        rect(c, bx + 3, by - lift(0.25) + 3, bw - 6, bh - 6, "#8fd0ea");
        break;
      case "shower":
        this.box(c, f.points, lift(0.45), "rgba(190,230,245,.55)", "rgba(160,205,225,.6)", { edge: "#e6f6fc" });
        break;
      case "toilet":
        this.box(c, f.points, lift(0.2), "#f4f6f8", "#dfe5ea", { edge: "#ffffff" });
        disc(c, bx + bw / 2, by + bh / 2 - lift(0.2), Math.max(2, Math.round(Math.min(bw, bh) / 2) - 3), "#cfd8de");
        break;
      case "lounge":
        this.box(c, f.points, lift(0.22), "#8c7a66", "#6e5e4e", { edge: "#e8dcc4" });
        break;
      default:
        this.box(c, f.points, lift(0.25), "#8c7a66", "#6e5e4e", { edge: "#a89480" });
    }
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
      case "greenhouse": {
        const h = Math.round(0.9 * P);
        this.box(c, g.points, h, "rgba(205,240,245,.75)", "rgba(170,215,225,.8)", { edge: "#ffffff" });
        for (let x = bx; x <= bx + bw; x += 8) rect(c, x, by - h, 1, bh + h, "rgba(255,255,255,.7)");
        for (let i = 0; i < 6; i++) disc(c, bx + 5 + hash(i, 1, 3) * (bw - 10), by - 2 + hash(i, 2, 3) * (bh - 6), 2, "#4f9a3f");
        break;
      }
      case "garden_house": {
        const h = Math.round(1.0 * P);
        this.box(c, g.points, h, "#7a4a3a", "#9a6a44", { edge: "#9a5e48", base: "#6b4a33" });
        for (let y = by - h + 3; y < by + bh - h; y += 4) rect(c, bx, y, bw, 1, "#663c2f");
        rect(c, bx + bw / 2 - 5, by + bh - 14, 10, 14, "#6b4529");
        break;
      }
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
}

/** Garden objects that stand up and take part in the drawing order; the rest is flat ground. */
export const STANDING_GARDEN = new Set(["hedge", "greenhouse", "garden_house", "trampoline"]);
