// Anatta to Emptiness, Chapter 8: The Last Refuge of Ontology. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "When a foundation is taken away", "another place to stand",
  "nothing waits beneath its parts", "Conventions arise together", "does not vanish",
  "a quiet question", "the status of that functioning itself", "truly gone", "only moved",
  "Often, it has moved", "let go of solid things", "processes, relations, dynamic networks", "interconnected becoming", "It sounds like emptiness",
  "the instinct is the same", "real things interacting", "real relations connecting them", "real processes unfolding",
  "Substance becomes relation", "Being becomes becoming", "The language has changed", "The ontological instinct has not", "Ontology means",
  "a habit more than a theory", "Since infancy", "When objects fail", "When relations fail", "When processes fail", "perhaps awareness itself",
  "The target changes", "not attached to any one substance", "finally stand on its own",
  "Experience alone does not catch this", "nothing stands outside the event", "read as a real process", "The experience is free",
  "The view projected onto it",
  "Anatta has dismantled the observer", "Total exertion has dismantled separation", "The chariot has dismantled", "the last question",
  "Does dependent arising itself",
  "His answer is clear", "It does not",
  "brought in to undo", "spared from analysis", "the very foundation", "must turn on itself", "Not because it fails", "no special standing",
  "Take a bell", "where is that sound", "Not in the bell", "The noun cannot be found", "Then the verb", "Birth seems to mark",
  "the start of dying", "Arising and ceasing", "the process itself is released",
  "What remains", "The bell still rings", "Medicine still heals", "Compassion still relieves", "This is not nihilism", "It is freedom",
  "Nor does the negation", "Openness and ease", "how appearing always was", "Emptiness does not produce functioning",
  "Functioning does not prove", "Neither grounds the other",
  "One refuge is the subtlest", "spontaneous presence", "a hidden source", "a final exemption", "spontaneous simply describes",
  "Nothing is left to stand on", "the bell goes on ringing",
];

const AMBER = "#D9A441", INDIGO = "#7C7CF2";

const M = {
  refuge: { a: "rgba(50,45,150,0.55)", b: "rgba(190,135,40,0.42)", c: "rgba(30,80,120,0.3)" },
  migrate: { a: "rgba(110,50,130,0.45)", b: "rgba(40,90,150,0.48)", c: "rgba(180,120,40,0.32)" },
  habit: { a: "rgba(35,40,130,0.6)", b: "rgba(170,110,40,0.38)", c: "rgba(90,50,130,0.3)" },
  gates: { a: "rgba(190,140,50,0.45)", b: "rgba(70,60,170,0.48)", c: "rgba(40,120,140,0.3)" },
  analysis: { a: "rgba(60,50,160,0.55)", b: "rgba(200,150,50,0.38)", c: "rgba(40,90,130,0.3)" },
  free: { a: "rgba(200,150,60,0.48)", b: "rgba(70,70,180,0.42)", c: "rgba(60,150,140,0.36)" },
};

// ---------------------------------------------------------------- drawings
const Pillar: React.FC<{ w?: number; h?: number; label?: string; dash?: boolean; color?: string }> = ({ w = 260, h = 90, label, dash, color = AMBER }) => (
  <div style={{ width: w, height: h, borderRadius: 10, background: dash ? "transparent" : `linear-gradient(180deg, ${color}88, ${color}33)`,
    border: `3px ${dash ? "dashed" : "solid"} ${color}`, boxShadow: dash ? undefined : `0 0 30px ${color}66`,
    display: "flex", alignItems: "center", justifyContent: "center" }}>
    {label && <Glow color={CHALK} size={28}>{label}</Glow>}
  </div>
);
const Stick: React.FC<{ color?: string; reach?: number }> = ({ color = CHALK, reach = 0 }) => (
  <svg width={110} height={190} viewBox="0 0 120 210" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <circle cx={60} cy={30} r={22} fill="none" stroke={color} strokeWidth={6} />
    <path d={`M60 55 L60 130 M60 75 L${30 - 30 * reach} ${110 - 40 * reach} M60 75 L90 110 M60 130 L38 200 M60 130 L82 200`}
      stroke={color} strokeWidth={6} strokeLinecap="round" fill="none" />
  </svg>
);
const Wheel: React.FC<{ size: number; color?: string; dash?: boolean; speed?: number }> = ({ size, color = GOLD, dash, speed = 40 }) => {
  const { t } = useT();
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
      <circle r={52} fill={`${color}18`} stroke={color} strokeWidth={6} strokeDasharray={dash ? "10 8" : undefined} />
      <g transform={`rotate(${t * speed})`}>{Array.from({ length: 8 }).map((_, i) => <line key={i} x1={0} y1={0} x2={0} y2={-48} stroke={color} strokeWidth={4} transform={`rotate(${i * 45})`} />)}</g>
      <circle r={8} fill={color} />
    </svg>
  );
};
const Bell: React.FC<{ size?: number }> = ({ size = 180 }) => (
  <svg width={size} height={size * 1.05} viewBox="0 0 200 210" style={{ filter: `drop-shadow(0 0 14px ${GOLD})` }}>
    <path d="M100 18 Q50 22 48 100 Q46 140 22 160 L178 160 Q154 140 152 100 Q150 22 100 18 Z" fill={`${AMBER}55`} stroke={GOLD} strokeWidth={6} strokeLinejoin="round" />
    <circle cx={100} cy={176} r={16} fill={GOLD} /><circle cx={100} cy={12} r={9} fill="none" stroke={GOLD} strokeWidth={5} />
  </svg>
);
const Bottle: React.FC = () => (
  <svg width={110} height={160} viewBox="0 0 120 170" style={{ filter: `drop-shadow(0 0 10px ${ROSE})` }}>
    <rect x={38} y={8} width={44} height={24} rx={5} fill={ROSE} />
    <path d="M30 40 L90 40 L96 160 L24 160 Z" fill={`${ROSE}33`} stroke={ROSE} strokeWidth={5} strokeLinejoin="round" />
    <path d="M60 78 L60 122 M38 100 L82 100" stroke={CHALK} strokeWidth={10} strokeLinecap="round" />
  </svg>
);
const Heart: React.FC = () => (
  <svg width={150} height={140} viewBox="0 0 150 140" style={{ filter: `drop-shadow(0 0 12px ${TEAL})` }}>
    <path d="M75 128 C20 90 8 60 14 40 C22 12 58 8 75 36 C92 8 128 12 136 40 C142 60 130 90 75 128 Z" fill={`${TEAL}44`} stroke={TEAL} strokeWidth={5} />
  </svg>
);
const Apple: React.FC<{ size?: number; glow?: number }> = ({ size = 260, glow = 0.5 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 ${10 + 30 * glow}px ${ROSE})` }}>
    <defs><radialGradient id="ap8" cx="0.38" cy="0.35"><stop offset="0" stopColor="#FFC2B0" /><stop offset="0.45" stopColor="#E0504E" /><stop offset="1" stopColor="#7A1F2E" /></radialGradient></defs>
    <path d="M100 52 C70 30 22 40 24 100 C26 150 62 186 86 182 C94 180 98 176 100 176 C102 176 106 180 114 182 C138 186 174 150 176 100 C178 40 130 30 100 52 Z" fill="url(#ap8)" stroke="#FF9C8C" strokeWidth={3} />
    <path d="M100 54 Q98 30 108 14" stroke={AMBER} strokeWidth={6} fill="none" strokeLinecap="round" />
    <path d="M106 30 Q130 8 152 22 Q132 42 106 30 Z" fill={`${GREEN}cc`} stroke={GREEN} strokeWidth={3} />
  </svg>
);
const Gate: React.FC<{ open: number; color: string; w?: number }> = ({ open, color, w = 260 }) => (
  <svg width={w} height={w * 1.2} viewBox="0 0 260 312" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${color})` }}>
    <path d="M20 312 L20 120 Q130 -10 240 120 L240 312" fill="none" stroke={color} strokeWidth={8} />
    <rect x={30 - 80 * open} y={130} width={100} height={182} fill={`${color}33`} stroke={color} strokeWidth={3} opacity={1 - open * 0.6} />
    <rect x={130 + 80 * open} y={130} width={100} height={182} fill={`${color}33`} stroke={color} strokeWidth={3} opacity={1 - open * 0.6} />
    <ellipse cx={130} cy={230} rx={60 * open} ry={90 * open} fill={`${GOLD}44`} />
  </svg>
);
const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 12px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.14)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
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
const StruckChip: React.FC<{ x: number; y: number; at: number; strikeAt: number; color: string; size?: number; children: React.ReactNode }> =
  ({ x, y, at, strikeAt, color, size = 32, children }) => {
    const { t } = useT();
    return (
      <At x={x} y={y} o={ramp(t, at, 0.4)}>
        <div style={{ position: "relative" }}><Chip color={color} size={size}>{children}</Chip><Strike at={strikeAt} /></div>
      </At>
    );
  };
const Centre: React.FC<{ y: number; children: React.ReactNode }> = ({ y, children }) => (
  <div style={{ position: "absolute", top: y, width: "100%", display: "flex", justifyContent: "center" }}>{children}</div>
);

// ---------------------------------------------------------------- scenes
const RefugeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const take = c("When a foundation is taken away"), another = c("another place to stand"), part2 = c("nothing waits beneath its parts");
  const drop = ramp(t, take + 0.9, 0.8);
  const slide = ramp(t, another, 0.9);
  const out = 1 - ramp(t, part2 - 0.3, 0.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: out }}>
        <At x={760} y={380 + 30 * drop} s={pop(t, fps, take - 0.2)}><Stick reach={slide} /></At>
        <At x={760} y={540 + 300 * drop} o={1 - drop} s={pop(t, fps, take)}><Pillar label="a foundation" /></At>
        <Crossed x={760} y={540} at={take + 0.5} size={50} />
        <At x={1500 - 420 * slide} y={560} o={ramp(t, another - 0.1, 0.4)}><Pillar label="another?" color={INDIGO} /></At>
        <At x={960} y={160} o={ramp(t, another + 0.3, 0.5)}><Glow color={CHALK} size={40} serif>the mind looks for another place to stand</Glow></At>
      </AbsoluteFill>
      <At x={700} y={440} s={pop(t, fps, part2)}><Wheel size={300} /></At>
      <At x={1240} y={360} s={pop(t, fps, c("Conventions arise together"))}><Chip color={GOLD} size={36}>convention</Chip></At>
      <At x={1240} y={470} s={pop(t, fps, c("Conventions arise together") + 0.2)}><Chip color={TEAL} size={36}>dependent functioning</Chip></At>
      <At x={1240} y={560} o={ramp(t, c("Conventions arise together") + 0.5, 0.4)}><Glow color={GOLD} size={30}>arising together</Glow></At>
      <At x={960} y={760} o={ramp(t, c("does not vanish"), 0.5)}><Glow color={CHALK} size={40} serif>the ordinary world does not vanish</Glow></At>
    </AbsoluteFill>
  );
};

const QuestionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("the status of that functioning itself"), gone = c("truly gone"), moved = c("only moved");
  const mv = ramp(t, moved + 0.2, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={140} o={ramp(t, c("a quiet question", 0.3), 0.5)}><Glow color={CHALK} size={42} serif>a quiet question</Glow></At>
      <At x={960} y={330} s={pop(t, fps, st)}><Chip color={TEAL} size={44}>dependent functioning</Chip></At>
      <At x={960} y={430} o={ramp(t, st + 0.5, 0.4)}><Glow color={GOLD} size={70} serif>?</Glow></At>
      <At x={560 + 800 * mv} y={640} s={pop(t, fps, gone)} o={1 - 0.3 * mv}><Pillar label="substance" w={240} /></At>
      <At x={560} y={760} o={ramp(t, gone + 0.2, 0.4)}><Glow color={DIM} size={30}>truly gone?</Glow></At>
      <Flow x1={700} y1={640} x2={1220} y2={640} color={WARM} p={ramp(t, moved, 0.8)} dash />
      <At x={1360} y={760} o={ramp(t, moved + 0.4, 0.4)}><Glow color={WARM} size={32}>or only moved?</Glow></At>
    </AbsoluteFill>
  );
};

const MigrateScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const words: [string, string][] = [["processes", TEAL], ["relations", VIOLET], ["dynamic networks", ICE], ["interconnected becoming", GOLD]];
  const w0 = c("processes, relations, dynamic networks"), inst = c("the instinct is the same"), ont = c("The ontological instinct has not");
  const phase2 = ramp(t, inst - 0.3, 0.5);
  const cols: [string, string, number, string][] = [
    ["real things interacting", ROSE, c("real things interacting"), "things"], ["real relations", VIOLET, c("real relations connecting them"), "relations"],
    ["real processes", TEAL, c("real processes unfolding"), "processes"],
  ];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - phase2 }}>
        <At x={960} y={150} o={ramp(t, c("Often, it has moved", 0.3), 0.4)}><Glow color={CHALK} size={40} serif>substance moves house</Glow></At>
        <StruckChip x={960} y={270} at={c("let go of solid things") - 0.2} strikeAt={c("let go of solid things") + 0.6} color={DIM} size={34}>solid things</StruckChip>
        {words.map(([w, col], i) => (
          <At key={i} x={440 + (i % 2) * 1040 - (i > 1 ? 0 : 0)} y={420 + Math.floor(i / 2) * 180 + Math.sin(t + i) * 8}
            s={pop(t, fps, i < 3 ? w0 + i * 0.5 : c("interconnected becoming"))}><Chip color={col} size={36}>{w}</Chip></At>
        ))}
        {Array.from({ length: 9 }).map((_, i) => {
          const a = (i / 9) * Math.PI * 2 + t * 0.4;
          return <At key={i} x={960 + 180 * Math.cos(a)} y={510 + 140 * Math.sin(a)} s={pop(t, fps, w0 + 0.4 + i * 0.05)}><Orb size={30} color={[TEAL, VIOLET, GOLD][i % 3]} /></At>;
        })}
        <At x={960} y={780} o={ramp(t, c("It sounds like emptiness"), 0.4)}><Glow color={ICE} size={38} serif>it sounds like emptiness</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: phase2 }}>
        <At x={960} y={120}><Glow color={WARM} size={40} serif>the same instinct</Glow></At>
        {cols.map(([w, col, at, k], i) => {
          const x = 420 + i * 540;
          return <React.Fragment key={i}>
            <At x={x} y={360} s={pop(t, fps, at)}>
              {k === "things" ? <div style={{ display: "flex", gap: 30 }}>{[0, 1].map((j) => <div key={j} style={{ width: 90, height: 90, borderRadius: 10,
                border: `3px solid ${col}`, background: `${col}33`, transform: `translateX(${Math.sin(t * 2 + j * 3) * 10}px)` }} />)}</div>
                : k === "relations" ? <svg width={260} height={120} viewBox="0 0 260 120"><circle cx={30} cy={60} r={18} fill={col} /><circle cx={230} cy={60} r={18} fill={col} />
                  <path d="M48 60 Q130 10 212 60" stroke={col} strokeWidth={8} fill="none" style={{ filter: `drop-shadow(0 0 10px ${col})` }} /></svg>
                : <svg width={280} height={120} viewBox="0 0 280 120">{[0, 1, 2].map((j) => <path key={j} d={`M${((t * 60 + j * 90) % 270) - 20} ${40 + j * 20} l40 0 l-12 -10 m12 10 l-12 10`}
                  stroke={col} strokeWidth={6} fill="none" strokeLinecap="round" />)}</svg>}
            </At>
            <At x={x} y={470} o={ramp(t, at + 0.2, 0.4)}><Glow color={col} size={32}>{w}</Glow></At>
            <At x={x} y={560} s={pop(t, fps, ont + i * 0.2)}><Pillar w={220} h={60} label="real" /></At>
          </React.Fragment>;
        })}
        <At x={690} y={680} o={ramp(t, c("Substance becomes relation"), 0.4)}><Chip color={VIOLET} size={30}>substance → relation</Chip></At>
        <At x={1230} y={680} o={ramp(t, c("Being becomes becoming"), 0.4)}><Chip color={TEAL} size={30}>being → becoming</Chip></At>
        <At x={960} y={770} o={between(t, c("The language has changed"), c("Ontology means"), 0.4)}><Glow color={CHALK} size={34}>new words · same instinct</Glow></At>
        <At x={960} y={790} o={ramp(t, c("Ontology means"), 0.4)}><Chip color={GOLD} size={30}>ontology: a claim about what truly exists</Chip></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const steps: [string, string, number][] = [
    ["objects", ROSE, c("When objects fail")], ["relations", VIOLET, c("When relations fail")], ["processes", TEAL, c("When processes fail")],
    ["awareness", GOLD, c("perhaps awareness itself")],
  ];
  const own = c("finally stand on its own");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("a habit more than a theory", 0.3), 0.4)}><Glow color={CHALK} size={40} serif>a habit, more than a theory</Glow></At>
      <At x={960} y={190} o={ramp(t, c("Since infancy"), 0.4)}><Glow color={DIM} size={30}>learned since infancy, through solid nouns</Glow></At>
      {steps.map(([w, col, at], i) => {
        const failAt = i < 3 ? steps[i + 1][2] - 0.2 : c("The target changes") + 0.6;
        const fall = i < 3 ? ramp(t, at + 0.9, 0.8) : ramp(t, failAt, 0.8);
        return <React.Fragment key={i}>
          <At x={360 + i * 400} y={420 + 60 * fall} s={pop(t, fps, i === 0 ? Math.min(at - 0.3, c("Since infancy") + 0.8) : steps[i - 1][2] + 0.6)} o={1 - 0.6 * fall}>
            <Pillar w={300} h={100} label={w} color={col} dash={fall > 0.5} /></At>
          <Crossed x={360 + i * 400} y={420} at={i < 3 ? at + 0.5 : failAt} size={45} />
        </React.Fragment>;
      })}
      <At x={960} y={600} o={ramp(t, c("The target changes"), 0.4)}><Glow color={WARM} size={36}>the target changes · the instinct stays</Glow></At>
      <StruckChip x={960} y={700} at={c("not attached to any one substance")} strikeAt={c("not attached to any one substance") + 1.2} color={DIM} size={30}>attached to one substance</StruckChip>
      <At x={960} y={800} s={pop(t, fps, own)}><Chip color={AMBER} size={34}>attached to something that stands on its own</Chip></At>
    </AbsoluteFill>
  );
};

const ExperienceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const proc = c("read as a real process"), free = c("The experience is free"), view = c("The view projected onto it");
  return (
    <AbsoluteFill>
      <At x={960} y={120} o={ramp(t, c("Experience alone does not catch this", 0.3), 0.4)}><Glow color={CHALK} size={40} serif>experience alone does not catch it</Glow></At>
      <At x={760} y={450} o={ramp(t, c("nothing stands outside the event"), 0.6)}>
        <div style={{ width: 560, height: 400, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}55, ${GOLD}18 50%, transparent 72%)` }} /></At>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * Math.PI * 2 + t * 0.3;
        return <At key={i} x={760 + 190 * Math.cos(a)} y={450 + 120 * Math.sin(a)} s={pop(t, fps, c("nothing stands outside the event") + i * 0.05)}>
          <Orb size={26} color={[GOLD, TEAL, ROSE, VIOLET][i % 4]} /></At>;
      })}
      <At x={760} y={450} o={ramp(t, c("nothing stands outside the event") + 0.4, 0.5)}><Glow color="#FFFFFF" size={36} serif>nothing outside</Glow></At>
      <Svg style={{ opacity: ramp(t, proc, 0.6) }}>
        <path d="M1560 300 L1040 340 L1040 560 L1560 600 Z" fill={`${INDIGO}22`} stroke={INDIGO} strokeWidth={2} strokeDasharray="8 8" />
        {Array.from({ length: 6 }).map((_, i) => <line key={i} x1={560} y1={330 + i * 48} x2={980} y2={330 + i * 48} stroke={INDIGO} strokeWidth={2} opacity={0.5} />)}
      </Svg>
      <At x={1640} y={450} s={pop(t, fps, proc)}>
        <div style={{ width: 120, height: 160, borderRadius: 14, border: `3px solid ${INDIGO}`, background: `${INDIGO}44`, boxShadow: `0 0 30px ${INDIGO}` }} /></At>
      <At x={1640} y={580} o={ramp(t, proc + 0.3, 0.4)}><Glow color={INDIGO} size={30}>“a real process”</Glow></At>
      <At x={620} y={760} o={ramp(t, free, 0.4)}><Chip color={TEAL} size={32}>the experience · free</Chip></At>
      <At x={1300} y={760} o={ramp(t, view, 0.4)}><Chip color={WARM} size={32}>the projected view · not yet</Chip></At>
    </AbsoluteFill>
  );
};

const GatesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gates: [string, string, string, number][] = [
    ["anatta", "the observer", GOLD, c("Anatta has dismantled the observer")], ["total exertion", "separation", TEAL, c("Total exertion has dismantled separation")],
    ["the chariot", "labels on things", ROSE, c("The chariot has dismantled")],
  ];
  const last = c("the last question"), q = c("Does dependent arising itself");
  return (
    <AbsoluteFill>
      {gates.map(([g, what, col, at], i) => (
        <React.Fragment key={i}>
          <At x={340 + i * 400} y={420} s={pop(t, fps, at - 0.2)}><Gate open={ramp(t, at + 0.5, 1.0)} color={col} w={240} /></At>
          <At x={340 + i * 400} y={630} o={ramp(t, at, 0.4)}><Glow color={col} size={32} serif>{g}</Glow></At>
          <StruckChip x={340 + i * 400} y={700} at={at + 0.4} strikeAt={at + 1.0} color={DIM} size={24}>{what}</StruckChip>
        </React.Fragment>
      ))}
      <At x={1600} y={420} s={pop(t, fps, last)}><Gate open={0} color={INDIGO} w={240} /></At>
      <At x={1600} y={440} o={ramp(t, last + 0.3, 0.4)}><Glow color={GOLD} size={90} serif>?</Glow></At>
      <At x={1600} y={630} o={ramp(t, q, 0.4)}><Glow color={INDIGO} size={30} serif>dependent arising itself</Glow></At>
      <At x={960} y={130} o={ramp(t, q + 0.3, 0.5)}><Glow color={CHALK} size={40} serif>does it exist in its own right?</Glow></At>
    </AbsoluteFill>
  );
};

const TurnScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ans = c("It does not"), undo = c("brought in to undo"), spare = c("spared from analysis"), turn = c("must turn on itself"),
    nf = c("Not because it fails"), nss = c("no special standing");
  const part2 = ramp(t, undo - 0.3, 0.5);
  const spin = ramp(t, turn, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("His answer is clear", 0.3), 0.4)}><Glow color={DIM} size={32}>Nāgārjuna's answer</Glow></At>
      <Centre y={170}><Reveal text="not in its own right" at={ans} size={70} color={ICE} top="#F0FBFF" /></Centre>
      <AbsoluteFill style={{ opacity: part2 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <At key={i} x={360 + i * 130} y={560 + 160 * ramp(t, undo + 0.6 + i * 0.15, 0.6)} r={40 * ramp(t, undo + 0.6 + i * 0.15, 0.6) * (i % 2 ? 1 : -1)}
            o={1 - ramp(t, undo + 1.0 + i * 0.15, 0.6)}>
            <div style={{ width: 100, height: 100, borderRadius: 10, border: `3px solid ${ROSE}`, background: `${ROSE}33` }} /></At>
        ))}
        <At x={550} y={720} o={ramp(t, undo + 0.2, 0.4)}><Glow color={ROSE} size={28}>independent things, undone</Glow></At>
        <At x={1240} y={430 - 40 * ramp(t, spare, 0.6) + 60 * ramp(t, nss + 0.4, 0.8)} s={pop(t, fps, undo)} r={spin * 360}><Wheel size={220} color={TEAL} /></At>
        <At x={1240} y={300} o={ramp(t, undo + 0.3, 0.4) * (1 - ramp(t, turn, 0.4))}><Glow color={TEAL} size={30}>dependent arising</Glow></At>
        <At x={1240} y={600} o={between(t, spare, nss + 1.0, 0.4)}><Pillar label="exempt foundation?" w={360} h={70} /></At>
        <Crossed x={1240} y={600} at={nss + 0.3} size={50} />
        <At x={1240} y={540} o={between(t, c("the very foundation"), turn, 0.4)}><Glow color={WARM} size={28}>the very thing analysis avoided</Glow></At>
        <Svg style={{ opacity: between(t, turn, nss, 0.4) }}>
          <path d="M1400 430 A160 160 0 1 1 1240 270" fill="none" stroke={GOLD} strokeWidth={6} strokeDasharray="14 10" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
          <path d="M1240 270 l26 -14 m-26 14 l18 24" stroke={GOLD} strokeWidth={6} fill="none" strokeLinecap="round" />
        </Svg>
        <At x={1240} y={300} o={between(t, turn + 0.3, nf, 0.4)}><Glow color={GOLD} size={34} serif>turning on itself</Glow></At>
        <At x={960} y={800} o={ramp(t, nf, 0.4)}><Chip color={TEAL} size={30}>it still explains how things work</Chip></At>
        <At x={1240} y={300} o={ramp(t, nss, 0.4)}><Glow color={ICE} size={34} serif>no special standing</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const BellScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const bell = c("Take a bell"), where = c("where is that sound"), notIn = c("Not in the bell"), noun = c("The noun cannot be found"),
    verb = c("Then the verb"), birth = c("Birth seems to mark"), dying = c("the start of dying"), arise = c("Arising and ceasing"), proc = c("the process itself is released");
  const half = ramp(t, verb - 0.3, 0.5);
  const spots: [string, number, number][] = [["bell", 420, 330], ["striker", 420, 600], ["air", 860, 330], ["ear", 860, 600]];
  const k = ramp(t, notIn, 2.6) * 3.99;
  const sp = spots[Math.floor(k)];
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - half }}>
        <At x={640} y={460} s={pop(t, fps, bell)} r={Math.sin(t * 9) * 6}><Bell size={200} /></At>
        {[0, 1].map((j) => <Ring key={j} x={660} y={460} p={t > bell + 0.3 ? ((t - bell) * 0.5 + j / 2) % 1 : 0} r0={80} r1={330} color={ICE} />)}
        <At x={1380} y={300} s={pop(t, fps, bell + 0.6)}><Glow color={GOLD} size={48} serif>“the sound”</Glow></At>
        <At x={1380} y={380} o={ramp(t, where, 0.4)}><Glow color={CHALK} size={32}>where is it?</Glow></At>
        {spots.map(([w, x, y], i) => <At key={i} x={x} y={y} o={ramp(t, notIn + i * 0.6, 0.3)}><Chip color={DIM} size={26}>{`not in the ${w}`}</Chip></At>)}
        <At x={sp[1] + 60} y={sp[2] + 50} o={between(t, notIn - 0.2, noun, 0.3)}><Lens /></At>
        <StruckChip x={1380} y={560} at={noun} strikeAt={noun + 0.8} color={GOLD} size={34}>the noun, found</StruckChip>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: half }}>
        <At x={960} y={130}><Glow color={CHALK} size={40} serif>then the verb</Glow></At>
        <Svg>
          <DrawPath d="M260 470 L1660 470" p={ramp(t, verb, 1.0)} color={DIM} width={5} len={1500} />
        </Svg>
        <At x={960} y={470} s={pop(t, fps, birth)}><Orb size={60} color={GOLD} core={1} /></At>
        <At x={960} y={360} o={ramp(t, birth + 0.2, 0.4)}><Chip color={GREEN} size={34}>a birth</Chip></At>
        <At x={960} y={580} o={ramp(t, dying, 0.4)}><Chip color={VIOLET} size={34}>the start of dying</Chip></At>
        <At x={1420} y={470} o={ramp(t, dying + 0.6, 0.4)}><Glow color={GOLD} size={30}>one moment, two designations</Glow></At>
        <At x={960} y={690} o={ramp(t, arise, 0.4)}><Glow color={ICE} size={32}>arising and ceasing · designations, not standalone events</Glow></At>
        <At x={960} y={790 - 120 * ramp(t, proc + 0.6, 1.4)} o={ramp(t, proc, 0.4) * (1 - ramp(t, proc + 1.2, 1.0))}><Chip color={TEAL} size={34}>the process itself</Chip></At>
        <At x={960} y={800} o={ramp(t, proc + 1.0, 0.5)}><Glow color={TEAL} size={32} serif>released</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const RemainsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const items: [React.ReactNode, string, string, number][] = [
    [<Bell size={160} />, "the bell rings", GOLD, c("The bell still rings")], [<Bottle />, "medicine heals", ROSE, c("Medicine still heals")],
    [<Heart />, "compassion relieves", TEAL, c("Compassion still relieves")],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, c("What remains", 0.3), 0.4)}><Glow color={CHALK} size={44} serif>what remains? what always remained</Glow></At>
      {items.map(([icon, w, col, at], i) => (
        <React.Fragment key={i}>
          <At x={480 + i * 480} y={420} s={pop(t, fps, at)}>{icon}</At>
          <At x={480 + i * 480} y={560} o={ramp(t, at + 0.2, 0.4)}><Glow color={col} size={34}>{w}</Glow></At>
          <Ring x={480 + i * 480} y={420} p={ramp(t, at + 0.3, 1.2)} r0={80} r1={210} color={col} />
        </React.Fragment>
      ))}
      <StruckChip x={700} y={720} at={c("This is not nihilism")} strikeAt={c("This is not nihilism") + 0.6} color={DIM} size={32}>nihilism</StruckChip>
      <At x={1220} y={720} s={pop(t, fps, c("It is freedom"))}><Glow color={GOLD} size={64} serif>freedom</Glow></At>
    </AbsoluteFill>
  );
};

const NoPlusScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const neg = c("Nor does the negation"), open = c("Openness and ease"), always = c("how appearing always was"),
    p1 = c("Emptiness does not produce functioning"), p2 = c("Functioning does not prove"), ng = c("Neither grounds the other");
  const half = ramp(t, p1 - 0.3, 0.5);
  const lift = ramp(t, always, 1.2);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - half }}>
        <At x={960} y={130} o={ramp(t, neg, 0.4)}><Glow color={CHALK} size={40} serif>nothing positive left behind</Glow></At>
        <StruckChip x={1440} y={330} at={open} strikeAt={open + 1.4} color={GOLD} size={30}>a new reality, added</StruckChip>
        {Array.from({ length: 10 }).map((_, i) => (
          <At key={i} x={760 + (rand(i) - 0.5) * 420} y={500 + (rand(i + 3) - 0.5) * 220} s={pop(t, fps, neg + 0.3 + i * 0.05)}>
            <Orb size={30 + rand(i + 1) * 30} color={[GOLD, TEAL, ROSE, ICE, GREEN][i % 5]} /></At>
        ))}
        <At x={760} y={500 - 60 * lift} o={ramp(t, neg + 0.2, 0.4) * (1 - lift)}>
          <div style={{ width: 620, height: 380, borderRadius: 30, background: "rgba(10,10,20,0.75)", border: `2px solid ${DIM}`, transform: `translateY(${200 * (1 - ramp(t, neg + 0.2, 0.6))}px)`,
            display: "flex", alignItems: "center", justifyContent: "center" }}><Glow color={DIM} size={30}>the false weight</Glow></div>
        </At>
        <At x={760} y={780} o={ramp(t, always + 0.3, 0.4)}><Glow color={GOLD} size={38} serif>how appearing always was</Glow></At>
        <At x={1440} y={460} o={ramp(t, open + 0.4, 0.4)}><Glow color={ICE} size={32}>openness · ease</Glow></At>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity: half }}>
        <At x={660} y={420} s={pop(t, fps, p1)}><Chip color={ICE} size={42}>emptiness</Chip></At>
        <At x={1260} y={420} s={pop(t, fps, p1 + 0.2)}><Chip color={GOLD} size={42}>functioning</Chip></At>
        <Flow x1={830} y1={390} x2={1100} y2={390} color={WARM} p={ramp(t, p1 + 0.4, 0.5)} />
        <At x={960} y={350} o={ramp(t, p1 + 0.5, 0.4)}><Glow color={WARM} size={26}>produces?</Glow></At>
        <Crossed x={965} y={390} at={p1 + 1.2} size={36} />
        <Flow x1={1100} y1={460} x2={830} y2={460} color={WARM} p={ramp(t, p2, 0.5)} />
        <At x={960} y={510} o={ramp(t, p2 + 0.2, 0.4)}><Glow color={WARM} size={26}>proves a hidden reality?</Glow></At>
        <Crossed x={965} y={460} at={p2 + 1.0} size={36} />
        <At x={960} y={720} o={ramp(t, ng, 0.5)}><Glow color={CHALK} size={46} serif>neither grounds the other</Glow></At>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

const SpontScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sp = c("spontaneous presence"), src = c("a hidden source"), ex = c("a final exemption"), desc = c("spontaneous simply describes");
  const gone = ramp(t, desc - 0.2, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, c("One refuge is the subtlest", 0.3), 0.4)}><Glow color={DIM} size={32}>the subtlest refuge</Glow></At>
      <Centre y={150}><Reveal text="spontaneous presence" at={sp} size={78} /></Centre>
      <At x={960} y={430} s={pop(t, fps, src - 0.3)}><Apple size={220} glow={0.4 + 0.6 * gone} /></At>
      <At x={960} y={700} s={pop(t, fps, src)} o={1 - gone}>
        <div style={{ width: 420, height: 110, borderRadius: "50%", background: `radial-gradient(ellipse, #FFF1C8, ${AMBER} 50%, transparent 75%)`,
          boxShadow: `0 0 60px ${AMBER}` }} /></At>
      {[0, 1, 2].map((i) => <Flow key={i} x1={880 + i * 80} y1={680} x2={900 + i * 60} y2={560} color={AMBER} p={ramp(t, src + 0.4, 0.5) * (1 - gone)} />)}
      <At x={1380} y={700} o={ramp(t, src + 0.3, 0.4) * (1 - gone)}><Glow color={AMBER} size={30}>a hidden producer?</Glow></At>
      <At x={1380} y={560} s={pop(t, fps, ex)} r={-8} o={1 - gone}>
        <div style={{ padding: "8px 30px", border: `4px solid ${WARM}`, borderRadius: 8, fontFamily: "SourceSans", fontWeight: 800, fontSize: 40,
          letterSpacing: 6, color: WARM }}>EXEMPT</div>
      </At>
      <Crossed x={960} y={700} at={desc - 0.6} size={60} />
      <At x={960} y={790} o={ramp(t, desc + 0.3, 0.5)}><Glow color={GOLD} size={36} serif>appearing, with nothing behind it</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const n = c("Nothing is left to stand on"), b = c("the bell goes on ringing");
  return (
    <AbsoluteFill>
      {["things", "relations", "processes", "awareness", "dependent arising"].map((w, i) => (
        <At key={i} x={260 + i * 350} y={720 + 40 * ramp(t, n + 0.4 + i * 0.15, 1.0)} o={ramp(t, n - 0.3, 0.4) * (1 - ramp(t, n + 0.6 + i * 0.15, 1.2))}>
          <Pillar w={290} h={60} label={w} dash /></At>
      ))}
      <At x={960} y={400} s={pop(t, fps, b - 0.2)} r={Math.sin(t * 8) * 5}><Bell size={240} /></At>
      {[0, 1, 2].map((j) => <Ring key={j} x={980} y={400} p={t > b ? ((t - b) * 0.45 + j / 3) % 1 : 0} r0={110} r1={520} color={[GOLD, ICE, TEAL][j]} />)}
      <At x={960} y={150} o={ramp(t, n, 0.6)}><Glow color={CHALK} size={42} serif>nothing to stand on</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["refuge", 0], ["migrate", c("a quiet question", 0.6)], ["habit", c("a habit more than a theory", 0.6)], ["gates", c("Experience alone does not catch this", 0.6)],
    ["analysis", c("His answer is clear", 0.6)], ["habit", c("Take a bell", 0.6)], ["free", c("What remains", 0.6)], ["gates", c("One refuge is the subtlest", 0.6)],
    ["free", c("Nothing is left to stand on", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("a quiet question", 0.9)], <RefugeScene />],
    [S("a quiet question", "Often, it has moved"), <QuestionScene />],
    [S("Often, it has moved", "a habit more than a theory"), <MigrateScene />],
    [S("a habit more than a theory", "Experience alone does not catch this"), <HabitScene />],
    [S("Experience alone does not catch this", "Anatta has dismantled the observer"), <ExperienceScene />],
    [S("Anatta has dismantled the observer", "His answer is clear"), <GatesScene />],
    [S("His answer is clear", "Take a bell"), <TurnScene />],
    [S("Take a bell", "What remains"), <BellScene />],
    [S("What remains", "Nor does the negation"), <RemainsScene />],
    [S("Nor does the negation", "One refuge is the subtlest"), <NoPlusScene />],
    [S("One refuge is the subtlest", "Nothing is left to stand on"), <SpontScene />],
    [S("Nothing is left to stand on", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
