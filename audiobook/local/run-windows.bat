@echo off
cd /d "%~dp0"
python -c "import edge_tts" 2>nul || pip install edge-tts
python thusness_voice.py %*
pause
