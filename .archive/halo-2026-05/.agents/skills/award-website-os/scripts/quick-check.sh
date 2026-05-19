#!/usr/bin/env bash
set -e

if [ -f package.json ]; then
  npm run typecheck --if-present || true
  npm run lint --if-present || true
fi
