#!/usr/bin/env python3
"""
project_ship_check.py — the per-project ship gate.

Fails when project-specific evidence is still baseline / empty / unlabeled.
Pack-level validation lives in validate_pack.py.

Exit codes:
  0  ship gate passes
  1  ship gate fails
"""

from __future__ import annotations

import csv
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
TEMPLATES = ROOT / "docs/_templates"

# Sentinels that indicate a doc is still the template, not filled.
TEMPLATE_MARKERS = (
    "<FILL IN>",
    "<TBD>",
    "TBD",
    "<replace this>",
    "<example>",
)


def read(name: str) -> str | None:
    p = DOCS / name
    if not p.is_file():
        return None
    return p.read_text(encoding="utf-8", errors="replace")


def template(name: str) -> str | None:
    p = TEMPLATES / name
    if not p.is_file():
        return None
    return p.read_text(encoding="utf-8", errors="replace")


def looks_like_template(name: str) -> bool:
    """True if the project file is byte-identical to the template, or still
    contains <FILL IN> markers."""
    actual = read(name)
    if actual is None:
        return True
    tpl = template(name)
    if tpl is not None and actual.strip() == tpl.strip():
        return True
    return any(marker in actual for marker in TEMPLATE_MARKERS)


def has_section(name: str, header_substring: str) -> bool:
    text = read(name) or ""
    return header_substring.lower() in text.lower()


failures: list[str] = []


def fail(msg: str) -> None:
    failures.append(msg)


def check_basic_filled() -> None:
    required = [
        "one-input-brief.md",
        "assumptions.md",
        "research-brief.md",
        "concept-scorecard.md",
        "art-direction.md",
        "copy-system.md",
        "tech-stack-decision.md",
        "qa-report.md",
        "ship-decision.md",
        "agent-court-report.md",
    ]
    for name in required:
        if read(name) is None:
            fail(f"missing required doc: docs/{name}")
        elif looks_like_template(name):
            fail(f"doc still looks like template: docs/{name}")


def check_concept_selected() -> None:
    text = read("concept-scorecard.md") or ""
    if "selected concept:" not in text.lower():
        fail("docs/concept-scorecard.md does not name a selected concept")
    if text.lower().count("score:") < 3:
        fail("docs/concept-scorecard.md should score at least 3 concepts")


def check_asset_ledger() -> None:
    p = DOCS / "asset-ledger.csv"
    if not p.is_file():
        fail("missing docs/asset-ledger.csv")
        return
    try:
        with p.open(encoding="utf-8") as f:
            rows = list(csv.DictReader(f))
    except (OSError, csv.Error) as e:
        fail(f"could not parse docs/asset-ledger.csv: {e}")
        return
    if not rows:
        fail("docs/asset-ledger.csv has no rows (every external/generated asset must be logged)")
        return
    for i, r in enumerate(rows, start=2):
        license_field = (r.get("license/permission") or r.get("license") or "").strip()
        if not license_field:
            fail(f"docs/asset-ledger.csv row {i}: missing license/permission")


def check_ship_decision_labels() -> None:
    text = read("ship-decision.md") or ""
    labels = ("Verified", "Manual review", "Not run", "Blocked")
    if not any(lbl in text for lbl in labels):
        fail("docs/ship-decision.md has no truth labels (Verified / Manual review / Not run / Blocked)")
    # Crude check: at least 6 labeled lines.
    label_lines = sum(text.count(lbl) for lbl in labels)
    if label_lines < 6:
        fail(f"docs/ship-decision.md has only {label_lines} labeled item(s); need ≥ 6")


def check_screenshot_matrix() -> None:
    text = read("screenshot-matrix.md") or ""
    needed = ["desktop", "mobile", "reduced"]
    missing = [w for w in needed if w not in text.lower()]
    if missing:
        fail(f"docs/screenshot-matrix.md missing entries for: {', '.join(missing)}")


def check_three_d_consistency() -> None:
    stack = read("tech-stack-decision.md") or ""
    uses_3d = any(k in stack.lower() for k in ("three.js", "r3f", "spline", "webgl", "blender"))
    if uses_3d:
        if read("web-native-3d-pipeline.md") is None or looks_like_template("web-native-3d-pipeline.md"):
            fail("3D is in the stack but docs/web-native-3d-pipeline.md is missing or templated")
        if read("webgl-3d-budget.md") is None or looks_like_template("webgl-3d-budget.md"):
            fail("3D is in the stack but docs/webgl-3d-budget.md is missing or templated")


def main() -> int:
    if not DOCS.is_dir():
        print("FAIL: docs/ does not exist. Run `make evidence` first.", file=sys.stderr)
        return 1

    check_basic_filled()
    check_concept_selected()
    check_asset_ledger()
    check_ship_decision_labels()
    check_screenshot_matrix()
    check_three_d_consistency()

    print("=" * 60)
    print(" Project Ship Gate")
    print("=" * 60)
    if not failures:
        print("PASS — project evidence is project-specific and labeled.")
        return 0
    print(f"\nFAIL ({len(failures)} issue{'s' if len(failures) != 1 else ''}):")
    for f in failures:
        print(f"  - {f}")
    print("\nFix the issues above, then re-run `make project-ship-check`.")
    return 1


if __name__ == "__main__":
    sys.exit(main())
