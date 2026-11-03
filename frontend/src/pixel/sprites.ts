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
