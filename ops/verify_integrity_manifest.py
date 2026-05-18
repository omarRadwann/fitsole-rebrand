#!/usr/bin/env python3
from __future__ import annotations

import hashlib
import json
from pathlib import Path

ROOT = Path.cwd()
manifest_path = ROOT / "ops/package-integrity.json"

if not manifest_path.exists():
    raise SystemExit("ops/package-integrity.json missing. Run python ops/generate_integrity_manifest.py")

manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
failures = 0

for item in manifest["files"]:
    path = ROOT / item["path"]
    if item["path"] == "ops/package-integrity.json":
        continue
    if not path.exists():
        print(f"MISSING: {item['path']}")
        failures += 1
        continue
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    if digest != item["sha256"]:
        print(f"CHANGED: {item['path']}")
        failures += 1

if failures:
    raise SystemExit(f"Integrity verification failed with {failures} issue(s).")

print("Integrity verification passed.")
