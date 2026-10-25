// Anatta to Emptiness, Chapter 11: Ye Shes: When Analysis Becomes Transparent & Freedom from Elaboration.
// Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "nothing left to analyse", "a sharp wisdom", "analytical wisdom", "searches and negates", "a self, a causal power", "a hidden why", "nothing is found there",
  "every refuge is exhausted", "becomes transparent", "immediate wisdom", "not a mystical higher state", "a new knowledge added", "no longer driven",
  "where does freedom live", "silent absorption", "careful thought", "Freedom belongs to dependent arising", "free from elaboration", "adding extra layers",
  "Correct thinking", "stops projecting elaboration",
  "only one empty, conventional reality", "Two ways of knowing", "tastes its vivid presence", "never needed a foundation", "One tastes", "the other understands",
  "Neither creates",
  "hard to live", "make thought the enemy", "dust on a mirror", "a veil to be thinned", "a campaign against thinking", "Silence is made the ground",
  "two-storey picture", "the lift between floors",
  "tradition refuses that picture", "not obstacles", "They are its display", "expressive energy", "frees itself as it arises", "a drawing on water",
  "needs no eraser", "Unrecognized", "it binds", "never the thought", "a thing standing on its own",
  "this book's reading", "a luminous ground", "a lamp projects light", "the ground is empty", "Display means only", "nothing behind it",
  "A thought about lunch", "It does its work", "gets up and eats", "When it is sought", "Not in the head", "not in the words", "the one who seems to think it",
  "not raw material", "The sound of rain", "not a veil over appearance", "not a technique", "the end of needing to",
  "complete itself this way", "always needs an object", "somewhere to stand", "One by one", "one seam remains", "the analysing itself", "no longer exempt",
  "The same clarity", "nothing standing apart",
  "an open question", "it makes sense", "Nothing new was added", "simply completed itself",
];

const DEEP = "#D4A245", INDIGO = "#7C74F0";

const M = {
  search: { a: "rgba(60,50,150,0.5)", b: "rgba(160,115,45,0.4)", c: "rgba(40,100,130,0.3)" },
  clear: { a: "rgba(60,120,150,0.45)", b: "rgba(170,130,60,0.4)", c: "rgba(80,60,160,0.35)" },
  free: { a: "rgba(185,140,55,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(60,140,130,0.3)" },
  veil: { a: "rgba(70,50,110,0.5)", b: "rgba(110,70,60,0.35)", c: "rgba(40,70,120,0.3)" },
  display: { a: "rgba(40,120,150,0.5)", b: "rgba(90,70,170,0.45)", c: "rgba(180,130,60,0.35)" },
  lunch: { a: "rgba(170,120,60,0.45)", b: "rgba(60,60,150,0.45)", c: "rgba(60,140,120,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Lens: React.FC<{ clear?: number; size?: number }> = ({ clear = 0, size = 170 }) => (
  <svg width={size} height={size} viewBox="0 0 150 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${10 + 20 * clear}px ${clear > 0.5 ? GOLD : ICE})` }}>
    <circle cx={60} cy={60} r={44} fill={`rgba(170,220,240,${0.12 + 0.2 * clear})`} stroke={clear > 0.5 ? GOLD : ICE} strokeWidth={6 * (1 - clear) + 1} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" opacity={1 - clear} />
  </svg>
);

const Thought: React.FC<{ color?: string; size?: number; children?: React.ReactNode }> = ({ color = VIOLET, size = 130, children }) => (
  <div style={{ position: "relative", width: size, height: size * 0.77 }}>
    <svg width={size} height={size * 0.77} viewBox="0 0 130 100" style={{ position: "absolute", left: 0, top: 0, overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${color}33`} stroke={color} strokeWidth={3.5} />
      <circle cx={20} cy={84} r={6} fill={color} /><circle cx={8} cy={96} r={3.5} fill={color} />
    </svg>
    <div style={{ position: "absolute", left: 0, right: 0, top: size * 0.18, display: "flex", justifyContent: "center" }}>{children}</div>
  </div>
);

const Bowl: React.FC<{ s?: number }> = ({ s = 1 }) => (
  <svg width={70 * s} height={50 * s} viewBox="0 0 70 50">
    <path d="M5 18 L65 18 Q62 46 35 46 Q8 46 5 18 Z" fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
    {[20, 35, 50].map((x) => <path key={x} d={`M${x} 14 q -5 -6 0 -12`} fill="none" stroke={CHALK} strokeWidth={2} opacity={0.6} />)}
  </svg>
);

const Figure: React.FC<{ walk: number; sit: number }> = ({ walk, sit }) => {
  const sw = Math.sin(walk * 10) * 14 * (1 - sit);
  return (
    <svg width={120} height={220} viewBox="0 0 120 220" style={{ overflow: "visible" }}>
      <circle cx={60} cy={30} r={20} fill="none" stroke={CHALK} strokeWidth={5} />
      <path d={`M60 52 L60 ${130 + sit * 10} M60 75 L${35 + sw} 112 M60 75 L${85 - sw} 112 M60 ${130 + sit * 10} L${40 + sw} 205 M60 ${130 + sit * 10} L${80 - sw} 205`}
        stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" />
    </svg>
  );
};

const Crossed: React.FC<{ x: number; y: number; at: number; size?: number }> = ({ x, y, at, size = 60 }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - size} ${y - size} L${x + size} ${y + size}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={size * 3} />
      <DrawPath d={`M${x + size} ${y - size} L${x - size} ${y + size}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={size * 3} />
    </Svg>
  );
};

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color?: string; size?: number; o?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color = DIM, size = 32, o = 1, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4) * o}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

// ---------------------------------------------------------------- scenes
const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("nothing left to analyse", 0.4), w = c("a sharp wisdom"), cand = c("a self, a causal power"), why = c("a hidden why"), nf = c("nothing is found there");
  const items = [{ txt: "a self", col: ICE }, { txt: "a causal power", col: ROSE }, { txt: "a substrate", col: DEEP }, { txt: "a hidden why", col: VIOLET }];
  const span = Math.max(0.6, (why - cand) / 3);
  const ats = items.map((_, i) => cand + i * span);
  const k = Math.min(3, Math.max(0, Math.floor((t - cand) / span)));
  const lx = 420 + k * 360 + 30 * Math.sin(t * 3), ly = 520 + 20 * Math.cos(t * 3);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, q, 0.5) * (1 - ramp(t, w, 0.4))}><Glow color={CHALK} size={46} serif>nothing left to analyse?</Glow></At>
      <At x={960} y={150} o={ramp(t, w, 0.5)}><Glow color={ICE} size={42} serif>analytical wisdom · searches and negates</Glow></At>
      <At x={960} y={360} s={pop(t, fps, w)} o={1 - ramp(t, cand, 0.4)}><Lens size={220} /></At>
      {items.map((it, i) => (
        <StruckChip key={i} x={420 + i * 360} y={560} at={ats[i] - 0.2} strikeAt={nf + i * 0.2} color={it.col} size={32}>{it.txt}</StruckChip>
      ))}
      <At x={lx + 50} y={ly - 40} o={between(t, cand, nf + 0.4)}><Lens /></At>
      <At x={960} y={760} o={ramp(t, nf + 0.4, 0.5)}><Glow color={ICE} size={44} serif>nothing found</Glow></At>
    </AbsoluteFill>
  );
};

const ClearScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ex = c("every refuge is exhausted", 0.4), tr = c("becomes transparent"), im = c("immediate wisdom");
  const mys = c("not a mystical higher state"), nk = c("a new knowledge added"), dr = c("no longer driven");
  const clear = ramp(t, tr, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, ex, 0.4)}><Glow color={DIM} size={34}>every refuge exhausted</Glow></At>
      <At x={960} y={380} s={pop(t, fps, ex)}><Lens size={260} clear={clear} /></At>
      <Ring x={920} y={340} p={ramp(t, tr + 0.4, 1.8)} r0={100} r1={420} color={GOLD} />
      <At x={960} y={590}><Reveal text="immediate wisdom" at={im} size={80} /></At>
      <StruckChip x={460} y={720} at={mys} strikeAt={mys + 1.2}>a mystical higher state</StruckChip>
      <StruckChip x={1460} y={720} at={nk} strikeAt={nk + 1.0}>a new knowledge on top</StruckChip>
      <At x={960} y={800} o={ramp(t, dr, 0.5)}><Glow color={GOLD} size={36} serif>the same wisdom, no longer driven to establish what is real</Glow></At>
    </AbsoluteFill>
  );
};

const FreedomScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const wh = c("where does freedom live", 0.4), sil = c("silent absorption"), car = c("careful thought"), fb = c("Freedom belongs to dependent arising");
  const fe = c("free from elaboration"), lay = c("adding extra layers"), stop = c("stops projecting elaboration");
  const part2 = ramp(t, fb - 0.2, 0.5);
  const layers = ramp(t, lay, 1.0) * (1 - ramp(t, stop + 0.4, 1.0));
  const nodes = Array.from({ length: 9 }, (_, i) => ({ x: 760 + (i % 3) * 200 + (rand(i) - 0.5) * 60, y: 320 + Math.floor(i / 3) * 140 + (rand(i + 4) - 0.5) * 40 }));
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, wh, 0.4)}><Glow color={CHALK} size={42} serif>where does freedom live?</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={600} y={450} s={pop(t, fps, sil)}><Orb size={150} color={INDIGO} /></At>
        <At x={600} y={590} o={ramp(t, sil, 0.4)}><Glow color={INDIGO} size={32}>silent absorption?</Glow></At>
        <At x={1320} y={450} s={pop(t, fps, car)}><Thought size={170} /></At>
        <At x={1320} y={590} o={ramp(t, car, 0.4)}><Glow color={VIOLET} size={32}>careful thought?</Glow></At>
      </AbsoluteFill>
      <Svg style={{ opacity: part2 }}>
        {nodes.map((a, i) => nodes.slice(i + 1).filter((_, j) => (i + j) % 3 !== 2).map((b, j) =>
          <line key={`${i}-${j}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={GOLD} strokeWidth={2} opacity={0.35} />))}
      </Svg>
      {nodes.map((n, i) => <At key={i} x={n.x} y={n.y} s={pop(t, fps, fb + i * 0.05)}><Orb size={34} color={[GOLD, TEAL, ROSE][i % 3]} /></At>)}
      <At x={960} y={220} o={ramp(t, fb + 0.3, 0.5)}><Glow color={GOLD} size={36} serif>freedom belongs to dependent arising itself</Glow></At>
      {/* elaboration: extra layers piled on, then dropped */}
      {[0, 1, 2].map((k) => (
        <At key={k} x={960 + (k + 1) * 26} y={460 - (k + 1) * 22} o={layers * 0.7}>
          <div style={{ width: 520, height: 330, borderRadius: 14, border: `2px solid ${DIM}`, background: "rgba(160,150,140,0.12)" }} />
        </At>
      ))}
      <At x={1560} y={360} o={layers}><Glow color={DIM} size={30}>extra layers</Glow></At>
      <At x={960} y={720} o={ramp(t, fe, 0.5)}><Chip color={TEAL} size={32}>already empty · already free from elaboration</Chip></At>
      <At x={960} y={800} o={ramp(t, c("Correct thinking"), 0.5)}><Glow color={CHALK} size={32}>correct thinking stops adding layers</Glow></At>
    </AbsoluteFill>
  );
};

const RegistersScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("only one empty, conventional reality", 0.4), two = c("Two ways of knowing"), taste = c("tastes its vivid presence");
  const und = c("never needed a foundation"), nc = c("Neither creates");
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, one, 0.4)}><Glow color={CHALK} size={40} serif>one empty, conventional reality</Glow></At>
      <At x={960} y={420} s={pop(t, fps, one)}>
        <div style={{ position: "relative", width: 260, height: 260 }}>
          {Array.from({ length: 7 }).map((_, i) => {
            const a = (i / 7) * Math.PI * 2 + t * 0.3;
            return <div key={i} style={{ position: "absolute", left: 130 + 80 * Math.cos(a) - 22, top: 130 + 80 * Math.sin(a) - 22 }}><Orb size={44} color={[ROSE, GOLD, TEAL, VIOLET][i % 4]} /></div>;
          })}
          <div style={{ position: "absolute", left: 95, top: 95 }}><Orb size={70} color={GOLD} /></div>
        </div>
      </At>
      <At x={420} y={420} s={pop(t, fps, taste)}><Orb size={130} color={TEAL} /></At>
      <At x={420} y={560} o={ramp(t, taste, 0.4)}><Glow color={TEAL} size={30}>non-conceptual · tastes</Glow></At>
      <Flow x1={500} y1={420} x2={820} y2={420} color={TEAL} p={ramp(t, taste + 0.3, 0.6)} />
      <At x={1500} y={420} s={pop(t, fps, und - 0.6)}><Orb size={130} color={VIOLET} /></At>
      <At x={1500} y={560} o={ramp(t, und - 0.6, 0.4)}><Glow color={VIOLET} size={30}>conceptual · understands</Glow></At>
      <Flow x1={1420} y1={420} x2={1100} y2={420} color={VIOLET} p={ramp(t, und - 0.3, 0.6)} />
      <At x={960} y={260} o={ramp(t, two, 0.4)}><Glow color={DIM} size={30}>two ways of knowing</Glow></At>
      <At x={620} y={700} o={ramp(t, c("One tastes"), 0.4)}><Glow color={TEAL} size={40} serif>one tastes</Glow></At>
      <At x={1300} y={700} o={ramp(t, c("the other understands"), 0.4)}><Glow color={VIOLET} size={40} serif>the other understands</Glow></At>
      <At x={960} y={800} o={ramp(t, nc, 0.4)}><Chip color={GOLD} size={32}>neither creates what both disclose</Chip></At>
    </AbsoluteFill>
  );
};

const EnemyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hard = c("hard to live", 0.4), en = c("make thought the enemy"), dust = c("dust on a mirror"), veil = c("a veil to be thinned");
  const camp = c("a campaign against thinking"), gr = c("Silence is made the ground"), two = c("two-storey picture"), lift = c("the lift between floors");
  const part2 = ramp(t, gr - 0.3, 0.5);
  const ly = 560 - 220 * (0.5 + 0.5 * Math.sin((t - lift) * 1.6 - Math.PI / 2)) * ramp(t, lift, 0.3);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, hard, 0.4)}><Glow color={CHALK} size={36}>easy to state · hard to live</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960} y={210} o={ramp(t, en, 0.4)}><Glow color={WARM} size={42} serif>thought, the enemy?</Glow></At>
        <At x={480} y={460} s={pop(t, fps, dust)}>
          <div style={{ width: 260, height: 320, borderRadius: "50%", border: `5px solid ${DEEP}`, background: "linear-gradient(150deg, rgba(200,220,255,0.35), rgba(80,90,140,0.25))", boxShadow: `0 0 30px ${DEEP}66` }} />
        </At>
        {Array.from({ length: 24 }).map((_, i) => (
          <At key={i} x={400 + rand(i) * 160} y={340 + rand(i + 1) * 240} o={ramp(t, dust + 0.3 + i * 0.03, 0.3) * 0.8}>
            <div style={{ width: 8 + rand(i + 2) * 10, height: 8 + rand(i + 2) * 10, borderRadius: "50%", background: "#8a7f6a" }} />
          </At>
        ))}
        <At x={480} y={680} o={ramp(t, dust, 0.4)}><Glow color={DIM} size={28}>dust on a mirror</Glow></At>
        <At x={960} y={460} s={pop(t, fps, veil)}>
          <svg width={240} height={300} viewBox="0 0 240 300" style={{ overflow: "visible" }}>
            <path d={`M10 10 L230 10 L230 ${280 + 10 * Math.sin(t * 2)} Q180 ${300 + 8 * Math.sin(t * 2.4)} 120 ${282} Q60 ${300 - 8 * Math.sin(t * 2)} 10 ${280} Z`}
              fill="rgba(180,170,210,0.35)" stroke={DIM} strokeWidth={3} />
          </svg>
        </At>
        <At x={960} y={680} o={ramp(t, veil, 0.4)}><Glow color={DIM} size={28}>a veil to be thinned</Glow></At>
        <At x={1440} y={420} s={pop(t, fps, camp)} r={Math.sin(t * 9) * 6 * ramp(t, camp + 0.3, 0.3)}><Thought size={170} color={VIOLET} /></At>
        <Crossed x={1440} y={420} at={camp + 0.6} size={80} />
        <At x={1440} y={680} o={ramp(t, camp, 0.4)}><Glow color={WARM} size={28}>a campaign against thinking</Glow></At>
      </AbsoluteFill>
      {/* the two-storey picture, shown only to be refused */}
      <AbsoluteFill style={{ opacity: part2 }}>
        <At x={760} y={460} s={pop(t, fps, gr)}>
          <svg width={420} height={480} viewBox="0 0 420 480" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${DIM})` }}>
            <path d="M20 160 L210 20 L400 160" fill="none" stroke={CHALK} strokeWidth={5} />
            <rect x={40} y={160} width={340} height={150} fill="rgba(155,123,255,0.15)" stroke={VIOLET} strokeWidth={4} />
            <rect x={40} y={310} width={340} height={150} fill="rgba(124,116,240,0.25)" stroke={INDIGO} strokeWidth={4} />
            <rect x={330} y={160} width={50} height={300} fill="none" stroke={DIM} strokeWidth={2} strokeDasharray="6 6" />
          </svg>
        </At>
        <At x={680} y={400} o={ramp(t, gr + 0.6, 0.4)}><Glow color={VIOLET} size={30}>thought · contamination</Glow></At>
        <At x={680} y={550} o={ramp(t, gr + 0.2, 0.4)}><Glow color={INDIGO} size={30}>silence · the ground</Glow></At>
        <At x={935} y={ly} o={ramp(t, lift, 0.4)}><div style={{ width: 40, height: 60, borderRadius: 6, background: GOLD, boxShadow: `0 0 16px ${GOLD}` }} /></At>
        <At x={1380} y={380} o={ramp(t, two, 0.4)}><Glow color={CHALK} size={38} serif>the two-storey picture</Glow></At>
        <At x={1380} y={480} o={ramp(t, lift, 0.4)}><Glow color={GOLD} size={32}>meditation as the lift</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const DisplayScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ref = c("tradition refuses that picture", 1.4), obs = c("not obstacles"), disp = c("They are its display"), en = c("expressive energy");
  const fr = c("frees itself as it arises"), wat = c("a drawing on water"), unr = c("Unrecognized"), bind = c("it binds");
  const nt = c("never the thought"), st = c("a thing standing on its own");
  const part2 = ramp(t, unr - 0.3, 0.5);
  const draw = ramp(t, wat, 1.2), melt = ramp(t, wat + 1.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, ref, 0.4)}><Glow color={CHALK} size={36}>the two-storey picture · refused</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <StruckChip x={560} y={230} at={obs} strikeAt={obs + 0.8}>obstacles in front</StruckChip>
        {Array.from({ length: 10 }).map((_, i) => {
          const life = ((t - disp) * 0.25 + rand(i)) % 1;
          return <At key={i} x={420 + rand(i + 1) * 600} y={600 - life * 300} o={ramp(t, disp + i * 0.08, 0.4) * Math.sin(life * Math.PI)} s={0.5 + rand(i + 2) * 0.4}>
            <Thought color={[VIOLET, TEAL, GOLD, ROSE][i % 4]} /></At>;
        })}
        <At x={720} y={680} o={ramp(t, disp, 0.4)}><Glow color={TEAL} size={36} serif>display · expressive energy</Glow></At>
        <At x={1420} y={290} o={ramp(t, fr, 0.4)}><Glow color={GOLD} size={32}>freeing itself as it arises</Glow></At>
        {/* water surface */}
        <Svg>
          {[0, 1, 2].map((k) => (
            <path key={k} d={Array.from({ length: 40 }, (_, i) => `${i ? "L" : "M"}${1180 + i * 13} ${520 + k * 40 + 6 * Math.sin(i / 3 + t * 2 + k)}`).join(" ")}
              fill="none" stroke={ICE} strokeWidth={2} opacity={0.4 * ramp(t, fr, 0.5)} />
          ))}
          <g opacity={1 - melt}>
            <DrawPath d="M1250 500 C 1300 420, 1380 420, 1420 480 S 1520 560, 1600 470" p={draw} color={GOLD} width={6} len={500} />
          </g>
        </Svg>
        <At x={1420} y={680} o={ramp(t, c("needs no eraser"), 0.4)}><Glow color={ICE} size={30}>a drawing on water · no eraser needed</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: part2 }}>
        <At x={760} y={440} s={pop(t, fps, unr)}>
          <div style={{ width: 200, height: 160, borderRadius: 12, background: "linear-gradient(140deg, #6b6680, #2c2a3a)", border: `4px solid ${DIM}`, boxShadow: "0 0 30px #000",
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={CHALK} size={30}>a thought</Glow></div>
        </At>
        <Svg>
          {[0, 1, 2, 3, 4].map((i) => (
            <ellipse key={i} cx={880 + i * 52} cy={440} rx={30} ry={16} fill="none" stroke={DEEP} strokeWidth={6} opacity={ramp(t, bind + i * 0.1, 0.3)} />
          ))}
        </Svg>
        <At x={760} y={600} o={ramp(t, unr + 0.3, 0.4)}><Glow color={DIM} size={30}>taken as solid · it binds</Glow></At>
        <At x={1400} y={440} s={pop(t, fps, nt)}><Thought size={180} color={TEAL} /></At>
        <At x={1400} y={600} o={ramp(t, nt, 0.4)}><Glow color={TEAL} size={30}>the same thought, recognized</Glow></At>
        <At x={960} y={780} o={ramp(t, st, 0.5)}><Chip color={GOLD} size={32}>the difference: read as a thing standing on its own?</Chip></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const ReadingScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rd = c("this book's reading", 0.4), lg = c("a luminous ground"), lamp = c("a lamp projects light"), ge = c("the ground is empty");
  const dm = c("Display means only"), nb = c("nothing behind it");
  const gone = ramp(t, ge + 0.3, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, rd, 0.5)}><Glow color={DIM} size={30}>in this book's reading</Glow></At>
      {/* a lamp-like ground behind thoughts: shown only so it can be removed */}
      <At x={560} y={460} s={pop(t, fps, lg)} o={1 - gone}>
        <svg width={200} height={260} viewBox="0 0 200 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 20px ${GOLD})` }}>
          <path d="M60 20 L140 20 L170 120 L30 120 Z" fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} strokeDasharray={t > ge ? "10 8" : undefined} />
          <rect x={92} y={120} width={16} height={100} fill={DIM} /><rect x={50} y={220} width={100} height={18} rx={6} fill={DIM} />
        </svg>
      </At>
      <Svg style={{ opacity: ramp(t, lamp, 0.5) * (1 - gone) }}>
        <path d={`M640 420 L1300 300 L1300 620 L640 500 Z`} fill={`${GOLD}22`} />
      </Svg>
      <At x={560} y={660} o={ramp(t, lg + 0.3, 0.4) * (1 - gone)}><Glow color={GOLD} size={30}>a luminous ground?</Glow></At>
      <Crossed x={560} y={440} at={ge} size={110} />
      {[0, 1, 2].map((i) => (
        <At key={i} x={1160 + i * 170} y={360 + (i % 2) * 140 + 10 * Math.sin(t * 1.5 + i)} s={pop(t, fps, lamp + i * 0.2)}>
          <Thought size={130} color={[VIOLET, TEAL, ROSE][i]} />
        </At>
      ))}
      <At x={960} y={200} o={ramp(t, ge, 0.5)}><Chip color={ICE} size={32}>the ground is empty</Chip></At>
      <At x={1330} y={660} o={ramp(t, dm, 0.5)}><Glow color={TEAL} size={34} serif>dependent arising · vivid, unobstructed</Glow></At>
      <At x={960} y={790} o={ramp(t, nb, 0.5)}><Glow color={CHALK} size={42} serif>nothing behind it</Glow></At>
    </AbsoluteFill>
  );
};

const LunchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("A thought about lunch", 0.4), wk = c("It does its work"), eat = c("gets up and eats"), so = c("When it is sought");
  const head = c("Not in the head"), words = c("not in the words"), one = c("the one who seems to think it");
  const walk = ramp(t, wk + 0.2, 2.0);
  const fade = ramp(t, so + 0.3, 1.0);
  return (
    <AbsoluteFill>
      <At x={560 + 520 * walk} y={540} s={pop(t, fps, th)}><Figure walk={t * (walk > 0 && walk < 1 ? 1 : 0)} sit={0} /></At>
      <At x={620} y={300} s={pop(t, fps, th + 0.2)} o={1 - fade * 0.8}><Thought size={200} color={GOLD}><Bowl s={0.9} /></Thought></At>
      <At x={1180} y={600} s={pop(t, fps, wk)}><Bowl s={2} /></At>
      <At x={1180} y={700} o={ramp(t, eat, 0.4)}><Glow color={GOLD} size={32}>it does its work</Glow></At>
      <At x={960} y={130} o={ramp(t, so, 0.4)}><Glow color={ICE} size={40} serif>sought · not found</Glow></At>
      <StruckChip x={1500} y={260} at={head} strikeAt={head + 0.6}>in the head</StruckChip>
      <StruckChip x={1500} y={370} at={words} strikeAt={words + 0.6}>in the words</StruckChip>
      <StruckChip x={1500} y={480} at={one} strikeAt={one + 1.0}>in a thinker</StruckChip>
    </AbsoluteFill>
  );
};

const RainScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const raw = c("not raw material", 0.4), rain = c("The sound of rain"), veil = c("not a veil over appearance"), tech = c("not a technique"), end = c("the end of needing to");
  return (
    <AbsoluteFill>
      {Array.from({ length: 46 }).map((_, i) => {
        const x = 280 + rand(i) * 640, y = 160 + (((t - rain) * (380 + rand(i + 1) * 200) + rand(i + 2) * 560) % 560);
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: 3, height: 24, borderRadius: 2, background: ICE, opacity: ramp(t, rain, 0.6) * 0.7 }} />;
      })}
      <At x={600} y={780} o={ramp(t, rain + 0.4, 0.5)}><Glow color={ICE} size={40} serif>already rain</Glow></At>
      <StruckChip x={1380} y={240} at={raw} strikeAt={raw + 1.2}>raw material, waiting for thought</StruckChip>
      <StruckChip x={1380} y={380} at={veil} strikeAt={veil + 1.0}>thought, a veil over appearance</StruckChip>
      <StruckChip x={1380} y={520} at={tech} strikeAt={tech + 1.2}>a technique to get rid of thought</StruckChip>
      <At x={1380} y={680} o={ramp(t, end, 0.5)}><Glow color={GOLD} size={42} serif>the end of needing to</Glow></At>
    </AbsoluteFill>
  );
};

const SeamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("complete itself this way", 0.4), obj = c("always needs an object"), stand = c("somewhere to stand"), obo = c("One by one");
  const seam = c("one seam remains"), an = c("the analysing itself"), ex = c("no longer exempt"), same = c("The same clarity"), apart = c("nothing standing apart");
  const objs = ["essence", "causal power", "substrate", "the where", "the why"];
  const close = ramp(t, ex + 0.3, 1.4);
  const clear = ramp(t, same, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, why, 0.4)}><Glow color={CHALK} size={38} serif>why analysis completes itself</Glow></At>
      <At x={560} y={440} s={pop(t, fps, why + 0.4)}><Lens size={200} clear={clear} /></At>
      <At x={560} y={600} o={ramp(t, obj, 0.4) * (1 - clear)}><Glow color={ICE} size={28}>always needs an object</Glow></At>
      {objs.map((w, i) => (
        <At key={i} x={1200 + (i % 2) * 260} y={240 + i * 90} s={pop(t, fps, stand + i * 0.15)} o={1 - ramp(t, obo + i * 0.45, 0.5)}>
          <Chip color={[DEEP, ROSE, INDIGO, TEAL, VIOLET][i]} size={28}>{w}</Chip>
        </At>
      ))}
      <At x={1300} y={680} o={ramp(t, obo, 0.4) * (1 - ramp(t, seam, 0.4))}><Glow color={DIM} size={30}>places to stand, removed</Glow></At>
      {/* the last seam: searcher | searched */}
      <At x={1160} y={440} o={ramp(t, seam, 0.4) * (1 - close)}><Chip color={ICE} size={32}>searcher</Chip></At>
      <At x={1520} y={440} o={ramp(t, seam, 0.4) * (1 - close)}><Chip color={VIOLET} size={32}>searched</Chip></At>
      <Svg style={{ opacity: ramp(t, seam, 0.4) * (1 - close) }}>
        <line x1={1340} y1={340} x2={1340} y2={540} stroke={WARM} strokeWidth={5} strokeDasharray="12 8" />
      </Svg>
      <At x={1340} y={600} o={ramp(t, an, 0.4) * (1 - close)}><Glow color={WARM} size={30}>the last seam: the analysing itself</Glow></At>
      <At x={1340} y={440} o={close}><Orb size={150} color={GOLD} /></At>
      <Ring x={1340} y={440} p={ramp(t, ex + 0.8, 1.6)} r0={80} r1={340} color={GOLD} />
      <At x={960} y={790} o={ramp(t, same, 0.5)}><Glow color={GOLD} size={40} serif>the same clarity · nothing apart from it</Glow></At>
      <At x={1340} y={250} o={ramp(t, apart, 0.4)}><Glow color={DIM} size={28}>no object left standing apart</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const q = c("an open question", 0.4), sense = c("it makes sense"), add = c("Nothing new was added"), done = c("simply completed itself");
  return (
    <AbsoluteFill>
      <At x={560} y={300} o={ramp(t, q, 0.4)}><Chip color={DIM} size={32}>by analysis alone? · an open question</Chip></At>
      <At x={1360} y={300} o={ramp(t, sense, 0.4)}><Chip color={TEAL} size={32}>once it happens, it makes sense</Chip></At>
      <At x={960} y={480} s={pop(t, fps, add)}><Lens size={200} clear={ramp(t, add, 1.2)} /></At>
      <Ring x={920} y={440} p={ramp(t, done, 2)} r0={80} r1={460} color={GOLD} />
      <At x={960} y={760}><Reveal text="the wisdom completed itself" at={done} size={70} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["search", 0], ["clear", c("every refuge is exhausted", 0.6)], ["free", c("where does freedom live", 0.6)],
    ["display", c("only one empty, conventional reality", 0.6)], ["veil", c("hard to live", 0.6)], ["display", c("tradition refuses that picture", 0.6)],
    ["free", c("this book's reading", 0.6)], ["lunch", c("A thought about lunch", 0.6)], ["display", c("not raw material", 0.6)],
    ["search", c("complete itself this way", 0.6)], ["clear", c("an open question", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("every refuge is exhausted", 0.9)], <SearchScene />],
    [S("every refuge is exhausted", "where does freedom live"), <ClearScene />],
    [S("where does freedom live", "only one empty, conventional reality"), <FreedomScene />],
    [S("only one empty, conventional reality", "hard to live"), <RegistersScene />],
    [S("hard to live", "tradition refuses that picture", 0.5, 1.5), <EnemyScene />],
    [S("tradition refuses that picture", "this book's reading", 1.6), <DisplayScene />],
    [S("this book's reading", "A thought about lunch"), <ReadingScene />],
    [S("A thought about lunch", "not raw material"), <LunchScene />],
    [S("not raw material", "complete itself this way"), <RainScene />],
    [S("complete itself this way", "an open question"), <SeamScene />],
    [S("an open question", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
