// The walking game of the pixel look: a character moved with a joystick round the drawn home, like a person the
// radars see, with a marker over its head.
//
// 1. It stands where a person can: on the floor of a room, a door, the terrace, the lawn or the paving; walls,
//    furniture other than a rug, and garden buildings stop it. Doors are always open to it, whatever their sensors.
// 2. A push of the stick walks it at up to SPEED metres a second; blocked straight on, it turns a little either way
//    to slip round corners and slide along walls.
// 3. It faces the way it mostly goes and its steps follow the metres walked.
// Nothing measures it and nothing in the home moves for it, except what the action button switches.
import { type Point, pointInPolygon } from "../model";
import { rect } from "./art";
import { Grid } from "./grid";
import type { Scene } from "./scene";
import type { Facing } from "./sprites";

/** Metres a second at a full push of the stick. */
export const SPEED = 2.2;
// Furniture a player walks over.
const LOW = new Set(["rug", "pet_bed"]);
const LOW_GARDEN = new Set(["lawn", "paving", "terrace", "bed", "vegetable", "manhole"]);

export interface Player {
  x: number;
  y: number;
  facing: Facing;
  moving: boolean;
  /** Metres walked, for the steps. */
  walked: number;
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
