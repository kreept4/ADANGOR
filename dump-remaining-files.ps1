$files = @(
    "app\components\Hero.tsx",
    "app\components\Expertise.tsx",
    "app\components\CardNav\CardNav.tsx",
    "app\components\CardNav\CardNav.css",
    "app\page.tsx",
    "app\globals.css"
)

foreach ($f in $files) {
    Write-Host ""
    Write-Host "===== $f ====="
    Write-Host ""
    if (Test-Path $f) {
        Get-Content $f -Raw
    } else {
        Write-Host "(file not found at this path)"
    }
    Write-Host ""
}
