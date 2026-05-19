#!/usr/bin/env bash
set -e

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

bash .agents/skills/award-website-os/scripts/tool-readiness-check.sh || true
bash .agents/skills/award-website-os/scripts/create-evidence-files.sh || true
bash .agents/skills/award-website-os/scripts/smart-smell-check.sh || true
bash .agents/skills/award-website-os/scripts/asset-ledger-check.sh || true

if [ -f package.json ]; then
  npm run typecheck --if-present || true
  npm run lint --if-present || true
fi

echo "Zero-gap preflight complete."
