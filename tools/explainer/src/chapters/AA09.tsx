// After Anatta 9: Decoding Anatta and MMK Chapter 3 (remade 2026-10-29 from the owner's first-person rewrite of the page).
// Arc: Bahiya and chapter 3 seem opposed -> the second question: why dependent arising is spontaneous presence ->
// subject, verb, object; the wind blows -> Bahiya: no seer behind the tree; what falls away is the doer behind the doing ->
// insight drifts back -> Nagarjuna refutes the agent: seeing or not -> the verse read again -> here and there; neither
// here nor there -> the verse runs both ways: one appearing -> the same move in chapters 2, 10 and 1 -> my years of
// taste without the view -> the car: parts, whole, shape; empty and it drives -> the seeing, too -> not mind either:
// own clarity, weight and Mach, mind on the list -> two kinds of no -> the wind again, the car's sound, the thought:
// spontaneous presence -> effortless -> two cautions -> one appearing, two descriptions -> nothing taken away -> try it.
// Stance: emptiness is never drawn as a ground, field or container; spontaneous presence is never drawn as a source.
// Only invented things are struck: a seer behind, a doer behind the doing, a big awareness, a whole over the parts,
// mind as the stuff of everything, a Self or pure awareness put in the seer's place, a web of conditions behind,
// a source. The tree, the car, the colour, the fire and the wood stay vivid and working.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  SERIF, Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the puzzle
  "The Buddha told a wandering ascetic named Bahiya", "in the seen, there will be just the seen", "No one behind the eyes",
  "in chapter three of his Fundamental Verses", "without a seer, there is no seen", "And without the seen, there is no seer",
  "Many people are confused when they hear these two together", "The Buddha takes the seer away", "Nagarjuna seems to put it back",
  "There is none", "One is the direct insight", "The other is how the logic of dependency expresses",
  "This is After Anatta",
  // the second question
  "I want to make this as plain as I can", "It also answers a second question", "dependent arising is spontaneous presence",
  "they ask why", "It is the same answer, carried one step further",
  // subject, verb, object
  "Start with how we usually talk", "I see the tree", "There is someone here, the seer", "There is something there, the tree",
  "And there is an act that crosses the gap between them", "Subject, verb, object", "Three parts",
  "It is a fact about sentences", "Every action needs someone doing it",
  "This is the logic of substance", "Things are there first", "Then they act, and are acted on",
  // the wind
  "We say", "as if there were a wind first", "But when the blowing stops", "The blowing is the wind", "Keep this in mind",
  // Bahiya
  "Bahiya was told to drop that shape", "In seeing, just the seen", "There is the tree, vivid and bright",
  "Look for a seer standing behind it", "Simply none", "The seeing has no centre", "This is the insight of anatta",
  // what falls away
  "It is exact to say what falls away", "The person does not fall away", "Seeing does not stop", "It is brighter than before",
  "What falls away is one picture", "A doer behind the doing",
  // drifting back
  "But insight is not yet understanding", "keep the old grammar in their thinking", "a gap where it used to be",
  "big, impersonal awareness", "wearing a larger coat",
  // Nagarjuna's move
  "This is where Nagarjuna comes in", "He shows why the old grammar cannot hold",
  "an action must always be started by an agent", "Nagarjuna is refuting that", "Many think he is affirming it",
  "Watch how he argues", "is that seer seeing, or not", "If it is not seeing", "a seer in name only",
  "If it is seeing, then the seeing is counted twice", "and once more for the seeing it does",
  "So the seer is not found with seeing", "Then he turns to the seen", "Take seeing away, and nothing is left that is seen",
  // the verse again
  "Now read his verse again", "He is not saying", "He is saying the seer cannot stand on its own", "Neither can the seen",
  "Each is named only in relation to the other", "Take away the relation, and neither is left over",
  "That is not a seer put back", "It is the seer taken apart",
  // why just the seen
  "So how does", "Nagarjuna does not remove a seer that was there", "only ever a name for one side of the seeing",
  "Take away the colours, the shapes and the light", "Nothing", "adds nothing to the seeing",
  // here and there
  "Think of", "makes sense only in relation to", "and it is not a place you can stand",
  "The seer is like that", "the point the scene seems to be seen from", "There is just the view",
  "This is how the Buddha goes on", "there is no", "Then you are neither here, nor there, nor anywhere in between",
  "The Buddha says it from the direct taste", "Nagarjuna gives the logic for it",
  // both ways
  "And this is why the verse must run both ways", "is easy to misread", "an object out there left standing",
  "That is still the logic of substance, with one side missing", "But there is no seen without the seer either",
  "is the appearing itself, vivid and complete", "Seer, seeing and seen are three ways of speaking about one appearing",
  // depend does not join
  "So many readers get Nagarjuna backwards", "picture two solid things, joined by a thread",
  "It shows there were never two things there to join", "This is the logic of dependency",
  // the same move, on everything
  "Chapter three is not a special case", "Each time he takes something that seems to stand behind an action",
  "is it the same as the action, or other than it", "Each time it is found as neither",
  "The walker does not walk", "are not two things, one doing the other",
  "Fire is not a thing that arrives", "Wood is only fuel in relation to burning",
  "And chapter one goes furthest of all", "It takes the doer out of causes", "the way a factory makes goods",
  "So the two teachings meet", "Anatta finds no doer in seeing", "and it finds this by looking",
  "Nagarjuna finds no doer anywhere", "He finds this by reasoning",
  // my years
  "It did not happen by itself for me", "Anatta dawned around", "while my view was not",
  "In experience, the taste was implicitly", "because its logical thought was always substantial",
  "Insight without the logic drifts back into nouns", "a witness, a ground, a vast awareness",
  "Logic without insight stays a clever argument", "Only together do the view and the taste agree",
  // the car
  "We must understand why", "Take a car", "It could be the parts", "It could be a whole", "Or it could be their shape",
  "No single part is the car", "All the parts in a box are not a car", "Take every part away",
  "And the shape is only the parts in a certain relation", "Found in none of them, it has no nature of its own",
  "is what", "Not that the car is made of emptiness", "there is nothing there to find",
  "And still the car drives you home", "It never touched the car that works", "Looked for, it is not found",
  "Met, it is there, doing what cars do", "These are not two facts",
  "The seer is the same", "Then", "Apart from it", "Neither, so the seer is empty", "The seen gets the same test",
  "What is left is not a remainder", "It is the seeing, vivid and complete",
  // the seeing, too
  "There is one more step, and it is easy to miss", "Just seeing, then", "a verb can be made into a thing",
  "a stream, a process, a field", "It has only moved from the subject to the verb",
  "So the seeing, too, is looked for", "Apart from the colour, the light, the eye and the tree", "Not found",
  "Seer, seeing and seen are named together", "None is found on its own",
  // not mind either
  "There is one more place the mind likes to hide something", "appearances are one's own clarity",
  "The sound is not out there, heard by someone in here", "The sound itself is clear", "The taste is genuine",
  "everything is made of one stuff, and that stuff is mind",
  "The physical world can seem to point the same way", "Weight feels like the most private thing there is",
  "But weight is a pull between the body and the earth", "On the Moon it is a sixth", "In orbit it is gone",
  "Ernst Mach argued", "all the matter in the universe", "So where is the line between my body and the world",
  "Matter turns light, magical and plastic", "so it was all mind",
  "But in Buddhism everything is a phenomenon", "and the knowing is on that list too",
  "So mind cannot be the ground of the rest", "It is on the list, not under it",
  "There is no hearing apart from the sound, the ear and the attention",
  "Making matter the floor and making mind the floor are the same mistake",
  "does not mean owned", "not lent to it by a knower behind it", "is not made of mind",
  "If everything is my mind", "the owner is back in the largest coat of all",
  "Appearing is clear and complete, and it belongs to no one",
  // two kinds of no
  "Now the point everything depends on", "There are two ways to say no", "One way says no",
  "There is no small self, so there must be a big", "There is no seer, so there must be pure awareness",
  "the doer leaves by the front door and comes back by the back door",
  "is the other kind", "It removes, and adds nothing", "No seer, and nothing in the seer's place",
  "No producing cause, and nothing producing instead", "Even dependence is not kept as a new thing",
  "The conditions are not a web or a machine", "They, too, are not found from their own side",
  // spontaneous presence
  "Now go back to the wind", "the blowing is not being done", "It is simply the blowing, complete as it is",
  "Widen that to everything", "If nothing makes the sound of a car going by", "the sound is not a product",
  "It shows up whole and vivid, exactly as its conditions meet", "If nothing makes the thought",
  "No one has to hold it, or push it away",
  "That is what spontaneous presence means", "Appearing is already complete",
  "It is the last of the seven phases", "presence is spontaneously perfected",
  "Not a new state reached at the end", "Anatta is a seal, not a stage",
  // effortless
  "This is also why it is effortless", "especially in meditation", "There is an energetic openness and release",
  "in its own self so, without an actor", "holding, pushing and managing are the agent itself",
  "one happening split into two", "through a confusion that language and its structure lead us into",
  "there is no one left to push",
  // cautions
  "Two cautions keep this right", "Spontaneous does not mean uncaused", "The car still has to go by",
  "What is gone is the maker, not the order", "And spontaneous presence is not a source",
  "in its most beautiful coat",
  "So when I say that dependent arising is spontaneous presence", "They are one appearing, described in two ways",
  "is how it is described when we analyse", "is the same appearing when the habit of fixing stops",
  // clarity is never missing
  "One thing must be said plainly here", "You cannot talk about phenomena without clarity", "A sound is clear as sound",
  "A colour is vivid as colour", "A thought is known as it appears", "never a machine working in the dark",
  "The clarity is always there", "So the question is never whether there is clarity", "abstracted out and reified",
  "The mind notices this sameness and lifts it out", "the background that everything appears in",
  "the witness that knows it all", "the Mind that gives off appearances", "The substrate is back, now made of clarity",
  "Left as it is, the clarity is not lifted out", "It stays the appearing's own", "It is not a second thing the sound has",
  "The same lifting out, done to other things, is the same mistake", "Abstract the conditions", "Abstract the appearing",
  "Abstract emptiness", "It only stops it from being made into a thing", "When nothing is abstracted",
  "no maker, no knower, no background", "clear by itself and complete by itself",
  // nothing taken away
  "None of this takes anything away", "The tree is still green", "read road signs and catch a ball",
  "things can change, meet and work",
  // in one line
  "In one line", "anatta finds no doer in seeing", "and puts nothing in its place",
  "everything appears clear and complete, by itself, as its conditions meet",
  // try it
  "Try it now", "A colour, a car, a fan, a voice", "Then look for the one who is seeing or hearing", "Do not argue",
  "Now look for the seeing apart from what is seen", "Look for something that makes it happen",
  "Do not put anything in its place", "What is left is not a blank", "It is the scene, bright and whole",
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

/** A car going by (from AA01). */
const PassingCar: React.FC<{ size?: number; color?: string }> = ({ size = 220, color = GOLD }) => (
  <svg width={size} height={size * 0.45} viewBox="0 0 220 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}99)` }}>
    <path d="M12 70 L22 46 L66 40 L90 16 L150 16 L176 42 L206 48 L208 70 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M96 22 L146 22 L166 42 L84 42 Z" fill={`${color}18`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    {[56, 166].map(cx => (
      <g key={cx}>
        <circle cx={cx} cy={72} r={18} fill="#0008" stroke={color} strokeWidth={5} />
        <circle cx={cx} cy={72} r={5} fill={color} />
      </g>
    ))}
  </svg>
);

/** Wind lines blowing across; p 0..1 how far they have run. */
const WindLines: React.FC<{ x: number; y: number; at: number; w?: number; color?: string }> = ({ x, y, at, w = 520, color = ICE }) => {
  const { t } = useT();
  const k = ramp(t, at, 1.4);
  const drift = ((t - at) * 60) % 80;
  return (
    <Svg>
      {[0, 1, 2, 3].map(i => (
        <DrawPath key={i} d={`M${x - w / 2 + drift} ${y - 60 + i * 40} q${w / 4} -24 ${w / 2} 0 t${w / 2} 0`} p={k} color={color} width={4}
          len={w * 1.3} />
      ))}
    </Svg>
  );
};

/** Expanding sound rings. */
const Rings: React.FC<{ x: number; y: number; at: number; color?: string; dur?: number }> = ({ x, y, at, color = GOLD, dur = 6 }) => {
  const { t } = useT();
  if (t < at || t > at + dur + 1.5) return null;
  return (
    <Svg>
      {[0, 1, 2].map(i => {
        const p = ((t - at) / 1.8 + i / 3) % 1;
        const fade = 1 - ramp(t, at + dur, 1.2);
        return <circle key={i} cx={x} cy={y} r={40 + 220 * p} fill="none" stroke={color} strokeWidth={4} opacity={(1 - p) * 0.8 * fade} />;
      })}
    </Svg>
  );
};

const Box: React.FC<{ c: string; label: string; w?: number; dashed?: boolean }> = ({ c, label, w = 170, dashed }) => (
  <div style={{ width: w, height: 90, borderRadius: 12, border: `4px ${dashed ? "dashed" : "solid"} ${c}`, background: `${c}22`,
    display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 18px ${c}55` }}>
    <Glow color={CHALK} size={28}>{label}</Glow>
  </div>
);

// ---------------------------------------------------------------- scenes
const PuzzleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const conf = c("Many people are confused when they hear these two together");
  const none = c("There is none");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The Buddha told a wandering ascetic named Bahiya", 500, 150, <W c={GOLD} s={36} serif>the Buddha to Bahiya</W>],
        ["in the seen, there will be just the seen", 500, 300, <Tree size={170} glow={0.8} />, { pop: true }],
        ["in the seen, there will be just the seen", 500, 470, <W c={CHALK} s={34} serif>“in the seen, just the seen”</W>, { d: 0.4 }],
        ["No one behind the eyes", 500, 560, <SK c={DIM} s={26} strikeAt={c("No one behind the eyes") + 1.2}>a seer behind the eyes</SK>],
        ["in chapter three of his Fundamental Verses", 1420, 150, <W c={ICE} s={36} serif>Nagarjuna, chapter 3</W>],
        ["without a seer, there is no seen", 1420, 300, <W c={CHALK} s={30}>no seer → no seen</W>, { pop: true }],
        ["And without the seen, there is no seer", 1420, 380, <W c={CHALK} s={30}>no seen → no seer</W>, { pop: true }],
        ["Many people are confused when they hear these two together", 960, 380, <W c={WARM} s={70} serif>≠ ?</W>, { pop: true, until: "There is none" }],
        ["The Buddha takes the seer away", 500, 660, <W c={DIM} s={26}>the seer: taken away?</W>],
        ["Nagarjuna seems to put it back", 1420, 660, <W c={DIM} s={26}>the seer: put back?</W>],
        ["There is none", 960, 380, <W c={GOLD} s={70} serif>=</W>, { pop: true }],
        ["One is the direct insight", 500, 760, <K c={GOLD} s={28}>the direct insight</K>, { pop: true }],
        ["The other is how the logic of dependency expresses", 1420, 760, <K c={ICE} s={28}>the same insight, in the logic of dependency</K>, { pop: true }],
      ]} />
      <At x={1420} y={500} o={ramp(t, c("And without the seen, there is no seer") + 0.8, 0.5) * (1 - ramp(t, conf + 3, 0.5))}>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <Part c={TEAL} label="seer" /><W c={DIM} s={36}>⇄</W><Part c={GREEN} label="seen" />
        </div>
      </At>
      <At x={960} y={250} o={ramp(t, none + 0.4, 0.5)}><W c={GOLD} s={30} serif>no contradiction</W></At>
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

const QuestionScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("I want to make this as plain as I can")}>as plain as I can make it</Title>
      <Items items={[
        ["I want to make this as plain as I can", 960, 230, <W c={DIM} s={28}>everything after anatta turns on it</W>, { d: 1.6 }],
        ["It also answers a second question", 960, 340, <W c={ICE} s={32} serif>a second question</W>],
        ["dependent arising is spontaneous presence", 960, 460,
          <div style={{ display: "flex", gap: 26, alignItems: "center" }}><K c={ICE} s={34}>dependent arising</K><W c={GOLD} s={44}>=</W>
            <K c={GOLD} s={34}>spontaneous presence</K></div>, { pop: true }],
        ["they ask why", 960, 580, <W c={WARM} s={40} serif>why?</W>, { pop: true }],
        ["they ask why", 960, 660, <W c={DIM} s={28}>hard logic → something effortless?</W>, { d: 1.2 }],
        ["It is the same answer, carried one step further", 960, 760, <W c={GOLD} s={32} serif>the same answer, one step further</W>],
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

const WindScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const first = c("as if there were a wind first");
  const stops = c("But when the blowing stops");
  const is = c("The blowing is the wind");
  return (
    <AbsoluteFill>
      <Title at={c("We say")} color={ICE}>“the wind blows”</Title>
      <At x={560} y={420} o={ramp(t, first, 0.5) * (1 - ramp(t, stops + 1.5, 0.6))}><Box c={ICE} label="wind" dashed /></At>
      <At x={760} y={420} o={ramp(t, first + 1.2, 0.5) * (1 - ramp(t, stops + 1.5, 0.6))}><W c={DIM} s={30}>then →</W></At>
      <WindLines x={1200} y={420} at={first + 1.6} />
      <Items items={[
        ["But when the blowing stops", 960, 640, <W c={DIM} s={30}>the blowing stops: no wind left over, resting somewhere</W>,
          { until: "The blowing is the wind" }],
        ["The blowing is the wind", 960, 640, <W c={GOLD} s={42} serif>the blowing is the wind</W>, { pop: true }],
        ["Keep this in mind", 960, 740, <W c={DIM} s={26}>keep this in mind</W>],
      ]} />
      <Crossed x={560} y={420} at={stops + 0.8} size={50} />
      <At x={1200} y={300} o={ramp(t, is, 0.5)}><W c={ICE} s={28}>blowing</W></At>
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

const FallsAwayScene: React.FC = () => {
  const c = useCue();
  const doer = c("A doer behind the doing");
  return (
    <AbsoluteFill>
      <Title at={c("It is exact to say what falls away")}>what falls away</Title>
      <Items items={[
        ["The person does not fall away", 520, 300, <Person color={TEAL} size={170} />, { pop: true }],
        ["The person does not fall away", 520, 480, <W c={CHALK} s={26}>a name, the bus, promises kept</W>, { d: 1.2 }],
        ["Seeing does not stop", 1400, 300, <Eye size={170} />, { pop: true }],
        ["It is brighter than before", 1400, 480, <W c={GOLD} s={28}>brighter than before</W>],
        ["What falls away is one picture", 960, 600, <W c={DIM} s={30}>only one picture falls away:</W>],
        ["A doer behind the doing", 960, 700, <SK c={WARM} s={36} strikeAt={doer + 1.4}>a doer behind the doing</SK>, { pop: true }],
      ]} />
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
  const agent = c("an action must always be started by an agent");
  return (
    <AbsoluteFill>
      <Title at={c("This is where Nagarjuna comes in")} color={ICE}>Nagarjuna: take the grammar at its word</Title>
      <Items items={[
        ["He shows why the old grammar cannot hold", 960, 190, <W c={DIM} s={28}>not a new experience: why the old grammar cannot hold</W>,
          { until: "an action must always be started by an agent" }],
        ["an action must always be started by an agent", 960, 190, <SK c={WARM} s={30} strikeAt={c("Nagarjuna is refuting that") + 0.3}>every action started by an agent</SK>,
          { pop: true, until: "Watch how he argues" }],
        ["Many think he is affirming it", 960, 270, <W c={DIM} s={26}>refuted, not affirmed</W>, { until: "Watch how he argues" }],
        ["Watch how he argues", 960, 190, <K c={TEAL} s={32}>a seer, there on its own side</K>, { pop: true }],
        ["is that seer seeing, or not", 960, 270, <W c={CHALK} s={32} serif>seeing, or not?</W>],
        ["If it is not seeing", 520, 420, <K c={DIM} s={28}>not seeing</K>, { pop: true }],
        ["a seer in name only", 520, 520, <W c={WARM} s={28}>a seer in name only</W>],
        ["If it is seeing, then the seeing is counted twice", 1400, 420, <K c={GOLD} s={28}>seeing</K>, { pop: true }],
        ["If it is seeing, then the seeing is counted twice", 1400, 520, <W c={GOLD} s={28}>seeing ×1 makes it a seer</W>, { d: 1.6 }],
        ["and once more for the seeing it does", 1400, 580, <W c={WARM} s={28}>seeing ×2 for what it does</W>],
        ["So the seer is not found with seeing", 960, 700, <SK c={TEAL} s={30} strikeAt={c("So the seer is not found with seeing") + 1.8}>a seer, with seeing or without it</SK>, { pop: true }],
        ["Then he turns to the seen", 960, 790, <W c={DIM} s={26}>the seen: only “seen” in relation to seeing</W>],
      ]} />
      <Svg>
        <path d="M960 300 L560 380" stroke={DIM} strokeWidth={3} fill="none" opacity={ramp(t, q + 0.6, 0.6)} />
        <path d="M960 300 L1360 380" stroke={DIM} strokeWidth={3} fill="none" opacity={ramp(t, q + 0.6, 0.6)} />
      </Svg>
      <At x={960} y={110} o={0 * agent}><span /></At>
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

const JustSeenScene: React.FC = () => {
  const c = useCue();
  const take = c("Take away the colours, the shapes and the light");
  return (
    <AbsoluteFill>
      <Title at={c("So how does")}>how “no seer without the seen” becomes “just the seen”</Title>
      <Items items={[
        ["Nagarjuna does not remove a seer that was there", 960, 250, <W c={DIM} s={30}>not a seer removed, that was there</W>],
        ["only ever a name for one side of the seeing", 960, 340, <W c={ICE} s={32} serif>“seer”: a name for one side of the seeing</W>],
        ["Take away the colours, the shapes and the light", 560, 520, <Tree size={150} glow={0.8} />, { pop: true, until: "Nothing" }],
        ["Take away the colours, the shapes and the light", 1360, 520, <Person color={DIM} size={150} dashed />, { d: 1.4 }],
        ["Nothing", 1360, 700, <W c={DIM} s={30}>left over as the seer? nothing</W>],
        ["adds nothing to the seeing", 960, 790, <W c={GOLD} s={32} serif>“wind” adds nothing to the blowing · “seer” adds nothing to the seeing</W>],
      ]} />
      <At x={960} y={520} o={0 * take}><span /></At>
    </AbsoluteFill>
  );
};

const HereScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const view = c("There is just the view");
  const neither = c("Then you are neither here, nor there, nor anywhere in between");
  return (
    <AbsoluteFill>
      <Title at={c("Think of")}>“here” and “there”</Title>
      <Items items={[
        ["Think of", 560, 330, <K c={TEAL} s={40}>here</K>, { pop: true }],
        ["Think of", 1360, 330, <K c={GREEN} s={40}>there</K>, { pop: true, d: 0.5 }],
        ["makes sense only in relation to", 960, 330, <W c={DIM} s={36}>⇄</W>],
        ["and it is not a place you can stand", 560, 430, <W c={DIM} s={26}>here, by itself? not a place to stand</W>],
        ["The seer is like that", 560, 560, <Eye size={140} color={TEAL} />, { until: "There is just the view" }],
        ["the point the scene seems to be seen from", 560, 660, <W c={DIM} s={26}>the point it seems seen from</W>, { until: "There is just the view" }],
        ["There is just the view", 1100, 600, <Tree size={200} glow={1} />, { pop: true }],
        ["There is just the view", 1100, 790, <W c={GOLD} s={34} serif>just the view</W>, { d: 0.6, until: "This is how the Buddha goes on" }],
        ["This is how the Buddha goes on", 960, 200, <W c={GOLD} s={30}>the Buddha to Bahiya, going on:</W>],
        ["Then you are neither here, nor there, nor anywhere in between", 960, 790, <W c={CHALK} s={32} serif>neither here, nor there, nor in between</W>],
        ["The Buddha says it from the direct taste", 1500, 450, <K c={GOLD} s={26}>the Buddha: the taste</K>, { pop: true }],
        ["Nagarjuna gives the logic for it", 1500, 530, <K c={ICE} s={26}>Nagarjuna: the logic</K>, { pop: true }],
      ]} />
      <Crossed x={560} y={560} at={view - 0.4} size={45} />
      <At x={960} y={420} o={ramp(t, neither + 1, 0.5) * 0}><span /></At>
    </AbsoluteFill>
  );
};

const BothWaysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const out = c("an object out there left standing");
  const either = c("But there is no seen without the seer either");
  const one = c("Seer, seeing and seen are three ways of speaking about one appearing");
  return (
    <AbsoluteFill>
      <Title at={c("And this is why the verse must run both ways")}>the verse runs both ways</Title>
      <Items items={[
        ["is easy to misread", 960, 230, <W c={DIM} s={30}>“just the seen”, misread:</W>],
        ["an object out there left standing", 1300, 420, <Box c={GREEN} label="an object out there" w={300} />, { pop: true, until: "is the appearing itself, vivid and complete" }],
        ["That is still the logic of substance, with one side missing", 960, 600, <W c={WARM} s={28}>still substance, one side missing</W>,
          { until: "is the appearing itself, vivid and complete" }],
        ["is the appearing itself, vivid and complete", 960, 420, <Tree size={220} glow={1} />, { pop: true }],
        ["is the appearing itself, vivid and complete", 960, 620, <W c={GOLD} s={34} serif>the appearing itself, vivid and complete</W>, { d: 0.4 }],
        ["Seer, seeing and seen are three ways of speaking about one appearing", 960, 760,
          <div style={{ display: "flex", gap: 22 }}><Part c={TEAL} label="seer" /><Part c={GOLD} label="seeing" /><Part c={GREEN} label="seen" />
            <W c={CHALK} s={30}>: one appearing</W></div>, { pop: true }],
      ]} />
      <At x={600} y={420} o={ramp(t, out + 0.5, 0.5) * (1 - ramp(t, either, 0.5))}><Person color={DIM} size={150} dashed /></At>
      <Crossed x={600} y={420} at={out + 0.8} size={45} />
      <Crossed x={1300} y={420} at={either + 0.8} size={45} />
      <At x={0} y={0} o={0 * one}><span /></At>
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
        ["It shows there were never two things there to join", 960, 500, <W c={GOLD} s={34} serif>never two things there to join</W>],
        ["This is the logic of dependency", 960, 620, <K c={GOLD} s={32}>the logic of dependency</K>, { pop: true }],
      ]} />
      <Svg>
        <path d="M700 330 Q960 280 1220 330" fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="8 7"
          opacity={ramp(t, thread + 0.8, 0.5) * (1 - ramp(t, never + 1.6, 0.6))} />
      </Svg>
      <Crossed x={960} y={320} at={never + 0.4} size={50} />
    </AbsoluteFill>
  );
};

const SameMoveScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const walk = c("The walker does not walk");
  const fire = c("Fire is not a thing that arrives");
  const one = c("And chapter one goes furthest of all");
  const meet = c("So the two teachings meet");
  const row = (at: number) => ramp(t, at, 0.5) * (1 - ramp(t, meet, 0.5));
  return (
    <AbsoluteFill>
      <Title at={c("Chapter three is not a special case")}>the same move, on everything</Title>
      <Items items={[
        ["Each time he takes something that seems to stand behind an action", 960, 190, <W c={DIM} s={28}>something that seems to stand behind an action</W>,
          { until: "So the two teachings meet" }],
        ["is it the same as the action, or other than it", 960, 250, <W c={CHALK} s={30} serif>the same as the action, or other than it?</W>,
          { until: "So the two teachings meet" }],
        ["Each time it is found as neither", 960, 310, <W c={GOLD} s={30}>found as neither</W>, { until: "So the two teachings meet" }],
        ["So the two teachings meet", 960, 200, <W c={GOLD} s={40} serif>the two teachings meet</W>],
        ["Anatta finds no doer in seeing", 520, 380, <K c={GOLD} s={30}>anatta: no doer in seeing</K>, { pop: true }],
        ["and it finds this by looking", 520, 460, <W c={DIM} s={26}>by looking</W>],
        ["Nagarjuna finds no doer anywhere", 1400, 380, <K c={ICE} s={30}>Nagarjuna: no doer anywhere</K>, { pop: true }],
        ["He finds this by reasoning", 1400, 460, <W c={DIM} s={26}>by reasoning, carried to every thing</W>],
        ["So the two teachings meet", 960, 620,
          <div style={{ display: "flex", gap: 40, alignItems: "center" }}><Walker /><FireWood size={130} /><PassingCar size={150} /><Eye size={120} /></div>,
          { d: 1.0 }],
      ]} />
      <At x={360} y={480} o={row(walk)}><Walker step={(t - walk) * 6} /></At>
      <At x={360} y={620} o={row(walk + 0.6)}><W c={TEAL} s={26}>ch. 2: walker, walking</W></At>
      <At x={360} y={700} o={row(walk + 1.2)}><W c={DIM} s={24}>not two things, one doing the other</W></At>
      <At x={960} y={470} o={row(fire)}><FireWood size={180} /></At>
      <At x={960} y={620} o={row(fire + 0.6)}><W c={WARM} s={26}>ch. 10: fire, fuel</W></At>
      <At x={960} y={700} o={row(c("Wood is only fuel in relation to burning"))}><W c={DIM} s={24}>fuel only to burning; fire only to fuel</W></At>
      <At x={1560} y={470} o={row(one)}><Box c={VIOLET} label="cause" w={150} /></At>
      <At x={1560} y={620} o={row(one + 0.6)}><W c={VIOLET} s={26}>ch. 1: the cause</W></At>
      <At x={1560} y={700} o={row(c("the way a factory makes goods"))}><SK c={DIM} s={22} strikeAt={c("the way a factory makes goods") + 1.4}>a factory making goods</SK></At>
    </AbsoluteFill>
  );
};

const YearsScene: React.FC = () => {
  const c = useCue();
  const vast = c("a witness, a ground, a vast awareness");
  return (
    <AbsoluteFill>
      <Title at={c("It did not happen by itself for me")} color={GOLD}>it did not happen by itself</Title>
      <Items items={[
        ["Anatta dawned around", 520, 250, <K c={GOLD} s={34}>1997 · anatta</K>, { pop: true }],
        ["while my view was not", 1400, 250, <K c={WARM} s={30}>the view: still substantial</K>, { pop: true }],
        ["In experience, the taste was implicitly", 520, 340, <W c={CHALK} s={26}>taste: implicitly non-dual</W>],
        ["because its logical thought was always substantial", 1400, 340, <W c={DIM} s={26}>thought: always substantial</W>],
        ["Insight without the logic drifts back into nouns", 520, 500, <W c={DIM} s={26}>insight alone: drifts back into nouns</W>],
        ["a witness, a ground, a vast awareness", 340, 590, <SK c={VIOLET} s={24} strikeAt={vast + 2.0}>a witness</SK>],
        ["a witness, a ground, a vast awareness", 520, 590, <SK c={VIOLET} s={24} strikeAt={vast + 2.2}>a ground</SK>, { d: 0.4 }],
        ["a witness, a ground, a vast awareness", 720, 590, <SK c={VIOLET} s={24} strikeAt={vast + 2.4}>a vast awareness</SK>, { d: 0.8 }],
        ["Logic without insight stays a clever argument", 1400, 500, <W c={DIM} s={26}>logic alone: a clever argument</W>],
        ["Only together do the view and the taste agree", 960, 760, <W c={GOLD} s={38} serif>only together: view and taste agree</W>],
      ]} />
    </AbsoluteFill>
  );
};

const CarScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const parts = c("It could be the parts");
  const whole = c("It could be a whole");
  const shape = c("Or it could be their shape");
  const drives = c("And still the car drives you home");
  const seer = c("The seer is the same");
  const pre = (at: number) => ramp(t, at, 0.5) * (1 - ramp(t, drives, 0.5));
  return (
    <AbsoluteFill>
      <Title at={c("We must understand why")}>why “found as neither” is emptiness</Title>
      <At x={960} y={230} o={ramp(t, c("Take a car"), 0.5) * (1 - ramp(t, seer, 0.5))}><PassingCar size={260} /></At>
      <At x={480} y={420} o={pre(parts)}><Box c={TEAL} label="the parts" /></At>
      <At x={960} y={420} o={pre(whole)}><Box c={VIOLET} label="a whole" dashed /></At>
      <At x={1440} y={420} o={pre(shape)}><Box c={GOLD} label="their shape" /></At>
      <div style={{ position: "absolute", inset: 0, opacity: 1 - ramp(t, drives, 0.5) }}>
        <Crossed x={480} y={420} at={c("All the parts in a box are not a car") + 0.6} size={45} />
        <Crossed x={960} y={420} at={c("Take every part away") + 1.0} size={45} />
        <Crossed x={1440} y={420} at={c("And the shape is only the parts in a certain relation") + 1.4} size={45} />
      </div>
      <Items items={[
        ["No single part is the car", 480, 520, <W c={DIM} s={24}>not the wheel, not the engine</W>, { until: "And still the car drives you home" }],
        ["Found in none of them, it has no nature of its own", 960, 600, <W c={CHALK} s={30}>found in none: no nature of its own</W>,
          { until: "And still the car drives you home" }],
        ["is what", 960, 680, <W c={GOLD} s={34} serif>that not-finding is “empty”</W>, { until: "And still the car drives you home" }],
        ["Not that the car is made of emptiness", 960, 760, <SK c={DIM} s={26} strikeAt={c("Not that the car is made of emptiness") + 1.4}>a car made of emptiness</SK>,
          { until: "And still the car drives you home" }],
        ["And still the car drives you home", 960, 450, <W c={GOLD} s={40} serif>and still it drives you home</W>, { until: "The seer is the same" }],
        ["Looked for, it is not found", 640, 560, <W c={DIM} s={30}>looked for: not found</W>, { until: "The seer is the same" }],
        ["Met, it is there, doing what cars do", 1280, 560, <W c={CHALK} s={30}>met: there, working</W>, { until: "The seer is the same" }],
        ["These are not two facts", 960, 660, <W c={GOLD} s={30}>not two facts</W>, { until: "The seer is the same" }],
        ["The seer is the same", 960, 300, <Part c={TEAL} label="seer" s={38} />, { pop: true }],
        ["Then", 560, 420, <W c={DIM} s={26}>same as the seeing? adds nothing</W>],
        ["Apart from it", 1360, 420, <W c={DIM} s={26}>apart from it? nowhere</W>],
        ["Neither, so the seer is empty", 960, 520, <W c={CHALK} s={32} serif>neither: empty</W>],
        ["The seen gets the same test", 960, 600, <W c={DIM} s={26}>the seen: the same test</W>],
        ["It is the seeing, vivid and complete", 960, 720, <W c={GOLD} s={36} serif>not a remainder: the seeing, vivid and complete</W>],
      ]} />
      <Svg>
        <path d="M580 230 L880 230" stroke={ICE} strokeWidth={3} opacity={ramp(t, drives + 0.5, 0.5) * (1 - ramp(t, seer, 0.5)) * 0.6}
          strokeDasharray="10 8" />
      </Svg>
    </AbsoluteFill>
  );
};

const VerbScene: React.FC = () => {
  const c = useCue();
  const field = c("a stream, a process, a field");
  return (
    <AbsoluteFill>
      <Title at={c("There is one more step, and it is easy to miss")} color={ICE}>one more step</Title>
      <Items items={[
        ["Just seeing, then", 960, 230, <K c={GOLD} s={38}>“just seeing”</K>, { pop: true }],
        ["a verb can be made into a thing", 960, 330, <W c={DIM} s={28}>a verb can be made into a thing, as easily as a noun</W>],
        ["a stream, a process, a field", 600, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.2}>a stream</SK>, { pop: true }],
        ["a stream, a process, a field", 960, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.4}>a process</SK>, { pop: true, d: 0.4 }],
        ["a stream, a process, a field", 1320, 440, <SK c={VIOLET} s={28} strikeAt={field + 2.6}>a field things happen in</SK>, { pop: true, d: 0.8 }],
        ["It has only moved from the subject to the verb", 960, 540, <W c={WARM} s={28}>substance, moved from the subject to the verb</W>],
        ["So the seeing, too, is looked for", 960, 640, <W c={CHALK} s={30}>the seeing, too, is looked for</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NamedScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Apart from the colour, the light, the eye and the tree")}>apart from the colour, the light, the eye, the tree?</Title>
      <Items items={[
        ["Apart from the colour, the light, the eye and the tree", 1500, 300, <Eye size={120} />, { d: 1.6 }],
        ["Apart from the colour, the light, the eye and the tree", 420, 320, <Tree size={110} glow={0.6} />, { d: 2.2 }],
        ["Not found", 960, 300, <W c={DIM} s={32}>not found</W>],
        ["Seer, seeing and seen are named together", 960, 480,
          <div style={{ display: "flex", gap: 22 }}><Part c={TEAL} label="seer" /><Part c={GOLD} label="seeing" /><Part c={GREEN} label="seen" /></div>,
          { pop: true }],
        ["Seer, seeing and seen are named together", 960, 570, <W c={CHALK} s={28}>named together, on conditions</W>, { d: 1.2 }],
        ["None is found on its own", 960, 650, <W c={DIM} s={28}>none is found on its own</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const c = useCue();
  const stuff = c("everything is made of one stuff, and that stuff is mind");
  return (
    <AbsoluteFill>
      <Title at={c("There is one more place the mind likes to hide something")} color={VIOLET}>not mind either</Title>
      <Items items={[
        ["appearances are one's own clarity", 960, 220, <W c={CHALK} s={32} serif>the taste: appearances are one's own clarity</W>],
        ["The sound is not out there, heard by someone in here", 960, 420, <PassingCar size={200} />, { pop: true }],
        ["The sound itself is clear", 960, 560, <W c={GOLD} s={30}>the sound itself is clear, itself the knowing</W>],
        ["The taste is genuine", 960, 640, <K c={GREEN} s={28}>genuine</K>, { pop: true }],
        ["everything is made of one stuff, and that stuff is mind", 960, 760,
          <SK c={VIOLET} s={30} strikeAt={stuff + 3.2}>so everything is made of mind</SK>, { pop: true }],
      ]} />
      <Rings x={960} y={420} at={c("The sound is not out there, heard by someone in here") + 0.6} dur={8} />
    </AbsoluteFill>
  );
};

const WeightScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const pull = c("But weight is a pull between the body and the earth");
  const moon = c("On the Moon it is a sixth");
  const orbit = c("In orbit it is gone");
  const mach = c("Ernst Mach argued");
  const kg = moon > t ? 1 : orbit > t ? 1 / 6 : 0;
  return (
    <AbsoluteFill>
      <Title at={c("The physical world can seem to point the same way")}>weight</Title>
      <Items items={[
        ["Weight feels like the most private thing there is", 480, 420, <Person color={TEAL} size={190} />, { pop: true }],
        ["Weight feels like the most private thing there is", 480, 600, <W c={DIM} s={26}>like a stone in a pocket</W>, { d: 1.4, until: "But weight is a pull between the body and the earth" }],
        ["But weight is a pull between the body and the earth", 480, 640,
          <div style={{ width: 360, height: 90, borderRadius: "50% 50% 0 0", border: `4px solid ${GREEN}`, borderBottom: "none", background: `${GREEN}22` }} />],
        ["But weight is a pull between the body and the earth", 480, 720, <W c={GREEN} s={26}>earth</W>, { d: 0.6 }],
        ["all the matter in the universe", 1400, 420, <W c={ICE} s={28}>the universe</W>],
        ["So where is the line between my body and the world", 960, 220, <W c={CHALK} s={32} serif>where is the line, in the heaviness itself?</W>],
        ["Matter turns light, magical and plastic", 1400, 640, <W c={GOLD} s={32} serif>light, magical, plastic</W>],
        ["so it was all mind", 1400, 740, <SK c={VIOLET} s={28} strikeAt={c("so it was all mind") + 1.4}>so it was all mind</SK>, { pop: true }],
      ]} />
      <At x={480} y={300} o={ramp(t, pull, 0.5) * (1 - ramp(t, mach, 0.5))}>
        <W c={WARM} s={36}>{kg === 1 ? "60 kg" : kg > 0 ? "10 kg · on the Moon" : "0 · in orbit"}</W>
      </At>
      <Svg>
        <path d="M480 520 L480 600" stroke={WARM} strokeWidth={5} opacity={ramp(t, pull + 0.4, 0.5) * (1 - ramp(t, orbit, 0.5))} />
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          const a = (i / 8) * Math.PI * 2;
          return <line key={i} x1={480} y1={420} x2={480 + Math.cos(a) * 900} y2={420 + Math.sin(a) * 500} stroke={ICE} strokeWidth={2}
            strokeDasharray="6 10" opacity={ramp(t, mach + 0.8, 1.2) * 0.45} />;
        })}
      </Svg>
    </AbsoluteFill>
  );
};

const ListScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const list = c("But in Buddhism everything is a phenomenon");
  const knowing = c("and the knowing is on that list too");
  const floor = c("Making matter the floor and making mind the floor are the same mistake");
  const items = ["sound", "colour", "weight", "thought", "feeling", "knowing"];
  return (
    <AbsoluteFill>
      <Title at={list}>everything a phenomenon, mind and matter alike</Title>
      {items.map((w, i) => (
        <At key={w} x={340 + i * 248} y={260} o={ramp(t, (w === "knowing" ? knowing : list + 0.3 * i), 0.5)} s={w === "knowing" ? pop(t, 30, knowing) : undefined}>
          <K c={w === "knowing" ? VIOLET : GOLD} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["So mind cannot be the ground of the rest", 960, 400, <SK c={VIOLET} s={30} strikeAt={c("It is on the list, not under it") + 0.4}>mind under the list, as its ground</SK>, { pop: true }],
        ["It is on the list, not under it", 960, 480, <W c={CHALK} s={30}>on the list, not under it</W>],
        ["There is no hearing apart from the sound, the ear and the attention", 960, 560, <W c={DIM} s={26}>no hearing apart from the sound, the ear, the attention</W>],
        ["Making matter the floor and making mind the floor are the same mistake", 960, 640, <W c={WARM} s={30}>matter as floor, mind as floor: the same mistake</W>,
          { until: "does not mean owned" }],
        ["does not mean owned", 960, 640, <W c={GOLD} s={30}>“own clarity”: the appearance's own, not owned</W>, { until: "If everything is my mind" }],
        ["is not made of mind", 960, 720, <W c={CHALK} s={30} serif>mind-like is not made of mind</W>, { until: "If everything is my mind" }],
        ["If everything is my mind", 960, 640, <SK c={VIOLET} s={28} strikeAt={c("the owner is back in the largest coat of all") + 1.2}>an owner, in the largest coat of all</SK>],
        ["Appearing is clear and complete, and it belongs to no one", 960, 760, <W c={GOLD} s={36} serif>clear, complete, belonging to no one</W>],
      ]} />
      <At x={0} y={0} o={0 * floor}><span /></At>
    </AbsoluteFill>
  );
};

const TwoNoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const back = c("the doer leaves by the front door and comes back by the back door");
  const other = c("is the other kind");
  return (
    <AbsoluteFill>
      <Title at={c("Now the point everything depends on")} color={GOLD}>the point everything depends on</Title>
      <Items items={[
        ["There are two ways to say no", 960, 200, <W c={CHALK} s={34} serif>two ways to say no</W>],
        ["One way says no", 520, 290, <K c={WARM} s={28}>no, and something in its place</K>, { pop: true }],
        ["There is no small self, so there must be a big", 520, 380, <SK c={DIM} s={24} strikeAt={other}>no small self → a big Self</SK>],
        ["There is no seer, so there must be pure awareness", 520, 450, <SK c={DIM} s={24} strikeAt={other + 0.2}>no seer → pure awareness</SK>],
        ["the doer leaves by the front door and comes back by the back door", 520, 560, <W c={WARM} s={24}>out the front door, back by the back door</W>],
        ["is the other kind", 1400, 290, <K c={GOLD} s={28}>Nagarjuna's no: nothing in its place</K>, { pop: true }],
        ["It removes, and adds nothing", 1400, 380, <W c={CHALK} s={26}>removes, adds nothing</W>],
        ["No seer, and nothing in the seer's place", 1400, 450, <W c={CHALK} s={26}>no seer · nothing in its place</W>],
        ["No producing cause, and nothing producing instead", 1400, 520, <W c={CHALK} s={26}>no producing cause · nothing producing instead</W>],
        ["Even dependence is not kept as a new thing", 1400, 590, <W c={DIM} s={26}>not even dependence, kept as a thing</W>],
        ["The conditions are not a web or a machine", 1400, 680, <SK c={VIOLET} s={24} strikeAt={c("They, too, are not found from their own side")}>a web of conditions behind it</SK>],
        ["They, too, are not found from their own side", 1400, 760, <W c={GOLD} s={26}>conditions, too: not found from their own side</W>],
      ]} />
      <Svg>
        <path d="M300 640 L420 640 M620 640 L740 640" stroke={WARM} strokeWidth={4} opacity={ramp(t, back + 1, 0.5) * 0.7} strokeDasharray="8 6" />
      </Svg>
    </AbsoluteFill>
  );
};

const SpontScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wind = c("Now go back to the wind");
  const car = c("If nothing makes the sound of a car going by");
  const thought = c("If nothing makes the thought");
  const sp = c("That is what spontaneous presence means");
  return (
    <AbsoluteFill>
      <Title at={wind} color={ICE}>the wind once more</Title>
      <At x={960} y={200} o={ramp(t, sp, 0.5)}><W c={GOLD} s={44} serif>spontaneous presence</W></At>
      <At x={400} y={0} o={1 - ramp(t, sp, 0.5)}><span /></At>
      <WindLines x={420} y={420} at={wind + 0.5} w={420} />
      <Items items={[
        ["the blowing is not being done", 420, 560, <W c={DIM} s={24}>not being done</W>, { until: "That is what spontaneous presence means" }],
        ["It is simply the blowing, complete as it is", 420, 620, <W c={ICE} s={26}>the blowing, complete as it is</W>, { until: "That is what spontaneous presence means" }],
        ["If nothing makes the sound of a car going by", 960, 420, <PassingCar size={200} />, { pop: true, until: "That is what spontaneous presence means" }],
        ["the sound is not a product", 960, 560, <W c={DIM} s={24}>not a product</W>, { until: "That is what spontaneous presence means" }],
        ["It shows up whole and vivid, exactly as its conditions meet", 960, 620, <W c={GOLD} s={26}>whole, as its conditions meet</W>, { until: "That is what spontaneous presence means" }],
        ["If nothing makes the thought", 1500, 420,
          <div style={{ width: 200, height: 120, borderRadius: 60, border: `4px solid ${VIOLET}`, background: `${VIOLET}22` }} />, { pop: true, until: "That is what spontaneous presence means" }],
        ["No one has to hold it, or push it away", 1500, 600, <W c={VIOLET} s={24}>appears and goes by itself</W>, { until: "That is what spontaneous presence means" }],
        ["Appearing is already complete", 960, 330, <W c={CHALK} s={32}>appearing, already complete: nothing behind it, doing it</W>],
        ["It is the last of the seven phases", 960, 430, <K c={GOLD} s={30}>phase 7</K>, { pop: true }],
        ["presence is spontaneously perfected", 960, 520, <W c={GOLD} s={32} serif>presence is spontaneously perfected</W>],
        ["Not a new state reached at the end", 960, 620, <W c={DIM} s={28}>not a new state: how it always was, the doer gone everywhere</W>],
        ["Anatta is a seal, not a stage", 960, 740, <W c={CHALK} s={38} serif>anatta is a seal, not a stage</W>],
      ]} />
      <Rings x={960} y={420} at={car + 0.6} dur={Math.max(1, thought - car)} />
    </AbsoluteFill>
  );
};

const EffortScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const open = c("There is an energetic openness and release");
  const split = c("one happening split into two");
  const none = c("there is no one left to push");
  const sep = ramp(t, split, 1.0) * (1 - ramp(t, none, 1.2));
  return (
    <AbsoluteFill>
      <Title at={c("This is also why it is effortless")} color={GOLD}>effortless</Title>
      <Items items={[
        ["especially in meditation", 960, 220, <W c={DIM} s={28}>not difficult to see, especially in meditation</W>],
        ["in its own self so, without an actor", 960, 330, <W c={GOLD} s={34} serif>“in its own self so”, without an actor</W>],
        ["holding, pushing and managing are the agent itself", 960, 430, <W c={CHALK} s={30}>holding, pushing, managing: the agent itself</W>],
        ["through a confusion that language and its structure lead us into", 960, 760, <W c={DIM} s={26}>split by language and its structure</W>,
          { until: "there is no one left to push" }],
        ["there is no one left to push", 960, 760, <W c={GOLD} s={34} serif>no one left to push</W>],
      ]} />
      <At x={960} y={600} o={ramp(t, open, 1.0)}>
        <div style={{ width: 160 + 220 * ramp(t, open, 3), height: 160 + 220 * ramp(t, open, 3), borderRadius: "50%",
          background: `radial-gradient(${GOLD}55, ${GOLD}00 70%)` }} />
      </At>
      <At x={960 - 150 * sep} y={600} o={ramp(t, split, 0.5)}><K c={TEAL} s={28}>doer</K></At>
      <At x={960 + 150 * sep} y={600} o={ramp(t, split, 0.5)}><K c={GOLD} s={28}>doing</K></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Two cautions keep this right")}>two cautions</Title>
      <Items items={[
        ["Spontaneous does not mean uncaused", 520, 260, <K c={GOLD} s={30}>not uncaused</K>, { pop: true }],
        ["The car still has to go by", 520, 380, <PassingCar size={180} />, { pop: true }],
        ["What is gone is the maker, not the order", 520, 500, <W c={CHALK} s={28}>the maker gone, not the order</W>],
        ["And spontaneous presence is not a source", 1400, 260, <K c={GOLD} s={30}>not a source</K>, { pop: true }],
        ["And spontaneous presence is not a source", 1400, 380, <SK c={VIOLET} s={26} strikeAt={c("in its most beautiful coat") + 0.8}>a ground giving off appearances</SK>, { d: 0.8 }],
        ["in its most beautiful coat", 1400, 470, <W c={DIM} s={24}>the doer, in its most beautiful coat</W>],
        ["They are one appearing, described in two ways", 960, 620, <W c={CHALK} s={34} serif>one appearing, described two ways</W>],
        ["is how it is described when we analyse", 560, 720, <K c={ICE} s={26}>analysed: dependent arising</K>, { pop: true }],
        ["is the same appearing when the habit of fixing stops", 1360, 720, <K c={GOLD} s={26}>fixing stopped: spontaneous presence</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

/** Clarity is never missing (owner, 2026-10-29): only whether it is abstracted out and reified. */
const ClearScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lift = c("The mind notices this sameness and lifts it out");
  const back = c("The substrate is back, now made of clarity");
  const left = c("Left as it is, the clarity is not lifted out");
  const same = c("The same lifting out, done to other things, is the same mistake");
  const none = c("When nothing is abstracted");
  // three appearings, each clear; then one "clarity" is lifted out above them, and put back
  const up = ramp(t, lift, 1.4) * (1 - ramp(t, left, 0.8));
  const ghostO = ramp(t, lift + 0.6, 0.6) * (1 - ramp(t, left, 0.6));
  const row = Math.min(1, (1 - ramp(t, same, 0.5)) + ramp(t, none, 0.6));
  const glow = 0.5 + 0.5 * ramp(t, left, 0.8);
  return (
    <AbsoluteFill>
      <Title at={c("One thing must be said plainly here")} color={GOLD}>clarity is never missing</Title>
      <At x={420} y={600} o={row * ramp(t, c("A sound is clear as sound"), 0.5)}><PassingCar size={190} /></At>
      <At x={960} y={600} o={row * ramp(t, c("A colour is vivid as colour"), 0.5)}><Tree size={150} glow={glow} /></At>
      <At x={1500} y={600} o={row * ramp(t, c("A thought is known as it appears"), 0.5)}>
        <div style={{ width: 190, height: 110, borderRadius: 55, border: `4px solid ${VIOLET}`, background: `${VIOLET}${glow > 0.8 ? "44" : "22"}`,
          boxShadow: `0 0 ${20 * glow}px ${VIOLET}` }} />
      </At>
      <At x={960} y={420 - 30 * up} o={ghostO} s={0.6 + 0.35 * up}>
        <div style={{ width: 560, height: 180, borderRadius: 90, border: `4px dashed ${VIOLET}`, background: `${VIOLET}18`,
          display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${VIOLET}55` }}>
          <Glow color={VIOLET} size={30}>“awareness, presence”</Glow>
        </div>
      </At>
      <Items items={[
        ["You cannot talk about phenomena without clarity", 960, 220, <W c={CHALK} s={32} serif>no phenomena without clarity</W>, { until: "So the question is never whether there is clarity" }],
        ["never a machine working in the dark", 960, 330, <SK c={DIM} s={26} strikeAt={c("The clarity is always there") - 0.2}>a machine in the dark, waiting for a knower</SK>, { until: "So the question is never whether there is clarity" }],
        ["The clarity is always there", 960, 420, <W c={GOLD} s={34} serif>the clarity is always there</W>, { until: "So the question is never whether there is clarity" }],
        ["So the question is never whether there is clarity", 960, 200, <W c={CHALK} s={30}>not whether there is clarity, but whether it is</W>, { until: "Left as it is, the clarity is not lifted out" }],
        ["abstracted out and reified", 960, 790, <W c={WARM} s={32} serif>abstracted out and reified</W>, { until: "the background that everything appears in" }],
        ["the background that everything appears in", 330, 400, <SK c={VIOLET} s={24} strikeAt={back + 1.0}>a background</SK>, { until: "Left as it is, the clarity is not lifted out" }],
        ["the witness that knows it all", 1590, 360, <SK c={VIOLET} s={24} strikeAt={back + 1.2}>a witness</SK>, { until: "Left as it is, the clarity is not lifted out" }],
        ["the Mind that gives off appearances", 1590, 430, <SK c={VIOLET} s={24} strikeAt={back + 1.4}>a Mind giving off appearances</SK>, { until: "Left as it is, the clarity is not lifted out" }],
        ["The substrate is back, now made of clarity", 960, 790, <W c={WARM} s={30}>the substrate is back, made of clarity</W>, { until: "Left as it is, the clarity is not lifted out" }],
        ["It stays the appearing's own", 960, 250, <W c={GOLD} s={32} serif>the appearing's own: this sound's clearness, this colour's vividness</W>, { until: "The same lifting out, done to other things, is the same mistake" }],
        ["It is not a second thing the sound has", 960, 790, <W c={DIM} s={28}>not a second thing the sound has</W>, { until: "The same lifting out, done to other things, is the same mistake" }],
        ["The same lifting out, done to other things, is the same mistake", 960, 220, <W c={CHALK} s={30}>the same lifting out, the same mistake</W>, { until: "When nothing is abstracted" }],
        ["Abstract the conditions", 960, 340, <SK c={DIM} s={26} strikeAt={c("Abstract the appearing") - 0.2}>conditions → a web, a machine behind the world</SK>, { until: "When nothing is abstracted" }],
        ["Abstract the appearing", 960, 430, <SK c={DIM} s={26} strikeAt={c("Abstract emptiness") - 0.2}>appearing → an object out there</SK>, { until: "When nothing is abstracted" }],
        ["Abstract emptiness", 960, 520, <SK c={DIM} s={26} strikeAt={c("It only stops it from being made into a thing") - 0.4}>emptiness → a ground, a field, a space</SK>, { until: "When nothing is abstracted" }],
        ["It only stops it from being made into a thing", 960, 640, <W c={GOLD} s={30}>the clarity not taken away: only not made into a thing</W>, { until: "When nothing is abstracted" }],
        ["no maker, no knower, no background", 960, 260, <W c={CHALK} s={32}>no maker · no knower · no background</W>],
        ["clear by itself and complete by itself", 960, 790, <W c={GOLD} s={36} serif>clear by itself, complete by itself: spontaneous presence</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WorksScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("None of this takes anything away")} color={GOLD}>nothing taken away</Title>
      <Items items={[
        ["The tree is still green", 560, 420, <Tree size={220} glow={1} />, { pop: true }],
        ["read road signs and catch a ball", 1340, 360, <W c={CHALK} s={28}>road signs read, a ball caught</W>],
        ["things can change, meet and work", 1340, 460, <W c={GOLD} s={30}>things change, meet and work</W>],
        ["In one line", 960, 640, <W c={DIM} s={26}>in one line</W>],
        ["anatta finds no doer in seeing", 960, 700, <W c={CHALK} s={28}>no doer in seeing · no doer anywhere</W>],
        ["and puts nothing in its place", 960, 750, <W c={CHALK} s={28}>nothing in its place</W>],
        ["everything appears clear and complete, by itself, as its conditions meet", 960, 810, <W c={GOLD} s={32} serif>clear and complete, by itself, as its conditions meet</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const look = c("Then look for the one who is seeing or hearing");
  const blank = c("What is left is not a blank");
  return (
    <AbsoluteFill>
      <Title at={c("Try it now")} color={GOLD}>try it</Title>
      <Items items={[
        ["A colour, a car, a fan, a voice", 960, 380, <Tree size={240} glow={0.9} />, { pop: true }],
        ["A colour, a car, a fan, a voice", 960, 610, <W c={CHALK} s={30}>vivid, just as it is</W>, { d: 1.6, until: "Then look for the one who is seeing or hearing" }],
        ["Then look for the one who is seeing or hearing", 960, 610, <W c={DIM} s={30}>the one who is seeing or hearing?</W>, { until: "Now look for the seeing apart from what is seen" }],
        ["Do not argue", 960, 680, <W c={DIM} s={26}>do not argue · just look</W>, { until: "What is left is not a blank" }],
        ["Now look for the seeing apart from what is seen", 960, 610, <W c={DIM} s={30}>the seeing, apart from the seen?</W>, { until: "Look for something that makes it happen" }],
        ["Look for something that makes it happen", 960, 610, <W c={DIM} s={30}>something that makes it happen?</W>, { until: "What is left is not a blank" }],
        ["Do not put anything in its place", 960, 750, <W c={GOLD} s={28}>put nothing in its place</W>, { until: "What is left is not a blank" }],
        ["It is the scene, bright and whole", 960, 610, <W c={GOLD} s={36} serif>the scene, bright and whole</W>],
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
  const order: [keyof typeof M, string, React.ReactNode][] = [
    ["open", "The Buddha told a wandering ascetic named Bahiya", <PuzzleScene />],
    ["web", "This is After Anatta", <IntroScene />],
    ["whole", "I want to make this as plain as I can", <QuestionScene />],
    ["search", "Start with how we usually talk", <GrammarScene />],
    ["doubt", "This is the logic of substance", <SubstanceScene />],
    ["sea", "We say", <WindScene />],
    ["vivid", "Bahiya was told to drop that shape", <BahiyaScene />],
    ["whole", "It is exact to say what falls away", <FallsAwayScene />],
    ["doubt", "But insight is not yet understanding", <DriftScene />],
    ["search", "This is where Nagarjuna comes in", <ArgueScene />],
    ["whole", "Now read his verse again", <VerseScene />],
    ["sea", "So how does", <JustSeenScene />],
    ["vivid", "Think of", <HereScene />],
    ["whole", "And this is why the verse must run both ways", <BothWaysScene />],
    ["doubt", "So many readers get Nagarjuna backwards", <JoinScene />],
    ["web", "Chapter three is not a special case", <SameMoveScene />],
    ["open", "It did not happen by itself for me", <YearsScene />],
    ["search", "We must understand why", <CarScene />],
    ["sea", "There is one more step, and it is easy to miss", <VerbScene />],
    ["web", "Apart from the colour, the light, the eye and the tree", <NamedScene />],
    ["doubt", "There is one more place the mind likes to hide something", <ClarityScene />],
    ["sea", "The physical world can seem to point the same way", <WeightScene />],
    ["whole", "But in Buddhism everything is a phenomenon", <ListScene />],
    ["search", "Now the point everything depends on", <TwoNoScene />],
    ["vivid", "Now go back to the wind", <SpontScene />],
    ["whole", "This is also why it is effortless", <EffortScene />],
    ["web", "Two cautions keep this right", <CautionScene />],
    ["sea", "One thing must be said plainly here", <ClearScene />],
    ["vivid", "None of this takes anything away", <WorksScene />],
    ["whole", "Try it now", <TryScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([, cue, node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][1], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
