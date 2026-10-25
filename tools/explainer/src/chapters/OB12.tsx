// The Observer and the Taste of Presence, Chapter 12: Identity, Convention and the Criteria of Truth. Explainer drawings timed to the narration.
// Arc: the cracked phone: still the same? -> substance: an essence inside decides -> dependency moves the question: same by which
// criteria, purpose, framework -> the phone for shop and insurer; the ship of replaced planks on the register and in the museum ->
// the child in the photograph -> each answer correct within its framework -> not arbitrary: forged passport, face in a crowd ->
// one further claim removed: sameness beneath the criteria -> a designation that works -> "conventional" heard as a demotion ->
// fully valid, three criteria -> rope and snake against the three tests -> table, self, hour: designations gone invisible ->
// no deeper truth, no higher world -> one appearance, seen two ways.
// Stance: the essence inside a thing and the sameness beneath criteria are drawn only to be struck; no higher world, no layer.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, Flow, GOLD, Glow, GREEN, ICE, Mood, Orb, Phone, PictureFrame, ROSE, Reveal, Ring,
  Scene, SANS, SERIF, Strike, Svg, TEAL, VIOLET, WARM, between, pop, ramp, rand, useCue, useT,
} from "../lib";

export const PHRASES = [
  "A phone has a cracked screen", "Is it still the same phone",
  "Under the logic of substance", "hidden in the thing itself", "A thing is what its essence makes it", "as long as the essence remains",
  "The logic of dependency moves the question", "how the thing is reliably picked out", "the same by which criteria", "For which purpose",
  "Within which framework",
  "is the same phone for the repair shop", "and for the insurer", "A ship whose every plank has been replaced", "the same ship on the register",
  "the museum that kept the old planks",
  "The child in an old photograph is you", "for your family", "for your birth certificate", "for the story that runs",
  "Each answer is correct within its framework", "None of them is found in the thing",
  "This does not make identity arbitrary", "applied correctly or wrongly", "tested against further experience", "A forged passport fails",
  "A mistaken face in a crowd", "corrected when it turns", "What has gone is only one further claim", "which the criteria merely detect",
  "Identity seemed the most undeniable thing", "This is this", "I am me", "it is not less real", "Its reality is of a different kind",
  "a designation that works",
  "The same shift changes the word", "hears it as a demotion", "agreed on, perhaps arbitrary, certainly less than real",
  "would be there whether anyone agreed",
  "conventional truth is the only kind of validity", "And it is fully valid", "It has standards", "gives three criteria",
  "known to ordinary cognition", "not overturned by further ordinary cognition", "not contradicted by analysis of the ultimate",
  "Think of a rope seen as a snake", "The snake fails the second test", "The rope taken as existing in itself fails the third",
  "The rope as named and used passes all three", "Convention is not the opposite of truth",
  "What changes is the status of the undeniable", "this table is simply here", "I am simply me", "time simply flows", "has become invisible",
  "costs none of its reliability", "stand outside the framework",
  "There is no second, deeper truth", "Ultimate truth is not a higher world", "It is the emptiness of this one",
  "are not found from their own side", "One appearance, seen two ways",
];

const M = {
  phone: { a: "rgba(60,70,140,0.5)", b: "rgba(110,60,120,0.4)", c: "rgba(40,100,130,0.3)" },
  frame: { a: "rgba(160,110,50,0.45)", b: "rgba(100,55,120,0.42)", c: "rgba(40,100,120,0.3)" },
  test: { a: "rgba(50,120,110,0.45)", b: "rgba(120,60,130,0.42)", c: "rgba(180,140,60,0.32)" },
  conv: { a: "rgba(110,55,120,0.5)", b: "rgba(180,135,60,0.36)", c: "rgba(40,80,120,0.3)" },
  one: { a: "rgba(190,145,60,0.46)", b: "rgba(100,55,125,0.44)", c: "rgba(50,130,140,0.32)" },
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

const Cross: React.FC<{ at: number }> = ({ at }) => {
  const { t } = useT();
  return (
    <svg width={60} height={60} viewBox="0 0 60 60" style={{ overflow: "visible" }}>
      <DrawPath d="M14 14 L46 46" p={ramp(t, at, 0.3)} color={WARM} width={7} len={60} />
      <DrawPath d="M46 14 L14 46" p={ramp(t, at + 0.15, 0.3)} color={WARM} width={7} len={60} />
    </svg>
  );
};

/** The phone with a crack drawn across its screen (crack 0..1). */
const CrackedPhone: React.FC<{ crack: number; scale?: number }> = ({ crack, scale = 1 }) => (
  <div style={{ position: "relative", transform: `scale(${scale})` }}>
    <Phone screen={0.8} tilt={false} />
    <svg width={300} height={600} viewBox="0 0 300 600" style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <DrawPath d="M210 120 L170 200 L200 250 L140 330 L160 390 L90 470 M170 200 L240 230 M140 330 L70 300 M160 390 L230 430"
        p={crack} color="#ffffff" width={3} len={900} />
    </svg>
  </div>
);

/** A ship whose planks (n) are renewed one by one (k planks replaced). */
const Ship: React.FC<{ k: number; old?: boolean }> = ({ k, old }) => {
  const { t } = useT();
  const bob = Math.sin(t * 1.3) * 5;
  return (
    <svg width={460} height={300} viewBox="0 0 460 300" style={{ overflow: "visible", transform: `translateY(${bob}px)` }}>
      <line x1={230} y1={20} x2={230} y2={170} stroke={CHALK} strokeWidth={6} />
      <path d="M236 30 L360 150 L236 150 Z" fill={`${CHALK}22`} stroke={CHALK} strokeWidth={4} />
      {Array.from({ length: 6 }).map((_, i) => {
        const fresh = i < k;
        return <path key={i} d={`M${40 + i * 10} ${180 + i * 16} L${420 - i * 10} ${180 + i * 16} L${414 - i * 10} ${194 + i * 16} L${46 + i * 10} ${194 + i * 16} Z`}
          fill={fresh ? `${GOLD}aa` : "#7a5a3a"} stroke={fresh ? GOLD : "#C9A06A"} strokeWidth={2} opacity={old ? 0.8 : 1} />;
      })}
    </svg>
  );
};

/** A small child figure. */
const Child: React.FC<{ color?: string }> = ({ color = ROSE }) => (
  <svg width={120} height={180} viewBox="0 0 120 180" style={{ overflow: "visible" }}>
    <circle cx={60} cy={44} r={30} fill={`${color}44`} stroke={color} strokeWidth={4} />
    <path d="M24 170 Q24 96 60 90 Q96 96 96 170 Z" fill={`${color}33`} stroke={color} strokeWidth={4} />
  </svg>
);

const Person: React.FC<{ color?: string; size?: number }> = ({ color = CHALK, size = 1 }) => (
  <svg width={120 * size} height={200 * size} viewBox="0 0 120 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <circle cx={60} cy={44} r={34} fill={`${color}22`} stroke={color} strokeWidth={5} />
    <path d="M8 196 Q8 96 60 90 Q112 96 112 196" fill={`${color}18`} stroke={color} strokeWidth={5} />
  </svg>
);

const Table: React.FC<{ color?: string }> = ({ color = GOLD }) => (
  <svg width={220} height={160} viewBox="0 0 220 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
    <rect x={10} y={30} width={200} height={20} rx={4} fill={`${color}55`} stroke={color} strokeWidth={4} />
    <path d="M30 50 L30 150 M190 50 L190 150" stroke={color} strokeWidth={8} strokeLinecap="round" />
  </svg>
);

const Clock: React.FC<{ color?: string }> = ({ color = TEAL }) => {
  const { t } = useT();
  const a = t * 1.2;
  return (
    <svg width={160} height={160} viewBox="-80 -80 160 160" style={{ overflow: "visible", filter: `drop-shadow(0 0 8px ${color}66)` }}>
      <circle r={70} fill={`${color}18`} stroke={color} strokeWidth={5} />
      <line x1={0} y1={0} x2={34 * Math.sin(a / 12)} y2={-34 * Math.cos(a / 12)} stroke={CHALK} strokeWidth={6} strokeLinecap="round" />
      <line x1={0} y1={0} x2={54 * Math.sin(a)} y2={-54 * Math.cos(a)} stroke={CHALK} strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
};

const Rope: React.FC<{ p?: number }> = ({ p = 1 }) => (
  <svg width={420} height={160} viewBox="0 0 420 160" style={{ overflow: "visible" }}>
    <DrawPath d="M20 110 C80 40 140 150 200 90 S320 40 360 100 Q390 140 410 120" p={p} color="#C9A06A" width={16} len={700} />
    <DrawPath d="M20 110 C80 40 140 150 200 90 S320 40 360 100 Q390 140 410 120" p={p} color="#8a6a3a" width={6} len={700} glow={false} />
  </svg>
);

const Snake: React.FC<{ o: number }> = ({ o }) => (
  <svg width={420} height={160} viewBox="0 0 420 160" style={{ overflow: "visible", opacity: o }}>
    <path d="M20 110 C80 40 140 150 200 90 S320 40 360 100" fill="none" stroke={GREEN} strokeWidth={16} strokeLinecap="round" style={{ filter: `drop-shadow(0 0 10px ${GREEN})` }} />
    <ellipse cx={378} cy={104} rx={30} ry={18} fill={GREEN} />
    <circle cx={386} cy={98} r={4} fill="#111" />
    <path d="M406 106 L424 100 M406 106 L424 114" stroke={ROSE} strokeWidth={3} />
  </svg>
);

/** A small name tag on a string. */
const Tag: React.FC<{ text: string; color: string; o: number }> = ({ text, color, o }) => (
  <div style={{ opacity: o, display: "flex", alignItems: "center", gap: 6 }}>
    <div style={{ width: 40, height: 2, background: color }} />
    <div style={{ fontFamily: SANS, fontSize: 28, color: CHALK, padding: "4px 14px", borderRadius: 8, border: `2px solid ${color}`, background: `${color}22` }}>{text}</div>
  </div>
);

// ---------------------------------------------------------------- scenes
const PhoneScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const crack = c("A phone has a cracked screen"), same = c("Is it still the same phone");
  return (
    <AbsoluteFill>
      <At x={760} y={450} s={pop(t, fps, crack - 0.3) * 0.95}><CrackedPhone crack={ramp(t, crack + 0.6, 0.6)} /></At>
      <At x={1300} y={300} o={ramp(t, crack + 0.8, 0.5)}><Glow color={ICE} size={36}>a cracked screen</Glow></At>
      <At x={1300} y={460} s={pop(t, fps, same)}><Glow color={GOLD} size={70} serif>the same phone?</Glow></At>
    </AbsoluteFill>
  );
};

const EssenceScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const sub = c("Under the logic of substance"), hid = c("hidden in the thing itself"), ess = c("A thing is what its essence makes it");
  const rem = c("as long as the essence remains");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, sub, 0.5)}><Glow color={CHALK} size={44} serif>the logic of substance</Glow></At>
      <At x={700} y={480}><CrackedPhone crack={1} scale={0.8} /></At>
      <At x={700} y={480} o={ramp(t, hid, 0.6)} s={1 + 0.06 * Math.sin(t * 3)}>
        <div style={{ width: 120, height: 120, borderRadius: "50%", border: `4px dashed ${GOLD}`, background: `radial-gradient(circle, ${GOLD}88, transparent 70%)` }} />
      </At>
      <At x={1300} y={380} s={pop(t, fps, ess)}><Chip color={GOLD} size={36}>an essence, inside?</Chip></At>
      <At x={1300} y={500} o={ramp(t, ess + 0.6, 0.5)}><Glow color={DIM} size={30}>decides what the thing is</Glow></At>
      <At x={1300} y={640} s={pop(t, fps, rem)}><Chip color={VIOLET} size={32}>same while the essence remains</Chip></At>
    </AbsoluteFill>
  );
};

const MovesScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const mv = c("The logic of dependency moves the question"), pick = c("how the thing is reliably picked out");
  const crit = c("the same by which criteria"), purp = c("For which purpose"), frame = c("Within which framework");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, mv, 0.5)}><Glow color={TEAL} size={44} serif>dependency moves the question</Glow></At>
      <At x={480} y={440}><CrackedPhone crack={1} scale={0.6} /></At>
      <At x={480} y={440} o={ramp(t, mv, 0.3) * (1 - ramp(t, mv + 1.2, 0.8))}>
        <div style={{ width: 100, height: 100, borderRadius: "50%", border: `4px dashed ${GOLD}` }} />
      </At>
      <Crossed x={480} y={440} at={mv + 0.6} size={50} />
      <Flow x1={1080} y1={330} x2={620} y2={430} color={GOLD} p={ramp(t, pick, 0.8)} />
      <At x={1180} y={300} s={pop(t, fps, pick + 0.3)}><Chip color={GOLD} size={34}>reliably picked out</Chip></At>
      <At x={1180} y={470} s={pop(t, fps, crit)}><Chip color={TEAL} size={36}>by which criteria?</Chip></At>
      <At x={1180} y={580} s={pop(t, fps, purp)}><Chip color={ROSE} size={36}>for which purpose?</Chip></At>
      <At x={1180} y={690} s={pop(t, fps, frame)}><Chip color={VIOLET} size={36}>within which framework?</Chip></At>
    </AbsoluteFill>
  );
};

const ShopScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const shop = c("is the same phone for the repair shop"), ins = c("and for the insurer");
  return (
    <AbsoluteFill>
      <At x={960} y={470} s={pop(t, fps, shop - 0.4) * 0.75}><CrackedPhone crack={1} /></At>
      <Flow x1={520} y1={330} x2={840} y2={420} color={TEAL} p={ramp(t, shop, 0.6)} />
      <At x={460} y={300} s={pop(t, fps, shop + 0.3)}><Chip color={TEAL} size={36}>the repair shop</Chip></At>
      <At x={460} y={400} o={ramp(t, shop + 0.8, 0.4)}><div style={{ display: "flex", gap: 12, alignItems: "center" }}><Tick at={shop + 0.9} /><Glow color={GREEN} size={30}>same phone</Glow></div></At>
      <Flow x1={1400} y1={330} x2={1080} y2={420} color={VIOLET} p={ramp(t, ins, 0.6)} />
      <At x={1460} y={300} s={pop(t, fps, ins + 0.3)}><Chip color={VIOLET} size={36}>the insurer</Chip></At>
      <At x={1460} y={400} o={ramp(t, ins + 0.8, 0.4)}><div style={{ display: "flex", gap: 12, alignItems: "center" }}><Tick at={ins + 0.9} /><Glow color={GREEN} size={30}>same phone</Glow></div></At>
    </AbsoluteFill>
  );
};

const ShipScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ship = c("A ship whose every plank has been replaced"), reg = c("the same ship on the register"), mus = c("the museum that kept the old planks");
  const k = Math.floor(6 * ramp(t, ship + 0.5, 3.0) + 0.001);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, ship, 0.5)}><Glow color={CHALK} size={44} serif>every plank replaced</Glow></At>
      <At x={720} y={420} s={pop(t, fps, ship)}><Ship k={k} /></At>
      <At x={720} y={680} s={pop(t, fps, reg)}><Chip color={TEAL} size={34}>the register: same ship</Chip></At>
      <At x={720} y={780} o={ramp(t, reg + 0.6, 0.3)}><Tick at={reg + 0.7} /></At>
      <At x={1440} y={440} o={ramp(t, mus - 0.2, 0.6)}>
        <svg width={300} height={200} viewBox="0 0 300 200" style={{ overflow: "visible" }}>
          {Array.from({ length: 6 }).map((_, i) => <rect key={i} x={20 + (i % 2) * 20} y={150 - i * 22} width={250} height={16} rx={3}
            fill="#7a5a3a" stroke="#C9A06A" strokeWidth={2} transform={`rotate(${(rand(i) - 0.5) * 6} 150 ${150 - i * 22})`} />)}
        </svg>
      </At>
      <At x={1440} y={680} s={pop(t, fps, mus + 0.3)}><Chip color={ROSE} size={34}>the museum: perhaps not</Chip></At>
    </AbsoluteFill>
  );
};

const PhotoScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const ph = c("The child in an old photograph is you");
  const rows: [string, string, string][] = [["for your family", "your family", TEAL], ["for your birth certificate", "a birth certificate", GOLD], ["for the story that runs", "the story, then to now", VIOLET]];
  return (
    <AbsoluteFill>
      <PictureFrame x={600} y={440} w={380} h={460} tag="an old photograph" o={ramp(t, ph - 0.2, 0.6)} />
      <At x={600} y={460} s={pop(t, fps, ph + 0.2)}>
        <div style={{ filter: "sepia(0.6)" }}><Child /></div>
      </At>
      <At x={1000} y={440} s={pop(t, fps, ph + 1.2)}><Glow color={GOLD} size={60} serif>= you</Glow></At>
      {rows.map(([p, l, col], i) => (
        <React.Fragment key={p}>
          <Flow x1={1180} y1={300 + i * 150} x2={820} y2={440} color={col} p={ramp(t, c(p), 0.6)} pulses={false} />
          <At x={1400} y={300 + i * 150} s={pop(t, fps, c(p) + 0.2)}><Chip color={col} size={34}>{l}</Chip></At>
        </React.Fragment>
      ))}
    </AbsoluteFill>
  );
};

const FrameworkScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const each = c("Each answer is correct within its framework"), none = c("None of them is found in the thing");
  const frames: [string, string][] = [["repair shop", TEAL], ["register", GOLD], ["family", VIOLET]];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, each, 0.5)}><Glow color={CHALK} size={44} serif>correct within its framework</Glow></At>
      {frames.map(([w, col], i) => (
        <React.Fragment key={w}>
          <At x={480 + i * 480} y={330} s={pop(t, fps, each + 0.4 + i * 0.4)}>
            <div style={{ width: 300, height: 150, borderRadius: 16, border: `3px solid ${col}`, background: `${col}18`, display: "flex",
              alignItems: "center", justifyContent: "center", gap: 12, fontFamily: SANS, fontSize: 32, color: CHALK }}>{w}</div>
          </At>
          <At x={600 + i * 480} y={260} o={ramp(t, each + 0.8 + i * 0.4, 0.3)}><Tick at={each + 0.9 + i * 0.4} /></At>
        </React.Fragment>
      ))}
      <At x={960} y={600} s={pop(t, fps, none - 0.2)}><Orb size={140} color={GOLD} /></At>
      <At x={960} y={600} o={ramp(t, none + 0.2, 0.4) * (1 - ramp(t, none + 2.0, 0.8))}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", border: `4px dashed ${CHALK}` }} />
      </At>
      <Crossed x={960} y={600} at={none + 1.2} size={50} />
      <At x={960} y={780} o={ramp(t, none + 0.6, 0.5)}><Glow color={DIM} size={30}>no answer found in the thing, apart from a framework</Glow></At>
    </AbsoluteFill>
  );
};

const TestsScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const arb = c("This does not make identity arbitrary"), wrong = c("applied correctly or wrongly"), test = c("tested against further experience");
  const pass = c("A forged passport fails"), face = c("A mistaken face in a crowd"), turns = c("corrected when it turns");
  const turned = ramp(t, turns, 0.6);
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={arb} strikeAt={arb + 1.2} color={DIM} size={36}>identity is arbitrary</Struck>
      <At x={700} y={210} o={ramp(t, wrong, 0.4)}><Chip color={TEAL} size={30}>applied rightly, or wrongly</Chip></At>
      <At x={1220} y={210} o={ramp(t, test, 0.4)}><Chip color={GOLD} size={30}>tested by further experience</Chip></At>
      {/* passport */}
      <At x={560} y={500} s={pop(t, fps, pass - 0.2)}>
        <div style={{ width: 260, height: 340, borderRadius: 14, background: "linear-gradient(160deg, #3a2a6b, #1d1838)", border: `4px solid ${GOLD}`,
          boxShadow: `0 0 30px ${GOLD}55`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20 }}>
          <div style={{ width: 90, height: 90, borderRadius: "50%", border: `3px solid ${GOLD}` }} />
          <div style={{ fontFamily: SANS, fontSize: 30, color: GOLD, letterSpacing: 4 }}>PASSPORT</div>
        </div>
      </At>
      <At x={560} y={500} o={ramp(t, pass + 0.6, 0.3)}><div style={{ transform: "scale(2.6)" }}><Cross at={pass + 0.7} /></div></At>
      <At x={560} y={720} o={ramp(t, pass + 0.6, 0.4)}><Glow color={WARM} size={30}>forged: it fails</Glow></At>
      {/* crowd */}
      {Array.from({ length: 11 }).map((_, i) => {
        const x = 1180 + (i % 4) * 110 + (Math.floor(i / 4) % 2) * 50, y = 400 + Math.floor(i / 4) * 110;
        const pick = i === 5;
        return <At key={i} x={x} y={y} o={ramp(t, face - 0.3 + i * 0.04, 0.4)}>
          <div style={{ width: 80, height: 80, borderRadius: "50%", border: `3px solid ${pick ? (turned > 0.5 ? DIM : ROSE) : DIM}`,
            background: pick ? `${ROSE}${turned > 0.5 ? "11" : "33"}` : `${DIM}18`, transform: pick ? `scaleX(${Math.abs(Math.cos(turned * Math.PI))})` : undefined }} />
        </At>;
      })}
      <At x={1340} y={260 + 50} o={ramp(t, face + 0.4, 0.4) * (1 - turned)}><Glow color={ROSE} size={30}>“that's her!”</Glow></At>
      <At x={1340} y={740} o={ramp(t, turns + 0.4, 0.4)}><Glow color={GREEN} size={30}>it turns: corrected</Glow></At>
    </AbsoluteFill>
  );
};

const ClaimScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const gone = c("What has gone is only one further claim"), det = c("which the criteria merely detect");
  const fade = ramp(t, det + 1.0, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, gone, 0.5)}><Glow color={CHALK} size={44} serif>only one further claim goes</Glow></At>
      {["criteria", "purposes", "frameworks"].map((w, i) => (
        <At key={w} x={560 + i * 400} y={340} s={pop(t, fps, gone + 0.5 + i * 0.3)}><Chip color={[TEAL, ROSE, VIOLET][i]} size={36}>{w}</Chip></At>
      ))}
      <At x={960} y={560} o={ramp(t, gone + 1.6, 0.6) * (1 - fade)} blur={fade * 10}>
        <div style={{ width: 1100, height: 70, borderRadius: 10, border: `3px dashed ${GOLD}`, background: `${GOLD}14`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 34, color: CHALK }}>a sameness beneath, from the thing's own side</div>
      </At>
      {[0, 1, 2].map((i) => <Flow key={i} x1={560 + i * 400} y1={380} x2={560 + i * 400} y2={520} color={DIM} p={ramp(t, det, 0.6) * (1 - fade)} pulses={false} dash />)}
      <At x={960} y={660} o={ramp(t, det, 0.4) * (1 - fade)}><Glow color={DIM} size={28}>merely detected?</Glow></At>
      <Crossed x={960} y={560} at={det + 0.6} size={50} />
      <At x={960} y={760} o={ramp(t, det + 1.8, 0.5)}><Glow color={GREEN} size={32}>the criteria still work</Glow></At>
    </AbsoluteFill>
  );
};

const DesignationScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const und = c("Identity seemed the most undeniable thing"), thisis = c("This is this"), me = c("I am me");
  const real = c("it is not less real"), kind = c("Its reality is of a different kind"), works = c("a designation that works");
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, und, 0.5)}><Glow color={DIM} size={36}>the most undeniable thing</Glow></At>
      <At x={960} y={560} s={pop(t, fps, und + 0.6)} o={1 - ramp(t, real - 0.6, 0.5)}>
        <div style={{ display: "flex", flexDirection: "column", gap: 34 }}>
          {[0, 1].map((i) => <div key={i} style={{ width: 240, height: 34, borderRadius: 17, background: `${GOLD}aa`, boxShadow: `0 0 30px ${GOLD}` }} />)}
        </div>
      </At>
      <At x={560} y={330} s={pop(t, fps, thisis)}><Glow color={GOLD} size={64} serif>this is this</Glow></At>
      <At x={1360} y={330} s={pop(t, fps, me)}><Glow color={ROSE} size={64} serif>I am me</Glow></At>
      <At x={760} y={560} s={pop(t, fps, real)}><Orb size={150} color={GOLD} core={0.8} /></At>
      <At x={1020} y={560} o={ramp(t, works, 0.5)}><Tag text="a name, that works" color={TEAL} o={1} /></At>
      <At x={960} y={720} o={ramp(t, real + 0.3, 0.5)}><Chip color={GREEN} size={32}>not less real</Chip></At>
      <At x={960} y={810} o={ramp(t, kind, 0.5)}><Glow color={CHALK} size={32}>real in a different way: as a designation</Glow></At>
    </AbsoluteFill>
  );
};

const DemotionScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const word = c("The same shift changes the word"), dem = c("hears it as a demotion"), less = c("agreed on, perhaps arbitrary, certainly less than real");
  const there = c("would be there whether anyone agreed");
  const drop = ramp(t, dem + 0.3, 1.2);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, word, 0.5)}><Glow color={DIM} size={34}>the same shift, for one word</Glow></At>
      <Svg>
        {[0, 1, 2, 3].map((i) => <line key={i} x1={560} y1={260 + i * 150} x2={900} y2={260 + i * 150} stroke={DIM} strokeWidth={3} opacity={ramp(t, word + 0.3, 0.6)} />)}
      </Svg>
      <At x={730} y={230 + 300 * drop} s={pop(t, fps, word + 0.2)}><Chip color={GOLD} size={38}>“conventional”</Chip></At>
      <At x={1300} y={300} o={ramp(t, dem, 0.5)}><Glow color={WARM} size={36} serif>heard as a demotion</Glow></At>
      {["agreed on", "perhaps arbitrary", "less than real"].map((w, i) => (
        <At key={w} x={1300} y={420 + i * 90} s={pop(t, fps, less + i * 0.5)}><Chip color={DIM} size={32}>{w}</Chip></At>
      ))}
      <At x={730} y={230} o={ramp(t, there, 0.5)}><Glow color={VIOLET} size={30}>“the real”: there regardless?</Glow></At>
    </AbsoluteFill>
  );
};

const ValidScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const only = c("conventional truth is the only kind of validity"), fully = c("And it is fully valid"), std = c("It has standards");
  const three = c("gives three criteria");
  const tests: [string, string, string][] = [
    ["known to ordinary cognition", "1  ordinary knowing accepts it", TEAL],
    ["not overturned by further ordinary cognition", "2  a closer look does not overturn it", GOLD],
    ["not contradicted by analysis of the ultimate", "3  analysis does not contradict it", VIOLET],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, only, 0.5)}><Glow color={CHALK} size={42} serif>the only kind of validity there is</Glow></At>
      <At x={960} y={460} s={pop(t, fps, only + 0.5)} o={1 - ramp(t, three - 0.8, 0.5)}><Table /></At>
      <At x={960} y={600} o={between(t, only + 0.9, three - 0.8, 0.5)}><Chip color={TEAL} size={32}>conventional truth</Chip></At>
      <div style={{ opacity: 1 - ramp(t, three - 0.8, 0.5) }}>
        <Struck x={960} y={700} at={only + 1.8} strikeAt={only + 2.8} color={DIM} size={30}>a second, higher kind</Struck>
      </div>
      <At x={760} y={200} s={pop(t, fps, fully)}><Chip color={GREEN} size={34}>fully valid</Chip></At>
      <At x={1160} y={200} s={pop(t, fps, std)}><Chip color={GOLD} size={34}>with standards</Chip></At>
      <At x={960} y={310} o={ramp(t, three, 0.5)}><Glow color={GOLD} size={40} serif>three tests</Glow></At>
      {tests.map(([ph, l, col], i) => (
        <At key={ph} x={960} y={430 + i * 120} s={pop(t, fps, c(ph))}><Chip color={col} size={36}>{l}</Chip></At>
      ))}
    </AbsoluteFill>
  );
};

const RopeScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const rope = c("Think of a rope seen as a snake"), snake = c("The snake fails the second test"), itself = c("The rope taken as existing in itself fails the third");
  const named = c("The rope as named and used passes all three"), conv = c("Convention is not the opposite of truth");
  const snakeO = ramp(t, rope + 0.8, 0.6) * (1 - ramp(t, snake + 0.6, 0.8));
  const rows: [string, number, ("y" | "n")[]][] = [["the snake", snake, ["y", "n", "n"]], ["the rope, existing in itself", itself, ["y", "y", "n"]], ["the rope, named and used", named, ["y", "y", "y"]]];
  return (
    <AbsoluteFill>
      <At x={480} y={360} s={pop(t, fps, rope)}><Rope /></At>
      <At x={480} y={360}><Snake o={snakeO} /></At>
      <At x={480} y={200} o={ramp(t, rope + 0.3, 0.5)}><Glow color={CHALK} size={38} serif>a rope, seen as a snake</Glow></At>
      <At x={480} y={520} o={ramp(t, snake + 0.8, 0.5)}><Glow color={DIM} size={28}>a closer look overturns it</Glow></At>
      {["1", "2", "3"].map((n, k) => <At key={n} x={1440 + k * 110} y={230} o={ramp(t, snake - 0.3, 0.4)}><Glow color={GOLD} size={40} serif>{n}</Glow></At>)}
      {rows.map(([label, at, marks], i) => (
        <React.Fragment key={label}>
          <At x={1120} y={340 + i * 130} o={ramp(t, at, 0.4)}><Chip color={[GREEN, VIOLET, GOLD][i]} size={28}>{label}</Chip></At>
          {marks.map((m, k) => (
            <At key={k} x={1440 + k * 110} y={340 + i * 130} o={ramp(t, at + 0.5 + k * 0.3, 0.2)}>
              {m === "y" ? <Tick at={at + 0.5 + k * 0.3} /> : <Cross at={at + 0.5 + k * 0.3} />}
            </At>
          ))}
        </React.Fragment>
      ))}
      <At x={960} y={790} s={pop(t, fps, conv)}><Chip color={GOLD} size={36}>convention: where truth lives</Chip></At>
    </AbsoluteFill>
  );
};

const UndeniableScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const st = c("What changes is the status of the undeniable"), table = c("this table is simply here"), me = c("I am simply me");
  const time = c("time simply flows"), inv = c("has become invisible"), cost = c("costs none of its reliability"), outside = c("stand outside the framework");
  const show = ramp(t, inv + 0.6, 0.8);
  return (
    <AbsoluteFill>
      <At x={960} y={110} o={ramp(t, st, 0.5)}><Glow color={CHALK} size={42} serif>the status of the undeniable</Glow></At>
      <At x={480} y={430} s={pop(t, fps, table)}><Table /></At>
      <At x={480} y={560} o={ramp(t, table + 0.4, 0.4)}><Glow color={GOLD} size={28}>simply here</Glow></At>
      <At x={960} y={420} s={pop(t, fps, me)}><Person color={ROSE} size={0.9} /></At>
      <At x={960} y={560} o={ramp(t, me + 0.4, 0.4)}><Glow color={ROSE} size={28}>simply me</Glow></At>
      <At x={1440} y={430} s={pop(t, fps, time)}><Clock /></At>
      <At x={1440} y={560} o={ramp(t, time + 0.4, 0.4)}><Glow color={TEAL} size={28}>simply flowing</Glow></At>
      {[["“table”", GOLD, 480], ["“me”", ROSE, 960], ["“an hour”", TEAL, 1440]].map(([w, col, x], i) => (
        <At key={i} x={(x as number) + 120} y={300} o={show}><Tag text={w as string} color={col as string} o={1} /></At>
      ))}
      <At x={960} y={660} o={ramp(t, inv, 0.5)}><Glow color={DIM} size={30}>designations, gone invisible: now seen</Glow></At>
      <At x={760} y={770} s={pop(t, fps, cost)}><Chip color={GREEN} size={30}>still reliable</Chip></At>
      <Struck x={1220} y={770} at={outside - 0.2} strikeAt={outside + 1.0} color={DIM} size={30}>standing outside the framework</Struck>
    </AbsoluteFill>
  );
};

const NoDeeperScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const deeper = c("There is no second, deeper truth"), higher = c("Ultimate truth is not a higher world"), this1 = c("It is the emptiness of this one");
  const nf = c("are not found from their own side");
  const fade = ramp(t, higher + 1.4, 1.2);
  return (
    <AbsoluteFill>
      <Struck x={960} y={110} at={deeper} strikeAt={deeper + 1.4} color={DIM} size={36}>a second, deeper truth</Struck>
      <At x={960} y={260} o={ramp(t, higher, 0.5) * (1 - fade)} blur={fade * 12}>
        <div style={{ width: 760, height: 120, borderRadius: 60, border: `3px dashed ${VIOLET}`, background: `${VIOLET}18`, display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: SERIF, fontSize: 36, color: CHALK }}>a higher world, up there?</div>
      </At>
      <Crossed x={960} y={260} at={higher + 0.9} size={55} />
      <At x={560} y={500} s={pop(t, fps, this1)}><Table /></At>
      <At x={960} y={490} s={pop(t, fps, this1 + 0.3)}><Person color={ROSE} size={0.8} /></At>
      <At x={1360} y={500} s={pop(t, fps, this1 + 0.6)}><Clock /></At>
      <At x={960} y={660} o={ramp(t, this1 + 0.4, 0.5)}><Chip color={GOLD} size={34}>the emptiness of this one</Chip></At>
      <At x={960} y={770} o={ramp(t, nf, 0.5)}><Glow color={CHALK} size={30}>table, self, hour: not found from their own side</Glow></At>
    </AbsoluteFill>
  );
};

const TwoWaysScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const one = c("One appearance, seen two ways");
  return (
    <AbsoluteFill>
      <At x={960} y={420} s={pop(t, fps, one - 0.3)}><Orb size={180} color={GOLD} core={0.9} /></At>
      <Ring x={960} y={420} p={((t - one) * 0.5) % 1} r0={90} r1={280} color={GOLD} />
      <Flow x1={540} y1={420} x2={850} y2={420} color={TEAL} p={ramp(t, one + 0.5, 0.6)} />
      <Flow x1={1380} y1={420} x2={1070} y2={420} color={VIOLET} p={ramp(t, one + 0.9, 0.6)} />
      <At x={420} y={420} s={pop(t, fps, one + 0.5)}><Chip color={TEAL} size={34}>as convention</Chip></At>
      <At x={1500} y={420} s={pop(t, fps, one + 0.9)}><Chip color={VIOLET} size={34}>as empty</Chip></At>
      <At x={960} y={700}><Reveal text="one appearance, two ways" at={one + 0.4} size={70} /></At>
    </AbsoluteFill>
  );
};

export const Body: React.FC = () => {
  const c = useCue();
  const starts: [keyof typeof M, number][] = [
    ["phone", 0], ["frame", c("is the same phone for the repair shop", 0.6)], ["test", c("This does not make identity arbitrary", 0.6)],
    ["conv", c("Identity seemed the most undeniable thing", 0.6)], ["test", c("Think of a rope seen as a snake", 0.6)],
    ["one", c("What changes is the status of the undeniable", 0.6)],
  ];
  const moods: Mood[] = [];
  starts.forEach(([k, s], i) => {
    const next = i + 1 < starts.length ? starts[i + 1][1] : s + 999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  const S = (a: string, b: string | null, aLead = 0.5, bLead = 0.9) => [c(a, aLead), b ? c(b, bLead) : 1e9] as const;
  const scenes: [readonly [number, number], React.ReactNode][] = [
    [[0, c("Under the logic of substance", 0.9)], <PhoneScene />],
    [S("Under the logic of substance", "The logic of dependency moves the question"), <EssenceScene />],
    [S("The logic of dependency moves the question", "is the same phone for the repair shop"), <MovesScene />],
    [S("is the same phone for the repair shop", "A ship whose every plank has been replaced"), <ShopScene />],
    [S("A ship whose every plank has been replaced", "The child in an old photograph is you"), <ShipScene />],
    [S("The child in an old photograph is you", "Each answer is correct within its framework"), <PhotoScene />],
    [S("Each answer is correct within its framework", "This does not make identity arbitrary"), <FrameworkScene />],
    [S("This does not make identity arbitrary", "What has gone is only one further claim"), <TestsScene />],
    [S("What has gone is only one further claim", "Identity seemed the most undeniable thing"), <ClaimScene />],
    [S("Identity seemed the most undeniable thing", "The same shift changes the word"), <DesignationScene />],
    [S("The same shift changes the word", "conventional truth is the only kind of validity"), <DemotionScene />],
    [S("conventional truth is the only kind of validity", "Think of a rope seen as a snake"), <ValidScene />],
    [S("Think of a rope seen as a snake", "What changes is the status of the undeniable"), <RopeScene />],
    [S("What changes is the status of the undeniable", "There is no second, deeper truth"), <UndeniableScene />],
    [S("There is no second, deeper truth", "One appearance, seen two ways"), <NoDeeperScene />],
    [S("One appearance, seen two ways", null), <TwoWaysScene />],
  ];
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {scenes.map(([[a, b], node], i) => <Scene key={i} from={Math.max(0, a)} to={b}>{node}</Scene>)}
    </AbsoluteFill>
  );
};
