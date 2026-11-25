// Bonus video: Dependent Arising Section 2 Part 9: Dōgen: The Fish and the Bird (AA49).
// (Script: new-documents/after-anatta/aa49-dogen-fish-and-bird-script.md, from EBooks
// Bonus Articles/dogen-fish-and-bird, draft of 2026-11-23; approved by the owner 2026-11-25: "Approved".)
// Arc: must the fish reach the end of the water? -> place as the fourth way to stand outside the event -> the fish
// and the bird (Genjōkōan): the text, the ocean that looks round only as far as the eye reaches; the usual reading;
// container struck; fish and water designated together; taste: no elsewhere, the end of external conditions; where I
// part -> the fan (Baoche of Mayu): the wind is this fanning -> the four images together (table) -> the other tastes ->
// what it does not mean (the guards, struck) -> a taste that cannot yet explain itself (the chariot) -> which holds
// -> next: Huayan.
// Stance: no container, medium or cosmos is drawn except to be struck. Cue phrases avoid names and respelled words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "A fish swims, and the water has no end", "Must it reach the end of the water, to know the water",
  "I am John Tan, known as Thusness",
  // place
  "In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it",
  "In Part 8, firewood and ash took away a past or a future, needed to complete it",
  "One more way something could stand outside the event remains. A wider place",
  "Surely the event is complete only when the rest is added", "image for this is the fish and the bird",
  "And then, in this part, I bring the four images together",
  // fish
  "First, the fish and the bird", "however far it swims, the water has no end", "Yet neither has ever left its element",
  "When the need is large, the use is large", "Each covers its whole range completely", "Water is life, and sky is life",
  "would find no way, and no place", "When you find your place right here, practice happens", "the ocean looks round",
  "But it is neither round nor square", "It looks round only as far as the eye can reach",
  "How is this usually read? It is a teaching on practice", "Practise where you are, and the Way is realised there",
  "are often read as the Way, or as buddha nature", "The habit sees a fish inside a container of water",
  "And it thinks it must reach them, to know the whole", "takes away the seeker who stands apart from the swimming",
  "The fish is a fish only with the water", "They are designated together", "Wherever the fish is, the swimming is complete",
  "guards against the big reading", "No one ever meets the whole as a sum",
  "That is the taste of this image. No elsewhere", "Being at home where I am",
  "And the conditions are not outside influences, pressing in from beyond", "It takes part as the swimming",
  "This is what I call the end of external conditions", "I keep the reading on practice",
  "The water is as dependent as the fish. Neither is the floor",
  // fan
  "Second, the fan", "ends with a story", "was fanning himself",
  "the nature of wind is permanent, and there is no place it does not reach", "Why, then, do you use a fan",
  "You do not yet know the meaning of its reaching everywhere", "The master just went on fanning", "And the monk bowed",
  "you know neither permanence, nor the nature of wind", "Buddha nature is everywhere, yet it must be realised in practice",
  "The monk's mistake is the one this whole section has been taking apart", "A given, waiting, needing nothing",
  "But there is no wind waiting everywhere, behind the fanning", "The wind is this fanning",
  "Reaching everywhere does not mean a substance spread through all places", "The master does not explain. He fans",
  // four together
  "Now the four images, together", "The shore takes away a seer outside", "The boat takes away a doer behind",
  "Firewood and ash take away a past or a future to complete it",
  "The fish and the bird take away a wider place to complete it", "Take away all four, and the event lacks nothing",
  "And each image is complete as its dependence", "That is why total exertion is not a row of islands",
  "And its wholeness is its conditions, fully spent as it",
  // tastes
  "Some other tastes run through all four", "Seamless, without fusion",
  "Sound never becomes colour. The shore never becomes the boat", "Activity, without things behind it",
  "Nouns turn into verbs", "That is the substrate again, only liquid", "Luminous. None of this is merely functional",
  "Light, and trustworthy", "The world holds together, without anything holding it",
  // not mean
  "What total exertion does not mean", "The whole cosmos is present in each moment", "But it quietly brings back a ground",
  "That is holism", "So, to gather the guards", "Not one Whole. Not one substance. No cosmos packed inside",
  "Not islands. Not a line, or a web. Not a medium", "And not the parts as the real stuff either",
  "There is just this stroke of the oar, fully exerted",
  // chariot
  "A taste that cannot yet explain itself", "Total exertion perplexed me",
  "The taste had changed. The grammar of thought had not", "This is not a failure of practice",
  "It came from seeing that the old chariot is not an analogy about a vehicle",
  "It is an exact description of this very moment", "And yet it carries its passenger", "And the fish, and the water",
  // which holds
  "So, which holds", "By experience. When I swim, or walk, or hear the bell",
  "By logic. If the fish were a fish apart from the water", "By working. Nothing works the less for this",
  "The fish swims. The bird flies. The fan cools the face", "Both are the default, carried by habit, and by nouns",
  "The fish swims in the sea. I fan myself on a hot day",
  "What fails is only a fish, a sea, a wind, or a cosmos, standing on its own",
  // close
  "This is Section 2, Part 9 of the Dependent Arising series",
  "In Part 10, I go to the classical home of this taste, in Chinese Buddhism", "Worlds in a grain of dust",
  "A rafter, and the building it makes", "And a net of jewels, each reflecting all the others",
];

const M = {
  sea: { a: "rgba(30,80,140,0.52)", b: "rgba(50,60,150,0.4)", c: "rgba(40,130,130,0.32)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  wind: { a: "rgba(40,110,110,0.46)", b: "rgba(60,50,130,0.42)", c: "rgba(150,120,60,0.3)" },
  four: { a: "rgba(70,55,140,0.48)", b: "rgba(40,100,120,0.38)", c: "rgba(150,100,50,0.3)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
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
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A fish swimming in water with no drawn edge; `box` 0..1 shows the habit's container (dashed). */
const Fish: React.FC<{ box?: number }> = ({ box = 0 }) => {
  const { t } = useT();
  const x = Math.sin(t * 0.8) * 90;
  const y = Math.sin(t * 1.3) * 20;
  return (
    <svg width={560} height={340} viewBox="-280 -170 560 340" style={{ overflow: "visible" }}>
      {[0, 1, 2, 3].map((i) => <path key={i} d={`M-280 ${-90 + i * 60} Q-140 ${-100 + i * 60} 0 ${-90 + i * 60} T280 ${-90 + i * 60}`} stroke={ICE} strokeWidth={2} fill="none" opacity={0.3} />)}
      <rect x={-230} y={-130} width={460} height={260} rx={10} fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 8" opacity={box} />
      <g transform={`translate(${x},${y})`}>
        <path d="M-50 0 Q-10 -34 40 0 Q-10 34 -50 0 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
        <path d="M-50 0 L-78 -22 L-78 22 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
        <circle cx={20} cy={-6} r={4} fill={GOLD} />
      </g>
    </svg>
  );
};
/** A bird gliding in an open sky. */
const Bird: React.FC = () => {
  const { t } = useT();
  const x = Math.sin(t * 0.6) * 100;
  const f = Math.sin(t * 6) * 14;
  return (
    <svg width={460} height={260} viewBox="-230 -130 460 260" style={{ overflow: "visible" }}>
      <g transform={`translate(${x},${Math.cos(t * 0.9) * 20})`}>
        <path d={`M-60 ${f} Q-30 ${-20 + f / 2} 0 0 Q30 ${-20 + f / 2} 60 ${f}`} stroke={CHALK} strokeWidth={5} fill="none" />
      </g>
    </svg>
  );
};
/** The ocean seen from a boat: a circle only as far as the eye reaches. */
const Ocean: React.FC = () => (
  <svg width={520} height={320} viewBox="-260 -160 520 320" style={{ overflow: "visible" }}>
    <ellipse cx={0} cy={0} rx={230} ry={120} fill="rgba(80,140,200,0.12)" stroke={ICE} strokeWidth={3} strokeDasharray="12 8" />
    <path d="M-30 20 L30 20 L20 34 L-20 34 Z" fill="rgba(120,80,40,0.6)" stroke={WARM} strokeWidth={3} />
    <text x={0} y={150} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans">round only as far as the eye reaches</text>
  </svg>
);
/** A hand fan, waving, with lines of moving air. */
const Fan: React.FC = () => {
  const { t } = useT();
  const a = Math.sin(t * 4) * 14;
  return (
    <svg width={460} height={360} viewBox="-230 -200 460 360" style={{ overflow: "visible" }}>
      <g transform={`rotate(${a}, 0, 120)`}>
        <path d="M0 120 L-110 -60 A130 130 0 0 1 110 -60 Z" fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} />
        {[-80, -40, 0, 40, 80].map((x) => <path key={x} d={`M0 120 L${x} -80`} stroke={TEAL} strokeWidth={2} opacity={0.7} />)}
        <path d="M0 120 L0 150" stroke={WARM} strokeWidth={8} strokeLinecap="round" />
      </g>
      {[0, 1, 2].map((i) => {
        const k = (t * 0.8 + i / 3) % 1;
        return <path key={i} d={`M${130 + k * 60} ${-40 + i * 40} q20 -10 40 0`} stroke={ICE} strokeWidth={3} fill="none" opacity={1 - k} />;
      })}
    </svg>
  );
};
/** A simple chariot. */
const Chariot: React.FC = () => (
  <svg width={420} height={220} viewBox="0 0 420 220" style={{ overflow: "visible" }}>
    <path d="M80 70 L300 70 L280 140 L100 140 Z" fill="rgba(120,80,40,0.45)" stroke={WARM} strokeWidth={5} />
    <path d="M300 100 L400 100" stroke={WARM} strokeWidth={6} />
    <circle cx={150} cy={160} r={44} fill="none" stroke={CHALK} strokeWidth={5} />
    <path d="M150 116 L150 204 M106 160 L194 160" stroke={CHALK} strokeWidth={3} />
    <circle cx={190} cy={40} r={14} fill="none" stroke={CHALK} strokeWidth={4} />
    <path d="M190 54 L190 70" stroke={CHALK} strokeWidth={4} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A fish swims, and the water has no end", 960, 450, <Fish />],
        ["Must it reach the end of the water, to know the water", 960, 790, <Wd c={GOLD} s={40} serif>Must it reach the end, to know the water?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Dōgen: The Fish and the Bird</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 9</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it">
      <Items items={[
        ["In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it", 960, 200, <Wd c={DIM} s={26}>Part 7: no seat outside · no doer behind</Wd>],
        ["In Part 8, firewood and ash took away a past or a future, needed to complete it", 960, 260, <Wd c={DIM} s={26}>Part 8: no past or future to complete it</Wd>],
        ["One more way something could stand outside the event remains. A wider place", 960, 380, <Wd c={CHALK} s={36} serif>a fourth: a wider place</Wd>],
        ["Surely the event is complete only when the rest is added", 960, 480, <SK at="And then, in this part, I bring the four images together" s={26}>complete only when the rest is added</SK>],
        ["image for this is the fish and the bird", 960, 620, <K c={ICE} s={28}>the fish and the bird</K>, { pop: true }],
        ["And then, in this part, I bring the four images together", 960, 700, <Wd c={CHALK} s={26}>then: the four images together</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const FishScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const box = ramp(t, c("The habit sees a fish inside a container of water"), 0.6) * (1 - ramp(t, c("takes away the seeker who stands apart from the swimming"), 0.8));
  return (
    <AbsoluteFill>
      <Items items={[["First, the fish and the bird", 960, 80, <Wd c={ICE} s={44} serif>1 · The fish and the bird</Wd>]]} />
      <At x={520} y={360} o={1}><Fish box={box} /></At>
      <At x={520} y={700} o={ramp(t, c("Yet neither has ever left its element"), 0.6)}><Bird /></At>
      <Phase to="How is this usually read? It is a teaching on practice">
        <Items items={[
          ["however far it swims, the water has no end", 1380, 200, <Wd c={CHALK} s={24}>no end to the water · no end to the sky</Wd>],
          ["Yet neither has ever left its element", 1380, 260, <Wd c={CHALK} s={24}>yet neither has ever left its element</Wd>],
          ["When the need is large, the use is large", 1380, 330, <Wd c={DIM} s={22}>need large, use large · need small, use small</Wd>],
          ["Each covers its whole range completely", 1380, 390, <K c={GOLD} s={24}>each covers its whole range completely</K>, { pop: true }],
          ["Water is life, and sky is life", 1380, 460, <Wd c={DIM} s={22}>water is life · sky is life</Wd>],
          ["would find no way, and no place", 1380, 520, <Wd c={DIM} s={22}>reach the end first? no way, no place</Wd>],
          ["When you find your place right here, practice happens", 1380, 570, <Wd c={CHALK} s={24}>find your place right here</Wd>],
          ["the ocean looks round", 1380, 775, <Ocean />],
        ]} />
      </Phase>
      <Phase from="How is this usually read? It is a teaching on practice" to="The habit sees a fish inside a container of water">
        <Items items={[
          ["How is this usually read? It is a teaching on practice", 1380, 360, <Box c={DIM} w={720} title="the usual reading" sub="practise where you are · the water and sky as the Way, or buddha-nature" />, { pop: true }],
        ]} />
      </Phase>
      <Phase from="The habit sees a fish inside a container of water" to="Second, the fan">
        <Items items={[
          ["The habit sees a fish inside a container of water", 1380, 200, <SK at="takes away the seeker who stands apart from the swimming" s={24}>a fish in a container, seeking the edge</SK>],
          ["takes away the seeker who stands apart from the swimming", 1380, 270, <Wd c={CHALK} s={24}>no seeker apart: just swimming</Wd>],
          ["The fish is a fish only with the water", 1380, 340, <Wd c={CHALK} s={24}>fish only with water · water is life only in swimming</Wd>],
          ["They are designated together", 1380, 400, <K c={TEAL} s={24}>designated together</K>, { pop: true }],
          ["Wherever the fish is, the swimming is complete", 1380, 460, <Wd c={GOLD} s={26} serif>complete wherever it is</Wd>],
          ["No one ever meets the whole as a sum", 1380, 530, <Wd c={DIM} s={22}>the ocean only looks round · the whole never met as a sum</Wd>],
          ["That is the taste of this image. No elsewhere", 1380, 620, <K c={GOLD} s={32}>taste: no elsewhere</K>, { pop: true }],
          ["It takes part as the swimming", 1380, 700, <Wd c={CHALK} s={22}>water takes part as the swimming: the end of external conditions</Wd>],
          ["The water is as dependent as the fish. Neither is the floor", 1380, 790, <Wd c={DIM} s={22}>where I part: the water is no ground · neither is the floor</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const FanScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Second, the fan", 960, 80, <Wd c={TEAL} s={44} serif>2 · The fan</Wd>],
      ["ends with a story", 960, 150, <Wd c={DIM} s={22}>Baoche of Mayu, fanning himself</Wd>],
      ["was fanning himself", 520, 470, <Fan />],
      ["the nature of wind is permanent, and there is no place it does not reach", 1360, 260, <Wd c={CHALK} s={24}>"wind is everywhere: why fan?"</Wd>],
      ["You do not yet know the meaning of its reaching everywhere", 1360, 330, <Wd c={CHALK} s={22}>"you don't yet know its reaching everywhere"</Wd>],
      ["The master just went on fanning", 1360, 400, <K c={TEAL} s={24}>he just fans · the monk bows</K>, { pop: true }],
      ["Buddha nature is everywhere, yet it must be realised in practice", 1360, 480, <Wd c={DIM} s={22}>usual reading: everywhere, yet realised in practice</Wd>],
      ["A given, waiting, needing nothing", 1360, 570, <SK at="The wind is this fanning" s={24}>a wind already there, waiting everywhere</SK>],
      ["The wind is this fanning", 1360, 650, <Wd c={GOLD} s={30} serif>the wind is this fanning</Wd>],
      ["Reaching everywhere does not mean a substance spread through all places", 1360, 720, <Wd c={CHALK} s={22}>wherever realised, wholly there · no substance spread through all</Wd>],
      ["The master does not explain. He fans", 1360, 800, <K c={GREEN} s={24}>he does not explain · he fans</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const FourScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now the four images, together", 960, 90, <Wd c={GOLD} s={44} serif>Four images, one taste</Wd>],
      ["The shore takes away a seer outside", 960, 210, <Box c={ICE} w={1100} title="the shore: no seer outside" sub="one moving, owned by no one" />, { pop: true }],
      ["The boat takes away a doer behind", 960, 330, <Box c={WARM} w={1100} title="the boat: no doer behind" sub="the act, its conditions wholly at work" />, { pop: true }],
      ["Firewood and ash take away a past or a future to complete it", 960, 450, <Box c={ROSE} w={1100} title="firewood and ash: no past or future to complete it" sub="this position, complete" />, { pop: true }],
      ["The fish and the bird take away a wider place to complete it", 960, 570, <Box c={TEAL} w={1100} title="the fish and the bird: no wider place to complete it" sub="here, the whole range covered" />, { pop: true }],
      ["Take away all four, and the event lacks nothing", 960, 700, <Wd c={GOLD} s={30} serif>the event lacks nothing: no wider whole stands behind it</Wd>],
      ["And each image is complete as its dependence", 960, 770, <Wd c={CHALK} s={24}>each complete as its dependence</Wd>],
      ["That is why total exertion is not a row of islands", 960, 830, <K c={TEAL} s={22}>not islands: its wholeness is its conditions, fully spent</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const TastesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Some other tastes run through all four", 960, 100, <Wd c={TEAL} s={42} serif>Tastes through all four</Wd>],
      ["Seamless, without fusion", 960, 250, <Box c={ICE} w={900} title="seamless, without fusion" sub="sound never becomes colour · no invisible walls" />, { pop: true }],
      ["Activity, without things behind it", 960, 400, <Box c={WARM} w={900} title="activity, without things behind it" sub="rowing · burning · swimming · fanning" />, { pop: true }],
      ["That is the substrate again, only liquid", 960, 500, <K c={DIM} s={22}>a medium under the verbs = the substrate, only liquid</K>, { pop: true }],
      ["Luminous. None of this is merely functional", 960, 610, <Box c={GOLD} w={900} title="luminous" sub="the clarity is the event appearing" />, { pop: true }],
      ["Light, and trustworthy", 960, 760, <Box c={GREEN} w={900} title="light, and trustworthy" sub="the world holds together without anything holding it" />, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const NotScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["What total exertion does not mean", 960, 100, <Wd c={WARM} s={42} serif>What it does not mean</Wd>],
      ["The whole cosmos is present in each moment", 960, 220, <SK at="That is holism" d={0.5} s={26}>the whole cosmos present in each moment</SK>],
      ["But it quietly brings back a ground", 960, 300, <Wd c={DIM} s={22}>a Whole as the floor: holism, the floor moved</Wd>],
      ["Not one Whole. Not one substance. No cosmos packed inside", 600, 430, <SK at="There is just this stroke of the oar, fully exerted" d={-1} s={22}>one Whole · one substance · a cosmos inside</SK>],
      ["Not islands. Not a line, or a web. Not a medium", 1320, 430, <SK at="There is just this stroke of the oar, fully exerted" d={-0.7} s={22}>islands · a line · a web · a medium</SK>],
      ["And not the parts as the real stuff either", 960, 530, <SK at="There is just this stroke of the oar, fully exerted" d={-0.4} s={22}>the parts as the real stuff</SK>],
      ["There is just this stroke of the oar, fully exerted", 960, 680, <Wd c={GOLD} s={32} serif>just this stroke of the oar, fully exerted</Wd>],
    ]} />
  </AbsoluteFill>
);

const ChariotScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A taste that cannot yet explain itself", 960, 100, <Wd c={VIOLET} s={40} serif>A taste that cannot yet explain itself</Wd>],
      ["Total exertion perplexed me", 960, 210, <Wd c={CHALK} s={26}>complete as lived · unresolved in meaning</Wd>],
      ["The taste had changed. The grammar of thought had not", 960, 280, <Wd c={DIM} s={24}>the taste changed · the grammar had not</Wd>],
      ["This is not a failure of practice", 960, 340, <K c={GREEN} s={22}>not a failure: how it matures</K>, { pop: true }],
      ["It came from seeing that the old chariot is not an analogy about a vehicle", 960, 520, <Chariot />],
      ["It is an exact description of this very moment", 960, 700, <Wd c={GOLD} s={28} serif>an exact description of this very moment</Wd>],
      ["And yet it carries its passenger", 960, 770, <Wd c={CHALK} s={22}>not the wheels, not the axle, not apart · yet it carries</Wd>],
      ["And the fish, and the water", 960, 840, <K c={TEAL} s={22}>rowing and boat · wood, fire, ash · fish and water: designated together</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. When I swim, or walk, or hear the bell", 400, 270, <Box c={ICE} w={500} title="Experience" sub="here, complete · nothing outside it" />, { pop: true }],
      ["By logic. If the fish were a fish apart from the water", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="the whole is never met as a sum" />, { pop: true }],
      ["By working. Nothing works the less for this", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="the fish swims, the fan cools" />, { pop: true }],
      ["Both are the default, carried by habit, and by nouns", 960, 470, <Wd c={CHALK} s={28} serif>separate things, or one great Whole: the default</Wd>],
      ["The fish swims in the sea. I fan myself on a hot day", 960, 590, <K c={GREEN} s={24}>the fish swims in the sea · I fan myself on a hot day</K>, { pop: true }],
      ["What fails is only a fish, a sea, a wind, or a cosmos, standing on its own", 960, 680, <Wd c={DIM} s={22}>what fails: a fish, a sea, a wind or a cosmos standing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And a net of jewels, each reflecting all the others");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 9 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 9</Wd>],
        ["In Part 10, I go to the classical home of this taste, in Chinese Buddhism", 960, 300, <Wd c={DIM} s={26}>next, Part 10: Total Exertion: Huayan</Wd>],
        ["Worlds in a grain of dust", 440, 480, <Box c={GOLD} w={420} title="a grain of dust" sub="worlds, without obstruction" />, { pop: true }],
        ["A rafter, and the building it makes", 960, 480, <Box c={WARM} w={420} title="the rafter" sub="and the building it makes" />, { pop: true }],
        ["And a net of jewels, each reflecting all the others", 1480, 480, <Box c={ICE} w={420} title="Indra's net" sub="each jewel reflecting all" />, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A fish swims, and the water has no end", "sea", <OpenScene />],
    ["First, the fish and the bird", "sea", <FishScene />],
    ["Second, the fan", "wind", <FanScene />],
    ["Now the four images, together", "four", <FourScene />],
    ["Some other tastes run through all four", "dusk", <TastesScene />],
    ["What total exertion does not mean", "ghost", <NotScene />],
    ["A taste that cannot yet explain itself", "four", <ChariotScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 9 of the Dependent Arising series", "night", <CloseScene />],
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
