"""Build this series' videos with the shared builder in Substrateless-World/Videos/build.py.

    python build.py --chapter 3        (episode 3)
    python build.py --all [--skip-existing]

Book 4, The Observer and the Taste of Presence. Settings for this series are in series.json; see VIDEO-SPEC.md.
"""
import os
import runpy
from pathlib import Path

HERE = Path(__file__).resolve().parent
os.environ["VIDEO_ROOT"] = str(HERE)
runpy.run_path(str(HERE.parents[1] / "Substrateless-World" / "Videos" / "build.py"), run_name="__main__")
