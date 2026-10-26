// Anatta to Emptiness, Bonus: The Logic: After Anatta. Explainer drawings timed to the narration.
// Arc: the bell already passing -> the koan -> two logics (things first / how a thing is picked out) -> three insights
// (the red apple: vivid and unfindable; conditions meeting and parting; "lightning flashes") -> the habit reshapes
// experience; bare attention tastes clarity but the habit reads it -> three tastes, three inventions (a witness, a world
// out there, only mind), each struck -> the three positions; inside needs outside -> the great masters -> the koan's four
// answers, each struck -> the ways out (a timeless Now, an awareness, a pure flow), each struck -> moment, arising and
// ceasing designated together -> the staircase, up and down -> "it falls away" -> the eight steps -> the four questions
// -> questioning the question -> nothing lost, no floor underneath -> the bell again -> close.
// Stance: no awareness, clarity, emptiness, relation or dependent arising is drawn as a source, ground, container or
// backdrop. Each "way out" and each invented "it" is shown only to be struck. The bell, apple, stairs and clock stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  SANS, Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the bell and the koan
  "Strike a bell and listen", "it is already passing as it sounds", "is there a sound that stays",
  "Here is a koan to hold in mind", "This moment ceases as it arises", "Does it arise, or does it cease",
  "two different ways of thinking", "not only for philosophy, but for practice",
  "It draws on The Logic", "These notes set out the logic behind it",
  // the claim and the two logics
  "Start with the claim the author puts first", "cannot be understood clearly by reasoning alone", "It needs a direct insight",
  "A sound, a thought, a cup",
  "The two logics can be learned as ideas", "One starts with things", "how anything is picked out as a thing at all",
  "But agreeing changes very little", "The logic of substance is not a belief we hold", "The cup is simply there, on its own side",
  "even the new logic is quietly read through the old one",
  // three insights
  "So the author names three insights", "the logic stays a clever argument",
  "Every appearance is vivid, and it cannot be found", "Look at a red apple", "Now look for it",
  "Is it in the skin, in the light, in the eye", "Yet the apple is still red", "The tradition calls this emptiness",
  "Not a void, and not a ground behind the appearing",
  "Appearance arises whenever its conditions come together", "Light, a surface, an eye, attention", "When one is missing, it does not",
  "Nothing comes out of a hidden place", "The tradition calls this dependent origination",
  "We habitually and intuitively think inherently", "A sentence wants a subject and a verb", "So we say lightning flashes",
  "The flashing is the lightning", "The tradition calls this habit ignorance",
  "The first two are one fact, seen from two sides", "The third is what hides that fact",
  // the habit and bare attention
  "it reshapes them before we notice", "So practice becomes the removal of concepts", "Bare attention",
  "These practices do something real", "the clarity of appearances can be tasted directly",
  "The habit of thinking inherently does not need words to work",
  // three tastes, three inventions
  "The author describes three ways this happens", "We taste luminous clarity, and invent a witness",
  "We meet the vividness of appearances, and make it objective", "We taste unfindability, and make it private",
  "Each time the experience was true, and the reading was false",
  "the great positions people argue about", "consciousness as the ground of everything", "a physical world simply there",
  "a world that is only mind", "The author passed through each of them",
  "If a subject depends on its object", "An inside that depends on an outside is not truly inside",
  // the masters
  "The great masters said the same", "wrote that calm abiding alone", "wrote that without the wisdom that realises",
  "advised that when thoughts arise", "a Zen master, scolded those", "experience without the view cannot do the work",
  // the koan answered by substance
  "Now return to the koan",
  "The logic of substance starts with a thing", "So it must choose",
  "It arises? Then it is there", "it is never there to have arisen", "it splits again",
  "It ceases? Then something passes away", "what passes away, if it never stood",
  "Coming into being and passing away are opposites", "Neither? Then nothing happens at all", "Yet a sound is being heard right now",
  "Every answer fails", "put the whole trap in one verse", "There is no passing away either apart from coming into being",
  "the logic of substance looks for a way out", "A timeless Now that the moments pass through", "An awareness in which they come and go",
  "A pure flow", "only moves it somewhere else",
  // the koan answered by dependency
  "The logic of dependency starts one step earlier", "It asks how this moment is picked out at all",
  "A moment is picked out together with its arising and its ceasing", "None comes first, and none is found apart from the others",
  "merely designated as such upon conditions",
  "Think of a staircase", "Are the stairs up, or down", "In themselves, neither", "They are up for someone climbing",
  "and down for someone coming down", "And the stairs are really climbed, and really descended",
  "It is called arising from one side, and ceasing from the other", "It is not nothing, and it is not only in the mind",
  "It is a plain description", "There is no it standing between the arising and the ceasing", "The question is not answered",
  "It falls away",
  // the eight steps
  "The eight steps of The Logic each come back", "The first sets the two logics side by side",
  "The second asks what exactly is denied", "Deny too little, and a timeless Now takes its place", "Deny too much",
  "The third goes looking for the moment", "Yet moments are named, counted and timed",
  "The fourth gives the koan two answers", "Conventionally, the bell starts and stops", "One moment, met two ways",
  "The fifth shows why all four answers fall together", "The sixth names the two traps", "the eternalist trap", "the nihilist trap",
  "The seventh answers the worry", "It is because nothing stands on its own",
  "And the eighth gathers it all into four questions", "What would a substance view say", "What does dependency say instead",
  "What is affirmed conventionally", "What is never found",
  // questioning the question
  "There is one more turn", "does the self exist", "what happens when I die",
  "each question already assumes a thing with its own nature", "any answer only swaps one thing for another",
  "a way to question the question",
  // nothing lost, and the close
  "Nothing is lost when the it is not found", "The bell is still heard", "The clock still keeps time", "Actions still bear fruit",
  "Mutual dependence has no first and no higher", "No substrate underneath", "There is nothing more real underneath for it to cover",
  "Listen to the bell once more", "It is vivid", "And nothing went anywhere",
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
/** A temple bell; swing (degrees) rocks it from the top. */
const Bell: React.FC<{ size?: number; swing?: number; color?: string }> = ({ size = 220, swing = 0, color = GOLD }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 200 220" style={{ overflow: "visible", transform: `rotate(${swing}deg)`, transformOrigin: "50% 5%",
    filter: `drop-shadow(0 0 12px ${color}99)` }}>
    <path d="M90 8 Q100 0 110 8 L110 22 L90 22 Z" fill={`${color}55`} stroke={color} strokeWidth={4} />
    <path d="M100 22 Q52 24 48 90 L42 160 Q30 172 22 180 L178 180 Q170 172 158 160 L152 90 Q148 24 100 22 Z" fill={`${color}33`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <path d="M52 140 L148 140" stroke={color} strokeWidth={3} opacity={0.7} />
    <circle cx={100} cy={196} r={14} fill={`${color}66`} stroke={color} strokeWidth={4} />
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

// ---------------------------------------------------------------- scenes
const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strike = c("Strike a bell and listen");
  const swing = 8 * Math.sin((t - strike) * 5) * Math.exp(-Math.max(0, t - strike) * 0.6) * (t > strike ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, strike - 0.4)}><Bell swing={swing} /></At>
      <Sound x={960} y={420} at={strike + 0.4} dur={6} />
      <Items items={[
        ["Strike a bell and listen", 960, 640, <W c={GOLD} s={36} serif>bright and clear</W>, { d: 1.6 }],
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
  const two = c("two different ways of thinking");
  return (
    <AbsoluteFill>
      <Title at={two}>two ways of thinking</Title>
      <Svg>
        <DrawPath d="M960 560 C 960 420, 700 380, 560 300" p={ramp(t, two + 0.3, 1)} color={WARM} width={6} len={600} />
        <DrawPath d="M960 560 C 960 420, 1220 380, 1360 300" p={ramp(t, two + 0.6, 1)} color={TEAL} width={6} len={600} />
      </Svg>
      <Items items={[
        ["two different ways of thinking", 560, 250, <K c={WARM}>logic of substance</K>, { d: 1.2, pop: true }],
        ["two different ways of thinking", 1360, 250, <K c={TEAL}>logic of dependency</K>, { d: 1.6, pop: true }],
        ["not only for philosophy, but for practice", 760, 620, <K c={DIM} s={28}>philosophy</K>, { pop: true }],
        ["not only for philosophy, but for practice", 1160, 620, <K c={GOLD} s={28}>practice</K>, { pop: true, d: 0.8 }],
        ["It draws on The Logic", 960, 720, <W c={CHALK} s={32}>After Anatta · The Logic</W>],
        ["These notes set out the logic behind it", 960, 790, <W c={DIM} s={28}>the seven phases describe the seeing; these notes, its logic</W>],
      ]} />
    </AbsoluteFill>
  );
};

const ClaimScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("Start with the claim the author puts first")}>the first claim</Title>
      <Items items={[
        ["cannot be understood clearly by reasoning alone", 960, 230, <W c={DIM} s={32}>not by reasoning alone</W>],
        ["It needs a direct insight", 960, 340, <Eye color={GOLD} size={150} />, { pop: true }],
        ["It needs a direct insight", 960, 430, <W c={GOLD} s={34} serif>a direct insight into what a thing is</W>, { d: 0.5 }],
        ["A sound, a thought, a cup", 560, 620, <Bell size={120} />, { pop: true }],
        ["A sound, a thought, a cup", 960, 620, <Thought />, { pop: true, d: 0.5 }],
        ["A sound, a thought, a cup", 1360, 620, <Cup />, { pop: true, d: 1.0 }],
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
      <Title at={c("The two logics can be learned as ideas")}>two logics, learned as ideas</Title>
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
        ["But agreeing changes very little", 960, 720, <W c={DIM} s={32}>easy to agree with; it changes very little</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cup = c("The cup is simply there, on its own side");
  const lens = c("even the new logic is quietly read through the old one");
  return (
    <AbsoluteFill>
      <Title at={c("The logic of substance is not a belief we hold")}>not a belief: how things seem</Title>
      <At x={760} y={420} s={pop(t, fps, cup)}><Cup size={200} /></At>
      <At x={760} y={420} o={ramp(t, cup + 0.8, 0.5)}>
        <div style={{ width: 300, height: 240, borderRadius: 30, border: `4px solid ${WARM}88`, boxShadow: `0 0 30px ${WARM}55` }} />
      </At>
      <At x={760} y={600} o={ramp(t, cup + 1.0, 0.5)}><W c={WARM} s={30}>“simply there, on its own side”</W></At>
      <At x={1300} y={420} o={ramp(t, lens, 0.5)}><K c={TEAL} s={30}>dependency</K></At>
      <At x={1300} y={420} o={ramp(t, lens + 0.8, 0.6)}>
        <div style={{ width: 300, height: 120, borderRadius: 60, background: `${WARM}33`, border: `3px solid ${WARM}` }} />
      </At>
      <At x={1300} y={540} o={ramp(t, lens + 1.2, 0.5)}><W c={DIM} s={28}>read through the old lens</W></At>
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("So the author names three insights");
  return (
    <AbsoluteFill>
      <Title at={n}>three insights after anatta</Title>
      {[["vivid, and not found", GOLD], ["arising on conditions", TEAL], ["the habit of thinking inherently", WARM]].map(([w, col], i) => (
        <React.Fragment key={i}>
          <At x={420 + i * 540} y={380} s={pop(t, fps, n + 0.6 + i * 0.5)}><Num n={String(i + 1)} color={col} lit={1} /></At>
          <At x={420 + i * 540} y={470} o={ramp(t, n + 0.9 + i * 0.5, 0.5)}><W c={col} s={30}>{w}</W></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["So the author names three insights", 960, 600, <W c={CHALK} s={30}>seen clearly, confirmed again and again</W>, { d: 2.6 }],
        ["the logic stays a clever argument", 960, 700, <W c={DIM} s={32}>otherwise: a clever argument</W>],
      ]} />
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const look = c("Now look for it");
  const parts = c("Is it in the skin, in the light, in the eye");
  const still = c("Yet the apple is still red");
  const nv = c("Not a void, and not a ground behind the appearing");
  return (
    <AbsoluteFill>
      <Title at={c("Every appearance is vivid, and it cannot be found")} color={GOLD}>1. vivid, and cannot be found</Title>
      <At x={960} y={400} s={pop(t, fps, c("Look at a red apple"))}><Apple glow={0.6 + 0.4 * ramp(t, still, 0.8)} /></At>
      <At x={760 + 80 * Math.sin((t - look) * 1.6)} y={330 + 40 * Math.cos((t - look) * 1.3)} o={between(t, look, still)}><Magnifier /></At>
      {(["skin", "light", "eye"] as const).map((w, i) => (
        <React.Fragment key={w}>
          <At x={1340} y={260 + i * 110} o={ramp(t, parts + i * 0.6, 0.4) * (1 - ramp(t, nv - 0.4, 0.4))}><K c={ICE} s={28}>in the {w}?</K></At>
          <At x={1540} y={260 + i * 110} o={ramp(t, parts + 1.8 + i * 0.3, 0.4) * (1 - ramp(t, nv - 0.4, 0.4))}><W c={WARM} s={26}>not found</W></At>
        </React.Fragment>
      ))}
      <At x={960} y={600} o={ramp(t, still, 0.5)}><W c={RED} s={36} serif>still red</W></At>
      <Items items={[
        ["The tradition calls this emptiness", 960, 690, <W c={GOLD} s={34} serif>emptiness: the appearing’s not being found</W>],
      ]} />
      {/* a void and a ground: drawn only to be crossed out */}
      <At x={420} y={420} o={ramp(t, nv, 0.4) * (1 - ramp(t, nv + 3.0, 0.5))}>
        <div style={{ width: 170, height: 170, borderRadius: "50%", background: "#000", border: `3px dashed ${DIM}` }} />
      </At>
      <At x={420} y={540} o={ramp(t, nv, 0.4) * (1 - ramp(t, nv + 3.0, 0.5))}><W c={DIM} s={26}>a void?</W></At>
      <At x={960} y={790} o={ramp(t, nv + 0.8, 0.4) * (1 - ramp(t, nv + 3.0, 0.5))}><Floor w={560} color={DIM} dashed /></At>
      <At x={960} y={745} o={ramp(t, nv + 0.8, 0.4) * (1 - ramp(t, nv + 3.0, 0.5))}><W c={DIM} s={26}>a ground behind?</W></At>
      <div style={{ position: "absolute", inset: 0, opacity: 1 - ramp(t, nv + 3.0, 0.5) }}>
        <Crossed x={420} y={420} at={nv + 0.6} size={70} />
        <Crossed x={960} y={790} at={nv + 1.6} size={50} />
      </div>
    </AbsoluteFill>
  );
};

const ConditionsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const come = c("Light, a surface, an eye, attention");
  const miss = c("When one is missing, it does not");
  const away = ramp(t, miss, 1.0);
  const pts: [string, number, number, string][] = [["light", 520, 300, GOLD], ["a surface", 1400, 300, ICE], ["an eye", 520, 640, TEAL], ["attention", 1400, 640, VIOLET]];
  return (
    <AbsoluteFill>
      <Title at={c("Appearance arises whenever its conditions come together")} color={TEAL}>2. arising whenever conditions meet</Title>
      {pts.map(([w, x, y, col], i) => {
        const gather = ramp(t, come + 2.2, 1.2) * (i === 3 ? 1 - away : 1);
        const gx = x + (960 - x) * 0.45 * gather, gy = y + (470 - y) * 0.45 * gather;
        const dx = i === 3 ? 260 * away : 0;
        return (
          <At key={w} x={gx + dx} y={gy} o={ramp(t, come + i * 0.5, 0.4)}><K c={col} s={30}>{w}</K></At>
        );
      })}
      <At x={960} y={470} o={ramp(t, come + 3.0, 0.6) * (1 - 0.9 * away)}><Apple size={150} glow={1 - away} /></At>
      <Items items={[
        ["Light, a surface, an eye, attention", 960, 600, <W c={RED} s={30}>together, red appears</W>, { d: 3.4, until: "When one is missing, it does not" }],
        ["When one is missing, it does not", 960, 600, <W c={DIM} s={30}>one missing: no red</W>, { d: 0.6 }],
        ["Nothing comes out of a hidden place", 960, 720, <W c={CHALK} s={30}>nothing comes from a hidden place, nothing goes back</W>],
        ["The tradition calls this dependent origination", 960, 800, <W c={TEAL} s={34} serif>dependent origination</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SentenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sv = c("A sentence wants a subject and a verb");
  const say = c("So we say lightning flashes");
  const is = c("The flashing is the lightning");
  const flash = 0.5 + 0.5 * Math.sin(t * 9);
  const box = (label: string, col: string, at: number) => (
    <div style={{ width: 280, height: 110, borderRadius: 14, border: `3px solid ${col}`, background: `${col}14`, position: "relative", opacity: ramp(t, at, 0.4) }}>
      <div style={{ position: "absolute", top: -40, width: "100%", fontFamily: SANS, fontSize: 24, color: col, letterSpacing: 2 }}>{label}</div>
    </div>
  );
  return (
    <AbsoluteFill>
      <Title at={c("We habitually and intuitively think inherently")} color={WARM}>3. the habit of thinking inherently</Title>
      <At x={760} y={320}>{box("SUBJECT", GOLD, sv)}</At>
      <At x={1160} y={320}>{box("VERB", ICE, sv + 0.4)}</At>
      <At x={760} y={320} s={pop(t, fps, say + 0.4)}><W c={GOLD} s={40} serif>lightning</W></At>
      <At x={1160} y={320} s={pop(t, fps, say + 1.0)}><W c={ICE} s={40} serif>flashes</W></At>
      <At x={760} y={470} o={ramp(t, say + 1.8, 0.5)}>
        <SK c={DIM} s={26} strikeAt={is + 0.8}>a lightning apart from the flash</SK>
      </At>
      <At x={1500} y={460} o={ramp(t, is, 0.4)}><Bolt flash={flash} /></At>
      <Items items={[
        ["The flashing is the lightning", 1160, 600, <W c={ICE} s={38} serif>the flashing is the lightning</W>, { d: 0.4 }],
        ["The tradition calls this habit ignorance", 960, 740, <W c={WARM} s={32}>ignorance: grasping things as there from their own side</W>],
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
        ["The first two are one fact, seen from two sides", 640, 430, <K c={GOLD}>empty: not found</K>, { pop: true, d: 0.4 }],
        ["The first two are one fact, seen from two sides", 1280, 430, <K c={TEAL}>arising in dependence</K>, { pop: true, d: 0.9 }],
        ["The first two are one fact, seen from two sides", 960, 430, <W c={CHALK} s={44} serif>=</W>, { d: 1.4 }],
      ]} />
      <At x={960 - 700 * (1 - ramp(t, hide + 0.3, 1.2))} y={430} o={ramp(t, hide, 0.4)}>
        <div style={{ width: 1100, height: 180, borderRadius: 30, background: `${WARM}30`, border: `3px solid ${WARM}88`, backdropFilter: "blur(6px)" }} />
      </At>
      <At x={960} y={620} o={ramp(t, hide + 1.2, 0.5)}><W c={WARM} s={32}>the third: what hides it</W></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const re = c("it reshapes them before we notice");
  const rem = c("So practice becomes the removal of concepts");
  const pass = ramp(t, re + 0.4, 1.6);
  const cols = [GOLD, RED, VIOLET];
  return (
    <AbsoluteFill>
      <Title at={re - 0.6}>the habit runs by default</Title>
      <At x={960} y={330} o={ramp(t, re, 0.5) * (1 - ramp(t, rem, 0.5))}>
        <div style={{ width: 70, height: 260, borderRadius: "50%", background: `${WARM}33`, border: `3px solid ${WARM}`, boxShadow: `0 0 24px ${WARM}66` }} />
      </At>
      <At x={960} y={490} o={ramp(t, re + 0.3, 0.5) * (1 - ramp(t, rem, 0.5))}><W c={WARM} s={26}>habit</W></At>
      {cols.map((col, i) => {
        const x = 520 + 880 * pass;
        const hard = x > 960 ? 1 : 0;
        return (
          <At key={i} x={x} y={250 + i * 80} o={ramp(t, re, 0.5) * (1 - ramp(t, rem, 0.5))}>
            <div style={{ width: 54, height: 54, borderRadius: hard ? 6 : 27, background: `${col}66`,
              border: hard ? `4px solid ${CHALK}` : `2px solid ${col}`, boxShadow: `0 0 16px ${col}` }} />
          </At>
        );
      })}
      <At x={1400} y={520} o={ramp(t, re + 1.8, 0.5) * (1 - ramp(t, rem, 0.5))}><W c={CHALK} s={26}>now “things”</W></At>
      {(["a sound", "mine", "nice", "me"] as const).map((w, i) => (
        <At key={w} x={560 + i * 270} y={330 - 60 * ramp(t, rem + 1.2 + i * 0.2, 1.0)} o={ramp(t, rem + i * 0.15, 0.4) * (1 - ramp(t, rem + 1.2 + i * 0.2, 1.0))}>
          <K c={DIM} s={28}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["So practice becomes the removal of concepts", 960, 460, <W c={CHALK} s={32}>practice as removing concepts</W>, { d: 0.6 }],
        ["Bare attention", 560, 640, <K c={ICE} s={28}>not thinking</K>, { pop: true, d: -0.6 }],
        ["Bare attention", 960, 640, <K c={ICE} s={28}>bare attention</K>, { pop: true }],
        ["Bare attention", 1360, 640, <K c={ICE} s={28}>naked awareness</K>, { pop: true, d: 0.7 }],
      ]} />
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const habit = c("The habit of thinking inherently does not need words to work");
  return (
    <AbsoluteFill>
      <Title at={c("These practices do something real")} color={GREEN}>they do something real</Title>
      <Items items={[
        ["the clarity of appearances can be tasted directly", 560, 380, <Bell size={150} />, { pop: true }],
        ["the clarity of appearances can be tasted directly", 560, 540, <W c={GOLD} s={30}>clarity, tasted directly</W>, { d: 0.6 }],
        ["The habit of thinking inherently does not need words to work", 1360, 300, <SK c={DIM} s={30} strikeAt={habit + 0.8}>words</SK>, { pop: true }],
        ["The habit of thinking inherently does not need words to work", 1360, 540, <W c={WARM} s={30}>the habit carries on, wordless</W>, { d: 1.6 }],
        ["The habit of thinking inherently does not need words to work", 960, 700, <W c={DIM} s={30}>and reads the clear experience the old way</W>, { d: 3.0 }],
      ]} />
      <At x={1360} y={420} o={ramp(t, habit + 1.2, 0.5)}>
        <div style={{ width: 220, height: 80, borderRadius: 40, background: `${WARM}33`, border: `3px solid ${WARM}`, boxShadow: `0 0 20px ${WARM}66` }} />
      </At>
    </AbsoluteFill>
  );
};

const InventionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("We taste luminous clarity, and invent a witness");
  const b = c("We meet the vividness of appearances, and make it objective");
  const p = c("We taste unfindability, and make it private");
  const end = c("Each time the experience was true, and the reading was false");
  const sA = a + 4.4, sB = b + 5.0, sC = p + 4.0;
  return (
    <AbsoluteFill>
      <Title at={c("The author describes three ways this happens")}>three tastes, three inventions</Title>
      {/* clarity -> a witness behind the knowing */}
      <At x={460} y={240} s={pop(t, fps, a)}><K c={GOLD} s={30}>clarity</K></At>
      <At x={460} y={440} o={ramp(t, a + 1.2, 0.5) * (1 - 0.7 * ramp(t, sA + 0.6, 0.6))}><Person color={DIM} size={180} dashed /></At>
      <Crossed x={460} y={440} at={sA} size={70} />
      <At x={460} y={620} o={ramp(t, a + 1.6, 0.5)}><SK c={DIM} s={26} strikeAt={sA}>a witness behind the knowing</SK></At>
      {/* vividness -> a world out there */}
      <At x={960} y={240} s={pop(t, fps, b)}><K c={RED} s={30}>vividness</K></At>
      <At x={960} y={440} o={ramp(t, b + 0.8, 0.5)}><Apple size={120} /></At>
      <At x={960} y={440} o={ramp(t, b + 1.4, 0.5) * (1 - ramp(t, sB + 0.6, 0.6))}>
        <div style={{ width: 230, height: 200, border: `5px solid ${DIM}`, borderRadius: 4, background: `${DIM}12` }} />
      </At>
      <At x={960} y={620} o={ramp(t, b + 1.8, 0.5)}><SK c={DIM} s={26} strikeAt={sB}>a world out there, solid and given</SK></At>
      {/* unfindability -> only in the mind */}
      <At x={1460} y={240} s={pop(t, fps, p)}><K c={VIOLET} s={30}>unfindability</K></At>
      <At x={1460} y={450} o={ramp(t, p + 1.2, 0.5) * (1 - ramp(t, sC + 0.6, 0.6))}><Head /></At>
      <At x={1460} y={450} o={ramp(t, p + 0.8, 0.5)}><Apple size={90} /></At>
      <At x={1460} y={620} o={ramp(t, p + 1.6, 0.5)}><SK c={DIM} s={26} strikeAt={sC}>all of it only in the mind</SK></At>
      <At x={960} y={760} o={ramp(t, end, 0.5)}><W c={GOLD} s={36} serif>the taste was true; the reading was false</W></At>
    </AbsoluteFill>
  );
};

const PositionsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const g = c("the great positions people argue about");
  const strike = c("The author passed through each of them") + 1.2;
  const L: [string, string, string][] = [
    ["consciousness as the ground of everything", "consciousness: the ground of everything", GOLD],
    ["a physical world simply there", "a physical world, simply there", RED],
    ["a world that is only mind", "the world: only mind", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <Title at={g}>the three great positions</Title>
      {L.map(([cue, w, col], i) => (
        <At key={i} x={960} y={280 + i * 120} o={ramp(t, c(cue), 0.4)}><SK c={col} s={32} strikeAt={strike + i * 0.5}>{w}</SK></At>
      ))}
      <At x={960} y={680} o={ramp(t, c("The author passed through each of them"), 0.5)}><W c={CHALK} s={32}>the author passed through each</W></At>
      <At x={960} y={760} o={ramp(t, strike + 1.6, 0.5)}><W c={TEAL} s={32} serif>the way out: the logic of dependency</W></At>
    </AbsoluteFill>
  );
};

const InsideScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sub = c("If a subject depends on its object");
  const ins = c("An inside that depends on an outside is not truly inside");
  const dotted = ramp(t, ins + 1.5, 1.0);
  return (
    <AbsoluteFill>
      <Items items={[
        ["If a subject depends on its object", 560, 300, <K c={VIOLET} s={32}>subject</K>, { pop: true }],
        ["If a subject depends on its object", 1360, 300, <K c={ICE} s={32}>object</K>, { pop: true, d: 0.6 }],
        ["If a subject depends on its object", 960, 200, <W c={CHALK} s={32}>what makes it truly a subject?</W>, { d: 1.6 }],
      ]} />
      <Flow x1={680} y1={290} x2={1240} y2={290} color={VIOLET} p={ramp(t, sub + 1.0, 0.6)} />
      <Flow x1={1240} y1={315} x2={680} y2={315} color={ICE} p={ramp(t, sub + 1.3, 0.6)} />
      <At x={960} y={540} o={ramp(t, ins, 0.5)}>
        <div style={{ width: 320, height: 240, borderRadius: "50%", border: `4px ${dotted > 0.5 ? "dotted" : "solid"} ${CHALK}`, opacity: 1 - 0.6 * dotted }} />
      </At>
      <At x={960} y={540} o={ramp(t, ins + 0.4, 0.5)}><W c={VIOLET} s={30}>inside</W></At>
      <At x={1260} y={540} o={ramp(t, ins + 0.8, 0.5)}><W c={ICE} s={30}>outside</W></At>
      <At x={960} y={760} o={ramp(t, ins + 1.6, 0.5)}><W c={GOLD} s={34} serif>not truly inside</W></At>
    </AbsoluteFill>
  );
};

const MastersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, string, string][] = [
    ["wrote that calm abiding alone", "Atiśa", "calm abiding alone does not end the obstructions", ICE],
    ["wrote that without the wisdom that realises", "Tsongkhapa", "without wisdom, even compassion cannot cut the root", TEAL],
    ["advised that when thoughts arise", "Longchenpa", "when thoughts arise, the view is crucial", VIOLET],
    ["a Zen master, scolded those", "Dōgen", "the old Zen stories are not beyond logic", GOLD],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The great masters said the same")}>the great masters said the same</Title>
      {rows.map(([cue, name, w, col], i) => {
        const a = c(cue) - (i === 0 ? 0.6 : 0.3);
        return (
          <React.Fragment key={i}>
            <At x={480} y={250 + i * 115} o={ramp(t, a, 0.4)}><K c={col} s={30}>{name}</K></At>
            <At x={1180} y={250 + i * 115} o={ramp(t, a + 0.6, 0.5)}><div style={{ width: 920, textAlign: "left" }}><W c={CHALK} s={30}>{w}</W></div></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["experience without the view cannot do the work", 960, 780, <W c={GOLD} s={36} serif>experience without the view cannot do the work</W>],
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
  const split = c("it splits again");
  const A: [string, number, number, string][] = [["it arises", ar - 0.3, ce - 0.4, ICE], ["it ceases", ce - 0.3, bo - 0.4, ROSE], ["both", bo - 0.6, ne - 0.4, VIOLET], ["neither", ne - 0.3, fail, GOLD]];
  const seg = ramp(t, split, 0.8);
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
        ["it is never there to have arisen", 420, 500, <W c={DIM} s={24}>never there to have arisen</W>, { until: "It ceases? Then something passes away", ud: 1.5 }],
        ["what passes away, if it never stood", 780, 500, <W c={DIM} s={24}>what passes, if it never stood?</W>],
        ["Coming into being and passing away are opposites", 1140, 500, <W c={DIM} s={24}>opposites, in one thing?</W>, { d: 1.0 }],
        ["Yet a sound is being heard right now", 1500, 500, <Bell size={80} />, { pop: true }],
        ["Yet a sound is being heard right now", 1500, 580, <W c={DIM} s={24}>yet a sound is heard</W>, { d: 0.4 }],
        ["Every answer fails", 960, 760, <W c={WARM} s={40} serif>every answer fails</W>, { d: 0.6 }],
      ]} />
      {/* an instant splits into beginning, middle and end */}
      <At x={960} y={640} o={between(t, split - 0.2, ce - 0.4)}>
        <div style={{ display: "flex", gap: 20 * seg }}>
          {(["beginning", "middle", "end"] as const).map((w) => (
            <div key={w} style={{ width: 200, height: 44, borderRadius: 8, background: `${ICE}33`, border: `3px solid ${ICE}`, fontFamily: SANS,
              fontSize: 22, color: CHALK, display: "flex", alignItems: "center", justifyContent: "center" }}>{seg > 0.5 ? w : ""}</div>
          ))}
        </div>
      </At>
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
  const now = c("A timeless Now that the moments pass through");
  const aw = c("An awareness in which they come and go");
  const fl = c("A pure flow");
  const mv = c("only moves it somewhere else");
  const dots = (x0: number, y0: number, at: number, path: (q: number) => [number, number]) =>
    [0, 1, 2].map((k) => {
      const q = (((t - at) * 0.25 + k / 3) % 1 + 1) % 1;
      const [x, y] = path(q);
      return <At key={k} x={x0 + x} y={y0 + y} o={ramp(t, at + 0.4, 0.4)}><K c={CHALK} s={18}>moment</K></At>;
    });
  return (
    <AbsoluteFill>
      <Title at={c("the logic of substance looks for a way out")} color={WARM}>looking for a way out</Title>
      {/* a timeless Now: a band the moments pass through */}
      <At x={420} y={420} o={ramp(t, now, 0.5)}><div style={{ width: 120, height: 300, borderRadius: 12, border: `3px dashed ${DIM}`, background: `${DIM}14` }} /></At>
      {dots(420, 420, now, (q) => [-200 + 400 * q, -80 + 80 * ((q * 3) % 1 > 0.5 ? 1 : 0)])}
      <At x={420} y={620} o={ramp(t, now + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={aw - 0.6}>a timeless Now</SK></At>
      <Crossed x={420} y={420} at={aw - 0.8} size={60} />
      {/* an awareness: a container the moments come and go in */}
      <At x={960} y={420} o={ramp(t, aw, 0.5)}><div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px dashed ${DIM}`, background: `${DIM}10` }} /></At>
      {dots(960, 420, aw, (q) => [100 * Math.cos(q * 6.28), 100 * Math.sin(q * 6.28)])}
      <At x={960} y={620} o={ramp(t, aw + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={fl - 0.4}>an awareness they come and go in</SK></At>
      <Crossed x={960} y={420} at={fl - 0.6} size={70} />
      {/* a pure flow */}
      <Svg><DrawPath d="M1320 330 C 1400 400, 1460 330, 1520 420 S 1580 470, 1620 520" p={ramp(t, fl, 0.8)} color={DIM} width={8} len={500} glow={false} /></Svg>
      <At x={1480} y={620} o={ramp(t, fl + 0.4, 0.5)}><SK c={DIM} s={26} strikeAt={mv - 0.2}>a pure flow</SK></At>
      <Crossed x={1470} y={420} at={mv - 0.4} size={60} />
      <Items items={[
        ["only moves it somewhere else", 960, 760, <W c={WARM} s={32} serif>each keeps the moment as a thing, and only moves it</W>, { d: 0.4 }],
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
  const upAt = c("They are up for someone climbing");
  const downAt = c("and down for someone coming down");
  const up = ramp(t, upAt + 0.3, 3.2);
  const down = ramp(t, downAt + 0.3, 3.2);
  const p = Math.max(0, up - down); // 0 = bottom, 1 = top
  const goingDown = t > downAt + 0.3;
  const moving = (t > upAt + 0.3 && up < 1) || (goingDown && down < 1);
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
      <At x={x} y={footY - 150} o={ramp(t, upAt + 0.3, 0.3) * (goingDown ? 0 : 1)}><K c={GREEN} s={30}>up</K></At>
      <At x={x} y={footY - 150} o={goingDown ? 1 : 0}><K c={ICE} s={30}>down</K></At>
      <Items items={[
        ["Are the stairs up, or down", 1600, 360, <W c={CHALK} s={34}>up, or down?</W>],
        ["In themselves, neither", 1600, 430, <W c={GOLD} s={30} serif>in themselves: neither</W>, { until: "and down for someone coming down" }],
        ["and down for someone coming down", 1600, 430, <W c={DIM} s={26}>depends where you stand, which way you face</W>, { d: 3.6 }],
        ["And the stairs are really climbed, and really descended", 960, 770, <W c={CHALK} s={30}>really climbed, really descended</W>, { until: "It is called arising from one side, and ceasing from the other" }],
        ["It is called arising from one side, and ceasing from the other", 700, 770, <K c={GREEN} s={28}>arising, from one side</K>, { pop: true }],
        ["It is called arising from one side, and ceasing from the other", 1220, 770, <K c={ICE} s={28}>ceasing, from the other</K>, { pop: true, d: 1.2 }],
        ["It is not nothing, and it is not only in the mind", 1600, 520, <W c={TEAL} s={26}>not nothing; not only in the mind</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FallsAwayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const plain = c("It is a plain description");
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
  const { t } = useT();
  const c = useCue();
  const head = c("The eight steps of The Logic each come back");
  const S: [string, string][] = [
    ["The first sets the two logics side by side", "two logics, side by side"],
    ["The second asks what exactly is denied", "what exactly is denied"],
    ["The third goes looking for the moment", "looking for the moment"],
    ["The fourth gives the koan two answers", "two answers, no conflict"],
    ["The fifth shows why all four answers fall together", "why all four answers fall"],
    ["The sixth names the two traps", "the two traps"],
    ["The seventh answers the worry", "the worry answered"],
    ["And the eighth gathers it all into four questions", "four questions"],
  ];
  return (
    <AbsoluteFill>
      <Title at={head}>the eight steps</Title>
      {S.map(([cue, w], i) => {
        const a = c(cue);
        const next = i + 1 < S.length ? c(S[i + 1][0]) : 1e9;
        const lit = ramp(t, a, 0.4);
        const cur = between(t, a, next, 0.4);
        const col = cur > 0.5 ? GOLD : CHALK;
        return (
          <At key={i} x={560} y={210 + i * 76} o={ramp(t, head + 0.4 + i * 0.12, 0.4) * (0.35 + 0.65 * lit)}>
            <div style={{ width: 640, display: "flex", alignItems: "center", gap: 22, textAlign: "left" }}>
              <Num n={String(i + 1)} color={cur > 0.5 ? GOLD : DIM} lit={cur} />
              <Glow color={col} size={30}>{w}</Glow>
            </div>
          </At>
        );
      })}
      <Items items={[
        ["The second asks what exactly is denied", 1400, 250, <K c={WARM} s={28}>only the “it”</K>, { pop: true, d: 1.2, until: "The third goes looking for the moment" }],
        ["Deny too little, and a timeless Now takes its place", 1400, 350, <W c={DIM} s={26}>too little: a timeless Now</W>, { until: "The third goes looking for the moment" }],
        ["Deny too much", 1400, 420, <W c={DIM} s={26}>too much: nothing happens</W>, { until: "The third goes looking for the moment" }],
        ["The third goes looking for the moment", 1400, 300, <W c={CHALK} s={26}>arising? ceasing? owner? container?</W>, { d: 1.2, until: "The fourth gives the koan two answers" }],
        ["Yet moments are named, counted and timed", 1400, 380, <Clock size={120} />, { pop: true, until: "The fourth gives the koan two answers" }],
        ["Conventionally, the bell starts and stops", 1400, 300, <Bell size={110} />, { pop: true, until: "The fifth shows why all four answers fall together" }],
        ["Conventionally, the bell starts and stops", 1400, 410, <W c={GOLD} s={26}>conventionally: starts and stops</W>, { d: 0.6, until: "The fifth shows why all four answers fall together" }],
        ["One moment, met two ways", 1400, 480, <W c={TEAL} s={28} serif>one moment, met two ways</W>, { until: "The fifth shows why all four answers fall together" }],
        ["The fifth shows why all four answers fall together", 1400, 340, <W c={CHALK} s={28}>each one assumed an “it”</W>, { d: 1.6, until: "The sixth names the two traps" }],
        ["the eternalist trap", 1400, 300, <K c={WARM} s={26}>“it arises”: eternalism</K>, { pop: true, until: "The seventh answers the worry" }],
        ["the nihilist trap", 1400, 400, <K c={WARM} s={26}>“it ceases”: nihilism</K>, { pop: true, until: "The seventh answers the worry" }],
        ["the nihilist trap", 1400, 490, <W c={DIM} s={26}>both keep the “it”</W>, { d: 1.0, until: "The seventh answers the worry" }],
        ["The seventh answers the worry", 1400, 300, <W c={DIM} s={26}>if no moment is found, how does anything work?</W>, { d: 0.5, until: "And the eighth gathers it all into four questions" }],
        ["It is because nothing stands on its own", 1400, 400, <W c={GREEN} s={28}>nothing stands alone, so things can work</W>, { until: "And the eighth gathers it all into four questions" }],
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

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const asm = c("each question already assumes a thing with its own nature");
  const swap = ramp(t, c("any answer only swaps one thing for another") + 0.4, 1.2);
  const qq = c("a way to question the question");
  return (
    <AbsoluteFill>
      <Title at={c("There is one more turn")}>one more turn</Title>
      <Items items={[
        ["does the self exist", 600, 280, <K c={ICE} s={32}>does the self exist?</K>, { pop: true }],
        ["what happens when I die", 1320, 280, <K c={ROSE} s={32}>what happens when I die?</K>, { pop: true }],
      ]} />
      {[600, 1320].map((x, i) => (
        <At key={x} x={x + (i ? -720 : 720) * swap} y={460} s={pop(t, fps, asm + 0.4 + i * 0.4)}>
          <SK c={WARM} s={26} strikeAt={qq + 0.8 + i * 0.3}>{i ? "a thing that goes on" : "a self with its own nature"}</SK>
        </At>
      ))}
      <At x={960} y={560} o={between(t, c("any answer only swaps one thing for another") + 0.6, qq)}><W c={DIM} s={28}>any answer swaps one thing for another</W></At>
      <At x={960} y={700} s={pop(t, fps, qq, 14)} o={ramp(t, qq, 0.5)}><W c={GOLD} s={44} serif>question the question</W></At>
    </AbsoluteFill>
  );
};

const NothingLostScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sub = c("No substrate underneath");
  const drop = ramp(t, c("There is nothing more real underneath for it to cover"), 1.4);
  return (
    <AbsoluteFill>
      <Title at={c("Nothing is lost when the it is not found")}>nothing is lost</Title>
      <Items items={[
        ["The bell is still heard", 520, 360, <Bell size={150} />, { pop: true }],
        ["The bell is still heard", 520, 500, <W c={GOLD} s={28}>still heard</W>, { d: 0.4 }],
        ["The clock still keeps time", 960, 360, <Clock />, { pop: true }],
        ["The clock still keeps time", 960, 500, <W c={ICE} s={28}>still keeps time</W>, { d: 0.4 }],
        ["Actions still bear fruit", 1400, 350, <Fruit />, { pop: true }],
        ["Actions still bear fruit", 1400, 500, <W c={GREEN} s={28}>still bears fruit</W>, { d: 0.4 }],
        ["Mutual dependence has no first and no higher", 760, 600, <K c={TEAL} s={28}>no first</K>, { pop: true }],
        ["Mutual dependence has no first and no higher", 1160, 600, <K c={TEAL} s={28}>no higher</K>, { pop: true, d: 0.6 }],
      ]} />
      <At x={960} y={720 + 160 * drop} o={ramp(t, sub, 0.5) * (1 - drop)}><Floor w={700} color={DIM} dashed /></At>
      <At x={960} y={676} o={ramp(t, sub + 0.3, 0.5) * (1 - drop)}><W c={DIM} s={26}>a substrate underneath?</W></At>
      <div style={{ position: "absolute", inset: 0, opacity: 1 - drop }}><Crossed x={960} y={720} at={sub + 1.0} size={50} /></div>
      <At x={960} y={760} o={ramp(t, c("There is nothing more real underneath for it to cover") + 1.0, 0.6)}><W c={GOLD} s={34} serif>nothing more real underneath</W></At>
    </AbsoluteFill>
  );
};

const BellAgainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const b = c("Listen to the bell once more");
  const swing = 8 * Math.sin((t - b) * 5) * Math.exp(-Math.max(0, t - b) * 0.6) * (t > b ? 1 : 0);
  return (
    <AbsoluteFill>
      <At x={960} y={380} s={pop(t, fps, b - 0.3)}><Bell swing={swing} /></At>
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
      <At x={960} y={420} s={pop(t, fps, end - 0.6)}><Bell size={150} /></At>
      <Sound x={960} y={440} at={end} dur={4} r1={520} />
      <At x={960} y={640} s={pop(t, fps, end + 0.4, 16)} o={ramp(t, end + 0.4, 0.8)}><W c={GOLD} s={56} serif>simply this moment</W></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "Strike a bell and listen"], ["web", "two different ways of thinking"], ["doubt", "The logic of substance is not a belief we hold"],
    ["vivid", "Every appearance is vivid, and it cannot be found"], ["sea", "Appearance arises whenever its conditions come together"],
    ["doubt", "We habitually and intuitively think inherently"], ["search", "it reshapes them before we notice"],
    ["doubt", "The author describes three ways this happens"], ["whole", "The great masters said the same"],
    ["search", "Now return to the koan"], ["doubt", "the logic of substance looks for a way out"],
    ["web", "The logic of dependency starts one step earlier"], ["vivid", "Think of a staircase"],
    ["sea", "The eight steps of The Logic each come back"], ["search", "There is one more turn"],
    ["whole", "Nothing is lost when the it is not found"], ["vivid", "Listen to the bell once more"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["Strike a bell and listen", <BellScene />],
    ["Here is a koan to hold in mind", <KoanScene />],
    ["two different ways of thinking", <TwoWaysScene />],
    ["Start with the claim the author puts first", <ClaimScene />],
    ["The two logics can be learned as ideas", <LogicsScene />],
    ["The logic of substance is not a belief we hold", <SubstanceScene />],
    ["So the author names three insights", <ThreeScene />],
    ["Every appearance is vivid, and it cannot be found", <AppleScene />],
    ["Appearance arises whenever its conditions come together", <ConditionsScene />],
    ["We habitually and intuitively think inherently", <SentenceScene />],
    ["The first two are one fact, seen from two sides", <OneFactScene />],
    ["it reshapes them before we notice", <HabitScene />],
    ["These practices do something real", <TasteScene />],
    ["The author describes three ways this happens", <InventionsScene />],
    ["the great positions people argue about", <PositionsScene />],
    ["If a subject depends on its object", <InsideScene />],
    ["The great masters said the same", <MastersScene />],
    ["Now return to the koan", <KoanAgainScene />],
    ["The logic of substance starts with a thing", <AnswersScene />],
    ["put the whole trap in one verse", <VerseScene />],
    ["the logic of substance looks for a way out", <WaysOutScene />],
    ["The logic of dependency starts one step earlier", <DesignateScene />],
    ["Think of a staircase", <StairsScene />],
    ["It is a plain description", <FallsAwayScene />],
    ["The eight steps of The Logic each come back", <StepsScene />],
    ["What would a substance view say", <FourQScene />],
    ["There is one more turn", <QuestionScene />],
    ["Nothing is lost when the it is not found", <NothingLostScene />],
    ["Listen to the bell once more", <BellAgainScene />],
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
