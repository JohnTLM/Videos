// Anatta to Emptiness, Chapter 10: The Disease of Relentless Negation & The Principle of Formation.
// Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "taking the world apart", "Every essence has been refuted", "solid existence has fallen", "Surely the work is done",
  "a quiet danger", "seldom discussed", "nothing remains to be negated", "nothing remains to be understood", "the disease of relentless negation",
  "Why a disease", "does not explain formation", "a solid world coming into being", "vivid, stable, reliable and useful",
  "Four insights carry negation",
  "First, emptiness and appearance", "not a leftover", "needed an essence", "Nothing is subtracted", "The red of the flower", "the ring of the bell",
  "empty and vivid at once",
  "Second, an inner causal power", "the power to grow", "only to say that it grows", "Seed, soil, water and warmth", "No producer hides",
  "Third, a substrate explains nothing", "something underneath", "a field, matter, consciousness", "down a level", "Why does the field behave",
  "Conditions need no foundation",
  "Fourth, beyond cause and effect", "spring from nowhere", "conditions stop working", "a hidden why", "Spontaneous presence names", "nothing hidden",
  "negation turns round", "existed from its own side", "could not form", "could not change", "the world forms at all", "shows it to be empty",
  "formation has three sides", "none comes first", "Clarity", "simply presents itself", "Stable working", "fire burns", "water wets",
  "language communicates", "And designation", "mountains, persons and galaxies", "arising together with what they name",
  "the demand for an ultimate why", "explanations within convention", "Medicine, money, science", "calendars all flourish",
  "because dependent arising is empty",
  "The cure for relentless negation", "not less analysis", "seeing how the world forms",
];

const DEEP = "#D4A245", INDIGO = "#7C74F0";

const M = {
  apart: { a: "rgba(60,50,140,0.5)", b: "rgba(150,100,40,0.4)", c: "rgba(40,80,120,0.3)" },
  danger: { a: "rgba(130,50,60,0.45)", b: "rgba(60,45,130,0.5)", c: "rgba(150,100,40,0.3)" },
  form: { a: "rgba(180,130,50,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(50,130,120,0.35)" },
  four: { a: "rgba(70,60,160,0.5)", b: "rgba(170,125,50,0.4)", c: "rgba(40,110,130,0.3)" },
  turn: { a: "rgba(185,140,55,0.5)", b: "rgba(60,60,150,0.45)", c: "rgba(60,140,120,0.35)" },
  triad: { a: "rgba(80,60,170,0.5)", b: "rgba(180,130,50,0.45)", c: "rgba(50,120,140,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Flower: React.FC<{ size?: number; open?: number }> = ({ size = 200, open = 1 }) => (
  <svg width={size} height={size * 1.4} viewBox="-100 -100 200 280" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${ROSE})` }}>
    <path d="M0 40 Q-6 120 0 175" stroke={GREEN} strokeWidth={6} fill="none" />
    <path d="M0 120 Q40 95 60 110 Q35 130 0 128" fill={`${GREEN}88`} />
    {Array.from({ length: 6 }).map((_, i) => (
      <ellipse key={i} cx={0} cy={-38 * open} rx={24 * open + 4} ry={44 * open + 6} fill="#E8455E" opacity={0.9} stroke="#FF8FA3" strokeWidth={2}
        transform={`rotate(${i * 60})`} />
    ))}
    <circle r={20} fill={GOLD} />
  </svg>
);

const Bell: React.FC<{ swing: number }> = ({ swing }) => (
  <svg width={180} height={200} viewBox="-90 -20 180 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <g transform={`rotate(${swing})`}>
      <path d="M0 0 L0 20" stroke={GOLD} strokeWidth={5} />
      <path d="M-60 140 Q-60 40 0 28 Q60 40 60 140 L75 150 L-75 150 Z" fill={`${DEEP}55`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <circle cx={0} cy={160} r={12} fill={GOLD} />
    </g>
  </svg>
);

const Sprout: React.FC<{ grow: number; core?: number }> = ({ grow, core = 0 }) => (
  <svg width={260} height={300} viewBox="-130 -220 260 300" style={{ overflow: "visible" }}>
    <ellipse cx={0} cy={30} rx={46} ry={30} fill="#8a5a34" stroke={DEEP} strokeWidth={4} />
    <circle cx={0} cy={30} r={14 * core} fill={GOLD} opacity={core} style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }} />
    <path d={`M0 6 L0 ${6 - 200 * grow}`} stroke={GREEN} strokeWidth={7} strokeLinecap="round" />
    {grow > 0.4 && <path d={`M0 ${6 - 110 * grow} Q-60 ${-40 - 110 * grow} -80 ${-10 - 110 * grow} Q-40 ${-10 - 100 * grow} 0 ${6 - 100 * grow}`} fill={`${GREEN}aa`} opacity={(grow - 0.4) / 0.6} />}
    {grow > 0.6 && <path d={`M0 ${6 - 170 * grow} Q60 ${-60 - 170 * grow} 80 ${-30 - 170 * grow} Q40 ${-30 - 160 * grow} 0 ${6 - 160 * grow}`} fill={`${GREEN}aa`} opacity={(grow - 0.6) / 0.4} />}
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

const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color?: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color = DIM, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

/** The four insights as a row of lamps; `active` lights the current one. */
const FourBar: React.FC<{ active: number; at: number }> = ({ active, at }) => {
  const { t } = useT();
  const names = ["never two", "no inner power", "no substrate", "no hidden why"];
  return (
    <>
      {names.map((n, i) => (
        <At key={i} x={420 + i * 360} y={110} o={ramp(t, at, 0.4) * (i === active ? 1 : i < active ? 0.6 : 0.3)}>
          <Chip color={i === active ? DEEP : DIM} size={i === active ? 32 : 26}>{["one", "two", "three", "four"][i]} · {n}</Chip>
        </At>
      ))}
    </>
  );
};

// ---------------------------------------------------------------- scenes
const ApartScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ap = c("taking the world apart", 0.4), ref = c("Every essence has been refuted"), fall = c("solid existence has fallen"), done = c("Surely the work is done");
  const burst = ramp(t, ap + 1.0, 1.4);
  return (
    <AbsoluteFill>
      {Array.from({ length: 16 }).map((_, i) => {
        const gx = (i % 4) - 1.5, gy = Math.floor(i / 4) - 1.5;
        const dx = gx * 60 + burst * (gx * 120 + (rand(i) - 0.5) * 200), dy = gy * 60 + burst * (gy * 70 + (rand(i + 3) - 0.5) * 160);
        return (
          <At key={i} x={960 + dx} y={430 + dy} r={burst * (rand(i + 7) - 0.5) * 120} s={pop(t, fps, ap + i * 0.02)}>
            <div style={{ width: 56, height: 56, borderRadius: 6, border: `2px solid ${[DEEP, INDIGO, TEAL][i % 3]}`, background: `${[DEEP, INDIGO, TEAL][i % 3]}44`,
              opacity: 1 - 0.6 * ramp(t, fall + i * 0.04, 0.5) }} />
          </At>
        );
      })}
      <At x={960} y={150} o={ramp(t, ap, 0.5)}><Glow color={CHALK} size={40} serif>taking the world apart</Glow></At>
      <StruckChip x={560} y={720} at={ref} strikeAt={ref + 0.9} size={32}>essence</StruckChip>
      <StruckChip x={1360} y={720} at={fall} strikeAt={fall + 0.9} size={32}>solid existence</StruckChip>
      <At x={960} y={800} o={ramp(t, done, 0.5)}><Glow color={GOLD} size={42} serif>the work is done?</Glow></At>
    </AbsoluteFill>
  );
};

const DangerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("a quiet danger", 0.4), neg = c("nothing remains to be negated"), und = c("nothing remains to be understood"), dis = c("the disease of relentless negation");
  const loop = ramp(t, dis, 0.6);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, d, 0.5)}><Glow color={WARM} size={44} serif>a quiet danger</Glow></At>
      <At x={960} y={360} o={ramp(t, d, 0.5) * (1 - ramp(t, neg, 0.4))}><Orb size={90 + 10 * Math.sin(t * 4)} color={WARM} /></At>
      <Ring x={960} y={360} p={((t - d) % 1.6) / 1.6 * (t > d && t < neg ? 1 : 0)} r0={50} r1={200} color={WARM} />
      <At x={960} y={215} o={ramp(t, c("seldom discussed"), 0.5)}><Glow color={DIM} size={30}>seldom discussed</Glow></At>
      <At x={560} y={360} o={ramp(t, neg, 0.4) * (1 - loop * 0.6)}><Chip color={ICE} size={34}>nothing left to negate</Chip></At>
      <Flow x1={800} y1={360} x2={1100} y2={360} color={WARM} p={ramp(t, und - 0.2, 0.5) * (1 - loop * 0.6)} />
      <At x={1360} y={360} o={ramp(t, und, 0.4) * (1 - loop * 0.6)}><Chip color={WARM} size={34}>nothing left to understand?</Chip></At>
      <At x={960} y={590} o={loop}>
        <svg width={440} height={440} viewBox="-180 -180 360 360" style={{ overflow: "visible", transform: `rotate(${t * 90}deg)`, filter: `drop-shadow(0 0 12px ${WARM})` }}>
          <path d="M0 -140 A140 140 0 1 1 -120 -72" fill="none" stroke={WARM} strokeWidth={10} strokeLinecap="round" />
          <path d="M-142 -96 L-120 -72 L-92 -88" fill="none" stroke={WARM} strokeWidth={10} strokeLinecap="round" />
        </svg>
      </At>
      {["not this", "not that", "not this"].map((w, i) => {
        const a = t * 1.6 + (i * Math.PI * 2) / 3;
        return <At key={i} x={960 + 280 * Math.cos(a)} y={590 + 190 * Math.sin(a)} o={loop * 0.85}><Glow color={DIM} size={28}>{w}</Glow></At>;
      })}
      <At x={960} y={590} o={ramp(t, dis + 0.5, 0.5)}><Glow color={WARM} size={34} serif>relentless negation</Glow></At>
    </AbsoluteFill>
  );
};

const FormationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("Why a disease", 0.4), expl = c("does not explain formation"), solid = c("a solid world coming into being"), viv = c("vivid, stable, reliable and useful");
  const qual = [["vivid", ROSE], ["stable", INDIGO], ["reliable", TEAL], ["useful", GOLD]] as const;
  return (
    <AbsoluteFill>
      {Array.from({ length: 9 }).map((_, i) => (
        <At key={i} x={380 + (rand(i) - 0.5) * 260} y={430 + (rand(i + 2) - 0.5) * 220} r={rand(i + 4) * 90} s={pop(t, fps, why + i * 0.03)}>
          <div style={{ width: 46, height: 46, borderRadius: 5, border: `2px solid ${DIM}`, background: `${DIM}33` }} />
        </At>
      ))}
      <At x={380} y={640} o={ramp(t, why + 0.3, 0.4)}><Glow color={DIM} size={30}>essences taken apart</Glow></At>
      <At x={840} y={430} o={ramp(t, expl, 0.4)}><Glow color={WARM} size={56}>?</Glow></At>
      <At x={1340} y={400} s={pop(t, fps, expl)}><Flower size={170} open={ramp(t, expl, 1.6)} /></At>
      <At x={1340} y={130} o={ramp(t, expl + 0.2, 0.5)}><Reveal text="formation" at={expl + 0.2} size={80} /></At>
      <StruckChip x={960} y={250} at={solid} strikeAt={solid + 1.2} size={30}>a solid world coming into being</StruckChip>
      {qual.map(([w, col], i) => (
        <At key={i} x={1000 + i * 230} y={720} s={pop(t, fps, viv + i * 0.3)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <At x={1340} y={800} o={ramp(t, viv + 1.4, 0.5)}><Glow color={CHALK} size={32}>empty, and appearing just as always</Glow></At>
    </AbsoluteFill>
  );
};

const FirstScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const four = c("Four insights carry negation", 0.4), first = c("First, emptiness and appearance"), left = c("not a leftover");
  const ess = c("needed an essence"), sub = c("Nothing is subtracted"), red = c("The red of the flower"), bell = c("the ring of the bell"), both = c("empty and vivid at once");
  const merge = ramp(t, first + 1.0, 1.2);
  const part2 = ramp(t, red - 0.3, 0.5);
  return (
    <AbsoluteFill>
      <FourBar active={t > first ? 0 : -1} at={four} />
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={600 + i * 240} y={420} s={pop(t, fps, four + 0.2 + i * 0.2)} o={1 - ramp(t, first - 0.2, 0.4)}><Orb size={90} color={[ICE, GREEN, DEEP, VIOLET][i]} core={1} /></At>
      ))}
      <At x={960} y={600} o={ramp(t, four + 0.6, 0.4) * (1 - ramp(t, first - 0.2, 0.4))}><Glow color={CHALK} size={40} serif>four insights</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960 - 170 * (1 - merge)} y={400} s={pop(t, fps, first)}><Orb size={180} color={ICE} /></At>
        <At x={960 + 170 * (1 - merge)} y={400} s={pop(t, fps, first + 0.3)}><Orb size={180} color={ROSE} /></At>
        <At x={960 - 260 * (1 - merge)} y={560} o={ramp(t, first, 0.4) * (1 - merge)}><Glow color={ICE} size={30}>emptiness</Glow></At>
        <At x={960 + 260 * (1 - merge)} y={560} o={ramp(t, first + 0.3, 0.4) * (1 - merge)}><Glow color={ROSE} size={30}>appearance</Glow></At>
        <At x={960} y={560} o={merge}><Glow color={GOLD} size={40} serif>never two</Glow></At>
        <StruckChip x={480} y={700} at={left} strikeAt={left + 1.0}>appearance as a leftover</StruckChip>
        <StruckChip x={1440} y={700} at={ess} strikeAt={ess + 1.2}>appearance needs an essence</StruckChip>
        <At x={960} y={800} o={ramp(t, sub, 0.4)}><Chip color={GREEN} size={32}>nothing subtracted</Chip></At>
      </AbsoluteFill>
      <At x={660} y={460} s={pop(t, fps, red)}><Flower size={180} open={ramp(t, red, 1.2)} /></At>
      <At x={1260} y={430} s={pop(t, fps, bell)}><Bell swing={Math.sin((t - bell) * 5) * 14 * ramp(t, bell, 0.3)} /></At>
      <Ring x={1260} y={460} p={(t - bell) % 1.2 / 1.2 * ramp(t, bell, 0.2)} r0={90} r1={260} color={GOLD} />
      <At x={960} y={800} o={ramp(t, both, 0.5)}><Glow color={DEEP} size={44} serif>empty and vivid at once</Glow></At>
    </AbsoluteFill>
  );
};

const SecondScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("Second, an inner causal power", 0.4), pw = c("the power to grow"), only = c("only to say that it grows");
  const conds = c("Seed, soil, water and warmth"), prod = c("No producer hides");
  const grow = ramp(t, conds, 2.2);
  const items = [
    { x: 620, y: 640, txt: "soil", col: DEEP }, { x: 650, y: 330, txt: "water", col: ICE }, { x: 1300, y: 330, txt: "warmth", col: GOLD }, { x: 1300, y: 640, txt: "seed", col: GREEN },
  ];
  return (
    <AbsoluteFill>
      <FourBar active={1} at={sec - 0.6} />
      <At x={960} y={520} s={pop(t, fps, sec)}><Sprout grow={grow} core={between(t, pw, only + 1.0)} /></At>
      <At x={960} y={250} o={between(t, pw, conds)}>
        <div style={{ position: "relative" }}><Chip color={GOLD} size={34}>"the power to grow"</Chip><Strike at={only + 0.6} /></div>
      </At>
      <At x={960} y={320} o={between(t, only, conds)}><Glow color={DIM} size={30}>it grows because it grows · a name, not an explanation</Glow></At>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <Flow x1={it.x} y1={it.y} x2={960} y2={520} color={it.col} p={ramp(t, conds + i * 0.3, 0.6)} />
          <At x={it.x} y={it.y} s={pop(t, fps, conds + i * 0.3)}><Chip color={it.col} size={34}>{it.txt}</Chip></At>
        </React.Fragment>
      ))}
      <At x={960} y={800} o={ramp(t, prod, 0.5)}><Glow color={CHALK} size={38} serif>designated together · no producer inside</Glow></At>
    </AbsoluteFill>
  );
};

const ThirdScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("Third, a substrate explains nothing", 0.4), und = c("something underneath"), fmc = c("a field, matter, consciousness");
  const lvl = c("down a level"), why = c("Why does the field behave"), nofound = c("Conditions need no foundation");
  const gone = ramp(t, nofound + 0.3, 1.2);
  const qy = 330 + 300 * ramp(t, lvl, 1.2);
  const nodes = [[760, 330], [960, 270], [1160, 330], [860, 420], [1060, 420]];
  return (
    <AbsoluteFill>
      <FourBar active={2} at={th - 0.6} />
      <Svg>
        {[[0, 1], [1, 2], [0, 3], [3, 4], [4, 2], [1, 3], [1, 4]].map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1] - 40 * gone} x2={nodes[b][0]} y2={nodes[b][1] - 40 * gone} stroke={TEAL} strokeWidth={3} opacity={ramp(t, th, 0.6)} />
        ))}
      </Svg>
      {nodes.map(([x, y], i) => <At key={i} x={x} y={y - 40 * gone} s={pop(t, fps, th + i * 0.1)}><Orb size={40} color={[TEAL, GOLD, VIOLET, ROSE, ICE][i]} /></At>)}
      {/* a substrate slab, shown only so it can be removed */}
      <div style={{ position: "absolute", left: 600, top: 540 + gone * 200, width: 720, height: 80, borderRadius: 8, border: `3px solid ${DEEP}`, background: `${DEEP}2a`,
        boxShadow: `0 0 30px ${DEEP}66`, opacity: ramp(t, und, 0.5) * (1 - gone), transform: `rotate(${gone * 7}deg)` }} />
      {["field", "matter", "consciousness"].map((w, i) => (
        <At key={i} x={720 + i * 240} y={580 + gone * 200} o={ramp(t, fmc + i * 0.4, 0.4) * (1 - gone)}><Glow color={DEEP} size={32}>{w}</Glow></At>
      ))}
      <At x={1480} y={qy} o={between(t, lvl - 0.2, nofound)}><Glow color={WARM} size={64}>?</Glow></At>
      <At x={1480} y={qy + 90} o={between(t, why, nofound)}><Glow color={WARM} size={28}>why does it behave so?</Glow></At>
      <At x={420} y={590} o={between(t, lvl, nofound)}><Glow color={DIM} size={30}>the question, moved down</Glow></At>
      <At x={960} y={760} o={ramp(t, nofound + 0.4, 0.5)}><Glow color={TEAL} size={42} serif>conditions need no foundation</Glow></At>
    </AbsoluteFill>
  );
};

const FourthScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const f = c("Fourth, beyond cause and effect", 0.4), nw = c("spring from nowhere"), stop = c("conditions stop working");
  const hw = c("a hidden why"), sp = c("Spontaneous presence names"), nh = c("nothing hidden");
  const bloom = ramp(t, sp, 1.6);
  return (
    <AbsoluteFill>
      <FourBar active={3} at={f - 0.6} />
      <At x={960} y={200} o={ramp(t, f, 0.5)}><Glow color={CHALK} size={40} serif>beyond cause and effect</Glow></At>
      <StruckChip x={560} y={330} at={nw} strikeAt={nw + 1.0}>springing from nowhere</StruckChip>
      <StruckChip x={1360} y={330} at={stop} strikeAt={stop + 1.0}>conditions switched off</StruckChip>
      <At x={960} y={500} o={between(t, hw, sp + 0.3)}>
        <div style={{ position: "relative", width: 300, height: 220, borderRadius: 10, background: `linear-gradient(90deg, ${INDIGO}55, ${INDIGO}22, ${INDIGO}55)`, border: `2px solid ${INDIGO}` }}>
          <div style={{ position: "absolute", left: 0, right: 0, top: 50 }}><Glow color={WARM} size={90}>?</Glow></div>
        </div>
      </At>
      <At x={960} y={660} o={between(t, hw + 0.3, sp + 0.3)}><Glow color={DIM} size={30}>a hidden why behind it · retired</Glow></At>
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i / 16) * Math.PI * 2 + t * 0.15, r = 60 + 200 * bloom;
        return <At key={i} x={960 + r * Math.cos(a)} y={500 + r * 0.7 * Math.sin(a)} o={bloom}><Orb size={30} color={[GOLD, ROSE, TEAL, VIOLET][i % 4]} /></At>;
      })}
      <At x={960} y={500} o={bloom}><Glow color={GOLD} size={44} serif>spontaneous presence</Glow></At>
      <At x={960} y={790} o={ramp(t, nh - 0.6, 0.5)}><Chip color={DEEP} size={32}>appearing, complete, owing nothing to anything hidden</Chip></At>
    </AbsoluteFill>
  );
};

const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const turn = c("negation turns round", 0.4), own = c("existed from its own side"), cf = c("could not form"), cc = c("could not change");
  const forms = c("the world forms at all"), emp = c("shows it to be empty");
  const rot = 180 * ramp(t, turn + 0.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={150} o={ramp(t, turn, 0.4)}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width={90} height={90} viewBox="-50 -50 100 100" style={{ transform: `rotate(${rot}deg)`, filter: `drop-shadow(0 0 8px ${GOLD})` }}>
            <path d="M-30 0 L30 0 M10 -20 L30 0 L10 20" fill="none" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
          </svg>
          <Glow color={GOLD} size={44} serif>negation turns round</Glow>
        </div>
      </At>
      <At x={520} y={430} s={pop(t, fps, own)}>
        <div style={{ width: 200, height: 200, borderRadius: 10, border: `4px solid ${DIM}`, background: "linear-gradient(140deg, #6b6680, #2c2a3a)", boxShadow: "0 0 30px #000" }} />
      </At>
      <At x={520} y={590} o={ramp(t, own + 0.3, 0.4)}><Glow color={DIM} size={28}>existing from its own side</Glow></At>
      {["could not form", "could not depend", "could not change"].map((w, i) => {
        const at = i === 0 ? cf : i === 1 ? (cf + cc) / 2 : cc;
        return <StruckChip key={i} x={330 + i * 190} y={690} at={at} strikeAt={at + 0.4} size={28}>{w.replace("could not ", "")}</StruckChip>;
      })}
      <At x={1380} y={420} s={pop(t, fps, forms)}><Flower size={200} open={ramp(t, forms, 1.4)} /></At>
      <At x={1180} y={300} s={pop(t, fps, forms + 0.3)}><Sun size={110} rot={t * 12} /></At>
      <At x={1380} y={700} o={ramp(t, forms + 0.4, 0.4)}><Glow color={ROSE} size={32}>the world forms, precisely</Glow></At>
      <At x={1380} y={780} o={ramp(t, emp, 0.5)}><Glow color={DEEP} size={44} serif>so it is empty</Glow></At>
    </AbsoluteFill>
  );
};

const TriadScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("formation has three sides", 0.4), none = c("none comes first");
  const cl = c("Clarity"), sw = c("Stable working"), des = c("And designation");
  const circ = [
    { x: 960, y: 360, col: GOLD, name: "clarity", at: cl },
    { x: 760, y: 590, col: TEAL, name: "stable working", at: sw },
    { x: 1160, y: 590, col: VIOLET, name: "designation", at: des },
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, three, 0.5)}><Glow color={CHALK} size={42} serif>three sides of formation · none first</Glow></At>
      {circ.map((k, i) => (
        <At key={i} x={k.x} y={k.y} s={pop(t, fps, none)}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", border: `3px solid ${k.col}`, background: `${k.col}${t > k.at ? "33" : "14"}`,
            boxShadow: `0 0 ${t > k.at ? 40 : 12}px ${k.col}88` }} />
        </At>
      ))}
      <Ring x={960} y={510} p={ramp(t, none, 1.4)} r0={100} r1={500} color={DEEP} />
      {/* clarity: rays, no ground */}
      {Array.from({ length: 10 }).map((_, i) => {
        const a = (i / 10) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={960 + 90 * Math.cos(a)} y={330 + 90 * Math.sin(a)} o={ramp(t, cl + i * 0.04, 0.4)}><div style={{ width: 8, height: 30, background: GOLD, borderRadius: 4, transform: `rotate(${(a * 180) / Math.PI + 90}deg)`, boxShadow: `0 0 10px ${GOLD}` }} /></At>;
      })}
      <At x={960} y={330} o={ramp(t, cl, 0.4)}><Glow color={GOLD} size={32}>clarity</Glow></At>
      <At x={1340} y={330} o={ramp(t, c("simply presents itself"), 0.4)}><Glow color={GOLD} size={28}>appearing itself · no hidden ground</Glow></At>
      <At x={760} y={560} o={ramp(t, sw, 0.4)}><Glow color={TEAL} size={30}>stable working</Glow></At>
      <At x={680} y={640} s={pop(t, fps, c("fire burns"))}><svg width={44} height={60} viewBox="0 0 44 60" style={{ filter: `drop-shadow(0 0 8px ${WARM})` }}><path d="M22 2 Q40 24 36 40 Q32 58 22 58 Q8 58 6 42 Q4 30 14 22 Q14 34 22 34 Q16 18 22 2 Z" fill={WARM} /></svg></At>
      <At x={760} y={650} s={pop(t, fps, c("water wets"))}><svg width={40} height={56} viewBox="0 0 40 56"><path d="M20 2 Q38 30 34 40 Q28 54 20 54 Q12 54 6 40 Q2 30 20 2 Z" fill={ICE} /></svg></At>
      <At x={840} y={640} s={pop(t, fps, c("language communicates"))}><Chip color={TEAL} size={22}>hello</Chip></At>
      <At x={1160} y={540} o={ramp(t, des, 0.4)}><Glow color={VIOLET} size={30}>designation</Glow></At>
      {["mountains", "persons", "galaxies"].map((w, i) => (
        <At key={i} x={1100 + (i % 2) * 120} y={600 + i * 40} s={pop(t, fps, c("mountains, persons and galaxies") + i * 0.3)}><Chip color={VIOLET} size={22}>{w}</Chip></At>
      ))}
      <At x={960} y={800} o={ramp(t, c("arising together with what they name"), 0.5)}><Glow color={CHALK} size={32}>names arising together with what they name</Glow></At>
    </AbsoluteFill>
  );
};

const CultureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const why = c("the demand for an ultimate why", 0.4), conv = c("explanations within convention"), med = c("Medicine, money, science"), cal = c("calendars all flourish");
  const emp = c("because dependent arising is empty");
  const items = [["medicine", ROSE], ["money", GOLD], ["science", TEAL], ["ethics", VIOLET], ["calendars", ICE]] as const;
  return (
    <AbsoluteFill>
      <At x={960} y={200} o={ramp(t, why, 0.4)}>
        <div style={{ position: "relative" }}><Glow color={WARM} size={60} serif>an ultimate why?</Glow><Strike at={why + 1.2} /></div>
      </At>
      <At x={960} y={300} o={ramp(t, conv, 0.4)}><Glow color={CHALK} size={34}>explanations within convention are enough</Glow></At>
      {items.map(([w, col], i) => {
        const at = med + i * 0.35 + (i >= 3 ? cal - med - 1.2 : 0);
        const x = 400 + i * 280, y = 470 + (i % 2) * 60;
        return (
          <React.Fragment key={i}>
            <At x={x} y={y} s={pop(t, fps, at)}><Orb size={70} color={col} /></At>
            <At x={x} y={y + 70} o={ramp(t, at + 0.2, 0.4)}><Glow color={col} size={30}>{w}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={960} y={680} s={pop(t, fps, emp)}><Orb size={90} color={DEEP} core={ramp(t, emp, 1)} /></At>
      <At x={960} y={800} o={ramp(t, emp + 0.3, 0.5)}><Glow color={DEEP} size={40} serif>flourishing, because empty</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cure = c("The cure for relentless negation", 0.4), less = c("not less analysis"), see = c("seeing how the world forms");
  return (
    <AbsoluteFill>
      <At x={960} y={170} o={ramp(t, cure, 0.5)}><Glow color={CHALK} size={40} serif>the cure</Glow></At>
      <StruckChip x={960} y={280} at={less} strikeAt={less + 0.9} size={32}>less analysis</StruckChip>
      <At x={960} y={490} s={pop(t, fps, see - 0.2)}><Flower size={200} open={ramp(t, see, 2.0)} /></At>
      <Ring x={960} y={470} p={ramp(t, see + 0.5, 2)} r0={100} r1={420} color={GOLD} />
      <At x={960} y={760}><Reveal text="seeing how the world forms" at={see + 0.2} size={70} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["apart", 0], ["danger", c("a quiet danger", 0.6)], ["form", c("Why a disease", 0.6)], ["four", c("Four insights carry negation", 0.6)],
    ["turn", c("negation turns round", 0.6)], ["triad", c("formation has three sides", 0.6)], ["form", c("the demand for an ultimate why", 0.6)],
    ["turn", c("The cure for relentless negation", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("a quiet danger", 0.9)], <ApartScene />],
    [S("a quiet danger", "Why a disease"), <DangerScene />],
    [S("Why a disease", "Four insights carry negation"), <FormationScene />],
    [S("Four insights carry negation", "Second, an inner causal power"), <FirstScene />],
    [S("Second, an inner causal power", "Third, a substrate explains nothing"), <SecondScene />],
    [S("Third, a substrate explains nothing", "Fourth, beyond cause and effect"), <ThirdScene />],
    [S("Fourth, beyond cause and effect", "negation turns round"), <FourthScene />],
    [S("negation turns round", "formation has three sides"), <TurnScene />],
    [S("formation has three sides", "the demand for an ultimate why"), <TriadScene />],
    [S("the demand for an ultimate why", "The cure for relentless negation"), <CultureScene />],
    [S("The cure for relentless negation", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
