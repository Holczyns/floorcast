// Characters and robots of the pixel look, drawn with their feet (or their middle) at x, y.
import { canvas, disc, rect, tone } from "./art";

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

/** A person standing or walking; step counts frames of the walk, zero standing still. Without its shadow when ghost. */
export function person(c: CanvasRenderingContext2D, x: number, y: number, facing: Facing, step: number, o: Outfit, ghost = false): void {
  if (!ghost) {
    rect(c, x - 6, y - 1, 13, 2, "rgba(0,0,0,.2)");
    rect(c, x - 5, y - 2, 11, 1, "rgba(0,0,0,.1)");
  }
  c.drawImage(figure(o, "stand", facing, step % 4), x - FIGURE_X, y - FIGURE_Y);
}

/** A person sitting: the upper body over the seat, the knees in front of it. */
export function sitting(c: CanvasRenderingContext2D, x: number, y: number, facing: Facing, o: Outfit): void {
  c.drawImage(figure(o, "sit", facing === "up" ? "up" : facing === "down" ? "down" : facing, 0), x - FIGURE_X, y - FIGURE_Y);
}

/** A person lying in bed: the head on the pillow side, a hump under the blanket. */
export function lying(c: CanvasRenderingContext2D, x: number, y: number, o: Outfit): void {
  c.drawImage(figure(o, "lie", "down", 0), x - FIGURE_X, y - FIGURE_Y);
}

// Figures are drawn once per outfit, pose, facing and frame into a small picture with the feet at FIGURE_X,
// FIGURE_Y, then given a dark line round them.
const FIGURE_W = 19;
const FIGURE_H = 32;
const FIGURE_X = 9;
const FIGURE_Y = 30;
const figures = new WeakMap<Outfit, Map<string, HTMLCanvasElement>>();

function figure(o: Outfit, pose: "stand" | "sit" | "lie", facing: Facing, frame: number): HTMLCanvasElement {
  let mine = figures.get(o);
  if (!mine) {
    mine = new Map();
    figures.set(o, mine);
  }
  const key = `${pose}|${facing}|${frame}`;
  let picture = mine.get(key);
  if (!picture) {
    const [element, fc] = canvas(FIGURE_W, FIGURE_H);
    if (facing === "left") {
      // The left view is the right one in a mirror; the feet stay at FIGURE_X.
      fc.translate(FIGURE_X * 2 + 1, 0);
      fc.scale(-1, 1);
    }
    if (pose === "lie") drawLying(fc, o);
    else drawFigure(fc, o, pose === "sit", facing === "left" ? "right" : facing, frame);
    fc.setTransform(1, 0, 0, 1, 0, 0);
    outline(fc, FIGURE_W, FIGURE_H, "#1e1a24");
    mine.set(key, element);
    picture = element;
  }
  return picture;
}

/** A dark line round everything drawn on a small picture. */
function outline(c: CanvasRenderingContext2D, w: number, h: number, colour: string): void {
  const image = c.getImageData(0, 0, w, h);
  const filled = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && image.data[(y * w + x) * 4 + 3] > 0;
  const edge: [number, number][] = [];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) if (!filled(x, y) && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1))) edge.push([x, y]);
  for (const [x, y] of edge) rect(c, x, y, 1, 1, colour);
}

/**
 * A figure in the proportions of small game sprites: a big head of a third of its height, a short body and
 * legs. Lit from the upper left: lighter on the left of the shirt and hair, darker on the right. Four frames
 * of walking: standing, left foot forward, standing, right foot forward, the body a pixel lower on a step.
 */
function drawFigure(c: CanvasRenderingContext2D, o: Outfit, seated: boolean, facing: "up" | "down" | "right", frame: number): void {
  const x = FIGURE_X;
  const y = FIGURE_Y;
  const shoe = "#3a2a22";
  const trouserShade = tone(o.trousers, -0.25);
  const shirtLight = tone(o.shirt, 0.2);
  const hairLight = tone(o.hair, 0.3);
  const eye = "#2a2a2e";
  const bob = frame === 1 || frame === 3 ? 1 : 0;
  // The body ends at the hips: on its legs standing, on the seat sitting.
  const by = seated ? y - 11 : y - 16 + bob;
  const side = facing === "right";
  // Legs and shoes.
  if (seated) {
    if (!side) {
      rect(c, x - 4, by + 9, 8, 2, o.trousers);
      rect(c, x - 4, by + 10, 8, 1, trouserShade);
      if (facing === "down") {
        rect(c, x - 4, by + 11, 3, 2, shoe);
        rect(c, x + 1, by + 11, 3, 2, shoe);
      }
    } else {
      rect(c, x - 1, by + 8, 6, 3, o.trousers);
      rect(c, x + 4, by + 10, 2, 3, o.trousers);
      rect(c, x + 4, by + 13, 3, 1, shoe);
    }
  } else if (side) {
    const stride = frame === 1 ? -2 : frame === 3 ? 2 : 0;
    rect(c, x - 1 - stride, y - 7, 3, 5, trouserShade);
    rect(c, x - 1 - stride, y - 2, 4, 2, tone(shoe, -0.2));
    rect(c, x - 1 + stride, y - 7, 3, 5, o.trousers);
    rect(c, x - 1 + stride, y - 2, 4, 2, shoe);
  } else {
    const left = frame === 1 ? 1 : 0;
    const right = frame === 3 ? 1 : 0;
    rect(c, x - 4, y - 8 - left, 3, 6, o.trousers);
    rect(c, x + 1, y - 8 - right, 3, 6, o.trousers);
    rect(c, x + 3, y - 8 - right, 1, 6, trouserShade);
    rect(c, x - 4, y - 2 - left, 3, 2, shoe);
    rect(c, x + 1, y - 2 - right, 3, 2, shoe);
  }
  // Body: shirt lit on the left, shaded on the right, a belt at the hips.
  const swing = frame === 1 ? 1 : frame === 3 ? -1 : 0;
  if (side) {
    rect(c, x - 3, by, 7, 9, o.shirt);
    rect(c, x - 3, by, 1, 9, o.shade);
    rect(c, x + 3, by + 1, 1, 6, shirtLight);
    rect(c, x - 3, by + 8, 7, 1, tone(o.trousers, -0.35));
    // The near arm swings forward and back.
    const reach = seated ? 2 : swing * 2;
    rect(c, x - 1 + reach, by + 1, 2, 6, o.shade);
    rect(c, x - 1 + reach, by + 7, 2, 2, o.skin);
  } else {
    rect(c, x - 5, by, 10, 9, o.shirt);
    rect(c, x + 3, by, 2, 9, o.shade);
    rect(c, x - 5, by + 1, 1, 6, shirtLight);
    rect(c, x - 5, by + 8, 10, 1, tone(o.trousers, -0.35));
    if (facing === "down") {
      rect(c, x - 2, by, 4, 1, o.skin);
      rect(c, x - 1, by + 1, 2, 1, o.skin);
      rect(c, x - 3, by + 1, 1, 1, shirtLight);
      rect(c, x + 2, by + 1, 1, 1, shirtLight);
    }
    const arm = seated ? 0 : swing;
    rect(c, x - 7, by + 1 + arm, 2, 6, o.shirt);
    rect(c, x + 5, by + 1 - arm, 2, 6, o.shade);
    rect(c, x - 7, by + 7 + arm, 2, 2, o.skin);
    rect(c, x + 5, by + 7 - arm, 2, 2, tone(o.skin, -0.1));
  }
  // Head: a third of the figure, hair with a shine, eyes with a glint, cheeks and a mouth.
  const hy = by - 10;
  if (facing === "up") {
    rect(c, x - 4, hy + 2, 8, 8, o.skin);
    rect(c, x - 5, hy, 10, 9, o.hair);
    rect(c, x - 4, hy + 9, 8, 1, o.hair);
    rect(c, x - 3, hy + 1, 3, 1, hairLight);
    rect(c, x - 4, hy + 2, 1, 2, hairLight);
    if (o.long) rect(c, x - 5, hy + 9, 10, 4, o.hair);
    else rect(c, x - 2, hy + 10, 4, 1, tone(o.skin, -0.1));
    return;
  }
  if (facing === "down") {
    rect(c, x - 4, hy + 2, 8, 8, o.skin);
    rect(c, x - 5, hy, 10, 4, o.hair);
    rect(c, x - 3, hy + 1, 3, 1, hairLight);
    rect(c, x - 4, hy + 4, 2, 1, o.hair);
    rect(c, x + 1, hy + 4, 1, 1, o.hair);
    rect(c, x - 5, hy + 3, 1, o.long ? 10 : 4, o.hair);
    rect(c, x + 4, hy + 3, 1, o.long ? 10 : 4, o.hair);
    rect(c, x - 3, hy + 5, 1, 2, eye);
    rect(c, x + 2, hy + 5, 1, 2, eye);
    rect(c, x - 3, hy + 5, 1, 1, "#ffffff");
    rect(c, x + 2, hy + 5, 1, 1, "#ffffff");
    rect(c, x - 4, hy + 7, 1, 1, "#ef9a9a");
    rect(c, x + 3, hy + 7, 1, 1, "#ef9a9a");
    rect(c, x - 1, hy + 8, 2, 1, tone(o.skin, -0.3));
    return;
  }
  rect(c, x - 3, hy + 2, 7, 8, o.skin);
  rect(c, x - 4, hy, 8, 4, o.hair);
  rect(c, x - 2, hy + 1, 3, 1, hairLight);
  rect(c, x - 4, hy + 2, 4, o.long ? 11 : 6, o.hair);
  rect(c, x - 3, hy + 3, 1, 2, hairLight);
  rect(c, x + 4, hy + 6, 1, 1, o.skin);
  rect(c, x + 2, hy + 5, 1, 2, eye);
  rect(c, x + 2, hy + 5, 1, 1, "#ffffff");
  rect(c, x + 1, hy + 7, 1, 1, "#ef9a9a");
  rect(c, x + 2, hy + 8, 2, 1, tone(o.skin, -0.3));
}

/** In bed: the head on the pillow, eyes shut, the blanket over the rest. */
function drawLying(c: CanvasRenderingContext2D, o: Outfit): void {
  const x = FIGURE_X;
  const y = FIGURE_Y;
  rect(c, x - 4, y - 13, 8, 8, o.skin);
  rect(c, x - 5, y - 14, 10, 4, o.hair);
  rect(c, x - 3, y - 13, 3, 1, tone(o.hair, 0.3));
  if (o.long) {
    rect(c, x - 6, y - 12, 1, 6, o.hair);
    rect(c, x + 5, y - 12, 1, 6, o.hair);
  }
  rect(c, x - 3, y - 9, 2, 1, "#2a2a2e");
  rect(c, x + 1, y - 9, 2, 1, "#2a2a2e");
  rect(c, x - 4, y - 7, 1, 1, "#ef9a9a");
  rect(c, x + 3, y - 7, 1, 1, "#ef9a9a");
  rect(c, x - 7, y - 5, 14, 10, "#5b7fbf");
  rect(c, x - 7, y - 5, 14, 2, "#7d9bd2");
  rect(c, x - 6, y + 1, 12, 3, "#4f72b0");
  rect(c, x - 7, y - 5, 1, 10, "#4f72b0");
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

/** A ball of yarn, a ball, a fly, a butterfly or a carrot with its foot at x, y and lifted by height pixels. */
export function toy(c: CanvasRenderingContext2D, kind: "yarn" | "ball" | "fly" | "butterfly" | "carrot", x: number, y: number, height: number, time: number, alpha = 1): void {
  c.save();
  c.globalAlpha = alpha;
  if (kind === "carrot") {
    // A carrot on the floor with its green top, nibbled shorter as time goes by.
    const left = 4 - (Math.floor(time / 6) % 3);
    rect(c, x - 2, y - 1, left, 2, "#f08a2a");
    rect(c, x - 2, y - 1, left, 1, "#f8a850");
    rect(c, x + left - 2, y - 2, 2, 1, "#4aa040");
    rect(c, x + left - 1, y - 3, 1, 1, "#5ac050");
    c.restore();
    return;
  }
  if (kind === "yarn" || kind === "ball") {
    if (height > 1) rect(c, x - 2, y, 4, 1, "rgba(0,0,0,.2)");
    const top = y - height - 2;
    disc(c, x, top, 2, kind === "yarn" ? "#d6455a" : "#c8e04a");
    rect(c, x - 1, top - 1, 1, 1, kind === "yarn" ? "#f08090" : "#f4f8d0");
    if (kind === "yarn") rect(c, x + 2, top + 1, 3, 1, "#d6455a");
    else rect(c, x - 2, top, 5, 1, "#ffffff");
  } else if (kind === "fly") {
    const top = y - height;
    rect(c, x, top, 1, 1, "#1a1a1a");
    const flap = Math.floor(time * 20) % 2;
    rect(c, x - 1, top - flap, 1, 1, "rgba(220,230,255,.85)");
    rect(c, x + 1, top - flap, 1, 1, "rgba(220,230,255,.85)");
  } else {
    const top = y - height;
    const open = Math.floor(time * 6) % 2 === 0;
    rect(c, x, top, 1, 2, "#3a2a20");
    if (open) {
      rect(c, x - 2, top - 1, 2, 2, "#f2a33a");
      rect(c, x + 1, top - 1, 2, 2, "#f2a33a");
      rect(c, x - 2, top - 1, 1, 1, "#2a2a2e");
      rect(c, x + 2, top - 1, 1, 1, "#2a2a2e");
    } else rect(c, x - 1, top - 1, 3, 1, "#f2a33a");
  }
  c.restore();
}
