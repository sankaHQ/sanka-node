#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

if [[ "${SYNC_OPENAPI:-1}" != "0" ]]; then
  "$REPO_DIR/scripts/sync-openapi.sh"
fi

cd "$REPO_DIR"
speakeasy run -y -o console -t sanka-sdk --skip-versioning
node "$REPO_DIR/scripts/post-generate.mjs"
