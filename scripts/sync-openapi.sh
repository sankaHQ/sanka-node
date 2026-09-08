#!/usr/bin/env bash
set -euo pipefail
REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE="${SANKA_API_SPEC_SOURCE:-$REPO_DIR/../sanka-sdks/openapi.json}"
python3 - "$SOURCE" "$REPO_DIR/openapi/openapi.json" <<'PYTHON'
import json,sys
from pathlib import Path
source=Path(sys.argv[1]); target=Path(sys.argv[2])
schema=json.loads(source.read_text())
assert schema['openapi'].startswith('3.')
assert schema['servers']==[{'url':'https://api.sanka.com'}]
assert all(path.startswith('/v2/') for path in schema['paths'])
target.parent.mkdir(parents=True,exist_ok=True)
target.write_text(json.dumps(schema,ensure_ascii=False,indent=2)+'\n')
print(f'Synced maintained V2 contract from {source}')
PYTHON
