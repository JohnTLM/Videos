// Anatta to Emptiness, Bonus: The Logic: After Anatta. Explainer drawings timed to the narration.
// Remade 2026-10-31 from Seeing Comes First as it is today.
// Arc: the car already passing -> the koan -> two logics, seeing comes first -> four key insights (the red apple: vivid and
// unfindable, both together; conditions meeting, not a network; grammar: wind, lightning, "I see the tree"; no given: one
// bowl, three beings) -> one fact; anatta the first door; spontaneous presence -> why the logic needs the seeing -> what a
// phenomenon is (vivid, not found, not even nowhere, dependent already, clear with no knower) -> admitting the problem; the
// wall -> bare attention tastes clarity; the mind a phenomenon too; labels over a given, struck -> six masters -> the
// author's turn -> the koan's four answers, each struck -> two ways out, struck -> designated together -> the staircase ->
// "it falls away" -> the eight steps -> the four questions -> beyond the moment (self, object, person) -> nothing lost ->
// three things to try -> the car again -> close.
// Stance: no awareness, clarity, emptiness, relation or dependent arising is drawn as a source, ground, container or
// backdrop. Each "way out", floor and invented "it" is shown only to be struck. Clarity is drawn as the appearing's own
// glow, never as a light from behind. The car, apple, bowls, stairs and hand stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the car and the koan
  "Listen to a car going by", "it is already passing as it sounds", "is there a sound that stays",
  "Here is a koan to hold in mind", "This moment ceases as it arises", "Does it arise, or does it cease",
  // two logics, seeing comes first
  "This video draws on The Logic", "Eight steps teach two logics", "But the author puts one thing first",
  "cannot be understood clearly by reasoning alone", "It needs a direct insight", "A sound, a thought, a cup", "Seeing comes first",
  // four key insights
  "So he names four insights after anatta", "the logic stays a clever argument", "If we stop, the old logic quietly comes back",
  "Every appearance is vivid, and it cannot be found", "Look at a red apple", "Now look for it",
  "Is it in the skin, in the light, in the eye", "Yet the apple is still red, as vivid as before",
  "Not vivid first and empty later", "Confirm only the vividness", "Confirm only the unfindability",
  "Both have to be seen together, in the same appearing", "The tradition calls this emptiness",
  "Not a void, and not a ground behind the appearing",
  "Appearance arises whenever its conditions come together", "Light, a surface, an eye, attention", "When one is missing, it does not",
  "Nothing comes out of a hidden place", "And the conditions are not a solid network", "They too are vivid, and not found",
  "The tradition calls this dependent origination",
  "We habitually and intuitively think inherently", "A sentence wants a subject and a verb", "So we say the wind blows",
  "and lightning flashes", "I see the tree puts a seer on one side", "The grammar becomes the picture of the world",
  "But experience is never like that", "The flashing is the lightning", "The blowing is the wind",
  "This does not mean a pure, wordless world lies underneath", "That would be one more floor",
  "was never found in experience", "And this habit runs almost by default", "It bends every experience and insight back",
  "It is undoing these habits, again and again", "The tradition calls this ignorance",
  "There is no given", "One bowl of liquid is water to us, pus to a hungry ghost, a home to a fish",
  "a neutral stuff that each being merely filters", "Look for it, and it is not found",
  "What appears, and how it is picked out, arise together", "Beings still agree", "Nor is the mind the floor instead",
  // one fact; the first door; spontaneous presence
  "The first two are one fact, seen from two sides", "what arises dependently is what is called emptiness",
  "The third is what hides that fact", "The fourth takes away its last hiding place",
  "Anatta is the first door", "no doer behind the doing", "takes the same insight through every thing",
  "And where do the four insights lead", "When the habit stops", "nothing is making the appearing",
  "The sound is not a product waiting to be finished", "It is already complete, by itself",
  "calls this spontaneous presence", "the last of the seven phases", "Not uncaused, and not a source behind things",
  "Dependent arising itself, met without the fixing",
  // why the logic needs the seeing
  "Why does the logic need the seeing", "One starts with things", "how anything is picked out as a thing at all",
  "a minute to agree with",
  "But agreeing changes very little", "The logic of substance is not a belief we hold", "the cup is simply there, on its own side",
  "even the new logic is read through the old one", "Things are still things", "The conditions become a new solid floor",
  "Emptiness becomes a void, or a vast space", "The words have changed", "The logic has not",
  // what a phenomenon is
  "So what is a phenomenon", "A vivid appearing that is not found", "Vivid: nothing is taken away",
  "a car can still knock you down", "Not found: not in its parts", "And the mind that looks is not found either",
  "Not even nowhere", "Dependent already", "And clear, with no knower behind it",
  "The clarity belongs to the appearing itself", "and it is empty too", "No phenomenon, not even the mind, is the floor",
  // admitting the problem; the wall
  "one thing has to be admitted", "We think inherently", "It is our default", "Seeing it means noticing, in an ordinary day",
  "a self that decides, a world out there, a problem that is simply there", "It does not feel like a view at all",
  "It feels like how things are",
  "even deep experience and genuine insight will hit a wall", "The experience can be non dual",
  "while the framework that reads them is still inherent", "Then presence becomes a ground", "emptiness becomes a void, and conditions",
  "The experience has changed", "The framework has not",
  // why experience alone is not enough
  "Many practitioners, especially in Zen", "The author calls this a grave mistake", "practice becomes the removal of concepts",
  "Bare attention",
  "These practices do something genuine", "the luminous clarity of appearances can be tasted directly",
  "But at most, that is all they do", "Removing concepts does not show what appearances are",
  "they can still be taken as existing from their own side", "The mind can be tasted too",
  "taken as the one thing that stands by itself", "But the mind is a phenomenon like any other",
  "Its clarity is as empty as the red of the apple",
  "Even the idea behind these practices pictures concepts as labels", "That picture is itself the logic of substance",
  "A thing and its designation arise together", "There is no unlabelled layer waiting to be uncovered",
  "Strip the labels, and the habit stays", "That is how luminous clarity becomes a Witness",
  "It was the author's own story in the I AM years",
  "Bare attention can taste the clarity of appearances", "Only the view shows what they are",
  // six masters; the author's turn
  "The great masters said the same", "wrote that calm abiding alone", "traced the habit behind appearances to a view",
  "a Zen master, scolded those", "advised that when thoughts arise", "wrote that without the wisdom that realises",
  "taught that, just as the I is a conceptual label",
  "None of them says experience does not matter", "Hearing that there is water does not quench thirst",
  "experience without the view cannot do the work",
  "For the author, after I AM", "the vividness was never what was missing", "What was missing was seeing what that vividness is",
  "What changed things was seeing directly what a phenomenon is", "with no knower behind the knowing",
  "Only then did the logic of dependency become clear",
  // the koan answered by substance
  "Now return to the koan",
  "The logic of substance starts with a thing", "So it must choose",
  "It arises? Then it is there", "it is never there to have arisen",
  "It ceases? Then something passes away", "what passes away, if it never stood",
  "Coming into being and passing away are opposites", "Neither? Then nothing happens at all", "Yet a sound is being heard right now",
  "Every answer fails", "put the whole trap in one verse", "There is no passing away either apart from coming into being",
  "The logic of substance looks for a way out", "an awareness in which moments come and go", "Each keeps the moment as a thing",
  "only moves it somewhere else",
  // the koan answered by dependency
  "The logic of dependency starts one step earlier", "It asks how this moment is picked out at all",
  "A moment is picked out together with its arising and its ceasing", "None comes first, and none is found apart from the others",
  "merely designated as such upon conditions",
  "Think of a staircase", "Up, or down", "In themselves, neither", "up for someone climbing", "down for someone coming down",
  "And they are truly climbed", "The moment is the same", "It is not nothing, and it is not only in the mind",
  "is not a paradox", "It is a plain description", "There is no it standing between the arising and the ceasing",
  "The question is not answered", "It falls away",
  // the eight steps, the four questions
  "The eight steps of The Logic each come back", "What exactly is denied", "only the it, the moment standing on its own",
  "Looked for, like the old masters' chariot", "Yet moments are named, counted and timed",
  "Conventionally, the train leaves and arrives", "One moment, met two ways", "It is because nothing stands on its own",
  "The last step gathers it all into four questions",
  "What would a substance view say", "What does dependency say instead", "What is affirmed conventionally", "What is never found",
  // beyond the moment: a self, an object, a person
  "The same logic reaches beyond the moment", "Look for the one who changed, apart from the changing",
  "Yet a promise I made is still mine to keep", "Close your hand, and a fist appears", "Open it, and the fist is gone",
  "It went nowhere", "Look for a friend apart from the face", "someone lived, was loved, and is missed",
  // nothing lost
  "Nothing is lost when the it is not found", "The sound is still heard", "Actions still bear fruit",
  "Dependent arising is not a lesser layer", "There is nothing underneath for it to cover",
  // try it, and the close
  "So, a few things to try", "Listen to one sound until it ends", "Then ask where it was", "just look",
  "Look at a colour in front of you", "Is there a seer behind the seeing",
  "Say to yourself, the wind is blowing", "Then feel the wind on your skin", "Is there a wind apart from the blowing",
  "Listen to a sound once more", "It is vivid", "And nothing went anywhere",
  "Ask what arises, and the koan is a paradox", "the koan is simply this moment",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  sea: { a: "rgba(30,90,130,0.48)", b: "rgba(60,50,140,0.42)", c: "rgba(150,120,50,0.3)" },
};

const RED = "#F2584C";

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

/** A chip that is struck through at `strikeAt` (only for the invented "it", never for a conventional thing). */
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
/** A train on its track; x moves it along. */
const Train: React.FC<{ w?: number; x?: number; color?: string }> = ({ w = 300, x = 0, color = ICE }) => (
  <svg width={w} height={w * 0.42} viewBox="0 0 300 126" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
    <line x1={-200} y1={118} x2={500} y2={118} stroke={DIM} strokeWidth={3} />
    <g transform={`translate(${x} 0)`}>
      <path d="M10 30 Q10 14 26 14 L250 14 Q290 14 292 60 L292 100 L10 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
      {[40, 100, 160].map((xx) => <rect key={xx} x={xx} y={30} width={44} height={30} rx={6} fill="#0008" stroke={color} strokeWidth={3} />)}
      <path d="M232 30 L272 30 Q282 40 282 60 L232 60 Z" fill="#0008" stroke={color} strokeWidth={3} />
      {[50, 120, 190, 250].map((cx) => <circle key={cx} cx={cx} cy={106} r={11} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />)}
    </g>
  </svg>
);

/** A car going by: the sound source (it replaced the bell, owner 2026-10-29); swing nudges it along the road. */
const PassingCar: React.FC<{ size?: number; swing?: number; color?: string }> = ({ size = 220, swing = 0, color = GOLD }) => (
  <svg width={size} height={size * 0.45} viewBox="0 0 220 100" style={{ overflow: "visible", transform: `translateX(${swing * 4}px)`,
    filter: `drop-shadow(0 0 12px ${color}99)` }}>
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

/** Repeating sound rings from (x, y), dying away after `dur` seconds. */
const Sound: React.FC<{ x: number; y: number; at: number; dur?: number; color?: string; r1?: number }> = ({ x, y, at, dur = 5, color = GOLD, r1 = 420 }) => {
  const { t } = useT();
  if (t < at || t > at + dur + 1.6) return null;
  return (
    <>
      {[0, 1, 2].map((k) => {
        const s = at + k * 0.55;
        const q = t < s ? 0 : ((t - s) / 1.6) % 1;
        const alive = t - s < dur ? 1 : 0;
        return alive ? <Ring key={k} x={x} y={y} p={q} r0={40} r1={r1} color={color} /> : null;
      })}
    </>
  );
};

const Apple: React.FC<{ size?: number; glow?: number; o?: number }> = ({ size = 220, glow = 1, o = 1 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 ${8 + 16 * glow}px ${RED})` }}>
    <path d="M100 56 C70 30 22 46 26 104 C30 160 70 190 100 172 C130 190 170 160 174 104 C178 46 130 30 100 56 Z" fill={`${RED}cc`} stroke={RED} strokeWidth={5} />
    <path d="M60 80 Q52 100 58 122" stroke="#fff" strokeWidth={6} strokeLinecap="round" opacity={0.45} fill="none" />
    <path d="M100 56 Q98 34 108 18" stroke="#8a5a2b" strokeWidth={6} strokeLinecap="round" fill="none" />
    <path d="M106 30 Q130 8 152 22 Q132 44 106 30 Z" fill={`${GREEN}aa`} stroke={GREEN} strokeWidth={3} />
  </svg>
);

const Cup: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 150 }) => (
  <svg width={size} height={size * 0.8} viewBox="0 0 150 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 20 L110 20 L100 100 Q65 112 30 100 Z" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M108 38 Q140 40 134 64 Q128 84 103 80" fill="none" stroke={color} strokeWidth={5} />
  </svg>
);

const Thought: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={160} height={120} viewBox="0 0 160 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M40 70 Q15 70 18 50 Q20 28 45 32 Q55 10 82 16 Q105 4 120 26 Q148 28 142 54 Q146 78 118 78 Q100 92 78 80 Q58 90 40 70 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={34} cy={96} r={8} fill={`${color}33`} stroke={color} strokeWidth={3} />
    <circle cx={18} cy={112} r={5} fill={`${color}33`} stroke={color} strokeWidth={3} />
  </svg>
);

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

/** A plain standing figure. */
const Person: React.FC<{ color?: string; size?: number; dashed?: boolean }> = ({ color = CHALK, size = 150, dashed }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={30} cy={16} r={11} fill={`${color}33`} stroke={color} strokeWidth={3.5} strokeDasharray={dashed ? "5 4" : undefined} />
    <path d="M12 98 L16 50 Q18 32 30 32 Q42 32 44 50 L48 98" fill={`${color}22`} stroke={color} strokeWidth={3.5} strokeLinejoin="round"
      strokeDasharray={dashed ? "6 5" : undefined} />
  </svg>
);

/** A walking figure seen side-on; face = 1 faces right, -1 faces left. */
const Walker: React.FC<{ color?: string; face?: number; step?: number }> = ({ color = TEAL, face = 1, step = 0 }) => {
  const a = Math.sin(step) * 16;
  return (
    <svg width={80} height={130} viewBox="0 0 80 130" style={{ overflow: "visible", transform: `scaleX(${face})`, filter: `drop-shadow(0 0 8px ${color}aa)` }}>
      <circle cx={42} cy={16} r={11} fill={`${color}44`} stroke={color} strokeWidth={4} />
      <path d="M40 28 L36 74" stroke={color} strokeWidth={6} strokeLinecap="round" />
      <path d={`M38 40 L${44 + a * 0.6} 62 M38 40 L${30 - a * 0.6} 60`} stroke={color} strokeWidth={5} strokeLinecap="round" />
      <path d={`M36 74 L${44 + a} 126 M36 74 L${28 - a} 126`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

/** A head in profile, drawn as an outline (the "mind" as a container, shown only to be removed). */
const Head: React.FC<{ color?: string; o?: number }> = ({ color = VIOLET, o = 1 }) => (
  <svg width={240} height={240} viewBox="0 0 240 240" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M70 220 L70 180 Q20 150 30 90 Q42 20 120 16 Q200 16 210 90 Q214 120 228 140 L206 148 Q210 180 180 184 L150 186 L150 220"
      fill="none" stroke={color} strokeWidth={5} strokeDasharray="12 9" strokeLinejoin="round" />
  </svg>
);

const Clock: React.FC<{ size?: number; color?: string }> = ({ size = 170, color = ICE }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}99)` }}>
      <circle cx={50} cy={50} r={44} fill={`${color}18`} stroke={color} strokeWidth={4} />
      {Array.from({ length: 12 }).map((_, i) => <line key={i} x1={50} y1={10} x2={50} y2={16} stroke={color} strokeWidth={3} transform={`rotate(${i * 30} 50 50)`} />)}
      <line x1={50} y1={50} x2={50} y2={24} stroke={CHALK} strokeWidth={4} strokeLinecap="round" transform={`rotate(${t * 36} 50 50)`} />
      <line x1={50} y1={50} x2={50} y2={32} stroke={GOLD} strokeWidth={5} strokeLinecap="round" transform={`rotate(${t * 3} 50 50)`} />
    </svg>
  );
};

/** A small tree with fruit: actions bearing fruit. */
const Fruit: React.FC = () => (
  <svg width={170} height={190} viewBox="0 0 170 190" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${GREEN}88)` }}>
    <path d="M85 186 L85 110 M85 130 L60 110 M85 120 L112 98" stroke="#b07a45" strokeWidth={8} strokeLinecap="round" fill="none" />
    <ellipse cx={85} cy={72} rx={72} ry={58} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
    {[[55, 70], [100, 50], [115, 92], [70, 100]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={11} fill={`${RED}cc`} stroke={RED} strokeWidth={3} />)}
  </svg>
);

/** A floor bar, drawn only so that it can be taken away. */
const Floor: React.FC<{ w?: number; color?: string; dashed?: boolean }> = ({ w = 900, color = WARM, dashed }) => (
  <div style={{ width: w, height: 24, borderRadius: 12, background: `${color}33`, border: `3px ${dashed ? "dashed" : "solid"} ${color}`, boxShadow: `0 0 16px ${color}55` }} />
);

const Num: React.FC<{ n: string; color: string; lit: number }> = ({ n, color, lit }) => (
  <div style={{ width: 54, height: 54, borderRadius: 27, border: `3px solid ${color}`, background: `${color}${lit > 0.5 ? "44" : "11"}`,
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontWeight: 600, fontSize: 32, color: CHALK,
    boxShadow: lit > 0.5 ? `0 0 20px ${color}` : undefined }}>{n}</div>
);

/** A hand, open or closed into a fist (closed: 0..1). */
const Hand: React.FC<{ closed: number; color?: string }> = ({ closed, color = WARM }) => (
  <svg width={130} height={130} viewBox="0 0 130 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <rect x={30} y={62} width={70} height={56} rx={18} fill={`${color}22`} stroke={color} strokeWidth={4} />
    {[0, 1, 2, 3].map(i => (
      <rect key={i} x={32 + i * 17} y={62 - 46 * (1 - closed)} width={14} height={14 + 46 * (1 - closed)} rx={7}
        fill={`${color}22`} stroke={color} strokeWidth={3.5} />
    ))}
    <rect x={6 + 18 * closed} y={70} width={30 - 6 * closed} height={14} rx={7} fill={`${color}22`} stroke={color} strokeWidth={3.5} />
  </svg>
);

/** A bowl of liquid, seen three ways. */
const Bowl: React.FC<{ size?: number; color?: string }> = ({ size = 200, color = ICE }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 200 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M10 30 Q100 50 190 30 Q180 112 100 116 Q20 112 10 30 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <ellipse cx={100} cy={30} rx={90} ry={14} fill={`${color}55`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A simple tree. */
const Tree: React.FC<{ color?: string; size?: number }> = ({ color = GREEN, size = 150 }) => (
  <svg width={size} height={size * 1.15} viewBox="0 0 130 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M65 146 L65 86" stroke="#b07a45" strokeWidth={9} strokeLinecap="round" />
    <ellipse cx={65} cy={58} rx={56} ry={50} fill={`${color}33`} stroke={color} strokeWidth={4} />
  </svg>
);

/** Wind lines blowing. */
const Wind: React.FC<{ color?: string }> = ({ color = ICE }) => {
  const { t } = useT();
  const dx = (t * 60) % 40;
  return (
    <svg width={220} height={120} viewBox="0 0 220 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
      {[20, 60, 100].map((y, i) => (
        <path key={y} d={`M${10 + dx - i * 8} ${y} Q${80 + dx} ${y - 18} ${150 + dx} ${y} T${200 + dx} ${y - 6}`} fill="none" stroke={color}
          strokeWidth={5} strokeLinecap="round" opacity={0.85 - i * 0.15} />
      ))}
    </svg>
  );
};

/** A tag stuck over something: a label pictured as laid on top. */
const Tag: React.FC<{ text: string; color?: string }> = ({ text, color = DIM }) => (
  <div style={{ padding: "6px 18px", borderRadius: 6, border: `3px solid ${color}`, background: "#0009", fontFamily: SANS, fontSize: 26,
    color: CHALK, transform: "rotate(-6deg)", boxShadow: `0 0 12px ${color}66` }}>{text}</div>
);

// ---------------------------------------------------------------- scenes
const CarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strike = c("Listen to a car going by");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, strike - 0.4)}><PassingCar swing={swing} /></At>
      <Sound x={960} y={420} at={strike + 0.4} dur={6} />
      <Items items={[
        ["Listen to a car going by", 960, 640, <W c={GOLD} s={36} serif>bright and clear</W>, { d: 1.6 }],
        ["it is already passing as it sounds", 960, 710, <W c={ICE} s={32}>already passing, as it sounds</W>],
        ["is there a sound that stays", 960, 780, <W c={DIM} s={30}>no sound that stays</W>],
      ]} />
    </AbsoluteFill>
  );
};

const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = c("Here is a koan to hold in mind");
  return (
    <AbsoluteFill>
      <Title at={k} color={DIM} size={34}>a koan</Title>
      <At x={960} y={340} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={70} speed={0.035} />
      </At>
      <At x={960} y={500} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={70} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
    </AbsoluteFill>
  );
};

const TwoWaysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = c("Eight steps teach two logics");
  return (
    <AbsoluteFill>
      <Title at={c("This video draws on The Logic")}>After Anatta · The Logic</Title>
      <At x={960} y={200} o={ramp(t, c("This video draws on The Logic") + 1.2, 0.5)}><W c={DIM} s={28}>notes by John Tan, known as Thusness</W></At>
      <Svg>
        <DrawPath d="M960 640 C 960 500, 700 460, 560 380" p={ramp(t, two + 0.3, 1)} color={WARM} width={6} len={600} />
        <DrawPath d="M960 640 C 960 500, 1220 460, 1360 380" p={ramp(t, two + 0.6, 1)} color={TEAL} width={6} len={600} />
      </Svg>
      <Items items={[
        ["Eight steps teach two logics", 960, 690, <K c={CHALK} s={28}>eight steps</K>, { pop: true }],
        ["Eight steps teach two logics", 560, 330, <K c={WARM}>logic of substance</K>, { d: 1.2, pop: true }],
        ["Eight steps teach two logics", 1360, 330, <K c={TEAL}>logic of dependency</K>, { d: 1.6, pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ClaimScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sc = c("Seeing comes first");
  return (
    <AbsoluteFill>
      <Title at={c("But the author puts one thing first")}>one thing first</Title>
      <Items items={[
        ["cannot be understood clearly by reasoning alone", 960, 230, <W c={DIM} s={32}>not by reasoning alone</W>],
        ["It needs a direct insight", 960, 340, <Eye color={GOLD} size={150} />, { pop: true }],
        ["It needs a direct insight", 960, 430, <W c={GOLD} s={34} serif>a direct insight into what a phenomenon is</W>, { d: 0.5 }],
        ["A sound, a thought, a cup", 560, 590, <PassingCar size={120} />, { pop: true }],
        ["A sound, a thought, a cup", 960, 590, <Thought />, { pop: true, d: 0.5 }],
        ["A sound, a thought, a cup", 1360, 590, <Cup />, { pop: true, d: 1.0 }],
      ]} />
      <At x={960} y={760} s={pop(t, fps, sc, 14)} o={ramp(t, sc, 0.4)}><W c={GOLD} s={50} serif>seeing comes first</W></At>
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("So he names four insights after anatta");
  const back = c("If we stop, the old logic quietly comes back");
  return (
    <AbsoluteFill>
      <Title at={n}>four key insights after anatta</Title>
      {[["vivid, and not found", GOLD], ["arising on conditions", TEAL], ["the habit of thinking inherently", WARM], ["there is no given", VIOLET]].map(([w, col], i) => (
        <React.Fragment key={i}>
          <At x={300 + i * 440} y={360} s={pop(t, fps, n + 0.6 + i * 0.5)}><Num n={String(i + 1)} color={col} lit={1} /></At>
          <At x={300 + i * 440} y={450} o={ramp(t, n + 0.9 + i * 0.5, 0.5)}><W c={col} s={28}>{w}</W></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["So he names four insights after anatta", 960, 580, <W c={CHALK} s={30}>seen clearly, confirmed again and again</W>, { d: 2.6 }],
        ["the logic stays a clever argument", 960, 660, <W c={DIM} s={30}>otherwise: a clever argument</W>],
      ]} />
      <At x={960} y={760} o={ramp(t, back, 0.5)}><W c={WARM} s={30}>seen once is not enough: stop, and the old logic comes back</W></At>
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Now look for it");
  const parts = c("Is it in the skin, in the light, in the eye");
  const still = c("Yet the apple is still red, as vivid as before");
  return (
    <AbsoluteFill>
      <Title at={c("Every appearance is vivid, and it cannot be found")} color={GOLD}>1. vivid, and cannot be found</Title>
      <At x={960} y={420} s={pop(t, fps, c("Look at a red apple"))}><Apple glow={0.6 + 0.4 * ramp(t, still, 0.8)} /></At>
      <At x={760 + 80 * Math.sin((t - look) * 1.6)} y={350 + 40 * Math.cos((t - look) * 1.3)} o={between(t, look, still)}><Magnifier /></At>
      {(["skin", "light", "eye"] as const).map((w, i) => (
        <React.Fragment key={w}>
          <At x={1340} y={280 + i * 110} o={ramp(t, parts + i * 0.6, 0.4)}><K c={ICE} s={28}>in the {w}?</K></At>
          <At x={1540} y={280 + i * 110} o={ramp(t, parts + 1.8 + i * 0.3, 0.4)}><W c={WARM} s={26}>not found</W></At>
        </React.Fragment>
      ))}
      <At x={960} y={640} o={ramp(t, still, 0.5)}><W c={RED} s={38} serif>still red, as vivid as before</W></At>
    </AbsoluteFill>
  );
};

const BothScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("Confirm only the vividness");
  const u = c("Confirm only the unfindability");
  const both = c("Both have to be seen together, in the same appearing");
  const nv = c("Not a void, and not a ground behind the appearing");
  const gone = 1 - ramp(t, both, 0.5);
  return (
    <AbsoluteFill>
      <Title at={c("Not vivid first and empty later")} color={GOLD}>not one, then the other</Title>
      {/* one-sided readings, drawn only to be struck */}
      <At x={480} y={300} o={ramp(t, v, 0.4) * gone}><K c={RED} s={30}>only vivid</K></At>
      <At x={480} y={420} o={ramp(t, v + 1.2, 0.4) * gone}><Floor w={360} color={DIM} dashed /></At>
      <At x={480} y={480} o={ramp(t, v + 1.2, 0.4) * gone}><SK c={DIM} s={26} strikeAt={u - 0.4}>presence as a new ground</SK></At>
      <At x={1440} y={300} o={ramp(t, u, 0.4) * gone}><K c={ICE} s={30}>only unfindable</K></At>
      <At x={1440} y={420} o={ramp(t, u + 1.2, 0.4) * gone}><div style={{ width: 130, height: 130, borderRadius: "50%", background: "#000", border: `3px dashed ${DIM}` }} /></At>
      <At x={1440} y={540} o={ramp(t, u + 1.2, 0.4) * gone}><SK c={DIM} s={26} strikeAt={both - 0.6}>a thin, void world</SK></At>
      <At x={960} y={400} s={pop(t, fps, both)}><Apple size={200} /></At>
      <Items items={[
        ["Both have to be seen together, in the same appearing", 960, 580, <W c={GOLD} s={32} serif>vivid and not found, in the same appearing</W>, { d: 0.6 }],
        ["The tradition calls this emptiness", 960, 680, <W c={GOLD} s={36} serif>emptiness: the appearing’s not being found</W>],
        ["Not a void, and not a ground behind the appearing", 960, 770, <W c={DIM} s={28}>not a void · not a ground behind</W>],
      ]} />
      <div style={{ position: "absolute", inset: 0, opacity: ramp(t, nv, 0.3) * (1 - ramp(t, nv + 3.5, 0.5)) }}>
        <Crossed x={960} y={770} at={nv + 1.0} size={34} />
      </div>
    </AbsoluteFill>
  );
};

const ConditionsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const come = c("Light, a surface, an eye, attention");
  const miss = c("When one is missing, it does not");
  const net = c("And the conditions are not a solid network");
  const away = ramp(t, miss, 1.0) * (1 - ramp(t, net - 0.5, 0.8));
  const pts: [string, number, number, string][] = [["light", 520, 300, GOLD], ["a surface", 1400, 300, ICE], ["an eye", 520, 640, TEAL], ["attention", 1400, 640, VIOLET]];
  const glowNet = ramp(t, c("They too are vivid, and not found"), 0.6);
  return (
    <AbsoluteFill>
      <Title at={c("Appearance arises whenever its conditions come together")} color={TEAL}>2. arising whenever conditions meet</Title>
      {pts.map(([w, x, y, col], i) => {
        const gather = ramp(t, come + 2.2, 1.2) * (i === 3 ? 1 - away : 1);
        const gx = x + (960 - x) * 0.45 * gather, gy = y + (470 - y) * 0.45 * gather;
        const dx = i === 3 ? 260 * away : 0;
        return (
          <At key={w} x={gx + dx} y={gy} o={ramp(t, come + i * 0.5, 0.4) * (0.4 + 0.6 * glowNet + 0.6 * (1 - ramp(t, net, 0.4)))}><K c={col} s={30}>{w}</K></At>
        );
      })}
      {/* a solid network behind: drawn only to be struck */}
      <Svg>
        <g opacity={ramp(t, net, 0.5) * (1 - ramp(t, c("They too are vivid, and not found") + 1.2, 0.6))}>
          <DrawPath d="M640 330 L1280 330 L1280 610 L640 610 Z M640 330 L1280 610 M1280 330 L640 610" p={ramp(t, net, 1.0)} color={DIM} width={4} len={2600} glow={false} />
        </g>
      </Svg>
      <At x={960} y={470} o={ramp(t, come + 3.0, 0.6) * (1 - 0.9 * away)}><Apple size={150} glow={1 - away} /></At>
      <Items items={[
        ["Light, a surface, an eye, attention", 960, 600, <W c={RED} s={30}>together, red appears</W>, { d: 3.4, until: "When one is missing, it does not" }],
        ["When one is missing, it does not", 960, 600, <W c={DIM} s={30}>one missing: no red</W>, { d: 0.6, until: "And the conditions are not a solid network" }],
        ["Nothing comes out of a hidden place", 960, 720, <W c={CHALK} s={30}>nothing comes from a hidden place, nothing goes back</W>, { until: "And the conditions are not a solid network" }],
        ["And the conditions are not a solid network", 960, 720, <SK c={DIM} s={28} strikeAt={c("They too are vivid, and not found") + 0.4}>a solid network behind</SK>, { d: 0.4 }],
        ["They too are vivid, and not found", 960, 160, <W c={TEAL} s={28}>the conditions too: vivid, and not found</W>, { d: 0.4 }],
        ["The tradition calls this dependent origination", 960, 800, <W c={TEAL} s={34} serif>dependent origination</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SentenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sv = c("A sentence wants a subject and a verb");
  const wind = c("So we say the wind blows");
  const light = c("and lightning flashes");
  const tree = c("I see the tree puts a seer on one side");
  const gram = c("The grammar becomes the picture of the world");
  const top = 1 - ramp(t, tree - 0.2, 0.4);
  const box = (label: string, col: string, at: number) => (
    <div style={{ width: 280, height: 110, borderRadius: 14, border: `3px solid ${col}`, background: `${col}14`, position: "relative", opacity: ramp(t, at, 0.4) * top }}>
      <div style={{ position: "absolute", top: -40, width: "100%", fontFamily: SANS, fontSize: 24, color: col, letterSpacing: 2 }}>{label}</div>
    </div>
  );
  const w1 = between(t, wind + 0.3, light, 0.3);
  const w2 = ramp(t, light + 0.2, 0.3) * top;
  return (
    <AbsoluteFill>
      <Title at={c("We habitually and intuitively think inherently")} color={WARM}>3. the habit of thinking inherently</Title>
      <At x={760} y={330}>{box("SUBJECT", GOLD, sv)}</At>
      <At x={1160} y={330}>{box("VERB", ICE, sv + 0.4)}</At>
      <At x={760} y={330} o={w1}><W c={GOLD} s={40} serif>the wind</W></At>
      <At x={1160} y={330} o={w1}><W c={ICE} s={40} serif>blows</W></At>
      <At x={760} y={330} o={w2}><W c={GOLD} s={40} serif>lightning</W></At>
      <At x={1160} y={330} o={w2}><W c={ICE} s={40} serif>flashes</W></At>
      <At x={960} y={470} o={ramp(t, light + 1.0, 0.5) * top}><W c={DIM} s={28}>as if a wind stood apart from the blowing</W></At>
      {/* "I see the tree": a seer, an act, a tree */}
      <At x={520} y={360} o={ramp(t, tree + 0.3, 0.4)} s={pop(t, fps, tree + 0.3)}><Person color={VIOLET} size={160} dashed /></At>
      <At x={520} y={480} o={ramp(t, tree + 0.5, 0.4)}><K c={VIOLET} s={26}>a seer</K></At>
      <Flow x1={620} y1={360} x2={1280} y2={360} color={DIM} p={ramp(t, tree + 1.0, 0.8)} />
      <At x={960} y={420} o={ramp(t, tree + 1.2, 0.4)}><K c={DIM} s={26}>an act of seeing</K></At>
      <At x={1400} y={350} o={ramp(t, tree + 1.6, 0.4)} s={pop(t, fps, tree + 1.6)}><Tree /></At>
      <At x={1400} y={480} o={ramp(t, tree + 1.8, 0.4)}><K c={GREEN} s={26}>a tree</K></At>
      <At x={960} y={640} o={ramp(t, gram, 0.5)}><W c={WARM} s={36} serif>the grammar becomes the picture of the world</W></At>
    </AbsoluteFill>
  );
};

const NeverScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("The flashing is the lightning");
  const bl = c("The blowing is the wind");
  const pure = c("This does not mean a pure, wordless world lies underneath");
  const flash = 0.5 + 0.5 * Math.sin(t * 9);
  return (
    <AbsoluteFill>
      <Title at={c("But experience is never like that")}>experience is never like that</Title>
      <At x={620} y={330} o={ramp(t, fl, 0.4)}><Bolt flash={flash} /></At>
      <At x={620} y={470} o={ramp(t, fl + 0.4, 0.4)}><W c={ICE} s={32} serif>the flashing is the lightning</W></At>
      <At x={1300} y={330} o={ramp(t, bl, 0.4)}><Wind /></At>
      <At x={1300} y={470} o={ramp(t, bl + 0.4, 0.4)}><W c={ICE} s={32} serif>the blowing is the wind</W></At>
      <At x={960} y={600} o={ramp(t, pure, 0.5)}><Floor w={620} color={DIM} dashed /></At>
      <At x={960} y={660} o={ramp(t, pure + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={c("That would be one more floor") + 0.5}>a pure, wordless world underneath</SK></At>
      <Crossed x={960} y={600} at={c("That would be one more floor") + 0.4} size={40} />
      <Items items={[
        ["was never found in experience", 960, 770, <W c={CHALK} s={30}>things behind what happens: never found in experience</W>],
      ]} />
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const re = c("It bends every experience and insight back");
  const und = c("It is undoing these habits, again and again");
  const pass = ramp(t, re + 0.4, 1.6);
  const undo = ramp(t, und + 0.3, 1.4);
  const cols = [GOLD, RED, VIOLET];
  return (
    <AbsoluteFill>
      <Title at={c("And this habit runs almost by default")}>the habit runs by default</Title>
      <At x={960} y={330} o={ramp(t, re, 0.5) * (1 - 0.6 * undo)}>
        <div style={{ width: 70, height: 260, borderRadius: "50%", background: `${WARM}33`, border: `3px solid ${WARM}`, boxShadow: `0 0 24px ${WARM}66` }} />
      </At>
      <At x={960} y={490} o={ramp(t, re + 0.3, 0.5) * (1 - 0.6 * undo)}><W c={WARM} s={26}>habit</W></At>
      {cols.map((col, i) => {
        const x = 520 + 880 * pass;
        const hard = x > 960 && undo < 0.5 ? 1 : 0;
        return (
          <At key={i} x={x} y={250 + i * 80} o={ramp(t, re, 0.5)}>
            <div style={{ width: 54, height: 54, borderRadius: hard ? 6 : 27, background: `${col}66`,
              border: hard ? `4px solid ${CHALK}` : `2px solid ${col}`, boxShadow: `0 0 16px ${col}` }} />
          </At>
        );
      })}
      <At x={1400} y={520} o={ramp(t, re + 1.8, 0.5) * (1 - undo)}><W c={CHALK} s={26}>things, selves, grounds</W></At>
      <Items items={[
        ["It is undoing these habits, again and again", 960, 640, <W c={GREEN} s={32}>practice: undoing the habit, again and again</W>],
        ["The tradition calls this ignorance", 960, 740, <W c={WARM} s={30}>ignorance: grasping things as there from their own side</W>],
      ]} />
    </AbsoluteFill>
  );
};

const GivenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bowl = c("One bowl of liquid is water to us, pus to a hungry ghost, a home to a fish");
  const stuff = c("a neutral stuff that each being merely filters");
  const nf = c("Look for it, and it is not found");
  const tog = c("What appears, and how it is picked out, arise together");
  const views: [string, string][] = [["water, to us", ICE], ["pus, to a hungry ghost", ROSE], ["a home, to a fish", TEAL]];
  return (
    <AbsoluteFill>
      <Title at={c("There is no given")} color={VIOLET}>4. there is no given</Title>
      {views.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 540} y={340} s={pop(t, fps, bowl + 0.6 + i * 1.4)}><Bowl color={col} /></At>
          <At x={420 + i * 540} y={450} o={ramp(t, bowl + 0.9 + i * 1.4, 0.5)}><W c={col} s={28}>{w}</W></At>
        </React.Fragment>
      ))}
      <At x={960} y={580} o={ramp(t, stuff, 0.5) * (1 - ramp(t, tog, 0.5))}>
        <SK c={DIM} s={28} strikeAt={nf + 0.5}>a bowl of neutral stuff, underneath</SK>
      </At>
      <Items items={[
        ["What appears, and how it is picked out, arise together", 960, 580, <W c={CHALK} s={32} serif>what appears and how it is picked out: together</W>],
        ["Beings still agree", 960, 670, <W c={GREEN} s={28}>beings still agree; the world still holds together</W>],
        ["Nor is the mind the floor instead", 960, 760, <W c={DIM} s={28}>nor is the mind the floor: neither comes first</W>],
      ]} />
    </AbsoluteFill>
  );
};

const OneFactScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("The first two are one fact, seen from two sides");
  const hide = c("The third is what hides that fact");
  return (
    <AbsoluteFill>
      <Title at={one}>one fact, two sides</Title>
      <Items items={[
        ["The first two are one fact, seen from two sides", 640, 400, <K c={GOLD}>empty: not found</K>, { pop: true, d: 0.4 }],
        ["The first two are one fact, seen from two sides", 1280, 400, <K c={TEAL}>arising in dependence</K>, { pop: true, d: 0.9 }],
        ["The first two are one fact, seen from two sides", 960, 400, <W c={CHALK} s={44} serif>=</W>, { d: 1.4 }],
        ["what arises dependently is what is called emptiness", 960, 230, <W c={DIM} s={28}>Nāgārjuna: what arises dependently is called emptiness</W>],
      ]} />
      <At x={960 - 700 * (1 - ramp(t, hide + 0.3, 1.2))} y={400} o={ramp(t, hide, 0.4)}>
        <div style={{ width: 1100, height: 180, borderRadius: 30, background: `${WARM}30`, border: `3px solid ${WARM}88`, backdropFilter: "blur(6px)" }} />
      </At>
      <At x={960} y={600} o={ramp(t, hide + 1.2, 0.5)}><W c={WARM} s={32}>the third: what hides it</W></At>
      <At x={960} y={700} o={ramp(t, c("The fourth takes away its last hiding place"), 0.5)}><W c={VIOLET} s={32}>the fourth: no given world beneath it all</W></At>
    </AbsoluteFill>
  );
};

const DoorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const d = c("Anatta is the first door");
  return (
    <AbsoluteFill>
      <Title at={d} color={GOLD}>anatta, the first door</Title>
      <At x={960} y={380} o={ramp(t, d + 0.4, 0.5)}>
        <div style={{ width: 200, height: 300, borderRadius: "100px 100px 8px 8px", border: `5px solid ${GOLD}`, background: `${GOLD}18`, boxShadow: `0 0 30px ${GOLD}66` }} />
      </At>
      <Items items={[
        ["no doer behind the doing", 960, 600, <SK c={DIM} s={28} strikeAt={c("no doer behind the doing") + 1.0}>a doer behind the doing</SK>],
        ["takes the same insight through every thing", 960, 690, <W c={ICE} s={30}>Nāgārjuna: the same insight, through every thing</W>],
        ["takes the same insight through every thing", 960, 770, <W c={DIM} s={26}>the walker · the fire · the cause · even the seeing</W>, { d: 1.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("calls this spontaneous presence");
  return (
    <AbsoluteFill>
      <Title at={c("And where do the four insights lead")}>where the four insights lead</Title>
      <Items items={[
        ["When the habit stops", 960, 210, <W c={DIM} s={28}>the habit stops; no given beneath; the first two tasted together</W>],
        ["nothing is making the appearing", 960, 290, <W c={CHALK} s={30}>no doer anywhere, nothing in its place: nothing making the appearing</W>],
        ["The sound is not a product waiting to be finished", 760, 400, <PassingCar size={130} />, { pop: true }],
        ["It is already complete, by itself", 1160, 400, <W c={CHALK} s={30}>complete, by itself, as its conditions meet</W>],
      ]} />
      <At x={960} y={530} s={pop(t, fps, sp, 14)} o={ramp(t, sp, 0.4)}><W c={GOLD} s={50} serif>spontaneous presence</W></At>
      <Items items={[
        ["the last of the seven phases", 960, 610, <W c={DIM} s={26}>Dzogchen · the last of the seven phases</W>],
        ["Not uncaused, and not a source behind things", 960, 690, <W c={DIM} s={28}>not uncaused · not a source</W>],
        ["Dependent arising itself, met without the fixing", 960, 780, <W c={GOLD} s={32}>dependent arising itself, met without the fixing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LogicsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("One starts with things");
  const pick = c("how anything is picked out as a thing at all");
  return (
    <AbsoluteFill>
      <Title at={c("Why does the logic need the seeing")}>why the logic needs the seeing</Title>
      <At x={560} y={400} s={pop(t, fps, one)}><Cup color={WARM} /></At>
      <Flow x1={560} y1={470} x2={560} y2={560} color={WARM} p={ramp(t, one + 0.6, 0.5)} pulses={false} />
      <At x={1360} y={400} s={pop(t, fps, pick)}><Cup color={TEAL} /></At>
      <At x={1360} y={400} o={ramp(t, pick + 0.6, 0.5)}>
        <div style={{ width: 230, height: 190, borderRadius: 24, border: `3px dashed ${TEAL}` }} />
      </At>
      <Items items={[
        ["One starts with things", 560, 250, <K c={WARM} s={28}>a thing first</K>, { pop: true }],
        ["One starts with things", 560, 600, <W c={WARM} s={28}>then: what happens to it?</W>, { d: 0.9 }],
        ["how anything is picked out as a thing at all", 1360, 250, <K c={TEAL} s={28}>picked out how?</K>, { pop: true, d: -0.6 }],
        ["how anything is picked out as a thing at all", 1360, 600, <W c={TEAL} s={28}>how is a “thing” picked out at all?</W>, { d: 0.9 }],
        ["a minute to agree with", 960, 740, <W c={DIM} s={30}>a minute to follow, a minute to agree with</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cup = c("the cup is simply there, on its own side");
  const lens = c("even the new logic is read through the old one");
  const wc = c("The words have changed");
  return (
    <AbsoluteFill>
      <Title at={c("But agreeing changes very little")}>agreeing changes very little</Title>
      <At x={960} y={180} o={ramp(t, c("The logic of substance is not a belief we hold"), 0.5)}><W c={DIM} s={28}>not a belief: how things seem, before any thought</W></At>
      <At x={620} y={370} s={pop(t, fps, cup)}><Cup size={180} /></At>
      <At x={620} y={370} o={ramp(t, cup + 0.8, 0.5)}>
        <div style={{ width: 280, height: 220, borderRadius: 30, border: `4px solid ${WARM}88`, boxShadow: `0 0 30px ${WARM}55` }} />
      </At>
      <At x={620} y={530} o={ramp(t, cup + 1.0, 0.5)}><W c={WARM} s={28}>“simply there, on its own side”</W></At>
      <At x={1300} y={370} o={ramp(t, lens, 0.5)}><K c={TEAL} s={30}>dependency</K></At>
      <At x={1300} y={370} o={ramp(t, lens + 0.8, 0.6)}>
        <div style={{ width: 300, height: 120, borderRadius: 60, background: `${WARM}33`, border: `3px solid ${WARM}` }} />
      </At>
      <At x={1300} y={490} o={ramp(t, lens + 1.2, 0.5)}><W c={DIM} s={26}>read through the old lens</W></At>
      <Items items={[
        ["Things are still things", 960, 610, <W c={CHALK} s={28}>things still things; now they also depend</W>],
        ["The conditions become a new solid floor", 620, 690, <SK c={DIM} s={26} strikeAt={wc}>conditions: a new solid floor</SK>],
        ["Emptiness becomes a void, or a vast space", 1300, 690, <SK c={DIM} s={26} strikeAt={wc + 0.3}>emptiness: a void, a vast space</SK>],
        ["The words have changed", 960, 790, <W c={WARM} s={34} serif>the words have changed; the logic has not</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const PhenomenonScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const L: [string, string, string][] = [
    ["Vivid: nothing is taken away", "vivid: nothing taken away", RED],
    ["Not found: not in its parts", "not found: not in its parts, nor apart", ICE],
    ["Not even nowhere", "not even “nowhere”", DIM],
    ["Dependent already", "dependent already", TEAL],
    ["And clear, with no knower behind it", "clear, with no knower behind it", GOLD],
  ];
  const clear = c("The clarity belongs to the appearing itself");
  return (
    <AbsoluteFill>
      <Title at={c("So what is a phenomenon")}>what is a phenomenon?</Title>
      <At x={960} y={180} o={ramp(t, c("A vivid appearing that is not found"), 0.5)}><W c={GOLD} s={32} serif>a vivid appearing that is not found, even while appearing</W></At>
      {L.map(([cue, w, col], i) => {
        const a = c(cue);
        return (
          <At key={i} x={600} y={290 + i * 95} o={ramp(t, a - 0.2, 0.4)}>
            <div style={{ width: 680, display: "flex", alignItems: "center", gap: 20, textAlign: "left" }}>
              <Num n={String(i + 1)} color={col} lit={ramp(t, a, 0.3)} /><Glow color={col === DIM ? CHALK : col} size={30}>{w}</Glow>
            </div>
          </At>
        );
      })}
      <At x={1400} y={420} s={pop(t, fps, c("Vivid: nothing is taken away"))}><Apple size={200} glow={0.5 + 0.5 * ramp(t, clear, 0.8)} /></At>
      <Items items={[
        ["a car can still knock you down", 1400, 580, <W c={DIM} s={24}>a car can still knock you down</W>, { until: "And the mind that looks is not found either" }],
        ["And the mind that looks is not found either", 1400, 580, <W c={ICE} s={24}>the mind that looks: not found either</W>, { until: "The clarity belongs to the appearing itself" }],
        ["The clarity belongs to the appearing itself", 1400, 580, <W c={GOLD} s={26}>the appearing’s own clarity</W>],
        ["and it is empty too", 1400, 630, <W c={DIM} s={24}>no light from a witness; empty too</W>],
        ["No phenomenon, not even the mind, is the floor", 960, 790, <W c={CHALK} s={30} serif>no phenomenon, not even the mind, is the floor</W>],
      ]} />
    </AbsoluteFill>
  );
};

const AdmitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = c("We think inherently");
  const day = c("a self that decides, a world out there, a problem that is simply there");
  return (
    <AbsoluteFill>
      <Title at={c("one thing has to be admitted")}>admitting the problem</Title>
      <At x={960} y={300} s={pop(t, fps, w, 14)} o={ramp(t, w, 0.4)}><W c={WARM} s={56} serif>we think inherently</W></At>
      <At x={960} y={390} o={ramp(t, c("It is our default"), 0.4)}><W c={DIM} s={30}>not now and then: by default</W></At>
      {(["a self that decides", "a world out there", "a problem simply there"] as const).map((s, i) => (
        <At key={s} x={520 + i * 440} y={530} o={ramp(t, day + i * 0.9, 0.4)} s={pop(t, fps, day + i * 0.9)}><K c={WARM} s={28}>{s}</K></At>
      ))}
      <Items items={[
        ["Seeing it means noticing, in an ordinary day", 960, 460, <W c={CHALK} s={26}>noticing it, in an ordinary day</W>, { until: "a self that decides, a world out there, a problem that is simply there" }],
        ["It does not feel like a view at all", 960, 680, <W c={DIM} s={30}>it does not feel like a view at all</W>],
        ["It feels like how things are", 960, 760, <W c={CHALK} s={34} serif>it feels like how things are</W>],
      ]} />
    </AbsoluteFill>
  );
};

const WallScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const wall = c("even deep experience and genuine insight will hit a wall");
  const fr = c("while the framework that reads them is still inherent");
  const hit = ramp(t, wall + 0.4, 1.0);
  return (
    <AbsoluteFill>
      <Title at={wall - 0.6}>the wall</Title>
      <At x={1300} y={420} o={ramp(t, wall, 0.4)}>
        <div style={{ width: 40, height: 380, borderRadius: 6, background: `${WARM}55`, border: `3px solid ${WARM}`, boxShadow: `0 0 20px ${WARM}66` }} />
      </At>
      <At x={560 + 660 * hit} y={330} o={ramp(t, wall, 0.4)}><K c={GOLD} s={28}>experience</K></At>
      <At x={560 + 660 * hit} y={420} o={ramp(t, wall + 0.2, 0.4)}><K c={ICE} s={28}>insight</K></At>
      <At x={560} y={540} o={ramp(t, c("The experience can be non dual"), 0.4)}><W c={GOLD} s={26}>non dual experience, true insight</W></At>
      <At x={560} y={600} o={ramp(t, fr, 0.4)}><W c={WARM} s={26}>read by an inherent framework</W></At>
      <Items items={[
        ["Then presence becomes a ground", 1640, 300, <K c={DIM} s={24}>presence → a ground</K>, { pop: true }],
        ["emptiness becomes a void, and conditions", 1640, 400, <K c={DIM} s={24}>emptiness → a void</K>, { pop: true }],
        ["emptiness becomes a void, and conditions", 1640, 500, <K c={DIM} s={24}>conditions → things causing things</K>, { pop: true, d: 1.0 }],
        ["The experience has changed", 960, 760, <W c={CHALK} s={34} serif>the experience has changed; the framework has not</W>, { d: 0.3 }],
      ]} />
    </AbsoluteFill>
  );
};

const RemovalScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rem = c("practice becomes the removal of concepts");
  return (
    <AbsoluteFill>
      <Title at={c("Many practitioners, especially in Zen")}>experience first, view second?</Title>
      <Items items={[
        ["Many practitioners, especially in Zen", 960, 230, <W c={DIM} s={28}>direct experience first; view and logic second</W>, { d: 1.0 }],
        ["The author calls this a grave mistake", 960, 320, <W c={WARM} s={36} serif>a grave mistake</W>, { pop: true }],
      ]} />
      {(["a sound", "mine", "nice", "me"] as const).map((w, i) => (
        <At key={w} x={560 + i * 270} y={480 - 60 * ramp(t, rem + 1.2 + i * 0.2, 1.0)} o={ramp(t, rem + i * 0.15, 0.4) * (1 - ramp(t, rem + 1.2 + i * 0.2, 1.0))}>
          <Tag text={w} />
        </At>
      ))}
      <Items items={[
        ["practice becomes the removal of concepts", 960, 560, <W c={CHALK} s={32}>practice as removing concepts</W>, { d: 0.6 }],
        ["Bare attention", 560, 690, <K c={ICE} s={28}>not thinking</K>, { pop: true, d: -0.6 }],
        ["Bare attention", 960, 690, <K c={ICE} s={28}>bare attention</K>, { pop: true }],
        ["Bare attention", 1360, 690, <K c={ICE} s={28}>naked awareness</K>, { pop: true, d: 0.7 }],
      ]} />
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const mind = c("The mind can be tasted too");
  const like = c("But the mind is a phenomenon like any other");
  return (
    <AbsoluteFill>
      <Title at={c("These practices do something genuine")} color={GREEN}>they do something genuine</Title>
      <Items items={[
        ["the luminous clarity of appearances can be tasted directly", 560, 330, <PassingCar size={150} />, { pop: true }],
        ["the luminous clarity of appearances can be tasted directly", 560, 470, <W c={GOLD} s={30}>clarity, tasted directly</W>, { d: 0.6 }],
        ["But at most, that is all they do", 560, 550, <W c={DIM} s={28}>at most, that is all</W>],
        ["Removing concepts does not show what appearances are", 560, 630, <W c={CHALK} s={26}>it does not show what they are</W>],
        ["they can still be taken as existing from their own side", 560, 700, <SK c={DIM} s={24} strikeAt={like}>still taken as there from their own side</SK>],
      ]} />
      <At x={1360} y={330} o={ramp(t, mind, 0.5)}>
        <div style={{ width: 170, height: 170, borderRadius: "50%", background: `${ICE}22`, border: `3px solid ${ICE}`, boxShadow: `0 0 26px ${ICE}88` }} />
      </At>
      <Items items={[
        ["The mind can be tasted too", 1360, 470, <W c={ICE} s={28}>pure, clear awareness</W>, { d: 0.6 }],
        ["taken as the one thing that stands by itself", 1360, 550, <SK c={DIM} s={24} strikeAt={like + 0.4}>the one thing that stands by itself</SK>],
        ["But the mind is a phenomenon like any other", 1360, 630, <W c={CHALK} s={26}>a phenomenon like any other</W>],
        ["Its clarity is as empty as the red of the apple", 1360, 720, <Apple size={80} />, { pop: true }],
        ["Its clarity is as empty as the red of the apple", 960, 800, <W c={GOLD} s={30} serif>its clarity as empty as the red of the apple</W>, { d: 0.4 }],
      ]} />
    </AbsoluteFill>
  );
};

const LabelsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lab = c("Even the idea behind these practices pictures concepts as labels");
  const pic = c("That picture is itself the logic of substance");
  const tog = c("A thing and its designation arise together");
  const strip = c("Strip the labels, and the habit stays");
  const wit = c("That is how luminous clarity becomes a Witness");
  const peel = ramp(t, lab + 1.4, 1.0);
  return (
    <AbsoluteFill>
      <Title at={lab}>labels over a given world?</Title>
      {/* the picture: a given cube under a label; struck */}
      <At x={620} y={380} o={ramp(t, lab + 0.3, 0.5) * (1 - ramp(t, tog, 0.6))}>
        <div style={{ width: 170, height: 170, borderRadius: 10, border: `5px solid ${DIM}`, background: `${DIM}18` }} />
      </At>
      <At x={620} y={300 - 80 * peel} o={ramp(t, lab + 0.6, 0.4) * (1 - peel)}><Tag text="cup" /></At>
      <At x={620} y={500} o={ramp(t, lab + 1.0, 0.5) * (1 - ramp(t, tog, 0.6))}><SK c={DIM} s={24} strikeAt={pic + 0.6}>a given thing under the label</SK></At>
      <At x={620} y={380} s={pop(t, fps, tog)} o={ramp(t, tog, 0.4)}><Cup size={150} color={TEAL} /></At>
      <At x={620} y={500} o={ramp(t, tog + 0.6, 0.4)}><K c={TEAL} s={26}>thing and designation: together</K></At>
      <Items items={[
        ["That picture is itself the logic of substance", 1360, 330, <W c={WARM} s={28}>that picture: the logic of substance</W>],
        ["There is no unlabelled layer waiting to be uncovered", 1360, 410, <W c={DIM} s={26}>no unlabelled layer underneath</W>],
        ["Strip the labels, and the habit stays", 1360, 490, <W c={CHALK} s={26}>strip the labels: the habit stays</W>],
      ]} />
      {(["a Witness", "a ground", "a Source"] as const).map((s, i) => (
        <At key={s} x={1100 + i * 260} y={600} o={ramp(t, wit + 0.4 + i * 0.5, 0.4)}><SK c={DIM} s={26} strikeAt={c("Bare attention can taste the clarity of appearances") - 0.4}>{s}</SK></At>
      ))}
      <Items items={[
        ["It was the author's own story in the I AM years", 1360, 680, <W c={DIM} s={24}>the author’s own story, in the I AM years</W>],
        ["Bare attention can taste the clarity of appearances", 960, 750, <W c={ICE} s={30}>bare attention can taste the clarity</W>, { until: "Only the view shows what they are", ud: 0.0 }],
        ["Only the view shows what they are", 960, 790, <W c={GOLD} s={38} serif>only the view shows what it is</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string, string][] = [
    ["wrote that calm abiding alone", "Atiśa", "calm abiding alone does not end the obstructions", ICE],
    ["traced the habit behind appearances to a view", "Rongzom", "the habit behind appearances comes from a view", WARM],
    ["a Zen master, scolded those", "Dōgen", "the old Zen stories are not beyond logic", GOLD],
    ["advised that when thoughts arise", "Longchenpa", "when thoughts arise, the view is crucial", VIOLET],
    ["wrote that without the wisdom that realises", "Tsongkhapa", "without wisdom, even compassion cannot cut the root", TEAL],
    ["taught that, just as the I is a conceptual label", "Mipham", "like the “I”, all phenomena: labelled", ROSE],
  ];
  const fade = 1 - 0.55 * ramp(t, c("None of them says experience does not matter"), 0.6);
  return (
    <AbsoluteFill>
      <Title at={c("The great masters said the same")} y={100}>the great masters said the same</Title>
      {rows.map(([cue, name, w, col], i) => {
        const a = c(cue) - (i === 0 ? 0.6 : 0.3);
        return (
          <React.Fragment key={i}>
            <At x={460} y={190 + i * 82} o={ramp(t, a, 0.4) * fade}><K c={col} s={28}>{name}</K></At>
            <At x={1160} y={190 + i * 82} o={ramp(t, a + 0.6, 0.5) * fade}><div style={{ width: 960, textAlign: "left" }}><W c={CHALK} s={28}>{w}</W></div></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["Hearing that there is water does not quench thirst", 960, 700, <W c={ICE} s={30}>hearing of water does not quench thirst; drinking does</W>],
        ["experience without the view cannot do the work", 960, 790, <W c={GOLD} s={36} serif>experience without the view cannot do the work</W>],
      ]} />
    </AbsoluteFill>
  );
};

const JourneyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("What changed things was seeing directly what a phenomenon is");
  return (
    <AbsoluteFill>
      <Title at={c("For the author, after I AM")}>the author’s turn</Title>
      <Items items={[
        ["the vividness was never what was missing", 960, 240, <W c={GOLD} s={32}>the vividness was never missing</W>],
        ["What was missing was seeing what that vividness is", 960, 320, <W c={CHALK} s={32}>what was missing: seeing what it is</W>],
      ]} />
      <At x={960} y={460} s={pop(t, fps, ch)}><Apple size={160} /></At>
      <Items items={[
        ["What changed things was seeing directly what a phenomenon is", 960, 590, <W c={GOLD} s={36} serif>vivid and nowhere</W>, { d: 1.2 }],
        ["with no knower behind the knowing", 960, 660, <W c={DIM} s={28}>no knower behind the knowing · no ground behind the appearing</W>],
        ["Only then did the logic of dependency become clear", 960, 760, <W c={TEAL} s={32}>then the logic became clear: not a theory, how things are</W>],
      ]} />
    </AbsoluteFill>
  );
};

const KoanAgainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  // the koan lines repeat words cued earlier, so they are placed by offset from this cue
  const back = c("Now return to the koan");
  return (
    <AbsoluteFill>
      <Title at={back} color={DIM} size={34}>back to the koan</Title>
      <At x={960} y={360} s={pop(t, fps, back + 1.2, 14)} o={ramp(t, back + 1.2, 0.5)}><W c={GOLD} s={60} serif>This moment ceases as it arises.</W></At>
      <At x={960} y={500} s={pop(t, fps, back + 3.4, 14)} o={ramp(t, back + 3.4, 0.5)}><W c={ICE} s={60} serif>Does it arise, or does it cease?</W></At>
    </AbsoluteFill>
  );
};

const AnswersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const thing = c("The logic of substance starts with a thing");
  const choose = c("So it must choose");
  const ar = c("It arises? Then it is there");
  const ce = c("It ceases? Then something passes away");
  const bo = c("Coming into being and passing away are opposites");
  const ne = c("Neither? Then nothing happens at all");
  const fail = c("Every answer fails");
  const A: [string, number, number, string][] = [["it arises", ar - 0.3, ce - 0.4, ICE], ["it ceases", ce - 0.3, bo - 0.4, ROSE], ["both", bo - 0.6, ne - 0.4, VIOLET], ["neither", ne - 0.3, fail, GOLD]];
  return (
    <AbsoluteFill>
      <At x={960} y={170} s={pop(t, fps, thing)}>
        <div style={{ padding: "16px 34px", border: `5px solid ${WARM}`, borderRadius: 8, background: `${WARM}22`, boxShadow: `0 0 20px ${WARM}66` }}>
          <Glow color={CHALK} size={34} serif>“this moment”: a thing</Glow>
        </div>
      </At>
      <At x={960} y={260} o={ramp(t, thing + 1.4, 0.5)}><W c={DIM} s={28}>arising and ceasing happen to it</W></At>
      {A.map(([w, at, s, col], i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={400} o={ramp(t, choose, 0.4) * 0.35 + 0.65 * ramp(t, at, 0.4)} s={at < t ? pop(t, fps, at) : 1}>
            <SK c={col} s={32} strikeAt={s}>{w}?</SK>
          </At>
        </React.Fragment>
      ))}
      <Items items={[
        ["it is never there to have arisen", 420, 500, <W c={DIM} s={24}>never there to have arisen</W>],
        ["what passes away, if it never stood", 780, 500, <W c={DIM} s={24}>what passes, if it never stood?</W>],
        ["Coming into being and passing away are opposites", 1140, 500, <W c={DIM} s={24}>opposites, in one thing?</W>, { d: 1.0 }],
        ["Yet a sound is being heard right now", 1500, 500, <PassingCar size={80} />, { pop: true }],
        ["Yet a sound is being heard right now", 1500, 580, <W c={DIM} s={24}>yet a sound is heard</W>, { d: 0.4 }],
        ["Every answer fails", 960, 740, <W c={WARM} s={40} serif>every answer fails</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const VerseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = c("There is no passing away either apart from coming into being");
  return (
    <AbsoluteFill>
      <Items items={[["put the whole trap in one verse", 960, 220, <K c={GOLD} s={30}>Nāgārjuna, in one verse</K>, { pop: true, d: -1.0 }]]} />
      <At x={960} y={420} o={ramp(t, v - 0.3, 0.3)}>
        <div style={{ width: 1400, textAlign: "center" }}>
          <Reveal text="“There is no passing away either apart from coming into being, or together with it.”" at={v} size={56} speed={0.04} wrap />
        </div>
      </At>
    </AbsoluteFill>
  );
};

const WaysOutScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const now = c("The logic of substance looks for a way out") + 1.4;
  const aw = c("an awareness in which moments come and go");
  const each = c("Each keeps the moment as a thing");
  const dots = (x0: number, y0: number, at: number, path: (q: number) => [number, number]) =>
    [0, 1, 2].map((k) => {
      const q = (((t - at) * 0.25 + k / 3) % 1 + 1) % 1;
      const [x, y] = path(q);
      return <At key={k} x={x0 + x} y={y0 + y} o={ramp(t, at + 0.4, 0.4)}><K c={CHALK} s={18}>moment</K></At>;
    });
  return (
    <AbsoluteFill>
      <Title at={c("The logic of substance looks for a way out")} color={WARM}>looking for a way out</Title>
      {/* a timeless Now: a band the moments pass through */}
      <At x={600} y={420} o={ramp(t, now, 0.5)}><div style={{ width: 120, height: 300, borderRadius: 12, border: `3px dashed ${DIM}`, background: `${DIM}14` }} /></At>
      {dots(600, 420, now, (q) => [-200 + 400 * q, -80 + 80 * ((q * 3) % 1 > 0.5 ? 1 : 0)])}
      <At x={600} y={620} o={ramp(t, now + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={each}>a timeless Now</SK></At>
      <Crossed x={600} y={420} at={each - 0.2} size={60} />
      {/* an awareness: a container the moments come and go in */}
      <At x={1320} y={420} o={ramp(t, aw, 0.5)}><div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px dashed ${DIM}`, background: `${DIM}10` }} /></At>
      {dots(1320, 420, aw, (q) => [100 * Math.cos(q * 6.28), 100 * Math.sin(q * 6.28)])}
      <At x={1320} y={620} o={ramp(t, aw + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={each + 0.4}>an awareness they come and go in</SK></At>
      <Crossed x={1320} y={420} at={each + 0.2} size={70} />
      <Items items={[
        ["only moves it somewhere else", 960, 760, <W c={WARM} s={32} serif>each keeps the moment as a thing, and only moves it</W>, { d: -1.0 }],
      ]} />
    </AbsoluteFill>
  );
};

const DesignateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const asks = c("It asks how this moment is picked out at all");
  const tog = c("A moment is picked out together with its arising and its ceasing");
  const p = pop(t, fps, tog + 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("The logic of dependency starts one step earlier")} color={TEAL}>one step earlier</Title>
      <At x={960} y={260} o={ramp(t, asks, 0.5) * (1 - ramp(t, tog + 0.8, 0.4))}><W c={CHALK} s={32}>how is “this moment” picked out at all?</W></At>
      <At x={560} y={440} s={p}><K c={ICE} s={34}>arising</K></At>
      <At x={960} y={440} s={p}><K c={GOLD} s={34}>this moment</K></At>
      <At x={1360} y={440} s={p}><K c={ROSE} s={34}>ceasing</K></At>
      <Flow x1={660} y1={440} x2={850} y2={440} color={TEAL} p={ramp(t, tog + 1.6, 0.5)} pulses={false} />
      <Flow x1={1070} y1={440} x2={1260} y2={440} color={TEAL} p={ramp(t, tog + 1.6, 0.5)} pulses={false} />
      <Svg><DrawPath d="M560 480 Q960 640 1360 480" p={ramp(t, tog + 2.0, 0.8)} color={TEAL} width={3} len={900} /></Svg>
      <Items items={[
        ["A moment is picked out together with its arising and its ceasing", 960, 260, <W c={TEAL} s={32}>picked out together</W>, { d: 1.0 }],
        ["None comes first, and none is found apart from the others", 960, 640, <W c={GOLD} s={34} serif>none first, none found apart</W>],
        ["merely designated as such upon conditions", 960, 760, <W c={CHALK} s={30}>“merely designated as such upon conditions”</W>],
      ]} />
    </AbsoluteFill>
  );
};

const StairsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("Think of a staircase");
  const upAt = c("up for someone climbing");
  const downAt = c("down for someone coming down");
  const up = ramp(t, upAt + 0.1, 1.4);
  const down = ramp(t, Math.max(downAt + 0.1, upAt + 1.6), 2.4);
  const p = Math.max(0, up - down); // 0 = bottom, 1 = top
  const goingDown = t > Math.max(downAt + 0.1, upAt + 1.6);
  const moving = (t > upAt + 0.1 && up < 1) || (goingDown && down < 1);
  const i = Math.round(p * 5);
  const footY = 690 - (i + 1) * 60;
  const x = 660 + p * 500;
  let stairs = "M520 690 L610 690";
  for (let k = 0; k < 6; k++) stairs += ` L${610 + k * 100} ${630 - k * 60} L${710 + k * 100} ${630 - k * 60}`;
  stairs += " L1320 330";
  return (
    <AbsoluteFill>
      <Title at={st}>a staircase</Title>
      <Svg>
        <DrawPath d={stairs} p={ramp(t, st, 1.4)} color={CHALK} width={6} len={2000} />
        <DrawPath d="M1320 330 L1320 690 L520 690" p={ramp(t, st + 0.8, 1.0)} color={DIM} width={3} len={1300} glow={false} />
      </Svg>
      <At x={x} y={footY - 62} o={ramp(t, upAt, 0.4)}><Walker face={goingDown ? -1 : 1} step={moving ? t * 9 : 0} /></At>
      <At x={x} y={footY - 150} o={ramp(t, upAt + 0.1, 0.3) * (goingDown ? 0 : 1)}><K c={GREEN} s={30}>up</K></At>
      <At x={x} y={footY - 150} o={goingDown ? 1 : 0}><K c={ICE} s={30}>down</K></At>
      <Items items={[
        ["Up, or down", 1600, 360, <W c={CHALK} s={34}>up, or down?</W>],
        ["In themselves, neither", 1600, 430, <W c={GOLD} s={30} serif>in themselves: neither</W>],
        ["And they are truly climbed", 960, 770, <W c={CHALK} s={30}>truly climbed</W>, { until: "The moment is the same" }],
        ["The moment is the same", 960, 770, <W c={GOLD} s={30} serif>the moment is the same</W>],
        ["It is not nothing, and it is not only in the mind", 1600, 520, <W c={TEAL} s={26}>not nothing; not only in the mind</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FallsAwayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const plain = c("is not a paradox");
  const noit = c("There is no it standing between the arising and the ceasing");
  const q = c("The question is not answered");
  const fall = ramp(t, c("It falls away") + 0.2, 1.8);
  return (
    <AbsoluteFill>
      <Title at={plain}>“ceases as it arises”: a plain description</Title>
      <At x={560} y={330} s={pop(t, fps, noit - 0.4)}><K c={ICE} s={34}>arising</K></At>
      <At x={960} y={330} s={pop(t, fps, noit)}><SK c={DIM} s={34} strikeAt={noit + 1.6}>it</SK></At>
      <At x={1360} y={330} s={pop(t, fps, noit - 0.4)}><K c={ROSE} s={34}>ceasing</K></At>
      <At x={960} y={420} o={ramp(t, noit + 2.0, 0.5)}><W c={DIM} s={28}>no “it” standing between</W></At>
      <At x={960} y={540 + 220 * fall} r={40 * fall} o={ramp(t, q, 0.5) * (1 - fall)}><W c={WARM} s={110} serif>?</W></At>
      <Items items={[
        ["The question is not answered", 960, 680, <W c={CHALK} s={30}>not answered</W>, { d: 0.6, until: "It falls away" }],
        ["It falls away", 960, 780, <W c={GOLD} s={44} serif>it falls away</W>, { d: 0.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const StepsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const head = c("The eight steps of The Logic each come back");
  return (
    <AbsoluteFill>
      <Title at={head}>the eight steps</Title>
      {Array.from({ length: 8 }).map((_, i) => (
        <At key={i} x={540 + i * 120} y={220} s={pop(t, fps, head + 0.5 + i * 0.25)}><Num n={String(i + 1)} color={i === 7 ? GOLD : TEAL} lit={i === 7 ? ramp(t, c("The last step gathers it all into four questions"), 0.3) : 1} /></At>
      ))}
      <Items items={[
        ["What exactly is denied", 960, 380, <W c={CHALK} s={32}>what exactly is denied?</W>, { until: "Looked for, like the old masters' chariot" }],
        ["only the it, the moment standing on its own", 960, 470, <SK c={WARM} s={30} strikeAt={c("only the it, the moment standing on its own") + 2.0}>only the “it”, standing on its own</SK>, { until: "Looked for, like the old masters' chariot" }],
        ["Looked for, like the old masters' chariot", 960, 380, <W c={DIM} s={30}>looked for, like the chariot: not found</W>, { until: "Conventionally, the train leaves and arrives" }],
        ["Yet moments are named, counted and timed", 960, 500, <Clock size={120} />, { pop: true, until: "Conventionally, the train leaves and arrives" }],
        ["Yet moments are named, counted and timed", 960, 610, <W c={GOLD} s={28}>yet named, counted and timed</W>, { d: 0.4, until: "Conventionally, the train leaves and arrives" }],
        ["Conventionally, the train leaves and arrives", 960, 420, <Train w={220} />, { pop: true, until: "It is because nothing stands on its own" }],
        ["Conventionally, the train leaves and arrives", 960, 540, <W c={GOLD} s={28}>conventionally: leaves and arrives</W>, { d: 0.6, until: "It is because nothing stands on its own" }],
        ["One moment, met two ways", 960, 620, <W c={TEAL} s={30} serif>one moment, met two ways</W>, { until: "It is because nothing stands on its own" }],
        ["It is because nothing stands on its own", 960, 440, <W c={GREEN} s={32}>nothing stands alone, so things can arise, change and work</W>, { until: "The last step gathers it all into four questions" }],
        ["The last step gathers it all into four questions", 960, 440, <W c={GOLD} s={34} serif>the last step: four questions</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FourQScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const Q: [string, string, string][] = [
    ["What would a substance view say", "what would a substance view say?", WARM],
    ["What does dependency say instead", "what does dependency say instead?", TEAL],
    ["What is affirmed conventionally", "what is affirmed conventionally?", GOLD],
    ["What is never found", "what is never found?", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Title at={c(Q[0][0]) - 1.2}>four questions, for any question</Title>
      {Q.map(([cue, w, col], i) => (
        <React.Fragment key={i}>
          <At x={i % 2 ? 1340 : 580} y={i < 2 ? 330 : 560} s={pop(t, fps, c(cue))}>
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}><Num n={String(i + 1)} color={col} lit={1} /><K c={col} s={30}>{w}</K></div>
          </At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const BeyondScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const close = ramp(t, c("Close your hand, and a fist appears"), 0.8) * (1 - ramp(t, c("Open it, and the fist is gone"), 0.8));
  const Q: [string, number, string, string][] = [
    ["Look for the one who changed, apart from the changing", 420, "the self", ICE],
    ["Close your hand, and a fist appears", 960, "an object", WARM],
    ["Look for a friend apart from the face", 1500, "the person", ROSE],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The same logic reaches beyond the moment")}>beyond the moment</Title>
      {Q.map(([cue, x, w, col]) => (
        <At key={w} x={x} y={230} o={ramp(t, c("The same logic reaches beyond the moment") + 0.6, 0.5) * (0.4 + 0.6 * ramp(t, c(cue), 0.4))}>
          <K c={col} s={30}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["Look for the one who changed, apart from the changing", 420, 360, <Person color={ICE} size={130} />, { pop: true }],
        ["Look for the one who changed, apart from the changing", 420, 490, <SK c={DIM} s={24} strikeAt={c("Yet a promise I made is still mine to keep") - 0.4}>an “I” apart from the changing</SK>, { d: 0.6 }],
        ["Yet a promise I made is still mine to keep", 420, 570, <W c={GOLD} s={26}>the promise is still mine to keep</W>],
        ["Close your hand, and a fist appears", 960, 380, <Hand closed={close} />, { pop: true }],
        ["Close your hand, and a fist appears", 960, 490, <W c={WARM} s={28}>a “fist”</W>, { d: 0.6, until: "Open it, and the fist is gone", ud: 0.4 }],
        ["It went nowhere", 960, 570, <W c={DIM} s={26}>it went nowhere</W>],
        ["Look for a friend apart from the face", 1410, 380, <Person color={ROSE} size={110} />, { pop: true }],
        ["Look for a friend apart from the face", 1590, 380, <Person color={TEAL} size={110} />, { pop: true, d: 0.3 }],
        ["Look for a friend apart from the face", 1500, 490, <W c={DIM} s={24}>no one found apart</W>, { d: 2.4 }],
        ["someone lived, was loved, and is missed", 1500, 570, <W c={ROSE} s={26} serif>lived, loved, and missed</W>],
      ]} />
    </AbsoluteFill>
  );
};

const NothingLostScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sub = c("Dependent arising is not a lesser layer");
  const drop = ramp(t, c("There is nothing underneath for it to cover"), 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("Nothing is lost when the it is not found")}>nothing is lost</Title>
      <Items items={[
        ["The sound is still heard", 700, 360, <PassingCar size={150} />, { pop: true }],
        ["The sound is still heard", 700, 500, <W c={GOLD} s={28}>still heard</W>, { d: 0.4 }],
        ["Actions still bear fruit", 1220, 350, <Fruit />, { pop: true }],
        ["Actions still bear fruit", 1220, 500, <W c={GREEN} s={28}>still bear fruit</W>, { d: 0.4 }],
      ]} />
      <At x={960} y={660 + 160 * drop} o={ramp(t, sub, 0.5) * (1 - drop)}><Floor w={700} color={DIM} dashed /></At>
      <At x={960} y={616} o={ramp(t, sub + 0.3, 0.5) * (1 - drop)}><W c={DIM} s={26}>something underneath that stands by itself?</W></At>
      <div style={{ position: "absolute", inset: 0, opacity: 1 - drop }}><Crossed x={960} y={660} at={sub + 1.2} size={50} /></div>
      <At x={960} y={720} o={ramp(t, c("There is nothing underneath for it to cover") + 1.0, 0.6)}><W c={GOLD} s={34} serif>nothing underneath for it to cover</W></At>
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("Listen to one sound until it ends");
  const col = c("Look at a colour in front of you");
  const wind = c("Say to yourself, the wind is blowing");
  return (
    <AbsoluteFill>
      <Title at={c("So, a few things to try")}>try it</Title>
      {/* one sound */}
      <At x={420} y={330} s={pop(t, fps, one)}><PassingCar size={150} /></At>
      <Sound x={420} y={340} at={one + 0.4} dur={3} r1={200} />
      <Items items={[
        ["Listen to one sound until it ends", 420, 470, <K c={GOLD} s={26}>one sound, until it ends</K>, { d: 0.4 }],
        ["Then ask where it was", 420, 550, <W c={CHALK} s={26}>where was it?</W>],
        ["just look", 420, 620, <W c={DIM} s={24}>don’t answer with a thought: look</W>],
      ]} />
      {/* a colour */}
      <At x={960} y={330} s={pop(t, fps, col)}><Apple size={140} /></At>
      <Items items={[
        ["Look at a colour in front of you", 960, 470, <K c={RED} s={26}>a colour, in front of you</K>, { d: 0.4 }],
        ["Is there a seer behind the seeing", 960, 550, <W c={CHALK} s={26}>a seer behind the seeing?</W>],
      ]} />
      {/* the wind */}
      <At x={1500} y={330} o={ramp(t, wind, 0.4)}><Wind /></At>
      <Items items={[
        ["Say to yourself, the wind is blowing", 1500, 470, <K c={ICE} s={26}>“the wind is blowing”</K>, { d: 0.4 }],
        ["Then feel the wind on your skin", 1500, 550, <W c={CHALK} s={26}>feel it on your skin</W>],
        ["Is there a wind apart from the blowing", 1500, 620, <W c={CHALK} s={26}>a wind apart from the blowing?</W>],
      ]} />
    </AbsoluteFill>
  );
};

const CarAgainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to a sound once more");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, b - 0.3)}><PassingCar swing={swing} /></At>
      <Sound x={960} y={400} at={b + 0.4} dur={5} />
      <Items items={[
        ["It is vivid", 700, 640, <K c={GOLD} s={32}>vivid</K>, { pop: true }],
        ["It is vivid", 1220, 640, <K c={ICE} s={32}>gone</K>, { pop: true, d: 0.9 }],
        ["And nothing went anywhere", 960, 760, <W c={CHALK} s={36} serif>and nothing went anywhere</W>],
      ]} />
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ask = c("Ask what arises, and the koan is a paradox");
  const end = c("the koan is simply this moment");
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={ramp(t, ask, 0.5) * (1 - 0.6 * ramp(t, end, 0.6))}><W c={WARM} s={40} serif>ask what arises: a paradox</W></At>
      <At x={960} y={420} s={pop(t, fps, end - 0.6)}><PassingCar size={150} /></At>
      <Sound x={960} y={440} at={end} dur={4} r1={520} />
      <At x={960} y={640} s={pop(t, fps, end + 0.4, 16)} o={ramp(t, end + 0.4, 0.8)}><W c={GOLD} s={56} serif>simply this moment</W></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Listen to a car going by"], ["web", "This video draws on The Logic"],
    ["vivid", "Every appearance is vivid, and it cannot be found"], ["sea", "Appearance arises whenever its conditions come together"],
    ["doubt", "We habitually and intuitively think inherently"], ["search", "But experience is never like that"],
    ["web", "There is no given"], ["vivid", "Anatta is the first door"],
    ["doubt", "Why does the logic need the seeing"], ["vivid", "So what is a phenomenon"],
    ["doubt", "one thing has to be admitted"], ["search", "Many practitioners, especially in Zen"],
    ["whole", "The great masters said the same"], ["vivid", "For the author, after I AM"],
    ["search", "Now return to the koan"], ["doubt", "The logic of substance looks for a way out"],
    ["web", "The logic of dependency starts one step earlier"], ["vivid", "Think of a staircase"],
    ["sea", "The eight steps of The Logic each come back"], ["vivid", "The same logic reaches beyond the moment"],
    ["whole", "Nothing is lost when the it is not found"], ["sea", "So, a few things to try"], ["vivid", "Listen to a sound once more"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Listen to a car going by", <CarScene />],
    ["Here is a koan to hold in mind", <KoanScene />],
    ["This video draws on The Logic", <TwoWaysScene />],
    ["But the author puts one thing first", <ClaimScene />],
    ["So he names four insights after anatta", <FourScene />],
    ["Every appearance is vivid, and it cannot be found", <AppleScene />],
    ["Not vivid first and empty later", <BothScene />],
    ["Appearance arises whenever its conditions come together", <ConditionsScene />],
    ["We habitually and intuitively think inherently", <SentenceScene />],
    ["But experience is never like that", <NeverScene />],
    ["And this habit runs almost by default", <HabitScene />],
    ["There is no given", <GivenScene />],
    ["The first two are one fact, seen from two sides", <OneFactScene />],
    ["Anatta is the first door", <DoorScene />],
    ["And where do the four insights lead", <PresenceScene />],
    ["Why does the logic need the seeing", <LogicsScene />],
    ["But agreeing changes very little", <SubstanceScene />],
    ["So what is a phenomenon", <PhenomenonScene />],
    ["one thing has to be admitted", <AdmitScene />],
    ["even deep experience and genuine insight will hit a wall", <WallScene />],
    ["Many practitioners, especially in Zen", <RemovalScene />],
    ["These practices do something genuine", <TasteScene />],
    ["Even the idea behind these practices pictures concepts as labels", <LabelsScene />],
    ["The great masters said the same", <MastersScene />],
    ["For the author, after I AM", <JourneyScene />],
    ["Now return to the koan", <KoanAgainScene />],
    ["The logic of substance starts with a thing", <AnswersScene />],
    ["put the whole trap in one verse", <VerseScene />],
    ["The logic of substance looks for a way out", <WaysOutScene />],
    ["The logic of dependency starts one step earlier", <DesignateScene />],
    ["Think of a staircase", <StairsScene />],
    ["is not a paradox", <FallsAwayScene />],
    ["The eight steps of The Logic each come back", <StepsScene />],
    ["What would a substance view say", <FourQScene />],
    ["The same logic reaches beyond the moment", <BeyondScene />],
    ["Nothing is lost when the it is not found", <NothingLostScene />],
    ["So, a few things to try", <TryScene />],
    ["Listen to a sound once more", <CarAgainScene />],
    ["Ask what arises, and the koan is a paradox", <CloseScene />],
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
