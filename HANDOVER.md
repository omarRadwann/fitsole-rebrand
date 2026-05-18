# Halo — Handover for the Next Session

*Last updated: 18 May 2026. The site was rebranded in this session from "Apogee" (creative studio) to "Halo" (growth-marketing practice). Filename stays `apogee.html` for path stability; every in-page brand reference is now Halo.*

---

## 0. TL;DR for the new Claude

You're picking up a single-file web masterpiece called **Halo** — a fictional growth-marketing practice built to moon-level standards, following the guide at `C:\Users\acer\Downloads\claude-website-guide-moon-level.md`.

**Current shipped state (May 2026):**
- ✅ Halo brand identity end-to-end (hero, proof strip, manifesto, engagement, casework, capabilities, contact, drawer, footer)
- ✅ Three.js dispersion-glass sculpture sourced from a baked Blender GLB with procedural torus-knot fallback
- ✅ Warm-amber accent (`oklch(76% 0.18 70)`) flowing through CSS tokens + WebGL `attenuationColor` so the sculpture casts a literal halo through the dispersion material
- ✅ **Story-mode hero**: 4-beat scroll-driven cinematography (entry swell → push-in → peak → departure). Single GSAP timeline scrubbed by ScrollTrigger.
- ✅ **3D halo ring** (TorusGeometry, tilted, additive amber) orbiting the sculpture; fades in during scene entry, fades out on departure.
- ✅ **Reactive particle field** (280-point custom ShaderMaterial, additive amber): pointer attraction in vertex shader (world-space unprojection from cursor → particles-local space → distance-falloff pull); scroll-velocity drives outward "blow"; alpha brightens near the cursor.
- ✅ **Signature interaction #1**: gravity-field on hero characters (cursor bends nearby chars)
- ✅ **Signature interaction #2**: gravity-field on particles (cursor bends nearby motes — same metaphor, two surfaces)
- ✅ **Sticky-active capability item** (moon-level §11.D): the row nearest the viewport reading line gets italicised name, amber number, slight indent
- ✅ **Live scroll cue** (fixed-position, persists through page, ticks 01→07 across sections with a brief brighten on change)
- ✅ Animated count-up on proof stats (ScrollTrigger-driven, preserves `$`/`M`/`×`/fraction formatting; soft 2-note resolve chime fires when last number lands if audio is on)
- ✅ **Audio story moments** (all gated by `audioEnabled`): deep entry swell (55/110/165Hz, 1.8s envelope), completion chime (C5+G5, 0.55s), drawer open (80Hz thump + filtered-noise shimmer), drawer close (140Hz short tail)
- ✅ Halo-ring pulse on wordmark dot (CSS pseudo-element, breath + outward ring expansion)
- ✅ Data-driven drawer: all 6 cases (Halcyon, Soft Mass, Ember OS, Tidewater, Ironwork, Bloomwork) have deep copy + 2 result caps each
- ✅ Drawer focus management (focus → close button on open, restored to source card on close)
- ✅ Cursor labels updated: "Open case", "Brief us", etc.
- ✅ **Voices section** (between Proof and Manifesto): three named testimonials with italic-amber company emphasis
- ✅ **Essay section** "Note from the practice · June '26" (between Manifesto and Engagement): long-form editorial with display headline "The funnel was always *a metaphor.*" and signed dateline
- ✅ **Marquee rotation**: four different aphorisms cycling instead of single repeating phrase
- ✅ **9-section structure** (was 7): hero → proof → voices → manifesto → essay → engagement → work → caps → contact. Live scroll cue updated to `Scroll · NN / 09`.
- ✅ **Footer ASCII wireframe**: small editorial flourish at the top of the footer that renders the torus knot in real time at ~5fps, IO-paused when offscreen
- ✅ **Per-act audio chord progression** (gated by `audioEnabled`): ambient pad oscillator frequencies tween through A-minor → C-major → E-major → D-low across the four hero acts via `chordState` + Web Audio `setTargetAtTime`
- ✅ **Mobile gravity tap-ripple**: gravity field now active on touch devices; a tap on the hero triggers a 720ms burst that amplifies char pull + particle attraction at the tap location with quadratic decay
- ✅ **Drawer particle burst**: 26-particle radial burst from the source-card center when a case opens, timed with the View Transition (DOM-only, reduce-motion safe)
- ✅ **Blender now drives BOTH 3D objects**: `apogee_sculpture.py` re-authored to also build a thin tilted halo ring; one GLB exports both meshes by name (`ApogeeSculpture` 195KB + `ApogeeRing` 14KB = 211KB total). Three.js loader recognizes both by name; falls back to procedural TorusGeometry if absent.
- ✅ **Cursor halo on hero**: 420px soft-amber radial gradient (`mix-blend-mode: screen`) follows the pointer with slow lerp (0.06). Only active when the pointer is over the hero — concept-tied "the brand mark made tactile". Disabled on coarse pointers and reduce-motion.
- ✅ **Press section** (new, between Voices and Manifesto): four pull-quotes attributed to fictional publications (Field Notes / The Annual / Stratagem / Counterweight), 2-column editorial grid with italic-amber emphasis on key words.
- ✅ **Animated nav underlines** upgraded: amber line that draws in from the left on hover and retracts to the right on leave (transform-origin flip via 0s-delay transition).
- ✅ **10-section structure** (was 9): hero → proof → voices → press → manifesto → essay → engagement → work → caps → contact. Scroll cue `Scroll · NN / 10`.
- ✅ **Multi-page architecture**: home graduated from single-page to a four-page agency site. New files: `work.html` (Casework index — 12 cases with editorial detail rows + filter strip), `studio.html` (The Practice — 9 partner bios, two studios, 6 engagement criteria, 4 refusals, 5 expanded operating principles), `journal.html` (Field notes — featured essay + 8-entry archive + monthly-letter signup). Home (`apogee.html`) remains the flagship interactive 3D moment; internal pages are quieter editorial-craft moments — same type system, palette, cursor, audio toggle, footer ASCII, animated nav underlines. Nav links updated to point at the new pages. Each page is self-contained (inlined CSS/JS) for portability — refactor to a build system later if desired.
- ✅ **Cross-document View Transitions** (moon-level guide §9.2): all 4 pages declare `@view-transition { navigation: auto; }` + named regions (`halo-topbar`, `halo-wordmark`, `halo-footer-brand`) so Chromium 126+ animates the morph between pages — topbar/wordmark/footer stay put while the body cross-fades. Non-Chromium browsers run a JS opacity-fade fallback on the 3 internal pages (the home keeps its preloader as its entry animation, so it doesn't need a fade).
- ✅ **Blender variant family** — `apogee_sculpture.py` now bakes **four** distinct sculptural forms in one headless run:
    - `apogee_sculpture.glb` — home: full sculpture + halo ring (211KB, 54K verts)
    - `apogee_work.glb` — work: elaborate p=3 q=7 knot with stronger Musgrave displacement, 56K verts (210KB)
    - `apogee_studio.glb` — studio: calm icosphere + subdivision + subtle Musgrave displacement, 27K verts (171KB)
    - `apogee_journal.glb` — journal: twisted ribbon authored via bmesh — a Mobius-style strip with a 1.4-turn twist over its length, 880 verts (7.8KB)
- ✅ **Per-page 3D moment**: each internal page hero now floats its variant on the right edge — small Three.js scene (no postprocessing, low-power renderer, alpha:true, PMREM environment, same dispersion-glass material as the home) loading the page's specific GLB. Calm rotations (.18→.32 rad/s) appropriate to each form's identity. Procedural fallback geometry per page if the GLB fails. Disabled on `prefers-reduced-motion`; dimmed and tucked behind text on narrow viewports.
- ✅ **Production polish + SEO foundation** (per moon-level §20):
  - `404.html` — custom Halo-branded "Page between engagements" with the 5th Blender variant `apogee_lost.glb` (broken halo, two missing sectors), slow melancholy rotation, brand-coherent copy ("The halo broke", "Brand is a system, not a logo"), four navigation buttons back to the live pages
  - `robots.txt` + `sitemap.xml` listing all 4 main pages with lastmod and priority
  - `favicon.svg` — 32×32 amber dot inside the halo ring, dark plate
  - `manifest.webmanifest` — PWA-ready manifest with name, scope, theme color, icon
  - `og-image.svg` — 1200×630 social-share image with Halo wordmark, tagline, halo glyph
  - Open Graph + Twitter Card meta tags on all 5 pages with per-page title/description/url/image
  - `<link rel="canonical">` on every page
  - JSON-LD `Organization` schema on home (name, slogan, founding date, two addresses, knowsAbout); JSON-LD `Blog` + `BlogPosting` on journal page (featured essay marked up for structured data)
- ✅ **Full Agent OS in the repo** — 94 files including 19 Claude Code specialist agents, 19 Codex mirror agents, the 31-knowledge-master award-website skill, scripts, templates, and the `ULTIMATE_WEBSITE_AGENT_OS.md` source-of-truth. Future Claude/Codex sessions on this repo have a complete moon-level production environment ready to use.

**The deliverable is one HTML file:** `apogee.html` (~80 KB after rebrand, ~2050 lines) + `blender/apogee_sculpture.py` + the baked `apogee_sculpture.glb`.

**Likely next moves:**
1. **More animations** — audio-reactive bloom, WebGL cursor trail, sticky-active capability item morph, project hover → WebGL plane preview, footer ASCII shape of the sculpture in wireframe (see Section 11 of the moon-level guide).
2. **More cases** — currently 6 with deep copy; could expand to 8–10.
3. **Live blender-mcp connection** — `blender/addon.py` is downloaded; user just needs to install in Blender UI + add the MCP entry to `~/.claude/settings.json` (classifier blocks me from doing it; see plan file for the manual one-liner).
4. **Possibly graduate to Next.js 16** — see Section 9 for the structure.

**Read these files first, in order:**
1. `HANDOVER.md` — this file.
2. `apogee.html` — the deliverable. Single file, ~2050 lines.
3. `blender/apogee_sculpture.py` — the Blender pipeline (Blender 5.x compatible).

The user is non-developer-friendly but has high taste. Default to **building** rather than asking. Aim higher than the brief.

---

## 1. The project in one paragraph

**Halo** is a fictional, nine-person growth-marketing practice based in Lisbon + New York. Tagline: *"We build the field, not the funnel — the gravity behind durable growth."* Editorial dark theme with a single warm-amber accent (the halo), paired Instrument Serif (italic display) with Inter Variable (grotesque body). The site demonstrates a real Three.js dispersion-glass hero (warm halo cast through the baked Blender sculpture), scroll-driven camera cinematography, kinetic typography, a concept-tied **gravity-field signature interaction** (cursor bends hero characters), animated count-up proof stats, a custom cursor, audio toggle with synthesized ambient pad + scroll-reactive synth, view-transition-based project drawer driven by a 6-engagement data map, and full reduced-motion / accessibility fallbacks. The visual metaphor (gravity / field / pull / halo) is encoded in copy, color, motion, and the WebGL material — not just decoration.

---

## 2. Files & directory layout

```
C:\Users\acer\Desktop\test1\
├── HANDOVER.md                ← this file
├── apogee.html                ← the single-file site
├── blender\
│   └── apogee_sculpture.py    ← Blender Python pipeline script
└── (Claude history files etc.)
```

The user previously uploaded `claude-website-guide-moon-level.md` to the chat. That's the standards bar — it's in chat history if you can scroll back, otherwise ask the user to re-share it.

---

## 3. Stack in use (and why)

**Pure static single-file**, by deliberate constraint of the previous session (Cowork mode = sandboxed environment). The next session can graduate this to a real Next.js 16 project — see Section 9.

### Loaded from CDN

| Library | Version | How | Purpose |
|---|---|---|---|
| three | 0.160.0 | ES module via importmap | Core renderer |
| three/addons | 0.160.0 | ESM | EffectComposer, UnrealBloomPass, ShaderPass, OutputPass, RoomEnvironment, PMREMGenerator |
| gsap | 3.12.5 | classic `<script>` | Tweens + ScrollTrigger |
| ScrollTrigger | 3.12.5 | classic `<script>` | Scroll-driven anims |
| lenis | 1.1.13 | classic `<script>` | Smooth scroll |
| Inter, Instrument Serif, JetBrains Mono | latest | Google Fonts | Typography |

### Why this mix
- **Three.js as ESM**: the postprocessing addons aren't available as bare classic scripts anymore. Using an importmap (`<script type="importmap">`) keeps the imports clean. ES modules are deferred by default, so classic GSAP/Lenis scripts have already attached to `window` by the time the module runs.
- **GSAP as classic**: it sets `window.gsap` and `window.ScrollTrigger` reliably; the module can read them as globals.
- **Lenis as classic**: same. Sets `window.Lenis`.

### Architecture
- One `<style>` block: design tokens (OKLCH palette), components, reduce-motion overrides.
- One `<script type="module">`: everything else — cursor, audio synth, Three.js scene, ScrollTrigger setup, reveals, hero entry, preloader, drawer, marquee.
- One persistent `#scene` div fixed at z-index 0 holding the Three.js canvas.
- All sections live above at `z-index: 2`.
- `.veil` at z-index 1 is a gradient overlay for type contrast.

---

## 4. What's verified working

Confirmed via live browser inspection in the previous session:

| Feature | Status | Notes |
|---|---|---|
| Hero typography (no broken words) | ✅ | Word-aware splitter — chars animate per-char, words don't break |
| Hero font size at wide viewports | ✅ | `clamp(3.2rem, 1.4rem + 7.2vw, 8.6rem)` — never overflows |
| Three.js dispersion-glass torus knot | ✅ | Beautiful — `MeshPhysicalMaterial` with transmission, iridescence, clearcoat, attenuation |
| Postprocessing (Bloom + RGB-shift) | ✅ | Tuned subtle; aberration fades with scroll |
| Scroll cinematography (camera + sculpture) | ✅ | Sculpture drifts off-screen-left by `progress=0.78`, fades bloom/aberration |
| Manifesto section (pull quote + principles) | ✅ | Numbered list with `decimal-leading-zero` |
| Process section (editorial 12-col staircase grid) | ✅ | Replaced the buggy pin-horizontal-scroll |
| Work bento (6 project cards) | ✅ | CSS-only visual generators (aurora, ember, pool, iron, bloom, grain) |
| Capabilities list w/ hover italic + tracking morph | ✅ | Variable font axes |
| Marquee with scroll-velocity reactive duration | ✅ | |
| Contact + footer | ✅ (real-user) | DOM/JS confirm all opacity 1, but MCP CDP screenshots can render the dark bottom as opaque black — a screenshot-only artifact, not a render bug |
| Custom cursor (dot + lerping ring, off-screen until first move) | ✅ | |
| Magnetic CTAs and cards | ✅ | gsap-driven |
| Audio: synthesized ambient pad + scroll-reactive synth | ✅ | Web Audio API; persisted mute state in localStorage |
| Preloader (real progress + Enter button, 2.4s safety timeout) | ✅ | |
| Project drawer with View Transitions API | ✅ | Tags `view-transition-name: card-1` only during the transition to avoid name collisions |
| Reduced-motion fallback | ✅ | Disables WebGL, splits become opacity-only, marquee static, native cursor |
| All semantic landmarks, ARIA, focus rings | ✅ | |

---

## 5. Known quirks / unsolved

- **Reveal timing on instant scroll**: `.reveal { opacity: 0 }` and the IntersectionObserver fires asynchronously, so an instant `scrollTo()` can leave reveal items at opacity 0 momentarily. Real users scrolling with a wheel never see this. Don't try to "fix" with a 3s safety timeout — it's already there for the hero chars; the section reveals work normally under wheel scroll.
- **MCP screenshot at the dark bottom**: an artifact of Chrome's CDP screenshot interacting with the WebGL composited layer when there's not much visual variation. Users see content fine; only Claude in Chrome's debugger screenshot captures it as opaque black. Don't waste time debugging this.
- **Audio policy**: AudioContext can't resume without a user gesture. The site defaults to muted and only attempts to resume after a pointerdown / click — including the "Enter the studio" preloader button. Keep this behavior.
- **`scrollTo(0, 0)` is intercepted by Lenis**. Use `lenis.scrollTo(0)` in code, or use keyboard `Home`/`End` to drive in tests.

---

## 6. The design tokens (so the new session stays on-brand)

```css
--ink:        oklch(96% 0.012 85);       /* warm off-white text */
--ink-dim:    oklch(78% 0.012 85);       /* secondary text */
--ink-mute:   oklch(58% 0.012 250);      /* tertiary text */
--paper:      oklch(10% 0.014 260);      /* page bg — near-black, cool */
--paper-2:    oklch(13.5% 0.016 260);    /* card surfaces */
--paper-3:    oklch(17.5% 0.018 260);    /* elevated surfaces */
--accent:     oklch(78% 0.18 245);       /* electric cobalt */
--accent-2:   oklch(72% 0.21 50);        /* warm amber counterpoint */

--sans:  "Inter", ui-sans-serif, system-ui, sans-serif;
--serif: "Instrument Serif", ui-serif, Georgia, serif;
--mono:  "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

--ease-smooth:     cubic-bezier(.22, 1,    .36,  1);
--ease-expressive: cubic-bezier(.32, .72,  0,    1);
--ease-dramatic:   cubic-bezier(.76, 0,    .24,  1);

--gutter: clamp(1.25rem, 1rem + 1.5vw, 2.5rem);
--maxw:   1480px;
```

**Hero font size** is the most-tuned scale: `clamp(3.2rem, 1.4rem + 7.2vw, 8.6rem)`. Don't push past 8.6rem max — it overflows at 2K viewports.

---

## 7. How to run locally

The user starts a Python server like this:

```bash
cd C:\Users\acer\Desktop\test1
python -m http.server 8765
```

Then opens `http://localhost:8765/apogee.html` in Chrome.

**Important:** `file://` does **not** work for the ES-module Three.js import — most browsers block ESM from `file://`. The HTTP server is required.

**From Claude Code on the user's machine**, you can run the server yourself in a background terminal and drive Chrome via the user's installed Playwright or Puppeteer. That's the main reason the user is switching environments.

---

## 8. The user's top requests for this session

In priority order:

1. **Wire up Blender** — actually generate `apogee_sculpture.glb` and load it in the Three.js scene.
2. **Add more animations** — see Section 11 for a concrete shortlist.
3. Keep the visual identity intact (palette, type, easings).
4. Don't ask before building — *ship*, then offer alternatives.

---

## 9. The optional Next.js 16 graduation

If you decide it's the right time (and the user agrees), here's how the move would go:

```
apogee/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx          ← persistent <Scene /> mounted here
│   │   ├── page.tsx            ← homepage (current sections)
│   │   ├── work/[slug]/
│   │   │   └── page.tsx        ← per-project case studies, Barba-style
│   │   └── about/page.tsx
│   ├── api/contact/route.ts    ← Resend integration
│   ├── globals.css             ← design tokens
│   └── layout.tsx              ← root, fonts, providers
├── components/
│   ├── three/
│   │   ├── Scene.tsx           ← R3F Canvas, persistent across routes
│   │   ├── Sculpture.tsx       ← loads apogee_sculpture.glb via useGLTF
│   │   └── Postprocessing.tsx  ← Bloom + ChromaticAberration via @react-three/postprocessing
│   ├── marketing/
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── Process.tsx
│   │   ├── Work.tsx
│   │   ├── Capabilities.tsx
│   │   ├── Marquee.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Cursor.tsx
│       ├── AudioToggle.tsx
│       └── Preloader.tsx
├── lib/
│   ├── motion/                 ← easings, durations, presets
│   ├── audio/                  ← Howler instances + sound manager
│   └── env.ts                  ← @t3-oss/env-nextjs
├── public/
│   ├── models/
│   │   └── apogee_sculpture.glb   ← Blender output goes here
│   ├── fonts/                  ← self-hosted woff2
│   └── sounds/                 ← optional Howler-ready clips
├── package.json
├── tsconfig.json
├── biome.json
└── next.config.ts
```

**Don't migrate without asking** — keep the single-file version working alongside until the user picks. The single file is portable; Next.js is more maintainable. Both are valid.

---

## 10. The Blender pipeline — concrete plan

### Goal
Replace the procedural `THREE.TorusKnotGeometry` in the hero with a baked, displaced, smooth-shaded glb authored in Blender. Geometry quality goes up, performance improves (no per-frame torus knot generation), and you unlock real sculpting if you want it.

### Files involved
- **Existing**: `blender/apogee_sculpture.py` — already builds a parametric torus knot with bmesh, subdivides, adds Musgrave displacement, applies smooth shading, normalizes scale, and exports Draco-compressed `.glb`.
- **To create**: `blender/apogee_sculpture.glb` — the output.

### Run it

```bash
# Headless (no Blender UI):
blender -b -P "C:\Users\acer\Desktop\test1\blender\apogee_sculpture.py"

# Or open Blender, paste the script in the Text Editor, click Run Script.
```

You should end up with `blender/apogee_sculpture.glb` somewhere around 150–400 KB.

### Hook it into the Three.js scene

Open `apogee.html` and find the import block at the top of the module script. Add:

```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
```

Find the geometry block (search for `TorusKnotGeometry`). Replace it with:

```js
const draco = new DRACOLoader().setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
const loader = new GLTFLoader().setDRACOLoader(draco);

loader.load('./blender/apogee_sculpture.glb', (gltf) => {
  // Find the first mesh in the gltf scene
  let mesh = null;
  gltf.scene.traverse((obj) => { if (!mesh && obj.isMesh) mesh = obj; });
  if (!mesh) return;

  // Re-use the dispersion-glass material we already created
  mesh.material = mat;
  mesh.position.set(1.4, 0.05, 0);
  mesh.scale.setScalar(0.95);
  mesh.userData.baseX = 1.4;
  scene.add(mesh);
  sculpture = mesh; // assign to the existing variable used by the render loop
});
```

You can delete the current `const geom = new THREE.TorusKnotGeometry(...)` and `const sculpture = new THREE.Mesh(geom, mat)` lines, but keep the **material** (`mat`) — that's the dispersion-glass setup, the visual identity. The mesh just becomes the new GLB.

### Fall-back behavior

Wrap the load in a `try` — if the glb is missing or fails, keep the procedural torus knot as fallback. The user might run the site before running Blender.

```js
const fallbackGeom = new THREE.TorusKnotGeometry(0.78, 0.26, 260, 36, 2, 5);
sculpture = new THREE.Mesh(fallbackGeom, mat);
sculpture.position.set(1.4, 0.05, 0);
sculpture.scale.setScalar(0.95);
scene.add(sculpture);

new GLTFLoader().setDRACOLoader(draco).load(
  './blender/apogee_sculpture.glb',
  (gltf) => {
    let baked = null;
    gltf.scene.traverse((o) => { if (!baked && o.isMesh) baked = o; });
    if (!baked) return;
    // swap geometry on the existing mesh — keeps animation refs valid
    sculpture.geometry.dispose();
    sculpture.geometry = baked.geometry;
  },
  undefined,
  (err) => console.warn('[apogee] glb load failed, using procedural fallback', err)
);
```

### Iterating on the sculpture

The script exposes these knobs at the top:
- `build_torus_knot(p=2, q=5, radius=0.95, tube=0.30, segments_major=320, segments_minor=40)` — change p/q for different knot families (try `p=3, q=7`).
- `add_displacement(obj, strength=0.04, noise_scale=2.3, noise_depth=3)` — raise strength toward 0.08 for more organic deformation; risk loses readable form.
- `normalize_scale(obj, target_radius=1.0)` — keep at 1.0.

After tuning, re-run the script. The GLB updates. Browser refresh shows the new form.

### Future: Blender MCP

The user mentioned wanting the **official Anthropic Blender MCP** wired up. When that's connected, you can drive the script (and Blender) directly from chat:

> Run `apogee_sculpture.py` via the Blender MCP, then re-export with `strength=0.07`.

For now, write the script so it's idempotent (clears scene at start, re-exports each run). It already is — re-runs are safe.

---

## 11. Animation roadmap — concrete additions

In rough order of leverage (most impact first):

### A. Audio-reactive bloom

Tie the bloom strength to the audio level. When the ambient pad is on, bloom subtly throbs with the dominant frequency. Tone.js's `Tone.Analyser` or raw `AnalyserNode` from Web Audio.

```js
// In audio init:
const analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;
ambient.g.connect(analyser);
const audioBuf = new Uint8Array(analyser.frequencyBinCount);

// In render loop:
analyser.getByteFrequencyData(audioBuf);
const avg = audioBuf.reduce((a, b) => a + b, 0) / audioBuf.length / 255;
bloomPass.strength = 0.32 * (1 - scrollP * 0.7) + avg * 0.25;
```

### B. Real cursor trail (WebGL particles)

A second Three.js scene or a 2D canvas layered on top. Each frame, push the cursor position into a ring buffer of ~30 points, draw lines or small textured quads with fading alpha. The motion guide calls this out as a "signature move."

### C. SplitText word-cycle on hero

A single word in the hero rotates between alternatives every 2.5s:

> "We design at the **apogee** — the farthest point from the **ordinary**."  
> ↓  
> "We design at the **apogee** — the farthest point from the **familiar**."  
> ↓  
> "We design at the **apogee** — the farthest point from the **expected**."

Use the existing splitword wrappers — replace the inner `.splitchar`s on the target word with new ones, staggered via GSAP.

### D. Sticky-active capability item

When scrolling the Capabilities list, the item nearest the viewport center morphs its variable-font weight up (e.g. 400 → 700) and shifts its number slightly. Use `font-variation-settings` transitions plus an IntersectionObserver with multiple thresholds.

### E. Project hover → WebGL plane preview

The bento cards currently use CSS gradients. Replace each card's `.card__visual` with a tiny canvas running a simple GLSL flowmap. On hover, animate the displacement amount up from 0. The "moon-level" guide describes this pattern in Section 14.

### F. Page transition for project detail

The drawer uses View Transitions API. Extend with a real route — `apogee.html` → `apogee.html#halcyon`. On `#halcyon`, the URL persists and the drawer auto-opens with the same shared-element animation. Combined with `popstate` for back-button.

### G. Reduced-motion alternative

For users with `prefers-reduced-motion`, the splash should fade in cleanly without any motion. Currently it's a hard cut. Add a `.is-reduced` body class and let the hero text just `opacity: 0 → 1` over 600ms.

### H. Footer ASCII shape

The footer has space for a small ASCII or SVG rendering of the sculpture in wireframe — a "we shipped this" moment. Generate via Three.js's `MeshDepthMaterial` rendered to a small offscreen canvas, then converted to ASCII via a brightness-to-character lookup table.

### I. Sound effects on real interactions

The hover UI synth already exists. Add:
- Click "Enter the studio" → low brass swell (Tone.js FM synth, 0.4s)
- Hover bento card → soft padded chord (sampled or oscillator triad)
- Open project drawer → reverse cymbal + low impact (~0.2s)
- Close → short fade-out (~0.15s)

All defer to audioEnabled toggle. All <0.5s. All quiet (-20dB).

---

## 12. Gotchas to avoid

- **Don't reintroduce the pin-horizontal-scroll pattern** for the Process section. It caused a viewport-tall empty spacer after the pin ended. The current 12-column editorial staircase grid is intentional and works.
- **Don't set `transform: translateY(110%)` in CSS while also using `gsap.fromTo({yPercent: 110})`** — gsap stacks on top of CSS transforms, causing the hero text to translate 220% instead of 110%. Let one system own the transform.
- **Don't enable `pinSpacing: false`** — it forces document height to not include pin duration, which fights the page's natural scroll. Stick to the current no-pin approach for sections.
- **Don't add CSS `transform: translateY` on a card hover** if the card also has `data-magnetic` — they fight. Use gsap for both or neither.
- **MCP screenshot of dark + WebGL pages**: don't trust black screenshots as proof of bugs. Verify via `getComputedStyle()` and `getBoundingClientRect()` in JS.
- **`MeshPhysicalMaterial.transmission` needs `alpha:false` on the renderer**, otherwise the transmission shader samples an empty backbuffer and renders nearly black. Set `scene.background = new THREE.Color(0x0a0b14)` for the same reason.

---

## 13. Quick sanity-check commands

After making changes, run these to verify:

```bash
# JS syntax (run from a Linux shell or WSL)
python3 -c "
import re; src = open('apogee.html').read()
blocks = re.findall(r'<script(?![^>]*\\bsrc=)[^>]*>([\\s\\S]*?)</script>', src)
for i,b in enumerate(blocks):
  with open(f'/tmp/_{i}.js','w') as f: f.write(b)
"
node --input-type=module --check < /tmp/_1.js && echo OK

# Tag balance + CSS brace balance
python3 -c "
import re; src = open('apogee.html').read()
css = re.findall(r'<style[^>]*>([\\s\\S]*?)</style>', src)
for c in css: print(c.count('{'), c.count('}'))
"
```

If `node --check` passes and the brace counts match, the file is structurally sound.

For visual verification, run Playwright in headed mode and screenshot at scroll positions 0, 1500, 3500, 6000, 7700 (the major sections).

---

## 14. Concept cheat sheet (so voice stays consistent)

**Halo, in one breath**: A growth practice of nine, building marketing systems for brands that prefer compound demand to constant noise. Lisbon + New York. Q3 '26 cohort open.

**Voice**: editorial, contrarian, evidence-led, slightly formal. Uses em dashes generously. Avoids exclamation marks. Words like "field," "gravity," "compound," "durable," "the long arc," "the practice," "the truth meeting." Names a number whenever it can.

**Things Halo would say**: "Most marketing is the sound of yelling at strangers." · "Strategy is the only compound interest left in marketing." · "Brand is a system, not a logo." · "Editorial beats interruption." · "We build the field, not the funnel."
**Things Halo would never say**: "Seamless." "Synergy." "Innovative." "Next-generation." "Solutions." "Pixel-perfect." "AI-powered." "Crafted with love."

**Six engagements (all fictional, all carry quantified outcomes in the drawer):**
1. **Halcyon Aero** — private aviation, Reykjavík 2026. Result: `+318% qualified inbound · 90 days` · `cost per booked charter $1,840 → $310`
2. **Soft Mass** — DTC skincare, Copenhagen 2025. Result: `CAC −31% · 12 months` · `AOV (refill subs) +47%`
3. **Ember OS** — AI productivity platform, Berlin 2025. Result: `Demo bookings 6.2× Q-on-Q` · `Paid spend during reposition: $0 · 90 days`
4. **Tidewater** — 60-year value fund, Boston 2024. Result: `Organic share-of-voice 4.2× · 12 months` · `Inbound LP enquiries (new primary channel)`
5. **Ironwork** — Swedish hardware foundry, Stockholm 2024. Result: `Owned audience 8× · 18 months` · `+3 default-spec firms`
6. **Bloomwork** — slow-music label, Lisbon 2023–24. Result: `47% of new revenue from owned · 24 months` · `11,800 cross-microsite subscribers`

The case data lives in `apogee.html` as a `CASES` object keyed by slug (`halcyon`, `soft-mass`, `ember-os`, `tidewater`, `ironwork`, `bloomwork`). Each card on the homepage carries `data-project="<slug>"`; the drawer populates from this map. Adding a 7th case is just adding a card + a `CASES` entry.

**Proof strip (above the manifesto)** carries four operating-record stats: `12 brands · operating partner since 2014` / `$48M reallocated from paid to owned` / `8 / 12 still working with us three years on` / `0 retainer minimums · 0 outsource · 100% in-house`. All four animate count-up when scrolled into view (except the literal "0," which fades in).

---

## 15. The original guide (standards bar)

The user uploaded `claude-website-guide-moon-level.md` to the chat at the start. Re-request it if you need it — it covers stack defaults (Next.js 16 + App Router, Tailwind v4, Drizzle, Supabase, R3F, GSAP, Lenis), performance budgets (LCP <2.5s, INP <200ms, CLS <0.1), accessibility floor (WCAG 2.2 AA), anti-patterns to refuse, and the specific "moon-level patterns" worth implementing (orchestrated preloader, persistent canvas, DOM-WebGL plane sync, custom cursor + magnetic CTA, scroll-driven scene cinematography, kinetic typography, material moments, custom shader backgrounds, sticky horizontal sections, cross-fade media sequences, exit moments).

The user has internalised this document. Don't quote it back at them — just behave according to it.

---

## 16. Where to start (a suggested first 30 minutes)

1. Read this file (you're doing that).
2. Open `apogee.html`. Skim the structure: tokens → components → sections → drawer → scripts.
3. Open `blender/apogee_sculpture.py`. Skim it.
4. Ask the user to confirm Blender is installed on their machine (or you can install via the standard installer; on Windows the path is usually `C:\Program Files\Blender Foundation\Blender 4.x\blender.exe`).
5. Run the Blender script headless. Verify `apogee_sculpture.glb` appears.
6. Edit `apogee.html` per Section 10 to load the GLB with procedural fallback.
7. Start the local server, open the page, screenshot the hero. Compare to the procedural version.
8. Once the swap is verified, pick two animations from Section 11 the user finds most exciting and ship them.

That's a real afternoon. Tell the user what you did, with computer:// links.

---

## 17. One last thing

The user appreciates direct, action-oriented work. They've said multiple times: *"push further"*, *"any tool you need"*, *"start making"*. Default to **building**, not asking. When you do ask, use AskUserQuestion-style multiple choice with a recommended option first, not open-ended questions.

Aim for the **details that nobody points to**: the 200ms exit animation, the 15ms hover whoosh, the perfect easing curve, the reduced-motion fallback that's still beautiful. That's where moon-level lives.

Ship something visible early, then refine.

— end of handover —

---

## Appendix: Agent OS V7 upgrade (2026-05-18)

The repo's Moon-Level Website Agent OS was upgraded from V3 (the layer that built Halo) to V7 on the `os-upgrade-v7` branch. Pre-upgrade state preserved at git tag `pre-v7-upgrade`. Pack SHA256: `5660A0D1C06B70678194DCA608F049E78641BB45B1B534EDCC9502C00F3020FF`.

### What changed (no Halo artifact touched)

- **Additive (Category A):** `ops/`, `tooling/`, `examples/`, `.claude/skills/award-website-os/` (V6 fix — Claude Code skill mirror), `.codex/config.toml`, `.codex/rules/`, all V4–V7 audit reports, `MASTER_DOCUMENT.md`, `START_HERE.md`, `INSTALL_ZERO_GAPS.md`, `Makefile`
- **Archived (Category D):** `ULTIMATE_WEBSITE_AGENT_OS.md` → `ARCHIVE_ULTIMATE_WEBSITE_AGENT_OS_V3.md` (preserves Halo build history, breaks source-of-truth ambiguity; new SOT is `MASTER_DOCUMENT.md`)
- **Updated (Category B):** `CLAUDE.md`, `AGENTS.md`, `.claude/settings.json`, `.codex/hooks.json`, all 19 `.claude/agents/*.md` (frontmatter swap `tools:` → `skills: + memory:` per V6), `SKILL.md`, and 4 knowledge files (04, 14, 19, 20). All deltas were V4–V7 layer additions per the pack design — **no Halo-specific customizations were present in any V3 spec file** (verified via spot-diffs on CLAUDE.md and two agent files). Pre-overwrite state in `git show pre-v7-upgrade:<path>`.
- **README handling:** Pack `README.md` saved as `README_AGENT_OS.md`; Halo's `README.md` retained at root with a pointer at the top.

### What was added but is empty until next build

- `docs/` (12 V7 evidence templates: `assumptions.md`, `research-brief.md`, `concept-scorecard.md`, etc.) — distinct from Halo's root-level evidence (`DESIGN_BRIEF.md`, `ASSET_MANIFEST.md`, `QA_REPORT.md`, this file). Halo's are post-hoc handover; `docs/*` is forward-build artifacts for the next site.

### Branch posture

Branch `os-upgrade-v7` is local-only. `main` is untouched at `pre-v7-upgrade`. Public Halo deployment unaffected. Remote-handling decision (merge / detach / new remote / leave local) is open and surfaced to the user.

### Tool readiness

Per user-selected stack: Playwright + Lighthouse + axe + Blender. Image generation explicitly NOT enabled. See `tooling/LOCAL_TOOL_STATUS.md` (created in step 9 of the upgrade) for per-tool versions.

### Audit trail file

`upgrade-diffs/_compare-report.csv` (gitignored) records every file's pre-upgrade state classification (identical / differs / dst-missing).
