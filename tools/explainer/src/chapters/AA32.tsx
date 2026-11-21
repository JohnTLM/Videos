// Bonus article: The Fist, the Wind and the Chariot (AA32).
// (EBooks Bonus Articles/the-fist-the-wind-and-the-chariot, draft of 2026-11-21.)
// Arc: make a fist, open the hand -> the sentences that disturb -> the hollow chariot, a ghost that acts; "despite"
// struck -> anatta sees one side -> insight 1: the name drawn from the working (wind lines) -> insight 2: fist, lap,
// wave, jam, melody, rainbow, team; the stability ladder -> insight 3: an essence would stop the carrying -> insight 4:
// "then what carries?" and the meeting of conditions -> the breeze check -> a disservice, mine too -> how I say it now
// -> Nietzsche's lightning, Nagasena's chariot -> open the hand.
// Stance: no essence is ever drawn as a thing; emptiness is never drawn as a power; "because empty, it works" is struck.
// Cue phrases avoid respelled names (Nagarjuna, Nagasena, Milinda) and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "Make a fist", "Now open your hand", "Where did the fist go", "And yet, a fist can hit", "I am John Tan, known as Thusness",
  // the sentences
  "For years I have said it in many ways", "The chariot has no essence, yet it still carries",
  "There is no wind, yet the blowing is felt", "these sentences disturb more than they open", "It hears a paradox",
  "or it rejects it as nonsense", "There is a gap here",
  // the ghost
  "Look closely at the sentence", "It does two things at once", "And it empties that subject",
  "A hollow thing, pushing a load", "A ghost that acts", "then what does the carrying", "conditions, the parts, the process",
  "The gap is not closed", "The word that does the damage is despite", "Or yet", "Or still",
  "It sets the working against the emptiness", "It is the grammar I have been saying it in",
  // one side
  "Why does even the insight", "usually sees through one side", "no seer is found behind the seeing",
  "But the other side can stay untouched", "The tree that is seen", "The chariot still seems to push the load",
  "A cause still seems to hold a power", "The seer has gone", "The seen has not been looked into",
  "The emptiness of self, and the emptiness of phenomena", "Four insights, in my experience, are what it takes",
  // insight 1
  "The first insight", "Habit puts things in this order", "First there is a chariot, and then it carries",
  "In experience, the order is the other way round", "Chariot is the name drawn from that carrying",
  "There is the blowing", "Wind is the name drawn from that blowing", "The blowing is the wind, completely",
  "It is all the wind there ever was", "Nothing is missing", "the flashing is the lightning", "There is the raining",
  "The name does real work", "But it picks out the working",
  // insight 2
  "The second insight", "A fist can hit, hard", "Fist names the hand, clenched", "Your cat sits on your lap",
  "Lap names sitting", "A wave can knock you over", "A traffic jam makes you late for work", "A melody moves you",
  "A rainbow is photographed", "A team wins the cup", "you already accept that something works fully",
  "The chariot, the apple, the body and the self have the same structure", "A fist lasts seconds",
  "A chariot lasts years", "A body, a lifetime", "the name has come to feel like a thing",
  "notice where you stopped using a logic you already use",
  // insight 3
  "The third insight", "Suppose the chariot did have an essence", "It could not be built", "It could not move",
  "It could not carry", "And something sealed in its own nature could meet nothing",
  "If you see things as existing by their own nature", "there would be no arising, and no passing away",
  "So the carrying does not happen despite the lack of an essence", "It is something an essence would make impossible",
  "I am careful with the wording", "because the chariot is empty, it carries", "Emptiness does nothing",
  "the chariot carries, and what carries is found empty", "An essence would have stopped it",
  // insight 4
  "The fourth insight", "But then what is it that carries", "It asks for a carrier behind the carrying",
  "So I do not answer it", "The carrying is wheels, axle, road, load", "Nothing extra stands behind them doing the work",
  "Nor do they add up to a new hidden carrier", "the question simply stops coming up", "It loses its object",
  // breeze
  "Arguments can only point", "Next time there is a breeze, feel it", "is anything missing",
  "What would a wind add to this", "Nothing would be added", "Do the same with a cup of tea in your hand",
  "What would a cup essence add", "It is the same seeing, now turned to the seen",
  // disservice
  "I want to say plainly how serious I have found this to be", "a major disservice",
  "Many teachers and writers on emptiness fall into it without knowing it", "And I am one of them",
  "not found, yet it carries you", "A car with no essence still injures", "How a world without essence still appears",
  "And it left the reader with a ghost that acts", "a paradox to be accepted, or a mystery to be revered", "It is neither",
  "Someone who is serious about a", "So this must be corrected", "I have begun with my own writing",
  // how I say it
  "This has changed how I write", "The chariot carries. Chariot is the name for this carrying", "None is needed",
  "One would only get in the way", "The breeze is cold on my skin", "There is no wind behind it that the blowing needs",
  // Nietzsche and the chariot
  "Others have seen the grammar sharply", "separates the lightning from its flash", "when the deed is everything",
  "Where I part from him", "It too is named, and not found", "And the oldest image is still the clearest",
  "not the pole, not the axle, not the wheels, not the frame, not their sum", "Chariot is a name, used in dependence on these",
  "And it was in that chariot that the king had come",
  // end
  "Open your hand. Nothing is lost", "No fist was ever hiding in the hand", "And the hand is free to make a fist again",
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
const SK: React.FC<{ c?: string; s?: number; at: string; children: React.ReactNode }> = ({ c = DIM, s = 30, at, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at)} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "22px 18px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={38} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={26}>{sub}</Wd></div> : null}
  </div>
);

// ---------------------------------------------------------------- drawings
/** A chariot, simply drawn; `apart` 0..1 pulls its parts away. */
const Chariot: React.FC<{ p: number; apart: number }> = ({ p, apart }) => (
  <svg width={600} height={340} viewBox="0 0 600 340" style={{ overflow: "visible" }}>
    <g transform={`translate(${-apart * 90} ${apart * 40})`}><DrawPath d="M140 250 a70 70 0 1 1 -0.1 0 Z M140 180 L140 320 M70 250 L210 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(${apart * 90} ${apart * 40})`}><DrawPath d="M420 250 a70 70 0 1 1 -0.1 0 Z M420 180 L420 320 M350 250 L490 250" p={p} color={GOLD} width={5} len={700} /></g>
    <g transform={`translate(0 ${-apart * 60})`}><DrawPath d="M80 170 L500 170 L470 80 L120 80 Z" p={p} color={CHALK} width={5} len={1100} /></g>
    <g transform={`translate(0 ${apart * 70})`}><DrawPath d="M140 250 L420 250" p={p} color={DIM} width={6} len={300} /></g>
    <g transform={`translate(${apart * 120} ${-apart * 20})`}><DrawPath d="M500 150 L590 120" p={p} color={DIM} width={6} len={120} /></g>
  </svg>
);
// ---------------------------------------------------------------- drawings
/** A clenched fist, simply drawn. */
const Fist: React.FC<{ size?: number }> = ({ size = 260 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M50 70 Q50 45 75 45 L140 45 Q165 45 165 75 L165 130 Q165 165 130 168 L80 168 Q50 165 50 135 Z"
      fill="rgba(240,200,160,0.25)" stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 12px ${WARM})` }} />
    {[78, 108, 138].map((x) => <path key={x} d={`M${x} 48 L${x} 95`} stroke={WARM} strokeWidth={3} strokeOpacity={0.7} />)}
    <path d="M50 105 Q85 95 110 112" stroke={WARM} strokeWidth={4} fill="none" />
  </svg>
);
/** Moving wind lines. */
const Breeze: React.FC<{ o: number; w?: number }> = ({ o, w = 1300 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={260} viewBox={`0 0 ${w} 260`} style={{ overflow: "visible", opacity: o }}>
      {[0, 1, 2, 3].map((k) => {
        let d = `M0 ${50 + k * 55}`;
        for (let x = 0; x <= w; x += 20) d += ` L${x} ${50 + k * 55 + Math.sin(x / 90 + t * 2 + k) * 16}`;
        return <path key={k} d={d} fill="none" stroke={ICE} strokeWidth={3} strokeOpacity={0.55}
          strokeDasharray="60 40" strokeDashoffset={-t * 160 - k * 30} style={{ filter: `drop-shadow(0 0 6px ${ICE})` }} />;
      })}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const FistScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const open = c("Now open your hand");
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, 0.2, 0.6) * (1 - ramp(t, open, 0.6))}><Fist size={300} /></At>
      <At x={960} y={420} o={ramp(t, open, 0.8)} r={-10}><Hand size={320} /></At>
      <Items items={[
        ["Make a fist", 960, 150, <Wd c={CHALK} s={48} serif>Make a fist.</Wd>],
        ["Where did the fist go", 960, 690, <Wd c={GOLD} s={44} serif>Where did the fist go?</Wd>],
        ["And yet, a fist can hit", 960, 780, <Wd c={DIM} s={30}>no one asks, and yet a fist can hit</Wd>],
        ["I am John Tan, known as Thusness", 960, 150, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const SaidScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["For years I have said it in many ways", 960, 140, <Wd c={DIM} s={32}>what I have said for years</Wd>],
      ["The chariot has no essence, yet it still carries", 960, 270, <Wd c={CHALK} s={42} serif>"The chariot has no essence, yet it still carries."</Wd>],
      ["There is no wind, yet the blowing is felt", 960, 370, <Wd c={CHALK} s={42} serif>"There is no wind, yet the blowing is felt."</Wd>],
      ["It hears a paradox", 640, 540, <K c={VIOLET} s={32}>a paradox?</K>, { pop: true }],
      ["or it rejects it as nonsense", 1280, 540, <K c={ROSE} s={32}>nonsense?</K>, { pop: true }],
      ["There is a gap here", 960, 700, <Wd c={GOLD} s={46} serif>a gap</Wd>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const GhostScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hollow = ramp(t, c("And it empties that subject"), 1.2);
  return (
    <AbsoluteFill>
      <At x={560} y={380} o={ramp(t, 0.2, 0.6) * (1 - 0.6 * hollow)}><Chariot p={ramp(t, 0.2, 1.5)} apart={0} /></At>
      <Items items={[
        ["It does two things at once", 560, 130, <K c={CHALK} s={28}>keeps the subject · empties it</K>],
        ["A ghost that acts", 560, 640, <Wd c={ROSE} s={44} serif>a ghost that acts</Wd>, { pop: true }],
        ["then what does the carrying", 1380, 200, <Wd c={CHALK} s={40} serif>Then what does the carrying?</Wd>],
        ["conditions, the parts, the process", 1380, 320, <Wd c={DIM} s={28}>conditions · the parts · the process</Wd>],
        ["The gap is not closed", 1380, 390, <Wd c={WARM} s={28}>heard as a new thing in the empty place</Wd>],
        ["The word that does the damage is despite", 1060, 530, <SK c={WARM} s={36} at="It sets the working against the emptiness">despite</SK>],
        ["Or yet", 1310, 530, <SK c={WARM} s={36} at="It sets the working against the emptiness">yet</SK>],
        ["Or still", 1520, 530, <SK c={WARM} s={36} at="It sets the working against the emptiness">still</SK>],
        ["It sets the working against the emptiness", 1300, 640, <Wd c={DIM} s={28}>working set against emptiness</Wd>],
        ["It is the grammar I have been saying it in", 1300, 760, <K c={GOLD} s={32}>not the insight: the grammar</K>],
      ]} />
    </AbsoluteFill>
  );
};

const OneSideScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["usually sees through one side", 960, 120, <Wd c={CHALK} s={42} serif>Seeing through one side</Wd>],
      ["no seer is found behind the seeing", 540, 260, <SK c={DIM} s={30} at="no seer is found behind the seeing">a seer behind the seeing</SK>],
      ["no seer is found behind the seeing", 540, 350, <K c={GREEN} s={28}>seen through</K>, { d: 1 }],
      ["But the other side can stay untouched", 1380, 260, <Wd c={WARM} s={32}>the other side, untouched</Wd>],
      ["The tree that is seen", 1380, 350, <K c={WARM} s={26}>a tree standing from its own side</K>],
      ["The chariot still seems to push the load", 1380, 430, <K c={WARM} s={26}>a chariot pushing the load</K>],
      ["A cause still seems to hold a power", 1380, 510, <K c={WARM} s={26}>a cause holding a power</K>],
      ["The seen has not been looked into", 960, 640, <Wd c={DIM} s={30}>the seer has gone; the seen not looked into</Wd>],
      ["The emptiness of self, and the emptiness of phenomena", 960, 740, <Wd c={GOLD} s={36} serif>emptiness of self · emptiness of phenomena</Wd>],
    ]} />
  </AbsoluteFill>
);

const NameScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const blow = c("There is the blowing");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The first insight", 960, 110, <K c={GOLD} s={32}>1 · the name is drawn from the working</K>, { pop: true }],
        ["First there is a chariot, and then it carries", 520, 230, <SK c={DIM} s={30} at="In experience, the order is the other way round">chariot → then it carries</SK>],
        ["Chariot is the name drawn from that carrying", 1400, 230, <K c={GREEN} s={30}>carrying → "chariot"</K>],
      ]} />
      <At x={960} y={470} o={ramp(t, blow, 0.8)}><Breeze o={1} /></At>
      <Items items={[
        ["Wind is the name drawn from that blowing", 960, 340, <K c={ICE} s={30}>blowing → "wind"</K>],
        ["The blowing is the wind, completely", 960, 620, <Wd c={GOLD} s={48} serif>The blowing is the wind, completely.</Wd>],
        ["Nothing is missing", 960, 700, <Wd c={DIM} s={30}>nothing missing, so nothing to explain</Wd>],
        ["the flashing is the lightning", 520, 790, <K c={CHALK} s={26}>the flashing is the lightning</K>],
        ["There is the raining", 1400, 790, <K c={CHALK} s={26}>no "it" that rains: the raining</K>],
        ["But it picks out the working", 960, 790, <Wd c={GREEN} s={26}>the name picks out the working</Wd>, { d: 0.5 }],
      ]} />
    </AbsoluteFill>
  );
};

const EasyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ladder = c("A fist lasts seconds");
  const rows: [string, string, string][] = [
    ["A fist can hit, hard", "fist: the hand, clenched", WARM], ["Your cat sits on your lap", "lap: sitting", ROSE],
    ["A wave can knock you over", "wave: water moving", ICE], ["A traffic jam makes you late for work", "traffic jam: cars, roads, the hour", VIOLET],
    ["A melody moves you", "a melody", GOLD], ["A rainbow is photographed", "a rainbow", TEAL], ["A team wins the cup", "a team", GREEN],
  ];
  return (
    <AbsoluteFill>
      <div style={{ opacity: 1 - ramp(t, ladder, 0.6) }}>
        <Items items={[["The second insight", 960, 110, <K c={GOLD} s={32}>2 · you already live this logic</K>, { pop: true }]]} />
        {rows.map(([cue, label, col], i) => (
          <At key={cue} x={i < 4 ? 560 : 1360} y={250 + (i % 4) * 110} o={ramp(t, c(cue), 0.5)} s={pop(t, 30, c(cue))}>
            <Chip color={col} size={30}>{label}</Chip>
          </At>
        ))}
        <Items items={[["you already accept that something works fully", 960, 740, <Wd c={CHALK} s={32}>works fully, no essence, no disturbance</Wd>]]} />
      </div>
      <Items items={[
        ["A fist lasts seconds", 420, 420, <K c={WARM} s={30}>fist · seconds</K>],
        ["A chariot lasts years", 960, 360, <K c={GOLD} s={30}>chariot · years</K>],
        ["A body, a lifetime", 1500, 300, <K c={ROSE} s={30}>body · a lifetime</K>],
        ["the name has come to feel like a thing", 960, 560, <Wd c={DIM} s={30}>more stable, so the habit hardens</Wd>],
        ["notice where you stopped using a logic you already use", 960, 680, <Wd c={GOLD} s={36} serif>Where did you stop using the logic?</Wd>],
      ]} />
      <Svg><g opacity={ramp(t, ladder, 0.6)}><DrawPath d="M420 470 L960 410 L1500 350" p={ramp(t, ladder + 1, 2)} color={DIM} width={3} len={1200} /></g></Svg>
    </AbsoluteFill>
  );
};

const EssenceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The third insight", 960, 110, <K c={GOLD} s={32}>3 · an essence would stop the carrying</K>, { pop: true }],
      ["Suppose the chariot did have an essence", 960, 230, <Box c={WARM} w={620} title="A chariot with an essence" sub="complete, independent, its own nature" />],
      ["It could not be built", 480, 410, <K c={ROSE} s={30}>could not be built</K>, { pop: true }],
      ["It could not move", 960, 410, <K c={ROSE} s={30}>could not move</K>, { pop: true }],
      ["It could not carry", 1440, 410, <K c={ROSE} s={30}>could not carry</K>, { pop: true }],
      ["If you see things as existing by their own nature", 960, 520, <Wd c={DIM} s={26}>own nature: no causes, no conditions (MMK 24.16)</Wd>],
      ["there would be no arising, and no passing away", 960, 570, <Wd c={DIM} s={26}>not empty: no arising, no passing away (MMK 24.20)</Wd>],
      ["because the chariot is empty, it carries", 960, 670, <SK c={DIM} s={28} at="Emptiness does nothing">because empty, it carries</SK>],
      ["the chariot carries, and what carries is found empty", 960, 760, <Wd c={GREEN} s={36} serif>It carries, and what carries is found empty.</Wd>],
      ["An essence would have stopped it", 960, 820, <Wd c={DIM} s={26}>an essence would have stopped it</Wd>],
    ]} />
  </AbsoluteFill>
);

const CarrierScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const meet = c("The carrying is wheels, axle, road, load");
  const parts = ["wheels", "axle", "road", "load", "the pull", "purpose"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["The fourth insight", 960, 110, <K c={GOLD} s={32}>4 · "then what carries?" is the "it" question</K>, { pop: true }],
        ["But then what is it that carries", 960, 210, <SK c={CHALK} s={38} at="So I do not answer it">Then what is it that carries?</SK>],
      ]} />
      {parts.map((w, i) => {
        const a = (i / parts.length) * Math.PI * 2 - Math.PI / 2;
        const x = 960 + Math.cos(a) * 340, y = 480 + Math.sin(a) * 190;
        const p = ramp(t, meet + i * 0.35, 0.5);
        return (
          <React.Fragment key={w}>
            <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.3} y2={480 + (y - 480) * 0.3} color={GREEN} p={p} width={2} />
            <At x={x} y={y} o={p}><Chip color={GREEN} size={26}>{w}</Chip></At>
          </React.Fragment>
        );
      })}
      <Items items={[
        ["The carrying is wheels, axle, road, load", 960, 480, <Wd c={GOLD} s={40} serif>carrying</Wd>, { d: 2.2 }],
        ["Nor do they add up to a new hidden carrier", 960, 730, <SK c={DIM} s={26} at="Nor do they add up to a new hidden carrier">a hidden carrier</SK>],
        ["It loses its object", 960, 810, <Wd c={CHALK} s={30}>not answered: the question loses its object</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BreezeScene: React.FC = () => {
  const { t } = useT();
  return (
    <AbsoluteFill>
      <At x={960} y={330} o={ramp(t, 0.3, 1)}><Breeze o={1} w={1500} /></At>
      <Items items={[
        ["Arguments can only point", 960, 110, <Wd c={DIM} s={30}>arguments point; this is met directly</Wd>],
        ["What would a wind add to this", 960, 560, <Wd c={CHALK} s={44} serif>What would a wind add?</Wd>],
        ["Nothing would be added", 960, 650, <K c={GREEN} s={30}>nothing: the coolness and the moving are complete</K>],
        ["What would a cup essence add", 960, 740, <Wd c={DIM} s={30}>the tea: warmth, weight, taste. What would a cup essence add?</Wd>],
        ["It is the same seeing, now turned to the seen", 960, 820, <Wd c={GOLD} s={28}>the same seeing, turned to the seen</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DisserviceScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["a major disservice", 960, 120, <Wd c={WARM} s={48} serif>A major disservice</Wd>, { pop: true }],
      ["Many teachers and writers on emptiness fall into it without knowing it", 960, 210, <Wd c={DIM} s={28}>many teachers and writers, without knowing it</Wd>],
      ["And I am one of them", 960, 270, <K c={GOLD} s={28}>and I am one of them</K>],
      ["not found, yet it carries you", 960, 370, <SK c={CHALK} s={28} at="And it left the reader with a ghost that acts">"not found, yet it carries you"</SK>],
      ["A car with no essence still injures", 960, 440, <SK c={CHALK} s={28} at="And it left the reader with a ghost that acts">"a car with no essence still injures"</SK>],
      ["How a world without essence still appears", 960, 510, <SK c={CHALK} s={28} at="And it left the reader with a ghost that acts">"how a world without essence still appears"</SK>],
      ["a paradox to be accepted, or a mystery to be revered", 960, 620, <Wd c={DIM} s={28}>a paradox to accept? a mystery to revere?</Wd>],
      ["It is neither", 960, 680, <Wd c={CHALK} s={34} serif>Neither.</Wd>],
      ["So this must be corrected", 960, 780, <K c={GREEN} s={30}>corrected, beginning with my own writing</K>],
    ]} />
  </AbsoluteFill>
);

const SayScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["This has changed how I write", 960, 110, <Wd c={CHALK} s={42} serif>How I say it now</Wd>],
      ["This has changed how I write", 960, 200, <SK c={DIM} s={26} at="The chariot carries. Chariot is the name for this carrying">"The chariot has no essence, yet it still carries."</SK>, { d: 0.8 }],
      ["The chariot carries. Chariot is the name for this carrying", 960, 290, <Wd c={GOLD} s={32} serif>The chariot carries. "Chariot" names this carrying.</Wd>],
      ["None is needed", 960, 360, <Wd c={CHALK} s={28}>no chariot behind it · none needed</Wd>],
      ["One would only get in the way", 960, 420, <Wd c={DIM} s={26}>one would only get in the way</Wd>],
      ["The breeze is cold on my skin", 960, 560, <Wd c={ICE} s={32} serif>The breeze is cold on my skin: what "wind" names.</Wd>],
      ["There is no wind behind it that the blowing needs", 960, 640, <Wd c={DIM} s={26}>no wind behind it that the blowing needs</Wd>],
    ]} />
  </AbsoluteFill>
);

const ChariotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const old = c("And the oldest image is still the clearest");
  return (
    <AbsoluteFill>
      <div style={{ opacity: 1 - ramp(t, old, 0.5) }}>
        <Items items={[
          ["Others have seen the grammar sharply", 960, 150, <Wd c={CHALK} s={40} serif>Nietzsche</Wd>],
          ["separates the lightning from its flash", 960, 280, <Wd c={DIM} s={30}>the lightning separated from its flash</Wd>],
          ["when the deed is everything", 960, 370, <K c={GOLD} s={32}>"the deed is everything"</K>],
          ["Where I part from him", 960, 500, <Wd c={WARM} s={30}>where I part: the doing is no new ground</Wd>],
          ["It too is named, and not found", 960, 580, <Wd c={CHALK} s={30}>it too is named, and not found</Wd>],
        ]} />
      </div>
      <At x={960} y={420} o={ramp(t, old, 0.6)}><Chariot p={ramp(t, old, 1.5)} apart={ramp(t, c("not the pole, not the axle, not the wheels, not the frame, not their sum"), 3)} /></At>
      <Items items={[
        ["And the oldest image is still the clearest", 960, 130, <Wd c={CHALK} s={40} serif>Nāgasena's chariot</Wd>],
        ["not the pole, not the axle, not the wheels, not the frame, not their sum", 960, 680, <Wd c={DIM} s={26}>not the pole, axle, wheels, frame, their sum, nor apart from them</Wd>],
        ["Chariot is a name, used in dependence on these", 960, 750, <K c={GOLD} s={30}>a name, in dependence on these</K>],
        ["And it was in that chariot that the king had come", 960, 820, <Wd c={GREEN} s={28}>and in it the king had come</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const FinalScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const last = c("And the hand is free to make a fist again");
  const fist = ramp(t, last + 1.2, 0.8);
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, last + 6, 1.5) }}>
      <At x={960} y={400} o={ramp(t, 0.2, 0.6) * (1 - fist)} r={-10}><Hand size={300} /></At>
      <At x={960} y={400} o={fist}><Fist size={260} /></At>
      <Items items={[
        ["Open your hand. Nothing is lost", 960, 640, <Wd c={GOLD} s={48} serif>Nothing is lost.</Wd>],
        ["No fist was ever hiding in the hand", 960, 730, <Wd c={CHALK} s={32}>No fist was ever hiding in the hand.</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Make a fist", "dusk", <FistScene />],
    ["For years I have said it in many ways", "doubt", <SaidScene />],
    ["Look closely at the sentence", "search", <GhostScene />],
    ["Why does even the insight", "deep", <OneSideScene />],
    ["The first insight", "light", <NameScene />],
    ["The second insight", "whole", <EasyScene />],
    ["The third insight", "doubt", <EssenceScene />],
    ["The fourth insight", "jade", <CarrierScene />],
    ["Arguments can only point", "light", <BreezeScene />],
    ["I want to say plainly how serious I have found this to be", "night", <DisserviceScene />],
    ["This has changed how I write", "whole", <SayScene />],
    ["Others have seen the grammar sharply", "dusk", <ChariotScene />],
    ["Open your hand. Nothing is lost", "night", <FinalScene />],
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
