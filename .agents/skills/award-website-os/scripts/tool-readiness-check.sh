#!/usr/bin/env bash
set -e

echo "== Award Website OS tool readiness =="
missing=0

check_cmd () {
  if command -v "$1" >/dev/null 2>&1; then
    echo "OK: $1 -> $(command -v "$1")"
  else
    echo "MISSING: $1"
    missing=1
  fi
}

check_cmd git
check_cmd node
check_cmd npm
check_cmd npx

echo ""
echo "Optional advanced tools:"
for cmd in pnpm bun blender gltf-transform lighthouse playwright; do
  if command -v "$cmd" >/dev/null 2>&1; then
    echo "OK: $cmd -> $(command -v "$cmd")"
  else
    echo "Optional missing: $cmd"
  fi
done

echo ""
echo "Recommended repo files:"
for f in AGENTS.md .agents/skills/award-website-os/SKILL.md .codex/config.toml .codex/hooks.json; do
  if [ -e "$f" ]; then
    echo "OK: $f"
  else
    echo "MISSING: $f"
    missing=1
  fi
done

echo ""
if [ "$missing" -eq 1 ]; then
  echo "Readiness check completed with missing required items."
else
  echo "Readiness check passed."
fi
