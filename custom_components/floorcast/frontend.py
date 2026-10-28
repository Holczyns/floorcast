"""Serve the editor panel and the dashboard card bundled with the integration."""

from __future__ import annotations

import hashlib
from pathlib import Path

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.components.panel_custom import async_register_panel
from homeassistant.core import HomeAssistant

from .const import DOMAIN

WWW = Path(__file__).parent / "www"
PANEL_FILE = WWW / "floorcast-panel.js"
CARD_FILE = WWW / "floorcast-card.js"
# Must differ from the panel path, or reloading the panel page hits the folder.
URL_BASE = f"/{DOMAIN}_files"


async def async_register_frontend(hass: HomeAssistant) -> None:
    frontend_loaded = ("frontend" in hass.config.components) and ("http" in hass.config.components)
    if not frontend_loaded:
        return
    files_exist = await hass.async_add_executor_job(lambda: PANEL_FILE.is_file() and CARD_FILE.is_file())
    if not files_exist:
        return
    # Without long caching: Firefox kept a half loaded card from a page that went to the login
    # and resumed it with a range request the module loader refused; the hash in the URL is enough.
    await hass.http.async_register_static_paths([StaticPathConfig(URL_BASE, str(WWW), cache_headers=False)])
    panel_tag = await hass.async_add_executor_job(_content_tag, PANEL_FILE)
    card_tag = await hass.async_add_executor_job(_content_tag, CARD_FILE)
    # The card loads on every dashboard, so it needs no manual resource.
    add_extra_js_url(hass, f"{URL_BASE}/{CARD_FILE.name}{card_tag}")
    await async_register_panel(
        hass,
        frontend_url_path=DOMAIN,
        webcomponent_name="floorcast-panel",
        sidebar_title="FloorCast",
        sidebar_icon="mdi:floor-plan",
        module_url=f"{URL_BASE}/{PANEL_FILE.name}{panel_tag}",
        require_admin=True,
    )


def _content_tag(path: Path) -> str:
    """Query string that changes with the file, so browsers never keep an outdated copy."""
    digest = hashlib.sha256(path.read_bytes()).hexdigest()[:12]
    return f"?hash={digest}"
