// Dashboard card: the plan with live states of rooms drawn on it.
import { defineElement } from "./define";
import "./card-editor";
import { type CardConfig } from "./card-config";
import { GroundFeed } from "./ground";
import { LitElement, css, html, nothing, svg, type PropertyValues } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { type HomeAssistant, fireEvent, isOn } from "./ha";
import { type CameraObject, type StillImage, type Device, type Level, type TrackedPerson, type Plan, type Point, type Room, DEFAULT_GLOW,
  centroid,
  deviceCentre,
  hasGarden,
  drawnBounds,
  openGroups,
  planRadius,
  polygonPath,
  pointInPolygon,
  pointOnWall,
  readingText,
  radarTargets,
  roomAt,
  roomLights,
  roomThermometers,
  normalizeSensors,
  isPowered,
  withoutGarden,
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
  trackHeading,
  renderScreen,
  renderScreenGlows,
  renderRadarIcon,
  renderLevel,
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
const HOLD_MS = 350;
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

/** A switch of the card remembered in this browser; off without storage. */
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

class FloorCastCard extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _plan: { state: true },
    _width: { state: true },
    _active: { state: true },
    _garden: { state: true },
    _people: { state: true },
    _objects: { state: true },
    _pad: { state: true },
    _showWalks: { state: true },
    _walks: { state: true },
  };

  hass!: HomeAssistant;
  private _config!: CardConfig;
  private _plan?: Plan;
  private _width = 0;
  private _active?: string;
  private _garden = stored(GARDEN_KEY);
  private _unsubscribe?: Promise<() => void>;
  private _unsubscribePeople?: Promise<() => void>;
  // People the integration tracks, per level; without them the card shows the raw radar targets.
  private _people?: Record<string, TrackedPerson[]>;
  private _unsubscribeObjects?: Promise<() => void>;
  // Objects Frigate tracks, per level, placed by the integration through the calibrated cameras.
  private _objects: Record<string, CameraObject[]> = {};
  // Screen whose remote control is open over the plan.
  private _pad?: Device;
  private _resize = new ResizeObserver((entries) => {
    this._width = entries[0].contentRect.width;
  });
  private _holdTimer?: number;
  private _held = false;
  // Ids of gradients and clip paths must differ between cards on one dashboard.
  private _uid = `fc${Math.random().toString(36).slice(2, 8)}`;
  // Mowers and vacuums as the integration places them, with their tracks.
  // Last heading drawn for each mower, counted on past a full turn (turnedHeading).
  private _headings = new Map<string, number>();
  private _robots = new Map<string, { level: string; place: RobotPlace | null; track: Point[] }>();
  private _unsubscribeRobots?: Promise<() => void>;
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

  setConfig(config: CardConfig): void {
    this._config = { layout: "auto", ...config };
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
    if (this.hass) this._subscribe();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this._stillTimer);
    this._resize.disconnect();
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
    this._stillFeeds.forEach((feed) => feed.unsubscribe.then((unsubscribe) => unsubscribe()).catch(() => undefined));
    this._stillFeeds.clear();
  }

  protected updated(changed: PropertyValues): void {
    if (changed.has("hass") && !this._unsubscribe && this.isConnected) this._subscribe();
    if (this.isConnected) this.followStills();
    if (this.isConnected) this.followGround();
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
      },
      { type: "floorcast/plan/subscribe" },
    );
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
    this._unsubscribeObjects = this.hass.connection.subscribeMessage<{ objects: Record<string, CameraObject[]>; active?: string[] }>(
      (message) => {
        this._objects = message.objects;
        this._activeCameras = message.active ?? [];
        for (const [level, objects] of Object.entries(message.objects)) for (const o of objects) this.record(level, `o${o.id}`, o.x, o.y, true);
      },
      { type: "floorcast/objects/subscribe" },
    );
    this._unsubscribeObjects.catch(() => (this._objects = {}));
    this._unsubscribeRobots = this.hass.connection.subscribeMessage<RobotMessage>((message) => this.followRobots(message), {
      type: "floorcast/robots/subscribe",
    });
    this._unsubscribeRobots.catch(() => undefined);
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
  private viewBounds(level: Level): { x: number; y: number; w: number; h: number } {
    const crop = this._config.crop?.[level.id];
    return crop ? { x: crop[0], y: crop[1], w: crop[2], h: crop[3] } : drawnBounds(level);
  }

  /** Whether a point lies on the drawn part of the level, so people in a hidden garden are not drawn past the plan. */
  private onPlan(level: Level, x: number, y: number): boolean {
    const b = this.viewBounds(level);
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

  private toggleGarden(): void {
    this._garden = !this._garden;
    store(GARDEN_KEY, this._garden);
  }



  render() {
    if (!this._plan) return html`<ha-card><div class="empty">…</div></ha-card>`;
    const all = this.levels();
    if (!all.length) return html`<ha-card><div class="empty">FloorCast: no levels to show.</div></ha-card>`;
    // The garden is switched on the card, or fixed by the configuration (a phone showing one floor).
    const gardenMode = this._config.garden ?? "toggle";
    const gardenToggle = gardenMode === "toggle" && all.some(hasGarden);
    const showGarden = gardenMode === "show" || (gardenMode === "toggle" && this._garden);
    const levels = showGarden ? all : all.map(withoutGarden);
    const width = Math.max(this._width - 8, 100);
    const metres = levels.map((level) => this.viewBounds(level).w);
    const sideScale = width / metres.reduce((sum, w) => sum + w, 0);
    const fitsSide = sideScale * Math.min(...metres) >= MIN_SIDE_WIDTH;
    const side = this._config.layout === "side" || (this._config.layout === "auto" && fitsSide && levels.length > 1);
    const active = levels.find((level) => level.id === this._active) ?? levels[0];
    // Filled again by renderCameras and renderMowerStills; read by followStills and followGround after the render.
    this._shownStills = new Set();
    this._shownGround = new Set();
    return html`
      <ha-card .header=${this._config.title}>
        ${(side || levels.length < 2) && !gardenToggle && !this._config.history
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
                    Garden
                  </label>`
                : nothing}
              ${this._config.history
                ? html`<label class="switch" title="Where people walked over the last day">
                    <input type="checkbox" .checked=${this._showWalks} @change=${() => this.toggleWalks(levels)} />
                    <span class="track"><span class="knob"></span></span>
                    Paths
                  </label>`
                : nothing}

            </div>`}
        <div class="levels ${side ? "side" : ""}">
          ${(side ? levels : [active]).map((level) => this.renderLevel(level, width, side ? sideScale : undefined))}
        </div>
        ${this.renderPad()}
      </ha-card>
    `;
  }

  private renderLevel(level: Level, width: number, scale?: number) {
    const b = this.viewBounds(level);
    // Side by side every level uses the same scale, so a metre is equally long on each.
    const style = scale ? `width:${(b.w * scale).toFixed(0)}px` : "width:100%";
    const pxPerMetre = scale ?? width / b.w;
    return html`
      <div class="level" style=${style}>
        ${scale ? html`<div class="name">${level.name}</div>` : nothing}
        <svg class=${this._config.crop?.[level.id] ? "cropped" : ""} viewBox="${b.x} ${b.y} ${b.w} ${b.h}" preserveAspectRatio="xMidYMin meet">
          ${PLAN_DEFS} ${renderLevel(level, this.hass.states, planRadius(this._plan), [this.renderGround(level), this.renderSprays(level), this.renderMowers(level), this.renderVacuums(level)])} ${this.renderGlows(level)}
          ${level.rooms.map((room) => this.renderRoom(room, pxPerMetre, level))} ${this.renderLightPoints(level, pxPerMetre)}
          ${renderOpeningLabels(level, this.hass.states, Math.max(0.16, 10 / pxPerMetre))} ${this.renderOpeningHits(level, pxPerMetre)}
          ${this.renderScreens(level, pxPerMetre)} ${this.renderDeviceTags(level, pxPerMetre)} ${this.renderSensors(level, pxPerMetre)}
          ${this.renderNozzles(level, pxPerMetre)} ${this.renderWalks(level)} ${this.renderTrails(level)} ${this.renderCameras(level, pxPerMetre)} ${this.renderMowerStills(level, pxPerMetre)} ${this.renderRadars(level, pxPerMetre)}
        </svg>
      </div>
    `;
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
        return svg`<path class="opening-hit" stroke-width=${Math.max(wall.t + 0.2, 24 / pxPerMetre)}
          d="M${a[0]} ${a[1]}L${b[0]} ${b[1]}"
          @pointerdown=${() => this.holdStart(() => this.openMoreInfo(entity))}
          @pointerup=${() => this.holdEnd(() => (opening.cover ? this.press({ opening: opening.id }) : this.openMoreInfo(entity)))}
          @pointerleave=${() => window.clearTimeout(this._holdTimer)}></path>`;
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
            @pointerdown=${() => this.holdStart(() => (this._pad = device))}
            @pointerup=${() => this.holdEnd(() => this.press({ device: device.id }))}
            @pointerleave=${() => window.clearTimeout(this._holdTimer)}>
          ${renderScreen(device, on)}
          <path class="opening-hit" stroke-width=${Math.max(0.5, 24 / pxPerMetre)} d="M${device.at[0]} ${device.at[1]}L${to[0]} ${to[1]}"></path>
        </g>`;
      });
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
          <span>${stateObj?.attributes.friendly_name ?? "Screen"} · ${stateObj?.state ?? "?"}</span>
          <button class="key" title="Close" @click=${() => (this._pad = undefined)}>×</button>
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
        ${device.remote ? nothing : html`<p class="pad-note">Choose the remote of the screen in the editor to use the keys.</p>`}
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
    const bounds = this.viewBounds(level);
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
      .filter((device) => device.kind === "sensor" && device.entity)
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
          ${renderCameraGlow(camera, `${this._uid}-${level.id}-camera-${camera.id}`)}
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
    const b = this.viewBounds(level);
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
    if (this._config.auto_preview === false || !camera.frigate) return false;
    const active = this._activeCameras.includes(camera.frigate);
    const dismissed = this._dismissed.get(camera.id);
    if (dismissed && (!active || this.cameraSees(camera, level).some((id) => !dismissed.has(id)))) this._dismissed.delete(camera.id);
    // Closed by itself: next time it opens where it opens first, below the camera when that is free.
    if (!active && !this._stills.has(camera.id)) this._stillSpot.delete(camera.id);
    return active && !this._dismissed.has(camera.id);
  }

  private closeStill(device: Device, level: Level): void {
    this._stills.delete(device.id);
    if (device.frigate && this._activeCameras.includes(device.frigate)) this._dismissed.set(device.id, new Set(this.cameraSees(device, level)));
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

  /** Sprinkler heads; a tap only opens the valve, so a stray tap never starts the water. */
  private renderNozzles(level: Level, pxPerMetre: number) {
    const r = Math.max(0.1, 6 / pxPerMetre);
    return (level.devices ?? [])
      .filter((device) => device.kind === "sprinkler")
      .map(
        (device) => svg`<g class="nozzle ${this.isWatering(device.entity) ? "on" : ""}"
            @click=${() => device.entity && this.openMoreInfo(device.entity)}>
          <circle class="lamp-hit" cx=${device.at[0]} cy=${device.at[1]} r=${r * 2.2}></circle>
          <circle cx=${device.at[0]} cy=${device.at[1]} r=${r}></circle>
        </g>`,
      );
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
          up: () => this.holdEnd(() => this.hass.callService("homeassistant", "toggle", { entity_id: light.entity })),
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
            @pointerup=${() => this.holdEnd(() => this.hass.callService("homeassistant", "toggle", { entity_id: light.entity }))}
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
    const height = rows.reduce((sum, row) => sum + row.size * 1.15, 0);
    let y = cy - height / 2;
    const lines = rows.map((row) => {
      y += row.size * 1.15;
      return svg`<tspan class=${row.cls} x=${cx} y=${(y - row.size * 0.2).toFixed(3)} style="font-size:${row.size.toFixed(3)}px">${row.text}</tspan>`;
    });
    const interactive = lights.length || thermometers.length;
    const xs = room.points.map((p) => p[0]);
    const ys = room.points.map((p) => p[1]);
    const icon = Math.max(0.3, 13 / pxPerMetre);
    return svg`
      <path
        class="room ${lit ? "lit" : ""} ${present ? "present" : ""} ${cleaning ? "cleaning" : ""} ${interactive ? "tap" : ""}"
        d=${polygonPath(room.points, room.outdoor ? 0 : roomRadii(room, level.walls, planRadius(this._plan)))}
        @pointerdown=${() => this.holdStart(() => this.moreInfo(thermometers, lights))}
        @pointerup=${() => this.holdEnd(() => this.tapRoom(room, thermometers, lights))}
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
    if (!this._held) onTap();
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
    fireEvent(this, "hass-more-info", { entityId });
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
      .tabs {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 6px 0;
        font-size: 13px;
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
      /* A cropped plan ends at its frame. */
      .level svg.cropped {
        overflow: hidden;
      }
      .name {
        color: var(--secondary-text-color);
        font-size: 13px;
        margin: 0 0 2px 4px;
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
