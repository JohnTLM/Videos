// Anatta to Emptiness, Chapter 22: Nothing to Find, Nothing Missing, Part One. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "a question that sounds simple", "nobody is looking at a mountain", "does the mountain still exist",
  "a yes or a no", "It is a trap", "most useful things",
  "First, a distinction", "teaching device", "two stories", "the thing comes first", "like a sticker on a box", "Call this conceptual designation",
  "there is no first and second", "arise together", "Call this dependent designation",
  "Think of long and short", "a ten foot rope", "no answer", "next to a five foot rope", "short next to a fifteen", "Longness was never sitting",
  "Long, short and the comparison", "parent and child", "only later meets",
  "Now, the mountain", "one well defined thing", "Try to point to it", "Which rock", "the next hill begin", "The water running down",
  "reaches the valley", "Who decided that",
  "no line written into nature", "a raw field of rock first", "a boundary drawn on it later", "a first and a second", "its edge arise together",
  "Nothing was discovered here", "invented out of nothing",
  "A sceptic pushes back", "the raw process goes on", "The sun keeps burning", "needs no audience", "one process, bounded and countable",
  "the same move again", "picked out as one",
  "The sceptic's strongest reply", "within Buddhism itself", "Concede every label", "the momentary particular", "Causal power is the mark",
  "So try a test", "Take a coffee cup", "Subtract its colour", "its sound when tapped", "its texture", "its smell", "the act that bundles",
  "What is left", "Not the shape", "A substance holding", "a placeholder word",
  "The old analysis of a chariot", "It searches seven ways", "Each comes up empty", "no eighth place",
  "causal power does not rescue", "itself a relation", "perfect reliability", "from its own side",
  "The search was never difficult", "never there to find",
];

const AMBER = "#E0A93B", INDIGO = "#7B78FF";

const M = {
  mountain: { a: "rgba(50,60,150,0.55)", b: "rgba(170,125,50,0.38)", c: "rgba(30,100,120,0.3)" },
  stories: { a: "rgba(170,125,50,0.45)", b: "rgba(70,50,150,0.45)", c: "rgba(40,110,130,0.3)" },
  rope: { a: "rgba(40,110,130,0.5)", b: "rgba(170,130,60,0.38)", c: "rgba(80,60,150,0.3)" },
  sun: { a: "rgba(180,120,40,0.5)", b: "rgba(70,50,140,0.45)", c: "rgba(150,70,60,0.3)" },
  sceptic: { a: "rgba(100,50,130,0.5)", b: "rgba(50,70,150,0.45)", c: "rgba(160,120,50,0.3)" },
  cup: { a: "rgba(170,110,60,0.45)", b: "rgba(60,60,160,0.45)", c: "rgba(40,120,120,0.3)" },
};

// ---------------------------------------------------------------- helpers
const XMark: React.FC<{ x: number; y: number; r: number; at: number; color?: string }> = ({ x, y, r, at, color = WARM }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={color} width={8} len={r * 3} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={color} width={8} len={r * 3} />
    </Svg>
  );
};

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 34, o = 1, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4) * o}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Lens: React.FC<{ size?: number }> = ({ size = 130 }) => (
  <svg width={size} height={size} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

/** A mountain with a smaller hill to its right; `rockHi` highlights some rocks, `water` 0..1 draws a stream. */
const Mountain: React.FC<{ w?: number; rockHi?: number; water?: number; hill?: number }> = ({ w = 900, rockHi = 0, water = 0, hill = 1 }) => {
  const { t } = useT();
  return (
    <svg width={w} height={w * 0.55} viewBox="0 0 900 500" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${INDIGO})` }}>
      <defs>
        <linearGradient id="mt22" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#8f8cff" stopOpacity={0.55} /><stop offset="1" stopColor="#2b2a66" stopOpacity={0.35} /></linearGradient>
      </defs>
      <path d="M560 480 L720 300 L800 360 L900 480 Z" fill="url(#mt22)" stroke={INDIGO} strokeWidth={4} strokeLinejoin="round" opacity={hill} />
      <path d="M0 480 L330 60 L460 230 L520 200 L700 480 Z" fill="url(#mt22)" stroke={INDIGO} strokeWidth={5} strokeLinejoin="round" />
      <path d="M270 136 L330 60 L392 140 L360 128 L330 150 L300 130 Z" fill={CHALK} opacity={0.85} />
      {Array.from({ length: 9 }).map((_, i) => (
        <ellipse key={i} cx={200 + rand(i) * 420} cy={300 + rand(i + 4) * 150} rx={16 + rand(i + 2) * 12} ry={10 + rand(i + 1) * 6}
          fill={i % 3 === 0 ? AMBER : "#5c5aa8"} opacity={0.5 + 0.5 * (i % 3 === 0 ? rockHi : 0)}
          style={i % 3 === 0 && rockHi > 0 ? { filter: `drop-shadow(0 0 ${10 * rockHi}px ${AMBER})` } : undefined} />
      ))}
      <path d="M380 150 Q360 260 430 320 Q500 380 600 470 Q680 490 820 495" fill="none" stroke={ICE} strokeWidth={7} strokeLinecap="round"
        strokeDasharray="900" strokeDashoffset={900 * (1 - water)} style={{ filter: `drop-shadow(0 0 8px ${ICE})` }} />
      {water > 0.9 && Array.from({ length: 5 }).map((_, i) => {
        const p = ((t * 0.4 + i * 0.2) % 1);
        return <circle key={i} cx={380 + p * 440} cy={150 + p * 345} r={6} fill="#fff" opacity={0.7} />;
      })}
    </svg>
  );
};

const CupSvg: React.FC<{ color?: string; fill?: number; dashed?: boolean }> = ({ color = AMBER, fill = 0.25, dashed }) => (
  <svg width={240} height={210} viewBox="0 0 170 150" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M20 30 L130 30 L118 130 Q75 145 32 130 Z" fill={color} fillOpacity={fill} stroke={color} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dashed ? "8 7" : undefined} />
    <path d="M128 52 Q165 55 158 85 Q152 108 122 106" fill="none" stroke={color} strokeWidth={4} strokeDasharray={dashed ? "8 7" : undefined} />
  </svg>
);

const Figure: React.FC<{ color: string; size?: number }> = ({ color, size = 1 }) => (
  <svg width={90 * size} height={170 * size} viewBox="0 0 90 170" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <g fill="none" stroke={color} strokeWidth={5} strokeLinecap="round">
      <circle cx={45} cy={25} r={18} /><line x1={45} y1={43} x2={45} y2={108} /><line x1={45} y1={108} x2={25} y2={165} />
      <line x1={45} y1={108} x2={65} y2={165} /><line x1={45} y1={62} x2={15} y2={92} /><line x1={45} y1={62} x2={75} y2={92} />
    </g>
  </svg>
);

// ---------------------------------------------------------------- 1. the question and the trap
const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("a question that sounds simple", 0.4);
  const nb = c("nobody is looking at a mountain");
  const ex = c("does the mountain still exist");
  const yn = c("a yes or a no");
  const trap = c("It is a trap");
  const close = ramp(t, trap + 0.2, 0.7);
  return (
    <AbsoluteFill>
      <At x={760} y={420} s={pop(t, fps, q)}><Mountain w={820} /></At>
      <At x={1500} y={260} s={pop(t, fps, nb)} o={1 - ramp(t, nb + 0.6, 0.6) * 0.5}>
        <svg width={160} height={90} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
          <path d="M5 40 Q70 -10 135 40" fill="none" stroke={TEAL} strokeWidth={5} />
          <path d={`M5 40 Q70 ${90 - 50 * ramp(t, nb + 0.4, 0.5)} 135 40`} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={5} />
        </svg>
      </At>
      <At x={1500} y={340} o={ramp(t, nb + 0.5, 0.4)}><Glow color={TEAL} size={30}>nobody looking</Glow></At>
      <At x={760} y={110} o={ramp(t, ex, 0.5)}><Glow color={CHALK} size={50} serif>does it still exist?</Glow></At>
      <At x={1380} y={520} s={pop(t, fps, yn)}><Chip color={GREEN} size={40}>yes</Chip></At>
      <At x={1600} y={520} s={pop(t, fps, yn + 0.3)}><Chip color={ROSE} size={40}>no</Chip></At>
      {/* the trap: a net that closes over both answers */}
      <Svg style={{ opacity: ramp(t, trap, 0.3) }}>
        <path d={`M1270 ${680 - 260 * close} Q1490 ${640 - 330 * close} 1710 ${680 - 260 * close}`} fill="none" stroke={WARM} strokeWidth={6} />
        {Array.from({ length: 7 }).map((_, i) => (
          <line key={i} x1={1270 + i * 73} y1={680} x2={1270 + i * 73} y2={680 - (260 + 60 * Math.sin((i / 6) * Math.PI)) * close} stroke={WARM} strokeWidth={3} opacity={0.8} />
        ))}
        <line x1={1270} y1={680} x2={1710} y2={680} stroke={WARM} strokeWidth={6} />
      </Svg>
      <At x={1490} y={760} o={ramp(t, trap + 0.4, 0.4)}><Glow color={WARM} size={44} serif>a trap</Glow></At>
      <At x={760} y={820} o={ramp(t, c("most useful things"), 0.5)}><Glow color={GOLD} size={34}>one of the most useful things to see through</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. two stories about labels
const StoriesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("First, a distinction", 0.4);
  const two = c("two stories");
  const tf = c("the thing comes first");
  const st = c("like a sticker on a box");
  const slap = ramp(t, st + 0.4, 0.5);
  const cd = c("Call this conceptual designation");
  const nf = c("there is no first and second");
  const at = c("arise together");
  const dd = c("Call this dependent designation");
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, d, 0.4)}><Glow color={CHALK} size={46} serif>two stories about labels</Glow></At>
      <At x={960} y={150} o={ramp(t, c("teaching device"), 0.4)}><Glow color={DIM} size={28}>a teaching device of this book's own</Glow></At>
      <At x={520} y={230} o={ramp(t, two, 0.4)}><Glow color={AMBER} size={34}>story one</Glow></At>
      <At x={1400} y={230} o={ramp(t, two + 0.3, 0.4)}><Glow color={TEAL} size={34}>story two</Glow></At>
      {/* story one: box first, sticker second */}
      <At x={430} y={470} s={pop(t, fps, tf)}>
        <svg width={220} height={200} viewBox="0 0 220 200" style={{ filter: `drop-shadow(0 0 10px ${AMBER})` }}>
          <path d="M20 60 L110 20 L200 60 L200 160 L110 195 L20 160 Z" fill={`${AMBER}33`} stroke={AMBER} strokeWidth={4} strokeLinejoin="round" />
          <path d="M20 60 L110 100 L200 60 M110 100 L110 195" fill="none" stroke={AMBER} strokeWidth={3} />
        </svg>
      </At>
      <At x={430} y={330} o={ramp(t, tf + 0.2, 0.4)}><Glow color={AMBER} size={28}>first: the thing</Glow></At>
      <At x={640 - 140 * slap} y={460 - 20 * slap} r={-10 * slap} o={ramp(t, st, 0.3)}>
        <div style={{ padding: "10px 20px", background: GOLD, color: "#1a1530", fontFamily: "SourceSans", fontSize: 28, borderRadius: 6, boxShadow: `0 0 18px ${GOLD}` }}>label</div>
      </At>
      <At x={700} y={620} o={ramp(t, st + 0.4, 0.4)}><Glow color={GOLD} size={28}>second: the label</Glow></At>
      <At x={520} y={760} o={ramp(t, cd, 0.4)}><Chip color={AMBER} size={32}>conceptual designation</Chip></At>
      {/* story two: thing and label together */}
      <At x={1400} y={470} o={ramp(t, nf, 0.4)}>
        <div style={{ position: "relative", width: 380, height: 260 }}>
          <div style={{ position: "absolute", left: 30, top: 80 }}><Chip color={TEAL} size={36}>thing</Chip></div>
          <div style={{ position: "absolute", right: 30, top: 80 }}><Chip color={GOLD} size={36}>label</Chip></div>
        </div>
      </At>
      <Flow x1={1340} y1={440} x2={1460} y2={440} color={GOLD} p={ramp(t, at, 0.5)} />
      <Flow x1={1460} y1={500} x2={1340} y2={500} color={TEAL} p={ramp(t, at + 0.2, 0.5)} />
      <Ring x={1400} y={470} p={ramp(t, at + 0.3, 1.4)} r0={120} r1={300} color={GOLD} />
      <At x={1400} y={640} o={ramp(t, at + 0.2, 0.4)}><Glow color={TEAL} size={28}>arising together</Glow></At>
      <At x={1400} y={760} o={ramp(t, dd, 0.4)}><Chip color={TEAL} size={32}>dependent designation</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. long and short, parent and child
const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ten = c("a ten foot rope");
  const five = c("next to a five foot rope");
  const fift = c("short next to a fifteen");
  const ls = c("Longness was never sitting");
  const pc = c("parent and child");
  const partB = pc - 0.5;
  const unit = 60;
  const rope = (len: number, y: number, col: string, at: number) => (
    <Svg style={{ opacity: ramp(t, at, 0.3) }}>
      <DrawPath d={`M${360} ${y} L${360 + len * unit} ${y}`} p={ramp(t, at, 0.8)} color={col} width={14} len={len * unit + 20} />
    </Svg>
  );
  const lab = t < fift ? (t > five ? "long" : "long?") : "short";
  return (
    <AbsoluteFill>
      <Scene from={c("Think of long and short") - 0.4} to={partB}>
        <At x={960} y={100} o={ramp(t, c("Think of long and short"), 0.4)}><Glow color={CHALK} size={46} serif>long and short</Glow></At>
        {rope(10, 360, AMBER, ten)}
        <At x={360 + 10 * unit + 120} y={360} o={ramp(t, ten + 0.4, 0.3)}><Glow color={AMBER} size={40}>{lab}</Glow></At>
        <At x={260} y={360} o={ramp(t, ten, 0.3)}><Glow color={AMBER} size={28}>ten</Glow></At>
        <At x={960} y={200} o={between(t, c("no answer"), five, 0.3)}><Glow color={DIM} size={34}>by itself: no answer</Glow></At>
        <At x={260} y={460} o={between(t, five, fift, 0.3)}><Glow color={TEAL} size={28}>five</Glow></At>
        <Svg style={{ opacity: between(t, five, fift, 0.3) }}>
          <DrawPath d={`M360 460 L${360 + 5 * unit} 460`} p={ramp(t, five, 0.6)} color={TEAL} width={14} len={5 * unit + 20} />
        </Svg>
        <At x={260} y={460} o={ramp(t, fift, 0.3)}><Glow color={ROSE} size={28}>fifteen</Glow></At>
        <Svg style={{ opacity: ramp(t, fift, 0.3) }}>
          <DrawPath d={`M360 460 L${360 + 15 * unit} 460`} p={ramp(t, fift, 0.8)} color={ROSE} width={14} len={15 * unit + 20} />
        </Svg>
        <StruckChip x={960} y={620} at={ls} strikeAt={ls + 1.2} color={DIM} size={34}>longness inside the rope</StruckChip>
        <At x={960} y={760} o={ramp(t, c("Long, short and the comparison"), 0.4)}><Glow color={GOLD} size={40} serif>long, short and comparison: together</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={800} y={460} s={pop(t, fps, pc)}><Figure color={AMBER} size={1.4} /></At>
        <At x={1100} y={510} s={pop(t, fps, pc)}><Figure color={TEAL} size={0.9} /></At>
        <Ring x={950} y={470} p={ramp(t, pc + 0.2, 1.4)} r0={160} r1={420} color={GOLD} />
        <At x={800} y={680} o={ramp(t, pc + 0.2, 0.4)}><Glow color={AMBER} size={34}>parent</Glow></At>
        <At x={1100} y={680} o={ramp(t, pc + 0.2, 0.4)}><Glow color={TEAL} size={34}>child</Glow></At>
        <StruckChip x={960} y={800} at={c("only later meets")} strikeAt={c("only later meets") + 0.8} color={DIM} size={30}>parent first, child later</StruckChip>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. pointing to the mountain
const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const m0 = c("Now, the mountain", 0.4);
  const one = c("one well defined thing");
  const pt = c("Try to point to it");
  const wr = c("Which rock");
  const hill = c("the next hill begin");
  const wa = c("The water running down");
  const val = c("reaches the valley");
  const who = c("Who decided that");
  const u = ramp(t, pt, 2.4);
  return (
    <AbsoluteFill>
      <At x={860} y={470} s={pop(t, fps, m0)}><Mountain w={1000} rockHi={between(t, wr, wa, 0.4)} water={ramp(t, wa, 1.6)} /></At>
      <At x={860} y={120} o={between(t, one, pt + 0.5, 0.4)}><Chip color={GOLD} size={36}>one well defined thing?</Chip></At>
      <At x={560 + 420 * u} y={330 + 140 * Math.sin(u * 7)} o={between(t, pt, wr + 1.2, 0.4)}><Lens /></At>
      <At x={860} y={120} o={between(t, wr, hill, 0.3)}><Glow color={AMBER} size={44} serif>which rock?</Glow></At>
      <Svg style={{ opacity: ramp(t, hill, 0.4) }}>
        <line x1={1170} y1={320} x2={1170} y2={760} stroke={WARM} strokeWidth={5} strokeDasharray="12 10" />
      </Svg>
      <At x={1170} y={120} o={between(t, hill, wa, 0.3)}><Glow color={WARM} size={40} serif>where does it stop?</Glow></At>
      <At x={1440} y={760} o={ramp(t, val, 0.4)}><Glow color={ICE} size={30}>the valley</Glow></At>
      <At x={860} y={120} o={ramp(t, who, 0.4)}><Glow color={CHALK} size={50} serif>who decided?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. no line, and no raw field first
const NoLineScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nl = c("no line written into nature");
  const raw = c("a raw field of rock first");
  const bd = c("a boundary drawn on it later");
  const fs = c("a first and a second");
  const together = c("its edge arise together");
  const partB = together - 0.4;
  const nd = c("Nothing was discovered here"), inv = c("invented out of nothing");
  return (
    <AbsoluteFill>
      <Scene from={nl - 0.5} to={partB}>
        <StruckChip x={960} y={140} at={nl} strikeAt={nl + 1.0} color={DIM} size={36}>a line written into nature</StruckChip>
        <At x={600} y={470} s={pop(t, fps, raw)}>
          <div style={{ width: 460, height: 280, borderRadius: 16, background: `repeating-linear-gradient(135deg, ${INDIGO}33 0 18px, ${INDIGO}11 18px 36px)`, border: `3px solid ${INDIGO}` }} />
        </At>
        <At x={600} y={290} o={ramp(t, raw + 0.3, 0.4)}><Glow color={INDIGO} size={30}>first: a raw field</Glow></At>
        <Flow x1={850} y1={470} x2={1080} y2={470} color={AMBER} p={ramp(t, bd, 0.5)} />
        <At x={1320} y={470} s={pop(t, fps, bd + 0.3)}>
          <div style={{ width: 460, height: 280, borderRadius: 16, background: `repeating-linear-gradient(135deg, ${INDIGO}33 0 18px, ${INDIGO}11 18px 36px)`, border: `3px solid ${INDIGO}`, position: "relative" }}>
            <svg width={460} height={280} style={{ position: "absolute", left: 0, top: 0 }}><path d="M40 240 L200 50 L280 140 L420 240" fill="none" stroke={AMBER} strokeWidth={5} strokeDasharray="12 8" /></svg>
          </div>
        </At>
        <At x={1320} y={290} o={ramp(t, bd + 0.5, 0.4)}><Glow color={AMBER} size={30}>second: a boundary</Glow></At>
        <XMark x={960} y={470} r={90} at={fs + 0.3} />
        <At x={960} y={720} o={ramp(t, fs, 0.4)}><Glow color={WARM} size={38}>still a first and a second</Glow></At>
      </Scene>
      <Scene from={partB + 0.1} to={1e9}>
        <At x={960} y={420} s={pop(t, fps, together)}><Mountain w={760} hill={0} /></At>
        <Svg style={{ opacity: ramp(t, together + 0.2, 0.4) }}>
          <DrawPath d="M590 620 L840 210 L940 330 L990 300 L1320 620" p={ramp(t, together + 0.2, 0.8)} color={GOLD} width={5} len={1400} />
        </Svg>
        <Ring x={960} y={420} p={ramp(t, together + 0.5, 1.4)} r0={200} r1={520} color={GOLD} />
        <At x={960} y={130} o={ramp(t, together + 0.3, 0.4)}><Glow color={GOLD} size={42} serif>mountain, edge and designating: one event</Glow></At>
        <StruckChip x={640} y={760} at={nd} strikeAt={nd + 0.8} color={TEAL} size={32}>discovered</StruckChip>
        <StruckChip x={1280} y={760} at={inv} strikeAt={inv + 0.8} color={ROSE} size={32}>invented from nothing</StruckChip>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. the raw process
const ProcessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("A sceptic pushes back", 0.4);
  const raw = c("the raw process goes on");
  const sun = c("The sun keeps burning");
  const aud = c("needs no audience");
  const one = c("one process, bounded and countable");
  const same = c("the same move again");
  const pk = c("picked out as one");
  const br = ramp(t, one + 0.3, 0.8);
  return (
    <AbsoluteFill>
      <At x={300} y={460} s={pop(t, fps, sp)}><Figure color={ROSE} size={1.2} /></At>
      <At x={300} y={640} o={ramp(t, sp + 0.3, 0.4)}><Glow color={ROSE} size={30}>the sceptic</Glow></At>
      <At x={960} y={110} o={ramp(t, raw, 0.4)}><Glow color={CHALK} size={44} serif>surely the raw process goes on?</Glow></At>
      <At x={960} y={430} s={pop(t, fps, sun - 0.2)}><Sun size={340} rot={t * 20} /></At>
      <At x={960} y={430} o={ramp(t, sun, 1.0) * 0.6}><div style={{ width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle, ${AMBER}55, transparent 62%)` }} /></At>
      <At x={1560} y={300} o={ramp(t, aud, 0.4)}><Chip color={GREEN} size={30}>no audience needed</Chip></At>
      <Svg style={{ opacity: br }}>
        <path d={`M760 ${250} L730 250 L730 610 L760 610`} fill="none" stroke={GOLD} strokeWidth={6} />
        <path d={`M1160 ${250} L1190 250 L1190 610 L1160 610`} fill="none" stroke={GOLD} strokeWidth={6} />
      </Svg>
      <At x={960} y={700} o={br}><Chip color={GOLD} size={34}>"one process"</Chip></At>
      <At x={1560} y={460} o={ramp(t, same, 0.4)}><Glow color={WARM} size={34}>the same move again</Glow></At>
      <At x={960} y={800} o={ramp(t, pk, 0.4)}><Glow color={GOLD} size={38} serif>being one, and picked out as one: together</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. the strongest reply
const ReplyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const r0 = c("The sceptic's strongest reply", 0.4);
  const bud = c("within Buddhism itself");
  const con = c("Concede every label");
  const mp = c("the momentary particular");
  const cp = c("Causal power is the mark");
  const labels = ["mountain", "process", "cup", "category"];
  const flick = 0.6 + 0.4 * Math.abs(Math.sin(t * 9));
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, r0, 0.4)}><Glow color={CHALK} size={46} serif>the strongest reply</Glow></At>
      <At x={960} y={170} o={ramp(t, bud, 0.4)}><Glow color={DIM} size={30}>from within Buddhist philosophy</Glow></At>
      {labels.map((w, i) => {
        const fall = ramp(t, con + 0.5 + i * 0.15, 1.0);
        return <At key={i} x={420 + i * 360} y={330 + fall * 520} r={fall * (i % 2 ? 30 : -30)} o={ramp(t, con, 0.3) * (1 - fall)}><Chip color={DIM} size={32}>{w}</Chip></At>;
      })}
      <At x={960} y={260} o={ramp(t, con + 0.8, 0.4) * (1 - ramp(t, mp, 0.4))}><Glow color={DIM} size={30}>all labels conceded</Glow></At>
      <At x={960} y={480} s={pop(t, fps, mp)} o={flick}><Orb size={90} color={AMBER} core={1} /></At>
      <At x={960} y={600} o={ramp(t, mp + 0.3, 0.4)}><Glow color={AMBER} size={32}>a momentary particular</Glow></At>
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return <Flow key={i} x1={960 + 70 * Math.cos(a)} y1={480 + 70 * Math.sin(a)} x2={960 + 260 * Math.cos(a)} y2={480 + 200 * Math.sin(a)} color={GOLD} p={ramp(t, cp + i * 0.05, 0.5)} />;
      })}
      <At x={960} y={760} o={ramp(t, cp + 0.3, 0.4)}><Chip color={GOLD} size={36}>it does something, so it is real?</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. subtract everything from the cup
const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const test = c("So try a test", 0.4);
  const cup = c("Take a coffee cup");
  const qs = [
    { w: "colour", at: c("Subtract its colour"), x: 520, y: 260, col: ROSE },
    { w: "sound", at: c("its sound when tapped"), x: 1400, y: 260, col: TEAL },
    { w: "texture", at: c("its texture"), x: 470, y: 520, col: GREEN },
    { w: "smell", at: c("its smell"), x: 1450, y: 520, col: VIOLET },
    { w: "one cup", at: c("the act that bundles"), x: 960, y: 140, col: GOLD },
  ];
  const removed = qs.filter((q) => t > q.at + 0.6).length;
  const left = c("What is left");
  const shape = c("Not the shape");
  const sub = c("A substance holding");
  const ph = c("a placeholder word");
  return (
    <AbsoluteFill>
      <At x={960} y={60} o={ramp(t, test, 0.4) * (1 - ramp(t, c("the act that bundles") - 0.4, 0.3))}><Glow color={DIM} size={30}>a test: subtract</Glow></At>
      <At x={960} y={420} s={pop(t, fps, cup)} o={1 - removed * 0.15}><CupSvg fill={0.35 - removed * 0.06} dashed={removed >= 5} color={removed >= 1 ? DIM : AMBER} /></At>
      {qs.map((q, i) => {
        const gone = ramp(t, q.at + 0.4, 0.8);
        return (
          <At key={i} x={q.x + (q.x > 960 ? 1 : q.x < 960 ? -1 : 0) * 200 * gone} y={q.y - (q.x === 960 ? 80 * gone : 0)} s={pop(t, fps, q.at - 0.2)} o={1 - gone}>
            <Chip color={q.col} size={36}>{q.w}</Chip>
          </At>
        );
      })}
      <At x={960} y={640} o={ramp(t, left, 0.4)}><Glow color={CHALK} size={50} serif>what is left?</Glow></At>
      <At x={560} y={760} o={ramp(t, shape, 0.4)}><div style={{ position: "relative" }}><Chip color={DIM} size={32}>the shape</Chip><Strike at={shape + 0.8} /></div></At>
      <At x={1360} y={760} o={ramp(t, sub, 0.4)}>
        <div style={{ position: "relative" }}>
          <div style={{ padding: "12px 30px", border: `3px dashed ${AMBER}`, borderRadius: 14, fontFamily: "SourceSans", fontSize: 32, color: CHALK }}>a substance underneath?</div>
          <Strike at={ph + 0.6} />
        </div>
      </At>
      <At x={1360} y={830} o={ramp(t, ph, 0.4)}><Glow color={WARM} size={30}>only a placeholder word</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. the chariot
const Chariot: React.FC<{ o?: number }> = ({ o = 1 }) => {
  const { t } = useT();
  return (
    <svg width={420} height={260} viewBox="0 0 420 260" style={{ opacity: o, overflow: "visible", filter: `drop-shadow(0 0 12px ${AMBER})` }}>
      <path d="M90 70 L300 70 L330 160 L70 160 Z" fill={`${AMBER}33`} stroke={AMBER} strokeWidth={5} strokeLinejoin="round" />
      <line x1={330} y1={130} x2={415} y2={105} stroke={AMBER} strokeWidth={6} strokeLinecap="round" />
      {[120, 280].map((x, i) => (
        <g key={i} transform={`translate(${x} 195) rotate(${t * 30})`}>
          <circle r={55} fill="none" stroke={CHALK} strokeWidth={6} />
          {Array.from({ length: 8 }).map((_, k) => <line key={k} x1={0} y1={0} x2={0} y2={-52} stroke={CHALK} strokeWidth={3} transform={`rotate(${k * 45})`} />)}
          <circle r={8} fill={CHALK} />
        </g>
      ))}
    </svg>
  );
};

const ChariotScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a0 = c("The old analysis of a chariot", 0.4);
  const sw = c("It searches seven ways");
  const em = c("Each comes up empty");
  const ei = c("no eighth place");
  const ways = ["its parts", "apart from them", "their collection", "their owner", "in the parts", "holding them", "their shape"];
  return (
    <AbsoluteFill>
      <At x={960} y={440} s={pop(t, fps, a0)}><Chariot /></At>
      <At x={960} y={110} o={ramp(t, a0, 0.4)}><Glow color={CHALK} size={44} serif>where is the chariot?</Glow></At>
      {ways.map((w, i) => {
        const a = -Math.PI / 2 + (i / 7) * Math.PI * 2;
        const x = 960 + 600 * Math.cos(a), y = 450 + 290 * Math.sin(a);
        return (
          <At key={i} x={x} y={Math.min(y, 780)} o={ramp(t, sw + i * 0.25, 0.3)}>
            <div style={{ position: "relative" }}><Chip color={[AMBER, TEAL, ROSE, VIOLET, ICE, GREEN, GOLD][i]} size={28}>{w}</Chip><Strike at={em + i * 0.12} /></div>
          </At>
        );
      })}
      <At x={960} y={250} s={pop(t, fps, ei)}><Chip color={DIM} size={30}>an eighth place?</Chip></At>
      <XMark x={960} y={250} r={50} at={ei + 0.6} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. efficacy is a relation
const EfficacyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nr = c("causal power does not rescue", 0.4);
  const rel = c("itself a relation");
  const rely = c("perfect reliability");
  const own = c("from its own side");
  const conds = [[560, 300, TEAL], [1360, 300, ROSE], [560, 640, VIOLET], [1360, 640, GREEN]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, nr, 0.4)}><Glow color={CHALK} size={44} serif>does causal power rescue it?</Glow></At>
      <At x={960} y={470} s={pop(t, fps, nr + 0.3)}><Orb size={110} color={AMBER} core={1} /></At>
      {conds.map(([x, y, col], i) => (
        <React.Fragment key={i}>
          <Flow x1={x} y1={y} x2={960 + (x - 960) * 0.18} y2={470 + (y - 470) * 0.18} color={col} p={ramp(t, rel + i * 0.2, 0.5)} />
          <At x={x} y={y} s={pop(t, fps, rel + i * 0.2)}><Chip color={col} size={28}>{["conditions", "effects", "conditions", "effects"][i]}</Chip></At>
        </React.Fragment>
      ))}
      <At x={960} y={620} o={ramp(t, rel + 0.6, 0.4)}><Glow color={GOLD} size={34}>producing effects: a relation</Glow></At>
      <At x={960} y={720} o={ramp(t, rely, 0.4)}><Chip color={GREEN} size={32}>works with perfect reliability</Chip></At>
      <StruckChip x={960} y={815} at={own - 0.2} strikeAt={own + 0.8} color={DIM} size={30}>exists from its own side</StruckChip>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const s0 = c("The search was never difficult", 0.4);
  const nf = c("never there to find");
  const u = ramp(t, s0, 3.0);
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, s0)}><Mountain w={900} /></At>
      <At x={620 + 680 * u} y={330 + 100 * Math.sin(u * 8)} o={between(t, s0 + 0.2, nf + 1.0, 0.4)}><Lens /></At>
      <At x={960} y={110} o={ramp(t, nf, 0.6)}><Glow color={GOLD} size={50} serif>nothing to find</Glow></At>
      <At x={960} y={790} o={ramp(t, nf + 0.8, 0.6)}><Glow color={ICE} size={36}>and the mountain, still here</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["mountain", 0], ["stories", c("First, a distinction", 0.6)], ["rope", c("Think of long and short", 0.6)],
    ["mountain", c("Now, the mountain", 0.6)], ["stories", c("no line written into nature", 0.6)], ["sun", c("A sceptic pushes back", 0.6)],
    ["sceptic", c("The sceptic's strongest reply", 0.6)], ["cup", c("So try a test", 0.6)], ["sceptic", c("The old analysis of a chariot", 0.6)],
    ["rope", c("causal power does not rescue", 0.6)], ["mountain", c("The search was never difficult", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("First, a distinction", 0.9)], <QuestionScene />],
    [S("First, a distinction", "Think of long and short"), <StoriesScene />],
    [S("Think of long and short", "Now, the mountain"), <RopeScene />],
    [S("Now, the mountain", "no line written into nature"), <SearchScene />],
    [S("no line written into nature", "A sceptic pushes back"), <NoLineScene />],
    [S("A sceptic pushes back", "The sceptic's strongest reply"), <ProcessScene />],
    [S("The sceptic's strongest reply", "So try a test"), <ReplyScene />],
    [S("So try a test", "The old analysis of a chariot"), <CupScene />],
    [S("The old analysis of a chariot", "causal power does not rescue"), <ChariotScene />],
    [S("causal power does not rescue", "The search was never difficult"), <EfficacyScene />],
    [S("The search was never difficult", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
