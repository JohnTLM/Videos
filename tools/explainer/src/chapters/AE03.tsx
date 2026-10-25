// Anatta to Emptiness, Episode 3: The Collapse of the Observer. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Look at anything near you", "A cup", "A window", "Your own hand",
  "seeing seems to happen from somewhere", "A quiet witness", "Sounds are heard by someone", "Colours are seen by someone",
  "Thoughts seem to belong", "rarely questioned", "an obvious fact",
  "The realization called anatta", "means no self", "the observer cannot be found",
  "Not because it has disappeared", "merged with the universe", "became infinite", "simply never there",
  "not a blank void", "hidden universal consciousness", "Experience becomes simpler", "There is seeing", "no seer standing behind",
  "The hearing needs no hearer", "Walking unfolds",
  "The sound of rain", "The warmth of the sun", "Nothing watches from behind",
  "startlingly intimate", "simply met", "in the seen, only the seen", "the gap between observer and observed", "a concept laid over",
  "Colours become vivid", "Thoughts lose their heavy ownership", "exactly where it always was",
  "a decisive liberation", "not yet emptiness",
  "Anatta removes the subject", "the way the world itself is pictured", "space, time, matter",
  "The observer has disappeared", "the world has not",
  "a strange tension", "centreless and fluid", "separate things", "Experience says one thing", "Thought says another",
  "this book's reading", "falling out of step", "Words like object",
  "something new begins", "Walking no longer feels", "Hearing no longer feels", "take part completely", "called this total exertion",
  "The witness is gone", "ready to be seen through",
];

const M = {
  near: { a: "rgba(60,50,130,0.5)", b: "rgba(170,130,60,0.35)", c: "rgba(30,90,120,0.3)" },
  witness: { a: "rgba(80,50,120,0.5)", b: "rgba(150,90,50,0.35)", c: "rgba(40,60,110,0.3)" },
  anatta: { a: "rgba(170,130,60,0.45)", b: "rgba(70,50,140,0.45)", c: "rgba(40,110,130,0.3)" },
  simple: { a: "rgba(40,120,140,0.5)", b: "rgba(170,140,70,0.35)", c: "rgba(80,60,150,0.3)" },
  vivid: { a: "rgba(190,110,70,0.45)", b: "rgba(90,70,170,0.45)", c: "rgba(60,150,140,0.35)" },
  world: { a: "rgba(50,60,130,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,120,0.3)" },
  desync: { a: "rgba(110,50,120,0.45)", b: "rgba(40,100,140,0.45)", c: "rgba(170,120,60,0.3)" },
  exertion: { a: "rgba(190,140,60,0.5)", b: "rgba(70,60,150,0.4)", c: "rgba(60,150,130,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Cup: React.FC = () => (
  <svg width={170} height={150} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <path d="M20 30 L130 30 L118 130 Q75 145 32 130 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={4} strokeLinejoin="round" />
    <path d="M128 52 Q165 55 158 85 Q152 108 122 106" fill="none" stroke={GOLD} strokeWidth={4} />
    {[0, 1, 2].map((i) => <path key={i} d={`M${50 + i * 25} 22 q -8 -10 0 -18`} fill="none" stroke={CHALK} strokeWidth={2.5} opacity={0.5} />)}
  </svg>
);
const Window: React.FC = () => (
  <svg width={170} height={170} viewBox="0 0 170 170" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <rect x={15} y={15} width={140} height={140} rx={6} fill="rgba(120,180,230,0.18)" stroke={ICE} strokeWidth={4} />
    <line x1={85} y1={15} x2={85} y2={155} stroke={ICE} strokeWidth={4} /><line x1={15} y1={85} x2={155} y2={85} stroke={ICE} strokeWidth={4} />
    <circle cx={120} cy={45} r={14} fill={GOLD} opacity={0.8} />
  </svg>
);

/** A head in profile, facing right; `dot` shows the imagined witness behind the eyes. */
const Head: React.FC<{ dot: number; o?: number; dash?: boolean }> = ({ dot, o = 1, dash }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
    <circle cx={160} cy={140} r={16 + 4 * Math.sin(dot * 6)} fill={GOLD} opacity={dot} style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }} />
  </svg>
);

const Note: React.FC = () => (
  <svg width={80} height={90} viewBox="0 0 80 90" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
    <path d="M30 70 L30 15 L70 8 L70 60" fill="none" stroke={TEAL} strokeWidth={5} />
    <ellipse cx={22} cy={72} rx={12} ry={9} fill={TEAL} /><ellipse cx={62} cy={64} rx={12} ry={9} fill={TEAL} />
  </svg>
);
const Palette: React.FC = () => (
  <svg width={100} height={80} viewBox="0 0 100 80">
    {[ROSE, GOLD, TEAL, VIOLET].map((c, i) => <circle key={i} cx={20 + i * 20} cy={40 + (i % 2) * 12} r={14} fill={c} style={{ filter: `drop-shadow(0 0 6px ${c})` }} />)}
  </svg>
);
const Thought: React.FC = () => (
  <svg width={130} height={100} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
    <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={3.5} />
    <circle cx={20} cy={84} r={6} fill={VIOLET} /><circle cx={8} cy={96} r={3.5} fill={VIOLET} />
  </svg>
);
const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);
const Eye: React.FC<{ color?: string }> = ({ color = TEAL }) => (
  <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M5 40 Q70 -10 135 40 Q70 90 5 40 Z" fill={`${color}22`} stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={18} fill={color} />
  </svg>
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

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

// ---------------------------------------------------------------- scenes
const NearScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <At x={520} y={450} s={pop(t, fps, c("A cup"))}><Cup /></At>
      <At x={960} y={440} s={pop(t, fps, c("A window"))}><Window /></At>
      <At x={1400} y={440} s={pop(t, fps, c("Your own hand"))}><Hand size={180} /></At>
      <At x={960} y={180} o={ramp(t, c("Look at anything near you", 0.3), 0.6)}><Glow color={CHALK} size={44} serif>look at anything near you</Glow></At>
    </AbsoluteFill>
  );
};

const WitnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const w = ramp(t, c("A quiet witness"), 0.8);
  const hx = 700, hy = 470, ex = 860, ey = 400;   // head centre and eye position
  const rays = [
    { at: c("Sounds are heard by someone"), x: 1380, y: 230, icon: <Note />, label: "heard by someone", col: TEAL },
    { at: c("Colours are seen by someone"), x: 1440, y: 460, icon: <Palette />, label: "seen by someone", col: GOLD },
    { at: c("Thoughts seem to belong"), x: 1380, y: 690, icon: <Thought />, label: "someone's thought", col: VIOLET },
  ];
  return (
    <AbsoluteFill>
      <At x={hx} y={hy} s={pop(t, fps, c("seeing seems to happen from somewhere"))}><Head dot={w} /></At>
      <At x={560} y={200} o={w}><Glow color={GOLD} size={36}>a witness behind the eyes</Glow></At>
      {rays.map((r, i) => (
        <React.Fragment key={i}>
          <Flow x1={ex} y1={ey} x2={r.x - 90} y2={r.y} color={r.col} p={ramp(t, r.at, 0.6)} />
          <At x={r.x} y={r.y - 20} s={pop(t, fps, r.at + 0.2)}>{r.icon}</At>
          <At x={r.x} y={r.y + 50} o={ramp(t, r.at + 0.3, 0.4)}><Glow color={r.col} size={28}>{r.label}</Glow></At>
        </React.Fragment>
      ))}
      <At x={700} y={790} o={ramp(t, c("an obvious fact"), 0.5)}><Chip color={GOLD} size={34}>not a belief · an obvious fact</Chip></At>
    </AbsoluteFill>
  );
};

const AnattaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const search = c("the observer cannot be found");
  const u = ramp(t, search - 0.2, 2.4);
  const lx = 640 + 260 * Math.cos(u * Math.PI * 2), ly = 470 + 140 * Math.sin(u * Math.PI * 2);
  const gone = ramp(t, search + 0.4, 1.5);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 90, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="anatta" at={c("The realization called anatta")} size={110} />
      </div>
      <At x={960} y={250} o={ramp(t, c("means no self"), 0.5)}><Glow color={CHALK} size={40}>no self</Glow></At>
      <At x={640} y={500} s={pop(t, fps, c("The realization called anatta") + 0.4)}><Head dot={1 - gone} dash={gone > 0.5} /></At>
      <At x={lx + 120} y={ly} o={between(t, search - 0.2, search + 2.6)}><Lens /></At>
      <At x={1320} y={500} o={ramp(t, search + 1.6, 0.6)}><Glow color={ICE} size={56} serif>not found</Glow></At>
    </AbsoluteFill>
  );
};

const NotScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const never = c("simply never there");
  return (
    <AbsoluteFill>
      <Struck x={520} y={330} at={c("Not because it has disappeared", 0.4)} strikeAt={c("Not because it has disappeared") + 0.9} color={DIM}>disappeared</Struck>
      <Struck x={960} y={330} at={c("merged with the universe", 0.4)} strikeAt={c("merged with the universe") + 0.9} color={DIM}>merged with the universe</Struck>
      <Struck x={1400} y={330} at={c("became infinite", 0.4)} strikeAt={c("became infinite") + 0.8} color={DIM}>became infinite</Struck>
      <div style={{ position: "absolute", top: 480, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="never there as a thing" at={never} size={84} color={ICE} top="#F0FBFF" />
      </div>
      {Array.from({ length: 10 }).map((_, i) => (
        <At key={i} x={560 + rand(i) * 800} y={640 + rand(i + 3) * 120} o={ramp(t, never + 0.8 + i * 0.06, 0.4) * 0.5}>
          <div style={{ width: 14, height: 14, borderRadius: "50%", border: `2px dashed ${ICE}` }} />
        </At>
      ))}
    </AbsoluteFill>
  );
};

const SimpleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const voidAt = c("not a blank void"), ucAt = c("hidden universal consciousness");
  const part2 = c("Experience becomes simpler", 0.6);
  const out1 = ramp(t, part2, 0.5);
  const acts = [["seeing", TEAL], ["hearing", GOLD], ["tasting", ROSE], ["thinking", VIOLET]] as const;
  const walk = c("Walking unfolds");
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - out1 }}>
        <At x={620} y={450} s={pop(t, fps, voidAt - 0.2)}>
          <div style={{ width: 230, height: 230, borderRadius: "50%", background: "radial-gradient(circle, #000 60%, #1b1730)", boxShadow: "0 0 60px #000" }} />
          <Glow color={DIM} size={30} style={{ marginTop: 12 }}>a blank void</Glow>
        </At>
        <Crossed x={620} y={450} at={voidAt + 0.8} size={90} />
        <At x={1300} y={450} s={pop(t, fps, ucAt - 0.2)}><Orb size={240} color={GOLD} /><Glow color={GOLD} size={30} style={{ marginTop: 12 }}>a universal consciousness</Glow></At>
        <Crossed x={1300} y={450} at={ucAt + 1.0} size={90} />
      </AbsoluteFill>
      <Scene from={part2} to={1e9}>
        {acts.map(([w, col], i) => (
          <At key={i} x={420 + i * 360} y={300} s={pop(t, fps, c("There is seeing") + i * 0.35)}><Glow color={col} size={58} serif>{w}</Glow></At>
        ))}
        <At x={700} y={540} s={pop(t, fps, c("no seer standing behind", 0.3))}><Eye /></At>
        <At x={560} y={540} o={between(t, c("no seer standing behind"), c("no seer standing behind") + 2.4)}><Head dot={0} o={0.35} dash /></At>
        <Crossed x={560} y={540} at={c("no seer standing behind") + 0.8} size={70} />
        <At x={1200} y={540} o={ramp(t, c("The hearing needs no hearer"), 0.5)}><Glow color={GOLD} size={40}>hearing, no hearer</Glow></At>
        {Array.from({ length: 6 }).map((_, i) => (
          <At key={i} x={520 + i * 170} y={760 - (i % 2) * 30} o={ramp(t, walk + i * 0.3, 0.3)}>
            <svg width={50} height={70} viewBox="0 0 50 70"><ellipse cx={25} cy={40} rx={16} ry={26} fill={`${CHALK}55`} /><circle cx={25} cy={8} r={6} fill={`${CHALK}55`} /></svg>
          </At>
        ))}
        <At x={1560} y={760} o={ramp(t, walk + 1.2, 0.5)}><Glow color={CHALK} size={30}>walking, no walker apart</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const RainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rain = c("The sound of rain", 0.4), sun = c("The warmth of the sun");
  return (
    <AbsoluteFill>
      {Array.from({ length: 50 }).map((_, i) => {
        const x = 300 + rand(i) * 620, y = 120 + (((t - rain) * (380 + rand(i + 1) * 200) + rand(i + 2) * 700) % 700);
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: 3, height: 26, borderRadius: 2, background: ICE, opacity: ramp(t, rain, 0.6) * 0.7 }} />;
      })}
      <At x={610} y={800} o={ramp(t, rain + 0.5, 0.5)}><Glow color={ICE} size={40} serif>just rain</Glow></At>
      <At x={1380} y={380} s={pop(t, fps, sun)}><Sun size={240} rot={t * 12} /></At>
      <At x={1380} y={380} o={ramp(t, sun, 1.0) * 0.7}><div style={{ width: 640, height: 640, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}44, transparent 65%)` }} /></At>
      <At x={1380} y={640} o={ramp(t, sun + 0.5, 0.5)}><Glow color={GOLD} size={40} serif>just warmth</Glow></At>
      <At x={960} y={170} o={ramp(t, c("Nothing watches from behind"), 0.6)}><Glow color={CHALK} size={40}>no one watching · no one owning</Glow></At>
    </AbsoluteFill>
  );
};

const IntimateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gapAt = c("the gap between observer and observed");
  const close = ramp(t, gapAt + 0.6, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={160} o={ramp(t, c("startlingly intimate", 0.4), 0.5)}><Glow color={GOLD} size={46} serif>startlingly intimate</Glow></At>
      <At x={960} y={260} o={ramp(t, c("simply met"), 0.5)}><Glow color={CHALK} size={34}>not met from somewhere · simply met</Glow></At>
      <div style={{ position: "absolute", top: 330, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="in the seen, only the seen" at={c("in the seen, only the seen")} size={66} color={ICE} top="#F0FBFF" />
      </div>
      <At x={620 + 200 * close} y={600} s={pop(t, fps, gapAt - 0.2)} o={1 - close * 0.6}><Chip color={GOLD} size={38}>observer</Chip></At>
      <At x={1300 - 200 * close} y={600} s={pop(t, fps, gapAt)} o={1 - close * 0.6}><Chip color={TEAL} size={38}>observed</Chip></At>
      <At x={960} y={600} o={ramp(t, gapAt + 0.2, 0.4) * (1 - close)}><Glow color={WARM} size={34}>gap?</Glow></At>
      <At x={960} y={720} o={ramp(t, c("a concept laid over"), 0.5)}><Chip color={WARM} size={32}>a concept laid over experience</Chip></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const v = c("Colours become vivid", 0.3);
  const own = c("Thoughts lose their heavy ownership");
  return (
    <AbsoluteFill>
      {Array.from({ length: 18 }).map((_, i) => {
        const a = (i / 18) * Math.PI * 2, r = 120 + 260 * ramp(t, v + i * 0.04, 1.2);
        return <At key={i} x={960 + r * Math.cos(a)} y={430 + r * 0.6 * Math.sin(a)} s={pop(t, fps, v + i * 0.04)}>
          <Orb size={34 + (i % 3) * 14} color={[ROSE, GOLD, TEAL, VIOLET, GREEN, ICE][i % 6]} /></At>;
      })}
      <At x={960} y={430} s={pop(t, fps, own)}><Thought /></At>
      <At x={1080} y={340} o={between(t, own, own + 2.0)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>mine</Chip><Strike at={own + 0.8} /></div></At>
      <At x={960} y={790} o={ramp(t, c("exactly where it always was"), 0.6)}><Glow color={CHALK} size={40} serif>everything where it was · everything different</Glow></At>
    </AbsoluteFill>
  );
};

const NotYetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 320, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a decisive liberation" at={c("a decisive liberation")} size={96} />
      </div>
      <At x={960} y={560} o={ramp(t, c("not yet emptiness"), 0.5)}><Chip color={WARM} size={52}>not yet emptiness</Chip></At>
    </AbsoluteFill>
  );
};

const WorldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const subj = c("Anatta removes the subject");
  const things = [["space", ICE], ["time", GOLD], ["matter", ROSE], ["causes", TEAL], ["relations", VIOLET]] as const;
  const glow = ramp(t, c("the world has not"), 0.6);
  return (
    <AbsoluteFill>
      <At x={500} y={420} s={pop(t, fps, subj - 0.2)}><Head dot={1 - ramp(t, subj + 0.6, 0.6)} o={1 - ramp(t, subj + 1.2, 0.8) * 0.7} /></At>
      <Crossed x={500} y={420} at={subj + 0.8} size={110} />
      <At x={500} y={700} o={ramp(t, subj, 0.5)}><Glow color={GOLD} size={32}>the subject · removed</Glow></At>
      {things.map(([w, col], i) => (
        <At key={i} x={1180 + (i % 2) * 260} y={240 + i * 105} s={pop(t, fps, c("space, time, matter") + i * 0.25)}>
          <div style={{ padding: "16px 34px", borderRadius: 12, border: `3px solid ${col}`, background: `${col}${glow > 0.5 ? "55" : "2a"}`,
            boxShadow: `0 0 ${10 + 30 * glow}px ${col}`, fontFamily: SERIF, fontSize: 40, color: CHALK }}>{w}</div>
        </At>
      ))}
      <At x={1300} y={160} o={ramp(t, c("the way the world itself is pictured"), 0.5)}><Glow color={CHALK} size={34}>the world, still pictured as solid</Glow></At>
      <At x={960} y={800} o={ramp(t, c("The observer has disappeared"), 0.5)}><Glow color={GOLD} size={42} serif>the observer gone · the world remains</Glow></At>
    </AbsoluteFill>
  );
};

const TensionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const flu = Math.min(c("centreless and fluid"), c("a strange tension") + 0.8);
  const sep = Math.min(c("separate things"), c("a strange tension") + 1.6);
  const xs = Array.from({ length: 50 }, (_, i) => 260 + i * 12);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("a strange tension", 0.3), 0.5)}><Glow color={WARM} size={46} serif>a strange tension</Glow></At>
      <Svg style={{ opacity: ramp(t, flu, 0.6) }}>
        {[0, 1, 2, 3].map((k) => (
          <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${420 + k * 60 + 26 * Math.sin(x / 50 - t * 2 + k)}`).join(" ")}
            fill="none" stroke={[TEAL, ICE, VIOLET, GOLD][k]} strokeWidth={4} opacity={0.8} />
        ))}
      </Svg>
      <At x={560} y={700} o={ramp(t, flu, 0.5)}><Glow color={TEAL} size={38}>experience · centreless</Glow></At>
      {Array.from({ length: 6 }).map((_, i) => (
        <At key={i} x={1180 + (i % 3) * 170} y={430 + Math.floor(i / 3) * 150} s={pop(t, fps, sep + i * 0.12)}>
          <div style={{ width: 110, height: 110, borderRadius: 10, border: `3px solid ${CHALK}`, background: "rgba(200,200,220,0.25)" }} />
        </At>
      ))}
      <At x={1350} y={700} o={ramp(t, sep, 0.5)}><Glow color={CHALK} size={38}>thought · separate things</Glow></At>
      <At x={560} y={790} o={ramp(t, c("Experience says one thing"), 0.4)}><Chip color={TEAL} size={30}>says one thing</Chip></At>
      <At x={1350} y={790} o={ramp(t, c("Thought says another"), 0.4)}><Chip color={DIM} size={30}>says another</Chip></At>
    </AbsoluteFill>
  );
};

const Pendulum: React.FC<{ phase: number; color: string; label: string }> = ({ phase, color, label }) => {
  const { t } = useT();
  const a = Math.sin(t * 2.2 + phase) * 28;
  return (
    <div style={{ position: "relative", width: 260, height: 380, textAlign: "center" }}>
      <svg width={260} height={340} viewBox="0 0 260 340" style={{ overflow: "visible" }}>
        <line x1={40} y1={10} x2={220} y2={10} stroke={DIM} strokeWidth={6} strokeLinecap="round" />
        <g transform={`rotate(${a} 130 10)`}>
          <line x1={130} y1={10} x2={130} y2={260} stroke={color} strokeWidth={4} />
          <circle cx={130} cy={280} r={30} fill={color} style={{ filter: `drop-shadow(0 0 14px ${color})` }} />
        </g>
      </svg>
      <Glow color={color} size={34}>{label}</Glow>
    </div>
  );
};

const DesyncScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const step = c("falling out of step");
  const shift = ramp(t, step, 2.5) * 2.4;
  const words = ["object", "inside", "outside", "cause", "awareness"];
  const wAt = c("Words like object");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("this book's reading", 0.3), 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      <div style={{ position: "absolute", top: 170, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="desynchronization" at={c("this book's reading") + 0.8} size={84} />
      </div>
      <At x={700} y={500} s={pop(t, fps, c("this book's reading") + 0.3)}><Pendulum phase={0} color={TEAL} label="experience" /></At>
      <At x={1220} y={500} s={pop(t, fps, c("this book's reading") + 0.5)}><Pendulum phase={shift} color={GOLD} label="view" /></At>
      {words.map((w, i) => {
        const at = wAt + i * 0.45;
        const wob = Math.sin(t * 3 + i) * 6 * ramp(t, at + 0.5, 0.5);
        return <At key={i} x={360 + i * 300} y={790} r={wob} o={ramp(t, at, 0.4) * (1 - 0.5 * ramp(t, at + 1.5, 1))}><Chip color={DIM} size={30}>{w}</Chip></At>;
      })}
    </AbsoluteFill>
  );
};

const ExertionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const walk = c("Walking no longer feels"), hear = c("Hearing no longer feels"), whole = c("take part completely");
  const field = ramp(t, whole, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, c("something new begins", 0.3), 0.5)}><Glow color={CHALK} size={40} serif>something new shows itself</Glow></At>
      <At x={600 + 80 * ((t - walk) % 4) * (1 - field)} y={460} s={pop(t, fps, walk)} o={1 - field * 0.7}>
        <svg width={120} height={220} viewBox="0 0 120 220"><circle cx={60} cy={30} r={22} fill="none" stroke={CHALK} strokeWidth={5} />
          <path d={`M60 55 L60 130 M60 75 L${30 + 10 * Math.sin(t * 5)} 110 M60 75 L${90 - 10 * Math.sin(t * 5)} 110 M60 130 L${35 + 12 * Math.sin(t * 5)} 200 M60 130 L${85 - 12 * Math.sin(t * 5)} 200`}
            stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" /></svg>
      </At>
      <At x={600} y={640} o={ramp(t, walk + 0.4, 0.5) * (1 - field)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>a person moving through space</Chip><Strike at={walk + 1.4} /></div></At>
      <At x={1300} y={460} s={pop(t, fps, hear)} o={1 - field * 0.7}><Note /></At>
      <At x={1300} y={640} o={ramp(t, hear + 0.4, 0.5) * (1 - field)}><div style={{ position: "relative" }}><Chip color={DIM} size={28}>a mind receiving a sound</Chip><Strike at={hear + 1.4} /></div></At>
      <At x={960} y={460} o={field}><div style={{ width: 900, height: 600, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}55, ${GOLD}18 45%, transparent 70%)` }} /></At>
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2 + t * 0.2, r = 300 * field;
        return <At key={i} x={960 + r * Math.cos(a)} y={460 + r * 0.55 * Math.sin(a)} o={field}><Orb size={26} color={[GOLD, TEAL, ROSE, VIOLET][i % 4]} /></At>;
      })}
      <At x={960} y={460} o={ramp(t, whole + 0.4, 0.6)}><Glow color="#FFFFFF" size={44} serif>whole in itself</Glow></At>
      <div style={{ position: "absolute", top: 720, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="total exertion" at={c("called this total exertion")} size={90} />
      </div>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const end = c("ready to be seen through");
  const dash = ramp(t, end + 0.3, 1.2);
  return (
    <AbsoluteFill>
      <At x={560} y={440} s={pop(t, fps, c("The witness is gone", 0.3))} o={1 - ramp(t, c("The witness is gone") + 0.8, 1.0)}><Head dot={0} /></At>
      <At x={1240} y={440} s={pop(t, fps, c("The witness is gone") + 1.4)}>
        <svg width={420} height={420} viewBox="-210 -210 420 420" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ICE})` }}>
          <circle r={180} fill={`rgba(80,140,200,${0.25 * (1 - dash)})`} stroke={ICE} strokeWidth={4} strokeDasharray={dash > 0.3 ? "14 12" : undefined} />
          <ellipse rx={180} ry={60} fill="none" stroke={ICE} strokeWidth={2} opacity={0.6} strokeDasharray={dash > 0.3 ? "10 10" : undefined} />
          <ellipse rx={70} ry={180} fill="none" stroke={ICE} strokeWidth={2} opacity={0.6} strokeDasharray={dash > 0.3 ? "10 10" : undefined} />
        </svg>
      </At>
      <At x={1240} y={700} o={ramp(t, end, 0.5)}><Glow color={ICE} size={40} serif>the world, next</Glow></At>
      <Ring x={1240} y={440} p={ramp(t, end + 0.2, 1.6)} r0={180} r1={360} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["near", 0], ["witness", c("seeing seems to happen from somewhere", 0.6)], ["anatta", c("The realization called anatta", 0.6)],
    ["simple", c("not a blank void", 0.6)], ["vivid", c("The sound of rain", 0.6)], ["anatta", c("startlingly intimate", 0.6)],
    ["vivid", c("Colours become vivid", 0.6)], ["world", c("a decisive liberation", 0.6)], ["desync", c("a strange tension", 0.6)],
    ["exertion", c("something new begins", 0.6)], ["world", c("The witness is gone", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("seeing seems to happen from somewhere", 0.9)], <NearScene />],
    [S("seeing seems to happen from somewhere", "The realization called anatta"), <WitnessScene />],
    [S("The realization called anatta", "Not because it has disappeared"), <AnattaScene />],
    [S("Not because it has disappeared", "not a blank void"), <NotScene />],
    [S("not a blank void", "The sound of rain"), <SimpleScene />],
    [S("The sound of rain", "startlingly intimate"), <RainScene />],
    [S("startlingly intimate", "Colours become vivid"), <IntimateScene />],
    [S("Colours become vivid", "a decisive liberation"), <VividScene />],
    [S("a decisive liberation", "Anatta removes the subject"), <NotYetScene />],
    [S("Anatta removes the subject", "a strange tension"), <WorldScene />],
    [S("a strange tension", "this book's reading"), <TensionScene />],
    [S("this book's reading", "something new begins"), <DesyncScene />],
    [S("something new begins", "The witness is gone"), <ExertionScene />],
    [S("The witness is gone", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
