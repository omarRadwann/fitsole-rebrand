#!/usr/bin/env python3
"""
scaffold_evidence.py — copy doc templates into docs/.

Idempotent: re-running will not overwrite existing project-filled docs.
Use `--force` to overwrite, `--missing-only` (default) to only fill gaps.
"""

from __future__ import annotations

import argparse
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TEMPLATE_DIR = ROOT / "docs/_templates"
TARGET_DIR = ROOT / "docs"


def main() -> int:
    parser = argparse.ArgumentParser(description="Scaffold per-project evidence docs from templates.")
    parser.add_argument("--force", action="store_true", help="Overwrite existing docs.")
    args = parser.parse_args()

    if not TEMPLATE_DIR.is_dir():
        print(f"FAIL: template dir not found at {TEMPLATE_DIR}", file=sys.stderr)
        return 1

    TARGET_DIR.mkdir(exist_ok=True)
    copied: list[str] = []
    skipped: list[str] = []

    for template in sorted(TEMPLATE_DIR.iterdir()):
        if not template.is_file():
            continue
        # Skip nested README, etc.
        if template.name.startswith("."):
            continue
        target = TARGET_DIR / template.name
        if target.exists() and not args.force:
            skipped.append(template.name)
            continue
        shutil.copy2(template, target)
        copied.append(template.name)

    print("=" * 60)
    print(" Evidence scaffold")
    print("=" * 60)
    if copied:
        print(f"\nCREATED ({len(copied)}):")
        for f in copied:
            print(f"  + docs/{f}")
    if skipped:
        print(f"\nSKIPPED — already exists ({len(skipped)}):")
        for f in skipped:
            print(f"  · docs/{f}")
    if not copied and not skipped:
        print("(no templates found in docs/_templates/)")

    print("\nNext: fill docs/one-input-brief.md and docs/assumptions.md from user input.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
