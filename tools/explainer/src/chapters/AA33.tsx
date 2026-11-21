// Bonus video: The Mind Trap and the Bottom Layer (AA33).
// (Script: tools/series/after-anatta/aa33-the-mind-trap-and-the-bottom-layer/aa33-script.md, approved 2026-11-21.)
// Arc: the chariot carried you, none was needed -> the habit hides in three places -> 1. under the parts: chariot,
// wheel, rim, wood, grain, no bottom layer -> the Abhidharma's list (designated things vs the dharmas, each with its own
// mark) -> MMK 5: space and its mark, mark and marked together -> MMK 15: an own nature could not arise or change; fire
// still burns -> the apple's hardness, met by the hand -> 2. inside the mind: the bell is a meeting -> the ting left
// over as consciousness (not wrong) -> the trap: all folded into one clarity (drawn only to be struck) -> dependency is
// the way out; matter traded for mind is still stuff -> "just a label in the mind" -> 3. the world unwatched: the
// mountain among rocks, soil, height, tree line -> me, the bat, the bee, the ant -> the hidden mountain reply ->
// measuring -> two claims; reliability is not independence -> three hiding places empty; apple, bell, mountain stay
// -> next: Negation and Formation.
// Stance: no essence is ever drawn as a thing; emptiness is never drawn as a power or a substance; no floor or ground is
// drawn under the parts (the descent trails off into nothing; the mountain has no base line); "one clarity" is drawn
// only to be struck; the meeting of conditions is never drawn as a third thing.
// Cue phrases avoid respelled names (Abhidharma, Nagarjuna) and hyphenated words (humble-sounding, ready-made).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Ring, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "the chariot carried you to town", "and no chariot was found behind the carrying", "None was needed",
  "I am John Tan, known as Thusness", "the habit looks for a floor somewhere else", "it hides in three places",
  "Under the parts. Inside the mind", "And in the world, when no one is looking", "This video looks at all three",
  // under the parts
  "The first place is under the parts", "The chariot is named on its wheels, axle and frame", "The chariot is only a name",
  "But the wheels are surely real", "A wheel is singled out in turn", "They on their wood", "The wood on its grain",
  "No bottom layer is ever reached", "where something finally stands by itself", "There is nowhere for the search to end",
  // the list
  "The Buddhist tradition itself once set out to find that bottom layer", "tried to list what is finally there",
  "Tables, people and chariots, it said, are only designated", "Take them apart, and they are gone",
  "the last units of experience", "A moment of hardness", "Of heat. Of sound. Of feeling",
  // own mark
  "Each was defined by its own mark", "Earth by hardness", "Water by cohesion", "Fire by heat", "Space by not obstructing",
  "because it bears its own mark", "whether or not anyone names it", "So the chariot was designated, but its floor was not",
  // mark and marked
  "aims at exactly this", "He takes the hardest case, space", "which some schools held to be unconditioned",
  "Can space be there before its mark", "is found before the mark of space", "A space with no mark would be a thing with no mark",
  "Then the mark must apply to something", "But it cannot apply to what has no mark", "nor to what already has one",
  "and there is nowhere else for it to apply", "So mark and marked stand or fall together", "Neither comes first",
  "Each is set up only with the other", "Which is to say, designated",
  // own nature
  "with its own nature could not arise", "could not change, and could not cease", "A nature becoming otherwise never makes sense",
  "and dependent arising stops working", "None of this denies that fire burns", "A doctor still reads a fever",
  "A builder still tests a beam", "What goes is only their standing as the final building blocks",
  // apple
  "Take the hardness of an apple in my palm", "It looks like the last thing left", "own mark, found at last",
  "But hardness is singled out on touch, skin and pressure", "It stands out only against softness",
  "It arises with the hand that meets it", "It is not a mark something carries from its own side",
  "The floor under the parts is not found", "And the apple is hard, and the hand knows it",
  // bell
  "The second place is inside the mind", "Strike a bell", "The ringing is not made by the bronze", "and then sent out",
  "It is their meeting", "No power passes from the strike to the sound",
  // ting
  "When the producing cause falls away like this", "one part is almost always left over", "The resounding ting is consciousness",
  "It is my very own clarity", "That reading is not wrong", "It is an important insight", "No hearer stands apart from the ting",
  "The ting is the hearing",
  // the trap
  "What tends to happen next is the trap", "then fold everything into consciousness", "The producer is gone, the hearer is gone",
  "and mind is left standing as what everything is", "become contents of one clarity",
  "That is the ground coming back, this time as mind", "A universal Awareness", "A Presence with a capital P",
  // the way out
  "Dependency is the way out", "The ting is there only with the bronze", "it is not mind from its own side",
  "any more than it is bronze from its own side", "Clarity is never absent from what appears", "But lifted out",
  "it is one more thing", "When matter is seen through, the habit does not give up", "It changes its stuff",
  "Matter traded for mind is still stuff", "What appears is not made of anything",
  // a label in the mind
  "The same trap waits in a", "The chariot is just a label in the mind", "It sounds modest",
  "But it quietly sets up a mind that is found", "painting names onto a world", "That mind is singled out too",
  "No labeller stands behind it", "no more made of mind than it is made of chariot stuff",
  // mountain
  "The third place is the world", "Take a mountain", "It reliably stops the climber", "It was there before anyone named it",
  "But look for the mountain among the rocks", "It is not among them, and not apart from them",
  "No mountain comes with its edges drawn by nature",
  // creatures
  "Does a bat see a mountain", "A bee? An ant", "I see a bounded shape against the sky", "A bat, finding its way by echo",
  "with no clean edge where mountain stops", "A bee, seeing in ultraviolet among flowers",
  "may hardly meet the mountain as one thing at all", "An ant takes a day to cross one boulder", "and never meets a mountain",
  "This is not four creatures looking at one", "Body and world arise together", "A different body singles out a different world",
  // the usual reply
  "The usual reply is that the mountain is there all the same", "and only the experiences differ",
  "That reply slips in a mountain, finished before anything meets it", "If that hidden mountain has a summit and slopes",
  "why do the bat and the ant meet none of them", "If it has no features at all", "a featureless something cannot be what they all meet",
  // measuring
  "Nor is measuring a view from nowhere", "Metres and maps are a human channel of contact",
  "When we agree on where the mountain is", "our bodies and instruments are alike",
  "It does not show one mountain standing there by itself", "And the ant is not cut off", "A rockfall can crush it",
  // two claims
  "So, when no one is looking, is the mountain there", "Two claims sound almost the same, and are not",
  "The mountain is still there when I look away and look back", "That is true", "It is checked the ordinary way",
  "the road still there to drive on", "The mountain exists from its own side, whether or not anything ever meets it",
  "That is a different claim", "Nothing has earned it", "because the first claim works so reliably",
  "But reliability is not independence", "That line keeps me out of two mistakes",
  "The mountain is an illusion, which no one is claiming", "And the mountain exists on its own, which was never shown",
  // end
  "three hiding places turn out to be empty", "No floor under the parts", "No mind under everything",
  "No world standing there by itself", "And the apple is hard, the bell rings clear", "and the mountain stops the climber",
  // next
  "But a question is still left", "hiding inside every question I have asked", "That is the next video: Negation and Formation",
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
/** A chip that is struck through at the cue `at` (plus `sd` seconds). */
const SK: React.FC<{ c?: string; s?: number; at: string; sd?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, sd = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + sd} /></div>;
};
const Box: React.FC<{ c: string; w?: number; ts?: number; title: string; sub?: string }> = ({ c, w = 460, ts = 38, title, sub }) => (
  <div style={{ width: w, padding: "22px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={ts} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
  </div>
);
/** Fades its children out from cue `at` on. */
const Until: React.FC<{ at: string; children: React.ReactNode }> = ({ at, children }) => {
  const { t } = useT();
  const c = useCue();
  return <AbsoluteFill style={{ opacity: 1 - ramp(t, c(at), 0.5) }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A chariot, simply drawn; `apart` 0..1 pulls its parts away. */
const Chariot: React.FC<{ p: number; apart?: number }> = ({ p, apart = 0 }) => (
  <svg width={600} height={340} viewBox="0 0 600 340" style={{ overflow: "visible" }}>
    <g transform={`translate(${-apart * 90} ${apart * 40})`}><DrawPath d="M140 250 a70 70 0 1 1 -0.1 0 Z M140 180 L140 320 M70 250 L210 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(${apart * 90} ${apart * 40})`}><DrawPath d="M420 250 a70 70 0 1 1 -0.1 0 Z M420 180 L420 320 M350 250 L490 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(0 ${-apart * 60})`}><DrawPath d="M80 170 L500 170 L470 80 L120 80 Z" p={p} color={CHALK} width={5} len={1100} /></g>
    <g transform={`translate(0 ${apart * 70})`}><DrawPath d="M140 250 L420 250" p={p} color={DIM} width={6} len={300} /></g>
    <g transform={`translate(${apart * 120} ${-apart * 20})`}><DrawPath d="M500 150 L590 120" p={p} color={DIM} width={6} len={120} /></g>
  </svg>
);
/** A bell that sways a little after `struck` (seconds since the strike, or < 0). */
const Bell: React.FC<{ size?: number; struck: number; p?: number }> = ({ size = 260, struck, p = 1 }) => {
  const sway = struck > 0 ? Math.sin(struck * 9) * 6 * Math.exp(-struck * 0.8) : 0;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", transform: `rotate(${sway}deg)`, transformOrigin: "50% 8%" }}>
      <DrawPath d="M88 22 Q100 4 112 22" p={p} color={GOLD} width={5} len={60} />
      <DrawPath d="M100 22 C62 22 54 62 54 100 L40 152 L160 152 L146 100 C146 62 138 22 100 22 Z" p={p} color={GOLD} width={5} len={520}
        fill="rgba(228,194,122,0.14)" />
      <circle cx={100} cy={168} r={11} fill="none" stroke={GOLD} strokeWidth={4} opacity={p} />
    </svg>
  );
};
/** An apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ROSE})` }}>
    <path d="M100 62 C70 42 30 56 32 102 C34 150 70 182 100 166 C130 182 166 150 168 102 C170 56 130 42 100 62 Z"
      fill="rgba(255,143,163,0.22)" stroke={ROSE} strokeWidth={5} />
    <path d="M100 62 L105 34" stroke={DIM} strokeWidth={5} strokeLinecap="round" />
    <path d="M105 42 C120 28 136 32 142 38 C130 50 116 50 105 42 Z" fill="rgba(143,212,154,0.4)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
/** A mountain outline with no base line drawn under it. */
const Mountain: React.FC<{ w?: number; p: number; dashed?: boolean; color?: string }> = ({ w = 700, p, dashed, color = CHALK }) => (
  <svg width={w} height={w * 0.54} viewBox="0 0 700 380" style={{ overflow: "visible", opacity: dashed ? 0.7 : 1 }}>
    {dashed
      ? <path d="M20 360 L230 120 L300 180 L380 40 L520 200 L580 150 L680 360" fill="none" stroke={color} strokeWidth={4}
          strokeDasharray="16 14" opacity={p} />
      : <DrawPath d="M20 360 L230 120 L300 180 L380 40 L520 200 L580 150 L680 360" p={p} color={color} width={5} len={1300} />}
    {!dashed && <DrawPath d="M345 90 L380 40 L420 98 L398 88 L380 104 L362 86 Z" p={p} color={ICE} width={3} len={300} />}
  </svg>
);
/** Small sketches for the four creatures. */
const Echo: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={220} height={150} viewBox="0 0 220 150" style={{ overflow: "visible" }}>
      <path d="M20 75 L38 62 L48 72 L58 62 L76 75 L58 70 L48 80 L38 70 Z" fill="rgba(155,123,255,0.3)" stroke={VIOLET} strokeWidth={3} />
      {[0, 1, 2, 3].map((k) => {
        const r = 30 + ((t * 40 + k * 30) % 120);
        return <path key={k} d={`M${76 + r * 0.5} ${75 - r * 0.6} Q${76 + r} 75 ${76 + r * 0.5} ${75 + r * 0.6}`} fill="none" stroke={ICE}
          strokeWidth={3} opacity={1 - (r - 30) / 120} />;
      })}
    </svg>
  );
};
const Flowers: React.FC = () => (
  <svg width={220} height={150} viewBox="0 0 220 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
    {[[70, 70], [150, 90]].map(([x, y], j) => (
      <g key={j}>
        {[0, 1, 2, 3, 4].map((k) => <circle key={k} cx={x + Math.cos(k * 1.2566) * 22} cy={y + Math.sin(k * 1.2566) * 22} r={13}
          fill="rgba(155,123,255,0.3)" stroke={VIOLET} strokeWidth={2.5} />)}
        <circle cx={x} cy={y} r={9} fill={GOLD} />
      </g>
    ))}
  </svg>
);
const Boulder: React.FC = () => {
  const { t } = useT();
  const a = Math.PI * (1.1 + ((t * 0.04) % 0.8));
  return (
    <svg width={220} height={150} viewBox="0 0 220 150" style={{ overflow: "visible" }}>
      <path d="M40 120 C30 70 70 30 120 34 C170 38 196 80 184 120 C160 136 70 138 40 120 Z" fill="rgba(164,158,144,0.15)" stroke={DIM} strokeWidth={4} />
      <circle cx={112 + Math.cos(a) * 78} cy={84 + Math.sin(a) * 50} r={5} fill={WARM} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const roll = ramp(t, 0.3, 6);
  return (
    <AbsoluteFill>
      <Until at="the habit looks for a floor somewhere else">
        <At x={760 + roll * 400} y={400} o={ramp(t, 0.2, 0.6)} s={0.9}><Chariot p={ramp(t, 0.2, 1.5)} /></At>
        <Items items={[
          ["the chariot carried you to town", 960, 130, <Wd c={CHALK} s={44} serif>The chariot carried you to town.</Wd>],
          ["and no chariot was found behind the carrying", 960, 640, <Wd c={DIM} s={30}>no chariot found behind the carrying</Wd>],
          ["None was needed", 960, 710, <K c={GREEN} s={30}>none was needed</K>],
          ["I am John Tan, known as Thusness", 960, 800, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.5 }],
        ]} />
      </Until>
      <Items items={[
        ["the habit looks for a floor somewhere else", 960, 200, <Wd c={CHALK} s={44} serif>The habit looks for a floor somewhere else</Wd>],
        ["it hides in three places", 960, 300, <Wd c={DIM} s={30}>three hiding places</Wd>],
        ["Under the parts. Inside the mind", 480, 470, <K c={GOLD} s={34}>under the parts?</K>, { pop: true }],
        ["Under the parts. Inside the mind", 960, 470, <K c={VIOLET} s={34}>inside the mind?</K>, { pop: true, d: 0.9 }],
        ["And in the world, when no one is looking", 1440, 470, <K c={TEAL} s={34}>the world, unwatched?</K>, { pop: true }],
        ["This video looks at all three", 960, 660, <Wd c={GOLD} s={34} serif>one by one</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PartsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const steps: [string, string, number, string][] = [
    ["The first place is under the parts", "chariot", 210, GOLD],
    ["The chariot is named on its wheels, axle and frame", "wheels · axle · frame", 320, CHALK],
    ["A wheel is singled out in turn", "a wheel: rim · spokes · hub", 430, CHALK],
    ["They on their wood", "wood", 540, CHALK],
    ["The wood on its grain", "grain", 650, CHALK],
  ];
  const trail = c("No bottom layer is ever reached");
  return (
    <AbsoluteFill>
      <Items items={[["The first place is under the parts", 960, 110, <K c={GOLD} s={32}>1 · under the parts</K>, { pop: true }]]} />
      {steps.map(([cue, label, y, col], i) => {
        const a = c(cue) + (i === 0 ? 0.5 : 0);
        return (
          <React.Fragment key={label}>
            {i > 0 && <Flow x1={960} y1={y - 75} x2={960} y2={y - 32} color={DIM} p={ramp(t, a - 0.2, 0.4)} width={2} />}
            <At x={960} y={y} o={ramp(t, a, 0.5)}><Chip color={col} size={30}>{label}</Chip></At>
          </React.Fragment>
        );
      })}
      <Flow x1={960} y1={685} x2={960} y2={790} color={DIM} p={ramp(t, trail, 1)} width={2} dash />
      <At x={960} y={815} o={ramp(t, trail + 0.4, 0.6) * (0.4 + 0.3 * Math.sin(t * 2))}><Wd c={DIM} s={40}>…</Wd></At>
      <Items items={[
        ["The chariot is only a name", 1460, 210, <K c={GREEN} s={28}>"the chariot is only a name"</K>],
        ["But the wheels are surely real", 1460, 320, <Wd c={WARM} s={30}>but the wheels are surely real?</Wd>],
        ["No bottom layer is ever reached", 460, 650, <SK c={DIM} s={28} at="There is nowhere for the search to end">a bottom layer</SK>],
        ["where something finally stands by itself", 460, 740, <Wd c={DIM} s={24}>nothing standing by itself</Wd>],
        ["There is nowhere for the search to end", 1460, 700, <Wd c={GOLD} s={32} serif>nowhere for the search to end</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DharmaScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The Buddhist tradition itself once set out to find that bottom layer", 960, 110, <Wd c={CHALK} s={42} serif>The Abhidharma: a search for the bottom layer</Wd>],
      ["tried to list what is finally there", 960, 190, <Wd c={DIM} s={28}>a list of what is finally there</Wd>],
      ["Tables, people and chariots, it said, are only designated", 560, 310, <SK c={CHALK} s={30} at="Take them apart, and they are gone">tables</SK>],
      ["Tables, people and chariots, it said, are only designated", 960, 310, <SK c={CHALK} s={30} at="Take them apart, and they are gone">people</SK>, { d: 0.4 }],
      ["Tables, people and chariots, it said, are only designated", 1360, 310, <SK c={CHALK} s={30} at="Take them apart, and they are gone">chariots</SK>, { d: 0.8 }],
      ["Tables, people and chariots, it said, are only designated", 960, 400, <Wd c={DIM} s={26}>only designated: take them apart, gone</Wd>, { d: 1.4 }],
      ["the last units of experience", 960, 530, <Wd c={GOLD} s={38} serif>What remains: the dharmas, the last units</Wd>],
      ["A moment of hardness", 540, 660, <K c={WARM} s={30}>hardness</K>, { pop: true }],
      ["Of heat. Of sound. Of feeling", 820, 660, <K c={ROSE} s={30}>heat</K>, { pop: true }],
      ["Of heat. Of sound. Of feeling", 1100, 660, <K c={ICE} s={30}>sound</K>, { pop: true, d: 0.6 }],
      ["Of heat. Of sound. Of feeling", 1380, 660, <K c={VIOLET} s={30}>feeling</K>, { pop: true, d: 1.2 }],
      ["Of heat. Of sound. Of feeling", 960, 760, <Wd c={DIM} s={26}>each a moment</Wd>, { d: 1.8 }],
    ]} />
  </AbsoluteFill>
);

const OwnMarkScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Each was defined by its own mark", 960, 120, <Wd c={CHALK} s={42} serif>Each defined by its own mark</Wd>],
      ["Earth by hardness", 960, 240, <K c={WARM} s={30}>earth · hardness</K>],
      ["Water by cohesion", 960, 320, <K c={ICE} s={30}>water · cohesion</K>],
      ["Fire by heat", 960, 400, <K c={ROSE} s={30}>fire · heat</K>],
      ["Space by not obstructing", 960, 480, <K c={VIOLET} s={30}>space · not obstructing</K>],
      ["because it bears its own mark", 960, 590, <Wd c={GOLD} s={34} serif>a dharma: what bears its own mark</Wd>],
      ["whether or not anyone names it", 960, 680, <K c={WARM} s={28}>its own nature, from its own side, named or not</K>],
      ["So the chariot was designated, but its floor was not", 960, 780, <Wd c={DIM} s={28}>the chariot designated; its floor not</Wd>],
    ]} />
  </AbsoluteFill>
);

const MarkScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const apply = c("Then the mark must apply to something");
  const targets: [string, string, number][] = [
    ["But it cannot apply to what has no mark", "what has no mark", 480],
    ["nor to what already has one", "what already has one", 960],
    ["and there is nowhere else for it to apply", "somewhere else", 1440],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["aims at exactly this", 960, 110, <Wd c={CHALK} s={40} serif>Nāgārjuna aims at exactly this (MMK 5)</Wd>]]} />
      <Until at="Then the mark must apply to something">
        <Items items={[
          ["He takes the hardest case, space", 960, 230, <K c={ICE} s={34}>space</K>, { pop: true }],
          ["which some schools held to be unconditioned", 960, 300, <Wd c={DIM} s={26}>held by some to be unconditioned</Wd>],
          ["Can space be there before its mark", 960, 400, <Wd c={CHALK} s={36} serif>Space, before its mark?</Wd>],
          ["is found before the mark of space", 960, 480, <K c={ROSE} s={28}>none is found</K>],
          ["A space with no mark would be a thing with no mark", 960, 560, <Wd c={DIM} s={26}>a thing with no mark: found nowhere</Wd>],
        ]} />
      </Until>
      <At x={960} y={230} o={ramp(t, apply, 0.5)}><K c={GOLD} s={32}>the mark</K></At>
      {targets.map(([cue, label, x]) => (
        <React.Fragment key={label}>
          <Flow x1={960} y1={260} x2={x} y2={390} color={GOLD} p={ramp(t, c(cue), 0.5)} width={2} />
          <At x={x} y={420} o={ramp(t, c(cue), 0.5)}><SK c={CHALK} s={28} at={cue} sd={0.9}>{label}</SK></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["So mark and marked stand or fall together", 960, 570, <Wd c={GOLD} s={44} serif>mark ⇄ marked</Wd>, { pop: true }],
        ["Neither comes first", 960, 650, <Wd c={DIM} s={28}>neither comes first</Wd>],
        ["Each is set up only with the other", 960, 720, <Wd c={CHALK} s={30}>each set up only with the other</Wd>],
        ["Which is to say, designated", 960, 800, <K c={GREEN} s={30}>designated</K>],
      ]} />
    </AbsoluteFill>
  );
};

const NatureScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["with its own nature could not arise", 960, 150, <Box c={WARM} w={640} ts={34} title="A dharma with its own nature" sub="(MMK 15)" />],
      ["with its own nature could not arise", 520, 330, <K c={ROSE} s={28}>could not arise</K>, { pop: true, d: 0.6 }],
      ["could not change, and could not cease", 960, 330, <K c={ROSE} s={28}>could not change</K>, { pop: true }],
      ["could not change, and could not cease", 1400, 330, <K c={ROSE} s={28}>could not cease</K>, { pop: true, d: 0.8 }],
      ["A nature becoming otherwise never makes sense", 960, 420, <Wd c={DIM} s={26}>a nature becoming otherwise: no sense</Wd>],
      ["and dependent arising stops working", 960, 500, <Wd c={ROSE} s={34} serif>dependent arising would stop</Wd>],
      ["None of this denies that fire burns", 960, 610, <Wd c={GREEN} s={32}>fire still burns · earth still solid</Wd>],
      ["A doctor still reads a fever", 600, 700, <K c={CHALK} s={26}>a doctor reads a fever</K>],
      ["A builder still tests a beam", 1320, 700, <K c={CHALK} s={26}>a builder tests a beam</K>],
      ["What goes is only their standing as the final building blocks", 960, 800, <SK c={DIM} s={28} at="What goes is only their standing as the final building blocks" sd={1.2}>the final building blocks</SK>],
    ]} />
  </AbsoluteFill>
);

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("It arises with the hand that meets it");
  return (
    <AbsoluteFill>
      <At x={560} y={370} o={ramp(t, 0.3, 0.6)}><Apple size={240} /></At>
      <At x={560} y={590} o={ramp(t, 0.6, 0.6)} r={180}><Hand size={200} /></At>
      {[0, 1, 2].map((k) => (
        <Flow key={k} x1={500 + k * 60} y1={520} x2={500 + k * 60} y2={460} color={GOLD} p={ramp(t, meet + k * 0.2, 0.5)} width={2} />
      ))}
      <Items items={[
        ["Take the hardness of an apple in my palm", 960, 110, <Wd c={CHALK} s={42} serif>The hardness of an apple</Wd>],
        ["It looks like the last thing left", 1350, 200, <Wd c={DIM} s={28}>the last thing left?</Wd>],
        ["own mark, found at last", 1350, 270, <K c={WARM} s={28}>earth's own mark, at last?</K>],
        ["But hardness is singled out on touch, skin and pressure", 1350, 370, <K c={CHALK} s={28}>touch · skin · pressure</K>],
        ["It stands out only against softness", 1350, 450, <Wd c={CHALK} s={28}>only against softness</Wd>],
        ["It arises with the hand that meets it", 1350, 520, <Wd c={GOLD} s={28}>with the hand that meets it</Wd>],
        ["It is not a mark something carries from its own side", 1350, 610, <SK c={DIM} s={26} at="It is not a mark something carries from its own side" sd={1}>a mark carried from its own side</SK>],
        ["The floor under the parts is not found", 960, 730, <Wd c={CHALK} s={34} serif>The floor under the parts is not found.</Wd>],
        ["And the apple is hard, and the hand knows it", 960, 810, <Wd c={GREEN} s={30}>and the apple is hard, and the hand knows it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

/** Rings spreading from a struck bell, repeating every `per` seconds after `at`. */
const BellRings: React.FC<{ x: number; y: number; at: number; per?: number }> = ({ x, y, at, per = 1.6 }) => {
  const { t } = useT();
  if (t < at) return null;
  return <>{[0, 1].map((k) => <Ring key={k} x={x} y={y} p={(((t - at) / per + k * 0.5) % 1)} r0={110} r1={330} color={ICE} width={2} />)}</>;
};

const BellScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const strike = c("Strike a bell") + 0.6;
  const made = c("The ringing is not made by the bronze");
  const conds: [string, number, number][] = [["bronze", 560, 300], ["the strike", 560, 460], ["air", 1360, 300], ["ear", 1360, 460]];
  return (
    <AbsoluteFill>
      <Items items={[["The second place is inside the mind", 960, 110, <K c={VIOLET} s={32}>2 · inside the mind</K>, { pop: true }]]} />
      <BellRings x={960} y={390} at={strike} />
      <At x={960} y={380} o={ramp(t, c("Strike a bell"), 0.5)}><Bell size={250} struck={t - strike} p={ramp(t, c("Strike a bell"), 1)} /></At>
      {conds.map(([w, x, y], i) => (
        <At key={w} x={x} y={y} o={ramp(t, made + i * 0.5, 0.5)}><Chip color={GOLD} size={28}>{w}</Chip></At>
      ))}
      <Items items={[
        ["and then sent out", 960, 620, <SK c={DIM} s={28} at="It is their meeting">made by them, then sent out</SK>],
        ["It is their meeting", 960, 700, <Wd c={GOLD} s={40} serif>the ringing is their meeting</Wd>],
        ["No power passes from the strike to the sound", 960, 790, <Wd c={DIM} s={28}>no power passes from strike to sound</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("one part is almost always left over");
  return (
    <AbsoluteFill>
      <Items items={[["When the producing cause falls away like this", 960, 120, <Wd c={DIM} s={30}>the producer falls away, and...</Wd>]]} />
      <At x={960} y={250} o={ramp(t, a, 0.6)} s={1 + 0.04 * Math.sin(t * 5)}><Wd c={ICE} s={84} serif>ting</Wd></At>
      <Items items={[
        ["one part is almost always left over", 960, 350, <K c={WARM} s={28}>one part left over</K>, { d: 0.5 }],
        ["The resounding ting is consciousness", 960, 440, <Wd c={CHALK} s={36} serif>"The ting is consciousness."</Wd>],
        ["It is my very own clarity", 960, 510, <Wd c={CHALK} s={32} serif>"My very own clarity."</Wd>],
        ["That reading is not wrong", 960, 610, <K c={GREEN} s={28}>not wrong</K>],
        ["It is an important insight", 960, 610, <K c={GREEN} s={28}>not wrong: an important insight</K>, { o: 1 }],
        ["No hearer stands apart from the ting", 960, 700, <Wd c={DIM} s={28}>no hearer apart from the ting</Wd>],
        ["The ting is the hearing", 960, 790, <Wd c={GOLD} s={40} serif>The ting is the hearing.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TrapScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fold = c("then fold everything into consciousness");
  const into = c("become contents of one clarity");
  const parts: [string, number, number][] = [["bell", 700, 300], ["air", 1220, 300], ["ear", 960, 560]];
  return (
    <AbsoluteFill>
      <Items items={[["What tends to happen next is the trap", 960, 110, <Wd c={WARM} s={44} serif>the trap</Wd>, { pop: true }]]} />
      <Svg>
        <circle cx={960} cy={430} r={260} fill={`rgba(155,123,255,${0.1 * ramp(t, into, 1)})`} stroke={VIOLET} strokeWidth={3}
          strokeDasharray={1634} strokeDashoffset={1634 * (1 - ramp(t, fold, 2))} style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }} />
      </Svg>
      {parts.map(([w, x, y], i) => {
        const m = ramp(t, into + i * 0.3, 1.2);
        return <At key={w} x={x + (960 - x) * m * 0.45} y={y + (430 - y) * m * 0.45} s={1 - 0.3 * m} o={ramp(t, fold, 0.6)}>
          <Chip color={GOLD} size={28}>{w}</Chip></At>;
      })}
      <Items items={[
        ["become contents of one clarity", 960, 430, <Wd c={VIOLET} s={36} serif>one clarity</Wd>, { d: 1.2 }],
        ["The producer is gone, the hearer is gone", 300, 260, <SK c={DIM} s={26} at="The producer is gone, the hearer is gone" sd={0.6}>producer</SK>],
        ["The producer is gone, the hearer is gone", 300, 340, <SK c={DIM} s={26} at="The producer is gone, the hearer is gone" sd={1.4}>hearer</SK>, { d: 0.8 }],
        ["and mind is left standing as what everything is", 300, 460, <Wd c={WARM} s={26}>mind: what all is</Wd>],
        ["A universal Awareness", 1640, 300, <Wd c={WARM} s={34} serif>Awareness</Wd>],
        ["A Presence with a capital P", 1640, 380, <Wd c={WARM} s={34} serif>Presence</Wd>],
        ["That is the ground coming back, this time as mind", 960, 780, <K c={WARM} s={30}>the ground, back again, as mind</K>],
      ]} />
    </AbsoluteFill>
  );
};

const WayOutScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const start = c("Dependency is the way out");
  const only = c("The ting is there only with the bronze");
  const conds: [string, number, number][] = [["bronze", 600, 230], ["the strike", 600, 410], ["air", 1320, 230], ["ear", 1320, 410]];
  return (
    <AbsoluteFill>
      <Items items={[["Dependency is the way out", 960, 110, <K c={GREEN} s={32}>dependency is the way out</K>, { pop: true }]]} />
      <Until at="When matter is seen through, the habit does not give up">
        <Svg>
          <circle cx={960} cy={430} r={260} fill="none" stroke={VIOLET} strokeWidth={3} opacity={1 - ramp(t, start + 0.6, 1.2)} />
        </Svg>
        <At x={960} y={430} o={1 - ramp(t, start + 0.6, 1.2)}>
          <div style={{ position: "relative" }}><Wd c={VIOLET} s={36} serif>one clarity</Wd><Strike at={start + 0.2} /></div>
        </At>
        <At x={960} y={320} o={ramp(t, only, 0.5)}><Wd c={ICE} s={56} serif>ting</Wd></At>
        {conds.map(([w, x, y], i) => (
          <React.Fragment key={w}>
            <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.35} y2={320 + (y - 320) * 0.35} color={GREEN} p={ramp(t, only + i * 0.3, 0.5)} width={2} />
            <At x={x} y={y} o={ramp(t, only + i * 0.3, 0.5)}><Chip color={GREEN} size={26}>{w}</Chip></At>
          </React.Fragment>
        ))}
        <Items items={[
          ["it is not mind from its own side", 700, 530, <SK c={DIM} s={26} at="any more than it is bronze from its own side" sd={0.8}>mind from its own side</SK>],
          ["any more than it is bronze from its own side", 1220, 530, <SK c={DIM} s={26} at="any more than it is bronze from its own side" sd={0.8}>bronze from its own side</SK>],
          ["Clarity is never absent from what appears", 960, 630, <Wd c={ICE} s={32}>clarity: never absent from what appears</Wd>],
          ["But lifted out", 960, 720, <Wd c={DIM} s={28}>lifted out, made what all is made of...</Wd>],
          ["it is one more thing", 960, 800, <K c={WARM} s={28}>one more thing</K>],
        ]} />
      </Until>
      <Items items={[
        ["When matter is seen through, the habit does not give up", 960, 240, <Wd c={DIM} s={30}>matter seen through; the habit does not give up</Wd>, { d: 0.5 }],
        ["It changes its stuff", 700, 380, <SK c={CHALK} s={34} at="What appears is not made of anything" sd={0.5}>matter</SK>],
        ["It changes its stuff", 960, 380, <Wd c={WARM} s={40}>→</Wd>, { d: 0.4 }],
        ["It changes its stuff", 1220, 380, <SK c={VIOLET} s={34} at="What appears is not made of anything" sd={0.9}>mind</SK>, { d: 0.6 }],
        ["Matter traded for mind is still stuff", 960, 490, <Wd c={WARM} s={32}>still stuff</Wd>],
        ["What appears is not made of anything", 960, 640, <Wd c={GOLD} s={44} serif>What appears is not made of anything.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LabelScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const found = c("But it quietly sets up a mind that is found");
  const paint = c("painting names onto a world");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The same trap waits in a", 960, 110, <Wd c={DIM} s={30}>the same trap, in a modest answer</Wd>],
        ["The chariot is just a label in the mind", 960, 190, <Wd c={CHALK} s={40} serif>"The chariot is just a label in the mind."</Wd>],
        ["It sounds modest", 960, 260, <Wd c={DIM} s={26}>it sounds modest</Wd>],
      ]} />
      <At x={1300} y={460} o={ramp(t, c("The chariot is just a label in the mind"), 0.6)} s={0.6}><Chariot p={ramp(t, c("The chariot is just a label in the mind"), 1.5)} /></At>
      <At x={1300} y={340} o={ramp(t, paint + 0.6, 0.5) * (1 - ramp(t, c("No labeller stands behind it") + 1, 0.6))}><K c={GOLD} s={26}>"chariot"</K></At>
      <Flow x1={760} y1={460} x2={1120} y2={400} color={VIOLET} p={ramp(t, paint, 0.6) * (1 - ramp(t, c("No labeller stands behind it") + 1, 0.6))} width={2} />
      <At x={600} y={460} o={ramp(t, found, 0.5)}>
        <SK c={VIOLET} s={28} at="No labeller stands behind it" sd={0.5}>a mind behind, painting names</SK>
      </At>
      <Items items={[
        ["painting names onto a world", 960, 590, <Wd c={DIM} s={26}>painting names onto a world</Wd>],
        ["That mind is singled out too", 600, 540, <K c={WARM} s={24}>singled out too</K>],
        ["No labeller stands behind it", 960, 670, <Wd c={CHALK} s={30}>no labeller behind it</Wd>],
        ["no more made of mind than it is made of chariot stuff", 960, 770, <Wd c={GOLD} s={36} serif>no more made of mind than of chariot stuff</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MountainScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("But look for the mountain among the rocks");
  const edges = c("No mountain comes with its edges drawn by nature");
  const parts = ["rocks", "soil", "height", "tree line"];
  return (
    <AbsoluteFill>
      <Items items={[["The third place is the world", 960, 110, <K c={TEAL} s={32}>3 · the world, when no one is looking</K>, { pop: true }]]} />
      <At x={820} y={420} o={ramp(t, c("Take a mountain"), 0.5)}><Mountain w={640} p={ramp(t, c("Take a mountain"), 2)} /></At>
      <At x={820} y={420} o={ramp(t, edges, 0.5) * (1 - ramp(t, edges + 1.6, 0.6))}><Mountain w={660} p={1} dashed color={WARM} /></At>
      {parts.map((w, i) => (
        <At key={w} x={520 + i * 200} y={690} o={ramp(t, look + 0.6 + i * 0.4, 0.5)}><Chip color={CHALK} size={26}>{w}</Chip></At>
      ))}
      <Items items={[
        ["It reliably stops the climber", 1520, 280, <K c={GREEN} s={28}>it stops the climber</K>],
        ["It was there before anyone named it", 1520, 360, <Wd c={DIM} s={26}>there before it was named</Wd>],
        ["It is not among them, and not apart from them", 960, 780, <Wd c={CHALK} s={30}>not among them, not apart from them</Wd>],
        ["No mountain comes with its edges drawn by nature", 1520, 480, <SK c={WARM} s={26} at="No mountain comes with its edges drawn by nature" sd={1.2}>edges drawn by nature</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const CreaturesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cols: [string, string, React.ReactNode, string, string, string][] = [
    ["I see a bounded shape against the sky", "I", <Mountain w={200} p={1} />, "a bounded shape", "summit, slopes, base", CHALK],
    ["A bat, finding its way by echo", "a bat", <Echo />, "returning echo", "no clean edge", VIOLET],
    ["A bee, seeing in ultraviolet among flowers", "a bee", <Flowers />, "ultraviolet, flowers", "hardly one thing", GOLD],
    ["An ant takes a day to cross one boulder", "an ant", <Boulder />, "a day for one boulder", "never a mountain", WARM],
  ];
  const second: Record<string, string> = {
    "a bat": "with no clean edge where mountain stops", "a bee": "may hardly meet the mountain as one thing at all",
    "an ant": "and never meets a mountain",
  };
  return (
    <AbsoluteFill>
      <Items items={[
        ["Does a bat see a mountain", 960, 110, <Wd c={CHALK} s={42} serif>Does a bat see a mountain?</Wd>],
        ["A bee? An ant", 960, 180, <Wd c={DIM} s={30}>a bee? an ant?</Wd>],
      ]} />
      {cols.map(([cue, who, icon, l1, l2, col], i) => {
        const a = c(cue);
        const b = second[who] ? c(second[who]) : a + 1;
        const x = 330 + i * 420;
        return (
          <React.Fragment key={who}>
            <At x={x} y={310} o={ramp(t, a, 0.6)}>{icon}</At>
            <At x={x} y={420} o={ramp(t, a, 0.5)} s={pop(t, 30, a)}><Chip color={col} size={28}>{who}</Chip></At>
            <At x={x} y={485} o={ramp(t, a + 0.6, 0.5)}><Wd c={CHALK} s={24}>{l1}</Wd></At>
            <At x={x} y={530} o={ramp(t, b, 0.5)}><Wd c={DIM} s={24}>{l2}</Wd></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["This is not four creatures looking at one", 960, 640, <SK c={DIM} s={26} at="Body and world arise together">one finished mountain, four angles</SK>],
        ["Body and world arise together", 960, 730, <Wd c={GOLD} s={40} serif>Body and world arise together.</Wd>],
        ["A different body singles out a different world", 960, 810, <Wd c={DIM} s={28}>a different body, a different world</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ReplyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hidden = c("That reply slips in a mountain, finished before anything meets it");
  const gone = c("a featureless something cannot be what they all meet") + 1.5;
  return (
    <AbsoluteFill>
      <Items items={[
        ["The usual reply is that the mountain is there all the same", 960, 120, <Wd c={CHALK} s={40} serif>"The mountain is there all the same."</Wd>],
        ["and only the experiences differ", 960, 190, <Wd c={DIM} s={28}>"only the experiences differ"</Wd>],
      ]} />
      <At x={960} y={380} o={ramp(t, hidden, 0.6) * (1 - ramp(t, gone, 0.8))}><Mountain w={420} p={1} dashed color={WARM} /></At>
      <At x={960} y={380} o={ramp(t, hidden + 0.5, 0.6) * (1 - ramp(t, gone, 0.8))}><Wd c={WARM} s={60} serif>?</Wd></At>
      <Items items={[
        ["That reply slips in a mountain, finished before anything meets it", 960, 540, <K c={WARM} s={28}>a mountain finished before anything meets it</K>],
        ["If that hidden mountain has a summit and slopes", 520, 640, <Wd c={CHALK} s={28}>summit and slopes?</Wd>],
        ["why do the bat and the ant meet none of them", 520, 710, <Wd c={DIM} s={26}>then why do bat and ant meet none?</Wd>],
        ["If it has no features at all", 1400, 640, <Wd c={CHALK} s={28}>no features at all?</Wd>],
        ["a featureless something cannot be what they all meet", 1400, 710, <Wd c={DIM} s={26}>then not what they all meet</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MeasureScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const m = c("Metres and maps are a human channel of contact");
  const ticks = Array.from({ length: 11 }).map((_, i) => `M${560 + i * 80} 300 L${560 + i * 80} ${i % 5 === 0 ? 270 : 284}`).join(" ");
  return (
    <AbsoluteFill>
      <Items items={[["Nor is measuring a view from nowhere", 960, 120, <Wd c={CHALK} s={40} serif>Measuring is not a view from nowhere</Wd>]]} />
      <Svg><DrawPath d={`M560 300 L1360 300 ${ticks}`} p={ramp(t, m, 1.5)} color={ICE} width={3} len={1400} /></Svg>
      <Items items={[
        ["Metres and maps are a human channel of contact", 960, 220, <K c={ICE} s={28}>metres and maps: a human channel of contact</K>],
        ["When we agree on where the mountain is", 960, 390, <Wd c={CHALK} s={32}>we agree where the mountain is</Wd>],
        ["our bodies and instruments are alike", 960, 460, <K c={GREEN} s={28}>shows: bodies and instruments alike</K>],
        ["It does not show one mountain standing there by itself", 960, 540, <SK c={DIM} s={28} at="It does not show one mountain standing there by itself" sd={1}>shows: one mountain standing by itself</SK>],
        ["And the ant is not cut off", 960, 660, <Wd c={CHALK} s={32}>and the ant is not cut off</Wd>],
        ["A rockfall can crush it", 960, 740, <K c={ROSE} s={28}>a rockfall can crush it</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ClaimsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, when no one is looking, is the mountain there", 960, 110, <Wd c={CHALK} s={40} serif>When no one is looking, is the mountain there?</Wd>],
      ["Two claims sound almost the same, and are not", 960, 180, <Wd c={DIM} s={28}>two claims, almost the same, and not</Wd>],
      ["The mountain is still there when I look away and look back", 520, 300, <Box c={GREEN} w={620} ts={32} title="still there when I look back" />],
      ["That is true", 520, 410, <K c={GREEN} s={28}>true</K>, { pop: true }],
      ["It is checked the ordinary way", 520, 480, <Wd c={DIM} s={24}>checked: look again, others see it</Wd>],
      ["the road still there to drive on", 520, 530, <Wd c={DIM} s={24}>the road still there to drive on</Wd>],
      ["The mountain exists from its own side, whether or not anything ever meets it", 1400, 300, <Box c={WARM} w={620} ts={32} title="exists from its own side" />],
      ["That is a different claim", 1400, 410, <K c={WARM} s={28}>a different claim</K>, { pop: true }],
      ["Nothing has earned it", 1400, 480, <Wd c={DIM} s={24}>nothing has earned it</Wd>],
      ["because the first claim works so reliably", 1400, 530, <Wd c={DIM} s={24}>it slips in on the first one's reliability</Wd>],
      ["But reliability is not independence", 960, 640, <Wd c={GOLD} s={46} serif>Reliability is not independence.</Wd>],
      ["That line keeps me out of two mistakes", 960, 720, <Wd c={DIM} s={24}>two mistakes</Wd>],
      ["The mountain is an illusion, which no one is claiming", 520, 790, <SK c={DIM} s={26} at="The mountain is an illusion, which no one is claiming" sd={1}>an illusion</SK>],
      ["And the mountain exists on its own, which was never shown", 1400, 790, <SK c={DIM} s={26} at="And the mountain exists on its own, which was never shown" sd={1}>exists on its own</SK>],
    ]} />
  </AbsoluteFill>
);

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stay = c("And the apple is hard, the bell rings clear");
  const climb = c("and the mountain stops the climber");
  return (
    <AbsoluteFill>
      <Items items={[
        ["three hiding places turn out to be empty", 960, 120, <Wd c={GOLD} s={44} serif>Three hiding places, empty</Wd>],
        ["No floor under the parts", 480, 260, <SK c={DIM} s={28} at="No floor under the parts" sd={0.6}>a floor under the parts</SK>],
        ["No mind under everything", 960, 260, <SK c={DIM} s={28} at="No mind under everything" sd={0.6}>a mind under everything</SK>],
        ["No world standing there by itself", 1440, 260, <SK c={DIM} s={28} at="No world standing there by itself" sd={0.6}>a world by itself</SK>],
      ]} />
      <At x={480} y={470} o={ramp(t, stay, 0.6)}><Apple size={170} /></At>
      <At x={960} y={470} o={ramp(t, stay + 0.8, 0.6)}><Bell size={180} struck={t - stay - 0.8} /></At>
      <BellRings x={960} y={480} at={stay + 0.8} per={2} />
      <At x={1440} y={480} o={ramp(t, climb, 0.6)}><Mountain w={300} p={ramp(t, climb, 1.5)} /></At>
      <Items items={[
        ["And the apple is hard, the bell rings clear", 480, 640, <Wd c={GREEN} s={28}>the apple is hard</Wd>],
        ["And the apple is hard, the bell rings clear", 960, 640, <Wd c={GREEN} s={28}>the bell rings clear</Wd>, { d: 0.8 }],
        ["and the mountain stops the climber", 1440, 640, <Wd c={GREEN} s={28}>the mountain stops the climber</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const NextScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["But a question is still left", 960, 360, <Wd c={CHALK} s={46} serif>A question is still left</Wd>],
      ["hiding inside every question I have asked", 960, 440, <Wd c={DIM} s={30}>hiding inside every question I have asked</Wd>],
      ["That is the next video: Negation and Formation", 960, 580, <K c={GOLD} s={36}>Next: Negation and Formation</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["the chariot carried you to town", "dusk", <OpenScene />],
    ["The first place is under the parts", "search", <PartsScene />],
    ["The Buddhist tradition itself once set out to find that bottom layer", "deep", <DharmaScene />],
    ["Each was defined by its own mark", "doubt", <OwnMarkScene />],
    ["aims at exactly this", "search", <MarkScene />],
    ["with its own nature could not arise", "doubt", <NatureScene />],
    ["Take the hardness of an apple in my palm", "light", <AppleScene />],
    ["The second place is inside the mind", "deep", <BellScene />],
    ["When the producing cause falls away like this", "whole", <TingScene />],
    ["What tends to happen next is the trap", "night", <TrapScene />],
    ["Dependency is the way out", "jade", <WayOutScene />],
    ["The same trap waits in a", "doubt", <LabelScene />],
    ["The third place is the world", "dusk", <MountainScene />],
    ["Does a bat see a mountain", "light", <CreaturesScene />],
    ["The usual reply is that the mountain is there all the same", "doubt", <ReplyScene />],
    ["Nor is measuring a view from nowhere", "search", <MeasureScene />],
    ["So, when no one is looking, is the mountain there", "deep", <ClaimsScene />],
    ["three hiding places turn out to be empty", "whole", <EndScene />],
    ["But a question is still left", "night", <NextScene />],
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
