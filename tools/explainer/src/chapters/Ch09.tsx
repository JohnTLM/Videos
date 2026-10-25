// Chapter 9: The Reconceptualization of Continuity. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb,
  PictureFrame, ROSE, Reveal, Ring, SANS, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Find a photograph", "as a small child", "Is that you", "Almost everyone says yes", "Almost no one can say", "that small body",
  "remember the afternoon", "the child's thoughts", "Point to what has stayed", "nothing is found",
  "How can a person stay", "body, mood and memory",
  "an invariant bearer", "Invariant means unchanging", "stays the same beneath", "carries identity through it", "called it a soul",
  "a stable core in the brain", "a thinking subject",
  "a bearer that never changed", "could not perceive", "changing verbs", "an unchanging noun",
  "not solved", "It is dissolved", "designated, not found",
  "Picture a candle", "The flame at midnight", "the flame at dusk", "The wax, the air", "all been replaced", "not simply a different flame",
  "the same candle burned", "No flame-substance travelled", "neither identical nor wholly different",
  "A person is like this", "always in flux", "Nothing is found that persists", "some pattern standing in",
  "Nor is the person reduced", "passing events", "They too are designated", "None of them is the ground", "the mere I",
  "identical with nothing", "found nowhere", "fully valid",
  "So the photograph is not wrong", "Your family says", "The records agree", "A story runs", "a self that has persisted",
  "the word I can reliably gather", "nothing underneath holding",
  "Memory works the same way", "an object kept in a vault", "a fresh appearance", "what happened then", "what is asked now", "two people remember",
  "a melody learned by heart", "Each playing is new", "None is the one before", "the tune is recognized", "between the playings", "no less a tune",
  "keeps a promise", "The person does", "meeting the results",
  "A fixed essence", "changed by remorse", "It could not learn", "designated rather than given", "growth and change are possible",
  "Freedom from permanence", "leaves room for a person to grow",
];

const M = {
  photo: { a: "rgba(170,120,60,0.45)", b: "rgba(140,70,100,0.4)", c: "rgba(60,90,150,0.3)" },
  bearer: { a: "rgba(70,70,110,0.5)", b: "rgba(110,60,170,0.4)", c: "rgba(150,110,50,0.3)" },
  fail: { a: "rgba(110,60,170,0.5)", b: "rgba(170,90,60,0.35)", c: "rgba(40,90,140,0.3)" },
  candle: { a: "rgba(180,100,40,0.5)", b: "rgba(40,50,130,0.5)", c: "rgba(170,130,60,0.3)" },
  flux: { a: "rgba(30,120,140,0.5)", b: "rgba(90,60,160,0.45)", c: "rgba(150,110,50,0.3)" },
  mere: { a: "rgba(150,110,50,0.45)", b: "rgba(30,110,130,0.4)", c: "rgba(110,60,170,0.3)" },
  story: { a: "rgba(170,120,60,0.45)", b: "rgba(160,70,110,0.4)", c: "rgba(30,110,130,0.3)" },
  memory: { a: "rgba(60,80,170,0.5)", b: "rgba(30,130,140,0.4)", c: "rgba(150,80,130,0.3)" },
  melody: { a: "rgba(130,60,170,0.5)", b: "rgba(190,100,120,0.4)", c: "rgba(60,90,160,0.3)" },
  promise: { a: "rgba(30,120,110,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(90,60,150,0.3)" },
  grow: { a: "rgba(60,140,80,0.45)", b: "rgba(170,130,60,0.4)", c: "rgba(30,110,130,0.35)" },
};

// ---------------------------------------------------------------- small parts
const Tick: React.FC<{ p: number; color?: string; size?: number }> = ({ p, color = GREEN, size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
    <DrawPath d="M8 32 L24 48 L54 12" p={p} color={color} width={7} len={80} />
  </svg>
);

const Person: React.FC<{ size: number; color: string; fill?: number; dashed?: boolean }> = ({ size, color, fill = 0, dashed }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + fill * 18}px ${color})` }}>
    <circle cx={50} cy={30} r={22} fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4} strokeDasharray={dashed ? "8 7" : undefined} />
    <path d="M10 118 C 10 78, 28 62, 50 62 C 72 62, 90 78, 90 118 Z" fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4}
      strokeDasharray={dashed ? "8 7" : undefined} strokeLinejoin="round" />
  </svg>
);

const SmallFlame: React.FC<{ lit: number; seed?: number; size?: number }> = ({ lit, seed = 0, size = 1 }) => {
  const { t } = useT();
  if (lit <= 0.01) return null;
  const n = (k: number) => Math.sin(t * (6 + k) + k * 1.7 + seed) * 5;
  const h = 90 * lit;
  const d = `M0 ${-h - n(1)} C ${22 + n(2)} ${-h * 0.5}, 34 -10, 26 12 C 18 30, -18 30, -26 12 C -34 -10, ${-22 + n(3)} ${-h * 0.5}, 0 ${-h - n(1)} Z`;
  return (
    <svg width={120 * size} height={160 * size} viewBox="-60 -125 120 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 24px ${WARM}) drop-shadow(0 0 40px ${GOLD})` }}>
      <defs><radialGradient id={`c9fl${seed}`} cx="0.5" cy="0.75" r="0.7"><stop offset="0" stopColor="#FFF4B8" /><stop offset="0.55" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill={`url(#c9fl${seed})`} />
      <ellipse cx={0} cy={2} rx={9} ry={18 * lit} fill="#FFF8DA" opacity={0.9} />
    </svg>
  );
};

const Candle: React.FC<{ h: number; seed: number }> = ({ h, seed }) => (
  <div style={{ position: "relative", width: 120, height: 160 + h }}>
    <div style={{ position: "absolute", left: 0, top: 0 }}><SmallFlame lit={1} seed={seed} /></div>
    <div style={{ position: "absolute", left: 58, top: 128, width: 4, height: 16, background: "#333" }} />
    <div style={{ position: "absolute", left: 25, top: 142, width: 70, height: h, borderRadius: "10px 10px 4px 4px",
      background: "linear-gradient(90deg, #e9dcc0, #fff7e6 45%, #cbb994)", boxShadow: `0 0 26px ${GOLD}66` }} />
  </div>
);

const Photo: React.FC<{ size?: number; fade?: number; thought?: number }> = ({ size = 1, fade = 0, thought = 0 }) => {
  const { t } = useT();
  return (
    <div style={{ width: 380 * size, height: 440 * size, background: "#f3ead6", borderRadius: 8, padding: 18 * size, boxSizing: "border-box",
      boxShadow: `0 0 40px ${GOLD}66, 0 10px 30px #0008`, transform: `rotate(${-4 + Math.sin(t * 0.5)}deg)` }}>
      <div style={{ width: "100%", height: "78%", position: "relative", overflow: "hidden", borderRadius: 4,
        background: "linear-gradient(#f2c27a, #c98b5a 70%, #7b9b5a 70%)", filter: "sepia(0.35)" }}>
        <div style={{ position: "absolute", left: "62%", top: "10%", opacity: 1 - 0.75 * fade, filter: fade > 0 ? `blur(${fade * 4}px)` : undefined }}>
          <Sun size={80 * size} rot={t * 10} />
        </div>
        <div style={{ position: "absolute", left: "26%", top: "38%" }}><Person size={110 * size} color="#7a3e30" fill={0.6} /></div>
        {thought > 0 && <div style={{ position: "absolute", left: "8%", top: "6%", opacity: thought }}>
          <div style={{ width: 110 * size, height: 70 * size, borderRadius: "50%", border: `3px dashed #7a3e30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width={36 * size} height={50 * size} viewBox="0 0 36 50"><ellipse cx={18} cy={16} rx={14} ry={16} fill={ROSE} /><path d="M18 32 Q 14 40 20 50" stroke="#7a3e30" strokeWidth={2} fill="none" /></svg>
          </div>
        </div>}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------- 1. the old photograph
const PhotoScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Find a photograph");
  const you = c("Is that you");
  const yes = c("Almost everyone says yes");
  const why = c("Almost no one can say");
  const body = c("that small body");
  const aft = c("remember the afternoon");
  const th = c("the child's thoughts");
  const point = c("Point to what has stayed");
  const nf = c("nothing is found");
  const shift = ramp(t, you, 0.8);
  const sweep = ramp(t, point, 1.4);
  return (
    <AbsoluteFill>
      <At x={960 - 340 * shift} y={430} s={pop(t, fps, t0, 14)}><Photo fade={ramp(t, aft, 1.0)} thought={ramp(t, th, 0.6)} /></At>
      <At x={640} y={130} o={ramp(t, c("as a small child"), 0.5) * (1 - shift)}><Glow color={GOLD} size={40}>a small child</Glow></At>
      <At x={1320} y={470} s={pop(t, fps, you + 0.2)}><Person size={240} color={TEAL} fill={0.35} /></At>
      <At x={1320} y={150} o={ramp(t, you, 0.5)}><Glow color={CHALK} size={64} serif>that's you?</Glow></At>
      <At x={1120} y={760} s={pop(t, fps, yes)}><Chip color={GREEN} size={40}>yes</Chip></At>
      <At x={1450} y={760} s={pop(t, fps, why)}><Chip color={WARM} size={40}>but what makes it so?</Chip></At>
      {/* small body vs large body */}
      <Ring x={560} y={460} p={ramp(t, body, 1.2)} r0={40} r1={140} color={ROSE} />
      <Ring x={1320} y={470} p={ramp(t, body + 0.4, 1.2)} r0={80} r1={260} color={TEAL} />
      <At x={620} y={720} o={ramp(t, aft + 0.4, 0.5) * (1 - ramp(t, point - 0.3, 0.4))}><Glow color={DIM} size={30}>the afternoon: forgotten</Glow></At>
      {/* pointing between them */}
      <Svg style={{ opacity: ramp(t, point, 0.4) }}>
        <DrawPath d="M780 400 Q 960 250 1180 400" p={sweep} color={GOLD} width={4} len={700} />
      </Svg>
      <At x={960} y={420} o={ramp(t, nf, 0.6)}>
        <div style={{ width: 130, height: 130, borderRadius: "50%", border: `3px dashed ${CHALK}`, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: SERIF, fontSize: 70, color: CHALK }}>?</div>
      </At>
      <At x={960} y={560} o={ramp(t, nf + 0.4, 0.6)}><Glow color={CHALK} size={34}>the same thing?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the invariant bearer
const Ages: React.FC<{ y: number; on: (i: number) => number }> = ({ y, on }) => {
  const ages = [[360, 90, ROSE], [740, 140, GOLD], [1140, 180, TEAL], [1540, 170, VIOLET]] as const;
  return <>{ages.map(([x, s, col], i) => <At key={i} x={x} y={y - s * 0.3} s={on(i)}><Person size={s} color={col} fill={0.3} /></At>)}</>;
};

const BearerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("How can a person stay");
  const bm = c("body, mood and memory");
  const bear = c("an invariant bearer");
  const inv = c("Invariant means unchanging");
  const beneath = c("stays the same beneath");
  const carry = c("carries identity through it");
  const bar = ramp(t, bear, 1.2);
  const kinds = [["called it a soul", "a soul", 520, GOLD], ["a stable core in the brain", "a core in the brain", 960, ICE], ["a thinking subject", "a thinking subject", 1400, VIOLET]] as const;
  return (
    <AbsoluteFill>
      <Ages y={380} on={(i) => pop(t, fps, t0 + i * 0.3)} />
      {[["body", 520, ROSE], ["mood", 960, GOLD], ["memory", 1400, TEAL]].map(([w, x, col], i) => (
        <At key={i} x={x as number} y={110} s={pop(t, fps, bm + i * 0.35)}><Chip color={col as string} size={34}>{w as string}</Chip></At>
      ))}
      {/* the bearer, drawn as a ground under the flow */}
      <At x={960} y={620} o={bar}>
        <div style={{ width: 1500 * bar, height: 70, borderRadius: 12, background: "linear-gradient(#8b8ba0, #4a4a5e)", border: `3px solid ${CHALK}`,
          boxShadow: `0 0 ${20 + 30 * ramp(t, beneath, 0.6)}px ${CHALK}88`, fontFamily: SERIF, fontSize: 40, color: "#fff", lineHeight: "70px" }}>
          {bar > 0.6 ? "invariant bearer" : ""}
        </div>
      </At>
      <At x={1500} y={700} o={ramp(t, inv, 0.5)}><Glow color={CHALK} size={32}>unchanging</Glow></At>
      <Svg style={{ opacity: ramp(t, carry, 0.5) }}>
        <path d="M260 560 L1660 560" stroke={GOLD} strokeWidth={4} strokeDasharray="10 30" strokeDashoffset={-t * 90} style={{ filter: `drop-shadow(0 0 6px ${GOLD})` }} />
      </Svg>
      {kinds.map(([ph, lab, x, col], i) => (
        <At key={i} x={x} y={770} s={pop(t, fps, c(ph))}><Chip color={col} size={32}>{lab}</Chip></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the bearer fails; the puzzle dissolves
const FailScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("a bearer that never changed");
  const perc = c("could not perceive");
  const verbs = c("changing verbs"), noun = c("an unchanging noun");
  const solved = c("not solved"), diss = c("It is dissolved"), des = c("designated, not found");
  const melt = ramp(t, diss, 1.6);
  const cx = 960, cy = 420;
  return (
    <AbsoluteFill>
      <At x={cx} y={cy} s={pop(t, fps, t0, 14)} o={1 - melt}>
        <div style={{ width: 260, height: 260, borderRadius: 16, background: "linear-gradient(135deg, #9a9ab0, #4a4a5e)", border: `3px solid ${CHALK}`,
          boxShadow: `0 0 30px ${CHALK}55`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 46, color: "#fff" }}>
          {t > noun ? "noun" : "bearer"}
        </div>
      </At>
      {/* the changing world bounces off */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const u = ((t - perc) * 0.5 + rand(i)) % 1;
        const r = 520 - 360 * Math.sin(u * Math.PI);
        return t > perc ? <div key={i} style={{ position: "absolute", left: cx + Math.cos(a) * r, top: cy + Math.sin(a) * r * 0.62, width: 18, height: 18, borderRadius: "50%",
          background: [TEAL, ROSE, GOLD][i % 3], boxShadow: `0 0 12px ${[TEAL, ROSE, GOLD][i % 3]}`, opacity: (1 - melt) * ramp(t, perc, 0.5) }} /> : null;
      })}
      <At x={cx} y={130} o={ramp(t, perc, 0.5) * (1 - ramp(t, verbs - 0.3, 0.4))}><Glow color={WARM} size={36}>untouched, it could not perceive</Glow></At>
      {["grows", "forgets", "learns", "ages"].map((w, i) => {
        const a = (i / 4) * Math.PI * 2 + t * 0.4;
        return <At key={i} x={cx + Math.cos(a) * 420} y={cy + Math.sin(a) * 250} o={ramp(t, verbs + i * 0.2, 0.5) * (1 - melt)}><Chip color={VIOLET} size={30}>{w}</Chip></At>;
      })}
      <At x={760} y={170} o={ramp(t, solved, 0.5)}><div style={{ position: "relative" }}><Glow color={CHALK} size={56}>solved</Glow><Strike at={diss - 0.2} /></div></At>
      <At x={1180} y={170}><Reveal text="dissolved" at={diss} size={84} color={ICE} top="#F0FBFF" /></At>
      <Mist x={cx} y={cy + 80} start={diss} color={CHALK} spread={260} n={24} seed={3} />
      <At x={cx} y={720}><Reveal text="designated, not found" at={des} size={80} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. the candle through the night
const CandleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Picture a candle");
  const mid = c("The flame at midnight"), dusk = c("the flame at dusk");
  const wax = c("The wax, the air"), repl = c("all been replaced");
  const diff = c("not simply a different flame"), same = c("the same candle burned");
  const noSub = c("No flame-substance travelled"), nei = c("neither identical nor wholly different");
  const night = ramp(t, t0 + 0.4, 2.0);
  const split = ramp(t, mid - 0.2, 0.8);
  const travel = ramp(t, noSub, 1.4);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ background: `linear-gradient(90deg, rgba(220,120,60,${0.22 * split}), rgba(10,15,60,${0.35 * split}))` }} />
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={i} style={{ position: "absolute", left: 1000 + rand(i) * 880, top: 60 + rand(i + 4) * 420, width: 4, height: 4, borderRadius: "50%", background: CHALK,
          opacity: split * (0.4 + 0.5 * Math.sin(t * 2 + i)) }} />
      ))}
      {/* one candle, then two moments of it */}
      <At x={960 - 420 * split} y={430} s={pop(t, fps, t0, 14)}><Candle h={300} seed={1} /></At>
      <At x={1380} y={480} s={pop(t, fps, mid)} o={split}><Candle h={190} seed={2} /></At>
      <At x={540} y={110} o={ramp(t, dusk, 0.5)}><Glow color={WARM} size={44} serif>dusk</Glow></At>
      <At x={1380} y={110} o={ramp(t, mid, 0.5)}><Glow color={ICE} size={44} serif>midnight</Glow></At>
      {/* the wax, the air and the light flow through */}
      {Array.from({ length: 16 }).map((_, i) => {
        const u = ((t - wax) * 0.5 + rand(i)) % 1;
        const x0 = i % 2 ? 540 : 1380;
        return t > wax ? <div key={i} style={{ position: "absolute", left: x0 - 90 + u * 180 + Math.sin(u * 6 + i) * 20, top: 420 - u * 260, width: 12, height: 12, borderRadius: "50%",
          background: [GOLD, ICE, WARM][i % 3], opacity: Math.sin(u * Math.PI) * ramp(t, wax, 0.5) * (1 - ramp(t, diff - 0.3, 0.5)), boxShadow: `0 0 10px ${GOLD}` }} /> : null;
      })}
      <At x={960} y={250} o={between(t, repl, diff - 0.2)}><Glow color={GOLD} size={40}>all replaced</Glow></At>
      {/* in a direct line */}
      <Svg style={{ opacity: ramp(t, diff, 0.6) }}>
        <path d="M600 400 Q 960 260 1320 400" fill="none" stroke={GOLD} strokeWidth={3} strokeDasharray="6 12" strokeDashoffset={-t * 40} />
      </Svg>
      <At x={960} y={760} s={pop(t, fps, same)} o={1 - ramp(t, nei - 0.3, 0.4)}><Chip color={GOLD} size={40}>the same candle, all night</Chip></At>
      {/* no substance travels across */}
      <At x={560 + 820 * travel} y={330 - Math.sin(travel * Math.PI) * 120} o={ramp(t, noSub, 0.3) * (1 - ramp(t, noSub + 1.6, 0.4))}><Orb size={60} color={WARM} /></At>
      <At x={960} y={250} o={between(t, noSub + 1.2, nei - 0.2)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={40}>a flame-substance travelling?</Glow><Strike at={noSub + 1.6} /></div>
      </At>
      <At x={960} y={700} o={ramp(t, nei, 0.5)}>
        <div style={{ display: "flex", gap: 40 }}><Chip color={ICE} size={36}>not identical</Chip><Chip color={ROSE} size={36}>not wholly different</Chip></div>
      </At>
      <At x={960} y={790} o={ramp(t, nei + 1.4, 0.6)}><Glow color={GOLD} size={36} serif>continuity: designated</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. a person in flux
const FluxScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A person is like this");
  const flux = c("always in flux");
  const nf = c("Nothing is found that persists");
  const pat = c("some pattern standing in");
  const lens = ramp(t, nf, 1.6);
  const cx = 960, cy = 420;
  return (
    <AbsoluteFill>
      {Array.from({ length: 110 }).map((_, i) => {
        // dots arranged on a person outline, each replaced over time
        const k = i / 110;
        const head = i < 40;
        const a = head ? (i / 40) * Math.PI * 2 : Math.PI + ((i - 40) / 70) * Math.PI;
        const bx = head ? cx + 70 * Math.cos(a) : cx + 170 * Math.cos(a);
        const by = head ? cy - 130 + 70 * Math.sin(a) : cy + 230 + 200 * Math.sin(a);
        const life = ((t - flux) * (0.3 + rand(i) * 0.3) + rand(i + 1)) % 1;
        const live = t > flux ? Math.sin(life * Math.PI) : 1;
        const drift = t > flux ? (life - 0.5) * 40 : 0;
        return <div key={i} style={{ position: "absolute", left: bx + drift * Math.cos(i), top: by + drift * Math.sin(i), width: 12, height: 12, borderRadius: "50%",
          background: [TEAL, ROSE, GOLD, VIOLET][i % 4], boxShadow: `0 0 10px ${[TEAL, ROSE, GOLD, VIOLET][i % 4]}`, opacity: ramp(t, t0 + k * 0.8, 0.4) * (0.3 + 0.7 * live) }} />;
      })}
      <At x={cx} y={110} o={ramp(t, flux, 0.5)}><Glow color={TEAL} size={44}>always in flux</Glow></At>
      <At x={cx - 260 + 520 * lens} y={cy + 40 - Math.sin(lens * Math.PI) * 120} o={between(t, nf, pat + 1.5, 0.3)}>
        <svg width={200} height={200} viewBox="0 0 180 180" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
          <circle cx={75} cy={75} r={55} fill={`${ICE}22`} stroke={ICE} strokeWidth={6} /><path d="M115 115 L165 165" stroke={ICE} strokeWidth={12} strokeLinecap="round" />
        </svg>
      </At>
      <At x={1500} y={330} o={ramp(t, nf + 0.8, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={38}>a lasting self?</Glow><Strike at={nf + 1.4} /></div>
      </At>
      <At x={1500} y={450} o={ramp(t, pat, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={38}>a stand-in pattern?</Glow><Strike at={pat + 1.0} /></div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. not reduced: the mere I
const MereScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nor is the person reduced");
  const ev = c("passing events");
  const des = c("They too are designated");
  const ground = c("None of them is the ground", 0.3);
  const g = ramp(t, ground, 0.5), fall = ramp(t, ground + 1.1, 1.3);
  const mere = c("the mere I");
  const idn = c("identical with nothing"), nowhere = c("found nowhere"), valid = c("fully valid");
  const up = ramp(t, mere - 0.3, 0.8);
  const evs = Array.from({ length: 7 }, (_, i) => [360 + i * 200, 470 + Math.sin(i * 1.7) * 60]);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - up, transform: `translateY(${up * 120}px) scale(${1 - 0.25 * up})` }}>
        {evs.map(([x, y], i) => {
          const d = ramp(t, des + i * 0.1, 0.4);
          return (
            <At key={i} x={x} y={y} s={pop(t, fps, ev + i * 0.12)}>
              <div style={{ width: 110, height: 110, borderRadius: "50%", border: `4px ${d > 0.5 ? "dashed" : "solid"} ${[TEAL, ROSE, GOLD, VIOLET][i % 4]}`,
                background: d > 0.5 ? "transparent" : `${[TEAL, ROSE, GOLD, VIOLET][i % 4]}66`, boxShadow: `0 0 24px ${[TEAL, ROSE, GOLD, VIOLET][i % 4]}88` }} />
            </At>
          );
        })}
        <At x={960} y={300} o={ramp(t, ev, 0.5) * (1 - ramp(t, des, 0.4))}><Glow color={CHALK} size={40}>events: what really exists?</Glow></At>
        <At x={960} y={300} o={ramp(t, des, 0.5)}><Glow color={GOLD} size={40}>designated too</Glow></At>
        <At x={960 - fall * 60} y={640 + fall * 200} o={g * (1 - fall)} r={-fall * 8}>
          <div style={{ width: 1300, height: 28, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}44, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} />
        </At>
        <At x={1500} y={600} o={g * (1 - fall)}><Glow color={WARM} size={36}>a ground?</Glow></At>
      </AbsoluteFill>
      <At x={960} y={180}><Reveal text="the mere I" at={mere} size={110} /></At>
      <At x={960} y={420} s={pop(t, fps, mere + 0.4, 14)}><Person size={180} color={GOLD} fill={0.25} dashed={t > nowhere} /></At>
      {[["body", 620], ["mind", 1300]].map(([w, x], i) => (
        <At key={i} x={x as number} y={430} o={ramp(t, idn + i * 0.3, 0.5)}>
          <div style={{ position: "relative" }}><Chip color={DIM} size={36}>{w as string}</Chip><Strike at={idn + 0.8 + i * 0.3} /></div>
        </At>
      ))}
      <At x={960} y={660} o={ramp(t, nowhere, 0.5)}><Glow color={DIM} size={36}>found nowhere</Glow></At>
      <At x={960} y={770} o={ramp(t, valid, 0.5)}>
        <div style={{ display: "flex", gap: 14, alignItems: "center" }}><Tick p={ramp(t, valid, 0.6)} size={56} /><Glow color={GREEN} size={42} serif>valid as a designation</Glow></div>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. the photograph is not wrong
const StoryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("So the photograph is not wrong");
  const fam = c("Your family says"), rec = c("The records agree"), story = c("A story runs");
  const pers = c("a self that has persisted", 0.3);
  const word = c("the word I can reliably gather");
  const under = c("nothing underneath holding");
  const g = ramp(t, pers, 0.5), fall = ramp(t, pers + 1.2, 1.3);
  const gather = ramp(t, word + 0.4, 1.4);
  return (
    <AbsoluteFill>
      <At x={360} y={430} s={pop(t, fps, t0) * 0.62}><Photo /></At>
      <At x={560} y={230} o={ramp(t, t0 + 0.5, 0.4)}><Tick p={ramp(t, t0 + 0.5, 0.6)} size={60} /></At>
      <At x={780} y={430} s={pop(t, fps, fam)}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
          <Person size={80} color={ROSE} fill={0.3} /><Person size={100} color={TEAL} fill={0.3} /><Person size={60} color={GOLD} fill={0.3} />
        </div>
        <Glow color={CHALK} size={28}>"that's you"</Glow>
      </At>
      <At x={1150} y={430} s={pop(t, fps, rec)}>
        <svg width={170} height={210} viewBox="0 0 170 210" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <rect x={10} y={10} width={150} height={190} rx={8} fill="#f5ecd622" stroke={CHALK} strokeWidth={3} />
          {[45, 70, 95, 120].map((y) => <line key={y} x1={30} x2={140} y1={y} y2={y} stroke={DIM} strokeWidth={4} />)}
          <circle cx={120} cy={162} r={20} fill={`${WARM}88`} stroke={WARM} strokeWidth={3} />
        </svg>
        <Glow color={GOLD} size={28}>records</Glow>
      </At>
      <At x={1560} y={430} s={pop(t, fps, story - 0.2)}><Person size={170} color={TEAL} fill={0.35} /></At>
      <Svg style={{ opacity: ramp(t, story, 0.3) }}>
        <DrawPath d="M420 220 C 700 150, 900 290, 1150 220 S 1450 160, 1560 250" p={ramp(t, story, 1.6)} color={ROSE} width={5} len={1500} />
      </Svg>
      <At x={960} y={160} o={ramp(t, story + 0.5, 0.5)}><Glow color={ROSE} size={34}>a story, then to now</Glow></At>
      {/* a persisting self underneath: shown only to be removed */}
      <At x={960 + fall * 50} y={720 + fall * 200} o={g * (1 - fall)} r={fall * 6}>
        <div style={{ width: 1400, height: 30, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}44, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} />
      </At>
      <At x={960} y={800} o={g * (1 - fall)}><Glow color={WARM} size={34}>a self that persisted?</Glow></At>
      {/* the word I gathers */}
      <At x={960} y={600} s={pop(t, fps, word)}><Glow color={GOLD} size={150} serif>I</Glow></At>
      <Svg style={{ opacity: ramp(t, word + 0.3, 0.4) }}>
        {[[360, 470], [780, 470], [1150, 470], [1560, 470]].map(([x, y], i) => (
          <DrawPath key={i} d={`M${x} ${y + 40} Q ${(x + 960) / 2} ${640} 960 ${600}`} p={gather} color={GOLD} width={3} len={900} />
        ))}
      </Svg>
      <At x={960} y={790} o={ramp(t, under, 0.6)}>
        <div style={{ width: 360, height: 40, borderRadius: 8, border: `2px dashed ${DIM}` }} />
        <Glow color={DIM} size={28} style={{ marginTop: 8 }}>nothing underneath</Glow>
      </At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. memory
const Head: React.FC<{ color: string }> = ({ color }) => (
  <svg width={200} height={220} viewBox="0 0 200 220" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M60 210 L60 170 C 30 150, 20 110, 30 80 C 45 30, 110 10, 150 40 C 180 60, 185 100, 170 120 L185 150 L165 155 L165 185 L120 190 L120 210"
      fill={`${color}22`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
  </svg>
);

const MemoryScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Memory works the same way");
  const vault = c("an object kept in a vault");
  const fresh = c("a fresh appearance");
  const then = c("what happened then"), now = c("what is asked now");
  const two = c("two people remember");
  const form = ramp(t, fresh + 0.2, 1.4);
  const out = ramp(t, two - 0.4, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - out }}>
        <At x={480} y={420} s={pop(t, fps, t0 + 0.3)}>
          <div style={{ position: "relative" }}>
            <svg width={300} height={300} viewBox="0 0 300 300" style={{ filter: `drop-shadow(0 0 12px ${DIM})` }}>
              <rect x={20} y={20} width={260} height={260} rx={16} fill="#3a3a50" stroke={CHALK} strokeWidth={5} />
              <circle cx={150} cy={150} r={60} fill="none" stroke={CHALK} strokeWidth={6} />
              {[0, 60, 120, 180, 240, 300].map((a) => <line key={a} x1={150} y1={150} x2={150 + 60 * Math.cos((a * Math.PI) / 180)} y2={150 + 60 * Math.sin((a * Math.PI) / 180)} stroke={CHALK} strokeWidth={4} />)}
            </svg>
          </div>
          <Glow color={DIM} size={32}>a vault?</Glow>
        </At>
        <Svg style={{ opacity: ramp(t, vault + 0.6, 0.3) }}>
          <DrawPath d="M330 270 L630 570" p={ramp(t, vault + 0.6, 0.4)} color={WARM} width={8} len={450} />
          <DrawPath d="M630 270 L330 570" p={ramp(t, vault + 0.8, 0.4)} color={WARM} width={8} len={450} />
        </Svg>
        {/* a fresh appearance, formed from then and now */}
        {Array.from({ length: 26 }).map((_, i) => {
          const fromL = i % 2 === 0;
          const sx = fromL ? 900 : 1700, sy = 700;
          const a = (i / 26) * Math.PI * 2;
          const tx = 1300 + Math.cos(a) * 110, ty = 360 + Math.sin(a) * 80;
          const k = ramp(t, fresh + 0.2 + rand(i) * 1.2, 1.2);
          return t > fresh ? <div key={i} style={{ position: "absolute", left: sx + (tx - sx) * k, top: sy + (ty - sy) * k, width: 12, height: 12, borderRadius: "50%",
            background: fromL ? VIOLET : TEAL, boxShadow: `0 0 10px ${fromL ? VIOLET : TEAL}`, opacity: 0.4 + 0.6 * k }} /> : null;
        })}
        <At x={1300} y={360} o={form}>
          <div style={{ width: 300, height: 200, borderRadius: "50%", background: `radial-gradient(${GOLD}55, ${VIOLET}22 70%, transparent)`,
            boxShadow: `0 0 40px ${GOLD}55`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Glow color="#fff" size={34} serif>memory</Glow>
          </div>
        </At>
        <At x={1300} y={130} o={ramp(t, fresh, 0.5)}><Glow color={GOLD} size={38}>fresh each time</Glow></At>
        <At x={900} y={760} s={pop(t, fps, then)}><Chip color={VIOLET} size={34}>then</Chip></At>
        <At x={1700} y={760} s={pop(t, fps, now)}><Chip color={TEAL} size={34}>now</Chip></At>
      </AbsoluteFill>
      <Scene from={two - 0.3} to={1e9}>
        <At x={640} y={560} s={pop(t, fps, two)}><Head color={TEAL} /></At>
        <At x={1280} y={560} s={pop(t, fps, two + 0.2)}><div style={{ transform: "scaleX(-1)" }}><Head color={ROSE} /></div></At>
        <At x={620} y={280} s={pop(t, fps, two + 0.6)}>
          <div style={{ padding: "18px 30px", borderRadius: "50%", background: `${TEAL}33`, border: `2px solid ${TEAL}` }}><Glow color={TEAL} size={32}>that evening...</Glow></div>
        </At>
        <At x={1300} y={280} s={pop(t, fps, two + 0.9)}>
          <div style={{ padding: "18px 30px", borderRadius: "50%", background: `${ROSE}33`, border: `2px solid ${ROSE}` }}><Glow color={ROSE} size={32}>no, it was...</Glow></div>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. the melody
const Note: React.FC<{ color: string }> = ({ color }) => (
  <svg width={50} height={80} viewBox="0 0 50 80" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <ellipse cx={18} cy={64} rx={14} ry={10} fill={color} transform="rotate(-20 18 64)" /><line x1={30} y1={62} x2={30} y2={6} stroke={color} strokeWidth={4} />
    <path d="M30 6 Q 44 14 42 30" stroke={color} strokeWidth={4} fill="none" />
  </svg>
);

const MelodyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("a melody learned by heart");
  const each = c("Each playing is new"), none = c("None is the one before");
  const rec = c("the tune is recognized"), betw = c("between the playings"), less = c("no less a tune");
  const rows = [250, 450, 650];
  const tune = [0, 2, 4, 3, 5, 4, 2, 1];
  const cols = [TEAL, ROSE, GOLD];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={VIOLET} size={44} serif>a melody, learned by heart</Glow></At>
      {rows.map((y, r) => {
        const at = r === 0 ? t0 + 0.6 : each + (r - 1) * 0.9;
        return (
          <React.Fragment key={r}>
            <Svg style={{ opacity: ramp(t, at, 0.5) }}>
              {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={360} x2={1560} y1={y - 40 + k * 20} y2={y - 40 + k * 20} stroke={CHALK} strokeOpacity={0.35} strokeWidth={2} />)}
            </Svg>
            {tune.map((n, i) => (
              <At key={i} x={430 + i * 145} y={y + 10 - n * 12} s={pop(t, fps, at + 0.15 + i * 0.12)}>
                <Note color={cols[r]} />
              </At>
            ))}
            <At x={250} y={y} o={ramp(t, at, 0.5)}><Glow color={cols[r]} size={28}>{["playing", "again", "again"][r]}</Glow></At>
          </React.Fragment>
        );
      })}
      <At x={1700} y={450} o={ramp(t, none, 0.5)}><Glow color={DIM} size={30}>each new</Glow></At>
      <Svg style={{ opacity: ramp(t, rec, 0.6) }}>
        <path d="M1590 230 C 1680 330, 1680 570, 1590 670" fill="none" stroke={GOLD} strokeWidth={5} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} />
      </Svg>
      <At x={1760} y={300} o={ramp(t, rec + 0.3, 0.5)}><Glow color={GOLD} size={34}>the tune</Glow></At>
      {[350, 550].map((y, i) => (
        <At key={i} x={960} y={y} o={between(t, betw + i * 0.2, less - 0.2)}>
          <div style={{ position: "relative" }}><div style={{ width: 600, height: 40, borderRadius: 8, border: `2px dashed ${WARM}`, fontFamily: SANS, fontSize: 26, color: WARM, lineHeight: "40px" }}>kept in here?</div></div>
        </At>
      ))}
      <Ring x={960} y={450} p={ramp(t, less, 1.4)} r0={100} r1={600} color={GOLD} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. responsibility and change
const Sprout: React.FC<{ p: number }> = ({ p }) => (
  <svg width={300} height={340} viewBox="-150 -320 300 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GREEN})` }}>
    <path d="M-110 10 L110 10" stroke="#7a5a35" strokeWidth={10} strokeLinecap="round" />
    <DrawPath d="M0 10 C 0 -60, -10 -140, 0 -260" p={p} color={GREEN} width={9} len={300} glow={false} />
    {[[-1, -90, 0.3], [1, -150, 0.5], [-1, -200, 0.7], [1, -250, 0.85]].map(([s, y, at], i) => {
      const k = Math.max(0, Math.min(1, (p - (at as number)) / 0.15));
      return <ellipse key={i} cx={(s as number) * 40 * k} cy={y as number} rx={44 * k} ry={18 * k} fill={`${GREEN}88`} stroke={GREEN} strokeWidth={3}
        transform={`rotate(${(s as number) * -25} ${(s as number) * 40 * k} ${y})`} />;
    })}
  </svg>
);

const PromiseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("keeps a promise");
  const does = c("The person does"), res = c("meeting the results");
  const fixed = c("A fixed essence"), rem = c("changed by remorse"), learn = c("It could not learn");
  const des = c("designated rather than given"), grow = c("growth and change are possible");
  const partB = fixed - 0.3;
  const out = ramp(t, partB, 0.5);
  const soft = ramp(t, des, 1.0);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - out }}>
        <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={48} serif>who keeps a promise?</Glow></At>
        {/* then and now on a line */}
        <Svg style={{ opacity: ramp(t, does, 0.5) }}>
          <path d="M520 480 L1400 480" stroke={GOLD} strokeWidth={3} strokeDasharray="6 12" strokeDashoffset={-t * 40} />
        </Svg>
        <At x={520} y={430} s={pop(t, fps, t0 + 0.3)}><Person size={140} color={TEAL} fill={0.35} /></At>
        <At x={520} y={630} o={ramp(t, t0 + 0.6, 0.5)}><Chip color={TEAL} size={30}>promise made</Chip></At>
        <At x={1400} y={430} s={pop(t, fps, does)}><Person size={160} color={GOLD} fill={0.35} /></At>
        <At x={1400} y={630} o={ramp(t, res, 0.5)}><Chip color={GOLD} size={30}>promise kept</Chip></At>
        <At x={960} y={420} o={ramp(t, does + 0.5, 0.5)}><Glow color={GOLD} size={32}>the same person, by convention</Glow></At>
        <Ring x={1400} y={430} p={ramp(t, res + 0.3, 1.2)} r0={100} r1={240} color={GOLD} />
      </AbsoluteFill>
      <Scene from={partB} to={1e9}>
        {/* fixed essence: a statue that nothing can change */}
        <At x={620} y={430} s={pop(t, fps, fixed)} o={1 - 0.7 * soft}>
          <div style={{ filter: "grayscale(1) brightness(0.8)" }}><Person size={200} color="#c9c9d8" fill={0.9} /></div>
        </At>
        <At x={620} y={720} o={ramp(t, fixed + 0.3, 0.5) * (1 - soft)}><Glow color={DIM} size={34}>a fixed essence</Glow></At>
        {Array.from({ length: 4 }).map((_, i) => {
          const u = ((t - rem) * 0.8 + i / 4) % 1;
          return t > rem && t < des ? <div key={i} style={{ position: "absolute", left: 500 + i * 70, top: 200 + u * 120 - (u > 0.7 ? (u - 0.7) * 300 : 0), width: 16, height: 22,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", background: ICE, opacity: Math.sin(u * Math.PI), boxShadow: `0 0 10px ${ICE}` }} /> : null;
        })}
        <At x={380} y={260} o={between(t, rem, des)}><Glow color={ICE} size={30}>remorse</Glow></At>
        <At x={860} y={260} o={between(t, learn, des)}><Glow color={VIOLET} size={30}>learning</Glow></At>
        <At x={1300} y={500} o={ramp(t, des, 0.6)}><Person size={180} color={GREEN} fill={0.2} dashed /></At>
        <At x={1300} y={740} o={ramp(t, des + 0.3, 0.6)}><Glow color={GREEN} size={34}>designated, not given</Glow></At>
        <At x={1560} y={470} o={ramp(t, grow, 0.4)}><Sprout p={ramp(t, grow, 2.5)} /></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. room to grow
const GrowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Freedom from permanence");
  const room = c("leaves room for a person to grow");
  return (
    <AbsoluteFill>
      <At x={960} y={130}><Reveal text="freedom from permanence" at={t0} size={76} color={GREEN} top="#EFFFF0" /></At>
      <At x={960} y={520} s={pop(t, fps, t0 + 0.4, 14)}><Sprout p={0.4 + 0.6 * ramp(t, room, 3.0)} /></At>
      <At x={960} y={480} o={ramp(t, room, 1.5)}><div style={{ width: 900, height: 700, borderRadius: "50%", background: `radial-gradient(${GREEN}33, transparent 65%)` }} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={960} y={450} p={ramp(t, room + k * 0.6, 2.0)} r0={120} r1={520} color={GREEN} />)}
      <Mist x={960} y={600} start={room} color={GOLD} spread={500} n={18} seed={11} />
      <At x={960} y={780}><Reveal text="room to grow" at={room + 0.6} size={72} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["photo", 0], ["bearer", c("How can a person stay", 0.6)], ["fail", c("a bearer that never changed", 0.6)], ["candle", c("Picture a candle", 0.6)],
    ["flux", c("A person is like this", 0.6)], ["mere", c("Nor is the person reduced", 0.6)], ["story", c("So the photograph is not wrong", 0.6)],
    ["memory", c("Memory works the same way", 0.6)], ["melody", c("a melody learned by heart", 0.6)], ["promise", c("keeps a promise", 0.6)],
    ["grow", c("Freedom from permanence", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("How can a person stay", 0.9)], <PhotoScene />],
    [S("How can a person stay", "a bearer that never changed"), <BearerScene />],
    [S("a bearer that never changed", "Picture a candle"), <FailScene />],
    [S("Picture a candle", "A person is like this"), <CandleScene />],
    [S("A person is like this", "Nor is the person reduced"), <FluxScene />],
    [S("Nor is the person reduced", "So the photograph is not wrong"), <MereScene />],
    [S("So the photograph is not wrong", "Memory works the same way"), <StoryScene />],
    [S("Memory works the same way", "a melody learned by heart"), <MemoryScene />],
    [S("a melody learned by heart", "keeps a promise"), <MelodyScene />],
    [S("keeps a promise", "Freedom from permanence"), <PromiseScene />],
    [S("Freedom from permanence", null), <GrowScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
