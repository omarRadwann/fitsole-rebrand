#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path.cwd()
IGNORE = {".git", "node_modules", ".next", "dist", "build"}

files = []
for p in sorted(ROOT.rglob("*")):
    if not p.is_file():
        continue
    if any(part in IGNORE for part in p.parts):
        continue
    rel = p.relative_to(ROOT).as_posix()
    data = p.read_bytes()
    files.append({
        "path": rel,
        "bytes": len(data),
        "sha256": hashlib.sha256(data).hexdigest()
    })

manifest = {
    "generated_at": datetime.now(timezone.utc).isoformat(),
    "root": str(ROOT),
    "file_count": len(files),
    "files": files,
}

out = ROOT / "ops/package-integrity.json"
out.parent.mkdir(parents=True, exist_ok=True)
out.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print(f"Wrote {out} with {len(files)} files.")
