#!/usr/bin/env python3
"""
create_project.py — scaffold a new site project from starter-next-awwwards/.

Usage:
  python ops/create_project.py --name "luxury-dental-clinic"

Creates workspace/<slug>/ as a copy of starter-next-awwwards/, then prints
the next-steps checklist. Does not run npm install (the user/agent decides).
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STARTER = ROOT / "starter-next-awwwards"
WORKSPACE = ROOT / "workspace"

SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9-]{1,62}[a-z0-9]$")


def slugify(value: str) -> str:
    value = value.lower().strip()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-+", "-", value)
    value = value.strip("-")
    return value


def main() -> int:
    parser = argparse.ArgumentParser(description="Scaffold a new site from the starter.")
    parser.add_argument("--name", required=True, help="Project name or slug.")
    parser.add_argument("--force", action="store_true", help="Overwrite workspace/<slug>/ if it exists.")
    args = parser.parse_args()

    slug = slugify(args.name)
    if not SLUG_RE.match(slug):
        print(f"FAIL: '{args.name}' could not be turned into a valid slug.", file=sys.stderr)
        return 2

    if not STARTER.is_dir():
        print(
            "FAIL: starter-next-awwwards/ is missing.\n"
            "The pack ships without the starter; add one before running create_project.py,\n"
            "or scaffold manually with `npx create-next-app@latest` and copy your tokens in.",
            file=sys.stderr,
        )
        return 1

    WORKSPACE.mkdir(exist_ok=True)
    target = WORKSPACE / slug
    if target.exists():
        if not args.force:
            print(f"FAIL: workspace/{slug}/ already exists. Use --force to overwrite.", file=sys.stderr)
            return 1
        shutil.rmtree(target)

    shutil.copytree(STARTER, target, ignore=shutil.ignore_patterns("node_modules", ".next", ".turbo", ".vercel", "dist", "build"))

    print("=" * 60)
    print(" Project scaffolded")
    print("=" * 60)
    print(f"Location: workspace/{slug}/")
    print()
    print("Next steps:")
    print(f"  1. cd workspace/{slug}")
    print("  2. npm install")
    print("  3. Apply tokens from docs/art-direction.md to app/globals.css")
    print("  4. Apply copy from docs/copy-system.md to app/(marketing)/page.tsx")
    print("  5. Replace placeholder assets per docs/asset-ledger.csv")
    print("  6. Build the signature interaction per docs/signature-interaction-spec.md")
    print("  7. npm run dev")
    print()
    print("Then capture screenshots, red-team, repair, run QA, and fill docs/ship-decision.md.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
