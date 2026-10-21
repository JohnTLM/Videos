// Anatta to Emptiness, Bonus: Beyond Cause and Effect. Explainer drawings timed to the narration.
// Arc: the misheard phrase (a sealed ground that makes everything, made by nothing) -> the fair question, and the
// answer no -> three quiet assumptions, each sought and not found (chariot, the power of a cause, the foundation)
// -> what analysis is for: it ends itself -> the fourth assumption, "why?", the last spell, which stops applying
// -> dividing and undivided seeing (the cup) -> the eight extremes fall away together -> spontaneous presence and
// dependent arising: two descriptions of one appearing -> Bahiya: in the seen, only the seen -> nothing to keep.
// Stance: awareness, presence, relation, emptiness and any "ground" are never drawn as a base layer; a ground
// is shown only in order to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words (Dzogchen, Madhyamaka, Nāgārjuna) inside.
export const PHRASES = [
  "Beyond cause and effect", "few phrases are so easily misheard", "It sounds like an exception", "A realm where causes stop working",
  "Or a ground that makes everything", "while nothing makes it",
  "A careful reader", "will ask a fair question", "Is this a hidden substance", "slipped back in through a side door",
  "The answer offered here is no", "is not an exception to dependent arising", "what dependent arising looks like",
  "the habit of fixing things has been seen through",
  "three quiet assumptions", "an essence of its own to appear", "a power of its own, carried into its effect", "a deeper foundation underneath",
  "looks for each one", "The chariot is not found in its wheels", "its axle or its pole",
  "The power of a cause, when sought", "named only in relation to the effect",
  "And the foundation, when sought", "becomes one more thing with parts", "and the parts are named too",
  "None of this says that chariots are unreal", "the essence the search assumed is not there",
  "Notice what analysis is for", "a mind that must keep dissecting forever", "It answers one habit",
  "When that habit has been seen through", "nothing left to search for", "The dissection ends itself",
  "But one assumption survives", "It no longer asks what produces things", "It asks why they appear at all", "still owed a final reason",
  "This is the last spell", "looking for permission to stop looking",
  "The question why has force", "seems to stand behind appearing", "When nothing is found there", "the question is not answered",
  "It stops applying", "In this book's reading", "no why and because",
  "Two ways of knowing are at work", "One divides", "A cup becomes a handle", "a rim and a body", "The other does not divide",
  "It meets what appears whole", "before the parts and names are added",
  "These are not two stages", "The dividing mind is the habit that analysis answers", "The undivided seeing is what remains",
  "the eight extremes fall away together", "Arising and ceasing", "Lasting and ending", "Coming and going", "Same and different",
  "a thing with an edge of its own", "Without it, nothing is lost", "Nothing ever had the whereabouts",
  "calls this appearing spontaneous presence", "It is not a new ingredient laid over emptiness",
  "describes it from the outside", "describes the same appearing from within", "Emptiness itself is empty", "it cannot become a ground",
  "The old teaching to", "In the seen, only the seen", "In the heard, only the heard", "No seer stands behind the seeing",
  "Colours are vivid", "Sounds are immediate", "Thoughts lose their heavy ownership",
  "This is not an attainment to keep", "the fixing has returned",
  "Seen is just seen", "Heard is just heard", "nothing needs to be put in its place",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  why: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
};

// ---------------------------------------------------------------- drawings
type CupPart = "handle" | "rim" | "body";
/** A cup in side view whose handle, rim and body can be pulled apart. */
const Cup: React.FC<{ apart?: number; color?: string; steam?: number }> = ({ apart = 0, color = GOLD, steam = 0 }) => {
  const { t } = useT();
  const off: Record<CupPart, [number, number]> = { handle: [130, 20], rim: [0, -110], body: [-60, 50] };
  const tr = (k: CupPart) => `translate(${off[k][0] * apart} ${off[k][1] * apart})`;
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={360} height={340} viewBox="0 0 360 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
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

type PartKey = "wheel" | "axle" | "car" | "pole";
type Parts = Partial<Record<PartKey, { dx?: number; dy?: number; r?: number; o?: number }>>;
/** A chariot in side view (wheel, axle, car, pole) whose parts can be moved away one by one. */
const Chariot: React.FC<{ parts?: Parts; color?: string; spin?: number }> = ({ parts = {}, color = GOLD, spin = 0 }) => {
  const g = (k: PartKey) => {
    const p = parts[k] || {};
    return { transform: `translate(${p.dx || 0} ${p.dy || 0}) rotate(${p.r || 0} 0 0)`, opacity: p.o ?? 1 };
  };
  const st = { stroke: color, strokeWidth: 5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width={560} height={320} viewBox="0 0 560 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      <g {...g("pole")}><path d="M300 170 Q400 160 500 128 M478 108 Q505 96 532 112" fill="none" {...st} /></g>
      <g {...g("car")}>
        <path d="M100 175 L110 80 Q190 60 290 92 L310 175 Z" fill={`${color}22`} {...st} />
        <path d="M120 120 L295 125" fill="none" {...st} strokeWidth={3} />
      </g>
      <g {...g("wheel")}>
        <g transform={`translate(205 220) rotate(${spin})`}>
          <circle r={88} fill={`${color}11`} {...st} />
          {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-84} transform={`rotate(${i * 45})`} {...st} strokeWidth={3} />)}
        </g>
      </g>
      <g {...g("axle")}><circle cx={205} cy={220} r={16} fill={color} stroke={color} strokeWidth={3} /><path d="M175 220 L235 220" {...st} strokeWidth={7} /></g>
    </svg>
  );
};

const Lens: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={color} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={color} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

const Eye: React.FC<{ color?: string; size?: number }> = ({ color = TEAL, size = 140 }) => (
  <svg width={size} height={size * 0.57} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);

/** A head in profile; drawn dashed, as the seer that is not found. */
const Head: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={220} height={250} viewBox="0 0 300 340" style={{ overflow: "visible" }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray="12 10" />
  </svg>
);

/** A heavy slab: a ground, drawn only so it can be taken away. */
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

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, o = 1, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4) * o}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

/** Two bars that grip something: the habit of fixing. gap = half the distance between them. */
const Clamp: React.FC<{ x: number; y: number; gap: number; o: number; h?: number }> = ({ x, y, gap, o, h = 260 }) => (
  <>
    {[-1, 1].map((s) => (
      <At key={s} x={x + s * gap} y={y} o={o}>
        <div style={{ width: 24, height: h, borderRadius: 8, background: `${WARM}66`, border: `3px solid ${WARM}`, boxShadow: `0 0 18px ${WARM}88` }} />
      </At>
    ))}
  </>
);

/** A big glowing question mark. */
const QMark: React.FC<{ size: number; color?: string }> = ({ size, color = GOLD }) => (
  <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: size, lineHeight: 1, color: "#FFF3D1",
    textShadow: `0 0 24px ${color}, 0 0 60px ${color}aa, 0 0 110px ${VIOLET}88` }}>?</div>
);

const Trophy: React.FC = () => (
  <svg width={200} height={220} viewBox="0 0 200 220" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <path d="M50 20 L150 20 L140 90 Q100 130 60 90 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} />
    <path d="M50 35 Q15 40 30 70 Q40 85 58 82 M150 35 Q185 40 170 70 Q160 85 142 82" fill="none" stroke={GOLD} strokeWidth={5} />
    <path d="M100 120 L100 170 M60 190 L140 190" stroke={GOLD} strokeWidth={6} strokeLinecap="round" />
  </svg>
);

/** A thought cloud. */
const Cloud: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={240} height={150} viewBox="0 0 240 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <path d="M60 120 Q20 120 22 90 Q20 60 55 58 Q60 22 105 26 Q130 4 160 26 Q205 22 205 60 Q232 70 222 98 Q215 122 180 120 Z"
      fill={`${color}2a`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

/** Concentric sound rings, phase 0..∞. */
const Sound: React.FC<{ x: number; y: number; phase: number; o?: number; r1?: number }> = ({ x, y, phase, o = 1, r1 = 220 }) => (
  <div style={{ position: "absolute", inset: 0, opacity: o }}>
    {[0, 1, 2, 3].map((k) => <Ring key={k} x={x} y={y} p={(phase + k / 4) % 1} r0={30} r1={r1} color={[TEAL, VIOLET, ICE, ROSE][k]} width={4} />)}
    <At x={x} y={y}><Orb size={46} color={TEAL} /></At>
  </div>
);

/** Vivid colour patches (the seen), vivid 0..1 makes them larger and brighter. */
const Colours: React.FC<{ x: number; y: number; vivid: number; o?: number }> = ({ x, y, vivid, o = 1 }) => {
  const { t } = useT();
  const cols = [GOLD, ROSE, TEAL, VIOLET, WARM];
  const pos: [number, number, number][] = [[-110, -60, 120], [80, -80, 100], [-40, 70, 140], [120, 60, 110], [0, -10, 90]];
  return (
    <div style={{ position: "absolute", inset: 0, opacity: o }}>
      {pos.map(([dx, dy, s], i) => {
        const size = s * (0.85 + 0.35 * vivid) * (1 + 0.04 * Math.sin(t * 1.3 + i));
        return <At key={i} x={x + dx} y={y + dy}><div style={{ width: size, height: size, borderRadius: "50%",
          background: `radial-gradient(circle at 40% 35%, #ffffffaa, ${cols[i]} 40%, ${cols[i]}00 72%)`,
          filter: `saturate(${0.7 + 0.8 * vivid})`, opacity: 0.7 + 0.3 * vivid }} /></At>;
      })}
    </div>
  );
};

/** Boxes that keep splitting: dissecting forever. */
const Regress: React.FC<{ at: number; levels: number; top: number; left: number; width: number }> = ({ at, levels, top, left, width }) => {
  const { t } = useT();
  const rows: React.ReactNode[] = [];
  for (let L = 0; L < levels; L++) {
    const n = 2 ** L, w = width / n;
    const p = ramp(t, at + L * 0.8, 0.6);
    const col = [GOLD, TEAL, VIOLET, ICE, ROSE][L % 5];
    for (let i = 0; i < n; i++) {
      rows.push(<div key={`${L}-${i}`} style={{ position: "absolute", left: left + i * w + 4, top: top + L * 84, width: w - 8, height: 62,
        borderRadius: 8, border: `3px solid ${col}`, background: `${col}22`, opacity: p, transform: `scaleX(${0.6 + 0.4 * p})` }} />);
    }
  }
  return <>{rows}</>;
};

// a small dependent web: fixed nodes and their near links
const NODES = [[600, 420], [780, 360], [960, 430], [1140, 360], [1320, 420], [680, 580], [870, 560], [1060, 580], [1250, 570], [960, 650]];
const LINKS = NODES.flatMap((a, i) => NODES.map((b, j) => [i, j, Math.hypot(a[0] - b[0], a[1] - b[1])] as const))
  .filter(([i, j, d]) => i < j && d < 220);

// ---------------------------------------------------------------- scenes
const MisheardScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mis = c("few phrases are so easily misheard"), ex = c("It sounds like an exception"), stop = c("A realm where causes stop working");
  const gr = c("Or a ground that makes everything"), nm = c("while nothing makes it");
  const chainO = 1 - ramp(t, gr - 0.3, 0.6);
  const frozen = ramp(t, stop, 0.8);
  const xs = [380, 670, 960, 1250, 1540];
  const cols = [TEAL, VIOLET, GOLD, ROSE, ICE];
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="beyond cause and effect" at={c("Beyond cause and effect")} size={80} />
      </div>
      {/* an ordinary chain of causes, then an "exception" zone where causes seem to stop */}
      <AbsoluteFill style={{ opacity: chainO }}>
        <At x={960} y={230} o={ramp(t, mis, 0.5)}><Glow color={DIM} size={32}>a phrase easily misheard</Glow></At>
        {xs.slice(0, -1).map((x, i) => {
          const mid = i === 1 || i === 2;
          return <Flow key={i} x1={x + 40} y1={470} x2={xs[i + 1] - 40} y2={470} color={mid && frozen > 0.5 ? DIM : GOLD}
            p={ramp(t, mis + 0.4 + i * 0.25, 0.5)} pulses={!(mid && frozen > 0.5)} dash={mid && frozen > 0.5} />;
        })}
        {xs.map((x, i) => (
          <At key={i} x={x} y={470} s={pop(t, fps, mis + 0.2 + i * 0.25)} o={i === 2 ? 1 - 0.65 * frozen : 1}><Orb size={64} color={cols[i]} /></At>
        ))}
        <At x={960} y={470} o={ramp(t, ex, 0.5)}>
          <div style={{ width: 760, height: 200, borderRadius: 24, border: `4px dashed ${WARM}`, background: `${WARM}14` }} />
        </At>
        <At x={960} y={640} s={pop(t, fps, ex + 0.2)}><Chip color={WARM} size={34}>an exception?</Chip></At>
        <At x={960} y={740} o={ramp(t, stop, 0.5)}><Glow color={DIM} size={32}>causes stop working here?</Glow></At>
      </AbsoluteFill>
      {/* the sealed ground that makes everything, made by nothing */}
      <Scene from={gr - 0.2} to={1e9}>
        <At x={960} y={640}><Slab w={760} p={ramp(t, gr, 0.7)} label="a sealed ground" /></At>
        {Array.from({ length: 10 }).map((_, i) => {
          const life = ((t - gr) * 0.32 + i / 10) % 1;
          return <At key={i} x={650 + rand(i) * 620} y={590 - life * 330} o={Math.sin(life * Math.PI) * ramp(t, gr + 0.6, 0.6)}>
            <Orb size={22 + rand(i + 3) * 26} color={cols[i % 5]} /></At>;
        })}
        <Flow x1={170} y1={640} x2={520} y2={640} color={WARM} p={ramp(t, nm, 0.6)} dash pulses={false} />
        <Flow x1={1750} y1={640} x2={1400} y2={640} color={WARM} p={ramp(t, nm + 0.2, 0.6)} dash pulses={false} />
        <Crossed x={545} y={640} at={nm + 0.6} size={22} />
        <Crossed x={1375} y={640} at={nm + 0.8} size={22} />
        <At x={960} y={790} o={ramp(t, nm, 0.5)}><Glow color={GOLD} size={36} serif>makes everything · made by nothing</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const SuspectScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rd = c("A careful reader"), q = c("will ask a fair question"), hs = c("Is this a hidden substance"), door = c("slipped back in through a side door");
  const u = ramp(t, q, 2.2);
  const lensX = 960 + 300 * Math.cos(u * Math.PI * 2), lensY = 470 + 90 * Math.sin(u * Math.PI * 2);
  const slide = ramp(t, door + 0.4, 2.2);
  return (
    <AbsoluteFill>
      <Title at={rd}>a careful reader asks</Title>
      <At x={960} y={620} s={pop(t, fps, rd + 0.3)}><Slab w={700} p={1} label="the ground" /></At>
      {/* something dark glowing inside it */}
      <At x={960} y={500} s={pop(t, fps, hs)}>
        <svg width={120} height={120} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 18px ${WARM})` }}>
          <path d="M0 -50 L42 0 L0 50 L-42 0 Z" fill="#2a1410" stroke={WARM} strokeWidth={5} />
          <path d="M0 -50 L0 50 M-42 0 L42 0" stroke={`${WARM}88`} strokeWidth={2} />
        </svg>
      </At>
      <At x={960} y={300} o={ramp(t, hs, 0.5)}><Chip color={WARM} size={36}>a hidden substance?</Chip></At>
      <At x={lensX} y={lensY} o={between(t, q, hs + 0.4)}><Lens /></At>
      {/* a side door, and a block sliding in through it */}
      <Svg style={{ opacity: ramp(t, door, 0.5) }}>
        <rect x={1480} y={420} width={170} height={270} rx={6} fill="#0d0b1c" stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
        <path d="M1480 420 L1420 448 L1420 718 L1480 690 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
      </Svg>
      <At x={1760 - 520 * slide} y={600} o={ramp(t, door + 0.3, 0.4) * (1 - ramp(t, door + 2.4, 0.4))}>
        <div style={{ width: 90, height: 90, borderRadius: 14, background: "#2a1410", border: `4px solid ${WARM}`, boxShadow: `0 0 22px ${WARM}` }} />
      </At>
      <At x={1565} y={770} o={ramp(t, door + 0.2, 0.5)}><Glow color={DIM} size={32}>back in through a side door?</Glow></At>
    </AbsoluteFill>
  );
};

const AnswerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("The answer offered here is no"), exc = c("is not an exception to dependent arising"), look = c("what dependent arising looks like");
  const fix = c("the habit of fixing things has been seen through");
  const gone = ramp(t, no + 1.4, 0.8);
  const freed = ramp(t, fix + 0.6, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={120} s={pop(t, fps, no)}><Glow color={CHALK} size={52} serif>the answer: no</Glow></At>
      <At x={960} y={330} o={1 - gone}><Slab w={600} p={ramp(t, no - 0.3, 0.5)} label="a hidden ground" /></At>
      <AbsoluteFill style={{ opacity: 1 - gone }}><Crossed x={960} y={330} at={no + 0.6} size={60} /></AbsoluteFill>
      {/* not an exception: one more knot in the web of dependence */}
      <At x={960} y={250} o={ramp(t, exc + 0.4, 0.5)}><Chip color={TEAL} size={34}>dependent arising</Chip></At>
      <Svg>
        {LINKS.map(([i, j], k) => (
          <DrawPath key={k} d={`M${NODES[i][0]} ${NODES[i][1]} L${NODES[j][0]} ${NODES[j][1]}`} p={ramp(t, exc + 0.3 + k * 0.06, 0.5)}
            color={[TEAL, GOLD, VIOLET][k % 3]} width={3 + 2 * ramp(t, look, 0.8)} len={260} />
        ))}
      </Svg>
      {NODES.map(([x, y], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, exc + i * 0.08)}><Orb size={i === 2 ? 58 : 40} color={[GOLD, TEAL, ROSE, VIOLET, ICE][i % 5]} /></At>
          <At x={x} y={y} s={1 + 1.4 * freed} o={ramp(t, exc + 1.0, 0.5) * (1 - freed)}>
            <div style={{ width: 70, height: 70, border: `3px solid ${WARM}`, borderRadius: 6, boxShadow: `0 0 12px ${WARM}` }} />
          </At>
        </React.Fragment>
      ))}
      <Struck x={1620} y={420} at={exc + 0.2} strikeAt={exc + 1.4} color={WARM} size={30}>an exception</Struck>
      <At x={960} y={740} o={ramp(t, look, 0.5)}><Chip color={GOLD} size={30}>what dependent arising looks like</Chip></At>
      <At x={960} y={810} o={ramp(t, fix, 0.5)}><Glow color={GOLD} size={34} serif>once the habit of fixing is seen through</Glow></At>
    </AbsoluteFill>
  );
};

const AssumptionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const es = c("an essence of its own to appear"), pw = c("a power of its own, carried into its effect"), fd = c("a deeper foundation underneath");
  const packet = (t * 0.6) % 1;
  return (
    <AbsoluteFill>
      <Title at={c("three quiet assumptions")}>three quiet assumptions</Title>
      {[[420, es], [960, pw], [1500, fd]].map(([x, at], i) => (
        <At key={i} x={x} y={250} o={ramp(t, at - 0.2, 0.4)}><Glow color={DIM} size={44} serif>{`${i + 1}`}</Glow></At>
      ))}
      {/* 1: an essence of its own, a hard core inside the thing */}
      <At x={420} y={470} s={pop(t, fps, es)}>
        <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ overflow: "visible" }}>
          <circle r={110} fill={`${TEAL}14`} stroke={TEAL} strokeWidth={5} />
          <path d="M0 -46 L38 0 L0 46 L-38 0 Z" fill={GOLD} stroke="#FFF3D1" strokeWidth={3} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
        </svg>
      </At>
      <At x={420} y={680} o={ramp(t, es + 0.3, 0.5)}><Chip color={TEAL} size={30}>an essence of its own</Chip></At>
      {/* 2: a power carried from cause into effect */}
      <At x={960} y={470} s={pop(t, fps, pw)}>
        <svg width={380} height={200} viewBox="0 0 380 200" style={{ overflow: "visible" }}>
          <line x1={110} y1={100} x2={270} y2={100} stroke={GOLD} strokeWidth={4} strokeOpacity={0.6} />
          <circle cx={60} cy={100} r={48} fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={5} />
          <circle cx={320} cy={100} r={48} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={5} />
          <circle cx={110 + packet * 160} cy={100} r={15} fill={GOLD} opacity={Math.sin(packet * Math.PI)} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
        </svg>
      </At>
      <At x={960} y={680} o={ramp(t, pw + 0.3, 0.5)}><Chip color={VIOLET} size={30}>a power carried into the effect</Chip></At>
      {/* 3: a foundation underneath the meeting of conditions */}
      <At x={1500} y={470} s={pop(t, fps, fd)}>
        <div style={{ width: 320 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 26, marginBottom: 14 }}>
            {[TEAL, GOLD, ROSE].map((col, i) => <Orb key={i} size={54} color={col} />)}
          </div>
          <Slab w={320} p={1} label="foundation" />
        </div>
      </At>
      <At x={1500} y={680} o={ramp(t, fd + 0.3, 0.5)}><Chip color={WARM} size={30}>a foundation underneath</Chip></At>
    </AbsoluteFill>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("looks for each one"), wh = c("The chariot is not found in its wheels"), ap = c("its axle or its pole");
  const away = (at: number, dx: number, dy: number, r = 0) => {
    const p = ramp(t, at, 0.9);
    return { dx: dx * p, dy: dy * p, r: r * p, o: 1 - 0.45 * p };
  };
  const lu = ramp(t, wh, 2.8);
  return (
    <AbsoluteFill>
      <Title at={look}>Nāgārjuna looks for each one</Title>
      <At x={940} y={450} s={pop(t, fps, look + 0.2)}>
        <Chariot parts={{ wheel: away(wh + 0.3, -330, 60, -40), axle: away(ap, -40, 230), pole: away(ap + 0.5, 240, -170, -10) }} />
      </At>
      {([["wheels", wh + 0.8, 470, 770], ["axle", ap + 0.5, 1030, 770], ["pole", ap + 0.7, 1520, 260]] as [string, number, number, number][]).map(([w, at, x, y], i) => (
        <At key={i} x={x} y={y} o={ramp(t, at, 0.4)}><Chip color={[TEAL, VIOLET, ROSE][i]} size={30}>{`${w}: no chariot`}</Chip></At>
      ))}
      <At x={760 + 260 * Math.cos(lu * Math.PI * 2)} y={470 + 120 * Math.sin(lu * Math.PI * 2)} o={between(t, wh, ap + 1.2)}><Lens /></At>
      <At x={1520} y={520} o={ramp(t, ap + 1.0, 0.5)}><Glow color={ICE} size={46} serif>chariot? not found</Glow></At>
    </AbsoluteFill>
  );
};

const PowerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sought = c("The power of a cause, when sought"), rel = c("named only in relation to the effect");
  const u = ramp(t, sought + 0.4, 2.2);
  const dip = 1 - 0.75 * between(t, rel + 2.0, rel + 3.6, 0.5);
  return (
    <AbsoluteFill>
      <Title at={sought}>the power of a cause, sought</Title>
      <At x={620} y={450} s={pop(t, fps, sought)}><Orb size={130} color={VIOLET} /></At>
      <At x={1300} y={450} s={pop(t, fps, sought + 0.2)} o={dip}><Orb size={130} color={ROSE} /></At>
      <Flow x1={700} y1={450} x2={1220} y2={450} color={GOLD} p={ramp(t, sought + 0.4, 0.6) * dip} />
      <At x={620 + 120 * Math.cos(u * Math.PI * 2)} y={460 + 70 * Math.sin(u * Math.PI * 2)} o={between(t, sought + 0.4, sought + 2.8)}><Lens /></At>
      <At x={620} y={610} o={ramp(t, sought + 2.4, 0.5)}><Glow color={DIM} size={30}>no power found inside</Glow></At>
      {/* the names come as a pair */}
      <At x={620} y={320} o={ramp(t, rel, 0.5) * dip}><Glow color={VIOLET} size={40} serif>“cause”</Glow></At>
      <At x={1300} y={320} o={ramp(t, rel + 0.3, 0.5) * dip}><Glow color={ROSE} size={40} serif>“effect”</Glow></At>
      <Svg><DrawPath d="M700 300 Q960 190 1220 300" p={ramp(t, rel + 0.6, 0.8) * dip} color={GOLD} width={4} len={700} /></Svg>
      <At x={960} y={770} o={ramp(t, rel + 0.4, 0.5)}><Chip color={GOLD} size={32}>named only in relation to its effect</Chip></At>
    </AbsoluteFill>
  );
};

const FoundationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sought = c("And the foundation, when sought"), parts = c("becomes one more thing with parts"), named = c("and the parts are named too");
  const split = ramp(t, parts, 1.0);
  const u = ramp(t, sought + 0.3, 1.8);
  return (
    <AbsoluteFill>
      <Title at={sought}>the foundation, sought</Title>
      {[TEAL, GOLD, ROSE].map((col, i) => (
        <At key={i} x={800 + i * 160} y={390 + 8 * Math.sin(t * 1.4 + i)} s={pop(t, fps, sought + i * 0.1)}><Orb size={60} color={col} /></At>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={705 + i * 170 + (i - 1.5) * 70 * split} y={520 + 30 * split * (i % 2 ? 1 : -1)} r={split * (i - 1.5) * 6} s={pop(t, fps, sought + 0.2)}>
          <div style={{ width: 170, height: 66, borderRadius: 6, background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`,
            border: `3px ${ramp(t, named + 0.8, 0.3) > 0.5 ? "dashed" : "solid"} ${WARM}`, boxShadow: `0 0 20px ${WARM}55`,
            opacity: 1 - 0.45 * ramp(t, named + 0.8, 1.0) }} />
        </At>
      ))}
      <At x={960} y={520} o={ramp(t, sought + 0.4, 0.5) * (1 - split)}><Glow color={CHALK} size={32} serif>foundation</Glow></At>
      <At x={760 + 220 * Math.cos(u * Math.PI * 2)} y={500 + 60 * Math.sin(u * Math.PI * 2)} o={between(t, sought + 0.3, parts + 0.3)}><Lens /></At>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={705 + i * 170 + (i - 1.5) * 70} y={650} s={pop(t, fps, named + i * 0.2)}>
          <Chip color={[TEAL, VIOLET, GOLD, ROSE][i]} size={26}>“part”</Chip>
        </At>
      ))}
      <At x={960} y={790} o={ramp(t, parts + 0.4, 0.5)}><Glow color={GOLD} size={34} serif>one more thing with parts, and the parts are named too</Glow></At>
    </AbsoluteFill>
  );
};

const UnrealScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const un = c("None of this says that chariots are unreal"), es = c("the essence the search assumed is not there");
  const x = 520 + Math.min(340, Math.max(0, t - un) * 45);
  return (
    <AbsoluteFill>
      <Struck x={960} y={140} at={un} strikeAt={un + 1.4} color={DIM} size={36}>chariots are unreal</Struck>
      <Svg style={{ opacity: ramp(t, un, 0.6) }}><line x1={240} y1={604} x2={1240} y2={604} stroke={DIM} strokeWidth={3} opacity={0.6} /></Svg>
      <At x={x} y={450} s={pop(t, fps, un + 0.2)}><Chariot spin={(x - 520) * 0.65} /></At>
      <At x={760} y={710} o={ramp(t, un + 1.8, 0.5)}><Glow color={GREEN} size={36}>it still rolls</Glow></At>
      <Struck x={1500} y={420} at={es} strikeAt={es + 1.2} color={WARM} size={34}>an essence of its own</Struck>
      <At x={1500} y={510} o={ramp(t, es + 1.4, 0.5)}><Glow color={DIM} size={30}>not there</Glow></At>
    </AbsoluteFill>
  );
};

const AnalysisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nt = c("Notice what analysis is for"), keep = c("a mind that must keep dissecting forever"), habit = c("It answers one habit");
  const seen = c("When that habit has been seen through"), left = c("nothing left to search for"), ends = c("The dissection ends itself");
  const first = 1 - ramp(t, habit - 0.3, 0.5);
  const grip = ramp(t, habit, 0.6), open = ramp(t, seen + 0.3, 1.4);
  const gap = 300 - 180 * grip + 280 * open;
  const lensX = t < habit ? 620 + 680 * (0.5 + 0.5 * Math.sin((t - nt) * 1.2)) : 1240 - 280 * ramp(t, left, 1.2) * Math.sin((t - left) * 2.2);
  const lensY = t < habit ? 330 : 380 + 60 * ramp(t, ends, 1.2);
  return (
    <AbsoluteFill>
      <Title at={nt}>what analysis is for</Title>
      <At x={lensX} y={lensY} s={pop(t, fps, nt + 0.3)} o={1 - ramp(t, ends + 0.2, 1.0)}><Lens /></At>
      <AbsoluteFill style={{ opacity: first }}>
        <Regress at={keep} levels={3} top={260} left={510} width={900} />
        <Struck x={960} y={600} at={keep + 0.4} strikeAt={keep + 2.0} color={DIM} size={34}>dissecting forever</Struck>
      </AbsoluteFill>
      {/* it answers one habit: the grip of fixing */}
      <At x={960} y={470} s={pop(t, fps, habit)}><Orb size={96} color={GOLD} core={1} /></At>
      <Clamp x={960} y={470} gap={gap} o={ramp(t, habit, 0.4) * (1 - open)} />
      <At x={960} y={660} o={ramp(t, habit + 0.3, 0.5) * (1 - ramp(t, seen + 0.8, 0.6))}><Chip color={WARM} size={32}>the habit of fixing</Chip></At>
      <Ring x={960} y={470} p={ramp(t, seen + 0.5, 2.0)} r0={70} r1={360} color={GOLD} />
      <At x={960} y={760} o={between(t, left, ends - 0.2)}><Glow color={DIM} size={32}>nothing left to search for</Glow></At>
      <At x={960} y={790} o={ramp(t, ends, 0.5)}><Glow color={GOLD} size={40} serif>the dissection ends itself</Glow></At>
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sv = c("But one assumption survives"), np = c("It no longer asks what produces things"), why = c("It asks why they appear at all");
  const owed = c("still owed a final reason");
  const conv = ramp(t, owed - 0.6, 1.6);
  return (
    <AbsoluteFill>
      {["an essence", "a power", "a foundation"].map((w, i) => (
        <Struck key={i} x={560 + i * 400} y={140} at={sv - 0.3 + i * 0.15} strikeAt={sv + 0.2 + i * 0.25} color={DIM} size={30}>{w}</Struck>
      ))}
      <At x={960} y={240} s={pop(t, fps, sv + 1.0)}><Chip color={GOLD} size={38}>4 · why?</Chip></At>
      <Struck x={560} y={370} at={np} strikeAt={np + 1.4} color={VIOLET} size={32}>what produces things?</Struck>
      <At x={1320} y={470} s={pop(t, fps, why, 9)}><QMark size={260} /></At>
      <At x={1320} y={660} o={ramp(t, why + 0.3, 0.5)}><Glow color={CHALK} size={34}>why do they appear at all?</Glow></At>
      {/* conditions coming together, as if they still owed a reason */}
      {[TEAL, ROSE, VIOLET, ICE, GOLD].map((col, i) => {
        const a = (i / 5) * Math.PI * 2 + 0.4;
        const r = 130 - 80 * conv;
        return <At key={i} x={560 + r * Math.cos(a)} y={590 + r * 0.8 * Math.sin(a)} s={pop(t, fps, np + 1.4 + i * 0.1)}><Orb size={40} color={col} /></At>;
      })}
      <Flow x1={660} y1={580} x2={1180} y2={500} color={GOLD} p={ramp(t, owed, 0.8)} dash pulses={false} />
      <At x={960} y={800} o={ramp(t, owed, 0.5)}><Glow color={DIM} size={34}>as if a final reason were still owed</Glow></At>
    </AbsoluteFill>
  );
};

const SpellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("This is the last spell"), perm = c("looking for permission to stop looking"), force = c("The question why has force");
  const bh = c("seems to stand behind appearing"), nf = c("When nothing is found there"), na = c("the question is not answered");
  const st = c("It stops applying"), bk = c("In this book's reading"), nw = c("no why and because");
  const fade = ramp(t, st, 1.4);
  const block = ramp(t, bh, 0.6) * (1 - ramp(t, nf + 0.9, 0.8));
  return (
    <AbsoluteFill>
      <Title at={sp} o={1 - ramp(t, bk - 0.4, 0.4)}>the last spell</Title>
      {/* something seeming to stand behind appearing */}
      <At x={960} y={450} o={block}>
        <div style={{ width: 360, height: 420, borderRadius: 18, background: "linear-gradient(180deg, #2a1410ee, #12080ccc)",
          border: `4px solid ${WARM}`, boxShadow: `0 0 40px ${WARM}88` }} />
      </At>
      <At x={960} y={450} s={(0.9 + 0.1 * ramp(t, force, 0.6) + 0.3 * fade) * pop(t, fps, sp, 10)} o={1 - fade} blur={fade * 14}><QMark size={300} /></At>
      {Array.from({ length: 14 }).map((_, i) => {
        const a = (i / 14) * Math.PI * 2 + t * 0.5;
        const r = 240 + 300 * fade;
        return <At key={i} x={960 + r * Math.cos(a)} y={450 + r * 0.55 * Math.sin(a)} o={ramp(t, sp + i * 0.05, 0.4) * (1 - fade)}>
          <Orb size={14 + (i % 3) * 8} color={[GOLD, VIOLET, ICE][i % 3]} /></At>;
      })}
      <At x={960} y={790} o={between(t, perm, force - 0.2)}><Glow color={DIM} size={34}>permission to stop looking</Glow></At>
      <At x={960} y={770} o={block}><Chip color={WARM} size={32}>something behind appearing?</Chip></At>
      <At x={700 + 520 * ramp(t, nf, 1.4)} y={450} o={between(t, nf - 0.1, nf + 1.6, 0.3)}><Lens /></At>
      <Struck x={1560} y={450} at={na} strikeAt={na + 0.9} color={DIM} size={32} o={1 - ramp(t, nw, 0.5)}>an answer</Struck>
      <At x={1560} y={530} o={ramp(t, na + 1.1, 0.5) * (1 - ramp(t, nw, 0.5))}><Glow color={DIM} size={28}>none comes</Glow></At>
      <At x={960} y={780} o={ramp(t, st + 0.3, 0.5)}><Glow color={GOLD} size={38} serif>it stops applying</Glow></At>
      <At x={960} y={200} o={ramp(t, bk, 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      <div style={{ position: "absolute", top: 400, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="no why and because" at={nw} size={84} />
      </div>
    </AbsoluteFill>
  );
};

const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two ways of knowing are at work"), one = c("One divides"), hd = c("A cup becomes a handle"), rb = c("a rim and a body");
  const oth = c("The other does not divide"), whole = c("It meets what appears whole"), bf = c("before the parts and names are added");
  const labels: [string, number, number, number, string][] = [["handle", hd + 0.3, 880, 560, TEAL], ["rim", rb, 560, 200, VIOLET], ["body", rb + 0.7, 420, 740, ROSE]];
  return (
    <AbsoluteFill>
      <Title at={two}>two ways of knowing</Title>
      <At x={560} y={450} s={pop(t, fps, two + 0.4)}><Cup apart={ramp(t, one, 1.2)} color={ICE} /></At>
      {labels.map(([w, at, x, y, col], i) => <At key={i} x={x} y={y} s={pop(t, fps, at)}><Chip color={col} size={30}>{w}</Chip></At>)}
      <At x={560} y={820} o={ramp(t, one, 0.5)}><Glow color={ICE} size={34}>one divides</Glow></At>
      <At x={1360} y={450} s={pop(t, fps, oth)}><Cup steam={ramp(t, whole, 1)} color={GOLD} /></At>
      <Ring x={1360} y={450} p={ramp(t, whole, 2.2)} r0={180} r1={380} color={GOLD} />
      <At x={1360} y={200} o={ramp(t, oth, 0.5)}><Glow color={GOLD} size={34}>one does not</Glow></At>
      <At x={1360} y={820} o={ramp(t, bf, 0.5)}><Glow color={GOLD} size={34} serif>met whole, before the names</Glow></At>
    </AbsoluteFill>
  );
};

const StagesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stg = c("These are not two stages"), dv = c("The dividing mind is the habit that analysis answers"), un = c("The undivided seeing is what remains");
  const stairs = ramp(t, stg, 0.5) * (1 - ramp(t, dv - 0.3, 0.5));
  const join = ramp(t, un + 0.2, 1.4);
  return (
    <AbsoluteFill>
      <Struck x={960} y={140} at={stg} strikeAt={stg + 1.2} color={DIM} size={36}>two stages</Struck>
      <Svg style={{ opacity: stairs }}>
        <DrawPath d="M640 560 L640 470 L960 470 L960 360 L1280 360" p={ramp(t, stg, 0.8)} color={VIOLET} width={6} len={1100} />
        <text x={800} y={445} fill={CHALK} fontFamily={SERIF} fontSize={44} textAnchor="middle">1</text>
        <text x={1120} y={335} fill={CHALK} fontFamily={SERIF} fontSize={44} textAnchor="middle">2</text>
      </Svg>
      {stairs > 0.01 && <Crossed x={960} y={460} at={stg + 1.0} size={80} />}
      <At x={960} y={480} s={pop(t, fps, dv)}><Cup apart={1 - join} color={join > 0.5 ? GOLD : ICE} steam={ramp(t, un + 1.4, 1)} /></At>
      {[["handle", 1260, 520], ["rim", 960, 230], ["body", 720, 680]].map(([w, x, y], i) => (
        <At key={i} x={x as number} y={y as number} o={ramp(t, dv + 0.3 + i * 0.2, 0.4) * (1 - ramp(t, un, 0.6))}><Chip color={DIM} size={28}>{w as string}</Chip></At>
      ))}
      <At x={960} y={770} o={between(t, dv + 0.4, un)}><Chip color={VIOLET} size={32}>dividing: the habit analysis answers</Chip></At>
      <At x={960} y={790} o={ramp(t, un + 0.5, 0.5)}><Glow color={GOLD} size={40} serif>undivided: what remains</Glow></At>
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ex = c("the eight extremes fall away together"), edge = c("a thing with an edge of its own"), wo = c("Without it, nothing is lost");
  const wh = c("Nothing ever had the whereabouts");
  const pairs: [string, string, number, number, number][] = [
    ["arising", "ceasing", c("Arising and ceasing"), 260, 300], ["lasting", "ending", c("Lasting and ending"), 400, 440],
    ["coming", "going", c("Coming and going"), 540, 440], ["same", "different", c("Same and different"), 680, 300]];
  const fall = ramp(t, wo, 1.2);
  const edgeHi = ramp(t, edge, 0.5);
  return (
    <AbsoluteFill>
      <Title at={ex}>the eight extremes</Title>
      {/* the thing with an edge of its own, that all eight needed */}
      <At x={960} y={470} s={pop(t, fps, ex + 0.3)} o={1 - fall}>
        <div style={{ width: 270, height: 200, borderRadius: 16, background: `${GOLD}1c`,
          border: `${4 + 4 * edgeHi}px ${fall > 0.2 ? "dashed" : "solid"} ${GOLD}`, boxShadow: `0 0 ${20 + 40 * edgeHi}px ${GOLD}` }} />
      </At>
      <At x={960} y={470} o={ramp(t, edge, 0.5) * (1 - fall)}><Glow color={CHALK} size={26}>an edge of its own</Glow></At>
      {pairs.map(([a, b, at, y, dx], i) => (
        <React.Fragment key={i}>
          {[[-1, a], [1, b]].map(([s, w], k) => (
            <At key={k} x={960 + (s as number) * (dx + 40)} y={y + 70 * fall} s={pop(t, fps, at + k * 0.3)} o={1 - fall} blur={fall * 8}>
              <Chip color={[TEAL, VIOLET, ROSE, ICE][i]} size={30}>{w as string}</Chip>
            </At>
          ))}
        </React.Fragment>
      ))}
      {/* nothing is lost: things go on appearing, with no edge of their own */}
      <AbsoluteFill style={{ opacity: ramp(t, wo + 0.9, 1.0) }}><Colours x={960} y={470} vivid={0.5} /></AbsoluteFill>
      <At x={960} y={790} o={between(t, wo + 0.6, wh - 0.1)}><Glow color={GOLD} size={38} serif>nothing is lost</Glow></At>
      <At x={960} y={790} o={ramp(t, wh + 0.2, 0.5)}><Glow color={GOLD} size={36} serif>no whereabouts were ever there</Glow></At>
    </AbsoluteFill>
  );
};

/** One appearing: a living cluster of colour, no layer under it. */
const Appearing: React.FC<{ x: number; y: number; at: number; rx?: number; ry?: number }> = ({ x, y, at, rx = 230, ry = 120 }) => {
  const { t, fps } = useT();
  return (
    <>
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2 + t * 0.15, k = ramp(t, at + i * 0.04, 1.2);
        return <At key={i} x={x + (40 + (rx - 40) * k) * Math.cos(a)} y={y + (20 + (ry - 20) * k) * Math.sin(a)} s={pop(t, fps, at + i * 0.04)}>
          <Orb size={18 + (i % 3) * 10} color={[GOLD, TEAL, ROSE, VIOLET, ICE][i % 5]} /></At>;
      })}
    </>
  );
};

const IngredientScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sp = c("calls this appearing spontaneous presence"), ing = c("It is not a new ingredient laid over emptiness");
  const lay = ramp(t, ing + 0.2, 1.0), gone = ramp(t, ing + 2.4, 0.8);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 80, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="spontaneous presence" at={sp} size={80} />
      </div>
      <Appearing x={960} y={430} at={sp - 0.2} />
      {/* the misreading: a new layer laid over a layer of emptiness, then removed */}
      <AbsoluteFill style={{ opacity: ramp(t, ing, 0.5) * (1 - gone) }}>
        <At x={960} y={720}>
          <div style={{ width: 620, height: 52, borderRadius: 8, border: `3px dashed ${ICE}`, background: `${ICE}1a`, fontFamily: SERIF, fontSize: 28,
            color: ICE, display: "flex", alignItems: "center", justifyContent: "center" }}>emptiness</div>
        </At>
        <At x={960} y={560 + 104 * lay} o={lay}>
          <div style={{ width: 540, height: 52, borderRadius: 8, border: `3px solid ${GOLD}`, background: `${GOLD}33`, fontFamily: SERIF, fontSize: 28,
            color: CHALK, display: "flex", alignItems: "center", justifyContent: "center" }}>presence, laid over it</div>
        </At>
      </AbsoluteFill>
      {gone < 0.99 && <Crossed x={960} y={692} at={ing + 1.4} size={56} />}
      <At x={960} y={810} o={ramp(t, ing + 0.6, 0.5)}><Glow color={WARM} size={34}>not a new ingredient</Glow></At>
    </AbsoluteFill>
  );
};

const TwoDescriptionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const out = c("describes it from the outside"), win = c("describes the same appearing from within");
  const ee = c("Emptiness itself is empty"), gr = c("it cannot become a ground");
  const rays = ramp(t, win + 0.2, 0.8);
  const slab = between(t, gr, gr + 1.8, 0.5);
  return (
    <AbsoluteFill>
      <Appearing x={960} y={450} at={out - 0.5} rx={170} ry={110} />
      <At x={960} y={450} s={pop(t, fps, out - 0.4)}><Orb size={100} color={GOLD} core={1} /></At>
      <At x={960} y={665} o={ramp(t, out, 0.5) * (1 - ramp(t, ee - 0.3, 0.4))}><Glow color={GOLD} size={32} serif>one appearing</Glow></At>
      {/* from outside: the view of conditions */}
      <At x={330} y={450} s={pop(t, fps, out + 0.2)}><Eye color={TEAL} /></At>
      <Flow x1={420} y1={450} x2={740} y2={450} color={TEAL} p={ramp(t, out + 0.4, 0.6)} />
      <At x={420} y={320} o={ramp(t, out + 0.3, 0.5)}><Chip color={TEAL} size={30}>dependent arising: from outside</Chip></At>
      {/* from within: the same appearing, shining as itself */}
      <Svg style={{ opacity: rays }}>
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2 + t * 0.2, r0 = 200, r1 = 250 + 20 * Math.sin(t * 3 + i);
          return <line key={i} x1={960 + r0 * Math.cos(a)} y1={450 + r0 * 0.7 * Math.sin(a)} x2={960 + r1 * Math.cos(a)} y2={450 + r1 * 0.7 * Math.sin(a)}
            stroke={GOLD} strokeWidth={4} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }} />;
        })}
      </Svg>
      <At x={1500} y={320} o={ramp(t, win, 0.5)}><Chip color={GOLD} size={30}>spontaneous presence: from within</Chip></At>
      {/* emptiness is empty too: it cannot be slid under as a ground */}
      <At x={960} y={720} o={between(t, ee, gr - 0.2, 0.5)} blur={ramp(t, ee + 0.8, 1.0) * 6}>
        <div style={{ padding: "8px 28px", borderRadius: 26, border: `3px dashed ${ICE}`, fontFamily: SERIF, fontSize: 32, color: ICE }}>emptiness: empty too</div>
      </At>
      <At x={960} y={710} o={slab}><Slab w={560} p={ramp(t, gr, 0.6)} label="a ground?" /></At>
      {slab > 0.01 && <Crossed x={960} y={710} at={gr + 0.7} size={44} />}
      <At x={960} y={810} o={ramp(t, gr + 1.4, 0.5)}><Glow color={GOLD} size={34} serif>no ground beneath it</Glow></At>
    </AbsoluteFill>
  );
};

const BahiyaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tch = c("The old teaching to"), seen = c("In the seen, only the seen"), heard = c("In the heard, only the heard");
  const seer = c("No seer stands behind the seeing"), col = c("Colours are vivid"), snd = c("Sounds are immediate");
  const th = c("Thoughts lose their heavy ownership");
  const phase = Math.max(0, t - heard) * 0.45 + Math.max(0, t - snd) * 0.4;
  const drop = ramp(t, th + 0.3, 1.2);
  return (
    <AbsoluteFill>
      <Title at={tch}>the teaching to Bāhiya</Title>
      <AbsoluteFill style={{ opacity: ramp(t, seen - 0.2, 0.6) }}><Colours x={560} y={430} vivid={ramp(t, col, 1.0)} /></AbsoluteFill>
      <At x={560} y={660} o={ramp(t, seen, 0.5)}><Glow color={GOLD} size={38} serif>in the seen, only the seen</Glow></At>
      <Sound x={1360} y={430} phase={phase} o={ramp(t, heard - 0.2, 0.6)} r1={200 + 30 * ramp(t, snd, 0.6)} />
      <At x={1360} y={660} o={ramp(t, heard, 0.5)}><Glow color={TEAL} size={38} serif>in the heard, only the heard</Glow></At>
      {/* the seer behind the seeing is looked for and is not there */}
      <At x={960} y={430} o={ramp(t, seer - 0.2, 0.5) * (1 - ramp(t, seer + 1.3, 1.0))}><Head color={DIM} /></At>
      <Struck x={960} y={790} at={seer} strikeAt={seer + 1.0} color={DIM} size={32} o={1 - ramp(t, th - 0.5, 0.4)}>a seer behind the seeing</Struck>
      {/* thoughts drop their heavy ownership */}
      <At x={960} y={290 - 40 * drop} s={pop(t, fps, th - 0.2)}><Cloud /></At>
      <At x={960} y={390 + 140 * drop} o={ramp(t, th - 0.1, 0.4) * (1 - drop)} r={drop * 14}>
        <div style={{ width: 110, height: 64, borderRadius: 10, background: `linear-gradient(180deg, ${WARM}88, #3a1d1d)`, border: `3px solid ${WARM}`,
          fontFamily: SERIF, fontSize: 28, color: CHALK, display: "flex", alignItems: "center", justifyContent: "center" }}>mine</div>
      </At>
      <At x={960} y={800} o={ramp(t, th + 1.2, 0.5)}><Glow color={VIOLET} size={34}>thoughts, light</Glow></At>
    </AbsoluteFill>
  );
};

const AttainmentScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const at = c("This is not an attainment to keep"), fx = c("the fixing has returned");
  const grip = ramp(t, fx, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, at)}><Trophy /></At>
      <At x={960} y={640} o={ramp(t, at + 0.4, 0.5)}><Glow color={GOLD} size={38} serif>an attainment to keep?</Glow></At>
      <Clamp x={960} y={420} gap={300 - 170 * grip} o={grip} h={240} />
      <At x={960} y={740} o={ramp(t, fx + 0.3, 0.5)}><Glow color={WARM} size={36}>held, the fixing has returned</Glow></At>
      <Crossed x={960} y={420} at={fx + 1.2} size={110} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sn = c("Seen is just seen"), hd = c("Heard is just heard"), nn = c("nothing needs to be put in its place");
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: ramp(t, sn - 0.2, 0.8) }}><Colours x={620} y={420} vivid={0.8} /></AbsoluteFill>
      <At x={620} y={620} o={ramp(t, sn, 0.5)}><Glow color={GOLD} size={40} serif>seen is just seen</Glow></At>
      <Sound x={1300} y={420} phase={Math.max(0, t - hd) * 0.4} o={ramp(t, hd - 0.2, 0.8)} r1={190} />
      <At x={1300} y={620} o={ramp(t, hd, 0.5)}><Glow color={TEAL} size={40} serif>heard is just heard</Glow></At>
      <Ring x={960} y={420} p={ramp(t, nn + 0.3, 2.6)} r0={120} r1={620} color={GOLD} />
      <At x={960} y={780} s={pop(t, fps, nn, 16)} o={ramp(t, nn, 0.8)}><Glow color={GOLD} size={44} serif>nothing needs to be put in its place</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["doubt", c("A careful reader", 0.6)], ["open", c("The answer offered here is no", 0.6)],
    ["search", c("three quiet assumptions", 0.6)], ["why", c("But one assumption survives", 0.6)],
    ["whole", c("Two ways of knowing are at work", 0.6)], ["search", c("the eight extremes fall away together", 0.6)],
    ["vivid", c("calls this appearing spontaneous presence", 0.6)], ["whole", c("This is not an attainment to keep", 0.6)],
    ["vivid", c("Seen is just seen", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("A careful reader", 0.9)], <MisheardScene />],
    [S("A careful reader", "The answer offered here is no"), <SuspectScene />],
    [S("The answer offered here is no", "three quiet assumptions"), <AnswerScene />],
    [S("three quiet assumptions", "looks for each one"), <AssumptionsScene />],
    [S("looks for each one", "The power of a cause, when sought"), <ChariotScene />],
    [S("The power of a cause, when sought", "And the foundation, when sought"), <PowerScene />],
    [S("And the foundation, when sought", "None of this says that chariots are unreal"), <FoundationScene />],
    [S("None of this says that chariots are unreal", "Notice what analysis is for"), <UnrealScene />],
    [S("Notice what analysis is for", "But one assumption survives"), <AnalysisScene />],
    [S("But one assumption survives", "This is the last spell"), <WhyScene />],
    [S("This is the last spell", "Two ways of knowing are at work"), <SpellScene />],
    [S("Two ways of knowing are at work", "These are not two stages"), <CupScene />],
    [S("These are not two stages", "the eight extremes fall away together"), <StagesScene />],
    [S("the eight extremes fall away together", "calls this appearing spontaneous presence"), <ExtremesScene />],
    [S("calls this appearing spontaneous presence", "describes it from the outside"), <IngredientScene />],
    [S("describes it from the outside", "The old teaching to"), <TwoDescriptionsScene />],
    [S("The old teaching to", "This is not an attainment to keep"), <BahiyaScene />],
    [S("This is not an attainment to keep", "Seen is just seen"), <AttainmentScene />],
    [S("Seen is just seen", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
