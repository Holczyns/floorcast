// Forms of the devices in the editor, with the calibration of cameras and the image it is picked on.
import { html, nothing } from "lit";
import { N_, t } from "./i18n";
import {
  DEFAULT_CAMERA_RANGE,
  DEFAULT_FIELD_OF_VIEW,
  DEFAULT_GLOW,
  DEFAULT_RADAR_RANGE,
  DEFAULT_RADAR_VIEW,
  DEFAULT_THROW,
  type Device,
  radarSources,
  radarTargets,
  calibrationScale,
  type Point,
  indicatorState,
  SWITCHABLE_DOMAINS,
  dist,
  deviceCentre,
  roomAt,
  MAX_SECONDARY,
  type SensorType,
  type SensorValue,
  homography,
  MIN_GROUND_SPOTS,
  type PreviewMode,
  ALARM_CLASSES,
} from "./model";
import { mowerPlace, DEFAULT_SCREEN_THROW, DEFAULT_SCREEN_SPREAD } from "./render";
import { Registry, INDICATOR_DOMAINS, View, Drag, round, fix, aheadToPlan, planToAhead } from "./panel-defs";
import type { FloorCastPanel } from "./panel";
import { entityName } from "./panel-lists";
import { confirmCheck, deleteButton, loadRegistry, number, text } from "./panel-forms";

export function radarProperties(p: FloorCastPanel, device: Device) {
  const sources = radarSources(p.hass.states);
  const seen = radarTargets(device, p.hass.states).length;
  return html`
    <h3>${t("Radar")}</h3>
    <label class="field wide">
      <span>${t("Sensors")}</span>
      <select @change=${(e: Event) => p.change(() => (device.source = (e.target as HTMLSelectElement).value || null))}>
        <option value="" ?selected=${!device.source}>–</option>
        ${sources.map((source) => html`<option value=${source} ?selected=${source === device.source}>sensor.${source}_target_…</option>`)}
      </select>
    </label>
    <p class="muted">
      ${device.source
        ? seen === 1
          ? t("Sees 1 person now.")
          : t("Sees {count} people now.", { count: seen })
        : t("Choose the target sensors of the radar.")}
    </p>
    ${number(p, t("Heading"), device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 1, "°")}
    ${number(p, t("View"), device.arc ?? DEFAULT_RADAR_VIEW, (v) => (device.arc = Math.min(180, Math.max(10, v))), 5, "°")}
    ${number(p, t("Range"), device.radius ?? DEFAULT_RADAR_RANGE, (v) => (device.radius = Math.max(1, v)), 0.5, "m")}
    <label class="check"
      ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => p.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
      ${t("Mirror (people move the wrong way sideways)")}</label
    >
    <p class="muted">
      ${t("Place the radar where it hangs and aim it with the handle. Walk across the room and watch the dot: turn the radar until the dot follows you, and mirror it when it goes left as you go right. Targets beyond the range are ignored.")}
    </p>
    ${deleteButton(p)}
  `;
}

export function cameraProperties(p: FloorCastPanel, device: Device) {
  return html`
    <h3>${t("Camera")}</h3>
    <div class="pick">
      <span>${t("Camera")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["camera"]}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)}
    ${number(p, t("Heading"), device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 5, "°")}
    ${number(p, t("View"), device.arc ?? DEFAULT_FIELD_OF_VIEW, (v) => (device.arc = Math.min(360, Math.max(10, v))), 5, "°")}
    ${number(p, t("Range"), device.radius ?? DEFAULT_CAMERA_RANGE, (v) => (device.radius = Math.max(1, v)), 0.5, "m")}
    <p class="muted">${t("Drag the handle at the end of the view to aim the camera. On the card a tap shows a still, holding opens the live view.")}</p>
    ${detectionProperties(p, device)} ${frigateProperties(p, device)} ${groundProperties(p, device)}
    ${deleteButton(p)}
  `;
}

/**
 * The sensor that says the camera sees someone, any binary sensor. One of the camera's own device is offered:
 * a person sensor first, then motion or occupancy.
 */
export function detectionProperties(p: FloorCastPanel, device: Device) {
  const registry = typeof p._registry === "object" ? p._registry : undefined;
  if (p._registry === undefined) queueMicrotask(() => loadRegistry(p));
  const suggestion = device.detection ? undefined : detectionSuggestion(p, device, registry);
  return html`
    <div class="pick">
      <span>${t("Detection sensor")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["binary_sensor"]}
        .value=${device.detection ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.detection = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.detection)}
    ${suggestion
      ? html`<div class="row">
          <button @click=${() => p.change(() => (device.detection = suggestion))}>${t("Use {name}", { name: String(entityName(p, suggestion) ?? suggestion) })}</button>
        </div>`
      : nothing}
    <p class="muted">
      ${t("While it is on, the view of the camera turns red on the card and its still opens by itself: a person sensor of Frigate, UniFi Protect or Reolink, or any motion sensor.")}
    </p>
  `;
}

/** A detection sensor for a camera: of the same device, or named like the camera; a person sensor before motion. */
export function detectionSuggestion(p: FloorCastPanel, device: Device, registry: Registry | undefined): string | undefined {
  if (!device.entity) return undefined;
  const name = device.entity.split(".")[1];
  const own = registry?.entityDevice[device.entity];
  const candidates = Object.keys(p.hass.states).filter((id) => {
    if (!id.startsWith("binary_sensor.")) return false;
    const sameDevice = !!own && registry?.entityDevice[id] === own;
    return sameDevice || id.startsWith(`binary_sensor.${name}_`);
  });
  const score = (id: string) => {
    const cls = p.hass.states[id]?.attributes.device_class;
    if (/person/.test(id)) return 0;
    if (cls === "occupancy" || cls === "presence") return 1;
    if (cls === "motion" || /motion/.test(id)) return 2;
    return 9;
  };
  return candidates.filter((id) => score(id) < 9).sort((a, b) => score(a) - score(b))[0];
}

/** EXPERIMENTAL: shows the ground image of a device of the saved plan on the editor plan, a mower also in its dock. */
export function toggleGroundPreview(p: FloorCastPanel, device: Device): void {
  const previews = new Set(p._groundPreview);
  if (previews.has(device.id)) previews.delete(device.id);
  else previews.add(device.id);
  p._groundPreview = previews;
  // The feed asks for the devices previewed now, so it starts again with the new set.
  p._groundFeed.stop();
  if (previews.size) p._groundFeed.start(p.hass, [...previews], true);
}

/** EXPERIMENTAL: preview switch and the button that saves the plan, so the integration draws the new settings. */
export function groundPreviewRow(p: FloorCastPanel, device: Device) {
  const unsaved = !!p._plan && JSON.stringify(p._plan) !== p._saved;
  return html`<div class="row">
      <button class=${p._groundPreview.has(device.id) ? "primary" : ""} @click=${() => toggleGroundPreview(p, device)}>
        ${p._groundPreview.has(device.id) ? t("Hide preview") : t("Preview")}
      </button>
      <button ?disabled=${!unsaved || p._saving} @click=${() => p.save()}>${t("Save and redraw")}</button>
    </div>
    <p class="muted">${t("The integration draws the saved plan; save after a change to see it.")}</p>`;
}

/**
 * EXPERIMENTAL: the ground view of a camera or of a mower camera, in the same order for both: where the
 * image lies, its calibration spots, its visible range, then what only a mower has, and the preview.
 */
export function groundProperties(p: FloorCastPanel, device: Device) {
  const mower = device.kind === "mower";
  const entity = mower ? device.camera : device.entity;
  if (!entity) return mower ? html`<h3>${t("Ground view (experimental)")}</h3><p class="muted">${t("Choose the camera of the mower above first.")}</p>` : nothing;
  const ground = device.ground ?? {};
  const set = (apply: (ground: NonNullable<Device["ground"]>) => void) => {
    const next = { ...device.ground };
    apply(next);
    device.ground = next;
  };
  const target = mower ? "mower" : "ground";
  const pairs = pairsOf(p, device, target);
  const pose = mower ? mowerPose(p, device) : undefined;
  const areas = [...(p.level.zones ?? []), ...p.level.rooms];
  const chosen = new Set(ground.zones ?? []);
  const toggle = (id: string, on: boolean) =>
    p.change(() => set((g) => (g.zones = on ? [...(g.zones ?? []).filter((zone) => zone !== id), id] : (g.zones ?? []).filter((zone) => zone !== id))));
  return html`
    <h3>${t("Ground view (experimental)")}</h3>
    <p class="muted">
      ${t("The camera image is laid on the plan like the top view of a car. Only flat ground lies true; walls, fences and people stretch.")}
    </p>
    <label class="field wide">
      <span>${t("Preview")}</span>
      <select
        @change=${(e: Event) =>
          p.change(() => {
            const mode = (e.target as HTMLSelectElement).value as PreviewMode;
            if (mode === "window") delete device.preview;
            else device.preview = mode;
          })}
      >
        ${(
          [
            ["window", N_("Window")],
            ["ground", N_("Ground")],
            ["both", N_("Ground and window")],
          ] as [PreviewMode, string][]
        ).map(([mode, label]) => html`<option value=${mode} ?selected=${(device.preview ?? "window") === mode}>${t(label)}</option>`)}
      </select>
    </label>
    <p class="muted">
      ${mower
        ? t("What the card shows when the preview opens: a tap on the mower.")
        : t("What the card shows when the preview opens: the camera sees someone, or a tap on it.")}
      ${t("The ground needs {count} calibration spots.", { count: MIN_GROUND_SPOTS })}
    </p>
    ${mower
      ? nothing
      : html`<p class="muted">${t("Lay it on these zones or rooms; tick only the paving or the terrace.")}</p>
          ${areas.map(
            (area) => html`<label class="check"
              ><input type="checkbox" .checked=${chosen.has(area.id)} @change=${(e: Event) => toggle(area.id, (e.target as HTMLInputElement).checked)} />
              ${area.name}</label
            >`,
          )}`}
    <h4>${t("Calibration")}</h4>
    <p class="muted">
      ${pairs.length >= MIN_GROUND_SPOTS
        ? t("Calibrated with {count} spots.", { count: pairs.length })
        : t("{count} of at least {needed} spots; the image is not laid until then.", { count: pairs.length, needed: MIN_GROUND_SPOTS })}
      ${mower
        ? t("Click a spot on the ground in the image, then the same spot on the plan, with the mower standing still.")
        : t("Click a spot on the ground in the image, then the same spot on the plan.")}
    </p>
    ${spotList(p, device, target)}
    <div class="row">
      <button ?disabled=${mower && !pose} @click=${() => openBigImage(p, target)}>${t("Calibrate")}</button>
      ${mower
        ? nothing
        : html`<button
            ?disabled=${!(device.calibration?.length ?? 0)}
            @click=${() => p.change(() => set((g) => (g.calibration = structuredClone(device.calibration ?? []))))}
          >
            ${t("Copy from Frigate")}
          </button>`}
      <button ?disabled=${!pairs.length} @click=${() => p.change(() => set((g) => (mower ? (g.spots = []) : (g.calibration = []))))}>${t("Clear")}</button>
    </div>
    ${mower && !pose ? html`<p class="muted">${t("The mower reports no heading now, so it cannot be calibrated.")}</p>` : nothing}
    <h4>${t("Range")}</h4>
    ${number(p, 
      t("Visible range"),
      ground.range ?? (mower ? ground.reach ?? 2 : device.radius ?? DEFAULT_CAMERA_RANGE),
      (v) => set((g) => (g.range = Math.min(30, Math.max(0.3, v)))),
      mower ? 0.1 : 0.5,
      "m",
    )}
    <p class="muted">
      ${mower
        ? t("The image is whole up to half the range from the mower and fades out at the range.")
        : t("The image is whole up to half the range from the camera and fades out at the range.")}
    </p>
    ${mower
      ? html`
          ${number(p, t("Position delay"), ground.delay ?? 0, (v) => set((g) => (g.delay = Math.min(10, Math.max(0, v)))), 0.5, "s")}
          <p class="muted">
            ${t("The mower and its track are shown this late and move smoothly between the places it reports, every few seconds; set it to the time between reports or more.")}
          </p>
          ${number(p, t("View delay"), ground.viewDelay ?? 0, (v) => set((g) => (g.viewDelay = Math.min(10, Math.max(0, v)))), 0.5, "s")}
          <p class="muted">
            ${t("The camera image on the ground is laid this late. It keeps pace with the mower at the position delay less the time its images come late; change it until the image stops running ahead of or behind the plan while the mower drives along an edge.")}
          </p>
        `
      : nothing}
    ${groundPreviewRow(p, device)}
  `;
}

/** Frigate camera and the calibration that places its objects on the plan. */
export function frigateProperties(p: FloorCastPanel, device: Device) {
  if (!p._frigateCameras) {
    p._frigateCameras = [];
    p.hass
      .callWS<{ cameras: { name: string; size: [number, number] | null }[] }>({ type: "floorcast/frigate/cameras" })
      .then((result) => (p._frigateCameras = result.cameras))
      .catch(() => undefined);
  }
  const cameras = p._frigateCameras;
  const known = cameras.find((camera) => camera.name === device.frigate);
  const pairs = device.calibration ?? [];
  const picture = device.entity ? p.hass.states[device.entity]?.attributes.entity_picture : undefined;
  return html`
    <h3>${t("Objects from Frigate")}</h3>
    <label class="field wide">
      <span>Frigate</span>
      <select @change=${(e: Event) => p.change(() => (device.frigate = (e.target as HTMLSelectElement).value || null))}>
        <option value="" ?selected=${!device.frigate}>–</option>
        ${cameras.map((camera) => html`<option value=${camera.name} ?selected=${camera.name === device.frigate}>${camera.name}</option>`)}
        ${device.frigate && !known ? html`<option selected value=${device.frigate}>${device.frigate}</option>` : nothing}
      </select>
    </label>
    ${device.frigate && !known?.size
      ? html`${number(p, t("Detect width"), device.detect?.[0] ?? 1280, (v) => (device.detect = [v, device.detect?.[1] ?? 720]), 1, "px")}
        ${number(p, t("Detect height"), device.detect?.[1] ?? 720, (v) => (device.detect = [device.detect?.[0] ?? 1280, v]), 1, "px")}`
      : nothing}
    ${device.frigate
      ? html`<p class="muted">
            ${t("Click a spot on the ground in the image, then the same spot on the plan: corners of the terrace, of the paving, a post. Four or more spots, spread as wide as the camera sees.")}
          </p>
          ${picture
            ? html`<div class="row">
                  <button class="primary" @click=${() => openBigImage(p, "frigate")}>${t("Calibrate on a large image")}</button>
                </div>
                <div class="calibration-image" @click=${() => openBigImage(p, "frigate")}>
                <img src=${picture} alt="" draggable="false" />
                ${pairs.map(
                  (pair, i) =>
                    html`<span class="mark" style="left:${pair.image[0] * 100}%;top:${pair.image[1] * 100}%">${i + 1}</span>`,
                )}
                ${p._imagePoint
                  ? html`<span class="mark waiting" style="left:${p._imagePoint[0] * 100}%;top:${p._imagePoint[1] * 100}%">?</span>`
                  : nothing}
              </div>`
            : html`<p class="muted">${t("Choose the camera entity above to see its image.")}</p>`}
          ${spotList(p, device, "frigate")}
          <p class="muted">
            ${pairs.length < 4
              ? t("{count} of at least 4 spots.", { count: pairs.length })
              : homography(pairs)
                ? t("Calibrated with {count} spots.", { count: pairs.length })
                : t("These spots do not fix the view; spread them wider, not along one line.")}
          </p>
          <div class="row">
            <button ?disabled=${!homography(pairs)} @click=${() => loadPaths(p, device)}>${t("Show recent paths")}</button>
          </div>`
      : nothing}
  `;
}

/** Calibration spots of a camera: the Frigate ones, or the ground ones while those are calibrated. */
export function pairsOf(p: FloorCastPanel, device: Device, target = p._calibrationTarget): { image: Point; plan: Point }[] {
  if (target === "mower") {
    const pose = mowerPose(p, device);
    return (device.ground?.spots ?? []).map((spot) => ({ image: spot.image, plan: pose ? aheadToPlan(spot.ahead, pose) : spot.ahead }));
  }
  return (target === "ground" ? device.ground?.calibration : device.calibration) ?? [];
}

/** Mower spots are kept relative to the mower, from where it stands now; without its pose they stay as they are. */
export function setPairs(p: FloorCastPanel, device: Device, pairs: { image: Point; plan: Point }[], target = p._calibrationTarget): void {
  if (target === "mower") {
    const pose = mowerPose(p, device);
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
export function spotList(p: FloorCastPanel, device: Device, target: "frigate" | "ground" | "mower") {
  const pairs = pairsOf(p, device, target);
  const fixed = target !== "mower" || !!mowerPose(p, device);
  return pairs.map(
    (pair, i) => html`<div class="list-row static">
      <span
        >${t("{number}. image {imageX}, {imageY} → plan {planX}, {planY}", {
          number: i + 1,
          imageX: pair.image[0].toFixed(2),
          imageY: pair.image[1].toFixed(2),
          planX: pair.plan[0].toFixed(2),
          planY: pair.plan[1].toFixed(2),
        })}</span
      >
      <button
        class="small"
        title=${t("Remove this spot")}
        ?disabled=${!fixed}
        @click=${() => p.change(() => setPairs(p, device, pairs.filter((_, j) => j !== i), target))}
      >
        ×
      </button>
    </div>`,
  );
}

/** EXPERIMENTAL: where a mower stands now and where it heads, from its map camera; undefined without a heading. */
export function mowerPose(p: FloorCastPanel, device: Device): { at: Point; heading: number } | undefined {
  const place = device.map ? mowerPlace(device, p.hass.states[device.map]?.attributes) : undefined;
  return place && place.heading !== undefined ? { at: place.at, heading: place.heading } : undefined;
}

export function openBigImage(p: FloorCastPanel, target: "frigate" | "ground" | "mower"): void {
  const device = p._selection?.kind === "device" ? p.findDevice(p._selection.id) : undefined;
  if (target === "mower" && device && !mowerPose(p, device)) {
    p._message = t("The mower reports no heading now; calibrate it when its map shows where it heads.");
    return;
  }
  p._calibrationTarget = target;
  p._bigImage = true;
  p._imagePoint = undefined;
  p._imageZoom = { scale: 1, origin: [50, 50] };
  p._message = t("Click a spot on the ground in the image; the wheel zooms in.");
}

/**
 * The camera image over the plan, for picking spots precisely. It hides while the same spot is
 * picked on the plan and comes back for the next one until Done.
 */
export function renderBigImage(p: FloorCastPanel) {
  const device = p._selection?.kind === "device" ? p.findDevice(p._selection.id) : undefined;
  const entity = device?.kind === "camera" ? device.entity : device?.kind === "mower" ? device.camera : undefined;
  const picture = entity ? p.hass.states[entity]?.attributes.entity_picture : undefined;
  if (!p._bigImage || !device || !picture || p._imagePoint) return nothing;
  const pairs = pairsOf(p, device);
  const zoom = p._imageZoom;
  return html`<div class="big-image" @wheel=${(e: WheelEvent) => zoomImage(p, e)}>
    <div class="big-image-bar">
      <span>
        ${pairs.length === 1
          ? t("1 spot, at least 4 needed. Click a spot on the ground.")
          : pairs.length < 4
            ? t("{count} spots, at least 4 needed. Click a spot on the ground.", { count: pairs.length })
            : t("{count} spots. Click a spot on the ground.", { count: pairs.length })}
      </span>
      <button ?disabled=${!pairs.length} @click=${() => p.change(() => setPairs(p, device, pairs.slice(0, -1)))}>${t("Remove last")}</button>
      <button @click=${() => (p._imageZoom = { scale: 1, origin: [50, 50] })}>${t("Fit")}</button>
      <button class="primary" @click=${() => {
        p._bigImage = false;
        p._message = "";
      }}>${t("Done")}</button>
    </div>
    <div class="big-image-spots">${spotList(p, device, p._calibrationTarget)}</div>
    <div class="big-image-view">
      <div
        class="calibration-image big"
        style="width:min(100%, calc((100vh - 190px) * ${p._imageAspect.toFixed(4)}));transform:scale(${zoom.scale});transform-origin:${zoom.origin[0]}% ${zoom.origin[1]}%"
        @click=${(e: MouseEvent) => pickImagePoint(p, e)}
      >
        <img
          src=${picture}
          alt=""
          draggable="false"
          @load=${(e: Event) => {
            const img = e.target as HTMLImageElement;
            if (img.naturalHeight) p._imageAspect = img.naturalWidth / img.naturalHeight;
            p.requestUpdate();
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
export function zoomImage(p: FloorCastPanel, event: WheelEvent): void {
  event.preventDefault();
  const frame = p.renderRoot.querySelector(".calibration-image.big") as HTMLElement | null;
  if (!frame) return;
  const box = frame.getBoundingClientRect();
  const origin: Point = [
    Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
    Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
  ];
  const scale = Math.min(6, Math.max(1, p._imageZoom.scale * (event.deltaY < 0 ? 1.25 : 0.8)));
  p._imageZoom = { scale, origin: scale === 1 ? [50, 50] : origin };
}

export function pickImagePoint(p: FloorCastPanel, event: MouseEvent): void {
  const box = (event.currentTarget as HTMLElement).getBoundingClientRect();
  const u = Math.min(1, Math.max(0, (event.clientX - box.left) / box.width));
  const v = Math.min(1, Math.max(0, (event.clientY - box.top) / box.height));
  p._imagePoint = [fix(u), fix(v)];
  p._tool = "calibrate";
  p._message = t("Now click the same spot on the plan.");
}

/** Paths of the last people events of the camera, from the Frigate integration. */
export async function loadPaths(p: FloorCastPanel, device: Device): Promise<void> {
  try {
    const events = await p.hass.callWS<{ data?: { path_data?: [Point, number][] } }[]>({
      type: "frigate/events/get",
      instance_id: "frigate",
      cameras: [device.frigate],
      labels: ["person"],
      limit: 15,
    });
    const paths = events.map((e) => (e.data?.path_data ?? []).map(([q]) => q)).filter((path) => path.length > 1);
    p._paths = new Map(p._paths).set(device.id, paths);
    p._message = paths.length
      ? t("{count} recent paths drawn on the plan.", { count: paths.length })
      : t("No recent paths of people from this camera.");
  } catch (err) {
    p._message = t("Paths not read: {error}", { error: String((err as { message?: string }).message ?? err) });
  }
}

export function screenProperties(p: FloorCastPanel, device: Device) {
  const picker = (label: string, domains: string[], value: string | null | undefined, apply: (id: string | null) => void) => html`<div class="pick">
      <span>${label}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${domains}
        .value=${value ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => apply(e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(value)}`;
  return html`
    <h3>${t("Screen")}</h3>
    ${picker(t("Power"), ["remote", "media_player", "switch"], device.entity, (id) => (device.entity = id))}
    ${picker(t("Remote"), ["remote"], device.remote, (id) => (device.remote = id))}
    ${number(p, t("Light reach"), device.radius ?? DEFAULT_SCREEN_THROW, (v) => (device.radius = Math.max(0.5, v)), 0.5, "m")}
    ${number(p, t("Light spread"), device.arc ?? DEFAULT_SCREEN_SPREAD, (v) => (device.arc = Math.min(160, Math.max(0, v))), 5, "°")}
    <div class="row">
      <button title=${t("Lets the light fall on the other side of the screen")} @click=${() => p.change(() => (device.flip = !device.flip))}>
        ${t("Flip light side")}
      </button>
    </div>
    ${confirmCheck(p, device)}
    <p class="muted">
      ${t("Draw the screen as a line: a projector screen, a TV or a monitor. While it is on, its light falls into the room as shown when selected. On the card a tap switches it on or off; holding opens a remote control with arrows, OK, back, home, volume and play, sent to the remote entity.")}
    </p>
    ${deleteButton(p)}
  `;
}

/** How one value of a sensor is written: its unit, whether the unit shows, and its decimals. */
export function sensorValueSettings(p: FloorCastPanel, value: SensorValue, apply: (change: (value: SensorValue) => void) => void) {
  return html`<label class="field wide">
      <span>${t("Unit")}</span>
      <select @change=${(e: Event) => apply((v) => (v.unit = (e.target as HTMLSelectElement).value as SensorValue["unit"]))}>
        <option value="auto" ?selected=${(value.unit ?? "auto") === "auto"}>${t("Short (°, %, or the entity's)")}</option>
        <option value="entity" ?selected=${value.unit === "entity"}>${t("The entity's")}</option>
        <option value="custom" ?selected=${value.unit === "custom"}>${t("Custom")}</option>
      </select>
    </label>
    ${value.unit === "custom" ? text(p, t("Unit text"), value.unitText ?? "", (v) => apply((s) => (s.unitText = v))) : nothing}
    <label class="field wide">
      <span>${t("Decimals")}</span>
      <select
        @change=${(e: Event) => {
          const chosen = (e.target as HTMLSelectElement).value;
          apply((v) => (chosen === "auto" ? delete v.decimals : (v.decimals = Number(chosen))));
        }}
      >
        ${["auto", "0", "1", "2", "3"].map(
          (d) => html`<option value=${d} ?selected=${(value.decimals === undefined ? "auto" : String(value.decimals)) === d}>${d === "auto" ? t("Auto") : d}</option>`,
        )}
      </select>
    </label>
    <label class="check"
      ><input type="checkbox" .checked=${value.showUnit !== false} @change=${(e: Event) => apply((v) => (v.showUnit = (e.target as HTMLInputElement).checked))} />
      ${t("Show the unit")}</label
    >`;
}

/**
 * A sensor: its type, an optional header, the main value and up to MAX_SECONDARY values under it, each
 * with its unit, unit visibility and decimals; a secondary value may also have a label.
 */
export function sensorProperties(p: FloorCastPanel, device: Device) {
  const type = device.sensorType ?? "generic";
  if (type === "alarm") return alarmProperties(p, device);
  const deviceClass = type === "generic" ? undefined : type;
  const domains = ["sensor", "input_number", "number", "counter", "binary_sensor", "input_text", "input_select"];
  const picker = (label: string, value: string | null | undefined, apply: (id: string | null) => void, only?: string) => html`<div class="pick">
      <span>${label}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${only ? ["sensor"] : domains}
        .deviceClass=${only}
        .value=${value ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => apply(e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(value)}`;
  const secondary = device.secondary ?? [];
  const room = roomAt(p.level, device.at);
  return html`
    <h3>${t("Sensor")}</h3>
    ${sensorTypeSelect(p, device)}
    ${text(p, t("Header"), device.label ?? "", (v) => (v.trim() ? (device.label = v.trim()) : delete device.label))}
    <h4>${t("Main value")}</h4>
    ${picker(t("Entity"), device.entity, (id) => (device.entity = id), deviceClass)}
    ${sensorValueSettings(p, device.main ?? {}, (change) =>
      p.change(() => {
        device.main = { ...device.main };
        change(device.main);
      }),
    )}
    ${secondary.map(
      (value, i) => html`<h4>${t("Secondary value {number}", { number: i + 1 })}</h4>
        ${picker(t("Entity"), value.entity, (id) => (value.entity = id))}
        ${text(p, t("Label"), value.label ?? "", (v) => (v.trim() ? (value.label = v.trim()) : delete value.label))}
        ${sensorValueSettings(p, value, (change) => p.change(() => change(value)))}
        <div class="row">
          <button @click=${() => p.change(() => (device.secondary = secondary.filter((_, j) => j !== i)))}>${t("Remove this value")}</button>
        </div>`,
    )}
    ${secondary.length < MAX_SECONDARY
      ? html`<div class="row">
          <button @click=${() => p.change(() => (device.secondary = [...secondary, { entity: null }]))}>${t("Add a secondary value")}</button>
        </div>`
      : nothing}
    <p class="muted">
      ${t("The header stands above the main value, the secondary values under it in smaller type; the card shows them when it is large enough. Holding the sensor on the card opens its main value.")}
      ${type === "temperature"
        ? room
          ? t("Holding {room} on the card opens this temperature.", { room: room.name })
          : t("Outside the rooms.")
        : ""}
    </p>
    ${deleteButton(p)}
  `;
}

/** An indicator: any entity, running by its state or power, switched on a tap when it is a switch. */
export function indicatorProperties(p: FloorCastPanel, device: Device) {
  const stateObj = device.entity ? p.hass.states[device.entity] : undefined;
  const shown = indicatorState(device, stateObj);
  const switchable = !!device.entity && SWITCHABLE_DOMAINS.includes(device.entity.split(".")[0]);
  return html`
    <h3>${t("Indicator")}</h3>
    <div class="pick">
      <span>${t("Entity")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${INDICATOR_DOMAINS}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)}
    ${text(p, t("Name"), device.label ?? "", (v) => (v.trim() ? (device.label = v.trim()) : delete device.label))}
    ${shown.power ? number(p, t("Running from"), device.threshold ?? 5, (v) => (device.threshold = Math.max(0, v)), 1, "W") : nothing}
    ${switchable ? confirmCheck(p, device) : nothing}
    <p class="muted">
      ${t("A dot with the name and state of any entity; it glows while the device runs: a state such as on, running, heating or cleaning, or a power sensor above the watts set.")}
      ${switchable ? t("A tap on the card switches it.") : t("A tap on the card opens it.")}
    </p>
    ${deleteButton(p)}
  `;
}

/** An Alarm sensor: a smoke, gas, carbon monoxide or water sensor, or an alarm panel; it warns on the card. */
export function alarmProperties(p: FloorCastPanel, device: Device) {
  const room = roomAt(p.level, device.at);
  return html`
    <h3>${t("Sensor")}</h3>
    ${sensorTypeSelect(p, device)}
    <div class="pick">
      <span>${t("Entity")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["binary_sensor", "alarm_control_panel"]}
        .deviceClass=${Object.keys(ALARM_CLASSES)}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)}
    <p class="muted">
      ${room
        ? t("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, {room} pulses red and a bar at the top of the card names it; otherwise a small grey symbol shows where it is.", { room: room.name })
        : t("A smoke, gas, carbon monoxide or water sensor, or an alarm panel. While it alarms, a bar at the top of the card names it; otherwise a small grey symbol shows where it is.")}
    </p>
    ${deleteButton(p)}
  `;
}

export function sensorTypeSelect(p: FloorCastPanel, device: Device) {
  const type = device.sensorType ?? "generic";
  return html`<label class="field wide">
    <span>${t("Type")}</span>
    <select @change=${(e: Event) => p.change(() => (device.sensorType = (e.target as HTMLSelectElement).value as SensorType))}>
      ${(
        [
          ["temperature", N_("Temperature")],
          ["humidity", N_("Humidity")],
          ["generic", N_("Other")],
          ["alarm", N_("Alarm")],
        ] as [SensorType, string][]
      ).map(([value, label]) => html`<option value=${value} ?selected=${type === value}>${t(label)}</option>`)}
    </select>
  </label>`;
}

/** Battery sensor written beside a mower or vacuum on the card. */
export function batteryPicker(p: FloorCastPanel, device: Device) {
  return html`<div class="pick">
      <span>${t("Battery")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["sensor"]}
        .deviceClass=${"battery"}
        .value=${device.battery ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.battery = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.battery)}`;
}

export function vacuumProperties(p: FloorCastPanel, device: Device) {
  const pairs = device.pairs ?? [];
  const scale = calibrationScale(device);
  return html`
    <h3>${t("Vacuum")}</h3>
    <div class="pick">
      <span>${t("Vacuum")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["vacuum"]}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${t("Current room sensor")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["sensor"]}
        .value=${device.roomSensor ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.roomSensor = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)} ${p.stateLine(device.roomSensor)}
    ${batteryPicker(p, device)}
    <h3>${t("Calibration")}</h3>
    <p class="muted">
      ${t("1. Place this marker on the dock and put the vacuum on it. 2. Send it somewhere easy to find, a corner of a room, and mark that spot. Two spots give the turn of its map; one spot uses the rotation below.")}
    </p>
    <div class="row">
      <button ?disabled=${!device.entity} @click=${() => p.markDock(device)}>${t("Dock is here")}</button>
      <button
        ?disabled=${!pairs.length}
        @click=${() => {
          p._tool = "mark";
          p._message = t("Click the spot where the vacuum stands now.");
        }}
      >
        ${t("Mark where it stands")}
      </button>
    </div>
    <p class="muted">
      ${pairs.length === 0
        ? t("Not calibrated.")
        : pairs.length === 1
          ? t("Dock marked.")
          : scale
            ? t("Two spots marked, distances agree to {percent}%.", { percent: Math.round(scale * 100) })
            : t("Two spots marked.")}
    </p>
    ${pairs.length < 2 ? number(p, t("Rotation"), device.rotation ?? 0, (v) => (device.rotation = v), 1, "°") : nothing}
    <label class="check"
      ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => p.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
      ${t("Mirror the map")}</label
    >
    ${deleteButton(p)}
  `;
}

export function mowerProperties(p: FloorCastPanel, device: Device) {
  return html`
    <h3>${t("Mower")}</h3>
    <div class="pick">
      <span>${t("Mower")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["lawn_mower"]}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${t("Map camera")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["camera"]}
        .value=${device.map ?? null}
        optional
        @value-changed=${(e: CustomEvent) => {
          p.change(() => (device.map = e.detail));
          p.loadMowerMap(device);
        }}
      ></floorcast-entity-picker>
    </div>
    <div class="pick">
      <span>${t("Camera")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["camera"]}
        .value=${device.camera ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.camera = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)} ${batteryPicker(p, device)}
    ${number(p, t("Rotation"), device.rotation ?? 0, (v) => (device.rotation = v), 0.5, "°")}
    <label class="check"
      ><input type="checkbox" .checked=${!!device.mirror} @change=${(e: Event) => p.change(() => (device.mirror = (e.target as HTMLInputElement).checked))} />
      ${t("Mirror the map")}</label
    >
    <div class="row">
      <button @click=${() => p.loadMowerMap(device)}>${p._mapImages.has(device.id) ? t("Reload map") : t("Show map")}</button>
    </div>
    <p class="muted">
      ${t("Lay the map of the mower over the plan: drag it until its lawn covers the lawn here, turn it with the corner handle and mirror it when it lies the wrong way round. The mower and its dock then appear where they are.")}
    </p>
    ${groundProperties(p, device)}
    ${deleteButton(p)}
  `;
}

export function sprinklerProperties(p: FloorCastPanel, device: Device) {
  return html`
    <h3>${t("Sprinkler")}</h3>
    <div class="pick">
      <span>${t("Valve")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["valve", "switch"]}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)}
    <label class="field wide">
      <span>${t("Nozzle")}</span>
      <select @change=${(e: Event) => p.change(() => (device.nozzle = (e.target as HTMLSelectElement).value as "rotor" | "spray"))}>
        <option value="rotor" ?selected=${(device.nozzle ?? "rotor") === "rotor"}>${t("Rotor (one sweeping stream)")}</option>
        <option value="spray" ?selected=${device.nozzle === "spray"}>${t("Spray (whole arc at once)")}</option>
      </select>
    </label>
    ${number(p, t("Throw"), device.radius ?? DEFAULT_THROW, (v) => (device.radius = Math.max(0.5, v)), 0.5, "m")}
    ${number(p, t("Start"), device.heading ?? 0, (v) => (device.heading = ((v % 360) + 360) % 360), 5, "°")}
    ${number(p, t("Arc"), device.arc ?? 360, (v) => (device.arc = Math.min(360, Math.max(5, v))), 5, "°")}
    ${confirmCheck(p, device, true)}
    <p class="muted">
      ${t("Start is a compass bearing: 0 north, 90 east. Drag the white handle to turn the arc and the blue one to widen it. On the card a tap opens or closes the valve, holding opens its details.")}
    </p>
    ${deleteButton(p)}
  `;
}

export function deviceProperties(p: FloorCastPanel, device?: Device) {
  if (!device) return nothing;
  if (device.kind === "sprinkler") return sprinklerProperties(p, device);
  if (device.kind === "mower") return mowerProperties(p, device);
  if (device.kind === "vacuum") return vacuumProperties(p, device);
  if (device.kind === "camera") return cameraProperties(p, device);
  if (device.kind === "radar") return radarProperties(p, device);
  if (device.kind === "sensor") return sensorProperties(p, device);
  if (device.kind === "screen") return screenProperties(p, device);
  if (device.kind === "indicator") return indicatorProperties(p, device);
  const room = roomAt(p.level, deviceCentre(device));
  const sharing = device.entity
    ? p._plan!.levels.flatMap((level) => level.devices ?? []).filter((other) => other.entity === device.entity).length
    : 0;
  return html`
    <h3>${device.to ? t("Line light") : t("Light")}</h3>
    <div class="pick">
      <span>${t("Entity")}</span>
      <floorcast-entity-picker
        .hass=${p.hass}
        .domains=${["light", "switch"]}
        .value=${device.entity ?? null}
        optional
        @value-changed=${(e: CustomEvent) => p.change(() => (device.entity = e.detail))}
      ></floorcast-entity-picker>
    </div>
    ${p.stateLine(device.entity)}
    ${sharing > 1 ? html`<p class="muted">${t("{count} light points use this entity and switch together.", { count: sharing })}</p>` : nothing}
    ${device.to ? html`<p class="muted">${t("Length {length} m", { length: dist(device.at, device.to).toFixed(2) })}</p>` : nothing}
    ${number(p, device.to ? t("Glow width") : t("Glow"), device.radius ?? DEFAULT_GLOW, (v) => (device.radius = Math.max(0.2, v)), 0.25, "m")}
    ${confirmCheck(p, device)}
    <p class="muted">
      ${!room
        ? t("Outside any room.")
        : device.confirm
          ? t("In {room}: tapping the room leaves this light out.", { room: room.name })
          : t("In {room}: tapping the room switches this light with the others in it.", { room: room.name })}
      ${t("The glow stops at walls and reaches rooms open to this one.")}
    </p>
    ${deleteButton(p)}
  `;
}
