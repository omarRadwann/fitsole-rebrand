#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path

try:
    import tomllib
except ModuleNotFoundError:
    import tomli as tomllib  # type: ignore

ROOT = Path.cwd()

REQUIRED_FILES = [
    "AGENTS.md",
    "CLAUDE.md",
    "START_HERE.md",
    "MASTER_DOCUMENT.md",
    "INSTALL_ZERO_GAPS.md",
    "README.md",
    ".agents/skills/award-website-os/SKILL.md",
    ".claude/skills/award-website-os/SKILL.md",
    ".agents/skills/award-website-os/scripts/create-evidence-files.sh",
    ".agents/skills/award-website-os/scripts/final-smart-check.sh",
    ".codex/config.toml",
    ".codex/hooks.json",
    ".claude/settings.json",
    "docs/assumptions.md",
    "docs/research-brief.md",
    "docs/concept-scorecard.md",
    "docs/asset-ledger.csv",
    "docs/visual-review.md",
    "docs/qa-report.md",
    "docs/ship-decision.md",
    "docs/agent-court-report.md",
]

REQUIRED_DIRS = [
    ".agents/skills/award-website-os/references",
    ".agents/skills/award-website-os/assets/templates",
    ".agents/skills/award-website-os/scripts",
    ".claude/skills/award-website-os/references",
    ".claude/skills/award-website-os/assets/templates",
    ".claude/skills/award-website-os/scripts",
    ".codex/agents",
    ".claude/agents",
    "ops",
    "tooling",
    "examples",
]

def ok(msg: str) -> None:
    print(f"OK: {msg}")

def fail(msg: str) -> None:
    print(f"FAIL: {msg}")

def warn(msg: str) -> None:
    print(f"WARNING: {msg}")

def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")

def check_frontmatter(path: Path) -> list[str]:
    text = read_text(path)
    errors: list[str] = []
    if not text.startswith("---\n"):
        return ["missing YAML frontmatter"]
    end = text.find("\n---", 4)
    if end == -1:
        return ["unterminated YAML frontmatter"]
    fm = text[4:end]
    for key in ["name:", "description:"]:
        if key not in fm:
            errors.append(f"frontmatter missing {key}")
    if "skills:" not in fm:
        errors.append("frontmatter missing skills")
    if "memory:" not in fm:
        errors.append("frontmatter missing memory")
    return errors

def main() -> int:
    failures = 0

    for f in REQUIRED_FILES:
        if (ROOT / f).exists():
            ok(f)
        else:
            fail(f"missing required file {f}")
            failures += 1

    for d in REQUIRED_DIRS:
        if (ROOT / d).is_dir():
            ok(d)
        else:
            fail(f"missing required directory {d}")
            failures += 1

    codex_agents = sorted((ROOT / ".codex/agents").glob("*.toml"))
    claude_agents = sorted((ROOT / ".claude/agents").glob("*.md"))

    if len(codex_agents) < 10:
        fail(f"expected at least 10 Codex TOML agents, found {len(codex_agents)}")
        failures += 1
    else:
        ok(f"Codex TOML agents: {len(codex_agents)}")

    if len(claude_agents) < 10:
        fail(f"expected at least 10 Claude MD agents, found {len(claude_agents)}")
        failures += 1
    else:
        ok(f"Claude MD agents: {len(claude_agents)}")

    for agent in codex_agents:
        try:
            data = tomllib.loads(read_text(agent))
            for key in ["name", "description", "developer_instructions"]:
                if key not in data or not str(data[key]).strip():
                    fail(f"{agent}: missing TOML key {key}")
                    failures += 1
        except Exception as exc:
            fail(f"{agent}: invalid TOML: {exc}")
            failures += 1

    for agent in claude_agents:
        errors = check_frontmatter(agent)
        for error in errors:
            fail(f"{agent}: {error}")
            failures += 1

    for json_file in [ROOT / ".codex/hooks.json", ROOT / ".claude/settings.json"]:
        try:
            data = json.loads(read_text(json_file))
            if "hooks" not in data:
                fail(f"{json_file}: missing top-level hooks")
                failures += 1
            else:
                ok(f"{json_file.relative_to(ROOT)} shape")
        except Exception as exc:
            fail(f"{json_file}: invalid JSON: {exc}")
            failures += 1

    for skill_root in [ROOT / ".agents/skills/award-website-os", ROOT / ".claude/skills/award-website-os"]:
        refs = list((skill_root / "references").glob("*.md"))
        templates = list((skill_root / "assets/templates").iterdir())
        scripts = list((skill_root / "scripts").iterdir())
        if len(refs) < 20:
            fail(f"{skill_root}: expected at least 20 references, found {len(refs)}")
            failures += 1
        else:
            ok(f"{skill_root.relative_to(ROOT)} references: {len(refs)}")
        if len(templates) < 5:
            fail(f"{skill_root}: expected at least 5 asset templates, found {len(templates)}")
            failures += 1
        else:
            ok(f"{skill_root.relative_to(ROOT)} asset templates: {len(templates)}")
        if len(scripts) < 6:
            fail(f"{skill_root}: expected at least 6 scripts, found {len(scripts)}")
            failures += 1
        else:
            ok(f"{skill_root.relative_to(ROOT)} scripts: {len(scripts)}")

    # Simple internal path references inside backticks.
    text_exts = {".md", ".txt", ".json", ".toml", ".yaml", ".yml", ".sh", ".ps1", ".py", ".csv"}
    for path in ROOT.rglob("*"):
        if path.name.startswith(("AUDIT_", "VALIDATION_V7_")):
            continue
        if not path.is_file() or path.suffix.lower() not in text_exts:
            continue
        rel = path.relative_to(ROOT).as_posix()
        try:
            text = read_text(path)
        except UnicodeDecodeError:
            continue
        if not text.endswith("\n"):
            fail(f"{rel}: missing final newline")
            failures += 1
        for line_no, line in enumerate(text.splitlines(), 1):
            if line.rstrip() != line:
                fail(f"{rel}:{line_no}: trailing whitespace")
                failures += 1
            if ("/" + "mnt" + "/" + "data") in line:
                fail(f"{rel}:{line_no}: contains local sandbox path")
                failures += 1

    if failures:
        print(f"\nValidation finished with {failures} failure(s).")
        return 1

    print("\nValidation passed.")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
