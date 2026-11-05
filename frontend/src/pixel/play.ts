// The walking game of the pixel look: a character moved with a joystick round the drawn home, like a person the
// radars see, with a marker over its head.
//
// 1. It stands where a person can: on the floor of a room, a door, the terrace, the lawn or the paving; walls,
//    furniture other than a rug, and garden buildings stop it. Doors are always open to it, whatever their sensors.
// 2. A push of the stick walks it at up to SPEED metres a second; blocked straight on, it turns a little either way
//    to slip round corners and slide along walls.
// 3. It faces the way it mostly goes and its steps follow the metres walked.
// 4. Stars lie about the level where the game starts, each STAR_SPACING metres or more from the others.
// 5. It may sit on a seat, lie in a bed and jump on the trampoline; a pet it strokes follows it for a while.
// Nothing measures it and nothing in the home moves for it, except what the action button switches.
import { type Point, pointInPolygon } from "../model";
import { rect } from "./art";
import { Grid } from "./grid";
import type { Furniture, Scene } from "./scene";
import type { Facing, Outfit } from "./sprites";

/** Metres a second at a full push of the stick. */
export const SPEED = 2.2;
// Furniture a player walks over.
const LOW = new Set(["rug", "pet_bed"]);
const LOW_GARDEN = new Set(["lawn", "paving", "terrace", "bed", "vegetable", "manhole", "trampoline"]);
/** Stars of a round, how near the character picks one up, and how far apart they lie, in metres. */
export const STAR_COUNT = 10;
export const STAR_REACH = 0.45;
const STAR_SPACING = 1.4;
/** Seconds a stroked pet follows the character. */
export const FRIEND_SECONDS = 60;

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
 * Rule 4: stars on the places the character may stand within the bounds, each far enough from the others; fewer
 * when the level has no room for all of them.
 */
export function placeStars(bounds: { x: number; y: number; w: number; h: number }, canStand: (p: Point) => boolean, away: Point): Point[] {
  const stars: Point[] = [];
  for (let k = 0; k < 600 && stars.length < STAR_COUNT; k++) {
    const p: Point = [bounds.x + Math.random() * bounds.w, bounds.y + Math.random() * bounds.h];
    if (!canStand(p)) continue;
    if (Math.hypot(p[0] - away[0], p[1] - away[1]) < STAR_SPACING) continue;
    if (stars.some((s) => Math.hypot(s[0] - p[0], s[1] - p[1]) < STAR_SPACING)) continue;
    stars.push(p);
  }
  return stars;
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

/** Rule 1: the cells a player may stand on, for a scene. */
export function playGrid(scene: Scene): Grid {
  const free = (p: Point): boolean => {
    const inBox = (b: [number, number, number, number], pad = 0) => p[0] > b[0] - pad && p[0] < b[2] + pad && p[1] > b[1] - pad && p[1] < b[3] + pad;
    if (scene.furniture.some((f) => !LOW.has(f.kind) && inBox(f.box) && pointInPolygon(p, f.points))) return false;
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
