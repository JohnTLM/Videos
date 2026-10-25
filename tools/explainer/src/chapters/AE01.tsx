// Anatta to Emptiness, Chapter 1: The Starting Point: The Journey Through Presence. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Every contemplative journey begins", "begins with suffering", "a search for meaning", "something simpler, and stranger", "It began with presence",
  "Long before any philosophy", "an isolated observer softened", "The mind grew quieter", "the very fabric of life",
  "natural to assume", "from distraction to stillness", "from fragments to unity", "from duality to non-duality",
  "presence belonged to someone", "my awareness, my experience", "the ownership dissolved", "open and seamless", "observer and observed faded",
  "a single bright field",
  "Many traditions call this", "pure awareness", "mirror-like clarity", "boundless consciousness", "These words are not mistaken",
  "a subtle danger", "the new observer", "a new and larger Self", "The centre is gone", "the background remains",
  "hard to notice", "openness, clarity and freedom", "The search seems to be over",
  "The turning point", "Does presence itself inherently exist", "Inherently means on its own", "needing nothing else",
  "almost absurd", "the ground of everything", "allows no exceptions", "If the self can be examined", "why not awareness", "why not presence",
  "the search changed direction", "exist in its own right", "Space and time", "Cause and relation", "Even dependent arising itself",
  "one realization must be honoured", "there is no self", "the inner observer collapses", "seer, seeing and seen", "simply vivid seeing",
  "This needs no philosophy", "complete in its own right",
  "Later came moments", "as total exertion", "Walking was simply walking", "Hearing was simply hearing", "spent itself completely",
  "these openings came and went", "Old habits of thought returned", "separate things in independent space", "The experience had become free",
  "The view had not",
  "the author's framing", "fallen out of step", "does not add to the experience", "the same solidifying habit",
  "move together again", "reaches into language",
  "Nothing ever needed inherent existence", "just as it is",
];

// this series: deeper golds and indigos
const DEEP = "#D9A441", INDIGO = "#7A78F0";
const M = {
  open: { a: "rgba(60,50,140,0.5)", b: "rgba(180,130,50,0.4)", c: "rgba(30,80,120,0.3)" },
  practice: { a: "rgba(40,110,140,0.5)", b: "rgba(170,130,60,0.35)", c: "rgba(70,60,150,0.35)" },
  presence: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(40,100,130,0.3)" },
  danger: { a: "rgba(110,50,110,0.5)", b: "rgba(60,50,140,0.45)", c: "rgba(170,110,50,0.3)" },
  question: { a: "rgba(40,50,140,0.55)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,130,0.3)" },
  anatta: { a: "rgba(170,130,60,0.45)", b: "rgba(70,50,150,0.45)", c: "rgba(40,110,130,0.3)" },
  exertion: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(60,150,130,0.35)" },
  desync: { a: "rgba(110,50,120,0.45)", b: "rgba(40,100,140,0.45)", c: "rgba(170,120,60,0.3)" },
};

// ---------------------------------------------------------------- drawings
/** A head in profile, facing right; `dot` shows the imagined observer behind the eyes. */
const Head: React.FC<{ dot: number; o?: number; dash?: boolean; soft?: number }> = ({ dot, o = 1, dash, soft = 0 }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o, filter: soft > 0.05 ? `blur(${soft * 3}px)` : undefined }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4 + 6 * (1 - soft) * 0} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
    <circle cx={160} cy={140} r={16 + 4 * Math.sin(dot * 6)} fill={DEEP} opacity={dot} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
  </svg>
);

const Book: React.FC<{ color?: string }> = ({ color = INDIGO }) => (
  <svg width={190} height={140} viewBox="0 0 190 140" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M95 30 Q55 10 12 22 L12 122 Q55 110 95 130 Q135 110 178 122 L178 22 Q135 10 95 30 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <line x1={95} y1={30} x2={95} y2={130} stroke={color} strokeWidth={3} />
    {[0, 1, 2].map((i) => <line key={i} x1={30} y1={45 + i * 20} x2={80} y2={40 + i * 20} stroke={CHALK} strokeWidth={2} opacity={0.5} />)}
    {[0, 1, 2].map((i) => <line key={i + 3} x1={110} y1={40 + i * 20} x2={160} y2={45 + i * 20} stroke={CHALK} strokeWidth={2} opacity={0.5} />)}
  </svg>
);

const Cloud: React.FC<{ t: number }> = ({ t }) => (
  <svg width={200} height={190} viewBox="0 0 200 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE})` }}>
    <path d="M40 90 Q10 88 18 62 Q22 36 52 42 Q62 12 98 18 Q132 10 142 42 Q178 40 180 68 Q184 94 152 92 Z" fill={`${INDIGO}44`} stroke={ICE} strokeWidth={4} />
    {Array.from({ length: 6 }).map((_, i) => {
      const y = 100 + ((t * 120 + i * 37) % 80);
      return <line key={i} x1={40 + i * 22} y1={y} x2={36 + i * 22} y2={y + 16} stroke={ICE} strokeWidth={3} strokeLinecap="round" opacity={0.8} />;
    })}
  </svg>
);

const Compass: React.FC<{ rot: number }> = ({ rot }) => (
  <svg width={180} height={180} viewBox="-90 -90 180 180" style={{ filter: `drop-shadow(0 0 10px ${DEEP})` }}>
    <circle r={78} fill={`${DEEP}22`} stroke={DEEP} strokeWidth={4} />
    <g transform={`rotate(${rot})`}><path d="M0 -60 L14 0 L0 60 L-14 0 Z" fill={DEEP} /><path d="M0 -60 L14 0 L-14 0 Z" fill={ROSE} /></g>
    <circle r={6} fill={CHALK} />
  </svg>
);

const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);
const Eye: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
);
const Note: React.FC = () => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={GOLD} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={GOLD} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={GOLD} />
  </svg>
);
const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={130} height={100} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${color}33`} stroke={color} strokeWidth={3.5} />
    <circle cx={20} cy={84} r={6} fill={color} /><circle cx={8} cy={96} r={3.5} fill={color} />
  </svg>
);
const Walker: React.FC<{ t: number; color?: string }> = ({ t, color = CHALK }) => (
  <svg width={120} height={220} viewBox="0 0 120 220">
    <circle cx={60} cy={30} r={22} fill="none" stroke={color} strokeWidth={5} />
    <path d={`M60 55 L60 130 M60 75 L${30 + 10 * Math.sin(t * 5)} 110 M60 75 L${90 - 10 * Math.sin(t * 5)} 110 M60 130 L${35 + 12 * Math.sin(t * 5)} 200 M60 130 L${85 - 12 * Math.sin(t * 5)} 200`}
      stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);
const Mirror: React.FC = () => (
  <svg width={110} height={140} viewBox="0 0 110 140" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <ellipse cx={55} cy={60} rx={42} ry={54} fill="rgba(170,220,240,0.2)" stroke={ICE} strokeWidth={4} />
    <line x1={35} y1={35} x2={60} y2={20} stroke="#FFFFFF" strokeWidth={4} opacity={0.6} strokeLinecap="round" />
    <line x1={55} y1={114} x2={55} y2={136} stroke={ICE} strokeWidth={5} />
  </svg>
);
/** A glowing field (how presence felt). Drawn only so it can later be questioned and removed. */
const Field: React.FC<{ w: number; h: number; o: number; color?: string }> = ({ w, h, o, color = DEEP }) => (
  <div style={{ width: w, height: h, borderRadius: "50%", opacity: o, background: `radial-gradient(ellipse, ${color}66, ${color}22 45%, transparent 70%)` }} />
);
/** A slab drawn as a supposed ground under everything. Shown only to be dissolved. */
const Slab: React.FC<{ w: number; crumble: number; label?: string; color?: string }> = ({ w, crumble, label, color = DEEP }) => {
  const n = 14;
  return (
    <div style={{ position: "relative", width: w, height: 70 }}>
      {Array.from({ length: n }).map((_, i) => {
        const d = Math.max(0, crumble * 1.6 - rand(i) * 0.6);
        return <div key={i} style={{ position: "absolute", left: (i * w) / n, top: 0, width: w / n + 1, height: 70, background: `${color}55`,
          borderTop: `3px solid ${color}`, opacity: Math.max(0, 1 - d), transform: `translateY(${d * 80}px) rotate(${d * (rand(i + 3) - 0.5) * 80}deg)` }} />;
      })}
      {label && <div style={{ position: "absolute", width: "100%", top: 14, opacity: 1 - crumble }}><Glow color={color} size={30}>{label}</Glow></div>}
    </div>
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
const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60"><DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.4)} color={color} width={7} len={80} /></svg>
  );
};

const Pendulum: React.FC<{ phase: number; color: string; label: string }> = ({ phase, color, label }) => {
  const { t } = useT();
  const a = Math.sin(t * 2.2 + phase) * 28;
  return (
    <div style={{ position: "relative", width: 260, height: 380, textAlign: "center" }}>
      <svg width={260} height={340} viewBox="0 0 260 340" style={{ overflow: "visible" }}>
        <line x1={40} y1={10} x2={220} y2={10} stroke={DIM} strokeWidth={6} strokeLinecap="round" />
        <g transform={`rotate(${a} 130 10)`}>
          <line x1={130} y1={10} x2={130} y2={260} stroke={color} strokeWidth={4} />
          <circle cx={130} cy={280} r={30} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
        </g>
      </svg>
      <Glow color={color} size={34}>{label}</Glow>
    </div>
  );
};

const Centered: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pres = c("It began with presence");
  const fade = ramp(t, pres - 0.2, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, c("Every contemplative journey begins", 0.3), 0.6)}><Glow color={CHALK} size={42} serif>every journey begins with a question</Glow></At>
      <At x={960} y={430} s={pop(t, fps, c("Every contemplative journey begins") + 0.4)} o={1 - fade}>
        <div style={{ fontFamily: SERIF, fontWeight: 700, fontSize: 260, color: INDIGO, textShadow: `0 0 40px ${INDIGO}` }}>?</div>
      </At>
      <At x={480} y={470} s={pop(t, fps, c("begins with suffering"))} o={1 - fade}><Cloud t={t} /><Glow color={ICE} size={32}>suffering</Glow></At>
      <At x={1440} y={470} s={pop(t, fps, c("a search for meaning"))} o={1 - fade}><Compass rot={Math.sin(t * 1.5) * 40} /><Glow color={DEEP} size={32} style={{ marginTop: 8 }}>meaning</Glow></At>
      <At x={960} y={730} o={ramp(t, c("something simpler, and stranger"), 0.5) * (1 - fade)}><Chip color={VIOLET} size={34}>something simpler · and stranger</Chip></At>
      <At x={960} y={480} o={ramp(t, pres, 1.2)}><Field w={900} h={520} o={1} /></At>
      <At x={960} y={480} s={pop(t, fps, pres + 0.2)}><Orb size={150} color={DEEP} /></At>
      <Centered top={640}><Reveal text="presence" at={pres + 0.3} size={100} /></Centered>
    </AbsoluteFill>
  );
};

const PracticeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const soft = ramp(t, c("an isolated observer softened"), 1.6);
  const quiet = ramp(t, c("The mind grew quieter"), 1.8);
  const fab = c("the very fabric of life");
  const xs = Array.from({ length: 60 }, (_, i) => 1060 + i * 11);
  return (
    <AbsoluteFill>
      <At x={360} y={230} s={pop(t, fps, c("Long before any philosophy", 0.3))} o={0.4 + 0.6 * (1 - ramp(t, c("Long before any philosophy") + 1.4, 0.8))}><Book /></At>
      <At x={360} y={340} o={ramp(t, c("Long before any philosophy"), 0.5)}><Glow color={DIM} size={30}>before any philosophy</Glow></At>
      <At x={640} y={500} s={pop(t, fps, c("an isolated observer softened", 0.5))}><Head dot={1 - soft * 0.6} dash={soft > 0.5} soft={soft} /></At>
      <At x={640} y={720} o={ramp(t, c("an isolated observer softened"), 0.5)}><Glow color={CHALK} size={32}>the observer softens</Glow></At>
      <Svg style={{ opacity: ramp(t, c("The mind grew quieter", 0.4), 0.5) }}>
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${380 + (1 - quiet) * 60 * Math.sin(x / 9 + t * 9) * Math.sin(x / 41)}`).join(" ")} fill="none" stroke={TEAL} strokeWidth={5}
          style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} />
      </Svg>
      <At x={1390} y={470} o={ramp(t, c("The mind grew quieter"), 0.5)}><Glow color={TEAL} size={32}>the mind grows quiet</Glow></At>
      <Svg style={{ opacity: ramp(t, fab, 0.8) }}>
        {Array.from({ length: 7 }).map((_, k) => (
          <React.Fragment key={k}>
            <DrawPath d={`M1060 ${600 + k * 28} Q 1300 ${580 + k * 28 + 20 * Math.sin(t + k)} 1720 ${600 + k * 28}`} p={ramp(t, fab + k * 0.1, 1)} color={k % 2 ? DEEP : INDIGO} width={4} len={800} />
            <DrawPath d={`M${1090 + k * 90} 580 L${1090 + k * 90} 790`} p={ramp(t, fab + 0.4 + k * 0.1, 1)} color={k % 2 ? INDIGO : GOLD} width={4} len={260} />
          </React.Fragment>
        ))}
      </Svg>
      <At x={1390} y={830} o={ramp(t, fab + 0.6, 0.5)}><Glow color={GOLD} size={32}>the fabric of experience</Glow></At>
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const steps = [
    { at: c("from distraction to stillness"), a: "distraction", b: "stillness", col: TEAL },
    { at: c("from fragments to unity"), a: "fragments", b: "unity", col: DEEP },
    { at: c("from duality to non-duality"), a: "duality", b: "non-duality", col: VIOLET },
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("natural to assume", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>the deepening seemed to be the path</Glow></At>
      <Svg>
        <DrawPath d="M260 800 L620 800 L620 620 L980 620 L980 440 L1340 440 L1340 260 L1680 260" p={ramp(t, c("natural to assume"), 2.4)} color={DEEP} width={6} len={2600} />
      </Svg>
      {steps.map((s, i) => {
        const p = ramp(t, s.at + 0.6, 0.8);
        return (
          <React.Fragment key={i}>
            <At x={440 + i * 360} y={740 - i * 180} s={pop(t, fps, s.at)}>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <Chip color={DIM} size={28} style={{ opacity: 1 - p * 0.6 }}>{s.a}</Chip>
                <span style={{ fontSize: 34, color: CHALK, opacity: p }}>→</span>
                <Chip color={s.col} size={30} style={{ opacity: p }}>{s.b}</Chip>
              </div>
            </At>
          </React.Fragment>
        );
      })}
      <At x={1680} y={200} o={ramp(t, c("from duality to non-duality") + 1.2, 0.6)}><Orb size={70} color={DEEP} /></At>
    </AbsoluteFill>
  );
};

const OwnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dis = ramp(t, c("the ownership dissolved"), 1.4);
  const open = ramp(t, c("open and seamless"), 1.6);
  const merge = ramp(t, c("observer and observed faded") + 0.3, 1.6);
  const field = ramp(t, c("a single bright field"), 1.4);
  return (
    <AbsoluteFill>
      <At x={760} y={460} o={1 - ramp(t, c("open and seamless"), 1.0)} s={pop(t, fps, c("presence belonged to someone", 0.4))}><Head dot={1} /></At>
      <At x={760 + 20} y={400} s={0.5 + 3.6 * open + 0.2 * dis}><Orb size={90} color={DEEP} /></At>
      <At x={1280} y={300} o={ramp(t, c("my awareness, my experience"), 0.4)}>
        <div style={{ position: "relative" }}><Chip color={DEEP} size={34}>my awareness</Chip><Strike at={c("the ownership dissolved") + 0.2} /></div>
      </At>
      <At x={1300} y={400} o={ramp(t, c("my awareness, my experience") + 0.6, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={DEEP} size={34}>my experience</Chip><Strike at={c("the ownership dissolved") + 0.5} /></div>
      </At>
      <At x={960} y={460} o={field}><Field w={1300} h={680} o={1} /></At>
      <At x={560 + 330 * merge} y={720} o={ramp(t, c("observer and observed faded", 0.4), 0.4) * (1 - merge * 0.85)}><Chip color={GOLD} size={34}>observer</Chip></At>
      <At x={1360 - 330 * merge} y={720} o={ramp(t, c("observer and observed faded", 0.2), 0.4) * (1 - merge * 0.85)}><Chip color={TEAL} size={34}>observed</Chip></At>
      <At x={960} y={160} o={ramp(t, c("open and seamless"), 0.5)}><Glow color={GOLD} size={40} serif>open · seamless · non-dual</Glow></At>
      <At x={960} y={820} o={ramp(t, c("a single bright field") + 0.3, 0.5)}><Glow color="#FFF3D1" size={40} serif>one bright field?</Glow></At>
    </AbsoluteFill>
  );
};

const TradScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const items = [
    { at: c("pure awareness"), label: "pure awareness", icon: <Orb size={90} color={ICE} />, col: ICE },
    { at: c("mirror-like clarity"), label: "mirror-like clarity", icon: <Mirror />, col: TEAL },
    { at: c("boundless consciousness"), label: "boundless consciousness", icon: <Orb size={110} color={INDIGO} />, col: INDIGO },
  ];
  const ok = c("These words are not mistaken");
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("Many traditions call this", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>many traditions call this the realization</Glow></At>
      {items.map((it, i) => (
        <At key={i} x={460 + i * 500} y={420} s={pop(t, fps, it.at - 0.1)}>
          <div style={{ height: 150, display: "flex", alignItems: "center", justifyContent: "center" }}>{it.icon}</div>
          <Chip color={it.col} size={32}>{it.label}</Chip>
          <div style={{ marginTop: 10 }}><Tick at={ok + 0.3 + i * 0.25} /></div>
        </At>
      ))}
      <At x={960} y={760} o={ramp(t, ok, 0.5)}><Chip color={GREEN} size={36}>not mistaken · real changes</Chip></At>
    </AbsoluteFill>
  );
};

const DangerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const obs = c("the new observer"), self = c("a new and larger Self"), centre = c("The centre is gone"), bg = c("the background remains");
  const headGone = ramp(t, obs - 0.6, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("a subtle danger", 0.3), 0.5)}><Glow color={WARM} size={46} serif>a subtle danger</Glow></At>
      <At x={960} y={500} o={ramp(t, centre + 0.4, 1.0)}>
        <div style={{ width: 1500, height: 460, borderRadius: 30, border: `3px solid ${DEEP}`, background: `linear-gradient(180deg, ${DEEP}22, ${INDIGO}33)`,
          boxShadow: `0 0 50px ${DEEP}55, inset 0 0 60px ${DEEP}33` }} />
      </At>
      <At x={560} y={470} s={pop(t, fps, c("a subtle danger") + 0.4)} o={1 - headGone}><Head dot={1 - headGone} /></At>
      <At x={560} y={470} s={pop(t, fps, obs)}><Eye color={DEEP} /></At>
      <At x={560} y={570} o={ramp(t, obs + 0.3, 0.4)}><Glow color={DEEP} size={30}>presence · the new observer</Glow></At>
      <At x={1180} y={420} o={between(t, self - 0.6, self + 2.2)}><div style={{ position: "relative" }}><Chip color={DIM} size={34}>self</Chip><Strike at={self + 0.1} /></div></At>
      <At x={1400} y={480} s={pop(t, fps, self + 0.4) * (1 + 0.6 * ramp(t, self + 0.6, 1.2))}><Chip color={GOLD} size={42}>Self</Chip></At>
      <At x={960} y={600} o={ramp(t, centre, 0.4) * (1 - ramp(t, centre + 0.6, 0.8))}><Orb size={50} color={WARM} /></At>
      <At x={960} y={660} o={ramp(t, centre + 0.3, 0.5)}><Glow color={CHALK} size={32}>centre gone</Glow></At>
      <At x={960} y={800} o={ramp(t, bg, 0.5)}><Glow color={DEEP} size={42} serif>the background remains</Glow></At>
    </AbsoluteFill>
  );
};

const CompleteScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const items = ["openness", "clarity", "freedom"];
  const over = c("The search seems to be over");
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, c("hard to notice", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>hard to notice · it feels complete</Glow></At>
      {items.map((w, i) => (
        <At key={i} x={720} y={360 + i * 120} o={ramp(t, c("openness, clarity and freedom") + i * 0.4, 0.4)}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}><Tick at={c("openness, clarity and freedom") + i * 0.4 + 0.2} color={DEEP} /><Glow color={GOLD} size={46} serif>{w}</Glow></div>
        </At>
      ))}
      <At x={1300} y={480} s={pop(t, fps, over)} r={-20 * ramp(t, over + 0.5, 1)}><Lens /></At>
      <At x={1300} y={640} o={ramp(t, over + 0.4, 0.5)}><Chip color={DIM} size={32}>search over?</Chip></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Does presence itself inherently exist");
  const own = c("Inherently means on its own");
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, c("The turning point", 0.4), 0.4) }}>
        <DrawPath d="M300 230 L760 230 Q900 230 900 120" p={ramp(t, c("The turning point", 0.3), 1.2)} color={INDIGO} width={7} len={800} />
        <path d="M880 140 L900 100 L922 140" fill="none" stroke={INDIGO} strokeWidth={7} opacity={ramp(t, c("The turning point") + 0.8, 0.3)} />
      </Svg>
      <At x={520} y={290} o={ramp(t, c("The turning point"), 0.5)}><Glow color={INDIGO} size={30}>the turning point · a question</Glow></At>
      <Centered top={330}><Reveal text="Does presence itself inherently exist?" at={q} size={74} color={DEEP} /></Centered>
      <At x={760} y={620} s={pop(t, fps, own)}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Orb size={110} color={DEEP} />
          <div style={{ width: 200, height: 26, marginTop: 6, borderRadius: 6, background: `${INDIGO}66`, border: `2px solid ${INDIGO}` }} />
        </div>
      </At>
      <At x={1240} y={580} o={ramp(t, own + 0.4, 0.5)}><Chip color={DEEP} size={34}>on its own · from its own side</Chip></At>
      <At x={1240} y={680} o={ramp(t, c("needing nothing else"), 0.5)}><Chip color={INDIGO} size={34}>needing nothing else</Chip></At>
    </AbsoluteFill>
  );
};

const ExamineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s1 = c("If the self can be examined"), s2 = c("why not awareness"), s3 = c("why not presence");
  const lx = interpolate3(t, [s1, s2, s3], [520, 960, 1400]);
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("almost absurd", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>at first, almost absurd</Glow></At>
      <At x={960} y={720} s={pop(t, fps, c("the ground of everything", 0.4))}><Slab w={1400} crumble={0} label="presence · the ground of everything?" /></At>
      <At x={960} y={230} o={ramp(t, c("allows no exceptions"), 0.5)}><Chip color={ICE} size={34}>no exceptions</Chip></At>
      {[["self", ROSE, s1], ["awareness", TEAL, s2], ["presence", DEEP, s3]].map(([w, col, at], i) => (
        <At key={i} x={520 + i * 440} y={460} s={pop(t, fps, (at as number) - 0.2)}><Glow color={col as string} size={56} serif>{w as string}</Glow></At>
      ))}
      <At x={lx + 40} y={430} o={ramp(t, s1 - 0.3, 0.4)}><Lens /></At>
      {[s2, s3].map((at, i) => <At key={i} x={740 + i * 440} y={460} o={ramp(t, at, 0.4)}><Glow color={CHALK} size={44}>?</Glow></At>)}
    </AbsoluteFill>
  );
};

/** Piecewise ease between key times. */
function interpolate3(t: number, ts: number[], vs: number[]) {
  if (t <= ts[0]) return vs[0];
  for (let i = 1; i < ts.length; i++) {
    if (t < ts[i]) return vs[i - 1] + (vs[i] - vs[i - 1]) * ramp(t, ts[i] - 0.6, 0.6);
  }
  return vs[vs.length - 1];
}

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const own = c("exist in its own right");
  const items: [string, string, number][] = [
    ["awareness", TEAL, own + 0.6], ["luminosity", GOLD, own + 1.1], ["space", ICE, c("Space and time")], ["time", INDIGO, c("Space and time") + 0.4],
    ["cause", ROSE, c("Cause and relation")], ["relation", VIOLET, c("Cause and relation") + 0.4], ["dependent arising", GREEN, c("Even dependent arising itself")],
  ];
  const crumble = ramp(t, c("Even dependent arising itself") + 1.2, 2.0);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("the search changed direction", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>not deeper states · does anything exist in its own right?</Glow></At>
      {items.map(([w, col, at], i) => (
        <At key={i} x={360 + (i % 4) * 400} y={320 + Math.floor(i / 4) * 180 + (i >= 4 ? 0 : 0)} s={pop(t, fps, at)}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}><Chip color={col} size={36}>{w}</Chip><Glow color={CHALK} size={40}>?</Glow></div>
        </At>
      ))}
      <At x={960} y={720} o={ramp(t, own, 0.6)}><Slab w={1400} crumble={crumble} label="presence · the ground?" /></At>
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const col = c("the inner observer collapses");
  const gone = ramp(t, col + 0.3, 1.2);
  const triad = c("seer, seeing and seen");
  const tri = ramp(t, triad + 1.4, 1.0);
  const vivid = c("simply vivid seeing");
  const phil = c("This needs no philosophy");
  const done = c("complete in its own right");
  const part2 = vivid - 0.2;
  return (
    <AbsoluteFill>
      <Centered top={70}><Reveal text="anatta" at={c("one realization must be honoured") + 0.6} size={100} /></Centered>
      <At x={960} y={215} o={ramp(t, c("there is no self"), 0.5)}><Glow color={CHALK} size={38}>no self</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - ramp(t, part2, 0.5) }}>
        <At x={480} y={500} s={pop(t, fps, c("there is no self"))}><Head dot={1 - gone} dash={gone > 0.5} o={1 - gone * 0.5} /></At>
        {[["seer", GOLD], ["seeing", TEAL], ["seen", VIOLET]].map(([w, cl], i) => (
          <At key={i} x={980 + i * 280} y={480 + (i === 1 ? -60 : 40) + tri * 200 * (rand(i) - 0.3)} s={pop(t, fps, triad + i * 0.3)} o={1 - tri} blur={tri * 10}>
            <Chip color={cl} size={36}>{w}</Chip>
          </At>
        ))}
        <Svg style={{ opacity: ramp(t, triad + 0.8, 0.4) * (1 - tri) }}>
          <line x1={1040} y1={470} x2={1200} y2={420} stroke={DIM} strokeWidth={3} /><line x1={1320} y1={420} x2={1480} y2={500} stroke={DIM} strokeWidth={3} />
        </Svg>
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        <At x={560} y={440} s={pop(t, fps, vivid)}><Eye /></At>
        <At x={960} y={430} s={pop(t, fps, vivid + 0.5)}><Note /></At>
        <At x={1360} y={440} s={pop(t, fps, vivid + 1.0)}><Thought /></At>
        <At x={960} y={560} o={ramp(t, vivid + 1.4, 0.5)}><Glow color={TEAL} size={36}>seeing · hearing · thinking · no centre</Glow></At>
        <At x={560} y={720} s={pop(t, fps, phil)}><div style={{ position: "relative" }}><Book color={DIM} /></div></At>
        <Crossed x={560} y={720} at={phil + 0.5} size={70} />
        <At x={1360} y={720} o={ramp(t, done, 0.5)}>
          <svg width={180} height={180} viewBox="-90 -90 180 180" style={{ overflow: "visible" }}>
            <DrawPath d="M0 -70 A70 70 0 1 1 -0.1 -70" p={ramp(t, done, 1.0)} color={DEEP} width={8} len={450} />
          </svg>
        </At>
        <At x={1360} y={825} o={ramp(t, done + 0.6, 0.4)}><Glow color={DEEP} size={30}>complete in its own right</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const walk = c("Walking was simply walking"), hear = c("Hearing was simply hearing"), spent = c("spent itself completely");
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("Later came moments", 0.3), 0.5)}><Glow color={CHALK} size={36}>later came moments...</Glow></At>
      <Centered top={190}><Reveal text="total exertion" at={c("as total exertion")} size={92} /></Centered>
      <At x={560} y={520} s={pop(t, fps, walk)}><Walker t={t} color={GOLD} /></At>
      <At x={560} y={700} o={ramp(t, walk + 0.4, 0.5)}><Glow color={GOLD} size={34} serif>walking, simply walking</Glow></At>
      <At x={1360} y={500} s={pop(t, fps, hear)}><Note /></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={1360} y={500} p={((t - hear) * 0.6 + i / 3) % 1 * ramp(t, hear, 0.2)} r0={50} r1={200} color={TEAL} />)}
      <At x={1360} y={700} o={ramp(t, hear + 0.4, 0.5)}><Glow color={TEAL} size={34} serif>hearing, simply hearing</Glow></At>
      <Ring x={560} y={520} p={ramp(t, spent, 1.6)} r0={100} r1={400} color={DEEP} width={5} />
      <Ring x={1360} y={500} p={ramp(t, spent + 0.3, 1.6)} r0={100} r1={400} color={DEEP} width={5} />
      <At x={960} y={810} o={ramp(t, spent + 0.3, 0.5)}><Chip color={DEEP} size={34}>each event, whole in being what it is</Chip></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cw = c("these openings came and went");
  const open = 0.5 + 0.5 * Math.sin((t - cw) * 2.2);
  const hab = c("Old habits of thought returned");
  const sep = c("separate things in independent space");
  const free = c("The experience had become free"), not = c("The view had not");
  return (
    <AbsoluteFill>
      <At x={500} y={400} o={ramp(t, cw - 0.2, 0.5)}>
        <div style={{ width: 160 + 200 * open, height: 160 + 200 * open, borderRadius: "50%", border: `4px solid ${DEEP}`, background: `radial-gradient(circle, ${DEEP}${open > 0.5 ? "55" : "22"}, transparent 70%)`,
          boxShadow: `0 0 ${20 + 40 * open}px ${DEEP}` }} />
      </At>
      <At x={500} y={660} o={ramp(t, cw, 0.5)}><Glow color={DEEP} size={34}>openings come and go</Glow></At>
      {Array.from({ length: 6 }).map((_, i) => (
        <At key={i} x={1150 + (i % 3) * 190} y={300 + Math.floor(i / 3) * 190} s={pop(t, fps, hab + i * 0.15)}>
          <div style={{ width: 130, height: 130, borderRadius: 10, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.2)", display: "flex",
            alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 28, color: CHALK }}>
            {["thing", "space", "thing", "time", "thing", "cause"][i]}
          </div>
        </At>
      ))}
      <At x={1340} y={170} o={ramp(t, hab, 0.5)}><Glow color={CHALK} size={34}>old habits of thought</Glow></At>
      <At x={1340} y={600} o={ramp(t, sep, 0.5)}><Glow color={DIM} size={30}>separate things · independent space and time</Glow></At>
      <At x={500} y={780} o={ramp(t, free, 0.5)}><Chip color={TEAL} size={38}>experience: free</Chip></At>
      <At x={1340} y={780} o={ramp(t, not, 0.5)}><Chip color={WARM} size={38}>view: not yet</Chip></At>
    </AbsoluteFill>
  );
};

const DesyncScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const step = c("fallen out of step");
  const shift = ramp(t, step, 2.5) * 2.4;
  const add = c("does not add to the experience");
  const habit = c("the same solidifying habit");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("the author's framing", 0.3), 0.5)}><Glow color={DIM} size={30}>in the author's framing</Glow></At>
      <Centered top={160}><Reveal text="out of step" at={step} size={80} /></Centered>
      <At x={560} y={480} s={pop(t, fps, c("the author's framing") + 0.3)}><Pendulum phase={0} color={TEAL} label="experience" /></At>
      <At x={1000} y={480} s={pop(t, fps, c("the author's framing") + 0.5)}><Pendulum phase={shift} color={DEEP} label="worldview" /></At>
      <At x={1480} y={380} o={ramp(t, add, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={30}>adding to experience</Chip><Strike at={add + 0.8} /></div></At>
      <At x={1400} y={600} s={pop(t, fps, habit)}><Thought color={INDIGO} /></At>
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (i / 6) * Math.PI * 2, r = 70 + 220 * ramp(t, habit + 0.6, 1.2);
        return <At key={i} x={1400 + r * Math.cos(a)} y={600 + r * 0.6 * Math.sin(a)} o={ramp(t, habit, 0.3) * (1 - ramp(t, habit + 1.2, 0.8))}>
          <div style={{ width: 40, height: 40, borderRadius: 6, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)" }} /></At>;
      })}
      <At x={1400} y={770} o={ramp(t, habit + 0.4, 0.5)}><Glow color={INDIGO} size={30}>thinking, freed of solidifying</Glow></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lang = c("reaches into language");
  const words: [string, string][] = [["language", TEAL], ["meaning", VIOLET], ["ordinary life", DEEP]];
  return (
    <AbsoluteFill>
      <At x={760} y={400} s={pop(t, fps, c("move together again", 0.4))}><Pendulum phase={0} color={TEAL} label="experience" /></At>
      <At x={1160} y={400} s={pop(t, fps, c("move together again", 0.2))}><Pendulum phase={0} color={DEEP} label="view" /></At>
      <At x={960} y={130} o={ramp(t, c("move together again"), 0.5)}><Glow color={CHALK} size={40} serif>in step again · nothing new added</Glow></At>
      {words.map(([w, col], i) => (
        <React.Fragment key={i}>
          <Flow x1={960} y1={560} x2={460 + i * 500} y2={740} color={col} p={ramp(t, lang + i * 0.4, 0.6)} />
          <At x={460 + i * 500} y={770} s={pop(t, fps, lang + i * 0.4 + 0.3)}><Chip color={col} size={36}>{w}</Chip></At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("Nothing ever needed inherent existence");
  const end = c("just as it is");
  const crumble = ramp(t, n + 0.6, 2.2);
  const things: [React.ReactNode, number][] = [[<Walker t={t} color={GOLD} />, 520], [<Note />, 960], [<Eye />, 1400]];
  return (
    <AbsoluteFill>
      <At x={960} y={700} o={ramp(t, n - 0.3, 0.5)}><Slab w={1300} crumble={crumble} label="a ground underneath?" color={INDIGO} /></At>
      {things.map(([node, x], i) => (
        <At key={i} x={x} y={470} s={pop(t, fps, n + 0.2 + i * 0.3)}>{node}</At>
      ))}
      <At x={960} y={170} o={ramp(t, n, 0.6)}><Glow color={CHALK} size={42} serif>nothing ever needed a ground</Glow></At>
      <Centered top={720}><Reveal text="just as it is" at={end} size={90} /></Centered>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["practice", c("Long before any philosophy", 0.6)], ["presence", c("presence belonged to someone", 0.6)],
    ["danger", c("a subtle danger", 0.6)], ["question", c("The turning point", 0.6)], ["anatta", c("one realization must be honoured", 0.6)],
    ["exertion", c("Later came moments", 0.6)], ["desync", c("these openings came and went", 0.6)], ["presence", c("move together again", 0.6)],
    ["question", c("Nothing ever needed inherent existence", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Long before any philosophy", 0.9)], <OpenScene />],
    [S("Long before any philosophy", "natural to assume"), <PracticeScene />],
    [S("natural to assume", "presence belonged to someone"), <PathScene />],
    [S("presence belonged to someone", "Many traditions call this"), <OwnScene />],
    [S("Many traditions call this", "a subtle danger"), <TradScene />],
    [S("a subtle danger", "hard to notice"), <DangerScene />],
    [S("hard to notice", "The turning point"), <CompleteScene />],
    [S("The turning point", "almost absurd"), <QuestionScene />],
    [S("almost absurd", "the search changed direction"), <ExamineScene />],
    [S("the search changed direction", "one realization must be honoured"), <SearchScene />],
    [S("one realization must be honoured", "Later came moments"), <AnattaScene />],
    [S("Later came moments", "these openings came and went"), <ExertionScene />],
    [S("these openings came and went", "the author's framing"), <HabitScene />],
    [S("the author's framing", "move together again"), <DesyncScene />],
    [S("move together again", "Nothing ever needed inherent existence"), <TogetherScene />],
    [S("Nothing ever needed inherent existence", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
