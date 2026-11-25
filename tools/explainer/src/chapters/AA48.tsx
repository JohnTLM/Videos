// Bonus video: Dependent Arising Section 2 Part 8: Dōgen: Firewood and Ash (AA48).
// (Script: new-documents/after-anatta/aa48-dogen-firewood-and-ash-script.md, from EBooks
// Bonus Articles/dogen-firewood-and-ash, draft of 2026-11-23; approved by the owner 2026-11-25: "Approved".)
// Arc: does something pass from wood to ash? -> time as a third way to stand outside the event -> firewood and ash
// (Genjōkōan): two positions, before and after cut off; the usual reading; the line of time with something carried
// (struck); ash is just ash AND the wood and fire appearing as ash; MMK 18.10 matched to the two phrases; no stuff
// running through, no little moments; taste: nothing carried over; where I part -> being-time (Uji): the pine is time;
// spring passes as spring; the river of time struck; where I part -> birth and death (Shōji): just birth, just death;
// where I part -> which holds -> next: the fish and the bird.
// Stance: no line, river or carried thing is drawn except to be struck. Cue phrases avoid names and respelled words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "Firewood burns, and there is ash", "Does something pass from the wood into the ash? Or does nothing",
  "I am John Tan, known as Thusness",
  // time
  "In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it",
  "A third way something could stand outside the event, and complete it, is time",
  "A past that leads up to it. A future it leads into", "A line, on which it is one small point",
  "Of his four images, it is the one I find closest to the heart of total exertion",
  "Because it shows most plainly the point Part 6 began with",
  // firewood
  "First, firewood and ash", "Firewood becomes ash, and ash cannot turn back into firewood",
  "do not think of ash as after, and firewood as before", "Firewood stays in its own dharma position, as firewood",
  "Yet the before and after are cut off", "Ash stays in its own position, as ash",
  "In the same way, life does not become death", "Like winter and spring",
  "How is this usually read? Each moment is complete in itself", "The habit runs a line through time",
  "And something travels along the line, from one to the other", "loosens the line",
  "But here is what I most want to say", "It is not half firewood", "In the ash, just the ash",
  "Both hold, in the same moment", "Wood is wood, and ash is ash", "says this precisely",
  "Whatever arises in dependence on something is neither that thing, nor different from it", "two phrases fit",
  "Cut off from before and after. Nothing permanent travels from the wood into the ash",
  "With a before and an after. The ash really does come from the wood",
  "And firewood and ash are not labels on one continuous stuff that runs through both",
  "Nor are the positions little moments with natures of their own", "They are designated, not found",
  "That is the taste of this image. Nothing carried over", "Some readers stop at, each moment complete",
  "Complete, as its dependence",
  // being time
  "Second, being time", "And he reads it as being time", "Being is already time, and time is already being",
  "For the time being, standing on the highest peak", "The pine is time. The bamboo is time",
  "Do not think, he says, that time only flies away", "that each moment is all being, the entire world",
  "He also speaks of time's passage", "But there is nothing outside spring that passes through it",
  "The passage of spring is just spring, passing", "Time is not a container that things sit in",
  "Some readers take that broadly", "The habit makes time a river, or a road", "Then time itself becomes the given",
  "Time is not found apart from things", "The passage of spring is the line I find most exact", "There is no carrier",
  "Spring passes, as spring", "Passage, without anything carried, and without a line",
  "I read each moment is all being as total exertion",
  "I do not read it as a cosmos packed inside the moment, or all of time stored in each instant",
  // birth and death
  "Third, birth and death", "just understand that birth and death is itself nirvana",
  "And nothing to seek as nirvana", "It is a mistake, he says, to think that birth turns into death",
  "When birth comes, there is just birth. When death comes, there is just death", "is the life of the Buddha",
  "Freedom is not an escape from birth and death into some other realm",
  "is often heard as one great life, present in all lives",
  "This is where firewood and ash stop being a teaching about wood", "When life is present, it is completely alive",
  "Nothing migrates across a line from one to the other",
  "Life is the total working of life. Death is the total working of death", "neither is sealed off",
  "There is nothing to escape, because there is no line to escape along",
  "I do not take the life of the Buddha as one great life behind all lives", "And nothing stands behind them",
  // which holds
  "So, which holds", "By experience. Is ash met as half finished firewood",
  "And at no point is a thread of time met, running underneath",
  "By logic. If the ash were the same as the wood, nothing would have burned",
  "Neither the same, nor different. Neither permanent, nor cut off", "By working. Nothing works the less for this",
  "Memory, plans and promises work, each in its own moment",
  "It is the default, carried by habit, and by the words becomes, and turns into",
  "The wood burns to ash. Winter gives way to spring",
  "What fails is only a time, a wood, or a self, standing on its own, and travelling across",
  // close
  "This is Section 2, Part 8 of the Dependent Arising series", "In Part 9, I take",
  "The fish that never reaches the end of the water, and never needs to",
];

const M = {
  ember: { a: "rgba(150,70,40,0.48)", b: "rgba(60,45,120,0.44)", c: "rgba(160,110,50,0.3)" },
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  pine: { a: "rgba(40,110,90,0.46)", b: "rgba(60,50,130,0.42)", c: "rgba(150,140,80,0.3)" },
  life: { a: "rgba(160,60,80,0.42)", b: "rgba(50,60,130,0.44)", c: "rgba(150,120,60,0.3)" },
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
/** Logs with flames. */
const Log: React.FC<{ flame?: number }> = ({ flame = 1 }) => {
  const { t } = useT();
  return (
    <svg width={340} height={260} viewBox="-170 -150 340 260" style={{ overflow: "visible" }}>
      <g opacity={flame}>
        {[-50, 0, 50].map((x, i) => {
          const h = 70 + 18 * Math.sin(t * 5 + i * 2);
          return <path key={i} d={`M${x - 26} 30 Q${x - 10} ${30 - h * 0.6} ${x} ${30 - h} Q${x + 12} ${30 - h * 0.6} ${x + 26} 30 Z`} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={3} />;
        })}
      </g>
      <rect x={-130} y={30} width={260} height={36} rx={18} fill="rgba(120,80,40,0.6)" stroke={WARM} strokeWidth={5} transform="rotate(-8)" />
      <rect x={-130} y={30} width={260} height={36} rx={18} fill="rgba(120,80,40,0.6)" stroke={WARM} strokeWidth={5} transform="rotate(8)" />
    </svg>
  );
};
/** A heap of ash; `flow` 0..1 draws the wood, fire, air and time coming through as it. */
const Ash: React.FC<{ flow: number }> = ({ flow }) => {
  const { t } = useT();
  const src: [string, string, number, number][] = [["wood", WARM, -300, -150], ["fire", ROSE, 300, -150], ["air", ICE, -320, 90], ["time", VIOLET, 320, 90]];
  return (
    <svg width={800} height={420} viewBox="-400 -210 800 420" style={{ overflow: "visible" }}>
      {src.map(([w, col, x, y], i) => (
        <g key={i} opacity={flow}>
          <path d={`M${x * 0.72} ${y * 0.72} Q${x * 0.3} ${y * 0.1} 0 30`} stroke={col} strokeWidth={4} fill="none"
            strokeDasharray="8 10" strokeDashoffset={-t * 30} />
          <text x={x} y={y} fill={col} fontSize={30} textAnchor="middle" fontFamily="SourceSans">{w}</text>
        </g>
      ))}
      <path d="M-170 110 Q-90 0 0 -10 Q90 0 170 110 Z" fill={`rgba(190,190,200,${0.25 + flow * 0.15})`} stroke={CHALK} strokeWidth={4} />
      {[...Array(9)].map((_, i) => (
        <circle key={i} cx={-110 + i * 28} cy={80 - (i % 3) * 22} r={5} fill={GOLD} opacity={flow * (0.4 + 0.5 * Math.abs(Math.sin(t * 1.5 + i)))} />
      ))}
      <text x={0} y={160} fill={CHALK} fontSize={34} textAnchor="middle" fontFamily="SourceSerif">ash</text>
    </svg>
  );
};
/** A line of time with a dot carried along it. */
const TimeLine: React.FC<{ carry?: number }> = ({ carry = 1 }) => {
  const { t } = useT();
  const x = 80 + ((t * 120) % 840);
  return (
    <svg width={1000} height={140} viewBox="0 0 1000 140" style={{ overflow: "visible" }}>
      <path d="M40 70 L960 70" stroke={DIM} strokeWidth={4} />
      <path d="M940 55 L965 70 L940 85" stroke={DIM} strokeWidth={4} fill="none" />
      <text x={40} y={125} fill={DIM} fontSize={24} fontFamily="SourceSans">past</text>
      <text x={960} y={125} fill={DIM} fontSize={24} textAnchor="end" fontFamily="SourceSans">future</text>
      <circle cx={x} cy={70} r={14} fill={GOLD} opacity={carry} />
    </svg>
  );
};
/** Blossoms on a branch, drifting: spring passing as spring. */
const Spring: React.FC = () => {
  const { t } = useT();
  return (
    <svg width={640} height={320} viewBox="-320 -160 640 320" style={{ overflow: "visible" }}>
      <path d="M-280 100 Q-80 20 60 -20 T280 -100" stroke={WARM} strokeWidth={8} fill="none" />
      {[[-200, 60], [-120, 30], [-30, 0], [60, -30], [150, -60], [230, -85]].map(([x, y], i) => (
        <g key={i} transform={`translate(${x},${y - 18})`}>
          {[0, 72, 144, 216, 288].map((a) => <circle key={a} cx={10 * Math.cos(a * Math.PI / 180)} cy={10 * Math.sin(a * Math.PI / 180)} r={8} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={2} />)}
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => {
        const k = (t * 0.25 + i / 4) % 1;
        return <circle key={i} cx={-200 + k * 420} cy={-40 + k * 170} r={6} fill={ROSE} opacity={0.7 * (1 - k)} />;
      })}
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const turn = ramp(t, c("Does something pass from the wood into the ash? Or does nothing"), 1.5);
  return (
    <AbsoluteFill>
      <Phase to="I am John Tan, known as Thusness">
        <At x={560} y={460} o={1}><Log flame={1 - 0.5 * turn} /></At>
        <At x={1360} y={460} o={turn}><Ash flow={0} /></At>
        <Items items={[
          ["Firewood burns, and there is ash", 960, 160, <Wd c={GOLD} s={44} serif>Firewood burns, and there is ash.</Wd>],
          ["Does something pass from the wood into the ash? Or does nothing", 960, 790, <Wd c={CHALK} s={36} serif>Does something pass across? Or nothing?</Wd>, { d: 1 }],
        ]} />
      </Phase>
      <Phase from="I am John Tan, known as Thusness" to="In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it">
        <Items items={[
          ["I am John Tan, known as Thusness", 960, 400, <Wd c={GOLD} s={52} serif>Dōgen: Firewood and Ash</Wd>, { d: 0.2 }],
          ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
          ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 8</Wd>, { d: 0.8 }],
        ]} />
      </Phase>
      <Phase from="In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it">
        <Items items={[
          ["In Part 7, the shore and the boat took away the seat outside the event, and the doer behind it", 960, 180, <Wd c={DIM} s={26}>Part 7: no seat outside · no doer behind</Wd>],
          ["A third way something could stand outside the event, and complete it, is time", 960, 290, <Wd c={CHALK} s={34} serif>a third: time</Wd>],
          ["A past that leads up to it. A future it leads into", 960, 440, <TimeLine />],
          ["A line, on which it is one small point", 960, 560, <Wd c={DIM} s={24}>a line, with the event one small point on it</Wd>],
          ["Of his four images, it is the one I find closest to the heart of total exertion", 960, 680, <K c={GOLD} s={26}>the image closest to the heart of total exertion</K>, { pop: true }],
          ["Because it shows most plainly the point Part 6 began with", 960, 770, <Wd c={CHALK} s={24}>ash is just ash, and ash is the wood and fire appearing as ash</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const FirewoodScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["First, firewood and ash", 960, 80, <Wd c={ROSE} s={44} serif>1 · Firewood and ash</Wd>]]} />
      <Phase to="The habit runs a line through time">
        <Items items={[
          ["Firewood becomes ash, and ash cannot turn back into firewood", 960, 180, <Wd c={DIM} s={24}>firewood becomes ash; ash cannot turn back</Wd>],
          ["Firewood stays in its own dharma position, as firewood", 600, 400, <Box c={WARM} w={460} title="firewood" sub="in its own position · a before and an after" />, { pop: true }],
          ["Ash stays in its own position, as ash", 1320, 400, <Box c={CHALK} w={460} title="ash" sub="in its own position" />, { pop: true }],
          ["Yet the before and after are cut off", 960, 400, <Wd c={GOLD} s={26}>| cut off |</Wd>],
          ["In the same way, life does not become death", 960, 580, <Wd c={CHALK} s={26}>life does not become death · winter does not become spring</Wd>],
          ["How is this usually read? Each moment is complete in itself", 960, 720, <Box c={DIM} w={900} title="the usual reading" sub="each moment complete · practice not a means to a later awakening" />, { pop: true }],
        ]} />
      </Phase>
      <Phase from="The habit runs a line through time" to="But here is what I most want to say">
        <At x={960} y={420} o={1 - 0.7 * ramp(t, c("loosens the line"), 0.6)}><TimeLine carry={1 - ramp(t, c("loosens the line"), 0.6)} /></At>
        <Items items={[
          ["The habit runs a line through time", 960, 250, <Wd c={DIM} s={26}>the habit: wood (cause) → ash (effect), something travelling across</Wd>],
          ["And something travels along the line, from one to the other", 960, 560, <SK at="loosens the line" d={0.5} s={24}>something carried along the line</SK>],
          ["loosens the line", 960, 650, <Wd c={CHALK} s={24}>no one standing on the line, stitching moments together</Wd>],
        ]} />
      </Phase>
      <Phase from="But here is what I most want to say" to="That is the taste of this image. Nothing carried over">
        <At x={560} y={500} o={1}><Ash flow={ramp(t, c("Both hold, in the same moment"), 1.2)} /></At>
        <Items items={[
          ["It is not half firewood", 1380, 200, <Wd c={CHALK} s={28} serif>ash is just ash, completely</Wd>],
          ["In the ash, just the ash", 1380, 260, <Wd c={DIM} s={22}>not half firewood · not waiting to become anything</Wd>],
          ["Both hold, in the same moment", 1380, 330, <K c={GOLD} s={24}>and the wood, fire, air and time appearing as ash</K>, { pop: true }],
          ["Wood is wood, and ash is ash", 1380, 400, <Wd c={TEAL} s={24}>complete, and dependently arisen</Wd>],
          ["Whatever arises in dependence on something is neither that thing, nor different from it", 1380, 480, <Wd c={GOLD} s={24} serif>neither that thing, nor different (MMK 18.10)</Wd>],
          ["Cut off from before and after. Nothing permanent travels from the wood into the ash", 1380, 560, <Box c={VIOLET} w={620} title={'"cut off from before and after"'} sub="= not permanent: nothing travels across" />, { pop: true }],
          ["With a before and an after. The ash really does come from the wood", 1380, 690, <Box c={ICE} w={620} title={'"with a before and an after"'} sub="= not cut off: the ash comes from the wood" />, { pop: true }],
          ["And firewood and ash are not labels on one continuous stuff that runs through both", 1380, 800, <SK at="They are designated, not found" s={22}>one stuff running through · little moments</SK>],
          ["They are designated, not found", 1380, 860, <Wd c={CHALK} s={22}>positions: designated, not found</Wd>],
        ]} />
      </Phase>
      <Phase from="That is the taste of this image. Nothing carried over" to="Second, being time">
        <Items items={[
          ["That is the taste of this image. Nothing carried over", 960, 380, <K c={GOLD} s={36}>taste: nothing carried over</K>, { pop: true }],
          ["That is the taste of this image. Nothing carried over", 960, 470, <Wd c={CHALK} s={26}>each moment fresh, wholly itself, and light</Wd>, { d: 1.5 }],
          ["Some readers stop at, each moment complete", 960, 600, <SK at="Complete, as its dependence" s={24}>moments as islands</SK>],
          ["Complete, as its dependence", 960, 680, <Wd c={GOLD} s={28} serif>where I part: complete, as its dependence</Wd>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const BeingTimeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[["Second, being time", 960, 80, <Wd c={GREEN} s={44} serif>2 · Being-time</Wd>]]} />
      <Phase to="The habit makes time a river, or a road">
        <Items items={[
          ["And he reads it as being time", 960, 170, <Wd c={DIM} s={24}>Uji: "for the time being" read as being-time</Wd>],
          ["Being is already time, and time is already being", 960, 240, <Wd c={CHALK} s={28} serif>being is time · time is being</Wd>],
          ["The pine is time. The bamboo is time", 960, 320, <K c={GREEN} s={24}>the pine is time · the bamboo is time</K>, { pop: true }],
          ["Do not think, he says, that time only flies away", 960, 390, <Wd c={DIM} s={22}>time does not only fly away</Wd>],
          ["that each moment is all being, the entire world", 960, 450, <Wd c={GOLD} s={24}>"each moment is all being, the entire world"</Wd>],
          ["He also speaks of time's passage", 560, 640, <Spring />],
          ["But there is nothing outside spring that passes through it", 1340, 600, <Wd c={CHALK} s={24}>nothing outside spring passes through it</Wd>],
          ["The passage of spring is just spring, passing", 1340, 670, <K c={ROSE} s={24}>spring passing, as spring</K>, { pop: true }],
          ["Time is not a container that things sit in", 1340, 770, <Wd c={DIM} s={22}>usual reading: not a container; each moment all time</Wd>],
        ]} />
      </Phase>
      <Phase from="The habit makes time a river, or a road" to="Third, birth and death">
        <At x={560} y={500} o={ramp(t, c("The passage of spring is the line I find most exact"), 0.6)}><Spring /></At>
        <Items items={[
          ["The habit makes time a river, or a road", 960, 200, <SK at="Time is not found apart from things" s={26}>time as a river, a road: the given</SK>],
          ["Time is not found apart from things", 960, 280, <Wd c={CHALK} s={24}>time not found apart from things (MMK 19.6)</Wd>],
          ["There is no carrier", 1380, 420, <K c={TEAL} s={22}>no carrier · no thread · no substance of time</K>, { pop: true }],
          ["Spring passes, as spring", 1380, 500, <Wd c={GOLD} s={28} serif>spring passes, as spring</Wd>],
          ["Passage, without anything carried, and without a line", 1380, 570, <Wd c={CHALK} s={22}>passage: nothing carried, no line</Wd>],
          ["I read each moment is all being as total exertion", 1380, 680, <Wd c={CHALK} s={22}>where I part: "all being" read as total exertion</Wd>],
          ["I do not read it as a cosmos packed inside the moment, or all of time stored in each instant", 1380, 760, <SK at="Third, birth and death" d={-1.5} s={22}>a cosmos, or all of time, stored in the instant</SK>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const BirthScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[["Third, birth and death", 960, 80, <Wd c={ROSE} s={44} serif>3 · Birth and death</Wd>]]} />
    <Phase to="This is where firewood and ash stop being a teaching about wood">
      <Items items={[
        ["just understand that birth and death is itself nirvana", 960, 200, <Wd c={CHALK} s={28} serif>birth and death is itself nirvana</Wd>],
        ["And nothing to seek as nirvana", 960, 270, <Wd c={DIM} s={22}>nothing to escape · nothing to seek</Wd>],
        ["It is a mistake, he says, to think that birth turns into death", 960, 360, <SK at="When birth comes, there is just birth. When death comes, there is just death" d={1} s={24}>birth turns into death</SK>],
        ["When birth comes, there is just birth. When death comes, there is just death", 600, 490, <Box c={GREEN} w={460} title="birth" sub="just birth" />, { pop: true }],
        ["When birth comes, there is just birth. When death comes, there is just death", 1320, 490, <Box c={VIOLET} w={460} title="death" sub="just death" />, { pop: true, d: 2 }],
        ["is the life of the Buddha", 960, 620, <Wd c={GOLD} s={24}>"this birth and death is the life of the Buddha"</Wd>],
        ["Freedom is not an escape from birth and death into some other realm", 960, 720, <Wd c={DIM} s={22}>usual reading: meet each fully, no escape to another realm</Wd>],
        ["is often heard as one great life, present in all lives", 960, 790, <Wd c={DIM} s={22}>"the life of the Buddha" often heard as one great life</Wd>],
      ]} />
    </Phase>
    <Phase from="This is where firewood and ash stop being a teaching about wood">
      <Items items={[
        ["When life is present, it is completely alive", 960, 220, <Wd c={CHALK} s={30} serif>life: completely alive, not a prelude</Wd>],
        ["Nothing migrates across a line from one to the other", 960, 300, <Wd c={DIM} s={24}>nothing migrates across a line</Wd>],
        ["Life is the total working of life. Death is the total working of death", 960, 380, <K c={GOLD} s={26}>life: total working of life · death: of death</K>, { pop: true }],
        ["neither is sealed off", 960, 470, <Wd c={TEAL} s={24}>each complete as its conditions: neither sealed off</Wd>],
        ["There is nothing to escape, because there is no line to escape along", 960, 550, <Wd c={CHALK} s={24}>no line to escape along, no one standing on it</Wd>],
        ["I do not take the life of the Buddha as one great life behind all lives", 960, 680, <SK at="And nothing stands behind them" d={0.5} s={24}>one great life behind all lives</SK>],
        ["And nothing stands behind them", 960, 760, <Wd c={GOLD} s={26} serif>where I part: nothing stands behind them</Wd>],
      ]} />
    </Phase>
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. Is ash met as half finished firewood", 400, 270, <Box c={ICE} w={500} title="Experience" sub="this, wholly itself · no thread of time met" />, { pop: true }],
      ["By logic. If the ash were the same as the wood, nothing would have burned", 960, 270, <Box c={VIOLET} w={500} title="Logic" sub="same: nothing burned · other: no fire needed" />, { pop: true }],
      ["Neither the same, nor different. Neither permanent, nor cut off", 960, 410, <Wd c={CHALK} s={22}>neither same nor different · neither permanent nor cut off</Wd>],
      ["By working. Nothing works the less for this", 1520, 270, <Box c={TEAL} w={500} title="Working" sub="fire burns, ash feeds the field" />, { pop: true }],
      ["Memory, plans and promises work, each in its own moment", 1520, 410, <Wd c={CHALK} s={22}>memory, plans, promises: each in its moment</Wd>],
      ["It is the default, carried by habit, and by the words becomes, and turns into", 960, 540, <Wd c={CHALK} s={28} serif>a line of time with something carried: the default</Wd>],
      ["The wood burns to ash. Winter gives way to spring", 960, 650, <K c={GREEN} s={24}>the wood burns to ash · winter gives way to spring</K>, { pop: true }],
      ["What fails is only a time, a wood, or a self, standing on its own, and travelling across", 960, 740, <Wd c={DIM} s={22}>what fails: a time, a wood or a self standing on its own, travelling across</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("The fish that never reaches the end of the water, and never needs to");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["This is Section 2, Part 8 of the Dependent Arising series", 960, 200, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 8</Wd>],
        ["In Part 9, I take", 960, 300, <Wd c={DIM} s={26}>next, Part 9: Dōgen: The Fish and the Bird</Wd>],
        ["The fish that never reaches the end of the water, and never needs to", 960, 480, <Box c={ICE} w={760} title="the fish and the bird" sub="never reaching the end of the water, never needing to" />, { pop: true }],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Firewood burns, and there is ash", "ember", <OpenScene />],
    ["First, firewood and ash", "dusk", <FirewoodScene />],
    ["Second, being time", "pine", <BeingTimeScene />],
    ["Third, birth and death", "life", <BirthScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["This is Section 2, Part 8 of the Dependent Arising series", "night", <CloseScene />],
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
