#!/usr/bin/env bash
set -e

LEDGER="docs/asset-ledger.csv"

if [ ! -f "$LEDGER" ]; then
  echo "WARNING: docs/asset-ledger.csv missing."
  echo "Create one from .agents/skills/award-website-os/templates/asset-ledger.csv"
  exit 0
fi

echo "Asset ledger found: $LEDGER"

if grep -i "TBD" "$LEDGER" >/dev/null 2>&1; then
  echo "WARNING: asset ledger still contains TBD values."
  grep -n -i "TBD" "$LEDGER" || true
fi
