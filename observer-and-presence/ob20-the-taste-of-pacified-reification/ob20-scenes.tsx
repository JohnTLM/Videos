// The Observer and the Taste of Presence, Chapter 20: The Taste of Pacified Reification. Explainer drawings timed to the narration.
// Arc: soft shapes harden, then soften: the habit falls quiet -> reification boxes the flow into separate things; pacified, the
// flow remains -> in the seen only the seen, in the heard only the heard -> two misreadings (isolated flashes, a blank) crossed ->
// a taste: seeing just seeing, no seer behind; hearing just hearing, no hearer behind -> the observer/observed label laid over
// experience, then lifted -> colours vivid, sounds immediate, thoughts unowned -> a sign, not a rung on a ladder; held, it fixes ->
// the witness: a separate subject becomes a thing, or simply the quality of the flow -> the world not denied -> what has gone is
// an addition: a viewer and a ground, "to someone, from somewhere".
// Stance: no awareness or ground is drawn behind things; the ground slab and the viewer appear only to dissolve. Recognition is
// never drawn as climbing; the ladder is crossed. Appearances stay vivid throughout.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, ROSE, Reveal, Ring,
  Scene, SERIF, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "What is it like, from the inside", "the habit of making things solid falls quiet",
  "That habit has a name", "turning what appears into fixed, separate things", "When it is pacified, something remains",
  "An old formulation names it", "In the seen, only the seen", "In the heard, only the heard",
  "These words are sometimes misread", "Some take them to reduce experience", "isolated flashes of sense", "Others take them to describe a blank", "Neither reading fits",
  "The words name a taste", "Seeing is just seeing", "Hearing is just hearing", "No seer stands behind the seeing", "No hearer stands behind the hearing",
  "The gap between observer and observed was a designation", "a label laid over immediate experience", "It was never found in the experience itself",
  "When the labelling stops", "Colours are vivid", "Sounds are immediate", "Thoughts lose their heavy sense of being owned",
  "This taste is a sign", "the reifying habit has been seen through", "It is not a higher stage on a path", "It is recognised",
  "the fixing has returned",
  "The witness shows the difference", "a separate subject standing behind experience", "one more thing with a nature of its own",
  "the vivid, unobstructed quality of the flow", "nobody is doing the tasting",
  "Nor is the taste a denial of the world", "The seen is still seen", "The heard is still heard", "Nothing has been taken out of experience",
  "What has gone is an addition", "a viewer, and a ground", "happening to someone, from somewhere",
];

// Book 4 mood: plum and gold
const M = {
  quiet: { a: "rgba(60,70,140,0.5)", b: "rgba(110,55,120,0.42)", c: "rgba(40,100,130,0.3)" },
  seen: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  label: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  vivid: { a: "rgba(195,150,65,0.48)", b: "rgba(100,55,125,0.44)", c: "rgba(50,135,140,0.32)" },
  sign: { a: "rgba(170,95,70,0.4)", b: "rgba(100,55,125,0.44)", c: "rgba(40,80,120,0.3)" },
};

// ---------------------------------------------------------------- drawings
const Tree: React.FC<{ size?: number; vivid?: number }> = ({ size = 1, vivid = 0 }) => {
  const { t } = useT();
  return (
    <svg width={360 * size} height={440 * size} viewBox="0 0 360 440"
      style={{ overflow: "visible", filter: `drop-shadow(0 0 ${14 + vivid * 26}px ${GREEN}${vivid > 0.5 ? "aa" : "66"}) saturate(${1 + vivid * 0.6})` }}>
      <path d="M170 430 L176 260 Q150 220 120 206 M176 290 Q210 240 246 226 M176 330 L182 430" stroke="#C9A06A" strokeWidth={16} fill="none" strokeLinecap="round" />
      {[[180, 150, 120], [104, 200, 80], [262, 196, 84], [180, 76, 84], [128, 118, 70], [236, 112, 70]].map(([x, y, r], i) => (
        <circle key={i} cx={x + Math.sin(t * 1.3 + i) * 5} cy={y + Math.cos(t * 1.1 + i) * 3} r={r}
          fill={i % 2 ? `${GREEN}55` : `${TEAL}44`} stroke={GREEN} strokeWidth={3} strokeOpacity={0.7} />
      ))}
    </svg>
  );
};

const Waves: React.FC<{ x: number; y: number; o: number; color?: string }> = ({ x, y, o, color = ICE }) => {
  const { t } = useT();
  return (
    <Svg style={{ opacity: o }}>
      {[0, 1, 2, 3].map((i) => {
        const p = ((t * 0.7 + i / 4) % 1);
        const r = 40 + p * 200;
        return <path key={i} d={`M${x + r * Math.cos(-0.7)} ${y + r * Math.sin(-0.7)} A${r} ${r} 0 0 1 ${x + r * Math.cos(0.7)} ${y + r * Math.sin(0.7)}`}
          fill="none" stroke={color} strokeWidth={5} strokeOpacity={1 - p} strokeLinecap="round" />;
      })}
    </Svg>
  );
};

const Eye: React.FC<{ size?: number; color?: string }> = ({ size = 1, color = CHALK }) => (
  <svg width={180 * size} height={100 * size} viewBox="0 0 180 100" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <path d="M6 50 Q90 -10 174 50 Q90 110 6 50 Z" fill={`${color}10`} stroke={color} strokeWidth={5} strokeLinejoin="round" />
    <circle cx={90} cy={50} r={22} fill={`${TEAL}66`} stroke={TEAL} strokeWidth={4} /><circle cx={90} cy={50} r={8} fill={CHALK} />
  </svg>
);

/** A soft shape that can harden into a box (solid 0..1). */
const Blob: React.FC<{ solid: number; color: string; size?: number }> = ({ solid, color, size = 120 }) => (
  <div style={{ width: size, height: size, borderRadius: `${50 - 42 * solid}%`, border: `${3 + 3 * solid}px solid ${solid > 0.5 ? DIM : color}`,
    background: solid > 0.5 ? "linear-gradient(160deg, #8a8a8f, #4b4b52)" : `radial-gradient(circle at 35% 30%, #ffffffaa, ${color} 50%, ${color}44)`,
    boxShadow: `0 0 ${30 * (1 - solid) + 6}px ${color}88` }} />
);

/** A row of appearances flowing to the right (o 0..1, boxed 0..1 puts a wall around each). */
const FlowRow: React.FC<{ y: number; o: number; boxed?: number; x0?: number; x1?: number; n?: number; sparkle?: number }> =
  ({ y, o, boxed = 0, x0 = 260, x1 = 1660, n = 7, sparkle = 0 }) => {
    const { t } = useT();
    const cols = [TEAL, ROSE, GOLD, ICE, VIOLET, GREEN];
    const span = x1 - x0;
    return (
      <>
        {Array.from({ length: n }).map((_, i) => {
          const x = x0 + ((i / n) * span + t * 60 * (1 - boxed)) % span;
          const edge = Math.min(1, (x - x0) / 80, (x1 - x) / 80);
          return (
            <At key={i} x={x} y={y + Math.sin(t * 1.5 + i) * 14 * (1 - boxed)} o={o * Math.max(0, edge)} s={1 + sparkle * 0.08 * Math.sin(t * 4 + i)}>
              <div style={{ position: "relative" }}>
                <Orb size={70} color={cols[i % cols.length]} />
                {boxed > 0 && <div style={{ position: "absolute", left: -18, top: -18, width: 106, height: 106, border: `4px solid ${DIM}`, borderRadius: 8, opacity: boxed,
                  background: `#20202a${Math.round(boxed * 0x66).toString(16).padStart(2, "0")}` }} />}
              </div>
            </At>
          );
        })}
      </>
    );
  };

const Ghost: React.FC<{ o: number; color?: string; size?: number }> = ({ o, color = DIM, size = 1 }) => (
  <svg width={180 * size} height={300 * size} viewBox="0 0 180 300" style={{ overflow: "visible", opacity: o }}>
    <circle cx={90} cy={70} r={48} fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
    <path d="M20 290 Q20 150 90 140 Q160 150 160 290" fill="none" stroke={color} strokeWidth={4} strokeDasharray="12 10" />
  </svg>
);

const Bubble: React.FC<{ size?: number; color?: string }> = ({ size = 70, color = VIOLET }) => (
  <div style={{ width: size, height: size * 0.78, borderRadius: "50%", border: `3px solid ${color}`, background: `${color}26`, boxShadow: `0 0 18px ${color}66` }} />
);

const Claws: React.FC<{ open: number; color?: string }> = ({ open, color = WARM }) => (
  <svg width={360} height={300} viewBox="-180 -150 360 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color})` }}>
    <g transform={`rotate(${-50 * open} -60 0) translate(${-60 * open} 0)`}><path d="M-40 -120 Q-150 0 -40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
    <g transform={`rotate(${50 * open} 60 0) translate(${60 * open} 0)`}><path d="M40 -120 Q150 0 40 120" fill="none" stroke={color} strokeWidth={10} strokeLinecap="round" /></g>
  </svg>
);

/** A slab drawn only so it can be dissolved (gone 0..1). */
const Slab: React.FC<{ w: number; label: string; gone: number }> = ({ w, label, gone }) => (
  <div style={{ width: w, height: 70, borderRadius: 10, opacity: 1 - gone, filter: gone > 0.02 ? `blur(${gone * 14}px)` : undefined,
    background: `linear-gradient(180deg, ${VIOLET}55, #2a1838)`, border: `3px dashed ${DIM}`, display: "flex", alignItems: "center",
    justifyContent: "center", fontFamily: SERIF, fontSize: 30, color: CHALK }}>{label}</div>
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

// ---------------------------------------------------------------- scenes
const QuietScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ins = c("What is it like, from the inside"), quiet = c("the habit of making things solid falls quiet");
  const solid = Math.min(ramp(t, quiet + 0.2, 1.0), 1 - ramp(t, quiet + 2.4, 1.4));
  const cols = [TEAL, ROSE, GOLD, VIOLET, ICE];
  return (
    <AbsoluteFill>
      <Head text="from the inside" at={ins + 0.2} y={110} size={74} />
      {cols.map((col, i) => (
        <At key={i} x={460 + i * 250} y={480 + Math.sin(t * 1.2 + i) * 30 * (1 - solid)} s={pop(t, fps, ins + 0.6 + i * 0.2)}>
          <Blob solid={solid} color={col} size={130} />
        </At>
      ))}
      <At x={960} y={720} o={ramp(t, quiet + 0.4, 0.5)}><Glow color={DIM} size={32}>making things solid…</Glow></At>
      <At x={960} y={790} o={ramp(t, quiet + 2.6, 0.6)}><Glow color={GOLD} size={36} serif>…falls quiet</Glow></At>
    </AbsoluteFill>
  );
};

const HabitScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const name = c("That habit has a name"), fix = c("turning what appears into fixed, separate things"), pac = c("When it is pacified, something remains");
  const boxed = Math.min(ramp(t, fix + 0.6, 1.2), 1 - ramp(t, pac + 0.2, 1.4));
  return (
    <AbsoluteFill>
      <At x={960} y={140} s={pop(t, fps, name + 0.5)}><Glow color={GOLD} size={70} serif>reification</Glow></At>
      <FlowRow y={460} o={ramp(t, name + 0.8, 0.8)} boxed={boxed} />
      <At x={960} y={640} o={ramp(t, fix + 0.8, 0.5) * (1 - ramp(t, pac, 0.5))}><Chip color={DIM} size={32}>fixed, separate things</Chip></At>
      <At x={960} y={640} o={ramp(t, pac + 0.5, 0.5)}><Chip color={GREEN} size={32}>pacified: something remains</Chip></At>
    </AbsoluteFill>
  );
};

const FormulaScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const old = c("An old formulation names it"), seen = c("In the seen, only the seen"), heard = c("In the heard, only the heard");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, old, 0.5)}><Glow color={DIM} size={34}>an old formulation</Glow></At>
      <At x={960} y={420} s={pop(t, fps, old + 0.6)} o={1 - ramp(t, seen - 0.8, 0.5)}>
        <svg width={640} height={150} viewBox="0 0 640 150" style={{ overflow: "visible", filter: `drop-shadow(0 0 12px ${GOLD}66)` }}>
          <rect x={10} y={20} width={620} height={110} rx={55} fill="#6b4a2e88" stroke={GOLD} strokeWidth={4} />
          <circle cx={320} cy={75} r={8} fill="none" stroke={GOLD} strokeWidth={3} />
          {[0, 1, 2].map((i) => (
            <React.Fragment key={i}>
              <DrawPath d={`M70 ${52 + i * 23} L280 ${52 + i * 23}`} p={ramp(t, old + 1.0 + i * 0.4, 0.6)} color={CHALK} width={3} len={220} glow={false} />
              <DrawPath d={`M360 ${52 + i * 23} L570 ${52 + i * 23}`} p={ramp(t, old + 1.6 + i * 0.4, 0.6)} color={CHALK} width={3} len={220} glow={false} />
            </React.Fragment>
          ))}
        </svg>
      </At>
      <At x={560} y={400} s={pop(t, fps, seen - 0.3)}><Tree size={0.75} vivid={ramp(t, seen, 1)} /></At>
      <At x={560} y={680} o={ramp(t, seen, 0.3)}><Reveal text="in the seen, only the seen" at={seen} size={50} /></At>
      <At x={1340} y={400} s={pop(t, fps, heard - 0.3)}><Orb size={110} color={ICE} /></At>
      <Waves x={1400} y={400} o={ramp(t, heard, 0.6)} />
      <At x={1340} y={680} o={ramp(t, heard, 0.3)}><Reveal text="in the heard, only the heard" at={heard} size={50} color={ICE} /></At>
    </AbsoluteFill>
  );
};

const MisreadScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mis = c("These words are sometimes misread"), some = c("Some take them to reduce experience"), fl = c("isolated flashes of sense"), bl = c("Others take them to describe a blank");
  const nf = c("Neither reading fits");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, mis, 0.5)}><Glow color={CHALK} size={44} serif>two misreadings</Glow></At>
      <At x={560} y={420} o={ramp(t, some, 0.5)}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 120px)", gap: 24 }}>
          {Array.from({ length: 6 }).map((_, i) => {
            const on = Math.max(0, Math.sin(t * 5 + i * 2.1)) ** 6;
            return <div key={i} style={{ width: 120, height: 120, borderRadius: 8, background: "#0d0d14", border: `2px solid ${DIM}55`, display: "flex",
              alignItems: "center", justifyContent: "center" }}><div style={{ width: 40, height: 40, borderRadius: "50%", background: [GOLD, TEAL, ROSE][i % 3],
              opacity: on, boxShadow: `0 0 30px ${[GOLD, TEAL, ROSE][i % 3]}` }} /></div>;
          })}
        </div>
      </At>
      <Struck x={560} y={680} at={fl} strikeAt={nf + 0.2} color={GOLD} size={32}>isolated flashes</Struck>
      <At x={1360} y={420} s={pop(t, fps, bl)}>
        <div style={{ width: 420, height: 264, borderRadius: 12, background: "#2a2a30", border: `3px dashed ${DIM}` }} />
      </At>
      <Struck x={1360} y={680} at={bl + 0.3} strikeAt={nf + 0.6} color={DIM} size={32}>a blank</Struck>
      <At x={960} y={800} o={ramp(t, nf + 0.6, 0.5)}><Glow color={WARM} size={34}>neither fits</Glow></At>
    </AbsoluteFill>
  );
};

const TasteScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const taste = c("The words name a taste"), see = c("Seeing is just seeing"), hear = c("Hearing is just hearing");
  const seer = c("No seer stands behind the seeing"), hearer = c("No hearer stands behind the hearing");
  return (
    <AbsoluteFill>
      <Head text="a taste" at={taste} y={90} size={80} />
      <At x={360} y={430} o={ramp(t, seer - 0.2, 0.5) * (1 - ramp(t, seer + 1.6, 0.8))}><Ghost o={1} size={0.8} /></At>
      <Crossed x={360} y={430} at={seer + 0.6} size={90} />
      <At x={560} y={430} s={pop(t, fps, see)}><Eye size={0.9} /></At>
      <Flow x1={660} y1={430} x2={780} y2={430} color={GOLD} p={ramp(t, see + 0.3, 0.5)} />
      <At x={880} y={430} s={pop(t, fps, see + 0.3)}><Tree size={0.5} vivid={1} /></At>
      <At x={700} y={620} o={ramp(t, see + 0.6, 0.5)}><Chip color={TEAL} size={32}>just seeing</Chip></At>
      <At x={1180} y={430} o={ramp(t, hearer - 0.2, 0.5) * (1 - ramp(t, hearer + 1.6, 0.8))}><Ghost o={1} size={0.8} /></At>
      <Crossed x={1180} y={430} at={hearer + 0.6} size={90} />
      <At x={1440} y={430} s={pop(t, fps, hear)}><Orb size={100} color={ICE} /></At>
      <Waves x={1500} y={430} o={ramp(t, hear + 0.2, 0.5)} />
      <At x={1480} y={620} o={ramp(t, hear + 0.6, 0.5)}><Chip color={ICE} size={32}>just hearing</Chip></At>
      <At x={960} y={780} o={ramp(t, hearer + 1.0, 0.5)}><Glow color={DIM} size={32}>no one behind either</Glow></At>
    </AbsoluteFill>
  );
};

const LabelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gap = c("The gap between observer and observed was a designation"), lab = c("a label laid over immediate experience");
  const nf = c("It was never found in the experience itself");
  const down = ramp(t, lab, 1.2), lift = ramp(t, nf + 0.6, 1.4);
  const ly = -120 + 470 * down - 520 * lift;
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, gap, 0.5)}><Glow color={CHALK} size={42} serif>observer · observed</Glow></At>
      <At x={640} y={480} s={pop(t, fps, gap + 0.4)}><Tree size={0.7} vivid={1} /></At>
      <At x={1280} y={480} s={pop(t, fps, gap + 0.7)}><Orb size={110} color={ICE} /></At>
      <Waves x={1340} y={480} o={ramp(t, gap + 0.9, 0.5)} />
      <At x={960} y={250} o={ramp(t, gap + 1.4, 0.5) * (1 - lift)}><Chip color={ROSE} size={30}>a designation</Chip></At>
      <Svg><line x1={960} y1={ly - 260} x2={960} y2={ly - 40} stroke={GOLD} strokeWidth={3} opacity={ramp(t, lab, 0.3) * (1 - lift)} /></Svg>
      <At x={960} y={ly} o={ramp(t, lab, 0.3) * (1 - lift)} r={Math.sin(t * 1.6) * 4}>
        <div style={{ padding: "18px 36px", borderRadius: 12, border: `4px solid ${GOLD}`, background: "#3a2a1dcc", fontFamily: SERIF, fontSize: 40, color: CHALK,
          boxShadow: `0 0 30px ${GOLD}66` }}>observer | observed</div>
      </At>
      <At x={960} y={780} o={ramp(t, nf, 0.5)}><Chip color={GREEN} size={32}>never found in the experience</Chip></At>
    </AbsoluteFill>
  );
};

const VividScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const stop = c("When the labelling stops"), col = c("Colours are vivid"), snd = c("Sounds are immediate");
  const own = c("Thoughts lose their heavy sense of being owned");
  const drop = ramp(t, own + 1.0, 1.0);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, stop, 0.5)}><Glow color={GOLD} size={46} serif>the labelling stops</Glow></At>
      {["sky", "rose", "lamp"].map((w, i) => {
        const g = ramp(t, stop + 0.8 + i * 0.2, 1.2);
        return <At key={w} x={300 + i * 140} y={250} o={ramp(t, stop - 0.2, 0.3) * (1 - g)} blur={g * 12}><Chip color={DIM} size={28}>{w}</Chip></At>;
      })}
      {[TEAL, ROSE, GOLD, VIOLET, GREEN].map((cc, i) => (
        <At key={i} x={300 + (i % 3) * 140 + (i > 2 ? 70 : 0)} y={360 + (i > 2 ? 150 : 0)} s={pop(t, fps, stop + 1.4 + i * 0.15) * (1 + 0.06 * Math.sin(t * 2 + i))}>
          <Orb size={120} color={cc} />
        </At>
      ))}
      <At x={440} y={680} o={ramp(t, col + 0.4, 0.5)}><Chip color={ROSE} size={32}>colours, vivid</Chip></At>
      <At x={960} y={420} s={pop(t, fps, snd)}><Orb size={90} color={ICE} /></At>
      <Waves x={1010} y={420} o={ramp(t, snd + 0.2, 0.5)} />
      <At x={960} y={680} o={ramp(t, snd + 0.4, 0.5)}><Chip color={ICE} size={32}>sounds, immediate</Chip></At>
      <At x={1500} y={380 - 60 * drop + Math.sin(t * 1.4) * 10 * drop} s={pop(t, fps, own)}><Bubble size={160} color={VIOLET} /></At>
      <At x={1500} y={480 + 260 * drop} o={ramp(t, own + 0.2, 0.4) * (1 - drop * 0.9)}>
        <div style={{ padding: "8px 20px", borderRadius: 8, background: "linear-gradient(180deg, #8a8a8f, #4b4b52)", border: `3px solid ${DIM}`,
          fontFamily: SERIF, fontSize: 32, color: CHALK }}>mine</div>
      </At>
      <At x={1500} y={680} o={ramp(t, own + 1.6, 0.5)}><Chip color={VIOLET} size={32}>thoughts, unowned</Chip></At>
    </AbsoluteFill>
  );
};

const SignScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sign = c("This taste is a sign"), thr = c("the reifying habit has been seen through"), stage = c("It is not a higher stage on a path");
  const rec = c("It is recognised"), fix = c("the fixing has returned");
  const grip = ramp(t, fix - 0.6, 0.8);
  return (
    <AbsoluteFill>
      <At x={420} y={340} s={pop(t, fps, sign)}>
        <svg width={220} height={300} viewBox="0 0 220 300" style={{ overflow: "visible", filter: `drop-shadow(0 0 10px ${GOLD})` }}>
          <line x1={110} y1={60} x2={110} y2={300} stroke="#C9A06A" strokeWidth={12} strokeLinecap="round" />
          <path d="M20 40 L180 40 L210 80 L180 120 L20 120 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
        </svg>
      </At>
      <At x={420} y={290} o={ramp(t, sign + 0.3, 0.5)}><Glow color={CHALK} size={30}>a sign</Glow></At>
      <At x={420} y={600} o={ramp(t, thr, 0.5)}><Chip color={GOLD} size={28}>the habit, seen through</Chip></At>
      <At x={960} y={400} o={ramp(t, stage - 0.2, 0.5)}>
        <svg width={200} height={420} viewBox="0 0 200 420" style={{ overflow: "visible" }}>
          <line x1={40} y1={10} x2={40} y2={410} stroke={DIM} strokeWidth={8} /><line x1={160} y1={10} x2={160} y2={410} stroke={DIM} strokeWidth={8} />
          {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={40} y1={40 + i * 70} x2={160} y2={40 + i * 70} stroke={DIM} strokeWidth={6} />)}
        </svg>
      </At>
      <At x={960} y={170} o={ramp(t, stage + 0.4, 0.4)}><Glow color={DIM} size={28}>a higher stage?</Glow></At>
      <Crossed x={960} y={400} at={stage + 1.4} size={150} />
      <At x={1460} y={420} s={pop(t, fps, rec)} o={1 - grip * 0.3}>
        <div style={{ position: "relative", width: 300, height: 120 }}>
          {[TEAL, ROSE, GOLD].map((cc, i) => <div key={i} style={{ position: "absolute", left: 30 + i * 90, top: 30 + Math.sin(t * 2 + i) * 8 }}><Orb size={60} color={cc} /></div>)}
        </div>
      </At>
      <At x={1460} y={560} o={ramp(t, rec + 0.3, 0.5)}><Chip color={GREEN} size={30}>recognised, here</Chip></At>
      <At x={1460} y={420} o={grip}><Claws open={0.05} /></At>
      <At x={1460} y={680} o={ramp(t, fix, 0.5)}><Glow color={WARM} size={30}>kept as a prize: fixing again</Glow></At>
    </AbsoluteFill>
  );
};

const WitnessScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const diff = c("The witness shows the difference"), sep = c("a separate subject standing behind experience"), nat = c("one more thing with a nature of its own");
  const qual = c("the vivid, unobstructed quality of the flow"), nob = c("nobody is doing the tasting");
  const solid = ramp(t, nat, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={100} o={ramp(t, diff, 0.5)}><Glow color={CHALK} size={42} serif>the witness: two readings</Glow></At>
      <FlowRow y={330} o={ramp(t, sep - 0.2, 0.6)} x0={160} x1={860} n={5} />
      <At x={510} y={560} o={ramp(t, sep, 0.6) * (1 - solid)}><Ghost o={1} size={0.8} /></At>
      <At x={510} y={560} o={solid}>
        <div style={{ width: 170, height: 200, borderRadius: 10, background: "linear-gradient(160deg, #8a8a8f, #4b4b52)", border: `4px solid ${DIM}` }} />
      </At>
      <At x={510} y={780} o={ramp(t, nat + 0.4, 0.5)}><Glow color={WARM} size={28}>a nature of its own</Glow></At>
      <Crossed x={510} y={560} at={nat + 1.8} size={100} />
      <FlowRow y={330} o={ramp(t, qual - 0.2, 0.6)} x0={1060} x1={1760} n={5} sparkle={1} />
      <At x={1410} y={520} s={pop(t, fps, qual + 0.4)}><Chip color={GOLD} size={30}>vivid, unobstructed: the flow</Chip></At>
      <At x={1410} y={660} o={ramp(t, nob, 0.5)}><Chip color={GREEN} size={30}>nobody tasting, nobody seeing</Chip></At>
    </AbsoluteFill>
  );
};

const WorldScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const den = c("Nor is the taste a denial of the world"), seen = c("The seen is still seen"), heard = c("The heard is still heard");
  const not = c("Nothing has been taken out of experience");
  return (
    <AbsoluteFill>
      <Struck x={960} y={130} at={den} strikeAt={den + 1.6} color={WARM} size={38}>denying the world</Struck>
      <At x={620} y={430} s={pop(t, fps, seen)}><Tree size={0.75} vivid={1} /></At>
      <At x={780} y={620} o={ramp(t, seen + 0.3, 0.4)}><Tick at={seen + 0.4} /></At>
      <At x={1300} y={430} s={pop(t, fps, heard)}><Orb size={110} color={ICE} /></At>
      <Waves x={1360} y={430} o={ramp(t, heard + 0.2, 0.5)} />
      <At x={1300} y={620} o={ramp(t, heard + 0.3, 0.4)}><Tick at={heard + 0.4} /></At>
      <At x={960} y={780} s={pop(t, fps, not)}><Chip color={GREEN} size={36}>nothing taken out</Chip></At>
    </AbsoluteFill>
  );
};

const AdditionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const add = c("What has gone is an addition"), vg = c("a viewer, and a ground"), som = c("happening to someone, from somewhere");
  const gone = ramp(t, vg + 1.6, 1.6), arrowsGone = ramp(t, som + 1.8, 1.4);
  return (
    <AbsoluteFill>
      <At x={960} y={110} s={pop(t, fps, add)}><Glow color={GOLD} size={46} serif>gone: only an addition</Glow></At>
      <At x={1000} y={430}><Tree size={0.7} vivid={1} /></At>
      <At x={1440} y={430}><Orb size={100} color={ICE} /></At>
      <Waves x={1500} y={430} o={1} />
      <At x={520} y={430} o={ramp(t, vg, 0.5) * (1 - gone)} blur={gone * 8}><Ghost o={1} size={0.9} /></At>
      <At x={520} y={220} o={ramp(t, vg + 0.2, 0.5) * (1 - gone)}><Glow color={DIM} size={30}>+ a viewer</Glow></At>
      <At x={960} y={690} o={ramp(t, vg + 0.7, 0.5)}><Slab w={1300} label="+ a ground" gone={gone} /></At>
      {[[1000, 330], [1440, 430], [900, 600]].map(([x, y], i) => (
        <Flow key={i} x1={x - 60} y1={y} x2={560} y2={400} color={ROSE} p={ramp(t, som + i * 0.2, 0.6) * (1 - arrowsGone)} dash pulses={false} />
      ))}
      <At x={560} y={620} o={ramp(t, som + 0.3, 0.5) * (1 - arrowsGone)}><Glow color={ROSE} size={30}>to someone, from somewhere</Glow></At>
      <At x={960} y={800} o={ramp(t, som + 2.6, 0.6)}><Glow color={GREEN} size={34}>the seen and heard remain</Glow></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["quiet", 0], ["seen", c("An old formulation names it", 0.6)], ["label", c("The gap between observer and observed was a designation", 0.6)],
    ["vivid", c("When the labelling stops", 0.6)], ["sign", c("This taste is a sign", 0.6)], ["label", c("The witness shows the difference", 0.6)],
    ["vivid", c("Nor is the taste a denial of the world", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("That habit has a name", 0.9)], <QuietScene />],
    [S("That habit has a name", "An old formulation names it"), <HabitScene />],
    [S("An old formulation names it", "These words are sometimes misread"), <FormulaScene />],
    [S("These words are sometimes misread", "The words name a taste"), <MisreadScene />],
    [S("The words name a taste", "The gap between observer and observed was a designation"), <TasteScene />],
    [S("The gap between observer and observed was a designation", "When the labelling stops"), <LabelScene />],
    [S("When the labelling stops", "This taste is a sign"), <VividScene />],
    [S("This taste is a sign", "The witness shows the difference"), <SignScene />],
    [S("The witness shows the difference", "Nor is the taste a denial of the world"), <WitnessScene />],
    [S("Nor is the taste a denial of the world", "What has gone is an addition"), <WorldScene />],
    [S("What has gone is an addition", null), <AdditionScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
