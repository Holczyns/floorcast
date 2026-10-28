// Registration of the custom elements of FloorCast.
//
// The frontend of Home Assistant may put a polyfilled registry in place of window.customElements
// after this file ran. An element defined in the old registry is then unknown to the dashboard
// ("custom element doesn't exist"), so for a minute after loading the element is defined again
// in whatever registry the page holds. A subclass is defined there, as one constructor cannot be
// registered twice.

const WATCH_MS = 60_000;
const EVERY_MS = 250;

export function defineElement(tag: string, element: CustomElementConstructor): void {
  if (!window.customElements.get(tag)) window.customElements.define(tag, element);
  let registry = window.customElements;
  const started = Date.now();
  const timer = window.setInterval(() => {
    if (window.customElements !== registry) {
      registry = window.customElements;
      if (!registry.get(tag)) registry.define(tag, class extends (element as typeof HTMLElement) {});
    }
    if (Date.now() - started > WATCH_MS) window.clearInterval(timer);
  }, EVERY_MS);
}
