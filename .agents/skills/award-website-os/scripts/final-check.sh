#!/usr/bin/env bash
set -e

echo "Running final website checks..."

if [ -f package.json ]; then
  npm run typecheck --if-present
  npm run lint --if-present
  npm run build --if-present
  npm run test --if-present
else
  echo "No package.json found."
fi

echo "Final checks completed. Add Playwright/Lighthouse/axe commands when configured."
