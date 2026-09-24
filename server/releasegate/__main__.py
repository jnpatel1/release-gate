"""Run the demo: python -m releasegate [--port 8000] [--open]"""

from __future__ import annotations

import argparse
import socket
import sys
import threading
import webbrowser

import uvicorn

from .app import create_app
from .config import WEB_DIST, Settings


def _free_port(host: str, start: int, tries: int = 20) -> int:
    for port in range(start, start + tries):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
            try:
                sock.bind((host, port))
                return port
            except OSError:
                continue
    raise SystemExit(f"No free port between {start} and {start + tries - 1}.")


def main(argv=None) -> None:
    parser = argparse.ArgumentParser(
        prog="python -m releasegate",
        description="Release Gate demo: console, GraphQL API, and mock Jira + Windchill in one process.",
    )
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000, help="first port to try (default 8000)")
    parser.add_argument("--open", action="store_true", help="open the console in your browser")
    args = parser.parse_args(argv)

    bind_host = args.host
    url_host = "127.0.0.1" if bind_host in ("0.0.0.0", "::") else bind_host
    port = _free_port(bind_host, args.port)
    url = f"http://{url_host}:{port}"

    settings = Settings.from_env(base_url=url)
    app = create_app(settings)

    has_web = (WEB_DIST / "index.html").exists()
    print()
    print("  Release Gate")
    print(f"  Console      {url}" + ("" if has_web else "   (web/dist missing: run `npm --prefix web ci && npm --prefix web run build`)"))
    print(f"  GraphQL      {url}/graphql")
    print(f"  REST docs    {url}/api/docs")
    print(f"  Mock Jira    {url}/mock/jira/rest/api/2/search?jql=project=ENG")
    print(f"  Mock PLM     {url}/mock/windchill/Windchill/servlet/odata/ProdMgmt/Parts")
    print("  Ctrl+C to stop. Every start resets the demo data.")
    print()
    sys.stdout.flush()

    if args.open:
        threading.Timer(1.2, webbrowser.open, [url]).start()
    uvicorn.run(app, host=bind_host, port=port, log_level="warning")


if __name__ == "__main__":
    main()
