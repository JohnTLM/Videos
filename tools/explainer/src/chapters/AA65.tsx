// Bonus video: Dependent Arising Section 7 Part 1: An Open Heart That Learns (AA65).
// (Script: new-documents/after-anatta/aa65-an-open-heart-that-learns-script.md, from EBooks Bonus Articles/
// an-open-heart-that-learns, approved by the owner 2026-11-28; script approved the same day: "Approved, go ahead".)
// Arc: a friend phones -> a new section -> what emptiness does not do -> compassion is conventional -> an open heart
// (self and other: a bridge not needed) -> learning the conventional ("both") -> three teachers -> where I stand
// -> one of the conditions that meet -> in practice -> close.
// Stance: compassion is never drawn as a source or substance; emptiness never as a cause.
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
  "A friend phones with bad news", "Then comes the harder part", "I am John Tan, known as Thusness",
  "Six sections have looked at dependent arising as a view", "Almost nothing has been said about compassion",
  "So this last section turns to two things",
  // not cause
  "First, what I will not say", "Emptiness does not cause anything", "But emptiness takes nothing from compassion",
  "The kindness is felt, and no such ground is found", "And emptiness removes the excuses",
  "Each of these needs a world where what is empty does not count", "In the world this series has described",
  "A car injures, and the grief of the family",
  // conventional
  "As I see it, compassion is conventional", "The suffering of a being is conventional, and real",
  "So compassion is not a quality of the ultimate", "It is a responsiveness to the conventional",
  "That is also why no being's suffering can be brushed aside", "The hungry ghost's suffering is real for the hungry ghost",
  // open heart
  "The first half of compassion, as I see it, is openness of the heart", "This is not a feeling made on purpose",
  "When the habit of standing apart is not imposed", "the gap between mind and matter turned out to be made by a framework",
  "No one has ever had to work at joining their mind to their body",
  "The gap between self and other is made the same way", "And compassion becomes the effort of building one",
  "Seen as they arise, the friend's voice", "Nothing has to cross", "not separating oneself from others",
  "And this openness shows itself as the habit loosens",
  // learning
  "The other half is learning", "An open heart does not, by itself, know what to do", "A child may need comfort",
  "A stranger's customs may make my kindness land as an insult", "Good will that does not know the situation can miss",
  "So compassion learns the conventional", "This learning never ends", "Compassion is that path, turned toward others",
  "And because it is learned, it can be cultivated", "or is it trained? Both",
  // teachers
  "Three traditions I respect have said this in their own ways", "teaches compassion as something trained, step by step",
  "Compassion is method. The view of emptiness is wisdom", "describes the nature of mind as empty in essence",
  "Realization reveals it, rather than producing it", "speaks of compassion mostly as conduct",
  "he asks for three minds in every task", "Compassion is how awakening acts",
  // stand
  "Where do I stand", "that compassion is trained, and that care", "that it is unobstructed responsiveness",
  "that it lives in ordinary acts", "And with all three, that it is empty, and works",
  // conditions
  "So compassion is not a source, sending kindness out", "It is one of the conditions that meet", "help appears",
  "Nothing stands behind it, producing it", "as the ringing of a bell when it is struck",
  // practice
  "In practice. When someone's pain reaches you", "When it is blocked, see what blocks it",
  "Then ask what would actually help", "Watch the excuses", "And do not hold compassion as a thing to own",
  // close
  "This is Section 7, Part 1 of the Dependent Arising series", "The teaching itself arose this way",
];

const M = {
  open: { a: "rgba(150,90,70,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(170,125,50,0.3)" },
  nocause: { a: "rgba(60,45,130,0.5)", b: "rgba(40,100,120,0.38)", c: "rgba(30,70,120,0.32)" },
  conv: { a: "rgba(170,120,50,0.42)", b: "rgba(50,70,120,0.44)", c: "rgba(60,110,90,0.3)" },
  heart: { a: "rgba(160,80,90,0.44)", b: "rgba(150,110,60,0.36)", c: "rgba(60,50,120,0.34)" },
  learn: { a: "rgba(60,110,80,0.46)", b: "rgba(150,120,60,0.34)", c: "rgba(40,80,100,0.32)" },
  teach: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
  stand: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  cond: { a: "rgba(40,100,130,0.46)", b: "rgba(160,90,80,0.36)", c: "rgba(40,90,110,0.32)" },
  prac: { a: "rgba(60,90,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(60,110,90,0.3)" },
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
/** Two selves, each complete on its own side, and a bridge being built between them; then seen as one movement. */
const Bridge: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const build = c("And compassion becomes the effort of building one");
  const seen = c("Seen as they arise, the friend's voice");
  const plank = ramp(t, build + 0.5, 3);
  const fade = 1 - ramp(t, seen, 1.2);
  const one = ramp(t, seen + 0.8, 1.2);
  const flow = (t * 0.35) % 1;
  return (
    <div style={{ position: "relative", width: 1400, height: 300 }}>
      <div style={{ position: "absolute", inset: 0, opacity: fade }}>
        <div style={{ position: "absolute", left: 0, top: 70 }}><Box c={WARM} w={380} title="self" sub="complete on its own side" /></div>
        <div style={{ position: "absolute", right: 0, top: 70 }}><Box c={ICE} w={380} title="other" sub="complete on its own side" /></div>
        <div style={{ position: "absolute", left: 400, top: 150, height: 10, width: 600 * plank, borderRadius: 5,
          background: `repeating-linear-gradient(90deg, ${GOLD} 0 34px, transparent 34px 46px)`, opacity: 0.85 }} />
        <div style={{ position: "absolute", left: 400, width: 600, top: 190, textAlign: "center", opacity: plank }}>
          <Wd c={DIM} s={22}>a bridge to build</Wd>
        </div>
      </div>
      <div style={{ position: "absolute", inset: 0, opacity: one, display: "flex", alignItems: "center", justifyContent: "center", gap: 0 }}>
        {["the friend's voice", "the bad news", "the turning toward them"].map((w, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            {i ? <div style={{ width: 60, height: 4, borderRadius: 2, background: GOLD,
              opacity: 0.4 + 0.6 * Math.max(0, Math.sin((flow * 3 - i) * Math.PI)) }} /> : null}
            <K c={i === 2 ? ROSE : CHALK} s={28}>{w}</K>
          </div>
        ))}
      </div>
    </div>
  );
};
/** Conditions meeting: chips drift in toward a centre where "help" lights; nothing stands behind it. */
const Meet: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("It is one of the conditions that meet");
  const h = c("help appears");
  const conds: [string, string, number][] = [
    ["the friend's voice", CHALK, 200], ["the bad news", CHALK, 340], ["an open heart", ROSE, 20],
    ["what has been learned", GREEN, 160],
  ];
  const m = ramp(t, a + 0.3, 3);
  return (
    <div style={{ position: "relative", width: 1300, height: 420 }}>
      {conds.map(([w, col, ang], i) => {
        const r = 470 - 250 * m;
        const rad = (ang * Math.PI) / 180;
        return <div key={i} style={{ position: "absolute", left: 650 + r * Math.cos(rad), top: 210 + 0.42 * r * Math.sin(rad),
          transform: "translate(-50%,-50%)", opacity: ramp(t, a + i * 0.4, 0.6) }}><K c={col} s={24}>{w}</K></div>;
      })}
      <div style={{ position: "absolute", left: 650, top: 210, transform: `translate(-50%,-50%) scale(${0.6 + 0.4 * ramp(t, h, 0.8)})`,
        opacity: ramp(t, h, 0.8) }}><Wd c={GOLD} s={44} serif>help</Wd></div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A friend phones with bad news", 960, 340, <Wd c={CHALK} s={40} serif>a friend phones with bad news</Wd>],
        ["A friend phones with bad news", 960, 460, <Wd c={ROSE} s={36} serif>before any thought, a turning toward them</Wd>, { d: 2.4 }],
        ["Then comes the harder part", 960, 600, <Wd c={GOLD} s={32}>then: what would actually help?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Six sections have looked at dependent arising as a view">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>An Open Heart That Learns</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 7 · Part 1</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Six sections have looked at dependent arising as a view">
      <Items items={[
        ["Six sections have looked at dependent arising as a view", 960, 200, <Wd c={DIM} s={24}>formed · a phenomenon · mind and matter · the logic of dependency · the twelve links, two readings</Wd>],
        ["Almost nothing has been said about compassion", 960, 330, <Wd c={CHALK} s={32} serif>almost nothing yet on compassion</Wd>],
        ["Almost nothing has been said about compassion", 960, 430, <Wd c={DIM} s={24}>the Middle Way ends with a bow: out of compassion, the teaching</Wd>, { d: 3.5 }],
        ["So this last section turns to two things", 600, 620, <Box c={ROSE} w={560} title="Part 1" sub="compassion" />, { pop: true }],
        ["So this last section turns to two things", 1320, 620, <Box c={TEAL} w={560} title="Part 2" sub="objections, fairly answered" />, { pop: true, d: 1.5 }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const NoCauseScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["First, what I will not say", 960, 100, <Wd c={VIOLET} s={40} serif>What emptiness does not do</Wd>],
      ["Emptiness does not cause anything", 960, 210, <SK at="Emptiness does not cause anything" d={2.5} s={28}>emptiness → compassion</SK>],
      ["But emptiness takes nothing from compassion", 960, 330, <K c={GOLD} s={28}>emptiness takes nothing from compassion</K>, { pop: true }],
      ["The kindness is felt, and no such ground is found", 960, 420, <Wd c={DIM} s={24}>the kindness is felt · no fixed self behind it · nothing missing</Wd>],
      ["And emptiness removes the excuses", 960, 530, <SK at="Each of these needs a world where what is empty does not count" d={1} s={26}>it isn't really happening · only appearances · no one there</SK>],
      ["In the world this series has described", 960, 650, <Wd c={CHALK} s={28} serif>what is empty is exactly what counts</Wd>],
      ["A car injures, and the grief of the family", 960, 750, <Wd c={TEAL} s={24}>the grief is not an illusion · nothing outside the conditions absorbs what we do</Wd>],
    ]} />
  </AbsoluteFill>
);

const ConvScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["As I see it, compassion is conventional", 960, 100, <Wd c={GOLD} s={40} serif>Compassion is conventional</Wd>],
      ["As I see it, compassion is conventional", 960, 200, <Wd c={DIM} s={24}>not "merely agreed" · conventional truth: fully valid</Wd>, { d: 3 }],
      ["The suffering of a being is conventional, and real", 600, 340, <Box c={ROSE} w={560} title="the suffering" sub="conventional, and real" />, { pop: true }],
      ["The suffering of a being is conventional, and real", 1320, 340, <Box c={GREEN} w={560} title="the help" sub="conventional, and real" />, { pop: true, d: 2.5 }],
      ["So compassion is not a quality of the ultimate", 960, 500, <SK at="It is a responsiveness to the conventional" s={26}>a quality behind appearances · a substance in the heart</SK>],
      ["It is a responsiveness to the conventional", 960, 600, <K c={GOLD} s={28}>a responsiveness: this person, this pain, this situation</K>, { pop: true }],
      ["The hungry ghost's suffering is real for the hungry ghost", 960, 720, <Wd c={DIM} s={24}>no single given world · no suffering brushed aside</Wd>],
    ]} />
  </AbsoluteFill>
);

const HeartScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The first half of compassion, as I see it, is openness of the heart", 960, 100, <Wd c={ROSE} s={40} serif>An open heart</Wd>],
      ["This is not a feeling made on purpose", 960, 190, <Wd c={DIM} s={24}>not made on purpose · what being dependent already means</Wd>, { until: "the gap between mind and matter turned out to be made by a framework" }],
      ["the gap between mind and matter turned out to be made by a framework", 960, 190, <Wd c={DIM} s={24}>mind and matter: a gap made by a framework · the interaction, seamless</Wd>, { d: 0.5 }],
      ["The gap between self and other is made the same way", 960, 420, <Bridge />],
      ["Nothing has to cross", 960, 610, <K c={GOLD} s={28}>one movement · nothing has to cross</K>, { pop: true }],
      ["not separating oneself from others", 960, 700, <Wd c={CHALK} s={26} serif>identity-action: not separating oneself from others</Wd>],
      ["And this openness shows itself as the habit loosens", 960, 790, <Wd c={TEAL} s={24}>not produced by insight · no longer blocked</Wd>],
    ]} />
  </AbsoluteFill>
);

const LearnScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The other half is learning", 960, 100, <Wd c={GREEN} s={40} serif>Learning the conventional</Wd>],
      ["An open heart does not, by itself, know what to do", 960, 210, <Wd c={DIM} s={24}>good will alone does not know the situation</Wd>],
      ["An open heart does not, by itself, know what to do", 960, 300, <Wd c={CHALK} s={26}>grief: words? silence? a meal? a day alone?</Wd>, { d: 3 }],
      ["A child may need comfort", 960, 370, <Wd c={CHALK} s={26}>a child: comfort, or a firm no</Wd>],
      ["A stranger's customs may make my kindness land as an insult", 960, 440, <Wd c={CHALK} s={26}>a stranger's customs</Wd>],
      ["So compassion learns the conventional", 960, 560, <K c={GREEN} s={28}>what helps · not what only feels like helping</K>, { pop: true }],
      ["This learning never ends", 960, 650, <Wd c={DIM} s={24}>seeing conditions clearly · arranging them well · turned toward others</Wd>],
      ["And because it is learned, it can be cultivated", 960, 740, <Wd c={CHALK} s={26} serif>shows itself · and is cultivated</Wd>],
      ["or is it trained? Both", 960, 820, <K c={GOLD} s={30}>both</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const TeachScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Three traditions I respect have said this in their own ways", 960, 100, <Wd c={GOLD} s={40} serif>Three teachers</Wd>],
      ["teaches compassion as something trained, step by step", 330, 360, <Box c={WARM} w={560} title="Tsongkhapa" sub="trained step by step · seven points" />, { pop: true }],
      ["Compassion is method. The view of emptiness is wisdom", 330, 560, <Wd c={WARM} s={24}>method + wisdom: two wings</Wd>],
      ["describes the nature of mind as empty in essence", 960, 360, <Box c={VIOLET} w={560} title="Mipham" sub="empty · cognizant · unobstructed compassionate energy" />, { pop: true }],
      ["Realization reveals it, rather than producing it", 960, 560, <Wd c={VIOLET} s={24}>revealed, not produced</Wd>],
      ["speaks of compassion mostly as conduct", 1590, 360, <Box c={TEAL} w={560} title="Dōgen" sub="giving · kind speech · beneficial action · identity-action" />, { pop: true }],
      ["he asks for three minds in every task", 1590, 560, <Wd c={TEAL} s={24}>joyful · nurturing · great mind</Wd>],
      ["Compassion is how awakening acts", 1590, 640, <Wd c={DIM} s={22}>how awakening acts, in each ordinary deed</Wd>],
    ]} />
  </AbsoluteFill>
);

const StandScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Where do I stand", 960, 120, <Wd c={CHALK} s={40} serif>Where I stand</Wd>],
      ["that compassion is trained, and that care", 960, 270, <Wd c={WARM} s={28}>trained · care never assumed to come automatically</Wd>],
      ["that it is unobstructed responsiveness", 960, 380, <Wd c={VIOLET} s={28}>unobstructed responsiveness · read without a ground</Wd>],
      ["that it lives in ordinary acts", 960, 490, <Wd c={TEAL} s={28}>in ordinary acts · not separating self and other</Wd>],
      ["And with all three, that it is empty, and works", 960, 640, <K c={GOLD} s={32}>empty, and it works</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const CondScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So compassion is not a source, sending kindness out", 960, 100, <SK at="It is one of the conditions that meet" s={30}>a source, sending kindness out</SK>],
      ["It is one of the conditions that meet", 960, 400, <Meet />],
      ["Nothing stands behind it, producing it", 960, 690, <Wd c={DIM} s={26}>nothing behind it, producing it</Wd>],
      ["as the ringing of a bell when it is struck", 960, 780, <K c={GOLD} s={28}>as real as a bell ringing when struck</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const PracScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["In practice. When someone's pain reaches you", 960, 100, <Wd c={ICE} s={40} serif>In practice</Wd>],
      ["In practice. When someone's pain reaches you", 960, 240, <K c={ROSE} s={26}>notice the first turning</K>, { d: 1.5 }],
      ["When it is blocked, see what blocks it", 960, 320, <Wd c={DIM} s={22}>when blocked: usually a self standing apart, defending something</Wd>],
      ["Then ask what would actually help", 960, 420, <K c={GREEN} s={26}>ask what would actually help</K>],
      ["Watch the excuses", 960, 520, <K c={WARM} s={26}>watch the excuses</K>],
      ["Watch the excuses", 960, 600, <Wd c={DIM} s={22}>their karma · all empty anyway · not my business</Wd>, { d: 1.5 }],
      ["And do not hold compassion as a thing to own", 960, 710, <K c={VIOLET} s={26}>not a thing to own · a responsiveness, empty too</K>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The teaching itself arose this way");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 9, 1.5) }}>
      <Items items={[
        ["This is Section 7, Part 1 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 7 · Part 1</Wd>],
        ["This is Section 7, Part 1 of the Dependent Arising series", 960, 260, <Wd c={DIM} s={26}>next: objections, fairly answered</Wd>, { d: 2.5 }],
        ["The teaching itself arose this way", 960, 460, <Wd c={CHALK} s={40} serif>the teaching itself arose in dependence:</Wd>, { d: 1.5 }],
        ["The teaching itself arose this way", 960, 560, <Wd c={ROSE} s={40} serif>on compassion, for those who suffer</Wd>, { d: 3.5 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A friend phones with bad news", "open", <OpenScene />],
    ["First, what I will not say", "nocause", <NoCauseScene />],
    ["As I see it, compassion is conventional", "conv", <ConvScene />],
    ["The first half of compassion, as I see it, is openness of the heart", "heart", <HeartScene />],
    ["The other half is learning", "learn", <LearnScene />],
    ["Three traditions I respect have said this in their own ways", "teach", <TeachScene />],
    ["Where do I stand", "stand", <StandScene />],
    ["So compassion is not a source, sending kindness out", "cond", <CondScene />],
    ["In practice. When someone's pain reaches you", "prac", <PracScene />],
    ["This is Section 7, Part 1 of the Dependent Arising series", "night", <CloseScene />],
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
