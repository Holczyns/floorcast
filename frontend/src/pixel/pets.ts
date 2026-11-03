// Pets of the pixel look: a cat or a dog living on a level. Nothing measures them; what they do comes from
// the clock and their id alone, so every screen showing the card shows the same pet at the same spot.
//
// Time is cut into slots of SLOT seconds. In each slot the pet walks from the spot of the slot before to
// the spot of this one and then stays there: asleep, sitting or washing. A sleeping pet often sleeps on
// through the next slots. Paths go round walls and the furniture it cannot climb.
import { type FurnitureKind, type Pet, type Point, pointInPolygon } from "../model";
import { PPM, hash } from "./art";
import type { Furniture, Scene } from "./scene";

const SLOT = 40;
const CELL = 0.25;
// Pets climb onto these; the rest of the furniture they walk round.
const CLIMB = new Set<FurnitureKind>(["sofa", "bed", "chair", "bench", "garden_sofa"]);
const LOW_GARDEN = new Set(["lawn", "paving", "terrace", "bed", "vegetable", "manhole"]);

export type PetState = "walk" | "run" | "sleep" | "sit" | "wash";

export interface Spot {
  at: Point;
  /** The piece of furniture the spot lies on, for drawing the pet at its height. */
  on?: Furniture;
  kind: "rest" | "floor" | "window" | "garden";
}

export interface PetPlace {
  x: number;
  y: number;
  state: PetState;
  facing: "left" | "right";
  /** Metres walked so far in this slot, for the steps of the walk. */
  walked: number;
  on?: Furniture;
}

interface Plan {
  spot: Spot;
  state: "sleep" | "sit" | "wash";
  /** Extra stops of a burst of running about. */
  via: Spot[];
}

function seed(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

export class PetLife {
  readonly pet: Pet;
  private readonly scene: Scene;
  private readonly seed: number;
  private readonly cols: number;
  private readonly rows: number;
  private readonly open: Uint8Array;
  private readonly rest: Spot[] = [];
  private readonly floor: Spot[] = [];
  private readonly windows: Spot[] = [];
  private readonly garden: Spot[] = [];
  private readonly paths = new Map<string, Point[] | null>();
  private readonly plans = new Map<number, Plan>();

  constructor(scene: Scene, pet: Pet) {
    this.scene = scene;
    this.pet = pet;
    this.seed = seed(pet.id) % 100000;
    this.cols = Math.ceil(scene.width / PPM / CELL);
    this.rows = Math.ceil(scene.height / PPM / CELL);
    this.open = new Uint8Array(this.cols * this.rows);
    for (let j = 0; j < this.rows; j++)
      for (let i = 0; i < this.cols; i++) this.open[j * this.cols + i] = this.walkable(this.centre(i, j)) ? 1 : 0;
    this.findSpots();
  }

  private centre(i: number, j: number): Point {
    return [this.scene.x0 + (i + 0.5) * CELL, this.scene.y0 + (j + 0.5) * CELL];
  }

  private cell(p: Point): [number, number] {
    return [Math.floor((p[0] - this.scene.x0) / CELL), Math.floor((p[1] - this.scene.y0) / CELL)];
  }

  private walkable(p: Point): boolean {
    const s = this.scene;
    const inBox = (b: [number, number, number, number], pad = 0) => p[0] > b[0] - pad && p[0] < b[2] + pad && p[1] > b[1] - pad && p[1] < b[3] + pad;
    if (s.pieces.some((piece) => piece.kind === "solid" && inBox(piece.box, 0.04))) return false;
    if (s.pieces.some((piece) => piece.kind === "window" && !piece.terrace && inBox(piece.box, 0.04))) return false;
    if (s.furniture.some((f) => !CLIMB.has(f.kind) && inBox(f.box) && pointInPolygon(p, f.points))) return false;
    if (s.garden.some((g) => !LOW_GARDEN.has(g.item.type) && g.item.type !== "shelter" && inBox(g.box))) return false;
    if (s.roomAt(p, false)) return true;
    if (s.pieces.some((piece) => piece.kind !== "solid" && inBox(piece.box, 0.04))) return true;
    return s.garden.some((g) => LOW_GARDEN.has(g.item.type) && inBox(g.box) && pointInPolygon(p, g.points));
  }

  private findSpots(): void {
    const s = this.scene;
    const dog = this.pet.species === "dog";
    for (const f of s.furniture) {
      if (!CLIMB.has(f.kind) || (f.room && !f.room.indoor && f.kind !== "garden_sofa")) continue;
      const [x0, y0, x1, y1] = f.box;
      const wide = x1 - x0 >= y1 - y0;
      const length = wide ? x1 - x0 : y1 - y0;
      for (let d = 0.35; d < length - 0.2; d += 0.6) {
        const at: Point = wide ? [x0 + d, (y0 + y1) / 2] : [(x0 + x1) / 2, y0 + d];
        if (!pointInPolygon(at, f.points)) continue;
        if (dog) {
          // A dog lies on the floor in front of the sofa or the bed.
          const front: Point = wide ? [at[0], y1 + 0.35] : [x1 + 0.35, at[1]];
          if (this.isOpen(front)) this.rest.push({ at: front, kind: "rest" });
        } else this.rest.push({ at, on: f, kind: "rest" });
      }
    }
    for (let j = 0; j < this.rows; j++)
      for (let i = 0; i < this.cols; i++) {
        if (!this.open[j * this.cols + i] || hash(i, j, this.seed) > 0.06) continue;
        const at = this.centre(i, j);
        const room = s.roomAt(at, false);
        if (s.furniture.some((f) => pointInPolygon(at, f.points))) continue;
        if (room && room.indoor && room.kind !== "stairs") this.floor.push({ at, kind: "floor" });
        else if (!room || !room.indoor) this.garden.push({ at, kind: "garden" });
      }
    for (const w of s.windows) {
      if (!w.room) continue;
      const at: Point = [w.centre[0] - w.out[0] * (w.t / 2 + 0.35), w.centre[1] - w.out[1] * (w.t / 2 + 0.35)];
      if (this.isOpen(at)) this.windows.push({ at, kind: "window" });
    }
  }

  private isOpen(p: Point): boolean {
    const [i, j] = this.cell(p);
    return i >= 0 && j >= 0 && i < this.cols && j < this.rows && this.open[j * this.cols + i] === 1;
  }

  /** What the pet does in a slot, drawn from its id and the number of the slot. */
  private plan(slot: number, depth = 0): Plan {
    const known = this.plans.get(slot);
    if (known) return known;
    const r = (n: number) => hash(this.seed, slot, n);
    const dog = this.pet.species === "dog";
    let plan: Plan | undefined;
    if (depth < 12) {
      const before = this.plan(slot - 1, depth + 1);
      // Sleep goes on: a cat sleeps on through most slots, a dog through fewer.
      if (before.state === "sleep" && r(1) < (dog ? 0.45 : 0.7)) plan = { spot: before.spot, state: "sleep", via: [] };
    }
    if (!plan) {
      const hour = new Date(slot * SLOT * 1000).getHours();
      const day = hour >= 8 && hour < 20;
      const pick = (spots: Spot[], n: number) => spots[Math.floor(r(n) * spots.length)];
      const roll = r(2);
      const anywhere = this.floor.length ? this.floor : this.rest;
      if (roll < (dog ? 0.35 : 0.55) && this.rest.length) plan = { spot: pick(this.rest, 3), state: "sleep", via: [] };
      else if (roll < (dog ? 0.45 : 0.65) && this.windows.length) plan = { spot: pick(this.windows, 4), state: "sit", via: [] };
      else if (roll < 0.72 && day && this.garden.length) plan = { spot: pick(this.garden, 5), state: r(6) < 0.5 ? "sit" : "wash", via: [] };
      else if (roll < 0.8 && anywhere.length) plan = { spot: pick(anywhere, 7), state: "sit", via: [pick(anywhere, 8), pick(anywhere, 9)] };
      else if (anywhere.length) plan = { spot: pick(anywhere, 10), state: r(11) < 0.5 ? "sit" : "wash", via: [] };
      else plan = { spot: { at: this.centre(Math.floor(this.cols / 2), Math.floor(this.rows / 2)), kind: "floor" }, state: "sit", via: [] };
      if (dog && plan.state === "wash") plan.state = "sit";
    }
    this.plans.set(slot, plan);
    if (this.plans.size > 64) this.plans.delete(this.plans.keys().next().value!);
    return plan;
  }

  /** Where the pet is at a time in seconds, and what it does. */
  placeAt(time: number): PetPlace {
    const slot = Math.floor(time / SLOT);
    const plan = this.plan(slot);
    const before = this.plan(slot - 1);
    const stops = [before.spot, ...plan.via, plan.spot];
    const route: Point[] = [];
    for (let i = 1; i < stops.length; i++) {
      const leg = this.path(stops[i - 1].at, stops[i].at);
      if (leg) route.push(...(route.length ? leg.slice(1) : leg));
    }
    const running = plan.via.length > 0;
    const speed = running ? 2.4 : this.pet.species === "dog" ? 1.0 : 0.6;
    let left = (time - slot * SLOT) * speed;
    let walked = 0;
    for (let i = 1; i < route.length; i++) {
      const a = route[i - 1];
      const b = route[i];
      const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (left <= d) {
        const k = d > 0 ? left / d : 0;
        return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, state: running ? "run" : "walk", facing: b[0] < a[0] ? "left" : "right", walked: walked + left };
      }
      left -= d;
      walked += d;
    }
    const facing = hash(this.seed, slot, 20) < 0.5 ? "left" : "right";
    return { x: plan.spot.at[0], y: plan.spot.at[1], state: plan.state, facing, walked: 0, on: plan.spot.on };
  }

  /** Shortest way between two points on the walking grid, through the middles of its cells. */
  private path(from: Point, to: Point): Point[] | null {
    const key = `${from[0].toFixed(2)},${from[1].toFixed(2)}>${to[0].toFixed(2)},${to[1].toFixed(2)}`;
    if (this.paths.has(key)) return this.paths.get(key)!;
    const [si, sj] = this.cell(from);
    const [ti, tj] = this.cell(to);
    const n = this.cols * this.rows;
    const inside = (i: number, j: number) => i >= 0 && j >= 0 && i < this.cols && j < this.rows;
    const start = sj * this.cols + si;
    const goal = tj * this.cols + ti;
    let result: Point[] | null = null;
    if (inside(si, sj) && inside(ti, tj)) {
      const cost = new Float32Array(n).fill(Infinity);
      const came = new Int32Array(n).fill(-1);
      const heap: [number, number][] = [];
      const push = (k: number, f: number) => {
        heap.push([f, k]);
        for (let i = heap.length - 1; i > 0; ) {
          const p = (i - 1) >> 1;
          if (heap[p][0] <= heap[i][0]) break;
          [heap[p], heap[i]] = [heap[i], heap[p]];
          i = p;
        }
      };
      const pop = () => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length) {
          heap[0] = last;
          for (let i = 0; ; ) {
            const l = 2 * i + 1;
            const r = l + 1;
            let m = i;
            if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
            if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
            if (m === i) break;
            [heap[m], heap[i]] = [heap[i], heap[m]];
            i = m;
          }
        }
        return top[1];
      };
      cost[start] = 0;
      push(start, 0);
      while (heap.length) {
        const k = pop();
        if (k === goal) break;
        const i = k % this.cols;
        const j = Math.floor(k / this.cols);
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
          const ni = i + di;
          const nj = j + dj;
          if (!inside(ni, nj)) continue;
          const nk = nj * this.cols + ni;
          // The goal and the start may lie on furniture marked closed by a neighbour; they are always allowed.
          if (!this.open[nk] && nk !== goal) continue;
          if (di && dj && (!this.open[j * this.cols + ni] || !this.open[nj * this.cols + i])) continue;
          const c = cost[k] + (di && dj ? 1.414 : 1);
          if (c < cost[nk]) {
            cost[nk] = c;
            came[nk] = k;
            push(nk, c + Math.hypot(ni - ti, nj - tj));
          }
        }
      }
      if (came[goal] >= 0 || goal === start) {
        const cells: Point[] = [];
        for (let k = goal; k !== start && k >= 0; k = came[k]) cells.unshift(this.centre(k % this.cols, Math.floor(k / this.cols)));
        result = [from, ...cells.slice(0, -1), to];
      }
    }
    // Without a way the pet does not walk through walls: it simply turns up there.
    result ??= [to];
    this.paths.set(key, result);
    if (this.paths.size > 200) this.paths.delete(this.paths.keys().next().value!);
    return result;
  }
}
