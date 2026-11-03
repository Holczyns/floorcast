// Characters and robots of the pixel look, drawn with their feet (or their middle) at x, y.
import { disc, rect } from "./art";

export type Facing = "up" | "down" | "left" | "right";

export interface Outfit {
  shirt: string;
  shade: string;
  trousers: string;
  hair: string;
  skin: string;
  long: boolean;
}

/** Outfits handed to people in turn as the tracking finds them. */
export const OUTFITS: Outfit[] = [
  { shirt: "#3f6fd1", shade: "#2f55a8", trousers: "#2d3a55", hair: "#3b2a20", skin: "#f1c7a0", long: false },
  { shirt: "#d1497a", shade: "#a8375f", trousers: "#4a3a5a", hair: "#a0522d", skin: "#f3d0b0", long: true },
  { shirt: "#f2b134", shade: "#c98f22", trousers: "#3a5a3f", hair: "#e8c070", skin: "#f6d6b8", long: false },
  { shirt: "#4c9a5b", shade: "#3a7a47", trousers: "#3a3a40", hair: "#1e1a18", skin: "#e0b48c", long: true },
];

/** A person standing or walking; step counts frames of the walk, zero standing still. */
export function person(c: CanvasRenderingContext2D, x: number, y: number, facing: Facing, step: number, o: Outfit): void {
  const f = step % 4;
  const bob = f === 1 || f === 3 ? 1 : 0;
  rect(c, x - 5, y - 1, 10, 2, "rgba(0,0,0,.18)");
  if (facing === "left" || facing === "right") {
    const s = f === 1 ? -2 : f === 3 ? 2 : 0;
    rect(c, x - 1 + s, y - 5, 2, 4, o.trousers);
    rect(c, x - 1 - s, y - 5, 2, 4, o.trousers);
  } else {
    const l = f === 1 ? 1 : 0;
    const r = f === 3 ? 1 : 0;
    rect(c, x - 3, y - 5 - l, 2, 4, o.trousers);
    rect(c, x + 1, y - 5 - r, 2, 4, o.trousers);
  }
  const by = y - 11 - bob;
  rect(c, x - 4, by, 8, 6, o.shirt);
  rect(c, x - 4, by + 5, 8, 1, o.shade);
  const swing = f === 1 ? 1 : f === 3 ? -1 : 0;
  if (facing === "left" || facing === "right") {
    rect(c, x - 1 + swing, by + 1, 2, 4, o.shade);
    rect(c, x - 1 + swing, by + 5, 2, 1, o.skin);
  } else {
    rect(c, x - 5, by + 1 + swing, 1, 4, o.shirt);
    rect(c, x + 4, by + 1 - swing, 1, 4, o.shirt);
    rect(c, x - 5, by + 5 + swing, 1, 1, o.skin);
    rect(c, x + 4, by + 5 - swing, 1, 1, o.skin);
  }
  const hy = by - 7;
  rect(c, x - 3, hy + 1, 6, 6, o.skin);
  if (facing === "up") {
    rect(c, x - 3, hy, 6, 6, o.hair);
    if (o.long) rect(c, x - 3, hy + 6, 6, 3, o.hair);
  } else if (facing === "down") {
    rect(c, x - 3, hy, 6, 2, o.hair);
    rect(c, x - 4, hy + 1, 1, o.long ? 7 : 3, o.hair);
    rect(c, x + 3, hy + 1, 1, o.long ? 7 : 3, o.hair);
    rect(c, x - 2, hy + 4, 1, 1, "#2a2a2e");
    rect(c, x + 1, hy + 4, 1, 1, "#2a2a2e");
  } else {
    const s = facing === "left" ? -1 : 1;
    rect(c, x - 3, hy, 6, 2, o.hair);
    rect(c, x - 3 * s - (s > 0 ? 1 : 0), hy + 1, 2, o.long ? 7 : 4, o.hair);
    rect(c, x + 2 * s - (s > 0 ? 1 : 0), hy + 4, 1, 1, "#2a2a2e");
  }
}

/** A person sitting: the upper body over the seat, the legs hidden by it. */
export function sitting(c: CanvasRenderingContext2D, x: number, y: number, facing: Facing, o: Outfit): void {
  const by = y - 8;
  rect(c, x - 4, by, 8, 6, o.shirt);
  rect(c, x - 4, by + 5, 8, 1, o.shade);
  rect(c, x - 5, by + 1, 1, 4, o.shirt);
  rect(c, x + 4, by + 1, 1, 4, o.shirt);
  const hy = by - 7;
  rect(c, x - 3, hy + 1, 6, 6, o.skin);
  if (facing === "up") rect(c, x - 3, hy, 6, 6, o.hair);
  else {
    rect(c, x - 3, hy, 6, 2, o.hair);
    rect(c, x - 4, hy + 1, 1, o.long ? 6 : 3, o.hair);
    rect(c, x + 3, hy + 1, 1, o.long ? 6 : 3, o.hair);
    rect(c, x - 2, hy + 4, 1, 1, "#2a2a2e");
    rect(c, x + 1, hy + 4, 1, 1, "#2a2a2e");
  }
}

/** A person lying in bed: the head on the pillow side, a hump under the blanket. */
export function lying(c: CanvasRenderingContext2D, x: number, y: number, o: Outfit): void {
  rect(c, x - 3, y - 9, 6, 6, o.skin);
  rect(c, x - 3, y - 10, 6, 3, o.hair);
  if (o.long) rect(c, x - 4, y - 9, 1, 5, o.hair);
  rect(c, x - 2, y - 6, 1, 1, "#2a2a2e");
  rect(c, x + 1, y - 6, 1, 1, "#2a2a2e");
  rect(c, x - 5, y - 3, 10, 8, "#5b7fbf");
  rect(c, x - 5, y - 3, 10, 2, "#7d9bd2");
  rect(c, x - 4, y + 1, 8, 3, "#4f72b0");
}

/** A robot vacuum; its light blinks blue while it cleans, green on the dock. */
export function vacuum(c: CanvasRenderingContext2D, x: number, y: number, state: string | undefined, time: number): void {
  rect(c, x - 5, y + 3, 11, 2, "rgba(0,0,0,.25)");
  disc(c, x, y - 2, 5, "#2b2d33");
  disc(c, x, y - 3, 4, "#3d4049");
  rect(c, x - 1, y - 5, 3, 2, "#555964");
  const cleaning = state === "cleaning";
  rect(c, x, y - 4, 1, 1, state === "docked" ? "#5fe07a" : cleaning && Math.floor(time * 3) % 2 ? "#7ad7ff" : "#3a6a80");
  if (cleaning) {
    const a = time * 18;
    rect(c, x - 4 + Math.round(Math.cos(a) * 2), y + 1 + Math.round(Math.sin(a)), 1, 1, "#c9ccd2");
    rect(c, x - 4 - Math.round(Math.cos(a) * 2), y + 1 - Math.round(Math.sin(a)), 1, 1, "#c9ccd2");
  }
}

/** A robot mower seen from above, turned to the nearest of four sides. */
export function mower(c: CanvasRenderingContext2D, x: number, y: number, heading: number | undefined, state: string | undefined): void {
  const side = Math.round((((heading ?? 0) % 360) + 360) % 360 / 90) % 4;
  const across = side % 2 === 1;
  const w = across ? 9 : 14;
  const h = across ? 14 : 9;
  rect(c, x - w / 2, y - h / 2 + 2, w, h, "rgba(0,0,0,.2)");
  rect(c, x - w / 2, y - h / 2, w, h, "#e0e3e6");
  rect(c, x - w / 2 + 2, y - h / 2 + 2, w - 4, h - 4, state === "mowing" ? "#3aa7a0" : "#5f7f7c");
  if (across) {
    rect(c, x - w / 2 - 1, y - 4, 1, 3, "#222");
    rect(c, x + w / 2, y - 4, 1, 3, "#222");
  } else {
    rect(c, x - 4, y - h / 2 - 1, 3, 1, "#222");
    rect(c, x - 4, y + h / 2, 3, 1, "#222");
  }
}

/** A drop of water in the air at height z (pixels), or a splash on the ground. */
export function drop(c: CanvasRenderingContext2D, x: number, y: number, z: number, splash: boolean): void {
  if (splash) {
    rect(c, x - 1, y, 1, 1, "rgba(210,240,255,.8)");
    rect(c, x + 1, y - 1, 1, 1, "rgba(210,240,255,.8)");
  } else rect(c, x, y - z, 1, 2, "rgba(190,232,255,.9)");
}

/** Coats of the pets: main colour, darker, lighter. */
const COATS: Record<string, [string, string, string]> = {
  ginger: ["#e08a3c", "#b5652a", "#f6c28b"],
  grey: ["#8d93a0", "#646a76", "#c3c8d2"],
  black: ["#2e2e35", "#18181c", "#55555f"],
  white: ["#f2f2f2", "#c6c8cf", "#ffffff"],
  tabby: ["#a08060", "#6e5238", "#d2b896"],
  calico: ["#f2f2f2", "#e08a3c", "#2e2e35"],
  brown: ["#8a5a34", "#5e3b20", "#b8875a"],
  golden: ["#d9a75a", "#a8763a", "#f0cf92"],
  spotted: ["#f2f2f2", "#2e2e35", "#ffffff"],
};

export type PetPose = "walk" | "run" | "sleep" | "sit" | "wash";

/** A cat with its feet at x, y; step counts its steps while it walks. */
export function cat(c: CanvasRenderingContext2D, x: number, y: number, pose: PetPose, facing: "left" | "right", step: number, coat: string, time: number): void {
  const [b, d, l] = COATS[coat] ?? COATS.ginger;
  const s = facing === "left" ? -1 : 1;
  const X = (dx: number, w: number) => (s > 0 ? x + dx : x - dx - w);
  if (pose === "sleep") {
    rect(c, x - 6, y - 1, 12, 2, "rgba(0,0,0,.2)");
    rect(c, x - 5, y - 6, 10, 5, b);
    rect(c, x - 4, y - 7, 8, 1, b);
    rect(c, x - 3, y - 6, 5, 1, l);
    rect(c, x - 6, y - 3, 12, 2, d);
    rect(c, X(2, 3), y - 7, 3, 3, b);
    rect(c, X(2, 1), y - 8, 1, 1, d);
    rect(c, X(4, 1), y - 8, 1, 1, d);
    if (coat === "tabby" || coat === "calico") rect(c, x - 2, y - 5, 2, 2, d);
    return;
  }
  rect(c, x - 5, y - 1, 10, 2, "rgba(0,0,0,.2)");
  if (pose === "sit" || pose === "wash") {
    rect(c, x - 3, y - 7, 6, 6, b);
    rect(c, x - 2, y - 6, 4, 3, l);
    const lick = pose === "wash" && Math.floor(time * 3) % 2 === 0;
    const hy = lick ? y - 10 : y - 11;
    rect(c, x - 3, hy, 6, 5, b);
    rect(c, x - 3, hy - 1, 1, 1, b);
    rect(c, x + 2, hy - 1, 1, 1, b);
    rect(c, x - 2, hy + 2, 1, 1, "#2f8a3a");
    rect(c, x + 1, hy + 2, 1, 1, "#2f8a3a");
    if (pose === "wash") rect(c, X(2, 2), hy + 4, 2, 3, l);
    const tail = Math.floor(time * 2) % 2;
    rect(c, X(3, 4), y - 2 - tail, 4, 1, d);
    rect(c, X(6, 1), y - 4 - tail, 1, 2, d);
    if (coat === "tabby" || coat === "calico") rect(c, x - 1, y - 5, 2, 1, d);
    return;
  }
  const f = step % 4;
  const leg = (i: number) => (f + i) % 2;
  rect(c, X(-5, 9), y - 7, 9, 4, b);
  rect(c, X(-4, 6), y - 4, 6, 1, l);
  if (coat === "tabby" || coat === "calico") for (const dx of [-3, -1, 1]) rect(c, X(dx, 1), y - 7, 1, 2, d);
  rect(c, X(-5, 1), y - 3 + leg(0), 1, 3 - leg(0), d);
  rect(c, X(-3, 1), y - 3 + leg(1), 1, 3 - leg(1), b);
  rect(c, X(1, 1), y - 3 + leg(1), 1, 3 - leg(1), d);
  rect(c, X(3, 1), y - 3 + leg(0), 1, 3 - leg(0), b);
  rect(c, X(3, 5), y - 10, 5, 5, b);
  rect(c, X(3, 1), y - 11, 1, 1, b);
  rect(c, X(6, 1), y - 11, 1, 1, b);
  rect(c, X(5, 1), y - 8, 1, 1, "#2f8a3a");
  rect(c, X(7, 1), y - 7, 1, 1, "#e98a9a");
  rect(c, X(-7, 2), y - 8 - (f % 2), 2, 1, d);
  rect(c, X(-8, 1), y - 11 - (f % 2), 1, 3, d);
}

/** A dog with its feet at x, y; wag makes its tail go fast. */
export function dog(c: CanvasRenderingContext2D, x: number, y: number, pose: PetPose, facing: "left" | "right", step: number, coat: string, time: number, wag = false): void {
  const [b, d, l] = COATS[coat] ?? COATS.brown;
  const s = facing === "left" ? -1 : 1;
  const X = (dx: number, w: number) => (s > 0 ? x + dx : x - dx - w);
  const tail = Math.floor(time * (wag ? 14 : 3)) % 2;
  if (pose === "sleep") {
    rect(c, x - 8, y - 1, 16, 2, "rgba(0,0,0,.2)");
    rect(c, x - 7, y - 6, 13, 5, b);
    rect(c, x - 6, y - 7, 10, 1, b);
    rect(c, X(4, 5), y - 5, 5, 4, b);
    rect(c, X(8, 2), y - 4, 2, 2, l);
    rect(c, X(9, 1), y - 4, 1, 1, "#1a1a1a");
    rect(c, X(4, 2), y - 6, 2, 3, d);
    rect(c, X(-8, 3), y - 3, 3, 1, d);
    if (coat === "spotted") rect(c, x - 3, y - 6, 3, 2, d);
    return;
  }
  rect(c, x - 7, y - 1, 14, 2, "rgba(0,0,0,.2)");
  if (pose === "sit" || pose === "wash") {
    rect(c, X(-3, 7), y - 9, 7, 8, b);
    rect(c, X(-1, 4), y - 6, 4, 4, l);
    rect(c, X(1, 2), y - 3, 2, 3, b);
    rect(c, X(1, 6), y - 15, 6, 6, b);
    rect(c, X(6, 3), y - 13, 3, 3, l);
    rect(c, X(8, 1), y - 13, 1, 1, "#1a1a1a");
    rect(c, X(4, 1), y - 13, 1, 1, "#1a1a1a");
    rect(c, X(1, 2), y - 15, 2, 5, d);
    rect(c, X(-5, 2), y - 4 - tail * 2, 2, 1, d);
    rect(c, X(-6, 1), y - 6 - tail * 2, 1, 2, d);
    if (coat === "spotted") rect(c, X(-2, 3), y - 8, 3, 2, d);
    return;
  }
  const f = step % 4;
  const leg = (i: number) => (f + i) % 2;
  rect(c, X(-6, 12), y - 9, 12, 5, b);
  rect(c, X(-5, 9), y - 5, 9, 1, l);
  if (coat === "spotted") {
    rect(c, X(-4, 3), y - 9, 3, 2, d);
    rect(c, X(2, 2), y - 8, 2, 2, d);
  }
  for (const [dx, k] of [[-6, 0], [-4, 1], [3, 1], [5, 0]] as [number, number][]) rect(c, X(dx, 1), y - 4 + leg(k), 1, 4 - leg(k), d);
  rect(c, X(5, 6), y - 13, 6, 6, b);
  rect(c, X(10, 3), y - 11, 3, 3, l);
  rect(c, X(12, 1), y - 11, 1, 1, "#1a1a1a");
  rect(c, X(8, 1), y - 12, 1, 1, "#1a1a1a");
  rect(c, X(5, 2), y - 13, 2, 5, d);
  rect(c, X(-8, 2), y - 10 - tail, 2, 1, d);
  rect(c, X(-9, 1), y - 12 - tail, 1, 2, d);
}

/** A small heart rising over a pet that was stroked. */
export function heart(c: CanvasRenderingContext2D, x: number, y: number, alpha: number): void {
  const colour = `rgba(232,80,91,${alpha.toFixed(2)})`;
  rect(c, x - 2, y, 2, 2, colour);
  rect(c, x + 1, y, 2, 2, colour);
  rect(c, x - 2, y + 1, 5, 2, colour);
  rect(c, x - 1, y + 3, 3, 1, colour);
  rect(c, x, y + 4, 1, 1, colour);
}

/** A z rising over a sleeping pet. */
export function snore(c: CanvasRenderingContext2D, x: number, y: number, alpha: number): void {
  const colour = `rgba(255,255,255,${alpha.toFixed(2)})`;
  rect(c, x, y, 3, 1, colour);
  rect(c, x + 1, y + 1, 1, 1, colour);
  rect(c, x, y + 2, 3, 1, colour);
}
