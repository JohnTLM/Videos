// Bonus video: Dependent Arising Section 3 Part 1: There Has to Be Something (AA53).
// (Script: new-documents/after-anatta/aa53-there-has-to-be-something-script.md, from EBooks
// Bonus Articles/there-has-to-be-something, approved by the owner 2026-11-26: "Approved"; script approved the same day.)
// Arc: rain, "what is it, really?" -> before going further -> three answers: matter, mind, a third stuff -> there has
// to be something -> the grammar of things; the "it" left as a question (owner: do not answer it) -> recognise it
// first (tinted glasses) -> the Middle Way's new approach -> it contradicts experience -> it contradicts itself on its
// own premises (floors, bearer, ground) -> only a habit, two cautions -> the rain was only ever raining.
// Stance: the ground is drawn only to be struck; the "it" is never struck or answered; nothing replaces the ground.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "It is raining. And a question comes, almost by itself", "I am John Tan, known as Thusness",
  "In Section 2, I asked what it is that appears at all", "But before going further, something has to be seen",
  "The mind that will hear every argument", "And nothing will change",
  // three answers
  "So, the rain", "Notice what kind of answer we want", "We want what it is made of underneath",
  "We are looking for its ultimate constituent", "And the answers line up", "Matter. It is really air moving",
  "Mind. It is really consciousness", "Or a third kind of stuff", "the way ice forms from water and melts back into it",
  "Each of these is held by thoughtful people", "I do not want to make any of them small",
  "But look at what they share", "The bottom of the matter",
  // has to be something
  "To such a mind, the question cannot rest until it finds what is ultimate", "So it has to posit something",
  "Surely, there has to be something", "And this is the important part", "We take it as reality itself",
  "They never notice that they agree on the one thing that matters most", "And the only question is which",
  // grammar
  "Why does it feel so natural", "There must be things, and things must have fixed characteristics",
  "A subject stands first, and a predicate is said of it", "The rose is red. A thing, with a colour attached",
  "As if the lightning were one thing", "Is there a lightning apart from the flash", "Even the rain is said this way",
  "What is the it", "I will not answer that", "Here, the asking matters more than any answer",
  "Is it ever necessary to put it that way", "Why do we ask in such a manner",
  "And must the answer always be a something", "Stay with these, before reaching for a reply",
  "Because the grammar asked for us", "And answered too", "Growing up inside that grammar",
  "To analyse is to break things into parts", "To explain is to find the thing underneath",
  "To orient is to look behind what appears", "None of this means giving language up",
  "They can be used, without being believed",
  // recognise
  "So, before going further, this must be recognised, and clearly seen", "The way you see a pair of tinted glasses",
  "If it is not seen, every step will be heard in the old grammar", "Emptiness will sound like a new kind of stuff",
  "The argument will seem clever, and change nothing",
  // approach
  "does something I find completely new", "and competes on the answer", "They never doubt there must be one",
  "The Middle Way does not join the contest. It turns to the question", "It offers no rival something",
  "if I had a thesis, that fault would be mine", "It examines the something on its own terms",
  "It changes the question", "dependent on what does this arise, and how is it named",
  "It does not make emptiness the new answer", "like a snake picked up by the wrong end", "And it keeps the world",
  "Here I part from one way the Middle Way is often read", "Nothing is denied that is actually met",
  "And with it, the demand",
  // experience
  "So let me take the default apart, a little", "The default fails twice", "First, experience",
  "What is actually met", "Where, in all of this, is the stuff it is made of", "It is never met. Not once",
  "Inferred. Never found", "the one thing that never appears",
  // itself
  "Second, the default against itself", "The first premise", "Each floor has a floor below",
  "if it has sides, it has parts", "Mind fares the same", "A stuff known only by its relations",
  "The second premise", "Strip away every characteristic", "Only more characteristics", "The third premise",
  "Something truly unchanging cannot give rise to anything", "And something truly independent cannot even be known",
  "The ground cannot do the one thing it was posited for", "contradictory, illogical, and untenable",
  // habit
  "Not reality. A habit", "A sound happens. The habit supplies something that sounds", "A flash happens",
  "A thought happens", "it feels like the way things are", "The rain is heard. It is wet", "Never the appearing",
  "And nothing replaces the something", "the same habit, still at work", "begins to loosen",
  "was asking for something that was never needed",
  // close
  "This is Section 3, Part 1 of the Dependent Arising series", "The rain was only ever raining",
];

const M = {
  rain: { a: "rgba(40,70,120,0.5)", b: "rgba(70,60,140,0.4)", c: "rgba(30,90,110,0.32)" },
  stuff: { a: "rgba(70,55,140,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.34)" },
  ground: { a: "rgba(110,70,40,0.5)", b: "rgba(60,45,120,0.42)", c: "rgba(40,40,80,0.4)" },
  grammar: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.36)", c: "rgba(30,70,120,0.3)" },
  glasses: { a: "rgba(150,80,60,0.42)", b: "rgba(60,60,150,0.42)", c: "rgba(40,110,120,0.32)" },
  middle: { a: "rgba(190,145,60,0.44)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  met: { a: "rgba(40,100,130,0.5)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
  floors: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  habit: { a: "rgba(60,90,80,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
};

// ---------------------------------------------------------------- helpers
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
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "18px 16px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={32} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 8 }}><Wd c={CHALK} s={22}>{sub}</Wd></div> : null}
  </div>
);
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** Rain falling past a window frame; drops loop softly. */
const Rain: React.FC<{ w?: number; h?: number }> = ({ w = 520, h = 380 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <rect x={10} y={10} width={w - 20} height={h - 20} rx={14} fill="rgba(20,30,60,0.35)" stroke={ICE} strokeWidth={4} />
      <line x1={w / 2} y1={10} x2={w / 2} y2={h - 10} stroke={ICE} strokeWidth={3} opacity={0.6} />
      <line x1={10} y1={h / 2} x2={w - 10} y2={h / 2} stroke={ICE} strokeWidth={3} opacity={0.6} />
      {[...Array(34)].map((_, i) => {
        const x = 24 + ((i * 97) % (w - 48));
        const sp = 140 + (i % 5) * 30;
        const y = 20 + ((t * sp + i * 53) % (h - 50));
        return <line key={i} x1={x} y1={y} x2={x - 4} y2={y + 18} stroke={ICE} strokeWidth={2.5} opacity={0.55} strokeLinecap="round" />;
      })}
    </svg>
  );
};
/** A stack of floors going down, each with "a floor below?" */
const Floors: React.FC<{ n: number; labels: string[] }> = ({ n, labels }) => (
  <svg width={520} height={520} viewBox="0 0 520 520" style={{ overflow: "visible" }}>
    {labels.map((l, i) => {
      const o = Math.max(0, Math.min(1, n - i));
      return (
        <g key={i} opacity={o} transform={`translate(${40 + i * 12}, ${20 + i * 78})`}>
          <rect x={0} y={0} width={440 - i * 24} height={56} rx={10} fill="rgba(10,12,30,0.7)" stroke={i === labels.length - 1 ? DIM : VIOLET} strokeWidth={3} strokeDasharray={i === labels.length - 1 ? "8 6" : undefined} />
          <text x={(440 - i * 24) / 2} y={37} fill={CHALK} fontSize={24} textAnchor="middle" fontFamily="SourceSans">{l}</text>
        </g>
      );
    })}
  </svg>
);
/** A pair of glasses; lenses tinted by `tint` 0..1. */
const Glasses: React.FC<{ tint: number }> = ({ tint }) => (
  <svg width={520} height={200} viewBox="-260 -100 520 200" style={{ overflow: "visible" }}>
    {[-120, 120].map((x) => <ellipse key={x} cx={x} cy={0} rx={100} ry={70} fill={`rgba(190,140,60,${0.45 * tint})`} stroke={GOLD} strokeWidth={6} />)}
    <path d="M-20 -10 Q0 -30 20 -10" stroke={GOLD} strokeWidth={6} fill="none" />
    <path d="M-220 -20 L-260 -40 M220 -20 L260 -40" stroke={GOLD} strokeWidth={6} />
  </svg>
);
/** A grammar line: [subject] → verb, with the subject box dashed and a soft question mark when `ask`. */
const Sentence: React.FC<{ subj: string; verb: string; c: string; ask?: boolean }> = ({ subj, verb, c, ask }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
    <div style={{ padding: "10px 22px", borderRadius: 12, border: `3px ${ask ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.7)" }}>
      <Wd c={c} s={34} serif>{subj}</Wd>
    </div>
    <Wd c={DIM} s={34}>→</Wd>
    <Wd c={CHALK} s={34} serif>{verb}</Wd>
    {ask ? <Wd c={GOLD} s={44} serif>?</Wd> : null}
  </div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["It is raining. And a question comes, almost by itself", 960, 430, <Rain />],
        ["It is raining. And a question comes, almost by itself", 960, 760, <Wd c={GOLD} s={46} serif>What is it, really?</Wd>, { d: 2 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In Section 2, I asked what it is that appears at all">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>There Has to Be Something</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 3 · Part 1</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="In Section 2, I asked what it is that appears at all">
      <Items items={[
        ["In Section 2, I asked what it is that appears at all", 960, 220, <Wd c={DIM} s={26}>Section 2: a sound, a colour, a thought · vivid · not found · dependent</Wd>],
        ["In Section 2, I asked what it is that appears at all", 960, 310, <Wd c={DIM} s={24}>mind and matter: two boxes, neither found</Wd>, { d: 3 }],
        ["But before going further, something has to be seen", 960, 450, <Wd c={GOLD} s={40} serif>before going further</Wd>],
        ["The mind that will hear every argument", 960, 560, <K c={TEAL} s={28}>not an argument: the mind that hears every argument</K>, { pop: true }],
        ["And nothing will change", 960, 670, <Wd c={CHALK} s={24}>unseen, everything is heard through it</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const AnswersScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, the rain", 960, 90, <Wd c={ICE} s={44} serif>What is it, really?</Wd>],
      ["Notice what kind of answer we want", 960, 180, <SK at="We want what it is made of underneath" s={24}>"the sound of rain"</SK>],
      ["We want what it is made of underneath", 960, 250, <Wd c={CHALK} s={26}>what it is made of, underneath</Wd>],
      ["We are looking for its ultimate constituent", 960, 320, <K c={GOLD} s={28}>its ultimate constituent</K>, { pop: true }],
      ["Matter. It is really air moving", 420, 490, <Box c={WARM} w={460} title="Matter" sub="air moving, water on glass, nerves firing" />, { pop: true }],
      ["Mind. It is really consciousness", 960, 490, <Box c={VIOLET} w={460} title="Mind" sub="the sound exists only as experienced" />, { pop: true }],
      ["Or a third kind of stuff", 1500, 490, <Box c={TEAL} w={460} title="A third stuff" sub="energy · vibration · field · qi" />, { pop: true }],
      ["the way ice forms from water and melts back into it", 1500, 630, <Wd c={DIM} s={22}>qi condensing and dispersing, like ice and water</Wd>],
      ["Each of these is held by thoughtful people", 960, 720, <Wd c={CHALK} s={24}>each held by thoughtful people · each starts from something true</Wd>],
      ["But look at what they share", 960, 800, <K c={GOLD} s={26}>what they share: each looks for a stuff that is simply there</K>, { pop: true }],
      ["The bottom of the matter", 960, 880, <Wd c={DIM} s={24}>the bottom of the matter</Wd>],
    ]} />
  </AbsoluteFill>
);

const SomethingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const g = ramp(t, c("So it has to posit something"), 1);
  return (
    <AbsoluteFill>
      <Items items={[
        ["To such a mind, the question cannot rest until it finds what is ultimate", 960, 120, <Wd c={CHALK} s={28}>it cannot rest until it finds what is ultimate</Wd>],
        ["So it has to posit something", 960, 230, <Wd c={DIM} s={26}>a ground · a substrate · a stuff</Wd>],
        ["Surely, there has to be something", 960, 400, <Wd c={GOLD} s={60} serif>There has to be something</Wd>, { pop: true }],
        ["We take it as reality itself", 960, 520, <K c={ROSE} s={28}>not felt as a view: taken as reality itself</K>, { pop: true }],
        ["They never notice that they agree on the one thing that matters most", 600, 660, <Wd c={WARM} s={28} serif>all is matter</Wd>],
        ["They never notice that they agree on the one thing that matters most", 1320, 660, <Wd c={VIOLET} s={28} serif>all is mind</Wd>],
        ["They never notice that they agree on the one thing that matters most", 960, 760, <Wd c={CHALK} s={26}>agreed: there must be a something</Wd>, { d: 1.5 }],
        ["And the only question is which", 960, 830, <Wd c={DIM} s={24}>the only question: which?</Wd>],
      ]} />
      <At x={960} y={960} o={g * 0.8}>
        <div style={{ width: 1200, height: 26, borderRadius: 8, background: `linear-gradient(90deg, transparent, ${WARM}88, transparent)` }} />
      </At>
    </AbsoluteFill>
  );
};

const GrammarScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Why does it feel so natural", 960, 80, <Wd c={GOLD} s={42} serif>The grammar of things</Wd>],
      ["There must be things, and things must have fixed characteristics", 960, 160, <Wd c={DIM} s={24}>there must be things, with natures of their own</Wd>],
      ["A subject stands first, and a predicate is said of it", 960, 250, <Wd c={CHALK} s={26}>subject first · then a predicate said of it</Wd>],
      ["The rose is red. A thing, with a colour attached", 960, 330, <Sentence subj="the rose" verb="is red" c={ROSE} />],
      ["As if the lightning were one thing", 960, 430, <Sentence subj="the lightning" verb="flashes" c={ICE} />],
      ["Is there a lightning apart from the flash", 960, 510, <Wd c={GOLD} s={28} serif>a lightning apart from the flash?</Wd>],
      ["Even the rain is said this way", 960, 620, <Sentence subj="it" verb="is raining" c={GOLD} ask />],
      ["I will not answer that", 960, 720, <Wd c={DIM} s={24}>not answered: here the asking matters more</Wd>, { until: "Is it ever necessary to put it that way" }],
    ]} />
  </AbsoluteFill>
);

const AskingScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Is it ever necessary to put it that way", 960, 120, <Sentence subj="it" verb="is raining" c={GOLD} ask />],
      ["Is it ever necessary to put it that way", 960, 260, <Wd c={CHALK} s={30} serif>Is it ever necessary to put it that way?</Wd>, { d: 0.4 }],
      ["Why do we ask in such a manner", 960, 350, <Wd c={CHALK} s={30} serif>Why do we ask in such a manner?</Wd>],
      ["And must the answer always be a something", 960, 440, <Wd c={GOLD} s={32} serif>Must the answer always be a something?</Wd>],
      ["Stay with these, before reaching for a reply", 960, 540, <Wd c={DIM} s={24}>stay with these, before reaching for a reply</Wd>],
      ["Because the grammar asked for us", 960, 620, <K c={TEAL} s={26}>the grammar asked for us · and answered too</K>, { pop: true }],
      ["To analyse is to break things into parts", 420, 750, <Box c={VIOLET} w={480} title="analyse" sub="break into parts with natures" />, { pop: true }],
      ["To explain is to find the thing underneath", 960, 750, <Box c={WARM} w={480} title="explain" sub="find the thing underneath" />, { pop: true }],
      ["To orient is to look behind what appears", 1500, 750, <Box c={ICE} w={480} title="orient" sub="look behind what appears" />, { pop: true }],
      ["They can be used, without being believed", 960, 900, <K c={GREEN} s={24}>words still work: used, not believed</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const GlassesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tint = ramp(t, c("The way you see a pair of tinted glasses"), 1.2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["So, before going further, this must be recognised, and clearly seen", 960, 110, <Wd c={GOLD} s={44} serif>Recognise it first</Wd>],
        ["So, before going further, this must be recognised, and clearly seen", 960, 190, <Wd c={DIM} s={26}>not believed or disbelieved: seen</Wd>, { d: 1 }],
        ["If it is not seen, every step will be heard in the old grammar", 960, 640, <Wd c={CHALK} s={26}>unseen, every step is heard in the old grammar</Wd>],
        ["Emptiness will sound like a new kind of stuff", 960, 720, <SK at="The argument will seem clever, and change nothing" d={1} s={26}>emptiness: a new kind of stuff?</SK>],
        ["The argument will seem clever, and change nothing", 960, 810, <Wd c={DIM} s={24}>clever, and changing nothing</Wd>],
      ]} />
      <At x={960} y={400} o={ramp(t, c("The way you see a pair of tinted glasses", 0.6), 0.6)}><Glasses tint={tint} /></At>
    </AbsoluteFill>
  );
};

const ApproachScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["does something I find completely new", 960, 80, <Wd c={GOLD} s={42} serif>The Middle Way: a completely new approach</Wd>],
      ["and competes on the answer", 960, 170, <Wd c={DIM} s={24}>matter · mind · energy · God · the One</Wd>],
      ["They never doubt there must be one", 960, 230, <Wd c={CHALK} s={24}>they disagree about the something; never that there is one</Wd>],
      ["The Middle Way does not join the contest. It turns to the question", 960, 310, <K c={TEAL} s={28}>it turns to the question</K>, { pop: true }],
      ["It offers no rival something", 960, 400, <Wd c={CHALK} s={26}>1 · no rival something: "if I had a thesis…"</Wd>],
      ["It examines the something on its own terms", 960, 470, <Wd c={CHALK} s={26}>2 · examines the something on its own terms</Wd>],
      ["It changes the question", 960, 540, <Wd c={CHALK} s={26}>3 · changes the question: dependent on what? how named?</Wd>],
      ["It does not make emptiness the new answer", 960, 610, <Wd c={CHALK} s={26}>4 · emptiness is not the new answer</Wd>],
      ["like a snake picked up by the wrong end", 960, 670, <Wd c={DIM} s={22}>wrongly grasped: a snake held by the wrong end</Wd>],
      ["And it keeps the world", 960, 740, <Wd c={CHALK} s={26}>5 · keeps the world: the rain falls, the umbrella works</Wd>],
      ["Here I part from one way the Middle Way is often read", 960, 830, <SK at="Nothing is denied that is actually met" d={0.5} s={24}>endless negation</SK>],
      ["And with it, the demand", 960, 910, <K c={GOLD} s={24}>only the demanded something falls away, and the demand</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["So let me take the default apart, a little", 960, 90, <Wd c={GOLD} s={42} serif>Taking it apart</Wd>],
        ["The default fails twice", 960, 170, <Wd c={DIM} s={26}>it fails twice: against experience, against itself</Wd>],
        ["First, experience", 960, 250, <Wd c={ICE} s={36} serif>1 · Against experience</Wd>],
        ["What is actually met", 1420, 400, <Wd c={CHALK} s={26}>the sound · the coolness · the grey light · a thought</Wd>],
        ["What is actually met", 1420, 460, <Wd c={DIM} s={22}>each arises, is vivid, is gone</Wd>, { d: 3 }],
        ["Where, in all of this, is the stuff it is made of", 1420, 560, <SK at="It is never met. Not once" d={0.5} s={26}>the stuff it is made of</SK>],
        ["Inferred. Never found", 1420, 650, <Wd c={CHALK} s={24}>always one step behind · inferred, never found</Wd>],
        ["the one thing that never appears", 1420, 760, <K c={ROSE} s={24}>most real: the one thing that never appears?</K>, { pop: true }],
      ]} />
      <At x={540} y={560} o={ramp(t, c("What is actually met"), 0.6)}><Rain w={600} h={420} /></At>
    </AbsoluteFill>
  );
};

const ItselfScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const n = Math.min(6, Math.max(0, (t - c("Each floor has a floor below")) / 0.9));
  const fl = 1 - ramp(t, c("The second premise"), 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Second, the default against itself", 960, 80, <Wd c={VIOLET} s={40} serif>2 · Against itself, on its own premises</Wd>],
        ["The first premise", 1340, 200, <Wd c={CHALK} s={28} serif>"the real is what is left when analysis ends"</Wd>, { until: "The second premise" }],
        ["if it has sides, it has parts", 1340, 300, <Wd c={DIM} s={24}>the atom: sides mean parts · no sides, nothing touches</Wd>, { until: "The second premise" }],
        ["Mind fares the same", 1340, 360, <Wd c={DIM} s={24}>mind: moments within moments · no partless instant</Wd>, { until: "The second premise" }],
        ["A stuff known only by its relations", 1340, 440, <K c={TEAL} s={24}>energy, field, qi: known only by what they do</K>, { pop: true, until: "The second premise" }],
        ["The second premise", 960, 220, <Wd c={CHALK} s={28} serif>"characteristics need a bearer"</Wd>, { until: "The third premise" }],
        ["Strip away every characteristic", 960, 330, <SK at="Only more characteristics" s={24}>colour · shape · weight · warmth</SK>, { until: "The third premise" }],
        ["Only more characteristics", 960, 430, <Wd c={DIM} s={24}>bare: nothing can be said · clothed: only more characteristics</Wd>, { until: "The third premise" }],
        ["The third premise", 960, 220, <Wd c={CHALK} s={28} serif>"the ground is independent and unchanging"</Wd>],
        ["Something truly unchanging cannot give rise to anything", 960, 330, <Wd c={DIM} s={24}>unchanging: cannot give rise to anything</Wd>],
        ["And something truly independent cannot even be known", 960, 400, <Wd c={DIM} s={24}>independent: cannot even be known</Wd>],
        ["The ground cannot do the one thing it was posited for", 960, 500, <SK at="contradictory, illogical, and untenable" s={28}>the ground</SK>],
        ["contradictory, illogical, and untenable", 960, 620, <K c={GOLD} s={28}>contradictory · illogical · untenable</K>, { pop: true }],
      ]} />
      <At x={540} y={540} o={ramp(t, c("Each floor has a floor below"), 0.5) * fl}>
        <Floors n={n} labels={["table", "wood", "molecules", "atoms", "particles", "fields … ?"]} />
      </At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Not reality. A habit", 960, 100, <Wd c={GREEN} s={48} serif>Not reality. A habit.</Wd>],
      ["A sound happens. The habit supplies something that sounds", 960, 220, <Wd c={CHALK} s={26}>a sound happens → "something that sounds"</Wd>],
      ["A flash happens", 960, 280, <Wd c={CHALK} s={26}>a flash happens → "the lightning that flashes"</Wd>],
      ["A thought happens", 960, 340, <Wd c={CHALK} s={26}>a thought happens → "the mind that has it"</Wd>],
      ["it feels like the way things are", 960, 410, <Wd c={DIM} s={24}>old, shared, built into how we speak</Wd>],
      ["The rain is heard. It is wet", 560, 540, <Box c={GREEN} w={600} title="not &quot;nothing is there&quot;" sub="the rain is heard · the umbrella keeps you dry" />, { pop: true }],
      ["And nothing replaces the something", 1360, 540, <Box c={VIOLET} w={600} title="nothing replaces it" sub="not mind · not awareness · not energy · not emptiness" />, { pop: true }],
      ["begins to loosen", 960, 720, <Wd c={GOLD} s={32} serif>"there has to be something" begins to loosen</Wd>],
      ["was asking for something that was never needed", 960, 810, <Wd c={CHALK} s={24}>the question asked for something never needed</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The rain was only ever raining");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 3, Part 1 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 3 · Part 1</Wd>],
        ["The rain was only ever raining", 960, 560, <Rain w={560} h={340} />],
        ["The rain was only ever raining", 960, 820, <Wd c={CHALK} s={38} serif>The rain was only ever raining.</Wd>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["It is raining. And a question comes, almost by itself", "rain", <OpenScene />],
    ["So, the rain", "stuff", <AnswersScene />],
    ["To such a mind, the question cannot rest until it finds what is ultimate", "ground", <SomethingScene />],
    ["Why does it feel so natural", "grammar", <GrammarScene />],
    ["Is it ever necessary to put it that way", "grammar", <AskingScene />],
    ["So, before going further, this must be recognised, and clearly seen", "glasses", <GlassesScene />],
    ["does something I find completely new", "middle", <ApproachScene />],
    ["So let me take the default apart, a little", "met", <MetScene />],
    ["Second, the default against itself", "floors", <ItselfScene />],
    ["Not reality. A habit", "habit", <HabitScene />],
    ["This is Section 3, Part 1 of the Dependent Arising series", "night", <CloseScene />],
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
