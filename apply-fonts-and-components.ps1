Write-Host "=== Step 1: Updating app\layout.tsx for Inter font ==="

$layoutPath = "app\layout.tsx"

if (-not (Test-Path $layoutPath)) {
    Write-Host "ERROR: $layoutPath not found. Run this from your project root." -ForegroundColor Red
    exit 1
}

$content = Get-Content $layoutPath -Raw

$before = $content

$content = $content.Replace(
    'import { Roboto_Slab, Roboto_Mono } from "next/font/google";',
    'import { Roboto_Slab, Roboto_Mono, Inter } from "next/font/google";'
)

$content = $content.Replace(
    'export const metadata: Metadata = {',
    "const inter = Inter({`r`n  subsets: [`"latin`"],`r`n  variable: `"--font-inter`",`r`n});`r`n`r`nexport const metadata: Metadata = {"
)

$content = $content.Replace(
    'className={`${robotoSlab.variable} ${robotoMono.variable}`}',
    'className={`${robotoSlab.variable} ${robotoMono.variable} ${inter.variable}`}'
)

if ($content -eq $before) {
    Write-Host "WARNING: No changes were made. layout.tsx may already be updated, or its content does not match what was expected. Check it manually." -ForegroundColor Yellow
} else {
    Set-Content $layoutPath $content -NoNewline
    Write-Host "layout.tsx updated successfully." -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Step 2: Moving updated components into place ==="

$pubSrc = "$env:USERPROFILE\Downloads\Publications.tsx"
$mapSrc = "$env:USERPROFILE\Downloads\MapContact.tsx"

if (Test-Path $pubSrc) {
    Move-Item $pubSrc "app\components\Publications.tsx" -Force
    Write-Host "Publications.tsx moved." -ForegroundColor Green
} else {
    Write-Host "WARNING: $pubSrc not found. Download it from the chat first." -ForegroundColor Yellow
}

if (Test-Path $mapSrc) {
    Move-Item $mapSrc "app\components\MapContact.tsx" -Force
    Write-Host "MapContact.tsx moved." -ForegroundColor Green
} else {
    Write-Host "WARNING: $mapSrc not found. Download it from the chat first." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Step 3: Rebuilding ==="

Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
npm run dev
