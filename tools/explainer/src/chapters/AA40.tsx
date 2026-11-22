// After Anatta · Questions: Nothing Turns Into Light: Luminous Clarity and the Rainbow Body (AA40).
// (EBooks docs/notes/2026-11-22-luminous-clarity-and-rainbow-body.md, public parts only; owner's own voice.)
// Arc: a passing sound, clear as it comes -> the old story of the shrinking body (a report) -> clarity: the knowing
// clarity of appearing, not bright, never missing, six lamps -> the error: sameness lifted out, the lamp's disguises,
// the lamp under the basket -> I AM: clarity plus an added "I" -> my path, anatta frees only what it relinquished,
// still in oscillation -> one fact seen twice, spontaneous presence -> the basis, the five lights not a stuff -> the
// apple and the knot -> an actualized realization, three states, exhaustion -> where I part: not the winds -> the
// corpse a report, the butter bag -> back to the sound.
// Stance: light, awareness, a witness, a ground are never drawn as a layer underneath; they appear only to be struck.
// The shrinking body is drawn only as a report. Cue phrases avoid the respelled names (Dzogchen, Gelug, Longchenpa,
// Nāgārjuna, anatta) and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled or hyphenated words inside.
export const PHRASES = [
  // the sound
  "Listen for a moment", "A car passes", "A bird", "The hum of a fan", "Each sound is clear", "It was clear as it came",
  // the old story
  "Now the old stories", "Over a week the body grows smaller", "Rainbows are seen over the roof", "only hair and nails are left",
  // the link
  "What could the clearness of a passing sound", "In this video I want to show you that link", "This is After Anatta",
  "And the rainbow body", "What I see is simple to say and hard to see",
  "The rainbow body is luminous clarity, recognised all the way through form", "And nothing turns into light",
  // clarity
  "Let me start with clarity", "When I say luminosity, I mean one thing", "It is the knowing clarity of appearing itself",
  "It is not a light shining on things from behind", "It is not a knower standing apart to see them",
  "And it is as empty as everything else",
  "Luminous does not mean bright", "A dull ache is clear as dull", "Darkness is seen, vividly, as dark",
  "A grey wall is as vivid as a sunset", "Vivid means nothing in between",
  // never missing, six lamps
  "And clarity is never missing", "The only question is whether the clarity is lifted out", "has a verse about a lamp",
  "no darkness to remove", "No appearing ever waited in the dark", "There is not even one clarity", "There are six",
  "Six lamps, not one", "And no lamp that lights itself",
  // what goes wrong
  "So what goes wrong", "It notices the sameness", "Then it lifts that sameness out and calls it awareness",
  "A background", "A witness", "A mirror", "A ground", "The clearness was real", "Making it a thing is the error",
  "That error has many disguises", "A lamp that is always on", "A lamp left burning through deep sleep",
  "A lamp behind glass, watching", "Or a lamp put out", "Each one keeps a light somewhere",
  "And there is a deeper version still", "like a lamp under a basket", "Subtle means fewer conditions",
  "What they add is the knot of grasping, not a cover",
  // I AM
  "There is a name for this clearness", "I AM names luminous clarity itself", "It is real",
  "is the sense of I added to it", "The clarity is not the error", "The I is",
  // the path
  "That is how it went for me", "It was my awareness", "Then I made it a Witness", "Then a Source", "Then a Mirror",
  "Then a seamless field of luminous presence", "For many years I believed this was the destination",
  "Does Presence itself exist from its own side",
  "Around nineteen", "No seer behind seeing", "It was a genuine realization",
  "But each deconstruction frees only what it has relinquished", "and that much was freed", "The world was not yet",
  "Space still sat like a container", "Time still ran like a conveyor belt",
  "And awareness could still quietly become a subtle ground", "That habit has to be seen through in each place it works",
  "What sees it through is emptiness", "and of the clarity itself", "That is twofold emptiness",
  "I should be honest about where I am", "gave a taste that keeps bringing me forward", "But it is not a finished state",
  "Even now it is still in oscillation",
  // one fact
  "And here the two halves meet", "They are one fact, seen twice",
  "The red is vivid exactly because it depends on light, eye and skin", "Each is the other's way of being said",
  "has a word for this side of it", "Spontaneous presence", "is dependent arising with no producer",
  "Neither description is higher", "Each guards the other", "There is one guard I keep close",
  "presence turns into a new ground", "the world turns thin and void", "Both halves, always",
  // the basis
  "Now the body", "speaks of the basis in three aspects", "Its essence is empty", "Its nature is clear",
  "And its display never stops", "The basis is empty of being a ground", "The display first shows as sound, light and rays",
  "it is taken as something other", "the five lights harden into the five elements",
  "So the ordinary body is light not recognised", "The rainbow body is said to be the same process run the other way",
  "But listen to that carefully", "a shining stuff underneath", "it is a substrate again", "I read it another way",
  "The five lights are not a stuff", "They name the clarity of appearing",
  "Condensing into the elements names how appearing is taken", "The trouble was never the clarity", "It was the grasping",
  // the apple
  "Hold an apple", "The hardness", "The coolness", "The red", "The sweetness", "Each arises only as its conditions meet",
  "Then a habit ties them together", "That habit is the knot", "One movement, described twice",
  "Untie the knot, and nothing is lost", "I say, just this, vivid and light",
  "And the body is held the way the apple is held", "that knot untied all the way through, the body included",
  // realization
  "So, in essence, it is a realization", "In two thousand thirteen", "does not mean that your body disappears",
  "maybe actualization of realization would be better", "In essence it is an actualized state",
  "I also said what it rests on", "Waking", "Dreaming", "Deep sleep", "Not by the intensity of a",
  "It is the view, realised, and carried through day and night",
  "calls the last of its four visions the exhaustion of phenomena", "What is exhausted", "Not appearing",
  "What is used up is appearing held as things", "In twenty twenty I put it this way", "No seer", "No seeing",
  "Nothing seen", "And appearing goes on",
  // where I part
  "Then how does one get there", "Here I part from the traditions", "gives the appearing side a practice of its own",
  "school works through the winds and the subtle body", "Taoist inner alchemy refines energy into a body of spirit",
  "The method is shared widely", "The view is not", "For me, what frees is seeing through the inherent framework",
  "Not where the winds go", "Seeing that what seems so solid", "It is just as hard to break through",
  "The body is not left out", "opened by themselves, without effort", "I was not forcing the breath",
  "Energy practices can help loosen what the body holds", "But luminous clarity was never a product of the winds",
  // the corpse, the goal
  "And the shrinking corpse", "It does not show what others will see at a funeral", "is reported, not proved",
  "Many great masters left ordinary bodies", "Insight is measured by the freedom of the mind",
  "And it is not a goal", "Tibetans speak of a leather butter bag", "it stays soft", "it goes hard",
  "Knowledge of the lights that is never tested hardens the same way",
  // the end
  "So I come back to the sound", "No lamp behind it", "No one holding it", "Found nowhere, and never missing",
  "If nothing is found, what turns into light", "Nothing found turns into light",
  "The body appeared solid because it was held", "Luminous clarity, recognised all the way through",
  "That is the rainbow body",
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
const LIGHTS = [GOLD, ICE, WARM, TEAL, VIOLET];

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
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
/** A chip struck through at `strikeAt`: only for what is never found or does not hold. */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string; sub2?: string; dashed?: boolean; ts?: number }> =
  ({ c, w = 460, title, sub, sub2, dashed, ts = 36 }) => (
    <div style={{ width: w, padding: "20px 18px", borderRadius: 18, border: `3px ${dashed ? "dashed" : "solid"} ${c}`, background: "rgba(10,12,30,0.72)",
      boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
      <Wd c={c} s={ts} serif>{title}</Wd>
      {sub ? <div style={{ marginTop: 10 }}><Wd c={CHALK} s={24}>{sub}</Wd></div> : null}
      {sub2 ? <div style={{ marginTop: 4 }}><Wd c={CHALK} s={24}>{sub2}</Wd></div> : null}
    </div>
  );
/** A scene title at the top, held until `until`. */
const Title: React.FC<{ text: string; c?: string; until?: string; at?: number }> = ({ text, c = CHALK, until, at = 0.2 }) => {
  const { t } = useT();
  const cue = useCue();
  const out = until ? 1 - ramp(t, cue(until), 0.4) : 1;
  return <At x={960} y={100} o={ramp(t, at, 0.6) * out}><Wd c={c} s={44} serif>{text}</Wd></At>;
};
/** Rings spreading from a point: a sound, clear as it comes. */
const SoundRings: React.FC<{ at: number; color: string; n?: number }> = ({ at, color, n = 3 }) => {
  const { t } = useT();
  return (
    <svg width={360} height={360} viewBox="-180 -180 360 360" style={{ overflow: "visible" }}>
      {Array.from({ length: n }).map((_, i) => {
        const p = Math.max(0, Math.min(1, ((t - at - i * 0.35) % 2.4) / 2.4));
        const on = t > at + i * 0.35 ? 1 : 0;
        return <circle key={i} r={20 + p * 150} fill="none" stroke={color} strokeWidth={4} opacity={on * (1 - p)}
          style={{ filter: `drop-shadow(0 0 8px ${color})` }} />;
      })}
      <circle r={12} fill={color} opacity={t > at ? 1 : 0} style={{ filter: `drop-shadow(0 0 12px ${color})` }} />
    </svg>
  );
};
/** A lamp: a flame on a small dish. */
const Lamp: React.FC<{ c?: string; flame?: number; size?: number }> = ({ c = GOLD, flame = 1, size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" style={{ overflow: "visible" }}>
    <path d="M20 96 C40 124 100 124 120 96 Z" fill="rgba(228,194,122,0.25)" stroke={c} strokeWidth={4} />
    <path d="M70 92 C52 70 62 46 70 26 C78 46 88 70 70 92 Z" fill={c} opacity={0.75 * flame}
      style={{ filter: `drop-shadow(0 0 ${14 * flame}px ${c})` }} />
  </svg>
);
const Apple: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible" }}>
    <path d="M100 58 C70 30 22 44 24 98 C26 150 62 186 100 172 C138 186 174 150 176 98 C178 44 130 30 100 58 Z"
      fill="rgba(226,70,70,0.55)" stroke="#FF6B6B" strokeWidth={5} style={{ filter: "drop-shadow(0 0 14px #FF6B6B)" }} />
    <path d="M100 58 C100 44 104 30 112 20" stroke="#B08850" strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M108 34 C124 18 146 20 154 28 C140 40 122 42 108 34 Z" fill="rgba(143,212,154,0.5)" stroke={GREEN} strokeWidth={3} />
  </svg>
);
const Figure: React.FC<{ color?: string; p?: number }> = ({ color = CHALK, p = 1 }) => (
  <svg width={260} height={300} viewBox="0 0 260 300" style={{ overflow: "visible" }}>
    <DrawPath d="M130 30 a34 34 0 1 1 -0.1 0 Z" p={p} color={color} width={5} len={240} />
    <DrawPath d="M130 98 C88 104 76 150 82 200 M130 98 C172 104 184 150 178 200" p={p} color={color} width={5} len={400} />
    <DrawPath d="M40 250 C70 214 110 210 130 214 C150 210 190 214 220 250 C180 262 80 262 40 250 Z" p={p} color={color} width={5} len={700} />
  </svg>
);
const Arcs: React.FC<{ p: number; w?: number }> = ({ p, w = 520 }) => (
  <svg width={w} height={w / 2} viewBox="0 0 520 260" style={{ overflow: "visible" }}>
    {LIGHTS.map((col, i) => (
      <DrawPath key={i} d={`M${40 + i * 22} 250 A${220 - i * 22} ${220 - i * 22} 0 0 1 ${480 - i * 22} 250`} p={p} color={col} width={7} len={760} glow />
    ))}
  </svg>
);
const House: React.FC<{ p: number }> = ({ p }) => (
  <svg width={520} height={380} viewBox="0 0 520 380" style={{ overflow: "visible" }}>
    <DrawPath d="M40 160 L260 30 L480 160" p={p} color={CHALK} width={5} len={520} />
    <DrawPath d="M80 150 L80 360 L440 360 L440 150" p={p} color={CHALK} width={5} len={780} />
  </svg>
);
/** Five small lights in a row. */
const FiveLights: React.FC<{ o?: number; r?: number }> = ({ o = 1, r = 26 }) => (
  <svg width={560} height={120} viewBox="0 0 560 120" style={{ overflow: "visible" }}>
    {LIGHTS.map((col, i) => <circle key={i} cx={60 + i * 110} cy={60} r={r} fill={`${col}33`} stroke={col} strokeWidth={4} opacity={o}
      style={{ filter: `drop-shadow(0 0 10px ${col})` }} />)}
  </svg>
);
/** A knot of lines, tied (p=0) or untied (p=1). */
const Knot: React.FC<{ untie: number; c?: string }> = ({ untie, c = WARM }) => (
  <svg width={420} height={220} viewBox="0 0 420 220" style={{ overflow: "visible" }}>
    {[0, 1, 2, 3].map((i) => {
      const y0 = 40 + i * 46;
      const pull = 1 - untie;
      return <path key={i} d={`M20 ${y0} C140 ${y0 + (110 - y0) * pull} 280 ${y0 + (110 - y0) * pull} 400 ${y0}`} fill="none"
        stroke={LIGHTS[i]} strokeWidth={5} opacity={0.9} style={{ filter: `drop-shadow(0 0 6px ${LIGHTS[i]})` }} />;
    })}
    <circle cx={210} cy={110} r={34 * (1 - untie)} fill="none" stroke={c} strokeWidth={6} opacity={1 - untie} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const SoundScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="listen" c={DIM} />
      <At x={480} y={430}><SoundRings at={c("A car passes")} color={ICE} /></At>
      <At x={960} y={360}><SoundRings at={c("A bird")} color={GOLD} /></At>
      <At x={1440} y={430}><SoundRings at={c("The hum of a fan")} color={TEAL} /></At>
      <Items items={[
        ["A car passes", 480, 650, <Wd c={ICE} s={30}>a car</Wd>],
        ["A bird", 960, 580, <Wd c={GOLD} s={30}>a bird</Wd>],
        ["The hum of a fan", 1440, 650, <Wd c={TEAL} s={30}>a fan</Wd>],
        ["Each sound is clear", 960, 760, <Wd c={CHALK} s={40} serif>each one clear, as it comes</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const StoryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const shrink = ramp(t, c("Over a week the body grows smaller"), 3.2);
  const arcs = ramp(t, c("Rainbows are seen over the roof"), 2);
  const link = c("What could the clearness of a passing sound");
  const pre = 1 - ramp(t, link, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={500} o={ramp(t, 0.2, 0.8) * pre}><House p={ramp(t, 0.2, 2)} /></At>
      <At x={960} y={560} s={1 - 0.62 * shrink} o={(1 - 0.75 * ramp(t, c("only hair and nails are left"), 1)) * ramp(t, 0.6, 0.8) * pre}><Figure p={ramp(t, 0.6, 1.6)} color={DIM} /></At>
      <At x={960} y={250} o={arcs * pre}><Arcs p={arcs} /></At>
      <Items items={[
        ["Now the old stories", 960, 100, <Wd c={DIM} s={30}>an old story from Tibet · a report</Wd>, { until: "What could the clearness of a passing sound" }],
        ["only hair and nails are left", 960, 800, <Wd c={CHALK} s={32} serif>only hair and nails, it is said</Wd>, { until: "What could the clearness of a passing sound" }],
        ["What could the clearness of a passing sound", 560, 330, <SoundRings at={link} color={ICE} />],
        ["What could the clearness of a passing sound", 1360, 330, <Arcs p={1} w={420} />, { d: 1 }],
        ["In this video I want to show you that link", 960, 330, <Wd c={GOLD} s={60}>⟷</Wd>],
        ["This is After Anatta", 960, 110, <Wd c={DIM} s={30}>After Anatta</Wd>],
        ["What could the clearness of a passing sound", 960, 560, <Wd c={CHALK} s={40} serif>non-dual luminous clarity · the rainbow body</Wd>, { d: 2 }],
        ["The rainbow body is luminous clarity, recognised all the way through form", 960, 670, <K c={GOLD} s={30}>luminous clarity, recognised all the way through form</K>],
        ["And nothing turns into light", 960, 780, <Wd c={TEAL} s={42} serif>nothing turns into light</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ClarityScene: React.FC = () => {
  const c = useCue();
  const second = "Luminous does not mean bright";
  return (
    <AbsoluteFill>
      <Title text="what luminosity means" c={GOLD} until={second} />
      <Items items={[
        ["It is the knowing clarity of appearing itself", 960, 250, <Box c={GOLD} w={900} title="the knowing clarity of appearing itself" sub="a sound, heard as sound" ts={40} />, { until: second }],
        ["It is not a light shining on things from behind", 600, 470, <SK strikeAt={c("It is not a light shining on things from behind", -1.2)}>a light from behind</SK>, { until: second }],
        ["It is not a knower standing apart to see them", 1320, 470, <SK strikeAt={c("It is not a knower standing apart to see them", -1.4)}>a knower apart</SK>, { until: second }],
        ["And it is as empty as everything else", 960, 640, <K c={TEAL} s={32}>as empty as everything else</K>, { until: second }],
        [second, 960, 110, <Wd c={CHALK} s={44} serif>luminous does not mean bright</Wd>],
        ["A dull ache is clear as dull", 480, 330, <K c={DIM} s={30}>a dull ache · clear as dull</K>],
        ["Darkness is seen, vividly, as dark", 1440, 330, <K c={VIOLET} s={30}>darkness · seen as dark</K>],
        ["A grey wall is as vivid as a sunset", 960, 470, <K c={WARM} s={30}>a grey wall, as vivid as a sunset</K>],
        ["Vivid means nothing in between", 960, 640, <Wd c={GOLD} s={42} serif>vivid: nothing in between</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const LampsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const six = c("There is not even one clarity");
  const pre = 1 - ramp(t, six, 0.4);
  const names = ["seeing", "hearing", "touching", "tasting", "smelling", "thinking"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["And clarity is never missing", 960, 110, <Wd c={GOLD} s={44} serif>clarity is never missing</Wd>, { until: "There is not even one clarity" }],
        ["The only question is whether the clarity is lifted out", 960, 240, <K c={CHALK} s={28}>the only question: is it lifted out, made a thing?</K>, { until: "There is not even one clarity" }],
        ["has a verse about a lamp", 960, 430, <Lamp size={170} />, { until: "There is not even one clarity" }],
        ["no darkness to remove", 960, 600, <Wd c={CHALK} s={32}>in a lamp, no darkness to remove</Wd>, { until: "There is not even one clarity" }],
        ["No appearing ever waited in the dark", 960, 720, <Wd c={TEAL} s={38} serif>no appearing ever waited in the dark</Wd>, { until: "There is not even one clarity" }],
        ["There are six", 960, 110, <Wd c={CHALK} s={44} serif>six clarities, not one</Wd>],
      ]} />
      {names.map((n, i) => {
        const a = c("There are six") + i * 0.35;
        return (
          <At key={n} x={260 + i * 280} y={420} o={ramp(t, a, 0.5) * (1 - pre)}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              <Lamp c={LIGHTS[i % 5]} size={120} /><Wd c={LIGHTS[i % 5]} s={28}>{n}</Wd>
            </div>
          </At>
        );
      })}
      <Items items={[
        ["Six lamps, not one", 960, 650, <Wd c={GOLD} s={40} serif>six lamps, not one</Wd>],
        ["And no lamp that lights itself", 960, 760, <SK c={DIM} s={28} strikeAt={c("And no lamp that lights itself", -1)}>a lamp that lights itself</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const ErrorScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const dis = "That error has many disguises";
  const lift = ramp(t, c("Then it lifts that sameness out and calls it awareness"), 1.2);
  const pre = 1 - ramp(t, c(dis), 0.4);
  return (
    <AbsoluteFill>
      <Title text="so what goes wrong?" until={dis} />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <At key={i} x={360 + i * 240} y={560} o={ramp(t, c("It notices the sameness"), 0.5) * pre}><Lamp c={LIGHTS[i % 5]} size={90} /></At>
      ))}
      <At x={960} y={560 - 260 * lift} o={lift * pre}><K c={GOLD} s={34}>“awareness”</K></At>
      <Items items={[
        ["It notices the sameness", 960, 690, <Wd c={DIM} s={28}>every appearing is clear · the sameness noticed</Wd>, { until: dis }],
        ["A background", 420, 190, <SK strikeAt={c("The clearness was real")}>a background</SK>, { until: dis }],
        ["A witness", 760, 190, <SK strikeAt={c("The clearness was real", 0.1)}>a witness</SK>, { until: dis }],
        ["A mirror", 1160, 190, <SK strikeAt={c("The clearness was real", -0.1)}>a mirror</SK>, { until: dis }],
        ["A ground", 1500, 190, <SK strikeAt={c("The clearness was real", -0.2)}>a ground</SK>, { until: dis }],
        ["Making it a thing is the error", 960, 790, <Wd c={WARM} s={36} serif>the clearness was real · making it a thing is the error</Wd>, { until: dis }],
        [dis, 960, 100, <Wd c={WARM} s={44} serif>the lamp, in disguise</Wd>],
        ["A lamp that is always on", 480, 300, <K c={CHALK} s={28}>always on, behind everything</K>, { until: "And there is a deeper version still" }],
        ["A lamp left burning through deep sleep", 1440, 300, <K c={CHALK} s={28}>left burning through deep sleep</K>, { until: "And there is a deeper version still" }],
        ["A lamp behind glass, watching", 480, 450, <K c={CHALK} s={28}>behind glass, watching</K>, { until: "And there is a deeper version still" }],
        ["Or a lamp put out", 1440, 450, <K c={CHALK} s={28}>put out: emptiness as darkness</K>, { until: "And there is a deeper version still" }],
        ["Each one keeps a light somewhere", 960, 620, <Wd c={WARM} s={34} serif>each keeps a light somewhere, on its own</Wd>, { until: "And there is a deeper version still" }],
        ["like a lamp under a basket", 960, 380, <div style={{ position: "relative" }}><Lamp size={150} flame={0.4} /></div>],
        ["like a lamp under a basket", 960, 330, <svg width={260} height={160} viewBox="0 0 260 160"><path d="M20 150 L60 20 L200 20 L240 150 Z" fill="rgba(90,70,40,0.6)" stroke={WARM} strokeWidth={4} /></svg>, { d: 0.6, until: "Subtle means fewer conditions" }],
        ["Subtle means fewer conditions", 960, 600, <K c={TEAL} s={30}>subtle = fewer conditions, not a deeper stuff</K>],
        ["What they add is the knot of grasping, not a cover", 960, 720, <Wd c={CHALK} s={32}>what the coarse minds add is the knot, not a cover</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const IAmScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="I AM" c={GOLD} />
      <Items items={[
        ["I AM names luminous clarity itself", 960, 280, <Box c={GOLD} w={760} title="luminous clarity itself" sub="realised directly · real" ts={42} />],
        ["is the sense of I added to it", 960, 500, <K c={WARM} s={34}>+ “I”  →  a witness, an observer, a background</K>],
        ["The clarity is not the error", 620, 680, <K c={TEAL} s={32}>the clarity: not the error</K>],
        ["The I is", 1300, 680, <SK c={WARM} s={32} strikeAt={c("The I is", -0.6)}>the added “I”</SK>],
      ]} />
    </AbsoluteFill>
  );
};

const PathScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const anatta = "Around nineteen";
  const pre = 1 - ramp(t, c(anatta), 0.4);
  const steps: [string, string, string][] = [
    ["It was my awareness", "my awareness", DIM], ["Then I made it a Witness", "a Witness", CHALK], ["Then a Source", "a Source", CHALK],
    ["Then a Mirror", "a Mirror", CHALK], ["Then a seamless field of luminous presence", "a seamless field", GOLD],
  ];
  return (
    <AbsoluteFill>
      <Title text="how it went for me" until={anatta} />
      {steps.map(([cue, label, col], i) => (
        <At key={i} x={260 + i * 350} y={360} o={ramp(t, c(cue), 0.5) * pre}><K c={col} s={28}>{label}</K></At>
      ))}
      <Items items={[
        ["Then a seamless field of luminous presence", 1660, 450, <Wd c={DIM} s={24}>still real on its own side</Wd>, { d: 1.5, until: anatta }],
        ["For many years I believed this was the destination", 960, 580, <Wd c={CHALK} s={32}>for years, I took it as the destination</Wd>, { until: anatta }],
        ["Does Presence itself exist from its own side", 960, 720, <Wd c={GOLD} s={40} serif>does Presence itself exist from its own side?</Wd>, { until: anatta }],
        [anatta, 960, 100, <Wd c={TEAL} s={44} serif>around 1997 · anatta</Wd>],
        ["No seer behind seeing", 960, 220, <K c={TEAL} s={30}>no seer behind seeing · just the seen</K>],
        ["But each deconstruction frees only what it has relinquished", 960, 340, <Wd c={GOLD} s={36} serif>each deconstruction frees only what it has relinquished</Wd>],
        ["and that much was freed", 600, 460, <K c={TEAL} s={28}>the self, the Self: freed</K>],
        ["The world was not yet", 1320, 460, <K c={WARM} s={28}>the world: not yet</K>],
        ["Space still sat like a container", 440, 600, <K c={DIM} s={26}>space, a container</K>],
        ["Time still ran like a conveyor belt", 960, 600, <K c={DIM} s={26}>time, a conveyor belt</K>],
        ["And awareness could still quietly become a subtle ground", 1480, 600, <K c={DIM} s={26}>awareness, a subtle ground</K>],
        ["That habit has to be seen through in each place it works", 960, 740, <Wd c={CHALK} s={30}>seen through in each place: space, time, cause, death, the world</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const TwofoldScene: React.FC = () => {
  const c = useCue();
  return (
    <AbsoluteFill>
      <Title text="what sees it through: emptiness" c={TEAL} />
      <Items items={[
        ["What sees it through is emptiness", 520, 260, <K c={TEAL} s={30}>of the self</K>],
        ["What sees it through is emptiness", 960, 260, <K c={TEAL} s={30}>of all that appears</K>, { d: 1.5 }],
        ["and of the clarity itself", 1400, 260, <K c={GOLD} s={30}>of the clarity itself</K>],
        ["That is twofold emptiness", 960, 390, <Wd c={TEAL} s={40} serif>twofold emptiness</Wd>],
        ["I should be honest about where I am", 960, 520, <Wd c={CHALK} s={32}>where I am</Wd>],
        ["gave a taste that keeps bringing me forward", 960, 610, <K c={GOLD} s={28}>anatta, total exertion: a taste that brings me forward</K>],
        ["But it is not a finished state", 700, 730, <SK c={DIM} s={28} strikeAt={c("Even now it is still in oscillation")}>a finished state</SK>],
        ["Even now it is still in oscillation", 1260, 730, <K c={WARM} s={28}>even now, in oscillation</K>],
      ]} />
    </AbsoluteFill>
  );
};

const OneFactScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sp = "has a word for this side of it";
  return (
    <AbsoluteFill>
      <Title text="one fact, seen twice" c={GOLD} until={sp} />
      <At x={960} y={360} o={ramp(t, c("They are one fact, seen twice"), 0.6) * (1 - ramp(t, c(sp), 0.4))}><Apple size={200} /></At>
      <Items items={[
        ["They are one fact, seen twice", 540, 360, <K c={GOLD} s={32}>vivid</K>, { until: sp }],
        ["They are one fact, seen twice", 1380, 360, <K c={TEAL} s={32}>not found</K>, { until: sp }],
        ["The red is vivid exactly because it depends on light, eye and skin", 960, 580, <Wd c={CHALK} s={30}>vivid because it depends: light, eye, skin</Wd>, { until: sp }],
        ["Each is the other's way of being said", 960, 700, <Wd c={GOLD} s={36} serif>each is the other's way of being said</Wd>, { until: sp }],
        ["Spontaneous presence", 960, 100, <Wd c={GOLD} s={44} serif>spontaneous presence</Wd>],
        ["is dependent arising with no producer", 960, 230, <K c={TEAL} s={30}>dependent arising with no producer</K>],
        ["Neither description is higher", 960, 340, <Wd c={CHALK} s={30}>two descriptions · neither higher · each guards the other</Wd>],
        ["presence turns into a new ground", 560, 500, <Box c={WARM} w={600} title="only vivid" sub="presence becomes a new ground" ts={34} dashed />],
        ["the world turns thin and void", 1360, 500, <Box c={VIOLET} w={600} title="only unfound" sub="the world turns thin and void" ts={34} dashed />],
        ["Both halves, always", 960, 720, <Wd c={GOLD} s={42} serif>both halves, always</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const BasisScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const careful = "But listen to that carefully";
  const pre = 1 - ramp(t, c(careful), 0.4);
  const harden = ramp(t, c("the five lights harden into the five elements"), 1.5);
  return (
    <AbsoluteFill>
      <Title text="now the body" until={careful} />
      <Items items={[
        ["speaks of the basis in three aspects", 960, 190, <Wd c={GOLD} s={34} serif>the basis, in three aspects (as the tradition gives it)</Wd>, { until: careful }],
        ["Its essence is empty", 480, 290, <K c={TEAL} s={28}>essence · empty</K>, { until: careful }],
        ["Its nature is clear", 960, 290, <K c={GOLD} s={28}>nature · clear</K>, { until: careful }],
        ["And its display never stops", 1440, 290, <K c={VIOLET} s={28}>display · unceasing</K>, { until: careful }],
        ["The basis is empty of being a ground", 960, 390, <SK c={DIM} s={28} strikeAt={c("The basis is empty of being a ground", -0.4)}>a ground things come from or rest on</SK>, { until: careful }],
        ["The display first shows as sound, light and rays", 960, 500, <FiveLights />, { until: careful }],
        ["it is taken as something other", 960, 600, <Wd c={DIM} s={28}>not recognised · taken as other, over there</Wd>, { until: careful }],
        ["So the ordinary body is light not recognised", 960, 790, <Wd c={CHALK} s={36} serif>the ordinary body: light not recognised</Wd>, { until: careful }],
        ["The rainbow body is said to be the same process run the other way", 960, 120, <Wd c={DIM} s={26}>the rainbow body: the same, run the other way (it is said)</Wd>, { until: careful }],
      ]} />
      <At x={960} y={690} o={harden * pre}>
        <div style={{ display: "flex", gap: 22 }}>{["earth", "water", "fire", "wind", "space"].map((e, i) => <K key={e} c={LIGHTS[i]} s={24}>{e}</K>)}</div>
      </At>
      <Items items={[
        [careful, 960, 100, <Wd c={WARM} s={44} serif>careful</Wd>],
        ["a shining stuff underneath", 700, 280, <SK c={DIM} s={30} strikeAt={c("I read it another way")}>a shining stuff underneath</SK>],
        ["it is a substrate again", 1260, 280, <SK c={DIM} s={30} strikeAt={c("I read it another way", 0.2)}>frozen light, melting back</SK>],
        ["The five lights are not a stuff", 960, 430, <FiveLights r={22} />],
        ["They name the clarity of appearing", 960, 540, <K c={GOLD} s={30}>the clarity of appearing, in five qualities · empty</K>],
        ["Condensing into the elements names how appearing is taken", 960, 650, <Wd c={CHALK} s={30}>“condensing” names how appearing is taken, not a stuff turning solid</Wd>],
        ["It was the grasping", 960, 770, <Wd c={TEAL} s={38} serif>never the clarity · the grasping</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const AppleScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const untie = ramp(t, c("Untie the knot, and nothing is lost"), 2);
  return (
    <AbsoluteFill>
      <Title text="hold an apple" c={ROSE} />
      <At x={960} y={330} o={ramp(t, 0.3, 0.6) * (1 - 0.6 * ramp(t, c("And the body is held the way the apple is held"), 0.6))}><Apple size={200} /></At>
      <Items items={[
        ["The hardness", 520, 240, <K c={CHALK} s={28}>hardness</K>],
        ["The coolness", 520, 420, <K c={ICE} s={28}>coolness</K>],
        ["The red", 1400, 240, <K c={ROSE} s={28}>red</K>],
        ["The sweetness", 1400, 420, <K c={GOLD} s={28}>sweetness</K>],
        ["Each arises only as its conditions meet", 960, 520, <Wd c={DIM} s={28}>each only as its conditions meet · none stored in the apple</Wd>, { until: "Then a habit ties them together" }],
        ["Then a habit ties them together", 960, 560, <Knot untie={untie} />],
        ["That habit is the knot", 960, 700, <Wd c={WARM} s={34} serif>the knot · one movement, described twice</Wd>, { until: "Untie the knot, and nothing is lost" }],
        ["I say, just this, vivid and light", 960, 720, <Wd c={GOLD} s={38} serif>just this, vivid and light</Wd>, { until: "And the body is held the way the apple is held" }],
        ["And the body is held the way the apple is held", 960, 720, <K c={CHALK} s={28}>the body, held the same way: hardness, warmth, weight, “mine”</K>],
        ["that knot untied all the way through, the body included", 960, 800, <Wd c={TEAL} s={32} serif>the rainbow body: that knot untied, the body included</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const RealizationScene: React.FC = () => {
  const c = useCue();
  const ex = "calls the last of its four visions the exhaustion of phenomena";
  return (
    <AbsoluteFill>
      <Items items={[
        ["So, in essence, it is a realization", 960, 100, <Wd c={GOLD} s={44} serif>in essence, a realization</Wd>, { until: ex }],
        ["In two thousand thirteen", 960, 220, <Wd c={DIM} s={28}>2013</Wd>, { until: ex }],
        ["does not mean that your body disappears", 960, 300, <K c={CHALK} s={28}>“does not mean that your body disappears”</K>, { until: ex }],
        ["maybe actualization of realization would be better", 960, 400, <K c={GOLD} s={30}>an actualization of realization</K>, { until: ex }],
        ["In essence it is an actualized state", 960, 480, <Wd c={GOLD} s={34} serif>an actualized state</Wd>, { until: ex }],
        ["Waking", 560, 600, <K c={ICE} s={28}>waking</K>, { until: ex }],
        ["Dreaming", 960, 600, <K c={VIOLET} s={28}>dreaming</K>, { until: ex }],
        ["Deep sleep", 1360, 600, <K c={DIM} s={28}>deep sleep</K>, { until: ex }],
        ["Not by the intensity of a", 960, 700, <Wd c={CHALK} s={28}>the strength of view and realization, not an intense experience</Wd>, { until: ex }],
        [ex, 960, 100, <Wd c={TEAL} s={44} serif>the exhaustion of phenomena</Wd>],
        ["Not appearing", 600, 250, <SK c={DIM} s={28} strikeAt={c("Not appearing", -0.4)}>appearing ends</SK>],
        ["What is used up is appearing held as things", 1300, 250, <K c={TEAL} s={28}>used up: appearing held as things</K>],
        ["In twenty twenty I put it this way", 960, 380, <Wd c={DIM} s={28}>2020</Wd>],
        ["No seer", 600, 500, <Wd c={CHALK} s={40} serif>no seer</Wd>],
        ["No seeing", 960, 500, <Wd c={CHALK} s={40} serif>no seeing</Wd>],
        ["Nothing seen", 1320, 500, <Wd c={CHALK} s={40} serif>nothing seen</Wd>],
        ["And appearing goes on", 960, 660, <Wd c={GOLD} s={40} serif>and appearing goes on</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const PartScene: React.FC = () => {
  const c = useCue();
  const body = "The body is not left out";
  return (
    <AbsoluteFill>
      <Title text="where I part" c={WARM} until={body} />
      <Items items={[
        ["gives the appearing side a practice of its own", 400, 250, <Box c={GOLD} w={460} title="direct crossing" sub="a practice for the display" ts={32} />, { until: body }],
        ["school works through the winds and the subtle body", 960, 250, <Box c={ICE} w={460} title="the winds" sub="the subtle body" ts={32} />, { until: body }],
        ["Taoist inner alchemy refines energy into a body of spirit", 1520, 250, <Box c={VIOLET} w={460} title="inner alchemy" sub="a body of spirit" ts={32} />, { until: body }],
        ["The method is shared widely", 960, 430, <Wd c={CHALK} s={34} serif>the method is shared · the view is not</Wd>, { until: body }],
        ["For me, what frees is seeing through the inherent framework", 960, 560, <K c={TEAL} s={32}>seeing through the inherent framework</K>, { until: body }],
        ["Not where the winds go", 960, 660, <SK c={DIM} s={28} strikeAt={c("Not where the winds go", 0.4)}>where the winds go</SK>, { until: body }],
        ["Seeing that what seems so solid", 960, 770, <Wd c={CHALK} s={28}>so solid, so undeniable · vivid, found nowhere · just as hard</Wd>, { until: body }],
        [body, 960, 100, <Wd c={TEAL} s={44} serif>the body is not left out</Wd>],
        ["opened by themselves, without effort", 960, 280, <K c={TEAL} s={30}>mind and body's energy opened by themselves</K>],
        ["I was not forcing the breath", 960, 400, <SK c={DIM} s={28} strikeAt={c("I was not forcing the breath", 0.2)}>forcing the breath</SK>],
        ["Energy practices can help loosen what the body holds", 960, 530, <K c={CHALK} s={28}>energy practices: they help loosen, they are not the cause</K>],
        ["But luminous clarity was never a product of the winds", 960, 680, <Wd c={GOLD} s={36} serif>clarity was never a product of the winds</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const CorpseScene: React.FC = () => {
  const c = useCue();
  const goal = "And it is not a goal";
  return (
    <AbsoluteFill>
      <Title text="and the shrinking corpse?" until={goal} />
      <Items items={[
        ["It does not show what others will see at a funeral", 960, 260, <Wd c={CHALK} s={30}>the logic shows how the body is known and lived · not a funeral</Wd>, { until: goal }],
        ["is reported, not proved", 960, 380, <K c={WARM} s={32}>a vanishing body: reported, not proved</K>, { until: goal }],
        ["Many great masters left ordinary bodies", 960, 500, <K c={CHALK} s={28}>many great masters left ordinary bodies</K>, { until: goal }],
        ["Insight is measured by the freedom of the mind", 960, 640, <Wd c={TEAL} s={36} serif>insight: the freedom of the mind</Wd>, { until: goal }],
        [goal, 960, 100, <Wd c={CHALK} s={44} serif>not a goal</Wd>],
        ["Tibetans speak of a leather butter bag", 960, 240, <Wd c={GOLD} s={34} serif>the leather butter bag</Wd>],
        ["it stays soft", 600, 380, <K c={TEAL} s={28}>worked with butter · soft</K>],
        ["it goes hard", 1320, 380, <K c={WARM} s={28}>never worked · hard</K>],
        ["Knowledge of the lights that is never tested hardens the same way", 960, 540, <Wd c={CHALK} s={30}>knowledge of the lights, never tested, hardens the same way</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const q = "If nothing is found, what turns into light";
  const pre = 1 - ramp(t, c(q), 0.5);
  return (
    <AbsoluteFill>
      <At x={480} y={400} o={pre}><SoundRings at={c("So I come back to the sound")} color={ICE} /></At>
      <At x={960} y={340} o={pre}><SoundRings at={c("So I come back to the sound", -0.8)} color={GOLD} /></At>
      <At x={1440} y={400} o={pre}><SoundRings at={c("So I come back to the sound", -1.6)} color={TEAL} /></At>
      <Items items={[
        ["No lamp behind it", 700, 650, <SK c={DIM} s={28} strikeAt={c("No lamp behind it", -0.6)}>a lamp behind it</SK>, { until: q }],
        ["No one holding it", 1220, 650, <SK c={DIM} s={28} strikeAt={c("No one holding it", -0.6)}>someone holding it</SK>, { until: q }],
        ["Found nowhere, and never missing", 960, 780, <Wd c={GOLD} s={38} serif>found nowhere · never missing</Wd>, { until: q }],
        [q, 960, 160, <Wd c={CHALK} s={42} serif>if nothing is found, what turns into light?</Wd>],
        ["Nothing found turns into light", 960, 290, <Wd c={GOLD} s={42} serif>nothing found turns into light</Wd>],
        ["The body appeared solid because it was held", 960, 410, <K c={CHALK} s={28}>solid, because it was held · the holding ends</K>],
      ]} />
      <At x={960} y={560}><Reveal text="Luminous clarity, recognised all the way through," at={c("Luminous clarity, recognised all the way through")} size={46} color={CHALK} speed={0.035} /></At>
      <At x={960} y={660}><Reveal text="the body included." at={c("Luminous clarity, recognised all the way through", -2.2)} size={46} color={CHALK} speed={0.035} /></At>
      <At x={960} y={780}><Reveal text="That is the rainbow body." at={c("That is the rainbow body")} size={54} color={GOLD} speed={0.04} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["Listen for a moment", "night", <SoundScene />],
    ["Now the old stories", "dusk", <StoryScene />],
    ["Let me start with clarity", "light", <ClarityScene />],
    ["And clarity is never missing", "whole", <LampsScene />],
    ["So what goes wrong", "doubt", <ErrorScene />],
    ["There is a name for this clearness", "light", <IAmScene />],
    ["That is how it went for me", "deep", <PathScene />],
    ["What sees it through is emptiness", "jade", <TwofoldScene />],
    ["And here the two halves meet", "whole", <OneFactScene />],
    ["Now the body", "dusk", <BasisScene />],
    ["Hold an apple", "search", <AppleScene />],
    ["So, in essence, it is a realization", "light", <RealizationScene />],
    ["Then how does one get there", "doubt", <PartScene />],
    ["And the shrinking corpse", "deep", <CorpseScene />],
    ["So I come back to the sound", "night", <EndScene />],
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
