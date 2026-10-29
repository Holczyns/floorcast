// Sidebar panel: editor of the plan.
import { defineElement } from "./define";
import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import "./entity-picker";
import "./guide";
import { GroundFeed } from "./ground";
import { LANGUAGE_NAMES, pickLanguage, t, useDictionary } from "./i18n";
import { EDITOR_LANGUAGES } from "./i18n/editor-languages";
import examplePlan from "../../tools/example_plan.json";
import { type HomeAssistant } from "./ha";
import {
  CIRCLE_TYPES,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_CAMERA_RANGE,
  DEFAULT_FIELD_OF_VIEW,
  DEFAULT_GLOW,
  DEFAULT_RADAR_RANGE,
  DEFAULT_RADAR_VIEW,
  DEFAULT_ROOM_HOLD,
  DEFAULT_STATIONARY_HOLD,
  DEFAULT_THROW,
  type Device,
  radarSources,
  radarTargets,
  bearingPoint,
  bearingTo,
  calibrationScale,
  mapToPlan,
  mapTransform,
  DEFAULT_WALL_TYPES,
  GARDEN_TYPES,
  type Item,
  type ItemType,
  type Level,
  type Opening,
  type Appearance,
  type PaletteKey,
  type Plan,
  type Point,
  type Room,
  type Wall,
  type WallType,
  type Zone,
  type TrackedPerson,
  type TrackingSettings,
  centroid,
  OPENING_NAMES,
  indicatorState,
  SWITCHABLE_DOMAINS,
  itemPoints,
  AREA_KIND_NAMES,
  areaKind,
  openingName,
  planEntities,
  roomOpenings,
  spotsInRoom,
  type AreaKind,
  dist,
  emptyLevel,
  levelBounds,
  planRadius,
  pointOnWall,
  deviceCentre,
  roomAt,
  pointInPolygon,
  roomLights,
  roomThermometers,
  normalizeSensors,
  MAX_SECONDARY,
  type SensorType,
  type SensorValue,
  isPowered,
  projectOnWall,
  rectCorners,
  rotate,
  uid,
  homography,
  MIN_GROUND_SPOTS,
  type PreviewMode,
  imageToPlan,
  readingText,
  ALARM_CLASSES,
  alarmState,
  wallDirection,
  wallLength,
  withoutGarden,
} from "./model";
import {
  PLAN_DEFS,
  cameraView,
  mowerPlace,
  planStyles,
  applyPalette,
  planPalette,
  DARK_PALETTE,
  LIGHT_PALETTE,
  PALETTE_GROUPS,
  radarView,
  renderCameraGlow,
  renderCameraIcon,
  renderGlows,
  renderPerson,
  renderRadarIcon,
  renderVacuumMarker,
  renderLevel,
  renderOpeningLabels,
  readingSizes,
  renderSensor,
  renderAlarm,
  renderLock,
  lockSpot,
  renderIndicator,
  renderScreen,
  renderScreenGlows,
  screenLight,
  DEFAULT_SCREEN_THROW,
  DEFAULT_SCREEN_SPREAD,
  renderMower,
  renderSpray,
  sprinklerArea,
} from "./render";

type Tool = "select" | "wall" | "door" | "window" | "gate" | "room" | "zone" | "item" | "light" | "sprinkler" | "mower" | "vacuum" | "camera" | "radar" | "sensor" | "screen" | "indicator" | "mark" | "calibrate";
type Selection =
  | { kind: "wall"; id: string }
  | { kind: "opening"; id: string }
  | { kind: "room"; id: string }
  | { kind: "zone"; id: string }
  | { kind: "item"; id: string }
  | { kind: "device"; id: string };

/** Tab of the side panel; it decides what can be picked and drawn on the plan. */
/** Tabs of the editor: the layout, the devices, the people tracking and the settings. */
type Mode = "plan" | "devices" | "people" | "settings";

/** How far the pointer moves before a press is a drag and not a click, in pixels. */
const DRAG_PX = 8;
const LOCK_KEY = "floorcast-editor-lock";
const LAYERS_KEY = "floorcast-editor-hidden";
type Layer = "devices" | "zones" | "names";
/** Tools that draw the layout, off while it is locked. */
const LAYOUT_TOOLS: Tool[] = ["wall", "door", "window", "gate", "room", "item"];
const TOOL_NAMES: Partial<Record<Tool, string>> = {
  wall: "Wall",
  door: "Door",
  window: "Window",
  gate: "Gate",
  room: "Room",
  zone: "Zone",
  item: "Object",
  light: "Light",
  sprinkler: "Sprinkler",
  mower: "Mower",
  vacuum: "Vacuum",
  sensor: "Sensor",
  screen: "Screen",
  indicator: "Indicator",
  camera: "Camera",
  radar: "Radar",
  mark: "Mark the vacuum",
  calibrate: "Calibrate",
};

/** A choice of the editor remembered in this browser; off without storage. */
function stored(key: string): boolean {
  try {
    return localStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function store(key: string, on: boolean): void {
  try {
    localStorage.setItem(key, on ? "1" : "0");
  } catch {
    // Without storage the choice lasts until the page reloads.
  }
}

function storedList(key: string): string[] {
  try {
    return JSON.parse(localStorage.getItem(key) ?? "[]");
  } catch {
    return [];
  }
}

function storeList(key: string, values: string[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(values));
  } catch {
    // Without storage the choice lasts until the page reloads.
  }
}

const MODES: { mode: Mode; label: string }[] = [
  { mode: "plan", label: "Plan" },
  { mode: "devices", label: "Devices" },
  { mode: "people", label: "People" },
  { mode: "settings", label: "⚙ Settings" },
];

/** What the Add section offers in each tab, with the key that starts it. */
const MODE_TOOLS: Record<Mode, [Tool, string, string][]> = {
  plan: [
    ["wall", "Wall", "W"],
    ["door", "Door", "D"],
    ["window", "Window", "N"],
    ["gate", "Gate", "G"],
    ["room", "Room", "R"],
    ["item", "Garden, furniture", "O"],
  ],
  devices: [
    ["light", "Light or strip", "L"],
    ["sensor", "Sensor or alarm", "S"],
    ["screen", "Screen", "T"],
    ["indicator", "Indicator", "I"],
    ["sprinkler", "Sprinkler", "P"],
    ["camera", "Camera", "C"],
    ["mower", "Mower", "M"],
    ["vacuum", "Vacuum", "V"],
  ],
  people: [
    ["radar", "Radar", "A"],
    ["zone", "Zone", "Z"],
  ],
  settings: [],
};

/** The tab a tool works in, and the tool a key starts. */
const TOOL_MODE = new Map<Tool, Mode>(
  (Object.entries(MODE_TOOLS) as [Mode, [Tool, string, string][]][]).flatMap(([mode, tools]) => tools.map(([tool]) => [tool, mode] as [Tool, Mode])),
);
const KEY_TOOLS = new Map<string, Tool>(Object.values(MODE_TOOLS).flatMap((tools) => tools.map(([tool, , key]) => [key.toLowerCase(), tool] as [string, Tool])));

const DEVICE_LABELS: Record<Device["kind"], string> = {
  light: "Light",
  sprinkler: "Sprinkler",
  camera: "Camera",
  mower: "Mower",
  vacuum: "Vacuum",
  radar: "Radar",
  sensor: "Sensor",
  thermometer: "Thermometer",
  screen: "Screen",
  indicator: "Indicator",
};

/** Areas of Home Assistant with their floor, and the area and device of each entity. */
interface Registry {
  areas: { id: string; name: string; floor?: string; floorId?: string }[];
  floors: { id: string; name: string }[];
  entityArea: Record<string, string>;
  entityDevice: Record<string, string>;
}

/** Domains an indicator offers: anything with a state worth seeing on the plan. */
const INDICATOR_DOMAINS = [
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
const ON_OPENING: AreaKind[] = ["blind", "gate", "lock", "contact"];

/** Order of the kinds in the area list of a room. */
const AREA_KINDS: AreaKind[] = ["light", "sensor", "climate", "alarm", "presence", "blind", "gate", "lock", "contact", "camera"];

interface View {
  x: number;
  y: number;
  w: number;
  h: number;
}

type Drag =
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

const ITEM_LABELS: Record<ItemType, string> = {
  lawn: "Lawn",
  paving: "Paving",
  terrace: "Terrace",
  bed: "Flower bed",
  hedge: "Hedge or shrubs",
  vegetable: "Vegetable garden",
  greenhouse: "Greenhouse",
  shelter: "Shelter",
  garden_house: "Garden house",
  trampoline: "Trampoline",
  manhole: "Manhole",
  obstacle: "Obstacle (furniture)",
  round_obstacle: "Round obstacle (table, pouf)",
};

const ZONE_LABELS: Record<Zone["kind"], string> = {
  count: "Count people here",
  entrance: "Entrance (people count at once)",
  exclude: "Ignore (fan, curtain, reflections)",
  stationary: "Resting place (sofa, bed)",
};

const GRID = 0.05;
const SNAP_RADIUS = 0.2;
const CORNER_SNAP = 0.05;
const HISTORY_LIMIT = 60;

const round = (v: number, step = GRID): number => Math.round(v / step) * step;
const fix = (v: number): number => Math.round(v * 1000) / 1000;
const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value));

class FloorCastPanel extends LitElement {
  static properties = {
    hass: { attribute: false },
    narrow: { attribute: false },
    _plan: { state: true },
    _saved: { state: true },
    _levelId: { state: true },
    _registry: { state: true },
    _tool: { state: true },
    _itemType: { state: true },
    _wallType: { state: true },
    _selection: { state: true },
    _view: { state: true },
    _draft: { state: true },
    _cursor: { state: true },
    _confirmDelete: { state: true },
    _paletteMode: { state: true },
    _deleteLevel: { state: true },
    _startClosed: { state: true },
    _wipeText: { state: true },
    _locked: { state: true },
    _toast: { state: true },
    _find: { state: true },
    _hidden: { state: true },
    _layersOpen: { state: true },
    _message: { state: true },
    _saving: { state: true },
    _garden: { state: true },
    _live: { state: true },
    _typed: { state: true },
    _lightShape: { state: true },
    _endsAlone: { state: true },
    _mode: { state: true },
    _filter: { state: true },
    _imagePoint: { state: true },
    _people: { state: true },
    _raw: { state: true },
    _walks: { state: true },
    _walkHours: { state: true },
    _bigImage: { state: true },
    _imageZoom: { state: true },
    _frigateCameras: { state: true },
    _paths: { state: true },
    _groundPreview: { state: true },
    _guide: { state: true },
  };

  hass!: HomeAssistant;
  narrow = false;
  private _plan?: Plan;
  private _saved = "";
  private _levelId = "";
  private _tool: Tool = "select";
  private _mode: Mode = "plan";
  /** The palette edited in Settings, dark or light; the one the plan shows without a choice. */
  private _paletteMode?: "dark" | "light";
  /** The start screen of an empty plan was closed to draw from scratch. */
  private _startClosed = false;
  /** What was typed to confirm Delete everything. */
  private _wipeText = "";
  /** A level whose delete was pressed once; a second press within a few seconds deletes it. */
  private _deleteLevel?: string;
  /** Delete was pressed once: a second press within a few seconds deletes. */
  private _confirmDelete = false;
  private _confirmTimer?: number;
  /** Text the lists of the panel are narrowed to. */
  private _filter = "";
  /** Spot clicked in the camera image, waiting for the same spot on the plan. */
  private _imagePoint?: Point;
  /** The camera image is shown large over the plan while spots are picked, and how far it is zoomed in. */
  private _bigImage = false;
  private _imageZoom = { scale: 1, origin: [50, 50] as Point };
  /** Width to height of the camera image, known once it loaded; it sizes the large image to fill the view. */
  private _imageAspect = 16 / 9;
  /** Which spots the large image adds to: the Frigate calibration, or the ground or mower calibration (experimental). */
  private _calibrationTarget: "frigate" | "ground" | "mower" = "frigate";
  /** EXPERIMENTAL: camera images on the ground of the saved plan, shown while previewed. */
  /** Devices whose ground image is previewed; the feed runs while there is one. */
  private _groundPreview = new Set<string>();
  private _groundFeed = new GroundFeed(() => this.requestUpdate());
  /** Cameras of Frigate, read once when a camera is edited; empty without Frigate. */
  private _frigateCameras?: { name: string; size: [number, number] | null }[];
  /** Where people walked in recent Frigate events of a camera, in image points, for checking its calibration. */
  private _paths = new Map<string, Point[][]>();
  private _itemType: ItemType = "obstacle";
  private _wallType = "outer";
  private _selection?: Selection;
  private _view: View = { x: -5, y: -5, w: 10, h: 10 };
  private _draft: Point[] = [];
  private _cursor?: Point;
  private _message = "";
  private _saving = false;
  /** Length typed while drawing a wall, as "3.5" or "3.5<90" (angle counter-clockwise from east). */
  private _typed = "";
  private _lightShape: "point" | "line" = "point";
  /** Images of mower maps, loaded for calibration only; they are not part of the plan. */
  private _mapImages = new Map<string, string>();
  /** Wall ends move alone instead of dragging joined walls along. */
  private _endsAlone = false;
  private _pointers = new Map<number, Point>();
  private _pinch?: { distance: number; mid: Point; view: View };
  private _garden = true;
  /** Live states of the entities drawn in the editor, as on the card. */
  private _live = true;
  /** The Guide is shown in place of the plan; the plan and its unsaved changes stay as they are. */
  private _guide = false;
  private _drag?: Drag;
  /** Layout lock: walls, doors, windows, rooms and objects stay where they are; their forms still work. */
  private _locked = stored(LOCK_KEY);
  /** The last change made on the plan, with Undo, for a few seconds. */
  private _toast?: string;
  private _toastTimer?: number;
  /** Text of the search box; its results show while it is not empty. */
  private _find = "";
  /** Layers left off the plan: devices, zones or room names. */
  private _hidden = new Set<Layer>(storedList(LAYERS_KEY) as Layer[]);
  private _layersOpen = false;
  /** Where the last click selected, on the screen: a click there again selects what lies below. */
  private _lastClick?: Point;
  private _history: string[] = [];
  private _loaded = false;
  /** People the integration tracks, per level, shown in People; undefined without the tracking. */
  private _people?: Record<string, TrackedPerson[]>;
  /** Where people walked on this level in the chosen hours, while shown in People. */
  private _walks?: Point[][];
  private _walkHours = 24;
  /** Camera people before the rules, per level and camera. */
  private _raw: Record<string, Record<string, Point[]>> = {};
  private _unsubscribePeople?: Promise<() => void>;

  protected willUpdate(): void {
    // The language before drawing: the plan's choice, else the user's language in Home Assistant.
    const code = pickLanguage(this._plan?.language, this.hass?.language, Object.keys(EDITOR_LANGUAGES));
    useDictionary(EDITOR_LANGUAGES[code], code);
  }

  protected updated(changed: PropertyValues): void {
    // The plan shows its colours; in Settings the palette being edited, to see it while choosing.
    const palette = planPalette(this._plan?.appearance, this.hass?.themes?.darkMode);
    const shown = this._mode === "settings" && this._paletteMode ? this._paletteMode : palette.mode;
    applyPalette(this, planPalette(this._plan?.appearance, undefined, shown).colours);
    if (changed.has("hass") && this.hass && !this._loaded) {
      this._loaded = true;
      this.load();
    }
    if (changed.has("hass") && this.hass && !this._unsubscribePeople && this.isConnected) {
      this._unsubscribePeople = this.hass.connection.subscribeMessage<{
        people: Record<string, TrackedPerson[]>;
        raw?: Record<string, Record<string, Point[]>>;
      }>(
        (message) => {
          this._people = message.people;
          this._raw = message.raw ?? {};
        },
        { type: "floorcast/people/subscribe" },
      );
      this._unsubscribePeople.catch(() => (this._people = undefined));
    }
  }

  connectedCallback(): void {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKey);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("keydown", this.onKey);
    this._unsubscribePeople?.then((unsubscribe) => unsubscribe()).catch(() => undefined);
    this._unsubscribePeople = undefined;
    this._groundFeed.stop();
    this._groundPreview = new Set();
  }

  private async load(): Promise<void> {
    const result = await this.hass.callWS<{ plan: Plan }>({ type: "floorcast/plan/get" });
    this.setPlan(result.plan, true);
  }

  private setPlan(plan: Plan, saved: boolean): void {
    // The plan as stored; changes of format below show as unsaved, so a save keeps them.
    const stored = JSON.stringify(plan);
    let updated = false;
    if (!plan.wallTypes) {
      updated = true;
      // A plan from before wall types: walls whose thickness matches a type get that type.
      plan.wallTypes = clone(DEFAULT_WALL_TYPES);
      for (const level of plan.levels)
        for (const wall of level.walls ?? []) wall.type ??= plan.wallTypes.find((type) => Math.abs(type.t - wall.t) < 1e-6)?.id;
    }
    for (const level of plan.levels) {
      level.walls ??= [];
      level.openings ??= [];
      level.rooms ??= [];
      level.items ??= [];
      level.devices ??= [];
      // Lights listed by a room become light points in its middle, to be moved to their places.
      for (const room of level.rooms) {
        const lights = room.lights ?? [];
        if (!lights.length) {
          delete room.lights;
          continue;
        }
        updated = true;
        // In a row near the top of the room, clear of its name and values in the middle.
        const [cx] = centroid(room.points);
        const top = Math.min(...room.points.map((q) => q[1])) + 0.45;
        lights.forEach((entity, i) => {
          const offset = (i - (lights.length - 1) / 2) * 0.6;
          level.devices!.push({ id: uid("light"), kind: "light", entity, at: [fix(cx + offset), fix(top)], radius: DEFAULT_GLOW });
        });
        delete room.lights;
      }
      // Sensors listed by a room: temperature and humidity become a thermometer where the
      // temperature was written, other sensors stand below it; presence comes from the radars now.
      for (const room of level.rooms) {
        if (!room.temperature && !room.humidity && !room.sensors?.length && !room.presence?.length) continue;
        updated = true;
        const [cx, cy] = centroid(room.points);
        if (room.temperature || room.humidity) {
          level.devices.push({
            id: uid("sensor"),
            kind: "sensor",
            sensorType: "temperature",
            entity: room.temperature ?? null,
            secondary: room.humidity ? [{ entity: room.humidity }] : [],
            at: [fix(cx), fix(cy + 0.55)],
          });
        }
        (room.sensors ?? []).forEach((entity, i) => {
          level.devices!.push({ id: uid("sensor"), kind: "sensor", entity, at: [fix(cx), fix(cy + 1.3 + i * 0.5)] });
        });
        delete room.temperature;
        delete room.humidity;
        delete room.sensors;
        delete room.presence;
      }
    }
    // Thermometers and second readings of sensors become sensors with secondary values.
    for (const level of plan.levels) if (normalizeSensors(level)) updated = true;
    this._plan = plan;
    if (saved) this._saved = stored;
    if (updated)
      this._message = "The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.";
    if (!plan.levels.some((level) => level.id === this._levelId)) this._levelId = plan.levels[0].id;
    this._selection = undefined;
    this.fit();
    // The canvas has its real size only after rendering.
    this.updateComplete.then(() => this.fit());
  }

  private get wallTypes(): WallType[] {
    this._plan!.wallTypes ??= clone(DEFAULT_WALL_TYPES);
    return this._plan!.wallTypes;
  }

  private wallType(id: string | undefined): WallType {
    return this.wallTypes.find((type) => type.id === id) ?? this.wallTypes[0] ?? DEFAULT_WALL_TYPES[0];
  }

  /** A changed thickness of a type reaches every wall of that type on every level. */
  private applyWallType(type: WallType): void {
    for (const level of this._plan!.levels) for (const wall of level.walls) if (wall.type === type.id) wall.t = type.t;
  }

  private get level(): Level {
    return this._plan!.levels.find((level) => level.id === this._levelId) ?? this._plan!.levels[0];
  }

  /** The level as drawn: without the garden when it is hidden, so hidden things cannot be picked. */
  private get shown(): Level {
    return this._garden ? this.level : withoutGarden(this.level);
  }

  private get dirty(): boolean {
    return !!this._plan && JSON.stringify(this._plan) !== this._saved;
  }

  // ---- history ----

  private snapshot(): string {
    return JSON.stringify(this._plan);
  }

  private remember(before: string): void {
    if (before === this.snapshot()) return;
    this._history.push(before);
    if (this._history.length > HISTORY_LIMIT) this._history.shift();
  }

  /** A short note of what the last action on the plan changed, with Undo. */
  private notify(text: string): void {
    window.clearTimeout(this._toastTimer);
    this._toast = text;
    this._toastTimer = window.setTimeout(() => (this._toast = undefined), 5000);
  }

  /** Whether the layout lock keeps this thing where it is. */
  private lockedKind(s: Selection | undefined): boolean {
    return this._locked && !!s && ["wall", "opening", "room", "item"].includes(s.kind);
  }

  /** The tab that edits a thing. */
  private modeFor(s: Selection): Mode {
    if (s.kind === "wall" || s.kind === "opening" || s.kind === "room" || s.kind === "item") return "plan";
    if (s.kind === "zone") return "people";
    return this.findDevice(s.id)?.kind === "radar" ? "people" : "devices";
  }

  /** Selects a thing and opens the tab that edits it. */
  private select(s: Selection | undefined): void {
    this._confirmDelete = false;
    const message = this._message;
    if (s && !this.editable(s)) this.setMode(this.modeFor(s));
    this._selection = s;
    this._message = message;
  }

  /** Runs a change of the plan as one undoable step. */
  private change(mutate: () => void): void {
    const before = this.snapshot();
    mutate();
    this.remember(before);
    this.requestUpdate();
  }

  private undo(): void {
    const previous = this._history.pop();
    if (!previous) return;
    this._plan = JSON.parse(previous);
    this._selection = undefined;
  }

  // ---- view ----

  private fit(): void {
    const b = levelBounds(this.shown, 1);
    const box = this.renderRoot?.querySelector?.(".canvas") as HTMLElement | null;
    const aspect = box ? box.clientWidth / Math.max(box.clientHeight, 1) : 1.4;
    let { w, h } = b;
    if (w / h < aspect) w = h * aspect;
    else h = w / aspect;
    this._view = { x: b.x + b.w / 2 - w / 2, y: b.y + b.h / 2 - h / 2, w, h };
  }

  private zoom(k: number): void {
    const v = this._view;
    const cx = v.x + v.w / 2;
    const cy = v.y + v.h / 2;
    this._view = { x: cx - (v.w * k) / 2, y: cy - (v.h * k) / 2, w: v.w * k, h: v.h * k };
  }

  private toPlan(event: PointerEvent | WheelEvent | MouseEvent): Point {
    const svgEl = this.renderRoot.querySelector("svg.plan") as SVGSVGElement;
    const matrix = svgEl.getScreenCTM()!.inverse();
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix);
    return [p.x, p.y];
  }

  private pixel(): number {
    const svgEl = this.renderRoot.querySelector("svg.plan") as SVGSVGElement | null;
    return svgEl ? this._view.w / Math.max(svgEl.clientWidth, 1) : 0.02;
  }

  private onWheel = (event: WheelEvent): void => {
    event.preventDefault();
    const p = this.toPlan(event);
    const k = event.deltaY > 0 ? 1.15 : 1 / 1.15;
    const v = this._view;
    this._view = { x: p[0] - (p[0] - v.x) * k, y: p[1] - (p[1] - v.y) * k, w: v.w * k, h: v.h * k };
  };

  // ---- snapping ----

  /** Wall ends and room corners the cursor may snap to, besides the grid. */
  private anchors(skip?: (p: Point) => boolean): Point[] {
    const level = this.level;
    const points: Point[] = [];
    for (const wall of level.walls) points.push(wall.a, wall.b);
    for (const room of level.rooms) points.push(...room.points);
    for (const item of level.items) if (item.points) points.push(...item.points);
    return skip ? points.filter((p) => !skip(p)) : points;
  }

  /**
   * Snapping of wall ends: to ends of other walls, then onto the axis of another wall, then to the grid.
   * Room corners are left out, so a wall never jumps to a room drawn next to it.
   * The point the drag started from is always a target, so a wall can go back where it was.
   */
  private snapWall(p: Point, event: { altKey: boolean } | undefined, from: Point | undefined, moving: Set<Wall>, origin?: Point): Point {
    if (event?.altKey) return [fix(p[0]), fix(p[1])];
    const ends: Point[] = [];
    for (const wall of this.level.walls) if (!moving.has(wall)) ends.push(wall.a, wall.b);
    if (origin) ends.push(origin);
    let best: Point | undefined;
    let bestDistance = SNAP_RADIUS;
    for (const end of ends) {
      const d = dist(end, p);
      if (d < bestDistance) {
        best = end;
        bestDistance = d;
      }
    }
    if (best) return [best[0], best[1]];
    let x = round(p[0]);
    let y = round(p[1]);
    if (from) {
      if (Math.abs(x - from[0]) < SNAP_RADIUS) x = from[0];
      if (Math.abs(y - from[1]) < SNAP_RADIUS) y = from[1];
    }
    if (origin) {
      if (Math.abs(x - origin[0]) < SNAP_RADIUS / 2) x = origin[0];
      if (Math.abs(y - origin[1]) < SNAP_RADIUS / 2) y = origin[1];
    }
    // A T-junction: the end lands on the axis of the wall it touches.
    for (const wall of this.level.walls) {
      if (moving.has(wall)) continue;
      const { at, distance } = projectOnWall(wall, [x, y]);
      if (distance < SNAP_RADIUS / 2 && at > 0 && at < wallLength(wall)) {
        const q = pointOnWall(wall, at);
        const horizontal = Math.abs(wall.a[1] - wall.b[1]) < 1e-6;
        const vertical = Math.abs(wall.a[0] - wall.b[0]) < 1e-6;
        if (horizontal) y = wall.a[1];
        else if (vertical) x = wall.a[0];
        else [x, y] = q;
        break;
      }
    }
    return [fix(x), fix(y)];
  }

  /** Faces of straight walls near the point: a room corner lands on the plaster, not on the wall axis. */
  private faceSnap(p: Point): { x?: number; y?: number } {
    const radius = SNAP_RADIUS * 0.65;
    let x: number | undefined;
    let y: number | undefined;
    let bestX = radius;
    let bestY = radius;
    for (const wall of this.level.walls) {
      const half = wall.t / 2;
      if (Math.abs(wall.a[1] - wall.b[1]) < 1e-6) {
        const inside = p[0] >= Math.min(wall.a[0], wall.b[0]) - half && p[0] <= Math.max(wall.a[0], wall.b[0]) + half;
        if (!inside) continue;
        for (const face of [wall.a[1] - half, wall.a[1] + half]) {
          const d = Math.abs(p[1] - face);
          if (d < bestY) [bestY, y] = [d, face];
        }
      } else if (Math.abs(wall.a[0] - wall.b[0]) < 1e-6) {
        const inside = p[1] >= Math.min(wall.a[1], wall.b[1]) - half && p[1] <= Math.max(wall.a[1], wall.b[1]) + half;
        if (!inside) continue;
        for (const face of [wall.a[0] - half, wall.a[0] + half]) {
          const d = Math.abs(p[0] - face);
          if (d < bestX) [bestX, x] = [d, face];
        }
      }
    }
    return { x: x === undefined ? undefined : fix(x), y: y === undefined ? undefined : fix(y) };
  }

  private snap(p: Point, event?: { altKey: boolean }, from?: Point, skip?: (q: Point) => boolean, faces = false): Point {
    if (event?.altKey) return [fix(p[0]), fix(p[1])];
    let best: Point | undefined;
    // Room corners: other corners only attract from closer than the thinnest wall, so a room
    // never jumps into the next one; the faces of the walls lead instead.
    let bestDistance = faces ? CORNER_SNAP : SNAP_RADIUS;
    for (const anchor of this.anchors(skip)) {
      const d = dist(anchor, p);
      if (d < bestDistance) {
        best = anchor;
        bestDistance = d;
      }
    }
    if (best) return [best[0], best[1]];
    let x = round(p[0]);
    let y = round(p[1]);
    if (faces) {
      const face = this.faceSnap(p);
      if (face.x !== undefined) x = face.x;
      if (face.y !== undefined) y = face.y;
    }
    // Straight walls: lock to the axis of the previous point when close to it.
    if (from) {
      if (Math.abs(x - from[0]) < SNAP_RADIUS) x = from[0];
      if (Math.abs(y - from[1]) < SNAP_RADIUS) y = from[1];
    }
    return [fix(x), fix(y)];
  }

  // ---- finding things ----

  private findWall(id: string): Wall | undefined {
    return this.level.walls.find((wall) => wall.id === id);
  }

  private findOpening(id: string): Opening | undefined {
    return this.level.openings.find((opening) => opening.id === id);
  }

  private findRoom(id: string): Room | undefined {
    return this.level.rooms.find((room) => room.id === id);
  }

  private findZone(id: string): Zone | undefined {
    return (this.level.zones ?? []).find((zone) => zone.id === id);
  }

  private findItem(id: string): Item | undefined {
    return this.level.items.find((item) => item.id === id);
  }

  private findDevice(id: string): Device | undefined {
    return (this.level.devices ?? []).find((device) => device.id === id);
  }

  private nearestWall(p: Point): { wall: Wall; at: number } | undefined {
    let best: { wall: Wall; at: number } | undefined;
    let bestDistance = Infinity;
    for (const wall of this.level.walls) {
      const { at, distance } = projectOnWall(wall, p);
      if (distance < wall.t / 2 + 0.25 && distance < bestDistance) {
        best = { wall, at };
        bestDistance = distance;
      }
    }
    return best;
  }

  /** Whether the open tab edits the selection; others stay on the plan but cannot be picked. */
  private editable(s: Selection, mode = this._mode): boolean {
    if (mode === "plan") return s.kind === "wall" || s.kind === "opening" || s.kind === "room" || s.kind === "item";
    const kind = s.kind === "device" ? this.findDevice(s.id)?.kind : undefined;
    // A camera shows stills in Devices and is calibrated to count people in People.
    if (mode === "people") return kind === "radar" || kind === "camera" || s.kind === "zone";
    if (mode === "devices") return !!kind && kind !== "radar";
    return false;
  }

  /** The topmost thing under the pointer the open tab edits; a lamp over a room lets the room be picked in Plan. */
  /** Every thing under the pointer, topmost first, whatever tab edits it. */
  private hitAll(event: PointerEvent): Selection[] {
    const stack = (this.renderRoot as ShadowRoot).elementsFromPoint(event.clientX, event.clientY);
    const found: Selection[] = [];
    const seen = new Set<string>();
    for (const top of stack) {
      for (let element: Element | null = top; element && element.tagName !== "svg"; element = element.parentElement) {
        const data = (element as HTMLElement).dataset ?? {};
        const candidates: (Selection | undefined)[] = [
          data.device ? { kind: "device", id: data.device } : undefined,
          data.opening ? { kind: "opening", id: data.opening } : undefined,
          data.wall ? { kind: "wall", id: data.wall } : undefined,
          data.zone ? { kind: "zone", id: data.zone } : undefined,
          data.item ? { kind: "item", id: data.item } : undefined,
          data.room ? { kind: "room", id: data.room } : undefined,
        ];
        for (const c of candidates) {
          if (!c || seen.has(`${c.kind}:${c.id}`)) continue;
          seen.add(`${c.kind}:${c.id}`);
          found.push(c);
        }
      }
    }
    // What the open tab edits comes first, so a click in Devices takes the lamp before the room around it.
    return [...found.filter((c) => this.editable(c)), ...found.filter((c) => !this.editable(c))];
  }

  /** What a click at this point selects: the first thing there, or the next one when clicked again at the same spot. */
  private pickFrom(candidates: Selection[], screen: Point): Selection | undefined {
    const again = this._lastClick && Math.hypot(screen[0] - this._lastClick[0], screen[1] - this._lastClick[1]) < DRAG_PX;
    this._lastClick = screen;
    const current = this._selection;
    const index = current ? candidates.findIndex((c) => c.kind === current.kind && c.id === current.id) : -1;
    const next = again && index >= 0 ? candidates[(index + 1) % candidates.length] : candidates[0];
    this._message =
      candidates.length > 1
        ? `${candidates.indexOf(next!) + 1} of ${candidates.length} here: click again to select what lies below.`
        : "";
    return next;
  }

  private hit(event: PointerEvent): Selection | undefined {
    // Every shape under the pointer, topmost first, each followed by the groups holding it.
    const stack = (this.renderRoot as ShadowRoot).elementsFromPoint(event.clientX, event.clientY);
    const path: Element[] = [];
    for (const top of stack) {
      for (let element: Element | null = top; element && element.tagName !== "svg"; element = element.parentElement) path.push(element);
    }
    for (const element of path) {
      const data = (element as HTMLElement).dataset ?? {};
      const candidates: (Selection | undefined)[] = [
        data.device ? { kind: "device", id: data.device } : undefined,
        data.opening ? { kind: "opening", id: data.opening } : undefined,
        data.wall ? { kind: "wall", id: data.wall } : undefined,
        data.zone ? { kind: "zone", id: data.zone } : undefined,
        data.item ? { kind: "item", id: data.item } : undefined,
        data.room ? { kind: "room", id: data.room } : undefined,
      ];
      const found = candidates.find((c) => c && this.editable(c));
      if (found) return found;
    }
    return undefined;
  }

  private setMode(mode: Mode): void {
    this._mode = mode;
    this._tool = "select";
    this._draft = [];
    this._filter = "";
    this._message = "";
    if (this._selection && !this.editable(this._selection, mode)) this._selection = undefined;
  }

  /** Selects something from a list and brings it into the middle of the view. */
  private pick(selection: Selection, at: Point): void {
    this._selection = selection;
    this._tool = "select";
    const v = this._view;
    this._view = { ...v, x: at[0] - v.w / 2, y: at[1] - v.h / 2 };
  }

  // ---- pointer handling ----

  private onDown = (event: PointerEvent): void => {
    this._pointers.set(event.pointerId, [event.clientX, event.clientY]);
    if (this._pointers.size === 2) {
      this.startPinch();
      return;
    }
    if (this._pointers.size > 2) return;
    const target = event.composedPath()[0] as HTMLElement;
    const handle = target.dataset?.handle;
    if (handle && event.button === 0) {
      (event.currentTarget as Element).setPointerCapture(event.pointerId);
      this.startHandle(handle, target.dataset.index, this.toPlan(event), event.shiftKey);
      return;
    }
    if (event.button === 1 || (event.button === 0 && event.shiftKey && this._tool === "select")) {
      this.startPan(event);
      return;
    }
    if (event.button !== 0) return;
    (event.currentTarget as Element).setPointerCapture(event.pointerId);
    const p = this.toPlan(event);
    // Calibration and marking the vacuum change settings, not the plan: no note for them.
    const placing = ["select", "mark", "calibrate"].includes(this._tool) ? undefined : this._tool;
    const historyBefore = this._history.length;
    // A tool that placed something at once ends here; one that drags tells on release.
    queueMicrotask(() => {
      if (placing && this._history.length > historyBefore) this.notify(`${TOOL_NAMES[placing] ?? "Item"} placed`);
    });
    switch (this._tool) {
      case "select": {
        const candidates = this.hitAll(event);
        const s = this._selection;
        const onSelected = !!s && candidates.some((c) => c.kind === s.kind && c.id === s.id);
        const screen: Point = [event.clientX, event.clientY];
        // The selected thing under the pointer may be dragged; anything else is selected on release or the plan pans.
        if (onSelected && !this.lockedKind(s)) {
          this._drag = { kind: "move", start: p, before: this.snapshot(), moved: false, screen, armed: false, candidates };
          return;
        }
        this._drag = { kind: "press", screen, view: { ...this._view }, candidates };
        return;
      }
      case "wall":
        this.addWallPoint(this.snapWall(p, event, this._draft.at(-1), new Set()));
        return;
      case "room":
      case "zone": {
        const point = this.snap(p, event, undefined, undefined, true);
        // On an empty draft a drag draws a rectangular room; clicks still add corner by corner.
        if (this._draft.length) this.addRoomPoint(point);
        else this._drag = { kind: "create-room", start: point, current: point };
        return;
      }
      case "light": {
        const at = this.snap(p, event);
        if (this._lightShape === "line") {
          this._drag = { kind: "create-light", start: at, current: at };
          return;
        }
        this.addLight(at);
        return;
      }
      case "screen": {
        const at = this.snap(p, event);
        this._drag = { kind: "create-light", start: at, current: at };
        return;
      }
      case "mower":
        this.addMower(this.snap(p, event));
        return;
      case "radar": {
        const device: Device = {
          id: uid("radar"),
          kind: "radar",
          source: radarSources(this.hass.states)[0] ?? null,
          at: this.snap(p, event),
          heading: 180,
          arc: DEFAULT_RADAR_VIEW,
          radius: DEFAULT_RADAR_RANGE,
          mirror: false,
        };
        this.change(() => (this.level.devices ??= []).push(device));
        this._selection = { kind: "device", id: device.id };
        this._tool = "select";
        return;
      }
      case "camera": {
        const entity = Object.keys(this.hass.states).find((id) => id.startsWith("camera.")) ?? null;
        const device: Device = {
          id: uid("camera"),
          kind: "camera",
          entity,
          at: this.snap(p, event),
          heading: 180,
          arc: DEFAULT_FIELD_OF_VIEW,
          radius: DEFAULT_CAMERA_RANGE,
        };
        this.change(() => (this.level.devices ??= []).push(device));
        this._selection = { kind: "device", id: device.id };
        this._tool = "select";
        return;
      }
      case "vacuum":
        this.addVacuum(this.snap(p, event));
        return;
      case "indicator": {
        const device: Device = { id: uid("indicator"), kind: "indicator", entity: null, at: this.snap(p, event) };
        this.change(() => (this.level.devices ??= []).push(device));
        this._selection = { kind: "device", id: device.id };
        this._tool = "select";
        return;
      }
      case "sensor": {
        const device: Device = { id: uid("sensor"), kind: "sensor", sensorType: "generic", entity: null, at: this.snap(p, event) };
        this.change(() => (this.level.devices ??= []).push(device));
        this._selection = { kind: "device", id: device.id };
        this._tool = "select";
        return;
      }
      case "mark":
        this.markVacuum(this.snap(p, event));
        return;
      case "calibrate": {
        const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
        if (!device || !this._imagePoint) return;
        if (this._calibrationTarget === "mower" && !this.mowerPose(device)) {
          this._message = "The mower reports no heading now; the spot is not kept.";
          return;
        }
        const pair = { image: this._imagePoint, plan: this.snap(p, event) };
        this.change(() => this.setPairs(device, [...this.pairsOf(device), pair]));
        this._imagePoint = undefined;
        this._tool = "select";
        const count = this.pairsOf(device).length;
        this._message = count < 4 ? `${count} of at least 4 spots. Click the next one in the image.` : `${count} spots; add more or press Done.`;
        return;
      }
      case "sprinkler": {
        const device: Device = {
          id: uid("sprinkler"),
          kind: "sprinkler",
          entity: null,
          at: this.snap(p, event),
          radius: DEFAULT_THROW,
          heading: 0,
          arc: 360,
          nozzle: "rotor",
        };
        this.change(() => (this.level.devices ??= []).push(device));
        this._selection = { kind: "device", id: device.id };
        this._tool = "select";
        return;
      }
      case "door":
      case "window":
      case "gate":
        this.addOpening(p, this._tool);
        return;
      case "item": {
        const start = this.snap(p, event);
        this._drag = { kind: "create-item", start, current: start };
        return;
      }
    }
  };

  private startPan(event: PointerEvent): void {
    (event.currentTarget as Element).setPointerCapture(event.pointerId);
    this._drag = { kind: "pan", start: [event.clientX, event.clientY], view: { ...this._view } };
  }

  /** Two fingers: whatever one finger started is cancelled and the plan zooms and pans. */
  private startPinch(): void {
    const drag = this._drag;
    if (drag && "before" in drag && drag.before !== this.snapshot()) this._plan = JSON.parse(drag.before);
    this._drag = undefined;
    const [p, q] = [...this._pointers.values()];
    this._pinch = { distance: Math.max(dist(p, q), 1), mid: [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], view: { ...this._view } };
  }

  private movePinch(): void {
    const pinch = this._pinch!;
    const [p, q] = [...this._pointers.values()];
    const svgEl = this.renderRoot.querySelector("svg.plan") as SVGSVGElement;
    const box = svgEl.getBoundingClientRect();
    const k = pinch.distance / Math.max(dist(p, q), 1);
    const v = pinch.view;
    // The plan point under the first middle of the fingers stays under their current middle.
    const anchor: Point = [v.x + ((pinch.mid[0] - box.left) / box.width) * v.w, v.y + ((pinch.mid[1] - box.top) / box.height) * v.h];
    const mid: Point = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    const w = v.w * k;
    const h = v.h * k;
    this._view = { x: anchor[0] - ((mid[0] - box.left) / box.width) * w, y: anchor[1] - ((mid[1] - box.top) / box.height) * h, w, h };
  }

  private startHandle(handle: string, index: string | undefined, p: Point, shift = false): void {
    if (this.lockedKind(this._selection)) return;
    const before = this.snapshot();
    const i = Number(index ?? 0);
    if (handle === "wall-a" || handle === "wall-b") {
      const end = handle === "wall-a" ? "a" : "b";
      const wall = this._selection?.kind === "wall" ? this.findWall(this._selection.id) : undefined;
      this._drag = { kind: "wall-end", end, origin: wall ? wall[end] : p, alone: shift || this._endsAlone, before };
    }
    else if (handle === "vertex") this._drag = { kind: "vertex", index: i, before };
    else if (handle === "mid") {
      // Dragging the middle of an edge adds a corner there.
      const points = this.selectedPoints()!;
      points.splice(i + 1, 0, p);
      this._drag = { kind: "vertex", index: i + 1, before };
    } else if (handle === "corner") this._drag = { kind: "corner", index: i, before };
    else if (handle === "radius") this._drag = { kind: "radius", before };
    else if (handle === "opening-end") this._drag = { kind: "opening-end", before };
    else if (handle === "device-end") this._drag = { kind: "device-end", index: i, before };
    else if (handle === "arc-end") this._drag = { kind: "arc-end", index: i, before };
    else if (handle === "map-rotate") this._drag = { kind: "map-rotate", before };
    else if (handle === "aim") this._drag = { kind: "aim", before };
  }

  private onMove = (event: PointerEvent): void => {
    if (this._pointers.has(event.pointerId)) this._pointers.set(event.pointerId, [event.clientX, event.clientY]);
    if (this._pinch) {
      if (this._pointers.size === 2) this.movePinch();
      return;
    }
    const p = this.toPlan(event);
    this._cursor =
      this._tool === "wall"
        ? this.snapWall(p, event, this._draft.at(-1), new Set())
        : this.snap(p, event, undefined, undefined, this._tool === "room" || this._tool === "zone");
    const drag = this._drag;
    if (!drag) return;
    switch (drag.kind) {
      case "press": {
        if (Math.hypot(event.clientX - drag.screen[0], event.clientY - drag.screen[1]) < DRAG_PX) return;
        this._drag = { kind: "pan", start: drag.screen, view: drag.view };
        const k = this.pixel();
        this._view = {
          ...drag.view,
          x: drag.view.x - (event.clientX - drag.screen[0]) * k,
          y: drag.view.y - (event.clientY - drag.screen[1]) * k,
        };
        return;
      }
      case "pan": {
        const k = this.pixel();
        this._view = {
          ...drag.view,
          x: drag.view.x - (event.clientX - drag.start[0]) * k,
          y: drag.view.y - (event.clientY - drag.start[1]) * k,
        };
        return;
      }
      case "move": {
        if (!drag.armed) {
          if (Math.hypot(event.clientX - drag.screen[0], event.clientY - drag.screen[1]) < DRAG_PX) return;
          drag.armed = true;
        }
        const delta: Point = event.altKey
          ? [p[0] - drag.start[0], p[1] - drag.start[1]]
          : [round(p[0] - drag.start[0]), round(p[1] - drag.start[1])];
        if (!delta[0] && !delta[1]) return;
        drag.moved = true;
        this.moveSelection(delta, p);
        drag.start = [drag.start[0] + delta[0], drag.start[1] + delta[1]];
        this.requestUpdate();
        return;
      }
      case "wall-end":
        this.dragWallEnd(drag.end, p, event, drag.origin, drag.alone);
        return;
      case "vertex": {
        const points = this.selectedPoints();
        if (!points) return;
        const own = points[drag.index];
        const area = this._selection?.kind === "room" || this._selection?.kind === "zone";
        points[drag.index] = this.snap(p, event, undefined, (q) => q === own, area);
        this.requestUpdate();
        return;
      }
      case "corner":
        this.dragCorner(drag.index, p, event);
        return;
      case "radius": {
        const item = this.selectedItem();
        if (item?.center) item.diameter = Math.max(0.2, fix(round(2 * dist(item.center, p))));
        this.requestUpdate();
        return;
      }
      case "device-end": {
        const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
        if (!device) return;
        if (drag.index === 0) device.at = this.snap(p, event);
        else device.to = this.snap(p, event);
        this.requestUpdate();
        return;
      }
      case "aim": {
        // The handle sits at the end of the view: its direction is the heading, its distance the range.
        const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
        if (!device) return;
        const bearing = bearingTo(device.at, p);
        device.heading = event.altKey ? fix(bearing) : Math.round(bearing / 5) * 5;
        device.radius = Math.max(1, fix(round(dist(device.at, p), 0.5)));
        this.requestUpdate();
        return;
      }
      case "map-rotate": {
        const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
        if (!device) return;
        const angle = (Math.atan2(p[1] - device.at[1], p[0] - device.at[0]) * 180) / Math.PI;
        device.rotation = event.altKey ? fix(angle) : Math.round(angle * 2) / 2;
        this.requestUpdate();
        return;
      }
      case "arc-end": {
        // Start handle turns where the arc begins and keeps its end; end handle sets the width.
        const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
        if (!device) return;
        const bearing = event.altKey ? bearingTo(device.at, p) : Math.round(bearingTo(device.at, p) / 5) * 5;
        device.radius = Math.max(0.5, fix(round(dist(device.at, p), 0.1)));
        const heading = device.heading ?? 0;
        const arc = device.arc ?? 360;
        if (arc >= 360) device.heading = bearing % 360;
        else if (drag.index === 0) {
          const end = heading + arc;
          device.heading = bearing % 360;
          device.arc = ((end - bearing) % 360 + 360) % 360 || 360;
        } else device.arc = ((bearing - heading) % 360 + 360) % 360 || 360;
        this.requestUpdate();
        return;
      }
      case "create-light":
        drag.current = this.snap(p, event, drag.start);
        this.requestUpdate();
        return;
      case "opening-end": {
        const opening = this._selection?.kind === "opening" ? this.findOpening(this._selection.id) : undefined;
        const wall = opening && this.findWall(opening.wall);
        if (!opening || !wall) return;
        const { at } = projectOnWall(wall, p);
        opening.width = Math.max(0.3, fix(round(2 * Math.abs(at - opening.at))));
        this.requestUpdate();
        return;
      }
      case "create-item":
        drag.current = this.snap(p, event);
        this.requestUpdate();
        return;
      case "create-room":
        drag.current = this.snap(p, event, undefined, undefined, true);
        this.requestUpdate();
        return;
    }
  };

  private onUp = (event: PointerEvent): void => {
    this._pointers.delete(event.pointerId);
    if (this._pinch) {
      if (this._pointers.size < 2) this._pinch = undefined;
      return;
    }
    const drag = this._drag;
    this._drag = undefined;
    if (!drag) return;
    if (drag.kind === "press") {
      this.select(this.pickFrom(drag.candidates, drag.screen));
      return;
    }
    // A click on the selected thing without moving it: what lies below it, when clicked at the same spot.
    if (drag.kind === "move" && !drag.armed && drag.candidates) {
      this.select(this.pickFrom(drag.candidates, drag.screen));
      return;
    }
    if (drag.kind === "move" && drag.moved) this.notify("Moved");
    if (drag.kind === "create-item" || drag.kind === "create-light" || drag.kind === "create-room") {
      const placing = this._tool;
      const historyBefore = this._history.length;
      queueMicrotask(() => {
        if (this._history.length > historyBefore) this.notify(`${TOOL_NAMES[placing] ?? "Item"} placed`);
      });
    }
    if (drag.kind === "create-item") {
      this.createItem(drag.start, drag.current);
      return;
    }
    if (drag.kind === "create-light" && this._tool === "screen") {
      this.addScreen(drag.start, drag.current);
      return;
    }
    if (drag.kind === "create-light") {
      this.addLight(drag.start, dist(drag.start, drag.current) > 0.2 ? drag.current : undefined);
      return;
    }
    if (drag.kind === "create-room") {
      const [a, b] = [drag.start, drag.current];
      if (Math.abs(b[0] - a[0]) > 0.2 && Math.abs(b[1] - a[1]) > 0.2) {
        this._draft = [a, [b[0], a[1]], b, [a[0], b[1]]];
        this.closeRoom();
      } else this.addRoomPoint(a);
      return;
    }
    if ("before" in drag) this.remember(drag.before);
    this.requestUpdate();
  };

  private onDouble = (): void => {
    if (this._tool === "wall") this._draft = [];
    if (this._tool === "room" || this._tool === "zone") this.closeRoom();
  };

  private onKey = (event: KeyboardEvent): void => {
    const editing = (event.composedPath()[0] as HTMLElement)?.tagName;
    if (editing === "INPUT" || editing === "SELECT" || editing === "TEXTAREA") return;
    if (this._guide) return;
    if (this._tool === "wall" && this._draft.length) {
      if (/^[0-9.,<-]$/.test(event.key)) {
        this._typed += event.key === "," ? "." : event.key;
        event.preventDefault();
        return;
      }
      if (this._typed && event.key === "Backspace") {
        this._typed = this._typed.slice(0, -1);
        event.preventDefault();
        return;
      }
      if (this._typed && event.key === "Enter") {
        this.applyTyped();
        return;
      }
      if (this._typed && event.key === "Escape") {
        this._typed = "";
        return;
      }
    }
    if (event.key.toLowerCase() === "d" && (event.ctrlKey || event.metaKey) && this._selection) {
      event.preventDefault();
      this.duplicateSelection();
      return;
    }
    if (!event.ctrlKey && !event.metaKey && !event.altKey && KEY_TOOLS.has(event.key.toLowerCase()) && !this._draft.length) {
      event.preventDefault();
      this.startTool(KEY_TOOLS.get(event.key.toLowerCase())!);
      return;
    }
    if (event.key === "/") {
      event.preventDefault();
      (this.renderRoot.querySelector("input.find") as HTMLInputElement | null)?.focus();
      return;
    }
    if (event.key === "Escape") {
      if (this._draft.length) this._draft = [];
      else if (this._tool !== "select") this.cancelTool();
      else this._selection = undefined;
    } else if (event.key === "Enter" && (this._tool === "room" || this._tool === "zone")) this.closeRoom();
    else if ((event.key === "Delete" || event.key === "Backspace") && this._selection) this.deleteSelection();
    else if (event.key.toLowerCase() === "z" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      this.undo();
    }
  };

  // ---- editing ----

  /** Ends the wall the typed length away from the last point, towards the cursor or at the typed angle. */
  private applyTyped(): void {
    const match = /^(\d+(?:\.\d+)?)(?:<(-?\d+(?:\.\d+)?))?$/.exec(this._typed);
    this._typed = "";
    const last = this._draft.at(-1);
    if (!match || !last) return;
    const length = Number(match[1]);
    let direction: Point;
    if (match[2] !== undefined) {
      const angle = (Number(match[2]) * Math.PI) / 180;
      direction = [Math.cos(angle), -Math.sin(angle)];
    } else {
      const cursor = this._cursor ?? [last[0] + 1, last[1]];
      const d = dist(cursor, last) || 1;
      direction = [(cursor[0] - last[0]) / d, (cursor[1] - last[1]) / d];
      // Close to an axis means along the axis.
      const tolerance = Math.sin((8 * Math.PI) / 180);
      if (Math.abs(direction[1]) < tolerance) direction = [Math.sign(direction[0]) || 1, 0];
      else if (Math.abs(direction[0]) < tolerance) direction = [0, Math.sign(direction[1])];
    }
    this.addWallPoint([fix(last[0] + direction[0] * length), fix(last[1] + direction[1] * length)]);
  }

  /** Map camera of a Dreame mower: the camera whose attributes point to its mowing map. */
  private findMowerMap(): string | undefined {
    return Object.keys(this.hass.states).find((id) => id.startsWith("camera.") && this.hass.states[id].attributes.mowing_map_api_path);
  }

  /** Reads the projection of the mower map and its image, for laying the map on the plan. */
  private async loadMowerMap(device: Device): Promise<void> {
    const camera = device.map ? this.hass.states[device.map] : undefined;
    const path = camera?.attributes.mowing_map_api_path as string | undefined;
    if (!path) {
      this._message = "The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.";
      return;
    }
    try {
      const map = await this.hass.callApi<Record<string, any>>("GET", path.replace(/^\/api\//, ""));
      const projection = map.projection;
      device.projection = {
        maxX: projection.max_x,
        minY: projection.min_y,
        scale: projection.scale,
        padding: projection.padding,
        width: projection.native_width ?? map.width,
        height: projection.native_height ?? map.height,
      };
      // The station is not always reported; remember it while it is, or from the docked position.
      const a = camera!.attributes;
      if (Number.isFinite(Number(a.charger_x)) && a.charger_x !== null) device.dock = [Number(a.charger_x), Number(a.charger_y)];
      else if (a.position_status === "known_dock") device.dock = [Number(a.position_x), Number(a.position_y)];
      const response = await this.hass.fetchWithAuth(map.background_path);
      const old = this._mapImages.get(device.id);
      if (old) URL.revokeObjectURL(old);
      this._mapImages.set(device.id, URL.createObjectURL(await response.blob()));
      this._message = "Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.";
    } catch (err) {
      this._message = `The mower map could not be read: ${(err as Error).message ?? err}`;
    }
    this.requestUpdate();
  }

  private async vacuumPosition(entity: string): Promise<Point | undefined> {
    try {
      const result = await this.hass.callWS<{ response: Record<string, { x: number; y: number }> }>({
        type: "call_service",
        domain: "roborock",
        service: "get_vacuum_current_position",
        target: { entity_id: entity },
        return_response: true,
      });
      const p = result.response?.[entity];
      return p ? [p.x, p.y] : undefined;
    } catch (err) {
      this._message = `The vacuum did not report its position: ${(err as Error).message ?? err}`;
      return undefined;
    }
  }

  private addVacuum(at: Point): void {
    const entity = Object.keys(this.hass.states).find((id) => id.startsWith("vacuum.")) ?? null;
    const roomSensor = entity
      ? (Object.keys(this.hass.states).find((id) => id.startsWith(`sensor.${entity.split(".")[1]}`) && /room|pokoj/.test(id)) ?? null)
      : null;
    const device: Device = { id: uid("vacuum"), kind: "vacuum", entity, at, pairs: [], rotation: 0, mirror: false, roomSensor };
    this.change(() => (this.level.devices ??= []).push(device));
    this._selection = { kind: "device", id: device.id };
    this._tool = "select";
    this._message = "Put the vacuum on its dock, then press Dock is here.";
  }

  /** First pair: the dock, where the vacuum stands and where the device was placed on the plan. */
  private async markDock(device: Device): Promise<void> {
    if (!device.entity) return;
    const robot = await this.vacuumPosition(device.entity);
    if (!robot) return;
    this.change(() => (device.pairs = [{ robot, plan: device.at }, ...(device.pairs ?? []).slice(1)]));
    this._message = "Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.";
  }

  /** Second pair: wherever the vacuum stands now, clicked on the plan. */
  private async markVacuum(at: Point): Promise<void> {
    const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
    this._tool = "select";
    if (!device?.entity || !device.pairs?.length) return;
    const robot = await this.vacuumPosition(device.entity);
    if (!robot) return;
    this.change(() => (device.pairs = [device.pairs![0], { robot, plan: at }]));
    const scale = calibrationScale(device);
    this._message =
      scale && Math.abs(scale - 1) > 0.1
        ? `Calibrated, but the distances differ by ${Math.round(Math.abs(scale - 1) * 100)}%: check the spot, or try Mirror.`
        : "Calibrated: the vacuum now appears where it is.";
  }

  private addMower(at: Point): void {
    const map = this.findMowerMap() ?? null;
    const mower = Object.keys(this.hass.states).find((id) => id.startsWith("lawn_mower.")) ?? null;
    const device: Device = { id: uid("mower"), kind: "mower", entity: mower, map, at, rotation: 0, mirror: false };
    this.change(() => (this.level.devices ??= []).push(device));
    this._selection = { kind: "device", id: device.id };
    this._tool = "select";
    this.loadMowerMap(device);
  }

  private addLight(at: Point, to?: Point): void {
    const device: Device = { id: uid("light"), kind: "light", entity: null, at, radius: to ? 1 : DEFAULT_GLOW };
    if (to) device.to = to;
    this.change(() => (this.level.devices ??= []).push(device));
    this._selection = { kind: "device", id: device.id };
    this._tool = "select";
  }

  /** A projector screen along the drag; a click alone gives a screen two metres wide. */
  private addScreen(at: Point, to: Point): void {
    const end: Point = dist(at, to) > 0.3 ? to : [fix(at[0] + 2), at[1]];
    // A remote named like a projector is the likely one; otherwise it is chosen in the properties.
    const remote = Object.keys(this.hass.states).find((id) => /^remote\..*(projekt|projector)/.test(id)) ?? null;
    const device: Device = { id: uid("screen"), kind: "screen", entity: remote, remote, at, to: end };
    this.change(() => (this.level.devices ??= []).push(device));
    this._selection = { kind: "device", id: device.id };
    this._tool = "select";
  }

  /** A copy half a metre aside, selected, so it can be dragged into place. */
  private duplicateSelection(): void {
    const s = this._selection;
    if (!s) return;
    if (this.lockedKind(s)) {
      this.notify("The layout is locked");
      return;
    }
    const shift = (q: Point): Point => [fix(q[0] + 0.5), fix(q[1] + 0.5)];
    const level = this.level;
    let copy: Selection | undefined;
    this.change(() => {
      if (s.kind === "wall") {
        const wall = this.findWall(s.id)!;
        const id = uid("wall");
        level.walls.push({ ...clone(wall), id, a: shift(wall.a), b: shift(wall.b) });
        copy = { kind: "wall", id };
      } else if (s.kind === "opening") {
        const opening = this.findOpening(s.id)!;
        const wall = this.findWall(opening.wall);
        if (!wall) return;
        const id = uid(opening.type);
        const at = Math.min(opening.at + opening.width + 0.2, wallLength(wall) - opening.width / 2);
        level.openings.push({ ...clone(opening), id, at: fix(at) });
        copy = { kind: "opening", id };
      } else if (s.kind === "device") {
        const device = this.findDevice(s.id)!;
        const id = uid(device.kind);
        level.devices!.push({ ...clone(device), id, at: shift(device.at), ...(device.to ? { to: shift(device.to) } : {}) });
        copy = { kind: "device", id };
      } else if (s.kind === "room") {
        const room = this.findRoom(s.id)!;
        const id = uid("room");
        level.rooms.push({ ...clone(room), id, name: `${room.name} 2`, points: room.points.map(shift) });
        copy = { kind: "room", id };
      } else if (s.kind === "zone") {
        const zone = this.findZone(s.id)!;
        const id = uid("zone");
        level.zones!.push({ ...clone(zone), id, name: `${zone.name} 2`, points: zone.points.map(shift) });
        copy = { kind: "zone", id };
      } else {
        const item = clone(this.findItem(s.id)!);
        item.id = uid("item");
        if (item.points) item.points = item.points.map(shift);
        if (item.center) item.center = shift(item.center);
        if (item.rect) item.rect = [fix(item.rect[0] + 0.5), fix(item.rect[1] + 0.5), item.rect[2], item.rect[3]];
        level.items.push(item);
        copy = { kind: "item", id: item.id };
      }
    });
    this._selection = copy;
  }

  private addWallPoint(p: Point): void {
    const last = this._draft.at(-1);
    if (last && dist(last, p) > 0.05) {
      const type = this.wallType(this._wallType);
      this.change(() => this.level.walls.push({ id: uid("wall"), a: last, b: p, t: type.t, type: type.id }));
    }
    this._draft = [p];
  }

  private addRoomPoint(p: Point): void {
    if (this._draft.length >= 3 && dist(p, this._draft[0]) < SNAP_RADIUS) {
      this.closeRoom();
      return;
    }
    this._draft = [...this._draft, p];
  }

  private closeRoom(): void {
    if (this._draft.length < 3) return;
    if (this._tool === "zone") {
      const zone: Zone = { id: uid("zone"), name: `Zone ${(this.level.zones ?? []).length + 1}`, kind: "count", points: this._draft };
      this.change(() => (this.level.zones ??= []).push(zone));
      this._draft = [];
      this._tool = "select";
      this._selection = { kind: "zone", id: zone.id };
      return;
    }
    const room: Room = { id: uid("room"), name: `Room ${this.level.rooms.length + 1}`, points: this._draft, lights: [] };
    this.change(() => this.level.rooms.push(room));
    this._draft = [];
    this._tool = "select";
    this._selection = { kind: "room", id: room.id };
  }

  private addOpening(p: Point, type: Opening["type"]): void {
    const found = this.nearestWall(p);
    if (!found) {
      this._message = "Click on a wall to place it.";
      return;
    }
    const length = wallLength(found.wall);
    const width = Math.min(type === "door" ? 0.9 : type === "gate" ? 2.5 : 1.2, length);
    const at = Math.min(Math.max(round(found.at), width / 2), length - width / 2);
    const opening: Opening = { id: uid(type), wall: found.wall.id, at: fix(at), width, type };
    this.change(() => this.level.openings.push(opening));
    this._selection = { kind: "opening", id: opening.id };
  }

  private createItem(start: Point, end: Point): void {
    const type = this._itemType;
    let item: Item;
    if (CIRCLE_TYPES.includes(type)) {
      const d = dist(start, end) * 2;
      item = { id: uid("item"), type, center: start, diameter: fix(d >= 0.2 ? d : type === "trampoline" ? 3.66 : type === "round_obstacle" ? 0.9 : 0.6) };
    } else {
      let x = Math.min(start[0], end[0]);
      let y = Math.min(start[1], end[1]);
      let w = Math.abs(end[0] - start[0]);
      let h = Math.abs(end[1] - start[1]);
      if (w < 0.1 || h < 0.1) {
        x = start[0];
        y = start[1];
        w = 1;
        h = 1;
      }
      item = { id: uid("item"), type, rect: [fix(x), fix(y), fix(w), fix(h)], rotation: 0 };
    }
    this.change(() => this.level.items.push(item));
    this._selection = { kind: "item", id: item.id };
  }

  /** Ends of other walls lying on the given point move with it, so corners stay joined. */
  private joinedEnds(p: Point, except?: Wall): { wall: Wall; end: "a" | "b" }[] {
    const ends: { wall: Wall; end: "a" | "b" }[] = [];
    for (const wall of this.level.walls) {
      if (wall === except) continue;
      if (dist(wall.a, p) < 0.01) ends.push({ wall, end: "a" });
      if (dist(wall.b, p) < 0.01) ends.push({ wall, end: "b" });
    }
    return ends;
  }

  private dragWallEnd(end: "a" | "b", p: Point, event: PointerEvent, origin: Point, alone: boolean): void {
    const wall = this._selection?.kind === "wall" ? this.findWall(this._selection.id) : undefined;
    if (!wall) return;
    const old = wall[end];
    const other = end === "a" ? wall.b : wall.a;
    // Shift or the setting of the wall detaches its end from the walls joined there.
    const joined = alone ? [] : this.joinedEnds(old, wall);
    const moving = new Set<Wall>([wall, ...joined.map((j) => j.wall)]);
    const next = this.snapWall(p, event, other, moving, origin);
    wall[end] = next;
    for (const j of joined) j.wall[j.end] = next;
    this.requestUpdate();
  }

  private moveSelection(delta: Point, p: Point): void {
    const s = this._selection;
    if (!s) return;
    const shift = (q: Point): Point => [fix(q[0] + delta[0]), fix(q[1] + delta[1])];
    if (s.kind === "wall") {
      const wall = this.findWall(s.id)!;
      const joined = [...this.joinedEnds(wall.a, wall), ...this.joinedEnds(wall.b, wall)];
      // A wall joined to others moves only across itself; the joined walls get longer or
      // shorter along their own axis instead of turning.
      let step = delta;
      if (joined.length) {
        const d = wallDirection(wall);
        const across = -delta[0] * d[1] + delta[1] * d[0];
        step = [-d[1] * across, d[0] * across];
      }
      const move = (q: Point, by: Point): Point => [fix(q[0] + by[0]), fix(q[1] + by[1])];
      wall.a = move(wall.a, step);
      wall.b = move(wall.b, step);
      for (const j of joined) {
        const dj = wallDirection(j.wall);
        const along = step[0] * dj[0] + step[1] * dj[1];
        j.wall[j.end] = move(j.wall[j.end], [dj[0] * along, dj[1] * along]);
      }
    } else if (s.kind === "opening") {
      const opening = this.findOpening(s.id)!;
      const wall = this.findWall(opening.wall);
      if (!wall) return;
      const length = wallLength(wall);
      const { at } = projectOnWall(wall, p);
      opening.at = fix(Math.min(Math.max(round(at), opening.width / 2), length - opening.width / 2));
    } else if (s.kind === "room") {
      const room = this.findRoom(s.id)!;
      room.points = room.points.map(shift);
    } else if (s.kind === "zone") {
      const zone = this.findZone(s.id)!;
      zone.points = zone.points.map(shift);
    } else if (s.kind === "device") {
      const device = this.findDevice(s.id)!;
      device.at = shift(device.at);
      if (device.to) device.to = shift(device.to);
    } else {
      const item = this.findItem(s.id)!;
      if (item.points) item.points = item.points.map(shift);
      else if (item.center) item.center = shift(item.center);
      else if (item.rect) {
        const [x, y, w, h] = item.rect;
        item.rect = [fix(x + delta[0]), fix(y + delta[1]), w, h];
      }
    }
  }

  private dragCorner(index: number, p: Point, event: PointerEvent): void {
    const item = this.selectedItem();
    if (!item?.rect) return;
    // The opposite corner stays where it is; size follows the pointer in the rotated frame.
    const rotation = item.rotation ?? 0;
    const fixed = rectCorners(item)[(index + 2) % 4];
    const target = event.altKey ? p : this.snap(p, event);
    const local = rotate(target, fixed, -rotation);
    const w = Math.max(0.1, Math.abs(local[0] - fixed[0]));
    const h = Math.max(0.1, Math.abs(local[1] - fixed[1]));
    const sx = local[0] >= fixed[0] ? 1 : -1;
    const sy = local[1] >= fixed[1] ? 1 : -1;
    const centre = rotate([fixed[0] + (sx * w) / 2, fixed[1] + (sy * h) / 2], fixed, rotation);
    item.rect = [fix(centre[0] - w / 2), fix(centre[1] - h / 2), fix(w), fix(h)];
    this.requestUpdate();
  }

  private deleteSelection(): void {
    const s = this._selection;
    if (!s) return;
    if (this.lockedKind(s)) {
      this.notify("The layout is locked");
      return;
    }
    this.notify("Deleted");
    this.change(() => {
      const level = this.level;
      if (s.kind === "wall") {
        level.walls = level.walls.filter((wall) => wall.id !== s.id);
        level.openings = level.openings.filter((opening) => opening.wall !== s.id);
      } else if (s.kind === "opening") level.openings = level.openings.filter((o) => o.id !== s.id);
      else if (s.kind === "room") level.rooms = level.rooms.filter((room) => room.id !== s.id);
      else if (s.kind === "zone") level.zones = (level.zones ?? []).filter((zone) => zone.id !== s.id);
      else if (s.kind === "device") level.devices = (level.devices ?? []).filter((device) => device.id !== s.id);
      else level.items = level.items.filter((item) => item.id !== s.id);
    });
    this._selection = undefined;
  }

  private selectedItem(): Item | undefined {
    return this._selection?.kind === "item" ? this.findItem(this._selection.id) : undefined;
  }

  private selectedPoints(): Point[] | undefined {
    const s = this._selection;
    if (s?.kind === "room") return this.findRoom(s.id)?.points;
    if (s?.kind === "zone") return this.findZone(s.id)?.points;
    if (s?.kind === "item") return this.findItem(s.id)?.points;
    return undefined;
  }

  // ---- saving, import, export ----

  private async save(): Promise<void> {
    if (!this._plan) return;
    this._saving = true;
    try {
      await this.hass.callWS({ type: "floorcast/plan/save", plan: this._plan });
      this._saved = JSON.stringify(this._plan);
      this._message = "Saved.";
    } catch (err) {
      this._message = `Not saved: ${(err as { message?: string }).message ?? err}`;
    } finally {
      this._saving = false;
    }
  }

  private exportPlan(): void {
    const blob = new Blob([JSON.stringify(this._plan, null, 1)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "floorcast-plan.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  private importPlan(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    file.text().then((text) => {
      try {
        const plan = JSON.parse(text) as Plan;
        if (!Array.isArray(plan.levels) || !plan.levels.length) throw new Error("no levels");
        const before = this.snapshot();
        this.setPlan(plan, false);
        this.remember(before);
        this._message = "Imported. Save to keep it.";
      } catch (err) {
        this._message = `Import failed: ${(err as Error).message}`;
      }
    });
  }

  // ---- rendering ----

  render() {
    if (!this._plan) return html`<div class="loading">Loading…</div>`;
    return html`
      <div class="top">
        <div class="levels">
          ${this.narrow ? html`<ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>` : nothing}
          ${this._plan.levels.map(
            (level) =>
              html`<button
                class="chip ${level.id === this.level.id ? "on" : ""}"
                @click=${() => {
                  this._levelId = level.id;
                  this._selection = undefined;
                  this._draft = [];
                  this.fit();
                  if (this._walks) this.loadWalks(this._walkHours);
                }}
              >
                ${level.name}
              </button>`,
          )}
          <button
            class="chip ghost"
            title="Add level"
            @click=${() => {
              const level = emptyLevel(`Level ${this._plan!.levels.length + 1}`);
              this.change(() => this._plan!.levels.push(level));
              this._levelId = level.id;
            }}
          >
            +
          </button>
          <label class="switch" title="Show or hide the garden around the house">
            <input
              type="checkbox"
              .checked=${this._garden}
              @change=${() => {
                this._garden = !this._garden;
                const item = this.selectedItem();
                if (!this._garden && item && GARDEN_TYPES.includes(item.type)) this._selection = undefined;
                this.fit();
              }}
            />
            <span class="track"><span class="knob"></span></span>
            Garden
          </label>
          <label class="switch" title="Show live states: lights, water, mower, temperatures">
            <input type="checkbox" .checked=${this._live} @change=${() => (this._live = !this._live)} />
            <span class="track"><span class="knob"></span></span>
            Live
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked ? "on" : ""}
            title=${this._locked ? "Walls, doors, windows, rooms and objects stay where they are. Click to unlock." : "Lock walls, doors, windows, rooms and objects where they are"}
            @click=${() => {
              this._locked = !this._locked;
              store(LOCK_KEY, this._locked);
              if (this._locked && LAYOUT_TOOLS.includes(this._tool)) this.cancelTool();
            }}
          >
            ${this._locked ? "🔒" : "🔓"} Layout
          </button>
          <button class=${this._guide ? "on" : ""} @click=${() => (this._guide = !this._guide)} title="How to draw the plan and what every part does">
            Guide
          </button>
          <button @click=${() => this.undo()} ?disabled=${!this._history.length} title="Undo (Ctrl+Z)">Undo</button>
          <button class="primary" @click=${() => this.save()} ?disabled=${!this.dirty || this._saving}>
            ${this.dirty ? "Save" : "Saved"}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide ? html`<floorcast-guide class="guide"></floorcast-guide>` : nothing}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${this.renderBigImage()} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title="Zoom in" @click=${() => this.zoom(1 / 1.3)}>+</button>
            <button title="Zoom out" @click=${() => this.zoom(1.3)}>−</button>
            <button title="Fit the plan and centre it" @click=${() => this.fit()}>⌖</button>
          </div>
        </div>
        <aside ?hidden=${this._guide}>${this.renderPanel()}</aside>
      </div>
    `;
  }

  private cancelTool(): void {
    this._tool = "select";
    this._draft = [];
    this._message = "";
  }

  /** Starts a tool in its tab, from the palette or its key. */
  private startTool(tool: Tool): void {
    if (this._locked && LAYOUT_TOOLS.includes(tool)) {
      this.notify("The layout is locked");
      return;
    }
    const mode = TOOL_MODE.get(tool);
    if (mode && mode !== this._mode) this.setMode(mode);
    this._tool = tool;
    this._draft = [];
    this._message = "";
    this._selection = undefined;
  }



  /** A plan with nothing drawn yet: on no level a wall, room, object or device. */
  private get emptyPlan(): boolean {
    return this._plan!.levels.every((l) => !l.walls.length && !l.rooms.length && !l.items.length && !(l.devices ?? []).length);
  }

  /** The start of an empty plan: the example house to look around in, a plan file, or a clean sheet. */
  private renderStart() {
    if (!this.emptyPlan || this._startClosed || this._guide) return nothing;
    return html`<div class="start">
      <h2>${t("Start your plan")}</h2>
      <button class="primary" @click=${() => this.loadExample()}>
        <b>${t("Load the example house")}</b>
        <span>${t("A small house with a garden and every kind of device, to see what FloorCast does. Delete everything in Settings when done.")}</span>
      </button>
      <label class="button">
        <b>${t("Import a plan file")}</b>
        <span>${t("A plan exported from FloorCast before.")}</span>
        <input type="file" accept="application/json,.json" hidden @change=${this.importPlan} />
      </label>
      <button
        @click=${() => {
          this._startClosed = true;
          this.setMode("plan");
          this.startTool("wall");
        }}
      >
        <b>${t("Draw from scratch")}</b>
        <span>${t("Start with the outer walls; the Guide shows every step.")}</span>
      </button>
    </div>`;
  }

  /** The example house in place of the empty plan; its entities are invented, so it shows no live states. */
  private loadExample(): void {
    const before = this.snapshot();
    this.setPlan(structuredClone(examplePlan) as Plan, false);
    this.remember(before);
    this.notify(t("The example house is loaded. Save to keep it."));
  }

  /** Delete everything: one empty level instead of the whole plan, after the word is typed. */
  private wipePlan(): void {
    const level = emptyLevel(t("Ground floor"));
    this.change(() => (this._plan = { levels: [level] }));
    this._levelId = level.id;
    this._selection = undefined;
    this._wipeText = "";
    this._startClosed = false;
    this.notify(t("The plan is empty. Save to keep it, or Undo."));
    this.fit();
  }

  /** While a tool places something: what a click does, and how to stop. */
  /** A device left off the plan by the Devices layer; the tab that edits it always shows it. */
  private hiddenDevice(device: Device): boolean {
    return this._hidden.has("devices") && !this.editable({ kind: "device", id: device.id });
  }

  private renderPlacing() {
    if (this._tool === "select" || this._guide) return nothing;
    const label = TOOL_NAMES[this._tool] ?? this._tool;
    return html`<div class="placing-bar">
      <b>${label}</b><span>${HINTS[this._tool]}</span>
      <button @click=${() => this.cancelTool()}>Cancel (Esc)</button>
    </div>`;
  }

  private renderToast() {
    if (!this._toast) return nothing;
    return html`<div class="toast">
      <span>${this._toast}</span>
      <button
        @click=${() => {
          this.undo();
          this._toast = undefined;
        }}
      >
        Undo
      </button>
    </div>`;
  }

  /** Things of all levels whose name, entity or kind holds every word of the search. */
  private findResults(): { label: string; detail: string; level: Level; s: Selection; at: Point }[] {
    const words = this._find.toLowerCase().split(/\s+/).filter(Boolean);
    if (!words.length) return [];
    const results: { label: string; detail: string; level: Level; s: Selection; at: Point; text: string }[] = [];
    const name = (entity?: string | null) => (entity ? String(this.hass.states[entity]?.attributes.friendly_name ?? "") : "");
    for (const level of this._plan!.levels) {
      for (const room of level.rooms)
        results.push({ label: room.name, detail: `Room · ${level.name}`, level, s: { kind: "room", id: room.id }, at: centroid(room.points), text: `room ${room.name} ${room.area ?? ""}` });
      for (const device of level.devices ?? []) {
        const kind = device.kind === "sensor" && device.sensorType === "alarm" ? "Alarm" : DEVICE_LABELS[device.kind];
        results.push({
          label: device.label || name(device.entity) || device.entity || kind,
          detail: `${kind} · ${device.entity ?? device.source ?? "no entity"} · ${level.name}`,
          level,
          s: { kind: "device", id: device.id },
          at: device.at,
          text: `${kind} ${device.kind} ${device.label ?? ""} ${device.entity ?? ""} ${name(device.entity)} ${device.source ?? ""}`,
        });
      }
      for (const opening of level.openings) {
        const wall = level.walls.find((w) => w.id === opening.wall);
        if (!wall) continue;
        const kind = OPENING_NAMES[opening.type];
        results.push({
          label: name(opening.cover) || name(opening.lock) || name(opening.contact) || kind,
          detail: `${kind} · ${[opening.contact, opening.cover, opening.lock].filter(Boolean).join(", ") || "no sensor"} · ${level.name}`,
          level,
          s: { kind: "opening", id: opening.id },
          at: pointOnWall(wall, opening.at),
          text: `${kind} ${opening.contact ?? ""} ${opening.cover ?? ""} ${opening.lock ?? ""} ${name(opening.contact)} ${name(opening.cover)} ${name(opening.lock)}`,
        });
      }
      for (const zone of level.zones ?? [])
        results.push({ label: zone.name, detail: `Zone · ${level.name}`, level, s: { kind: "zone", id: zone.id }, at: centroid(zone.points), text: `zone ${zone.name} ${zone.kind}` });
      for (const item of level.items) {
        const at = item.center ?? centroid(itemPoints(item));
        results.push({ label: item.name || ITEM_LABELS[item.type], detail: `Object · ${level.name}`, level, s: { kind: "item", id: item.id }, at, text: `object ${ITEM_LABELS[item.type]} ${item.type} ${item.name ?? ""}` });
      }
    }
    return results.filter((r) => words.every((w) => r.text.toLowerCase().includes(w))).slice(0, 12);
  }

  private goTo(result: { level: Level; s: Selection; at: Point }): void {
    this._find = "";
    if (result.level.id !== this.level.id) {
      this._levelId = result.level.id;
      this._draft = [];
    }
    this.setMode(this.modeFor(result.s));
    this.pick(result.s, result.at);
  }

  private renderFind() {
    const results = this.findResults();
    return html`<div class="find-box">
      <input
        class="find"
        type="search"
        placeholder="Find (/)"
        .value=${this._find}
        @input=${(e: Event) => (this._find = (e.target as HTMLInputElement).value)}
        @keydown=${(e: KeyboardEvent) => {
          if (e.key === "Enter" && results[0]) this.goTo(results[0]);
          if (e.key === "Escape") this._find = "";
        }}
      />
      ${this._find.trim()
        ? html`<div class="find-results">
            ${results.length
              ? results.map(
                  (r) => html`<button @click=${() => this.goTo(r)}>
                    <span>${r.label}</span><em>${r.detail}</em>
                  </button>`,
                )
              : html`<p class="muted">Nothing found.</p>`}
          </div>`
        : nothing}
    </div>`;
  }

  private renderLayers() {
    const layer = (key: Layer, label: string) => html`<label class="check">
      <input
        type="checkbox"
        .checked=${!this._hidden.has(key)}
        @change=${() => {
          const hidden = new Set(this._hidden);
          if (hidden.has(key)) hidden.delete(key);
          else hidden.add(key);
          this._hidden = hidden;
          storeList(LAYERS_KEY, [...hidden]);
        }}
      />
      ${label}
    </label>`;
    return html`<div class="layers-box">
      <button class=${this._hidden.size ? "on" : ""} @click=${() => (this._layersOpen = !this._layersOpen)} title="Show or hide parts of the plan">
        Layers ▾
      </button>
      ${this._layersOpen
        ? html`<div class="layers-menu">
            ${layer("devices", "Devices")} ${layer("zones", "Zones")} ${layer("names", "Room names")}
            <p class="muted">Hidden parts cannot be clicked.</p>
          </div>`
        : nothing}
    </div>`;
  }

  private renderCanvas() {
    const v = this._view;
    const level = this.level;
    const px = this.pixel();
    return html`<svg
      class="plan mode-${this._mode} ${this._tool !== "select" ? "placing" : ""}"
      viewBox="${v.x} ${v.y} ${v.w} ${v.h}"
      @pointerdown=${this.onDown}
      @pointermove=${this.onMove}
      @pointerup=${this.onUp}
      @pointercancel=${this.onUp}
      @dblclick=${this.onDouble}
      @wheel=${this.onWheel}
      @contextmenu=${(e: Event) => {
        e.preventDefault();
        this._draft = [];
      }}
    >
      ${PLAN_DEFS}
      <defs>
        <pattern id="fc-grid" patternUnits="userSpaceOnUse" width="1" height="1">
          <path d="M1 0H0V1" fill="none" class="grid"></path>
        </pattern>
      </defs>
      <rect x=${v.x} y=${v.y} width=${v.w} height=${v.h} fill="url(#fc-grid)"></rect>
      ${renderLevel(
        this.shown,
        this._live ? this.hass.states : undefined,
        planRadius(this._plan),
        this._live ? this.liveSprays() : nothing,
      )}
      ${this._groundPreview.size ? this._groundFeed.render(this.shown.id, undefined, this._groundPreview) : nothing}
      ${this._live ? renderGlows(this.shown, this.hass.states, "editor") : nothing}
      ${this._live ? renderScreenGlows(this.shown, this.hass.states, "editor") : nothing}
      ${this._live ? renderOpeningLabels(this.shown, this.hass.states, px * 10) : nothing}
      ${this.shown.openings
        .filter((o) => o.lock)
        .map((o) => {
          const wall = this.shown.walls.find((w) => w.id === o.wall);
          return wall ? renderLock(lockSpot(wall, o, px * 14), this._live ? this.hass.states[o.lock!]?.state : "locked", px * 14) : nothing;
        })}
      ${this._hidden.has("names")
        ? nothing
        : this.shown.rooms.map((room) => {
            const [cx, cy] = centroid(room.points);
            return room.stairs ? nothing : svg`<text class="fc-label" x=${cx} y=${cy}>${room.name}</text>`;
          })}
      ${this._mode === "people"
        ? (this.shown.devices ?? [])
            .filter((d) => d.kind === "radar" || (d.kind === "camera" && !!d.frigate))
            .map((d) => svg`<path class="radar-range ${d.kind}" d=${d.kind === "radar" ? radarView(d) : cameraView(d)}></path>`)
        : nothing}
      ${(this._mode === "people" || !this._hidden.has("zones") ? (this.shown.zones ?? []) : []).map((zone) => {
        const d = zone.points.map((q, i) => `${i ? "L" : "M"}${q[0]} ${q[1]}`).join("") + "Z";
        const [cx, cy] = centroid(zone.points);
        return svg`<g data-zone=${zone.id} class="zone ${zone.kind}">
          <path class="area" d=${d}></path>
          <path class="edge" stroke-width=${px * 10} d=${d}></path>
          <text class="zone-label" x=${cx} y=${cy} font-size=${px * 11}>${zone.name}</text>
        </g>`;
      })}
      ${(this.shown.devices ?? []).filter((device) => !this.hiddenDevice(device)).map(
        (device) => svg`<g class="kind kind-${device.kind}">${
          device.kind === "radar"
            ? svg`<g data-device=${device.id} class="camera-device">
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 9}></circle>
                ${renderRadarIcon(device, px * 5)}
                ${this._live && this.showsRawTargets(device) ? radarTargets(device, this.hass.states).map((person) => renderPerson(person, this._mode === "people" ? "raw" : "seen")) : nothing}
              </g>`
            : device.kind === "camera"
            ? svg`<g data-device=${device.id} class="camera-device">
                ${renderCameraGlow(device, `editor-camera-${device.id}`, this._live && !!device.detection && this.hass.states[device.detection]?.state === "on")}
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 9}></circle>
                ${renderCameraIcon(device, px * 5)}
              </g>`
            : device.kind === "vacuum"
            ? svg`<g data-device=${device.id} class="mower-device">
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 9}></circle>
                ${renderVacuumMarker(device.at, Math.max(1, (px * 9) / 0.175))}
              </g>`
            : device.kind === "mower"
            ? this.renderMowerInEditor(device, px)
            : device.kind === "sprinkler"
            ? svg`<g data-device=${device.id} class="nozzle ${device.entity ? "" : "unset"}">
                <path class="area" d=${sprinklerArea(device)}></path>
                <circle cx=${device.at[0]} cy=${device.at[1]} r=${px * 6}></circle>
              </g>`
            : device.kind === "screen"
            ? svg`<g data-device=${device.id} class="sensor-device">
                ${renderScreen(device, this._live && isPowered(device.entity ? this.hass.states[device.entity]?.state : undefined))}
                <path class="hit-line" stroke-width=${px * 14}
                  d="M${device.at[0]} ${device.at[1]}L${(device.to ?? device.at)[0]} ${(device.to ?? device.at)[1]}"></path>
              </g>`
            : device.kind === "indicator"
            ? svg`<g data-device=${device.id} class="sensor-device">
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 10}></circle>
                ${(() => {
                  const stateObj = device.entity ? this.hass.states[device.entity] : undefined;
                  const shown = indicatorState(device, this._live ? stateObj : undefined);
                  const label = device.label || String(stateObj?.attributes.friendly_name ?? device.entity ?? "Indicator");
                  return renderIndicator(device.at, label, shown.text, shown.running, px * 9);
                })()}
              </g>`
            : device.kind === "sensor" && device.sensorType === "alarm"
            ? svg`<g data-device=${device.id} class="sensor-device">
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 12}></circle>
                ${(() => {
                  const alarm = alarmState(device.entity, device.entity ? this.hass.states[device.entity] : undefined);
                  return renderAlarm(device.at, alarm.kind, this._live && alarm.active, !device.entity || alarm.unknown, px * 14);
                })()}
              </g>`
            : device.kind === "sensor"
            ? svg`<g data-device=${device.id} class="sensor-device">
                <circle class="hit" cx=${device.at[0]} cy=${device.at[1]} r=${px * 12}></circle>
                ${renderSensor(
                  device.at,
                  device.label,
                  (this._live && device.entity ? readingText(this.hass.states[device.entity], device.main) : undefined) ??
                    (device.sensorType === "temperature" ? "–°" : device.sensorType === "humidity" ? "–%" : "Sensor"),
                  this._live
                    ? (device.secondary ?? [])
                        .map((value) => {
                          const text = value.entity ? readingText(this.hass.states[value.entity], value) : undefined;
                          return text && value.label ? `${value.label} ${text}` : text;
                        })
                        .filter((text): text is string => !!text)
                    : [],
                  readingSizes(1 / px).value,
                  readingSizes(1 / px).sub,
                  !device.entity,
                )}
              </g>`
            : device.to
            ? svg`<g data-device=${device.id} class="lamp ${device.entity ? "" : "unset"}">
                <path class="line" stroke-width=${px * 7} d="M${device.at[0]} ${device.at[1]}L${device.to[0]} ${device.to[1]}"></path>
              </g>`
            : svg`<g data-device=${device.id} class="lamp ${device.entity ? "" : "unset"} ${this._live && device.entity && this.hass.states[device.entity]?.state === "on" ? "on" : ""}">
                <circle cx=${device.at[0]} cy=${device.at[1]} r=${px * 8}></circle>
                <circle class="core" cx=${device.at[0]} cy=${device.at[1]} r=${px * 3.5}></circle>
              </g>`
        }</g>`,
      )}
      ${this._mode === "people" && this._walks
        ? this._walks.map((walk) => svg`<polyline class="walk" points=${walk.map((p) => `${p[0]},${p[1]}`).join(" ")}></polyline>`)
        : nothing}
      ${this.trackedPeople()}
      ${this.renderSelection(px)} ${this.renderDraft(px)}
    </svg>`;
  }

  /**
   * Raw targets of the radars: in People those of every radar, or only of the selected one; none while a camera
   * or zone is selected there, which shows people after the rules.
   */
  private showsRawTargets(radar: Device): boolean {
    if (this._mode !== "people") return true;
    if (this._selection?.kind === "zone") return false;
    const selected = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
    if (selected?.kind === "camera") return false;
    return selected?.kind !== "radar" || selected.id === radar.id;
  }

  /**
   * People after the rules, in People. With a radar or camera selected, only the people it sees, over the raw
   * detections of that camera in grey.
   */
  private trackedPeople() {
    if (!this._live || !this._people || this._mode !== "people") return nothing;
    const selected = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
    const name = selected?.kind === "radar" ? selected.source : selected?.kind === "camera" ? selected.frigate : undefined;
    const raw = selected?.kind === "camera" && selected.frigate ? (this._raw[this.level.id]?.[selected.frigate] ?? []) : [];
    const people = (this._people[this.level.id] ?? []).filter((person) => !name || !!person.sources?.includes(name));
    return svg`${raw.map((p) => renderPerson(p, "raw"))}
      ${people.map((person) => renderPerson([person.x, person.y], `${person.status} ${person.source ?? ""}`))}`;
  }

  private renderDraft(px: number) {
    const cursor = this._cursor;
    if (this._drag?.kind === "create-light") {
      const { start, current } = this._drag;
      return svg`<path class="draft-wall" stroke-width=${px * 7} d="M${start[0]} ${start[1]}L${current[0]} ${current[1]}"></path>`;
    }
    if (this._drag?.kind === "create-room") {
      const { start, current } = this._drag;
      return svg`<rect class="draft" x=${Math.min(start[0], current[0])} y=${Math.min(start[1], current[1])}
        width=${Math.abs(current[0] - start[0])} height=${Math.abs(current[1] - start[1])}></rect>`;
    }
    if (this._drag?.kind === "create-item") {
      const { start, current } = this._drag;
      if (CIRCLE_TYPES.includes(this._itemType)) {
        return svg`<circle class="draft" cx=${start[0]} cy=${start[1]} r=${dist(start, current)}></circle>`;
      }
      return svg`<rect class="draft" x=${Math.min(start[0], current[0])} y=${Math.min(start[1], current[1])}
        width=${Math.abs(current[0] - start[0])} height=${Math.abs(current[1] - start[1])}></rect>`;
    }
    const area = this._tool === "wall" || this._tool === "room" || this._tool === "zone";
    const points = cursor && area ? [...this._draft, cursor] : this._draft;
    const cursorMark = cursor && this._tool !== "select" ? svg`<circle class="cursor" cx=${cursor[0]} cy=${cursor[1]} r=${px * 4}></circle>` : nothing;
    if (points.length < 2) return cursorMark;
    const d = points.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("");
    const length = this._draft.length && cursor ? dist(this._draft.at(-1)!, cursor) : 0;
    const label = this._typed ? `${this._typed} m ⏎` : `${length.toFixed(2)} m`;
    return svg`
      <path class=${this._tool === "wall" ? "draft-wall" : "draft"} stroke-width=${this._tool === "wall" ? this.wallType(this._wallType).t : px * 2} d=${d}></path>
      ${cursorMark}
      ${length || this._typed
        ? svg`<text class="measure ${this._typed ? "typed" : ""}" x=${cursor![0] + px * 10} y=${cursor![1] - px * 10} font-size=${px * 13}>${label}</text>`
        : nothing}
    `;
  }

  private watering(entity: string | null | undefined): boolean {
    const state = entity ? this.hass.states[entity]?.state : undefined;
    return state === "open" || state === "opening" || state === "on";
  }

  private liveSprays() {
    return (this.shown.devices ?? [])
      .filter((device) => device.kind === "sprinkler")
      .map((device) => renderSpray(device, this.watering(device.entity)));
  }

  /** State of an entity as a short line, and a button to try it, for checking a device is the right one. */
  private stateLine(entity: string | null | undefined) {
    if (!entity) return nothing;
    const stateObj = this.hass.states[entity];
    if (!stateObj) return html`<p class="muted">${entity} does not exist.</p>`;
    const domain = entity.split(".")[0];
    const brightness = stateObj.attributes.brightness;
    const detail = brightness && stateObj.state === "on" ? ` · ${Math.round((Number(brightness) / 255) * 100)}%` : "";
    const unit = stateObj.attributes.unit_of_measurement ? ` ${stateObj.attributes.unit_of_measurement}` : "";
    const name = stateObj.attributes.friendly_name ?? entity;
    let action: unknown = nothing;
    if (domain === "light" || domain === "switch") {
      action = html`<button class="small" @click=${() => this.hass.callService("homeassistant", "toggle", { entity_id: entity })}>
        ${stateObj.state === "on" ? "Turn off" : "Turn on"}
      </button>`;
    } else if (domain === "valve") {
      const open = stateObj.state === "open" || stateObj.state === "opening";
      action = html`<button
        class="small"
        @click=${() => {
          if (!open && !confirm(`Open ${name}? Water starts flowing.`)) return;
          this.hass.callService("valve", open ? "close_valve" : "open_valve", { entity_id: entity });
        }}
      >
        ${open ? "Close" : "Open"}
      </button>`;
    }
    return html`<div class="state-line">
      <span><b>${name}</b>: ${stateObj.state}${unit}${detail}</span>
      ${action}
    </div>`;
  }

  /** The mower where it is now, or the corner of its map until it reports a position. */
  private renderMowerInEditor(device: Device, px: number) {
    const place = mowerPlace(device, device.map ? this.hass.states[device.map]?.attributes : undefined);
    const state = device.entity ? this.hass.states[device.entity]?.state : undefined;
    return svg`<g data-device=${device.id} class="mower-device">
      <circle class="anchor" cx=${device.at[0]} cy=${device.at[1]} r=${px * 7}></circle>
      ${place ? renderMower(place, state) : nothing}
    </g>`;
  }

  private renderSelection(px: number) {
    const s = this._selection;
    if (!s) return nothing;
    const r = px * 6;
    if (s.kind === "device") {
      const device = this.findDevice(s.id);
      if (!device) return nothing;
      if (device.kind === "radar") {
        const end = bearingPoint(device.at, device.heading ?? 0, device.radius ?? DEFAULT_RADAR_RANGE);
        return svg`<path class="selected-area" d=${radarView(device)}></path>
          <circle class="handle" data-handle="aim" cx=${end[0]} cy=${end[1]} r=${r}></circle>`;
      }
      if (device.kind === "camera") {
        const end = bearingPoint(device.at, device.heading ?? 0, device.radius ?? DEFAULT_CAMERA_RANGE);
        const matrix = homography(device.calibration ?? []);
        // Recent paths through the calibration; a good one follows the lawn and the paving.
        const paths = matrix
          ? (this._paths.get(device.id) ?? []).map((path) =>
              path.map((q) => imageToPlan(matrix, q)).filter((q): q is Point => !!q),
            )
          : [];
        return svg`<path class="selected-area" d=${cameraView(device)}></path>
          ${paths.map((path) => svg`<polyline class="seen-path" stroke-width=${px * 3} points=${path.map((q) => `${q[0]},${q[1]}`).join(" ")}></polyline>`)}
          ${(device.calibration ?? []).map(
            (pair, i) => svg`<g class="calibration-mark"><circle cx=${pair.plan[0]} cy=${pair.plan[1]} r=${px * 8}></circle>
              <text x=${pair.plan[0]} y=${pair.plan[1]} font-size=${px * 10}>${i + 1}</text></g>`,
          )}
          <circle class="handle" data-handle="aim" cx=${end[0]} cy=${end[1]} r=${r}></circle>`;
      }
      if (device.kind === "mower") {
        if (!device.projection) return nothing;
        const p = device.projection;
        const image = this._mapImages.get(device.id);
        const corner = mapToPlan(device, [device.mirror ? 0 : p.width, 0]);
        const outline = [
          [0, 0],
          [p.width, 0],
          [p.width, p.height],
          [0, p.height],
        ].map((q) => mapToPlan(device, q as Point));
        // Camera spots of the mower where they lie from where it stands now (experimental).
        const pose = this.mowerPose(device);
        const spots = pose ? (device.ground?.spots ?? []).map((spot) => aheadToPlan(spot.ahead, pose)) : [];
        return svg`
          ${image ? svg`<image class="mower-map" href=${image} width=${p.width} height=${p.height} transform=${mapTransform(device)}></image>` : nothing}
          <path class="selected-area" d=${outline.map((q, i) => `${i ? "L" : "M"}${q[0]} ${q[1]}`).join("") + "Z"}></path>
          <circle class="handle" data-handle="map-rotate" cx=${corner[0]} cy=${corner[1]} r=${r * 1.3}></circle>
          ${spots.map(
            (q, i) => svg`<g class="calibration-mark"><circle cx=${q[0]} cy=${q[1]} r=${px * 8}></circle>
              <text x=${q[0]} y=${q[1]} font-size=${px * 10}>${i + 1}</text></g>`,
          )}`;
      }
      if (device.kind === "sprinkler") {
        const reach = device.radius ?? DEFAULT_THROW;
        const arc = device.arc ?? 360;
        const start = bearingPoint(device.at, device.heading ?? 0, reach);
        const end = bearingPoint(device.at, (device.heading ?? 0) + arc, reach);
        return svg`<path class="selected-area" d=${sprinklerArea(device)}></path>
          <circle class="handle" data-handle="arc-end" data-index="0" cx=${start[0]} cy=${start[1]} r=${r}></circle>
          ${arc < 360 ? svg`<circle class="handle mid" data-handle="arc-end" data-index="1" cx=${end[0]} cy=${end[1]} r=${r}></circle>` : nothing}`;
      }
      if (device.kind === "screen" && device.to) {
        const area = screenLight(this.level, device);
        return svg`<path class="selected-area" d=${area.map((q, i) => `${i ? "L" : "M"}${q[0]} ${q[1]}`).join("") + "Z"}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${device.at[0]} cy=${device.at[1]} r=${r}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${device.to[0]} cy=${device.to[1]} r=${r}></circle>`;
      }
      if (device.to) {
        const d = `M${device.at[0]} ${device.at[1]}L${device.to[0]} ${device.to[1]}`;
        return svg`<path class="reach-line" stroke-width=${(device.radius ?? DEFAULT_GLOW) * 2} d=${d}></path>
          <circle class="handle" data-handle="device-end" data-index="0" cx=${device.at[0]} cy=${device.at[1]} r=${r}></circle>
          <circle class="handle" data-handle="device-end" data-index="1" cx=${device.to[0]} cy=${device.to[1]} r=${r}></circle>`;
      }
      return svg`<circle class="reach" cx=${device.at[0]} cy=${device.at[1]} r=${device.radius ?? DEFAULT_GLOW}></circle>
        <circle class="selected-area" cx=${device.at[0]} cy=${device.at[1]} r=${px * 11}></circle>`;
    }
    const handle = (p: Point, name: string, index?: number, cls = "handle") =>
      svg`<circle class=${cls} data-handle=${name} data-index=${index ?? nothing} cx=${p[0]} cy=${p[1]} r=${r}></circle>`;
    if (s.kind === "wall") {
      const wall = this.findWall(s.id);
      if (!wall) return nothing;
      return svg`<path class="selected" stroke-width=${wall.t} d="M${wall.a[0]} ${wall.a[1]}L${wall.b[0]} ${wall.b[1]}"></path>
        ${handle(wall.a, "wall-a")}${handle(wall.b, "wall-b")}`;
    }
    if (s.kind === "opening") {
      const opening = this.findOpening(s.id);
      const wall = opening && this.findWall(opening.wall);
      if (!opening || !wall) return nothing;
      const a = pointOnWall(wall, opening.at - opening.width / 2);
      const b = pointOnWall(wall, opening.at + opening.width / 2);
      return svg`<path class="selected" stroke-width=${wall.t} d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}"></path>
        ${handle(b, "opening-end")}`;
    }
    const points = this.selectedPoints();
    if (points) {
      const mids = points.map((p, i) => {
        const q = points[(i + 1) % points.length];
        return handle([(p[0] + q[0]) / 2, (p[1] + q[1]) / 2], "mid", i, "handle mid");
      });
      return svg`<path class="selected-area" d=${points.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("") + "Z"}></path>
        ${mids}${points.map((p, i) => handle(p, "vertex", i))}`;
    }
    const item = this.selectedItem();
    if (item?.rect) {
      const corners = rectCorners(item);
      return svg`<path class="selected-area" d=${corners.map((p, i) => `${i ? "L" : "M"}${p[0]} ${p[1]}`).join("") + "Z"}></path>
        ${corners.map((p, i) => handle(p, "corner", i))}`;
    }
    if (item?.center) {
      const radius = (item.diameter ?? 1) / 2;
      return svg`<circle class="selected-area" cx=${item.center[0]} cy=${item.center[1]} r=${radius}></circle>
        ${handle([item.center[0] + radius, item.center[1]], "radius")}`;
    }
    return nothing;
  }

  // ---- properties ----

  private renderPanel() {
    const tools = MODE_TOOLS[this._mode];
    return html`
      <nav class="tabs">
        ${MODES.map(
          ({ mode, label }) => html`<button class="tab ${mode === this._mode ? "on" : ""}" @click=${() => this.setMode(mode)}>${label}</button>`,
        )}
      </nav>
      ${tools.length
        ? html`<section class="add-section">
            <h4>Add</h4>
            <div class="palette">
              ${tools.map(([tool, label, key]) => {
                const locked = this._locked && LAYOUT_TOOLS.includes(tool);
                const on = this._tool === tool;
                return html`<button
                  class=${on ? "on" : ""}
                  ?disabled=${locked}
                  title=${locked ? "Unlock the layout to draw" : HINTS[tool]}
                  @click=${() => (on ? this.cancelTool() : this.startTool(tool))}
                >
                  <span>${label}</span><kbd>${key}</kbd>
                </button>`;
              })}
            </div>
            ${this.toolOptions() !== nothing ? html`<div class="tools">${this.toolOptions()}</div>` : nothing}
          </section>`
        : nothing}
      ${this._selection
        ? html`<button class="back" @click=${() => (this._selection = undefined)}>‹ ${MODES.find((m) => m.mode === this._mode)!.label}</button>
            ${this.renderProperties()}`
        : this.renderList()}
      ${this._message ? html`<p class="message">${this._message}</p>` : nothing}
    `;
  }

  /** Choices of the active drawing tool: wall type, light shape, kind of object. */
  private toolOptions() {
    if (this._tool === "wall")
      return html`<select @change=${(e: Event) => (this._wallType = (e.target as HTMLSelectElement).value)} title="Wall type">
        ${this.wallTypes.map(
          (type) => html`<option value=${type.id} ?selected=${type.id === this._wallType}>${type.name} ${(type.t * 100).toFixed(1)} cm</option>`,
        )}
      </select>`;
    if (this._tool === "light")
      return html`<select @change=${(e: Event) => (this._lightShape = (e.target as HTMLSelectElement).value as "point" | "line")}>
        <option value="point" ?selected=${this._lightShape === "point"}>Point (click)</option>
        <option value="line" ?selected=${this._lightShape === "line"}>Line (drag)</option>
      </select>`;
    if (this._tool === "item")
      return html`<select @change=${(e: Event) => (this._itemType = (e.target as HTMLSelectElement).value as ItemType)}>
        ${(Object.keys(ITEM_LABELS) as ItemType[]).map(
          (type) => html`<option value=${type} ?selected=${type === this._itemType}>${ITEM_LABELS[type]}</option>`,
        )}
      </select>`;
    return nothing;
  }

  /** Content of the tab when nothing is selected. */
  private renderList() {
    if (this._mode === "settings") return this.levelProperties();
    if (this._mode === "plan") return html`${this.levelsSection()} ${this.filterBox()} ${this.buildingList()} ${this.objectList()}`;
    if (this._mode === "devices") return this.deviceList();
    return html`${this.radarList()} ${this.cameraList()} ${this.zoneList()}`;
  }

  private filterBox() {
    return html`<input
      class="filter"
      type="search"
      placeholder="Filter"
      .value=${this._filter}
      @input=${(e: Event) => (this._filter = (e.target as HTMLInputElement).value)}
    />`;
  }

  private passesFilter(...texts: (string | null | undefined)[]): boolean {
    const wanted = this._filter.trim().toLowerCase();
    return !wanted || texts.some((text) => text?.toLowerCase().includes(wanted));
  }

  private listRow(label: string, detail: unknown, onPick: () => void, cls = "") {
    return html`<button class="list-row ${cls}" @click=${onPick}>
      <span>${label}</span><em>${detail}</em>
    </button>`;
  }

  private entityName(id: string | null | undefined): string | undefined {
    return id ? (this.hass.states[id]?.attributes.friendly_name ?? id) : undefined;
  }

  private shortState(id: string | null | undefined): string {
    if (!id) return "no entity";
    const stateObj = this.hass.states[id];
    if (!stateObj) return "missing";
    const unit = stateObj.attributes.unit_of_measurement;
    return unit ? `${stateObj.state} ${unit}` : stateObj.state;
  }

  private buildingList() {
    const level = this.shown;
    const rooms = level.rooms.filter((room) => this.passesFilter(room.name));
    return html`
      <p class="muted">
        ${level.walls.length} walls · ${level.openings.filter((o) => o.type === "door").length} doors ·
        ${level.openings.filter((o) => o.type === "window").length} windows. Click a wall, door or window on the plan to edit it.
      </p>
      <h3>Rooms</h3>
      ${rooms.map((room) =>
        this.listRow(
          room.name,
          roomThermometers(level, room)[0] ? this.shortState(roomThermometers(level, room)[0].entity) : room.stairs ? "stairs" : room.outdoor ? "outdoor" : "",
          () => this.pick({ kind: "room", id: room.id }, centroid(room.points)),
        ),
      )}
    `;
  }

  private objectList() {
    const items = this.shown.items.filter((item) => this.passesFilter(item.name, ITEM_LABELS[item.type]));
    const size = (item: Item) =>
      item.rect
        ? `${item.rect[2].toFixed(2)} × ${item.rect[3].toFixed(2)} m`
        : item.center
          ? `⌀ ${(item.diameter ?? 1).toFixed(2)} m`
          : "free shape";
    const centre = (item: Item): Point => {
      const b = levelBoundsOf(item);
      return [b.x + b.w / 2, b.y + b.h / 2];
    };
    return html`
      <h3>Garden and furniture</h3>
      ${items.map((item) =>
        this.listRow(item.name || ITEM_LABELS[item.type], size(item), () => this.pick({ kind: "item", id: item.id }, centre(item))),
      )}
      ${items.length ? nothing : html`<p class="muted">No objects. Choose Garden, furniture under Add and drag on the plan.</p>`}
    `;
  }

  /** Devices by the room they stand in, then those outside the rooms; a device without an entity is marked. */
  private deviceList() {
    const level = this.shown;
    const kindName = (device: Device) => (device.kind === "sensor" && device.sensorType === "alarm" ? "Alarm" : DEVICE_LABELS[device.kind]);
    const devices = (level.devices ?? []).filter(
      (device) => device.kind !== "radar" && this.passesFilter(kindName(device), device.entity, this.entityName(device.entity), device.label),
    );
    const byRoom = new Map<string, Device[]>();
    for (const device of devices) {
      const key = roomAt(level, deviceCentre(device))?.id ?? "";
      byRoom.set(key, [...(byRoom.get(key) ?? []), device]);
    }
    const unset = devices.filter((device) => !device.entity).length;
    const rows = (list: Device[]) =>
      list.map((device) =>
        this.listRow(
          this.entityName(device.entity) ?? device.label ?? `${kindName(device)} without entity`,
          device.entity ? `${kindName(device)} · ${this.shortState(device.entity)}` : kindName(device),
          () => this.pick({ kind: "device", id: device.id }, deviceCentre(device)),
          device.entity ? "" : "unset",
        ),
      );
    return html`
      ${this.filterBox()}
      ${unset ? html`<p class="muted warn">${unset} without an entity: they are marked below.</p>` : nothing}
      ${level.rooms
        .filter((room) => byRoom.has(room.id))
        .map(
          (room) => html`<h3 class="link" @click=${() => this.pick({ kind: "room", id: room.id }, centroid(room.points))}>${room.name}</h3>
            ${rows(byRoom.get(room.id)!)}`,
        )}
      ${byRoom.has("") ? html`<h3>Outside the rooms</h3>${rows(byRoom.get("")!)}` : nothing}
      ${devices.length ? nothing : html`<p class="muted">No devices. Choose one under Add and click on the plan, or link a room to its area.</p>`}
    `;
  }

  private radarList() {
    const radars = (this.shown.devices ?? []).filter((device) => device.kind === "radar");
    return html`
      <h3>Radars</h3>
      ${radars.map((radar) => {
        const seen = radarTargets(radar, this.hass.states).length;
        const online = !!radar.source && this.hass.states[`sensor.${radar.source}_target_1_x`]?.state !== "unavailable";
        return this.listRow(
          radar.source ?? "Radar without sensors",
          online ? `sees ${seen}` : "offline",
          () => this.pick({ kind: "device", id: radar.id }, radar.at),
          online ? "" : "unset",
        );
      })}
      ${radars.length ? nothing : html`<p class="muted">No radars on this level. Choose Radar under Add and click where one hangs.</p>`}
      ${radars.length ? this.trackingProperties("radar") : nothing}
      <p class="muted">
        Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and
        the people it sees. Zones work the same for radars and cameras.
      </p>
    `;
  }

  /** Cameras with their Frigate camera, calibration and the people they see now; the settings of camera tracking. */
  private cameraList() {
    const cameras = (this.shown.devices ?? []).filter((device) => device.kind === "camera");
    const people = this._people?.[this.level.id] ?? [];
    return html`
      <h3>Cameras</h3>
      ${cameras.map((camera) => {
        const spots = camera.calibration?.length ?? 0;
        const seen = people.filter((p) => p.camera && p.camera === camera.frigate).length;
        const detail = !camera.frigate ? "no Frigate camera" : spots < 4 ? `${spots} of 4 spots` : `sees ${seen}`;
        return this.listRow(
          this.entityName(camera.entity) ?? camera.frigate ?? "Camera without entity",
          detail,
          () => this.pick({ kind: "device", id: camera.id }, camera.at),
          camera.frigate && spots >= 4 ? "" : "unset",
        );
      })}
      ${cameras.length ? nothing : html`<p class="muted">No cameras on this level. Add one in Devices, then calibrate it here to count people.</p>`}
      ${cameras.some((camera) => camera.frigate && (camera.calibration?.length ?? 0) >= 4) ? this.trackingProperties("camera") : nothing}
      <p class="muted">
        Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a
        calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected
        camera also shows its raw detections in grey, before snapping into rooms and tracking.
      </p>
    `;
  }

  /** People counted in a room or zone now: the entity of the integration, or the people shown on the plan. */
  private countIn(id: string, points: Point[]): string {
    const entity = this.hass.states[`sensor.floorcast_${slug(`${this.level.id}_${id}`)}_count`];
    if (entity) return entity.state;
    const people = (this._people?.[this.level.id] ?? []).filter((p) => p.status !== "unconfirmed");
    return String(people.filter((p) => pointInPolygon([p.x, p.y], points)).length);
  }

  /** Rooms as the basic zones with their people, and the zones drawn on them. */
  private zoneList() {
    const level = this.shown;
    const zones = level.zones ?? [];
    const rooms = level.rooms.filter((room) => !room.stairs);
    return html`
      <h3>Rooms</h3>
      ${rooms.map((room) =>
        this.listRow(room.name, this.countIn(room.id, room.points), () => this.centreOn(centroid(room.points)), "people"),
      )}
      <h3>Where people walked</h3>
      <div class="row">
        <label class="check"
          ><input type="checkbox" .checked=${!!this._walks} @change=${(e: Event) => this.showWalks((e.target as HTMLInputElement).checked)} />
          Show</label
        >
        <select @change=${(e: Event) => this.loadWalks(Number((e.target as HTMLSelectElement).value))}>
          ${[1, 6, 24].map((hours) => html`<option value=${hours} ?selected=${hours === this._walkHours}>${hours} h</option>`)}
        </select>
        <button class="danger" @click=${() => this.clearWalks()}>Clear</button>
      </div>
      <h3>Zones</h3>
      ${zones.map((zone) =>
        this.listRow(
          zone.name,
          zone.kind === "count" ? this.countIn(zone.id, zone.points) : ZONE_LABELS[zone.kind].replace(/ \(.*\)$/, ""),
          () => this.pick({ kind: "zone", id: zone.id }, centroid(zone.points)),
          zone.kind === "count" ? "people" : "",
        ),
      )}
      ${zones.length ? nothing : html`<p class="muted">No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.</p>`}
      <p class="muted">
        Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules
        are the same for people seen by radars and by cameras.
      </p>
    `;
  }

  private showWalks(on: boolean): void {
    if (on) this.loadWalks(this._walkHours);
    else this._walks = undefined;
  }

  /** Walks of the chosen hours from the history the integration keeps. */
  private async loadWalks(hours: number): Promise<void> {
    this._walkHours = hours;
    try {
      const result = await this.hass.callWS<{ walks: Point[][] }>({ type: "floorcast/history/get", level: this.level.id, hours });
      this._walks = result.walks;
      this._message = result.walks.length ? "" : "Nobody walked here in that time.";
    } catch (err) {
      this._message = `History not read: ${(err as { message?: string }).message ?? err}`;
    }
  }

  private async clearWalks(): Promise<void> {
    if (!confirm("Clear the history of where people walked on every level?")) return;
    await this.hass.callWS({ type: "floorcast/history/clear" });
    if (this._walks) this._walks = [];
  }

  private centreOn(at: Point): void {
    const v = this._view;
    this._view = { ...v, x: at[0] - v.w / 2, y: at[1] - v.h / 2 };
  }

  private renderProperties() {
    const s = this._selection;
    const body =
      s?.kind === "wall"
        ? this.wallProperties(this.findWall(s.id))
        : s?.kind === "opening"
          ? this.openingProperties(this.findOpening(s.id))
          : s?.kind === "room"
            ? this.roomProperties(this.findRoom(s.id))
            : s?.kind === "zone"
            ? this.zoneProperties(this.findZone(s.id))
            : s?.kind === "item"
              ? this.itemProperties(this.findItem(s.id))
              : s?.kind === "device"
                ? this.deviceProperties(this.findDevice(s.id))
                : this.levelProperties();
    return html`${this.breadcrumb()} ${body}`;
  }

  private number(label: string, value: number, apply: (v: number) => void, step = 0.05, unit = "m") {
    return html`<label class="field">
      <span>${label}</span>
      <input
        type="number"
        step=${step}
        .value=${String(fix(value))}
        @change=${(e: Event) => {
          const v = Number((e.target as HTMLInputElement).value);
          if (Number.isFinite(v)) this.change(() => apply(v));
        }}
      />
      <em>${unit}</em>
    </label>`;
  }

  private text(label: string, value: string, apply: (v: string) => void) {
    return html`<label class="field wide">
      <span>${label}</span>
      <input type="text" .value=${value} @change=${(e: Event) => this.change(() => apply((e.target as HTMLInputElement).value))} />
    </label>`;
  }

  /**
   * The end of every form: the position of a device typed in metres, then Duplicate and Delete. Delete asks for a
   * second press, so a stray click removes nothing.
   */
  private deleteButton() {
    const s = this._selection;
    const device = s?.kind === "device" ? this.findDevice(s.id) : undefined;
    const locked = this.lockedKind(s);
    return html`
      ${device ? this.positionFields(device) : nothing}
      <div class="row end">
        <button title="Copy (Ctrl+D)" ?disabled=${locked} @click=${() => this.duplicateSelection()}>Duplicate</button>
        <button
          class="danger ${this._confirmDelete ? "armed" : ""}"
          ?disabled=${locked}
          title=${locked ? "Unlock the layout to delete" : "Delete (Del)"}
          @click=${() => {
            if (!this._confirmDelete) {
              this._confirmDelete = true;
              window.clearTimeout(this._confirmTimer);
              this._confirmTimer = window.setTimeout(() => (this._confirmDelete = false), 3000);
              return;
            }
            this._confirmDelete = false;
            this.deleteSelection();
          }}
        >
          ${this._confirmDelete ? "Click again to delete" : "Delete"}
        </button>
      </div>
    `;
  }

  /** Where a device stands, typed in metres; a strip or screen moves with both its ends. */
  private positionFields(device: Device) {
    const move = (axis: 0 | 1, value: number) => {
      const delta = value - device.at[axis];
      device.at = axis === 0 ? [fix(value), device.at[1]] : [device.at[0], fix(value)];
      if (device.to) device.to = axis === 0 ? [fix(device.to[0] + delta), device.to[1]] : [device.to[0], fix(device.to[1] + delta)];
    };
    return html`<details class="settings">
      <summary>Position</summary>
      ${this.number("x (east)", device.at[0], (v) => move(0, v))} ${this.number("y (south)", device.at[1], (v) => move(1, v))}
    </details>`;
  }

  /** Where the selection is: the level, the room it stands in, and what it is; the room can be picked from here. */
  private breadcrumb() {
    const s = this._selection;
    if (!s) return nothing;
    const level = this.level;
    let at: Point | undefined;
    let what = "";
    if (s.kind === "device") {
      const device = this.findDevice(s.id);
      at = device && deviceCentre(device);
      what = device ? (device.kind === "sensor" && device.sensorType === "alarm" ? "Alarm" : DEVICE_LABELS[device.kind]) : "";
    } else if (s.kind === "opening") {
      const opening = this.findOpening(s.id);
      const wall = opening && this.findWall(opening.wall);
      at = opening && wall ? pointOnWall(wall, opening.at) : undefined;
      what = opening ? OPENING_NAMES[opening.type] : "";
    } else if (s.kind === "item") {
      const item = this.findItem(s.id);
      at = item ? (item.center ?? centroid(itemPoints(item))) : undefined;
      what = item ? item.name || ITEM_LABELS[item.type] : "";
    } else if (s.kind === "wall") what = "Wall";
    else if (s.kind === "zone") what = "Zone";
    const room = s.kind === "room" ? this.findRoom(s.id) : at ? roomAt(level, at) : undefined;
    return html`<nav class="crumbs">
      <span>${level.name}</span>
      ${room
        ? html`› ${s.kind === "room"
              ? html`<span>${room.name}</span>`
              : html`<a @click=${() => this.select({ kind: "room", id: room.id })}>${room.name}</a>`}`
        : nothing}
      ${what ? html`› <span>${what}</span>` : nothing}
    </nav>`;
  }

  /** The levels of the plan, in the Plan tab: their names, order, floor of Home Assistant, adding and deleting. */
  private levelsSection() {
    const levels = this._plan!.levels;
    if (this._registry === undefined) queueMicrotask(() => this.loadRegistry());
    const registry = typeof this._registry === "object" ? this._registry : undefined;
    const missing = registry?.floors.filter((floor) => !levels.some((level) => level.floor === floor.id)) ?? [];
    const addLevel = (name: string, floor?: string) => {
      const level = emptyLevel(name);
      if (floor) level.floor = floor;
      this.change(() => this._plan!.levels.push(level));
      this._levelId = level.id;
      this.fit();
    };
    const moveLevel = (index: number, by: number) =>
      this.change(() => {
        const list = [...levels];
        const [level] = list.splice(index, 1);
        list.splice(index + by, 0, level);
        this._plan!.levels = list;
      });
    return html`
      <h3>Levels</h3>
      ${levels.map(
        (level, i) => html`<div class="level-row ${level.id === this.level.id ? "current" : ""}">
          <input
            type="text"
            .value=${level.name}
            @change=${(e: Event) => this.change(() => (level.name = (e.target as HTMLInputElement).value.trim() || level.name))}
          />
          <button class="small" title="Up" ?disabled=${i === 0} @click=${() => moveLevel(i, -1)}>↑</button>
          <button class="small" title="Down" ?disabled=${i === levels.length - 1} @click=${() => moveLevel(i, 1)}>↓</button>
          <button
            class="small danger ${this._deleteLevel === level.id ? "armed" : ""}"
            title=${levels.length < 2 ? "The plan needs one level" : "Delete the level with everything on it"}
            ?disabled=${levels.length < 2}
            @click=${() => {
              if (this._deleteLevel !== level.id) {
                this._deleteLevel = level.id;
                window.setTimeout(() => (this._deleteLevel = undefined), 3000);
                return;
              }
              this._deleteLevel = undefined;
              this.change(() => (this._plan!.levels = levels.filter((l) => l.id !== level.id)));
              if (this._levelId === level.id) this._levelId = this._plan!.levels[0].id;
              this.notify(`Level ${level.name} deleted`);
              this.fit();
            }}
          >
            ${this._deleteLevel === level.id ? "Delete?" : "×"}
          </button>
          <em class="muted">${level.rooms.length} rooms · ${(level.devices ?? []).length} devices</em>
          ${registry?.floors.length
            ? html`<select
                class="floor"
                title="The floor of Home Assistant this level is"
                @change=${(e: Event) =>
                  this.change(() => {
                    const id = (e.target as HTMLSelectElement).value || null;
                    const floor = registry.floors.find((f) => f.id === id);
                    level.floor = id;
                    // A level still named as it was added takes the name of its floor.
                    if (floor && /^Level \d+$/.test(level.name)) level.name = floor.name;
                  })}
              >
                <option value="" ?selected=${!level.floor}>No floor of Home Assistant</option>
                ${registry.floors.map((f) => html`<option value=${f.id} ?selected=${level.floor === f.id}>Floor: ${f.name}</option>`)}
              </select>`
            : nothing}
        </div>`,
      )}
      <div class="row">
        <button @click=${() => addLevel(`Level ${levels.length + 1}`)}>Add level</button>
        ${missing.map((floor) => html`<button title="A level for this floor of Home Assistant" @click=${() => addLevel(floor.name, floor.id)}>Add ${floor.name}</button>`)}
      </div>
    `;
  }

  /** Settings of the whole plan: wall types, corners, colours and file. */
  private levelProperties() {
    return html`
      <h3>Wall types</h3>
      ${this.wallTypes.map(
        (type) => html`<div class="type-row">
          <input
            type="text"
            .value=${type.name}
            @change=${(e: Event) => this.change(() => (type.name = (e.target as HTMLInputElement).value || type.name))}
          />
          <input
            type="number"
            step="0.5"
            .value=${String(fix(type.t * 100))}
            @change=${(e: Event) => {
              const v = Number((e.target as HTMLInputElement).value);
              if (Number.isFinite(v) && v > 0)
                this.change(() => {
                  type.t = fix(v / 100);
                  this.applyWallType(type);
                });
            }}
          />
          <em>cm</em>
          <button
            class="small"
            title="Remove the type; its walls keep their thickness"
            ?disabled=${this.wallTypes.length < 2}
            @click=${() =>
              this.change(() => {
                for (const level of this._plan!.levels) for (const wall of level.walls) if (wall.type === type.id) delete wall.type;
                this._plan!.wallTypes = this.wallTypes.filter((t) => t !== type);
              })}
          >
            ×
          </button>
        </div>`,
      )}
      <div class="row">
        <button @click=${() => this.change(() => this.wallTypes.push({ id: uid("walltype"), name: "New wall", t: 0.2 }))}>Add wall type</button>
      </div>
      <label class="check"
        ><input
          type="checkbox"
          .checked=${!!this._plan!.roundCorners}
          @change=${(e: Event) => this.change(() => (this._plan!.roundCorners = (e.target as HTMLInputElement).checked))}
        />
        Rounded corners</label
      >
      ${this._plan!.roundCorners
        ? this.number(
            "Radius",
            (this._plan!.cornerRadius ?? DEFAULT_CORNER_RADIUS) * 100,
            (v) => (this._plan!.cornerRadius = Math.max(0, v) / 100),
            1,
            "cm",
          )
        : nothing}
      ${this.appearanceProperties()}
      <h3>${t("Language")}</h3>
      <label class="field wide">
        <span>${t("Language")}</span>
        <select @change=${(e: Event) => this.change(() => (this._plan!.language = (e.target as HTMLSelectElement).value))}>
          <option value="auto" ?selected=${(this._plan!.language ?? "auto") === "auto"}>${t("As each user in Home Assistant")}</option>
          ${Object.keys(EDITOR_LANGUAGES).map(
            (code) => html`<option value=${code} ?selected=${this._plan!.language === code}>${LANGUAGE_NAMES[code] ?? code}</option>`,
          )}
        </select>
      </label>
      <p class="muted">${t("For the editor and every card. A text without a translation shows in English.")}</p>
      <h3>Plan file</h3>
      <div class="row">
        <button @click=${() => this.exportPlan()}>Export</button>
        <label class="button">Import<input type="file" accept="application/json,.json" hidden @change=${this.importPlan} /></label>
      </div>
      <h3 class="danger-title">${t("Delete everything")}</h3>
      <p class="muted">
        ${t("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
      </p>
      <label class="field wide">
        <span>${t("Type {word}", { word: t("DELETE") })}</span>
        <input type="text" .value=${this._wipeText} @input=${(e: Event) => (this._wipeText = (e.target as HTMLInputElement).value)} />
      </label>
      <div class="row">
        <button class="danger" ?disabled=${this._wipeText.trim() !== t("DELETE")} @click=${() => this.wipePlan()}>
          ${t("Delete everything")}
        </button>
      </div>
    `;
  }

  /** Theme of the plan and its colours, dark and light, each with its own changes over the defaults. */
  private appearanceProperties() {
    const plan = this._plan!;
    const appearance = plan.appearance ?? {};
    const current = planPalette(appearance, this.hass?.themes?.darkMode).mode;
    const mode = this._paletteMode ?? current;
    const own = appearance[mode] ?? {};
    const defaults = mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
    const setColour = (key: PaletteKey, value: string | undefined) =>
      this.change(() => {
        const next = { ...(plan.appearance?.[mode] ?? {}) };
        if (value && value !== defaults[key]) next[key] = value;
        else delete next[key];
        plan.appearance = { ...plan.appearance, [mode]: next };
      });
    return html`
      <h3>Appearance</h3>
      <label class="field wide">
        <span>Theme</span>
        <select
          @change=${(e: Event) =>
            this.change(() => (plan.appearance = { ...plan.appearance, theme: (e.target as HTMLSelectElement).value as Appearance["theme"] }))}
        >
          <option value="auto" ?selected=${(appearance.theme ?? "auto") === "auto"}>As Home Assistant (dark or light)</option>
          <option value="dark" ?selected=${appearance.theme === "dark"}>Dark</option>
          <option value="light" ?selected=${appearance.theme === "light"}>Light</option>
        </select>
      </label>
      <div class="row">
        <span class="muted">Colours of</span>
        ${(["dark", "light"] as const).map(
          (m) => html`<button class=${mode === m ? "on" : ""} @click=${() => (this._paletteMode = m)}>${m === "dark" ? "Dark" : "Light"}</button>`,
        )}
      </div>
      ${PALETTE_GROUPS.map(
        (group) => html`<details class="settings" ?open=${group.name === "Building"}>
          <summary>${group.name}</summary>
          ${group.keys.map(
            ([key, label]) => html`<div class="colour-row">
              <span>${label}</span>
              <input type="color" .value=${own[key] ?? defaults[key]} @change=${(e: Event) => setColour(key, (e.target as HTMLInputElement).value)} />
              ${own[key] ? html`<button class="small" title="Back to the default colour" @click=${() => setColour(key, undefined)}>↺</button>` : html`<span></span>`}
            </div>`,
          )}
        </details>`,
      )}
      <div class="row">
        <button
          ?disabled=${!Object.keys(own).length}
          @click=${() =>
            this.change(() => {
              const next = { ...plan.appearance };
              delete next[mode];
              plan.appearance = next;
            })}
        >
          Reset the ${mode} colours
        </button>
      </div>
      <p class="muted">
        The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.
      </p>
    `;
  }

  private wallProperties(wall?: Wall) {
    if (!wall) return nothing;
    return html`
      <h3>Wall</h3>
      <label class="field wide">
        <span>Type</span>
        <select
          @change=${(e: Event) =>
            this.change(() => {
              const id = (e.target as HTMLSelectElement).value;
              if (!id) {
                delete wall.type;
                return;
              }
              wall.type = id;
              wall.t = this.wallType(id).t;
            })}
        >
          ${this.wallTypes.map(
            (type) => html`<option value=${type.id} ?selected=${type.id === wall.type}>${type.name} ${(type.t * 100).toFixed(1)} cm</option>`,
          )}
          <option value="" ?selected=${!wall.type}>Own thickness</option>
        </select>
      </label>
      ${this.number(
        "Thickness",
        wall.t * 100,
        (v) => {
          // A thickness typed for one wall makes it a wall of its own thickness.
          wall.t = Math.max(1, v) / 100;
          delete wall.type;
        },
        0.5,
        "cm",
      )}
      <p class="muted">Length ${wallLength(wall).toFixed(2)} m</p>
      <label class="check" title="Same as holding Shift while dragging an end"
        ><input type="checkbox" .checked=${this._endsAlone} @change=${(e: Event) => (this._endsAlone = (e.target as HTMLInputElement).checked)} />
        Move ends alone (detach from joined walls)</label
      >
      ${this.deleteButton()}
    `;
  }

  private openingProperties(opening?: Opening) {
    if (!opening) return nothing;
    return html`
      <h3>${OPENING_NAMES[opening.type]}</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${(e: Event) => this.change(() => (opening.type = (e.target as HTMLSelectElement).value as Opening["type"]))}>
          <option value="door" ?selected=${opening.type === "door"}>Door</option>
          <option value="window" ?selected=${opening.type === "window"}>Window</option>
          <option value="gate" ?selected=${opening.type === "gate"}>Gate or garage door</option>
        </select>
      </label>
      ${this.number("Width", opening.width * 100, (v) => (opening.width = Math.max(10, v) / 100), 5, "cm")}
      ${opening.type === "door"
        ? html`<div class="row">
            <button title="Moves the hinge to the other side of the door" @click=${() => this.change(() => (opening.hingeEnd = !opening.hingeEnd))}>
              Flip hinge
            </button>
            <button title="Opens the door into the other room" @click=${() => this.change(() => (opening.swingRight = !opening.swingRight))}>
              Flip side
            </button>
          </div>`
        : nothing}
      <div class="pick">
        <span>Open/closed sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${opening.contact ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (opening.contact = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(opening.contact)}
      ${opening.type === "door"
        ? html`<div class="pick">
              <span>Lock</span>
              <floorcast-entity-picker
                .hass=${this.hass}
                .domains=${["lock"]}
                .value=${opening.lock ?? null}
                optional
                @value-changed=${(e: CustomEvent) => this.change(() => (opening.lock = e.detail))}
              ></floorcast-entity-picker>
            </div>
            ${this.stateLine(opening.lock)}
            ${opening.lock
              ? html`${this.confirmCheck(opening, true)}
                  <p class="muted">A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.</p>`
              : nothing}
            <label class="field wide">
              <span>Drawn as</span>
              <select @change=${(e: Event) => this.change(() => (opening.drawn = (e.target as HTMLSelectElement).value as "open" | "closed"))}>
                <option value="open" ?selected=${opening.drawn !== "closed"}>Open</option>
                <option value="closed" ?selected=${opening.drawn === "closed"}>Closed</option>
              </select>
            </label>
            <p class="muted">With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.</p>`
        : opening.type === "gate"
          ? html`<div class="pick">
                <span>Gate</span>
                <floorcast-entity-picker
                  .hass=${this.hass}
                  .domains=${["cover"]}
                  .value=${opening.cover ?? null}
                  optional
                  @value-changed=${(e: CustomEvent) => this.change(() => (opening.cover = e.detail))}
                ></floorcast-entity-picker>
              </div>
              ${this.stateLine(opening.cover)} ${this.confirmCheck(opening, true)}
              <p class="muted">
                Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.
              </p>`
          : html`<div class="pick">
              <span>Blind</span>
              <floorcast-entity-picker
                .hass=${this.hass}
                .domains=${["cover"]}
                .value=${opening.cover ?? null}
                optional
                @value-changed=${(e: CustomEvent) => this.change(() => (opening.cover = e.detail))}
              ></floorcast-entity-picker>
            </div>
            ${this.stateLine(opening.cover)}
            ${opening.cover
              ? html`<div class="row">
                    <button title="Draws the blind on the other side of the wall" @click=${() => this.change(() => (opening.blindFlip = !opening.blindFlip))}>
                      Flip blind side
                    </button>
                  </div>
                  ${this.confirmCheck(opening)}
                  <p class="muted">The bar outside the window is as long as the blind covers it; the number is its position, 100% open.</p>`
              : nothing}`}
      ${this.deleteButton()}
    `;
  }

  private radarProperties(device: Device) {
    const sources = radarSources(this.hass.states);
    const seen = radarTargets(device, this.hass.states).length;
    return html`
      <h3>Radar</h3>
      <label class="field wide">
        <span>Sensors</span>
        <select @change=${(e: Event) => this.change(() => (device.source = (e.target as HTMLSelectElement).value || null))}>
          <option value="" ?selected=${!device.source}>–</option>
          ${sources.map((source) => html`<option value=${source} ?selected=${source === device.source}>sensor.${source}_target_…</option>`)}
        </select>
      </label>
      <p class="muted">${device.source ? `Sees ${seen} ${seen === 1 ? "person" : "people"} now.` : "Choose the target sensors of the radar."}</p>
      ${this.number("Heading", device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 1, "°")}
      ${this.number("View", device.arc ?? DEFAULT_RADAR_VIEW, (v) => (device.arc = Math.min(180, Math.max(10, v))), 5, "°")}
      ${this.number("Range", device.radius ?? DEFAULT_RADAR_RANGE, (v) => (device.radius = Math.max(1, v)), 0.5, "m")}
      <label class="check"
        ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => this.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
        Mirror (people move the wrong way sideways)</label
      >
      <p class="muted">
        Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot
        follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.
      </p>
      ${this.deleteButton()}
    `;
  }

  private cameraProperties(device: Device) {
    return html`
      <h3>Camera</h3>
      <div class="pick">
        <span>Camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)}
      ${this.number("Heading", device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 5, "°")}
      ${this.number("View", device.arc ?? DEFAULT_FIELD_OF_VIEW, (v) => (device.arc = Math.min(360, Math.max(10, v))), 5, "°")}
      ${this.number("Range", device.radius ?? DEFAULT_CAMERA_RANGE, (v) => (device.radius = Math.max(1, v)), 0.5, "m")}
      <p class="muted">Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.</p>
      ${this.detectionProperties(device)} ${this.frigateProperties(device)} ${this.groundProperties(device)}
      ${this.deleteButton()}
    `;
  }

  /**
   * The sensor that says the camera sees someone, any binary sensor. One of the camera's own device is offered:
   * a person sensor first, then motion or occupancy.
   */
  private detectionProperties(device: Device) {
    const registry = typeof this._registry === "object" ? this._registry : undefined;
    if (this._registry === undefined) queueMicrotask(() => this.loadRegistry());
    const suggestion = device.detection ? undefined : this.detectionSuggestion(device, registry);
    return html`
      <div class="pick">
        <span>Detection sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor"]}
          .value=${device.detection ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.detection = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.detection)}
      ${suggestion
        ? html`<div class="row">
            <button @click=${() => this.change(() => (device.detection = suggestion))}>Use ${this.entityName(suggestion) ?? suggestion}</button>
          </div>`
        : nothing}
      <p class="muted">
        While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate,
        UniFi Protect or Reolink, or any motion sensor.
      </p>
    `;
  }

  /** A detection sensor for a camera: of the same device, or named like the camera; a person sensor before motion. */
  private detectionSuggestion(device: Device, registry: Registry | undefined): string | undefined {
    if (!device.entity) return undefined;
    const name = device.entity.split(".")[1];
    const own = registry?.entityDevice[device.entity];
    const candidates = Object.keys(this.hass.states).filter((id) => {
      if (!id.startsWith("binary_sensor.")) return false;
      const sameDevice = !!own && registry?.entityDevice[id] === own;
      return sameDevice || id.startsWith(`binary_sensor.${name}_`);
    });
    const score = (id: string) => {
      const cls = this.hass.states[id]?.attributes.device_class;
      if (/person/.test(id)) return 0;
      if (cls === "occupancy" || cls === "presence") return 1;
      if (cls === "motion" || /motion/.test(id)) return 2;
      return 9;
    };
    return candidates.filter((id) => score(id) < 9).sort((a, b) => score(a) - score(b))[0];
  }

  /** EXPERIMENTAL: shows the ground image of a device of the saved plan on the editor plan, a mower also in its dock. */
  private toggleGroundPreview(device: Device): void {
    const previews = new Set(this._groundPreview);
    if (previews.has(device.id)) previews.delete(device.id);
    else previews.add(device.id);
    this._groundPreview = previews;
    // The feed asks for the devices previewed now, so it starts again with the new set.
    this._groundFeed.stop();
    if (previews.size) this._groundFeed.start(this.hass, [...previews], true);
  }

  /** EXPERIMENTAL: preview switch and the button that saves the plan, so the integration draws the new settings. */
  private groundPreviewRow(device: Device) {
    const unsaved = !!this._plan && JSON.stringify(this._plan) !== this._saved;
    return html`<div class="row">
        <button class=${this._groundPreview.has(device.id) ? "primary" : ""} @click=${() => this.toggleGroundPreview(device)}>
          ${this._groundPreview.has(device.id) ? "Hide preview" : "Preview"}
        </button>
        <button ?disabled=${!unsaved || this._saving} @click=${() => this.save()}>Save and redraw</button>
      </div>
      <p class="muted">The integration draws the saved plan; save after a change to see it.</p>`;
  }

  /**
   * EXPERIMENTAL: the ground view of a camera or of a mower camera, in the same order for both: where the
   * image lies, its calibration spots, its visible range, then what only a mower has, and the preview.
   */
  private groundProperties(device: Device) {
    const mower = device.kind === "mower";
    const entity = mower ? device.camera : device.entity;
    if (!entity) return mower ? html`<h3>Ground view (experimental)</h3><p class="muted">Choose the camera of the mower above first.</p>` : nothing;
    const ground = device.ground ?? {};
    const set = (apply: (ground: NonNullable<Device["ground"]>) => void) => {
      const next = { ...device.ground };
      apply(next);
      device.ground = next;
    };
    const target = mower ? "mower" : "ground";
    const pairs = this.pairsOf(device, target);
    const pose = mower ? this.mowerPose(device) : undefined;
    const areas = [...(this.level.zones ?? []), ...this.level.rooms];
    const chosen = new Set(ground.zones ?? []);
    const toggle = (id: string, on: boolean) =>
      this.change(() => set((g) => (g.zones = on ? [...(g.zones ?? []).filter((zone) => zone !== id), id] : (g.zones ?? []).filter((zone) => zone !== id))));
    return html`
      <h3>Ground view (experimental)</h3>
      <p class="muted">
        The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people
        stretch.
      </p>
      <label class="field wide">
        <span>Preview</span>
        <select
          @change=${(e: Event) =>
            this.change(() => {
              const mode = (e.target as HTMLSelectElement).value as PreviewMode;
              if (mode === "window") delete device.preview;
              else device.preview = mode;
            })}
        >
          ${(
            [
              ["window", "Window"],
              ["ground", "Ground"],
              ["both", "Ground and window"],
            ] as [PreviewMode, string][]
          ).map(([mode, label]) => html`<option value=${mode} ?selected=${(device.preview ?? "window") === mode}>${label}</option>`)}
        </select>
      </label>
      <p class="muted">
        What the card shows when the preview opens: ${mower ? "a tap on the mower" : "the camera sees someone, or a tap on it"}.
        The ground needs ${MIN_GROUND_SPOTS} calibration spots.
      </p>
      ${mower
        ? nothing
        : html`<p class="muted">Lay it on these zones or rooms; tick only the paving or the terrace.</p>
            ${areas.map(
              (area) => html`<label class="check"
                ><input type="checkbox" .checked=${chosen.has(area.id)} @change=${(e: Event) => toggle(area.id, (e.target as HTMLInputElement).checked)} />
                ${area.name}</label
              >`,
            )}`}
      <h4>Calibration</h4>
      <p class="muted">
        ${pairs.length >= MIN_GROUND_SPOTS
          ? `Calibrated with ${pairs.length} spots.`
          : `${pairs.length} of at least ${MIN_GROUND_SPOTS} spots; the image is not laid until then.`}
        Click a spot on the ground in the image, then the same spot on the plan${mower ? ", with the mower standing still" : ""}.
      </p>
      ${this.spotList(device, target)}
      <div class="row">
        <button ?disabled=${mower && !pose} @click=${() => this.openBigImage(target)}>Calibrate</button>
        ${mower
          ? nothing
          : html`<button
              ?disabled=${!(device.calibration?.length ?? 0)}
              @click=${() => this.change(() => set((g) => (g.calibration = structuredClone(device.calibration ?? []))))}
            >
              Copy from Frigate
            </button>`}
        <button ?disabled=${!pairs.length} @click=${() => this.change(() => set((g) => (mower ? (g.spots = []) : (g.calibration = []))))}>Clear</button>
      </div>
      ${mower && !pose ? html`<p class="muted">The mower reports no heading now, so it cannot be calibrated.</p>` : nothing}
      <h4>Range</h4>
      ${this.number(
        "Visible range",
        ground.range ?? (mower ? ground.reach ?? 2 : device.radius ?? DEFAULT_CAMERA_RANGE),
        (v) => set((g) => (g.range = Math.min(30, Math.max(0.3, v)))),
        mower ? 0.1 : 0.5,
        "m",
      )}
      <p class="muted">The image is whole up to half the range from the ${mower ? "mower" : "camera"} and fades out at the range.</p>
      ${mower
        ? html`
            ${this.number("Position delay", ground.delay ?? 0, (v) => set((g) => (g.delay = Math.min(10, Math.max(0, v)))), 0.5, "s")}
            <p class="muted">
              The mower and its track are shown this late and move smoothly between the places it reports, every few seconds;
              set it to the time between reports or more.
            </p>
            ${this.number("View delay", ground.viewDelay ?? 0, (v) => set((g) => (g.viewDelay = Math.min(10, Math.max(0, v)))), 0.5, "s")}
            <p class="muted">
              The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time
              its images come late; change it until the image stops running ahead of or behind the plan while the mower drives
              along an edge.
            </p>
          `
        : nothing}
      ${this.groundPreviewRow(device)}
    `;
  }

  /** Frigate camera and the calibration that places its objects on the plan. */
  private frigateProperties(device: Device) {
    if (!this._frigateCameras) {
      this._frigateCameras = [];
      this.hass
        .callWS<{ cameras: { name: string; size: [number, number] | null }[] }>({ type: "floorcast/frigate/cameras" })
        .then((result) => (this._frigateCameras = result.cameras))
        .catch(() => undefined);
    }
    const cameras = this._frigateCameras;
    const known = cameras.find((camera) => camera.name === device.frigate);
    const pairs = device.calibration ?? [];
    const picture = device.entity ? this.hass.states[device.entity]?.attributes.entity_picture : undefined;
    return html`
      <h3>Objects from Frigate</h3>
      <label class="field wide">
        <span>Frigate</span>
        <select @change=${(e: Event) => this.change(() => (device.frigate = (e.target as HTMLSelectElement).value || null))}>
          <option value="" ?selected=${!device.frigate}>–</option>
          ${cameras.map((camera) => html`<option value=${camera.name} ?selected=${camera.name === device.frigate}>${camera.name}</option>`)}
          ${device.frigate && !known ? html`<option selected value=${device.frigate}>${device.frigate}</option>` : nothing}
        </select>
      </label>
      ${device.frigate && !known?.size
        ? html`${this.number("Detect width", device.detect?.[0] ?? 1280, (v) => (device.detect = [v, device.detect?.[1] ?? 720]), 1, "px")}
          ${this.number("Detect height", device.detect?.[1] ?? 720, (v) => (device.detect = [device.detect?.[0] ?? 1280, v]), 1, "px")}`
        : nothing}
      ${device.frigate
        ? html`<p class="muted">
              Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post.
              Four or more spots, spread as wide as the camera sees.
            </p>
            ${picture
              ? html`<div class="row">
                    <button class="primary" @click=${() => this.openBigImage("frigate")}>Calibrate on a large image</button>
                  </div>
                  <div class="calibration-image" @click=${() => this.openBigImage("frigate")}>
                  <img src=${picture} alt="" draggable="false" />
                  ${pairs.map(
                    (pair, i) =>
                      html`<span class="mark" style="left:${pair.image[0] * 100}%;top:${pair.image[1] * 100}%">${i + 1}</span>`,
                  )}
                  ${this._imagePoint
                    ? html`<span class="mark waiting" style="left:${this._imagePoint[0] * 100}%;top:${this._imagePoint[1] * 100}%">?</span>`
                    : nothing}
                </div>`
              : html`<p class="muted">Choose the camera entity above to see its image.</p>`}
            ${this.spotList(device, "frigate")}
            <p class="muted">
              ${pairs.length < 4
                ? `${pairs.length} of at least 4 spots.`
                : homography(pairs)
                  ? `Calibrated with ${pairs.length} spots.`
                  : "These spots do not fix the view; spread them wider, not along one line."}
            </p>
            <div class="row">
              <button ?disabled=${!homography(pairs)} @click=${() => this.loadPaths(device)}>Show recent paths</button>
            </div>`
        : nothing}
    `;
  }

  /** Calibration spots of a camera: the Frigate ones, or the ground ones while those are calibrated. */
  private pairsOf(device: Device, target = this._calibrationTarget): { image: Point; plan: Point }[] {
    if (target === "mower") {
      const pose = this.mowerPose(device);
      return (device.ground?.spots ?? []).map((spot) => ({ image: spot.image, plan: pose ? aheadToPlan(spot.ahead, pose) : spot.ahead }));
    }
    return (target === "ground" ? device.ground?.calibration : device.calibration) ?? [];
  }

  /** Mower spots are kept relative to the mower, from where it stands now; without its pose they stay as they are. */
  private setPairs(device: Device, pairs: { image: Point; plan: Point }[], target = this._calibrationTarget): void {
    if (target === "mower") {
      const pose = this.mowerPose(device);
      if (pose) device.ground = { ...device.ground, spots: pairs.map((pair) => ({ image: pair.image, ahead: planToAhead(pair.plan, pose) })) };
      return;
    }
    if (target === "ground") device.ground = { ...device.ground, calibration: pairs };
    else device.calibration = pairs;
  }

  /**
   * Calibration spots of one kind, each with where it lies in the image and on the plan and a button that
   * removes it; a mower without its pose keeps its spots, as they cannot be placed.
   */
  private spotList(device: Device, target: "frigate" | "ground" | "mower") {
    const pairs = this.pairsOf(device, target);
    const fixed = target !== "mower" || !!this.mowerPose(device);
    return pairs.map(
      (pair, i) => html`<div class="list-row static">
        <span
          >${i + 1}. image ${pair.image[0].toFixed(2)}, ${pair.image[1].toFixed(2)} → plan ${pair.plan[0].toFixed(2)},
          ${pair.plan[1].toFixed(2)}</span
        >
        <button
          class="small"
          title="Remove this spot"
          ?disabled=${!fixed}
          @click=${() => this.change(() => this.setPairs(device, pairs.filter((_, j) => j !== i), target))}
        >
          ×
        </button>
      </div>`,
    );
  }

  /** EXPERIMENTAL: where a mower stands now and where it heads, from its map camera; undefined without a heading. */
  private mowerPose(device: Device): { at: Point; heading: number } | undefined {
    const place = device.map ? mowerPlace(device, this.hass.states[device.map]?.attributes) : undefined;
    return place && place.heading !== undefined ? { at: place.at, heading: place.heading } : undefined;
  }

  private openBigImage(target: "frigate" | "ground" | "mower"): void {
    const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
    if (target === "mower" && device && !this.mowerPose(device)) {
      this._message = "The mower reports no heading now; calibrate it when its map shows where it heads.";
      return;
    }
    this._calibrationTarget = target;
    this._bigImage = true;
    this._imagePoint = undefined;
    this._imageZoom = { scale: 1, origin: [50, 50] };
    this._message = "Click a spot on the ground in the image; the wheel zooms in.";
  }

  /**
   * The camera image over the plan, for picking spots precisely. It hides while the same spot is
   * picked on the plan and comes back for the next one until Done.
   */
  private renderBigImage() {
    const device = this._selection?.kind === "device" ? this.findDevice(this._selection.id) : undefined;
    const entity = device?.kind === "camera" ? device.entity : device?.kind === "mower" ? device.camera : undefined;
    const picture = entity ? this.hass.states[entity]?.attributes.entity_picture : undefined;
    if (!this._bigImage || !device || !picture || this._imagePoint) return nothing;
    const pairs = this.pairsOf(device);
    const zoom = this._imageZoom;
    return html`<div class="big-image" @wheel=${(e: WheelEvent) => this.zoomImage(e)}>
      <div class="big-image-bar">
        <span>${pairs.length} ${pairs.length === 1 ? "spot" : "spots"}${pairs.length < 4 ? ", at least 4 needed" : ""}. Click a spot on the ground.</span>
        <button ?disabled=${!pairs.length} @click=${() => this.change(() => this.setPairs(device, pairs.slice(0, -1)))}>Remove last</button>
        <button @click=${() => (this._imageZoom = { scale: 1, origin: [50, 50] })}>Fit</button>
        <button class="primary" @click=${() => {
          this._bigImage = false;
          this._message = "";
        }}>Done</button>
      </div>
      <div class="big-image-spots">${this.spotList(device, this._calibrationTarget)}</div>
      <div class="big-image-view">
        <div
          class="calibration-image big"
          style="width:min(100%, calc((100vh - 190px) * ${this._imageAspect.toFixed(4)}));transform:scale(${zoom.scale});transform-origin:${zoom.origin[0]}% ${zoom.origin[1]}%"
          @click=${(e: MouseEvent) => this.pickImagePoint(e)}
        >
          <img
            src=${picture}
            alt=""
            draggable="false"
            @load=${(e: Event) => {
              const img = e.target as HTMLImageElement;
              if (img.naturalHeight) this._imageAspect = img.naturalWidth / img.naturalHeight;
              this.requestUpdate();
            }}
          />
          ${pairs.map(
            (pair, i) =>
              html`<span class="mark" style="left:${pair.image[0] * 100}%;top:${pair.image[1] * 100}%;transform:translate(-50%,-50%) scale(${1 / zoom.scale})">${i + 1}</span>`,
          )}
        </div>
      </div>
    </div>`;
  }

  /** The wheel zooms the image around the pointer, up to six times. */
  private zoomImage(event: WheelEvent): void {
    event.preventDefault();
    const frame = this.renderRoot.querySelector(".calibration-image.big") as HTMLElement | null;
    if (!frame) return;
    const box = frame.getBoundingClientRect();
    const origin: Point = [
      Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
      Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
    ];
    const scale = Math.min(6, Math.max(1, this._imageZoom.scale * (event.deltaY < 0 ? 1.25 : 0.8)));
    this._imageZoom = { scale, origin: scale === 1 ? [50, 50] : origin };
  }

  private pickImagePoint(event: MouseEvent): void {
    const box = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const u = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
    const v = Math.min(1, Math.max(0, (event.clientY - box.top) / box.height));
    this._imagePoint = [fix(u), fix(v)];
    this._tool = "calibrate";
    this._message = "Now click the same spot on the plan.";
  }

  /** Paths of the last people events of the camera, from the Frigate integration. */
  private async loadPaths(device: Device): Promise<void> {
    try {
      const events = await this.hass.callWS<{ data?: { path_data?: [Point, number][] } }[]>({
        type: "frigate/events/get",
        instance_id: "frigate",
        cameras: [device.frigate],
        labels: ["person"],
        limit: 15,
      });
      const paths = events.map((e) => (e.data?.path_data ?? []).map(([q]) => q)).filter((path) => path.length > 1);
      this._paths = new Map(this._paths).set(device.id, paths);
      this._message = paths.length ? `${paths.length} recent paths drawn on the plan.` : "No recent paths of people from this camera.";
    } catch (err) {
      this._message = `Paths not read: ${(err as { message?: string }).message ?? err}`;
    }
  }

  private screenProperties(device: Device) {
    const picker = (label: string, domains: string[], value: string | null | undefined, apply: (id: string | null) => void) => html`<div class="pick">
        <span>${label}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${domains}
          .value=${value ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => apply(e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(value)}`;
    return html`
      <h3>Screen</h3>
      ${picker("Power", ["remote", "media_player", "switch"], device.entity, (id) => (device.entity = id))}
      ${picker("Remote", ["remote"], device.remote, (id) => (device.remote = id))}
      ${this.number("Light reach", device.radius ?? DEFAULT_SCREEN_THROW, (v) => (device.radius = Math.max(0.5, v)), 0.5, "m")}
      ${this.number("Light spread", device.arc ?? DEFAULT_SCREEN_SPREAD, (v) => (device.arc = Math.min(160, Math.max(0, v))), 5, "°")}
      <div class="row">
        <button title="Lets the light fall on the other side of the screen" @click=${() => this.change(() => (device.flip = !device.flip))}>
          Flip light side
        </button>
      </div>
      ${this.confirmCheck(device)}
      <p class="muted">
        Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown
        when selected. On the card a tap switches it on or off; holding opens a remote control with arrows,
        OK, back, home, volume and play, sent to the remote entity.
      </p>
      ${this.deleteButton()}
    `;
  }

  /** How one value of a sensor is written: its unit, whether the unit shows, and its decimals. */
  private sensorValueSettings(value: SensorValue, apply: (change: (value: SensorValue) => void) => void) {
    return html`<label class="field wide">
        <span>Unit</span>
        <select @change=${(e: Event) => apply((v) => (v.unit = (e.target as HTMLSelectElement).value as SensorValue["unit"]))}>
          <option value="auto" ?selected=${(value.unit ?? "auto") === "auto"}>Short (°, %, or the entity's)</option>
          <option value="entity" ?selected=${value.unit === "entity"}>The entity's</option>
          <option value="custom" ?selected=${value.unit === "custom"}>Custom</option>
        </select>
      </label>
      ${value.unit === "custom" ? this.text("Unit text", value.unitText ?? "", (v) => apply((s) => (s.unitText = v))) : nothing}
      <label class="field wide">
        <span>Decimals</span>
        <select
          @change=${(e: Event) => {
            const chosen = (e.target as HTMLSelectElement).value;
            apply((v) => (chosen === "auto" ? delete v.decimals : (v.decimals = Number(chosen))));
          }}
        >
          ${["auto", "0", "1", "2", "3"].map(
            (d) => html`<option value=${d} ?selected=${(value.decimals === undefined ? "auto" : String(value.decimals)) === d}>${d === "auto" ? "Auto" : d}</option>`,
          )}
        </select>
      </label>
      <label class="check"
        ><input type="checkbox" .checked=${value.showUnit !== false} @change=${(e: Event) => apply((v) => (v.showUnit = (e.target as HTMLInputElement).checked))} />
        Show the unit</label
      >`;
  }

  /**
   * A sensor: its type, an optional header, the main value and up to MAX_SECONDARY values under it, each
   * with its unit, unit visibility and decimals; a secondary value may also have a label.
   */
  private sensorProperties(device: Device) {
    const type = device.sensorType ?? "generic";
    if (type === "alarm") return this.alarmProperties(device);
    const deviceClass = type === "generic" ? undefined : type;
    const domains = ["sensor", "input_number", "number", "counter", "binary_sensor", "input_text", "input_select"];
    const picker = (label: string, value: string | null | undefined, apply: (id: string | null) => void, only?: string) => html`<div class="pick">
        <span>${label}</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${only ? ["sensor"] : domains}
          .deviceClass=${only}
          .value=${value ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => apply(e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(value)}`;
    const secondary = device.secondary ?? [];
    const room = roomAt(this.level, device.at);
    return html`
      <h3>Sensor</h3>
      ${this.sensorTypeSelect(device)}
      ${this.text("Header", device.label ?? "", (v) => (v.trim() ? (device.label = v.trim()) : delete device.label))}
      <h4>Main value</h4>
      ${picker("Entity", device.entity, (id) => (device.entity = id), deviceClass)}
      ${this.sensorValueSettings(device.main ?? {}, (change) =>
        this.change(() => {
          device.main = { ...device.main };
          change(device.main);
        }),
      )}
      ${secondary.map(
        (value, i) => html`<h4>Secondary value ${i + 1}</h4>
          ${picker("Entity", value.entity, (id) => (value.entity = id))}
          ${this.text("Label", value.label ?? "", (v) => (v.trim() ? (value.label = v.trim()) : delete value.label))}
          ${this.sensorValueSettings(value, (change) => this.change(() => change(value)))}
          <div class="row">
            <button @click=${() => this.change(() => (device.secondary = secondary.filter((_, j) => j !== i)))}>Remove this value</button>
          </div>`,
      )}
      ${secondary.length < MAX_SECONDARY
        ? html`<div class="row">
            <button @click=${() => this.change(() => (device.secondary = [...secondary, { entity: null }]))}>Add a secondary value</button>
          </div>`
        : nothing}
      <p class="muted">
        The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large
        enough. Holding the sensor on the card opens its main value.
        ${type === "temperature" ? (room ? ` Holding ${room.name} on the card opens this temperature.` : " Outside the rooms.") : ""}
      </p>
      ${this.deleteButton()}
    `;
  }

  /** An indicator: any entity, running by its state or power, switched on a tap when it is a switch. */
  private indicatorProperties(device: Device) {
    const stateObj = device.entity ? this.hass.states[device.entity] : undefined;
    const shown = indicatorState(device, stateObj);
    const switchable = !!device.entity && SWITCHABLE_DOMAINS.includes(device.entity.split(".")[0]);
    return html`
      <h3>Indicator</h3>
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${INDICATOR_DOMAINS}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)}
      ${this.text("Name", device.label ?? "", (v) => (v.trim() ? (device.label = v.trim()) : delete device.label))}
      ${shown.power ? this.number("Running from", device.threshold ?? 5, (v) => (device.threshold = Math.max(0, v)), 1, "W") : nothing}
      ${switchable ? this.confirmCheck(device) : nothing}
      <p class="muted">
        A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating
        or cleaning, or a power sensor above the watts set. ${switchable ? "A tap on the card switches it." : "A tap on the card opens it."}
      </p>
      ${this.deleteButton()}
    `;
  }

  /** An Alarm sensor: a smoke, gas, carbon monoxide or water sensor, or an alarm panel; it warns on the card. */
  private alarmProperties(device: Device) {
    const room = roomAt(this.level, device.at);
    return html`
      <h3>Sensor</h3>
      ${this.sensorTypeSelect(device)}
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["binary_sensor", "alarm_control_panel"]}
          .deviceClass=${Object.keys(ALARM_CLASSES)}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)}
      <p class="muted">
        A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms,
        ${room ? html`${room.name} pulses red` : "the card"} and a bar at the top of the card names it; otherwise a small grey
        symbol shows where it is.
      </p>
      ${this.deleteButton()}
    `;
  }

  private sensorTypeSelect(device: Device) {
    const type = device.sensorType ?? "generic";
    return html`<label class="field wide">
      <span>Type</span>
      <select @change=${(e: Event) => this.change(() => (device.sensorType = (e.target as HTMLSelectElement).value as SensorType))}>
        ${(
          [
            ["temperature", "Temperature"],
            ["humidity", "Humidity"],
            ["generic", "Other"],
            ["alarm", "Alarm"],
          ] as [SensorType, string][]
        ).map(([value, label]) => html`<option value=${value} ?selected=${type === value}>${label}</option>`)}
      </select>
    </label>`;
  }

  /** Battery sensor written beside a mower or vacuum on the card. */
  private batteryPicker(device: Device) {
    return html`<div class="pick">
        <span>Battery</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .deviceClass=${"battery"}
          .value=${device.battery ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.battery = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.battery)}`;
  }

  private vacuumProperties(device: Device) {
    const pairs = device.pairs ?? [];
    const scale = calibrationScale(device);
    return html`
      <h3>Vacuum</h3>
      <div class="pick">
        <span>Vacuum</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["vacuum"]}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Current room sensor</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["sensor"]}
          .value=${device.roomSensor ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.roomSensor = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)} ${this.stateLine(device.roomSensor)}
      ${this.batteryPicker(device)}
      <h3>Calibration</h3>
      <p class="muted">
        1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and
        mark that spot. Two spots give the turn of its map; one spot uses the rotation below.
      </p>
      <div class="row">
        <button ?disabled=${!device.entity} @click=${() => this.markDock(device)}>Dock is here</button>
        <button
          ?disabled=${!pairs.length}
          @click=${() => {
            this._tool = "mark";
            this._message = "Click the spot where the vacuum stands now.";
          }}
        >
          Mark where it stands
        </button>
      </div>
      <p class="muted">
        ${pairs.length === 0 ? "Not calibrated." : pairs.length === 1 ? "Dock marked." : `Two spots marked${scale ? `, distances agree to ${Math.round(scale * 100)}%` : ""}.`}
      </p>
      ${pairs.length < 2 ? this.number("Rotation", device.rotation ?? 0, (v) => (device.rotation = v), 1, "°") : nothing}
      <label class="check"
        ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => this.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
        Mirror the map</label
      >
      ${this.deleteButton()}
    `;
  }

  private mowerProperties(device: Device) {
    return html`
      <h3>Mower</h3>
      <div class="pick">
        <span>Mower</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["lawn_mower"]}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Map camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${device.map ?? null}
          optional
          @value-changed=${(e: CustomEvent) => {
            this.change(() => (device.map = e.detail));
            this.loadMowerMap(device);
          }}
        ></floorcast-entity-picker>
      </div>
      <div class="pick">
        <span>Camera</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["camera"]}
          .value=${device.camera ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.camera = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)} ${this.batteryPicker(device)}
      ${this.number("Rotation", device.rotation ?? 0, (v) => (device.rotation = v), 0.5, "°")}
      <label class="check"
        ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => this.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
        Mirror the map</label
      >
      <div class="row">
        <button @click=${() => this.loadMowerMap(device)}>${this._mapImages.has(device.id) ? "Reload map" : "Show map"}</button>
      </div>
      <p class="muted">
        Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the
        corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.
      </p>
      ${this.groundProperties(device)}
      ${this.deleteButton()}
    `;
  }

  private sprinklerProperties(device: Device) {
    return html`
      <h3>Sprinkler</h3>
      <div class="pick">
        <span>Valve</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["valve", "switch"]}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)}
      <label class="field wide">
        <span>Nozzle</span>
        <select @change=${(e: Event) => this.change(() => (device.nozzle = (e.target as HTMLSelectElement).value as "rotor" | "spray"))}>
          <option value="rotor" ?selected=${(device.nozzle ?? "rotor") === "rotor"}>Rotor (one sweeping stream)</option>
          <option value="spray" ?selected=${device.nozzle === "spray"}>Spray (whole arc at once)</option>
        </select>
      </label>
      ${this.number("Throw", device.radius ?? DEFAULT_THROW, (v) => (device.radius = Math.max(0.5, v)), 0.5, "m")}
      ${this.number("Start", device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 5, "°")}
      ${this.number("Arc", device.arc ?? 360, (v) => (device.arc = Math.min(360, Math.max(5, v))), 5, "°")}
      ${this.confirmCheck(device, true)}
      <p class="muted">
        Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the
        card a tap opens or closes the valve, holding opens its details.
      </p>
      ${this.deleteButton()}
    `;
  }

  private deviceProperties(device?: Device) {
    if (!device) return nothing;
    if (device.kind === "sprinkler") return this.sprinklerProperties(device);
    if (device.kind === "mower") return this.mowerProperties(device);
    if (device.kind === "vacuum") return this.vacuumProperties(device);
    if (device.kind === "camera") return this.cameraProperties(device);
    if (device.kind === "radar") return this.radarProperties(device);
    if (device.kind === "sensor") return this.sensorProperties(device);
    if (device.kind === "screen") return this.screenProperties(device);
    if (device.kind === "indicator") return this.indicatorProperties(device);
    const room = roomAt(this.level, deviceCentre(device));
    const sharing = device.entity
      ? this._plan!.levels.flatMap((level) => level.devices ?? []).filter((other) => other.entity === device.entity).length
      : 0;
    return html`
      <h3>${device.to ? "Line light" : "Light"}</h3>
      <div class="pick">
        <span>Entity</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["light", "switch"]}
          .value=${device.entity ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (device.entity = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(device.entity)}
      ${sharing > 1 ? html`<p class="muted">${sharing} light points use this entity and switch together.</p>` : nothing}
      ${device.to ? html`<p class="muted">Length ${dist(device.at, device.to).toFixed(2)} m</p>` : nothing}
      ${this.number(device.to ? "Glow width" : "Glow", device.radius ?? DEFAULT_GLOW, (v) => (device.radius = Math.max(0.2, v)), 0.25, "m")}
      ${this.confirmCheck(device)}
      <p class="muted">
        ${!room
          ? "Outside any room."
          : device.confirm
            ? html`In ${room.name}: tapping the room leaves this light out.`
            : html`In ${room.name}: tapping the room switches this light with the others in it.`}
        The glow stops at walls and reaches rooms open to this one.
      </p>
      ${this.deleteButton()}
    `;
  }

  /** Ask before switching: the card asks before a tap switches the device or moves the blind. */
  private confirmCheck(target: { confirm?: boolean }, askByDefault = false) {
    const asks = askByDefault ? target.confirm !== false : !!target.confirm;
    return html`<label class="check"
        ><input
          type="checkbox"
          .checked=${asks}
          @change=${(e: Event) =>
            this.change(() => {
              const checked = (e.target as HTMLInputElement).checked;
              target.confirm = checked === askByDefault ? undefined : checked;
            })}
        />
        Ask before switching</label
      >`;
  }

  /** Areas of Home Assistant and the area of every entity, read once when a room form needs them. */
  private _registry?: Registry | "loading" | "failed";

  private async loadRegistry(): Promise<void> {
    this._registry = "loading";
    type Entry = { entity_id: string; area_id: string | null; device_id: string | null; entity_category: string | null; hidden_by: string | null; disabled_by: string | null };
    try {
      const [areas, devices, entities, floors] = await Promise.all([
        this.hass.callWS<{ area_id: string; name: string; floor_id?: string | null }[]>({ type: "config/area_registry/list" }),
        this.hass.callWS<{ id: string; area_id: string | null }[]>({ type: "config/device_registry/list" }),
        this.hass.callWS<Entry[]>({ type: "config/entity_registry/list" }),
        this.hass.callWS<{ floor_id: string; name: string }[]>({ type: "config/floor_registry/list" }).catch(() => []),
      ]);
      const deviceArea = new Map(devices.map((device) => [device.id, device.area_id]));
      const floorNames = new Map(floors.map((floor) => [floor.floor_id, floor.name]));
      const entityArea: Record<string, string> = {};
      const entityDevice: Record<string, string> = {};
      for (const entry of entities) {
        if (entry.disabled_by || entry.hidden_by || entry.entity_category) continue;
        const area = entry.area_id ?? (entry.device_id ? deviceArea.get(entry.device_id) : null);
        if (area) entityArea[entry.entity_id] = area;
        if (entry.device_id) entityDevice[entry.entity_id] = entry.device_id;
      }
      this._registry = {
        areas: areas
          .map((area) => ({
            id: area.area_id,
            name: area.name,
            floor: area.floor_id ? floorNames.get(area.floor_id) : undefined,
            floorId: area.floor_id ?? undefined,
          }))
          .sort((a, b) => (a.floor ?? "~").localeCompare(b.floor ?? "~") || a.name.localeCompare(b.name)),
        entityArea,
        entityDevice,
        floors: floors.map((floor) => ({ id: floor.floor_id, name: floor.name })),
      };
    } catch {
      this._registry = "failed";
    }
  }

  /** Entities of the room's area the plan can show, unplaced ones first. */
  private areaEntities(room: Room, registry: Registry) {
    const used = planEntities(this._plan!);
    return Object.entries(registry.entityArea)
      .filter(([, area]) => area === room.area)
      .map(([entity]) => ({ entity, kind: areaKind(entity, this.hass.states[entity]), used: used.has(entity) }))
      .filter((row): row is { entity: string; kind: AreaKind; used: boolean } => !!row.kind)
      .sort((a, b) => Number(a.used) - Number(b.used) || AREA_KINDS.indexOf(a.kind) - AREA_KINDS.indexOf(b.kind) || a.entity.localeCompare(b.entity));
  }

  /** Doors or windows of the room an entity of the kind may go to: a blind to a window without one, a contact by its class. */
  private freeOpenings(room: Room, entity: string, kind: AreaKind): Opening[] {
    const openings = roomOpenings(this.level, room);
    if (kind === "blind") return openings.filter((o) => o.type === "window" && !o.cover);
    if (kind === "gate") return openings.filter((o) => o.type === "gate" && !o.cover);
    if (kind === "lock") return openings.filter((o) => o.type === "door" && !o.lock);
    const deviceClass = this.hass.states[entity]?.attributes.device_class;
    const type = deviceClass === "window" ? "window" : deviceClass === "opening" ? undefined : "door";
    return openings.filter((o) => !o.contact && (!type || o.type === type));
  }

  /**
   * Puts one entity of the area on the plan: a light or sensor in the room, a presence sensor in its list, a blind or
   * contact on a door or window. A temperature sensor takes the humidity and CO2 of its device as secondary values.
   */
  private placeEntity(room: Room, entity: string, kind: AreaKind, registry: Registry, at?: Point, opening?: Opening): void {
    const devices = (this.level.devices ??= []);
    const spot = at ?? spotsInRoom(room, 1, 0.5)[0];
    if (kind === "light") devices.push({ id: uid("light"), kind: "light", entity, at: spot, radius: DEFAULT_GLOW });
    if (kind === "camera")
      devices.push({ id: uid("camera"), kind: "camera", entity, at: spot, heading: 180, arc: DEFAULT_FIELD_OF_VIEW, radius: DEFAULT_CAMERA_RANGE });
    if (kind === "alarm") devices.push({ id: uid("sensor"), kind: "sensor", sensorType: "alarm", entity, at: spot });
    if (kind === "presence") room.occupancy = [...(room.occupancy ?? []), entity];
    if (kind === "climate") room.climate = entity;
    if ((kind === "blind" || kind === "gate") && opening) opening.cover = entity;
    if (kind === "lock" && opening) opening.lock = entity;
    if (kind === "contact" && opening) opening.contact = entity;
    if (kind === "sensor") {
      const used = planEntities(this._plan!);
      const device = registry.entityDevice[entity];
      const siblings = Object.keys(registry.entityArea).filter(
        (other) => other !== entity && device && registry.entityDevice[other] === device && areaKind(other, this.hass.states[other]) === "sensor" && !used.has(other),
      );
      const deviceClass = this.hass.states[entity]?.attributes.device_class;
      devices.push({
        id: uid("sensor"),
        kind: "sensor",
        sensorType: deviceClass === "temperature" ? "temperature" : deviceClass === "humidity" ? "humidity" : "generic",
        entity,
        at: spot,
        ...(siblings.length ? { secondary: siblings.slice(0, MAX_SECONDARY).map((id) => ({ entity: id })) } : {}),
      });
    }
  }

  /**
   * Place all: lights in a row across the middle of the room, sensors above them, alarms and cameras below, presence
   * sensors in the room's list, and a blind or contact where only one door or window fits. One step of undo.
   */
  private placeAll(room: Room, registry: Registry): void {
    this.change(() => {
      const rows = this.areaEntities(room, registry).filter((row) => !row.used);
      const lights = rows.filter((row) => row.kind === "light");
      spotsInRoom(room, lights.length, 0.5).forEach((at, i) => this.placeEntity(room, lights[i].entity, "light", registry, at));
      // A temperature sensor first, so the humidity of its device becomes its secondary value.
      const sensors = rows
        .filter((row) => row.kind === "sensor")
        .sort((a, b) => Number(this.hass.states[b.entity]?.attributes.device_class === "temperature") - Number(this.hass.states[a.entity]?.attributes.device_class === "temperature"));
      const placed = () => planEntities(this._plan!);
      const mains = sensors.filter((row) => !placed().has(row.entity));
      for (const row of mains) {
        if (placed().has(row.entity)) continue;
        this.placeEntity(room, row.entity, "sensor", registry, spotsInRoom(room, 1, 0.25)[0]);
      }
      const below = rows.filter((row) => row.kind === "alarm" || row.kind === "camera");
      spotsInRoom(room, below.length, 0.75).forEach((at, i) => this.placeEntity(room, below[i].entity, below[i].kind, registry, at));
      for (const row of rows.filter((row) => row.kind === "presence")) this.placeEntity(room, row.entity, "presence", registry);
      // One thermostat per room: the first of the area, when the room has none yet.
      const thermostat = rows.find((row) => row.kind === "climate");
      if (thermostat && !room.climate) this.placeEntity(room, thermostat.entity, "climate", registry);
      for (const row of rows.filter((row) => ON_OPENING.includes(row.kind))) {
        const free = this.freeOpenings(room, row.entity, row.kind);
        if (free.length === 1) this.placeEntity(room, row.entity, row.kind, registry, undefined, free[0]);
      }
    });
  }

  /** The room's Home Assistant area and the entities of it, to place one by one or all at once. */
  private areaSection(room: Room) {
    const registry = this._registry;
    if (registry === undefined) {
      queueMicrotask(() => this.loadRegistry());
      return nothing;
    }
    if (registry === "loading") return html`<p class="muted">Reading the areas of Home Assistant…</p>`;
    if (registry === "failed") return html`<p class="muted">The areas of Home Assistant could not be read.</p>`;
    const normal = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    const match = room.area === undefined ? registry.areas.find((area) => normal(area.name) === normal(room.name)) : undefined;
    const own = registry.floors.find((floor) => floor.id === this.level.floor)?.name;
    const floors = [...new Set(registry.areas.map((area) => area.floor))].sort((a, b) => Number(b === own) - Number(a === own));
    const rows = room.area ? this.areaEntities(room, registry) : [];
    // Place all leaves a blind or contact that fits more than one door or window for the list.
    const free = rows.filter(
      (row) => !row.used && (!ON_OPENING.includes(row.kind) || this.freeOpenings(room, row.entity, row.kind).length === 1),
    );
    return html`
      <label class="field wide">
        <span>Area</span>
        <select @change=${(e: Event) => this.change(() => (room.area = (e.target as HTMLSelectElement).value || null))}>
          <option value="" ?selected=${!room.area}>None</option>
          ${floors.map((floor) => {
            const options = registry.areas
              .filter((area) => area.floor === floor)
              .map((area) => html`<option value=${area.id} ?selected=${room.area === area.id}>${area.name}</option>`);
            return floor ? html`<optgroup label=${floor}>${options}</optgroup>` : options;
          })}
        </select>
      </label>
      ${match
        ? html`<div class="row">
            <button @click=${() => this.change(() => (room.area = match.id))}>Use the area ${match.name}</button>
          </div>`
        : nothing}
      ${room.area
        ? html`${rows.length
              ? html`<div class="area-list">
                  ${rows.map((row) => {
                    const name = this.hass.states[row.entity]?.attributes.friendly_name ?? row.entity;
                    const openings = ON_OPENING.includes(row.kind) ? this.freeOpenings(room, row.entity, row.kind) : [];
                    const action = row.used
                      ? html`<span class="muted">placed</span>`
                      : ON_OPENING.includes(row.kind)
                        ? openings.length
                          ? html`<select
                              @change=${(e: Event) => {
                                const opening = openings[Number((e.target as HTMLSelectElement).value)];
                                if (opening) this.change(() => this.placeEntity(room, row.entity, row.kind, registry, undefined, opening));
                              }}
                            >
                              <option value="">Put on…</option>
                              ${openings.map((o, i) => html`<option value=${i}>${openingName(this.level, room, o)}</option>`)}
                            </select>`
                          : html`<span class="muted">no free ${row.kind === "blind" ? "window" : row.kind === "gate" ? "gate" : row.kind === "lock" ? "door" : "door or window"}</span>`
                        : html`<button @click=${() => this.change(() => this.placeEntity(room, row.entity, row.kind, registry))}>Place</button>`;
                    return html`<div class="area-row">
                      <span class="area-name" title=${row.entity}>${name}</span>
                      <span class="muted">${AREA_KIND_NAMES[row.kind]}</span>
                      ${action}
                    </div>`;
                  })}
                </div>`
              : html`<p class="muted">The area has no lights, sensors, blinds or cameras the plan can show.</p>`}
            ${free.length
              ? html`<div class="row"><button @click=${() => this.placeAll(room, registry)}>Place all (${free.length})</button></div>
                  <p class="muted">
                    Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them
                    where they are. A blind or contact goes on its own only where one door or window fits.
                  </p>`
              : nothing}`
        : nothing}
    `;
  }

  private roomProperties(room?: Room) {
    if (!room) return nothing;
    const lights = roomLights(this.level, room);
    const thermometers = roomThermometers(this.level, room);
    const sensors = room.occupancy ?? [];
    return html`
      <h3>Room</h3>
      ${this.text("Name", room.name, (v) => (room.name = v))}
      ${this.areaSection(room)}
      <label class="check"
        ><input type="checkbox" .checked=${!!room.hideName} @change=${(e: Event) => this.change(() => (room.hideName = (e.target as HTMLInputElement).checked))} />
        Hide the name on the card</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!room.stairs} @change=${(e: Event) => this.change(() => (room.stairs = (e.target as HTMLInputElement).checked))} />
        Stairs</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!room.outdoor} @change=${(e: Event) => this.change(() => (room.outdoor = (e.target as HTMLInputElement).checked))} />
        Outdoor zone (no floor)</label
      >
      <label class="check"
        ><input type="checkbox" .checked=${!!room.garden} @change=${(e: Event) => this.change(() => (room.garden = (e.target as HTMLInputElement).checked))} />
        Part of the garden (hidden with it)</label
      >
      <p class="muted">
        Lights: ${lights.length ? lights.join(", ") : "none"}. Thermometers:
        ${thermometers.length ? thermometers.map((t) => t.entity).join(", ") : "none"}. Place both in Devices; the room
        takes what stands in it. People are counted by the radars and cameras that see the room.
      </p>
      <div class="pick">
        <span>Thermostat</span>
        <floorcast-entity-picker
          .hass=${this.hass}
          .domains=${["climate"]}
          .value=${room.climate ?? null}
          optional
          @value-changed=${(e: CustomEvent) => this.change(() => (room.climate = e.detail))}
        ></floorcast-entity-picker>
      </div>
      ${this.stateLine(room.climate)}
      ${room.climate
        ? html`<p class="muted">
            The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one.
            The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.
          </p>`
        : nothing}
      <h4>Presence sensors</h4>
      ${sensors.map(
        (entity, i) => html`<div class="pick">
            <span>Sensor ${i + 1}</span>
            <floorcast-entity-picker
              .hass=${this.hass}
              .domains=${["binary_sensor"]}
              .deviceClass=${["motion", "occupancy", "presence"]}
              .value=${entity || null}
              optional
              @value-changed=${(e: CustomEvent) =>
                this.change(() => {
                  const next = [...sensors];
                  next[i] = e.detail ?? "";
                  room.occupancy = next.filter(Boolean);
                })}
            ></floorcast-entity-picker>
          </div>
          ${this.stateLine(entity)}`,
      )}
      <div class="row">
        <button @click=${() => this.change(() => (room.occupancy = [...sensors, ""]))}>Add a presence sensor</button>
      </div>
      <p class="muted">
        A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card
        follow it. It does not count people.
      </p>
      ${this.hasRadar || sensors.length
        ? this.number("Occupancy hold", room.hold ?? DEFAULT_ROOM_HOLD, (v) => (room.hold = Math.max(0, v)), 5, "s")
        : nothing}
      ${this.deleteButton()}
    `;
  }

  /** A radar or a calibrated camera on the level, so its people are tracked and its rooms counted. */
  private get hasRadar(): boolean {
    return (this.level.devices ?? []).some(
      (device) => device.kind === "radar" || (device.kind === "camera" && !!device.frigate && (device.calibration?.length ?? 0) >= 4),
    );
  }

  /** Settings of the people tracking of radars or of cameras, shared by all levels; zones and rooms are common to both. */
  private trackingProperties(kind: "radar" | "camera") {
    type Key = Exclude<keyof TrackingSettings, "camera">;
    const values: Omit<TrackingSettings, "camera"> = (kind === "radar" ? this._plan!.tracking : this._plan!.tracking?.camera) ?? {};
    const set = (key: Key, v: number) =>
      (this._plan!.tracking =
        kind === "radar"
          ? { ...this._plan!.tracking, [key]: v }
          : { ...this._plan!.tracking, camera: { ...this._plan!.tracking?.camera, [key]: v } });
    // Label, key, radar default, camera default, step, unit, limits.
    const rows: [string, Key, number, number, number, string, number, number][] = [
      ["Snap into rooms within", "snap_distance", 1, 1, 0.1, "m", 0, 3],
      ["Merge closer than", "merge_distance", 0.8, 0.8, 0.1, "m", 0.1, 3],
      ["Smoothing (1 = none)", "smoothing", 0.5, 0.6, 0.1, "", 0.1, 1],
      ["Count a new person after", "confirm_delay", 1, 0.5, 0.5, "s", 0, 30],
      ["Longest step", "jump_base", 1.5, 1.5, 0.1, "m", 0.5, 10],
      ["Walking speed", "jump_speed", 2.5, 2.5, 0.1, "m/s", 0.5, 10],
      ["Keep a missed person", "lost_hold", 5, 10, 1, "s", 0, 120],
      ["Resting place hold", "stationary_hold", DEFAULT_STATIONARY_HOLD, DEFAULT_STATIONARY_HOLD, 30, "s", 0, 3600],
      ["Remember a lost person", "sleep_hours", 12, 12, 1, "h", 0, 48],
    ];
    // Folded: set once, then rarely touched; the lists of radars, cameras and zones stay in view.
    return html`<details class="settings">
      <summary>${kind === "radar" ? "Radar tracking settings" : "Camera tracking settings"}</summary>
      ${rows.map(([label, key, radarDefault, cameraDefault, step, unit, min, max]) =>
        this.number(label, values[key] ?? (kind === "radar" ? radarDefault : cameraDefault), (v) => set(key, Math.min(max, Math.max(min, v))), step, unit),
      )}
      <p class="muted">
        A detection just outside the rooms its ${kind} sees is moved inside, up to the snap distance;
        ${kind === "radar" ? "a radar target farther out is dropped." : "a camera keeps people farther out, in the garden."} A missed
        person stays where they were for a while; seen again within walking distance, it is the same person.
        ${kind === "camera" ? "A camera person next to a radar person counts once." : ""}
      </p>
    </details>`;
  }

  private zoneProperties(zone?: Zone) {
    if (!zone) return nothing;
    const defaultHold = zone.kind === "stationary" ? (this._plan!.tracking?.stationary_hold ?? DEFAULT_STATIONARY_HOLD) : DEFAULT_ROOM_HOLD;
    return html`
      <h3>Zone</h3>
      ${this.text("Name", zone.name, (v) => (zone.name = v))}
      <label class="field wide">
        <span>Use</span>
        <select @change=${(e: Event) => this.change(() => (zone.kind = (e.target as HTMLSelectElement).value as Zone["kind"]))}>
          ${(Object.keys(ZONE_LABELS) as Zone["kind"][]).map(
            (kind) => html`<option value=${kind} ?selected=${kind === zone.kind}>${ZONE_LABELS[kind]}</option>`,
          )}
        </select>
      </label>
      ${zone.kind === "count" || zone.kind === "stationary"
        ? this.number(zone.kind === "count" ? "Occupancy hold" : "Keeps a still person", zone.hold ?? defaultHold, (v) => (zone.hold = Math.max(0, v)), 5, "s")
        : nothing}
      <p class="muted">${ZONE_HINTS[zone.kind]}</p>
      ${this.deleteButton()}
    `;
  }

  private itemProperties(item?: Item) {
    if (!item) return nothing;
    return html`
      <h3>Object</h3>
      <label class="field wide">
        <span>Type</span>
        <select @change=${(e: Event) => this.change(() => this.retype(item, (e.target as HTMLSelectElement).value as ItemType))}>
          ${(Object.keys(ITEM_LABELS) as ItemType[]).map(
            (type) => html`<option value=${type} ?selected=${type === item.type}>${ITEM_LABELS[type]}</option>`,
          )}
        </select>
      </label>
      ${this.text("Name", item.name ?? "", (v) => (item.name = v || undefined))}
      ${item.center
        ? nothing
        : html`<label class="field wide">
            <span>Corners</span>
            <select
              @change=${(e: Event) =>
                this.change(() => {
                  const value = (e.target as HTMLSelectElement).value;
                  if (value === "round" || value === "square") item.corners = value;
                  else delete item.corners;
                })}
            >
              <option value="" ?selected=${!item.corners}>As the plan</option>
              <option value="round" ?selected=${item.corners === "round"}>Rounded</option>
              <option value="square" ?selected=${item.corners === "square"}>Square</option>
            </select>
          </label>`}
      ${item.rect
        ? html`${this.number("X", item.rect[0], (v) => (item.rect![0] = v))} ${this.number("Y", item.rect[1], (v) => (item.rect![1] = v))}
          ${this.number("Width", item.rect[2], (v) => (item.rect![2] = Math.max(0.1, v)))}
          ${this.number("Length", item.rect[3], (v) => (item.rect![3] = Math.max(0.1, v)))}
          ${this.number("Rotation", item.rotation ?? 0, (v) => (item.rotation = v), 5, "°")}`
        : nothing}
      ${item.center
        ? html`${this.number("X", item.center[0], (v) => (item.center![0] = v))} ${this.number("Y", item.center[1], (v) => (item.center![1] = v))}
          ${this.number("Diameter", item.diameter ?? 1, (v) => (item.diameter = Math.max(0.1, v)))}`
        : nothing}
      ${item.points ? html`<p class="muted">Drag corners; drag the middle of an edge to add a corner.</p>` : nothing}
      <div class="row">
        ${item.points
          ? html`<button
              title="Turns the shape back into a rectangle around it"
              @click=${() =>
                this.change(() => {
                  const box = levelBoundsOf(item);
                  item.rect = [fix(box.x), fix(box.y), fix(box.w), fix(box.h)];
                  item.rotation = 0;
                  delete item.points;
                })}
            >
              Rectangle
            </button>`
          : nothing}
        ${item.rect
          ? html`<button
              title="Turns the rectangle into a shape with free corners"
              @click=${() =>
                this.change(() => {
                  item.points = rectCorners(item).map((p) => [fix(p[0]), fix(p[1])] as Point);
                  delete item.rect;
                  delete item.rotation;
                })}
            >
              Free shape
            </button>`
          : nothing}
        ${this.deleteButton()}
      </div>
    `;
  }

  /** Changing the type keeps the place and size, converting between circle and rectangle. */
  private retype(item: Item, type: ItemType): void {
    const circle = CIRCLE_TYPES.includes(type);
    if (circle && !item.center) {
      const box = levelBoundsOf(item);
      item.center = [fix(box.x + box.w / 2), fix(box.y + box.h / 2)];
      item.diameter = fix(Math.max(0.2, Math.min(box.w, box.h)));
      delete item.rect;
      delete item.points;
      delete item.rotation;
    } else if (!circle && item.center) {
      const d = item.diameter ?? 1;
      item.rect = [fix(item.center[0] - d / 2), fix(item.center[1] - d / 2), d, d];
      item.rotation = 0;
      delete item.center;
      delete item.diameter;
    }
    item.type = type;
  }

  static styles = [
    planStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
        font-size: 14px;
      }
      .loading {
        padding: 24px;
      }
      .top {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--divider-color);
        background: var(--app-header-background-color, var(--card-background-color));
      }
      .levels,
      .tools,
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .spacer {
        flex: 1;
      }
      button,
      .button,
      select {
        font: inherit;
        color: var(--primary-text-color);
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      button.on,
      .chip.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .chip {
        border-radius: 16px;
        padding: 4px 14px;
      }
      .ghost {
        border-style: dashed;
      }
      .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: 10px;
        padding-left: 12px;
        border-left: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
        cursor: pointer;
        user-select: none;
      }
      .switch:first-child {
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
      }
      .switch input {
        display: none;
      }
      .track {
        position: relative;
        width: 34px;
        height: 18px;
        border-radius: 9px;
        background: var(--divider-color, #444);
        transition: background 0.2s;
      }
      .knob {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        transition: left 0.2s;
      }
      .switch input:checked + .track {
        background: var(--primary-color);
      }
      .switch input:checked + .track .knob {
        left: 18px;
      }
      button.primary:not(:disabled) {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      button.danger {
        color: var(--error-color, #db4437);
      }
      button.small {
        padding: 2px 8px;
      }
      .main {
        flex: 1;
        display: flex;
        min-height: 0;
      }
      .main > [hidden] {
        display: none;
      }
      .guide {
        flex: 1;
        min-width: 0;
      }
      .canvas {
        flex: 1;
        min-width: 0;
        position: relative;
        background: var(--fc-background);
      }
      .view-buttons {
        position: absolute;
        right: 12px;
        bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .view-buttons button {
        width: 40px;
        height: 40px;
        padding: 0;
        font-size: 20px;
        line-height: 1;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
      }
      svg.plan {
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        user-select: none;
      }
      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2px;
        margin: -12px -16px 10px;
        padding: 0 8px;
        border-bottom: 1px solid var(--divider-color);
      }
      .tab {
        border: 0;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        background: none;
        padding: 8px 7px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .tab.on {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
        background: none;
      }
      aside .tools {
        margin-bottom: 10px;
      }
      aside .tools button,
      aside .tools select {
        padding: 4px 10px;
      }
      .back {
        border: 0;
        background: none;
        padding: 2px 0;
        color: var(--primary-color);
      }
      .filter {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        padding: 5px 8px;
        margin-bottom: 6px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .list-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 8px;
        text-align: left;
        border: 0;
        border-radius: 6px;
        background: none;
        padding: 6px 8px;
      }
      .list-row:not(.static):hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .list-row em {
        font-style: normal;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .list-row.unset em {
        color: var(--warning-color, #ffa600);
      }
      /* What the open tab does not edit stays on the plan, dimmed. */
      .mode-plan .kind,
      .mode-settings .kind,
      .mode-devices .kind-radar,
      .mode-people .kind:not(.kind-radar):not(.kind-camera) {
        opacity: 0.3;
      }
      .mode-devices [data-item],
      .mode-people [data-item] {
        opacity: 0.55;
      }
      /* Zones are edited in their tab; in the other tabs they show dimmed, unless the Zones layer is off. */
      .plan:not(.mode-people) .zone {
        opacity: 0.45;
      }
      .list-row.people em {
        color: var(--primary-color, #03a9f4);
        font-weight: 600;
      }
      .calibration-image {
        position: relative;
        margin: 6px 0;
        cursor: crosshair;
        line-height: 0;
      }
      .calibration-image img {
        width: 100%;
        border-radius: 8px;
        user-select: none;
      }
      .calibration-image .mark {
        position: absolute;
        transform: translate(-50%, -50%);
        min-width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 9px;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        background: #ab47bc;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
        pointer-events: none;
      }
      .big-image {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.85);
      }
      .big-image-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        color: #fff;
      }
      .big-image-bar span {
        flex: 1;
      }
      .big-image-spots {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        padding: 0 12px 6px;
        color: #fff;
      }
      .big-image-spots .list-row {
        width: auto;
        align-items: center;
      }
      .big-image-view {
        flex: 1;
        min-height: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px 12px;
      }
      .calibration-image.big {
        margin: 0;
        transition: transform 0.12s ease-out;
      }
      .calibration-image.big img {
        width: 100%;
        border-radius: 4px;
      }
      .calibration-image.big .mark {
        transform: translate(-50%, -50%);
      }
      .calibration-image .mark.waiting {
        background: var(--primary-color, #03a9f4);
      }
      .hit-line {
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .calibration-mark circle {
        fill: #ab47bc;
        stroke: #fff;
        stroke-width: 0.02;
      }
      .calibration-mark text {
        fill: #fff;
        text-anchor: middle;
        dominant-baseline: central;
        font-weight: 600;
        pointer-events: none;
      }
      .seen-path {
        fill: none;
        stroke: #ab47bc;
        stroke-opacity: 0.7;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .walk {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.25;
        stroke-width: 0.08;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .radar-range.camera {
        fill: #ab47bc;
        stroke: #ab47bc;
      }
      .radar-range {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.06;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
        pointer-events: none;
      }
      aside {
        width: 320px;
        overflow: auto;
        padding: 12px 16px;
        border-left: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      h3 {
        margin: 12px 0 8px;
        font-size: 15px;
      }
      h4 {
        margin: 10px 0 4px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .field {
        display: grid;
        grid-template-columns: 80px 1fr 28px;
        align-items: center;
        gap: 6px;
        margin: 6px 0;
      }
      .field.wide {
        grid-template-columns: 80px 1fr;
      }
      .field input,
      .field select {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .field em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .type-row {
        display: grid;
        grid-template-columns: 1fr 64px 24px 28px;
        gap: 6px;
        align-items: center;
        margin: 6px 0;
      }
      .type-row input,
      .level-row input {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .type-row em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .check {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 8px 0;
      }
      .pick {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .pick > span {
        color: var(--secondary-text-color);
      }
      .light {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      .light floorcast-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .plan.placing {
        cursor: crosshair;
      }
      .placing-bar {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 24px);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px 6px 14px;
        border-radius: 20px;
        background: var(--primary-color);
        color: #fff;
        font-size: 13px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      .placing-bar span {
        opacity: 0.9;
      }
      .placing-bar button {
        flex: none;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        border-color: transparent;
      }
      .toast {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 6px 6px 14px;
        border-radius: 20px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        font-size: 13px;
      }
      .find-box,
      .layers-box {
        position: relative;
      }
      .find {
        width: 180px;
        font: inherit;
        padding: 5px 8px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .find-results,
      .layers-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 5;
        min-width: 280px;
        max-height: 60vh;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 10px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      }
      .find-results button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        border: none;
        background: transparent;
      }
      .find-results button:hover {
        background: var(--secondary-background-color, #2a2e35);
      }
      .find-results em {
        font-style: normal;
        font-size: 11px;
        color: var(--secondary-text-color);
      }
            .add-section {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--divider-color);
      }
      .add-section h4 {
        margin: 0 0 6px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
      }
      .palette button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .palette button.on kbd {
        color: inherit;
        border-color: currentColor;
      }
      .palette {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin: 0;
      }
      .palette button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
      .palette kbd {
        font: inherit;
        font-size: 11px;
        padding: 0 5px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
      }
      details.settings {
        margin: 8px 0;
      }
      details.settings summary {
        cursor: pointer;
        font-weight: 500;
        padding: 4px 0;
      }
      .level-row {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 6px;
        align-items: center;
        margin: 4px 0 0;
      }
      .level-row select.floor {
        grid-column: 1 / -1;
        font-size: 12px;
        margin: 0 0 6px;
      }
      .level-row em {
        grid-column: 1 / -1;
        font-style: normal;
        font-size: 11px;
        margin: -2px 0 4px 2px;
      }
      .level-row + .row {
        margin-bottom: 12px;
      }
      .level-row.current input {
        border-color: var(--primary-color);
      }
      .start {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(420px, calc(100% - 32px));
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border-radius: 16px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      }
      .start h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 500;
      }
      .start button,
      .start label.button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        text-align: left;
        padding: 10px 12px;
      }
      .start span {
        font-size: 12px;
        opacity: 0.85;
      }
      .danger-title {
        color: var(--error-color, #db4437);
      }
      .colour-row {
        display: grid;
        grid-template-columns: 1fr 48px 28px;
        align-items: center;
        gap: 8px;
        margin: 4px 0;
        font-size: 13px;
      }
      .colour-row input[type="color"] {
        width: 48px;
        height: 26px;
        padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: none;
      }
      .crumbs {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 2px 0 4px;
      }
      .crumbs a {
        color: var(--primary-color);
        cursor: pointer;
      }
      .row.end {
        margin-top: 14px;
        padding-top: 10px;
        border-top: 1px solid var(--divider-color);
      }
      .danger.armed {
        background: var(--error-color, #db4437);
        color: #fff;
      }
      h3.link {
        cursor: pointer;
      }
      h3.link:hover {
        color: var(--primary-color);
      }
      .muted.warn {
        color: var(--warning-color, #ffa600);
      }
      .area-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 6px 0;
      }
      .area-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 8px;
        font-size: 13px;
      }
      .area-row .area-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .area-row select,
      .area-row button {
        font-size: 12px;
      }
      .muted {
        color: var(--secondary-text-color);
      }
      ul.muted {
        padding-left: 18px;
      }
      .message {
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 8px;
      }
      .grid {
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 0.01;
      }
      .lamp circle {
        fill: var(--fc-floor);
        stroke: var(--fc-light);
        stroke-width: 0.03;
        cursor: grab;
      }
      .lamp .core {
        fill: var(--fc-light);
        stroke: none;
      }
      .lamp.on circle {
        fill: var(--fc-light);
      }
      .lamp.on .core {
        fill: var(--fc-floor);
      }
      .state-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 6px 0;
        padding: 6px 8px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(255, 255, 255, 0.04));
      }
      .lamp.unset circle {
        stroke: var(--error-color, #db4437);
      }
      .lamp.unset .core {
        fill: var(--error-color, #db4437);
      }
      .lamp .line {
        stroke: var(--fc-light);
        stroke-linecap: round;
        cursor: grab;
      }
      .lamp.unset .line {
        stroke: var(--error-color, #db4437);
      }
      .mower-map {
        opacity: 0.5;
        pointer-events: none;
      }
      /* Wide click targets around small symbols, never drawn. */
      .hit,
      .mower-device .hit,
      .camera-device .hit {
        fill: transparent;
        cursor: grab;
      }
      .mower-device .anchor {
        fill: var(--fc-mower);
        cursor: grab;
      }
      .mower-device .anchor.vacuum {
        fill: var(--fc-water);
      }
      /* Only the head takes clicks; the water it throws lets the mower and the lawn below be picked. */
      .nozzle .area {
        pointer-events: none;
        fill: var(--fc-water);
        fill-opacity: 0.08;
        stroke: var(--fc-water);
        stroke-opacity: 0.6;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
      }
      .nozzle circle {
        fill: var(--fc-water);
        cursor: grab;
      }
      .nozzle.unset circle {
        fill: var(--error-color, #db4437);
      }
      .reach-line {
        fill: none;
        stroke: var(--fc-light);
        stroke-opacity: 0.1;
        stroke-linecap: round;
        pointer-events: none;
      }
      .reach {
        fill: var(--fc-light);
        fill-opacity: 0.08;
        stroke: var(--fc-light);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.1 0.08;
        pointer-events: none;
      }
      .handle {
        fill: #fff;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.02;
        cursor: grab;
      }
      .handle.mid {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.6;
      }
      .selected {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.55;
        pointer-events: none;
      }
      .zone .area {
        fill: var(--zone-color);
        fill-opacity: 0.08;
        stroke: var(--zone-color);
        stroke-width: 0.03;
        stroke-dasharray: 0.15 0.1;
        pointer-events: none;
      }
      .zone .edge {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .zone-label {
        fill: var(--zone-color);
        text-anchor: middle;
        dominant-baseline: middle;
        pointer-events: none;
      }
      .zone.count {
        --zone-color: #7e57c2;
      }
      .zone.entrance {
        --zone-color: #2e7d32;
      }
      .zone.exclude {
        --zone-color: #c62828;
      }
      .zone.stationary {
        --zone-color: #ef6c00;
      }
      .selected-area {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.12;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.03;
        pointer-events: none;
      }
      .draft,
      .draft-wall {
        fill: rgba(3, 169, 244, 0.12);
        stroke: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .draft-wall {
        fill: none;
        stroke-opacity: 0.6;
        stroke-linecap: square;
      }
      .draft {
        stroke-width: 0.03;
      }
      .cursor {
        fill: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .measure {
        fill: var(--primary-text-color);
        pointer-events: none;
      }
      .measure.typed {
        fill: var(--primary-color);
        font-weight: 600;
      }
      @media (max-width: 800px) {
        .main {
          flex-direction: column;
        }
        aside {
          width: auto;
          max-height: 40vh;
          border-left: 0;
          border-top: 1px solid var(--divider-color);
        }
      }
    `,
  ];
}

const ZONE_HINTS: Record<Zone["kind"], string> = {
  count: "Gets its own people count and occupancy sensors, like a room the radar sees.",
  entrance: "A person who appears here counts at once instead of after the confirm delay. Draw it at doors.",
  exclude: "Targets born here never count, and nobody is reported inside it.",
  stationary: "A person the radar loses here stays counted for the hold time, as someone lying still is often not seen.",
};

const HINTS: Record<Tool, string> = {
  select: "Click to select, click again for what lies below. Drag the selected thing to move it, drag elsewhere to move the plan.",
  wall: "Click to start a wall and click again for each corner. Double click or Esc ends.",
  door: "Click on a wall to place a door.",
  window: "Click on a wall to place a window.",
  gate: "Click on a wall to place a garage door or a driveway gate, then choose its cover.",
  room: "Drag for a rectangular room, or click its corners one by one and close it on the first corner or with Enter.",
  zone: "Drag or click corners like a room; then choose what the zone does for the radars.",
  calibrate: "Click the same spot on the plan.",
  screen: "Drag along the screen, then choose its power entity and its remote.",
  sensor: "Click where the sensor is, then choose its type and what it shows, such as a temperature or the level of the septic tank.",
  item: "Choose the kind of object, then drag to draw it.",
  indicator: "Click where the device is: a washer, a pump, a heater, a socket. It glows while it runs.",
  light: "Click where a light is, or choose Line and drag along a light strip; then choose its entity.",
  sprinkler: "Click where a sprinkler head is, then choose its valve, throw and arc.",
  mower: "Click on the lawn; the map of the mower appears there to be laid over the plan.",
  vacuum: "Click where the dock of the vacuum stands.",
  mark: "Click the spot where the vacuum stands now.",
  camera: "Click where the camera hangs, then aim it with the handle at the end of its view.",
  radar: "Click where the radar hangs, then aim it with the handle and check the dots follow people.",
};

/** Entity id part as Home Assistant makes it from plain ids: lower case, other characters as underscores. */
function slug(text: string): string {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "");
}

function levelBoundsOf(item: Item) {
  return levelBounds({ id: "", name: "", walls: [], openings: [], rooms: [], items: [item] }, 0);
}

defineElement("floorcast-panel", FloorCastPanel);

/** EXPERIMENTAL: a point ahead and right of a mower centre on the plan, as engine/ground.py does. */
function aheadToPlan([ahead, right]: Point, pose: { at: Point; heading: number }): Point {
  const r = (pose.heading * Math.PI) / 180;
  return [pose.at[0] + ahead * Math.cos(r) - right * Math.sin(r), pose.at[1] + ahead * Math.sin(r) + right * Math.cos(r)];
}

/** EXPERIMENTAL: a plan point as ahead and right of a mower centre. */
function planToAhead(p: Point, pose: { at: Point; heading: number }): Point {
  const r = (pose.heading * Math.PI) / 180;
  const dx = p[0] - pose.at[0];
  const dy = p[1] - pose.at[1];
  return [fix(dx * Math.cos(r) + dy * Math.sin(r)), fix(-dx * Math.sin(r) + dy * Math.cos(r))];
}
