#!/usr/bin/env bash
set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_FILE="$REPO_DIR/openapi/openapi.json"

find_source() {
  if [[ -n "${SANKA_OPENAPI_SOURCE:-}" ]]; then
    printf '%s\n' "$SANKA_OPENAPI_SOURCE"
    return
  fi

  local dir="$REPO_DIR"
  while [[ "$dir" != "/" ]]; do
    for candidate in "$dir/sanka-sdks/openapi.json" "$dir/../sanka-sdks/openapi.json"; do
      if [[ -f "$candidate" ]]; then
        printf '%s\n' "$candidate"
        return
      fi
    done
    dir="$(dirname "$dir")"
  done
}

SOURCE_FILE="$(find_source)"
if [[ -z "$SOURCE_FILE" || ! -f "$SOURCE_FILE" ]]; then
  echo "Could not find Sanka public OpenAPI source. Set SANKA_OPENAPI_SOURCE=/path/to/openapi.json." >&2
  exit 1
fi

mkdir -p "$(dirname "$OUTPUT_FILE")"
cp "$SOURCE_FILE" "$OUTPUT_FILE"
echo "Copied $SOURCE_FILE to $OUTPUT_FILE"
