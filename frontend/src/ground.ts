/**
 * EXPERIMENTAL: camera images laid on the ground of the plan; the integration draws them (ground.py).
 *
 * 1. A card or the editor subscribes to the devices it shows and gets their views now and each new one
 *    after: a WebP, transparent outside its zones, with its box on the plan in metres. A view without data
 *    is gone.
 * 2. A new view is shown once decoded, so a phone does not blank it while it decodes.
 *
 * Removing the feature: this file, the preview modes of cameras and its calls in card.ts and panel.ts.
 * State kept: the views shown now.
 */

import { nothing, svg } from "lit";
import { type HomeAssistant } from "./ha";

export interface GroundView {
  id: string;
  level: string;
  data: string | null;
  box: [number, number, number, number];
}

export class GroundFeed {
  private views = new Map<string, GroundView>();
  private unsubscribe?: Promise<() => void>;

  constructor(private onChange: () => void) {}

  get running(): boolean {
    return !!this.unsubscribe;
  }

  /** Rule 1; preview lays a mower also in its dock, for setting up its camera. */
  start(hass: HomeAssistant, devices: string[], preview = false): void {
    if (this.unsubscribe) return;
    this.unsubscribe = hass.connection.subscribeMessage<{ views?: GroundView[]; view?: GroundView }>(
      (message) => {
        for (const view of message.views ?? []) this.show(view);
        if (message.view) this.show(message.view);
      },
      { type: "floorcast/ground/subscribe", devices, preview },
    );
    this.unsubscribe.catch(() => undefined);
  }

  stop(): void {
    this.unsubscribe?.then((unsubscribe) => unsubscribe()).catch(() => undefined);
    this.unsubscribe = undefined;
    this.views.clear();
  }

  /** The views of a level, to be drawn under the walls; only those of the given devices when named. */
  render(level: string, opacity = 0.85, devices?: Set<string>) {
    const views = [...this.views.values()].filter((view) => view.level === level && (!devices || devices.has(view.id)));
    if (!views.length) return nothing;
    return svg`<g class="fc-ground" opacity=${Math.min(Math.max(opacity, 0), 1)} pointer-events="none">
      ${views.map(
        (view) => svg`<image href=${view.data} x=${view.box[0]} y=${view.box[1]} width=${view.box[2]} height=${view.box[3]}
          preserveAspectRatio="none"></image>`,
      )}
    </g>`;
  }

  /** Rule 2. */
  private show(view: GroundView): void {
    if (!view.data) {
      this.views.delete(view.id);
      this.onChange();
      return;
    }
    const apply = () => {
      this.views.set(view.id, view);
      this.onChange();
    };
    const decoder = new Image();
    decoder.src = view.data;
    decoder.decode().then(apply, apply);
  }
}
