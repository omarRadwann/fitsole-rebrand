$ErrorActionPreference = "Continue"
$ledger = "docs/asset-ledger.csv"
if (!(Test-Path $ledger)) {
  Write-Warning "docs/asset-ledger.csv missing. Create one from .agents/skills/award-website-os/assets/templates/asset-ledger.csv"
  exit 0
}
Write-Host "Asset ledger found: $ledger"
$content = Get-Content $ledger -Raw
if ($content -match "TBD") {
  Write-Warning "asset ledger still contains TBD values."
  Select-String -Path $ledger -Pattern "TBD" -CaseSensitive:$false
}
