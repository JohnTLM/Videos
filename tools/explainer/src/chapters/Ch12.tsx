// Chapter 12: Dissolution of Internal vs. External Worlds. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill, interpolateColors } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, Mist, Mood, Orb,
  ROSE, Reveal, Ring, Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Stand at a window", "as evening falls", "a lamp lit", "two scenes at once", "The street outside", "And the room behind you",
  "its bookshelf", "your own face",
  "Which part is inside", "The reflected lamp", "A tree seems to stand",
  "A long habit of thought", "There is an inner mind", "and an outer world", "a cold container of objects", "whether anyone looks",
  "a private room behind the eyes", "the Cartesian split",
  "But look for the wall", "No such wall is found",
  "not two territories", "They are designations", "drawn by contrast",
  "Consider a house", "perfectly clear", "dry in a storm", "Yet no wall separates", "wood, stone, doors and shelter",
  "for the purpose of living", "the open doorway", "both sides at once",
  "Calling thoughts inner", "and trees outer", "the same kind of line", "entirely reliable",
  "Now picture a crowded party", "a wash of voices", "someone says your name", "You hear it at once",
  "Where did that sound happen", "from over there", "singled out by you", "years of being called", "out in the room", "and it was yours",
  "Speaker, sound, hearer and name",
  "Even the skin can move", "a rubber hand being stroked", "their own hidden hand", "Many feel the touch", "The line of the body",
  "dodge a branch", "drawn in experience", "redrawn as things change",
  "experience is private", "No one else can feel", "a difference of access", "not a hidden room", "this tooth", "these nerves",
  "this attention", "Two people at different windows", "locked inside a box",
  "Nor does everything now fall", "the last substance", "In a dream", "the dreaming mind", "both are equally unfound",
  "Mind and world are designated", "each identified only through", "no inside and no outside", "an ordinary world", "still useful",
  "Back at the window", "No one tries to walk", "drawn in the seeing", "between an experience and a world",
];

const M = {
  dusk: { a: "rgba(170,90,60,0.45)", b: "rgba(70,50,140,0.5)", c: "rgba(150,110,50,0.35)" },
  split: { a: "rgba(40,70,130,0.5)", b: "rgba(90,50,130,0.45)", c: "rgba(60,80,110,0.3)" },
  house: { a: "rgba(40,90,140,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,110,110,0.3)" },
  party: { a: "rgba(150,60,110,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(80,60,160,0.35)" },
  skin: { a: "rgba(160,70,80,0.45)", b: "rgba(60,100,150,0.4)", c: "rgba(150,110,60,0.3)" },
  priv: { a: "rgba(30,110,130,0.5)", b: "rgba(110,60,160,0.4)", c: "rgba(60,60,120,0.3)" },
  dream: { a: "rgba(80,60,170,0.5)", b: "rgba(40,80,150,0.45)", c: "rgba(140,100,160,0.3)" },
  one: { a: "rgba(40,130,110,0.45)", b: "rgba(150,120,50,0.45)", c: "rgba(80,60,150,0.3)" },
  back: { a: "rgba(170,90,60,0.45)", b: "rgba(70,50,140,0.5)", c: "rgba(170,130,60,0.35)" },
};

// ---------------------------------------------------------------- small drawings
const HEAD_D = "M70 300 L70 232 C35 215 20 170 25 125 C32 55 85 15 140 20 C200 26 228 70 222 125 L240 168 L220 176 C223 200 218 220 196 222 L160 226 L160 300";
const Head: React.FC<{ color: string; flip?: boolean; glow?: number; s?: number }> = ({ color, flip, glow = 0, s = 1 }) => (
  <svg width={260 * s} height={310 * s} viewBox="0 0 260 310" style={{ overflow: "visible", transform: flip ? "scaleX(-1)" : undefined,
    filter: `drop-shadow(0 0 ${10 + glow * 30}px ${color})` }}>
    <path d={HEAD_D} fill={`${color}${glow > 0.5 ? "44" : "22"}`} stroke={color} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);
const Person: React.FC<{ color: string; size?: number }> = ({ color, size = 200 }) => (
  <svg width={size * 0.6} height={size} viewBox="0 0 120 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={60} cy={34} r={24} fill={`${color}33`} stroke={color} strokeWidth={4} />
    <path d="M60 62 L60 130 M60 80 L28 112 M60 80 L92 112 M60 130 L36 190 M60 130 L84 190" stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" />
  </svg>
);
const TreeSil: React.FC<{ s?: number; color?: string }> = ({ s = 1, color = "#0c1420" }) => (
  <svg width={120 * s} height={200 * s} viewBox="0 0 120 200">
    <rect x={54} y={120} width={12} height={80} fill={color} />
    <path d="M60 10 C 110 40, 115 110, 60 130 C 5 110, 10 40, 60 10 Z" fill={color} />
  </svg>
);
const Crossed: React.FC<{ at: number; children: React.ReactNode }> = ({ at, children }) => (
  <div style={{ position: "relative" }}>{children}<Strike at={at} /></div>
);

/** The window at dusk: sky darkens with `dusk`; the room's reflection grows with `refl`. */
const WindowView: React.FC<{ dusk: number; refl: number; hlLamp?: number; hlTree?: number; line?: number }> = ({ dusk, refl, hlLamp = 0, hlTree = 0, line = 0 }) => {
  const { t } = useT();
  const W0 = 1000, H0 = 600;
  const skyTop = interpolateColors(dusk, [0, 1], ["#5b7fb8", "#0d1030"]);
  const skyBot = interpolateColors(dusk, [0, 1], ["#f0b07a", "#3a2446"]);
  const trees = [[0.1, 1.1], [0.3, 1.4], [0.55, 1.0], [0.84, 1.3]];
  const carX = ((t * 0.12) % 1.4) - 0.2;
  return (
    <div style={{ position: "relative", width: W0, height: H0, overflow: "hidden", borderRadius: 6,
      background: `linear-gradient(180deg, ${skyTop}, ${skyBot})` }}>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 150, background: "#0a0e18" }} />
      {trees.map(([x, s], i) => (
        <div key={i} style={{ position: "absolute", left: x * W0 - 60 * s, bottom: 120, filter: i === 3 && hlTree > 0 ? `drop-shadow(0 0 ${20 * hlTree}px ${GREEN})` : undefined }}>
          <TreeSil s={s} color={i === 3 && hlTree > 0 ? interpolateColors(hlTree, [0, 1], ["#0c1420", "#2e6a46"]) : "#0c1420"} />
        </div>
      ))}
      <div style={{ position: "absolute", left: carX * W0, bottom: 40, width: 120, height: 34, borderRadius: 10, background: "#1a1f30" }}>
        <div style={{ position: "absolute", right: -6, top: 10, width: 14, height: 10, borderRadius: 5, background: "#FFE6A0", boxShadow: "0 0 30px 10px #FFE6A088" }} />
      </div>
      {/* reflection of the room */}
      <div style={{ position: "absolute", inset: 0, opacity: refl * 0.75, mixBlendMode: "screen" }}>
        <div style={{ position: "absolute", left: 0.3 * W0 - 120, top: 140, width: 240, height: 240, borderRadius: "50%",
          background: `radial-gradient(circle, #FFD98A, #FFB45A55 40%, transparent 70%)`, transform: `scale(${1 + 0.3 * hlLamp})` }} />
        <svg width={W0} height={H0} style={{ position: "absolute", left: 0, top: 0 }}>
          <path d={`M${0.3 * W0 - 50} 230 L${0.3 * W0 + 50} 230 L${0.3 * W0 + 30} 180 L${0.3 * W0 - 30} 180 Z`} fill="#FFD98A" opacity={0.8} />
          <line x1={0.3 * W0} y1={230} x2={0.3 * W0} y2={400} stroke="#FFD98A" strokeWidth={5} opacity={0.6} />
          <g stroke="#E8C79A" strokeWidth={4} fill="none" opacity={0.7}>
            <rect x={0.72 * W0} y={110} width={220} height={330} />
            {[0, 1, 2].map((k) => <line key={k} x1={0.72 * W0} x2={0.72 * W0 + 220} y1={190 + k * 80} y2={190 + k * 80} />)}
          </g>
          {Array.from({ length: 12 }).map((_, i) => (
            <rect key={i} x={0.72 * W0 + 10 + (i % 4) * 52} y={130 + Math.floor(i / 4) * 80 + (rand(i) * 14)} width={18 + rand(i + 2) * 18} height={52 - rand(i) * 14}
              fill={[ROSE, ICE, GOLD, GREEN][i % 4]} opacity={0.5} />
          ))}
          <ellipse cx={0.52 * W0} cy={330} rx={80} ry={100} fill="#F1ECE0" opacity={0.18} />
          <path d={`M${0.52 * W0 - 150} 600 C ${0.52 * W0 - 140} 470, ${0.52 * W0 + 140} 470, ${0.52 * W0 + 150} 600 Z`} fill="#F1ECE0" opacity={0.14} />
        </svg>
      </div>
      {line > 0 && <svg width={W0} height={H0} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={0} y1={H0 * 0.5} x2={W0 * line} y2={H0 * 0.5} stroke={GOLD} strokeWidth={5} strokeDasharray="18 12" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
      </svg>}
      {/* frame */}
      <div style={{ position: "absolute", inset: 0, border: `16px solid #3a2f28`, boxShadow: `inset 0 0 0 3px ${GOLD}88, 0 0 40px ${GOLD}44` }} />
      <div style={{ position: "absolute", left: W0 / 2 - 7, top: 0, width: 14, height: H0, background: "#3a2f28" }} />
      <div style={{ position: "absolute", top: H0 / 2 - 7, left: 0, height: 14, width: W0, background: "#3a2f28" }} />
      <div style={{ position: "absolute", top: -200, left: -400 + ((t * 120) % 1600), width: 120, height: 1000, transform: "rotate(25deg)",
        background: "linear-gradient(90deg, transparent, #ffffff14, transparent)" }} />
    </div>
  );
};

// ---------------------------------------------------------------- 1-2. the window at dusk
const WindowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Stand at a window");
  const dusk = ramp(t, c("as evening falls"), 6);
  const lamp = c("a lamp lit"), two = c("two scenes at once"), street = c("The street outside"), room = c("And the room behind you");
  const refl = Math.max(ramp(t, lamp, 1.0) * 0.4, ramp(t, room, 1.5));
  const which = c("Which part is inside"), rl = c("The reflected lamp"), tr = c("A tree seems to stand");
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, t0, 15)}>
        <WindowView dusk={dusk} refl={refl} hlLamp={between(t, rl, tr - 0.2, 0.5)} hlTree={between(t, tr, tr + 3, 0.5)} />
      </At>
      <At x={1640} y={300} s={pop(t, fps, lamp)} o={1 - ramp(t, two - 0.2, 0.5)}>
        <svg width={120} height={200} viewBox="0 0 120 200" style={{ filter: `drop-shadow(0 0 20px ${GOLD})` }}>
          <path d="M20 70 L100 70 L80 10 L40 10 Z" fill={`${GOLD}88`} stroke={GOLD} strokeWidth={3} />
          <line x1={60} y1={70} x2={60} y2={180} stroke={GOLD} strokeWidth={5} /><line x1={30} y1={185} x2={90} y2={185} stroke={GOLD} strokeWidth={6} />
        </svg>
        <Glow color={GOLD} size={30}>behind you</Glow>
      </At>
      <At x={960} y={80} o={ramp(t, two, 0.5) * (1 - ramp(t, which - 0.3, 0.4))}><Glow color={CHALK} size={44} serif>two scenes at once</Glow></At>
      <At x={300} y={330} o={ramp(t, street, 0.5) * (1 - ramp(t, which - 0.3, 0.4))}><Chip color={ICE}>the street</Chip></At>
      <At x={300} y={500} o={ramp(t, room, 0.5) * (1 - ramp(t, which - 0.3, 0.4))}><Chip color={GOLD}>the room</Chip></At>
      <At x={1640} y={480} o={ramp(t, c("its bookshelf"), 0.5) * (1 - ramp(t, which - 0.3, 0.4))}><Chip color={ROSE} size={28}>bookshelf</Chip></At>
      <At x={1640} y={580} o={ramp(t, c("your own face"), 0.5) * (1 - ramp(t, which - 0.3, 0.4))}><Chip color={CHALK} size={28}>your face</Chip></At>
      <At x={960} y={80} s={pop(t, fps, which)}><Glow color={GOLD} size={52} serif>inside, or outside?</Glow></At>
      <Ring x={760} y={360} p={ramp(t, rl + 0.4, 1.4)} r0={60} r1={170} color={GOLD} />
      <At x={300} y={360} o={between(t, rl + 0.3, tr - 0.2, 0.4)}><Glow color={GOLD} size={32}>lamp among the trees</Glow></At>
      <Ring x={1300} y={420} p={ramp(t, tr + 0.4, 1.4)} r0={60} r1={170} color={GREEN} />
      <At x={1650} y={420} o={ramp(t, tr + 0.3, 0.4)}><Glow color={GREEN} size={32}>a tree in the room</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3-4. the split, and no wall found
const SplitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("A long habit of thought"), inner = c("There is an inner mind"), outer = c("and an outer world");
  const cont = c("a cold container of objects"), looks = c("whether anyone looks"), room = c("a private room behind the eyes");
  const cart = c("the Cartesian split"), seek = c("But look for the wall"), none = c("No such wall is found");
  const wall = ramp(t, cart - 0.2, 0.8);
  const shatter = ramp(t, none + 0.2, 1.5);
  const scan = ramp(t, seek, 2.2);
  const eyeShut = between(t, looks + 0.3, looks + 2.2, 0.3);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, t0, 0.5) * (1 - ramp(t, cart - 0.3, 0.4))}><Glow color={DIM} size={40}>a long habit of thought</Glow></At>
      <At x={500} y={470} s={1.3 * pop(t, fps, inner)}><Head color={ROSE} /></At>
      <At x={480} y={430} o={ramp(t, room, 0.6)}>
        <div style={{ position: "relative", width: 190, height: 140, border: `3px solid ${GOLD}`, borderRadius: 6, background: "#1a1020cc", boxShadow: `0 0 20px ${GOLD}66` }}>
          <div style={{ position: "absolute", left: 30, top: 14, width: 130, height: 70, background: `linear-gradient(135deg, ${ICE}88, ${VIOLET}88)`, boxShadow: `0 0 16px ${ICE}` }} />
          <div style={{ position: "absolute", left: 82, top: 96, width: 26, height: 26, borderRadius: "50%", background: GOLD }} />
          <div style={{ position: "absolute", left: 74, top: 118, width: 42, height: 16, borderRadius: "8px 8px 0 0", background: GOLD }} />
        </div>
      </At>
      <At x={500} y={760} o={ramp(t, inner + 0.3, 0.5)}><Glow color={ROSE} size={36}>inner mind</Glow></At>
      <At x={500} y={240} o={ramp(t, room + 0.4, 0.5) * (1 - shatter)}><Chip color={GOLD} size={28}>a private room</Chip></At>
      {/* outer world: cold container */}
      <At x={1400} y={470} s={pop(t, fps, outer)}>
        <div style={{ position: "relative", width: 560, height: 420, border: `4px solid ${ICE}`, borderRadius: 10, background: "#0b1a2a88",
          boxShadow: `0 0 30px ${ICE}55, inset 0 0 40px ${ICE}22` }}>
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} style={{ position: "absolute", left: 40 + rand(i) * 440, top: 50 + rand(i + 3) * 290, width: 50 + rand(i + 1) * 40, height: 50 + rand(i + 1) * 40,
              borderRadius: i % 2 ? "50%" : 8, border: `3px solid ${ICE}`, background: `${ICE}22`, opacity: ramp(t, cont + i * 0.12, 0.4),
              transform: `rotate(${Math.sin(t * 0.5 + i) * 8}deg)` }} />
          ))}
        </div>
      </At>
      <At x={1400} y={760} o={ramp(t, outer + 0.3, 0.5)}><Glow color={ICE} size={36}>outer world</Glow></At>
      <At x={1400} y={210} o={ramp(t, looks, 0.5) * (1 - ramp(t, cart - 0.3, 0.4))}>
        <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }}>
          <path d="M10 40 Q70 -10 130 40 Q70 90 10 40 Z" fill="none" stroke={CHALK} strokeWidth={4} />
          <circle cx={70} cy={40} r={16 * (1 - eyeShut)} fill={CHALK} />
          <line x1={10} y1={40} x2={130} y2={40} stroke={CHALK} strokeWidth={4} opacity={eyeShut} />
        </svg>
      </At>
      {/* the wall */}
      <At x={940} y={470} o={wall * (1 - shatter)}>
        <div style={{ width: 40, height: 640, borderRadius: 6, background: `repeating-linear-gradient(180deg, ${WARM}cc 0 40px, #7a3a28cc 40px 44px)`,
          boxShadow: `0 0 30px ${WARM}88` }} />
      </At>
      {Array.from({ length: 30 }).map((_, i) => {
        const y = 160 + (i / 30) * 620, dx = (rand(i) - 0.5) * 300 * shatter, dy = rand(i + 4) * 120 * shatter;
        return shatter > 0 && shatter < 1 ? <div key={i} style={{ position: "absolute", left: 930 + dx, top: y + dy, width: 18, height: 14, borderRadius: 3,
          background: WARM, opacity: 1 - shatter, transform: `rotate(${shatter * rand(i + 2) * 200}deg)` }} /> : null;
      })}
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center", opacity: 1 - ramp(t, seek - 0.3, 0.4) }}>
        <Reveal text="the Cartesian split" at={cart} size={80} />
      </div>
      <At x={940} y={160 + 600 * scan} o={ramp(t, seek, 0.4) * (1 - ramp(t, none + 1.0, 0.5))}>
        <svg width={130} height={130} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <circle cx={60} cy={60} r={42} fill={`${GOLD}18`} stroke={GOLD} strokeWidth={6} />
          <line x1={92} y1={92} x2={138} y2={138} stroke={GOLD} strokeWidth={10} strokeLinecap="round" />
        </svg>
      </At>
      <At x={960} y={110} o={ramp(t, none, 0.5)}><Glow color={WARM} size={58} serif>no wall found</Glow></At>
    </AbsoluteFill>
  );
};

const DesigScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const terr = c("not two territories"), des = c("They are designations"), con = c("drawn by contrast");
  const draw = ramp(t, des + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={430} s={pop(t, fps, terr)} o={1 - ramp(t, des - 0.2, 0.6) * 0.85}>
        <svg width={1100} height={520} viewBox="0 0 1100 520" style={{ overflow: "visible" }}>
          <path d="M20 40 L540 20 L560 260 L520 500 L30 480 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} />
          <path d="M560 20 L1080 50 L1070 490 L540 500 L580 260 Z" fill={`${ICE}33`} stroke={ICE} strokeWidth={4} />
          <text x={270} y={270} fill={ROSE} fontSize={48} textAnchor="middle" fontFamily="Cormorant">inner land</text>
          <text x={820} y={270} fill={ICE} fontSize={48} textAnchor="middle" fontFamily="Cormorant">outer land</text>
        </svg>
      </At>
      <At x={960} y={120} o={ramp(t, terr, 0.5) * (1 - ramp(t, des - 0.2, 0.4))}><Crossed at={terr + 1.0}><Glow color={CHALK} size={48} serif>two territories</Glow></Crossed></At>
      <Svg>
        <DrawPath d="M960 180 C 900 300, 1020 420, 960 540 C 900 660, 1000 740, 960 800" p={draw} color={GOLD} width={6} len={720} />
      </Svg>
      <At x={960 + 30 * Math.sin(draw * 6)} y={180 + 620 * draw} o={ramp(t, des + 0.3, 0.3) * (1 - ramp(t, des + 2.2, 0.4))}>
        <svg width={60} height={60} viewBox="0 0 60 60" style={{ filter: `drop-shadow(0 0 10px ${GOLD})`, transform: "translate(20px,-20px)" }}>
          <path d="M8 52 L14 36 L44 6 L54 16 L24 46 Z" fill={`${GOLD}88`} stroke={GOLD} strokeWidth={3} />
        </svg>
      </At>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="designations" at={des} size={96} />
      </div>
      <At x={600} y={800} s={pop(t, fps, con)}><Chip color={ROSE}>by contrast</Chip></At>
      <At x={1320} y={800} s={pop(t, fps, con + 0.8)}><Chip color={ICE}>for use</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 5. the house
const HouseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Consider a house"), clear = c("perfectly clear"), storm = c("dry in a storm");
  const nowall = c("Yet no wall separates"), mats = c("wood, stone, doors and shelter"), living = c("for the purpose of living");
  const door = c("the open doorway"), both = c("both sides at once");
  const think = c("Calling thoughts inner"), trees = c("and trees outer"), same = c("the same kind of line"), rel = c("entirely reliable");
  const part2 = ramp(t, think - 0.3, 0.6);
  const dashed = ramp(t, nowall, 0.6) > 0.5;
  const rain = ramp(t, storm, 0.6);
  const hx = 960, hy = 470;
  const wallCol = dashed ? GOLD : CHALK;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        {Array.from({ length: 70 }).map((_, i) => {
          const x = 200 + rand(i) * 1520;
          const inside = x > hx - 330 && x < hx + 330;
          const yTop = inside ? 120 : 120;
          const yEnd = inside ? 230 : 820;
          const y = yTop + (((t * 600 + rand(i + 3) * 900) % 900));
          if (y > yEnd || t < storm) return null;
          return <div key={i} style={{ position: "absolute", left: x, top: y, width: 3, height: 26, background: ICE, opacity: 0.6 * rain * (1 - part2), borderRadius: 2 }} />;
        })}
        <Svg style={{ transform: `scale(${pop(t, fps, t0, 14)})`, transformOrigin: `${hx}px ${hy}px` }}>
          <path d={`M${hx - 360} ${hy - 120} L${hx} ${hy - 330} L${hx + 360} ${hy - 120} Z`} fill={`${WARM}33`} stroke={WARM} strokeWidth={5} strokeLinejoin="round" />
          <path d={`M${hx - 300} ${hy - 120} L${hx - 300} ${hy + 300} L${hx - 40} ${hy + 300} M${hx + 80} ${hy + 300} L${hx + 300} ${hy + 300} L${hx + 300} ${hy - 120}`}
            fill="none" stroke={wallCol} strokeWidth={6} strokeDasharray={dashed ? "18 14" : undefined} style={{ filter: `drop-shadow(0 0 8px ${wallCol})` }} />
          <rect x={hx - 300} y={hy - 120} width={600} height={420} fill={`${GOLD}${living < t ? "18" : "08"}`} />
          <rect x={hx - 40} y={hy + 80} width={120} height={220} fill={between(t, door, both + 3, 0.5) > 0 ? `url(#doorg)` : "none"} stroke={CHALK} strokeWidth={3} strokeDasharray="8 8" />
          <defs><linearGradient id="doorg" x1="0" x2="1"><stop offset="0" stopColor={GOLD} stopOpacity={0.6} /><stop offset="1" stopColor={ICE} stopOpacity={0.6} /></linearGradient></defs>
        </Svg>
        <At x={hx} y={hy + 40} o={ramp(t, living, 0.6)}><div style={{ width: 360, height: 300, borderRadius: "50%", background: `radial-gradient(closest-side, ${GOLD}66, transparent)` }} /></At>
        <At x={hx - 160} y={hy + 180} s={pop(t, fps, living + 0.2)}><Person color={GOLD} size={170} /></At>
        <At x={hx + 200} y={hy - 30} o={ramp(t, clear, 0.5)}><Chip color={GOLD} size={30}>inside: dry</Chip></At>
        <At x={hx + 560} y={hy - 30} o={ramp(t, clear + 0.6, 0.5)}><Chip color={ICE} size={30}>outside: wet</Chip></At>
        <At x={hx} y={100} o={ramp(t, nowall, 0.5) * (1 - ramp(t, mats - 0.2, 0.4))}><Glow color={GOLD} size={44} serif>no wall by itself</Glow></At>
        {["wood", "stone", "doors", "shelter"].map((m, i) => (
          <At key={i} x={420 + i * 360} y={90} s={pop(t, fps, mats + i * 0.35)}><Chip color={[WARM, DIM, CHALK, GOLD][i]} size={30}>{m}</Chip></At>
        ))}
        <At x={hx + 20} y={hy + 345} o={ramp(t, both, 0.5)}><Glow color={CHALK} size={34}>both sides at once</Glow></At>
      </AbsoluteFill>
      <Scene from={think - 0.3} to={1e9}>
        <At x={560} y={360} s={pop(t, fps, think)}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <svg width={120} height={90} viewBox="0 0 150 110" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
              <path d="M35 80 C10 80 10 45 38 48 C40 20 85 12 95 38 C120 28 140 55 120 80 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={4} />
            </svg>
            <Chip color={ROSE} size={36}>thoughts · inner</Chip>
          </div>
        </At>
        <At x={1380} y={360} s={pop(t, fps, trees)}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <TreeSil s={0.55} color={GREEN} />
            <Chip color={GREEN} size={36}>trees · outer</Chip>
          </div>
        </At>
        <Svg>
          <DrawPath d="M960 200 L960 640" p={ramp(t, same, 1.0)} color={GOLD} width={5} len={440} />
        </Svg>
        <At x={960} y={720} o={ramp(t, same + 0.3, 0.5)}><Glow color={GOLD} size={40}>the same kind of line</Glow></At>
        <At x={960} y={800} o={ramp(t, rel, 0.5)}><Glow color={TEAL} size={38}>drawn for use, and reliable</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6. your name across a crowded room
const PartyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Now picture a crowded party"), wash = c("a wash of voices"), name = c("someone says your name"), hear = c("You hear it at once");
  const where = c("Where did that sound happen"), over = c("from over there"), you = c("singled out by you"), years = c("years of being called");
  const out = c("out in the room"), yours = c("and it was yours"), four = c("Speaker, sound, hearer and name");
  const crowd = Array.from({ length: 14 }, (_, i) => [380 + (i % 7) * 190 + rand(i) * 60, 330 + Math.floor(i / 7) * 220 + rand(i + 3) * 50]);
  const me = [260, 690], sp = [1600, 300];
  const net = ramp(t, four - 0.3, 0.6);
  const nodes = [[sp[0], sp[1], "speaker", GOLD], [930, 495, "sound", ICE], [me[0], me[1], "hearer", TEAL], [960, 790, "name", ROSE]] as const;
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - 0.75 * net }}>
        {crowd.map(([x, y], i) => (
          <React.Fragment key={i}>
            <At x={x} y={y} s={pop(t, fps, t0 + i * 0.06)} o={1 - 0.5 * ramp(t, name, 0.6)}><Person color={DIM} size={120} /></At>
            <At x={x + 30} y={y - 90} o={ramp(t, wash, 0.6) * (0.4 + 0.3 * Math.sin(t * 4 + i)) * (1 - 0.7 * ramp(t, name, 0.6))}>
              <svg width={70} height={30} viewBox="0 0 70 30"><path d={`M2 15 Q 12 ${5 + 8 * Math.sin(t * 6 + i)} 22 15 T 42 15 T 62 15`} fill="none" stroke={CHALK} strokeWidth={3} /></svg>
            </At>
          </React.Fragment>
        ))}
        <At x={sp[0]} y={sp[1]} s={pop(t, fps, t0 + 0.4)}><Person color={GOLD} size={140} /></At>
        <At x={sp[0] - 60} y={sp[1] - 130} s={pop(t, fps, name)}><Chip color={GOLD} size={32}>“your name”</Chip></At>
        {[0, 1, 2, 3, 4].map((k) => {
          const u = ((t - name) * 0.7 + k * 0.2) % 1;
          return t > name ? <At key={k} x={sp[0] + (me[0] - sp[0]) * u} y={sp[1] + (me[1] - sp[1]) * u} o={Math.sin(u * Math.PI) * (1 - net)}>
            <div style={{ width: 70, height: 70, borderRadius: "50%", border: `4px solid ${GOLD}`, borderLeftColor: "transparent", borderBottomColor: "transparent",
              transform: "rotate(-60deg)", boxShadow: `0 0 12px ${GOLD}` }} /></At> : null;
        })}
        <At x={me[0]} y={me[1]} s={pop(t, fps, t0 + 0.2)}><Person color={TEAL} size={150} /></At>
        <At x={me[0]} y={me[1] + 105} o={ramp(t, t0 + 0.4, 0.5)}><Glow color={TEAL} size={30}>you</Glow></At>
        <Ring x={me[0]} y={me[1]} p={ramp(t, hear, 1.0)} r0={60} r1={200} color={TEAL} />
        <At x={960} y={110} s={pop(t, fps, where)} o={1 - ramp(t, four - 0.3, 0.4)}><Glow color={CHALK} size={50} serif>where did it happen?</Glow></At>
        <At x={sp[0]} y={sp[1] + 130} o={ramp(t, over, 0.5)}><Chip color={GOLD} size={28}>over there</Chip></At>
        <Ring x={me[0]} y={me[1]} p={ramp(t, you, 1.2)} r0={80} r1={160} color={GOLD} width={5} />
        {Array.from({ length: 8 }).map((_, k) => (
          <At key={k} x={me[0] + 130 * Math.cos(k * 0.8 - 1.2)} y={me[1] - 40 + 130 * Math.sin(k * 0.8 - 1.2)} o={ramp(t, years + k * 0.12, 0.3) * (1 - net)}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", background: ROSE, boxShadow: `0 0 10px ${ROSE}` }} />
          </At>
        ))}
        <At x={1300} y={540} o={ramp(t, out, 0.5)}><Chip color={ICE}>out in the room</Chip></At>
        <At x={560} y={560} o={ramp(t, yours, 0.5)}><Chip color={TEAL}>and yours</Chip></At>
      </AbsoluteFill>
      {nodes.map(([x, y, lab, col], i) => (
        <React.Fragment key={i}>
          <Flow x1={x} y1={y} x2={nodes[(i + 1) % 4][0]} y2={nodes[(i + 1) % 4][1]} color={GOLD} p={ramp(t, four + 0.8 + i * 0.2, 0.6)} dash width={2} pulses={false} />
          <At x={x} y={y} s={pop(t, fps, four + i * 0.35)}><Chip color={col} size={36}>{lab}</Chip></At>
        </React.Fragment>
      ))}
      <At x={960} y={110} o={ramp(t, four + 1.4, 0.6)}><Glow color={GOLD} size={46} serif>identified together</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 7. the rubber hand
const RubberScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Even the skin can move"), rub = c("a rubber hand being stroked"), hid = c("their own hidden hand");
  const feel = c("Many feel the touch"), line = c("The line of the body"), dodge = c("dodge a branch");
  const exp = c("drawn in experience"), redraw = c("redrawn as things change");
  const stroke = Math.sin((t - rub) * 3.2) * 50;
  const grow = ramp(t, feel + 0.4, 1.6);
  const part2 = ramp(t, line - 0.2, 0.6);
  const duck = between(t, dodge + 0.4, dodge + 1.6, 0.3);
  const bx = 960, by = 470;
  const blob = (k: number, wob: number) => {
    const pts = Array.from({ length: 48 }, (_, i) => {
      const a = (i / 48) * Math.PI * 2;
      const r = 1 + wob * 0.06 * Math.sin(a * 3 + t * 1.5) + wob * 0.04 * Math.sin(a * 5 - t);
      return `${i ? "L" : "M"}${(Math.cos(a) * k * r).toFixed(1)} ${(Math.sin(a) * 0.62 * k * r).toFixed(1)}`;
    });
    return pts.join(" ") + " Z";
  };
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <Svg>
          <line x1={360} y1={640} x2={1560} y2={640} stroke={DIM} strokeWidth={4} opacity={ramp(t, rub - 0.3, 0.5)} />
          <g transform={`translate(${1250 - 230 * grow} 470)`}>
            <path d={blob(300 + 260 * grow, 1)} fill={`${ROSE}10`} stroke={ROSE} strokeWidth={4} strokeDasharray="16 12"
              opacity={ramp(t, t0, 0.6)} style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }} />
          </g>
        </Svg>
        <At x={1250} y={250} o={ramp(t, t0 + 0.4, 0.5) * (1 - ramp(t, rub - 0.3, 0.4))}><Glow color={ROSE} size={40}>the skin: a line?</Glow></At>
        <At x={660} y={560} s={pop(t, fps, rub)}><div style={{ filter: "hue-rotate(-20deg) saturate(0.7)" }}><Hand size={170} /></div></At>
        <At x={660} y={680} o={ramp(t, rub + 0.3, 0.5)}><Glow color={GOLD} size={30}>rubber hand</Glow></At>
        <At x={1250} y={560} s={pop(t, fps, hid)}><Hand size={170} /></At>
        <At x={1250} y={680} o={ramp(t, hid + 0.3, 0.5)}><Glow color={ROSE} size={30}>own hand, hidden</Glow></At>
        <At x={960} y={510} o={ramp(t, hid, 0.5)}><div style={{ width: 26, height: 300, borderRadius: 6, background: "#2a2440", border: `2px solid ${DIM}` }} /></At>
        {[660, 1250].map((x, i) => (
          <At key={i} x={x + stroke} y={440} o={ramp(t, rub + 0.6 + i * (hid - rub), 0.4)} r={-30}>
            <svg width={50} height={110} viewBox="0 0 50 110" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
              <rect x={20} y={0} width={10} height={70} rx={4} fill={GOLD} /><path d="M10 70 L40 70 L45 108 L5 108 Z" fill={`${CHALK}cc`} />
            </svg>
          </At>
        ))}
        <At x={1250} y={220} s={pop(t, fps, t0 + 0.2)}>
          <svg width={140} height={80} viewBox="0 0 140 80" style={{ filter: `drop-shadow(0 0 8px ${CHALK})` }}>
            <path d="M10 40 Q70 -10 130 40 Q70 90 10 40 Z" fill="none" stroke={CHALK} strokeWidth={4} /><circle cx={70 - 14 * ramp(t, rub, 0.6)} cy={44} r={16} fill={CHALK} />
          </svg>
        </At>
        <Flow x1={1210} y1={250} x2={700} y2={470} color={CHALK} p={ramp(t, rub + 0.4, 0.8)} dash pulses={false} width={2} />
        {Array.from({ length: 10 }).map((_, i) => {
          const a = rand(i) * Math.PI * 2, r = 40 + rand(i + 1) * 70 * ((t * 0.8 + rand(i + 2)) % 1);
          return <div key={i} style={{ position: "absolute", left: 660 + Math.cos(a) * r, top: 540 + Math.sin(a) * r * 0.7, width: 9, height: 9, borderRadius: "50%",
            background: GOLD, boxShadow: `0 0 10px ${GOLD}`, opacity: ramp(t, feel, 0.6) * (0.4 + 0.6 * rand(i + 5)) }} />;
        })}
        <At x={660} y={180} o={ramp(t, feel + 0.4, 0.5)}><Glow color={GOLD} size={40} serif>felt as mine</Glow></At>
      </AbsoluteFill>
      <Scene from={line - 0.2} to={1e9}>
        <At x={760} y={480 + duck * 50} s={pop(t, fps, line)} r={duck * -12}><Person color={TEAL} size={300} /></At>
        <Svg>
          <g transform={`translate(760 ${480 + duck * 30})`}>
            <path d={blob(170 + 40 * ramp(t, redraw, 1.0), 1 + 3 * ramp(t, redraw, 0.6))} fill="none" stroke={TEAL} strokeWidth={4} strokeDasharray="14 10"
              transform="scale(0.75 1.9)" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }} />
          </g>
          <g transform={`translate(${1500 - 520 * ramp(t, dodge, 1.2)} 310) rotate(${-10 + 6 * Math.sin(t * 2)})`} opacity={ramp(t, dodge - 0.2, 0.4) * (1 - ramp(t, exp, 0.6))}>
            <path d="M0 0 L420 -20 M140 -6 L190 -60 M260 -12 L320 40 M60 -2 L90 40" stroke={GREEN} strokeWidth={10} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${GREEN})` }} />
          </g>
        </Svg>
        <At x={1300} y={200} o={ramp(t, line + 0.3, 0.5)}><Glow color={TEAL} size={42} serif>the line of the body is real</Glow></At>
        <At x={1350} y={560} o={ramp(t, exp, 0.5)}><Chip color={GOLD}>drawn in experience</Chip></At>
        <At x={1350} y={680} o={ramp(t, redraw, 0.5)}><Chip color={ROSE}>redrawn</Chip></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. is experience private?
const Tooth: React.FC<{ ache: number }> = ({ ache }) => {
  const { t } = useT();
  return (
    <svg width={140} height={150} viewBox="-70 -75 140 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${WARM})` }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1={0} y1={-56 - 6 * Math.sin(t * 8 + i)} x2={0} y2={-72 - 10 * Math.sin(t * 8 + i)} transform={`rotate(${i * 45})`} stroke={WARM} strokeWidth={4} opacity={ache} strokeLinecap="round" />
      ))}
      <path d="M-34 -36 C-34 -56 -12 -52 0 -44 C12 -52 34 -56 34 -36 C34 -10 26 10 22 40 C20 52 10 52 8 40 L4 16 L-4 16 L-8 40 C-10 52 -20 52 -22 40 C-26 10 -34 -10 -34 -36 Z"
        fill="#ffffff22" stroke={CHALK} strokeWidth={4} />
    </svg>
  );
};

const PrivScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("experience is private"), noone = c("No one else can feel"), acc = c("a difference of access"), room = c("not a hidden room");
  const tooth = c("this tooth"), nerves = c("these nerves"), att = c("this attention");
  const two = c("Two people at different windows"), box = c("locked inside a box");
  const part2 = ramp(t, two - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={560} y={470} s={1.1 * pop(t, fps, t0)}><Head color={TEAL} /></At>
        <At x={600} y={480} s={pop(t, fps, t0 + 0.3)}><Tooth ache={ramp(t, t0 + 0.5, 0.5)} /></At>
        <At x={1380} y={470} s={1.1 * pop(t, fps, noone)}><Head color={VIOLET} flip /></At>
        <At x={1380} y={200} o={ramp(t, noone + 0.4, 0.5)}><Glow color={VIOLET} size={80} serif>?</Glow></At>
        <Flow x1={760} y1={420} x2={1200} y2={420} color={TEAL} p={ramp(t, acc, 0.7)} />
        <Flow x1={1200} y1={520} x2={760} y2={520} color={VIOLET} p={ramp(t, acc + 0.3, 0.7)} dash />
        <At x={980} y={470} o={ramp(t, acc + 0.2, 0.5)}><Glow color={CHALK} size={34}>different access</Glow></At>
        <At x={980} y={120} o={ramp(t, room, 0.5)}><Crossed at={room + 0.8}><Glow color={WARM} size={50} serif>a hidden room</Glow></Crossed></At>
        {[[tooth, "this tooth", WARM], [nerves, "these nerves", ROSE], [att, "this attention", GOLD]].map(([at, lab, col], i) => (
          <At key={i} x={360 + i * 200} y={760 + (i % 2) * 0} s={pop(t, fps, at as number)}><Chip color={col as string} size={28}>{lab as string}</Chip></At>
        ))}
      </AbsoluteFill>
      <Scene from={two - 0.3} to={1e9}>
        <Svg>
          <rect x={560} y={230} width={800} height={260} rx={10} fill="#0b1426aa" stroke={ICE} strokeWidth={3} />
          {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={600 + i * 150} y={330 - (i % 2) * 40} width={90} height={160 + (i % 2) * 40} fill={`${ICE}22`} stroke={ICE} strokeWidth={2} />)}
          <path d={`M300 760 L700 490 M300 760 L860 490`} stroke={TEAL} strokeWidth={3} strokeDasharray="10 8" opacity={ramp(t, two + 0.8, 0.6)} />
          <path d={`M1620 760 L1060 490 M1620 760 L1260 490`} stroke={VIOLET} strokeWidth={3} strokeDasharray="10 8" opacity={ramp(t, two + 1.0, 0.6)} />
          <polygon points="300,760 700,490 860,490" fill={TEAL} opacity={0.12 * ramp(t, two + 0.8, 0.6)} />
          <polygon points="1620,760 1060,490 1260,490" fill={VIOLET} opacity={0.12 * ramp(t, two + 1.0, 0.6)} />
        </Svg>
        <At x={960} y={190} o={ramp(t, two, 0.5)}><Glow color={ICE} size={34}>one street</Glow></At>
        {[[300, TEAL], [1620, VIOLET]].map(([x, col], i) => (
          <At key={i} x={x as number} y={720} s={pop(t, fps, two + 0.2 + i * 0.3)}>
            <div style={{ width: 170, height: 140, border: `8px solid #3a2f28`, borderRadius: 6, background: `${col}22`, boxShadow: `0 0 24px ${col}` }} />
          </At>
        ))}
        <At x={960} y={680} o={ramp(t, box, 0.5)} s={0.9}>
          <Crossed at={box + 0.7}><Glow color={WARM} size={44} serif>locked in a box</Glow></Crossed>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. not mind-only: the dream
const Mountain: React.FC<{ dash?: boolean }> = ({ dash }) => (
  <svg width={260} height={160} viewBox="0 0 260 160" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <path d="M10 150 L100 30 L140 80 L170 50 L250 150 Z" fill={dash ? "none" : `${ICE}33`} stroke={ICE} strokeWidth={4} strokeDasharray={dash ? "12 10" : undefined} strokeLinejoin="round" />
    <path d="M100 30 L80 58 L100 52 L118 60 Z" fill={dash ? "none" : CHALK} />
  </svg>
);

const DreamScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nor does everything now fall"), last = c("the last substance"), dream = c("In a dream"), dm = c("the dreaming mind"), wake = c("both are equally unfound");
  const suck = ramp(t, t0 + 0.6, 1.6) * (1 - ramp(t, t0 + 2.6, 0.8));
  const part2 = ramp(t, dream - 0.3, 0.6);
  const fade = ramp(t, wake, 1.6);
  const objs = [[1300, 260, GREEN], [1500, 480, ICE], [1320, 700, GOLD], [1650, 300, ROSE]];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={620} y={430} s={1.2 * pop(t, fps, t0)}><Head color={VIOLET} /></At>
        {objs.map(([x, y, col], i) => (
          <At key={i} x={(x as number) + (600 - (x as number)) * suck} y={(y as number) + (420 - (y as number)) * suck} s={1 - 0.6 * suck} o={pop(t, fps, t0 + i * 0.1)}>
            <Orb size={70} color={col as string} />
          </At>
        ))}
        <At x={960} y={110} o={ramp(t, t0 + 0.3, 0.5) * (1 - ramp(t, last - 0.3, 0.4))}><Crossed at={t0 + 2.4}><Glow color={CHALK} size={44} serif>everything inside?</Glow></Crossed></At>
        <At x={620} y={720} o={ramp(t, last, 0.5)}><div style={{ width: 520, height: 34, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}55, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} /></At>
        <At x={620} y={800} o={ramp(t, last + 0.3, 0.5)}><Crossed at={last + 1.2}><Glow color={WARM} size={40}>mind as the last substance</Glow></Crossed></At>
      </AbsoluteFill>
      <Scene from={dream - 0.3} to={1e9}>
        <At x={960} y={420} s={pop(t, fps, dream)}>
          <div style={{ position: "relative", width: 900, height: 520 }}>
            <svg width={900} height={520} viewBox="0 0 900 520" style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
              <path d="M150 400 C40 400 40 260 160 270 C150 130 330 90 400 180 C470 60 680 80 690 220 C820 200 860 380 740 400 Z"
                fill={`${VIOLET}22`} stroke={VIOLET} strokeWidth={4} strokeDasharray={fade > 0.5 ? "14 10" : undefined} opacity={1 - 0.5 * fade}
                style={{ filter: `drop-shadow(0 0 14px ${VIOLET})` }} />
              {[0, 1, 2].map((k) => <circle key={k} cx={130 - k * 40} cy={450 + k * 26} r={16 - k * 4} fill="none" stroke={VIOLET} strokeWidth={3} opacity={1 - fade} />)}
            </svg>
            <div style={{ position: "absolute", left: 300, top: 160, opacity: 1 - 0.6 * fade }}><Mountain dash={fade > 0.5} /></div>
          </div>
        </At>
        <At x={760} y={560} o={ramp(t, dream + 0.6, 0.5) * (1 - fade * 0.6)}><Glow color={ICE} size={32}>dreamed mountain</Glow></At>
        <At x={300} y={720} s={pop(t, fps, dm)} o={1 - 0.6 * fade}>
          <svg width={220} height={110} viewBox="0 0 220 110" style={{ filter: `drop-shadow(0 0 10px ${VIOLET})` }}>
            <path d="M10 90 Q110 60 210 90" fill="none" stroke={CHALK} strokeWidth={4} strokeDasharray={fade > 0.5 ? "12 10" : undefined} />
            <circle cx={60} cy={60} r={26} fill={`${VIOLET}33`} stroke={VIOLET} strokeWidth={4} strokeDasharray={fade > 0.5 ? "10 8" : undefined} />
            <path d="M48 58 Q54 62 60 58 M64 58 Q70 62 76 58" stroke={VIOLET} strokeWidth={3} fill="none" />
          </svg>
          <Glow color={VIOLET} size={30}>dreaming mind</Glow>
        </At>
        <Flow x1={420} y1={700} x2={700} y2={500} color={GOLD} p={ramp(t, dm + 0.6, 0.6)} dash pulses={false} />
        <At x={960} y={90} o={ramp(t, dm + 0.6, 0.5) * (1 - ramp(t, wake - 0.3, 0.4))}><Glow color={GOLD} size={44} serif>appear together</Glow></At>
        <At x={960} y={90} o={ramp(t, wake + 0.4, 0.6)}><Glow color={CHALK} size={44} serif>on waking, both unfound</Glow></At>
        <Sun2 at={wake} />
      </Scene>
    </AbsoluteFill>
  );
};
const Sun2: React.FC<{ at: number }> = ({ at }) => {
  const { t } = useT();
  const p = ramp(t, at, 2.0);
  return <At x={1560} y={760 - 300 * p} o={p}><div style={{ width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, #FFF4C8, #F2A94B 60%, transparent 72%)",
    boxShadow: `0 0 80px ${GOLD}` }} /></At>;
};

// ---------------------------------------------------------------- 10. mind and world together; ordinary world
const OneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Mind and world are designated"), each = c("each identified only through"), noIn = c("no inside and no outside");
  const ord = c("an ordinary world"), use = c("still useful");
  const ring = ramp(t, noIn, 0.6), gone = ramp(t, noIn + 1.0, 1.4);
  const part2 = ramp(t, ord - 0.3, 0.6);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={700} y={430} s={pop(t, fps, t0)}><Orb size={150} color={ROSE} /></At>
        <At x={1220} y={430} s={pop(t, fps, t0 + 0.3)}><Orb size={150} color={ICE} /></At>
        <At x={700} y={570} o={ramp(t, t0 + 0.3, 0.5)}><Glow color={ROSE} size={40}>mind</Glow></At>
        <At x={1220} y={570} o={ramp(t, t0 + 0.6, 0.5)}><Glow color={ICE} size={40}>world</Glow></At>
        <Svg>
          <DrawPath d="M790 380 C 900 300, 1020 300, 1130 380" p={ramp(t, each, 0.8)} color={GOLD} width={5} len={400} />
          <DrawPath d="M1130 480 C 1020 560, 900 560, 790 480" p={ramp(t, each + 0.5, 0.8)} color={GOLD} width={5} len={400} />
        </Svg>
        <At x={960} y={180} o={ramp(t, t0 + 0.6, 0.5)}><Glow color={GOLD} size={46} serif>designated together</Glow></At>
        <At x={700} y={430} o={ring * (1 - gone)} s={1 + gone * 0.4} blur={gone * 10}>
          <div style={{ width: 300, height: 300, borderRadius: "50%", border: `5px solid ${WARM}`, boxShadow: `0 0 20px ${WARM}` }} />
        </At>
        <At x={960} y={720} o={ramp(t, noIn + 0.4, 0.5)}><Glow color={CHALK} size={38}>no inside, no outside, from their own side</Glow></At>
      </AbsoluteFill>
      <Scene from={ord - 0.3} to={1e9}>
        <Svg><line x1={260} y1={640} x2={1660} y2={640} stroke={GREEN} strokeWidth={4} opacity={0.7} /></Svg>
        <At x={560} y={500} s={pop(t, fps, ord)}><TreeSil s={1.3} color={GREEN} /></At>
        <At x={960} y={510} s={pop(t, fps, ord + 0.3)}>
          <svg width={300} height={260} viewBox="0 0 300 260" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
            <path d="M20 110 L150 20 L280 110 Z" fill={`${WARM}33`} stroke={WARM} strokeWidth={4} strokeLinejoin="round" />
            <rect x={45} y={110} width={210} height={145} fill={`${GOLD}18`} stroke={CHALK} strokeWidth={4} />
            <rect x={130} y={170} width={50} height={85} fill={`${GOLD}55`} stroke={CHALK} strokeWidth={3} />
          </svg>
        </At>
        <At x={1340} y={540} s={pop(t, fps, ord + 0.6)}><Person color={TEAL} size={190} /></At>
        <At x={1500} y={220} s={pop(t, fps, ord + 0.8)}><div style={{ width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, #FFF4C8, #F2A94B)", boxShadow: `0 0 60px ${GOLD}` }} /></At>
        <Svg>
          <DrawPath d="M780 640 L1140 640" p={ramp(t, use - 0.3, 0.8)} color={GOLD} width={6} len={360} />
        </Svg>
        <At x={960} y={720} o={ramp(t, use, 0.5)}><Glow color={GOLD} size={40}>the line still drawn, still useful</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. back at the window
const BackScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Back at the window"), walk = c("No one tries to walk"), seeing = c("drawn in the seeing"), fin = c("between an experience and a world");
  const step = ramp(t, walk, 1.2) * (1 - ramp(t, walk + 1.6, 0.8));
  return (
    <AbsoluteFill>
      <At x={960} y={400} s={pop(t, fps, t0, 15) * 0.92}>
        <WindowView dusk={1} refl={0.8} line={ramp(t, seeing, 1.6)} />
      </At>
      <At x={960} y={400} o={between(t, walk + 1.0, walk + 2.2, 0.3)}>
        <div style={{ width: 920, height: 552, borderRadius: 6, boxShadow: `inset 0 0 60px ${ICE}`, border: `3px solid ${ICE}` }} />
      </At>
      <At x={360 + 160 * step} y={600} s={pop(t, fps, walk)} o={1 - ramp(t, seeing, 0.6)}><Person color={TEAL} size={220} /></At>
      <div style={{ position: "absolute", top: 730, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="drawn in the seeing" at={seeing} size={80} />
      </div>
      <At x={960} y={60} o={ramp(t, fin, 0.8)}><Glow color={DIM} size={34}>not a wall between experience and world</Glow></At>
      <Mist x={960} y={700} start={fin} color={GOLD} spread={600} n={18} seed={2} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["dusk", 0], ["split", c("A long habit of thought", 0.6)], ["house", c("Consider a house", 0.6)], ["party", c("Now picture a crowded party", 0.6)],
    ["skin", c("Even the skin can move", 0.6)], ["priv", c("experience is private", 1.0)], ["dream", c("Nor does everything now fall", 0.6)],
    ["one", c("Mind and world are designated", 0.6)], ["back", c("Back at the window", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("A long habit of thought", 0.9)], <WindowScene />],
    [S("A long habit of thought", "not two territories"), <SplitScene />],
    [S("not two territories", "Consider a house", 1.6), <DesigScene />],
    [S("Consider a house", "Now picture a crowded party"), <HouseScene />],
    [S("Now picture a crowded party", "Even the skin can move"), <PartyScene />],
    [S("Even the skin can move", "experience is private", 0.5, 1.4), <RubberScene />],
    [S("experience is private", "Nor does everything now fall", 1.0), <PrivScene />],
    [S("Nor does everything now fall", "Mind and world are designated"), <DreamScene />],
    [S("Mind and world are designated", "Back at the window"), <OneScene />],
    [S("Back at the window", null), <BackScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
