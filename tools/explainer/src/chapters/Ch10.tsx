// Chapter 10: Perceptual Co-Arising. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mist, Mood, Orb,
  PictureFrame, ROSE, Reveal, Ring, SANS, Scene, SERIF, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "a striped dress", "divided the internet", "blue and black", "the same image", "saw white and gold", "talked out of it",
  "The usual explanation", "A world of finished objects", "The senses take in signals", "The brain builds an inner picture",
  "a viewer looks at the picture", "the observer sits in an inner room", "cut off from the outer world", "a screen of images",
  "no one looking at the dress", "guessing about a dress behind it", "Each person saw a colour", "The colour formed where",
  "the brain's handling of light", "a lifetime of visual habit", "Change any one condition",
  "The dress was unusual", "split people cleanly", "Every act of seeing colour", "goes unnoticed", "simply to belong to the object",
  "A scarf is one colour", "by daylight", "under a sodium street lamp", "none at all in the dark", "not locked inside the surface",
  "a mental state floating", "the red of something", "against something",
  "Colour is designated in dependence", "the background and the names", "themselves picked out", "not a prior base",
  "look at a famous drawing", "seen as a duck", "or as a rabbit", "Nothing on the page changes", "The lines and the light",
  "a beak becomes a pair of ears", "turns to face the other way",
  "not first seen as neutral lines", "then labelled", "It is seen as a duck at once", "already in the seeing",
  "Reading works this way too", "try to see only marks", "A reader cannot", "an unfamiliar script", "the meaning falls away",
  "not a bare layer", "writing of some kind", "cracks in the paper", "Remove one designation", "another is found", "Never an undesignated floor",
  "not a message passed", "three separate things", "The one who sees", "the eye that sees", "the thing seen", "designated together",
  "None comes first", "no field beneath them",
  "Does the perceiver then make the world", "no more prior", "paints the apple red", "in the bowl before anyone", "These remain true",
  "only the inner room", "present directly", "the one who sees it",
];

const M = {
  dress: { a: "rgba(40,70,170,0.5)", b: "rgba(170,140,60,0.45)", c: "rgba(60,60,120,0.3)" },
  model: { a: "rgba(80,80,110,0.5)", b: "rgba(90,60,150,0.4)", c: "rgba(40,90,120,0.3)" },
  form: { a: "rgba(30,120,140,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(110,60,170,0.3)" },
  scarf: { a: "rgba(170,60,70,0.45)", b: "rgba(170,120,50,0.4)", c: "rgba(40,60,130,0.3)" },
  duck: { a: "rgba(60,130,90,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(90,60,150,0.3)" },
  read: { a: "rgba(90,60,160,0.5)", b: "rgba(30,110,130,0.4)", c: "rgba(150,110,50,0.3)" },
  co: { a: "rgba(30,120,130,0.5)", b: "rgba(150,70,130,0.4)", c: "rgba(150,120,50,0.35)" },
  apple: { a: "rgba(160,60,60,0.45)", b: "rgba(60,130,80,0.4)", c: "rgba(150,110,50,0.3)" },
  close: { a: "rgba(150,110,50,0.45)", b: "rgba(30,110,130,0.4)", c: "rgba(110,60,170,0.3)" },
};

// ---------------------------------------------------------------- small parts
const Tick: React.FC<{ p: number; color?: string; size?: number }> = ({ p, color = GREEN, size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
    <DrawPath d="M8 32 L24 48 L54 12" p={p} color={color} width={7} len={80} />
  </svg>
);

const Cross: React.FC<{ x: number; y: number; r: number; at: number }> = ({ x, y, r, at }) => {
  const { t } = useT();
  return (
    <Svg>
      <DrawPath d={`M${x - r} ${y - r} L${x + r} ${y + r}`} p={ramp(t, at, 0.4)} color={WARM} width={8} len={3 * r} />
      <DrawPath d={`M${x + r} ${y - r} L${x - r} ${y + r}`} p={ramp(t, at + 0.2, 0.4)} color={WARM} width={8} len={3 * r} />
    </Svg>
  );
};

/** A slab drawn as a supposed ground, then dropped away. */
const FallingGround: React.FC<{ at: number; y: number; w: number; label: string }> = ({ at, y, w, label }) => {
  const { t } = useT();
  const g = ramp(t, at, 0.5), fall = ramp(t, at + 1.1, 1.3);
  return (
    <>
      <At x={960 - fall * 60} y={y + fall * 200} o={g * (1 - fall)} r={-fall * 8}>
        <div style={{ width: w, height: 28, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}44, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} />
      </At>
      <At x={960 + w / 2 - 120} y={y - 50} o={g * (1 - fall)}><Glow color={WARM} size={34}>{label}</Glow></At>
    </>
  );
};

const Person: React.FC<{ size: number; color: string; fill?: number; dashed?: boolean }> = ({ size, color, fill = 0, dashed }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 100 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${6 + fill * 18}px ${color})` }}>
    <circle cx={50} cy={30} r={22} fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4} strokeDasharray={dashed ? "8 7" : undefined} />
    <path d="M10 118 C 10 78, 28 62, 50 62 C 72 62, 90 78, 90 118 Z" fill={color} fillOpacity={0.08 + fill * 0.55} stroke={color} strokeWidth={4}
      strokeDasharray={dashed ? "8 7" : undefined} strokeLinejoin="round" />
  </svg>
);

const Eye: React.FC<{ size: number; color?: string }> = ({ size, color = TEAL }) => {
  const { t } = useT();
  const look = Math.sin(t * 0.8) * 6;
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 200 120" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${color})` }}>
      <path d="M10 60 Q 100 -10 190 60 Q 100 130 10 60 Z" fill={`${color}22`} stroke={color} strokeWidth={6} />
      <circle cx={100 + look} cy={60} r={30} fill={`${color}88`} stroke={color} strokeWidth={4} /><circle cx={100 + look} cy={60} r={12} fill="#0b0b18" />
      <circle cx={92 + look} cy={52} r={5} fill="#fff" />
    </svg>
  );
};

const Apple: React.FC<{ size: number; color?: string }> = ({ size, color = "#E2443C" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <path d="M50 30 C 30 14, 6 26, 10 52 C 13 76, 32 94, 50 86 C 68 94, 87 76, 90 52 C 94 26, 70 14, 50 30 Z" fill={color} stroke="#ffffff55" strokeWidth={2} />
    <path d="M50 30 Q 52 16 58 8" stroke="#6b4422" strokeWidth={4} fill="none" />
    <path d="M56 18 Q 72 6 80 16 Q 68 26 56 18 Z" fill={GREEN} />
    <ellipse cx={34} cy={44} rx={7} ry={12} fill="#ffffff55" />
  </svg>
);

const Dress: React.FC<{ a: string; b: string; size?: number }> = ({ a, b, size = 1 }) => (
  <svg width={260 * size} height={380 * size} viewBox="0 0 260 380" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${a}88)` }}>
    <defs>
      <clipPath id={`c10dr${a.replace("#", "")}`}><path d="M90 10 L170 10 L180 60 L160 120 L250 370 L10 370 L100 120 L80 60 Z" /></clipPath>
    </defs>
    <g clipPath={`url(#c10dr${a.replace("#", "")})`}>
      <rect x={0} y={0} width={260} height={380} fill={a} />
      {Array.from({ length: 7 }).map((_, i) => <rect key={i} x={0} y={40 + i * 50} width={260} height={22} fill={b} />)}
    </g>
    <path d="M90 10 L170 10 L180 60 L160 120 L250 370 L10 370 L100 120 L80 60 Z" fill="none" stroke={CHALK} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

// ---------------------------------------------------------------- 1. the dress
const DressScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("a striped dress");
  const div = c("divided the internet");
  const bb = c("blue and black"), same = c("the same image"), wg = c("saw white and gold"), talk = c("talked out of it");
  const sp = ramp(t, div, 1.0);
  const wgOn = ramp(t, wg, 0.8);
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, div, 0.5) }}>
        <DrawPath d="M960 80 L960 840" p={ramp(t, div, 0.8)} color={CHALK} width={3} len={800} />
      </Svg>
      <At x={960 - 420 * sp} y={430} s={pop(t, fps, t0, 14)}><Dress a="#2C4FD8" b="#141414" /></At>
      <At x={960 + 420 * sp} y={430} o={sp}>
        <div style={{ position: "relative" }}>
          <Dress a="#2C4FD8" b="#141414" />
          <div style={{ position: "absolute", inset: 0, opacity: wgOn }}><Dress a="#F2F0EA" b="#C9A24B" /></div>
        </div>
      </At>
      <At x={540} y={760} o={ramp(t, bb, 0.5)}><Chip color="#5A7CFF" size={40}>blue and black</Chip></At>
      <At x={1380} y={760} o={wgOn}><Chip color={GOLD} size={40}>white and gold</Chip></At>
      <At x={960} y={70} o={between(t, same, wg + 1)}><Glow color={CHALK} size={34}>the same image</Glow></At>
      <Ring x={540} y={430} p={ramp(t, talk, 1.0)} r0={160} r1={300} color="#5A7CFF" />
      <Ring x={1380} y={430} p={ramp(t, talk + 0.3, 1.0)} r0={160} r1={300} color={GOLD} />
      <At x={260} y={250} s={pop(t, fps, talk)}><Glow color="#8FA6FF" size={44} serif>"blue!"</Glow></At>
      <At x={1660} y={250} s={pop(t, fps, talk + 0.3)}><Glow color={GOLD} size={44} serif>"gold!"</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 2. the inner picture model
const ModelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("The usual explanation");
  const world = Math.min(c("A world of finished objects"), t0 + 1.2), sig = c("The senses take in signals"), brain = c("The brain builds an inner picture");
  const viewer = c("a viewer looks at the picture"), room = c("the observer sits in an inner room");
  const cut = c("cut off from the outer world"), screen = c("a screen of images");
  const zoom = ramp(t, room - 0.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={90} o={ramp(t, t0, 0.5) * (1 - zoom)}><Glow color={DIM} size={40} serif>the inner-picture model</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - zoom, transformOrigin: "1320px 440px", transform: `scale(${1 + zoom * 1.5})` }}>
        <At x={330} y={340} s={pop(t, fps, world)}><Apple size={130} /></At>
        <At x={300} y={560} s={pop(t, fps, world + 0.3)}>
          <svg width={150} height={190} viewBox="0 0 150 190" style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }}>
            <rect x={65} y={110} width={20} height={75} fill="#7a5a35" /><circle cx={75} cy={75} r={60} fill={`${GREEN}66`} stroke={GREEN} strokeWidth={4} />
          </svg>
        </At>
        <At x={330} y={760} o={ramp(t, world + 0.5, 0.5)}><Glow color={CHALK} size={30}>outside</Glow></At>
        {[360, 460, 560].map((y, i) => <Flow key={i} x1={420} y1={y} x2={760} y2={440} color={TEAL} p={ramp(t, sig + i * 0.15, 0.7)} />)}
        <At x={830} y={440} s={pop(t, fps, sig)}><Eye size={150} /></At>
        <At x={830} y={560} o={ramp(t, sig + 0.4, 0.5)}><Glow color={TEAL} size={30}>senses</Glow></At>
        <Flow x1={920} y1={440} x2={1140} y2={440} color={TEAL} p={ramp(t, brain, 0.6)} />
        <At x={1340} y={430} s={pop(t, fps, brain)}>
          <svg width={420} height={420} viewBox="0 0 200 200" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
            <path d="M60 195 L60 160 C 30 140, 20 100, 30 70 C 45 20, 110 0, 150 30 C 180 50, 185 90, 170 110 L185 140 L165 145 L165 175 L120 180 L120 195"
              fill={`${VIOLET}18`} stroke={VIOLET} strokeWidth={4} strokeLinejoin="round" />
          </svg>
        </At>
        <At x={1310} y={400} o={ramp(t, brain + 0.5, 0.6)}>
          <div style={{ width: 120, height: 90, border: `3px solid ${GOLD}`, background: "#111a", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 16px ${GOLD}` }}>
            <Apple size={50} />
          </div>
        </At>
        <At x={1340} y={500} s={pop(t, fps, viewer)}><Person size={46} color={ROSE} fill={0.5} /></At>
        <At x={1340} y={710} o={ramp(t, viewer + 0.3, 0.5)}><Glow color={ROSE} size={30}>a viewer inside?</Glow></At>
      </AbsoluteFill>
      {/* the inner room */}
      <Scene from={room - 0.1} to={1e9}>
        <Svg>
          <rect x={980} y={180} width={700} height={560} rx={10} fill="#0c0b1c" fillOpacity={0.7} stroke={VIOLET} strokeWidth={5} style={{ filter: `drop-shadow(0 0 14px ${VIOLET})` }} />
        </Svg>
        <At x={1440} y={520} s={pop(t, fps, room + 0.2)}><Person size={150} color={ROSE} fill={0.4} /></At>
        <At x={1330} y={140} o={ramp(t, room, 0.5)}><Glow color={VIOLET} size={36}>an inner room</Glow></At>
        <At x={420} y={460} o={ramp(t, cut, 0.6)}>
          <div style={{ display: "flex", gap: 30, alignItems: "center", opacity: 0.6, filter: "blur(2px)" }}><Apple size={110} /><Sun size={110} rot={t * 10} /></div>
          <Glow color={DIM} size={30} style={{ marginTop: 20 }}>the outer world</Glow>
        </At>
        {[0, 1, 2].map((i) => (
          <At key={i} x={1100} y={300 + i * 160} s={pop(t, fps, screen + i * 0.25)}>
            <div style={{ width: 130, height: 110, border: `3px solid ${GOLD}`, background: "#ffffff10", boxShadow: `0 0 14px ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {i === 0 ? <Apple size={50} /> : i === 1 ? <Sun size={60} rot={0} /> : <Glow color={CHALK} size={30}>?</Glow>}
            </div>
          </At>
        ))}
        <At x={1100} y={790} o={ramp(t, screen + 0.6, 0.5)}><Glow color={GOLD} size={30}>a screen of images</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. where the colour forms
const FormScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("no one looking at the dress");
  const guess = c("guessing about a dress behind it");
  const saw = c("Each person saw a colour");
  const formed = c("The colour formed where");
  const light = c("the brain's handling of light"), habit = c("a lifetime of visual habit"), change = c("Change any one condition");
  const unusual = c("The dress was unusual"), split = c("split people cleanly"), every = c("Every act of seeing colour");
  const unnot = c("goes unnoticed"), belong = c("simply to belong to the object");
  const partB = unusual - 0.3;
  const outA = ramp(t, partB, 0.5);
  const cx = 960, cy = 430;
  const conds = [
    { lab: "the image", at: formed + 0.2, x: 560, y: 260, col: ICE },
    { lab: "the eye", at: formed + 0.6, x: 1360, y: 260, col: TEAL },
    { lab: "handling of light", at: light, x: 560, y: 620, col: GOLD },
    { lab: "visual habit", at: habit, x: 1360, y: 620, col: ROSE },
  ];
  const ch = ramp(t, change + 0.3, 0.8);
  const wob = t > change && t < change + 1.6 ? Math.sin((t - change) * 20) * 10 : 0;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - outA }}>
        <At x={960} y={430} o={between(t, t0, saw - 0.2)}>
          <div style={{ position: "relative", width: 520, height: 380 }}>
            <div style={{ position: "absolute", inset: 0, border: `4px solid ${VIOLET}`, borderRadius: 10, background: "#0c0b1c99" }} />
            <div style={{ position: "absolute", left: 60, top: 120 }}><Person size={110} color={ROSE} fill={0.4} /></div>
            <div style={{ position: "absolute", left: 280, top: 110, width: 160, height: 140, border: `3px solid ${GOLD}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Dress a="#2C4FD8" b="#141414" size={0.3} />
            </div>
            <div style={{ position: "absolute", left: 300, top: 270, fontFamily: SERIF, fontSize: 40, color: CHALK, opacity: ramp(t, guess, 0.5) }}>guessing…</div>
          </div>
        </At>
        <AbsoluteFill style={{ opacity: 1 - ramp(t, saw - 0.3, 0.4) }}><Cross x={960} y={430} r={180} at={guess + 1.0} /></AbsoluteFill>
        {conds.map((k, i) => (
          <React.Fragment key={i}>
            <Flow x1={k.x} y1={k.y} x2={cx + (k.x - cx) * 0.3} y2={cy + (k.y - cy) * 0.3} color={k.col} p={ramp(t, k.at, 0.7)} />
            <At x={k.x} y={k.y} s={pop(t, fps, k.at)} r={i === 2 ? wob : 0}><Chip color={k.col} size={34}>{k.lab}</Chip></At>
          </React.Fragment>
        ))}
        <At x={cx} y={cy} s={pop(t, fps, saw)}>
          <div style={{ position: "relative" }}>
            <Orb size={200} color="#3D63FF" />
            <div style={{ position: "absolute", inset: 0, opacity: ch }}><Orb size={200} color={GOLD} /></div>
          </div>
        </At>
        <At x={cx} y={110} o={ramp(t, saw, 0.5)}><Glow color={CHALK} size={42} serif>a colour, seen vividly</Glow></At>
        <At x={cx} y={790} o={ramp(t, change, 0.5)}><Glow color={GOLD} size={36}>change one condition: the colour changes</Glow></At>
      </AbsoluteFill>
      <Scene from={partB} to={1e9}>
        {Array.from({ length: 40 }).map((_, i) => {
          const g = i % 2;
          const sx = 300 + rand(i) * 1320, sy = 180 + rand(i + 7) * 500;
          const k = ramp(t, split, 1.4);
          const tx = (g ? 1330 : 590) + (rand(i + 3) - 0.5) * 380, ty = 320 + (rand(i + 5) - 0.5) * 260;
          const fade = ramp(t, every - 0.2, 0.6);
          return <At key={i} x={sx + (tx - sx) * k} y={sy + (ty - sy) * k} s={pop(t, fps, unusual + rand(i) * 0.6)} o={1 - fade}>
            <Orb size={36} color={g ? GOLD : "#3D63FF"} />
          </At>;
        })}
        <At x={960} y={110} o={between(t, split, every - 0.2)}><Glow color={CHALK} size={38}>two groups</Glow></At>
        {/* every act of colour vision: conditions shared, then unnoticed */}
        <At x={960} y={430} s={pop(t, fps, every, 14)}><Apple size={240} /></At>
        {[[640, 280, ICE, "image"], [1280, 280, TEAL, "eye"], [640, 600, GOLD, "light"], [1280, 600, ROSE, "habit"]].map(([x, y, col, lab], i) => (
          <At key={i} x={x as number} y={y as number} o={ramp(t, every + 0.3 + i * 0.15, 0.4) * (1 - 0.85 * ramp(t, unnot, 1.2))}>
            <Chip color={col as string} size={30}>{lab as string}</Chip>
          </At>
        ))}
        <At x={960} y={760} o={ramp(t, belong, 0.6)}>
          <div style={{ position: "relative" }}><Glow color={CHALK} size={40}>red belongs to the apple?</Glow></div>
        </At>
        <Ring x={960} y={430} p={ramp(t, belong, 1.2)} r0={120} r1={260} color="#E2443C" />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4. the scarf
const Scarf: React.FC<{ color: string; outline?: boolean }> = ({ color, outline }) => {
  const { t } = useT();
  const w = (k: number) => Math.sin(t * 1.5 + k) * 14;
  const d = `M40 120 C 160 ${60 + w(1)}, 280 ${180 + w(2)}, 420 ${110 + w(3)} C 520 ${60 + w(4)}, 600 ${120 + w(5)}, 680 ${100 + w(1)} L 690 170 C 600 ${190 + w(2)}, 520 ${130 + w(3)}, 420 ${180 + w(4)} C 280 ${250 + w(5)}, 160 ${130 + w(1)}, 40 190 Z`;
  return (
    <svg width={720} height={300} viewBox="0 0 720 300" style={{ overflow: "visible", filter: outline ? undefined : `drop-shadow(0 0 18px ${color})` }}>
      <path d={d} fill={outline ? "none" : color} stroke={outline ? DIM : "#ffffff44"} strokeWidth={3} strokeDasharray={outline ? "10 8" : undefined} />
      {!outline && [690].map((x) => [0, 1, 2, 3, 4].map((k) => <line key={k} x1={x} y1={104 + k * 15} x2={x + 26} y2={108 + k * 15} stroke={color} strokeWidth={4} />))}
    </svg>
  );
};

const ScarfScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A scarf is one colour");
  const day = c("by daylight"), lamp = c("under a sodium street lamp"), dark = c("none at all in the dark");
  const lock = c("not locked inside the surface"), mental = c("a mental state floating");
  const redOf = c("the red of something"), against = c("against something");
  const des = c("Colour is designated in dependence"), bg = c("the background and the names"), picked = c("themselves picked out"), base = c("not a prior base", 0.3);
  const partB = lock - 0.4, partC = des - 0.4;
  const col = t < lamp ? "#E2443C" : t < dark ? "#8A5A2A" : "#2a2a33";
  const darkness = ramp(t, dark, 0.6) * (1 - ramp(t, partB, 0.4));
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={partB}>
        <AbsoluteFill style={{ background: t < lamp ? `rgba(255,220,150,${0.06 * ramp(t, day, 0.5)})` : `rgba(255,140,30,${0.12 * (1 - darkness)})` }} />
        <At x={960} y={460} s={pop(t, fps, t0, 14)}><Scarf color={col} outline={t > dark + 0.4} /></At>
        <At x={360} y={200} o={between(t, day, lamp - 0.1, 0.3)}><Sun size={150} rot={t * 15} /></At>
        <At x={360} y={200} o={between(t, lamp, dark - 0.1, 0.3)}>
          <svg width={160} height={260} viewBox="0 0 160 260" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px #FF9A2E)` }}>
            <path d="M80 260 L80 60 Q 80 30 110 30 L130 30" stroke={DIM} strokeWidth={8} fill="none" />
            <path d="M110 30 L150 30 L140 50 L120 50 Z" fill="#FFB347" /><circle cx={130} cy={56} r={12} fill="#FFD27A" />
          </svg>
        </At>
        <AbsoluteFill style={{ background: "#020205", opacity: darkness * 0.8 }} />
        <At x={960} y={760} o={ramp(t, day, 0.4)}>
          <Glow color={t < lamp ? "#FF7A6E" : t < dark ? "#FFB347" : DIM} size={44} serif>{t < lamp ? "daylight: red" : t < dark ? "street lamp: brownish" : "dark: no colour"}</Glow>
        </At>
      </Scene>
      <Scene from={partB} to={partC}>
        <At x={560} y={320} s={pop(t, fps, lock)}>
          <div style={{ position: "relative", width: 260, height: 200 }}>
            <div style={{ position: "absolute", inset: 0, background: "#E2443C", borderRadius: 14, boxShadow: `0 0 26px #E2443C` }} />
            <svg width={120} height={140} viewBox="0 0 120 140" style={{ position: "absolute", left: 70, top: 30 }}>
              <path d="M30 60 L30 40 A30 30 0 0 1 90 40 L90 60" stroke={CHALK} strokeWidth={10} fill="none" /><rect x={18} y={60} width={84} height={64} rx={10} fill="#444" stroke={CHALK} strokeWidth={4} />
            </svg>
          </div>
        </At>
        <Cross x={560} y={320} r={130} at={lock + 1.0} />
        <At x={560} y={500} o={ramp(t, lock + 0.3, 0.5)}><Glow color={CHALK} size={30}>locked in the surface?</Glow></At>
        <At x={1360} y={320} s={pop(t, fps, mental)}>
          <div style={{ position: "relative" }}>
            <svg width={240} height={240} viewBox="0 0 200 200" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
              <path d="M60 195 L60 160 C 30 140, 20 100, 30 70 C 45 20, 110 0, 150 30 C 180 50, 185 90, 170 110 L185 140 L165 145 L165 175 L120 180 L120 195" fill={`${VIOLET}18`} stroke={VIOLET} strokeWidth={4} />
              <circle cx={100 + Math.sin(t * 2) * 10} cy={80 + Math.cos(t * 2) * 6} r={26} fill="#E2443C" style={{ filter: "blur(2px)" }} />
            </svg>
          </div>
        </At>
        <Cross x={1360} y={320} r={130} at={mental + 1.2} />
        <At x={1360} y={500} o={ramp(t, mental + 0.3, 0.5)}><Glow color={CHALK} size={30}>floating in a mind?</Glow></At>
        <At x={960} y={700} s={pop(t, fps, redOf)}>
          <div style={{ padding: 26, borderRadius: 16, background: ramp(t, against, 0.5) > 0.5 ? "#2D6B4A" : "transparent", boxShadow: `0 0 30px ${GREEN}55`, transition: "none" }}>
            <Apple size={130} />
          </div>
        </At>
        <At x={1230} y={700} o={ramp(t, against + 0.2, 0.5)}><Glow color={GREEN} size={32}>against something</Glow></At>
        <At x={700} y={700} o={ramp(t, redOf + 0.3, 0.5)}><Glow color="#FF7A6E" size={32}>the red of something</Glow></At>
      </Scene>
      <Scene from={partC} to={1e9}>
        {[["light", 520, 230, GOLD, des + 0.4], ["the eye", 1400, 230, TEAL, des + 0.8], ["background", 520, 610, GREEN, bg], ["names", 1400, 610, VIOLET, bg + 0.5]].map(([lab, x, y, col, at], i) => {
          const dash = ramp(t, picked, 0.5);
          return (
            <React.Fragment key={i}>
              <Flow x1={x as number} y1={y as number} x2={960 + ((x as number) - 960) * 0.3} y2={420 + ((y as number) - 420) * 0.3} color={col as string} p={ramp(t, at as number, 0.7)} dash={dash > 0.5} />
              <At x={x as number} y={y as number} s={pop(t, fps, at as number)}>
                <div style={{ fontFamily: SANS, fontSize: 34, color: CHALK, padding: "8px 22px", borderRadius: 20, border: `2px ${dash > 0.5 ? "dashed" : "solid"} ${col}`, background: `${col}22` }}>{lab as string}</div>
              </At>
            </React.Fragment>
          );
        })}
        <At x={960} y={420} s={pop(t, fps, des)}><Orb size={170} color="#E2443C" /></At>
        <At x={960} y={110} o={ramp(t, des, 0.5)}><Glow color={GOLD} size={44} serif>colour: designated in dependence</Glow></At>
        <At x={960} y={560} o={ramp(t, picked, 0.5)}><Glow color={CHALK} size={30}>picked out in the seeing</Glow></At>
        <FallingGround at={base} y={760} w={1100} label="a prior base?" />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the duck-rabbit
const DuckRabbit: React.FC<{ p: number; tint: string; ears: string }> = ({ p, tint, ears }) => (
  <svg width={640} height={420} viewBox="0 0 640 420" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${tint})` }}>
    {/* head */}
    <DrawPath d="M250 140 C 330 100, 470 110, 520 190 C 560 250, 540 330, 470 360 C 400 390, 300 370, 270 300 C 255 265, 260 230, 250 210" p={p} color={tint} width={6} len={1000} />
    {/* the two long shapes: a beak, or a pair of ears */}
    <DrawPath d="M250 140 C 190 120, 110 110, 40 135 C 110 150, 180 160, 245 175" p={p} color={ears} width={6} len={600} />
    <DrawPath d="M250 210 C 190 205, 110 215, 50 245 C 120 245, 190 235, 262 245" p={p} color={ears} width={6} len={600} />
    {/* eye */}
    <circle cx={320} cy={185} r={14 * p} fill={CHALK} />
    {/* small notch at the back: the rabbit's mouth */}
    <DrawPath d="M525 230 Q 505 238 528 248" p={p} color={tint} width={5} len={80} />
  </svg>
);

const DuckScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("look at a famous drawing");
  const duck = c("seen as a duck"), rab = c("or as a rabbit"), noch = c("Nothing on the page changes"), lines = c("The lines and the light");
  const beak = c("a beak becomes a pair of ears"), face = c("turns to face the other way");
  const neutral = c("not first seen as neutral lines"), lab = c("then labelled"), atonce = c("It is seen as a duck at once"), already = c("already in the seeing");
  const p = ramp(t, t0, 1.6);
  const asRabbit = (t > rab && t < noch) || (t > beak + 0.6 && t < neutral);
  const ears = asRabbit ? ROSE : GOLD;
  const label = asRabbit ? "rabbit" : "duck";
  const partB = neutral - 0.3;
  const dir = asRabbit ? 1 : -1;
  return (
    <AbsoluteFill>
      <At x={980} y={410} s={pop(t, fps, t0, 14)} o={1 - 0.25 * ramp(t, partB, 0.5)}><DuckRabbit p={p} tint={CHALK} ears={t > duck ? ears : CHALK} /></At>
      <At x={980} y={110} o={ramp(t, duck, 0.4) * (1 - ramp(t, partB, 0.4))}><Glow color={asRabbit ? ROSE : GOLD} size={70} serif>{label}</Glow></At>
      <At x={480} y={760} o={ramp(t, noch, 0.5) * (1 - ramp(t, partB, 0.4))}><Chip color={DIM} size={32}>the page: unchanged</Chip></At>
      <At x={1020} y={760} o={ramp(t, lines, 0.5) * (1 - ramp(t, partB, 0.4))}><Chip color={ICE} size={32}>same lines, same light</Chip></At>
      <Ring x={720} y={390} p={ramp(t, beak, 1.0)} r0={60} r1={200} color={ROSE} />
      <At x={1460} y={760} o={ramp(t, face, 0.4) * (1 - ramp(t, partB, 0.4))}>
        <div style={{ fontFamily: SERIF, fontSize: 80, color: GOLD, transform: `scaleX(${dir})`, textShadow: `0 0 20px ${GOLD}` }}>→</div>
      </At>
      <Scene from={partB} to={1e9}>
        <At x={460} y={180} o={ramp(t, neutral, 0.5)}>
          <div style={{ position: "relative" }}><Glow color={DIM} size={40}>first: neutral lines</Glow><Strike at={atonce} /></div>
        </At>
        <At x={1500} y={180 + (1 - ramp(t, lab, 0.8)) * -80} o={ramp(t, lab, 0.4)}>
          <div style={{ position: "relative" }}><div style={{ padding: "10px 26px", background: "#f3ead6", color: "#333", fontFamily: SANS, fontSize: 36, borderRadius: 8, transform: "rotate(6deg)" }}>label: duck</div>
            <Strike at={atonce + 0.3} /></div>
        </At>
        <At x={980} y={760}><Reveal text="seen as a duck, at once" at={atonce + 0.2} size={66} /></At>
        <Ring x={980} y={410} p={ramp(t, already, 1.4)} r0={150} r1={420} color={GOLD} />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. reading
const Glyphs: React.FC = () => (
  <svg width={520} height={160} viewBox="0 0 520 160" style={{ filter: `drop-shadow(0 0 8px ${VIOLET})` }}>
    {["M20 120 Q 40 20 70 120 M30 80 L65 80", "M110 40 L110 120 Q 140 140 160 100 M100 60 L170 60", "M210 120 C 200 40, 260 40, 250 90 C 245 120, 220 110, 230 80",
      "M300 40 L340 120 L380 40 M290 80 L390 80", "M430 120 Q 420 50 460 50 Q 500 50 480 90 L500 120"].map((d, i) => (
      <path key={i} d={d} fill="none" stroke={VIOLET} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />
    ))}
  </svg>
);

const ReadScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Reading works this way too");
  const marks = c("try to see only marks"), cannot = c("A reader cannot");
  const script = c("an unfamiliar script"), falls = c("the meaning falls away"), bare = c("not a bare layer", 0.3);
  const writing = c("writing of some kind"), cracks = c("cracks in the paper");
  const remove = c("Remove one designation"), another = c("another is found"), floor = c("Never an undesignated floor", 0.3);
  const shake = t > marks && t < cannot + 0.3 ? Math.sin(t * 30) * 4 : 0;
  const partB = script - 0.3;
  const peel = ramp(t, remove, 0.8);
  return (
    <AbsoluteFill>
      <Scene from={t0 - 0.3} to={partB}>
        <At x={960} y={110} o={ramp(t, t0, 0.5)}><Glow color={TEAL} size={42} serif>reading</Glow></At>
        <At x={960 + shake} y={420} s={pop(t, fps, t0 + 0.3, 14)}>
          <div style={{ fontFamily: SERIF, fontSize: 220, color: CHALK, letterSpacing: t > marks ? 30 * ramp(t, marks, 0.6) : 0, textShadow: `0 0 26px ${TEAL}` }}>tree</div>
        </At>
        <At x={960} y={640} o={ramp(t, marks, 0.5)}><Glow color={DIM} size={36}>only marks?</Glow></At>
        <At x={960} y={760} s={pop(t, fps, cannot)}><Chip color={WARM} size={40}>a reader cannot</Chip></At>
      </Scene>
      <Scene from={partB} to={1e9}>
        <At x={960} y={330} s={pop(t, fps, script, 14)}>
          <div style={{ padding: "30px 40px", background: "#f3ead61c", border: `2px solid ${CHALK}55`, borderRadius: 12, position: "relative" }}>
            <Glyphs />
            <Svg style={{ width: 600, height: 240, left: 0, top: 0, opacity: ramp(t, cracks, 0.5) }}>
              <path d="M30 220 L80 180 L70 140 L120 100" stroke={DIM} strokeWidth={3} fill="none" />
            </Svg>
          </div>
        </At>
        <At x={960} y={110} o={ramp(t, script, 0.5)}><Glow color={VIOLET} size={40} serif>an unfamiliar script</Glow></At>
        <At x={1500} y={330} o={ramp(t, script + 0.4, 0.4) * (1 - ramp(t, falls, 0.8))} blur={ramp(t, falls, 0.8) * 10}><Chip color={TEAL} size={34}>meaning</Chip></At>
        <FallingGround at={bare} y={560} w={900} label="bare marks?" />
        <At x={700 - 300 * peel} y={680 - 120 * peel} o={ramp(t, writing, 0.5) * (1 - peel)} r={-20 * peel}><Chip color={GOLD} size={36}>writing</Chip></At>
        <At x={1220} y={680} o={ramp(t, cracks, 0.5)}>
          <div style={{ position: "relative" }}><Chip color={DIM} size={32}>cracks in the paper</Chip><Strike at={cracks + 0.8} /></div>
        </At>
        <At x={700} y={680} s={pop(t, fps, another)}><Chip color={ROSE} size={36}>some other seeing-as</Chip></At>
        <FallingGround at={floor} y={800} w={1100} label="an undesignated floor?" />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. co-arising: designated together
const CoScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("not a message passed"), three = c("three separate things");
  const one = c("The one who sees"), eye = c("the eye that sees"), seen = c("the thing seen"), tog = c("designated together");
  const first = c("None comes first"), field = c("no field beneath them", 0.3);
  const msg = ramp(t, t0 + 0.4, 1.4);
  const partB = one - 0.3;
  const out = ramp(t, partB, 0.5);
  const pts = [[620, 480], [960, 260], [1300, 480]];
  const items = [{ at: one, col: ROSE, lab: "the one who sees", el: <Person size={110} color={ROSE} fill={0.4} /> },
    { at: eye, col: TEAL, lab: "the eye", el: <Eye size={170} /> }, { at: seen, col: "#E2443C", lab: "the thing seen", el: <Apple size={120} /> }];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - out }}>
        {[[480, "world"], [960, "senses"], [1440, "viewer"]].map(([x, lab], i) => (
          <At key={i} x={x as number} y={430} s={pop(t, fps, three + i * 0.2)}>
            <div style={{ width: 220, height: 160, borderRadius: 14, border: `3px solid ${DIM}`, background: "#ffffff0c", fontFamily: SANS, fontSize: 36, color: CHALK, lineHeight: "160px" }}>{lab as string}</div>
          </At>
        ))}
        <At x={480 + 960 * msg} y={330} o={ramp(t, t0, 0.3)}>
          <svg width={90} height={60} viewBox="0 0 90 60" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
            <rect x={4} y={4} width={82} height={52} rx={6} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} /><path d="M4 8 L45 34 L86 8" stroke={GOLD} strokeWidth={4} fill="none" />
          </svg>
        </At>
        <At x={960} y={650} o={ramp(t, three + 0.6, 0.5)}><div style={{ position: "relative" }}><Glow color={CHALK} size={40}>a message between separate things?</Glow><Strike at={three + 1.4} /></div></At>
      </AbsoluteFill>
      <Scene from={partB} to={1e9}>
        {[[0, 1], [1, 2], [0, 2]].map(([a, b], k) => (
          <Flow key={k} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} color={GOLD} p={ramp(t, tog, 0.6)} />
        ))}
        {items.map((it, i) => (
          <React.Fragment key={i}>
            <At x={pts[i][0]} y={pts[i][1]} s={pop(t, fps, it.at)}>{it.el}</At>
            <At x={pts[i][0]} y={pts[i][1] + (i === 1 ? -150 : 120)} o={ramp(t, it.at + 0.2, 0.5)}><Glow color={it.col} size={30}>{it.lab}</Glow></At>
            <Ring x={pts[i][0]} y={pts[i][1]} p={ramp(t, tog, 1.2)} r0={60} r1={170} color={GOLD} />
          </React.Fragment>
        ))}
        <At x={960} y={420} o={ramp(t, tog, 0.6)}><Glow color={GOLD} size={44} serif>together</Glow></At>
        <At x={1560} y={200} o={ramp(t, first, 0.5)}><div style={{ position: "relative" }}><Glow color={CHALK} size={38}>which comes first?</Glow><Strike at={first + 0.8} /></div></At>
        <FallingGround at={field} y={760} w={1100} label="a field beneath?" />
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. does the perceiver make the world?
const AppleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Does the perceiver then make the world");
  const prior = c("no more prior"), paint = c("paints the apple red"), bowl = c("in the bowl before anyone"), truth = c("These remain true");
  const tilt = Math.sin(t * 1.2) * 4 * (1 - ramp(t, prior + 1.2, 1.0));
  const partB = paint - 0.3;
  const out = ramp(t, partB, 0.5);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5) * (1 - out)}><Glow color={CHALK} size={46} serif>does the perceiver make the world?</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - out }}>
        {/* a perceiver as workshop, producing the world: shown, then refused */}
        <At x={560} y={430} s={pop(t, fps, t0 + 0.3)}><Person size={170} color={ROSE} fill={0.35} /></At>
        <Flow x1={660} y1={430} x2={1180} y2={430} color={ROSE} p={ramp(t, t0 + 0.6, 0.8) * (1 - ramp(t, prior, 0.5))} />
        <At x={1300} y={430} s={pop(t, fps, t0 + 0.9)}><Apple size={160} /></At>
        <At x={960} y={340} o={between(t, t0 + 0.9, prior)}><Glow color={ROSE} size={34}>producer?</Glow></At>
        {/* the balance: neither prior */}
        <Svg style={{ opacity: ramp(t, prior, 0.5) }}>
          <g transform={`rotate(${tilt} 930 600)`}>
            <line x1={560} y1={600} x2={1300} y2={600} stroke={GOLD} strokeWidth={6} />
          </g>
          <polygon points="930,600 890,700 970,700" fill={`${GOLD}55`} stroke={GOLD} strokeWidth={4} />
        </Svg>
        <At x={930} y={760} o={ramp(t, prior + 0.4, 0.5)}><Glow color={GOLD} size={34}>neither prior to the other</Glow></At>
      </AbsoluteFill>
      <Scene from={partB} to={1e9}>
        <At x={600} y={360} s={pop(t, fps, paint)}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Person size={130} color={ROSE} fill={0.35} />
            <svg width={160} height={60} viewBox="0 0 160 60"><rect x={0} y={24} width={110} height={12} rx={6} fill="#c9a06a" /><path d="M110 20 L150 30 L110 40 Z" fill="#E2443C" /></svg>
          </div>
        </At>
        <Cross x={680} y={360} r={150} at={paint + 0.9} />
        <At x={680} y={560} o={ramp(t, paint + 0.4, 0.5)}><Glow color={CHALK} size={32}>painting it red by looking?</Glow></At>
        <At x={1320} y={400} s={pop(t, fps, bowl)}>
          <div style={{ position: "relative", width: 360, height: 260 }}>
            <div style={{ position: "absolute", left: 60, top: 40 }}><Apple size={110} /></div>
            <div style={{ position: "absolute", left: 160, top: 50 }}><Apple size={100} color="#C93A32" /></div>
            <svg width={360} height={160} viewBox="0 0 360 160" style={{ position: "absolute", left: 0, top: 110, filter: `drop-shadow(0 0 10px ${ICE})` }}>
              <path d="M20 20 L340 20 Q 320 140 180 140 Q 40 140 20 20 Z" fill={`${ICE}44`} stroke={ICE} strokeWidth={4} />
            </svg>
          </div>
        </At>
        <At x={1320} y={660} o={ramp(t, bowl + 0.4, 0.5)}><Glow color={ICE} size={32}>in the bowl before anyone came</Glow></At>
        <At x={960} y={790} o={ramp(t, truth, 0.5)}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}><Tick p={ramp(t, truth, 0.6)} size={54} /><Glow color={GREEN} size={38} serif>true, within its framework</Glow></div>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. close
const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("only the inner room");
  const pres = c("present directly"), sees = c("the one who sees it");
  const melt = ramp(t, t0 + 0.6, 1.8);
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: ramp(t, t0, 0.4) * (1 - melt) }}>
        <rect x={560} y={180} width={800} height={520} rx={10} fill="#0c0b1c" fillOpacity={0.6} stroke={VIOLET} strokeWidth={5} strokeDasharray={melt > 0.1 ? "20 16" : undefined} />
      </Svg>
      <At x={960} y={130} o={ramp(t, t0, 0.4) * (1 - melt)}><Glow color={VIOLET} size={36}>the inner room</Glow></At>
      <Mist x={960} y={600} start={t0 + 0.6} color={VIOLET} spread={700} n={24} seed={5} />
      <At x={960} y={450} o={ramp(t, pres, 1.0)}><div style={{ width: 1000, height: 700, borderRadius: "50%", background: `radial-gradient(${GOLD}40, transparent 65%)` }} /></At>
      <At x={760} y={440} s={pop(t, fps, pres)}><Person size={180} color={ROSE} fill={0.4} /></At>
      <At x={1180} y={460} s={pop(t, fps, pres + 0.3)}><Apple size={170} /></At>
      <Ring x={970} y={450} p={ramp(t, sees, 1.6)} r0={150} r1={420} color={GOLD} />
      <At x={960} y={760}><Reveal text="present, together" at={sees} size={72} /></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["dress", 0], ["model", c("The usual explanation", 0.6)], ["form", c("no one looking at the dress", 0.6)], ["scarf", c("A scarf is one colour", 0.6)],
    ["duck", c("look at a famous drawing", 0.6)], ["read", c("Reading works this way too", 0.6)], ["co", c("not a message passed", 0.6)],
    ["apple", c("Does the perceiver then make the world", 0.6)], ["close", c("only the inner room", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The usual explanation", 0.9)], <DressScene />],
    [S("The usual explanation", "no one looking at the dress"), <ModelScene />],
    [S("no one looking at the dress", "A scarf is one colour"), <FormScene />],
    [S("A scarf is one colour", "look at a famous drawing"), <ScarfScene />],
    [S("look at a famous drawing", "Reading works this way too"), <DuckScene />],
    [S("Reading works this way too", "not a message passed"), <ReadScene />],
    [S("not a message passed", "Does the perceiver then make the world"), <CoScene />],
    [S("Does the perceiver then make the world", "only the inner room"), <AppleScene />],
    [S("only the inner room", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
