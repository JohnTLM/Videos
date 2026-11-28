// Bonus video: Dependent Arising Section 7 Part 2: Objections, Fairly Answered (AA66), the close of the series.
// (Script: new-documents/after-anatta/aa66-objections-fairly-answered-script.md, from EBooks Bonus Articles/
// objections-fairly-answered, approved by the owner 2026-11-28; script approved the same day: "Approved, go ahead".)
// Arc: the opponent's verse -> why objections, and the method -> six objections, each stated then answered
// (nihilism; all mind; only concepts; the Hard Problem; stretched physics; emptiness or the web as absolute)
// -> the relief check -> close of the series.
// Stance: no answer is drawn as a new ground; emptiness and relations never drawn as things.
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
  "If all this is empty, nothing arises and nothing ends", "I am John Tan, known as Thusness",
  "Over six sections I have argued", "A view that says this will meet objections", "Some come from philosophers",
  "did not avoid them", "That is the method I want to follow", "There are six",
  // 1 nihilism
  "The first. This is nihilism", "If nothing has a nature of its own, then nothing really exists", "ends in a shrug",
  "opponent says it exactly", "He turns it round, word for word", "A thing with its own nature could not arise",
  "It is the world of own natures that is frozen", "And the shrug rests on what it claims to deny",
  "That is the same assumption as the eternalist's", "The person who is not found is the person who keeps the promise",
  // 2 mind
  "The second. Then it is all mind", "Surely, then, everything is mind", "This is the most natural next step",
  "That is the ground coming back, this time as mind", "But the ringing of a bell is there only with the bronze",
  "Clarity is never absent from what appears", "It changes its stuff", "Matter stuff traded for mind stuff is still stuff",
  // 3 concepts
  "The third. Then it is only concepts, and anything goes", "So any view is as good as any other",
  "Designation is not arbitrary, and it is not free", "A forged passport fails", "gives three tests",
  "The snake in the rope fails the second", "The rope, as named, passes all three",
  "Merely conventional was never meant as merely made up",
  // 4 hard problem
  "The fourth. Dissolving the Hard Problem is not solving it", "Why does this brain activity go with this taste of coffee",
  "because the objection is partly right", "What falls away is one question", "That question needs two banks and a bridge",
  "A third substrate does not help", "What does not fall away is the ordinary, workable question",
  "I am not offering a theory of how matter makes mind", "not a mystery, but a field of study",
  // 5 physics
  "The fifth. The physics is being stretched", "Physicists object, rightly", "I agree with the caution",
  "Emptiness does not depend on physics", "I also said where I part from them", "What I take from physics is modest",
  "The view stands or falls on looking",
  // 6 absolute
  "The sixth. Then emptiness, or the web, is the new absolute", "Isn't emptiness your ground", "saw this coming",
  "But those for whom emptiness becomes a view", "Emptiness is not a thing behind things", "The web is the same",
  "The relating is as empty as what it relates",
  // relief
  "Most of these objections are not only out there", "Each comes with a small sense of relief",
  "ask what it is relieved to have found", "Neither is needed",
  // close
  "This is Section 7, Part 2 of the Dependent Arising series, and the close of the series",
  "The bell still rings when it is struck",
];

const M = {
  open: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  nihil: { a: "rgba(40,40,100,0.52)", b: "rgba(120,60,70,0.38)", c: "rgba(30,60,100,0.34)" },
  mind: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  concepts: { a: "rgba(170,120,50,0.42)", b: "rgba(50,70,120,0.44)", c: "rgba(60,110,90,0.3)" },
  hard: { a: "rgba(150,70,60,0.42)", b: "rgba(60,50,120,0.44)", c: "rgba(150,110,60,0.3)" },
  phys: { a: "rgba(40,100,130,0.46)", b: "rgba(60,50,120,0.4)", c: "rgba(40,90,110,0.32)" },
  abs: { a: "rgba(130,60,80,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  relief: { a: "rgba(60,110,70,0.46)", b: "rgba(150,120,60,0.36)", c: "rgba(40,80,90,0.32)" },
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
/** Six small marks; the current objection is lit. */
const Six: React.FC<{ n: number }> = ({ n }) => (
  <div style={{ display: "flex", gap: 18 }}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} style={{ width: 40, height: 40, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center",
        border: `2px solid ${i === n ? GOLD : "rgba(200,200,220,0.35)"}`, background: i < n ? "rgba(200,170,90,0.18)" : "transparent",
        boxShadow: i === n ? `0 0 18px ${GOLD}88` : "none" }}>
        <Wd c={i === n ? GOLD : DIM} s={20}>{String(i)}</Wd>
      </div>
    ))}
  </div>
);
/** Two banks, each defined by its own nature, and a bridge asked for between them; then struck. */
const Banks: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const b = c("That question needs two banks and a bridge");
  const third = c("A third substrate does not help");
  const plank = ramp(t, b + 2, 2.5);
  const lift = ramp(t, third + 0.5, 2);
  return (
    <div style={{ position: "relative", width: 1300, height: 300 }}>
      <div style={{ position: "absolute", left: 0, top: 120 }}><Box c={WARM} w={360} title="matter" sub="its nature: to lack feeling" /></div>
      <div style={{ position: "absolute", right: 0, top: 120 }}><Box c={ICE} w={360} title="mind" sub="its nature: to feel" /></div>
      <div style={{ position: "absolute", left: 380, top: 190, width: 540 * plank, height: 8, borderRadius: 4,
        background: `repeating-linear-gradient(90deg, ${DIM} 0 30px, transparent 30px 42px)` }} />
      <div style={{ position: "absolute", left: 380, width: 540, top: 215, textAlign: "center", opacity: plank }}>
        <Wd c={DIM} s={22}>how does one produce the other?</Wd>
      </div>
      <div style={{ position: "absolute", left: 650, top: 40 - 20 * lift, transform: "translate(-50%,0)", opacity: lift }}>
        <SK at="What does not fall away is the ordinary, workable question" c={VIOLET} s={24}>a third substrate: "the ground"</SK>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const Head: React.FC<{ n: number; cue: string; c: string; title: string }> = ({ n, cue, c: col, title }) => (
  <Items items={[
    [cue, 960, 50, <Six n={n} />],
    [cue, 960, 130, <Wd c={col} s={40} serif>{title}</Wd>],
  ]} />
);

const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["If all this is empty, nothing arises and nothing ends", 960, 380, <Wd c={CHALK} s={40} serif>"If all this is empty, nothing arises and nothing ends."</Wd>],
        ["If all this is empty, nothing arises and nothing ends", 960, 520, <Wd c={GOLD} s={30}>the strongest objection, in his own book · and his answer</Wd>, { d: 3 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Over six sections I have argued">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Objections, Fairly Answered</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 7 · Part 2 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Over six sections I have argued">
      <Items items={[
        ["Over six sections I have argued", 960, 160, <Wd c={DIM} s={26}>nothing with a nature of its own: apple · moment · mind · matter · the links</Wd>],
        ["A view that says this will meet objections", 960, 270, <Wd c={CHALK} s={32} serif>it will meet objections, and it should</Wd>],
        ["Some come from philosophers", 960, 360, <Wd c={DIM} s={24}>philosophers · scientists · other Buddhists · one's own mind at 3 a.m.</Wd>],
        ["did not avoid them", 960, 480, <Wd c={TEAL} s={26}>the opponent's case first, in the opponent's words</Wd>],
        ["That is the method I want to follow", 960, 590, <K c={GOLD} s={28}>at its strongest · then answered on its own terms</K>, { pop: true }],
        ["There are six", 960, 710, <Six n={0} />],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const NihilScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={1} cue="The first. This is nihilism" c={ROSE} title="1 · This is nihilism" />
    <Items items={[
      ["If nothing has a nature of its own, then nothing really exists", 960, 240, <Wd c={DIM} s={26}>no own nature → nothing exists → nothing matters</Wd>],
      ["ends in a shrug", 960, 310, <Wd c={DIM} s={26}>… a shrug</Wd>],
      ["opponent says it exactly", 960, 400, <Wd c={CHALK} s={26} serif>if all this is empty: no arising, no passing, no four truths</Wd>],
      ["He turns it round, word for word", 960, 480, <K c={GOLD} s={26}>if all this were NOT empty: no arising, no passing, no four truths</K>, { pop: true }],
      ["A thing with its own nature could not arise", 960, 570, <Wd c={DIM} s={24}>could not arise · could not change · could not end</Wd>],
      ["It is the world of own natures that is frozen", 960, 640, <Wd c={TEAL} s={28} serif>the world of own natures is the frozen one</Wd>],
      ["And the shrug rests on what it claims to deny", 960, 720, <Wd c={DIM} s={24}>the shrug needs a solid core · the eternalist's assumption, mourned</Wd>],
      ["The person who is not found is the person who keeps the promise", 960, 800, <K c={GOLD} s={26}>the person not found keeps the promise</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MindScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={2} cue="The second. Then it is all mind" c={VIOLET} title="2 · Then it is all mind" />
    <Items items={[
      ["Surely, then, everything is mind", 960, 250, <Wd c={DIM} s={26}>only appearing is left · so everything is mind?</Wd>],
      ["This is the most natural next step", 960, 340, <Wd c={CHALK} s={26}>producer gone · hearer gone · mind left standing</Wd>],
      ["That is the ground coming back, this time as mind", 960, 420, <K c={ROSE} s={26}>the ground, back as mind</K>, { pop: true }],
      ["But the ringing of a bell is there only with the bronze", 960, 520, <Wd c={TEAL} s={26}>bronze · strike · air · ear: not mind from its own side</Wd>],
      ["Clarity is never absent from what appears", 960, 610, <Wd c={DIM} s={24}>clarity: never absent · made the stuff of everything: one more reification</Wd>],
      ["Matter stuff traded for mind stuff is still stuff", 960, 720, <SK at="Matter stuff traded for mind stuff is still stuff" d={2.5} s={28}>matter-stuff → mind-stuff</SK>],
    ]} />
  </AbsoluteFill>
);

const ConceptsScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={3} cue="The third. Then it is only concepts, and anything goes" c={WARM} title="3 · Only concepts, anything goes" />
    <Items items={[
      ["So any view is as good as any other", 960, 240, <SK at="Designation is not arbitrary, and it is not free" s={26}>all labels · ours to choose · any view will do</SK>],
      ["Designation is not arbitrary, and it is not free", 960, 330, <K c={GOLD} s={28}>it works, and it can be wrong</K>, { pop: true }],
      ["A forged passport fails", 960, 420, <Wd c={DIM} s={24}>a forged passport · a face in a crowd · a rope taken for a snake</Wd>],
      ["gives three tests", 960, 520, <Wd c={CHALK} s={24}>1 known to ordinary cognition · 2 not overturned by it · 3 not contradicted by analysis</Wd>],
      ["The snake in the rope fails the second", 560, 640, <Wd c={ROSE} s={24}>snake: fails 2 · rope with its own nature: fails 3</Wd>],
      ["The rope, as named, passes all three", 1400, 640, <K c={GREEN} s={24}>the rope, as named: passes</K>, { pop: true }],
      ["Merely conventional was never meant as merely made up", 960, 760, <Wd c={TEAL} s={26} serif>conventional: fully valid · never "made up"</Wd>],
    ]} />
  </AbsoluteFill>
);

const HardScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={4} cue="The fourth. Dissolving the Hard Problem is not solving it" c={WARM} title="4 · Dissolving is not solving" />
    <Items items={[
      ["Why does this brain activity go with this taste of coffee", 960, 230, <Wd c={DIM} s={24}>why does this brain activity go with this taste of coffee?</Wd>, { until: "What falls away is one question" }],
      ["because the objection is partly right", 960, 230, <K c={GOLD} s={24}>partly right</K>, { until: "What falls away is one question" }],
      ["What falls away is one question", 960, 420, <Banks />],
      ["What does not fall away is the ordinary, workable question", 960, 640, <K c={GREEN} s={26}>what stays: which conditions go with which experiences</K>, { pop: true }],
      ["I am not offering a theory of how matter makes mind", 960, 730, <Wd c={DIM} s={24}>no theory of how matter makes mind</Wd>],
      ["not a mystery, but a field of study", 960, 800, <Wd c={TEAL} s={28} serif>not a mystery, but a field of study</Wd>],
    ]} />
  </AbsoluteFill>
);

const PhysScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={5} cue="The fifth. The physics is being stretched" c={TEAL} title="5 · The physics is stretched" />
    <Items items={[
      ["Physicists object, rightly", 960, 250, <Wd c={DIM} s={24}>theories about measurement and mathematics, not about emptiness</Wd>],
      ["I agree with the caution", 960, 350, <K c={GOLD} s={26}>echoes, not proofs</K>, { pop: true }],
      ["Emptiness does not depend on physics", 960, 440, <Wd c={CHALK} s={26}>emptiness does not depend on physics · physics does not prove it</Wd>],
      ["I also said where I part from them", 960, 550, <SK at="What I take from physics is modest" s={24}>relations as the really real · a field as the new substance</SK>],
      ["What I take from physics is modest", 960, 660, <Wd c={DIM} s={24}>no finished things, waiting to be measured</Wd>],
      ["The view stands or falls on looking", 960, 760, <Wd c={TEAL} s={30} serif>it stands or falls on looking</Wd>],
    ]} />
  </AbsoluteFill>
);

const AbsScene: React.FC = () => (
  <AbsoluteFill>
    <Head n={6} cue="The sixth. Then emptiness, or the web, is the new absolute" c={ROSE} title="6 · Emptiness, or the web, as absolute" />
    <Items items={[
      ["Isn't emptiness your ground", 960, 250, <Wd c={DIM} s={24}>emptiness as your ground? the web of relations as the real thing?</Wd>],
      ["saw this coming", 960, 350, <Wd c={CHALK} s={26} serif>emptiness: the way out of all views</Wd>],
      ["But those for whom emptiness becomes a view", 960, 420, <Wd c={ROSE} s={24}>emptiness made a view: incurable</Wd>],
      ["Emptiness is not a thing behind things", 960, 520, <SK at="The web is the same" s={24}>a void · a state to reach · a view to defend</SK>],
      ["The web is the same", 960, 630, <SK at="The relating is as empty as what it relates" s={24}>the relations, kept as real</SK>],
      ["The relating is as empty as what it relates", 960, 740, <K c={GOLD} s={26}>the relating: as empty as what it relates, and it works</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const ReliefScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Most of these objections are not only out there", 960, 120, <Wd c={GREEN} s={40} serif>In my own mind</Wd>],
      ["Most of these objections are not only out there", 960, 250, <Wd c={DIM} s={26}>then nothing matters · then it is all mind · then it is all labels</Wd>, { d: 3 }],
      ["Each comes with a small sense of relief", 960, 360, <Wd c={CHALK} s={28}>a small relief: a floor found at last</Wd>],
      ["ask what it is relieved to have found", 960, 490, <K c={GOLD} s={30}>what is it relieved to have found?</K>, { pop: true }],
      ["ask what it is relieved to have found", 960, 600, <Wd c={DIM} s={24}>a ground: to stand on, or to give up on</Wd>, { d: 3.5 }],
      ["Neither is needed", 960, 700, <Wd c={TEAL} s={32} serif>neither is needed</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The bell still rings when it is struck");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 7, Part 2 of the Dependent Arising series, and the close of the series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · the close of the series</Wd>],
        ["The bell still rings when it is struck", 960, 480, <Wd c={CHALK} s={44} serif>the bell still rings</Wd>],
        ["The bell still rings when it is struck", 960, 580, <Wd c={TEAL} s={40} serif>when it is struck</Wd>, { d: 1.4 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["If all this is empty, nothing arises and nothing ends", "open", <OpenScene />],
    ["The first. This is nihilism", "nihil", <NihilScene />],
    ["The second. Then it is all mind", "mind", <MindScene />],
    ["The third. Then it is only concepts, and anything goes", "concepts", <ConceptsScene />],
    ["The fourth. Dissolving the Hard Problem is not solving it", "hard", <HardScene />],
    ["The fifth. The physics is being stretched", "phys", <PhysScene />],
    ["The sixth. Then emptiness, or the web, is the new absolute", "abs", <AbsScene />],
    ["Most of these objections are not only out there", "relief", <ReliefScene />],
    ["This is Section 7, Part 2 of the Dependent Arising series, and the close of the series", "night", <CloseScene />],
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
