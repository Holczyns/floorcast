// The walking game of the pixel look: a character moved with a joystick round the drawn home, like a person the
// radars see, with a marker over its head.
//
// 1. It stands where a person can: on the floor of a room, a door, the terrace, the lawn or the paving; walls,
//    furniture other than a rug, and garden buildings stop it. Doors are always open to it, whatever their sensors.
//    Its body keeps BODY metres from furniture, so the drawn figure at most touches it and never hides in it.
// 2. A push of the stick walks it at up to SPEED metres a second; blocked straight on, it turns a little either way
//    to slip round corners and slide along walls.
// 3. It faces the way it mostly goes and its steps follow the metres walked.
// 4. Stars lie about every level the card shows, each STAR_SPACING metres or more from the others and from the
//    character; new ones keep coming, so a level always has between STAR_MIN and STAR_MAX of them.
// 5. It may sit on a seat, lie in a bed and jump on the trampoline; a pet it strokes follows it for a while.
// 6. Now and then a pet on its level asks for its thing in a bubble (WISHES): the thing lies somewhere on the level,
//    the character picks it up by walking onto it and gives it by coming near the pet, which then plays happily.
// 7. A person the radars see waves with a heart over the head when the character comes near, once until it leaves.
// Nothing measures it and nothing in the home moves for it, except what the action button switches.
import { type Point, pointInPolygon } from "../model";
import { rect } from "./art";
import { bone, toy } from "./sprites";
import { Grid } from "./grid";
import type { Furniture, Scene } from "./scene";
import type { Facing, Outfit } from "./sprites";
import type { PetSpecies } from "../model";

/** Metres a second at a full push of the stick. */
export const SPEED = 2.2;
// Furniture a player walks over.
const LOW = new Set(["rug", "pet_bed"]);
const LOW_GARDEN = new Set(["lawn", "paving", "terrace", "bed", "vegetable", "manhole", "trampoline"]);
/**
 * Stars on a level when it is first shown, the fewest and most it has, how near the character picks one up and how
 * far apart they lie (metres), and the seconds between new stars.
 */
export const STAR_START = 5;
export const STAR_MIN = 3;
export const STAR_MAX = 8;
export const STAR_REACH = 0.45;
const STAR_SPACING = 1.4;
export const STAR_EVERY: [number, number] = [3, 8];
/** Seconds a stroked pet follows the character. */
export const FRIEND_SECONDS = 60;

/** Rule 6: the thing each pet asks for. */
export type Wish = "yarn" | "ball" | "carrot" | "bone";
export const WISHES: Record<PetSpecies, Wish> = { cat: "yarn", dog: "ball", rabbit: "carrot", tiger: "bone" };
/**
 * Rule 6: seconds before the first task and between tasks, how near the character picks the thing up and gives it,
 * and how many places are tried for the thing, the one farthest from the pet kept.
 */
export const TASK_FIRST = 8;
export const TASK_EVERY = 15;
export const TASK_PICK = 0.5;
export const TASK_GIVE = 1.0;
export const TASK_TRIES = 12;
/** A task of the game: the pet asking, its level and thing, where the thing lies, or that the character carries it. */
export interface Task {
  pet: string;
  level: string;
  wish: Wish;
  at: Point;
  carried: boolean;
}

/** Rule 7: how near the character comes for a person to wave, how far it goes for them to wave again, seconds. */
export const GREET_NEAR = 0.9;
export const GREET_AWAY = 1.5;
export const GREET_SECONDS = 3;

/** The characters to choose from: girls and boys in the colours of the radar people and more. */
export const PLAYER_OUTFITS: Outfit[] = [
  { shirt: "#e8503a", shade: "#b83a2a", trousers: "#2d3a55", hair: "#a0522d", skin: "#f3d0b0", long: true },
  { shirt: "#9a5ad8", shade: "#7440a8", trousers: "#3a3a48", hair: "#e8c070", skin: "#f6d6b8", long: true },
  { shirt: "#f2b134", shade: "#c98f22", trousers: "#3a5a3f", hair: "#1e1a18", skin: "#e0b48c", long: true },
  { shirt: "#3f6fd1", shade: "#2f55a8", trousers: "#2d3a55", hair: "#3b2a20", skin: "#f1c7a0", long: false },
  { shirt: "#4c9a5b", shade: "#3a7a47", trousers: "#3a3a40", hair: "#e8c070", skin: "#f6d6b8", long: false },
  { shirt: "#f08a3c", shade: "#c46a28", trousers: "#4a3a5a", hair: "#1e1a18", skin: "#c8946a", long: false },
];

export interface Player {
  x: number;
  y: number;
  facing: Facing;
  moving: boolean;
  /** Metres walked, for the steps. */
  walked: number;
  outfit: Outfit;
  /** Rule 5: the seat or bed it sits or lies on, and its spot there. */
  seat?: { furniture: Furniture; at: Point };
  /** Rule 5: the pet following it, until when (milliseconds). */
  friend?: string;
  friendUntil?: number;
}

/**
 * Rule 4: a new star on a random place the character may stand within the bounds, far enough from the stars there
 * and from the points to keep away from; none when no such place turns up.
 */
export function placeStar(
  bounds: { x: number; y: number; w: number; h: number },
  canStand: (p: Point) => boolean,
  stars: Point[],
  away: Point[],
): Point | undefined {
  for (let k = 0; k < 120; k++) {
    const p: Point = [bounds.x + Math.random() * bounds.w, bounds.y + Math.random() * bounds.h];
    if (!canStand(p)) continue;
    if ([...stars, ...away].some((s) => Math.hypot(s[0] - p[0], s[1] - p[1]) < STAR_SPACING)) continue;
    return p;
  }
  return undefined;
}

/** A gold star floating over x, y, bobbing and twinkling. */
export function star(c: CanvasRenderingContext2D, x: number, y: number, time: number, seed: number): void {
  const bob = Math.round(Math.sin(time * 3 + seed) * 2);
  const top = y - 10 + bob;
  rect(c, x - 3, y, 7, 2, "rgba(0,0,0,.18)");
  const shape: [number, number, number][] = [
    [0, 3, 1],
    [1, 2, 3],
    [2, 0, 7],
    [3, 1, 5],
    [4, 1, 5],
    [5, 0, 3],
    [5, 4, 3],
  ];
  for (const [row, from, width] of shape) rect(c, x - 4 + from, top + row - 1, width + 2, 1, "#1e1a24");
  for (const [row, from, width] of shape) rect(c, x - 3 + from, top + row, width, 1, "#ffd65a");
  rect(c, x, top + 2, 1, 1, "#fff4b8");
  if (Math.floor(time * 2 + seed) % 4 === 0) {
    rect(c, x + 4, top - 2, 1, 1, "#ffffff");
    rect(c, x - 5, top + 5, 1, 1, "#ffffff");
  }
}

/** Rule 1: how far a body keeps from furniture, in metres: a little less than half a drawn person, which may just
 * touch it. */
export const BODY = 0.1;

/** Distance from a point to a segment, in metres. */
function segmentDistance(p: Point, a: Point, b: Point): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const length = dx * dx + dy * dy;
  const t = length ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / length)) : 0;
  return Math.hypot(p[0] - (a[0] + t * dx), p[1] - (a[1] + t * dy));
}

/** Whether a piece of furniture, round or of corners, comes within reach metres of a point. */
function furnitureCovers(f: Furniture, p: Point, reach: number): boolean {
  const [x0, y0, x1, y1] = f.box;
  if (p[0] < x0 - reach || p[0] > x1 + reach || p[1] < y0 - reach || p[1] > y1 + reach) return false;
  const { center, diameter } = f.item;
  if (center && diameter) return Math.hypot(p[0] - center[0], p[1] - center[1]) < diameter / 2 + reach;
  if (pointInPolygon(p, f.points)) return true;
  return reach > 0 && f.points.some((a, k) => segmentDistance(p, a, f.points[(k + 1) % f.points.length]) < reach);
}

/** Rule 1: whether furniture that stops a person (all but rugs and pet beds) comes within reach metres of a point. */
export function furnitureNear(scene: Scene, p: Point, reach: number): boolean {
  return scene.furniture.some((f) => !LOW.has(f.kind) && furnitureCovers(f, p, reach));
}

/** Whether a straight walk between two points crosses furniture that stops a person. */
export function furnitureBetween(scene: Scene, a: Point, b: Point): boolean {
  const steps = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.1);
  for (let k = 1; k < steps; k++) if (furnitureNear(scene, [a[0] + ((b[0] - a[0]) * k) / steps, a[1] + ((b[1] - a[1]) * k) / steps], 0)) return true;
  return false;
}

/** Rule 1: the cells a player may stand on, for a scene. */
export function playGrid(scene: Scene): Grid {
  const free = (p: Point): boolean => {
    const inBox = (b: [number, number, number, number], pad = 0) => p[0] > b[0] - pad && p[0] < b[2] + pad && p[1] > b[1] - pad && p[1] < b[3] + pad;
    if (furnitureNear(scene, p, 0)) return false;
    if (scene.garden.some((g) => g.item.type === "tree" && g.item.center && Math.hypot(p[0] - g.item.center[0], p[1] - g.item.center[1]) < 0.3)) return false;
    if (scene.garden.some((g) => !LOW_GARDEN.has(g.item.type) && g.item.type !== "shelter" && g.item.type !== "tree" && inBox(g.box))) return false;
    if (scene.roomAt(p, false)) return true;
    if (scene.pieces.some((piece) => piece.kind !== "solid" && inBox(piece.box, 0.04))) return true;
    return scene.garden.some((g) => LOW_GARDEN.has(g.item.type) && inBox(g.box) && pointInPolygon(p, g.points));
  };
  return new Grid(scene, free);
}

/**
 * Rule 2: the player moved by the push of the stick (each part -1 to 1, y down) for dt seconds.
 */
export function stepPlayer(player: Player, push: [number, number], dt: number, canStand: (p: Point) => boolean): void {
  const length = Math.min(1, Math.hypot(push[0], push[1]));
  if (length < 0.12) {
    player.moving = false;
    return;
  }
  const step = length * SPEED * dt;
  const angle = Math.atan2(push[1], push[0]);
  // Straight on first, then turned a little and more either way, so it slips round corners and door frames; a
  // turned step is shorter, so it never goes faster round an obstacle than straight.
  const tries: Point[] = [0, 0.4, -0.4, 0.8, -0.8, 1.3, -1.3].map((turn) => {
    const reach = step * Math.cos(turn) ** 0.5;
    return [player.x + Math.cos(angle + turn) * reach, player.y + Math.sin(angle + turn) * reach];
  });
  const next = tries.find((p) => canStand(p));
  // Rule 3: it faces the way it mostly pushes, moved or not.
  player.facing = Math.abs(push[0]) > Math.abs(push[1]) ? (push[0] < 0 ? "left" : "right") : push[1] < 0 ? "up" : "down";
  if (!next) {
    player.moving = false;
    return;
  }
  player.walked += Math.hypot(next[0] - player.x, next[1] - player.y);
  player.x = next[0];
  player.y = next[1];
  player.moving = true;
}

/** Rule 6: the thing a pet asks for, with its foot at x, y. */
export function wishThing(c: CanvasRenderingContext2D, wish: Wish, x: number, y: number, time: number): void {
  if (wish === "bone") bone(c, x, y);
  else toy(c, wish, x, y, 0, time);
}

/** A white speech bubble with its tail at x, y and what inside draws at its middle. */
export function bubble(c: CanvasRenderingContext2D, x: number, y: number, inside: (cx: number, cy: number) => void): void {
  const top = y - 13;
  rect(c, x - 8, top - 1, 17, 12, "#1e1a24");
  rect(c, x - 9, top, 19, 10, "#1e1a24");
  rect(c, x - 7, top, 15, 10, "#ffffff");
  rect(c, x - 8, top + 1, 17, 8, "#ffffff");
  rect(c, x - 1, top + 10, 3, 1, "#1e1a24");
  rect(c, x, top + 10, 1, 2, "#ffffff");
  rect(c, x, top + 12, 1, 1, "#1e1a24");
  inside(x, top + 5);
}

/** Rule 7: a raised hand waving by the head of a standing person with feet at x, y. */
export function wave(c: CanvasRenderingContext2D, x: number, y: number, time: number, o: Outfit): void {
  const tilt = Math.floor(time * 6) % 2;
  const ax = x + 6 + tilt;
  rect(c, x + 5, y - 20, 2, 3, "#1e1a24");
  rect(c, ax - 1, y - 30, 4, 11, "#1e1a24");
  rect(c, ax, y - 22, 2, 3, o.shirt);
  rect(c, ax, y - 29, 2, 7, o.skin);
}

/** The marker over the player's head: a yellow arrow bobbing down at it, with a dark line round it. */
export function marker(c: CanvasRenderingContext2D, x: number, y: number, time: number): void {
  const bob = Math.round(Math.sin(time * 5) * 2);
  const top = y + bob;
  rect(c, x - 4, top - 1, 9, 4, "#1e1a24");
  rect(c, x - 3, top + 3, 7, 1, "#1e1a24");
  rect(c, x - 2, top + 4, 5, 1, "#1e1a24");
  rect(c, x - 1, top + 5, 3, 1, "#1e1a24");
  rect(c, x - 3, top, 7, 3, "#ffd65a");
  rect(c, x - 2, top + 3, 5, 1, "#ffd65a");
  rect(c, x - 1, top + 4, 3, 1, "#ffd65a");
  rect(c, x, top + 5, 1, 1, "#f8a838");
  rect(c, x - 2, top, 2, 1, "#fff4b8");
}
