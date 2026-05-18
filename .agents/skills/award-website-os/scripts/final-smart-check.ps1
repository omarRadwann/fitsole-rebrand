$ErrorActionPreference = "Stop"
Write-Host "Running final smart checks..."
if (Test-Path "ops/validate_pack.py") { python "ops/validate_pack.py" }
if (Test-Path ".agents/skills/award-website-os/scripts/create-evidence-files.ps1") { powershell -ExecutionPolicy Bypass -File ".agents/skills/award-website-os/scripts/create-evidence-files.ps1" }
if (Test-Path ".agents/skills/award-website-os/scripts/smart-smell-check.ps1") { powershell -ExecutionPolicy Bypass -File ".agents/skills/award-website-os/scripts/smart-smell-check.ps1" }
if (Test-Path ".agents/skills/award-website-os/scripts/asset-ledger-check.ps1") { powershell -ExecutionPolicy Bypass -File ".agents/skills/award-website-os/scripts/asset-ledger-check.ps1" }
if (Test-Path "package.json") {
  npm run typecheck --if-present
  npm run lint --if-present
  npm run build --if-present
  npm run test --if-present
}
Write-Host "Final smart checks complete."
