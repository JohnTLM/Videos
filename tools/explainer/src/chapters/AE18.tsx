// Anatta to Emptiness, Chapter 18: Beyond the Extremes. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Everything so far now meets", "cares about most", "Death",
  "a precise shape", "It needs three things", "a bounded, unified someone", "a future event", "Third, a bridge", "A single thread joining",
  "Remove any one of these", "nothing to run on",
  "The flower was searched", "Run the same search", "Not the body alone", "the loss of a limb", "Not a thought or a memory",
  "while the word stays", "bundled together", "A heap of parts", "something apart from all these",
  "never a name for a hidden bearer", "the life's own appearances", "recognized and labelled", "no manager doing the binding",
  "the crucial point", "was never present", "Not even now", "cannot get started", "none was ever found",
  "Conventionally, of course", "a flower decays", "works perfectly well",
  "Two misreadings", "something in you survives", "radiance, presence or awareness", "keeps the whole structure", "a subtler bearer", "That is eternalism",
  "The second misreading", "a person is born", "A birth certificate", "A death is still mourned", "a narrower claim",
  "the old extremes fall away", "No arising and no ceasing", "No permanence and no annihilation", "No unity breaking into many", "no coming or going",
  "clever negative answers", "simply stop applying", "Coming needs a traveller", "Disintegration needs a prior unity", "was ever supplied",
  "no one here who was afraid", "Fear needs an object", "keeps finding none", "Not in the body", "Not in the mind", "Not in space",
  "vivid, unobstructed formation", "nothing for death to happen to", "nothing that needed saving",
];

const DEEP_GOLD = "#D9A441", INDIGO = "#6C6CF0";

const M = {
  open: { a: "rgba(50,45,130,0.55)", b: "rgba(160,120,50,0.35)", c: "rgba(40,70,120,0.3)" },
  fear: { a: "rgba(100,45,90,0.45)", b: "rgba(50,45,130,0.5)", c: "rgba(150,100,50,0.3)" },
  search: { a: "rgba(170,125,50,0.45)", b: "rgba(55,50,145,0.5)", c: "rgba(40,100,120,0.3)" },
  never: { a: "rgba(40,60,140,0.5)", b: "rgba(170,130,60,0.4)", c: "rgba(80,50,130,0.3)" },
  conv: { a: "rgba(60,130,100,0.4)", b: "rgba(170,130,60,0.4)", c: "rgba(60,50,140,0.35)" },
  refuse: { a: "rgba(110,50,120,0.45)", b: "rgba(170,120,50,0.4)", c: "rgba(40,60,130,0.3)" },
  extreme: { a: "rgba(60,50,150,0.5)", b: "rgba(190,140,60,0.4)", c: "rgba(40,90,130,0.3)" },
  close: { a: "rgba(190,140,60,0.45)", b: "rgba(70,55,150,0.45)", c: "rgba(60,140,130,0.35)" },
};

// ---------------------------------------------------------------- drawings
/** A simple standing person. `stoop` (0..1) ages the figure; `dash` makes it a ghost outline. */
const Person: React.FC<{ color?: string; stoop?: number; dash?: boolean; s?: number }> = ({ color = CHALK, stoop = 0, dash, s = 1 }) => {
  const lean = stoop * 18;
  return (
    <svg width={140 * s} height={240 * s} viewBox="0 0 140 240" style={{ overflow: "visible", filter: dash ? undefined : `drop-shadow(0 0 8px ${color}88)` }}>
      <g stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" strokeDasharray={dash ? "8 8" : undefined}>
        <circle cx={70 + lean} cy={36 + stoop * 10} r={22} />
        <path d={`M${70 + lean * 0.8} ${60 + stoop * 10} Q ${70 + lean} ${100} 70 140 M${68 + lean * 0.6} 80 L40 ${118 + stoop * 10} M${68 + lean * 0.6} 80 L100 ${118 + stoop * 10} M70 140 L48 225 M70 140 L92 225`} />
        {stoop > 0.5 && <line x1={104} y1={120} x2={110} y2={225} stroke={DIM} />}
      </g>
    </svg>
  );
};

/** A person breaking into scattered pieces (p 0..1). */
const Breaking: React.FC<{ p: number; color?: string }> = ({ p, color = WARM }) => (
  <div style={{ position: "relative", width: 180, height: 260 }}>
    {Array.from({ length: 10 }).map((_, i) => {
      const dx = (rand(i) - 0.5) * 220 * p, dy = (rand(i + 5) - 0.3) * 160 * p;
      return <div key={i} style={{ position: "absolute", left: 60 + (i % 3) * 22 + dx, top: 20 + Math.floor(i / 3) * 55 + dy, width: 26, height: 40, borderRadius: 6,
        border: `3px solid ${color}`, background: `${color}33`, transform: `rotate(${rand(i + 2) * 90 * p}deg)`, opacity: 1 - 0.4 * p }} />;
    })}
  </div>
);

const Cloud: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={130} height={100} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${color}33`} stroke={color} strokeWidth={3.5} />
  </svg>
);

const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

const Bloom: React.FC<{ decay?: number; s?: number }> = ({ decay = 0, s = 1 }) => (
  <svg width={140 * s} height={220 * s} viewBox="-70 -70 140 220" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d={`M0 10 Q ${-5 - 20 * decay} 70 0 140`} stroke={decay > 0.5 ? "#8a8a50" : GREEN} strokeWidth={5} fill="none" />
    {Array.from({ length: 5 }).map((_, i) => {
      const fall = Math.max(0, decay * 5 - i) / 1;
      const f = Math.min(1, fall);
      return <ellipse key={i} cx={0} cy={-22} rx={14} ry={22} fill={decay > 0.6 ? "#9a6b6b" : `${ROSE}bb`}
        transform={`translate(${f * (i - 2) * 25} ${f * 150}) rotate(${i * 72 + f * 60})`} opacity={1 - f * 0.6} />;
    })}
    <circle r={10} fill={decay > 0.6 ? "#8a7a50" : GOLD} />
  </svg>
);

const Doc: React.FC = () => (
  <svg width={170} height={210} viewBox="0 0 170 210" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
    <rect x={10} y={10} width={150} height={190} rx={8} fill="#EDE3C6" stroke={DEEP_GOLD} strokeWidth={3} />
    {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={30} x2={140 - (k % 2) * 30} y1={50 + k * 24} y2={50 + k * 24} stroke="#7a6a50" strokeWidth={3} />)}
    <circle cx={120} cy={168} r={18} fill="none" stroke="#b24a3a" strokeWidth={4} />
  </svg>
);

const Candle: React.FC = () => {
  const { t } = useT();
  const f = Math.sin(t * 7) * 3;
  return (
    <svg width={110} height={230} viewBox="0 0 110 230" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${GOLD})` }}>
      <path d={`M55 ${10 + f} C 75 45, 70 70, 55 78 C 40 70, 35 45, 55 ${10 + f} Z`} fill="#FFD27A" />
      <rect x={35} y={84} width={40} height={130} rx={6} fill="#F3E8CF" />
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

const Title: React.FC<{ at: number; color?: string; y?: number; size?: number; children: React.ReactNode }> = ({ at, color = CHALK, y = 130, size = 44, children }) => {
  const { t } = useT();
  return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={size} serif>{children}</Glow></At>;
};

const Struck: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };

const Center: React.FC<{ top: number; children: React.ReactNode }> = ({ top, children }) => (
  <div style={{ position: "absolute", top, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("Everything so far now meets", 0.1), d = c("Death");
  const gather = ramp(t, c("cares about most"), 1.4);
  const icons = [GOLD, ROSE, ICE, TEAL, VIOLET];
  return (
    <AbsoluteFill>
      {icons.map((col, i) => {
        const ang = (i / icons.length) * Math.PI * 2;
        const r = 380 - 260 * gather;
        return <At key={i} x={960 + r * Math.cos(ang)} y={420 + r * 0.6 * Math.sin(ang)} s={pop(t, fps, a + i * 0.2)} o={1 - ramp(t, d, 0.6) * 0.5}><Orb size={60} color={col} /></At>;
      })}
      <At x={960} y={160} o={ramp(t, a + 0.2, 0.5)}><Glow color={CHALK} size={38}>everything so far</Glow></At>
      <Center top={620}><Reveal text="death" at={d} size={120} color={ICE} top="#F0FBFF" /></Center>
    </AbsoluteFill>
  );
};

const FearScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const three = c("It needs three things"), one = c("a bounded, unified someone"), fut = c("a future event"), br = c("Third, a bridge"), th = c("A single thread joining");
  const rm = c("Remove any one of these"), run = c("nothing to run on");
  const snap = ramp(t, rm + 0.6, 0.6);
  return (
    <AbsoluteFill>
      <Title at={c("a precise shape", 0.4)} color={WARM}>the shape of the fear of death</Title>
      <At x={960} y={200} o={ramp(t, three, 0.4)}><Glow color={DIM} size={30}>it needs three things</Glow></At>
      <At x={440} y={460} s={pop(t, fps, one)}><Person color={GOLD} /></At>
      <At x={440} y={650} o={ramp(t, one + 0.3, 0.5)}><Chip color={GOLD} size={28}>1 · a unified someone, now</Chip></At>
      <At x={1480} y={460} s={pop(t, fps, fut)}><Breaking p={ramp(t, fut + 0.5, 1.6)} /></At>
      <At x={1480} y={650} o={ramp(t, fut + 0.3, 0.5)}><Chip color={WARM} size={28}>2 · a future coming apart</Chip></At>
      <Svg style={{ opacity: ramp(t, br, 0.4) * (1 - snap * 0.75) }}>
        <DrawPath d="M540 420 C 760 300, 1160 300, 1380 420" p={ramp(t, th, 1.2)} color={VIOLET} width={5} len={1000} />
      </Svg>
      <Crossed x={960} y={330} at={rm + 0.6} size={40} />
      <At x={960} y={650} o={ramp(t, br + 0.2, 0.5)}><Chip color={VIOLET} size={28}>3 · a bridge: one thread</Chip></At>
      <At x={960} y={790} o={ramp(t, run, 0.5)}><Glow color={CHALK} size={36} serif>remove one · the fear has nothing to run on</Glow></At>
    </AbsoluteFill>
  );
};

const SearchScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("The flower was searched"), run = c("Run the same search");
  const u = ramp(t, run, 14);
  const lx = 960 + 300 * Math.cos(u * Math.PI * 6), ly = 450 + 200 * Math.sin(u * Math.PI * 6);
  const items: [string, number, number, React.ReactNode, string][] = [
    ["Not the body alone", 460, 300, <Person s={0.6} />, "the body?"],
    ["Not a thought or a memory", 1460, 300, <Cloud />, "a thought? a memory?"],
    ["bundled together", 460, 640, <div style={{ display: "flex", gap: 6 }}>{[GOLD, VIOLET, TEAL, ROSE].map((col, i) => <div key={i} style={{ width: 34, height: 34, borderRadius: 6, background: `${col}88`, border: `2px solid ${col}` }} />)}</div>, "the bundle?"],
    ["something apart from all these", 1460, 640, <Person s={0.6} dash color={DIM} />, "something apart?"],
  ];
  const xAt: Record<string, number> = {
    "Not the body alone": c("the loss of a limb") + 0.6, "Not a thought or a memory": c("while the word stays") + 0.4,
    "bundled together": c("A heap of parts") + 0.8, "something apart from all these": c("something apart from all these") + 1.4,
  };
  return (
    <AbsoluteFill>
      <At x={700} y={430} s={pop(t, fps, fl)} o={1 - ramp(t, run, 0.6)}><Bloom /></At>
      <At x={700} y={620} o={between(t, fl + 0.2, run)}><Glow color={ROSE} size={32}>searched, level by level</Glow></At>
      <At x={960} y={450} s={pop(t, fps, run)}><Glow color={DEEP_GOLD} size={170} serif>I</Glow></At>
      <At x={lx} y={ly} o={between(t, run + 0.3, run + 14)}><Lens /></At>
      {items.map(([ph, x, y, node, label], i) => (
        <React.Fragment key={i}>
          <At x={x} y={y} s={pop(t, fps, c(ph))}>{node}</At>
          <At x={x} y={y + 110} o={ramp(t, c(ph) + 0.2, 0.4)}><Glow color={CHALK} size={28}>{label}</Glow></At>
          <Crossed x={x} y={y} at={xAt[ph]} size={60} />
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const LabelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hid = c("never a name for a hidden bearer"), app = c("the life's own appearances"), lab = c("recognized and labelled"), man = c("no manager doing the binding");
  const cols = [GOLD, TEAL, ROSE, VIOLET, ICE, GREEN, WARM];
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, hid)} o={1 - ramp(t, hid + 2.2, 0.6) * 0.7}><Person dash color={DIM} s={1.2} /></At>
      <At x={560} y={640} o={between(t, hid + 0.3, hid + 2.6)}><Glow color={DIM} size={30}>a hidden bearer behind?</Glow></At>
      <Crossed x={560} y={420} at={hid + 1.4} size={90} />
      {cols.map((col, i) => {
        const a = (i / cols.length) * Math.PI * 2 + t * 0.25;
        return <At key={i} x={1300 + 190 * Math.cos(a)} y={420 + 140 * Math.sin(a)} s={pop(t, fps, app + i * 0.12)}><Orb size={44 + (i % 3) * 12} color={col} /></At>;
      })}
      <At x={1300} y={160} o={ramp(t, app + 0.3, 0.5)}><Glow color={CHALK} size={32}>a life's appearances, arising together</Glow></At>
      <At x={1300} y={420} s={pop(t, fps, lab)}><Chip color={DEEP_GOLD} size={46}>“I”</Chip></At>
      <At x={1300} y={640} o={ramp(t, lab + 0.3, 0.5)}><Glow color={DEEP_GOLD} size={30}>recognized and labelled</Glow></At>
      <At x={960} y={790} o={ramp(t, man, 0.5)}><Glow color={ROSE} size={36} serif>like “flower”: bound with no manager doing the binding</Glow></At>
    </AbsoluteFill>
  );
};

const NeverScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cr = c("the crucial point"), nev = c("was never present"), now = c("Not even now"), cg = c("cannot get started"), none = c("none was ever found");
  return (
    <AbsoluteFill>
      <Title at={cr - 0.2} color={GOLD}>the crucial point</Title>
      <Flow x1={300} y1={420} x2={1620} y2={420} color={CHALK} p={ramp(t, cr + 0.3, 1.2)} width={4} pulses={false} />
      <At x={300} y={480} o={ramp(t, cr + 0.4, 0.4)}><Glow color={DIM} size={30}>birth</Glow></At>
      <At x={1620} y={480} o={ramp(t, cr + 0.8, 0.4)}><Glow color={DIM} size={30}>death</Glow></At>
      <Svg style={{ opacity: ramp(t, nev, 0.6) }}>
        <path d="M300 340 L1620 340" stroke={DIM} strokeWidth={4} strokeDasharray="14 14" fill="none" />
      </Svg>
      <At x={960} y={290} o={ramp(t, nev + 0.2, 0.5)}><Glow color={DIM} size={30}>a bearer, all the way through?</Glow></At>
      <At x={1000} y={420} s={pop(t, fps, now)}><Orb size={34} color={GOLD} /></At>
      <At x={1000} y={490} o={ramp(t, now, 0.4)}><Chip color={GOLD} size={28}>now · not here either</Chip></At>
      <Crossed x={960} y={340} at={now + 0.7} size={44} />
      <At x={960} y={640} o={ramp(t, cg, 0.5)}><div style={{ position: "relative" }}><Chip color={WARM} size={34}>a true unity coming apart</Chip><Strike at={cg + 1.0} /></div></At>
      <At x={960} y={760} o={ramp(t, none, 0.5)}><Glow color={ICE} size={38} serif>none was ever found</Glow></At>
    </AbsoluteFill>
  );
};

const ConventionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cv = c("Conventionally, of course"), fl = c("a flower decays"), ok = c("works perfectly well");
  const age = ramp(t, cv + 0.4, 3.0);
  return (
    <AbsoluteFill>
      <Title at={cv - 0.1} color={TEAL}>conventionally</Title>
      <At x={560} y={440} s={pop(t, fps, cv)}><Person stoop={age} color={age > 0.6 ? DIM : CHALK} s={1.3} /></At>
      <At x={560} y={660} o={ramp(t, cv + 0.4, 0.5)}><Glow color={CHALK} size={30}>a body ages · a life ends</Glow></At>
      <At x={1340} y={430} s={pop(t, fps, fl - 0.3)}><Bloom decay={ramp(t, fl + 0.2, 2.6)} s={1.3} /></At>
      <At x={1340} y={660} o={ramp(t, fl, 0.5)}><Glow color={ROSE} size={30}>a flower decays</Glow></At>
      <At x={960} y={790} o={ramp(t, ok, 0.5)}><Chip color={TEAL} size={32}>“disintegration” works perfectly well, conventionally</Chip></At>
    </AbsoluteFill>
  );
};

const SurviveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const two = c("Two misreadings"), sv = c("something in you survives"), rad = c("radiance, presence or awareness");
  const keep = c("keeps the whole structure"), sub = c("a subtler bearer"), et = c("That is eternalism");
  const rise = ramp(t, rad, 2.0);
  return (
    <AbsoluteFill>
      <Title at={two - 0.2} color={WARM}>two misreadings · the first</Title>
      <At x={620} y={500} s={pop(t, fps, two + 0.4)} o={1 - ramp(t, rad + 0.4, 1.0) * 0.8}><Person /></At>
      <At x={620} y={500 - 220 * rise} o={ramp(t, rad, 0.5)}><Orb size={90} color={GOLD} core={1} /></At>
      <At x={620} y={740} o={ramp(t, rad + 0.3, 0.5)}><Glow color={GOLD} size={28}>a deeper radiance, presence, awareness?</Glow></At>
      <At x={1340} y={420} s={pop(t, fps, keep)}>
        <svg width={260} height={240} viewBox="0 0 260 240" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
          <path d="M40 230 L40 120 Q40 40 130 40 Q220 40 220 120 L220 230 M40 160 L220 160" fill="none" stroke={VIOLET} strokeWidth={6} />
        </svg>
      </At>
      <At x={1340} y={640} o={ramp(t, keep + 0.3, 0.5)}><Glow color={VIOLET} size={28}>the bearer's seat, kept</Glow></At>
      <At x={1340} y={380} s={pop(t, fps, sub)}><Orb size={70} color={GOLD} core={1} /></At>
      <At x={1340} y={250} o={ramp(t, sub + 0.2, 0.5)}><Glow color={GOLD} size={28}>a subtler bearer</Glow></At>
      <Struck x={960} y={800} at={et} strikeAt={et + 1.6} color={WARM} size={34}>eternalism: an everlasting self</Struck>
      <Crossed x={1340} y={420} at={et + 1.2} size={110} />
    </AbsoluteFill>
  );
};

const BornScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("The second misreading"), born = c("a person is born"), cert = c("A birth certificate"), mourn = c("A death is still mourned"), nar = c("a narrower claim");
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={sec} strikeAt={born} color={WARM} size={34}>no one is really born, no one really dies</Struck>
      {[0, 0.5, 1].map((st, i) => (
        <At key={i} x={360 + i * 230} y={420} s={pop(t, fps, born + i * 0.4) * (0.6 + 0.2 * Math.min(i, 1))}><Person stoop={i === 2 ? 1 : 0} color={i === 2 ? DIM : CHALK} /></At>
      ))}
      <At x={590} y={600} o={ramp(t, born + 0.5, 0.5)}><Glow color={CHALK} size={30}>born · ages · dies</Glow></At>
      <At x={1200} y={420} s={pop(t, fps, cert)}><Doc /></At>
      <At x={1200} y={600} o={ramp(t, cert + 0.3, 0.5)}><Glow color={GOLD} size={28}>still valid</Glow></At>
      <At x={1540} y={420} s={pop(t, fps, mourn)}><Candle /></At>
      <At x={1540} y={600} o={ramp(t, mourn + 0.3, 0.5)}><Glow color={GOLD} size={28}>still mourned</Glow></At>
      <Struck x={960} y={760} at={nar} strikeAt={nar + 3.0} color={DIM} size={30}>an intrinsic person: into being at birth, into nothing at death</Struck>
    </AbsoluteFill>
  );
};

const ExtremesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pairs: [string, string, string, string][] = [
    ["No arising and no ceasing", "arising", "ceasing", TEAL],
    ["No permanence and no annihilation", "permanence", "annihilation", GOLD],
    ["No unity breaking into many", "unity", "many", VIOLET],
    ["no coming or going", "coming", "going", ROSE],
  ];
  return (
    <AbsoluteFill>
      <Title at={c("the old extremes fall away", 0.4)} color={GOLD}>the old extremes fall away</Title>
      {pairs.map(([ph, a, b, col], i) => {
        const at = c(ph), y = 270 + i * 135;
        const fall = ramp(t, at + 3.5, 0.8);
        return (
          <React.Fragment key={i}>
            <At x={700} y={y + 40 * fall} s={pop(t, fps, at)} o={1 - fall * 0.6}><div style={{ position: "relative" }}><Chip color={col} size={36}>{a}</Chip><Strike at={at + 1.0} /></div></At>
            <At x={960} y={y} o={ramp(t, at + 0.2, 0.3) * (1 - fall * 0.6)}><Glow color={DIM} size={32}>·</Glow></At>
            <At x={1220} y={y + 40 * fall} s={pop(t, fps, at + 0.3)} o={1 - fall * 0.6}><div style={{ position: "relative" }}><Chip color={col} size={36}>{b}</Chip><Strike at={at + 1.2} /></div></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const WordsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neg = c("clever negative answers"), stop = c("simply stop applying"), cm = c("Coming needs a traveller"), dis = c("Disintegration needs a prior unity"), sup = c("was ever supplied");
  const words = ["life", "death", "coming", "going", "arising", "ceasing"];
  const drift = ramp(t, stop, 2.5);
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={neg - 0.1} strikeAt={neg + 1.2} color={DIM} size={32}>clever negative answers</Struck>
      {words.map((w, i) => (
        <At key={i} x={360 + i * 240} y={260 - 80 * drift + Math.sin(t + i) * 8 * drift} o={ramp(t, neg + 0.4 + i * 0.1, 0.4) * (1 - drift * 0.75)} blur={drift * 3}>
          <Glow color={CHALK} size={38} serif>{w}</Glow>
        </At>
      ))}
      <At x={960} y={340} o={ramp(t, stop + 0.4, 0.5)}><Glow color={ICE} size={34}>the words simply stop applying</Glow></At>
      <At x={560} y={540} s={pop(t, fps, cm)}><Person s={0.7} /></At>
      {[380, 740].map((x, i) => <At key={i} x={x} y={600} o={ramp(t, cm + 0.4 + i * 0.2, 0.4) * (1 - ramp(t, sup, 0.8) * 0.8)}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", border: `3px dashed ${ROSE}` }} /></At>)}
      <At x={560} y={720} o={ramp(t, cm + 0.5, 0.5)}><Glow color={ROSE} size={28}>coming: a traveller, two places</Glow></At>
      <At x={1360} y={560} s={pop(t, fps, dis)} o={1 - ramp(t, sup, 0.8) * 0.8}>
        <div style={{ width: 180, height: 180, borderRadius: "50%", border: `4px dashed ${VIOLET}`, background: `${VIOLET}18` }} /></At>
      <At x={1360} y={720} o={ramp(t, dis + 0.4, 0.5)}><Glow color={VIOLET} size={28}>disintegration: a prior unity</Glow></At>
      <At x={960} y={810} o={ramp(t, sup, 0.5)}><Glow color={GOLD} size={36} serif>none of this was ever supplied</Glow></At>
    </AbsoluteFill>
  );
};

const NoOneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const no = c("no one here who was afraid"), fe = c("Fear needs an object"), kf = c("keeps finding none");
  const places: [string, string, string][] = [["Not in the body", "body", TEAL], ["Not in the mind", "mind", VIOLET], ["Not in space", "space", ICE], ["Not in space", "time", GOLD]];
  const u = ramp(t, kf, 6);
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={no} strikeAt={no + 1.6} color={DIM} size={32}>someone afraid, now rescued</Struck>
      <At x={960} y={300} s={pop(t, fps, fe)}><Chip color={WARM} size={40}>fear</Chip></At>
      <At x={960} y={380} o={ramp(t, fe + 0.3, 0.4)}><Glow color={WARM} size={28}>needs an object to cling to</Glow></At>
      <At x={420 + 1080 * u} y={500 + 30 * Math.sin(u * 20)} o={between(t, kf, kf + 6)}><Lens /></At>
      {places.map(([ph, w, col], i) => {
        const at = c(ph) + (i === 3 ? 0.9 : 0);
        return (
          <React.Fragment key={i}>
            <At x={420 + i * 360} y={600} s={pop(t, fps, at)}><Chip color={col} size={34}>{w}</Chip></At>
            <At x={420 + i * 360} y={690} o={ramp(t, at + 0.4, 0.4)}><Glow color={DIM} size={28}>none found</Glow></At>
          </React.Fragment>
        );
      })}
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const viv = c("vivid, unobstructed formation"), nd = c("nothing for death to happen to"), ns = c("nothing that needed saving");
  const cols = [GOLD, TEAL, ROSE, VIOLET, ICE, GREEN, DEEP_GOLD];
  return (
    <AbsoluteFill>
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2 + t * (0.15 + (i % 3) * 0.05);
        const r = (160 + (i % 4) * 70) * ramp(t, viv + i * 0.05, 1.2);
        return <At key={i} x={960 + r * Math.cos(a)} y={360 + r * 0.45 * Math.sin(a)} s={pop(t, fps, viv + i * 0.05)}><Orb size={22 + (i % 4) * 10} color={cols[i % cols.length]} /></At>;
      })}
      <At x={960} y={640} o={ramp(t, viv + 0.4, 0.6)}><Glow color="#FFF3D1" size={48} serif>vivid, unobstructed formation</Glow></At>
      <At x={960} y={720} o={ramp(t, nd, 0.5)}><Glow color={ICE} size={38} serif>nothing for death to happen to</Glow></At>
      <At x={960} y={790} o={ramp(t, ns, 0.5)}><Glow color={GOLD} size={38} serif>nothing that needed saving</Glow></At>
      <Ring x={960} y={360} p={ramp(t, ns + 0.4, 2.0)} r0={200} r1={520} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["open", 0], ["fear", c("a precise shape", 0.6)], ["search", c("The flower was searched", 0.6)], ["search", c("never a name for a hidden bearer", 0.6)],
    ["never", c("the crucial point", 0.6)], ["conv", c("Conventionally, of course", 0.6)], ["refuse", c("Two misreadings", 0.6)],
    ["conv", c("The second misreading", 0.6)], ["extreme", c("the old extremes fall away", 0.6)], ["never", c("clever negative answers", 0.6)],
    ["fear", c("no one here who was afraid", 0.6)], ["close", c("vivid, unobstructed formation", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("a precise shape", 0.9)], <OpenScene />],
    [S("a precise shape", "The flower was searched"), <FearScene />],
    [S("The flower was searched", "never a name for a hidden bearer"), <SearchScene />],
    [S("never a name for a hidden bearer", "the crucial point"), <LabelScene />],
    [S("the crucial point", "Conventionally, of course"), <NeverScene />],
    [S("Conventionally, of course", "Two misreadings"), <ConventionScene />],
    [S("Two misreadings", "The second misreading"), <SurviveScene />],
    [S("The second misreading", "the old extremes fall away"), <BornScene />],
    [S("the old extremes fall away", "clever negative answers"), <ExtremesScene />],
    [S("clever negative answers", "no one here who was afraid"), <WordsScene />],
    [S("no one here who was afraid", "vivid, unobstructed formation"), <NoOneScene />],
    [S("vivid, unobstructed formation", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
