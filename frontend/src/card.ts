// Dashboard card: the plan with live states of rooms drawn on it.
import { defineElement } from "./define";
import "./card-editor";
import { type CardConfig } from "./card-config";
import { GroundFeed } from "./ground";
import {
  FRIEND_SECONDS,
  PLAYER_OUTFITS,
  type Player,
  STAR_EVERY,
  STAR_MAX,
  STAR_MIN,
  STAR_REACH,
  STAR_START,
  placeStar,
  stepPlayer,
} from "./pixel/play";
import { person } from "./pixel/sprites";
import { PixelView, type PixelTarget } from "./pixel/view";
import { N_, pickLanguage, t, useDictionary } from "./i18n";
import { CARD_LANGUAGES } from "./i18n/card-languages";
import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { keyed } from "lit/directives/keyed.js";
import { type HomeAssistant, fireEvent, isOn } from "./ha";
import { type CameraObject, type StillImage, type Device, type Level, type TrackedPerson, type Plan, type Point, type Room, DEFAULT_GLOW,
  centroid,
  deviceCentre,
  hasGarden,
  drawnBounds,
  openGroups,
  planRadius,
  polygonPath,
  itemPoints,
  pointInPolygon,
  pointOnWall,
  readingText,
  radarTargets,
  roomAt,
  roomLights,
  planEntities,
  roomThermometers,
  normalizeSensors,
  isPowered,
  HEAT_SCALES,
  alarmState,
  heatColour,
  roomHeat,
  roomClimate,
  indicatorState,
  SWITCHABLE_DOMAINS,
  type HeatKind,
  withoutGarden,
  GAME_REACH,
} from "./model";
import {
  PLAN_DEFS,
  renderCameraGlow,
  planStyles,
  renderCameraIcon,
  renderGlows,
  renderPerson,
  renderCameraObject,
  renderOpeningLabels,
  renderDeviceTag,
  readingSizes,
  NAME_PX,
  renderSensor,
  renderAlarm,
  renderLock,
  lockSpot,
  renderIndicator,
  trackHeading,
  renderScreen,
  renderScreenGlows,
  renderRadarIcon,
  renderLevel,
  applyPalette,
  planPalette,
  renderMower,
  renderSpray,
  renderVacuum,
  roomRadii,
} from "./render";


// Smallest text on screen in pixels, whatever the scale of the plan.
// Pixels per metre from which humidity and further sensors fit beside the temperature.
const DETAILS_PX_PER_M = 40;

// Narrowest level width in pixels that still reads well side by side.
const MIN_SIDE_WIDTH = 150;
// Height of the row with the name of a level over its plan, side by side.
const HOLD_MS = 350;
// The walking game: how near a light or a pet the action button reaches, in metres, and the keys it takes.
const ACTION_REACH = 1.3;
// How near a seat or bed the action button sits the character down, in metres; the character chosen last.
const SEAT_REACH = 0.7;
const PLAYER_KEY = "floorcast-card-player";
// Whether the action button of the game switches the real lights, and whether the game is always played by day.
const REAL_LIGHTS_KEY = "floorcast-card-play-lights";
const ALWAYS_DAY_KEY = "floorcast-card-play-day";
const KEYS: Record<string, "up" | "down" | "left" | "right" | "act"> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
  w: "up",
  s: "down",
  a: "left",
  d: "right",
  " ": "act",
  Enter: "act",
};
// The countdown of the lamp game in seconds, as COUNTDOWN of game.py, and how long Go shows after it.
const GAME_COUNTDOWN = 3;
const GO_MS = 900;
// A still covering someone moves away at most this often.
const STILL_MOVE_MS = 5000;
// Near its dock, closer than this in metres, a tap on a mower goes to the dock.
const DOCK_REACH = 1;
// Length of the tracks behind objects other than people.
const TRAIL_MS = 20_000;

/** Place of a mower or vacuum as the integration sends it. */
interface RobotPlace {
  at: Point;
  heading?: number;
  dock?: Point;
  state?: string;
  /** Id of the room a vacuum cleans. */
  room?: string;
}

interface RobotMessage {
  snapshot?: Record<string, Record<string, { place: RobotPlace | null; track: Point[] }>>;
  change?: { id: string; level: string; place: RobotPlace | null; added: Point[]; reset: boolean };
}
const GARDEN_KEY = "floorcast-card-garden";
// Zoom: the closest view in metres across, and how far fingers or the mouse move before it is no tap.
const MIN_ZOOM_WIDTH = 2;
const DRAG_PX = 6;
type Bounds = { x: number; y: number; w: number; h: number };
const HEAT_KEY = "floorcast-card-heat";
const HEAT_NAMES: Record<HeatKind, string> = { temperature: N_("Temperature"), humidity: N_("Humidity"), co2: N_("CO₂") };
const HEAT_TITLES: Record<HeatKind, string> = {
  temperature: N_("Rooms coloured by their temperature"),
  humidity: N_("Rooms coloured by their humidity"),
  co2: N_("Rooms coloured by their CO₂"),
};

/** A switch of the card remembered in this browser; the fallback when it was never set or without storage. */
function stored(key: string, fallback = false): boolean {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value === "1";
  } catch {
    return fallback;
  }
}

function store(key: string, on: boolean): void {
  try {
    localStorage.setItem(key, on ? "1" : "0");
  } catch {
    // Without storage the choice lasts until the page reloads.
  }
}

/**
 * What a tap does to a blind, as floorcast.press decides it: stop it moving, close it when open, else open it;
 * as the question Ask before switching shows.
 */
function coverAction(stateObj: { state: string; attributes: Record<string, any> } | undefined): string {
  if (stateObj?.state === "opening" || stateObj?.state === "closing") return N_("Stop {name}?");
  const position = stateObj?.attributes.current_position;
  const open = typeof position === "number" ? position > 0 : stateObj?.state === "open";
  return open ? N_("Close {name}?") : N_("Open {name}?");
}

/**
 * Small pixel pictures of the lamp game, drawn on a grid of 16, so they need no icon set and look the same in
 * Home Assistant and in the demo: a lamp, a star, a stop square, a cup, an hourglass and a clock.
 */
const GAME_ICONS: Record<string, [string, string][]> = {
  lamp: [
    ["#ffd65a", "M5 1h6v1h1v1h1v5h-1v1h-1v2h-6v-2h-1v-1h-1v-5h1v-1h1z"],
    ["#fff4b8", "M6 3h2v1h-1v2h-1z"],
    ["#9aa0aa", "M5 12h6v1h-6zM6 14h4v1h-4z"],
  ],
  star: [["#f8c838", "M7 1h2v4h5v2h-2v1h-1v2h1v4h-2v-1h-1v-1h-2v1h-1v1h-2v-4h1v-2h-1v-1h-2v-2h5z"]],
  stop: [["currentColor", "M3 3h10v10h-10z"]],
  cup: [
    ["#f8c838", "M3 1h10v1h2v4h-1v1h-2v1h-1v2h-1v2h2v2h-8v-2h2v-2h-1v-2h-1v-1h-2v-1h-1v-4h2zM2 3v2h1v-2zM13 3v2h1v-2z"],
    ["#fff0a0", "M5 2h2v1h-1v3h-1z"],
    ["#c88a20", "M4 14h8v1h-8z"],
  ],
  hourglass: [
    ["#c8a070", "M3 1h10v2h-10zM3 13h10v2h-10z"],
    ["#e8e8f0", "M4 3h8v2h-1v1h-1v1h-1v2h1v1h1v1h1v2h-8v-2h1v-1h1v-1h1v-2h-1v-1h-1v-1h-1z"],
    ["#f8c838", "M5 11h6v2h-6zM7 8h2v3h-2z"],
  ],
  clock: [
    ["#e8e8f0", "M5 1h6v1h2v2h1v2h1v4h-1v2h-1v2h-2v1h-6v-1h-2v-2h-1v-2h-1v-4h1v-2h1v-2h2z"],
    ["#2a2a2e", "M7 3h2v5h3v2h-5z"],
  ],
};

function gameIcon(name: string, size: number) {
  return svg`<svg class="game-icon" viewBox="0 0 16 16" width=${size} height=${size} shape-rendering="crispEdges" aria-hidden="true">
    ${GAME_ICONS[name].map(([fill, d]) => svg`<path fill=${fill} d=${d}></path>`)}
  </svg>`;
}

class FloorCastCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _plan: { state: true },
    _width: { state: true },
    _active: { state: true },
    _garden: { state: true },
    _heat: { state: true },
    _views: { state: true },
    _group: { state: true },
    _people: { state: true },
    _objects: { state: true },
    _pad: { state: true },
    _ask: { state: true },
    _gameEnd: { state: true },
    _gameIntro: { state: true },
    _full: { state: true },
    _play: { state: true },
    _picker: { state: true },
    _starsCollected: { state: true },
    _realLights: { state: true },
    _alwaysDay: { state: true },
    _screen: { state: true },
    _showWalks: { state: true },
    _walks: { state: true },
  };

  hass!: HomeAssistant;
  private _config!: CardConfig;
  private _plan?: Plan;
  private _width = 0;
  private _active?: string;
  private _garden = stored(GARDEN_KEY);
  private _heat = stored(HEAT_KEY, true);
  private _unsubscribe?: Promise<() => void>;
  private _unsubscribePeople?: Promise<() => void>;
  // People the integration tracks, per level; without them the card shows the raw radar targets.
  private _people?: Record<string, TrackedPerson[]>;
  private _unsubscribeObjects?: Promise<() => void>;
  // Objects Frigate tracks, per level, placed by the integration through the calibrated cameras.
  private _objects: Record<string, CameraObject[]> = {};
  // Screen whose remote control is open over the plan.
  private _pad?: Device;
  // A switch the card asks about first: the question and what Yes runs.
  private _ask?: { text: string; run: () => void; top: number };
  // The end of a lamp game this card saw happen, shown until closed; and the end it saw last, so an end from
  // before the card opened is not shown.
  private _gameEnd?: { result: string; score: number; goal: number; duration: number | null };
  private _gameEndSeen?: string | null;
  // The welcome window of the game is open.
  private _gameIntro = false;
  // The card is alone on the whole screen; the size its plan has there, for the view to fill it.
  private _full = false;
  private _screen?: { w: number; h: number };
  private _fullChanged = () => {
    this._full = !!this.shadowRoot?.fullscreenElement;
    this._screen = undefined;
    this._views = {};
    if (!this._full) this.stopPlay();
  };
  // The walking game, played on the whole screen: whether it runs, its character and level, the push of the
  // joystick, the keys held, its frame and when the view last followed; the level the card shows.
  private _play = false;
  private _player?: Player;
  private _playLevel?: string;
  private _push: [number, number] = [0, 0];
  private readonly _keys = new Set<string>();
  private _playFrame?: number;
  private _playLast = 0;
  private _cameraAt = 0;
  private _activeLevel?: Level;
  // The window choosing the character is open; the stars still to pick up, how many there were, the level they lie
  // on and when the round began; whether the stairs take the character to the other level when it next steps on them.
  private _picker = false;
  private readonly _stars = new Map<string, Point[]>();
  private _starsCollected = 0;
  private _nextStarAt = 0;
  private _stairsArmed = false;
  // Picker switches, kept on this browser: the action button switches the real lights, or only the drawn ones; the
  // pixel view shows the day whatever the clock. The drawn lights the game switched (until it stops), and the home
  // the pixel view was last given with them, made again only when the states or the drawn lights change.
  private _realLights = true;
  private _alwaysDay = false;
  private readonly _fakeLights = new Map<string, boolean>();
  private _fakeVersion = 0;
  private _pixelHass?: { from: HomeAssistant; version: number; day: boolean; hass: HomeAssistant };
  // The phase of the game last seen, when this card saw the countdown begin, until when Go shows, and the timer
  // redrawing them.
  private _gamePhase: string | null = null;
  private _countdownFrom?: number;
  private _goUntil?: number;
  private _countdownTimer?: number;
  private _askTimer?: number;
  // Where the last touch on the card was, from its top: the question stands next to it.
  private _pointerTop = 0;
  private _resize = new ResizeObserver((entries) => {
    this._width = entries[0].contentRect.width;
  });
  private _holdTimer?: number;
  private _held = false;
  // Zoom: the view of each level while it differs from its default, the pointers on the plan, and
  // whether the last gesture moved the plan, so its pointerup is no tap.
  private _views: Record<string, Bounds> = {};
  // Levels side by side zoom and move together as one drawing: its scale and shift on the screen.
  private _group?: { s: number; tx: number; ty: number };
  // Levels side by side as one picture: it reaches past their visible parts on its outer sides (the first
  // level to the left, the last to the right, all up and down) as far as their drawings go. In pixels of the
  // unzoomed card: where the visible parts start in the picture, and the sizes of the picture and the frame.
  private _picture = { left: 0, top: 0, width: 1, height: 1, frameWidth: 1, frameHeight: 1 };
  private _pointers = new Map<number, { x: number; y: number }>();
  private _gesture?: { level: string; start: Bounds; points: { x: number; y: number }[]; rect: DOMRect };
  private _dragged = false;
  private _zoomTimer?: number;
  private _groupStart?: { s: number; tx: number; ty: number };
  // Ids of gradients and clip paths must differ between cards on one dashboard.
  private _uid = `fc${Math.random().toString(36).slice(2, 8)}`;
  // Mowers and vacuums as the integration places them, with their tracks.
  // Last heading drawn for each mower, counted on past a full turn (turnedHeading).
  private _headings = new Map<string, number>();
  // Bounds of each level drawn by the current render, set by renderLevel; read by drawnPart.
  private _drawnParts = new Map<string, Bounds>();
  private _robots = new Map<string, { level: string; place: RobotPlace | null; track: Point[] }>();
  private _unsubscribeRobots?: Promise<() => void>;
  // Entities the levels of the card draw; undefined until the plan comes.
  private _watched?: Set<string>;
  // Count and occupancy of rooms and zones, by level and id, as the integration decides them.
  private _areas: Record<string, Record<string, { count: number; occupied: boolean }>> = {};
  // Frigate cameras that see someone now or did a moment ago.
  private _activeCameras: string[] = [];
  // Where people walked over the last day, by level, while the Paths switch is on.
  private _walks: Record<string, Point[][]> = {};
  private _showWalks = false;
  private _walksTimer?: number;
  // Cameras whose still is shown, and when the stills were last refreshed.
  private _stills = new Set<string>();
  // Detections a still was closed on by hand; it stays closed until the camera sees someone new.
  private _dismissed = new Map<string, Set<string>>();
  // Where each still stands, as an offset from its camera or mower, and when it last moved there.
  private _stillSpot = new Map<string, { offset: Point; time: number }>();
  // Recent positions of every person and object, for their tracks: [x, y, time].
  private _paths = new Map<string, { level: string; camera: boolean; points: [number, number, number][] }>();
  private _stillTime = Date.now();
  private _stillTimer?: number;
  // Camera entities whose still the last render showed, and the stills the integration sends for them
  // about every second; failed when the integration cannot send them and the picture of HA is used.
  private _shownStills = new Set<string>();
  // EXPERIMENTAL: devices whose preview the last render laid on the ground, and their images from the integration.
  private _shownGround = new Set<string>();
  private _groundFeeds = new Map<string, GroundFeed>();
  private _stillFeeds = new Map<string, { unsubscribe: Promise<() => void>; image?: StillImage; failed: boolean }>();
  // Pixel look: the drawing under the plan, the levels the last render showed in it, and a count of plans
  // received so a saved plan draws its levels anew.
  private _pixel?: PixelView;
  private _pixelTargets: Omit<PixelTarget, "canvas">[] = [];
  private _planStamp = 0;
  private _gardenShown = false;
  // A touch that landed on a pet strokes it and goes no further: no light, room or hold under it.
  private _petTouch = false;
  private readonly _petCatch = {
    handleEvent: (event: PointerEvent) => {
      if (event.type === "pointerdown") this._petTouch = !!this._pixel?.stroke(event);
      if (!this._petTouch) return;
      event.stopPropagation();
      if (event.type === "click") this._petTouch = false;
    },
    capture: true,
  };

  setConfig(config: CardConfig): void {
    this._config = { layout: "auto", ...config };
    // A new default view or zoom setting starts from the default view.
    this.resetViews();
    if (this._plan && this.hass) this.followPlan();
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("floorcast-card-editor");
  }

  static getStubConfig(): Partial<CardConfig> {
    return {};
  }

  getCardSize(): number {
    return 8;
  }

  connectedCallback(): void {
    super.connectedCallback();
    // Tracks fade, and stills from the picture of HA refresh, every few seconds.
    this._stillTimer = window.setInterval(() => {
      if (!this._stills.size && !this._activeCameras.length && !this._paths.size) return;
      this._stillTime = Date.now();
      this.requestUpdate();
    }, 5000);
    this._resize.observe(this);
    document.addEventListener("fullscreenchange", this._fullChanged);
    document.addEventListener("webkitfullscreenchange", this._fullChanged);
    if (this.hass) this._subscribe();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this._stillTimer);
    window.clearTimeout(this._zoomTimer);
    this.stopPlay();
    this._resize.disconnect();
    document.removeEventListener("fullscreenchange", this._fullChanged);
    document.removeEventListener("webkitfullscreenchange", this._fullChanged);
    this._unsubscribe?.then((unsubscribe) => unsubscribe());
    this._unsubscribe = undefined;
    this._unsubscribePeople?.then((unsubscribe) => unsubscribe()).catch(() => undefined);
    this._unsubscribePeople = undefined;
    this._unsubscribeObjects?.then((unsubscribe) => unsubscribe()).catch(() => undefined);
    this._unsubscribeObjects = undefined;
    this._unsubscribeRobots?.then((unsubscribe) => unsubscribe()).catch(() => undefined);
    this._unsubscribeRobots = undefined;
    window.clearInterval(this._walksTimer);
    this._groundFeeds.forEach((feed) => feed.stop());
    this._groundFeeds.clear();
    this._pixel?.stop();
    this._pixel = undefined;
    this._stillFeeds.forEach((feed) => feed.unsubscribe.then((unsubscribe) => unsubscribe()).catch(() => undefined));
    this._stillFeeds.clear();
  }

  protected willUpdate(changed: PropertyValues): void {
    // The language before drawing: the plan's choice, else the user's language in Home Assistant.
    if (changed.has("hass") || changed.has("_plan"))
    {
      const code = pickLanguage(this._plan?.language, this.hass?.language, Object.keys(CARD_LANGUAGES));
      useDictionary(CARD_LANGUAGES[code], code);
    }
  }

  protected updated(changed: PropertyValues): void {
    // The pixel look has colours of its own; its labels and switches keep the dark palette, light on the drawing.
    const theme = this._config?.look === "pixel" ? "dark" : this._config?.theme;
    if (changed.has("hass") || changed.has("_plan") || changed.has("_config"))
      applyPalette(this, planPalette(this._plan?.appearance, this.hass?.themes?.darkMode, theme).colours);
    if (changed.has("hass") && !this._unsubscribe && this.isConnected) this._subscribe();
    if (this.isConnected) this.followStills();
    if (this.isConnected) this.followGround();
    if (this.isConnected) this.followPixel();
    if (changed.has("hass")) this.followGame();
    if (this._picker) this.drawFigures();
    // On the whole screen the plan takes the size left under the bar of switches; the view follows it.
    if (this._full) {
      const area = this.renderRoot.querySelector(".levels")?.getBoundingClientRect();
      if (area && area.width > 0 && area.height > 0 && (!this._screen || Math.abs(this._screen.w - area.width) > 1 || Math.abs(this._screen.h - area.height) > 1))
        this._screen = { w: area.width, h: area.height };
    }
  }

  /** Pixel look: hands the canvases of the last render to the drawing, or stops it when the card draws the plan. */
  private followPixel(): void {
    if (this._config?.look !== "pixel") {
      this._pixel?.stop();
      this._pixel = undefined;
      return;
    }
    this._pixel ??= new PixelView({
      hass: () => this.pixelHass(),
      plan: () => this._plan,
      people: (level) => (this._people ? (this._people[level.id] ?? []) : this.levelPeople(level)),
      robot: (id) => this._robots.get(id)?.place,
      player: (level) => (this._play && level.id === this._playLevel ? this._player : undefined),
      stars: (level) => (this._play ? (this._stars.get(level.id) ?? []) : []),
      track: (id) => this._robots.get(id)?.track ?? [],
    });
    const targets: PixelTarget[] = [];
    for (const target of this._pixelTargets) {
      const element = this.renderRoot.querySelector<HTMLCanvasElement>(`canvas.pixel[data-level="${CSS.escape(target.level.id)}"]`);
      if (element) targets.push({ ...target, canvas: element });
    }
    this._pixel.sync(targets);
  }

  /** EXPERIMENTAL: subscribes to the ground images of the previews the last render showed, drops the others. */
  private followGround(): void {
    for (const id of this._shownGround) {
      if (this._groundFeeds.has(id)) continue;
      const feed = new GroundFeed(() => this.requestUpdate());
      feed.start(this.hass, [id]);
      this._groundFeeds.set(id, feed);
    }
    for (const [id, feed] of this._groundFeeds) {
      if (this._shownGround.has(id)) continue;
      feed.stop();
      this._groundFeeds.delete(id);
      this.requestUpdate();
    }
  }

  /** Subscribes to the stills of the cameras the last render showed, and drops the ones it no longer shows. */
  private followStills(): void {
    for (const entity of this._shownStills) {
      if (this._stillFeeds.has(entity)) continue;
      const feed: { unsubscribe: Promise<() => void>; image?: StillImage; failed: boolean } = {
        unsubscribe: this.hass.connection.subscribeMessage<{ image: StillImage }>(
          (message) => {
            // The image is shown once decoded, so a phone does not blank the still while it decodes.
            const show = () => {
              feed.image = message.image;
              this.requestUpdate();
            };
            const decoder = new Image();
            decoder.src = message.image.data;
            decoder.decode().then(show, show);
          },
          { type: "floorcast/still/subscribe", entity_id: entity },
        ),
        failed: false,
      };
      feed.unsubscribe.catch(() => {
        feed.failed = true;
        this.requestUpdate();
      });
      this._stillFeeds.set(entity, feed);
    }
    for (const [entity, feed] of this._stillFeeds) {
      if (this._shownStills.has(entity)) continue;
      feed.unsubscribe.then((unsubscribe) => unsubscribe()).catch(() => undefined);
      this._stillFeeds.delete(entity);
    }
  }

  private _subscribe(): void {
    this._unsubscribe = this.hass.connection.subscribeMessage<{ plan: Plan }>(
      (message) => {
        // A plan saved before sensors were unified still draws its thermometers and second readings.
        message.plan.levels.forEach(normalizeSensors);
        this._plan = message.plan;
        this._planStamp++;
        this.followPlan();
      },
      { type: "floorcast/plan/subscribe" },
    );
  }

  /**
   * After every plan: the entities the card draws, so a change of any other entity in Home Assistant does not draw
   * it again, and the streams it needs: people only with radars, cameras or presence sensors, objects only with
   * Frigate cameras, robots only with a mower or a vacuum on the levels it shows.
   */
  private followPlan(): void {
    const levels = this.levels();
    const devices = levels.flatMap((level) => level.devices ?? []);
    const watched = planEntities({ levels });
    for (const radar of devices.filter((d) => d.kind === "radar" && d.source)) {
      watched.add(`sensor.${radar.source}_presence_target_count`);
      for (let i = 1; i <= 3; i++) for (const axis of ["x", "y"]) watched.add(`sensor.${radar.source}_target_${i}_${axis}`);
    }
    this._watched = watched;
    const people = devices.some((d) => d.kind === "radar" || (d.kind === "camera" && !!d.frigate)) || levels.some((l) => l.rooms.some((r) => r.occupancy?.length));
    const objects = devices.some((d) => d.kind === "camera" && !!d.frigate);
    const robots = devices.some((d) => d.kind === "mower" || d.kind === "vacuum");
    if (people && !this._unsubscribePeople) this.followPeople();
    if (!people && this._unsubscribePeople) {
      this._unsubscribePeople.then((unsubscribe) => unsubscribe()).catch(() => undefined);
      this._unsubscribePeople = undefined;
      this._people = undefined;
      this._areas = {};
    }
    if (objects && !this._unsubscribeObjects) this.followObjects();
    if (!objects && this._unsubscribeObjects) {
      this._unsubscribeObjects.then((unsubscribe) => unsubscribe()).catch(() => undefined);
      this._unsubscribeObjects = undefined;
      this._objects = {};
      this._activeCameras = [];
    }
    if (robots && !this._unsubscribeRobots) {
      this._unsubscribeRobots = this.hass.connection.subscribeMessage<RobotMessage>((message) => this.followRobots(message), {
        type: "floorcast/robots/subscribe",
      });
      this._unsubscribeRobots.catch(() => undefined);
    }
    if (!robots && this._unsubscribeRobots) {
      this._unsubscribeRobots.then((unsubscribe) => unsubscribe()).catch(() => undefined);
      this._unsubscribeRobots = undefined;
      this._robots = new Map();
    }
  }

  /**
   * Draws again only when something it shows changed: its own state, the plan, the configuration, or an entity
   * it draws; Home Assistant sends a new state object for every change of any entity.
   */
  protected shouldUpdate(changed: PropertyValues): boolean {
    if (changed.size !== 1 || !changed.has("hass") || !this._watched) return true;
    const before = changed.get("hass") as HomeAssistant | undefined;
    if (!before || before.language !== this.hass.language || before.themes !== this.hass.themes) return true;
    for (const id of this._watched) if (before.states[id] !== this.hass.states[id]) return true;
    return false;
  }

  private followPeople(): void {
    this._unsubscribePeople = this.hass.connection.subscribeMessage<{
      people: Record<string, TrackedPerson[]>;
      areas?: Record<string, Record<string, { count: number; occupied: boolean }>>;
    }>(
      (message) => {
        this._people = message.people;
        this._areas = message.areas ?? {};
      },
      { type: "floorcast/people/subscribe" },
    );
    // Without the people tracking (not set up yet) the raw targets stay on the plan.
    this._unsubscribePeople.catch(() => (this._people = undefined));
  }

  private followObjects(): void {
    this._unsubscribeObjects = this.hass.connection.subscribeMessage<{ objects: Record<string, CameraObject[]>; active?: string[] }>(
      (message) => {
        this._objects = message.objects;
        this._activeCameras = message.active ?? [];
        for (const [level, objects] of Object.entries(message.objects)) for (const o of objects) this.record(level, `o${o.id}`, o.x, o.y, true);
      },
      { type: "floorcast/objects/subscribe" },
    );
    this._unsubscribeObjects.catch(() => (this._objects = {}));
  }

  /** Robots from the integration: every one with its whole track first, then each change with its new points. */
  private followRobots(message: RobotMessage): void {
    if (message.snapshot) {
      this._robots = new Map();
      for (const [level, robots] of Object.entries(message.snapshot))
        for (const [id, robot] of Object.entries(robots)) this._robots.set(id, { level, place: robot.place, track: robot.track });
    }
    const change = message.change;
    if (change) {
      const robot = this._robots.get(change.id) ?? { level: change.level, place: null, track: [] };
      robot.level = change.level;
      robot.place = change.place;
      robot.track = change.reset ? [...change.added] : [...robot.track, ...change.added];
      this._robots.set(change.id, robot);
    }
    this.requestUpdate();
  }

  /** Clicks with their own logic go to the integration, which does the same for automations. */
  private press(target: { room?: string; opening?: string; device?: string }): void {
    // With the child lock only a room, which switches its lights, is pressed.
    if (this._config.child_lock && !target.room) return;
    this.hass.callService("floorcast", "press", target);
  }

  /** The Paths switch: where people walked over the last day, read again every minute while on. */
  private toggleWalks(levels: Level[]): void {
    this._showWalks = !this._showWalks;
    window.clearInterval(this._walksTimer);
    this._walks = {};
    if (!this._showWalks) return;
    const read = () =>
      levels.forEach((level) =>
        this.hass
          .callWS<{ walks: Point[][] }>({ type: "floorcast/history/get", level: level.id, hours: 24 })
          .then((result) => {
            this._walks = { ...this._walks, [level.id]: result.walks };
          })
          .catch(() => undefined),
      );
    read();
    this._walksTimer = window.setInterval(read, 60_000);
  }

  private renderWalks(level: Level) {
    if (!this._showWalks) return nothing;
    // Only the parts of the walks on the shown part of the plan, as for people.
    return (this._walks[level.id] ?? [])
      .map((walk) => walk.filter((p) => this.onPlan(level, p[0], p[1])))
      .filter((walk) => walk.length > 1)
      .map((walk) => svg`<polyline class="fc-walk" points=${walk.map((p) => `${p[0]},${p[1]}`).join(" ")}></polyline>`);
  }

  /** Adds a position to the track of a person or object; points older than the track length go. */
  private record(level: string, key: string, x: number, y: number, camera: boolean): void {
    const now = Date.now();
    const path = this._paths.get(key) ?? { level, camera, points: [] };
    const last = path.points.at(-1);
    if (!last || Math.hypot(last[0] - x, last[1] - y) > 0.1) path.points.push([x, y, now]);
    this._paths.set(key, path);
    for (const [other, { points }] of this._paths) {
      while (points.length && now - points[0][2] > TRAIL_MS) points.shift();
      if (!points.length) this._paths.delete(other);
    }
  }

  /** The part of the level the card shows: the crop chosen for it in the card editor, or all that is drawn. */
  /** The default view of a level: its visible part from the card configuration, or all of it. */
  private defaultBounds(level: Level): Bounds {
    const crop = this._config.crop?.[level.id];
    const base = crop ? { x: crop[0], y: crop[1], w: crop[2], h: crop[3] } : drawnBounds(level);
    if (!this._full || !this._screen) return base;
    // On the whole screen the view takes the proportions of the screen and covers it: the visible part fills the
    // screen, cut to its middle where it is too tall or too wide, and the rest of it is a move away.
    const ratio = this._screen.h / this._screen.w;
    if (base.h / base.w > ratio) {
      const h = base.w * ratio;
      return { x: base.x, y: base.y + (base.h - h) / 2, w: base.w, h };
    }
    const w = base.h / ratio;
    return { x: base.x + (base.w - w) / 2, y: base.y, w, h: base.h };
  }

  /** Zoom and move are on: by the card option, and always on the whole screen. */
  private get zoomOn(): boolean {
    return !!this._config.zoom || this._full;
  }

  /**
   * The walking game: a character on the active level moved with the joystick or the keys, the view following it.
   * It starts where it may stand nearest to the middle of the view.
   */
  private startPlay(outfit: number): void {
    this._picker = false;
    try {
      localStorage.setItem(PLAYER_KEY, String(outfit));
    } catch {
      // A browser without storage only forgets the choice.
    }
    const level = this._activeLevel;
    const pixel = this._pixel;
    if (!level || !pixel) return;
    const view = this.viewBounds(level);
    const centre: Point = [view.x + view.w / 2, view.y + view.h / 2];
    let start: Point | undefined;
    for (let r = 0; r <= 10 && !start; r += 0.25)
      for (let k = 0; k < 16 && !start; k++) {
        const a = (k / 16) * Math.PI * 2;
        const p: Point = [centre[0] + Math.cos(a) * r, centre[1] + Math.sin(a) * r];
        if (pixel.canStand(level.id, p)) start = p;
      }
    if (!start) return;
    this._player = { x: start[0], y: start[1], facing: "down", moving: false, walked: 0, outfit: PLAYER_OUTFITS[outfit] ?? PLAYER_OUTFITS[0] };
    this._playLevel = level.id;
    this._play = true;
    this._stairsArmed = !level.rooms.some((room) => room.stairs && pointInPolygon(start!, room.points));
    this._stars.clear();
    this._starsCollected = 0;
    this._nextStarAt = 0;
    this._push = [0, 0];
    window.addEventListener("keydown", this._keyDown);
    window.addEventListener("keyup", this._keyUp);
    this._playLast = performance.now();
    this._playFrame = requestAnimationFrame(this._playTick);
  }

  /**
   * Stars of the game: a level shown for the first time gets STAR_START, one below STAR_MIN gets one at once, and
   * every few seconds a random level shown with fewer than STAR_MAX gets one more. A level not shown waits for it.
   */
  private sowStars(now: number): void {
    const pixel = this._pixel;
    const player = this._player;
    if (!pixel || !player) return;
    const shown = this.levels().filter((l) => pixel.shows(l.id));
    const add = (level: Level): void => {
      const stars = this._stars.get(level.id) ?? [];
      const away: Point[] = level.id === this._playLevel ? [[player.x, player.y]] : [];
      const star = placeStar(drawnBounds(level), (p) => pixel.canStand(level.id, p), stars, away);
      if (star) this._stars.set(level.id, [...stars, star]);
    };
    for (const level of shown) {
      if (!this._stars.has(level.id)) {
        this._stars.set(level.id, []);
        for (let k = 0; k < STAR_START; k++) add(level);
      }
      if (this._stars.get(level.id)!.length < STAR_MIN) add(level);
    }
    if (now < this._nextStarAt) return;
    this._nextStarAt = now + (STAR_EVERY[0] + Math.random() * (STAR_EVERY[1] - STAR_EVERY[0])) * 1000;
    const room = shown.filter((l) => (this._stars.get(l.id)?.length ?? 0) < STAR_MAX);
    if (room.length) add(room[Math.floor(Math.random() * room.length)]);
  }

  /**
   * The home as the pixel view sees it: while the game plays, with the lights it switched only in the picture, and
   * the sun at noon when it is always day. Everything else of the card sees the real states.
   */
  private pixelHass(): HomeAssistant {
    const hass = this.hass;
    const day = this._play && this._alwaysDay;
    if (!day && !this._fakeLights.size) return hass;
    const last = this._pixelHass;
    if (last && last.from === hass && last.version === this._fakeVersion && last.day === day) return last.hass;
    const states = { ...hass.states };
    for (const [id, on] of this._fakeLights) if (states[id]) states[id] = { ...states[id], state: on ? "on" : "off" };
    const sun = states["sun.sun"];
    if (day) {
      states["sun.sun"] = {
        entity_id: "sun.sun",
        last_changed: sun?.last_changed ?? "",
        state: "above_horizon",
        attributes: { ...(sun?.attributes ?? {}), elevation: 40, azimuth: 180 },
      };
    }
    const seen: HomeAssistant = { ...hass, states };
    this._pixelHass = { from: hass, version: this._fakeVersion, day, hass: seen };
    return seen;
  }

  /** Opens the window choosing the character, with the switches as last set on this browser. */
  private openPicker(): void {
    try {
      this._realLights = localStorage.getItem(REAL_LIGHTS_KEY) !== "0";
      this._alwaysDay = localStorage.getItem(ALWAYS_DAY_KEY) === "1";
    } catch {
      // Without storage the switches start as they are.
    }
    this._picker = true;
  }

  /** A switch of the picker, kept on this browser. */
  private setPlayOption(key: string, on: boolean): void {
    if (key === REAL_LIGHTS_KEY) this._realLights = on;
    else this._alwaysDay = on;
    try {
      localStorage.setItem(key, on ? "1" : "0");
    } catch {
      // A browser without storage only forgets it.
    }
  }

  /** The last character chosen on this browser. */
  private chosenOutfit(): number {
    try {
      return Number(localStorage.getItem(PLAYER_KEY) ?? 0) || 0;
    } catch {
      return 0;
    }
  }

  private stopPlay(): void {
    this._play = false;
    this._picker = false;
    this._stars.clear();
    this._player = undefined;
    // The drawn lights go back to the real ones.
    this._fakeLights.clear();
    this._fakeVersion++;
    this._push = [0, 0];
    this._keys.clear();
    if (this._playFrame !== undefined) cancelAnimationFrame(this._playFrame);
    this._playFrame = undefined;
    window.removeEventListener("keydown", this._keyDown);
    window.removeEventListener("keyup", this._keyUp);
  }

  /** Each frame: the character moved by the stick or the keys, and the view moved after it now and then. */
  private readonly _playTick = (now: number): void => {
    this._playFrame = requestAnimationFrame(this._playTick);
    const dt = Math.min(0.1, (now - this._playLast) / 1000);
    this._playLast = now;
    const player = this._player;
    const pixel = this._pixel;
    const level = this.levels().find((l) => l.id === this._playLevel);
    if (!player || !pixel || !level) return;
    const keys = this._keys;
    const kx = (keys.has("right") ? 1 : 0) - (keys.has("left") ? 1 : 0);
    const ky = (keys.has("down") ? 1 : 0) - (keys.has("up") ? 1 : 0);
    const push: [number, number] = kx || ky ? [kx, ky] : this._push;
    // A push gets the character up from a seat or a bed.
    if (player.seat && Math.hypot(push[0], push[1]) > 0.3) player.seat = undefined;
    if (!player.seat) stepPlayer(player, push, dt, (p) => pixel.canStand(level.id, p));
    this.pickStars(player);
    this.climbStairs(level, player);
    this.sowStars(now);
    if (now - this._cameraAt > 50) {
      this._cameraAt = now;
      this.followPlayer(level, player);
    }
  };

  /** Stars within reach on the level of the character are picked up and counted. */
  private pickStars(player: Player): void {
    const level = this._playLevel;
    const stars = level ? this._stars.get(level) : undefined;
    if (!level || !stars?.length) return;
    const left = stars.filter((p) => Math.hypot(p[0] - player.x, p[1] - player.y) > STAR_REACH);
    if (left.length === stars.length) return;
    this._stars.set(level, left);
    this._starsCollected += stars.length - left.length;
  }

  /**
   * Stairs: stepping onto a room of stairs takes the character to the stairs of the next level the card shows, and
   * the card shows that level. It goes again only after it stepped off the stairs it came up.
   */
  private climbStairs(level: Level, player: Player): void {
    const onStairs = level.rooms.some((room) => room.stairs && pointInPolygon([player.x, player.y], room.points));
    if (!onStairs) {
      this._stairsArmed = true;
      return;
    }
    if (!this._stairsArmed) return;
    const all = this.levels();
    if (all.length < 2) return;
    const other = all[(all.findIndex((l) => l.id === level.id) + 1) % all.length];
    const stairs = other.rooms.find((room) => room.stairs);
    const bounds = drawnBounds(other);
    const at: Point = stairs ? centroid(stairs.points) : [bounds.x + bounds.w / 2, bounds.y + bounds.h / 2];
    this._stairsArmed = false;
    player.x = at[0];
    player.y = at[1];
    player.seat = undefined;
    this._active = other.id;
    this._playLevel = other.id;
    this._views = {};
  }

  /** The view moves only when the character comes within a third of its edge, and as much as it went past. */
  private followPlayer(level: Level, player: Player): void {
    const view = this.viewBounds(level);
    const mx = view.w * 0.3;
    const my = view.h * 0.3;
    let { x, y } = view;
    if (player.x < x + mx) x = player.x - mx;
    else if (player.x > x + view.w - mx) x = player.x - view.w + mx;
    if (player.y < y + my) y = player.y - my;
    else if (player.y > y + view.h - my) y = player.y - view.h + my;
    if (Math.abs(x - view.x) > 0.02 || Math.abs(y - view.y) > 0.02) this.setView(level, { x, y, w: view.w, h: view.h });
  }

  /**
   * The action button: gets the character up when it sits; otherwise strokes a pet near it, which then follows it,
   * sits it on a seat or lays it in a bed near it, or switches the nearest light within reach.
   */
  private action(): void {
    const player = this._player;
    const level = this.levels().find((l) => l.id === this._playLevel);
    if (!player || !level) return;
    if (player.seat) {
      player.seat = undefined;
      return;
    }
    const pet = this._pixel?.strokeAt(level.id, [player.x, player.y], 1.1);
    if (pet) {
      // A stroked pet follows the character a while.
      player.friend = pet;
      player.friendUntil = Date.now() + FRIEND_SECONDS * 1000;
      return;
    }
    const seat = this._pixel?.seatAt(level.id, [player.x, player.y], SEAT_REACH);
    if (seat) {
      player.seat = seat;
      player.moving = false;
      return;
    }
    let best: { light: Device; d: number } | undefined;
    for (const device of level.devices ?? []) {
      if (device.kind !== "light" || !device.entity) continue;
      const [a, b] = [device.at, device.to ?? device.at];
      const dx = b[0] - a[0];
      const dy = b[1] - a[1];
      const length = dx * dx + dy * dy;
      const t = length ? Math.max(0, Math.min(1, ((player.x - a[0]) * dx + (player.y - a[1]) * dy) / length)) : 0;
      const d = Math.hypot(player.x - (a[0] + t * dx), player.y - (a[1] + t * dy));
      if (d < ACTION_REACH && (!best || d < best.d)) best = { light: device, d };
    }
    if (!best) return;
    const entity = best.light.entity!;
    if (this._realLights) {
      this.toggleLight(best.light, isOn(this.hass, entity));
      return;
    }
    // Only in the picture: it starts from the real state and keeps its own until the game stops.
    this._fakeLights.set(entity, !(this._fakeLights.get(entity) ?? isOn(this.hass, entity)));
    this._fakeVersion++;
  }

  private readonly _keyDown = (event: KeyboardEvent): void => {
    const key = KEYS[event.key];
    if (!key) return;
    event.preventDefault();
    if (key === "act") {
      if (!event.repeat) this.action();
      return;
    }
    this._keys.add(key);
  };

  private readonly _keyUp = (event: KeyboardEvent): void => {
    const key = KEYS[event.key];
    if (key && key !== "act") this._keys.delete(key);
  };

  /** The joystick: the knob follows the finger within the ring, and its offset is the push. */
  private readonly _stickMove = (event: PointerEvent): void => {
    const ring = event.currentTarget as HTMLElement;
    if (event.type === "pointerdown") ring.setPointerCapture(event.pointerId);
    if (!ring.hasPointerCapture(event.pointerId)) return;
    const box = ring.getBoundingClientRect();
    const radius = box.width / 2;
    let dx = (event.clientX - box.left - radius) / radius;
    let dy = (event.clientY - box.top - radius) / radius;
    const length = Math.hypot(dx, dy);
    if (length > 1) {
      dx /= length;
      dy /= length;
    }
    this._push = [dx, dy];
    const knob = ring.firstElementChild as HTMLElement | null;
    if (knob) knob.style.transform = `translate(${(dx * radius * 0.6).toFixed(1)}px, ${(dy * radius * 0.6).toFixed(1)}px)`;
  };

  private readonly _stickUp = (event: PointerEvent): void => {
    this._push = [0, 0];
    const knob = (event.currentTarget as HTMLElement).firstElementChild as HTMLElement | null;
    if (knob) knob.style.transform = "";
  };

  /** The window choosing the character before the game, the last choice first in line. */
  private renderPicker() {
    if (!this._picker) return nothing;
    const chosen = this.chosenOutfit();
    return html`<div class="pad-backdrop" @click=${(e: Event) => e.target === e.currentTarget && (this._picker = false)}>
      <div class="pad game-window" role="dialog">
        <div class="game-title">${t("Choose your character")}</div>
        <div class="play-options">
          <label class="switch">
            <input type="checkbox" .checked=${this._realLights} @change=${(e: Event) => this.setPlayOption(REAL_LIGHTS_KEY, (e.target as HTMLInputElement).checked)} />
            <span class="track"><span class="knob"></span></span>
            ${t("Real lights")}
          </label>
          <label class="switch">
            <input type="checkbox" .checked=${this._alwaysDay} @change=${(e: Event) => this.setPlayOption(ALWAYS_DAY_KEY, (e.target as HTMLInputElement).checked)} />
            <span class="track"><span class="knob"></span></span>
            ${t("Always day")}
          </label>
        </div>
        <div class="figures">
          ${PLAYER_OUTFITS.map(
            (_, i) => html`<button class="figure ${i === chosen ? "chosen" : ""}" @click=${() => this.startPlay(i)}>
              <canvas class="figure-picture" data-outfit=${i} width="24" height="34"></canvas>
            </button>`,
          )}
        </div>
        <button class="key" @click=${() => (this._picker = false)}>${t("Not now")}</button>
      </div>
    </div>`;
  }

  /** Draws the characters of the open picker into their small canvases. */
  private drawFigures(): void {
    for (const element of this.renderRoot.querySelectorAll<HTMLCanvasElement>("canvas.figure-picture")) {
      if (element.dataset.drawn) continue;
      const c = element.getContext("2d");
      if (!c) continue;
      person(c, 12, 33, "down", 0, PLAYER_OUTFITS[Number(element.dataset.outfit)] ?? PLAYER_OUTFITS[0]);
      element.dataset.drawn = "1";
    }
  }

  /** The joystick at the bottom right and the action button beside it, while the game is played. */
  private renderPlay() {
    if (!this._play) return nothing;
    return html`<div
        class="stick"
        @pointerdown=${this._stickMove}
        @pointermove=${this._stickMove}
        @pointerup=${this._stickUp}
        @pointercancel=${this._stickUp}
      >
        <div class="stick-knob"></div>
      </div>
      <button class="act" title=${t("Stroke a pet or switch a light")} @click=${() => this.action()}>A</button>`;
  }

  /** Puts the card alone on the whole screen, or back. */
  private toggleFull(): void {
    if (this.shadowRoot?.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    const card = this.renderRoot.querySelector("ha-card") as (HTMLElement & { webkitRequestFullscreen?: () => void }) | null;
    if (!card) return;
    if (card.requestFullscreen) card.requestFullscreen().catch(() => undefined);
    else card.webkitRequestFullscreen?.();
  }

  /** What the card shows of a level now: its zoomed view, or the default one. */
  private viewBounds(level: Level): Bounds {
    return (this.zoomOn && this._views[level.id]) || this.defaultBounds(level);
  }

  /**
   * The part of a level drawn by the current render: its view, or in levels side by side the larger picture that
   * reaches past it. Stills, robot tags and people stay within it.
   */
  private drawnPart(level: Level): Bounds {
    return this._drawnParts.get(level.id) ?? this.viewBounds(level);
  }

  /**
   * A view of the level with the proportions of the default one, zoomed no closer than MIN_ZOOM_WIDTH and no
   * farther than the whole level, and moved no farther than its edges.
   */
  private fitView(level: Level, view: Bounds): Bounds {
    const home = this.defaultBounds(level);
    const drawn = drawnBounds(level);
    const limit = {
      x: Math.min(home.x, drawn.x),
      y: Math.min(home.y, drawn.y),
      w: Math.max(home.x + home.w, drawn.x + drawn.w) - Math.min(home.x, drawn.x),
      h: Math.max(home.y + home.h, drawn.y + drawn.h) - Math.min(home.y, drawn.y),
    };
    const ratio = home.h / home.w;
    const w = Math.min(Math.max(view.w, MIN_ZOOM_WIDTH), Math.max(limit.w, limit.h / ratio, home.w));
    const h = w * ratio;
    const along = (start: number, size: number, low: number, room: number) =>
      size >= room ? low - (size - room) / 2 : Math.min(Math.max(start, low), low + room - size);
    return { x: along(view.x, w, limit.x, limit.w), y: along(view.y, h, limit.y, limit.h), w, h };
  }

  private setView(level: Level, view: Bounds): void {
    this._views = { ...this._views, [level.id]: this.fitView(level, view) };
    this.restartZoomReset();
  }

  /** Zooms a level by a factor about a point of the plan, which stays where it is on the screen. */
  private zoomAt(level: Level, factor: number, about?: Point): void {
    const view = this.viewBounds(level);
    const [cx, cy] = about ?? [view.x + view.w / 2, view.y + view.h / 2];
    const w = view.w / factor;
    const h = view.h / factor;
    this.setView(level, { x: cx - ((cx - view.x) * w) / view.w, y: cy - ((cy - view.y) * h) / view.h, w, h });
  }

  private resetViews(): void {
    window.clearTimeout(this._zoomTimer);
    this._views = {};
    this._group = undefined;
  }

  /**
   * Levels side by side as one drawing: scaled from 1 (the default views) up to a view about MIN_ZOOM_WIDTH metres
   * wide, about a point of the frame that stays where it is, and kept inside the frame.
   */
  private setGroup(s: number, about: { x: number; y: number }, from: { s: number; tx: number; ty: number }, frame: DOMRect, maxScale: number): void {
    const picture = this._picture;
    // Out as far as the whole picture still fills the frame, in as close as maxScale.
    const least = Math.min(1, Math.max(picture.frameWidth / picture.width, picture.frameHeight / picture.height));
    const scale = Math.min(Math.max(s, least), Math.max(1, maxScale));
    const cx = (about.x - from.tx) / from.s;
    const cy = (about.y - from.ty) / from.s;
    // The picture keeps filling the frame: moved no farther than its edges past the visible parts.
    const clamp = (shift: number, size: number, start: number, length: number) => Math.min(start * scale, Math.max(size - (length - start) * scale, shift));
    const tx = clamp(about.x - cx * scale, frame.width, picture.left, picture.width);
    const ty = clamp(about.y - cy * scale, frame.height, picture.top, picture.height);
    this._group = scale === 1 && Math.abs(tx) < 0.5 && Math.abs(ty) < 0.5 ? undefined : { s: scale, tx, ty };
    this.restartZoomReset();
  }

  /** All a level may show: its visible part together with everything drawn on it. */
  private levelReach(level: Level): Bounds {
    const home = this.defaultBounds(level);
    const drawn = drawnBounds(level);
    const x = Math.min(home.x, drawn.x);
    const y = Math.min(home.y, drawn.y);
    return { x, y, w: Math.max(home.x + home.w, drawn.x + drawn.w) - x, h: Math.max(home.y + home.h, drawn.y + drawn.h) - y };
  }

  private groupDown(event: PointerEvent): void {
    if (!this._config.zoom) return;
    if (this._pointers.size === 0) this._dragged = false;
    this._pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const touches = event.pointerType === "touch" && this._pointers.size === 2;
    const mouse = event.pointerType === "mouse" && event.button === 0;
    if (!touches && !mouse) return;
    const frame = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this._gesture = { level: "", start: { x: 0, y: 0, w: 0, h: 0 }, points: [...this._pointers.values()], rect: frame };
    this._groupStart = this._group ?? { s: 1, tx: 0, ty: 0 };
  }

  private groupMove(event: PointerEvent, maxScale: number): void {
    if (!this._pointers.has(event.pointerId)) return;
    // A mouse button let go outside the card never reached it: the drag ends at the first move without it.
    if (event.pointerType === "mouse" && event.buttons === 0) {
      this.zoomUp(event);
      return;
    }
    this._pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const gesture = this._gesture;
    const start = this._groupStart;
    if (!gesture || !start) return;
    const now = [...this._pointers.values()];
    if (now.length !== gesture.points.length) return;
    const mid = (points: { x: number; y: number }[]) => ({
      x: points.reduce((s, p) => s + p.x, 0) / points.length - gesture.rect.left,
      y: points.reduce((s, p) => s + p.y, 0) / points.length - gesture.rect.top,
    });
    const spread = (points: { x: number; y: number }[]) =>
      points.length < 2 ? 1 : Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) || 1;
    const from = mid(gesture.points);
    const to = mid(now);
    if (!this._dragged && Math.hypot(to.x - from.x, to.y - from.y) < DRAG_PX && Math.abs(spread(now) - spread(gesture.points)) < DRAG_PX) return;
    this._dragged = true;
    window.clearTimeout(this._holdTimer);
    // Once it drags, the plan gets the moves and the end of the drag wherever the pointer goes.
    const frame = event.currentTarget as HTMLElement;
    if (!frame.hasPointerCapture(event.pointerId)) frame.setPointerCapture(event.pointerId);
    const s = (start.s * spread(now)) / spread(gesture.points);
    // The drawing point under the first middle of the fingers stays under their middle now.
    const moved = { s: start.s, tx: start.tx + (to.x - from.x), ty: start.ty + (to.y - from.y) };
    this.setGroup(s, to, moved, gesture.rect, maxScale);
  }

  private groupWheel(event: WheelEvent, maxScale: number): void {
    if (!this._config.zoom || !event.ctrlKey) return;
    event.preventDefault();
    const frame = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const current = this._group ?? { s: 1, tx: 0, ty: 0 };
    this.setGroup(current.s * Math.exp(-event.deltaY / 300), { x: event.clientX - frame.left, y: event.clientY - frame.top }, current, frame, maxScale);
  }

  private groupButton(event: Event, factor: number, maxScale: number): void {
    const frame = ((event.currentTarget as HTMLElement).closest(".levels") as HTMLElement).getBoundingClientRect();
    const current = this._group ?? { s: 1, tx: 0, ty: 0 };
    this.setGroup(current.s * factor, { x: frame.width / 2, y: frame.height / 2 }, current, frame, maxScale);
  }

  /** Rule of the wall tablet: a zoomed card goes back to its default view after a while without a touch. */
  private restartZoomReset(): void {
    window.clearTimeout(this._zoomTimer);
    const seconds = this._config.zoom_reset ?? 60;
    if (seconds > 0) this._zoomTimer = window.setTimeout(() => this.resetViews(), seconds * 1000);
  }

  /** A point of the screen on the plan of a level, by the rectangle its plan has on the screen. */
  private toPlan(view: Bounds, rect: DOMRect, x: number, y: number): Point {
    return [view.x + ((x - rect.left) / rect.width) * view.w, view.y + ((y - rect.top) / rect.height) * view.h];
  }

  /**
   * Two fingers pinch and move the plan, the mouse drags it; one finger is left to the page and to taps. A gesture
   * that moved the plan more than a few pixels is no tap.
   */
  private zoomDown(level: Level, event: PointerEvent): void {
    if (!this.zoomOn) return;
    if (this._pointers.size === 0) this._dragged = false;
    this._pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    // On the whole screen one finger moves the plan too; on a dashboard it is left to the page.
    const touches = event.pointerType === "touch" && (this._pointers.size === 2 || (this._full && !this._play && this._pointers.size === 1));
    const mouse = event.pointerType === "mouse" && event.button === 0;
    if (!touches && !mouse) return;
    const svg = (event.currentTarget as HTMLElement).querySelector("svg");
    if (!svg) return;
    this._gesture = { level: level.id, start: this.viewBounds(level), points: [...this._pointers.values()], rect: svg.getBoundingClientRect() };
  }

  private zoomMove(level: Level, event: PointerEvent): void {
    if (!this._pointers.has(event.pointerId)) return;
    // A mouse button let go outside the card never reached it: the drag ends at the first move without it.
    if (event.pointerType === "mouse" && event.buttons === 0) {
      this.zoomUp(event);
      return;
    }
    this._pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const gesture = this._gesture;
    if (!gesture || gesture.level !== level.id) return;
    const now = [...this._pointers.values()];
    if (now.length !== gesture.points.length) return;
    const mid = (points: { x: number; y: number }[]) => ({
      x: points.reduce((s, p) => s + p.x, 0) / points.length,
      y: points.reduce((s, p) => s + p.y, 0) / points.length,
    });
    const spread = (points: { x: number; y: number }[]) =>
      points.length < 2 ? 1 : Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) || 1;
    const from = mid(gesture.points);
    const to = mid(now);
    if (!this._dragged && Math.hypot(to.x - from.x, to.y - from.y) < DRAG_PX && Math.abs(spread(now) - spread(gesture.points)) < DRAG_PX) return;
    this._dragged = true;
    window.clearTimeout(this._holdTimer);
    // Once it drags, the plan gets the moves and the end of the drag wherever the pointer goes.
    const frame = event.currentTarget as HTMLElement;
    if (!frame.hasPointerCapture(event.pointerId)) frame.setPointerCapture(event.pointerId);
    const factor = spread(now) / spread(gesture.points);
    const start = gesture.start;
    // The plan point under the first middle of the fingers stays under their middle now.
    const [px, py] = this.toPlan(start, gesture.rect, from.x, from.y);
    const w = start.w / factor;
    const h = start.h / factor;
    const x = px - ((to.x - gesture.rect.left) / gesture.rect.width) * w;
    const y = py - ((to.y - gesture.rect.top) / gesture.rect.height) * h;
    this.setView(level, { x, y, w, h });
  }

  private zoomUp(event: PointerEvent): void {
    this._pointers.delete(event.pointerId);
    // A finger left of two: the gesture ends; the other finger does nothing more.
    this._gesture = undefined;
  }

  /** Ctrl with the mouse wheel, or a pinch on a touchpad, zooms about the pointer. */
  private zoomWheel(level: Level, event: WheelEvent): void {
    // On the whole screen the wheel zooms without Ctrl.
    if (!this.zoomOn || (!event.ctrlKey && !this._full)) return;
    event.preventDefault();
    const svg = (event.currentTarget as HTMLElement).querySelector("svg");
    if (!svg) return;
    const view = this.viewBounds(level);
    this.zoomAt(level, Math.exp(-event.deltaY / 300), this.toPlan(view, svg.getBoundingClientRect(), event.clientX, event.clientY));
  }

  private renderZoomButtons(level: Level) {
    if (!this.zoomOn || this._play) return nothing;
    return html`<div class="zoom">
      ${this._views[level.id]
        ? html`<button
            title=${t("Default view")}
            @click=${() => {
              const { [level.id]: _, ...rest } = this._views;
              this._views = rest;
            }}
          >
            ⌂
          </button>`
        : nothing}
      <button title=${t("Zoom in")} @click=${() => this.zoomAt(level, 1.5)}>+</button>
      <button title=${t("Zoom out")} @click=${() => this.zoomAt(level, 1 / 1.5)}>−</button>
    </div>`;
  }

  /** Whether a point lies on the drawn part of the level, so people in a hidden garden are not drawn past the plan. */
  private onPlan(level: Level, x: number, y: number): boolean {
    const b = this.drawnPart(level);
    return x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h;
  }

  /**
   * Tracks of the last seconds, fading with age, one segment at a time: of people from the integration,
   * which keeps them, of other objects from what this card saw.
   */
  private renderTrails(level: Level) {
    if (this._config.trails === false) return nothing;
    const now = Date.now();
    const people = this.levelPeople(level).map((person) => {
      const points: Point[] = [...(person.trail ?? []), [person.x, person.y]];
      return points.slice(1).map((p, i) => {
        const q = points[i];
        if (!this.onPlan(level, p[0], p[1]) || !this.onPlan(level, q[0], q[1])) return nothing;
        const fade = (i + 1) / (points.length - 1);
        return svg`<path class="fc-track ${person.source === "camera" ? "object" : ""}" style="stroke-opacity:${(0.45 * fade).toFixed(2)}"
          d="M${q[0]} ${q[1]}L${p[0]} ${p[1]}"></path>`;
      });
    });
    const objects = [...this._paths.entries()]
      .filter(([, path]) => path.level === level.id && path.points.length > 1)
      .map(([, { camera, points }]) =>
        points.slice(1).map((p, i) => {
          const q = points[i];
          if (!this.onPlan(level, p[0], p[1]) || !this.onPlan(level, q[0], q[1])) return nothing;
          const fade = Math.max(0, 1 - (now - p[2]) / TRAIL_MS);
          return svg`<path class="fc-track ${camera ? "object" : ""}" style="stroke-opacity:${(0.45 * fade).toFixed(2)}"
            d="M${q[0]} ${q[1]}L${p[0]} ${p[1]}"></path>`;
        }),
      );
    return [people, objects];
  }

  /** People on the level: tracked by the integration, or the raw radar targets when it does not track. */
  private levelPeople(level: Level): TrackedPerson[] {
    if (this._people) return this._people[level.id] ?? [];
    return (level.devices ?? [])
      .filter((device) => device.kind === "radar")
      .flatMap((device) => radarTargets(device, this.hass.states))
      .map((p, i) => ({ id: i, x: p[0], y: p[1], status: "seen" }));
  }

  private levels(): Level[] {
    const all = this._plan?.levels ?? [];
    const wanted = this._config.levels;
    return wanted?.length ? all.filter((level) => wanted.includes(level.id)) : all;
  }

  private toggleHeat(): void {
    this._heat = !this._heat;
    store(HEAT_KEY, this._heat);
  }

  /** Rooms coloured by their reading, by room id; none while the heat map is off or not configured. */
  private heatFills(level: Level): Record<string, string> {
    const kind = this._config.heatmap;
    if (!kind || kind === "none" || !this._heat) return {};
    const fills: Record<string, string> = {};
    for (const room of level.rooms) {
      if (room.outdoor || room.stairs) continue;
      const value = roomHeat(level, room, this.hass.states, kind);
      if (value !== undefined) fills[room.id] = heatColour(kind, value);
    }
    return fills;
  }

  /** The heat map switch with its scale: the lowest and highest value and the colours between. */
  private renderHeatSwitch(kind: HeatKind) {
    const scale = HEAT_SCALES[kind];
    const stops = scale.stops;
    const gradient = stops.map(([, c]) => `rgb(${c.join(",")})`).join(",");
    return html`<label class="switch" title=${t(HEAT_TITLES[kind])}>
      <input type="checkbox" .checked=${this._heat} @change=${() => this.toggleHeat()} />
      <span class="track"><span class="knob"></span></span>
      ${t(HEAT_NAMES[kind])}
      ${this._heat
        ? html`<span class="scale"
            >${stops[0][0]}${scale.unit}<span class="bar" style="background:linear-gradient(90deg,${gradient})"></span
            >${stops[stops.length - 1][0]}${scale.unit}</span
          >`
        : nothing}
    </label>`;
  }

  private toggleGarden(): void {
    this._garden = !this._garden;
    store(GARDEN_KEY, this._garden);
  }



  render() {
    if (!this._plan) return html`<ha-card><div class="empty">…</div></ha-card>`;
    const all = this.levels();
    if (!all.length) return html`<ha-card><div class="empty">${t("FloorCast: no levels to show.")}</div></ha-card>`;
    // The garden is switched on the card, or fixed by the configuration (a phone showing one floor).
    const gardenMode = this._config.garden ?? "toggle";
    const gardenToggle = gardenMode === "toggle" && all.some(hasGarden);
    const showGarden = gardenMode === "show" || (gardenMode === "toggle" && this._garden);
    const levels = showGarden ? all : all.map(withoutGarden);
    const heatConfigured = this._config.heatmap && this._config.heatmap !== "none" ? this._config.heatmap : undefined;
    const width = Math.max(this._width - 8, 100);
    // Side by side the levels keep the widths of their default views, zoomed or not.
    const metres = levels.map((level) => this.defaultBounds(level).w);
    const sideScale = width / metres.reduce((sum, w) => sum + w, 0);
    const fitsSide = sideScale * Math.min(...metres) >= MIN_SIDE_WIDTH;
    const side = !this._full && (this._config.layout === "side" || (this._config.layout === "auto" && fitsSide && levels.length > 1));
    const active = levels.find((level) => level.id === this._active) ?? levels[0];
    this._activeLevel = active;
    // Filled again by renderCameras and renderMowerStills; read by followStills and followGround after the render.
    this._shownStills = new Set();
    this._shownGround = new Set();
    this._pixelTargets = [];
    this._gardenShown = showGarden;
    return html`
      <ha-card class="background-${this._config.background ?? "plan"}" .header=${this._config.title} @pointerdown=${this.notePointer}>
        ${(side || levels.length < 2) && !gardenToggle && !this._config.history && !heatConfigured && !this.game() && !this._config.fullscreen
          ? nothing
          : html`<div class="tabs">
              ${side || levels.length < 2
                ? nothing
                : levels.map(
                    (level) =>
                      html`<button class=${level.id === active.id ? "on" : ""} @click=${() => (this._active = level.id)}>
                        ${level.name}
                      </button>`,
                  )}
              ${gardenToggle
                ? html`<label class="switch">
                    <input type="checkbox" .checked=${this._garden} @change=${() => this.toggleGarden()} />
                    <span class="track"><span class="knob"></span></span>
                    ${t("Garden")}
                  </label>`
                : nothing}
              ${this._config.history
                ? html`<label class="switch" title=${t("Where people walked over the last day")}>
                    <input type="checkbox" .checked=${this._showWalks} @change=${() => this.toggleWalks(levels)} />
                    <span class="track"><span class="knob"></span></span>
                    ${t("Paths")}
                  </label>`
                : nothing}
              ${heatConfigured ? this.renderHeatSwitch(heatConfigured) : nothing}
              ${this.renderGameBar()}
              ${this._full && this._config.look === "pixel"
                ? html`<button class="play-button ${this._play ? "on" : ""}" @click=${() => (this._play ? this.stopPlay() : this.openPicker())}>
                    ${this._play ? "■" : "▶"} ${this._play ? t("Stop playing") : t("Play")}
                  </button>`
                : nothing}
              ${this._play
                ? html`<span class="game"><span class="score">${gameIcon("star", 16)}${this._starsCollected}</span></span>`
                : nothing}
              ${this._config.fullscreen
                ? html`<button class="full-button" title=${this._full ? t("Leave full screen") : t("Full screen")} @click=${() => this.toggleFull()}>
                    ${this._full ? "✕" : "⛶"}
                  </button>`
                : nothing}

            </div>`}
        ${this.renderAlarmBar(levels)}
        ${side && this.zoomOn
          ? this.renderGroup(levels, width, sideScale, metres)
          : html`<div class="levels ${side ? "side" : ""}">
              ${(side ? levels : [active]).map((level) => this.renderLevel(level, width, side ? sideScale : undefined))}
            </div>`}
        ${this.renderPad()} ${this.renderAsk()} ${this.renderPlay()} ${this.renderPicker()} ${this.renderCountdown()} ${this.renderGameIntro()} ${this.renderGameEnd()}
      </ha-card>
    `;
  }

  /** Levels side by side that zoom and move together, with one set of buttons. */
  private renderGroup(levels: Level[], width: number, sideScale: number, metres: number[]) {
    // As close as MIN_ZOOM_WIDTH metres across the card.
    const maxScale = metres.reduce((sum, w) => sum + w, 0) / MIN_ZOOM_WIDTH;
    const group = this._group;
    // Each level drawn past its visible part on the outer sides of the row, below it and above it; above by the
    // same length for all levels, so the visible parts stay side by side as configured.
    const homes = levels.map((level) => this.defaultBounds(level));
    const reaches = levels.map((level) => this.levelReach(level));
    const above = Math.max(0, ...homes.map((home, i) => home.y - reaches[i].y));
    const views = homes.map((home, i) => {
      const reach = reaches[i];
      const left = i === 0 ? home.x - reach.x : 0;
      const right = i === levels.length - 1 ? reach.x + reach.w - home.x - home.w : 0;
      const bottom = Math.max(0, reach.y + reach.h - home.y - home.h);
      return { x: home.x - left, y: home.y - above, w: home.w + left + right, h: home.h + above + bottom };
    });
    const k = sideScale;
    this._picture = {
      left: (homes[0].x - views[0].x) * k,
      top: above * k,
      width: views.reduce((sum, view) => sum + view.w, 0) * k,
      height: Math.max(...views.map((view) => view.h)) * k,
      frameWidth: homes.reduce((sum, home) => sum + home.w, 0) * k,
      frameHeight: Math.max(...homes.map((home) => home.h)) * k,
    };
    const picture = this._picture;
    const shift = `translate(${(-picture.left).toFixed(1)}px,${(-picture.top).toFixed(1)}px)`;
    return html`<div
      class="levels side zoomable"
      style="height:${picture.frameHeight.toFixed(0)}px"
      @pointerdown=${(e: PointerEvent) => this.groupDown(e)}
      @pointermove=${(e: PointerEvent) => this.groupMove(e, maxScale)}
      @pointerup=${(e: PointerEvent) => this.zoomUp(e)}
      @pointercancel=${(e: PointerEvent) => this.zoomUp(e)}
      @wheel=${(e: WheelEvent) => this.groupWheel(e, maxScale)}
      @click=${{
        handleEvent: (e: Event) => {
          if (this._dragged) e.stopPropagation();
        },
        capture: true,
      }}
    >
      <div class="group" style="transform:${group ? `translate(${group.tx}px,${group.ty}px) scale(${group.s}) ` : ""}${shift}">
        ${levels.map((level, i) => this.renderLevel(level, width, sideScale, true, views[i]))}
      </div>
      <div class="zoom">
        ${group ? html`<button title=${t("Default view")} @click=${() => (this._group = undefined)}>⌂</button>` : nothing}
        <button title=${t("Zoom in")} @click=${(e: Event) => this.groupButton(e, 1.5, maxScale)}>+</button>
        <button title=${t("Zoom out")} @click=${(e: Event) => this.groupButton(e, 1 / 1.5, maxScale)}>−</button>
      </div>
    </div>`;
  }

  private renderLevel(level: Level, width: number, scale?: number, inGroup = false, view?: Bounds) {
    const b = view ?? (inGroup ? this.defaultBounds(level) : this.viewBounds(level));
    this._drawnParts.set(level.id, b);
    const home = this.defaultBounds(level);
    // Side by side every level uses the same scale, so a metre is equally long on each; zoom enlarges it.
    // A level of a group picture is as wide as the part of it drawn there.
    const style = scale ? `width:${((view ?? home).w * scale).toFixed(0)}px` : "width:100%";
    const pxPerMetre = view && scale ? scale : (scale ?? width / home.w) * (home.w / b.w);
    const zoomed = this.zoomOn && !!this._views[level.id] && !inGroup;
    // In a group the levels zoom together; their own gestures and buttons rest.
    const own = this.zoomOn && !inGroup;
    // Pixel look: the drawing is a canvas under the plan; the plan keeps its taps, labels and previews.
    const pixel = this._config.look === "pixel";
    if (pixel) this._pixelTargets.push({ level, key: `${this._planStamp}|${level.id}|${this._gardenShown ? 1 : 0}`, bounds: b });
    const plan = svg`
          ${PLAN_DEFS}
          ${pixel
            ? svg`${this.renderMowers(level)} ${this.renderVacuums(level)}`
            : svg`${renderLevel(level, this.hass.states, planRadius(this._plan), [this.renderGround(level), this.renderSprays(level), this.renderMowers(level), this.renderVacuums(level)], this.heatFills(level))} ${this.renderGlows(level)}`}
          ${level.rooms.map((room) => this.renderRoom(room, pxPerMetre, level))} ${this.renderGameTarget(level)} ${this.renderLightPoints(level, pxPerMetre)}
          ${renderOpeningLabels(level, this.hass.states, Math.max(0.16, 10 / pxPerMetre))} ${this.renderOpeningHits(level, pxPerMetre)} ${this.renderCarHits(level)} ${this.renderLocks(level, pxPerMetre)}
          ${this.renderScreens(level, pxPerMetre)} ${this.renderDeviceTags(level, pxPerMetre)} ${this.renderSensors(level, pxPerMetre)} ${this.renderAlarms(level, pxPerMetre)} ${this.renderIndicators(level, pxPerMetre)}
          ${this.renderNozzles(level, pxPerMetre)} ${this.renderWalks(level)} ${this.renderTrails(level)} ${this.renderCameras(level, pxPerMetre)} ${this.renderMowerStills(level, pxPerMetre)} ${this.renderRadars(level, pxPerMetre)}`;
    const svgClass = `${this._config.crop?.[level.id] || zoomed ? "cropped" : ""} ${pixel ? "pixel" : ""}`;
    return html`
      <div
        class="level ${own ? "zoomable" : ""}"
        style=${style}
        @pointerdown=${(e: PointerEvent) => own && this.zoomDown(level, e)}
        @pointermove=${(e: PointerEvent) => own && this.zoomMove(level, e)}
        @pointerup=${(e: PointerEvent) => own && this.zoomUp(e)}
        @pointercancel=${(e: PointerEvent) => own && this.zoomUp(e)}
        @wheel=${(e: WheelEvent) => own && this.zoomWheel(level, e)}
        @click=${{
          handleEvent: (e: Event) => {
            if (this._dragged) e.stopPropagation();
          },
          capture: true,
        }}
      >
        ${pixel
          ? html`<div class="pixel-box" @pointerdown=${this._petCatch} @pointerup=${this._petCatch} @click=${this._petCatch}>
              <canvas class="pixel" data-level=${level.id}></canvas>
              <svg class=${svgClass} viewBox="${b.x} ${b.y} ${b.w} ${b.h}" preserveAspectRatio="xMidYMin meet">${plan}</svg>
            </div>`
          : html`<svg class=${svgClass} viewBox="${b.x} ${b.y} ${b.w} ${b.h}" preserveAspectRatio="xMidYMin meet">${plan}</svg>`}
        ${own ? this.renderZoomButtons(level) : nothing}
      </div>
    `;
  }

  /** A tap on a car with a presence entity opens that entity. */
  private renderCarHits(level: Level) {
    return level.items
      .filter((item) => item.type === "car" && item.presence)
      .map((item) => svg`<path class="car-hit" d=${polygonPath(itemPoints(item))} @click=${() => this.openMoreInfo(item.presence!)}></path>`);
  }

  /** A tap moves the blind of a window: stops it while it moves, otherwise closes an open one and opens a closed one. Holding, or a tap on a window or door with only a sensor, opens its details. */
  private renderOpeningHits(level: Level, pxPerMetre: number) {
    const walls = new Map(level.walls.map((wall) => [wall.id, wall]));
    return level.openings
      .filter((opening) => (opening.cover || opening.contact) && walls.has(opening.wall))
      .map((opening) => {
        const wall = walls.get(opening.wall)!;
        const a = pointOnWall(wall, opening.at - opening.width / 2);
        const b = pointOnWall(wall, opening.at + opening.width / 2);
        const entity = (opening.cover ?? opening.contact)!;
        // A gate asks before it moves unless told not to; a blind only when told to.
        const asks = opening.type === "gate" ? opening.confirm !== false : opening.confirm;
        return svg`<path class="opening-hit" stroke-width=${Math.max(wall.t + 0.2, 24 / pxPerMetre)}
          d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}"
          @pointerdown=${() => this.holdStart(() => this.openMoreInfo(entity))}
          @pointerup=${() =>
            this.holdEnd(() =>
              opening.cover
                ? this.ask(asks, opening.cover, coverAction(this.hass.states[opening.cover]), () => this.press({ opening: opening.id }))
                : this.openMoreInfo(entity),
            )}
          @pointerleave=${() => window.clearTimeout(this._holdTimer)}></path>`;
      });
  }

  /**
   * Locks of doors: a padlock beside the door on the side it opens to. A tap locks or unlocks after Yes, unless Ask
   * before switching is off; holding opens the lock.
   */
  private renderLocks(level: Level, pxPerMetre: number) {
    const size = Math.max(0.24, 16 / pxPerMetre);
    const walls = new Map(level.walls.map((wall) => [wall.id, wall]));
    return level.openings
      .filter((opening) => opening.lock && walls.has(opening.wall))
      .map((opening) => {
        const wall = walls.get(opening.wall)!;
        const at = lockSpot(wall, opening, size);
        const state = this.hass.states[opening.lock!]?.state;
        const locked = state === "locked";
        return svg`<g class="mower-hit"
            @pointerdown=${() => this.holdStart(() => this.openMoreInfo(opening.lock!))}
            @pointerup=${() =>
              this.holdEnd(() =>
                this.ask(opening.confirm !== false, opening.lock, locked ? N_("Unlock {name}?") : N_("Lock {name}?"), () =>
                  this.hass.callService("lock", locked ? "unlock" : "lock", { entity_id: opening.lock }),
                ),
              )}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${at[0]} cy=${at[1]} r=${size}></circle>
          ${renderLock(at, state, size)}
        </g>`;
      });
  }

  /**
   * Indicators: a tap switches a switch, input boolean or fan, after Yes when asked; any other one, and a hold,
   * open its details.
   */
  private renderIndicators(level: Level, pxPerMetre: number) {
    const size = Math.max(0.12, 9 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "indicator" && device.entity)
      .map((device) => {
        const entity = device.entity!;
        const stateObj = this.hass.states[entity];
        const shown = indicatorState(device, stateObj);
        const label = device.label || String(stateObj?.attributes.friendly_name ?? entity);
        const switchable = SWITCHABLE_DOMAINS.includes(entity.split(".")[0]);
        const on = stateObj?.state === "on";
        return svg`<g class="mower-hit"
            @pointerdown=${() => this.holdStart(() => this.openMoreInfo(entity))}
            @pointerup=${() =>
              this.holdEnd(() =>
                switchable
                  ? this.ask(device.confirm, entity, on ? N_("Turn off {name}?") : N_("Turn on {name}?"), () => this.hass.callService("homeassistant", "toggle", { entity_id: entity }))
                  : this.openMoreInfo(entity),
              )}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${device.at[0]} cy=${device.at[1]} r=${size * 2}></circle>
          ${renderIndicator(device.at, label, shown.text, shown.running, size)}
        </g>`;
      });
  }

  /** Screens: a tap switches the screen on or off, holding opens its remote control. */
  private renderScreens(level: Level, pxPerMetre: number) {
    return (level.devices ?? [])
      .filter((device) => device.kind === "screen")
      .map((device) => {
        const on = isPowered(device.entity ? this.hass.states[device.entity]?.state : undefined);
        const to = device.to ?? [device.at[0] + 2, device.at[1]];
        return svg`<g class="mower-hit"
            @pointerdown=${() => this.holdStart(() => !this._config.child_lock && (this._pad = device))}
            @pointerup=${() =>
              this.holdEnd(() => this.ask(device.confirm, device.entity ?? device.remote, on ? N_("Turn off {name}?") : N_("Turn on {name}?"), () => this.press({ device: device.id })))}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          ${renderScreen(device, on)}
          <path class="opening-hit" stroke-width=${Math.max(0.5, 24 / pxPerMetre)} d="M${device.at[0]} ${device.at[1]}L${to[0]} ${to[1]}"></path>
        </g>`;
      });
  }

  private toggleLight(light: Device, on: boolean): void {
    this.ask(light.confirm, light.entity, on ? N_("Turn off {name}?") : N_("Turn on {name}?"), () =>
      this.hass.callService("homeassistant", "toggle", { entity_id: light.entity }),
    );
  }

  /**
   * A device with Ask before switching runs its tap only after Yes in a bar over the plan; the bar goes after 5 s.
   * The question is an English text with {name} for the device.
   */
  private ask(confirm: boolean | undefined, entity: string | null | undefined, question: string, run: () => void): void {
    if (!this.allowed(entity)) return;
    if (!confirm) {
      run();
      return;
    }
    const name = (entity && this.hass.states[entity]?.attributes.friendly_name) || entity || t("this device");
    window.clearTimeout(this._askTimer);
    this._ask = { text: t(question, { name }), run, top: this._pointerTop };
    this._askTimer = window.setTimeout(() => (this._ask = undefined), 5000);
  }

  private notePointer(event: PointerEvent): void {
    this._pointerTop = event.clientY - (event.currentTarget as HTMLElement).getBoundingClientRect().top;
  }

  /** The switch of the lamp game of the integration, when the card shows the game and the integration has it. */
  private game(): { entity_id: string; state: string; attributes: Record<string, any> } | undefined {
    if (!this._config.game || !this.hass) return undefined;
    const found = Object.values(this.hass.states).find((state) => state?.attributes?.floorcast === "game");
    return found && found.state !== "unavailable" ? (found as { entity_id: string; state: string; attributes: Record<string, any> }) : undefined;
  }

  /** Start or Stop of the lamp game, with the score while it runs; Start first asks in the welcome window. */
  private renderGameBar() {
    const game = this.game();
    if (!game) return nothing;
    const running = game.state === "on";
    const { score = 0, goal = 0 } = game.attributes;
    return html`<span class="game">
      <button
        class="play-button lamps ${running ? "on" : ""}"
        @click=${() => (running ? this.hass.callService("switch", "turn_off", { entity_id: game.entity_id }) : (this._gameIntro = true))}
      >
        ${gameIcon(running ? "stop" : "lamp", 18)}${running ? t("Stop") : t("Lamp game")}
      </button>
      ${running ? html`<span class="score">${gameIcon("star", 16)}${score} / ${goal}</span>` : nothing}
    </span>`;
  }

  /** The lit lamp of a running game: a pulsing ring of the reach around each of its points. */
  private renderGameTarget(level: Level) {
    const game = this.game();
    const target = game?.state === "on" ? game.attributes.target : undefined;
    if (!target) return nothing;
    return (level.devices ?? [])
      .filter((device) => device.kind === "light" && device.entity === target)
      .map((device) => {
        const [x, y] = device.to ? [(device.at[0] + device.to[0]) / 2, (device.at[1] + device.to[1]) / 2] : device.at;
        return svg`<circle class="fc-game-target" cx=${x} cy=${y} r=${GAME_REACH}></circle>`;
      });
  }

  /**
   * Follows the phase of the lamp game: the countdown starts when the card sees it begin and counts in this
   * browser, so a clock that runs a little off does not matter; Go shows a moment when the first lamp lights. The
   * end of a game this card saw happen opens the end window: a win or running out of time, not a stop.
   */
  private followGame(): void {
    const game = this.game();
    if (!game) return;
    const phase: string | null = game.state === "on" ? (game.attributes.phase ?? null) : null;
    if (phase) this._gameIntro = false;
    if (phase !== this._gamePhase) {
      if (phase === "countdown") this._countdownFrom = Date.now();
      if (this._gamePhase === "countdown" && phase === "lit") this._goUntil = Date.now() + GO_MS;
      if (phase !== "countdown" && this._gamePhase === "countdown" && phase !== "lit") this._countdownFrom = undefined;
      this._gamePhase = phase;
      this.tickCountdown();
    }
    const ended: string | null = game.attributes.ended ?? null;
    if (this._gameEndSeen === undefined) {
      this._gameEndSeen = ended;
      return;
    }
    if (ended === this._gameEndSeen) return;
    this._gameEndSeen = ended;
    const result = game.attributes.result;
    if (result === "won" || result === "timeout")
      this._gameEnd = { result, score: game.attributes.score ?? 0, goal: game.attributes.goal ?? 0, duration: game.attributes.duration ?? null };
  }

  /** Redraws the card while the countdown or Go shows, then stops. */
  private tickCountdown(): void {
    window.clearInterval(this._countdownTimer);
    this._countdownTimer = window.setInterval(() => {
      const counting = this._gamePhase === "countdown" && this._countdownFrom !== undefined;
      const going = this._goUntil !== undefined && Date.now() < this._goUntil;
      if (!counting && !going) {
        window.clearInterval(this._countdownTimer);
        this._countdownFrom = this._goUntil = undefined;
      }
      this.requestUpdate();
    }, 100);
  }

  /** The welcome window of the lamp game: its name, how to play and Start. */
  private renderGameIntro() {
    const game = this.game();
    if (!this._gameIntro || !game) return nothing;
    const close = () => (this._gameIntro = false);
    return html`<div class="pad-backdrop" @click=${(e: Event) => e.target === e.currentTarget && close()}>
      <div class="pad game-window" role="dialog">
        <div class="game-lamps" aria-hidden="true"><span></span><span class="lit"></span><span></span></div>
        <div class="game-title">${t("Lamp game")}</div>
        <p>${t("When a lamp lights up, run to it! Every lamp you reach is a point.")}</p>
        <p class="game-goal">${t("Find {goal} lamps as fast as you can.", { goal: String(game.attributes.goal ?? 0) })}</p>
        <div class="pad-row">
          <button
            class="key yes big"
            @click=${() => {
              close();
              this.hass.callService("switch", "turn_on", { entity_id: game.entity_id });
            }}
          >
            ${t("Start!")}
          </button>
          <button class="key" @click=${close}>${t("Not now")}</button>
        </div>
      </div>
    </div>`;
  }

  /** 3, 2, 1 over the plan before the first lamp, then Go for a moment. */
  private renderCountdown() {
    const now = Date.now();
    if (this._gamePhase === "countdown" && this._countdownFrom !== undefined) {
      const left = Math.max(1, GAME_COUNTDOWN - Math.floor((now - this._countdownFrom) / 1000));
      return html`<div class="countdown" aria-live="assertive">${keyed(left, html`<span>${left}</span>`)}</div>`;
    }
    if (this._goUntil !== undefined && now < this._goUntil)
      return html`<div class="countdown" aria-live="assertive">${keyed("go", html`<span class="go">${t("Go!")}</span>`)}</div>`;
    return nothing;
  }

  /** The end of a game: congratulations with the score and the time after a win, the score after running out of time. */
  private renderGameEnd() {
    const end = this._gameEnd;
    if (!end) return nothing;
    const won = end.result === "won";
    const game = this.game();
    const time = end.duration !== null ? `${Math.floor(end.duration / 60)}:${String(Math.round(end.duration % 60)).padStart(2, "0")}` : undefined;
    return html`<div class="pad-backdrop" @click=${(e: Event) => e.target === e.currentTarget && (this._gameEnd = undefined)}>
      <div class="pad game-window ${won ? "won" : ""}" role="alertdialog">
        ${gameIcon(won ? "cup" : "hourglass", 48)}
        <div class="game-title">${won ? t("Well done!") : t("Time is up")}</div>
        <p>
          ${won ? t("All {goal} lamps found.", { goal: String(end.goal) }) : t("Points: {score} of {goal}", { score: String(end.score), goal: String(end.goal) })}
        </p>
        ${won && time ? html`<div class="game-time">${gameIcon("clock", 24)}${time}</div>` : nothing}
        <div class="pad-row">
          ${game
            ? html`<button
                class="key yes big"
                @click=${() => {
                  this._gameEnd = undefined;
                  this.hass.callService("switch", "turn_on", { entity_id: game.entity_id });
                }}
              >
                ${t("Play again")}
              </button>`
            : nothing}
          <button class="key" @click=${() => (this._gameEnd = undefined)}>${t("Close")}</button>
        </div>
      </div>
    </div>`;
  }

  private renderAsk() {
    const ask = this._ask;
    if (!ask) return nothing;
    const close = () => {
      window.clearTimeout(this._askTimer);
      this._ask = undefined;
    };
    // Below the finger, or above it near the bottom of the card.
    const below = ask.top + 96 < (this.shadowRoot?.querySelector("ha-card")?.clientHeight ?? 0);
    const place = below ? `top:${ask.top + 32}px` : `top:${Math.max(8, ask.top - 88)}px`;
    return html`<div class="ask" role="alertdialog" style=${place}>
      <span>${ask.text}</span>
      <button
        class="key yes"
        @click=${() => {
          close();
          ask.run();
        }}
      >
        ${t("Yes")}
      </button>
      <button class="key" @click=${close}>${t("No")}</button>
    </div>`;
  }

  /** Keys of the remote, as the Android TV Remote integration names them. */
  private sendKey(key: string): void {
    const remote = this._pad?.remote;
    if (remote) this.hass.callService("remote", "send_command", { entity_id: remote, command: key });
  }

  /** Remote control of a screen over the plan: power, arrows with OK, back, home, volume and play. */
  private renderPad() {
    const device = this._pad;
    if (!device) return nothing;
    const entity = device.entity ?? device.remote;
    const stateObj = entity ? this.hass.states[entity] : undefined;
    const on = isPowered(stateObj?.state);
    const key = (name: string, label: string, cls = "") =>
      html`<button class="key ${cls}" ?disabled=${!device.remote} @click=${() => this.sendKey(name)}>${label}</button>`;
    return html`<div class="pad-backdrop" @click=${(e: Event) => e.target === e.currentTarget && (this._pad = undefined)}>
      <div class="pad">
        <div class="pad-top">
          <span>${stateObj?.attributes.friendly_name ?? t("Screen")} · ${stateObj?.state ?? "?"}</span>
          <button class="key" title=${t("Close")} @click=${() => (this._pad = undefined)}>×</button>
        </div>
        <div class="pad-row">
          <button class="key power ${on ? "on" : ""}" ?disabled=${!entity} @click=${() => this.press({ device: device.id })}>⏻</button>
          ${entity ? html`<button class="key" @click=${() => this.openMoreInfo(entity)}>⋯</button>` : nothing}
        </div>
        <div class="dpad">
          ${key("DPAD_UP", "▲", "up")} ${key("DPAD_LEFT", "◀", "left")} ${key("DPAD_CENTER", "OK", "ok")}
          ${key("DPAD_RIGHT", "▶", "right")} ${key("DPAD_DOWN", "▼", "down")}
        </div>
        <div class="pad-row">${key("BACK", "↩")} ${key("HOME", "⌂")} ${key("MEDIA_PLAY_PAUSE", "⏯")}</div>
        <div class="pad-row">${key("VOLUME_DOWN", "−")} ${key("VOLUME_MUTE", "🔇")} ${key("VOLUME_UP", "+")}</div>
        ${device.remote ? nothing : html`<p class="pad-note">${t("Choose the remote of the screen in the editor to use the keys.")}</p>`}
      </div>
    </div>`;
  }

  /**
   * Glow of every light that is on, in its colour and brightness. The glow is clipped to the
   * room of the light together with the rooms open to it, so it stops at walls, not at the
   * border of an open plan.
   */
  private renderGlows(level: Level) {
    return svg`${renderGlows(level, this.hass.states, this._uid)} ${renderScreenGlows(level, this.hass.states, this._uid)}`;
  }

  /** EXPERIMENTAL: camera images of open previews on the ground, under the walls (ground.ts). */
  private renderGround(level: Level) {
    return [...this._groundFeeds.values()].map((feed) => feed.render(level.id));
  }

  /**
   * An open preview of a camera or mower camera: its still in a window, its image on the ground, or both,
   * as the device asks.
   */
  private renderPreview(device: Device, entity: string, source: Point, level: Level, pxPerMetre: number, size: number) {
    const mode = device.preview ?? "window";
    if (mode !== "window") this._shownGround.add(device.id);
    return mode === "ground" ? nothing : this.renderStill(device, entity, source, level, pxPerMetre, size);
  }

  /**
   * The heading of a mower counted on from the last one drawn, so its icon, which glides to each new place,
   * turns the short way instead of spinning round where -180 meets 180.
   */
  private turnedHeading(id: string, heading: number | undefined): number | undefined {
    if (heading === undefined) return undefined;
    const last = this._headings.get(id) ?? heading;
    const turned = last + ((((heading - last + 180) % 360) + 360) % 360) - 180;
    this._headings.set(id, turned);
    return turned;
  }

  /** Mowers where the integration places them, with their track while they mow. */
  private renderMowers(level: Level) {
    return (level.devices ?? [])
      .filter((device) => device.kind === "mower")
      .map((mower) => {
        const robot = this._robots.get(mower.id);
        if (!robot?.place) return nothing;
        const state = mower.entity ? this.hass.states[mower.entity]?.state : undefined;
        // The heading Dreame reports, or the direction of the last step of its track.
        const place = { ...robot.place, heading: this.turnedHeading(mower.id, robot.place.heading ?? trackHeading(robot.track)) };
        return svg`<g class="mower-hit" @click=${() => mower.entity && this.openMoreInfo(mower.entity)}>
          ${renderMower(place, state, robot.track)}
        </g>`;
      });
  }

  /** Vacuums where the integration places them, with their track while they clean. */
  private renderVacuums(level: Level) {
    return (level.devices ?? [])
      .filter((device) => device.kind === "vacuum" && device.entity)
      .map((vacuum) => {
        const robot = this._robots.get(vacuum.id);
        if (!robot?.place) return nothing;
        const state = this.hass.states[vacuum.entity!]?.state;
        return svg`<g class="mower-hit" @click=${() => this.openMoreInfo(vacuum.entity!)}>
          ${renderVacuum(robot.place.at, robot.place.dock, state, robot.track, state === "docked" ? undefined : trackHeading(robot.track))}
        </g>`;
      });
  }

  /** Battery and state beside every mower and vacuum shown on the plan, above the walls. */
  private renderDeviceTags(level: Level, pxPerMetre: number) {
    const size = Math.max(0.2, 11 / pxPerMetre);
    const bounds = this.drawnPart(level);
    return (level.devices ?? []).map((device) => {
      if (!device.entity || (device.kind !== "mower" && device.kind !== "vacuum")) return nothing;
      // Where the integration places the robot, as the drawings below.
      const at = this._robots.get(device.id)?.place?.at;
      if (!at) return nothing;
      const stateObj = this.hass.states[device.entity];
      if (!stateObj) return nothing;
      const charge = Number.parseFloat((device.battery ? this.hass.states[device.battery]?.state : stateObj.attributes.battery_level) ?? "");
      const battery = Number.isFinite(charge) ? `${Math.round(charge)}%` : undefined;
      const status = this.hass.formatEntityState?.(stateObj) ?? stateObj.state;
      return renderDeviceTag(at, battery, status, size, Number.isFinite(charge) && charge <= 20, bounds.x + bounds.w);
    });
  }

  /**
   * Sensors where they stand: header, main value, and the secondary values when there is room for
   * details. Holding opens the main value; a tap does nothing.
   */
  private renderSensors(level: Level, pxPerMetre: number) {
    const mode = this._config.details ?? "auto";
    const details = mode === "show" || (mode === "auto" && pxPerMetre >= DETAILS_PX_PER_M);
    const { value: valueSize, sub: subSize } = readingSizes(pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "sensor" && device.entity && device.sensorType !== "alarm")
      .map((device) => {
        const main = readingText(this.hass.states[device.entity!], device.main);
        const lines = details
          ? (device.secondary ?? [])
              .map((value) => {
                const text = value.entity ? readingText(this.hass.states[value.entity], value) : undefined;
                return text && value.label ? `${value.label} ${text}` : text;
              })
              .filter((text): text is string => !!text)
          : [];
        return svg`<g class="mower-hit"
          @pointerdown=${() => this.holdStart(() => this.openMoreInfo(device.entity!))}
          @pointerup=${() => this.holdEnd(() => undefined)}
          @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          ${renderSensor(device.at, device.label, main, lines, valueSize, subSize)}
        </g>`;
      });
  }

  /**
   * Cameras with what they see. A tap shows a still beside the camera, a second tap hides it;
   * holding opens the camera of HA with its live view.
   */
  private renderCameras(level: Level, pxPerMetre: number) {
    const size = Math.max(0.16, 7 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "camera" && device.entity)
      .map((camera) => {
        const still = this._stills.has(camera.id) || this.autoStill(camera, level);
        return svg`
          ${renderCameraGlow(camera, `${this._uid}-${level.id}-camera-${camera.id}`, this.detects(camera))}
          <g class="camera-hit"
            @pointerdown=${() => this.holdStart(() => this.openMoreInfo(camera.entity!))}
            @pointerup=${() =>
              this.holdEnd(() => {
                if (still) this.closeStill(camera, level);
                else this._stills.add(camera.id);
                this.requestUpdate();
              })}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
            <circle class="lamp-hit" cx=${camera.at[0]} cy=${camera.at[1]} r=${size * 2.5}></circle>
            ${renderCameraIcon(camera, size)}
          </g>
          ${still ? this.renderPreview(camera, camera.entity!, camera.at, level, pxPerMetre, size) : nothing}
        `;
      });
  }

  /**
   * Mowers with a camera: a tap shows its still, which follows the mower, a second tap hides it; holding
   * opens the mower. Drawn above the walls; the mower itself, its dock and track lie below them.
   * A docked mower has no camera to show: its still closes. Near the dock a tap goes to the dock, which
   * opens the mower, while a still already open stays.
   */
  private renderMowerStills(level: Level, pxPerMetre: number) {
    const size = Math.max(0.16, 7 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "mower" && device.entity && device.camera)
      .map((mower) => {
        const place = this._robots.get(mower.id)?.place;
        if (!place) return nothing;
        const state = this.hass.states[mower.entity!]?.state;
        const nearDock = !!place.dock && Math.hypot(place.at[0] - place.dock[0], place.at[1] - place.dock[1]) < DOCK_REACH;
        if (state === "docked") {
          if (this._stills.has(mower.id)) this.closeStill(mower, level);
          return nothing;
        }
        const still = this._stills.has(mower.id);
        return svg`
          ${nearDock
            ? nothing
            : svg`<circle class="lamp-hit mower-hit" cx=${place.at[0]} cy=${place.at[1]} r=${Math.max(0.5, size * 2.5)}
            @pointerdown=${() => this.holdStart(() => this.openMoreInfo(mower.entity!))}
            @pointerup=${() =>
              this.holdEnd(() => {
                if (still) this.closeStill(mower, level);
                else this._stills.add(mower.id);
                this.requestUpdate();
              })}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}></circle>`}
          ${still ? this.renderPreview(mower, mower.camera!, place.at, level, pxPerMetre, size) : nothing}
        `;
      });
  }

  /**
   * The still of a camera next to its source, a camera or a mower: about 260 px wide on screen and at most
   * 60 % of the width and 40 % of the height of the plan, in the proportions of the image (16:9 until the
   * first image comes). A tap closes it.
   */
  private renderStill(device: Device, entity: string, source: Point, level: Level, pxPerMetre: number, size: number) {
    this._shownStills.add(entity);
    // The still from the integration; the picture of HA while the integration cannot send stills.
    const feed = this._stillFeeds.get(entity);
    const picture = this.hass.states[entity]?.attributes.entity_picture as string | undefined;
    const href = feed?.image?.data ?? (feed?.failed && picture ? `${picture}&t=${this._stillTime}` : undefined);
    const image = feed?.image;
    const aspect = image?.width && image?.height ? image.height / image.width : 9 / 16;
    const b = this.drawnPart(level);
    const width = Math.min(Math.max(3.5, 260 / pxPerMetre), b.w * 0.6, (b.h * 0.4) / aspect);
    const height = width * aspect;
    const [x, y] = this.stillPlace(device.id, source, level, b, width, height, size);
    return svg`<g class="still" @click=${() => {
      this.closeStill(device, level);
      this.requestUpdate();
    }}>
      ${href
        ? svg`<image href=${href} x=${x} y=${y} width=${width} height=${height} preserveAspectRatio="xMidYMid slice"></image>`
        : nothing}
    </g>`;
  }

  /** Whether the detection sensor of a camera sees someone now. */
  private detects(camera: Device): boolean {
    return !!camera.detection && this.hass.states[camera.detection]?.state === "on";
  }

  /** Ids of the people and objects a camera sees now. */
  private cameraSees(camera: Device, level: Level): string[] {
    if (!camera.frigate) return [];
    const people = (this._people?.[level.id] ?? []).filter((p) => p.camera === camera.frigate).map((p) => `p${p.id}`);
    const objects = (this._objects[level.id] ?? []).filter((o) => o.camera === camera.frigate).map((o) => `o${o.id}`);
    return [...people, ...objects];
  }

  /**
   * Whether the still of a camera is open by itself: while the integration counts the camera active,
   * that is while it sees someone and a moment after. A still closed by hand stays closed until the
   * camera sees someone it did not see then, or goes quiet.
   */
  private autoStill(camera: Device, level: Level): boolean {
    if (this._config.auto_preview === false || (!camera.frigate && !camera.detection)) return false;
    const active = (!!camera.frigate && this._activeCameras.includes(camera.frigate)) || this.detects(camera);
    const dismissed = this._dismissed.get(camera.id);
    if (dismissed && (!active || this.cameraSees(camera, level).some((id) => !dismissed.has(id)))) this._dismissed.delete(camera.id);
    // Closed by itself: next time it opens where it opens first, below the camera when that is free.
    if (!active && !this._stills.has(camera.id)) this._stillSpot.delete(camera.id);
    return active && !this._dismissed.has(camera.id);
  }

  private closeStill(device: Device, level: Level): void {
    this._stills.delete(device.id);
    const active = (!!device.frigate && this._activeCameras.includes(device.frigate)) || this.detects(device);
    if (active) this._dismissed.set(device.id, new Set(this.cameraSees(device, level)));
    this._stillSpot.delete(device.id);
  }

  /**
   * Where the still goes: as close to its source as it covers no person or object. The places tried
   * are below, above and beside the source, stepping away from it, and last the corners of the plan;
   * when all cover someone, over the source itself. A place is kept, as an offset from the source so the
   * still of a mower moves with it, while it covers nobody, and changes at most every STILL_MOVE_MS so
   * the still does not jump.
   */
  private stillPlace(
    key: string,
    source: Point,
    level: Level,
    b: { x: number; y: number; w: number; h: number },
    width: number,
    height: number,
    gap: number,
  ): [number, number] {
    const clampX = (x: number) => Math.min(Math.max(x, b.x), b.x + b.w - width);
    const clampY = (y: number) => Math.min(Math.max(y, b.y), b.y + b.h - height);
    const [cx, cy] = source;
    // The source itself counts as covered too, so the still stands beside it, not over it.
    const things = [...(this._people?.[level.id] ?? []), ...(this._objects[level.id] ?? []), { x: cx, y: cy }];
    const margin = 0.3;
    const covered = ([x, y]: [number, number]) =>
      things.filter((t) => t.x > x - margin && t.x < x + width + margin && t.y > y - margin && t.y < y + height + margin).length;
    const now = Date.now();
    const spot = this._stillSpot.get(key);
    if (spot) {
      const kept: [number, number] = [clampX(cx + spot.offset[0]), clampY(cy + spot.offset[1])];
      if (covered(kept) === 0 || now - spot.time < STILL_MOVE_MS) return kept;
    }
    const xs = [cx - width / 2, cx - width / 4, cx - (width * 3) / 4, cx + gap * 2, cx - gap * 2 - width];
    const ys = [0, 1, 2, 3].flatMap((k) => [cy + gap * 2 + (k * height) / 2, cy - gap * 2 - height - (k * height) / 2]);
    ys.push(cy - height / 2);
    const corners: [number, number][] = [
      [b.x, b.y],
      [b.x + b.w - width, b.y],
      [b.x, b.y + b.h - height],
      [b.x + b.w - width, b.y + b.h - height],
    ];
    const near = xs.flatMap((x) => ys.map((y): [number, number] => [clampX(x), clampY(y)]));
    const distance = ([x, y]: [number, number]) => Math.hypot(x + width / 2 - cx, y + height / 2 - cy);
    // Near places by their distance from the source, then the corners; over the source when none is free.
    const spots = [...near.sort((p, q) => distance(p) - distance(q)), ...corners.map(([x, y]): [number, number] => [clampX(x), clampY(y)])];
    const best = spots.find((place) => covered(place) === 0) ?? [clampX(cx - width / 2), clampY(cy - height / 2)];
    this._stillSpot.set(key, { offset: [best[0] - cx, best[1] - cy], time: now });
    return best;
  }

  /** Radars as small boxes, and the people they see as dots. */
  private renderRadars(level: Level, pxPerMetre: number) {
    const radars = (level.devices ?? []).filter((device) => device.kind === "radar");
    const size = Math.max(0.12, 6 / pxPerMetre);
    return svg`
      ${radars.map((radar) => renderRadarIcon(radar, size))}
      ${repeat(
        this.levelPeople(level).filter((person) => this.onPlan(level, person.x, person.y)),
        (person) => person.id,
        (person) => renderPerson([person.x, person.y], `${person.status} ${person.source ?? ""}`),
      )}
      ${repeat(
        (this._objects[level.id] ?? []).filter((object) => this.onPlan(level, object.x, object.y)),
        (object) => object.id,
        (object) => renderCameraObject([object.x, object.y], object.label, object.stationary),
      )}
    `;
  }

  private isWatering(entityId: string | null | undefined): boolean {
    const state = entityId ? this.hass.states[entityId]?.state : undefined;
    return state === "open" || state === "opening" || state === "on";
  }

  /** Water of the sprinklers whose valve is open, under the walls of the house. */
  private renderSprays(level: Level) {
    return (level.devices ?? [])
      .filter((device) => device.kind === "sprinkler")
      .map((device) => renderSpray(device, this.isWatering(device.entity)));
  }

  /** Sprinkler heads: a tap opens or closes the valve after Yes unless Ask before switching is off, holding opens it. */
  private renderNozzles(level: Level, pxPerMetre: number) {
    const r = Math.max(0.1, 6 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "sprinkler")
      .map(
        (device) => svg`<g class="nozzle ${this.isWatering(device.entity) ? "on" : ""}"
            @pointerdown=${() => this.holdStart(() => device.entity && this.openMoreInfo(device.entity))}
            @pointerup=${() =>
              this.holdEnd(
                () =>
                  device.entity &&
                  this.ask(device.confirm !== false, device.entity, this.isWatering(device.entity) ? N_("Close {name}?") : N_("Open {name}?"), () =>
                    this.hass.callService("homeassistant", "toggle", { entity_id: device.entity }),
                  ),
              )}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${device.at[0]} cy=${device.at[1]} r=${r * 2.2}></circle>
          <circle cx=${device.at[0]} cy=${device.at[1]} r=${r}></circle>
        </g>`,
      );
  }

  /** Alarm sensors of the given levels that alarm now, with the room they stand in. */
  private activeAlarms(levels: Level[]) {
    return levels.flatMap((level) =>
      (level.devices ?? [])
        .filter((device) => device.kind === "sensor" && device.sensorType === "alarm" && device.entity)
        .map((device) => ({ level, device, room: roomAt(level, device.at), ...alarmState(device.entity, this.hass.states[device.entity!]) }))
        .filter((alarm) => alarm.active),
    );
  }

  /** Alarm sensors: a grey symbol, red with its room pulsing while it alarms; a tap or hold opens it. */
  private renderAlarms(level: Level, pxPerMetre: number) {
    const size = Math.max(0.2, 14 / pxPerMetre);
    const alarming = new Set(this.activeAlarms([level]).flatMap((alarm) => (alarm.room ? [alarm.room.id] : [])));
    return svg`${level.rooms
      .filter((room) => alarming.has(room.id))
      .map((room) => svg`<path class="fc-alarm-room" d=${polygonPath(room.points)}></path>`)}
      ${(level.devices ?? [])
        .filter((device) => device.kind === "sensor" && device.sensorType === "alarm" && device.entity)
        .map((device) => {
          const alarm = alarmState(device.entity, this.hass.states[device.entity!]);
          return svg`<g class="mower-hit" @click=${() => this.openMoreInfo(device.entity!)}>
            <circle class="lamp-hit" cx=${device.at[0]} cy=${device.at[1]} r=${size}></circle>
            ${renderAlarm(device.at, alarm.kind, alarm.active, alarm.unknown, size)}
          </g>`;
        })}`;
  }

  /** The bar of alarms at the top of the card: room and kind; a tap shows its level and opens the sensor. */
  private renderAlarmBar(levels: Level[]) {
    const alarms = this.activeAlarms(levels);
    if (!alarms.length) return nothing;
    return html`<div class="alarm-bar" role="alert">
      ${alarms.map(
        (alarm) => html`<button
          @click=${() => {
            this._active = alarm.level.id;
            this.openMoreInfo(alarm.device.entity!);
          }}
        >
          ${alarm.room ? t("{room} · {alarm}", { room: alarm.room.name, alarm: t(alarm.name) }) : t(alarm.name)}
        </button>`,
      )}
    </div>`;
  }

  /** Light points on top of everything: a tap switches that one light, holding opens it. */
  private renderLightPoints(level: Level, pxPerMetre: number) {
    const r = Math.max(0.14, 8 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "light" && device.entity)
      .map((light) => {
        const on = isOn(this.hass, light.entity!);
        const rgb = this.hass.states[light.entity!]?.attributes.rgb_color as number[] | undefined;
        const colour = on && rgb ? `rgb(${rgb.join(",")})` : "";
        const handlers = {
          down: () => this.holdStart(() => this.openMoreInfo(light.entity!)),
          up: () => this.holdEnd(() => this.toggleLight(light, on)),
        };
        if (light.to) {
          const d = `M${light.at[0]} ${light.at[1]}L${light.to[0]} ${light.to[1]}`;
          return svg`<g class="lamp ${on ? "on" : ""}" style=${colour ? `--lamp:${colour}` : ""}
              @pointerdown=${handlers.down} @pointerup=${handlers.up} @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
            <path class="lamp-hit-line" d=${d} style="stroke-width:${(r * 3.6).toFixed(3)}px"></path>
            <path class="lamp-line" d=${d} style="stroke-width:${(r * 0.8).toFixed(3)}px"></path>
          </g>`;
        }
        return svg`<g class="lamp ${on ? "on" : ""}" style=${colour ? `--lamp:${colour}` : ""}
            @pointerdown=${() => this.holdStart(() => this.openMoreInfo(light.entity!))}
            @pointerup=${handlers.up}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          <circle class="lamp-hit" cx=${light.at[0]} cy=${light.at[1]} r=${r * 1.8}></circle>
          <circle class="lamp-ring" cx=${light.at[0]} cy=${light.at[1]} r=${r}></circle>
          <circle class="lamp-core" cx=${light.at[0]} cy=${light.at[1]} r=${r * 0.45}></circle>
        </g>`;
      });
  }

  private renderRoom(room: Room, pxPerMetre: number, level: Level) {
    const lights = roomLights(level, room);
    // Rooms still listing their lights glow as a whole; placed lights glow on their own.
    const lit = (room.lights ?? []).some((id) => isOn(this.hass, id));
    // Occupied as the integration decides it, with its hold; without that, someone counted in it now.
    const area = this._areas[level.id]?.[room.id];
    const people = this.levelPeople(level).filter((person) => person.status !== "unconfirmed");
    const present = area ? area.occupied : people.some((person) => !room.outdoor && pointInPolygon([person.x, person.y], room.points));
    const thermometers = roomThermometers(level, room);
    const climate = roomClimate(room, this.hass.states);
    // The room a vacuum reports cleaning, matched by name.
    const cleaning = (level.devices ?? []).some((device) => {
      if (device.kind !== "vacuum" || !device.roomSensor || !device.entity) return false;
      const current = this.hass.states[device.roomSensor]?.state?.trim().toLowerCase();
      return this.hass.states[device.entity]?.state === "cleaning" && !!current && current === room.name.trim().toLowerCase();
    });
    const [cx, cy] = centroid(room.points);
    // Text keeps a readable size on a phone: never smaller than a few pixels on screen.
    const nameSize = Math.max(0.26, NAME_PX / pxPerMetre);
    const rows: { text: string; cls: string; size: number }[] = [];
    if (room.name && !room.hideName && this._config.names !== false) rows.push({ text: room.name, cls: "fc-label", size: nameSize });
    // The thermostat: its target, after the temperature it measures when no sensor in the room shows one.
    if (climate && (climate.target !== undefined || (!thermometers.length && climate.current !== undefined))) {
      const current = !thermometers.length && climate.current !== undefined ? `${climate.current.toFixed(1)}°` : "";
      const target = climate.target !== undefined ? `→ ${climate.target.toFixed(1)}°` : "";
      rows.push({ text: [current, target].filter(Boolean).join(" "), cls: `fc-target ${climate.action ?? ""}`, size: nameSize * 0.9 });
    }
    const height = rows.reduce((sum, row) => sum + row.size * 1.15, 0);
    let y = cy - height / 2;
    const lines = rows.map((row) => {
      y += row.size * 1.15;
      return svg`<tspan class=${row.cls} x=${cx} y=${(y - row.size * 0.2).toFixed(3)} style="font-size:${row.size.toFixed(3)}px">${row.text}</tspan>`;
    });
    const interactive = lights.length || thermometers.length || room.climate;
    const xs = room.points.map((p) => p[0]);
    const ys = room.points.map((p) => p[1]);
    const icon = Math.max(0.3, 13 / pxPerMetre);
    return svg`
      <path
        class="room ${lit ? "lit" : ""} ${present ? "present" : ""} ${cleaning ? "cleaning" : ""} ${climate?.action ?? ""} ${interactive ? "tap" : ""}"
        d=${polygonPath(room.points, room.outdoor ? 0 : roomRadii(room, level.walls, planRadius(this._plan)))}
        @pointerdown=${() => this.holdStart(() => (room.climate ? this.openMoreInfo(room.climate) : this.moreInfo(thermometers, lights)))}
        @pointerup=${() => this.holdEnd(() => (!lights.length && room.climate ? this.openMoreInfo(room.climate) : this.tapRoom(room, thermometers, lights)))}
        @pointerleave=${() => window.clearTimeout(this._holdTimer)}
      ></path>
      ${present
        ? svg`<g class="person" transform="translate(${(Math.min(...xs) + icon * 0.9).toFixed(3)} ${(Math.min(...ys) + icon * 0.9).toFixed(3)}) scale(${(icon / 2).toFixed(3)})">
            <circle r="1"></circle>
            <circle class="head" cy="-0.32" r="0.27"></circle>
            <path class="body" d="M-0.48 0.55C-0.45 0.12 -0.22 0.02 0 0.02S0.45 0.12 0.48 0.55Z"></path>
          </g>`
        : nothing}
      ${room.stairs || !rows.length ? nothing : svg`<text class="room-text">${lines}</text>`}
    `;
  }

  private value(entityId: string | null | undefined, digits: number): string | undefined {
    if (!entityId) return undefined;
    const value = Number.parseFloat(this.hass.states[entityId]?.state ?? "");
    return Number.isFinite(value) ? value.toFixed(digits) : undefined;
  }

  private holdStart(onHold: () => void): void {
    this._held = false;
    window.clearTimeout(this._holdTimer);
    this._holdTimer = window.setTimeout(() => {
      this._held = true;
      onHold();
    }, Math.max(150, this._config.hold_time ?? HOLD_MS));
  }

  private holdEnd(onTap: () => void): void {
    window.clearTimeout(this._holdTimer);
    if (!this._held && !this._dragged) onTap();
  }

  /** A room switches all its lights together: off when any is on, otherwise on. */
  private tapRoom(room: Room, thermometers: Device[], lights: string[]): void {
    if (!lights.length) {
      this.moreInfo(thermometers, lights);
      return;
    }
    this.press({ room: room.id });
  }

  private moreInfo(thermometers: Device[], lights: string[]): void {
    const entityId = thermometers[0]?.entity ?? lights[0];
    if (entityId) this.openMoreInfo(entityId);
  }

  private openMoreInfo(entityId: string): void {
    // The details of Home Assistant control any entity, so the child lock keeps them shut.
    if (this._config.child_lock) return;
    fireEvent(this, "hass-more-info", { entityId });
  }

  /**
   * The child lock: only the lights of the plan switch, its light points and the lights of its rooms. Without the
   * lock everything does.
   */
  private allowed(entity: string | null | undefined): boolean {
    if (!this._config.child_lock) return true;
    if (!entity || !this._plan) return false;
    return this._plan.levels.some(
      (level) =>
        (level.devices ?? []).some((device) => device.kind === "light" && device.entity === entity) ||
        level.rooms.some((room) => room.lights?.includes(entity)),
    );
  }

  static styles = [
    planStyles,
    css`
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        position: relative;
        background: var(--fc-background);
      }
      /* A card without a background: the dashboard shows through, with no frame or shadow round it. */
      ha-card.background-transparent,
      ha-card.background-transparent .tabs {
        background: transparent;
      }
      ha-card.background-transparent {
        border: none;
        box-shadow: none;
      }
      /* A card in the card colour of the theme. */
      ha-card.background-theme,
      ha-card.background-theme .tabs {
        background: var(--ha-card-background, var(--card-background-color));
      }
      /* Off the plan's own background the switches above the plan take the text colour of the theme. */
      ha-card.background-transparent .tabs,
      ha-card.background-theme .tabs {
        color: var(--primary-text-color);
      }
      ha-card:fullscreen {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: none;
        border-radius: 0;
        box-shadow: none;
        background: var(--fc-background);
      }
      ha-card:fullscreen .levels {
        flex: 1;
        min-height: 0;
        padding: 0;
        overflow: hidden;
      }
      ha-card:fullscreen .level.zoomable,
      ha-card:fullscreen .level.zoomable svg {
        touch-action: none;
      }
      .play-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px 18px;
        margin: 4px 0;
      }
      .play-options .switch {
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
        color: var(--primary-text-color);
      }
      .figures {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
      }
      .figure {
        width: 72px;
        height: 92px;
        border-radius: 14px;
        border: 3px solid var(--divider-color);
        background: rgba(255, 255, 255, 0.06);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .figure.chosen {
        border-color: #ffd65a;
        background: rgba(255, 214, 90, 0.15);
      }
      .figure-picture {
        width: 48px;
        height: 68px;
        image-rendering: pixelated;
      }
      .tabs .play-button {
        margin-left: 8px;
        border: 2px solid #c98a1c;
        border-radius: 999px;
        background: linear-gradient(180deg, #ffe680, #f8a838);
        color: #3a2408;
        font-size: 16px;
        font-weight: 800;
        line-height: 1;
        padding: 7px 16px;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(248, 168, 56, 0.55);
        animation: fc-play-glow 2s ease-in-out infinite;
      }
      .tabs .play-button.on {
        border-color: rgba(255, 255, 255, 0.5);
        background: #c8402e;
        color: #fff;
        box-shadow: none;
        animation: none;
      }
      .tabs .play-button.lamps:not(.on) {
        border-color: #2f55a8;
        background: linear-gradient(180deg, #8ab8ff, #3f6fd1);
        color: #fff;
        animation-name: fc-lamps-glow;
      }
      @keyframes fc-lamps-glow {
        0%,
        100% {
          box-shadow: 0 2px 10px rgba(63, 111, 209, 0.55);
        }
        50% {
          box-shadow: 0 2px 18px rgba(138, 184, 255, 0.9);
        }
      }
      @keyframes fc-play-glow {
        50% {
          box-shadow: 0 2px 18px rgba(248, 200, 56, 0.9);
        }
      }
      .stick {
        position: absolute;
        right: 28px;
        bottom: 28px;
        z-index: 3;
        width: 132px;
        height: 132px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.14);
        border: 3px solid rgba(255, 255, 255, 0.45);
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: none;
        user-select: none;
      }
      .stick-knob {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.85);
        border: 3px solid #1e1a24;
        pointer-events: none;
      }
      .act {
        position: absolute;
        right: 184px;
        bottom: 44px;
        z-index: 3;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 3px solid #1e1a24;
        background: #e8503a;
        color: #fff;
        font: 800 30px/1 sans-serif;
        box-shadow: 0 4px 0 #8a2a1e, 0 6px 14px rgba(0, 0, 0, 0.35);
        touch-action: manipulation;
        cursor: pointer;
      }
      .act:active {
        transform: translateY(3px);
        box-shadow: 0 1px 0 #8a2a1e;
      }
      .full-button {
        margin-left: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font-size: 16px;
        line-height: 1;
        padding: 4px 8px;
        cursor: pointer;
      }
      .game {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: auto;
      }
      .game button {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        border: 1px solid var(--divider-color);
        border-radius: 16px;
        padding: 4px 12px 4px 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      .game button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .game .game-icon {
        display: block;
      }
      .game .score {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        font-weight: 600;
        color: #f8c838;
      }
      .fc-game-target {
        fill: rgba(255, 214, 90, 0.18);
        stroke: #ffd65a;
        stroke-width: 0.06;
        pointer-events: none;
        transform-box: fill-box;
        transform-origin: center;
        animation: fc-game-pulse 1.2s ease-in-out infinite;
      }
      @keyframes fc-game-pulse {
        0%,
        100% {
          opacity: 0.5;
          transform: scale(0.85);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
      .game-window {
        width: min(320px, 92%);
        align-items: center;
        text-align: center;
        gap: 8px;
        padding: 20px 16px 16px;
        color: var(--primary-text-color);
      }
      .game-window p {
        margin: 0;
        font-size: 15px;
        line-height: 1.35;
      }
      .game-window .game-goal {
        color: var(--secondary-text-color);
      }
      .game-window > .game-icon {
        filter: drop-shadow(0 0 12px rgba(248, 200, 56, 0.6));
      }
      .game-window.won > .game-icon {
        animation: fc-game-bounce 1s ease-in-out infinite;
      }
      .game-title {
        font-size: 30px;
        font-weight: 800;
        letter-spacing: 0.5px;
        background: linear-gradient(180deg, #ffe680, #f8a838);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        filter: drop-shadow(0 2px 0 rgba(0, 0, 0, 0.35));
      }
      .game-lamps {
        display: flex;
        gap: 14px;
        margin-bottom: 2px;
      }
      .game-lamps span {
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: #4a4f58;
        box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.3);
      }
      .game-lamps span.lit {
        background: #ffd65a;
        box-shadow: 0 0 18px 6px rgba(255, 214, 90, 0.6);
        animation: fc-game-glow 1.2s ease-in-out infinite;
      }
      .game-time {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 28px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .game-time .game-icon {
        display: block;
      }
      .game-window .key.yes {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .key.big {
        font-size: 17px;
        font-weight: 700;
        padding: 10px 22px;
      }
      .countdown {
        position: absolute;
        inset: 0;
        z-index: 4;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .countdown span {
        font-size: 120px;
        font-weight: 900;
        line-height: 1;
        color: #ffd65a;
        -webkit-text-stroke: 4px rgba(0, 0, 0, 0.55);
        paint-order: stroke fill;
        text-shadow: 0 0 30px rgba(255, 214, 90, 0.7);
        animation: fc-countdown-pop 1s ease-out both;
      }
      .countdown span.go {
        font-size: 72px;
        color: #8be27a;
        text-shadow: 0 0 30px rgba(139, 226, 122, 0.7);
      }
      @keyframes fc-countdown-pop {
        0% {
          opacity: 0;
          transform: scale(1.8);
        }
        25% {
          opacity: 1;
          transform: scale(1);
        }
        80% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      @keyframes fc-game-glow {
        0%,
        100% {
          opacity: 0.75;
        }
        50% {
          opacity: 1;
        }
      }
      @keyframes fc-game-bounce {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-6px);
        }
      }
      .ask {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        align-items: center;
        gap: 10px;
        max-width: calc(100% - 24px);
        padding: 8px 8px 8px 16px;
        border-radius: 28px;
        background: var(--card-background-color, #1c1f24);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
        color: var(--primary-text-color);
        font-size: 14px;
      }
      .ask span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .ask .yes {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: #fff;
      }
      .pad-backdrop {
        position: absolute;
        inset: 0;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.45);
      }
      .pad {
        width: min(260px, 90%);
        padding: 12px;
        border-radius: 16px;
        background: var(--card-background-color, #1c1f24);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .pad-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--secondary-text-color);
        font-size: 13px;
      }
      .pad-row {
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .key {
        min-width: 48px;
        height: 48px;
        border-radius: 24px;
        border: 1px solid var(--divider-color);
        background: var(--secondary-background-color, #2a2e35);
        color: var(--primary-text-color);
        font: inherit;
        font-size: 18px;
        cursor: pointer;
      }
      .key:disabled {
        opacity: 0.35;
        cursor: default;
      }
      .key.power.on {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .dpad {
        display: grid;
        grid-template-columns: repeat(3, 56px);
        grid-template-rows: repeat(3, 56px);
        gap: 6px;
        justify-content: center;
      }
      .dpad .key {
        width: 56px;
        height: 56px;
      }
      .dpad .up {
        grid-area: 1 / 2;
      }
      .dpad .left {
        grid-area: 2 / 1;
      }
      .dpad .ok {
        grid-area: 2 / 2;
        font-size: 15px;
        font-weight: 600;
      }
      .dpad .right {
        grid-area: 2 / 3;
      }
      .dpad .down {
        grid-area: 3 / 2;
      }
      .pad-note {
        margin: 0;
        font-size: 12px;
        color: var(--secondary-text-color);
        text-align: center;
      }
      .empty {
        padding: 16px;
        color: var(--secondary-text-color);
      }
      .alarm-bar {
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px 8px;
        background: rgba(244, 67, 54, 0.18);
      }
      .alarm-bar button {
        border: 1px solid #f44336;
        border-radius: 16px;
        padding: 4px 12px;
        background: #f44336;
        color: #fff;
        font: inherit;
        font-size: 13px;
        font-weight: 500;
        cursor: pointer;
      }
      .tabs {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
        padding: 6px 6px 0;
        font-size: 13px;
        /* Above the plan, whose camera views may reach past its top. */
        position: relative;
        z-index: 2;
        background: var(--fc-background);
      }
      .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: 4px;
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
      .scale {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--secondary-text-color);
        font-size: 11px;
      }
      .scale .bar {
        width: 36px;
        height: 6px;
        border-radius: 3px;
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
      .tabs button {
        border: 1px solid var(--divider-color, #333);
        background: transparent;
        color: var(--primary-text-color);
        border-radius: 14px;
        padding: 2px 10px;
        font: inherit;
        cursor: pointer;
      }
      .tabs button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .levels {
        padding: 4px;
      }
      .level {
        position: relative;
      }
      .levels.side {
        display: flex;
        gap: 0;
        align-items: flex-start;
      }
      .level svg {
        display: block;
        width: 100%;
        height: auto;
        /* Labels just outside the walls, such as the blind of a window, may run into the small margin. */
        overflow: visible;
      }
      /* A cropped or zoomed plan ends at its frame. */
      .level svg.cropped {
        overflow: hidden;
      }
      /* Pixel look: the canvas lies under the plan, which keeps its taps and labels but draws no shapes. */
      .pixel-box {
        position: relative;
      }
      .pixel-box canvas.pixel {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        image-rendering: pixelated;
        pointer-events: none;
      }
      .pixel-box svg {
        position: relative;
      }
      /* The drawing shows lights, people, robots and water itself; their shapes on the plan only keep the taps. */
      svg.pixel .room {
        fill: transparent !important;
        stroke: none !important;
      }
      svg.pixel .person,
      svg.pixel .fc-person,
      svg.pixel .fc-track,
      svg.pixel .lamp-ring,
      svg.pixel .nozzle circle:not(.lamp-hit),
      svg.pixel .fc-mower,
      svg.pixel .fc-vacuum,
      svg.pixel .fc-trail,
      svg.pixel .fc-screen {
        opacity: 0 !important;
      }
      /* Lamps: a small symbol to tap, grey while off and warm while on; a line light shows only while off. */
      svg.pixel .lamp .lamp-core {
        fill: #9a9a9a !important;
        stroke: #2a2a2e !important;
        stroke-width: 0.03px !important;
        opacity: 1 !important;
      }
      svg.pixel .lamp.on .lamp-core {
        fill: var(--lamp, #ffd36a) !important;
      }
      svg.pixel .lamp .lamp-line {
        stroke: #9a9a9a !important;
        opacity: 0.8 !important;
      }
      svg.pixel .lamp.on .lamp-line {
        opacity: 0 !important;
      }
      svg.pixel .fc-device-tag,
      svg.pixel .fc-opening-label,
      svg.pixel .fc-thermometer text,
      svg.pixel .fc-indicator text {
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.75) !important;
        stroke-width: 0.08px !important;
        stroke-linejoin: round;
      }
      svg.pixel .room-text {
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 0.05px;
      }
      /* One finger scrolls the page; two fingers are the card's to zoom and move the plan. */
      .level.zoomable svg,
      .levels.zoomable {
        touch-action: pan-x pan-y;
      }
      .levels.zoomable {
        position: relative;
        overflow: hidden;
      }
      .group {
        display: flex;
        align-items: flex-start;
        transform-origin: 0 0;
      }
      .zoom {
        position: absolute;
        right: 6px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .zoom button {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color, #1c1f24);
        color: var(--primary-text-color);
        font-size: 18px;
        line-height: 1;
        cursor: pointer;
        opacity: 0.85;
      }
      .room {
        fill: transparent;
        transition: fill 0.4s;
      }
      .room.tap {
        cursor: pointer;
      }
      .room.lit {
        fill: var(--fc-light);
        fill-opacity: 0.16;
      }
      .glow {
        pointer-events: none;
      }
      .lamp {
        cursor: pointer;
      }
      .lamp-hit {
        fill: transparent;
      }
      .camera-hit,
      .still {
        cursor: pointer;
      }
      /* The integration moves a delayed mower every second; its icon glides between the places. */
      .fc-mower {
        transition: transform 1s linear;
      }
      .mower-hit {
        cursor: pointer;
      }
      .fc-track {
        fill: none;
        stroke: var(--fc-presence);
        stroke-width: 0.12;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fc-walk {
        fill: none;
        stroke: var(--fc-presence);
        stroke-opacity: 0.18;
        stroke-width: 0.08;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .fc-track.object {
        stroke: var(--fc-camera-object, #ab47bc);
      }
      .car-hit {
        fill: transparent;
        cursor: pointer;
      }
      .opening-hit {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .nozzle {
        cursor: pointer;
      }
      .nozzle circle:not(.lamp-hit) {
        fill: var(--fc-floor);
        stroke: var(--fc-water);
        stroke-width: 0.03;
        opacity: 0.7;
      }
      .nozzle.on circle:not(.lamp-hit) {
        fill: var(--fc-water);
        opacity: 1;
      }
      .lamp-hit-line {
        stroke: transparent;
        stroke-linecap: round;
      }
      .lamp-line {
        stroke: var(--fc-label);
        stroke-linecap: round;
        opacity: 0.6;
      }
      .lamp.on .lamp-line {
        stroke: var(--lamp, var(--fc-light));
        opacity: 1;
      }
      .lamp-ring {
        fill: var(--fc-floor);
        stroke: var(--fc-label);
        stroke-width: 0.03;
      }
      .lamp-core {
        fill: var(--fc-label);
        opacity: 0.5;
      }
      .lamp.on .lamp-ring {
        stroke: var(--lamp, var(--fc-light));
      }
      .lamp.on .lamp-core {
        fill: var(--lamp, var(--fc-light));
        opacity: 1;
      }
      /* The thermostat of the room heats or cools now. */
      .room.heating {
        fill: #ff7043;
        fill-opacity: 0.1;
      }
      .room.cooling {
        fill: #42a5f5;
        fill-opacity: 0.1;
      }
      .fc-target {
        fill: var(--fc-label);
      }
      .fc-target.heating {
        fill: #ff7043;
      }
      .fc-target.cooling {
        fill: #42a5f5;
      }
      .room.cleaning {
        fill: var(--fc-water);
        fill-opacity: 0.08;
      }
      .room.present {
        stroke: var(--fc-presence);
        stroke-width: 0.05;
        stroke-dasharray: 0.15 0.1;
      }
      .person {
        pointer-events: none;
      }
      .person circle {
        fill: var(--fc-presence);
      }
      .person .head,
      .person .body {
        fill: var(--fc-background);
      }
      .room-text {
        pointer-events: none;
        text-anchor: middle;
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
      }

      .value {
        fill: var(--fc-value);
        font-weight: 600;
      }
      .sub {
        fill: var(--fc-label);
      }
    `,
  ];
}

defineElement("floorcast-card", FloorCastCard);

declare global {
  interface Window {
    customCards?: { type: string; name: string; description: string; preview?: boolean }[];
  }
}
window.customCards = window.customCards ?? [];
if (!window.customCards.some((card) => card.type === "floorcast-card")) {
  window.customCards.push({
    type: "floorcast-card",
    name: "FloorCast",
    description: "Floor plan with temperatures, lights and devices.",
  });
}
