// Walking grid of a level: cells of CELL metres, open where a walker can stand. Every wall closes all the
// cells it touches, so even a thin partition lying between the middles of two cells stops a walker; doors
// and windows down to the floor stay open.
import type { Point } from "../model";
import { PPM } from "./art";
import type { Scene } from "./scene";

export const CELL = 0.25;

export class Grid {
  readonly cols: number;
  readonly rows: number;
  readonly open: Uint8Array;
  private readonly x0: number;
  private readonly y0: number;
  private readonly paths = new Map<string, Point[] | null>();

  /** free tells, beyond the walls, whether a walker may stand on a point. */
  constructor(scene: Scene, free: (p: Point) => boolean) {
    this.x0 = scene.x0;
    this.y0 = scene.y0;
    this.cols = Math.ceil(scene.width / PPM / CELL);
    this.rows = Math.ceil(scene.height / PPM / CELL);
    this.open = new Uint8Array(this.cols * this.rows);
    for (let j = 0; j < this.rows; j++) for (let i = 0; i < this.cols; i++) this.open[j * this.cols + i] = free(this.centre(i, j)) ? 1 : 0;
    for (const piece of scene.pieces) {
      if (piece.kind === "door" || piece.terrace) continue;
      const [x0, y0, x1, y1] = piece.box;
      const [i0, j0] = this.cell([x0 + 0.01, y0 + 0.01]);
      const [i1, j1] = this.cell([x1 - 0.01, y1 - 0.01]);
      for (let j = Math.max(0, j0); j <= Math.min(this.rows - 1, j1); j++)
        for (let i = Math.max(0, i0); i <= Math.min(this.cols - 1, i1); i++) this.open[j * this.cols + i] = 0;
    }
  }

  centre(i: number, j: number): Point {
    return [this.x0 + (i + 0.5) * CELL, this.y0 + (j + 0.5) * CELL];
  }

  cell(p: Point): [number, number] {
    return [Math.floor((p[0] - this.x0) / CELL), Math.floor((p[1] - this.y0) / CELL)];
  }

  isOpen(p: Point): boolean {
    const [i, j] = this.cell(p);
    return i >= 0 && j >= 0 && i < this.cols && j < this.rows && this.open[j * this.cols + i] === 1;
  }

  /** Whether a straight line between two points runs over open cells only. */
  clear(a: Point, b: Point): boolean {
    const steps = Math.ceil(Math.hypot(b[0] - a[0], b[1] - a[1]) / 0.1);
    for (let k = 1; k <= steps; k++) if (!this.isOpen([a[0] + ((b[0] - a[0]) * k) / steps, a[1] + ((b[1] - a[1]) * k) / steps])) return false;
    return true;
  }

  /**
   * Shortest way between two points through the middles of open cells, or just the end point when there is
   * none: a walker then turns up there instead of going through a wall.
   */
  path(from: Point, to: Point): Point[] {
    const key = `${from[0].toFixed(2)},${from[1].toFixed(2)}>${to[0].toFixed(2)},${to[1].toFixed(2)}`;
    const known = this.paths.get(key);
    if (known) return known;
    const [si, sj] = this.cell(from);
    const [ti, tj] = this.cell(to);
    const n = this.cols * this.rows;
    const inside = (i: number, j: number) => i >= 0 && j >= 0 && i < this.cols && j < this.rows;
    const start = sj * this.cols + si;
    const goal = tj * this.cols + ti;
    let result: Point[] | null = null;
    if (inside(si, sj) && inside(ti, tj)) {
      const cost = new Float32Array(n).fill(Infinity);
      const came = new Int32Array(n).fill(-1);
      const heap: [number, number][] = [];
      const push = (k: number, f: number) => {
        heap.push([f, k]);
        for (let i = heap.length - 1; i > 0; ) {
          const p = (i - 1) >> 1;
          if (heap[p][0] <= heap[i][0]) break;
          [heap[p], heap[i]] = [heap[i], heap[p]];
          i = p;
        }
      };
      const pop = () => {
        const top = heap[0];
        const last = heap.pop()!;
        if (heap.length) {
          heap[0] = last;
          for (let i = 0; ; ) {
            const l = 2 * i + 1;
            const r = l + 1;
            let m = i;
            if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
            if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
            if (m === i) break;
            [heap[m], heap[i]] = [heap[i], heap[m]];
            i = m;
          }
        }
        return top[1];
      };
      cost[start] = 0;
      push(start, 0);
      while (heap.length) {
        const k = pop();
        if (k === goal) break;
        const i = k % this.cols;
        const j = Math.floor(k / this.cols);
        for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]) {
          const ni = i + di;
          const nj = j + dj;
          if (!inside(ni, nj)) continue;
          const nk = nj * this.cols + ni;
          // The goal may lie on a closed cell (a pet bed on furniture); it is always allowed.
          if (!this.open[nk] && nk !== goal) continue;
          if (di && dj && (!this.open[j * this.cols + ni] || !this.open[nj * this.cols + i])) continue;
          const c = cost[k] + (di && dj ? 1.414 : 1);
          if (c < cost[nk]) {
            cost[nk] = c;
            came[nk] = k;
            push(nk, c + Math.hypot(ni - ti, nj - tj));
          }
        }
      }
      if (came[goal] >= 0 || goal === start) {
        const cells: Point[] = [];
        for (let k = goal; k !== start && k >= 0; k = came[k]) cells.unshift(this.centre(k % this.cols, Math.floor(k / this.cols)));
        result = [from, ...cells.slice(0, -1), to];
      }
    }
    result ??= [to];
    this.paths.set(key, result);
    if (this.paths.size > 200) this.paths.delete(this.paths.keys().next().value!);
    return result;
  }
}
