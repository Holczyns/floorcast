import { defineElement } from "./define";
import { LitElement, css, html, nothing } from "lit";
import { type HomeAssistant, fireEvent } from "./ha";

const SHOWN = 60;

/**
 * Entity field with search: typing narrows the list to entities whose name or id contains every
 * typed word. Plain elements only, so the panel does not rely on lazily loaded HA pickers.
 */
export class FloorCastEntityPicker extends LitElement {
  static properties = {
    hass: { attribute: false },
    domains: { attribute: false },
    deviceClass: { attribute: false },
    value: { attribute: false },
    optional: { type: Boolean },
    _query: { state: true },
    _open: { state: true },
  };

  hass!: HomeAssistant;
  domains: string[] = [];
  deviceClass?: string;
  value?: string | null;
  optional = false;
  private _query = "";
  private _open = false;

  private options(): { id: string; name: string }[] {
    const matches = Object.values(this.hass.states).filter((state) => {
      const domainMatches = this.domains.includes(state.entity_id.split(".")[0]);
      const classMatches = !this.deviceClass || state.attributes.device_class === this.deviceClass;
      return domainMatches && (classMatches || state.entity_id === this.value);
    });
    return matches
      .map((state) => ({ id: state.entity_id, name: String(state.attributes.friendly_name ?? state.entity_id) }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  private filtered(): { id: string; name: string }[] {
    const words = this._query.toLowerCase().split(/\s+/).filter(Boolean);
    return this.options().filter((option) => {
      const text = `${option.name} ${option.id}`.toLowerCase();
      return words.every((word) => text.includes(word));
    });
  }

  private pick(id: string | null): void {
    this._open = false;
    this._query = "";
    fireEvent(this, "value-changed", id);
  }

  render() {
    const current = this.value ? this.hass.states[this.value] : undefined;
    const label = this.value ? `${current?.attributes.friendly_name ?? this.value} · ${this.value}` : "";
    const list = this._open ? this.filtered() : [];
    return html`
      <div class="field">
        <input
          type="text"
          placeholder=${this.value ? label : "Search by name"}
          .value=${this._open ? this._query : label}
          @focus=${() => {
            this._open = true;
            this._query = "";
          }}
          @input=${(event: Event) => (this._query = (event.target as HTMLInputElement).value)}
          @keydown=${(event: KeyboardEvent) => {
            if (event.key === "Escape") (event.target as HTMLInputElement).blur();
            if (event.key === "Enter" && list.length) this.pick(list[0].id);
          }}
          @blur=${() => {
            // The list takes its click before the field loses focus.
            window.setTimeout(() => (this._open = false), 150);
          }}
        />
        ${this.optional && this.value
          ? html`<button class="clear" title="Remove" @mousedown=${(e: Event) => e.preventDefault()} @click=${() => this.pick(null)}>×</button>`
          : nothing}
      </div>
      ${this._open
        ? html`<div class="list">
            ${list.slice(0, SHOWN).map(
              (option) => html`<button
                class="option ${option.id === this.value ? "on" : ""}"
                @mousedown=${(e: Event) => e.preventDefault()}
                @click=${() => this.pick(option.id)}
              >
                <span>${option.name}</span><em>${option.id}</em>
              </button>`,
            )}
            ${list.length > SHOWN ? html`<p>${list.length - SHOWN} more; type more of the name.</p>` : nothing}
            ${list.length ? nothing : html`<p>Nothing matches.</p>`}
          </div>`
        : nothing}
    `;
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }
    .field {
      display: flex;
      gap: 4px;
    }
    input {
      flex: 1;
      min-width: 0;
      box-sizing: border-box;
      padding: 6px 8px;
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: var(--card-background-color, transparent);
      color: var(--primary-text-color);
      font: inherit;
      text-overflow: ellipsis;
    }
    input::placeholder {
      color: var(--secondary-text-color);
    }
    .clear {
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      padding: 0 8px;
      cursor: pointer;
    }
    .list {
      position: absolute;
      z-index: 5;
      left: 0;
      right: 0;
      top: calc(100% + 2px);
      max-height: 260px;
      overflow: auto;
      background: var(--card-background-color, #1c1c1c);
      border: 1px solid var(--divider-color);
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
    .option {
      display: block;
      width: 100%;
      text-align: left;
      border: 0;
      background: none;
      color: var(--primary-text-color);
      font: inherit;
      padding: 5px 8px;
      cursor: pointer;
    }
    .option:hover,
    .option.on {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.15));
    }
    .option span,
    .option em {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .option em {
      font-style: normal;
      font-size: 0.85em;
      color: var(--secondary-text-color);
    }
    p {
      margin: 6px 8px;
      color: var(--secondary-text-color);
    }
  `;
}

defineElement("floorcast-entity-picker", FloorCastEntityPicker);
