// After Anatta · Questions: Rainbow Body (thusness-website after-anatta/q-rainbow.html).
// Arc: the story (a body shrinking in a closed room, hair and nails left) -> the puzzle: nothing is found, so what
// turns into light? -> the one-line answer: the body is held by grasping, through the wind grasping rides on ->
// what both schools share -> Dzogchen: the ground in three aspects, five lights, the lights grasped harden into
// elements and body; run backwards -> cutting through, direct crossing, four visions -> careful: in essence a
// realization, the shrinking body only a sign -> Gelug: mind and wind one, the dissolution at death, the illusory body,
// union -> why it works; tukdam -> one thing in two languages -> the five aggregates as the five lights, bright and dull
// -> holding an apple: the aggregates, the knot -> the two languages meet; untied -> read with dependency: no ground,
// nothing produced, the flame -> is it logical? where it fails, where it holds, where the logic stops -> the yang spirit: method close, view not; the corpse-guarding ghost -> other traditions;
// only the sixth knowledge frees -> cautions -> close: the apple again; the end of the holding.
// Stance: the ground, the five lights, wind and clarity are never drawn as a stuff, field or container; a source,
// a substrate, an immortal self appear only to be struck. Appearing stays vivid.
import React from "react";
import { AbsoluteFill } from "remotion";
import {
  At, Background, Bokeh, Chip, CHALK, DIM, DrawPath, GOLD, Glow, GREEN, ICE, Mood, ROSE, Reveal,
  Scene, Strike, Svg, TEAL, VIOLET, WARM, pop, ramp, useCue, useT,
} from "../lib";

// Copied verbatim from the script, in narration order. No respelled words inside.
export const PHRASES = [
  // the story
  "In eastern Tibet, the story goes, a master dies", "His students wrap the body and leave it in a small room",
  "Over a week the body grows smaller", "Rainbows are seen over the house",
  "only the hair and the nails are left",
  "Here is the puzzle", "nothing is found from its own side", "Not the self", "Not the body", "Not even the mind",
  "So if nothing is found, what turns into light",
  "This is After Anatta",
  // the answer
  "Two Tibetan schools hold a view that leaves nothing standing on its own", "The Great Perfection",
  "Both say that practice can change the body itself", "The body is not a lump that stands by itself",
  "It is held together by grasping, through the energy grasping rides on",
  "When grasping ends at its subtlest level, the form it held is freed as well",
  // shared
  "Start with what both schools share", "The body is dependently arisen, like the mind",
  "It is a stream of elements", "Mind and energy move together", "The tantras call the energy wind",
  "Every thought moves on a wind", "And grasping keeps the body heavy",
  "locks the elements into a solid body that seems to be there by itself",
  // the ground
  "Now the first school", "Its essence is empty, pure from the beginning", "Its nature is clear, spontaneously present",
  "And its energy never stops showing", "That showing first appears as five lights",
  // hardening
  "Then comes the key step", "it is taken as something other, standing over there", "The lights are grasped",
  "They harden into the five elements", "from the elements come the body and the world",
  "the ordinary body is light not recognised", "The rainbow body is the same process run backwards",
  // practices
  "There are two practices", "The first is called cutting through", "This frees the mind from grasping",
  "The second is called direct crossing", "It works with the display itself", "Lights appear in open space",
  "unfold through four visions", "the exhaustion of phenomena", "Every appearance is freed as it arises",
  "Nothing is grasped as solid any more, the body included",
  // in essence a realization
  "But careful here", "it is easy to take it for the rainbow body itself",
  "The rainbow body is first a realization",
  "everything is seen as the display of the five lights", "The corpse is only a sign of it",
  "A body that shrinks is a partial rainbow body", "And control of the elements is a worldly power",
  "the rainbow body does not mean that your body disappears",
  // the second school
  "Now the second school", "Its view is",
  "nothing exists from its own side, and everything works as a dependent designation",
  "The fast path is tantra, because it works with the subtle body",
  "Mind and wind are one thing seen from two sides", "Everyone meets this at death",
  "The elements dissolve, one into the next", "Then come three appearances, white, red and black",
  "Then the clear light", "Most of us do not recognise it",
  // the illusory body
  "The yogi rehearses this while alive", "The winds are drawn into the central channel and dissolve at the heart",
  "Thought stops, and the clear light dawns", "a body of pure wind arises, in the form of the deity",
  "This is the illusory body", "When the clear light sees emptiness directly",
  "that union is the body of a buddha",
  // why
  "Why does it work", "Because the body's material is wind, and wind is one with mind",
  "the wind it rides on comes out as a pure body, not a body of karma",
  "The clear light must see emptiness", "Clarity alone, however deep, frees nothing",
  "After death a master rests in the clear light", "and the body stays fresh",
  "A study in 2021 found no detectable brain activity in such cases",
  // one thing
  "So the two schools say one thing in two languages",
  "Form is the display, or the mount, of the subtlest knowing",
  "When that knowing is freed by emptiness, the form is freed with it",
  // aggregates
  "Now a closer look at the five lights", "What exactly is the light",
  "form, feeling, perception, formations and consciousness",
  "Each aggregate, freed, is one of five buddha families", "each appears as a bright light",
  "a dull, soft light that leads to rebirth", "The lights are not a sixth thing beside the aggregates",
  "They are the aggregates, seen without grasping", "The dull light is the same aggregate, grasped",
  // the apple
  "Hold an apple", "That is form", "That is feeling", "That is perception", "That is consciousness",
  "And then the knot", "ties the separate appearings into one solid apple out there",
  "with a me in here holding it", "That is the aggregate of formations",
  // meet
  "Here the two languages meet", "the display taken as other hardens into a solid world",
  "the habit ties the appearings into a thing out there", "It is one movement",
  "Untie the knot, and nothing is lost", "The body is held the way the apple is held",
  "are tied into one solid body in here", "is that knot untied all the way through, the body included",
  // dependency
  "Now, read with dependency", "None of this needs a ground, and none of it proves one",
  "Clarity is never missing from the body", "The error is lifting it out and making it a thing",
  "Read that way it is a substrate", "But the ground is empty",
  "The five lights are a display, not a stuff the world is made of", "And nothing is produced",
  "The way a flame goes out when wick, wax and air no longer meet",
  // is it logical?
  "Is this logical", "It depends on what the body is taken to be",
  "If the body is matter that is there from its own side", "and the aggregates are only what goes on in a mind",
  "Nothing joins the two", "It sounds like magic",
  "But neither school starts there", "The body is one of the aggregates", "Form is the first of the five",
  "It is the whole way experience is put together, coming loose, the body included",
  "And the body's solidity is partly the knot's work, as with the apple",
  "Untie the knot, and that hardness has nothing to stand on",
  "What depends on a condition does not stay when the condition is gone",
  "Now, where the logic stops", "This shows how the body is known and lived",
  "It does not show that other people will see a corpse shrink",
  "A body as others see it also depends on physical causes, and on the senses and habits of those who look",
  "So a vanishing corpse is a report to weigh, not a conclusion of the logic",
  "Read as a realization, the rainbow body follows from the view",
  // the yang spirit
  "Buddhism is not alone in this", "energy into spirit, and spirit back into emptiness",
  "The aim is the yang spirit, a body outside the body that others can see", "is called the yin spirit",
  "Mind alone, they say, is not enough", "And the endings are close",
  "the body vanishes from the coffin, leaving only clothes or a staff",
  "the master rises in broad daylight, without dying",
  // view parts
  "The method is close", "The view is not", "The Dao is a source to return to", "The goal is not to die",
  "And what is made is a self, refined until it lasts",
  "The Chan tradition said it sharply", "and boasts of his elixir of long life", "calls him a corpse-guarding ghost",
  "Even if you last eighty thousand aeons", "in the end you fall into ruin",
  "A body of light still guarded as me is still a corpse-guarding ghost, only a very refined one",
  // others
  "The same pattern runs elsewhere", "A Tamil saint locks himself in a room in 1874",
  "Christian monks speak of the light of Mount Tabor", "Sufis speak of a man of light",
  "a soul that survives, a source to return to, a self made perfect",
  "Buddhism expected this", "five of the six higher knowledges", "Only the sixth, the ending of the taints, frees",
  "So a changed body shows that energy was mastered", "It does not show that grasping has ended",
  // cautions
  "A few cautions", "The rainbow body is not the measure of insight", "Many great masters left ordinary bodies",
  "The stories cannot be checked", "And it is not a goal to grasp",
  // close
  "So, if nothing is found, what turns into light", "Nothing found turns into light",
  "The body appeared as solid because it was held", "When the holding ends, it no longer appears so",
  "Hold the apple again", "Not tied into anything", "The yang spirit is a self made perfect",
  "The rainbow body is the end of the holding",
];

const M = {
  dusk: { a: "rgba(60,45,130,0.5)", b: "rgba(170,125,50,0.38)", c: "rgba(30,70,120,0.3)" },
  light: { a: "rgba(205,150,65,0.5)", b: "rgba(95,65,175,0.42)", c: "rgba(60,150,140,0.38)" },
  search: { a: "rgba(45,50,125,0.5)", b: "rgba(150,105,45,0.36)", c: "rgba(35,85,120,0.3)" },
  deep: { a: "rgba(30,40,110,0.55)", b: "rgba(90,55,150,0.4)", c: "rgba(30,90,120,0.3)" },
  whole: { a: "rgba(190,145,60,0.46)", b: "rgba(70,60,160,0.44)", c: "rgba(50,130,140,0.32)" },
  doubt: { a: "rgba(90,45,75,0.45)", b: "rgba(55,45,125,0.48)", c: "rgba(140,95,45,0.3)" },
  jade: { a: "rgba(40,110,90,0.45)", b: "rgba(150,110,45,0.36)", c: "rgba(40,60,120,0.35)" },
};

const LIGHTS = [ICE, CHALK, GOLD, ROSE, GREEN];          // the five lights (blue, white, yellow, red, green)
const ELEMENTS = ["space", "water", "earth", "fire", "air"];
const AGGS = ["consciousness", "form", "feeling", "perception", "formations"];

// ---------------------------------------------------------------- helpers
type Opt = { d?: number; until?: string; ud?: number; pop?: boolean; o?: number };
type It = [string, number, number, React.ReactNode, Opt?];
/** Drawings and words on the board: [cue, x, y, node, options]. Each appears at its cue (+d) and leaves at `until`. */
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
/** A chip struck through at `strikeAt`: only for what is never found (a source, a substrate, an immortal self). */
const SK: React.FC<{ c?: string; s?: number; strikeAt: number; children: React.ReactNode }> = ({ c = DIM, s = 30, strikeAt, children }) => (
  <div style={{ position: "relative" }}><Chip color={c} size={s}>{children}</Chip><Strike at={strikeAt} /></div>
);

// ---------------------------------------------------------------- drawings
/** A rainbow arc; `p` draws it, `o` fades it. */
const Rainbow: React.FC<{ p: number; o?: number; w?: number }> = ({ p, o = 1, w = 900 }) => {
  const cols = [ROSE, WARM, GOLD, GREEN, TEAL, ICE, VIOLET];
  return (
    <svg width={w} height={w / 2 + 10} viewBox="0 0 900 460" style={{ overflow: "visible", opacity: o }}>
      {cols.map((col, i) => {
        const r = 400 - i * 16;
        return <DrawPath key={i} d={`M${450 - r} 450 A${r} ${r} 0 0 1 ${450 + r} 450`} p={p} color={col} width={14} len={1300} />;
      })}
    </svg>
  );
};

/** A small house with one room; the figure inside shrinks by `shrink` (0..1). */
const Room: React.FC<{ shrink: number; o?: number }> = ({ shrink, o = 1 }) => {
  const s = 1 - 0.85 * shrink;
  return (
    <svg width={420} height={380} viewBox="0 0 420 380" style={{ overflow: "visible", opacity: o }}>
      <path d="M30 150 L210 30 L390 150 L390 360 L30 360 Z" fill="rgba(241,236,224,0.06)" stroke={CHALK} strokeWidth={5} strokeLinejoin="round" />
      <g transform={`translate(210 300) scale(${s}) translate(-210 -300)`}>
        <circle cx={210} cy={210} r={26} fill="none" stroke={ICE} strokeWidth={5} />
        <path d="M150 300 Q210 230 270 300 Z" fill="rgba(169,221,242,0.18)" stroke={ICE} strokeWidth={5} />
      </g>
    </svg>
  );
};

/** The one vivid appearing: a bright disc glowing from itself (not a container, nothing inside it). */
const Appearing: React.FC<{ size?: number; o?: number; hue?: string }> = ({ size = 200, o = 1, hue = ROSE }) => {
  const { t } = useT();
  const b = 1 + 0.03 * Math.sin(t * 2);
  return (
    <div style={{ width: size, height: size, borderRadius: "50%", opacity: o, transform: `scale(${b})`,
      background: `radial-gradient(circle at 40% 35%, #FFF6DD, ${GOLD} 45%, ${hue}aa 75%, ${TEAL}55)`,
      boxShadow: `0 0 50px ${GOLD}, 0 0 90px ${hue}66` }} />
  );
};

/** A light: a glowing dot of one colour; `dull` (0..1) makes it a soft, dim light. */
const Light: React.FC<{ color: string; size?: number; dull?: number }> = ({ color, size = 90, dull = 0 }) => (
  <div style={{ width: size, height: size, borderRadius: "50%", opacity: 1 - 0.55 * dull,
    background: `radial-gradient(circle at 40% 35%, #FFFFFF${dull > 0.5 ? "55" : "ee"}, ${color} 55%, ${color}33)`,
    boxShadow: dull > 0.5 ? "none" : `0 0 30px ${color}, 0 0 60px ${color}88` }} />
);

/** A solid block (an element grasped as a thing). */
const Block: React.FC<{ color: string; size?: number }> = ({ color, size = 80 }) => (
  <div style={{ width: size, height: size, borderRadius: 6, background: `${color}44`, border: `4px solid ${color}` }} />
);

/** An apple. */
const Apple: React.FC<{ size?: number }> = ({ size = 220 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" style={{ overflow: "visible", filter: `drop-shadow(0 0 16px ${ROSE}88)` }}>
    <path d="M100 52 C70 30 22 44 26 100 C30 156 70 186 100 172 C130 186 170 156 174 100 C178 44 130 30 100 52 Z"
      fill="rgba(255,143,163,0.28)" stroke={ROSE} strokeWidth={6} strokeLinejoin="round" />
    <path d="M100 52 C102 36 108 24 118 16" fill="none" stroke={GREEN} strokeWidth={6} strokeLinecap="round" />
    <path d="M110 30 C126 18 146 22 150 30 C136 40 120 38 110 30 Z" fill="rgba(143,212,154,0.4)" stroke={GREEN} strokeWidth={4} />
  </svg>
);

/** A knot: lines from the five points to the centre; `p` draws, `untie` (0..1) lets go. */
const Knot: React.FC<{ pts: [number, number][]; cx: number; cy: number; p: number; untie: number }> = ({ pts, cx, cy, p, untie }) => (
  <Svg>
    {pts.map(([x, y], i) => (
      <path key={i} d={`M${x} ${y} L${cx} ${cy}`} stroke={WARM} strokeWidth={4} fill="none"
        strokeDasharray="1000" strokeDashoffset={1000 * (1 - p)} opacity={0.8 * (1 - untie)} />
    ))}
    <circle cx={cx} cy={cy} r={16 * p * (1 - untie)} fill={WARM} opacity={0.9 * (1 - untie)} />
  </Svg>
);

/** A seated figure (outline) with a glowing central channel; `ch` draws the channel. */
const Figure: React.FC<{ ch: number; color?: string; o?: number }> = ({ ch, color = ICE, o = 1 }) => (
  <svg width={260} height={360} viewBox="0 0 260 360" style={{ overflow: "visible", opacity: o }}>
    <circle cx={130} cy={70} r={42} fill="none" stroke={color} strokeWidth={5} />
    <path d="M60 330 C60 230 80 140 130 128 C180 140 200 230 200 330 Z" fill={`${color}14`} stroke={color} strokeWidth={5} />
    <path d="M20 330 L240 330" stroke={color} strokeWidth={5} strokeLinecap="round" />
    <DrawPath d="M130 300 L130 40" p={ch} color={GOLD} width={7} len={260} />
  </svg>
);

/** A flame that goes out at `out` (0..1). */
const Flame: React.FC<{ out: number }> = ({ out }) => {
  const { t } = useT();
  const f = 1 + 0.06 * Math.sin(t * 9);
  return (
    <svg width={160} height={260} viewBox="0 0 160 260" style={{ overflow: "visible" }}>
      <g opacity={1 - out} transform={`translate(80 150) scale(${f * (1 - 0.6 * out)}) translate(-80 -150)`}>
        <path d="M80 30 C110 80 120 110 110 140 C102 165 58 165 50 140 C40 110 50 80 80 30 Z" fill="rgba(255,122,89,0.45)" stroke={WARM} strokeWidth={5} style={{ filter: `drop-shadow(0 0 18px ${WARM})` }} />
      </g>
      <rect x={45} y={160} width={70} height={90} rx={6} fill="rgba(241,236,224,0.12)" stroke={CHALK} strokeWidth={4} />
      <path d="M80 160 L80 145" stroke={DIM} strokeWidth={4} />
    </svg>
  );
};

// ---------------------------------------------------------------- scenes
const StoryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const room = c("His students wrap the body and leave it in a small room");
  const shrink = ramp(t, c("Over a week the body grows smaller"), 4);
  const bow = ramp(t, c("Rainbows are seen over the house"), 2);
  const puz = c("Here is the puzzle");
  const aa = c("This is After Anatta");
  return (
    <AbsoluteFill>
      <At x={960} y={300} o={(1 - ramp(t, puz, 0.6))}><Rainbow p={bow} w={760} /></At>
      <At x={960} y={470} o={ramp(t, room, 0.6) * (1 - ramp(t, puz, 0.6))}><Room shrink={shrink} /></At>
      <Items items={[
        ["In eastern Tibet, the story goes, a master dies", 960, 60, <Wd c={DIM} s={30}>eastern Tibet · the story goes</Wd>, { until: "Here is the puzzle" }],
        ["only the hair and the nails are left", 960, 760, <K c={ICE}>only hair and nails left</K>, { until: "Here is the puzzle" }],
        ["nothing is found from its own side", 960, 200, <Wd c={CHALK} s={36} serif>nothing is found from its own side</Wd>, { until: "This is After Anatta" }],
        ["Not the self", 620, 380, <K c={DIM}>self: not found</K>, { until: "This is After Anatta" }],
        ["Not the body", 960, 380, <K c={DIM}>body: not found</K>, { until: "This is After Anatta" }],
        ["Not even the mind", 1300, 380, <K c={DIM}>mind: not found</K>, { until: "This is After Anatta" }],
        ["So if nothing is found, what turns into light", 960, 600, <Wd c={GOLD} s={48} serif>what turns into light?</Wd>, { until: "This is After Anatta" }],
      ]} />
      <At x={960} y={430} o={ramp(t, aa, 0.5)}><Glow color={CHALK} size={52} serif>After Anatta · Questions</Glow></At>
      <At x={960} y={510} o={ramp(t, aa + 0.8, 0.5)}><Glow color={DIM} size={28}>notes by John Tan (Thusness)</Glow></At>
    </AbsoluteFill>
  );
};

const AnswerScene: React.FC = () => {
  const c = useCue();
  return (
  <AbsoluteFill>
    <Items items={[
      ["Two Tibetan schools hold a view that leaves nothing standing on its own", 700, 170, <K c={GOLD} s={34}>Dzogchen</K>],
      ["Two Tibetan schools hold a view that leaves nothing standing on its own", 1220, 170, <K c={ICE} s={34}>Gelug</K>, { d: 0.6 }],
      ["The Great Perfection", 700, 240, <Wd c={DIM} s={26}>the Great Perfection</Wd>],
      ["The Great Perfection", 1220, 240, <Wd c={DIM} s={26}>Tsongkhapa's school</Wd>, { d: 1 }],
      ["Both say that practice can change the body itself", 960, 330, <Wd c={CHALK} s={34}>practice can change the body itself</Wd>],
      ["The body is not a lump that stands by itself", 960, 460, <SK strikeAt={c("The body is not a lump that stands by itself", 0) + 1.2} c={DIM}>a body standing by itself</SK>, { until: "It is held together by grasping, through the energy grasping rides on" }],
      ["It is held together by grasping, through the energy grasping rides on", 560, 470, <K c={CHALK}>the body</K>],
      ["It is held together by grasping, through the energy grasping rides on", 960, 470, <K c={WARM}>held by grasping</K>, { d: 0.8 }],
      ["It is held together by grasping, through the energy grasping rides on", 1360, 470, <K c={TEAL}>riding on wind</K>, { d: 1.6 }],
      ["When grasping ends at its subtlest level, the form it held is freed as well", 960, 640, <Wd c={GOLD} s={40} serif>grasping ends → the form is freed</Wd>],
    ]} />
  </AbsoluteFill>
  );
};

const SharedScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("It is a stream of elements");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Start with what both schools share", 960, 110, <Wd c={DIM} s={30}>what both schools share</Wd>],
        ["The body is dependently arisen, like the mind", 960, 190, <Wd c={CHALK} s={36} serif>the body: dependently arisen, like the mind</Wd>],
        ["Mind and energy move together", 520, 560, <K c={TEAL}>mind rides on wind</K>],
        ["Every thought moves on a wind", 520, 640, <Wd c={DIM} s={26}>every thought moves on a wind</Wd>],
        ["And grasping keeps the body heavy", 1400, 560, <K c={WARM}>grasping keeps it heavy</K>],
        ["locks the elements into a solid body that seems to be there by itself", 1400, 640, <Wd c={DIM} s={26}>locked into a solid body</Wd>],
      ]} />
      {ELEMENTS.map((e, i) => (
        <At key={e} x={560 + i * 200} y={360} o={ramp(t, st + 0.3 * i, 0.5)}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <Light color={LIGHTS[i]} size={70} /><Glow color={DIM} size={24}>{e}</Glow>
          </div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const GroundScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const five = c("That showing first appears as five lights");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the first school", 960, 110, <Wd c={GOLD} s={34}>Dzogchen</Wd>],
        ["Its essence is empty, pure from the beginning", 520, 260, <K c={ICE}>essence: empty</K>],
        ["Its nature is clear, spontaneously present", 960, 260, <K c={GOLD}>nature: clear</K>],
        ["And its energy never stops showing", 1400, 260, <K c={ROSE}>energy: unceasing display</K>],
      ]} />
      {LIGHTS.map((col, i) => (
        <At key={i} x={600 + i * 180} y={520} o={ramp(t, five + 0.25 * i, 0.5)}><Light color={col} size={100} /></At>
      ))}
      <At x={960} y={680} o={ramp(t, five + 1.5, 0.5)}><Glow color={CHALK} size={34} serif>five lights: a display, not a stuff</Glow></At>
    </AbsoluteFill>
  );
};

const HardenScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const g = c("The lights are grasped");
  const h = ramp(t, c("They harden into the five elements"), 1.2);
  const back = ramp(t, c("The rainbow body is the same process run backwards"), 1.5);
  const k = Math.max(0, h - back);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Then comes the key step", 960, 110, <Wd c={DIM} s={30}>the key step</Wd>],
        ["it is taken as something other, standing over there", 960, 190, <Wd c={CHALK} s={34} serif>taken as something other, over there</Wd>, { until: "The rainbow body is the same process run backwards" }],
        ["from the elements come the body and the world", 960, 640, <K c={WARM}>a solid body, a solid world</K>, { until: "The rainbow body is the same process run backwards" }],
        ["the ordinary body is light not recognised", 960, 740, <Wd c={GOLD} s={38} serif>the body: light not recognised</Wd>],
        ["The rainbow body is the same process run backwards", 960, 190, <Wd c={GOLD} s={36} serif>the same process, run backwards</Wd>],
      ]} />
      {LIGHTS.map((col, i) => (
        <At key={i} x={600 + i * 180} y={420} o={ramp(t, c("Then comes the key step"), 0.5)}>
          <div style={{ position: "relative", width: 100, height: 100, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", opacity: 1 - k }}><Light color={col} size={96} /></div>
            <div style={{ position: "absolute", opacity: k }}><Block color={col} size={84} /></div>
          </div>
        </At>
      ))}
      <At x={960} y={300} o={ramp(t, g, 0.4) * (1 - ramp(t, c("The rainbow body is the same process run backwards"), 0.5))}>
        <Glow color={WARM} size={28}>grasped</Glow>
      </At>
    </AbsoluteFill>
  );
};

const PracticeScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const v = c("unfold through four visions");
  const vis = ["the nature of things, seen directly", "the visions increase", "awareness at its full measure", "the exhaustion of phenomena"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["There are two practices", 960, 110, <Wd c={DIM} s={30}>two practices</Wd>],
        ["The first is called cutting through", 560, 220, <K c={ICE} s={32}>cutting through (trekchö)</K>],
        ["This frees the mind from grasping", 560, 300, <Wd c={DIM} s={26}>frees the mind</Wd>],
        ["The second is called direct crossing", 1360, 220, <K c={GOLD} s={32}>direct crossing (thögal)</K>],
        ["It works with the display itself", 1360, 300, <Wd c={DIM} s={26}>works with the display</Wd>],
        ["Nothing is grasped as solid any more, the body included", 960, 760, <Wd c={GOLD} s={36} serif>nothing grasped as solid, the body included</Wd>],
      ]} />
      {vis.map((s, i) => (
        <At key={i} x={960} y={420 + i * 70} o={ramp(t, v + 0.8 * i, 0.5)}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <Light color={LIGHTS[i + 1]} size={40 + 8 * i} /><Glow color={i === 3 ? GOLD : CHALK} size={30}>{`${i + 1}. ${s}`}</Glow>
          </div>
        </At>
      ))}
    </AbsoluteFill>
  );
};

const RealizationScene: React.FC = () => {
  const c = useCue();
  return (
  <AbsoluteFill>
    <Items items={[
      ["But careful here", 960, 110, <Wd c={WARM} s={34}>careful here</Wd>],
      ["it is easy to take it for the rainbow body itself", 960, 230, <SK strikeAt={c("The rainbow body is first a realization")} c={DIM}>rainbow body = the body disappears</SK>],
      ["The rainbow body is first a realization", 960, 360, <K c={GOLD} s={36}>first, a realization</K>],
      ["everything is seen as the display of the five lights", 960, 440, <Wd c={CHALK} s={30}>everything seen as display of the five lights</Wd>],
      ["The corpse is only a sign of it", 560, 580, <K c={DIM}>the corpse: only a sign</K>],
      ["A body that shrinks is a partial rainbow body", 960, 580, <K c={DIM}>shrinking: partial</K>],
      ["And control of the elements is a worldly power", 1360, 580, <K c={DIM}>control of elements: worldly</K>],
      ["the rainbow body does not mean that your body disappears", 960, 740, <Wd c={GOLD} s={34} serif>"rainbow body does not mean that your body disappears"</Wd>],
      ["the rainbow body does not mean that your body disappears", 960, 800, <Wd c={DIM} s={24}>Awakening to Reality, 2013</Wd>, { d: 0.8 }],
    ]} />
  </AbsoluteFill>
  );
};

const GelugScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const d = c("Then come three appearances, white, red and black");
  const cl = c("Then the clear light");
  const cols = [CHALK, ROSE, "#2a2a3a"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now the second school", 960, 110, <Wd c={ICE} s={34}>Gelug</Wd>],
        ["nothing exists from its own side, and everything works as a dependent designation", 960, 190, <Wd c={CHALK} s={30}>nothing from its own side · everything works as a dependent designation</Wd>, { until: "Mind and wind are one thing seen from two sides" }],
        ["The fast path is tantra, because it works with the subtle body", 960, 270, <K c={GOLD}>tantra: works with the subtle body</K>, { until: "Mind and wind are one thing seen from two sides" }],
        ["Mind and wind are one thing seen from two sides", 960, 210, <Wd c={TEAL} s={38} serif>mind and wind: one thing, two sides</Wd>],
        ["Everyone meets this at death", 960, 300, <Wd c={DIM} s={28}>everyone meets this at death</Wd>],
        ["The elements dissolve, one into the next", 960, 380, <Wd c={DIM} s={28}>earth → water → fire → air</Wd>],
        ["Most of us do not recognise it", 960, 760, <Wd c={DIM} s={28}>not recognised: habit carries us on</Wd>],
      ]} />
      {cols.map((col, i) => (
        <At key={i} x={720 + i * 240} y={530} o={ramp(t, d + 0.6 * i, 0.5)}>
          <div style={{ width: 120, height: 120, borderRadius: "50%", background: col, border: `3px solid ${CHALK}88` }} />
        </At>
      ))}
      <At x={960} y={660} o={ramp(t, cl, 0.6)}><Glow color={GOLD} size={40} serif>clear light</Glow></At>
    </AbsoluteFill>
  );
};

const IllusoryScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ch = ramp(t, c("The winds are drawn into the central channel and dissolve at the heart"), 2);
  const wb = c("a body of pure wind arises, in the form of the deity");
  const un = c("When the clear light sees emptiness directly");
  return (
    <AbsoluteFill>
      <At x={620} y={430} o={ramp(t, c("The yogi rehearses this while alive"), 0.6)}><Figure ch={ch} /></At>
      <At x={1300} y={430} o={ramp(t, wb, 1)}><Figure ch={1} color={GOLD} o={0.85} /></At>
      <Items items={[
        ["The yogi rehearses this while alive", 960, 110, <Wd c={DIM} s={30}>rehearsed while alive</Wd>],
        ["Thought stops, and the clear light dawns", 620, 700, <K c={GOLD}>clear light dawns</K>],
        ["This is the illusory body", 1300, 700, <K c={TEAL}>the illusory body: pure wind</K>],
        ["that union is the body of a buddha", 960, 790, <Wd c={GOLD} s={36} serif>clear light + illusory body = union</Wd>],
      ]} />
      <At x={960} y={430} o={ramp(t, un, 0.6)}><Glow color={CHALK} size={44}>+</Glow></At>
    </AbsoluteFill>
  );
};

const WhyScene: React.FC = () => {
  const c = useCue();
  return (
  <AbsoluteFill>
    <Items items={[
      ["Why does it work", 960, 110, <Wd c={DIM} s={32}>why does it work?</Wd>],
      ["Because the body's material is wind, and wind is one with mind", 960, 210, <Wd c={TEAL} s={34} serif>the body's material is wind; wind is one with mind</Wd>],
      ["the wind it rides on comes out as a pure body, not a body of karma", 960, 290, <K c={GOLD}>a pure body, not a body of karma</K>],
      ["The clear light must see emptiness", 760, 410, <K c={ICE}>clear light must see emptiness</K>],
      ["Clarity alone, however deep, frees nothing", 1240, 410, <SK strikeAt={c("Clarity alone, however deep, frees nothing", 0) + 1.2} c={DIM}>clarity alone frees</SK>],
      ["After death a master rests in the clear light", 960, 560, <K c={CHALK}>tukdam: resting in the clear light</K>],
      ["and the body stays fresh", 960, 630, <Wd c={DIM} s={28}>the body stays fresh</Wd>],
      ["A study in 2021 found no detectable brain activity in such cases", 960, 740, <Wd c={DIM} s={26}>2021 study: no detectable brain activity (it tested the brain, not the body)</Wd>],
    ]} />
  </AbsoluteFill>
  );
};

const OneScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["So the two schools say one thing in two languages", 960, 150, <Wd c={DIM} s={32}>one thing, two languages</Wd>],
        ["Form is the display, or the mount, of the subtlest knowing", 960, 300, <Wd c={CHALK} s={40} serif>form: the display, or the mount, of the subtlest knowing</Wd>],
        ["When that knowing is freed by emptiness, the form is freed with it", 960, 600, <Wd c={GOLD} s={40} serif>knowing freed → form freed</Wd>],
      ]} />
      <At x={960} y={450} o={ramp(t, c("Form is the display, or the mount, of the subtlest knowing"), 0.8)}><Appearing size={150} hue={VIOLET} /></At>
    </AbsoluteFill>
  );
};

const AggScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const a = c("form, feeling, perception, formations and consciousness");
  const fam = c("Each aggregate, freed, is one of five buddha families");
  const dull = c("a dull, soft light that leads to rebirth");
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now a closer look at the five lights", 960, 110, <Wd c={DIM} s={32}>what exactly is the light?</Wd>],
        ["The lights are not a sixth thing beside the aggregates", 960, 690, <SK strikeAt={c("The lights are not a sixth thing beside the aggregates", 0) + 1.5} c={DIM}>a sixth thing beside the aggregates</SK>, { until: "They are the aggregates, seen without grasping" }],
        ["They are the aggregates, seen without grasping", 960, 690, <Wd c={GOLD} s={36} serif>the aggregates, seen without grasping</Wd>],
        ["The dull light is the same aggregate, grasped", 960, 770, <Wd c={DIM} s={30}>the dull light: the same aggregate, grasped</Wd>],
      ]} />
      {AGGS.map((g, i) => (
        <At key={g} x={560 + i * 200} y={300} o={ramp(t, a + 0.4 * i, 0.4)}><K c={CHALK} s={24}>{g}</K></At>
      ))}
      {LIGHTS.map((col, i) => (
        <At key={i} x={560 + i * 200} y={440} o={ramp(t, fam + 0.3 * i, 0.4)}><Light color={col} size={90} /></At>
      ))}
      {LIGHTS.map((col, i) => (
        <At key={`d${i}`} x={560 + i * 200} y={560} o={ramp(t, dull + 0.2 * i, 0.4) * 0.8}><Light color={col} size={60} dull={1} /></At>
      ))}
    </AbsoluteFill>
  );
};

// the apple, with the five aggregates around it
const APTS: [number, number][] = [[560, 280], [1360, 280], [480, 560], [1440, 560], [960, 760]];
const AppleScene: React.FC = () => {
  const { t, fps } = useT();
  const c = useCue();
  const h = c("Hold an apple");
  const kn = ramp(t, c("And then the knot"), 1.2);
  const labels: [string, string, string][] = [
    ["That is form", "form: hardness, coolness, red", CHALK],
    ["That is feeling", "feeling: the sweetness is pleasant", ROSE],
    ["That is perception", "perception: \"an apple\"", GOLD],
    ["That is consciousness", "consciousness: touch, seeing, tasting, unmixed", ICE],
    ["That is the aggregate of formations", "formations: the knot", WARM],
  ];
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={ramp(t, h, 0.6)} s={pop(t, fps, h)}><Apple size={240} /></At>
      <Knot pts={APTS.slice(0, 4)} cx={960} cy={460} p={kn} untie={0} />
      {labels.map(([cue, text, col], i) => (
        <At key={i} x={APTS[i][0]} y={APTS[i][1]} o={ramp(t, c(cue), 0.5)}><K c={col} s={24}>{text}</K></At>
      ))}
      <Items items={[
        ["with a me in here holding it", 960, 140, <Wd c={WARM} s={32}>one solid apple out there · a me in here</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const MeetScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const un = ramp(t, c("Untie the knot, and nothing is lost"), 1.5);
  return (
    <AbsoluteFill>
      <At x={960} y={460} o={1}><Apple size={200} /></At>
      <Knot pts={APTS.slice(0, 4)} cx={960} cy={460} p={1} untie={un} />
      <Items items={[
        ["Here the two languages meet", 960, 110, <Wd c={DIM} s={32}>the two languages meet</Wd>],
        ["the display taken as other hardens into a solid world", 520, 260, <K c={GOLD} s={26}>lights grasped → solid</K>, { until: "Untie the knot, and nothing is lost" }],
        ["the habit ties the appearings into a thing out there", 1400, 260, <K c={WARM} s={26}>appearings tied → an apple out there</K>, { until: "Untie the knot, and nothing is lost" }],
        ["It is one movement", 960, 700, <Wd c={CHALK} s={38} serif>one movement</Wd>, { until: "Untie the knot, and nothing is lost" }],
        ["Untie the knot, and nothing is lost", 960, 700, <Wd c={GOLD} s={36} serif>untied: this hardness, this red, this sweetness</Wd>, { until: "The body is held the way the apple is held" }],
        ["The body is held the way the apple is held", 960, 700, <Wd c={CHALK} s={34}>the body is held the way the apple is held</Wd>],
        ["is that knot untied all the way through, the body included", 960, 780, <Wd c={GOLD} s={34} serif>the rainbow body: the knot untied, all the way through</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const DependScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const out = ramp(t, c("The way a flame goes out when wick, wax and air no longer meet"), 2.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Now, read with dependency", 960, 110, <Wd c={DIM} s={32}>read with dependency</Wd>],
        ["None of this needs a ground, and none of it proves one", 960, 190, <Wd c={CHALK} s={32}>needs no ground · proves no ground</Wd>],
        ["Clarity is never missing from the body", 560, 320, <K c={ICE}>clarity never missing</K>],
        ["The error is lifting it out and making it a thing", 560, 400, <Wd c={DIM} s={26}>the error: lifting it out</Wd>],
        ["Read that way it is a substrate", 1360, 320, <SK strikeAt={c("But the ground is empty", 0)} c={DIM}>a luminous stuff beneath everything</SK>],
        ["But the ground is empty", 1360, 400, <Wd c={GOLD} s={28}>the ground is empty</Wd>],
        ["The five lights are a display, not a stuff the world is made of", 960, 500, <Wd c={CHALK} s={30}>the lights: a display, not a stuff</Wd>],
        ["And nothing is produced", 1300, 650, <K c={GOLD}>nothing produced</K>],
      ]} />
      <At x={700} y={680} o={ramp(t, c("And nothing is produced"), 0.6)}><Flame out={out} /></At>
    </AbsoluteFill>
  );
};

const LogicScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const stop = "Now, where the logic stops";
  const un = ramp(t, c("Untie the knot, and that hardness has nothing to stand on"), 1.5);
  return (
    <AbsoluteFill>
      <Items items={[
        ["Is this logical", 960, 110, <Wd c={CHALK} s={36} serif>is it logical?</Wd>, { until: stop }],
        ["If the body is matter that is there from its own side", 520, 230, <SK strikeAt={c("But neither school starts there", 0)} c={DIM}>a body there from its own side</SK>, { until: stop }],
        ["and the aggregates are only what goes on in a mind", 1400, 230, <SK strikeAt={c("But neither school starts there", 0)} c={DIM}>aggregates: only in the mind</SK>, { until: stop }],
        ["Nothing joins the two", 960, 320, <Wd c={WARM} s={30}>nothing joins the two: magic</Wd>, { until: stop }],
        ["The body is one of the aggregates", 960, 430, <K c={GOLD}>form: the first of the five aggregates</K>, { until: stop }],
        ["It is the whole way experience is put together, coming loose, the body included", 960, 510, <Wd c={CHALK} s={28}>the whole way experience is put together, coming loose</Wd>, { until: stop }],
        ["And the body's solidity is partly the knot's work, as with the apple", 1300, 640, <K c={WARM} s={28}>solidity: partly the knot's work</K>, { until: stop }],
        ["What depends on a condition does not stay when the condition is gone", 960, 800, <Wd c={GOLD} s={32} serif>what depends on a condition does not stay without it</Wd>, { until: stop }],
        [stop, 960, 110, <Wd c={WARM} s={36}>where the logic stops</Wd>],
        ["This shows how the body is known and lived", 560, 260, <K c={GREEN} s={28}>shown: how the body is known and lived</K>],
        ["It does not show that other people will see a corpse shrink", 1360, 260, <K c={WARM} s={28}>not shown: a corpse shrinking for others</K>],
        ["A body as others see it also depends on physical causes, and on the senses and habits of those who look", 960, 420, <Wd c={DIM} s={28}>also depends on: physical causes · the eyes and habits of those who look</Wd>],
        ["So a vanishing corpse is a report to weigh, not a conclusion of the logic", 960, 560, <Wd c={CHALK} s={32}>a vanishing corpse: a report to weigh</Wd>],
        ["Read as a realization, the rainbow body follows from the view", 960, 700, <Wd c={GOLD} s={34} serif>as a realization: it follows from the view</Wd>],
      ]} />
      <At x={620} y={650} o={ramp(t, c("And the body's solidity is partly the knot's work, as with the apple"), 0.6) * (1 - ramp(t, c(stop), 0.4))}><Apple size={150} /></At>
      <Knot pts={[[500, 560], [740, 560], [500, 740], [740, 740]]} cx={620} cy={650} p={ramp(t, c("And the body's solidity is partly the knot's work, as with the apple"), 1)} untie={Math.max(un, ramp(t, c(stop), 0.4))} />
    </AbsoluteFill>
  );
};

const TaoScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const st = c("energy into spirit, and spirit back into emptiness");
  const steps = ["essence 精", "energy 气", "spirit 神", "emptiness 虚"];
  return (
    <AbsoluteFill>
      <Items items={[
        ["Buddhism is not alone in this", 960, 110, <Wd c={DIM} s={32}>Taoist inner alchemy</Wd>],
        ["The aim is the yang spirit, a body outside the body that others can see", 600, 420, <K c={GOLD} s={30}>yang spirit 阳神: others can see it</K>],
        ["is called the yin spirit", 1320, 420, <K c={DIM} s={30}>yin spirit 阴神: only you see it</K>],
        ["Mind alone, they say, is not enough", 960, 520, <Wd c={CHALK} s={32} serif>mind alone is not enough (as in Dzogchen)</Wd>],
        ["the body vanishes from the coffin, leaving only clothes or a staff", 600, 680, <K c={ICE} s={26}>尸解: clothes or a staff left</K>],
        ["the master rises in broad daylight, without dying", 1320, 680, <K c={ICE} s={26}>白日飞升: rising in daylight</K>],
      ]} />
      {steps.map((s, i) => (
        <At key={i} x={540 + i * 280} y={260} o={ramp(t, st - 2 + 0.6 * i, 0.5)}><Glow color={i === 3 ? GOLD : CHALK} size={32}>{s}{i < 3 ? "  →" : ""}</Glow></At>
      ))}
    </AbsoluteFill>
  );
};

const ViewScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  return (
    <AbsoluteFill>
      <Items items={[
        ["The method is close", 700, 110, <Wd c={GREEN} s={34}>the method: close</Wd>],
        ["The view is not", 1220, 110, <Wd c={WARM} s={34}>the view: not</Wd>],
        ["The Dao is a source to return to", 520, 230, <SK strikeAt={c("The Dao is a source to return to", 0) + 1.6} c={DIM}>a source to return to</SK>],
        ["The goal is not to die", 960, 230, <SK strikeAt={c("The goal is not to die", 0) + 1.6} c={DIM}>not to die</SK>],
        ["And what is made is a self, refined until it lasts", 1400, 230, <SK strikeAt={c("And what is made is a self, refined until it lasts", 0) + 1.6} c={DIM}>a self, refined to last</SK>],
        ["The Chan tradition said it sharply", 960, 380, <Wd c={CHALK} s={30}>Lü Dongbin and Huanglong</Wd>],
        ["and boasts of his elixir of long life", 960, 450, <Wd c={DIM} s={28}>"my elixir of long life"</Wd>],
        ["calls him a corpse-guarding ghost", 960, 540, <Wd c={GOLD} s={44} serif>"corpse-guarding ghost!" 守尸鬼</Wd>],
        ["Even if you last eighty thousand aeons", 960, 630, <Wd c={CHALK} s={28}>eighty thousand aeons…</Wd>],
        ["in the end you fall into ruin", 960, 690, <Wd c={CHALK} s={28}>…and in the end, ruin</Wd>],
        ["A body of light still guarded as me is still a corpse-guarding ghost, only a very refined one", 960, 790, <Wd c={GOLD} s={30} serif>a body of light guarded as me: still a corpse-guarding ghost</Wd>],
      ]} />
    </AbsoluteFill>
  );
};

const OthersScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const k = c("five of the six higher knowledges");
  return (
    <AbsoluteFill>
      <Items items={[
        ["The same pattern runs elsewhere", 960, 110, <Wd c={DIM} s={32}>the same pattern elsewhere</Wd>],
        ["A Tamil saint locks himself in a room in 1874", 520, 220, <K c={ROSE} s={26}>Vallalar, 1874</K>],
        ["Christian monks speak of the light of Mount Tabor", 960, 220, <K c={ICE} s={26}>the light of Tabor</K>],
        ["Sufis speak of a man of light", 1400, 220, <K c={GOLD} s={26}>the man of light</K>],
        ["a soul that survives, a source to return to, a self made perfect", 960, 320, <Wd c={DIM} s={28}>read through something that stands by itself</Wd>],
        ["Buddhism expected this", 960, 430, <Wd c={CHALK} s={32} serif>Buddhism expected this</Wd>],
        ["Only the sixth, the ending of the taints, frees", 1260, 640, <K c={GOLD} s={28}>the sixth: the ending of the taints</K>],
        ["So a changed body shows that energy was mastered", 960, 760, <Wd c={CHALK} s={30}>a changed body: energy mastered</Wd>],
        ["It does not show that grasping has ended", 960, 820, <Wd c={WARM} s={30}>not: grasping ended</Wd>],
      ]} />
      {[0, 1, 2, 3, 4].map(i => (
        <At key={i} x={460 + i * 110} y={560} o={ramp(t, k + 0.3 * i, 0.4)}><Light color={DIM} size={60} dull={1} /></At>
      ))}
      <At x={460 + 5 * 110 + 60} y={560} o={ramp(t, c("Only the sixth, the ending of the taints, frees"), 0.5)}><Light color={GOLD} size={80} /></At>
      <At x={680} y={640} o={ramp(t, k + 1.5, 0.5)}><Glow color={DIM} size={24}>five: shared with other paths</Glow></At>
    </AbsoluteFill>
  );
};

const CautionScene: React.FC = () => (
  <AbsoluteFill>
    <Items items={[
      ["A few cautions", 960, 150, <Wd c={WARM} s={34}>a few cautions</Wd>],
      ["The rainbow body is not the measure of insight", 960, 290, <K c={CHALK}>not the measure of insight</K>],
      ["Many great masters left ordinary bodies", 960, 370, <Wd c={DIM} s={28}>many great masters left ordinary bodies</Wd>],
      ["The stories cannot be checked", 960, 480, <K c={CHALK}>the stories cannot be checked</K>],
      ["And it is not a goal to grasp", 960, 590, <K c={CHALK}>not a goal to grasp</K>],
    ]} />
  </AbsoluteFill>
);

const EndScene: React.FC = () => {
  const { t } = useT();
  const c = useCue();
  const ap = c("Hold the apple again");
  const L: [string, string, string][] = [
    ["The yang spirit is a self made perfect", "The yang spirit is a self made perfect.", DIM],
    ["The rainbow body is the end of the holding", "The rainbow body is the end of the holding.", GOLD],
  ];
  return (
    <AbsoluteFill>
      <Items items={[
        ["So, if nothing is found, what turns into light", 960, 150, <Wd c={CHALK} s={36} serif>if nothing is found, what turns into light?</Wd>, { until: "Hold the apple again" }],
        ["Nothing found turns into light", 960, 280, <Wd c={GOLD} s={40} serif>nothing found turns into light</Wd>, { until: "Hold the apple again" }],
        ["The body appeared as solid because it was held", 960, 400, <Wd c={CHALK} s={32}>it appeared solid because it was held</Wd>, { until: "Hold the apple again" }],
        ["When the holding ends, it no longer appears so", 960, 480, <Wd c={CHALK} s={32}>the holding ends: it no longer appears so</Wd>, { until: "Hold the apple again" }],
        ["Not tied into anything", 960, 160, <Wd c={ICE} s={30}>this hardness · this red · this sweetness · not tied</Wd>, { until: "The yang spirit is a self made perfect" }],
      ]} />
      <At x={960} y={420} o={ramp(t, ap, 0.6) * (1 - 0.6 * ramp(t, c("The yang spirit is a self made perfect"), 0.6))}><Apple size={220} /></At>
      {L.map(([cue, text, col], i) => (
        <At key={i} x={960} y={620 + i * 100} o={ramp(t, c(cue) - 0.2, 0.3)}><Reveal text={text} at={c(cue)} size={46} color={col} speed={0.03} /></At>
      ))}
    </AbsoluteFill>
  );
};

// ---------------------------------------------------------------- the body
export const Body: React.FC = () => {
  const c = useCue();
  const order: [string, keyof typeof M, React.ReactNode][] = [
    ["In eastern Tibet, the story goes, a master dies", "dusk", <StoryScene />],
    ["Two Tibetan schools hold a view that leaves nothing standing on its own", "whole", <AnswerScene />],
    ["Start with what both schools share", "search", <SharedScene />],
    ["Now the first school", "light", <GroundScene />],
    ["Then comes the key step", "deep", <HardenScene />],
    ["There are two practices", "light", <PracticeScene />],
    ["But careful here", "doubt", <RealizationScene />],
    ["Now the second school", "deep", <GelugScene />],
    ["The yogi rehearses this while alive", "search", <IllusoryScene />],
    ["Why does it work", "whole", <WhyScene />],
    ["So the two schools say one thing in two languages", "light", <OneScene />],
    ["Now a closer look at the five lights", "light", <AggScene />],
    ["Hold an apple", "whole", <AppleScene />],
    ["Here the two languages meet", "light", <MeetScene />],
    ["Now, read with dependency", "search", <DependScene />],
    ["Is this logical", "doubt", <LogicScene />],
    ["Buddhism is not alone in this", "jade", <TaoScene />],
    ["The method is close", "doubt", <ViewScene />],
    ["The same pattern runs elsewhere", "dusk", <OthersScene />],
    ["A few cautions", "search", <CautionScene />],
    ["So, if nothing is found, what turns into light", "light", <EndScene />],
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
