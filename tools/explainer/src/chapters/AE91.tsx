// Anatta to Emptiness, Bonus: Two Modes, One Seeing. Explainer drawings timed to the narration.
// Arc: two modes of knowing (dividing, not dividing) -> analysis exposes analysis -> the middle way (MMK 24.18)
// -> fixing and its release -> spontaneous presence and its risk -> suppression vs recognition -> one event, two
// descriptions -> vivid and empty at once. Stance: presence, emptiness and the "natural state" are never drawn as a
// base layer; a ground is shown only in order to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Pick up a cup", "takes it apart", "A handle", "a rim", "a body", "which one is really the cup",
  "Another way of knowing does not divide", "before the names and the parts arrive",
  "conceptual construction", "non-conceptual awareness", "quieting the first", "lead to different places", "or to the same one",
  "Start with the dividing mind", "uses it against itself", "motion, fire and fuel", "The chariot is not in the wheels",
  "Each part can be divided again", "never satisfied",
  "He does not conclude", "the intrinsic nature the search was looking for", "The parts, too, are designated", "a habit of seeing",
  "His verse on the middle way", "Whatever arises in dependence is emptiness", "Emptiness is itself a dependent designation",
  "That is the middle way", "Things are not nothing", "They are not self-standing",
  "emptiness is not a second reality", "what dependence amounts to", "nothing is fixed in its own boundaries",
  "They meet without obstruction",
  "Why does this matter", "Suffering runs on fixing", "Fear takes the threat", "a fixed centre to be defended",
  "the fear loses its object", "Nothing has been removed", "Only the way it is held",
  "Now the other mode", "spontaneous presence", "does not need to be made", "The risk is plain", "never produced",
  "So the paths matter", "suppress thought", "one more object to hold", "recognizes thought as already empty",
  "it stops fixing by itself",
  "Recognition is not an achievement", "Spontaneous means already complete", "something to keep",
  "does not negate appearances", "puts no new ground",
  "In this book's reading", "two descriptions of one event", "from conditions, without intrinsic nature",
  "already complete, needing nothing added",
  "vivid and empty at once", "Vivid because empty", "No separate witness", "like a lamp lighting itself",
  "The way out is not effort", "The fixing stops", "nothing needs to be put in its place",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  cup: { a: "rgba(70,55,140,0.5)", b: "rgba(180,135,60,0.38)", c: "rgba(30,90,120,0.3)" },
  analysis: { a: "rgba(50,50,120,0.5)", b: "rgba(150,100,50,0.35)", c: "rgba(40,80,120,0.3)" },
  middle: { a: "rgba(40,110,130,0.5)", b: "rgba(170,130,60,0.38)", c: "rgba(80,60,150,0.32)" },
  fixing: { a: "rgba(110,50,60,0.45)", b: "rgba(60,50,120,0.45)", c: "rgba(150,90,50,0.3)" },
  presence: { a: "rgba(200,155,70,0.5)", b: "rgba(90,70,170,0.4)", c: "rgba(60,150,140,0.38)" },
  free: { a: "rgba(190,145,60,0.48)", b: "rgba(70,60,155,0.42)", c: "rgba(50,140,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
type CupPart = "handle" | "rim" | "body";
/** A cup in side view whose handle, rim and body can be pulled apart. */
const Cup: React.FC<{ apart?: number; color?: string; dash?: boolean; o?: number; steam?: number }> = ({ apart = 0, color = GOLD, dash, o = 1, steam = 0 }) => {
  const { t } = useT();
  const off: Record<CupPart, [number, number]> = { handle: [130, 20], rim: [0, -110], body: [-60, 50] };
  const tr = (k: CupPart) => `translate(${off[k][0] * apart} ${off[k][1] * apart})`;
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeDasharray: dash ? "12 10" : undefined };
  return (
    <svg width={360} height={340} viewBox="0 0 360 340" style={{ overflow: "visible", opacity: o, filter: dash ? undefined : `drop-shadow(0 0 12px ${color}88)` }}>
      {steam > 0 && [0, 1, 2].map((i) => (
        <path key={i} d={`M${120 + i * 45} 70 q 14 -25 0 -50 q -14 -25 0 -50`} fill="none" stroke={ICE} strokeWidth={4} strokeLinecap="round"
          opacity={steam * (0.35 + 0.35 * Math.sin(t * 2 + i))} transform={`translate(0 ${-6 * Math.sin(t * 1.5 + i)})`} />
      ))}
      <g transform={tr("body")}><path d="M80 110 L100 290 Q160 315 220 290 L240 110 Z" fill={`${color}22`} {...st} /></g>
      <g transform={tr("rim")}><ellipse cx={160} cy={110} rx={82} ry={18} fill={`${color}33`} {...st} /></g>
      <g transform={tr("handle")}><path d="M238 150 Q310 150 300 210 Q292 262 225 255" fill="none" {...st} /></g>
    </svg>
  );
};

/** A small oil lamp with a living flame; `self` adds a halo that lights the lamp itself. */
const Lamp: React.FC<{ self?: number }> = ({ self = 0 }) => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 9) + 0.04 * Math.sin(t * 13);
  return (
    <svg width={260} height={300} viewBox="0 0 260 300" style={{ overflow: "visible" }}>
      <defs>
        <radialGradient id="ae91flame" cx="50%" cy="65%" r="60%"><stop offset="0%" stopColor="#FFF6D8" /><stop offset="45%" stopColor={GOLD} /><stop offset="100%" stopColor={WARM} stopOpacity={0} /></radialGradient>
        <radialGradient id="ae91halo" cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={GOLD} stopOpacity={0.55} /><stop offset="100%" stopColor={GOLD} stopOpacity={0} /></radialGradient>
      </defs>
      <ellipse cx={130} cy={160} rx={150} ry={150} fill="url(#ae91halo)" opacity={self} />
      <path d={`M130 ${150 - 70 * f} Q${160} ${120} 130 150 Q100 120 130 ${150 - 70 * f} Z`} fill="url(#ae91flame)" />
      <path d="M40 190 Q130 250 220 190 L200 170 Q130 200 60 170 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M130 150 L130 178" stroke={CHALK} strokeWidth={4} />
      <path d="M95 236 L165 236" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    </svg>
  );
};

/** A heavy slab drawn under something to show it being taken as a ground. */
const Slab: React.FC<{ w: number; p: number; label?: string }> = ({ w, p, label }) => (
  <div style={{ width: w * p, height: 66, borderRadius: 8, margin: "0 auto",
    background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`, border: `3px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}66`,
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
    {label && p > 0.8 && <span style={{ fontFamily: SERIF, fontSize: 32, color: CHALK, whiteSpace: "nowrap" }}>{label}</span>}
  </div>
);

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; children: React.ReactNode }> = ({ y = 120, at, color = CHALK, size = 42, children }) => {
  const { t } = useT();
  return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
};

// ---------------------------------------------------------------- scenes
const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const apart = ramp(t, c("takes it apart", 0.1), 1.2);
  const labels: [string, string, number, number][] = [["A handle", "handle", 1180, 470], ["a rim", "rim", 960, 230], ["a body", "body", 760, 690]];
  return (
    <AbsoluteFill>
      <At x={960} y={470} s={pop(t, fps, c("Pick up a cup", 0.1))}><Cup apart={apart} /></At>
      {labels.map(([ph, w, x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, c(ph, 0.1))}><Chip color={[TEAL, VIOLET, ROSE][i]} size={32}>{w}</Chip></At>
      ))}
      <At x={960} y={110} o={ramp(t, c("takes it apart"), 0.5)}><Glow color={DIM} size={34}>the dividing mind</Glow></At>
      <At x={960} y={800} o={ramp(t, c("which one is really the cup"), 0.5)}><Glow color={GOLD} size={42} serif>which one is really the cup?</Glow></At>
    </AbsoluteFill>
  );
};

const WholeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const before = c("before the names and the parts arrive");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Another way of knowing does not divide"), 0.5)}><Glow color={DIM} size={34}>a mind that does not divide</Glow></At>
      <At x={960} y={470} s={pop(t, fps, c("Another way of knowing does not divide", 0.2))}><Cup steam={ramp(t, before, 1)} color={GOLD} /></At>
      <Ring x={960} y={470} p={ramp(t, before, 2.2)} r0={180} r1={460} color={GOLD} />
      {["handle", "rim", "body"].map((w, i) => (
        <At key={i} x={700 + i * 260} y={760} o={0.9 * (1 - ramp(t, before + 0.4 + i * 0.2, 0.8))}><Chip color={DIM} size={28}>{w}</Chip></At>
      ))}
      <At x={960} y={760} o={ramp(t, before + 1.4, 0.6)}><Glow color={GOLD} size={38} serif>met as it presents</Glow></At>
    </AbsoluteFill>
  );
};

const TwoModesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("lead to different places"), same = c("or to the same one");
  const quiet = ramp(t, c("quieting the first"), 1);
  const merge = ramp(t, same + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <At x={560} y={240} s={pop(t, fps, c("conceptual construction", 0.2))} o={1 - 0.6 * quiet}><Chip color={VIOLET} size={36}>conceptual construction</Chip></At>
      <At x={1360} y={240} s={pop(t, fps, c("non-conceptual awareness", 0.2))}><Chip color={TEAL} size={36}>non-conceptual awareness</Chip></At>
      <At x={560} y={330} o={ramp(t, c("quieting the first"), 0.5)}><Glow color={DIM} size={28}>quiet this…</Glow></At>
      <At x={1360} y={330} o={ramp(t, c("quieting the first") + 0.6, 0.5)}><Glow color={DIM} size={28}>…so this remains?</Glow></At>
      <Svg>
        <DrawPath d={`M560 380 C ${560} 560, ${560 - 200 * (1 - merge) + 400 * merge * 0.5} 640, ${360 + 600 * merge} 760`} p={ramp(t, q, 1)} color={VIOLET} width={6} len={700} />
        <DrawPath d={`M1360 380 C ${1360} 560, ${1360 + 200 * (1 - merge) - 400 * merge * 0.5} 640, ${1560 - 600 * merge} 760`} p={ramp(t, q + 0.2, 1)} color={TEAL} width={6} len={700} />
      </Svg>
      <At x={360 + 600 * merge} y={780} o={ramp(t, q + 0.8, 0.5) * (1 - merge)}><Orb size={34} color={VIOLET} /></At>
      <At x={1560 - 600 * merge} y={780} o={ramp(t, q + 1.0, 0.5) * (1 - merge)}><Orb size={34} color={TEAL} /></At>
      <At x={960} y={780} o={merge}><Orb size={60} color={GOLD} core={1} /></At>
      <At x={960} y={130} o={ramp(t, q, 0.5)}><Glow color={CHALK} size={44} serif>different places, or the same one?</Glow></At>
    </AbsoluteFill>
  );
};

/** Boxes that keep splitting: the regress of the search for a final piece. */
const Regress: React.FC<{ at: number; levels: number }> = ({ at, levels }) => {
  const { t } = useT();
  const rows: React.ReactNode[] = [];
  for (let L = 0; L < levels; L++) {
    const n = 2 ** L, w = 1100 / n;
    const p = ramp(t, at + L * 0.9, 0.6);
    for (let i = 0; i < n; i++) {
      rows.push(<div key={`${L}-${i}`} style={{ position: "absolute", left: 410 + i * w + 4, top: 380 + L * 92, width: w - 8, height: 70,
        borderRadius: 8, border: `3px solid ${[GOLD, TEAL, VIOLET, ICE, ROSE][L % 5]}`, background: `${[GOLD, TEAL, VIOLET, ICE, ROSE][L % 5]}22`,
        opacity: p, transform: `scaleX(${0.6 + 0.4 * p})` }} />);
    }
  }
  return <>{rows}</>;
};

const AnalysisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const topics: [string, string, number][] = [["motion, fire and fuel", "motion", 420], ["motion, fire and fuel", "fire · fuel", 760], ["motion, fire and fuel", "agent · action", 1140], ["The chariot is not in the wheels", "chariot", 1500]];
  const split = c("Each part can be divided again");
  const top = 1 - ramp(t, split - 0.4, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Start with the dividing mind"), 0.5)}><Glow color={CHALK} size={42} serif>analysis, turned on itself</Glow></At>
      <At x={960} y={190} o={ramp(t, c("uses it against itself"), 0.5)}><Glow color={DIM} size={30}>Nāgārjuna divides, to show what dividing cannot find</Glow></At>
      {/* the dividing mind at work, then its own arrow turned back on it (fills the gap before the topics arrive) */}
      <AbsoluteFill style={{ opacity: 1 - ramp(t, c("motion, fire and fuel") - 0.2, 0.5) }}>
        <At x={960} y={520} s={pop(t, fps, c("Start with the dividing mind", 0.1))}><Cup apart={ramp(t, c("Start with the dividing mind") + 0.5, 1.2)} color={ICE} /></At>
        <Svg>
          <DrawPath d="M1250 640 C 1420 560, 1420 360, 1250 300 C 1120 260, 1060 330, 1120 400" p={ramp(t, c("uses it against itself"), 1)} color={TEAL} width={6} len={900} />
        </Svg>
        <At x={1420} y={700} o={ramp(t, c("uses it against itself") + 0.6, 0.5)}><Chip color={TEAL} size={30}>dividing, turned back</Chip></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: top }}>
        {topics.map(([ph, w, x], i) => (
          <At key={i} x={x} y={420} s={pop(t, fps, c(ph, 0.1) + (i < 3 ? i * 0.35 : 0))}><Chip color={[TEAL, GOLD, VIOLET, ROSE][i]} size={34}>{w}</Chip></At>
        ))}
        {[["wheels", 560], ["axle", 960], ["pole", 1360]].map(([w, x], i) => (
          <Struck key={i} x={x as number} y={600} at={c("The chariot is not in the wheels") + 0.3 + i * 0.3} strikeAt={c("The chariot is not in the wheels") + 1.2 + i * 0.25} color={DIM}>{`chariot in the ${w}?`}</Struck>
        ))}
      </AbsoluteFill>
      <Scene from={split - 0.4} to={1e9}>
        <Regress at={split} levels={5} />
        <At x={960} y={330} o={ramp(t, split, 0.5)}><Glow color={TEAL} size={32}>each part divides again…</Glow></At>
        <At x={960} y={860 - 30} o={ramp(t, c("never satisfied"), 0.5)}><Glow color={WARM} size={34}>no final piece is found</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const DesignatedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nat = c("the intrinsic nature the search was looking for"), des = c("The parts, too, are designated"), habit = c("a habit of seeing");
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, c("He does not conclude", 0.2))}><Cup /></At>
      <At x={560} y={680} o={ramp(t, c("He does not conclude") + 0.4, 0.5)}><Chip color={GREEN} size={34}>not unreal · it still holds tea</Chip></At>
      <Struck x={1340} y={260} at={nat - 0.1} strikeAt={nat + 1.3} color={WARM}>intrinsic nature</Struck>
      <At x={1340} y={340} o={ramp(t, nat + 1.3, 0.5)}><Glow color={DIM} size={28}>not there to be found</Glow></At>
      <At x={1340} y={470} o={ramp(t, des, 0.5)}><Chip color={ICE} size={34}>the parts, too: designated</Chip></At>
      <At x={1340} y={600} o={ramp(t, habit, 0.5)}><Glow color={GOLD} size={40} serif>a habit of seeing</Glow></At>
      <Struck x={1340} y={690} at={habit + 0.5} strikeAt={habit + 1.2} color={DIM}>a discovery about the world</Struck>
    </AbsoluteFill>
  );
};

const MiddleWayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("Whatever arises in dependence is emptiness"), b = c("Emptiness is itself a dependent designation"), mw = c("That is the middle way");
  const nn = c("Things are not nothing"), ss = c("They are not self-standing");
  const nodes: [string, number, number, string, number][] = [
    ["dependent arising", 560, 330, TEAL, a], ["emptiness", 1360, 330, GOLD, a + 1.4], ["dependent designation", 960, 560, VIOLET, b + 0.8]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("His verse on the middle way"), 0.5)}><Glow color={DIM} size={30}>MMK 24.18</Glow></At>
      <Svg>
        <DrawPath d="M640 360 L1280 360" p={ramp(t, a + 1.6, 0.6)} color={GOLD} width={4} len={700} />
        <DrawPath d="M1320 380 L1020 530" p={ramp(t, b + 1.0, 0.6)} color={VIOLET} width={4} len={400} />
        <DrawPath d="M900 530 L600 380" p={ramp(t, b + 1.3, 0.6)} color={TEAL} width={4} len={400} />
      </Svg>
      {nodes.map(([w, x, y, col, at], i) => <At key={i} x={x} y={y} s={pop(t, fps, at)}><Chip color={col} size={36}>{w}</Chip></At>)}
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="the middle way" at={mw} size={84} />
      </div>
      <Struck x={560} y={740} at={nn - 0.1} strikeAt={nn + 0.8} color={DIM}>nothing at all</Struck>
      <At x={560} y={810} o={ramp(t, nn + 0.8, 0.5)}><Glow color={GREEN} size={28}>they function</Glow></At>
      <Struck x={1360} y={740} at={ss - 0.1} strikeAt={ss + 0.8} color={DIM}>self-standing</Struck>
      <At x={1360} y={810} o={ramp(t, ss + 0.8, 0.5)}><Glow color={TEAL} size={28}>they depend</Glow></At>
    </AbsoluteFill>
  );
};

const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("emptiness is not a second reality"), fix = c("nothing is fixed in its own boundaries"), meet = c("They meet without obstruction");
  const slab = ramp(t, sec, 0.6), gone = ramp(t, sec + 1.4, 0.8);
  const m = ramp(t, meet - 0.2, 2.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sec, 0.5)}><Glow color={CHALK} size={42} serif>not a second reality behind things</Glow></At>
      <At x={960} y={330} o={slab * (1 - gone)} r={gone * 12}><Slab w={700} p={slab} label="emptiness, as a world behind" /></At>
      <Crossed x={960} y={330} at={sec + 1.0} size={70} />
      <At x={960} y={420} o={ramp(t, c("what dependence amounts to"), 0.5)}><Chip color={GOLD} size={34}>what dependence amounts to, seen clearly</Chip></At>
      {/* two forms with dashed, unfixed edges pass through each other */}
      <At x={700 + 260 * m} y={640} s={pop(t, fps, fix)}><div style={{ width: 200, height: 200, borderRadius: "50%", border: `4px dashed ${TEAL}`, background: `${TEAL}2a` }} /></At>
      <At x={1220 - 260 * m} y={640} s={pop(t, fps, fix + 0.2)}><div style={{ width: 200, height: 200, borderRadius: 24, border: `4px dashed ${ROSE}`, background: `${ROSE}2a` }} /></At>
      <At x={960} y={830} o={ramp(t, meet, 0.5)}><Glow color={GREEN} size={34}>meeting without obstruction</Glow></At>
    </AbsoluteFill>
  );
};

const FixingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fear = c("Fear takes the threat"), ctr = c("a fixed centre to be defended"), loses = c("the fear loses its object"), held = c("Only the way it is held");
  const melt = ramp(t, loses, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Why does this matter"), 0.5)}><Glow color={DIM} size={32}>why it matters</Glow></At>
      <div style={{ position: "absolute", top: 160, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="suffering runs on fixing" at={c("Suffering runs on fixing")} size={72} color={WARM} top="#FFE2D6" />
      </div>
      <At x={560} y={480} s={pop(t, fps, fear)} o={1 - 0.7 * melt}>
        <svg width={220} height={220} viewBox="0 0 220 220" style={{ filter: `drop-shadow(0 0 12px ${WARM})` }}>
          <path d="M110 20 L200 190 L20 190 Z" fill={`${WARM}22`} stroke={WARM} strokeWidth={6} strokeLinejoin="round" strokeDasharray={melt > 0.3 ? "14 10" : undefined} />
          <path d="M110 80 L110 135 M110 160 L110 165" stroke={WARM} strokeWidth={10} strokeLinecap="round" />
        </svg>
      </At>
      <At x={560} y={660} o={ramp(t, fear + 0.4, 0.5)}><Glow color={WARM} size={30}>a threat with its own nature</Glow></At>
      {/* the fixed centre: walls around a point */}
      <At x={1360} y={480} s={pop(t, fps, ctr - 0.2)}>
        <div style={{ position: "relative", width: 260, height: 260 }}>
          {[0, 1, 2].map((k) => <div key={k} style={{ position: "absolute", left: k * 30, top: k * 30, width: 260 - k * 60, height: 260 - k * 60, borderRadius: 12,
            border: `5px solid ${WARM}`, opacity: (1 - melt) * (0.5 + 0.25 * k), transform: `scale(${1 + 0.4 * melt * (3 - k)})` }} />)}
          <div style={{ position: "absolute", left: 115, top: 115, width: 30, height: 30, borderRadius: "50%", background: GOLD, boxShadow: `0 0 20px ${GOLD}`, opacity: 1 - 0.8 * melt }} />
        </div>
      </At>
      <At x={1360} y={660} o={ramp(t, ctr + 0.3, 0.5)}><Glow color={WARM} size={30}>a fixed centre to defend</Glow></At>
      <At x={960} y={760} o={ramp(t, c("Nothing has been removed"), 0.5)}><Chip color={GREEN} size={34}>nothing removed from the world</Chip></At>
      <At x={960} y={830} o={ramp(t, held, 0.5)}><Glow color={GOLD} size={34} serif>only the way it is held</Glow></At>
    </AbsoluteFill>
  );
};

const PresenceRiskScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("spontaneous presence"), risk = c("The risk is plain"), np = c("never produced");
  const slab = ramp(t, np, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("Now the other mode"), 0.5)}><Glow color={DIM} size={32}>the other mode</Glow></At>
      <div style={{ position: "absolute", top: 170, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="spontaneous presence" at={sp} size={82} />
      </div>
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2 + t * 0.15, r = 90 + 170 * ramp(t, sp + i * 0.04, 1.2);
        return <At key={i} x={960 + r * Math.cos(a)} y={460 + r * 0.5 * Math.sin(a)} s={pop(t, fps, sp + i * 0.04)}>
          <Orb size={18 + (i % 3) * 10} color={[GOLD, TEAL, ROSE, VIOLET, ICE][i % 5]} /></At>;
      })}
      <At x={960} y={460} o={ramp(t, c("does not need to be made"), 0.5)}><Glow color="#FFFFFF" size={34}>not made</Glow></At>
      <At x={960} y={650} o={slab}><Slab w={760} p={slab} label="an unmade essence beneath?" /></At>
      <At x={960} y={750} o={ramp(t, risk, 0.5)}><Glow color={WARM} size={34}>the risk: a ground in disguise</Glow></At>
      <Crossed x={960} y={650} at={np + 1.6} size={60} />
    </AbsoluteFill>
  );
};

const PathsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sup = c("suppress thought"), hold = c("one more object to hold"), rec = c("recognizes thought as already empty"), self = c("it stops fixing by itself");
  const press = ramp(t, sup + 0.4, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("So the paths matter"), 0.5)}><Glow color={CHALK} size={42} serif>two paths</Glow></At>
      <At x={520} y={220} o={ramp(t, sup, 0.4)}><Chip color={WARM} size={32}>suppression</Chip></At>
      <At x={1400} y={220} o={ramp(t, rec, 0.4)}><Chip color={TEAL} size={32}>recognition</Chip></At>
      {/* suppression: thoughts pressed down under a lid, the stillness becomes a thing held */}
      {Array.from({ length: 5 }).map((_, i) => (
        <At key={i} x={380 + i * 70} y={560 - 120 * (1 - press) + 10 * Math.sin(t * 3 + i)} s={pop(t, fps, sup - 0.2 + i * 0.1)}>
          <div style={{ width: 60, height: 40, borderRadius: 22, border: `3px solid ${VIOLET}`, background: `${VIOLET}33` }} /></At>
      ))}
      <At x={520} y={500 - 120 * (1 - press)} o={ramp(t, sup + 0.2, 0.4)}><div style={{ width: 400, height: 22, borderRadius: 6, background: `${WARM}88`, border: `3px solid ${WARM}` }} /></At>
      <At x={520} y={680} o={ramp(t, hold, 0.5)}><div style={{ position: "relative" }}><Chip color={WARM} size={30}>stillness, held</Chip></div></At>
      <At x={520} y={760} o={ramp(t, hold + 0.5, 0.5)}><Glow color={DIM} size={28}>one more object to hold</Glow></At>
      {/* recognition: thoughts arise and dissolve by themselves, like drawing on water */}
      {Array.from({ length: 8 }).map((_, i) => {
        const s0 = rec + i * 0.45, life = (t - s0) / 2.4;
        if (life < 0 || life > 1) return null;
        return <At key={i} x={1300 + (i % 3) * 100} y={620 - life * 300} o={Math.sin(life * Math.PI)} s={1 + 0.4 * life}>
          <div style={{ width: 70, height: 44, borderRadius: 24, border: `3px solid ${TEAL}`, background: `${TEAL}2a`, filter: `blur(${life * 4}px)` }} /></At>;
      })}
      <At x={1400} y={760} o={ramp(t, self, 0.5)}><Glow color={TEAL} size={30}>seen as empty, it stops fixing</Glow></At>
    </AbsoluteFill>
  );
};

const RecognitionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ach = c("Recognition is not an achievement"), comp = c("Spontaneous means already complete"), keep = c("something to keep");
  const neg = c("does not negate appearances"), ng = c("puts no new ground");
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={ach - 0.1} strikeAt={ach + 1.0} color={DIM} size={38}>an achievement</Struck>
      <At x={960} y={230} o={ramp(t, comp, 0.5)}><Glow color={GOLD} size={42} serif>already complete</Glow></At>
      {/* a trophy for 'effortlessness' appears, then is crossed out */}
      <At x={560} y={460} s={pop(t, fps, keep - 0.3)} o={1 - ramp(t, keep + 1.8, 0.6)}>
        <svg width={200} height={220} viewBox="0 0 200 220" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
          <path d="M50 20 L150 20 L140 90 Q100 130 60 90 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} />
          <path d="M100 120 L100 170 M60 190 L140 190" stroke={GOLD} strokeWidth={6} strokeLinecap="round" />
        </svg>
      </At>
      <At x={560} y={640} o={ramp(t, keep, 0.5)}><Glow color={WARM} size={30}>effortlessness, kept</Glow></At>
      <Crossed x={560} y={460} at={keep + 1.0} size={80} />
      {/* recognition leaves appearances standing */}
      <At x={1360} y={460} s={pop(t, fps, neg - 0.2)}><Cup steam={1} color={TEAL} /></At>
      <At x={1360} y={650} o={ramp(t, neg, 0.5)}><Chip color={GREEN} size={32}>appearances left standing</Chip></At>
      <Struck x={1360} y={760} at={ng - 0.2} strikeAt={ng + 0.8} color={WARM}>a new ground</Struck>
    </AbsoluteFill>
  );
};

const OneEventScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("two descriptions of one event"), dep = c("from conditions, without intrinsic nature"), comp = c("already complete, needing nothing added");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("In this book's reading"), 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      <At x={960} y={450} s={pop(t, fps, two)}><Orb size={150} color={GOLD} core={1} /></At>
      <At x={960} y={600} o={ramp(t, two + 0.3, 0.5)}><Glow color={GOLD} size={36} serif>one event</Glow></At>
      {[[TEAL, 470, 330], [VIOLET, 460, 570]].map(([col, x, y], i) => (
        <Flow key={i} x1={x as number} y1={y as number} x2={860} y2={450} color={col as string} p={ramp(t, dep + 0.3 + i * 0.2, 0.6)} />
      ))}
      {[[GOLD, 1450, 330], [ROSE, 1460, 570]].map(([col, x, y], i) => (
        <Flow key={i} x1={x as number} y1={y as number} x2={1060} y2={450} color={col as string} p={ramp(t, comp + 0.3 + i * 0.2, 0.6)} />
      ))}
      <At x={420} y={260} o={ramp(t, dep, 0.5)}><Chip color={TEAL} size={32}>dependent arising</Chip></At>
      <At x={420} y={660} o={ramp(t, dep + 0.4, 0.5)}><Glow color={TEAL} size={28}>from conditions · no intrinsic nature</Glow></At>
      <At x={1500} y={260} o={ramp(t, comp, 0.5)}><Chip color={GOLD} size={32}>spontaneous presence</Chip></At>
      <At x={1500} y={660} o={ramp(t, comp + 0.4, 0.5)}><Glow color={GOLD} size={28}>already complete · nothing added</Glow></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const va = c("vivid and empty at once"), wit = c("No separate witness"), lamp = c("like a lamp lighting itself");
  const gone = ramp(t, wit + 0.6, 1.2);
  return (
    <AbsoluteFill>
      {/* presentations arriving one after another, each vivid and dashed (empty) at once */}
      {Array.from({ length: 6 }).map((_, i) => {
        const s0 = va - 2 + i * 0.9, life = (t - s0) / 4;
        if (life < 0 || life > 1) return null;
        return <At key={i} x={420 + life * 1080} y={300 + 40 * Math.sin(i * 1.7)} o={Math.sin(life * Math.PI)}>
          <div style={{ width: 110, height: 110, borderRadius: "50%", border: `4px dashed ${[GOLD, TEAL, ROSE, VIOLET, ICE, GREEN][i]}`,
            background: `radial-gradient(circle, ${[GOLD, TEAL, ROSE, VIOLET, ICE, GREEN][i]}aa, transparent 70%)` }} /></At>;
      })}
      <div style={{ position: "absolute", top: 120, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="vivid and empty at once" at={va} size={76} />
      </div>
      <At x={960} y={440} o={ramp(t, c("Vivid because empty"), 0.5)}><Glow color={CHALK} size={36}>vivid because empty · empty because vivid</Glow></At>
      {/* the witness behind the stream fades; the lamp lights itself */}
      <At x={560} y={650} o={ramp(t, wit - 0.2, 0.5) * (1 - gone)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={32}>a separate witness</Chip><Strike at={wit + 0.6} /></div>
      </At>
      <At x={1300} y={600} s={1.6 * pop(t, fps, lamp - 0.3)}><Lamp self={ramp(t, lamp + 0.3, 1)} /></At>
      <At x={1300} y={800} o={ramp(t, lamp + 0.3, 0.5)}><Glow color={GOLD} size={38}>the flow knows itself</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const eff = c("The way out is not effort"), stop = c("The fixing stops"), nn = c("nothing needs to be put in its place");
  const release = ramp(t, stop + 0.3, 2.0);
  return (
    <AbsoluteFill>
      <Struck x={960} y={150} at={eff - 0.1} strikeAt={eff + 1.0} color={DIM} size={40}>effort</Struck>
      <At x={960} y={480} s={pop(t, fps, eff + 0.3)}><Cup steam={1} /></At>
      {/* a clamp around the cup opens and drifts away: the fixing stops */}
      <At x={960 - 260 * release} y={480} o={1 - release}><div style={{ width: 26, height: 320, borderRadius: 8, background: `${WARM}66`, border: `3px solid ${WARM}` }} /></At>
      <At x={960 + 260 * release} y={480} o={1 - release}><div style={{ width: 26, height: 320, borderRadius: 8, background: `${WARM}66`, border: `3px solid ${WARM}` }} /></At>
      <Ring x={960} y={480} p={ramp(t, stop + 0.6, 2.2)} r0={190} r1={480} color={GOLD} />
      <At x={960} y={790} o={ramp(t, nn, 0.8)}><Glow color={GOLD} size={44} serif>nothing to put in its place</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["cup", 0], ["analysis", c("Start with the dividing mind", 0.6)], ["middle", c("His verse on the middle way", 0.6)],
    ["fixing", c("Why does this matter", 0.6)], ["presence", c("Now the other mode", 0.6)],
    ["free", c("Recognition is not an achievement", 0.6)], ["presence", c("vivid and empty at once", 2.6)],
    ["cup", c("The way out is not effort", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Another way of knowing does not divide", 0.9)], <CupScene />],
    [S("Another way of knowing does not divide", "conceptual construction"), <WholeScene />],
    [S("conceptual construction", "Start with the dividing mind"), <TwoModesScene />],
    [S("Start with the dividing mind", "He does not conclude"), <AnalysisScene />],
    [S("He does not conclude", "His verse on the middle way"), <DesignatedScene />],
    [S("His verse on the middle way", "emptiness is not a second reality"), <MiddleWayScene />],
    [S("emptiness is not a second reality", "Why does this matter"), <OpenScene />],
    [S("Why does this matter", "Now the other mode"), <FixingScene />],
    [S("Now the other mode", "So the paths matter"), <PresenceRiskScene />],
    [S("So the paths matter", "Recognition is not an achievement"), <PathsScene />],
    [S("Recognition is not an achievement", "In this book's reading"), <RecognitionScene />],
    [S("In this book's reading", "vivid and empty at once", 0.5, 2.6), <OneEventScene />],
    [S("vivid and empty at once", "The way out is not effort", 2.6, 0.9), <VividScene />],
    [S("The way out is not effort", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
