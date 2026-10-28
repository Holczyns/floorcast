// Options of the dashboard card, shared by the card and its editor.

export interface CardConfig {
  type: string;
  title?: string;
  /** Ids of the levels shown; all levels without it. */
  levels?: string[];
  /** auto: levels side by side when they fit, otherwise tabs. */
  layout?: "auto" | "tabs" | "side";
  /** toggle: a switch on the card, remembered per browser; show or hide fix it. */
  garden?: "toggle" | "show" | "hide";
  /** Room names on the plan; true by default. */
  names?: boolean;
  /** Humidity and further sensors: auto shows them once the plan is large enough to read them. */
  details?: "auto" | "show" | "hide";
  /** How long to hold a room, light or device before its details open, in milliseconds. */
  hold_time?: number;
  /** A camera that sees a person or a car shows its still by itself; true by default. */
  auto_preview?: boolean;
  /** People and objects leave a short fading track; true by default. */
  trails?: boolean;
  /** A Paths switch on the card shows where people walked over the last day; off by default. */
  history?: boolean;
  /** Part of a level shown, by level id: x, y, width and height in metres; the whole level without it. */
  crop?: Record<string, [number, number, number, number]>;
}
