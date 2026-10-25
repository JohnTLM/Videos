// Anatta to Emptiness, Chapter 12: Resonances and Open Questions (with the Epilogue).
// Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "build an argument", "hold up a lantern", "the second kind", "more speculative", "illuminating, but provisional",
  "Take two searches", "the chariot's", "the same as its parts", "their collection, their shape", "Every option fails", "through logical relations",
  "belongs to physics", "entangled particles", "no local mechanism can explain", "a positive, measured result",
  "call these one truth", "trade precision for rhetoric", "narrower, and more durable", "refuse the same picture", "a bounded, self-standing thing",
  "one fixed spot", "Two separate roads", "Science resonates here", "It does not prove",
  "emergence and epiphenomenon", "Both fit poorly", "Emergence keeps a base level", "atoms or neurons", "a higher property arising",
  "a mere by-product", "a train's whistle", "doing no real work", "Base first, the rest second",
  "removes the base altogether", "Parts and whole arise together", "neither produces the other", "never a floor", "permission to rise above",
  "the boldest claim", "no difference at all", "the round of confusion", "its peace", "allowed to feel shocking", "This breath, this sound",
  "flicker of irritation",
  "sharing the nature", "not the same as being free", "is spiritual bypass", "A gripped mind and a free mind", "The nature was never different",
  "The recognition was",
  "this book's own reading", "spontaneous presence and dependent arising", "one nature under two descriptions", "the ground is empty",
  "not a subtle hidden thing", "careful analysis alone", "an open question",
  "Richard Feynman", "nobody understands quantum mechanics", "A comfortable picture", "a substitute has been accepted", "finds emptiness the same",
  "So nothing exists", "So it is all mind", "a ground after all", "a resting place", "that comfort is the tell",
  "a new floor", "repeatable at any moment", "no floor was ever required",
  "Looking back", "was never incomplete", "the view used to understand it", "an ultimate why is released", "perfectly, and lightly",
  "Nothing has been added", "Nothing has been removed", "exist from its own side",
  "has not been transcended", "It has been understood",
];

const DEEP = "#D4A245", INDIGO = "#7C74F0";

const M = {
  lantern: { a: "rgba(175,125,45,0.5)", b: "rgba(60,50,150,0.5)", c: "rgba(40,90,130,0.3)" },
  search: { a: "rgba(50,60,150,0.5)", b: "rgba(40,120,150,0.4)", c: "rgba(160,115,50,0.3)" },
  emerge: { a: "rgba(80,55,150,0.5)", b: "rgba(150,100,45,0.4)", c: "rgba(40,100,120,0.3)" },
  nirvana: { a: "rgba(185,140,60,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(60,140,130,0.35)" },
  synth: { a: "rgba(60,110,150,0.5)", b: "rgba(90,60,170,0.45)", c: "rgba(170,125,55,0.35)" },
  caution: { a: "rgba(60,45,120,0.55)", b: "rgba(120,80,60,0.35)", c: "rgba(40,80,120,0.3)" },
  epilogue: { a: "rgba(190,145,60,0.5)", b: "rgba(80,65,170,0.45)", c: "rgba(60,150,130,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Lantern: React.FC<{ glow: number }> = ({ glow }) => (
  <svg width={160} height={240} viewBox="0 0 160 240" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${10 + 30 * glow}px ${GOLD})` }}>
    <path d="M80 4 L80 30" stroke={DIM} strokeWidth={4} /><circle cx={80} cy={20} r={14} fill="none" stroke={DIM} strokeWidth={4} />
    <rect x={40} y={30} width={80} height={16} rx={4} fill={DEEP} />
    <path d="M44 46 L116 46 L124 180 L36 180 Z" fill={`rgba(255,220,140,${0.15 + 0.5 * glow})`} stroke={DEEP} strokeWidth={4} />
    <ellipse cx={80} cy={120} rx={14} ry={24} fill="#FFF3C8" opacity={glow} />
    <rect x={32} y={180} width={96} height={16} rx={4} fill={DEEP} />
  </svg>
);

const MiniChariot: React.FC<{ spin: number; size?: number }> = ({ spin, size = 300 }) => (
  <svg width={size} height={(size * 300) / 440} viewBox="-220 -150 440 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
    <line x1={-120} y1={22} x2={60} y2={22} stroke={ICE} strokeWidth={10} strokeLinecap="round" />
    <path d="M-150 -90 L60 -90 L80 10 L-150 10 Z" fill={`${DEEP}30`} stroke={DEEP} strokeWidth={5} strokeLinejoin="round" />
    <path d="M78 -4 Q150 -10 210 -34" fill="none" stroke={ROSE} strokeWidth={7} strokeLinecap="round" />
    <g transform={`translate(-40 40) rotate(${spin})`}>
      <circle r={85} fill="rgba(60,50,140,0.3)" stroke={TEAL} strokeWidth={7} />
      {Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-80} stroke={TEAL} strokeWidth={4} transform={`rotate(${i * 45})`} />)}
      <circle r={14} fill={GOLD} />
    </g>
  </svg>
);

const Train: React.FC<{ puff: number }> = ({ puff }) => {
  const { t } = useT();
  return (
    <svg width={320} height={200} viewBox="0 0 320 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE})` }}>
      <rect x={40} y={80} width={200} height={70} rx={8} fill={`${INDIGO}55`} stroke={INDIGO} strokeWidth={4} />
      <rect x={180} y={40} width={70} height={110} rx={6} fill={`${INDIGO}55`} stroke={INDIGO} strokeWidth={4} />
      <rect x={70} y={50} width={24} height={30} fill={DIM} />
      {[80, 150, 220].map((x) => <circle key={x} cx={x} cy={160} r={22} fill="#1b1d2b" stroke={ICE} strokeWidth={4} />)}
      {[0, 1, 2].map((k) => (
        <circle key={k} cx={82 - k * 30 - ((t * 20) % 20)} cy={40 - k * 22} r={10 + k * 6} fill={CHALK} opacity={puff * (0.5 - k * 0.12)} />
      ))}
    </svg>
  );
};

const Head: React.FC<{ knots?: number; color?: string }> = ({ knots = 0, color = CHALK }) => {
  const { t } = useT();
  return (
    <svg width={220} height={250} viewBox="0 0 300 340" style={{ overflow: "visible" }}>
      <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
        fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth={4} strokeLinejoin="round" />
      {knots > 0 && Array.from({ length: 5 }).map((_, i) => (
        <path key={i} d={`M${100 + i * 22} ${110 + (i % 2) * 30} q 20 -30 30 0 t -20 30 t 30 10`} fill="none" stroke={WARM} strokeWidth={3}
          opacity={knots} transform={`rotate(${Math.sin(t * 2 + i) * 10} ${140} ${140})`} />
      ))}
    </svg>
  );
};

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color = DIM, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Pendulum: React.FC<{ phase: number; color: string; label: string }> = ({ phase, color, label }) => {
  const { t } = useT();
  const a = Math.sin(t * 2.2 + phase) * 26;
  return (
    <div style={{ position: "relative", width: 220, height: 330, textAlign: "center" }}>
      <svg width={220} height={290} viewBox="0 0 260 340" style={{ overflow: "visible" }}>
        <line x1={40} y1={10} x2={220} y2={10} stroke={DIM} strokeWidth={6} strokeLinecap="round" />
        <g transform={`rotate(${a} 130 10)`}>
          <line x1={130} y1={10} x2={130} y2={260} stroke={color} strokeWidth={4} />
          <circle cx={130} cy={280} r={30} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
        </g>
      </svg>
      <Glow color={color} size={32}>{label}</Glow>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const LanternScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const arg = c("build an argument", 0.5), lan = c("hold up a lantern"), sec = c("the second kind"), spec = c("more speculative"), prov = c("illuminating, but provisional");
  const glow = ramp(t, lan, 1.2);
  return (
    <AbsoluteFill>
      {Array.from({ length: 6 }).map((_, i) => {
        const row = Math.floor(i / 3), col = i % 3;
        return <At key={i} x={420 + col * 110 + (row ? 55 : 0) - (row ? 0 : 0)} y={560 - row * 70} s={pop(t, fps, arg + i * 0.2)} o={1 - ramp(t, sec, 0.6) * 0.6}>
          <div style={{ width: 100, height: 60, borderRadius: 6, border: `3px solid ${INDIGO}`, background: `${INDIGO}44` }} /></At>;
      })}
      <At x={530} y={680} o={ramp(t, arg, 0.4) * (1 - ramp(t, sec, 0.6) * 0.6)}><Glow color={INDIGO} size={30}>an argument, step by step</Glow></At>
      <At x={1340} y={420} o={glow}><div style={{ width: 760, height: 560, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}44, ${DEEP}11 50%, transparent 70%)` }} /></At>
      <At x={1340} y={400} s={pop(t, fps, lan)}><Lantern glow={glow} /></At>
      <At x={1340} y={150} o={ramp(t, sec, 0.4)}><Glow color={GOLD} size={40} serif>a lantern, to see a little further</Glow></At>
      <At x={1180} y={690} o={ramp(t, spec, 0.4)}><Chip color={VIOLET} size={30}>more speculative</Chip></At>
      <At x={1500} y={690} o={ramp(t, spec + 0.5, 0.4)}><Chip color={ROSE} size={30}>open to dispute</Chip></At>
      <At x={1340} y={790} o={ramp(t, prov, 0.4)}><Glow color={CHALK} size={36} serif>illuminating · provisional · not settled</Glow></At>
    </AbsoluteFill>
  );
};

const SearchesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Take two searches", 0.4), ch = c("the chariot's"), same = c("the same as its parts"), fails = c("Every option fails"), log = c("through logical relations");
  const phys = c("belongs to physics"), ent = c("entangled particles"), loc = c("no local mechanism can explain"), pos = c("a positive, measured result");
  const opts = ["same as its parts?", "different?", "inside them?", "their collection?", "their shape?"];
  const spin = Math.sin(t * 0.8) * 180;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, two, 0.4)}><Glow color={CHALK} size={40} serif>two searches</Glow></At>
      <Svg style={{ opacity: ramp(t, two, 0.5) }}><line x1={960} y1={170} x2={960} y2={760} stroke={DIM} strokeWidth={2} strokeDasharray="8 10" /></Svg>
      <At x={480} y={400} s={pop(t, fps, ch)}><MiniChariot spin={t * 60} /></At>
      {opts.map((o, i) => {
        const a = -Math.PI / 2 + (i / 5) * Math.PI * 2;
        const at = same + i * 0.45;
        return <StruckChip key={i} x={480 + 330 * Math.cos(a)} y={420 + 210 * Math.sin(a)} at={at} strikeAt={fails + i * 0.12} size={22}>{o}</StruckChip>;
      })}
      <At x={480} y={720} o={ramp(t, log, 0.4)}><Glow color={DEEP} size={32}>logical relations · not space</Glow></At>
      <At x={1440} y={200} o={ramp(t, phys, 0.4)}><Glow color={ICE} size={34} serif>physics</Glow></At>
      {[0, 1].map((k) => (
        <At key={k} x={1240 + k * 400} y={420} s={pop(t, fps, ent + k * 0.2)}>
          <div style={{ transform: `rotate(${(k ? -1 : 1) * spin}deg)` }}><Orb size={80} color={k ? VIOLET : TEAL} /></div>
        </At>
      ))}
      <Svg style={{ opacity: ramp(t, ent + 0.5, 0.5) }}>
        <path d={Array.from({ length: 33 }, (_, i) => `${i ? "L" : "M"}${1280 + i * 10} ${420 + 18 * Math.sin(i / 2.5 - t * 4)}`).join(" ")} fill="none" stroke={GOLD} strokeWidth={3} />
      </Svg>
      <At x={1440} y={560} o={ramp(t, ent + 0.6, 0.4)}><Glow color={GOLD} size={28}>correlated, far apart</Glow></At>
      <StruckChip x={1440} y={640} at={loc} strikeAt={loc + 1.0} size={26}>a local mechanism</StruckChip>
      <At x={1440} y={720} o={ramp(t, pos, 0.4)}><Glow color={ICE} size={32}>measured · space and time</Glow></At>
    </AbsoluteFill>
  );
};

const ResonanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("call these one truth", 0.4), prec = c("trade precision for rhetoric"), nar = c("narrower, and more durable"), pic = c("refuse the same picture");
  const box = c("a bounded, self-standing thing"), spot = c("one fixed spot"), roads = c("Two separate roads"), res = c("Science resonates here"), np = c("It does not prove");
  const part2 = ramp(t, pic - 0.2, 0.5);
  const road = ramp(t, roads, 1.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960} y={360} o={ramp(t, one, 0.4)}>
          <div style={{ position: "relative" }}><Glow color={GOLD} size={64} serif>one truth?</Glow><Strike at={prec} /></div>
        </At>
        <At x={960} y={500} o={ramp(t, prec, 0.4)}><Glow color={DIM} size={32}>precision traded for rhetoric</Glow></At>
        <At x={960} y={620} o={ramp(t, nar, 0.4)}><Chip color={TEAL} size={34}>a narrower, more durable resonance</Chip></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: part2 }}>
        <Svg>
          {Array.from({ length: 7 }).map((_, i) => <line key={`h${i}`} x1={700} y1={220 + i * 50} x2={1220} y2={220 + i * 50} stroke={DIM} strokeWidth={1} opacity={0.4} />)}
          {Array.from({ length: 11 }).map((_, i) => <line key={`v${i}`} x1={700 + i * 52} y1={220} x2={700 + i * 52} y2={520} stroke={DIM} strokeWidth={1} opacity={0.4} />)}
        </Svg>
        <At x={960} y={370} s={pop(t, fps, box)}>
          <div style={{ width: 120, height: 120, borderRadius: 8, border: `4px solid ${CHALK}`, background: "linear-gradient(140deg, #6b6680, #2c2a3a)" }} />
        </At>
        <At x={960} y={440} s={pop(t, fps, spot)}><div style={{ width: 22, height: 22, borderRadius: "50%", background: WARM, boxShadow: `0 0 14px ${WARM}` }} /></At>
        <Crossed x={960} y={370} at={spot + 0.8} size={90} />
        <At x={960} y={170} o={ramp(t, box, 0.4)}><Glow color={CHALK} size={32}>a bounded thing, at one fixed spot</Glow></At>
        <Svg>
          <DrawPath d="M240 720 C 420 720, 520 600, 820 560" p={road} color={DEEP} width={8} len={700} />
          <DrawPath d="M1680 720 C 1500 720, 1400 600, 1100 560" p={road} color={ICE} width={8} len={700} />
        </Svg>
        <At x={300} y={780} o={ramp(t, roads, 0.4)}><Glow color={DEEP} size={28}>analysis</Glow></At>
        <At x={1620} y={780} o={ramp(t, roads, 0.4)}><Glow color={ICE} size={28}>measurement</Glow></At>
        <At x={960} y={660} o={ramp(t, res, 0.4)}><Chip color={TEAL} size={34}>science resonates</Chip></At>
        <At x={960} y={760} o={ramp(t, np, 0.4)}><Glow color={WARM} size={36} serif>it does not prove</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const EmergenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const words = c("emergence and epiphenomenon", 0.4), poor = c("Both fit poorly"), base = c("Emergence keeps a base level"), atoms = c("atoms or neurons");
  const hi = c("a higher property arising"), by = c("a mere by-product"), wh = c("a train's whistle"), nw = c("doing no real work"), order = c("Base first, the rest second");
  const rise = ramp(t, hi, 1.4);
  return (
    <AbsoluteFill>
      <At x={560} y={140} o={ramp(t, words, 0.4)}><Glow color={VIOLET} size={38} serif>emergence</Glow></At>
      <At x={1360} y={140} o={ramp(t, words + 0.5, 0.4)}><Glow color={ICE} size={38} serif>epiphenomenon</Glow></At>
      <At x={960} y={210} o={ramp(t, poor, 0.4)}><Glow color={WARM} size={30}>both fit poorly</Glow></At>
      {/* a base level, shown so the next scene can remove it */}
      <div style={{ position: "absolute", left: 330, top: 600, width: 460, height: 80, borderRadius: 8, border: `3px solid ${DEEP}`, background: `${DEEP}2a`,
        boxShadow: `0 0 26px ${DEEP}66`, opacity: ramp(t, base, 0.5) }} />
      {Array.from({ length: 8 }).map((_, i) => (
        <At key={i} x={370 + i * 55} y={640} s={pop(t, fps, atoms + i * 0.05)}><Orb size={30} color={i % 2 ? TEAL : DEEP} /></At>
      ))}
      <At x={560} y={720} o={ramp(t, atoms, 0.4)}><Glow color={DEEP} size={28}>base: atoms, neurons · "more real"</Glow></At>
      <At x={560} y={540 - 180 * rise} o={ramp(t, hi, 0.4)}><Orb size={110} color={VIOLET} /></At>
      <Flow x1={560} y1={590} x2={560} y2={560 - 180 * rise + 60} color={VIOLET} p={rise} />
      <At x={720} y={360} o={ramp(t, hi + 0.6, 0.4)}><Glow color={VIOLET} size={28}>higher property</Glow></At>
      <At x={1360} y={480} s={pop(t, fps, by)}><Train puff={ramp(t, wh, 0.5)} /></At>
      <At x={1360} y={650} o={ramp(t, wh, 0.4)}><Glow color={ICE} size={28}>the whistle does not drive the train</Glow></At>
      <At x={1360} y={300} o={ramp(t, nw, 0.4)}><Chip color={DIM} size={28}>a by-product · no real work</Chip></At>
      <At x={960} y={800} o={ramp(t, order, 0.4)}><Chip color={WARM} size={34}>base first · the rest second</Chip></At>
    </AbsoluteFill>
  );
};

const NoBaseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rem = c("removes the base altogether", 0.4), tog = c("Parts and whole arise together"), np = c("neither produces the other"), nf = c("never a floor");
  const fall = ramp(t, rem + 0.2, 1.4);
  const arise = ramp(t, tog, 1.0);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 730, top: 640 + fall * 220, width: 460, height: 80, borderRadius: 8, border: `3px solid ${DEEP}`, background: `${DEEP}2a`,
        opacity: 1 - fall, transform: `rotate(${fall * 9}deg)` }} />
      <At x={960} y={760} o={ramp(t, rem, 0.3) * (1 - fall)}><Glow color={DEEP} size={30}>the base</Glow></At>
      <At x={960} y={160} o={ramp(t, rem + 0.4, 0.5)}><Glow color={CHALK} size={40} serif>dependent arising removes the base</Glow></At>
      <At x={960} y={440} s={arise}><div style={{ width: 360, height: 360, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}18`, boxShadow: `0 0 40px ${GOLD}66` }} /></At>
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={960 + 120 * Math.cos(a)} y={440 + 120 * Math.sin(a)} s={arise}><Orb size={54} color={[TEAL, ROSE, VIOLET][i % 3]} /></At>;
      })}
      <At x={1380} y={350} o={ramp(t, tog, 0.4)}><Glow color={GOLD} size={32}>whole</Glow></At>
      <At x={1380} y={410} o={ramp(t, tog, 0.4)}><Glow color={TEAL} size={32}>and parts, together</Glow></At>
      <At x={540} y={440} o={ramp(t, np, 0.4)}><Chip color={DIM} size={28}>neither produces the other</Chip></At>
      <At x={960} y={790} o={ramp(t, nf, 0.4)}><Glow color={DEEP} size={36} serif>never a floor to rise above</Glow></At>
    </AbsoluteFill>
  );
};

const NirvanaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bold = c("the boldest claim", 0.4), nd = c("no difference at all"), round = c("the round of confusion"), peace = c("its peace");
  const shock = c("allowed to feel shocking"), br = c("This breath, this sound"), fl = c("flicker of irritation");
  const merge = ramp(t, shock - 0.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, bold, 0.4)}><Glow color={GOLD} size={42} serif>the boldest claim</Glow></At>
      <At x={960 - 300 * (1 - merge)} y={400} s={pop(t, fps, round - 0.3)}>
        <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ overflow: "visible", transform: `rotate(${t * 120}deg)`, filter: `drop-shadow(0 0 12px ${WARM})` }}>
          {[0, 1, 2].map((k) => <path key={k} d="M0 -90 A90 90 0 0 1 78 45" fill="none" stroke={WARM} strokeWidth={8} strokeLinecap="round" transform={`rotate(${k * 120})`} opacity={1 - merge * 0.6} />)}
        </svg>
      </At>
      <At x={960 + 300 * (1 - merge)} y={400} s={pop(t, fps, peace - 0.2)}><Orb size={200} color={ICE} /></At>
      <At x={660} y={580} o={ramp(t, round, 0.4) * (1 - merge)}><Glow color={WARM} size={32}>saṃsāra · confusion</Glow></At>
      <At x={1260} y={580} o={ramp(t, peace, 0.4) * (1 - merge)}><Glow color={ICE} size={32}>nirvāṇa · peace</Glow></At>
      <At x={960} y={230} o={ramp(t, nd, 0.4)}><Glow color={CHALK} size={34}>no difference at all</Glow></At>
      <At x={960} y={580} o={merge}><Glow color={GOLD} size={38} serif>one nature</Glow></At>
      <At x={560} y={720} s={pop(t, fps, br)}><Chip color={TEAL} size={32}>this breath</Chip></At>
      <At x={960} y={720} s={pop(t, fps, br + 0.6)}><Chip color={GOLD} size={32}>this sound</Chip></At>
      <At x={1360} y={720} s={pop(t, fps, fl)}><Chip color={ROSE} size={32}>this flicker of irritation</Chip></At>
    </AbsoluteFill>
  );
};

const RecognitionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sh = c("sharing the nature", 0.4), free = c("not the same as being free"), by = c("is spiritual bypass"), gm = c("A gripped mind and a free mind");
  const nn = c("The nature was never different"), rec = c("The recognition was");
  return (
    <AbsoluteFill>
      <At x={560} y={170} o={ramp(t, sh, 0.4)}><Chip color={GOLD} size={32}>sharing the nature</Chip></At>
      <At x={960} y={170} o={ramp(t, free, 0.4)}><Glow color={CHALK} size={60}>≠</Glow></At>
      <At x={1360} y={170} o={ramp(t, free, 0.4)}><Chip color={TEAL} size={32}>being free</Chip></At>
      <StruckChip x={960} y={280} at={by - 0.8} strikeAt={by + 0.6} color={WARM} size={30}>"nothing more needs to be seen"</StruckChip>
      <At x={960} y={340} o={ramp(t, by + 0.4, 0.4) * (1 - ramp(t, gm, 0.4))}><Glow color={WARM} size={28}>spiritual bypass</Glow></At>
      <At x={500} y={520} s={pop(t, fps, gm)}><Head knots={1} color={DIM} /></At>
      <At x={1420} y={520} s={pop(t, fps, gm + 0.5)}><div style={{ transform: "scaleX(-1)" }}><Head color={TEAL} /></div></At>
      <At x={960} y={500} s={pop(t, fps, gm + 0.2)}><Orb size={130} color={GOLD} /></At>
      <Flow x1={600} y1={480} x2={890} y2={500} color={DIM} p={ramp(t, gm + 0.4, 0.6)} dash />
      <Flow x1={1320} y1={480} x2={1030} y2={500} color={TEAL} p={ramp(t, gm + 0.8, 0.6)} />
      <At x={500} y={680} o={ramp(t, gm + 0.2, 0.4)}><Glow color={DIM} size={28}>gripped</Glow></At>
      <At x={1420} y={680} o={ramp(t, gm + 0.6, 0.4)}><Glow color={TEAL} size={28}>free</Glow></At>
      <At x={960} y={640} o={ramp(t, nn, 0.4)}><Glow color={GOLD} size={30}>the same nature</Glow></At>
      <At x={960} y={790} o={ramp(t, rec, 0.4)}><Glow color={CHALK} size={40} serif>a different recognition</Glow></At>
    </AbsoluteFill>
  );
};

const SynthesisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rd = c("this book's own reading", 0.4), sp = c("spontaneous presence and dependent arising"), one = c("one nature under two descriptions");
  const ge = c("the ground is empty"), hid = c("not a subtle hidden thing"), an = c("careful analysis alone"), oq = c("an open question");
  const merge = ramp(t, one, 1.2);
  const gone = ramp(t, ge + 0.2, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, rd, 0.4)}><Glow color={DIM} size={30}>this book's own reading · not settled doctrine</Glow></At>
      <At x={960 - 150 * (1 - merge)} y={360} s={pop(t, fps, sp)}>
        <div style={{ width: 280, height: 280, borderRadius: "50%", border: `3px solid ${GOLD}`, background: `${GOLD}22`, boxShadow: `0 0 30px ${GOLD}55` }} />
      </At>
      <At x={960 + 150 * (1 - merge)} y={360} s={pop(t, fps, sp + 0.6)}>
        <div style={{ width: 280, height: 280, borderRadius: "50%", border: `3px solid ${TEAL}`, background: `${TEAL}22`, boxShadow: `0 0 30px ${TEAL}55` }} />
      </At>
      <At x={960 - 330 * (1 - merge)} y={210 + 0 * merge} o={ramp(t, sp, 0.4) * (1 - merge)}><Glow color={GOLD} size={28}>spontaneous presence</Glow></At>
      <At x={960 + 330 * (1 - merge)} y={210} o={ramp(t, sp + 0.6, 0.4) * (1 - merge)}><Glow color={TEAL} size={28}>dependent arising</Glow></At>
      <At x={960} y={360} o={merge}><Glow color={CHALK} size={30} serif>one nature,</Glow><Glow color={CHALK} size={30} serif>two descriptions</Glow></At>
      {/* a "ground" slab beneath, shown only to dissolve it */}
      <div style={{ position: "absolute", left: 700, top: 540 + gone * 160, width: 520, height: 60, borderRadius: 6, border: `3px dashed ${DEEP}`,
        background: `${DEEP}22`, opacity: ramp(t, ge - 0.4, 0.4) * (1 - gone) }} />
      <At x={960} y={570} o={ramp(t, ge - 0.4, 0.3) * (1 - gone)}><Glow color={DEEP} size={26}>a ground?</Glow></At>
      <At x={960} y={600} o={ramp(t, hid - 0.3, 0.5)}><Chip color={ICE} size={30}>the ground is empty · not a hidden thing</Chip></At>
      <At x={560} y={740} o={ramp(t, an, 0.4)}><Chip color={VIOLET} size={28}>analysis alone</Chip></At>
      <Flow x1={720} y1={740} x2={1180} y2={740} color={DIM} p={ramp(t, an + 0.4, 0.8)} dash />
      <At x={1360} y={740} o={ramp(t, an + 0.8, 0.4)}><Chip color={GOLD} size={28}>direct recognition</Chip></At>
      <At x={960} y={700} o={ramp(t, oq, 0.4)}><Glow color={WARM} size={44}>?</Glow></At>
      <At x={960} y={810} o={ramp(t, oq, 0.4)}><Glow color={DIM} size={28}>an open question</Glow></At>
    </AbsoluteFill>
  );
};

const FeynmanScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rf = c("Richard Feynman", 0.4), nb = c("nobody understands quantum mechanics"), cp = c("A comfortable picture"), sub = c("a substitute has been accepted");
  const same = c("finds emptiness the same"), ne = c("So nothing exists"), am = c("So it is all mind"), ga = c("a ground after all");
  const rp = c("a resting place"), tell = c("that comfort is the tell");
  const part2 = ramp(t, same - 0.2, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960} y={140} o={ramp(t, rf, 0.4)}><Glow color={CHALK} size={38} serif>the physicist Richard Feynman</Glow></At>
        <At x={700} y={430} s={pop(t, fps, rf + 0.3)}>
          <svg width={300} height={300} viewBox="-150 -150 300 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ICE})` }}>
            {[0, 60, 120].map((r) => <ellipse key={r} rx={130} ry={44} fill="none" stroke={ICE} strokeWidth={3} transform={`rotate(${r + t * 20})`} opacity={0.7} />)}
            <circle r={18} fill={GOLD} />
          </svg>
        </At>
        <At x={700} y={640} o={ramp(t, nb, 0.4)}><Glow color={ICE} size={30}>"nobody understands quantum mechanics"</Glow></At>
        <At x={1300} y={430} s={pop(t, fps, cp)}>
          <div style={{ width: 240, height: 200, border: `6px solid ${DEEP}`, borderRadius: 6, background: "rgba(40,40,80,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: ICE, boxShadow: `0 0 20px ${ICE}` }} />
          </div>
        </At>
        <At x={1300} y={590} o={ramp(t, cp, 0.4)}><Glow color={DEEP} size={28}>a tidy, comfortable picture</Glow></At>
        <At x={1300} y={660} o={ramp(t, sub, 0.4)}><Chip color={WARM} size={28}>a substitute, accepted</Chip></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: part2 }}>
        <At x={960} y={140} o={part2}><Glow color={CHALK} size={38} serif>the same with emptiness</Glow></At>
        {[{ at: ne, txt: "so nothing exists", col: DIM }, { at: am, txt: "so it is all mind", col: VIOLET }, { at: ga, txt: "so there is a ground after all", col: DEEP }].map((r, i) => (
          <React.Fragment key={i}>
            <At x={480 + i * 480} y={440} s={pop(t, fps, r.at)}>
              <div style={{ width: 230, height: 110, borderRadius: 50, background: `${r.col}44`, border: `3px solid ${r.col}`, boxShadow: `0 0 20px ${r.col}66` }} />
            </At>
            <StruckChip x={480 + i * 480} y={440} at={r.at} strikeAt={tell + i * 0.2} color={r.col} size={24}>{r.txt}</StruckChip>
          </React.Fragment>
        ))}
        <At x={960} y={600} o={ramp(t, rp, 0.4)}><Glow color={DIM} size={32}>each a resting place · a something first</Glow></At>
        <At x={960} y={760} o={ramp(t, tell, 0.4)}><Glow color={WARM} size={44} serif>the comfort is the tell</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const NoFloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nf = c("a new floor", 0.4), rep = c("repeatable at any moment"), req = c("no floor was ever required");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 610, top: 600, width: 700, height: 70, borderRadius: 8, border: `3px solid ${DEEP}`, background: `${DEEP}2a`,
        opacity: ramp(t, nf, 0.4) * (1 - ramp(t, nf + 1.2, 0.8)) }} />
      <At x={960} y={540} o={ramp(t, nf, 0.4) * (1 - ramp(t, nf + 1.2, 0.8))}><Glow color={DEEP} size={30}>a new floor?</Glow></At>
      {[0, 1, 2].map((k) => {
        const per = 2.2;
        const p = t > rep ? ((t - rep + k * (per / 3)) % per) / per : 0;
        return <Ring key={k} x={960} y={400} p={p} r0={40} r1={340} color={[GOLD, TEAL, VIOLET][k]} />;
      })}
      <At x={960} y={400} s={pop(t, fps, rep)}><Orb size={80} color={GOLD} /></At>
      <At x={960} y={150} o={ramp(t, rep, 0.4)}><Glow color={CHALK} size={36}>a demonstration, repeatable at any moment</Glow></At>
      <div style={{ position: "absolute", top: 720, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="no floor was ever required" at={req} size={70} />
      </div>
    </AbsoluteFill>
  );
};

const EpilogueScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lb = c("Looking back", 0.4), ni = c("was never incomplete"), view = c("the view used to understand it"), why = c("an ultimate why is released");
  const light = c("perfectly, and lightly"), add = c("Nothing has been added"), rem = c("Nothing has been removed"), own = c("exist from its own side");
  const trans = c("has not been transcended"), und = c("It has been understood");
  const sync = ramp(t, why, 2.0);
  const part2 = ramp(t, light - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960} y={130} o={ramp(t, lb, 0.4)}><Glow color={CHALK} size={38} serif>looking back</Glow></At>
        <At x={700} y={430} s={pop(t, fps, ni - 0.3)}><Pendulum phase={0} color={TEAL} label="experience · complete" /></At>
        <At x={1220} y={430} s={pop(t, fps, view)}><Pendulum phase={2.4 * (1 - sync)} color={GOLD} label="view · catching up" /></At>
        <At x={960} y={760} o={ramp(t, why + 1.0, 0.5)}><Glow color={GOLD} size={38} serif>in step</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: part2 * (1 - ramp(t, trans - 0.3, 0.6)) }}>
        <At x={560} y={380} s={pop(t, fps, light)}><Sun size={150} rot={t * 10} /></At>
        <At x={960} y={380} s={pop(t, fps, light + 0.3)}><Hand size={150} /></At>
        <At x={1360} y={380} s={pop(t, fps, light + 0.6)}><Orb size={110} color={TEAL} /></At>
        <At x={960} y={170} o={ramp(t, light, 0.4)}><Glow color={CHALK} size={36} serif>ordinary life, working perfectly and lightly</Glow></At>
        <At x={560} y={600} o={ramp(t, add, 0.4)}><Chip color={GREEN} size={30}>nothing added</Chip></At>
        <At x={1360} y={600} o={ramp(t, rem, 0.4)}><Chip color={ICE} size={30}>nothing removed, except</Chip></At>
        <StruckChip x={960} y={720} at={own - 0.6} strikeAt={own + 0.6} color={WARM} size={30}>the demand to exist from its own side</StruckChip>
      </AbsoluteFill>
      <At x={960} y={420} o={ramp(t, trans, 0.5)}><Glow color={DIM} size={36} serif>not transcended</Glow></At>
      <Ring x={960} y={500} p={ramp(t, und, 2)} r0={60} r1={480} color={GOLD} />
      <div style={{ position: "absolute", top: 520, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="understood" at={und} size={110} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["lantern", 0], ["search", c("Take two searches", 0.6)], ["emerge", c("emergence and epiphenomenon", 0.6)], ["nirvana", c("the boldest claim", 0.6)],
    ["synth", c("this book's own reading", 0.6)], ["caution", c("Richard Feynman", 0.6)], ["epilogue", c("Looking back", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Take two searches", 0.9)], <LanternScene />],
    [S("Take two searches", "call these one truth"), <SearchesScene />],
    [S("call these one truth", "emergence and epiphenomenon"), <ResonanceScene />],
    [S("emergence and epiphenomenon", "removes the base altogether"), <EmergenceScene />],
    [S("removes the base altogether", "the boldest claim"), <NoBaseScene />],
    [S("the boldest claim", "sharing the nature"), <NirvanaScene />],
    [S("sharing the nature", "this book's own reading"), <RecognitionScene />],
    [S("this book's own reading", "Richard Feynman"), <SynthesisScene />],
    [S("Richard Feynman", "a new floor"), <FeynmanScene />],
    [S("a new floor", "Looking back"), <NoFloorScene />],
    [S("Looking back", null), <EpilogueScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
