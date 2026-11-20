// Bonus article: When Thinking Drains the Qi (AA30).
// (EBooks Bonus Articles/when-thinking-drains-the-qi, draft of 2026-11-20.)
// Arc: the morning at the desk -> the three-session question -> two AI answers, checked -> the verdict -> the popular
// story (struck point by point: 20% all the time, held steady; sitting lowers flow, walks stop it; a jam, not an empty
// tank; no flush; breaks vs workouts) -> Suwen 39, the knot -> the sources put right -> excess above, deficiency below
// -> jing, qi, shen as a candle -> a description, not a stuff -> the plan in three panels -> added and dropped ->
// praise is not proof -> what survived.
// Stance: qi is never drawn as a fluid or substance; "blood pools in the head", "flush" and "out of fuel" are drawn
// only to be struck. He advises no one: the plan is drawn as "my plan". Cue phrases avoid the respelled words
// (qi, qigong, taijiquan, Suwen, Lingshu, Wiehler), numbers and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words, numbers or hyphenated words inside.
export const PHRASES = [
  // opening
  "One morning I noticed something simple", "When I focus too hard on mental work", "It is as if thinking itself uses",
  "Then I exercise for half an hour", "I felt it had something to do with blood circulation", "I am John Tan, known as Thusness",
  // the question
  "So I asked a second question", "Once in the morning", "Once at lunch", "Once in the evening, after dinner",
  "Keep the blood flowing", "Keep the energy up", "Clear the blockage",
  // checking
  "I put both questions to an AI", "Later I asked another AI tool", "Then I checked both myself",
  // verdict
  "What is left after that checking is short", "The observation holds", "plan holds too",
  "But the most popular explanation of why it works is wrong", "the correction is more interesting",
  // popular story
  "Here is the popular story", "The brain is only about two percent", "it uses about twenty percent",
  "the body sends a massive amount of sugar", "That drains the rest of the system", "Blood and",
  "It sounds right", "But most of it does not hold up",
  // numbers
  "Start with the numbers", "But it uses that much all the time", "At rest", "Even in sleep",
  "Hard thinking adds only a few percent on top", "little more than daydreaming does",
  "And the body holds blood flow to the brain steady", "Tightly", "So thinking does not drain the body's blood",
  // sitting
  "Now the second part of the story", "Here the truth runs the other way", "Sophie Carter and her colleagues",
  "People sat for four hours without a break", "blood flow to the brain went down", "When the legs do not move",
  "It settles in the lower body", "easy walk every half hour stopped the drop completely",
  "do not come from too much blood up top", "They come from too little movement below",
  // fuel
  "That is the third part", "Run out of fuel", "The research points somewhere else",
  "Antonius", "Those who did hard mental tasks all day had more glutamate",
  "Glutamate is a chemical the brain uses to pass signals", "impulsive choices as the day ended",
  "A kind of protective brake", "That is their hypothesis, not a proven fact", "And the study was small",
  // jam
  "But it fits my experience better than running out of fuel", "It feels less like an empty tank", "More like a jam",
  // flush and breaks
  "The first answer added one more image", "flushes these byproducts out of the brain", "But I found no study",
  "What is shown is narrower", "Short walking breaks keep blood flow to the brain from falling",
  "And exercise helps attention and mood", "I keep the benefit, and drop the flushing story",
  "One more correction", "They break up long sitting", "it does not make one long workout worse in general",
  "It is not a law for everyone",
  // the classic
  "Now the classical side", "The Yellow Emperor's Inner Classic", "chapter",
  "thinking knots the", "Then it explains", "the heart holds on to something", "and the spirit gathers there",
  "stays, and does not move", "So the", "This is precise", "The text does not say thinking burns up the",
  "Stuck, not empty", "That matches sitting still", "a brain that is jammed rather than out of fuel",
  // the sources
  "The AI report also had the classics wrong in places", "thinking injures the Spleen", "chapter eight",
  "The saying is from the", "says something close but different",
  "The report also said the old classic teaches", "That idea belongs to later Chinese medicine",
  "But it should carry its own date", "And it used a saying from", "where the mind goes, the", "In practice, that is a principle",
  "Reading it as a cause of illness is the report's own idea",
  // excess above
  "There is a sound point inside it, though", "If attention sits in the head for hours", "Nothing moves below",
  "excess above, deficiency below", "As a description of how it feels, it fits well",
  "As a claim about blood piling up in the skull, it does not",
  // three treasures
  "The Taoist tradition speaks of three treasures", "Jing, essence", "breath and energy", "And shen, spirit and mind",
  "Inner alchemy treats them as one life force", "A teaching image I find useful is a candle",
  "Jing is the wax and the wick", "is the flame", "Shen is the light",
  "a long morning of hard thinking is a bright light", "Exercise feeds the flame, and moves it again",
  // description
  "I keep this as a description, not a mechanism", "Blood flow, glutamate and sitting are what happens in the body",
  "are a way of feeling and naming the whole of it", "The two do not compete", "is not a hidden stuff",
  "was vapour and breath", "It is not a substance standing behind warmth", "When I say my",
  "The words point to how the body is working", "Not to a fluid that thinking drains away",
  // the plan
  "So here is the plan I asked about", "In the morning, movement wakes the body",
  "Feed the flame before the light is asked to shine", "At lunch, a walk breaks up a long morning of sitting",
  "It unties the knot that thinking tied", "In the evening, an easy walk after dinner",
  "Kept gentle, it helps the body wind down for sleep", "comes down from the head to the belly",
  // added and dropped
  "The checking added one more piece", "So three sessions may not be enough on their own",
  "Getting up for a short walk in between matters too", "The study tested two minutes, every half hour",
  "And one thing I dropped", "I could not find good support for that", "So it is not in my plan",
  // AI answers
  "A last word on checking AI answers", "It called my observation profoundly accurate",
  "But its central explanation, blood rushing to the head, was wrong", "Praise is not proof",
  "The second, a research report, was better", "But it also misplaced classical quotations",
  "It stretched one study further than it went", "several sources I could not trace at all",
  "A preprint is a paper before peer review",
  // end
  "What survived the checking is small, but solid", "My own experience", "One line from the", "And two studies",
  "That is enough",
];

const M = {
  dawn: { a: "rgba(190,140,60,0.45)", b: "rgba(70,60,150,0.4)", c: "rgba(50,120,130,0.3)" },
  desk: { a: "rgba(45,50,120,0.5)", b: "rgba(140,100,45,0.34)", c: "rgba(35,80,115,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  science: { a: "rgba(30,90,120,0.5)", b: "rgba(60,50,140,0.42)", c: "rgba(40,120,110,0.32)" },
  classic: { a: "rgba(150,90,40,0.5)", b: "rgba(110,40,40,0.36)", c: "rgba(60,50,110,0.32)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  warm: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
};

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
const Items: React.FC<{ items: It[] }> = ({ items }) => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <>
      {items.map(([cue, x, y, node, opt = {} as Opt], i) => {
        const a = c(cue) + (opt.d ?? 0);
        const out = opt.until ? 1 - ramp(t, c(opt.until) + (opt.ud ?? 0), 0.4) : 1;
        return (
          <At key={i} x={x} y={y} o={ramp(t, a, 0.5) * out * (opt.o ?? 1)} s={opt.pop ? pop(t, fps, a) : undefined}>
            {node}
          </At>
        );
      })}
    </>
  );
};
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;
/** A chip struck through at `at`: only for what does not hold. */
const SK: React.FC<{ c?: string; s?: number; at: string; children: React.ReactNode }> = ({ c = DIM, s = 30, at, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at)} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "22px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10, whiteSpace: "normal" }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
  </div>
);
const Han: React.FC<{ s?: number; c?: string; children: React.ReactNode }> = ({ s = 120, c = GOLD, children }) => (
  <div style={{ fontFamily: "'Noto Serif CJK SC','Noto Sans CJK SC',serif", fontSize: s, color: c, fontWeight: 600,
    textShadow: `0 0 20px ${c}, 0 0 50px ${c}66`, whiteSpace: "nowrap" }}>{children}</div>
);

// ---------------------------------------------------------------- drawings
/** A seated figure at a desk; `bend` 0..1 slumps the head forward. */
const DeskFigure: React.FC<{ p: number; bend?: number; color?: string }> = ({ p, bend = 0, color = CHALK }) => (
  <svg width={520} height={420} viewBox="0 0 520 420" style={{ overflow: "visible" }}>
    <g transform={`rotate(${bend * 14} 210 210)`}>
      <DrawPath d="M210 60 a40 40 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={260} />
      <DrawPath d="M210 140 L200 280 M205 180 L300 230" p={p} color={color} width={5} len={360} />
    </g>
    <DrawPath d="M200 280 L300 290 L300 390 M200 280 L190 390" p={p} color={color} width={5} len={420} />
    <DrawPath d="M260 240 L480 240 M300 240 L300 400 M460 240 L460 400" p={p} color={DIM} width={5} len={600} />
    <DrawPath d="M330 236 L410 236 L420 210 L340 210 Z" p={p} color={ICE} width={3} len={300} />
  </svg>
);
/** A walking figure. */
const Walker: React.FC<{ p: number; color?: string; phase?: number }> = ({ p, color = GREEN, phase = 0 }) => {
  const sw = Math.sin(phase) * 22;
  return (
    <svg width={260} height={420} viewBox="0 0 260 420" style={{ overflow: "visible" }}>
      <DrawPath d="M130 40 a36 36 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={240} />
      <DrawPath d="M130 112 L130 250" p={p} color={color} width={5} len={140} />
      <DrawPath d={`M130 150 L${90 - sw} 220 M130 150 L${170 + sw} 220`} p={p} color={color} width={5} len={200} />
      <DrawPath d={`M130 250 L${95 + sw} 380 M130 250 L${165 - sw} 380`} p={p} color={color} width={5} len={300} />
    </svg>
  );
};
/** A simple brain outline with an optional fill colour. */
const Brain: React.FC<{ p: number; fill?: string; size?: number }> = ({ p, fill = "none", size = 360 }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 400 300" style={{ overflow: "visible" }}>
    <DrawPath d="M200 40 C140 10 70 40 60 100 C20 120 20 190 70 210 C80 260 150 280 200 250 C250 280 320 260 330 210 C380 190 380 120 340 100 C330 40 260 10 200 40 Z"
      p={p} color={ROSE} width={5} len={1300} fill={fill} />
    <DrawPath d="M200 40 L200 250 M110 100 C140 120 130 160 100 180 M290 100 C260 120 270 160 300 180" p={p} color={`${ROSE}aa`} width={3} len={700} />
  </svg>
);
/** A fuel gauge, needle 0..1. */
const Gauge: React.FC<{ v: number }> = ({ v }) => {
  const a = -80 + v * 160;
  return (
    <svg width={300} height={200} viewBox="-150 -150 300 200" style={{ overflow: "visible" }}>
      <path d="M-120 0 A120 120 0 0 1 120 0" stroke={DIM} strokeWidth={6} fill="none" />
      <text x={-130} y={30} fill={WARM} fontSize={30} fontFamily="SourceSans">E</text>
      <text x={112} y={30} fill={GREEN} fontSize={30} fontFamily="SourceSans">F</text>
      <line x1={0} y1={0} x2={0} y2={-100} stroke={GOLD} strokeWidth={6} strokeLinecap="round" transform={`rotate(${a})`}
        style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
      <circle r={10} fill={GOLD} />
    </svg>
  );
};
/** A row of small cars, stuck: a jam. */
const Jam: React.FC<{ p: number }> = ({ p }) => {
  const { t } = useT();
  return (
    <svg width={760} height={160} viewBox="0 0 760 160" style={{ overflow: "visible" }}>
      <line x1={0} y1={130} x2={760} y2={130} stroke={DIM} strokeWidth={4} />
      {Array.from({ length: 7 }).map((_, i) => {
        const x = 20 + i * 104 + Math.sin(t * 3 + i) * 1.5;
        const col = [GOLD, TEAL, VIOLET, ICE, ROSE, GREEN, WARM][i];
        return <g key={i} opacity={ramp(p, i / 9, 0.2)}>
          <rect x={x} y={84} width={88} height={34} rx={10} fill={`${col}33`} stroke={col} strokeWidth={4} />
          <rect x={x + 18} y={62} width={50} height={26} rx={8} fill="none" stroke={col} strokeWidth={3} />
          <circle cx={x + 20} cy={122} r={9} fill="#0b0c1a" stroke={col} strokeWidth={3} />
          <circle cx={x + 68} cy={122} r={9} fill="#0b0c1a" stroke={col} strokeWidth={3} />
        </g>;
      })}
    </svg>
  );
};
/** A cord with a knot in the middle; `tie` 0..1 tightens it. */
const Knot: React.FC<{ p: number; tie: number }> = ({ p, tie }) => {
  const r = 70 - tie * 40;
  return (
    <svg width={900} height={300} viewBox="0 0 900 300" style={{ overflow: "visible" }}>
      <DrawPath d={`M20 150 C200 150 300 150 ${450 - r} 150 C${450 - r} ${150 - r * 1.4} ${450 + r} ${150 - r * 1.4} ${450 + r} 150 C${450 + r} ${150 + r * 1.2} ${450 - r * 0.6} ${150 + r * 1.2} ${450 - r * 0.3} 150 C${450} 140 ${470} 150 ${450 + r * 1.2} 150 C600 150 700 150 880 150`}
        p={p} color={GOLD} width={9} len={2400} />
    </svg>
  );
};
/** A candle: wax, wick, flame, light. `flame` 0..1. */
const Candle: React.FC<{ p: number; flame: number; light: number }> = ({ p, flame, light }) => {
  const { t } = useT();
  const fl = 1 + Math.sin(t * 9) * 0.05;
  return (
    <svg width={400} height={560} viewBox="0 0 400 560" style={{ overflow: "visible" }}>
      <circle cx={200} cy={150} r={60 + light * 120} fill={`${GOLD}`} opacity={0.08 + light * 0.18} style={{ filter: "blur(30px)" }} />
      <DrawPath d="M130 260 L130 540 L270 540 L270 260 C250 250 150 250 130 260 Z" p={p} color={CHALK} width={5} len={900} fill="rgba(241,236,224,0.08)" />
      <DrawPath d="M200 255 L200 220" p={p} color={DIM} width={5} len={40} />
      <g transform={`translate(200 215) scale(${flame * fl}) translate(-200 -215)`} opacity={flame}>
        <path d="M200 120 C230 165 232 200 200 220 C168 200 170 165 200 120 Z" fill="rgba(255,170,80,0.7)" stroke={WARM} strokeWidth={4}
          style={{ filter: `drop-shadow(0 0 16px ${WARM})` }} />
        <path d="M200 160 C212 180 212 200 200 210 C188 200 188 180 200 160 Z" fill="#FFF3C8" />
      </g>
    </svg>
  );
};
/** A wall clock; hands turn with time. */
const Clock: React.FC<{ speed?: number }> = ({ speed = 60 }) => {
  const { t } = useT();
  return (
    <svg width={200} height={200} viewBox="-100 -100 200 200">
      <circle r={88} stroke={CHALK} strokeWidth={5} fill="rgba(10,12,30,0.6)" />
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={0} y1={-76} x2={0} y2={-66} stroke={DIM} strokeWidth={4} transform={`rotate(${i * 30})`} />)}
      <line x1={0} y1={0} x2={0} y2={-58} stroke={GOLD} strokeWidth={6} strokeLinecap="round" transform={`rotate(${t * speed})`} />
      <line x1={0} y1={0} x2={0} y2={-40} stroke={CHALK} strokeWidth={7} strokeLinecap="round" transform={`rotate(${t * speed / 12})`} />
    </svg>
  );
};
/** A chat bubble. */
const Bubble: React.FC<{ c: string; title: string; lines: string[] }> = ({ c, title, lines }) => (
  <div style={{ width: 600, padding: "24px 30px", borderRadius: 30, border: `3px solid ${c}`, background: "rgba(10,12,30,0.75)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "left" }}>
    <Wd c={c} s={36} serif>{title}</Wd>
    {lines.map((l, i) => <div key={i} style={{ marginTop: 10 }}><Wd c={CHALK} s={28}>{l}</Wd></div>)}
  </div>
);
/** A body outline with blood-flow dots, `low` 0..1 settles them in the legs. */
const FlowBody: React.FC<{ p: number; low: number }> = ({ p, low }) => {
  const { t } = useT();
  return (
    <svg width={300} height={560} viewBox="0 0 300 560" style={{ overflow: "visible" }}>
      <DrawPath d="M150 30 a40 40 0 1 1 -0.1 0 Z" p={p} color={CHALK} width={4} len={260} />
      <DrawPath d="M150 110 L150 330 M150 160 L80 260 M150 160 L220 260 M150 330 L100 520 M150 330 L200 520" p={p} color={CHALK} width={4} len={900} />
      {Array.from({ length: 18 }).map((_, i) => {
        const k = ((t * 0.25 + i / 18) % 1);
        const legsBias = low;
        const y = 60 + (k * (1 - legsBias) + legsBias * (0.6 + 0.4 * ((i * 37) % 18) / 18)) * 460;
        const x = 150 + Math.sin(i * 2.1 + t) * (y > 330 ? 40 : 14);
        return <circle key={i} cx={x} cy={y} r={8} fill={WARM} opacity={0.75 * p} style={{ filter: `drop-shadow(0 0 6px ${WARM})` }} />;
      })}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const MorningScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const walk = c("Then I exercise for half an hour");
  return (
    <AbsoluteFill>
      <At x={760} y={460} o={ramp(t, 0.2, 0.8) * (1 - ramp(t, walk, 0.6))}>
        <DeskFigure p={ramp(t, 0.2, 2)} bend={ramp(t, c("When I focus too hard on mental work"), 3)} />
      </At>
      <At x={760} y={460} o={ramp(t, walk + 0.3, 0.6)}><Walker p={ramp(t, walk + 0.3, 1.6)} phase={t * 3} /></At>
      <Items items={[
        ["When I focus too hard on mental work", 1340, 330, <K c={DIM}>too much mental work</K>, { until: "Then I exercise for half an hour" }],
        ["It is as if thinking itself uses", 1340, 450, <Wd c={WARM} s={40} serif>a lack of qi</Wd>, { until: "Then I exercise for half an hour" }],
        ["Then I exercise for half an hour", 1340, 330, <K c={GREEN}>half an hour of exercise</K>, { d: 0.4 }],
        ["Then I exercise for half an hour", 1340, 450, <Wd c={GREEN} s={40} serif>the qi is strong again</Wd>, { d: 1.2 }],
        ["I felt it had something to do with blood circulation", 1340, 570, <Wd c={DIM} s={30}>blood circulation?</Wd>],
        ["I am John Tan, known as Thusness", 960, 800, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So I asked a second question", 960, 160, <Wd c={CHALK} s={48} serif>Three short sessions a day?</Wd>],
      ["Once in the morning", 480, 430, <Box c={GOLD} w={420} title="Morning" sub="before the desk" />, { pop: true }],
      ["Once at lunch", 960, 430, <Box c={TEAL} w={420} title="Lunch" sub="in the middle" />, { pop: true }],
      ["Once in the evening, after dinner", 1440, 430, <Box c={VIOLET} w={420} title="Evening" sub="after dinner" />, { pop: true }],
      ["Keep the blood flowing", 480, 680, <K c={ROSE}>keep the blood flowing</K>],
      ["Keep the energy up", 960, 680, <K c={GOLD}>keep the energy up</K>],
      ["Clear the blockage", 1440, 680, <K c={TEAL}>clear the blockage</K>],
    ]} />
  </AbsoluteFill>
);

const CheckScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["I put both questions to an AI", 520, 400, <Bubble c={ROSE} title="AI answer" lines={["the first answer"]} />, { pop: true }],
      ["Later I asked another AI tool", 1400, 400, <Bubble c={VIOLET} title="Research report" lines={["checks the first answer"]} />, { pop: true }],
      ["Then I checked both myself", 960, 680, <Wd c={GOLD} s={50} serif>then I checked both myself</Wd>],
    ]} />
  </AbsoluteFill>
);

const VerdictScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The observation holds", 960, 260, <K c={GREEN} s={40}>✓ the observation holds</K>, { pop: true }],
        ["plan holds too", 960, 400, <K c={GREEN} s={40}>✓ the three-session plan holds</K>, { pop: true }],
        ["But the most popular explanation of why it works is wrong", 960, 540, <SK c={WARM} s={40} at="But the most popular explanation of why it works is wrong">the popular explanation of why</SK>, { pop: true }],
        ["the correction is more interesting", 960, 700, <Wd c={GOLD} s={44} serif>the correction is more interesting</Wd>],
      ]} />
      <At x={960} y={110} o={ramp(t, c("What is left after that checking is short"), 0.6)}><Wd c={DIM} s={30}>after the checking</Wd></At>
    </AbsoluteFill>
  );
};

const PopularScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, 0.2, 0.6)}><Wd c={DIM} s={32}>the popular story</Wd></At>
      <At x={620} y={430} o={ramp(t, c("The brain is only about two percent"), 0.6)}><Brain p={ramp(t, c("The brain is only about two percent"), 1.6)} /></At>
      <Items items={[
        ["The brain is only about two percent", 1280, 320, <K c={CHALK} s={36}>2% of body weight</K>],
        ["it uses about twenty percent", 1280, 430, <K c={GOLD} s={36}>20% of the body's energy</K>],
        ["the body sends a massive amount of sugar", 1280, 560, <Wd c={WARM} s={34} serif>"massive blood to the head"</Wd>],
        ["Blood and", 1280, 660, <Wd c={WARM} s={34} serif>"blood and qi pool in the head"</Wd>],
        ["It sounds right", 620, 720, <Wd c={DIM} s={30}>it matches the heavy, full head</Wd>],
        ["But most of it does not hold up", 960, 800, <Wd c={CHALK} s={40} serif>But most of it does not hold up.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const NumbersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const glow = 0.5 + 0.5 * Math.sin(t * 1.2);
  return (
    <AbsoluteFill>
      <At x={560} y={420} o={ramp(t, 0.2, 0.6)}><Brain p={1} fill={`rgba(255,143,163,${0.08 + glow * 0.06})`} /></At>
      <Items items={[
        ["But it uses that much all the time", 1280, 260, <K c={GOLD} s={40}>20%: all the time</K>],
        ["At rest", 1160, 370, <K c={TEAL}>at rest</K>],
        ["Even in sleep", 1420, 370, <K c={VIOLET}>even in sleep</K>],
        ["Hard thinking adds only a few percent on top", 1280, 490, <K c={WARM} s={40}>hard thinking: + a few %</K>],
        ["little more than daydreaming does", 1280, 590, <Wd c={DIM} s={30}>about the same as daydreaming</Wd>],
        ["And the body holds blood flow to the brain steady", 560, 720, <Wd c={ICE} s={36} serif>brain blood flow: held steady</Wd>],
        ["So thinking does not drain the body's blood", 1280, 720, <SK c={WARM} s={32} at="So thinking does not drain the body's blood">thinking drains the body's blood</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const SittingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sit = c("People sat for four hours without a break");
  const walk = c("easy walk every half hour stopped the drop completely");
  const low = ramp(t, c("When the legs do not move"), 3) * (1 - ramp(t, walk, 2));
  return (
    <AbsoluteFill>
      <At x={480} y={440} o={ramp(t, sit, 0.6)}><FlowBody p={ramp(t, sit, 1.4)} low={low} /></At>
      <At x={830} y={250} o={ramp(t, sit, 0.6) * (1 - ramp(t, walk, 0.6))}><Clock speed={120} /></At>
      <Items items={[
        ["Here the truth runs the other way", 960, 110, <Wd c={CHALK} s={40} serif>The truth runs the other way</Wd>],
        ["Sophie Carter and her colleagues", 1350, 250, <K c={TEAL} s={32}>Carter and colleagues, 2018</K>],
        ["People sat for four hours without a break", 1350, 350, <Wd c={CHALK} s={32}>four hours sitting, no break</Wd>],
        ["blood flow to the brain went down", 1350, 440, <Wd c={WARM} s={34} serif>brain blood flow went down</Wd>],
        ["It settles in the lower body", 1350, 530, <Wd c={DIM} s={30}>blood settles in the legs</Wd>],
        ["easy walk every half hour stopped the drop completely", 1350, 640, <K c={GREEN} s={34}>2-min walk every 30 min: no drop</K>, { pop: true }],
        ["They come from too little movement below", 960, 800, <Wd c={GOLD} s={38} serif>not too much above, too little movement below</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FuelScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const g = c("Run out of fuel");
  return (
    <AbsoluteFill>
      <At x={480} y={330} o={ramp(t, g, 0.6) * (1 - ramp(t, c("The research points somewhere else"), 0.6) * 0.6)}>
        <Gauge v={0.04} />
      </At>
      <Items items={[
        ["Run out of fuel", 480, 470, <SK c={WARM} at="The research points somewhere else">out of fuel</SK>],
        ["Antonius", 1300, 200, <K c={TEAL} s={32}>Wiehler and colleagues, Paris, 2022</K>],
        ["Those who did hard mental tasks all day had more glutamate", 1300, 310, <Wd c={CHALK} s={32}>a day of hard mental work</Wd>],
        ["Those who did hard mental tasks all day had more glutamate", 1300, 390, <Wd c={GOLD} s={36} serif>→ more glutamate, front of the brain</Wd>, { d: 1 }],
        ["Glutamate is a chemical the brain uses to pass signals", 1300, 470, <Wd c={DIM} s={28}>a signalling chemical</Wd>],
        ["impulsive choices as the day ended", 1300, 550, <Wd c={CHALK} s={30}>more impulsive choices by evening</Wd>],
        ["A kind of protective brake", 760, 680, <K c={VIOLET} s={34}>a protective brake?</K>, { pop: true }],
        ["That is their hypothesis, not a proven fact", 1200, 680, <K c={DIM} s={30}>their hypothesis</K>],
        ["And the study was small", 1530, 680, <K c={DIM} s={30}>a small study</K>],
      ]} />
    </AbsoluteFill>
  );
};

const JamScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tank = c("It feels less like an empty tank");
  const jam = c("More like a jam");
  return (
    <AbsoluteFill>
      <At x={960} y={180} o={ramp(t, 0.1, 0.6)}><Wd c={CHALK} s={40} serif>It fits my experience better</Wd></At>
      <At x={480} y={440} o={ramp(t, tank, 0.6)}><Gauge v={0.04} /></At>
      <At x={480} y={600} o={ramp(t, tank, 0.6)}><SK c={DIM} s={32} at="More like a jam">an empty tank</SK></At>
      <At x={1280} y={440} o={ramp(t, jam, 0.6)}><Jam p={ramp(t, jam, 2)} /></At>
      <At x={1280} y={600} o={ramp(t, jam + 0.6, 0.6)}><K c={GOLD} s={40}>a jam</K></At>
    </AbsoluteFill>
  );
};

const FlushScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["flushes these byproducts out of the brain", 960, 170, <SK c={WARM} s={36} at="But I found no study">"exercise flushes the brain"</SK>],
      ["What is shown is narrower", 960, 290, <Wd c={CHALK} s={38} serif>what is shown is narrower</Wd>],
      ["Short walking breaks keep blood flow to the brain from falling", 640, 400, <K c={GREEN}>short walks: brain blood flow kept up</K>],
      ["And exercise helps attention and mood", 1320, 400, <K c={TEAL}>exercise: attention and mood</K>],
      ["One more correction", 960, 540, <Wd c={DIM} s={32}>one more correction</Wd>],
      ["They break up long sitting", 600, 650, <Box c={GOLD} w={500} title="Short breaks" sub="best at breaking up sitting" />, { pop: true }],
      ["it does not make one long workout worse in general", 1320, 650, <Box c={VIOLET} w={500} title="One long workout" sub="not worse in general" />, { pop: true }],
      ["It is not a law for everyone", 960, 810, <Wd c={DIM} s={30}>a tool for a desk-bound thinker, not a law for everyone</Wd>],
    ]} />
  </AbsoluteFill>
);

const ClassicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const knot = c("thinking knots the");
  const tie = ramp(t, c("stays, and does not move"), 2.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The Yellow Emperor's Inner Classic", 960, 130, <Wd c={GOLD} s={44} serif>The Yellow Emperor's Inner Classic</Wd>, { until: "thinking knots the" }],
        ["chapter", 960, 220, <Wd c={DIM} s={32}>Suwen 39 · nine ways the mind changes the qi</Wd>, { until: "thinking knots the" }],
      ]} />
      <At x={960} y={200} o={ramp(t, knot, 0.8)}><Han s={130}>思则气结</Han></At>
      <At x={960} y={330} o={ramp(t, knot + 0.8, 0.6)}><Wd c={CHALK} s={42} serif>Thinking knots the qi</Wd></At>
      <At x={960} y={520} o={ramp(t, c("Then it explains"), 0.6)}><Knot p={ramp(t, c("Then it explains"), 2)} tie={tie} /></At>
      <Items items={[
        ["the heart holds on to something", 560, 680, <K c={ROSE}>the heart holds on</K>],
        ["and the spirit gathers there", 960, 680, <K c={VIOLET}>the spirit gathers</K>],
        ["stays, and does not move", 1360, 680, <K c={GOLD}>the qi stays, does not move</K>],
        ["Stuck, not empty", 960, 800, <Wd c={GOLD} s={48} serif>Stuck, not empty.</Wd>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const SourcesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The AI report also had the classics wrong in places", 960, 110, <Wd c={CHALK} s={40} serif>Getting the sources right</Wd>],
      ["thinking injures the Spleen", 960, 230, <Wd c={GOLD} s={40} serif>思伤脾 · "thinking injures the Spleen"</Wd>],
      ["chapter eight", 700, 330, <SK c={WARM} s={30} at="The saying is from the">Lingshu 8</SK>],
      ["The saying is from the", 1220, 330, <K c={GREEN} s={30}>Suwen 5</K>, { pop: true }],
      ["The report also said the old classic teaches", 960, 450, <Wd c={CHALK} s={30}>weak Spleen → no Heart Blood → restless shen</Wd>],
      ["That idea belongs to later Chinese medicine", 960, 520, <K c={DIM} s={28}>later Chinese medicine: it carries its own date</K>],
      ["where the mind goes, the", 960, 640, <Wd c={GOLD} s={40} serif>意到气到 · where the mind goes, the qi goes</Wd>],
      ["In practice, that is a principle", 700, 750, <K c={GREEN} s={30}>a principle of practice</K>],
      ["Reading it as a cause of illness is the report's own idea", 1240, 750, <SK c={WARM} s={30} at="Reading it as a cause of illness is the report's own idea">a cause of illness</SK>],
    ]} />
  </AbsoluteFill>
);

const ExcessScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={560} y={460} o={ramp(t, c("If attention sits in the head for hours"), 0.6)}>
        <svg width={300} height={560} viewBox="0 0 300 560" style={{ overflow: "visible" }}>
          <circle cx={150} cy={70} r={60} fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 20px ${GOLD})` }} />
          <path d="M150 130 L150 330 M150 170 L80 260 M150 170 L220 260 M150 330 L100 520 M150 330 L200 520" stroke={DIM} strokeWidth={4} fill="none" strokeDasharray="10 10" />
        </svg>
      </At>
      <Items items={[
        ["If attention sits in the head for hours", 1250, 260, <K c={GOLD}>everything gathers in the head</K>],
        ["Nothing moves below", 1250, 360, <K c={DIM}>nothing moves below</K>],
        ["excess above, deficiency below", 1250, 480, <Wd c={GOLD} s={42} serif>上实下虚 · excess above, deficiency below</Wd>],
        ["As a description of how it feels, it fits well", 1250, 600, <K c={GREEN}>✓ as a description of the feeling</K>],
        ["As a claim about blood piling up in the skull, it does not", 1250, 700, <SK c={WARM} at="As a claim about blood piling up in the skull, it does not">blood piling up in the skull</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const TreasuresScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const candle = c("A teaching image I find useful is a candle");
  const early = 1 - ramp(t, candle, 0.6);
  const flame = ramp(t, c("is the flame"), 1) * (1 - 0.55 * ramp(t, c("a long morning of hard thinking is a bright light"), 1.5))
    + 0.55 * ramp(t, c("Exercise feeds the flame, and moves it again"), 1.5);
  const light = ramp(t, c("Shen is the light"), 1);
  return (
    <AbsoluteFill>
      <At x={960} y={220} o={ramp(t, 0.2, 0.8) * early}><Han s={150}>精 · 气 · 神</Han></At>
      <Items items={[
        ["Jing, essence", 620, 420, <K c={CHALK} s={36}>jing · essence</K>, { until: "A teaching image I find useful is a candle" }],
        ["breath and energy", 960, 420, <K c={WARM} s={36}>qi · breath, energy</K>, { until: "A teaching image I find useful is a candle" }],
        ["And shen, spirit and mind", 1300, 420, <K c={GOLD} s={36}>shen · spirit, mind</K>, { until: "A teaching image I find useful is a candle" }],
        ["Inner alchemy treats them as one life force", 960, 560, <Wd c={DIM} s={32}>one life force, finer and finer · essence → qi → spirit</Wd>, { until: "A teaching image I find useful is a candle" }],
      ]} />
      <At x={620} y={500} o={ramp(t, candle, 0.6)}><Candle p={ramp(t, candle, 1.6)} flame={Math.min(1, flame)} light={light} /></At>
      <Items items={[
        ["Jing is the wax and the wick", 1260, 680, <K c={CHALK}>精 wax and wick: reserves, basic health</K>],
        ["is the flame", 1260, 450, <K c={WARM}>气 flame: breath, circulation, movement</K>],
        ["Shen is the light", 1260, 230, <K c={GOLD}>神 light: awareness, focus, thinking</K>],
        ["a long morning of hard thinking is a bright light", 1260, 800, <Wd c={DIM} s={28}>a bright light, a flame not fed</Wd>, { until: "Exercise feeds the flame, and moves it again" }],
        ["Exercise feeds the flame, and moves it again", 1260, 800, <Wd c={GREEN} s={30}>movement feeds the flame</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DescriptionScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["I keep this as a description, not a mechanism", 960, 120, <Wd c={CHALK} s={44} serif>A description, not a mechanism</Wd>],
      ["Blood flow, glutamate and sitting are what happens in the body", 560, 300, <Box c={TEAL} w={560} title="In the body" sub="blood flow, glutamate, sitting" />, { pop: true }],
      ["are a way of feeling and naming the whole of it", 1360, 300, <Box c={GOLD} w={560} title="From the inside" sub="jing, qi, shen: feeling and naming" />, { pop: true }],
      ["The two do not compete", 960, 440, <Wd c={DIM} s={32}>the two do not compete</Wd>],
      ["is not a hidden stuff", 960, 560, <SK c={WARM} s={34} at="It is not a substance standing behind warmth">qi as a hidden stuff</SK>],
      ["was vapour and breath", 960, 660, <K c={ICE}>气: first, vapour and breath</K>],
      ["The words point to how the body is working", 960, 780, <Wd c={GOLD} s={36} serif>words for how the body is working</Wd>],
    ]} />
  </AbsoluteFill>
);

const PlanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, 0.2, 0.6)}><Wd c={CHALK} s={40} serif>My plan, after the checking</Wd></At>
      <Items items={[
        ["In the morning, movement wakes the body", 400, 380, <Box c={GOLD} w={500} title="Morning" sub="wakes the body, gets the blood moving" />, { pop: true }],
        ["Feed the flame before the light is asked to shine", 400, 560, <Wd c={DIM} s={28}>feed the flame first</Wd>],
        ["At lunch, a walk breaks up a long morning of sitting", 960, 380, <Box c={TEAL} w={500} title="Lunch" sub="breaks up sitting; brain blood flow back up" />, { pop: true }],
        ["It unties the knot that thinking tied", 960, 560, <Wd c={DIM} s={28}>untie the knot</Wd>],
        ["In the evening, an easy walk after dinner", 1520, 380, <Box c={VIOLET} w={500} title="Evening" sub="an easy walk lowers after-meal blood sugar" />, { pop: true }],
        ["comes down from the head to the belly", 1520, 560, <Wd c={DIM} s={28}>bring the qi down; rest</Wd>],
      ]} />
      <At x={960} y={720} o={ramp(t, c("In the evening, an easy walk after dinner"), 0.6)}><Walker p={ramp(t, c("In the evening, an easy walk after dinner"), 1.4)} phase={t * 3} color={GREEN} /></At>
    </AbsoluteFill>
  );
};

const AddedScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The checking added one more piece", 960, 150, <Wd c={CHALK} s={42} serif>Added, and dropped</Wd>],
      ["So three sessions may not be enough on their own", 960, 300, <Wd c={CHALK} s={32}>a long morning of writing: three sessions may not be enough</Wd>],
      ["Getting up for a short walk in between matters too", 960, 400, <K c={GREEN} s={36}>+ short walks in between</K>, { pop: true }],
      ["The study tested two minutes, every half hour", 960, 490, <Wd c={DIM} s={28}>the 2018 study: two minutes every 30 minutes</Wd>],
      ["And one thing I dropped", 960, 630, <SK c={WARM} s={32} at="I could not find good support for that">"morning exercise boosts the cortisol rise"</SK>],
      ["So it is not in my plan", 960, 740, <Wd c={DIM} s={28}>no good support found · not in my plan</Wd>],
    ]} />
  </AbsoluteFill>
);

const AIScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["It called my observation profoundly accurate", 520, 330, <Bubble c={ROSE} title="The first answer" lines={["\"profoundly accurate\"", "\"perfect\""]} />, { pop: true }],
      ["But its central explanation, blood rushing to the head, was wrong", 520, 540, <SK c={WARM} s={30} at="But its central explanation, blood rushing to the head, was wrong">blood rushing to the head</SK>],
      ["Praise is not proof", 960, 780, <Wd c={GOLD} s={56} serif>Praise is not proof.</Wd>, { pop: true }],
      ["The second, a research report, was better", 1400, 330, <Bubble c={VIOLET} title="The research report" lines={["corrected the blood-flow story", "two good studies"]} />, { pop: true }],
      ["But it also misplaced classical quotations", 1400, 500, <K c={WARM} s={26}>misplaced quotations</K>],
      ["It stretched one study further than it went", 1400, 570, <K c={WARM} s={26}>stretched a study</K>],
      ["several sources I could not trace at all", 1400, 640, <K c={WARM} s={26}>untraceable sources</K>],
    ]} />
  </AbsoluteFill>
);

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const out = 1 - ramp(t, c("That is enough") + 2.5, 1.2);
  return (
    <AbsoluteFill style={{ opacity: out }}>
      <Items items={[
        ["What survived the checking is small, but solid", 960, 180, <Wd c={DIM} s={36}>What survived the checking</Wd>],
        ["My own experience", 960, 330, <K c={GOLD} s={40}>my own experience</K>, { pop: true }],
        ["One line from the", 960, 450, <K c={GOLD} s={40}>思则气结 · one line of Suwen 39</K>, { pop: true }],
        ["And two studies", 960, 570, <K c={GOLD} s={40}>two studies</K>, { pop: true }],
        ["That is enough", 960, 730, <Wd c={CHALK} s={60} serif>That is enough.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["One morning I noticed something simple", "dawn", <MorningScene />],
    ["So I asked a second question", "warm", <QuestionScene />],
    ["I put both questions to an AI", "desk", <CheckScene />],
    ["What is left after that checking is short", "warm", <VerdictScene />],
    ["Here is the popular story", "doubt", <PopularScene />],
    ["Start with the numbers", "science", <NumbersScene />],
    ["Now the second part of the story", "science", <SittingScene />],
    ["That is the third part", "science", <FuelScene />],
    ["But it fits my experience better than running out of fuel", "desk", <JamScene />],
    ["The first answer added one more image", "doubt", <FlushScene />],
    ["Now the classical side", "classic", <ClassicScene />],
    ["The AI report also had the classics wrong in places", "classic", <SourcesScene />],
    ["There is a sound point inside it, though", "jade", <ExcessScene />],
    ["The Taoist tradition speaks of three treasures", "night", <TreasuresScene />],
    ["I keep this as a description, not a mechanism", "jade", <DescriptionScene />],
    ["So here is the plan I asked about", "dawn", <PlanScene />],
    ["The checking added one more piece", "warm", <AddedScene />],
    ["A last word on checking AI answers", "doubt", <AIScene />],
    ["What survived the checking is small, but solid", "night", <EndScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([cue, k], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][0], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, , node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
