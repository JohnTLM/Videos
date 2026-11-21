// Bonus video: The Taste and the Marketplace (AA34), last of the Dependent Arising four (AA32, AA33, AA31, AA34).
// (Script: tools/series/after-anatta/aa34-the-taste-and-the-marketplace/aa34-script.md, from AA25, AA26, AA27.)
// Arc: the painted rice cake feeds -> two questions -> two ways of knowing rightly (through concepts; free from all
// elaborations: one complete stroke, not one stuff) -> two frameworks (the default cutting; the inherent habit, "the
// matrix") -> the framework is not the prison; run together, it slides into annihilation -> the framework held three
// ways -> have a second thought: the tossed apple -> the taste met three times -> only seeing, no seer: colours and
// sound, clear -> no "made of": six clarities, not one lamp (struck) -> total exertion: firewood, ash -> the
// desynchronisation: the flower when I turn away -> logic points, looking checks -> the hinges, each met and struck ->
// stable, the first taste revisited, its reach -> the marketplace, dirty hands -> dependent arising is how help works
// -> who decides, why help -> not stages, it goes round -> three descriptions, none higher -> close.
// Stance: no essence is ever drawn as a thing; emptiness is never drawn as a power or a substance; the "taste" is
// never drawn as an object or a place to reach (it is only named, as moments met in a life, on a loop that goes round
// again). The one lamp of "one luminosity" and the hinges are drawn only to be struck. Cue phrases avoid respelled
// names (anatta, qi, Nāgārjuna, Dōgen) and hyphenated words (ox-herding, non-dual, re-enter).
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, PictureFrame, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "In Negation and Formation, freedom turned out to be in conventions", "Words and names keep working",
  "The painted rice cake feeds", "I am John Tan, known as Thusness",
  // two questions
  "That raises two questions", "what exactly is the problem with them", "How is it actually met, in a life",
  "Start with the first",
  // two ways of knowing
  "There are two ways of knowing rightly here", "It helps not to collapse them",
  "The first works through concepts, within the framework", "how a doctor treats, how a cook cooks",
  "how a promise is kept, how karma is understood", "This is not a lesser knowing",
  // the second knowing: one stroke
  "The second is freedom from all elaborations", "Nothing reified is added", "Nothing is cut into before and after",
  "One complete stroke", "One does not mean one stuff", "It means not cut up", "The colour is still the colour",
  "Neither cancels the other", "The first is not a ladder to throw away",
  "The second is not a place outside the world to retreat to",
  // two frameworks
  "So I keep two frameworks apart", "The default framework is the conventional cutting itself",
  "parts and whole, before and after, cause and effect, agent and action",
  "We need it to speak, to cook and to keep promises", "Dependent arising lives here",
  "The inherent framework is the habit of taking what the cutting singles out", "That is the matrix",
  "Not a world, not a field", "A habit of seeing",
  // not the prison
  "The framework is not the prison", "What binds is living in it with reified thoughts",
  "Dependent arising lives in the first, and unbinds the second", "Run the two together",
  "dependent arising is only a story", "That is the slide into annihilation",
  // three ways
  "So the framework can be held three ways", "Without it: one complete stroke",
  "Within it, with the wisdom of dependent arising", "the same parts and conditions, now light",
  "And in between, where we mostly live", "within it, reified",
  // a second thought
  "Have a second thought", "If you think you do not think inherently", "Toss an apple",
  "Is it simply there, before any thought at all", "For almost all of us, it is", "That is the habit at work",
  "It does not feel like a view", "It feels like the world itself",
  "So agreeing with dependent arising is not living in it",
  // how is it met
  "Which brings the second question", "dependent arising did not come first as a view",
  "It came as a taste, and the view came to sync with it later", "the taste was met three times",
  "Again when every hinge was exhausted", "And again in the marketplace",
  // colours
  "there is only seeing, no seer", "But then, what are seeing and hearing", "Look, in real time",
  "Seeing is just colours", "Hearing is just sound", "Nothing is doing the seeing",
  "Nothing runs underneath the colours", "And the colours are not dark", "They are clear, known and vivid",
  "The knowing is right there in the colour",
  // no made of
  "How is this different from a refined", "Everything is made of one luminosity",
  "The seer has merged, but the one it merged into is still a something", "finds no seer there to merge",
  "So in this taste there is no made of", "The colour is clear as colour, with light and eye",
  "The sound is clear as sound, with air and ear", "Six clarities, one for each stream",
  "Not one lamp lighting them all",
  // total exertion
  "The taste widens", "Each event seems to spend itself completely",
  "The sound of a car going by is wholly the sound", "called this total exertion",
  "firewood in its own place, ash in its own", "Not the whole cosmos packed into each moment",
  "Just this, spent completely",
  // the desynchronisation
  "But a taste is not yet freedom", "While I see a flower", "Yet the moment I turn away", "its red belonging to it",
  "A cause is still felt to push its effect", "Death is still the end of a someone",
  "The self had dissolved, but the universe had not",
  "the taste was there, and the view still treated each thing as standing by itself",
  "That gap is what I call the desynchronisation",
  // logic and looking
  "The habit does not announce itself", "It is only when it is challenged by", "The logic points to the place to look",
  "Then I look, and check it against the taste", "Insight without the logic drifts back into nouns",
  "Logic without the taste stays a clever argument about words",
  // the hinges
  "Before freedom, the mind will always hinge on something", "First it hinges on parts",
  "When the parts are seen through, it hinges on the whole", "it finds something finer to stand on", "Energy",
  "A field. Relations", "A substrate", "Each time, it is looking for a foundation", "The tools meet each hinge in turn",
  "When all of these are exhausted", "with nothing left to hinge on", "the mind becomes free from all elaborations",
  // stable, revisited
  "Stable does not mean the habit can never stir again", "When it stirs, it is met by the same seeing",
  "and it does not take root", "Then appearance is again tasted as vividly present", "It is the first taste, revisited",
  "What has changed is its reach", "now covering thought, the body, causes, time and death",
  "And its stability: it no longer depends on looking",
  // the marketplace
  "After freedom from all elaborations", "and dirty my hands", "The marketplace is ordinary life",
  "Work, family, money, arguments", "The last of the Zen", "barefoot, smeared with mud and ashes",
  "he comes into the market with helping hands, smiling broadly",
  // the role changes
  "Here dependent arising changes its role", "it was the tool that took each hinge apart",
  "Now I deal in causes and conditions all day", "What helps, what harms, what follows from what",
  "Dependent arising is how help works",
  // who decides
  "Who decides, if no one is there", "Nobody disappears", "I still act, choose, keep my promises",
  "as a conventional person", "What is gone is the doer behind the doing", "pulling the levers",
  "No one is there, so nothing matters", "It is the annihilation view",
  // why help
  "And why help, if others are not found", "Others suffer, validly, in dependence",
  "Their suffering is eased when its conditions change", "no one is found suffering from their own side",
  "so nothing in it is fixed for good",
  // not stages
  "So, looked back on, the taste has been met three times", "These are not stages",
  "The logic does not produce the taste", "It unbinds the habit", "And it is not a ladder climbed once",
  "It goes round again, wherever the habit of fixing returns",
  // three descriptions
  "And the taste has three descriptions", "no one is behind it", "nothing in it stands on its own",
  "Spontaneous presence", "nothing is missing, and nothing is making it", "Three angles on one face", "None is higher",
  // end
  "No one behind it", "Nothing standing alone", "Nothing missing",
  "Met in the colours, in the hinges, and in the marketplace", "with dirty hands",
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
  market: { a: "rgba(170,110,55,0.45)", b: "rgba(120,70,60,0.4)", c: "rgba(60,110,90,0.34)" },
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
/** A chip struck through at a cue (plus an optional delay). */
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "22px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={36} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
  </div>
);

// ---------------------------------------------------------------- drawings
/** A rice cake in a painting. */
const RiceCake: React.FC<{ p: number }> = ({ p }) => (
  <svg width={300} height={200} viewBox="0 0 300 200" style={{ overflow: "visible" }}>
    <DrawPath d="M40 130 Q150 175 260 130 Q270 95 150 85 Q30 95 40 130 Z" p={p} color={CHALK} width={4} len={700} fill={`rgba(241,236,224,${0.12 * p})`} />
    <DrawPath d="M70 110 Q150 70 230 110" p={p} color={GOLD} width={3} len={300} />
    <DrawPath d="M20 165 L280 165" p={p} color={DIM} width={3} len={300} />
  </svg>
);

/** A stroke cut into pieces (heal 0) or one complete stroke (heal 1). */
const Stroke: React.FC<{ p: number; heal: number; w?: number; heavy?: number; col?: string }> = ({ p, heal, w = 1100, heavy = 0, col }) => {
  const cuts = [0, 0.25, 0.5, 0.75, 1];
  const gap = 22 * (1 - heal);
  const c = col ?? (heal > 0.5 ? GOLD : DIM);
  return (
    <svg width={w} height={60} viewBox={`0 0 ${w} 60`} style={{ overflow: "visible" }}>
      {cuts.slice(0, -1).map((a, i) => {
        const x1 = a * w + (i ? gap : 0), x2 = cuts[i + 1] * w - (i < 3 ? gap : 0);
        return <DrawPath key={i} d={`M${x1} 30 L${x2} 30`} p={p} color={c} width={8 + heavy * 10} len={w} />;
      })}
    </svg>
  );
};

/** A simple apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ROSE})` }}>
    <path d="M50 30 C35 18 12 25 14 52 C16 78 34 92 50 84 C66 92 84 78 86 52 C88 25 65 18 50 30 Z" fill="rgba(255,143,163,0.28)" stroke={ROSE} strokeWidth={4} />
    <path d="M50 30 L53 12" stroke={GOLD} strokeWidth={4} strokeLinecap="round" />
    <path d="M54 18 Q66 8 74 16 Q64 24 54 18 Z" fill="rgba(143,212,154,0.4)" stroke={GREEN} strokeWidth={2.5} />
  </svg>
);

/** A flower; `ghost` 0..1 turns it into a dashed, assumed outline. */
const Flower: React.FC<{ size?: number; ghost?: number }> = ({ size = 220, ghost = 0 }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 100 140" style={{ overflow: "visible" }}>
    <path d="M50 60 L50 135" stroke={GREEN} strokeWidth={3} strokeDasharray={ghost > 0.5 ? "5 5" : undefined} />
    {Array.from({ length: 6 }).map((_, i) => (
      <ellipse key={i} cx={50} cy={36} rx={10} ry={22} transform={`rotate(${i * 60} 50 58)`}
        fill={`rgba(255,122,89,${0.35 * (1 - ghost)})`} stroke={ghost > 0.5 ? DIM : WARM} strokeWidth={2.5}
        strokeDasharray={ghost > 0.5 ? "5 5" : undefined} />
    ))}
    <circle cx={50} cy={58} r={8} fill={`rgba(228,194,122,${1 - ghost * 0.7})`} />
  </svg>
);

/** Two wavy tracks; `lag` 0..1 shifts the second out of step. */
const Tracks: React.FC<{ o: number; lag: number }> = ({ o, lag }) => {
  const { t } = useT();
  const w = 1100;
  const line = (y: number, ph: number) => {
    let d = `M0 ${y}`;
    for (let x = 0; x <= w; x += 20) d += ` L${x} ${y + Math.sin(x / 70 + t * 1.6 + ph) * 22}`;
    return d;
  };
  return (
    <svg width={w} height={200} viewBox={`0 0 ${w} 200`} style={{ overflow: "visible", opacity: o }}>
      <path d={line(50, 0)} fill="none" stroke={GOLD} strokeWidth={4} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
      <path d={line(150, lag * 2.6)} fill="none" stroke={DIM} strokeWidth={4} />
    </svg>
  );
};

/** Market stalls along the ground. */
const Stalls: React.FC<{ p: number }> = ({ p }) => (
  <Svg>
    {[300, 760, 1220, 1620].map((x, i) => (
      <g key={x}>
        <DrawPath d={`M${x - 140} 560 L${x + 140} 560 L${x + 110} 500 L${x - 110} 500 Z`} p={ramp(p, i * 0.15, 0.5)} color={[GOLD, ROSE, TEAL, WARM][i]} width={4} len={800} />
        <DrawPath d={`M${x - 120} 560 L${x - 120} 700 M${x + 120} 560 L${x + 120} 700 M${x - 150} 700 L${x + 150} 700`} p={ramp(p, i * 0.15, 0.5)} color={DIM} width={4} len={600} />
      </g>
    ))}
  </Svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cake = c("The painted rice cake feeds");
  return (
    <AbsoluteFill>
      <Items items={[
        ["In Negation and Formation, freedom turned out to be in conventions", 960, 160, <Wd c={CHALK} s={40} serif>freedom: in conventions, not a leap into silence</Wd>],
        ["Words and names keep working", 960, 260, <K c={GREEN} s={30}>words and names keep working</K>],
      ]} />
      <PictureFrame x={960} y={520} w={420} h={280} o={ramp(t, cake, 0.6)} tag="a painting" />
      <At x={960} y={520} o={ramp(t, cake, 0.6)}><RiceCake p={ramp(t, cake + 0.2, 1.4)} /></At>
      <Items items={[
        ["The painted rice cake feeds", 960, 740, <Wd c={GOLD} s={42} serif>The painted rice cake feeds.</Wd>, { d: 1 }],
        ["I am John Tan, known as Thusness", 960, 820, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const QuestionsScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["That raises two questions", 960, 150, <Wd c={CHALK} s={44} serif>Two questions</Wd>],
      ["what exactly is the problem with them", 960, 330, <Box c={WARM} w={900} title="1 · If conventions work, what is the problem?" />, { pop: true }],
      ["How is it actually met, in a life", 960, 520, <Box c={GOLD} w={900} title="2 · All this is view. How is it met, in a life?" />, { pop: true }],
      ["Start with the first", 960, 700, <Wd c={DIM} s={30}>start with the first</Wd>],
    ]} />
  </AbsoluteFill>
);

const TwoWaysScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["There are two ways of knowing rightly here", 960, 120, <Wd c={CHALK} s={44} serif>Two ways of knowing rightly</Wd>],
      ["It helps not to collapse them", 960, 200, <Wd c={DIM} s={28}>do not collapse them</Wd>],
      ["The first works through concepts, within the framework", 960, 330, <Box c={TEAL} w={760} title="1 · through concepts, within the framework" />],
      ["how a doctor treats, how a cook cooks", 620, 490, <K c={TEAL} s={28}>a doctor treats</K>, { pop: true }],
      ["how a doctor treats, how a cook cooks", 1300, 490, <K c={TEAL} s={28}>a cook cooks</K>, { pop: true, d: 1 }],
      ["how a promise is kept, how karma is understood", 620, 580, <K c={TEAL} s={28}>a promise is kept</K>, { pop: true }],
      ["how a promise is kept, how karma is understood", 1300, 580, <K c={TEAL} s={28}>karma is understood</K>, { pop: true, d: 1 }],
      ["This is not a lesser knowing", 960, 720, <Wd c={GOLD} s={38} serif>Not a lesser knowing.</Wd>],
    ]} />
  </AbsoluteFill>
);

const StrokeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const cut = c("Nothing is cut into before and after");
  const heal = ramp(t, c("One complete stroke"), 1.2);
  const labels = ["before | after", "part | whole", "cause | effect"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["The second is freedom from all elaborations", 960, 120, <Box c={GOLD} w={760} title="2 · free from all elaborations" />],
        ["Nothing reified is added", 960, 240, <Wd c={DIM} s={28}>nothing reified added</Wd>],
      ]} />
      <At x={960} y={400} o={ramp(t, cut, 0.5)}><Stroke p={ramp(t, cut, 1.2)} heal={heal} /></At>
      {labels.map((l, i) => (
        <At key={l} x={410 + (i + 1) * 275} y={340} o={ramp(t, cut + 0.6 + i * 0.4, 0.4) * (1 - heal)}><Wd c={WARM} s={24}>{l}</Wd></At>
      ))}
      <Items items={[
        ["One complete stroke", 960, 480, <Wd c={GOLD} s={44} serif>One complete stroke</Wd>],
        ["One does not mean one stuff", 760, 570, <SK c={DIM} s={28} at="It means not cut up">one stuff</SK>],
        ["It means not cut up", 1160, 570, <K c={GREEN} s={28}>not cut up</K>],
        ["The colour is still the colour", 960, 650, <Wd c={CHALK} s={28}>the colour still the colour, the sound still the sound</Wd>],
        ["Neither cancels the other", 960, 720, <Wd c={CHALK} s={32} serif>Neither cancels the other.</Wd>],
        ["The first is not a ladder to throw away", 620, 800, <K c={TEAL} s={24}>1 · not a ladder to throw away</K>],
        ["The second is not a place outside the world to retreat to", 1320, 800, <K c={GOLD} s={24}>2 · not a place outside the world</K>],
      ]} />
    </AbsoluteFill>
  );
};

const FrameworksScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So I keep two frameworks apart", 960, 110, <Wd c={CHALK} s={44} serif>Two frameworks, kept apart</Wd>],
      ["The default framework is the conventional cutting itself", 520, 260, <Box c={TEAL} w={640} title="the default framework" sub="the conventional cutting itself" />],
      ["parts and whole, before and after, cause and effect, agent and action", 520, 410, <Wd c={CHALK} s={24}>parts · whole · before · after · cause · effect · agent · action</Wd>],
      ["We need it to speak, to cook and to keep promises", 520, 490, <K c={GREEN} s={26}>it works: speak, cook, keep promises</K>],
      ["Dependent arising lives here", 520, 580, <K c={GOLD} s={28}>dependent arising lives here</K>, { pop: true }],
      ["The inherent framework is the habit of taking what the cutting singles out", 1400, 260, <Box c={WARM} w={640} title="the inherent framework" sub="taking what is singled out as standing by itself" />],
      ["That is the matrix", 1400, 420, <Wd c={WARM} s={36} serif>the matrix</Wd>, { pop: true }],
      ["Not a world, not a field", 1260, 520, <SK c={DIM} s={26} at="A habit of seeing">a world</SK>],
      ["Not a world, not a field", 1540, 520, <SK c={DIM} s={26} at="A habit of seeing">a field</SK>, { d: 0.5 }],
      ["A habit of seeing", 1400, 620, <Wd c={GOLD} s={36} serif>a habit of seeing</Wd>],
    ]} />
  </AbsoluteFill>
);

const PrisonScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const together = ramp(t, c("Run the two together"), 1.2);
  return (
    <AbsoluteFill>
      <Items items={[
        ["The framework is not the prison", 760, 150, <K c={TEAL} s={34}>the framework</K>],
        ["The framework is not the prison", 1160, 150, <SK c={DIM} s={34} at="The framework is not the prison" d={1}>the prison</SK>, { d: 0.4 }],
        ["What binds is living in it with reified thoughts", 960, 270, <Wd c={WARM} s={34} serif>What binds: living in it with reified thoughts</Wd>],
      ]} />
      <At x={960 - 320 * (1 - together)} y={440} o={ramp(t, c("Dependent arising lives in the first, and unbinds the second"), 0.5)}><K c={TEAL} s={30}>lives in the default framework</K></At>
      <At x={960 + 320 * (1 - together)} y={440 + 70 * together} o={ramp(t, c("Dependent arising lives in the first, and unbinds the second") + 1.2, 0.5)}><K c={GREEN} s={30}>unbinds the inherent one</K></At>
      <Items items={[
        ["dependent arising is only a story", 960, 640, <Wd c={ROSE} s={38} serif>"dependent arising is only a story"</Wd>],
        ["That is the slide into annihilation", 960, 740, <K c={WARM} s={32}>the slide into annihilation</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ThreeWaysScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rows: [string, string, number, string, number][] = [
    ["Without it: one complete stroke", "without it: one complete stroke", 1, GOLD, 0],
    ["the same parts and conditions, now light", "within it, with the wisdom of dependent arising: now light", 0.55, TEAL, 0],
    ["within it, reified", "in between, where we mostly live: within it, reified", 0, WARM, 1],
  ];
  return (
    <AbsoluteFill>
      <Items items={[["So the framework can be held three ways", 960, 120, <Wd c={CHALK} s={44} serif>The framework, held three ways</Wd>]]} />
      {rows.map(([cue, label, heal, col, heavy], i) => {
        const a = c(cue) - (i === 1 ? 2.5 : 0);
        return (
          <React.Fragment key={cue}>
            <At x={960} y={250 + i * 200} o={ramp(t, a, 0.5)}><Wd c={col} s={28}>{label}</Wd></At>
            <At x={960} y={310 + i * 200} o={ramp(t, a, 0.5) * (i === 1 ? 0.6 : 1)}><Stroke p={ramp(t, a, 1)} heal={heal} w={900} heavy={heavy} col={col} /></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const toss = c("Toss an apple");
  const k = ramp(t, toss, 1.4);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Have a second thought", 960, 110, <Wd c={GOLD} s={46} serif>Have a second thought.</Wd>],
        ["If you think you do not think inherently", 960, 190, <Wd c={DIM} s={28}>"I do not think inherently"?</Wd>],
      ]} />
      <At x={560 + k * 400} y={470 - Math.sin(k * Math.PI) * 170} r={k * 300} o={ramp(t, toss, 0.4)}><Apple /></At>
      <Items items={[
        ["Is it simply there, before any thought at all", 1340, 330, <Wd c={CHALK} s={32} serif>Simply there, before any thought?</Wd>],
        ["For almost all of us, it is", 1340, 410, <K c={ROSE} s={28}>for almost all of us: yes</K>],
        ["That is the habit at work", 1340, 490, <K c={WARM} s={28}>the habit at work</K>, { pop: true }],
        ["It does not feel like a view", 960, 630, <Wd c={DIM} s={30}>not felt as a view</Wd>],
        ["It feels like the world itself", 960, 690, <Wd c={CHALK} s={30}>felt as the world itself</Wd>],
        ["So agreeing with dependent arising is not living in it", 960, 790, <Wd c={GOLD} s={36} serif>Agreeing with it is not living in it.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const three = c("the taste was met three times");
  const marks: [string, number, string][] = [
    ["the taste was met three times", 2.6, "right after anatta"],
    ["Again when every hinge was exhausted", 0, "every hinge exhausted"],
    ["And again in the marketplace", 0, "the marketplace"],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Which brings the second question", 960, 110, <Wd c={CHALK} s={44} serif>How is it met?</Wd>],
        ["dependent arising did not come first as a view", 600, 240, <SK c={DIM} s={28} at="It came as a taste, and the view came to sync with it later">first as a view</SK>],
        ["It came as a taste, and the view came to sync with it later", 1300, 240, <K c={GOLD} s={28}>a taste first · the view synced later</K>],
        ["the taste was met three times", 960, 380, <Wd c={DIM} s={28}>met three times, in a life</Wd>],
      ]} />
      <Svg><DrawPath d="M300 560 L1620 560" p={ramp(t, three, 1.6)} color={DIM} width={3} len={1400} glow={false} /></Svg>
      {marks.map(([cue, d, label], i) => {
        const a = c(cue) + d;
        return (
          <React.Fragment key={label}>
            <At x={500 + i * 460} y={560} o={ramp(t, a, 0.4)}><div style={{ width: 22, height: 22, borderRadius: "50%", background: GOLD, boxShadow: `0 0 16px ${GOLD}` }} /></At>
            <At x={500 + i * 460} y={640} o={ramp(t, a, 0.5)}><K c={GOLD} s={26}>{`${i + 1} · ${label}`}</K></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const ColoursScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const col = c("Seeing is just colours");
  const snd = c("Hearing is just sound");
  const clear = ramp(t, c("And the colours are not dark"), 1.5);
  const blobs: [number, number, string][] = [[420, 430, ROSE], [600, 380, GOLD], [520, 540, TEAL], [720, 500, VIOLET]];
  let wave = "M1050 460";
  for (let x = 1050; x <= 1650; x += 10) wave += ` L${x} ${460 + Math.sin((x - 1050) / 22 + t * 6) * 40 * Math.sin(((x - 1050) / 600) * Math.PI)}`;
  return (
    <AbsoluteFill>
      <Items items={[
        ["there is only seeing, no seer", 960, 110, <Wd c={CHALK} s={42} serif>Only seeing, no seer</Wd>],
        ["But then, what are seeing and hearing", 960, 190, <Wd c={DIM} s={28}>then what are seeing and hearing?</Wd>],
        ["Look, in real time", 960, 260, <K c={GOLD} s={26}>look, in real time</K>],
      ]} />
      {blobs.map(([x, y, b], i) => (
        <At key={i} x={x} y={y} o={ramp(t, col + i * 0.2, 0.8) * (0.45 + 0.55 * clear)} blur={14 * (1 - clear) + 4}>
          <div style={{ width: 190, height: 190, borderRadius: "50%", background: b, opacity: 0.75 }} />
        </At>
      ))}
      <Svg><g opacity={ramp(t, snd, 0.6)}><path d={wave} fill="none" stroke={ICE} strokeWidth={4} style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} /></g></Svg>
      <Items items={[
        ["Seeing is just colours", 570, 670, <K c={CHALK} s={26}>just colours · no effort</K>],
        ["Hearing is just sound", 1350, 670, <K c={ICE} s={26}>just sound · no effort</K>],
        ["Nothing is doing the seeing", 960, 340, <SK c={DIM} s={26} at="Nothing is doing the seeing" d={1}>something doing the seeing</SK>],
        ["Nothing runs underneath the colours", 570, 610, <SK c={DIM} s={22} at="Nothing runs underneath the colours" d={1}>a carrier underneath, moment to moment</SK>],
        ["They are clear, known and vivid", 960, 750, <Wd c={GOLD} s={34} serif>clear, known, vivid</Wd>],
        ["The knowing is right there in the colour", 960, 820, <Wd c={CHALK} s={28}>the knowing right there in the colour, no knower behind</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MadeOfScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lamp = c("Everything is made of one luminosity");
  const gone = ramp(t, c("finds no seer there to merge"), 1);
  const six: [string, string][] = [["colour", "light · eye"], ["sound", "air · ear"], ["smell", "nose"], ["flavour", "tongue"], ["touch", "body"], ["thought", "mind"]];
  const six0 = c("Six clarities, one for each stream");
  return (
    <AbsoluteFill>
      <Items items={[
        ["How is this different from a refined", 960, 110, <Wd c={CHALK} s={40} serif>Not a refined non-dual state</Wd>],
      ]} />
      <div style={{ opacity: 1 - 0.75 * gone }}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return <Flow key={i} x1={480} y1={430} x2={480 + Math.cos(a) * 190} y2={430 + Math.sin(a) * 150} color={GOLD} p={ramp(t, lamp + 0.5, 1)} width={2} />;
        })}
        <At x={480} y={430} o={ramp(t, lamp, 0.6)}><Orb size={130} color={GOLD} /></At>
      </div>
      <Items items={[
        ["Everything is made of one luminosity", 480, 230, <SK c={WARM} s={26} at="finds no seer there to merge">everything made of one luminosity</SK>],
        ["The seer has merged, but the one it merged into is still a something", 480, 640, <Wd c={DIM} s={24}>the seer merged, into a something</Wd>],
        ["finds no seer there to merge", 480, 700, <Wd c={WARM} s={26}>no seer to merge: no "made of"</Wd>],
        ["So in this taste there is no made of", 1380, 200, <Wd c={GOLD} s={36} serif>no "made of"</Wd>],
      ]} />
      {six.map(([a, b], i) => {
        const at = i === 0 ? c("The colour is clear as colour, with light and eye") : i === 1 ? c("The sound is clear as sound, with air and ear") : six0 + (i - 2) * 0.4;
        return <At key={a} x={1380} y={300 + i * 70} o={ramp(t, at, 0.5)}><K c={i < 2 ? GOLD : TEAL} s={24}>{`${a}, clear · ${b}`}</K></At>;
      })}
      <Items items={[
        ["Six clarities, one for each stream", 1380, 740, <Wd c={CHALK} s={28}>six clarities, one for each stream</Wd>, { d: 1.6 }],
        ["Not one lamp lighting them all", 480, 790, <K c={WARM} s={26}>not one lamp lighting them all</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const fw = c("firewood in its own place, ash in its own");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The taste widens", 960, 110, <Wd c={CHALK} s={42} serif>The taste widens</Wd>],
        ["Each event seems to spend itself completely", 960, 190, <Wd c={DIM} s={28}>each event spends itself completely</Wd>],
        ["The sound of a car going by is wholly the sound", 960, 270, <K c={ICE} s={28}>a car going by: wholly the sound, nothing held back</K>],
        ["called this total exertion", 960, 370, <Wd c={GOLD} s={40} serif>Dōgen: total exertion</Wd>],
      ]} />
      <Svg>
        <g opacity={ramp(t, fw, 0.5)}>
          {[0, 1, 2].map((k) => <DrawPath key={k} d={`M${560 + k * 12} ${470 + k * 34} L${760 - k * 12} ${470 + k * 34}`} p={ramp(t, fw + k * 0.2, 0.6)} color={WARM} width={22} len={220} />)}
        </g>
        <g opacity={ramp(t, fw + 1.5, 0.5)}>
          {Array.from({ length: 22 }).map((_, k) => <circle key={k} cx={1160 + ((k * 37) % 200)} cy={520 + ((k * 23) % 50)} r={4 + (k % 3)} fill={DIM} />)}
        </g>
      </Svg>
      <Items items={[
        ["firewood in its own place, ash in its own", 660, 620, <K c={WARM} s={26}>firewood, in its own place</K>],
        ["firewood in its own place, ash in its own", 1260, 620, <K c={DIM} s={26}>ash, in its own</K>, { d: 1.5 }],
        ["Not the whole cosmos packed into each moment", 960, 720, <SK c={DIM} s={26} at="Just this, spent completely">the whole cosmos packed into each moment</SK>],
        ["Just this, spent completely", 960, 810, <Wd c={GOLD} s={36} serif>Just this, spent completely.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DesyncScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turn = ramp(t, c("Yet the moment I turn away"), 1);
  const tracks = c("the taste was there, and the view still treated each thing as standing by itself");
  const top = 1 - ramp(t, tracks - 0.5, 0.6);
  return (
    <AbsoluteFill>
      <Items items={[["But a taste is not yet freedom", 960, 110, <Wd c={CHALK} s={42} serif>A taste is not yet freedom.</Wd>]]} />
      <div style={{ opacity: top }}>
        <At x={480} y={420} o={ramp(t, c("While I see a flower"), 0.6)}><Flower ghost={turn} /></At>
        <Items items={[
          ["While I see a flower", 480, 640, <K c={CHALK} s={24}>seeing: just colours, no one behind</K>, { until: "Yet the moment I turn away" }],
          ["Yet the moment I turn away", 480, 640, <K c={WARM} s={24}>turned away: still assumed there, by itself</K>],
          ["its red belonging to it", 1320, 300, <K c={WARM} s={26}>its red belonging to it</K>],
          ["A cause is still felt to push its effect", 1320, 390, <K c={WARM} s={26}>a cause pushing its effect</K>],
          ["Death is still the end of a someone", 1320, 480, <K c={WARM} s={26}>death, the end of a someone</K>],
          ["The self had dissolved, but the universe had not", 1320, 600, <Wd c={CHALK} s={30} serif>The self dissolved; the universe had not.</Wd>],
        ]} />
      </div>
      <At x={960} y={480} o={ramp(t, tracks, 0.6)}><Tracks o={1} lag={ramp(t, tracks + 0.5, 2)} /></At>
      <Items items={[
        ["the taste was there, and the view still treated each thing as standing by itself", 300, 430, <Wd c={GOLD} s={28}>taste</Wd>],
        ["the taste was there, and the view still treated each thing as standing by itself", 300, 530, <Wd c={DIM} s={28}>view</Wd>, { d: 0.8 }],
        ["That gap is what I call the desynchronisation", 960, 720, <Wd c={GOLD} s={42} serif>the desynchronisation</Wd>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The habit does not announce itself", 960, 120, <Wd c={CHALK} s={40} serif>The habit does not announce itself.</Wd>],
        ["It is only when it is challenged by", 960, 210, <Wd c={DIM} s={28}>it surfaces when Nāgārjuna's verses challenge it</Wd>],
        ["The logic points to the place to look", 520, 380, <K c={VIOLET} s={30}>the logic points</K>],
        ["Then I look, and check it against the taste", 1400, 380, <K c={GOLD} s={30}>I look, and check it against the taste</K>],
      ]} />
      <Flow x1={680} y1={380} x2={1150} y2={380} color={VIOLET} p={ramp(t, c("The logic points to the place to look") + 0.6, 1)} />
      <Items items={[
        ["Insight without the logic drifts back into nouns", 960, 560, <Wd c={WARM} s={30}>insight without the logic: drifts back into nouns</Wd>],
        ["Logic without the taste stays a clever argument about words", 960, 650, <Wd c={WARM} s={30}>logic without the taste: a clever argument about words</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const HingeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const tools = c("The tools meet each hinge in turn");
  const holds: [string, number, string][] = [
    ["parts", c("First it hinges on parts"), WARM], ["the whole", c("When the parts are seen through, it hinges on the whole") + 1.4, WARM],
    ["qi", c("it finds something finer to stand on") + 1.8, ROSE], ["energy", c("Energy"), ROSE], ["a field", c("A field. Relations"), ROSE],
    ["relations", c("A field. Relations") + 0.6, ROSE], ["a substrate", c("A substrate"), ROSE],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Before freedom, the mind will always hinge on something", 960, 110, <Wd c={CHALK} s={40} serif>Before freedom, the mind hinges on something</Wd>],
        ["When the parts are seen through, it hinges on the whole", 960, 180, <Wd c={DIM} s={26}>seen through, it moves to the next</Wd>, { d: 0.8 }],
      ]} />
      {holds.map(([w, a, col], i) => (
        <At key={w} x={420 + i * 180} y={560 - i * 42} o={ramp(t, a, 0.4)} s={pop(t, fps, a)}>
          <div style={{ position: "relative" }}><Chip color={col} size={24}>{w}</Chip><Strike at={tools + 0.4 + i * 0.35} /></div>
        </At>
      ))}
      <Items items={[
        ["Each time, it is looking for a foundation", 960, 640, <Wd c={WARM} s={30}>each time: looking for a foundation</Wd>],
        ["The tools meet each hinge in turn", 960, 260, <K c={VIOLET} s={26}>the tools meet each hinge in turn</K>],
        ["When all of these are exhausted", 960, 720, <Wd c={DIM} s={26}>all exhausted: neither parts nor whole</Wd>],
        ["with nothing left to hinge on", 960, 780, <Wd c={GOLD} s={34} serif>nothing left to hinge on</Wd>],
        ["the mind becomes free from all elaborations", 960, 830, <K c={GREEN} s={24}>free from all elaborations, stably</K>],
      ]} />
    </AbsoluteFill>
  );
};

const RevisitScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const reach = c("now covering thought, the body, causes, time and death");
  const ws = ["thought", "the body", "causes", "time", "death"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Stable does not mean the habit can never stir again", 960, 120, <Wd c={CHALK} s={34} serif>Stable: not that the habit can never stir</Wd>],
        ["When it stirs, it is met by the same seeing", 960, 200, <Wd c={DIM} s={28}>when it stirs, met by the same seeing</Wd>],
        ["and it does not take root", 960, 270, <K c={GREEN} s={26}>it does not take root</K>],
        ["Then appearance is again tasted as vividly present", 960, 390, <Wd c={GOLD} s={38} serif>vividly present, spontaneous, free</Wd>],
        ["It is the first taste, revisited", 960, 470, <Wd c={CHALK} s={28}>the first taste, revisited</Wd>],
        ["What has changed is its reach", 960, 560, <Wd c={DIM} s={28}>what changed: its reach</Wd>],
      ]} />
      {ws.map((w, i) => <At key={w} x={560 + i * 200} y={640} o={ramp(t, reach + 0.6 + i * 0.45, 0.4)}><K c={TEAL} s={26}>{w}</K></At>)}
      <Items items={[["And its stability: it no longer depends on looking", 960, 750, <K c={GREEN} s={28}>and its stability: no longer depends on looking</K>]]} />
    </AbsoluteFill>
  );
};

const MarketScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const life = c("The marketplace is ordinary life");
  const ws = ["work", "family", "money", "arguments", "other people's troubles", "choices"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["After freedom from all elaborations", 960, 110, <Wd c={CHALK} s={40} serif>Back into the marketplace</Wd>],
        ["and dirty my hands", 960, 260, <div style={{ transform: "rotate(-8deg)" }}><Hand size={150} /></div>, { pop: true }],
      ]} />
      <Stalls p={ramp(t, life, 2)} />
      {ws.map((w, i) => <At key={w} x={300 + (i % 4) * 440 + (i > 3 ? 220 : 0)} y={i < 4 ? 470 : 380} o={ramp(t, c("Work, family, money, arguments") + i * 0.45, 0.4)}><K c={GOLD} s={24}>{w}</K></At>)}
      <Items items={[
        ["The marketplace is ordinary life", 960, 380, <Wd c={GOLD} s={34} serif>ordinary life</Wd>, { until: "Work, family, money, arguments" }],
        ["The last of the Zen", 960, 750, <Wd c={DIM} s={26}>the last ox-herding picture</Wd>],
        ["barefoot, smeared with mud and ashes", 960, 800, <Wd c={CHALK} s={26}>barefoot, smeared with mud and ashes</Wd>],
        ["he comes into the market with helping hands, smiling broadly", 960, 835, <Wd c={GOLD} s={28} serif>into the market with helping hands, smiling broadly</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RoleScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Here dependent arising changes its role", 960, 120, <Wd c={CHALK} s={42} serif>Dependent arising changes its role</Wd>],
      ["it was the tool that took each hinge apart", 560, 280, <Box c={VIOLET} w={600} title="before" sub="a tool that took each hinge apart" />],
      ["Now I deal in causes and conditions all day", 1360, 280, <Box c={GREEN} w={600} title="now" sub="causes and conditions, all day" />],
      ["What helps, what harms, what follows from what", 560, 470, <K c={GREEN} s={28}>what helps</K>, { pop: true }],
      ["What helps, what harms, what follows from what", 960, 470, <K c={WARM} s={28}>what harms</K>, { pop: true, d: 0.7 }],
      ["What helps, what harms, what follows from what", 1360, 470, <K c={TEAL} s={28}>what follows from what</K>, { pop: true, d: 1.4 }],
      ["Dependent arising is how help works", 960, 650, <Wd c={GOLD} s={48} serif>Dependent arising is how help works.</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const acts = ["act", "choose", "keep promises", "answer for what I do"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Who decides, if no one is there", 960, 110, <Wd c={CHALK} s={42} serif>Who decides, if no one is there?</Wd>],
        ["Nobody disappears", 960, 200, <K c={GREEN} s={30}>nobody disappears</K>, { pop: true }],
      ]} />
      {acts.map((w, i) => <At key={w} x={480 + i * 320} y={320} o={ramp(t, c("I still act, choose, keep my promises") + i * 0.5, 0.4)}><K c={TEAL} s={26}>{w}</K></At>)}
      <Items items={[
        ["as a conventional person", 960, 400, <Wd c={DIM} s={28}>as a conventional person</Wd>],
        ["What is gone is the doer behind the doing", 960, 510, <SK c={DIM} s={28} at="pulling the levers" d={0.8}>a doer behind the doing, pulling the levers</SK>],
        ["No one is there, so nothing matters", 960, 640, <SK c={ROSE} s={30} at="It is the annihilation view">"no one is there, so nothing matters"</SK>],
        ["It is the annihilation view", 960, 740, <K c={WARM} s={30}>not freedom: the annihilation view</K>],
      ]} />
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ease = c("Their suffering is eased when its conditions change");
  const conds = ["a meal", "a kind word", "medicine", "time"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["And why help, if others are not found", 960, 110, <Wd c={CHALK} s={42} serif>Why help, if others are not found?</Wd>],
        ["Others suffer, validly, in dependence", 960, 210, <K c={ROSE} s={30}>others suffer, validly, in dependence</K>],
      ]} />
      {conds.map((w, i) => {
        const x = 420 + i * 360, p = ramp(t, ease + 0.5 + i * 0.3, 0.6);
        return (
          <React.Fragment key={w}>
            <At x={x} y={340} o={p}><K c={GREEN} s={24}>{w}</K></At>
            <Flow x1={x} y1={370} x2={960 + (x - 960) * 0.25} y2={460} color={GREEN} p={p} width={2} />
          </React.Fragment>
        );
      })}
      <Items items={[
        ["Their suffering is eased when its conditions change", 960, 500, <Wd c={GOLD} s={32} serif>conditions change, suffering eases</Wd>, { d: 1.8 }],
        ["no one is found suffering from their own side", 960, 640, <Wd c={DIM} s={28}>looked for, no one suffering from their own side</Wd>],
        ["so nothing in it is fixed for good", 960, 720, <K c={GREEN} s={30}>nothing in it fixed for good</K>],
      ]} />
    </AbsoluteFill>
  );
};

const RoundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const loop = c("So, looked back on, the taste has been met three times");
  const round = c("It goes round again, wherever the habit of fixing returns");
  const cx = 1260, cy = 470, rx = 330, ry = 230;
  const labels = ["the colours", "the hinges", "the marketplace"];
  const dotA = (t - round) * 1.4 - Math.PI / 2;
  return (
    <AbsoluteFill>
      <Svg><DrawPath d={`M${cx} ${cy - ry} a${rx} ${ry} 0 1 1 -0.1 0 Z`} p={ramp(t, loop, 1.8)} color={GOLD} width={3} len={1800} /></Svg>
      {labels.map((l, i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / 3;
        return <At key={l} x={cx + Math.cos(a) * rx} y={cy + Math.sin(a) * ry} o={ramp(t, loop + 1 + i * 0.5, 0.4)}><K c={GOLD} s={24}>{l}</K></At>;
      })}
      <At x={cx + Math.cos(dotA) * rx} y={cy + Math.sin(dotA) * ry} o={ramp(t, round, 0.5)}>
        <div style={{ width: 20, height: 20, borderRadius: "50%", background: CHALK, boxShadow: `0 0 18px ${GOLD}` }} />
      </At>
      <Items items={[
        ["So, looked back on, the taste has been met three times", 960, 110, <Wd c={CHALK} s={40} serif>Met three times</Wd>],
        ["These are not stages", 480, 300, <SK c={DIM} s={28} at="These are not stages" d={0.8}>stages</SK>],
        ["The logic does not produce the taste", 480, 420, <SK c={DIM} s={26} at="It unbinds the habit">logic produces the taste</SK>],
        ["It unbinds the habit", 480, 500, <K c={GREEN} s={26}>logic unbinds the habit</K>],
        ["And it is not a ladder climbed once", 480, 620, <SK c={DIM} s={26} at="It goes round again, wherever the habit of fixing returns">a ladder climbed once</SK>],
        ["It goes round again, wherever the habit of fixing returns", 960, 800, <Wd c={GOLD} s={32} serif>It goes round again, wherever fixing returns.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DescScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["And the taste has three descriptions", 960, 120, <Wd c={CHALK} s={42} serif>Three descriptions</Wd>],
        ["no one is behind it", 420, 380, <Box c={TEAL} w={480} title="anatta" sub="no one is behind it" />],
        ["nothing in it stands on its own", 960, 380, <Box c={GOLD} w={480} title="dependent arising" sub="nothing in it stands on its own" />],
        ["Spontaneous presence", 1500, 380, <Box c={VIOLET} w={480} title="spontaneous presence" sub="nothing missing, nothing making it" />],
      ]} />
      <Svg><DrawPath d="M180 520 L1740 520" p={ramp(t, c("None is higher"), 1.2)} color={DIM} width={3} len={1600} glow={false} /></Svg>
      <Items items={[
        ["Three angles on one face", 960, 650, <Wd c={CHALK} s={36} serif>three angles on one face</Wd>],
        ["None is higher", 960, 740, <K c={GOLD} s={30}>none is higher</K>],
      ]} />
    </AbsoluteFill>
  );
};

const FinalScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const last = c("with dirty hands");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, last + 6, 1.5) }}>
      <Items items={[
        ["No one behind it", 960, 220, <Wd c={TEAL} s={46} serif>No one behind it.</Wd>],
        ["Nothing standing alone", 960, 320, <Wd c={GOLD} s={46} serif>Nothing standing alone.</Wd>],
        ["Nothing missing", 960, 420, <Wd c={VIOLET} s={46} serif>Nothing missing.</Wd>],
        ["Met in the colours, in the hinges, and in the marketplace", 960, 560, <Wd c={CHALK} s={32}>met in the colours, in the hinges, in the marketplace</Wd>],
        ["with dirty hands", 960, 700, <div style={{ transform: "rotate(-8deg)" }}><Hand size={140} /></div>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["In Negation and Formation, freedom turned out to be in conventions", "dusk", <OpenScene />],
    ["That raises two questions", "doubt", <QuestionsScene />],
    ["There are two ways of knowing rightly here", "jade", <TwoWaysScene />],
    ["The second is freedom from all elaborations", "light", <StrokeScene />],
    ["So I keep two frameworks apart", "search", <FrameworksScene />],
    ["The framework is not the prison", "deep", <PrisonScene />],
    ["So the framework can be held three ways", "whole", <ThreeWaysScene />],
    ["Have a second thought", "doubt", <AppleScene />],
    ["Which brings the second question", "light", <MetScene />],
    ["there is only seeing, no seer", "jade", <ColoursScene />],
    ["How is this different from a refined", "deep", <MadeOfScene />],
    ["The taste widens", "light", <ExertionScene />],
    ["But a taste is not yet freedom", "doubt", <DesyncScene />],
    ["The habit does not announce itself", "search", <LogicScene />],
    ["Before freedom, the mind will always hinge on something", "deep", <HingeScene />],
    ["Stable does not mean the habit can never stir again", "whole", <RevisitScene />],
    ["After freedom from all elaborations", "market", <MarketScene />],
    ["Here dependent arising changes its role", "jade", <RoleScene />],
    ["Who decides, if no one is there", "search", <WhoScene />],
    ["And why help, if others are not found", "jade", <WhyScene />],
    ["So, looked back on, the taste has been met three times", "whole", <RoundScene />],
    ["And the taste has three descriptions", "light", <DescScene />],
    ["No one behind it", "night", <FinalScene />],
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
