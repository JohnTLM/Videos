// Bonus video: Dependent Arising Section 2 Part 6: Complete, and Dependent (AA45).
// (Script: new-documents/after-anatta/aa45-complete-and-dependent-script.md, from EBooks
// Bonus Articles/complete-and-dependent, draft of 2026-11-23; approved by the owner 2026-11-23.)
// Arc: ash is just ash, and the wood and fire appearing as ash -> the question: complete, yet dependent; islands or a
// chain/web (both misheard) -> total exertion: spends itself completely; complete AS its conditions -> the key and the
// door: seamless in working, not one Whole (one substance / one Whole / one substrate struck); neither the same nor
// different; both ways (no Whole behind, parts not the real stuff) -> designated together, without a given (labels on
// things struck, one stuff cut by names struck; rower and boat in the one rowing; no designator outside; no basis) ->
// three ways of seeing, at once, not stages -> which holds -> the close; next: the shore and the boat.
// Stance: a Whole, a substrate, labels and a seamless stuff are drawn only to be struck; nothing is drawn behind the
// event. Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "Ash is just ash", "And ash is the wood, the fire, the air and the time, appearing as ash", "How can both be true",
  "I am John Tan, known as Thusness",
  // question
  "In Part 5, I asked what experience is like when no layer is left", "The clarity is exactly the appearances",
  "The seen is complete. Nothing stands behind it", "Whatever appears depends", "Take one away, and there is no tone",
  "So how can both hold", "Each half, held alone, is easily misheard",
  "Hold only the completeness, and each moment becomes an island",
  "Hold only the dependence, and each moment becomes a small link in a long chain", "Or a knot in a vast web",
  "Neither picture is what is actually met", "What is met is both at once",
  // total exertion
  "had a name for this. Total exertion", "Exhausting completely", "And total dynamic working",
  "I do not find it there", "So the next three parts go to him, one image at a time",
  "Put as simply as I can", "Each event spends itself completely", "Nothing is held back behind it",
  "Nothing outside is needed to complete it", "Nothing is carried over from it into the next",
  "And no cosmos is packed inside it", "And here is the point that joins the two halves",
  "The event is complete as its conditions, wholly at work", "The ash lacks nothing",
  "But because the wood and fire are fully there, as the ash, with nothing held back",
  "And the seen is its conditions, appearing", "Total exertion is also the hardest taste to put into words",
  "They point at a taste", "They are not claims about what the universe is made of",
  "But before the images, two things must be made clear",
  // key
  "The first. Seamless in working, not one Whole", "Turn a key in a lock, and the door opens",
  "With no seam between them", "And nothing works apart", "But they are not one substance",
  "Not parts of one great Whole", "Not waves on a single substrate", "The key is still metal",
  "They do not have to be the same stuff to work seamlessly",
  "because none of them has a nature of its own that would block the meeting",
  "Things with natures of their own could never meet like this",
  "They would stay outside each other, touching only at their surfaces", "Or they would have to melt into one",
  "Whatever arises in dependence on something is neither that thing, nor different from it",
  "And so it is neither cut off, nor permanent", "All the necessary factors must line up",
  "Take one away, and there is no opening", "That is total exertion. The opening, complete",
  "It does not mean the whole cosmos has been gathered into the lock", "And it runs both ways",
  "A key is a key only with a lock", "Holism puts a Whole behind the parts",
  "The opposite habit makes the parts the real stuff, and the opening a mere name",
  "There is just the opening, complete", "And the factors, designated together with it",
  "So seamless working does not mean wholeness, in the sense of holism", "That is all. And it is enough",
  // designation
  "The second. Designated together, without a given", "And the phrase needs a guard",
  "I do not mean two things already there, with names stuck on afterwards",
  "Nor do I mean one seamless stuff, which names then cut into pieces", "That would be the given again",
  "I mean that rower and boat stand out as rower and boat only in the one rowing",
  "The singling out is part of the appearing", "It needs no words",
  "The bee singles out the flower, and a baby its mother's face, long before any name", "And it makes nothing",
  "It is not a mind creating the world", "Nor does anyone stand outside, doing the designating",
  "And the seen in the seer", "And the basis is not found either", "But the parts are not a given base",
  "And no floor is ever reached", "joins all of this in one verse", "Dependent arising is emptiness",
  "That is designation in dependence", "And that is the Middle Way", "This is why Section 1 came first",
  "designation can only be heard as labels on raw stuff", "can designation be heard without one",
  // three ways
  "Each of", "And I find it helps to see all three at once", "The substantialist way",
  "And the event happens between them, or to them", "the watcher, the doer, the seeker, is not found",
  "There is just the seeing. The rowing. The swimming", "The way of dependent arising",
  "It is complete as its conditions, designated together with them",
  "Here the taste of total exertion is direct, and obvious", "These are not three stages that I have to climb",
  "With a keen eye, all three show in the same image, at the same time",
  // which holds
  "So, which holds", "By experience. When the door opens, do I meet a key that opens it alone",
  "Or a great Whole, opening it through the key", "What is met is the opening, complete",
  "By logic. If the key had a nature of its own", "Neither the same, nor different",
  "It is no better off than the key", "By working. Nothing works the less for this",
  "The key opens the door, every time", "So the view of separate things linked by conditions",
  "Both are the default, carried by habit, and by nouns", "None of this makes my everyday words false",
  "I turn the key. The door opens", "What fails is only a key, a door, or a cosmos, standing on its own",
  // close
  "This is Section 2, Part 6 of the Dependent Arising series", "In Part 7, I take",
  "The shore that seems to move, where no seat is left outside",
  "And the boat that carries its rower, where no doer stands behind the act",
];

const M = {
  ember: { a: "rgba(150,70,40,0.48)", b: "rgba(60,45,120,0.44)", c: "rgba(160,110,50,0.3)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  door: { a: "rgba(40,90,120,0.48)", b: "rgba(120,95,50,0.38)", c: "rgba(60,50,130,0.36)" },
  river: { a: "rgba(30,80,130,0.5)", b: "rgba(60,60,150,0.4)", c: "rgba(40,120,120,0.32)" },
  three: { a: "rgba(70,55,140,0.48)", b: "rgba(40,100,120,0.38)", c: "rgba(150,100,50,0.3)" },
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
/** Fades a block in at `from` and out at `to` (cue phrases). */
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A heap of ash; `flow` 0..1 draws the wood, fire, air and time coming through as it (not arrows from outside: they
 * end inside the heap and glow as it). */
const Ash: React.FC<{ flow: number }> = ({ flow }) => {
  const { t } = useT();
  const src: [string, string, number, number][] = [["wood", WARM, -300, -150], ["fire", ROSE, 300, -150], ["air", ICE, -320, 90], ["time", VIOLET, 320, 90]];
  return (
    <svg width={800} height={420} viewBox="-400 -210 800 420" style={{ overflow: "visible" }}>
      {src.map(([w, col, x, y], i) => (
        <g key={i} opacity={flow}>
          <path d={`M${x * 0.72} ${y * 0.72} Q${x * 0.3} ${y * 0.1} 0 30`} stroke={col} strokeWidth={4} fill="none"
            strokeDasharray="8 10" strokeDashoffset={-t * 30} />
          <text x={x} y={y} fill={col} fontSize={30} textAnchor="middle" fontFamily="SourceSans">{w}</text>
        </g>
      ))}
      <path d="M-170 110 Q-90 0 0 -10 Q90 0 170 110 Z" fill={`rgba(190,190,200,${0.25 + flow * 0.15})`} stroke={CHALK} strokeWidth={4} />
      {[...Array(9)].map((_, i) => (
        <circle key={i} cx={-110 + i * 28} cy={80 - (i % 3) * 22} r={5} fill={GOLD} opacity={flow * (0.4 + 0.5 * Math.abs(Math.sin(t * 1.5 + i)))} />
      ))}
      <text x={0} y={160} fill={CHALK} fontSize={34} textAnchor="middle" fontFamily="SourceSerif">ash</text>
    </svg>
  );
};

/** Islands (sealed circles) or a chain of links. */
const Islands: React.FC = () => (
  <svg width={560} height={200} viewBox="0 0 560 200" style={{ overflow: "visible" }}>
    {[0, 1, 2].map((i) => (
      <g key={i}>
        <circle cx={90 + i * 190} cy={100} r={62} fill={`${ICE}18`} stroke={ICE} strokeWidth={5} />
        <circle cx={90 + i * 190} cy={100} r={74} fill="none" stroke={ICE} strokeWidth={2} strokeDasharray="4 6" />
      </g>
    ))}
  </svg>
);
const Chain: React.FC<{ web?: number }> = ({ web = 0 }) => (
  <svg width={600} height={220} viewBox="0 0 600 220" style={{ overflow: "visible" }}>
    {[0, 1, 2, 3, 4].map((i) => (
      <ellipse key={i} cx={60 + i * 120} cy={110} rx={70} ry={34} fill="none" stroke={WARM} strokeWidth={6} />
    ))}
    {web > 0 && [[60, 110, 300, 0], [300, 0, 540, 110], [60, 110, 300, 220], [300, 220, 540, 110], [300, 0, 300, 220]].map(([a, b, c2, d], i) => (
      <path key={i} d={`M${a} ${b} L${c2} ${d}`} stroke={WARM} strokeWidth={2} opacity={web * 0.7} />
    ))}
  </svg>
);

/** A door in its frame with a lock, a key and a hand; `open` 0..1 swings the door; `seam` lights the one opening. */
const Door: React.FC<{ open: number; seam: number }> = ({ open, seam }) => {
  const w = 220 * (1 - open * 0.75);
  return (
    <svg width={760} height={520} viewBox="-380 -260 760 520" style={{ overflow: "visible" }}>
      <rect x={-130} y={-230} width={260} height={460} rx={6} fill="rgba(255,220,150,0.08)" stroke={CHALK} strokeWidth={5} />
      <rect x={-130} y={-230} width={260} height={460} rx={6} fill={`rgba(255,215,120,${open * 0.25})`} />
      <path d={`M-120 -220 L${-120 + w} ${-220 + open * 30} L${-120 + w} ${220 - open * 30} L-120 220 Z`}
        fill="rgba(120,80,40,0.55)" stroke={WARM} strokeWidth={5} />
      <rect x={-120 + w - 46} y={-20} width={30} height={60} rx={6} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
      <g transform={`translate(${-120 + w - 30}, 10) rotate(${open * 90})`}>
        <circle cx={70} cy={0} r={18} fill="none" stroke={GOLD} strokeWidth={6} />
        <path d="M0 0 L52 0 M14 0 L14 12 M26 0 L26 10" stroke={GOLD} strokeWidth={6} strokeLinecap="round" />
      </g>
      <path d={`M${-120 + w + 90} 40 q30 -30 60 -10 q20 20 -10 50 q-30 10 -50 -40`} fill="rgba(240,200,170,0.4)" stroke={ROSE} strokeWidth={4} />
      <circle cx={-120 + w - 10} cy={10} r={150} fill="none" stroke={TEAL} strokeWidth={4} opacity={seam * 0.8} />
      <circle cx={-120 + w - 10} cy={10} r={190} fill="none" stroke={TEAL} strokeWidth={2} opacity={seam * 0.4} strokeDasharray="8 10" />
    </svg>
  );
};

/** A rower in a boat on water; the oar dips with time. */
const Rower: React.FC<{ glow?: number }> = ({ glow = 0 }) => {
  const { t } = useT();
  const a = Math.sin(t * 2) * 18;
  return (
    <svg width={620} height={300} viewBox="-310 -170 620 300" style={{ overflow: "visible" }}>
      <path d="M-300 60 Q-150 40 0 60 T300 60" stroke={ICE} strokeWidth={4} fill="none" />
      <path d="M-180 20 L180 20 L130 70 L-130 70 Z" fill="rgba(120,80,40,0.55)" stroke={WARM} strokeWidth={5} />
      <circle cx={0} cy={-70} r={22} fill="none" stroke={CHALK} strokeWidth={5} />
      <path d="M0 -48 L0 10 M-28 -20 L28 -20" stroke={CHALK} strokeWidth={5} strokeLinecap="round" />
      <g transform={`rotate(${a}, 20, -20)`}><path d="M20 -20 L200 80" stroke={GOLD} strokeWidth={6} strokeLinecap="round" /></g>
      <ellipse cx={0} cy={0} rx={240} ry={130} fill="none" stroke={TEAL} strokeWidth={4} opacity={glow * 0.8} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={430} o={ramp(t, c("Ash is just ash"), 0.6) * (1 - ramp(t, c("I am John Tan, known as Thusness"), 0.5))}>
        <Ash flow={ramp(t, c("And ash is the wood, the fire, the air and the time, appearing as ash"), 1.2)} />
      </At>
      <Items items={[
        ["Ash is just ash", 960, 130, <Wd c={GOLD} s={52} serif>Ash is just ash. Completely.</Wd>, { until: "I am John Tan, known as Thusness" }],
        ["How can both be true", 960, 790, <Wd c={CHALK} s={40} serif>How can both be true?</Wd>, { until: "I am John Tan, known as Thusness" }],
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Complete, and Dependent</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 6</Wd>, { d: 0.8 }],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Phase to="So how can both hold">
        <Items items={[
          ["In Part 5, I asked what experience is like when no layer is left", 960, 150, <Wd c={DIM} s={26}>Part 5: no layer left</Wd>],
          ["The clarity is exactly the appearances", 560, 330, <Box c={ICE} w={540} title="complete" sub="in the seen, just the seen · nothing behind it" />, { pop: true }],
          ["Whatever appears depends", 1360, 330, <Box c={WARM} w={540} title="dependent" sub="bell · striking · air · ear · attention" />, { pop: true }],
          ["Take one away, and there is no tone", 1360, 480, <K c={WARM} s={24}>take one away: no tone</K>, { pop: true }],
        ]} />
      </Phase>
      <Phase from="So how can both hold" to="had a name for this. Total exertion">
        <Items items={[
          ["So how can both hold", 960, 130, <Wd c={GOLD} s={44} serif>How can both hold?</Wd>],
          ["Each half, held alone, is easily misheard", 960, 210, <Wd c={DIM} s={26}>each half alone is misheard</Wd>],
          ["Hold only the completeness, and each moment becomes an island", 520, 400, <Islands />],
          ["Hold only the completeness, and each moment becomes an island", 520, 540, <SK at="Neither picture is what is actually met" s={26}>islands, sealed off</SK>],
          ["Hold only the dependence, and each moment becomes a small link in a long chain", 1400, 400,
            <Chain web={ramp(t, c("Or a knot in a vast web"), 0.8)} />],
          ["Hold only the dependence, and each moment becomes a small link in a long chain", 1400, 540, <SK at="Neither picture is what is actually met" d={0.3} s={26}>links in a chain, knots in a web</SK>],
          ["What is met is both at once", 960, 720, <Wd c={GOLD} s={40} serif>What is met is both at once.</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["had a name for this. Total exertion", 960, 100, <Wd c={GOLD} s={52} serif>Total exertion</Wd>]]} />
      <Phase from="had a name for this. Total exertion" to="Put as simply as I can">
        <Items items={[
          ["Exhausting completely", 700, 260, <K c={GOLD} s={28}>exhausting completely</K>, { pop: true }],
          ["And total dynamic working", 1220, 260, <K c={GOLD} s={28}>total dynamic working</K>, { pop: true }],
          ["I do not find it there", 960, 400, <Wd c={DIM} s={26}>not a Dzogchen idea · its classical home: Huayan · its sharpest form: Dōgen</Wd>],
          ["So the next three parts go to him, one image at a time", 960, 520, <Wd c={CHALK} s={28}>Parts 7 · 8 · 9: one image at a time</Wd>],
        ]} />
      </Phase>
      <Phase from="Put as simply as I can" to="And here is the point that joins the two halves">
        <Items items={[
          ["Each event spends itself completely", 960, 230, <Wd c={CHALK} s={40} serif>Each event spends itself completely.</Wd>],
          ["Nothing is held back behind it", 960, 360, <K c={TEAL} s={26}>nothing held back behind it</K>, { pop: true }],
          ["Nothing outside is needed to complete it", 960, 440, <K c={TEAL} s={26}>nothing outside needed to complete it</K>, { pop: true }],
          ["Nothing is carried over from it into the next", 960, 520, <K c={TEAL} s={26}>nothing carried over into the next</K>, { pop: true }],
          ["And no cosmos is packed inside it", 960, 600, <K c={WARM} s={26}>no cosmos packed inside it</K>, { pop: true }],
        ]} />
      </Phase>
      <Phase from="And here is the point that joins the two halves" to="Total exertion is also the hardest taste to put into words">
        <At x={1300} y={520} o={ramp(t, c("The ash lacks nothing"), 0.6)}>
          <Ash flow={ramp(t, c("But because the wood and fire are fully there, as the ash, with nothing held back"), 1)} />
        </At>
        <Items items={[
          ["The event is complete as its conditions, wholly at work", 560, 300, <Wd c={GOLD} s={36} serif>complete as its conditions</Wd>],
          ["The event is complete as its conditions, wholly at work", 560, 370, <Wd c={DIM} s={24}>wholly at work</Wd>, { d: 0.6 }],
          ["The ash lacks nothing", 560, 500, <Wd c={CHALK} s={26}>the ash lacks nothing</Wd>],
          ["But because the wood and fire are fully there, as the ash, with nothing held back", 560, 570, <Wd c={CHALK} s={24}>not free of wood and fire: they are fully there, as the ash</Wd>],
          ["And the seen is its conditions, appearing", 560, 700, <K c={GOLD} s={26}>the seen is its conditions, appearing</K>, { pop: true }],
        ]} />
      </Phase>
      <Phase from="Total exertion is also the hardest taste to put into words" to="The first. Seamless in working, not one Whole">
        <Items items={[
          ["Total exertion is also the hardest taste to put into words", 960, 260, <Wd c={CHALK} s={30}>lived before it can be explained</Wd>],
          ["They point at a taste", 960, 380, <K c={GOLD} s={28}>images point at a taste</K>, { pop: true }],
          ["They are not claims about what the universe is made of", 960, 470, <SK at="But before the images, two things must be made clear" s={24}>claims about what the universe is made of</SK>],
          ["But before the images, two things must be made clear", 960, 620, <Wd c={CHALK} s={32} serif>First, two guards</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const KeyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const open = ramp(t, c("Turn a key in a lock, and the door opens"), 1.5) * (1 - 0.6 * ramp(t, c("Take one away, and there is no opening"), 0.5))
    + 0.6 * ramp(t, c("That is total exertion. The opening, complete"), 0.8);
  const seam = ramp(t, c("With no seam between them"), 0.8);
  return (
    <AbsoluteFill>
      <Items items={[["The first. Seamless in working, not one Whole", 960, 90, <Wd c={TEAL} s={42} serif>Seamless in working, not one Whole</Wd>]]} />
      <At x={560} y={520} o={1 - ramp(t, c("And it runs both ways"), 0.5)}><Door open={Math.min(1, open)} seam={seam} /></At>
      <Phase to="Whatever arises in dependence on something is neither that thing, nor different from it">
        <Items items={[
          ["Turn a key in a lock, and the door opens", 1340, 220, <Wd c={CHALK} s={28}>key · lock · hand · turning · door</Wd>],
          ["With no seam between them", 1340, 290, <K c={TEAL} s={26}>one opening, no seam</K>, { pop: true }],
          ["And nothing works apart", 1340, 360, <Wd c={DIM} s={24}>nothing missing · nothing works apart</Wd>],
          ["But they are not one substance", 1340, 460, <SK at="The key is still metal" s={24}>one substance</SK>],
          ["Not parts of one great Whole", 1340, 520, <SK at="The key is still metal" d={0.2} s={24}>parts of one great Whole</SK>],
          ["Not waves on a single substrate", 1340, 580, <SK at="The key is still metal" d={0.4} s={24}>waves on one substrate</SK>],
          ["The key is still metal", 1340, 660, <Wd c={CHALK} s={24}>metal · flesh · a lock: still themselves</Wd>],
          ["They do not have to be the same stuff to work seamlessly", 1340, 730, <K c={GOLD} s={24}>not the same stuff, yet seamless</K>, { pop: true }],
          ["because none of them has a nature of its own that would block the meeting", 1340, 820, <Wd c={TEAL} s={24}>none has a nature of its own to block the meeting</Wd>],
        ]} />
      </Phase>
      <Phase from="Things with natures of their own could never meet like this" to="All the necessary factors must line up">
        <Items items={[
          ["They would stay outside each other, touching only at their surfaces", 1340, 230, <SK at="Whatever arises in dependence on something is neither that thing, nor different from it" s={24}>stay outside each other</SK>],
          ["Or they would have to melt into one", 1340, 300, <SK at="Whatever arises in dependence on something is neither that thing, nor different from it" d={0.3} s={24}>melt into one</SK>],
          ["Whatever arises in dependence on something is neither that thing, nor different from it", 1340, 420, <Wd c={GOLD} s={30} serif>neither that thing, nor different from it</Wd>],
          ["And so it is neither cut off, nor permanent", 1340, 500, <Wd c={CHALK} s={26}>neither cut off, nor permanent (MMK 18.10)</Wd>],
        ]} />
      </Phase>
      <Phase from="All the necessary factors must line up" to="And it runs both ways">
        <Items items={[
          ["All the necessary factors must line up", 1340, 260, <Wd c={CHALK} s={28}>all the necessary factors line up</Wd>],
          ["Take one away, and there is no opening", 1340, 340, <K c={WARM} s={24}>take one away: no opening</K>, { pop: true }],
          ["That is total exertion. The opening, complete", 1340, 460, <Wd c={GOLD} s={32} serif>the opening, complete</Wd>],
          ["That is total exertion. The opening, complete", 1340, 530, <Wd c={CHALK} s={24}>nothing held back behind it</Wd>, { d: 0.8 }],
          ["It does not mean the whole cosmos has been gathered into the lock", 1340, 640, <SK at="And it runs both ways" d={-0.8} s={24}>the cosmos gathered into the lock</SK>],
        ]} />
      </Phase>
      <Phase from="And it runs both ways" to="The second. Designated together, without a given">
        <Items items={[
          ["A key is a key only with a lock", 960, 210, <Wd c={CHALK} s={30}>a key is a key only with a lock</Wd>],
          ["Holism puts a Whole behind the parts", 560, 380, <SK at="There is just the opening, complete" s={28}>a Whole behind the parts</SK>],
          ["The opposite habit makes the parts the real stuff, and the opening a mere name", 1360, 380, <SK at="There is just the opening, complete" d={0.3} s={28}>the parts as the real stuff</SK>],
          ["There is just the opening, complete", 960, 520, <Wd c={GOLD} s={36} serif>just the opening, complete</Wd>],
          ["And the factors, designated together with it", 960, 590, <Wd c={CHALK} s={26}>and the factors, designated together with it</Wd>],
          ["So seamless working does not mean wholeness, in the sense of holism", 960, 700, <K c={TEAL} s={26}>seamless: empty, and dependently arising · not holism</K>, { pop: true }],
          ["That is all. And it is enough", 960, 790, <Wd c={DIM} s={26}>that is all, and it is enough</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const NamingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["The second. Designated together, without a given", 960, 90, <Wd c={VIOLET} s={42} serif>Designated together, without a given</Wd>]]} />
      <Phase to="I mean that rower and boat stand out as rower and boat only in the one rowing">
        <Items items={[
          ["I do not mean two things already there, with names stuck on afterwards", 560, 330, <SK at="That would be the given again" s={26}>"rower" + "boat": labels on things</SK>],
          ["Nor do I mean one seamless stuff, which names then cut into pieces", 1360, 330, <SK at="That would be the given again" d={0.3} s={26}>one stuff, cut up by names</SK>],
          ["That would be the given again", 960, 480, <Wd c={WARM} s={28}>the given again: as many, or as one</Wd>],
        ]} />
      </Phase>
      <Phase from="I mean that rower and boat stand out as rower and boat only in the one rowing" to="And the basis is not found either">
        <At x={960} y={400} o={1}><Rower glow={ramp(t, c("The singling out is part of the appearing"), 0.8)} /></At>
        <Items items={[
          ["I mean that rower and boat stand out as rower and boat only in the one rowing", 960, 200, <Wd c={CHALK} s={28}>rower and boat stand out only in the one rowing</Wd>],
          ["The singling out is part of the appearing", 960, 640, <K c={GOLD} s={26}>singling out is part of the appearing</K>, { pop: true }],
          ["It needs no words", 520, 760, <Wd c={CHALK} s={24}>needs no words: the bee, the baby</Wd>],
          ["And it makes nothing", 1400, 760, <Wd c={CHALK} s={24}>makes nothing: not mind, not words</Wd>],
          ["Nor does anyone stand outside, doing the designating", 960, 830, <K c={TEAL} s={24}>no designator outside · the seer in the seen, the seen in the seer</K>, { pop: true }],
        ]} />
      </Phase>
      <Phase from="And the basis is not found either" to="Each of">
        <Items items={[
          ["And the basis is not found either", 960, 220, <Wd c={CHALK} s={30}>the basis is not found either</Wd>],
          ["But the parts are not a given base", 960, 290, <Wd c={DIM} s={24}>the chariot's parts: designated too</Wd>],
          ["And no floor is ever reached", 960, 360, <K c={WARM} s={24}>no floor is ever reached</K>, { pop: true }],
          ["Dependent arising is emptiness", 960, 470, <Wd c={GOLD} s={30} serif>dependent arising = emptiness</Wd>],
          ["That is designation in dependence", 960, 530, <Wd c={GOLD} s={30} serif>= designation in dependence</Wd>],
          ["And that is the Middle Way", 960, 590, <Wd c={GOLD} s={30} serif>= the Middle Way (MMK 24.18)</Wd>],
          ["This is why Section 1 came first", 960, 700, <Wd c={CHALK} s={28}>why Section 1 came first</Wd>],
          ["designation can only be heard as labels on raw stuff", 960, 770, <Wd c={DIM} s={24}>with a given: labels on raw stuff · without one: part of the appearing</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const ThreeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Each of", 960, 100, <Wd c={CHALK} s={42} serif>Three ways of seeing</Wd>],
      ["And I find it helps to see all three at once", 960, 180, <Wd c={DIM} s={26}>all three at once</Wd>],
      ["The substantialist way", 400, 360, <Box c={WARM} w={500} title="substantialist" sub="things on their own; the event between them" />, { pop: true }],
      ["the watcher, the doer, the seeker, is not found", 960, 360, <Box c={ICE} w={500} title="anatta" sub="no watcher, doer or seeker: just seeing, rowing, swimming" />, { pop: true }],
      ["The way of dependent arising", 1520, 360, <Box c={GOLD} w={500} title="dependent arising" sub="complete as its conditions, designated together" />, { pop: true }],
      ["Here the taste of total exertion is direct, and obvious", 1520, 520, <K c={GOLD} s={24}>total exertion: direct, obvious</K>, { pop: true }],
      ["These are not three stages that I have to climb", 960, 650, <SK at="With a keen eye, all three show in the same image, at the same time" s={26}>three stages to climb</SK>],
      ["With a keen eye, all three show in the same image, at the same time", 960, 760, <Wd c={GOLD} s={32} serif>one image, all three, at the same time</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. When the door opens, do I meet a key that opens it alone", 400, 260, <Box c={ICE} w={500} title="Experience" sub="a key alone? a Whole behind it?" />, { pop: true }],
      ["What is met is the opening, complete", 400, 400, <Wd c={CHALK} s={24}>the opening, complete</Wd>],
      ["By logic. If the key had a nature of its own", 960, 260, <Box c={VIOLET} w={500} title="Logic" sub="own nature: outside, or merged" />, { pop: true }],
      ["Neither the same, nor different", 960, 400, <Wd c={CHALK} s={24}>neither the same, nor different</Wd>],
      ["By working. Nothing works the less for this", 1520, 260, <Box c={TEAL} w={500} title="Working" sub="no essence, no Whole" />, { pop: true }],
      ["The key opens the door, every time", 1520, 400, <Wd c={CHALK} s={24}>the key opens the door, every time</Wd>],
      ["So the view of separate things linked by conditions", 960, 540, <Wd c={CHALK} s={28} serif>separate things, or one great Whole: not the truer view</Wd>],
      ["Both are the default, carried by habit, and by nouns", 960, 610, <Wd c={GOLD} s={28} serif>the default, carried by habit and nouns</Wd>],
      ["I turn the key. The door opens", 960, 710, <K c={GREEN} s={26}>I turn the key · the door opens</K>, { pop: true }],
      ["What fails is only a key, a door, or a cosmos, standing on its own", 960, 790, <Wd c={DIM} s={24}>what fails: a key, a door or a cosmos standing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And the boat that carries its rower, where no doer stands behind the act");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 6 of the Dependent Arising series", 960, 150, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 6</Wd>],
        ["In Part 7, I take", 960, 230, <Wd c={DIM} s={26}>next, Part 7: Dōgen: The Shore and the Boat</Wd>],
        ["The shore that seems to move, where no seat is left outside", 620, 420, <Box c={ICE} w={520} title="the shore" sub="no seat left outside" />, { pop: true }],
        ["And the boat that carries its rower, where no doer stands behind the act", 1300, 420, <Box c={WARM} w={520} title="the boat" sub="no doer behind the act" />, { pop: true }],
      ]} />
      <At x={960} y={720} o={ramp(t, c("And the boat that carries its rower, where no doer stands behind the act"), 0.8)}><Rower /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Ash is just ash", "ember", <OpenScene />],
    ["In Part 5, I asked what experience is like when no layer is left", "dusk", <QuestionScene />],
    ["had a name for this. Total exertion", "whole", <ExertionScene />],
    ["The first. Seamless in working, not one Whole", "door", <KeyScene />],
    ["The second. Designated together, without a given", "river", <NamingScene />],
    ["Each of", "three", <ThreeScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 6 of the Dependent Arising series", "night", <CloseScene />],
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
