@echo off
rem Thusness Voice: opens the window to read a PDF aloud into MP3 files (first time: installs edge-tts and pypdf).
cd /d "%~dp0"
python -c "import edge_tts, pypdf" 2>nul || pip install edge-tts pypdf
start "" pythonw thusness_voice_pdf.py
