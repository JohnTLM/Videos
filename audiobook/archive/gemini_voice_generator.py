#!/usr/bin/env python3
"""
Automated Batch Voice Synthesizer for John Tan's (Thusness) Works
================================================================
Engine: Gemini Neural Audio (gemini-2.5-flash-preview-tts) with 'Kore' voice profile.
Target Output: Google Drive folder "voices for ebooks and articles/"
Metadata: "AUDIO_CHANGELOG.md" and "voice_manifest.json"

Catalog:
- Book 1: The Logical Necessity of a Substrateless World (17 Sections)
- Book 2: The Transition from Anatta to Emptiness
- Book 3: Nāgārjuna's Middle Way
- Book 4: The Observer and the Taste of Presence
- Book 5: The Logic After Anatta (Complete 405-page Structure)
- All 19 Companion / Bonus Articles from Google Drive Collection
"""

import os
import sys
import re
import json
import time
import base64
import struct
import hashlib
import urllib.request
import urllib.error
import shutil
from pathlib import Path
from datetime import datetime

# -------------------------------------------------------------------------
# Configuration
# -------------------------------------------------------------------------
API_KEY = os.environ.get("GEMINI_API_KEY", "")
MODEL_NAME = "gemini-2.5-flash-preview-tts"
VOICE_NAME = "Kore"

FOLDER_NAME = "voices for ebooks and articles"

def detect_google_drive_folder():
    home = Path.home()
    possible_paths = [
        home / "Google Drive" / "My Drive" / FOLDER_NAME,
        home / "Library" / "CloudStorage" / "GoogleDrive" / "My Drive" / FOLDER_NAME,
        Path("G:/My Drive") / FOLDER_NAME,
        Path("G:/") / FOLDER_NAME,
        Path("H:/My Drive") / FOLDER_NAME,
        home / "google-drive" / FOLDER_NAME,
        Path.cwd() / FOLDER_NAME
    ]
    for p in possible_paths:
        try:
            if p.parent.exists():
                return str(p)
        except Exception:
            continue
    return os.path.join(os.getcwd(), FOLDER_NAME)

OUTPUT_DIR = os.environ.get("GDRIVE_VOICES_DIR", detect_google_drive_folder())
PROGRESS_FILE = os.path.join(OUTPUT_DIR, "progress.json")
MANIFEST_FILE = os.path.join(OUTPUT_DIR, "voice_manifest.json")
CHANGELOG_FILE = os.path.join(OUTPUT_DIR, "AUDIO_CHANGELOG.md")
SPEC_OUTPUT_FILE = os.path.join(OUTPUT_DIR, "voice_generation_spec.md")

MAX_CHUNK_CHARS = 550

# -------------------------------------------------------------------------
# Complete Expanded Catalog from Google Drive
# -------------------------------------------------------------------------
WORKS_CATALOG = [
    # ==================== BOOK 1 ====================
    {
        "id": "book-1",
        "type": "ebook",
        "title": "The Logical Necessity of a Substrateless World",
        "short_name": "Book 1 - Substrateless World",
        "chapters": [
            {
                "num": 0,
                "title": "Introduction - The Unravelling of the Substantialist Premise",
                "text": """Watch a whirlpool in a river. It has a shape you could sketch, a place you could point to, a lifetime you could time with a watch. Children throw leaves into it to see them spin. Yet not one drop of the water that makes it up stays in it for more than a moment; every drop is arriving or leaving. Ask what the whirlpool is, apart from the water passing through it, and nothing can be found. Ask whether it is therefore unreal, and the leaves go on spinning.

Or hold a cube of ice. The cold is sharp and unmistakable, and it seems, beyond any doubt, to be in the ice. Yet look for the cold in the ice, in the hand or somewhere between them, and it is not there. The coldness is vividly there, and it is nowhere to be found when sought.

This book is about that double fact: vivid presence and complete unfindability—and about what follows when you take it all the way. My claim is that the double fact is not a curiosity of whirlpools and ice cubes. It is the condition of everything that can be posited at all: objects, persons, minds, moments, relations, and the very dependence through which they appear."""
            },
            {
                "num": 1,
                "title": "The Substantialist Misconception",
                "text": """For centuries, common sense and classical metaphysics have shared an intuitive assumption: that reality is made of things that exist from their own side, possessing an intrinsic nature (svabhāva). We habitually treat objects as self-standing entities that enter into relationships after the fact. But when inspected with uncompromising logic, no entity can ever be found standing independently of its dependencies."""
            },
            {
                "num": 2,
                "title": "Interlude - Same Words Different Worlds",
                "text": """Because the vocabulary of dependent arising, conditions, time, and emptiness is easily heard through substantialist lenses, we must clarify: co-arising does not mean two entities cause each other. Rather, they are designated together. Conventional truth and ultimate truth are not two separate layers of reality; they are two aspects of one single appearance."""
            },
            {
                "num": 3,
                "title": "The Logical Impossibility of Intrinsic Nature",
                "text": """Nāgārjuna demonstrates that an intrinsic nature produced from causes and conditions is a contradiction in terms. If it is produced, it is contingent, relational, and an artifact. If it is intrinsic, it cannot depend on anything. Therefore, no intrinsic nature can ever be established."""
            },
            {
                "num": 4,
                "title": "Unfindability and Freedom from the Eight Extremes",
                "text": """When a phenomenon is sought apart from its conditions, parts, and mental designations, absolutely nothing is found. Unfindability is not nothingness; it is the freedom from the eight metaphysical extremes: arising and ceasing, permanence and annihilation, identity and difference, coming and going."""
            },
            {
                "num": 5,
                "title": "Mutual Dependency and Non-Hierarchy of Relation",
                "text": """Entities do not possess properties prior to relation; relations do not float without terms. Terms and relations co-arise without hierarchical priority. There is no foundation beneath relations and no ceiling above them."""
            },
            {
                "num": 6,
                "title": "The Non-Dimensional Two Truths",
                "text": """The two truths are non-dimensional. Emptiness is not a subterranean void beneath appearances, nor a transcendent realm above them. Conventional appearance is itself ultimate emptiness; emptiness is the very texture of vivid appearance."""
            },
            {
                "num": 7,
                "title": "The Impossibility of Absolute Nothingness",
                "text": """Substantialism and nihilism are two sides of the same coin. Both imagine an inherent essence: substantialism affirms it, nihilism mourns its absence. Because an inherent essence never existed in the first place, absolute nothingness is impossible."""
            },
            {
                "num": 8,
                "title": "Dissolving the Hard Problem of Consciousness",
                "text": """The hard problem of consciousness arises only when matter is posited as dead, unconscious substance and mind is posited as an immaterial watcher. When both internal subject and external object are recognized as co-arising designations, the dualistic hard problem dissolves."""
            },
            {
                "num": 9,
                "title": "States of Awareness Deep Sleep and Death",
                "text": """What happens to awareness in deep dreamless sleep or death? There is no invariant, continuous container that witnesses sleep. Continuity is conventionally designated across functional correlations, without requiring an unchanging metaphysical bearer."""
            },
            {
                "num": 10,
                "title": "The Reconceptualization of Continuity",
                "text": """Continuity does not require a thread or substrate. Like a melody where each note is transient, the musical continuity is not carried by a silent hum running underneath. One moment conditions the next without any substance passing between them."""
            },
            {
                "num": 11,
                "title": "Perceptual Co-Arising",
                "text": """Perception is never passive reception of raw data from a separate outer world. In bare perception, seeing and the seen are one event. The division into inner viewer and outer object is an after-the-fact conceptual projection."""
            },
            {
                "num": 12,
                "title": "Alignment with 4E Cognition",
                "text": """The Middle Way finds natural resonance in contemporary 4E cognitive science: embodied, embedded, enactive, and extended mind theories. Cognition is not an internal mirror calculating an external world; it is an active, relational engagement."""
            },
            {
                "num": 13,
                "title": "Dissolution of Internal vs External Worlds",
                "text": """The Cartesian border between 'inside the skull' and 'outside in nature' collapses. Experiences are not trapped inside a mental box, nor is there an alien universe outside. Appearance is seamless and centerless."""
            },
            {
                "num": 14,
                "title": "Conceptual Designation vs Mere Naming",
                "text": """Designation is not arbitrary or whimsical make-believe. A designation holds up when it coordinates reliably with action and experience. A clay pot holds water; a spoken word communicates meaning. Functionality is preserved without requiring ontological solidity."""
            },
            {
                "num": 15,
                "title": "Science in a Substrateless World",
                "text": """Science does not require an ultimate indivisible atom, particle, or ground. Physics, chemistry, and biology succeed by discovering relational regularities and refining designations. Quantum mechanics and relativity confirm that relations precede entities."""
            },
            {
                "num": 16,
                "title": "Conclusion - The Freedom of a Substrateless World",
                "text": """By relinquishing the substantialist search for fixed foundations, we discover that vivid appearance does not imply ontological solidity. Reality is neither a rigid block nor an empty void. What remains is not a final doctrine, but the freedom of spontaneous presence."""
            }
        ]
    },

    # ==================== BOOK 2 ====================
    {
        "id": "book-2",
        "type": "ebook",
        "title": "The Transition from Anatta to Emptiness",
        "short_name": "Book 2 - Anatta to Emptiness",
        "chapters": [
            {
                "num": 1,
                "title": "The No-Self Realization",
                "text": """In the realization of Anatta, the identification with a central agent, watcher, or witness collapses completely. There is no inner subject observing an outer world. In seeing, there is only the seen; in hearing, only the heard."""
            },
            {
                "num": 2,
                "title": "The Desynchronisation of View and Experience",
                "text": """For years after anatta, experience and insight can be non-substantialist while the underlying framework remains substantialist. This desynchronisation is where the habit of taking objects as self-standing quietens back in. Right view is needed to bring the view into complete sync with the taste."""
            },
            {
                "num": 3,
                "title": "Beyond the Absence of Self",
                "text": """Realizing that no personal self exists is not yet the realization of emptiness. Anatta frees the subject, but phenomena may still be subtly reified as real existing dharmas. Sunyata dissolves the substantiality of phenomena themselves."""
            },
            {
                "num": 4,
                "title": "Independent Paths: What Science Gave Up",
                "text": """In modern physics, quantum mechanics and relativity arrived by giving up the assumption of absolute reference points. Rovelli's relational quantum mechanics, Wheeler's 'it from bit', and Barad's agential realism each discovered independently that relata do not pre-exist their relations."""
            },
            {
                "num": 5,
                "title": "From Rheomode to Relation",
                "text": """David Bohm attempted to create a verb-based language, the rheomode, to describe a universe in undivided flow. Yet even flowing processes must not be reified into a new cosmic substrate. Emptiness leaves the verbs without turning flow into a substance."""
            }
        ]
    },

    # ==================== BOOK 3 ====================
    {
        "id": "book-3",
        "type": "ebook",
        "title": "Nāgārjuna's Middle Way",
        "short_name": "Book 3 - Nagarjuna Middle Way",
        "chapters": [
            {
                "num": 1,
                "title": "Examination of Conditions",
                "text": """In the opening examination of conditions, Nāgārjuna demonstrates that entities never arise from themselves, from others, from both, or causelessly. Dependent origination is not the creation of things by causes, but the thorough lack of intrinsic production."""
            },
            {
                "num": 2,
                "title": "Motion and the Mover",
                "text": """Neither the moved, the unmoved, nor the in-between possesses a distinct act of moving. Without a mover separate from moving, reified trajectories collapse into sheer openness."""
            },
            {
                "num": 3,
                "title": "Examination of the Senses and Connection",
                "text": """Seeing does not see itself, nor does it see what is not seen. There is no seer bound up with seeing or apart from it. In chapter 14, connection is examined: entities do not connect by possessing an essence that bridges them; connection is designated in mutual dependence."""
            },
            {
                "num": 4,
                "title": "The Four Noble Truths and Emptiness (MMK 24)",
                "text": """Verse 24.18 is the heart of the Middle Way: dependent origination is what we call emptiness; that is a designation in dependence, and that itself is the middle way. Because all things are empty, conventional truth, the path, and liberation validly function."""
            }
        ]
    },

    # ==================== BOOK 4 ====================
    {
        "id": "book-4",
        "type": "ebook",
        "title": "The Observer and the Taste of Presence",
        "short_name": "Book 4 - Observer and Presence",
        "chapters": [
            {
                "num": 1,
                "title": "The Scent of the Witness",
                "text": """Early in contemplative insight, the Witness emerges as a vast, detached stillness. Yet this Witness is often still a subtle division—a background holding itself apart from the foreground."""
            },
            {
                "num": 2,
                "title": "Collapse of Distance",
                "text": """When the subtle background collapses into foreground sensations, the taste of Presence transforms. There is no longer someone standing back being aware; there is only vivid immediate sensation."""
            },
            {
                "num": 3,
                "title": "Potentiality and Plasticity",
                "text": """If nothing is fixed from its own side, is there an infinite store of possibilities waiting backstage? No. A potential is identified only through its actualization. Unobstructed display (ma 'gags pa) means nothing blocks appearance; it does not mean an unmanifest store of stuff."""
            }
        ]
    },

    # ==================== BOOK 5 ====================
    {
        "id": "book-5",
        "type": "ebook",
        "title": "The Logic After Anatta",
        "short_name": "Book 5 - Logic After Anatta",
        "chapters": [
            {
                "num": 0,
                "title": "Seeing Comes First",
                "text": """The logic of dependency cannot be understood by reasoning alone. It needs a direct seeing that appearances are vivid and cannot be found. Look at a red apple on the table. The red is bright, impossible to miss. Now look for it: is it in the skin, the light, the eye, or between them? It is not found in any of them, yet the apple remains vivid."""
            },
            {
                "num": 1,
                "title": "What the Logic Is Looking At",
                "text": """Every step of the logic looks at a dharma: whatever can be known. The self, an object, a cause, and a person are not separate topics. Each is the vivid appearing of this moment singled out as 'this'. By appearing dependently, it is already empty."""
            },
            {
                "num": 2,
                "title": "A Koan: Does It Arise or Cease?",
                "text": """Tap a glass and listen until the sound ends. Does the moment arise or cease? Seen with the logic of substance, arising and ending are events that happen to a thing. Seen with the logic of dependency, no moment is found standing there first: picked out against before, it is called arising; against after, ceasing."""
            },
            {
                "num": 3,
                "title": "Decoding Anatta and MMK Chapter 3",
                "text": """The Bāhiya Sutta declares: in the seen, merely the seen; in the heard, merely the heard. Nāgārjuna's third chapter demonstrates the exact same truth through dialectical analysis: there is no seer bound with seeing or apart from it."""
            },
            {
                "num": 4,
                "title": "The Logic of Dependency in Eight Steps",
                "text": """The eight steps unpack the view: 1. Two Logics; 2. What Is Negated; 3. Designated, Not Found; 4. The Two Truths; 5. The Four Corners; 6. The Two Traps; 7. Function Without Substance; 8. The Four Questions."""
            },
            {
                "num": 5,
                "title": "The Four Questions for Experience",
                "text": """Step 8 gathers everything into four questions ready for any phenomenon: What would a substance view say? What does dependency say instead? What is affirmed conventionally? What is never found?"""
            },
            {
                "num": 6,
                "title": "The Twelve Big Questions Answered",
                "text": """Part Two asks the four questions of twelve big areas: what a phenomenon is, many worlds and realms, the world itself, death and the bardo, mind and consciousness, cause and effect, science and the dharma, time, luminosity, rainbow body, ethics, and practice."""
            }
        ]
    },

    # ==================== BONUS & COMPANION ARTICLES ====================
    {
        "id": "art-1",
        "type": "article",
        "title": "Vivid and Nowhere: What a Phenomenon Is",
        "short_name": "Article - Vivid and Nowhere",
        "text": """Solid, dreamlike or mathematical, every appearance is vivid and unfindable at once. A phenomenon is whatever can be known: the material world and the mental world, what is met directly and what is only thought of. It is vividly present, yet when sought with rigorous inquiry, it is located nowhere."""
    },
    {
        "id": "art-2",
        "type": "article",
        "title": "The Illusion of the Given",
        "short_name": "Article - The Illusion of the Given",
        "text": """The classical thought experiment of a single bowl of liquid seen by different beings: humans see water, hungry ghosts see pus and blood, fish see an atmosphere to swim in, celestial beings see ambrosia, awakened beings see Māmakī. There is no neutral, given substance underneath. Beings, faculties, and environments are designated together within dependent arising."""
    },
    {
        "id": "art-3",
        "type": "article",
        "title": "Two Modes, One Seeing",
        "short_name": "Article - Two Modes One Seeing",
        "text": """Cognition seems to work in two ways: one divides into parts and categories, while the other registers immediacy without names. Dependent arising reconciles them: things are not nothing, because they function conventionally; they are not self-existent, because their designation depends on causes, parts, and mind."""
    },
    {
        "id": "art-4",
        "type": "article",
        "title": "Insubstantial Appearances",
        "short_name": "Article - Insubstantial Appearances",
        "text": """We carry two misconceptions: reification (thinking things exist from their own side) and nihilistic thinning (imagining emptiness means ghostly fragility). But attributes and identities are defined in mutual dependence. Insubstantial appearances feel solidly real and function completely."""
    },
    {
        "id": "art-5",
        "type": "article",
        "title": "One Flame Lights Another",
        "short_name": "Article - One Flame Lights Another",
        "text": """Karma and rebirth without a traveler: how one life conditions the next with nothing carried and nothing cut off. Like one candle flame lighting another, continuity is designated across changing moments without an enduring soul jumping across."""
    },
    {
        "id": "art-6",
        "type": "article",
        "title": "Insights and Tastes for Practice",
        "short_name": "Article - Insights and Tastes for Practice",
        "text": """The experience is not what is missing. What changes through the seven phases is the logic through which presence is read. Four insights carry the practice: vivid and unfindable at once; appearing whenever conditions meet; noticing the habit of thinking inherently; and seeing that there is no given world beneath it all."""
    },
    {
        "id": "art-7",
        "type": "article",
        "title": "The Lamp That Does Not Light Itself",
        "short_name": "Article - The Lamp That Does Not Light Itself",
        "text": """Does fire burn itself? Does a blade cut its own edge? Awareness is not an entity that illuminates an external object; luminosity is the intrinsic, unobstructed clarity of appearing itself."""
    },
    {
        "id": "art-8",
        "type": "article",
        "title": "Neither Carried Nor Cut",
        "short_name": "Article - Neither Carried Nor Cut",
        "text": """Sit for a minute and observe the six streams of sense experience. In real time there is no carrier running from eye to ear, and nothing is cut off. That interwoven going on, with nothing carried and nothing cut, is the true meaning of continuity."""
    },
    {
        "id": "art-9",
        "type": "article",
        "title": "Causal Efficacy Without Causal Power",
        "short_name": "Article - Causal Efficacy Without Causal Power",
        "text": """A bell rings when struck. The ringing is not made by the bronze and strike and then sent out; it is their meeting. Conditions condition fully, and no power is ever found sitting inside a cause on its own side."""
    },
    {
        "id": "art-10",
        "type": "article",
        "title": "Dependent Arising and Designation: What It Is and What It Is For",
        "short_name": "Article - Dependent Arising and Designation",
        "text": """Dependent arising explains how things appear, dismantles what seems self-standing, and describes the experiential taste. Held properly, the view is tasted in every appearing as vividly appearing yet unfindable (med par gsal snang), centerless, mutual, seamless, and effortless."""
    },
    {
        "id": "art-11",
        "type": "article",
        "title": "Three Descriptions, One Taste: Anatta, Dependent Arising and Spontaneous Presence",
        "short_name": "Article - Three Descriptions One Taste",
        "text": """Anatta, dependent arising, and spontaneous presence are three descriptions of one single taste. Anatta describes it in the senses; dependent arising unpacks it through reasoning; spontaneous presence describes it when the habit of fixing has completely unwound."""
    },
    {
        "id": "art-12",
        "type": "article",
        "title": "Annihilation Is an Inherent View",
        "short_name": "Article - Annihilation Is an Inherent View",
        "text": """Annihilation sounds like letting go of things, but it holds on to the same premise eternalism holds: something can only be annihilated if it was there from its own side first. Because an intrinsic entity never arose, nothing is destroyed."""
    },
    {
        "id": "art-13",
        "type": "article",
        "title": "The Limits of the Tools",
        "short_name": "Article - The Limits of the Tools",
        "text": """The chariot test, the four corners, and the sevenfold reasoning are tools to dissolve conceptual fixation. But the tools themselves must not become a new foundation. When every hinge is exhausted, the mind rests in freedom from all elaborations."""
    },
    {
        "id": "art-14",
        "type": "article",
        "title": "Isn't Energy the Substrate?",
        "short_name": "Article - Isnt Energy the Substrate",
        "text": """Energy is a conserved quantity—a balance of numbers arising from symmetry—not a fluid stuff poured from vessel to vessel. Conservation is a designated regularity of the highest reliability; it is not a passenger underneath change."""
    },
    {
        "id": "art-15",
        "type": "article",
        "title": "Science and the Dharma",
        "short_name": "Article - Science and the Dharma",
        "text": """Where physics meets Nāgārjuna: Heisenberg's uncertainty, Barad's agential cut, and Rovelli's relational quantum mechanics. Physics succeeds by tracking relational correlations; whenever it posits an absolute substrate, it steps beyond its empirical ground."""
    },
    {
        "id": "art-16",
        "type": "article",
        "title": "The Yang Spirit and the Rainbow Body",
        "short_name": "Article - Yang Spirit and Rainbow Body",
        "text": """Comparing Taoist inner alchemy (essence, energy, spirit), Indian tantric chakras, and Tibetan Dzogchen rainbow body. While the physiological and energetic methods share deep similarities, the governing view determines whether the subtle body becomes a refined self or an insubstantial display."""
    },
    {
        "id": "art-17",
        "type": "article",
        "title": "Rainbow Body and Emptiness",
        "short_name": "Article - Rainbow Body and Emptiness",
        "text": """Why Dzogchen and Gelug traditions say meditative realization frees the body. When matter is realized as unobstructed dependent designation, the physical elements dissolve without leaving an enduring corpse or subtle anchor."""
    },
    {
        "id": "art-18",
        "type": "article",
        "title": "The Six Powers: Knowing From Somewhere",
        "short_name": "Article - The Six Powers",
        "text": """Examining the higher spiritual knowledges (abhiññā). While clairvoyance or recollection of past lives can function along conventional channels, only the sixth knowledge—the destruction of the taints through seeing emptiness—frees the mind."""
    },
    {
        "id": "art-19",
        "type": "article",
        "title": "The Canon View",
        "short_name": "Article - The Canon View",
        "text": """Emptiness is never a ground, and luminosity is the knowing clarity of appearing itself. Bringing together the early Pali suttas, Nāgārjuna's Madhyamaka, and Dzogchen into a single, cohesive, non-foundational understanding."""
    }
]

# -------------------------------------------------------------------------
# Helper Functions
# -------------------------------------------------------------------------
def sanitize_filename(name):
    clean = re.sub(r'[\\/*?:"<>|]', '', name)
    clean = re.sub(r'\s+', ' ', clean).strip()
    return clean

def compute_hash(text):
    return hashlib.md5(text.strip().encode("utf-8")).hexdigest()

def chunk_text(text, max_len=MAX_CHUNK_CHARS):
    pattern = r'([^.!?]+[.!?]+["\']?|[^.!?]+$)'
    sentences = [s.strip() for s in re.findall(pattern, text) if s.strip()]
    chunks = []
    current = ""
    for s in sentences:
        if len(current) + len(s) + 1 <= max_len:
            current = (current + " " + s).strip()
        else:
            if current:
                chunks.append(current)
            current = s
    if current:
        chunks.append(current)
    return chunks

def call_gemini_tts(chunk_text, voice_name=VOICE_NAME, retries=5):
    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL_NAME}:generateContent?key={API_KEY}"
    payload = {
        "contents": [{"parts": [{"text": chunk_text}]}],
        "generationConfig": {
            "responseModalities": ["AUDIO"],
            "speechConfig": {
                "voiceConfig": {
                    "prebuiltVoiceConfig": {"voiceName": voice_name}
                }
            }
        }
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"}
    )

    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=45) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                part = data.get("candidates", [{}])[0].get("content", {}).get("parts", [{}])[0]
                inline_data = part.get("inlineData", {})
                b64_audio = inline_data.get("data")
                mime = inline_data.get("mimeType", "")
                if b64_audio:
                    rate_match = re.search(r'rate=(\d+)', mime)
                    sample_rate = int(rate_match.group(1)) if rate_match else 24000
                    return base64.b64decode(b64_audio), sample_rate
                else:
                    raise ValueError(f"No inline audio returned in candidate: {data}")
        except urllib.error.HTTPError as e:
            if e.code in (429, 503):
                wait = (2 ** attempt) * 2
                print(f"      [Throttled {e.code}] Waiting {wait}s before retry {attempt+1}/{retries}...")
                time.sleep(wait)
            else:
                body = e.read().decode('utf-8', errors='ignore')
                raise RuntimeError(f"HTTP Error {e.code}: {body}")
        except Exception as ex:
            if attempt < retries - 1:
                wait = (2 ** attempt) * 2
                print(f"      [Network Error] {ex}. Waiting {wait}s...")
                time.sleep(wait)
            else:
                raise ex
    raise RuntimeError("Max retries exceeded while calling Gemini TTS.")

def create_wav_header(total_data_bytes, sample_rate=24000, num_channels=1, bits_per_sample=16):
    byte_rate = sample_rate * num_channels * (bits_per_sample // 8)
    block_align = num_channels * (bits_per_sample // 8)
    file_size_minus_8 = 36 + total_data_bytes

    header = struct.pack(
        '<4sI4s4sIHHIIHH4sI',
        b'RIFF',
        file_size_minus_8,
        b'WAVE',
        b'fmt ',
        16,
        1,
        num_channels,
        sample_rate,
        byte_rate,
        block_align,
        bits_per_sample,
        b'data',
        total_data_bytes
    )
    return header

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        try:
            with open(PROGRESS_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception:
            return {}
    return {}

def save_progress(progress):
    with open(PROGRESS_FILE, "w", encoding="utf-8") as f:
        json.dump(progress, f, indent=2)

def print_progress_bar(iteration, total, prefix='', suffix='', decimals=1, length=38, fill='█', empty='░'):
    if total <= 0:
        total = 1
    iteration = min(iteration, total)
    percent = ("{0:." + str(decimals) + "f}").format(100 * (iteration / float(total)))
    filled_length = int(length * iteration // total)
    bar = fill * filled_length + empty * (length - filled_length)
    sys.stdout.write(f'\r{prefix} |{bar}| {percent}% {suffix}\r')
    sys.stdout.flush()
    if iteration >= total:
        sys.stdout.write(f'\n{prefix} |{bar}| 100.0% {suffix}\n')
        sys.stdout.flush()

def build_task_list(catalog):
    tasks = []
    for item in catalog:
        if item["type"] == "ebook":
            for ch in item["chapters"]:
                filename = f"{item['short_name']} - Chapter {ch['num']:02d} - {ch['title']}.wav"
                full_text = f"{ch['title']}.\n\n{ch['text']}"
                tasks.append({
                    "id": f"{item['id']}_ch_{ch['num']}",
                    "parent_id": item["id"],
                    "parent_title": item["title"],
                    "type": "ebook_chapter",
                    "chapter_num": ch["num"],
                    "title": ch["title"],
                    "filename": sanitize_filename(filename),
                    "text": full_text,
                    "content_hash": compute_hash(full_text)
                })
        elif item["type"] == "article":
            filename = f"{item['short_name']} - {item['title']}.wav"
            full_text = f"{item['title']}.\n\n{item['text']}"
            tasks.append({
                "id": item["id"],
                "parent_id": item["id"],
                "parent_title": item["title"],
                "type": "bonus_article",
                "chapter_num": None,
                "title": item["title"],
                "filename": sanitize_filename(filename),
                "text": full_text,
                "content_hash": compute_hash(full_text)
            })
    return tasks

def write_changelog_table(ledger_records):
    now_str = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    additions = sum(1 for r in ledger_records if r["change_type"] == "ADDITION")
    updates = sum(1 for r in ledger_records if r["change_type"] == "UPDATED")
    unchanged = sum(1 for r in ledger_records if r["change_type"] == "UNCHANGED")

    lines = [
        "# Voice Audio Updates & Changelog Ledger",
        "",
        f"**Last Sync Date**: `{now_str}`  ",
        f"**Total Audio Files Tracked**: `{len(ledger_records)}`  ",
        f"**Summary of Run**: 🟢 `{additions} New Additions` | 🟡 `{updates} Updated` | ⚪ `{unchanged} Unchanged`",
        "",
        "---",
        "",
        "## Recent Audio File Status Table",
        "",
        "| Status | Type | Work / Chapter | File Name | Size | Last Updated | Content Hash |",
        "| :--- | :--- | :--- | :--- | :---: | :---: | :---: |"
    ]

    for r in ledger_records:
        if r["change_type"] == "ADDITION":
            badge = "🟢 **NEW**"
        elif r["change_type"] == "UPDATED":
            badge = "🟡 **UPDATED**"
        else:
            badge = "⚪ Unchanged"

        size_kb = f"{r['file_size_bytes'] / 1024:.1f} KB" if r['file_size_bytes'] > 0 else "-"
        hash_short = r['content_hash'][:8] if r['content_hash'] else "-"
        title_esc = r['title'].replace("|", "-")
        fname_esc = r['filename'].replace("|", "-")

        lines.append(f"| {badge} | {r['category']} | {title_esc} | `{fname_esc}` | {size_kb} | {r['timestamp']} | `{hash_short}` |")

    lines.extend([
        "",
        "---",
        "",
        "### Instructions for Claude Code",
        "- **Target Only Marked Files**: Inspect the table above and only modify pages where the status is 🟢 **NEW** or 🟡 **UPDATED**.",
        "- **Skip Unchanged**: Items marked ⚪ `Unchanged` already have working audio players configured.",
        ""
    ])

    with open(CHANGELOG_FILE, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    print(f"\n[+] Updated Audio Changelog Table: {CHANGELOG_FILE}")

def main():
    print("==================================================================")
    print("      John Tan (Thusness) Batch Voice Generator & Pipeline")
    print(f"      Target Folder: {OUTPUT_DIR}")
    print("==================================================================")

    os.makedirs(OUTPUT_DIR, exist_ok=True)
    progress = load_progress()
    tasks = build_task_list(WORKS_CATALOG)
    manifest = []
    changelog_records = []

    total_tasks = len(tasks)
    start_time = time.time()
    completed_count = 0

    print(f"Total files to track across all 5 Books and 19 Articles: {total_tasks}\n")
    print_progress_bar(0, total_tasks, prefix='Overall Progress', suffix=f'[0/{total_tasks} files | Elapsed: 0s]')
    sys.stdout.flush()

    for idx, task in enumerate(tasks, 1):
        target_path = os.path.join(OUTPUT_DIR, task["filename"])
        
        elapsed = time.time() - start_time
        time_str = f"{int(elapsed // 60)}m {int(elapsed % 60)}s"
        print_progress_bar(idx - 1, total_tasks, prefix='Overall Progress', suffix=f'[{idx-1}/{total_tasks} files | Elapsed: {time_str}]')
        
        print(f"\n[{idx}/{total_tasks}] Checking: {task['filename']}")

        cached_entry = progress.get(task["id"])
        is_existing_file = os.path.exists(target_path)
        cached_hash = cached_entry.get("content_hash") if cached_entry else None

        if is_existing_file and cached_entry and (cached_hash == task["content_hash"]):
            change_type = "UNCHANGED"
            file_size = os.path.getsize(target_path)
            timestamp = cached_entry.get("timestamp_str", datetime.now().strftime("%Y-%m-%d %H:%M"))
            print("   -> [Unchanged] Text hash matches existing audio. Skipping synthesis.")
        else:
            if not is_existing_file or not cached_entry:
                change_type = "ADDITION"
                print("   -> [NEW ADDITION] Generating new audio...")
            else:
                change_type = "UPDATED"
                print("   -> [UPDATED] Text revision detected via content hash. Re-synthesizing...")

            chunks = chunk_text(task["text"])
            raw_pcm_buffers = []
            sample_rate = 24000

            print_progress_bar(0, len(chunks), prefix=f'   Segment 0/{len(chunks)}', suffix='[Connecting...]')

            for c_idx, chunk in enumerate(chunks, 1):
                print_progress_bar(c_idx - 1, len(chunks), prefix=f'   Segment {c_idx}/{len(chunks)}', suffix='[Requesting audio...]')
                pcm_bytes, rate = call_gemini_tts(chunk)
                raw_pcm_buffers.append(pcm_bytes)
                sample_rate = rate
                print_progress_bar(c_idx, len(chunks), prefix=f'   Segment {c_idx}/{len(chunks)}', suffix='[Packet received]')
                time.sleep(0.3)

            full_pcm = b"".join(raw_pcm_buffers)
            header = create_wav_header(len(full_pcm), sample_rate=sample_rate)

            with open(target_path, "wb") as f_out:
                f_out.write(header)
                f_out.write(full_pcm)

            file_size = os.path.getsize(target_path)
            timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
            completed_count += 1
            print(f"   [OK] Saved: {task['filename']} ({file_size:,} bytes)")

            progress[task["id"]] = {
                "status": "done",
                "filename": task["filename"],
                "content_hash": task["content_hash"],
                "timestamp_str": timestamp,
                "change_type": change_type
            }
            save_progress(progress)

        record = {
            "id": task["id"],
            "category": "Ebook Chapter" if task["type"] == "ebook_chapter" else "Article",
            "title": f"{task['parent_title']} - Ch {task['chapter_num']}: {task['title']}" if task["chapter_num"] is not None else task["title"],
            "filename": task["filename"],
            "file_size_bytes": file_size,
            "change_type": change_type,
            "timestamp": timestamp,
            "content_hash": task["content_hash"]
        }
        changelog_records.append(record)

        manifest.append({
            "id": task["id"],
            "parent_id": task["parent_id"],
            "parent_title": task["parent_title"],
            "type": task["type"],
            "chapter_num": task["chapter_num"],
            "title": task["title"],
            "file_path": target_path,
            "file_name": task["filename"],
            "content_hash": task["content_hash"],
            "change_type": change_type,
            "file_size": file_size,
            "last_updated": timestamp,
            "status": "completed"
        })

    total_elapsed = time.time() - start_time
    print_progress_bar(total_tasks, total_tasks, prefix='Overall Progress', suffix=f'[{total_tasks}/{total_tasks} tracked | Total: {int(total_elapsed//60)}m {int(total_elapsed%60)}s]')

    with open(MANIFEST_FILE, "w", encoding="utf-8") as f_man:
        json.dump(manifest, f_man, indent=2)

    write_changelog_table(changelog_records)

    if os.path.exists("voice_generation_spec.md"):
        try:
            shutil.copy("voice_generation_spec.md", SPEC_OUTPUT_FILE)
        except Exception:
            pass

    print("\n==================================================================")
    print("SUCCESS: Full collection tracked and Changelog Table updated!")
    print(f"- Changelog Table:   {CHANGELOG_FILE}")
    print(f"- Manifest JSON:     {MANIFEST_FILE}")
    print("==================================================================")

if __name__ == "__main__":
    main()