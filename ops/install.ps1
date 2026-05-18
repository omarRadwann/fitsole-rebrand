$ErrorActionPreference = "Stop"

Write-Host "Installing V5 Website Agent OS into: $(Get-Location)"

New-Item -ItemType Directory -Force -Path "docs" | Out-Null
New-Item -ItemType Directory -Force -Path ".codex/agents" | Out-Null
New-Item -ItemType Directory -Force -Path ".claude/agents" | Out-Null
New-Item -ItemType Directory -Force -Path ".agents/skills/award-website-os" | Out-Null

if (!(Test-Path "AGENTS.md")) {
  Write-Warning "AGENTS.md missing. Copy it from this package root."
}

if (!(Test-Path ".agents/skills/award-website-os/SKILL.md")) {
  Write-Error ".agents/skills/award-website-os/SKILL.md missing."
  exit 1
}

if (Test-Path ".agents/skills/award-website-os/scripts/create-evidence-files.sh") {
  bash ".agents/skills/award-website-os/scripts/create-evidence-files.sh"
} else {
  Write-Warning "create-evidence-files.sh not found. Creating docs manually."
  New-Item -ItemType File -Force -Path "docs/assumptions.md" | Out-Null
  New-Item -ItemType File -Force -Path "docs/research-brief.md" | Out-Null
  New-Item -ItemType File -Force -Path "docs/concept-scorecard.md" | Out-Null
  New-Item -ItemType File -Force -Path "docs/asset-ledger.csv" | Out-Null
  New-Item -ItemType File -Force -Path "docs/visual-review.md" | Out-Null
  New-Item -ItemType File -Force -Path "docs/qa-report.md" | Out-Null
  New-Item -ItemType File -Force -Path "docs/ship-decision.md" | Out-Null
}

Write-Host "Install helper complete."
Write-Host "Next: python ops/validate_pack.py"
