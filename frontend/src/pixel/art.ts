// Pixel look of the card: palette, textures of floors and ground, and small drawing helpers.
import type { Room } from "../model";

/** Pixels per metre of the pixel drawing: a person sprite is about half a metre wide. */
export const PPM = 32;

export type Rgb = [number, number, number];

export function hash(x: number, y: number, s = 0): number {
  let h = (x * 374761393 + y * 668265263 + s * 982451653) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** A colour made lighter (amount above 0) or darker (below 0), as a share of the way to white or black. */
export function tone(hex: string, amount: number): string {
  const value = parseInt(hex.replace("#", "").padEnd(6, "0").slice(0, 6), 16);
  const channel = (shift: number) => {
    const v = (value >> shift) & 255;
    return Math.round(amount >= 0 ? v + (255 - v) * amount : v * (1 + amount));
  };
  return `rgb(${channel(16)},${channel(8)},${channel(0)})`;
}

export function rect(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, colour: string): void {
  c.fillStyle = colour;
  c.fillRect(Math.round(x), Math.round(y), Math.round(w), Math.round(h));
}

/** A filled circle made of whole pixels. */
export function disc(c: CanvasRenderingContext2D, cx: number, cy: number, r: number, colour: string): void {
  c.fillStyle = colour;
  const x = Math.round(cx);
  const y = Math.round(cy);
  for (let dy = -r; dy <= r; dy++) {
    const dx = Math.floor(Math.sqrt(r * r - dy * dy + r * 0.6));
    c.fillRect(x - dx, y + dy, dx * 2 + 1, 1);
  }
}

export function canvas(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
  const element = document.createElement("canvas");
  element.width = Math.max(1, width);
  element.height = Math.max(1, height);
  return [element, element.getContext("2d")!];
}

export type Texture =
  | "wood"
  | "darkwood"
  | "lightwood"
  | "checker"
  | "bathtile"
  | "carpet"
  | "carpet2"
  | "grass"
  | "neighbour"
  | "paving"
  | "deck"
  | "soil"
  | "stairs"
  | "herringbone"
  | "tiles"
  | "concrete";

export type RoomKind =
  | "kitchen"
  | "dining"
  | "living"
  | "bath"
  | "hall"
  | "stairs"
  | "bedroom"
  | "kids"
  | "room"
  | "wardrobe"
  | "terrace"
  | "driveway";

export interface RoomLook {
  floor: Texture;
  /** Wallpaper of the wall face seen from this room: base and stripe. */
  paper: [string, string];
  /** Colour of a lamp in this room when its light gives none. */
  light: Rgb;
}

export const LOOKS: Record<RoomKind, RoomLook> = {
  kitchen: { floor: "checker", paper: ["#e9dcbc", "#dfd0ad"], light: [255, 214, 150] },
  dining: { floor: "wood", paper: ["#86a97c", "#7a9d71"], light: [255, 200, 130] },
  living: { floor: "wood", paper: ["#86a97c", "#7a9d71"], light: [255, 196, 120] },
  bath: { floor: "bathtile", paper: ["#bfe0ea", "#b1d5e0"], light: [235, 240, 255] },
  hall: { floor: "darkwood", paper: ["#d8c7a6", "#ccba98"], light: [255, 205, 140] },
  stairs: { floor: "stairs", paper: ["#d8c7a6", "#ccba98"], light: [255, 205, 140] },
  bedroom: { floor: "carpet", paper: ["#a99cc7", "#9d90bb"], light: [255, 180, 110] },
  kids: { floor: "lightwood", paper: ["#f1dc9a", "#e6cf88"], light: [255, 210, 150] },
  room: { floor: "carpet2", paper: ["#9fc4c9", "#93b8bd"], light: [255, 214, 160] },
  wardrobe: { floor: "wood", paper: ["#d8c7a6", "#ccba98"], light: [255, 205, 140] },
  terrace: { floor: "deck", paper: ["#d8c7a6", "#ccba98"], light: [255, 214, 150] },
  driveway: { floor: "paving", paper: ["#d8c7a6", "#ccba98"], light: [255, 214, 150] },
};

/** Words in room names (English and Polish, without accents) that tell what a room is. */
const KIND_WORDS: [RoomKind, string[]][] = [
  ["kitchen", ["kitchen", "kuch"]],
  ["dining", ["dining", "jadal"]],
  ["living", ["living", "lounge", "salon"]],
  ["bath", ["bath", "toilet", "wc", "lazien"]],
  ["bedroom", ["bedroom", "sypial"]],
  ["kids", ["kid", "child", "nursery", "dziec"]],
  ["wardrobe", ["wardrobe", "closet", "dressing", "gardero"]],
  ["hall", ["hall", "corridor", "entrance", "porch", "koryt", "wiatro", "hol"]],
  ["terrace", ["terrace", "patio", "deck", "taras"]],
  ["driveway", ["drive", "podjazd"]],
];

export function plainText(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "l")
    .toLowerCase();
}

export function roomKind(room: Room): RoomKind {
  if (room.stairs) return "stairs";
  const name = plainText(room.name ?? "");
  if (name.includes("stair") || name.includes("schod")) return "stairs";
  for (const [kind, words] of KIND_WORDS) if (words.some((word) => name.includes(word))) return kind;
  if (room.garden) return "driveway";
  return room.outdoor ? "terrace" : "room";
}

const WOOD: Record<string, [string, string, string, string]> = {
  wood: ["#b4804b", "#9c6a3b", "#8a5a30", "#c48f58"],
  darkwood: ["#7d5636", "#6a462b", "#5a3a22", "#8d6442"],
  lightwood: ["#caa070", "#b78c5c", "#a47a4c", "#d8b183"],
};
const CARPET: Record<string, [string, string, string]> = {
  carpet: ["#7b6fa8", "#867ab4", "#6f639b"],
  carpet2: ["#c9a96e", "#d4b57c", "#bb9b62"],
};

/** One 16 pixel block of a texture; bx and by vary the details from block to block. */
function textureBlock(c: CanvasRenderingContext2D, type: Texture, X: number, Y: number, bx: number, by: number): void {
  const T = 16;
  if (type in WOOD) {
    const p = WOOD[type];
    rect(c, X, Y, T, T, p[0]);
    for (let r = 0; r < 4; r++) {
      const yy = Y + r * 4;
      rect(c, X, yy, T, 1, p[1]);
      const off = Math.floor(hash(bx, by * 4 + r, 1) * 16);
      rect(c, X + off, yy, 1, 4, p[2]);
      if (hash(bx, by, r + 7) < 0.35) rect(c, X + ((off + 7) % 15), yy + 2, 3, 1, p[3]);
    }
  } else if (type === "checker") {
    for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) rect(c, X + i * 8, Y + j * 8, 8, 8, (i + j) % 2 ? "#e8e4d8" : "#a9b7c6");
  } else if (type === "bathtile") {
    rect(c, X, Y, T, T, "#d3eaf2");
    for (let i = 0; i < 4; i++) {
      rect(c, X, Y + i * 4, T, 1, "#aecfdc");
      rect(c, X + i * 4, Y, 1, T, "#aecfdc");
    }
  } else if (type in CARPET) {
    const p = CARPET[type];
    rect(c, X, Y, T, T, p[0]);
    for (let i = 0; i < 26; i++)
      rect(c, X + Math.floor(hash(bx, by, i) * 16), Y + Math.floor(hash(by, bx, i + 50) * 16), 1, 1, hash(bx, i, by) < 0.5 ? p[1] : p[2]);
  } else if (type === "grass" || type === "neighbour") {
    const g = type === "grass" ? ["#5da64c", "#4f9441", "#71bb5c", "#3f8236"] : ["#4c7d40", "#436f38", "#578a4a", "#3a6532"];
    rect(c, X, Y, T, T, g[0]);
    for (let i = 0; i < 22; i++)
      rect(c, X + Math.floor(hash(bx, by, i) * 16), Y + Math.floor(hash(by, bx, i + 31) * 16), 1, 1, hash(i, bx, by) < 0.55 ? g[1] : g[2]);
    if (hash(bx, by, 99) < 0.25) {
      const px = 3 + Math.floor(hash(bx, by, 98) * 10);
      const py = 4 + Math.floor(hash(bx, by, 97) * 9);
      rect(c, X + px, Y + py, 1, 2, g[3]);
      rect(c, X + px + 2, Y + py, 1, 2, g[3]);
      rect(c, X + px + 1, Y + py + 1, 1, 2, g[3]);
    }
    if (type === "grass" && hash(bx, by, 77) < 0.05) {
      const colour = ["#f2f2f2", "#f5d34a", "#e86a8a"][Math.floor(hash(bx, by, 74) * 3)];
      const px = 3 + Math.floor(hash(bx, by, 76) * 10);
      const py = 3 + Math.floor(hash(bx, by, 75) * 10);
      rect(c, X + px, Y + py - 1, 1, 1, colour);
      rect(c, X + px - 1, Y + py, 3, 1, colour);
      rect(c, X + px, Y + py + 1, 1, 1, colour);
    }
  } else if (type === "paving") {
    rect(c, X, Y, T, T, "#a7a29a");
    rect(c, X, Y, T, 1, "#8c877f");
    rect(c, X, Y, 1, T, "#8c877f");
    rect(c, X + 1, Y + 1, 14, 1, "#bab5ad");
    for (let i = 0; i < 6; i++) rect(c, X + 2 + Math.floor(hash(bx, by, i) * 12), Y + 2 + Math.floor(hash(by, bx, i) * 12), 1, 1, "#9a958d");
  } else if (type === "deck") {
    rect(c, X, Y, T, T, "#9a6a44");
    for (let i = 0; i < 4; i++) {
      rect(c, X + i * 4, Y, 1, T, "#7a5232");
      if (hash(bx * 4 + i, by, 3) < 0.4) rect(c, X + i * 4 + 2, Y + Math.floor(hash(bx, by, i) * 12), 1, 3, "#b07e55");
    }
  } else if (type === "soil") {
    rect(c, X, Y, T, T, "#6e4c33");
    for (let i = 0; i < 18; i++) rect(c, X + Math.floor(hash(bx, by, i) * 16), Y + Math.floor(hash(by, bx, i + 9) * 16), 1, 1, "#5c3e29");
  } else if (type === "herringbone") {
    // Short boards laid at right angles in a zig-zag.
    rect(c, X, Y, T, T, "#b4804b");
    for (let k = 0; k < 4; k++) {
      const flip = (bx + by + k) % 2 === 0;
      for (let i = 0; i < 8; i++) {
        const x = flip ? X + i + k * 4 : X + 8 - i + k * 2;
        const y = Y + i * 2;
        rect(c, (x - X) % 16 + X, y, 1, 1, flip ? "#9c6a3b" : "#c48f58");
      }
    }
    for (let i = 0; i < 16; i += 4) rect(c, X, Y + i, T, 1, "rgba(80,50,25,.35)");
  } else if (type === "tiles") {
    rect(c, X, Y, T, T, "#d8d6d0");
    rect(c, X, Y, T, 1, "#b8b5ae");
    rect(c, X, Y, 1, T, "#b8b5ae");
    rect(c, X + 1, Y + 1, 14, 1, "#e8e6e0");
    for (let i = 0; i < 5; i++) rect(c, X + 2 + Math.floor(hash(bx, by, i) * 12), Y + 2 + Math.floor(hash(by, bx, i) * 12), 1, 1, "#cfccc5");
  } else if (type === "concrete") {
    rect(c, X, Y, T, T, "#9e9e9a");
    for (let i = 0; i < 30; i++) rect(c, X + Math.floor(hash(bx, by, i) * 16), Y + Math.floor(hash(by, bx, i + 7) * 16), 1, 1, hash(i, bx, by) < 0.5 ? "#929290" : "#aaaaa6");
  } else if (type === "stairs") {
    rect(c, X, Y, T, T, "#8d6442");
    for (let i = 0; i < 4; i++) {
      rect(c, X, Y + i * 4, T, 1, "#5a3a22");
      rect(c, X, Y + i * 4 + 1, T, 1, "#a57a52");
    }
  }
}

const tiles = new Map<Texture, HTMLCanvasElement>();

/** A repeating fill of a texture, 64 pixels before it repeats. */
export function texture(c: CanvasRenderingContext2D, type: Texture): CanvasPattern {
  let tile = tiles.get(type);
  if (!tile) {
    // Eight metres a side: smaller tiles show their tufts and flowers repeating in a grid.
    const [element, tc] = canvas(256, 256);
    for (let by = 0; by < 16; by++) for (let bx = 0; bx < 16; bx++) textureBlock(tc, type, bx * 16, by * 16, bx + 7, by + 3);
    tiles.set(type, element);
    tile = element;
  }
  return c.createPattern(tile, "repeat")!;
}

/** Flowers of a garden bed: a mix of tulips, daisies, lavender, roses, grasses and hostas. */
export function flowers(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number): void {
  for (let yy = y + 3; yy < y + h - 2; yy += 5)
    for (let xx = x + 2 + ((yy / 5) % 2) * 2; xx < x + w - 2; xx += 5) {
      const pick = hash(xx, yy, seed);
      const jx = xx + Math.floor(hash(xx, yy, seed + 1) * 2);
      if (pick < 0.2) {
        // Tulip: stem and a cup of colour.
        const colour = ["#e8505b", "#f5d34a", "#f28ac0", "#ff8c42"][Math.floor(hash(xx, yy, seed + 2) * 4)];
        rect(c, jx, yy, 1, 3, "#3f8236");
        rect(c, jx - 1, yy - 2, 3, 2, colour);
      } else if (pick < 0.38) {
        // Daisy.
        rect(c, jx - 1, yy, 3, 1, "#f4f4f4");
        rect(c, jx, yy - 1, 1, 3, "#f4f4f4");
        rect(c, jx, yy, 1, 1, "#f5c84a");
      } else if (pick < 0.55) {
        // Lavender.
        rect(c, jx, yy - 2, 1, 4, "#4f8a4a");
        rect(c, jx - 1, yy - 3, 1, 2, "#9d6be0");
        rect(c, jx + 1, yy - 2, 1, 2, "#b58cf0");
      } else if (pick < 0.7) {
        // A rose bush.
        disc(c, jx, yy, 2, "#2f6b33");
        rect(c, jx - 1, yy - 1, 1, 1, "#d6455a");
        rect(c, jx + 1, yy + 1, 1, 1, "#d6455a");
      } else if (pick < 0.85) {
        // Ornamental grass.
        rect(c, jx - 1, yy - 2, 1, 3, "#8fb85a");
        rect(c, jx, yy - 3, 1, 4, "#a3c86a");
        rect(c, jx + 1, yy - 2, 1, 3, "#7fa84e");
      } else {
        // Hosta: broad leaves.
        rect(c, jx - 2, yy - 1, 5, 2, "#5f9a6a");
        rect(c, jx - 1, yy - 2, 3, 1, "#7dbb84");
      }
    }
}

/** Rows of crops across a vegetable patch, one crop to a row. */
export function crops(c: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, seed: number): void {
  const across = w >= h;
  const span = across ? h : w;
  const rows = Math.max(1, Math.floor((span - 4) / 6));
  for (let r = 0; r < rows; r++) {
    const kind = Math.floor(hash(r, seed, 3) * 6);
    const offset = 4 + r * 6;
    const length = across ? w : h;
    for (let a = 3; a < length - 3; a += kind === 3 ? 6 : 4) {
      const px = across ? x + a : x + offset;
      const py = across ? y + offset : y + a;
      if (kind === 0) {
        // Lettuce.
        disc(c, px, py, 1, "#9ad46a");
        rect(c, px, py, 1, 1, "#c4ec8a");
      } else if (kind === 1) {
        // Cabbage.
        disc(c, px, py, 2, "#6f9f8a");
        rect(c, px - 1, py - 1, 2, 1, "#9cc6b2");
      } else if (kind === 2) {
        // Carrot tops.
        rect(c, px, py - 2, 1, 3, "#5fae3f");
        rect(c, px - 1, py - 1, 1, 1, "#7cc458");
        rect(c, px + 1, py - 1, 1, 1, "#7cc458");
      } else if (kind === 3) {
        // Tomatoes on stakes.
        rect(c, px, py - 5, 1, 6, "#8a6446");
        disc(c, px, py - 2, 2, "#3f8236");
        rect(c, px - 1, py - 1, 1, 1, "#e0392f");
        rect(c, px + 1, py - 3, 1, 1, "#e0392f");
      } else if (kind === 4) {
        // Onions.
        rect(c, px, py - 3, 1, 3, "#7cb85a");
        rect(c, px - 1, py, 3, 1, "#d8c49a");
      } else {
        // Strawberries.
        rect(c, px - 1, py, 3, 1, "#3f8236");
        rect(c, px, py - 1, 1, 1, "#4f9a3f");
        if (hash(px, py, seed) < 0.5) rect(c, px + 1, py + 1, 1, 1, "#e0392f");
      }
    }
  }
}
