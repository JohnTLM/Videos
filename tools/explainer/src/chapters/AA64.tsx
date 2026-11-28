// Bonus video: Dependent Arising Section 6 Part 3: Elaboration Stops in Emptiness (AA64), the close of Section 6.
// (Script: new-documents/after-anatta/aa64-elaboration-stops-in-emptiness-script.md, from EBooks Bonus Articles/
// elaboration-stops-in-emptiness, approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: what was ignorance? -> Parts 1 and 2, Section 5 recalled -> the reverse order: the pattern no longer holding,
// nothing broken -> "this very knowledge": arising itself not found -> elaboration, and where it stops -> the antidote,
// not the shape of ignorance -> not two places -> emptiness not a new thing to hold -> the harsh word, one last time
// -> where the two readings agree and part -> close.
// Stance: the ending is never drawn as a destruction or a blank; emptiness is never drawn as a thing or a place.
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
  "The chain ends when ignorance ends. But what was ignorance", "I am John Tan, known as Thusness",
  "Part 1 set out how", "Section 5 took up, in the tradition's own terms", "Here I take up the same ending",
  // reverse
  "When ignorance has ceased, formations do not arise", "So far, this is the tradition's own teaching",
  "If the links were real events", "nothing real has to be destroyed",
  "When this is not, that is not, is the same pattern", "They held together as a pattern while ignorance was present",
  "Nothing is broken, because nothing was ever standing",
  // knowledge
  "What is the knowledge that ends ignorance", "The tradition sees things arising and passing",
  "He asks about the arising and passing itself", "So the seeing that ends ignorance is not only",
  "That is why he praises dependent arising",
  // elaboration
  "also gives the order in which the chain takes hold", "Elaboration stops in emptiness",
  "Elaboration is the mind's spinning", "Notice where elaboration stops", "A quiet mind can rest from elaborating",
  "Not because thought is stopped",
  // antidote
  "Here I part from one way of hearing the teaching", "That reading needs refining",
  "But dependent arising, as a view, is not the shape of ignorance", "Otherwise its praise would make no sense",
  "So the same sentence does two things",
  // places
  "The tradition calls the ending", "It is easy to picture this as a place", "does not let that picture stand",
  "They are not two places", "What ends was never a thing",
  // view
  "One caution, and", "Emptiness was taught as the way out of all views", "If emptiness becomes a new thing",
  "And seen rightly, emptiness takes nothing away", "For whom emptiness is possible, everything is possible",
  // harsh word
  "Return once more to the harsh word at work", "In Section 5, the chain was watched",
  "there is something further", "But it was never a thing that arrived from outside", "The afternoon goes on",
  // agree
  "agree on the chain", "Where they part is in what the pieces are", "For the tradition, the person is empty",
  // close
  "This is Section 6, Part 3 of the Dependent Arising series, and the close of Section 6",
  "There was nothing to cut",
];

const M = {
  open: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  reverse: { a: "rgba(40,100,130,0.46)", b: "rgba(60,50,120,0.4)", c: "rgba(40,90,110,0.32)" },
  know: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  elab: { a: "rgba(150,70,60,0.42)", b: "rgba(60,50,120,0.44)", c: "rgba(150,110,60,0.3)" },
  anti: { a: "rgba(60,110,70,0.46)", b: "rgba(150,120,60,0.36)", c: "rgba(40,80,90,0.32)" },
  places: { a: "rgba(170,110,40,0.42)", b: "rgba(40,40,100,0.5)", c: "rgba(60,90,120,0.36)" },
  view: { a: "rgba(130,60,80,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  noon: { a: "rgba(60,90,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(60,110,90,0.3)" },
  agree: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
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
/** A pattern of links that simply stops holding: the glow fades, nothing breaks. */
const Quiet: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("They held together as a pattern while ignorance was present");
  const k = 1 - 0.75 * ramp(t, a + 2.5, 3);
  const names = ["ignorance", "formations", "consciousness", "name and form", "six senses", "contact",
    "feeling", "craving", "clinging", "becoming", "birth", "ageing and death"];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14, width: 1500 }}>
      {names.map((n, i) => (
        <div key={i} style={{ opacity: 0.25 + k * (0.6 + 0.15 * Math.sin(t * 2 + i)) }}><K c={i === 0 ? ROSE : CHALK} s={24}>{n}</K></div>
      ))}
    </div>
  );
};
/** Words spinning in a loop: elaboration. */
const Spin: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stop = c("Notice where elaboration stops");
  const sp = 1 - ramp(t, stop + 2, 2.5);
  const words = ["it is", "it is not", "it arises", "it ceases", "mine", "not mine"];
  return (
    <div style={{ position: "relative", width: 700, height: 300 }}>
      {words.map((w, i) => {
        const ang = (i / words.length) * Math.PI * 2 + t * 1.2 * sp;
        return <div key={i} style={{ position: "absolute", left: 350 + 260 * Math.cos(ang), top: 150 + 100 * Math.sin(ang),
          transform: "translate(-50%,-50%)", opacity: 0.35 + 0.65 * sp }}><Wd c={WARM} s={30} serif>{w}</Wd></div>;
      })}
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["The chain ends when ignorance ends. But what was ignorance", 960, 380, <Wd c={CHALK} s={40} serif>the chain ends when ignorance ends</Wd>],
        ["The chain ends when ignorance ends. But what was ignorance", 960, 500, <Wd c={GOLD} s={40} serif>but what was ignorance?</Wd>, { d: 2.5 }],
        ["The chain ends when ignorance ends. But what was ignorance", 960, 620, <Wd c={DIM} s={28}>not a thing to destroy · a way of taking things</Wd>, { d: 4.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 set out how">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Elaboration Stops in Emptiness</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 6 · Part 3 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 set out how">
      <Items items={[
        ["Part 1 set out how", 960, 260, <Wd c={DIM} s={26}>Part 1: a pattern, not a handover · Part 2: no owner</Wd>],
        ["Section 5 took up, in the tradition's own terms", 960, 360, <Wd c={DIM} s={26}>Section 5: the tradition's ending</Wd>],
        ["Here I take up the same ending", 960, 500, <K c={GOLD} s={30}>the same ending, as Nāgārjuna reads it</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ReverseScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["When ignorance has ceased, formations do not arise", 960, 100, <Wd c={TEAL} s={38} serif>When this is not, that is not</Wd>],
      ["So far, this is the tradition's own teaching", 960, 190, <Wd c={DIM} s={24}>so far, the tradition's own teaching · the difference: what is ending</Wd>],
      ["If the links were real events", 960, 290, <SK at="nothing real has to be destroyed" s={26}>stopping a machine of real things</SK>],
      ["When this is not, that is not, is the same pattern", 960, 470, <Quiet />],
      ["Nothing is broken, because nothing was ever standing", 960, 700, <K c={GOLD} s={28}>nothing broken: nothing was ever standing on its own</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const KnowScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["What is the knowledge that ends ignorance", 960, 100, <Wd c={VIOLET} s={40} serif>This very knowledge</Wd>],
      ["What is the knowledge that ends ignorance", 960, 200, <Wd c={DIM} s={24}>seeing dependent arising as it is: seeing its emptiness</Wd>, { d: 2 }],
      ["The tradition sees things arising and passing", 540, 380, <Box c={WARM} w={640} title="arising and passing" sub="and not mine" />, { pop: true }],
      ["He asks about the arising and passing itself", 1380, 380, <Box c={TEAL} w={640} title="arising itself, looked for" sub="never found to arise, or to pass, on its own" />, { pop: true }],
      ["That is why he praises dependent arising", 960, 620, <K c={GOLD} s={28}>without arising, without ceasing</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const ElabScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["also gives the order in which the chain takes hold", 960, 100, <Wd c={WARM} s={38} serif>action ← affliction ← construction ← elaboration</Wd>],
      ["Elaboration stops in emptiness", 960, 190, <K c={GOLD} s={28}>elaboration stops in emptiness</K>, { pop: true }],
      ["Elaboration is the mind's spinning", 960, 420, <Spin />],
      ["Notice where elaboration stops", 960, 620, <Wd c={CHALK} s={28} serif>not in silence · not in a blank · in emptiness</Wd>, { d: 1 }],
      ["A quiet mind can rest from elaborating", 960, 700, <Wd c={DIM} s={24}>a quiet mind rests a while, then begins again</Wd>],
      ["Not because thought is stopped", 960, 780, <Wd c={TEAL} s={24}>what thought was building on: found not to be there</Wd>],
    ]} />
  </AbsoluteFill>
);

const AntiScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Here I part from one way of hearing the teaching", 960, 100, <Wd c={GREEN} s={40} serif>The antidote, not the shape</Wd>],
      ["Here I part from one way of hearing the teaching", 960, 250, <SK at="That reading needs refining" s={28}>dependent arising: the pattern of confusion</SK>, { d: 2 }],
      ["But dependent arising, as a view, is not the shape of ignorance", 960, 400, <K c={GOLD} s={32}>dependent arising as a view: the antidote to ignorance</K>, { pop: true }],
      ["Otherwise its praise would make no sense", 960, 520, <Wd c={DIM} s={24}>the quieting of elaborations, peace · one meaning with emptiness · seeing it, one sees the Dhamma</Wd>],
      ["So the same sentence does two things", 540, 680, <Box c={WARM} w={640} title="heard as production" sub="it describes the trap" />, { pop: true }],
      ["So the same sentence does two things", 1380, 680, <Box c={TEAL} w={640} title="seen as Nāgārjuna reads it" sub="it opens the way out" />, { pop: true, d: 3 }],
    ]} />
  </AbsoluteFill>
);

const PlacesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The tradition calls the ending", 960, 100, <Wd c={GOLD} s={40} serif>Not two places</Wd>],
      ["It is easy to picture this as a place", 960, 300, <SK at="does not let that picture stand" d={1} s={30}>here → a journey → there</SK>],
      ["does not let that picture stand", 960, 440, <Wd c={CHALK} s={30} serif>between their limits, not even the finest gap</Wd>, { d: 1 }],
      ["They are not two places", 960, 580, <Wd c={DIM} s={24}>picturing a real thing destroyed: itself the inherent view</Wd>],
      ["What ends was never a thing", 960, 700, <K c={GOLD} s={28}>what ends: a way of taking things</K>, { pop: true }],
      ["What ends was never a thing", 960, 790, <Wd c={DIM} s={24}>the bell still rings · the seed still gives rice</Wd>, { d: 3 }],
    ]} />
  </AbsoluteFill>
);

const ViewScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["One caution, and", 960, 100, <Wd c={ROSE} s={40} serif>Not a new thing to hold</Wd>],
      ["Emptiness was taught as the way out of all views", 960, 230, <Wd c={CHALK} s={28}>emptiness: the way out of all views · as a view: incurable</Wd>],
      ["If emptiness becomes a new thing", 960, 380, <SK at="And seen rightly, emptiness takes nothing away" s={28}>a void behind appearances · a state to reach · a view to defend</SK>],
      ["And seen rightly, emptiness takes nothing away", 960, 540, <Wd c={CHALK} s={30} serif>emptiness takes nothing away</Wd>],
      ["For whom emptiness is possible, everything is possible", 960, 660, <K c={GOLD} s={28}>for whom emptiness is possible, everything is possible</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const NoonScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Return once more to the harsh word at work", 960, 100, <Wd c={ICE} s={40} serif>The harsh word, one last time</Wd>],
      ["In Section 5, the chain was watched", 960, 240, <Wd c={DIM} s={26}>Section 5: watched, not obeyed · the second arrow did not follow</Wd>],
      ["there is something further", 960, 380, <Wd c={CHALK} s={28} serif>the word · the hearing · the feeling · the one hurt: only together</Wd>],
      ["But it was never a thing that arrived from outside", 960, 500, <Wd c={TEAL} s={26}>never arrived from outside · never to be carried away</Wd>],
      ["The afternoon goes on", 960, 640, <Wd c={DIM} s={26}>the afternoon goes on · nothing taken from it</Wd>],
    ]} />
  </AbsoluteFill>
);

const AgreeScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["agree on the chain", 960, 170, <Wd c={CHALK} s={30} serif>agreed: the chain · karma · rebirth with no traveller · the path</Wd>],
      ["Where they part is in what the pieces are", 960, 300, <Wd c={DIM} s={26}>where they part: what the pieces are</Wd>],
      ["For the tradition, the person is empty", 540, 480, <Box c={WARM} w={640} title="the tradition" sub="the person is empty" />, { pop: true }],
      ["For the tradition, the person is empty", 1380, 480, <Box c={TEAL} w={640} title="Nāgārjuna" sub="everything is" />, { pop: true, d: 2.2 }],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("There was nothing to cut");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 6, Part 3 of the Dependent Arising series, and the close of Section 6", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 6 · the close</Wd>],
        ["There was nothing to cut", 960, 460, <Wd c={CHALK} s={40} serif>nothing to cut,</Wd>],
        ["There was nothing to cut", 960, 560, <Wd c={TEAL} s={40} serif>nothing ever tied on its own</Wd>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["The chain ends when ignorance ends. But what was ignorance", "open", <OpenScene />],
    ["When ignorance has ceased, formations do not arise", "reverse", <ReverseScene />],
    ["What is the knowledge that ends ignorance", "know", <KnowScene />],
    ["also gives the order in which the chain takes hold", "elab", <ElabScene />],
    ["Here I part from one way of hearing the teaching", "anti", <AntiScene />],
    ["The tradition calls the ending", "places", <PlacesScene />],
    ["One caution, and", "view", <ViewScene />],
    ["Return once more to the harsh word at work", "noon", <NoonScene />],
    ["agree on the chain", "agree", <AgreeScene />],
    ["This is Section 6, Part 3 of the Dependent Arising series, and the close of Section 6", "night", <CloseScene />],
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
