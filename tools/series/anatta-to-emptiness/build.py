"""Build this series' videos with the shared builder.

    python build.py --chapter 3        (episode 3)
    python build.py --all [--skip-existing]

Settings for this series are in series.json; see anatta-to-emptiness/VIDEO-SPEC.md.
The builder is tools/build.py in the JohnTLM/Videos repository; in the owner's Drive layout it is
Substrateless-World/Videos/build.py.
"""
import os
import runpy
from pathlib import Path

HERE = Path(__file__).resolve().parent
os.environ["VIDEO_ROOT"] = str(HERE)
repo = HERE.parents[1] / "build.py"                                       # tools/series/<name>/ -> tools/build.py
drive = HERE.parents[1] / "Substrateless-World" / "Videos" / "build.py"   # <root>/<Series>/Videos/ -> shared builder
runpy.run_path(str(repo if repo.exists() else drive), run_name="__main__")
