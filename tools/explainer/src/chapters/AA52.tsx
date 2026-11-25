// After Anatta · Questions: Four Videos on the Rainbow Body: Why All Four (AA52).
// Owner's own voice. Why he made four videos (5 Elements, Inner Winds, the Reports, The Body's Own Knowing), why they
// belong together, the order to watch them. His own view of the rainbow body is excluded (owner, 2026-11-25).
// Arc: the story -> why I made them, four things -> 1 the five elements (qualities; two fives) -> 2 the practices of the
// body (held in the body; both ways; settling, not forcing) -> 3 the reports (only reports) -> 4 the body's own knowing
// (felt sense; limits; the body takes part) -> the order and what each guards against -> balanced.
// Stance: no lights as stuff, no claim that a body turns into light (reported, not shown); practitioner, not teacher.
// Cue phrases avoid the respelled names (Dzogchen, Gelug, Kālacakra, Bön, trekchö, thögal, tukdam) and hyphens.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  // the story
  "A body that shrinks to hair and nails", "Rainbows over a small house in Tibet", "And that is exactly the danger",
  "The rainbow body is easy to dismiss, and just as easy to inflate",
  // why
  "This is After Anatta", "why I created these four videos in the first place", "why they belong together",
  "and in what order I would watch them", "First, why I made them", "It is easy to dismiss, and just as easy to inflate",
  "I looked into four things", "the background of the five elements", "the practices of the body", "the reports themselves",
  "and the body's own knowing", "No one of them is enough on its own",
  // 1
  "The first is about background", "we bring our own world with us", "Light, for us, is photons and waves",
  "the five elements are not five kinds of stuff", "Earth is hardness", "Water is cohesion", "Fire is warmth",
  "Wind is motion", "Space is room", "They are qualities of what appears", "keeps two different fives side by side",
  "One came from India, with Buddhism", "The other came from China", "They never merge in view",
  "they go wrong from the start",
  // 2
  "The second video is about the practices of the body", "Somatic practices are important",
  "It lives in the muscles, the diaphragm and the breath", "the body goes on bracing underneath",
  "The street between insight and the body runs both ways", "Insight frees bound energy",
  "And a balanced, supple body lets the insight sink into the bones", "Balancing is settling, not forcing",
  "The breath sinks below the navel", "The posture is upright but not stiff", "has left many sleepless and unsettled",
  "never an endurance test",
  // 3
  "The third video is the traditions in their own words", "Here I only report", "with its two practices",
  "The four visions", "with its illusory body made of wind", "empty form", "Other traditions that tell of a body of light",
  "And the reports themselves", "and what has never been checked",
  // 4
  "The fourth video is about another kind of knowing", "There is a more immediate knowing, before words",
  "A dog barks behind you", "Fear and clinging are not only beliefs", "are long recognitions of this side of knowing", "The limits matter",
  "Direct is not the same as right", "It needs refining, as analysis does", "It is more immediate, not more fundamental",
  "For the rainbow body, this is the point", "The body takes part in realization",
  "That the body itself turns into light remains reported, not shown",
  // the order
  "So this is the order I would watch them in", "First the background", "Then the practices of the body",
  "Then the reports", "And then the body's own knowing", "Each one guards against a different mistake",
  "Without the background", "Without the practices", "Without the reports", "Without the body's own knowing",
  "Together they give a balanced reading", "Neither dismissing the rainbow body, nor inflating it",
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
/** A numbered card for one of the four videos. */
const VideoCard: React.FC<{ n: number; c: string; title: string; sub: string }> = ({ n, c, title, sub }) => (
  <div style={{ width: 400, padding: "18px 16px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center" }}>
    <Wd c={c} s={40} serif>{String(n)}</Wd>
    <div style={{ marginTop: 6 }}><Wd c={CHALK} s={26} serif>{title}</Wd></div>
    <div style={{ marginTop: 6 }}><Wd c={DIM} s={20}>{sub}</Wd></div>
  </div>
);
const CARDS: [number, string, string, string][] = [
  [1, GOLD, "5 Elements", "Chinese vs Tibet"],
  [2, TEAL, "Inner Winds", "and Subtle Body Practices"],
  [3, VIOLET, "According to Reports", "What the Traditions Report"],
  [4, ROSE, "The Body's Own Knowing", "Felt Sense, Inner Winds"],
];
/** The four cards in a row; `hi` lights one of them (0 = none). */
const FourCards: React.FC<{ hi?: number; o?: number }> = ({ hi = 0, o = 1 }) => (
  <div style={{ display: "flex", gap: 34, opacity: o }}>
    {CARDS.map(([n, c, t, s]) => (
      <div key={n} style={{ opacity: hi && hi !== n ? 0.3 : 1, transform: `scale(${hi === n ? 1.06 : 1})` }}>
        <VideoCard n={n} c={c} title={t} sub={s} />
      </div>
    ))}
  </div>
);

const StoryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const arcs = ramp(t, c("Rainbows over a small house in Tibet"), 2);
  return (
    <AbsoluteFill>
      <At x={960} y={480} o={ramp(t, 0.2, 0.8)}><House p={ramp(t, 0.2, 2)} /></At>
      <At x={960} y={540} s={1 - 0.5 * ramp(t, 0.8, 3)} o={ramp(t, 0.6, 0.8)}><Figure p={ramp(t, 0.6, 1.6)} color={DIM} /></At>
      <At x={960} y={230} o={arcs}><Arcs p={arcs} /></At>
      <Items items={[
        ["A body that shrinks to hair and nails", 960, 100, <Wd c={DIM} s={30}>a story, as it is told</Wd>],
        ["The rainbow body is easy to dismiss, and just as easy to inflate", 600, 800, <K c={DIM} s={28}>easy to dismiss</K>],
        ["The rainbow body is easy to dismiss, and just as easy to inflate", 1320, 800, <K c={WARM} s={28}>easy to inflate</K>, { d: 1.6 }],
      ]} />
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const first = "First, why I made them";
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, 0.2, 0.6)}><Wd c={DIM} s={30}>After Anatta</Wd></At>
      <Items items={[
        ["why I created these four videos in the first place", 960, 300, <K c={GOLD} s={32}>why I made them</K>, { until: first }],
        ["why they belong together", 960, 420, <K c={TEAL} s={32}>why they belong together</K>, { until: first }],
        ["and in what order I would watch them", 960, 540, <K c={VIOLET} s={32}>the order I would watch them in</K>, { until: first }],
        [first, 960, 200, <Wd c={GOLD} s={42} serif>why I made them</Wd>],
        ["It is easy to dismiss, and just as easy to inflate", 960, 300, <Wd c={CHALK} s={30}>a balanced reading: neither dismissing nor inflating</Wd>, { until: "I looked into four things" }],
      ]} />
      <At x={960} y={520} o={ramp(t, c("I looked into four things"), 0.6)}>
        <div style={{ display: "flex", gap: 34 }}>
          {CARDS.map(([n, col, ti, s], i) => {
            const cue = ["the background of the five elements", "the practices of the body", "the reports themselves", "and the body's own knowing"][i];
            return <div key={n} style={{ opacity: ramp(t, c(cue), 0.5) }}><VideoCard n={n} c={col} title={ti} sub={s} /></div>;
          })}
        </div>
      </At>
      <Items items={[["No one of them is enough on its own", 960, 780, <Wd c={WARM} s={34} serif>no one of them is enough on its own</Wd>]]} />
    </AbsoluteFill>
  );
};

const ElementsScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const two = "keeps two different fives side by side";
  const els: [string, string, string][] = [["Earth is hardness", "earth", "hardness"], ["Water is cohesion", "water", "cohesion"],
    ["Fire is warmth", "fire", "warmth"], ["Wind is motion", "wind", "motion"], ["Space is room", "space", "room"]];
  const pre = 1 - ramp(t, c(two), 0.4);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, 0.2, 0.6)}><VideoCard n={1} c={GOLD} title="5 Elements" sub="Chinese vs Tibet" /></At>
      <Items items={[
        ["Light, for us, is photons and waves", 960, 280, <SK c={DIM} s={28} strikeAt={c("the five elements are not five kinds of stuff")}>photons and waves</SK>, { until: two }],
        ["the five elements are not five kinds of stuff", 960, 360, <SK c={DIM} s={28} strikeAt={c("Earth is hardness")}>five kinds of stuff</SK>, { until: two }],
        ["They are qualities of what appears", 960, 640, <Wd c={GOLD} s={34} serif>qualities of what appears</Wd>, { until: two }],
      ]} />
      {els.map(([cue, e, q], i) => (
        <At key={e} x={360 + i * 300} y={500} o={ramp(t, c(cue), 0.5) * pre}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <K c={LIGHTS[i]} s={26}>{e}</K><Wd c={CHALK} s={24}>{q}</Wd>
          </div>
        </At>
      ))}
      <Items items={[
        ["One came from India, with Buddhism", 600, 420, <Box c={GOLD} w={500} title="from India" sub="with Buddhism: the elements, the lights" ts={34} />],
        ["The other came from China", 1320, 420, <Box c={ICE} w={500} title="from China" sub="divination and the calendar" ts={34} />],
        ["They never merge in view", 960, 640, <Wd c={CHALK} s={34} serif>they meet in history · they never merge in view</Wd>],
        ["they go wrong from the start", 960, 760, <K c={WARM} s={28}>without it, the five lights become modern light</K>],
      ]} />
    </AbsoluteFill>
  );
};

const BodyPracticeScene: React.FC = () => {
  const c = useCue();
  const st = "The street between insight and the body runs both ways";
  const settle = "Balancing is settling, not forcing";
  return (
    <AbsoluteFill>
      <At x={960} y={100}><VideoCard n={2} c={TEAL} title="Inner Winds" sub="and Subtle Body Practices" /></At>
      <Items items={[
        ["Somatic practices are important", 960, 280, <Wd c={TEAL} s={40} serif>somatic practices are important</Wd>, { until: st }],
        ["It lives in the muscles, the diaphragm and the breath", 960, 400, <K c={CHALK} s={28}>the habit lives in the muscles, the diaphragm, the breath</K>, { until: st }],
        ["the body goes on bracing underneath", 960, 520, <Wd c={DIM} s={28}>emptiness only in the head: the body still braces</Wd>, { until: st }],
        [st, 960, 280, <Wd c={GOLD} s={36} serif>insight ⇄ body: both ways</Wd>, { until: settle }],
        ["Insight frees bound energy", 560, 420, <Box c={GOLD} w={560} title="insight → body" sub="frees bound energy" ts={32} />, { until: settle }],
        ["And a balanced, supple body lets the insight sink into the bones", 1360, 420, <Box c={TEAL} w={560} title="body → insight" sub="lets it sink into the bones" ts={32} />, { until: settle }],
        [settle, 960, 280, <Wd c={TEAL} s={38} serif>settling, not forcing</Wd>],
        ["The breath sinks below the navel", 560, 420, <K c={CHALK} s={26}>breath below the navel</K>],
        ["The posture is upright but not stiff", 1360, 420, <K c={CHALK} s={26}>upright, not stiff</K>],
        ["has left many sleepless and unsettled", 960, 560, <SK c={DIM} s={26} strikeAt={c("never an endurance test")}>forcing the breath · pulling up to the crown</SK>],
        ["never an endurance test", 960, 680, <Wd c={CHALK} s={28}>a re-balancing, never an endurance test</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const ReportsScene: React.FC = () => (
  <AbsoluteFill>
    <At x={960} y={100}><VideoCard n={3} c={VIOLET} title="According to Reports" sub="What the Traditions Report" /></At>
    <Items items={[
      ["Here I only report", 960, 270, <K c={VIOLET} s={30}>only reporting</K>],
      ["with its two practices", 600, 380, <K c={CHALK} s={26}>Dzogchen: trekchö, thögal</K>],
      ["The four visions", 1320, 380, <K c={CHALK} s={26}>the four visions · three results</K>],
      ["with its illusory body made of wind", 600, 480, <K c={CHALK} s={26}>Gelug: the illusory body · tukdam</K>],
      ["empty form", 1320, 480, <K c={CHALK} s={26}>Kālacakra: empty form · Bön</K>],
      ["Other traditions that tell of a body of light", 960, 580, <K c={CHALK} s={26}>other traditions: a body of light</K>],
      ["and what has never been checked", 960, 700, <Wd c={WARM} s={32} serif>seen · told · never checked</Wd>],
    ]} />
  </AbsoluteFill>
);

const KnowingScene: React.FC = () => {
  const c = useCue();
  const lim = "The limits matter";
  return (
    <AbsoluteFill>
      <At x={960} y={100}><VideoCard n={4} c={ROSE} title="The Body's Own Knowing" sub="Felt Sense, Inner Winds" /></At>
      <Items items={[
        ["There is a more immediate knowing, before words", 960, 270, <Wd c={ROSE} s={36} serif>a knowing before words: the felt sense</Wd>, { until: lim }],
        ["A dog barks behind you", 960, 380, <K c={CHALK} s={28}>a dog barks · the shoulders jump before you know</K>, { until: lim }],
        ["Fear and clinging are not only beliefs", 960, 490, <K c={CHALK} s={28}>fear, clinging: bracing, held breath, contraction</K>, { until: lim }],
        ["are long recognitions of this side of knowing", 960, 600, <Wd c={DIM} s={26}>the inner-wind traditions recognised it · research supports it, within limits</Wd>, { until: lim }],
        [lim, 960, 270, <Wd c={WARM} s={36} serif>the limits</Wd>],
        ["Direct is not the same as right", 600, 380, <K c={CHALK} s={26}>direct is not the same as right</K>],
        ["It needs refining, as analysis does", 1320, 380, <K c={CHALK} s={26}>it needs refining</K>],
        ["It is more immediate, not more fundamental", 960, 480, <SK c={DIM} s={26} strikeAt={c("It is more immediate, not more fundamental", -1.5)}>a deeper floor beneath experience</SK>],
        ["The body takes part in realization", 960, 610, <Wd c={GOLD} s={34} serif>the body takes part in realization</Wd>],
        ["That the body itself turns into light remains reported, not shown", 960, 720, <K c={WARM} s={26}>a body turning into light: reported, not shown</K>],
      ]} />
    </AbsoluteFill>
  );
};

const OrderScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const hi = t >= c("And then the body's own knowing") ? 4 : t >= c("Then the reports") ? 3 : t >= c("Then the practices of the body") ? 2 : t >= c("First the background") ? 1 : 0;
  const guard = "Each one guards against a different mistake";
  return (
    <AbsoluteFill>
      <Title text="the order I would watch them in" c={GOLD} />
      <At x={960} y={330} s={0.85} o={ramp(t, 0.2, 0.6)}><FourCards hi={t < c(guard) ? hi : 0} /></At>
      <Items items={[
        ["Without the background", 960, 520, <K c={GOLD} s={24}>without the background: the lights become modern light</K>],
        ["Without the practices", 960, 580, <K c={TEAL} s={24}>without the practices: the view stays in the head</K>],
        ["Without the reports", 960, 640, <K c={VIOLET} s={24}>without the reports: stories taken as facts, or dismissed</K>],
        ["Without the body's own knowing", 960, 700, <K c={ROSE} s={24}>without the body's knowing: the body left out of realization</K>],
      ]} />
      <At x={960} y={800}><Reveal text="Neither dismissing the rainbow body, nor inflating it." at={c("Neither dismissing the rainbow body, nor inflating it")} size={40} color={GOLD} speed={0.03} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["A body that shrinks to hair and nails", "night", <StoryScene />],
    ["This is After Anatta", "dusk", <WhyScene />],
    ["The first is about background", "light", <ElementsScene />],
    ["The second video is about the practices of the body", "jade", <BodyPracticeScene />],
    ["The third video is the traditions in their own words", "deep", <ReportsScene />],
    ["The fourth video is about another kind of knowing", "dusk", <KnowingScene />],
    ["So this is the order I would watch them in", "whole", <OrderScene />],
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
