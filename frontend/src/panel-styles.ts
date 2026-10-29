// Styles of the editor: the panel around the plan; the plan itself is drawn with planStyles.
import { css } from "lit";

export const panelStyles = css`
      :host {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background: var(--primary-background-color);
        color: var(--primary-text-color);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
        font-size: 14px;
      }
      .loading {
        padding: 24px;
      }
      .top {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-bottom: 1px solid var(--divider-color);
        background: var(--app-header-background-color, var(--card-background-color));
      }
      .levels,
      .tools,
      .row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .spacer {
        flex: 1;
      }
      button,
      .button,
      select {
        font: inherit;
        color: var(--primary-text-color);
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 6px 12px;
        cursor: pointer;
      }
      button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      button.on,
      .chip.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .chip {
        border-radius: 16px;
        padding: 4px 14px;
      }
      .ghost {
        border-style: dashed;
      }
      .switch {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-left: 10px;
        padding-left: 12px;
        border-left: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
        cursor: pointer;
        user-select: none;
      }
      .switch:first-child {
        margin-left: 0;
        padding-left: 0;
        border-left: 0;
      }
      .switch input {
        display: none;
      }
      .track {
        position: relative;
        width: 34px;
        height: 18px;
        border-radius: 9px;
        background: var(--divider-color, #444);
        transition: background 0.2s;
      }
      .knob {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #fff;
        transition: left 0.2s;
      }
      .switch input:checked + .track {
        background: var(--primary-color);
      }
      .switch input:checked + .track .knob {
        left: 18px;
      }
      button.primary:not(:disabled) {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      button.danger {
        color: var(--error-color, #db4437);
      }
      button.small {
        padding: 2px 8px;
      }
      .main {
        flex: 1;
        display: flex;
        min-height: 0;
      }
      .main > [hidden] {
        display: none;
      }
      .guide {
        flex: 1;
        min-width: 0;
      }
      .canvas {
        flex: 1;
        min-width: 0;
        position: relative;
        background: var(--fc-background);
      }
      .view-buttons {
        position: absolute;
        right: 12px;
        bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .view-buttons button {
        width: 40px;
        height: 40px;
        padding: 0;
        font-size: 20px;
        line-height: 1;
        border-radius: 50%;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
      }
      svg.plan {
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        user-select: none;
      }
      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 0 2px;
        margin: -12px -16px 10px;
        padding: 0 8px;
        border-bottom: 1px solid var(--divider-color);
      }
      .tab {
        border: 0;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        background: none;
        padding: 8px 7px;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .tab.on {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
        background: none;
      }
      aside .tools {
        margin-bottom: 10px;
      }
      aside .tools button,
      aside .tools select {
        padding: 4px 10px;
      }
      .back {
        border: 0;
        background: none;
        padding: 2px 0;
        color: var(--primary-color);
      }
      .filter {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        padding: 5px 8px;
        margin-bottom: 6px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .list-row {
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 8px;
        text-align: left;
        border: 0;
        border-radius: 6px;
        background: none;
        padding: 6px 8px;
      }
      .list-row:not(.static):hover {
        background: var(--secondary-background-color, rgba(127, 127, 127, 0.12));
      }
      .list-row em {
        font-style: normal;
        color: var(--secondary-text-color);
        white-space: nowrap;
      }
      .list-row.unset em {
        color: var(--warning-color, #ffa600);
      }
      /* What the open tab does not edit stays on the plan, dimmed. */
      .mode-plan .kind,
      .mode-settings .kind,
      .mode-devices .kind-radar,
      .mode-people .kind:not(.kind-radar):not(.kind-camera) {
        opacity: 0.3;
      }
      .mode-devices [data-item],
      .mode-people [data-item] {
        opacity: 0.55;
      }
      /* Zones are edited in their tab; in the other tabs they show dimmed, unless the Zones layer is off. */
      .plan:not(.mode-people) .zone {
        opacity: 0.45;
      }
      .list-row.people em {
        color: var(--primary-color, #03a9f4);
        font-weight: 600;
      }
      .calibration-image {
        position: relative;
        margin: 6px 0;
        cursor: crosshair;
        line-height: 0;
      }
      .calibration-image img {
        width: 100%;
        border-radius: 8px;
        user-select: none;
      }
      .calibration-image .mark {
        position: absolute;
        transform: translate(-50%, -50%);
        min-width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 9px;
        text-align: center;
        font-size: 11px;
        font-weight: 600;
        color: #fff;
        background: #ab47bc;
        box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5);
        pointer-events: none;
      }
      .big-image {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        background: rgba(0, 0, 0, 0.85);
      }
      .big-image-bar {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        color: #fff;
      }
      .big-image-bar span {
        flex: 1;
      }
      .big-image-spots {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 12px;
        padding: 0 12px 6px;
        color: #fff;
      }
      .big-image-spots .list-row {
        width: auto;
        align-items: center;
      }
      .big-image-view {
        flex: 1;
        min-height: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 12px 12px;
      }
      .calibration-image.big {
        margin: 0;
        transition: transform 0.12s ease-out;
      }
      .calibration-image.big img {
        width: 100%;
        border-radius: 4px;
      }
      .calibration-image.big .mark {
        transform: translate(-50%, -50%);
      }
      .calibration-image .mark.waiting {
        background: var(--primary-color, #03a9f4);
      }
      .hit-line {
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .calibration-mark circle {
        fill: #ab47bc;
        stroke: #fff;
        stroke-width: 0.02;
      }
      .calibration-mark text {
        fill: #fff;
        text-anchor: middle;
        dominant-baseline: central;
        font-weight: 600;
        pointer-events: none;
      }
      .seen-path {
        fill: none;
        stroke: #ab47bc;
        stroke-opacity: 0.7;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .walk {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.25;
        stroke-width: 0.08;
        stroke-linecap: round;
        stroke-linejoin: round;
        pointer-events: none;
      }
      .radar-range.camera {
        fill: #ab47bc;
        stroke: #ab47bc;
      }
      .radar-range {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.06;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
        pointer-events: none;
      }
      aside {
        width: 320px;
        overflow: auto;
        padding: 12px 16px;
        border-left: 1px solid var(--divider-color);
        background: var(--card-background-color);
      }
      h3 {
        margin: 12px 0 8px;
        font-size: 15px;
      }
      h4 {
        margin: 10px 0 4px;
        font-size: 13px;
        color: var(--secondary-text-color);
      }
      .field {
        display: grid;
        grid-template-columns: 80px 1fr 28px;
        align-items: center;
        gap: 6px;
        margin: 6px 0;
      }
      .field.wide {
        grid-template-columns: 80px 1fr;
      }
      .field input,
      .field select {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .field em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .type-row {
        display: grid;
        grid-template-columns: 1fr 64px 24px 28px;
        gap: 6px;
        align-items: center;
        margin: 6px 0;
      }
      .type-row input,
      .level-row input {
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: transparent;
        color: inherit;
        font: inherit;
      }
      .type-row em {
        color: var(--secondary-text-color);
        font-style: normal;
      }
      .check {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 8px 0;
      }
      .pick {
        margin: 10px 0;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .pick > span {
        color: var(--secondary-text-color);
      }
      .light {
        display: flex;
        gap: 4px;
        align-items: center;
      }
      .light floorcast-entity-picker {
        flex: 1;
        min-width: 0;
      }
      .plan.placing {
        cursor: crosshair;
      }
      .placing-bar {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 24px);
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 8px 6px 14px;
        border-radius: 20px;
        background: var(--primary-color);
        color: #fff;
        font-size: 13px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      .placing-bar span {
        opacity: 0.9;
      }
      .placing-bar button {
        flex: none;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        border-color: transparent;
      }
      .toast {
        position: absolute;
        left: 12px;
        bottom: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 6px 6px 14px;
        border-radius: 20px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        font-size: 13px;
      }
      .find-box,
      .layers-box {
        position: relative;
      }
      .find {
        width: 180px;
        font: inherit;
        padding: 5px 8px;
        color: var(--primary-text-color);
        background: var(--primary-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
      }
      .find-results,
      .layers-menu {
        position: absolute;
        top: calc(100% + 4px);
        right: 0;
        z-index: 5;
        min-width: 280px;
        max-height: 60vh;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 10px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
      }
      .find-results button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;
        border: none;
        background: transparent;
      }
      .find-results button:hover {
        background: var(--secondary-background-color, #2a2e35);
      }
      .find-results em {
        font-style: normal;
        font-size: 11px;
        color: var(--secondary-text-color);
      }
            .add-section {
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid var(--divider-color);
      }
      .add-section h4 {
        margin: 0 0 6px;
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        color: var(--secondary-text-color);
      }
      .palette button.on {
        background: var(--primary-color);
        border-color: var(--primary-color);
        color: var(--text-primary-color, #fff);
      }
      .palette button.on kbd {
        color: inherit;
        border-color: currentColor;
      }
      .palette {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin: 0;
      }
      .palette button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: left;
      }
      .palette kbd {
        font: inherit;
        font-size: 11px;
        padding: 0 5px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
        color: var(--secondary-text-color);
      }
      details.settings {
        margin: 8px 0;
      }
      details.settings summary {
        cursor: pointer;
        font-weight: 500;
        padding: 4px 0;
      }
      .level-row {
        display: grid;
        grid-template-columns: 1fr auto auto auto;
        gap: 6px;
        align-items: center;
        margin: 4px 0 0;
      }
      .level-row select.floor {
        grid-column: 1 / -1;
        font-size: 12px;
        margin: 0 0 6px;
      }
      .level-row em {
        grid-column: 1 / -1;
        font-style: normal;
        font-size: 11px;
        margin: -2px 0 4px 2px;
      }
      .level-row + .row {
        margin-bottom: 12px;
      }
      .level-row.current input {
        border-color: var(--primary-color);
      }
      .start {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min(420px, calc(100% - 32px));
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        border-radius: 16px;
        background: var(--card-background-color, #1c1f24);
        border: 1px solid var(--divider-color);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
      }
      .start h2 {
        margin: 0 0 4px;
        font-size: 18px;
        font-weight: 500;
      }
      .start button,
      .start label.button {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        text-align: left;
        padding: 10px 12px;
      }
      .start span {
        font-size: 12px;
        opacity: 0.85;
      }
      .danger-title {
        color: var(--error-color, #db4437);
      }
      .colour-row {
        display: grid;
        grid-template-columns: 1fr 48px 28px;
        align-items: center;
        gap: 8px;
        margin: 4px 0;
        font-size: 13px;
      }
      .colour-row input[type="color"] {
        width: 48px;
        height: 26px;
        padding: 0;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: none;
      }
      .crumbs {
        font-size: 12px;
        color: var(--secondary-text-color);
        margin: 2px 0 4px;
      }
      .crumbs a {
        color: var(--primary-color);
        cursor: pointer;
      }
      .row.end {
        margin-top: 14px;
        padding-top: 10px;
        border-top: 1px solid var(--divider-color);
      }
      .danger.armed {
        background: var(--error-color, #db4437);
        color: #fff;
      }
      h3.link {
        cursor: pointer;
      }
      h3.link:hover {
        color: var(--primary-color);
      }
      .muted.warn {
        color: var(--warning-color, #ffa600);
      }
      .area-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        margin: 6px 0;
      }
      .area-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;
        gap: 8px;
        font-size: 13px;
      }
      .area-row .area-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .area-row select,
      .area-row button {
        font-size: 12px;
      }
      .muted {
        color: var(--secondary-text-color);
      }
      ul.muted {
        padding-left: 18px;
      }
      .message {
        color: var(--secondary-text-color);
        border-top: 1px solid var(--divider-color);
        padding-top: 8px;
      }
      .grid {
        stroke: rgba(255, 255, 255, 0.05);
        stroke-width: 0.01;
      }
      .lamp circle {
        fill: var(--fc-floor);
        stroke: var(--fc-light);
        stroke-width: 0.03;
        cursor: grab;
      }
      .lamp .core {
        fill: var(--fc-light);
        stroke: none;
      }
      .lamp.on circle {
        fill: var(--fc-light);
      }
      .lamp.on .core {
        fill: var(--fc-floor);
      }
      .state-line {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin: 6px 0;
        padding: 6px 8px;
        border-radius: 8px;
        background: var(--secondary-background-color, rgba(255, 255, 255, 0.04));
      }
      .lamp.unset circle {
        stroke: var(--error-color, #db4437);
      }
      .lamp.unset .core {
        fill: var(--error-color, #db4437);
      }
      .lamp .line {
        stroke: var(--fc-light);
        stroke-linecap: round;
        cursor: grab;
      }
      .lamp.unset .line {
        stroke: var(--error-color, #db4437);
      }
      .mower-map {
        opacity: 0.5;
        pointer-events: none;
      }
      /* Wide click targets around small symbols, never drawn. */
      .hit,
      .mower-device .hit,
      .camera-device .hit {
        fill: transparent;
        cursor: grab;
      }
      .mower-device .anchor {
        fill: var(--fc-mower);
        cursor: grab;
      }
      .mower-device .anchor.vacuum {
        fill: var(--fc-water);
      }
      /* Only the head takes clicks; the water it throws lets the mower and the lawn below be picked. */
      .nozzle .area {
        pointer-events: none;
        fill: var(--fc-water);
        fill-opacity: 0.08;
        stroke: var(--fc-water);
        stroke-opacity: 0.6;
        stroke-width: 0.02;
        stroke-dasharray: 0.12 0.08;
      }
      .nozzle circle {
        fill: var(--fc-water);
        cursor: grab;
      }
      .nozzle.unset circle {
        fill: var(--error-color, #db4437);
      }
      .reach-line {
        fill: none;
        stroke: var(--fc-light);
        stroke-opacity: 0.1;
        stroke-linecap: round;
        pointer-events: none;
      }
      .reach {
        fill: var(--fc-light);
        fill-opacity: 0.08;
        stroke: var(--fc-light);
        stroke-opacity: 0.5;
        stroke-width: 0.02;
        stroke-dasharray: 0.1 0.08;
        pointer-events: none;
      }
      .handle {
        fill: #fff;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.02;
        cursor: grab;
      }
      .handle.mid {
        fill: var(--primary-color, #03a9f4);
        opacity: 0.6;
      }
      .selected {
        fill: none;
        stroke: var(--primary-color, #03a9f4);
        stroke-opacity: 0.55;
        pointer-events: none;
      }
      .zone .area {
        fill: var(--zone-color);
        fill-opacity: 0.08;
        stroke: var(--zone-color);
        stroke-width: 0.03;
        stroke-dasharray: 0.15 0.1;
        pointer-events: none;
      }
      .zone .edge {
        fill: none;
        stroke: transparent;
        pointer-events: stroke;
        cursor: pointer;
      }
      .zone-label {
        fill: var(--zone-color);
        text-anchor: middle;
        dominant-baseline: middle;
        pointer-events: none;
      }
      .zone.count {
        --zone-color: #7e57c2;
      }
      .zone.entrance {
        --zone-color: #2e7d32;
      }
      .zone.exclude {
        --zone-color: #c62828;
      }
      .zone.stationary {
        --zone-color: #ef6c00;
      }
      .selected-area {
        fill: var(--primary-color, #03a9f4);
        fill-opacity: 0.12;
        stroke: var(--primary-color, #03a9f4);
        stroke-width: 0.03;
        pointer-events: none;
      }
      .draft,
      .draft-wall {
        fill: rgba(3, 169, 244, 0.12);
        stroke: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .draft-wall {
        fill: none;
        stroke-opacity: 0.6;
        stroke-linecap: square;
      }
      .draft {
        stroke-width: 0.03;
      }
      .cursor {
        fill: var(--primary-color, #03a9f4);
        pointer-events: none;
      }
      .measure {
        fill: var(--primary-text-color);
        pointer-events: none;
      }
      .measure.typed {
        fill: var(--primary-color);
        font-weight: 600;
      }
      @media (max-width: 800px) {
        .main {
          flex-direction: column;
        }
        aside {
          width: auto;
          max-height: 40vh;
          border-left: 0;
          border-top: 1px solid var(--divider-color);
        }
      }
    `;
