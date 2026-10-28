"""Fixtures for tests that run the integration inside Home Assistant.

The pytest_homeassistant_custom_component plugin registers itself on install.
"""

import sys
from types import ModuleType

import pytest

# The camera component imports turbojpeg for scaling; the test environment does not have it and
# the tests never scale an image.
if "turbojpeg" not in sys.modules:
    turbojpeg = ModuleType("turbojpeg")
    turbojpeg.TurboJPEG = object
    sys.modules["turbojpeg"] = turbojpeg


@pytest.fixture(autouse=True)
def auto_enable_custom_integrations(enable_custom_integrations):
    return
