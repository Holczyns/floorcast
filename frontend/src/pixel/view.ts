// The pixel look on the card: one scene per shown level, brought to life every frame from the states of
// Home Assistant and the people and robots the integration sends, and copied into the canvas under the
// plan. The plan above it keeps every tap, label and preview; only its drawing is left out.
//
// State kept between frames: where each person was drawn (they walk to where the tracking puts them),
// the drops of water in the air, how wet the lawn is, and the last light and sun pictures with the
// states they were worked out from, so they are worked out again only when one of those changes.
import type { HomeAssistant } from "../ha";
import { type Level, type Opening, type Plan, type Point, type TrackedPerson, PET_COATS, carPresent, deviceCentre, isPowered, pointInPolygon } from "../model";
import { PPM, canvas, hash, rect } from "./art";
import { FACE, type Furniture, LIGHT_CELL, type Piece, Scene, SHELTER_HEIGHT, STANDING_GARDEN } from "./scene";
import { Grid } from "./grid";
import { type Hunt, PetLife, type PetPlace, type PetState, hunt } from "./pets";
import { BODY, type Player, furnitureBetween, furnitureNear, marker, playGrid, star } from "./play";
import { type Facing, OUTFITS, type Outfit, bone, drop, fightCloud, heart, lying, mower, person, sitting, snore, toy, vacuum } from "./sprites";
import { animal, animalHeight, coatColour } from "./animals";

/**
 * How far a door, gate or wicket should stand open, 0 shut to 1 open, and how fast it gets there per second:
 * a gate follows the position of its cover (or runs while it opens or closes), a door swings at once.
 */
function openingTarget(hass: HomeAssistant, o: Opening): { open: number; speed: number } {
  if (o.cover) {
    const state = hass.states[o.cover];
    const position = state?.attributes.current_position;
    if (typeof position === "number") return { open: clamp(position / 100, 0, 1), speed: 0.3 };
    if (state?.state === "opening") return { open: 1, speed: 0.08 };
    if (state?.state === "closing") return { open: 0, speed: 0.08 };
    if (state?.state === "open" || state?.state === "closed") return { open: state.state === "open" ? 1 : 0, speed: 0.3 };
  }
  return { open: openingOpen(hass, o) ? 1 : 0, speed: 3 };
}

/** Weather conditions of Home Assistant as the picture shows them. */
interface Sky {
  rain: number;
  snow: number;
  fog: number;
  lightning: boolean;
  /** Share of daylight left under the clouds, and of the sun's patches. */
  light: number;
  sun: number;
}

function skyOf(condition: string | undefined): Sky {
  const sky: Sky = { rain: 0, snow: 0, fog: 0, lightning: false, light: 1, sun: 1 };
  switch (condition) {
    case "partlycloudy":
      return { ...sky, light: 0.95, sun: 0.6 };
    case "cloudy":
      return { ...sky, light: 0.82, sun: 0.15 };
    case "fog":
      return { ...sky, fog: 1, light: 0.8, sun: 0 };
    case "rainy":
      return { ...sky, rain: 0.5, light: 0.72, sun: 0 };
    case "pouring":
      return { ...sky, rain: 1, light: 0.62, sun: 0 };
    case "lightning":
      return { ...sky, lightning: true, light: 0.7, sun: 0 };
    case "lightning-rainy":
      return { ...sky, rain: 0.8, lightning: true, light: 0.62, sun: 0 };
    case "hail":
      return { ...sky, rain: 0.7, light: 0.66, sun: 0 };
    case "snowy":
      return { ...sky, snow: 0.6, light: 0.85, sun: 0 };
    case "snowy-rainy":
      return { ...sky, snow: 0.4, rain: 0.3, light: 0.75, sun: 0 };
    default:
      return sky;
  }
}

/** A raindrop or snowflake in the air, in pixels, falling to where it lands. */
interface Flake {
  x: number;
  y: number;
  land: number;
  snow: boolean;
  splash: number;
  phase: number;
}

/** Whether a door, gate or wicket stands open: a gate by its cover, any by its contact, else as drawn. */
function openingOpen(hass: HomeAssistant, o: Opening): boolean {
  if (o.type === "gate" && o.cover) {
    const state = hass.states[o.cover]?.state;
    return state === "open" || state === "opening";
  }
  const contact = o.contact ? hass.states[o.contact]?.state : undefined;
  if (contact === "on") return true;
  if (contact === "off") return false;
  return o.drawn !== "closed";
}

export interface PixelBounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PixelTarget {
  canvas: HTMLCanvasElement;
  level: Level;
  /** Changes whenever the level must be drawn anew: another plan, the garden shown or hidden. */
  key: string;
  bounds: PixelBounds;
}

export interface RobotPlace {
  at: Point;
  heading?: number;
  dock?: Point;
  state?: string;
}

export interface PixelSource {
  hass(): HomeAssistant;
  plan(): Plan | undefined;
  people(level: Level): TrackedPerson[];
  robot(id: string): RobotPlace | null | undefined;
  /** Where a mower or vacuum has gone in its current run, oldest first; empty without one. */
  track(id: string): Point[];
  /** The character of the walking game on a level, while it is played there. */
  player?(level: Level): Player | undefined;
  /** Stars of the walking game still to pick up on a level. */
  stars?(level: Level): Point[];
}

interface Walker {
  x: number;
  y: number;
  facing: Facing;
  moving: boolean;
  outfit: Outfit;
  /**
   * Where the person stopped and for how many seconds the tracking has kept them near it. After a moment
   * close to a sofa, chair or bench they sit on it, close to a bed they lie in it.
   */
  anchor: Point;
  still: number;
  /** The way still to walk to where the tracking puts the person, round walls through doors, and its end. */
  route: Point[];
  goal: Point;
}

// Seconds a touched pet plays where it was touched before it goes back to its day.
const PLAY = 25;
// Frames a second of the poses that move in place; a pose not here holds still.
const POSE_RATE: Partial<Record<PetState, number>> = { sleep: 0.7, sit: 1.5, wash: 3, play: 6, knead: 4, scratch: 7, roll: 5, crouch: 8, eat: 5, dig: 7 };

/** The frame of a pet: counted by its steps while it moves, by the clock while it stays. */
function petFrame(place: PetPlace, time: number): number {
  if (place.state === "hop") return place.hop > 0.02 ? 1 : 0;
  if (place.state === "walk" || place.state === "run" || place.state === "stalk" || place.state === "sniff" || place.state === "carry")
    return Math.floor(place.walked * (place.state === "run" || place.state === "carry" ? 5 : 8));
  return Math.floor(time * (POSE_RATE[place.state] ?? 0));
}
const SEATS = new Set(["sofa", "chair", "bench", "garden_sofa"]);
const SETTLE = 1.5;
// Radar points of a still person wander: within STAY metres of where they stopped they count as still.
const STAY = 0.45;
// A seat or bed this close (m) to a still person is the one they use.
const REACH = 0.7;

interface Drop {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  life: number;
  splash: boolean;
}

// Night with every light off: dim and blue, but the house still reads.
const NIGHT: [number, number, number] = [0.34, 0.36, 0.52];
const DUSK: [number, number, number] = [1, 0.8, 0.62];
const FRAME_MS = 33;
const GRAVITY = 9.8;
// Walkers keep up with the tracking at up to this speed (m/s); farther than JUMP metres they jump.
const WALK = 2.2;
const JUMP = 3;
const WET_CELL = 0.5;
// Ground a robot has worked: cells of a picture cell size, as wide as it cuts or sweeps.
const WORK_CELL = 4 / PPM;
const WORK_HALF = { mower: 0.11, vacuum: 0.17 };

const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

function dayColour(day: number): [number, number, number] {
  if (day < 0.6) return [0, 1, 2].map((i) => mix(NIGHT[i], DUSK[i], day / 0.6)) as [number, number, number];
  return [0, 1, 2].map((i) => mix(DUSK[i], 1, (day - 0.6) / 0.4)) as [number, number, number];
}

function watering(state: string | undefined): boolean {
  return state === "open" || state === "opening" || state === "on";
}

class LevelPicture {
  readonly scene: Scene;
  readonly frame: HTMLCanvasElement;
  private readonly fc: CanvasRenderingContext2D;
  private readonly light: HTMLCanvasElement;
  private readonly lc: CanvasRenderingContext2D;
  private readonly lightImage: ImageData;
  private readonly sun: HTMLCanvasElement;
  private readonly sc: CanvasRenderingContext2D;
  private readonly patch: HTMLCanvasElement;
  private readonly pc: CanvasRenderingContext2D;
  private lightKey = "";
  private sunKey = "";
  private readonly lightRooms: number[];
  private readonly walkers = new Map<string, Walker>();
  private dressed = 0;
  private readonly drops: Drop[] = [];
  // How far each door, gate and wicket stands open as drawn, moving towards what Home Assistant says.
  private readonly swing = new Map<string, number>();
  // The weather: drops and flakes in the air, how much snow lies, a lightning flash fading, the ground outside.
  private sky: Sky = skyOf(undefined);
  private readonly flakes: Flake[] = [];
  private snowCover = 0;
  private flash = 0;
  private readonly outdoors: HTMLCanvasElement;
  private readonly outdoorCells: number;
  private readonly sweep = new Map<string, { angle: number; dir: number; tick: number }>();
  private readonly wet: Float32Array;
  private readonly wetColumns: number;
  // What each robot has worked in its run, drawn into its own picture as the track grows; a new run starts it again.
  private readonly worked = new Map<string, { last?: Point; canvas: HTMLCanvasElement; c: CanvasRenderingContext2D }>();
  // Pets: their life on this level, how far each steps aside from people, when it was last stroked, and
  // where it was drawn last, for taps.
  private readonly pets: PetLife[];
  // Ways for people round the walls, when the tracking moves them past one.
  private readonly ways: Grid;
  // Where the character of the walking game may stand and people walk round furniture, made when first asked; where
  // the pet following the character is.
  private playCells?: Grid;
  private readonly followers = new Map<string, { x: number; y: number; walked: number }>();
  private readonly aside = new Map<string, Point>();
  // When and where each pet was last touched; it plays there for PLAY seconds.
  private readonly touched = new Map<string, { time: number; at: Point; on?: Furniture }>();
  private drawnPets: { id: string; at: Point; on?: Furniture }[] = [];

  constructor(level: Level, plan: Plan | undefined) {
    this.scene = new Scene(level, plan);
    const s = this.scene;
    [this.frame, this.fc] = canvas(s.width, s.height);
    [this.light, this.lc] = canvas(s.lightWidth, s.lightHeight);
    this.lightImage = this.lc.createImageData(s.lightWidth, s.lightHeight);
    [this.sun, this.sc] = canvas(s.lightWidth, s.lightHeight);
    [this.patch, this.pc] = canvas(s.lightWidth, s.lightHeight);
    this.lightRooms = s.lights.map((l) => {
      const room = s.roomAt(deviceCentre(l.device), false);
      return room ? s.rooms.indexOf(room) : -1;
    });
    // The ground under the open sky: cells of the light outside every room and wall.
    const [outdoors, oc] = canvas(s.lightWidth, s.lightHeight);
    this.outdoors = outdoors;
    let open = 0;
    for (let k = 0; k < s.region.length; k++)
      if (s.region[k] === -1) {
        rect(oc, k % s.lightWidth, Math.floor(k / s.lightWidth), 1, 1, "#fff");
        open++;
      }
    this.outdoorCells = open;
    this.wetColumns = Math.ceil(s.width / PPM / WET_CELL);
    this.wet = new Float32Array(this.wetColumns * Math.ceil(s.height / PPM / WET_CELL));
    const first = plan?.levels[0]?.id;
    this.ways = new Grid(this.scene, () => true);
    this.pets = (plan?.pets ?? []).filter((pet) => (pet.level ?? first) === level.id && pet.species in PET_COATS).map((pet) => new PetLife(this.scene, pet));
  }

  // ---------------------------------------------------------------- states
  private lightLevel(hass: HomeAssistant, entity: string): number {
    const state = hass.states[entity];
    if (!state || state.state !== "on") return 0;
    const brightness = state.attributes.brightness;
    return typeof brightness === "number" ? Math.max(0.35, brightness / 255) : 1;
  }

  private lightColour(hass: HomeAssistant, entity: string, fallback: [number, number, number]): [number, number, number] {
    const rgb = hass.states[entity]?.attributes.rgb_color;
    return Array.isArray(rgb) && rgb.length === 3 ? (rgb as [number, number, number]) : fallback;
  }

  /** How far the shutter of a window is down, 0 open to 1 closed. */
  private shutter(hass: HomeAssistant, w: Piece): number {
    const cover = w.opening?.cover;
    if (!cover) return 0;
    const state = hass.states[cover];
    if (!state) return 0;
    const position = state.attributes.current_position;
    if (typeof position === "number") return 1 - clamp(position, 0, 100) / 100;
    return state.state === "closed" ? 1 : 0;
  }

  /** How far an opening stands open as drawn now. */
  private opened(o: Opening): number {
    return this.swing.get(o.id) ?? 0;
  }

  /** Doors, gates and wickets move towards how open Home Assistant says they are. */
  private moveOpenings(hass: HomeAssistant, dt: number): void {
    const openings = [...this.scene.doors.map((d) => d.opening), ...this.scene.fences.flatMap((f) => f.gaps.map((g) => g.opening))];
    for (const o of openings) {
      if (!o) continue;
      const { open, speed } = openingTarget(hass, o);
      const now = this.swing.get(o.id);
      // A door or gate first seen stands as it is, without moving into place.
      if (now === undefined) this.swing.set(o.id, open);
      else this.swing.set(o.id, now + clamp(open - now, -speed * dt, speed * dt));
    }
  }

  /** Is the point of the picture (in pixels) on the ground under the open sky. */
  private outside(x: number, y: number): boolean {
    const s = this.scene;
    const i = Math.floor(x / LIGHT_CELL);
    const j = Math.floor(y / LIGHT_CELL);
    return i >= 0 && j >= 0 && i < s.lightWidth && j < s.lightHeight && s.region[j * s.lightWidth + i] === -1;
  }

  /**
   * The weather of the plan's weather entity, or the first one: rain and snow fall on the ground outside, rain
   * wets it and snow settles on it, a storm flashes now and then.
   */
  private moveWeather(hass: HomeAssistant, plan: Plan | undefined, dt: number): void {
    const s = this.scene;
    const entity = plan?.weather ?? Object.keys(hass.states).find((id) => id.startsWith("weather."));
    this.sky = skyOf(entity ? hass.states[entity]?.state : undefined);
    const sky = this.sky;
    if (sky.lightning && Math.random() < dt / 9) this.flash = 1;
    this.flash = Math.max(0, this.flash - dt * 4);
    this.snowCover = clamp(this.snowCover + (sky.snow ? sky.snow * dt * 0.01 : -dt * 0.003), 0, 1);
    if (sky.rain)
      for (let k = 0; k < this.wet.length; k++) {
        const x = ((k % this.wetColumns) + 0.5) * WET_CELL * PPM;
        const y = (Math.floor(k / this.wetColumns) + 0.5) * WET_CELL * PPM;
        if (this.outside(x, y)) this.wet[k] = Math.min(1, this.wet[k] + dt * 0.02 * sky.rain);
      }
    // As many in the air as the weather and the size of the ground outside call for.
    const wanted = Math.min(700, Math.round(((sky.rain + sky.snow) * this.outdoorCells) / 6));
    for (let tries = 0; this.flakes.length < wanted && tries < 40; tries++) {
      const x = Math.random() * s.width;
      const land = Math.random() * s.height;
      if (!this.outside(x, land)) continue;
      const snow = Math.random() < sky.snow / (sky.snow + sky.rain);
      this.flakes.push({ x, y: land - 20 - Math.random() * 60, land, snow, splash: 0, phase: Math.random() * 6 });
    }
    if (this.flakes.length > wanted) this.flakes.length = wanted;
    for (let i = this.flakes.length - 1; i >= 0; i--) {
      const f = this.flakes[i];
      if (f.splash > 0) {
        f.splash -= dt;
        if (f.splash <= 0) this.flakes.splice(i, 1);
        continue;
      }
      f.y += (f.snow ? 18 : 260) * dt;
      if (f.snow) f.x += Math.sin(f.phase + f.y / 9) * 0.4;
      else f.x -= 40 * dt;
      if (f.y >= f.land) {
        if (f.snow) this.flakes.splice(i, 1);
        else f.splash = 0.08;
      }
    }
  }

  /** Puddles on paving while it is wet: a few flat patches of sky at the same places each time. */
  private drawPuddles(c: CanvasRenderingContext2D): void {
    const s = this.scene;
    const wet = this.wet.reduce((sum, v) => sum + v, 0) / Math.max(1, this.wet.length);
    if (wet < 0.05) return;
    for (const g of s.garden) {
      if (g.item.type !== "paving") continue;
      const [bx, by, bw, bh] = s.pxBox(g.box);
      const count = Math.floor((bw * bh) / 900);
      for (let k = 0; k < count; k++) {
        const x = bx + Math.floor(hash(k, bw, 31) * (bw - 12));
        const y = by + Math.floor(hash(bh, k, 37) * (bh - 6));
        const w = 6 + Math.floor(hash(k, k, 41) * 8);
        const alpha = Math.min(0.4, wet * 0.8).toFixed(2);
        rect(c, x + 1, y, w - 2, 1, `rgba(120,150,180,${alpha})`);
        rect(c, x, y + 1, w, 2, `rgba(120,150,180,${alpha})`);
        rect(c, x + 1, y + 3, w - 2, 1, `rgba(120,150,180,${alpha})`);
        rect(c, x + 2, y + 1, 2, 1, `rgba(220,235,250,${alpha})`);
      }
    }
  }

  private drawFlakes(c: CanvasRenderingContext2D): void {
    for (const f of this.flakes) {
      const x = Math.round(f.x);
      const y = Math.round(f.y);
      if (f.snow) rect(c, x, y, 1, 1, "rgba(255,255,255,.9)");
      else if (f.splash > 0) {
        rect(c, x - 1, Math.round(f.land), 1, 1, "rgba(200,220,255,.6)");
        rect(c, x + 1, Math.round(f.land), 1, 1, "rgba(200,220,255,.6)");
      } else rect(c, x, y, 1, 3, "rgba(190,210,240,.55)");
    }
  }

  private sunPlace(hass: HomeAssistant): { azimuth: number; elevation: number; day: number } {
    const sun = hass.states["sun.sun"];
    const elevation = Number(sun?.attributes.elevation);
    const azimuth = Number(sun?.attributes.azimuth);
    if (Number.isFinite(elevation) && Number.isFinite(azimuth)) return { azimuth, elevation, day: clamp((elevation + 5) / 15, 0, 1) };
    const up = sun?.state !== "below_horizon";
    return { azimuth: 180, elevation: up ? 30 : -10, day: up ? 1 : 0 };
  }

  // ---------------------------------------------------------------- moving things
  update(dt: number, source: PixelSource): void {
    const s = this.scene;
    const hass = source.hass();
    this.moveOpenings(hass, dt);
    this.moveWeather(hass, source.plan(), dt);
    const seen = new Set<string>();
    for (const p of source.people(s.level)) {
      if (p.status === "unconfirmed") continue;
      const id = String(p.id);
      seen.add(id);
      let w = this.walkers.get(id);
      if (!w) {
        w = { x: p.x, y: p.y, facing: "down", moving: false, outfit: OUTFITS[this.dressed++ % OUTFITS.length], anchor: [p.x, p.y], still: 0, route: [], goal: [p.x, p.y] };
        this.walkers.set(id, w);
      }
      const target = this.standAt([p.x, p.y]);
      const d = Math.hypot(target[0] - w.x, target[1] - w.y);
      if (d > JUMP) {
        w.x = target[0];
        w.y = target[1];
        w.route = [];
      } else if (d > 0.04) {
        // A new place: straight to it, or round the walls between, through a door.
        if (!w.route.length || Math.hypot(w.goal[0] - target[0], w.goal[1] - target[1]) > 0.3) {
          const way = this.wayTo([w.x, w.y], target);
          if (way.length < 2) [w.x, w.y] = target;
          w.route = way.slice(1);
        } else w.route[w.route.length - 1] = target;
        w.goal = target;
        let budget = Math.max(0.6, Math.min(WALK, d * 3)) * dt;
        while (budget > 0 && w.route.length) {
          const [tx, ty] = w.route[0];
          const dx = tx - w.x;
          const dy = ty - w.y;
          const left = Math.hypot(dx, dy);
          if (left > 0.01) w.facing = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : dy > 0 ? "down" : "up";
          if (left <= budget) {
            [w.x, w.y] = [tx, ty];
            budget -= left;
            w.route.shift();
          } else {
            w.x += (dx / left) * budget;
            w.y += (dy / left) * budget;
            budget = 0;
          }
        }
      }
      w.moving = d > 0.06;
      if (Math.hypot(p.x - w.anchor[0], p.y - w.anchor[1]) > STAY) {
        w.anchor = [p.x, p.y];
        w.still = 0;
      } else w.still += dt;
    }
    for (const id of [...this.walkers.keys()]) if (!seen.has(id)) this.walkers.delete(id);

    for (const device of s.level.devices ?? []) {
      if (device.kind !== "sprinkler" || !device.entity) continue;
      if (!watering(hass.states[device.entity]?.state)) continue;
      const heading = device.heading ?? 0;
      const arc = device.arc ?? 360;
      const sweep = this.sweep.get(device.id) ?? { angle: heading, dir: 1, tick: 0 };
      this.sweep.set(device.id, sweep);
      const rotor = (device.nozzle ?? "rotor") === "rotor";
      sweep.tick -= dt;
      if (sweep.tick <= 0) {
        sweep.tick = 0.12;
        sweep.angle += 7 * sweep.dir;
        if (arc >= 359) sweep.angle %= 360;
        else if (sweep.angle > heading + arc || sweep.angle < heading) {
          sweep.dir *= -1;
          sweep.angle = clamp(sweep.angle, heading, heading + arc);
        }
      }
      for (let i = 0; i < (rotor ? 4 : 10); i++) {
        const reach = (device.radius ?? 4) * (0.2 + Math.random() * 0.8);
        const vz = 3.5 + Math.random();
        const flight = (2 * vz) / GRAVITY;
        const bearing = ((rotor ? sweep.angle + (Math.random() - 0.5) * 4 : heading + Math.random() * arc) * Math.PI) / 180;
        this.drops.push({ x: device.at[0], y: device.at[1], z: 0.2, vx: (Math.sin(bearing) * reach) / flight, vy: (-Math.cos(bearing) * reach) / flight, vz, life: 2, splash: false });
      }
    }
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      d.life -= dt;
      if (d.splash) {
        if (d.life <= 0) this.drops.splice(i, 1);
        continue;
      }
      d.x += d.vx * dt;
      d.y += d.vy * dt;
      d.vz -= GRAVITY * dt;
      d.z += d.vz * dt;
      if (d.z <= 0) {
        Object.assign(d, { splash: true, z: 0, life: 0.15 });
        const i2 = Math.floor((d.x - s.x0) / WET_CELL);
        const j2 = Math.floor((d.y - s.y0) / WET_CELL);
        const k = j2 * this.wetColumns + i2;
        if (i2 >= 0 && i2 < this.wetColumns && k >= 0 && k < this.wet.length) this.wet[k] = Math.min(1, this.wet[k] + 0.008);
      }
    }
    for (let k = 0; k < this.wet.length; k++) if (this.wet[k] > 0) this.wet[k] = Math.max(0, this.wet[k] - dt * 0.004);
  }

  // ---------------------------------------------------------------- drawing
  draw(time: number, source: PixelSource): void {
    const s = this.scene;
    const c = this.fc;
    const hass = source.hass();
    c.globalCompositeOperation = "source-over";
    c.imageSmoothingEnabled = false;
    c.clearRect(0, 0, s.width, s.height);
    c.drawImage(s.base, 0, 0);
    // Rugs lie flat on the floor, under everything standing on it.
    for (const f of s.furniture) if (f.kind === "rug") s.drawRug(c, f);
    this.drawWorked(c, source);
    const cell = Math.ceil(WET_CELL * PPM);
    for (let k = 0; k < this.wet.length; k++) {
      if (this.wet[k] < 0.02) continue;
      const [x, y] = s.px([s.x0 + (k % this.wetColumns) * WET_CELL, s.y0 + Math.floor(k / this.wetColumns) * WET_CELL]);
      rect(c, x, y, cell, cell, `rgba(20,30,38,${(this.wet[k] * 0.35).toFixed(3)})`);
    }

    this.drawPuddles(c);
    if (this.snowCover > 0.01) {
      c.globalAlpha = this.snowCover * 0.75;
      c.drawImage(this.outdoors, 0, 0, s.lightWidth * LIGHT_CELL, s.lightHeight * LIGHT_CELL);
      c.globalAlpha = 1;
    }

    // Everything stands where the plan puts its foot. Walls take part in the order: a thing in front of a
    // wall covers its face, one behind it is hidden by it.
    const items: { y: number; draw: () => void }[] = [];
    for (const part of s.wallParts) items.push({ y: part.order, draw: () => c.drawImage(s.walls, part.x, part.y, part.w, part.h, part.x, part.y, part.w, part.h) });
    for (const d of s.doors) {
      const open = d.opening ? this.opened(d.opening) : 1;
      items.push({ y: s.px([0, d.box[3]])[1] + 0.1, draw: () => this.drawDoor(c, d, open) });
    }
    for (const f of s.furniture) if (f.kind !== "rug") items.push({ y: s.px([0, f.box[3]])[1] + 0.5, draw: () => s.drawFurniture(c, f) });
    for (const g of s.garden) if (STANDING_GARDEN.has(g.item.type)) items.push({ y: s.px([0, g.box[3]])[1] + 0.5, draw: () => s.drawGardenObject(c, g) });
    for (const part of s.fenceParts) items.push({ y: part.order, draw: () => c.drawImage(s.fenceArt, part.x, part.y, part.w, part.h, part.x, part.y, part.w, part.h) });
    for (const fence of s.fences)
      for (const gap of fence.gaps) {
        const open = this.opened(gap.opening);
        if (open > 0.99) continue;
        const foot = Math.max(s.px([fence.a[0] + fence.u[0] * gap.s, fence.a[1] + fence.u[1] * gap.s])[1], s.px([fence.a[0] + fence.u[0] * gap.e, fence.a[1] + fence.u[1] * gap.e])[1]);
        items.push({ y: foot + 0.3, draw: () => s.drawGate(c, fence, gap, open) });
      }
    // A car home stands like the rest; one away leaves the outline of its place on the ground, under everything.
    for (const g of s.garden) {
      if (g.item.type !== "car") continue;
      if (carPresent(g.item, hass.states)) items.push({ y: s.px([0, g.box[3]])[1] + 0.5, draw: () => s.drawCar(c, g) });
      else items.push({ y: -Infinity, draw: () => s.drawParking(c, g) });
    }
    for (const device of s.level.devices ?? []) {
      if (device.kind !== "vacuum" && device.kind !== "mower") continue;
      const place = source.robot(device.id);
      const state = device.entity ? hass.states[device.entity]?.state : undefined;
      const at = place?.at ?? (device.kind === "vacuum" ? place?.dock : undefined);
      if (!at) continue;
      const [x, y] = s.px(at);
      items.push({ y: y + 0.5, draw: () => (device.kind === "vacuum" ? vacuum(c, x, y, state, time) : mower(c, x, y, place?.heading, state)) });
    }
    // Standing people and pets in the house drawn once more over everything, see-through: unchanged where seen,
    // a ghost behind furniture. Outdoors a hedge or shed hides them.
    const ghosts: (() => void)[] = [];
    for (const w of this.walkers.values()) {
      const [x, y] = s.px([w.x, w.y]);
      const near = w.still > SETTLE ? s.restNear(w.anchor, REACH, (kind) => SEATS.has(kind) || kind === "bed") : undefined;
      if (near) {
        // On a seat or in a bed the person is drawn after it, at its height, on its nearest spot.
        const { furniture, at } = near;
        const [sx, sy] = s.px(at);
        const top = s.px([0, furniture.box[3]])[1] + 0.6;
        const seat = Math.round((furniture.kind === "bed" ? 0.18 : 0.22) * PPM);
        items.push({ y: top, draw: () => (furniture.kind === "bed" ? lying(c, sx, sy - seat, w.outfit) : sitting(c, sx, sy - seat + 4, w.facing, w.outfit)) });
      } else {
        const step = w.moving ? Math.floor(time * 8) : 0;
        items.push({ y: y + 0.5, draw: () => person(c, x, y, w.facing, step, w.outfit) });
        if (s.insideHouse([w.x, w.y])) ghosts.push(() => person(c, x, y, w.facing, step, w.outfit, true));
      }
    }
    // The character of the walking game: a person like the ones the radars see, with a marker over the head; on a
    // seat or in a bed it sits or lies like them, on a trampoline it jumps.
    const player = source.player?.(s.level);
    let head: Point | undefined;
    if (player?.seat) {
      const { furniture, at } = player.seat;
      const [sx, sy] = s.px(at);
      const top = s.px([0, furniture.box[3]])[1] + 0.6;
      const lift = Math.round((furniture.kind === "bed" ? 0.18 : 0.22) * PPM);
      const lies = furniture.kind === "bed";
      items.push({ y: top, draw: () => (lies ? lying(c, sx, sy - lift, player.outfit) : sitting(c, sx, sy - lift + 4, player.facing, player.outfit)) });
      head = [sx, sy - lift - (lies ? 22 : 34)];
    } else if (player) {
      const [x, y] = s.px([player.x, player.y]);
      const step = player.moving ? Math.floor(player.walked * 6) : 0;
      const tramp = s.garden.find(
        (g) => g.item.type === "trampoline" && g.item.center && Math.hypot(player.x - g.item.center[0], player.y - g.item.center[1]) < (g.item.diameter ?? 3) / 2 - 0.15,
      );
      const hop = tramp ? Math.round(Math.abs(Math.sin(time * 5.5)) * 16) : 0;
      // On the trampoline it is drawn after it, as it jumps on top of it.
      items.push({
        y: tramp ? s.px([0, tramp.box[3]])[1] + 1 : y + 0.5,
        draw: () => {
          if (hop) rect(c, x - 5, y - 1, 11, 2, "rgba(0,0,0,.25)");
          person(c, x, y - hop, player.facing, hop ? 0 : step, player.outfit);
        },
      });
      if (s.insideHouse([player.x, player.y])) ghosts.push(() => person(c, x, y - hop, player.facing, step, player.outfit, true));
      head = [x, y - hop - 42];
    }
    // Stars of the game still to pick up.
    for (const [i, at] of (source.stars?.(s.level) ?? []).entries()) {
      const [x, y] = s.px(at);
      items.push({ y: y + 0.4, draw: () => star(c, x, y, time, i) });
    }
    const overhead = this.addPets(items, ghosts, time, player);
    if (head) {
      const [hx, hy] = head;
      overhead.push(() => marker(c, hx, hy, time));
    }
    items.sort((a, b) => a.y - b.y);
    for (const item of items) item.draw();
    c.globalAlpha = 0.4;
    for (const ghost of ghosts) ghost();
    c.globalAlpha = 1;
    for (const g of s.garden) if (g.item.type === "shelter") s.drawGardenObject(c, g);
    for (const draw of overhead) draw();
    for (const d of this.drops) {
      const [x, y] = s.px([d.x, d.y]);
      drop(c, x, y, Math.round(d.z * PPM * 0.6), d.splash);
    }

    this.drawFlakes(c);

    // Clouds dim the day; fog lies over the ground outside, lightning lights everything for a moment.
    const sun = this.sunPlace(hass);
    this.drawLight(hass, sun.day, time);
    if (this.sky.light < 1) {
      const l = this.sky.light;
      c.globalCompositeOperation = "multiply";
      rect(c, 0, 0, s.width, s.height, `rgb(${Math.round(255 * l)},${Math.round(255 * l)},${Math.round(Math.min(255, 268 * l))})`);
      c.globalCompositeOperation = "source-over";
    }
    if (this.sky.fog) {
      c.globalAlpha = 0.3 * this.sky.fog;
      c.globalCompositeOperation = "screen";
      c.drawImage(this.outdoors, 0, 0, s.lightWidth * LIGHT_CELL, s.lightHeight * LIGHT_CELL);
      c.globalCompositeOperation = "source-over";
      c.globalAlpha = 1;
    }
    if (this.flash > 0) rect(c, 0, 0, s.width, s.height, `rgba(235,240,255,${(this.flash * 0.45).toFixed(3)})`);
    if (!s.opaque) {
      c.globalCompositeOperation = "destination-in";
      c.drawImage(s.outline, 0, 0);
      c.globalCompositeOperation = "source-over";
    }
    if (this.sky.sun > 0) this.drawSun(hass, sun, source.plan()?.north ?? 0, this.sky.sun);
    this.drawGlass(hass, sun.day, time);
  }

  /**
   * Pets at the place their life gives for now, a little aside from people near them. Returns what is
   * drawn over everything: the z of a sleeping pet and the hearts of a stroked one.
   */
  private addPets(items: { y: number; draw: () => void }[], ghosts: (() => void)[], time: number, player?: Player): (() => void)[] {
    const s = this.scene;
    const c = this.fc;
    const now = Date.now() / 1000;
    const overhead: (() => void)[] = [];
    this.drawnPets = [];
    // Hungry tigers hunting now, by tiger, and the pets they catch, by pet; a pet is caught by one tiger at a time.
    const hunting = new Map<string, Hunt>();
    const caught = new Map<string, Hunt>();
    const hunters = new Map<string, PetLife>();
    for (const life of this.pets) {
      if (life.pet.species !== "tiger" || !life.pet.hungry) continue;
      const found = hunt(life, this.pets.filter((other) => other.pet.species !== "tiger"), now);
      if (!found || caught.has(found.victim)) continue;
      hunting.set(life.pet.id, found);
      caught.set(found.victim, found);
      hunters.set(found.victim, life);
    }
    for (const life of this.pets) {
      const pet = life.pet;
      const prey = caught.get(pet.id);
      if (prey?.gone) {
        // Eaten: a fight in a cloud of dust with the tiger, then a bone where it was.
        const [bx, by] = s.px(prey.spot);
        if (prey.dust === undefined) items.push({ y: by + 0.2, draw: () => bone(c, bx, by) });
        else {
          const progress = prey.dust;
          const tiger = hunters.get(pet.id)!.pet;
          const hunter = coatColour("tiger", tiger.coat);
          const victim = coatColour(pet.species, pet.coat);
          if (progress > 0.8) items.push({ y: by + 0.2, draw: () => bone(c, bx, by) });
          overhead.push(() => fightCloud(c, bx, by, progress, time, hunter, victim));
        }
        continue;
      }
      const touch = this.touched.get(pet.id);
      const since = touch ? now - touch.time : 99;
      // A hungry tiger does not roll over to be stroked: it roars.
      const fierce = pet.species === "tiger" && !!pet.hungry;
      let place = touch && since < PLAY && !fierce ? life.playHere(touch.at, since, touch.on) : life.placeAt(now);
      // A pet the character of the game stroked follows it a while, a little behind.
      if (player && player.friend === pet.id && Date.now() < (player.friendUntil ?? 0)) place = this.follow(pet.id, place, player);
      else this.followers.delete(pet.id);
      if (prey?.prey) place = prey.prey;
      const chasing = hunting.get(pet.id);
      // A tiger in the middle of its fight is inside the cloud.
      if (chasing?.dust !== undefined) continue;
      const chase = chasing?.tiger;
      if (chase) place = chase;
      if (fierce && since < 3 && !chase) place = { ...place, state: "yawn" };
      // Step aside from the nearest person closer than a metre, less when the pet lies on furniture.
      let push: Point = [0, 0];
      for (const w of [...this.walkers.values(), ...(player ? [player] : [])]) {
        const dx = place.x - w.x;
        const dy = place.y - w.y;
        const d = Math.hypot(dx, dy);
        const reach = place.on ? 0.4 : 0.9;
        if (d < reach && d > 0.01) push = [push[0] + (dx / d) * (reach - d), push[1] + (dy / d) * (reach - d)];
      }
      const old = this.aside.get(pet.id) ?? [0, 0];
      const aside: Point = [old[0] + (push[0] - old[0]) * 0.1, old[1] + (push[1] - old[1]) * 0.1];
      this.aside.set(pet.id, aside);
      const at: Point = [place.x + aside[0], place.y + aside[1]];
      this.drawnPets.push({ id: pet.id, at, on: place.on });
      const fond = since < 2.5 && !fierce;
      const pose = place.state;
      const species = pet.species;
      const coat = pet.coat ?? PET_COATS[species]?.[0] ?? "ginger";
      const tall = animalHeight(species);
      const hop = Math.round(place.hop * PPM) + (fond && pose !== "roll" ? Math.round(Math.max(0, Math.sin(since * 9)) * 3) : 0);
      const seat = place.on ? Math.round((place.on.kind === "bed" ? 0.18 : 0.22) * PPM) : 0;
      const [x, y] = s.px(at);
      const top = place.on ? s.px([0, place.on.box[3]])[1] + 0.7 : y + 0.4;
      const frame = petFrame(place, time);
      // A soft shadow under the feet, smaller while the pet is up in the air.
      const width = species === "tiger" ? 20 : species === "dog" ? 14 : 10;
      const draw = (ghost = false) => {
        if (!ghost) {
          const w = Math.max(4, width - Math.round(hop / 2));
          rect(c, x - Math.round(w / 2), y - seat - 1, w, 2, "rgba(0,0,0,.2)");
        }
        animal(c, species, coat, x, y - seat - hop, pose, place.facing, frame);
      };
      items.push({ y: top, draw: () => draw() });
      if (s.insideHouse(at)) ghosts.push(() => draw(true));
      const plaything = place.toy;
      if (plaything) {
        const [tx, ty] = s.px(plaything.at);
        // A toy on the furniture the pet lies on is lifted to its top and drawn with the pet, in front of it or
        // behind as it lies; on the floor it stands where it lies.
        const lift = place.on ? seat : 0;
        const key = place.on ? top + (ty >= y ? 0.02 : -0.02) : ty + 0.3;
        items.push({ y: key, draw: () => toy(c, plaything.kind, tx, ty - lift, Math.round(plaything.height * PPM), time, plaything.fade ?? 1) });
      }
      const [ox, oy] = [x, y - seat];
      if (pose === "sleep")
        overhead.push(() => {
          for (let k = 0; k < 2; k++) {
            const phase = (time * 0.45 + k * 0.5) % 1;
            snore(c, ox + 3 + Math.round(phase * 4), oy - tall - Math.round(phase * 10), 1 - phase);
          }
        });
      if (fond)
        overhead.push(() => {
          for (let k = 0; k < 3; k++) {
            const rise = since * 8 + k * 4;
            heart(c, ox - 5 + k * 5, oy - tall - 4 - Math.round(rise), Math.max(0, 1 - since / 2.5));
          }
        });
    }
    return overhead;
  }

  /** A pet following the character of the game: it walks to a spot behind it, runs when far, sits when there. */
  private follow(id: string, place: PetPlace, player: Player): PetPlace {
    const was = this.followers.get(id) ?? { x: place.x, y: place.y, walked: 0 };
    const back: Record<string, [number, number]> = { left: [1, 0], right: [-1, 0], up: [0, 1], down: [0, -1] };
    const [bx, by] = back[player.facing] ?? [0, 0];
    const target: Point = [player.x + bx * 0.7, player.y + by * 0.7];
    const dx = target[0] - was.x;
    const dy = target[1] - was.y;
    const d = Math.hypot(dx, dy);
    const step = Math.min(d, d > 1.5 ? 0.09 : 0.06);
    const now = { x: was.x + (d ? (dx / d) * step : 0), y: was.y + (d ? (dy / d) * step : 0), walked: was.walked + step };
    this.followers.set(id, now);
    const facing = Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "left" : "right") : dy < 0 ? "up" : "down";
    if (d < 0.2) return { x: now.x, y: now.y, state: "sit", facing: player.x < now.x ? "left" : "right", walked: 0, hop: 0 };
    return { x: now.x, y: now.y, state: d > 1.5 ? "run" : "walk", facing, walked: now.walked, hop: 0 };
  }

  /**
   * Where a person the radars put on a point is drawn: there, or when it falls in furniture or at its edge, the
   * nearest point within 0.8 m clear of it on the same side of the walls. A seat or bed still takes them by the radar
   * point, as the anchor stays on it.
   */
  private standAt(p: Point): Point {
    const s = this.scene;
    if (!furnitureNear(s, p, BODY)) return p;
    for (let r = 0.1; r <= 0.8; r += 0.1)
      for (let k = 0; k < 16; k++) {
        const a = (k / 16) * Math.PI * 2;
        const q: Point = [p[0] + Math.cos(a) * r, p[1] + Math.sin(a) * r];
        if (!furnitureNear(s, q, BODY) && !s.wallBetween(p, q)) return q;
      }
    return p;
  }

  /**
   * The way of a person to a new place: straight when no wall or furniture is between, round furniture and walls
   * when there is a way, otherwise round the walls only (outside the drawn floors and lawns).
   */
  private wayTo(from: Point, to: Point): Point[] {
    const s = this.scene;
    if (!s.wallBetween(from, to) && !furnitureBetween(s, from, to)) return [from, to];
    const round = (this.playCells ??= playGrid(s)).path(from, to);
    if (round.length >= 2) return round;
    return s.wallBetween(from, to) ? this.ways.path(from, to) : [from, to];
  }

  /** Whether the character of the walking game may stand on a point of the plan. */
  canStand(p: Point): boolean {
    this.playCells ??= playGrid(this.scene);
    return this.playCells.isOpen(p) && !furnitureNear(this.scene, p, BODY);
  }

  /** The seat or bed nearest to a point within reach metres, for the character of the game to sit or lie on. */
  seatNear(p: Point, reach: number): { furniture: Furniture; at: Point } | undefined {
    return this.scene.restNear(p, reach, (kind) => SEATS.has(kind) || kind === "bed");
  }

  /** The pet drawn nearest to a point of the plan, within reach metres; it is stroked. */
  stroke(p: Point, reach: number): boolean {
    return this.strokePet(p, reach) !== undefined;
  }

  /** Strokes the pet drawn nearest to a point within reach metres; its id, or none. */
  strokePet(p: Point, reach: number): string | undefined {
    let best: { id: string; d: number } | undefined;
    for (const pet of this.drawnPets) {
      // Its body stands a little above its feet.
      const d = Math.hypot(pet.at[0] - p[0], pet.at[1] - 0.2 - p[1]);
      if (d < reach && (!best || d < best.d)) best = { id: pet.id, d };
    }
    if (best) {
      const drawn = this.drawnPets.find((pet) => pet.id === best!.id)!;
      this.touched.set(best.id, { time: Date.now() / 1000, at: drawn.at, on: drawn.on });
    }
    return best?.id;
  }

  /**
   * A door, gate or garage door open by the share given. A door's leaf swings: seen narrower as it turns
   * out of its wall. A gate or garage door slides back to the start of its opening.
   */
  private drawDoor(c: CanvasRenderingContext2D, d: Piece, open: number): void {
    const [x, y, w, h] = this.scene.pxBox(d.box);
    const face = Math.round(FACE * PPM);
    // Doors stand up from the foot of their wall like the wall.
    const top = y - face;
    if (d.opening?.type === "gate") {
      const shut = 1 - open;
      if (d.horizontal) {
        const width = Math.round((w - 4) * shut);
        if (width <= 0) return;
        rect(c, x + 2, top, width, h + face - 1, "#5d636b");
        for (let k = x + 4; k < x + 2 + width; k += 3) rect(c, k, top + 1, 1, h + face - 3, "#474c53");
        rect(c, x + 2, top, width, 1, "#7d848c");
      } else {
        const length = Math.round((h - 4) * shut);
        if (length > 0) rect(c, x + Math.round(w / 2) - 2, top + 2, 4, length, "#5d636b");
      }
      return;
    }
    const turn = (open * Math.PI) / 2;
    if (d.horizontal) {
      const width = Math.max(2, Math.round((w - 4) * Math.cos(turn)));
      if (open > 0.98) rect(c, x + 2, top, 2, h + face - 1, "#8b5a2b");
      else {
        rect(c, x + 2, top, width, h + face - 1, d.exterior ? "#6e3f22" : "#8b5a2b");
        rect(c, x + 2, top, width, 1, "#a8703a");
        if (width > 8) rect(c, x + 4, top + 3, width - 4, Math.max(2, face / 2 - 3), d.exterior ? "#5c331b" : "#784b23");
        if (width > 6) rect(c, x + 2 + width - 4, top + face / 2 + 2, 1, 2, "#e0c35f");
      }
      return;
    }
    const length = Math.round((h - 4) * Math.cos(turn));
    const reach = Math.round(w * Math.sin(turn));
    if (length > 1) {
      rect(c, x + Math.round(w / 2) - 2, top + 2, 4, length, "#8b5a2b");
      rect(c, x + Math.round(w / 2) - 2, top + 2, 1, length, "#a8703a");
    }
    if (reach > 1) rect(c, x, top + 2, reach, 2, "#8b5a2b");
  }

  /**
   * The run of every mower and vacuum on the ground: a mower leaves lighter stripes one way and darker
   * the way back on the lawn, a vacuum a slightly fresher floor in the house. Only new steps are added.
   */
  private drawWorked(c: CanvasRenderingContext2D, source: PixelSource): void {
    const s = this.scene;
    for (const device of s.level.devices ?? []) {
      if (device.kind !== "mower" && device.kind !== "vacuum") continue;
      const track = source.track(device.id);
      // New steps follow the last one drawn; a track without it is a new run (the old one may be cut short at its start).
      let work = this.worked.get(device.id);
      let from = work?.last ? track.lastIndexOf(work.last) : -1;
      if (!work || (work.last && from < 0)) {
        const [picture, pc] = canvas(s.width, s.height);
        work = { canvas: picture, c: pc };
        this.worked.set(device.id, work);
        from = -1;
      }
      const mowing = device.kind === "mower";
      const half = WORK_HALF[device.kind];
      for (let i = Math.max(1, from + 1); i < track.length; i++) {
        const a = track[i - 1];
        const b = track[i];
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const length = Math.hypot(dx, dy);
        // A jump is a lost fix, not a way the robot went.
        if (length > 2) continue;
        const forward = Math.abs(dx) >= Math.abs(dy) ? dx >= 0 : dy >= 0;
        const colour = mowing ? (forward ? "rgba(225,255,170,.16)" : "rgba(10,50,10,.12)") : "rgba(255,255,255,.1)";
        const steps = Math.max(1, Math.ceil(length / 0.06));
        for (let t = 0; t <= steps; t++) {
          const p: Point = [a[0] + (dx * t) / steps, a[1] + (dy * t) / steps];
          const reach = Math.ceil(half / WORK_CELL);
          const ci = Math.floor((p[0] - s.x0) / WORK_CELL);
          const cj = Math.floor((p[1] - s.y0) / WORK_CELL);
          for (let j = cj - reach; j <= cj + reach; j++)
            for (let i2 = ci - reach; i2 <= ci + reach; i2++) {
              const centre: Point = [s.x0 + (i2 + 0.5) * WORK_CELL, s.y0 + (j + 0.5) * WORK_CELL];
              if (Math.hypot(centre[0] - p[0], centre[1] - p[1]) > half) continue;
              if (mowing ? !this.onLawn(centre) : !s.insideHouse(centre)) continue;
              // The latest pass over a cell decides its shade.
              work.c.clearRect(i2 * 4, j * 4, 4, 4);
              rect(work.c, i2 * 4, j * 4, 4, 4, colour);
            }
        }
      }
      work.last = track.at(-1);
      if (track.length) c.drawImage(work.canvas, 0, 0);
    }
  }

  /** Whether a point is on a lawn, not on a bed, path or anything else laid in it. */
  private onLawn(p: Point): boolean {
    let lawn = false;
    for (const g of this.scene.garden) {
      if (!pointInPolygon(p, g.points)) continue;
      if (g.item.type !== "lawn") return false;
      lawn = true;
    }
    return lawn;
  }

  /** Daylight through the windows and the lamps, stopped by walls, multiplied over the picture. */
  private drawLight(hass: HomeAssistant, day: number, time: number): void {
    const s = this.scene;
    const levels = s.lights.map((l) => this.lightLevel(hass, l.entity));
    const colours = s.lights.map((l) => this.lightColour(hass, l.entity, l.colour));
    const shutters = s.windows.map((w) => this.shutter(hass, w));
    const screens = s.screens.map((sc) => isPowered(sc.device.entity ? hass.states[sc.device.entity]?.state : undefined));
    const key = [levels.map((v) => v.toFixed(2)), colours.map((v) => v.join(".")), shutters.map((v) => v.toFixed(2)), screens.map(Number), day.toFixed(2)].join("|");
    if (key !== this.lightKey || screens.some(Boolean)) {
      this.lightKey = key;
      const n = s.lightWidth * s.lightHeight;
      const ambient = new Float32Array(n);
      const added = new Float32Array(n * 3);
      // Rooms get a little daylight from the rest of the house; most comes through their own windows, so a
      // closed blind darkens its room.
      for (let k = 0; k < n; k++) ambient[k] = s.region[k] === -1 ? 1 : s.region[k] === -2 ? 0.85 : 0.1 + 0.12 * day;
      s.windows.forEach((w, i) => {
        const weight = 0.9 * (1 - shutters[i]) * (w.terrace ? 1.3 : 1);
        if (weight <= 0 || !w.daylight) return;
        const { cells, values } = w.daylight;
        for (let m = 0; m < cells.length; m++) if (s.region[cells[m]] >= 0) ambient[cells[m]] += weight * values[m];
      });
      const roomLevel = new Map<number, number>();
      s.lights.forEach((l, i) => {
        const level = levels[i];
        if (level <= 0.01) return;
        roomLevel.set(this.lightRooms[i], Math.max(roomLevel.get(this.lightRooms[i]) ?? 0, level));
        const strength = (level * (l.line ? 1 : 1.1)) / l.masks.length;
        const [r, g, b] = colours[i];
        for (const { cells, values } of l.masks)
          for (let m = 0; m < cells.length; m++) {
            const k = cells[m] * 3;
            const v = values[m] * strength;
            added[k] += (r / 255) * v;
            added[k + 1] += (g / 255) * v;
            added[k + 2] += (b / 255) * v;
          }
      });
      // Lit rooms spill light out of their windows at night.
      if (day < 0.5)
        s.windows.forEach((w, i) => {
          const index = w.room ? s.rooms.indexOf(w.room) : -1;
          const level = roomLevel.get(index) ?? 0;
          if (level <= 0.01 || !w.spill || !w.room) return;
          const strength = 0.7 * level * (1 - shutters[i]);
          const [r, g, b] = w.room.look.light;
          const { cells, values } = w.spill;
          for (let m = 0; m < cells.length; m++) {
            if (s.region[cells[m]] !== -1) continue;
            const k = cells[m] * 3;
            added[k] += (r / 255) * values[m] * strength;
            added[k + 1] += (g / 255) * values[m] * strength;
            added[k + 2] += (b / 255) * values[m] * strength;
          }
        });
      s.screens.forEach((sc, i) => {
        if (!screens[i]) return;
        const flicker = 0.35 + 0.2 * Math.sin(time * 9) + 0.1 * Math.sin(time * 23);
        const { cells, values } = sc.mask;
        for (let m = 0; m < cells.length; m++) {
          const k = cells[m] * 3;
          added[k] += 0.55 * values[m] * flicker;
          added[k + 1] += 0.65 * values[m] * flicker;
          added[k + 2] += values[m] * flicker;
        }
      });
      const out = dayColour(day);
      const data = this.lightImage.data;
      const step = (v: number) => (Math.round(clamp(v, 0, 1) * 12) / 12) * 255;
      for (let k = 0; k < n; k++) {
        const a = clamp(ambient[k], 0, 1);
        data[k * 4] = step(mix(NIGHT[0], out[0], a) + added[k * 3]);
        data[k * 4 + 1] = step(mix(NIGHT[1], out[1], a) + added[k * 3 + 1]);
        data[k * 4 + 2] = step(mix(NIGHT[2], out[2], a) + added[k * 3 + 2]);
        data[k * 4 + 3] = 255;
      }
      this.lc.putImageData(this.lightImage, 0, 0);
    }
    const c = this.fc;
    c.save();
    // Light blends smoothly from cell to cell; the picture under it stays sharp.
    c.imageSmoothingEnabled = true;
    c.globalCompositeOperation = "multiply";
    c.drawImage(this.light, 0, 0, s.lightWidth * LIGHT_CELL, s.lightHeight * LIGHT_CELL);
    c.restore();
  }

  /**
   * Patches of sun on the floor: every window facing the sun throws its shape away from it, as long as the
   * sun is high enough over its sill, cut by what the window sees past the walls. north is the compass
   * bearing the top of the plan faces.
   */
  private drawSun(hass: HomeAssistant, sun: { azimuth: number; elevation: number }, north: number, strength: number): void {
    const s = this.scene;
    const shutters = s.windows.map((w) => this.shutter(hass, w));
    const key = [Math.round(sun.azimuth), Math.round(sun.elevation), north, shutters.map((v) => v.toFixed(2))].join("|");
    if (key !== this.sunKey) {
      this.sunKey = key;
      const sc = this.sc;
      sc.clearRect(0, 0, s.lightWidth, s.lightHeight);
      if (sun.elevation > 0.5) {
        const bearing = ((sun.azimuth - north) * Math.PI) / 180;
        const toSun: Point = [Math.sin(bearing), -Math.cos(bearing)];
        const away: Point = [-toSun[0], -toSun[1]];
        const tan = Math.tan((sun.elevation * Math.PI) / 180);
        const scale = PPM / LIGHT_CELL;
        s.windows.forEach((w, i) => {
          const facing = w.out[0] * toSun[0] + w.out[1] * toSun[1];
          const open = 1 - shutters[i];
          if (facing <= 0.05 || open <= 0.02 || !w.room || !w.sun) return;
          const near = clamp((w.terrace ? 0 : 0.9) / tan, 0, 8);
          const far = clamp(2.1 / tan, 0, 8);
          const inner: Point = [w.centre[0] - (w.out[0] * w.t) / 2, w.centre[1] - (w.out[1] * w.t) / 2];
          const half = w.length / 2;
          const a: Point = [inner[0] - w.u[0] * half, inner[1] - w.u[1] * half];
          const b: Point = [inner[0] + w.u[0] * half, inner[1] + w.u[1] * half];
          const shape: Point[] = [
            [a[0] + away[0] * near, a[1] + away[1] * near],
            [b[0] + away[0] * near, b[1] + away[1] * near],
            [b[0] + away[0] * far, b[1] + away[1] * far],
            [a[0] + away[0] * far, a[1] + away[1] * far],
          ];
          const pc = this.pc;
          pc.globalCompositeOperation = "source-over";
          pc.clearRect(0, 0, s.lightWidth, s.lightHeight);
          pc.beginPath();
          shape.forEach((p, k) => {
            const x = (p[0] - s.x0) * scale;
            const y = (p[1] - s.y0) * scale;
            if (k) pc.lineTo(x, y);
            else pc.moveTo(x, y);
          });
          pc.closePath();
          pc.fillStyle = `rgba(255,232,170,${(clamp(0.18 + facing * 0.32, 0, 0.5) * open * clamp(sun.elevation / 8, 0, 1)).toFixed(3)})`;
          pc.fill();
          pc.globalCompositeOperation = "destination-in";
          pc.drawImage(w.sun, 0, 0);
          sc.drawImage(this.patch, 0, 0);
        });
      }
    }
    const c = this.fc;
    c.save();
    c.imageSmoothingEnabled = true;
    c.globalAlpha = strength;
    c.globalCompositeOperation = "lighter";
    c.drawImage(this.sun, 0, 0, s.lightWidth * LIGHT_CELL, s.lightHeight * LIGHT_CELL);
    c.restore();
  }

  /** Window glass in daylight or night, shutters over it, lit line lights and projector screens. */
  private drawGlass(hass: HomeAssistant, day: number, time: number): void {
    const s = this.scene;
    const c = this.fc;
    const sky = [0.12, 0.15, 0.3].map((v, i) => Math.round(mix(v, [0.62, 0.84, 0.95][i], day) * 255));
    const skyColour = `rgb(${sky.join(",")})`;
    const roomOn = new Set<number>();
    s.lights.forEach((l, i) => {
      if (this.lightLevel(hass, l.entity) > 0.05) roomOn.add(this.lightRooms[i]);
    });
    // The glass is drawn over the lit picture, so a shelter's roof in front of a window is cut out of it.
    c.save();
    const roofs = s.garden.filter((g) => g.item.type === "shelter");
    if (roofs.length) {
      c.beginPath();
      c.rect(0, 0, s.width, s.height);
      for (const g of roofs) {
        const [bx, by, bw, bh] = s.pxBox(g.box);
        const h = Math.round(SHELTER_HEIGHT * PPM);
        c.rect(bx, by - h, bw, bh + h);
      }
      c.clip("evenodd");
    }
    for (const w of s.windows) {
      if (!w.glass) continue;
      const [x, y, gw, gh] = w.glass;
      const lit = w.exterior && w.horizontal && !!w.room && roomOn.has(s.rooms.indexOf(w.room)) && day < 0.5 && w.out[1] > 0;
      const down = Math.round(gh * this.shutter(hass, w));
      rect(c, x, y + down, gw, gh - down, lit ? "#ffd78a" : skyColour);
      if (w.horizontal) {
        const panes = Math.max(1, Math.round(w.length / (w.terrace ? 0.9 : 0.6)));
        for (let i = 1; i < panes; i++) rect(c, x + Math.round((gw * i) / panes), y, 1, gh, "#e9e5da");
        if (!w.terrace) rect(c, x, y + Math.round(gh / 2), gw, 1, "#e9e5da");
      }
      if (down > 0) {
        rect(c, x, y, gw, down, "#9b9a94");
        for (let i = 1; i < down; i += 2) rect(c, x, y + i, gw, 1, "#7d7c77");
        rect(c, x, y + down - 1, gw, 1, "#5d5c58");
        if (lit) rect(c, x, y, gw, down, "rgba(255,200,110,.25)");
      }
      if (day > 0.4 && down < gh - 2) rect(c, x + 2, y + down + 1, 2, 1, "rgba(255,255,255,.6)");
    }
    c.restore();
    s.lights.forEach((l) => {
      if (!l.line || !l.device.to) return;
      const level = this.lightLevel(hass, l.entity);
      if (level <= 0.05) return;
      const [x0, y0] = s.px(l.device.at);
      const [x1, y1] = s.px(l.device.to);
      rect(c, Math.min(x0, x1) - 1, Math.min(y0, y1) - Math.round(0.3 * PPM), Math.abs(x1 - x0) + 2, Math.abs(y1 - y0) + 2, `rgba(255,236,170,${(0.7 * level).toFixed(2)})`);
    });
    for (const sc of s.screens) {
      const device = sc.device;
      if (!device.to || !isPowered(device.entity ? hass.states[device.entity]?.state : undefined)) continue;
      const [x0, y0] = s.px(device.at);
      const [x1, y1] = s.px(device.to);
      rect(c, Math.min(x0, x1), Math.min(y0, y1) - 10, Math.max(3, Math.abs(x1 - x0)), Math.max(3, Math.abs(y1 - y0)) + 2, `hsl(${Math.round(time * 30) % 360},45%,75%)`);
    }
  }
}

export class PixelView {
  private readonly source: PixelSource;
  private pictures = new Map<string, LevelPicture>();
  private targets: PixelTarget[] = [];
  private frame?: number;
  private last = 0;
  private drawn = 0;
  private time = 0;
  private readonly visible = new Set<Element>();
  private readonly observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) this.visible.add(entry.target);
      else this.visible.delete(entry.target);
    }
    this.run();
  });

  constructor(source: PixelSource) {
    this.source = source;
  }

  /** The canvases the card shows now, with the level and the part of it each one shows. */
  sync(targets: PixelTarget[]): void {
    for (const old of this.targets) if (!targets.some((t) => t.canvas === old.canvas)) {
      this.observer.unobserve(old.canvas);
      this.visible.delete(old.canvas);
    }
    for (const target of targets) if (!this.targets.some((t) => t.canvas === target.canvas)) this.observer.observe(target.canvas);
    this.targets = targets;
    const keys = new Set(targets.map((t) => t.key));
    for (const key of [...this.pictures.keys()]) if (!keys.has(key)) this.pictures.delete(key);
    for (const target of targets)
      if (!this.pictures.has(target.key)) {
        try {
          this.pictures.set(target.key, new LevelPicture(target.level, this.source.plan()));
        } catch (error) {
          console.error("FloorCast pixel look:", error);
        }
      }
    this.run();
  }

  /** The picture of a level the card shows now. */
  private pictureOf(level: string): LevelPicture | undefined {
    const target = this.targets.find((t) => t.level.id === level);
    return target ? this.pictures.get(target.key) : undefined;
  }

  /** Whether the character of the walking game may stand on a point of a level; nowhere while it is not shown. */
  canStand(level: string, p: Point): boolean {
    return this.pictureOf(level)?.canStand(p) ?? false;
  }

  /** Strokes the pet of a level nearest to a point within reach metres, for the action button of the game; its id. */
  strokeAt(level: string, p: Point, reach: number): string | undefined {
    return this.pictureOf(level)?.strokePet(p, reach);
  }

  /** The seat or bed of a level nearest to a point within reach metres. */
  seatAt(level: string, p: Point, reach: number): { furniture: Furniture; at: Point } | undefined {
    return this.pictureOf(level)?.seatNear(p, reach);
  }

  /** A touch on the card: when it lands on a pet the pet is stroked and the touch goes no further. */
  stroke(event: PointerEvent): boolean {
    for (const target of this.targets) {
      const box = target.canvas.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) continue;
      const picture = this.pictures.get(target.key);
      if (!picture) return false;
      const b = target.bounds;
      const p: Point = [b.x + ((event.clientX - box.left) / box.width) * b.w, b.y + ((event.clientY - box.top) / box.height) * b.h];
      return picture.stroke(p, Math.max(0.45, (b.w / box.width) * 24));
    }
    return false;
  }

  stop(): void {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
    this.observer.disconnect();
    this.visible.clear();
    this.targets = [];
    this.pictures.clear();
  }

  private run(): void {
    if (this.frame === undefined && this.visible.size) {
      this.last = performance.now();
      this.frame = requestAnimationFrame(this.tick);
    }
  }

  private readonly tick = (now: number): void => {
    this.frame = undefined;
    if (!this.visible.size) return;
    this.frame = requestAnimationFrame(this.tick);
    if (document.hidden || now - this.drawn < FRAME_MS) return;
    const dt = Math.min(0.1, (now - this.last) / 1000);
    this.last = now;
    this.drawn = now;
    this.time += dt;
    const done = new Set<string>();
    for (const target of this.targets) {
      if (!this.visible.has(target.canvas)) continue;
      const picture = this.pictures.get(target.key);
      if (!picture) continue;
      if (!done.has(target.key)) {
        picture.update(dt, this.source);
        picture.draw(this.time, this.source);
        done.add(target.key);
      }
      this.show(target, picture);
    }
  };

  /** Copies the shown part of the level into the canvas of the card, pixel for pixel without smoothing. */
  private show(target: PixelTarget, picture: LevelPicture): void {
    const element = target.canvas;
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.round(element.clientWidth * ratio));
    const height = Math.max(1, Math.round(element.clientHeight * ratio));
    if (element.width !== width || element.height !== height) {
      element.width = width;
      element.height = height;
    }
    const c = element.getContext("2d");
    if (!c) return;
    const s = picture.scene;
    const b = target.bounds;
    c.imageSmoothingEnabled = false;
    c.clearRect(0, 0, width, height);
    c.drawImage(picture.frame, (b.x - s.x0) * PPM, (b.y - s.y0) * PPM, b.w * PPM, b.h * PPM, 0, 0, width, height);
  }
}
