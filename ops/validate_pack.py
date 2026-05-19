#!/usr/bin/env python3
"""
validate_pack.py — pack health check.

Run before any project work, and again whenever the pack itself is edited.
Exit codes:
  0  pack is healthy
  1  pack has failures
  2  pack has warnings (strict mode only)
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ANCHORS = [
    "CLAUDE.md",
    "SOURCE_OF_TRUTH.md",
    "CLAUDE_FLOWCHART.md",
    "VALIDATION_PROTOCOL.md",
    "START_HERE.md",
    "AGENTS.md",
    "README.md",
    "00_CLAUDE_RUN_FIRST.md",
    "Makefile",
]
REQUIRED_DIRS = [
    ".claude/skills/award-website-os/references",
    ".claude/agents",
    ".claude/hooks",
    "ops",
    "docs/_templates",
]
REQUIRED_SKILLS = [
    ".claude/skills/award-website-os/SKILL.md",
    ".claude/skills/award-start/SKILL.md",
    ".claude/skills/design-red-team/SKILL.md",
    ".claude/skills/reference-mining/SKILL.md",
    ".claude/skills/threejs-r3f-production/SKILL.md",
    ".claude/skills/ship-gate/SKILL.md",
]
REQUIRED_HOOKS = [
    ".claude/hooks/protect-files.py",
    ".claude/hooks/log-edits.py",
    ".claude/hooks/inject-context.py",
]
REQUIRED_OPS = [
    "ops/validate_pack.py",
    "ops/scaffold_evidence.py",
    "ops/project_ship_check.py",
    "ops/create_project.py",
]

REQUIRED_COMMANDS = [
    ".claude/commands/award-start.md",
    ".claude/commands/design-red-team.md",
    ".claude/commands/reference-mining.md",
    ".claude/commands/threejs-r3f-production.md",
    ".claude/commands/ship-gate.md",
]

REQUIRED_EXAMPLES = [
    "examples/GOLDEN_PROMPTS.md",
    "examples/SAMPLE_GOLDEN_RUN_LUXURY_DENTAL_CLINIC.md",
]

REQUIRED_TOOLING = [
    "tooling/MCP_AND_TOOLING_SETUP.md",
]

# Required doc templates (must exist in docs/_templates/)
REQUIRED_DOC_TEMPLATES = [
    "one-input-brief.md",
    "assumptions.md",
    "research-brief.md",
    "client-intake-master-brief.md",
    "business-case-and-conversion-map.md",
    "awwwards-jury-scorecard.md",
    "benchmark-reference-board.md",
    "concept-scorecard.md",
    "art-direction.md",
    "signature-interaction-spec.md",
    "motion-language-system.md",
    "copy-system.md",
    "asset-ledger.csv",
    "ai-asset-pipeline.md",
    "tech-stack-decision.md",
    "tool-use-log.md",
    "web-native-3d-pipeline.md",
    "webgl-3d-budget.md",
    "spline-scene-brief.md",
    "blender-asset-brief.md",
    "creative-brief.md",
    "screenshot-matrix.md",
    "visual-review.md",
    "design-red-team-rubric.md",
    "qa-report.md",
    "agent-court-report.md",
    "ship-decision.md",
    "agent-orchestration-protocol.md",
    "super-design-playbook.md",
    "reference-mining-guide.md",
    "rebrand-or-idea-master-protocol.md",
    "tool-automation-matrix.md",
    "awwwards-output-spec.md",
    "paid-tools-and-apis-runbook.md",
    "thread-insights-2026.md",
    "webapp-experience-playbook.md",
    "deep-awwwards-investigation-2026.md",
    "soty-sotd-pattern-library.md",
    "agency-rebrand-operating-system.md",
    "submission-readiness-and-risk-guide.md",
]

# References cited anywhere in the pack must exist.
REFERENCE_DIR = ROOT / ".claude/skills/award-website-os/references"

# Pattern that matches reference citations like
# `.claude/skills/award-website-os/references/14-ai-anti-genericity-protocol.md`
REF_CITATION_RE = re.compile(
    r"\.claude/skills/award-website-os/references/(\d+-[a-z0-9-]+\.md)"
)

failures: list[str] = []
warnings: list[str] = []


def fail(msg: str) -> None:
    failures.append(msg)


def warn(msg: str) -> None:
    warnings.append(msg)


def check_anchors() -> None:
    for a in ANCHORS:
        if not (ROOT / a).is_file():
            fail(f"missing anchor file: {a}")


def check_dirs() -> None:
    for d in REQUIRED_DIRS:
        if not (ROOT / d).is_dir():
            fail(f"missing directory: {d}/")


def check_skills() -> None:
    for s in REQUIRED_SKILLS:
        if not (ROOT / s).is_file():
            fail(f"missing skill: {s}")
            continue
        text = (ROOT / s).read_text(encoding="utf-8", errors="replace")
        if not text.lstrip().startswith("---"):
            fail(f"skill missing YAML frontmatter: {s}")
        elif not re.search(r"^name:\s*\S+", text, re.M):
            fail(f"skill frontmatter missing 'name': {s}")
        elif not re.search(r"^description:\s*\S+", text, re.M):
            fail(f"skill frontmatter missing 'description': {s}")


def check_hooks() -> None:
    settings_path = ROOT / ".claude/settings.json"
    if not settings_path.is_file():
        fail("missing .claude/settings.json")
        return
    try:
        data = json.loads(settings_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as e:
        fail(f".claude/settings.json is not valid JSON: {e}")
        return
    # Verify hook scripts exist
    for required in REQUIRED_HOOKS:
        p = ROOT / required
        if not p.is_file():
            fail(f"missing hook script: {required}")
            continue
        if not os.access(p, os.R_OK):
            warn(f"hook script not readable: {required}")
    # Verify hooks block references the scripts
    flat = json.dumps(data)
    for required in REQUIRED_HOOKS:
        name = Path(required).name
        if name not in flat:
            warn(f"hook script {name} exists but is not wired in settings.json")


def check_agents() -> None:
    agents_dir = ROOT / ".claude/agents"
    if not agents_dir.is_dir():
        fail("missing .claude/agents/ directory")
        return
    md_files = sorted(p for p in agents_dir.glob("*.md") if p.name != "README.md")
    if len(md_files) < 10:
        fail(f"expected ≥ 10 agent files, found {len(md_files)}")
    for p in md_files:
        text = p.read_text(encoding="utf-8", errors="replace")
        if not text.lstrip().startswith("---"):
            fail(f"agent missing YAML frontmatter: {p.name}")
            continue
        if not re.search(r"^name:\s*\S+", text, re.M):
            fail(f"agent frontmatter missing 'name': {p.name}")
        if not re.search(r"^description:\s*\S+", text, re.M):
            fail(f"agent frontmatter missing 'description': {p.name}")


def check_references_resolve() -> None:
    """Every reference path cited anywhere in the pack must exist."""
    cited: set[str] = set()
    for path in ROOT.rglob("*.md"):
        # Skip the docs/ folder (project-specific, may legitimately reference future files)
        rel = path.relative_to(ROOT)
        if rel.parts and rel.parts[0] == "docs":
            continue
        try:
            text = path.read_text(encoding="utf-8", errors="replace")
        except OSError:
            continue
        for match in REF_CITATION_RE.finditer(text):
            cited.add(match.group(1))
    for filename in sorted(cited):
        if not (REFERENCE_DIR / filename).is_file():
            fail(f"reference cited but missing: {filename}")


def check_doc_templates() -> None:
    template_dir = ROOT / "docs/_templates"
    if not template_dir.is_dir():
        fail("missing docs/_templates/ directory")
        return
    for t in REQUIRED_DOC_TEMPLATES:
        if not (template_dir / t).is_file():
            fail(f"missing doc template: docs/_templates/{t}")


def check_ops() -> None:
    for o in REQUIRED_OPS:
        p = ROOT / o
        if not p.is_file():
            fail(f"missing ops script: {o}")


def check_starter(strict: bool) -> None:
    starter = ROOT / "starter-next-awwwards"
    if not starter.is_dir():
        msg = "missing starter project: starter-next-awwwards/ (required for `make scaffold`)"
        if strict:
            fail(msg)
        else:
            warn(msg)
        return
    pkg = starter / "package.json"
    if not pkg.is_file():
        warn("starter-next-awwwards/ exists but has no package.json")
        return
    try:
        pkg_data = json.loads(pkg.read_text(encoding="utf-8"))
    except json.JSONDecodeError:
        warn("starter-next-awwwards/package.json is not valid JSON")
        return
    scripts = pkg_data.get("scripts", {})
    for required in ("dev", "build", "lint", "typecheck", "test", "screenshots", "analyze:assets", "design:readiness"):
        if required not in scripts:
            warn(f"starter package.json missing script: {required}")


def check_commands() -> None:
    for c in REQUIRED_COMMANDS:
        p = ROOT / c
        if not p.is_file():
            fail(f"missing slash command: {c}")
            continue
        text = p.read_text(encoding="utf-8", errors="replace")
        if not text.lstrip().startswith("---"):
            fail(f"command missing YAML frontmatter: {c}")


def check_examples() -> None:
    for e in REQUIRED_EXAMPLES:
        if not (ROOT / e).is_file():
            fail(f"missing example: {e}")


def check_tooling() -> None:
    for t in REQUIRED_TOOLING:
        if not (ROOT / t).is_file():
            fail(f"missing tooling doc: {t}")


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate the Awwwards Agency OS pack.")
    parser.add_argument("--strict", action="store_true", help="Treat warnings as failures.")
    args = parser.parse_args()

    check_anchors()
    check_dirs()
    check_skills()
    check_commands()
    check_hooks()
    check_agents()
    check_references_resolve()
    check_doc_templates()
    check_ops()
    check_examples()
    check_tooling()
    check_starter(strict=args.strict)

    print("=" * 60)
    print(" Moon-Level Awwwards OS — Pack Validation")
    print("=" * 60)

    if not failures and not warnings:
        print("PASS — pack is healthy.")
        return 0

    if failures:
        print(f"\nFAIL ({len(failures)} issue{'s' if len(failures) != 1 else ''}):")
        for f in failures:
            print(f"  - {f}")

    if warnings:
        print(f"\nWARN ({len(warnings)} issue{'s' if len(warnings) != 1 else ''}):")
        for w in warnings:
            print(f"  - {w}")

    if failures:
        return 1
    if args.strict and warnings:
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
