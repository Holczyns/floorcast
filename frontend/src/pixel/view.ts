// The pixel look on the card: one scene per shown level, brought to life every frame from the states of
// Home Assistant and the people and robots the integration sends, and copied into the canvas under the
// plan. The plan above it keeps every tap, label and preview; only its drawing is left out.
//
// State kept between frames: where each person was drawn (they walk to where the tracking puts them),
// the drops of water in the air, how wet the lawn is, and the last light and sun pictures with the
// states they were worked out from, so they are worked out again only when one of those changes.
import type { HomeAssistant } from "../ha";
import { type Level, type Plan, type Point, type TrackedPerson, deviceCentre, isPowered } from "../model";
import { PPM, canvas, rect } from "./art";
import { FACE, LIGHT_CELL, type Piece, Scene, STANDING_GARDEN } from "./scene";
import { Grid } from "./grid";
import { PetLife } from "./pets";
import { type Facing, OUTFITS, type Outfit, cat, dog, drop, heart, lying, mower, person, sitting, snore, toy, vacuum, withoutShadows } from "./sprites";

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
  private readonly sweep = new Map<string, { angle: number; dir: number; tick: number }>();
  private readonly wet: Float32Array;
  private readonly wetColumns: number;
  // Pets: their life on this level, how far each steps aside from people, when it was last stroked, and
  // where it was drawn last, for taps.
  private readonly pets: PetLife[];
  // Ways for people round the walls, when the tracking moves them past one.
  private readonly ways: Grid;
  private readonly aside = new Map<string, Point>();
  // When and where each pet was last touched; it plays there for PLAY seconds.
  private readonly touched = new Map<string, { time: number; at: Point }>();
  private drawnPets: { id: string; at: Point }[] = [];

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
    this.wetColumns = Math.ceil(s.width / PPM / WET_CELL);
    this.wet = new Float32Array(this.wetColumns * Math.ceil(s.height / PPM / WET_CELL));
    const first = plan?.levels[0]?.id;
    this.ways = new Grid(this.scene, () => true);
    this.pets = (plan?.pets ?? []).filter((pet) => (pet.level ?? first) === level.id).map((pet) => new PetLife(this.scene, pet));
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

  private doorOpen(hass: HomeAssistant, d: Piece): boolean {
    const o = d.opening;
    if (!o) return true;
    if (o.type === "gate" && o.cover) {
      const state = hass.states[o.cover]?.state;
      return state === "open" || state === "opening";
    }
    const contact = o.contact ? hass.states[o.contact]?.state : undefined;
    if (contact === "on") return true;
    if (contact === "off") return false;
    return o.drawn !== "closed";
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
      const target: Point = [p.x, p.y];
      const d = Math.hypot(target[0] - w.x, target[1] - w.y);
      if (d > JUMP) {
        w.x = target[0];
        w.y = target[1];
        w.route = [];
      } else if (d > 0.04) {
        // A new place: straight to it, or round the walls between, through a door.
        if (!w.route.length || Math.hypot(w.goal[0] - target[0], w.goal[1] - target[1]) > 0.3) {
          const way = s.wallBetween([w.x, w.y], target) ? this.ways.path([w.x, w.y], target) : [[w.x, w.y] as Point, target];
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
    const cell = Math.ceil(WET_CELL * PPM);
    for (let k = 0; k < this.wet.length; k++) {
      if (this.wet[k] < 0.02) continue;
      const [x, y] = s.px([s.x0 + (k % this.wetColumns) * WET_CELL, s.y0 + Math.floor(k / this.wetColumns) * WET_CELL]);
      rect(c, x, y, cell, cell, `rgba(15,45,25,${(this.wet[k] * 0.4).toFixed(3)})`);
    }

    // Everything stands where the plan puts its foot. Walls take part in the order: a thing in front of a
    // wall covers its face, one behind it is hidden by it.
    const items: { y: number; draw: () => void }[] = [];
    for (const part of s.wallParts) items.push({ y: part.order, draw: () => c.drawImage(s.walls, part.x, part.y, part.w, part.h, part.x, part.y, part.w, part.h) });
    for (const d of s.doors) {
      const open = this.doorOpen(hass, d);
      items.push({ y: s.px([0, d.box[3]])[1] + 0.1, draw: () => this.drawDoor(c, d, open) });
    }
    for (const f of s.furniture) if (f.kind !== "rug") items.push({ y: s.px([0, f.box[3]])[1] + 0.5, draw: () => s.drawFurniture(c, f) });
    for (const g of s.garden) if (STANDING_GARDEN.has(g.item.type)) items.push({ y: s.px([0, g.box[3]])[1] + 0.5, draw: () => s.drawGardenObject(c, g) });
    for (const device of s.level.devices ?? []) {
      if (device.kind !== "vacuum" && device.kind !== "mower") continue;
      const place = source.robot(device.id);
      const state = device.entity ? hass.states[device.entity]?.state : undefined;
      const at = place?.at ?? (device.kind === "vacuum" ? place?.dock : undefined);
      if (!at) continue;
      const [x, y] = s.px(at);
      items.push({ y: y + 0.5, draw: () => (device.kind === "vacuum" ? vacuum(c, x, y, state, time) : mower(c, x, y, place?.heading, state)) });
    }
    // Standing people and pets drawn once more over everything, see-through: unchanged where seen, a ghost behind furniture.
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
        ghosts.push(() => person(c, x, y, w.facing, step, w.outfit, true));
      }
    }
    const overhead = this.addPets(items, ghosts, time);
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

    const sun = this.sunPlace(hass);
    this.drawLight(hass, sun.day, time);
    if (!s.opaque) {
      c.globalCompositeOperation = "destination-in";
      c.drawImage(s.outline, 0, 0);
      c.globalCompositeOperation = "source-over";
    }
    this.drawSun(hass, sun, source.plan()?.north ?? 0);
    this.drawGlass(hass, sun.day, time);
  }

  /**
   * Pets at the place their life gives for now, a little aside from people near them. Returns what is
   * drawn over everything: the z of a sleeping pet and the hearts of a stroked one.
   */
  private addPets(items: { y: number; draw: () => void }[], ghosts: (() => void)[], time: number): (() => void)[] {
    const s = this.scene;
    const c = this.fc;
    const now = Date.now() / 1000;
    const overhead: (() => void)[] = [];
    this.drawnPets = [];
    for (const life of this.pets) {
      const pet = life.pet;
      const touch = this.touched.get(pet.id);
      const since = touch ? now - touch.time : 99;
      const place = touch && since < PLAY ? life.playHere(touch.at, since) : life.placeAt(now);
      // Step aside from the nearest person closer than a metre, less when the pet lies on furniture.
      let push: Point = [0, 0];
      for (const w of this.walkers.values()) {
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
      this.drawnPets.push({ id: pet.id, at });
      const fond = since < 2.5;
      const pose = place.state;
      const hop = Math.round(place.hop * PPM) + (fond ? Math.round(Math.max(0, Math.sin(since * 9)) * 3) : 0);
      const seat = place.on ? Math.round((place.on.kind === "bed" ? 0.18 : 0.22) * PPM) : 0;
      const [x, y] = s.px(at);
      const top = place.on ? s.px([0, place.on.box[3]])[1] + 0.7 : y + 0.4;
      const step = Math.floor(place.walked * (place.state === "run" ? 5 : 8));
      const coat = pet.coat ?? (pet.species === "dog" ? "brown" : "ginger");
      const draw = () =>
        pet.species === "dog" ? dog(c, x, y - seat - hop, pose, place.facing, step, coat, time, since < PLAY) : cat(c, x, y - seat - hop, pose, place.facing, step, coat, time);
      items.push({ y: top, draw });
      ghosts.push(() => withoutShadows(draw));
      const plaything = place.toy;
      if (plaything) {
        const [tx, ty] = s.px(plaything.at);
        items.push({ y: ty + 0.3, draw: () => toy(c, plaything.kind, tx, ty, Math.round(plaything.height * PPM), time, plaything.fade ?? 1) });
      }
      if (pose === "sleep")
        overhead.push(() => {
          for (let k = 0; k < 2; k++) {
            const phase = (time * 0.45 + k * 0.5) % 1;
            snore(c, x + 3 + Math.round(phase * 4), y - seat - 12 - Math.round(phase * 10), 1 - phase);
          }
        });
      if (fond)
        overhead.push(() => {
          for (let k = 0; k < 3; k++) {
            const rise = since * 8 + k * 4;
            heart(c, x - 5 + k * 5, y - seat - 16 - Math.round(rise), Math.max(0, 1 - since / 2.5));
          }
        });
    }
    return overhead;
  }

  /** The pet drawn nearest to a point of the plan, within reach metres; it is stroked. */
  stroke(p: Point, reach: number): boolean {
    let best: { id: string; d: number } | undefined;
    for (const pet of this.drawnPets) {
      // Its body stands a little above its feet.
      const d = Math.hypot(pet.at[0] - p[0], pet.at[1] - 0.2 - p[1]);
      if (d < reach && (!best || d < best.d)) best = { id: pet.id, d };
    }
    if (best) {
      const at = this.drawnPets.find((pet) => pet.id === best!.id)!.at;
      this.touched.set(best.id, { time: Date.now() / 1000, at });
    }
    return !!best;
  }

  private drawDoor(c: CanvasRenderingContext2D, d: Piece, open: boolean): void {
    const [x, y, w, h] = this.scene.pxBox(d.box);
    const face = Math.round(FACE * PPM);
    // Doors stand up from the foot of their wall like the wall.
    const top = y - face;
    if (d.horizontal) {
      if (open) rect(c, x + 2, top, 2, h + face - 1, "#8b5a2b");
      else {
        rect(c, x + 2, top, w - 4, h + face - 1, d.exterior ? "#6e3f22" : "#8b5a2b");
        rect(c, x + 2, top, w - 4, 1, "#a8703a");
        rect(c, x + 4, top + 3, w - 8, Math.max(2, face / 2 - 3), d.exterior ? "#5c331b" : "#784b23");
        rect(c, x + w - 6, top + face / 2 + 2, 1, 2, "#e0c35f");
      }
    } else if (open) rect(c, x, top + 2, w, 2, "#8b5a2b");
    else {
      rect(c, x + Math.round(w / 2) - 2, top + 2, 4, h - 4, "#8b5a2b");
      rect(c, x + Math.round(w / 2) - 2, top + 2, 1, h - 4, "#a8703a");
    }
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
    c.imageSmoothingEnabled = false;
    c.globalCompositeOperation = "multiply";
    c.drawImage(this.light, 0, 0, s.lightWidth * LIGHT_CELL, s.lightHeight * LIGHT_CELL);
    c.restore();
  }

  /**
   * Patches of sun on the floor: every window facing the sun throws its shape away from it, as long as the
   * sun is high enough over its sill, cut by what the window sees past the walls. north is the compass
   * bearing the top of the plan faces.
   */
  private drawSun(hass: HomeAssistant, sun: { azimuth: number; elevation: number }, north: number): void {
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
    c.imageSmoothingEnabled = false;
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
