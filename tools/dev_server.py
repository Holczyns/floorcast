"""Server of the FloorCast harness: the files of the project, plus saving the plan from the editor.

Run: python tools/dev_server.py, then open http://127.0.0.1:8765/tools/harness.html.
Only PUT /house/plan.json is accepted; the previous version goes to house/plan.prev.json.
"""

import json
import shutil
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PLAN = ROOT / "house" / "plan.json"
MAX_BYTES = 1_000_000


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # The harness always takes the newest files, never the browser cache.
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def do_PUT(self):
        if self.path != "/house/plan.json":
            self.send_error(403)
            return
        length = int(self.headers.get("Content-Length", 0))
        if not 0 < length <= MAX_BYTES:
            self.send_error(413)
            return
        try:
            plan = json.loads(self.rfile.read(length))
            if not isinstance(plan.get("levels"), list) or not plan["levels"]:
                raise ValueError("no levels")
        except (ValueError, AttributeError) as err:
            self.send_error(400, str(err))
            return
        if PLAN.exists():
            shutil.copyfile(PLAN, PLAN.with_name("plan.prev.json"))
        PLAN.write_text(json.dumps(plan, ensure_ascii=False, indent=1), encoding="utf-8")
        self.send_response(204)
        self.end_headers()

    def log_message(self, format, *args):
        pass


if __name__ == "__main__":
    ThreadingHTTPServer(("127.0.0.1", 8765), partial(Handler, directory=str(ROOT))).serve_forever()
