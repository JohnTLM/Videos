// Anatta to Emptiness, Chapter 21: At the Edges of Science. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Strike a bell", "A sound is heard", "more ordinary",
  "questions at its edge", "Rebirth", "The reported powers", "Consciousness itself", "the move away from substance",
  "Start with the bell", "we call rebirth extraordinary", "a real mechanism", "Air, eardrum, inner ear, nerve", "the same dependent pattern",
  "an intrinsic causal power",
  "was never explained", "witnessed so often", "stopped being visible", "Familiarity quietly did the work",
  "must now be true", "trade one error for another", "Emptiness does not deliver", "one specific objection", "No phenomenon, anywhere",
  "A separate question remains", "actually happen", "Removing a bad argument", "a good argument for it",
  "this harder ground of evidence", "Ian Stevenson", "memories of a previous life", "could be checked", "thousands of cases",
  "serious criticism", "neither casual nor credulous",
  "Physics, too", "Distant entangled particles", "no direct support", "every connection must have a carrier",
  "Consciousness raises a different question", "computing pioneer", "matter alone cannot account", "consciousness is fundamental",
  "outer, symbolic side", "this book's side", "loosens the grip", "parts company with him", "install one more ground",
  "The deepest meeting point", "Function does not require substance", "Gravity functions", "Language functions", "Economies, mathematics",
  "a hidden essence beneath",
  "science pauses", "what becomes of suffering", "What becomes of fear", "investigates the world", "transforms the way of being",
  "The bell still rings", "a hidden engine",
];

const AMBER = "#E0A93B", INDIGO = "#7B78FF";

const M = {
  bell: { a: "rgba(170,125,45,0.5)", b: "rgba(60,50,150,0.45)", c: "rgba(30,90,120,0.3)" },
  edge: { a: "rgba(60,50,150,0.55)", b: "rgba(150,110,45,0.38)", c: "rgba(40,70,120,0.3)" },
  chain: { a: "rgba(40,100,140,0.5)", b: "rgba(170,125,50,0.4)", c: "rgba(80,60,150,0.3)" },
  caution: { a: "rgba(110,50,120,0.45)", b: "rgba(50,60,140,0.45)", c: "rgba(160,120,50,0.3)" },
  evidence: { a: "rgba(40,110,110,0.5)", b: "rgba(150,115,50,0.4)", c: "rgba(60,60,150,0.35)" },
  mind: { a: "rgba(90,50,160,0.55)", b: "rgba(170,110,50,0.38)", c: "rgba(40,90,140,0.3)" },
  function: { a: "rgba(180,130,50,0.5)", b: "rgba(50,60,160,0.45)", c: "rgba(40,130,120,0.3)" },
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

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, o = 1, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4) * o}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

/** A temple bell; `swing` sets its sway, rings expand from it after `hit`. */
const Bell: React.FC<{ size?: number; hit?: number }> = ({ size = 1, hit = -99 }) => {
  const { t } = useT();
  const k = t - hit;
  const sway = k > 0 ? Math.sin(k * 7) * 8 * Math.exp(-k * 0.7) : 0;
  return (
    <svg width={260 * size} height={300 * size} viewBox="0 0 260 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${AMBER})` }}>
      <line x1={130} y1={0} x2={130} y2={30} stroke={DIM} strokeWidth={6} />
      <g transform={`rotate(${sway} 130 30)`}>
        <path d="M130 30 Q70 30 65 110 L55 220 Q40 245 20 250 L240 250 Q220 245 205 220 L195 110 Q190 30 130 30 Z"
          fill={`${AMBER}44`} stroke={AMBER} strokeWidth={5} strokeLinejoin="round" />
        <line x1={50} y1={200} x2={210} y2={200} stroke={AMBER} strokeWidth={3} opacity={0.7} />
        <line x1={62} y1={120} x2={198} y2={120} stroke={AMBER} strokeWidth={3} opacity={0.7} />
      </g>
    </svg>
  );
};

const Waves: React.FC<{ x: number; y: number; at: number; color?: string }> = ({ x, y, at, color = AMBER }) => {
  const { t } = useT();
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => {
        const p = ((t - at) * 0.6 + i * 0.2) % 1;
        return t < at ? null : <Ring key={i} x={x} y={y} p={p} r0={60} r1={420} color={color} width={3} />;
      })}
    </>
  );
};

const Gears: React.FC<{ color?: string; dashed?: boolean }> = ({ color = DIM, dashed }) => {
  const { t } = useT();
  const gear = (cx: number, cy: number, r: number, dir: number) => (
    <g transform={`translate(${cx} ${cy}) rotate(${t * 40 * dir})`} fill={`${color}22`} stroke={color} strokeWidth={4} strokeDasharray={dashed ? "8 6" : undefined}>
      {Array.from({ length: 8 }).map((_, i) => <rect key={i} x={-7} y={-r - 14} width={14} height={16} transform={`rotate(${i * 45})`} />)}
      <circle r={r} /><circle r={r * 0.3} />
    </g>
  );
  return (
    <svg width={260} height={170} viewBox="0 0 260 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      {gear(80, 85, 50, 1)}{gear(185, 85, 40, -1.25)}
    </svg>
  );
};

const Child: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={90} height={150} viewBox="0 0 90 150" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <circle cx={45} cy={28} r={20} /><line x1={45} y1={48} x2={45} y2={100} /><line x1={45} y1={100} x2={28} y2={145} />
      <line x1={45} y1={100} x2={62} y2={145} /><line x1={45} y1={65} x2={18} y2={88} /><line x1={45} y1={65} x2={72} y2={88} />
    </g>
  </svg>
);

const Folder: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div style={{ width: 230, height: 170, borderRadius: 12, border: `3px solid ${color}`, background: `${color}22`, boxShadow: `0 0 20px ${color}66`,
    display: "flex", flexDirection: "column", justifyContent: "center", gap: 14, padding: "0 26px", boxSizing: "border-box" }}>
    <div style={{ fontFamily: "SourceSans", fontSize: 26, color: CHALK, textAlign: "left" }}>{label}</div>
    {[0, 1, 2].map((i) => <div key={i} style={{ height: 6, width: `${90 - i * 18}%`, borderRadius: 3, background: `${color}aa` }} />)}
  </div>
);

// ---------------------------------------------------------------- 1. the bell
const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hit = c("Strike a bell", 0) + 0.5;
  const swing = ramp(t, c("Strike a bell"), 0.5);
  return (
    <AbsoluteFill>
      <At x={760} y={420} s={pop(t, fps, c("Strike a bell", 0.4))}><Bell size={1.3} hit={hit} /></At>
      <At x={520 + 70 * Math.sin(Math.min(1, swing) * 1.6)} y={430} r={-30 + 40 * swing}>
        <svg width={200} height={40} viewBox="0 0 200 40" style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }}>
          <rect x={0} y={14} width={150} height={12} rx={6} fill="#8a6a3f" /><rect x={140} y={0} width={50} height={40} rx={10} fill={CHALK} />
        </svg>
      </At>
      <Waves x={760} y={420} at={hit} />
      <At x={1380} y={420} s={pop(t, fps, c("A sound is heard"))}>
        <svg width={170} height={220} viewBox="0 0 170 220" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
          <path d="M120 200 Q60 210 60 160 Q60 130 90 110 Q130 85 120 50 Q105 10 60 25 Q25 40 35 80" fill="none" stroke={TEAL} strokeWidth={8} strokeLinecap="round" />
          <path d="M80 80 Q90 55 70 50" fill="none" stroke={TEAL} strokeWidth={6} strokeLinecap="round" />
        </svg>
      </At>
      <At x={1380} y={600} o={ramp(t, c("A sound is heard") + 0.3, 0.4)}><Glow color={TEAL} size={36}>heard</Glow></At>
      <At x={960} y={780} o={ramp(t, c("more ordinary"), 0.5)}><Glow color={CHALK} size={48} serif>nothing more ordinary</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. at the edge
const EdgeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const e0 = c("questions at its edge", 0.4);
  const items = [
    { at: c("Rebirth"), x: 1420, y: 230, label: "rebirth", col: ROSE },
    { at: c("The reported powers"), x: 1560, y: 470, label: "reported powers", col: VIOLET },
    { at: c("Consciousness itself"), x: 1420, y: 710, label: "consciousness", col: TEAL },
  ];
  const mv = c("the move away from substance");
  return (
    <AbsoluteFill>
      <At x={700} y={470} s={pop(t, fps, e0)}>
        <div style={{ width: 640, height: 640, borderRadius: "50%", border: `4px solid ${INDIGO}`, background: `radial-gradient(circle, ${INDIGO}33, ${INDIGO}11 70%)`,
          boxShadow: `0 0 40px ${INDIGO}88` }} />
      </At>
      <At x={700} y={470} o={ramp(t, e0 + 0.3, 0.4)}><Glow color={CHALK} size={56} serif>science</Glow></At>
      <At x={1040} y={150} o={ramp(t, e0 + 0.5, 0.4)}><Glow color={INDIGO} size={30}>its edge</Glow></At>
      {items.map((it, i) => (
        <At key={i} x={it.x} y={it.y} s={pop(t, fps, it.at)}><Chip color={it.col} size={40}>{it.label}</Chip></At>
      ))}
      <At x={700} y={600} o={ramp(t, mv, 0.5)}><Chip color={AMBER} size={30}>after the move away from substance</Chip></At>
      <At x={1180} y={470} o={ramp(t, mv + 0.6, 0.5)}><Glow color={AMBER} size={80} serif>?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the mechanism, looked at
const ChainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("Start with the bell", 0.4);
  const ext = c("we call rebirth extraordinary");
  const mech = c("a real mechanism");
  const partB = c("Air, eardrum, inner ear, nerve", 0.5);
  const links = ["bell", "air", "eardrum", "inner ear", "nerve", "hearing"];
  const cols = [AMBER, ICE, TEAL, VIOLET, ROSE, GOLD];
  const ch = c("Air, eardrum, inner ear, nerve");
  const pat = c("the same dependent pattern");
  const icp = c("an intrinsic causal power");
  const u = ramp(t, icp, 2.4);
  return (
    <AbsoluteFill>
      <Scene from={s0} to={partB}>
        <At x={600} y={150} o={ramp(t, s0, 0.4)}><Glow color={GREEN} size={40} serif>"ordinary"</Glow></At>
        <At x={1320} y={150} o={ramp(t, ext, 0.4)}><Glow color={ROSE} size={40} serif>"extraordinary"</Glow></At>
        <At x={600} y={390} s={pop(t, fps, s0 + 0.2)}><Bell size={0.8} /></At>
        <At x={1320} y={390} s={pop(t, fps, ext + 0.2)}>
          <svg width={220} height={220} viewBox="-110 -110 220 220" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
            <path d="M0 -80 A80 80 0 1 1 -69 40" fill="none" stroke={ROSE} strokeWidth={8} strokeLinecap="round" />
            <path d="M-92 20 L-69 44 L-46 18" fill="none" stroke={ROSE} strokeWidth={8} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </At>
        <At x={600} y={660} s={pop(t, fps, mech)}><Gears color={GREEN} /></At>
        <At x={600} y={790} o={ramp(t, mech + 0.3, 0.4)}><Glow color={GREEN} size={30}>a real mechanism?</Glow></At>
        <At x={1320} y={660} o={ramp(t, mech + 0.6, 0.4)}><Gears color={DIM} dashed /></At>
        <At x={1320} y={790} o={ramp(t, mech + 0.8, 0.4)}><Glow color={DIM} size={30}>lacking one?</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        {links.map((w, i) => (
          <React.Fragment key={i}>
            {i > 0 && <Flow x1={230 + (i - 1) * 290 + 90} y1={400} x2={230 + i * 290 - 90} y2={400} color={cols[i]} p={ramp(t, ch + (i - 1) * 0.4, 0.4)} />}
            <At x={230 + i * 290} y={400} s={pop(t, fps, i === 0 ? ch - 0.3 : ch + (i - 1) * 0.4 + 0.2)}><Chip color={cols[i]} size={36}>{w}</Chip></At>
          </React.Fragment>
        ))}
        <At x={960} y={200} o={ramp(t, pat, 0.5)}><Glow color={CHALK} size={42} serif>one dependent pattern, described further</Glow></At>
        <At x={230 + 1450 * u} y={560} o={between(t, icp, icp + 2.8, 0.4)}>
          <svg width={120} height={120} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
            <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
            <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
          </svg>
        </At>
        <StruckChip x={960} y={720} at={icp + 0.3} strikeAt={icp + 2.6} color={AMBER} size={36}>a hidden force making it happen</StruckChip>
        <At x={960} y={810} o={ramp(t, icp + 2.8, 0.5)}><Glow color={WARM} size={34}>never found anywhere along it</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. familiarity did the work
const FamiliarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ne = c("was never explained");
  const wit = c("witnessed so often");
  const vis = c("stopped being visible");
  const fam = c("Familiarity quietly did the work");
  const n = Math.floor(Math.max(0, Math.min(1, (t - wit) / 2.4)) * 40);
  return (
    <AbsoluteFill>
      <At x={560} y={380} s={pop(t, fps, ne - 0.2)}><Bell size={0.9} hit={ne} /></At>
      <At x={560} y={170} o={ramp(t, ne, 0.4) * (1 - ramp(t, vis, 1.2) * 0.9)}><Glow color={AMBER} size={110} serif>?</Glow></At>
      <At x={560} y={600} o={ramp(t, ne + 0.3, 0.4)}><Glow color={CHALK} size={34}>never explained</Glow></At>
      {Array.from({ length: n }).map((_, i) => (
        <At key={i} x={1060 + (i % 8) * 85} y={240 + Math.floor(i / 8) * 85} s={pop(t, fps, wit + i * 0.06)}>
          <svg width={64} height={36} viewBox="0 0 140 80"><path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={7} /><circle cx={70} cy={40} r={18} fill={TEAL} /></svg>
        </At>
      ))}
      <At x={1360} y={690} o={ramp(t, wit + 0.3, 0.4)}><Glow color={TEAL} size={32}>seen so often, by so many</Glow></At>
      <At x={960} y={800} o={ramp(t, fam, 0.5)}><Chip color={AMBER} size={36}>familiarity, in the place of explanation</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. a caution, both ways
const CautionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nt = c("must now be true");
  const err = c("trade one error for another");
  const em = c("Emptiness does not deliver");
  const obj = c("one specific objection");
  const partB = c("one specific objection", 0.6);
  const np = c("No phenomenon, anywhere");
  return (
    <AbsoluteFill>
      <Scene from={nt - 0.6} to={partB}>
        <StruckChip x={960} y={200} at={nt - 0.3} strikeAt={nt + 0.8} color={ROSE} size={40}>so it must be true</StruckChip>
        <At x={560} y={460} s={pop(t, fps, err)}><Chip color={DIM} size={32}>it cannot happen</Chip></At>
        <At x={1360} y={460} s={pop(t, fps, err + 0.4)}><Chip color={DIM} size={32}>it must happen</Chip></At>
        <Flow x1={760} y1={460} x2={1150} y2={460} color={WARM} p={ramp(t, err + 0.2, 0.6)} />
        <At x={960} y={560} o={ramp(t, err + 0.5, 0.4)}><Glow color={WARM} size={32}>one error for another</Glow></At>
        <At x={960} y={740} o={ramp(t, em, 0.5)}><Glow color={ICE} size={40} serif>emptiness does not deliver that much</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={960} y={200} o={ramp(t, obj, 0.4)}><Glow color={CHALK} size={44} serif>what dissolves: one objection</Glow></At>
        <StruckChip x={960} y={400} at={obj + 0.3} strikeAt={c("No phenomenon, anywhere") + 0.8} color={AMBER} size={38}>no mechanism, so reject it</StruckChip>
        {Array.from({ length: 6 }).map((_, i) => (
          <At key={i} x={460 + i * 200} y={620} s={pop(t, fps, np + i * 0.12)}>
            <div style={{ position: "relative" }}><Gears color={[AMBER, TEAL, ROSE, VIOLET, ICE, GREEN][i]} dashed /></div>
          </At>
        ))}
        <Svg style={{ transform: "scale(1)" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={400 + i * 200} y1={570} x2={520 + i * 200} y2={670} stroke={WARM} strokeWidth={6} opacity={ramp(t, np + 0.8 + i * 0.1, 0.3)} />
          ))}
        </Svg>
        <At x={960} y={790} o={ramp(t, np + 0.6, 0.5)}><Glow color={WARM} size={36}>nothing anywhere ever had one</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. two separate questions
const SeparateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sq = c("A separate question remains");
  const ah = c("actually happen");
  const rb = c("Removing a bad argument");
  const ga = c("a good argument for it");
  const gone = ramp(t, rb + 0.5, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sq, 0.4)}><Glow color={CHALK} size={44} serif>two questions, held separately</Glow></At>
      <At x={560} y={440} s={pop(t, fps, sq + 0.3)}>
        <div style={{ width: 520, height: 420, borderRadius: 18, border: `3px solid ${INDIGO}`, background: `${INDIGO}1a`, boxShadow: `0 0 30px ${INDIGO}55` }} />
      </At>
      <At x={560} y={280} o={ramp(t, sq + 0.4, 0.4)}><Glow color={INDIGO} size={32}>an argument against?</Glow></At>
      <At x={560} y={460 + 260 * gone} o={ramp(t, sq + 0.6, 0.4) * (1 - gone)} r={gone * 25}><Chip color={WARM} size={32}>no mechanism</Chip></At>
      <At x={1360} y={440} s={pop(t, fps, ah - 0.2)}>
        <div style={{ width: 520, height: 420, borderRadius: 18, border: `3px solid ${TEAL}`, background: `${TEAL}1a`, boxShadow: `0 0 30px ${TEAL}55` }} />
      </At>
      <At x={1360} y={280} o={ramp(t, ah, 0.4)}><Glow color={TEAL} size={32}>does it happen? how reliably?</Glow></At>
      <At x={1360} y={460} o={ramp(t, ga, 0.4)}>
        <div style={{ width: 300, height: 90, borderRadius: 14, border: `3px dashed ${TEAL}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "SourceSans", fontSize: 28, color: DIM }}>evidence needed</span>
        </div>
      </At>
      <At x={960} y={790} o={ramp(t, ga + 0.3, 0.5)}><Glow color={GOLD} size={36}>removing an argument against is not an argument for</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. Stevenson's discipline
const StevensonScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const h = c("this harder ground of evidence", 0.4);
  const is = c("Ian Stevenson");
  const mem = c("memories of a previous life");
  const chk = c("could be checked");
  const th = c("thousands of cases");
  const cr = c("serious criticism");
  const nc = c("neither casual nor credulous");
  const partB = th - 0.4;
  const tilt = Math.sin(t * 1.5) * 6 * ramp(t, cr, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, h, 0.4)}><Glow color={TEAL} size={40} serif>the harder ground: evidence</Glow></At>
      <At x={960} y={170} o={ramp(t, is, 0.4)}><Glow color={CHALK} size={34}>Ian Stevenson, psychiatrist</Glow></At>
      <At x={960} y={460} s={pop(t, fps, h + 0.3)} o={1 - ramp(t, mem - 0.4, 0.4)}>
        <svg width={360} height={260} viewBox="0 0 360 260" style={{ filter: `drop-shadow(0 0 12px ${TEAL})` }}>
          <path d="M20 30 L170 50 L170 240 L20 220 Z M340 30 L190 50 L190 240 L340 220 Z" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} strokeLinejoin="round" />
          {Array.from({ length: 5 }).map((_, i) => <g key={i} opacity={ramp(t, h + 0.6 + i * 0.2, 0.3)}><line x1={40} y1={80 + i * 30} x2={150} y2={92 + i * 30} stroke={CHALK} strokeWidth={3} /><line x1={210} y1={92 + i * 30} x2={320} y2={80 + i * 30} stroke={CHALK} strokeWidth={3} /></g>)}
        </svg>
      </At>
      <At x={960} y={680} o={ramp(t, h + 0.8, 0.4) * (1 - ramp(t, mem - 0.4, 0.4))}><Glow color={TEAL} size={32}>not permission, but evidence</Glow></At>
      <Scene from={is} to={partB}>
        <At x={560} y={470} s={pop(t, fps, mem - 0.2)}><Child /></At>
        <At x={680} y={330} s={pop(t, fps, mem + 0.2)}>
          <svg width={180} height={120} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
            <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={3.5} />
          </svg>
        </At>
        <At x={560} y={640} o={ramp(t, mem + 0.3, 0.4)}><Glow color={ROSE} size={30}>a child's reported memories</Glow></At>
        <At x={1340} y={450} s={pop(t, fps, chk)}><Folder color={AMBER} label="a documented life" /></At>
        {[0, 1, 2].map((i) => <Flow key={i} x1={760} y1={400 + i * 50} x2={1210} y2={400 + i * 50} color={GREEN} p={ramp(t, chk + 0.3 + i * 0.3, 0.5)} pulses={false} dash />)}
        {[0, 1, 2].map((i) => <Check key={i} x={985} y={385 + i * 50} at={chk + 0.8 + i * 0.3} s={0.5} />)}
        <At x={1340} y={640} o={ramp(t, chk + 0.6, 0.4)}><Glow color={AMBER} size={30}>checked, before the families met</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        {Array.from({ length: 48 }).map((_, i) => (
          <At key={i} x={360 + (i % 12) * 50 + rand(i) * 10} y={330 + Math.floor(i / 12) * 60} s={pop(t, fps, th + i * 0.025)}>
            <div style={{ width: 34, height: 44, borderRadius: 4, border: `2px solid ${[AMBER, TEAL, ROSE, VIOLET][i % 4]}`, background: `${[AMBER, TEAL, ROSE, VIOLET][i % 4]}33` }} />
          </At>
        ))}
        <At x={640} y={600} o={ramp(t, th + 0.4, 0.4)}><Glow color={CHALK} size={32}>thousands of cases, many cultures</Glow></At>
        <At x={1390} y={450} s={pop(t, fps, cr)}>
          <svg width={440} height={300} viewBox="-220 -150 440 300" style={{ overflow: "visible" }}>
            <line x1={0} y1={-110} x2={0} y2={120} stroke={DIM} strokeWidth={6} />
            <path d="M-60 130 L60 130" stroke={DIM} strokeWidth={6} />
            <g transform={`rotate(${tilt})`}>
              <line x1={-170} y1={-100} x2={170} y2={-100} stroke={CHALK} strokeWidth={5} />
              <path d="M-170 -100 L-210 -20 L-130 -20 Z" fill={`${GREEN}44`} stroke={GREEN} strokeWidth={3} />
              <path d="M170 -100 L130 -20 L210 -20 Z" fill={`${WARM}44`} stroke={WARM} strokeWidth={3} />
            </g>
          </svg>
        </At>
        <At x={1220} y={560} o={ramp(t, cr + 0.3, 0.4)}><Glow color={GREEN} size={30}>credit</Glow></At>
        <At x={1560} y={560} o={ramp(t, cr + 0.3, 0.4)}><Glow color={WARM} size={30}>criticism</Glow></At>
        <At x={960} y={780} o={ramp(t, nc, 0.5)}><Glow color={GOLD} size={40} serif>neither casual nor credulous</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. physics: no carrier needed
const PhysicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const p0 = c("Physics, too", 0.4);
  const ep = c("Distant entangled particles");
  const phase = Math.floor((t - ep) * 1.5);
  const col = t < ep ? DIM : (rand(phase + 3) > 0.5 ? AMBER : TEAL);
  const nd = c("no direct support");
  const ec = c("every connection must have a carrier");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, p0, 0.4)}><Glow color={CHALK} size={44} serif>physics: connection, no carrier found</Glow></At>
      <At x={460} y={380} s={pop(t, fps, p0 + 0.4)}><Orb size={130} color={col} /></At>
      <At x={1460} y={380} s={pop(t, fps, p0 + 0.6)}><Orb size={130} color={col} /></At>
      <Flow x1={560} y1={380} x2={1360} y2={380} color={DIM} p={ramp(t, ep + 0.5, 0.6)} dash pulses={false} />
      <At x={960} y={340} o={ramp(t, ep + 0.8, 0.4)}><Glow color={DIM} size={30}>nothing found travelling</Glow></At>
      <At x={560} y={620} o={ramp(t, nd, 0.4)}><Chip color={ROSE} size={30}>rebirth: no direct support</Chip></At>
      <At x={1360} y={620} o={ramp(t, nd + 1.2, 0.4)}><Chip color={DIM} size={30}>no message sent</Chip></At>
      <StruckChip x={960} y={770} at={ec - 0.2} strikeAt={ec + 1.0} color={AMBER} size={34}>every connection needs a carrier</StruckChip>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. consciousness as one more ground
const MindScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Consciousness raises a different question", 0.4);
  const cp = c("computing pioneer");
  const ma = c("matter alone cannot account");
  const fund = c("consciousness is fundamental");
  const outer = c("outer, symbolic side");
  const loos = c("loosens the grip");
  const part = c("parts company with him");
  const one = c("install one more ground");
  const remove = ramp(t, one + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, q, 0.4)}><Glow color={CHALK} size={44} serif>consciousness</Glow></At>
      <At x={960} y={170} o={ramp(t, cp, 0.4)}><Glow color={DIM} size={32}>a physicist and computing pioneer</Glow></At>
      {/* chip: a computer chip icon */}
      <At x={300} y={300} s={pop(t, fps, cp + 0.2)} o={1 - ramp(t, ma, 0.5)}>
        <svg width={140} height={140} viewBox="0 0 140 140" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
          <rect x={30} y={30} width={80} height={80} rx={8} fill={`${TEAL}33`} stroke={TEAL} strokeWidth={4} />
          {Array.from({ length: 4 }).map((_, i) => (
            <g key={i} stroke={TEAL} strokeWidth={4}>
              <line x1={42 + i * 19} y1={8} x2={42 + i * 19} y2={30} /><line x1={42 + i * 19} y1={110} x2={42 + i * 19} y2={132} />
              <line x1={8} y1={42 + i * 19} x2={30} y2={42 + i * 19} /><line x1={110} y1={42 + i * 19} x2={132} y2={42 + i * 19} />
            </g>
          ))}
        </svg>
      </At>
      {/* matter vs experience gap */}
      <At x={620} y={420} s={pop(t, fps, ma)} o={1 - ramp(t, fund, 0.5)}><Chip color={DIM} size={36}>matter</Chip></At>
      <At x={1300} y={420} s={pop(t, fps, ma + 0.3)} o={1 - ramp(t, fund, 0.5)}><Chip color={VIOLET} size={36}>experience</Chip></At>
      <At x={960} y={420} o={ramp(t, ma + 0.6, 0.4) * (1 - ramp(t, fund, 0.5))}><Glow color={WARM} size={60} serif>gap</Glow></At>
      {/* the proposed layering: a ground, shown only to be removed */}
      <Scene from={fund - 0.2} to={1e9}>
        <At x={960} y={640 + 200 * remove} s={pop(t, fps, fund)} o={1 - remove}>
          <div style={{ width: 760, height: 90, borderRadius: 14, border: `3px solid ${VIOLET}`, background: `${VIOLET}44`, boxShadow: `0 0 30px ${VIOLET}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 34, color: CHALK }}>consciousness as the ground</div>
        </At>
        <At x={960} y={460 + 100 * remove * 0} s={pop(t, fps, outer)}>
          <div style={{ width: 520, height: 200, borderRadius: 100, border: `3px ${t > loos ? "dashed" : "solid"} ${AMBER}`, background: `${AMBER}${t > loos ? "11" : "33"}`,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "SourceSans", fontSize: 34, color: CHALK }}>matter, its outer side</div>
        </At>
        <At x={1560} y={330} o={ramp(t, c("this book's side"), 0.4)}><Glow color={DIM} size={28}>read from this book's side</Glow></At>
        <At x={1560} y={390} o={ramp(t, loos, 0.4)}><Glow color={AMBER} size={30}>matter loosens its grip</Glow></At>
        <At x={300} y={460} o={ramp(t, part, 0.4)}><Chip color={INDIGO} size={30}>here the middle way parts</Chip></At>
        <At x={960} y={830} o={ramp(t, one, 0.4) * (1 - remove)}><Glow color={WARM} size={34}>one more ground</Glow></At>
        <XMark x={960} y={640} r={60} at={one + 0.2} />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. function without substance
const FunctionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dm = c("The deepest meeting point", 0.4);
  const f = c("Function does not require substance");
  const g = c("Gravity functions"), l = c("Language functions"), e = c("Economies, mathematics");
  const hid = c("a hidden essence beneath");
  const a = t * 1.4;
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, dm, 0.4)}><Glow color={DIM} size={32}>where the two paths meet</Glow></At>
      <div style={{ position: "absolute", top: 130, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="function without substance" at={f} size={84} />
      </div>
      <At x={380} y={470} s={pop(t, fps, g)}>
        <div style={{ position: "relative", width: 240, height: 240 }}>
          <div style={{ position: "absolute", left: 85, top: 85 }}><Orb size={70} color={AMBER} /></div>
          <div style={{ position: "absolute", left: 107 + 100 * Math.cos(a), top: 107 + 100 * Math.sin(a) * 0.6 }}><Orb size={26} color={TEAL} /></div>
        </div>
      </At>
      <At x={380} y={640} o={ramp(t, g + 0.2, 0.4)}><Glow color={AMBER} size={32}>gravity</Glow></At>
      <At x={780} y={470} s={pop(t, fps, l)}>
        <svg width={200} height={150} viewBox="0 0 200 150" style={{ filter: `drop-shadow(0 0 8px ${ICE})` }}>
          <path d="M20 20 L180 20 L180 100 L80 100 L50 135 L55 100 L20 100 Z" fill={`${ICE}22`} stroke={ICE} strokeWidth={4} strokeLinejoin="round" />
          {[0, 1].map((i) => <line key={i} x1={45} y1={48 + i * 26} x2={155 - i * 40} y2={48 + i * 26} stroke={ICE} strokeWidth={5} strokeLinecap="round" />)}
        </svg>
      </At>
      <At x={780} y={640} o={ramp(t, l + 0.2, 0.4)}><Glow color={ICE} size={32}>language</Glow></At>
      <At x={1160} y={470} s={pop(t, fps, e)}>
        <svg width={180} height={150} viewBox="0 0 180 150" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
          {[0, 1, 2, 3].map((i) => <ellipse key={i} cx={70} cy={120 - i * 22} rx={50} ry={14} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />)}
          <circle cx={140} cy={60} r={28} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={3} />
        </svg>
      </At>
      <At x={1160} y={640} o={ramp(t, e + 0.2, 0.4)}><Glow color={GOLD} size={32}>economies</Glow></At>
      <At x={1540} y={470} s={pop(t, fps, e + 0.4)}><Glow color={VIOLET} size={110} serif>+ ×</Glow></At>
      <At x={1540} y={640} o={ramp(t, e + 0.6, 0.4)}><Glow color={VIOLET} size={32}>mathematics</Glow></At>
      <At x={960} y={780} o={between(t, hid, hid + 2.6, 0.4)}><Chip color={DIM} size={30}>a hidden essence beneath</Chip></At>
      <XMark x={960} y={780} r={40} at={hid + 0.8} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. beyond science
const BeyondScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("science pauses", 0.4);
  const su = c("what becomes of suffering");
  const fe = c("What becomes of fear");
  const inv = c("investigates the world");
  const tr = c("transforms the way of being");
  const knot = ramp(t, su + 0.6, 2.0);
  return (
    <AbsoluteFill>
      <Svg>
        <DrawPath d="M200 300 L860 300" p={ramp(t, sp, 0.8)} color={INDIGO} width={8} len={700} />
        <DrawPath d="M200 380 L1720 380" p={ramp(t, sp + 0.3, 1.4)} color={AMBER} width={8} len={1600} />
      </Svg>
      <At x={900} y={300} o={ramp(t, sp + 0.8, 0.4)}><div style={{ display: "flex", gap: 10 }}>{[0, 1].map((i) => <div key={i} style={{ width: 14, height: 50, background: INDIGO, borderRadius: 3 }} />)}</div></At>
      <At x={260} y={250} o={ramp(t, sp, 0.4)}><Glow color={INDIGO} size={30}>science</Glow></At>
      <At x={260} y={430} o={ramp(t, sp + 0.3, 0.4)}><Glow color={AMBER} size={30}>the Dharma</Glow></At>
      <At x={620} y={600} s={pop(t, fps, su)}>
        <svg width={260} height={160} viewBox="0 0 260 160" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
          <path d={`M10 80 C ${80 - 60 * knot} ${10 + 0 * knot}, ${180 + 60 * knot} ${150 - 0 * knot}, 130 80 S ${80 - 40 * knot} ${10 + 60 * knot} 250 80`} fill="none" stroke={ROSE} strokeWidth={7} strokeLinecap="round" />
        </svg>
      </At>
      <At x={620} y={710} o={ramp(t, su + 0.3, 0.4)}><Glow color={ROSE} size={30}>suffering?</Glow></At>
      <At x={1000} y={710} o={ramp(t, fe, 0.4)}><Glow color={VIOLET} size={30}>fear?</Glow></At>
      <At x={1380} y={570} o={ramp(t, inv, 0.4)}><Chip color={INDIGO} size={30}>one investigates the world</Chip></At>
      <At x={1380} y={660} o={ramp(t, tr, 0.4)}><Chip color={AMBER} size={30}>one transforms the way of being</Chip></At>
      <Ring x={1380} y={615} p={ramp(t, tr + 0.4, 1.6)} r0={80} r1={360} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r = c("The bell still rings", 0.3);
  const eng = c("a hidden engine");
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, r - 0.2)}><Bell size={1.2} hit={r + 0.3} /></At>
      <Waves x={960} y={380} at={r + 0.3} color={GOLD} />
      <At x={960} y={690} s={pop(t, fps, eng)} o={1 - ramp(t, eng + 1.0, 1.0) * 0.7}><Gears color={DIM} dashed /></At>
      <XMark x={960} y={690} r={70} at={eng + 0.6} />
      <At x={960} y={110} o={ramp(t, eng + 0.4, 0.5)}><Glow color={GOLD} size={44} serif>no hidden engine needed</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["bell", 0], ["edge", c("questions at its edge", 0.6)], ["chain", c("Start with the bell", 0.6)],
    ["bell", c("was never explained", 0.6)], ["caution", c("must now be true", 0.6)], ["caution", c("A separate question remains", 0.6)],
    ["evidence", c("this harder ground of evidence", 0.6)], ["chain", c("Physics, too", 0.6)], ["mind", c("Consciousness raises a different question", 0.6)],
    ["function", c("The deepest meeting point", 0.6)], ["edge", c("science pauses", 0.6)], ["bell", c("The bell still rings", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("questions at its edge", 0.9)], <BellScene />],
    [S("questions at its edge", "Start with the bell"), <EdgeScene />],
    [S("Start with the bell", "was never explained"), <ChainScene />],
    [S("was never explained", "must now be true"), <FamiliarScene />],
    [S("must now be true", "A separate question remains"), <CautionScene />],
    [S("A separate question remains", "this harder ground of evidence"), <SeparateScene />],
    [S("this harder ground of evidence", "Physics, too"), <StevensonScene />],
    [S("Physics, too", "Consciousness raises a different question"), <PhysicsScene />],
    [S("Consciousness raises a different question", "The deepest meeting point"), <MindScene />],
    [S("The deepest meeting point", "science pauses"), <FunctionScene />],
    [S("science pauses", "The bell still rings"), <BeyondScene />],
    [S("The bell still rings", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
