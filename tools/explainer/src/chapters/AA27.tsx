// After Anatta · Dependent Arising: If You Think You Understand, You Don't. Part 5 of 6: One Taste, Many Faces
// (EBooks Bonus Articles/dependent-arising-and-designation, sections 12 to 16 and Try it; notebooklm-parts/part-5-one-taste-many-faces).
// Arc: Part 5 of 6, recap -> dependent arising is spontaneous presence; three descriptions and their guards, three angles on
// one face -> none higher (summer, winter, nothing crosses); anatta as a seal; freedom from elaborations not a fourth; adds
// nothing to the negation -> the descriptions keep each other honest; two questions (how: conditions; what: empty) -> many
// faces (the face model, isomorphism, a death) -> four things keep recognition honest -> the six tastes round one sound
// (vividly appearing yet unfindable, centerless, mutual, seamless, effortless, intimate, open, dissolving) -> not states to keep -> guards ->
// the doer back in a bigger coat -> the masters, master by master -> "not made by causes" read as "unborn by nature" ->
// where I part -> try it (a sound, its conditions, cover one ear) -> keep looking; Part 6 next.
// Stance: a doer, a hearer, a recogniser, a web, a ground, a source, a carrier, an essence and a keeper are drawn only to be
// struck. The sound and its conditions stay drawn and vivid. Nothing merges into one; the six tastes are not states.
// Cue phrases avoid the respelled names (Nagarjuna, Candrakirti, Tsongkhapa, Dzogchen, Mipham, Longchenpa, Gorampa, Huayan).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "This is Part", "So far I have asked", "Now the taste itself",
  // three descriptions
  "I say dependent arising is spontaneous presence", "They are not two things",
  "Dependent arising is how the taste is described when we analyse",
  "Spontaneous presence is how it is described when the habit of fixing stops", "And there is a third description",
  "Three descriptions, one taste", "Anatta says no one is behind it", "it is not a blank",
  "Dependent arising says nothing in it stands on its own", "it is not a web, and not a ground",
  "Spontaneous presence says nothing is missing", "It is not uncaused", "And it is not a source",
  "They are three angles on one face", "none of them is the taste",
  // none higher
  "None is higher", "Nor does one turn into another", "any more than we say summer becomes winter", "Nothing crosses",
  "Anatta needs one note here", "The observer has disappeared, but the world has not", "But anatta is a seal, not a stage",
  "all dharmas are without self", "Freedom from all elaborations is not a fourth description",
  "And spontaneous presence adds nothing to the negation", "it would be taken apart too",
  // honest
  "The descriptions keep each other honest", "coming from nowhere, or from a hidden ground",
  "a machine of causes, working in the dark", "Clarity is never absent from what appears", "Keep two questions apart",
  "How does this appearing come about", "Through causes and conditions, always", "What is its nature",
  "Beyond cause and effect", "It never cancels the first",
  // faces
  "Now the many faces", "I recognise its many faces", "It is much like an AI model",
  "It knows a face across light, angle and age", "what mathematicians call an isomorphism", "it is recognised by its shape",
  "A death, for instance", "But no one is found who goes", "And the grief, vivid as it is", "The shape is the same",
  // four
  "Four things keep this recognition honest", "First, name the shape", "Second, no one is doing the recognising",
  "Familiarity is a condition among conditions", "Third, the shape does not carry across", "Same form, not same stuff",
  "Fourth, recognition can misfire", "The I AM presence", "The test is the shape", "Here the logic keeps the recognition honest",
  // six tastes
  "So what does the view taste like", "in eight ways", "In Tibetan, the first has a phrase of its own",
  "Unfindable does not dim it", "Centerless. No doer stands behind seeing", "The sound is not heard from a point",
  "Mutual. Each appears only with the others", "So this is not a web behind things", "Seamless. No gap opens",
  "Sight stays sight", "Effortless. Nothing produces the appearing", "Maintenance is the split",
  "Intimate. No distance stands", "Nothing lights it",
  "Open. Nothing closes the appearing in", "It is only that nothing is fixed",
  "Dissolving. Each appearing spends itself", "But it does not dissolve into anything",
  // not states
  "These eight describe the appearing, conventionally", "They do not describe emptiness as something found",
  "a negation and nothing more", "And they are not eight states to reach or to keep", "the doer comes back to chase it",
  // guards
  "That brings the guards", "Not only concepts", "Harm is harm", "Not uncaused. Every appearing", "Not a web, not a ground",
  "Not a stage to leave behind", "Not a state to keep",
  // the doer comes back
  "every mistake on this path has the same shape", "After anatta, a vast Awareness", "In total exertion, a cosmic whole",
  "In dependent arising, a web", "In spontaneous presence, a source", "In the marketplace, the helper", "Or the bystander",
  "And no licence", "And in practice, a state to keep up", "None of this is kept", "It is recognised",
  // masters
  "Do I depart from the great masters", "The Buddha: when this is, that is",
  "dependent arising is emptiness, a designation in dependence", "the chariot, found neither among its parts",
  "dependence on causes, on parts", "the king of reasons", "appearance and emptiness in union",
  // unborn by nature
  "says spontaneous presence is not made by causes and conditions", "Here the equation I make most often",
  "praises dependent arising as without arising", "whatever is born from conditions is unborn", "means unborn by nature",
  "Appearing through conditions, yet nothing produced", "I part only from a reading", "ground as empty",
  // where I part
  "Where I do part, I say so", "on three points", "What anatta means", "The order of the path",
  "A difference of route, not of content", "And the bridge across time", "and modern interbeing",
  "There is no net behind things", "And on its status", "the antidote by which ignorance is undone",
  "What I add is a few words", "These are my readings", "All views and understanding here are my own",
  // try it
  "Try it. Listen to a sound nearby", "Look for the hearer behind the hearing", "Then look at the hearing itself",
  "Find its conditions", "It is their meeting", "Change one condition", "It is a different appearing",
  "that joins the conditions", "Then stop looking", "Do not try to keep this", "Later in the day", "Recognise the face",
  "If you think you understand, keep looking", "The same taste has many faces", "There is one more part",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
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
/** A chip struck through at `strikeAt`: only for what is never found. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
/** Sound waves. */
const Waves: React.FC<{ p: number; color?: string; scale?: number }> = ({ p, color = TEAL, scale = 1 }) => {
  const { t } = useT();
  return (
    <svg width={300 * scale} height={240 * scale} viewBox="0 0 300 240" style={{ overflow: "visible" }} opacity={p}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <path key={i} d={`M${40 + k * 180} 40 Q${90 + k * 200} 120 ${40 + k * 180} 200`} fill="none" stroke={color} strokeWidth={5}
          opacity={1 - k} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />;
      })}
    </svg>
  );
};
/** A simple face: the shape recognised. */
const Face: React.FC<{ c: string; tilt?: number; dim?: number }> = ({ c, tilt = 0, dim = 1 }) => (
  <svg width={140} height={170} viewBox="0 0 140 170" style={{ overflow: "visible", transform: `rotate(${tilt}deg)`, opacity: dim }}>
    <ellipse cx={70} cy={85} rx={55} ry={72} fill="none" stroke={c} strokeWidth={5} style={{ filter: `drop-shadow(0 0 8px ${c})` }} />
    <circle cx={50} cy={70} r={6} fill={c} /><circle cx={90} cy={70} r={6} fill={c} />
    <path d="M45 115 q25 18 50 0" fill="none" stroke={c} strokeWidth={5} />
  </svg>
);
/** An ear. */
const Ear: React.FC<{ c?: string; covered?: number }> = ({ c = ICE, covered = 0 }) => (
  <svg width={130} height={180} viewBox="0 0 130 180" style={{ overflow: "visible" }}>
    <path d="M30 120 C10 60 40 10 80 15 C120 20 125 70 100 95 C85 110 85 130 75 150 C65 170 40 165 38 145"
      fill="none" stroke={c} strokeWidth={6} style={{ filter: `drop-shadow(0 0 8px ${c})` }} />
    <path d="M60 110 C50 80 60 50 82 50 C100 52 102 75 90 85" fill="none" stroke={c} strokeWidth={5} />
    <rect x={0} y={20} width={130} height={150} rx={50} fill={WARM} opacity={0.5 * covered} />
  </svg>
);
/** A box on the board. */
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; guard?: React.ReactNode }> = ({ c, w = 460, title, sub, guard }) => (
  <div style={{ width: w, padding: "26px 24px", borderRadius: 20, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)", boxShadow: `0 0 34px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 12 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
    {guard ? <div style={{ marginTop: 14 }}>{guard}</div> : null}
  </div>
);
/** One row of the masters' table: who, how they define it, where I stand. */
const Row: React.FC<{ who: string; how: string; me: string; c?: string }> = ({ who, how, me, c = TEAL }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 28, width: 1640 }}>
    <div style={{ width: 300, textAlign: "right" }}><Wd c={GOLD} s={32} serif>{who}</Wd></div>
    <div style={{ width: 900, textAlign: "left" }}><Wd c={CHALK} s={26}>{how}</Wd></div>
    <div style={{ width: 380, textAlign: "left" }}><K c={c} s={24}>{me}</K></div>
  </div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const recap = c("So far I have asked");
  const parts = ["1 · if you think you understand", "2 · what it is", "3 · what it is for", "4 · the taste"];
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, 0.3, 0.8)}><Wd c={DIM} s={28}>Dependent Arising: If You Think You Understand, You Don't</Wd></At>
      <At x={960} y={300} o={ramp(t, c("This is Part"), 0.6)}><Wd c={GOLD} s={36} serif>Part 5 of 6</Wd></At>
      <At x={960} y={400}><Reveal text="One Taste, Many Faces" at={c("This is Part") + 0.6} size={84} speed={0.035} /></At>
      {parts.map((p, i) => (
        <At key={p} x={300 + i * 440} y={580} o={ramp(t, recap + 0.9 * i, 0.5)}><K c={i === 3 ? TEAL : DIM} s={24}>{p}</K></At>
      ))}
      <Items items={[["Now the taste itself", 960, 720, <Wd c={TEAL} s={34} serif>now: the taste, and how it is described</Wd>]]} />
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const three = c("Three descriptions, one taste");
  const first = 1 - ramp(t, three, 0.5);
  const boxes: [string, string, number, string, string, string, string][] = [
    ["Anatta says no one is behind it", "it is not a blank", 420, GOLD, "anatta", "no one is behind it", "not a blank; nobody disappears"],
    ["Dependent arising says nothing in it stands on its own", "it is not a web, and not a ground", 960, TEAL, "dependent arising", "nothing stands on its own", "not a web, not a ground"],
    ["Spontaneous presence says nothing is missing", "It is not uncaused", 1500, VIOLET, "spontaneous presence", "nothing missing, nothing making it", "not uncaused · not a source"],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["I say dependent arising is spontaneous presence", 960, 150, <div style={{ display: "flex", gap: 30, alignItems: "center" }}><K c={TEAL} s={32}>dependent arising</K><Wd c={GOLD} s={50} serif>=</Wd><K c={VIOLET} s={32}>spontaneous presence</K></div>, { until: "Three descriptions, one taste" }],
        ["They are not two things", 960, 260, <Wd c={CHALK} s={30}>not two things</Wd>, { until: "Three descriptions, one taste" }],
        ["Dependent arising is how the taste is described when we analyse", 960, 380, <Wd c={TEAL} s={30}>analysed: these conditions, met together, designated, working</Wd>, { until: "Three descriptions, one taste" }],
        ["Spontaneous presence is how it is described when the habit of fixing stops", 960, 480, <Wd c={VIOLET} s={30}>the habit of fixing stops: complete, effortless, nothing behind it</Wd>, { until: "Three descriptions, one taste" }],
        ["And there is a third description", 960, 600, <Wd c={GOLD} s={32}>and a third: anatta</Wd>, { until: "Three descriptions, one taste" }],
      ]} />
      <At x={960} y={110} o={ramp(t, three, 0.5)}><Wd c={GOLD} s={44} serif>three descriptions, one taste</Wd></At>
      {boxes.map(([cue, gcue, x, col, title, sub, guard]) => (
        <At key={title} x={x} y={400} o={ramp(t, c(cue), 0.5) * (1 - first * 0)}>
          <Box c={col} w={470} title={title} sub={sub} guard={<div style={{ opacity: ramp(t, c(gcue), 0.5) }}><K c={DIM} s={22}>{guard}</K></div>} />
        </At>
      ))}
      <Items items={[
        ["They are three angles on one face", 960, 640, <Wd c={CHALK} s={36} serif>three angles on one face</Wd>],
        ["none of them is the taste", 960, 730, <Wd c={DIM} s={28}>each a whole description; none of them is the taste</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const HigherScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const note = c("Anatta needs one note here");
  const first = 1 - ramp(t, note, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["None is higher", 960, 130, <Wd c={CHALK} s={40} serif>none is higher; not stages</Wd>, { until: "Anatta needs one note here" }],
        ["Nor does one turn into another", 960, 250, <Wd c={DIM} s={28}>nor does one turn into another</Wd>, { until: "Anatta needs one note here" }],
        ["any more than we say summer becomes winter", 960, 380, <div style={{ display: "flex", gap: 80 }}><K c={WARM} s={30}>summer</K><K c={ICE} s={30}>winter</K></div>, { until: "Anatta needs one note here" }],
        ["Nothing crosses", 960, 490, <SK c={DIM} s={26} strikeAt={c("Nothing crosses") + 0.6}>a traveller crossing from one to the other</SK>, { d: -1.5, until: "Anatta needs one note here" }],
      ]} />
      <At x={960} y={600} o={ramp(t, c("Nothing crosses") + 0.8, 0.5) * first}><Wd c={GOLD} s={36} serif>nothing crosses</Wd></At>
      <Items items={[
        ["Anatta needs one note here", 960, 120, <Wd c={GOLD} s={40} serif>anatta: a seal, not a stage</Wd>],
        ["The observer has disappeared, but the world has not", 960, 230, <K c={DIM} s={26}>first insight: no observer, but the world still solid</K>],
        ["all dharmas are without self", 960, 330, <K c={GOLD} s={28}>the seal: all dharmas without self · seen, cause, condition</K>],
        ["Freedom from all elaborations is not a fourth description", 960, 450, <Wd c={CHALK} s={30}>freedom from all elaborations: not a fourth description</Wd>],
        ["Freedom from all elaborations is not a fourth description", 960, 520, <Wd c={DIM} s={26}>only that nothing reified is added</Wd>, { d: 2 }],
        ["And spontaneous presence adds nothing to the negation", 960, 640, <Wd c={VIOLET} s={30}>spontaneous presence adds nothing to the negation</Wd>],
        ["it would be taken apart too", 960, 740, <SK c={DIM} s={26} strikeAt={c("it would be taken apart too") + 0.6}>a presence with a nature of its own</SK>, { d: -2.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const HonestScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("Keep two questions apart");
  const first = 1 - ramp(t, two, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The descriptions keep each other honest", 960, 120, <Wd c={CHALK} s={38} serif>they keep each other honest</Wd>, { until: "Keep two questions apart" }],
      ]} />
      <At x={540} y={300} o={ramp(t, c("coming from nowhere, or from a hidden ground") - 1.5, 0.5) * first}><K c={TEAL} s={26}>dependent arising guards</K></At>
      <At x={540} y={400} o={ramp(t, c("coming from nowhere, or from a hidden ground"), 0.5) * first}><SK c={DIM} s={26} strikeAt={c("coming from nowhere, or from a hidden ground") + 1.6}>from nowhere · a hidden ground</SK></At>
      <At x={1380} y={300} o={ramp(t, c("a machine of causes, working in the dark") - 1.5, 0.5) * first}><K c={VIOLET} s={26}>spontaneous presence guards</K></At>
      <At x={1380} y={400} o={ramp(t, c("a machine of causes, working in the dark"), 0.5) * first}><SK c={DIM} s={26} strikeAt={c("a machine of causes, working in the dark") + 1.8}>a machine in the dark</SK></At>
      <Items items={[
        ["Clarity is never absent from what appears", 960, 580, <Wd c={GOLD} s={34} serif>clarity is never absent from what appears</Wd>, { until: "Keep two questions apart" }],
        ["Keep two questions apart", 960, 120, <Wd c={GOLD} s={40} serif>two questions, kept apart</Wd>],
        ["How does this appearing come about", 560, 300, <Wd c={CHALK} s={32}>how does it come about?</Wd>],
        ["Through causes and conditions, always", 560, 400, <K c={TEAL} s={28}>through conditions, always</K>],
        ["What is its nature", 1360, 300, <Wd c={CHALK} s={32}>what is its nature?</Wd>],
        ["What is its nature", 1360, 400, <K c={VIOLET} s={28}>empty: not produced</K>, { d: 1 }],
        ["Beyond cause and effect", 1360, 520, <Wd c={DIM} s={26}>"beyond cause and effect" answers this one</Wd>],
        ["It never cancels the first", 560, 520, <Wd c={TEAL} s={26}>and never cancels this one</Wd>],
        ["It never cancels the first", 960, 680, <Wd c={GOLD} s={30}>beyond intrinsic cause, never beyond dependent arising</Wd>, { d: 2 }],
      ]} />
    </AbsoluteFill>
  );
};

const FacesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const model = c("It is much like an AI model");
  const death = c("A death, for instance");
  const faces = ["a sound", "a thought", "anger", "a cause", "time", "a death", "the dishes"];
  const first = 1 - ramp(t, model, 0.5);
  const second = 1 - ramp(t, death, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["Now the many faces", 960, 110, <Wd c={GOLD} s={42} serif>many faces</Wd>]]} />
      <At x={960} y={420} o={ramp(t, c("I recognise its many faces") - 0.3, 0.6) * first}>
        <div style={{ width: 230, height: 230, borderRadius: 115, border: `3px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${GOLD}66` }}>
          <Wd c={GOLD} s={34} serif>one taste</Wd>
        </div>
      </At>
      {faces.map((f, i) => {
        const a = (i / faces.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <At key={f} x={960 + 420 * Math.cos(a)} y={430 + 235 * Math.sin(a)} o={ramp(t, c("I recognise its many faces") + 1 + 0.5 * i, 0.5) * first}>
            <K c={TEAL} s={26}>{f}</K>
          </At>
        );
      })}
      {[0, 1, 2].map((i) => (
        <At key={i} x={600 + i * 360} y={330} o={ramp(t, c("It knows a face across light, angle and age") + 0.5 * i, 0.5) * second}>
          <Face c={[GOLD, TEAL, VIOLET][i]} tilt={[-14, 0, 16][i]} dim={[0.6, 1, 0.8][i]} />
        </At>
      ))}
      <At x={960} y={490} o={ramp(t, model, 0.5) * second}><Wd c={DIM} s={26}>light · angle · age</Wd></At>
      <Items items={[
        ["what mathematicians call an isomorphism", 960, 590, <Wd c={GOLD} s={36} serif>isomorphism: a sameness of structure</Wd>, { until: "A death, for instance" }],
        ["it is recognised by its shape", 960, 690, <Wd c={CHALK} s={30}>recognised by its shape, wherever it shows up</Wd>, { until: "A death, for instance" }],
        ["A death, for instance", 960, 260, <K c={VIOLET} s={30}>a death, mourned</K>],
        ["But no one is found who goes", 960, 380, <SK c={DIM} s={26} strikeAt={c("And the grief, vivid as it is") - 0.5}>someone who goes · something cut off</SK>],
        ["And the grief, vivid as it is", 960, 490, <Wd c={ROSE} s={30}>the grief, vivid, with nothing behind it</Wd>],
        ["The shape is the same", 960, 620, <K c={GOLD} s={26}>no one behind · nothing on its own · nothing missing</K>],
      ]} />
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Four things keep this recognition honest", 960, 110, <Wd c={CHALK} s={38} serif>four things keep recognition honest</Wd>],
        ["First, name the shape", 960, 220, <K c={GOLD} s={26}>1 · the shape: no doer, nothing on its own, nothing added, complete</K>],
        ["Second, no one is doing the recognising", 960, 330, <SK c={DIM} s={26} strikeAt={c("Second, no one is doing the recognising") + 1.5}>2 · a recogniser behind the recognising</SK>],
        ["Familiarity is a condition among conditions", 960, 410, <Wd c={DIM} s={24}>familiarity: a condition among conditions, not a store behind</Wd>],
        ["Third, the shape does not carry across", 960, 510, <SK c={DIM} s={26} strikeAt={c("Same form, not same stuff") - 0.6}>3 · an essence carried from one face to the next</SK>],
        ["Same form, not same stuff", 960, 590, <Wd c={GOLD} s={30} serif>same form, not same stuff</Wd>],
        ["Fourth, recognition can misfire", 960, 690, <Wd c={ROSE} s={28}>4 · misfires: the I AM, a blank quiet, a refined oneness</Wd>, { until: "The test is the shape" }],
        ["The test is the shape", 960, 690, <Wd c={GOLD} s={28}>the test: is a witness, a source, a background left?</Wd>, { until: "Here the logic keeps the recognition honest" }],
        ["Here the logic keeps the recognition honest", 960, 690, <Wd c={TEAL} s={28}>the logic keeps the recognition honest</Wd>],
      ]} />
      <At x={1700} y={690} o={ramp(t, c("The I AM presence"), 0.5) * (1 - ramp(t, c("The test is the shape"), 0.4))}><Face c={ROSE} tilt={20} dim={0.7} /></At>
    </AbsoluteFill>
  );
};

const SixScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const six: [string, string, string, string][] = [
    ["Unfindable does not dim it", "vividly appearing yet unfindable", GOLD, "bright as ever; nothing found"],
    ["Centerless. No doer stands behind seeing", "centerless", TEAL, "not heard from a point"],
    ["Mutual. Each appears only with the others", "mutual", ICE, "each with the others; no web"],
    ["Seamless. No gap opens", "seamless", GREEN, "no gap, no bridge; not merged"],
    ["Effortless. Nothing produces the appearing", "effortless", VIOLET, "nothing to maintain"],
    ["Intimate. No distance stands", "intimate", ROSE, "nothing lights it"],
    ["Open. Nothing closes the appearing in", "open", WARM, "no edge, no container"],
    ["Dissolving. Each appearing spends itself", "dissolving", CHALK, "spent completely; not into anything"],
  ];
  const subs: Record<string, string> = {
    "vividly appearing yet unfindable": "Unfindable does not dim it",
    centerless: "The sound is not heard from a point",
    mutual: "So this is not a web behind things",
    seamless: "Sight stays sight",
    effortless: "Maintenance is the split",
    intimate: "Nothing lights it",
    open: "It is only that nothing is fixed",
    dissolving: "But it does not dissolve into anything",
  };
  return (
    <AbsoluteFill>
      <Items items={[
        ["So what does the view taste like", 960, 100, <Wd c={CHALK} s={40} serif>what the view tastes like</Wd>],
        ["in eight ways", 960, 170, <Wd c={DIM} s={28}>in every appearing, eight ways</Wd>],
      ]} />
      <At x={960} y={470} o={ramp(t, c("in eight ways"), 0.6)}><Waves p={1} color={TEAL} /></At>
      <At x={960} y={470} o={ramp(t, c("In Tibetan, the first has a phrase of its own"), 0.6) * (1 - ramp(t, c("Centerless. No doer stands behind seeing"), 0.5))}>
        <div style={{ marginTop: -10 }}><Wd c={GOLD} s={50} serif>med par gsal snang</Wd></div>
      </At>
      {six.map(([cue, name, col, sub], i) => {
        const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
        const x = 960 + 560 * Math.cos(a), y = 470 + 250 * Math.sin(a);
        const at = c(cue) - (i === 0 ? 2.5 : 0.4);
        const s = c(subs[name]);
        return (
          <React.Fragment key={name}>
            <At x={x} y={y} o={ramp(t, at, 0.5)} s={pop(t, 30, at)}><K c={col} s={i === 0 ? 26 : 30}>{name}</K></At>
            <At x={x} y={y + 58} o={ramp(t, s, 0.5)}><Wd c={DIM} s={22}>{sub}</Wd></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const NotStateScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["These eight describe the appearing, conventionally", 960, 140, <Wd c={CHALK} s={36} serif>the eight describe the appearing</Wd>],
        ["These eight describe the appearing, conventionally", 960, 230, <Wd c={DIM} s={26}>how it is met when the habit of fixing is not running</Wd>, { d: 2 }],
        ["They do not describe emptiness as something found", 960, 350, <SK c={DIM} s={26} strikeAt={c("a negation and nothing more") - 1}>emptiness as something found</SK>],
        ["a negation and nothing more", 960, 440, <Wd c={TEAL} s={28}>emptiness: absence of own-nature, a negation and nothing more</Wd>],
        ["And they are not eight states to reach or to keep", 960, 570, <SK c={ROSE} s={28} strikeAt={c("And they are not eight states to reach or to keep") + 1.8}>eight states to reach or to keep</SK>],
        ["the doer comes back to chase it", 960, 690, <Wd c={GOLD} s={30}>taken up as a goal, the doer comes back to chase it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GuardScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string][] = [
    ["Not only concepts", "only concepts", "things work; harm is harm; actions bear fruit"],
    ["Not uncaused. Every appearing", "uncaused", "the producer goes, not the order"],
    ["Not a web, not a ground", "a web, a ground", "relations no more found than things"],
    ["Not a stage to leave behind", "a stage to leave behind", "the framework is not the prison; reifying it is"],
    ["Not a state to keep", "a state to keep", "seen; in time the habit loosens"],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["That brings the guards", 960, 110, <Wd c={GOLD} s={40} serif>guards</Wd>]]} />
      {rows.map(([cue, no, yes], i) => (
        <React.Fragment key={cue}>
          <At x={620} y={230 + i * 120} o={ramp(t, c(cue), 0.5)}><SK c={DIM} s={26} strikeAt={c(cue) + 0.7}>{no}</SK></At>
          <At x={1240} y={230 + i * 120} o={ramp(t, c(cue) + 1, 0.5)}><Wd c={CHALK} s={26}>{yes}</Wd></At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const BackScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const kept = c("None of this is kept");
  const rows: [string, string, number, number][] = [
    ["After anatta, a vast Awareness", "a vast Awareness, a pure witness", 560, 230],
    ["In total exertion, a cosmic whole", "a cosmic whole, a fluid substrate", 1360, 230],
    ["In dependent arising, a web", "a web, a mechanism", 560, 360],
    ["In spontaneous presence, a source", "a source, or no causes", 1360, 360],
    ["In the marketplace, the helper", "the saviour who has arrived", 560, 490],
    ["Or the bystander", "the bystander: all empty", 1360, 490],
    ["And in practice, a state to keep up", "a state to keep up", 960, 620],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["every mistake on this path has the same shape", 960, 110, <Wd c={CHALK} s={38} serif>the doer, back in a bigger coat</Wd>]]} />
      {rows.map(([cue, label, x, y], i) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * (1 - 0.4 * ramp(t, kept + 1, 0.5))}><SK c={ROSE} s={28} strikeAt={kept + 0.25 * i}>{label}</SK></At>
      ))}
      <Items items={[["And no licence", 960, 560, <Wd c={WARM} s={26}>"no one there, so no consequences": annihilation</Wd>, { until: "And in practice, a state to keep up" }]]} />
      <At x={960} y={760}><Reveal text="None of this is kept. It was always so." at={kept} size={42} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Do I depart from the great masters", 960, 110, <Wd c={CHALK} s={38} serif>the masters: not at the core</Wd>],
      ["The Buddha: when this is, that is", 960, 240, <Row who="the Buddha" how="when this is, that is · the middle way" me="the same" />],
      ["dependent arising is emptiness, a designation in dependence", 960, 340, <Row who="Nāgārjuna" how="emptiness, designation in dependence, the middle way" me="the same, all three uses" />],
      ["the chariot, found neither among its parts", 960, 440, <Row who="Candrakīrti" how="the chariot: not among its parts, nor apart" me="the same: my bridge" />],
      ["dependence on causes, on parts", 960, 540, <Row who="Tsongkhapa" how="on causes, on parts, on being designated" me="the same at the core" />],
      ["the king of reasons", 960, 610, <Wd c={DIM} s={24}>dependent arising: the king of reasons</Wd>],
      ["appearance and emptiness in union", 960, 720, <Row who="Gorampa, Mipham" how="appearance and emptiness in union" me="close" c={GOLD} />],
    ]} />
  </AbsoluteFill>
);

const UnbornScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["says spontaneous presence is not made by causes and conditions", 560, 160, <Wd c={VIOLET} s={32} serif>Dzogchen</Wd>],
        ["says spontaneous presence is not made by causes and conditions", 560, 250, <K c={VIOLET} s={26}>not made by causes and conditions</K>, { d: 0.6 }],
        ["praises dependent arising as without arising", 1360, 160, <Wd c={TEAL} s={32} serif>Madhyamaka</Wd>],
        ["praises dependent arising as without arising", 1360, 250, <K c={TEAL} s={26}>without arising, without ceasing</K>, { d: 0.6 }],
        ["whatever is born from conditions is unborn", 1360, 320, <Wd c={DIM} s={24}>"whatever is born from conditions is unborn"</Wd>],
        ["means unborn by nature", 960, 460, <Wd c={GOLD} s={48} serif>unborn by nature</Wd>],
        ["Appearing through conditions, yet nothing produced", 960, 560, <K c={GOLD} s={26}>through conditions, always · no maker · no birth from its own side</K>],
        ["I part only from a reading", 960, 670, <SK c={DIM} s={26} strikeAt={c("I part only from a reading") + 2.5}>an unconditioned ground</SK>],
        ["ground as empty", 960, 770, <Wd c={CHALK} s={28}>the ground read as empty</Wd>],
      ]} />
      <At x={960} y={395} o={ramp(t, c("Here the equation I make most often"), 0.5) * (1 - ramp(t, c("means unborn by nature"), 0.4))}><Wd c={CHALK} s={28}>dependent arising = spontaneous presence</Wd></At>
    </AbsoluteFill>
  );
};

const PartScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const add = c("What I add is a few words");
  const first = 1 - ramp(t, add, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Where I do part, I say so", 960, 110, <Wd c={CHALK} s={40} serif>where I do part</Wd>, { until: "What I add is a few words" }],
        ["on three points", 960, 200, <Wd c={GOLD} s={30} serif>from Tsongkhapa, on three points</Wd>, { until: "What I add is a few words" }],
        ["What anatta means", 420, 300, <K c={DIM} s={24}>anatta: the insight can come first</K>, { until: "What I add is a few words" }],
        ["The order of the path", 960, 300, <K c={DIM} s={24}>the taste first, the view later</K>, { until: "What I add is a few words" }],
        ["A difference of route, not of content", 960, 370, <Wd c={TEAL} s={24}>route, not content</Wd>, { until: "What I add is a few words" }],
        ["And the bridge across time", 1500, 300, <K c={DIM} s={24}>neither carried nor cut</K>, { until: "What I add is a few words" }],
        ["and modern interbeing", 960, 490, <Wd c={CHALK} s={30}>Huayan and interbeing</Wd>, { until: "What I add is a few words" }],
        ["There is no net behind things", 960, 570, <SK c={DIM} s={26} strikeAt={c("There is no net behind things") + 0.8}>a net behind things</SK>, { d: -1.5, until: "What I add is a few words" }],
        ["And on its status", 960, 680, <K c={TEAL} s={26}>an enlightened view, not a lower truth</K>, { until: "What I add is a few words" }],
        ["the antidote by which ignorance is undone", 960, 770, <Wd c={GOLD} s={28}>the antidote, not the pattern of ignorance</Wd>, { until: "What I add is a few words" }],
      ]} />
      <At x={960} y={0} o={first * 0}><span /></At>
      <Items items={[
        ["What I add is a few words", 960, 200, <div style={{ display: "flex", gap: 30 }}><K c={GOLD} s={28}>taste</K><K c={GOLD} s={28}>encounters</K><K c={GOLD} s={28}>many faces</K></div>],
        ["These are my readings", 960, 360, <Wd c={CHALK} s={32}>my readings, not the schools'; read them for yourself</Wd>],
        ["All views and understanding here are my own", 960, 500, <Wd c={DIM} s={26}>my own views, from my practice and contemplation</Wd>],
        ["All views and understanding here are my own", 960, 570, <Wd c={DIM} s={26}>not representing any tradition, school or teacher</Wd>, { d: 3 }],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const later = c("Later in the day");
  const end = c("If you think you understand, keep looking");
  const pre = 1 - ramp(t, later, 0.5);
  const cover = ramp(t, c("Change one condition") + 1.5, 0.6) * (1 - ramp(t, c("that joins the conditions"), 0.6));
  const conds: [string, number, number][] = [["source", 560, 300], ["air", 560, 420], ["ear", 560, 540], ["attention", 560, 660]];
  return (
    <AbsoluteFill>
      <Items items={[["Try it. Listen to a sound nearby", 960, 100, <Wd c={GOLD} s={40} serif>try it: a sound nearby</Wd>, { until: "If you think you understand, keep looking" }]]} />
      <At x={1240} y={470} o={ramp(t, c("Try it. Listen to a sound nearby"), 0.6) * pre}><Waves p={1} scale={1.2} color={cover > 0.5 ? GOLD : TEAL} /></At>
      <Items items={[
        ["Look for the hearer behind the hearing", 1240, 230, <SK c={DIM} s={26} strikeAt={c("Then look at the hearing itself") - 0.3}>a hearer behind it</SK>, { until: "Find its conditions" }],
        ["Then look at the hearing itself", 1240, 700, <SK c={DIM} s={26} strikeAt={c("Then look at the hearing itself") + 2.5}>a process underneath</SK>, { until: "Find its conditions" }],
      ]} />
      {conds.map(([n, x, y], i) => (
        <React.Fragment key={n}>
          <At x={x} y={y} o={ramp(t, c("Find its conditions") + 0.5 * i, 0.5) * pre}><K c={GOLD} s={26}>{n}</K></At>
          <Flow x1={x + 110} y1={y} x2={1110} y2={470} color={TEAL} p={ramp(t, c("It is their meeting") + 0.2 * i, 0.8) * pre} />
        </React.Fragment>
      ))}
      <At x={1600} y={470} o={ramp(t, c("Change one condition"), 0.5) * pre}><Ear covered={cover} /></At>
      <Items items={[
        ["It is their meeting", 1240, 700, <Wd c={TEAL} s={28}>not made and sent out: their meeting</Wd>, { until: "Change one condition" }],
        ["It is a different appearing", 1240, 700, <Wd c={GOLD} s={28}>not the same sound altered: a different appearing</Wd>, { until: "that joins the conditions" }],
        ["that joins the conditions", 1240, 230, <SK c={DIM} s={26} strikeAt={c("Then stop looking") - 0.5}>a "between" · a web · a power</SK>, { until: "Later in the day" }],
        ["Then stop looking", 1240, 700, <Wd c={CHALK} s={28}>complete, as its conditions meet</Wd>, { until: "Do not try to keep this" }],
        ["Do not try to keep this", 1240, 700, <Wd c={DIM} s={26}>do not keep it; the next sound is complete too</Wd>, { until: "Later in the day" }],
        ["Later in the day", 960, 260, <div style={{ display: "flex", gap: 30 }}><K c={VIOLET} s={28}>a thought</K><K c={ROSE} s={28}>a flash of irritation</K></div>, { until: "If you think you understand, keep looking" }],
        ["Later in the day", 960, 380, <Wd c={CHALK} s={28}>anyone behind it? anything on its own? anything missing?</Wd>, { d: 4, until: "If you think you understand, keep looking" }],
        ["Recognise the face", 960, 500, <Wd c={GOLD} s={32} serif>recognise the face; do not hold on to it</Wd>, { until: "If you think you understand, keep looking" }],
      ]} />
      <At x={960} y={330}><Reveal text="If you think you understand, keep looking." at={end} size={54} color={GOLD} speed={0.035} /></At>
      <Items items={[
        ["The same taste has many faces", 960, 450, <Wd c={CHALK} s={36} serif>one taste, many faces</Wd>],
        ["There is one more part", 960, 620, <Wd c={DIM} s={28}>Part 6, a draft</Wd>],
        ["There is one more part", 960, 700, <Wd c={TEAL} s={32} serif>five elements · five lights · rainbow body</Wd>, { d: 1.5 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["This is Part", "dusk", <OpenScene />],
    ["I say dependent arising is spontaneous presence", "whole", <ThreeScene />],
    ["None is higher", "light", <HigherScene />],
    ["The descriptions keep each other honest", "search", <HonestScene />],
    ["Now the many faces", "jade", <FacesScene />],
    ["Four things keep this recognition honest", "doubt", <FourScene />],
    ["So what does the view taste like", "light", <SixScene />],
    ["These eight describe the appearing, conventionally", "deep", <NotStateScene />],
    ["That brings the guards", "search", <GuardScene />],
    ["every mistake on this path has the same shape", "doubt", <BackScene />],
    ["Do I depart from the great masters", "dusk", <MastersScene />],
    ["says spontaneous presence is not made by causes and conditions", "whole", <UnbornScene />],
    ["Where I do part, I say so", "search", <PartScene />],
    ["Try it. Listen to a sound nearby", "night", <TryScene />],
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
