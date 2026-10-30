// Lists of the editor: the levels, objects, devices, radars, cameras and zones it holds, with their filter.
import { html, nothing } from "lit";
import { N_, t } from "./i18n";
import {
  type Device,
  radarTargets,
  type Item,
  type Point,
  type Zone,
  centroid,
  deviceCentre,
  roomAt,
  pointInPolygon,
  roomThermometers,
} from "./model";
import { DEVICE_LABELS, ITEM_LABELS, ZONE_LABELS, slug, levelBoundsOf } from "./panel-defs";
import type { FloorCastPanel } from "./panel";
import { levelProperties, levelsSection, trackingProperties } from "./panel-forms";

/** Content of the tab when nothing is selected. */
export function renderList(p: FloorCastPanel) {
  if (p._mode === "settings") return levelProperties(p);
  if (p._mode === "plan") return html`${levelsSection(p)} ${filterBox(p)} ${buildingList(p)} ${objectList(p)}`;
  if (p._mode === "devices") return deviceList(p);
  return html`${radarList(p)} ${cameraList(p)} ${zoneList(p)}`;
}

export function filterBox(p: FloorCastPanel) {
  return html`<input
    class="filter"
    type="search"
    placeholder=${t("Filter")}
    .value=${p._filter}
    @input=${(e: Event) => (p._filter = (e.target as HTMLInputElement).value)}
  />`;
}

export function passesFilter(p: FloorCastPanel, ...texts: (string | null | undefined)[]): boolean {
  const wanted = p._filter.trim().toLowerCase();
  return !wanted || texts.some((text) => text?.toLowerCase().includes(wanted));
}

export function listRow(p: FloorCastPanel, label: string, detail: unknown, onPick: () => void, cls = "") {
  return html`<button class="list-row ${cls}" @click=${onPick}>
    <span>${label}</span><em>${detail}</em>
  </button>`;
}

export function entityName(p: FloorCastPanel, id: string | null | undefined): string | undefined {
  return id ? (p.hass.states[id]?.attributes.friendly_name ?? id) : undefined;
}

export function shortState(p: FloorCastPanel, id: string | null | undefined): string {
  if (!id) return t("no entity");
  const stateObj = p.hass.states[id];
  if (!stateObj) return t("missing");
  const unit = stateObj.attributes.unit_of_measurement;
  return unit ? `${stateObj.state} ${unit}` : stateObj.state;
}

export function buildingList(p: FloorCastPanel) {
  const level = p.shown;
  const rooms = level.rooms.filter((room) => passesFilter(p, room.name));
  return html`
    <p class="muted">
      ${t("{walls} walls · {doors} doors · {windows} windows. Click a wall, door or window on the plan to edit it.", {
        walls: level.walls.length,
        doors: level.openings.filter((o) => o.type === "door").length,
        windows: level.openings.filter((o) => o.type === "window").length,
      })}
    </p>
    <h3>${t("Rooms")}</h3>
    ${rooms.map((room) =>
      listRow(p, 
        room.name,
        roomThermometers(level, room)[0] ? shortState(p, roomThermometers(level, room)[0].entity) : room.stairs ? t("stairs") : room.outdoor ? t("outdoor") : "",
        () => p.pick({ kind: "room", id: room.id }, centroid(room.points)),
      ),
    )}
  `;
}

export function objectList(p: FloorCastPanel) {
  const items = p.shown.items.filter((item) => passesFilter(p, item.name, t(ITEM_LABELS[item.type])));
  const size = (item: Item) =>
    item.rect
      ? `${item.rect[2].toFixed(2)} × ${item.rect[3].toFixed(2)} m`
      : item.center
        ? `⌀ ${(item.diameter ?? 1).toFixed(2)} m`
        : t("free shape");
  const centre = (item: Item): Point => {
    const b = levelBoundsOf(item);
    return [b.x + b.w / 2, b.y + b.h / 2];
  };
  return html`
    <h3>${t("Garden and furniture")}</h3>
    ${items.map((item) =>
      listRow(p, item.name || t(ITEM_LABELS[item.type]), size(item), () => p.pick({ kind: "item", id: item.id }, centre(item))),
    )}
    ${items.length ? nothing : html`<p class="muted">${t("No objects. Choose Garden, furniture under Add and drag on the plan.")}</p>`}
  `;
}

/** Devices by the room they stand in, then those outside the rooms; a device without an entity is marked. */
export function deviceList(p: FloorCastPanel) {
  const level = p.shown;
  const kindName = (device: Device) => t(device.kind === "sensor" && device.sensorType === "alarm" ? N_("Alarm") : DEVICE_LABELS[device.kind]);
  const devices = (level.devices ?? []).filter(
    (device) => device.kind !== "radar" && passesFilter(p, kindName(device), device.entity, entityName(p, device.entity), device.label),
  );
  const byRoom = new Map<string, Device[]>();
  for (const device of devices) {
    const key = roomAt(level, deviceCentre(device))?.id ?? "";
    byRoom.set(key, [...(byRoom.get(key) ?? []), device]);
  }
  const unset = devices.filter((device) => !device.entity).length;
  const rows = (list: Device[]) =>
    list.map((device) =>
      listRow(p, 
        entityName(p, device.entity) ?? device.label ?? t("{kind} without entity", { kind: kindName(device) }),
        device.entity ? `${kindName(device)} · ${shortState(p, device.entity)}` : kindName(device),
        () => p.pick({ kind: "device", id: device.id }, deviceCentre(device)),
        device.entity ? "" : "unset",
      ),
    );
  return html`
    ${filterBox(p)}
    ${unset ? html`<p class="muted warn">${t("{count} without an entity: they are marked below.", { count: unset })}</p>` : nothing}
    ${level.rooms
      .filter((room) => byRoom.has(room.id))
      .map(
        (room) => html`<h3 class="link" @click=${() => p.pick({ kind: "room", id: room.id }, centroid(room.points))}>${room.name}</h3>
          ${rows(byRoom.get(room.id)!)}`,
      )}
    ${byRoom.has("") ? html`<h3>${t("Outside the rooms")}</h3>${rows(byRoom.get("")!)}` : nothing}
    ${devices.length ? nothing : html`<p class="muted">${t("No devices. Choose one under Add and click on the plan, or link a room to its area.")}</p>`}
  `;
}

export function radarList(p: FloorCastPanel) {
  const radars = (p.shown.devices ?? []).filter((device) => device.kind === "radar");
  return html`
    <h3>${t("Radars")}</h3>
    ${radars.map((radar) => {
      const seen = radarTargets(radar, p.hass.states).length;
      const online = !!radar.source && p.hass.states[`sensor.${radar.source}_target_1_x`]?.state !== "unavailable";
      return listRow(p, 
        radar.source ?? t("Radar without sensors"),
        online ? t("sees {count}", { count: seen }) : t("offline"),
        () => p.pick({ kind: "device", id: radar.id }, radar.at),
        online ? "" : "unset",
      );
    })}
    ${radars.length ? nothing : html`<p class="muted">${t("No radars on this level. Choose Radar under Add and click where one hangs.")}</p>`}
    ${radars.length ? trackingProperties(p, "radar") : nothing}
    <p class="muted">
      ${t("Blue dots are people after the rules, grey dots the raw targets of the radars. Select a radar to see only its own targets and the people it sees. Zones work the same for radars and cameras.")}
    </p>
  `;
}

/** Cameras with their Frigate camera, calibration and the people they see now; the settings of camera tracking. */
export function cameraList(p: FloorCastPanel) {
  const cameras = (p.shown.devices ?? []).filter((device) => device.kind === "camera");
  const people = p._people?.[p.level.id] ?? [];
  return html`
    <h3>${t("Cameras")}</h3>
    ${cameras.map((camera) => {
      const spots = camera.calibration?.length ?? 0;
      const seen = people.filter((p) => p.camera && p.camera === camera.frigate).length;
      const detail = !camera.frigate ? t("no Frigate camera") : spots < 4 ? t("{count} of 4 spots", { count: spots }) : t("sees {count}", { count: seen });
      return listRow(p, 
        entityName(p, camera.entity) ?? camera.frigate ?? t("Camera without entity"),
        detail,
        () => p.pick({ kind: "device", id: camera.id }, camera.at),
        camera.frigate && spots >= 4 ? "" : "unset",
      );
    })}
    ${cameras.length ? nothing : html`<p class="muted">${t("No cameras on this level. Add one in Devices, then calibrate it here to count people.")}</p>`}
    ${cameras.some((camera) => camera.frigate && (camera.calibration?.length ?? 0) >= 4) ? trackingProperties(p, "camera") : nothing}
    <p class="muted">
      ${t("Select a camera to choose its Frigate camera and calibrate it: four spots on the ground, in the image and on the plan. People a calibrated camera sees are tracked as purple dots and counted with the radar people in the same rooms and zones. A selected camera also shows its raw detections in grey, before snapping into rooms and tracking.")}
    </p>
  `;
}

/** People counted in a room or zone now: the entity of the integration, or the people shown on the plan. */
export function countIn(p: FloorCastPanel, id: string, points: Point[]): string {
  const entity = p.hass.states[`sensor.floorcast_${slug(`${p.level.id}_${id}`)}_count`];
  if (entity) return entity.state;
  const people = (p._people?.[p.level.id] ?? []).filter((p) => p.status !== "unconfirmed");
  return String(people.filter((p) => pointInPolygon([p.x, p.y], points)).length);
}

/** Rooms as the basic zones with their people, and the zones drawn on them. */
export function zoneList(p: FloorCastPanel) {
  const level = p.shown;
  const zones = level.zones ?? [];
  const rooms = level.rooms.filter((room) => !room.stairs);
  return html`
    <h3>${t("Rooms")}</h3>
    ${rooms.map((room) =>
      listRow(p, room.name, countIn(p, room.id, room.points), () => centreOn(p, centroid(room.points)), "people"),
    )}
    <h3>${t("Where people walked")}</h3>
    <div class="row">
      <label class="check"
        ><input type="checkbox" .checked=${!!p._walks} @change=${(e: Event) => showWalks(p, (e.target as HTMLInputElement).checked)} />
        ${t("Show")}</label
      >
      <select @change=${(e: Event) => loadWalks(p, Number((e.target as HTMLSelectElement).value))}>
        ${[1, 6, 24].map((hours) => html`<option value=${hours} ?selected=${hours === p._walkHours}>${hours} h</option>`)}
      </select>
      <button class="danger" @click=${() => clearWalks(p)}>${t("Clear")}</button>
    </div>
    <h3>${t("Zones")}</h3>
    ${zones.map((zone) =>
      listRow(p, 
        zone.name,
        zone.kind === "count" ? countIn(p, zone.id, zone.points) : t(ZONE_LABELS[zone.kind]).replace(/ \(.*\)$/, ""),
        () => p.pick({ kind: "zone", id: zone.id }, centroid(zone.points)),
        zone.kind === "count" ? "people" : "",
      ),
    )}
    ${zones.length ? nothing : html`<p class="muted">${t("No zones. Draw one with Zone to count a part of a room, mark a door or ignore a fan.")}</p>`}
    <p class="muted">
      ${t("Every room a radar or a calibrated camera sees counts its people; zones count a part of a room or steer the tracking. The rules are the same for people seen by radars and by cameras.")}
    </p>
  `;
}

export function showWalks(p: FloorCastPanel, on: boolean): void {
  if (on) loadWalks(p, p._walkHours);
  else p._walks = undefined;
}

/** Walks of the chosen hours from the history the integration keeps. */
export async function loadWalks(p: FloorCastPanel, hours: number): Promise<void> {
  p._walkHours = hours;
  try {
    const result = await p.hass.callWS<{ walks: Point[][] }>({ type: "floorcast/history/get", level: p.level.id, hours });
    p._walks = result.walks;
    p._message = result.walks.length ? "" : t("Nobody walked here in that time.");
  } catch (err) {
    p._message = t("History not read: {error}", { error: String((err as { message?: string }).message ?? err) });
  }
}

export async function clearWalks(p: FloorCastPanel): Promise<void> {
  if (!confirm(t("Clear the history of where people walked on every level?"))) return;
  await p.hass.callWS({ type: "floorcast/history/clear" });
  if (p._walks) p._walks = [];
}

export function centreOn(p: FloorCastPanel, at: Point): void {
  const v = p._view;
  p._view = { ...v, x: at[0] - v.w / 2, y: at[1] - v.h / 2 };
}
