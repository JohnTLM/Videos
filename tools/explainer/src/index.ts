// Default entry (Chapter 1). build.py renders each chapter from its own entry in src/entries/.
import { registerRoot } from "remotion";
import { makeRoot } from "./Root";
import * as Ch01 from "./chapters/Ch01";

registerRoot(makeRoot(Ch01));
