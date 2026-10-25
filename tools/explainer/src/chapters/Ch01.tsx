// Chapter 1: The Substantialist Misconception. Explainer drawings timed to the narration.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, Hand, ICE, IceCube, Mist, Mood, Orb, Phone,
  PictureFrame, ROSE, Reveal, Ring, Scene, SERIF, Snowflake, Strike, Sun, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "Pick up your phone", "cool against the palm", "screen is bright", "Nothing could seem more plainly real", "Not on the light",
  "not on your hand", "not on the word", "It seems simply to be there", "from its own side",
  "Or touch a cube of ice", "The cold is in the ice", "beyond question", "The hand only discovers", "already has", "We feel it",
  "Philosophers call this view", "substantialism", "Things come first", "its own nature", "Relations come second", "self-standing nouns",
  "secondary verbs", "But substantialism is not first", "a way of perceiving", "innate grasping", "the felt sense", "present in animals",
  "infants", "in philosophers too",
  "You might say", "whether a table exists", "people will say of course not", "made in a factory", "it will rot",
  "what we say we believe", "found in what we assume", "It lives in the pictures", "without being noticed",
  "We picture space", "Take away every star", "the room would still be there", "no one has ever met that room", "We meet distance",
  "the reach of an arm", "the gap a car needs",
  "We picture time", "flowing whether anything happens", "no one has met time", "by the sun", "the year by the seasons", "a life by its ageing",
  "We picture rebirth", "moving from life to life", "house to house", "the Buddha rejected", "Consciousness, he taught",
  "arises in dependence on conditions", "Apart from conditions", "no arising of consciousness",
  "So yes", "We do think inherently", "Not in our stated beliefs", "but in the pictures",
  "Dependent arising reverses", "A thing is identified", "not first established by itself", "Its identity", "its boundary", "its function",
  "that dependence, too, is designated", "not a deeper ground",
  "Nor does relation now come first", "Relation and the things related", "designated together", "within the framework",
  "Think of a flame", "or a whirlpool", "not a solid object", "recognized and named", "amid changing conditions", "So are tables",
  "our own experiences",
  "Nothing is lost", "The phone still rings", "Ice is still cold", "still counts its molecules", "the further claim", "rest on an essence",
  "The phone in your hand", "Only the habit of seeing",
];

const M = {
  phone: { a: "rgba(30,110,130,0.55)", b: "rgba(110,60,170,0.5)", c: "rgba(150,110,50,0.35)" },
  ice: { a: "rgba(30,150,190,0.55)", b: "rgba(60,80,160,0.35)", c: "rgba(120,170,200,0.2)" },
  subst: { a: "rgba(90,60,160,0.5)", b: "rgba(150,110,50,0.4)", c: "rgba(40,90,120,0.3)" },
  table: { a: "rgba(140,70,90,0.4)", b: "rgba(90,60,160,0.45)", c: "rgba(150,110,50,0.35)" },
  space: { a: "rgba(40,40,120,0.5)", b: "rgba(80,40,140,0.45)", c: "rgba(30,60,110,0.3)" },
  time: { a: "rgba(30,120,140,0.55)", b: "rgba(40,80,160,0.45)", c: "rgba(150,120,60,0.3)" },
  rebirth: { a: "rgba(160,90,50,0.45)", b: "rgba(140,60,100,0.45)", c: "rgba(170,130,60,0.35)" },
  recap: { a: "rgba(90,60,160,0.45)", b: "rgba(150,110,50,0.4)", c: "rgba(30,110,130,0.35)" },
  dep: { a: "rgba(30,120,130,0.5)", b: "rgba(150,120,50,0.45)", c: "rgba(80,60,150,0.3)" },
  flame: { a: "rgba(170,90,40,0.5)", b: "rgba(40,90,160,0.45)", c: "rgba(150,110,50,0.35)" },
  lost: { a: "rgba(30,110,130,0.5)", b: "rgba(110,60,170,0.45)", c: "rgba(170,130,60,0.4)" },
};

// ---------------------------------------------------------------- 1-2. the phone
const PhoneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cx = 960, cy = 440;
  const enter = pop(t, fps, c("Pick up your phone"), 14);
  const screen = ramp(t, c("screen is bright"), 1.2);
  const pulse = ramp(t, c("Nothing could seem more plainly real"), 1.6);
  const depsOut = ramp(t, c("It seems simply to be there"), 1.0);
  const aura = ramp(t, c("It seems simply to be there") + 0.3, 1.6);
  const deps = [
    { at: c("Not on the light", 0.1), x: 420, y: 230, color: GOLD, label: "light", icon: <Sun size={150} rot={t * 20} /> },
    { at: c("not on your hand", 0.1), x: 400, y: 680, color: ROSE, label: "your hand", icon: <Hand size={140} /> },
    { at: c("not on the word", 0.1), x: 1530, y: 420, color: VIOLET, label: "the word",
      icon: <div style={{ fontFamily: SERIF, fontSize: 64, color: CHALK, padding: "10px 28px", borderRadius: 18, border: `2px solid ${VIOLET}`,
        background: "rgba(155,123,255,0.15)", boxShadow: `0 0 30px ${VIOLET}88` }}>“phone”</div> },
  ];
  return (
    <AbsoluteFill>
      {deps.map((d, i) => {
        const p = ramp(t, d.at, 0.7) * (1 - depsOut);
        const s = pop(t, fps, d.at, 10);
        return (
          <React.Fragment key={i}>
            <Flow x1={d.x} y1={d.y} x2={cx + (d.x - cx) * 0.25} y2={cy + (d.y - cy) * 0.25} color={d.color} p={p} />
            <At x={d.x} y={d.y} s={s * (1 - depsOut * 0.5)} o={(1 - depsOut) * Math.min(1, s)} blur={depsOut * 14}>
              {d.icon}<Glow color={d.color} size={34} style={{ marginTop: 6 }}>{d.label}</Glow>
            </At>
          </React.Fragment>
        );
      })}
      <At x={cx} y={cy} o={aura}><div style={{ width: 840, height: 840, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}55 0%, ${GOLD}18 40%, transparent 70%)` }} /></At>
      <Ring x={cx} y={cy} p={pulse} r0={150} r1={520} color={GOLD} />
      <At x={cx} y={cy} s={0.6 + 0.4 * enter} o={Math.min(1, enter * 1.4)}><Phone screen={screen} rim={aura > 0.2 ? GOLD : TEAL} /></At>
      <At x={560} y={330} s={pop(t, fps, c("cool against the palm"))} o={between(t, c("cool against the palm"), c("Nothing could seem more plainly real"))}>
        <Snowflake size={130} rot={t * 40} /><Glow color={ICE} size={44}>cool</Glow>
      </At>
      <div style={{ position: "absolute", left: 1170, top: 400 }}><Reveal text="from its own side" at={c("from its own side")} size={78} /></div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 3. the ice
const IceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const cx = 760, cy = 430;
  const t0 = c("Or touch a cube of ice");
  const enter = pop(t, fps, t0, 13);
  const flash = between(t, c("beyond question"), c("beyond question") + 0.9, 0.4);
  const handAt = c("The hand only discovers");
  const arrow = ramp(t, handAt, 0.9);
  return (
    <AbsoluteFill style={{ transform: `scale(${1 + ramp(t, c("We feel it"), 4.5) * 0.05})` }}>
      <Mist x={cx} y={cy + 140} start={t0 + 0.8} />
      <At x={cx} y={cy} s={enter}><IceCube size={300} spin={(t - t0) * 9} flash={flash} /></At>
      <At x={cx} y={cy} s={pop(t, fps, c("The cold is in the ice"))} o={ramp(t, c("The cold is in the ice"), 0.4)}>
        <Glow color={ICE} size={70} serif style={{ color: "#FFFFFF" }}>cold</Glow>
      </At>
      <Ring x={cx} y={cy} p={ramp(t, c("already has"), 1.4)} r0={130} r1={220} color={GOLD} width={4} />
      <Flow x1={1430} y1={cy} x2={cx + 260} y2={cy} color={ROSE} p={arrow} />
      <Svg><polygon points={`${cx + 240},${cy} ${cx + 275},${cy - 18} ${cx + 275},${cy + 18}`} fill={ROSE} opacity={ramp(t, handAt + 0.7, 0.3)} /></Svg>
      <At x={1545} y={cy} s={pop(t, fps, handAt, 11)}><Hand size={150} /><Glow color={ROSE} size={36}>hand</Glow></At>
      <At x={1120} y={cy - 50} o={ramp(t, handAt + 0.5, 0.5)}><Glow color={CHALK} size={34}>discovers</Glow></At>
      <div style={{ position: "absolute", top: 700, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="felt, not worked out" at={c("We feel it")} size={70} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 4-5. substantialism
const Paw: React.FC = () => (
  <svg width={90} height={90} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${GOLD})` }}>
    <ellipse cx={50} cy={66} rx={22} ry={18} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
    {[[22, 40], [40, 24], [60, 24], [78, 40]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={9} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />)}
  </svg>
);
const Infant: React.FC = () => (
  <svg width={90} height={90} viewBox="0 0 100 100" style={{ filter: `drop-shadow(0 0 8px ${ROSE})` }}>
    <circle cx={50} cy={54} r={32} fill={`${ROSE}33`} stroke={ROSE} strokeWidth={3} />
    <path d="M50 22 C 44 12, 58 10, 56 18" fill="none" stroke={ROSE} strokeWidth={3} />
    <circle cx={40} cy={52} r={3} fill={ROSE} /><circle cx={60} cy={52} r={3} fill={ROSE} />
    <path d="M42 66 Q50 72 58 66" fill="none" stroke={ROSE} strokeWidth={3} />
  </svg>
);
const Book: React.FC = () => (
  <svg width={100} height={90} viewBox="0 0 110 100" style={{ filter: `drop-shadow(0 0 8px ${TEAL})` }}>
    <path d="M55 25 C 40 15, 20 15, 8 20 L8 80 C 20 75, 40 75, 55 85 C 70 75, 90 75, 102 80 L102 20 C 90 15, 70 15, 55 25 Z M55 25 L55 85"
      fill={`${TEAL}22`} stroke={TEAL} strokeWidth={3} strokeLinejoin="round" />
  </svg>
);

const SubstScene: React.FC<{ partB: number }> = ({ partB }) => {
  const { t, fps } = useT();
  const c = useCue();
  const pts = [[560, 480], [960, 330], [1360, 500]];
  const first = c("Things come first"), second = c("Relations come second");
  const core = ramp(t, c("its own nature"), 0.8);
  const nouns = ramp(t, c("self-standing nouns"), 0.6), verbs = ramp(t, c("secondary verbs"), 0.6);
  const pairs = [[0, 1], [1, 2], [0, 2]];
  const shorten = (a: number[], b: number[], k: number) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy);
    return [a[0] + dx * k / L, a[1] + dy * k / L, b[0] - dx * k / L, b[1] - dy * k / L];
  };
  const way = c("a way of perceiving");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="Substantialism" at={c("substantialism")} size={96} />
      </div>
      <Scene from={c("Philosophers call this view", 0.4)} to={partB - 0.7}>
        {pairs.map(([i, j], k) => {
          const [x1, y1, x2, y2] = shorten(pts[i], pts[j], 80);
          return <Flow key={k} x1={x1} y1={y1} x2={x2} y2={y2} color={VIOLET} p={ramp(t, second + k * 0.25, 0.8)} />;
        })}
        {pts.map(([x, y], i) => (
          <React.Fragment key={i}>
            <At x={x} y={y} s={pop(t, fps, first + i * 0.18)}><Orb size={130} color={TEAL} core={core} /></At>
            <At x={x} y={y + 105} o={nouns}><Glow color={TEAL} size={32}>noun</Glow></At>
          </React.Fragment>
        ))}
        {pairs.map(([i, j], k) => (
          <At key={k} x={(pts[i][0] + pts[j][0]) / 2} y={(pts[i][1] + pts[j][1]) / 2 - (k === 2 ? -10 : 34)} o={verbs}>
            <Chip color={VIOLET} size={26}>verb</Chip>
          </At>
        ))}
        <At x={330} y={260} o={ramp(t, first, 0.6)}><Chip color={GOLD}>1st · things</Chip></At>
        <At x={1600} y={260} o={ramp(t, second, 0.6)}><Chip color={VIOLET}>2nd · relations</Chip></At>
      </Scene>
      <Scene from={partB - 0.4} to={1e9}>
        <At x={620} y={320}><div style={{ position: "relative" }}><Glow color={CHALK} size={56}>a theory</Glow><Strike at={way - 0.2} /></div></At>
        <div style={{ position: "absolute", left: 950, top: 280 }}><Reveal text="a way of perceiving" at={way} size={66} color={ICE} top="#F0FBFF" /></div>
        <div style={{ position: "absolute", top: 410, width: "100%", display: "flex", justifyContent: "center" }}>
          <Reveal text="innate grasping" at={c("innate grasping")} size={110} />
        </div>
        <At x={960} y={580} o={ramp(t, c("the felt sense"), 0.8)}>
          <Glow color={CHALK} size={38}>the felt sense that things are there from their own side</Glow>
        </At>
        {[["present in animals", <Paw />, "animals", 600], ["infants", <Infant />, "infants", 960], ["in philosophers too", <Book />, "philosophers", 1320]].map(
          ([ph, icon, lab, x], i) => (
            <At key={i} x={x as number} y={720} s={pop(t, fps, c(ph as string, 0.15))}>
              {icon}<Glow color={DIM} size={28}>{lab as string}</Glow>
            </At>
          ))}
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 6-7. the table, what we say vs assume
const Factory: React.FC = () => (
  <svg width={170} height={140} viewBox="0 0 170 140" style={{ filter: `drop-shadow(0 0 8px ${DIM})` }}>
    <path d="M10 130 L10 70 L50 50 L50 70 L90 50 L90 70 L130 50 L130 130 Z" fill="#ffffff10" stroke={CHALK} strokeWidth={3} strokeLinejoin="round" />
    <rect x={135} y={20} width={22} height={110} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    {[30, 70, 110].map((x) => <rect key={x} x={x - 8} y={95} width={16} height={16} fill={`${GOLD}88`} />)}
  </svg>
);
const Table: React.FC<{ rot?: number }> = ({ rot = 0 }) => {
  const wood = rot > 0 ? "#6b5a3a" : "#b98a55";
  return (
    <svg width={640} height={260} viewBox="0 0 640 260" style={{ filter: `drop-shadow(0 0 16px ${GOLD}55)` }}>
      <defs><linearGradient id="wood" x1="0" x2="1"><stop offset="0" stopColor={wood} /><stop offset="0.5" stopColor="#d8a96a" /><stop offset="1" stopColor={wood} /></linearGradient></defs>
      <polygon points="80,30 560,30 620,80 20,80" fill="url(#wood)" stroke={GOLD} strokeWidth={3} />
      <rect x={20} y={80} width={600} height={22} fill="#7a5a35" stroke={GOLD} strokeWidth={2} />
      {[50, 570].map((x) => <rect key={x} x={x} y={102} width={22} height={150} fill="#7a5a35" stroke={GOLD} strokeWidth={2} />)}
      {[130, 490].map((x) => <rect key={x} x={x} y={80} width={16} height={110} fill="#5d4428" opacity={0.8} />)}
    </svg>
  );
};

const TableScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const k = ramp(t, c("what we say we believe"), 1.0);
  const tableAt = c("whether a table exists");
  const rotAt = c("it will rot");
  const assume = c("found in what we assume");
  const noticed = ramp(t, c("without being noticed"), 1.5);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ transformOrigin: "960px 500px", transform: `translate(${-470 * k}px, ${-40 * k}px) scale(${1 - 0.5 * k})` }}>
        <At x={960} y={540} s={pop(t, fps, tableAt, 14)}><Table /></At>
        <At x={1180} y={300} s={pop(t, fps, c("people will say of course not"), 10)}>
          <div style={{ position: "relative", padding: "18px 34px", borderRadius: 26, border: `2px solid ${CHALK}`, background: "rgba(255,255,255,0.08)",
            boxShadow: `0 0 30px ${CHALK}44`, fontFamily: SERIF, fontSize: 52, color: CHALK }}>
            Of course not.
            <div style={{ position: "absolute", left: 60, bottom: -22, width: 0, height: 0, borderLeft: "14px solid transparent",
              borderRight: "14px solid transparent", borderTop: `22px solid ${CHALK}` }} />
          </div>
        </At>
        <At x={260} y={500} s={pop(t, fps, c("made in a factory"))}><Factory /><Glow color={DIM} size={30}>factory</Glow></At>
        <Mist x={395} y={420} start={c("made in a factory") + 0.3} color={DIM} spread={40} n={10} />
        <Flow x1={370} y1={520} x2={620} y2={520} color={DIM} p={ramp(t, c("made in a factory") + 0.3, 0.8)} />
        <Flow x1={1300} y1={520} x2={1530} y2={520} color={WARM} p={ramp(t, rotAt, 0.8)} />
        <At x={1640} y={520} o={ramp(t, rotAt + 0.4, 0.6)}>
          <svg width={160} height={110} viewBox="0 0 160 110">
            {Array.from({ length: 16 }).map((_, i) => (
              <rect key={i} x={10 + rand(i) * 130} y={60 + rand(i + 3) * 40 + Math.max(0, t - rotAt) * 4 * rand(i + 7)} width={8 + rand(i + 1) * 14} height={6 + rand(i + 2) * 8}
                fill="#7a5a35" opacity={0.85 - rand(i + 4) * 0.4} transform={`rotate(${rand(i + 5) * 60 - 30})`} />
            ))}
          </svg>
          <Glow color={WARM} size={30}>rot</Glow>
        </At>
      </AbsoluteFill>
      <At x={490} y={760} o={k}><Glow color={DIM} size={40}>what we say</Glow></At>
      <PictureFrame x={1420} y={460} w={560} h={420} o={ramp(t, assume, 0.6) * (1 - 0.7 * noticed)} dashed={noticed > 0.5} />
      <At x={1420} y={460} o={1 - 0.6 * noticed}><Reveal text="pictures" at={c("It lives in the pictures")} size={90} /></At>
      <At x={1420} y={760} o={ramp(t, assume, 0.6)}><Glow color={GOLD} size={40}>what we assume</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 8. picture 1: space as a room
const Car: React.FC<{ color: string }> = ({ color }) => (
  <svg width={220} height={100} viewBox="0 0 220 100" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
    <path d="M10 70 L20 45 Q30 40 50 40 L70 18 Q80 12 100 12 L140 12 Q155 12 165 25 L180 42 Q205 45 210 60 L210 72 Z" fill={`${color}33`} stroke={color} strokeWidth={3} strokeLinejoin="round" />
    <circle cx={55} cy={74} r={15} fill="#111" stroke={color} strokeWidth={3} /><circle cx={165} cy={74} r={15} fill="#111" stroke={color} strokeWidth={3} />
  </svg>
);

const SpaceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("We picture space");
  const draw = ramp(t, t0, 1.6);
  const take = c("Take away every star");
  const still = between(t, c("the room would still be there"), c("the room would still be there") + 1.5, 0.4);
  const never = ramp(t, c("no one has ever met that room"), 0.8);
  const meet = c("We meet distance");
  const gone = ramp(t, meet - 0.2, 0.6);
  const F = [[330, 160], [1590, 160], [1590, 750], [330, 750]], B = [[790, 330], [1130, 330], [1130, 590], [790, 590]];
  const poly = (p: number[][]) => p.map((q) => q.join(",")).join(" ");
  const roomO = (1 - 0.8 * never) * (1 - gone);
  const reach = ramp(t, c("the reach of an arm"), 1.0), gapAt = c("the gap a car needs");
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: roomO, filter: `drop-shadow(0 0 ${8 + still * 30}px ${VIOLET})` }}>
        <defs>
          <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a2d6b" stopOpacity={0.5} /><stop offset="1" stopColor="#1b1638" stopOpacity={0.2} /></linearGradient>
        </defs>
        <polygon points={poly([B[3], B[2], F[2], F[3]])} fill="url(#floor)" opacity={draw} />
        <polygon points={poly(B)} fill="#140f2e" fillOpacity={0.6 * draw} stroke={still > 0 ? GOLD : CHALK} strokeWidth={3} />
        {F.map((f, i) => <DrawPath key={i} d={`M${f[0]} ${f[1]} L${B[i][0]} ${B[i][1]}`} p={draw} color={still > 0 ? GOLD : CHALK} len={700} />)}
      </Svg>
      {Array.from({ length: 46 }).map((_, i) => {
        const x = 360 + rand(i + 11) * 1200, y = 180 + rand(i + 21) * 540;
        const on = ramp(t, t0 + 1.0 + rand(i) * 0.8, 0.4) * (1 - ramp(t, take + rand(i + 3) * 1.6, 0.3));
        const tw = 0.55 + 0.45 * Math.sin(t * (2 + rand(i) * 3) + i);
        const s = 3 + rand(i + 5) * 7;
        return <div key={i} style={{ position: "absolute", left: x, top: y, width: s, height: s, borderRadius: "50%", background: i % 5 ? CHALK : GOLD,
          boxShadow: `0 0 ${s * 2}px ${CHALK}`, opacity: on * tw * (1 - gone) }} />;
      })}
      <At x={960} y={460} o={never * (1 - gone)}><Glow color={WARM} size={64} serif>never met</Glow></At>
      {/* what is met: distance, reach, a gap */}
      <Scene from={meet} to={1e9}>
        <At x={520} y={300} s={pop(t, fps, meet)}><Orb size={50} color={TEAL} /></At>
        <At x={900} y={300} s={pop(t, fps, meet + 0.15)}><Orb size={50} color={TEAL} /></At>
        <Flow x1={560} y1={300} x2={860} y2={300} color={TEAL} p={ramp(t, meet + 0.2, 0.6)} />
        <At x={710} y={360} o={ramp(t, meet + 0.3, 0.5)}><Glow color={TEAL} size={36}>distance</Glow></At>
        <Svg>
          <DrawPath d="M1180 380 A 200 200 0 0 1 1440 180" p={reach} color={ROSE} width={5} len={500} />
          <circle cx={1180} cy={380} r={10} fill={ROSE} opacity={reach} />
        </Svg>
        <At x={1420} y={400} o={reach}><Glow color={ROSE} size={36}>the reach of an arm</Glow></At>
        <At x={640} y={620} s={pop(t, fps, gapAt)}><Car color={ICE} /></At>
        <At x={1280} y={620} s={pop(t, fps, gapAt + 0.1)}><Car color={ICE} /></At>
        <Flow x1={770} y1={630} x2={1150} y2={630} color={GOLD} p={ramp(t, gapAt + 0.3, 0.6)} width={4} />
        <At x={960} y={570} o={ramp(t, gapAt + 0.4, 0.5)}><Glow color={GOLD} size={36}>the gap a car needs</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 9. picture 2: time as a river
const TimeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("We picture time");
  const draw = ramp(t, t0, 1.4);
  const never = ramp(t, c("no one has met time"), 0.8);
  const off = ramp(t, c("by the sun") - 0.4, 0.5);
  const wave = (x: number, k: number) => 450 + k + 38 * Math.sin(x / 150 - t * 1.6);
  const xs = Array.from({ length: 64 }, (_, i) => 330 + (i * 1260) / 63);
  const top = xs.map((x, i) => `${i ? "L" : "M"}${x} ${wave(x, -80)}`).join(" ");
  const bot = xs.slice().reverse().map((x) => `L${x} ${wave(x, 80)}`).join(" ");
  const sunAt = c("by the sun"), yearAt = c("the year by the seasons"), lifeAt = c("a life by its ageing");
  const su = ramp(t, sunAt, 2.5);
  const life = ramp(t, lifeAt, 2.2);
  return (
    <AbsoluteFill>
      <Svg style={{ opacity: draw * (1 - 0.85 * never) * (1 - off), clipPath: `inset(0 ${(1 - draw) * 100}% 0 0)` }}>
        <defs>
          <linearGradient id="riv" x1="0" x2="1" gradientTransform={`translate(${(t * 0.15) % 1} 0)`} spreadMethod="repeat">
            <stop offset="0" stopColor="#2aa7c9" stopOpacity={0.55} /><stop offset="0.5" stopColor="#6f7bff" stopOpacity={0.45} /><stop offset="1" stopColor="#2aa7c9" stopOpacity={0.55} />
          </linearGradient>
        </defs>
        <path d={`${top} ${bot} Z`} fill="url(#riv)" stroke={ICE} strokeWidth={3} style={{ filter: `drop-shadow(0 0 12px ${ICE})` }} />
        {Array.from({ length: 7 }).map((_, i) => {
          const x = 330 + ((t * 140 + i * 190) % 1260);
          return <line key={i} x1={x} y1={wave(x, -20 + (i % 3) * 20)} x2={x + 70} y2={wave(x + 70, -20 + (i % 3) * 20)} stroke="#ffffff" strokeOpacity={0.35} strokeWidth={3} strokeLinecap="round" />;
        })}
        {Array.from({ length: 4 }).map((_, i) => {
          const x = 330 + (((t - t0) * 130 + i * 315) % 1260);
          return <circle key={i} cx={x} cy={wave(x, 0)} r={16} fill={GOLD} opacity={ramp(t, c("flowing whether anything happens"), 0.6)} style={{ filter: `drop-shadow(0 0 12px ${GOLD})` }} />;
        })}
      </Svg>
      <At x={960} y={450} o={never * (1 - off)}><Glow color={WARM} size={58} serif>never met apart from change</Glow></At>
      {/* change we do meet */}
      <Svg style={{ opacity: ramp(t, sunAt, 0.5) }}>
        <path d="M380 560 A 230 230 0 0 1 840 560" fill="none" stroke={GOLD} strokeOpacity={0.3} strokeWidth={2} strokeDasharray="8 10" />
        <line x1={340} x2={880} y1={560} y2={560} stroke={DIM} strokeWidth={2} />
      </Svg>
      <At x={610 - 230 * Math.cos(su * Math.PI * 0.75 + 0.2)} y={560 - 230 * Math.sin(su * Math.PI * 0.75 + 0.2)} o={ramp(t, sunAt, 0.5)}><Sun size={110} rot={t * 25} /></At>
      <At x={610} y={630} o={ramp(t, sunAt + 0.3, 0.5)}><Glow color={GOLD} size={36}>the hour</Glow></At>
      <At x={1060} y={430} s={pop(t, fps, yearAt)} r={t * 18}>
        <svg width={240} height={240} viewBox="-120 -120 240 240" style={{ overflow: "visible" }}>
          {[ICE, GREEN, GOLD, WARM].map((col, i) => {
            const a0 = (i * Math.PI) / 2 + 0.08, a1 = ((i + 1) * Math.PI) / 2 - 0.08;
            return <path key={i} d={`M${100 * Math.cos(a0)} ${100 * Math.sin(a0)} A100 100 0 0 1 ${100 * Math.cos(a1)} ${100 * Math.sin(a1)}`}
              stroke={col} strokeWidth={16} fill="none" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 8px ${col})` }} />;
          })}
        </svg>
      </At>
      <At x={1060} y={630} o={ramp(t, yearAt + 0.3, 0.5)}><Glow color={GREEN} size={36}>the year</Glow></At>
      <Svg style={{ opacity: ramp(t, lifeAt, 0.4) }}>
        <DrawPath d="M1440 580 C 1440 520, 1450 460, 1445 380" p={life} color={GREEN} width={8} len={220} />
        {[[1445, 380, 46], [1405, 430, 32], [1485, 425, 34], [1420, 340, 30], [1475, 350, 28]].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r * ramp(t, lifeAt + 0.8 + i * 0.25, 0.6)} fill={`${GREEN}66`} stroke={GREEN} strokeWidth={2} />
        ))}
      </Svg>
      <At x={1445} y={630} o={ramp(t, lifeAt + 0.3, 0.5)}><Glow color={GREEN} size={36}>a life</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 10. picture 3: rebirth as a traveller
const House: React.FC<{ glow: number }> = ({ glow }) => (
  <svg width={190} height={190} viewBox="0 0 190 190" style={{ filter: `drop-shadow(0 0 10px ${GOLD}88)` }}>
    <path d="M20 90 L95 25 L170 90" fill="none" stroke={CHALK} strokeWidth={4} strokeLinejoin="round" />
    <rect x={35} y={88} width={120} height={95} fill="#ffffff0d" stroke={CHALK} strokeWidth={4} />
    <rect x={80} y={128} width={30} height={55} fill="#ffffff10" stroke={CHALK} strokeWidth={3} />
    <rect x={50} y={105} width={22} height={22} fill={GOLD} opacity={0.35 + 0.5 * glow} />
    <rect x={118} y={105} width={22} height={22} fill={GOLD} opacity={0.35 + 0.5 * glow} />
  </svg>
);

const RebirthScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("We picture rebirth");
  const hx = [520, 960, 1400], hy = 560, top = hy - 150;
  const h1 = c("moving from life to life"), h2 = c("house to house");
  const u1 = ramp(t, h1, 1.2), u2 = ramp(t, h2, 1.2);
  const hop = (u: number, a: number, b: number) => [a + (b - a) * u, top - Math.sin(u * Math.PI) * 170];
  const [tx, ty] = u2 > 0 ? hop(u2, hx[1], hx[2]) : hop(u1, hx[0], hx[1]);
  const rej = c("the Buddha rejected");
  const x = ramp(t, rej, 0.6), shatter = ramp(t, rej + 0.7, 1.4);
  const consAt = c("Consciousness, he taught") + 0.4;
  const housesOut = ramp(t, c("Consciousness, he taught", 0.6), 0.6);
  const apart = ramp(t, c("Apart from conditions"), 1.0), vanish = ramp(t, c("no arising of consciousness"), 1.8);
  return (
    <AbsoluteFill>
      <AbsoluteFill style={{ opacity: 1 - housesOut }}>
        {hx.map((x0, i) => <At key={i} x={x0} y={hy} s={pop(t, fps, t0 + 0.2 + i * 0.15)}><House glow={0.5 + 0.5 * Math.sin(t * 2 + i)} /></At>)}
        {shatter < 1 && <At x={tx} y={ty} s={pop(t, fps, t0 + 1.0)} o={1 - shatter}><Orb size={60} color={GOLD} /></At>}
        {[0.12, 0.24, 0.36].map((lag, i) => {
          const uu = u2 > 0 ? Math.max(0, u2 - lag) : Math.max(0, u1 - lag);
          const [gx, gy] = u2 > 0 ? hop(uu, hx[1], hx[2]) : hop(uu, hx[0], hx[1]);
          const moving = (u1 > 0 && u1 < 1) || (u2 > 0 && u2 < 1);
          return <At key={i} x={gx} y={gy} o={moving ? 0.35 - i * 0.1 : 0}><Orb size={44 - i * 8} color={GOLD} /></At>;
        })}
        <At x={tx} y={ty - 60} o={ramp(t, t0 + 1.2, 0.5) * (1 - shatter)}><Glow color={GOLD} size={32}>traveller</Glow></At>
        {Array.from({ length: 14 }).map((_, i) => {
          const a = rand(i) * Math.PI * 2, d = shatter * (80 + rand(i + 1) * 120);
          return shatter > 0 && shatter < 1 ? <div key={i} style={{ position: "absolute", left: tx + Math.cos(a) * d, top: ty + Math.sin(a) * d, width: 8, height: 8,
            borderRadius: "50%", background: GOLD, opacity: 1 - shatter, boxShadow: `0 0 8px ${GOLD}` }} /> : null;
        })}
        <Svg style={{ opacity: 1 - shatter }}>
          <DrawPath d={`M${tx - 70} ${ty - 70} L${tx + 70} ${ty + 70}`} p={x} color={WARM} width={8} len={200} />
          <DrawPath d={`M${tx + 70} ${ty - 70} L${tx - 70} ${ty + 70}`} p={ramp(t, rej + 0.2, 0.6)} color={WARM} width={8} len={200} />
        </Svg>
      </AbsoluteFill>
      <Scene from={consAt - 0.6} to={1e9}>
        {Array.from({ length: 6 }).map((_, i) => {
          const a = (i / 6) * Math.PI * 2 + 0.3, ox = 960 + 470 * Math.cos(a), oy = 450 + 230 * Math.sin(a);
          const on = pop(t, fps, consAt - 0.5 + i * 0.1) * (1 - apart);
          return (
            <React.Fragment key={i}>
              <At x={ox} y={oy} s={on}><Orb size={54} color={TEAL} /></At>
              {Array.from({ length: 4 }).map((__, k) => {
                const u = ((t - consAt) * 0.6 + k / 4 + rand(i * 7 + k) * 0.2) % 1;
                return <div key={k} style={{ position: "absolute", left: ox + (960 - ox) * u, top: oy + (450 - oy) * u, width: 9, height: 9, borderRadius: "50%",
                  background: TEAL, boxShadow: `0 0 10px ${TEAL}`, opacity: t > consAt ? (1 - apart) * Math.sin(u * Math.PI) : 0 }} />;
              })}
            </React.Fragment>
          );
        })}
        <At x={430} y={230} o={ramp(t, consAt, 0.6) * (1 - apart)}><Chip color={TEAL}>conditions</Chip></At>
        <At x={960} y={450} o={ramp(t, consAt + 0.6, 0.8) * (1 - vanish)} blur={vanish * 12}>
          <Glow color={CHALK} size={84} serif>consciousness</Glow>
        </At>
      </Scene>
    </AbsoluteFill>
  );
};

const PictureSeries: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const tag = t < c("We picture time", 0.6) ? "picture 1 · space" : t < c("We picture rebirth", 0.6) ? "picture 2 · time" : "picture 3 · rebirth";
  return (
    <AbsoluteFill>
      <PictureFrame x={960} y={455} w={1420} h={690} tag={tag} />
      <Scene from={c("We picture space", 0.3)} to={c("We picture time", 0.9)}><SpaceScene /></Scene>
      <Scene from={c("We picture time", 0.3)} to={c("We picture rebirth", 0.9)}><TimeScene /></Scene>
      <Scene from={c("We picture rebirth", 0.3)} to={1e9}><RebirthScene /></Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 11. recap
const MiniRoom = () => (
  <svg width={240} height={160} viewBox="0 0 240 160"><g stroke={CHALK} strokeWidth={2.5} fill="none">
    <rect x={10} y={10} width={220} height={140} /><rect x={85} y={55} width={70} height={50} />
    <path d="M10 10 L85 55 M230 10 L155 55 M10 150 L85 105 M230 150 L155 105" /></g></svg>
);
const MiniRiver = () => (
  <svg width={240} height={160} viewBox="0 0 240 160"><g stroke={ICE} strokeWidth={3} fill="none">
    <path d="M10 60 Q 70 30 120 60 T 230 60" /><path d="M10 100 Q 70 70 120 100 T 230 100" /></g></svg>
);
const MiniHouse = () => <div style={{ transform: "scale(0.75)" }}><House glow={0.7} /></div>;

const RecapScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const pics = c("but in the pictures");
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 120, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="We do think inherently" at={c("We do think inherently")} size={92} />
      </div>
      <At x={960} y={300} o={ramp(t, c("Not in our stated beliefs"), 0.6)}>
        <div style={{ position: "relative" }}><Glow color={DIM} size={44}>not in our stated beliefs</Glow><Strike at={pics} /></div>
      </At>
      {[MiniRoom, MiniRiver, MiniHouse].map((Mini, i) => (
        <At key={i} x={520 + i * 440} y={560} s={pop(t, fps, pics + 0.3 + i * 0.3)}>
          <div style={{ position: "relative", width: 360, height: 260 }}>
            <PictureFrame x={180} y={130} w={360} h={260} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><Mini /></div>
          </div>
        </At>
      ))}
      <At x={960} y={790} o={ramp(t, pics + 1.4, 0.8)}><Glow color={GOLD} size={38}>the pictures by which we think</Glow></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 12. dependent arising
const DepScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Dependent arising reverses");
  const net = c("A thing is identified");
  const cx = 960, cy = 470;
  const angs = [0, 50, 130, 180, 230, 310].map((d) => (d * Math.PI) / 180);
  const nb = angs.map((a) => [cx + 400 * Math.cos(a), cy - 230 * Math.sin(a)]);
  const des = ramp(t, c("that dependence, too, is designated"), 1.0);
  const groundAt = c("not a deeper ground", 0.4);
  const g = ramp(t, groundAt, 0.5), fall = ramp(t, groundAt + 1.0, 1.4);
  const labelsOut = ramp(t, groundAt - 0.4, 0.4);
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 60, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="Dependent arising" at={t0} size={88} />
      </div>
      <Scene from={t0 + 0.3} to={net - 0.6}>
        <At x={960} y={420}>
          <div style={{ display: "flex", alignItems: "center", gap: 40 }}>
            <Chip color={GOLD} size={44}>things first</Chip>
            <div style={{ position: "relative" }}><Glow color={DIM} size={70}>→</Glow>
              <Svg style={{ left: -20, top: -10, width: 120, height: 120 }}>
                <DrawPath d="M0 10 L100 100" p={ramp(t, t0 + 1.4, 0.4)} color={WARM} width={7} len={150} />
                <DrawPath d="M100 10 L0 100" p={ramp(t, t0 + 1.6, 0.4)} color={WARM} width={7} len={150} />
              </Svg>
            </div>
            <Chip color={VIOLET} size={44}>relations after</Chip>
          </div>
        </At>
      </Scene>
      <Scene from={net - 0.4} to={1e9}>
        {nb.map(([x, y], i) => (
          <React.Fragment key={i}>
            <Flow x1={x} y1={y} x2={cx + (x - cx) * 0.24} y2={cy + (y - cy) * 0.24} color={des > 0.5 ? GOLD : TEAL} p={ramp(t, net + 0.2, 0.8)} dash={des > 0.5} />
            <At x={x} y={y} s={pop(t, fps, net + 0.1 * i)}><Orb size={64} color={TEAL} /></At>
          </React.Fragment>
        ))}
        <At x={cx} y={cy} s={pop(t, fps, net)}><Orb size={170} color={VIOLET} /></At>
        <At x={960} y={230} o={between(t, c("not first established by itself"), c("Its identity") - 0.3)}>
          <div style={{ position: "relative" }}><Glow color={CHALK} size={40}>established by itself?</Glow><Strike at={c("not first established by itself") + 1.0} /></div>
        </At>
        <At x={cx} y={cy} o={ramp(t, c("Its identity"), 0.5)}><Glow color="#FFFFFF" size={38} serif>identity</Glow></At>
        <Ring x={cx} y={cy} p={0.5 * ramp(t, c("its boundary"), 0.8)} r0={110} r1={110} color={GOLD} width={4} />
        <At x={cx} y={cy} o={ramp(t, c("its boundary"), 0.5)}>
          <div style={{ width: 230, height: 230, borderRadius: "50%", border: `4px solid ${GOLD}`, boxShadow: `0 0 30px ${GOLD}, inset 0 0 20px ${GOLD}88` }} />
        </At>
        <At x={560} y={790} o={ramp(t, c("its boundary"), 0.5) * (1 - labelsOut)}><Chip color={GOLD}>boundary</Chip></At>
        <At x={1360} y={790} o={ramp(t, c("its function"), 0.5) * (1 - labelsOut)}><Chip color={ROSE}>function</Chip></At>
        <At x={960} y={790} o={des * (1 - labelsOut)}><Glow color={GOLD} size={48} serif>designated</Glow></At>
        <At x={960 - fall * 60} y={800 + fall * 160} o={g * (1 - fall)} r={-fall * 8}>
          <div style={{ width: 600, height: 26, borderRadius: 6, background: `linear-gradient(90deg, ${WARM}55, ${WARM})`, boxShadow: `0 0 26px ${WARM}` }} />
        </At>
        <At x={1360} y={760 + fall * 80} o={g * (1 - fall)}><Glow color={WARM} size={40}>a ground?</Glow></At>
      </Scene>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 13. relation does not come first either
const RelScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nor does relation now come first");
  const tog = c("Relation and the things related", 0.3);
  const togWord = c("designated together");
  const fw = ramp(t, c("within the framework"), 1.4);
  const per = 2 * (980 + 420);
  return (
    <AbsoluteFill>
      <At x={960} y={180} o={ramp(t, t0, 0.5)}>
        <div style={{ position: "relative" }}><Glow color={CHALK} size={60}>relation first?</Glow><Strike at={t0 + 1.3} /></div>
      </At>
      <Ring x={960} y={480} p={ramp(t, togWord, 1.2)} r0={40} r1={600} color={GOLD} width={4} />
      <At x={700} y={480} s={pop(t, fps, tog, 10)}><Orb size={130} color={TEAL} /></At>
      <At x={1220} y={480} s={pop(t, fps, tog, 10)}><Orb size={130} color={TEAL} /></At>
      <Flow x1={775} y1={480} x2={1145} y2={480} color={GOLD} p={pop(t, fps, tog, 10)} width={5} />
      <div style={{ position: "absolute", top: 580, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="designated together" at={togWord} size={72} />
      </div>
      <Svg>
        <rect x={470} y={300} width={980} height={420} rx={20} fill="none" stroke={ICE} strokeWidth={3} strokeDasharray="14 12"
          style={{ clipPath: `inset(0 ${(1 - fw) * 100}% 0 0)`, filter: `drop-shadow(0 0 8px ${ICE})` }} />
      </Svg>
      <At x={590} y={280} o={fw}><Chip color={ICE} size={30}>framework</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 14. flame and whirlpool
const Flame: React.FC<{ boost: number }> = ({ boost }) => {
  const { t } = useT();
  const n = (k: number) => Math.sin(t * (5 + k) + k * 1.7) * (8 + 6 * boost);
  const d = `M0 ${-170 - n(1)} C ${40 + n(2)} -90, ${80 + n(3)} -30, 70 30 C 60 90, 25 110, 0 110 C -25 110, -60 90, -70 30 C ${-80 - n(4)} -30, ${-40 + n(5)} -90, 0 ${-170 - n(1)} Z`;
  const inner = `M0 ${-60 - n(2) * 0.6} C 25 -20, 38 20, 30 55 C 22 85, -22 85, -30 55 C -38 20, -25 -20, 0 ${-60 - n(2) * 0.6} Z`;
  return (
    <svg width={260} height={360} viewBox="-130 -200 260 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 30px ${WARM})` }}>
      <defs><radialGradient id="fl" cx="0.5" cy="0.7" r="0.7"><stop offset="0" stopColor="#FFF2B0" /><stop offset="0.5" stopColor="#FFB347" /><stop offset="1" stopColor="#FF5E3A" stopOpacity={0.6} /></radialGradient></defs>
      <path d={d} fill="url(#fl)" opacity={0.95} />
      <path d={inner} fill="#FFF6D0" opacity={0.85} />
    </svg>
  );
};

const Whirlpool: React.FC<{ boost: number }> = ({ boost }) => {
  const { t } = useT();
  const pts = Array.from({ length: 160 }, (_, i) => {
    const a = (i / 160) * Math.PI * 7, r = 8 + i * 1.05;
    return `${i ? "L" : "M"}${(r * Math.cos(a)).toFixed(1)} ${(r * Math.sin(a) * 0.8).toFixed(1)}`;
  }).join(" ");
  return (
    <svg width={400} height={340} viewBox="-200 -170 400 340" style={{ overflow: "visible", filter: `drop-shadow(0 0 14px ${ICE})` }}>
      <g transform={`rotate(${-t * (40 + 30 * boost)})`}><path d={pts} fill="none" stroke={ICE} strokeWidth={4} strokeLinecap="round" /></g>
      {Array.from({ length: 22 }).map((_, i) => {
        const u = (t * (0.18 + 0.1 * boost) + rand(i)) % 1, a = -u * Math.PI * 6 + rand(i + 3) * 6, r = 170 * (1 - u);
        return <circle key={i} cx={r * Math.cos(a)} cy={r * Math.sin(a) * 0.8} r={4 + rand(i + 2) * 4} fill={i % 3 ? ICE : "#ffffff"} opacity={Math.sin(u * Math.PI) * 0.9} />;
      })}
    </svg>
  );
};

const FlameScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Think of a flame");
  const solid = c("not a solid object");
  const crumble = ramp(t, solid + 1.1, 1.2);
  const boost = ramp(t, c("amid changing conditions"), 1.0);
  const named = c("recognized and named");
  return (
    <AbsoluteFill>
      <At x={560} y={420} s={pop(t, fps, t0)}><Flame boost={boost} /></At>
      <Mist x={560} y={330} start={c("amid changing conditions")} color={GOLD} spread={120} n={16} seed={4} />
      <At x={1360} y={430} s={pop(t, fps, c("or a whirlpool"))}><Whirlpool boost={boost} /></At>
      {crumble < 1 && <At x={960} y={430} s={pop(t, fps, solid)}>
        <div style={{ position: "relative", width: 150, height: 150 }}>
          {Array.from({ length: 9 }).map((_, i) => {
            const gx = (i % 3) * 50, gy = Math.floor(i / 3) * 50;
            return <div key={i} style={{ position: "absolute", left: gx + (rand(i) - 0.5) * 80 * crumble, top: gy + crumble * (120 + rand(i + 2) * 160), width: 50, height: 50,
              background: "#8a8a99", border: "1px solid #c8c8d8", opacity: 1 - crumble, transform: `rotate(${crumble * (rand(i + 5) - 0.5) * 120}deg)` }} />;
          })}
        </div>
      </At>}
      <At x={960} y={250} o={between(t, solid, solid + 2.2)}><Glow color={DIM} size={36}>a solid object?</Glow></At>
      <div style={{ position: "absolute", left: 470, top: 640 }}><Reveal text="flame" at={named} size={72} /></div>
      <div style={{ position: "absolute", left: 1210, top: 640 }}><Reveal text="whirlpool" at={named + 0.4} size={72} color={ICE} top="#F0FBFF" /></div>
      <At x={760} y={800} s={pop(t, fps, c("So are tables"))}><Chip color={GOLD}>tables</Chip></At>
      <At x={1160} y={800} s={pop(t, fps, c("our own experiences"))}><Chip color={VIOLET}>our own experiences</Chip></At>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- 15-16. nothing is lost; close
const LostScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const t0 = c("Nothing is lost");
  const close = ramp(t, c("The phone in your hand"), 1.6);
  const ring = ramp(t, c("The phone still rings"), 1.4);
  const coldAt = c("Ice is still cold"), count = c("still counts its molecules");
  const ess = ramp(t, c("the further claim"), 0.6), drop = ramp(t, c("rest on an essence") + 1.6, 1.4);
  const px = 480 + (960 - 480) * close, ps = 0.62 + 0.23 * close;
  const objs = [[px, 420], [960, 420], [1440, 420]];
  return (
    <AbsoluteFill>
      <At x={960} y={420} o={ramp(t, c("The phone in your hand") + 0.6, 1.6)}>
        <div style={{ width: 900, height: 900, borderRadius: "50%", background: `radial-gradient(circle, ${GOLD}44 0%, ${GOLD}14 40%, transparent 70%)` }} />
      </At>
      <At x={px} y={420} s={pop(t, fps, t0) * ps}><Phone screen={1} rim={close > 0.5 ? GOLD : TEAL} ring={ring} /></At>
      {[0, 1, 2].map((k) => <Ring key={k} x={480} y={420} p={ramp(t, c("The phone still rings") + k * 0.35, 1.0)} r0={200} r1={330} color={TEAL} />)}
      <AbsoluteFill style={{ opacity: 1 - close }}>
        <At x={960} y={420} s={pop(t, fps, t0 + 0.2)}><IceCube size={200} spin={(t - t0) * 12} /></At>
        <At x={960} y={420} o={ramp(t, coldAt, 0.5)}><Glow color={ICE} size={52} serif style={{ color: "#fff" }}>cold</Glow></At>
        <Mist x={960} y={510} start={coldAt} spread={200} n={14} />
        <At x={1440} y={420} s={pop(t, fps, t0 + 0.4)}>
          <div style={{ position: "relative", width: 300, height: 220 }}>
            <Svg style={{ width: 300, height: 220 }}><line x1={150} y1={90} x2={60} y2={170} stroke={CHALK} strokeWidth={8} /><line x1={150} y1={90} x2={240} y2={170} stroke={CHALK} strokeWidth={8} /></Svg>
            <div style={{ position: "absolute", left: 95, top: 35 }}><Orb size={110} color={WARM} /></div>
            <div style={{ position: "absolute", left: 20, top: 130 }}><Orb size={80} color={ICE} /></div>
            <div style={{ position: "absolute", left: 200, top: 130 }}><Orb size={80} color={ICE} /></div>
          </div>
        </At>
        {[0, 1, 2].map((k) => (
          <At key={k} x={1330 + k * 110} y={600} s={pop(t, fps, count + 0.3 * k)}><Chip color={GOLD} size={30}>{k + 1}</Chip></At>
        ))}
      </AbsoluteFill>
      {objs.map(([x, y], i) => (
        <At key={i} x={x} y={y + drop * 320} o={ess * (1 - drop) * (i === 0 ? 1 : 1 - close)}><Orb size={46} color={GOLD} /></At>
      ))}
      <At x={960} y={730 + drop * 60} o={ramp(t, c("rest on an essence"), 0.6) * (1 - drop)}><Glow color={GOLD} size={52} serif>essence?</Glow></At>
      <div style={{ position: "absolute", top: 730, width: "100%", display: "flex", justifyContent: "center" }}>
        <Reveal text="a habit of seeing" at={c("Only the habit of seeing")} size={80} />
      </div>
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the chapter body
export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["phone", 0], ["ice", c("Or touch a cube of ice", 0.6)], ["subst", c("Philosophers call this view", 0.6)], ["table", c("You might say", 0.6)],
    ["space", c("We picture space", 0.6)], ["time", c("We picture time", 0.6)], ["rebirth", c("We picture rebirth", 0.6)], ["recap", c("So yes", 0.6)],
    ["dep", c("Dependent arising reverses", 0.6)], ["flame", c("Think of a flame", 0.6)], ["lost", c("Nothing is lost", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Or touch a cube of ice", 0.9)], <PhoneScene />],
    [S("Or touch a cube of ice", "Philosophers call this view"), <IceScene />],
    [S("Philosophers call this view", "You might say"), <SubstScene partB={c("But substantialism is not first")} />],
    [S("You might say", "We picture space"), <TableScene />],
    [S("We picture space", "So yes"), <PictureSeries />],
    [S("So yes", "Dependent arising reverses"), <RecapScene />],
    [S("Dependent arising reverses", "Nor does relation now come first"), <DepScene />],
    [S("Nor does relation now come first", "Think of a flame"), <RelScene />],
    [S("Think of a flame", "Nothing is lost"), <FlameScene />],
    [S("Nothing is lost", null), <LostScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
