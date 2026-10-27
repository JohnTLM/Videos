// After Anatta 9: Decoding Anatta and MMK Chapter 3. Explainer drawings timed to the narration.
// Arc: Bahiya ("in the seen, just the seen") beside Nagarjuna's chapter 3 ("no seer without the seen") -> they look opposed ->
// subject, verb, object: a fact about sentences, the logic of substance -> Bahiya: the tree, vivid, no seer behind it ->
// insight drifts back: a missing subject, a big awareness -> Nagarjuna takes the grammar at its word: a seer not seeing (name
// only), a seer seeing (seeing counted twice), the walker -> the seer not found with or without seeing, the seen likewise ->
// the verse read again: not a seer put back, the seer taken apart -> "depend" does not join two things; fire and fuel ->
// the two teachings meet: direct taste and logic -> one more step: "just seeing" made a thing (stream, process, field) ->
// seer, seeing and seen named together; dependent arising is emptiness, the middle way -> nothing taken away; the grammar
// is only for talking -> try it.
// Stance: emptiness is never drawn as a ground, field or container. Only invented things are struck: a seer standing behind,
// the seer as a big awareness, a seer on its own side, two solid things joined by a thread, seeing as a stream, process or
// field. The tree, the colour, the fire and the wood stay vivid and working.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  SERIF, Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words (names) inside.
export const PHRASES = [
  // the puzzle
  "The Buddha told a wandering ascetic named Bahiya", "in the seen, there will be just the seen", "No one behind the eyes",
  "in chapter three of his Fundamental Verses", "without a seer, there is no seen", "And without the seen, there is no seer",
  "Read quickly, these two sound opposed", "The Buddha takes the seer away", "Nagarjuna seems to put it back",
  "why they say the same thing",
  "This is After Anatta",
  // subject, verb, object
  "Start with how we usually talk", "I see the tree", "There is someone here, the seer", "There is something there, the tree",
  "And there is an act that crosses the gap between them", "Subject, verb, object", "Three parts",
  "That shape feels like a fact about the world", "It is a fact about sentences", "A sentence holds a subject still",
  "Every action needs someone doing it", "Every seeing needs a seer",
  "This is the logic of substance", "Things are there first", "Then they act, and are acted on",
  // Bahiya
  "Bahiya was told to drop that shape", "In seeing, just the seen", "There is the tree, vivid and bright",
  "Look for a seer standing behind it", "Simply none", "The seeing has no centre", "This is the insight of anatta",
  "It is direct",
  // drifting back
  "But insight is not yet understanding", "keep the old grammar in their thinking", "a gap where it used to be",
  "big, impersonal awareness", "wearing a larger coat",
  // Nagarjuna's move
  "This is where Nagarjuna comes in", "He shows why the old grammar cannot hold", "Watch how he argues",
  "takes the logic of substance at its word", "is that seer seeing, or not",
  "If it is not seeing", "a seer in name only",
  "If it is seeing, then the seeing is counted twice", "and once more for the seeing it does",
  "the same test on walking, in chapter two", "The walker does not walk", "walker and walking are not two things",
  "So the seer is not found with seeing", "Then he turns to the seen", "Take seeing away, and nothing is left that is seen",
  // the verse again
  "Now read his verse again", "He is not saying", "He is saying the seer cannot stand on its own", "Neither can the seen",
  "Each is named only in relation to the other", "Take away the relation, and neither is left over",
  "That is not a seer put back", "It is the seer taken apart",
  // depend does not join
  "So many readers get Nagarjuna backwards", "picture two solid things, joined by a thread",
  "It shows there were never two things there to join", "This is the logic of dependency",
  "Look for the thing apart from what it depends on",
  "uses fire and fuel the same way", "Fire is not a thing that arrives", "Wood is only fuel in relation to burning",
  "Burning is only fire in relation to fuel", "Neither is the other, and neither stands apart",
  // the two meet
  "So the two teachings meet", "is the direct taste", "the same taste, said in logic",
  "One shows that no seer is found", "The other shows why no seer could be found",
  "Each needs the other", "Insight without the logic drifts back into nouns", "a witness, a ground, a vast awareness",
  "Logic without insight stays a clever argument", "Together, the view and the taste agree",
  // the verb, too
  "But there is one more step", "Just seeing, then", "a verb can be made into a thing",
  "a stream, a process, a field", "It has only moved from the subject to the verb",
  "So the seeing, too, is looked for", "Apart from the colour, the light, the eye and the tree", "Not found",
  "Seer, seeing and seen are named together", "None is found on its own",
  "whatever arises in dependence, that is emptiness", "And it is the middle way",
  // nothing taken away
  "None of this takes anything away", "The tree is still green", "read road signs and catch a ball",
  "things can change, meet and work", "If a seer were truly fixed",
  "So why must it be said as subject, verb and object", "It need not be", "useful for talking",
  "It is not the shape of what appears", "can stay, as a convenient way of speaking", "Nothing has to be found behind the words",
  // try it
  "Try it now", "Look at something near you", "Then look for the one who is seeing", "Do not argue",
  "Then look for the seeing itself", "What is left is not a blank", "It is the scene, bright and complete",
  "with no one standing behind it", "In seeing, just the seen. Now you know why",
];

// deeper golds and indigos for this series
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
};

const BARK = "#C99060";

// ---------------------------------------------------------------- helpers
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

/** One drawing or word on the board: [cue, x, y, node, options]. It appears at its cue (+d) and leaves at `until`. */
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
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
const W: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;

/** A chip that is struck through at `strikeAt` (only for an invented thing, never for a conventional one). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** A drawn X over (x, y). */
const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

// ---------------------------------------------------------------- drawings
const Eye: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 160 }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 160 88" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M5 44 Q80 -20 155 44 Q80 108 5 44 Z" fill={`${color}18`} stroke={color} strokeWidth={5} />
    <circle cx={80} cy={44} r={20} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <circle cx={80} cy={44} r={7} fill="#000a" />
  </svg>
);

const Magnifier: React.FC = () => (
  <svg width={120} height={120} viewBox="0 0 120 120"><circle cx={50} cy={50} r={36} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} />
    <path d="M77 77 L110 110" stroke={ICE} strokeWidth={10} strokeLinecap="round" /></svg>
);

/** A plain standing figure; dashed for one that is only imagined. */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean }> = ({ color = CHALK, size = 150, dashed }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** A walking figure seen side-on. */
const Walker: React.FC<{ color?: string; step?: number }> = ({ color = TEAL, step = 0 }) => {
  const a = Math.sin(step) * 16;
  return (
    <svg width={80} height={130} viewBox="0 0 80 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}aa)` }}>
      <circle cx={42} cy={16} r={11} fill={`${color}44`} stroke={color} strokeWidth={4} />
      <path d="M40 28 L36 74" stroke={color} strokeWidth={6} strokeLinecap="round" />
      <path d={`M38 40 L${44 + a * 0.6} 62 M38 40 L${30 - a * 0.6} 60`} stroke={color} strokeWidth={5} strokeLinecap="round" />
      <path d={`M36 74 L${44 + a} 126 M36 74 L${28 - a} 126`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

/** A tree; glow 0..1 makes it vivid. */
const Tree: React.FC<{ size?: number; glow?: number }> = ({ size = 220, glow = 0.5 }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 200 230" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${8 + 18 * glow}px ${GREEN})` }}>
    <path d="M100 226 L100 130 M100 160 L72 136 M100 148 L128 124" stroke={BARK} strokeWidth={10} strokeLinecap="round" fill="none" />
    <path d="M100 18 Q150 14 166 56 Q196 74 182 112 Q180 146 140 146 Q120 162 96 150 Q66 164 46 140 Q12 138 18 104 Q4 72 36 56 Q50 18 100 18 Z"
      fill={`${GREEN}${glow > 0.6 ? "55" : "33"}`} stroke={GREEN} strokeWidth={5} />
  </svg>
);

/** A flame over a log; the flame flickers. */
const FireWood: React.FC<{ fire?: number; wood?: number; size?: number }> = ({ fire = 1, wood = 1, size = 220 }) => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 9) + 0.04 * Math.sin(t * 13);
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
      <g opacity={wood} style={{ filter: `drop-shadow(0 0 8px ${BARK}88)` }}>
        <rect x={30} y={150} width={140} height={30} rx={15} fill={`${BARK}55`} stroke={BARK} strokeWidth={5} />
        <circle cx={160} cy={165} r={9} fill="none" stroke={BARK} strokeWidth={3} />
      </g>
      <g opacity={fire} transform={`translate(100 150) scale(1 ${f}) translate(-100 -150)`} style={{ filter: `drop-shadow(0 0 16px ${WARM})` }}>
        <path d="M100 150 Q52 140 64 96 Q72 70 92 50 Q90 78 106 86 Q104 54 124 30 Q128 70 146 92 Q160 140 100 150 Z" fill={`${WARM}99`} stroke={WARM} strokeWidth={4} />
        <path d="M100 148 Q80 140 86 116 Q92 100 102 92 Q104 112 116 118 Q122 142 100 148 Z" fill={`${GOLD}cc`} />
      </g>
    </svg>
  );
};

/** A word chip with a seer/seen/seeing look: one rounded label per part. */
const Part: React.FC<{ c: string; label: string; s?: number }> = ({ c, label, s = 30 }) => <K c={c} s={s}>{label}</K>;

// ---------------------------------------------------------------- scenes
const PuzzleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const opp = c("Read quickly, these two sound opposed");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The Buddha told a wandering ascetic named Bahiya", 500, 150, <W c={GOLD} s={36} serif>the Buddha to Bahiya</W>],
        ["in the seen, there will be just the seen", 500, 300, <Tree size={170} glow={0.8} />, { pop: true }],
        ["in the seen, there will be just the seen", 500, 470, <W c={CHALK} s={34} serif>“in the seen, just the seen”</W>, { d: 0.4 }],
        ["No one behind the eyes", 500, 580, <SK c={DIM} s={26} strikeAt={c("No one behind the eyes") + 1.2}>a seer behind the eyes</SK>],
        ["in chapter three of his Fundamental Verses", 1420, 150, <W c={ICE} s={36} serif>Nagarjuna, chapter 3</W>],
        ["without a seer, there is no seen", 1420, 300, <W c={CHALK} s={30}>no seer → no seen</W>, { pop: true }],
        ["And without the seen, there is no seer", 1420, 380, <W c={CHALK} s={30}>no seen → no seer</W>, { pop: true }],
        ["Read quickly, these two sound opposed", 960, 380, <W c={WARM} s={70} serif>≠</W>, { pop: true, until: "why they say the same thing" }],
        ["The Buddha takes the seer away", 500, 690, <W c={DIM} s={26}>the seer: taken away?</W>],
        ["Nagarjuna seems to put it back", 1420, 690, <W c={DIM} s={26}>the seer: put back?</W>],
        ["why they say the same thing", 960, 380, <W c={GOLD} s={70} serif>=</W>, { pop: true }],
        ["why they say the same thing", 960, 800, <W c={GOLD} s={34} serif>the same thing, said two ways</W>, { d: 0.6 }],
      ]} />
      <At x={1420} y={520} o={ramp(t, c("And without the seen, there is no seer") + 0.8, 0.5) * (1 - ramp(t, opp + 4, 0.5))}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <Part c={TEAL} label="seer" /><W c={DIM} s={36}>⇄</W><Part c={GREEN} label="seen" />
        </div>
      </At>
    </AbsoluteFill>
  );
};

const IntroScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This is After Anatta")} y={420} size={56}>Decoding Anatta and MMK Chapter 3</Title>
      <Items items={[
        ["This is After Anatta", 960, 520, <W c={DIM} s={30}>After Anatta · notes by John Tan (Thusness)</W>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const GrammarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const act = c("And there is an act that crosses the gap between them");
  return (
    <AbsoluteFill>
      <Title at={c("Start with how we usually talk")}>how we usually talk</Title>
      <Items items={[
        ["I see the tree", 960, 230, <Reveal text="“I see the tree.”" at={c("I see the tree")} size={58} speed={0.03} />],
        ["There is someone here, the seer", 480, 470, <Person color={TEAL} size={190} />, { pop: true }],
        ["There is something there, the tree", 1440, 460, <Tree size={180} />, { pop: true }],
        ["Subject, verb, object", 480, 640, <K c={TEAL}>subject</K>, { pop: true }],
        ["Subject, verb, object", 960, 640, <K c={GOLD}>verb</K>, { pop: true, d: 0.4 }],
        ["Subject, verb, object", 1440, 640, <K c={GREEN}>object</K>, { pop: true, d: 0.8 }],
        ["Three parts", 960, 740, <W c={DIM} s={28}>three parts</W>],
        ["It is a fact about sentences", 960, 330, <W c={ICE} s={32} serif>a fact about sentences, not about the world</W>,
          { until: "Every action needs someone doing it" }],
        ["Every action needs someone doing it", 960, 330, <W c={WARM} s={30}>every action needs a doer · every seeing needs a seer</W>],
      ]} />
      <Flow x1={600} y1={470} x2={1330} y2={470} color={GOLD} p={ramp(t, act + 0.3, 1.2)} />
      <At x={960} y={430} o={ramp(t, act + 0.8, 0.5)}><W c={GOLD} s={28}>seeing</W></At>
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This is the logic of substance")} color={WARM}>the logic of substance</Title>
      <Items items={[
        ["Things are there first", 640, 360, <K c={TEAL} s={34}>seer</K>, { pop: true }],
        ["Things are there first", 1280, 360, <K c={GREEN} s={34}>tree</K>, { pop: true, d: 0.3 }],
        ["Things are there first", 960, 480, <W c={DIM} s={28}>there first, finished, on their own</W>, { d: 0.8 }],
        ["Then they act, and are acted on", 960, 360, <W c={GOLD} s={34}>— sees →</W>, { pop: true }],
        ["Then they act, and are acted on", 960, 600, <W c={CHALK} s={30}>then they act, and are acted on</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const BahiyaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Look for a seer standing behind it");
  const none = c("Simply none");
  const glow = ramp(t, c("There is the tree, vivid and bright"), 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("Bahiya was told to drop that shape")} color={GOLD}>Bahiya: drop the shape, by looking</Title>
      <Items items={[
        ["In seeing, just the seen", 960, 220, <W c={CHALK} s={44} serif>in seeing, just the seen</W>],
        ["There is the tree, vivid and bright", 960, 450, <Tree size={240} glow={0.3 + 0.7 * glow} />, { pop: true }],
        ["Look for a seer standing behind it", 1300, 450, <Person color={DIM} size={170} dashed />, { o: 0.8, until: "Simply none" }],
        ["Simply none", 1300, 450, <W c={DIM} s={30}>none</W>],
        ["The seeing has no centre", 960, 690, <W c={GOLD} s={32}>the seeing has no centre</W>],
        ["This is the insight of anatta", 960, 780, <K c={GOLD} s={32}>anatta: direct, not a theory</K>, { pop: true }],
      ]} />
      <At x={960 + 340 * Math.sin((t - look) * 1.5)} y={600} o={ramp(t, look, 0.5) * (1 - ramp(t, none, 0.5))}><Magnifier /></At>
    </AbsoluteFill>
  );
};

const DriftScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("But insight is not yet understanding")} color={ICE}>insight is not yet understanding</Title>
      <Items items={[
        ["keep the old grammar in their thinking", 960, 230, <W c={DIM} s={30}>the old grammar, still in the thinking</W>],
        ["a gap where it used to be", 560, 450, <Person color={DIM} size={190} dashed />, { o: 0.7 }],
        ["a gap where it used to be", 560, 620, <SK c={DIM} s={26} strikeAt={c("big, impersonal awareness") - 0.2}>a seer gone missing</SK>, { d: 0.4 }],
        ["big, impersonal awareness", 1360, 450,
          <div style={{ width: 300, height: 300, borderRadius: 150, border: `4px dashed ${VIOLET}`, background: `${VIOLET}14`,
            boxShadow: `0 0 40px ${VIOLET}55` }} />, { pop: true }],
        ["big, impersonal awareness", 1360, 450, <W c={VIOLET} s={30}>big awareness</W>, { d: 0.3 }],
        ["wearing a larger coat", 1360, 650, <SK c={VIOLET} s={26} strikeAt={c("wearing a larger coat") + 1.0}>the subject, in a larger coat</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const ArgueScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = c("is that seer seeing, or not");
  const walk = c("the same test on walking, in chapter two");
  return (
    <AbsoluteFill>
      <Title at={c("This is where Nagarjuna comes in")} color={ICE}>Nagarjuna: take the grammar at its word</Title>
      <Items items={[
        ["He shows why the old grammar cannot hold", 960, 190, <W c={DIM} s={28}>not a new experience: why the old grammar cannot hold</W>,
          { until: "takes the logic of substance at its word" }],
        ["takes the logic of substance at its word", 960, 190, <K c={TEAL} s={32}>a seer, there on its own side</K>, { pop: true }],
        ["is that seer seeing, or not", 960, 270, <W c={CHALK} s={32} serif>seeing, or not?</W>],
        ["If it is not seeing", 520, 420, <K c={DIM} s={28}>not seeing</K>, { pop: true }],
        ["a seer in name only", 520, 520, <W c={WARM} s={28}>a seer in name only</W>],
        ["If it is seeing, then the seeing is counted twice", 1400, 420, <K c={GOLD} s={28}>seeing</K>, { pop: true }],
        ["If it is seeing, then the seeing is counted twice", 1400, 520, <W c={GOLD} s={28}>seeing ×1 makes it a seer</W>, { d: 1.6 }],
        ["and once more for the seeing it does", 1400, 580, <W c={WARM} s={28}>seeing ×2 for what it does</W>],
        ["the same test on walking, in chapter two", 960, 720, <W c={DIM} s={26}>chapter 2: the walker</W>],
        ["The walker does not walk", 960, 800, <W c={CHALK} s={28}>“walker” and “walking”: not two things</W>, { d: 0.4 }],
      ]} />
      <Svg>
        <DrawPath d="M960 300 L560 380" p={ramp(t, q + 0.6, 0.6)} color={DIM} width={3} len={500} />
        <DrawPath d="M960 300 L1360 380" p={ramp(t, q + 0.6, 0.6)} color={DIM} width={3} len={500} />
      </Svg>
      <At x={760} y={650} o={ramp(t, walk, 0.5)}><Walker step={(t - walk) * 6} /></At>
    </AbsoluteFill>
  );
};

const SeenScene: React.FC = () => {
  const c = useCue();
  const nf = c("So the seer is not found with seeing");
  return (
    <AbsoluteFill>
      <Title at={nf}>not found, with seeing or without it</Title>
      <Items items={[
        ["So the seer is not found with seeing", 600, 330, <SK c={TEAL} s={34} strikeAt={nf + 1.6}>a seer on its own</SK>, { pop: true }],
        ["Then he turns to the seen", 1320, 330, <K c={GREEN} s={34}>“seen”</K>, { pop: true }],
        ["Then he turns to the seen", 1320, 430, <W c={DIM} s={26}>only in relation to seeing</W>, { d: 1.0 }],
        ["Take seeing away, and nothing is left that is seen", 1320, 530, <W c={WARM} s={26}>take seeing away: nothing “seen” is left</W>],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rel = c("Each is named only in relation to the other");
  const gone = c("Take away the relation, and neither is left over");
  const both = ramp(t, rel, 0.5) * (1 - 0.75 * ramp(t, gone + 0.8, 1.2));
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, c("Now read his verse again") - 0.3, 0.3)}>
        <Reveal text="Without a seer, there is no seen." at={c("Now read his verse again") + 0.8} size={54} color={ICE} top="#EAF8FF" speed={0.03} />
      </At>
      <Items items={[
        ["He is not saying", 960, 300, <SK c={DIM} s={28} strikeAt={c("He is saying the seer cannot stand on its own") - 0.3}>a seer, leaning on the seen</SK>],
        ["He is saying the seer cannot stand on its own", 960, 390, <W c={CHALK} s={30}>the seer cannot stand on its own</W>],
        ["Neither can the seen", 960, 450, <W c={CHALK} s={30}>neither can the seen</W>],
        ["That is not a seer put back", 960, 720, <W c={DIM} s={30}>not a seer put back</W>],
        ["It is the seer taken apart", 960, 800, <W c={GOLD} s={40} serif>the seer taken apart, inside its own grammar</W>],
      ]} />
      <At x={960} y={580} o={both}>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <Part c={TEAL} label="seer" s={34} /><W c={DIM} s={30}>named in relation to</W><Part c={GREEN} label="seen" s={34} />
        </div>
      </At>
    </AbsoluteFill>
  );
};

const JoinScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const thread = c("picture two solid things, joined by a thread");
  const never = c("It shows there were never two things there to join");
  return (
    <AbsoluteFill>
      <Title at={c("So many readers get Nagarjuna backwards")} color={WARM}>read backwards</Title>
      <Items items={[
        ["picture two solid things, joined by a thread", 620, 330,
          <div style={{ width: 150, height: 110, borderRadius: 10, border: `4px solid ${TEAL}`, background: `${TEAL}33` }} />, { pop: true }],
        ["picture two solid things, joined by a thread", 1300, 330,
          <div style={{ width: 150, height: 110, borderRadius: 10, border: `4px solid ${GREEN}`, background: `${GREEN}33` }} />, { pop: true, d: 0.3 }],
        ["It shows there were never two things there to join", 960, 480, <W c={GOLD} s={34} serif>never two things there to join</W>],
        ["This is the logic of dependency", 960, 590, <K c={GOLD} s={32}>the logic of dependency</K>, { pop: true }],
        ["Look for the thing apart from what it depends on", 960, 680, <W c={CHALK} s={28}>look for it apart from what it depends on: not found</W>],
      ]} />
      <Svg>
        <path d="M700 330 Q960 280 1220 330" fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="8 7"
          opacity={ramp(t, thread + 0.8, 0.5) * (1 - ramp(t, never + 1.6, 0.6))} />
      </Svg>
      <Crossed x={960} y={320} at={never + 0.4} size={50} />
    </AbsoluteFill>
  );
};

const FireScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("uses fire and fuel the same way")}>chapter 10: fire and fuel</Title>
      <Items items={[
        ["uses fire and fuel the same way", 960, 400, <FireWood size={260} />, { pop: true }],
        ["Fire is not a thing that arrives", 960, 640, <SK c={DIM} s={26} strikeAt={c("Wood is only fuel in relation to burning") - 0.3}>a fire that arrives and grabs the wood</SK>,
          { until: "Neither is the other, and neither stands apart" }],
        ["Wood is only fuel in relation to burning", 480, 400, <W c={BARK} s={28}>wood is fuel only to burning</W>],
        ["Burning is only fire in relation to fuel", 1440, 400, <W c={WARM} s={28}>burning is fire only to fuel</W>],
        ["Neither is the other, and neither stands apart", 960, 700, <W c={GOLD} s={34} serif>not one, not apart</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MeetScene: React.FC = () => {
  const c = useCue();
  const vast = c("a witness, a ground, a vast awareness");
  return (
    <AbsoluteFill>
      <Title at={c("So the two teachings meet")} color={GOLD}>the two teachings meet</Title>
      <Items items={[
        ["is the direct taste", 520, 250, <K c={GOLD} s={32}>Bahiya: the direct taste</K>, { pop: true }],
        ["the same taste, said in logic", 1400, 250, <K c={ICE} s={32}>Nagarjuna: the same taste, in logic</K>, { pop: true }],
        ["One shows that no seer is found", 520, 340, <W c={CHALK} s={26}>no seer is found</W>],
        ["The other shows why no seer could be found", 1400, 340, <W c={CHALK} s={26}>why no seer could be found</W>],
        ["Each needs the other", 960, 440, <W c={GOLD} s={36} serif>each needs the other</W>],
        ["Insight without the logic drifts back into nouns", 520, 560, <W c={DIM} s={26}>insight alone: drifts back into nouns</W>],
        ["a witness, a ground, a vast awareness", 360, 650, <SK c={VIOLET} s={24} strikeAt={vast + 2.0}>a witness</SK>],
        ["a witness, a ground, a vast awareness", 540, 650, <SK c={VIOLET} s={24} strikeAt={vast + 2.2}>a ground</SK>, { d: 0.4 }],
        ["a witness, a ground, a vast awareness", 740, 650, <SK c={VIOLET} s={24} strikeAt={vast + 2.4}>a vast awareness</SK>, { d: 0.8 }],
        ["Logic without insight stays a clever argument", 1400, 560, <W c={DIM} s={26}>logic alone: a clever argument</W>],
        ["Together, the view and the taste agree", 960, 780, <W c={GOLD} s={38} serif>view and taste agree</W>],
      ]} />
    </AbsoluteFill>
  );
};

const VerbScene: React.FC = () => {
  const c = useCue();
  const field = c("a stream, a process, a field");
  return (
    <AbsoluteFill>
      <Title at={c("But there is one more step")} color={ICE}>one more step</Title>
      <Items items={[
        ["Just seeing, then", 960, 230, <K c={GOLD} s={38}>“just seeing”</K>, { pop: true }],
        ["a verb can be made into a thing", 960, 330, <W c={DIM} s={28}>a verb can be made into a thing, as easily as a noun</W>],
        ["a stream, a process, a field", 600, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.2}>a stream</SK>, { pop: true }],
        ["a stream, a process, a field", 960, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.4}>a process</SK>, { pop: true, d: 0.4 }],
        ["a stream, a process, a field", 1320, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.6}>a field things happen in</SK>, { pop: true, d: 0.8 }],
        ["It has only moved from the subject to the verb", 960, 540, <W c={WARM} s={28}>substance, moved from the subject to the verb</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NamedScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("So the seeing, too, is looked for")}>the seeing, too, is looked for</Title>
      <Items items={[
        ["Apart from the colour, the light, the eye and the tree", 960, 250,
          <W c={CHALK} s={28}>apart from the colour, the light, the eye, the tree?</W>],
        ["Apart from the colour, the light, the eye and the tree", 1500, 360, <Eye size={120} />, { d: 1.6 }],
        ["Apart from the colour, the light, the eye and the tree", 420, 380, <Tree size={110} glow={0.6} />, { d: 2.2 }],
        ["Not found", 960, 350, <W c={DIM} s={32}>not found</W>],
        ["Seer, seeing and seen are named together", 960, 480,
          <div style={{ display: "flex", gap: 22 }}><Part c={TEAL} label="seer" /><Part c={GOLD} label="seeing" /><Part c={GREEN} label="seen" /></div>,
          { pop: true }],
        ["Seer, seeing and seen are named together", 960, 570, <W c={CHALK} s={28}>named together, on conditions</W>, { d: 1.2 }],
        ["None is found on its own", 960, 640, <W c={DIM} s={28}>none is found on its own</W>],
        ["whatever arises in dependence, that is emptiness", 960, 740, <W c={GOLD} s={36} serif>whatever arises in dependence, that is emptiness</W>],
        ["And it is the middle way", 960, 810, <W c={GOLD} s={30}>the middle way</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const green = c("The tree is still green");
  const why = c("So why must it be said as subject, verb and object");
  return (
    <AbsoluteFill>
      <Title at={c("None of this takes anything away")} color={GOLD}>nothing taken away</Title>
      <At x={480} y={380} o={ramp(t, green, 0.5) * (1 - ramp(t, why, 0.5))}><Tree size={220} glow={1} /></At>
      <Items items={[
        ["read road signs and catch a ball", 1400, 300, <W c={CHALK} s={28}>road signs read, a ball caught</W>, { until: "So why must it be said as subject, verb and object" }],
        ["things can change, meet and work", 1400, 380, <W c={GOLD} s={30}>things change, meet and work</W>, { until: "So why must it be said as subject, verb and object" }],
        ["If a seer were truly fixed", 1400, 460, <W c={DIM} s={26}>a fixed seer could never learn</W>, { until: "So why must it be said as subject, verb and object" }],
        ["So why must it be said as subject, verb and object", 960, 300,
          <div style={{ display: "flex", gap: 22 }}><K c={TEAL}>subject</K><K c={GOLD}>verb</K><K c={GREEN}>object</K></div>, { pop: true }],
        ["It need not be", 960, 400, <W c={CHALK} s={36} serif>it need not be</W>],
        ["useful for talking", 960, 490, <W c={GOLD} s={28}>useful for talking</W>],
        ["It is not the shape of what appears", 960, 560, <W c={DIM} s={28}>not the shape of what appears</W>],
        ["can stay, as a convenient way of speaking", 960, 680, <W c={CHALK} s={32} serif>“I see the tree” can stay</W>],
        ["Nothing has to be found behind the words", 960, 770, <W c={DIM} s={28}>nothing has to be found behind the words</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Then look for the one who is seeing");
  const blank = c("What is left is not a blank");
  return (
    <AbsoluteFill>
      <Title at={c("Try it now")} color={GOLD}>try it</Title>
      <Items items={[
        ["Look at something near you", 960, 380, <Tree size={240} glow={0.9} />, { pop: true }],
        ["Look at something near you", 960, 610, <W c={CHALK} s={30}>the colour and the shape, vivid</W>, { d: 1.6, until: "Then look for the one who is seeing" }],
        ["Then look for the one who is seeing", 960, 610, <W c={DIM} s={30}>the one who is seeing?</W>, { until: "Then look for the seeing itself" }],
        ["Do not argue", 960, 680, <W c={DIM} s={26}>do not argue · just look</W>, { until: "What is left is not a blank" }],
        ["Then look for the seeing itself", 960, 610, <W c={DIM} s={30}>the seeing itself, apart from the seen?</W>, { until: "What is left is not a blank" }],
        ["It is the scene, bright and complete", 960, 610, <W c={GOLD} s={36} serif>the scene, bright and complete</W>],
        ["with no one standing behind it", 960, 690, <W c={CHALK} s={28}>no one behind it, nothing under it</W>],
        ["In seeing, just the seen. Now you know why", 960, 220, <W c={GOLD} s={44} serif>in seeing, just the seen</W>],
      ]} />
      <At x={960 + 300 * Math.sin((t - look) * 1.3)} y={470} o={ramp(t, look, 0.5) * (1 - ramp(t, blank, 0.5))}><Magnifier /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "The Buddha told a wandering ascetic named Bahiya"], ["web", "This is After Anatta"],
    ["search", "Start with how we usually talk"], ["doubt", "This is the logic of substance"],
    ["vivid", "Bahiya was told to drop that shape"], ["doubt", "But insight is not yet understanding"],
    ["search", "This is where Nagarjuna comes in"], ["sea", "So the seer is not found with seeing"],
    ["whole", "Now read his verse again"], ["doubt", "So many readers get Nagarjuna backwards"],
    ["vivid", "uses fire and fuel the same way"], ["whole", "So the two teachings meet"],
    ["sea", "But there is one more step"], ["web", "So the seeing, too, is looked for"],
    ["vivid", "None of this takes anything away"], ["whole", "Try it now"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["The Buddha told a wandering ascetic named Bahiya", <PuzzleScene />],
    ["This is After Anatta", <IntroScene />],
    ["Start with how we usually talk", <GrammarScene />],
    ["This is the logic of substance", <SubstanceScene />],
    ["Bahiya was told to drop that shape", <BahiyaScene />],
    ["But insight is not yet understanding", <DriftScene />],
    ["This is where Nagarjuna comes in", <ArgueScene />],
    ["So the seer is not found with seeing", <SeenScene />],
    ["Now read his verse again", <VerseScene />],
    ["So many readers get Nagarjuna backwards", <JoinScene />],
    ["uses fire and fuel the same way", <FireScene />],
    ["So the two teachings meet", <MeetScene />],
    ["But there is one more step", <VerbScene />],
    ["So the seeing, too, is looked for", <NamedScene />],
    ["None of this takes anything away", <WorksScene />],
    ["Try it now", <TryScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
