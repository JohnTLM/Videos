// Bonus video: Dependent Arising Section 2 Part 7: Dōgen: The Shore and the Boat (AA47).
// (Script: new-documents/after-anatta/aa47-dogen-shore-and-boat-script.md, from EBooks
// Bonus Articles/dogen-shore-and-boat, draft of 2026-11-23; approved by the owner 2026-11-25: "Approved".)
// Arc: the shore slides past: shore or boat? -> who Dōgen was; four images, each its own taste -> the shore
// (Genjōkōan): the text; the usual reading (the self as still centre); my view: motion only changes owners ("shore
// moves", "boat moves", both struck), the seer in the seen and the seen in the seer, the moving singled out in the
// relation; taste: no seat outside; where I part -> rowing the boat (Zenki): the text and the one quoted line; the
// usual reading (one universal life); my view: rower and boat designated together, Dōgen's own guard; taste: no doer;
// where I part -> intimacy beyond relationship (never two; not fusion) -> which holds -> next: firewood and ash.
// Stance: no fixed point and no universal life are drawn except to be struck; the motion is drawn only between.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "You sit in a boat, and the shore slides past", "Is the shore moving? Or the boat? Or is that the wrong question",
  "I am John Tan, known as Thusness",
  // who
  "As a young monk he went from Japan to Song China", "is a collection of talks and essays written over some twenty years",
  "In Part 6, I asked how the seen can be just the seen, complete, and yet wholly dependent",
  "And he gives it in images, more than in arguments", "I take four of his images, and each has its own taste",
  "The shore that seems to move, and the boat that carries its rower",
  "The shore takes away a seer outside. The boat takes away a doer behind",
  // shore
  "First, the shore", "describes someone riding in a boat", "Looking at the shore, they think the shore is moving",
  "Looking closely at the boat, they see that it is the boat that moves",
  "we suppose our own mind and nature are permanent", "it is clear that nothing has a fixed self",
  "How is this usually read? The boat is the self", "the world seems to change around us", "Here is how I see it",
  "Motion is always motion relative to something", "The habit gives motion an owner",
  "First the shore moves. Then, corrected, the boat moves", "The motion has only changed owners",
  "takes away the still watcher", "But that is only half", "The seer is in the seen", "And the seen is in the seer",
  "No seer is found without the seeing", "And dependent arising shows what the moving is",
  "No one owns it. Not the shore. Not the boat. Not the seer", "That is the taste of this image. No seat outside",
  "I do not have to wait for some later insight to taste total exertion here",
  "The usual reading stops at the self that sets itself up as the still centre",
  "is still the habit, if the motion is simply handed to a new owner",
  // boat
  "Second, rowing the boat", "Total Dynamic Working", "You raise the sail, and steer with the pole",
  "Although you row, the boat gives you a ride", "your riding makes the boat what it is",
  "there is only the world of the boat", "Sky, water and shore all belong to the boat's moment",
  "And that moment is not the same as a moment that is not the boat", "So life is the total working of life",
  "Self and world are not two", "Some modern teachers widen this into one universal life",
  "This rowing, fully carried out", "The habit sees a rower who drives a boat", "There is just rowing",
  "The rowing needs the boat as much as the boat needs the rowing",
  "Arm, oar, water, wind and wood do not come together after they already exist",
  "They are designated together, in the one act", "are established only in dependence on each other",
  "They are not a bigger world, in which the rowing is a small event", "It stays this rowing",
  "No doer. Rowing and being carried, at once", "There is effort, and no one stands behind it",
  "I do not follow the reading of one universal life", "And the rowing is complete without one",
  // intimacy
  "Put the two boats side by side", "The shore takes away the watcher outside the event",
  "This changes what intimacy means", "Here, there were never two to bring together", "Hearing is the sounding",
  "Lungs, air, body, warmth and movement are one breathing", "I call this intimacy beyond relationship",
  "And it is not fusion", "Each is distinct, and more vivid for it",
  // which holds
  "So, which holds", "By experience. When I sit in a moving boat",
  "What is met is the moving and the rowing, complete, with nothing outside them",
  "By logic. If motion belonged to the shore by its own nature", "Each is what it is only with the other",
  "By working. Nothing works the less for this", "The shore is still where the boat lands",
  "It is the default, carried by habit, and by the word I", "I row the boat. I see the shore go by",
  "What fails is only a seer, a rower, or a boat, standing on its own",
  // close
  "This is Section 2, Part 7 of the Dependent Arising series", "In Part 8, I take",
  "Firewood and ash, each in its own position, with nothing carried over",
];

const M = {
  river: { a: "rgba(30,80,130,0.5)", b: "rgba(60,60,150,0.4)", c: "rgba(40,120,120,0.32)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  shore: { a: "rgba(40,110,90,0.46)", b: "rgba(40,70,130,0.42)", c: "rgba(150,120,60,0.3)" },
  row: { a: "rgba(150,100,50,0.44)", b: "rgba(40,80,140,0.44)", c: "rgba(40,120,120,0.32)" },
  close: { a: "rgba(70,55,140,0.48)", b: "rgba(40,100,120,0.38)", c: "rgba(150,100,50,0.3)" },
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
/** A boat on water with a shore of trees sliding past; `rel` 0..1 draws the moving between boat and shore. */
const ShoreBoat: React.FC<{ rel?: number; w?: number }> = ({ rel = 0, w = 900 }) => {
  const { t } = useT();
  const off = -((t * 40) % 180);
  return (
    <svg width={w} height={w * 0.44} viewBox="0 0 900 400" style={{ overflow: "visible" }}>
      <defs><clipPath id="clipShore"><rect x={0} y={0} width={900} height={400} /></clipPath></defs>
      <g clipPath="url(#clipShore)">
        <path d="M0 150 L900 150" stroke={GREEN} strokeWidth={4} />
        {[...Array(8)].map((_, i) => {
          const x = off + i * 180;
          return (
            <g key={i}>
              <path d={`M${x} 150 L${x} 110`} stroke={WARM} strokeWidth={6} />
              <circle cx={x} cy={90} r={30} fill={`${GREEN}33`} stroke={GREEN} strokeWidth={4} />
            </g>
          );
        })}
      </g>
      {[0, 1, 2].map((i) => <path key={i} d={`M0 ${250 + i * 34} Q225 ${238 + i * 34} 450 ${250 + i * 34} T900 ${250 + i * 34}`} stroke={ICE} strokeWidth={2} fill="none" opacity={0.45} />)}
      <path d="M330 250 L570 250 L530 300 L370 300 Z" fill="rgba(120,80,40,0.55)" stroke={WARM} strokeWidth={5} />
      <circle cx={450} cy={200} r={16} fill="none" stroke={CHALK} strokeWidth={4} />
      <path d="M450 216 L450 250" stroke={CHALK} strokeWidth={4} />
      <g opacity={rel}>
        <path d="M450 240 L450 160" stroke={TEAL} strokeWidth={5} markerEnd="" />
        <path d="M440 172 L450 156 L460 172 M440 228 L450 244 L460 228" stroke={TEAL} strokeWidth={5} fill="none" />
        <ellipse cx={450} cy={200} rx={190} ry={95} fill="none" stroke={TEAL} strokeWidth={3} strokeDasharray="10 8" />
      </g>
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
      <path d="M-200 -120 L-120 -40" stroke={ICE} strokeWidth={3} strokeDasharray="6 8" opacity={0.6} />
      <text x={-230} y={-130} fill={ICE} fontSize={22} fontFamily="SourceSans" opacity={0.8}>wind</text>
      <ellipse cx={0} cy={0} rx={250} ry={135} fill="none" stroke={TEAL} strokeWidth={4} opacity={glow * 0.8} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["You sit in a boat, and the shore slides past", 960, 470, <ShoreBoat />],
        ["Is the shore moving? Or the boat? Or is that the wrong question", 960, 150, <Wd c={GOLD} s={42} serif>The shore? The boat? Or the wrong question?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="In Part 6, I asked how the seen can be just the seen, complete, and yet wholly dependent">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Dōgen: The Shore and the Boat</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 7</Wd>, { d: 0.8 }],
        ["As a young monk he went from Japan to Song China", 960, 160, <Wd c={DIM} s={26}>Eihei Dōgen (1200–1253) · trained in Song China · founder of Japanese Sōtō Zen</Wd>],
        ["is a collection of talks and essays written over some twenty years", 960, 870, <K c={GOLD} s={24}>Shōbōgenzō: Treasury of the True Dharma Eye</K>, { pop: true }],
      ]} />
    </Phase>
    <Phase from="In Part 6, I asked how the seen can be just the seen, complete, and yet wholly dependent">
      <Items items={[
        ["In Part 6, I asked how the seen can be just the seen, complete, and yet wholly dependent", 960, 180, <Wd c={DIM} s={26}>Part 6: complete, and dependent · Dōgen's answer: total exertion</Wd>],
        ["And he gives it in images, more than in arguments", 960, 260, <Wd c={CHALK} s={30} serif>in images, more than arguments</Wd>],
        ["I take four of his images, and each has its own taste", 960, 400, <Wd c={DIM} s={24}>four images · four tastes</Wd>],
        ["The shore that seems to move, and the boat that carries its rower", 640, 520, <Box c={ICE} w={520} title="the shore" sub="takes away a seer outside" />, { pop: true }],
        ["The shore that seems to move, and the boat that carries its rower", 1280, 520, <Box c={WARM} w={520} title="the boat" sub="takes away a doer behind" />, { pop: true, d: 1.2 }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ShoreScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const rel = ramp(t, c("And dependent arising shows what the moving is"), 1);
  return (
    <AbsoluteFill>
      <Items items={[["First, the shore", 960, 80, <Wd c={ICE} s={44} serif>1 · The shore that seems to move</Wd>]]} />
      <At x={960} y={410} o={1 - 0.5 * ramp(t, c("But that is only half"), 0.5) + 0.5 * ramp(t, c("And dependent arising shows what the moving is"), 0.5)}><ShoreBoat rel={rel} w={760} /></At>
      <Phase to="How is this usually read? The boat is the self">
        <Items items={[
          ["describes someone riding in a boat", 960, 170, <Wd c={DIM} s={24}>the text, in brief</Wd>],
          ["Looking at the shore, they think the shore is moving", 960, 680, <Wd c={CHALK} s={26}>looking at the shore: the shore moves</Wd>],
          ["Looking closely at the boat, they see that it is the boat that moves", 960, 740, <Wd c={CHALK} s={26}>looking at the boat: the boat moves</Wd>],
          ["we suppose our own mind and nature are permanent", 960, 810, <Wd c={DIM} s={24}>a confused mind takes itself as permanent · nothing has a fixed self</Wd>],
        ]} />
      </Phase>
      <Phase from="How is this usually read? The boat is the self" to="Here is how I see it">
        <Items items={[
          ["How is this usually read? The boat is the self", 960, 700, <Box c={DIM} w={900} title="the usual reading" sub="the boat is the self, taking itself as the still centre (Okumura)" />, { pop: true }],
        ]} />
      </Phase>
      <Phase from="Here is how I see it" to="That is the taste of this image. No seat outside">
        <Items items={[
          ["Motion is always motion relative to something", 960, 170, <Wd c={GOLD} s={30} serif>motion is always relative to something</Wd>, { until: "No one owns it. Not the shore. Not the boat. Not the seer", ud: -0.3 }],
          ["The habit gives motion an owner", 520, 680, <SK at="The motion has only changed owners" d={0.5} s={24}>the shore moves</SK>],
          ["First the shore moves. Then, corrected, the boat moves", 960, 680, <SK at="The motion has only changed owners" d={0.8} s={24}>no, the boat moves</SK>, { d: 1.5 }],
          ["The motion has only changed owners", 1400, 680, <K c={WARM} s={22}>only a new owner</K>, { pop: true }],
          ["The seer is in the seen", 700, 770, <K c={TEAL} s={24}>the seer in the seen</K>, { pop: true }],
          ["And the seen is in the seer", 1220, 770, <K c={TEAL} s={24}>the seen in the seer</K>, { pop: true }],
          ["No seer is found without the seeing", 960, 840, <Wd c={DIM} s={22}>no seer without seeing, no seeing without a seer (MMK 3)</Wd>],
          ["No one owns it. Not the shore. Not the boat. Not the seer", 960, 170, <Wd c={TEAL} s={30} serif>the moving: singled out between · owned by no one</Wd>, { d: 0 }],
        ]} />
      </Phase>
      <Phase from="That is the taste of this image. No seat outside" to="Second, rowing the boat">
        <Items items={[
          ["That is the taste of this image. No seat outside", 960, 700, <K c={GOLD} s={34}>taste: no seat outside</K>, { pop: true }],
          ["I do not have to wait for some later insight to taste total exertion here", 960, 780, <Wd c={CHALK} s={24}>substantialist · anatta · dependent arising: one image, at once</Wd>],
          ["The usual reading stops at the self that sets itself up as the still centre", 960, 170, <Wd c={CHALK} s={26}>where I part: "it is really the boat" is still the habit</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const BoatScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["Second, rowing the boat", 960, 80, <Wd c={WARM} s={44} serif>2 · Rowing the boat</Wd>]]} />
      <At x={560} y={470} o={1}><Rower glow={ramp(t, c("They are designated together, in the one act"), 0.8)} /></At>
      <Phase to="Self and world are not two">
        <Items items={[
          ["Total Dynamic Working", 1360, 170, <Wd c={DIM} s={24}>Zenki: Total Dynamic Working</Wd>],
          ["Although you row, the boat gives you a ride", 1360, 280, <Wd c={CHALK} s={24} serif>"Although you row, the boat gives you a ride,</Wd>],
          ["Although you row, the boat gives you a ride", 1360, 330, <Wd c={CHALK} s={24} serif>and without the boat no one could ride.</Wd>, { d: 2.5 }],
          ["your riding makes the boat what it is", 1360, 380, <Wd c={CHALK} s={24} serif>…your riding makes the boat what it is."</Wd>],
          ["your riding makes the boat what it is", 1360, 425, <Wd c={DIM} s={20}>tr. Kazuaki Tanahashi</Wd>, { d: 0.6 }],
          ["Sky, water and shore all belong to the boat's moment", 1360, 520, <Wd c={CHALK} s={24}>sky, water, shore: the boat's moment</Wd>],
          ["And that moment is not the same as a moment that is not the boat", 1360, 590, <K c={GOLD} s={22}>not the same as a moment that is not the boat</K>, { pop: true }],
          ["So life is the total working of life", 1360, 680, <Wd c={DIM} s={22}>life: the total working of life · death: of death</Wd>],
        ]} />
      </Phase>
      <Phase from="Self and world are not two" to="The habit sees a rower who drives a boat">
        <Items items={[
          ["Self and world are not two", 1360, 300, <Box c={DIM} w={680} title="the usual reading" sub="self and world not two" />, { pop: true }],
          ["Some modern teachers widen this into one universal life", 1360, 450, <SK at="The habit sees a rower who drives a boat" d={-1} s={22}>one universal life, living through me (Uchiyama)</SK>],
          ["This rowing, fully carried out", 1360, 530, <Wd c={CHALK} s={22}>others: this rowing, fully carried out</Wd>],
        ]} />
      </Phase>
      <Phase from="The habit sees a rower who drives a boat" to="Put the two boats side by side">
        <Items items={[
          ["The habit sees a rower who drives a boat", 1360, 200, <SK at="There is just rowing" s={24}>a rower who drives a boat</SK>],
          ["There is just rowing", 1360, 270, <Wd c={CHALK} s={26}>just rowing</Wd>],
          ["The rowing needs the boat as much as the boat needs the rowing", 1360, 350, <Wd c={CHALK} s={22}>rowing needs the boat · the boat needs rowing</Wd>],
          ["Arm, oar, water, wind and wood do not come together after they already exist", 1360, 420, <Wd c={DIM} s={22}>arm · oar · water · wind · wood: not assembled after</Wd>],
          ["They are designated together, in the one act", 1360, 490, <K c={TEAL} s={24}>designated together, in one act</K>, { pop: true }],
          ["are established only in dependence on each other", 1360, 550, <Wd c={DIM} s={20}>agent and action (MMK 8.12)</Wd>],
          ["They are not a bigger world, in which the rowing is a small event", 1360, 620, <Wd c={CHALK} s={22}>conditions, fully · not a bigger world around it</Wd>],
          ["No doer. Rowing and being carried, at once", 1360, 720, <K c={GOLD} s={32}>taste: no doer</K>, { pop: true }],
          ["There is effort, and no one stands behind it", 1360, 790, <Wd c={CHALK} s={22}>effort, and no one behind it</Wd>],
          ["I do not follow the reading of one universal life", 960, 870, <Wd c={DIM} s={22}>where I part: no universal life behind the rowing · complete without one</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const IntimacyScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Put the two boats side by side", 960, 100, <Wd c={TEAL} s={42} serif>Intimacy beyond relationship</Wd>],
      ["The shore takes away the watcher outside the event", 640, 250, <Box c={ICE} w={520} title="the shore" sub="no watcher outside" />, { pop: true }],
      ["The shore takes away the watcher outside the event", 1280, 250, <Box c={WARM} w={520} title="the boat" sub="no doer behind" />, { pop: true, d: 1.5 }],
      ["This changes what intimacy means", 960, 410, <SK at="Here, there were never two to bring together" d={0.5} s={26}>two things come close</SK>],
      ["Here, there were never two to bring together", 960, 480, <Wd c={GOLD} s={30} serif>never two to bring together</Wd>],
      ["Hearing is the sounding", 600, 590, <K c={ICE} s={24}>hearing is the sounding</K>, { pop: true }],
      ["Lungs, air, body, warmth and movement are one breathing", 1320, 590, <K c={ICE} s={24}>one breathing</K>, { pop: true }],
      ["I call this intimacy beyond relationship", 960, 670, <Wd c={TEAL} s={28} serif>no gap, so nothing to bridge</Wd>],
      ["And it is not fusion", 960, 770, <K c={GOLD} s={26}>not fusion</K>, { pop: true }],
      ["Each is distinct, and more vivid for it", 960, 840, <Wd c={CHALK} s={24}>the oar is not the water · each distinct, more vivid</Wd>],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. When I sit in a moving boat", 400, 270, <Box c={ICE} w={500} title="Experience" sub="moving and rowing, nothing outside" />, { pop: true }],
      ["By logic. If motion belonged to the shore by its own nature", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="each only with the other" />, { pop: true }],
      ["By working. Nothing works the less for this", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="the boat still crosses, and lands" />, { pop: true }],
      ["It is the default, carried by habit, and by the word I", 960, 470, <Wd c={CHALK} s={28} serif>a still watcher, a rower who drives: the default</Wd>],
      ["I row the boat. I see the shore go by", 960, 590, <K c={GREEN} s={26}>I row the boat · I see the shore go by</K>, { pop: true }],
      ["What fails is only a seer, a rower, or a boat, standing on its own", 960, 680, <Wd c={DIM} s={24}>what fails: a seer, a rower or a boat standing on its own</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("Firewood and ash, each in its own position, with nothing carried over");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 7 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 7</Wd>],
        ["In Part 8, I take", 960, 300, <Wd c={DIM} s={26}>next, Part 8: Dōgen: Firewood and Ash</Wd>],
        ["Firewood and ash, each in its own position, with nothing carried over", 960, 480, <Box c={ROSE} w={760} title="firewood and ash" sub="each in its own position · nothing carried over" />, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["You sit in a boat, and the shore slides past", "river", <OpenScene />],
    ["First, the shore", "shore", <ShoreScene />],
    ["Second, rowing the boat", "row", <BoatScene />],
    ["Put the two boats side by side", "close", <IntimacyScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 7 of the Dependent Arising series", "night", <CloseScene />],
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
