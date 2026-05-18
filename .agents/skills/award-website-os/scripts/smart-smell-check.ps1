$ErrorActionPreference = "Continue"
Write-Host "Running smart content smell check..."
$pattern = "seamless|innovative|next-gen|next generation|cutting-edge|unlock|streamline|robust|empower|tailored solutions|world-class|transform your business"
$dirs = @("app", "components", "pages", "src", "content", "public") | Where-Object { Test-Path $_ }
foreach ($d in $dirs) {
  Get-ChildItem $d -Recurse -File -ErrorAction SilentlyContinue | ForEach-Object {
    try {
      Select-String -Path $_.FullName -Pattern $pattern -CaseSensitive:$false -ErrorAction SilentlyContinue
    } catch {}
  }
}
Write-Host "If matches are real marketing copy, rewrite or justify them."
