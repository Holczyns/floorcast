// Pets of the pixel look: a cat, a dog, a tiger, a rabbit or a hamster living on a level. Nothing measures them;
// what they do comes from the clock and their id alone, so every screen showing the card shows the same pet at the
// same spot.
//
// Time is cut into slots of SLOT seconds. In each slot the pet goes from the spot of the slot before to the spot of
// this one, on a walk round the house or in a burst of running, and then does what its kind does there:
// 1. A cat sleeps (kneading its bed first), sits, washes, plays with a ball of yarn, hunts a fly or a butterfly or
//    sharpens its claws on a cat tree. A tiger is a lazy cat with a big ball.
// 2. A dog sleeps, sits, sniffs along its walks, fetches a ball, digs in the garden by day and chases its tail.
// 3. A rabbit hops instead of walking, nibbles grass or a carrot, grooms its ears, jumps for joy and dozes.
// 4. A hamster stays in its cage: it runs in its wheel, eats and sleeps.
// 5. Waking from a sleep a pet stretches and yawns before it goes.
// 6. Sleep may go on into the next slot. Paths go round walls and the furniture it cannot climb.
// 7. A stroked pet rolls on its back, then plays where it was touched, on the furniture it lies on if any.
import { type FurnitureKind, type Pet, type Point, pointInPolygon } from "../model";
import { hash } from "./art";
import type { AnimalPose } from "./animals";
import { Grid } from "./grid";
import type { Furniture, Scene } from "./scene";

const SLOT = 40;
// Seconds of stretching and yawning after a sleep, and of kneading before one.
const WAKE = 3;
const KNEAD = 4;
// Seconds a stroked pet rolls on its back before it plays.
const ROLL = 2.5;
// Pets climb onto these or lie on them; the rest of the furniture they walk round.
const CLIMB = new Set<FurnitureKind>(["sofa", "bed", "chair", "bench", "garden_sofa", "rug", "cat_tree", "pet_bed", "pouf"]);
// A dog or a rabbit lies on these themselves, not on the floor in front of them.
const LOW_BEDS = new Set<FurnitureKind>(["rug", "pet_bed"]);
const LOW_GARDEN = new Set(["lawn", "paving", "terrace", "bed", "vegetable", "manhole"]);

export type PetState = AnimalPose;

export interface Spot {
  at: Point;
  /** The piece of furniture the spot lies on, for drawing the pet at its height. */
  on?: Furniture;
  kind: "rest" | "floor" | "window" | "garden" | "tree";
}

/** A ball of yarn, a ball, a prey or a carrot by the pet, how high over the ground (m) and how faded (1 to 0) it is. */
export interface Toy {
  kind: "yarn" | "ball" | "fly" | "butterfly" | "carrot";
  at: Point;
  height: number;
  fade?: number;
}

export interface PetPlace {
  x: number;
  y: number;
  state: PetState;
  facing: "left" | "right";
  /** Metres walked so far, for the steps of the walk. */
  walked: number;
  /** Height of a jump over the ground, in metres. */
  hop: number;
  on?: Furniture;
  toy?: Toy;
  /** A hamster: where its cage stands; x, y is the cage too. */
  cage?: boolean;
}

type Activity = "sleep" | "sit" | "wash" | "stroll" | "zoomies" | "play" | "hunt" | "fetch" | "scratch" | "dig" | "eat";

interface Plan {
  spot: Spot;
  activity: Activity;
  /** Stops on the way: a walk round the house, a burst of running about. */
  via: Spot[];
  /** Hunt: where the cat starts to creep up on the prey at the spot, and what the prey is. */
  approach?: Point;
  prey?: "fly" | "butterfly";
  /** Fetch: where the ball lands. */
  ball?: Point;
}

type Kind = "feline" | "dog" | "rabbit" | "hamster";

function seed(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

/** What a kind of pet does how often, by weight. */
const WEIGHTS: Record<Pet["species"], [Activity, number][]> = {
  cat: [["sleep", 0.28], ["sit", 0.08], ["wash", 0.08], ["stroll", 0.15], ["zoomies", 0.06], ["play", 0.13], ["hunt", 0.14], ["scratch", 0.08]],
  tiger: [["sleep", 0.38], ["sit", 0.1], ["wash", 0.1], ["stroll", 0.2], ["zoomies", 0.02], ["play", 0.08], ["hunt", 0.12]],
  dog: [["sleep", 0.2], ["sit", 0.08], ["stroll", 0.27], ["zoomies", 0.1], ["fetch", 0.27], ["dig", 0.08]],
  rabbit: [["sleep", 0.25], ["sit", 0.12], ["wash", 0.1], ["stroll", 0.18], ["zoomies", 0.1], ["eat", 0.25]],
  hamster: [["sleep", 0.4], ["play", 0.35], ["eat", 0.25]],
};

export class PetLife {
  readonly pet: Pet;
  private readonly scene: Scene;
  private readonly seed: number;
  private readonly kind: Kind;
  private readonly grid: Grid;
  private readonly rest: Spot[] = [];
  private readonly floor: Spot[] = [];
  private readonly windows: Spot[] = [];
  private readonly garden: Spot[] = [];
  private readonly trees: Spot[] = [];
  private readonly plans = new Map<number, Plan>();
  // A hamster's cage: one floor spot by a wall, the same on every screen.
  private readonly cage?: Point;

  constructor(scene: Scene, pet: Pet) {
    this.scene = scene;
    this.pet = pet;
    this.seed = seed(pet.id) % 100000;
    const species = pet.species;
    this.kind = species === "cat" || species === "tiger" ? "feline" : species === "dog" ? "dog" : species === "rabbit" ? "rabbit" : "hamster";
    this.grid = new Grid(scene, (p) => this.walkable(p));
    this.findSpots();
    if (this.kind === "hamster") {
      const byWall = this.floor.filter((spot) => !this.grid.isOpen([spot.at[0], spot.at[1] - 0.4]) || !this.grid.isOpen([spot.at[0] - 0.4, spot.at[1]]));
      const choice = byWall.length ? byWall : this.floor;
      this.cage = choice.length ? choice[Math.floor(hash(this.seed, 1, 2) * choice.length)].at : undefined;
    }
  }

  private walkable(p: Point): boolean {
    const s = this.scene;
    const inBox = (b: [number, number, number, number], pad = 0) => p[0] > b[0] - pad && p[0] < b[2] + pad && p[1] > b[1] - pad && p[1] < b[3] + pad;
    if (s.furniture.some((f) => !CLIMB.has(f.kind) && inBox(f.box) && pointInPolygon(p, f.points))) return false;
    // A tree stops a pet only at its trunk; other garden objects over all of them.
    if (s.garden.some((g) => g.item.type === "tree" && g.item.center && Math.hypot(p[0] - g.item.center[0], p[1] - g.item.center[1]) < 0.25)) return false;
    if (s.garden.some((g) => !LOW_GARDEN.has(g.item.type) && g.item.type !== "shelter" && g.item.type !== "tree" && inBox(g.box))) return false;
    if (s.roomAt(p, false)) return true;
    if (s.pieces.some((piece) => piece.kind !== "solid" && inBox(piece.box, 0.04))) return true;
    return s.garden.some((g) => LOW_GARDEN.has(g.item.type) && inBox(g.box) && pointInPolygon(p, g.points));
  }

  private findSpots(): void {
    const s = this.scene;
    // A dog and a rabbit lie on the floor in front of a sofa or a bed; a cat and a tiger on it.
    const onFloor = this.kind === "dog" || this.kind === "rabbit";
    for (const f of s.furniture) {
      if (!CLIMB.has(f.kind) || (f.room && !f.room.indoor && f.kind !== "garden_sofa")) continue;
      const [x0, y0, x1, y1] = f.box;
      const wide = x1 - x0 >= y1 - y0;
      const length = wide ? x1 - x0 : y1 - y0;
      if (f.kind === "cat_tree") {
        // Claws are sharpened standing on the floor beside the post.
        const side: Point = [x0 - 0.25, (y0 + y1) / 2];
        if (this.grid.isOpen(side)) this.trees.push({ at: side, kind: "tree" });
      }
      for (let d = 0.35; d < length - 0.2; d += 0.6) {
        const at: Point = wide ? [x0 + d, (y0 + y1) / 2] : [(x0 + x1) / 2, y0 + d];
        if (!pointInPolygon(at, f.points)) continue;
        if (onFloor && !LOW_BEDS.has(f.kind)) {
          const front: Point = wide ? [at[0], y1 + 0.35] : [x1 + 0.35, at[1]];
          if (this.grid.isOpen(front)) this.rest.push({ at: front, kind: "rest" });
        } else this.rest.push({ at, on: f, kind: "rest" });
      }
    }
    for (let j = 0; j < this.grid.rows; j++)
      for (let i = 0; i < this.grid.cols; i++) {
        if (!this.grid.open[j * this.grid.cols + i] || hash(i, j, this.seed) > 0.06) continue;
        const at = this.grid.centre(i, j);
        const room = s.roomAt(at, false);
        if (s.furniture.some((f) => pointInPolygon(at, f.points))) continue;
        if (room && room.indoor && room.kind !== "stairs") this.floor.push({ at, kind: "floor" });
        else if (!room || !room.indoor) this.garden.push({ at, kind: "garden" });
      }
    for (const w of s.windows) {
      if (!w.room) continue;
      const at: Point = [w.centre[0] - w.out[0] * (w.t / 2 + 0.35), w.centre[1] - w.out[1] * (w.t / 2 + 0.35)];
      if (this.grid.isOpen(at)) this.windows.push({ at, kind: "window" });
    }
  }

  /** What the pet does in a slot, drawn from its id and the number of the slot. */
  private plan(slot: number, depth = 0): Plan {
    const known = this.plans.get(slot);
    if (known) return known;
    const r = (n: number) => hash(this.seed, slot, n);
    const dog = this.kind === "dog";
    let plan: Plan | undefined;
    if (depth < 12) {
      const before = this.plan(slot - 1, depth + 1);
      // Rule 6: sleep may go on into the next slot, a cat's more often than a dog's.
      if (before.activity === "sleep" && r(1) < (dog ? 0.3 : 0.45)) plan = { spot: before.spot, activity: "sleep", via: [] };
    }
    if (!plan) {
      const hour = new Date(slot * SLOT * 1000).getHours();
      const day = hour >= 8 && hour < 20;
      const pick = (spots: Spot[], n: number) => spots[Math.floor(r(n) * spots.length)];
      const anywhere = this.floor.length ? this.floor : this.rest;
      const outside = day && this.garden.length ? [...anywhere, ...this.garden] : anywhere;
      const weights = WEIGHTS[this.pet.species].filter(([a]) => (a !== "scratch" || this.trees.length) && (a !== "dig" || (day && this.garden.length)));
      let roll = r(2) * weights.reduce((sum, [, w]) => sum + w, 0);
      const activity = weights.find(([, w]) => (roll -= w) < 0)?.[0] ?? "sit";
      const fallback = { at: this.grid.centre(Math.floor(this.grid.cols / 2), Math.floor(this.grid.rows / 2)), kind: "floor" as const };
      if (this.kind === "hamster") plan = { spot: fallback, activity, via: [] };
      else if (!anywhere.length) plan = { spot: fallback, activity: "sit", via: [] };
      else if (activity === "sleep") plan = { spot: pick(this.rest.length ? this.rest : anywhere, 3), activity, via: [] };
      else if (activity === "sit") plan = { spot: pick(this.windows.length ? this.windows : anywhere, 4), activity, via: [] };
      else if (activity === "wash") plan = { spot: pick(anywhere, 5), activity, via: [] };
      else if (activity === "stroll") plan = { spot: pick(outside, 6), activity, via: [pick(outside, 7), pick(outside, 8), pick(outside, 9)] };
      else if (activity === "zoomies") plan = { spot: pick(anywhere, 10), activity, via: [pick(anywhere, 11), pick(anywhere, 12)] };
      else if (activity === "play") plan = { spot: pick(anywhere, 13), activity, via: [] };
      else if (activity === "scratch") plan = { spot: pick(this.trees, 19), activity, via: [] };
      else if (activity === "dig") plan = { spot: pick(this.garden, 21), activity, via: [] };
      else if (activity === "eat") plan = { spot: pick(day && this.garden.length && r(22) < 0.6 ? this.garden : anywhere, 23), activity, via: [] };
      else if (activity === "hunt") {
        // The prey: a fly by a window inside, a butterfly in the garden by day. The cat creeps up from a metre away.
        const garden = day && this.garden.length && r(14) < 0.6;
        const near = pick(garden ? this.garden : this.windows.length ? this.windows : anywhere, 15);
        const approach = this.reachable(near.at, [1.2, 0.9], r(16));
        plan = approach
          ? { spot: { at: near.at, kind: near.kind }, activity, via: [], approach, prey: garden ? "butterfly" : "fly" }
          : { spot: near, activity: "wash", via: [] };
      } else {
        const spot = pick(outside, 17);
        const ball = this.reachable(spot.at, [2.6, 2, 1.4], r(18));
        plan = { spot, activity: ball ? "fetch" : "play", via: [], ball };
      }
    }
    this.plans.set(slot, plan);
    if (this.plans.size > 64) this.plans.delete(this.plans.keys().next().value!);
    return plan;
  }

  /** A point at one of the distances from a spot, in a free straight line from it; the first direction tried is turn of a full circle. */
  private reachable(from: Point, distances: number[], turn: number): Point | undefined {
    for (const distance of distances)
      for (let k = 0; k < 8; k++) {
        const angle = (turn + k / 8) * Math.PI * 2;
        const p: Point = [from[0] + Math.cos(angle) * distance, from[1] + Math.sin(angle) * distance];
        if (this.grid.clear(from, p)) return p;
      }
    return undefined;
  }

  /** Where the pet is at a time in seconds, and what it does. */
  placeAt(time: number): PetPlace {
    const slot = Math.floor(time / SLOT);
    const plan = this.plan(slot);
    const before = this.plan(slot - 1);
    if (this.kind === "hamster") return this.inCage(plan, time - slot * SLOT);
    const dog = this.kind === "dog";
    const rabbit = this.kind === "rabbit";
    const facing = hash(this.seed, slot, 20) < 0.5 ? "left" : "right";
    let elapsed = time - slot * SLOT;
    // Rule 5: waking up, a stretch and a yawn where it slept before it goes.
    if (before.activity === "sleep" && plan.activity !== "sleep") {
      if (elapsed < WAKE) {
        const at = before.spot.at;
        const state: PetState = rabbit ? "wash" : elapsed < WAKE / 2 ? "stretch" : "yawn";
        return { x: at[0], y: at[1], state, facing, walked: 0, hop: 0, on: before.spot.on };
      }
      elapsed -= WAKE;
    }
    const stops = [before.spot.at, ...plan.via.map((v) => v.at), plan.approach ?? plan.spot.at];
    const route: Point[] = [];
    for (let i = 1; i < stops.length; i++) {
      const leg = this.grid.path(stops[i - 1], stops[i]);
      route.push(...(route.length ? leg.slice(1) : leg));
    }
    const running = plan.activity === "zoomies";
    const big = this.pet.species === "tiger";
    const speed = running ? (big ? 2 : 2.4) : plan.activity === "stroll" ? (dog ? 0.9 : rabbit ? 0.6 : big ? 0.45 : 0.5) : dog ? 1.1 : rabbit ? 0.8 : 0.7;
    let left = elapsed * speed;
    let walked = 0;
    for (let i = 1; i < route.length; i++) {
      const a = route[i - 1];
      const b = route[i];
      const d = Math.hypot(b[0] - a[0], b[1] - a[1]);
      if (left <= d) {
        const k = d > 0 ? left / d : 0;
        const done = walked + left;
        const way = b[0] < a[0] ? "left" : "right";
        // A rabbit hops; a dog on a stroll keeps its nose down now and then.
        if (rabbit) {
          const hop = Math.abs(Math.sin((done * Math.PI) / (running ? 0.5 : 0.32)));
          return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, state: "hop", facing: way, walked: done, hop: hop * (running ? 0.14 : 0.07) };
        }
        const sniffing = dog && plan.activity === "stroll" && Math.floor(done / 1.3) % 3 === 1;
        return { x: a[0] + (b[0] - a[0]) * k, y: a[1] + (b[1] - a[1]) * k, state: running ? "run" : sniffing ? "sniff" : "walk", facing: way, walked: done, hop: 0 };
      }
      left -= d;
      walked += d;
    }
    const dwell = left / speed;
    const at = plan.spot.at;
    const on = plan.spot.on;
    switch (plan.activity) {
      case "play":
        return dog ? this.bow(at, dwell, facing) : rabbit ? this.binky(at, dwell, facing) : this.batYarn(at, dwell, on);
      case "hunt":
        return this.hunt(plan, dwell);
      case "fetch":
        return plan.ball ? this.fetch(at, plan.ball, dwell) : this.bow(at, dwell, facing);
      case "scratch":
        return { x: at[0], y: at[1], state: dwell < 7 ? "scratch" : "sit", facing: "right", walked: 0, hop: 0 };
      case "dig":
        return { x: at[0], y: at[1], state: dwell % 9 < 6 ? "dig" : "sit", facing, walked: 0, hop: 0 };
      case "eat":
        return { x: at[0], y: at[1], state: "eat", facing, walked: 0, hop: 0, toy: plan.spot.kind === "garden" ? undefined : { kind: "carrot", at: [at[0] + (facing === "right" ? 0.22 : -0.22), at[1] + 0.02], height: 0 } };
      case "zoomies":
        // A dog that has run about chases its tail round and round before it sits.
        if (dog && dwell < 3) return { x: at[0], y: at[1], state: "run", facing: Math.floor(dwell * 5) % 2 ? "left" : "right", walked: dwell * 3, hop: 0 };
        if (rabbit && dwell < 4) return this.binky(at, dwell, facing);
        return { x: at[0], y: at[1], state: dwell < 6 || dog ? "sit" : "wash", facing, walked: 0, hop: 0 };
      case "stroll":
        return { x: at[0], y: at[1], state: dwell < 6 || dog ? "sit" : "wash", facing, walked: 0, hop: 0, on };
      case "sleep": {
        // Rule 1: a cat kneads a soft bed before it settles, unless it slept there already.
        const fresh = before.activity !== "sleep" || before.spot !== plan.spot;
        const knead = this.kind === "feline" && on && fresh && dwell < KNEAD;
        return { x: at[0], y: at[1], state: knead ? "knead" : "sleep", facing, walked: 0, hop: 0, on };
      }
      default:
        return { x: at[0], y: at[1], state: plan.activity as PetState, facing, walked: 0, hop: 0, on };
    }
  }

  /** Rule 4: a hamster in its cage, running in the wheel, eating at its bowl or asleep in its house. */
  private inCage(plan: Plan, elapsed: number): PetPlace {
    const at = this.cage ?? plan.spot.at;
    const state: PetState = plan.activity === "play" ? (elapsed % 14 < 10 ? "run" : "sit") : plan.activity === "eat" ? "eat" : "sleep";
    return { x: at[0], y: at[1], state, facing: "right", walked: elapsed * 4, hop: 0, cage: true };
  }

  /** Rule 7: rolling on its back where it was touched, then playing there, on its furniture if it lies on one. */
  playHere(at: Point, since: number, on?: Furniture): PetPlace {
    if (this.kind === "hamster") return { ...this.inCage({ spot: { at, kind: "floor" }, activity: "eat", via: [] }, since), x: at[0], y: at[1] };
    if (since < ROLL && this.kind !== "rabbit") return { x: at[0], y: at[1], state: "roll", facing: "right", walked: 0, hop: 0, on };
    const playing = since - ROLL;
    if (this.kind === "dog") return { ...this.bow(at, playing, "right"), on };
    if (this.kind === "rabbit") return { ...this.binky(at, since, "right"), on };
    return this.batYarn(at, playing, on);
  }

  /**
   * A cat after a ball of yarn rolling round it (a tiger after a big ball): it crouches, pounces and bats it on. On a
   * piece of furniture the ball stays on its top.
   */
  private batYarn(at: Point, dwell: number, on?: Furniture): PetPlace {
    const angle = dwell * 1.6 + (this.seed % 7);
    const reach = (on ? 0.22 : 0.3) + (on ? 0.05 : 0.12) * Math.sin(dwell * 0.9);
    let toy: Point = [at[0] + Math.cos(angle) * reach, at[1] + Math.sin(angle) * reach * 0.7];
    if (on) toy = [Math.min(Math.max(toy[0], on.box[0] + 0.08), on.box[2] - 0.08), Math.min(Math.max(toy[1], on.box[1] + 0.08), on.box[3] - 0.08)];
    const kind = this.pet.species === "tiger" ? "ball" : "yarn";
    const facing = toy[0] < at[0] ? "left" : "right";
    const phase = dwell % 3.2;
    if (phase < 2.2) return { x: at[0], y: at[1], state: phase < 1.4 ? "crouch" : "play", facing, walked: 0, hop: 0, on, toy: { kind, at: toy, height: 0 } };
    const k = Math.min(1, (phase - 2.2) / 0.5);
    const x = at[0] + (toy[0] - at[0]) * 0.6 * Math.sin(k * Math.PI);
    const y = at[1] + (toy[1] - at[1]) * 0.6 * Math.sin(k * Math.PI);
    return { x, y, state: k < 1 ? "pounce" : "play", facing, walked: 0, hop: k < 1 ? 0.15 * Math.sin(k * Math.PI) : 0, on, toy: { kind, at: toy, height: 0 } };
  }

  /** A dog asking to play: down on its front legs, then a jump, again and again. */
  private bow(at: Point, dwell: number, facing: "left" | "right"): PetPlace {
    const phase = dwell % 2;
    return { x: at[0], y: at[1], state: phase < 1.3 ? "play" : "sit", facing, walked: 0, hop: phase >= 1.3 ? 0.12 * Math.sin(((phase - 1.3) / 0.7) * Math.PI) : 0 };
  }

  /** A rabbit jumping for joy: up in the air with a twist, turning round, again and again. */
  private binky(at: Point, dwell: number, facing: "left" | "right"): PetPlace {
    const phase = dwell % 1.4;
    const up = phase < 0.6 ? Math.sin((phase / 0.6) * Math.PI) : 0;
    const turned = Math.floor(dwell / 1.4) % 2 ? (facing === "left" ? "right" : "left") : facing;
    return { x: at[0], y: at[1], state: up > 0 ? "hop" : "sit", facing: turned, walked: up > 0.2 ? 0.16 : 0, hop: up * 0.25 };
  }

  /**
   * A cat hunting: it notices the prey, creeps up on it low, wiggles, pounces, and the prey gets away. It
   * ends where the prey was, the spot of the slot.
   */
  private hunt(plan: Plan, dwell: number): PetPlace {
    const target = plan.spot.at;
    const start = plan.approach ?? target;
    const facing = target[0] < start[0] ? "left" : "right";
    const flutter: Point = [Math.sin(dwell * 5.3) * 0.12, Math.cos(dwell * 4.1) * 0.08];
    const kind = plan.prey ?? "fly";
    const preyAt: Point = [target[0] + flutter[0], target[1] + flutter[1]];
    const prey = { kind, at: preyAt, height: 0.35 + 0.1 * Math.sin(dwell * 3) };
    const toward = (k: number): Point => [start[0] + (target[0] - start[0]) * k, start[1] + (target[1] - start[1]) * k];
    if (dwell < 1.5) return { x: start[0], y: start[1], state: "sit", facing, walked: 0, hop: 0, toy: prey };
    if (dwell < 8) {
      const k = ((dwell - 1.5) / 6.5) * 0.7;
      const [x, y] = toward(k);
      return { x, y, state: "stalk", facing, walked: Math.hypot(target[0] - start[0], target[1] - start[1]) * k, hop: 0, toy: prey };
    }
    if (dwell < 9.5) {
      const [x, y] = toward(0.7);
      return { x, y, state: "crouch", facing, walked: 0, hop: 0, toy: prey };
    }
    if (dwell < 9.9) {
      const k = (dwell - 9.5) / 0.4;
      const [x, y] = toward(0.7 + 0.3 * k);
      return { x, y, state: "pounce", facing, walked: 0, hop: 0.22 * Math.sin(k * Math.PI), toy: prey };
    }
    // The prey gets away, up and off, and fades.
    const away = dwell - 9.9;
    const escape = away < 1.6 ? { kind, at: [preyAt[0] + away * 0.8, preyAt[1] - away * 0.3] as Point, height: 0.4 + away * 0.6, fade: 1 - away / 1.6 } : undefined;
    return { x: target[0], y: target[1], state: away < 4 ? "sit" : "wash", facing, walked: 0, hop: 0, toy: escape };
  }

  /** A dog fetching: the ball flies off, the dog runs after it, brings it back and waits for the next throw. */
  private fetch(at: Point, ball: Point, dwell: number): PetPlace {
    const facing = ball[0] < at[0] ? "left" : "right";
    const back = facing === "left" ? "right" : "left";
    const length = Math.hypot(ball[0] - at[0], ball[1] - at[1]);
    const run = length / 3;
    const phase = dwell % 7;
    const along = (k: number): Point => [at[0] + (ball[0] - at[0]) * k, at[1] + (ball[1] - at[1]) * k];
    if (phase < 0.9) {
      const k = phase / 0.9;
      return { x: at[0], y: at[1], state: "play", facing, walked: 0, hop: 0, toy: { kind: "ball", at: along(k), height: 0.6 * Math.sin(k * Math.PI) } };
    }
    if (phase < 0.9 + run) {
      const k = (phase - 0.9) / run;
      const [x, y] = along(k);
      return { x, y, state: "run", facing, walked: length * k, hop: 0, toy: { kind: "ball", at: ball, height: 0 } };
    }
    if (phase < 0.9 + 2 * run) {
      const k = 1 - (phase - 0.9 - run) / run;
      const [x, y] = along(k);
      return { x, y, state: "carry", facing: back, walked: length * (1 - k), hop: 0, toy: { kind: "ball", at: [x, y], height: 0.22 } };
    }
    return { x: at[0], y: at[1], state: "sit", facing, walked: 0, hop: 0, toy: { kind: "ball", at: [at[0] + (facing === "right" ? 0.25 : -0.25), at[1] + 0.05], height: 0 } };
  }
}
