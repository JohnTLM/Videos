// Bonus video: Dependent Arising Section 2 Part 11: Where the Big Ideas Come From (AA51), the close of Section 2.
// (Script: new-documents/after-anatta/aa51-where-the-big-ideas-come-from-script.md, from EBooks
// Bonus Articles/where-the-big-ideas-come-from, draft of 2026-11-25; approved by the owner 2026-11-25: "Approved".)
// Arc: a toothache, a sunrise, a key: where do the big ideas come from? -> the gap the mind fills -> a toothache
// (privacy: asymmetry of conditions; the hidden room struck) -> a sunrise (objectivity: reliable coherence; the world
// given in advance struck) -> a key (causal power: found only where conditions meet; power stored in the key struck)
// -> inside and outside (two boxes struck; two cuts in one appearing) -> which holds -> what Section 2 has shown ->
// two traps (too much, too little) -> recognition, not search; wonder -> next: Section 3, Mind and Matter.
// Stance: the room, the given world, the stored power and the boxes are drawn only to be struck.
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
  "A toothache. A sunrise. A key in a lock", "Where do the big ideas come from", "I am John Tan, known as Thusness",
  // why
  "At the start of this section, I said that most of the big ideas we live by grow out of how we answer one question",
  "Over ten parts, the answer has come into view", "The mind finds this hard to hold", "So the mind fills the gap",
  "Privacy. Objectivity. Causal power. Inside and outside", "These ideas are not mistakes made up from nothing",
  "I will look at what was added",
  // tooth
  "First, a toothache", "It is unmistakable, and it is mine", "Surely, then, there is a private room behind my eyes",
  "Each of us has one, sealed off from all the others",
  "Or, and it is a big or, look at what the privacy actually shows", "So there is a real asymmetry of access",
  "The dentist relies on it, when asking me where it hurts", "But look for the room",
  "The clarity belongs to the aching itself", "So privacy is a real feature of appearing", "A hidden room is not found",
  "And you still cannot feel it for me",
  // sunrise
  "Second, a sunrise", "A thousand people on the hill would all point to the same place in the sky",
  "Surely, then, the world is objective, and given", "And the agreement of all those people proves it",
  "Or, and again it is a big or, look at what the regularity actually shows", "Appearances repeat",
  "Regularity is the coherence of dependent arising, not evidence of a thing behind it",
  "Agreement is what conventional truth is", "because the conditions include the knowing",
  "So objectivity is a real feature of appearing", "A world given in advance, before any seeing, is not found",
  "The farmer still plants by it",
  // key
  "Third, a key", "The door opens. The key did it", "Surely, then, the key has a power inside it",
  "Or, and it is the biggest or, look for the power", "Hold the key alone, away from the door. It opens nothing",
  "Put it in the wrong lock. Nothing", "Put it in the right lock, with no hand to turn it. Nothing",
  "The power to open is found only with the lock, the hand, the turning and the door, all together",
  "So causal efficacy is itself a relation", "is the clearest mark of dependence", "The key still opens the door",
  // inside and outside
  "Fourth, inside and outside", "Some are felt from within", "Some are touched from without",
  "Surely there are two boxes", "And the deep puzzle is how the two connect", "Searched for, neither box is found",
  "Mind and matter are two cuts in one appearing", "This is only a sketch", "And I still eat",
  // which holds
  "So, which holds", "By experience. I meet the ache, the sunrise, the opening door, the near and the far",
  "By logic. A private room would have to be somewhere",
  "By working. The big ideas explain nothing that dependent arising does not explain better",
  "Privacy is the asymmetry of conditions", "Objectivity is their reliable coherence", "Causal power is their meeting",
  "So the big ideas, taken as things, are not the truer view", "The my, of my ache",
  "What fails is only the thing each word quietly sets up, behind the appearing",
  // shown
  "What Section 2 has shown", "What appears is vivid, not found, and dependently arisen, all at once",
  "What is it in itself, falls away", "No floor is found. Not the moment, not the atom, not space",
  "The clarity is the appearing itself", "And the big ideas are features of appearing, misread as things",
  // traps
  "And two traps sit on either side of all of this", "Too much. It is vivid, so it really exists",
  "This is the trap that waits just after", "Too little. It is not found, so it is nothing",
  "But the absence is not a thing",
  // recognition
  "Recognition, not search", "They catch the habit in the act", "But the search is not where it ends",
  "It was never findable", "The place from which it searches", "What I have come to value more is recognition",
  "Like a drawing on water", "Recognition is not an achievement", "Nor is it passive", "Not reached once, and kept",
  "And then the ordinary world is simply the ordinary world",
  "The tooth aches. The sun rises. The key turns. The bell rings",
  "What has gone is only the floor, and the room, and the power, and the knower, that were never there",
  "The tradition has a word for meeting appearances this way. Wonder", "That is not a problem to be solved",
  "It is magical. And miraculous",
  // close
  "This is Section 2, Part 11 of the Dependent Arising series, and the close of Section 2",
  "Next comes Section 3, Mind and Matter", "Is either of them worth leaning towards at all, once neither is the floor",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  rose: { a: "rgba(160,60,80,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  dawn: { a: "rgba(190,120,60,0.46)", b: "rgba(70,60,160,0.4)", c: "rgba(60,120,150,0.32)" },
  door: { a: "rgba(40,90,120,0.48)", b: "rgba(120,95,50,0.38)", c: "rgba(60,50,130,0.36)" },
  box: { a: "rgba(70,55,140,0.48)", b: "rgba(40,100,120,0.38)", c: "rgba(150,100,50,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  water: { a: "rgba(40,90,140,0.5)", b: "rgba(80,60,150,0.4)", c: "rgba(40,120,130,0.32)" },
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
/** A tooth that throbs; `room` 0..1 shows a dashed "inner room" box behind it. */
const Tooth: React.FC<{ room?: number }> = ({ room = 0 }) => {
  const { t } = useT();
  const k = 0.5 + 0.5 * Math.sin(t * 5);
  return (
    <svg width={420} height={360} viewBox="-210 -180 420 360" style={{ overflow: "visible" }}>
      <rect x={-190} y={-170} width={380} height={340} rx={20} fill="none" stroke={DIM} strokeWidth={3} strokeDasharray="10 8" opacity={room} />
      {room > 0 && <text x={0} y={-140} fill={DIM} fontSize={22} textAnchor="middle" fontFamily="SourceSans" opacity={room}>a private room?</text>}
      {[1, 2].map((i) => <circle key={i} cx={0} cy={-10} r={60 + i * 26 + k * 10} fill="none" stroke={ROSE} strokeWidth={3} opacity={(0.6 - i * 0.2) * k} />)}
      <path d="M-50 -60 Q-60 -90 -25 -88 Q0 -80 25 -88 Q60 -90 50 -60 Q45 0 35 50 Q28 80 15 40 Q0 10 -15 40 Q-28 80 -35 50 Q-45 0 -50 -60 Z" fill="rgba(240,235,220,0.2)" stroke={CHALK} strokeWidth={5} />
    </svg>
  );
};
/** A sun rising over a hill, with many small watchers pointing up. */
const Sunrise: React.FC = () => {
  const { t } = useT();
  const y = 40 - Math.min(1, (t % 30) / 10) * 40;
  return (
    <svg width={640} height={340} viewBox="0 0 640 340" style={{ overflow: "visible" }}>
      <circle cx={320} cy={150 + y} r={56} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} />
      {[...Array(10)].map((_, i) => { const a = (i / 10) * Math.PI; return <path key={i} d={`M${320 + 70 * Math.cos(a + Math.PI)} ${150 + y + 70 * Math.sin(a + Math.PI)} L${320 + 95 * Math.cos(a + Math.PI)} ${150 + y + 95 * Math.sin(a + Math.PI)}`} stroke={GOLD} strokeWidth={3} />; })}
      <path d="M0 230 Q320 130 640 230 L640 340 L0 340 Z" fill="rgba(40,90,60,0.6)" stroke={GREEN} strokeWidth={4} />
      {[...Array(14)].map((_, i) => <g key={i} transform={`translate(${40 + i * 42}, ${280 + (i % 3) * 12})`}><circle cx={0} cy={-14} r={5} fill={CHALK} /><path d="M0 -9 L0 6 M0 -4 L8 -14" stroke={CHALK} strokeWidth={2} /></g>)}
    </svg>
  );
};
/** A key; `lock` 0..1 brings the lock, hand and door around it. */
const KeyLock: React.FC<{ lock: number }> = ({ lock }) => (
  <svg width={620} height={360} viewBox="-310 -180 620 360" style={{ overflow: "visible" }}>
    <g opacity={lock}>
      <rect x={-260} y={-160} width={180} height={320} rx={6} fill="rgba(120,80,40,0.45)" stroke={WARM} strokeWidth={5} />
      <rect x={-120} y={-20} width={30} height={60} rx={6} fill={`${GOLD}66`} stroke={GOLD} strokeWidth={4} />
      <path d="M150 30 q30 -30 60 -10 q20 20 -10 50 q-30 10 -50 -40" fill="rgba(240,200,170,0.4)" stroke={ROSE} strokeWidth={4} />
    </g>
    <g transform={`translate(${-60 + (1 - lock) * 80}, 10)`}>
      <circle cx={120} cy={0} r={24} fill="none" stroke={GOLD} strokeWidth={7} />
      <path d="M0 0 L96 0 M20 0 L20 16 M40 0 L40 13" stroke={GOLD} strokeWidth={7} strokeLinecap="round" />
    </g>
  </svg>
);
/** A wavy line drawn on water that fades as it is drawn: self-release. */
const WaterDrawing: React.FC<{ start: number }> = ({ start }) => {
  const { t } = useT();
  const k = Math.max(0, t - start);
  const draw = Math.min(1, k / 1.5);
  const fade = Math.max(0, 1 - Math.max(0, k - 1.8) / 2);
  return (
    <svg width={700} height={200} viewBox="0 0 700 200" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => <path key={i} d={`M0 ${130 + i * 22} Q175 ${115 + i * 22} 350 ${130 + i * 22} T700 ${130 + i * 22}`} stroke={ICE} strokeWidth={2} fill="none" opacity={0.35} />)}
      <path d="M60 100 C160 20 240 160 340 80 S520 20 640 90" stroke={TEAL} strokeWidth={6} fill="none"
        strokeDasharray={900} strokeDashoffset={900 * (1 - draw)} opacity={fade} strokeLinecap="round" />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Phase to="I am John Tan, known as Thusness">
      <Items items={[
        ["A toothache. A sunrise. A key in a lock", 440, 430, <Tooth />],
        ["A toothache. A sunrise. A key in a lock", 960, 430, <Sunrise />, { d: 1 }],
        ["A toothache. A sunrise. A key in a lock", 1480, 430, <KeyLock lock={0} />, { d: 2 }],
        ["Where do the big ideas come from", 960, 790, <Wd c={GOLD} s={44} serif>Where do the big ideas come from?</Wd>],
      ]} />
    </Phase>
    <Phase from="I am John Tan, known as Thusness" to="At the start of this section, I said that most of the big ideas we live by grow out of how we answer one question">
      <Items items={[
        ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Where the Big Ideas Come From</Wd>, { d: 0.2 }],
        ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
        ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 11 · the close</Wd>, { d: 0.8 }],
      ]} />
    </Phase>
    <Phase from="At the start of this section, I said that most of the big ideas we live by grow out of how we answer one question">
      <Items items={[
        ["At the start of this section, I said that most of the big ideas we live by grow out of how we answer one question", 960, 180, <Wd c={CHALK} s={30} serif>what is it that appears?</Wd>],
        ["Over ten parts, the answer has come into view", 960, 260, <Wd c={DIM} s={22}>vivid · not found · dependent · no floor · no knower · complete as its conditions</Wd>],
        ["The mind finds this hard to hold", 960, 360, <Wd c={CHALK} s={26}>fully present, yet not found · it works, yet is not there</Wd>],
        ["So the mind fills the gap", 960, 440, <K c={WARM} s={26}>so the mind fills the gap</K>, { pop: true }],
        ["Privacy. Objectivity. Causal power. Inside and outside", 960, 540, <Wd c={GOLD} s={30} serif>privacy · objectivity · causal power · inside and outside</Wd>],
        ["These ideas are not mistakes made up from nothing", 960, 640, <Wd c={CHALK} s={24}>each starts from a real feature of appearing, then misreads it as a thing</Wd>],
        ["I will look at what was added", 960, 720, <K c={TEAL} s={24}>not denying what they point to: looking at what was added</K>, { pop: true }],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const ToothScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const room = ramp(t, c("Surely, then, there is a private room behind my eyes"), 0.8) * (1 - ramp(t, c("A hidden room is not found"), 0.8));
  return (
    <AbsoluteFill>
      <Items items={[["First, a toothache", 960, 80, <Wd c={ROSE} s={44} serif>1 · A toothache</Wd>]]} />
      <At x={520} y={470} o={1}><Tooth room={room} /></At>
      <Items items={[
        ["It is unmistakable, and it is mine", 1380, 200, <Wd c={CHALK} s={24}>unmistakable, and mine · you cannot feel it</Wd>],
        ["Surely, then, there is a private room behind my eyes", 1380, 270, <SK at="A hidden room is not found" s={22}>a private room, an inner theatre, sealed off</SK>],
        ["So there is a real asymmetry of access", 1380, 370, <K c={GOLD} s={24}>a real asymmetry of access</K>, { pop: true }],
        ["The dentist relies on it, when asking me where it hurts", 1380, 440, <Wd c={DIM} s={22}>what arises with this body · valid · it works</Wd>],
        ["But look for the room", 1380, 520, <Wd c={CHALK} s={24}>the room? not in tooth, nerves, or a brain-screen</Wd>],
        ["The clarity belongs to the aching itself", 1380, 590, <Wd c={TEAL} s={24}>the clarity is the aching's own · no owner found</Wd>],
        ["So privacy is a real feature of appearing", 1380, 680, <Box c={ROSE} w={640} title="privacy" sub="an asymmetry of conditions · no hidden room" />, { pop: true }],
        ["And you still cannot feel it for me", 1380, 800, <K c={GREEN} s={22}>the tooth still aches · I still go to the dentist</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const SunScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Second, a sunrise", 960, 80, <Wd c={GOLD} s={44} serif>2 · A sunrise</Wd>],
      ["Second, a sunrise", 520, 470, <Sunrise />],
      ["A thousand people on the hill would all point to the same place in the sky", 1380, 200, <Wd c={CHALK} s={24}>a thousand people point to one place</Wd>],
      ["Surely, then, the world is objective, and given", 1380, 270, <SK at="A world given in advance, before any seeing, is not found" s={22}>a finished world out there, waiting to be seen</SK>],
      ["Appearances repeat", 1380, 360, <K c={GOLD} s={24}>appearances repeat</K>, { pop: true }],
      ["Regularity is the coherence of dependent arising, not evidence of a thing behind it", 1380, 430, <Wd c={CHALK} s={22}>regularity: the coherence of dependent arising</Wd>],
      ["Agreement is what conventional truth is", 1380, 490, <Wd c={DIM} s={22}>agreement: conventional truth, not a floor</Wd>],
      ["because the conditions include the knowing", 1380, 550, <Wd c={TEAL} s={22}>the conditions include the knowing</Wd>],
      ["So objectivity is a real feature of appearing", 1380, 650, <Box c={GOLD} w={640} title="objectivity" sub="reliable, in common · no world given in advance" />, { pop: true }],
      ["The farmer still plants by it", 1380, 780, <K c={GREEN} s={22}>the sun still rises · the farmer still plants by it</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const KeyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const lock = ramp(t, c("The power to open is found only with the lock, the hand, the turning and the door, all together"), 1);
  return (
    <AbsoluteFill>
      <Items items={[["Third, a key", 960, 80, <Wd c={WARM} s={44} serif>3 · A key</Wd>]]} />
      <At x={520} y={470} o={1}><KeyLock lock={lock} /></At>
      <Items items={[
        ["The door opens. The key did it", 1380, 200, <Wd c={CHALK} s={24}>the door opens · "the key did it"</Wd>],
        ["Surely, then, the key has a power inside it", 1380, 270, <SK at="So causal efficacy is itself a relation" s={22}>a power stored inside the key</SK>],
        ["Hold the key alone, away from the door. It opens nothing", 1380, 360, <Wd c={DIM} s={22}>alone: nothing</Wd>],
        ["Put it in the wrong lock. Nothing", 1380, 410, <Wd c={DIM} s={22}>wrong lock: nothing</Wd>],
        ["Put it in the right lock, with no hand to turn it. Nothing", 1380, 460, <Wd c={DIM} s={22}>no hand: nothing</Wd>],
        ["The power to open is found only with the lock, the hand, the turning and the door, all together", 1380, 530, <K c={TEAL} s={24}>found only where all meet</K>, { pop: true }],
        ["So causal efficacy is itself a relation", 1380, 640, <Box c={WARM} w={640} title="causal power" sub="itself a relation · never stored in a cause" />, { pop: true }],
        ["is the clearest mark of dependence", 1380, 750, <Wd c={CHALK} s={22}>"it acts, so it is real": the clearest mark of dependence</Wd>],
        ["The key still opens the door", 1380, 820, <K c={GREEN} s={22}>the key still opens · medicine still heals</K>, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

const BoxesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Fourth, inside and outside", 960, 80, <Wd c={VIOLET} s={44} serif>4 · Inside and outside</Wd>],
      ["Some are felt from within", 600, 230, <Wd c={CHALK} s={24}>felt from within: hunger, a mood</Wd>],
      ["Some are touched from without", 1320, 230, <Wd c={CHALK} s={24}>touched from without: a table, a wall</Wd>],
      ["Surely there are two boxes", 600, 400, <SK at="Searched for, neither box is found" s={28}>inside: mind</SK>],
      ["Surely there are two boxes", 1320, 400, <SK at="Searched for, neither box is found" d={0.3} s={28}>outside: matter</SK>, { d: 0.6 }],
      ["And the deep puzzle is how the two connect", 960, 480, <Wd c={DIM} s={22}>how do the two connect?</Wd>],
      ["Mind and matter are two cuts in one appearing", 960, 600, <Wd c={GOLD} s={32} serif>two cuts in one appearing</Wd>],
      ["This is only a sketch", 960, 690, <K c={VIOLET} s={24}>in full: Section 3, Mind and Matter</K>, { pop: true }],
      ["And I still eat", 960, 780, <K c={GREEN} s={22}>hunger still felt · the wall still stops me · I still eat</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. I meet the ache, the sunrise, the opening door, the near and the far", 400, 270, <Box c={ICE} w={500} title="Experience" sub="none of the added things is met" />, { pop: true }],
      ["By logic. A private room would have to be somewhere", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="each added thing fails the search" />, { pop: true }],
      ["By working. The big ideas explain nothing that dependent arising does not explain better", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="dependent arising explains it better" />, { pop: true }],
      ["Privacy is the asymmetry of conditions", 960, 420, <Wd c={CHALK} s={22}>privacy: asymmetry · objectivity: coherence · causal power: meeting</Wd>],
      ["So the big ideas, taken as things, are not the truer view", 960, 520, <Wd c={CHALK} s={28} serif>the big ideas as things: the default</Wd>],
      ["The my, of my ache", 960, 600, <Wd c={DIM} s={24}>"my" ache · "the" world · the key's "power" · "in here"</Wd>],
      ["What fails is only the thing each word quietly sets up, behind the appearing", 960, 690, <K c={GOLD} s={22}>what fails: only the thing each word sets up behind the appearing</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const ShownScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["What Section 2 has shown", 960, 90, <Wd c={GOLD} s={42} serif>What Section 2 has shown</Wd>],
      ["What appears is vivid, not found, and dependently arisen, all at once", 960, 190, <K c={ICE} s={24}>vivid · not found · dependently arisen, all at once</K>, { pop: true }],
      ["What is it in itself, falls away", 960, 260, <K c={ICE} s={24}>"what is it in itself?" falls away</K>, { pop: true }],
      ["No floor is found. Not the moment, not the atom, not space", 960, 330, <K c={ICE} s={24}>no floor: not the moment, the atom, or space</K>, { pop: true }],
      ["No floor is found. Not the moment, not the atom, not space", 960, 400, <K c={ICE} s={24}>no way of appearing privileged · the web not the floor</K>, { pop: true, d: 3 }],
      ["The clarity is the appearing itself", 960, 470, <K c={TEAL} s={24}>the clarity is the appearing itself</K>, { pop: true }],
      ["The clarity is the appearing itself", 960, 540, <K c={TEAL} s={24}>everything depends, completely: total exertion</K>, { pop: true, d: 2 }],
      ["And the big ideas are features of appearing, misread as things", 960, 610, <K c={GOLD} s={24}>the big ideas: features of appearing, misread as things</K>, { pop: true }],
      ["And two traps sit on either side of all of this", 960, 720, <Wd c={CHALK} s={28} serif>two traps, on either side</Wd>],
      ["Too much. It is vivid, so it really exists", 560, 820, <SK at="But the absence is not a thing" d={1} s={22}>too much: vivid, so it really exists</SK>],
      ["Too little. It is not found, so it is nothing", 1360, 820, <SK at="But the absence is not a thing" d={1.3} s={22}>too little: not found, so it is nothing</SK>],
    ]} />
  </AbsoluteFill>
);

const RecognitionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["Recognition, not search", 960, 90, <Wd c={TEAL} s={44} serif>Recognition, not search</Wd>],
        ["They catch the habit in the act", 960, 190, <Wd c={DIM} s={24}>the searches catch the habit in the act</Wd>, { until: "What I have come to value more is recognition" }],
        ["It was never findable", 960, 260, <Wd c={CHALK} s={24}>never findable · the search only shows it</Wd>, { until: "What I have come to value more is recognition" }],
        ["The place from which it searches", 960, 330, <SK at="What I have come to value more is recognition" s={22}>one last place: from which it searches</SK>, { until: "Like a drawing on water", ud: -0.5 }],
        ["What I have come to value more is recognition", 960, 220, <Wd c={GOLD} s={32} serif>recognition: nothing needs to be looked for</Wd>, { d: 0.6 }],
        ["Recognition is not an achievement", 600, 520, <K c={VIOLET} s={22}>not an achievement</K>, { pop: true, until: "And then the ordinary world is simply the ordinary world" }],
        ["Nor is it passive", 1320, 520, <K c={VIOLET} s={22}>not passive: clear knowing</K>, { pop: true, until: "And then the ordinary world is simply the ordinary world" }],
        ["Not reached once, and kept", 960, 590, <Wd c={CHALK} s={22}>recognised again and again</Wd>, { until: "And then the ordinary world is simply the ordinary world" }],
        ["The tooth aches. The sun rises. The key turns. The bell rings", 960, 520, <Wd c={CHALK} s={28} serif>the tooth aches · the sun rises · the key turns · the bell rings</Wd>],
        ["What has gone is only the floor, and the room, and the power, and the knower, that were never there", 960, 600, <Wd c={DIM} s={22}>gone: only the floor, the room, the power, the knower · never there</Wd>],
        ["The tradition has a word for meeting appearances this way. Wonder", 960, 700, <Wd c={GOLD} s={40} serif>wonder</Wd>],
        ["It is magical. And miraculous", 960, 780, <K c={GOLD} s={26}>magical, and miraculous</K>, { pop: true }],
      ]} />
      <At x={960} y={400} o={ramp(t, c("Like a drawing on water"), 0.3) * (1 - ramp(t, c("Recognition is not an achievement"), 0.5))}><WaterDrawing start={c("Like a drawing on water")} /></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("Is either of them worth leaning towards at all, once neither is the floor");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 11 of the Dependent Arising series, and the close of Section 2", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · the close</Wd>],
        ["Next comes Section 3, Mind and Matter", 960, 320, <Wd c={CHALK} s={34} serif>next: Section 3, Mind and Matter</Wd>],
        ["Is either of them worth leaning towards at all, once neither is the floor", 960, 450, <Wd c={DIM} s={26}>neither is the floor: is either worth leaning towards?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A toothache. A sunrise. A key in a lock", "dusk", <OpenScene />],
    ["First, a toothache", "rose", <ToothScene />],
    ["Second, a sunrise", "dawn", <SunScene />],
    ["Third, a key", "door", <KeyScene />],
    ["Fourth, inside and outside", "box", <BoxesScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["What Section 2 has shown", "ghost", <ShownScene />],
    ["Recognition, not search", "water", <RecognitionScene />],
    ["This is Section 2, Part 11 of the Dependent Arising series, and the close of Section 2", "night", <CloseScene />],
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
