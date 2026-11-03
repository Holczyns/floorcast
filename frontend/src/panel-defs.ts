// Types, tables and helpers of the editor: its tools and tabs, the names and hints it shows, and small
// functions of geometry and storage it shares between its parts.
import { N_, t } from "./i18n";
import { levelBounds, type AreaKind, type Device, type FloorFinish, type FurnitureKind, type Item, type ItemType, type Point, type Zone } from "./model";

export type Tool = "select" | "wall" | "door" | "window" | "gate" | "room" | "zone" | "item" | "light" | "sprinkler" | "mower" | "vacuum" | "camera" | "radar" | "sensor" | "screen" | "indicator" | "mark" | "calibrate";
export type Selection =
  | { kind: "wall"; id: string }
  | { kind: "opening"; id: string }
  | { kind: "room"; id: string }
  | { kind: "zone"; id: string }
  | { kind: "item"; id: string }
  | { kind: "device"; id: string };

/** Tab of the side panel; it decides what can be picked and drawn on the plan. */
/** Tabs of the editor: the layout, the devices, the people tracking and the settings. */
export type Mode = "plan" | "devices" | "people" | "settings";

/** How far the pointer moves before a press is a drag and not a click, in pixels. */
export const DRAG_PX = 8;
export const LOCK_KEY = "floorcast-editor-lock";
export const PIXEL_KEY = "floorcast-editor-pixels";
export const LAYERS_KEY = "floorcast-editor-hidden";
export type Layer = "devices" | "zones" | "names";
/** Tools that draw the layout, off while it is locked. */
export const LAYOUT_TOOLS: Tool[] = ["wall", "door", "window", "gate", "room", "item"];
export const TOOL_NAMES: Partial<Record<Tool, string>> = {
  wall: N_("Wall"),
  door: N_("Door"),
  window: N_("Window"),
  gate: N_("Gate"),
  room: N_("Room"),
  zone: N_("Zone"),
  item: N_("Object"),
  light: N_("Light"),
  sprinkler: N_("Sprinkler"),
  mower: N_("Mower"),
  vacuum: N_("Vacuum"),
  sensor: N_("Sensor"),
  screen: N_("Screen"),
  indicator: N_("Indicator"),
  camera: N_("Camera"),
  radar: N_("Radar"),
  mark: N_("Mark the vacuum"),
  calibrate: N_("Calibrate"),
};

/** A choice of the editor remembered in this browser; off without storage. */
export function stored(key: string): boolean {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

export function store(key: string, on: boolean): void {
  try {
    localStorage.setItem(key, on ? "1" : "0");
  } catch {
    // Without storage the choice lasts until the page reloads.
  }
}

export function storedList(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "[]");
  } catch {
    return [];
  }
}

export function storeList(key: string, values: string[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // Without storage the choice lasts until the page reloads.
  }
}

export const MODES: { mode: Mode; label: string }[] = [
  { mode: "plan", label: N_("Plan") },
  { mode: "devices", label: N_("Devices") },
  { mode: "people", label: N_("People") },
  { mode: "settings", label: N_("⚙ Settings") },
];

/** What the Add section offers in each tab, with the key that starts it. */
export const MODE_TOOLS: Record<Mode, [Tool, string, string][]> = {
  plan: [
    ["wall", N_("Wall"), "W"],
    ["door", N_("Door"), "D"],
    ["window", N_("Window"), "N"],
    ["gate", N_("Gate"), "G"],
    ["room", N_("Room"), "R"],
    ["item", N_("Garden, furniture"), "O"],
  ],
  devices: [
    ["light", N_("Light or strip"), "L"],
    ["sensor", N_("Sensor or alarm"), "S"],
    ["screen", N_("Screen"), "T"],
    ["indicator", N_("Indicator"), "I"],
    ["sprinkler", N_("Sprinkler"), "P"],
    ["camera", N_("Camera"), "C"],
    ["mower", N_("Mower"), "M"],
    ["vacuum", N_("Vacuum"), "V"],
  ],
  people: [
    ["radar", N_("Radar"), "A"],
    ["zone", N_("Zone"), "Z"],
  ],
  settings: [],
};

/** The tab a tool works in, and the tool a key starts. */
export const TOOL_MODE = new Map<Tool, Mode>(
  (Object.entries(MODE_TOOLS) as [Mode, [Tool, string, string][]][]).flatMap(([mode, tools]) => tools.map(([tool]) => [tool, mode] as [Tool, Mode])),
);
export const KEY_TOOLS = new Map<string, Tool>(Object.values(MODE_TOOLS).flatMap((tools) => tools.map(([tool, , key]) => [key.toLowerCase(), tool] as [string, Tool])));

export const DEVICE_LABELS: Record<Device["kind"], string> = {
  light: N_("Light"),
  sprinkler: N_("Sprinkler"),
  camera: N_("Camera"),
  mower: N_("Mower"),
  vacuum: N_("Vacuum"),
  radar: N_("Radar"),
  sensor: N_("Sensor"),
  thermometer: N_("Thermometer"),
  screen: N_("Screen"),
  indicator: N_("Indicator"),
};

/** Areas of Home Assistant with their floor, and the area and device of each entity. */
export interface Registry {
  areas: { id: string; name: string; floor?: string; floorId?: string }[];
  floors: { id: string; name: string }[];
  entityArea: Record<string, string>;
  entityDevice: Record<string, string>;
}

/** Domains an indicator offers: anything with a state worth seeing on the plan. */
export const INDICATOR_DOMAINS = [
  "switch",
  "input_boolean",
  "fan",
  "sensor",
  "binary_sensor",
  "media_player",
  "climate",
  "water_heater",
  "vacuum",
  "lawn_mower",
  "valve",
  "cover",
  "humidifier",
  "select",
  "input_select",
];

/** Kinds of entities of an area that go on a door, window or gate instead of standing in the room. */
export const ON_OPENING: AreaKind[] = ["blind", "gate", "lock", "contact"];

/** Order of the kinds in the area list of a room. */
export const AREA_KINDS: AreaKind[] = ["light", "sensor", "climate", "alarm", "presence", "blind", "gate", "lock", "contact", "camera"];

export interface View {
  x: number;
  y: number;
  w: number;
  h: number;
}

export type Drag =
  | { kind: "pan"; start: Point; view: View }
  // A press on the plan with Select: a click selects what is there, a drag beyond DRAG_PX pans.
  | { kind: "press"; screen: Point; view: View; candidates: Selection[] }
  // The selected thing moves only after a drag beyond DRAG_PX, so a click never shifts it.
  | { kind: "move"; start: Point; before: string; moved: boolean; screen: Point; armed: boolean; candidates?: Selection[] }
  | { kind: "wall-end"; end: "a" | "b"; origin: Point; alone: boolean; before: string }
  | { kind: "vertex"; index: number; before: string }
  | { kind: "corner"; index: number; before: string }
  | { kind: "radius"; before: string }
  | { kind: "opening-end"; before: string }
  | { kind: "device-end"; index: number; before: string }
  | { kind: "arc-end"; index: number; before: string }
  | { kind: "map-rotate"; before: string }
  | { kind: "aim"; before: string }
  | { kind: "create-light"; start: Point; current: Point }
  | { kind: "create-item"; start: Point; current: Point }
  | { kind: "create-room"; start: Point; current: Point };

export const ITEM_LABELS: Record<ItemType, string> = {
  lawn: N_("Lawn"),
  paving: N_("Paving"),
  terrace: N_("Terrace"),
  bed: N_("Flower bed"),
  hedge: N_("Hedge or shrubs"),
  vegetable: N_("Vegetable garden"),
  greenhouse: N_("Greenhouse"),
  shelter: N_("Shelter"),
  garden_house: N_("Garden house"),
  trampoline: N_("Trampoline"),
  manhole: N_("Manhole"),
  obstacle: N_("Obstacle (furniture)"),
  round_obstacle: N_("Round obstacle (table, pouf)"),
  tree: N_("Tree"),
};

/** Names of the pieces of furniture an obstacle can be, for the pixel look. */
export const FURNITURE_LABELS: Record<FurnitureKind, string> = {
  sofa: N_("Sofa or armchair"),
  bed: N_("Bed"),
  wardrobe: N_("Wardrobe"),
  shelf: N_("Bookcase"),
  kitchen: N_("Kitchen units"),
  fridge: N_("Fridge"),
  table: N_("Table"),
  chair: N_("Chair"),
  desk: N_("Desk"),
  tvstand: N_("TV stand"),
  dresser: N_("Chest of drawers"),
  nightstand: N_("Bedside table"),
  bathtub: N_("Bathtub"),
  shower: N_("Shower"),
  toilet: N_("Toilet"),
  washbasin: N_("Washbasin"),
  washer: N_("Washing machine"),
  plant: N_("Plant"),
  garden_sofa: N_("Garden sofa"),
  garden_table: N_("Garden table"),
  bench: N_("Bench"),
};

/** Names of the floors of the pixel look. */
export const FLOOR_LABELS: Record<FloorFinish, string> = {
  wood: N_("Oak boards"),
  lightwood: N_("Light boards"),
  darkwood: N_("Dark boards"),
  herringbone: N_("Herringbone parquet"),
  checker: N_("Chequered tiles"),
  bathtile: N_("Small tiles"),
  tiles: N_("Large tiles"),
  concrete: N_("Concrete"),
  carpet: N_("Violet carpet"),
  carpet2: N_("Beige carpet"),
};

/** Names of the coats of pets. */
export const COAT_LABELS: Record<string, string> = {
  ginger: N_("Ginger"),
  grey: N_("Grey"),
  black: N_("Black"),
  white: N_("White"),
  tabby: N_("Tabby"),
  calico: N_("Calico"),
  brown: N_("Brown"),
  golden: N_("Golden"),
  spotted: N_("Spotted"),
};

export const ZONE_LABELS: Record<Zone["kind"], string> = {
  count: N_("Count people here"),
  entrance: N_("Entrance (people count at once)"),
  exclude: N_("Ignore (fan, curtain, reflections)"),
  stationary: N_("Resting place (sofa, bed)"),
};

/** Whether a level still has the name it was added with, "Level 3", in English or in the language in use. */
export function isNumberedLevel(name: string): boolean {
  if (/^Level \d+$/.test(name)) return true;
  const [before, after = ""] = t("Level {number}").split("{number}");
  const middle = name.slice(before.length, name.length - after.length);
  return name.startsWith(before) && name.endsWith(after) && /^\d+$/.test(middle);
}

/**
 * A word whose English form has another meaning elsewhere, such as Light for the theme and the lamp: its key
 * names the meaning, and English shows the plain word when the language in use does not translate the key.
 */
export function inContext(key: string, english: string): string {
  const out = t(key);
  return out === key ? english : out;
}

export const GRID = 0.05;
export const SNAP_RADIUS = 0.2;
export const CORNER_SNAP = 0.05;
export const HISTORY_LIMIT = 60;

export const round = (v: number, step = GRID): number => Math.round(v / step) * step;
export const fix = (v: number): number => Math.round(v * 1000) / 1000;
export const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));


export const ZONE_HINTS: Record<Zone["kind"], string> = {
  count: N_("Gets its own people count and occupancy sensors, like a room the radar sees."),
  entrance: N_("A person who appears here counts at once instead of after the confirm delay. Draw it at doors."),
  exclude: N_("Targets born here never count, and nobody is reported inside it."),
  stationary: N_("A person the radar loses here stays counted for the hold time, as someone lying still is often not seen."),
};

export const HINTS: Record<Tool, string> = {
  select: N_("Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan."),
  wall: N_("Click to start a wall and click again for each corner. Double click or Esc ends."),
  door: N_("Click on a wall to place a door."),
  window: N_("Click on a wall to place a window."),
  gate: N_("Click on a wall to place a garage door or a driveway gate, then choose its cover."),
  room: N_("Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter."),
  zone: N_("Drag or click corners like a room; then choose what the zone does for the radars."),
  calibrate: N_("Click the same spot on the plan."),
  screen: N_("Drag along the screen, then choose its power entity and its remote."),
  sensor: N_("Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank."),
  item: N_("Choose the kind of object, then drag to draw it."),
  indicator: N_("Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs."),
  light: N_("Click where a light is, or choose Line and drag along a light strip; then choose its entity."),
  sprinkler: N_("Click where a sprinkler head is, then choose its valve, throw and arc."),
  mower: N_("Click on the lawn; the map of the mower appears there to be laid over the plan."),
  vacuum: N_("Click where the dock of the vacuum stands."),
  mark: N_("Click the spot where the vacuum stands now."),
  camera: N_("Click where the camera hangs, then aim it with the handle at the end of its view."),
  radar: N_("Click where the radar hangs, then aim it with the handle and check the dots follow people."),
};

/** Entity id part as Home Assistant makes it from plain ids: lower case, other characters as underscores. */
export function slug(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

export function levelBoundsOf(item: Item) {
  return levelBounds({ id: "", name: "", walls: [], openings: [], rooms: [], items: [item] }, 0);
}



/** EXPERIMENTAL: a point ahead and right of a mower centre on the plan, as engine/ground.py does. */
export function aheadToPlan([ahead, right]: Point, pose: { at: Point; heading: number }): Point {
  const r = (pose.heading * Math.PI) / 180;
  return [pose.at[0] + ahead * Math.cos(r) - right * Math.sin(r), pose.at[1] + ahead * Math.sin(r) + right * Math.cos(r)];
}

/** EXPERIMENTAL: a plan point as ahead and right of a mower centre. */
export function planToAhead(p: Point, pose: { at: Point; heading: number }): Point {
  const r = (pose.heading * Math.PI) / 180;
  const dx = p[0] - pose.at[0];
  const dy = p[1] - pose.at[1];
  return [fix(dx * Math.cos(r) + dy * Math.sin(r)), fix(-dx * Math.sin(r) + dy * Math.cos(r))];
}
