// Anatta to Emptiness, Bonus: The Illusion of the Given. Explainer drawings timed to the narration.
// Arc: one bowl, five beings -> the two-layer picture (a neutral stuff under the bowl) -> the hidden thing does no
// work, wetness, own nature -> agreement is everyday truth; mind and object together; jaundice within a kind; the
// ghost is not mistaken -> the working reference point -> Vasubandhu and Candrakirti: neither world nor mind is the
// floor -> other minds, the circle, language -> Dzogchen: the basis, display, knowing awareness, self-knowing, pure
// vision -> echoes in physics, no floor of relations -> channels of contact (tick, dark matter, neutrino) -> the
// water offering and its cautions -> the container myth -> order, "enables nothing", no first beginning ->
// compassion -> "everything works" -> it never needed one.
// Stance: a ground, a neutral stuff, a projector or a floor of relations is drawn only in order to remove it.
// Phrases avoid every word the pronunciation map respells (Candrakirti, Nagarjuna, Dzogchen, Mamaki, Mipham...).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring, Strike,
  Scene, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the bowl
  "Picture a single bowl of liquid", "A human sees clear, refreshing water", "A hungry ghost, driven by deep habits of craving",
  "A fish finds the air it breathes", "A god tastes delicious nectar", "And an awakened being sees the pure wisdom form of water",
  "It is one of the oldest examples", "What is really in the bowl",
  "Common sense has a ready answer", "some raw, neutral stuff", "each creature looks at it through its own lens", "Two layers",
  "The Middle Way of", "both take this picture apart", "Agreement does not need a hidden bedrock", "The thing seen, the one seeing",
  "identified together, each depending on the others", "And the relations between them are just as impossible to pin down",
  // the hidden thing
  "Start with a word we slipped in", "The liquid", "already assumes an object waiting there",
  "This is the old idea that Kant made famous", "a thing in itself, hidden behind the senses",
  "So ask what this hidden thing is like", "If it has definite qualities", "it cannot explain why the ghost meets burning pus",
  "If it has no qualities at all", "a featureless blank cannot cause any experience", "Either way, it does no work",
  "Someone will push back", "Why not simply wetness", "But if wetness is claimed to exist by itself",
  "Wetness in general is an abstraction made by thought", "this drinkable water, this foul pus, this water a fish lives in",
  "And if wetness is only an agreed reference point", "It is a useful label for comparing views",
  "analysis targets is called", "own nature", "depending on nothing", "A neutral substance beneath appearances", "in a modest disguise",
  // agreement
  "Then a real question remains", "why do humans agree so reliably", "Why doesn't the shared world fall apart into private fantasies",
  "The Indian master", "turns the question around", "Agreement does not prove a hidden object",
  "Shared, reliable agreement is simply what everyday truth is",
  "He also refuses the opposite move", "The Mind-Only view tried to solve the puzzle", "But a seeing cannot be identified without what is seen",
  "an object cannot be identified without the senses", "Neither mind nor matter comes first", "Making the mind the container of everything",
  "Within everyday truth, mistakes are still caught", "A person with jaundice sees a white conch shell as yellow",
  "with healthy eyes, correct them", "But notice where that judgement is made", "It is made within one kind of being",
  "The hungry ghost is not a jaundiced human", "its senses work normally", "It is not suffering an illusion of water",
  "the liquid really does function as pus",
  "So what of the bowl itself", "what is denied is a shared base", "What is kept is a working reference point",
  "where different ways of appearing meet", "Its job is to coordinate, not to sit underneath",
  // Vasubandhu and the reply
  "The bowl example did not begin in the Middle Way", "in his Twenty Verses", "all see a river of pus together",
  "Shared karma, ripening in consciousness", "no river outside the mind is needed",
  "That answers the question by making consciousness the floor", "turned the example around", "neither does the mind",
  "stand or fall together", "So the bowl does not show that the world is inside the mind", "neither the world nor the mind is the floor",
  // others, the circle, language
  "Agreement also needs others to agree with", "my own experience is certain, and yours only inferred",
  "The Middle Way refuses that imbalance", "my stream of mind is no more findable than yours", "as long is identified together with short",
  "A critic can press further", "Isn't that circular", "the circle is not a flaw", "a final judge outside every point of view",
  "There is no such judge", "so no foundation is missing", "Wittgenstein reached a similar point", "not in opinions, but in form of life",
  "correction is still real",
  "much of this agreement is carried by language", "A child learns the word water because it works", "Say it, and a glass arrives",
  "where the habit of making things solid is strongest", "seems to point at one solid thing behind every view of it",
  // the experiential side
  "describes the same freedom from the side of experience", "the basis is primordially pure",
  "It is not a hidden block of stuff, a cosmic mind", "says it is called a ground only from a relative point of view",
  "it is empty of being any ground at all",
  "Appearances are called display", "And display is not the display of something standing behind it",
  "It is dependent arising itself, vivid and unobstructed", "Even the feeling of being a subject inside",
  "arising together with the object outside",
  "Knowing awareness", "is not a projector throwing out a world", "It is not a subtle stuff behind appearing",
  "It is the knowing of the basis", "unfixed, dependent and empty", "The clarity belongs to the appearing itself",
  "The traditions divide on whether awareness knows itself", "rejected self-knowing awareness",
  "made the argument famous with a sword that cannot cut itself", "In the author's own reading",
  "Ultimately, self-knowing cannot be found", "Conventionally, it stays a useful everyday term",
  "without an endless chain of minds watching minds",
  "also separates ordinary vision from pure vision", "no kind of being has the last word over another",
  "Even the gods' nectar belongs here", "Pure vision is clearer", "But pure vision is not a window onto a bedrock",
  "has no nature of her own", "sees without the distortion",
  // physics
  "Modern physics offers echoes of this", "Only echoes, not proofs",
  "For Karen Barad", "They emerge through what she calls intra-action", "So there is no liquid sitting there before the measurement",
  "The human drinker and the water appear together", "the suffering ghost and the pus appear together",
  "In Carlo Rovelli's relational quantum mechanics", "values only relative to another system", "How, then, do two observers agree",
  "Rovelli answered with cross-perspective links", "If one observer records a value", "the two will match",
  "Agreement comes from checking across perspectives",
  "But neither theory should be read as saying", "That would only build another floor", "examined contact itself",
  "Relations and the things related are identified together",
  // channels of contact
  "If appearances depend on channels of contact", "Contact comes in degrees", "A tick responds mainly to three signals",
  "the smell of mammal sweat", "the warmth of a body", "and hair", "A pool of clear spring water has none of these",
  "Yet the tick can still drown in it",
  "Dark matter passes through the Earth", "yet gravity still bends its path", "A neutrino can pass through lead",
  "The lead is neither a wall nor nothing", "It is a region of very weak contact",
  "The bowl is not erased", "Everyday existence does not wait for someone to be naming it", "But what appears there",
  "depends on which channels are active in the meeting",
  // the offering
  "The hardest test is contact between worlds", "water is blessed with a mantra and given", "it reaches them as nectar",
  "Not by a substance that travels", "Nothing passes from the human bowl into the ghost's mouth",
  "from the evening flame into the midnight flame", "The giving belongs to the human world", "The relief belongs to the ghost's",
  "They are linked as condition and result",
  "Two cautions belong here", "This does not prove that such practices work", "the mantra is not a power living inside sounds",
  "the power to open lives in a key", "apart from the lock, the hand and the door",
  // the container, order
  "Why do we cling so hard", "Because of the container myth", "We picture space as an empty box",
  "place a solid object in the middle", "put observers around it", "In Einstein's theory, spacetime is not an empty stage",
  "It is the gravitational field itself", "space cannot exist before its own defining mark", "When the box goes",
  "One last question", "why is the world so orderly", "Barley seeds grow barley, not rice", "Fire burns and does not freeze",
  "does not make anything arbitrary",
  "But emptiness is not what makes cause and effect work either", "Emptiness enables nothing and explains nothing",
  "Things never needed a fixed essence in order to work", "Something with a fixed essence could never arise, change or end",
  "Press further", "the question treats the whole web as one thing", "But the whole is a label too",
  "dependent arising has no first beginning", "It runs out of steam",
  // close
  "So this is not nihilism", "It is not idealism", "it is not anything goes", "the anxious demand for a foundation",
  "a dead, unmoving ballast beneath the living display",
  "It also matters beyond philosophy", "If the ghost's pus is really pus for the ghost",
  "its suffering is not a mistake to be explained away", "No point of view owns the real world",
  "That is why compassion makes sense without a self behind it", "Emptiness takes nothing away from others' suffering",
  "put it in one line", "where the key word means fits, or works", "For whom emptiness works, everything works",
  "And from the side of", "when appearances are recognised as display", "appearing is met as it always was",
  "Vivid, unproduced, and not found anywhere", "Everyday life does not carry on in spite of having no foundation",
  "And it does not appear because it has none", "It never needed one",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  web: { a: "rgba(80,50,150,0.5)", b: "rgba(150,100,40,0.36)", c: "rgba(40,40,110,0.35)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  vivid: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
};

// ---------------------------------------------------------------- drawings
const Title: React.FC<{ y?: number; at: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ y = 110, at, color = CHALK, size = 42, o = 1, children }) => {
    const { t } = useT();
    return <At x={960} y={y} o={ramp(t, at, 0.5) * o}><Glow color={color} size={size} serif>{children}</Glow></At>;
  };

/** A line of text that fades in at `at` (and out at `out`, if given). */
const Line: React.FC<{ x?: number; y: number; at: number; out?: number; color?: string; size?: number; serif?: boolean; children: React.ReactNode }> =
  ({ x = 960, y, at, out, color = CHALK, size = 32, serif, children }) => {
    const { t } = useT();
    const o = out === undefined ? ramp(t, at, 0.5) : between(t, at, out, 0.5);
    return <At x={x} y={y} o={o}><Glow color={color} size={size} serif={serif}>{children}</Glow></At>;
  };

/** A bowl seen from the side, holding a liquid of the given colour. */
const Bowl: React.FC<{ liquid?: string; size?: number; rim?: string; o?: number }> = ({ liquid = ICE, size = 1, rim = CHALK, o = 1 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={200 * size} viewBox="0 0 360 200" style={{ overflow: "visible", opacity: o,
      filter: `drop-shadow(0 0 ${10 + 4 * Math.sin(t * 1.4)}px ${liquid}88)` }}>
      <path d="M20 60 Q180 250 340 60 Z" fill={`${liquid}55`} stroke="none" />
      <ellipse cx={180} cy={60} rx={160} ry={26} fill={`${liquid}88`} stroke={liquid} strokeWidth={3} />
      <path d={`M70 60 q 28 ${-6 * Math.sin(t * 2)} 55 0 t 55 0 t 55 0 t 55 0`} fill="none" stroke="#ffffff88" strokeWidth={3} strokeLinecap="round" />
      <path d="M20 60 Q180 250 340 60" fill="none" stroke={rim} strokeWidth={6} strokeLinecap="round" />
    </svg>
  );
};

/** A plain figure: head and shoulders. */
const Figure: React.FC<{ color?: string; size?: number; o?: number }> = ({ color = CHALK, size = 1, o = 1 }) => (
  <svg width={120 * size} height={150 * size} viewBox="0 0 120 150" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <circle cx={60} cy={42} r={28} fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M10 145 Q12 85 60 82 Q108 85 110 145" fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

/** A hungry ghost: a thin wisp with a narrow neck and a swollen belly. */
const Ghost: React.FC<{ color?: string; size?: number }> = ({ color = ROSE, size = 1 }) => {
  const { t } = useT();
  return (
    <svg width={120 * size} height={170 * size} viewBox="0 0 120 170" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)` }}>
      <path d={`M60 20 Q85 22 80 50 L68 70 Q110 95 95 135 Q85 160 ${60 + 8 * Math.sin(t * 2)} 165 Q35 160 25 135 Q10 95 52 70 L40 50 Q35 22 60 20 Z`}
        fill={`${color}33`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
      <circle cx={52} cy={40} r={4} fill={color} /><circle cx={70} cy={40} r={4} fill={color} />
    </svg>
  );
};

const Fish: React.FC<{ color?: string; size?: number }> = ({ color = TEAL, size = 1 }) => (
  <svg width={160 * size} height={90 * size} viewBox="0 0 160 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}88)` }}>
    <path d="M20 45 Q70 0 120 45 Q70 90 20 45 Z" fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M118 45 L150 20 L150 70 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={45} cy={40} r={5} fill={color} />
  </svg>
);

/** A god: a figure with a radiant halo. */
const God: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 1 }) => {
  const { t } = useT();
  return (
    <div style={{ position: "relative", width: 140 * size, height: 160 * size }}>
      <div style={{ position: "absolute", left: "50%", top: 40 * size, width: 110 * size, height: 110 * size, borderRadius: "50%",
        transform: `translate(-50%,-50%) rotate(${t * 20}deg)`, border: `3px dashed ${color}`, boxShadow: `0 0 26px ${color}` }} />
      <div style={{ position: "absolute", left: 10 * size, top: 10 * size }}><Figure color={color} size={size} /></div>
    </div>
  );
};

/** A lotus: the pure vision. */
const Lotus: React.FC<{ color?: string; size?: number }> = ({ color = ICE, size = 1 }) => (
  <svg width={180 * size} height={120 * size} viewBox="0 0 180 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color})` }}>
    {[-50, -25, 0, 25, 50].map((r, i) => (
      <path key={i} d="M90 110 Q60 60 90 10 Q120 60 90 110 Z" transform={`rotate(${r} 90 110)`} fill={`${color}33`} stroke={color} strokeWidth={4} />
    ))}
  </svg>
);

/** A slab standing for a hidden "neutral stuff" (drawn only to be removed). */
const Slab: React.FC<{ w: number; h?: number; color?: string; dashed?: boolean }> = ({ w, h = 60, color = DIM, dashed }) => (
  <div style={{ width: w, height: h, borderRadius: 12, border: `4px ${dashed ? "dashed" : "solid"} ${color}`, background: `${color}22`,
    boxShadow: `0 0 18px ${color}55` }} />
);

/** An eye; `tint` colours the iris. */
const Eye: React.FC<{ tint?: string; size?: number }> = ({ tint = ICE, size = 1 }) => (
  <svg width={160 * size} height={90 * size} viewBox="0 0 160 90" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${tint}88)` }}>
    <path d="M8 45 Q80 -15 152 45 Q80 105 8 45 Z" fill="#0006" stroke={CHALK} strokeWidth={4} />
    <circle cx={80} cy={45} r={24} fill={`${tint}66`} stroke={tint} strokeWidth={4} />
    <circle cx={80} cy={45} r={9} fill="#000" />
  </svg>
);

/** A conch shell, white or tinted. */
const Conch: React.FC<{ color?: string }> = ({ color = CHALK }) => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color}aa)` }}>
    <path d="M75 10 Q130 40 120 95 Q110 140 70 140 Q30 135 30 100 Q30 70 60 65 Q85 62 85 85 Q85 100 70 100" fill={`${color}33`}
      stroke={color} strokeWidth={5} strokeLinecap="round" />
  </svg>
);

/** A loop of arrows: the circle of agreement. */
const Circle: React.FC<{ p: number; color?: string; r?: number }> = ({ p, color = TEAL, r = 170 }) => {
  const { t } = useT();
  const len = 2 * Math.PI * r;
  return (
    <svg width={2 * r + 40} height={2 * r + 40} viewBox={`${-r - 20} ${-r - 20} ${2 * r + 40} ${2 * r + 40}`} style={{ overflow: "visible" }}>
      <circle r={r} fill="none" stroke={color} strokeWidth={5} strokeDasharray={len} strokeDashoffset={len * (1 - p)}
        style={{ filter: `drop-shadow(0 0 8px ${color})` }} transform={`rotate(${t * 12})`} />
      {[0, 120, 240].map((a) => (
        <path key={a} d={`M ${r - 14} -10 L ${r} 8 L ${r + 14} -10`} fill="none" stroke={color} strokeWidth={5} opacity={p}
          transform={`rotate(${a + t * 12})`} />
      ))}
    </svg>
  );
};

/** A projector shape (drawn only to be crossed out). */
const Projector: React.FC<{ color?: string }> = ({ color = WARM }) => (
  <svg width={360} height={200} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
    <rect x={10} y={70} width={110} height={70} rx={10} fill={`${color}33`} stroke={color} strokeWidth={5} />
    <path d="M120 85 L340 20 L340 190 L120 125 Z" fill={`${color}18`} stroke={color} strokeWidth={3} strokeDasharray="10 8" />
  </svg>
);

/** A sword that cannot cut itself. */
const Sword: React.FC<{ color?: string }> = ({ color = ICE }) => (
  <svg width={300} height={80} viewBox="0 0 300 80" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M20 40 L230 30 L270 40 L230 50 Z" fill={`${color}44`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
    <rect x={0} y={22} width={14} height={36} rx={4} fill={GOLD} />
  </svg>
);

/** A tick, seen from above. */
const Tick: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={140} height={140} viewBox="0 0 140 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}aa)` }}>
    {[-1, 1].flatMap((s) => [30, 55, 80, 100].map((y, i) => (
      <path key={`${s}${i}`} d={`M70 ${y} Q${70 + s * 45} ${y - 10} ${70 + s * 58} ${y + 12}`} fill="none" stroke={color} strokeWidth={4} strokeLinecap="round" />
    )))}
    <ellipse cx={70} cy={75} rx={32} ry={42} fill={`${color}44`} stroke={color} strokeWidth={5} />
    <circle cx={70} cy={28} r={12} fill={`${color}66`} stroke={color} strokeWidth={4} />
  </svg>
);

/** A planet. */
const Planet: React.FC<{ size?: number; color?: string }> = ({ size = 260, color = TEAL }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, #fff8, ${color} 40%, ${color}44 75%)`,
    boxShadow: `0 0 40px ${color}66` }} />
);

/** A flame. */
const Flame: React.FC<{ color?: string; size?: number }> = ({ color = GOLD, size = 1 }) => {
  const { t } = useT();
  const w = Math.sin(t * 6) * 4;
  return (
    <svg width={80 * size} height={130 * size} viewBox="0 0 80 130" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${color})` }}>
      <path d={`M40 ${10 + w} Q75 60 60 95 Q50 120 40 120 Q30 120 20 95 Q5 60 40 ${10 + w} Z`} fill={`${color}88`} stroke={color} strokeWidth={4} />
      <rect x={30} y={118} width={20} height={12} rx={3} fill={CHALK} />
    </svg>
  );
};

/** A key and a lock. */
const KeyLock: React.FC<{ p: number }> = ({ p }) => (
  <svg width={420} height={160} viewBox="0 0 420 160" style={{ overflow: "visible" }}>
    <g transform={`translate(${-60 + 120 * p} 0)`}>
      <circle cx={60} cy={80} r={30} fill="none" stroke={GOLD} strokeWidth={6} />
      <path d="M90 80 L200 80 M170 80 L170 100 M190 80 L190 100" stroke={GOLD} strokeWidth={6} strokeLinecap="round" />
    </g>
    <rect x={270} y={60} width={110} height={90} rx={12} fill={`${TEAL}33`} stroke={TEAL} strokeWidth={6} />
    <path d={`M295 60 L295 ${35 - 20 * p} Q325 ${0 - 20 * p} 355 ${35 - 20 * p} L355 60`} fill="none" stroke={TEAL} strokeWidth={6} />
  </svg>
);

/** A wire-frame box: the "container" of space. */
const SpaceBox: React.FC<{ o?: number; color?: string }> = ({ o = 1, color = VIOLET }) => (
  <svg width={520} height={420} viewBox="0 0 520 420" style={{ overflow: "visible", opacity: o, filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d="M60 120 L340 120 L340 380 L60 380 Z M180 40 L460 40 L460 300 L180 300 Z M60 120 L180 40 M340 120 L460 40 M340 380 L460 300 M60 380 L180 300"
      fill="none" stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

/** A seed and the shoot that grows from it. */
const Sprout: React.FC<{ p: number; color?: string }> = ({ p, color = GREEN }) => (
  <svg width={120} height={200} viewBox="0 0 120 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}aa)` }}>
    <ellipse cx={60} cy={180} rx={20} ry={12} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
    <path d={`M60 170 L60 ${170 - 130 * p}`} stroke={color} strokeWidth={6} strokeLinecap="round" />
    {[0, 1, 2].map((i) => (
      <path key={i} d={`M60 ${150 - i * 40} q ${i % 2 ? -36 : 36} -10 ${i % 2 ? -40 : 40} -32`} fill="none" stroke={color} strokeWidth={5}
        opacity={ramp(p, 0.3 + i * 0.2, 0.2)} />
    ))}
  </svg>
);

/** A web of thin lines between points. Never drawn under things as a floor. */
const Web: React.FC<{ pts: [number, number][]; p: number; color?: string }> = ({ pts, p, color = VIOLET }) => (
  <>
    {pts.flatMap(([x1, y1], i) => pts.slice(i + 1).map(([x2, y2], j) => (
      <Flow key={`${i}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2} color={color} p={p} pulses={false} />
    )))}
  </>
);

/** Strike-through on a line of text: put text and strike in one relative box. */
const Struck: React.FC<{ at: number; color?: string; size?: number; children: React.ReactNode }> = ({ at, color = DIM, size = 32, children }) => (
  <div style={{ position: "relative", display: "inline-block" }}><Glow color={color} size={size}>{children}</Glow><Strike at={at} /></div>
);

// ---------------------------------------------------------------- scenes: the bowl
const BEINGS: [string, number, number, string][] = [
  ["human", 520, 300, ICE], ["hungry ghost", 1400, 300, ROSE], ["fish", 420, 640, TEAL], ["god", 1500, 640, GOLD], ["awakened", 960, 230, CHALK],
];

const BowlScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bowl = c("Picture a single bowl of liquid");
  const at = [c("A human sees clear, refreshing water"), c("A hungry ghost, driven by deep habits of craving"), c("A fish finds the air it breathes"),
    c("A god tastes delicious nectar"), c("And an awakened being sees the pure wisdom form of water")];
  const views = ["water", "pus and blood", "air, and home", "nectar", "pure wisdom form of water"];
  const liq = [ICE, ROSE, TEAL, GOLD, CHALK];
  const cur = at.reduce((k, s, i) => (t >= s ? i : k), -1);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="one bowl" at={bowl + 0.2} size={72} />
      </div>
      <At x={960} y={520} s={pop(t, fps, bowl + 0.3)}><Bowl liquid={cur >= 0 ? liq[cur] : ICE} /></At>
      {BEINGS.map(([name, x, y, col], i) => (
        <React.Fragment key={name}>
          <At x={x} y={y} s={pop(t, fps, at[i])}>
            {i === 0 ? <Figure color={col} /> : i === 1 ? <Ghost color={col} /> : i === 2 ? <Fish color={col} /> : i === 3 ? <God color={col} size={0.85} /> : <Lotus color={col} size={0.8} />}
          </At>
          <Line x={x} y={y + (i === 4 ? 90 : 120)} at={at[i] + 0.4} color={col} size={28} serif>{views[i]}</Line>
          <Flow x1={x} y1={y + 40} x2={960 + (x - 960) * 0.25} y2={500} color={col} p={ramp(t, at[i] + 0.3, 0.6)} pulses={cur === i} dash />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const old = c("It is one of the oldest examples"), what = c("What is really in the bowl");
  return (
    <AbsoluteFill>
      <Line y={220} at={old} color={DIM} size={32}>one of the oldest examples in Indian and Tibetan Buddhist thought</Line>
      <At x={960} y={470} s={pop(t, fps, old + 0.3)}><Bowl liquid={VIOLET} /></At>
      <At x={960} y={720} s={pop(t, fps, what, 14)} o={ramp(t, what, 0.5)}><Glow color={GOLD} size={56} serif>what is really in the bowl?</Glow></At>
    </AbsoluteFill>
  );
};

const TwoLayersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cs = c("Common sense has a ready answer"), raw = c("some raw, neutral stuff"), lens = c("each creature looks at it through its own lens");
  const two = c("Two layers");
  return (
    <AbsoluteFill>
      <Title at={cs}>common sense</Title>
      <At x={960} y={440} s={pop(t, fps, cs + 0.3)}><Bowl liquid={DIM} size={0.8} /></At>
      {/* the hidden layer is drawn here only so that the next scenes can take it away */}
      <At x={960} y={600} o={ramp(t, raw, 0.6)}><Slab w={620} /></At>
      <Line y={600} at={raw + 0.3} color={CHALK} size={30}>neutral stuff, there first?</Line>
      {[ICE, ROSE, TEAL, GOLD].map((col, i) => (
        <At key={i} x={420 + i * 360} y={260} s={pop(t, fps, lens + i * 0.25)}><Eye tint={col} size={0.8} /></At>
      ))}
      <Line y={760} at={two} color={GOLD} size={36} serif>two layers: the hidden thing, and the many views of it</Line>
    </AbsoluteFill>
  );
};

const MiddleWayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mw = c("The Middle Way of"), apart = c("both take this picture apart"), bed = c("Agreement does not need a hidden bedrock");
  const seen = c("The thing seen, the one seeing"), tog = c("identified together, each depending on the others");
  const rel = c("And the relations between them are just as impossible to pin down");
  const fall = ramp(t, apart + 0.4, 1.2);
  const pts: [number, number][] = [[640, 470], [1280, 470], [960, 300]];
  return (
    <AbsoluteFill>
      <At x={560} y={200} s={pop(t, fps, mw)}><Chip color={GOLD} size={30}>the Middle Way</Chip></At>
      <At x={1360} y={200} s={pop(t, fps, mw + 1.6)}><Chip color={VIOLET} size={30}>the Great Perfection</Chip></At>
      <At x={960} y={560 + 260 * fall} o={(1 - fall) * ramp(t, mw, 0.4)}><Slab w={620} /></At>
      <Line y={330} at={bed} out={seen} color={WARM} size={34} serif>no hidden bedrock needed</Line>
      {(["the thing seen", "the one seeing", "the meeting"] as const).map((w, i) => (
        <At key={w} x={pts[i][0]} y={pts[i][1]} s={pop(t, fps, seen + i * 0.5)}><Chip color={[ICE, ROSE, GOLD][i]} size={30}>{w}</Chip></At>
      ))}
      <Web pts={pts} p={ramp(t, tog, 0.9)} color={TEAL} />
      <Line y={640} at={tog + 0.4} color={TEAL} size={32}>identified together, each depending on the others</Line>
      <Line y={740} at={rel} color={DIM} size={30}>and the relations are just as unfindable</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: the hidden thing
const LiquidWordScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const start = c("Start with a word we slipped in"), liq = c("The liquid"), wait = c("already assumes an object waiting there");
  const kant = c("This is the old idea that Kant made famous"), itself = c("a thing in itself, hidden behind the senses");
  return (
    <AbsoluteFill>
      <Line y={200} at={start} color={DIM} size={32}>a word slipped in</Line>
      <At x={960} y={330} s={pop(t, fps, liq, 14)}><Glow color={GOLD} size={70} serif>“the liquid”</Glow></At>
      <At x={960} y={520} o={ramp(t, wait, 0.5)}><Bowl liquid={DIM} size={0.7} /></At>
      <Line y={640} at={wait + 0.4} color={CHALK} size={30}>an object waiting there, with its own identity</Line>
      <At x={960} y={760} s={pop(t, fps, kant)}><Chip color={VIOLET} size={30}>Kant: the thing in itself</Chip></At>
      <Line y={830} at={itself} color={DIM} size={28}>hidden behind the senses</Line>
    </AbsoluteFill>
  );
};

const HornsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ask = c("So ask what this hidden thing is like"), def = c("If it has definite qualities"), pus = c("it cannot explain why the ghost meets burning pus");
  const none = c("If it has no qualities at all"), blank = c("a featureless blank cannot cause any experience"), no = c("Either way, it does no work");
  return (
    <AbsoluteFill>
      <Title at={ask}>what is the hidden thing like?</Title>
      <At x={560} y={330} s={pop(t, fps, def)}><Chip color={ICE} size={30}>it has qualities</Chip></At>
      <At x={560} y={480} s={pop(t, fps, def + 0.4)}><Bowl liquid={ICE} size={0.6} /></At>
      <At x={560} y={640} s={pop(t, fps, pus)}><Ghost size={0.7} /></At>
      <Line x={560} y={760} at={pus + 0.4} color={ROSE} size={28}>then why burning pus?</Line>
      <At x={1360} y={330} s={pop(t, fps, none)}><Chip color={DIM} size={30}>it has none</Chip></At>
      <At x={1360} y={500} o={ramp(t, none + 0.3, 0.5)}>
        <div style={{ width: 240, height: 160, borderRadius: 18, border: `3px dashed ${DIM}`, background: "#ffffff08" }} />
      </At>
      <Line x={1360} y={680} at={blank} color={DIM} size={28}>a blank causes nothing</Line>
      <At x={960} y={820} s={pop(t, fps, no, 14)} o={ramp(t, no, 0.5)}><Glow color={WARM} size={42} serif>either way, it does no work</Glow></At>
    </AbsoluteFill>
  );
};

const WetnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const push = c("Someone will push back"), wet = c("Why not simply wetness"), claim = c("But if wetness is claimed to exist by itself");
  const abs = c("Wetness in general is an abstraction made by thought"), three = c("this drinkable water, this foul pus, this water a fish lives in");
  const agreed = c("And if wetness is only an agreed reference point"), label = c("It is a useful label for comparing views");
  return (
    <AbsoluteFill>
      <Title at={push} color={ICE}>“why not simply wetness?”</Title>
      <At x={960} y={290} s={pop(t, fps, wet)} o={1 - ramp(t, abs + 0.4, 0.6)}><Glow color={ICE} size={64} serif>wetness</Glow></At>
      <Line x={560} y={400} at={claim} color={WARM} size={30}>wetness by itself?</Line>
      <Line x={560} y={460} at={abs} color={DIM} size={28}>an abstraction made by thought</Line>
      {([[ICE, "drinkable water"], [ROSE, "foul pus"], [TEAL, "a fish's water"]] as const).map(([col, w], i) => (
        <React.Fragment key={w}>
          <At x={560 + i * 400} y={600} s={pop(t, fps, three + i * 0.6)}><Bowl liquid={col} size={0.5} /></At>
          <Line x={560 + i * 400} y={690} at={three + i * 0.6 + 0.2} color={col} size={26}>{`this ${w}`}</Line>
        </React.Fragment>
      ))}
      <Line x={1360} y={400} at={agreed} color={GOLD} size={30}>an agreed reference point?</Line>
      <At x={1360} y={470} s={pop(t, fps, label)}><Chip color={GOLD} size={28}>a label for comparing views</Chip></At>
    </AbsoluteFill>
  );
};

const OwnNatureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const target = c("analysis targets is called"), own = c("own nature"), dep = c("depending on nothing");
  const sub = c("A neutral substance beneath appearances"), dis = c("in a modest disguise");
  return (
    <AbsoluteFill>
      <Line y={200} at={target} color={DIM} size={32}>what the analysis targets</Line>
      <At x={960} y={320} s={pop(t, fps, target + 0.5)}><Reveal text="svabhāva" at={target + 0.5} size={84} /></At>
      <Line y={430} at={own} color={GOLD} size={38} serif>own nature</Line>
      <Line y={500} at={dep} color={CHALK} size={30}>a nature all by itself, depending on nothing</Line>
      <At x={960} y={650} o={ramp(t, sub, 0.5)}><Slab w={520} dashed /></At>
      <Line y={650} at={sub + 0.2} color={CHALK} size={28}>a neutral substance</Line>
      <Line y={760} at={dis} color={WARM} size={34} serif>the same imagined nature, in a modest disguise</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: agreement
const AgreeQuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("Then a real question remains"), agree = c("why do humans agree so reliably"), fall = c("Why doesn't the shared world fall apart into private fantasies");
  const spread = ramp(t, fall + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <Title at={q}>a real question remains</Title>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={600 + i * 240 + (i - 1.5) * 120 * spread} y={360 - 60 * spread * (i % 2)} s={pop(t, fps, agree + i * 0.2)}><Figure color={ICE} size={0.8} /></At>
      ))}
      <At x={960} y={560} s={pop(t, fps, agree + 1)}><Chip color={ICE} size={32}>“water”</Chip></At>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={600 + i * 240 + (i - 1.5) * 120 * spread} y={360} o={0.5 * spread}><Ring x={60} y={70} p={ramp(t, fall + 0.6 + i * 0.2, 1.6)} r0={40} r1={120} color={VIOLET} /></At>
      ))}
      <Line y={720} at={fall} color={DIM} size={32}>why not private fantasies?</Line>
    </AbsoluteFill>
  );
};

const EverydayTruthScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const master = c("The Indian master"), around = c("turns the question around"), notprove = c("Agreement does not prove a hidden object");
  const truth = c("Shared, reliable agreement is simply what everyday truth is");
  return (
    <AbsoluteFill>
      <At x={960} y={170} s={pop(t, fps, master)}><Chip color={GOLD} size={32}>Candrakīrti</Chip></At>
      <Line y={260} at={around} color={DIM} size={30}>turns the question around</Line>
      <At x={760} y={460} o={ramp(t, notprove, 0.5)}><Struck at={notprove + 1.2} size={34}>agreement → a hidden object</Struck></At>
      <At x={960} y={640} s={pop(t, fps, truth, 14)} o={ramp(t, truth, 0.5)}><Glow color={GOLD} size={46} serif>shared, reliable agreement</Glow></At>
      <Line y={730} at={truth + 1.0} color={CHALK} size={36}>is what everyday truth is</Line>
    </AbsoluteFill>
  );
};

const MindOnlyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const opp = c("He also refuses the opposite move"), mo = c("The Mind-Only view tried to solve the puzzle");
  const seeing = c("But a seeing cannot be identified without what is seen"), obj = c("an object cannot be identified without the senses");
  const neither = c("Neither mind nor matter comes first"), cont = c("Making the mind the container of everything");
  const drop = ramp(t, seeing - 0.2, 0.8);
  return (
    <AbsoluteFill>
      <Title at={opp}>the opposite move</Title>
      <At x={960} y={380} o={ramp(t, mo, 0.5) * (1 - drop)}>
        <div style={{ width: 420, height: 260, borderRadius: "50%", border: `5px solid ${VIOLET}`, background: `${VIOLET}22`, boxShadow: `0 0 30px ${VIOLET}` }} />
      </At>
      <Line y={380} at={mo + 0.4} out={seeing - 0.2} color={CHALK} size={30}>a truly real consciousness</Line>
      <At x={640} y={420} s={pop(t, fps, seeing)}><Eye tint={TEAL} /></At>
      <At x={1280} y={420} s={pop(t, fps, seeing + 0.6)}><Bowl liquid={ICE} size={0.55} /></At>
      <Flow x1={740} y1={420} x2={1170} y2={420} color={TEAL} p={ramp(t, seeing + 0.8, 0.6)} />
      <Flow x1={1170} y1={440} x2={740} y2={440} color={GOLD} p={ramp(t, obj, 0.6)} />
      <Line x={640} y={530} at={seeing + 0.3} color={TEAL} size={28}>no seeing without the seen</Line>
      <Line x={1280} y={530} at={obj + 0.3} color={GOLD} size={28}>no object without the senses</Line>
      <Line y={660} at={neither} color={CHALK} size={36} serif>neither mind nor matter comes first</Line>
      <Line y={760} at={cont} color={WARM} size={30}>mind as the container: as mistaken as matter</Line>
    </AbsoluteFill>
  );
};

const JaundiceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const caught = c("Within everyday truth, mistakes are still caught"), jaun = c("A person with jaundice sees a white conch shell as yellow");
  const healthy = c("with healthy eyes, correct them"), notice = c("But notice where that judgement is made"), within = c("It is made within one kind of being");
  const yellow = ramp(t, jaun + 1.4, 0.6) * (1 - ramp(t, healthy + 0.6, 0.6));
  return (
    <AbsoluteFill>
      <Title at={caught}>mistakes are still caught</Title>
      <At x={760} y={420} s={pop(t, fps, jaun + 0.6)}><Conch color={yellow > 0.5 ? GOLD : CHALK} /></At>
      <At x={460} y={420} s={pop(t, fps, jaun)}><Eye tint={GOLD} /></At>
      <Line x={460} y={510} at={jaun + 0.3} color={GOLD} size={26}>jaundice</Line>
      {[0, 1, 2].map((i) => (
        <At key={i} x={1180 + i * 180} y={420} s={pop(t, fps, healthy + i * 0.2)}><Eye tint={ICE} size={0.8} /></At>
      ))}
      <Line x={1360} y={510} at={healthy + 0.3} color={ICE} size={26}>healthy eyes: white</Line>
      <At x={960} y={680} o={ramp(t, notice, 0.5)}>
        <div style={{ width: 1300, height: 170, borderRadius: 30, border: `3px dashed ${TEAL}`, opacity: ramp(t, within, 0.6) }} />
      </At>
      <Line y={680} at={within} color={TEAL} size={36} serif>within one kind of being</Line>
    </AbsoluteFill>
  );
};

const GhostNormalScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const notj = c("The hungry ghost is not a jaundiced human"), normal = c("its senses work normally");
  const noill = c("It is not suffering an illusion of water"), func = c("the liquid really does function as pus");
  return (
    <AbsoluteFill>
      <At x={620} y={420} s={pop(t, fps, notj)}><Ghost size={1.3} /></At>
      <At x={620} y={640} o={ramp(t, notj + 0.4, 0.5)}><Struck at={notj + 1.4} size={30}>a mistaken human</Struck></At>
      <Line x={1300} y={300} at={normal} color={ROSE} size={34} serif>normal, for its kind</Line>
      <At x={1300} y={460} o={ramp(t, noill, 0.5)}><Struck at={noill + 1.0} size={30}>an illusion of water</Struck></At>
      <At x={1300} y={620} s={pop(t, fps, func)}><Bowl liquid={ROSE} size={0.7} /></At>
      <Line x={1300} y={740} at={func + 0.4} color={ROSE} size={32}>for the ghost, it really functions as pus</Line>
    </AbsoluteFill>
  );
};

const RefPointScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bowl = c("So what of the bowl itself"), denied = c("what is denied is a shared base"), kept = c("What is kept is a working reference point");
  const meet = c("where different ways of appearing meet"), job = c("Its job is to coordinate, not to sit underneath");
  const pts: [number, number][] = [[560, 520], [800, 360], [1120, 360], [1360, 520]];
  return (
    <AbsoluteFill>
      <Title at={bowl}>so what of the bowl itself?</Title>
      <At x={960} y={250} o={ramp(t, denied, 0.5) * (1 - ramp(t, kept, 0.5))}><Slab w={620} color={WARM} /></At>
      <Line y={250} at={denied + 0.2} out={kept} color={WARM} size={30}>a shared base, existing by itself: denied</Line>
      <At x={960} y={560} s={pop(t, fps, kept)}><Orb size={60} color={GOLD} /></At>
      <Line y={250} at={kept + 0.3} color={GOLD} size={34} serif>a working reference point</Line>
      <Line y={320} at={kept + 1.0} color={DIM} size={26}>(in this article’s own terms)</Line>
      {pts.map(([x, y], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, meet + i * 0.25)}><Orb size={34} color={[ICE, ROSE, TEAL, VIOLET][i]} /></At>
          <Flow x1={x} y1={y} x2={960} y2={560} color={[ICE, ROSE, TEAL, VIOLET][i]} p={ramp(t, meet + 0.3 + i * 0.25, 0.5)} />
        </React.Fragment>
      ))}
      <Line y={700} at={meet + 0.6} color={CHALK} size={28}>where ways of appearing meet and are compared</Line>
      <Line y={790} at={job} color={GOLD} size={34} serif>it coordinates; it does not sit underneath</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: Vasubandhu and the reply
const VasubandhuScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const begin = c("The bowl example did not begin in the Middle Way"), tv = c("in his Twenty Verses"), river = c("all see a river of pus together");
  const karma = c("Shared karma, ripening in consciousness"), noriver = c("no river outside the mind is needed");
  return (
    <AbsoluteFill>
      <Title at={begin}>where the example began</Title>
      <At x={960} y={210} s={pop(t, fps, tv)}><Chip color={VIOLET} size={30}>Vasubandhu, the Twenty Verses</Chip></At>
      {[0, 1, 2].map((i) => <At key={i} x={700 + i * 260} y={400} s={pop(t, fps, river + i * 0.2)}><Ghost size={0.8} /></At>)}
      <At x={960} y={560} o={ramp(t, river + 0.6, 0.5)}>
        <svg width={900} height={80} viewBox="0 0 900 80"><path d="M0 40 Q150 0 300 40 T600 40 T900 40" fill="none" stroke={ROSE} strokeWidth={14} strokeLinecap="round" opacity={0.8} /></svg>
      </At>
      <At x={960} y={420} o={ramp(t, karma, 0.6)}>
        <div style={{ width: 1000, height: 360, borderRadius: "50%", border: `4px solid ${VIOLET}`, background: `${VIOLET}14` }} />
      </At>
      <Line y={700} at={karma + 0.3} color={VIOLET} size={30}>shared karma, ripening in consciousness</Line>
      <Line y={780} at={noriver} color={DIM} size={30}>no river outside the mind needed</Line>
    </AbsoluteFill>
  );
};

const ReplyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const floor = c("That answers the question by making consciousness the floor"), turned = c("turned the example around");
  const nmind = c("neither does the mind"), stand = c("stand or fall together"), inside = c("So the bowl does not show that the world is inside the mind");
  const neither = c("neither the world nor the mind is the floor");
  return (
    <AbsoluteFill>
      <At x={960} y={620 + 200 * ramp(t, nmind, 1.0)} o={ramp(t, floor, 0.5) * (1 - ramp(t, nmind, 1.0))}><Slab w={800} color={VIOLET} /></At>
      <Line y={620} at={floor + 0.3} out={nmind} color={VIOLET} size={30}>consciousness as the floor</Line>
      <At x={960} y={170} s={pop(t, fps, turned)}><Chip color={GOLD} size={30}>Candrakīrti’s reply</Chip></At>
      <At x={700} y={400} s={pop(t, fps, nmind - 0.5)}><Bowl liquid={ROSE} size={0.6} /></At>
      <At x={1220} y={400} s={pop(t, fps, nmind)}><Eye tint={ROSE} /></At>
      <Line x={700} y={500} at={nmind - 0.2} color={ROSE} size={26}>the pus</Line>
      <Line x={1220} y={500} at={nmind + 0.3} color={ROSE} size={26}>the seeing of it</Line>
      <At x={960} y={400} s={pop(t, fps, stand)}><Glow color={GOLD} size={40}>⇄</Glow></At>
      <Line y={600} at={stand + 0.2} color={GOLD} size={34} serif>they stand or fall together</Line>
      <At x={960} y={700} o={ramp(t, inside, 0.5)}><Struck at={inside + 1.6} size={30}>the world is inside the mind</Struck></At>
      <Line y={800} at={neither} color={CHALK} size={36} serif>neither the world nor the mind is the floor</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: others, the circle, language
const OtherMindsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const others = c("Agreement also needs others to agree with"), cert = c("my own experience is certain, and yours only inferred");
  const refuse = c("The Middle Way refuses that imbalance"), stream = c("my stream of mind is no more findable than yours");
  const long = c("as long is identified together with short");
  const tilt = 14 * ramp(t, cert, 0.8) * (1 - ramp(t, refuse, 0.8));
  return (
    <AbsoluteFill>
      <Title at={others}>others to agree with</Title>
      <At x={960} y={420} o={ramp(t, cert, 0.5)} r={tilt}>
        <div style={{ width: 900, height: 8, borderRadius: 4, background: CHALK }} />
      </At>
      <At x={620} y={330 + tilt * 3} s={pop(t, fps, cert)}><Figure color={GOLD} /></At>
      <At x={1300} y={330 - tilt * 3} s={pop(t, fps, cert + 0.5)}><Figure color={DIM} /></At>
      <Line x={620} y={500} at={cert + 0.3} out={refuse} color={GOLD} size={28}>mine: certain</Line>
      <Line x={1300} y={500} at={cert + 0.8} out={refuse} color={DIM} size={28}>yours: only inferred</Line>
      <Line y={560} at={refuse} color={TEAL} size={34} serif>the Middle Way refuses the imbalance</Line>
      <Line y={640} at={stream} color={CHALK} size={28}>neither stream of mind is findable; both work</Line>
      <At x={760} y={760} s={pop(t, fps, long)}><Chip color={ICE} size={28}>long</Chip></At>
      <At x={1160} y={760} s={pop(t, fps, long + 0.6)}><Chip color={ROSE} size={28}>short</Chip></At>
      <Flow x1={830} y1={760} x2={1090} y2={760} color={GOLD} p={ramp(t, long + 0.9, 0.6)} />
    </AbsoluteFill>
  );
};

const CircleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const critic = c("A critic can press further"), circ = c("Isn't that circular"), flaw = c("the circle is not a flaw");
  const judge = c("a final judge outside every point of view"), nojudge = c("There is no such judge"), missing = c("so no foundation is missing");
  const witt = c("Wittgenstein reached a similar point"), form = c("not in opinions, but in form of life"), corr = c("correction is still real");
  return (
    <AbsoluteFill>
      <Title at={critic}>isn’t that circular?</Title>
      <At x={760} y={440} o={ramp(t, critic + 0.5, 0.5)}><Circle p={ramp(t, critic + 0.5, 2.0)} /></At>
      <Line x={760} y={400} at={critic + 1.2} color={ICE} size={26}>healthy senses</Line>
      <Line x={760} y={480} at={critic + 2.0} color={ROSE} size={26}>the kind</Line>
      <Line x={760} y={680} at={flaw} color={TEAL} size={32} serif>the circle is not a flaw</Line>
      <At x={1380} y={380} o={ramp(t, judge, 0.5) * (1 - ramp(t, nojudge + 0.4, 0.8))}><Figure color={WARM} size={1.1} /></At>
      <Line x={1380} y={520} at={judge + 0.3} out={nojudge + 0.4} color={WARM} size={26}>a judge outside every view?</Line>
      <Line x={1380} y={520} at={nojudge + 0.6} color={CHALK} size={30}>there is none</Line>
      <Line x={1380} y={590} at={missing} color={DIM} size={26}>nothing built, so nothing missing</Line>
      <At x={1380} y={680} s={pop(t, fps, witt)}><Chip color={VIOLET} size={28}>Wittgenstein</Chip></At>
      <Line x={1380} y={760} at={form} color={VIOLET} size={28} serif>not in opinions, but in form of life</Line>
      <Line x={760} y={760} at={corr} color={GOLD} size={28}>inside it, correction is real</Line>
    </AbsoluteFill>
  );
};

const LanguageScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lang = c("much of this agreement is carried by language"), child = c("A child learns the word water because it works");
  const glass = c("Say it, and a glass arrives"), habit = c("where the habit of making things solid is strongest");
  const noun = c("seems to point at one solid thing behind every view of it");
  return (
    <AbsoluteFill>
      <Title at={lang}>agreement carried by language</Title>
      <At x={560} y={420} s={pop(t, fps, child)}><Figure color={ICE} size={0.9} /></At>
      <At x={760} y={330} s={pop(t, fps, child + 0.8)}><Chip color={ICE} size={30}>“water”</Chip></At>
      <At x={1000} y={420} s={pop(t, fps, glass)}><svg width={110} height={150} viewBox="0 0 110 150">
        <path d="M15 10 L30 140 L80 140 L95 10 Z" fill={`${ICE}22`} stroke={CHALK} strokeWidth={5} strokeLinejoin="round" /><path d="M22 60 L88 60" stroke={ICE} strokeWidth={4} /></svg></At>
      <Line x={780} y={560} at={glass + 0.4} color={DIM} size={26}>the word works</Line>
      <At x={1440} y={330} s={pop(t, fps, habit)}><Chip color={WARM} size={30}>“the bowl”</Chip></At>
      <At x={1440} y={500} o={ramp(t, noun, 0.6)}><Slab w={260} h={120} color={WARM} /></At>
      <Line x={1440} y={500} at={noun + 0.4} color={CHALK} size={24}>one solid thing behind?</Line>
      <Line y={740} at={habit + 0.4} color={WARM} size={30}>where the habit of making things solid is strongest</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: the experiential side
const BasisScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const exp = c("describes the same freedom from the side of experience"), pure = c("the basis is primordially pure");
  const block = c("It is not a hidden block of stuff, a cosmic mind"), ground = c("says it is called a ground only from a relative point of view");
  const empty = c("it is empty of being any ground at all");
  return (
    <AbsoluteFill>
      <At x={960} y={150} s={pop(t, fps, exp - 1.0)}><Chip color={VIOLET} size={32}>the Great Perfection</Chip></At>
      <Line y={230} at={exp} color={DIM} size={30}>the same freedom, from the side of experience</Line>
      <At x={960} y={360} s={pop(t, fps, pure)}><Reveal text="the basis, primordially pure" at={pure} size={64} color={ICE} /></At>
      {(["a hidden block of stuff", "a cosmic mind", "a starting point"] as const).map((w, i) => (
        <At key={w} x={520 + i * 440} y={500} o={ramp(t, block + i * 0.6, 0.4)}><Struck at={block + i * 0.6 + 0.5} size={28}>{w}</Struck></At>
      ))}
      <Line y={630} at={ground} color={CHALK} size={30}>“ground” only from a relative point of view</Line>
      <Line y={720} at={empty} color={ICE} size={36} serif>empty of being any ground at all</Line>
    </AbsoluteFill>
  );
};

const DisplayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const disp = c("Appearances are called display"), behind = c("And display is not the display of something standing behind it");
  const da = c("It is dependent arising itself, vivid and unobstructed"), subj = c("Even the feeling of being a subject inside");
  const tog = c("arising together with the object outside");
  return (
    <AbsoluteFill>
      <Title at={disp} color={GOLD}>display</Title>
      {[0, 1, 2, 3, 4].map((i) => (
        <At key={i} x={560 + i * 200} y={380 + 40 * Math.sin(t * 0.8 + i)} s={pop(t, fps, disp + 0.3 + i * 0.2)}><Orb size={50 + (i % 2) * 20} color={[GOLD, TEAL, ROSE, ICE, VIOLET][i]} /></At>
      ))}
      {/* a projector behind the display is drawn only to be removed */}
      <At x={960} y={600} o={ramp(t, behind, 0.4) * (1 - ramp(t, behind + 1.6, 0.6))}><Projector /></At>
      <Line y={600} at={behind + 1.8} color={DIM} size={30}>nothing standing behind it</Line>
      <Line y={250} at={da} color={GOLD} size={32} serif>dependent arising itself, vivid, unobstructed</Line>
      <At x={760} y={740} s={pop(t, fps, subj)}><Chip color={ROSE} size={28}>a subject inside</Chip></At>
      <At x={1160} y={740} s={pop(t, fps, tog)}><Chip color={ICE} size={28}>the object outside</Chip></At>
      <Flow x1={880} y1={740} x2={1030} y2={740} color={GOLD} p={ramp(t, tog + 0.5, 0.6)} />
    </AbsoluteFill>
  );
};

const RigpaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ka = c("Knowing awareness"), proj = c("is not a projector throwing out a world"), subtle = c("It is not a subtle stuff behind appearing");
  const know = c("It is the knowing of the basis"), three = c("unfixed, dependent and empty"), clar = c("The clarity belongs to the appearing itself");
  return (
    <AbsoluteFill>
      <At x={960} y={150} s={pop(t, fps, ka)}><Glow color={ICE} size={52} serif>knowing awareness · rigpa</Glow></At>
      <At x={600} y={360} o={ramp(t, proj, 0.4) * (1 - ramp(t, know, 0.6))}><Projector /></At>
      <At x={600} y={360} o={ramp(t, proj + 0.8, 0.3) * (1 - ramp(t, know, 0.6))}><Glow color={WARM} size={120}>✕</Glow></At>
      <At x={1340} y={360} o={ramp(t, subtle, 0.4) * (1 - ramp(t, know, 0.6))}><Slab w={360} h={160} color={DIM} dashed /></At>
      <At x={1340} y={360} o={ramp(t, subtle + 0.8, 0.3) * (1 - ramp(t, know, 0.6))}><Glow color={WARM} size={120}>✕</Glow></At>
      <Line y={300} at={know} color={ICE} size={38} serif>the knowing of the basis</Line>
      {(["unfixed", "dependent", "empty"] as const).map((w, i) => (
        <At key={w} x={660 + i * 300} y={420} s={pop(t, fps, three + i * 0.4)}><Chip color={[GOLD, TEAL, ICE][i]} size={30}>{w}</Chip></At>
      ))}
      <At x={960} y={600} s={pop(t, fps, clar)}><Orb size={90} color={GOLD} /></At>
      <Line y={730} at={clar + 0.4} color={GOLD} size={32}>clarity belongs to the appearing, and is empty like it</Line>
    </AbsoluteFill>
  );
};

const SelfKnowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const div = c("The traditions divide on whether awareness knows itself"), rej = c("rejected self-knowing awareness");
  const sword = c("made the argument famous with a sword that cannot cut itself"), author = c("In the author's own reading");
  const ult = c("Ultimately, self-knowing cannot be found"), conv = c("Conventionally, it stays a useful everyday term");
  const chain = c("without an endless chain of minds watching minds");
  return (
    <AbsoluteFill>
      <Title at={div}>does awareness know itself?</Title>
      <At x={520} y={260} s={pop(t, fps, rej)}><Chip color={WARM} size={26}>Candrakīrti: no</Chip></At>
      <At x={520} y={400} s={pop(t, fps, sword)} r={-8 + 4 * Math.sin(t * 2)}><Sword /></At>
      <Line x={520} y={490} at={sword + 0.5} color={ICE} size={26}>Śāntideva: a sword cannot cut itself</Line>
      <At x={1360} y={260} s={pop(t, fps, author)}><Chip color={GOLD} size={26}>following Mipham (the author’s reading)</Chip></At>
      <Line x={1360} y={360} at={ult} color={CHALK} size={28}>ultimately: not found</Line>
      <Line x={1360} y={420} at={conv} color={GOLD} size={28}>conventionally: a useful term</Line>
      {[0, 1, 2, 3, 4].map((i) => (
        <At key={i} x={960 + (i - 2) * 170} y={640} o={ramp(t, chain + i * 0.2, 0.3) * (1 - ramp(t, chain + 2.2, 0.6))}><Eye tint={DIM} size={0.6} /></At>
      ))}
      <Line y={760} at={chain + 1.0} color={DIM} size={28}>no endless chain of minds watching minds</Line>
    </AbsoluteFill>
  );
};

const PureVisionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sep = c("also separates ordinary vision from pure vision"), last = c("no kind of being has the last word over another");
  const gods = c("Even the gods' nectar belongs here"), clearer = c("Pure vision is clearer"), win = c("But pure vision is not a window onto a bedrock");
  const her = c("has no nature of her own"), dist = c("sees without the distortion");
  return (
    <AbsoluteFill>
      <At x={560} y={170} s={pop(t, fps, sep)}><Chip color={VIOLET} size={30}>ordinary vision</Chip></At>
      <At x={1360} y={170} s={pop(t, fps, sep + 0.9)}><Chip color={ICE} size={30}>pure vision</Chip></At>
      {[[ICE, 400], [ROSE, 560], [GOLD, 720]].map(([col, x], i) => (
        <At key={i} x={x as number} y={380} s={pop(t, fps, last + i * 0.3)}><Bowl liquid={col as string} size={0.4} /></At>
      ))}
      <Line x={560} y={480} at={last + 0.5} color={DIM} size={26}>no one has the last word</Line>
      <Line x={560} y={540} at={gods} color={GOLD} size={26}>even the gods’ nectar</Line>
      <At x={1360} y={380} s={pop(t, fps, clearer)}><Lotus /></At>
      <Line x={1360} y={480} at={clearer + 0.3} color={ICE} size={30} serif>clearer</Line>
      <At x={1360} y={600} o={ramp(t, win, 0.5)}><Struck at={win + 1.2} size={26}>a window onto a bedrock</Struck></At>
      <Line x={1360} y={660} at={her} color={ICE} size={26}>Māmakī: no nature of her own</Line>
      <Line y={780} at={dist} color={CHALK} size={30}>clearer, because it sees without the split into solid subjects and things</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: physics
const EchoScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const echo = c("Modern physics offers echoes of this"), only = c("Only echoes, not proofs");
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, echo)}><Glow color={TEAL} size={60} serif>echoes</Glow></At>
      {[0, 1, 2].map((i) => <Ring key={i} x={960} y={420} p={ramp(t, echo + 0.3 + i * 0.6, 2.0)} r0={80} r1={420} color={TEAL} />)}
      <Line y={640} at={only} color={WARM} size={36}>not proofs</Line>
    </AbsoluteFill>
  );
};

const BaradScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const barad = c("For Karen Barad"), intra = c("They emerge through what she calls intra-action"), noliq = c("So there is no liquid sitting there before the measurement");
  const human = c("The human drinker and the water appear together"), ghost = c("the suffering ghost and the pus appear together");
  return (
    <AbsoluteFill>
      <At x={960} y={150} s={pop(t, fps, barad)}><Chip color={VIOLET} size={30}>Karen Barad</Chip></At>
      <Line y={240} at={intra} color={VIOLET} size={34} serif>things emerge through intra-action</Line>
      <At x={960} y={360} o={ramp(t, noliq, 0.5)}><Struck at={noliq + 1.4} size={28}>a liquid sitting there first</Struck></At>
      <At x={620} y={560} s={pop(t, fps, human)}><Figure color={ICE} /></At>
      <At x={800} y={600} s={pop(t, fps, human + 0.4)}><Bowl liquid={ICE} size={0.4} /></At>
      <Line x={700} y={720} at={human + 0.6} color={ICE} size={28}>appear together</Line>
      <At x={1180} y={560} s={pop(t, fps, ghost)}><Ghost /></At>
      <At x={1360} y={600} s={pop(t, fps, ghost + 0.4)}><Bowl liquid={ROSE} size={0.4} /></At>
      <Line x={1260} y={720} at={ghost + 0.6} color={ROSE} size={28}>appear together</Line>
    </AbsoluteFill>
  );
};

const RovelliScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rqm = c("In Carlo Rovelli's relational quantum mechanics"), rel = c("values only relative to another system");
  const how = c("How, then, do two observers agree"), cpl = c("Rovelli answered with cross-perspective links");
  const rec = c("If one observer records a value"), match = c("the two will match"), check = c("Agreement comes from checking across perspectives");
  return (
    <AbsoluteFill>
      <At x={960} y={150} s={pop(t, fps, rqm)}><Chip color={TEAL} size={30}>Carlo Rovelli: relational quantum mechanics</Chip></At>
      <Line y={240} at={rel} color={TEAL} size={30}>values only relative to another system</Line>
      <At x={560} y={460} s={pop(t, fps, how)}><Figure color={GOLD} /></At>
      <At x={1360} y={460} s={pop(t, fps, how + 0.4)}><Figure color={VIOLET} /></At>
      <At x={960} y={360} s={pop(t, fps, cpl)}><Chip color={GOLD} size={26}>cross-perspective links</Chip></At>
      <At x={760} y={470} s={pop(t, fps, rec)}><Chip color={GOLD} size={26}>record</Chip></At>
      <Flow x1={830} y1={470} x2={1290} y2={470} color={VIOLET} p={ramp(t, rec + 1.2, 0.8)} />
      <At x={1160} y={560} s={pop(t, fps, match)}><Glow color={GREEN} size={40}>✓ match</Glow></At>
      <Line y={720} at={check} color={CHALK} size={32}>agreement by checking across perspectives</Line>
      <Line y={790} at={check + 1.6} color={DIM} size={28}>much as healthy senses confirm one another</Line>
    </AbsoluteFill>
  );
};

const NoFloorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neither = c("But neither theory should be read as saying"), floor = c("That would only build another floor");
  const contact = c("examined contact itself"), rel = c("Relations and the things related are identified together");
  const pts: [number, number][] = [[620, 360], [960, 280], [1300, 360], [1140, 520], [780, 520]];
  const floorO = ramp(t, neither + 0.4, 0.5) * (1 - ramp(t, contact, 0.8));
  return (
    <AbsoluteFill>
      <Web pts={pts} p={ramp(t, neither, 1.0)} color={VIOLET} />
      {pts.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, neither + i * 0.15)}><Orb size={36} color={[GOLD, TEAL, ROSE, ICE, VIOLET][i]} /></At>)}
      {/* a floor made of relations is drawn only to be removed */}
      <At x={960} y={680 + 120 * ramp(t, contact, 0.8)} o={floorO}><Slab w={900} h={36} color={VIOLET} /></At>
      <Line y={620} at={neither + 0.6} out={contact} color={CHALK} size={28}>relations as what is really there?</Line>
      <Line y={620} at={floor} out={contact} color={WARM} size={30}>only another floor</Line>
      <Line y={680} at={contact + 0.3} color={DIM} size={28}>contact itself cannot be found either</Line>
      <Line y={770} at={rel} color={GOLD} size={32} serif>relations and things related, identified together; neither is the ground</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: channels of contact
const TickScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const chan = c("If appearances depend on channels of contact"), deg = c("Contact comes in degrees"), tick = c("A tick responds mainly to three signals");
  const sweat = c("the smell of mammal sweat"), warm = c("the warmth of a body"), hair = c("and hair");
  const pool = c("A pool of clear spring water has none of these"), drown = c("Yet the tick can still drown in it");
  const sink = ramp(t, drown + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <Title at={chan}>channels of contact</Title>
      <Line y={180} at={deg} color={DIM} size={30}>contact comes in degrees</Line>
      <At x={760} y={380 + 180 * sink} s={pop(t, fps, tick)} r={30 * sink}><Tick /></At>
      {([["sweat", sweat, ROSE], ["warmth", warm, GOLD], ["hair", hair, CHALK]] as const).map(([w, at, col], i) => (
        <At key={w} x={1180 + i * 200} y={300} s={pop(t, fps, at)}><Chip color={col} size={28}>{w}</Chip></At>
      ))}
      <At x={760} y={600} o={ramp(t, pool, 0.5)}>
        <svg width={600} height={160} viewBox="0 0 600 160"><ellipse cx={300} cy={80} rx={290} ry={70} fill={`${ICE}22`} stroke={ICE} strokeWidth={4} /></svg>
      </At>
      <Line x={1380} y={480} at={pool + 0.4} color={ICE} size={28}>spring water: none of these</Line>
      <Line x={1380} y={540} at={pool + 1.2} color={DIM} size={26}>it never appears in the tick’s world</Line>
      <Line x={1380} y={650} at={drown + 0.4} color={WARM} size={34} serif>yet the tick can drown in it</Line>
    </AbsoluteFill>
  );
};

const DarkScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dark = c("Dark matter passes through the Earth"), grav = c("yet gravity still bends its path"), neu = c("A neutrino can pass through lead");
  const wall = c("The lead is neither a wall nor nothing"), weak = c("It is a region of very weak contact");
  const p = ramp(t, dark + 0.3, 3.0);
  const q = ramp(t, neu + 0.3, 2.4);
  return (
    <AbsoluteFill>
      <At x={760} y={360} s={pop(t, fps, dark - 0.3)}><Planet size={220} /></At>
      <Svg2>
        <path d={`M 360 ${360 - 40} Q 760 ${360 + 60 * ramp(t, grav, 0.8)} 1160 ${360 - 40}`} fill="none" stroke={VIOLET} strokeWidth={4}
          strokeDasharray="1000" strokeDashoffset={1000 * (1 - p)} style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }} />
      </Svg2>
      <Line x={760} y={520} at={dark + 0.5} color={VIOLET} size={28}>dark matter: no collision</Line>
      <Line x={760} y={580} at={grav} color={GOLD} size={28}>yet gravity bends its path</Line>
      <At x={1440} y={360} o={ramp(t, neu - 0.2, 0.5)}><div style={{ width: 180, height: 260, borderRadius: 10, background: `${DIM}55`, border: `4px solid ${DIM}` }} /></At>
      <At x={1180 + 520 * q} y={360} o={ramp(t, neu, 0.3) * (1 - ramp(t, neu + 2.6, 0.3))}><Orb size={20} color={TEAL} /></At>
      <Line x={1440} y={540} at={neu + 0.4} color={TEAL} size={28}>a neutrino through lead</Line>
      <Line y={720} at={wall} color={CHALK} size={32} serif>neither a wall nor nothing</Line>
      <Line y={790} at={weak} color={DIM} size={28}>a region of very weak contact</Line>
    </AbsoluteFill>
  );
};

/** Full-frame svg for curves (local helper). */
const Svg2: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>{children}</svg>
);

const NotErasedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const erased = c("The bowl is not erased"), wait = c("Everyday existence does not wait for someone to be naming it");
  const what = c("But what appears there"), dep = c("depends on which channels are active in the meeting");
  const labels: [string, string][] = [["nourishment", ICE], ["pus", ROSE], ["a barrier", DIM], ["an open passage", VIOLET]];
  return (
    <AbsoluteFill>
      <At x={960} y={360} s={pop(t, fps, erased)}><Bowl liquid={GOLD} size={0.8} /></At>
      <Line y={200} at={erased + 0.3} color={GOLD} size={32} serif>not erased when unregistered</Line>
      <Line y={500} at={wait} color={CHALK} size={28}>everyday existence does not wait for someone to be naming it</Line>
      {labels.map(([w, col], i) => (
        <At key={w} x={480 + i * 320} y={640} s={pop(t, fps, what + 0.3 + i * 0.35)}><Chip color={col} size={28}>{w}</Chip></At>
      ))}
      <Line y={770} at={dep} color={TEAL} size={30}>depends on which channels are active in the meeting</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: the offering
const OfferingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const test = c("The hardest test is contact between worlds"), blessed = c("water is blessed with a mantra and given"), nectar = c("it reaches them as nectar");
  const notsub = c("Not by a substance that travels"), nothing = c("Nothing passes from the human bowl into the ghost's mouth");
  const flame = c("from the evening flame into the midnight flame"), giving = c("The giving belongs to the human world");
  const relief = c("The relief belongs to the ghost's"), linked = c("They are linked as condition and result");
  const flameO = between(t, flame - 0.2, giving - 0.2);
  return (
    <AbsoluteFill>
      <Title at={test}>contact between worlds</Title>
      <At x={480} y={390} o={ramp(t, test + 0.4, 0.5)}><div style={{ width: 640, height: 400, borderRadius: 40, border: `3px solid ${ICE}`, background: `${ICE}0c` }} /></At>
      <At x={1440} y={390} o={ramp(t, test + 0.8, 0.5)}><div style={{ width: 640, height: 400, borderRadius: 40, border: `3px solid ${ROSE}`, background: `${ROSE}0c` }} /></At>
      <Line x={480} y={230} at={test + 0.6} color={ICE} size={26}>the human world</Line>
      <Line x={1440} y={230} at={test + 1.0} color={ROSE} size={26}>the ghost’s world</Line>
      <At x={480} y={320} s={pop(t, fps, blessed)} o={1 - flameO}><Bowl liquid={ICE} size={0.6} /></At>
      <Line x={480} y={420} at={blessed + 0.6} out={flame - 0.2} color={GOLD} size={26}>water, a mantra, an intention</Line>
      <At x={1440} y={320} s={pop(t, fps, nectar)} o={1 - flameO}><Bowl liquid={GOLD} size={0.6} /></At>
      <Line x={1440} y={420} at={nectar + 0.4} out={flame - 0.2} color={GOLD} size={26}>received as nectar</Line>
      <At x={960} y={320} o={ramp(t, notsub, 0.4) * (1 - ramp(t, nothing + 2.0, 0.5))}><Struck at={nothing} size={26}>a substance that travels</Struck></At>
      <At x={760} y={320} o={flameO}><Flame /></At>
      <At x={1160} y={320} o={flameO}><Flame color={ROSE} /></At>
      <Line y={430} at={flame + 0.2} out={giving - 0.2} color={DIM} size={24}>evening flame, midnight flame: nothing passes</Line>
      <Line x={480} y={460} at={giving} color={ICE} size={28}>the giving</Line>
      <Line x={1440} y={460} at={relief} color={ROSE} size={28}>the relief</Line>
      <Flow x1={800} y1={470} x2={1120} y2={470} color={GOLD} p={ramp(t, linked, 0.8)} dash />
      <Line y={680} at={linked + 0.3} color={GOLD} size={32} serif>condition and result, no common object underneath</Line>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two cautions belong here"), prove = c("This does not prove that such practices work");
  const mantra = c("the mantra is not a power living inside sounds"), key = c("the power to open lives in a key"), lock = c("apart from the lock, the hand and the door");
  return (
    <AbsoluteFill>
      <Title at={two} color={WARM}>two cautions</Title>
      <At x={960} y={260} s={pop(t, fps, prove)}><Chip color={WARM} size={28}>1 · this does not prove the practice works</Chip></At>
      <At x={960} y={370} s={pop(t, fps, mantra)}><Chip color={WARM} size={28}>2 · no power living inside sounds</Chip></At>
      <At x={960} y={560} o={ramp(t, key, 0.5)}><KeyLock p={ramp(t, lock + 0.4, 1.4)} /></At>
      <Line y={700} at={key + 0.4} color={GOLD} size={28}>no power to open in the key alone</Line>
      <Line y={770} at={lock} color={TEAL} size={28}>key, lock, hand and door: conditions together</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: the container
const ContainerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cling = c("Why do we cling so hard"), myth = c("Because of the container myth"), box = c("We picture space as an empty box");
  const obj = c("place a solid object in the middle"), obs = c("put observers around it"), ein = c("In Einstein's theory, spacetime is not an empty stage");
  const field = c("It is the gravitational field itself"), mark = c("space cannot exist before its own defining mark"), goes = c("When the box goes");
  const gone = ramp(t, goes + 0.2, 1.4);
  return (
    <AbsoluteFill>
      <Title at={cling}>why do we cling?</Title>
      <Line y={180} at={myth} color={VIOLET} size={34} serif>the container myth</Line>
      <At x={760} y={470} o={ramp(t, box, 0.5) * (1 - gone)} s={1 + 0.3 * gone}><SpaceBox /></At>
      <At x={740} y={500} s={pop(t, fps, obj)} o={1 - gone}><div style={{ width: 90, height: 90, borderRadius: 10, background: `${WARM}88`, border: `4px solid ${WARM}` }} /></At>
      {[[480, 300], [1000, 300], [480, 700], [1000, 700]].map(([x, y], i) => (
        <At key={i} x={x} y={y} s={pop(t, fps, obs + i * 0.15)} o={1 - gone}><Eye tint={[ICE, ROSE, TEAL, GOLD][i]} size={0.5} /></At>
      ))}
      <Line x={1460} y={340} at={ein} color={TEAL} size={28}>Einstein: not an empty stage</Line>
      <Line x={1460} y={400} at={field} color={TEAL} size={28}>spacetime is the gravitational field</Line>
      <Line x={1460} y={500} at={mark} color={GOLD} size={26}>space: not before its mark,</Line>
      <Line x={1460} y={550} at={mark + 1.2} color={GOLD} size={26}>the absence of obstruction</Line>
      <Line y={790} at={goes + 0.4} color={CHALK} size={32} serif>when the box goes, the puzzle goes with it</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: order
const OrderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const last = c("One last question"), ord = c("why is the world so orderly"), barley = c("Barley seeds grow barley, not rice");
  const fire = c("Fire burns and does not freeze"), arb = c("does not make anything arbitrary");
  return (
    <AbsoluteFill>
      <Title at={last}>one last question</Title>
      <Line y={190} at={ord} color={DIM} size={32}>why is the world so orderly?</Line>
      <At x={620} y={460} o={ramp(t, barley, 0.4)}><Sprout p={ramp(t, barley + 0.2, 1.6)} /></At>
      <Line x={620} y={620} at={barley + 0.6} color={GREEN} size={28}>barley from barley</Line>
      <At x={1300} y={440} s={pop(t, fps, fire)}><Flame size={1.4} /></At>
      <Line x={1300} y={620} at={fire + 0.4} color={GOLD} size={28}>fire burns</Line>
      <Line y={760} at={arb} color={CHALK} size={32} serif>empty of a fixed nature, and not arbitrary</Line>
    </AbsoluteFill>
  );
};

const EnablesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const either = c("But emptiness is not what makes cause and effect work either"), en = c("Emptiness enables nothing and explains nothing");
  const never = c("Things never needed a fixed essence in order to work"), could = c("Something with a fixed essence could never arise, change or end");
  return (
    <AbsoluteFill>
      <At x={960} y={260} o={ramp(t, either, 0.5)}><Struck at={either + 1.6} size={34} color={CHALK}>emptiness makes cause and effect work</Struck></At>
      <At x={960} y={420} s={pop(t, fps, en, 14)} o={ramp(t, en, 0.5)}><Glow color={GOLD} size={52} serif>enables nothing, explains nothing</Glow></At>
      <Line y={580} at={never} color={TEAL} size={30}>things never needed a fixed essence to work</Line>
      <At x={960} y={720} s={pop(t, fps, could)}><div style={{ width: 150, height: 150, borderRadius: 14, border: `6px solid ${WARM}`, background: `${WARM}22` }} /></At>
      <Line y={830} at={could + 0.4} color={WARM} size={28}>a fixed essence could never arise, change or end</Line>
    </AbsoluteFill>
  );
};

const WebScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const press = c("Press further"), whole = c("the question treats the whole web as one thing"), label = c("But the whole is a label too");
  const first = c("dependent arising has no first beginning"), steam = c("It runs out of steam");
  const pts: [number, number][] = [[600, 300], [880, 240], [1200, 300], [1320, 500], [1040, 600], [720, 560]];
  const boxO = ramp(t, whole, 0.5) * (1 - ramp(t, label + 0.6, 0.6));
  return (
    <AbsoluteFill>
      <Title at={press}>why a web of causes at all?</Title>
      <Web pts={pts} p={ramp(t, press + 0.4, 1.0)} color={TEAL} />
      {pts.map(([x, y], i) => <At key={i} x={x} y={y} s={pop(t, fps, press + 0.3 + i * 0.1)}><Orb size={30} color={[GOLD, TEAL, ROSE, ICE, VIOLET, GREEN][i]} /></At>)}
      <At x={960} y={420} o={boxO}><div style={{ width: 900, height: 480, borderRadius: 30, border: `5px solid ${WARM}` }} /></At>
      <At x={1500} y={700} o={boxO}><Chip color={WARM} size={26}>an outside cause?</Chip></At>
      <Line y={720} at={label + 0.3} color={CHALK} size={30}>“the whole” is a label too</Line>
      <Line y={780} at={first} color={TEAL} size={28}>no first beginning</Line>
      <Line y={840} at={steam} color={DIM} size={28}>the question runs out of steam</Line>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- scenes: close
const NotNihilismScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nih = c("So this is not nihilism"), idl = c("It is not idealism"), any = c("it is not anything goes");
  const dem = c("the anxious demand for a foundation"), ballast = c("a dead, unmoving ballast beneath the living display");
  const drop = ramp(t, ballast + 1.2, 1.2);
  return (
    <AbsoluteFill>
      {([["nihilism", nih], ["idealism", idl], ["anything goes", any]] as const).map(([w, at], i) => (
        <At key={w} x={520 + i * 440} y={220} o={ramp(t, at, 0.4)}><Struck at={at + 0.6} size={34} color={CHALK}>{w}</Struck></At>
      ))}
      <Line y={360} at={dem} color={WARM} size={30}>what is removed: the demand for a foundation</Line>
      {[0, 1, 2, 3, 4].map((i) => (
        <At key={i} x={640 + i * 160} y={500 + 20 * Math.sin(t + i)} s={pop(t, fps, ballast + i * 0.15)}><Orb size={44} color={[GOLD, TEAL, ROSE, ICE, VIOLET][i]} /></At>
      ))}
      <At x={960} y={660 + 260 * drop} o={ramp(t, ballast, 0.5) * (1 - drop)}><Slab w={760} h={70} color={DIM} /></At>
      <Line y={660} at={ballast + 0.3} out={ballast + 1.2} color={CHALK} size={26}>dead ballast beneath?</Line>
      <Line y={780} at={ballast + 1.8} color={GOLD} size={32} serif>the living display needs none</Line>
    </AbsoluteFill>
  );
};

const CompassionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const beyond = c("It also matters beyond philosophy"), pus = c("If the ghost's pus is really pus for the ghost"), mist = c("its suffering is not a mistake to be explained away");
  const owns = c("No point of view owns the real world"), comp = c("That is why compassion makes sense without a self behind it");
  const takes = c("Emptiness takes nothing away from others' suffering");
  return (
    <AbsoluteFill>
      <Title at={beyond} color={ROSE}>beyond philosophy</Title>
      <At x={620} y={420} s={pop(t, fps, pus)}><Ghost size={1.2} /></At>
      <At x={820} y={480} s={pop(t, fps, pus + 0.5)}><Bowl liquid={ROSE} size={0.45} /></At>
      <Line x={700} y={620} at={mist} color={ROSE} size={28}>its suffering: not a mistake</Line>
      <Line x={1340} y={320} at={owns} color={CHALK} size={30}>no point of view owns the real world</Line>
      <At x={1340} y={480} s={pop(t, fps, comp)}><svg width={130} height={120} viewBox="0 0 130 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ROSE})` }}>
        <path d="M65 110 L15 60 Q-5 30 25 15 Q50 5 65 30 Q80 5 105 15 Q135 30 115 60 Z" fill={`${ROSE}55`} stroke={ROSE} strokeWidth={5} strokeLinejoin="round" /></svg></At>
      <Line x={1340} y={610} at={comp + 0.4} color={GOLD} size={30} serif>compassion, with no self behind it</Line>
      <Ring x={1340} y={480} p={ramp(t, comp + 0.6, 2.6)} r0={80} r1={460} color={ROSE} />
      <Line y={780} at={takes} color={CHALK} size={30}>emptiness takes nothing away from others’ suffering</Line>
    </AbsoluteFill>
  );
};

const FitsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("put it in one line"), key = c("where the key word means fits, or works"), works = c("For whom emptiness works, everything works");
  return (
    <AbsoluteFill>
      <At x={960} y={200} s={pop(t, fps, one)}><Chip color={GOLD} size={30}>Nāgārjuna, Root Verses 24.14</Chip></At>
      <Line y={320} at={key} color={DIM} size={30}>yujyate: it fits, it works</Line>
      <div style={{ position: "absolute", top: 440, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="For whom emptiness works," at={works} size={70} />
      </div>
      <div style={{ position: "absolute", top: 560, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="everything works." at={works + 1.6} size={70} />
      </div>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const side = c("And from the side of"), rec = c("when appearances are recognised as display"), met = c("appearing is met as it always was");
  const vivid = c("Vivid, unproduced, and not found anywhere"), life = c("Everyday life does not carry on in spite of having no foundation");
  const because = c("And it does not appear because it has none"), never = c("It never needed one");
  return (
    <AbsoluteFill>
      <At x={960} y={150} s={pop(t, fps, side)}><Chip color={VIOLET} size={28}>from the side of the Great Perfection</Chip></At>
      <At x={960} y={400} s={pop(t, fps, rec)}><Bowl liquid={GOLD} /></At>
      <Line y={260} at={met} color={CHALK} size={30}>appearing, met as it always was</Line>
      {(["vivid", "unproduced", "not found anywhere"] as const).map((w, i) => (
        <At key={w} x={560 + i * 400} y={580} s={pop(t, fps, vivid + i * 0.6)}><Chip color={[GOLD, TEAL, ICE][i]} size={30}>{w}</Chip></At>
      ))}
      <Line y={680} at={life} out={never - 0.2} color={DIM} size={28}>not in spite of having no foundation</Line>
      <Line y={740} at={because} out={never - 0.2} color={DIM} size={28}>and not because it has none</Line>
      <Ring x={960} y={400} p={ramp(t, never, 3.0)} r0={120} r1={700} color={GOLD} />
      <At x={960} y={720} s={pop(t, fps, never, 16)} o={ramp(t, never, 0.8)}><Glow color={GOLD} size={56} serif>It never needed one.</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string | null][] = [
    ["open", null], ["doubt", "Common sense has a ready answer"], ["search", "Start with a word we slipped in"],
    ["web", "Then a real question remains"], ["doubt", "Within everyday truth, mistakes are still caught"],
    ["search", "The bowl example did not begin in the Middle Way"], ["web", "Agreement also needs others to agree with"],
    ["whole", "describes the same freedom from the side of experience"], ["search", "Modern physics offers echoes of this"],
    ["web", "If appearances depend on channels of contact"], ["doubt", "The hardest test is contact between worlds"],
    ["search", "Why do we cling so hard"], ["whole", "One last question"], ["vivid", "It also matters beyond philosophy"],
  ];
  const moods: Mood[] = [];
  const st = starts.map(([k, ph]) => [k, ph ? c(ph, 0.6) : 0] as const);
  st.forEach(([k, s], i) => {
    const next = i + 1 < st.length ? st[i + 1][1] : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  // each scene runs from its first phrase to the next scene's first phrase
  const order: [string | null, React.ReactNode][] = [
    [null, <BowlScene />], ["It is one of the oldest examples", <QuestionScene />], ["Common sense has a ready answer", <TwoLayersScene />],
    ["The Middle Way of", <MiddleWayScene />], ["Start with a word we slipped in", <LiquidWordScene />],
    ["So ask what this hidden thing is like", <HornsScene />], ["Someone will push back", <WetnessScene />],
    ["analysis targets is called", <OwnNatureScene />], ["Then a real question remains", <AgreeQuestionScene />],
    ["The Indian master", <EverydayTruthScene />], ["He also refuses the opposite move", <MindOnlyScene />],
    ["Within everyday truth, mistakes are still caught", <JaundiceScene />], ["The hungry ghost is not a jaundiced human", <GhostNormalScene />],
    ["So what of the bowl itself", <RefPointScene />], ["The bowl example did not begin in the Middle Way", <VasubandhuScene />],
    ["That answers the question by making consciousness the floor", <ReplyScene />],
    ["Agreement also needs others to agree with", <OtherMindsScene />], ["A critic can press further", <CircleScene />],
    ["much of this agreement is carried by language", <LanguageScene />],
    ["describes the same freedom from the side of experience", <BasisScene />], ["Appearances are called display", <DisplayScene />],
    ["Knowing awareness", <RigpaScene />], ["The traditions divide on whether awareness knows itself", <SelfKnowScene />],
    ["also separates ordinary vision from pure vision", <PureVisionScene />], ["Modern physics offers echoes of this", <EchoScene />],
    ["For Karen Barad", <BaradScene />], ["In Carlo Rovelli's relational quantum mechanics", <RovelliScene />],
    ["But neither theory should be read as saying", <NoFloorScene />], ["If appearances depend on channels of contact", <TickScene />],
    ["Dark matter passes through the Earth", <DarkScene />], ["The bowl is not erased", <NotErasedScene />],
    ["The hardest test is contact between worlds", <OfferingScene />], ["Two cautions belong here", <CautionScene />],
    ["Why do we cling so hard", <ContainerScene />], ["One last question", <OrderScene />],
    ["But emptiness is not what makes cause and effect work either", <EnablesScene />], ["Press further", <WebScene />],
    ["So this is not nihilism", <NotNihilismScene />], ["It also matters beyond philosophy", <CompassionScene />],
    ["put it in one line", <FitsScene />], ["And from the side of", <CloseScene />],
  ];
  const bounds = order.map(([ph]) => (ph ? c(ph, 0.5) : 0));
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([, node], i) => (
        <Scene key={i} from={Math.max(0, bounds[i])} to={i + 1 < order.length ? bounds[i + 1] - 0.4 : 1e9}>{node}</Scene>
      ))}
    </AbsoluteFill>
  );
};
