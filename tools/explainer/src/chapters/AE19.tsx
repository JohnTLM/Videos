// Anatta to Emptiness, Chapter 19: The Taste, Not the Argument. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, PictureFrame, ROSE, Reveal, Ring,
  Scene, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "An argument can be perfectly correct", "standing outside the door",
  "no lasting bearer", "ultimate destruction makes no sense", "the argument stays dry", "It does not taste",
  "corelessness is actually experienced", "not felt as a loss", "an immense openness",
  "Nothing vivid goes missing", "Movement, change and continuity", "the hard kernel", "nothing is found",
  "not ordinary vulnerability", "The body can still be hurt", "What loses its grip", "heading for total annihilation", "an eternal substance",
  "eternalism again", "never a centre",
  "At this depth", "the way everything appears through conditions", "a cold doctrine", "quiet astonishment",
  "Sleep offers an analogy", "Each night", "Each morning", "No self stands guard", "arises from conditions", "Continuity never needed",
  "sealed into a fixed nature", "nothing is closed off", "regardless of conditions", "a world without fixed essence", "some hidden subject",
  "also intimacy", "an inner observer", "colour blazes", "sound registers", "thought forms", "nothing in between", "a final ground",
  "nothing ever stood between", "Radiance is immediate", "because it is empty",
  "death looks different", "no self to die", "presumed to be destroyed", "Sensations of the body", "Passing thoughts", "Memory", "Personality",
  "the sense of presence", "coreless formation", "neither that death does not happen", "nor that something survives", "was never found",
  "a single flash", "View and taste verify", "The view corrects experience", "a hidden Awareness", "The taste corrects the view", "a blank void",
  "deeper than thought", "lives in the body", "A sudden threat", "Realization must reach", "The reflex may remain", "no longer confirms", "becomes ordinary",
  "even the formulas fall away", "No inner observer remains",
  "Life simply proceeds",
];

const DEEP_GOLD = "#D9A441", INDIGO = "#6C6CF0";

const M = {
  door: { a: "rgba(50,45,120,0.55)", b: "rgba(120,100,60,0.35)", c: "rgba(40,60,110,0.3)" },
  open: { a: "rgba(190,145,60,0.5)", b: "rgba(70,60,160,0.45)", c: "rgba(60,140,140,0.35)" },
  grip: { a: "rgba(90,50,130,0.5)", b: "rgba(160,110,50,0.4)", c: "rgba(40,70,130,0.3)" },
  night: { a: "rgba(30,35,110,0.6)", b: "rgba(70,45,130,0.45)", c: "rgba(150,110,60,0.3)" },
  intimate: { a: "rgba(190,120,60,0.45)", b: "rgba(90,60,170,0.45)", c: "rgba(60,150,140,0.35)" },
  death: { a: "rgba(50,50,130,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(70,50,130,0.35)" },
  verify: { a: "rgba(170,130,50,0.45)", b: "rgba(50,60,150,0.5)", c: "rgba(40,110,120,0.3)" },
  close: { a: "rgba(190,145,60,0.45)", b: "rgba(70,55,150,0.45)", c: "rgba(70,150,110,0.35)" },
};

// ---------------------------------------------------------------- drawings
const Door: React.FC<{ open: number }> = ({ open }) => (
  <div style={{ perspective: 1200, width: 260, height: 420, position: "relative" }}>
    <div style={{ position: "absolute", inset: 0, borderRadius: 6, background: `radial-gradient(circle at 50% 60%, #FFF3D1, ${GOLD} 40%, ${DEEP_GOLD}55 80%)`,
      opacity: open, boxShadow: `0 0 ${120 * open}px ${GOLD}` }} />
    <div style={{ position: "absolute", inset: 0, border: `5px solid ${CHALK}`, borderRadius: 6 }} />
    <div style={{ position: "absolute", inset: 6, background: "linear-gradient(160deg, #3a2f5a, #231d3c)", border: `3px solid ${INDIGO}`, borderRadius: 4,
      transformOrigin: "0% 50%", transform: `rotateY(${-80 * open}deg)` }}>
      <div style={{ position: "absolute", right: 22, top: 200, width: 16, height: 16, borderRadius: "50%", background: DEEP_GOLD }} />
    </div>
  </div>
);

const Person: React.FC<{ color?: string; dash?: boolean; s?: number; shrink?: number }> = ({ color = CHALK, dash, s = 1, shrink = 0 }) => (
  <svg width={140 * s} height={240 * s} viewBox="0 0 140 240" style={{ overflow: "visible", filter: dash ? undefined : `drop-shadow(0 0 8px ${color}88)` }}>
    <g stroke={color} strokeWidth={5} strokeLinecap="round" fill="none" strokeDasharray={dash ? "8 8" : undefined}
      transform={`translate(70 140) scale(${1 - 0.15 * shrink} ${1 - 0.1 * shrink}) translate(-70 -140)`}>
      <circle cx={70} cy={36 + 10 * shrink} r={22} />
      <path d={`M70 ${60 + 10 * shrink} L70 140 M70 80 L${40 + 18 * shrink} ${118 - 20 * shrink} M70 80 L${100 - 18 * shrink} ${118 - 20 * shrink} M70 140 L48 225 M70 140 L92 225`} />
    </g>
  </svg>
);

const Head: React.FC<{ o?: number; dash?: boolean }> = ({ o = 1, dash }) => (
  <svg width={300} height={340} viewBox="0 0 300 340" style={{ overflow: "visible", opacity: o }}>
    <path d="M110 320 L110 270 Q60 250 55 190 Q40 90 140 60 Q240 40 255 140 L272 180 L255 190 L258 225 Q255 250 225 250 L200 252 L200 320"
      fill="rgba(255,255,255,0.05)" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" strokeDasharray={dash ? "12 10" : undefined} />
  </svg>
);

const Lens: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 150 150" style={{ filter: `drop-shadow(0 0 10px ${ICE})` }}>
    <circle cx={60} cy={60} r={44} fill="rgba(170,220,240,0.12)" stroke={ICE} strokeWidth={6} />
    <line x1={92} y1={92} x2={138} y2={138} stroke={ICE} strokeWidth={12} strokeLinecap="round" />
  </svg>
);

const Gear: React.FC<{ rot: number; color?: string; size?: number }> = ({ rot, color = DIM, size = 160 }) => (
  <svg width={size} height={size} viewBox="-60 -60 120 120" style={{ transform: `rotate(${rot}deg)` }}>
    {Array.from({ length: 10 }).map((_, i) => <rect key={i} x={-7} y={-56} width={14} height={16} rx={2} fill={color} transform={`rotate(${i * 36})`} />)}
    <circle r={42} fill="none" stroke={color} strokeWidth={12} /><circle r={10} fill={color} />
  </svg>
);

const Moon: React.FC = () => (
  <svg width={150} height={150} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 16px ${ICE})` }}>
    <path d="M65 10 A 42 42 0 1 0 90 72 A 34 34 0 1 1 65 10 Z" fill={`${ICE}cc`} />
  </svg>
);

const Cloud: React.FC<{ color?: string }> = ({ color = VIOLET }) => (
  <svg width={130} height={100} viewBox="0 0 130 100" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
    <path d="M25 60 Q5 55 15 38 Q10 15 38 18 Q50 0 72 12 Q98 2 105 26 Q128 32 115 52 Q120 72 92 70 Q78 86 55 74 Q35 82 25 60 Z" fill={`${color}33`} stroke={color} strokeWidth={3.5} />
  </svg>
);

const Waves: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  return (
    <svg width={160} height={120} viewBox="0 0 160 120" style={{ filter: `drop-shadow(0 0 8px ${color})` }}>
      {[0, 1, 2].map((k) => {
        const r = 20 + ((t * 30 + k * 25) % 75);
        return <path key={k} d={`M${30 + r * 0.5} ${60 - r * 0.7} Q ${30 + r} 60 ${30 + r * 0.5} ${60 + r * 0.7}`} fill="none" stroke={color} strokeWidth={4} opacity={1 - r / 95} />;
      })}
      <circle cx={30} cy={60} r={10} fill={color} />
    </svg>
  );
};

/** A shimmering formation: a cluster of small lights with a dashed edge and no centre. */
const Formation: React.FC<{ color: string; seed: number }> = ({ color, seed }) => {
  const { t } = useT();
  return (
    <div style={{ position: "relative", width: 150, height: 150, borderRadius: "50%", border: `2px dashed ${color}88` }}>
      {Array.from({ length: 9 }).map((_, i) => {
        const a = rand(i + seed) * Math.PI * 2 + t * (0.4 + rand(i + seed + 2) * 0.6);
        const r = 25 + rand(i + seed + 4) * 40;
        return <div key={i} style={{ position: "absolute", left: 75 + r * Math.cos(a) - 7, top: 75 + r * Math.sin(a) - 7, width: 14, height: 14, borderRadius: "50%",
          background: color, boxShadow: `0 0 10px ${color}`, opacity: 0.6 + 0.4 * Math.sin(t * 3 + i) }} />;
      })}
    </div>
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
const DoorScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const a = c("An argument can be perfectly correct", 0.1), out = c("standing outside the door");
  const nb = c("no lasting bearer"), ud = c("ultimate destruction makes no sense"), dry = c("the argument stays dry"), nt = c("It does not taste");
  return (
    <AbsoluteFill>
      <At x={1380} y={430} s={pop(t, fps, a)}><Door open={0} /></At>
      <At x={1040} y={500} s={pop(t, fps, out)}><Person s={0.9} /></At>
      <At x={1210} y={720} o={ramp(t, out + 0.3, 0.5)}><Glow color={DIM} size={30}>outside the door</Glow></At>
      <At x={500} y={220} s={pop(t, fps, a + 0.3)}><Chip color={INDIGO} size={32}>a correct argument</Chip></At>
      <At x={500} y={340} s={pop(t, fps, nb)}><Chip color={CHALK} size={28}>no lasting bearer</Chip></At>
      <At x={500} y={410} o={ramp(t, ud - 0.2, 0.3)}><Glow color={DIM} size={30}>↓</Glow></At>
      <At x={500} y={480} s={pop(t, fps, ud)}><Chip color={CHALK} size={28}>no ultimate destruction</Chip></At>
      <At x={500} y={560} o={ramp(t, ud + 0.6, 0.3)}><Glow color={GREEN} size={30}>valid</Glow></At>
      <Svg style={{ opacity: ramp(t, dry, 0.6) }}>
        {[0, 1, 2, 3].map((k) => <path key={k} d={`M${330 + k * 100} 650 l 20 25 l -15 20 l 25 30`} stroke="#B98B52" strokeWidth={3} fill="none" />)}
      </Svg>
      <At x={500} y={640} o={ramp(t, dry + 0.2, 0.5)}><Glow color="#C9A060" size={32}>dry</Glow></At>
      <At x={500} y={790} o={ramp(t, nt, 0.4)}><div style={{ position: "relative" }}><Chip color={TEAL} size={30}>a taste</Chip><Strike at={nt + 0.6} /></div></At>
    </AbsoluteFill>
  );
};

const OpenScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ex = c("corelessness is actually experienced"), loss = c("not felt as a loss"), op = c("an immense openness");
  const o = ramp(t, ex, 1.8);
  const sky = ramp(t, op, 1.6);
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={1 + 0.6 * sky} o={1 - sky * 0.6}><Door open={o} /></At>
      <At x={960} y={420} o={sky}><div style={{ width: 1500, height: 900, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}66, ${INDIGO}22 50%, transparent 72%)` }} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={960} y={420} p={ramp(t, op + k * 0.5, 2.2)} r0={120} r1={700} color={[GOLD, TEAL, VIOLET][k]} />)}
      <Struck x={960} y={130} at={loss - 0.1} strikeAt={loss + 1.2} color={DIM} size={32}>a loss of security</Struck>
      <Center top={690}><Reveal text="an immense openness" at={op} size={84} /></Center>
    </AbsoluteFill>
  );
};

const KernelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const nv = c("Nothing vivid goes missing"), mv = c("Movement, change and continuity"), hk = c("the hard kernel"), nf = c("nothing is found");
  const xs = Array.from({ length: 60 }, (_, i) => 200 + i * 26);
  const u = ramp(t, hk, 3.0);
  return (
    <AbsoluteFill>
      <Title at={nv - 0.1} color={GOLD}>nothing vivid goes missing</Title>
      <Svg style={{ opacity: ramp(t, mv, 0.8) }}>
        {[0, 1, 2, 3, 4].map((k) => (
          <path key={k} d={xs.map((x, i) => `${i ? "L" : "M"}${x} ${380 + k * 50 + 30 * Math.sin(x / 90 - t * 1.8 + k)}`).join(" ")}
            fill="none" stroke={[TEAL, GOLD, ROSE, VIOLET, ICE][k]} strokeWidth={5} opacity={0.85} style={{ filter: `drop-shadow(0 0 6px ${[TEAL, GOLD, ROSE, VIOLET, ICE][k]})` }} />
        ))}
      </Svg>
      <At x={960} y={250} o={ramp(t, mv + 0.3, 0.5)}><Glow color={CHALK} size={32}>movement · change · continuity</Glow></At>
      <At x={400 + 1100 * u} y={480 + 60 * Math.sin(u * 9)} o={between(t, hk, nf + 1.5)}><Lens /></At>
      <At x={960} y={720} o={ramp(t, hk + 0.2, 0.4)}><Chip color={DIM} size={30}>a hard kernel moving through?</Chip></At>
      <At x={960} y={800} o={ramp(t, nf, 0.5)}><Glow color={ICE} size={40} serif>nothing is found</Glow></At>
    </AbsoluteFill>
  );
};

const GripScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const vul = c("not ordinary vulnerability"), hurt = c("The body can still be hurt"), grip = c("What loses its grip");
  const ann = c("heading for total annihilation"), es = c("an eternal substance"), et = c("eternalism again"), nc = c("never a centre");
  const fall = ramp(t, ann, 1.6);
  const empty = ramp(t, nc + 0.3, 1.0);
  return (
    <AbsoluteFill>
      <At x={400} y={420} s={pop(t, fps, vul)}><Person color={TEAL} /></At>
      <At x={400} y={620} o={ramp(t, hurt, 0.5)}><Chip color={TEAL} size={28}>the body can still be hurt</Chip></At>
      <PictureFrame x={1000} y={430} w={420} h={400} tag="a picture" o={ramp(t, grip, 0.6) * (1 - empty * 0.6)} />
      <At x={1000} y={330 + 170 * fall} o={ramp(t, grip + 0.2, 0.5) * (1 - fall * 0.7) * (1 - empty)}>
        <div style={{ width: 90, height: 90, borderRadius: "50%", background: "radial-gradient(circle at 35% 30%, #8a8aa0, #2a2a3a)", border: `3px solid ${CHALK}` }} /></At>
      <At x={1000} y={560} o={ramp(t, ann, 0.4) * (1 - empty)}><div style={{ width: 200, height: 40, borderRadius: "50%", background: "#000", boxShadow: "0 0 30px #000" }} /></At>
      <At x={1000} y={660} o={ramp(t, ann + 0.2, 0.5) * (1 - empty)}><Glow color={DIM} size={28}>a solid core, annihilated</Glow></At>
      <At x={1540} y={380} s={pop(t, fps, es)}><Orb size={110} color={GOLD} core={1} /></At>
      <Struck x={1540} y={520} at={et - 0.3} strikeAt={et + 0.6} color={WARM} size={28}>eternalism again</Struck>
      <Crossed x={1540} y={380} at={et + 0.6} size={70} />
      <At x={1000} y={430} o={empty}><Glow color={ICE} size={36} serif>never a centre</Glow></At>
      <At x={1000} y={800} o={ramp(t, nc + 0.6, 0.5)}><Glow color={CHALK} size={32}>nothing for the picture to attach to</Glow></At>
    </AbsoluteFill>
  );
};

const DAScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const d = c("At this depth"), cond = c("the way everything appears through conditions"), cold = c("a cold doctrine"), ast = c("quiet astonishment");
  const warm = ramp(t, ast, 1.4);
  const nodes = Array.from({ length: 9 }, (_, i) => ({ x: 960 + 330 * Math.cos(i * 0.7 + 0.3) * (0.5 + rand(i) * 0.6), y: 450 + 200 * Math.sin(i * 1.3) * (0.5 + rand(i + 2) * 0.6) }));
  return (
    <AbsoluteFill>
      <Title at={d}>dependent arising</Title>
      <At x={960} y={200} o={ramp(t, cond, 0.5)}><Glow color={DIM} size={30}>everything appearing through conditions</Glow></At>
      <AbsoluteFill style={{ opacity: 1 - warm }}>
        <At x={860} y={450} s={pop(t, fps, cold)}><Gear rot={t * 40} /></At>
        <At x={1010} y={540} s={pop(t, fps, cold + 0.2)}><Gear rot={-t * 40 + 18} size={130} /></At>
        <At x={960} y={720} o={ramp(t, cold + 0.3, 0.5)}><Chip color={DIM} size={30}>a cold doctrine of causes</Chip></At>
      </AbsoluteFill>
      <Svg style={{ opacity: warm }}>
        {nodes.map((a, i) => nodes.slice(i + 1).filter((_, k) => (i + k) % 3 === 0).map((b, k) => (
          <line key={`${i}-${k}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={GOLD} strokeOpacity={0.5} strokeWidth={2} />
        )))}
      </Svg>
      {nodes.map((n, i) => <At key={i} x={n.x} y={n.y} s={pop(t, fps, ast + i * 0.08)} o={warm}><Orb size={36 + (i % 3) * 10} color={[GOLD, TEAL, ROSE, VIOLET, ICE][i % 5]} /></At>)}
      <At x={960} y={790} o={ramp(t, ast + 0.4, 0.5)}><Glow color={DEEP_GOLD} size={44} serif>a quiet astonishment</Glow></At>
    </AbsoluteFill>
  );
};

const SleepScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const an = c("Sleep offers an analogy"), ni = c("Each night"), mo = c("Each morning"), gd = c("No self stands guard"), ar = c("arises from conditions"), cn = c("Continuity never needed");
  const night = between(t, ni, mo + 0.2, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={130} o={ramp(t, an, 0.5)}><Glow color={ICE} size={40} serif>sleep: an analogy, not a proof</Glow></At>
      <At x={560} y={330} s={pop(t, fps, ni)} o={night}><Moon /></At>
      <At x={960} y={440} o={1 - night * 0.85}>
        <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ filter: `drop-shadow(0 0 10px ${TEAL})` }}>
          <circle r={100} fill={`${TEAL}22`} stroke={TEAL} strokeWidth={4} /><ellipse rx={100} ry={36} fill="none" stroke={TEAL} strokeWidth={2} />
          <ellipse rx={40} ry={100} fill="none" stroke={TEAL} strokeWidth={2} />
        </svg>
      </At>
      <At x={960} y={640} o={ramp(t, ni + 0.3, 0.5) * (1 - ramp(t, mo, 0.4))}><Glow color={DIM} size={30}>the world disappears</Glow></At>
      <At x={1380} y={340 + 60 * (1 - ramp(t, mo, 1.2))} s={pop(t, fps, mo)}><Sun size={170} rot={t * 12} /></At>
      <At x={960} y={640} o={ramp(t, mo + 0.3, 0.5)}><Glow color={GOLD} size={30}>a new day simply appears</Glow></At>
      <At x={560} y={560} s={pop(t, fps, gd)}><Person dash color={DIM} s={0.8} /></At>
      <At x={560} y={720} o={ramp(t, gd + 0.2, 0.5)}><Glow color={DIM} size={26}>a guard through the night?</Glow></At>
      <Crossed x={560} y={560} at={gd + 1.0} size={70} />
      <At x={1380} y={560} o={ramp(t, ar, 0.5)}><Chip color={TEAL} size={28}>arising from conditions</Chip></At>
      <At x={960} y={800} o={ramp(t, cn, 0.5)}><Glow color={CHALK} size={34} serif>continuity never needed something solid</Glow></At>
    </AbsoluteFill>
  );
};

const OpenFutureScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const se = c("sealed into a fixed nature"), co = c("nothing is closed off"), rc = c("regardless of conditions"), wf = c("a world without fixed essence"), hs = c("some hidden subject");
  const unlock = ramp(t, co, 0.8);
  const paths = Array.from({ length: 7 }, (_, i) => (i - 3) * 0.32);
  return (
    <AbsoluteFill>
      <At x={420} y={440} s={pop(t, fps, se)}>
        <svg width={200} height={240} viewBox="0 0 200 240" style={{ filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <path d={`M55 110 L55 ${70 - 30 * unlock} Q55 20 100 20 Q145 20 145 70 L145 ${110 - 40 * unlock}`} fill="none" stroke={GOLD} strokeWidth={14}
            transform={`rotate(${-25 * unlock} 145 110)`} />
          <rect x={30} y={105} width={140} height={120} rx={14} fill={`${GOLD}44`} stroke={GOLD} strokeWidth={5} />
        </svg>
      </At>
      <At x={420} y={640} o={ramp(t, se + 0.3, 0.5)}><Glow color={GOLD} size={28}>no fixed nature to seal it</Glow></At>
      <Svg>
        {paths.map((a, i) => (
          <DrawPath key={i} d={`M760 450 Q ${1050} ${450 + a * 120} ${1500} ${450 + a * 260}`} p={ramp(t, co + 0.2 + i * 0.08, 1.0)} color={[TEAL, GOLD, ROSE, VIOLET, ICE, GREEN, DEEP_GOLD][i]} width={4} len={900} />
        ))}
      </Svg>
      <At x={760} y={450} s={pop(t, fps, co)}><Orb size={50} color={GOLD} /></At>
      <At x={1150} y={130} o={ramp(t, co + 0.3, 0.5)}><Glow color={TEAL} size={40} serif>nothing is closed off</Glow></At>
      <At x={420} y={710} o={ramp(t, rc, 0.5)}><Chip color={DIM} size={26}>still shaped by conditions</Chip></At>
      <At x={1150} y={790} o={ramp(t, wf, 0.5)}><Glow color={CHALK} size={28}>a world without fixed essence</Glow></At>
      <Struck x={420} y={780} at={hs - 0.2} strikeAt={hs + 0.8} color={VIOLET} size={28}>a hidden subject's property</Struck>
    </AbsoluteFill>
  );
};

const IntimacyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const im = c("also intimacy"), ob = c("an inner observer"), cb = c("colour blazes"), sr = c("sound registers"), tf = c("thought forms"), nb = c("nothing in between");
  const fg = c("a final ground"), ns = c("nothing ever stood between"), rad = c("Radiance is immediate");
  const close = ramp(t, ob + 1.2, 1.4);
  const part2 = ramp(t, fg - 0.3, 0.5);
  return (
    <AbsoluteFill>
      <Title at={im - 0.1} color={GOLD}>openness is also intimacy</Title>
      <AbsoluteFill style={{ opacity: 1 - part2 }}>
        <At x={420 + 160 * close} y={470} s={0.7 * pop(t, fps, ob)} o={1 - close * 0.8}><Head /></At>
        <Flow x1={560 + 160 * close} y1={440} x2={1100 - 120 * close} y2={440} color={DIM} p={ramp(t, ob + 0.3, 0.6) * (1 - close)} dash />
        <At x={1300} y={300} s={pop(t, fps, cb)}><Orb size={110} color={ROSE} /></At>
        <At x={1300} y={300} o={ramp(t, cb, 0.6)}><div style={{ width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${ROSE}44, transparent 70%)` }} /></At>
        <At x={1500} y={480} s={pop(t, fps, sr)}><Waves /></At>
        <At x={1260} y={620} s={pop(t, fps, tf)}><Cloud /></At>
        <At x={960} y={790} o={ramp(t, nb, 0.5)}><Glow color={CHALK} size={36} serif>with nothing in between</Glow></At>
      </AbsoluteFill>
      <Scene from={fg - 0.3} to={1e9}>
        <At x={960} y={560} s={pop(t, fps, fg)} o={1 - ramp(t, fg + 1.8, 0.8)}>
          <div style={{ width: 900, height: 110, borderRadius: 12, background: `${INDIGO}33`, border: `3px solid ${INDIGO}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Glow color={INDIGO} size={36}>a final ground: Awareness, Presence?</Glow></div>
        </At>
        <Crossed x={960} y={560} at={fg + 1.0} size={80} />
        <At x={960} y={300} o={ramp(t, ns, 0.5)}><Glow color={CHALK} size={34}>nothing ever stood between appearing and appearance</Glow></At>
        <Center top={640}><Reveal text="radiance: immediate, because empty" at={rad} size={68} /></Center>
      </Scene>
    </AbsoluteFill>
  );
};

const DeathScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dl = c("death looks different"), ns = c("no self to die"), pd = c("presumed to be destroyed");
  const items: [string, string, string][] = [["Sensations of the body", "body sensations", TEAL], ["Passing thoughts", "thoughts", VIOLET], ["Memory", "memory", GOLD],
    ["Personality", "personality", ROSE], ["the sense of presence", "sense of presence", ICE]];
  const cf = c("coreless formation"), n1 = c("neither that death does not happen"), n2 = c("nor that something survives"), nf = c("was never found");
  const shift = ramp(t, n1 - 0.4, 0.6);
  return (
    <AbsoluteFill>
      <Title at={dl - 0.1}>death, looked at directly</Title>
      <Struck x={960} y={210} at={ns - 0.2} strikeAt={pd} color={DIM} size={28}>asserting “there is no self to die”</Struck>
      {items.map(([ph, w, col], i) => (
        <React.Fragment key={i}>
          <At x={340 + i * 310} y={430 - 60 * shift} s={pop(t, fps, c(ph)) * (1 - 0.3 * shift)}><Formation color={col} seed={i * 7} /></At>
          <At x={340 + i * 310} y={560 - 100 * shift} o={ramp(t, c(ph) + 0.2, 0.4)}><Glow color={col} size={28}>{w}</Glow></At>
        </React.Fragment>
      ))}
      <At x={960} y={640} o={ramp(t, cf, 0.5) * (1 - shift)}><Glow color={CHALK} size={36} serif>each a vivid, changing, coreless formation</Glow></At>
      <Struck x={640} y={620} at={n1} strikeAt={n1 + 1.4} color={DIM} size={28}>death does not happen</Struck>
      <Struck x={1280} y={620} at={n2} strikeAt={n2 + 1.2} color={DIM} size={28}>something survives</Struck>
      <At x={960} y={760} o={ramp(t, nf - 0.6, 0.5)}><Glow color={ICE} size={38} serif>what fear imagined was never found</Glow></At>
    </AbsoluteFill>
  );
};

const VerifyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const fl = c("a single flash"), vt = c("View and taste verify"), vc = c("The view corrects experience"), ha = c("a hidden Awareness"), tc = c("The taste corrects the view"), bv = c("a blank void");
  const spin = t * 50;
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={fl - 0.2} strikeAt={fl + 0.8} color={DIM} size={30}>a single flash</Struck>
      <At x={660} y={420} s={pop(t, fps, vt)}><Chip color={INDIGO} size={44}>view</Chip></At>
      <At x={1260} y={420} s={pop(t, fps, vt + 0.3)}><Chip color={DEEP_GOLD} size={44}>taste</Chip></At>
      <At x={960} y={420} o={ramp(t, vt + 0.4, 0.5)}>
        <svg width={260} height={260} viewBox="-130 -130 260 260" style={{ transform: `rotate(${spin}deg)`, filter: `drop-shadow(0 0 8px ${GOLD})` }}>
          <path d="M -100 0 A 100 100 0 0 1 100 0" fill="none" stroke={INDIGO} strokeWidth={6} /><polygon points="100,0 86,-22 114,-22" fill={INDIGO} transform="rotate(180 100 -10)" />
          <path d="M 100 0 A 100 100 0 0 1 -100 0" fill="none" stroke={DEEP_GOLD} strokeWidth={6} /><polygon points="-100,0 -114,22 -86,22" fill={DEEP_GOLD} transform="rotate(180 -100 10)" />
        </svg>
      </At>
      <At x={660} y={600} o={ramp(t, vc, 0.4)}><Glow color={INDIGO} size={28}>view corrects experience</Glow></At>
      <Struck x={660} y={690} at={ha - 0.2} strikeAt={ha + 1.0} color={INDIGO} size={28}>a hidden Awareness</Struck>
      <At x={1260} y={600} o={ramp(t, tc, 0.4)}><Glow color={DEEP_GOLD} size={28}>taste corrects the view</Glow></At>
      <At x={1260} y={720} s={pop(t, fps, bv - 0.3)} o={1 - ramp(t, bv + 1.6, 0.6) * 0.6}>
        <div style={{ width: 110, height: 110, borderRadius: "50%", background: "radial-gradient(circle, #000 60%, #1b1730)", boxShadow: "0 0 30px #000" }} /></At>
      <Crossed x={1260} y={720} at={bv + 0.8} size={55} />
    </AbsoluteFill>
  );
};

const BodyScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const dt = c("deeper than thought"), lb = c("lives in the body"), th = c("A sudden threat"), rm = c("Realization must reach"), rf = c("The reflex may remain");
  const nc = c("no longer confirms"), ord = c("becomes ordinary");
  const flash = between(t, th + 0.3, th + 1.2, 0.2);
  const contract = between(t, th + 0.4, rm, 0.3) + between(t, rf + 0.2, rf + 1.4, 0.3) * 0.6;
  const fill = ramp(t, rm + 0.3, 1.6);
  return (
    <AbsoluteFill>
      <Title at={dt - 0.1}>deeper than thought</Title>
      <At x={760} y={470} s={1.6 * pop(t, fps, dt + 0.4)}><Person shrink={contract} color={fill > 0.5 ? GOLD : CHALK} /></At>
      <At x={760} y={460} o={fill * 0.8}><div style={{ width: 340, height: 500, borderRadius: "50%", background: `radial-gradient(ellipse, ${GOLD}55, transparent 70%)` }} /></At>
      {[0, 1, 2].map((k) => <At key={k} x={720 + k * 40} y={420 + k * 60} o={ramp(t, lb + 0.3, 0.5) * (1 - fill)}><div style={{ width: 22, height: 22, borderRadius: "50%", border: `3px solid ${WARM}` }} /></At>)}
      <At x={760} y={790} o={ramp(t, lb + 0.2, 0.5)}><Glow color={WARM} size={28}>the habit of a solid self, in the body</Glow></At>
      <Svg style={{ opacity: flash }}><path d="M1380 220 L1300 400 L1370 400 L1290 590" stroke={GOLD} strokeWidth={10} fill="none" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 16px ${GOLD})` }} /></Svg>
      <At x={1340} y={650} o={ramp(t, th, 0.4)}><Chip color={WARM} size={28}>a sudden threat · instant contraction</Chip></At>
      <At x={1340} y={330} o={ramp(t, rm + 0.4, 0.5)}><Glow color={GOLD} size={32}>insight, just as deep</Glow></At>
      <Struck x={1340} y={470} at={nc - 0.4} strikeAt={nc + 0.8} color={DIM} size={28}>confirms a solid someone</Struck>
      <At x={1340} y={760} o={ramp(t, ord, 0.5)}><Glow color={TEAL} size={36} serif>groundlessness, ordinary</Glow></At>
    </AbsoluteFill>
  );
};

const CloseScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ff = c("even the formulas fall away"), io = c("No inner observer remains"), lp = c("Life simply proceeds");
  const formulas = ["no carrier", "no core", "empty", "continuity is designated"];
  const walk = ramp(t, lp, 6);
  return (
    <AbsoluteFill>
      {formulas.map((w, i) => {
        const up = ramp(t, ff + 0.4 + i * 0.25, 2.2);
        return <At key={i} x={420 + i * 360} y={300 - 220 * up} o={ramp(t, ff + i * 0.15, 0.4) * (1 - up)} blur={up * 4}><Chip color={DIM} size={30}>{w}</Chip></At>;
      })}
      <At x={960} y={470} s={0.7 * pop(t, fps, io - 0.2)} o={1 - ramp(t, io + 0.6, 1.4)}><Head dash /></At>
      <Svg style={{ opacity: ramp(t, lp, 0.6) }}>
        <path d="M200 760 Q 960 700 1720 760" stroke={`${GOLD}88`} strokeWidth={4} fill="none" />
      </Svg>
      {Array.from({ length: 9 }).map((_, i) => <At key={i} x={300 + i * 170} y={735 - 10 * Math.sin(i)} s={pop(t, fps, lp + 0.2 + i * 0.12)}>
        <Orb size={18 + (i % 3) * 6} color={[ROSE, GOLD, TEAL, VIOLET][i % 4]} /></At>)}
      <At x={360 + 1100 * walk} y={640} s={pop(t, fps, lp)}>
        <svg width={110} height={200} viewBox="0 0 120 220"><circle cx={60} cy={30} r={22} fill="none" stroke={CHALK} strokeWidth={5} />
          <path d={`M60 55 L60 130 M60 75 L${30 + 10 * Math.sin(t * 5)} 110 M60 75 L${90 - 10 * Math.sin(t * 5)} 110 M60 130 L${35 + 12 * Math.sin(t * 5)} 200 M60 130 L${85 - 12 * Math.sin(t * 5)} 200`}
            stroke={CHALK} strokeWidth={5} strokeLinecap="round" fill="none" /></svg>
      </At>
      <Center top={420}><Reveal text="life simply proceeds" at={lp + 0.2} size={90} /></Center>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["door", 0], ["open", c("corelessness is actually experienced", 0.6)], ["open", c("Nothing vivid goes missing", 0.6)], ["grip", c("not ordinary vulnerability", 0.6)],
    ["verify", c("At this depth", 0.6)], ["night", c("Sleep offers an analogy", 0.6)], ["open", c("sealed into a fixed nature", 0.6)],
    ["intimate", c("also intimacy", 0.6)], ["death", c("death looks different", 0.6)], ["verify", c("a single flash", 0.6)],
    ["grip", c("deeper than thought", 0.6)], ["close", c("even the formulas fall away", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("corelessness is actually experienced", 0.9)], <DoorScene />],
    [S("corelessness is actually experienced", "Nothing vivid goes missing"), <OpenScene />],
    [S("Nothing vivid goes missing", "not ordinary vulnerability"), <KernelScene />],
    [S("not ordinary vulnerability", "At this depth"), <GripScene />],
    [S("At this depth", "Sleep offers an analogy"), <DAScene />],
    [S("Sleep offers an analogy", "sealed into a fixed nature"), <SleepScene />],
    [S("sealed into a fixed nature", "also intimacy"), <OpenFutureScene />],
    [S("also intimacy", "death looks different"), <IntimacyScene />],
    [S("death looks different", "a single flash"), <DeathScene />],
    [S("a single flash", "deeper than thought"), <VerifyScene />],
    [S("deeper than thought", "even the formulas fall away"), <BodyScene />],
    [S("even the formulas fall away", null), <CloseScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
