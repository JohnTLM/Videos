// After Anatta, the koan: Does It Arise or Cease? (The Logic, the koan page). Explainer drawings timed to the narration.
// Arc: the koan hands us an "it" -> the page: two logics, then five -> the bell, already passing -> the three marks, the
// abiding removed -> substance: a thing first, then events -> four answers, each crossed -> five ways out, each keeping the
// "it" -> dependency: moment, arising and ceasing designated together -> the question falls away -> nothing lost ->
// the five core logics one by one -> five hiding places, no "it" -> two answers, the homage -> one moment, two ways ->
// firewood and ash, the drawing on water -> three insights -> keep or lose -> try it.
// Stance: emptiness is drawn only as the not-finding, never as a ground, container or backdrop. Each invented "it",
// each way out and each failed answer is shown only to be struck. The bell, the fire and the sound stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the koan
  "This moment ceases as it arises", "Does it arise, or does it cease",
  "A koan is not a riddle with a clever answer", "It is a question built to catch a habit in the act",
  "the question has already given us something", "A moment that must either arise, or cease",
  "shows which logic we are using",
  // the page
  "This is the koan page of The Logic", "It works through the koan twice", "First with the logic of substance",
  "Then with the logic of dependency", "And then it runs the koan through",
  // the bell
  "Start with a sound", "At no point is there a sound that stays", "The sound is already passing as it sounds",
  "The arising is already the ceasing", "It is what experience shows",
  // the three marks
  "The ordinary picture is different", "Things arise, stay for a while, and then cease",
  "Every conditioned thing has three marks", "The picture needs the middle one",
  "Only something that abides, even for an instant", "The koan quietly removes the abiding",
  "And then asks its question about the", "anyway",
  // substance
  "The logic of substance starts with things", "So it starts with this moment as a thing",
  "Arising and ceasing are events that befall it", "subject then verb", "The moment arises", "The moment ceases",
  "As if there were a moment apart from the arising and the ceasing",
  // four answers
  "Given a thing, the question must be answered", "There are four possible answers", "Each one fails",
  "It arises", "So it is never there to have arisen",
  "It ceases", "But what passes away, if it never stood",
  "Both", "But these are opposites, like light and dark",
  "Neither", "Yet a sound is being heard, right now",
  // ways out
  "For the logic of substance, this is a paradox", "So it looks for a way out", "A timeless Now",
  "An awareness behind the moments", "A pure flow", "Tiny", "Or the last resort",
  "All five are the same logic, one step further on", "Each keeps the", "and moves it somewhere else",
  "The Now becomes the moment that never ends", "The awareness becomes the Witness again",
  "The flow becomes the thing that is really there",
  // dependency
  "The logic of dependency starts one step earlier", "It asks how this moment is picked out at all",
  "A moment is designated in dependence on its arising and its ceasing", "Arising is designated in dependence on ceasing",
  "And ceasing, in dependence on arising", "None comes first", "None is found apart from the others",
  // falls away
  "is not a paradox", "It is a plain description", "There is no it standing between the arising and the ceasing",
  "The question assumes that", "the question is not answered", "It falls away", "The koan has done its work",
  // nothing lost
  "And nothing is lost", "Sounds are still heard", "Clocks still keep time", "The firewood still burns",
  "Just as the flashing is the lightning", "There is change, vivid and exact", "And no changer behind it",
  // five core logics
  "has five core ways of taking the logic of substance apart", "Each one can be run on this koan",
  "the substance reading needs a moment that is there on its own, and fails",
  "the dependency reading lets the same moment appear",
  // 1 four corners
  "The first is the four corners", "If this moment really arises, from what", "From itself", "From another, the moment before",
  "From both", "From no cause", "Seen with dependency, the moment is not a thing that needs a source",
  "It is picked out with its conditions", "Nothing passes from one moment to the next", "And nothing is missing",
  // 2 same or different
  "The second is same or different", "Is the arising the same as the ceasing", "Is it different",
  "The abiding the koan removed", "asks this of fire and fuel", "If the fire were the fuel",
  "If the fire were other than the fuel", "arising and ceasing are not one, and not two",
  "They are designated together, like fire and fuel", "says exactly this",
  // 3 three times
  "The third is the three times", "Look for the arising", "What has already arisen is not arising",
  "What has not yet arisen is not arising", "no now arising is found", "with a road being walked",
  "finds no now ceasing", "has no room to happen in", "arisen and not yet arisen are designated in relation to each other",
  "No present stands between past and future", "without a now that contains it",
  // 4 infinite regress
  "The fourth is infinite regress", "it is conditioned", "Then it needs its own arising, abiding and ceasing",
  "And those need theirs, without end", "does the arising arise", "and so on, for ever",
  "arising is not a thing that needs to arise", "It is a designation, made in dependence on what it marks",
  "There is no regress, and no first arising", "what comes to be in dependence is at peace", "And so is arising itself",
  // 5 mutual dependence
  "The fifth is mutual dependence", "The four logics above all fail for one reason",
  "that is established on its own before it relates to anything", "Arising and ceasing cannot be established together",
  "and cannot be established apart", "So how could they be established at all",
  "This fifth logic is not one more refutation", "It is what the other four leave behind",
  "Dependent arising is what we call emptiness", "it can appear and pass at all",
  "for whom emptiness is possible, everything is possible",
  // hiding places
  "Each logic searches a different hiding place", "Its source", "Its identity", "Its present", "Its marks",
  "And its standing on its own", "Each lands in the same place", "No it is found", "And the moment is still here",
  // two answers
  "So, does it arise, or cease", "Two answers can be given, and they are not in conflict",
  "Conventionally, it arises and ceases", "The sound starts and ends", "and when the ringing stopped",
  "Nothing in the analysis touches this",
  "Looked for, nothing that arises and nothing that ceases is found", "This is how", "opens his whole work",
  "without ceasing, without arising", "without annihilation, without permanence", "not one thing and not many",
  "without coming and without going",
  // one moment
  "Without arising is not a denial that things appear", "It is said of dependent arising itself",
  "things can appear, change and pass at all", "Not two worlds", "One moment, seen two ways",
  // complete where it is
  "So the koan is not answered by choosing a corner", "It is answered when the it is seen never to have been there",
  "Then each moment is simply complete where it is", "Nothing carried over", "Nothing left behind",
  "says it of firewood and ash", "with a before and an after, yet cut off from before and after",
  "tradition calls it self-release", "releases itself as it arises", "Like a drawing on water, which needs no eraser",
  // three insights
  "The koan holds three insights at once", "The moment is vivid, and unfindable",
  "It appears whenever conditions come together", "bell, air, ear and attention",
  "It comes from no hidden place, and goes into none", "is the habit at work",
  "We habitually think inherently", "the grammar of the question carries the habit in",
  // why it matters
  "Why does this matter", "every experience is something to keep, or to lose", "A clear moment in meditation must be held on to",
  "A painful one must be got rid of", "The end of a life is the end of something that was really there",
  "Craving and fear follow from the",
  "there is nothing to keep and nothing to lose", "Each moment is wholly itself, and wholly gone",
  "and nothing went anywhere", "This is not indifference", "The moment is met fully",
  // try it
  "So, wherever you are, listen to a single sound until it ends", "When did it arise", "When did it cease",
  "Look for a sound between the two, apart from the sounding",
  "Ask what arises, and the koan is a paradox", "See that no it is found",
  "and the koan is simply this moment",
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

const FIRE = "#FF9A4D";

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

/** A chip that is struck through at `strikeAt` (only for the invented "it" or a failed answer, never for a conventional thing). */
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

/** A small round badge with a number, for the five core logics. */
const Num: React.FC<{ n: number; c?: string; size?: number }> = ({ n, c = GOLD, size = 64 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", border: `3px solid ${c}`, display: "grid", placeItems: "center",
    background: `${c}22`, boxShadow: `0 0 18px ${c}66` }}>
    <Glow color={c} size={size * 0.55} serif>{n}</Glow>
  </div>
);

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

/** A flame on a log; f flickers it. */
const Fire: React.FC<{ size?: number; f?: number; log?: boolean }> = ({ size = 180, f = 0, log = true }) => {
  const k = 1 + Math.sin(f * 9) * 0.06;
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 18px ${FIRE})` }}>
      <g style={{ transform: `scaleY(${k})`, transformOrigin: "100px 160px" }}>
        <path d="M100 20 C70 70 50 90 60 130 C66 156 86 166 100 166 C114 166 134 156 140 130 C150 90 130 70 100 20 Z" fill={`${FIRE}aa`} stroke={FIRE} strokeWidth={4} />
        <path d="M100 80 C88 104 82 116 86 136 C90 152 110 152 114 136 C118 116 112 104 100 80 Z" fill={`${GOLD}cc`} />
      </g>
      {log && <rect x={30} y={164} width={140} height={26} rx={12} fill="#7a4a2a" stroke="#c08050" strokeWidth={4} />}
    </svg>
  );
};

/** A heap of ash. */
const Ash: React.FC<{ size?: number }> = ({ size = 160 }) => (
  <svg width={size} height={size * 0.5} viewBox="0 0 200 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${DIM})` }}>
    <path d="M10 90 Q50 30 100 26 Q150 30 190 90 Z" fill={`${DIM}55`} stroke={DIM} strokeWidth={4} />
    <circle cx={70} cy={70} r={4} fill={WARM} opacity={0.6} /><circle cx={120} cy={60} r={3} fill={WARM} opacity={0.5} />
  </svg>
);

/** A clock face; its hand turns with t. */
const Clock: React.FC<{ size?: number; turn?: number }> = ({ size = 140, turn = 0 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${ICE}88)` }}>
    <circle cx={50} cy={50} r={44} fill={`${ICE}18`} stroke={ICE} strokeWidth={4} />
    {[0, 1, 2, 3].map((i) => <line key={i} x1={50} y1={10} x2={50} y2={16} stroke={ICE} strokeWidth={3} transform={`rotate(${i * 90} 50 50)`} />)}
    <line x1={50} y1={50} x2={50} y2={20} stroke={GOLD} strokeWidth={4} strokeLinecap="round" transform={`rotate(${turn} 50 50)`} />
    <line x1={50} y1={50} x2={68} y2={50} stroke={ICE} strokeWidth={4} strokeLinecap="round" />
  </svg>
);

const Bolt: React.FC<{ color?: string; size?: number; flash?: number }> = ({ color = ICE, size = 160, flash = 1 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 60 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + 20 * flash}px ${color})` }}>
    <path d="M36 2 L8 56 L28 56 L18 98 L54 38 L32 38 L44 2 Z" fill={`${color}${flash > 0.5 ? "cc" : "44"}`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
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

/** An open hand, palm up; closed = 0..1 curls it toward a grasp. */
const Palm: React.FC<{ color?: string; closed?: number; size?: number }> = ({ color = TEAL, closed = 0, size = 170 }) => (
  <svg width={size} height={size * 0.7} viewBox="0 0 200 140" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}88)` }}>
    <path d={`M20 70 Q60 ${110 - closed * 30} 100 ${112 - closed * 20} Q140 ${110 - closed * 30} 180 70`} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" />
    {[40, 75, 110, 145].map((x, i) => (
      <path key={i} d={`M${x} ${70 + i % 2 * 4} Q${x + 6} ${40 + closed * 40} ${x + 14 + closed * 10} ${30 + closed * 50}`} fill="none" stroke={color} strokeWidth={7} strokeLinecap="round" />
    ))}
  </svg>
);

// ---------------------------------------------------------------- scenes
const KoanScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const it = c("the question has already given us something");
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={ramp(t, c("This moment ceases as it arises") - 0.3, 0.3)}>
        <Reveal text="This moment ceases as it arises." at={c("This moment ceases as it arises")} size={66} speed={0.035} />
      </At>
      <At x={960} y={430} o={ramp(t, c("Does it arise, or does it cease") - 0.3, 0.3)}>
        <Reveal text="Does it arise, or does it cease?" at={c("Does it arise, or does it cease")} size={66} color={ICE} top="#EAF8FF" speed={0.035} />
      </At>
      <Items items={[
        ["A koan is not a riddle with a clever answer", 960, 560, <SK c={DIM} s={28} strikeAt={c("It is a question built to catch a habit in the act")}>a riddle with a clever answer</SK>, { until: "the question has already given us something" }],
        ["It is a question built to catch a habit in the act", 960, 640, <W c={TEAL} s={30}>a question that catches a habit in the act</W>, { until: "the question has already given us something" }],
        ["the question has already given us something", 960, 640, <K c={WARM} s={38}>“it”</K>, { pop: true, d: 0.8 }],
        ["A moment that must either arise, or cease", 680, 640, <W c={GREEN} s={32}>arise?</W>],
        ["A moment that must either arise, or cease", 1240, 640, <W c={ROSE} s={32}>cease?</W>, { d: 0.6 }],
        ["shows which logic we are using", 960, 760, <W c={GOLD} s={28}>which logic are we using?</W>],
      ]} />
      <Flow x1={900} y1={640} x2={760} y2={640} color={DIM} p={ramp(t, it + 2.4, 0.5)} pulses={false} />
      <Flow x1={1020} y1={640} x2={1160} y2={640} color={DIM} p={ramp(t, it + 2.8, 0.5)} pulses={false} />
    </AbsoluteFill>
  );
};

const PageScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title at={c("This is the koan page of The Logic")} color={GOLD}>The Logic · the koan</Title>
      <Items items={[
        ["It works through the koan twice", 960, 300, <W c={CHALK} s={34} serif>twice through the koan</W>],
        ["First with the logic of substance", 620, 440, <K c={WARM} s={32}>1 · the logic of substance</K>, { pop: true }],
        ["Then with the logic of dependency", 1300, 440, <K c={TEAL} s={32}>2 · the logic of dependency</K>, { pop: true }],
        ["And then it runs the koan through", 960, 600, <K c={GOLD} s={32}>then: five core logics</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("Start with a sound");
  const sw = t > s ? Math.sin((t - s) * 5) * 8 * Math.exp(-(t - s) / 6) : 0;
  return (
    <AbsoluteFill>
      <Sound x={960} y={330} at={s + 0.4} dur={14} />
      <At x={960} y={330} o={ramp(t, s, 0.5)}><Bell size={230} swing={sw} /></At>
      <Items items={[
        ["At no point is there a sound that stays", 960, 560, <SK c={DIM} s={28} strikeAt={c("The sound is already passing as it sounds")}>a sound that stays</SK>],
        ["The sound is already passing as it sounds", 960, 640, <W c={ICE} s={32}>already passing as it sounds</W>],
        ["The arising is already the ceasing", 960, 740, <W c={GOLD} s={40} serif>the arising is already the ceasing</W>, { pop: true }],
        ["It is what experience shows", 960, 820, <W c={DIM} s={24}>not a puzzle: what experience shows</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MarksScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rm = c("The koan quietly removes the abiding");
  return (
    <AbsoluteFill>
      <Title at={c("The ordinary picture is different")} color={DIM}>the ordinary picture</Title>
      <Items items={[
        ["Things arise, stay for a while, and then cease", 960, 260, <W c={CHALK} s={30}>arise · stay a while · cease</W>],
        ["Every conditioned thing has three marks", 520, 430, <K c={GREEN} s={34}>arising</K>, { pop: true }],
        ["Every conditioned thing has three marks", 1400, 430, <K c={ROSE} s={34}>ceasing</K>, { pop: true, d: 1.0 }],
        ["Only something that abides, even for an instant", 960, 600, <W c={WARM} s={28}>the “it” that first arises and later ceases</W>],
        ["And then asks its question about the", 960, 720, <W c={ICE} s={30}>…and asks about the “it” anyway</W>],
      ]} />
      <At x={960} y={430} o={ramp(t, c("Every conditioned thing has three marks") + 0.5, 0.5)}
        s={1 + 0.15 * ramp(t, c("The picture needs the middle one"), 0.4) - 0.15 * ramp(t, rm, 0.4)}>
        <SK c={GOLD} s={34} strikeAt={rm + 0.3}>abiding</SK>
      </At>
      <Flow x1={640} y1={430} x2={830} y2={430} color={DIM} p={ramp(t, c("Every conditioned thing has three marks") + 0.7, 0.5)} pulses={false} />
      <Flow x1={1090} y1={430} x2={1280} y2={430} color={DIM} p={ramp(t, c("Every conditioned thing has three marks") + 1.2, 0.5)} pulses={false} />
    </AbsoluteFill>
  );
};

const SubstanceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const th = c("So it starts with this moment as a thing");
  return (
    <AbsoluteFill>
      <Title at={c("The logic of substance starts with things")} color={WARM}>the logic of substance</Title>
      <At x={960} y={360} o={ramp(t, th, 0.4)} s={pop(t, 30, th)}><K c={WARM} s={40}>this moment</K></At>
      <Items items={[
        ["Arising and ceasing are events that befall it", 560, 520, <K c={GREEN} s={30}>arises</K>],
        ["Arising and ceasing are events that befall it", 1360, 520, <K c={ROSE} s={30}>ceases</K>, { d: 0.5 }],
        ["subject then verb", 960, 220, <W c={DIM} s={26}>subject → verb, taken for the shape of the world</W>],
        ["The moment arises", 960, 640, <W c={CHALK} s={30} serif>“The moment arises.”</W>, { until: "The moment ceases" }],
        ["The moment ceases", 960, 640, <W c={CHALK} s={30} serif>“The moment ceases.”</W>],
        ["As if there were a moment apart from the arising and the ceasing", 960, 760, <W c={WARM} s={28}>as if a moment stood apart from both</W>],
      ]} />
      <Flow x1={860} y1={390} x2={640} y2={500} color={GREEN} p={ramp(t, c("Arising and ceasing are events that befall it") + 0.3, 0.5)} />
      <Flow x1={1060} y1={390} x2={1280} y2={500} color={ROSE} p={ramp(t, c("Arising and ceasing are events that befall it") + 0.8, 0.5)} />
    </AbsoluteFill>
  );
};

const FourScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const boxes: [string, string, string, string][] = [
    ["It arises", "It arises", "never there to have arisen", "So it is never there to have arisen"],
    ["It ceases", "It ceases", "what passes, if it never stood?", "But what passes away, if it never stood"],
    ["Both", "Both at once", "opposites, like light and dark", "But these are opposites, like light and dark"],
    ["Neither", "Neither", "yet a sound is heard now", "Yet a sound is being heard, right now"],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("Given a thing, the question must be answered")} color={WARM}>given a thing, it must be answered</Title>
      <At x={960} y={200} o={ramp(t, c("There are four possible answers"), 0.4)}><W c={DIM} s={28}>four answers · each one fails</W></At>
      {boxes.map(([cue, head, why, fail], i) => {
        const x = 300 + i * 440;
        return (
          <React.Fragment key={cue}>
            <At x={x} y={400} o={ramp(t, c(cue), 0.4)} s={pop(t, 30, c(cue))}><K c={i < 2 ? (i ? ROSE : GREEN) : GOLD} s={34}>{head}</K></At>
            <At x={x} y={540} o={ramp(t, c(fail), 0.5)}><W c={ICE} s={24}>{why}</W></At>
            <Crossed x={x} y={400} at={c(fail) + 1.2} size={70} />
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const WaysOutScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ways: [string, string][] = [
    ["A timeless Now", "a timeless Now"], ["An awareness behind the moments", "an awareness behind it all"],
    ["A pure flow", "pure flow"], ["Tiny", "point-instants"], ["Or the last resort", "nothing happens"],
  ];
  const k = c("Each keeps the");
  return (
    <AbsoluteFill>
      <Title at={c("For the logic of substance, this is a paradox")} color={WARM}>a paradox · a way out?</Title>
      {ways.map(([cue, w], i) => (
        <At key={w} x={960} y={240 + i * 86} o={ramp(t, c(cue), 0.4)}>
          <SK c={i === 4 ? DIM : VIOLET} s={30} strikeAt={k + 0.6 + i * 0.25}>{w}</SK>
        </At>
      ))}
      <Items items={[
        ["All five are the same logic, one step further on", 960, 720, <W c={GOLD} s={32} serif>the same logic, one step further on</W>],
        ["and moves it somewhere else", 960, 800, <W c={WARM} s={26}>each keeps the “it”, and moves it</W>],
        ["The Now becomes the moment that never ends", 1500, 240, <W c={DIM} s={22}>→ a moment that never ends</W>],
        ["The awareness becomes the Witness again", 1500, 326, <W c={DIM} s={22}>→ the Witness again</W>],
        ["The flow becomes the thing that is really there", 1500, 412, <W c={DIM} s={22}>→ the thing really there</W>],
      ]} />
    </AbsoluteFill>
  );
};

const DependScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("A moment is designated in dependence on its arising and its ceasing");
  const b = c("Arising is designated in dependence on ceasing");
  const d = c("And ceasing, in dependence on arising");
  return (
    <AbsoluteFill>
      <Title at={c("The logic of dependency starts one step earlier")} color={TEAL}>the logic of dependency</Title>
      <At x={960} y={200} o={ramp(t, c("It asks how this moment is picked out at all"), 0.4)}><W c={DIM} s={26}>how is “this moment” picked out at all?</W></At>
      <At x={960} y={340} o={ramp(t, a, 0.4)}><K c={GOLD} s={34}>moment</K></At>
      <At x={620} y={600} o={ramp(t, a + 0.6, 0.4)}><K c={GREEN} s={34}>arising</K></At>
      <At x={1300} y={600} o={ramp(t, a + 1.0, 0.4)}><K c={ROSE} s={34}>ceasing</K></At>
      <Flow x1={900} y1={370} x2={680} y2={570} color={TEAL} p={ramp(t, a + 0.8, 0.6)} />
      <Flow x1={1020} y1={370} x2={1240} y2={570} color={TEAL} p={ramp(t, a + 1.2, 0.6)} />
      <Flow x1={740} y1={590} x2={1180} y2={590} color={TEAL} p={ramp(t, b, 0.6)} />
      <Flow x1={1180} y1={620} x2={740} y2={620} color={TEAL} p={ramp(t, d, 0.6)} />
      <Items items={[
        ["None comes first", 960, 740, <W c={CHALK} s={32} serif>none comes first</W>],
        ["None is found apart from the others", 960, 810, <W c={ICE} s={26}>none is found apart from the others</W>],
      ]} />
    </AbsoluteFill>
  );
};

const FallScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fall = c("It falls away");
  const drop = ramp(t, fall, 1.4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["is not a paradox", 960, 200, <SK c={DIM} s={30} strikeAt={c("It is a plain description")}>paradox</SK>],
        ["It is a plain description", 960, 290, <W c={TEAL} s={32} serif>a plain description</W>],
        ["There is no it standing between the arising and the ceasing", 960, 420, <W c={CHALK} s={28}>arising · <span style={{ color: DIM }}>(no “it”)</span> · ceasing</W>],
      ]} />
      <At x={960} y={560 + drop * 220} o={ramp(t, c("The question assumes that"), 0.4) * (1 - drop)} r={drop * 12}>
        <W c={ICE} s={40} serif>does it arise, or cease?</W>
      </At>
      <Items items={[
        ["the question is not answered", 960, 660, <W c={DIM} s={26}>not answered…</W>, { until: "It falls away" }],
        ["It falls away", 960, 660, <W c={GOLD} s={40} serif>it falls away</W>, { d: 0.6 }],
        ["The koan has done its work", 960, 760, <W c={TEAL} s={26}>the koan has done its work</W>],
      ]} />
    </AbsoluteFill>
  );
};

const LostScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const flash = c("Just as the flashing is the lightning");
  const fl = t > flash ? Math.max(0, Math.sin((t - flash) * 7)) : 0;
  return (
    <AbsoluteFill>
      <Title at={c("And nothing is lost")} color={GOLD}>and nothing is lost</Title>
      <Sound x={380} y={400} at={c("Sounds are still heard")} dur={9} r1={200} />
      <At x={380} y={400} o={ramp(t, c("Sounds are still heard"), 0.4)}><Bell size={130} /></At>
      <At x={800} y={400} o={ramp(t, c("Clocks still keep time"), 0.4)}><Clock turn={(t - c("Clocks still keep time")) * 30} /></At>
      <At x={1180} y={390} o={ramp(t, c("The firewood still burns"), 0.4)}><Fire size={160} f={t} /></At>
      <At x={1560} y={390} o={ramp(t, flash, 0.3)}><Bolt flash={fl} /></At>
      <Items items={[
        ["Just as the flashing is the lightning", 1560, 540, <W c={ICE} s={24}>the flashing is the lightning</W>],
        ["There is change, vivid and exact", 960, 680, <W c={CHALK} s={36} serif>change, vivid and exact</W>],
        ["And no changer behind it", 960, 770, <SK c={DIM} s={28} strikeAt={c("And no changer behind it") + 0.8}>a changer behind it</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const FiveScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const names = ["four corners", "same or different", "three times", "infinite regress", "mutual dependence"];
  const a = c("has five core ways of taking the logic of substance apart");
  return (
    <AbsoluteFill>
      <Title at={a} color={GOLD}>five core logics</Title>
      {names.map((n, i) => (
        <React.Fragment key={n}>
          <At x={260 + i * 350} y={360} o={ramp(t, a + 0.6 + i * 0.4, 0.4)} s={pop(t, 30, a + 0.6 + i * 0.4)}><Num n={i + 1} /></At>
          <At x={260 + i * 350} y={450} o={ramp(t, a + 0.8 + i * 0.4, 0.4)}><W c={CHALK} s={26}>{n}</W></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["the substance reading needs a moment that is there on its own, and fails", 960, 620, <W c={WARM} s={28}>substance: needs a moment on its own · fails</W>],
        ["the dependency reading lets the same moment appear", 960, 710, <W c={TEAL} s={28}>dependency: the same moment appears, nothing behind it</W>],
      ]} />
    </AbsoluteFill>
  );
};

/** A heading for one of the five logics. */
const LogicHead: React.FC<{ n: number; at: number; children: React.ReactNode }> = ({ n, at, children }) => {
  const { t } = useT();
  return (
    <>
      <At x={760} y={110} o={ramp(t, at, 0.4)}><Num n={n} size={56} /></At>
      <At x={1010} y={110} o={ramp(t, at + 0.2, 0.4)}><Glow color={GOLD} size={40} serif>{children}</Glow></At>
    </>
  );
};

const CornersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const src: [string, string, number, number][] = [
    ["From itself", "from itself", 520, 320], ["From another, the moment before", "from another", 1400, 320],
    ["From both", "from both", 520, 560], ["From no cause", "from no cause", 1400, 560],
  ];
  const dep = c("Seen with dependency, the moment is not a thing that needs a source");
  return (
    <AbsoluteFill>
      <LogicHead n={1} at={c("The first is the four corners")}>the four corners</LogicHead>
      <At x={960} y={440} o={ramp(t, c("If this moment really arises, from what"), 0.4)}><K c={WARM} s={32}>this moment arises… from what?</K></At>
      {src.map(([cue, w, x, y], i) => (
        <React.Fragment key={w}>
          <At x={x} y={y} o={ramp(t, c(cue), 0.4) * (1 - ramp(t, dep, 0.5))}><K c={VIOLET} s={28}>{w}</K></At>
          <Crossed x={x} y={y} at={c(cue) + 1.4} size={50} />
        </React.Fragment>
      ))}
      <Items items={[
        ["It is picked out with its conditions", 960, 640, <W c={TEAL} s={30} serif>picked out with its conditions</W>],
        ["Nothing passes from one moment to the next", 960, 730, <W c={ICE} s={26}>nothing passes from one moment to the next</W>],
        ["And nothing is missing", 960, 800, <W c={GOLD} s={26}>and nothing is missing</W>],
      ]} />
    </AbsoluteFill>
  );
};

const SameScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ff = c("asks this of fire and fuel");
  const dep = c("arising and ceasing are not one, and not two");
  return (
    <AbsoluteFill>
      <LogicHead n={2} at={c("The second is same or different")}>same or different</LogicHead>
      <Items items={[
        ["Is the arising the same as the ceasing", 960, 250, <W c={CHALK} s={30}>arising = ceasing? → nothing ever comes to be</W>, { until: "asks this of fire and fuel" }],
        ["Is it different", 960, 330, <W c={CHALK} s={30}>arising ≠ ceasing? → something must stand between</W>, { until: "asks this of fire and fuel" }],
        ["The abiding the koan removed", 960, 420, <SK c={DIM} s={28} strikeAt={c("The abiding the koan removed") + 1}>the abiding</SK>, { until: "asks this of fire and fuel" }],
      ]} />
      <At x={960} y={360} o={ramp(t, ff, 0.5)}><Fire size={200} f={t} /></At>
      <Items items={[
        ["If the fire were the fuel", 520, 360, <W c={FIRE} s={26}>fire = fuel? burner and burned are one</W>],
        ["If the fire were other than the fuel", 1400, 360, <W c={FIRE} s={26}>fire ≠ fuel? it burns with no fuel</W>],
      ]} />
      <Crossed x={520} y={360} at={c("If the fire were other than the fuel") - 0.5} size={50} />
      <Crossed x={1400} y={360} at={dep - 0.5} size={50} />
      <Items items={[
        ["arising and ceasing are not one, and not two", 960, 600, <W c={TEAL} s={34} serif>not one, and not two</W>],
        ["They are designated together, like fire and fuel", 960, 690, <W c={ICE} s={26}>designated together, like fire and fuel</W>],
        ["says exactly this", 960, 780, <W c={GOLD} s={28}>“ceases as it arises”</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TimesScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const road = c("with a road being walked");
  const p = ramp(t, road, 4);
  return (
    <AbsoluteFill>
      <LogicHead n={3} at={c("The third is the three times")}>the three times</LogicHead>
      <Svg><DrawPath d="M260 420 L1660 420" p={ramp(t, c("Look for the arising"), 0.8)} color={DIM} width={4} len={1500} /></Svg>
      <Items items={[
        ["What has already arisen is not arising", 480, 360, <K c={DIM} s={28}>already arisen: done</K>],
        ["What has not yet arisen is not arising", 1440, 360, <K c={DIM} s={28}>not yet arisen: not here</K>],
        ["no now arising is found", 960, 360, <SK c={WARM} s={28} strikeAt={c("no now arising is found") + 0.8}>now arising</SK>],
        ["finds no now ceasing", 960, 470, <SK c={WARM} s={24} strikeAt={c("finds no now ceasing") + 0.8}>now ceasing</SK>],
        ["has no room to happen in", 960, 540, <W c={ICE} s={24}>“as it arises” has no room to happen in</W>],
      ]} />
      <At x={260 + p * 1400} y={300} o={ramp(t, road, 0.4) * (1 - ramp(t, c("finds no now ceasing"), 0.4))}><Walker step={t * 6} /></At>
      <Items items={[
        ["arisen and not yet arisen are designated in relation to each other", 960, 650, <W c={TEAL} s={28} serif>designated in relation to each other</W>],
        ["No present stands between past and future", 960, 730, <W c={CHALK} s={26}>no present holding the moment</W>],
        ["without a now that contains it", 960, 800, <W c={GOLD} s={26}>met vividly, without a now that contains it</W>],
      ]} />
    </AbsoluteFill>
  );
};

const RegressScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const nest = ["arising", "arising of the arising", "arising of that arising", "…"];
  const a = c("Then it needs its own arising, abiding and ceasing");
  const dep = c("arising is not a thing that needs to arise");
  return (
    <AbsoluteFill>
      <LogicHead n={4} at={c("The fourth is infinite regress")}>infinite regress</LogicHead>
      <At x={960} y={220} o={ramp(t, c("it is conditioned"), 0.4)}><W c={WARM} s={28}>arising as a real event → conditioned</W></At>
      {nest.map((w, i) => (
        <At key={w} x={600 + i * 90} y={320 + i * 80} o={ramp(t, a + i * 0.9, 0.4) * (1 - 0.7 * ramp(t, dep, 0.5))}>
          <K c={i ? VIOLET : GREEN} s={28 - i * 2}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["does the arising arise", 1400, 330, <W c={ICE} s={26}>does the arising arise?</W>],
        ["and so on, for ever", 1400, 400, <W c={DIM} s={24}>…for ever</W>],
        ["It is a designation, made in dependence on what it marks", 960, 660, <W c={TEAL} s={30} serif>a designation, in dependence on what it marks</W>],
        ["There is no regress, and no first arising", 960, 740, <W c={CHALK} s={26}>no regress · no first arising</W>],
        ["what comes to be in dependence is at peace", 960, 810, <W c={GOLD} s={26}>at peace, and so is arising itself</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MutualScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tog = c("Arising and ceasing cannot be established together");
  const ap = c("and cannot be established apart");
  const shift = ramp(t, ap, 0.8);
  return (
    <AbsoluteFill>
      <LogicHead n={5} at={c("The fifth is mutual dependence")}>mutual dependence</LogicHead>
      <Items items={[
        ["The four logics above all fail for one reason", 960, 220, <W c={WARM} s={26}>each needs something established on its own first</W>, { until: "This fifth logic is not one more refutation" }],
      ]} />
      <At x={860 - shift * 260} y={360} o={ramp(t, tog, 0.4) * (1 - ramp(t, c("This fifth logic is not one more refutation"), 0.4))}><K c={GREEN} s={32}>arising</K></At>
      <At x={1060 + shift * 260} y={360} o={ramp(t, tog, 0.4) * (1 - ramp(t, c("This fifth logic is not one more refutation"), 0.4))}><K c={ROSE} s={32}>ceasing</K></At>
      <Items items={[
        ["So how could they be established at all", 960, 470, <W c={ICE} s={26}>not together, not apart: how established at all?</W>, { until: "This fifth logic is not one more refutation" }],
        ["It is what the other four leave behind", 960, 300, <W c={CHALK} s={30} serif>what the other four leave</W>],
        ["Dependent arising is what we call emptiness", 960, 420, <W c={GOLD} s={40} serif>dependent arising is emptiness</W>, { pop: true }],
        ["it can appear and pass at all", 960, 540, <W c={TEAL} s={28}>so the moment can appear and pass at all</W>],
        ["for whom emptiness is possible, everything is possible", 960, 680, <W c={ICE} s={32} serif>for whom emptiness is possible, everything is possible</W>],
      ]} />
    </AbsoluteFill>
  );
};

const HideScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const spots: [string, string][] = [
    ["Its source", "source"], ["Its identity", "identity"], ["Its present", "present"], ["Its marks", "marks"],
    ["And its standing on its own", "standing on its own"],
  ];
  const nf = c("No it is found");
  return (
    <AbsoluteFill>
      <Title at={c("Each logic searches a different hiding place")} color={GOLD}>five hiding places of the “it”</Title>
      {spots.map(([cue, w], i) => (
        <React.Fragment key={w}>
          <At x={260 + i * 350} y={360} o={ramp(t, c(cue), 0.4)}><Num n={i + 1} size={52} /></At>
          <At x={260 + i * 350} y={450} o={ramp(t, c(cue) + 0.2, 0.4)}><K c={VIOLET} s={26}>{w}</K></At>
          <At x={260 + i * 350} y={530} o={ramp(t, nf + i * 0.2, 0.4)}><W c={DIM} s={22}>no “it”</W></At>
        </React.Fragment>
      ))}
      <Items items={[
        ["Each lands in the same place", 960, 650, <W c={CHALK} s={28}>each lands in the same place</W>],
        ["And the moment is still here", 960, 760, <W c={GOLD} s={38} serif>and the moment is still here</W>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const AnswersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const conv = c("Conventionally, it arises and ceases");
  const sw = t > conv ? Math.sin((t - conv) * 5) * 8 * Math.exp(-(t - conv) / 3) : 0;
  const lines = ["without ceasing, without arising", "without annihilation, without permanence", "not one thing and not many", "without coming and without going"];
  return (
    <AbsoluteFill>
      <Title at={c("So, does it arise, or cease")} color={ICE}>so, does it arise or cease?</Title>
      <At x={960} y={190} o={ramp(t, c("Two answers can be given, and they are not in conflict"), 0.4)}><W c={DIM} s={26}>two answers, not in conflict</W></At>
      <At x={480} y={290} o={ramp(t, conv, 0.4)}><K c={TEAL} s={30}>conventionally</K></At>
      <Sound x={480} y={430} at={conv + 0.3} dur={4} r1={220} color={TEAL} />
      <At x={480} y={440} o={ramp(t, conv, 0.4)}><Bell size={130} swing={sw} color={TEAL} /></At>
      <Items items={[
        ["The sound starts and ends", 480, 580, <W c={CHALK} s={24}>it arises and ceases</W>],
        ["Nothing in the analysis touches this", 480, 650, <W c={DIM} s={22}>the analysis does not touch this</W>],
        ["Looked for, nothing that arises and nothing that ceases is found", 1440, 290, <K c={GOLD} s={30}>looked for</K>],
        ["Looked for, nothing that arises and nothing that ceases is found", 1440, 380, <W c={CHALK} s={24}>nothing that arises, nothing that ceases</W>, { d: 0.6 }],
      ]} />
      {lines.map((l, i) => (
        <At key={l} x={1440} y={480 + i * 62} o={ramp(t, c(l), 0.5)}><W c={ICE} s={24} serif>{l}</W></At>
      ))}
    </AbsoluteFill>
  );
};

const OneScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const one = c("One moment, seen two ways");
  const merge = ramp(t, one, 1.0);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Without arising is not a denial that things appear", 960, 220, <SK c={DIM} s={28} strikeAt={c("It is said of dependent arising itself")}>a denial that things appear</SK>],
        ["It is said of dependent arising itself", 960, 310, <W c={TEAL} s={30} serif>said of dependent arising itself</W>],
        ["things can appear, change and pass at all", 960, 400, <W c={ICE} s={26}>so things can appear, change and pass</W>],
      ]} />
      <At x={760 + merge * 200} y={580} o={ramp(t, c("Not two worlds"), 0.4)}><K c={TEAL} s={30}>conventional</K></At>
      <At x={1160 - merge * 200} y={580} o={ramp(t, c("Not two worlds"), 0.4)}><K c={GOLD} s={30}>looked for</K></At>
      <At x={960} y={700} o={ramp(t, one, 0.6)}><W c={CHALK} s={40} serif>one moment, seen two ways</W></At>
    </AbsoluteFill>
  );
};

const CompleteScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fw = c("says it of firewood and ash");
  const sr = c("tradition calls it self-release");
  const water = c("Like a drawing on water, which needs no eraser");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So the koan is not answered by choosing a corner", 960, 190, <SK c={DIM} s={26} strikeAt={c("It is answered when the it is seen never to have been there")}>choose a corner</SK>, { until: "says it of firewood and ash" }],
        ["It is answered when the it is seen never to have been there", 960, 270, <W c={TEAL} s={28}>the “it” never was there</W>, { until: "says it of firewood and ash" }],
        ["Then each moment is simply complete where it is", 960, 370, <W c={GOLD} s={34} serif>each moment complete where it is</W>, { until: "says it of firewood and ash" }],
        ["Nothing carried over", 700, 460, <W c={CHALK} s={26}>nothing carried over</W>, { until: "says it of firewood and ash" }],
        ["Nothing left behind", 1220, 460, <W c={CHALK} s={26}>nothing left behind</W>, { until: "says it of firewood and ash" }],
      ]} />
      <At x={620} y={330} o={ramp(t, fw, 0.5) * (1 - ramp(t, sr, 0.5))}><Fire size={170} f={t} /></At>
      <At x={1300} y={360} o={ramp(t, fw + 0.8, 0.5) * (1 - ramp(t, sr, 0.5))}><Ash size={170} /></At>
      <Svg><line x1={960} y1={230} x2={960} y2={470} stroke={DIM} strokeWidth={3} strokeDasharray="10 10"
        opacity={ramp(t, c("with a before and an after, yet cut off from before and after"), 0.5) * (1 - ramp(t, sr, 0.5))} /></Svg>
      <Items items={[
        ["with a before and an after, yet cut off from before and after", 960, 560, <W c={ICE} s={26}>a before and an after, yet cut off from both</W>, { until: "tradition calls it self-release" }],
        ["tradition calls it self-release", 960, 220, <W c={GOLD} s={36} serif>self-release</W>],
        ["releases itself as it arises", 960, 300, <W c={CHALK} s={26}>a thought, unfixed, releases itself as it arises</W>],
      ]} />
      <Svg>
        <DrawPath d="M640 520 Q720 440 800 520 T960 520 T1120 520 T1280 520" p={ramp(t, water, 1.4)} color={ICE} width={7} len={900} />
        <path d="M600 600 Q960 570 1320 600" stroke={TEAL} strokeWidth={3} fill="none" opacity={ramp(t, water, 0.6) * 0.6} />
      </Svg>
      <Items items={[
        ["Like a drawing on water, which needs no eraser", 960, 680, <W c={ICE} s={28} serif>a drawing on water needs no eraser</W>],
      ]} />
    </AbsoluteFill>
  );
};

const InsightScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cards: [string, string, string][] = [
    ["The moment is vivid, and unfindable", "vivid and unfindable", GOLD],
    ["It appears whenever conditions come together", "appears when conditions align", TEAL],
    ["We habitually think inherently", "we habitually think inherently", WARM],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("The koan holds three insights at once")} color={GOLD}>three insights in one koan</Title>
      {cards.map(([cue, w, col], i) => (
        <At key={w} x={400 + i * 560} y={360} o={ramp(t, c(cue), 0.4)} s={pop(t, 30, c(cue))}><K c={col} s={30}>{w}</K></At>
      ))}
      <Items items={[
        ["bell, air, ear and attention", 960, 500, <W c={ICE} s={26}>bell · air · ear · attention</W>],
        ["It comes from no hidden place, and goes into none", 960, 570, <W c={DIM} s={24}>from no hidden place, into none</W>],
        ["is the habit at work", 1520, 470, <W c={WARM} s={24}>the “it” is the habit at work</W>, { d: 0.2 }],
        ["the grammar of the question carries the habit in", 960, 720, <W c={CHALK} s={28} serif>the grammar of the question carries the habit in</W>],
      ]} />
    </AbsoluteFill>
  );
};

const MatterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const keep = c("every experience is something to keep, or to lose");
  const free = c("there is nothing to keep and nothing to lose");
  const grip = ramp(t, keep, 1.0) * (1 - ramp(t, free, 1.2));
  return (
    <AbsoluteFill>
      <Title at={c("Why does this matter")} color={CHALK}>why it matters</Title>
      <At x={960} y={330} o={ramp(t, keep, 0.4)}><Palm closed={grip} color={grip > 0.5 ? WARM : TEAL} /></At>
      <Items items={[
        ["every experience is something to keep, or to lose", 960, 200, <W c={WARM} s={28}>if the moment is an “it”: keep it, or lose it</W>, { until: "there is nothing to keep and nothing to lose" }],
        ["A clear moment in meditation must be held on to", 420, 480, <W c={CHALK} s={22}>a clear moment: hold on</W>, { until: "there is nothing to keep and nothing to lose" }],
        ["A painful one must be got rid of", 960, 480, <W c={CHALK} s={22}>a painful one: get rid of it</W>, { until: "there is nothing to keep and nothing to lose" }],
        ["The end of a life is the end of something that was really there", 1500, 480, <W c={CHALK} s={22}>a life: the end of something real</W>, { until: "there is nothing to keep and nothing to lose" }],
        ["Craving and fear follow from the", 960, 580, <K c={ROSE} s={28}>craving and fear</K>, { until: "there is nothing to keep and nothing to lose" }],
        ["there is nothing to keep and nothing to lose", 960, 200, <W c={TEAL} s={30} serif>nothing to keep, nothing to lose</W>, { d: 0.6 }],
        ["Each moment is wholly itself, and wholly gone", 960, 520, <W c={GOLD} s={30} serif>wholly itself, and wholly gone</W>],
        ["and nothing went anywhere", 960, 600, <W c={ICE} s={24}>and nothing went anywhere</W>],
        ["This is not indifference", 960, 700, <SK c={DIM} s={24} strikeAt={c("The moment is met fully")}>indifference</SK>],
        ["The moment is met fully", 960, 780, <W c={CHALK} s={28}>met fully, because not held on to</W>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const s = c("So, wherever you are, listen to a single sound until it ends");
  const sw = t > s ? Math.sin((t - s) * 5) * 6 * Math.exp(-(t - s) / 4) : 0;
  return (
    <AbsoluteFill>
      <Sound x={960} y={300} at={s + 0.3} dur={7} />
      <At x={960} y={300} o={ramp(t, s, 0.5) * (1 - ramp(t, c("Ask what arises, and the koan is a paradox"), 0.6))}><Bell size={200} swing={sw} /></At>
      <Items items={[
        ["When did it arise", 620, 520, <W c={GREEN} s={30}>when did it arise?</W>, { until: "Ask what arises, and the koan is a paradox" }],
        ["When did it cease", 1300, 520, <W c={ROSE} s={30}>when did it cease?</W>, { until: "Ask what arises, and the koan is a paradox" }],
        ["Look for a sound between the two, apart from the sounding", 960, 620, <W c={ICE} s={26}>a sound between the two, apart from the sounding?</W>, { until: "Ask what arises, and the koan is a paradox" }],
        ["Ask what arises, and the koan is a paradox", 960, 380, <W c={DIM} s={32} serif>ask what arises: a paradox</W>],
        ["See that no it is found", 960, 490, <W c={TEAL} s={32} serif>see that no “it” is found</W>],
        ["and the koan is simply this moment", 960, 630, <W c={GOLD} s={46} serif>simply this moment</W>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, string][] = [
    ["open", "This moment ceases as it arises"], ["web", "This is the koan page of The Logic"], ["vivid", "Start with a sound"],
    ["doubt", "The ordinary picture is different"], ["doubt", "The logic of substance starts with things"],
    ["search", "Given a thing, the question must be answered"], ["doubt", "For the logic of substance, this is a paradox"],
    ["web", "The logic of dependency starts one step earlier"], ["sea", "is not a paradox"], ["vivid", "And nothing is lost"],
    ["web", "has five core ways of taking the logic of substance apart"], ["search", "The first is the four corners"],
    ["vivid", "The second is same or different"], ["sea", "The third is the three times"], ["search", "The fourth is infinite regress"],
    ["whole", "The fifth is mutual dependence"], ["search", "Each logic searches a different hiding place"],
    ["whole", "So, does it arise, or cease"], ["whole", "Without arising is not a denial that things appear"],
    ["sea", "So the koan is not answered by choosing a corner"], ["vivid", "The koan holds three insights at once"],
    ["doubt", "Why does this matter"], ["whole", "So, wherever you are, listen to a single sound until it ends"],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, cue], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < starts.length ? c(starts[i + 1][1], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const order: [string, React.ReactNode][] = [
    ["This moment ceases as it arises", <KoanScene />],
    ["This is the koan page of The Logic", <PageScene />],
    ["Start with a sound", <BellScene />],
    ["The ordinary picture is different", <MarksScene />],
    ["The logic of substance starts with things", <SubstanceScene />],
    ["Given a thing, the question must be answered", <FourScene />],
    ["For the logic of substance, this is a paradox", <WaysOutScene />],
    ["The logic of dependency starts one step earlier", <DependScene />],
    ["is not a paradox", <FallScene />],
    ["And nothing is lost", <LostScene />],
    ["has five core ways of taking the logic of substance apart", <FiveScene />],
    ["The first is the four corners", <CornersScene />],
    ["The second is same or different", <SameScene />],
    ["The third is the three times", <TimesScene />],
    ["The fourth is infinite regress", <RegressScene />],
    ["The fifth is mutual dependence", <MutualScene />],
    ["Each logic searches a different hiding place", <HideScene />],
    ["So, does it arise, or cease", <AnswersScene />],
    ["Without arising is not a denial that things appear", <OneScene />],
    ["So the koan is not answered by choosing a corner", <CompleteScene />],
    ["The koan holds three insights at once", <InsightScene />],
    ["Why does this matter", <MatterScene />],
    ["So, wherever you are, listen to a single sound until it ends", <TryScene />],
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
