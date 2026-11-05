// Animals of the pixel look: cats, dogs, tigers and rabbits, drawn with their feet at x, y.
//
// Every species, coat, pose and frame is drawn once into a small picture facing right, given a dark line round it
// like the people, and mirrored for the left. Lit from the upper left: the back lighter, the belly and the far legs
// darker. Frames are counted by the caller from the time or the steps walked.
import { canvas, disc, rect, tone } from "./art";

export type Species = "cat" | "dog" | "rabbit" | "tiger";
export type AnimalPose =
  | "walk"
  | "run"
  | "stalk"
  | "crouch"
  | "pounce"
  | "sit"
  | "wash"
  | "sleep"
  | "play"
  | "carry"
  | "stretch"
  | "yawn"
  | "knead"
  | "scratch"
  | "roll"
  | "sniff"
  | "dig"
  | "hop"
  | "eat";

type Pattern = "none" | "stripes" | "patches" | "points" | "tuxedo" | "spots" | "husky" | "blacktan" | "dutch" | "tiger";

interface Coat {
  main: string;
  dark: string;
  light: string;
  belly: string;
  mark: string;
  pattern: Pattern;
  eye: string;
}

const coat = (main: string, belly: string, pattern: Pattern = "none", mark = tone(main, -0.4), eye = "#2a2a2e"): Coat => ({
  main,
  dark: tone(main, -0.22),
  light: tone(main, 0.22),
  belly,
  mark,
  pattern,
  eye,
});

/** Coats by species and name, as PET_COATS of the model lists them. */
export const COATS: Record<Species, Record<string, Coat>> = {
  cat: {
    ginger: coat("#e08a3c", "#f6d2a8", "stripes", "#b5652a", "#3f9a4a"),
    grey: coat("#8d93a0", "#c9ced8", "none", "#646a76", "#d4a020"),
    black: coat("#34343c", "#4a4a54", "none", "#1c1c22", "#e0b020"),
    white: coat("#f2f2f2", "#ffffff", "none", "#c6c8cf", "#4a90d0"),
    tabby: coat("#a08060", "#d8c4a4", "stripes", "#5e4430", "#3f9a4a"),
    calico: coat("#f4f0ea", "#ffffff", "patches", "#e08a3c", "#3f9a4a"),
    siamese: coat("#efe2cc", "#f8f0e2", "points", "#5a3e2e", "#4a90d0"),
    tuxedo: coat("#2e2e35", "#f4f4f4", "tuxedo", "#f4f4f4", "#e0b020"),
  },
  dog: {
    brown: coat("#8a5a34", "#c49a70"),
    golden: coat("#d9a75a", "#f2d6a0"),
    black: coat("#2e2e35", "#4a4a52"),
    white: coat("#f0f0f0", "#ffffff", "none", "#c8c8d0"),
    spotted: coat("#f2f2f2", "#ffffff", "spots", "#26262c"),
    husky: coat("#6e7682", "#f2f2f4", "husky", "#f2f2f4", "#5aa8e0"),
    blacktan: coat("#2a2a30", "#c88a4a", "blacktan", "#c88a4a"),
  },
  tiger: {
    orange: coat("#e8892a", "#f8f0e4", "tiger", "#1e1a18", "#d8b020"),
    white: coat("#f2efe8", "#ffffff", "tiger", "#2a2a30", "#5aa8e0"),
  },
  rabbit: {
    white: coat("#f4f4f4", "#ffffff", "none", "#d0d0d8", "#c83a4a"),
    grey: coat("#9a9aa4", "#d8d8e0"),
    brown: coat("#9a7050", "#d8bfa0"),
    dutch: coat("#4a4a52", "#f4f4f4", "dutch", "#f4f4f4"),
  },
};

/** Size of the picture of each species, and where its feet stand in it. */
const SIZE: Record<Species, { w: number; h: number; x: number; y: number }> = {
  cat: { w: 32, h: 26, x: 15, y: 24 },
  dog: { w: 38, h: 30, x: 18, y: 28 },
  tiger: { w: 54, h: 38, x: 26, y: 36 },
  rabbit: { w: 26, h: 26, x: 12, y: 24 },
};

const pictures = new Map<string, HTMLCanvasElement>();
const MOVING = new Set<AnimalPose>(["walk", "run", "stalk", "sniff", "carry", "hop"]);
const PINK = "#e88a9a";
const NOSE = "#1e1a1c";

/** An animal with its feet at x, y. */
export function animal(
  c: CanvasRenderingContext2D,
  species: Species,
  coatName: string,
  x: number,
  y: number,
  pose: AnimalPose,
  facing: "left" | "right" | "up" | "down",
  frame: number,
): void {
  const size = SIZE[species];
  const key = `${species}|${coatName}|${pose}|${frame}|${facing}`;
  let picture = pictures.get(key);
  if (!picture) {
    const [element, fc] = canvas(size.w, size.h);
    if (facing === "left") {
      fc.translate(size.x * 2 + 1, 0);
      fc.scale(-1, 1);
    }
    const look = COATS[species][coatName] ?? Object.values(COATS[species])[0];
    // Up and down the screen an animal on the move shows its back or its face; staying, it shows its side.
    if ((facing === "up" || facing === "down") && MOVING.has(pose)) frontBack(fc, species, look, size.x, size.y, pose, frame, facing === "down");
    else draw(fc, species, look, size.x, size.y, pose, frame);
    fc.setTransform(1, 0, 0, 1, 0, 0);
    outline(fc, size.w, size.h, "#1e1a24");
    if (pictures.size > 600) pictures.clear();
    pictures.set(key, element);
    picture = element;
  }
  c.drawImage(picture, Math.round(x) - size.x, Math.round(y) - size.y);
}

/** How tall an animal stands, in pixels: where hearts and a z go over it. */
export function animalHeight(species: Species): number {
  return { cat: 14, dog: 18, tiger: 26, rabbit: 16 }[species];
}

function outline(c: CanvasRenderingContext2D, w: number, h: number, colour: string): void {
  const image = c.getImageData(0, 0, w, h);
  const filled = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && image.data[(y * w + x) * 4 + 3] > 0;
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) if (!filled(x, y) && (filled(x - 1, y) || filled(x + 1, y) || filled(x, y - 1) || filled(x, y + 1))) rect(c, x, y, 1, 1, colour);
}

/** A rounded block: a rectangle with its corners cut by one pixel. */
function blob(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, colour: string): void {
  if (w <= 2 || h <= 2) {
    rect(c, x, y, w, h, colour);
    return;
  }
  rect(c, x + 1, y, w - 2, h, colour);
  rect(c, x, y + 1, w, h - 2, colour);
}

function draw(c: CanvasRenderingContext2D, species: Species, k: Coat, x: number, y: number, pose: AnimalPose, frame: number): void {
  if (species === "rabbit") return rabbit(c, k, x, y, pose, frame);
  const big = species === "tiger";
  const dog = species === "dog";
  // Body length and height, leg length and head size, in pixels.
  const L = big ? 22 : dog ? 14 : 10;
  const H = big ? 9 : dog ? 6 : 6;
  const G = big ? 7 : dog ? 5 : 5;
  const shape: Shape = { L, H, G, head: big ? 10 : dog ? 7 : 8, legW: big ? 3 : 2, dog, big };
  if (pose === "sleep") return curled(c, shape, k, x, y, frame);
  if (pose === "roll") return rolled(c, shape, k, x, y, frame);
  if (pose === "sit" || pose === "wash" || pose === "yawn" || pose === "knead" || pose === "play" || pose === "eat")
    return seated(c, shape, k, x, y, pose, frame);
  if (pose === "scratch") return standing(c, shape, k, x, y, frame);
  standingOnFour(c, shape, k, x, y, pose, frame);
}

interface Shape {
  L: number;
  H: number;
  G: number;
  head: number;
  legW: number;
  dog: boolean;
  big: boolean;
}

/** The marks of a coat over a part of the body. */
function marks(c: CanvasRenderingContext2D, k: Coat, x: number, y: number, w: number, h: number, seed: number): void {
  if (k.pattern === "stripes" || k.pattern === "tiger") {
    const gap = k.pattern === "tiger" ? 3 : 2;
    const deep = k.pattern === "tiger" ? Math.max(2, h - 2) : Math.max(1, Math.floor(h / 2));
    for (let dx = 1 + (seed % 2); dx < w - 1; dx += gap) rect(c, x + dx, y, 1, deep - ((dx + seed) % 3 === 0 ? 1 : 0), k.mark);
  } else if (k.pattern === "patches") {
    rect(c, x + 1, y, Math.max(2, Math.floor(w / 3)), Math.max(2, h - 2), k.mark);
    rect(c, x + Math.floor(w / 2) + 1, y, Math.max(2, Math.floor(w / 4)), 2, "#34343c");
  } else if (k.pattern === "spots") {
    for (let i = 0; i < 4; i++) rect(c, x + 1 + ((i * 7 + seed * 3) % Math.max(2, w - 2)), y + ((i * 5 + seed) % Math.max(1, h - 1)), 2, 1, k.mark);
  } else if (k.pattern === "dutch") {
    rect(c, x + Math.floor(w / 2), y, Math.ceil(w / 2), h, k.mark);
  }
}

/** On four legs: walking, running, creeping, ready to jump, in the air, bowing, sniffing or digging. */
function standingOnFour(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, pose: AnimalPose, frame: number): void {
  const { L, H, G, legW } = s;
  const f = frame % 4;
  const low = pose === "stalk" || pose === "crouch" ? Math.ceil(G * 0.6) : 0;
  const air = pose === "pounce" ? Math.ceil(G * 0.8) : 0;
  // Front lower than the back: a bow, a stretch, sniffing or digging.
  const bow = pose === "stretch" || pose === "dig" || (s.dog && pose === "play") ? Math.ceil(G * 0.8) : 0;
  const sniff = pose === "sniff";
  const run = pose === "run" || pose === "carry" || pose === "pounce";
  const back = x - Math.floor(L / 2);
  const front = back + L;
  const base = y - G + low - air;
  const top = base - H;
  // Legs: far ones darker and behind, near ones in front; a walk lifts them in turn, a run stretches them.
  const legs = (near: boolean) => {
    const colour = near ? (k.pattern === "blacktan" ? k.mark : k.main) : k.dark;
    const pairs: [number, number][] = [
      [back + 1, near ? 0 : 1],
      [front - legW - 1, near ? 1 : 0],
    ];
    for (const [lx, phase] of pairs) {
      let dx = near ? 0 : 1;
      let lift = 0;
      if (pose === "walk" || pose === "sniff" || pose === "stalk") lift = (f + phase) % 2 === 0 ? 1 : 0;
      if (run) dx += (f + phase) % 2 === 0 ? -2 : 2;
      if (pose === "pounce") dx += lx > x ? 3 : -3;
      if ((pose === "stretch" || pose === "dig" || (s.dog && pose === "play")) && lx > x) dx += 2;
      if (pose === "dig" && lx > x && near) lift = f % 2 ? 2 : 0;
      const legTop = lx > x ? base - bow : base;
      const length = pose === "pounce" ? Math.max(1, Math.ceil(G / 2)) : Math.max(1, y - legTop - lift);
      rect(c, lx + dx, legTop, legW, length, colour);
      const paw = k.pattern === "tuxedo" || k.pattern === "husky" ? "#f4f4f4" : k.pattern === "points" ? k.mark : tone(colour, -0.1);
      rect(c, lx + dx, legTop + length - 1, legW, 1, paw);
    }
  };
  legs(false);
  tail(c, s, k, back, top + 1, pose === "crouch" ? frame % 2 : f, run, pose);
  // The body, its back higher than its chest in a bow.
  const half = Math.floor(L / 2);
  blob(c, back, top, half + 1, H, k.main);
  blob(c, back + half, top + bow, L - half, H, k.main);
  rect(c, back + 1, top, L - 2, 1, k.light);
  rect(c, back + 2, base - 1, L - 4, 1, k.belly);
  if (k.pattern === "points") rect(c, back, top + 1, 2, H - 2, k.mark);
  if (k.pattern === "tuxedo") rect(c, front - 4, top + bow + 2, 3, H - 2, k.belly);
  if (k.pattern === "husky" || k.pattern === "blacktan") rect(c, back + 2, base - 2, L - 4, 2, k.belly);
  marks(c, k, back + 1, top + 1, half - 1, H - 2, L);
  marks(c, k, back + half, top + bow + 1, L - half - 1, H - 2, L + 1);
  legs(true);
  // The head ahead of the chest: low and forward when creeping, sniffing or bowing.
  const hs = s.head;
  const hx = front - Math.floor(hs / 3);
  const headDrop = sniff ? G + 1 : pose === "stalk" || pose === "crouch" ? 1 : bow ? bow + 1 : 0;
  const hy = top + bow - Math.floor(hs * 0.6) + headDrop;
  head(c, s, k, hx, hy, { mouth: run && s.dog ? "pant" : pose === "pounce" && s.big ? "roar" : "shut", down: sniff });
  if (pose === "dig") {
    // Earth flying back between the hind legs.
    const d = frame % 2;
    rect(c, back - 2 - d * 2, y - 3 - d, 1, 1, "#8a6a48");
    rect(c, back - 4 + d, y - 5 + d, 1, 1, "#6e5238");
  }
}

/** A tail by the back of the body, its frame moving it. */
function tail(c: CanvasRenderingContext2D, s: Shape, k: Coat, back: number, y: number, frame: number, run: boolean, pose: AnimalPose): void {
  const colour = k.pattern === "points" || k.pattern === "tuxedo" ? (k.pattern === "points" ? k.mark : k.main) : k.dark;
  const tip = k.pattern === "tiger" || k.pattern === "stripes" ? k.mark : k.pattern === "husky" ? "#f4f4f4" : colour;
  if (s.dog) {
    // A dog's tail up and wagging.
    const wag = frame % 2;
    rect(c, back - 3, y - 1 - wag, 3, 1, colour);
    rect(c, back - 4, y - 3 - wag * 2, 1, 3, colour);
    rect(c, back - 4, y - 4 - wag * 2, 1, 1, tip);
    return;
  }
  const length = s.big ? 9 : 6;
  if (run || pose === "pounce") {
    // Straight out behind.
    rect(c, back - length, y, length, 2, colour);
    rect(c, back - length, y, 2, 2, tip);
    return;
  }
  if (pose === "stalk" || pose === "crouch") {
    // Low, the tip twitching.
    rect(c, back - length, y + 2, length, 1, colour);
    rect(c, back - length - 1, y + 1 + (frame % 2), 2, 1, tip);
    return;
  }
  // Up in a curve, swaying.
  const sway = frame % 2;
  rect(c, back - 2, y, 2, 2, colour);
  rect(c, back - 3 - sway, y - length + 2, 2, length - 2, colour);
  rect(c, back - 2 - sway * 2, y - length + 1, 2, 1, tip);
}

/** A head facing right with its top left at x, y. */
function head(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, o: { mouth: "shut" | "pant" | "roar" | "yawn"; closed?: boolean; down?: boolean }): void {
  const n = s.head;
  const face = k.pattern === "points" ? k.mark : k.main;
  if (s.dog) {
    // A dog: a round skull, a muzzle ahead, a floppy ear behind.
    const snout = k.pattern === "husky" || k.pattern === "blacktan" ? k.belly : tone(k.main, 0.12);
    blob(c, x, y, n - 1, n - 1, k.main);
    rect(c, x + 1, y, n - 3, 1, k.light);
    blob(c, x + n - 3, y + Math.floor(n / 2) - (o.down ? 0 : 1), 4, 3, snout);
    rect(c, x + n, y + Math.floor(n / 2) - (o.down ? 0 : 1), 1, 1, NOSE);
    if (k.pattern === "husky") rect(c, x + 2, y + 2, 3, n - 4, k.belly);
    if (k.pattern === "blacktan") rect(c, x + n - 4, y + 1, 1, 1, k.mark);
    if (k.pattern === "spots") rect(c, x + 1, y + 1, 2, 2, k.mark);
    rect(c, x, y + 1, 2, n - 2, k.dark);
    rect(c, x + n - 3, y + 2, 1, 1, o.closed ? k.dark : k.eye);
    if (o.mouth === "pant") rect(c, x + n - 1, y + Math.floor(n / 2) + 2, 2, 2, PINK);
    if (o.mouth === "yawn") rect(c, x + n - 2, y + Math.floor(n / 2) + 1, 3, 2, "#8a2a3a");
    return;
  }
  // A cat or a tiger: a broad head, ears up, a small nose and whiskers.
  const w = n;
  const h = n - 1;
  blob(c, x, y, w, h, face);
  rect(c, x + 1, y, w - 2, 1, k.pattern === "points" ? tone(k.main, 0.1) : k.light);
  if (k.pattern === "points") blob(c, x + Math.floor(w / 3), y + 1, w - Math.floor(w / 3), h - 1, k.mark);
  if (k.pattern === "tuxedo") rect(c, x + w - 3, y + h - 3, 3, 3, k.belly);
  if (s.big) {
    // White cheeks and forehead stripes.
    rect(c, x + w - 4, y + h - 4, 4, 3, k.belly);
    for (const dx of [2, 4, 6]) rect(c, x + dx, y, 1, 2, k.mark);
    rect(c, x + 1, y + 3, 2, 1, k.mark);
  } else if (k.pattern === "stripes") rect(c, x + 2, y, 1, 2, k.mark);
  // Ears: pointed on a cat, round on a tiger.
  const ear = s.big ? 3 : 2;
  const earColour = k.pattern === "points" ? k.mark : k.main;
  rect(c, x + 1, y - ear, ear, ear, earColour);
  rect(c, x + w - ear - 1, y - ear, ear, ear, earColour);
  if (s.big) {
    rect(c, x + 2, y - ear + 1, 1, 1, k.mark);
    rect(c, x + w - ear, y - ear + 1, 1, 1, k.mark);
  } else {
    rect(c, x + 1, y - ear - 1, 1, 1, earColour);
    rect(c, x + w - 2, y - ear - 1, 1, 1, earColour);
    rect(c, x + w - ear, y - ear + 1, 1, 1, PINK);
  }
  // Eye with a glint, nose, whiskers, an open mouth for a yawn or a roar.
  const ey = y + Math.floor(h / 2) - 1;
  if (o.closed) rect(c, x + w - 3, ey + 1, 2, 1, tone(face, -0.4));
  else {
    rect(c, x + w - 3, ey, s.big ? 2 : 1, 2, k.eye);
    rect(c, x + w - 2, ey, 1, 1, "#101012");
  }
  rect(c, x + w - 1, ey + 2, 1, 1, PINK);
  rect(c, x + w, ey + 2, 2, 1, "rgba(255,255,255,.75)");
  if (o.mouth === "yawn" || o.mouth === "roar") {
    rect(c, x + w - 3, ey + 3, 3, s.big ? 3 : 2, "#8a2a3a");
    rect(c, x + w - 3, ey + 3, 1, 1, "#ffffff");
    rect(c, x + w - 1, ey + 3, 1, 1, "#ffffff");
  }
}

/** Sitting up: haunches, an upright chest, the tail round the feet; washing, yawning, kneading or batting a paw. */
function seated(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, pose: AnimalPose, frame: number): void {
  const { G, legW } = s;
  const w = s.big ? 12 : s.dog ? 8 : 8;
  const h = s.big ? 15 : s.dog ? 11 : 10;
  const back = x - Math.floor(w / 2);
  // The tail on the ground round the feet, its tip lifting.
  const tailColour = k.pattern === "points" ? k.mark : k.dark;
  if (s.dog) {
    const wag = frame % 2;
    rect(c, back - 3, y - 2 - wag, 3, 1, tailColour);
    rect(c, back - 4, y - 4 - wag, 1, 2, tailColour);
  } else {
    rect(c, back - 2, y - 2, w + 2, s.big ? 2 : 1, tailColour);
    rect(c, back - 3, y - 3 - (frame % 2), 2, 1, k.pattern === "tiger" || k.pattern === "stripes" ? k.mark : tailColour);
  }
  // Haunch and chest.
  blob(c, back, y - Math.ceil(h * 0.55), Math.ceil(w * 0.75), Math.ceil(h * 0.55), k.dark);
  blob(c, back + 2, y - h, w - 2, h, k.main);
  rect(c, back + 3, y - h, w - 4, 1, k.light);
  rect(c, back + w - 3, y - h + 2, 2, h - 3, k.belly);
  marks(c, k, back + 2, y - h + 1, w - 4, Math.floor(h / 2), w);
  // Front legs straight down, or one paw up: washing, batting, kneading in turn.
  const paw = k.pattern === "tuxedo" || k.pattern === "husky" ? "#f4f4f4" : k.pattern === "points" ? k.mark : k.main;
  const lift = pose === "play" ? 2 + (frame % 2) * 2 : pose === "wash" ? 4 : pose === "knead" ? (frame % 2) * 2 : 0;
  rect(c, back + w - 3, y - G - 1, legW, G + 1, k.dark);
  rect(c, back + w - 1, y - G - 1 - lift, legW, G + 1, paw);
  // The head on top, eyes shut for a yawn or while washing.
  const hs = s.head;
  const hx = back + w - Math.ceil(hs * 0.6);
  const hy = y - h - hs + 2 + (pose === "wash" ? 1 : 0) + (pose === "eat" ? 3 : 0);
  head(c, s, k, hx, hy, {
    mouth: pose === "yawn" ? (s.big ? "roar" : "yawn") : s.dog && pose === "play" ? "pant" : "shut",
    closed: pose === "yawn" || (pose === "wash" && frame % 2 === 0) || pose === "knead",
  });
  if (pose === "wash") rect(c, hx + hs - 2, hy + hs - 3, 2, 1, PINK);
}

/** Up on the hind legs, scratching with the front paws in turn. */
function standing(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, frame: number): void {
  const w = s.big ? 10 : 6;
  const h = s.big ? 20 : 13;
  const back = x - Math.floor(w / 2);
  rect(c, back - 4, y - 2, 4, 1, k.dark);
  rect(c, back, y - 4, w, 4, k.dark);
  blob(c, back, y - h, w, h - 2, k.main);
  rect(c, back + 1, y - h, w - 2, 1, k.light);
  marks(c, k, back + 1, y - h + 2, w - 2, h - 6, h);
  const up = frame % 2;
  rect(c, back + w, y - h + 1 + up * 2, 3, s.legW, k.main);
  rect(c, back + w, y - h + 4 - up * 2, 3, s.legW, k.dark);
  head(c, s, k, back + w - Math.ceil(s.head * 0.7), y - h - s.head + 2, { mouth: "shut" });
}

/** Asleep and curled up: a round back, the head on the paws, the tail round the front; breathing in turn. */
function curled(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, frame: number): void {
  const breath = frame % 2;
  if (s.dog || s.big) {
    // Long on its side, the head down on the front paws.
    const L = s.big ? 22 : 14;
    const H = (s.big ? 8 : 5) + breath;
    const back = x - Math.floor(L / 2);
    blob(c, back, y - H, L, H, k.main);
    rect(c, back + 1, y - H, L - 2, 1, k.light);
    rect(c, back + 2, y - 1, L - 4, 1, k.belly);
    marks(c, k, back + 1, y - H + 1, L - 2, H - 2, L);
    rect(c, back - 4, y - 2, 5, s.big ? 2 : 1, k.dark);
    const hs = s.head;
    const hx = back + L - 2;
    head(c, s, k, hx - Math.floor(hs / 2), y - hs + 1, { mouth: "shut", closed: true });
    rect(c, hx + hs - 4, y - 1, 4, 1, k.dark);
    return;
  }
  const r = 5;
  const back = x - 2;
  disc(c, back, y - r + 1, r, k.main);
  rect(c, back - r + 1, y - 2 * r - breath + 2, 2 * r - 2, 1 + breath, k.main);
  rect(c, back - 3, y - 2 * r - breath + 2, 5, 1, k.light);
  marks(c, k, back - 3, y - 2 * r + 3, 6, 3, 5);
  // The head at the front, resting low, eyes shut, ears up.
  const face = k.pattern === "points" ? k.mark : k.main;
  const hx = back + 2;
  const hy = y - 6;
  blob(c, hx, hy, 6, 5, face);
  rect(c, hx + 1, hy, 4, 1, k.pattern === "points" ? face : k.light);
  rect(c, hx, hy - 2, 2, 2, face);
  rect(c, hx + 4, hy - 2, 2, 2, face);
  rect(c, hx + 4, hy - 1, 1, 1, PINK);
  rect(c, hx + 3, hy + 2, 2, 1, tone(face, -0.45));
  rect(c, hx + 5, hy + 3, 1, 1, PINK);
  if (k.pattern === "tuxedo") rect(c, hx + 3, hy + 3, 3, 2, k.belly);
  // The tail round the front of the curl.
  const tailColour = k.pattern === "points" ? k.mark : k.dark;
  rect(c, back - r, y - 2, 2 * r + 2, 2, tailColour);
  rect(c, hx + 5, y - 2, 2, 1, k.pattern === "tiger" || k.pattern === "stripes" ? k.mark : tailColour);
}

/** On its back, paws in the air paddling: asking for a belly rub. */
function rolled(c: CanvasRenderingContext2D, s: Shape, k: Coat, x: number, y: number, frame: number): void {
  const L = s.big ? 20 : s.dog ? 13 : 11;
  const H = s.big ? 7 : 5;
  const back = x - Math.floor(L / 2);
  blob(c, back, y - H, L, H, k.main);
  blob(c, back + 2, y - H, L - 4, 3, k.belly);
  const paddle = frame % 2;
  for (const [dx, p] of [[2, 0], [4, 1], [L - 6, 1], [L - 4, 0]] as [number, number][])
    rect(c, back + dx, y - H - 3 + ((p + paddle) % 2), s.legW, 3, (p + paddle) % 2 ? k.main : k.dark);
  rect(c, back - 4, y - 2, 4, 1, k.dark);
  const hs = s.head;
  head(c, s, k, back + L - 3, y - hs + 1, { mouth: s.dog ? "pant" : "shut", closed: frame % 4 === 0 });
}

/** A rabbit: a round body, big hind feet, long ears; hopping, sitting, grooming its ears, nibbling or asleep. */
function rabbit(c: CanvasRenderingContext2D, k: Coat, x: number, y: number, pose: AnimalPose, frame: number): void {
  const f = frame % 2;
  const asleep = pose === "sleep";
  const flying = (pose === "hop" || pose === "run" || pose === "walk" || pose === "play") && f === 1;
  const lift = flying ? 3 : 0;
  const long = flying ? 11 : 9;
  const h = asleep ? 6 : flying ? 6 : 8;
  const back = x - Math.floor(long / 2);
  const top = y - h - lift;
  // Hind feet: tucked under sitting, kicked back in the air.
  if (flying) rect(c, back - 2, y - 3 - lift, 4, 2, k.dark);
  else rect(c, back, y - 2, 5, 2, k.dark);
  // The cotton tail and the body.
  rect(c, back - 1, top + 2, 2, 2, "#ffffff");
  blob(c, back, top, long, h, k.main);
  rect(c, back + 1, top, long - 2, 1, k.light);
  rect(c, back + 2, y - 1 - lift, long - 4, 1, k.belly);
  marks(c, k, back, top + 1, long, h - 2, 1);
  // Front paws.
  const groom = pose === "wash";
  rect(c, back + long - 3, y - 2 - lift - (groom ? 4 : 0), 2, 2, k.pattern === "dutch" ? "#f4f4f4" : k.main);
  // The head, ears back flat asleep, up otherwise, one flopping while grooming.
  const hx = back + long - 4;
  const hy = top - 3 + (pose === "eat" ? 3 : 0) + (asleep ? 2 : 0);
  blob(c, hx, hy, 6, 5, k.pattern === "dutch" ? "#f4f4f4" : k.main);
  if (k.pattern === "dutch") rect(c, hx + 1, hy, 3, 3, k.main);
  rect(c, hx + 1, hy, 4, 1, k.light);
  const earColour = k.pattern === "dutch" ? k.main : k.main;
  if (asleep) {
    rect(c, hx - 4, hy + 1, 5, 2, earColour);
  } else {
    rect(c, hx + 1, hy - 5, 2, 6, earColour);
    rect(c, hx + 1, hy - 4, 1, 4, PINK);
    if (groom && f) rect(c, hx + 3, hy - 3, 3, 2, earColour);
    else rect(c, hx + 3, hy - 4, 2, 5, k.dark);
  }
  rect(c, hx + 4, hy + 2, 1, asleep ? 1 : 2, asleep ? tone(k.main, -0.4) : k.eye);
  rect(c, hx + 6, hy + 3, 1, 1, PINK);
  if (pose === "eat" && f) rect(c, hx + 5, hy + 4, 1, 1, tone(k.main, -0.3));
}


/**
 * Seen from the front, coming down the screen, or from behind, going up: the body short in perspective, the near
 * legs stepping in turn, the head over the chest from the front, the tail up over the back from behind.
 */
function frontBack(c: CanvasRenderingContext2D, species: Species, k: Coat, x: number, y: number, pose: AnimalPose, frame: number, front: boolean): void {
  if (species === "rabbit") return rabbitFrontBack(c, k, x, y, pose, frame, front);
  const big = species === "tiger";
  const dog = species === "dog";
  // From the front a big head over a narrow chest; from behind a broad rump with the head small beyond it.
  const W = front ? (big ? 11 : dog ? 8 : 6) : big ? 14 : dog ? 10 : 9;
  const G = big ? 7 : dog ? 5 : 5;
  const n = front ? (big ? 13 : dog ? 9 : 9) : big ? 10 : dog ? 7 : 7;
  const f = frame % 4;
  const run = pose === "run" || pose === "carry";
  const low = pose === "stalk" ? 2 : 0;
  const sniff = pose === "sniff";
  const left = x - Math.floor(W / 2);
  const bodyTop = y - G - 5 + low;
  const legColour = k.pattern === "blacktan" ? k.mark : k.main;
  const paw = k.pattern === "tuxedo" || k.pattern === "husky" ? "#f4f4f4" : k.pattern === "points" ? k.mark : tone(legColour, -0.1);
  const legW = big ? 3 : 2;
  // The far pair of legs, darker, peeking out at the sides.
  for (const [lx, phase] of [[left, 1], [left + W - legW, 0]] as [number, number][]) {
    const lift = (f + phase) % 2 && (pose === "walk" || run || sniff || pose === "stalk") ? 1 : 0;
    rect(c, lx, bodyTop + 3, legW, y - bodyTop - 3 - lift, k.dark);
  }
  const tailColour = k.pattern === "points" ? k.mark : k.dark;
  const tip = k.pattern === "tiger" || k.pattern === "stripes" ? k.mark : k.pattern === "husky" ? "#f4f4f4" : tailColour;
  const sway = Math.floor(frame / 2) % 2;
  if (front) {
    // The tail behind, its tip showing over a shoulder.
    rect(c, left + W - 1 + sway, bodyTop - (dog ? 2 : 5), dog ? 2 : 2, dog ? 4 : 6, tailColour);
    rect(c, left + W - 1 + sway, bodyTop - (dog ? 3 : 6), 2, 1, tip);
  }
  // The body, short from the front or behind.
  blob(c, left, bodyTop, W, 7, k.main);
  rect(c, left + 1, bodyTop, W - 2, 1, k.light);
  if (front) rect(c, x - 2, bodyTop + 2, 4, 5, k.belly);
  else marks(c, k, left + 1, bodyTop + 1, W - 2, 3, W);
  // The near legs stepping in turn; from behind they are the hind legs.
  for (const [lx, phase] of [[x - legW - 1, 0], [x + 1, 1]] as [number, number][]) {
    const stepping = pose === "walk" || run || sniff || pose === "stalk";
    const lift = stepping && (f + phase) % 2 ? (run ? 2 : 1) : 0;
    const top = bodyTop + 4;
    rect(c, lx, top, legW, y - top - lift, front ? legColour : k.dark);
    rect(c, lx, y - 1 - lift, legW, 1, paw);
  }
  // The head: the face from the front, the back of it from behind, lower when sniffing or creeping.
  const hx = x - Math.floor(n / 2);
  const hy = bodyTop - n + (front ? 4 : 3) + (sniff ? 4 : 0) + low;
  const face = k.pattern === "points" ? k.mark : k.main;
  if (!front) {
    // From behind: the back of the head beyond the shoulders, then the tail up from the rump beside it, swaying.
    blob(c, hx, hy, n, n - 4, face);
    rect(c, hx + 1, hy, n - 2, 1, k.light);
    if (k.pattern === "tiger") for (const dx of [2, 5, 8]) rect(c, hx + dx, hy + 1, 1, 2, k.mark);
    const side = Math.floor(W / 2) + 1;
    if (dog) {
      const wag = f % 2;
      rect(c, x - 1 + (wag ? 2 : -2), bodyTop - 3, 2, 5, tailColour);
      rect(c, x - 1 + (wag ? 2 : -2), bodyTop - 4, 2, 1, tip);
    } else {
      rect(c, x - 1, bodyTop + 1, 2, 2, tailColour);
      rect(c, x + side - 1 + sway, bodyTop - (big ? 7 : 5), 2, big ? 9 : 7, tailColour);
      rect(c, x + side - 1 + sway, bodyTop - (big ? 8 : 6), 2, 1, tip);
      rect(c, x, bodyTop + 1, side, 1, tailColour);
    }
  }
  if (dog) {
    if (front) {
      blob(c, hx, hy, n, n - 1, k.main);
      rect(c, hx + 1, hy, n - 2, 1, k.light);
      const snout = k.pattern === "husky" || k.pattern === "blacktan" ? k.belly : tone(k.main, 0.15);
      if (k.pattern === "husky") rect(c, hx + 2, hy + 2, n - 4, n - 3, k.belly);
      blob(c, x - 2, hy + n - 5, 4, 4, snout);
      rect(c, x - 1, hy + n - 5, 2, 1, NOSE);
      rect(c, hx + 2, hy + 3, 1, 2, k.eye);
      rect(c, hx + n - 3, hy + 3, 1, 2, k.eye);
      if (k.pattern === "spots") rect(c, hx + 1, hy + 1, 2, 2, k.mark);
      if (run) rect(c, x - 1, hy + n - 1, 2, 2, PINK);
    }
    // Floppy ears both sides.
    rect(c, hx - 1, hy + 1, 2, n - 3, k.dark);
    rect(c, hx + n - 1, hy + 1, 2, n - 3, k.dark);
    return;
  }
  // A cat or a tiger: pointed or round ears at the corners, from the front a face with eyes, nose and whiskers.
  const ear = big ? 3 : 3;
  const earColour = k.pattern === "points" ? k.mark : k.main;
  rect(c, hx, hy - ear + 1, ear, ear, earColour);
  rect(c, hx + n - ear, hy - ear + 1, ear, ear, earColour);
  if (!big) {
    rect(c, hx, hy - ear, 1, 1, earColour);
    rect(c, hx + n - 1, hy - ear, 1, 1, earColour);
  }
  if (!front) return;
  blob(c, hx, hy, n, n - 1, face);
  rect(c, hx + 1, hy, n - 2, 1, k.pattern === "points" ? tone(k.main, 0.1) : k.light);
  if (k.pattern === "points") blob(c, hx + 2, hy + 2, n - 4, n - 3, k.mark);
  if (!big) {
    rect(c, hx + 1, hy - 1, 1, 1, PINK);
    rect(c, hx + n - 2, hy - 1, 1, 1, PINK);
  }
  if (big) {
    rect(c, hx + 1, hy + n - 5, n - 2, 3, k.belly);
    for (const dx of [3, 5, 7]) rect(c, hx + dx, hy, 1, 2, k.mark);
  } else if (k.pattern === "stripes") {
    rect(c, x - 1, hy, 1, 2, k.mark);
    rect(c, x + 1, hy, 1, 2, k.mark);
  }
  if (k.pattern === "tuxedo") rect(c, x - 2, hy + n - 4, 4, 3, k.belly);
  const ey = hy + Math.floor(n / 2) - 2;
  rect(c, hx + 2, ey, big ? 2 : 1, 2, k.eye);
  rect(c, hx + n - (big ? 4 : 3), ey, big ? 2 : 1, 2, k.eye);
  rect(c, hx + 2, ey, 1, 1, "#101012");
  rect(c, hx + n - 3, ey, 1, 1, "#101012");
  rect(c, x, ey + 2, 1, 1, PINK);
  rect(c, x - 1, ey + 3, 3, 1, tone(face, -0.35));
  rect(c, hx - 2, ey + 2, 3, 1, "rgba(255,255,255,.75)");
  rect(c, hx + n - 1, ey + 2, 3, 1, "rgba(255,255,255,.75)");
}

/** A rabbit from the front or from behind: a round body, feet below, long ears up; the cotton tail from behind. */
function rabbitFrontBack(c: CanvasRenderingContext2D, k: Coat, x: number, y: number, pose: AnimalPose, frame: number, front: boolean): void {
  const flying = (pose === "hop" || pose === "run" || pose === "walk") && frame % 2 === 1;
  const lift = flying ? 3 : 0;
  const W = 8;
  const left = x - W / 2;
  const top = y - 8 - lift;
  rect(c, left, y - 2 - lift + (flying ? 1 : 0), 3, 2, k.dark);
  rect(c, left + W - 3, y - 2 - lift + (flying ? 1 : 0), 3, 2, k.dark);
  blob(c, left, top, W, 7, k.main);
  rect(c, left + 1, top, W - 2, 1, k.light);
  if (front) rect(c, x - 2, top + 3, 4, 4, k.belly);
  else rect(c, x - 1, top + 3, 3, 3, "#ffffff");
  const face = k.pattern === "dutch" ? "#f4f4f4" : k.main;
  const hx = x - 3;
  const hy = top - 4;
  blob(c, hx, hy, 7, 6, face);
  if (k.pattern === "dutch") {
    rect(c, hx, hy, 3, 3, k.main);
    rect(c, hx + 4, hy, 3, 3, k.main);
  }
  rect(c, hx + 1, hy - 5, 2, 6, k.main);
  rect(c, hx + 4, hy - 5, 2, 6, k.main);
  if (front) {
    rect(c, hx + 1, hy - 4, 1, 4, PINK);
    rect(c, hx + 5, hy - 4, 1, 4, PINK);
    rect(c, hx + 1, hy + 2, 1, 2, k.eye);
    rect(c, hx + 5, hy + 2, 1, 2, k.eye);
    rect(c, x, hy + 4, 1, 1, PINK);
  } else {
    rect(c, hx + 1, hy, 5, 1, k.light);
  }
}

/** The main colour of a coat, for paws and tails seen in a fight. */
export function coatColour(species: Species, coatName: string | undefined): string {
  const coats = COATS[species];
  return (coatName && coats[coatName] ? coats[coatName] : Object.values(coats)[0]).main;
}