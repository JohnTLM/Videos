// Anatta to Emptiness, Bonus: Beyond Cause and Effect. Explainer drawings timed to the narration.
// Arc: the misreading (a causeless realm, a producing ground) -> three assumptions and their testing -> analysis answers
// a habit -> TWO CLAIMS held together (no producing foundation; appearances do arise when conditions align) -> the flame
// and the dilemma (producer or nothing) -> three senses of cause -> the cause is its designation -> never rivals ->
// the last "why" stops applying -> spontaneous presence -> no owner -> just seeing.
// Stance: no ground, foundation, presence or emptiness is drawn as a base layer; a ground is shown only to remove it.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Beyond cause and effect", "easy to misread", "a realm where causes stop working", "a ground that produces everything",
  "A careful reader will ask", "a hidden substrate", "one last exemption",
  "three quiet assumptions", "an essence of its own", "a power it carries into the effect", "a deeper foundation underneath",
  "tests each one", "The chariot is not found in the wheels", "The power of a cause dissolves", "one more whole with parts",
  "Analysis is not meant to run forever", "the habit of fixing things", "the searching ends",
  "two claims have to be held together",
  "the analysis leaves no deeper foundation", "No essence, no hidden power, no substrate",
  "appearances do arise", "present and aligned", "A wick, fuel and air come together", "there is a flame",
  "the two seem to cancel", "Watch the flame", "Remove the air and it goes out", "The conditions matter",
  "So the mind presses", "Does the fuel produce the flame", "we have a producer", "does the flame come from nothing",
  "a groundless event", "Both answers share one hidden picture", "a separate item",
  "Three meanings of cause", "A producer that stands on its own", "the first claim removes",
  "let something appear", "the second claim keeps", "how to light a fire", "a name we give",
  "nothing over and above that naming", "not a thin cover", "the whole of what a cause is",
  "the two claims were never rivals", "Nothing outside the alignment produces the flame", "the alignment is what appears",
  "Told in sequence", "Seen undivided", "just the burning",
  "A last question can still survive", "Why does anything appear at all", "a reason behind the conditions",
  "the question has nothing to be about", "It stops applying",
  "calls this appearing spontaneous presence", "In this book's reading", "one from analysis, one from the inside",
  "no owner stands behind it", "not a self showing its contents", "The alignment is the appearing", "the burning itself",
  "Seeing is just seeing", "Hearing is just hearing", "recognised, not achieved", "Nothing needs to be produced",
];

// deeper golds and indigos for this series (VIDEO-SPEC: Anatta to Emptiness, section 5)
const M = {
  open: { a: "rgba(70,55,140,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(30,90,120,0.3)" },
  analysis: { a: "rgba(50,50,120,0.5)", b: "rgba(150,100,50,0.35)", c: "rgba(40,80,120,0.3)" },
  claims: { a: "rgba(40,110,130,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(80,60,150,0.32)" },
  flame: { a: "rgba(150,80,40,0.45)", b: "rgba(70,55,140,0.45)", c: "rgba(190,140,60,0.32)" },
  senses: { a: "rgba(60,60,140,0.5)", b: "rgba(60,140,130,0.36)", c: "rgba(170,130,60,0.3)" },
  presence: { a: "rgba(200,155,70,0.5)", b: "rgba(90,70,170,0.4)", c: "rgba(60,150,140,0.38)" },
  free: { a: "rgba(190,145,60,0.48)", b: "rgba(70,60,155,0.42)", c: "rgba(50,140,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
/** A candle: wax (fuel), wick, air drawn in from both sides, and a living flame. Each part fades in on its own. */
const Candle: React.FC<{ id: string; lit?: number; air?: number; fuel?: number; wick?: number; scale?: number; apart?: number }> =
  ({ id, lit = 1, air = 1, fuel = 1, wick = 1, scale = 1, apart = 0 }) => {
    const { t } = useT();
    const f = lit * (1 + 0.07 * Math.sin(t * 9) + 0.05 * Math.sin(t * 14));
    return (
      <svg width={360 * scale} height={460 * scale} viewBox="0 0 360 460" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id={`${id}f`} cx="50%" cy="70%" r="60%"><stop offset="0%" stopColor="#FFF6D8" /><stop offset="45%" stopColor={GOLD} /><stop offset="100%" stopColor={WARM} stopOpacity={0} /></radialGradient>
          <radialGradient id={`${id}h`} cx="50%" cy="50%" r="50%"><stop offset="0%" stopColor={GOLD} stopOpacity={0.5} /><stop offset="100%" stopColor={GOLD} stopOpacity={0} /></radialGradient>
        </defs>
        <ellipse cx={180} cy={150} rx={170 * lit} ry={150 * lit} fill={`url(#${id}h)`} opacity={lit} />
        {/* air: two curved arrows drawn in toward the flame */}
        <g opacity={air} transform={`translate(${-120 * apart} 0)`}>
          <path d={`M10 230 Q70 ${200 + 8 * Math.sin(t * 2)} 120 175`} fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" strokeDasharray="14 10" />
          <path d="M110 162 L124 176 L104 184" fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g opacity={air} transform={`translate(${120 * apart} 0)`}>
          <path d={`M350 230 Q290 ${200 + 8 * Math.sin(t * 2 + 1)} 240 175`} fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" strokeDasharray="14 10" />
          <path d="M250 162 L236 176 L256 184" fill="none" stroke={ICE} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
        </g>
        {lit > 0.01 && <path d={`M180 ${190 - 110 * f} Q${222} ${150} 180 190 Q138 150 180 ${190 - 110 * f} Z`} fill={`url(#${id}f)`} />}
        <g opacity={wick} transform={`translate(0 ${-90 * apart})`}><path d="M180 188 L180 222" stroke={CHALK} strokeWidth={5} strokeLinecap="round" /></g>
        <g opacity={fuel} transform={`translate(0 ${60 * apart})`}>
          <rect x={120} y={222} width={120} height={200} rx={10} fill={`${GOLD}26`} stroke={GOLD} strokeWidth={5} />
          <path d="M120 238 Q180 254 240 238" fill="none" stroke={GOLD} strokeWidth={4} opacity={0.7} />
        </g>
      </svg>
    );
  };

/** A chariot in side view whose body, wheels and pole can be pulled apart. */
const Chariot: React.FC<{ apart?: number; color?: string }> = ({ apart = 0, color = GOLD }) => {
  const st = { stroke: color, strokeWidth: 6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={220} r={62} fill={`${color}18`} {...st} />
      {[0, 1, 2, 3].map((k) => <line key={k} x1={cx + 60 * Math.cos(k * Math.PI / 4)} y1={220 + 60 * Math.sin(k * Math.PI / 4)}
        x2={cx - 60 * Math.cos(k * Math.PI / 4)} y2={220 - 60 * Math.sin(k * Math.PI / 4)} {...st} strokeWidth={3} />)}
    </g>
  );
  return (
    <svg width={460} height={320} viewBox="0 0 460 320" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color}66)` }}>
      <g transform={`translate(${-40 * apart} ${-90 * apart})`}><path d="M90 80 L330 80 L310 170 L110 170 Z" fill={`${color}22`} {...st} /></g>
      <g transform={`translate(${-90 * apart} ${50 * apart})`}>{wheel(140)}</g>
      <g transform={`translate(${90 * apart} ${50 * apart})`}>{wheel(290)}</g>
      <g transform={`translate(${120 * apart} ${-30 * apart})`}><path d="M330 140 L450 110" {...st} /></g>
    </svg>
  );
};

/** A heavy slab drawn to show something being taken as a ground (only ever shown in order to remove it). */
const Slab: React.FC<{ w: number; p: number; label?: string }> = ({ w, p, label }) => (
  <div style={{ width: w * p, height: 66, borderRadius: 8, margin: "0 auto",
    background: `linear-gradient(180deg, ${WARM}66, #3a1d1d)`, border: `3px solid ${WARM}`, boxShadow: `0 0 30px ${WARM}66`,
    display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
    {label && p > 0.8 && <span style={{ fontFamily: SERIF, fontSize: 32, color: CHALK, whiteSpace: "nowrap" }}>{label}</span>}
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

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Num: React.FC<{ n: string; color: string; size?: number }> = ({ n, color, size = 64 }) => (
  <div style={{ width: size * 1.5, height: size * 1.5, borderRadius: "50%", border: `4px solid ${color}`, background: `${color}22`,
    boxShadow: `0 0 24px ${color}88`, display: "flex", alignItems: "center", justifyContent: "center",
    fontFamily: SERIF, fontSize: size, color: CHALK, fontWeight: 600 }}>{n}</div>
);

const Head: React.FC<{ text: string; at: number; y?: number; size?: number; color?: string }> = ({ text, at, y = 160, size = 76, color }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>
    <Reveal text={text} at={at} size={size} color={color} />
  </div>
);

// ---------------------------------------------------------------- scenes
const OpeningScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const realm = c("a realm where causes stop working"), ground = c("a ground that produces everything");
  return (
    <AbsoluteFill>
      <Head text="beyond cause and effect" at={c("Beyond cause and effect", 0.1)} size={84} />
      <At x={960} y={300} o={ramp(t, c("easy to misread"), 0.5)}><Glow color={DIM} size={34}>easy to misread, two ways</Glow></At>
      <At x={520} y={480} s={pop(t, fps, realm)}>
        <svg width={260} height={160} viewBox="0 0 260 160" style={{ overflow: "visible" }}>
          {[0, 1, 2].map((i) => <circle key={i} cx={50 + i * 80} cy={80} r={34} fill={`${VIOLET}22`} stroke={VIOLET} strokeWidth={4} strokeDasharray="10 8" />)}
          <path d="M84 80 L96 80 M164 80 L176 80" stroke={DIM} strokeWidth={4} />
        </svg>
      </At>
      <Struck x={520} y={640} at={realm + 0.4} strikeAt={realm + 2.2} color={VIOLET}>causes stop working?</Struck>
      <At x={1400} y={420} o={ramp(t, ground + 0.4, 0.6)}>
        <div style={{ display: "flex", gap: 22 }}>{[TEAL, ROSE, ICE, GREEN].map((col, i) => <Orb key={i} size={30} color={col} />)}</div>
      </At>
      <At x={1400} y={520} o={ramp(t, ground, 0.5)}><Slab w={520} p={ramp(t, ground, 0.8)} label="a ground that produces" /></At>
      <At x={1400} y={640} o={ramp(t, ground + 1.2, 0.5)}><Glow color={WARM} size={30}>…itself produced by nothing?</Glow></At>
    </AbsoluteFill>
  );
};

const ReaderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("a hidden substrate"), ex = c("one last exemption");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("A careful reader will ask"), 0.5)}><Glow color={DIM} size={32}>a careful reader asks</Glow></At>
      <At x={960} y={260} o={ramp(t, sub - 0.1, 0.5)}><Glow color={CHALK} size={50} serif>a hidden substrate?</Glow></At>
      <At x={960} y={420} o={ramp(t, sub + 0.3, 0.5)}>
        <div style={{ display: "flex", gap: 40 }}>{[TEAL, ROSE, ICE, GREEN, VIOLET].map((col, i) => <Orb key={i} size={34} color={col} />)}</div>
      </At>
      <At x={960} y={540} o={ramp(t, sub + 0.2, 0.5)}><Slab w={760} p={ramp(t, sub + 0.2, 0.9)} label="a producer underneath" /></At>
      <At x={1320} y={660} s={pop(t, fps, ex)}><Chip color={GOLD} size={34}>exempt from all causes</Chip></At>
      <At x={600} y={680} o={ramp(t, ex + 0.6, 0.5)}><Glow color={WARM} size={44} serif>?</Glow></At>
    </AbsoluteFill>
  );
};

const AssumptionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const es = c("an essence of its own"), pw = c("a power it carries into the effect"), fd = c("a deeper foundation underneath");
  return (
    <AbsoluteFill>
      <Head text="three quiet assumptions" at={c("three quiet assumptions", 0.1)} y={110} size={72} />
      {/* 1 essence: a hard core inside a thing */}
      <At x={420} y={460} s={pop(t, fps, es)}>
        <div style={{ position: "relative", width: 220, height: 220, borderRadius: 28, border: `5px solid ${TEAL}`, background: `${TEAL}1c` }}>
          <div style={{ position: "absolute", left: 80, top: 80, width: 60, height: 60, borderRadius: "50%", background: GOLD, boxShadow: `0 0 26px ${GOLD}` }} />
        </div>
      </At>
      <At x={420} y={650} o={ramp(t, es + 0.3, 0.5)}><Chip color={TEAL} size={32}>an essence of its own</Chip></At>
      {/* 2 power: a gold token carried from cause to effect */}
      <At x={860} y={460} s={pop(t, fps, pw)}><Orb size={70} color={VIOLET} /></At>
      <At x={1100} y={460} s={pop(t, fps, pw + 0.2)}><Orb size={70} color={ROSE} /></At>
      <Flow x1={900} y1={460} x2={1060} y2={460} color={GOLD} p={ramp(t, pw + 0.4, 0.8)} />
      <At x={860 + 240 * ramp(t, pw + 0.8, 1.4)} y={400} o={ramp(t, pw + 0.6, 0.4)}><Orb size={26} color={GOLD} core={1} /></At>
      <At x={980} y={650} o={ramp(t, pw + 0.3, 0.5)}><Chip color={VIOLET} size={32}>a power carried across</Chip></At>
      {/* 3 foundation: a slab beneath the meeting of conditions */}
      <At x={1520} y={420} o={ramp(t, fd - 0.2, 0.5)}>
        <div style={{ display: "flex", gap: 22 }}>{[TEAL, ROSE, ICE].map((col, i) => <Orb key={i} size={34} color={col} />)}</div>
      </At>
      <At x={1520} y={520} o={ramp(t, fd, 0.5)}><Slab w={360} p={ramp(t, fd, 0.8)} label="foundation" /></At>
      <At x={1520} y={650} o={ramp(t, fd + 0.3, 0.5)}><Chip color={WARM} size={32}>a foundation beneath</Chip></At>
    </AbsoluteFill>
  );
};

const TestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ch = c("The chariot is not found in the wheels"), pw = c("The power of a cause dissolves"), wh = c("one more whole with parts");
  const dis = ramp(t, pw + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("tests each one"), 0.5)}><Glow color={CHALK} size={46} serif>each one, tested</Glow></At>
      <At x={420} y={430} s={pop(t, fps, c("tests each one", 0.0))}><Chariot apart={ramp(t, ch + 0.2, 1.4)} /></At>
      <Struck x={420} y={660} at={ch + 0.4} strikeAt={ch + 1.8} color={DIM}>chariot in the parts?</Struck>
      <At x={960} y={430} s={pop(t, fps, pw - 0.3)} o={1 - 0.75 * dis} blur={8 * dis}><Chip color={VIOLET} size={40}>causal power</Chip></At>
      <At x={960} y={520} o={ramp(t, pw + 1.2, 0.6)}>
        <div style={{ padding: "10px 22px", borderRadius: 14, border: `3px dashed ${ICE}`, fontFamily: SERIF, fontSize: 32, color: ICE }}>a name, given by its effect</div>
      </At>
      <At x={1500} y={340} o={ramp(t, wh - 0.6, 0.5) * (1 - ramp(t, wh + 0.4, 0.5))}><Slab w={360} p={1} label="foundation" /></At>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={1356 + i * 96} y={420 + 40 * ramp(t, wh + 0.4, 0.8)} o={ramp(t, wh + 0.3, 0.4)}>
          <div style={{ width: 84, height: 60, borderRadius: 8, border: `3px solid ${[GOLD, TEAL, ROSE, ICE][i]}`, background: `${[GOLD, TEAL, ROSE, ICE][i]}22` }} />
        </At>
      ))}
      <At x={1500} y={600} o={ramp(t, wh + 0.9, 0.5)}><Glow color={TEAL} size={30}>one more whole, with parts</Glow></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const run = c("Analysis is not meant to run forever"), fix = c("the habit of fixing things"), end = c("the searching ends");
  const open = ramp(t, end + 0.2, 1.4);
  const a = t * 1.4;
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={run - 0.1} strikeAt={run + 1.4} color={DIM} size={36}>analysis, forever</Struck>
      <At x={960} y={230} o={ramp(t, fix - 0.4, 0.5)}><Glow color={CHALK} size={42} serif>analysis answers a habit</Glow></At>
      {/* the habit: a clamp holding a point fixed */}
      <At x={960} y={500} s={pop(t, fps, fix)}><Orb size={60} color={GOLD} core={1} /></At>
      <At x={960 - 110 - 200 * open} y={500} o={ramp(t, fix + 0.2, 0.4) * (1 - open)}><div style={{ width: 28, height: 260, borderRadius: 8, background: `${WARM}66`, border: `3px solid ${WARM}` }} /></At>
      <At x={960 + 110 + 200 * open} y={500} o={ramp(t, fix + 0.2, 0.4) * (1 - open)}><div style={{ width: 28, height: 260, borderRadius: 8, background: `${WARM}66`, border: `3px solid ${WARM}` }} /></At>
      <At x={960} y={760} o={ramp(t, fix + 0.4, 0.5) * (1 - open)}><Glow color={WARM} size={30}>the habit of fixing</Glow></At>
      {/* the search: a lens circling the clamp, which rests once the habit is seen through */}
      <At x={960 + 300 * Math.cos(a)} y={500 + 120 * Math.sin(a)} o={ramp(t, run, 0.5) * (1 - open)}>
        <div style={{ width: 90, height: 90, borderRadius: "50%", border: `5px solid ${ICE}`, background: `${ICE}18` }} />
      </At>
      <Ring x={960} y={500} p={ramp(t, end + 0.4, 2.2)} r0={120} r1={420} color={GOLD} />
      <At x={960} y={820} o={ramp(t, end + 0.3, 0.5)}><Glow color={GREEN} size={36}>seen through, the search ends</Glow></At>
    </AbsoluteFill>
  );
};

const TwoClaimsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("two claims have to be held together"), one = c("the analysis leaves no deeper foundation");
  const none = c("No essence, no hidden power, no substrate"), arise = c("appearances do arise");
  const aligned = c("present and aligned"), come = c("A wick, fuel and air come together"), flame = c("there is a flame");
  const gather = ramp(t, come + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <Head text="two claims, held together" at={two} y={90} size={70} />
      {/* claim 1 (left): no foundation from which appearance is produced */}
      <At x={300} y={300} s={pop(t, fps, one - 0.2)}><Num n="1" color={TEAL} size={52} /></At>
      <At x={620} y={300} o={ramp(t, one, 0.5)}><Glow color={CHALK} size={32}>no producing foundation</Glow></At>
      <At x={540} y={440} o={ramp(t, one + 0.3, 0.5) * (1 - ramp(t, none + 2.6, 0.6))}><Slab w={520} p={ramp(t, one + 0.3, 0.8)} label="deeper foundation" /></At>
      <Crossed x={540} y={440} at={none + 2.2} size={70} />
      {(["essence", "hidden power", "substrate"] as const).map((w, i) => (
        <Struck key={i} x={360 + i * 190} y={570} at={none + i * 0.5} strikeAt={none + 0.6 + i * 0.5} color={DIM} size={28}>{w}</Struck>
      ))}
      <At x={540} y={680} o={ramp(t, none + 2.8, 0.5)}><Glow color={TEAL} size={30}>nothing found doing the producing</Glow></At>
      {/* the divider: both stay on the board */}
      <Svg><DrawPath d="M960 260 L960 800" p={ramp(t, arise - 0.4, 0.8)} color={DIM} width={2} len={560} /></Svg>
      <At x={960} y={530} o={ramp(t, arise, 0.5)}><div style={{ background: "#0b0d14", padding: "6px 4px" }}><Glow color={GOLD} size={40} serif>+</Glow></div></At>
      {/* claim 2 (right): appearances do arise, when factors are present and aligned */}
      <At x={1180} y={300} s={pop(t, fps, arise - 0.2)}><Num n="2" color={GOLD} size={52} /></At>
      <At x={1500} y={300} o={ramp(t, arise, 0.5)}><Glow color={CHALK} size={32}>appearances do arise</Glow></At>
      <At x={1440} y={570} s={pop(t, fps, aligned)}>
        <Candle id="ae92a" lit={ramp(t, flame, 0.8)} air={ramp(t, aligned + 0.5, 0.5)} wick={ramp(t, aligned + 0.2, 0.5)} fuel={ramp(t, aligned, 0.5)}
          apart={1 - gather} scale={0.72} />
      </At>
      {([["wick", 1160, VIOLET], ["fuel", 1440, GOLD], ["air", 1720, ICE]] as const).map(([w, x, col], i) => (
        <At key={i} x={x + (1440 - x) * 0.25 * gather} y={760} o={ramp(t, aligned + 0.3 * i, 0.4)}><Chip color={col} size={28}>{w}</Chip></At>
      ))}
      <At x={1440} y={830} o={ramp(t, flame + 0.4, 0.5)}><Glow color={GOLD} size={30}>present and aligned: a flame</Glow></At>
    </AbsoluteFill>
  );
};

const FlameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cancel = c("the two seem to cancel"), watch = c("Watch the flame"), out = c("Remove the air and it goes out"), mat = c("The conditions matter");
  const clash = ramp(t, cancel + 0.2, 0.9);
  const noAir = ramp(t, out + 0.6, 0.6) * (1 - ramp(t, mat + 0.2, 0.6));
  const lit = Math.max(0, 1 - ramp(t, out + 1.0, 0.8)) + ramp(t, mat + 0.4, 0.8);
  return (
    <AbsoluteFill>
      <At x={760 + 120 * clash} y={170} s={pop(t, fps, cancel - 0.4)}><Num n="1" color={TEAL} size={42} /></At>
      <At x={1160 - 120 * clash} y={170} s={pop(t, fps, cancel - 0.2)}><Num n="2" color={GOLD} size={42} /></At>
      <Ring x={960} y={170} p={ramp(t, cancel + 1.0, 1.2)} r0={40} r1={200} color={WARM} />
      <At x={960} y={290} o={ramp(t, cancel + 0.8, 0.5) * (1 - ramp(t, watch, 0.5))}><Glow color={WARM} size={34}>they seem to cancel</Glow></At>
      <At x={960} y={560} s={pop(t, fps, watch - 0.2)}><Candle id="ae92b" lit={Math.min(1, lit)} air={1 - noAir} /></At>
      <At x={1440} y={460} o={ramp(t, out, 0.5) * (1 - ramp(t, mat, 0.5))}><Chip color={ICE} size={32}>air removed</Chip></At>
      <At x={1440} y={540} o={ramp(t, out + 1.2, 0.5) * (1 - ramp(t, mat, 0.5))}><Glow color={DIM} size={30}>it goes out</Glow></At>
      <At x={960} y={830} o={ramp(t, mat, 0.5)}><Glow color={GREEN} size={40} serif>the conditions matter</Glow></At>
    </AbsoluteFill>
  );
};

const DilemmaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const press = c("So the mind presses"), prod = c("Does the fuel produce the flame"), haveP = c("we have a producer");
  const nothing = c("does the flame come from nothing"), groundless = c("a groundless event");
  const share = c("Both answers share one hidden picture"), item = c("a separate item");
  const carry = ramp(t, prod + 0.6, 1.8);
  const fade = ramp(t, share, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, press, 0.5)}><Glow color={CHALK} size={44} serif>producer, or nothing?</Glow></At>
      {/* horn one: something passes from fuel to flame */}
      <AbsoluteFill style={{ opacity: 1 - 0.55 * fade }}>
        <At x={440} y={430} s={pop(t, fps, prod - 0.2)}><Candle id="ae92c" air={0.5} scale={0.62} /></At>
        <At x={440 + 0 * carry} y={560 - 230 * carry} o={ramp(t, prod + 0.5, 0.4) * (1 - ramp(t, prod + 2.4, 0.4))}><Orb size={26} color={GOLD} core={1} /></At>
        <At x={440} y={690} o={ramp(t, haveP, 0.5)}><Chip color={VIOLET} size={30}>a producer passes across</Chip></At>
      </AbsoluteFill>
      {/* horn two: a flame standing alone, from nothing */}
      <AbsoluteFill style={{ opacity: 1 - 0.55 * fade }}>
        <At x={1480} y={430} s={pop(t, fps, nothing - 0.2)}><Candle id="ae92d" air={0} fuel={0.12} wick={0.12} scale={0.62} /></At>
        <At x={1480} y={560} o={ramp(t, nothing + 0.5, 0.5)}>
          <div style={{ width: 120, height: 120, borderRadius: 12, border: `3px dashed ${DIM}` }} />
        </At>
        <At x={1480} y={690} o={ramp(t, groundless, 0.5)}><Chip color={ROSE} size={30}>a groundless event</Chip></At>
      </AbsoluteFill>
      <At x={960} y={430} o={ramp(t, nothing + 0.8, 0.5)}><Glow color={DIM} size={36} serif>or</Glow></At>
      {/* the shared picture: cause as a separate item, standing outside or missing */}
      <At x={960} y={560} s={pop(t, fps, share + 0.2)}>
        <div style={{ padding: "16px 30px", borderRadius: 16, border: `4px solid ${GOLD}`, background: `${GOLD}22`, boxShadow: `0 0 28px ${GOLD}66`,
          fontFamily: SERIF, fontSize: 38, color: CHALK }}>cause = a separate item</div>
      </At>
      <At x={960} y={680} o={ramp(t, item + 0.2, 0.5)}><Glow color={WARM} size={32}>outside the burning, or missing</Glow></At>
    </AbsoluteFill>
  );
};

const SensesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("Three meanings of cause"), p1 = c("A producer that stands on its own"), rm = c("the first claim removes");
  const p2 = c("let something appear"), keep = c("the second claim keeps"), fire = c("how to light a fire"), p3 = c("a name we give");
  const rows: [string, string, number, number, string][] = [
    ["1", "a producer standing on its own", p1, 320, VIOLET], ["2", "conditions, gathered together", p2 - 1.2, 490, GOLD], ["3", "a name given in sequence", p3, 660, ICE]];
  return (
    <AbsoluteFill>
      <Head text="three meanings of “cause”" at={three} y={100} size={68} />
      {rows.map(([n, w, at, y, col], i) => (
        <React.Fragment key={i}>
          <At x={330} y={y} s={pop(t, fps, at)}><Num n={n} color={col} size={34} /></At>
          <At x={760} y={y} o={ramp(t, at + 0.2, 0.5)}>
            <div style={{ position: "relative" }}><Chip color={col} size={34}>{w}</Chip>{i === 0 && <Strike at={rm + 0.3} />}</div>
          </At>
        </React.Fragment>
      ))}
      <At x={1420} y={320} o={ramp(t, rm + 0.4, 0.5)}><Glow color={WARM} size={30}>removed by claim 1</Glow></At>
      <At x={1420} y={460} o={ramp(t, keep, 0.5)}><Glow color={GREEN} size={30}>kept by claim 2</Glow></At>
      <At x={1420} y={530} o={ramp(t, fire, 0.5)}><Glow color={DIM} size={26}>how to light it, how to put it out</Glow></At>
      {/* sequence arrows for the third sense */}
      <Svg>
        <DrawPath d="M1250 660 L1330 660" p={ramp(t, p3 + 0.4, 0.4)} color={ICE} width={4} len={90} />
        <DrawPath d="M1420 660 L1500 660" p={ramp(t, p3 + 0.7, 0.4)} color={ICE} width={4} len={90} />
      </Svg>
      {[1200, 1375, 1550].map((x, i) => <At key={i} x={x} y={660} s={pop(t, fps, p3 + 0.3 + i * 0.25)}><Orb size={30} color={[VIOLET, GOLD, ROSE][i]} /></At>)}
    </AbsoluteFill>
  );
};

const NameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const over = c("nothing over and above that naming"), cover = c("not a thin cover"), whole = c("the whole of what a cause is");
  const lift = ramp(t, cover + 0.8, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, over - 0.2, 0.5)}><Glow color={CHALK} size={44} serif>nothing over and above the naming</Glow></At>
      {/* the empty place where a "real producer" was imagined, revealed when the cover lifts */}
      <At x={960} y={490} o={ramp(t, cover + 1.4, 0.5)}>
        <div style={{ width: 420, height: 220, borderRadius: 16, border: `4px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 32, color: DIM }}>no producer beneath</div>
      </At>
      <At x={960} y={490 - 300 * lift} s={pop(t, fps, over + 0.2)} o={1 - 0.6 * lift} r={-8 * lift}>
        <div style={{ width: 440, height: 240, borderRadius: 16, border: `4px solid ${ICE}`, background: `linear-gradient(160deg, ${ICE}44, ${ICE}11)`,
          boxShadow: `0 0 30px ${ICE}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 52, color: CHALK }}>“cause”</div>
      </At>
      <At x={1460} y={330} o={ramp(t, cover, 0.5) * (1 - ramp(t, cover + 1.4, 0.4))}><Glow color={WARM} size={30}>a thin cover over…?</Glow></At>
      <At x={960} y={780} o={ramp(t, whole, 0.6)}><Glow color={GOLD} size={42} serif>the name is the whole of it</Glow></At>
    </AbsoluteFill>
  );
};

const RivalsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const never = c("the two claims were never rivals"), outside = c("Nothing outside the alignment produces the flame");
  const what = c("the alignment is what appears"), seq = c("Told in sequence"), und = c("Seen undivided"), burn = c("just the burning");
  const collapse = ramp(t, und + 0.3, 1.2);
  return (
    <AbsoluteFill>
      <At x={760} y={140} s={pop(t, fps, never - 0.2)}><Num n="1" color={TEAL} size={36} /></At>
      <At x={1160} y={140} s={pop(t, fps, never)}><Num n="2" color={GOLD} size={36} /></At>
      <At x={960} y={140} o={ramp(t, never + 0.4, 0.5)}><Glow color={GREEN} size={34}>not rivals</Glow></At>
      {/* the alignment in a circle; arrows from outside are crossed out */}
      <AbsoluteFill style={{ opacity: 1 - ramp(t, seq - 0.3, 0.5) }}>
        <At x={960} y={500} s={pop(t, fps, outside - 0.3)}><Candle id="ae92e" scale={0.7} /></At>
        <Ring x={960} y={500} p={ramp(t, outside, 1)} r0={210} r1={230} color={GOLD} width={4} />
        {[[420, 330], [1500, 330], [420, 700], [1500, 700]].map(([x, y], i) => (
          <React.Fragment key={i}>
            <Svg><DrawPath d={`M${x} ${y} L${x + (960 - x) * 0.45} ${y + (500 - y) * 0.45}`} p={ramp(t, outside + 0.6 + i * 0.15, 0.4)} color={DIM} width={4} len={400} /></Svg>
            <Crossed x={x + (960 - x) * 0.3} y={y + (500 - y) * 0.3} at={outside + 1.6 + i * 0.1} size={28} />
          </React.Fragment>
        ))}
        <At x={960} y={790} o={ramp(t, what, 0.5)}><Glow color={GOLD} size={36} serif>the alignment is what appears</Glow></At>
      </AbsoluteFill>
      {/* told in sequence: fuel, flame, smoke along a line; seen undivided: one burning */}
      <Scene from={seq - 0.3} to={1e9}>
        {([["fuel", GOLD], ["flame", WARM], ["smoke", DIM]] as const).map(([w, col], i) => (
          <At key={i} x={560 + 400 * i + (960 - 560 - 400 * i) * collapse} y={480} s={pop(t, fps, seq + 0.2 + i * 0.3)} o={1 - 0.9 * collapse}>
            <Chip color={col} size={34}>{w}</Chip>
          </At>
        ))}
        <Svg>
          <DrawPath d="M680 480 L840 480" p={ramp(t, seq + 0.5, 0.4) * (1 - collapse)} color={CHALK} width={4} len={170} />
          <DrawPath d="M1080 480 L1240 480" p={ramp(t, seq + 0.8, 0.4) * (1 - collapse)} color={CHALK} width={4} len={170} />
        </Svg>
        <At x={960} y={600} o={ramp(t, seq + 0.4, 0.5) * (1 - collapse)}><Glow color={DIM} size={30}>cause, then effect</Glow></At>
        <At x={960} y={500} o={collapse}><Orb size={130} color={GOLD} core={1} /></At>
        <At x={960} y={700} o={ramp(t, burn, 0.5)}><Glow color={GOLD} size={42} serif>just the burning</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const last = c("A last question can still survive"), why = c("Why does anything appear at all"), reason = c("a reason behind the conditions");
  const none = c("the question has nothing to be about"), stop = c("It stops applying");
  const gone = ramp(t, none + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, last, 0.5)}><Glow color={DIM} size={32}>a fourth assumption</Glow></At>
      <At x={960} y={260} o={1 - 0.7 * ramp(t, stop, 0.8)} blur={6 * ramp(t, stop, 0.8)}><Reveal text="why?" at={why} size={120} color={GOLD} /></At>
      <At x={960} y={460} o={ramp(t, reason - 0.4, 0.5)}>
        <div style={{ display: "flex", gap: 34 }}>{[TEAL, ROSE, ICE, GREEN].map((col, i) => <Orb key={i} size={36} color={col} />)}</div>
      </At>
      <At x={960} y={570} o={ramp(t, reason, 0.5) * (1 - gone)} s={1 + 0.1 * gone}><Slab w={640} p={ramp(t, reason, 0.9)} label="a reason behind" /></At>
      <At x={960} y={570} o={ramp(t, none + 0.8, 0.5)}>
        <div style={{ width: 640, height: 66, borderRadius: 8, border: `3px dashed ${DIM}` }} />
      </At>
      <At x={960} y={690} o={ramp(t, none + 0.6, 0.5)}><Glow color={CHALK} size={32}>nothing for it to be about</Glow></At>
      <At x={960} y={790} o={ramp(t, stop + 0.2, 0.5)}><Glow color={GREEN} size={40} serif>not answered: it stops applying</Glow></At>
    </AbsoluteFill>
  );
};

const PresenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("calls this appearing spontaneous presence"), read = c("In this book's reading"), two = c("one from analysis, one from the inside");
  return (
    <AbsoluteFill>
      <Head text="spontaneous presence" at={sp + 0.6} y={120} size={80} />
      <At x={960} y={250} o={ramp(t, read, 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      <At x={960} y={500} s={pop(t, fps, read + 0.6)}><Orb size={150} color={GOLD} core={1} /></At>
      <At x={960} y={650} o={ramp(t, read + 1.0, 0.5)}><Glow color={GOLD} size={36} serif>one appearing</Glow></At>
      <Flow x1={480} y1={500} x2={860} y2={500} color={TEAL} p={ramp(t, two + 0.2, 0.6)} />
      <Flow x1={1440} y1={500} x2={1060} y2={500} color={GOLD} p={ramp(t, two + 1.2, 0.6)} />
      <At x={420} y={420} o={ramp(t, two, 0.5)}><Chip color={TEAL} size={32}>dependent arising</Chip></At>
      <At x={420} y={590} o={ramp(t, two + 0.3, 0.5)}><Glow color={TEAL} size={28}>described by analysis</Glow></At>
      <At x={1500} y={420} o={ramp(t, two + 1.0, 0.5)}><Chip color={GOLD} size={32}>spontaneous presence</Chip></At>
      <At x={1500} y={590} o={ramp(t, two + 1.3, 0.5)}><Glow color={GOLD} size={28}>described from the inside</Glow></At>
    </AbsoluteFill>
  );
};

const NoOwnerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const own = c("no owner stands behind it"), self = c("not a self showing its contents"), is = c("The alignment is the appearing"), burn = c("the burning itself");
  const gone = ramp(t, own + 1.6, 1.2);
  return (
    <AbsoluteFill>
      {/* the imagined owner behind the flame fades */}
      <At x={1300} y={470} o={ramp(t, own, 0.5) * (1 - gone)} blur={10 * gone}>
        <svg width={220} height={300} viewBox="0 0 220 300"><circle cx={110} cy={70} r={50} fill={`${DIM}33`} stroke={DIM} strokeWidth={5} strokeDasharray="10 8" />
          <path d="M20 290 Q20 150 110 150 Q200 150 200 290" fill={`${DIM}22`} stroke={DIM} strokeWidth={5} strokeDasharray="10 8" /></svg>
      </At>
      <Struck x={1300} y={700} at={own + 0.2} strikeAt={own + 1.4} color={DIM}>an owner behind</Struck>
      <At x={760} y={500} s={pop(t, fps, own - 0.3)}><Candle id="ae92f" scale={0.9} /></At>
      <Ring x={760} y={430} p={ramp(t, burn - 0.2, 2.2)} r0={140} r1={420} color={GOLD} />
      <At x={960} y={130} o={ramp(t, self, 0.5)}><Glow color={CHALK} size={40} serif>not a self showing its contents</Glow></At>
      <At x={760} y={790} o={ramp(t, is, 0.5)}><Glow color={GOLD} size={36} serif>the alignment is the appearing</Glow></At>
      <At x={1300} y={820} o={ramp(t, burn + 0.2, 0.5)}><Glow color={DIM} size={28}>the light is the burning</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const see = c("Seeing is just seeing"), hear = c("Hearing is just hearing"), rec = c("recognised, not achieved"), nn = c("Nothing needs to be produced");
  return (
    <AbsoluteFill>
      <At x={560} y={300} o={ramp(t, see, 0.6)}><Glow color={TEAL} size={50} serif>seeing, just seeing</Glow></At>
      <At x={1360} y={300} o={ramp(t, hear, 0.6)}><Glow color={ROSE} size={50} serif>hearing, just hearing</Glow></At>
      <At x={960} y={530} s={pop(t, fps, see + 0.4)}><Candle id="ae92g" scale={0.62} /></At>
      <Ring x={960} y={470} p={ramp(t, rec, 2.4)} r0={120} r1={460} color={GOLD} />
      <Struck x={720} y={720} at={rec - 0.1} strikeAt={rec + 0.8} color={DIM} size={30}>achieved</Struck>
      <At x={1200} y={720} o={ramp(t, rec + 0.6, 0.5)}><Chip color={GREEN} size={30}>recognised</Chip></At>
      <At x={960} y={820} o={ramp(t, nn, 0.8)}><Glow color={GOLD} size={42} serif>nothing needs to be produced</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["analysis", c("three quiet assumptions", 0.6)], ["claims", c("two claims have to be held together", 0.6)],
    ["flame", c("the two seem to cancel", 0.6)], ["senses", c("Three meanings of cause", 0.6)],
    ["claims", c("the two claims were never rivals", 0.6)], ["analysis", c("A last question can still survive", 0.6)],
    ["presence", c("calls this appearing spontaneous presence", 0.6)], ["free", c("Seeing is just seeing", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("A careful reader will ask", 0.9)], <OpeningScene />],
    [S("A careful reader will ask", "three quiet assumptions"), <ReaderScene />],
    [S("three quiet assumptions", "tests each one"), <AssumptionsScene />],
    [S("tests each one", "Analysis is not meant to run forever"), <TestScene />],
    [S("Analysis is not meant to run forever", "two claims have to be held together"), <HabitScene />],
    [S("two claims have to be held together", "the two seem to cancel"), <TwoClaimsScene />],
    [S("the two seem to cancel", "So the mind presses"), <FlameScene />],
    [S("So the mind presses", "Three meanings of cause"), <DilemmaScene />],
    [S("Three meanings of cause", "nothing over and above that naming"), <SensesScene />],
    [S("nothing over and above that naming", "the two claims were never rivals"), <NameScene />],
    [S("the two claims were never rivals", "A last question can still survive"), <RivalsScene />],
    [S("A last question can still survive", "calls this appearing spontaneous presence"), <WhyScene />],
    [S("calls this appearing spontaneous presence", "no owner stands behind it"), <PresenceScene />],
    [S("no owner stands behind it", "Seeing is just seeing"), <NoOwnerScene />],
    [S("Seeing is just seeing", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
