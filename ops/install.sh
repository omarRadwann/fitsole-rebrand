#!/usr/bin/env bash
set -euo pipefail

ROOT="$(pwd)"

echo "Installing V5 Website Agent OS into: $ROOT"

mkdir -p docs
mkdir -p .codex/agents
mkdir -p .claude/agents
mkdir -p .agents/skills/award-website-os

if [ ! -f AGENTS.md ]; then
  echo "WARNING: AGENTS.md missing. Copy it from this package root."
fi

if [ ! -f .agents/skills/award-website-os/SKILL.md ]; then
  echo "ERROR: .agents/skills/award-website-os/SKILL.md missing."
  exit 1
fi

bash .agents/skills/award-website-os/scripts/create-evidence-files.sh || true

if [ -f package.json ]; then
  echo "Detected package.json."
else
  echo "No package.json detected. This OS can still be installed, but website QA scripts will skip npm checks."
fi

echo "Install helper complete."
echo "Next: python ops/validate_pack.py"
