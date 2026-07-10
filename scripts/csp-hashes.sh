#!/usr/bin/env bash
# Prints sorted unique sha256 CSP hashes of all executable inline scripts in dist/
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - <<'PY'
import base64, hashlib, pathlib, re
seen = set()
for p in pathlib.Path('dist').rglob('*.html'):
    for m in re.finditer(r'<script(?![^>]*\bsrc=)([^>]*)>(.*?)</script>', p.read_text(encoding='utf8'), re.S):
        attrs, body = m.group(1), m.group(2)
        if 'application/ld+json' in attrs:
            continue
        seen.add(base64.b64encode(hashlib.sha256(body.encode('utf8')).digest()).decode())
for h in sorted(seen):
    print(f"'sha256-{h}'")
PY
