// Bonus video: Dependent Arising Section 5 Part 2: Who Ages and Dies? (AA60).
// (Script: new-documents/after-anatta/aa60-who-ages-and-dies-script.md, from EBooks Bonus Articles/who-ages-and-dies,
// approved by the owner 2026-11-28; script approved the same day: "Approved".)
// Arc: who ages and dies? -> the monk's question, "not a valid question" -> the same or another; made by oneself,
// another, both, chance: all declined -> the body as old karma; the river bed -> three lives, four groups, three joints;
// a flame lit from a flame -> the Abhidharma: the person into momentary factors, no self among them; the pieces kept
// real -> what is kept -> who is hurt? -> close.
// Stance: the tradition's standpoint; no owner is ever drawn standing behind the chain.
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
  "Who ages and dies? It sounds like the simplest question", "I am John Tan, known as Thusness",
  "Part 1 set out the twelve links", "Here I stay with the tradition's own answer",
  // monk
  "A monk once asked the Buddha directly", "Not a valid question, he said",
  "Whether one says the life and the body are the same", "Avoiding both, he teaches by the middle",
  "And he goes through every link the same way", "The question asks for an owner of the chain",
  // others
  "The question comes back in other forms", "A brahmin asks", "That is one extreme, the Buddha says",
  "Avoiding both, he teaches the chain", "A wandering ascetic asks", "Is suffering made by oneself",
  "Then is there no suffering", "Each time, the questioner needs a someone", "Each time, the Buddha declines the someone",
  // karma
  "One short discourse puts it", "This body is not yours", "Not mine. Not someone else's",
  "This is how the tradition holds karma without an owner", "They shape what comes next, the way a river cuts its bed",
  "There is a link between what is done and what is met",
  // lives
  "The classical reading lays the twelve links over three lives", "Past causes. Ignorance and formations",
  "Present results. Consciousness", "Present causes. Craving", "And future results. Birth",
  "Four groups, joined at three points", "In this reading, a new life begins",
  "The tradition's image is a flame lit from a flame", "And keeps it without a traveller",
  // pieces
  "Behind it stands the work of the", "Their achievement was real", "They took the person apart",
  "Look for a self among them, and none is found", "The analysis was thorough",
  "Each factor was defined by its own mark", "So the tradition answers in two ways at once",
  "In this picture there is no self among the pieces", "But the pieces themselves are taken as real",
  "Where I part from that, the next section will show",
  // kept
  "This is where the teaching is most often misheard", "No owner does not mean no responsibility",
  "The twelve links keep karma, rebirth, and the path", "What is left out is only the owner",
  "And one more thing, equally plain", "But removing a bad argument against something",
  // hurt
  "The next time I am hurt", "Not to deny the hurt", "What I find is the words, the feeling",
  "The owner, looked for, is not found",
  // close
  "This is Section 5, Part 2 of the Dependent Arising series",
  "And when the owner is not found, the story has less to stand on",
];

const M = {
  open: { a: "rgba(60,90,130,0.48)", b: "rgba(150,100,50,0.36)", c: "rgba(40,100,120,0.32)" },
  monk: { a: "rgba(150,100,40,0.44)", b: "rgba(50,60,120,0.44)", c: "rgba(120,80,40,0.3)" },
  others: { a: "rgba(80,50,120,0.5)", b: "rgba(40,80,120,0.42)", c: "rgba(120,80,50,0.32)" },
  karma: { a: "rgba(40,100,130,0.46)", b: "rgba(60,110,70,0.38)", c: "rgba(40,60,110,0.32)" },
  lives: { a: "rgba(170,110,40,0.42)", b: "rgba(40,40,100,0.5)", c: "rgba(60,90,120,0.36)" },
  pieces: { a: "rgba(60,45,130,0.5)", b: "rgba(40,110,120,0.36)", c: "rgba(30,70,120,0.3)" },
  kept: { a: "rgba(60,110,70,0.46)", b: "rgba(70,60,140,0.42)", c: "rgba(150,110,60,0.3)" },
  hurt: { a: "rgba(150,70,60,0.44)", b: "rgba(60,50,120,0.42)", c: "rgba(150,110,60,0.3)" },
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
/** A river bed cut by past actions, with water flowing along it. */
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
/** Four groups of links joined at three points. */
const GROUPS: [string, string, string, string][] = [
  ["Past causes. Ignorance and formations", "past causes", "ignorance · formations", ROSE],
  ["Present results. Consciousness", "present results", "consciousness … feeling", ICE],
  ["Present causes. Craving", "present causes", "craving · clinging · becoming", WARM],
  ["And future results. Birth", "future results", "birth · ageing and death", VIOLET],
];
const Groups: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const j = c("Four groups, joined at three points");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
      {GROUPS.map(([cue, title, sub, col], i) => (
        <React.Fragment key={i}>
          <div style={{ opacity: ramp(t, c(cue), 0.5) }}><Box c={col} w={360} title={title} sub={sub} /></div>
          {i < 3 ? <div style={{ width: 70, textAlign: "center", opacity: ramp(t, j + i * 0.8, 0.4) }}>
            <svg width={60} height={60} viewBox="-30 -30 60 60"><circle r={16} fill={GOLD} opacity={0.9} /><circle r={26} fill="none" stroke={GOLD} strokeWidth={3} /></svg>
          </div> : null}
        </React.Fragment>
      ))}
    </div>
  );
};
/** One flame lighting another. */
const TwoFlames: React.FC = () => {
  const { t } = useT();
  const f = (x: number, h: number) => <path d={`M${x} ${-h} C${x + 22} ${-h * 0.5} ${x + 18} 0 ${x} 0 C${x - 18} 0 ${x - 22} ${-h * 0.5} ${x} ${-h} Z`} fill="rgba(240,170,70,0.8)" stroke={GOLD} strokeWidth={3} />;
  const k = 0.5 + 0.5 * Math.sin(t * 1.5);
  return (
    <svg width={420} height={200} viewBox="-210 -150 420 200" style={{ overflow: "visible" }}>
      {f(-80, 70 + 6 * Math.sin(t * 6))}
      <g opacity={0.4 + 0.6 * k}>{f(80, 60 + 6 * Math.sin(t * 7))}</g>
      <line x1={-40} y1={-30} x2={40} y2={-30} stroke={DIM} strokeWidth={2} strokeDasharray="6 8" />
      <rect x={-110} y={0} width={60} height={40} rx={6} fill="rgba(240,230,210,0.2)" stroke={CHALK} strokeWidth={3} />
      <rect x={50} y={0} width={60} height={40} rx={6} fill="rgba(240,230,210,0.2)" stroke={CHALK} strokeWidth={3} />
    </svg>
  );
};
/** "I" coming apart into momentary factors. */
const Pieces: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("They took the person apart");
  const k = ramp(t, a + 0.5, 2);
  const names = ["contact", "feeling", "perception", "intention", "consciousness", "matter"];
  return (
    <div style={{ position: "relative", width: 900, height: 300 }}>
      <div style={{ position: "absolute", left: 450, top: 150, transform: "translate(-50%,-50%)", opacity: 1 - k }}>
        <Wd c={GOLD} s={110} serif>I</Wd>
      </div>
      {names.map((n, i) => {
        const ang = (i / names.length) * Math.PI * 2;
        const x = 450 + k * 330 * Math.cos(ang), y = 150 + k * 120 * Math.sin(ang);
        const flick = 0.6 + 0.4 * Math.sin(t * 3 + i);
        return <div key={i} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", opacity: k * flick }}>
          <K c={i % 2 ? TEAL : ICE} s={24}>{n}</K>
        </div>;
      })}
    </div>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["Who ages and dies? It sounds like the simplest question", 960, 420, <Wd c={GOLD} s={60} serif>Who ages and dies?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="Part 1 set out the twelve links">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Who Ages and Dies?</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 5 · The Twelve Links · Part 2</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="Part 1 set out the twelve links">
      <Items items={[
        ["Part 1 set out the twelve links", 960, 300, <Wd c={DIM} s={26}>Part 1: the twelve links, from ignorance to ageing and death</Wd>],
        ["Part 1 set out the twelve links", 960, 420, <Wd c={CHALK} s={36} serif>who is turning the wheel?</Wd>, { d: 3 }],
        ["Here I stay with the tradition's own answer", 960, 580, <K c={GOLD} s={28}>the tradition's own answer</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const MonkScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A monk once asked the Buddha directly", 960, 110, <Wd c={WARM} s={40} serif>"Ageing and death: whose is it?"</Wd>],
      ["Not a valid question, he said", 960, 260, <K c={GOLD} s={34}>not a valid question</K>, { pop: true }],
      ["Whether one says the life and the body are the same", 560, 420, <SK at="Avoiding both, he teaches by the middle" s={26}>the same</SK>],
      ["Whether one says the life and the body are the same", 1360, 420, <SK at="Avoiding both, he teaches by the middle" s={26} d={0.3}>different</SK>, { d: 2 }],
      ["Avoiding both, he teaches by the middle", 960, 540, <Wd c={TEAL} s={32} serif>with birth as condition, ageing and death</Wd>],
      ["And he goes through every link the same way", 960, 640, <Wd c={DIM} s={26}>whose is birth? not a valid question · with becoming as condition, birth</Wd>],
      ["The question asks for an owner of the chain", 960, 770, <Wd c={CHALK} s={30} serif>the question asks for an owner · the reply gives the chain</Wd>],
    ]} />
  </AbsoluteFill>
);

const OthersScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="A wandering ascetic asks">
      <Items items={[
        ["A brahmin asks", 960, 130, <Wd c={VIOLET} s={38} serif>The one who acts, and the one who meets the result</Wd>],
        ["That is one extreme, the Buddha says", 560, 360, <SK at="Avoiding both, he teaches the chain" s={28}>the same one</SK>, { pop: true }],
        ["That is one extreme, the Buddha says", 1360, 360, <SK at="Avoiding both, he teaches the chain" s={28} d={0.3}>someone else</SK>, { pop: true, d: 2.2 }],
        ["Avoiding both, he teaches the chain", 960, 540, <K c={TEAL} s={28}>the chain, by the middle</K>, { pop: true }],
      ]} />
    </Phase>
    <Phase from="A wandering ascetic asks">
      <Items items={[
        ["A wandering ascetic asks", 960, 110, <Wd c={VIOLET} s={38} serif>Who made the suffering?</Wd>],
        ["Is suffering made by oneself", 300, 280, <SK at="Then is there no suffering" s={26}>by oneself</SK>],
        ["Is suffering made by oneself", 740, 280, <SK at="Then is there no suffering" s={26} d={0.2}>by another</SK>, { d: 1.2 }],
        ["Is suffering made by oneself", 1180, 280, <SK at="Then is there no suffering" s={26} d={0.4}>by both</SK>, { d: 2.4 }],
        ["Is suffering made by oneself", 1620, 280, <SK at="Then is there no suffering" s={26} d={0.6}>by chance</SK>, { d: 3.4 }],
        ["Then is there no suffering", 960, 440, <K c={GOLD} s={28}>there is suffering: known, and seen</K>, { pop: true, d: 1.5 }],
        ["Each time, the questioner needs a someone", 960, 600, <Wd c={DIM} s={26}>a self who made it · another · the same self who reaps</Wd>],
        ["Each time, the Buddha declines the someone", 960, 720, <Wd c={CHALK} s={30} serif>no someone: the conditions</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const KarmaScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["One short discourse puts it", 960, 110, <Wd c={ICE} s={40} serif>Old karma</Wd>],
      ["This body is not yours", 960, 230, <Wd c={CHALK} s={32} serif>not yours · not others' · old karma, something to be felt</Wd>],
      ["Not mine. Not someone else's", 960, 320, <K c={GOLD} s={26}>old karma, felt now</K>, { pop: true }],
      ["This is how the tradition holds karma without an owner", 960, 430, <Wd c={DIM} s={24}>formations: intentional actions</Wd>],
      ["They shape what comes next, the way a river cuts its bed", 960, 580, <River />],
      ["There is a link between what is done and what is met", 960, 760, <Wd c={CHALK} s={26}>a link, reliable and exact · no one behind the doing, waiting for the result</Wd>],
    ]} />
  </AbsoluteFill>
);

const LivesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The classical reading lays the twelve links over three lives", 960, 90, <Wd c={GOLD} s={40} serif>Across three lives</Wd>],
      ["The classical reading lays the twelve links over three lives", 960, 300, <Groups />, { d: 0.5 }],
      ["Four groups, joined at three points", 960, 470, <Wd c={DIM} s={24}>past action meets a new life · what is met becomes what is done · action shapes a life to come</Wd>, { d: 2.5 }],
      ["The tradition's image is a flame lit from a flame", 960, 620, <TwoFlames />],
      ["The tradition's image is a flame lit from a flame", 960, 760, <Wd c={CHALK} s={26} serif>neither the same one, nor another</Wd>, { d: 3 }],
      ["And keeps it without a traveller", 960, 820, <K c={GOLD} s={24}>rebirth, without a traveller</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const PiecesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Behind it stands the work of the", 960, 90, <Wd c={VIOLET} s={40} serif>The analysis</Wd>],
      ["Their achievement was real", 960, 170, <Wd c={DIM} s={24}>a real achievement</Wd>],
      ["They took the person apart", 960, 360, <Pieces />],
      ["Look for a self among them, and none is found", 960, 560, <K c={GOLD} s={28}>no self among the pieces</K>, { pop: true }],
      ["Each factor was defined by its own mark", 960, 640, <Wd c={CHALK} s={24}>contact: what touches · feeling: what feels · each arises, stands, ceases</Wd>],
      ["But the pieces themselves are taken as real", 960, 720, <Wd c={WARM} s={28} serif>the pieces themselves: taken as real</Wd>],
      ["Where I part from that, the next section will show", 960, 800, <Wd c={DIM} s={24}>next section: Nāgārjuna</Wd>],
    ]} />
  </AbsoluteFill>
);

const KeptScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["This is where the teaching is most often misheard", 960, 100, <Wd c={GREEN} s={40} serif>What is kept</Wd>],
      ["No owner does not mean no responsibility", 960, 240, <Box c={GREEN} w={980} title="no owner, still responsible" sub="kind acts tend to happiness · practice changes a person · promises kept" />, { pop: true }],
      ["The twelve links keep karma, rebirth, and the path", 960, 420, <Wd c={CHALK} s={28}>karma · rebirth · the path</Wd>],
      ["What is left out is only the owner", 960, 500, <K c={GOLD} s={30}>left out: only the owner</K>, { pop: true }],
      ["And one more thing, equally plain", 960, 640, <Wd c={CHALK} s={24}>no traveller needed: one objection removed</Wd>],
      ["But removing a bad argument against something", 960, 720, <Wd c={DIM} s={24}>not a proof of rebirth: a matter for its own evidence</Wd>],
    ]} />
  </AbsoluteFill>
);

const HurtScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The next time I am hurt", 960, 200, <Wd c={ROSE} s={48} serif>Who is hurt?</Wd>],
      ["Not to deny the hurt", 960, 360, <Wd c={DIM} s={26}>not denying the hurt: sharp and vivid</Wd>],
      ["What I find is the words, the feeling", 960, 480, <Wd c={CHALK} s={28}>the words · the feeling · the tightening · the story starting up</Wd>],
      ["The owner, looked for, is not found", 960, 620, <SK at="The owner, looked for, is not found" d={1.2} s={30}>the owner</SK>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And when the owner is not found, the story has less to stand on");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 8, 1.5) }}>
      <Items items={[
        ["This is Section 5, Part 2 of the Dependent Arising series", 960, 160, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 5 · Part 2</Wd>],
        ["And when the owner is not found, the story has less to stand on", 960, 480, <Wd c={CHALK} s={38} serif>no owner found:</Wd>],
        ["And when the owner is not found, the story has less to stand on", 960, 580, <Wd c={TEAL} s={36} serif>the story has less to stand on</Wd>, { d: 1.2 }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Who ages and dies? It sounds like the simplest question", "open", <OpenScene />],
    ["A monk once asked the Buddha directly", "monk", <MonkScene />],
    ["The question comes back in other forms", "others", <OthersScene />],
    ["One short discourse puts it", "karma", <KarmaScene />],
    ["The classical reading lays the twelve links over three lives", "lives", <LivesScene />],
    ["Behind it stands the work of the", "pieces", <PiecesScene />],
    ["This is where the teaching is most often misheard", "kept", <KeptScene />],
    ["The next time I am hurt", "hurt", <HurtScene />],
    ["This is Section 5, Part 2 of the Dependent Arising series", "night", <CloseScene />],
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
