// Drawing of a level as SVG in metres, shared by the card and the editor.
import { css, nothing, svg, type SVGTemplateResult } from "lit";
import {
  CIRCLE_TYPES,
  DEFAULT_CORNER_RADIUS,
  OBSTACLE_TYPES,
  ITEM_ORDER,
  type Item,
  type Level,
  type Opening,
  type Room,
  type Wall,
  type Point,
  DEFAULT_CAMERA_RANGE,
  DEFAULT_FIELD_OF_VIEW,
  DEFAULT_GLOW,
  DEFAULT_RADAR_RANGE,
  DEFAULT_RADAR_VIEW,
  DEFAULT_THROW,
  type Device,
  deviceCentre,
  openGroups,
  roomAt,
  isPowered,
  mapPixel,
  mapToPlan,
  bearingPoint,
  cornerCuts,
  onWallFace,
  polygonPath,
  pointOnWall,
  projectOnWall,
  wallLength,
  wallDirection,
} from "./model";

const n = (v: number): string => v.toFixed(3);

export const PLAN_DEFS = svg`
  <defs>
    <pattern id="fc-lawn" patternUnits="userSpaceOnUse" width="1.6" height="1.6">
      <rect class="fc-lawn-a" width="0.8" height="1.6"></rect>
      <rect class="fc-lawn-b" x="0.8" width="0.8" height="1.6"></rect>
    </pattern>
    <pattern id="fc-veg" patternUnits="userSpaceOnUse" width="0.4" height="0.4">
      <rect class="fc-soil" width="0.4" height="0.4"></rect>
      <path class="fc-veg-row" d="M0.05 0.2H0.35"></path>
    </pattern>
  </defs>
`;

const PATTERNS: Partial<Record<Item["type"], string>> = { lawn: "url(#fc-lawn)", vegetable: "url(#fc-veg)" };

export function renderItem(item: Item, variant = "", radius = 0): SVGTemplateResult {
  // A round obstacle looks like any other piece of furniture.
  const look = item.type === "round_obstacle" ? "obstacle" : item.type;
  const cls = `fc-item fc-${look}${variant}`;
  // Patterns go in the fill attribute: a url() in the shadow stylesheet does not resolve everywhere.
  const pattern = PATTERNS[item.type] ?? null;
  if (CIRCLE_TYPES.includes(item.type) && item.center) {
    const [cx, cy] = item.center;
    const r = (item.diameter ?? 1) / 2;
    if (item.type === "trampoline") {
      return svg`<g data-item=${item.id}>
        <circle class="fc-trampoline-ring" cx=${n(cx)} cy=${n(cy)} r=${n(r)}></circle>
        <circle class="fc-trampoline-mat" cx=${n(cx)} cy=${n(cy)} r=${n(r * 0.8)}></circle>
      </g>`;
    }
    return svg`<circle data-item=${item.id} class=${cls} cx=${n(cx)} cy=${n(cy)} r=${n(r)}></circle>`;
  }
  // Corners chosen on the object win over the plan; square means really square.
  const own = item.corners === "square" ? 0 : item.corners === "round" ? radius || DEFAULT_CORNER_RADIUS : undefined;
  if (item.points) {
    // The same corners as the rectangle it came from: the plan radius, or the small default rounding.
    const rounded = own ?? (radius || (item.type === "hedge" ? 0.2 : 0.05));
    return svg`<path data-item=${item.id} class=${cls} fill=${pattern ?? nothing} d=${polygonPath(item.points, rounded)}></path>`;
  }
  const [x, y, w, h] = item.rect ?? [0, 0, 1, 1];
  const rotation = item.rotation ?? 0;
  const transform = rotation ? `rotate(${rotation} ${n(x + w / 2)} ${n(y + h / 2)})` : "";
  const rounded = own !== undefined
    ? Math.min(own, w / 2, h / 2)
    : radius
    ? Math.min(radius, w / 2, h / 2)
    : item.type === "hedge"
      ? Math.min(0.2, Math.min(w, h) * 0.15)
      : 0.05;
  return svg`<g data-item=${item.id} transform=${transform}>
    <rect class=${cls} fill=${pattern ?? nothing} x=${n(x)} y=${n(y)} width=${n(w)} height=${n(h)} rx=${n(rounded)}></rect>
  </g>`;
}

function renderStairs(room: Room): SVGTemplateResult {
  const xs = room.points.map((p) => p[0]);
  const ys = room.points.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const along = y1 - y0 >= x1 - x0;
  const steps = Math.max(3, Math.round((along ? y1 - y0 : x1 - x0) / 0.25));
  const lines = Array.from({ length: steps - 1 }, (_, i) => {
    const k = (i + 1) / steps;
    return along
      ? svg`<path class="fc-stairs" d="M${n(x0)} ${n(y0 + k * (y1 - y0))}H${n(x1)}"></path>`
      : svg`<path class="fc-stairs" d="M${n(x0 + k * (x1 - x0))} ${n(y0)}V${n(y1)}"></path>`;
  });
  return svg`${lines}`;
}

/** What the entities of a door or window say; without states (editor with Live off) the drawn defaults. */
export function openingState(opening: Opening, states?: States) {
  const contact = opening.contact ? states?.[opening.contact]?.state : undefined;
  const sensed = contact === "on" ? true : contact === "off" ? false : undefined;
  const cover = opening.cover ? states?.[opening.cover] : undefined;
  const position = Number.parseFloat(cover?.attributes.current_position);
  // Share of the window the blind covers: from its position, or all or nothing from its state.
  const closure = Number.isFinite(position)
    ? 1 - Math.min(100, Math.max(0, position)) / 100
    : cover?.state === "closed"
      ? 1
      : cover?.state === "open"
        ? 0
        : undefined;
  return {
    open: sensed ?? opening.drawn !== "closed",
    sensed,
    position: Number.isFinite(position) ? Math.round(position) : undefined,
    closure,
    moving: cover?.state === "opening" || cover?.state === "closing",
  };
}

/** Unit vector from the wall to the outside of a window: the side without an indoor room, unless flipped. */
export function outsideNormal(level: Level, opening: Opening, wall: Wall): [number, number] {
  const d = wallDirection(wall);
  const left: [number, number] = [d[1], -d[0]];
  const centre = pointOnWall(wall, opening.at);
  const probe = wall.t / 2 + 0.3;
  const indoor = (k: number) => {
    const room = roomAt(level, [centre[0] + left[0] * probe * k, centre[1] + left[1] * probe * k]);
    return !!room && !room.outdoor;
  };
  let side = indoor(1) && !indoor(-1) ? -1 : 1;
  if (opening.blindFlip) side = -side;
  return [left[0] * side, left[1] * side];
}

export function renderOpening(opening: Opening, wall: Wall, level: Level, states?: States): SVGTemplateResult {
  const d = wallDirection(wall);
  const half = opening.width / 2;
  const a = pointOnWall(wall, opening.at - half);
  const b = pointOnWall(wall, opening.at + half);
  const line = `M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}`;
  const state = openingState(opening, states);
  if (opening.type === "window") {
    // The blind runs down from the start of the window along its outer face, as long as it covers.
    let blind: unknown = nothing;
    if (opening.cover && state.closure !== undefined && state.closure > 0.01) {
      // Inside the outer half of the wall, so the blind never stands out past its face.
      const out = outsideNormal(level, opening, wall);
      const width = Math.min(0.08, wall.t * 0.35);
      const offset = wall.t / 2 - width / 2 - 0.005;
      const p = [a[0] + out[0] * offset, a[1] + out[1] * offset];
      const q = [p[0] + d[0] * opening.width * state.closure, p[1] + d[1] * opening.width * state.closure];
      blind = svg`<path class="fc-blind ${state.moving ? "moving" : ""}" stroke-width=${n(width)} d="M${n(p[0])} ${n(p[1])}L${n(q[0])} ${n(q[1])}"></path>`;
    }
    return svg`<g data-opening=${opening.id} class=${state.sensed ? "fc-open" : ""}>
      <path class="fc-gap" d=${line} stroke-width=${n(wall.t + 0.02)}></path>
      <path class="fc-window" d=${line}></path>
      ${blind}
    </g>`;
  }
  // The leaf is drawn open at a right angle. Hinge and swing sit on the face of the wall on the
  // side the door opens to, so the drawing fits any wall thickness.
  const side = opening.swingRight ? -1 : 1;
  const normal: [number, number] = [-side * d[1], side * d[0]];
  const face = (p: [number, number]): [number, number] => [p[0] + (normal[0] * wall.t) / 2, p[1] + (normal[1] * wall.t) / 2];
  const hinge = face(opening.hingeEnd ? b : a);
  const free = face(opening.hingeEnd ? a : b);
  const leaf: [number, number] = [hinge[0] + normal[0] * opening.width, hinge[1] + normal[1] * opening.width];
  const u = [leaf[0] - hinge[0], leaf[1] - hinge[1]];
  const v = [free[0] - hinge[0], free[1] - hinge[1]];
  const sweep = u[0] * v[1] - u[1] * v[0] > 0 ? 1 : 0;
  // A shut door lies in the opening along the face of the wall; an open one stands at a right angle.
  if (!state.open) {
    return svg`<g data-opening=${opening.id}>
      <path class="fc-gap" d=${line} stroke-width=${n(wall.t + 0.02)}></path>
      <path class="fc-door shut" d="M${n(hinge[0])} ${n(hinge[1])}L${n(free[0])} ${n(free[1])}"></path>
    </g>`;
  }
  return svg`<g data-opening=${opening.id}>
    <path class="fc-gap" d=${line} stroke-width=${n(wall.t + 0.02)}></path>
    <path class="fc-door" d="M${n(hinge[0])} ${n(hinge[1])}L${n(leaf[0])} ${n(leaf[1])}"></path>
    <path class="fc-door-arc" d="M${n(leaf[0])} ${n(leaf[1])}A${n(opening.width)} ${n(opening.width)} 0 0 ${sweep} ${n(free[0])} ${n(free[1])}"></path>
  </g>`;
}

/** Small text outside each window with a blind or contact: the blind position as Home Assistant gives it, and open or closed. */
export function renderOpeningLabels(level: Level, states: States, size: number): SVGTemplateResult {
  const walls = new Map(level.walls.map((wall) => [wall.id, wall]));
  return svg`${level.openings
    .filter((o) => o.type === "window" && (o.cover || o.contact) && walls.has(o.wall))
    .map((opening) => {
      const wall = walls.get(opening.wall)!;
      const state = openingState(opening, states);
      const parts = [
        opening.cover && state.position !== undefined ? `${state.position}%` : undefined,
        opening.cover && state.position === undefined && state.closure !== undefined ? (state.closure ? "closed" : "open") : undefined,
        state.sensed === undefined ? undefined : state.sensed ? "open" : "closed",
      ].filter(Boolean);
      if (!parts.length) return nothing;
      const out = outsideNormal(level, opening, wall);
      const centre = pointOnWall(wall, opening.at);
      const away = wall.t / 2 + 0.12 + size * 0.7;
      return svg`<text class="fc-opening-label ${state.sensed ? "alert" : ""}" x=${n(centre[0] + out[0] * away)} y=${n(centre[1] + out[1] * away)}
        font-size=${n(size)}>${parts.join(" · ")}</text>`;
    })}`;
}

/**
 * Fill of the places where wall ends meet. Walls are cut square at their ends, so nothing sticks
 * out past the wall they meet. Where straight walls meet, the fill is the crossing of their
 * bands: as wide as the vertical wall and as tall as the horizontal one, so walls of different
 * thickness still meet flush on both faces. With round corners an L corner gets its outer edge
 * rounded within that rectangle; slanted walls meet with a disc.
 */
function renderJoints(walls: Wall[], radius = 0): SVGTemplateResult[] {
  const ends = new Map<string, { p: [number, number]; walls: Wall[] }>();
  for (const wall of walls) {
    for (const p of [wall.a, wall.b]) {
      const key = `${Math.round(p[0] * 1000)},${Math.round(p[1] * 1000)}`;
      const entry = ends.get(key) ?? { p, walls: [] };
      entry.walls.push(wall);
      ends.set(key, entry);
    }
  }
  const joints: SVGTemplateResult[] = [];
  for (const { p, walls: meeting } of ends.values()) {
    if (meeting.length < 2) continue;
    const horizontal = meeting.filter((wall) => Math.abs(wall.a[1] - wall.b[1]) < 1e-6);
    const vertical = meeting.filter((wall) => Math.abs(wall.a[0] - wall.b[0]) < 1e-6 && !horizontal.includes(wall));
    const slanted = meeting.filter((wall) => !horizontal.includes(wall) && !vertical.includes(wall));
    if (horizontal.length && vertical.length) {
      const width = Math.max(...vertical.map((wall) => wall.t));
      const height = Math.max(...horizontal.map((wall) => wall.t));
      const x0 = p[0] - width / 2;
      const y0 = p[1] - height / 2;
      if (radius && horizontal.length === 1 && vertical.length === 1) {
        // The walls run away from the corner; the outer edge is on the opposite side of both.
        const h = horizontal[0];
        const v = vertical[0];
        const awayX = Math.sign((Math.abs(h.a[0] - p[0]) < 1e-3 ? h.b[0] : h.a[0]) - p[0]) || 1;
        const awayY = Math.sign((Math.abs(v.a[1] - p[1]) < 1e-3 ? v.b[1] : v.a[1]) - p[1]) || 1;
        joints.push(svg`<path class="fc-joint" d=${roundedCorner(x0, y0, width, height, -awayX, -awayY, Math.min(radius, width, height))}></path>`);
      } else {
        joints.push(svg`<rect class="fc-joint" x=${n(x0)} y=${n(y0)} width=${n(width)} height=${n(height)}></rect>`);
      }
    }
    if (slanted.length) {
      const r = Math.max(...slanted.map((wall) => wall.t)) / 2;
      joints.push(svg`<circle class="fc-joint" cx=${n(p[0])} cy=${n(p[1])} r=${n(r)}></circle>`);
    }
  }
  return joints;
}

/**
 * Corner radii of a room floor: only corners whose both edges lie on walls are rounded, so an
 * open plan of rooms side by side keeps one continuous floor.
 */
export function roomRadii(room: Room, walls: Wall[], radius: number): number[] {
  if (!radius) return room.points.map(() => 0);
  const pts = room.points;
  const along = pts.map((p, i) => onWallFace(p, pts[(i + 1) % pts.length], walls));
  return pts.map((_, i) => (along[i] && along[(i + pts.length - 1) % pts.length] ? radius : 0));
}

/**
 * Wall-coloured fill between a rounded floor corner and the walls, so the corner looks moulded.
 * Only at corners turning inwards: where a wall juts into the room the rounded floor already
 * follows the rounded corner of the wall, and a fill there would square it again.
 */
function renderFillets(points: Point[], radii: number[]): SVGTemplateResult[] {
  // Sign of the area tells which way the room runs round; a corner turning the same way is convex.
  const area = points.reduce((sum, p, i) => {
    const q = points[(i + 1) % points.length];
    return sum + p[0] * q[1] - q[0] * p[1];
  }, 0);
  const convex = (i: number) => {
    const p = points[(i + points.length - 1) % points.length];
    const v = points[i];
    const q = points[(i + 1) % points.length];
    const turn = (v[0] - p[0]) * (q[1] - v[1]) - (v[1] - p[1]) * (q[0] - v[0]);
    return turn * area > 0;
  };
  return cornerCuts(points, radii).filter(({ index }) => convex(index)).map(
    ({ a, v, b }) =>
      svg`<path class="fc-fillet" d="M${n(a[0])} ${n(a[1])}L${n(v[0])} ${n(v[1])}L${n(b[0])} ${n(b[1])}Q${n(v[0])} ${n(v[1])} ${n(a[0])} ${n(a[1])}Z"></path>`,
  );
}

/** True when the wall end touches no other wall: neither another end nor the body of a wall. */
function isFreeEnd(p: [number, number], wall: Wall, walls: Wall[]): boolean {
  for (const other of walls) {
    if (other === wall) continue;
    if (Math.hypot(other.a[0] - p[0], other.a[1] - p[1]) < 1e-3 || Math.hypot(other.b[0] - p[0], other.b[1] - p[1]) < 1e-3) return false;
    const { at, distance } = projectOnWall(other, p);
    if (distance <= other.t / 2 + 1e-3 && at > 0 && at < wallLength(other)) return false;
  }
  return true;
}

/**
 * A wall as a band cut square at its ends. With rounded corners its free ends get the corner
 * radius, at most half the thickness, which makes a thin wall end in a half disc.
 */
function renderWall(wall: Wall, walls: Wall[], radius: number): SVGTemplateResult {
  const d = wallDirection(wall);
  const half = wall.t / 2;
  const side: [number, number] = [-d[1] * half, d[0] * half];
  const corners: [number, number][] = [
    [wall.a[0] + side[0], wall.a[1] + side[1]],
    [wall.b[0] + side[0], wall.b[1] + side[1]],
    [wall.b[0] - side[0], wall.b[1] - side[1]],
    [wall.a[0] - side[0], wall.a[1] - side[1]],
  ];
  const end = Math.min(radius, half);
  const ra = radius && isFreeEnd(wall.a, wall, walls) ? end : 0;
  const rb = radius && isFreeEnd(wall.b, wall, walls) ? end : 0;
  return svg`<path data-wall=${wall.id} class="fc-wall" d=${polygonPath(corners, [ra, rb, rb, ra])}></path>`;
}

/** A rectangle with one corner rounded: the corner on side sx (-1 left, 1 right) and sy (-1 top, 1 bottom). */
function roundedCorner(x: number, y: number, w: number, h: number, sx: number, sy: number, r: number): string {
  const corners: [number, number][] = [
    [x, y],
    [x + w, y],
    [x + w, y + h],
    [x, y + h],
  ];
  const target = corners.findIndex(([cx, cy]) => (sx < 0 ? cx === x : cx === x + w) && (sy < 0 ? cy === y : cy === y + h));
  const parts: string[] = [];
  corners.forEach(([cx, cy], i) => {
    if (i !== target) {
      parts.push(`${parts.length ? "L" : "M"}${n(cx)} ${n(cy)}`);
      return;
    }
    const [px, py] = corners[(i + 3) % 4];
    const [qx, qy] = corners[(i + 1) % 4];
    const towards = (ax: number, ay: number) => {
      const d = Math.hypot(ax - cx, ay - cy) || 1;
      return [cx + ((ax - cx) / d) * r, cy + ((ay - cy) / d) * r];
    };
    const [sxp, syp] = towards(px, py);
    const [exq, eyq] = towards(qx, qy);
    parts.push(`${parts.length ? "L" : "M"}${n(sxp)} ${n(syp)}`);
    parts.push(`A${n(r)} ${n(r)} 0 0 1 ${n(exq)} ${n(eyq)}`);
  });
  return parts.join("") + "Z";
}

/** The level without live states: items, floors, walls, openings. */
/** Outline of the ground a sprinkler waters: a full disc or a sector of its arc. */
export function sprinklerArea(device: Device): string {
  return sectorPath(device.at, device.heading ?? 0, device.arc ?? 360, device.radius ?? DEFAULT_THROW);
}

/** A sector from a compass bearing over an arc in degrees, or a full disc. */
export function sectorPath(centre: [number, number], start: number, arcDegrees: number, r: number): string {
  const [cx, cy] = centre;
  const arc = Math.min(360, Math.max(1, arcDegrees));
  if (arc >= 359.9) {
    return `M${n(cx - r)} ${n(cy)}A${n(r)} ${n(r)} 0 1 1 ${n(cx + r)} ${n(cy)}A${n(r)} ${n(r)} 0 1 1 ${n(cx - r)} ${n(cy)}Z`;
  }
  const a = bearingPoint(centre, start, r);
  const b = bearingPoint(centre, start + arc, r);
  return `M${n(cx)} ${n(cy)}L${n(a[0])} ${n(a[1])}A${n(r)} ${n(r)} 0 ${arc > 180 ? 1 : 0} 1 ${n(b[0])} ${n(b[1])}Z`;
}

const CAMERA_GLOW = 1.6;

/** What a camera sees: a cone around its heading, as wide as its field of view. */
export function cameraView(device: Device): string {
  const fov = device.arc ?? DEFAULT_FIELD_OF_VIEW;
  return sectorPath(device.at, (device.heading ?? 0) - fov / 2, fov, device.radius ?? DEFAULT_CAMERA_RANGE);
}

/**
 * A short, faint grey glow in front of a camera: only a sign that it looks that way, not the
 * area it covers, whatever range is set for it.
 */
export function renderCameraGlow(device: Device, id: string): SVGTemplateResult {
  const [x, y] = device.at;
  const r = CAMERA_GLOW;
  const fov = device.arc ?? DEFAULT_FIELD_OF_VIEW;
  const shape = sectorPath(device.at, (device.heading ?? 0) - fov / 2, fov, r);
  return svg`
    <defs>
      <radialGradient id=${id} gradientUnits="userSpaceOnUse" cx=${n(x)} cy=${n(y)} r=${n(r)}>
        <stop offset="0" class="fc-camera-glow-start"></stop>
        <stop offset="1" class="fc-camera-glow-end"></stop>
      </radialGradient>
    </defs>
    <path class="fc-camera-view" fill="url(#${id})" d=${shape}></path>
  `;
}

/** Field of a radar: a faint sector over its range and angle, shown while it is edited. */
export function radarView(device: Device): string {
  const fov = device.arc ?? DEFAULT_RADAR_VIEW;
  return sectorPath(device.at, (device.heading ?? 0) - fov / 2, fov, device.radius ?? DEFAULT_RADAR_RANGE);
}

/** A small radar box turned to where it looks, with waves in front of it. */
export function renderRadarIcon(device: Device, size: number): SVGTemplateResult {
  const [x, y] = device.at;
  return svg`<g class="fc-radar" transform="translate(${n(x)} ${n(y)}) rotate(${n((device.heading ?? 0) - 90)}) scale(${n(size)})">
    <rect x="-0.9" y="-0.7" width="0.8" height="1.4" rx="0.25"></rect>
    <path d="M0.2 -0.55A0.75 0.75 0 0 1 0.2 0.55M0.55 -0.85A1.2 1.2 0 0 1 0.55 0.85"></path>
  </g>`;
}

/** A person a radar sees: a dot of about a shoulder width with a soft halo. */
export function renderPerson(at: Point, status = "seen"): SVGTemplateResult {
  // Placed by a CSS transform, so the dot glides between the readings of the radar.
  return svg`<g class="fc-person ${status}" style="transform:translate(${n(at[0])}px,${n(at[1])}px)">
    <circle class="halo" r="0.45"></circle>
    <circle r="0.2"></circle>
  </g>`;
}

/** An object a camera sees: a person as a dot, a car as a rounded box, an animal as a small dot. */
export function renderCameraObject(at: Point, label: string, stationary: boolean): SVGTemplateResult {
  const cls = `fc-seen ${label === "person" ? "person" : label === "car" ? "car" : "animal"} ${stationary ? "still" : ""}`;
  const shape =
    label === "car"
      ? svg`<rect x="-0.9" y="-0.45" width="1.8" height="0.9" rx="0.25"></rect>`
      : svg`<circle class="halo" r=${label === "person" ? 0.45 : 0.3}></circle><circle r=${label === "person" ? 0.2 : 0.13}></circle>`;
  return svg`<g class=${cls} style="transform:translate(${n(at[0])}px,${n(at[1])}px)">${shape}</g>`;
}

/** A small camera body turned to where it looks. */
export function renderCameraIcon(device: Device, size: number): SVGTemplateResult {
  const [x, y] = device.at;
  return svg`<g class="fc-camera" transform="translate(${n(x)} ${n(y)}) rotate(${n((device.heading ?? 0) - 90)}) scale(${n(size)})">
    <rect x="-1" y="-0.65" width="1.4" height="1.3" rx="0.3"></rect>
    <path d="M0.4 -0.35L1 -0.7V0.7L0.4 0.35Z"></path>
  </g>`;
}

/**
 * A sprinkler as the card shows it. While it waters, a rotor sweeps a stream back and forth
 * along its arc (round and round on a full circle) and a spray nozzle shimmers over all of it.
 */
export function renderSpray(device: Device, watering: boolean): SVGTemplateResult {
  const r = device.radius ?? DEFAULT_THROW;
  const [cx, cy] = device.at;
  const arc = Math.min(360, device.arc ?? 360);
  const heading = device.heading ?? 0;
  if (!watering) return svg``;
  const full = arc >= 359.9;
  const sweep = full ? `${heading};${heading + 360}` : `${heading};${heading + arc};${heading}`;
  const stream =
    (device.nozzle ?? "rotor") === "rotor"
      ? svg`<g>
          <path class="fc-stream" d="M${n(cx)} ${n(cy)}L${n(cx)} ${n(cy - r)}"></path>
          <animateTransform attributeName="transform" type="rotate" values=${sweep.split(";").map((v) => `${v} ${n(cx)} ${n(cy)}`).join(";")}
            dur=${full ? "20s" : `${Math.max(6, arc / 15).toFixed(1)}s`} repeatCount="indefinite" calcMode="linear"></animateTransform>
        </g>`
      : nothing;
  return svg`<path class="fc-water ${device.nozzle === "spray" ? "spray" : ""}" d=${sprinklerArea(device)}></path>${stream}`;
}

/** Live place of a mower on the plan, from the attributes of its map camera. */
export interface MowerPlace {
  at: [number, number];
  /** Direction of travel in degrees on the plan, 0 east, clockwise; unknown while docked. */
  heading?: number;
  dock?: [number, number];
}

export function mowerPlace(mower: Device, attributes: Record<string, any> | undefined): MowerPlace | undefined {
  if (!mower.projection || !attributes) return undefined;
  // The runtime pose follows the mower every few seconds while it works; the reported position
  // can stay at its last known place for hours, so it only stands in when there is no pose.
  const finite = (...values: unknown[]) => values.every((v) => v !== null && v !== undefined && Number.isFinite(Number(v)));
  const live = finite(attributes.runtime_pose_x, attributes.runtime_pose_y);
  const x = Number(live ? attributes.runtime_pose_x : attributes.position_x);
  const y = Number(live ? attributes.runtime_pose_y : attributes.position_y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return undefined;
  const at = mapToPlan(mower, mapPixel(mower.projection, x, y));
  const place: MowerPlace = { at };
  const heading = Number(live ? attributes.runtime_heading_deg : attributes.position_heading);
  if (finite(live ? attributes.runtime_heading_deg : attributes.position_heading)) {
    // Heading in the map frame, turned into the plan frame by mapping a point ahead of the mower.
    const r = (heading * Math.PI) / 180;
    const ahead = mapToPlan(mower, mapPixel(mower.projection, x + Math.cos(r) * 300, y + Math.sin(r) * 300));
    place.heading = (Math.atan2(ahead[1] - at[1], ahead[0] - at[0]) * 180) / Math.PI;
  }
  const charger = finite(attributes.charger_x, attributes.charger_y)
    ? ([Number(attributes.charger_x), Number(attributes.charger_y)] as Point)
    : mower.dock;
  if (charger) place.dock = mapToPlan(mower, mapPixel(mower.projection, charger[0], charger[1]));
  return place;
}

/** The mower at its real size, pointing where it drives, coloured by what it does. */
export function renderMower(place: MowerPlace, state: string | undefined, trail: [number, number][] = []): SVGTemplateResult {
  const [x, y] = place.at;
  const status =
    state === "mowing" ? "mowing" : state === "error" ? "error" : state === "returning" || state === "paused" ? "busy" : "idle";
  return svg`
    ${place.dock
      ? svg`<g class="fc-dock" transform="translate(${n(place.dock[0])} ${n(place.dock[1])})">
          <rect x="-0.25" y="-0.18" width="0.5" height="0.36" rx="0.08"></rect>
          <path d="M0.02 -0.11L-0.06 0.02H0.02L-0.02 0.11L0.07 -0.02H-0.01Z"></path>
        </g>`
      : nothing}
    ${trail.length > 1
      ? svg`<polyline class="fc-trail" points=${trail.map((p) => `${n(p[0])},${n(p[1])}`).join(" ")}></polyline>`
      : nothing}
    <g class="fc-mower ${status}" transform="translate(${n(x)} ${n(y)}) rotate(${n(place.heading ?? 0)})">
      ${mowerBody(place.heading !== undefined)}
    </g>
  `;
}

/** Top view of a robot mower, 66 cm long, front to +x: four wheels, a shell rounded at the front, the blade disc and the lidar. */
function mowerBody(withFront: boolean): SVGTemplateResult {
  return svg`
    <rect class="wheel" x="-0.31" y="-0.27" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="-0.31" y="0.2" width="0.17" height="0.07" rx="0.025"></rect>
    <rect class="wheel" x="0.13" y="-0.25" width="0.12" height="0.06" rx="0.02"></rect>
    <rect class="wheel" x="0.13" y="0.19" width="0.12" height="0.06" rx="0.02"></rect>
    <path class="shell" d="M-0.3 -0.21H0.17Q0.35 -0.21 0.35 0Q0.35 0.21 0.17 0.21H-0.3Q-0.35 0.21 -0.35 0.16V-0.16Q-0.35 -0.21 -0.3 -0.21Z"></path>
    <circle class="blade" r="0.11"></circle>
    ${withFront ? svg`<circle class="lidar" cx="0.2" r="0.05"></circle>` : nothing}
  `;
}

/**
 * Battery over the state, written beside a mower or vacuum so they move with it as one block; on its
 * left when the right edge is near. A low battery is red.
 */
export function renderDeviceTag(at: Point, battery: string | undefined, state: string, size: number, low: boolean, right = Infinity): SVGTemplateResult {
  const gap = size * 1.6;
  const widest = Math.max(battery?.length ?? 0, state.length);
  const left = at[0] + gap + widest * size * 0.55 > right;
  const x = n(at[0] + (left ? -gap : gap));
  const lines = battery ? 2 : 1;
  // The block is centred on the device: two lines a line height apart.
  const top = at[1] - ((lines - 1) * size * 1.15) / 2;
  return svg`<text class="fc-device-tag" text-anchor=${left ? "end" : "start"} font-size=${n(size)}>
    ${battery ? svg`<tspan class="battery ${low ? "low" : ""}" x=${x} y=${n(top)}>${battery}</tspan>` : nothing}
    <tspan x=${x} y=${n(top + (lines - 1) * size * 1.15)}>${state}</tspan>
  </text>`;
}

/**
 * A sensor on the plan: an optional header, its main value in large type and up to two smaller values
 * under it, all centred on where it stands.
 */
export function renderSensor(
  at: Point,
  header: string | undefined,
  main: string | undefined,
  lines: string[],
  valueSize: number,
  subSize: number,
  unset = false,
): SVGTemplateResult {
  const rows: { cls: string; text: string; size: number; height: number }[] = [
    ...(header ? [{ cls: "header", text: header, size: subSize, height: subSize * 1.15 }] : []),
    { cls: "value", text: main ?? "–", size: valueSize, height: valueSize * 1.05 },
    ...lines.map((text) => ({ cls: "sub", text, size: subSize, height: subSize * 1.15 })),
  ];
  let y = -rows.reduce((sum, row) => sum + row.height, 0) / 2;
  return svg`<g class="fc-thermometer ${unset ? "unset" : ""}" transform="translate(${n(at[0])} ${n(at[1])})">
    ${rows.map((row) => {
      const middle = y + row.height / 2;
      y += row.height;
      return svg`<text class=${row.cls} y=${n(middle)} font-size=${n(row.size)}>${row.text}</text>`;
    })}
  </g>`;
}

/** Text sizes in metres of a reading: its value and the line under it, as large on screen as the card shows them. */
export const VALUE_PX = 15;
export const NAME_PX = 10;
export function readingSizes(pxPerMetre: number): { value: number; sub: number } {
  return { value: Math.max(0.4, VALUE_PX / pxPerMetre), sub: Math.max(0.26, NAME_PX / pxPerMetre) };
}

/** A screen (projector, TV) as a line on the plan; lit while it is on. */
export function renderScreen(device: Device, on: boolean): SVGTemplateResult {
  const to = device.to ?? [device.at[0] + 2, device.at[1]];
  const d = `M${n(device.at[0])} ${n(device.at[1])}L${n(to[0])} ${n(to[1])}`;
  return svg`<g class="fc-screen ${on ? "on" : ""}"><path class="cloth" d=${d}></path></g>`;
}

export const DEFAULT_SCREEN_THROW = 3;
export const DEFAULT_SCREEN_SPREAD = 50;

/**
 * Area the light of a screen falls on: from the screen into the room by its throw, on the side with a
 * room unless flipped, widening at both edges by half the spread angle.
 */
export function screenLight(level: Level, device: Device): Point[] {
  const a = device.at;
  const b = device.to ?? [a[0] + 2, a[1]];
  const length = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  const left: Point = [(b[1] - a[1]) / length, -(b[0] - a[0]) / length];
  const mid: Point = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const indoor = (k: number) => {
    const room = roomAt(level, [mid[0] + left[0] * 0.5 * k, mid[1] + left[1] * 0.5 * k]);
    return !!room && !room.outdoor;
  };
  let side = !indoor(1) && indoor(-1) ? -1 : 1;
  if (device.flip) side = -side;
  const reach = device.radius ?? DEFAULT_SCREEN_THROW;
  const out: Point = [left[0] * side * reach, left[1] * side * reach];
  // Each edge of the light leans outwards by half the spread.
  const widen = Math.tan((((device.arc ?? DEFAULT_SCREEN_SPREAD) / 2) * Math.PI) / 180) * reach;
  const along: Point = [(b[0] - a[0]) / length, (b[1] - a[1]) / length];
  return [
    a,
    b,
    [b[0] + out[0] + along[0] * widen, b[1] + out[1] + along[1] * widen],
    [a[0] + out[0] - along[0] * widen, a[1] + out[1] - along[1] * widen],
  ];
}

/** Light of every projector screen that is on, fading away from the screen and stopped by the walls of its room. */
export function renderScreenGlows(level: Level, states: States, prefix: string): SVGTemplateResult | typeof nothing {
  const screens = (level.devices ?? []).filter(
    (device) => device.kind === "screen" && device.entity && isPowered(states[device.entity]?.state),
  );
  if (!screens.length) return nothing;
  const groups = openGroups(level);
  const id = (key: string) => `${prefix}-${level.id}-${key}`.replace(/[^a-zA-Z0-9_-]/g, "_");
  return svg`${screens.map((screen) => {
    const area = screenLight(level, screen);
    const near: Point = [(area[0][0] + area[1][0]) / 2, (area[0][1] + area[1][1]) / 2];
    const far: Point = [(area[2][0] + area[3][0]) / 2, (area[2][1] + area[3][1]) / 2];
    const room = roomAt(level, [(near[0] + far[0]) / 2, (near[1] + far[1]) / 2]);
    const reach = room ? (groups.get(room.id) ?? [room]) : [];
    return svg`
      <defs>
        <linearGradient id=${id(`screen-${screen.id}`)} gradientUnits="userSpaceOnUse" x1=${n(near[0])} y1=${n(near[1])} x2=${n(far[0])} y2=${n(far[1])}>
          <stop offset="0" style="stop-color:var(--fc-screen-light);stop-opacity:0.45"></stop>
          <stop offset="1" style="stop-color:var(--fc-screen-light);stop-opacity:0"></stop>
        </linearGradient>
        ${reach.length
          ? svg`<clipPath id=${id(`screen-clip-${screen.id}`)}>${reach.map((r) => svg`<path d=${polygonPath(r.points)}></path>`)}</clipPath>`
          : nothing}
      </defs>
      <path class="glow" d=${polygonPath(area)} fill="url(#${id(`screen-${screen.id}`)})"
        clip-path=${reach.length ? `url(#${id(`screen-clip-${screen.id}`)})` : nothing}></path>`;
  })}`;
}

/** A sensor on the plan: its readings in a small rounded box. */
/** Top view of a robot vacuum, 35 cm across: round body, front bumper, laser turret. */
function vacuumBody(): SVGTemplateResult {
  return svg`
    <circle class="body" r="0.175"></circle>
    <path class="bumper" d="M-0.155 -0.06H0.155"></path>
    <rect class="turret" x="-0.05" y="0.0" width="0.1" height="0.08" rx="0.02"></rect>
  `;
}

/** A vacuum shown where its dock is on the plan, for placing and calibrating it in the editor. */
export function renderVacuumMarker(at: Point, size: number): SVGTemplateResult {
  return svg`<g class="fc-vacuum idle" transform="translate(${n(at[0])} ${n(at[1])}) scale(${n(size)})">${vacuumBody()}</g>`;
}

/** A robot vacuum at its real size (35 cm), coloured by what it does. */
/** Direction of travel in degrees (0 east, clockwise) from the last step of a track at least 5 cm long; undefined before one. */
export function trackHeading(track: Point[]): number | undefined {
  const last = track.at(-1);
  if (!last) return undefined;
  for (let i = track.length - 2; i >= 0; i--) {
    const p = track[i];
    if (Math.hypot(last[0] - p[0], last[1] - p[1]) >= 0.05) return (Math.atan2(last[1] - p[1], last[0] - p[0]) * 180) / Math.PI;
  }
  return undefined;
}

export function renderVacuum(
  at: Point | undefined,
  dock: Point | undefined,
  state: string | undefined,
  trail: Point[] = [],
  heading?: number,
): SVGTemplateResult {
  const status =
    state === "cleaning" ? "mowing" : state === "error" ? "error" : state === "returning" || state === "paused" ? "busy" : "idle";
  return svg`
    ${dock
      ? svg`<g class="fc-dock" transform="translate(${n(dock[0])} ${n(dock[1])})">
          <rect x="-0.2" y="-0.14" width="0.4" height="0.28" rx="0.06"></rect>
          <path d="M0.02 -0.09L-0.05 0.02H0.02L-0.02 0.09L0.06 -0.02H-0.01Z"></path>
        </g>`
      : nothing}
    ${trail.length > 1
      ? svg`<polyline class="fc-trail vacuum" points=${trail.map((p) => `${n(p[0])},${n(p[1])}`).join(" ")}></polyline>`
      : nothing}
    ${at
      ? // The bumper of the body faces up; turned so it leads in the direction of travel.
        svg`<g class="fc-vacuum ${status}" transform="translate(${n(at[0])} ${n(at[1])}) rotate(${n((heading ?? -90) + 90)})">${vacuumBody()}</g>`
      : nothing}
  `;
}

type States = Record<string, { state: string; attributes: Record<string, any> } | undefined>;

/**
 * Glow of every light that is on, in its colour and brightness. The glow is clipped to the
 * room of the light together with the rooms open to it, so it stops at walls, not at the
 * border of an open plan.
 */
export function renderGlows(level: Level, states: States, prefix: string): SVGTemplateResult | typeof nothing {
  const lights = (level.devices ?? []).filter((device) => device.kind === "light" && device.entity && states[device.entity]?.state === "on");
  if (!lights.length) return nothing;
  const groups = openGroups(level);
  const clips = new Map<string, Room[]>();
  const glows = lights.map((light) => {
    const room = roomAt(level, deviceCentre(light));
    const reach = room ? (groups.get(room.id) ?? [room]) : [];
    const key = reach.map((r) => r.id).sort().join("+");
    if (key) clips.set(key, reach);
    const state = states[light.entity!];
    const rgb = state?.attributes.rgb_color as number[] | undefined;
    const colour = rgb ? `rgb(${rgb.join(",")})` : "var(--fc-light)";
    const brightness = Number(state?.attributes.brightness ?? 255) / 255;
    return { light, key, colour, opacity: 0.25 + 0.4 * brightness };
  });
  const id = (key: string) => `${prefix}-${level.id}-${key}`.replace(/[^a-zA-Z0-9_-]/g, "_");
  return svg`
    <defs>
      ${[...clips].map(
        ([key, rooms]) =>
          svg`<clipPath id=${id(`clip-${key}`)}>${rooms.map((r) => svg`<path d=${polygonPath(r.points)}></path>`)}</clipPath>`,
      )}
      ${glows
        .filter(({ light }) => light.to)
        .map(
          ({ light }) => svg`<filter id=${id(`blur-${light.id}`)} filterUnits="userSpaceOnUse" x="-1000" y="-1000" width="2000" height="2000">
            <feGaussianBlur stdDeviation=${((light.radius ?? DEFAULT_GLOW) * 0.3).toFixed(3)}></feGaussianBlur>
          </filter>`,
        )}
      ${glows.map(
        ({ light, colour, opacity }) => svg`<radialGradient id=${id(`glow-${light.id}`)}>
          <stop offset="0" style="stop-color:${colour};stop-opacity:${opacity.toFixed(2)}"></stop>
          <stop offset="1" style="stop-color:${colour};stop-opacity:0"></stop>
        </radialGradient>`,
      )}
    </defs>
    ${glows.map(({ light, key, colour, opacity }) => {
      const clip = key ? `url(#${id(`clip-${key}`)})` : nothing;
      if (light.to) {
        // A line light glows as a soft band along its length.
        return svg`<g clip-path=${clip}>
          <path class="glow" d="M${light.at[0]} ${light.at[1]}L${light.to[0]} ${light.to[1]}"
            style="stroke:${colour};stroke-opacity:${opacity.toFixed(2)};stroke-width:${((light.radius ?? DEFAULT_GLOW) * 0.9).toFixed(3)}px;stroke-linecap:round;fill:none"
            filter="url(#${id(`blur-${light.id}`)})"></path>
        </g>`;
      }
      return svg`<circle class="glow" cx=${light.at[0]} cy=${light.at[1]} r=${light.radius ?? DEFAULT_GLOW}
        fill="url(#${id(`glow-${light.id}`)})" clip-path=${clip}></circle>`;
    })}
  `;
}


export function renderLevel(
  level: Level,
  states?: States,
  radius = 0,
  under: unknown = nothing,
): SVGTemplateResult {
  const items = [...level.items].sort((p, q) => ITEM_ORDER.indexOf(p.type) - ITEM_ORDER.indexOf(q.type));
  const walls = new Map(level.walls.map((wall) => [wall.id, wall]));
  const ground = items.filter((item) => !OBSTACLE_TYPES.includes(item.type));
  const obstacles = items.filter((item) => OBSTACLE_TYPES.includes(item.type));
  return svg`
    ${ground.map((item) => renderItem(item, "", radius))}
    ${level.rooms.map((room) => {
      const radii = roomRadii(room, level.walls, room.outdoor ? 0 : radius);
      return svg`<path data-room=${room.id} class=${room.outdoor ? "fc-zone" : "fc-floor"} d=${polygonPath(room.points, radii)}></path>
        ${room.outdoor ? nothing : renderFillets(room.points, radii)}`;
    })}
    ${level.rooms.filter((room) => room.stairs).map(renderStairs)}
    ${obstacles.map((item) => renderItem(item, "-edge", radius))} ${obstacles.map((item) => renderItem(item, "", radius))}
    ${under} ${level.walls.map((wall) => renderWall(wall, level.walls, radius))}
    ${renderJoints(level.walls, radius)}
    ${level.openings.filter((o) => walls.has(o.wall)).map((o) => renderOpening(o, walls.get(o.wall)!, level, states))}
  `;
}

export const planStyles = css`
  :host {
    --fc-background: #10151b;
    --fc-floor: #1b2129;
    --fc-wall: #b8bfc7;
    --fc-window: #4f8fea;
    --fc-label: #8b95a1;
    --fc-value: #e6ebf0;
    --fc-obstacle: #353e4a;
    --fc-obstacle-edge: #4f5a67;
    --fc-lawn-a: #1b2d21;
    --fc-lawn-b: #1e3224;
    --fc-hedge: #234a2d;
    --fc-soil: #33291f;
    --fc-paving: #262c33;
    --fc-terrace: #2f353d;
    --fc-wood: #5d4631;
    --fc-glass: #7fb3d5;
    --fc-trampoline: #2563b8;
    --fc-light: #ffc94d;
    --fc-water: #4fc3f7;
    --fc-mower: #66bb6a;
    --fc-screen-light: #bbdefb;
    --fc-camera-glow: #c9d1da;
    --fc-alert: #ff9f43;
    --fc-presence: #4fc3f7;
  }
  .fc-floor {
    fill: var(--fc-floor);
    /* Hides the hairline between floors of an open plan that meet edge to edge. */
    stroke: var(--fc-floor);
    stroke-width: 0.02;
  }
  .fc-zone {
    fill: transparent;
  }
  .fc-wall,
  .fc-fillet {
    fill: var(--fc-wall);
  }
  .fc-joint {
    fill: var(--fc-wall);
    pointer-events: none;
  }
  .fc-gap {
    fill: none;
    stroke: var(--fc-floor);
    stroke-linecap: butt;
  }
  .fc-window {
    fill: none;
    stroke: var(--fc-window);
    stroke-width: 0.07;
  }
  .fc-open .fc-window {
    stroke: var(--fc-alert);
  }
  .fc-blind {
    stroke: var(--fc-label);
    stroke-linecap: butt;
    opacity: 0.85;
  }
  .fc-blind.moving {
    animation: fc-blind 1s ease-in-out infinite alternate;
  }
  @keyframes fc-blind {
    to {
      opacity: 0.3;
    }
  }
  .fc-opening-label {
    fill: var(--fc-label);
    opacity: 0.8;
    text-anchor: middle;
    dominant-baseline: central;
    pointer-events: none;
  }
  .fc-opening-label.alert {
    fill: var(--fc-alert);
    opacity: 1;
  }
  .fc-door.shut {
    opacity: 0.8;
  }
  .fc-door {
    stroke: var(--fc-wall);
    stroke-width: 0.03;
    opacity: 0.6;
  }
  .fc-door-arc {
    fill: none;
    stroke: var(--fc-wall);
    stroke-width: 0.015;
    stroke-dasharray: 0.06 0.05;
    opacity: 0.4;
  }
  .fc-stairs {
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.025;
    /* Clicks go through the treads to the stairs underneath. */
    pointer-events: none;
  }
  .fc-lawn-a {
    fill: var(--fc-lawn-a);
  }
  .fc-lawn-b {
    fill: var(--fc-lawn-b);
  }
  .fc-paving {
    fill: var(--fc-paving);
  }
  .fc-terrace {
    fill: var(--fc-terrace);
  }
  .fc-bed,
  .fc-soil {
    fill: var(--fc-soil);
  }
  .fc-hedge {
    fill: var(--fc-hedge);
  }
  .fc-veg-row {
    stroke: var(--fc-hedge);
    stroke-width: 0.1;
    stroke-linecap: round;
  }
  .fc-greenhouse {
    fill: var(--fc-glass);
    fill-opacity: 0.22;
    stroke: var(--fc-glass);
    stroke-width: 0.04;
  }
  .fc-shelter,
  .fc-garden_house {
    fill: var(--fc-wood);
  }
  .fc-manhole {
    fill: var(--fc-paving);
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.05;
  }
  .fc-trampoline-ring {
    fill: var(--fc-trampoline);
  }
  .fc-trampoline-mat {
    fill: #0b0e12;
  }
  /* Obstacles are drawn twice: outlines first, fills over them, so overlapping ones share one outline. */
  .fc-obstacle-edge {
    fill: var(--fc-obstacle-edge);
    stroke: var(--fc-obstacle-edge);
    stroke-width: 0.04;
    pointer-events: none;
  }
  .fc-obstacle {
    fill: var(--fc-obstacle);
  }
  .fc-water {
    fill: var(--fc-water);
    fill-opacity: 0.16;
    stroke: var(--fc-water);
    stroke-opacity: 0.35;
    stroke-width: 0.03;
    pointer-events: none;
  }
  .fc-water.spray {
    animation: fc-shimmer 1.6s ease-in-out infinite;
  }
  .fc-stream {
    stroke: var(--fc-water);
    stroke-width: 0.09;
    stroke-linecap: round;
    stroke-dasharray: 0.18 0.14;
    animation: fc-flow 0.6s linear infinite;
    pointer-events: none;
  }
  @keyframes fc-flow {
    to {
      stroke-dashoffset: -0.32;
    }
  }
  @keyframes fc-shimmer {
    50% {
      fill-opacity: 0.3;
    }
  }
  .fc-dock rect {
    fill: var(--fc-obstacle);
    stroke: var(--fc-label);
    stroke-width: 0.025;
  }
  .fc-dock path {
    fill: var(--fc-light);
  }
  .fc-trail {
    fill: none;
    stroke: var(--fc-mower);
    stroke-opacity: 0.35;
    stroke-width: 0.22;
    stroke-linecap: round;
    stroke-linejoin: round;
    pointer-events: none;
  }
  .fc-mower .shell {
    fill: var(--fc-label);
    stroke: var(--fc-background);
    stroke-width: 0.03;
  }
  .fc-mower .wheel {
    fill: var(--fc-background);
    stroke: var(--fc-label);
    stroke-width: 0.015;
  }
  .fc-mower .blade {
    fill: none;
    stroke: var(--fc-background);
    stroke-width: 0.025;
    stroke-dasharray: 0.04 0.03;
  }
  .fc-mower .lidar {
    fill: var(--fc-background);
  }
  .fc-mower.mowing .shell {
    fill: var(--fc-mower);
  }
  .fc-mower.busy .shell {
    fill: #ffb300;
  }
  .fc-mower.error .shell {
    fill: #f44336;
  }
  .fc-device-tag {
    fill: var(--fc-label);
    dominant-baseline: central;
    paint-order: stroke;
    stroke: var(--fc-background);
    stroke-width: 0.06;
    stroke-linejoin: round;
    pointer-events: none;
  }
  .fc-device-tag .battery {
    font-weight: 600;
  }
  .fc-device-tag .low {
    fill: #f44336;
  }
  .fc-thermometer text,
  .fc-device-tag,
  .fc-opening-label {
    font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
  }
  .fc-thermometer text {
    text-anchor: middle;
    dominant-baseline: central;
  }
  .fc-thermometer .value {
    fill: var(--fc-value);
    font-weight: 600;
  }
  .fc-thermometer .sub,
  .fc-thermometer .header {
    fill: var(--fc-label);
  }
  .fc-thermometer .header {
    opacity: 0.8;
  }
  .fc-thermometer.unset text {
    opacity: 0.5;
  }
  .fc-screen .cloth {
    stroke: var(--fc-label);
    stroke-width: 0.12;
    stroke-linecap: round;
    opacity: 0.6;
  }
  .fc-screen.on .cloth {
    stroke: #e3f2fd;
    opacity: 1;
  }
  .fc-vacuum .body {
    fill: var(--fc-label);
    stroke: var(--fc-background);
    stroke-width: 0.025;
  }
  .fc-vacuum.mowing .body {
    fill: var(--fc-water);
  }
  .fc-vacuum.busy .body {
    fill: #ffb300;
  }
  .fc-vacuum.error .body {
    fill: #f44336;
  }
  .fc-vacuum .bumper {
    fill: none;
    stroke: var(--fc-background);
    stroke-width: 0.035;
  }
  .fc-vacuum .turret {
    fill: var(--fc-background);
  }
  .fc-trail.vacuum {
    stroke: var(--fc-water);
    stroke-width: 0.3;
  }
  .fc-radar rect {
    fill: var(--fc-label);
  }
  .fc-radar path {
    fill: none;
    stroke: var(--fc-presence);
    stroke-width: 0.16;
    stroke-linecap: round;
  }
  .fc-person circle {
    fill: var(--fc-presence);
    stroke: var(--fc-background);
    stroke-width: 0.04;
  }
  .fc-person .halo {
    fill-opacity: 0.18;
    stroke: none;
  }
  .fc-seen {
    pointer-events: none;
    transition: transform 0.9s linear;
  }
  .fc-seen circle,
  .fc-seen rect {
    fill: var(--fc-camera-object, #ab47bc);
    stroke: var(--fc-background);
    stroke-width: 0.04;
  }
  .fc-seen .halo {
    fill-opacity: 0.18;
    stroke: none;
  }
  .fc-seen.car rect {
    fill-opacity: 0.6;
  }
  .fc-seen.still circle,
  .fc-seen.still rect {
    fill-opacity: 0.5;
  }
  .fc-person.camera circle {
    fill: var(--fc-camera-object, #ab47bc);
  }
  .fc-person.raw circle {
    fill: var(--fc-label);
    opacity: 0.7;
  }
  .fc-person.raw .halo {
    opacity: 0.15;
  }
  .fc-person.held circle {
    fill-opacity: 0.55;
  }
  .fc-person.unconfirmed circle {
    fill-opacity: 0.25;
    stroke-dasharray: 0.06 0.05;
  }
  .fc-person {
    pointer-events: none;
    transition: transform 0.9s linear;
  }
  .fc-camera rect,
  .fc-camera path {
    fill: var(--fc-label);
  }
  .fc-camera-view {
    pointer-events: none;
  }
  .fc-camera-glow-start {
    stop-color: var(--fc-camera-glow);
    stop-opacity: 0.14;
  }
  .fc-camera-glow-end {
    stop-color: var(--fc-camera-glow);
    stop-opacity: 0;
  }
  .glow {
    pointer-events: none;
  }
  .fc-label {
    fill: var(--fc-label);
    font-size: 0.3px;
    text-anchor: middle;
    font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
  }
`;
