// Bonus video: Dependent Arising Section 6 Part 2: No One Turns the Wheel (AA63).
// (Script: new-documents/after-anatta/aa63-no-one-turns-the-wheel-script.md, from EBooks Bonus Articles/
// no-one-turns-the-wheel, approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: after twenty-five chapters of refutation, an explanation -> Part 1 and Section 5 recalled -> the one chapter
// with no refutation: emptiness does not stop the world working -> "enters" with nothing passing over: the river bed
// -> a mass with nothing else in it; not-knowing is the maker -> agent and action named together; the magician's
// figures -> what is kept, and why: karma works because it is empty -> the root in elaboration -> typing a message
// -> close.
// Stance: no owner, traveller or agent is ever drawn standing behind the chain.
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
  "After twenty five chapters of refutation", "I am John Tan, known as Thusness", "Part 1 set out how",
  "Section 5 asked, in the tradition's own terms", "Here I follow the twelve links through",
  "Not only is there no owner among the pieces",
  // chapter
  "For twenty five chapters, he shows that nothing is found", "Then he stops refuting", "A reader may be surprised",
  "As I see it, that is exactly the point", "And the working chain is the very chain that was found empty",
  "Because nothing in the chain has a nature of its own, it works",
  // enters
  "The chapter opens with rebirth", "Enters sounds like a traveller moving house",
  "Formations shape a direction, the way a river cuts its bed", "Nothing passes over. The old flame lights a new one",
  // mass
  "The chain ends with a phrase the Buddha used often", "The word for whole means only",
  "There is no one who owns the suffering", "Then comes the line I take as the heart of the chapter",
  "The one who does not know is the maker", "The maker of the round is not a person", "Take away the not knowing",
  // agent
  "If not knowing is the maker, what becomes of the one who acts", "The one who acts depends on the action",
  "The one who is bound, the one who acts, the one who reaps", "He gives an image. Suppose a magician",
  "Afflictions, actions, bodies, doers and fruits", "Like a dream does not mean nothing happens",
  "The acting is real as acting",
  // kept
  "Section 5 set out what the tradition keeps", "What he adds is the reason it can work",
  "If an action stayed until the time it ripens", "An action with its own nature would be stuck",
  "Karma works because it is empty",
  // root
  "If not knowing makes the formations, where does it get its grip", "And these come from elaboration",
  "So the cure is not a better belief",
  // typing
  "Take a simple act. Typing a message", "Look for the one who types, apart from the typing", "Not that no one types",
  "But the typist is named with the typing", "And the same is true of the one who is hurt",
  // close
  "This is Section 6, Part 2 of the Dependent Arising series", "None stands behind it, turning the wheel",
];

const M = {
  open: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  chapter: { a: "rgba(80,50,120,0.5)", b: "rgba(170,125,50,0.34)", c: "rgba(30,70,120,0.3)" },
  enters: { a: "rgba(40,100,130,0.46)", b: "rgba(60,110,70,0.38)", c: "rgba(40,60,110,0.32)" },
  mass: { a: "rgba(130,60,80,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  agent: { a: "rgba(60,45,130,0.52)", b: "rgba(40,110,120,0.38)", c: "rgba(30,70,120,0.32)" },
  kept: { a: "rgba(60,110,70,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  root: { a: "rgba(150,110,50,0.44)", b: "rgba(60,45,130,0.46)", c: "rgba(40,60,100,0.36)" },
  typing: { a: "rgba(60,90,130,0.46)", b: "rgba(150,110,60,0.34)", c: "rgba(60,110,90,0.3)" },
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
/** Twenty-seven chapters: twenty-five refuting, the twenty-sixth explaining. */
const Chapters: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("For twenty five chapters, he shows that nothing is found");
  const b = c("Then he stops refuting");
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
      {Array.from({ length: 27 }, (_, i) => {
        const n = i + 1;
        const on = n <= 25 ? ramp(t, a + i * 0.12, 0.3) : n === 26 ? ramp(t, b, 0.5) : ramp(t, b + 1, 0.5);
        const col = n <= 25 ? ROSE : n === 26 ? GOLD : DIM;
        return <div key={i} style={{ opacity: on, width: 40, height: n === 26 ? 140 : 90, borderRadius: 6, border: `3px solid ${col}`,
          background: n === 26 ? "rgba(200,150,60,0.35)" : "rgba(10,12,30,0.7)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <span style={{ color: col, fontSize: 18, fontFamily: "serif", marginBottom: 4 }}>{n}</span>
        </div>;
      })}
    </div>
  );
};
/** A river bed with water flowing along it. */
const River: React.FC = () => {
  const { t } = useT();
  const path = "M20 60 C160 20 220 160 360 120 C500 80 540 200 700 170";
  return (
    <svg width={720} height={240} viewBox="0 0 720 240" style={{ overflow: "visible" }}>
      <path d={path} fill="none" stroke="rgba(120,90,60,0.6)" strokeWidth={46} strokeLinecap="round" />
      <path d={path} fill="none" stroke={ICE} strokeWidth={14} strokeLinecap="round" strokeDasharray="30 26" strokeDashoffset={-t * 60} opacity={0.85} />
    </svg>
  );
};
/** A magical figure making another, both shimmering. */
const Figures: React.FC = () => {
  const { t } = useT();
  const fig = (x: number, s: number, col: string, ph: number) => (
    <g transform={`translate(${x} 0) scale(${s})`} opacity={0.55 + 0.45 * Math.sin(t * 2 + ph)}>
      <circle cx={0} cy={-80} r={24} fill="none" stroke={col} strokeWidth={4} strokeDasharray="6 5" />
      <path d="M0 -54 L0 40 M0 40 L-34 110 M0 40 L34 110 M-44 -10 L44 -10" stroke={col} strokeWidth={4} fill="none" strokeDasharray="8 6" />
    </g>
  );
  return (
    <svg width={520} height={260} viewBox="-260 -130 520 260" style={{ overflow: "visible" }}>
      {fig(-120, 1, VIOLET, 0)}
      <path d="M-60 -10 Q0 -60 60 -10" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="4 8" />
      {fig(120, 0.8, TEAL, 1.5)}
    </svg>
  );
};
/** Keys being pressed and a line of text appearing. */
const Typing: React.FC = () => {
  const { t } = useT();
  const msg = "see you at six";
  const n = Math.floor((t * 4) % (msg.length + 6));
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block", minWidth: 520, padding: "14px 20px", border: `3px solid ${ICE}`, borderRadius: 14, background: "rgba(10,12,30,0.7)" }}>
        <Wd c={CHALK} s={32}>{msg.slice(0, Math.min(n, msg.length))}|</Wd>
      </div>
      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 22 }}>
        {"QWERTYUIOP".split("").map((k, i) => (
          <div key={i} style={{ width: 44, height: 44, borderRadius: 8, border: `2px solid ${DIM}`, background: (n + i) % 5 === 0 ? "rgba(200,160,70,0.5)" : "rgba(10,12,30,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center", color: DIM, fontSize: 18 }}>{k}</div>
        ))}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["After twenty five chapters of refutation", 960, 400, <Wd c={ROSE} s={40} serif>twenty-five chapters of refutation</Wd>],
        ["After twenty five chapters of refutation", 960, 520, <Wd c={GOLD} s={40} serif>then: how suffering works</Wd>, { d: 2.5 }],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 set out how">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>No One Turns the Wheel</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 6 · Nāgārjuna's Reading · Part 2</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 set out how">
      <Items items={[
        ["Part 1 set out how", 960, 240, <Wd c={DIM} s={26}>Part 1: a pattern holding, not a handover</Wd>],
        ["Section 5 asked, in the tradition's own terms", 960, 340, <Wd c={DIM} s={26}>Section 5: no owner · only momentary factors</Wd>],
        ["Here I follow the twelve links through", 960, 480, <Wd c={CHALK} s={32} serif>the twelve links, in Nāgārjuna's own chapter</Wd>],
        ["Not only is there no owner among the pieces", 960, 620, <K c={GOLD} s={28}>no owner among the pieces · and the pieces stand on nothing of their own</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ChapterScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["For twenty five chapters, he shows that nothing is found", 960, 100, <Wd c={VIOLET} s={40} serif>The one chapter with no refutation</Wd>],
      ["For twenty five chapters, he shows that nothing is found", 960, 300, <Chapters />],
      ["For twenty five chapters, he shows that nothing is found", 960, 430, <Wd c={DIM} s={24}>not motion · not the senses · not the self · not time · not cause</Wd>, { d: 2 }],
      ["Then he stops refuting", 960, 500, <Wd c={GOLD} s={28} serif>chapter 26: the twelve links, set out</Wd>],
      ["As I see it, that is exactly the point", 960, 610, <Wd c={CHALK} s={26}>emptiness does not stop the world working</Wd>],
      ["And the working chain is the very chain that was found empty", 960, 690, <Wd c={DIM} s={24}>the working chain = the chain found empty</Wd>],
      ["Because nothing in the chain has a nature of its own, it works", 960, 780, <K c={GOLD} s={26}>empty, so it works · works that way, so it can end</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const EntersScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The chapter opens with rebirth", 960, 100, <Wd c={ICE} s={40} serif>"Consciousness enters a new destiny"</Wd>],
      ["Enters sounds like a traveller moving house", 960, 230, <SK at="Formations shape a direction, the way a river cuts its bed" s={28}>a traveller carrying a suitcase</SK>],
      ["Formations shape a direction, the way a river cuts its bed", 960, 470, <River />],
      ["Nothing passes over. The old flame lights a new one", 960, 700, <K c={GOLD} s={28}>nothing passes over · a flame lit from a flame</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const MassScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The chain ends with a phrase the Buddha used often", 960, 100, <Wd c={ROSE} s={40} serif>A mass with nothing else in it</Wd>],
      ["The word for whole means only", 960, 220, <Wd c={CHALK} s={28}>whole: only · unmixed · nothing else in it</Wd>],
      ["There is no one who owns the suffering", 960, 310, <Wd c={DIM} s={24}>only the suffering, arising from its conditions</Wd>],
      ["Then comes the line I take as the heart of the chapter", 960, 450, <Wd c={GOLD} s={30} serif>"the one who does not know is the maker"</Wd>],
      ["The one who does not know is the maker", 960, 530, <Wd c={TEAL} s={28} serif>"the one who knows is not"</Wd>, { d: 2 }],
      ["The maker of the round is not a person", 960, 650, <K c={GOLD} s={28}>the maker: not a person · not knowing</K>, { pop: true }],
      ["Take away the not knowing", 960, 750, <Wd c={DIM} s={24}>no not-knowing: nothing left to make the formations</Wd>],
    ]} />
  </AbsoluteFill>
);

const AgentScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["If not knowing is the maker, what becomes of the one who acts", 960, 100, <Wd c={VIOLET} s={40} serif>Agent and action, named together</Wd>],
      ["The one who acts depends on the action", 960, 210, <Wd c={CHALK} s={28}>the one who acts ⇄ the action</Wd>],
      ["The one who is bound, the one who acts, the one who reaps", 960, 290, <Wd c={DIM} s={24}>bound · acting · reaping: each named with the binding, the action, the fruit</Wd>],
      ["He gives an image. Suppose a magician", 960, 470, <Figures />],
      ["Afflictions, actions, bodies, doers and fruits", 960, 640, <Wd c={CHALK} s={26} serif>a city in the clouds · a mirage · a dream</Wd>],
      ["Like a dream does not mean nothing happens", 960, 720, <Wd c={DIM} s={24}>in a dream, a fall still frightens</Wd>],
      ["The acting is real as acting", 960, 800, <K c={GOLD} s={26}>real as acting · no one behind it</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const KeptScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Section 5 set out what the tradition keeps", 960, 100, <Wd c={GREEN} s={40} serif>What is kept, and why it works</Wd>],
      ["Section 5 set out what the tradition keeps", 960, 210, <Wd c={CHALK} s={26}>karma · rebirth · responsibility · the path</Wd>, { d: 1 }],
      ["If an action stayed until the time it ripens", 540, 400, <Box c={WARM} w={620} title="stays until it ripens" sub="then it is permanent" />, { pop: true }],
      ["If an action stayed until the time it ripens", 1380, 400, <Box c={ICE} w={620} title="has ceased" sub="then what fruit could it give?" />, { pop: true, d: 2.5 }],
      ["An action with its own nature would be stuck", 960, 560, <Wd c={DIM} s={24}>an action with its own nature: stuck on one side</Wd>],
      ["Karma works because it is empty", 960, 680, <K c={GOLD} s={32}>karma works because it is empty</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const RootScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["If not knowing makes the formations, where does it get its grip", 960, 120, <Wd c={WARM} s={40} serif>Where it gets its grip</Wd>],
      ["If not knowing makes the formations, where does it get its grip", 960, 300, <Wd c={CHALK} s={28}>action and affliction ← conceptual construction ← elaboration</Wd>, { d: 2.5 }],
      ["And these come from elaboration", 960, 400, <Wd c={DIM} s={24}>it is · it is not · mine · not mine</Wd>],
      ["So the cure is not a better belief", 960, 540, <K c={GOLD} s={28}>the cure: not a belief, but seeing</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const TypingScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Take a simple act. Typing a message", 960, 340, <Typing />],
      ["Look for the one who types, apart from the typing", 960, 110, <Wd c={ICE} s={36} serif>the one who types, apart from the typing?</Wd>],
      ["Look for the one who types, apart from the typing", 960, 560, <Wd c={DIM} s={24}>fingers · words · intention · screen, arising together</Wd>, { d: 3 }],
      ["Not that no one types", 960, 640, <Wd c={CHALK} s={24}>the conventional I types, and is responsible</Wd>],
      ["But the typist is named with the typing", 960, 720, <K c={GOLD} s={26}>named with the typing, as fire with fuel</K>, { pop: true }],
      ["And the same is true of the one who is hurt", 960, 800, <Wd c={DIM} s={24}>the one hurt · the one who wants · the one who goes round</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("None stands behind it, turning the wheel");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 6, Part 2 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 6 · Part 2</Wd>],
        ["None stands behind it, turning the wheel", 960, 460, <Wd c={CHALK} s={40} serif>none stands behind it,</Wd>],
        ["None stands behind it, turning the wheel", 960, 560, <Wd c={TEAL} s={40} serif>turning the wheel</Wd>, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["After twenty five chapters of refutation", "open", <OpenScene />],
    ["For twenty five chapters, he shows that nothing is found", "chapter", <ChapterScene />],
    ["The chapter opens with rebirth", "enters", <EntersScene />],
    ["The chain ends with a phrase the Buddha used often", "mass", <MassScene />],
    ["If not knowing is the maker, what becomes of the one who acts", "agent", <AgentScene />],
    ["Section 5 set out what the tradition keeps", "kept", <KeptScene />],
    ["If not knowing makes the formations, where does it get its grip", "root", <RootScene />],
    ["Take a simple act. Typing a message", "typing", <TypingScene />],
    ["This is Section 6, Part 2 of the Dependent Arising series", "night", <CloseScene />],
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
