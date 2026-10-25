// Bonus 91: Isn't Energy the Substrate? Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb, PictureFrame, ROSE, Reveal,
  Ring, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Strike a match", "gives off heat and light", "and is gone",
  "Where did that energy come from", "where did it go",
  "pictures energy as a kind of stuff", "poured from the match head", "the substrate of the world",
  "stays the same through every change", "Readers trained in physics",
  "physics itself does not treat",
  "a quantity that stays constant", "a closed system", "not a substance handed", "Richard Feynman",
  "no picture of energy as little blobs", "It has a number", "as motion", "as position", "as heat", "as mass",
  "Before and after",
  "Three facts show",
  "it depends on the frame", "someone standing on the ground", "someone running beside it", "No amount belongs",
  "its conservation comes from a symmetry", "the laws of physics do not change", "a regularity in how things behave",
  "not a store of anything",
  "not conserved everywhere", "In an expanding universe", "light stretches and loses energy", "no well-defined total energy",
  "simply fail to add up",
  "Now look again", "the old extreme of coming and going", "asked of a number",
  "When the match burns", "chemical energy becomes heat and light", "correct, and very reliable", "search the event",
  "nothing is found that leaves",
  "a designated regularity", "as reliable as conventions get", "not a stuff underneath",
  "the everyday sense", "vitality or drive", "It is real, and it works", "dependence on conditions",
  "The flame is out", "Nothing travelled anywhere", "the accounting still balances",
];

const M = {
  match: { a: "rgba(170,90,40,0.5)", b: "rgba(90,50,120,0.4)", c: "rgba(170,120,50,0.35)" },
  stuff: { a: "rgba(150,80,60,0.45)", b: "rgba(70,60,140,0.45)", c: "rgba(170,130,60,0.3)" },
  ledger: { a: "rgba(40,110,140,0.5)", b: "rgba(150,120,50,0.4)", c: "rgba(70,60,150,0.3)" },
  frame: { a: "rgba(40,130,120,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(150,110,50,0.3)" },
  sym: { a: "rgba(80,60,160,0.5)", b: "rgba(40,110,150,0.4)", c: "rgba(150,120,60,0.3)" },
  cosmos: { a: "rgba(30,30,100,0.55)", b: "rgba(120,40,90,0.4)", c: "rgba(40,80,140,0.35)" },
  reading: { a: "rgba(150,110,50,0.45)", b: "rgba(70,60,140,0.45)", c: "rgba(40,110,130,0.3)" },
  life: { a: "rgba(60,140,100,0.45)", b: "rgba(160,110,60,0.4)", c: "rgba(80,60,150,0.3)" },
};

// ---------------------------------------------------------------- drawings
const Flame: React.FC<{ s?: number; boost?: number }> = ({ s = 1, boost = 0 }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7) * (8 + 6 * boost);
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  const inner = `M0 ${-60 - n(2) * 0.6} C 25 -20, 38 20, 30 55 C 22 85, -22 85, -30 55 C -38 20, -25 -20, 0 ${-60 - n(2) * 0.6} Z`;
  return (
    <svg width={260 * s} height={340 * s} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl91" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl91)" /><path d={inner} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

/** A match standing upright; `burnt` darkens the head; the flame (0..1) sits on the head. */
const Match: React.FC<{ flame: number; burnt?: number }> = ({ flame, burnt = 0 }) => (
  <div style={{ position: "relative", width: 120, height: 520 }}>
    <div style={{ position: "absolute", left: 60 - 9, top: 180, width: 18, height: 320, borderRadius: 4, background: "linear-gradient(90deg, #c99a62, #e8c08a, #b58450)" }} />
    <div style={{ position: "absolute", left: 60 - 16, top: 150, width: 32, height: 44, borderRadius: "50% 50% 45% 45%",
      background: burnt > 0.5 ? "#2b2422" : "radial-gradient(circle at 40% 35%, #ff6b5a, #b3261e)" }} />
    {/* Flame at s=0.75 is 195x255; its base (y=110 of a -200..140 box) sits on the head at y=150 */}
    <div style={{ position: "absolute", left: 60 - 195 / 2, top: 150 - 255 * (310 / 340) + 12, transform: `scale(${flame})`, transformOrigin: "50% 91%", opacity: Math.min(1, flame * 1.5) }}>
      <Flame s={0.75} />
    </div>
  </div>
);

const Ball: React.FC<{ s?: number }> = ({ s = 1 }) => (
  <div style={{ width: 90 * s, height: 90 * s, borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, #fff, ${ROSE} 50%, #8a2a3c)`, boxShadow: `0 0 24px ${ROSE}88` }} />
);

const Person: React.FC<{ run?: boolean; color?: string }> = ({ run, color = CHALK }) => {
  const { t } = useT();
  const k = run ? Math.sin(t * 9) : 0;
  return (
    <svg width={110} height={200} viewBox="0 0 110 200">
      <circle cx={55} cy={24} r={18} fill="none" stroke={color} strokeWidth={5} />
      <path d={`M55 44 L55 120 M55 64 L${28 + 14 * k} 100 M55 64 L${82 - 14 * k} 100 M55 120 L${32 + 18 * k} 190 M55 120 L${78 - 18 * k} 190`}
        stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
    </svg>
  );
};

/** Energy bar as seen by one observer. */
const Meter: React.FC<{ v: number; color: string; label: string }> = ({ v, color, label }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ width: 70, height: 220, borderRadius: 12, border: `3px solid ${color}`, position: "relative", margin: "0 auto", background: "#ffffff0a" }}>
      <div style={{ position: "absolute", left: 6, right: 6, bottom: 6, height: 206 * v, borderRadius: 8, background: color, boxShadow: `0 0 20px ${color}` }} />
    </div>
    <Glow color={color} size={28} style={{ marginTop: 10 }}>{label}</Glow>
  </div>
);

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const Counter: React.FC<{ value: string; color?: string; size?: number }> = ({ value, color = GOLD, size = 90 }) => (
  <div style={{ padding: "16px 40px", borderRadius: 18, border: `3px solid ${color}`, background: `${color}1f`, boxShadow: `0 0 40px ${color}55`,
    fontFamily: SERIF, fontWeight: 600, fontSize: size, color: "#FFF6DA", letterSpacing: 4 }}>{value}</div>
);

// ---------------------------------------------------------------- scenes
const MatchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const lit = ramp(t, c("Strike a match", 0.1) + 0.5, 0.4);
  const out = ramp(t, c("and is gone"), 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={480} s={pop(t, fps, c("Strike a match", 0.4))}><Match flame={lit * (1 - out)} burnt={out} /></At>
      <At x={960} y={260} o={ramp(t, c("gives off heat and light"), 0.6) * (1 - out)}>
        <div style={{ width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}55, transparent 60%)` }} />
      </At>
      <Mist x={960} y={250} start={c("and is gone")} color="#9a96a3" spread={60} n={10} />
      <At x={600} y={300} o={between(t, c("gives off heat and light"), c("and is gone") + 0.5)}><Glow color={WARM} size={40}>heat</Glow></At>
      <At x={1320} y={300} o={between(t, c("gives off heat and light") + 0.3, c("and is gone") + 0.5)}><Glow color={GOLD} size={40}>light</Glow></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const from = c("Where did that energy come from", 0.3), go = c("where did it go", 0.2);
  const stuff = c("pictures energy as a kind of stuff");
  const pour = ramp(t, c("poured from the match head"), 3.0);
  const sub = c("the substrate of the world");
  return (
    <AbsoluteFill>
      <At x={960} y={460} s={pop(t, fps, from - 0.3)}><Match flame={1} /></At>
      <At x={560} y={200} s={pop(t, fps, from)}><Chip color={ICE} size={40}>come from?</Chip></At>
      <At x={1360} y={200} s={pop(t, fps, go)}><Chip color={ICE} size={40}>go?</Chip></At>
      {Array.from({ length: 16 }).map((_, i) => {
        const u = Math.min(1, Math.max(0, pour * 1.6 - i * 0.04));
        const x = 960 + (rand(i) - 0.5) * 60 + u * (rand(i + 3) - 0.5) * 1100, y = 320 - u * (120 + rand(i + 1) * 120) + u * u * 240;
        return <At key={i} x={x} y={y} o={ramp(t, stuff, 0.5) * (u > 0.98 ? 0.4 : 1)}><Orb size={30} color={GOLD} /></At>;
      })}
      <At x={960} y={760} o={ramp(t, stuff + 0.5, 0.5)}><Chip color={GOLD} size={34}>energy as stuff?</Chip></At>
      <At x={1450} y={560} o={ramp(t, sub, 0.5)}><Glow color={WARM} size={40} serif>the substrate?</Glow></At>
      <At x={470} y={560} o={ramp(t, c("stays the same through every change"), 0.5)}><Glow color={CHALK} size={32}>the one thing that stays?</Glow></At>
      <At x={960} y={110} o={ramp(t, c("Readers trained in physics"), 0.5)}><Glow color={DIM} size={30}>a physicist's objection</Glow></At>
    </AbsoluteFill>
  );
};

const LedgerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("physics itself does not treat", 0.4);
  const blobs = c("no picture of energy as little blobs");
  const ways = [["as motion", "motion", ROSE], ["as position", "position", TEAL], ["as heat", "heat", WARM], ["as mass", "mass", VIOLET]] as const;
  const num = c("It has a number");
  const same = c("Before and after");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={42} serif>what physics says energy is</Glow></At>
      <At x={960} y={230} o={ramp(t, c("a quantity that stays constant"), 0.5)}><Glow color={GOLD} size={36}>a quantity that stays constant</Glow></At>
      <At x={960} y={300} o={ramp(t, c("a closed system"), 0.5)}>
        <div style={{ width: 1300, height: 520, borderRadius: 24, border: `3px dashed ${ICE}`, opacity: 0.6 }} />
      </At>
      <At x={1500} y={330} o={ramp(t, c("a closed system"), 0.5)}><Glow color={ICE} size={28}>closed system</Glow></At>
      <AbsoluteFill style={{ opacity: between(t, c("not a substance handed") - 0.2, num - 0.3) }}>
        {[0, 1, 2].map((i) => <At key={i} x={720 + i * 240} y={520 + 10 * Math.sin(t * 3 + i)}><Orb size={70} color={GOLD} /></At>)}
        <At x={960} y={660} o={ramp(t, blobs - 0.2, 0.4)}><Glow color={GOLD} size={30}>little blobs?</Glow></At>
        <Crossed x={960} y={540} at={blobs + 0.6} size={170} />
      </AbsoluteFill>
      <At x={960} y={650} o={ramp(t, c("Richard Feynman"), 0.5) * (1 - ramp(t, num - 0.3, 0.3))}><Glow color={CHALK} size={36} serif>Richard Feynman</Glow></At>
      {ways.map(([ph, w, col], i) => {
        const at = c(ph, 0.2);
        const x = 470 + i * 330;
        return (
          <React.Fragment key={i}>
            <At x={x} y={430} s={pop(t, fps, at)}><Chip color={col} size={36}>{w}</Chip></At>
            <Flow x1={x} y1={470} x2={960} y2={590} color={col} p={ramp(t, at + 0.2, 0.6)} />
          </React.Fragment>
        );
      })}
      <At x={960} y={650} s={pop(t, fps, num)}><Counter value={t < same ? "E" : "E  =  E"} /></At>
      <At x={960} y={790} o={ramp(t, same, 0.5)}><Glow color={GOLD} size={38}>before · after · the same number</Glow></At>
    </AbsoluteFill>
  );
};

const FrameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Three facts show", 0.3);
  const f1 = c("it depends on the frame");
  const stand = c("someone standing on the ground"), run = c("someone running beside it");
  const roll = ((t - f1) * 160) % 900;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={40} serif>three facts</Glow></At>
      <At x={960} y={190} o={ramp(t, f1, 0.5)}><Chip color={TEAL} size={34}>one · it depends on the frame</Chip></At>
      <Svg style={{ opacity: ramp(t, f1, 0.5) }}><line x1={300} x2={1300} y1={560} y2={560} stroke={DIM} strokeWidth={4} /></Svg>
      <At x={360 + roll} y={515} o={ramp(t, f1 + 0.3, 0.4)}><Ball /></At>
      <At x={320} y={460} s={pop(t, fps, stand)}><Person color={GOLD} /></At>
      <At x={360 + roll} y={380} s={pop(t, fps, run)}><Person run color={TEAL} /></At>
      <At x={1460} y={420} s={pop(t, fps, stand + 0.3)}><Meter v={0.85} color={GOLD} label="for the one standing" /></At>
      <At x={1700} y={420} s={pop(t, fps, run + 0.3)}><Meter v={0.02} color={TEAL} label="for the runner" /></At>
      <At x={960} y={720} o={ramp(t, c("No amount belongs"), 0.5)}><Glow color={ROSE} size={40} serif>no amount belongs to the ball itself</Glow></At>
    </AbsoluteFill>
  );
};

const SymScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("its conservation comes from a symmetry", 0.3);
  const laws = c("the laws of physics do not change");
  const card = (label: string) => (
    <div style={{ width: 300, padding: "26px 0", borderRadius: 16, border: `3px solid ${VIOLET}`, background: `${VIOLET}22`, boxShadow: `0 0 30px ${VIOLET}66`, textAlign: "center" }}>
      <div style={{ fontFamily: SERIF, fontSize: 44, color: CHALK }}>the laws</div>
      <div style={{ fontFamily: "SourceSans", fontSize: 28, color: DIM, marginTop: 6 }}>{label}</div>
    </div>
  );
  return (
    <AbsoluteFill>
      <At x={960} y={190} o={ramp(t, t0, 0.5)}><Chip color={VIOLET} size={34}>two · conservation comes from a symmetry</Chip></At>
      <At x={960} y={280} o={ramp(t, t0 + 1.2, 0.5)}><Glow color={DIM} size={30}>Emmy Noether</Glow></At>
      <At x={560} y={460} s={pop(t, fps, laws)}>{card("today")}</At>
      <At x={1360} y={460} s={pop(t, fps, laws + 0.4)}>{card("tomorrow")}</At>
      <At x={960} y={460} o={ramp(t, laws + 0.8, 0.4)}><Glow color={GOLD} size={80}>=</Glow></At>
      <At x={960} y={650} o={ramp(t, c("a regularity in how things behave"), 0.5)}><Glow color={TEAL} size={40} serif>a regularity in how things behave</Glow></At>
      <At x={960} y={760} o={ramp(t, c("not a store of anything"), 0.4)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={32}>a store of stuff</Chip><Strike at={c("not a store of anything") + 0.6} /></div>
      </At>
    </AbsoluteFill>
  );
};

const CosmosScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("not conserved everywhere", 0.3);
  const exp = ramp(t, c("In an expanding universe"), 6.0);
  const stretch = ramp(t, c("light stretches and loses energy"), 3.0);
  const xs = Array.from({ length: 140 }, (_, i) => 300 + i * 9.5);
  const lam = 60 + 140 * stretch;
  const col = stretch < 0.5 ? ICE : stretch < 0.8 ? GOLD : WARM;
  const total = c("no well-defined total energy");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.5)}><Chip color={WARM} size={34}>three · not conserved everywhere</Chip></At>
      {Array.from({ length: 22 }).map((_, i) => {
        const a = rand(i) * Math.PI * 2, r0 = 60 + rand(i + 2) * 260;
        return <At key={i} x={960 + Math.cos(a) * r0 * (1 + exp)} y={300 + Math.sin(a) * r0 * 0.35 * (1 + exp)} o={ramp(t, c("In an expanding universe"), 0.5) * (1 - exp * 0.5)}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: CHALK, boxShadow: `0 0 10px ${CHALK}` }} /></At>;
      })}
      <Svg style={{ opacity: ramp(t, c("light stretches and loses energy") - 0.3, 0.5) }}>
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${560 + 50 * Math.sin(((x - 300) / lam) * Math.PI * 2 - t * 4)}`).join(" ")}
          fill="none" stroke={col} strokeWidth={5} style={{ filter: `drop-shadow(0 0 10px ${col})` }} />
      </Svg>
      <At x={960} y={660} o={ramp(t, c("light stretches and loses energy") + 0.5, 0.5)}><Glow color={col} size={34}>light stretches · loses energy</Glow></At>
      <At x={960} y={760} s={pop(t, fps, total)}><Counter value="total = ?" color={DIM} size={56} /></At>
      <At x={1450} y={760} o={ramp(t, c("simply fail to add up"), 0.5)}><Glow color={WARM} size={32}>a substance could not fail to add up</Glow></At>
    </AbsoluteFill>
  );
};

const ReadingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Now look again", 0.3);
  const ext = c("the old extreme of coming and going");
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, t0)}><Counter value="E" /></At>
      <Flow x1={420} y1={420} x2={820} y2={420} color={ICE} p={ramp(t, t0 + 0.5, 0.6)} />
      <Flow x1={1100} y1={420} x2={1500} y2={420} color={ICE} p={ramp(t, t0 + 0.9, 0.6)} />
      <At x={360} y={420} o={ramp(t, t0 + 0.5, 0.5)}><Chip color={ICE} size={32}>from where?</Chip></At>
      <At x={1580} y={420} o={ramp(t, t0 + 0.9, 0.5)}><Chip color={ICE} size={32}>to where?</Chip></At>
      <div style={{ position: "absolute", top: 560, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="coming and going" at={ext} size={80} />
      </div>
      <At x={960} y={720} o={ramp(t, c("asked of a number"), 0.5)}><Glow color={GOLD} size={38}>asked of a number</Glow></At>
      <Crossed x={620} y={420} at={c("asked of a number") + 0.6} size={50} />
      <Crossed x={1300} y={420} at={c("asked of a number") + 0.9} size={50} />
    </AbsoluteFill>
  );
};

const BurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("When the match burns", 0.3);
  const conv = c("chemical energy becomes heat and light");
  const search = c("search the event");
  const u = ramp(t, search, 2.6);
  return (
    <AbsoluteFill>
      <At x={760} y={470} s={pop(t, fps, t0)}><Match flame={1} /></At>
      <At x={1300} y={260} o={ramp(t, conv, 0.5)}><Chip color={GOLD} size={34}>chemical → heat + light</Chip></At>
      <At x={1300} y={340} o={ramp(t, c("correct, and very reliable"), 0.5)}><Glow color={GREEN} size={32}>within physics ✓</Glow></At>
      <At x={760 + 120 * Math.cos(u * Math.PI * 2)} y={290 + 90 * Math.sin(u * Math.PI * 2)} o={between(t, search, search + 3.2)}>
        <svg width={130} height={130} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
          <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
        </svg>
      </At>
      <At x={1300} y={520} o={ramp(t, c("nothing is found that leaves"), 0.5)}>
        <div style={{ position: "relative" }}><Chip color={DIM} size={30}>something travelling into the flame</Chip><Strike at={c("nothing is found that leaves") + 1.0} /></div>
      </At>
    </AbsoluteFill>
  );
};

const RegularityScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const des = c("a designated regularity");
  const under = c("not a stuff underneath");
  const g = ramp(t, under - 0.3, 0.4), fall = ramp(t, under + 0.9, 1.4);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 230, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a designated regularity" at={des} size={92} />
      </div>
      <At x={960} y={400} o={ramp(t, c("as reliable as conventions get"), 0.5)}><Glow color={TEAL} size={40}>as reliable as conventions get</Glow></At>
      {Array.from({ length: 7 }).map((_, i) => (
        <At key={i} x={600 + i * 120} y={520} s={pop(t, fps, c("as reliable as conventions get") + 0.4 + i * 0.1)}><Orb size={36} color={[GOLD, TEAL, VIOLET][i % 3]} /></At>
      ))}
      <At x={960 - fall * 50} y={640 + fall * 200} o={g * (1 - fall)} r={-fall * 8}>
        <div style={{ width: 760, height: 28, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}55, ${WARM})`, boxShadow: `0 0 24px ${WARM}` }} />
      </At>
      <At x={1460} y={600 + fall * 120} o={g * (1 - fall)}><Glow color={WARM} size={34}>stuff underneath?</Glow></At>
    </AbsoluteFill>
  );
};

const LifeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("the everyday sense", 0.3);
  const conds = [["food", GOLD], ["sleep", ICE], ["sunlight", WARM], ["breath", TEAL], ["purpose", VIOLET]] as const;
  const dep = c("dependence on conditions");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={40} serif>energy, in the everyday sense</Glow></At>
      <At x={960} y={470} s={pop(t, fps, c("vitality or drive", 0.4))}><Person color={GREEN} /></At>
      <At x={960} y={440} o={ramp(t, c("It is real, and it works"), 0.8)}>
        <div style={{ width: 420, height: 420, borderRadius: "50%", background: `radial-gradient(circle, ${GREEN}55, transparent 65%)` }} />
      </At>
      <At x={960} y={700} o={ramp(t, c("It is real, and it works"), 0.5)}><Glow color={GREEN} size={36}>real · and it works</Glow></At>
      {conds.map(([w, col], i) => {
        const a = (i / conds.length) * Math.PI * 2 - Math.PI / 2, x = 960 + 520 * Math.cos(a), y = 450 + 260 * Math.sin(a);
        return (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.3} y2={450 + (y - 450) * 0.3} color={col} p={ramp(t, dep + i * 0.15, 0.6)} />
            <At x={x} y={y} s={pop(t, fps, dep + i * 0.15)}><Chip color={col} size={30}>{w}</Chip></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The flame is out", 0.3);
  const bal = c("the accounting still balances");
  const tilt = 12 * (1 - ramp(t, bal, 1.2));
  return (
    <AbsoluteFill>
      <At x={620} y={470} s={pop(t, fps, t0)}><Match flame={0} burnt={1} /></At>
      <Mist x={620} y={290} start={t0} color="#9a96a3" spread={50} n={10} />
      <At x={620} y={780} o={ramp(t, c("Nothing travelled anywhere"), 0.5)}><Glow color={DIM} size={34}>nothing travelled</Glow></At>
      <At x={1300} y={430} s={pop(t, fps, bal - 0.4)}>
        <svg width={460} height={320} viewBox="-230 -60 460 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD})` }}>
          <line x1={0} y1={0} x2={0} y2={230} stroke={GOLD} strokeWidth={8} />
          <rect x={-70} y={230} width={140} height={18} rx={6} fill={GOLD} />
          <g transform={`rotate(${tilt})`}>
            <line x1={-190} y1={0} x2={190} y2={0} stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
            <path d="M-190 0 L-230 90 L-150 90 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
            <path d="M190 0 L150 90 L230 90 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
          </g>
          <circle r={12} fill={GOLD} />
        </svg>
      </At>
      <At x={1300} y={780} o={ramp(t, bal + 0.6, 0.6)}><Glow color={GOLD} size={40} serif>the accounting still balances</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["match", 0], ["stuff", c("Where did that energy come from", 0.6)], ["ledger", c("physics itself does not treat", 0.6)],
    ["frame", c("Three facts show", 0.6)], ["sym", c("its conservation comes from a symmetry", 0.6)], ["cosmos", c("not conserved everywhere", 0.6)],
    ["reading", c("Now look again", 0.6)], ["match", c("When the match burns", 0.6)], ["reading", c("a designated regularity", 0.6)],
    ["life", c("the everyday sense", 0.6)], ["match", c("The flame is out", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Where did that energy come from", 0.9)], <MatchScene />],
    [S("Where did that energy come from", "physics itself does not treat"), <QuestionScene />],
    [S("physics itself does not treat", "Three facts show"), <LedgerScene />],
    [S("Three facts show", "its conservation comes from a symmetry"), <FrameScene />],
    [S("its conservation comes from a symmetry", "not conserved everywhere"), <SymScene />],
    [S("not conserved everywhere", "Now look again"), <CosmosScene />],
    [S("Now look again", "When the match burns"), <ReadingScene />],
    [S("When the match burns", "a designated regularity"), <BurnScene />],
    [S("a designated regularity", "the everyday sense"), <RegularityScene />],
    [S("the everyday sense", "The flame is out"), <LifeScene />],
    [S("The flame is out", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
