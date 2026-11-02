// After Anatta · Explorations: Mind and Consciousness: Both Are Also Singled Out (thusness-website after-anatta/mind-singled-out.html,
// aa-mind-singled-out, the Explorations topic on mind, consciousness and luminosity; EBooks Bonus Articles/mind-is-singled-out-too).
// Arc: a thought picked out -> why not "mind is the empty vivid appearing" -> singling out is the appearing (the blue world)
// -> mind singled out too, cut four ways -> matter too, the Hard Problem's bridge -> all phenomena; clarity never absent,
// not the floor -> "appearances are one's radiance clarity": owner, source, stuff -> bare attention gives the taste, not the
// view -> the path after anatta: anatta, desynchronisation, syncing the view (sadness), relaxing, spontaneous perfection ->
// the habit and the matrix -> Nāgārjuna, Dzogchen, Mahāmudrā -> spontaneous presence is dependent arising (firewood and
// ash; not summer becomes winter) -> two guards -> try it.
// Stance: a Mind behind, a witness, a source, a floor, a singler, a bridge and a keeper are drawn only to be struck. What
// appears stays drawn and vivid. Nothing is drawn as a ground, a web or a light behind; "one appearing" is never drawn as
// a whole under its parts.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, Flow, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal, Ring,
  Scene, Snowflake, Strike, Sun, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // opening
  "Notice a thought", "has been picked out", "the sound in the room", "the feeling in the chest", "This is After Anatta",
  // the question
  "People often expect me to say it", "what remains is vivid appearing, clear and knowing",
  "Why not say that mind is the empty vivid appearing", "Because mind too is singled out", "and designated",
  "It is the same move that once made the Witness, the Source and the Mirror", "The cut is quietly promoted to the whole",
  "So I do not give mind that place", "Not mind, not matter, not clarity, and not emptiness",
  // singling out
  "Start with what singling out is", "Designation does not need words", "This sound, this colour, this ache",
  "A \"this\" stands out only against what it is not", "In a world of only blue, no one would see blue",
  "It is the appearing", "By appearing, a thing is already empty", "things seem to stand by themselves",
  "That seeming is the habit",
  // mind singled out
  "The trouble starts when we turn the same seeing", "Mind is one of the things singled out", "no one stands behind it",
  "the doer and the deed arise together", "A singler standing behind would be the witness again",
  "Its characteristics and its behaviour are not its own",
  // four cuts
  "Look at how differently mind is cut", "In everyday talk", "counted and classified", "six for the senses",
  "In neuroscience, mind is brain activity", "Each of these works", "A friend can comfort with the first",
  "A doctor can treat with the fourth", "because no such mind is found",
  "That is what I mean when I say mind is designated", "It does not mean mind is a mere word",
  "arises together with the act that singles it out",
  // matter
  "The same holds the other way", "Matter is not stuff standing by itself", "A table is singled out",
  "A physicist singles it out as molecules", "The cook, the chemist and the physicist cut the same loaf differently",
  "an old puzzle loosens", "The Hard Problem asks", "Then it asks for a bridge between them", "No bridge is found",
  "One caution about the word", "It does not mean a whole lying underneath its parts", "So I do not say all is mind",
  "They are two ways the appearing is singled out",
  // phenomena
  "So mind, consciousness and luminous clarity are the same in this respect", "A phenomenon is whatever can be known",
  "So they are dependently arisen, and empty like everything else",
  "This needs care, because I also say that clarity is never absent", "Every appearing is clear, known as it appears",
  "Dependent arising is never a mechanism in the dark", "It does not mean an awareness that stays switched on",
  "nothing appears, and no clarity is left over",
  // not the floor
  "And clarity being never absent is not the same as clarity being the floor",
  "Its sameness across sights, sounds and thoughts is easily lifted out", "as a background, or a Mind that gives off appearances",
  "Not lifted out, the clarity stays", "Lifted out and held", "it becomes the last refuge of the self",
  "So I put it this way", "it is one more phenomenon", "Not the thing all phenomena are made of",
  // radiance
  "There was a very key phase in my own insight", "It came between phase four", "and phase five, no mirror reflecting",
  "It is a direct taste", "the distance between knower and known collapses", "I do not deny any of it",
  "But it misses something", "Listen to the words", "keeps an owner", "pictures a source and what it gives off",
  "quietly becomes the stuff that appearances are made of", "but the framework reading it was still inherent",
  "This was the first desynchronisation I met", "the taste ahead of the view", "The taste was not wrong", "Its reading was",
  // bare attention
  "Many practices work by quieting the symbolic layer", "Bare attention, bare awareness, naked awareness",
  "I do not dismiss this", "Bare attention is one part of the training", "is another insight again",
  "in my view that whole course is completed", "In seeing, only the seen",
  "What quieting the symbolic layer does not do", "The clarity becomes a ground", "The presence becomes a universal substance",
  "The openness becomes a field", "Quieting words does not reach it", "Seeing it does", "So concepts are not the enemy",
  "The cure is understanding the habit",
  // the path
  "So what is needed after anatta is not more bare attention", "It is work on the view", "and it goes round more than once",
  "First, anatta itself", "There is thinking, and no thinker", "But anatta removes the one who watches",
  "the space they seem to sit in",
  "So the next stage is a strange one", "but the framework that reads it is still substantialist",
  "The self has dissolved, but the universe has not", "Space sits as a container", "Time runs like a conveyor belt",
  "quietly becomes a subtle ground", "The danger is that it feels complete", "becomes a reason not to look",
  "Then refining and syncing the view", "Get familiar with the logic and the tools of dismantling",
  "the search for what is designated", "the four corners", "Not as beliefs to hold, but as tools to use",
  "Catch the framework while it is working", "Take sadness", "arrives as one solid fact", "A weight in the chest",
  "A sinking", "A thought replaying", "A face that comes to mind", "None is the mind those words placed underneath them",
  "was the cut that tied them together",
  "Then taste relaxing into openness", "Bare attention strips things away to reach a seeing", "Relaxing lets go of a holding",
  "Nothing is reached, and nothing is kept", "Maintenance would be the split again", "This takes time",
  "And in time, the veil dissipates with clear seeing", "It is not torn away", "Appearing presents itself",
  "That is spontaneous perfection", "Mind and matter lose their weight", "None of this is a state that is kept",
  "Without the tools, the taste is read back into a ground", "Without the taste, the tools stay dry",
  // habit and matrix
  "So two things work together", "by default we see inherently", "We designate that habit as ignorance",
  "And the framework, the matrix", "mind and matter, subject and object, cause and effect",
  "The matrix is not a field beneath appearances", "The trouble is never that we single out", "as the joints of the world",
  // orthodox
  "How does this stand with", "whatever arises dependently is empty, with no exception for mind",
  "you cannot keep the mind and throw out the objects", "Searched for, neither is found", "read without a ground",
  "the ground is called a ground only from a relative point of view", "Refusing to make clarity the floor",
  // ordinary mind
  "On one question my reading is closer to", "Ordinary mind is appearing held by the habit of fixing",
  "is the same appearing known without that fixing", "One mind, held two ways", "is the truth body",
  "separates the two more sharply, and rightly", "But separating them is discerning, not finding two things",
  "it too is designated",
  // spontaneous presence
  "This links to what I have long said", "spontaneous presence is dependent arising",
  "In the appearing itself, they are not even two", "this condition, that condition, this result",
  "is the same appearing when the fixing stops", "One appearing, described two ways, at the same time", "Neither is higher",
  "In practice, they can come in an order", "Often the tools come first, and the taste after",
  "Firewood is complete in its own position", "Ash is complete in its own position", "Neither is a lesser stage of the other",
  "any more than we say summer becomes winter", "Nothing crosses from one to the other", "And each refines our reading of the other",
  "is heard as a source", "is heard as a mechanism", "Together, they keep each other honest",
  // guards
  "Two guards, to end", "is singled out too", "it becomes the next floor", "And nothing is lost", "The brain still matters",
  "What is denied is only a mind standing on its own side",
  // try it
  "Try it", "Notice a thought, and see that it has been singled out", "Now notice the mind that knows the thought",
  "Then do the same with this hand, and this table", "And if a sense of luminous presence comes",
  "is this clarity standing on its own, behind what appears", "and empty too", "Then let go of the holding",
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
  blue: { a: "rgba(30,70,170,0.6)", b: "rgba(40,90,190,0.5)", c: "rgba(20,50,140,0.45)" },
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
/** A chip struck through at `strikeAt`: only for what is never found (a Mind behind, a source, a floor, a bridge, a keeper). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
/** A dashed ring that draws round something at `at`: the act of singling out. */
const Pick: React.FC<{ at: number; w: number; h: number; color?: string }> = ({ at, w, h, color = GOLD }) => {
  const { t } = useT();
  const p = ramp(t, at, 0.8);
  const len = 2 * Math.PI * Math.sqrt((w * w + h * h) / 8);
  return (
    <svg width={w + 20} height={h + 20} style={{ overflow: "visible", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
      <ellipse cx={(w + 20) / 2} cy={(h + 20) / 2} rx={w / 2} ry={h / 2} fill="none" stroke={color} strokeWidth={4}
        strokeDasharray={`${len * p} ${len}`} style={{ filter: `drop-shadow(0 0 10px ${color})` }} />
    </svg>
  );
};

/** The path after anatta: four stages, the active one lit. */
const STAGES = ["anatta", "desynchronisation", "syncing the view", "spontaneous perfection"];
const PathStrip: React.FC<{ active: number }> = ({ active }) => (
  <svg width={1500} height={90} viewBox="0 0 1500 90" style={{ overflow: "visible" }}>
    {STAGES.map((s, i) => {
      const x = 90 + i * 440;
      const on = i === active;
      return (
        <g key={s}>
          {i < 3 && <line x1={x + 160} y1={45} x2={x + 280} y2={45} stroke={DIM} strokeWidth={3} markerEnd="" />}
          {i < 3 && <path d={`M${x + 270} 37 L${x + 282} 45 L${x + 270} 53`} fill="none" stroke={DIM} strokeWidth={3} />}
          <rect x={x - 150} y={12} width={310} height={66} rx={33} fill={on ? "rgba(228,194,122,0.22)" : "rgba(241,236,224,0.05)"}
            stroke={on ? GOLD : DIM} strokeWidth={on ? 4 : 2} />
          <text x={x + 5} y={53} textAnchor="middle" fontFamily="SourceSans" fontSize={on ? 26 : 23} fill={on ? GOLD : DIM}>{s}</text>
        </g>
      );
    })}
  </svg>
);

/** A table. */
const Table: React.FC = () => (
  <svg width={360} height={220} viewBox="0 0 360 220" style={{ overflow: "visible" }}>
    <rect x={20} y={40} width={320} height={26} rx={6} fill="rgba(228,194,122,0.25)" stroke={GOLD} strokeWidth={5} />
    <path d="M50 66 V200 M310 66 V200" stroke={GOLD} strokeWidth={8} />
  </svg>
);
/** A loaf. */
const Loaf: React.FC = () => (
  <svg width={300} height={160} viewBox="0 0 360 200" style={{ overflow: "visible" }}>
    <path d="M30 170 Q30 50 180 50 Q330 50 330 170 Z" fill="rgba(228,194,122,0.28)" stroke={GOLD} strokeWidth={5} />
    {[110, 170, 230].map((x) => <path key={x} d={`M${x} 70 q20 18 40 0`} fill="none" stroke={WARM} strokeWidth={4} />)}
    <line x1={20} y1={172} x2={340} y2={172} stroke={DIM} strokeWidth={3} />
  </svg>
);
/** A bridge between two banks; `gone` (0..1) fades the span. */
const Bridge: React.FC<{ gone?: number }> = ({ gone = 0 }) => (
  <svg width={700} height={200} viewBox="0 0 700 220" style={{ overflow: "visible" }}>
    <rect x={0} y={120} width={150} height={100} fill="rgba(241,236,224,0.1)" stroke={DIM} strokeWidth={4} />
    <rect x={550} y={120} width={150} height={100} fill="rgba(241,236,224,0.1)" stroke={DIM} strokeWidth={4} />
    <g opacity={1 - gone}>
      <path d="M150 120 Q350 20 550 120" fill="none" stroke={GOLD} strokeWidth={8} />
      <line x1={150} y1={120} x2={550} y2={120} stroke={GOLD} strokeWidth={6} />
    </g>
  </svg>
);
/** Firewood: three logs. */
const Firewood: React.FC = () => (
  <svg width={260} height={150} viewBox="0 0 260 150" style={{ overflow: "visible" }}>
    {[0, 1, 2].map((i) => (
      <g key={i} transform={`translate(${i === 2 ? 70 : i * 120 + 10} ${i === 2 ? 20 : 80})`}>
        <rect x={0} y={0} width={140} height={46} rx={23} fill="rgba(200,140,80,0.3)" stroke={WARM} strokeWidth={5} />
        <ellipse cx={140} cy={23} rx={14} ry={23} fill="rgba(228,194,122,0.35)" stroke={GOLD} strokeWidth={4} />
      </g>
    ))}
  </svg>
);
/** A small heap of ash. */
const Ash: React.FC = () => (
  <svg width={260} height={150} viewBox="0 0 260 150" style={{ overflow: "visible" }}>
    <path d="M20 130 Q130 20 240 130 Z" fill="rgba(200,200,210,0.25)" stroke={CHALK} strokeWidth={4} />
    {[70, 110, 150, 190].map((x, i) => <circle key={x} cx={x} cy={110 - (i % 2) * 18} r={4} fill={DIM} />)}
  </svg>
);
/** A veil that thins with `gone` (0..1). */
const Veil: React.FC<{ gone: number }> = ({ gone }) => {
  const { t } = useT();
  return (
    <svg width={900} height={300} viewBox="0 0 900 300" style={{ overflow: "visible" }} opacity={0.75 * (1 - gone)}>
      {Array.from({ length: 9 }).map((_, i) => (
        <path key={i} d={`M${i * 100 + 20} 0 Q${i * 100 + 60 + 20 * Math.sin(t + i)} 150 ${i * 100 + 20} 300`}
          fill="none" stroke={VIOLET} strokeWidth={14} opacity={0.5} />
      ))}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const aa = c("This is After Anatta");
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, 0.4, 0.6) * (1 - ramp(t, aa + 2.5, 0.6))}>
        <div style={{ position: "relative" }}>
          <K c={GOLD} s={40}>a thought</K>
          <Pick at={c("has been picked out")} w={300} h={110} />
        </div>
      </At>
      <Items items={[
        ["the sound in the room", 560, 600, <K c={DIM} s={28}>the sound in the room</K>, { until: "This is After Anatta", ud: 2.5 }],
        ["the feeling in the chest", 1360, 600, <K c={DIM} s={28}>the feeling in the chest</K>, { until: "This is After Anatta", ud: 2.5 }],
      ]} />
      <At x={960} y={420} o={ramp(t, aa + 2.8, 0.8)}><Wd c={CHALK} s={60} serif>Mind and Consciousness: Both Are Also Singled Out</Wd></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const c = useCue();
  const move = c("It is the same move that once made the Witness, the Source and the Mirror");
  return (
    <AbsoluteFill>
      <Items items={[
        ["People often expect me to say it", 960, 120, <Wd c={CHALK} s={36} serif>why not call it mind?</Wd>],
        ["what remains is vivid appearing, clear and knowing", 960, 230, <K c={TEAL} s={30}>vivid appearing, clear and knowing</K>],
        ["Why not say that mind is the empty vivid appearing", 960, 350,
          <SK strikeAt={c("Because mind too is singled out") + 0.5} c={GOLD} s={32}>"mind is the empty vivid appearing"</SK>],
        ["Because mind too is singled out", 960, 450, <Wd c={TEAL} s={34}>mind too is singled out, and designated</Wd>],
        ["It is the same move that once made the Witness, the Source and the Mirror", 560, 570, <SK strikeAt={move + 2} c={DIM} s={28}>the Witness</SK>],
        ["It is the same move that once made the Witness, the Source and the Mirror", 960, 570, <SK strikeAt={move + 2.3} c={DIM} s={28}>the Source</SK>, { d: 0.6 }],
        ["It is the same move that once made the Witness, the Source and the Mirror", 1360, 570, <SK strikeAt={move + 2.6} c={DIM} s={28}>the Mirror</SK>, { d: 1.2 }],
        ["The cut is quietly promoted to the whole", 960, 660, <Wd c={ROSE} s={28}>a cut promoted to the whole</Wd>],
        ["Not mind, not matter, not clarity, and not emptiness", 960, 770, <Wd c={GOLD} s={30}>no cut gets that place: not mind, matter, clarity or emptiness</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SinglingScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const blue = c("In a world of only blue, no one would see blue");
  const after = c("It is the appearing");
  const items: [string, string, number][] = [["this sound", TEAL, 560], ["this colour", GOLD, 960], ["this ache", ROSE, 1360]];
  return (
    <AbsoluteFill>
      <Items items={[["Start with what singling out is", 960, 110, <Wd c={CHALK} s={38} serif>singling out</Wd>]]} />
      <Items items={[["Designation does not need words", 960, 200, <Wd c={DIM} s={28}>designation needs no words</Wd>]]} />
      {items.map(([n, col, x], i) => (
        <At key={n} x={x} y={360} o={ramp(t, c("This sound, this colour, this ache") + 0.5 * i, 0.5) * (1 - ramp(t, blue, 0.5))}>
          <div style={{ position: "relative" }}><K c={col} s={32}>{n}</K><Pick at={c("This sound, this colour, this ache") + 0.5 * i + 0.3} w={240} h={90} color={col} /></div>
        </At>
      ))}
      <Items items={[
        ["A \"this\" stands out only against what it is not", 960, 480, <Wd c={DIM} s={28}>a "this" stands out only against what it is not</Wd>, { until: "In a world of only blue, no one would see blue" }],
      ]} />
      <At x={960} y={420} o={ramp(t, blue, 0.6) * (1 - ramp(t, after, 0.6))}>
        <div style={{ width: 760, height: 300, borderRadius: 18, background: "rgba(50,100,220,0.55)", boxShadow: "0 0 60px rgba(60,120,240,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Wd c={CHALK} s={34}>only blue: no one would see blue</Wd>
        </div>
      </At>
      <Items items={[
        ["It is the appearing", 960, 330, <Wd c={TEAL} s={44} serif>singling out is the appearing</Wd>],
        ["By appearing, a thing is already empty", 960, 440, <K c={GOLD} s={32}>by appearing, already empty</K>],
        ["things seem to stand by themselves", 960, 560, <Wd c={DIM} s={28}>to us, things seem to stand by themselves</Wd>],
        ["That seeming is the habit", 960, 640, <Wd c={ROSE} s={30}>that seeming is the habit</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MindScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The trouble starts when we turn the same seeing", 960, 120, <Wd c={CHALK} s={36} serif>turn the seeing on the one singling out</Wd>],
        ["Mind is one of the things singled out", 960, 250, <K c={TEAL} s={34}>mind: one of the things singled out</K>],
        ["no one stands behind it", 960, 370, <SK strikeAt={c("no one stands behind it") + 0.8} c={DIM} s={30}>a singler behind the singling</SK>],
        ["the doer and the deed arise together", 960, 480, <Wd c={GOLD} s={30}>act, what is singled out, and mind arise together · MMK 8</Wd>],
        ["A singler standing behind would be the witness again", 960, 570, <Wd c={DIM} s={26}>a singler behind would be the witness again</Wd>],
        ["Its characteristics and its behaviour are not its own", 960, 690, <Wd c={CHALK} s={30}>its traits fit the framework that cuts it</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CutsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cuts: [string, string, string, number, number][] = [
    ["In everyday talk", "everyday: my thoughts, my feelings", GOLD, 560, 300],
    ["counted and classified", "Abhidharma: mind-moments and factors", TEAL, 1360, 300],
    ["six for the senses", "Yogācāra: eight consciousnesses", VIOLET, 560, 450],
    ["In neuroscience, mind is brain activity", "neuroscience: networks and signals", ICE, 1360, 450],
  ];
  const out = 1 - ramp(t, c("That is what I mean when I say mind is designated"), 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["Look at how differently mind is cut", 960, 120, <Wd c={CHALK} s={38} serif>"mind", cut four ways</Wd>]]} />
      <At x={960} y={375} o={ramp(t, c("Look at how differently mind is cut"), 0.6) * out}><K c={CHALK} s={30}>mind</K></At>
      {cuts.map(([cue, label, col, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5) * out}><K c={col} s={24}>{label}</K></At>
      ))}
      {cuts.map(([cue, , col, x, y]) => (
        <Flow key={cue + "f"} x1={960} y1={375} x2={x} y2={y} color={col} p={ramp(t, c(cue), 0.8) * out} />
      ))}
      <Items items={[
        ["Each of these works", 960, 580, <Wd c={GREEN} s={30}>each works: a friend, a meditator, a doctor</Wd>, { until: "That is what I mean when I say mind is designated" }],
        ["because no such mind is found", 960, 670, <SK strikeAt={c("because no such mind is found") + 0.6} c={DIM} s={28}>mind as it is from its own side</SK>, { until: "That is what I mean when I say mind is designated" }],
        ["That is what I mean when I say mind is designated", 960, 300, <Wd c={TEAL} s={44} serif>designated</Wd>],
        ["It does not mean mind is a mere word", 960, 420, <SK strikeAt={c("It does not mean mind is a mere word") + 1} c={DIM} s={28}>a mere word</SK>],
        ["arises together with the act that singles it out", 960, 540, <Wd c={GOLD} s={30}>its edges, unity and properties arise with the singling out</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MatterScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const puzzle = c("an old puzzle loosens");
  const caution = c("One caution about the word");
  const first = 1 - ramp(t, puzzle, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The same holds the other way", 960, 110, <Wd c={CHALK} s={38} serif>matter is singled out too</Wd>, { until: "an old puzzle loosens" }],
        ["Matter is not stuff standing by itself", 960, 190, <SK strikeAt={c("A table is singled out")} c={DIM} s={26}>stuff standing by itself</SK>, { until: "an old puzzle loosens" }],
      ]} />
      <At x={480} y={420} o={ramp(t, c("A table is singled out"), 0.6) * first}><div style={{ position: "relative" }}><Table /><Pick at={c("A table is singled out") + 0.3} w={400} h={260} /></div></At>
      <Items items={[
        ["A table is singled out", 480, 600, <K c={GOLD} s={24}>eye, hand and use</K>, { until: "an old puzzle loosens" }],
        ["A physicist singles it out as molecules", 480, 680, <K c={ICE} s={24}>molecules, fields, probabilities</K>, { until: "an old puzzle loosens" }],
      ]} />
      <At x={1400} y={420} o={ramp(t, c("The cook, the chemist and the physicist cut the same loaf differently"), 0.6) * first}><Loaf /></At>
      <Items items={[
        ["The cook, the chemist and the physicist cut the same loaf differently", 1400, 580, <K c={WARM} s={24}>cook · chemist · physicist</K>, { until: "an old puzzle loosens" }],
        ["an old puzzle loosens", 960, 120, <Wd c={CHALK} s={38} serif>the Hard Problem</Wd>, { until: "One caution about the word" }],
        ["The Hard Problem asks", 600, 300, <K c={ICE} s={28}>matter</K>, { until: "One caution about the word" }],
        ["The Hard Problem asks", 1320, 300, <K c={VIOLET} s={28}>mind</K>, { d: 0.5, until: "One caution about the word" }],
      ]} />
      <At x={960} y={420} o={ramp(t, c("Then it asks for a bridge between them"), 0.6) * (1 - ramp(t, caution, 0.5))}>
        <Bridge gone={ramp(t, c("No bridge is found") + 0.5, 1.2)} />
      </At>
      <Items items={[
        ["No bridge is found", 960, 600, <Wd c={TEAL} s={30}>the gap was made by the starting point</Wd>, { until: "One caution about the word" }],
        ["One caution about the word", 960, 200, <Wd c={CHALK} s={34} serif>"one appearing" means "not two"</Wd>],
        ["It does not mean a whole lying underneath its parts", 960, 310, <SK strikeAt={c("It does not mean a whole lying underneath its parts") + 1} c={DIM} s={28}>a whole lying under its parts</SK>],
        ["So I do not say all is mind", 640, 450, <SK strikeAt={c("So I do not say all is mind") + 0.6} c={DIM} s={28}>all is mind</SK>],
        ["So I do not say all is mind", 1280, 450, <SK strikeAt={c("So I do not say all is mind") + 1.8} c={DIM} s={28}>all is matter</SK>, { d: 1.2 }],
        ["They are two ways the appearing is singled out", 960, 580, <Wd c={GOLD} s={32}>two ways the appearing is singled out</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PhenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const care = c("This needs care, because I also say that clarity is never absent");
  const words: [string, string, number][] = [["mind", VIOLET, 560], ["consciousness", TEAL, 960], ["luminous clarity", GOLD, 1360]];
  return (
    <AbsoluteFill>
      <Items items={[["So mind, consciousness and luminous clarity are the same in this respect", 960, 110, <Wd c={CHALK} s={38} serif>all phenomena</Wd>]]} />
      {words.map(([w, col, x], i) => (
        <At key={w} x={x} y={260} o={ramp(t, c("So mind, consciousness and luminous clarity are the same in this respect") + 0.4 * i, 0.5) * (1 - ramp(t, care, 0.5))}>
          <K c={col} s={30}>{w}</K>
        </At>
      ))}
      <Items items={[
        ["A phenomenon is whatever can be known", 960, 380, <Wd c={TEAL} s={32}>a phenomenon is whatever can be known</Wd>, { until: "This needs care, because I also say that clarity is never absent" }],
        ["So they are dependently arisen, and empty like everything else", 960, 480, <Wd c={DIM} s={28}>dependently arisen, empty like everything else</Wd>, { until: "This needs care, because I also say that clarity is never absent" }],
        ["This needs care, because I also say that clarity is never absent", 960, 260, <Wd c={GOLD} s={42} serif>clarity is never absent</Wd>],
        ["Every appearing is clear, known as it appears", 960, 370, <Wd c={CHALK} s={30}>every appearing is clear, known as it appears</Wd>],
        ["Dependent arising is never a mechanism in the dark", 960, 460, <SK strikeAt={c("Dependent arising is never a mechanism in the dark") + 1} c={DIM} s={26}>a mechanism in the dark, lit up later</SK>],
        ["It does not mean an awareness that stays switched on", 960, 570, <SK strikeAt={c("It does not mean an awareness that stays switched on") + 1} c={DIM} s={26}>an awareness that stays switched on</SK>],
        ["nothing appears, and no clarity is left over", 960, 680, <Wd c={ICE} s={28}>under anaesthesia: nothing appears, nothing left over</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FloorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lift = c("Its sameness across sights, sounds and thoughts is easily lifted out");
  const not = c("Not lifted out, the clarity stays");
  const streams: [string, string][] = [["sights", GOLD], ["sounds", TEAL], ["thoughts", VIOLET]];
  const up = ramp(t, lift, 1.2) * (1 - ramp(t, not, 1));
  return (
    <AbsoluteFill>
      <Items items={[["And clarity being never absent is not the same as clarity being the floor", 960, 110, <Wd c={CHALK} s={36} serif>never absent is not the floor</Wd>]]} />
      {streams.map(([n, col], i) => (
        <At key={n} x={560 + i * 400} y={600} o={ramp(t, lift + 0.3 * i, 0.5)}><K c={col} s={28}>{n}</K></At>
      ))}
      {streams.map(([n], i) => <Flow key={n} x1={560 + i * 400} y1={570} x2={960} y2={300} color={DIM} p={up} />)}
      <Items items={[
        ["as a background, or a Mind that gives off appearances", 960, 280,
          <SK strikeAt={c("as a background, or a Mind that gives off appearances") + 1.5} c={GOLD} s={30}>a background · a Mind behind</SK>, { until: "Not lifted out, the clarity stays", ud: 1 }],
        ["Not lifted out, the clarity stays", 960, 300, <Wd c={TEAL} s={34}>left as it is: the appearing's own</Wd>, { d: 1, until: "So I put it this way" }],
        ["it becomes the last refuge of the self", 960, 420, <Wd c={ROSE} s={28}>lifted out and held: the last refuge of the self</Wd>, { until: "So I put it this way" }],
        ["So I put it this way", 960, 300, <Wd c={GOLD} s={36} serif>never missing from what appears</Wd>],
        ["it is one more phenomenon", 960, 410, <K c={TEAL} s={30}>named: one more phenomenon</K>],
        ["Not the thing all phenomena are made of", 960, 500, <SK strikeAt={c("Not the thing all phenomena are made of") + 0.8} c={DIM} s={26}>the stuff all phenomena are made of</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const RadianceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const words = c("Listen to the words");
  const first = 1 - ramp(t, words, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[["There was a very key phase in my own insight", 960, 120, <Wd c={GOLD} s={42} serif>"appearances are one's radiance clarity"</Wd>]]} />
      <At x={960} y={250} o={ramp(t, c("It came between phase four"), 0.6) * first}>
        <svg width={900} height={80} viewBox="0 0 900 80" style={{ overflow: "visible" }}>
          <line x1={80} y1={40} x2={820} y2={40} stroke={DIM} strokeWidth={3} />
          <circle cx={150} cy={40} r={14} fill={DIM} /><circle cx={750} cy={40} r={14} fill={DIM} />
          <circle cx={450} cy={40} r={16} fill={GOLD} style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }} />
          <text x={150} y={80} textAnchor="middle" fontFamily="SourceSans" fontSize={24} fill={DIM}>phase 4: the mirror</text>
          <text x={750} y={80} textAnchor="middle" fontFamily="SourceSans" fontSize={24} fill={DIM}>phase 5: no mirror</text>
        </svg>
      </At>
      <Items items={[
        ["It is a direct taste", 960, 400, <K c={TEAL} s={30}>a direct taste: luminous, vivid, intimate</K>, { until: "Listen to the words" }],
        ["the distance between knower and known collapses", 960, 500, <Wd c={CHALK} s={28}>knower and known: the distance collapses</Wd>, { until: "Listen to the words" }],
        ["But it misses something", 960, 620, <Wd c={ROSE} s={30}>but it misses something</Wd>, { until: "Listen to the words" }],
        ["keeps an owner", 480, 330, <K c={GOLD} s={30}>"one's"</K>],
        ["keeps an owner", 480, 430, <SK strikeAt={c("keeps an owner") + 1.2} c={DIM} s={24}>an owner</SK>, { d: 0.4 }],
        ["pictures a source and what it gives off", 960, 330, <K c={GOLD} s={30}>"radiance"</K>],
        ["pictures a source and what it gives off", 960, 430, <SK strikeAt={c("pictures a source and what it gives off") + 1.4} c={DIM} s={24}>a source behind</SK>, { d: 0.4 }],
        ["quietly becomes the stuff that appearances are made of", 1440, 330, <K c={GOLD} s={30}>"clarity"</K>],
        ["quietly becomes the stuff that appearances are made of", 1440, 430, <SK strikeAt={c("quietly becomes the stuff that appearances are made of") + 1.6} c={DIM} s={24}>the stuff of things</SK>, { d: 0.4 }],
        ["but the framework reading it was still inherent", 960, 560, <Wd c={CHALK} s={30}>taste non-dual · reading still inherent</Wd>],
        ["This was the first desynchronisation I met", 960, 640, <Wd c={VIOLET} s={30}>the first desynchronisation: taste ahead of view</Wd>],
        ["The taste was not wrong", 960, 740, <Wd c={TEAL} s={32}>the taste was not wrong. Its reading was.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BareScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Many practices work by quieting the symbolic layer", 960, 110, <Wd c={CHALK} s={36} serif>quieting the symbolic layer</Wd>],
        ["Bare attention, bare awareness, naked awareness", 960, 200, <K c={ICE} s={26}>bare attention · bare awareness · naked awareness</K>, { until: "What quieting the symbolic layer does not do" }],
        ["Bare attention is one part of the training", 960, 300, <Wd c={TEAL} s={30}>gives a direct taste of luminous clarity</Wd>, { until: "What quieting the symbolic layer does not do" }],
        ["is another insight again", 960, 380, <Wd c={GOLD} s={28}>radiance clarity: another insight again</Wd>, { until: "What quieting the symbolic layer does not do" }],
        ["in my view that whole course is completed", 960, 480, <K c={GREEN} s={30}>with anatta, that course is completed</K>, { until: "What quieting the symbolic layer does not do" }],
        ["In seeing, only the seen", 960, 580, <Wd c={CHALK} s={34} serif>in seeing, only the seen</Wd>, { until: "What quieting the symbolic layer does not do" }],
        ["What quieting the symbolic layer does not do", 960, 220, <Wd c={ROSE} s={32}>it does not undo the distorted view</Wd>],
        ["The clarity becomes a ground", 560, 340, <SK strikeAt={c("Quieting words does not reach it")} c={DIM} s={24}>clarity as ground</SK>],
        ["The presence becomes a universal substance", 960, 340, <SK strikeAt={c("Quieting words does not reach it") + 0.3} c={DIM} s={24}>presence as substance</SK>],
        ["The openness becomes a field", 1360, 340, <SK strikeAt={c("Quieting words does not reach it") + 0.6} c={DIM} s={24}>openness as field</SK>],
        ["Quieting words does not reach it", 960, 470, <Wd c={CHALK} s={28}>the habit runs deeper than words</Wd>],
        ["Seeing it does", 960, 550, <Wd c={TEAL} s={34}>seeing it does</Wd>],
        ["So concepts are not the enemy", 960, 660, <Wd c={GOLD} s={30}>concepts are not the enemy; silence is not the cure</Wd>],
        ["The cure is understanding the habit", 960, 750, <Wd c={CHALK} s={30}>understand the habit</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const p = c("and it goes round more than once");
  return (
    <AbsoluteFill>
      <Items items={[
        ["So what is needed after anatta is not more bare attention", 960, 160, <Wd c={CHALK} s={38} serif>after anatta: work on the view</Wd>],
        ["It is work on the view", 960, 400, <PathStrip active={-1} />],
      ]} />
      <At x={960} y={520} o={ramp(t, p, 0.6)}>
        <svg width={1300} height={120} viewBox="0 0 1300 120" style={{ overflow: "visible" }}>
          <path d="M1240 20 Q650 130 60 20" fill="none" stroke={TEAL} strokeWidth={3} strokeDasharray="10 10" />
          <path d="M72 10 L58 20 L74 30" fill="none" stroke={TEAL} strokeWidth={3} />
          <text x={650} y={110} textAnchor="middle" fontFamily="SourceSans" fontSize={26} fill={TEAL}>it goes round more than once</text>
        </svg>
      </At>
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={90}><PathStrip active={0} /></At>
      <Items items={[
        ["First, anatta itself", 960, 260, <Wd c={CHALK} s={40} serif>in seeing, only the seen</Wd>],
        ["There is thinking, and no thinker", 960, 360, <SK strikeAt={c("There is thinking, and no thinker") + 0.8} c={DIM} s={28}>a thinker behind</SK>],
        ["But anatta removes the one who watches", 960, 480, <Wd c={TEAL} s={30}>the watcher goes</Wd>],
        ["the space they seem to sit in", 960, 580, <Wd c={DIM} s={28}>the things watched, the moment, space, causes: not yet</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DesyncScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={90}><PathStrip active={1} /></At>
      <Items items={[
        ["So the next stage is a strange one", 960, 230, <Wd c={CHALK} s={36} serif>the same pattern, one level deeper</Wd>],
        ["but the framework that reads it is still substantialist", 960, 320, <Wd c={VIOLET} s={28}>experience without substance · framework still substantialist</Wd>],
        ["The self has dissolved, but the universe has not", 960, 410, <Wd c={GOLD} s={32}>the self has dissolved, the universe has not</Wd>],
        ["Space sits as a container", 520, 520, <K c={ICE} s={24}>space as container</K>],
        ["Time runs like a conveyor belt", 960, 520, <K c={ICE} s={24}>time as conveyor belt</K>],
        ["quietly becomes a subtle ground", 1400, 520, <K c={ROSE} s={24}>awareness as subtle ground</K>],
        ["The danger is that it feels complete", 960, 640, <Wd c={ROSE} s={30}>the danger: it feels complete</Wd>],
        ["becomes a reason not to look", 960, 720, <Wd c={DIM} s={26}>"beyond concepts" as a reason not to look</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const SyncScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const bits: [string, string, number, number][] = [
    ["A weight in the chest", "a weight in the chest", 520, 470],
    ["A sinking", "a sinking", 1400, 470],
    ["A thought replaying", "a thought replaying", 520, 610],
    ["A face that comes to mind", "a face that comes to mind", 1400, 610],
  ];
  const tied = c("was the cut that tied them together");
  return (
    <AbsoluteFill>
      <At x={960} y={90}><PathStrip active={2} /></At>
      <Items items={[
        ["Then refining and syncing the view", 960, 220, <Wd c={CHALK} s={36} serif>the tools of dismantling</Wd>, { until: "Catch the framework while it is working" }],
        ["the search for what is designated", 640, 340, <K c={GOLD} s={26}>search for what is designated</K>, { until: "Catch the framework while it is working" }],
        ["the four corners", 1280, 340, <K c={GOLD} s={26}>the four corners</K>, { until: "Catch the framework while it is working" }],
        ["Not as beliefs to hold, but as tools to use", 960, 460, <Wd c={TEAL} s={30}>tools to use, not beliefs to hold</Wd>, { until: "Catch the framework while it is working" }],
        ["Take sadness", 960, 220, <Wd c={CHALK} s={36} serif>take sadness</Wd>],
        ["arrives as one solid fact", 960, 330, <SK strikeAt={tied} c={VIOLET} s={32}>"my mind is heavy"</SK>],
      ]} />
      {bits.map(([cue, label, x, y]) => (
        <At key={cue} x={x} y={y} o={ramp(t, c(cue), 0.5)}><K c={TEAL} s={26}>{label}</K></At>
      ))}
      {bits.map(([cue, , x, y]) => (
        <Flow key={cue + "f"} x1={960} y1={360} x2={x} y2={y - 20} color={DIM} p={ramp(t, c(cue), 0.6) * (1 - ramp(t, tied, 0.8))} />
      ))}
      <Items items={[
        ["None is the mind those words placed underneath them", 960, 720, <Wd c={CHALK} s={28}>each vivid; none is the mind underneath</Wd>],
        ["was the cut that tied them together", 960, 790, <Wd c={GOLD} s={26}>"my mind": the cut that tied them, taken as found</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RelaxScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={960} y={90}><PathStrip active={2} /></At>
      <Items items={[
        ["Then taste relaxing into openness", 960, 230, <Wd c={TEAL} s={40} serif>relaxing into openness</Wd>],
        ["Bare attention strips things away to reach a seeing", 560, 360, <K c={DIM} s={26}>bare attention: strips away to reach</K>],
        ["Relaxing lets go of a holding", 1360, 360, <K c={TEAL} s={26}>relaxing: lets go of an unfounded holding</K>],
        ["Nothing is reached, and nothing is kept", 960, 480, <Wd c={CHALK} s={30}>nothing reached, nothing kept</Wd>],
        ["Maintenance would be the split again", 960, 580, <SK strikeAt={c("Maintenance would be the split again") + 0.8} c={ROSE} s={28}>a keeper keeping it up</SK>],
        ["This takes time", 960, 700, <Wd c={DIM} s={28}>it takes time; not one argument or one good sitting</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PerfectScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = c("And in time, the veil dissipates with clear seeing");
  return (
    <AbsoluteFill>
      <At x={960} y={90}><PathStrip active={3} /></At>
      <At x={960} y={400} o={ramp(t, v, 0.6)}><Veil gone={ramp(t, v + 1, 6)} /></At>
      <Items items={[
        ["And in time, the veil dissipates with clear seeing", 960, 230, <Wd c={CHALK} s={36} serif>the veil dissipates with clear seeing</Wd>],
        ["It is not torn away", 960, 320, <Wd c={DIM} s={26}>not torn away; nothing hidden behind it</Wd>],
        ["Appearing presents itself", 960, 420, <Wd c={TEAL} s={34}>no maker, no knower, no background</Wd>],
        ["That is spontaneous perfection", 960, 510, <Wd c={GOLD} s={40} serif>spontaneous perfection</Wd>],
        ["Mind and matter lose their weight", 960, 600, <Wd c={CHALK} s={28}>light, magical and plastic</Wd>],
        ["None of this is a state that is kept", 960, 680, <Wd c={DIM} s={26}>not a state kept; recognised, and recognised again</Wd>],
        ["Without the tools, the taste is read back into a ground", 640, 770, <K c={ROSE} s={22}>no tools: the taste becomes a ground</K>],
        ["Without the taste, the tools stay dry", 1280, 770, <K c={ROSE} s={22}>no taste: the tools stay dry</K>],
      ]} />
    </AbsoluteFill>
  );
};

const MatrixScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["So two things work together", 960, 110, <Wd c={CHALK} s={38} serif>the habit and the matrix</Wd>],
        ["by default we see inherently", 560, 260, <K c={ROSE} s={28}>the habit: seeing inherently</K>],
        ["We designate that habit as ignorance", 560, 350, <Wd c={DIM} s={24}>designated as ignorance</Wd>],
        ["And the framework, the matrix", 1360, 260, <K c={VIOLET} s={28}>the framework: the matrix</K>],
        ["mind and matter, subject and object, cause and effect", 1360, 350, <Wd c={DIM} s={24}>mind · matter · subject · object · cause · effect</Wd>],
        ["The matrix is not a field beneath appearances", 960, 480, <SK strikeAt={c("The matrix is not a field beneath appearances") + 0.9} c={DIM} s={26}>a field beneath appearances</SK>],
        ["The trouble is never that we single out", 960, 590, <Wd c={TEAL} s={30}>singling out goes on, vivid and exact</Wd>],
        ["as the joints of the world", 960, 690, <Wd c={GOLD} s={30}>the trouble: taking its cuts as the joints of the world</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OrthodoxScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["How does this stand with", 960, 110, <Wd c={CHALK} s={38} serif>Nāgārjuna and Dzogchen</Wd>],
        ["whatever arises dependently is empty, with no exception for mind", 960, 240, <K c={GOLD} s={26}>MMK 24: whatever arises dependently is empty, mind too</K>],
        ["you cannot keep the mind and throw out the objects", 960, 340, <K c={GOLD} s={26}>Candrakīrti: keep both or neither</K>],
        ["Searched for, neither is found", 960, 430, <Wd c={TEAL} s={28}>searched for, neither is found</Wd>],
        ["read without a ground", 960, 560, <K c={ICE} s={26}>Dzogchen, read without a ground</K>],
        ["the ground is called a ground only from a relative point of view", 960, 650, <Wd c={CHALK} s={26}>Longchenpa: "ground" only from a relative point of view</Wd>],
        ["Refusing to make clarity the floor", 960, 740, <SK strikeAt={c("Refusing to make clarity the floor") + 0.8} c={DIM} s={26}>clarity as the floor</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const OrdinaryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["On one question my reading is closer to", 960, 110, <Wd c={CHALK} s={38} serif>ordinary mind and rigpa</Wd>],
        ["Ordinary mind is appearing held by the habit of fixing", 560, 280, <K c={VIOLET} s={26}>ordinary mind: held by fixing</K>],
        ["is the same appearing known without that fixing", 1360, 280, <K c={TEAL} s={26}>rigpa: the same, without fixing</K>],
      ]} />
      <At x={960} y={280} o={ramp(t, c("One mind, held two ways"), 0.6)}><Wd c={GOLD} s={30}>=</Wd></At>
      <Items items={[
        ["One mind, held two ways", 960, 390, <Wd c={GOLD} s={36} serif>one mind, held two ways</Wd>],
        ["is the truth body", 960, 480, <Wd c={DIM} s={26}>Gampopa: co-emergent mind is the truth body</Wd>],
        ["separates the two more sharply, and rightly", 960, 580, <Wd c={CHALK} s={28}>Dzogchen: a calm clear mind can pass for rigpa</Wd>],
        ["But separating them is discerning, not finding two things", 960, 670, <Wd c={TEAL} s={28}>discerning, not two things</Wd>],
        ["it too is designated", 960, 750, <Wd c={DIM} s={26}>named "rigpa", it too is designated</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TwoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["This links to what I have long said", 960, 110, <Wd c={CHALK} s={36} serif>spontaneous presence is dependent arising</Wd>],
        ["In the appearing itself, they are not even two", 960, 210, <Wd c={DIM} s={28}>in the appearing itself, not even two</Wd>],
      ]} />
      <At x={960} y={430} o={ramp(t, c("this condition, that condition, this result") - 0.3, 0.6)}>
        <div style={{ width: 300, height: 140, borderRadius: 70, border: `4px solid ${GOLD}`, background: "rgba(228,194,122,0.14)",
          display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 30px rgba(228,194,122,0.4)` }}>
          <Wd c={CHALK} s={30}>this appearing</Wd>
        </div>
      </At>
      <Flow x1={810} y1={430} x2={520} y2={430} color={TEAL} p={ramp(t, c("this condition, that condition, this result"), 0.8)} />
      <Flow x1={1110} y1={430} x2={1400} y2={430} color={GOLD} p={ramp(t, c("is the same appearing when the fixing stops"), 0.8)} />
      <Items items={[
        ["this condition, that condition, this result", 380, 430, <K c={TEAL} s={24}>dependent arising</K>],
        ["this condition, that condition, this result", 380, 510, <Wd c={DIM} s={22}>while the dividing works</Wd>, { d: 0.5 }],
        ["is the same appearing when the fixing stops", 1540, 430, <K c={GOLD} s={24}>spontaneous presence</K>],
        ["is the same appearing when the fixing stops", 1540, 510, <Wd c={DIM} s={22}>when the fixing stops</Wd>, { d: 0.5 }],
        ["One appearing, described two ways, at the same time", 960, 640, <Wd c={CHALK} s={32}>one appearing, two descriptions, at the same time</Wd>],
        ["Neither is higher", 960, 730, <Wd c={GOLD} s={34} serif>neither is higher</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FirewoodScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const season = c("any more than we say summer becomes winter");
  const refine = c("And each refines our reading of the other");
  const first = 1 - ramp(t, refine, 0.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["In practice, they can come in an order", 960, 110, <Wd c={CHALK} s={36} serif>in practice, an order</Wd>, { until: "And each refines our reading of the other" }],
        ["Often the tools come first, and the taste after", 960, 190, <Wd c={DIM} s={26}>often the tools first, the taste after</Wd>, { until: "And each refines our reading of the other" }],
      ]} />
      <At x={600} y={380} o={ramp(t, c("Firewood is complete in its own position"), 0.6) * first}><Firewood /></At>
      <At x={1320} y={380} o={ramp(t, c("Ash is complete in its own position"), 0.6) * first}><Ash /></At>
      <Items items={[
        ["Firewood is complete in its own position", 600, 500, <K c={WARM} s={24}>firewood: complete in its position</K>, { until: "And each refines our reading of the other" }],
        ["Ash is complete in its own position", 1320, 500, <K c={CHALK} s={24}>ash: complete in its position</K>, { until: "And each refines our reading of the other" }],
        ["Neither is a lesser stage of the other", 960, 590, <Wd c={GOLD} s={28}>Dōgen: neither a lesser stage of the other</Wd>, { until: "And each refines our reading of the other" }],
      ]} />
      <At x={720} y={720} o={ramp(t, season, 0.5) * first}><Sun size={70} rot={t * 10} /></At>
      <At x={1200} y={720} o={ramp(t, season + 0.4, 0.5) * first}><Snowflake size={70} rot={t * 10} /></At>
      <Items items={[
        ["any more than we say summer becomes winter", 960, 720, <SK strikeAt={season + 2} c={DIM} s={24}>becomes</SK>, { d: 0.6, until: "And each refines our reading of the other" }],
        ["Nothing crosses from one to the other", 960, 800, <Wd c={TEAL} s={26}>nothing crosses</Wd>, { until: "And each refines our reading of the other" }],
        ["And each refines our reading of the other", 960, 160, <Wd c={CHALK} s={36} serif>each refines our reading of the other</Wd>],
        ["is heard as a source", 560, 330, <SK strikeAt={c("is heard as a source") + 1} c={DIM} s={24}>presence as a source</SK>],
        ["is heard as a source", 560, 420, <Wd c={TEAL} s={24}>kept honest by dependent arising</Wd>, { d: 1.5 }],
        ["is heard as a mechanism", 1360, 330, <SK strikeAt={c("is heard as a mechanism") + 1} c={DIM} s={24}>arising as a mechanism in the dark</SK>],
        ["is heard as a mechanism", 1360, 420, <Wd c={GOLD} s={24}>kept honest by spontaneous presence</Wd>, { d: 1.5 }],
        ["Together, they keep each other honest", 960, 580, <Wd c={CHALK} s={32}>together, each keeps the other honest</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const GuardsScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Two guards, to end", 960, 110, <Wd c={CHALK} s={38} serif>two guards</Wd>],
        ["is singled out too", 960, 250, <K c={GOLD} s={28}>"vivid empty appearing" is singled out too</K>],
        ["it becomes the next floor", 960, 340, <SK strikeAt={c("it becomes the next floor") + 1} c={DIM} s={26}>the next floor</SK>],
        ["And nothing is lost", 960, 470, <Wd c={TEAL} s={34}>nothing is lost</Wd>],
        ["The brain still matters", 960, 560, <Wd c={CHALK} s={26}>thinking, feeling, choosing work; the brain and medicine matter</Wd>],
        ["What is denied is only a mind standing on its own side", 960, 660, <SK strikeAt={c("What is denied is only a mind standing on its own side") + 1.5} c={DIM} s={26}>a mind, or a matter, on its own side</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const TryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const thought = c("Notice a thought, and see that it has been singled out");
  const mind = c("Now notice the mind that knows the thought");
  return (
    <AbsoluteFill>
      <Items items={[["Try it", 960, 110, <Wd c={CHALK} s={38} serif>try it</Wd>]]} />
      <At x={600} y={280} o={ramp(t, thought, 0.5)}><div style={{ position: "relative" }}><K c={GOLD} s={30}>a thought</K><Pick at={thought + 0.6} w={240} h={90} /></div></At>
      <At x={1320} y={280} o={ramp(t, mind, 0.5)}><div style={{ position: "relative" }}><K c={VIOLET} s={30}>the mind that knows it</K><Pick at={mind + 0.6} w={360} h={90} color={VIOLET} /></div></At>
      <Items items={[
        ["Then do the same with this hand, and this table", 960, 420, <K c={ICE} s={26}>this hand · this table</K>],
        ["And if a sense of luminous presence comes", 960, 520, <Wd c={CHALK} s={28}>if luminous presence comes, do not push it away</Wd>],
        ["is this clarity standing on its own, behind what appears", 960, 610, <Wd c={DIM} s={28}>standing on its own, behind?</Wd>],
        ["and empty too", 960, 680, <Wd c={TEAL} s={30}>or the appearing's own, and empty too?</Wd>],
      ]} />
      <At x={960} y={790}><Reveal text="Let go of the holding, and rest." at={c("Then let go of the holding")} size={50} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Notice a thought", "dusk", <OpenScene />],
    ["People often expect me to say it", "doubt", <QuestionScene />],
    ["Start with what singling out is", "search", <SinglingScene />],
    ["The trouble starts when we turn the same seeing", "deep", <MindScene />],
    ["Look at how differently mind is cut", "whole", <CutsScene />],
    ["The same holds the other way", "dusk", <MatterScene />],
    ["So mind, consciousness and luminous clarity are the same in this respect", "light", <PhenScene />],
    ["And clarity being never absent is not the same as clarity being the floor", "deep", <FloorScene />],
    ["There was a very key phase in my own insight", "light", <RadianceScene />],
    ["Many practices work by quieting the symbolic layer", "search", <BareScene />],
    ["So what is needed after anatta is not more bare attention", "whole", <PathScene />],
    ["First, anatta itself", "jade", <AnattaScene />],
    ["So the next stage is a strange one", "doubt", <DesyncScene />],
    ["Then refining and syncing the view", "search", <SyncScene />],
    ["Then taste relaxing into openness", "jade", <RelaxScene />],
    ["And in time, the veil dissipates with clear seeing", "light", <PerfectScene />],
    ["So two things work together", "deep", <MatrixScene />],
    ["How does this stand with", "dusk", <OrthodoxScene />],
    ["On one question my reading is closer to", "whole", <OrdinaryScene />],
    ["This links to what I have long said", "light", <TwoScene />],
    ["In practice, they can come in an order", "jade", <FirewoodScene />],
    ["Two guards, to end", "search", <GuardsScene />],
    ["Try it", "night", <TryScene />],
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
