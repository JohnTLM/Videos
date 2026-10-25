// The Observer and the Taste of Presence, Chapter 11: The Eight Extremes. Explainer drawings timed to the narration.
// Arc: when did it start, where did it go -> the homage: eight extremes in four pairs -> under substance, just what one asks ->
// every question assumes whereabouts -> a thing on a line (arising, ceasing, kept, removed) -> moved and compared: eight ways of asking
// where -> dependency turns the questions over, nothing hidden -> one by one: no edge crossed, no fall into nothing, no carrier,
// nothing to destroy, no whereabouts before or after -> sprout and seed, rice yields rice -> the negations describe dependent arising
// itself -> one fact, two sides (a coin) -> the lamp switched off and on: went nowhere, came from nowhere.
// Stance: the "whereabouts" pin and any carrier beneath change are drawn only to be removed; the thing itself stays vivid throughout.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  "When did it start", "When will it end", "Where did it come from", "where did it go", "These are the questions we ask",
  "opens his verses on the Middle Way", "eight extremes, set out in four pairs",
  "Arising and ceasing", "Permanence and annihilation", "Coming and going", "Identity and difference",
  "Under the logic of substance", "these are not extremes at all", "They are simply what one asks",
  "Does it last, or is it destroyed", "Is it the same as that",
  "each question assumes the same thing", "something with whereabouts", "A place in time, in space or in identity", "from its own side",
  "put the thing at the two ends of a line", "Permanence keeps it on the line", "Annihilation removes it",
  "move it from one place to another", "set it beside something else", "not eight separate errors", "eight ways of asking where a thing is",
  "The logic of dependency does not give subtler answers", "It turns the questions over", "arises in some hidden form",
  "slips away somewhere invisible", "supposed to have whereabouts is not found", "the questions lose their object",
  "Take them one by one", "Ask when something came into being", "No thing is found crossing an edge", "it began at noon",
  "Ask when it went out of being", "No thing is found falling into nothing", "Ending is named within a before and an after",
  "Ask what stays the same underneath", "No carrier is found beneath the change", "Ask what was destroyed", "Nothing stood on its own to be destroyed",
  "Ask where it came from", "no whereabouts before it appeared", "Ask where it went", "The question simply does not apply",
  "Ask whether it is the same as its source", "The sprout is not the seed", "something else entirely", "Rice yields rice",
  "The decisive point is easy to miss", "Dependent arising, things coming about through causes and conditions", "is not one thing, and the eight negations another", "mysteriously, also free of arising",
  "The negations describe dependent arising itself",
  "If a sprout could be found arising from its seed", "it would have an arising of its own", "Then it would not need to depend",
  "That it depends is exactly why", "Dependence and unfindability are one fact", "Seen from the side of convention", "Seen from the side of analysis",
  "This turns ordinary experience upside down", "removes none of it", "Switch off a lamp", "the light went nowhere", "Switch it on",
  "the light came from nowhere", "Both descriptions hold of every appearance", "Both were true all along",
];

const M = {
  ask: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  line: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  turn: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  seed: { a: "rgba(70,130,80,0.42)", b: "rgba(100,55,125,0.42)", c: "rgba(180,140,60,0.3)" },
  lamp: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
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

/** A map pin: the thing's supposed "whereabouts" (dashed = only supposed). */
const Pin: React.FC<{ color?: string; dashed?: boolean }> = ({ color = ROSE, dashed }) => (
  <svg width={70} height={96} viewBox="0 0 70 96" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M35 92 C20 64 6 50 6 33 A29 29 0 0 1 64 33 C64 50 50 64 35 92 Z" fill={`${color}33`} stroke={color} strokeWidth={4}
      strokeDasharray={dashed ? "8 7" : undefined} />
    <circle cx={35} cy={33} r={10} fill={color} />
  </svg>
);

/** Seed, sprouting (g 0..1). */
const Sprout: React.FC<{ g: number; size?: number }> = ({ g, size = 1 }) => {
  const { t } = useT();
  const sway = Math.sin(t * 1.4) * 4 * g;
  return (
    <svg width={220 * size} height={300 * size} viewBox="0 0 220 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GREEN}66)` }}>
      <ellipse cx={110} cy={262} rx={34} ry={22} fill="#b98a4e66" stroke="#C9A06A" strokeWidth={4} />
      <path d={`M110 250 Q${108 + sway} ${250 - 90 * g} ${110 + sway} ${250 - 170 * g}`} stroke={GREEN} strokeWidth={6} fill="none" strokeLinecap="round" />
      {g > 0.4 && <path d={`M${110 + sway} ${250 - 140 * g} q-60 -20 -70 -60 q50 0 70 50`} fill={`${GREEN}55`} stroke={GREEN} strokeWidth={3} opacity={(g - 0.4) / 0.6} />}
      {g > 0.6 && <path d={`M${110 + sway} ${250 - 160 * g} q60 -24 66 -66 q-50 4 -66 56`} fill={`${TEAL}44`} stroke={GREEN} strokeWidth={3} opacity={(g - 0.6) / 0.4} />}
    </svg>
  );
};

const Seed: React.FC<{ size?: number }> = ({ size = 1 }) => (
  <svg width={120 * size} height={90 * size} viewBox="0 0 120 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
    <ellipse cx={60} cy={45} rx={46} ry={30} fill="#b98a4e88" stroke="#C9A06A" strokeWidth={5} />
    <path d="M30 45 Q60 30 90 45" stroke="#C9A06A" strokeWidth={3} fill="none" />
  </svg>
);

/** A rice stalk heavy with grains (g 0..1 = grown). */
const RiceStalk: React.FC<{ g: number }> = ({ g }) => {
  const { t } = useT();
  const sway = Math.sin(t * 1.1) * 6;
  return (
    <svg width={200} height={300} viewBox="0 0 200 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD}66)` }}>
      <path d={`M100 290 Q100 ${290 - 140 * g} ${100 + sway} ${290 - 230 * g}`} stroke={GREEN} strokeWidth={5} fill="none" strokeLinecap="round" />
      {Array.from({ length: 7 }).map((_, i) => {
        const p = ramp(g, 0.4 + i * 0.07, 0.1);
        const y = 290 - 230 * g + i * 22, x = 100 + sway + (i % 2 ? 16 : -16) + i * 3;
        return <ellipse key={i} cx={x} cy={y} rx={9 * p} ry={15 * p} fill={`${GOLD}aa`} stroke={GOLD} strokeWidth={2} />;
      })}
    </svg>
  );
};

/** A desk lamp; on 0..1 lights the bulb. */
const Lamp: React.FC<{ on: number }> = ({ on }) => (
  <svg width={260} height={320} viewBox="0 0 260 320" style={{ overflow: "visible" }}>
    {on > 0.02 && <path d="M150 120 L40 320 L260 320 Z" fill={`rgba(255,226,150,${0.22 * on})`} style={{ filter: "blur(10px)" }} />}
    <ellipse cx={70} cy={305} rx={60} ry={12} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} />
    <path d="M70 300 L60 180 L150 100" stroke={CHALK} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M120 70 L200 60 L190 140 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={170} cy={118} r={16} fill={on > 0.5 ? "#FFF2C4" : "#55524a"} style={{ filter: on > 0.05 ? `drop-shadow(0 0 ${30 * on}px ${GOLD})` : undefined }} />
  </svg>
);

/** A coin whose two faces carry two words; angle in turns. */
const Coin: React.FC<{ turn: number; a: string; b: string }> = ({ turn, a, b }) => {
  const cs = Math.cos(turn * Math.PI * 2);
  const front = cs >= 0;
  const col = front ? TEAL : GOLD;
  return (
    <div style={{ width: 340, height: 340, borderRadius: "50%", transform: `scaleX(${Math.max(0.04, Math.abs(cs))})`,
      background: `radial-gradient(circle at 38% 32%, #ffffff55, ${col}88 50%, ${col}33)`, border: `6px solid ${col}`,
      boxShadow: `0 0 60px ${col}88`, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: SERIF, fontWeight: 600, fontSize: 44, color: CHALK }}>{front ? a : b}</div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const QuestionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const qs: [string, string, string][] = [
    ["When did it start", "when did it start?", TEAL], ["When will it end", "when will it end?", ROSE],
    ["Where did it come from", "where did it come from?", GOLD], ["where did it go", "where did it go?", VIOLET],
  ];
  const ask = c("These are the questions we ask");
  return (
    <AbsoluteFill>
      <At x={960} y={460} s={pop(t, fps, c("When did it start") - 0.3)}><Orb size={150} color={GOLD} core={0.8} /></At>
      {qs.map(([ph, label, col], i) => {
        const a = (i / 4) * Math.PI * 2 - Math.PI * 0.75 + t * 0.12;
        return <At key={ph} x={960 + 520 * Math.cos(a)} y={460 + 250 * Math.sin(a)} s={pop(t, fps, c(ph))}><Chip color={col} size={36}>{label}</Chip></At>;
      })}
      <At x={960} y={800} o={ramp(t, ask, 0.5)}><Glow color={CHALK} size={38} serif>the questions we ask about anything</Glow></At>
    </AbsoluteFill>
  );
};

const EightScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const verses = c("opens his verses on the Middle Way"), eight = c("eight extremes, set out in four pairs");
  const pairs: [string, string, string, string, number, number][] = [
    ["Arising and ceasing", "arising", "ceasing", TEAL, 560, 400], ["Permanence and annihilation", "permanence", "annihilation", ROSE, 1360, 400],
    ["Coming and going", "coming", "going", GOLD, 560, 640], ["Identity and difference", "identity", "difference", VIOLET, 1360, 640],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, verses, 0.5)}><Glow color={DIM} size={32}>the Middle Way verses open with a homage</Glow></At>
      <Head text="eight extremes, four pairs" at={eight} y={160} size={70} />
      <At x={960} y={500} o={between(t, verses + 0.2, c("Arising and ceasing") - 0.6, 0.5)}>
        <svg width={420} height={260} viewBox="0 0 420 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD}66)` }}>
          <path d="M210 40 Q130 10 20 30 L20 230 Q130 210 210 240 Z" fill={`${GOLD}18`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
          <path d="M210 40 Q290 10 400 30 L400 230 Q290 210 210 240 Z" fill={`${GOLD}18`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
          {[0, 1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <DrawPath d={`M50 ${72 + i * 32} L180 ${76 + i * 32}`} p={ramp(t, verses + 0.6 + i * 0.3, 0.5)} color={CHALK} width={3} len={140} glow={false} />
              <DrawPath d={`M240 ${76 + i * 32} L370 ${72 + i * 32}`} p={ramp(t, verses + 2.1 + i * 0.3, 0.5)} color={CHALK} width={3} len={140} glow={false} />
            </React.Fragment>
          ))}
        </svg>
      </At>
      {pairs.map(([ph, a, b, col, x, y]) => {
        const at = c(ph);
        return (
          <React.Fragment key={ph}>
            <At x={x - 170} y={y} s={pop(t, fps, at)}><Chip color={col} size={34}>{a}</Chip></At>
            <Flow x1={x - 50} y1={y} x2={x + 50} y2={y} color={col} p={ramp(t, at + 0.3, 0.5)} />
            <At x={x + 180} y={y} s={pop(t, fps, at + 0.5)}><Chip color={col} size={34}>{b}</Chip></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Under the logic of substance"), not = c("these are not extremes at all"), asks = c("They are simply what one asks");
  const last = c("Does it last, or is it destroyed"), same = c("Is it the same as that");
  const bob = Math.sin(t * 1.2) * 6;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sub, 0.5)}><Glow color={CHALK} size={44} serif>the logic of substance</Glow></At>
      <At x={560} y={440 + bob} s={pop(t, fps, sub + 0.3)}>
        <div style={{ width: 230, height: 230, borderRadius: 18, background: `linear-gradient(135deg, ${GOLD}cc, #8a5a2a)`,
          border: `4px solid ${GOLD}`, boxShadow: `0 0 50px ${GOLD}88` }} />
      </At>
      <At x={560} y={640} o={ramp(t, sub + 0.8, 0.5)}><Glow color={GOLD} size={32}>a thing that stands on its own</Glow></At>
      <At x={1300} y={300} o={ramp(t, not, 0.5)}><Glow color={DIM} size={34}>not extremes at all…</Glow></At>
      <At x={1300} y={370} o={ramp(t, asks, 0.5)}><Glow color={CHALK} size={34}>just what one asks</Glow></At>
      <At x={1170} y={480} s={pop(t, fps, last)}><Chip color={TEAL} size={34}>does it last?</Chip></At>
      <At x={1440} y={480} s={pop(t, fps, last + 0.8)}><Chip color={ROSE} size={34}>is it destroyed?</Chip></At>
      <At x={1170} y={600} s={pop(t, fps, same)}><Chip color={GOLD} size={34}>the same as that?</Chip></At>
      <At x={1440} y={600} s={pop(t, fps, same + 0.9)}><Chip color={VIOLET} size={34}>something else?</Chip></At>
      {[0, 1, 2, 3].map((i) => <Flow key={i} x1={1060 + (i % 2) * 260} y1={480 + Math.floor(i / 2) * 120} x2={700} y2={440} color={DIM}
        p={ramp(t, (i < 2 ? last : same) + 0.4 + (i % 2) * 0.8, 0.6)} pulses={false} dash />)}
    </AbsoluteFill>
  );
};

const WhereaboutsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const each = c("each question assumes the same thing"), where = c("something with whereabouts"), place = c("A place in time, in space or in identity");
  const own = c("from its own side");
  const places: [string, string, number, number][] = [["a place in time", TEAL, 480, 560], ["a place in space", GOLD, 960, 720], ["a place in identity", VIOLET, 1440, 560]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, each, 0.5)}><Glow color={DIM} size={34}>each question assumes the same thing</Glow></At>
      <Head text="whereabouts" at={where} y={160} size={84} color={ROSE} />
      <At x={960} y={430} s={pop(t, fps, each + 0.4)}><Orb size={130} color={GOLD} core={0.7} /></At>
      <At x={960} y={320} s={pop(t, fps, where + 0.3)}><Pin /></At>
      {places.map(([w, col, x, y], i) => (
        <React.Fragment key={w}>
          <Flow x1={960} y1={430} x2={x} y2={y} color={col} p={ramp(t, place + i * 0.5, 0.6)} />
          <At x={x} y={y} s={pop(t, fps, place + i * 0.5 + 0.3)}><Chip color={col} size={34}>{w}</Chip></At>
        </React.Fragment>
      ))}
      <Ring x={960} y={430} p={((t - own) % 1.8) / 1.8 * (t > own ? 1 : 0)} r0={70} r1={190} color={ROSE} />
      <At x={960} y={820} o={ramp(t, own, 0.5)}><Glow color={ROSE} size={32}>belonging to it, from its own side</Glow></At>
    </AbsoluteFill>
  );
};

const LineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ends = c("put the thing at the two ends of a line"), perm = c("Permanence keeps it on the line"), ann = c("Annihilation removes it");
  const x0 = 360, x1 = 1560, y = 420;
  const slide = ramp(t, perm, 3.5);
  const gone = ramp(t, ann + 0.4, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, ends, 0.5)}><Glow color={CHALK} size={44} serif>a thing, placed on a line</Glow></At>
      <Svg><DrawPath d={`M${x0} ${y} L${x1} ${y}`} p={ramp(t, ends, 1.0)} color={DIM} width={5} len={1300} />
        {[x0, x1].map((x) => <line key={x} x1={x} y1={y - 30} x2={x} y2={y + 30} stroke={CHALK} strokeWidth={5} opacity={ramp(t, ends + 0.8, 0.4)} />)}</Svg>
      <At x={x0} y={y + 80} s={pop(t, fps, ends + 1.0)}><Chip color={TEAL} size={32}>arising</Chip></At>
      <At x={x1} y={y + 80} s={pop(t, fps, ends + 1.6)}><Chip color={ROSE} size={32}>ceasing</Chip></At>
      <At x={x0 + (x1 - x0) * (0.5 * slide + 0.02 * Math.sin(t * 2))} y={y} s={pop(t, fps, ends + 0.6) * (1 - gone)} blur={gone * 10}>
        <Orb size={70} color={GOLD} />
      </At>
      <At x={960} y={640} o={ramp(t, perm, 0.5)}><Chip color={GOLD} size={34}>permanence: kept on the line</Chip></At>
      <Ring x={x0 + (x1 - x0) * 0.5} y={y} p={ramp(t, ann + 0.4, 1.0)} r0={30} r1={140} color={WARM} />
      <At x={960} y={760} o={ramp(t, ann, 0.5)}><Chip color={WARM} size={34}>annihilation: taken off it</Chip></At>
    </AbsoluteFill>
  );
};

const MoveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const move = c("move it from one place to another"), beside = c("set it beside something else");
  const sep = c("not eight separate errors"), ways = c("eight ways of asking where a thing is");
  const ph = ((t - move) * 0.4) % 1;
  const mx = 360 + 360 * (0.5 - 0.5 * Math.cos(ph * Math.PI * 2));
  return (
    <AbsoluteFill>
      <At x={540} y={150} o={ramp(t, move, 0.5)}><Glow color={GOLD} size={40} serif>coming and going</Glow></At>
      {[360, 720].map((x, i) => <At key={x} x={x} y={400} o={ramp(t, move + 0.2, 0.5)}>
        <div style={{ width: 170, height: 170, borderRadius: "50%", border: `3px dashed ${DIM}`, display: "flex", alignItems: "flex-end",
          justifyContent: "center", fontFamily: SANS, fontSize: 26, color: DIM, paddingBottom: 6, boxSizing: "border-box" }}>{i ? "there" : "here"}</div>
      </At>)}
      <At x={mx} y={400} o={ramp(t, move + 0.3, 0.5)}><Orb size={70} color={GOLD} /></At>
      <At x={1380} y={150} o={ramp(t, beside, 0.5)}><Glow color={VIOLET} size={40} serif>identity and difference</Glow></At>
      <At x={1230} y={400} s={pop(t, fps, beside + 0.2)}><Orb size={90} color={GOLD} /></At>
      <At x={1380} y={400} s={pop(t, fps, beside + 0.8)}><Glow color={VIOLET} size={60} serif>=?</Glow></At>
      <At x={1530} y={400} s={pop(t, fps, beside + 0.5)}><Orb size={90} color={VIOLET} /></At>
      <Struck x={960} y={640} at={sep - 0.1} strikeAt={sep + 1.0} color={DIM} size={34}>eight separate errors</Struck>
      <At x={960} y={770} s={pop(t, fps, ways)}><Chip color={ROSE} size={40}>eight ways of asking: where is it?</Chip></At>
    </AbsoluteFill>
  );
};

const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dep = c("The logic of dependency does not give subtler answers"), over = c("It turns the questions over");
  const hid = c("arises in some hidden form"), slip = c("slips away somewhere invisible"), nf = c("supposed to have whereabouts is not found");
  const lose = c("the questions lose their object");
  const flip = ramp(t, over, 1.2);
  const drift = ramp(t, lose, 2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, dep, 0.5)}><Glow color={TEAL} size={44} serif>the logic of dependency</Glow></At>
      <Struck x={960} y={200} at={dep + 1.0} strikeAt={dep + 2.2} color={DIM} size={30}>subtler answers</Struck>
      {["when?", "where?", "same?", "lasting?"].map((q, i) => (
        <At key={q} x={480 + i * 320} y={320 - drift * (40 + i * 20)} r={180 * flip} o={ramp(t, dep + 0.5 + i * 0.2, 0.4) * (1 - drift * 0.9)}>
          <Chip color={[TEAL, GOLD, VIOLET, ROSE][i]} size={34}>{q}</Chip>
        </At>
      ))}
      <Struck x={640} y={760} at={hid} strikeAt={hid + 1.2} color={VIOLET} size={30}>arising, in hidden form</Struck>
      <Struck x={1280} y={760} at={slip} strikeAt={slip + 1.2} color={VIOLET} size={30}>slipping away, unseen</Struck>
      <At x={960} y={540} s={pop(t, fps, hid - 0.6)}><Orb size={120} color={GOLD} core={0.7} /></At>
      <At x={960} y={430} o={ramp(t, hid - 0.4, 0.5) * (1 - ramp(t, nf + 1.4, 0.8))}><Pin dashed /></At>
      <Crossed x={960} y={430} at={nf + 0.6} size={50} />
      <At x={1300} y={560} o={ramp(t, lose, 0.5)}><Glow color={GOLD} size={32}>the thing stays; the questions lose their object</Glow></At>
    </AbsoluteFill>
  );
};

const EdgeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("Take them one by one"), into = c("Ask when something came into being"), edge = c("No thing is found crossing an edge");
  const noon = c("it began at noon"), out = c("Ask when it went out of being"), fall = c("No thing is found falling into nothing");
  const named = c("Ending is named within a before and an after");
  const look = (((t - into) * 0.5) % 1);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, one, 0.5)}><Glow color={DIM} size={34}>one by one</Glow></At>
      {/* left: the edge from absent to present */}
      <At x={520} y={180} o={ramp(t, into, 0.5)}><Glow color={TEAL} size={36} serif>when did it come into being?</Glow></At>
      <Svg><DrawPath d="M520 260 L520 560" p={ramp(t, into + 0.2, 0.6)} color={CHALK} width={4} len={320} /></Svg>
      <At x={400} y={300} o={ramp(t, into + 0.4, 0.5)}><Glow color={DIM} size={28}>absent</Glow></At>
      <At x={640} y={300} o={ramp(t, into + 0.4, 0.5)}><Glow color={TEAL} size={28}>present</Glow></At>
      <At x={440 + 160 * look} y={420} o={ramp(t, into + 0.6, 0.5) * (1 - ramp(t, edge + 0.8, 0.6))}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", border: `4px dashed ${ICE}` }} />
      </At>
      <Crossed x={520} y={420} at={edge + 0.6} size={60} />
      <At x={520} y={680} s={pop(t, fps, noon)}><Chip color={GOLD} size={32}>“it began at noon”</Chip></At>
      <At x={520} y={770} o={ramp(t, noon + 0.4, 0.4)}><div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Tick at={noon + 0.5} /><Glow color={GREEN} size={28}>holds, as convention</Glow></div></At>
      {/* right: falling into nothing */}
      <At x={1400} y={180} o={ramp(t, out, 0.5)}><Glow color={ROSE} size={36} serif>when did it go out of being?</Glow></At>
      <At x={1400} y={500} o={ramp(t, out + 0.2, 0.5)}>
        <div style={{ width: 300, height: 90, borderRadius: "50%", background: "radial-gradient(#000, #12101e 60%, transparent)", border: `2px solid ${DIM}55` }} />
      </At>
      <At x={1400} y={300 + 160 * ramp(t, out + 0.6, 1.4)} o={ramp(t, out + 0.4, 0.5) * (1 - ramp(t, fall + 0.8, 0.6))}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", border: `4px dashed ${ICE}` }} />
      </At>
      <Crossed x={1400} y={430} at={fall + 0.5} size={60} />
      <Svg><DrawPath d="M1180 680 L1620 680" p={ramp(t, named, 0.8)} color={CHALK} width={4} len={460} /></Svg>
      <At x={1250} y={630} o={ramp(t, named + 0.3, 0.4)}><Glow color={DIM} size={28}>before</Glow></At>
      <At x={1550} y={630} o={ramp(t, named + 0.5, 0.4)}><Glow color={DIM} size={28}>after</Glow></At>
      <At x={1400} y={770} s={pop(t, fps, named + 0.8)}><Chip color={ROSE} size={32}>“ending”, named between</Chip></At>
    </AbsoluteFill>
  );
};

const CarrierScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const under = c("Ask what stays the same underneath"), nc = c("No carrier is found beneath the change");
  const destr = c("Ask what was destroyed"), stood = c("Nothing stood on its own to be destroyed");
  const cols = [GREEN, "#C8D96A", GOLD, ROSE, "#B0704A"];
  const barGone = ramp(t, nc + 1.2, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, under, 0.5)}><Glow color={CHALK} size={44} serif>what stays the same underneath?</Glow></At>
      {cols.map((col, i) => (
        <At key={i} x={520 + i * 220} y={360 + Math.sin(t * 1.5 + i) * 6} s={pop(t, fps, under + 0.3 + i * 0.25)}><Orb size={110 - i * 4} color={col} /></At>
      ))}
      {[0, 1, 2, 3].map((i) => <Flow key={i} x1={580 + i * 220} y1={360} x2={680 + i * 220} y2={360} color={DIM} p={ramp(t, under + 0.6 + i * 0.25, 0.4)} pulses={false} />)}
      <At x={960} y={520} o={ramp(t, under + 1.6, 0.6) * (1 - barGone)} blur={barGone * 10}>
        <div style={{ width: 1000, height: 54, borderRadius: 10, border: `3px dashed ${VIOLET}`, background: `${VIOLET}18`,
          display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>a carrier beneath the change?</div>
      </At>
      <Crossed x={960} y={520} at={nc + 0.5} size={50} />
      <At x={960} y={620} o={ramp(t, nc + 1.4, 0.5)}><Glow color={GREEN} size={30}>the changes, vivid; no carrier found</Glow></At>
      <At x={960} y={720} o={ramp(t, destr, 0.4)}><Glow color={ROSE} size={36} serif>what was destroyed?</Glow></At>
      <Struck x={960} y={800} at={stood - 0.2} strikeAt={stood + 1.4} color={WARM} size={32}>something standing alone, destroyed</Struck>
    </AbsoluteFill>
  );
};

const FromToScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const from = c("Ask where it came from"), before = c("no whereabouts before it appeared"), went = c("Ask where it went");
  const apply = c("The question simply does not apply");
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, from - 0.2)}><Orb size={140} color={GOLD} core={0.8} /></At>
      <At x={400} y={430} o={ramp(t, from, 0.5)}>
        <div style={{ width: 260, height: 260, borderRadius: "50%", border: `4px dashed ${DIM}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: DIM }}>from where?</div>
      </At>
      <Flow x1={540} y1={430} x2={870} y2={430} color={TEAL} p={ramp(t, from + 0.4, 0.6)} dash />
      <Crossed x={400} y={430} at={before + 0.3} size={90} />
      <At x={400} y={640} o={ramp(t, before + 0.6, 0.5)}><Glow color={TEAL} size={28}>no whereabouts before</Glow></At>
      <At x={1520} y={430} o={ramp(t, went, 0.5)}>
        <div style={{ width: 260, height: 260, borderRadius: "50%", border: `4px dashed ${DIM}`, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 40, color: DIM }}>to where?</div>
      </At>
      <Flow x1={1050} y1={430} x2={1380} y2={430} color={ROSE} p={ramp(t, went + 0.4, 0.6)} dash />
      <Crossed x={1520} y={430} at={went + 1.6} size={90} />
      <At x={1520} y={640} o={ramp(t, went + 1.8, 0.5)}><Glow color={ROSE} size={28}>no whereabouts after</Glow></At>
      <At x={960} y={780} s={pop(t, fps, apply)}><Chip color={GOLD} size={38}>the question does not apply</Chip></At>
    </AbsoluteFill>
  );
};

const SeedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const src = c("Ask whether it is the same as its source"), not = c("The sprout is not the seed"), other = c("something else entirely");
  const rice = c("Rice yields rice");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, src, 0.5)}><Glow color={CHALK} size={44} serif>the same as its source?</Glow></At>
      <At x={420} y={420} s={pop(t, fps, src + 0.3)}><Seed size={1.4} /></At>
      <At x={420} y={540} o={ramp(t, src + 0.5, 0.4)}><Glow color={GOLD} size={30}>seed</Glow></At>
      <At x={1000} y={380} o={ramp(t, src + 0.8, 0.5)}><Sprout g={ramp(t, src + 0.8, 2.5)} /></At>
      <At x={1000} y={560} o={ramp(t, src + 1.2, 0.4)}><Glow color={GREEN} size={30}>sprout</Glow></At>
      <Flow x1={520} y1={420} x2={880} y2={420} color={GREEN} p={ramp(t, src + 0.6, 0.6)} />
      <Struck x={710} y={650} at={not - 0.2} strikeAt={not + 0.8} color={TEAL} size={32}>the same</Struck>
      <Struck x={710} y={750} at={other} strikeAt={other + 1.2} color={VIOLET} size={32}>something else entirely</Struck>
      <At x={1520} y={420} s={pop(t, fps, rice)}><RiceStalk g={ramp(t, rice, 2.0)} /></At>
      <At x={1440} y={560} s={pop(t, fps, rice - 0.2)}><svg width={40} height={60} viewBox="0 0 40 60"><ellipse cx={20} cy={30} rx={12} ry={20} fill={`${GOLD}aa`} stroke={GOLD} strokeWidth={3} /></svg></At>
      <At x={1520} y={700} o={ramp(t, rice + 0.4, 0.5)}><Glow color={GOLD} size={46} serif>rice yields rice</Glow></At>
    </AbsoluteFill>
  );
};

const DecisiveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const miss = c("The decisive point is easy to miss"), dep = c("Dependent arising, things coming about through causes and conditions"), two = c("is not one thing, and the eight negations another");
  const myst = c("mysteriously, also free of arising"), desc = c("The negations describe dependent arising itself");
  const merge = ramp(t, desc + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <Head text="the decisive point" at={miss} y={100} size={74} />
      <At x={960 - 330 * (1 - merge)} y={400} s={pop(t, fps, dep)} o={1}><Chip color={TEAL} size={40}>dependent arising</Chip></At>
      <At x={960 + 330 * (1 - merge)} y={400 + 90 * merge} s={pop(t, fps, two + 0.6)} o={1}><Chip color={GOLD} size={40}>the eight negations</Chip></At>
      {[GOLD, ICE, GREEN, ROSE].map((col, i) => {
        const x0 = 280 + i * 160, o = between(t, dep + 1.6 + i * 0.25, two + 1.0, 0.5);
        return (
          <React.Fragment key={i}>
            <Flow x1={x0} y1={560} x2={630} y2={440} color={col} p={o} />
            <At x={x0} y={560} o={o}><Orb size={34} color={col} /></At>
          </React.Fragment>
        );
      })}
      <At x={630} y={630} o={between(t, dep + 1.6, two + 1.0, 0.5)}><Glow color={DIM} size={26}>through causes and conditions</Glow></At>
      <At x={960} y={400} o={ramp(t, two + 1.0, 0.4) * (1 - merge)}><Glow color={DIM} size={50} serif>+</Glow></At>
      <Struck x={960} y={560} at={two + 1.2} strikeAt={two + 2.4} color={DIM} size={32}>two separate things</Struck>
      <Struck x={960} y={660} at={myst - 0.6} strikeAt={myst + 1.2} color={VIOLET} size={32}>arises, then mysteriously free of arising</Struck>
      <Ring x={960} y={440} p={ramp(t, desc + 1.6, 1.4)} r0={120} r1={380} color={GOLD} />
      <At x={960} y={780} o={ramp(t, desc + 1.2, 0.5)}><Glow color={GOLD} size={36} serif>the negations describe it</Glow></At>
    </AbsoluteFill>
  );
};

const CoinScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const could = c("If a sprout could be found arising from its seed"), own = c("it would have an arising of its own");
  const need = c("Then it would not need to depend"), why = c("That it depends is exactly why"), one = c("Dependence and unfindability are one fact");
  const conv = c("Seen from the side of convention"), ana = c("Seen from the side of analysis");
  // spin freely, then settle on a face: front (dependence) at convention, back (unfindability) at analysis
  const sp = Math.max(0, Math.min(t, conv) - one) * 0.6;
  const turn = sp + (Math.ceil(sp) - sp) * ramp(t, conv, 0.6) + 0.5 * ramp(t, ana, 0.8);
  const coinO = ramp(t, why, 0.6);
  const ifO = 1 - ramp(t, why - 0.2, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ifO}>
        <div style={{ display: "flex", alignItems: "center", gap: 60 }}>
          <Seed /><Sprout g={1} size={0.8} />
        </div>
      </At>
      <At x={1220} y={250} o={ramp(t, own, 0.5) * ifO}>
        <div style={{ padding: "10px 22px", borderRadius: 30, border: `3px dashed ${VIOLET}`, fontFamily: SERIF, fontSize: 32, color: CHALK }}>an arising of its own?</div>
      </At>
      <AbsoluteFill style={{ opacity: ifO }}><Struck x={960} y={700} at={need - 0.2} strikeAt={need + 1.0} color={DIM} size={32}>needing to depend</Struck></AbsoluteFill>
      <At x={960} y={430} o={coinO}><Coin turn={turn} a="dependence" b="unfindability" /></At>
      <At x={960} y={120} o={ramp(t, one, 0.5)}><Glow color={CHALK} size={46} serif>one fact, two sides</Glow></At>
      <At x={560} y={760} o={ramp(t, conv, 0.5)}><Chip color={TEAL} size={32}>from convention: dependence</Chip></At>
      <At x={1360} y={760} o={ramp(t, ana, 0.5)}><Chip color={GOLD} size={32}>from analysis: unfindability</Chip></At>
    </AbsoluteFill>
  );
};

const LampScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const turn = c("This turns ordinary experience upside down"), none = c("removes none of it");
  const off = c("Switch off a lamp"), nowhere = c("the light went nowhere"), on = c("Switch it on"), came = c("the light came from nowhere");
  const lit = Math.max(0, 1 - ramp(t, off + 0.3, 0.5)) + ramp(t, on + 0.3, 0.5);
  const l = Math.min(1, lit);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, turn, 0.5)}><Glow color={CHALK} size={40} serif>upside down…</Glow></At>
      <At x={960} y={160} o={ramp(t, none, 0.5)}><Glow color={GREEN} size={32}>and removing none of it</Glow></At>
      <At x={960} y={490}>
        <div style={{ width: 1000, height: 520, borderRadius: 24, border: `3px solid ${CHALK}55`, overflow: "hidden", position: "relative",
          background: `radial-gradient(70% 80% at 55% 40%, rgba(255,214,140,${0.55 * l}), rgba(40,30,50,${0.4 + 0.3 * (1 - l)}) 70%, #07060c)` }}>
          <div style={{ position: "absolute", left: 360, top: 170 }}><Lamp on={l} /></div>
        </div>
      </At>
      <At x={560} y={330} o={ramp(t, nowhere, 0.5)}><Chip color={ICE} size={30}>went nowhere</Chip></At>
      <At x={1360} y={330} o={ramp(t, came, 0.5)}><Chip color={GOLD} size={30}>came from nowhere</Chip></At>
      <At x={960} y={490} o={ramp(t, off + 0.2, 0.3) * (1 - ramp(t, on, 0.3))}><Glow color={DIM} size={36}>off</Glow></At>
      <Ring x={1040} y={420} p={ramp(t, on + 0.3, 1.2)} r0={20} r1={400} color={GOLD} />
    </AbsoluteFill>
  );
};

const BothScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const both = c("Both descriptions hold of every appearance"), all = c("Both were true all along");
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, both - 0.3)}><Orb size={170} color={GOLD} core={0.9} /></At>
      <Ring x={960} y={400} p={((t - both) * 0.5) % 1} r0={90} r1={260} color={GOLD} />
      <At x={560} y={400} s={pop(t, fps, both + 0.4)}><Chip color={TEAL} size={36}>dependent</Chip></At>
      <At x={1360} y={400} s={pop(t, fps, both + 0.9)}><Chip color={VIOLET} size={36}>unfindable</Chip></At>
      <At x={560} y={490} o={ramp(t, both + 0.8, 0.3)}><Tick at={both + 0.9} /></At>
      <At x={1360} y={490} o={ramp(t, both + 1.3, 0.3)}><Tick at={both + 1.4} /></At>
      <At x={960} y={700} o={ramp(t, all, 0.5)}><Reveal text="true all along" at={all} size={70} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["ask", 0], ["line", c("put the thing at the two ends of a line", 0.6)], ["turn", c("The logic of dependency does not give subtler answers", 0.6)],
    ["seed", c("Ask whether it is the same as its source", 0.6)], ["turn", c("If a sprout could be found arising from its seed", 0.6)],
    ["lamp", c("This turns ordinary experience upside down", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("opens his verses on the Middle Way", 0.9)], <QuestionsScene />],
    [S("opens his verses on the Middle Way", "Under the logic of substance"), <EightScene />],
    [S("Under the logic of substance", "each question assumes the same thing"), <SubstanceScene />],
    [S("each question assumes the same thing", "put the thing at the two ends of a line"), <WhereaboutsScene />],
    [S("put the thing at the two ends of a line", "move it from one place to another"), <LineScene />],
    [S("move it from one place to another", "The logic of dependency does not give subtler answers"), <MoveScene />],
    [S("The logic of dependency does not give subtler answers", "Take them one by one"), <TurnScene />],
    [S("Take them one by one", "Ask what stays the same underneath"), <EdgeScene />],
    [S("Ask what stays the same underneath", "Ask where it came from"), <CarrierScene />],
    [S("Ask where it came from", "Ask whether it is the same as its source"), <FromToScene />],
    [S("Ask whether it is the same as its source", "The decisive point is easy to miss"), <SeedScene />],
    [S("The decisive point is easy to miss", "If a sprout could be found arising from its seed"), <DecisiveScene />],
    [S("If a sprout could be found arising from its seed", "This turns ordinary experience upside down"), <CoinScene />],
    [S("This turns ordinary experience upside down", "Both descriptions hold of every appearance"), <LampScene />],
    [S("Both descriptions hold of every appearance", null), <BothScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
