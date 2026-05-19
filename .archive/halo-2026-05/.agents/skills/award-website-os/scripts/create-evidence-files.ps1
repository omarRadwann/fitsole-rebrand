$ErrorActionPreference = "Stop"
New-Item -ItemType Directory -Force -Path "docs" | Out-Null

function Copy-IfMissing($src, $dst) {
  if ((Test-Path $src) -and !(Test-Path $dst)) {
    Copy-Item $src $dst
  }
}

Copy-IfMissing ".agents/skills/award-website-os/assets/templates/one-input-brief.md" "docs/assumptions.md"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/concept-scorecard.md" "docs/concept-scorecard.md"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/asset-ledger.csv" "docs/asset-ledger.csv"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/visual-review.md" "docs/visual-review.md"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/qa-report.md" "docs/qa-report.md"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/ship-decision.md" "docs/ship-decision.md"
Copy-IfMissing ".agents/skills/award-website-os/assets/templates/agent-court-report.md" "docs/agent-court-report.md"

New-Item -ItemType File -Force -Path "docs/research-brief.md" | Out-Null
New-Item -ItemType File -Force -Path "docs/art-direction.md" | Out-Null
New-Item -ItemType File -Force -Path "docs/copy-system.md" | Out-Null
Write-Host "Evidence files ensured under docs/."
