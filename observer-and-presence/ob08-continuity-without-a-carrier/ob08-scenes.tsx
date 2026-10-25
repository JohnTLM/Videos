// The Observer and the Taste of Presence, Chapter 8: Continuity Without a Carrier. Explainer drawings timed to the narration.
// Arc: what makes a life, a habit, a river one? -> substance says something persists: soul, stream, neural core, energy, a carrier
// through time -> take it away and only sealed-off flashes remain -> dependency rejects both pictures -> the lamp from the first
// watch to the last: not the same flame, not a different flame; nothing passes, yet connected; continuity designated ->
// the melody played again: no tune stored between playings, yet recognised -> habit, character, skill, karma: conditioned links,
// designated across, not carried -> nothing lost -> nothing fixed: a habit loosens, a character softens, a grievance ends ->
// more reliable than the nihilist expects, more open than the substantialist allows.
// Stance: the carrier thread and anything "underneath" are drawn dashed only to be struck; the moments and flames stay vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "What makes a life one life", "A habit one habit", "A river one river",
  "The logic of substance has one answer", "something persists", "A soul, a stream of consciousness, a neural core",
  "the energy that is conserved", "the carrier that runs through time",
  "Take it away, the substantialist expects", "only disconnected flashes remain", "sealed off from the next",
  "rejects both pictures", "the carrier, and the disconnection",
  "lamp is the classic image", "The flame in the last watch", "not the flame of the first watch", "Nor is it a different flame",
  "Nothing passes from one to the next", "Yet the second is not unconnected", "Continuity is designated", "neither identical nor wholly different",
  "Think of a melody known by heart", "Each playing is new", "no tune stored somewhere between playings", "Yet the tune is recognised",
  "changed by practice",
  "Habit, character, skill and karma", "Each moment is conditioned", "The link is real", "designated across the moments",
  "not carried by something running through them",
  "First, nothing is lost", "Memory, responsibility, learning", "as designations that hold",
  "Second, nothing is fixed", "A continuity with no essence inside it", "can bend", "A habit can loosen", "A character can soften", "A grievance can end", "never anything underneath",
  "more reliable than the nihilist expects", "more open than the substantialist can allow",
];

// Book 4 mood: plum and gold
const M = {
  ask: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  carrier: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  lamp: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  tune: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  open: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
};

// ---------------------------------------------------------------- drawings
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

const Head: React.FC<{ text: string; at: number; y?: number; size?: number; color?: string }> = ({ text, at, y = 150, size = 76, color }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>
    <Reveal text={text} at={at} size={size} color={color} />
  </div>
);

const Tick: React.FC<{ at: number; color?: string }> = ({ at, color = GREEN }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M10 32 L25 46 L52 14" p={ramp(t, at, 0.5)} color={color} width={7} len={70} />
    </svg>
  );
};

/** A flickering flame. */
const Flame: React.FC<{ size?: number; lean?: number; seed?: number }> = ({ size = 1, lean = 0, seed = 0 }) => {
  const { t } = useT();
  const f = Math.sin(t * 9 + seed) * 5 + Math.sin(t * 13.7 + seed * 2) * 3;
  const tip = 60 + lean * 26 + f * 0.8, mid = 60 + (tip - 60) * 0.6;
  return (
    <svg width={120 * size} height={180 * size} viewBox="0 0 120 180" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${WARM}) drop-shadow(0 0 34px ${GOLD}88)` }}>
      <path d={`M60 176 C24 172 16 132 34 100 C46 78 ${tip - 6} 46 ${tip} ${6 + Math.abs(f) * 0.6} C${tip + 10} 50 104 84 100 124 C98 160 84 176 60 176 Z`} fill={`${WARM}cc`} />
      <path d={`M60 172 C40 168 36 140 46 120 C54 104 ${mid} 80 ${mid} ${60 + f * 0.4} C${mid + 6} 92 84 112 82 136 C80 160 72 172 60 172 Z`} fill={GOLD} />
      <ellipse cx={60} cy={150} rx={12} ry={18} fill="#FFF6D8" />
    </svg>
  );
};

/** An oil lamp with a flame (on 0..1). */
const OilLamp: React.FC<{ on: number; size?: number; seed?: number }> = ({ on, size = 1, seed = 0 }) => (
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", transform: `scale(${size})` }}>
    <div style={{ opacity: on, transform: `scale(${0.4 + 0.6 * on})`, marginBottom: -20 }}><Flame size={0.6} seed={seed} /></div>
    <svg width={200} height={90} viewBox="0 0 200 90" style={{ overflow: "visible" }}>
      <path d="M10 20 Q100 100 190 20 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M100 62 L100 84 M66 86 L134 86" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
    </svg>
  </div>
);

/** A music note. */
const Note: React.FC<{ color: string; size?: number }> = ({ color, size = 1 }) => (
  <svg width={40 * size} height={70 * size} viewBox="0 0 40 70" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <ellipse cx={14} cy={58} rx={13} ry={9} fill={color} transform="rotate(-20 14 58)" />
    <path d="M26 56 L26 6 Q34 14 38 22" stroke={color} strokeWidth={4} fill="none" strokeLinecap="round" />
  </svg>
);

/** A row of moments (orbs) along y. */
const Moments: React.FC<{ y: number; at: number; n?: number; blink?: number; boxes?: number }> = ({ y, at, n = 7, blink = 0, boxes = 0 }) => {
  const { t, fps } = useT();
  const cols = [TEAL, ROSE, GOLD, ICE, GREEN, VIOLET, TEAL];
  return (
    <>
      {Array.from({ length: n }).map((_, i) => {
        const b = blink > 0 ? 0.35 + 0.65 * Math.max(0, Math.sin(t * 3 + i * 1.9)) : 1;
        return (
          <At key={i} x={360 + i * (1200 / (n - 1))} y={y} s={pop(t, fps, at + i * 0.12)} o={1 - blink + blink * b}>
            <div style={{ position: "relative" }}>
              <Orb size={70} color={cols[i % cols.length]} />
              {boxes > 0 && <div style={{ position: "absolute", left: -22, top: -22, width: 110, height: 110, borderRadius: 10, border: `3px solid ${DIM}`,
                opacity: boxes, transform: `scale(${1.3 - 0.3 * boxes})` }} />}
            </div>
          </At>
        );
      })}
    </>
  );
};

// ---------------------------------------------------------------- scenes
const QuestionsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const life = c("What makes a life one life"), habit = c("A habit one habit"), river = c("A river one river");
  const coil = Array.from({ length: 81 }).map((_, i) => {
    const u = i / 80, A = 34;
    return `${i ? "L" : "M"}${760 + u * 400 + A * Math.cos(u * 6 * Math.PI + t * 2)} ${470 + A * Math.sin(u * 6 * Math.PI + t * 2)}`;
  }).join(" ");
  return (
    <AbsoluteFill>
      {[0, 1, 2, 3].map((i) => (
        <At key={i} x={300 + i * 90} y={470 - i * 6} s={pop(t, fps, life + 0.2 + i * 0.25)}><Orb size={34 + i * 16} color={[ICE, TEAL, GOLD, ROSE][i]} /></At>
      ))}
      <At x={430} y={640} s={pop(t, fps, life + 0.4)}><Chip color={ROSE} size={34}>one life?</Chip></At>
      <Svg style={{ opacity: ramp(t, habit - 0.2, 0.5) }}>
        <path d={coil} fill="none" stroke={VIOLET} strokeWidth={6} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }} />
      </Svg>
      <At x={960} y={640} s={pop(t, fps, habit)}><Chip color={VIOLET} size={34}>one habit?</Chip></At>
      <Svg style={{ opacity: ramp(t, river - 0.2, 0.5) }}>
        {[0, 1, 2, 3].map((k) => {
          const d = Array.from({ length: 41 }).map((_, i) => `${i ? "L" : "M"}${1300 + i * 9} ${410 + k * 30 + Math.sin(i * 0.4 - t * 3 + k) * 12}`).join(" ");
          return <path key={k} d={d} fill="none" stroke={ICE} strokeWidth={5} strokeOpacity={0.4 + k * 0.15} strokeLinecap="round" />;
        })}
      </Svg>
      <At x={1480} y={640} s={pop(t, fps, river)}><Chip color={ICE} size={34}>one river?</Chip></At>
      <At x={960} y={200} o={ramp(t, river + 0.8, 0.6)}><Glow color={CHALK} size={42} serif>what makes it one?</Glow></At>
    </AbsoluteFill>
  );
};

const CarrierScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const logic = c("The logic of substance has one answer"), pers = c("something persists"), cands = c("A soul, a stream of consciousness, a neural core");
  const energy = c("the energy that is conserved"), runs = c("the carrier that runs through time");
  const items: [string, string, number][] = [["a soul", VIOLET, 0], ["a stream of consciousness", TEAL, 0.8], ["a neural core", ROSE, 1.8]];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, logic, 0.5)}><Glow color={CHALK} size={42} serif>the logic of substance</Glow></At>
      <Moments y={420} at={logic + 0.4} />
      <Svg><DrawPath d="M300 420 L1620 420" p={ramp(t, pers, 1.6)} color={DIM} width={6} len={1400} glow={false} /></Svg>
      <At x={960} y={330} o={ramp(t, pers + 0.6, 0.5)}><Glow color={DIM} size={30}>something persists?</Glow></At>
      {items.map(([w, col, d], i) => (
        <At key={w} x={420 + i * 400} y={590} s={pop(t, fps, cands + d)}><Chip color={col} size={28}>{w}</Chip></At>
      ))}
      <At x={1560} y={590} s={pop(t, fps, energy)}><Chip color={GOLD} size={28}>conserved energy</Chip></At>
      <At x={960} y={760} o={ramp(t, runs, 0.5)}><Glow color={DIM} size={34} serif>a carrier, running through time?</Glow></At>
      {[0, 1, 2].map((i) => {
        const p = ((t - runs) * 0.4 + i / 3) % 1;
        return t > runs ? <At key={i} x={300 + 1320 * p} y={420} o={Math.sin(p * Math.PI) * 0.8}><div style={{ width: 22, height: 22, borderRadius: "50%", background: DIM, boxShadow: `0 0 12px ${DIM}` }} /></At> : null;
      })}
    </AbsoluteFill>
  );
};

const FlashesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("Take it away, the substantialist expects"), flash = c("only disconnected flashes remain"), seal = c("sealed off from the next");
  const both = c("rejects both pictures"), cd = c("the carrier, and the disconnection");
  const gone = ramp(t, take + 1.0, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, take, 0.5)}><Glow color={DIM} size={34}>take the carrier away, and…?</Glow></At>
      <At x={960} y={400} o={1 - gone} blur={gone * 8}><div style={{ width: 1320, height: 6, background: DIM, borderRadius: 3 }} /></At>
      <Moments y={400} at={take - 3} blink={ramp(t, flash, 0.6)} boxes={ramp(t, seal, 0.8)} />
      <At x={960} y={540} o={ramp(t, flash + 0.3, 0.5)}><Glow color={WARM} size={30}>disconnected flashes, sealed off?</Glow></At>
      <At x={960} y={650} o={ramp(t, both, 0.5)}><Glow color={CHALK} size={38} serif>dependency rejects both pictures</Glow></At>
      <Struck x={700} y={760} at={cd} strikeAt={cd + 0.9} color={DIM} size={32}>the carrier</Struck>
      <Struck x={1220} y={760} at={cd + 0.6} strikeAt={cd + 1.5} color={WARM} size={32}>the disconnection</Struck>
    </AbsoluteFill>
  );
};

const LampScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const img = c("lamp is the classic image"), last = c("The flame in the last watch"), first = c("not the flame of the first watch");
  const diff = c("Nor is it a different flame");
  const night = ramp(t, img + 0.6, (last + 1.4) - (img + 0.6));
  const mx = 360 + 1200 * night, my = 260 - Math.sin(night * Math.PI) * 120;
  return (
    <AbsoluteFill>
      <At x={mx} y={my} o={ramp(t, img + 0.3, 0.6)}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle at 40% 35%, #fffbe8, #d9d2b8)", boxShadow: "0 0 40px #fff6d888" }} />
      </At>
      <At x={360} y={360} o={ramp(t, img + 0.6, 0.5)}><Chip color={ICE} size={28}>first watch</Chip></At>
      <At x={1560} y={360} o={ramp(t, last, 0.5)}><Chip color={VIOLET} size={28}>last watch</Chip></At>
      <At x={960} y={520} s={pop(t, fps, img)}><OilLamp on={1} size={1.3} /></At>
      <Struck x={620} y={740} at={first} strikeAt={first + 1.2} color={GOLD} size={34}>the same flame</Struck>
      <Struck x={1300} y={740} at={diff} strikeAt={diff + 1.0} color={ROSE} size={34}>a different flame</Struck>
    </AbsoluteFill>
  );
};

const SuccessionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pass = c("Nothing passes from one to the next"), conn = c("Yet the second is not unconnected"), des = c("Continuity is designated");
  const neither = c("neither identical nor wholly different");
  const xs = [400, 680, 960, 1240, 1520];
  return (
    <AbsoluteFill>
      {xs.map((x, i) => (
        <At key={i} x={x} y={400} s={pop(t, fps, pass - 0.6 + i * 0.2) * (0.8 + 0.1 * (i % 3))}><Flame seed={i * 2.3} lean={Math.sin(i) * 0.4} /></At>
      ))}
      {xs.slice(0, -1).map((x, i) => (
        <At key={i} x={x + 140} y={400} o={between(t, pass + 0.5 + i * 0.15, conn, 0.4)}>
          <div style={{ position: "relative" }}><div style={{ width: 40, height: 40, borderRadius: "50%", border: `3px dashed ${DIM}` }} /></div>
        </At>
      ))}
      {t < conn && xs.slice(0, -1).map((x, i) => <Crossed key={i} x={x + 140} y={400} at={pass + 1.0 + i * 0.15} size={26} />)}
      <At x={960} y={170} o={between(t, pass, conn, 0.4)}><Glow color={DIM} size={32}>nothing passes across</Glow></At>
      <Svg>
        {xs.slice(0, -1).map((x, i) => (
          <DrawPath key={i} d={`M${x + 30} 300 Q${x + 140} 220 ${x + 250} 300`} p={ramp(t, conn + 0.3 + i * 0.2, 0.6)} color={GOLD} width={5} len={320} />
        ))}
      </Svg>
      <At x={960} y={170} o={ramp(t, conn + 0.4, 0.5)}><Glow color={GOLD} size={32}>yet each is conditioned by the last</Glow></At>
      <Svg><DrawPath d="M380 560 L380 590 L1540 590 L1540 560" p={ramp(t, des, 1)} color={TEAL} width={5} len={1300} /></Svg>
      <At x={960} y={640} s={pop(t, fps, des + 0.6)}><Chip color={TEAL} size={34}>“the lamp burned all night”</Chip></At>
      <Struck x={700} y={770} at={neither} strikeAt={neither + 1.0} color={DIM} size={30}>identical</Struck>
      <Struck x={1220} y={770} at={neither + 0.5} strikeAt={neither + 1.6} color={DIM} size={30}>wholly different</Struck>
    </AbsoluteFill>
  );
};

const MelodyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mel = c("Think of a melody known by heart"), each = c("Each playing is new"), stored = c("no tune stored somewhere between playings");
  const rec = c("Yet the tune is recognised"), prac = c("changed by practice");
  const tune = [0, 2, 1, 3, 2, 4, 3, 1];
  const cols = [TEAL, GOLD, ROSE];
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, mel, 0.6) }}>
        {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={260} y1={150 + k * 22} x2={1660} y2={150 + k * 22} stroke={CHALK} strokeOpacity={0.35} strokeWidth={2} />)}
      </Svg>
      {tune.map((h, i) => {
        const x = 300 + ((i * 175 + (t - mel) * 120) % 1400);
        return <At key={i} x={x} y={200 - h * 18} o={ramp(t, mel + i * 0.15, 0.4) * Math.min(1, Math.sin(((x - 260) / 1400) * Math.PI) * 3)}><Note color={GOLD} /></At>;
      })}
      {[0, 1, 2].map((k) => {
        const at = each + k * 0.6, x = 480 + k * 480;
        const changed = k === 2 ? ramp(t, prac, 0.6) : 0;
        return (
          <React.Fragment key={k}>
            <At x={x} y={470} s={pop(t, fps, at)}>
              <div style={{ width: 300, height: 170, borderRadius: 85, border: `3px solid ${cols[k]}`, background: `${cols[k]}18`, boxShadow: `0 0 24px ${cols[k]}55` }} />
            </At>
            {tune.slice(0, 5).map((h, i) => (
              <At key={i} x={x - 110 + i * 55} y={480 - h * 14 - (changed * (i % 2 ? 16 : -10))} s={pop(t, fps, at + 0.3 + i * 0.12)}>
                <Note color={changed > 0.5 && i % 2 ? GREEN : cols[k]} size={0.7} />
              </At>
            ))}
            <At x={x} y={590} o={ramp(t, at + 0.4, 0.4)}><Glow color={cols[k]} size={24}>{["playing one", "playing two", "playing three"][k]}</Glow></At>
          </React.Fragment>
        );
      })}
      {[720, 1200].map((x, i) => (
        <At key={x} x={x} y={470} o={ramp(t, stored + i * 0.3, 0.4) * (1 - ramp(t, rec, 0.6))}>
          <div style={{ width: 90, height: 90, borderRadius: 10, border: `3px dashed ${DIM}`, background: "#26222eaa" }} />
        </At>
      ))}
      {t < rec + 0.6 && [720, 1200].map((x, i) => <Crossed key={x} x={x} y={470} at={stored + 1.2 + i * 0.3} size={50} />)}
      <At x={960} y={660} o={between(t, stored + 0.6, rec, 0.4)}><Glow color={DIM} size={28}>no tune stored in between</Glow></At>
      <At x={960} y={690} s={pop(t, fps, rec)}><Chip color={GOLD} size={34}>recognised across them all</Chip></At>
      <At x={1440} y={780} o={ramp(t, prac, 0.5)}><Glow color={GREEN} size={28}>changed by practice</Glow></At>
    </AbsoluteFill>
  );
};

const LinksScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const four = c("Habit, character, skill and karma"), cond = c("Each moment is conditioned"), real = c("The link is real");
  const across = c("designated across the moments"), not = c("not carried by something running through them");
  const words: [string, string][] = [["habit", VIOLET], ["character", ROSE], ["skill", TEAL], ["karma", GOLD]];
  return (
    <AbsoluteFill>
      {words.map(([w, col], i) => (
        <At key={w} x={480 + i * 320} y={120} s={pop(t, fps, four + i * 0.35)}><Chip color={col} size={32}>{w}</Chip></At>
      ))}
      <Moments y={420} at={cond - 0.3} />
      <Svg>
        {Array.from({ length: 6 }).map((_, i) => (
          <DrawPath key={i} d={`M${370 + i * 200} 380 Q${460 + i * 200} 300 ${550 + i * 200} 380`} p={ramp(t, cond + 0.5 + i * 0.2, 0.5)} color={GOLD} width={5} len={260} />
        ))}
      </Svg>
      <At x={960} y={250} o={ramp(t, cond + 0.8, 0.5)}><Glow color={GOLD} size={28}>each conditioned by what went before</Glow></At>
      <At x={760} y={560} s={pop(t, fps, real)}><Chip color={GREEN} size={30}>real and reliable</Chip></At>
      <At x={930} y={560} o={ramp(t, real + 0.4, 0.3)}><Tick at={real + 0.5} /></At>
      <At x={1260} y={560} s={pop(t, fps, across)}><Chip color={TEAL} size={30}>designated across</Chip></At>
      <At x={960} y={480} o={ramp(t, not - 0.2, 0.5) * (1 - ramp(t, not + 2.4, 0.8))}>
        <div style={{ width: 1260, height: 6, borderTop: `5px dashed ${DIM}` }} />
      </At>
      <Crossed x={960} y={482} at={not + 1.2} size={60} />
      <At x={960} y={700} o={ramp(t, not + 0.5, 0.5)}><Glow color={DIM} size={30}>no thread running through</Glow></At>
    </AbsoluteFill>
  );
};

const LostScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const first = c("First, nothing is lost"), list = c("Memory, responsibility, learning"), hold = c("as designations that hold");
  const items: [string, string][] = [["memory", TEAL], ["responsibility", GOLD], ["learning", GREEN], ["karmic continuity", VIOLET]];
  return (
    <AbsoluteFill>
      <Head text="nothing is lost" at={first} y={90} size={76} color={GREEN} />
      {items.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={420 + i * 360} y={400} s={pop(t, fps, list + i * 0.6)}><Chip color={col} size={32}>{w}</Chip></At>
          <At x={420 + i * 360} y={500} o={ramp(t, list + i * 0.6 + 0.3, 0.3)}><Tick at={list + i * 0.6 + 0.4} /></At>
        </React.Fragment>
      ))}
      <Svg>
        {items.slice(0, -1).map((_, i) => (
          <DrawPath key={i} d={`M${500 + i * 360} 330 Q${600 + i * 360} 270 ${700 + i * 360} 330`} p={ramp(t, hold + i * 0.2, 0.5)} color={GOLD} width={4} len={260} />
        ))}
      </Svg>
      <At x={960} y={680} o={ramp(t, hold, 0.5)}><Glow color={GOLD} size={40} serif>designations that hold</Glow></At>
    </AbsoluteFill>
  );
};

const FixedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sec = c("Second, nothing is fixed"), cont = c("A continuity with no essence inside it"), bend = c("can bend"), loose = c("A habit can loosen"), soft = c("A character can soften");
  const griev = c("A grievance can end"), under = c("never anything underneath");
  const b = ramp(t, bend, 1.2), L = ramp(t, loose + 0.2, 1.6), s = ramp(t, soft + 0.2, 1.4), g = ramp(t, griev + 0.4, 1.6);
  const coil = Array.from({ length: 81 }).map((_, i) => {
    const u = i / 80, A = 36 - 28 * L;
    return `${i ? "L" : "M"}${640 + u * 320 + A * Math.cos(u * 6 * Math.PI + t)} ${380 + A * Math.sin(u * 6 * Math.PI + t)}`;
  }).join(" ");
  return (
    <AbsoluteFill>
      <Head text="nothing is fixed" at={sec} y={70} size={70} color={GOLD} />
      <Svg><path d={`M240 380 Q340 ${380 - 120 * b * Math.sin(t * 1.2 + 1)} 440 380`} fill="none" stroke={TEAL} strokeWidth={8} strokeLinecap="round"
        opacity={ramp(t, cont, 0.6)} style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} /></Svg>
      <At x={340} y={290} o={ramp(t, cont + 0.4, 0.5) * (1 - ramp(t, bend, 0.6))}><Glow color={DIM} size={26}>a continuity, no essence inside</Glow></At>
      <At x={340} y={500} o={ramp(t, bend, 0.4)}><Chip color={TEAL} size={26}>it can bend</Chip></At>
      <Svg style={{ opacity: ramp(t, loose - 0.3, 0.4) }}>
        <path d={coil} fill="none" stroke={VIOLET} strokeWidth={6} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }} />
      </Svg>
      <At x={800} y={500} o={ramp(t, loose, 0.4)}><Chip color={VIOLET} size={26}>a habit loosens</Chip></At>
      <At x={1200} y={380} s={pop(t, fps, soft)}>
        <div style={{ width: 150, height: 150, borderRadius: 4 + 71 * s, background: `${ROSE}${s > 0.5 ? "55" : "33"}`, border: `5px solid ${ROSE}`,
          transform: `rotate(${45 * (1 - s)}deg)`, boxShadow: `0 0 ${20 + 30 * s}px ${ROSE}88` }} />
      </At>
      <At x={1200} y={500} o={ramp(t, soft, 0.4)}><Chip color={ROSE} size={26}>a character softens</Chip></At>
      <At x={1600} y={380} o={ramp(t, griev - 0.2, 0.4) * (1 - g)} s={1 + g * 0.4} blur={g * 14}>
        <svg width={220} height={140} viewBox="0 0 220 140">
          <path d="M40 120 Q0 120 10 84 Q14 54 50 58 Q60 14 110 20 Q150 10 166 50 Q214 52 206 92 Q204 120 170 120 Z" fill="#3a3348" stroke={DIM} strokeWidth={4} />
        </svg>
      </At>
      <At x={1600} y={380} o={g}><Orb size={70} color={GOLD} /></At>
      <At x={1600} y={500} o={ramp(t, griev, 0.4)}><Chip color={GOLD} size={26}>a grievance ends</Chip></At>
      <At x={960} y={680} o={ramp(t, under - 0.2, 0.5) * (1 - ramp(t, under + 2.0, 1))} blur={ramp(t, under + 2.0, 1) * 10}>
        <div style={{ width: 1300, height: 70, borderRadius: 12, border: `3px dashed ${DIM}`, background: "#26222eaa", display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: DIM }}>something underneath, staying the same?</div>
      </At>
      {t < under + 3 && <Crossed x={960} y={680} at={under + 1.0} size={60} />}
      <At x={960} y={800} o={ramp(t, under + 2.4, 0.5)}><Glow color={GOLD} size={30}>there never was</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rel = c("more reliable than the nihilist expects"), open = c("more open than the substantialist can allow");
  const xs = [300, 480, 660, 840];
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, rel - 0.6, 0.5)}><Glow color={CHALK} size={40} serif>continuity without a carrier</Glow></At>
      {xs.map((x, i) => (
        <At key={x} x={x} y={430} o={ramp(t, rel + i * 0.5, 0.4)}><OilLamp on={ramp(t, rel + i * 0.5, 0.4)} size={0.7} seed={i * 2} /></At>
      ))}
      <Svg>
        {xs.slice(0, -1).map((x, i) => (
          <DrawPath key={i} d={`M${x + 20} 360 Q${x + 90} 300 ${x + 160} 360`} p={ramp(t, rel + 0.3 + i * 0.5, 0.4)} color={GOLD} width={4} len={200} />
        ))}
      </Svg>
      <At x={570} y={620} s={pop(t, fps, rel + 0.4)}><Chip color={GOLD} size={30}>more reliable</Chip></At>
      <At x={570} y={700} o={ramp(t, rel + 0.8, 0.5)}><Glow color={DIM} size={26}>than the nihilist expects</Glow></At>
      <Svg style={{ opacity: ramp(t, open - 0.2, 0.5) }}>
        {[0, 1, 2].map((k) => {
          const d = Array.from({ length: 41 }).map((_, i) => `${i ? "L" : "M"}${1120 + i * 14} ${400 + k * 40 + Math.sin(i * 0.3 + t * (1.4 + k * 0.3)) * (20 + 20 * ramp(t, open + 0.5, 1.2))}`).join(" ");
          return <path key={k} d={d} fill="none" stroke={[TEAL, VIOLET, ROSE][k]} strokeWidth={6} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${[TEAL, VIOLET, ROSE][k]})` }} />;
        })}
      </Svg>
      <At x={1400} y={620} s={pop(t, fps, open + 0.4)}><Chip color={TEAL} size={30}>more open</Chip></At>
      <At x={1400} y={700} o={ramp(t, open + 0.8, 0.5)}><Glow color={DIM} size={26}>than the substantialist allows</Glow></At>
      <Ring x={960} y={430} p={((Math.max(0, t - open - 1.5)) * 0.4) % 1} r0={40} r1={360} color={GOLD} />
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["ask", 0], ["carrier", c("The logic of substance has one answer", 0.6)], ["lamp", c("lamp is the classic image", 0.6)],
    ["tune", c("Think of a melody known by heart", 0.6)], ["open", c("First, nothing is lost", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The logic of substance has one answer", 0.9)], <QuestionsScene />],
    [S("The logic of substance has one answer", "Take it away, the substantialist expects"), <CarrierScene />],
    [S("Take it away, the substantialist expects", "lamp is the classic image"), <FlashesScene />],
    [S("lamp is the classic image", "Nothing passes from one to the next"), <LampScene />],
    [S("Nothing passes from one to the next", "Think of a melody known by heart"), <SuccessionScene />],
    [S("Think of a melody known by heart", "Habit, character, skill and karma"), <MelodyScene />],
    [S("Habit, character, skill and karma", "First, nothing is lost"), <LinksScene />],
    [S("First, nothing is lost", "Second, nothing is fixed"), <LostScene />],
    [S("Second, nothing is fixed", "more reliable than the nihilist expects"), <FixedScene />],
    [S("more reliable than the nihilist expects", null, 1.4), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
