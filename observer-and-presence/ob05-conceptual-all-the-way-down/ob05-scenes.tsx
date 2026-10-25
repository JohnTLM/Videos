// The Observer and the Taste of Presence, Chapter 5: Conceptual All the Way Down? Explainer drawings timed to the narration.
// Arc: no Given, so the opposite beckons: a world made of concepts -> McDowell: concepts at work in perception, unbounded,
// no outer edge ("all the way down" is a gloss) -> Dreyfus: the chess master simply copes -> the Middle Way sides with neither:
// concept swapped for substance; coping restored as a floor; each puts one side first -> the symmetry: ice stings, a shadow is
// no bridge (vividness keeps naming honest); the cup seen as a cup, the duck as a duck (designation in the appearing) ->
// neither is the ground: long and short -> the bicycle: rider, machine, slope, wind -> designation wider than language ->
// the ordinary line survives: snake and rope, the lamp -> nothing at the bottom: there is no down.
// Stance: no layer is drawn as a floor except to be struck; concepts never drawn as a veil except to be lifted away.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "If there is no Given", "the opposite answer beckons", "concept through and through", "what our concepts make of it",
  "is John McDowell's", "already at work in perception itself", "can give us reasons",
  "is unbounded", "There is no outer edge", "Readers often sum this up", "the phrase is a gloss",
  "Hubert Dreyfus objected", "skilled, absorbed activity", "The chess master who sees the move", "The expert simply copes",
  "Their exchange is one of the most instructive",
  "the Middle Way, sides with neither", "McDowell is no idealist", "the world constrains what we think", "swaps the realist's substance",
  "absorbed coping restores a floor", "in practical dress", "Each makes one side come first",
  "What remains is a symmetry", "appearance is not raw material", "Ice stings with its own sharpness", "No one decides the sting",
  "A shadow cannot be called a bridge", "is the vividness itself",
  "concepts are not a veil over appearance", "The cup is seen as a cup", "The duck is seen as a duck",
  "not a screen held in front of the world", "It is in the appearing",
  "Neither is the ground of the other", "draw their content and their correction", "made usable through designation",
  "like long and short", "Even the words conceptual", "the other's contrast",
  "own examples show this", "Riding a bicycle", "a set of rules stored in the head", "a wordless reflex beneath all rules",
  "rider, machine, slope and wind", "found in none of them alone",
  "designation is wider than language", "mistakes designation for a kind of sentence", "the absence of words for the absence of designation",
  "The ordinary distinction survives", "Seeing a snake is not remembering one", "as a lamp shows the snake to be a rope",
  "keeps its everyday use", "the claim to mark two natures",
  "neither concept at the bottom", "nor something without concept at the bottom", "There is no down",
];

// Book 4 mood: plum and gold
const M = {
  open: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  debate: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  middle: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  sym: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  wide: { a: "rgba(60,60,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(180,140,60,0.3)" },
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

/** A dashed outline of a person (o 0..1). */
const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90} cy={50} r={8} fill={CHALK} />
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

const Flame: React.FC<{ size?: number; lean?: number; seed?: number }> = ({ size = 1, lean = 0, seed = 0 }) => {
  const { t } = useT();
  const f = Math.sin(t * 9 + seed) * 5 + Math.sin(t * 13.7 + seed * 2) * 3;
  const tip = 60 + lean * 26 + f * 0.8, mid = 60 + (tip - 60) * 0.6;
  return (
    <svg width={120 * size} height={180 * size} viewBox="0 0 120 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 34px ${GOLD}88)` }}>
      <path d={`M60 176 C24 172 16 132 34 100 C46 78 ${tip - 6} 46 ${tip} ${6 + Math.abs(f) * 0.6} C${tip + 10} 50 104 84 100 124 C98 160 84 176 60 176 Z`} fill={`${WARM}cc`} />
      <path d={`M60 172 C40 168 36 140 46 120 C54 104 ${mid} 80 ${mid} ${60 + f * 0.4} C${mid + 6} 92 84 112 82 136 C80 160 72 172 60 172 Z`} fill={GOLD} />
      <ellipse cx={60} cy={150} rx={12} ry={18} fill="#FFF6D8" />
    </svg>
  );
};

const OilLamp: React.FC<{ on: number }> = ({ on }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
    <div style={{ opacity: on, transform: `scale(${0.4 + 0.6 * on})`, marginBottom: -20 }}><Flame size={0.5} /></div>
    <svg width={180} height={80} viewBox="0 0 180 80" style={{ overflow: "visible" }}>
      <path d="M10 20 Q90 90 170 20 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M90 56 L90 76 M60 78 L120 78" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    </svg>
  </div>
);

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
        <path d="M684 118 L708 112 M684 118 L708 126" stroke={ROSE} strokeWidth={3} />
      </g>
      <g opacity={lit}>
        <path d={d} fill="none" stroke="#C9A06A" strokeWidth={22} strokeLinecap="round" />
        <path d={d} fill="none" stroke="#7a5a32" strokeWidth={4} strokeDasharray="10 14" />
        <path d="M640 120 L668 104 M640 120 L670 122 M640 120 L662 138" stroke="#C9A06A" strokeWidth={4} strokeLinecap="round" />
      </g>
    </svg>
  );
};

/** A chess knight. */
const Knight: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={70} height={80} viewBox="0 0 70 80" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M12 76 L58 76 L54 64 L48 64 Q50 44 58 34 Q60 20 46 10 L40 2 L36 12 Q20 16 14 34 L10 44 Q14 50 22 46 L30 40 Q30 52 18 64 L16 64 Z"
      fill={`${color}55`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <circle cx={40} cy={22} r={3} fill={CHALK} />
  </svg>
);

const Cup: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}88)` }}>
    <path d="M30 30 L170 30 L156 166 Q152 184 130 184 L70 184 Q48 184 44 166 Z" fill={`${color}33`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
    <path d="M166 58 Q224 60 218 106 Q212 142 158 140" fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" />
  </svg>
);

const Duck: React.FC<{ color?: string }> = ({ color = GOLD }) => {
  const { t } = useT();
  const bob = Math.sin(t * 2) * 5;
  return (
    <svg width={280} height={220} viewBox="0 0 280 220" style={{ overflow: "visible", transform: `translateY(${bob}px)`, filter: `drop-shadow(0 0 12px ${color}88)` }}>
      <path d="M40 140 Q40 200 140 200 Q240 200 250 130 Q210 150 180 130 Z" fill={`${color}44`} stroke={color} strokeWidth={6} strokeLinejoin="round" />
      <circle cx={180} cy={90} r={46} fill={`${color}44`} stroke={color} strokeWidth={6} />
      <path d="M222 92 L268 102 L222 112 Z" fill={WARM} stroke={WARM} strokeWidth={3} strokeLinejoin="round" />
      <circle cx={192} cy={78} r={6} fill={CHALK} />
      <path d="M20 206 Q140 190 270 206" stroke={ICE} strokeWidth={4} fill="none" strokeOpacity={0.6} />
    </svg>
  );
};

/** A bicycle with a rider; wheels and pedals turn. */
const Bicycle: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  const a = t * 4;
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, fill: "none" };
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={190} r={68} {...st} />
      {[0, 1, 2].map((k) => <line key={k} x1={cx + 64 * Math.cos(a + k * Math.PI / 3)} y1={190 + 64 * Math.sin(a + k * Math.PI / 3)}
        x2={cx - 64 * Math.cos(a + k * Math.PI / 3)} y2={190 - 64 * Math.sin(a + k * Math.PI / 3)} stroke={color} strokeWidth={2.5} />)}
    </g>
  );
  const px = 200 + 26 * Math.cos(a), py = 190 + 26 * Math.sin(a);
  return (
    <svg width={420} height={270} viewBox="0 0 420 270" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
      {wheel(90)}{wheel(330)}
      <path d="M90 190 L170 90 L300 90 L330 190 M170 90 L200 190 L300 90 M300 90 L290 60 L320 56" {...st} />
      <path d="M160 86 L190 86" {...st} strokeWidth={8} />
      <circle cx={214} cy={-22} r={22} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={5} />
      <path d={`M210 0 L180 80 M200 26 L300 58 M180 80 L${px} ${py}`} stroke={ROSE} strokeWidth={6} strokeLinecap="round" fill="none" />
    </svg>
  );
};

const HalfDots: React.FC<{ at: number; active: number }> = ({ at, active }) => {
  const { t } = useT();
  return (
    <At x={960} y={100} o={ramp(t, at, 0.5)}>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <span style={{ fontFamily: SERIF, fontSize: 38, color: CHALK, marginRight: 10 }}>a symmetry</span>
        {[1, 2].map((n) => (
          <div key={n} style={{ width: 54, height: 54, borderRadius: "50%", border: `3px solid ${n === active ? GOLD : DIM}`, background: n === active ? `${GOLD}44` : "transparent",
            boxShadow: n === active ? `0 0 20px ${GOLD}` : undefined, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: SERIF, fontSize: 32, color: n === active ? CHALK : DIM }}>{n}</div>
        ))}
      </div>
    </At>
  );
};

// ---------------------------------------------------------------- scenes
const OppositeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nog = c("If there is no Given"), opp = c("the opposite answer beckons"), thr = c("concept through and through"), make = c("what our concepts make of it");
  const words = ["tree", "cup", "red", "rain", "river", "home", "cold", "sky"];
  return (
    <AbsoluteFill>
      <Struck x={560} y={170} at={nog} strikeAt={nog + 0.9} color={DIM} size={38}>a Given beneath</Struck>
      <Svg><DrawPath d="M700 220 Q960 120 1220 220" p={ramp(t, opp, 1)} color={GOLD} width={5} len={700} /></Svg>
      <Svg><DrawPath d="M1190 196 L1222 222 L1184 236" p={ramp(t, opp + 0.8, 0.3)} color={GOLD} width={5} len={100} /></Svg>
      <At x={1380} y={170} o={ramp(t, opp + 0.6, 0.5)}><Chip color={VIOLET} size={38}>the opposite answer</Chip></At>
      <At x={960} y={540} s={pop(t, fps, thr)}>
        <div style={{ width: 340, height: 340, borderRadius: "50%", border: `4px solid ${TEAL}`, background: `radial-gradient(circle at 35% 30%, ${TEAL}55, ${VIOLET}33 70%, transparent)`,
          boxShadow: `0 0 50px ${TEAL}55` }} />
      </At>
      {words.map((w, i) => {
        const a = (i / words.length) * Math.PI * 2 + t * 0.25;
        return <At key={w} x={960 + 120 * Math.cos(a)} y={540 + 110 * Math.sin(a)} s={pop(t, fps, thr + 0.5 + i * 0.2)}><Chip color={VIOLET} size={24}>{w}</Chip></At>;
      })}
      <At x={960} y={340} o={ramp(t, thr + 0.2, 0.5)}><Glow color={TEAL} size={32}>concept, through and through?</Glow></At>
      <At x={960} y={790} o={ramp(t, make, 0.5)}><Glow color={GOLD} size={36} serif>a world made of concepts?</Glow></At>
    </AbsoluteFill>
  );
};

const McDowellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const jm = c("is John McDowell's"), work = c("already at work in perception itself"), rea = c("can give us reasons");
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, jm)}><Chip color={GOLD} size={40}>John McDowell</Chip></At>
      <At x={480} y={440} o={ramp(t, jm + 0.6, 0.5)}><Eye /></At>
      <At x={1420} y={440} o={ramp(t, jm + 1.0, 0.6)}><Tree size={0.75} /></At>
      {[-1, 0, 1].map((k, i) => (
        <Flow key={i} x1={1260} y1={440 + k * 60} x2={590} y2={440} color={TEAL} p={ramp(t, work + i * 0.2, 0.8)} />
      ))}
      {["a tree", "green", "swaying"].map((w, i) => (
        <At key={w} x={760 + i * 210} y={360 + (i % 2) * 160} s={pop(t, fps, work + 1.0 + i * 0.4)}><Chip color={VIOLET} size={28}>{w}</Chip></At>
      ))}
      <At x={960} y={270} o={ramp(t, work + 0.8, 0.5)}><Glow color={VIOLET} size={30}>concepts at work in the seeing</Glow></At>
      <Flow x1={960} y1={600} x2={960} y2={680} color={GOLD} p={ramp(t, rea, 0.5)} pulses={false} />
      <At x={960} y={730} s={pop(t, fps, rea + 0.4)}><Chip color={GOLD} size={34}>a reason: “there is a tree”</Chip></At>
    </AbsoluteFill>
  );
};

const UnboundedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const unb = c("is unbounded"), edge = c("There is no outer edge"), sum = c("Readers often sum this up"), gloss = c("the phrase is a gloss");
  const grow = ramp(t, unb, 2.6);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 850, overflow: "hidden" }}>
        {[0, 1, 2].map((i) => {
          const r = 120 + grow * (380 + i * 260);
          return <At key={i} x={960} y={400} o={ramp(t, unb, 0.5) * (1 - i * 0.25)}>
            <div style={{ width: 2 * r, height: 2 * r, borderRadius: "50%", border: `3px solid ${VIOLET}`, boxShadow: `0 0 30px ${VIOLET}66` }} />
          </At>;
        })}
      </div>
      <At x={960} y={400} s={pop(t, fps, unb)}><Glow color={VIOLET} size={56} serif>the conceptual: unbounded</Glow></At>
      <Svg><DrawPath d="M1640 180 L1640 640" p={ramp(t, edge, 0.6)} color={DIM} width={4} len={480} glow={false} /></Svg>
      <At x={1760} y={420} o={ramp(t, edge + 0.4, 0.5)}><Ghost o={1} size={0.5} /></At>
      <At x={1640} y={140} o={ramp(t, edge + 0.3, 0.5)}><Glow color={DIM} size={26}>an outer edge?</Glow></At>
      {t < sum + 1.5 && <Crossed x={1680} y={420} at={edge + 1.4} size={110} />}
      <At x={960} y={700} s={pop(t, fps, sum)}><Chip color={GOLD} size={38}>“conceptual all the way down”</Chip></At>
      <At x={960} y={800} o={ramp(t, gloss, 0.5)}><Glow color={DIM} size={28}>a readers' gloss, not his words</Glow></At>
    </AbsoluteFill>
  );
};

const ChessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dre = c("Hubert Dreyfus objected"), skill = c("skilled, absorbed activity"), master = c("The chess master who sees the move");
  const copes = c("The expert simply copes"), exch = c("Their exchange is one of the most instructive");
  const sq = 80, x0 = 520, y0 = 260;
  const jump = ramp(t, master + 1.6, 0.8);
  const kx = x0 + sq * (1 + jump * 1) + sq / 2, ky = y0 + sq * (4 - jump * 2) + sq / 2 - Math.sin(jump * Math.PI) * 60;
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, dre)}><Chip color={ROSE} size={40}>Hubert Dreyfus objects</Chip></At>
      <At x={960} y={190} o={ramp(t, skill, 0.5)}><Glow color={CHALK} size={34} serif>skilled, absorbed activity</Glow></At>
      <div style={{ position: "absolute", left: x0, top: y0, width: sq * 6, height: sq * 6, opacity: ramp(t, master - 0.2, 0.6),
        boxShadow: `0 0 40px ${GOLD}44`, border: `3px solid ${GOLD}` }}>
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} style={{ position: "absolute", left: (i % 6) * sq, top: Math.floor(i / 6) * sq, width: sq, height: sq,
            background: (i + Math.floor(i / 6)) % 2 ? "#3a2a4acc" : "#d8c9a844" }} />
        ))}
      </div>
      <At x={x0 + sq * 4.5} y={y0 + sq * 1.5} o={ramp(t, master, 0.5)}><Orb size={50} color={ROSE} /></At>
      <At x={kx} y={ky} o={ramp(t, master, 0.5)} s={1 + 0.15 * Math.sin(jump * Math.PI)}><Knight /></At>
      <Svg><DrawPath d={`M${x0 + sq * 1.5} ${y0 + sq * 4.5} L${x0 + sq * 1.5} ${y0 + sq * 2.5} L${x0 + sq * 2.5} ${y0 + sq * 2.5}`} p={ramp(t, master + 0.6, 0.8)}
        color={GOLD} width={4} len={300} /></Svg>
      <At x={1440} y={330} o={ramp(t, master + 0.8, 0.4)}><Glow color={GOLD} size={30}>sees the move</Glow></At>
      <Struck x={1440} y={430} at={master + 1.4} strikeAt={copes - 0.3} color={VIOLET} size={32}>applying concepts</Struck>
      <At x={1440} y={540} s={pop(t, fps, copes)}><Chip color={GREEN} size={36}>simply copes</Chip></At>
      <At x={1300} y={720} s={pop(t, fps, exch)}><Chip color={VIOLET} size={28}>McDowell</Chip></At>
      <At x={1640} y={720} s={pop(t, fps, exch + 0.3)}><Chip color={ROSE} size={28}>Dreyfus</Chip></At>
      <Flow x1={1400} y1={708} x2={1550} y2={708} color={VIOLET} p={ramp(t, exch + 0.6, 0.5)} />
      <Flow x1={1550} y1={732} x2={1400} y2={732} color={ROSE} p={ramp(t, exch + 0.8, 0.5)} />
      <At x={1470} y={810} o={ramp(t, exch + 1.2, 0.5)}><Glow color={DIM} size={26}>a famous exchange</Glow></At>
    </AbsoluteFill>
  );
};

const NeitherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mid = c("the Middle Way, sides with neither"), idl = c("McDowell is no idealist"), cons = c("the world constrains what we think");
  const swap = c("swaps the realist's substance");
  const sw = ramp(t, swap + 1.6, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={100} s={pop(t, fps, mid)}><Glow color={GOLD} size={46} serif>the Middle Way: neither side</Glow></At>
      <At x={560} y={230} s={pop(t, fps, idl)}><Chip color={VIOLET} size={32}>McDowell: no idealist</Chip></At>
      <At x={790} y={230} o={ramp(t, idl + 0.5, 0.3)}><Tick at={idl + 0.6} /></At>
      <At x={400} y={470} s={pop(t, fps, cons)}><Orb size={130} color={GREEN} /></At>
      <At x={400} y={590} o={ramp(t, cons + 0.3, 0.4)}><Glow color={GREEN} size={28}>the world</Glow></At>
      <Flow x1={480} y1={470} x2={640} y2={470} color={GREEN} p={ramp(t, cons + 0.5, 0.5)} />
      <At x={760} y={470} s={pop(t, fps, cons + 0.9)}><Chip color={VIOLET} size={30}>what we think</Chip></At>
      <At x={590} y={680} o={ramp(t, cons + 1.4, 0.5)}><Glow color={DIM} size={28}>the world constrains thinking</Glow></At>
      <At x={1380} y={250} o={ramp(t, swap - 0.3, 0.5)}><Glow color={DIM} size={28}>read as what reality is…</Glow></At>
      <At x={1380} y={470} s={pop(t, fps, swap)} o={1 - sw}>
        <div style={{ width: 280, height: 150, borderRadius: 12, background: "linear-gradient(160deg, #6b6b78, #3b3b45)", border: `4px solid ${DIM}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 38, color: CHALK }}>substance</div>
      </At>
      <At x={1380} y={470} o={sw} r={(1 - sw) * 90}>
        <div style={{ width: 280, height: 150, borderRadius: 12, background: `linear-gradient(160deg, ${VIOLET}aa, #3a2a6a)`, border: `4px solid ${VIOLET}`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 38, color: CHALK }}>concept</div>
      </At>
      <At x={1380} y={575} o={ramp(t, swap, 0.5)}><div style={{ width: 380, height: 30, borderRadius: 6, background: `${GOLD}66`, border: `3px solid ${GOLD}` }} /></At>
      <At x={1380} y={650} o={ramp(t, swap + 2.2, 0.5)}><Glow color={WARM} size={28}>one foundation swapped for another</Glow></At>
      <Crossed x={1380} y={500} at={swap + 3.2} size={130} />
    </AbsoluteFill>
  );
};

const FloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const floor = c("absorbed coping restores a floor"), dress = c("in practical dress"), first = c("Each makes one side come first");
  const gone = ramp(t, first + 1.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, floor, 0.5)}><Glow color={CHALK} size={42} serif>read the same way, Dreyfus too</Glow></At>
      {["move", "board", "plan"].map((w, i) => (
        <At key={w} x={700 + i * 260} y={290} s={pop(t, fps, floor + 0.4 + i * 0.25)}><Chip color={VIOLET} size={30}>{w}</Chip></At>
      ))}
      <At x={960} y={430} o={ramp(t, floor + 1.0, 0.5) * (1 - gone)} blur={gone * 8}>
        <div style={{ width: 860, height: 80, borderRadius: 12, border: `3px dashed ${ROSE}`, background: `${ROSE}22`, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: CHALK }}>absorbed coping, as a floor</div>
      </At>
      <At x={960} y={560} s={pop(t, fps, dress)}><Chip color={GOLD} size={34}>the Given, in practical dress</Chip></At>
      <Struck x={640} y={720} at={first} strikeAt={first + 1.0} color={VIOLET} size={32}>concept first</Struck>
      <Struck x={1280} y={720} at={first + 0.4} strikeAt={first + 1.3} color={ROSE} size={32}>coping first</Struck>
    </AbsoluteFill>
  );
};

const IceShadowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sym = c("What remains is a symmetry"), raw = c("appearance is not raw material"), ice = c("Ice stings with its own sharpness");
  const nod = c("No one decides the sting"), sh = c("A shadow cannot be called a bridge"), viv = c("is the vividness itself");
  const flash = Math.max(0, Math.sin((t - ice) * 5)) * ramp(t, ice, 0.3);
  return (
    <AbsoluteFill>
      <HalfDots at={sym} active={t > raw ? 1 : 0} />
      <At x={960} y={470} o={between(t, sym + 0.5, ice - 0.8, 0.5)}>
        <svg width={360} height={320} viewBox="-180 -160 360 320" style={{ overflow: "visible" }}>
          {[-1, 1].map((d) => (
            <g key={d} transform={`translate(${d * 22 * ramp(t, sym + 1.8, 0.8)} 0)`} style={{ filter: `drop-shadow(0 0 10px ${d < 0 ? GOLD : VIOLET})` }}>
              <path d={`M${d * 6} -150 A150 150 0 0 ${d < 0 ? 0 : 1} ${d * 6} 150 Z`} fill={`${d < 0 ? GOLD : VIOLET}33`} stroke={d < 0 ? GOLD : VIOLET} strokeWidth={4} />
              <text x={d * 78} y={22} textAnchor="middle" fontFamily={SERIF} fontSize={64} fill={CHALK}>{d < 0 ? 1 : 2}</text>
            </g>
          ))}
        </svg>
      </At>
      <Struck x={960} y={200} at={raw} strikeAt={raw + 1.2} color={DIM} size={34}>raw material for concepts</Struck>
      <At x={520} y={450} s={pop(t, fps, ice)}><IceCube size={150} spin={t * 20} flash={flash} /></At>
      <Svg>
        {[0, 1, 2].map((i) => (
          <DrawPath key={i} d={`M${640 + i * 6} ${380 + i * 50} l20 -12 l14 18 l20 -14 l14 18`} p={ramp(t, ice + 0.6 + i * 0.15, 0.3)} color={ICE} width={4} len={140} />
        ))}
      </Svg>
      <At x={760} y={470} o={ramp(t, ice + 0.5, 0.5)} r={-30}><Hand size={120} /></At>
      <At x={560} y={640} o={ramp(t, ice + 0.8, 0.5)}><Glow color={ICE} size={30}>its own sharpness</Glow></At>
      <At x={560} y={720} s={pop(t, fps, nod)}><Chip color={ICE} size={30}>no one decides the sting</Chip></At>
      <At x={1380} y={460} o={ramp(t, sh - 0.2, 0.6)}>
        <div style={{ position: "relative", width: 520, height: 260 }}>
          <div style={{ position: "absolute", left: 0, top: 80, width: 520, height: 110, background: `linear-gradient(180deg, #3d7fa8aa, #24507a)`, borderRadius: 10,
            boxShadow: `0 0 30px ${ICE}44` }} />
          <div style={{ position: "absolute", left: 20, top: 115, width: 480, height: 40, background: "#0a0a12cc", borderRadius: 20, filter: "blur(6px)",
            transform: `skewX(-20deg) translateX(${Math.sin(t * 0.8) * 10}px)` }} />
        </div>
      </At>
      <At x={1380} y={340} o={ramp(t, sh + 0.3, 0.4)}><Glow color={DIM} size={30}>a shadow, called “bridge”?</Glow></At>
      <Crossed x={1380} y={480} at={sh + 1.2} size={80} />
      <At x={960} y={810} o={ramp(t, viv - 0.4, 0.5)}><Glow color={GOLD} size={34} serif>vividness keeps naming honest</Glow></At>
    </AbsoluteFill>
  );
};

const CupDuckScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const veil = c("concepts are not a veil over appearance"), cup = c("The cup is seen as a cup"), duck = c("The duck is seen as a duck");
  const scr = c("not a screen held in front of the world"), app = c("It is in the appearing");
  const lift = ramp(t, veil + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <HalfDots at={veil - 0.5} active={2} />
      <At x={600} y={470} s={pop(t, fps, cup)}><Cup /></At>
      <At x={600} y={620} o={ramp(t, cup + 0.5, 0.4)}><Chip color={TEAL} size={30}>seen as a cup</Chip></At>
      <At x={1320} y={470} s={pop(t, fps, duck)}><Duck /></At>
      <At x={1320} y={620} o={ramp(t, duck + 0.5, 0.4)}><Chip color={GOLD} size={30}>seen as a duck</Chip></At>
      <At x={960} y={440 - 300 * lift} o={ramp(t, veil, 0.5) * (1 - lift)}>
        <svg width={1300} height={380} viewBox="0 0 1300 380" style={{ overflow: "visible" }}>
          <path d={`M0 0 L1300 0 L1300 340 Q1137 ${380 + Math.sin(t * 2) * 14} 975 340 Q812 ${300 - Math.sin(t * 2) * 14} 650 340 Q487 380 325 340 Q162 300 0 340 Z`}
            fill={`${VIOLET}55`} stroke={VIOLET} strokeWidth={3} />
        </svg>
      </At>
      <Struck x={960} y={200} at={veil + 0.3} strikeAt={veil + 1.4} color={VIOLET} size={34}>a veil over appearance</Struck>
      <At x={960} y={460} o={between(t, scr, app + 0.4, 0.4)}>
        <div style={{ width: 200, height: 300, borderRadius: 10, border: `4px solid ${DIM}`, background: "#30303aaa" }} />
      </At>
      {t < app + 1 && <Crossed x={960} y={460} at={scr + 1.2} size={110} />}
      <At x={960} y={780} o={ramp(t, app, 0.3)}><Reveal text="designation is in the appearing" at={app} size={50} /></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gr = c("Neither is the ground of the other"), cont = c("draw their content and their correction"), use = c("made usable through designation");
  const ls = c("like long and short"), words = c("Even the words conceptual"), contrast = c("the other's contrast");
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={gr} strikeAt={gr + 1.2} color={DIM} size={36}>one as the ground of the other</Struck>
      <At x={560} y={290} s={pop(t, fps, gr + 0.3)}><Chip color={GOLD} size={36}>what appears</Chip></At>
      <At x={1360} y={290} s={pop(t, fps, gr + 0.6)}><Chip color={VIOLET} size={36}>concepts</Chip></At>
      <Flow x1={700} y1={270} x2={1240} y2={270} color={GOLD} p={ramp(t, cont, 0.6)} />
      <At x={960} y={220} o={ramp(t, cont + 0.4, 0.4)}><Glow color={GOLD} size={26}>content and correction</Glow></At>
      <Flow x1={1240} y1={310} x2={700} y2={310} color={VIOLET} p={ramp(t, use, 0.6)} />
      <At x={960} y={360} o={ramp(t, use + 0.4, 0.4)}><Glow color={VIOLET} size={26}>picked out, made usable</Glow></At>
      <div style={{ position: "absolute", left: 660, top: 450, width: 600 * ramp(t, ls, 0.6), height: 28, borderRadius: 14, background: GOLD, boxShadow: `0 0 18px ${GOLD}` }} />
      <div style={{ position: "absolute", left: 660, top: 510, width: 240 * ramp(t, ls + 0.3, 0.6), height: 28, borderRadius: 14, background: ICE, boxShadow: `0 0 18px ${ICE}` }} />
      <At x={590} y={464} o={ramp(t, ls + 0.3, 0.4)}><Glow color={GOLD} size={28}>long</Glow></At>
      <At x={590} y={524} o={ramp(t, ls + 0.5, 0.4)}><Glow color={ICE} size={28}>short</Glow></At>
      <At x={660} y={680} s={pop(t, fps, words)}><Chip color={TEAL} size={34}>conceptual</Chip></At>
      <At x={1260} y={680} s={pop(t, fps, words + 0.5)}><Chip color={ROSE} size={34}>non-conceptual</Chip></At>
      <Flow x1={800} y1={668} x2={1080} y2={668} color={TEAL} p={ramp(t, words + 1, 0.5)} />
      <Flow x1={1080} y1={692} x2={800} y2={692} color={ROSE} p={ramp(t, words + 1.2, 0.5)} />
      <At x={960} y={790} o={ramp(t, contrast, 0.5)}><Glow color={GOLD} size={32} serif>each known by contrast</Glow></At>
    </AbsoluteFill>
  );
};

const BicycleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ex = c("own examples show this"), ride = c("Riding a bicycle"), rules = c("a set of rules stored in the head");
  const refl = c("a wordless reflex beneath all rules"), four = c("rider, machine, slope and wind"), none = c("found in none of them alone");
  const ride0 = ramp(t, ride, 0.6);
  const parts: [string, string, number, number][] = [["rider", ROSE, 700, 300], ["machine", TEAL, 1220, 300], ["slope", GOLD, 560, 660], ["wind", ICE, 1400, 640]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, ex, 0.5)}><Glow color={CHALK} size={40} serif>Dreyfus's own example</Glow></At>
      <Svg><DrawPath d="M360 640 L1560 520" p={ride0} color={GOLD} width={5} len={1300} /></Svg>
      <At x={960} y={460} o={ride0} r={-5.7}><Bicycle /></At>
      {Array.from({ length: 6 }).map((_, i) => {
        const x = 1700 - ((t * 400 + rand(i) * 1300) % 1300);
        return <div key={i} style={{ position: "absolute", left: x, top: 260 + rand(i + 2) * 280, width: 90, height: 3, borderRadius: 2, background: ICE,
          opacity: ramp(t, ride + 0.5, 0.6) * 0.6 }} />;
      })}
      <Struck x={460} y={200} at={rules} strikeAt={rules + 1.6} color={VIOLET} size={30}>rules stored in the head</Struck>
      <Struck x={1460} y={200} at={refl} strikeAt={refl + 1.6} color={ROSE} size={30}>a wordless reflex beneath</Struck>
      {parts.map(([w, col, x, y], i) => (
        <At key={w} x={x} y={y} s={pop(t, fps, four + i * 0.4)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={960} y={790} o={ramp(t, none, 0.5)}><Glow color={GOLD} size={34} serif>the skill: in none of them alone</Glow></At>
    </AbsoluteFill>
  );
};

const WiderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wide = c("designation is wider than language"), sent = c("mistakes designation for a kind of sentence");
  const abs = c("the absence of words for the absence of designation");
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, wide)}>
        <div style={{ width: 620, height: 520, borderRadius: "50%", border: `4px solid ${GOLD}`, background: `${GOLD}10`, boxShadow: `0 0 40px ${GOLD}44` }} />
      </At>
      <At x={960} y={180} o={ramp(t, wide + 0.3, 0.4)}><Glow color={GOLD} size={34} serif>designation</Glow></At>
      <At x={960} y={290} s={pop(t, fps, wide + 0.8)}>
        <div style={{ width: 230, height: 120, borderRadius: "50%", border: `3px solid ${VIOLET}`, background: `${VIOLET}22`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: CHALK }}>words</div>
      </At>
      <At x={790} y={470} s={pop(t, fps, wide + 1.4)} r={-20}><Hand size={110} /></At>
      <At x={1000} y={500} s={pop(t, fps, wide + 1.7)}><Knight /></At>
      <At x={1150} y={440} s={pop(t, fps, wide + 2.0)}><Glow color={TEAL} size={26}>a glance</Glow></At>
      <At x={960} y={590} o={ramp(t, wide + 2.2, 0.5)}><Glow color={DIM} size={24}>pointing, a move, a glance</Glow></At>
      <Struck x={540} y={760} at={sent} strikeAt={sent + 1.4} color={VIOLET} size={28}>designation = sentences</Struck>
      <Struck x={1380} y={760} at={abs - 0.4} strikeAt={abs + 1.6} color={ROSE} size={28}>no words = no designation</Struck>
    </AbsoluteFill>
  );
};

const OrdinaryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ord = c("The ordinary distinction survives"), see = c("Seeing a snake is not remembering one"), lamp = c("as a lamp shows the snake to be a rope");
  const use = c("keeps its everyday use"), two = c("the claim to mark two natures");
  const lit = ramp(t, lamp + 0.6, 1.2);
  return (
    <AbsoluteFill>
      <Head text="the ordinary line survives" at={ord} y={70} size={60} color={GREEN} />
      <At x={360} y={300} s={pop(t, fps, see)}><Eye size={0.8} /></At>
      <At x={360} y={380} o={ramp(t, see + 0.3, 0.4)}><Glow color={TEAL} size={28}>seeing</Glow></At>
      <At x={360} y={520} s={pop(t, fps, see + 0.8)}>
        <div style={{ width: 200, height: 120, borderRadius: 60, border: `3px solid ${VIOLET}`, background: `${VIOLET}18`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: DIM }}>a snake…</div>
      </At>
      <At x={360} y={610} o={ramp(t, see + 1.1, 0.4)}><Glow color={VIOLET} size={28}>remembering</Glow></At>
      <At x={360} y={440} o={ramp(t, see + 1.4, 0.4)}><Glow color={GOLD} size={30} serif>is not</Glow></At>
      <At x={1060} y={430} o={ramp(t, see + 1.6, 0.6)}><RopeSnake lit={lit} size={0.85} /></At>
      <At x={1600} y={420} o={ramp(t, lamp - 0.2, 0.5)}><OilLamp on={ramp(t, lamp + 0.2, 0.6)} /></At>
      <Ring x={1600} y={370} p={ramp(t, lamp + 0.4, 1.4)} r0={30} r1={420} color={GOLD} />
      <At x={1060} y={300} o={lit}><Glow color="#C9A06A" size={30}>perception corrects the thought</Glow></At>
      <At x={760} y={710} s={pop(t, fps, use)}><Chip color={GREEN} size={30}>perception and conception: kept</Chip></At>
      <At x={1060} y={710} o={ramp(t, use + 0.5, 0.3)}><Tick at={use + 0.6} /></At>
      <Struck x={960} y={800} at={two} strikeAt={two + 1.6} color={WARM} size={30}>two natures, one beneath the other</Struck>
    </AbsoluteFill>
  );
};

const NoDownScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nc = c("neither concept at the bottom"), ns = c("nor something without concept at the bottom"), down = c("There is no down");
  const gone = ramp(t, down + 0.6, 1.4);
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN, VIOLET];
  return (
    <AbsoluteFill>
      <Struck x={560} y={160} at={nc} strikeAt={nc + 1.4} color={VIOLET} size={34}>concept at the bottom</Struck>
      <Struck x={1360} y={160} at={ns} strikeAt={ns + 1.8} color={ROSE} size={34}>something wordless at the bottom</Struck>
      <At x={960} y={720} o={ramp(t, nc, 0.6) * (1 - gone)} blur={gone * 10}>
        <div style={{ width: 1300, height: 14, borderRadius: 7, background: `${DIM}88`, boxShadow: `0 0 20px ${DIM}` }} />
      </At>
      {Array.from({ length: 12 }).map((_, i) => {
        const fly = gone;
        const bx = 300 + i * 120, by = 640 - rand(i) * 80;
        const fx = 960 + (rand(i + 3) - 0.5) * 1500, fy = 300 + (rand(i + 6) - 0.5) * 420;
        return (
          <At key={i} x={bx + (fx - bx) * fly + Math.sin(t + i) * 12 * fly} y={by + (fy - by) * fly + Math.cos(t * 0.8 + i) * 12 * fly} s={pop(t, fps, nc + 0.3 + i * 0.08)}>
            {i % 3 === 0 ? <Chip color={cols[i % 6]} size={24}>{["cup", "duck", "ice", "move"][(i / 3) % 4]}</Chip> : <Orb size={40 + rand(i + 1) * 30} color={cols[i % 6]} />}
          </At>
        );
      })}
      <At x={960} y={480} o={ramp(t, down, 0.3)}><Reveal text="There is no down" at={down} size={96} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["debate", c("is John McDowell's", 0.6)], ["middle", c("the Middle Way, sides with neither", 0.6)],
    ["sym", c("What remains is a symmetry", 0.6)], ["wide", c("designation is wider than language", 0.6)],
    ["free", c("neither concept at the bottom", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("is John McDowell's", 0.9)], <OppositeScene />],
    [S("is John McDowell's", "is unbounded"), <McDowellScene />],
    [S("is unbounded", "Hubert Dreyfus objected"), <UnboundedScene />],
    [S("Hubert Dreyfus objected", "the Middle Way, sides with neither"), <ChessScene />],
    [S("the Middle Way, sides with neither", "absorbed coping restores a floor"), <NeitherScene />],
    [S("absorbed coping restores a floor", "What remains is a symmetry"), <FloorScene />],
    [S("What remains is a symmetry", "concepts are not a veil over appearance"), <IceShadowScene />],
    [S("concepts are not a veil over appearance", "Neither is the ground of the other"), <CupDuckScene />],
    [S("Neither is the ground of the other", "own examples show this"), <TogetherScene />],
    [S("own examples show this", "designation is wider than language"), <BicycleScene />],
    [S("designation is wider than language", "The ordinary distinction survives"), <WiderScene />],
    [S("The ordinary distinction survives", "neither concept at the bottom"), <OrdinaryScene />],
    [S("neither concept at the bottom", null), <NoDownScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
