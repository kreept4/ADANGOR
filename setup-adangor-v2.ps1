# Run from the project root: C:\Users\Barr. Tobi Ogunleye\Projects\lawfirm-site
# Usage: powershell -ExecutionPolicy Bypass -File setup-adangor.ps1

$ErrorActionPreference = "Stop"

Write-Host "=== Step 1: Installing GitHub CLI ==="
winget install --id GitHub.cli -e --accept-source-agreements --accept-package-agreements

Write-Host "=== Step 2: Installing Vercel CLI ==="
npm install -g vercel

Write-Host ""
Write-Host "IMPORTANT: close and reopen this PowerShell window now so both new CLIs"
Write-Host "are on your PATH, then re-run this same script. It will skip installs"
Write-Host "that are already done and continue from git init."
Write-Host ""
Read-Host "Press Enter once you have reopened PowerShell and cd'd back into the project folder, or Ctrl+C to stop here"

Write-Host "=== Step 3: git init + first commit ==="
if (-not (Test-Path .git)) {
    git init
}

if (-not (Test-Path .gitignore)) {
    Set-Content -Encoding ascii .gitignore "node_modules/"
    Add-Content -Encoding ascii .gitignore ".next/"
    Add-Content -Encoding ascii .gitignore ".env"
    Add-Content -Encoding ascii .gitignore ".env.local"
}

git add .
git commit -m "Initial commit: ADANGOR law firm site"

Write-Host "=== Step 4: GitHub login (browser will open) ==="
gh auth login

Write-Host "=== Step 5: Create GitHub repo ADANGOR and push ==="
gh repo create ADANGOR --private --source=. --remote=origin --push

Write-Host "=== Step 6: Vercel login (browser will open) ==="
vercel login

Write-Host "=== Step 7: Create + deploy Vercel project ADANGOR ==="
vercel --name ADANGOR --yes

Write-Host ""
Write-Host "Done. Repo pushed to GitHub as ADANGOR, project deployed to Vercel as ADANGOR."
Write-Host "Run vercel --prod whenever you want to push a production deploy going forward."
