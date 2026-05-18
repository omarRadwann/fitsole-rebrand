#!/usr/bin/env bash
set -e

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

echo "Running final smart checks..."

if [ -f ops/validate_pack.py ]; then
  python ops/validate_pack.py
fi

bash .agents/skills/award-website-os/scripts/tool-readiness-check.sh || true
bash .agents/skills/award-website-os/scripts/create-evidence-files.sh || true
bash .agents/skills/award-website-os/scripts/smart-smell-check.sh || true
bash .agents/skills/award-website-os/scripts/asset-ledger-check.sh || true

if [ -f package.json ]; then
  npm run typecheck --if-present
  npm run lint --if-present
  npm run build --if-present
  npm run test --if-present
fi

echo "Final smart checks complete."
