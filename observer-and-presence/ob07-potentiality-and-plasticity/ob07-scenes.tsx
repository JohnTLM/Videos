// The Observer and the Taste of Presence, Chapter 7: Potentiality and Plasticity. Explainer drawings timed to the narration.
// Arc: the dress in two colourings; duck and rabbit; particle and wave -> appearances seem endlessly malleable -> the subtler
// idea: a store of potentials behind them (potency, potentia, a space of possibilities) -> that makes a substrate: openness given
// a home, emptiness as a new substance (struck) -> a potential is known through its partner: salt and water, seed and sprout ->
// "could" said within conditions, nothing backstage, no reservoir -> the openness is limited: rope as snake, but no shadow
// bridge, two colourings not every colour -> unlimited plasticity is the idealist extreme -> unobstructed: nothing blocks
// the display, and no store behind it.
// Stance: the store of potentials is drawn only dashed and questioned, then struck or dissolved; appearances stay vivid.
import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "The dress is seen as white and gold", "seen as blue and black",
  "seen as a duck, or as a rabbit", "The same electron appears", "depending on how it is asked", "seem endlessly malleable",
  "a subtler idea suggests itself", "a store of potentials behind appearances", "Aristotle spoke of potency", "Quantum theory describes",
  "what gets actualised", "The potentials are what is really there",
  "that makes a substrate", "Emptiness here means the absence", "The mind sees that phenomena", "gives their openness a home behind them",
  "Emptiness becomes a new substance",
  "a potential is known only through what it becomes", "Salt is soluble only in relation to water", "A seed is a seed",
  "is said within a set of conditions", "not a thing waiting backstage", "for whom emptiness is possible", "the word means",
  "It does not describe a reservoir",
  "Nor is the openness endless", "open because they depend", "limited for the same reason", "A rope can appear as a snake",
  "A shadow cannot be walked across", "into two colourings",
  "A plasticity free of all conditions", "a power able to make anything", "the idealist extreme", "exactly as plastic as their conditions allow",
  "a better word than potential", "unobstructed", "Nothing blocks the display", "there is no store behind it",
];

// Book 4 mood: plum and gold
const M = {
  shift: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  store: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  partner: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  limit: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  free: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
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

const Head: React.FC<{ text: string; at: number; y?: number; size?: number; color?: string }> = ({ text, at, y = 150, size = 76, color }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>
    <Reveal text={text} at={at} size={size} color={color} />
  </div>
);

const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.5)} color={color} width={7} len={70} />
    </svg>
  );
};

const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

/** The dress: blue 0 = white and gold, 1 = blue and black. */
const Dress: React.FC<{ blue: number; size?: number }> = ({ blue, size = 1 }) => {
  const base = interpolateColors(blue, [0, 1], ["#e2dcf4", "#3b4fc0"]);
  const band = interpolateColors(blue, [0, 1], ["#c49a45", "#151515"]);
  const glow = interpolateColors(blue, [0, 1], [GOLD, "#5b78ff"]);
  return (
    <svg width={300 * size} height={440 * size} viewBox="0 0 300 440" style={{ overflow: "visible", filter: `drop-shadow(0 0 22px ${glow})` }}>
      <defs><clipPath id={`dress${Math.round(size * 100)}`}><path d="M110 10 L190 10 L200 120 Q240 250 290 430 L10 430 Q60 250 100 120 Z" /></clipPath></defs>
      <path d="M110 10 L190 10 L200 120 Q240 250 290 430 L10 430 Q60 250 100 120 Z" fill={base} />
      <g clipPath={`url(#dress${Math.round(size * 100)})`}>
        {[60, 120, 200, 290, 380].map((y, i) => <rect key={i} x={0} y={y} width={300} height={i === 1 ? 22 : 30} fill={band} />)}
      </g>
      <path d="M110 10 L190 10 L200 120 Q240 250 290 430 L10 430 Q60 250 100 120 Z" fill="none" stroke={CHALK} strokeWidth={3} strokeOpacity={0.5} />
    </svg>
  );
};

/** The duck-rabbit: one drawing, two ways of seeing it. */
const DuckRabbit: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={320} height={260} viewBox="0 0 320 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M128 100 Q70 54 4 66 Q56 96 120 120" fill={`${color}14`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <path d="M122 140 Q66 140 14 118 Q60 160 130 160" fill={`${color}14`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <ellipse cx={205} cy={140} rx={92} ry={72} fill={`${color}14`} stroke={color} strokeWidth={6} />
    <circle cx={190} cy={118} r={8} fill={color} />
    <path d="M296 150 Q288 158 294 166" fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

const Flame: React.FC<{ size?: number; seed?: number }> = ({ size = 1, seed = 0 }) => {
  const { t } = useT();
  const f = Math.sin(t * 9 + seed) * 5 + Math.sin(t * 13.7 + seed * 2) * 3;
  const tip = 60 + f * 0.8, mid = 60 + (tip - 60) * 0.6;
  return (
    <svg width={120 * size} height={180 * size} viewBox="0 0 120 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 34px ${GOLD}88)` }}>
      <path d={`M60 176 C24 172 16 132 34 100 C46 78 ${tip - 6} 46 ${tip} ${6 + Math.abs(f) * 0.6} C${tip + 10} 50 104 84 100 124 C98 160 84 176 60 176 Z`} fill={`${WARM}cc`} />
      <path d={`M60 172 C40 168 36 140 46 120 C54 104 ${mid} 80 ${mid} ${60 + f * 0.4} C${mid + 6} 92 84 112 82 136 C80 160 72 172 60 172 Z`} fill={GOLD} />
    </svg>
  );
};

/** A coiled rope that looks like a snake in the dark (lit 0..1). */
const RopeSnake: React.FC<{ lit: number; size?: number }> = ({ lit, size = 1 }) => {
  const { t } = useT();
  const d = "M40 160 C120 60 200 60 260 140 S400 230 470 140 S580 60 640 120";
  const wig = (1 - lit) * Math.sin(t * 3) * 6;
  return (
    <svg width={700 * size} height={260 * size} viewBox="0 0 700 260" style={{ overflow: "visible", filter: `brightness(${0.55 + 0.45 * lit})` }}>
      <g transform={`translate(0 ${wig})`} opacity={1 - lit}>
        <path d={d} fill="none" stroke="#4f8a5a" strokeWidth={26} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#9fd49a" strokeWidth={4} strokeDasharray="4 18" strokeLinecap="round" />
        <ellipse cx={652} cy={116} rx={32} ry={20} fill="#4f8a5a" />
        <circle cx={662} cy={108} r={5} fill={GOLD} />
      </g>
      <g opacity={lit}>
        <path d={d} fill="none" stroke="#C9A06A" strokeWidth={22} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#7a5a32" strokeWidth={4} strokeDasharray="10 14" />
      </g>
    </svg>
  );
};

/** A dashed, questioned store of potentials (o 0..1, gone 0..1). */
const Store: React.FC<{ w?: number; h?: number; label?: string; gone?: number }> = ({ w = 900, h = 170, label = "a store of potentials?", gone = 0 }) => {
  const { t } = useT();
  return (
    <div style={{ position: "relative", width: w, height: h, opacity: 1 - gone, filter: gone > 0.01 ? `blur(${gone * 10}px)` : undefined }}>
      <div style={{ position: "absolute", inset: 0, borderRadius: 30, border: `3px dashed ${DIM}`, background: "#26222eaa" }} />
      {Array.from({ length: 22 }).map((_, i) => (
        <div key={i} style={{ position: "absolute", left: 30 + rand(i) * (w - 60), top: 20 + rand(i + 5) * (h - 60), width: 10, height: 10, borderRadius: "50%",
          background: DIM, opacity: 0.3 + 0.4 * Math.abs(Math.sin(t * 1.5 + i)) }} />
      ))}
      <div style={{ position: "absolute", width: "100%", bottom: 14, textAlign: "center", fontFamily: SERIF, fontSize: 32, color: DIM }}>{label}</div>
    </div>
  );
};

/** A small glowing shape: 0 circle, 1 diamond, 2 triangle. */
const MiniShape: React.FC<{ kind: number; color: string }> = ({ kind, color }) => (
  <svg width={50} height={50} viewBox="0 0 50 50" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    {kind === 0 && <circle cx={25} cy={25} r={20} fill={`${color}88`} stroke={color} strokeWidth={3} />}
    {kind === 1 && <path d="M25 2 L48 25 L25 48 L2 25 Z" fill={`${color}88`} stroke={color} strokeWidth={3} />}
    {kind === 2 && <path d="M25 4 L47 44 L3 44 Z" fill={`${color}88`} stroke={color} strokeWidth={3} strokeLinejoin="round" />}
  </svg>
);

// ---------------------------------------------------------------- scenes
const DressScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wg = c("The dress is seen as white and gold"), bb = c("seen as blue and black");
  const blue = ramp(t, bb + 0.2, 0.8) * (t < bb + 3 ? 1 : 0.5 + 0.5 * Math.cos((t - bb - 3) * 1.4));
  return (
    <AbsoluteFill>
      <At x={960} y={450} s={pop(t, fps, wg)}><Dress blue={blue} /></At>
      <At x={520} y={360} o={ramp(t, wg + 0.6, 0.5)} s={1 + 0.15 * (1 - blue)}><Chip color={GOLD} size={38}>white and gold</Chip></At>
      <At x={1400} y={360} o={ramp(t, bb, 0.5)} s={1 + 0.15 * blue}><Chip color="#5b78ff" size={38}>blue and black</Chip></At>
      <At x={960} y={780} o={ramp(t, bb + 0.8, 0.5)}><Glow color={DIM} size={30}>the same dress</Glow></At>
    </AbsoluteFill>
  );
};

const DuckRabbitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dr = c("seen as a duck, or as a rabbit"), el = c("The same electron appears"), ask = c("depending on how it is asked");
  const mal = c("seem endlessly malleable");
  const duck = Math.floor(Math.max(0, t - dr) / 1.6) % 2 === 0;
  const wave = 0.5 - 0.5 * Math.cos(Math.max(0, t - el - 0.8) * 1.6);
  const wavePath = Array.from({ length: 61 }).map((_, i) => `${i ? "L" : "M"}${1180 + i * 8} ${400 + Math.sin(i * 0.35 - t * 5) * 50}`).join(" ");
  const blob = Array.from({ length: 24 }).map((_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const r = 70 + 24 * Math.sin(a * 3 + t * 2) + 16 * Math.cos(a * 2 - t * 1.3);
    return `${i ? "L" : "M"}${960 + r * Math.cos(a)} ${700 + r * 0.6 * Math.sin(a)}`;
  }).join(" ") + " Z";
  return (
    <AbsoluteFill>
      <At x={560} y={110} o={ramp(t, dr - 0.3, 0.4)}><Glow color={CHALK} size={36} serif>the same lines</Glow></At>
      <At x={560} y={380} s={pop(t, fps, dr - 0.3)}><DuckRabbit /></At>
      <At x={560} y={560} o={ramp(t, dr, 0.4)}><Chip color={duck ? GOLD : ROSE} size={36}>{duck ? "a duck" : "a rabbit"}</Chip></At>
      <At x={1420} y={110} o={ramp(t, el, 0.4)}><Glow color={CHALK} size={36} serif>the same electron</Glow></At>
      <At x={1420} y={400} o={ramp(t, el, 0.5) * (1 - wave)}><Orb size={90} color={ICE} /></At>
      <Svg style={{ opacity: ramp(t, el, 0.5) * wave }}><path d={wavePath} fill="none" stroke={ICE} strokeWidth={6} style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} /></Svg>
      <At x={1420} y={560} o={ramp(t, el + 0.4, 0.4)}><Chip color={ICE} size={32}>{wave > 0.5 ? "a wave" : "a particle"}</Chip></At>
      <At x={1420} y={250} o={ramp(t, ask, 0.5)}><Glow color={DIM} size={28}>depends how it is asked</Glow></At>
      <Svg style={{ opacity: ramp(t, mal - 0.3, 0.6) }}>
        <path d={blob} fill={`${VIOLET}44`} stroke={VIOLET} strokeWidth={5} style={{ filter: `drop-shadow(0 0 12px ${VIOLET})` }} />
      </Svg>
      <At x={960} y={810} o={ramp(t, mal, 0.5)}><Glow color={VIOLET} size={32}>endlessly malleable?</Glow></At>
    </AbsoluteFill>
  );
};

const StoreScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("a subtler idea suggests itself"), store = c("a store of potentials behind appearances"), ari = c("Aristotle spoke of potency");
  const qt = c("Quantum theory describes"), act = c("what gets actualised"), real = c("The potentials are what is really there");
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN];
  const rise = ramp(t, act + 0.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, sub, 0.5)}><Glow color={CHALK} size={42} serif>a subtler idea</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={560 + i * 200} y={260 + Math.sin(t * 1.3 + i) * 8} s={pop(t, fps, sub + 0.5 + i * 0.15)}><Orb size={70} color={col} /></At>
      ))}
      <At x={960} y={560} o={ramp(t, store, 0.6)}><Store /></At>
      {[0, 1, 2].map((i) => (
        <Flow key={i} x1={760 + i * 200} y1={470} x2={760 + i * 200} y2={310} color={DIM} p={ramp(t, store + 0.8 + i * 0.2, 0.6)} dash pulses={false} />
      ))}
      <At x={330} y={420} s={pop(t, fps, ari)}><Chip color={GOLD} size={28}>Aristotle: potency</Chip></At>
      <At x={1590} y={420} s={pop(t, fps, ari + 1.6)}><Chip color={ICE} size={28}>Heisenberg: potentia</Chip></At>
      <At x={1590} y={720} o={ramp(t, qt, 0.5)}>
        <svg width={260} height={160} viewBox="0 0 260 160" style={{ overflow: "visible" }}>
          {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={i * 52} y1={0} x2={i * 52 + 40} y2={160} stroke={VIOLET} strokeOpacity={0.6} strokeWidth={2} />)}
          {Array.from({ length: 4 }).map((_, i) => <line key={i} x1={0} y1={i * 50 + 5} x2={260} y2={i * 50 + 5} stroke={VIOLET} strokeOpacity={0.6} strokeWidth={2} />)}
        </svg>
      </At>
      <At x={1590} y={830} o={ramp(t, qt + 0.5, 0.5)}><Glow color={VIOLET} size={24}>a space of possibilities</Glow></At>
      <At x={960} y={560 - 300 * rise} o={ramp(t, act, 0.3)} s={0.6 + 0.4 * rise}><Orb size={70} color={WARM} core={rise} /></At>
      <At x={330} y={700} o={ramp(t, act + 0.6, 0.5)}><Glow color={WARM} size={28}>appearances: actualised</Glow></At>
      <At x={960} y={760} o={ramp(t, real, 0.5)}><Glow color={DIM} size={32}>the potentials: really there?</Glow></At>
    </AbsoluteFill>
  );
};

const SubstrateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("that makes a substrate"), mean = c("Emptiness here means the absence"), mind = c("The mind sees that phenomena");
  const home = c("gives their openness a home behind them"), subst = c("Emptiness becomes a new substance");
  const gone = ramp(t, subst + 2.2, 1.2);
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN];
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, mean)}><Chip color={GOLD} size={34}>emptiness: no nature of its own</Chip></At>
      {cols.map((col, i) => (
        <At key={i} x={560 + i * 200 + Math.sin(t * 2 + i) * 10} y={290 + Math.cos(t * 1.7 + i) * 10} s={pop(t, fps, mind + i * 0.12)}><Orb size={70} color={col} /></At>
      ))}
      <At x={960} y={390} o={ramp(t, mind + 0.8, 0.5)}><Glow color={TEAL} size={28}>no fixed nature</Glow></At>
      <At x={960} y={580} o={ramp(t, sub - 0.2, 0.5) * (1 - gone)} blur={gone * 10}>
        <svg width={520} height={300} viewBox="0 0 520 300" style={{ overflow: "visible" }}>
          <path d="M20 120 L260 10 L500 120 L500 290 L20 290 Z" fill="#26222eaa" stroke={DIM} strokeWidth={4} strokeDasharray="14 10" strokeLinejoin="round"
            opacity={ramp(t, home, 0.6)} />
          <rect x={60} y={150} width={400} height={110} rx={14} fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 8" opacity={1 - ramp(t, home, 0.6) * 0.5} />
        </svg>
      </At>
      <At x={960} y={660} o={between(t, sub, home, 0.4) * (1 - gone)}><Glow color={DIM} size={32}>a hidden base?</Glow></At>
      <At x={960} y={660} o={between(t, home + 0.4, subst, 0.4)}><Glow color={DIM} size={32}>a home for openness?</Glow></At>
      <At x={960} y={660} o={ramp(t, subst, 0.4) * (1 - gone)}><Glow color={WARM} size={32}>a substance of possibilities?</Glow></At>
      {t < subst + 3.6 && <Crossed x={960} y={580} at={subst + 1.4} size={140} />}
      <At x={960} y={800} o={ramp(t, gone, 0.3)}><Glow color={GOLD} size={34} serif>emptiness is not a new stuff</Glow></At>
    </AbsoluteFill>
  );
};

const SaltSeedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pot = c("a potential is known only through what it becomes"), salt = c("Salt is soluble only in relation to water"), seed = c("A seed is a seed");
  const drop = ramp(t, salt + 0.8, 1.0), diss = ramp(t, salt + 1.8, 1.6);
  const grow = ramp(t, seed + 0.8, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, pot, 0.5)}><Glow color={CHALK} size={42} serif>known through its partner</Glow></At>
      {/* salt and water */}
      <At x={560} y={520} o={ramp(t, pot + 0.8, 0.5)}>
        <div style={{ position: "relative", width: 220, height: 260, borderLeft: `5px solid ${ICE}`, borderRight: `5px solid ${ICE}`, borderBottom: `5px solid ${ICE}`,
          borderRadius: "0 0 30px 30px", boxShadow: `0 0 20px ${ICE}55`, overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 180, background: `linear-gradient(180deg, ${ICE}55, #3d7fa8aa)` }} />
        </div>
      </At>
      {Array.from({ length: 8 }).map((_, i) => (
        <At key={i} x={520 + (i % 4) * 26 + rand(i) * 10} y={300 + Math.floor(i / 4) * 24 + drop * 220 + rand(i + 2) * 40 * diss}
          o={ramp(t, salt, 0.4) * (1 - diss)} r={rand(i) * 40}>
          <div style={{ width: 18, height: 18, background: CHALK, boxShadow: `0 0 8px ${CHALK}` }} />
        </At>
      ))}
      <At x={560} y={720} o={ramp(t, salt + 1.0, 0.5)}><Chip color={ICE} size={30}>soluble: only with water</Chip></At>
      {/* seed and sprout */}
      <Svg>
        <path d="M1160 600 L1560 600" stroke="#8a5a34" strokeWidth={10} strokeLinecap="round" opacity={ramp(t, pot + 1.6, 0.5)} />
        <ellipse cx={1360} cy={590} rx={26} ry={16} fill="#C9A06A" opacity={ramp(t, pot + 1.9, 0.5)} />
        <DrawPath d="M1360 585 C1356 520 1368 460 1360 380" p={grow} color={GREEN} width={7} len={240} />
        <path d={`M1360 470 Q${1360 - 70 * grow} ${450 - 30 * grow} ${1360 - 90 * grow} ${470 - 10 * grow} Q${1360 - 40 * grow} 490 1360 470 Z`} fill={`${GREEN}88`} stroke={GREEN} strokeWidth={3} opacity={ramp(t, seed + 1.6, 0.5)} />
        <path d={`M1362 420 Q${1362 + 70 * grow} ${396 - 30 * grow} ${1362 + 90 * grow} ${416 - 10 * grow} Q${1362 + 40 * grow} 440 1362 420 Z`} fill={`${GREEN}88`} stroke={GREEN} strokeWidth={3} opacity={ramp(t, seed + 2.0, 0.5)} />
      </Svg>
      <At x={1360} y={720} o={ramp(t, seed + 1.0, 0.5)}><Chip color={GREEN} size={30}>a seed: only with the sprout</Chip></At>
    </AbsoluteFill>
  );
};

const CouldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cond = c("is said within a set of conditions"), back = c("not a thing waiting backstage"), whom = c("for whom emptiness is possible");
  const means = c("the word means"), res = c("It does not describe a reservoir");
  const first = 1 - ramp(t, whom - 0.2, 0.6);
  const conds: [string, string][] = [["water", ICE], ["warmth", WARM], ["time", GOLD], ["soil", GREEN]];
  return (
    <AbsoluteFill>
      <div style={{ opacity: first }}>
        <At x={600} y={420} s={pop(t, fps, cond - 0.4)}><Glow color={GOLD} size={80} serif>“could”</Glow></At>
        {conds.map(([w, col], i) => {
          const a = (i / 4) * Math.PI * 2 + t * 0.3;
          return <At key={w} x={600 + 260 * Math.cos(a)} y={420 + 170 * Math.sin(a)} s={pop(t, fps, cond + 0.3 + i * 0.3)}><Chip color={col} size={28}>{w}</Chip></At>;
        })}
        <At x={600} y={700} o={ramp(t, cond + 1.4, 0.5)}><Glow color={DIM} size={28}>said within conditions</Glow></At>
        <At x={1400} y={420} o={ramp(t, back - 0.2, 0.5)}>
          <svg width={460} height={380} viewBox="0 0 460 380" style={{ overflow: "visible" }}>
            <path d="M0 0 L460 0" stroke={GOLD} strokeWidth={10} />
            <path d="M0 0 Q30 190 0 380 L150 380 Q120 190 150 0 Z" fill="#7a2840" stroke={ROSE} strokeWidth={3} />
            <path d="M460 0 Q430 190 460 380 L310 380 Q340 190 310 0 Z" fill="#7a2840" stroke={ROSE} strokeWidth={3} />
          </svg>
        </At>
        <At x={1400} y={430} o={ramp(t, back + 0.3, 0.5)}><Ghost o={1} size={0.75} /></At>
        <At x={1400} y={680} o={ramp(t, back + 0.5, 0.5)}><Glow color={DIM} size={28}>waiting backstage?</Glow></At>
        <Crossed x={1400} y={430} at={back + 1.3} size={100} />
      </div>
      <At x={960} y={200} s={pop(t, fps, whom)}><Chip color={GOLD} size={34}>“where emptiness fits, everything fits”</Chip></At>
      <At x={760} y={400} s={pop(t, fps, means + 0.3)}><Glow color={GREEN} size={60} serif>fits</Glow></At>
      <At x={1160} y={400} s={pop(t, fps, means + 0.9)}><Glow color={TEAL} size={60} serif>works</Glow></At>
      <At x={960} y={630} o={ramp(t, res - 0.3, 0.5) * (1 - ramp(t, res + 2.2, 1))} blur={ramp(t, res + 2.2, 1) * 10}>
        <Store w={560} h={150} label="a reservoir?" />
      </At>
      {t > whom && <Crossed x={960} y={630} at={res + 1.0} size={90} />}
    </AbsoluteFill>
  );
};

const LimitsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const end = c("Nor is the openness endless"), dep = c("open because they depend"), lim = c("limited for the same reason");
  const rope = c("A rope can appear as a snake"), sh = c("A shadow cannot be walked across"), two = c("into two colourings");
  const lit = 0.5 + 0.5 * Math.sin(Math.max(0, t - rope) * 1.4 - Math.PI / 2) * -1;
  const rainbow = ["#ff5a5a", "#ffb84a", "#f2e35a", "#6fe08a", "#5ac8ff", "#b07bff"];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, end, 0.5)}><Glow color={CHALK} size={44} serif>open, but not endless</Glow></At>
      <At x={620} y={200} s={pop(t, fps, dep)}><Chip color={TEAL} size={32}>open: because they depend</Chip></At>
      <At x={1300} y={200} s={pop(t, fps, lim)}><Chip color={WARM} size={32}>limited: for the same reason</Chip></At>
      <At x={420} y={460} o={ramp(t, rope - 0.2, 0.5)}><RopeSnake lit={lit} size={0.5} /></At>
      <At x={420} y={600} o={ramp(t, rope + 0.4, 0.5)}><Chip color={GREEN} size={26}>rope as snake: possible</Chip></At>
      <At x={980} y={460} o={ramp(t, sh - 0.2, 0.5)}>
        <div style={{ position: "relative", width: 380, height: 200 }}>
          <div style={{ position: "absolute", left: 0, top: 50, width: 380, height: 100, background: `linear-gradient(180deg, #3d7fa8aa, #24507a)`, borderRadius: 10 }} />
          <div style={{ position: "absolute", left: 10, top: 82, width: 360, height: 36, background: "#0a0a12cc", borderRadius: 18, filter: "blur(5px)", transform: "skewX(-20deg)" }} />
        </div>
      </At>
      <Crossed x={980} y={460} at={sh + 1.0} size={80} />
      <At x={980} y={600} o={ramp(t, sh + 0.4, 0.5)}><Chip color={WARM} size={26}>a shadow bridge: never</Chip></At>
      <At x={1440} y={450} o={ramp(t, two - 0.4, 0.5)}><Dress blue={0} size={0.45} /></At>
      <At x={1620} y={450} o={ramp(t, two - 0.2, 0.5)}><Dress blue={1} size={0.45} /></At>
      <At x={1530} y={620} o={ramp(t, two + 0.4, 0.5)}>
        <div style={{ position: "relative", display: "flex", gap: 8 }}>
          {rainbow.map((col) => <div key={col} style={{ width: 34, height: 34, borderRadius: 6, background: col }} />)}
          <Strike at={two + 1.2} />
        </div>
      </At>
      <At x={1530} y={700} o={ramp(t, two + 0.8, 0.5)}><Glow color={DIM} size={24}>two colourings, not every colour</Glow></At>
    </AbsoluteFill>
  );
};

const PlasticScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const free = c("A plasticity free of all conditions"), pow = c("a power able to make anything"), ide = c("the idealist extreme");
  const ex = c("exactly as plastic as their conditions allow");
  const firstO = 1 - ramp(t, ex - 0.3, 0.6);
  const blob = Array.from({ length: 24 }).map((_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const r = 110 + 18 * Math.sin(a * 3 + t * 2) + 10 * Math.cos(a * 2 - t * 1.3);
    return `${i ? "L" : "M"}${960 + r * Math.cos(a)} ${480 + r * 0.8 * Math.sin(a)}`;
  }).join(" ") + " Z";
  const conds: [string, string, number][] = [["light", GOLD, 0], ["eye", TEAL, 1], ["context", VIOLET, 2], ["shape", ROSE, 3], ["distance", ICE, 4]];
  return (
    <AbsoluteFill>
      <div style={{ opacity: firstO }}>
        <At x={960} y={110} o={ramp(t, free, 0.5)}><Glow color={CHALK} size={40} serif>free of all conditions?</Glow></At>
        <At x={760} y={440} s={pop(t, fps, free + 0.4)} r={-30 + Math.sin(t * 3) * 8}>
          <div style={{ width: 16, height: 260, borderRadius: 8, background: `linear-gradient(180deg, ${GOLD}, #5a3a20)`, boxShadow: `0 0 20px ${GOLD}` }} />
        </At>
        {conds.slice(0, 4).map(([w, col, i]) => {
          const a = Math.PI * (0.62 + i * 0.25), d = ramp(t, free + 1.0 + i * 0.25, 2.2);
          return <At key={w} x={760 + (170 + 260 * d) * Math.cos(a)} y={440 + (150 + 200 * d) * Math.sin(a) * 0.9} o={ramp(t, free + 0.5, 0.4) * (1 - d)}>
            <Chip color={col} size={26}>{w}</Chip></At>;
        })}
        <At x={1260} y={440} o={between(t, free + 2.4, pow + 0.2, 0.5)}>
          <div style={{ position: "relative", padding: "14px 28px", borderRadius: 14, border: `3px dashed ${GOLD}`, fontFamily: SERIF, fontSize: 38, color: CHALK }}>
            its own kind of own nature?<Strike at={pow - 0.4} />
          </div>
        </At>
        {Array.from({ length: 10 }).map((_, i) => {
          const life = ((t - pow) * 0.5 + i / 10) % 1;
          return t > pow ? (
            <At key={i} x={820 + life * 700 + Math.sin(i * 3) * 60} y={320 + Math.sin(i * 2.1) * 180 - life * 40} o={Math.sin(life * Math.PI)} s={0.6 + life}>
              <MiniShape kind={i % 3} color={[GOLD, ROSE, TEAL, VIOLET, ICE][i % 5]} />
            </At>
          ) : null;
        })}
        <Struck x={960} y={680} at={pow} strikeAt={ide} color={GOLD} size={34}>a power to make anything</Struck>
        <At x={960} y={790} s={pop(t, fps, ide)}><Chip color={WARM} size={32}>the idealist extreme, not the Middle Way</Chip></At>
      </div>
      <Svg style={{ opacity: ramp(t, ex - 0.2, 0.6) }}>
        <path d={blob} fill={`${VIOLET}55`} stroke={VIOLET} strokeWidth={5} style={{ filter: `drop-shadow(0 0 14px ${VIOLET})` }} />
      </Svg>
      {conds.map(([w, col, i]) => {
        const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
        return <At key={w} x={960 + 340 * Math.cos(a)} y={470 + 250 * Math.sin(a)} s={pop(t, fps, ex + 0.4 + i * 0.25)}><Chip color={col} size={28}>{w}</Chip></At>;
      })}
      <At x={960} y={800} o={ramp(t, ex + 1.0, 0.5)}><Glow color={GOLD} size={34} serif>as plastic as conditions allow</Glow></At>
    </AbsoluteFill>
  );
};

const UnobstructedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const better = c("a better word than potential"), un = c("unobstructed"), blocks = c("Nothing blocks the display"), store = c("there is no store behind it");
  const gone = ramp(t, store + 1.6, 1.4);
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN, VIOLET];
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={better} strikeAt={better + 1.0} color={DIM} size={34}>potential</Struck>
      <At x={960} y={230} o={ramp(t, un, 0.3)}><Reveal text="unobstructed" at={un} size={92} /></At>
      {Array.from({ length: 16 }).map((_, i) => {
        const x = ((rand(i) * 2200 + (t - blocks) * (90 + rand(i + 1) * 80)) % 2200) - 140;
        const y = 380 + rand(i + 4) * 300 + Math.sin(t * 1.2 + i) * 20;
        return (
          <At key={i} x={x} y={y} o={ramp(t, blocks + rand(i) * 0.8, 0.6)}>
            {i % 4 === 0 ? <div style={{ transform: "scale(0.35)" }}><Flame seed={i} /></div> : <Orb size={36 + rand(i + 2) * 40} color={cols[i % 6]} />}
          </At>
        );
      })}
      <At x={960} y={360} o={ramp(t, blocks + 0.4, 0.5)}><Glow color={TEAL} size={30}>nothing blocks the display</Glow></At>
      <At x={960} y={720} o={ramp(t, store, 0.5)}><Store w={900} h={130} label="a store behind?" gone={gone} /></At>
      {t < store + 3.4 && <Crossed x={960} y={720} at={store + 0.8} size={80} />}
      <At x={960} y={800} o={ramp(t, gone, 0.4)}><Glow color={GOLD} size={34} serif>no store behind it</Glow></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["shift", 0], ["store", c("a subtler idea suggests itself", 0.6)], ["partner", c("a potential is known only through what it becomes", 0.6)],
    ["limit", c("Nor is the openness endless", 0.6)], ["free", c("a better word than potential", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("seen as a duck, or as a rabbit", 0.9)], <DressScene />],
    [S("seen as a duck, or as a rabbit", "a subtler idea suggests itself", 0.9), <DuckRabbitScene />],
    [S("a subtler idea suggests itself", "that makes a substrate"), <StoreScene />],
    [S("that makes a substrate", "a potential is known only through what it becomes"), <SubstrateScene />],
    [S("a potential is known only through what it becomes", "is said within a set of conditions"), <SaltSeedScene />],
    [S("is said within a set of conditions", "Nor is the openness endless", 0.9), <CouldScene />],
    [S("Nor is the openness endless", "A plasticity free of all conditions"), <LimitsScene />],
    [S("A plasticity free of all conditions", "a better word than potential"), <PlasticScene />],
    [S("a better word than potential", null), <UnobstructedScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
