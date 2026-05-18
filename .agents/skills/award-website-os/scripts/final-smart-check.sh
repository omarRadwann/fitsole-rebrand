#!/usr/bin/env bash
set -e

echo "Running final smart checks..."

bash .agents/skills/award-website-os/scripts/smart-smell-check.sh || true
bash .agents/skills/award-website-os/scripts/asset-ledger-check.sh || true

if [ -f package.json ]; then
  npm run typecheck --if-present
  npm run lint --if-present
  npm run build --if-present
  npm run test --if-present
fi

echo "Final smart checks complete."
