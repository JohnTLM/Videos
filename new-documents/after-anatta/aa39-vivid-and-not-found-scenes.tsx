// Bonus video: Dependent Arising Section 2 Part 1: Vivid, and Not Found (AA39).
// (Script: new-documents/after-anatta/aa39-vivid-and-not-found-script.md, from EBooks
// Bonus Articles/vivid-and-not-found, draft of 2026-11-22; approved by the owner 2026-11-22.)
// Arc: what is it that appears? -> after Section 1, a quieter question; the big ideas grow from it -> "phenomenon",
// two senses; say "what appears" -> a bell (search bell, air, ear, mind; the chariot; conditions; three features,
// one fact) -> a red flower (noon, dusk, lamp, bee, colour blindness; dependent in the very moment it is red;
// designating, meeting, appearing one event) -> a passing thought (words, picture, jolt; where it came from; the
// mind not found) -> "then it is nowhere": the void struck -> which holds -> "what is it?": the "it" is the given in
// grammar; the fist; the suttas -> the question falls away -> the world without the weight -> next: the floor in
// time, matter and space.
// Stance: the void is drawn only to be struck; "what appears" is never drawn as a thing with a core; the mind is
// searched like the bell. Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "What is it that appears", "This sound. This red. This thought", "I am John Tan, known as Thusness",
  // the question
  "Section 1 asked whether one finished world waits underneath", "It does not. What appears is formed",
  "That clears the ground for a quieter question", "But this sound, this red, this thought, right now",
  "Anatta asks who is behind experience", "Here I ask what the experience itself is",
  "Private and public", "Inside and outside", "Mind and matter", "Cause and effect",
  "The usual word for it is phenomenon", "a phenomenon is anything that can be known",
  "used the same word for something else", "A basic element, carrying its own mark",
  "And it is never found", "I will just say: what appears",
  "And I will test the question itself as I go", "But it may already carry the given inside it",
  "I will set two ways of seeing side by side, three times",
  // bell
  "First, a bell", "A temple bell is struck", "It fills the courtyard",
  "Surely, then, the sound is something", "it must be real in itself", "Out there in the bell and the air",
  "Or in here, in my ears and my mind", "Or, and it is a big or, look for it",
  "Is the sound in the bell", "There is metal, and a trembling. Not the sound",
  "Is it in the air", "The wave is not the clear tone I hear",
  "Is it in the ear", "None of them is the sound",
  "Is it in the mind, then", "Look for that mind. It is not found either",
  "The sound is not in any of them", "It is not something apart from them", "And it is not their sum",
  "Yet it has not gone anywhere", "It is as clear as before",
  "This is the old test of", "The chariot is not its parts", "Not apart from its parts",
  "Not their collection, and not their shape", "it does not turn up", "Yet it carries its passenger",
  "The same search works on a sound",
  "And the sound came only because", "Take one away, and there is no tone",
  "So the sound has three features, all at once", "Vivid: it rings", "Not found: looked for",
  "Dependently arisen: it sounds only when its conditions meet",
  "They are one fact, seen three ways", "The bell still calls the monks to the hall",
  // red
  "Second, a red flower", "The red is deep and glowing", "surely a colour is",
  "Surely the red belongs to the petal", "And seeing only reports the red that was there",
  "Or, and again it is a big or, look at how the red appears",
  "At noon it glows", "At dusk it goes dark and grey", "Under a sodium street lamp it turns brown",
  "A bee, seeing in ultraviolet", "it is a dull brownish olive",
  "The red forms with the light", "All in one meeting", "There is no red stored in the petal",
  "Nor is it a private picture in here", "And in the head, it is not found either",
  "Here is the point I most want to make", "The red is not first a raw red",
  "It is dependent in the very moment it is red", "There is no plain layer underneath",
  "the red is singled out as this red in the seeing itself", "Designating, meeting and appearing are one event, through and through",
  "The red still guides the bee to the nectar",
  // thought
  "Third, a passing thought", "Surely a thought is different", "But a thought is mine",
  "Doubt everything else, and still there is this",
  "Or, and it is the biggest or, look at a thought as it passes", "I forgot to lock the door",
  "It arrives vividly", "A faint picture of the door", "A small jolt in the chest",
  "Where is it? Not in the words", "Not in the picture", "Not in the jolt", "And not apart from them",
  "And where did it come from? From the door", "From the habit of locking it",
  "From the hour, the language I learned", "Take those away, and that thought does not come",
  "So the thought is no more a little thing than the sound is",
  "That matters", "If the flower is not found out there, perhaps it is in here, as mind",
  "refused that way out", "The mind is looked for the same way, and it is not found either",
  "Mind and its objects rise and fall together", "The thought still sends me back to lock the door",
  // nowhere
  "Now, when the search finds nothing", "So the sound is nowhere", "A void",
  "A silent space, in which things appear and vanish", "That feels like depth",
  "It is the easiest mistake to make here", "The absence is not a place",
  "It is not a background left over when things are gone", "And it is not a container they appear in",
  "warns that those who turn emptiness into a view are incurable", "Even the word empty is only said to point",
  "The search removes the assumed thing, and puts nothing in its place",
  "So not found does not mean nothing", "The bell still rings", "there was never a thing there to be found",
  "And the ringing never needed one",
  // which holds
  "So, which holds", "By experience. Listen to one sound, now", "The sound stays bright", "And nothing is found",
  "Only hearing, vivid and complete",
  "By logic. Suppose the sound were real in itself", "Then it would depend on nothing",
  "A thing fixed from its own side could not change", "And what cannot change cannot appear, or act",
  "The very vividness the substance view rests on is the clearest mark of dependence",
  "By working. The bell calls the monks", "Each works as a meeting of conditions, reliably",
  "Function never needed an essence",
  "So the substance reading is not the truer view", "It is the default one, carried by habit and by language",
  "quietly sets up one thing behind the hearing",
  // what is it
  "What about the question I began with? What is it", "In everyday life, it is a good question",
  "What is that sound? The temple bell", "And it sends me to the hall",
  "But asked as: what is it really, in itself", "Then the question already assumes an it",
  "That is the given, slipping back in through grammar",
  "Asked that way, the question has no answer", "Not because the answer is hidden, or beyond words",
  "But because there was never an it, for an answer to be about",
  "It is like asking where the fist goes when the hand opens",
  "met questions like this again and again", "And he did not answer them on their own terms",
  "who feeds on consciousness", "said: not a valid question", "for what is consciousness a condition",
  "is suffering made by oneself", "By another? By both", "To each, the answer was: not so",
  "asked where a fire goes when it goes out", "The answer: that does not apply",
  "there is no where, for it to go",
  "Asked, is there a self", "Asked, is there no self? Silent again",
  "the world mostly leans on two notions", "It exists, and it does not exist",
  "The middle is dependent arising",
  "And he named four ways of meeting a question", "Some are answered directly", "Some by making distinctions",
  "Some with a counter question", "And some are set aside",
  "Each time, the move is the same", "The frame of the question is the problem",
  "So the answer changes the question", "to: dependent on what does it arise",
  "It names no nature", "It shows how what appears appears",
  "The question is not answered. It falls away", "nothing needs to fill its place. Not even a void",
  // close
  "And something changes when this is seen", "Each appearance is met as it is", "Vivid, and passing",
  "With nothing in it to hold, and no one behind it holding",
  "That is not a loss of the world", "It is the world, without the weight",
  "This is Section 2, Part 1 of the Dependent Arising series", "In Part 2, I follow the habit when it retreats",
  "surely each instant is real", "surely the smallest pieces are real", "surely space itself is",
  "I look for that floor, in time, in matter and in space",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  temple: { a: "rgba(150,105,45,0.46)", b: "rgba(60,50,130,0.44)", c: "rgba(40,90,110,0.32)" },
  rose: { a: "rgba(160,60,80,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  mind: { a: "rgba(80,55,160,0.5)", b: "rgba(40,80,130,0.4)", c: "rgba(120,90,50,0.3)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
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
/** A searched place: the label, then "not here" once its cue passes. */
const Searched: React.FC<{ at: string; no: string; label: string; c?: string }> = ({ at, no, label, c: col = CHALK }) => {
  const { t } = useT();
  const c = useCue();
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, opacity: ramp(t, c(at), 0.5) }}>
      <K c={col} s={26}>{label}</K>
      <div style={{ opacity: ramp(t, c(no), 0.5) }}><Wd c={WARM} s={22}>not here</Wd></div>
    </div>
  );
};

// ---------------------------------------------------------------- drawings
/** A temple bell; `ring` 0..1 sends sound rings out. */
const Bell: React.FC<{ size?: number; ring: number }> = ({ size = 260, ring }) => {
  const { t } = useT();
  return (
    <svg width={size * 2} height={size * 1.3} viewBox="-200 -20 400 260" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <circle key={i} cx={0} cy={120} r={90 + k * 110} fill="none" stroke={GOLD} strokeWidth={3} opacity={ring * (1 - k) * 0.7} />;
      })}
      <path d="M0 0 L0 20 M-60 40 C-60 10 60 10 60 40 L80 170 L-80 170 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M-95 170 L95 170" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
      <circle cx={0} cy={192} r={12} fill={GOLD} />
    </svg>
  );
};

/** A five-petal flower in a given colour. */
const Flower: React.FC<{ col: string; size?: number; pattern?: number }> = ({ col, size = 240, pattern = 0 }) => (
  <svg width={size} height={size * 1.4} viewBox="-100 -100 200 280" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${col})` }}>
    <path d="M0 40 C 6 90 -6 130 0 175" stroke={GREEN} strokeWidth={6} fill="none" />
    <path d="M0 120 C 30 100 55 110 60 125 C 40 135 20 132 0 120 Z" fill={`${GREEN}66`} stroke={GREEN} strokeWidth={3} />
    {[0, 72, 144, 216, 288].map((a) => (
      <ellipse key={a} cx={0} cy={-42} rx={28} ry={46} transform={`rotate(${a})`} fill={`${col}cc`} stroke={col} strokeWidth={3} />
    ))}
    {[0, 72, 144, 216, 288].map((a) => (
      <path key={`p${a}`} d="M0 -10 L0 -70" transform={`rotate(${a})`} stroke={ICE} strokeWidth={5} opacity={pattern} />
    ))}
    <circle cx={0} cy={0} r={18} fill={GOLD} />
  </svg>
);

/** A thought bubble. */
const Bubble: React.FC<{ w?: number; children: React.ReactNode }> = ({ w = 640, children }) => (
  <div style={{ position: "relative", width: w, padding: "26px 30px", borderRadius: 60, border: `3px solid ${VIOLET}`,
    background: "rgba(20,16,50,0.75)", boxShadow: `0 0 34px ${VIOLET}55`, textAlign: "center" }}>
    {children}
    <div style={{ position: "absolute", left: 80, bottom: -34, width: 26, height: 26, borderRadius: 13, border: `3px solid ${VIOLET}` }} />
    <div style={{ position: "absolute", left: 56, bottom: -62, width: 14, height: 14, borderRadius: 7, border: `3px solid ${VIOLET}` }} />
  </div>
);

/** A hand closing to a fist (`open` 0) and opening (`open` 1). */
const HandFist: React.FC<{ open: number }> = ({ open }) => (
  <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ overflow: "visible" }}>
    <rect x={-60} y={-10} width={120} height={100} rx={30} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={5} />
    {[-45, -15, 15, 45].map((x, i) => (
      <rect key={i} x={x - 13} y={-10 - 90 * open} width={26} height={20 + 90 * open} rx={13} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={5} />
    ))}
    <rect x={-95} y={10 - 30 * open} width={40} height={24} rx={12} transform={`rotate(${-30 * open} -75 20)`} fill={`${CHALK}22`} stroke={CHALK} strokeWidth={5} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["What is it that appears", 960, 300, <Wd c={GOLD} s={60} serif>What is it that appears?</Wd>],
      ["This sound. This red. This thought", 600, 450, <K c={GOLD} s={30}>this sound</K>, { pop: true }],
      ["This sound. This red. This thought", 960, 450, <K c={ROSE} s={30}>this red</K>, { pop: true, d: 0.6 }],
      ["This sound. This red. This thought", 1320, 450, <K c={VIOLET} s={30}>this thought</K>, { pop: true, d: 1.2 }],
      ["I am John Tan, known as Thusness", 960, 640, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 1</Wd>, { d: 0.8 }],
    ]} />
  </AbsoluteFill>
);

const QuestionScene: React.FC = () => {
  const two = "The usual word for it is phenomenon";
  return (
    <AbsoluteFill>
      <Items items={[
        ["Section 1 asked whether one finished world waits underneath", 960, 110, <Wd c={DIM} s={28}>Section 1: one finished world underneath?</Wd>, { until: two }],
        ["It does not. What appears is formed", 960, 170, <Wd c={GOLD} s={32} serif>No. What appears is formed.</Wd>, { until: two }],
        ["That clears the ground for a quieter question", 960, 270, <Wd c={CHALK} s={42} serif>A quieter question</Wd>, { until: two }],
        ["But this sound, this red, this thought, right now", 960, 340, <Wd c={DIM} s={26}>this sound, this red, this thought, right now</Wd>, { until: two }],
        ["Anatta asks who is behind experience", 640, 450, <Box c={TEAL} w={460} title="Anatta" sub="who is behind experience?" />, { pop: true, until: two }],
        ["Here I ask what the experience itself is", 1280, 450, <Box c={GOLD} w={460} title="Here" sub="what is the experience itself?" />, { pop: true, until: two }],
        ["Private and public", 480, 640, <K c={CHALK} s={24}>private and public</K>, { pop: true, until: two }],
        ["Inside and outside", 800, 640, <K c={CHALK} s={24}>inside and outside</K>, { pop: true, until: two }],
        ["Mind and matter", 1120, 640, <K c={CHALK} s={24}>mind and matter</K>, { pop: true, until: two }],
        ["Cause and effect", 1440, 640, <K c={CHALK} s={24}>cause and effect</K>, { pop: true, until: two }],
        [two, 960, 120, <Wd c={CHALK} s={42} serif>"phenomenon"</Wd>],
        ["a phenomenon is anything that can be known", 560, 300, <Box c={TEAL} w={560} title="Middle Way" sub="anything that can be known · empty" />, { pop: true }],
        ["used the same word for something else", 1360, 300, <Box c={ROSE} w={560} title="Abhidharma" sub="a basic element with its own mark" />, { pop: true }],
        ["And it is never found", 1360, 430, <K c={WARM} s={24}>never found</K>, { pop: true }],
        ["I will just say: what appears", 960, 540, <Wd c={GOLD} s={44} serif>what appears</Wd>, { pop: true }],
        ["And I will test the question itself as I go", 960, 660, <Wd c={CHALK} s={30} serif>and test the question itself: "What is it?"</Wd>],
        ["But it may already carry the given inside it", 960, 720, <Wd c={DIM} s={24}>it may carry the given inside it</Wd>],
        ["I will set two ways of seeing side by side, three times", 960, 800, <Wd c={DIM} s={24}>two ways of seeing · three times · which holds?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or, and it is a big or, look for it");
  const chariot = c("This is the old test of");
  const cond = c("And the sound came only because");
  const bellO = 1 - ramp(t, chariot, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["First, a bell", 960, 90, <Wd c={GOLD} s={48} serif>1 · A bell</Wd>]]} />
      <At x={t < look ? 960 : 420} y={420} o={ramp(t, c("A temple bell is struck"), 0.5) * bellO}>
        <Bell ring={ramp(t, c("A temple bell is struck") + 0.4, 0.4)} />
      </At>
      <Items items={[
        ["Surely, then, the sound is something", 960, 170, <Wd c={DIM} s={28}>surely the sound is something…</Wd>, { until: "Or, and it is a big or, look for it" }],
        ["it must be real in itself", 960, 680, <Wd c={DIM} s={26}>vivid, so real in itself</Wd>, { until: "Or, and it is a big or, look for it" }],
        ["Out there in the bell and the air", 640, 760, <K c={DIM} s={24}>out there?</K>, { until: "Or, and it is a big or, look for it" }],
        ["Or in here, in my ears and my mind", 1280, 760, <K c={DIM} s={24}>in here?</K>, { until: "Or, and it is a big or, look for it" }],
        ["Or, and it is a big or, look for it", 1260, 170, <Wd c={GOLD} s={36} serif>Or look for it.</Wd>, { until: "This is the old test of" }],
      ]} />
      {t > look - 0.5 && t < chariot + 0.6 && (
        <AbsoluteFill style={{ opacity: bellO }}>
          <At x={1020} y={300}><Searched at="Is the sound in the bell" no="There is metal, and a trembling. Not the sound" label="in the bell?" c={GOLD} /></At>
          <At x={1400} y={300}><Searched at="Is it in the air" no="The wave is not the clear tone I hear" label="in the air?" c={ICE} /></At>
          <At x={1020} y={450}><Searched at="Is it in the ear" no="None of them is the sound" label="in the ear?" c={TEAL} /></At>
          <At x={1400} y={450}><Searched at="Is it in the mind, then" no="Look for that mind. It is not found either" label="in the mind?" c={VIOLET} /></At>
          <Items items={[
            ["It is not something apart from them", 1210, 590, <K c={WARM} s={24}>not apart from them</K>, { pop: true }],
            ["And it is not their sum", 1210, 650, <K c={WARM} s={24}>not their sum</K>, { pop: true }],
            ["Yet it has not gone anywhere", 1210, 740, <Wd c={GOLD} s={32} serif>yet it is as clear as before</Wd>],
          ]} />
        </AbsoluteFill>
      )}
      {t >= chariot && t < cond + 0.6 && (
        <AbsoluteFill style={{ opacity: 1 - ramp(t, cond, 0.5) }}>
          <Items items={[
            ["This is the old test of", 960, 180, <Wd c={CHALK} s={40} serif>The chariot test</Wd>],
            ["The chariot is not its parts", 560, 320, <SK at="Not apart from its parts" s={26}>its parts</SK>],
            ["Not apart from its parts", 960, 320, <SK at="Not their collection, and not their shape" s={26}>apart from its parts</SK>],
            ["Not their collection, and not their shape", 1360, 320, <SK at="it does not turn up" s={26}>their collection, their shape</SK>],
            ["it does not turn up", 960, 450, <Wd c={WARM} s={32} serif>searched for in every way, it does not turn up</Wd>],
            ["Yet it carries its passenger", 960, 540, <Wd c={GOLD} s={32} serif>yet it carries its passenger</Wd>],
            ["The same search works on a sound", 960, 660, <K c={GOLD} s={28}>the same search works on a sound</K>, { pop: true }],
          ]} />
        </AbsoluteFill>
      )}
      {t >= cond && (
        <Items items={[
          ["And the sound came only because", 960, 190, <Wd c={CHALK} s={28}>bell · striking · air · ear · attention, together</Wd>, { until: "So the sound has three features, all at once" }],
          ["Take one away, and there is no tone", 960, 260, <Wd c={DIM} s={26}>take one away: no tone</Wd>, { until: "So the sound has three features, all at once" }],
          ["So the sound has three features, all at once", 960, 180, <Wd c={CHALK} s={40} serif>Three features, all at once</Wd>],
          ["Vivid: it rings", 480, 400, <Box c={GOLD} w={440} title="Vivid" sub="it rings; it cannot be denied" />, { pop: true }],
          ["Not found: looked for", 960, 400, <Box c={ICE} w={440} title="Not found" sub="no core, no edge, no place" />, { pop: true }],
          ["Dependently arisen: it sounds only when its conditions meet", 1440, 400, <Box c={TEAL} w={440} title="Dependently arisen" sub="only when conditions meet" />, { pop: true }],
          ["They are one fact, seen three ways", 960, 580, <Wd c={GOLD} s={36} serif>one fact, seen three ways</Wd>],
          ["The bell still calls the monks to the hall", 960, 700, <K c={GREEN} s={26}>nothing missing: the bell still calls the monks</K>, { pop: true }],
        ]} />
      )}
    </AbsoluteFill>
  );
};

const RedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or, and again it is a big or, look at how the red appears");
  const point = c("Here is the point I most want to make");
  const states: [string, string, string][] = [
    ["At noon it glows", "#FF3B4E", "noon"],
    ["At dusk it goes dark and grey", "#6B5560", "dusk"],
    ["Under a sodium street lamp it turns brown", "#8A5A2B", "street lamp"],
    ["A bee, seeing in ultraviolet", "#B7A8FF", "a bee"],
    ["it is a dull brownish olive", "#7A7A3A", "colour blindness"],
  ];
  let col = "#FF3B4E", label = "", pattern = 0;
  for (const [cue, cc, l] of states) if (t >= c(cue)) { col = cc; label = l; }
  if (t >= c("A bee, seeing in ultraviolet") && t < c("it is a dull brownish olive")) pattern = 1;
  if (t >= c("The red forms with the light")) { col = "#FF3B4E"; label = ""; pattern = 0; }
  return (
    <AbsoluteFill>
      <Items items={[["Second, a red flower", 960, 90, <Wd c={ROSE} s={48} serif>2 · A red flower</Wd>]]} />
      <At x={t < point ? 520 : 360} y={470} o={ramp(t, c("Second, a red flower"), 0.6) * (t < point ? 1 : 0.5)}>
        <Flower col={col} pattern={pattern} />
      </At>
      {label && t >= look && <At x={520} y={760}><K c={CHALK} s={24}>{label}</K></At>}
      <Items items={[
        ["surely a colour is", 1240, 260, <Wd c={DIM} s={28}>surely a colour is simply there…</Wd>, { until: "Or, and again it is a big or, look at how the red appears" }],
        ["Surely the red belongs to the petal", 1240, 340, <Wd c={DIM} s={26}>the petal has it, like a box has contents</Wd>, { until: "Or, and again it is a big or, look at how the red appears" }],
        ["And seeing only reports the red that was there", 1240, 400, <Wd c={DIM} s={26}>seeing only reports it</Wd>, { until: "Or, and again it is a big or, look at how the red appears" }],
        ["Or, and again it is a big or, look at how the red appears", 1240, 200, <Wd c={GOLD} s={34} serif>Or look at how the red appears.</Wd>, { until: "Here is the point I most want to make" }],
        ["The red forms with the light", 1240, 330, <Wd c={CHALK} s={26}>light · surface · eye · body · attention</Wd>, { until: "Here is the point I most want to make" }],
        ["All in one meeting", 1240, 390, <K c={GOLD} s={26}>all in one meeting</K>, { pop: true, until: "Here is the point I most want to make" }],
        ["There is no red stored in the petal", 1240, 480, <SK at="Nor is it a private picture in here" s={24}>red stored in the petal</SK>, { until: "Here is the point I most want to make" }],
        ["Nor is it a private picture in here", 1240, 560, <SK at="And in the head, it is not found either" s={24}>a private picture in the head</SK>, { until: "Here is the point I most want to make" }],
        ["Here is the point I most want to make", 1120, 200, <Wd c={GOLD} s={38} serif>The point most easily missed</Wd>],
        ["The red is not first a raw red", 1120, 300, <SK at="It is dependent in the very moment it is red" s={26}>first raw red, then "dependent"</SK>],
        ["It is dependent in the very moment it is red", 1120, 390, <Wd c={GOLD} s={32} serif>dependent in the very moment it is red</Wd>],
        ["There is no plain layer underneath", 1120, 460, <Wd c={DIM} s={24}>no plain layer underneath</Wd>],
        ["the red is singled out as this red in the seeing itself", 1120, 560, <Wd c={CHALK} s={26}>singled out as "this red" in the seeing, before any word</Wd>],
        ["Designating, meeting and appearing are one event, through and through", 1120, 650, <Box c={GOLD} w={720} title="designating · meeting · appearing" sub="one event, through and through" />, { pop: true }],
        ["The red still guides the bee to the nectar", 1120, 790, <K c={GREEN} s={24}>nothing missing: the bee still finds the nectar</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ThoughtScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Or, and it is the biggest or, look at a thought as it passes");
  const from = c("And where did it come from? From the door");
  const sum = c("So the thought is no more a little thing than the sound is");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Third, a passing thought", 960, 90, <Wd c={VIOLET} s={48} serif>3 · A passing thought</Wd>],
        ["Surely a thought is different", 960, 200, <Wd c={DIM} s={28}>surely a thought is different…</Wd>, { until: "Or, and it is the biggest or, look at a thought as it passes" }],
        ["But a thought is mine", 960, 300, <Wd c={DIM} s={28}>mine · inside · made of mind</Wd>, { until: "Or, and it is the biggest or, look at a thought as it passes" }],
        ["Doubt everything else, and still there is this", 960, 380, <Wd c={DIM} s={26}>doubt everything else, and still there is this</Wd>, { until: "Or, and it is the biggest or, look at a thought as it passes" }],
      ]} />
      {t >= look - 0.3 && t < sum + 0.6 && (
        <AbsoluteFill style={{ opacity: 1 - ramp(t, sum, 0.5) }}>
          <Items items={[
            ["I forgot to lock the door", 960, 230, <Bubble><Wd c={CHALK} s={36} serif>"I forgot to lock the door."</Wd></Bubble>, { pop: true }],
          ]} />
          {t < from && (
            <>
              <At x={560} y={460}><Searched at="It arrives vividly" no="Where is it? Not in the words" label="words" c={CHALK} /></At>
              <At x={960} y={460}><Searched at="A faint picture of the door" no="Not in the picture" label="a faint picture" c={ICE} /></At>
              <At x={1360} y={460}><Searched at="A small jolt in the chest" no="Not in the jolt" label="a jolt in the chest" c={ROSE} /></At>
              <Items items={[["And not apart from them", 960, 620, <K c={WARM} s={24}>not apart from them</K>, { pop: true }]]} />
            </>
          )}
          <Items items={[
            ["And where did it come from? From the door", 480, 470, <K c={CHALK} s={24}>the door</K>, { pop: true }],
            ["From the habit of locking it", 800, 470, <K c={CHALK} s={24}>the habit</K>, { pop: true }],
            ["From the hour, the language I learned", 1120, 470, <K c={CHALK} s={24}>the hour · the language</K>, { pop: true }],
            ["From the hour, the language I learned", 1440, 470, <K c={CHALK} s={24}>a sound in the street</K>, { pop: true, d: 1.4 }],
            ["Take those away, and that thought does not come", 960, 600, <Wd c={GOLD} s={30} serif>take those away, and that thought does not come</Wd>],
          ]} />
        </AbsoluteFill>
      )}
      <Items items={[
        ["So the thought is no more a little thing than the sound is", 960, 220, <Wd c={CHALK} s={34} serif>vivid · not found · dependently arisen</Wd>],
        ["That matters", 960, 300, <Wd c={DIM} s={26}>like the bell, like the red</Wd>],
        ["If the flower is not found out there, perhaps it is in here, as mind", 960, 420, <SK at="refused that way out" s={28}>"not out there? then in here, as mind"</SK>],
        ["The mind is looked for the same way, and it is not found either", 960, 530, <Wd c={VIOLET} s={30} serif>the mind, looked for the same way, is not found either</Wd>],
        ["Mind and its objects rise and fall together", 960, 620, <K c={GOLD} s={28}>mind and its objects rise and fall together</K>, { pop: true }],
        ["The thought still sends me back to lock the door", 960, 740, <K c={GREEN} s={24}>nothing missing: I still go back and lock it</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const NowhereScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = ramp(t, c("A void"), 1);
  const gone = ramp(t, c("The absence is not a place"), 1.2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now, when the search finds nothing", 960, 100, <Wd c={CHALK} s={38} serif>One more quick step</Wd>],
        ["So the sound is nowhere", 960, 170, <Wd c={DIM} s={28}>"so the sound is nowhere…"</Wd>],
      ]} />
      <At x={960} y={430} o={v * (1 - gone)}>
        <svg width={480} height={480} viewBox="-240 -240 480 480">
          <circle r={200} fill="rgba(0,0,0,0.55)" stroke={DIM} strokeWidth={4} strokeDasharray="14 10" />
          <circle r={120} fill="rgba(0,0,0,0.4)" stroke={DIM} strokeWidth={2} strokeDasharray="8 8" />
        </svg>
      </At>
      <Items items={[
        ["A void", 960, 430, <Wd c={DIM} s={40} serif>a void behind everything</Wd>, { until: "The absence is not a place" }],
        ["A silent space, in which things appear and vanish", 960, 690, <Wd c={DIM} s={24}>a silent space where things appear and vanish</Wd>, { until: "The absence is not a place" }],
        ["That feels like depth", 960, 760, <Wd c={WARM} s={28}>it feels like depth · the easiest mistake</Wd>, { until: "The absence is not a place" }],
        ["The absence is not a place", 560, 300, <SK at="The search removes the assumed thing, and puts nothing in its place" s={26}>a place</SK>],
        ["It is not a background left over when things are gone", 960, 300, <SK at="The search removes the assumed thing, and puts nothing in its place" s={26}>a background</SK>],
        ["And it is not a container they appear in", 1360, 300, <SK at="The search removes the assumed thing, and puts nothing in its place" s={26}>a container</SK>],
        ["warns that those who turn emptiness into a view are incurable", 960, 400, <Wd c={CHALK} s={26}>emptiness turned into a view: incurable (MMK 13.8)</Wd>],
        ["Even the word empty is only said to point", 960, 450, <Wd c={DIM} s={24}>even "empty" is said only to point (MMK 22.11)</Wd>],
        ["The search removes the assumed thing, and puts nothing in its place", 960, 550, <Wd c={GOLD} s={32} serif>it removes the assumed thing, and puts nothing in its place</Wd>],
        ["So not found does not mean nothing", 960, 650, <Wd c={CHALK} s={32} serif>not found ≠ nothing</Wd>],
        ["there was never a thing there to be found", 960, 730, <Wd c={DIM} s={24}>there was never a thing there to be found</Wd>],
        ["And the ringing never needed one", 960, 790, <K c={GREEN} s={24}>and the ringing never needed one</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. Listen to one sound, now", 400, 260, <Box c={ICE} w={500} title="Experience" sub="where is it? what is it made of?" />, { pop: true }],
      ["And nothing is found", 400, 400, <Wd c={CHALK} s={24}>bright, and nothing found</Wd>],
      ["Only hearing, vivid and complete", 400, 450, <Wd c={DIM} s={22}>only hearing, vivid and complete</Wd>],
      ["By logic. Suppose the sound were real in itself", 960, 260, <Box c={VIOLET} w={500} title="Logic" sub="real in itself: depends on nothing" />, { pop: true }],
      ["A thing fixed from its own side could not change", 960, 400, <Wd c={CHALK} s={24}>fixed: could not arise or end</Wd>],
      ["The very vividness the substance view rests on is the clearest mark of dependence", 960, 450, <Wd c={DIM} s={22}>vividness: the clearest mark of dependence</Wd>],
      ["By working. The bell calls the monks", 1520, 260, <Box c={TEAL} w={500} title="Working" sub="the bell, the bee, the door" />, { pop: true }],
      ["Each works as a meeting of conditions, reliably", 1520, 400, <Wd c={CHALK} s={24}>a meeting of conditions, reliably</Wd>],
      ["Function never needed an essence", 1520, 450, <Wd c={DIM} s={22}>function never needed an essence</Wd>],
      ["So the substance reading is not the truer view", 960, 600, <Wd c={CHALK} s={34} serif>not the truer view…</Wd>],
      ["It is the default one, carried by habit and by language", 960, 670, <Wd c={GOLD} s={32} serif>the default one, carried by habit and language</Wd>],
      ["quietly sets up one thing behind the hearing", 960, 760, <Wd c={DIM} s={24}>the noun "the sound" sets up one thing behind the hearing</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhatScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fist = c("It is like asking where the fist goes when the hand opens");
  const suttas = c("met questions like this again and again");
  const each = c("Each time, the move is the same");
  const open = ramp(t, fist + 2, 1.2);
  const rows: [string, string, string, string][] = [
    ["who feeds on consciousness", "SN 12.12", "\"Who feeds?\"  not a valid question → for what is it a condition?", TEAL],
    ["is suffering made by oneself", "SN 12.17", "by oneself? another? both? chance?  not so → dependent arising", ROSE],
    ["asked where a fire goes when it goes out", "MN 72", "where does the fire go?  does not apply", WARM],
    ["Asked, is there a self", "SN 44.10", "self? no self?  silence", VIOLET],
    ["the world mostly leans on two notions", "SN 12.15", "\"it exists\" · \"it does not\"  → the middle", ICE],
    ["And he named four ways of meeting a question", "AN 4.42", "four ways to meet a question · some set aside", GOLD],
  ];
  return (
    <AbsoluteFill>
      {t < suttas + 0.6 && (
        <AbsoluteFill style={{ opacity: 1 - ramp(t, suttas, 0.5) }}>
          <Items items={[
            ["What about the question I began with? What is it", 960, 110, <Wd c={GOLD} s={50} serif>"What is it?"</Wd>],
            ["What is that sound? The temple bell", 560, 260, <Box c={GREEN} w={540} title="in everyday life" sub="what is that sound? the temple bell" />, { pop: true }],
            ["And it sends me to the hall", 560, 380, <K c={GREEN} s={24}>true · checkable · it works</K>, { pop: true }],
            ["But asked as: what is it really, in itself", 1360, 260, <Box c={ROSE} w={540} title="in itself?" sub="what is it really?" />, { pop: true }],
            ["Then the question already assumes an it", 1360, 380, <Wd c={ROSE} s={30} serif>it assumes an "it"</Wd>],
            ["That is the given, slipping back in through grammar", 1360, 440, <Wd c={DIM} s={24}>the given, back in through grammar</Wd>],
            ["Asked that way, the question has no answer", 960, 540, <Wd c={CHALK} s={30} serif>no answer:</Wd>],
            ["Not because the answer is hidden, or beyond words", 960, 600, <SK at="But because there was never an it, for an answer to be about" s={24}>hidden, or beyond words</SK>],
            ["But because there was never an it, for an answer to be about", 960, 670, <Wd c={GOLD} s={28} serif>there was never an "it" for it to be about</Wd>],
          ]} />
          <At x={1640} y={720} o={ramp(t, fist, 0.5)}><HandFist open={open} /></At>
          <Items items={[["It is like asking where the fist goes when the hand opens", 1640, 560, <Wd c={DIM} s={22}>where does the fist go?</Wd>]]} />
        </AbsoluteFill>
      )}
      {t >= suttas && t < each + 0.6 && (
        <AbsoluteFill style={{ opacity: 1 - ramp(t, each, 0.5) }}>
          <Items items={[
            ["met questions like this again and again", 960, 100, <Wd c={CHALK} s={38} serif>The Buddha, again and again</Wd>],
            ["And he did not answer them on their own terms", 960, 160, <Wd c={DIM} s={24}>not answered on their own terms</Wd>],
          ]} />
          {rows.map(([cue, ref, text, col], i) => (
            <React.Fragment key={ref}>
              <At x={330} y={260 + i * 95} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}><K c={col} s={24}>{ref}</K></At>
              <At x={1080} y={260 + i * 95} o={ramp(t, c(cue) + 0.3, 0.5)}><Wd c={CHALK} s={25}>{text}</Wd></At>
            </React.Fragment>
          ))}
        </AbsoluteFill>
      )}
      <Items items={[
        ["Each time, the move is the same", 960, 140, <Wd c={CHALK} s={40} serif>Each time, the same move</Wd>],
        ["The frame of the question is the problem", 960, 220, <Wd c={DIM} s={26}>the frame of the question is the problem</Wd>],
        ["So the answer changes the question", 560, 360, <SK at="to: dependent on what does it arise" s={28}>who? what is it in itself?</SK>],
        ["to: dependent on what does it arise", 1360, 360, <K c={GOLD} s={28}>dependent on what does it arise?</K>, { pop: true }],
        ["It names no nature", 960, 480, <Wd c={CHALK} s={28}>vivid · not found · dependently arisen: names no nature</Wd>],
        ["It shows how what appears appears", 960, 540, <Wd c={DIM} s={24}>it shows how what appears appears</Wd>],
        ["The question is not answered. It falls away", 960, 650, <Wd c={GOLD} s={40} serif>Not answered. It falls away.</Wd>],
        ["nothing needs to fill its place. Not even a void", 960, 740, <Wd c={DIM} s={26}>nothing fills its place · not even a void</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("I look for that floor, in time, in matter and in space");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["And something changes when this is seen", 960, 200, <Wd c={CHALK} s={36} serif>When this is seen</Wd>, { until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["Each appearance is met as it is", 960, 300, <Wd c={CHALK} s={28}>each appearance met as it is</Wd>, { until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["Vivid, and passing", 960, 370, <K c={GOLD} s={28}>vivid, and passing</K>, { pop: true, until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["With nothing in it to hold, and no one behind it holding", 960, 450, <Wd c={DIM} s={26}>nothing to hold · no one holding</Wd>, { until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["That is not a loss of the world", 960, 580, <Wd c={CHALK} s={30} serif>not a loss of the world</Wd>, { until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["It is the world, without the weight", 960, 660, <Wd c={GOLD} s={46} serif>the world, without the weight</Wd>, { until: "This is Section 2, Part 1 of the Dependent Arising series" }],
        ["This is Section 2, Part 1 of the Dependent Arising series", 960, 150, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 1</Wd>],
        ["In Part 2, I follow the habit when it retreats", 960, 230, <Wd c={DIM} s={26}>next, Part 2: the habit retreats</Wd>],
        ["surely each instant is real", 480, 400, <Box c={ICE} w={420} title="the moment" sub='"surely each instant is real"' />, { pop: true }],
        ["surely the smallest pieces are real", 960, 400, <Box c={ROSE} w={420} title="the atom" sub='"surely the smallest pieces"' />, { pop: true }],
        ["surely space itself is", 1440, 400, <Box c={VIOLET} w={420} title="space" sub='"surely space itself"' />, { pop: true }],
        ["I look for that floor, in time, in matter and in space", 960, 600, <Wd c={CHALK} s={30} serif>looking for the floor: time · matter · space</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["What is it that appears", "dusk", <OpenScene />],
    ["Section 1 asked whether one finished world waits underneath", "search", <QuestionScene />],
    ["First, a bell", "temple", <BellScene />],
    ["Second, a red flower", "rose", <RedScene />],
    ["Third, a passing thought", "mind", <ThoughtScene />],
    ["Now, when the search finds nothing", "ghost", <NowhereScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["What about the question I began with? What is it", "jade", <WhatScene />],
    ["And something changes when this is seen", "night", <CloseScene />],
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
