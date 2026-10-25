// Anatta to Emptiness, Chapter 16: Space Is Also a Formation. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, Hand, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Picture a single flower", "where is it", "It sits in space", "there first, waiting",
  "The mind takes this step", "throws the finished object outward", "an empty, neutral grid", "before anything is put",
  "the flower plays no part", "dropped into a container",
  "cannot survive", "Inside and outside", "a border between them", "the one looking at it",
  "what a shape needs", "contrast with what surrounds", "this red needs the green",
  "name a location", "without something located there", "an object in one place", "gives its edge meaning",
  "So space and object", "do not come in sequence", "One does not wait", "They arise together", "Each supplies", "Neither comes first",
  "the usefulness of space", "Distances are still measured", "Directions are still given", "handed from one place",
  "What is refused", "a quiet extra assumption", "exists on its own", "here and there are named together",
  "This matters beyond the flower", "where someone goes at death", "to go into or out of", "It never was",
];

const DEEP_GOLD = "#D9A441", INDIGO = "#6C6CF0", RED = "#E8556B", STEM = "#5DBB72";

const M = {
  flower: { a: "rgba(70,50,150,0.5)", b: "rgba(180,130,50,0.4)", c: "rgba(40,60,130,0.35)" },
  grid: { a: "rgba(40,50,140,0.55)", b: "rgba(160,120,40,0.35)", c: "rgba(60,40,120,0.35)" },
  survive: { a: "rgba(90,50,140,0.5)", b: "rgba(170,110,40,0.4)", c: "rgba(40,70,130,0.3)" },
  together: { a: "rgba(180,135,50,0.45)", b: "rgba(70,50,150,0.5)", c: "rgba(40,90,130,0.3)" },
  useful: { a: "rgba(60,70,150,0.45)", b: "rgba(170,130,60,0.4)", c: "rgba(50,110,120,0.3)" },
  death: { a: "rgba(45,40,120,0.55)", b: "rgba(150,110,50,0.35)", c: "rgba(60,50,130,0.35)" },
};

// ---------------------------------------------------------------- drawings
/** A flower: red petals, green stem. `red` / `green` (0..1) set how vivid each is. */
const Flower: React.FC<{ s?: number; red?: number; green?: number }> = ({ s = 1, red = 1, green = 1 }) => {
  const { t } = useT();
  const sway = Math.sin(t * 1.3) * 3;
  return (
    <svg width={200 * s} height={300 * s} viewBox="0 0 200 300" style={{ overflow: "visible" }}>
      <g transform={`rotate(${sway} 100 290)`}>
        <path d="M100 290 Q92 210 100 120" fill="none" stroke={STEM} strokeWidth={7} opacity={green} style={{ filter: `drop-shadow(0 0 8px ${STEM})` }} />
        <path d="M97 220 Q55 200 50 170 Q85 175 97 205" fill={`${STEM}88`} stroke={STEM} strokeWidth={3} opacity={green} />
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return <ellipse key={i} cx={100 + 34 * Math.cos(a)} cy={100 + 34 * Math.sin(a)} rx={30} ry={22} transform={`rotate(${(a * 180) / Math.PI} ${100 + 34 * Math.cos(a)} ${100 + 34 * Math.sin(a)})`}
            fill={`${RED}cc`} stroke={RED} strokeWidth={2} opacity={red} style={{ filter: `drop-shadow(0 0 8px ${RED})` }} />;
        })}
        <circle cx={100} cy={100} r={18} fill={DEEP_GOLD} style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }} />
      </g>
    </svg>
  );
};

/** A wireframe box in perspective: the imagined grid of space. p draws it in; dash makes it look see-through. */
const Grid3D: React.FC<{ p: number; s?: number; color?: string; dash?: boolean }> = ({ p, s = 1, color = INDIGO, dash }) => {
  const fr = [0.25, 0.5, 0.75];
  const main = "M40 120 L300 120 L300 340 L40 340 Z M140 40 L400 40 L400 260 L140 260 Z M40 120 L140 40 M300 120 L400 40 M300 340 L400 260 M40 340 L140 260";
  const inner = fr.map((f) => `M${40 + 260 * f} 340 L${140 + 260 * f} 260 M${40 + 100 * f} ${340 - 80 * f} L${300 + 100 * f} ${340 - 80 * f} M${140 + 260 * f} 40 L${140 + 260 * f} 260`).join(" ");
  return (
    <svg width={440 * s} height={380 * s} viewBox="0 0 440 380" style={{ overflow: "visible" }}>
      <path d="M140 40 L400 40 L400 260 L140 260 Z" fill={`${color}14`} opacity={p} />
      {dash ? (
        <g opacity={p} fill="none" stroke={color} strokeWidth={3} strokeDasharray="10 12"><path d={main} /><path d={inner} strokeWidth={1.5} /></g>
      ) : (
        <>
          <DrawPath d={main} p={p} color={color} width={4} len={2600} />
          <DrawPath d={inner} p={ramp(p, 0.4, 0.6)} color={color} width={1.5} len={2600} glow={false} />
        </>
      )}
    </svg>
  );
};

const Head: React.FC<{ o?: number }> = ({ o = 1 }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
  </svg>
);

const Walker: React.FC<{ color?: string }> = ({ color = CHALK }) => {
  const { t } = useT();
  const k = Math.sin(t * 5);
  return (
    <svg width={120} height={220} viewBox="0 0 120 220"><circle cx={60} cy={30} r={22} fill="none" stroke={color} strokeWidth={5} />
      <path d={`M60 55 L60 130 M60 75 L${30 + 10 * k} 110 M60 75 L${90 - 10 * k} 110 M60 130 L${35 + 12 * k} 200 M60 130 L${85 - 12 * k} 200`}
        stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" /></svg>
  );
};

const Pin: React.FC = () => (
  <svg width={90} height={120} viewBox="0 0 90 120" style={{ filter: `drop-shadow(0 0 12px ${DEEP_GOLD})` }}>
    <path d="M45 115 C 15 75 5 58 5 45 A40 40 0 1 1 85 45 C 85 58 75 75 45 115 Z" fill={`${DEEP_GOLD}55`} stroke={DEEP_GOLD} strokeWidth={4} />
    <circle cx={45} cy={45} r={14} fill={DEEP_GOLD} />
  </svg>
);

const Ruler: React.FC = () => (
  <svg width={440} height={70} viewBox="0 0 440 70" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <rect x={5} y={5} width={430} height={60} rx={6} fill={`${GOLD}22`} stroke={GOLD} strokeWidth={3} />
    {Array.from({ length: 22 }).map((_, i) => <line key={i} x1={20 + i * 19} y1={5} x2={20 + i * 19} y2={i % 5 === 0 ? 40 : 24} stroke={GOLD} strokeWidth={2} />)}
  </svg>
);

const Compass: React.FC<{ rot: number }> = ({ rot }) => (
  <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
    <circle r={100} fill={`${TEAL}18`} stroke={TEAL} strokeWidth={4} />
    {[0, 90, 180, 270].map((a) => <line key={a} x1={0} y1={-100} x2={0} y2={-84} stroke={TEAL} strokeWidth={4} transform={`rotate(${a})`} />)}
    <g transform={`rotate(${rot})`}>
      <path d="M0 -78 L14 0 L-14 0 Z" fill={WARM} /><path d="M0 78 L14 0 L-14 0 Z" fill={CHALK} opacity={0.8} />
    </g>
    <text x={0} y={-56} textAnchor="middle" fill={CHALK} fontSize={22} fontFamily="SourceSans">N</text>
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

const Title: React.FC<{ at: number; color?: string; y?: number; children: React.ReactNode }> = ({ at, color = CHALK, y = 140, children }) => {
  const { t } = useT();
  return <At x={960} y={y} o={ramp(t, at, 0.5)}><Glow color={color} size={44} serif>{children}</Glow></At>;
};

// ---------------------------------------------------------------- scenes
const WhereScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const g = c("It sits in space");
  return (
    <AbsoluteFill>
      <At x={760} y={470} s={pop(t, fps, c("Picture a single flower", 0.1))}><Flower s={1.2} /></At>
      <At x={1220} y={380} s={pop(t, fps, c("where is it"))}><Glow color={DEEP_GOLD} size={150} serif>?</Glow></At>
      <At x={1220} y={520} o={ramp(t, c("where is it") + 0.3, 0.4)}><Glow color={CHALK} size={40}>where is it?</Glow></At>
      <At x={780} y={470} o={1 - ramp(t, g + 3.5, 0.6) * 0.2}><Grid3D p={ramp(t, g, 1.6)} s={1.5} /></At>
      <At x={760} y={790} o={ramp(t, c("there first, waiting"), 0.5)}><Chip color={INDIGO} size={34}>space · there first, waiting</Chip></At>
    </AbsoluteFill>
  );
};

const ThrowScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const th = c("throws the finished object outward");
  const fly = ramp(t, th, 1.6);
  const gridAt = c("an empty, neutral grid");
  return (
    <AbsoluteFill>
      <At x={420} y={460} s={pop(t, fps, c("The mind takes this step", 0.1))}><Head /></At>
      <At x={420} y={720} o={ramp(t, c("The mind takes this step"), 0.5)}><Glow color={DIM} size={30}>almost without noticing</Glow></At>
      <Flow x1={560} y1={420} x2={1180} y2={420} color={DEEP_GOLD} p={ramp(t, th, 1.2)} />
      <At x={560 + 720 * fly} y={450 - 120 * Math.sin(fly * Math.PI)} s={0.3 + 0.5 * fly} o={ramp(t, th, 0.3)}><Flower /></At>
      <At x={1290} y={440} o={ramp(t, gridAt, 0.3)}><Grid3D p={ramp(t, gridAt, 1.4)} s={1.3} /></At>
      <At x={1290} y={180} o={ramp(t, gridAt + 0.3, 0.5)}><Glow color={INDIGO} size={40} serif>an empty, neutral grid</Glow></At>
      <At x={1290} y={740} o={ramp(t, c("before anything is put"), 0.5)}><Chip color={DEEP_GOLD} size={32}>assumed to be there before anything</Chip></At>
    </AbsoluteFill>
  );
};

const ContainerScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const drop = c("dropped into a container");
  const fall = ramp(t, drop + 0.2, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={480} s={pop(t, fps, c("the flower plays no part", 0.2))}><Grid3D p={1} s={1.4} color={INDIGO} /></At>
      <At x={940} y={140 + 360 * fall} s={0.7} o={ramp(t, drop, 0.3)}><Flower /></At>
      <At x={480} y={360} o={ramp(t, c("the flower plays no part") + 0.3, 0.5)}><Chip color={DIM} size={30}>the flower plays no part</Chip></At>
      <At x={1480} y={360} o={ramp(t, drop + 0.6, 0.5)}><Chip color={INDIGO} size={30}>a container, already complete</Chip></At>
      <At x={960} y={800} o={ramp(t, drop + 1.2, 0.5)}><Glow color={CHALK} size={36} serif>complete before the flower arrived</Glow></At>
    </AbsoluteFill>
  );
};

const SurviveScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const io = c("Inside and outside"), bd = c("a border between them"), look = c("the one looking at it");
  const merge = ramp(t, bd + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <Title at={c("cannot survive", 0.4)} color={WARM}>this assumption cannot survive</Title>
      <At x={760 + 60 * merge} y={360} s={pop(t, fps, io)}>
        <div style={{ width: 340, height: 200, borderRadius: 16, background: `${VIOLET}33`, border: `3px solid ${VIOLET}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={VIOLET} size={40}>inside</Glow></div>
      </At>
      <At x={1160 - 60 * merge} y={360} s={pop(t, fps, io + 0.3)}>
        <div style={{ width: 340, height: 200, borderRadius: 16, background: `${TEAL}33`, border: `3px solid ${TEAL}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Glow color={TEAL} size={40}>outside</Glow></div>
      </At>
      <Svg style={{ opacity: 1 - merge }}><DrawPath d="M960 230 L960 490" p={ramp(t, bd, 0.6)} color={DEEP_GOLD} width={8} len={300} /></Svg>
      <At x={960} y={530} o={ramp(t, bd + 1.4, 0.5)}><Glow color={DIM} size={28}>never two separate regions</Glow></At>
      <At x={520} y={700} s={0.55 * pop(t, fps, look - 0.3)}><Head /></At>
      <At x={1400} y={690} s={0.75 * pop(t, fps, look)}><Flower /></At>
      <Flow x1={640} y1={680} x2={1300} y2={680} color={ICE} p={ramp(t, look, 0.8)} dash />
      <At x={960} y={640} o={ramp(t, look + 0.4, 0.4)}><Glow color={ICE} size={32}>the space between?</Glow></At>
      <Crossed x={960} y={680} at={look + 1.8} size={44} />
    </AbsoluteFill>
  );
};

const ShapeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cs = c("contrast with what surrounds");
  const lose = between(t, cs + 1.4, cs + 3.6, 0.8);
  const rg = c("this red needs the green");
  return (
    <AbsoluteFill>
      <Title at={c("what a shape needs", 0.4)}>what does a shape need?</Title>
      <At x={620} y={460} s={pop(t, fps, c("what a shape needs"))}>
        <div style={{ position: "relative", width: 360, height: 360, borderRadius: 18, background: "#2a2a7a", border: `3px solid ${INDIGO}`, boxShadow: `0 0 30px ${INDIGO}66` }}>
          <div style={{ position: "absolute", left: 100, top: 100, width: 160, height: 160, borderRadius: "50%", background: DEEP_GOLD, boxShadow: `0 0 ${30 * (1 - lose)}px ${GOLD}` }} />
          <div style={{ position: "absolute", inset: 0, borderRadius: 16, background: DEEP_GOLD, opacity: lose }} />
        </div>
      </At>
      <At x={620} y={720} o={ramp(t, cs, 0.5)}><Glow color={INDIGO} size={32}>contrast with what surrounds</Glow></At>
      <At x={620} y={790} o={lose}><Chip color={WARM} size={30}>no contrast · no shape</Chip></At>
      <At x={1340} y={450} s={pop(t, fps, rg - 0.6)}><Flower s={1.5} red={0.5 + 0.5 * ramp(t, rg, 0.8)} green={0.5 + 0.5 * ramp(t, rg + 0.6, 0.8)} /></At>
      <Ring x={1340} y={360} p={ramp(t, rg, 1.4)} r0={60} r1={200} color={RED} />
      <Ring x={1340} y={560} p={ramp(t, rg + 0.6, 1.4)} r0={40} r1={180} color={STEM} />
      <At x={1340} y={760} o={ramp(t, rg + 0.4, 0.5)}><Glow color={RED} size={36} serif>this red needs this green</Glow></At>
    </AbsoluteFill>
  );
};

const LocationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const loc = c("name a location"), sth = c("without something located there");
  const obj = c("an object in one place"), edge = c("gives its edge meaning");
  return (
    <AbsoluteFill>
      <At x={560} y={330} s={pop(t, fps, loc)}><Pin /></At>
      <At x={560} y={200} o={between(t, loc + 0.3, sth + 0.4)}><Glow color={DIM} size={34}>here… of what?</Glow></At>
      <At x={560} y={500} s={0.6 * pop(t, fps, sth + 0.4)}><Flower /></At>
      <At x={560} y={720} o={ramp(t, sth + 0.6, 0.5)}><Chip color={DEEP_GOLD} size={30}>a location needs something located</Chip></At>
      <At x={1360} y={430} o={ramp(t, obj, 0.8) * 0.8}><div style={{ width: 460, height: 460, borderRadius: "50%", background: `radial-gradient(circle, transparent 30%, ${INDIGO}44 55%, transparent 72%)` }} /></At>
      <At x={1360} y={430} s={pop(t, fps, obj)}><Orb size={160} color={TEAL} /></At>
      <Svg><DrawPath d="M1360 340 A90 90 0 1 1 1359.9 340" p={ramp(t, edge, 1.0)} color={DEEP_GOLD} width={5} len={600} /></Svg>
      <At x={1360} y={720} o={ramp(t, edge + 0.3, 0.5)}><Chip color={INDIGO} size={30}>the space around gives the edge meaning</Chip></At>
    </AbsoluteFill>
  );
};

const TogetherScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const seq = c("So space and object"), tog = c("They arise together");
  return (
    <AbsoluteFill>
      <At x={960} y={180} o={ramp(t, seq, 0.5) * (1 - ramp(t, tog, 0.6) * 0.6)}>
        <div style={{ position: "relative", display: "flex", gap: 30, alignItems: "center" }}>
          <Chip color={INDIGO} size={34}>space first</Chip><Glow color={DIM} size={40}>→</Glow><Chip color={RED} size={34}>object later</Chip>
          <Strike at={c("One does not wait") + 0.6} />
        </div>
      </At>
      <At x={660} y={480} s={pop(t, fps, tog)}><Grid3D p={1} s={0.7} color={INDIGO} /></At>
      <At x={1260} y={480} s={pop(t, fps, tog)}><Flower s={0.95} /></At>
      <At x={660} y={660} o={ramp(t, tog, 0.4)}><Glow color={INDIGO} size={34}>space</Glow></At>
      <At x={1260} y={660} o={ramp(t, tog, 0.4)}><Glow color={RED} size={34}>object</Glow></At>
      <Flow x1={860} y1={440} x2={1120} y2={440} color={DEEP_GOLD} p={ramp(t, c("Each supplies"), 0.8)} />
      <Flow x1={1120} y1={520} x2={860} y2={520} color={DEEP_GOLD} p={ramp(t, c("Each supplies") + 0.3, 0.8)} />
      <At x={990} y={480} o={ramp(t, tog + 0.3, 0.4)}><Glow color={GOLD} size={36} serif>together</Glow></At>
      <div style={{ position: "absolute", top: 730, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="neither comes first" at={c("Neither comes first")} size={76} color={DEEP_GOLD} />
      </div>
    </AbsoluteFill>
  );
};

const UsefulScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dist = c("Distances are still measured"), dir = c("Directions are still given"), hand = c("handed from one place");
  const pass = ramp(t, hand + 0.4, 1.8);
  return (
    <AbsoluteFill>
      <Title at={c("the usefulness of space", 0.4)} color={GOLD}>space still works</Title>
      <At x={460} y={480} s={pop(t, fps, dist)}><Ruler /></At>
      <Flow x1={290} y1={400} x2={630} y2={400} color={TEAL} p={ramp(t, dist + 0.4, 1.0)} />
      <At x={290} y={400} s={pop(t, fps, dist + 0.3)}><Orb size={30} color={TEAL} /></At>
      <At x={630} y={400} s={pop(t, fps, dist + 1.3)}><Orb size={30} color={TEAL} /></At>
      <At x={460} y={600} o={ramp(t, dist + 0.6, 0.5)}><Glow color={TEAL} size={34}>distance</Glow></At>
      <At x={960} y={450} s={pop(t, fps, dir)}><Compass rot={Math.sin((t - dir) * 1.5) * 30 * Math.exp(-Math.max(0, t - dir) * 0.3)} /></At>
      <At x={960} y={620} o={ramp(t, dir + 0.4, 0.5)}><Glow color={TEAL} size={34}>direction</Glow></At>
      <At x={1330} y={520} s={pop(t, fps, hand)}><Hand size={150} /></At>
      <At x={1640} y={520} s={pop(t, fps, hand + 0.2)}><Hand size={150} /></At>
      <At x={1330 + 310 * pass} y={370 - 60 * Math.sin(pass * Math.PI)} s={0.8 * pop(t, fps, hand + 0.2)}><Flower /></At>
      <At x={1485} y={680} o={ramp(t, hand + 0.8, 0.5)}><Glow color={ROSE} size={32}>from here to there</Glow></At>
    </AbsoluteFill>
  );
};

const RefusedScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const own = c("exists on its own"), named = c("here and there are named together");
  const off = ramp(t, own + 1.2, 1.0);
  return (
    <AbsoluteFill>
      <Title at={c("What is refused", 0.4)} color={WARM}>only one quiet assumption is refused</Title>
      <At x={600} y={430} s={pop(t, fps, c("What is refused") + 0.4)} o={1 - off * 0.6}><Grid3D p={1} s={1.1} dash={off > 0.5} /></At>
      <At x={600} y={700} o={ramp(t, own - 0.2, 0.5)}>
        <div style={{ position: "relative" }}><Chip color={INDIGO} size={30}>a grid on its own, before things</Chip><Strike at={own + 1.0} /></div>
      </At>
      <At x={1180} y={400} s={pop(t, fps, named)}><Flower s={0.6} /></At>
      <At x={1620} y={400} s={pop(t, fps, named + 0.2)}><Flower s={0.6} /></At>
      <At x={1180} y={540} s={pop(t, fps, named + 0.1)}><Chip color={DEEP_GOLD} size={34}>here</Chip></At>
      <At x={1620} y={540} s={pop(t, fps, named + 0.3)}><Chip color={DEEP_GOLD} size={34}>there</Chip></At>
      <Flow x1={1260} y1={540} x2={1540} y2={540} color={GOLD} p={ramp(t, named + 0.5, 0.8)} />
      <div style={{ position: "absolute", left: 1000, width: 800, top: 650, display: "flex", justifyContent: "center" }}>
        <Reveal text="named together" at={named + 0.8} size={70} color={DEEP_GOLD} />
      </div>
    </AbsoluteFill>
  );
};

const DeathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const go = c("where someone goes at death"), io = c("to go into or out of"), never = c("It never was");
  const gone = ramp(t, never + 0.2, 1.6);
  return (
    <AbsoluteFill>
      <Title at={c("This matters beyond the flower", 0.4)}>beyond the flower</Title>
      <At x={960} y={440} s={pop(t, fps, go)} o={1 - gone}><Grid3D p={1} s={1.1} dash={gone > 0.2} /></At>
      <At x={960} y={460} s={0.8 * pop(t, fps, go + 0.4)} o={1 - gone * 0.85}><Walker /></At>
      <At x={960} y={250} o={ramp(t, go + 0.6, 0.5) * (1 - gone)}><Glow color={DIM} size={32}>where does someone go?</Glow></At>
      <Flow x1={440} y1={460} x2={700} y2={460} color={VIOLET} p={ramp(t, io, 0.6) * (1 - gone)} />
      <Flow x1={1220} y1={460} x2={1480} y2={460} color={VIOLET} p={ramp(t, io + 0.4, 0.6) * (1 - gone)} />
      <At x={400} y={420} o={ramp(t, io + 0.2, 0.4) * (1 - gone)}><Glow color={VIOLET} size={60} serif>?</Glow></At>
      <At x={1520} y={420} o={ramp(t, io + 0.6, 0.4) * (1 - gone)}><Glow color={VIOLET} size={60} serif>?</Glow></At>
      <Ring x={960} y={440} p={ramp(t, never + 0.4, 2.0)} r0={160} r1={460} color={DEEP_GOLD} />
      <div style={{ position: "absolute", top: 640, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="it never was" at={never + 0.2} size={96} color={DEEP_GOLD} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["flower", 0], ["grid", c("The mind takes this step", 0.6)], ["survive", c("cannot survive", 0.6)],
    ["flower", c("what a shape needs", 0.6)], ["together", c("So space and object", 0.6)], ["useful", c("the usefulness of space", 0.6)],
    ["grid", c("What is refused", 0.6)], ["death", c("This matters beyond the flower", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("The mind takes this step", 0.9)], <WhereScene />],
    [S("The mind takes this step", "the flower plays no part"), <ThrowScene />],
    [S("the flower plays no part", "cannot survive"), <ContainerScene />],
    [S("cannot survive", "what a shape needs"), <SurviveScene />],
    [S("what a shape needs", "name a location"), <ShapeScene />],
    [S("name a location", "So space and object"), <LocationScene />],
    [S("So space and object", "the usefulness of space"), <TogetherScene />],
    [S("the usefulness of space", "What is refused"), <UsefulScene />],
    [S("What is refused", "This matters beyond the flower"), <RefusedScene />],
    [S("This matters beyond the flower", null), <DeathScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
