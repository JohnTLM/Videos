// The Observer and the Taste of Presence, Chapter 18: Two Traditions, One Risk. Explainer drawings timed to the narration.
// Arc: the knife that cannot cut itself -> two traditions meet and rub -> agreement argued, not assumed -> a mind splitting into
// knower and known -> the lamp that lights itself and others, no second lamp -> not an independent object -> the debate: the risk
// of turning what is open into a thing -> the ground is empty (shown only to dissolve) -> the claimed equivalence, still contested ->
// the narrower claim: two paths converge on undoing the grasp -> suppression pushes thoughts down vs thoughts dissolving by
// themselves -> calming as a means, analysis as the step -> stillness forced by effort becomes one more thing held.
// Stance: the ground and any awareness are never drawn as a base or a light behind things; the lamp stands beside what it lights,
// and the ground slab is drawn only to dissolve. Appearances stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A knife cannot cut itself", "how could a mind know itself",
  "This is where two traditions meet", "where they rub against each other", "the Middle Way, refuses", "a nature that stands on its own",
  "And a nature that is not produced", "can sound very close to what",
  "So agreement between the two cannot be assumed", "It has to be argued",
  "makes the difficulty concrete", "In the same way, a mind cannot know itself", "a knower, and a known",
  "answers with a lamp", "A lamp lights itself while it lights other things", "No second lamp is needed",
  "is not a second act performed", "its knowing clarity",
  "went further. He argued", "awareness in its natural state", "It is not established as an independent object",
  "depends on nothing outside itself",
  "critique of intrinsic nature more absolutely", "risks reification, turning what is open into a thing",
  "The debate is useful for exactly this reason", "Both sides agree that the risk is real",
  "The ground is empty", "It is not a subtle existent", "standing behind appearances",
  "Later commentators have argued at length", "the two traditions point to the same thing", "appearance and emptiness, inseparable", "primordial purity and spontaneous presence",
  "That equivalence is still contested", "its own resultant vehicle", "this book's own synthesis",
  "The safer claim is narrower", "the grasp at solid substance is the problem", "their methods converge on undoing it",
  "They also share a danger in practice", "suppression, from", "Suppression pushes thoughts down", "one more fixed state", "lets thoughts dissolve",
  "when they are not followed or fixed",
  "makes the same point from its own side", "the practice of calming the mind", "the decisive step was analysis",
  "the parts searched for cannot be found",
  "Stillness forced by effort", "one more thing to hold",
];

// Book 4 mood: plum and gold
const M = {
  knife: { a: "rgba(60,70,140,0.5)", b: "rgba(110,55,120,0.42)", c: "rgba(180,135,60,0.3)" },
  lamp: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,110,130,0.3)" },
  debate: { a: "rgba(110,55,120,0.5)", b: "rgba(170,95,70,0.36)", c: "rgba(40,80,120,0.3)" },
  ground: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  practice: { a: "rgba(60,60,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
};

// ---------------------------------------------------------------- drawings
const Knife: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = ICE }) => (
  <svg width={420 * size} height={120 * size} viewBox="0 0 420 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M150 40 L392 52 Q414 60 392 70 L150 80 Z" fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <line x1={170} y1={50} x2={380} y2={58} stroke="#ffffff88" strokeWidth={2} />
    <rect x={20} y={42} width={130} height={36} rx={14} fill="#6b4a2e" stroke={GOLD} strokeWidth={4} />
    <circle cx={60} cy={60} r={5} fill={GOLD} /><circle cx={110} cy={60} r={5} fill={GOLD} />
  </svg>
);

/** An oil lamp with a flickering flame; it lights itself (lit 0..1). */
const Lamp: React.FC<{ size?: number; lit?: number; dashed?: boolean }> = ({ size = 1, lit = 1, dashed }) => {
  const { t } = useT();
  const fl = 1 + Math.sin(t * 9) * 0.06 + Math.sin(t * 13.3) * 0.04;
  const col = dashed ? DIM : ROSE;
  return (
    <svg width={240 * size} height={240 * size} viewBox="0 0 240 240" style={{ overflow: "visible" }}>
      {!dashed && <circle cx={120} cy={130} r={95} fill={GOLD} opacity={0.16 * lit} style={{ filter: "blur(14px)" }} />}
      {!dashed && <path d={`M120 ${122 - 62 * fl} Q142 100 120 124 Q98 100 120 ${122 - 62 * fl} Z`} fill="#FFE7A8" stroke={GOLD} strokeWidth={3}
        opacity={lit} style={{ filter: `drop-shadow(0 0 16px ${GOLD})` }} />}
      <path d="M40 140 Q120 232 200 140 Z" fill={dashed ? "none" : `${ROSE}33`} stroke={col} strokeWidth={5} strokeLinejoin="round"
        strokeDasharray={dashed ? "12 10" : undefined} />
      <path d="M200 140 Q234 136 226 118" fill="none" stroke={col} strokeWidth={5} strokeLinecap="round" strokeDasharray={dashed ? "8 8" : undefined} />
      <line x1={118} y1={142} x2={120} y2={124} stroke={CHALK} strokeWidth={3} />
    </svg>
  );
};

/** A small round thought bubble. */
const Bubble: React.FC<{ size?: number; color?: string }> = ({ size = 70, color = VIOLET }) => (
  <div style={{ width: size, height: size * 0.78, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}26`, boxShadow: `0 0 18px ${color}66` }} />
);

/** A self-loop arrow turning around a centre. */
const Loop: React.FC<{ r: number; color: string; o?: number }> = ({ r, color, o = 1 }) => {
  const { t } = useT();
  const ex = r * Math.cos(-0.6), ey = r * Math.sin(-0.6);
  return (
    <svg width={2 * r + 40} height={2 * r + 40} viewBox={`${-r - 20} ${-r - 20} ${2 * r + 40} ${2 * r + 40}`}
      style={{ overflow: "visible", opacity: o, transform: `rotate(${t * 70}deg)` }}>
      <path d={`M${r} 0 A${r} ${r} 0 1 1 ${ex} ${ey}`} fill="none" stroke={color} strokeWidth={5} strokeLinecap="round" strokeDasharray="16 10" />
      <circle cx={ex} cy={ey} r={9} fill={color} />
    </svg>
  );
};

/** A solid block: what was open, made into a thing (solid 0..1 morphs from a dashed open circle). */
const Hardening: React.FC<{ solid: number; size?: number; color?: string }> = ({ solid, size = 200, color = WARM }) => (
  <div style={{ width: size, height: size, borderRadius: `${50 - 40 * solid}%`, border: `4px ${solid > 0.5 ? "solid" : "dashed"} ${solid > 0.5 ? color : ICE}`,
    background: `linear-gradient(150deg, ${color}${Math.round(solid * 0x88).toString(16).padStart(2, "0")}, #3a1d2a${Math.round(solid * 0xcc).toString(16).padStart(2, "0")})`,
    boxShadow: `0 0 ${20 + 30 * solid}px ${solid > 0.5 ? color : ICE}66` }} />
);

/** Two claws gripping (open 0 = gripping, 1 = released). */
const Claws: React.FC<{ open: number; color?: string }> = ({ open, color = WARM }) => (
  <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${-50 * open} -60 0) translate(${-60 * open} 0)`}>
      <path d="M-40 -120 Q-150 0 -40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
    </g>
    <g transform={`rotate(${50 * open} 60 0) translate(${60 * open} 0)`}>
      <path d="M40 -120 Q150 0 40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" />
    </g>
  </svg>
);

const Magnifier: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = GOLD }) => (
  <svg width={180 * size} height={180 * size} viewBox="0 0 180 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <circle cx={70} cy={70} r={52} fill={`${ICE}18`} stroke={color} strokeWidth={8} />
    <line x1={108} y1={108} x2={166} y2={166} stroke={color} strokeWidth={14} strokeLinecap="round" />
  </svg>
);

/** A slab drawn under things, only so it can be dissolved (gone 0..1). */
const Slab: React.FC<{ w: number; label: string; gone: number }> = ({ w, label, gone }) => (
  <div style={{ width: w, height: 70, borderRadius: 10, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined,
    background: `linear-gradient(180deg, ${VIOLET}55, #2a1838)`, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: CHALK }}>{label}</div>
);

const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

const Tree: React.FC<{ size?: number }> = ({ size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={440 * size} viewBox="0 0 360 440" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${GREEN}66)` }}>
      <path d="M170 430 L176 260 Q150 220 120 206 M176 290 Q210 240 246 226 M176 330 L182 430" stroke="#C9A06A" strokeWidth={16} fill="none" strokeLinecap="round" />
      {[[180, 150, 120], [104, 200, 80], [262, 196, 84], [180, 76, 84], [128, 118, 70], [236, 112, 70]].map(([x, y, r], i) => (
        <circle key={i} cx={x + Math.sin(t * 1.3 + i) * 5} cy={y + Math.cos(t * 1.1 + i) * 3} r={r}
          fill={i % 2 ? `${GREEN}55` : `${TEAL}44`} stroke={GREEN} strokeWidth={3} strokeOpacity={0.7} />
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

// ---------------------------------------------------------------- scenes
const KnifeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = c("A knife cannot cut itself"), m = c("how could a mind know itself");
  const strain = Math.sin(t * 2.4) * 7 * ramp(t, k + 0.8, 0.6);
  return (
    <AbsoluteFill>
      <Head text="a knife cannot cut itself" at={k + 0.1} y={100} size={72} />
      <At x={640} y={470} s={pop(t, fps, k + 0.2)} r={-14 + strain}><Knife size={1.25} /></At>
      <Svg><DrawPath d="M900 380 C1010 300 1010 520 820 520" p={ramp(t, k + 1.0, 1)} color={WARM} width={5} len={520} /></Svg>
      <At x={990} y={300} o={ramp(t, k + 1.6, 0.5)}><Glow color={WARM} size={72} serif>?</Glow></At>
      <At x={1400} y={470} s={pop(t, fps, m)}><Orb size={130} color={VIOLET} /></At>
      <At x={1400} y={470} o={ramp(t, m + 0.4, 0.6)}><Loop r={120} color={TEAL} /></At>
      <At x={1400} y={720} o={ramp(t, m + 0.6, 0.5)}><Chip color={VIOLET} size={34}>a mind, knowing itself?</Chip></At>
    </AbsoluteFill>
  );
};

const MeetScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const meet = c("This is where two traditions meet"), rub = c("where they rub against each other");
  const mw = c("the Middle Way, refuses"), nat = c("a nature that stands on its own"), np = c("And a nature that is not produced");
  const close = c("can sound very close to what");
  const near = ramp(t, rub - 0.2, 1);
  return (
    <AbsoluteFill>
      <At x={560 + 150 * near} y={130} s={pop(t, fps, meet)}><Glow color={TEAL} size={56} serif>Middle Way</Glow></At>
      <At x={1360 - 150 * near} y={130} s={pop(t, fps, meet + 0.4)}><Glow color={GOLD} size={56} serif>Dzogchen</Glow></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={960} y={130} p={ramp(t, rub + 0.6 + i * 0.4, 1.0)} r0={10} r1={90} color={ROSE} />)}
      <Svg style={{ opacity: 1 - ramp(t, nat + 1.0, 0.8) }}>
        <DrawPath d="M200 780 C520 780 700 600 960 560" p={ramp(t, meet + 0.3, 1.4)} color={TEAL} width={6} len={900} />
        <DrawPath d="M1720 780 C1400 780 1220 600 960 560" p={ramp(t, meet + 0.7, 1.4)} color={GOLD} width={6} len={900} />
      </Svg>
      {[0, 1, 2].map((i) => <Ring key={i} x={960} y={560} p={ramp(t, rub + 0.4 + i * 0.4, 1.0)} r0={10} r1={110} color={ROSE} />)}
      <At x={960} y={640} o={between(t, rub + 0.6, nat + 1.0, 0.6)}><Glow color={ROSE} size={30}>they meet, and rub</Glow></At>
      <At x={560} y={300} o={ramp(t, mw, 0.5)}><Chip color={TEAL} size={30}>refuses</Chip></At>
      <Struck x={560} y={400} at={nat - 0.1} strikeAt={nat + 1.6} color={TEAL} size={32}>a nature standing on its own</Struck>
      <At x={1360} y={350} o={ramp(t, nat + 2.6, 0.5)}><Chip color={GOLD} size={32}>self-knowing awareness</Chip></At>
      <At x={1360} y={560} s={pop(t, fps, np)}><Chip color={GOLD} size={30}>a nature not produced</Chip></At>
      <At x={1360} y={650} o={ramp(t, np + 1.0, 0.5)}><Chip color={GOLD} size={30}>yet ground of appearances</Chip></At>
      <Svg><DrawPath d="M1130 600 C960 520 860 470 800 420" p={ramp(t, close, 1)} color={ROSE} width={5} len={500} /></Svg>
      <At x={900} y={600} o={ramp(t, close + 0.6, 0.5)}><Glow color={ROSE} size={36}>too close?</Glow></At>
    </AbsoluteFill>
  );
};

const ArguedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ass = c("So agreement between the two cannot be assumed"), arg = c("It has to be argued");
  const tilt = Math.sin(t * 1.6) * 8 * ramp(t, arg, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, ass, 0.5)}><Glow color={CHALK} size={46} serif>agreement cannot be assumed</Glow></At>
      <At x={960} y={460} s={pop(t, fps, ass + 0.4)}>
        <svg width={760} height={360} viewBox="-380 -60 760 360" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GOLD})` }}>
          <line x1={0} y1={0} x2={0} y2={280} stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
          <path d="M-120 290 L120 290" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
          <g transform={`rotate(${tilt})`}>
            <line x1={-300} y1={0} x2={300} y2={0} stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
            <path d="M-300 0 L-360 120 L-240 120 Z M300 0 L240 120 L360 120 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
          </g>
        </svg>
      </At>
      <At x={660 - tilt * 0.6} y={470 - tilt * 5} o={ramp(t, ass + 0.8, 0.5)}><Chip color={TEAL} size={30}>Middle Way</Chip></At>
      <At x={1260 - tilt * 0.6} y={470 + tilt * 5} o={ramp(t, ass + 1.0, 0.5)}><Chip color={GOLD} size={30}>Dzogchen</Chip></At>
      <At x={960} y={760} s={pop(t, fps, arg)}><Glow color={GOLD} size={52} serif>argued, not assumed</Glow></At>
    </AbsoluteFill>
  );
};

const SplitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const conc = c("makes the difficulty concrete"), same = c("In the same way, a mind cannot know itself"), kk = c("a knower, and a known");
  const sp = ramp(t, same + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, conc, 0.5)}><Glow color={DIM} size={36}>the difficulty, made concrete</Glow></At>
      <At x={420 + 540 * (1 - ramp(t, same - 0.3, 0.8))} y={300 + 160 * (1 - ramp(t, same - 0.3, 0.8))} s={1 + 0.9 * (1 - ramp(t, same - 0.3, 0.8))}
        o={ramp(t, conc + 0.3, 0.5)} r={-14}><Knife size={0.7} /></At>
      <At x={960} y={600} o={between(t, conc + 2.0, same - 0.3, 0.5)}><Glow color={ICE} size={34}>it cannot cut itself</Glow></At>
      <At x={960 - 280 * sp} y={480} s={pop(t, fps, same)}><Orb size={140} color={TEAL} /></At>
      <At x={960 + 280 * sp} y={480} o={sp > 0.01 ? 1 : 0}><Orb size={140} color={VIOLET} /></At>
      <Flow x1={760} y1={480} x2={1160} y2={480} color={GOLD} p={ramp(t, kk - 0.3, 0.7)} />
      <At x={680} y={640} s={pop(t, fps, kk)}><Chip color={TEAL} size={36}>a knower</Chip></At>
      <At x={1240} y={640} s={pop(t, fps, kk + 0.6)}><Chip color={VIOLET} size={36}>a known</Chip></At>
      <At x={960} y={790} o={ramp(t, kk + 1.2, 0.5)}><Glow color={WARM} size={34}>split in two</Glow></At>
    </AbsoluteFill>
  );
};

const LampScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ans = c("answers with a lamp"), lights = c("A lamp lights itself while it lights other things"), second = c("No second lamp is needed");
  const act = c("is not a second act performed"), clar = c("its knowing clarity");
  const lit = ramp(t, lights, 1.0);
  const objs: [string, number, number][] = [["a bowl", 1160, 360], ["a book", 1440, 470], ["a cup", 1200, 600]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, ans, 0.5)}><Glow color={GOLD} size={46} serif>an answer: a lamp</Glow></At>
      <At x={760} y={470} s={pop(t, fps, ans + 0.2)}><Lamp size={1.3} lit={0.35 + 0.65 * lit} /></At>
      <Ring x={760} y={430} p={ramp(t, lights + 0.2, 1.6)} r0={60} r1={210} color={GOLD} />
      {objs.map(([w, x, y], i) => (
        <React.Fragment key={w}>
          <Flow x1={860} y1={420} x2={x - 80} y2={y} color={GOLD} p={ramp(t, lights + 0.8 + i * 0.3, 0.8)} pulses />
          <At x={x} y={y} o={0.35 + 0.65 * ramp(t, lights + 1.0 + i * 0.3, 0.6)}><Chip color={[TEAL, VIOLET, ROSE][i]} size={32}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <At x={760} y={680} o={ramp(t, lights + 0.6, 0.5)}><Glow color={GOLD} size={30}>lights itself, and others</Glow></At>
      <At x={360} y={470} o={ramp(t, second - 0.1, 0.5)}><Lamp size={0.9} dashed /></At>
      <Crossed x={360} y={480} at={second + 0.6} size={90} />
      <Struck x={560} y={790} at={act - 0.2} strikeAt={act + 1.2} color={DIM} size={30}>a second act, on top</Struck>
      <At x={1300} y={790} s={pop(t, fps, clar)}><Chip color={GOLD} size={30}>knowing clarity, no second lamp</Chip></At>
    </AbsoluteFill>
  );
};

const NotObjectScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fur = c("went further. He argued"), nat = c("awareness in its natural state"), obj = c("It is not established as an independent object");
  const dep = c("depends on nothing outside itself");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, fur, 0.5)}><Glow color={CHALK} size={46} serif>a step further</Glow></At>
      <Svg style={{ opacity: 1 - ramp(t, obj - 0.6, 0.5) }}>
        {[0, 1, 2].map((i) => (
          <DrawPath key={i} d={`M${790 + i * 170} 410 L${850 + i * 170} 480 L${790 + i * 170} 550`} p={ramp(t, fur + 0.4 + i * 0.4, 0.5)} color={GOLD} width={10} len={200} />
        ))}
      </Svg>
      <At x={960} y={250} s={pop(t, fps, nat)}><Chip color={TEAL} size={34}>awareness, in its natural state</Chip></At>
      <At x={560} y={480} s={pop(t, fps, obj - 0.1)}>
        <div style={{ width: 200, height: 200, borderRadius: 14, background: `linear-gradient(150deg, ${WARM}66, #3a1d2a)`, border: `4px solid ${WARM}`,
          boxShadow: `0 0 30px ${WARM}66`, transform: `rotate(${Math.sin(t) * 4}deg)` }} />
      </At>
      <Crossed x={560} y={480} at={obj + 1.4} size={120} />
      <At x={560} y={680} o={ramp(t, obj + 0.4, 0.5)}><Glow color={WARM} size={30}>not an independent object</Glow></At>
      {[0, 1, 2, 3].map((i) => {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        return <Flow key={i} x1={1360 + 260 * Math.cos(a)} y1={480 + 180 * Math.sin(a)} x2={1360 + 120 * Math.cos(a)} y2={480 + 80 * Math.sin(a)}
          color={DIM} p={ramp(t, dep, 0.6) * (1 - ramp(t, dep + 1.6, 0.8))} dash />;
      })}
      <At x={1360} y={480} s={pop(t, fps, dep)}><Chip color={GOLD} size={30}>known only in its own knowing</Chip></At>
      <At x={1360} y={720} o={ramp(t, dep + 1.0, 0.5)}><Glow color={DIM} size={30}>leaning on nothing outside</Glow></At>
    </AbsoluteFill>
  );
};

const DebateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const crit = c("critique of intrinsic nature more absolutely"), risk = c("risks reification, turning what is open into a thing");
  const use = c("The debate is useful for exactly this reason"), agree = c("Both sides agree that the risk is real");
  const solid = ramp(t, risk + 1.0, 1.6);
  const bubble = (txt: string, col: string) => (
    <div style={{ padding: "16px 28px", borderRadius: 40, border: `3px solid ${col}`, background: `${col}22`, fontFamily: SERIF, fontSize: 34, color: CHALK,
      boxShadow: `0 0 24px ${col}55` }}>{txt}</div>
  );
  return (
    <AbsoluteFill>
      <At x={480} y={200} s={pop(t, fps, crit)}>{bubble("no intrinsic nature, anywhere", TEAL)}</At>
      <At x={1440} y={200} s={pop(t, fps, crit + 1.4)}>{bubble("the Dzogchen wording", GOLD)}</At>
      <At x={960} y={480} s={pop(t, fps, risk - 0.2)}><Hardening solid={solid} size={210} /></At>
      <At x={960} y={680} o={ramp(t, risk + 0.3, 0.5)}><Glow color={WARM} size={34}>what is open, made a thing</Glow></At>
      <Svg>
        <DrawPath d="M600 260 Q760 360 840 420" p={ramp(t, use, 0.8)} color={TEAL} width={4} len={400} />
        <DrawPath d="M1320 260 Q1160 360 1080 420" p={ramp(t, use + 0.3, 0.8)} color={GOLD} width={4} len={400} />
      </Svg>
      <At x={480} y={330} o={ramp(t, agree, 0.4)}><Tick at={agree + 0.1} /></At>
      <At x={1440} y={330} o={ramp(t, agree + 0.4, 0.4)}><Tick at={agree + 0.5} /></At>
      <At x={960} y={790} s={pop(t, fps, agree + 0.6)}><Chip color={ROSE} size={36}>both agree: the risk is real</Chip></At>
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const empty = c("The ground is empty"), sub = c("It is not a subtle existent"), beh = c("standing behind appearances");
  const gone = ramp(t, beh + 0.6, 1.6);
  return (
    <AbsoluteFill>
      <Head text="the ground is empty" at={empty} y={90} size={74} />
      <At x={560} y={440} s={pop(t, fps, empty + 0.3)}><Tree size={0.7} /></At>
      <At x={960} y={470} s={pop(t, fps, empty + 0.6)}><Orb size={120} color={ICE} /></At>
      <At x={1360} y={470} s={pop(t, fps, empty + 0.9)}><Orb size={110} color={ROSE} /></At>
      <At x={960} y={650} o={ramp(t, empty + 0.8, 0.5)}><Slab w={1200} label="the ground, behind it all?" gone={gone} /></At>
      <Struck x={960} y={790} at={sub - 0.1} strikeAt={sub + 1.2} color={VIOLET} size={34}>a subtle existent, behind</Struck>
      <At x={960} y={650} o={ramp(t, beh + 1.8, 0.6)}><Glow color={GREEN} size={34}>appearances, still vivid</Glow></At>
    </AbsoluteFill>
  );
};

const SameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lat = c("Later commentators have argued at length"), pts = c("the two traditions point to the same thing"), ae = c("appearance and emptiness, inseparable"), pp = c("primordial purity and spontaneous presence");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, lat, 0.5)}><Glow color={CHALK} size={44} serif>the same thing, in two languages?</Glow></At>
      <At x={520} y={260} o={ramp(t, lat + 0.8, 0.5)}><Glow color={TEAL} size={40} serif>Middle Way</Glow></At>
      <At x={520} y={400} s={pop(t, fps, ae)}><Chip color={TEAL} size={34}>appearance</Chip></At>
      <At x={520} y={490} o={ramp(t, ae + 0.4, 0.4)}><Glow color={DIM} size={30}>and</Glow></At>
      <At x={520} y={580} s={pop(t, fps, ae + 0.7)}><Chip color={TEAL} size={34}>emptiness</Chip></At>
      <At x={520} y={700} o={ramp(t, ae + 1.3, 0.5)}><Glow color={TEAL} size={30}>inseparable</Glow></At>
      <At x={1400} y={260} o={ramp(t, lat + 1.2, 0.5)}><Glow color={GOLD} size={40} serif>Dzogchen</Glow></At>
      <div style={{ opacity: 1 - ramp(t, ae + 0.2, 0.6) }}>
        <Flow x1={560} y1={310} x2={880} y2={460} color={TEAL} p={ramp(t, pts, 0.8)} />
        <Flow x1={1360} y1={310} x2={1040} y2={460} color={GOLD} p={ramp(t, pts + 0.3, 0.8)} />
        <At x={960} y={500} o={ramp(t, pts + 0.9, 0.5)}>
          <div style={{ width: 150, height: 150, borderRadius: "50%", border: `3px dashed ${ROSE}`, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: SERIF, fontSize: 30, color: CHALK }}>the same?</div>
        </At>
      </div>
      <At x={1400} y={400} s={pop(t, fps, pp)}><Chip color={GOLD} size={34}>primordial purity</Chip></At>
      <At x={1400} y={490} o={ramp(t, pp + 0.4, 0.4)}><Glow color={DIM} size={30}>and</Glow></At>
      <At x={1400} y={580} s={pop(t, fps, pp + 0.8)}><Chip color={GOLD} size={34}>spontaneous presence</Chip></At>
      <Flow x1={720} y1={490} x2={1160} y2={490} color={ROSE} p={ramp(t, pp + 1.4, 1.0)} dash />
      <At x={960} y={440} o={ramp(t, pp + 2.0, 0.5)}><Glow color={ROSE} size={60} serif>=?</Glow></At>
    </AbsoluteFill>
  );
};

const ContestedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const con = c("That equivalence is still contested"), veh = c("its own resultant vehicle"), syn = c("this book's own synthesis");
  const wob = Math.sin(t * 3) * 6 * ramp(t, con, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={260} s={pop(t, fps, con)} r={wob}><Glow color={ROSE} size={120} serif>=</Glow></At>
      <At x={960} y={130} o={ramp(t, con + 0.3, 0.5)}><Chip color={ROSE} size={34}>still contested</Chip></At>
      <Svg>
        <DrawPath d="M420 780 C520 620 560 520 520 420" p={ramp(t, veh - 1.6, 1.2)} color={TEAL} width={6} len={500} />
        <DrawPath d="M1500 780 C1400 620 1360 520 1400 420" p={ramp(t, veh, 1.2)} color={GOLD} width={6} len={500} />
      </Svg>
      <At x={520} y={380} o={ramp(t, veh - 1.0, 0.5)}><Chip color={TEAL} size={28}>Middle Way analysis</Chip></At>
      <At x={1400} y={380} s={pop(t, fps, veh + 0.6)}><Chip color={GOLD} size={28}>its own path</Chip></At>
      <At x={960} y={560} o={ramp(t, syn - 0.2, 0.5)}>
        <svg width={170} height={120} viewBox="0 0 170 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
          <path d="M85 20 Q45 4 8 14 L8 104 Q45 94 85 110 Q125 94 162 104 L162 14 Q125 4 85 20 Z M85 20 L85 110" fill={`${VIOLET}22`} stroke={VIOLET} strokeWidth={4} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={960} y={710} s={pop(t, fps, syn + 0.4)}><Chip color={VIOLET} size={32}>this book's synthesis, offered as one</Chip></At>
    </AbsoluteFill>
  );
};

const ConvergeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nar = c("The safer claim is narrower"), grasp = c("the grasp at solid substance is the problem"), conv = c("their methods converge on undoing it");
  const open = ramp(t, conv + 1.4, 1.4);
  return (
    <AbsoluteFill>
      <Head text="a narrower claim" at={nar} y={90} size={70} />
      <At x={960} y={430} s={pop(t, fps, grasp - 0.2)}>
        <div style={{ width: 150, height: 150, borderRadius: 14, background: `linear-gradient(150deg, ${GOLD}55, #3a2a1d)`, border: `4px solid ${GOLD}`,
          boxShadow: `0 0 30px ${GOLD}66` }} />
      </At>
      <At x={960} y={430} o={ramp(t, grasp + 0.4, 0.5)}><Claws open={open} /></At>
      <At x={960} y={230} o={ramp(t, grasp + 0.8, 0.5)}><Glow color={WARM} size={32}>the grasp: the problem</Glow></At>
      <Svg>
        <DrawPath d="M300 820 C420 640 640 560 780 470" p={ramp(t, conv, 1.2)} color={TEAL} width={7} len={700} />
        <DrawPath d="M1620 820 C1500 640 1280 560 1140 470" p={ramp(t, conv + 0.2, 1.2)} color={GOLD} width={7} len={700} />
      </Svg>
      <At x={340} y={720} o={ramp(t, conv + 0.3, 0.5)}><Chip color={TEAL} size={28}>analysis</Chip></At>
      <At x={1580} y={720} o={ramp(t, conv + 0.5, 0.5)}><Chip color={GOLD} size={28}>recognition</Chip></At>
      <At x={960} y={760} o={ramp(t, conv + 2.0, 0.5)}><Glow color={GREEN} size={36}>converging on undoing it</Glow></At>
    </AbsoluteFill>
  );
};

const SuppressScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dang = c("They also share a danger in practice"), sup = c("suppression, from"), push = c("Suppression pushes thoughts down"), fixed = c("one more fixed state");
  const diss = c("lets thoughts dissolve"), nf = c("when they are not followed or fixed");
  const press = ramp(t, push + 0.2, 1.2), hard = ramp(t, fixed, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, dang, 0.5)}><Glow color={CHALK} size={42} serif>a shared danger</Glow></At>
      <At x={960} y={330} s={pop(t, fps, dang + 0.6)} o={1 - ramp(t, push, 0.6)}>
        <svg width={130} height={120} viewBox="0 0 130 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${WARM})` }}>
          <path d="M65 8 L124 112 L6 112 Z" fill={`${WARM}22`} stroke={WARM} strokeWidth={6} strokeLinejoin="round" />
          <line x1={65} y1={44} x2={65} y2={80} stroke={WARM} strokeWidth={9} strokeLinecap="round" /><circle cx={65} cy={97} r={6} fill={WARM} />
        </svg>
      </At>
      <At x={520} y={200} o={ramp(t, sup - 0.2, 0.5)}><Glow color={WARM} size={40} serif>suppression</Glow></At>
      <At x={1400} y={200} o={ramp(t, sup + 1.2, 0.5)}><Glow color={TEAL} size={40} serif>self-release</Glow></At>
      {/* left: a lid presses the thoughts down */}
      <At x={520} y={300 + 260 * press} o={ramp(t, push, 0.4)}>
        <div style={{ width: 420, height: 26, borderRadius: 8, background: WARM, boxShadow: `0 0 20px ${WARM}` }} />
      </At>
      {[0, 1, 2, 3, 4].map((i) => (
        <At key={i} x={360 + i * 80} y={(440 + Math.sin(t * 2 + i) * 30) * (1 - press) + 620 * press}
          o={ramp(t, dang + 0.4 + i * 0.1, 0.5) * (1 - hard)} s={1 - 0.4 * press}><Bubble size={70} /></At>
      ))}
      <At x={520} y={680} o={hard}>
        <div style={{ width: 420, height: 90, borderRadius: 10, background: "linear-gradient(180deg, #8a8a8f, #4b4b52)", border: `3px solid ${DIM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>a fixed stillness</div>
      </At>
      <At x={520} y={800} o={ramp(t, fixed + 0.5, 0.5)}><Glow color={WARM} size={28}>one more fixed state</Glow></At>
      {/* right: thoughts rise and dissolve by themselves */}
      {[0, 1, 2, 3, 4].map((i) => {
        const rel = sup + 1.4;
        if (t < rel) return null;
        const life = ((t - rel) * 0.32 + i / 5) % 1;
        return <At key={i} x={1260 + i * 70 + Math.sin(t + i) * 20} y={720 - life * 420} o={Math.sin(life * Math.PI) * ramp(t, rel, 0.6)} blur={life * 10}
          s={0.8 + life * 0.6}><Bubble size={70} color={TEAL} /></At>;
      })}
      <At x={1400} y={800} o={ramp(t, nf, 0.5)}><Chip color={TEAL} size={28}>not followed, not fixed</Chip></At>
    </AbsoluteFill>
  );
};

const AnalysisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const side = c("makes the same point from its own side"), calm = c("the practice of calming the mind"), step = c("the decisive step was analysis");
  const nf = c("the parts searched for cannot be found");
  const mx = 560 + ((t - step) * 260 % 900);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, side, 0.5)}><Glow color={CHALK} size={42} serif>the same point, from the Middle Way</Glow></At>
      <Svg>
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${260} ${300 + i * 34} Q ${420} ${300 + i * 34 + Math.sin(t * 1.2 + i) * 6} ${580} ${300 + i * 34}`} fill="none" stroke={ICE}
            strokeWidth={4} opacity={0.8 * ramp(t, side + 1.0 + i * 0.15, 0.6)} />
        ))}
      </Svg>
      <At x={420} y={460} o={ramp(t, calm + 0.4, 0.5)}><Chip color={ICE} size={28}>calming: a means</Chip></At>
      <At x={1300} y={240} s={pop(t, fps, step)}><Chip color={GOLD} size={34}>the decisive step: analysis</Chip></At>
      {["a", "b", "c", "d"].map((k, i) => (
        <At key={k} x={760 + i * 260} y={560} o={ramp(t, step + 0.4 + i * 0.15, 0.4)}><Orb size={70} color={[TEAL, VIOLET, ROSE, ICE][i]} /></At>
      ))}
      <At x={mx} y={560} o={ramp(t, step + 0.8, 0.5)}><Magnifier size={0.9} /></At>
      <At x={1150} y={720} o={ramp(t, nf - 0.2, 0.5)}><Ghost o={0.9} size={0.45} /></At>
      <Crossed x={1150} y={720} at={nf + 0.8} size={70} />
      <At x={1450} y={760} o={ramp(t, nf + 0.4, 0.5)}><Glow color={WARM} size={30}>searched for: not found</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("Stillness forced by effort"), hold = c("one more thing to hold");
  const press = ramp(t, st + 0.4, 1.0), grip = ramp(t, hold, 0.8);
  const breathe = Math.sin(t * 1.5) * 0.05;
  return (
    <AbsoluteFill>
      <Head text="stillness forced by effort" at={st} y={100} size={66} />
      <Svg>
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M560 ${520 + i * 30} Q960 ${520 + i * 30 + (1 - press) * Math.sin(t * 2 + i) * 18} 1360 ${520 + i * 30}`} fill="none"
            stroke={ICE} strokeWidth={4} opacity={0.6 * (1 - grip)} />
        ))}
      </Svg>
      <At x={960} y={360 + 90 * press} o={ramp(t, st + 0.2, 0.5) * (1 - grip)} r={180}>
        <svg width={140} height={140} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
          <path d="M30 92 C18 80 14 66 16 54 L18 40 C19 34 27 34 28 40 L30 52 L30 20 C30 13 39 13 39 20 L40 48 L41 12 C41 5 51 5 51 12 L51 48 L53 16 C53 9 62 9 62 16 L61 50 L64 30 C65 23 74 24 73 31 L69 64 C67 78 60 88 52 92 Z"
            fill="rgba(255,143,163,0.18)" stroke={ROSE} strokeWidth={3.5} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={960} y={540} o={grip} s={1 + breathe}>
        <div style={{ width: 300, height: 110, borderRadius: 12, background: "linear-gradient(180deg, #8a8a8f, #4b4b52)", border: `3px solid ${DIM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 32, color: CHALK }}>stillness</div>
      </At>
      <At x={960} y={540} o={grip}><Claws open={0.1 + breathe} /></At>
      <At x={960} y={780} s={pop(t, fps, hold + 0.3)}><Chip color={WARM} size={36}>one more thing to hold</Chip></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["knife", 0], ["lamp", c("answers with a lamp", 0.6)], ["debate", c("critique of intrinsic nature more absolutely", 0.6)],
    ["ground", c("The ground is empty", 0.6)], ["debate", c("That equivalence is still contested", 0.6)],
    ["practice", c("They also share a danger in practice", 0.6)], ["knife", c("Stillness forced by effort", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("This is where two traditions meet", 0.9)], <KnifeScene />],
    [S("This is where two traditions meet", "So agreement between the two cannot be assumed"), <MeetScene />],
    [S("So agreement between the two cannot be assumed", "makes the difficulty concrete"), <ArguedScene />],
    [S("makes the difficulty concrete", "answers with a lamp"), <SplitScene />],
    [S("answers with a lamp", "went further. He argued"), <LampScene />],
    [S("went further. He argued", "critique of intrinsic nature more absolutely"), <NotObjectScene />],
    [S("critique of intrinsic nature more absolutely", "The ground is empty"), <DebateScene />],
    [S("The ground is empty", "Later commentators have argued at length"), <GroundScene />],
    [S("Later commentators have argued at length", "That equivalence is still contested"), <SameScene />],
    [S("That equivalence is still contested", "The safer claim is narrower"), <ContestedScene />],
    [S("The safer claim is narrower", "They also share a danger in practice"), <ConvergeScene />],
    [S("They also share a danger in practice", "makes the same point from its own side"), <SuppressScene />],
    [S("makes the same point from its own side", "Stillness forced by effort"), <AnalysisScene />],
    [S("Stillness forced by effort", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
