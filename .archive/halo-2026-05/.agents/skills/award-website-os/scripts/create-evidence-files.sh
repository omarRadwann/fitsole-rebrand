#!/usr/bin/env bash
set -e

mkdir -p docs

copy_if_missing () {
  src="$1"
  dst="$2"
  if [ -f "$src" ] && [ ! -f "$dst" ]; then
    cp "$src" "$dst"
  fi
}

copy_if_missing ".agents/skills/award-website-os/assets/templates/one-input-brief.md" "docs/assumptions.md"
copy_if_missing ".agents/skills/award-website-os/assets/templates/concept-scorecard.md" "docs/concept-scorecard.md"
copy_if_missing ".agents/skills/award-website-os/assets/templates/asset-ledger.csv" "docs/asset-ledger.csv"
copy_if_missing ".agents/skills/award-website-os/assets/templates/visual-review.md" "docs/visual-review.md"
copy_if_missing ".agents/skills/award-website-os/assets/templates/qa-report.md" "docs/qa-report.md"
copy_if_missing ".agents/skills/award-website-os/assets/templates/ship-decision.md" "docs/ship-decision.md"
copy_if_missing ".agents/skills/award-website-os/assets/templates/agent-court-report.md" "docs/agent-court-report.md"

touch docs/research-brief.md docs/art-direction.md docs/copy-system.md

echo "Evidence files ensured under docs/."
