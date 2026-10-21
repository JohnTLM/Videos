# Make the MMK chapter videos on this Windows computer and save them straight into Google Drive.
# Free: the voice is edge-tts, no paid AI. About as long as the videos themselves; chapters run one at a time.
#
# Usage (PowerShell, in the videos folder):
#   powershell -ExecutionPolicy Bypass -File mmk\make_local.ps1 -Drive "G:\My Drive\Nagarjuna-Middle-Way"
#   ... -Chapters 3            one chapter (try this first)
#   ... -Chapters 1,2,4        a few
#   ... -WithVerses            keep the reading of the verses (the owner's choice since 2026-10-19 is without)
#   ... -Website <folder>      where thusness-website is (default: next to this repository, e.g. C:\dev\thusness-website)
#
# One-time setup (see mmk\README.md):
#   winget install --id Gyan.FFmpeg -e
#   winget install --id OpenJS.NodeJS.LTS -e
#   npm install -g playwright ; npx playwright install chromium
#   py -3.13 -m venv .venv ; .venv\Scripts\python -m pip install -r mmk\requirements.txt
param(
    [int[]]$Chapters = (1..27),
    [Parameter(Mandatory = $true)][string]$Drive,
    [switch]$WithVerses,
    [string]$Website
)
$ErrorActionPreference = "Continue"   # native tools write progress to stderr; failures are checked by exit code
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$py = Join-Path $root ".venv\Scripts\python.exe"
$script = Join-Path $PSScriptRoot "make_video.py"
if (-not $Website) { $Website = Join-Path (Split-Path $root -Parent) "thusness-website" }

foreach ($tool in "ffmpeg", "node", "npm") {
    if (-not (Get-Command $tool -ErrorAction SilentlyContinue)) { throw "$tool is not installed. See the one-time setup at the top of this file." }
}
if (-not (Test-Path $py)) { throw "No .venv yet. Run: py -3.13 -m venv .venv (see mmk\README.md)" }
& $py -c "import edge_tts" 2>$null
if ($LASTEXITCODE -ne 0) { throw "edge-tts is missing. Run: .venv\Scripts\python -m pip install -r mmk\requirements.txt" }
if (-not (Test-Path $Drive)) { throw "Drive folder not found: $Drive" }
# The verses and diagrams on each slide come from the chapter pages in the website repository.
if (-not (Test-Path (Join-Path $Website "mmk\mmk-1.html"))) { throw "Chapter pages not found in $Website. Clone thusness-website there, or pass -Website <folder>." }

$env:THUSNESS_WEBSITE = $Website
$env:NODE_PATH = (npm root -g)
$videos = Join-Path $Drive "videos"
New-Item -ItemType Directory -Force -Path $videos | Out-Null
$work = Join-Path $env:TEMP "mmk-video"   # slides and audio stay here, off Drive

foreach ($n in $Chapters) {
    $out = Join-Path $work $n
    $pyArgs = @($script, $n, "--out", $out)
    if (-not $WithVerses) { $pyArgs += "--no-verses" }
    Write-Host "Chapter $n ..."
    New-Item -ItemType Directory -Force -Path $work | Out-Null
    & $py @pyArgs *> (Join-Path $work "log-$n.txt")   # youtube_meta.py reads the slide timings from these logs
    if ($LASTEXITCODE -ne 0) { Write-Warning "Chapter $n failed; run it again later with -Chapters $n"; continue }
    Copy-Item (Join-Path $out "mmk-$n-full.mp4"), (Join-Path $out "mmk-$n-phone.mp4"), (Join-Path $out "mmk-$n.srt") $videos -Force
    Write-Host "Chapter $n saved to $videos"
}
Write-Host "Done. YouTube titles and descriptions (set THUSNESS_WEBSITE=$Website first if you run it in a new window):"
Write-Host "  $py $(Join-Path $PSScriptRoot 'youtube_meta.py') $work $(Join-Path $Drive 'youtube.json') $($Chapters -join ' ')"
