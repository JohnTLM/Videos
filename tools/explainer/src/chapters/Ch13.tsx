// Chapter 13: Conceptual Designation vs. Mere Naming. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Picture a jar", "the word sugar", "presses it on", "there before the label", "Peel the label off", "just as it was",
  "how many people hear", "A sticker, laid on top", "already finished",
  "a worry would follow", "no essence of their own", "names are mere tags", "call anything whatever we like",
  "But mere naming and designation", "Mere naming would be", "without regard to anything", "Designation is the picking out",
  "this rather than that", "by perception", "by concept", "or by words", "at every step", "what holds up under further experience",
  "a shadow as a bridge", "walk across it", "liquid water a blade", "cut bread with it", "holds up in use, or it fails",
  "Consider a forest", "Where does it end", "The trees thin", "give way to scrub", "a single oak", "No line in the ground",
  "Look for the forest apart", "fungi", "nothing is left over",
  "the forest is no hallucination", "Designation draws its edge", "by contrast", "the scale at which we look",
  "not a pattern waiting", "its reliability in use",
  "The sticker picture keeps", "an object finished before", "waiting underneath", "nothing for the sticker to stick to",
  "not laid on top", "It is in the appearing", "Look at a cup", "a patch of colour", "later labelled cup", "It appears as a cup",
  "something to lift", "its handle already offering",
  "Try to strip the designation", "Nothing bare is found", "Try to remove the vividness", "nothing left to say",
  "mingled through and through", "no seam",
  "This is why designation", "feels so solid", "We never catch ourselves", "no gap in which", "a way of taking the world", "the world itself",
  "some designations are mistaken", "In dim light", "seen as a snake", "Bring a lamp", "the snake does not hold up", "The rope does", "It ties",
  "concepts all the way down", "raw experience at the bottom", "Neither is right", "not raw material for concepts",
  "not a veil over appearance", "designated together, like long and short",
  "nothing vivid is lost", "The cup is still on the table", "its glaze still catching",
  "There is no down",
];

const M = {
  jar: { a: "rgba(160,110,50,0.45)", b: "rgba(150,60,90,0.4)", c: "rgba(60,60,130,0.3)" },
  worry: { a: "rgba(90,60,150,0.5)", b: "rgba(150,70,70,0.4)", c: "rgba(60,60,110,0.3)" },
  apart: { a: "rgba(30,120,130,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,150,0.3)" },
  shadow: { a: "rgba(40,80,150,0.5)", b: "rgba(70,50,120,0.45)", c: "rgba(30,110,130,0.3)" },
  forest: { a: "rgba(40,120,70,0.5)", b: "rgba(140,120,50,0.4)", c: "rgba(30,90,90,0.35)" },
  sticker: { a: "rgba(150,110,50,0.45)", b: "rgba(100,60,150,0.45)", c: "rgba(60,60,120,0.3)" },
  cup: { a: "rgba(170,90,50,0.45)", b: "rgba(40,100,140,0.45)", c: "rgba(150,110,50,0.35)" },
  mingle: { a: "rgba(30,120,130,0.5)", b: "rgba(150,110,50,0.45)", c: "rgba(110,60,160,0.3)" },
  solid: { a: "rgba(80,70,120,0.5)", b: "rgba(40,90,130,0.4)", c: "rgba(120,100,60,0.3)" },
  rope: { a: "rgba(40,40,80,0.55)", b: "rgba(160,110,50,0.35)", c: "rgba(40,60,90,0.3)" },
  down: { a: "rgba(90,60,160,0.5)", b: "rgba(30,110,130,0.4)", c: "rgba(150,110,50,0.35)" },
  close: { a: "rgba(170,100,50,0.45)", b: "rgba(110,60,160,0.4)", c: "rgba(170,130,60,0.4)" },
};

// ---------------------------------------------------------------- small drawings
const Crossed: React.FC<{ at: number; children: React.ReactNode }> = ({ at, children }) => (
  <div style={{ position: "relative" }}>{children}<Strike at={at} /></div>
);

const Jar: React.FC<{ glow?: number; ghost?: number }> = ({ glow = 0, ghost = 0 }) => (
  <svg width={240} height={300} viewBox="0 0 240 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${12 + 24 * glow}px ${ICE})` }}>
    <rect x={60} y={10} width={120} height={36} rx={8} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} opacity={1 - ghost} />
    <path d="M50 50 L190 50 Q215 60 215 90 L215 270 Q215 292 190 292 L50 292 Q25 292 25 270 L25 90 Q25 60 50 50 Z" fill={ghost ? "none" : "#ffffff12"}
      stroke={ICE} strokeWidth={4} strokeDasharray={ghost ? "14 10" : undefined} />
    {!ghost && Array.from({ length: 70 }).map((_, i) => (
      <circle key={i} cx={40 + rand(i) * 160} cy={150 + rand(i + 9) * 135} r={3 + rand(i + 3) * 3} fill="#F7F3EA" opacity={0.75} />
    ))}
  </svg>
);
const Label: React.FC<{ text: string; color?: string; w?: number }> = ({ text, color = GOLD, w = 170 }) => (
  <div style={{ width: w, padding: "12px 0", background: "#F5EBD2", borderRadius: 8, border: `3px solid ${color}`, boxShadow: `0 0 20px ${color}88`,
    fontFamily: "Cormorant", fontWeight: 700, fontSize: 40, color: "#3a2a18", textAlign: "center" }}>{text}</div>
);
const Cup: React.FC<{ glint?: number; steam?: boolean }> = ({ glint = 0, steam }) => {
  const { t } = useT();
  return (
    <svg width={300} height={260} viewBox="0 0 300 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${WARM})` }}>
      <defs><linearGradient id="glaze" x1="0" x2="1"><stop offset="0" stopColor="#c46b4a" /><stop offset="0.45" stopColor="#f2a27a" /><stop offset="1" stopColor="#8a3f2a" /></linearGradient></defs>
      <path d="M40 60 L220 60 L205 220 Q130 240 55 220 Z" fill="url(#glaze)" stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
      <path d="M218 90 C285 90 285 175 210 175" fill="none" stroke={WARM} strokeWidth={14} strokeLinecap="round" />
      <ellipse cx={130} cy={62} rx={90} ry={14} fill="#4a2616" stroke={WARM} strokeWidth={3} />
      <rect x={70 + 120 * ((t * 0.25) % 1)} y={80} width={18} height={130} fill="#ffffff" opacity={0.35 * glint} transform="skewX(-12)" />
      <ellipse cx={130} cy={248} rx={120} ry={10} fill="#000" opacity={0.25} />
      {steam && [0, 1, 2].map((k) => (
        <path key={k} d={`M${100 + k * 30} 40 q ${12 * Math.sin(t * 2 + k)} -25 0 -50 q ${-12 * Math.sin(t * 2 + k)} -25 0 -50`} fill="none" stroke={CHALK}
          strokeWidth={4} strokeLinecap="round" opacity={0.35 + 0.2 * Math.sin(t * 3 + k)} />
      ))}
    </svg>
  );
};
const TreeIcon: React.FC<{ s?: number; color?: string; dash?: boolean; kind?: number }> = ({ s = 1, color = GREEN, dash, kind = 0 }) => (
  <svg width={100 * s} height={160 * s} viewBox="0 0 100 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 6px ${color})` }}>
    <rect x={45} y={100} width={10} height={58} fill={dash ? "none" : "#7a5a35"} stroke={dash ? color : GOLD} strokeWidth={2} strokeDasharray={dash ? "6 5" : undefined} />
    {kind === 0
      ? <path d="M50 6 L88 100 L12 100 Z" fill={dash ? "none" : `${color}55`} stroke={color} strokeWidth={3} strokeDasharray={dash ? "8 6" : undefined} strokeLinejoin="round" />
      : <circle cx={50} cy={60} r={44} fill={dash ? "none" : `${color}55`} stroke={color} strokeWidth={3} strokeDasharray={dash ? "8 6" : undefined} />}
  </svg>
);
const Eye: React.FC<{ color?: string; shut?: number }> = ({ color = CHALK, shut = 0 }) => (
  <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M10 40 Q70 -10 130 40 Q70 90 10 40 Z" fill="none" stroke={color} strokeWidth={4} />
    <circle cx={70} cy={40} r={16 * (1 - shut)} fill={color} />
  </svg>
);
const Bulb: React.FC = () => (
  <svg width={80} height={100} viewBox="0 0 110 140" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
    <path d="M55 10 C20 10 10 45 25 65 C35 78 38 85 38 98 L72 98 C72 85 75 78 85 65 C100 45 90 10 55 10 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} />
    <path d="M40 108 L70 108 M44 120 L66 120" stroke={GOLD} strokeWidth={5} strokeLinecap="round" />
  </svg>
);
const Speech: React.FC = () => (
  <svg width={110} height={90} viewBox="0 0 110 90" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <path d="M10 10 L100 10 L100 60 L45 60 L25 82 L28 60 L10 60 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} strokeLinejoin="round" />
    <path d="M25 28 L85 28 M25 44 L70 44" stroke={ROSE} strokeWidth={4} strokeLinecap="round" />
  </svg>
);
const Walker: React.FC<{ color: string; size?: number; phase?: number }> = ({ color, size = 150, phase = 0 }) => {
  const sw = Math.sin(phase) * 18;
  return (
    <svg width={size * 0.6} height={size} viewBox="0 0 120 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
      <circle cx={60} cy={34} r={24} fill={`${color}33`} stroke={color} strokeWidth={4} />
      <path d={`M60 62 L60 130 M60 80 L${40 - sw} 115 M60 80 L${80 + sw} 115 M60 130 L${48 - sw} 190 M60 130 L${72 + sw} 190`} stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
    </svg>
  );
};

// ---------------------------------------------------------------- 1. the jar and its label
const JarScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Picture a jar"), word = c("the word sugar"), press = c("presses it on"), before = c("there before the label");
  const peel = c("Peel the label off"), same = c("just as it was");
  const on = ramp(t, press, 0.8), off = ramp(t, peel, 1.2);
  const lx = 1300 + (960 - 1300) * on + 380 * off, ly = 330 + (540 - 330) * on - 120 * off;
  return (
    <AbsoluteFill>
      <Svg><line x1={500} y1={690} x2={1420} y2={690} stroke={GOLD} strokeWidth={8} opacity={ramp(t, t0, 0.6)} style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }} /></Svg>
      <At x={960} y={540} s={pop(t, fps, t0, 14)}><Jar glow={between(t, before, before + 1.6, 0.4) + ramp(t, same, 0.8)} /></At>
      <At x={lx} y={ly} s={pop(t, fps, word)} r={off * 28 + Math.sin(off * Math.PI) * 10}>
        <Label text="sugar" />
      </At>
      <At x={1300} y={230} o={between(t, word, press, 0.4)}>
        <svg width={70} height={70} viewBox="0 0 60 60" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <path d="M8 52 L14 36 L44 6 L54 16 L24 46 Z" fill={`${GOLD}88`} stroke={GOLD} strokeWidth={3} />
        </svg>
      </At>
      <At x={560} y={330} o={ramp(t, before, 0.5)}><Chip color={ICE}>jar: first</Chip></At>
      <At x={560} y={420} o={ramp(t, before + 0.6, 0.5)}><Chip color={GOLD}>label: added</Chip></At>
      <Ring x={960} y={540} p={ramp(t, same, 1.4)} r0={150} r1={300} color={ICE} />
      <At x={960} y={790} o={ramp(t, same + 0.2, 0.5)}><Glow color={ICE} size={38}>just as it was?</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the sticker picture, and the worry
const WorldSticker: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const hear = c("how many people hear"), st = c("A sticker, laid on top"), fin = c("already finished");
  const worry = c("a worry would follow"), ess = c("no essence of their own"), tags = c("names are mere tags"), any = c("call anything whatever we like");
  const part2 = ramp(t, worry - 0.2, 0.6);
  const objs = [[560, 500], [960, 500], [1360, 500]];
  const names = ["bridge", "cup", "oak", "blade", "sugar", "snake"];
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 70, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - part2 }}>
        <Reveal text="designation" at={hear + 0.6} size={92} />
      </div>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={960} y={500} s={pop(t, fps, st - 0.3)}>
          <div style={{ width: 380, height: 380, borderRadius: "50%", background: `radial-gradient(circle at 35% 30%, #bfe8ff, ${TEAL} 45%, #1d4f6a 80%)`,
            boxShadow: `0 0 70px ${TEAL}88`, position: "relative", overflow: "hidden" }}>
            {[[90, 110, 120], [220, 210, 90], [140, 260, 70]].map(([x, y, r], i) => (
              <div key={i} style={{ position: "absolute", left: x - r / 2 + 40 * Math.sin(t * 0.3), top: y - r / 2, width: r, height: r * 0.7, borderRadius: "40%", background: `${GREEN}aa` }} />
            ))}
          </div>
        </At>
        <At x={960} y={500 - 60 * (1 - ramp(t, st + 0.4, 0.6))} o={ramp(t, st, 0.4)} r={-8}><Label text="world" color={GOLD} /></At>
        <At x={960} y={500} o={ramp(t, fin, 0.6)}><div style={{ width: 440, height: 440, borderRadius: "50%", border: `4px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}` }} /></At>
        <At x={960} y={790} o={ramp(t, fin + 0.2, 0.5)}><Glow color={GOLD} size={38}>a sticker on a finished world</Glow></At>
      </AbsoluteFill>
      <Scene from={worry - 0.2} to={1e9}>
        <At x={960} y={110} o={ramp(t, worry, 0.5)}><Glow color={WARM} size={52} serif>a worry</Glow></At>
        {objs.map(([x, y], i) => (
          <React.Fragment key={i}>
            <At x={x} y={y} s={pop(t, fps, worry + 0.3 + i * 0.15)}><Orb size={150} color={[TEAL, VIOLET, ROSE][i]} core={1 - ramp(t, ess + 0.5, 0.6)} /></At>
            <At x={x} y={y} o={between(t, ess + 0.4, ess + 1.6, 0.3)}><Glow color={WARM} size={60}>✕</Glow></At>
          </React.Fragment>
        ))}
        <At x={960} y={300} o={ramp(t, ess, 0.5) * (1 - ramp(t, tags - 0.2, 0.4))}><Glow color={CHALK} size={36}>no essence inside</Glow></At>
        {objs.map(([x, y], i) => {
          const k = Math.floor(Math.max(0, t - any) * 2.5);
          const nm = t < any ? names[i] : names[(i * 2 + k) % names.length];
          const wob = t > any ? Math.sin(t * 7 + i) * 10 : 0;
          return <At key={i} x={x + wob} y={y - 140} s={pop(t, fps, tags + i * 0.2)} r={(rand(i) - 0.5) * 20 + wob}><Label text={nm} w={150} color={DIM} /></At>;
        })}
        <At x={960} y={760} o={ramp(t, any, 0.5)}><Glow color={WARM} size={44} serif>call anything anything?</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. mere naming vs designation
const ApartScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("But mere naming and designation"), mn = c("Mere naming would be"), reg = c("without regard to anything");
  const des = c("Designation is the picking out"), trt = c("this rather than that");
  const per = c("by perception"), con = c("by concept"), words = c("or by words"), step = c("at every step"), holds = c("what holds up under further experience");
  const tagX = 480 + 160 * Math.sin((t - mn) * 1.3), tagY = 430 + 90 * Math.sin((t - mn) * 1.9);
  const pick = ramp(t, trt, 0.8);
  const row = [1100, 1260, 1420, 1580];
  return (
    <AbsoluteFill>
      <Svg><DrawPath d="M960 140 L960 820" p={ramp(t, t0, 0.8)} color={DIM} width={3} len={700} glow={false} /></Svg>
      <At x={480} y={150} o={ramp(t, t0 + 0.2, 0.5)}><Glow color={DIM} size={46} serif>mere naming</Glow></At>
      <At x={1340} y={150} o={ramp(t, t0 + 0.7, 0.5)}><Glow color={GOLD} size={46} serif>designation</Glow></At>
      <At x={tagX} y={tagY} s={pop(t, fps, mn)} r={Math.sin(t * 2) * 25}><Label text="???" color={DIM} w={130} /></At>
      <At x={480} y={700} o={ramp(t, reg, 0.5)}><Glow color={DIM} size={34}>stuck on, regardless</Glow></At>
      {row.map((x, i) => (
        <At key={i} x={x - 0} y={420} s={pop(t, fps, des + i * 0.12)}><Orb size={i === 1 ? 90 : 70} color={i === 1 ? GOLD : DIM} /></At>
      ))}
      <At x={row[1]} y={420} o={pick}><div style={{ width: 150, height: 150, borderRadius: "50%", border: `4px solid ${GOLD}`, boxShadow: `0 0 26px ${GOLD}` }} /></At>
      <At x={row[1]} y={300} o={pick}><Glow color={GOLD} size={34}>this</Glow></At>
      <At x={row[3]} y={300} o={ramp(t, trt + 0.6, 0.5)}><Glow color={DIM} size={30}>rather than that</Glow></At>
      <At x={1100} y={590} s={pop(t, fps, per)}><Eye color={ICE} /></At>
      <At x={1340} y={590} s={pop(t, fps, con)}><Bulb /></At>
      <At x={1580} y={590} s={pop(t, fps, words)}><Speech /></At>
      {[0, 1, 2, 3].map((k) => (
        <At key={k} x={1080 + k * 170} y={760 - k * 22} s={pop(t, fps, step + 0.3 + k * 0.35)}>
          <div style={{ width: 120, height: 14, borderRadius: 4, background: TEAL, boxShadow: `0 0 14px ${TEAL}` }} />
        </At>
      ))}
      {[0, 1, 2, 3].map((k) => (
        <At key={k} x={1080 + k * 170} y={720 - k * 22} o={ramp(t, holds + 0.2 + k * 0.3, 0.3)}><Glow color={GREEN} size={36}>✓</Glow></At>
      ))}
      <At x={1340} y={830} o={ramp(t, holds, 0.5)}><Glow color={TEAL} size={30}>checked by what holds up</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. shadow bridge, water blade
const ShadowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sb = c("a shadow as a bridge"), walk = c("walk across it"), wb = c("liquid water a blade"), bread = c("cut bread with it"), hold = c("holds up in use, or it fails");
  const part2 = ramp(t, wb - 0.3, 0.6);
  const w = ramp(t, walk, 1.4);
  const stop = w > 0.95;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <Svg>
          <path d="M200 520 L700 520 L700 820 L200 820 Z" fill="#2a2a3a" stroke={DIM} strokeWidth={3} opacity={pop(t, fps, sb - 0.4)} />
          <path d="M1220 520 L1720 520 L1720 820 L1220 820 Z" fill="#2a2a3a" stroke={DIM} strokeWidth={3} opacity={pop(t, fps, sb - 0.4)} />
          <path d="M700 560 Q960 620 1220 560 L1220 820 L700 820 Z" fill={`${ICE}22`} opacity={ramp(t, sb - 0.4, 0.6)} />
          {Array.from({ length: 6 }).map((_, i) => {
            const x = 700 + ((t * 60 + i * 90) % 520);
            return <line key={i} x1={x} y1={680 + (i % 3) * 40} x2={x + 40} y2={680 + (i % 3) * 40} stroke={ICE} strokeWidth={3} opacity={0.4} />;
          })}
          <path d="M700 520 L1220 520 L1240 548 L680 548 Z" fill="#000" opacity={0.55 * ramp(t, sb, 0.8)} />
        </Svg>
        <At x={960} y={460} o={ramp(t, sb + 0.3, 0.5)}><Chip color={DIM} size={30}>“bridge”</Chip></At>
        <At x={560 + 160 * w} y={440} s={pop(t, fps, walk - 0.3)} r={stop ? 0 : 0}><Walker color={TEAL} phase={t * 8 * (1 - (stop ? 1 : 0))} /></At>
        <At x={760} y={300} o={ramp(t, walk + 1.4, 0.4)}><Glow color={WARM} size={52} serif>✕ no crossing</Glow></At>
      </AbsoluteFill>
      <Scene from={wb - 0.3} to={1e9}>
        <At x={700} y={430} s={pop(t, fps, wb)}>
          <svg width={160} height={220} viewBox="0 0 160 220" style={{ filter: `drop-shadow(0 0 14px ${ICE})` }}>
            <path d="M80 10 C 120 80, 150 120, 150 150 A70 70 0 0 1 10 150 C10 120 40 80 80 10 Z" fill={`${ICE}55`} stroke={ICE} strokeWidth={4} />
          </svg>
        </At>
        <At x={700} y={250} o={ramp(t, wb + 0.3, 0.5)}><Chip color={DIM} size={30}>“blade”</Chip></At>
        <At x={1220} y={500} s={pop(t, fps, bread - 0.2)}>
          <svg width={320} height={170} viewBox="0 0 320 170" style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }}>
            <path d="M20 150 L20 80 C20 20, 300 20, 300 80 L300 150 Z" fill="#c9924f88" stroke={GOLD} strokeWidth={4} />
            {[90, 160, 230].map((x) => <path key={x} d={`M${x} 50 q 15 -12 30 0`} stroke={GOLD} strokeWidth={3} fill="none" />)}
          </svg>
        </At>
        <Mist x={1220} y={500} start={bread + 0.6} color={ICE} spread={200} n={14} seed={6} />
        <Flow x1={790} y1={440} x2={1080} y2={480} color={ICE} p={ramp(t, bread, 0.6)} />
        <At x={1220} y={300} o={ramp(t, bread + 0.9, 0.4) * (1 - ramp(t, hold - 0.2, 0.4))}><Glow color={WARM} size={46} serif>splash, no cut</Glow></At>
        <At x={760} y={780} s={pop(t, fps, hold)}><Chip color={GREEN} size={38}>holds up ✓</Chip></At>
        <At x={1160} y={780} s={pop(t, fps, hold + 0.8)}><Chip color={WARM} size={38}>fails ✕</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the forest
const ForestScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Consider a forest"), where = c("Where does it end"), thin = c("The trees thin"), scrub = c("give way to scrub"), oak = c("a single oak");
  const noline = c("No line in the ground"), apart = c("Look for the forest apart"), fungi = c("fungi"), left = c("nothing is left over");
  const hall = c("the forest is no hallucination"), edge = c("Designation draws its edge"), contrast = c("by contrast"), scale = c("the scale at which we look");
  const patt = c("not a pattern waiting"), rel = c("its reliability in use");
  const empty = ramp(t, left, 1.0) * (1 - ramp(t, hall, 0.8));
  const zoom = 1 + 0.35 * between(t, scale + 0.2, scale + 2.4, 0.8);
  const trees = Array.from({ length: 46 }, (_, i) => {
    const u = rand(i + 2);
    const x = 240 + u * u * 1100 + rand(i + 5) * 60;
    return { x, y: 520 + rand(i + 9) * 170, s: 0.7 + rand(i) * 0.6, k: i % 3 ? 0 : 1, at: t0 + u * 1.6 };
  });
  const parts = [["trees", GREEN], ["soil", WARM], ["fungi", ROSE], ["air", ICE], ["light", GOLD]] as const;
  return (
    <AbsoluteFill style={{ transform: `scale(${zoom})`, transformOrigin: "760px 600px" }}>
      <Svg><line x1={150} y1={760} x2={1780} y2={760} stroke={GREEN} strokeWidth={3} opacity={0.5 * ramp(t, t0, 0.6)} /></Svg>
      {trees.map((tr, i) => (
        <At key={i} x={tr.x} y={tr.y} s={pop(t, fps, tr.at) * tr.s * (tr.x > 900 && t > thin ? 1 : 1)} o={1 - 0.75 * empty}>
          <TreeIcon kind={tr.k} dash={empty > 0.5} />
        </At>
      ))}
      {Array.from({ length: 10 }).map((_, i) => (
        <At key={i} x={1250 + rand(i) * 260} y={730 + rand(i + 1) * 30} s={pop(t, fps, scrub + i * 0.05)} o={1 - 0.75 * empty}>
          <div style={{ width: 40, height: 22, borderRadius: "50% 50% 0 0", background: `${GREEN}66`, border: `2px solid ${GREEN}` }} />
        </At>
      ))}
      <At x={1640} y={640} s={pop(t, fps, oak) * 1.3} o={1 - 0.75 * empty}><TreeIcon kind={1} color={GOLD} /></At>
      <At x={1640} y={480} o={ramp(t, oak + 0.3, 0.5) * (1 - ramp(t, noline + 1.5, 0.4))}><Glow color={GOLD} size={30}>a single oak</Glow></At>
      <At x={760} y={140} s={pop(t, fps, where)} o={1 - ramp(t, apart - 0.2, 0.4)}><Glow color={CHALK} size={52} serif>where does it end?</Glow></At>
      <Svg>
        {[0, 1, 2].map((k) => {
          const x = 980 + k * 150 + 30 * Math.sin(t * 2 + k);
          return <line key={k} x1={x} y1={420} x2={x} y2={780} stroke={WARM} strokeWidth={4} strokeDasharray="12 10"
            opacity={between(t, noline + k * 0.4, noline + 2.2, 0.3)} />;
        })}
      </Svg>
      <At x={1130} y={380} o={between(t, noline + 0.5, noline + 2.4, 0.3)}><Glow color={WARM} size={36}>no line found</Glow></At>
      {parts.map(([lab, col], i) => (
        <At key={i} x={360 + i * 300} y={260} s={pop(t, fps, i === 2 ? fungi : apart + 0.4 + i * 0.3)} o={1 - ramp(t, hall - 0.2, 0.5)}>
          <Chip color={col} size={32}>{lab}</Chip>
        </At>
      ))}
      <At x={760} y={140} o={ramp(t, left, 0.6) * (1 - ramp(t, hall - 0.2, 0.4))}><Glow color={WARM} size={46} serif>no forest left over</Glow></At>
      <At x={760} y={140} o={ramp(t, hall, 0.6) * (1 - ramp(t, patt - 0.3, 0.4))}><Glow color={GREEN} size={46} serif>yet no hallucination</Glow></At>
      <Svg>
        <DrawPath d="M200 780 C 260 430, 700 380, 1000 440 C 1150 470, 1220 600, 1180 780" p={ramp(t, edge, 1.6)} color={GOLD} width={5} len={1700} />
      </Svg>
      <At x={1420} y={330} o={ramp(t, contrast, 0.5) * (1 - ramp(t, rel + 2, 0.5))}><Chip color={ICE} size={30}>forest · field</Chip></At>
      <At x={760} y={140} o={ramp(t, patt, 0.5) * (1 - ramp(t, rel - 0.2, 0.4))}><Crossed at={patt + 0.9}><Glow color={DIM} size={44} serif>a pattern waiting in advance</Glow></Crossed></At>
      <Svg>
        <DrawPath d="M240 740 C 500 700, 700 760, 900 700 S 1300 720, 1700 690" p={ramp(t, rel + 0.2, 1.6)} color={TEAL} width={4} len={1600} />
      </Svg>
      <At x={240 + 1440 * ramp(t, rel + 0.4, 2.6)} y={650} o={ramp(t, rel + 0.2, 0.4)}><Walker color={TEAL} size={110} phase={t * 8} /></At>
      <At x={760} y={140} o={ramp(t, rel, 0.5)}><Glow color={TEAL} size={46} serif>reliable in use</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. nothing for the sticker to stick to
const UnderScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The sticker picture keeps"), obj = c("an object finished before"), under = c("waiting underneath"), none = c("nothing for the sticker to stick to");
  const gone = ramp(t, none, 1.0);
  const fall = ramp(t, none + 1.0, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={500} s={pop(t, fps, t0)} o={1 - gone} blur={gone * 14}><Jar ghost={ramp(t, obj, 0.4) > 0.5 ? 1 : 0} /></At>
      <At x={960} y={540 + fall * 280} s={pop(t, fps, t0 + 0.2)} r={fall * 50} o={1 - ramp(t, none + 1.8, 0.5)}><Label text="sugar" /></At>
      <At x={1400} y={360} o={ramp(t, obj + 0.3, 0.5) * (1 - gone)}><Glow color={ICE} size={38}>finished before naming?</Glow></At>
      <Flow x1={1240} y1={400} x2={1090} y2={520} color={ICE} p={ramp(t, under, 0.6) * (1 - gone)} dash />
      <At x={520} y={560} o={ramp(t, under, 0.5) * (1 - gone)}><Glow color={DIM} size={38}>waiting underneath</Glow></At>
      <At x={960} y={180} o={ramp(t, none + 0.5, 0.6)}><Glow color={WARM} size={52} serif>nothing to stick to</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. the cup appears as a cup
const CupScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("not laid on top"), app = c("It is in the appearing"), look = c("Look at a cup"), patch = c("a patch of colour");
  const later = c("later labelled cup"), asCup = c("It appears as a cup"), lift = c("something to lift"), handle = c("its handle already offering");
  const cupIn = ramp(t, asCup - 0.2, 0.8);
  const patchO = ramp(t, patch, 0.6) * (1 - cupIn);
  const raise = ramp(t, lift + 0.4, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={ramp(t, t0, 0.4) * (1 - ramp(t, look - 0.2, 0.4))}><Crossed at={t0 + 1.0}><Glow color={DIM} size={50} serif>laid on top</Glow></Crossed></At>
      <div style={{ position: "absolute", top: 400, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - ramp(t, look - 0.2, 0.4) }}>
        <Reveal text="in the appearing" at={app} size={90} />
      </div>
      <Svg><line x1={560} y1={720} x2={1360} y2={720} stroke={GOLD} strokeWidth={6} opacity={ramp(t, look, 0.6)} /></Svg>
      <At x={960} y={560} o={patchO} s={pop(t, fps, patch)}>
        <div style={{ width: 240, height: 200, borderRadius: "30% 40% 35% 45%", background: "#d98a66", filter: "blur(6px)", opacity: 0.9 }} />
      </At>
      <At x={1260} y={430} o={ramp(t, later, 0.4) * (1 - cupIn)} r={-8}><Crossed at={later + 1.0}><Label text="cup" w={130} /></Crossed></At>
      <At x={560} y={420} o={patchO}><Glow color={DIM} size={34}>colour first, name later?</Glow></At>
      <At x={960} y={590 - 70 * raise} s={0.6 + 0.4 * cupIn} o={cupIn}><Cup glint={1} steam /></At>
      <Ring x={960} y={590} p={ramp(t, asCup + 0.3, 1.2)} r0={150} r1={300} color={GOLD} />
      <At x={960} y={170} o={ramp(t, asCup, 0.6)}><Glow color={GOLD} size={56} serif>a cup, from the start</Glow></At>
      <At x={1240 - 60 * raise} y={600 - 70 * raise} o={ramp(t, lift, 0.5)} r={-90}><Hand size={160} /></At>
      <At x={1150} y={565 - 70 * raise} o={between(t, handle, handle + 3, 0.4)}><div style={{ width: 110, height: 140, borderRadius: "50%", border: `4px solid ${GOLD}`, boxShadow: `0 0 26px ${GOLD}` }} /></At>
      <At x={560} y={540} o={ramp(t, lift + 0.2, 0.5)}><Chip color={ROSE} size={30}>to lift</Chip></At>
      <At x={560} y={620} o={ramp(t, handle + 0.2, 0.5)}><Chip color={GOLD} size={30}>handle for fingers</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. designation and vividness mingled
const MingleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const strip = c("Try to strip the designation"), bare = c("Nothing bare is found"), remove = c("Try to remove the vividness");
  const nothing = c("nothing left to say"), ming = c("mingled through and through"), seam = c("no seam");
  const lift1 = ramp(t, strip + 0.4, 1.0) * (1 - ramp(t, remove - 0.3, 0.6));
  const lift2 = ramp(t, remove + 0.4, 1.0) * (1 - ramp(t, ming - 0.3, 0.6));
  const mix = ramp(t, ming, 1.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - mix }}>
        <At x={960} y={430 - 220 * lift1} r={-6 * lift1} s={pop(t, fps, strip - 0.3)}>
          <div style={{ width: 640, height: 90, borderRadius: 12, background: `${GOLD}44`, border: `3px solid ${GOLD}`, boxShadow: `0 0 24px ${GOLD}`,
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={GOLD} size={40}>designation</Glow></div>
        </At>
        <At x={960 + 360 * lift2} y={540} s={pop(t, fps, strip - 0.1)} o={1 - 0.8 * lift2}>
          <div style={{ width: 640, height: 90, borderRadius: 12, background: `${TEAL}44`, border: `3px solid ${TEAL}`, boxShadow: `0 0 24px ${TEAL}`,
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={TEAL} size={40}>vividness</Glow></div>
        </At>
        <At x={960} y={720} o={between(t, bare, remove - 0.2, 0.4)}>
          <div style={{ width: 420, height: 110, borderRadius: 12, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Glow color={DIM} size={34}>bare appearance?</Glow>
          </div>
        </At>
        <At x={960} y={800} o={between(t, bare + 0.5, remove - 0.2, 0.4)}><Glow color={WARM} size={36}>nothing bare is found</Glow></At>
        <At x={960} y={720} o={between(t, nothing, ming - 0.2, 0.4)}><Glow color={WARM} size={40} serif>a label with nothing to say</Glow></At>
      </AbsoluteFill>
      {Array.from({ length: 70 }).map((_, i) => {
        const a = rand(i) * Math.PI * 2 + t * (0.3 + rand(i + 3) * 0.4) * (i % 2 ? 1 : -1);
        const r = 60 + rand(i + 1) * 300;
        const x0 = i % 2 ? 760 : 1160;
        const x = x0 + (960 + r * Math.cos(a) - x0) * mix, y = 480 + r * 0.6 * Math.sin(a) * mix + (1 - mix) * (rand(i + 7) - 0.5) * 300;
        const col = i % 2 ? GOLD : TEAL;
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: 12, height: 12, borderRadius: "50%", background: col,
          boxShadow: `0 0 12px ${col}`, opacity: ramp(t, ming, 0.6) * 0.9 }} />;
      })}
      <div style={{ position: "absolute", top: 90, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="mingled through and through" at={ming + 0.2} size={74} />
      </div>
      <At x={960} y={810} o={ramp(t, seam, 0.6)}><Glow color={CHALK} size={38}>no seam, no layer beneath</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. why it feels so solid
const SolidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("This is why designation"), solid = c("feels so solid"), never = c("We never catch ourselves"), gap = c("no gap in which");
  const way = c("a way of taking the world"), world = c("the world itself");
  const close = ramp(t, gap, 1.4);
  const lensX = 960 - 0 * close;
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, t0, 0.5)}><Glow color={CHALK} size={46} serif>pliable, yet it feels solid</Glow></At>
      <At x={560 + 200 * close} y={470} s={pop(t, fps, t0 + 0.2)}><Eye color={ICE} /></At>
      <At x={1360 - 200 * close} y={470} s={pop(t, fps, t0 + 0.4) * (1 + 0.1 * ramp(t, solid, 0.6))}>
        <div style={{ width: 260, height: 260, borderRadius: 30, background: `linear-gradient(135deg, #8a8aa0, #4a4a60)`, border: `4px solid ${CHALK}`,
          boxShadow: `0 0 ${20 + 30 * ramp(t, solid, 0.6)}px ${CHALK}` }} />
      </At>
      <At x={lensX} y={470} o={ramp(t, never, 0.5) * (1 - close)}>
        <div style={{ width: 40, height: 260, borderRadius: 20, background: `${GOLD}44`, border: `3px solid ${GOLD}`, boxShadow: `0 0 24px ${GOLD}` }} />
      </At>
      <At x={960} y={660} o={ramp(t, never + 0.3, 0.5) * (1 - ramp(t, gap, 0.4))}><Glow color={GOLD} size={34}>designating: never caught</Glow></At>
      <At x={960} y={660} o={ramp(t, gap + 0.4, 0.5) * (1 - ramp(t, way - 0.2, 0.4))}><Glow color={DIM} size={36}>no gap to notice it in</Glow></At>
      <At x={760} y={760} o={ramp(t, way, 0.5)}><Crossed at={world}><Glow color={DIM} size={36}>a way of taking the world</Glow></Crossed></At>
      <At x={1300} y={760} o={ramp(t, world, 0.5)}><Glow color={GOLD} size={44} serif>“the world itself”</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. rope and snake
const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("some designations are mistaken"), dim = c("In dim light"), snake = c("seen as a snake"), lamp = c("Bring a lamp");
  const noSnake = c("the snake does not hold up"), rope = c("The rope does"), ties = c("It ties");
  const light = ramp(t, lamp, 1.0);
  const sn = ramp(t, snake, 0.8) * (1 - ramp(t, noSnake, 1.0));
  const coil = Array.from({ length: 120 }, (_, i) => {
    const a = i * 0.16, r = 18 + i * 1.25;
    return `${i ? "L" : "M"}${(960 + r * Math.cos(a)).toFixed(1)} ${(560 + r * 0.45 * Math.sin(a)).toFixed(1)}`;
  }).join(" ");
  const tie = ramp(t, ties, 1.4);
  const tailX = 960 + 168 * Math.cos(119 * 0.16), tailY = 560 + 168 * 0.45 * Math.sin(119 * 0.16);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ background: "#000", opacity: ramp(t, dim, 0.8) * 0.55 * (1 - light) }} />
      <At x={960} y={560} o={light}><div style={{ width: 900, height: 600, borderRadius: "50%", background: `radial-gradient(closest-side, ${GOLD}55, transparent)` }} /></At>
      <Svg style={{ opacity: pop(t, fps, t0) }}>
        <path d={coil} fill="none" stroke={sn > 0.3 ? "#6b8a4a" : "#c9a26a"} strokeWidth={14} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 ${6 + 10 * light}px ${GOLD})` }} />
        <path d={coil} fill="none" stroke="#00000055" strokeWidth={14} strokeDasharray="4 10" />
        <g opacity={sn} transform={`translate(${tailX} ${tailY})`}>
          <ellipse cx={30} cy={-6} rx={34} ry={20} fill="#6b8a4a" stroke={GREEN} strokeWidth={3} />
          <circle cx={42} cy={-12} r={5} fill="#FFE680" /><path d={`M62 -4 l 22 ${4 + 4 * Math.sin(t * 12)} m -6 -2 l 8 -8`} stroke={WARM} strokeWidth={3} fill="none" />
        </g>
      </Svg>
      <At x={960} y={180} o={ramp(t, snake, 0.5) * (1 - ramp(t, noSnake, 0.6))}><Glow color={GREEN} size={56} serif>a snake!</Glow></At>
      <At x={1500} y={220 + 0 * light} s={pop(t, fps, lamp)}>
        <svg width={120} height={170} viewBox="0 0 120 170" style={{ filter: `drop-shadow(0 0 24px ${GOLD})` }}>
          <path d="M30 60 L90 60 L80 140 L40 140 Z" fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} />
          <path d="M60 60 C 40 40, 70 25, 60 5 C 80 25, 80 45, 60 60 Z" fill="#FFE6A0" />
          <rect x={25} y={140} width={70} height={14} rx={4} fill={GOLD} />
        </svg>
      </At>
      <At x={960} y={180} o={ramp(t, noSnake + 0.4, 0.5) * (1 - ramp(t, rope - 0.2, 0.4))}><Crossed at={noSnake + 1.0}><Glow color={GREEN} size={50} serif>snake</Glow></Crossed></At>
      <At x={960} y={180} o={ramp(t, rope, 0.5)}><Glow color={GOLD} size={56} serif>a rope: it holds up</Glow></At>
      {["ties", "pulls", "holds"].map((w, i) => (
        <At key={i} x={560 + i * 400} y={800} s={pop(t, fps, ties + i * 0.6)}><Chip color={[GOLD, ICE, GREEN][i]} size={34}>{w}</Chip></At>
      ))}
      <Svg>
        <DrawPath d="M1250 420 C 1350 380, 1420 470, 1360 520 C 1300 570, 1250 470, 1350 430 L 1560 400" p={tie} color="#c9a26a" width={10} len={700} />
      </Svg>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. not concepts all the way down, not a raw floor
const DownScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("concepts all the way down"), raw = c("raw experience at the bottom"), neither = c("Neither is right");
  const notRaw = c("not raw material for concepts"), veil = c("not a veil over appearance"), tog = c("designated together, like long and short");
  const part2 = ramp(t, tog - 0.3, 0.6);
  const stackScroll = (t - t0) * 60;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <div style={{ position: "absolute", left: 360, top: 160, width: 400, height: 600, overflow: "hidden",
          WebkitMaskImage: "linear-gradient(180deg, #000 60%, transparent)" }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 70 + (i % 2) * 20, top: i * 80 - (stackScroll % 80), width: 240, height: 60, borderRadius: 8,
              border: `3px solid ${VIOLET}`, background: `${VIOLET}33`, opacity: pop(t, fps, t0 + i * 0.1),
              display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Cormorant", fontSize: 30, color: CHALK }}>concept</div>
          ))}
        </div>
        <At x={560} y={120} o={ramp(t, t0, 0.5)}><Crossed at={neither + 0.2}><Glow color={VIOLET} size={36}>all the way down</Glow></Crossed></At>
        <At x={1360} y={420} s={pop(t, fps, raw)}>
          <div style={{ width: 400, height: 90, borderRadius: 8, background: "linear-gradient(180deg, #8a7a6a, #4a3a2a)", border: `3px solid ${WARM}`, boxShadow: `0 0 24px ${WARM}` }} />
        </At>
        <At x={1360} y={320} o={ramp(t, raw + 0.3, 0.5)}><Crossed at={neither + 0.5}><Glow color={WARM} size={36}>a raw floor</Glow></Crossed></At>
        <At x={1360} y={600} o={ramp(t, notRaw, 0.5)}><Glow color={TEAL} size={34}>appearance: not raw material</Glow></At>
        <At x={1360} y={700} o={ramp(t, veil, 0.5)}><Glow color={GOLD} size={34}>concepts: not a veil</Glow></At>
        <At x={1360} y={420} o={ramp(t, veil + 0.3, 0.6) * (1 - ramp(t, veil + 2.0, 0.6))}>
          <div style={{ width: 340, height: 200, background: `repeating-linear-gradient(90deg, ${CHALK}22 0 14px, ${CHALK}0a 14px 28px)`, borderRadius: 6,
            transform: `skewX(${Math.sin(t * 2) * 4}deg) translateY(${-ramp(t, veil + 1.0, 1.0) * 120}px)` }} />
        </At>
      </AbsoluteFill>
      <Scene from={tog - 0.3} to={1e9}>
        <At x={960} y={340} s={pop(t, fps, tog)}><div style={{ width: 700, height: 40, borderRadius: 20, background: TEAL, boxShadow: `0 0 30px ${TEAL}` }} /></At>
        <At x={960} y={520} s={pop(t, fps, tog + 0.4)}><div style={{ width: 280, height: 40, borderRadius: 20, background: GOLD, boxShadow: `0 0 30px ${GOLD}` }} /></At>
        <At x={1400} y={340} o={ramp(t, tog + 0.3, 0.5)}><Glow color={TEAL} size={40}>long</Glow></At>
        <At x={1190} y={520} o={ramp(t, tog + 0.7, 0.5)}><Glow color={GOLD} size={40}>short</Glow></At>
        <Flow x1={960} y1={370} x2={960} y2={490} color={CHALK} p={ramp(t, tog + 1.0, 0.6)} dash pulses={false} />
        <At x={960} y={700} o={ramp(t, tog + 1.2, 0.6)}><Glow color={CHALK} size={44} serif>appearance and concept, designated together</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. nothing vivid is lost; there is no down
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("nothing vivid is lost"), still = c("The cup is still on the table"), glaze = c("its glaze still catching"), down = c("There is no down");
  const arrowGone = ramp(t, down + 0.8, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, still, 1.0)}><div style={{ width: 900, height: 700, borderRadius: "50%", background: `radial-gradient(closest-side, ${GOLD}44, transparent)` }} /></At>
      <Svg><line x1={600} y1={590} x2={1320} y2={590} stroke={GOLD} strokeWidth={6} opacity={ramp(t, still - 0.3, 0.6)} /></Svg>
      <At x={960} y={460} s={pop(t, fps, t0 + 0.3, 14)}><Cup glint={ramp(t, glaze, 0.8)} steam /></At>
      {Array.from({ length: 6 }).map((_, i) => (
        <At key={i} x={890 + i * 22} y={420 + Math.sin(i) * 30} o={between(t, glaze + 0.3 + i * 0.15, glaze + 1.4 + i * 0.15, 0.3)}>
          <div style={{ width: 14, height: 14, transform: "rotate(45deg)", background: "#fff", boxShadow: "0 0 16px #fff" }} />
        </At>
      ))}
      <At x={960} y={130} o={ramp(t, t0, 0.6) * (1 - ramp(t, down - 0.3, 0.4))}><Glow color={CHALK} size={46} serif>nothing vivid is lost</Glow></At>
      <Svg style={{ opacity: ramp(t, down, 0.5) * (1 - arrowGone) }}>
        <line x1={1500} y1={260} x2={1500} y2={560} stroke={DIM} strokeWidth={6} strokeDasharray="14 10" />
        <polygon points="1480,560 1520,560 1500,600" fill={DIM} />
      </Svg>
      <Mist x={1500} y={600} start={down + 0.8} color={DIM} spread={60} n={10} seed={11} />
      <div style={{ position: "absolute", top: 650, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="There is no down." at={down} size={92} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["jar", 0], ["worry", c("a worry would follow", 1.2)], ["apart", c("But mere naming and designation", 0.6)], ["shadow", c("a shadow as a bridge", 1.6)],
    ["forest", c("Consider a forest", 0.6)], ["sticker", c("The sticker picture keeps", 0.6)], ["cup", c("not laid on top", 1.6)],
    ["mingle", c("Try to strip the designation", 0.6)], ["solid", c("This is why designation", 0.6)], ["rope", c("some designations are mistaken", 0.8)],
    ["down", c("concepts all the way down", 1.6)], ["close", c("nothing vivid is lost", 1.4)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("how many people hear", 0.9)], <JarScene />],
    [S("how many people hear", "But mere naming and designation", 1.0), <WorldSticker />],
    [S("But mere naming and designation", "a shadow as a bridge", 0.5, 2.2), <ApartScene />],
    [S("a shadow as a bridge", "Consider a forest", 1.8), <ShadowScene />],
    [S("Consider a forest", "The sticker picture keeps"), <ForestScene />],
    [S("The sticker picture keeps", "not laid on top", 0.5, 2.0), <UnderScene />],
    [S("not laid on top", "Try to strip the designation", 1.8), <CupScene />],
    [S("Try to strip the designation", "This is why designation"), <MingleScene />],
    [S("This is why designation", "some designations are mistaken", 0.5, 1.1), <SolidScene />],
    [S("some designations are mistaken", "concepts all the way down", 0.9, 2.0), <RopeScene />],
    [S("concepts all the way down", "nothing vivid is lost", 1.8, 1.8), <DownScene />],
    [S("nothing vivid is lost", null, 1.5), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
