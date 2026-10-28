// The plan document and plain geometry on it. Every length is in metres.

export type Point = [number, number];

export interface Wall {
  id: string;
  a: Point;
  b: Point;
  /** Thickness; follows the wall type when the wall has one. */
  t: number;
  type?: string;
}

export interface WallType {
  id: string;
  name: string;
  t: number;
}

export const DEFAULT_WALL_TYPES: WallType[] = [
  { id: "outer", name: "Outer wall", t: 0.275 },
  { id: "load", name: "Load-bearing wall", t: 0.25 },
  { id: "partition", name: "Partition", t: 0.12 },
];

export interface Opening {
  id: string;
  wall: string;
  /** Distance of the opening centre from the wall start. */
  at: number;
  width: number;
  type: "door" | "window";
  /** Door hinge at the end of the opening closer to the wall end instead of its start. */
  hingeEnd?: boolean;
  /** Door swings to the right side of the wall direction instead of the left. */
  swingRight?: boolean;
  /** Contact sensor of the door or window: a door is drawn open or shut, an open window in a warning colour. */
  contact?: string | null;
  /** How a door is drawn without a contact sensor, or while it is unavailable. */
  drawn?: "open" | "closed";
  /** Window: its roller blind or shutter (a cover entity). */
  cover?: string | null;
  /** Window: the blind is drawn on the other side of the wall than found by the rooms. */
  blindFlip?: boolean;
}

export interface Room {
  id: string;
  name: string;
  points: Point[];
  stairs?: boolean;
  /** A zone outside the house, such as a terrace: no floor is drawn under it. */
  outdoor?: boolean;
  /** Part of the surroundings, hidden together with the garden (a driveway, a lawn zone). */
  garden?: boolean;
  /** Former sensors of the room; the editor turns them into thermometers and sensors placed in it. */
  temperature?: string | null;
  humidity?: string | null;
  lights?: string[];
  presence?: string[];
  sensors?: string[];
  /** Name left off the card; temperature and other readings stay. */
  hideName?: boolean;
  /** Seconds its radar occupancy stays on after the last person left. */
  hold?: number;
}

/**
 * An area that steers radar tracking: count gives its own people count, entrance makes
 * people born there count at once, exclude ignores targets there (a fan, a curtain),
 * stationary keeps a still person counted for its hold time (a sofa, a bed).
 */
export interface Zone {
  id: string;
  name: string;
  kind: "count" | "entrance" | "exclude" | "stationary";
  points: Point[];
  /** Seconds: occupancy hold of a count zone, how long a stationary zone keeps a lost person. */
  hold?: number;
}

export const DEFAULT_ROOM_HOLD = 30;
export const DEFAULT_STATIONARY_HOLD = 300;

/** Settings of the people tracking; every one is optional and falls back to its default. */
export interface TrackingSettings {
  merge_distance?: number;
  smoothing?: number;
  confirm_delay?: number;
  jump_base?: number;
  jump_speed?: number;
  stationary_hold?: number;
  lost_hold?: number;
  sleep_hours?: number;
  /** How far a detection just outside the rooms its source sees is moved into them. */
  snap_distance?: number;
  /** The same settings for the people the cameras see; the ones above are for the radars. */
  camera?: Omit<TrackingSettings, "camera">;
}

/** A person the tracking follows, as the integration sends it to the card. */
export interface TrackedPerson {
  id: number | string;
  x: number;
  y: number;
  status: "seen" | "held" | "unconfirmed";
  source?: "radar" | "camera";
  /** Frigate camera that sees a camera person now. */
  camera?: string;
  /** Radars or cameras that see the person now. */
  sources?: string[];
  /** Where the person was over the last seconds, oldest first. */
  trail?: Point[];
}

export type ItemType =
  | "lawn"
  | "paving"
  | "terrace"
  | "bed"
  | "hedge"
  | "vegetable"
  | "greenhouse"
  | "shelter"
  | "garden_house"
  | "trampoline"
  | "manhole"
  | "obstacle"
  | "round_obstacle";

export interface Item {
  id: string;
  type: ItemType;
  name?: string;
  /** Rectangle: corner x, y, width, height and rotation in degrees around its centre. */
  rect?: [number, number, number, number];
  rotation?: number;
  /** Circle: centre and diameter. */
  center?: Point;
  diameter?: number;
  /** Polygon for areas of any shape. */
  points?: Point[];
  /** Corners rounded or square whatever the plan says; without it the object follows the plan. */
  corners?: "round" | "square";
}

/** A device placed on the plan; for now a light with the reach of its glow. */
/**
 * EXPERIMENTAL: how a camera image is laid on the ground. A camera: the zones or rooms it is laid on and
 * its ground calibration spots on the plan. A mower camera: its spots ahead of the mower. Five spots at
 * least; reach is the former name of the range of a mower camera.
 */
export interface GroundSettings {
  zones?: string[];
  calibration?: { image: Point; plan: Point }[];
  /** Where the image has faded out, in metres from the camera or the mower; the range of a camera view without it. */
  range?: number;
  /** Mower: seconds its place is shown late, so it moves smoothly between the places it reports. */
  delay?: number;
  /** Mower camera: seconds its image is laid late, so it keeps pace with the mower shown late. */
  viewDelay?: number;
  /** Mower camera: spots in its image and the same spots ahead and right of the mower centre, in metres. */
  spots?: { image: Point; ahead: Point }[];
  reach?: number;
}

export type SensorType = "temperature" | "humidity" | "generic";

/**
 * How one value of a sensor is written. The unit is the short one (°, %, else the entity's unit) by
 * default, the entity's own or a custom text, and may be hidden; decimals follow the value by default
 * (1 for a temperature, 0 for a percentage). A secondary value has its own entity and may have a label.
 */
export interface SensorValue {
  entity?: string | null;
  label?: string;
  unit?: "auto" | "entity" | "custom";
  unitText?: string;
  showUnit?: boolean;
  decimals?: number;
}

export const MAX_SECONDARY = 2;

/**
 * Former thermometers become temperature sensors and the second reading of a sensor its first secondary
 * value; true when a device changed.
 */
export function normalizeSensors(level: Level): boolean {
  let changed = false;
  for (const device of level.devices ?? []) {
    if (device.kind === "thermometer") {
      device.kind = "sensor";
      device.sensorType = "temperature";
      changed = true;
    }
    if (device.kind === "sensor" && device.extra !== undefined) {
      device.secondary ??= device.extra ? [{ entity: device.extra }] : [];
      delete device.extra;
      changed = true;
    }
  }
  return changed;
}

/** Spots a camera needs before its image is laid on the ground, as ground.py asks. */
export const MIN_GROUND_SPOTS = 5;

/** What the preview of a camera shows on the card: its still in a window, its image on the ground, or both. */
export type PreviewMode = "window" | "ground" | "both";

export interface Device {
  id: string;
  /** "thermometer" is the former kind of a temperature sensor; normalizeSensors turns it into a sensor. */
  kind: "light" | "sprinkler" | "mower" | "vacuum" | "camera" | "radar" | "sensor" | "thermometer" | "screen";
  /** Radar: name its target sensors start with, as in sensor.<source>_target_1_x. */
  source?: string | null;
  entity?: string | null;
  at: Point;
  /** End of a line light, such as a strip over a worktop; a point light has none. */
  to?: Point;
  /** Reach of the glow, or the throw of a sprinkler, in metres. */
  radius?: number;
  /** Sprinkler: compass bearing where its arc starts, in degrees clockwise from north. */
  heading?: number;
  /** Sprinkler: width of the arc in degrees; 360 waters a full circle. */
  arc?: number;
  /** Sprinkler: a rotor sweeps one stream along the arc, a spray nozzle waters it all at once. */
  nozzle?: "rotor" | "spray";
  /** Mower: camera entity of its map, whose attributes give the position. */
  map?: string | null;
  /** Mower: its own camera, whose still the card shows on a tap. */
  camera?: string | null;
  /** EXPERIMENTAL: camera images laid on the ground (ground.py). */
  ground?: GroundSettings;
  /** Camera or mower camera: what its preview shows on the card; a window without it. */
  preview?: PreviewMode;
  /** Mower: how its map lies on the plan; at is where the top left corner of the map image lies. */
  rotation?: number;
  mirror?: boolean;
  projection?: MapProjection;
  /** Mower: where its charging station is, in millimetres of its map, remembered for when it is not reported. */
  dock?: Point;
  /** Vacuum: pairs of its own position (mm) and the same spot on the plan (m). */
  pairs?: { robot: Point; plan: Point }[];
  /** Former second reading of a sensor or humidity of a thermometer; normalizeSensors moves it to secondary. */
  extra?: string | null;
  /** Sensor: what it measures; a temperature sensor gives the room it stands in its temperature. */
  sensorType?: SensorType;
  /** Sensor: a short header above its value; none without it. */
  label?: string;
  /** Sensor: how its main value (entity) is written. */
  main?: SensorValue;
  /** Sensor: up to two further values written smaller under the main one. */
  secondary?: SensorValue[];
  /** Projector screen: the remote whose keys the remote control on the card sends. */
  remote?: string | null;
  /** Projector screen: its light falls on the other side than the room found next to it. */
  flip?: boolean;
  /** Mower or vacuum: its battery sensor; without one the battery_level attribute of the entity. */
  battery?: string | null;
  /** Vacuum: sensor naming the room it cleans, matched to room names on the plan. */
  roomSensor?: string | null;
  /** Camera: its name in Frigate, whose tracked objects are placed on the plan. */
  frigate?: string | null;
  /** Camera: the same spots in its image (0..1 of width and height) and on the plan (m); four or more. */
  calibration?: { image: Point; plan: Point }[];
  /** Camera: detect resolution of Frigate in pixels, when Frigate does not report it. */
  detect?: [number, number];
}

type Reading = { state: string; attributes: Record<string, any> } | undefined;

/** A reading as short text: temperature with one decimal and a degree, humidity in whole percent, others with their unit. */
export function readingText(stateObj: Reading, value: SensorValue = {}): string | undefined {
  if (!stateObj || stateObj.state === "unavailable" || stateObj.state === "unknown") return undefined;
  const number = Number.parseFloat(stateObj.state);
  const entityUnit = (stateObj.attributes.unit_of_measurement as string | undefined) ?? "";
  const deviceClass = stateObj.attributes.device_class;
  if (!Number.isFinite(number)) return stateObj.state;
  // The short form: ° and % close up to the number, other units after a space.
  let digits = Number.isInteger(number) ? 0 : 1;
  let short = entityUnit;
  if (deviceClass === "temperature" || entityUnit === "°C" || entityUnit === "°F") {
    digits = 1;
    short = "°";
  } else if (deviceClass === "humidity" || deviceClass === "battery" || entityUnit === "%") {
    digits = 0;
    short = "%";
  }
  const shown = number.toFixed(value.decimals ?? digits);
  if (value.showUnit === false) return shown;
  const unit = value.unit === "custom" ? (value.unitText ?? "") : value.unit === "entity" ? entityUnit : short;
  if (!unit) return shown;
  return unit === "°" || unit === "%" ? `${shown}${unit}` : `${shown} ${unit}`;
}

/** Whether a projector, remote or media player is on; standby and unavailable count as off. */
export function isPowered(state: string | undefined): boolean {
  return !!state && !["off", "standby", "unavailable", "unknown"].includes(state);
}

/** An object Frigate tracks, as the integration places it on the plan. */
/** A small image of a camera the integration sends about every second while a card shows it. */
export interface StillImage {
  entity: string;
  data: string;
  width: number | null;
  height: number | null;
  time: number;
}

export interface CameraObject {
  id: string;
  x: number;
  y: number;
  label: string;
  camera: string;
  stationary: boolean;
}

type Matrix = number[][];

/** Moves points to their centre and scales them to a mean distance of sqrt(2) from it. */
function normaliser(points: Point[]): Matrix {
  const cx = points.reduce((sum, p) => sum + p[0], 0) / points.length;
  const cy = points.reduce((sum, p) => sum + p[1], 0) / points.length;
  const spread = points.reduce((sum, p) => sum + Math.hypot(p[0] - cx, p[1] - cy), 0) / points.length;
  const s = spread > 1e-12 ? Math.SQRT2 / spread : 1;
  return [
    [s, 0, -s * cx],
    [0, s, -s * cy],
    [0, 0, 1],
  ];
}

function multiply(a: Matrix, b: Matrix): Matrix {
  return [0, 1, 2].map((r) => [0, 1, 2].map((c) => a[r][0] * b[0][c] + a[r][1] * b[1][c] + a[r][2] * b[2][c]));
}

function transform(m: Matrix, [u, v]: Point): Point {
  const w = m[2][0] * u + m[2][1] * v + m[2][2];
  return [(m[0][0] * u + m[0][1] * v + m[0][2]) / w, (m[1][0] * u + m[1][1] * v + m[1][2]) / w];
}

/**
 * Matrix taking image points onto the plan from four or more pairs, as engine/homography.py does: both
 * sides moved to their centre and scaled first, and the sign set so the calibration points lie before the camera.
 */
export function homography(pairs: { image: Point; plan: Point }[]): Matrix | undefined {
  if (pairs.length < 4) return undefined;
  const toImage = normaliser(pairs.map((p) => p.image));
  const toPlan = normaliser(pairs.map((p) => p.plan));
  const rows: number[][] = [];
  const values: number[] = [];
  for (const pair of pairs) {
    const [u, v] = transform(toImage, pair.image);
    const [x, y] = transform(toPlan, pair.plan);
    rows.push([u, v, 1, 0, 0, 0, -u * x, -v * x]);
    values.push(x);
    rows.push([0, 0, 0, u, v, 1, -u * y, -v * y]);
    values.push(y);
  }
  const a = [...Array(8).keys()].map((i) => [...Array(8).keys()].map((j) => rows.reduce((sum, r) => sum + r[i] * r[j], 0)));
  const b = [...Array(8).keys()].map((i) => rows.reduce((sum, r, k) => sum + r[i] * values[k], 0));
  // Gaussian elimination with partial pivoting.
  const m = a.map((row, i) => [...row, b[i]]);
  for (let col = 0; col < 8; col++) {
    let pivot = col;
    for (let r = col + 1; r < 8; r++) if (Math.abs(m[r][col]) > Math.abs(m[pivot][col])) pivot = r;
    if (Math.abs(m[pivot][col]) < 1e-12) return undefined;
    [m[col], m[pivot]] = [m[pivot], m[col]];
    for (let r = 0; r < 8; r++) {
      if (r === col) continue;
      const k = m[r][col] / m[col][col];
      for (let c = col; c <= 8; c++) m[r][c] -= k * m[col][c];
    }
  }
  const h = m.map((row, i) => row[8] / row[i]);
  const s = 1 / toPlan[0][0];
  const fromPlan: Matrix = [
    [s, 0, -toPlan[0][2] * s],
    [0, s, -toPlan[1][2] * s],
    [0, 0, 1],
  ];
  const result = multiply(fromPlan, multiply([h.slice(0, 3), h.slice(3, 6), [h[6], h[7], 1]], toImage));
  if (Math.abs(result[2][2]) < 1e-12) return undefined;
  const scaled = result.map((row) => row.map((value) => value / result[2][2]));
  const w = pairs.reduce((sum, { image: [u, v] }) => sum + scaled[2][0] * u + scaled[2][1] * v + scaled[2][2], 0);
  return w < 0 ? scaled.map((row) => row.map((value) => -value)) : scaled;
}

/** Plan point of an image point, or undefined beyond the horizon of the image. */
export function imageToPlan(matrix: Matrix, [u, v]: Point): Point | undefined {
  const w = matrix[2][0] * u + matrix[2][1] * v + matrix[2][2];
  if (w <= 1e-9) return undefined;
  return [(matrix[0][0] * u + matrix[0][1] * v + matrix[0][2]) / w, (matrix[1][0] * u + matrix[1][1] * v + matrix[1][2]) / w];
}

/**
 * Plan point of a vacuum position from its calibration. One pair places the robot frame at
 * the dock with the set rotation; two pairs also give the rotation. Millimetres become metres.
 */
export function robotToPlan(device: Device, robot: Point): Point | undefined {
  const pairs = device.pairs ?? [];
  if (!pairs.length) return undefined;
  const flip = (p: Point): Point => [p[0] / 1000, (device.mirror ? 1 : -1) * (p[1] / 1000)];
  let angle = device.rotation ?? 0;
  if (pairs.length > 1) {
    const r = sub(flip(pairs[1].robot), flip(pairs[0].robot));
    const q = sub(pairs[1].plan, pairs[0].plan);
    angle = ((Math.atan2(q[1], q[0]) - Math.atan2(r[1], r[0])) * 180) / Math.PI;
  }
  const local = sub(flip(robot), flip(pairs[0].robot));
  return add(pairs[0].plan, rotate(local, [0, 0], angle));
}

/** Ratio of the plan distance to the robot distance between two pairs; near 1 when they agree. */
export function calibrationScale(device: Device): number | undefined {
  const pairs = device.pairs ?? [];
  if (pairs.length < 2) return undefined;
  const robot = dist(pairs[0].robot, pairs[1].robot) / 1000;
  return robot ? dist(pairs[0].plan, pairs[1].plan) / robot : undefined;
}

/** How the mower map image relates to its millimetres, as the Dreame integration describes it. */
export interface MapProjection {
  maxX: number;
  minY: number;
  /** Image pixels per millimetre. */
  scale: number;
  padding: number;
  width: number;
  height: number;
}

/** Pixel of the map image for a mower position in millimetres. */
export function mapPixel(projection: MapProjection, x: number, y: number): Point {
  return [projection.padding + (projection.maxX - x) * projection.scale, projection.padding + (y - projection.minY) * projection.scale];
}

/** Plan point of a pixel of the mower map, through the calibration stored on the mower. */
export function mapToPlan(mower: Device, pixel: Point): Point {
  const projection = mower.projection!;
  const metresPerPixel = 1 / (projection.scale * 1000);
  const u = (mower.mirror ? projection.width - pixel[0] : pixel[0]) * metresPerPixel;
  const v = pixel[1] * metresPerPixel;
  return add(mower.at, rotate([u, v], [0, 0], mower.rotation ?? 0));
}

/** SVG transform that lays the map image on the plan, matching mapToPlan. */
export function mapTransform(mower: Device): string {
  const projection = mower.projection!;
  const k = 1 / (projection.scale * 1000);
  const mirror = mower.mirror ? ` translate(${projection.width * k} 0) scale(-1 1)` : "";
  return `translate(${mower.at[0]} ${mower.at[1]}) rotate(${mower.rotation ?? 0})${mirror} scale(${k})`;
}

export const DEFAULT_THROW = 4;
export const DEFAULT_CAMERA_RANGE = 8;
export const DEFAULT_FIELD_OF_VIEW = 100;
export const DEFAULT_RADAR_RANGE = 6;
export const DEFAULT_RADAR_VIEW = 120;
const RADAR_TARGETS = 3;

type States = Record<string, { state: string; attributes: Record<string, any> } | undefined>;

/** Target sensors of a mmWave radar such as the LD2450, found by their names. */
export function radarSources(states: States): string[] {
  return Object.keys(states)
    .map((id) => /^sensor\.(.+)_target_1_x$/.exec(id)?.[1])
    .filter((source): source is string => !!source);
}

function millimetres(stateObj: { state: string; attributes: Record<string, any> } | undefined): number | undefined {
  const value = Number.parseFloat(stateObj?.state ?? "");
  if (!Number.isFinite(value)) return undefined;
  const unit = stateObj!.attributes.unit_of_measurement;
  return unit === "m" ? value * 1000 : unit === "cm" ? value * 10 : value;
}

/**
 * People a radar sees, on the plan. The radar looks along its heading; its x axis points to
 * its right, or to its left when mirrored. A target at the radar itself is an empty slot.
 */
export function radarTargets(device: Device, states: States): Point[] {
  if (!device.source) return [];
  const heading = ((device.heading ?? 0) * Math.PI) / 180;
  const ahead: Point = [Math.sin(heading), -Math.cos(heading)];
  const right: Point = [Math.cos(heading), Math.sin(heading)];
  const range = (device.radius ?? DEFAULT_RADAR_RANGE) * 1000;
  const targets: Point[] = [];
  for (let i = 1; i <= RADAR_TARGETS; i++) {
    const x = millimetres(states[`sensor.${device.source}_target_${i}_x`]);
    const y = millimetres(states[`sensor.${device.source}_target_${i}_y`]);
    if (x === undefined || y === undefined) continue;
    if (Math.abs(x) < 100 && Math.abs(y) < 100) continue;
    if (Math.hypot(x, y) > range) continue;
    const side = (device.mirror ? -x : x) / 1000;
    const forward = y / 1000;
    targets.push([device.at[0] + right[0] * side + ahead[0] * forward, device.at[1] + right[1] * side + ahead[1] * forward]);
  }
  return targets;
}

/** Point at a compass bearing and distance from a centre; north is up on the plan. */
export function bearingPoint(centre: Point, bearing: number, distance: number): Point {
  const r = (bearing * Math.PI) / 180;
  return [centre[0] + Math.sin(r) * distance, centre[1] - Math.cos(r) * distance];
}

/** Compass bearing from a centre to a point, 0 to 360. */
export function bearingTo(centre: Point, p: Point): number {
  const degrees = (Math.atan2(p[0] - centre[0], centre[1] - p[1]) * 180) / Math.PI;
  return (degrees + 360) % 360;
}

/** Where a device is, for finding its room: the middle of a line light. */
export function deviceCentre(device: Device): Point {
  return device.to ? [(device.at[0] + device.to[0]) / 2, (device.at[1] + device.to[1]) / 2] : device.at;
}

export const DEFAULT_GLOW = 2;

export interface Level {
  id: string;
  name: string;
  walls: Wall[];
  openings: Opening[];
  rooms: Room[];
  items: Item[];
  devices?: Device[];
  zones?: Zone[];
}

export interface Plan {
  levels: Level[];
  tracking?: TrackingSettings;
  wallTypes?: WallType[];
  /** Corners of walls, rooms and objects drawn round instead of square. */
  roundCorners?: boolean;
  /** Radius of those corners in metres. */
  cornerRadius?: number;
}

/** Surroundings of the house that the card can hide; the terrace stays with the house. */
export const GARDEN_TYPES: ItemType[] = [
  "lawn",
  "paving",
  "bed",
  "hedge",
  "vegetable",
  "greenhouse",
  "shelter",
  "garden_house",
  "trampoline",
  "manhole",
];

/** Devices of the garden, hidden with it. */
export const GARDEN_DEVICES: Device["kind"][] = ["sprinkler", "mower"];

export function hasGarden(level: Level): boolean {
  return (
    level.items.some((item) => GARDEN_TYPES.includes(item.type)) ||
    level.rooms.some((room) => room.garden) ||
    (level.devices ?? []).some((device) => GARDEN_DEVICES.includes(device.kind))
  );
}

export function withoutGarden(level: Level): Level {
  return {
    ...level,
    items: level.items.filter((item) => !GARDEN_TYPES.includes(item.type)),
    rooms: level.rooms.filter((room) => !room.garden),
    devices: (level.devices ?? []).filter((device) => !GARDEN_DEVICES.includes(device.kind)),
  };
}

export const CIRCLE_TYPES: ItemType[] = ["trampoline", "manhole", "round_obstacle"];
/** Furniture: grey shapes drawn over the floor, square or round, sharing one outline where they touch. */
export const OBSTACLE_TYPES: ItemType[] = ["obstacle", "round_obstacle"];
/** Types that can turn from a rectangle into a free shape with any corners. */
export const AREA_TYPES: ItemType[] = ["lawn", "paving", "terrace", "bed", "hedge", "obstacle"];

/** Drawing order from the ground up; walls and rooms of the house come after all of them. */
export const ITEM_ORDER: ItemType[] = [
  "lawn",
  "paving",
  "terrace",
  "bed",
  "vegetable",
  "hedge",
  "manhole",
  "greenhouse",
  "shelter",
  "garden_house",
  "trampoline",
  "obstacle",
  "round_obstacle",
];

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}

export function emptyLevel(name: string): Level {
  return { id: uid("level"), name, walls: [], openings: [], rooms: [], items: [] };
}

export const add = (p: Point, q: Point): Point => [p[0] + q[0], p[1] + q[1]];
export const sub = (p: Point, q: Point): Point => [p[0] - q[0], p[1] - q[1]];
export const scale = (p: Point, k: number): Point => [p[0] * k, p[1] * k];
export const dist = (p: Point, q: Point): number => Math.hypot(p[0] - q[0], p[1] - q[1]);

export function wallLength(wall: Wall): number {
  return dist(wall.a, wall.b);
}

export function wallDirection(wall: Wall): Point {
  const length = wallLength(wall) || 1;
  return [(wall.b[0] - wall.a[0]) / length, (wall.b[1] - wall.a[1]) / length];
}

export function pointOnWall(wall: Wall, at: number): Point {
  return add(wall.a, scale(wallDirection(wall), at));
}

/** Distance along the wall of the point nearest to p, and how far p is from the wall axis. */
export function projectOnWall(wall: Wall, p: Point): { at: number; distance: number } {
  const d = wallDirection(wall);
  const length = wallLength(wall);
  const along = Math.min(length, Math.max(0, (p[0] - wall.a[0]) * d[0] + (p[1] - wall.a[1]) * d[1]));
  return { at: along, distance: dist(p, pointOnWall(wall, along)) };
}

export function rotate(p: Point, origin: Point, degrees: number): Point {
  const r = (degrees * Math.PI) / 180;
  const dx = p[0] - origin[0];
  const dy = p[1] - origin[1];
  return [origin[0] + dx * Math.cos(r) - dy * Math.sin(r), origin[1] + dx * Math.sin(r) + dy * Math.cos(r)];
}

export function rectCorners(item: Item): Point[] {
  const [x, y, w, h] = item.rect!;
  const centre: Point = [x + w / 2, y + h / 2];
  const corners: Point[] = [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
  ];
  return corners.map((corner) => rotate(corner, centre, item.rotation ?? 0));
}

export function itemPoints(item: Item): Point[] {
  if (item.points) return item.points;
  if (item.rect) return rectCorners(item);
  const [cx, cy] = item.center!;
  const r = (item.diameter ?? 1) / 2;
  return [
    [cx - r, cy - r],
    [cx + r, cy + r],
  ];
}

export function centroid(points: Point[]): Point {
  // Centre of the bounding box keeps labels inside simple rooms and L shapes alike.
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  return [(Math.min(...xs) + Math.max(...xs)) / 2, (Math.min(...ys) + Math.max(...ys)) / 2];
}

export function pointInPolygon(p: Point, polygon: Point[]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];
    const crosses = yi > p[1] !== yj > p[1] && p[0] < ((xj - xi) * (p[1] - yi)) / (yj - yi) + xi;
    if (crosses) inside = !inside;
  }
  return inside;
}

export interface Bounds {
  x: number;
  y: number;
  w: number;
  h: number;
}

/** Bounding box of everything drawn on a level, with a margin. */
export function levelBounds(level: Level, margin = 0.4): Bounds {
  const points: Point[] = [];
  for (const wall of level.walls) points.push(wall.a, wall.b);
  for (const room of level.rooms) points.push(...room.points);
  for (const item of level.items) points.push(...itemPoints(item));
  if (!points.length) return { x: -5, y: -5, w: 10, h: 10 };
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const x = Math.min(...xs) - margin;
  const y = Math.min(...ys) - margin;
  return { x, y, w: Math.max(...xs) + margin - x, h: Math.max(...ys) + margin - y };
}

/** Bounds of what is drawn of the level: walls with their thickness, rooms and objects, with a small margin. */
export function drawnBounds(level: Level, margin = 0.1): Bounds {
  const points: Point[] = [];
  for (const wall of level.walls) {
    const d = wallDirection(wall);
    const side: Point = [(-d[1] * wall.t) / 2, (d[0] * wall.t) / 2];
    for (const p of [wall.a, wall.b]) points.push(add(p, side), sub(p, side));
  }
  for (const room of level.rooms) points.push(...room.points);
  for (const item of level.items) points.push(...itemPoints(item));
  if (!points.length) return levelBounds(level, margin);
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const x = Math.min(...xs) - margin;
  const y = Math.min(...ys) - margin;
  return { x, y, w: Math.max(...xs) + margin - x, h: Math.max(...ys) + margin - y };
}

export const DEFAULT_CORNER_RADIUS = 0.1;

/** Radius of rounded corners of the plan; zero when corners are square. */
export function planRadius(plan: Plan | undefined): number {
  return plan?.roundCorners ? (plan.cornerRadius ?? DEFAULT_CORNER_RADIUS) : 0;
}

/**
 * Closed path through the points. A radius rounds every corner, or each corner by its own
 * radius when a list is given; a radius never takes more than half of the edges at a corner.
 */
/** True when the segment from p to q runs along the face of one of the walls. */
export function onWallFace(p: Point, q: Point, walls: Wall[]): boolean {
  const mid: Point = [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  return walls.some((wall) => {
    const { at, distance } = projectOnWall(wall, mid);
    return at > 0 && at < wallLength(wall) && distance <= wall.t / 2 + 0.03;
  });
}

/** The room the point lies in; indoor rooms win over outdoor zones drawn around them. */
export function roomAt(level: Level, p: Point): Room | undefined {
  const inside = level.rooms.filter((room) => pointInPolygon(p, room.points));
  return inside.find((room) => !room.outdoor) ?? inside[0];
}

/** Shared length of two straight edges lying on one line, or 0. */
function sharedEdge(a: Point, b: Point, c: Point, d: Point): { from: Point; to: Point } | undefined {
  const horizontal = Math.abs(a[1] - b[1]) < 1e-3 && Math.abs(c[1] - d[1]) < 1e-3 && Math.abs(a[1] - c[1]) < 1e-3;
  const vertical = Math.abs(a[0] - b[0]) < 1e-3 && Math.abs(c[0] - d[0]) < 1e-3 && Math.abs(a[0] - c[0]) < 1e-3;
  if (!horizontal && !vertical) return undefined;
  const axis: 0 | 1 = horizontal ? 0 : 1;
  const lo = Math.max(Math.min(a[axis], b[axis]), Math.min(c[axis], d[axis]));
  const hi = Math.min(Math.max(a[axis], b[axis]), Math.max(c[axis], d[axis]));
  if (hi - lo < 0.1) return undefined;
  const from: Point = axis === 0 ? [lo, a[1]] : [a[0], lo];
  const to: Point = axis === 0 ? [hi, a[1]] : [a[0], hi];
  return { from, to };
}

/**
 * Rooms joined without a wall between them, such as a kitchen open to the living room.
 * Every room maps to the list of rooms its light can reach, itself included.
 */
export function openGroups(level: Level): Map<string, Room[]> {
  const rooms = level.rooms.filter((room) => !room.outdoor);
  const parent = new Map(rooms.map((room) => [room.id, room.id]));
  const find = (id: string): string => {
    let root = id;
    while (parent.get(root) !== root) root = parent.get(root)!;
    return root;
  };
  for (let i = 0; i < rooms.length; i++) {
    for (let j = i + 1; j < rooms.length; j++) {
      const p = rooms[i].points;
      const q = rooms[j].points;
      let open = false;
      for (let k = 0; k < p.length && !open; k++) {
        for (let m = 0; m < q.length && !open; m++) {
          const edge = sharedEdge(p[k], p[(k + 1) % p.length], q[m], q[(m + 1) % q.length]);
          if (edge && !onWallFace(edge.from, edge.to, level.walls)) open = true;
        }
      }
      if (open) parent.set(find(rooms[i].id), find(rooms[j].id));
    }
  }
  const groups = new Map<string, Room[]>();
  for (const room of rooms) {
    const root = find(room.id);
    const group = rooms.filter((other) => find(other.id) === root);
    groups.set(room.id, group);
  }
  return groups;
}

/** Light entities of a room: light points inside it, plus a list kept from plans made before them. */
/** Temperature sensors standing in the room; the room takes its temperature from them. */
export function roomThermometers(level: Level, room: Room): Device[] {
  return (level.devices ?? []).filter(
    (device) =>
      (device.kind === "thermometer" || (device.kind === "sensor" && device.sensorType === "temperature")) &&
      device.entity &&
      pointInPolygon(device.at, room.points),
  );
}

export function roomLights(level: Level, room: Room): string[] {
  const placed = (level.devices ?? [])
    .filter((device) => device.kind === "light" && device.entity && pointInPolygon(deviceCentre(device), room.points))
    .map((device) => device.entity!);
  return [...new Set([...placed, ...(room.lights ?? [])])];
}

export function polygonPath(points: Point[], radius: number | number[] = 0): string {
  const f = (v: number) => v.toFixed(3);
  const radii = Array.isArray(radius) ? radius : points.map(() => radius);
  const cuts = new Map(cornerCuts(points, radii).map((cut) => [cut.index, cut]));
  const parts = points.map((v, i) => {
    const cut = cuts.get(i);
    const move = i ? "L" : "M";
    if (!cut) return `${move}${f(v[0])} ${f(v[1])}`;
    return `${move}${f(cut.a[0])} ${f(cut.a[1])}Q${f(v[0])} ${f(v[1])} ${f(cut.b[0])} ${f(cut.b[1])}`;
  });
  return parts.join("") + "Z";
}

/** Rounded corners of a polygon: where the curve leaves the edge before the corner and joins the next. */
export function cornerCuts(points: Point[], radii: number[]): { index: number; a: Point; v: Point; b: Point }[] {
  const cuts: { index: number; a: Point; v: Point; b: Point }[] = [];
  points.forEach((v, i) => {
    const prev = points[(i + points.length - 1) % points.length];
    const next = points[(i + 1) % points.length];
    const r = Math.min(radii[i] ?? 0, dist(v, prev) / 2, dist(v, next) / 2);
    if (r <= 0) return;
    const towards = (q: Point): Point => {
      const d = dist(v, q) || 1;
      return [v[0] + ((q[0] - v[0]) / d) * r, v[1] + ((q[1] - v[1]) / d) * r];
    };
    cuts.push({ index: i, a: towards(prev), v, b: towards(next) });
  });
  return cuts;
}
