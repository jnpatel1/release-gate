#!/usr/bin/env bash
# Set up on the first run, then start the Release Gate demo and open it.
#   ./demo.sh            -> http://127.0.0.1:8000 (or the next free port)
#   PORT=9000 ./demo.sh
set -euo pipefail
cd "$(dirname "$0")"
PORT="${PORT:-8000}"

find_python() {
  for py in python3.13 python3.12 python3.11 python3.10 python3; do
    if command -v "$py" >/dev/null 2>&1 && "$py" -c 'import sys; sys.exit(0 if sys.version_info >= (3, 10) else 1)' 2>/dev/null; then
      echo "$py"
      return 0
    fi
  done
  return 1
}

if [ ! -x .venv/bin/python ]; then
  echo "First run: creating .venv and installing the server (about 30 s)..."
  if command -v uv >/dev/null 2>&1; then
    uv venv --python 3.12 .venv >/dev/null
    VIRTUAL_ENV=.venv uv pip install -q -r server/requirements.txt
  elif PY="$(find_python)"; then
    "$PY" -m venv .venv
    .venv/bin/pip install -q --upgrade pip
    .venv/bin/pip install -q -r server/requirements.txt
  else
    echo "Release Gate needs Python 3.10 or newer (macOS ships 3.9)."
    echo "Install one of these, then run ./demo.sh again:"
    echo "  brew install python@3.12"
    echo "  curl -LsSf https://astral.sh/uv/install.sh | sh"
    exit 1
  fi
fi

if [ ! -f web/dist/index.html ]; then
  if command -v npm >/dev/null 2>&1; then
    echo "Building the web console..."
    (cd web && npm ci --no-audit --no-fund && npm run build)
  else
    echo "web/dist is missing and npm isn't installed. Install Node 18+ and rerun."
    exit 1
  fi
fi

cd server
exec ../.venv/bin/python -m releasegate --port "$PORT" --open
