// Forms of the editor: the fields they share, levels, appearance, walls, openings, rooms with their areas, zones and items.
import { html, nothing } from "lit";
import { LANGUAGE_NAMES, N_, t } from "./i18n";
import { EDITOR_LANGUAGES } from "./i18n/editor-languages";
import {
  CIRCLE_TYPES,
  FURNITURE_KINDS,
  OBSTACLE_TYPES,
  type FurnitureKind,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_CAMERA_RANGE,
  DEFAULT_FIELD_OF_VIEW,
  DEFAULT_GLOW,
  DEFAULT_ROOM_HOLD,
  DEFAULT_STATIONARY_HOLD,
  type Device,
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
  type Zone,
  type TrackingSettings,
  centroid,
  OPENING_NAMES,
  itemPoints,
  AREA_KIND_NAMES,
  areaKind,
  openingName,
  planEntities,
  roomOpenings,
  spotsInRoom,
  type AreaKind,
  emptyLevel,
  pointOnWall,
  deviceCentre,
  roomAt,
  roomLights,
  roomThermometers,
  MAX_SECONDARY,
  rectCorners,
  uid,
  wallLength,
} from "./model";
import { planPalette, DARK_PALETTE, LIGHT_PALETTE, PALETTE_GROUPS } from "./render";
import { guessFurniture } from "./pixel/furniture";
import {
  DEVICE_LABELS,
  Registry,
  ON_OPENING,
  AREA_KINDS,
  Drag,
  ITEM_LABELS,
  FURNITURE_LABELS,
  ZONE_LABELS,
  isNumberedLevel,
  inContext,
  round,
  fix,
  ZONE_HINTS,
  levelBoundsOf,
} from "./panel-defs";
import type { FloorCastPanel } from "./panel";
import { deviceProperties } from "./panel-devices";

export function renderProperties(p: FloorCastPanel) {
  const s = p._selection;
  const body =
    s?.kind === "wall"
      ? wallProperties(p, p.findWall(s.id))
      : s?.kind === "opening"
        ? openingProperties(p, p.findOpening(s.id))
        : s?.kind === "room"
          ? roomProperties(p, p.findRoom(s.id))
          : s?.kind === "zone"
          ? zoneProperties(p, p.findZone(s.id))
          : s?.kind === "item"
            ? itemProperties(p, p.findItem(s.id))
            : s?.kind === "device"
              ? deviceProperties(p, p.findDevice(s.id))
              : levelProperties(p);
  return html`${breadcrumb(p)} ${body}`;
}

export function number(p: FloorCastPanel, label: string, value: number, apply: (v: number) => void, step = 0.05, unit = "m") {
  return html`<label class="field">
    <span>${label}</span>
    <input
      type="number"
      step=${step}
      .value=${String(fix(value))}
      @change=${(e: Event) => {
        const v = Number((e.target as HTMLInputElement).value);
        if (Number.isFinite(v)) p.change(() => apply(v));
      }}
    />
    <em>${unit}</em>
  </label>`;
}

export function text(p: FloorCastPanel, label: string, value: string, apply: (v: string) => void) {
  return html`<label class="field wide">
    <span>${label}</span>
    <input type="text" .value=${value} @change=${(e: Event) => p.change(() => apply((e.target as HTMLInputElement).value))} />
  </label>`;
}

/**
 * The end of every form: the position of a device typed in metres, then Duplicate and Delete. Delete asks for a
 * second press, so a stray click removes nothing.
 */
export function deleteButton(p: FloorCastPanel) {
  const s = p._selection;
  const device = s?.kind === "device" ? p.findDevice(s.id) : undefined;
  const locked = p.lockedKind(s);
  return html`
    ${device ? positionFields(p, device) : nothing}
    <div class="row end">
      <button title=${t("Copy (Ctrl+D)")} ?disabled=${locked} @click=${() => p.duplicateSelection()}>${t("Duplicate")}</button>
      <button
        class="danger ${p._confirmDelete ? "armed" : ""}"
        ?disabled=${locked}
        title=${locked ? t("Unlock the layout to delete") : t("Delete (Del)")}
        @click=${() => {
          if (!p._confirmDelete) {
            p._confirmDelete = true;
            window.clearTimeout(p._confirmTimer);
            p._confirmTimer = window.setTimeout(() => (p._confirmDelete = false), 3000);
            return;
          }
          p._confirmDelete = false;
          p.deleteSelection();
        }}
      >
        ${p._confirmDelete ? t("Click again to delete") : t("Delete")}
      </button>
    </div>
  `;
}

/** Where a device stands, typed in metres; a strip or screen moves with both its ends. */
export function positionFields(p: FloorCastPanel, device: Device) {
  const move = (axis: 0 | 1, value: number) => {
    const delta = value - device.at[axis];
    device.at = axis === 0 ? [fix(value), device.at[1]] : [device.at[0], fix(value)];
    if (device.to) device.to = axis === 0 ? [fix(device.to[0] + delta), device.to[1]] : [device.to[0], fix(device.to[1] + delta)];
  };
  return html`<details class="settings">
    <summary>${t("Position")}</summary>
    ${number(p, t("x (east)"), device.at[0], (v) => move(0, v))} ${number(p, t("y (south)"), device.at[1], (v) => move(1, v))}
  </details>`;
}

/** Where the selection is: the level, the room it stands in, and what it is; the room can be picked from here. */
export function breadcrumb(p: FloorCastPanel) {
  const s = p._selection;
  if (!s) return nothing;
  const level = p.level;
  let at: Point | undefined;
  let what = "";
  if (s.kind === "device") {
    const device = p.findDevice(s.id);
    at = device && deviceCentre(device);
    what = device ? t(device.kind === "sensor" && device.sensorType === "alarm" ? N_("Alarm") : DEVICE_LABELS[device.kind]) : "";
  } else if (s.kind === "opening") {
    const opening = p.findOpening(s.id);
    const wall = opening && p.findWall(opening.wall);
    at = opening && wall ? pointOnWall(wall, opening.at) : undefined;
    what = opening ? t(OPENING_NAMES[opening.type]) : "";
  } else if (s.kind === "item") {
    const item = p.findItem(s.id);
    at = item ? (item.center ?? centroid(itemPoints(item))) : undefined;
    what = item ? item.name || t(ITEM_LABELS[item.type]) : "";
  } else if (s.kind === "wall") what = t("Wall");
  else if (s.kind === "zone") what = t("Zone");
  const room = s.kind === "room" ? p.findRoom(s.id) : at ? roomAt(level, at) : undefined;
  return html`<nav class="crumbs">
    <span>${level.name}</span>
    ${room
      ? html`› ${s.kind === "room"
            ? html`<span>${room.name}</span>`
            : html`<a @click=${() => p.select({ kind: "room", id: room.id })}>${room.name}</a>`}`
      : nothing}
    ${what ? html`› <span>${what}</span>` : nothing}
  </nav>`;
}

/** The levels of the plan, in the Plan tab: their names, order, floor of Home Assistant, adding and deleting. */
export function levelsSection(p: FloorCastPanel) {
  const levels = p._plan!.levels;
  if (p._registry === undefined) queueMicrotask(() => loadRegistry(p));
  const registry = typeof p._registry === "object" ? p._registry : undefined;
  const missing = registry?.floors.filter((floor) => !levels.some((level) => level.floor === floor.id)) ?? [];
  const addLevel = (name: string, floor?: string) => {
    const level = emptyLevel(name);
    if (floor) level.floor = floor;
    p.change(() => p._plan!.levels.push(level));
    p._levelId = level.id;
    p.fit();
  };
  const moveLevel = (index: number, by: number) =>
    p.change(() => {
      const list = [...levels];
      const [level] = list.splice(index, 1);
      list.splice(index + by, 0, level);
      p._plan!.levels = list;
    });
  return html`
    <h3>${t("Levels")}</h3>
    ${levels.map(
      (level, i) => html`<div class="level-row ${level.id === p.level.id ? "current" : ""}">
        <input
          type="text"
          .value=${level.name}
          @change=${(e: Event) => p.change(() => (level.name = (e.target as HTMLInputElement).value.trim() || level.name))}
        />
        <button class="small" title=${t("Up")} ?disabled=${i === 0} @click=${() => moveLevel(i, -1)}>↑</button>
        <button class="small" title=${t("Down")} ?disabled=${i === levels.length - 1} @click=${() => moveLevel(i, 1)}>↓</button>
        <button
          class="small danger ${p._deleteLevel === level.id ? "armed" : ""}"
          title=${levels.length < 2 ? t("The plan needs one level") : t("Delete the level with everything on it")}
          ?disabled=${levels.length < 2}
          @click=${() => {
            if (p._deleteLevel !== level.id) {
              p._deleteLevel = level.id;
              window.setTimeout(() => (p._deleteLevel = undefined), 3000);
              return;
            }
            p._deleteLevel = undefined;
            p.change(() => (p._plan!.levels = levels.filter((l) => l.id !== level.id)));
            if (p._levelId === level.id) p._levelId = p._plan!.levels[0].id;
            p.notify(t("Level {name} deleted", { name: level.name }));
            p.fit();
          }}
        >
          ${p._deleteLevel === level.id ? t("Delete?") : "×"}
        </button>
        <em class="muted">${t("{rooms} rooms · {devices} devices", { rooms: level.rooms.length, devices: (level.devices ?? []).length })}</em>
        ${registry?.floors.length
          ? html`<select
              class="floor"
              title=${t("The floor of Home Assistant this level is")}
              @change=${(e: Event) =>
                p.change(() => {
                  const id = (e.target as HTMLSelectElement).value || null;
                  const floor = registry.floors.find((f) => f.id === id);
                  level.floor = id;
                  // A level still named as it was added takes the name of its floor.
                  if (floor && isNumberedLevel(level.name)) level.name = floor.name;
                })}
            >
              <option value="" ?selected=${!level.floor}>${t("No floor of Home Assistant")}</option>
              ${registry.floors.map((f) => html`<option value=${f.id} ?selected=${level.floor === f.id}>${t("Floor: {name}", { name: f.name })}</option>`)}
            </select>`
          : nothing}
      </div>`,
    )}
    <div class="row">
      <button @click=${() => addLevel(t("Level {number}", { number: levels.length + 1 }))}>${t("Add level")}</button>
      ${missing.map((floor) => html`<button title=${t("A level for this floor of Home Assistant")} @click=${() => addLevel(floor.name, floor.id)}>${t("Add {name}", { name: floor.name })}</button>`)}
    </div>
  `;
}

/** Settings of the whole plan: wall types, corners, colours and file. */
export function levelProperties(p: FloorCastPanel) {
  return html`
    <h3>${t("Wall types")}</h3>
    ${p.wallTypes.map(
      (type) => html`<div class="type-row">
        <input
          type="text"
          .value=${type.name}
          @change=${(e: Event) => p.change(() => (type.name = (e.target as HTMLInputElement).value || type.name))}
        />
        <input
          type="number"
          step="0.5"
          .value=${String(fix(type.t * 100))}
          @change=${(e: Event) => {
            const v = Number((e.target as HTMLInputElement).value);
            if (Number.isFinite(v) && v > 0)
              p.change(() => {
                type.t = fix(v / 100);
                p.applyWallType(type);
              });
          }}
        />
        <em>cm</em>
        <button
          class="small"
          title=${t("Remove the type; its walls keep their thickness")}
          ?disabled=${p.wallTypes.length < 2}
          @click=${() =>
            p.change(() => {
              for (const level of p._plan!.levels) for (const wall of level.walls) if (wall.type === type.id) delete wall.type;
              p._plan!.wallTypes = p.wallTypes.filter((t) => t !== type);
            })}
        >
          ×
        </button>
      </div>`,
    )}
    <div class="row">
      <button @click=${() => p.change(() => p.wallTypes.push({ id: uid("walltype"), name: t("New wall"), t: 0.2 }))}>${t("Add wall type")}</button>
    </div>
    <label class="check"
      ><input
        type="checkbox"
        .checked=${!!p._plan!.roundCorners}
        @change=${(e: Event) => p.change(() => (p._plan!.roundCorners = (e.target as HTMLInputElement).checked))}
      />
      ${t("Rounded corners")}</label
    >
    ${p._plan!.roundCorners
      ? number(p, 
          t("Radius"),
          (p._plan!.cornerRadius ?? DEFAULT_CORNER_RADIUS) * 100,
          (v) => (p._plan!.cornerRadius = Math.max(0, v) / 100),
          1,
          "cm",
        )
      : nothing}
    ${number(
      p,
      t("Top of the plan faces (°)"),
      p._plan!.north ?? 0,
      (v) => (p._plan!.north = ((Math.round(v) % 360) + 360) % 360),
      1,
      "°",
    )}
    <p class="muted">${t("Compass bearing of the top of the plan: 0 north, 90 east. The sun of the pixel look follows it.")}</p>
    ${appearanceProperties(p)}
    <h3>${t("Language")}</h3>
    <label class="field wide">
      <span>${t("Language")}</span>
      <select @change=${(e: Event) => p.change(() => (p._plan!.language = (e.target as HTMLSelectElement).value))}>
        <option value="auto" ?selected=${(p._plan!.language ?? "auto") === "auto"}>${t("As each user in Home Assistant")}</option>
        ${Object.keys(EDITOR_LANGUAGES).map(
          (code) => html`<option value=${code} ?selected=${p._plan!.language === code}>${LANGUAGE_NAMES[code] ?? code}</option>`,
        )}
      </select>
    </label>
    <p class="muted">${t("For the editor and every card. A text without a translation shows in English.")}</p>
    <h3>${t("Plan file")}</h3>
    <div class="row">
      <button @click=${() => p.exportPlan()}>${t("Export")}</button>
      <label class="button">${t("Import")}<input type="file" accept="application/json,.json" hidden @change=${p.importPlan} /></label>
    </div>
    <h3 class="danger-title">${t("Delete everything")}</h3>
    <p class="muted">
      ${t("Removes every level with its walls, rooms, objects, devices and zones, and the colours. Export the plan first to keep a copy. Until you save, Undo brings it back.")}
    </p>
    <label class="field wide">
      <span>${t("Type {word}", { word: t("DELETE") })}</span>
      <input type="text" .value=${p._wipeText} @input=${(e: Event) => (p._wipeText = (e.target as HTMLInputElement).value)} />
    </label>
    <div class="row">
      <button class="danger" ?disabled=${p._wipeText.trim() !== t("DELETE")} @click=${() => p.wipePlan()}>
        ${t("Delete everything")}
      </button>
    </div>
  `;
}

/** Theme of the plan and its colours, dark and light, each with its own changes over the defaults. */
export function appearanceProperties(p: FloorCastPanel) {
  const plan = p._plan!;
  const appearance = plan.appearance ?? {};
  const current = planPalette(appearance, p.hass?.themes?.darkMode).mode;
  const mode = p._paletteMode ?? current;
  const own = appearance[mode] ?? {};
  const defaults = mode === "dark" ? DARK_PALETTE : LIGHT_PALETTE;
  const setColour = (key: PaletteKey, value: string | undefined) =>
    p.change(() => {
      const next = { ...(plan.appearance?.[mode] ?? {}) };
      if (value && value !== defaults[key]) next[key] = value;
      else delete next[key];
      plan.appearance = { ...plan.appearance, [mode]: next };
    });
  return html`
    <h3>${t("Appearance")}</h3>
    <label class="field wide">
      <span>${t("Theme")}</span>
      <select
        @change=${(e: Event) =>
          p.change(() => (plan.appearance = { ...plan.appearance, theme: (e.target as HTMLSelectElement).value as Appearance["theme"] }))}
      >
        <option value="auto" ?selected=${(appearance.theme ?? "auto") === "auto"}>${t("As Home Assistant (dark or light)")}</option>
        <option value="dark" ?selected=${appearance.theme === "dark"}>${t("Dark")}</option>
        <option value="light" ?selected=${appearance.theme === "light"}>${inContext(N_("Light (theme)"), "Light")}</option>
      </select>
    </label>
    <div class="row">
      <span class="muted">${t("Colours of")}</span>
      ${(["dark", "light"] as const).map(
        (m) => html`<button class=${mode === m ? "on" : ""} @click=${() => (p._paletteMode = m)}>${m === "dark" ? t("Dark") : inContext(N_("Light (theme)"), "Light")}</button>`,
      )}
    </div>
    ${PALETTE_GROUPS.map(
      (group) => html`<details class="settings" ?open=${group.name === "Building"}>
        <summary>${t(group.name)}</summary>
        ${group.keys.map(
          ([key, label]) => html`<div class="colour-row">
            <span>${t(label)}</span>
            <input type="color" .value=${own[key] ?? defaults[key]} @change=${(e: Event) => setColour(key, (e.target as HTMLInputElement).value)} />
            ${own[key] ? html`<button class="small" title=${t("Back to the default colour")} @click=${() => setColour(key, undefined)}>↺</button>` : html`<span></span>`}
          </div>`,
        )}
      </details>`,
    )}
    <div class="row">
      <button
        ?disabled=${!Object.keys(own).length}
        @click=${() =>
          p.change(() => {
            const next = { ...plan.appearance };
            delete next[mode];
            plan.appearance = next;
          })}
      >
        ${mode === "dark" ? t("Reset the dark colours") : t("Reset the light colours")}
      </button>
    </div>
    <p class="muted">
      ${t("The plan in this editor shows the colours you edit. Every card uses them; a card can still choose dark or light for itself.")}
    </p>
  `;
}

export function wallProperties(p: FloorCastPanel, wall?: Wall) {
  if (!wall) return nothing;
  return html`
    <h3>${t("Wall")}</h3>
    <label class="field wide">
      <span>${t("Type")}</span>
      <select
        @change=${(e: Event) =>
          p.change(() => {
            const id = (e.target as HTMLSelectElement).value;
            if (!id) {
              delete wall.type;
              return;
            }
            wall.type = id;
            wall.t = p.wallType(id).t;
          })}
      >
        ${p.wallTypes.map(
          (type) => html`<option value=${type.id} ?selected=${type.id === wall.type}>${type.name} ${(type.t * 100).toFixed(1)} cm</option>`,
        )}
        <option value="" ?selected=${!wall.type}>${t("Own thickness")}</option>
      </select>
    </label>
    ${number(p, 
      t("Thickness"),
      wall.t * 100,
      (v) => {
        // A thickness typed for one wall makes it a wall of its own thickness.
        wall.t = Math.max(1, v) / 100;
        delete wall.type;
      },
      0.5,
      "cm",
    )}
    <p class="muted">${t("Length {length} m", { length: wallLength(wall).toFixed(2) })}</p>
    <label class="check" title=${t("Same as holding Shift while dragging an end")}
      ><input type="checkbox" .checked=${p._endsAlone} @change=${(e: Event) => (p._endsAlone = (e.target as HTMLInputElement).checked)} />
      ${t("Move ends alone (detach from joined walls)")}</label
    >
    ${deleteButton(p)}
  `;
}

export function openingProperties(p: FloorCastPanel, opening?: Opening) {
  if (!opening) return nothing;
  return html`
    <h3>${t(OPENING_NAMES[opening.type])}</h3>
    <label class="field wide">
      <span>${t("Type")}</span>
      <select @change=${(e: Event) => p.change(() => (opening.type = (e.target as HTMLSelectElement).value as Opening["type"]))}>
        <option value="door" ?selected=${opening.type === "door"}>${t("Door")}</option>
        <option value="window" ?selected=${opening.type === "window"}>${t("Window")}</option>
        <option value="gate" ?selected=${opening.type === "gate"}>${t("Gate or garage door")}</option>
      </select>
    </label>
    ${number(p, t("Width"), opening.width * 100, (v) => (opening.width = Math.max(10, v) / 100), 5, "cm")}
    ${opening.type === "door"
      ? html`<div class="row">
          <button title=${t("Moves the hinge to the other side of the door")} @click=${() => p.change(() => (opening.hingeEnd = !opening.hingeEnd))}>
            ${t("Flip hinge")}
          </button>
          <button title=${t("Opens the door into the other room")} @click=${() => p.change(() => (opening.swingRight = !opening.swingRight))}>
            ${t("Flip side")}
          </button>
        </div>`
      : nothing}
    <div class="pick">
      <span>${t("Open/closed sensor")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["binary_sensor"]}
        .value=${opening.contact ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (opening.contact = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(opening.contact)}
    ${opening.type === "door"
      ? html`<div class="pick">
            <span>${t("Lock")}</span>
            <floorcast-entity-picker
              .hass=${p.hass}
              .domains=${["lock"]}
              .value=${opening.lock ?? null}
              optional
              @value-changed=${(e: CustomEvent) => p.change(() => (opening.lock = e.detail))}
            ></floorcast-entity-picker>
          </div>
          ${p.stateLine(opening.lock)}
          ${opening.lock
            ? html`${confirmCheck(p, opening, true)}
                <p class="muted">${t("A padlock beside the door: a tap on the card locks or unlocks it, holding opens it.")}</p>`
            : nothing}
          <label class="field wide">
            <span>${t("Drawn as")}</span>
            <select @change=${(e: Event) => p.change(() => (opening.drawn = (e.target as HTMLSelectElement).value as "open" | "closed"))}>
              <option value="open" ?selected=${opening.drawn !== "closed"}>${inContext(N_("Open (state)"), "Open")}</option>
              <option value="closed" ?selected=${opening.drawn === "closed"}>${t("Closed")}</option>
            </select>
          </label>
          <p class="muted">${t("With a sensor the door follows it; this is how it is drawn without one or while the sensor is unavailable.")}</p>`
      : opening.type === "gate"
        ? html`<div class="pick">
              <span>${t("Gate")}</span>
              <floorcast-entity-picker
                .hass=${p.hass}
                .domains=${["cover"]}
                .value=${opening.cover ?? null}
                optional
                @value-changed=${(e: CustomEvent) => p.change(() => (opening.cover = e.detail))}
              ></floorcast-entity-picker>
            </div>
            ${p.stateLine(opening.cover)} ${confirmCheck(p, opening, true)}
            <p class="muted">
              ${t("Drawn closed across the opening for as much as the cover closes it. A tap on the card opens, closes or stops it.")}
            </p>`
        : html`<div class="pick">
            <span>${t("Blind")}</span>
            <floorcast-entity-picker
              .hass=${p.hass}
              .domains=${["cover"]}
              .value=${opening.cover ?? null}
              optional
              @value-changed=${(e: CustomEvent) => p.change(() => (opening.cover = e.detail))}
            ></floorcast-entity-picker>
          </div>
          ${p.stateLine(opening.cover)}
          ${opening.cover
            ? html`<div class="row">
                  <button title=${t("Draws the blind on the other side of the wall")} @click=${() => p.change(() => (opening.blindFlip = !opening.blindFlip))}>
                    ${t("Flip blind side")}
                  </button>
                </div>
                ${confirmCheck(p, opening)}
                <p class="muted">${t("The bar outside the window is as long as the blind covers it; the number is its position, 100% open.")}</p>`
            : nothing}`}
    ${deleteButton(p)}
  `;
}


/** Ask before switching: the card asks before a tap switches the device or moves the blind. */
export function confirmCheck(p: FloorCastPanel, target: { confirm?: boolean }, askByDefault = false) {
  const asks = askByDefault ? target.confirm !== false : !!target.confirm;
  return html`<label class="check"
      ><input
        type="checkbox"
        .checked=${asks}
        @change=${(e: Event) =>
          p.change(() => {
            const checked = (e.target as HTMLInputElement).checked;
            target.confirm = checked === askByDefault ? undefined : checked;
          })}
      />
      ${t("Ask before switching")}</label
    >`;
}


export async function loadRegistry(p: FloorCastPanel): Promise<void> {
  p._registry = "loading";
  type Entry = { entity_id: string; area_id: string | null; device_id: string | null; entity_category: string | null; hidden_by: string | null; disabled_by: string | null };
  try {
    const [areas, devices, entities, floors] = await Promise.all([
      p.hass.callWS<{ area_id: string; name: string; floor_id?: string | null }[]>({ type: "config/area_registry/list" }),
      p.hass.callWS<{ id: string; area_id: string | null }[]>({ type: "config/device_registry/list" }),
      p.hass.callWS<Entry[]>({ type: "config/entity_registry/list" }),
      p.hass.callWS<{ floor_id: string; name: string }[]>({ type: "config/floor_registry/list" }).catch(() => []),
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
    p._registry = {
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
    p._registry = "failed";
  }
}

/** Entities of the room's area the plan can show, unplaced ones first. */
export function areaEntities(p: FloorCastPanel, room: Room, registry: Registry) {
  const used = planEntities(p._plan!);
  return Object.entries(registry.entityArea)
    .filter(([, area]) => area === room.area)
    .map(([entity]) => ({ entity, kind: areaKind(entity, p.hass.states[entity]), used: used.has(entity) }))
    .filter((row): row is { entity: string; kind: AreaKind; used: boolean } => !!row.kind)
    .sort((a, b) => Number(a.used) - Number(b.used) || AREA_KINDS.indexOf(a.kind) - AREA_KINDS.indexOf(b.kind) || a.entity.localeCompare(b.entity));
}

/** Doors or windows of the room an entity of the kind may go to: a blind to a window without one, a contact by its class. */
export function freeOpenings(p: FloorCastPanel, room: Room, entity: string, kind: AreaKind): Opening[] {
  const openings = roomOpenings(p.level, room);
  if (kind === "blind") return openings.filter((o) => o.type === "window" && !o.cover);
  if (kind === "gate") return openings.filter((o) => o.type === "gate" && !o.cover);
  if (kind === "lock") return openings.filter((o) => o.type === "door" && !o.lock);
  const deviceClass = p.hass.states[entity]?.attributes.device_class;
  const type = deviceClass === "window" ? "window" : deviceClass === "opening" ? undefined : "door";
  return openings.filter((o) => !o.contact && (!type || o.type === type));
}

/**
 * Puts one entity of the area on the plan: a light or sensor in the room, a presence sensor in its list, a blind or
 * contact on a door or window. A temperature sensor takes the humidity and CO2 of its device as secondary values.
 */
export function placeEntity(p: FloorCastPanel, room: Room, entity: string, kind: AreaKind, registry: Registry, at?: Point, opening?: Opening): void {
  const devices = (p.level.devices ??= []);
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
    const used = planEntities(p._plan!);
    const device = registry.entityDevice[entity];
    const siblings = Object.keys(registry.entityArea).filter(
      (other) => other !== entity && device && registry.entityDevice[other] === device && areaKind(other, p.hass.states[other]) === "sensor" && !used.has(other),
    );
    const deviceClass = p.hass.states[entity]?.attributes.device_class;
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
export function placeAll(p: FloorCastPanel, room: Room, registry: Registry): void {
  p.change(() => {
    const rows = areaEntities(p, room, registry).filter((row) => !row.used);
    const lights = rows.filter((row) => row.kind === "light");
    spotsInRoom(room, lights.length, 0.5).forEach((at, i) => placeEntity(p, room, lights[i].entity, "light", registry, at));
    // A temperature sensor first, so the humidity of its device becomes its secondary value.
    const sensors = rows
      .filter((row) => row.kind === "sensor")
      .sort((a, b) => Number(p.hass.states[b.entity]?.attributes.device_class === "temperature") - Number(p.hass.states[a.entity]?.attributes.device_class === "temperature"));
    const placed = () => planEntities(p._plan!);
    const mains = sensors.filter((row) => !placed().has(row.entity));
    for (const row of mains) {
      if (placed().has(row.entity)) continue;
      placeEntity(p, room, row.entity, "sensor", registry, spotsInRoom(room, 1, 0.25)[0]);
    }
    const below = rows.filter((row) => row.kind === "alarm" || row.kind === "camera");
    spotsInRoom(room, below.length, 0.75).forEach((at, i) => placeEntity(p, room, below[i].entity, below[i].kind, registry, at));
    for (const row of rows.filter((row) => row.kind === "presence")) placeEntity(p, room, row.entity, "presence", registry);
    // One thermostat per room: the first of the area, when the room has none yet.
    const thermostat = rows.find((row) => row.kind === "climate");
    if (thermostat && !room.climate) placeEntity(p, room, thermostat.entity, "climate", registry);
    for (const row of rows.filter((row) => ON_OPENING.includes(row.kind))) {
      const free = freeOpenings(p, room, row.entity, row.kind);
      if (free.length === 1) placeEntity(p, room, row.entity, row.kind, registry, undefined, free[0]);
    }
  });
}

/** The room's Home Assistant area and the entities of it, to place one by one or all at once. */
export function areaSection(p: FloorCastPanel, room: Room) {
  const registry = p._registry;
  if (registry === undefined) {
    queueMicrotask(() => loadRegistry(p));
    return nothing;
  }
  if (registry === "loading") return html`<p class="muted">${t("Reading the areas of Home Assistant…")}</p>`;
  if (registry === "failed") return html`<p class="muted">${t("The areas of Home Assistant could not be read.")}</p>`;
  const normal = (text: string) => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const match = room.area === undefined ? registry.areas.find((area) => normal(area.name) === normal(room.name)) : undefined;
  const own = registry.floors.find((floor) => floor.id === p.level.floor)?.name;
  const floors = [...new Set(registry.areas.map((area) => area.floor))].sort((a, b) => Number(b === own) - Number(a === own));
  const rows = room.area ? areaEntities(p, room, registry) : [];
  // Place all leaves a blind or contact that fits more than one door or window for the list.
  const free = rows.filter(
    (row) => !row.used && (!ON_OPENING.includes(row.kind) || freeOpenings(p, room, row.entity, row.kind).length === 1),
  );
  return html`
    <label class="field wide">
      <span>${t("Area")}</span>
      <select @change=${(e: Event) => p.change(() => (room.area = (e.target as HTMLSelectElement).value || null))}>
        <option value="" ?selected=${!room.area}>${t("None")}</option>
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
          <button @click=${() => p.change(() => (room.area = match.id))}>${t("Use the area {name}", { name: match.name })}</button>
        </div>`
      : nothing}
    ${room.area
      ? html`${rows.length
            ? html`<div class="area-list">
                ${rows.map((row) => {
                  const name = p.hass.states[row.entity]?.attributes.friendly_name ?? row.entity;
                  const openings = ON_OPENING.includes(row.kind) ? freeOpenings(p, room, row.entity, row.kind) : [];
                  const action = row.used
                    ? html`<span class="muted">${t("placed")}</span>`
                    : ON_OPENING.includes(row.kind)
                      ? openings.length
                        ? html`<select
                            @change=${(e: Event) => {
                              const opening = openings[Number((e.target as HTMLSelectElement).value)];
                              if (opening) p.change(() => placeEntity(p, room, row.entity, row.kind, registry, undefined, opening));
                            }}
                          >
                            <option value="">${t("Put on…")}</option>
                            ${openings.map((o, i) => html`<option value=${i}>${openingName(p.level, room, o)}</option>`)}
                          </select>`
                        : html`<span class="muted"
                            >${row.kind === "blind"
                              ? t("no free window")
                              : row.kind === "gate"
                                ? t("no free gate")
                                : row.kind === "lock"
                                  ? t("no free door")
                                  : t("no free door or window")}</span
                          >`
                      : html`<button @click=${() => p.change(() => placeEntity(p, room, row.entity, row.kind, registry))}>${t("Place")}</button>`;
                  return html`<div class="area-row">
                    <span class="area-name" title=${row.entity}>${name}</span>
                    <span class="muted">${t(AREA_KIND_NAMES[row.kind])}</span>
                    ${action}
                  </div>`;
                })}
              </div>`
            : html`<p class="muted">${t("The area has no lights, sensors, blinds or cameras the plan can show.")}</p>`}
          ${free.length
            ? html`<div class="row"><button @click=${() => placeAll(p, room, registry)}>${t("Place all ({count})", { count: free.length })}</button></div>
                <p class="muted">
                  ${t("Place all puts lights across the middle of the room, sensors above them and alarms and cameras below; drag them where they are. A blind or contact goes on its own only where one door or window fits.")}
                </p>`
            : nothing}`
      : nothing}
  `;
}

export function roomProperties(p: FloorCastPanel, room?: Room) {
  if (!room) return nothing;
  const lights = roomLights(p.level, room);
  const thermometers = roomThermometers(p.level, room);
  const sensors = room.occupancy ?? [];
  return html`
    <h3>${t("Room")}</h3>
    ${text(p, t("Name"), room.name, (v) => (room.name = v))}
    ${areaSection(p, room)}
    <label class="check"
      ><input type="checkbox" .checked=${!!room.hideName} @change=${(e: Event) => p.change(() => (room.hideName = (e.target as HTMLInputElement).checked))} />
      ${t("Hide the name on the card")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!room.stairs} @change=${(e: Event) => p.change(() => (room.stairs = (e.target as HTMLInputElement).checked))} />
      ${t("Stairs")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!room.outdoor} @change=${(e: Event) => p.change(() => (room.outdoor = (e.target as HTMLInputElement).checked))} />
      ${t("Outdoor zone (no floor)")}</label
    >
    <label class="check"
      ><input type="checkbox" .checked=${!!room.garden} @change=${(e: Event) => p.change(() => (room.garden = (e.target as HTMLInputElement).checked))} />
      ${t("Part of the garden (hidden with it)")}</label
    >
    <p class="muted">
      ${t("Lights: {lights}. Thermometers: {thermometers}. Place both in Devices; the room takes what stands in it. People are counted by the radars and cameras that see the room.", {
        lights: lights.length ? lights.join(", ") : t("none"),
        thermometers: thermometers.length ? thermometers.map((thermometer) => thermometer.entity).join(", ") : t("none"),
      })}
    </p>
    <div class="pick">
      <span>${t("Thermostat")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["climate"]}
        .value=${room.climate ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (room.climate = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(room.climate)}
    ${room.climate
      ? html`<p class="muted">
          ${t("The card shows its target temperature under the room name, and its temperature when no sensor in the room shows one. The room glows orange while it heats and blue while it cools; holding the room opens the thermostat.")}
        </p>`
      : nothing}
    <h4>${t("Presence sensors")}</h4>
    ${sensors.map(
      (entity, i) => html`<div class="pick">
          <span>${t("Sensor {number}", { number: i + 1 })}</span>
          <floorcast-entity-picker
            .hass=${p.hass}
            .domains=${["binary_sensor"]}
            .deviceClass=${["motion", "occupancy", "presence"]}
            .value=${entity || null}
            optional
            @value-changed=${(e: CustomEvent) =>
              p.change(() => {
                const next = [...sensors];
                next[i] = e.detail ?? "";
                room.occupancy = next.filter(Boolean);
              })}
          ></floorcast-entity-picker>
        </div>
        ${p.stateLine(entity)}`,
    )}
    <div class="row">
      <button @click=${() => p.change(() => (room.occupancy = [...sensors, ""]))}>${t("Add a presence sensor")}</button>
    </div>
    <p class="muted">
      ${t("A motion, occupancy or presence sensor keeps the room occupied while it is on: the room's occupancy entity and the card follow it. It does not count people.")}
    </p>
    ${p.hasRadar || sensors.length
      ? number(p, t("Occupancy hold"), room.hold ?? DEFAULT_ROOM_HOLD, (v) => (room.hold = Math.max(0, v)), 5, "s")
      : nothing}
    ${deleteButton(p)}
  `;
}


/** Settings of the people tracking of radars or of cameras, shared by all levels; zones and rooms are common to both. */
export function trackingProperties(p: FloorCastPanel, kind: "radar" | "camera") {
  type Key = Exclude<keyof TrackingSettings, "camera">;
  const values: Omit<TrackingSettings, "camera"> = (kind === "radar" ? p._plan!.tracking : p._plan!.tracking?.camera) ?? {};
  const set = (key: Key, v: number) =>
    (p._plan!.tracking =
      kind === "radar"
        ? { ...p._plan!.tracking, [key]: v }
        : { ...p._plan!.tracking, camera: { ...p._plan!.tracking?.camera, [key]: v } });
  // Label, key, radar default, camera default, step, unit, limits.
  const rows: [string, Key, number, number, number, string, number, number][] = [
    [N_("Snap into rooms within"), "snap_distance", 1, 1, 0.1, "m", 0, 3],
    [N_("Merge closer than"), "merge_distance", 0.8, 0.8, 0.1, "m", 0.1, 3],
    [N_("Smoothing (1 = none)"), "smoothing", 0.5, 0.6, 0.1, "", 0.1, 1],
    [N_("Count a new person after"), "confirm_delay", 1, 0.5, 0.5, "s", 0, 30],
    [N_("Longest step"), "jump_base", 1.5, 1.5, 0.1, "m", 0.5, 10],
    [N_("Walking speed"), "jump_speed", 2.5, 2.5, 0.1, "m/s", 0.5, 10],
    [N_("Keep a missed person"), "lost_hold", 5, 10, 1, "s", 0, 120],
    [N_("Resting place hold"), "stationary_hold", DEFAULT_STATIONARY_HOLD, DEFAULT_STATIONARY_HOLD, 30, "s", 0, 3600],
    [N_("Remember a lost person"), "sleep_hours", 12, 12, 1, "h", 0, 48],
  ];
  // Folded: set once, then rarely touched; the lists of radars, cameras and zones stay in view.
  return html`<details class="settings">
    <summary>${kind === "radar" ? t("Radar tracking settings") : t("Camera tracking settings")}</summary>
    ${rows.map(([label, key, radarDefault, cameraDefault, step, unit, min, max]) =>
      number(p, t(label), values[key] ?? (kind === "radar" ? radarDefault : cameraDefault), (v) => set(key, Math.min(max, Math.max(min, v))), step, unit),
    )}
    <p class="muted">
      ${kind === "radar"
        ? t("A detection just outside the rooms its radar sees is moved inside, up to the snap distance; a radar target farther out is dropped. A missed person stays where they were for a while; seen again within walking distance, it is the same person.")
        : t("A detection just outside the rooms its camera sees is moved inside, up to the snap distance; a camera keeps people farther out, in the garden. A missed person stays where they were for a while; seen again within walking distance, it is the same person. A camera person next to a radar person counts once.")}
    </p>
  </details>`;
}

export function zoneProperties(p: FloorCastPanel, zone?: Zone) {
  if (!zone) return nothing;
  const defaultHold = zone.kind === "stationary" ? (p._plan!.tracking?.stationary_hold ?? DEFAULT_STATIONARY_HOLD) : DEFAULT_ROOM_HOLD;
  return html`
    <h3>${t("Zone")}</h3>
    ${text(p, t("Name"), zone.name, (v) => (zone.name = v))}
    <label class="field wide">
      <span>${t("Use")}</span>
      <select @change=${(e: Event) => p.change(() => (zone.kind = (e.target as HTMLSelectElement).value as Zone["kind"]))}>
        ${(Object.keys(ZONE_LABELS) as Zone["kind"][]).map(
          (kind) => html`<option value=${kind} ?selected=${kind === zone.kind}>${t(ZONE_LABELS[kind])}</option>`,
        )}
      </select>
    </label>
    ${zone.kind === "count" || zone.kind === "stationary"
      ? number(p, zone.kind === "count" ? t("Occupancy hold") : t("Keeps a still person"), zone.hold ?? defaultHold, (v) => (zone.hold = Math.max(0, v)), 5, "s")
      : nothing}
    <p class="muted">${t(ZONE_HINTS[zone.kind])}</p>
    ${deleteButton(p)}
  `;
}

export function itemProperties(p: FloorCastPanel, item?: Item) {
  if (!item) return nothing;
  return html`
    <h3>${t("Object")}</h3>
    <label class="field wide">
      <span>${t("Type")}</span>
      <select @change=${(e: Event) => p.change(() => retype(p, item, (e.target as HTMLSelectElement).value as ItemType))}>
        ${(Object.keys(ITEM_LABELS) as ItemType[]).map(
          (type) => html`<option value=${type} ?selected=${type === item.type}>${t(ITEM_LABELS[type])}</option>`,
        )}
      </select>
    </label>
    ${OBSTACLE_TYPES.includes(item.type)
      ? html`<label class="field wide">
            <span>${t("Kind of furniture")}</span>
            <select
              @change=${(e: Event) =>
                p.change(() => {
                  const value = (e.target as HTMLSelectElement).value;
                  if (value) item.furniture = value as FurnitureKind;
                  else delete item.furniture;
                })}
            >
              <option value="" ?selected=${!item.furniture}>${t("Automatic ({kind})", { kind: t(FURNITURE_LABELS[guessFurniture(item, p.level)]) })}</option>
              ${FURNITURE_KINDS.map((kind) => html`<option value=${kind} ?selected=${item.furniture === kind}>${t(FURNITURE_LABELS[kind])}</option>`)}
            </select>
          </label>
          <p class="muted">
            ${t("For the pixel look of the card. A narrow sofa shows as an armchair, an L-shaped one as a corner sofa, kitchen units along two walls as a corner kitchen.")}
          </p>`
      : nothing}
    ${text(p, t("Name"), item.name ?? "", (v) => (item.name = v || undefined))}
    ${item.center
      ? nothing
      : html`<label class="field wide">
          <span>${t("Corners")}</span>
          <select
            @change=${(e: Event) =>
              p.change(() => {
                const value = (e.target as HTMLSelectElement).value;
                if (value === "round" || value === "square") item.corners = value;
                else delete item.corners;
              })}
          >
            <option value="" ?selected=${!item.corners}>${t("As the plan")}</option>
            <option value="round" ?selected=${item.corners === "round"}>${t("Rounded")}</option>
            <option value="square" ?selected=${item.corners === "square"}>${t("Square")}</option>
          </select>
        </label>`}
    ${item.rect
      ? html`${number(p, "X", item.rect[0], (v) => (item.rect![0] = v))} ${number(p, "Y", item.rect[1], (v) => (item.rect![1] = v))}
        ${number(p, t("Width"), item.rect[2], (v) => (item.rect![2] = Math.max(0.1, v)))}
        ${number(p, t("Length"), item.rect[3], (v) => (item.rect![3] = Math.max(0.1, v)))}
        ${number(p, t("Rotation"), item.rotation ?? 0, (v) => (item.rotation = v), 5, "°")}`
      : nothing}
    ${item.center
      ? html`${number(p, "X", item.center[0], (v) => (item.center![0] = v))} ${number(p, "Y", item.center[1], (v) => (item.center![1] = v))}
        ${number(p, t("Diameter"), item.diameter ?? 1, (v) => (item.diameter = Math.max(0.1, v)))}`
      : nothing}
    ${item.points ? html`<p class="muted">${t("Drag corners; drag the middle of an edge to add a corner.")}</p>` : nothing}
    <div class="row">
      ${item.points
        ? html`<button
            title=${t("Turns the shape back into a rectangle around it")}
            @click=${() =>
              p.change(() => {
                const box = levelBoundsOf(item);
                item.rect = [fix(box.x), fix(box.y), fix(box.w), fix(box.h)];
                item.rotation = 0;
                delete item.points;
              })}
          >
            ${t("Rectangle")}
          </button>`
        : nothing}
      ${item.rect
        ? html`<button
            title=${t("Turns the rectangle into a shape with free corners")}
            @click=${() =>
              p.change(() => {
                item.points = rectCorners(item).map((p) => [fix(p[0]), fix(p[1])] as Point);
                delete item.rect;
                delete item.rotation;
              })}
          >
            ${t("Free shape")}
          </button>`
        : nothing}
      ${deleteButton(p)}
    </div>
  `;
}

/** Changing the type keeps the place and size, converting between circle and rectangle. */
export function retype(p: FloorCastPanel, item: Item, type: ItemType): void {
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
