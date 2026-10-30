// Sidebar panel: editor of the plan.
import { defineElement } from "./define";
import { LitElement, html, nothing, svg, type PropertyValues } from "lit";
import "./entity-picker";
import "./guide";
import { GroundFeed } from "./ground";
import { N_, pickLanguage, t, useDictionary } from "./i18n";
import { EDITOR_LANGUAGES } from "./i18n/editor-languages";
import examplePlan from "../../tools/example_plan.json";
import { type HomeAssistant } from "./ha";
import {
  CIRCLE_TYPES,
  DEFAULT_CAMERA_RANGE,
  DEFAULT_FIELD_OF_VIEW,
  DEFAULT_GLOW,
  DEFAULT_RADAR_RANGE,
  DEFAULT_RADAR_VIEW,
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
  type Plan,
  type Point,
  type Room,
  type Wall,
  type WallType,
  type Zone,
  type TrackedPerson,
  centroid,
  OPENING_NAMES,
  indicatorState,
  itemPoints,
  dist,
  emptyLevel,
  levelBounds,
  planRadius,
  pointOnWall,
  normalizeSensors,
  isPowered,
  projectOnWall,
  rectCorners,
  rotate,
  uid,
  homography,
  imageToPlan,
  readingText,
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
  renderMower,
  renderSpray,
  sprinklerArea,
} from "./render";

import {
  Tool,
  Selection,
  Mode,
  DRAG_PX,
  LOCK_KEY,
  LAYERS_KEY,
  Layer,
  LAYOUT_TOOLS,
  TOOL_NAMES,
  stored,
  store,
  storedList,
  storeList,
  MODES,
  MODE_TOOLS,
  TOOL_MODE,
  KEY_TOOLS,
  DEVICE_LABELS,
  Registry,
  View,
  Drag,
  ITEM_LABELS,
  SNAP_RADIUS,
  CORNER_SNAP,
  HISTORY_LIMIT,
  round,
  fix,
  clone,
  HINTS,
  aheadToPlan,
} from "./panel-defs";
import { panelStyles } from "./panel-styles";
import { mowerPose, pairsOf, renderBigImage, setPairs } from "./panel-devices";
import { renderProperties } from "./panel-forms";
import { loadWalks, renderList } from "./panel-lists";

export class FloorCastPanel extends LitElement {
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
  _plan?: Plan;
  _saved = "";
  _levelId = "";
  _tool: Tool = "select";
  _mode: Mode = "plan";
  /** The palette edited in Settings, dark or light; the one the plan shows without a choice. */
  _paletteMode?: "dark" | "light";
  /** The start screen of an empty plan was closed to draw from scratch. */
  private _startClosed = false;
  /** What was typed to confirm Delete everything. */
  _wipeText = "";
  /** A level whose delete was pressed once; a second press within a few seconds deletes it. */
  _deleteLevel?: string;
  /** Delete was pressed once: a second press within a few seconds deletes. */
  _confirmDelete = false;
  _confirmTimer?: number;
  /** Text the lists of the panel are narrowed to. */
  _filter = "";
  /** Spot clicked in the camera image, waiting for the same spot on the plan. */
  _imagePoint?: Point;
  /** The camera image is shown large over the plan while spots are picked, and how far it is zoomed in. */
  _bigImage = false;
  _imageZoom = { scale: 1, origin: [50, 50] as Point };
  /** Width to height of the camera image, known once it loaded; it sizes the large image to fill the view. */
  _imageAspect = 16 / 9;
  /** Which spots the large image adds to: the Frigate calibration, or the ground or mower calibration (experimental). */
  _calibrationTarget: "frigate" | "ground" | "mower" = "frigate";
  /** EXPERIMENTAL: camera images on the ground of the saved plan, shown while previewed. */
  /** Devices whose ground image is previewed; the feed runs while there is one. */
  _groundPreview = new Set<string>();
  _groundFeed = new GroundFeed(() => this.requestUpdate());
  /** Cameras of Frigate, read once when a camera is edited; empty without Frigate. */
  _frigateCameras?: { name: string; size: [number, number] | null }[];
  /** Where people walked in recent Frigate events of a camera, in image points, for checking its calibration. */
  _paths = new Map<string, Point[][]>();
  private _itemType: ItemType = "obstacle";
  private _wallType = "outer";
  _selection?: Selection;
  _view: View = { x: -5, y: -5, w: 10, h: 10 };
  private _draft: Point[] = [];
  private _cursor?: Point;
  _message = "";
  _saving = false;
  /** Length typed while drawing a wall, as "3.5" or "3.5<90" (angle counter-clockwise from east). */
  private _typed = "";
  private _lightShape: "point" | "line" = "point";
  /** Images of mower maps, loaded for calibration only; they are not part of the plan. */
  _mapImages = new Map<string, string>();
  /** Wall ends move alone instead of dragging joined walls along. */
  _endsAlone = false;
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
  _people?: Record<string, TrackedPerson[]>;
  /** Where people walked on this level in the chosen hours, while shown in People. */
  _walks?: Point[][];
  _walkHours = 24;
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
      this._message = t("The plan was brought to the new format (wall types, lights and sensors placed in the rooms). Save to keep it.");
    if (!plan.levels.some((level) => level.id === this._levelId)) this._levelId = plan.levels[0].id;
    this._selection = undefined;
    this.fit();
    // The canvas has its real size only after rendering.
    this.updateComplete.then(() => this.fit());
  }

  get wallTypes(): WallType[] {
    this._plan!.wallTypes ??= clone(DEFAULT_WALL_TYPES);
    return this._plan!.wallTypes;
  }

  wallType(id: string | undefined): WallType {
    return this.wallTypes.find((type) => type.id === id) ?? this.wallTypes[0] ?? DEFAULT_WALL_TYPES[0];
  }

  /** A changed thickness of a type reaches every wall of that type on every level. */
  applyWallType(type: WallType): void {
    for (const level of this._plan!.levels) for (const wall of level.walls) if (wall.type === type.id) wall.t = type.t;
  }

  get level(): Level {
    return this._plan!.levels.find((level) => level.id === this._levelId) ?? this._plan!.levels[0];
  }

  /** The level as drawn: without the garden when it is hidden, so hidden things cannot be picked. */
  get shown(): Level {
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
  notify(text: string): void {
    window.clearTimeout(this._toastTimer);
    this._toast = text;
    this._toastTimer = window.setTimeout(() => (this._toast = undefined), 5000);
  }

  /** Whether the layout lock keeps this thing where it is. */
  lockedKind(s: Selection | undefined): boolean {
    return this._locked && !!s && ["wall", "opening", "room", "item"].includes(s.kind);
  }

  /** The tab that edits a thing. */
  private modeFor(s: Selection): Mode {
    if (s.kind === "wall" || s.kind === "opening" || s.kind === "room" || s.kind === "item") return "plan";
    if (s.kind === "zone") return "people";
    return this.findDevice(s.id)?.kind === "radar" ? "people" : "devices";
  }

  /** Selects a thing and opens the tab that edits it. */
  select(s: Selection | undefined): void {
    this._confirmDelete = false;
    const message = this._message;
    if (s && !this.editable(s)) this.setMode(this.modeFor(s));
    this._selection = s;
    this._message = message;
  }

  /** Runs a change of the plan as one undoable step. */
  change(mutate: () => void): void {
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

  fit(): void {
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

  findWall(id: string): Wall | undefined {
    return this.level.walls.find((wall) => wall.id === id);
  }

  findOpening(id: string): Opening | undefined {
    return this.level.openings.find((opening) => opening.id === id);
  }

  findRoom(id: string): Room | undefined {
    return this.level.rooms.find((room) => room.id === id);
  }

  findZone(id: string): Zone | undefined {
    return (this.level.zones ?? []).find((zone) => zone.id === id);
  }

  findItem(id: string): Item | undefined {
    return this.level.items.find((item) => item.id === id);
  }

  findDevice(id: string): Device | undefined {
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
        ? t("{index} of {count} here: click again to select what lies below.", { index: candidates.indexOf(next!) + 1, count: candidates.length })
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
  pick(selection: Selection, at: Point): void {
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
      if (placing && this._history.length > historyBefore) this.notify(t("{name} placed", { name: t(TOOL_NAMES[placing] ?? N_("Item")) }));
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
        if (this._calibrationTarget === "mower" && !mowerPose(this, device)) {
          this._message = t("The mower reports no heading now; the spot is not kept.");
          return;
        }
        const pair = { image: this._imagePoint, plan: this.snap(p, event) };
        this.change(() => setPairs(this, device, [...pairsOf(this, device), pair]));
        this._imagePoint = undefined;
        this._tool = "select";
        const count = pairsOf(this, device).length;
        this._message =
          count < 4
            ? t("{count} of at least 4 spots. Click the next one in the image.", { count })
            : t("{count} spots; add more or press Done.", { count });
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
    if (drag.kind === "move" && drag.moved) this.notify(t("Moved"));
    if (drag.kind === "create-item" || drag.kind === "create-light" || drag.kind === "create-room") {
      const placing = this._tool;
      const historyBefore = this._history.length;
      queueMicrotask(() => {
        if (this._history.length > historyBefore) this.notify(t("{name} placed", { name: t(TOOL_NAMES[placing] ?? N_("Item")) }));
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
  async loadMowerMap(device: Device): Promise<void> {
    const camera = device.map ? this.hass.states[device.map] : undefined;
    const path = camera?.attributes.mowing_map_api_path as string | undefined;
    if (!path) {
      this._message = t("The map camera of the mower has no mowing map; choose the camera of the Dreame mower map.");
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
      this._message = t("Drag the map until its lawn covers the lawn of the plan; turn it with the handle at its corner.");
    } catch (err) {
      this._message = t("The mower map could not be read: {error}", { error: String((err as Error).message ?? err) });
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
      this._message = t("The vacuum did not report its position: {error}", { error: String((err as Error).message ?? err) });
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
    this._message = t("Put the vacuum on its dock, then press Dock is here.");
  }

  /** First pair: the dock, where the vacuum stands and where the device was placed on the plan. */
  async markDock(device: Device): Promise<void> {
    if (!device.entity) return;
    const robot = await this.vacuumPosition(device.entity);
    if (!robot) return;
    this.change(() => (device.pairs = [{ robot, plan: device.at }, ...(device.pairs ?? []).slice(1)]));
    this._message = t("Dock marked. Send the vacuum somewhere easy to find, then press Mark where it stands and click that spot.");
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
        ? t("Calibrated, but the distances differ by {percent}%: check the spot, or try Mirror.", { percent: Math.round(Math.abs(scale - 1) * 100) })
        : t("Calibrated: the vacuum now appears where it is.");
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
  duplicateSelection(): void {
    const s = this._selection;
    if (!s) return;
    if (this.lockedKind(s)) {
      this.notify(t("The layout is locked"));
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
      const zone: Zone = { id: uid("zone"), name: t("Zone {number}", { number: (this.level.zones ?? []).length + 1 }), kind: "count", points: this._draft };
      this.change(() => (this.level.zones ??= []).push(zone));
      this._draft = [];
      this._tool = "select";
      this._selection = { kind: "zone", id: zone.id };
      return;
    }
    const room: Room = { id: uid("room"), name: t("Room {number}", { number: this.level.rooms.length + 1 }), points: this._draft, lights: [] };
    this.change(() => this.level.rooms.push(room));
    this._draft = [];
    this._tool = "select";
    this._selection = { kind: "room", id: room.id };
  }

  private addOpening(p: Point, type: Opening["type"]): void {
    const found = this.nearestWall(p);
    if (!found) {
      this._message = t("Click on a wall to place it.");
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

  deleteSelection(): void {
    const s = this._selection;
    if (!s) return;
    if (this.lockedKind(s)) {
      this.notify(t("The layout is locked"));
      return;
    }
    this.notify(t("Deleted"));
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

  async save(): Promise<void> {
    if (!this._plan) return;
    this._saving = true;
    try {
      await this.hass.callWS({ type: "floorcast/plan/save", plan: this._plan });
      this._saved = JSON.stringify(this._plan);
      this._message = t("Saved.");
    } catch (err) {
      this._message = t("Not saved: {error}", { error: String((err as { message?: string }).message ?? err) });
    } finally {
      this._saving = false;
    }
  }

  exportPlan(): void {
    const blob = new Blob([JSON.stringify(this._plan, null, 1)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "floorcast-plan.json";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  importPlan(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    file.text().then((text) => {
      try {
        const plan = JSON.parse(text) as Plan;
        if (!Array.isArray(plan.levels) || !plan.levels.length) throw new Error(t("no levels"));
        const before = this.snapshot();
        this.setPlan(plan, false);
        this.remember(before);
        this._message = t("Imported. Save to keep it.");
      } catch (err) {
        this._message = t("Import failed: {error}", { error: (err as Error).message });
      }
    });
  }

  // ---- rendering ----

  render() {
    if (!this._plan) return html`<div class="loading">${t("Loading…")}</div>`;
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
                  if (this._walks) loadWalks(this, this._walkHours);
                }}
              >
                ${level.name}
              </button>`,
          )}
          <button
            class="chip ghost"
            title=${t("Add level")}
            @click=${() => {
              const level = emptyLevel(t("Level {number}", { number: this._plan!.levels.length + 1 }));
              this.change(() => this._plan!.levels.push(level));
              this._levelId = level.id;
            }}
          >
            +
          </button>
          <label class="switch" title=${t("Show or hide the garden around the house")}>
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
            ${t("Garden")}
          </label>
          <label class="switch" title=${t("Show live states: lights, water, mower, temperatures")}>
            <input type="checkbox" .checked=${this._live} @change=${() => (this._live = !this._live)} />
            <span class="track"><span class="knob"></span></span>
            ${t("Live")}
          </label>
          <span class="spacer"></span>
          ${this.renderFind()} ${this.renderLayers()}
          <button
            class=${this._locked ? "on" : ""}
            title=${this._locked ? t("Walls, doors, windows, rooms and objects stay where they are. Click to unlock.") : t("Lock walls, doors, windows, rooms and objects where they are")}
            @click=${() => {
              this._locked = !this._locked;
              store(LOCK_KEY, this._locked);
              if (this._locked && LAYOUT_TOOLS.includes(this._tool)) this.cancelTool();
            }}
          >
            ${this._locked ? "🔒" : "🔓"} ${t("Layout")}
          </button>
          <button class=${this._guide ? "on" : ""} @click=${() => (this._guide = !this._guide)} title=${t("How to draw the plan and what every part does")}>
            ${t("Guide")}
          </button>
          <button @click=${() => this.undo()} ?disabled=${!this._history.length} title=${t("Undo (Ctrl+Z)")}>${t("Undo")}</button>
          <button class="primary" @click=${() => this.save()} ?disabled=${!this.dirty || this._saving}>
            ${this.dirty ? t("Save") : t("Saved")}
          </button>
        </div>
      </div>
      <div class="main">
        ${this._guide ? html`<floorcast-guide class="guide"></floorcast-guide>` : nothing}
        <div class="canvas" ?hidden=${this._guide}>
          ${this.renderCanvas()} ${renderBigImage(this)} ${this.renderPlacing()} ${this.renderToast()} ${this.renderStart()}
          <div class="view-buttons">
            <button title=${t("Zoom in")} @click=${() => this.zoom(1 / 1.3)}>+</button>
            <button title=${t("Zoom out")} @click=${() => this.zoom(1.3)}>−</button>
            <button title=${t("Fit the plan and centre it")} @click=${() => this.fit()}>⌖</button>
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
      this.notify(t("The layout is locked"));
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
  wipePlan(): void {
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
    const name = TOOL_NAMES[this._tool];
    const label = name ? t(name) : this._tool;
    const hint = HINTS[this._tool];
    return html`<div class="placing-bar">
      <b>${label}</b><span>${hint ? t(hint) : nothing}</span>
      <button @click=${() => this.cancelTool()}>${t("Cancel (Esc)")}</button>
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
        ${t("Undo")}
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
        results.push({ label: room.name, detail: `${t("Room")} · ${level.name}`, level, s: { kind: "room", id: room.id }, at: centroid(room.points), text: `room ${t("Room")} ${room.name} ${room.area ?? ""}` });
      for (const device of level.devices ?? []) {
        const kind = t(device.kind === "sensor" && device.sensorType === "alarm" ? N_("Alarm") : DEVICE_LABELS[device.kind]);
        results.push({
          label: device.label || name(device.entity) || device.entity || kind,
          detail: `${kind} · ${device.entity ?? device.source ?? t("no entity")} · ${level.name}`,
          level,
          s: { kind: "device", id: device.id },
          at: device.at,
          text: `${kind} ${device.kind} ${device.label ?? ""} ${device.entity ?? ""} ${name(device.entity)} ${device.source ?? ""}`,
        });
      }
      for (const opening of level.openings) {
        const wall = level.walls.find((w) => w.id === opening.wall);
        if (!wall) continue;
        const kind = t(OPENING_NAMES[opening.type]);
        results.push({
          label: name(opening.cover) || name(opening.lock) || name(opening.contact) || kind,
          detail: `${kind} · ${[opening.contact, opening.cover, opening.lock].filter(Boolean).join(", ") || t("no sensor")} · ${level.name}`,
          level,
          s: { kind: "opening", id: opening.id },
          at: pointOnWall(wall, opening.at),
          text: `${kind} ${opening.type} ${opening.contact ?? ""} ${opening.cover ?? ""} ${opening.lock ?? ""} ${name(opening.contact)} ${name(opening.cover)} ${name(opening.lock)}`,
        });
      }
      for (const zone of level.zones ?? [])
        results.push({ label: zone.name, detail: `${t("Zone")} · ${level.name}`, level, s: { kind: "zone", id: zone.id }, at: centroid(zone.points), text: `zone ${t("Zone")} ${zone.name} ${zone.kind}` });
      for (const item of level.items) {
        const at = item.center ?? centroid(itemPoints(item));
        const label = t(ITEM_LABELS[item.type]);
        results.push({ label: item.name || label, detail: `${t("Object")} · ${level.name}`, level, s: { kind: "item", id: item.id }, at, text: `object ${t("Object")} ${label} ${item.type} ${item.name ?? ""}` });
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
        placeholder=${t("Find (/)")}
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
              : html`<p class="muted">${t("Nothing found.")}</p>`}
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
      <button class=${this._hidden.size ? "on" : ""} @click=${() => (this._layersOpen = !this._layersOpen)} title=${t("Show or hide parts of the plan")}>
        ${t("Layers")} ▾
      </button>
      ${this._layersOpen
        ? html`<div class="layers-menu">
            ${layer("devices", t("Devices"))} ${layer("zones", t("Zones"))} ${layer("names", t("Room names"))}
            <p class="muted">${t("Hidden parts cannot be clicked.")}</p>
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
                  const label = device.label || String(stateObj?.attributes.friendly_name ?? device.entity ?? t("Indicator"));
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
                    (device.sensorType === "temperature" ? "–°" : device.sensorType === "humidity" ? "–%" : t("Sensor")),
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
  stateLine(entity: string | null | undefined) {
    if (!entity) return nothing;
    const stateObj = this.hass.states[entity];
    if (!stateObj) return html`<p class="muted">${t("{entity} does not exist.", { entity })}</p>`;
    const domain = entity.split(".")[0];
    const brightness = stateObj.attributes.brightness;
    const detail = brightness && stateObj.state === "on" ? ` · ${Math.round((Number(brightness) / 255) * 100)}%` : "";
    const unit = stateObj.attributes.unit_of_measurement ? ` ${stateObj.attributes.unit_of_measurement}` : "";
    const name = stateObj.attributes.friendly_name ?? entity;
    let action: unknown = nothing;
    if (domain === "light" || domain === "switch") {
      action = html`<button class="small" @click=${() => this.hass.callService("homeassistant", "toggle", { entity_id: entity })}>
        ${stateObj.state === "on" ? t("Turn off") : t("Turn on")}
      </button>`;
    } else if (domain === "valve") {
      const open = stateObj.state === "open" || stateObj.state === "opening";
      action = html`<button
        class="small"
        @click=${() => {
          if (!open && !confirm(t("Open {name}? Water starts flowing.", { name: String(name) }))) return;
          this.hass.callService("valve", open ? "close_valve" : "open_valve", { entity_id: entity });
        }}
      >
        ${open ? t("Close") : t("Open")}
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
        const pose = mowerPose(this, device);
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
          ({ mode, label }) => html`<button class="tab ${mode === this._mode ? "on" : ""}" @click=${() => this.setMode(mode)}>${t(label)}</button>`,
        )}
      </nav>
      ${tools.length
        ? html`<section class="add-section">
            <h4>${t("Add")}</h4>
            <div class="palette">
              ${tools.map(([tool, label, key]) => {
                const locked = this._locked && LAYOUT_TOOLS.includes(tool);
                const on = this._tool === tool;
                return html`<button
                  class=${on ? "on" : ""}
                  ?disabled=${locked}
                  title=${locked ? t("Unlock the layout to draw") : t(HINTS[tool])}
                  @click=${() => (on ? this.cancelTool() : this.startTool(tool))}
                >
                  <span>${t(label)}</span><kbd>${key}</kbd>
                </button>`;
              })}
            </div>
            ${this.toolOptions() !== nothing ? html`<div class="tools">${this.toolOptions()}</div>` : nothing}
          </section>`
        : nothing}
      ${this._selection
        ? html`<button class="back" @click=${() => (this._selection = undefined)}>‹ ${t(MODES.find((m) => m.mode === this._mode)!.label)}</button>
            ${renderProperties(this)}`
        : renderList(this)}
      ${this._message ? html`<p class="message">${this._message}</p>` : nothing}
    `;
  }

  /** Choices of the active drawing tool: wall type, light shape, kind of object. */
  private toolOptions() {
    if (this._tool === "wall")
      return html`<select @change=${(e: Event) => (this._wallType = (e.target as HTMLSelectElement).value)} title=${t("Wall type")}>
        ${this.wallTypes.map(
          (type) => html`<option value=${type.id} ?selected=${type.id === this._wallType}>${type.name} ${(type.t * 100).toFixed(1)} cm</option>`,
        )}
      </select>`;
    if (this._tool === "light")
      return html`<select @change=${(e: Event) => (this._lightShape = (e.target as HTMLSelectElement).value as "point" | "line")}>
        <option value="point" ?selected=${this._lightShape === "point"}>${t("Point (click)")}</option>
        <option value="line" ?selected=${this._lightShape === "line"}>${t("Line (drag)")}</option>
      </select>`;
    if (this._tool === "item")
      return html`<select @change=${(e: Event) => (this._itemType = (e.target as HTMLSelectElement).value as ItemType)}>
        ${(Object.keys(ITEM_LABELS) as ItemType[]).map(
          (type) => html`<option value=${type} ?selected=${type === this._itemType}>${t(ITEM_LABELS[type])}</option>`,
        )}
      </select>`;
    return nothing;
  }

  /** Areas of Home Assistant and the area of every entity, read once when a room form needs them. */
  _registry?: Registry | "loading" | "failed";

  /** A radar or a calibrated camera on the level, so its people are tracked and its rooms counted. */
  get hasRadar(): boolean {
    return (this.level.devices ?? []).some(
      (device) => device.kind === "radar" || (device.kind === "camera" && !!device.frigate && (device.calibration?.length ?? 0) >= 4),
    );
  }

  static styles = [planStyles, panelStyles];
}

defineElement("floorcast-panel", FloorCastPanel);
