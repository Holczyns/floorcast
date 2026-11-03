// Which piece of furniture an obstacle is: chosen in the editor, or guessed from the room it stands in,
// its size and its shape. Shared by the pixel look and the editor, which shows the guess.
import { type FurnitureKind, type Item, type Level, itemPoints, pointInPolygon } from "../model";
import { roomKind } from "./art";

/** The colour each piece of furniture has unless one is chosen for it. */
export const FURNITURE_COLOURS: Record<FurnitureKind, string> = {
  sofa: "#c0564b",
  bed: "#5b7fbf",
  wardrobe: "#8a5d3b",
  shelf: "#6e4a30",
  kitchen: "#6f87a3",
  fridge: "#f2f4f6",
  table: "#7c4f2c",
  chair: "#6a4226",
  desk: "#b58a5a",
  tvstand: "#4a3a30",
  dresser: "#946645",
  nightstand: "#946645",
  bathtub: "#f4f6f8",
  shower: "#e6f6fc",
  toilet: "#f4f6f8",
  washbasin: "#f4f6f8",
  washer: "#eef0f2",
  plant: "#b5653a",
  garden_sofa: "#e8dcc4",
  garden_table: "#a89480",
  bench: "#9a6a40",
  rug: "#b8463e",
  fireplace: "#9a8f86",
  piano: "#26262c",
  aquarium: "#3f8fc4",
  cat_tree: "#d8c4a0",
  pet_bed: "#7d5aa6",
  pouf: "#c49a5a",
  barbecue: "#2a2c31",
  swing: "#9a6a40",
  sandbox: "#9a6a40",
  pool: "#4aa3d8",
  fire_pit: "#7a7570",
};

export function furnitureOf(item: Item, level: Level): FurnitureKind {
  return item.furniture ?? guessFurniture(item, level);
}

export function guessFurniture(item: Item, level: Level): FurnitureKind {
  const points = itemPoints(item);
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const w = Math.max(...xs) - Math.min(...xs);
  const h = Math.max(...ys) - Math.min(...ys);
  const short = Math.min(w, h);
  const long = Math.max(w, h);
  const centre: [number, number] = [(Math.max(...xs) + Math.min(...xs)) / 2, (Math.max(...ys) + Math.min(...ys)) / 2];
  const room = level.rooms.find((r) => pointInPolygon(centre, r.points));
  const round = item.type === "round_obstacle";
  if (!room || room.outdoor || room.garden) return round ? "garden_table" : points.length > 4 ? "garden_sofa" : long > 1.2 ? "bench" : "garden_table";
  if (round) return short < 0.5 ? "plant" : "table";
  switch (roomKind(room)) {
    case "kitchen":
      return "kitchen";
    case "living":
      if (points.length > 4 || (long > 1.6 && short > 0.7)) return "sofa";
      return short < 0.5 && long > 1.5 ? "tvstand" : "dresser";
    case "dining":
      return long < 0.45 ? "chair" : "table";
    case "bath":
      if (long < 0.7) return "toilet";
      return short < 0.5 && long > 0.9 ? "shower" : "bathtub";
    case "bedroom":
    case "kids":
    case "room":
      if (short >= 0.7 && w * h >= 1.2) return "bed";
      if (long <= 0.6) return "nightstand";
      if (short <= 0.6 && long >= 1) return "wardrobe";
      return "desk";
    default:
      return "wardrobe";
  }
}
