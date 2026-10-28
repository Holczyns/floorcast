// Visual editor of the card in the dashboard editor: which levels, the part of each level shown,
// the garden, layout and details.
import { defineElement } from "./define";
import { LitElement, css, html, nothing, svg } from "lit";
import { type HomeAssistant, fireEvent } from "./ha";
import { type CardConfig } from "./card-config";
import { type Level, type Plan, type Point, drawnBounds, planRadius } from "./model";
import { PLAN_DEFS, planStyles, renderLevel } from "./render";

type Crop = [number, number, number, number];
const STEP = 0.05;
const snap = (v: number) => Math.round(v / STEP) * STEP;
const MIN_SIZE = 1;

export class FloorCastCardEditor extends LitElement {
  static properties = {
    hass: { attribute: false },
    _config: { state: true },
    _levels: { state: true },
    _plan: { state: true },
    _drag: { state: true },
  };

  hass!: HomeAssistant;
  private _config!: CardConfig;
  /** Levels of the plan, read once, to choose from. */
  private _levels?: { id: string; name: string }[];
  private _plan?: Plan;
  /** Frame being dragged: its level, which corner (0 to 3) or the whole frame, where it started and the frame then. */
  private _drag?: { level: string; part: number | "move"; start: Point; crop: Crop; current: Crop };

  setConfig(config: CardConfig): void {
    this._config = config;
  }

  protected updated(): void {
    if (this.hass && !this._levels) {
      this._levels = [];
      this.hass
        .callWS<{ plan: Plan }>({ type: "floorcast/plan/get" })
        .then((result) => {
          this._plan = result.plan;
          this._levels = result.plan.levels.map((level) => ({ id: level.id, name: level.name }));
        })
        .catch(() => undefined);
    }
  }

  /** Sets one option; an option back at its default leaves the configuration. */
  private set(key: keyof CardConfig, value: unknown, defaultValue?: unknown): void {
    const config: Record<string, unknown> = { ...this._config };
    if (value === undefined || value === "" || value === defaultValue) delete config[key];
    else config[key] = value;
    this._config = config as unknown as CardConfig;
    fireEvent(this, "config-changed", { config: this._config });
  }

  private toggleLevel(id: string, on: boolean): void {
    const all = (this._levels ?? []).map((level) => level.id);
    const current = this._config.levels?.length ? this._config.levels : all;
    const next = all.filter((level) => (level === id ? on : current.includes(level)));
    // All levels is the default, so the option goes away.
    this.set("levels", next.length === all.length ? undefined : next);
  }

  /** The frame of a level: the one being dragged, the one in the configuration, or the whole level. */
  private crop(level: Level): Crop {
    if (this._drag?.level === level.id) return this._drag.current;
    const own = this._config.crop?.[level.id];
    if (own) return own;
    const b = drawnBounds(level);
    return [b.x, b.y, b.w, b.h];
  }

  private toPlan(event: PointerEvent): Point {
    const svgEl = (event.currentTarget as Element).closest("svg") as SVGSVGElement;
    const p = new DOMPoint(event.clientX, event.clientY).matrixTransform(svgEl.getScreenCTM()!.inverse());
    return [p.x, p.y];
  }

  private startDrag(event: PointerEvent, level: Level, part: number | "move"): void {
    event.stopPropagation();
    (event.currentTarget as Element).closest("svg")!.setPointerCapture(event.pointerId);
    const crop = this.crop(level);
    this._drag = { level: level.id, part, start: this.toPlan(event), crop, current: crop };
  }

  private moveDrag(event: PointerEvent): void {
    const drag = this._drag;
    if (!drag) return;
    const p = this.toPlan(event);
    const [x, y, w, h] = drag.crop;
    if (drag.part === "move") {
      const dx = snap(p[0] - drag.start[0]);
      const dy = snap(p[1] - drag.start[1]);
      this._drag = { ...drag, current: [x + dx, y + dy, w, h] };
      return;
    }
    // The corner follows the pointer, the opposite corner stays.
    const corners: Point[] = [
      [x, y],
      [x + w, y],
      [x + w, y + h],
      [x, y + h],
    ];
    const fixed = corners[(drag.part + 2) % 4];
    const q: Point = [snap(p[0]), snap(p[1])];
    const left = Math.min(fixed[0], q[0]);
    const top = Math.min(fixed[1], q[1]);
    const width = Math.max(MIN_SIZE, Math.abs(q[0] - fixed[0]));
    const height = Math.max(MIN_SIZE, Math.abs(q[1] - fixed[1]));
    this._drag = { ...drag, current: [left, top, width, height] };
  }

  private endDrag(level: Level): void {
    const drag = this._drag;
    if (!drag) return;
    this._drag = undefined;
    this.setCrop(level, drag.current.map((v) => Math.round(v * 100) / 100) as Crop);
  }

  /** Stores the frame of a level; the whole level is the default, so it leaves the configuration. */
  private setCrop(level: Level, crop: Crop | undefined): void {
    const all = { ...this._config.crop };
    if (crop) all[level.id] = crop;
    else delete all[level.id];
    this.set("crop", Object.keys(all).length ? all : undefined);
  }

  /** The level with the frame of the part the card shows; dragging a corner resizes it, dragging inside moves it. */
  private renderCrop(level: Level) {
    const b = drawnBounds(level);
    const [x, y, w, h] = this.crop(level);
    // The preview shows the whole level and the frame, even where the frame reaches past it.
    const left = Math.min(b.x, x) - 0.5;
    const top = Math.min(b.y, y) - 0.5;
    const right = Math.max(b.x + b.w, x + w) + 0.5;
    const bottom = Math.max(b.y + b.h, y + h) + 0.5;
    const r = Math.max(right - left, bottom - top) / 40;
    const corners: Point[] = [
      [x, y],
      [x + w, y],
      [x + w, y + h],
      [x, y + h],
    ];
    return html`<div class="crop">
      <div class="crop-head">
        <span>${level.name}</span>
        <button ?disabled=${!this._config.crop?.[level.id]} @click=${() => this.setCrop(level, undefined)}>Whole level</button>
      </div>
      <svg
        viewBox="${left} ${top} ${right - left} ${bottom - top}"
        @pointermove=${(e: PointerEvent) => this.moveDrag(e)}
        @pointerup=${() => this.endDrag(level)}
        @pointercancel=${() => this.endDrag(level)}
      >
        ${PLAN_DEFS} ${renderLevel(level, undefined, planRadius(this._plan))}
        <path
          class="shade"
          fill-rule="evenodd"
          d="M${left} ${top}H${right}V${bottom}H${left}Z M${x} ${y}H${x + w}V${y + h}H${x}Z"
        ></path>
        <rect class="frame" x=${x} y=${y} width=${w} height=${h} @pointerdown=${(e: PointerEvent) => this.startDrag(e, level, "move")}></rect>
        ${corners.map(
          (c, i) => svg`<circle class="corner" cx=${c[0]} cy=${c[1]} r=${r} @pointerdown=${(e: PointerEvent) => this.startDrag(e, level, i)}></circle>`,
        )}
      </svg>
    </div>`;
  }

  private select(label: string, key: keyof CardConfig, options: [string, string][], defaultValue: string) {
    const value = (this._config[key] as string | undefined) ?? defaultValue;
    return html`<label>
      <span>${label}</span>
      <select @change=${(e: Event) => this.set(key, (e.target as HTMLSelectElement).value, defaultValue)}>
        ${options.map(([option, text]) => html`<option value=${option} ?selected=${option === value}>${text}</option>`)}
      </select>
    </label>`;
  }

  render() {
    if (!this._config) return nothing;
    const chosen = this._config.levels;
    return html`
      <label>
        <span>Title</span>
        <input type="text" .value=${this._config.title ?? ""} @change=${(e: Event) => this.set("title", (e.target as HTMLInputElement).value)} />
      </label>
      <div class="group">
        <span>Levels</span>
        ${(this._levels ?? []).map(
          (level) => html`<label class="check">
            <input
              type="checkbox"
              .checked=${!chosen?.length || chosen.includes(level.id)}
              @change=${(e: Event) => this.toggleLevel(level.id, (e.target as HTMLInputElement).checked)}
            />
            ${level.name}
          </label>`,
        )}
      </div>
      <div class="group">
        <span>Visible part</span>
        ${(this._plan?.levels ?? [])
          .filter((level) => !chosen?.length || chosen.includes(level.id))
          .map((level) => this.renderCrop(level))}
        <p class="hint">Drag a corner of the frame to resize it, inside it to move it.</p>
      </div>
      ${this.select(
        "Garden",
        "garden",
        [
          ["toggle", "Switch on the card"],
          ["show", "Always shown"],
          ["hide", "Hidden"],
        ],
        "toggle",
      )}
      ${this.select(
        "Layout",
        "layout",
        [
          ["auto", "Side by side when they fit"],
          ["tabs", "One level, tabs to switch"],
          ["side", "Always side by side"],
        ],
        "auto",
      )}
      ${this.select(
        "Details",
        "details",
        [
          ["auto", "When the plan is large enough"],
          ["show", "Always"],
          ["hide", "Never"],
        ],
        "auto",
      )}
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.names !== false}
          @change=${(e: Event) => this.set("names", (e.target as HTMLInputElement).checked, true)}
        />
        Room names
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.auto_preview !== false}
          @change=${(e: Event) => this.set("auto_preview", (e.target as HTMLInputElement).checked, true)}
        />
        Camera still when it sees someone
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${this._config.trails !== false}
          @change=${(e: Event) => this.set("trails", (e.target as HTMLInputElement).checked, true)}
        />
        Tracks of people and objects
      </label>
      <label class="check">
        <input
          type="checkbox"
          .checked=${!!this._config.history}
          @change=${(e: Event) => this.set("history", (e.target as HTMLInputElement).checked, false)}
        />
        Paths switch: where people walked over the last day
      </label>
      <label>
        <span>Hold time (ms)</span>
        <input
          type="number"
          min="150"
          step="50"
          .value=${String(this._config.hold_time ?? 350)}
          @change=${(e: Event) => this.set("hold_time", Number((e.target as HTMLInputElement).value), 350)}
        />
      </label>
    `;
  }

  static styles = [
    planStyles,
    css`
    :host {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .crop {
      margin: 4px 0 8px;
    }
    .crop-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;
    }
    .crop-head button {
      font: inherit;
      font-size: 0.85em;
      padding: 2px 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      cursor: pointer;
    }
    .crop svg {
      display: block;
      width: 100%;
      max-height: 420px;
      background: var(--fc-background);
      border-radius: 8px;
      touch-action: none;
    }
    .crop .shade {
      fill: rgba(0, 0, 0, 0.55);
      pointer-events: none;
    }
    .crop .frame {
      fill: transparent;
      stroke: var(--primary-color, #03a9f4);
      stroke-width: 0.08;
      cursor: move;
    }
    .crop .corner {
      fill: var(--primary-color, #03a9f4);
      stroke: #fff;
      stroke-width: 0.04;
      cursor: nwse-resize;
    }
    .hint {
      margin: 0;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }
    label,
    .group {
      display: flex;
      flex-direction: column;
      gap: 4px;
      color: var(--primary-text-color);
    }
    label.check {
      flex-direction: row;
      align-items: center;
      gap: 8px;
    }
    span {
      color: var(--secondary-text-color);
      font-size: 0.9em;
    }
    input[type="text"],
    input[type="number"],
    select {
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
    }
  `,
  ];
}

defineElement("floorcast-card-editor", FloorCastCardEditor);
