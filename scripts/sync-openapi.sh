#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="${BACKEND_DIR:-"$REPO_DIR/../sanka"}"
OUTPUT_FILE="$REPO_DIR/openapi/openapi.json"
PYTHON_BIN="${PYTHON_BIN:-"$BACKEND_DIR/.venv/bin/python"}"
export OUTPUT_FILE

export SECRET_KEY="${SECRET_KEY:-test-secret-key}"
export DJANGO_SETTINGS_MODULE="${DJANGO_SETTINGS_MODULE:-tests.test_settings}"
export HATCHET="${HATCHET:-False}"
export POSTHOG_OTEL_LOGS_ENABLED="${POSTHOG_OTEL_LOGS_ENABLED:-0}"
export SENTRY_ENABLE_LOCAL="${SENTRY_ENABLE_LOCAL:-0}"

mkdir -p "$(dirname "$OUTPUT_FILE")"

if [[ -x "$PYTHON_BIN" ]]; then
  (
    cd "$BACKEND_DIR"
    "$PYTHON_BIN" - <<'PY'
import json
import os
from pathlib import Path

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tests.test_settings")
django.setup()

from api.openapi import build_openapi_schema
from api.urls import api

schema = build_openapi_schema(api, scope="public")
output_file = Path(os.environ["OUTPUT_FILE"])
output_file.write_text(
    json.dumps(schema, ensure_ascii=False, indent=2),
    encoding="utf-8",
)
print(f"Wrote {output_file}")
PY
  )
else
  (
    cd "$BACKEND_DIR"
    uv run python - <<'PY'
import json
import os
from pathlib import Path

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "tests.test_settings")
django.setup()

from api.openapi import build_openapi_schema
from api.urls import api

schema = build_openapi_schema(api, scope="public")
output_file = Path(os.environ["OUTPUT_FILE"])
output_file.write_text(
    json.dumps(schema, ensure_ascii=False, indent=2),
    encoding="utf-8",
)
print(f"Wrote {output_file}")
PY
  )
fi
