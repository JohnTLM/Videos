// Chapter 15: Science in a Substrateless World. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mood, Orb,
  ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "How long is the coast", "must have an answer",
  "a hundred kilometres long", "the bays and headlands", "a ruler of one kilometre", "the coast grows longer", "a ruler of a metre",
  "trace every rock", "longer still",
  "There is no length", "at any chosen scale", "exact and repeatable", "Two careful surveyors", "will agree", "not arbitrary",
  "designated together with the scale", "entirely reliable",
  "For centuries", "peeling back appearances", "the building blocks underneath", "Tiny self-existing things", "holding the world up",
  "But an intrinsic nature", "the very dependencies", "Every property science finds", "parts, causes, contexts", "a framework of measurement",
  "Adding an essence", "predicts nothing more",
  "Even causation looks different", "one solid body pushing", "Science today speaks", "regularities, laws and models", "A cause is a cause",
  "relation to its effect", "great precision",
  "Every science must also decide", "The cell and its environment", "The colliding particles", "no lines drawn in advance",
  "The scientist draws them", "holds up or it does not",
  "So theories can be revised", "When Einstein's theory", "not thrown away", "approximations, valid within a domain", "Bridges are still designed",
  "A good theory is a framework", "fail where it does not", "This is not relativism", "Some designations hold up", "and some do not",
  "Surely, someone says", "the bottom at last", "fixed, intrinsic properties", "Yet mass", "a measure of interaction", "Most of what we weigh",
  "the energy binding its quarks",
  "Physics does not prove", "does not rest on physics", "Nor does interaction become", "Interaction too is designated", "together with what interacts",
  "A hidden wave of possibilities", "the clicks of a detector", "the old substrate",
  "None of this asks science", "Experiments run as before", "Results are trusted", "What changes is the story", "not digging toward",
  "refining designations",
  "And something is gained", "Wonder", "not a machine of tiny parts", "vivid, exact, endlessly detailed", "nowhere found from its own side",
  "The physicist at the bench", "holding a cube of ice", "the same way",
];

const M = {
  coast: { a: "rgba(30,110,150,0.55)", b: "rgba(40,130,110,0.45)", c: "rgba(150,120,60,0.3)" },
  blocks: { a: "rgba(100,60,170,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(60,60,120,0.3)" },
  cause: { a: "rgba(170,110,50,0.5)", b: "rgba(40,110,140,0.45)", c: "rgba(110,60,150,0.3)" },
  system: { a: "rgba(40,130,80,0.5)", b: "rgba(30,110,140,0.45)", c: "rgba(150,120,60,0.3)" },
  revise: { a: "rgba(40,70,150,0.55)", b: "rgba(150,110,50,0.45)", c: "rgba(30,110,130,0.3)" },
  particle: { a: "rgba(80,40,150,0.55)", b: "rgba(160,70,90,0.4)", c: "rgba(30,80,140,0.35)" },
  ground: { a: "rgba(150,60,100,0.45)", b: "rgba(90,60,160,0.45)", c: "rgba(40,110,120,0.3)" },
  methods: { a: "rgba(30,120,130,0.55)", b: "rgba(60,130,80,0.4)", c: "rgba(150,110,50,0.35)" },
  wonder: { a: "rgba(150,110,50,0.5)", b: "rgba(40,140,180,0.45)", c: "rgba(110,60,170,0.35)" },
};

// ---------------------------------------------------------------- helpers
const XMark: React.FC<{ x: number; y: number; r: number; at: number; color?: string }> = ({ x, y, r, at, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const Check: React.FC<{ x: number; y: number; at: number; color?: string; s?: number }> = ({ x, y, at, color = GREEN, s = 1 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - 40 * s} ${y} L${x - 10 * s} ${y + 30 * s} L${x + 45 * s} ${y - 35 * s}`} p={ramp(t, at, 0.5)} color={color} width={9} len={200 * s} />
    </Svg>
  );
};

/** Isometric block. */
const Block: React.FC<{ size: number; color: string; core?: number; dashed?: boolean }> = ({ size, color, core = 0, dashed }) => {
  const s = 60;
  return (
    <svg width={size} height={size} viewBox="-75 -80 150 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      <g stroke={color} strokeWidth={3} strokeLinejoin="round" strokeDasharray={dashed ? "8 7" : undefined}>
        <polygon points={`0,${-s} ${s},${-s / 2} 0,0 ${-s},${-s / 2}`} fill={color} fillOpacity={0.35} />
        <polygon points={`${-s},${-s / 2} 0,0 0,${s} ${-s},${s / 2}`} fill={color} fillOpacity={0.2} />
        <polygon points={`${s},${-s / 2} 0,0 0,${s} ${s},${s / 2}`} fill={color} fillOpacity={0.12} />
      </g>
      {core > 0 && <circle cx={0} cy={0} r={18 * core} fill="#FFF3C8" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />}
    </svg>
  );
};

// the coastline: midpoint displacement, fixed seed
const COAST: number[][] = (() => {
  let pts = [[180, 420], [1740, 420]];
  for (let lev = 0; lev < 7; lev++) {
    const out: number[][] = [];
    for (let i = 0; i < pts.length - 1; i++) {
      const [x1, y1] = pts[i], [x2, y2] = pts[i + 1];
      const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
      const k = (rand(lev * 977 + i * 13 + 5) - 0.5) * 0.55 * L;
      out.push([x1, y1], [(x1 + x2) / 2 - (dy / L) * k, (y1 + y2) / 2 + (dx / L) * k]);
    }
    out.push(pts[pts.length - 1]);
    pts = out;
  }
  return pts;
})();
const sample = (step: number) => COAST.filter((_, i) => i % step === 0 || i === COAST.length - 1);
const plen = (p: number[][]) => p.slice(1).reduce((s, q, i) => s + Math.hypot(q[0] - p[i][0], q[1] - p[i][1]), 0);
const pd = (p: number[][]) => p.map((q, i) => `${i ? "L" : "M"}${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join(" ");

const Person: React.FC<{ color: string; flip?: boolean }> = ({ color, flip }) => (
  <svg width={110} height={190} viewBox="0 0 110 190" style={{ filter: `drop-shadow(0 0 8px ${color})`, transform: flip ? "scaleX(-1)" : undefined }}>
    <g fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <circle cx={50} cy={28} r={20} /><line x1={50} y1={48} x2={50} y2={120} /><line x1={50} y1={120} x2={28} y2={180} />
      <line x1={50} y1={120} x2={72} y2={180} /><line x1={50} y1={70} x2={100} y2={92} /><line x1={50} y1={70} x2={20} y2={100} />
    </g>
  </svg>
);

// ---------------------------------------------------------------- 1-3. the coastline
const CoastScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("How long is the coast");
  const draw = ramp(t, t0, 2.2);
  const r1 = c("a hundred kilometres long"), r2 = c("a ruler of one kilometre"), r3 = c("a ruler of a metre");
  const rulers = [[sample(32), r1, GOLD], [sample(8), r2, ROSE], [sample(1), r3, TEAL]] as const;
  const fullL = plen(COAST);
  const partB = c("There is no length", 0.3);
  const part = (a: number, b: number) => between(t, a, b, 0.5);
  const sur = c("Two careful surveyors");
  const des = c("designated together with the scale");
  const land = `${pd(COAST)} L1740 720 L180 720 Z`;
  return (
    <AbsoluteFill>
      <Svg>
        <defs>
          <linearGradient id="sea15" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1d5f8a" stopOpacity={0.15} /><stop offset="1" stopColor="#2aa7c9" stopOpacity={0.4} /></linearGradient>
          <linearGradient id="land15" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#4f8a54" stopOpacity={0.55} /><stop offset="1" stopColor="#2b4a2e" stopOpacity={0.15} /></linearGradient>
        </defs>
        <rect x={180} y={140} width={1560} height={580} rx={20} fill="url(#sea15)" opacity={draw} />
        <path d={land} fill="url(#land15)" opacity={draw} />
        <DrawPath d={pd(COAST)} p={draw} color={CHALK} width={3} len={fullL + 50} />
        {rulers.map(([pts, at, col], i) => (
          <g key={i} opacity={part(at, i < 2 ? rulers[i + 1][1] : partB)}>
            <DrawPath d={pd(pts as number[][])} p={ramp(t, at + 0.3, 1.6)} color={col as string} width={6} len={plen(pts as number[][]) + 50} />
            {(pts as number[][]).length < 40 && (pts as number[][]).map((q, k) => <circle key={k} cx={q[0]} cy={q[1]} r={8} fill={col as string} opacity={ramp(t, at + 0.3 + k * 0.05, 0.3)} />)}
          </g>
        ))}
      </Svg>
      <At x={960} y={90} o={between(t, t0 + 0.3, r1, 0.5)}><Glow color={CHALK} size={50} serif>how long?</Glow></At>
      {rulers.map(([pts, at, col], i) => {
        const L = plen(pts as number[][]);
        const p = ramp(t, at + 0.3, 1.6) * (1 - ramp(t, partB, 0.5));
        return (
          <React.Fragment key={i}>
            <div style={{ position: "absolute", left: 360, top: 765 + i * 30, height: 18, width: (L / fullL) * 1200 * p, borderRadius: 9, background: col as string,
              boxShadow: `0 0 14px ${col}`, opacity: ramp(t, at, 0.3) }} />
            <At x={250} y={774 + i * 30} o={ramp(t, at, 0.3) * (1 - ramp(t, partB, 0.5))}><Glow color={col as string} size={24}>{["long ruler", "shorter", "tiny"][i]}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={90} o={between(t, c("longer still"), partB, 0.4)}><Glow color={TEAL} size={46} serif>longer, and longer still</Glow></At>
      {/* part B */}
      <At x={960} y={90} o={between(t, partB + 0.2, c("at any chosen scale"), 0.4)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={50} serif>length from its own side?</Glow><Strike at={partB + 1.2} /></div>
      </At>
      <At x={960} y={90} o={between(t, c("at any chosen scale"), des - 0.3, 0.4)}><Chip color={ROSE} size={36}>one chosen scale: exact, repeatable</Chip></At>
      <Svg style={{ opacity: ramp(t, c("at any chosen scale"), 0.5) * (1 - ramp(t, des - 0.3, 0.5)) }}>
        <DrawPath d={pd(sample(8))} p={ramp(t, c("at any chosen scale"), 1.2)} color={ROSE} width={6} len={plen(sample(8)) + 50} />
      </Svg>
      <At x={560} y={740} s={pop(t, fps, sur)} o={1 - ramp(t, des - 0.3, 0.5)}><Person color={GOLD} /></At>
      <At x={1360} y={740} s={pop(t, fps, sur + 0.2)} o={1 - ramp(t, des - 0.3, 0.5)}><Person color={ICE} flip /></At>
      <Flow x1={640} y1={720} x2={1280} y2={720} color={GREEN} p={ramp(t, c("will agree"), 0.6) * (1 - ramp(t, des - 0.3, 0.5))} />
      <Check x={960} y={660} at={c("will agree") + 0.4} />
      <At x={960} y={800} o={between(t, c("not arbitrary"), des - 0.3, 0.4)}><Glow color={GREEN} size={38}>not arbitrary</Glow></At>
      <Scene from={des - 0.2} to={1e9}>
        <AbsoluteFill style={{ background: "rgba(8,10,24,0.55)" }} />
        <At x={700} y={430} s={pop(t, fps, des)}><Chip color={TEAL} size={50}>length</Chip></At>
        <At x={1220} y={430} s={pop(t, fps, des)}><Chip color={ROSE} size={50}>scale</Chip></At>
        <Flow x1={830} y1={430} x2={1100} y2={430} color={GOLD} p={pop(t, fps, des)} width={5} />
        <Ring x={960} y={430} p={ramp(t, des + 0.3, 1.2)} r0={60} r1={420} color={GOLD} />
        <div style={{ position: "absolute", top: 560, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="designated together" at={des + 0.3} size={72} />
        </div>
        <At x={960} y={720} o={ramp(t, c("entirely reliable"), 0.5)}><Glow color={GREEN} size={42}>entirely reliable</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4-5. building blocks
const BlocksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("For centuries");
  const peel = ramp(t, c("peeling back appearances"), 2.0);
  const bl = c("the building blocks underneath");
  const partB = c("But an intrinsic nature", 0.3);
  const deps = [["parts", 500, 280, TEAL], ["causes", 1420, 280, ROSE], ["contexts", 500, 640, GREEN], ["framework", 1420, 640, ICE]] as const;
  const depAt = c("parts, causes, contexts");
  const ess = c("Adding an essence");
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>the old picture</Glow></At>
        {[0, 1, 2].map((k) => (
          <At key={k} x={960} y={330} s={pop(t, fps, t0 + 0.3)} o={1 - ramp(t, c("peeling back appearances") + k * 0.5, 0.6)}>
            <div style={{ width: 360 - k * 90, height: 360 - k * 90, borderRadius: "50%", border: `3px solid ${[VIOLET, ROSE, GOLD][k]}`,
              background: `${[VIOLET, ROSE, GOLD][k]}18`, boxShadow: `0 0 26px ${[VIOLET, ROSE, GOLD][k]}66` }} />
          </At>
        ))}
        <At x={960} y={330} o={ramp(t, c("peeling back appearances") + 1.2, 0.5)} s={0.6 + 0.4 * peel}><Orb size={70} color={GOLD} core={1} /></At>
        {Array.from({ length: 7 }).map((_, i) => {
          const x = 600 + i * 120, y = 640 + (i % 2) * 0;
          return <At key={i} x={x} y={y} s={pop(t, fps, bl + i * 0.08)}><Block size={130} color={GOLD} core={ramp(t, c("Tiny self-existing things"), 0.6)} /></At>;
        })}
        {Array.from({ length: 4 }).map((_, i) => (
          <At key={i} x={720 + i * 160} y={540} s={pop(t, fps, bl + 0.6 + i * 0.08)}><Block size={130} color={GOLD} core={ramp(t, c("Tiny self-existing things"), 0.6)} /></At>
        ))}
        <At x={960} y={810} o={ramp(t, bl, 0.5)}><Glow color={GOLD} size={38}>building blocks?</Glow></At>
        <At x={960} y={430 - 0 * peel} o={ramp(t, c("holding the world up"), 0.5)}>
          <svg width={500} height={120} viewBox="0 0 500 120"><path d="M30 100 L250 20 L470 100" fill="none" stroke={GOLD} strokeWidth={4} strokeDasharray="10 8" opacity={0.7} /></svg>
        </At>
      </Scene>
      <Scene from={partB + 0.2} to={1e9}>
        <At x={960} y={460} s={pop(t, fps, partB + 0.3)}><Block size={240} color={VIOLET} core={between(t, partB + 0.6, c("the very dependencies") + 1.0, 0.5)} /></At>
        <At x={960} y={160} o={between(t, partB + 0.4, c("Every property science finds"), 0.5)}><Glow color={GOLD} size={42} serif>an intrinsic nature?</Glow></At>
        <At x={960} y={160} o={between(t, c("Every property science finds"), ess - 0.3, 0.5)}><Glow color={CHALK} size={42} serif>found only in dependence</Glow></At>
        {deps.map(([lab, x, y, col], i) => {
          const at = i < 3 ? depAt + i * 0.5 : c("a framework of measurement");
          return (
            <React.Fragment key={i}>
              <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.25} y2={460 + (y - 460) * 0.25} color={col} p={ramp(t, at, 0.7)} />
              <At x={x} y={y} s={pop(t, fps, at)}><Chip color={col} size={36}>{lab}</Chip></At>
            </React.Fragment>
          );
        })}
        <At x={1180} y={420} s={pop(t, fps, ess)} o={1 - ramp(t, c("predicts nothing more") + 1.2, 0.6)}><Orb size={110} color={GOLD} core={1} /></At>
        <At x={1180} y={540} o={ramp(t, ess + 0.3, 0.4) * (1 - ramp(t, c("predicts nothing more") + 1.2, 0.6))}><Glow color={GOLD} size={32}>essence behind</Glow></At>
        <XMark x={1180} y={420} r={60} at={c("predicts nothing more") + 0.4} />
        <At x={960} y={800} o={ramp(t, c("predicts nothing more"), 0.5)}><Glow color={WARM} size={40}>predicts nothing more</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. causation
const CauseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Even causation looks different");
  const push = c("one solid body pushing");
  const hit = push + 1.0;
  const a = ramp(t, push, 1.0), b = ramp(t, hit, 1.2);
  const partB = c("Science today speaks", 0.3);
  const reg = c("regularities, laws and models");
  const cause = c("A cause is a cause");
  const prec = c("great precision");
  const pts = Array.from({ length: 14 }, (_, i) => {
    const x = 520 + i * 62, y = 640 - (i * 62) * 0.25 - 0.00035 * (i * 62) ** 2 + (rand(i) - 0.5) * 30;
    return [x, y];
  });
  const curve = Array.from({ length: 40 }, (_, i) => { const u = i * 22; return `${i ? "L" : "M"}${520 + u} ${640 - u * 0.25 - 0.00035 * u * u}`; }).join(" ");
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={960} y={160} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>the old picture of causation</Glow></At>
        <At x={560 + 300 * a} y={460} s={pop(t, fps, t0 + 0.4)}><Orb size={150} color={ROSE} /></At>
        <At x={1010 + 380 * b} y={460} s={pop(t, fps, t0 + 0.6)}><Orb size={150} color={TEAL} /></At>
        <Ring x={935} y={460} p={ramp(t, hit, 0.8)} r0={20} r1={160} color={GOLD} />
        <At x={960} y={680} o={ramp(t, push, 0.5)}><Glow color={DIM} size={36}>one solid body pushing another</Glow></At>
      </Scene>
      <Scene from={partB + 0.2} to={cause - 0.4}>
        <Svg>
          <DrawPath d="M500 700 L500 230 M500 700 L1420 700" p={ramp(t, partB + 0.3, 0.8)} color={DIM} width={3} len={1500} glow={false} />
          {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={9} fill={GOLD} opacity={ramp(t, partB + 0.6 + i * 0.08, 0.3)} style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }} />)}
          <DrawPath d={curve} p={ramp(t, reg, 1.4)} color={TEAL} width={5} len={1200} />
        </Svg>
        <At x={800} y={110} o={ramp(t, reg, 0.5)}><Glow color={TEAL} size={44} serif>regularities, laws, models</Glow></At>
        <At x={1500} y={330} o={ramp(t, reg + 0.8, 0.5)}><Chip color={GOLD} size={30}>predicted</Chip></At>
      </Scene>
      <Scene from={cause - 0.2} to={1e9}>
        <At x={660} y={420} s={pop(t, fps, cause)}><Chip color={ROSE} size={52}>cause</Chip></At>
        <At x={1260} y={420} s={pop(t, fps, c("relation to its effect"))}><Chip color={TEAL} size={52}>effect</Chip></At>
        <Flow x1={790} y1={400} x2={1130} y2={400} color={GOLD} p={ramp(t, c("relation to its effect"), 0.6)} />
        <Flow x1={1130} y1={440} x2={790} y2={440} color={GOLD} p={ramp(t, c("relation to its effect") + 0.2, 0.6)} />
        <At x={960} y={560} o={ramp(t, c("relation to its effect") + 0.5, 0.5)}><Glow color={GOLD} size={38}>identified together</Glow></At>
        <At x={960} y={420} s={pop(t, fps, prec)} o={ramp(t, prec, 0.3)}>
          <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN})` }}>
            <g fill="none" stroke={GREEN} strokeWidth={3}><circle r={90} /><circle r={45} /><line x1={-115} y1={0} x2={115} y2={0} /><line x1={0} y1={-115} x2={0} y2={115} /></g>
            <circle r={8} fill={GREEN} />
          </svg>
        </At>
        <At x={960} y={720} o={ramp(t, prec, 0.5)}><Glow color={GREEN} size={44}>conventional, and precise</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. system boundaries
const SystemScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Every science must also decide");
  const cell = c("The cell and its environment"), col = c("The colliding particles");
  const none = c("no lines drawn in advance");
  const draws = c("The scientist draws them");
  const holds = c("holds up or it does not");
  const pen = ramp(t, draws, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0 - 0.3, 0.4)}><Glow color={CHALK} size={50} serif>where does the system end?</Glow></At>
      <At x={560} y={440} s={pop(t, fps, Math.min(cell, t0 + 1.0))}>
        <svg width={360} height={360} viewBox="-180 -180 360 360" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GREEN})` }}>
          <ellipse rx={120} ry={100} fill={`${GREEN}22`} stroke={GREEN} strokeWidth={4} />
          <circle cx={-20} cy={-10} r={36} fill={`${VIOLET}55`} stroke={VIOLET} strokeWidth={3} />
          {Array.from({ length: 16 }).map((_, i) => {
            const a = rand(i) * 6.28, r = 140 + rand(i + 3) * 40;
            return <circle key={i} cx={r * Math.cos(a + t * 0.2)} cy={r * Math.sin(a + t * 0.2) * 0.85} r={5} fill={ICE} opacity={0.7} />;
          })}
        </svg>
      </At>
      <At x={560} y={680} o={ramp(t, cell + 0.4, 0.5)}><Glow color={GREEN} size={32}>cell and environment</Glow></At>
      <At x={1360} y={440} s={pop(t, fps, col)}>
        <svg width={380} height={380} viewBox="-190 -190 380 380" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE})` }}>
          {[160, 120, 80].map((r) => <circle key={r} r={r} fill="none" stroke={ICE} strokeWidth={3} opacity={0.6} />)}
          {Array.from({ length: 10 }).map((_, i) => {
            const a = rand(i + 20) * 6.28, p = ramp(t, col + 0.5 + i * 0.05, 0.6);
            return <path key={i} d={`M0 0 Q ${60 * Math.cos(a + 0.6)} ${60 * Math.sin(a + 0.6)} ${170 * p * Math.cos(a)} ${170 * p * Math.sin(a)}`} fill="none"
              stroke={[GOLD, ROSE, TEAL][i % 3]} strokeWidth={3} />;
          })}
          <circle r={10} fill="#fff" />
        </svg>
      </At>
      <At x={1360} y={680} o={ramp(t, col + 0.4, 0.5)}><Glow color={ICE} size={32}>particles and detector</Glow></At>
      <At x={960} y={780} o={between(t, none, draws, 0.4)}><Glow color={DIM} size={40}>no lines drawn in advance</Glow></At>
      <Svg>
        <circle cx={560} cy={440} r={180} fill="none" stroke={GOLD} strokeWidth={4} strokeDasharray="14 10"
          style={{ filter: `drop-shadow(0 0 8px ${GOLD})`, clipPath: `inset(0 ${(1 - Math.min(1, pen * 2)) * 100}% 0 0)` }} />
        <circle cx={1360} cy={440} r={200} fill="none" stroke={GOLD} strokeWidth={4} strokeDasharray="14 10"
          style={{ filter: `drop-shadow(0 0 8px ${GOLD})`, clipPath: `inset(0 ${(1 - Math.max(0, pen * 2 - 1)) * 100}% 0 0)` }} />
      </Svg>
      {pen > 0 && pen < 1 && <At x={pen < 0.5 ? 380 + pen * 2 * 360 : 1160 + (pen * 2 - 1) * 400} y={250} r={30}>
        <svg width={40} height={140} viewBox="0 0 40 140"><path d="M10 0 L30 0 L30 110 L20 135 L10 110 Z" fill={GOLD} stroke="#fff" strokeWidth={2} /></svg>
      </At>}
      <At x={960} y={780} o={ramp(t, draws + 0.3, 0.5) * (1 - ramp(t, holds, 0.4))}><Glow color={GOLD} size={40}>drawn for a purpose</Glow></At>
      <Check x={900} y={770} at={holds + 0.3} />
      <At x={1060} y={780} o={ramp(t, holds + 0.5, 0.5)}><Glow color={GREEN} size={40}>holds up?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. revision without relativism
const Bridge: React.FC = () => (
  <svg width={260} height={110} viewBox="0 0 260 110" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <path d="M10 40 L250 40 M30 100 Q130 0 230 100" fill="none" stroke={GOLD} strokeWidth={5} />
    {[70, 100, 130, 160, 190].map((x) => <line key={x} x1={x} y1={40} x2={x} y2={60} stroke={GOLD} strokeWidth={3} />)}
  </svg>
);

const ReviseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("So theories can be revised");
  const ein = c("When Einstein's theory");
  const big = pop(t, fps, ein + 0.3, 14);
  const partB = c("This is not relativism", 0.3);
  const fail = c("fail where it does not");
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={partB}>
        <At x={960} y={440} s={big}>
          <div style={{ width: 900, height: 620, borderRadius: "50%", border: `3px solid ${ICE}`, background: `${ICE}10`, boxShadow: `0 0 40px ${ICE}55` }} />
        </At>
        <At x={960} y={180} o={ramp(t, ein + 0.4, 0.5)}><Glow color={ICE} size={38}>Einstein</Glow></At>
        <At x={960} y={470} s={pop(t, fps, t0)}>
          <div style={{ width: 440, height: 300, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}1c`, boxShadow: `0 0 30px ${GOLD}66` }} />
        </At>
        <At x={960} y={360} o={ramp(t, t0 + 0.3, 0.5)}><Glow color={GOLD} size={38}>Newton</Glow></At>
        <Check x={1190} y={360} at={c("not thrown away") + 0.3} />
        <At x={960} y={560} o={ramp(t, c("approximations, valid within a domain") + 0.6, 0.5)}><Chip color={GOLD} size={28}>valid within a domain</Chip></At>
        <At x={960} y={460} s={pop(t, fps, c("Bridges are still designed"))}><Bridge /></At>
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * 6.28;
          return <At key={i} x={960 + 520 * Math.cos(a)} y={440 + 360 * Math.sin(a)} s={pop(t, fps, fail + 0.2 + i * 0.05)} o={(960 + 520 * Math.cos(a) > 300 && 440 + 360 * Math.sin(a) < 820) ? 1 : 0}>
            <Glow color={WARM} size={44}>×</Glow>
          </At>;
        })}
        <At x={1600} y={160} o={ramp(t, c("A good theory is a framework"), 0.5)}><Chip color={GREEN} size={30}>holds where it holds</Chip></At>
        <At x={1600} y={760} o={ramp(t, fail, 0.5)}><Chip color={WARM} size={30}>fails beyond</Chip></At>
      </Scene>
      <Scene from={partB + 0.2} to={1e9}>
        <At x={960} y={160} o={ramp(t, partB + 0.3, 0.5)}>
          <div style={{ position: "relative" }}><Glow color={CHALK} size={52} serif>relativism?</Glow><Strike at={partB + 1.2} /></div>
        </At>
        {[0, 1].map((k) => (
          <At key={k} x={k ? 1260 : 660} y={460} s={pop(t, fps, (k ? c("and some do not") : c("Some designations hold up")))}>
            <div style={{ width: 300, height: 220, borderRadius: 18, border: `3px solid ${k ? WARM : GREEN}`, background: `${k ? WARM : GREEN}1a`,
              boxShadow: `0 0 26px ${k ? WARM : GREEN}66`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width={200} height={120} viewBox="0 0 200 120"><path d="M10 100 Q 60 20 100 60 T 190 20" fill="none" stroke={CHALK} strokeWidth={4} /></svg>
            </div>
          </At>
        ))}
        <Check x={660} y={660} at={c("Some designations hold up") + 0.8} s={1.2} />
        <XMark x={1260} y={660} r={40} at={c("and some do not") + 0.5} />
        <At x={960} y={800} o={ramp(t, c("Some designations hold up") + 0.4, 0.5)}><Glow color={CHALK} size={36}>tested by further experience</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. particles and mass
const ParticleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Surely, someone says");
  const mass = c("Yet mass");
  const inter = c("a measure of interaction");
  const prot = c("Most of what we weigh");
  const bind = c("the energy binding its quarks");
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={prot - 0.4}>
        <At x={960} y={130} o={between(t, t0, mass, 0.5)}><Glow color={CHALK} size={46} serif>the bottom at last?</Glow></At>
        <At x={960} y={430} s={pop(t, fps, t0 + 0.4)}><Orb size={200} color={VIOLET} core={between(t, c("fixed, intrinsic properties"), inter + 0.5, 0.5)} /></At>
        <At x={960} y={640} o={between(t, c("fixed, intrinsic properties"), mass, 0.4)}><Glow color={GOLD} size={38}>fixed, intrinsic?</Glow></At>
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (i / 10) * 6.28 + t * 0.3;
          return <Flow key={i} x1={960 + 380 * Math.cos(a)} y1={430 + 300 * Math.sin(a)} x2={960 + 130 * Math.cos(a)} y2={430 + 110 * Math.sin(a)} color={TEAL} p={ramp(t, inter, 0.8)} width={2} />;
        })}
        <At x={960} y={130} o={ramp(t, mass, 0.5)}><Glow color={TEAL} size={46} serif>mass: a measure of interaction</Glow></At>
      </Scene>
      <Scene from={prot - 0.2} to={1e9}>
        <At x={760} y={420} s={pop(t, fps, prot)}>
          <div style={{ width: 380, height: 380, borderRadius: "50%", border: `3px solid ${ROSE}`, background: `radial-gradient(circle, ${GOLD}${bind < t ? "66" : "22"}, ${ROSE}22 70%)`,
            boxShadow: `0 0 ${30 + 40 * ramp(t, bind, 1)}px ${GOLD}` }} />
        </At>
        {[[700, 360], [830, 380], [760, 490]].map(([x, y], i) => (
          <At key={i} x={x + Math.sin(t * 3 + i) * 10} y={y + Math.cos(t * 2.5 + i) * 10} s={pop(t, fps, prot + 0.3 + i * 0.1)}><Orb size={36} color={[ROSE, TEAL, VIOLET][i]} /></At>
        ))}
        <Svg style={{ opacity: ramp(t, bind, 0.6) }}>
          {[[700, 360, 830, 380], [830, 380, 760, 490], [760, 490, 700, 360]].map(([x1, y1, x2, y2], i) => {
            const n = 12;
            const d = Array.from({ length: n + 1 }, (_, k) => {
              const u = k / n, px = x1 + (x2 - x1) * u, py = y1 + (y2 - y1) * u, L = Math.hypot(x2 - x1, y2 - y1);
              const off = Math.sin(u * Math.PI * 6 + t * 8) * 10;
              return `${k ? "L" : "M"}${px - ((y2 - y1) / L) * off} ${py + ((x2 - x1) / L) * off}`;
            }).join(" ");
            return <path key={i} d={d} fill="none" stroke={GOLD} strokeWidth={4} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />;
          })}
        </Svg>
        <At x={760} y={680} o={ramp(t, prot + 0.3, 0.5)}><Glow color={ROSE} size={36}>a proton</Glow></At>
        <At x={1420} y={300} o={ramp(t, prot + 0.4, 0.5)}><Glow color={CHALK} size={36}>what we weigh</Glow></At>
        <div style={{ position: "absolute", left: 1220, top: 360, width: 400, height: 60, borderRadius: 12, border: `2px solid ${CHALK}`, overflow: "hidden", display: "flex",
          opacity: ramp(t, prot + 0.5, 0.5) }}>
          <div style={{ width: 8, background: TEAL }} />
          <div style={{ flex: 1, background: `linear-gradient(90deg, ${GOLD}, #FFE9A8)`, transformOrigin: "left", transform: `scaleX(${ramp(t, bind, 1.2)})`, boxShadow: `0 0 20px ${GOLD}` }} />
        </div>
        <At x={1260} y={470} o={ramp(t, prot + 0.6, 0.5)}><Glow color={TEAL} size={28}>quarks</Glow></At>
        <At x={1460} y={520} o={ramp(t, bind + 0.4, 0.5)}><Glow color={GOLD} size={36}>binding energy</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. interaction is not the new ground
const GroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Physics does not prove");
  const net = c("Nor does interaction become");
  const netOut = ramp(t, c("Interaction too is designated"), 1.0);
  const des = c("Interaction too is designated");
  const wave = c("A hidden wave of possibilities");
  const partC = wave - 0.3;
  const old = c("the old substrate");
  const W = (x: number) => 470 + 50 * Math.sin(x / 70 - t * 2) * Math.exp(-(((x - 960) / 380) ** 2));
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={des - 0.3}>
        <At x={620} y={200} s={pop(t, fps, t0)}><Chip color={ICE} size={40}>physics</Chip></At>
        <At x={1300} y={200} s={pop(t, fps, t0 + 0.3)}><Chip color={GOLD} size={40}>the Middle Way</Chip></At>
        <Flow x1={760} y1={200} x2={1120} y2={200} color={DIM} p={ramp(t, t0 + 0.5, 0.6)} pulses={false} />
        <XMark x={940} y={200} r={30} at={c("does not rest on physics")} />
        {/* the net offered as a new ground, then removed */}
        <AbsoluteFill style={{ opacity: 1 - netOut, transform: `translateY(${netOut * 120}px)` }}>
          <Svg style={{ opacity: ramp(t, net, 0.6) }}>
            {Array.from({ length: 9 }).map((_, i) => <line key={`a${i}`} x1={400 + i * 140} y1={600} x2={300 + i * 165} y2={760} stroke={VIOLET} strokeWidth={2.5} />)}
            {[600, 680, 760].map((y, k) => <line key={y} x1={400 - k * 50} y1={y} x2={1520 + k * 50} y2={y} stroke={VIOLET} strokeWidth={2.5} />)}
          </Svg>
          <At x={1600} y={560} o={ramp(t, net + 0.4, 0.5)}><Glow color={VIOLET} size={36}>a new ground?</Glow></At>
        </AbsoluteFill>
        {[700, 960, 1220].map((x, i) => <At key={x} x={x} y={470} s={pop(t, fps, net + 0.2 + i * 0.1)}><Orb size={80} color={TEAL} /></At>)}
        <XMark x={960} y={680} r={70} at={net + 1.4} />
      </Scene>
      <Scene from={des - 0.1} to={partC}>
        <At x={960} y={440} s={pop(t, fps, des + 0.2, 13)}>
          <div style={{ width: 760, height: 320, borderRadius: 26, border: `3px dashed ${GOLD}`, boxShadow: `0 0 26px ${GOLD}44` }} />
        </At>
        <At x={720} y={440} s={pop(t, fps, c("together with what interacts"))}><Orb size={110} color={TEAL} /></At>
        <At x={1200} y={440} s={pop(t, fps, c("together with what interacts"))}><Orb size={110} color={TEAL} /></At>
        <Flow x1={790} y1={440} x2={1130} y2={440} color={GOLD} p={pop(t, fps, c("together with what interacts"))} width={5} />
        <At x={960} y={240} o={ramp(t, des + 0.2, 0.5)}><Glow color={GOLD} size={44} serif>designated together</Glow></At>
      </Scene>
      <Scene from={partC + 0.2} to={1e9}>
        <Svg style={{ opacity: ramp(t, wave, 0.6) * (1 - ramp(t, old + 1.2, 0.8)) }}>
          <path d={Array.from({ length: 80 }, (_, i) => { const x = 460 + i * 12.6; return `${i ? "L" : "M"}${x} ${W(x)}`; }).join(" ")} fill="none" stroke={VIOLET}
            strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }} />
        </Svg>
        <At x={960} y={250} o={ramp(t, wave + 0.3, 0.5) * (1 - ramp(t, old + 1.2, 0.8))}><Glow color={VIOLET} size={40}>a hidden wave behind?</Glow></At>
        <At x={1500} y={640} s={pop(t, fps, c("the clicks of a detector"))}>
          <div style={{ width: 160, height: 110, borderRadius: 14, border: `3px solid ${CHALK}`, background: "#ffffff10", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: GREEN, boxShadow: `0 0 18px ${GREEN}`, opacity: 0.4 + 0.6 * (Math.sin(t * 7) > 0.6 ? 1 : 0) }} />
          </div>
        </At>
        {[0, 1, 2].map((k) => <Ring key={k} x={1500} y={640} p={t < c("the clicks of a detector") ? 0 : ((t - c("the clicks of a detector") - k * 0.5) / 1.5) % 1} r0={60} r1={170} color={GREEN} width={2} />)}
        <XMark x={960} y={470} r={80} at={old + 0.3} />
        <At x={960} y={780} o={ramp(t, old, 0.5)}><Glow color={WARM} size={40}>the old substrate, refined</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. methods unchanged
const MethodsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("None of this asks science");
  const exp = c("Experiments run as before"), res = c("Results are trusted");
  const story = c("What changes is the story");
  const dig = c("not digging toward");
  const refine = c("refining designations");
  const sharp = ramp(t, refine + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={story - 0.3}>
        <At x={960} y={130} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>methods unchanged</Glow></At>
        <At x={760} y={460} s={pop(t, fps, exp)}>
          <svg width={240} height={300} viewBox="0 0 240 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${TEAL})` }}>
            <path d="M90 20 L150 20 M100 20 L100 120 L30 270 Q25 285 45 285 L195 285 Q215 285 210 270 L140 120 L140 20" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={5} strokeLinejoin="round" />
            <path d="M58 210 L182 210 L205 270 Q210 280 195 280 L45 280 Q30 280 35 270 Z" fill={`${TEAL}66`} />
            {Array.from({ length: 6 }).map((_, i) => { const u = ((t * 0.5 + rand(i)) % 1); return <circle key={i} cx={90 + rand(i + 2) * 60} cy={270 - u * 200} r={5 + rand(i) * 5} fill="none" stroke={ICE} strokeWidth={2} opacity={1 - u} />; })}
          </svg>
        </At>
        <At x={1180} y={460} s={pop(t, fps, res)}><Chip color={GREEN} size={36}>trusted as far as they hold</Chip></At>
        <Check x={1180} y={560} at={res + 0.6} />
      </Scene>
      <Scene from={story - 0.1} to={refine - 0.4}>
        <At x={960} y={130} o={ramp(t, story, 0.5)}><Glow color={GOLD} size={50} serif>only the story changes</Glow></At>
        <Svg style={{ opacity: ramp(t, dig - 0.2, 0.5) }}>
          <path d="M560 520 L1360 520" stroke={GREEN} strokeWidth={4} />
          <path d="M840 520 L880 760 L1040 760 L1080 520 Z" fill="#00000066" stroke="#7a5a35" strokeWidth={4} />
        </Svg>
        <At x={1150 + Math.sin(t * 4) * 8} y={430 + Math.abs(Math.sin(t * 4)) * 20} s={pop(t, fps, dig)} r={-30}>
          <svg width={80} height={260} viewBox="0 0 80 260" style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }}>
            <rect x={35} y={0} width={10} height={180} fill="#a07a4a" /><path d="M10 180 L70 180 L60 250 L40 258 L20 250 Z" fill="#b8b8c8" />
          </svg>
        </At>
        <At x={960} y={700} o={ramp(t, dig + 0.4, 0.5)}>
          <div style={{ position: "relative" }}><Glow color={WARM} size={38}>a bottom layer?</Glow><Strike at={dig + 1.3} /></div>
        </At>
      </Scene>
      <Scene from={refine - 0.2} to={1e9}>
        <At x={960} y={430} s={pop(t, fps, refine)} blur={(1 - sharp) * 14}>
          <svg width={700} height={360} viewBox="0 0 700 360" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${TEAL})` }}>
            <path d={pd(sample(4).map(([x, y]) => [(x - 180) * 700 / 1560, (y - 420) * 1.2 + 180]))} fill="none" stroke={TEAL} strokeWidth={4} />
          </svg>
        </At>
        <At x={960} y={430} o={ramp(t, refine, 0.5)}>
          <div style={{ width: 760, height: 420, border: `3px solid ${GOLD}`, borderRadius: 20, boxShadow: `0 0 30px ${GOLD}55` }} />
        </At>
        <div style={{ position: "absolute", top: 690, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="designations that hold up" at={refine + 0.2} size={68} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12-13. wonder, and the close
const Microscope: React.FC = () => (
  <svg width={220} height={300} viewBox="0 0 220 300" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
    <g fill={`${TEAL}22`} stroke={TEAL} strokeWidth={5} strokeLinejoin="round">
      <rect x={30} y={270} width={160} height={22} rx={6} /><path d="M150 270 L150 120 Q150 80 110 70" fill="none" />
      <rect x={70} y={20} width={44} height={150} rx={8} transform="rotate(-20 92 95)" /><rect x={50} y={200} width={110} height={14} rx={4} />
    </g>
  </svg>
);

const WonderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("And something is gained");
  const won = c("Wonder");
  const mach = c("not a machine of tiny parts");
  const viv = c("vivid, exact, endlessly detailed");
  const close = c("The physicist at the bench", 0.4);
  const zoom = ramp(t, viv, 3.5);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.2} to={close}>
        {Array.from({ length: 50 }).map((_, i) => {
          const s = 4 + rand(i) * 10;
          return <div key={i} style={{ position: "absolute", left: 200 + rand(i + 1) * 1520, top: 80 + rand(i + 2) * 700, width: s, height: s, borderRadius: "50%",
            background: [GOLD, ICE, ROSE, TEAL][i % 4], boxShadow: `0 0 ${s * 2}px ${[GOLD, ICE, ROSE, TEAL][i % 4]}`,
            opacity: ramp(t, won + rand(i + 3) * 1.5, 0.6) * (0.5 + 0.5 * Math.sin(t * 2 + i)) }} />;
        })}
        <div style={{ position: "absolute", top: 120, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="wonder" at={won} size={110} />
        </div>
        <At x={960} y={470} o={between(t, mach, viv, 0.4)}>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", gap: 30 }}>{[0, 1, 2].map((k) => <svg key={k} width={110} height={110} viewBox="-50 -50 100 100"><circle r={34} fill="none" stroke={DIM} strokeWidth={8} strokeDasharray="10 8" transform={`rotate(${t * 60 * (k % 2 ? -1 : 1)})`} /></svg>)}</div>
            <Strike at={mach + 1.0} />
          </div>
        </At>
        <At x={960} y={620} o={between(t, mach, viv, 0.4)}><Glow color={DIM} size={36}>a machine of tiny parts?</Glow></At>
        <At x={960} y={500} s={pop(t, fps, viv) * (1 + zoom * 0.25)} o={1 - ramp(t, close - 0.5, 0.5)}><Snowflake size={300} rot={t * 12} /></At>
        {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([dx, dy], i) => (
          <At key={i} x={960 + dx * 330} y={470 + dy * 210} s={pop(t, fps, viv + 0.8 + i * 0.2) * 0.9}><Snowflake size={110} rot={-t * 20 + i * 15} /></At>
        ))}
        <At x={960} y={800} o={ramp(t, c("nowhere found from its own side"), 0.5)}><Glow color={ICE} size={40}>nowhere found from its own side</Glow></At>
      </Scene>
      <Scene from={close + 0.2} to={1e9}>
        <At x={960} y={430} o={ramp(t, close + 1.5, 1.5)}>
          <div style={{ width: 1300, height: 500, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}33 0%, ${GOLD}10 45%, transparent 70%)` }} />
        </At>
        <At x={560} y={430} s={pop(t, fps, close + 0.4)}><Microscope /></At>
        <At x={560} y={650} o={ramp(t, close + 0.8, 0.5)}><Glow color={TEAL} size={34}>the physicist</Glow></At>
        <At x={1360} y={380} s={pop(t, fps, c("holding a cube of ice"))}><IceCube size={150} spin={(t - close) * 10} /></At>
        <At x={1360} y={530} s={pop(t, fps, c("holding a cube of ice") + 0.2)}><Hand size={150} /></At>
        <At x={1360} y={650} o={ramp(t, c("holding a cube of ice") + 0.5, 0.5)}><Glow color={ROSE} size={34}>the reader</Glow></At>
        <Flow x1={700} y1={430} x2={1220} y2={430} color={GOLD} p={ramp(t, c("the same way") - 0.5, 1.0)} />
        <div style={{ position: "absolute", top: 730, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="the same way" at={c("the same way")} size={72} />
        </div>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["coast", 0], ["blocks", c("For centuries", 0.6)], ["cause", c("Even causation looks different", 0.6)],
    ["system", c("Every science must also decide", 0.6)], ["revise", c("So theories can be revised", 0.6)], ["particle", c("Surely, someone says", 0.6)],
    ["ground", c("Physics does not prove", 0.6)], ["methods", c("None of this asks science", 0.6)], ["wonder", c("And something is gained", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null) => [c(a, 0.5), b ? c(b, 0.9) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("For centuries", 0.9)], <CoastScene />],
    [S("For centuries", "Even causation looks different"), <BlocksScene />],
    [S("Even causation looks different", "Every science must also decide"), <CauseScene />],
    [S("Every science must also decide", "So theories can be revised"), <SystemScene />],
    [S("So theories can be revised", "Surely, someone says"), <ReviseScene />],
    [S("Surely, someone says", "Physics does not prove"), <ParticleScene />],
    [S("Physics does not prove", "None of this asks science"), <GroundScene />],
    [S("None of this asks science", "And something is gained"), <MethodsScene />],
    [S("And something is gained", null), <WonderScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
