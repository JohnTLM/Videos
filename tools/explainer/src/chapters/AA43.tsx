// Bonus video: Dependent Arising Section 2 Part 3: Space (AA43), recut 2026-11-23 from AA41's space, cautions, three searches and which holds.
// (Script: new-documents/after-anatta/aa43-space-script.md, from EBooks
// Bonus Articles/looking-for-the-floor, draft of 2026-11-22; approved by the owner 2026-11-23.)
// Arc: where does the habit go next? -> the retreat: instant, smallest pieces, space; the Abhidharma floor ->
// a moment (a bar that splits into gone / not yet, a point that adds to nothing; the three marks; a search, not tiny
// pieces) -> an atom (six neighbours; one spot or six sides; the edge, the author's own step; the mind floor struck)
// -> space (the rule: one or many; bell and gate; a piece with two sides; the mirror; one courtyard, three rooms;
// space and its mark: "nothing blocks here"; two roads) -> two cautions (space is not emptiness; the sky an image,
// not a ground; only the test borrowed) -> tiny pieces, or nothing: both struck; three searches -> which holds ->
// the close; next: a car, a dream, a wave function.
// Stance: the floor is drawn only dashed and fades; the void and the container are drawn only to be struck.
// Cue phrases avoid names, respelled and hyphenated words.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, GOLD, Glow, GREEN, ICE, Mood, ROSE,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No names, respelled or hyphenated words inside.
export const PHRASES = [
  // open
  "The moment and the atom are gone. Is space the last floor", "I am John Tan, known as Thusness",
  "In Part 2, the habit retreated to the smallest moment and the smallest piece of matter",
  "And found no floor in either",
  "The habit has lost the moment and the atom. It has one more place to stand",
  // space
  "Surely, it says, space at least is real", "One still, empty room",
  "Or, and it is the biggest or, look for that room", "Here is the rule",
  "must be either really one, or really many", "Really one means a single whole, with no parts",
  "Really many means a collection of such single wholes", "There is no third choice",
  "Many only means several ones, counted together", "Can a real one be found",
  "Is space one? There is space here, around the bell", "And space over there, around the gate",
  "The bell would be at the gate", "So the space here and the space there must be different",
  "Something with parts is not one", "Is space many, then", "Take one piece",
  "It too has a side towards the bronze, and a side towards the air", "Divide it, and each half has two sides again",
  "With no real one, there is nothing for many to be made of",
  "So space is neither really one nor really many", "reaches for a reflection",
  "A face in a mirror appears clearly, as one face", "I fix my hair by it",
  "there is no face there that is truly one, or truly many", "Clearly there, as room",
  "What the test does not take away matters just as much", "One courtyard, because a wall marks it off",
  "Three rooms, because doors divide them", "What fails is only a oneness or a manyness held inside the thing itself",
  "comes at the same point from another side", "Every element has a mark",
  "Earth is known by hardness. Water by wetness", "The mark of space is the absence of obstruction",
  "Could space be there first, and then have its mark", "space does not exist in the slightest before its mark",
  "Picture it in the courtyard", "The gap between the bell and the wall", "The open gate I can walk through",
  "The air the bell can swing in", "Take away the bell, the wall, the gate, and the one who walks",
  "There would be nothing to block, and nothing to be blocked",
  "The open room is singled out together with what bounds it", "It is not a stage that was waiting first",
  "Space and its mark are designated together, like the bell and its ringing",
  "Then is space nothing", "Space is neither existent nor non existent",
  "So two masters arrive at one place by two roads", "One divides space, and finds it neither one nor many",
  "The other asks what space is apart from its mark", "Neither leaves a container behind",
  "And neither leaves a void",
  // cautions
  "Two cautions belong here", "First, empty space is not emptiness", "Space is one thing that appears",
  "Emptiness is not one more thing that appears", "It is how every appearance is",
  "So space is empty too, just as the bell is", "The traditions often use the sky as an image",
  "But an image is not a ground", "and the floor is back. Only bigger",
  "Second, why I borrow only", "what appears is mind, with no outer object behind it",
  "But where I part from him is that everyday picture", "Mind and its objects rise and fall together",
  "So I use his test of space, which cuts cleanly", "And I still walk through the gate",
  // pieces or nothing
  "Now, when the floor is not found, the mind reaches quickly for one of two pictures",
  "The first: so everything is made of infinitely many tinier moments",
  "But that keeps the habit, and only shrinks it", "The search was never a microscope finding smaller things",
  "The second: so there is nothing at all", "But that is Part 1's last mistake again",
  "because the floor was never there to be taken away", "Three searches, one result",
  "Time breaks into before and after", "Matter breaks into this side and that side",
  "Space breaks into here and there", "the floor the habit wanted is not found",
  "What the search leaves is exactly what was there before it", "None of it standing on its own",
  // which holds
  "So, which holds", "By experience. Listen to the bell's tone as it fades", "Never a floor underneath",
  "By logic. Every candidate for the floor undoes itself the moment it is picked out",
  "The very dependence it was meant to escape", "By working. The floor view says the world is orderly",
  "But a partless, unchanging piece could not arise, combine, or act",
  "The view without a floor explains all of it", "Order never needed a floor",
  "So the floor view is not the truer one", "It is the default one, carried by habit and by language",
  "None of this makes my everyday words false", "What fails is only the extra claim",
  // close
  "And something loosens when this is seen", "When no floor is found anywhere, there is nothing to reach for",
  "And nothing is lost by not reaching", "Needing nothing under them",
  "This is Section 2, Part 3 of the Dependent Arising series", "In Part 4, I turn to how differently things appear",
  "A car that knocks you down", "A dream that makes you weep", "A wave function that is never seen at all",
  "And whether the web of conditions might quietly become the new floor instead",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  temple: { a: "rgba(150,105,45,0.46)", b: "rgba(60,50,130,0.44)", c: "rgba(40,90,110,0.32)" },
  rose: { a: "rgba(160,60,80,0.45)", b: "rgba(70,50,140,0.42)", c: "rgba(150,100,50,0.3)" },
  court: { a: "rgba(40,90,120,0.48)", b: "rgba(120,95,50,0.38)", c: "rgba(60,50,130,0.36)" },
  sky: { a: "rgba(40,80,140,0.5)", b: "rgba(90,70,160,0.4)", c: "rgba(40,110,120,0.3)" },
  ghost: { a: "rgba(30,32,60,0.65)", b: "rgba(60,55,100,0.42)", c: "rgba(30,40,70,0.4)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  night: { a: "rgba(12,14,40,0.75)", b: "rgba(30,25,70,0.5)", c: "rgba(10,20,40,0.5)" },
};

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
const Items: React.FC<{ items: It[] }> = ({ items }) => {
  const { t, fps } = useT();
  const c = useCue();
  return (
    <>
      {items.map(([cue, x, y, node, opt = {} as Opt], i) => {
        const a = c(cue) + (opt.d ?? 0);
        const out = opt.until ? 1 - ramp(t, c(opt.until) + (opt.ud ?? 0), 0.4) : 1;
        return (
          <At key={i} x={x} y={y} o={ramp(t, a, 0.5) * out * (opt.o ?? 1)} s={opt.pop ? pop(t, fps, a) : undefined}>
            {node}
          </At>
        );
      })}
    </>
  );
};
const Wd: React.FC<{ c?: string; s?: number; serif?: boolean; children: React.ReactNode }> = ({ c = CHALK, s = 34, serif, children }) =>
  <Glow color={c} size={s} serif={serif}>{children}</Glow>;
const K: React.FC<{ c?: string; s?: number; children: React.ReactNode }> = ({ c = GOLD, s = 30, children }) =>
  <Chip color={c} size={s}>{children}</Chip>;
const SK: React.FC<{ c?: string; s?: number; at: string; d?: number; children: React.ReactNode }> = ({ c = DIM, s = 30, at, d = 0, children }) => {
  const cue = useCue();
  return <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={cue(at) + d} /></div>;
};
const Box: React.FC<{ c: string; w?: number; title: string; sub?: string }> = ({ c, w = 460, title, sub }) => (
  <div style={{ width: w, padding: "18px 16px", borderRadius: 18, border: `3px solid ${c}`, background: "rgba(10,12,30,0.72)",
    boxShadow: `0 0 30px ${c}44`, textAlign: "center", whiteSpace: "normal" }}>
    <Wd c={c} s={32} serif>{title}</Wd>
    {sub ? <div style={{ marginTop: 8 }}><Wd c={CHALK} s={22}>{sub}</Wd></div> : null}
  </div>
);
/** Fades a block in at `from` and out at `to` (cue phrases). */
const Phase: React.FC<{ from?: string; to?: string; children: React.ReactNode }> = ({ from, to, children }) => {
  const { t } = useT();
  const c = useCue();
  const a = from ? ramp(t, c(from), 0.5) : 1;
  const b = to ? 1 - ramp(t, c(to), 0.5) : 1;
  if (a * b <= 0.001) return null;
  return <AbsoluteFill style={{ opacity: a * b }}>{children}</AbsoluteFill>;
};

// ---------------------------------------------------------------- drawings
/** A temple bell; `ring` 0..1 sends sound rings out. */
const Bell: React.FC<{ size?: number; ring: number }> = ({ size = 200, ring }) => {
  const { t } = useT();
  return (
    <svg width={size * 2} height={size * 1.3} viewBox="-200 -20 400 260" style={{ overflow: "visible" }}>
      {[0, 1, 2].map((i) => {
        const k = ((t * 0.6 + i / 3) % 1);
        return <circle key={i} cx={0} cy={120} r={90 + k * 110} fill="none" stroke={GOLD} strokeWidth={3} opacity={ring * (1 - k) * 0.7} />;
      })}
      <path d="M0 0 L0 20 M-60 40 C-60 10 60 10 60 40 L80 170 L-80 170 Z" fill={`${GOLD}33`} stroke={GOLD} strokeWidth={5} strokeLinejoin="round" />
      <path d="M-95 170 L95 170" stroke={GOLD} strokeWidth={8} strokeLinecap="round" />
      <circle cx={0} cy={192} r={12} fill={GOLD} />
    </svg>
  );
};

/** A bar of time that splits `n` times into gone (left) and not yet (right), a thin present between. */
const TimeBar: React.FC<{ n: number; o?: number }> = ({ n, o = 1 }) => {
  const w = 1100;
  const mid = w / Math.pow(3, n);
  const side = (w - mid) / 2;
  return (
    <svg width={w + 40} height={140} viewBox={`-20 -20 ${w + 40} 140`} style={{ overflow: "visible", opacity: o }}>
      {n > 0 && <rect x={0} y={20} width={side} height={50} rx={8} fill={`${DIM}33`} stroke={DIM} strokeWidth={3} />}
      <rect x={side} y={20} width={Math.max(mid, 2)} height={50} rx={Math.min(8, mid / 2)} fill={`${GOLD}55`} stroke={GOLD} strokeWidth={3} />
      {n > 0 && <rect x={side + mid} y={20} width={side} height={50} rx={8} fill={`${ICE}22`} stroke={ICE} strokeWidth={3} strokeDasharray="10 8" />}
      {n > 0 && <text x={side / 2} y={105} fill={DIM} fontSize={26} textAnchor="middle" fontFamily="SourceSans">gone</text>}
      {n > 0 && <text x={side + mid + side / 2} y={105} fill={ICE} fontSize={26} textAnchor="middle" fontFamily="SourceSans">not yet</text>}
    </svg>
  );
};

/** A centre atom with six neighbours; `mode` 0 apart, 1 all on one spot, 2 touching six faces. */
const Atoms: React.FC<{ mode: number; p: number }> = ({ mode, p }) => {
  const dirs: [number, number][] = [[0, -1], [0, 1], [-1, 0], [1, 0], [-0.7, -0.45], [0.7, 0.45]];
  const r = 38;
  const dist = mode === 1 ? 0 : mode === 2 ? 2 * r : 3.2 * r;
  return (
    <svg width={520} height={520} viewBox="-260 -260 520 520" style={{ overflow: "visible", opacity: p }}>
      {dirs.map(([dx, dy], i) => (
        <circle key={i} cx={dx * dist} cy={dy * dist} r={r} fill={`${ICE}22`} stroke={ICE} strokeWidth={3} />
      ))}
      <circle cx={0} cy={0} r={r} fill={`${ROSE}55`} stroke={ROSE} strokeWidth={4} />
      {mode === 2 && dirs.map(([dx, dy], i) => <circle key={`d${i}`} cx={dx * r} cy={dy * r} r={6} fill={GOLD} />)}
    </svg>
  );
};

/** A courtyard: wall, gate, a bell hanging on the left; `glow` lights the open room. */
const Courtyard: React.FC<{ glow?: number; link?: number; piece?: number }> = ({ glow = 0, link = 0, piece = 0 }) => (
  <svg width={1000} height={440} viewBox="0 0 1000 440" style={{ overflow: "visible" }}>
    <rect x={40} y={40} width={920} height={360} rx={10} fill={`rgba(169,221,242,${0.05 + glow * 0.12})`} stroke={CHALK} strokeWidth={5} />
    <rect x={820} y={240} width={110} height={160} fill="rgba(10,12,30,0.9)" stroke={GOLD} strokeWidth={4} />
    <text x={875} y={232} fill={GOLD} fontSize={24} textAnchor="middle" fontFamily="SourceSans">gate</text>
    <path d="M200 40 L200 110" stroke={CHALK} strokeWidth={3} />
    <path d="M170 130 C170 110 230 110 230 130 L245 200 L155 200 Z" fill={`${GOLD}44`} stroke={GOLD} strokeWidth={4} />
    <circle cx={200} cy={156} r={52 * link} fill="none" stroke={TEAL} strokeWidth={3} opacity={link} />
    <circle cx={875} cy={300} r={52 * link} fill="none" stroke={TEAL} strokeWidth={3} opacity={link} />
    <path d="M260 160 Q540 60 820 290" stroke={TEAL} strokeWidth={3} strokeDasharray="10 8" fill="none" opacity={link} />
    {piece > 0 && <rect x={168} y={170} width={64} height={28} fill={`${VIOLET}44`} stroke={VIOLET} strokeWidth={3} opacity={piece} />}
  </svg>
);

/** A mirror with a face. */
const Mirror: React.FC = () => (
  <svg width={220} height={300} viewBox="0 0 220 300" style={{ overflow: "visible" }}>
    <ellipse cx={110} cy={140} rx={100} ry={130} fill="rgba(169,221,242,0.08)" stroke={ICE} strokeWidth={5} />
    <circle cx={110} cy={130} r={42} fill="none" stroke={CHALK} strokeWidth={4} opacity={0.8} />
    <circle cx={96} cy={122} r={4} fill={CHALK} /><circle cx={124} cy={122} r={4} fill={CHALK} />
    <path d="M96 148 Q110 158 124 148" stroke={CHALK} strokeWidth={3} fill="none" />
    <path d="M110 270 L110 296 M80 296 L140 296" stroke={ICE} strokeWidth={5} />
  </svg>
);

// ---------------------------------------------------------------- scenes
const OpenScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["The moment and the atom are gone. Is space the last floor", 960, 300, <Wd c={GOLD} s={52} serif>The moment and the atom are gone.</Wd>],
      ["The moment and the atom are gone. Is space the last floor", 960, 390, <Wd c={GOLD} s={52} serif>Is space the last floor?</Wd>, { d: 1.6 }],
      ["I am John Tan, known as Thusness", 960, 620, <Wd c={DIM} s={28}>John Tan (Thusness) · my own notes</Wd>, { d: 0.3 }],
      ["I am John Tan, known as Thusness", 960, 740, <Wd c={CHALK} s={32} serif>Dependent Arising · Section 2 · Part 3</Wd>, { d: 0.8 }],
      ["In Part 2, the habit retreated to the smallest moment and the smallest piece of matter", 960, 160, <Wd c={DIM} s={26}>Part 2: the moment, the atom · no floor in either</Wd>, { d: 0.3 }],
    ]} />
  </AbsoluteFill>
);

const SpaceScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const link = ramp(t, c("And space over there, around the gate"), 0.8) * (1 - ramp(t, c("Is space many, then"), 0.5));
  const piece = ramp(t, c("Take one piece"), 0.5);
  const glow = ramp(t, c("Picture it in the courtyard"), 0.8);
  return (
    <AbsoluteFill>
      <Items items={[["The habit has lost the moment and the atom. It has one more place to stand", 960, 90, <Wd c={TEAL} s={48} serif>Space</Wd>]]} />
      <Phase to="Here is the rule">
        <Items items={[
          ["Surely, it says, space at least is real", 960, 260, <Wd c={DIM} s={30}>surely space at least is real…</Wd>],
          ["One still, empty room", 960, 330, <Wd c={DIM} s={26}>one still, empty room, there first, there after</Wd>],
          ["Or, and it is the biggest or, look for that room", 960, 480, <Wd c={GOLD} s={36} serif>Or look for that room.</Wd>],
        ]} />
      </Phase>
      <Phase from="Here is the rule" to="Is space one? There is space here, around the bell">
        <Items items={[
          ["Here is the rule", 960, 170, <Wd c={CHALK} s={38} serif>The rule</Wd>],
          ["must be either really one, or really many", 960, 250, <Wd c={DIM} s={26}>really there ⇒ really one, or really many</Wd>],
          ["Really one means a single whole, with no parts", 600, 380, <Box c={GOLD} w={460} title="really one" sub="a single whole, no parts" />, { pop: true }],
          ["Really many means a collection of such single wholes", 1320, 380, <Box c={ICE} w={460} title="really many" sub="a collection of such ones" />, { pop: true }],
          ["There is no third choice", 960, 520, <K c={WARM} s={24}>no third choice</K>, { pop: true }],
          ["Many only means several ones, counted together", 960, 600, <Wd c={DIM} s={24}>many = ones counted together</Wd>],
          ["Can a real one be found", 960, 700, <Wd c={GOLD} s={36} serif>Can a real one be found?</Wd>],
        ]} />
      </Phase>
      <Phase from="Is space one? There is space here, around the bell" to="What the test does not take away matters just as much">
        <At x={960} y={450} o={1 - ramp(t, c("So space is neither really one nor really many"), 0.5)}><Courtyard link={link} piece={piece} /></At>
        <Items items={[
          ["Is space one? There is space here, around the bell", 960, 170, <Wd c={CHALK} s={32} serif>Is space one?</Wd>, { until: "Is space many, then" }],
          ["The bell would be at the gate", 960, 700, <Wd c={WARM} s={26}>the same space? then the bell would be at the gate</Wd>, { until: "So the space here and the space there must be different" }],
          ["Something with parts is not one", 960, 720, <K c={WARM} s={24}>different? then it has parts: not one</K>, { pop: true, until: "Is space many, then" }],
          ["Is space many, then", 960, 170, <Wd c={CHALK} s={32} serif>Is space many?</Wd>, { until: "So space is neither really one nor really many" }],
          ["It too has a side towards the bronze, and a side towards the air", 960, 700, <Wd c={DIM} s={24}>one piece: a side to the bronze, a side to the air</Wd>, { until: "So space is neither really one nor really many" }],
          ["With no real one, there is nothing for many to be made of", 960, 760, <K c={WARM} s={24}>no real one: nothing for many to be made of</K>, { pop: true, until: "So space is neither really one nor really many" }],
          ["So space is neither really one nor really many", 960, 200, <Wd c={GOLD} s={34} serif>neither really one nor really many</Wd>],
          ["A face in a mirror appears clearly, as one face", 700, 470, <Mirror />],
          ["I fix my hair by it", 1160, 400, <K c={GREEN} s={24}>it works</K>, { pop: true }],
          ["there is no face there that is truly one, or truly many", 1160, 470, <Wd c={DIM} s={24}>no face in the glass, one or many</Wd>],
          ["Clearly there, as room", 1160, 560, <Wd c={TEAL} s={28} serif>space: clearly there as room, not found as a thing</Wd>],
        ]} />
      </Phase>
      <Phase from="What the test does not take away matters just as much" to="comes at the same point from another side">
        <Items items={[
          ["What the test does not take away matters just as much", 960, 200, <Wd c={CHALK} s={34} serif>What the test does not take away</Wd>],
          ["One courtyard, because a wall marks it off", 640, 380, <Box c={GREEN} w={480} title="one courtyard" sub="a wall marks it off" />, { pop: true }],
          ["Three rooms, because doors divide them", 1280, 380, <Box c={GREEN} w={480} title="three rooms" sub="doors divide them" />, { pop: true }],
          ["What fails is only a oneness or a manyness held inside the thing itself", 960, 560, <SK at="comes at the same point from another side" d={-1} s={26}>one or many held inside the thing itself</SK>],
        ]} />
      </Phase>
      <Phase from="comes at the same point from another side" to="Two cautions belong here">
        <At x={960} y={500} o={ramp(t, c("Picture it in the courtyard"), 0.6) * (1 - ramp(t, c("So two masters arrive at one place by two roads"), 0.5))}><Courtyard glow={glow} /></At>
        <Items items={[
          ["comes at the same point from another side", 960, 150, <Wd c={CHALK} s={34} serif>Space and its mark</Wd>],
          ["Earth is known by hardness. Water by wetness", 960, 220, <Wd c={DIM} s={24}>earth: hardness · water: wetness</Wd>, { until: "Picture it in the courtyard" }],
          ["The mark of space is the absence of obstruction", 960, 290, <K c={TEAL} s={28}>space: nothing blocks</K>, { pop: true, until: "Picture it in the courtyard" }],
          ["Could space be there first, and then have its mark", 960, 400, <Wd c={CHALK} s={28} serif>space first, mark later?</Wd>, { until: "Picture it in the courtyard" }],
          ["space does not exist in the slightest before its mark", 960, 470, <Wd c={GOLD} s={28} serif>"not in the slightest before its mark" (MMK 5.1)</Wd>, { until: "Picture it in the courtyard" }],
          ["The gap between the bell and the wall", 380, 240, <K c={TEAL} s={22}>the gap by the wall</K>, { pop: true, until: "Take away the bell, the wall, the gate, and the one who walks" }],
          ["The open gate I can walk through", 1500, 240, <K c={TEAL} s={22}>the open gate</K>, { pop: true, until: "Take away the bell, the wall, the gate, and the one who walks" }],
          ["The air the bell can swing in", 960, 240, <K c={TEAL} s={22}>the air the bell swings in</K>, { pop: true, until: "Take away the bell, the wall, the gate, and the one who walks" }],
          ["There would be nothing to block, and nothing to be blocked", 960, 240, <Wd c={WARM} s={26}>take them away: nothing to block, nothing blocked</Wd>, { until: "So two masters arrive at one place by two roads" }],
          ["It is not a stage that was waiting first", 960, 770, <Wd c={DIM} s={24}>singled out with what bounds it · not a stage waiting first</Wd>, { until: "So two masters arrive at one place by two roads" }],
          ["Space and its mark are designated together, like the bell and its ringing", 960, 820, <K c={GOLD} s={24}>space and its mark: designated together</K>, { pop: true, until: "So two masters arrive at one place by two roads" }],
          ["Space is neither existent nor non existent", 960, 300, <Wd c={CHALK} s={26}>not a thing, so not a no-thing either</Wd>, { until: "So two masters arrive at one place by two roads" }],
          ["One divides space, and finds it neither one nor many", 600, 380, <Box c={GOLD} w={520} title="divide it" sub="neither one nor many" />, { pop: true }],
          ["The other asks what space is apart from its mark", 1320, 380, <Box c={TEAL} w={520} title="apart from its mark" sub="nothing there" />, { pop: true }],
          ["Neither leaves a container behind", 960, 580, <SK at="And neither leaves a void" s={26}>a container</SK>],
          ["And neither leaves a void", 960, 650, <SK at="Two cautions belong here" d={-0.6} s={26}>a void</SK>],
        ]} />
      </Phase>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const sky = ramp(t, c("The traditions often use the sky as an image"), 0.8) * (1 - ramp(t, c("Second, why I borrow only"), 0.5));
  return (
    <AbsoluteFill>
      <Items items={[
        ["Two cautions belong here", 960, 100, <Wd c={CHALK} s={42} serif>Two cautions</Wd>],
        ["First, empty space is not emptiness", 960, 180, <Wd c={GOLD} s={34} serif>1 · empty space ≠ emptiness</Wd>, { until: "Second, why I borrow only" }],
        ["Space is one thing that appears", 600, 320, <Box c={TEAL} w={460} title="space" sub="one thing that appears: nothing blocks" />, { pop: true, until: "Second, why I borrow only" }],
        ["It is how every appearance is", 1320, 320, <Box c={VIOLET} w={460} title="emptiness" sub="how every appearance is" />, { pop: true, until: "Second, why I borrow only" }],
        ["So space is empty too, just as the bell is", 960, 460, <K c={GOLD} s={26}>space is empty too, like the bell</K>, { pop: true, until: "Second, why I borrow only" }],
        ["But an image is not a ground", 960, 720, <Wd c={CHALK} s={28} serif>the sky: an image, not a ground</Wd>, { until: "Second, why I borrow only" }],
        ["and the floor is back. Only bigger", 960, 790, <K c={WARM} s={24}>sky as the place everything sits = the floor, bigger</K>, { pop: true, until: "Second, why I borrow only" }],
        ["Second, why I borrow only", 960, 180, <Wd c={GOLD} s={34} serif>2 · why I borrow only the test</Wd>],
        ["what appears is mind, with no outer object behind it", 960, 330, <SK at="But where I part from him is that everyday picture" s={26}>everyday picture: what appears is mind</SK>],
        ["Mind and its objects rise and fall together", 960, 440, <Wd c={CHALK} s={28}>bells and courtyards, seeing and hearing: rising together</Wd>],
        ["So I use his test of space, which cuts cleanly", 960, 540, <K c={GOLD} s={26}>his test of space, which cuts cleanly</K>, { pop: true }],
        ["And I still walk through the gate", 960, 680, <K c={GREEN} s={24}>nothing missing: I still walk through the gate</K>, { pop: true }],
      ]} />
      <At x={960} y={600} o={sky * 0.8}>
        <svg width={700} height={120} viewBox="0 0 700 120"><path d="M20 100 Q350 -40 680 100" fill="rgba(169,221,242,0.12)" stroke={ICE} strokeWidth={3} /></svg>
      </At>
    </AbsoluteFill>
  );
};

const PiecesScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["Now, when the floor is not found, the mind reaches quickly for one of two pictures", 960, 100, <Wd c={CHALK} s={36} serif>Two quick pictures</Wd>],
      ["The first: so everything is made of infinitely many tinier moments", 560, 250, <SK at="The search was never a microscope finding smaller things" s={26}>tinier pieces, all the way down</SK>],
      ["But that keeps the habit, and only shrinks it", 560, 320, <Wd c={DIM} s={22}>the habit, only shrunk</Wd>],
      ["The second: so there is nothing at all", 1360, 250, <SK at="because the floor was never there to be taken away" s={26}>nothing at all, a blank</SK>],
      ["But that is Part 1's last mistake again", 1360, 320, <Wd c={DIM} s={22}>Part 1's last mistake again</Wd>],
      ["Three searches, one result", 960, 430, <Wd c={GOLD} s={36} serif>Three searches, one result</Wd>],
      ["Time breaks into before and after", 480, 530, <Box c={ICE} w={420} title="time" sub="before · after" />, { pop: true }],
      ["Matter breaks into this side and that side", 960, 530, <Box c={ROSE} w={420} title="matter" sub="this side · that side" />, { pop: true }],
      ["Space breaks into here and there", 1440, 530, <Box c={TEAL} w={420} title="space" sub="here · there" />, { pop: true }],
      ["the floor the habit wanted is not found", 960, 660, <Wd c={CHALK} s={28} serif>the floor the habit wanted: not found</Wd>],
      ["What the search leaves is exactly what was there before it", 960, 730, <Wd c={DIM} s={24}>left: the tone fading · the petal soft · room to walk through</Wd>],
      ["None of it standing on its own", 960, 790, <K c={GOLD} s={24}>all vivid · all working · none of it standing on its own</K>, { pop: true }],
    ]} />
  </AbsoluteFill>
);

const WhichScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["So, which holds", 960, 100, <Wd c={GOLD} s={48} serif>Which holds?</Wd>],
      ["By experience. Listen to the bell's tone as it fades", 400, 260, <Box c={ICE} w={500} title="Experience" sub="a still moment? a speck? an empty room?" />, { pop: true }],
      ["Never a floor underneath", 400, 400, <Wd c={CHALK} s={24}>never a floor underneath</Wd>],
      ["By logic. Every candidate for the floor undoes itself the moment it is picked out", 960, 260, <Box c={VIOLET} w={500} title="Logic" sub="picked out, each undoes itself" />, { pop: true }],
      ["The very dependence it was meant to escape", 960, 400, <Wd c={CHALK} s={24}>before/after · this side/that · here/there</Wd>],
      ["By working. The floor view says the world is orderly", 1520, 260, <Box c={TEAL} w={500} title="Working" sub="a partless piece could not act" />, { pop: true }],
      ["The view without a floor explains all of it", 1520, 400, <Wd c={CHALK} s={24}>the tone, the wall, the room</Wd>],
      ["Order never needed a floor", 960, 520, <Wd c={GOLD} s={38} serif>Order never needed a floor.</Wd>],
      ["So the floor view is not the truer one", 960, 620, <Wd c={CHALK} s={28} serif>not the truer view…</Wd>],
      ["It is the default one, carried by habit and by language", 960, 680, <Wd c={GOLD} s={28} serif>the default, carried by habit and language</Wd>],
      ["None of this makes my everyday words false", 960, 760, <Wd c={DIM} s={24}>there are moments, matter, room · only "real in itself" fails</Wd>],
    ]} />
  </AbsoluteFill>
);

const CloseScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const end = c("And whether the web of conditions might quietly become the new floor instead");
  return (
    <AbsoluteFill style={{ opacity: 1 - ramp(t, end + 7, 1.5) }}>
      <Items items={[
        ["And something loosens when this is seen", 960, 200, <Wd c={CHALK} s={36} serif>Something loosens</Wd>, { until: "This is Section 2, Part 3 of the Dependent Arising series" }],
        ["When no floor is found anywhere, there is nothing to reach for", 960, 300, <Wd c={CHALK} s={28}>no floor anywhere: nothing to reach for</Wd>, { until: "This is Section 2, Part 3 of the Dependent Arising series" }],
        ["And nothing is lost by not reaching", 960, 370, <K c={GOLD} s={26}>nothing lost by not reaching</K>, { pop: true, until: "This is Section 2, Part 3 of the Dependent Arising series" }],
        ["Needing nothing under them", 960, 520, <Wd c={GOLD} s={40} serif>vivid, needing nothing under them</Wd>, { until: "This is Section 2, Part 3 of the Dependent Arising series" }],
        ["This is Section 2, Part 3 of the Dependent Arising series", 960, 150, <Wd c={GOLD} s={40} serif>Dependent Arising · Section 2 · Part 3</Wd>],
        ["In Part 4, I turn to how differently things appear", 960, 230, <Wd c={DIM} s={26}>next, Part 4: Solid, Dreamlike, Described</Wd>],
        ["A car that knocks you down", 480, 400, <Box c={WARM} w={420} title="solid" sub="a car that knocks you down" />, { pop: true }],
        ["A dream that makes you weep", 960, 400, <Box c={VIOLET} w={420} title="dreamlike" sub="a dream that makes you weep" />, { pop: true }],
        ["A wave function that is never seen at all", 1440, 400, <Box c={ICE} w={420} title="described" sub="a wave function, never seen" />, { pop: true }],
        ["And whether the web of conditions might quietly become the new floor instead", 960, 600, <Wd c={CHALK} s={28} serif>is any of them the floor? or the web of conditions?</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["The moment and the atom are gone. Is space the last floor", "dusk", <OpenScene />],
    ["The habit has lost the moment and the atom. It has one more place to stand", "court", <SpaceScene />],
    ["Two cautions belong here", "sky", <CautionScene />],
    ["Now, when the floor is not found, the mind reaches quickly for one of two pictures", "ghost", <PiecesScene />],
    ["So, which holds", "whole", <WhichScene />],
    ["And something loosens when this is seen", "night", <CloseScene />],
  ];
  const moods: Mood[] = [];
  order.forEach(([cue, k], i) => {
    const s = i ? c(cue, 0.6) : 0;
    const next = i + 1 < order.length ? c(order[i + 1][0], 0.6) : s + 9999;
    moods.push({ t: s + (i ? 1.2 : 0), ...M[k] }, { t: next - 0.3, ...M[k] });
  });
  return (
    <AbsoluteFill>
      <Background moods={moods} />
      <Bokeh />
      {order.map(([cue, , node], i) => {
        const from = i ? c(cue, 0.5) : 0;
        const to = i + 1 < order.length ? c(order[i + 1][0], 0.9) : 1e9;
        return <Scene key={i} from={Math.max(0, from)} to={to}>{node}</Scene>;
      })}
    </AbsoluteFill>
  );
};
