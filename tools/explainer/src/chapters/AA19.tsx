// After Anatta · Explorations: Causal Efficacy Without Causal Power (thusness-website after-anatta/causal-efficacy.html,
// aa-causal-efficacy, a zoom-in of Cause and Effect; EBooks Bonus Articles/causal-efficacy-without-causal-power).
// Arc: a match, a flat loaf -> the habit: a doer behind the causing -> causes work, no power is found -> key and lock,
// seed -> three senses of "cause" -> a thing with its own nature could not act (the anvil) -> conditions are the appearing
// (flame not a wall of bricks; the loaf cut four ways; framework, agreements, setting) -> what this does to causation, two
// wrong hearings -> is it orthodox? MMK 1 and 20, named together not simultaneous, "I planted this tree" -> designated
// capacity, not Hume -> karma: the mere I kept as the person, refused as a bridge -> neither carried nor cut: face the felt
// gap -> beyond cause and effect, where I part from some readings, Mipham -> seeing through: match, angry words -> the tap.
// Stance: a power in the cause, a handover, a bridge, a source behind are drawn only to be struck. The flame, the loaf,
// the key in its lock, the water stay drawn and vivid. Nothing is drawn as a ground, a web or a light behind.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "Strike a match", "Leave the yeast out of the dough", "This is After Anatta",
  "Nothing seems more certain than that one thing brings about another", "Rice grows from rice seed, never from barley",
  "Medicine heals", "Actions bear fruit",
  // the habit
  "But a quieter habit comes with this certainty", "We picture the match as holding a power to light",
  "and the angry word as holding the anger it causes", "The cause becomes a little thing with a force in it",
  "That picture is the same habit that builds a self", "A self is the doer behind the doing",
  "A causal power is the doer behind the causing", "the doer behind seeing falls away", "the doer falls away from everything",
  // the view
  "So this is my view, in one line", "Causes work", "A power inside them that makes the effect is never found", "Both stand",
  // two halves
  "First, causes work", "Barley seeds grow barley, and fire burns", "a finished thing being pushed across an edge",
  "Second, no power is found", "Take a key", "It opens this lock and no other", "Put it in the wrong lock, and it opens nothing",
  "So where is its power to open", "It shows itself only with its partner", "Or take a seed",
  "adds a name, not an explanation",
  // three senses
  "is used in three ways", "The first is a producer", "The second is a condition that lines up", "That one stands",
  "The third is a name", "Keeping the third in view",
  // the anvil
  "Now turn the usual worry round", "People fear that if things are empty, nothing could work", "It is the other way",
  "Suppose this moment existed by itself", "Could it change", "Could it combine with anything", "Could it act",
  "would be fixed, like an anvil", "Things work, and what works is found empty", "And emptiness itself causes nothing",
  // conditions are the appearing
  "Now the part I most want to make clear", "Conditions are the appearing",
  "Even after the power is gone, the mind keeps one last layer", "Spark, fuel and air first",
  "The flame afterwards, built out of them", "But look at the flame", "the way a wall is built from bricks",
  "What is there is the burning, vivid and whole", "that same appearing, divided up",
  // the loaf
  "Who divides it", "Think of a loaf of bread", "A cook says it rose because of the yeast", "A chemist names the sugars",
  "A physicist names molecules", "A baker in a cold kitchen names the draught",
  "Each picks out different conditions, and each works", "waiting to be read off",
  "The parts appear as parts only in relation to a framework", "works within a set of agreements, inside a setting",
  "In a kitchen, leave out the yeast and the loaf is flat, every time", "Take the cook's account to the scale of atoms",
  "and it fails", "enough to stake a life on", "not to parts that exist from their own side",
  // what this does
  "Then see what this does to causation", "said to produce itself",
  "The picture of production has nothing left to stand on", "And nothing is lost", "The cook still bakes",
  "Two wrong ways to hear this", "so the conditions are only concepts", "The framework works",
  "so the appearing is the true whole underneath", "The whole and the parts are named together",
  // orthodox?
  "Let me check it against", "opens with four corners", "Not from itself, not from another, not from both",
  "all four answers are refused", "a producing activity inside the cause", "A seed in a dry jar is just a seed",
  "In his twentieth chapter", "the cause would have two selves", "the effect has no cause",
  "So nothing passes from cause to effect", "One caution here", "they are named together, as long and short are",
  "I do not mean they happen at the same moment", "the seed comes before the sprout", "Someone who plants a seed says",
  "What the world uses is mere arising",
  // capacity
  "adds a careful point", "is able to perform a function", "So he keeps a capacity",
  "What he refuses is a capacity that exists from its own side", "Some of my older lines leaned towards",
  "No power is found from its own side", "The capacity, named in dependence, works", "The key opens this lock",
  "And this is not the philosopher", "For me there were never two separate things that needed a link",
  // karma and the mere I
  "Now the hardest part", "An action ceases", "How does its fruit come years later", "is itself a functioning thing",
  "And its imprints are said to rest on the mere I", "I keep the mere I as the person the world speaks of",
  "I did it, and I will meet the result", "What I refuse is the mere I as a bridge", "Here is why",
  "rejects a mind that knows itself", "It was posited to explain memory", "it does the same job", "It fills the gap",
  "so the person stays", "Only the bridge goes", "No one in the world knows of it",
  // the gap
  "So I keep the phrase", "Nothing is carried across, and nothing is cut off", "It is meant to make you face something",
  "It leaves the mind uneasy", "Something seems to be missing between the act and its fruit", "Do not answer that feeling",
  "Look at it, again and again", "The gap is felt only because the habit",
  "Analysis shows, every time, that no bridge can be found", "experience never meets one", "And still the feeling returns",
  "how deep the habit of confused seeing runs", "though no power to blind is ever found", "no bridge, and no break either",
  "with nothing left to link, nothing is missing",
  // beyond cause and effect
  "That is where you can glimpse", "I do not read it as a place where causes stop working",
  "the end of the demand for a producer", "The display is complete and present as it is", "Nothing higher, nothing lower",
  "Here I part from some readings", "describe spontaneous presence as the presence of the ground",
  "I read spontaneous presence as dependent arising itself", "Not uncaused, and not a source behind things",
  "That is my own synthesis", "who holds that appearance and emptiness are one", "But on bridges",
  "He keeps a mind that knows itself", "I am stricter", "It is the clarity of knowing, not lit by anything else",
  "that is very near what I mean when I say clarity is never missing",
  // seeing through
  "So how is this seen through", "Not by a better theory of causes", "By looking for the power and not finding it",
  "and then seeing that nothing was lost", "At no moment is a finished flame handed across", "Or take angry words",
  "Your words made me angry", "The anger arose with the words", "No power to anger sits inside the words",
  "Yet the words can be apologised for", "This is where the insight matters most",
  "Suffering is kept going by conditions that can change", "When this is seen", "Conditions matter more, not less",
  "Mind and matter lose their weight", "light, magical and plastic",
  // try it
  "Turn on a tap", "Look for the moment the tap makes the water flow", "Then look for the flowing apart from the tap",
  "Neither is found", "And the water still flows",
];

const M = {
  ember: { a: "rgba(170,90,40,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(40,80,120,0.3)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
  night: { a: "rgba(20,22,60,0.65)", b: "rgba(40,30,90,0.5)", c: "rgba(15,30,60,0.45)" },
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
/** A chip struck through at `strikeAt`: only for what is never found (a power, a handover, a bridge, a source). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

/** A match; `lit` (0..1) is the flame. */
const Match: React.FC<{ lit?: number; size?: number }> = ({ lit = 1, size = 1 }) => {
  const { t } = useT();
  const f = 1 + 0.07 * Math.sin(t * 9);
  return (
    <svg width={160 * size} height={320 * size} viewBox="0 0 160 320" style={{ overflow: "visible" }}>
      <rect x={72} y={110} width={16} height={200} rx={4} fill="rgba(228,194,122,0.25)" stroke={CHALK} strokeWidth={4} />
      <ellipse cx={80} cy={106} rx={14} ry={18} fill="rgba(255,143,163,0.6)" stroke={ROSE} strokeWidth={4} />
      <g opacity={lit} transform={`translate(80 60) scale(${f * lit}) translate(-80 -60)`}>
        <path d="M80 0 C104 36 110 62 98 82 C90 94 70 94 62 82 C50 62 56 36 80 0 Z" fill="rgba(228,194,122,0.5)"
          stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 22px ${GOLD})` }} />
      </g>
    </svg>
  );
};

/** A loaf; `flat` (0..1) squashes it. */
const Loaf: React.FC<{ flat?: number; size?: number }> = ({ flat = 0, size = 1 }) => {
  const h = 120 - 70 * flat;
  return (
    <svg width={360 * size} height={200 * size} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
      <path d={`M30 170 Q30 ${170 - h} 180 ${170 - h} Q330 ${170 - h} 330 170 Z`} fill="rgba(228,194,122,0.28)" stroke={GOLD} strokeWidth={5} />
      {flat < 0.5 && [110, 170, 230].map((x) => <path key={x} d={`M${x} ${190 - h} q20 18 40 0`} fill="none" stroke={WARM} strokeWidth={4} />)}
      <line x1={20} y1={172} x2={340} y2={172} stroke={DIM} strokeWidth={3} />
    </svg>
  );
};

/** A key and a lock side by side; `turn` (0..1) moves the key in. */
const KeyLock: React.FC<{ turn?: number; wrong?: boolean }> = ({ turn = 0, wrong }) => (
  <svg width={560} height={220} viewBox="0 0 560 220" style={{ overflow: "visible" }}>
    <g transform={`translate(${120 * turn} 0)`}>
      <circle cx={70} cy={110} r={46} fill="none" stroke={GOLD} strokeWidth={6} />
      <line x1={116} y1={110} x2={300} y2={110} stroke={GOLD} strokeWidth={10} />
      <path d="M250 110 v26 M276 110 v18 M300 110 v30" stroke={GOLD} strokeWidth={8} />
    </g>
    <rect x={400} y={50} width={130} height={140} rx={16} fill="rgba(169,221,242,0.12)" stroke={wrong ? ROSE : ICE} strokeWidth={6} />
    <path d="M420 50 v-34 a45 45 0 0 1 90 0 v34" fill="none" stroke={wrong ? ROSE : ICE} strokeWidth={6}
      transform={!wrong && turn > 0.95 ? "translate(0 -22)" : undefined} />
    <circle cx={465} cy={115} r={12} fill={wrong ? ROSE : ICE} />
  </svg>
);

/** An anvil. */
const Anvil: React.FC = () => (
  <svg width={360} height={220} viewBox="0 0 360 220" style={{ overflow: "visible" }}>
    <path d="M20 40 L300 40 Q340 40 340 70 L250 90 L230 150 L270 200 L90 200 L130 150 L110 90 L40 80 Z"
      fill="rgba(140,150,170,0.25)" stroke={CHALK} strokeWidth={5} />
  </svg>
);

/** A brick wall; bricks fade with `gone` (0..1). */
const Bricks: React.FC<{ gone?: number }> = ({ gone = 0 }) => (
  <svg width={420} height={240} viewBox="0 0 420 240" style={{ overflow: "visible" }} opacity={1 - gone}>
    {Array.from({ length: 4 }).map((_, r) => Array.from({ length: 5 }).map((__, k) => (
      <rect key={`${r}-${k}`} x={(r % 2 ? 40 : 0) + k * 80} y={r * 58} width={74} height={50} rx={4}
        fill="rgba(255,143,163,0.12)" stroke={ROSE} strokeWidth={3} />
    )))}
  </svg>
);

/** A bridge between two banks; `gone` (0..1) fades the span. */
const Bridge: React.FC<{ gone?: number }> = ({ gone = 0 }) => (
  <svg width={700} height={220} viewBox="0 0 700 220" style={{ overflow: "visible" }}>
    <rect x={0} y={120} width={150} height={100} fill="rgba(241,236,224,0.1)" stroke={DIM} strokeWidth={4} />
    <rect x={550} y={120} width={150} height={100} fill="rgba(241,236,224,0.1)" stroke={DIM} strokeWidth={4} />
    <g opacity={1 - gone}>
      <path d="M150 120 Q350 20 550 120" fill="none" stroke={GOLD} strokeWidth={8} />
      <line x1={150} y1={120} x2={550} y2={120} stroke={GOLD} strokeWidth={6} />
    </g>
  </svg>
);

/** A tap with flowing water. */
const Tap: React.FC<{ flow?: number }> = ({ flow = 1 }) => {
  const { t } = useT();
  return (
    <svg width={340} height={420} viewBox="0 0 340 420" style={{ overflow: "visible" }}>
      <path d="M20 60 H200 Q240 60 240 100 V130" fill="none" stroke={CHALK} strokeWidth={14} strokeLinecap="round" />
      <rect x={90} y={20} width={40} height={30} rx={6} fill="none" stroke={CHALK} strokeWidth={6} />
      <g opacity={flow}>
        {Array.from({ length: 8 }).map((_, i) => {
          const y = 140 + ((t * 220 + i * 35) % 260);
          return <line key={i} x1={240} y1={y} x2={240} y2={y + 22} stroke={TEAL} strokeWidth={8} strokeLinecap="round" />;
        })}
      </g>
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  const out = 1 - ramp(t, aa, 0.5);
  const later = c("Nothing seems more certain than that one thing brings about another");
  return (
    <AbsoluteFill>
      <At x={620} y={420} o={ramp(t, 0.3, 0.6) * out}><Match lit={ramp(t, 1.0, 0.6)} /></At>
      <At x={1280} y={460} o={ramp(t, c("Leave the yeast out of the dough"), 0.6) * out}>
        <Loaf flat={ramp(t, c("Leave the yeast out of the dough") + 1.2, 1.2)} /></At>
      <At x={960} y={430} o={ramp(t, aa, 0.5) * (1 - ramp(t, later, 0.4))}><Glow color={CHALK} size={52} serif>After Anatta · Explorations</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5) * (1 - ramp(t, later, 0.4))}><Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
      <Items items={[
        ["Nothing seems more certain than that one thing brings about another", 960, 200, <Wd c={GOLD} s={42} serif>one thing brings about another</Wd>],
        ["Rice grows from rice seed, never from barley", 960, 380, <K c={GREEN}>rice from rice seed, never barley</K>],
        ["Medicine heals", 700, 520, <K c={TEAL}>medicine heals</K>],
        ["Actions bear fruit", 1220, 520, <K c={VIOLET}>actions bear fruit</K>],
      ]} />
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["But a quieter habit comes with this certainty", 960, 120, <Wd c={CHALK} s={38} serif>a quieter habit</Wd>],
        ["We picture the match as holding a power to light", 520, 280,
          <SK strikeAt={c("the doer falls away from everything")} c={GOLD} s={26}>a power to light, inside the match</SK>],
        ["We picture the match as holding a power to light", 1400, 280,
          <SK strikeAt={c("the doer falls away from everything") + 0.3} c={GREEN} s={26}>the sprout, inside the seed</SK>, { d: 1.2 }],
        ["and the angry word as holding the anger it causes", 960, 370,
          <SK strikeAt={c("the doer falls away from everything") + 0.6} c={ROSE} s={26}>the anger, inside the word</SK>],
        ["The cause becomes a little thing with a force in it", 960, 470, <Wd c={DIM} s={30}>a little thing with a force in it, handing it over</Wd>],
        ["A self is the doer behind the doing", 620, 600, <K c={VIOLET} s={28}>self: the doer behind the doing</K>],
        ["A causal power is the doer behind the causing", 1300, 600, <K c={GOLD} s={28}>power: the doer behind the causing</K>],
        ["the doer behind seeing falls away", 960, 700, <Wd c={TEAL} s={30}>anatta: the doer behind seeing falls away</Wd>],
        ["the doer falls away from everything", 960, 790, <Wd c={GOLD} s={36} serif>this insight: the doer falls away from everything</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ViewScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So this is my view, in one line", 960, 200, <Wd c={DIM} s={30}>in one line</Wd>],
      ["Causes work", 960, 340, <Wd c={TEAL} s={64} serif>Causes work.</Wd>],
      ["A power inside them that makes the effect is never found", 960, 480, <Wd c={GOLD} s={44} serif>A power inside them is never found.</Wd>],
      ["Both stand", 960, 620, <K c={CHALK} s={34}>both stand</K>],
    ]} />
  </AbsoluteFill>
);

const HalvesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const key = c("Take a key");
  const seed = c("Or take a seed");
  const kOut = 1 - ramp(t, seed, 0.5);
  const wrong = t > c("Put it in the wrong lock, and it opens nothing");
  return (
    <AbsoluteFill>
      <Items items={[
        ["First, causes work", 960, 140, <Wd c={TEAL} s={40} serif>1 · causes work</Wd>, { until: "Second, no power is found" }],
        ["Barley seeds grow barley, and fire burns", 960, 300, <K c={GREEN}>barley from barley · fire burns</K>, { until: "Second, no power is found" }],
        ["a finished thing being pushed across an edge", 960, 420,
          <SK strikeAt={c("a finished thing being pushed across an edge") + 1.6} c={DIM} s={28}>a finished thing pushed across an edge</SK>, { until: "Second, no power is found" }],
        ["Second, no power is found", 960, 140, <Wd c={GOLD} s={40} serif>2 · no power is found</Wd>],
      ]} />
      <At x={960} y={400} o={ramp(t, key, 0.5) * kOut}>
        <KeyLock turn={wrong ? 0.4 : ramp(t, c("It opens this lock and no other"), 1.2)} wrong={wrong} /></At>
      <Items items={[
        ["It opens this lock and no other", 960, 580, <Wd c={ICE} s={30}>this lock, and no other</Wd>, { until: "Put it in the wrong lock, and it opens nothing" }],
        ["Put it in the wrong lock, and it opens nothing", 960, 580, <Wd c={ROSE} s={30}>the wrong lock: nothing</Wd>, { until: "Or take a seed" }],
        ["So where is its power to open", 960, 680, <SK strikeAt={c("It shows itself only with its partner")} c={GOLD} s={28}>a power to open, in the key alone</SK>, { until: "Or take a seed" }],
        ["It shows itself only with its partner", 960, 770, <Wd c={TEAL} s={30}>it shows itself only with its partner</Wd>, { until: "Or take a seed" }],
        ["Or take a seed", 960, 360, <Wd c={GREEN} s={38} serif>"it grows because it has the power to grow"</Wd>],
        ["adds a name, not an explanation", 960, 480, <Wd c={DIM} s={32}>= it grows because it grows</Wd>],
        ["adds a name, not an explanation", 960, 580, <K c={GOLD}>"power" adds a name, not an explanation</K>, { d: 1 }],
      ]} />
    </AbsoluteFill>
  );
};

const SensesScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["is used in three ways", 960, 140, <Wd c={CHALK} s={38} serif>three senses of "cause"</Wd>],
        ["The first is a producer", 960, 300, <SK strikeAt={c("The second is a condition that lines up") - 0.4} c={GOLD} s={30}>1 · a producer, existing by itself</SK>],
        ["The second is a condition that lines up", 960, 420, <K c={TEAL}>2 · conditions that line up</K>],
        ["That one stands", 960, 500, <Wd c={TEAL} s={28}>it stands</Wd>],
        ["The third is a name", 960, 620, <K c={VIOLET}>3 · a name for what attention picks out</K>],
        ["Keeping the third in view", 960, 740, <Wd c={DIM} s={28}>so 2 does not slide back into 1</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const AnvilScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const anvil = c("would be fixed, like an anvil");
  const works = c("Things work, and what works is found empty");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now turn the usual worry round", 960, 130, <Wd c={CHALK} s={36} serif>turn the worry round</Wd>],
        ["People fear that if things are empty, nothing could work", 960, 220, <Wd c={DIM} s={28}>"if empty, nothing could work"</Wd>, { until: "Suppose this moment existed by itself" }],
        ["It is the other way", 960, 300, <Wd c={GOLD} s={34}>it is the other way</Wd>, { until: "Suppose this moment existed by itself" }],
        ["Suppose this moment existed by itself", 960, 220, <Wd c={CHALK} s={32}>a moment complete from its own side…</Wd>, { until: "Things work, and what works is found empty" }],
        ["Could it change", 520, 360, <SK strikeAt={c("Could it change") + 1} c={DIM} s={28}>change?</SK>, { until: "Things work, and what works is found empty" }],
        ["Could it combine with anything", 960, 360, <SK strikeAt={c("Could it combine with anything") + 1.2} c={DIM} s={28}>combine?</SK>, { until: "Things work, and what works is found empty" }],
        ["Could it act", 1400, 360, <SK strikeAt={c("Could it act") + 0.8} c={DIM} s={28}>act?</SK>, { until: "Things work, and what works is found empty" }],
      ]} />
      <At x={960} y={560} o={ramp(t, anvil, 0.6) * (1 - ramp(t, works, 0.5))}><Anvil /></At>
      <Items items={[
        ["would be fixed, like an anvil", 960, 730, <Wd c={DIM} s={28}>a world of own-natures: fixed like an anvil</Wd>, { until: "Things work, and what works is found empty" }],
        ["Things work, and what works is found empty", 960, 380, <Wd c={TEAL} s={46} serif>Things work, and what works is found empty.</Wd>],
        ["And emptiness itself causes nothing", 960, 520, <K c={GOLD}>emptiness causes nothing</K>],
      ]} />
    </AbsoluteFill>
  );
};

const FlameScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("But look at the flame");
  const bricks = c("the way a wall is built from bricks");
  const whole = c("What is there is the burning, vivid and whole");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the part I most want to make clear", 960, 120, <Wd c={DIM} s={30}>the part I most want to make clear</Wd>],
        ["Conditions are the appearing", 960, 200, <Wd c={GOLD} s={52} serif>Conditions are the appearing.</Wd>],
        ["Even after the power is gone, the mind keeps one last layer", 960, 300, <Wd c={DIM} s={28}>one last layer: conditions lined up underneath</Wd>, { until: "But look at the flame" }],
        ["Spark, fuel and air first", 580, 470, <K c={ROSE} s={26}>spark</K>, { until: "But look at the flame" }],
        ["Spark, fuel and air first", 960, 470, <K c={WARM} s={26}>fuel</K>, { d: 0.4, until: "But look at the flame" }],
        ["Spark, fuel and air first", 1340, 470, <K c={ICE} s={26}>air</K>, { d: 0.8, until: "But look at the flame" }],
        ["The flame afterwards, built out of them", 960, 640, <Wd c={DIM} s={28}>…then a flame, built out of them?</Wd>, { until: "But look at the flame" }],
      ]} />
      <At x={1360} y={520} o={ramp(t, bricks, 0.5)}>
        <div style={{ position: "relative" }}><Bricks gone={ramp(t, whole, 1.2) * 0.6} /><Strike at={whole} /></div></At>
      <At x={620} y={500} o={ramp(t, look, 0.6)}><Match lit={1} size={1.1} /></At>
      <Items items={[
        ["What is there is the burning, vivid and whole", 620, 740, <Wd c={GOLD} s={32}>the burning, vivid and whole</Wd>],
        ["that same appearing, divided up", 960, 820, <Wd c={TEAL} s={30}>spark, fuel, air: the same appearing, divided up</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LoafScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const frame = c("The parts appear as parts only in relation to a framework");
  const out = 1 - ramp(t, frame, 0.5);
  const cuts: [string, string, string, number, number][] = [
    ["A cook says it rose because of the yeast", "cook: yeast · warmth · time", GOLD, 480, 520],
    ["A chemist names the sugars", "chemist: sugars · enzymes · gas", TEAL, 1440, 520],
    ["A physicist names molecules", "physicist: molecules · energy · pressure", VIOLET, 480, 640],
    ["A baker in a cold kitchen names the draught", "baker: the draught by the window", ICE, 1440, 640],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["Who divides it", 960, 120, <Wd c={CHALK} s={36} serif>who divides it?</Wd>]]} />
      <At x={960} y={330} o={ramp(t, c("Think of a loaf of bread"), 0.6) * out}><Loaf /></At>
      {cuts.map(([cue, label, col, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * out}><K c={col} s={24}>{label}</K></At>
      ))}
      {cuts.map(([cue, , col, x, y]) => (
        <Flow key={cue + "f"} x1={960} y1={400} x2={x} y2={y - 30} color={col} p={ramp(t, c(cue), 0.8) * out} />
      ))}
      <Items items={[
        ["Each picks out different conditions, and each works", 960, 760, <Wd c={CHALK} s={30}>different conditions · each works</Wd>, { until: "The parts appear as parts only in relation to a framework" }],
        ["waiting to be read off", 960, 830, <SK strikeAt={c("waiting to be read off") + 0.8} c={DIM} s={24}>the true list of parts</SK>, { until: "The parts appear as parts only in relation to a framework" }],
        ["The parts appear as parts only in relation to a framework", 960, 220, <Wd c={GOLD} s={40} serif>parts appear only in relation to a framework</Wd>],
        ["works within a set of agreements, inside a setting", 960, 320, <K c={TEAL}>it works within agreements, inside a setting</K>],
        ["In a kitchen, leave out the yeast and the loaf is flat, every time", 600, 450, <K c={GREEN} s={26}>kitchen: no yeast, flat loaf, every time</K>],
        ["Take the cook's account to the scale of atoms", 1320, 450, <K c={ROSE} s={26}>the cook's account, at the scale of atoms</K>],
        ["and it fails", 1320, 530, <Wd c={ROSE} s={26}>Newton near the speed of light: fails</Wd>],
        ["enough to stake a life on", 960, 650, <Wd c={CHALK} s={30}>reliable enough to stake a life on</Wd>],
        ["not to parts that exist from their own side", 960, 740,
          <SK strikeAt={c("not to parts that exist from their own side") + 1.4} c={DIM} s={26}>parts that exist from their own side</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const ProduceScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Then see what this does to causation", 960, 130, <Wd c={CHALK} s={36} serif>what this does to causation</Wd>, { until: "Two wrong ways to hear this" }],
        ["said to produce itself", 960, 240,
          <SK strikeAt={c("The picture of production has nothing left to stand on")} c={GOLD} s={28}>"the conditions produce the appearing"</SK>, { until: "Two wrong ways to hear this" }],
        ["said to produce itself", 960, 330, <Wd c={DIM} s={26}>= the appearing, divided, producing itself</Wd>, { d: 0.4, until: "Two wrong ways to hear this" }],
        ["And nothing is lost", 960, 450, <Wd c={TEAL} s={40} serif>and nothing is lost</Wd>, { until: "Two wrong ways to hear this" }],
        ["The cook still bakes", 960, 550, <K c={GREEN}>the cook still bakes</K>, { until: "Two wrong ways to hear this" }],
        ["Two wrong ways to hear this", 960, 130, <Wd c={WARM} s={36} serif>two wrong hearings</Wd>, { d: 0.6 }],
        ["so the conditions are only concepts", 520, 320, <SK strikeAt={c("The framework works")} c={ROSE} s={26}>"only concepts, nothing happens"</SK>],
        ["The framework works", 520, 420, <Wd c={TEAL} s={28}>the framework works</Wd>],
        ["so the appearing is the true whole underneath", 1400, 320,
          <SK strikeAt={c("The whole and the parts are named together")} c={ROSE} s={26}>"the whole underneath, parts laid on it"</SK>],
        ["The whole and the parts are named together", 1400, 420, <Wd c={TEAL} s={28}>whole and parts, named together</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OrthodoxScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Let me check it against", 960, 110, <Wd c={CHALK} s={36} serif>is this orthodox?</Wd>],
        ["opens with four corners", 960, 200, <Wd c={DIM} s={26}>MMK 1.1</Wd>, { until: "In his twentieth chapter" }],
        ["Not from itself, not from another, not from both", 960, 270, <Wd c={GOLD} s={30}>not from itself · another · both · without a cause</Wd>, { until: "In his twentieth chapter" }],
        ["all four answers are refused", 960, 350, <K c={TEAL} s={26}>all four refused, no fifth put in their place</K>, { until: "In his twentieth chapter" }],
        ["a producing activity inside the cause", 960, 440, <SK strikeAt={c("a producing activity inside the cause") + 1.4} c={GOLD} s={26}>a producing activity inside the cause</SK>, { until: "In his twentieth chapter" }],
        ["A seed in a dry jar is just a seed", 960, 530, <K c={GREEN} s={26}>a seed in a dry jar is just a seed</K>, { until: "In his twentieth chapter" }],
        ["In his twentieth chapter", 960, 200, <Wd c={DIM} s={26}>MMK 20: the handover</Wd>, { until: "One caution here" }],
        ["the cause would have two selves", 560, 320, <SK strikeAt={c("the effect has no cause") - 0.3} c={GOLD} s={24}>gives its power, then ceases?</SK>, { until: "One caution here" }],
        ["the effect has no cause", 1360, 320, <SK strikeAt={c("So nothing passes from cause to effect") - 0.3} c={GOLD} s={24}>ceases without giving?</SK>, { until: "One caution here" }],
        ["So nothing passes from cause to effect", 960, 460, <Wd c={TEAL} s={38} serif>nothing passes from cause to effect</Wd>, { until: "One caution here" }],
        ["One caution here", 960, 200, <Wd c={WARM} s={34} serif>one caution</Wd>, { until: "Someone who plants a seed says" }],
        ["they are named together, as long and short are", 960, 320, <K c={VIOLET}>named together, like long and short</K>, { until: "Someone who plants a seed says" }],
        ["I do not mean they happen at the same moment", 960, 420, <SK strikeAt={c("the seed comes before the sprout")} c={DIM} s={26}>at the same moment</SK>, { until: "Someone who plants a seed says" }],
        ["the seed comes before the sprout", 960, 520, <K c={GREEN}>the seed comes before the sprout</K>, { until: "Someone who plants a seed says" }],
        ["Someone who plants a seed says", 960, 300, <Wd c={CHALK} s={40} serif>"I planted this tree."</Wd>],
        ["What the world uses is mere arising", 960, 440, <Wd c={TEAL} s={32}>mere arising, not production from its own side</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CapacityScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const key = c("The key opens this lock");
  const hume = c("And this is not the philosopher");
  return (
    <AbsoluteFill>
      <Items items={[
        ["adds a careful point", 960, 120, <Wd c={CHALK} s={34} serif>a functioning thing</Wd>],
        ["is able to perform a function", 960, 210, <Wd c={GOLD} s={36} serif>"able to perform a function"</Wd>, { until: "And this is not the philosopher" }],
        ["So he keeps a capacity", 600, 330, <K c={TEAL} s={26}>a capacity, in the world's terms</K>, { until: "And this is not the philosopher" }],
        ["What he refuses is a capacity that exists from its own side", 1320, 330,
          <SK strikeAt={c("What he refuses is a capacity that exists from its own side") + 1.6} c={GOLD} s={26}>a capacity from its own side</SK>, { until: "And this is not the philosopher" }],
        ["Some of my older lines leaned towards", 960, 430, <SK strikeAt={c("No power is found from its own side") - 0.3} c={DIM} s={24}>no capacity, only patterns</SK>, { until: "And this is not the philosopher" }],
        ["No power is found from its own side", 960, 520, <Wd c={TEAL} s={32}>no power from its own side</Wd>, { until: "And this is not the philosopher" }],
        ["The capacity, named in dependence, works", 960, 590, <Wd c={GREEN} s={32}>the capacity, named in dependence, works</Wd>, { until: "And this is not the philosopher" }],
      ]} />
      <At x={960} y={720} o={ramp(t, key, 0.5) * (1 - ramp(t, hume, 0.4))} s={0.6}><KeyLock turn={ramp(t, key + 0.2, 1)} /></At>
      <Items items={[
        ["And this is not the philosopher", 960, 260, <Wd c={CHALK} s={36} serif>not Hume</Wd>],
        ["And this is not the philosopher", 960, 380, <Wd c={DIM} s={28}>Hume: power dropped, separate events kept, linked by habit</Wd>, { d: 1 }],
        ["For me there were never two separate things that needed a link", 960, 500, <K c={TEAL}>never two separate things needing a link</K>],
      ]} />
    </AbsoluteFill>
  );
};

const KarmaScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const bridge = c("What I refuse is the mere I as a bridge");
  const goes = c("Only the bridge goes");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the hardest part", 960, 110, <Wd c={CHALK} s={36} serif>karma across time</Wd>],
        ["An action ceases", 560, 230, <K c={VIOLET} s={26}>an action ceases</K>],
        ["How does its fruit come years later", 1360, 230, <K c={GREEN} s={26}>the fruit, years later</K>],
        ["is itself a functioning thing", 960, 320, <Wd c={DIM} s={26}>its having ceased: a functioning thing</Wd>, { until: "I keep the mere I as the person the world speaks of" }],
        ["And its imprints are said to rest on the mere I", 960, 390, <Wd c={DIM} s={26}>imprints resting on the mere I</Wd>, { until: "I keep the mere I as the person the world speaks of" }],
        ["I keep the mere I as the person the world speaks of", 960, 320, <K c={TEAL}>the mere I: the person the world speaks of</K>],
        ["I did it, and I will meet the result", 960, 400, <Wd c={TEAL} s={28}>"I did it, and I will meet the result"</Wd>],
      ]} />
      <At x={960} y={600} o={ramp(t, bridge, 0.6)}><Bridge gone={ramp(t, goes, 1.2)} /></At>
      <Items items={[
        ["What I refuse is the mere I as a bridge", 960, 500, <SK strikeAt={goes} c={GOLD} s={26}>the mere I as a bridge for karma</SK>],
        ["rejects a mind that knows itself", 960, 760, <Wd c={DIM} s={26}>a mind that knows itself: posited to fill a gap</Wd>, { until: "It fills the gap", ud: 1 }],
        ["It was posited to explain memory", 960, 820, <Wd c={DIM} s={24}>(to explain memory)</Wd>, { until: "It fills the gap", ud: 1 }],
        ["it does the same job", 960, 760, <Wd c={ROSE} s={28}>the bridge does the same job: it fills the gap</Wd>, { d: 2, until: "Only the bridge goes" }],
        ["so the person stays", 600, 820, <K c={TEAL} s={24}>the person stays</K>],
        ["Only the bridge goes", 1320, 820, <K c={GOLD} s={24}>only the bridge goes</K>],
      ]} />
    </AbsoluteFill>
  );
};

const GapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const gap = c("Something seems to be missing between the act and its fruit");
  const none = c("with nothing left to link, nothing is missing");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So I keep the phrase", 960, 140, <Wd c={GOLD} s={48} serif>neither carried nor cut</Wd>],
        ["Nothing is carried across, and nothing is cut off", 960, 230, <Wd c={DIM} s={28}>nothing carried across · nothing cut off</Wd>],
        ["It is meant to make you face something", 960, 310, <Wd c={CHALK} s={30}>not a theory: something to face</Wd>, { until: "It leaves the mind uneasy" }],
      ]} />
      <At x={960} y={420} o={ramp(t, gap, 0.5) * (1 - ramp(t, none, 0.8))}>
        <svg width={760} height={120} viewBox="0 0 760 120" style={{ overflow: "visible" }}>
          <rect x={0} y={30} width={220} height={60} rx={12} fill="none" stroke={VIOLET} strokeWidth={5} />
          <rect x={540} y={30} width={220} height={60} rx={12} fill="none" stroke={GREEN} strokeWidth={5} />
          <text x={110} y={70} fill={VIOLET} fontSize={28} textAnchor="middle" fontFamily="SourceSans">act</text>
          <text x={650} y={70} fill={GREEN} fontSize={28} textAnchor="middle" fontFamily="SourceSans">fruit</text>
          <text x={380} y={72} fill={ROSE} fontSize={40} textAnchor="middle" fontFamily="SourceSans">?</text>
        </svg>
      </At>
      <Items items={[
        ["It leaves the mind uneasy", 960, 310, <Wd c={ROSE} s={30}>the mind is uneasy</Wd>, { until: "Do not answer that feeling" }],
        ["Do not answer that feeling", 960, 540, <K c={CHALK} s={26}>do not answer the feeling</K>, { until: "with nothing left to link, nothing is missing" }],
        ["Look at it, again and again", 960, 610, <Wd c={DIM} s={26}>look at it, again and again</Wd>, { until: "with nothing left to link, nothing is missing" }],
        ["The gap is felt only because the habit", 960, 690, <Wd c={WARM} s={28}>felt only because the inherent habit needs something there</Wd>, { until: "with nothing left to link, nothing is missing" }],
        ["Analysis shows, every time, that no bridge can be found", 600, 770, <K c={TEAL} s={22}>analysis: no bridge found</K>, { until: "with nothing left to link, nothing is missing" }],
        ["experience never meets one", 1320, 770, <K c={TEAL} s={22}>experience: never meets one</K>, { until: "with nothing left to link, nothing is missing" }],
        ["And still the feeling returns", 960, 310, <Wd c={ROSE} s={30}>still the feeling returns</Wd>, { until: "with nothing left to link, nothing is missing" }],
        ["how deep the habit of confused seeing runs", 960, 830, <Wd c={GOLD} s={28}>a deep habit of confused seeing · no power to blind is found</Wd>, { until: "with nothing left to link, nothing is missing" }],
        ["no bridge, and no break either", 960, 310, <Wd c={CHALK} s={30}>no bridge, and no break</Wd>, { until: "with nothing left to link, nothing is missing", ud: 1 }],
        ["with nothing left to link, nothing is missing", 960, 460, <Wd c={TEAL} s={48} serif>Nothing left to link. Nothing missing.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const part = c("Here I part from some readings");
  const out = 1 - ramp(t, part, 0.5);
  return (
    <AbsoluteFill>
      {[0, 1, 2].map((k) => (
        <Ring key={k} x={960} y={420} p={ramp(t, c("The display is complete and present as it is"), 0.5) * ((t * 0.4 + k / 3) % 1) * out} r0={80} r1={360} color={GOLD} width={2} />
      ))}
      <Items items={[
        ["That is where you can glimpse", 960, 140, <Wd c={CHALK} s={38} serif>beyond cause and effect</Wd>, { until: "Here I part from some readings" }],
        ["I do not read it as a place where causes stop working", 960, 240, <SK strikeAt={c("the end of the demand for a producer")} c={DIM} s={26}>a place where causes stop working</SK>, { until: "Here I part from some readings" }],
        ["the end of the demand for a producer", 960, 330, <K c={TEAL}>the demand for a producer, and a final why, ends</K>, { until: "Here I part from some readings" }],
        ["The display is complete and present as it is", 960, 450, <Wd c={GOLD} s={40} serif>display: complete, present as it is</Wd>, { until: "Here I part from some readings" }],
        ["Nothing higher, nothing lower", 960, 550, <Wd c={CHALK} s={32}>nothing higher · nothing lower</Wd>, { until: "Here I part from some readings" }],
        ["Here I part from some readings", 960, 130, <Wd c={WARM} s={36} serif>where I part from some readings</Wd>],
        ["describe spontaneous presence as the presence of the ground", 520, 260, <K c={DIM} s={22}>many texts: the ground's presence, not made by conditions</K>],
        ["I read spontaneous presence as dependent arising itself", 1400, 260, <K c={TEAL} s={22}>I read: dependent arising itself, without fixing</K>],
        ["Not uncaused, and not a source behind things", 1400, 340, <Wd c={TEAL} s={24}>not uncaused · not a source behind</Wd>],
        ["That is my own synthesis", 960, 430, <Wd c={CHALK} s={30}>my own synthesis</Wd>],
        ["who holds that appearance and emptiness are one", 960, 520, <K c={VIOLET} s={24}>Mipham: appearance and emptiness are one</K>],
        ["He keeps a mind that knows itself", 560, 620, <Wd c={DIM} s={24}>he keeps self-knowing, in the world's terms</Wd>],
        ["I am stricter", 1360, 620, <Wd c={GOLD} s={26}>I am stricter on bridges</Wd>],
        ["It is the clarity of knowing, not lit by anything else", 960, 720, <K c={TEAL} s={24}>his self-knowing: clarity not lit by anything else</K>],
        ["that is very near what I mean when I say clarity is never missing", 960, 810, <Wd c={GOLD} s={28}>very near: clarity is never missing</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SeeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const angry = c("Or take angry words");
  const when = c("When this is seen");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So how is this seen through", 960, 120, <Wd c={CHALK} s={38} serif>how it is seen through</Wd>],
        ["Not by a better theory of causes", 960, 210, <SK strikeAt={c("By looking for the power and not finding it")} c={DIM} s={26}>a better theory of causes</SK>, { until: "Or take angry words" }],
        ["By looking for the power and not finding it", 960, 300, <K c={TEAL}>look for the power; it is not found</K>, { until: "Or take angry words" }],
        ["and then seeing that nothing was lost", 960, 380, <Wd c={GOLD} s={30}>and nothing was lost</Wd>, { until: "Or take angry words" }],
      ]} />
      <At x={960} y={560} o={ramp(t, c("At no moment is a finished flame handed across") - 1.5, 0.5) * (1 - ramp(t, angry, 0.5))}><Match lit={1} /></At>
      <Items items={[
        ["At no moment is a finished flame handed across", 960, 800, <Wd c={DIM} s={26}>no finished flame handed across</Wd>, { until: "Or take angry words" }],
        ["Your words made me angry", 960, 220, <Wd c={ROSE} s={38} serif>"Your words made me angry."</Wd>, { until: "When this is seen" }],
        ["The anger arose with the words", 960, 330, <Wd c={DIM} s={26}>words · hearing · an old hurt · a tired evening</Wd>, { until: "When this is seen" }],
        ["No power to anger sits inside the words", 960, 420, <SK strikeAt={c("No power to anger sits inside the words") + 1.4} c={ROSE} s={26}>a power to anger, inside the words</SK>, { until: "When this is seen" }],
        ["Yet the words can be apologised for", 960, 510, <K c={TEAL}>yet the words can be apologised for</K>, { until: "When this is seen" }],
        ["Suffering is kept going by conditions that can change", 960, 620, <Wd c={GOLD} s={30}>suffering runs on conditions that can change</Wd>, { until: "When this is seen" }],
        ["When this is seen", 960, 220, <Wd c={CHALK} s={36} serif>when this is seen</Wd>],
        ["Conditions matter more, not less", 960, 340, <K c={TEAL}>conditions matter more, not less</K>],
        ["Mind and matter lose their weight", 960, 460, <Wd c={CHALK} s={32}>mind and matter lose their weight</Wd>],
        ["light, magical and plastic", 960, 560, <Wd c={GOLD} s={44} serif>light, magical and plastic</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tap = c("Turn on a tap");
  return (
    <AbsoluteFill>
      <Items items={[["Turn on a tap", 960, 110, <Wd c={CHALK} s={36} serif>try it</Wd>]]} />
      <At x={760} y={460} o={ramp(t, tap, 0.6)}><Tap flow={ramp(t, tap + 0.8, 0.8)} /></At>
      <Items items={[
        ["Look for the moment the tap makes the water flow", 1320, 330, <SK strikeAt={c("Neither is found")} c={DIM} s={24}>the moment the tap makes it flow</SK>],
        ["Then look for the flowing apart from the tap", 1320, 430, <SK strikeAt={c("Neither is found") + 0.3} c={DIM} s={24}>the flowing apart from tap, pipe, pressure, hand</SK>],
        ["Neither is found", 1320, 530, <Wd c={GOLD} s={32}>neither is found</Wd>],
      ]} />
      <At x={960} y={760}><Reveal text="And the water still flows." at={c("And the water still flows")} size={54} color={TEAL} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Strike a match", "ember", <OpenScene />],
    ["But a quieter habit comes with this certainty", "doubt", <HabitScene />],
    ["So this is my view, in one line", "whole", <ViewScene />],
    ["First, causes work", "dusk", <HalvesScene />],
    ["is used in three ways", "search", <SensesScene />],
    ["Now turn the usual worry round", "deep", <AnvilScene />],
    ["Now the part I most want to make clear", "ember", <FlameScene />],
    ["Who divides it", "whole", <LoafScene />],
    ["Then see what this does to causation", "search", <ProduceScene />],
    ["Let me check it against", "deep", <OrthodoxScene />],
    ["adds a careful point", "dusk", <CapacityScene />],
    ["Now the hardest part", "doubt", <KarmaScene />],
    ["So I keep the phrase", "night", <GapScene />],
    ["That is where you can glimpse", "whole", <BeyondScene />],
    ["So how is this seen through", "jade", <SeeScene />],
    ["Turn on a tap", "whole", <TryScene />],
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
