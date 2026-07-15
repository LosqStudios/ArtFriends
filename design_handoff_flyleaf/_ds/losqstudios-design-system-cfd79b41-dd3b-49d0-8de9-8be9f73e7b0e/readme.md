# LosqStudios Design System

A charcoal-black neutral ramp **+ a crimson primary accent** (with lime and periwinkle supports), Marathon-inspired interface system. Monospace, uppercase, hard hairline borders, telemetry dressing. Built for dense, instrument-panel product surfaces — consoles, dashboards, control tooling — and for brand moments anchored by the serif **SerifBox** mark.

> Consumers link a single file: **`styles.css`** (root). It `@import`s every token + font. React primitives are bundled to `_ds_bundle.js` (generated) and exposed on `window.LosqStudiosDesignSystem_cfd79b`.

## Sources provided
- `uploads/losqstudios-kit.css` — the original class-based UI kit (tokens + components). Its values and class names are the basis for `tokens/` and `components/components.css`.
- `uploads/LosqStudios_SerifBox_White_V01.svg` — the LOSQ serif monogram. Recolored variants live in `assets/`.
- No codebase or Figma was attached. The **Console** UI kit is a *reference product* built to exercise the system, not a recreation of an existing app.

---

## CONTENT FUNDAMENTALS — how copy is written
- **Casing:** UPPERCASE almost everywhere in the UI — labels, buttons, nav, tags, titles. Sentence/body case only inside long-form text areas (e.g. a textarea value or a paragraph of telemetry prose).
- **Voice:** terse, technical, instrument-like. Reads like a control panel, not marketing. Nouns and status verbs over full sentences: "UPLINK STABLE", "QUEUE 12", "● LIVE".
- **Person:** impersonal / system-voiced. It reports state ("SYSTEM NOMINAL", "NO TRANSMISSION") rather than addressing the user as "you". Commands are imperative on buttons ("DEPLOY", "TRANSMIT →", "ESTABLISH UPLINK").
- **Punctuation as ornament:** middots `·` separate meta fields ("V01 · BUILD 248", "LAT 41.40 · LON 2.17"). Arrows `→` trail primary actions. A leading `●` marks live status.
- **Numerals:** zero-padded and clipped ("04 VESSELS", "V01", "0.007%"). Precision reads as telemetry.
- **Emoji:** none. The only glyph "icons" are geometric unicode marks (`◈ ● ↪ →`). See ICONOGRAPHY.
- **Vibe:** mission control × Bungie's *Marathon* terminals — retro-future, monospaced, registration-marked, quietly tense.

Examples: `ESTABLISH UPLINK →` · `● TELEMETRY LIVE` · `DRIFT 0.003%` · `SECURE CHANNEL · READY` · `NOVA-7 · ORBIT 412KM`

---

## VISUAL FOUNDATIONS
- **Color:** near-pure black neutral ramp (`#000 → #0a0a0a → #111 → #2a2a2a` borders → greys → `#fff`) plus a **crimson** primary accent `#d7003a`, with **lime** `#d4fe01` and **periwinkle** `#dce5f9` as supporting accents (one accent per view). The accent is used sparingly and loudly — primary buttons, active states, the spine mark, live status, corner ticks. A `.light` theme inverts the neutral ramp; the pink is unchanged across both. There is intentionally **no second hue** — status (live/idle) is expressed with pink vs grey, never red/green.
- **Type:** monospace, always — **Berkeley Mono**, loaded locally (no substitute). Titles use **Akira Expanded**. Uppercase + wide tracking (0.5 / 1.5 / 3px steps) is the default treatment. The serif **Newsreader** is reserved for the logo and rare large display moments — never body or UI.
- **Spacing:** tight 4px base ramp (4/8/12/16/24/32/48/64). Layouts are dense and gridded — instrument panels, not airy marketing pages. Fixed constants: 40px telemetry spine, 220px sidebar, 1180px content max.
- **Borders:** every border is a **1px hairline** (`--border #2a2a2a`). Depth comes from border + fill steps (`base → panel → panel-hi`), never blur.
- **Radius: 0.** Hard edges everywhere. No rounded corners, ever.
- **Shadows: none.** No drop shadows. The system explicitly sets `--shadow-*: none` so consumers don't reach for soft elevation that breaks the look.
- **Cards/panels:** flat fill + hairline border. The signature treatment is the **corner-tick frame** (`.ls-ticks` / `<Panel ticks>`): two pink L-shaped registration marks at top-left and bottom-right — Marathon-style.
- **Backgrounds:** solid black (or solid white in light). No gradients, no imagery, no textures, no noise. The "decoration" is structural — the fixed left **telemetry spine** with vertical micro-type and a version stamp.
- **Transparency / blur:** essentially unused. Surfaces are opaque. No glassmorphism.
- **Imagery:** the brand carries almost no photography. When present, treat imagery as inset within hairline frames; the palette stays cool/monochrome to sit beside the pink. (Avatars are square initial badges, not photos, by default.)
- **Motion:** quick and mechanical. `--ease-snap` = `cubic-bezier(0.2,0,0,1)`, durations 0.12–0.2s. Transitions are short property fades (opacity, border-color, background, the switch thumb's `left`). No bounces, no long eases, no decorative looping animation.
- **Hover states:** primary buttons **dim to 0.85 opacity**; outline/ghost buttons and tags **brighten text + border** toward white; nav rows brighten and gain a border. Hover never changes size.
- **Press states:** primary buttons deepen to `--accent-dim` (`#b31f54`). No scale/shrink transforms.
- **Focus:** inputs swap their border to pink (`--focus-ring`). No glow ring.
- **Selection:** `::selection` is pink fill, black ink.

### Fonts
**Berkeley Mono** (LosqStudios licensed) is the UI/body face, loaded locally from `assets/fonts/` via `@font-face` in `tokens/fonts.css` — always used, no substitute. **Akira Expanded** is the title display face (`.ls-title` / `--font-title`). The display serif **Newsreader** (Google Fonts) is reserved for the SerifBox mark and rare hero moments.

---

## ICONOGRAPHY
- **No icon font, no icon library.** The system deliberately avoids drawn icons. "Icons" are **geometric unicode glyphs** set in the mono face: `◈` (spine mark), `●` (live status dot — also drawn as a CSS square via `.ls-status__dot`), `→` (action arrows), `↪` (sign-out), `·` (field separator).
- **Status dots** are small filled squares (`8px`), pink for live / grey for idle — not circles, to honor the hard-edge rule.
- **Corner ticks** (`.ls-ticks`) are CSS pseudo-element registration marks, not icons.
- **Emoji:** never.
- **Logo:** the SerifBox monogram is the one piece of bespoke vector art. Mono lockups: `logo-black.svg` (on light), `logo-white.svg` (on dark). Two-tone color lockups (neutral monogram + crimson wordmark): `logo-color-light.svg` (on light), `logo-color-dark.svg` (on dark).
- If a future surface genuinely needs lined icons, substitute a thin, square-cornered set (e.g. a 1.5px geometric stroke) and flag it — but prefer unicode marks and short uppercase labels first.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (`@import` manifest only).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills front-matter wrapper.

**`tokens/`** — `fonts.css` (webfont substitution), `colors.css` (neutral ramp + accent + `.light`), `typography.css` (mono scale, tracking, serif display), `spacing.css` (4px ramp, borders, radius=0, motion), `base.css` (reset + `.ls-label/.ls-title/.ls-ticks/.ls-rule`).

**`components/`** — React primitives (exported on `window.LosqStudiosDesignSystem_cfd79b`):
- `core/` — **Button** (primary/outline/ghost · sm/md/lg), **Tag**, **StatusBadge**, **Avatar**
- `forms/` — **Input**, **Textarea**, **Checkbox**, **Switch**
- `layout/` — **Panel** (with `ticks`), **Gallery** (responsive image grid), **NavItem**, **Spine**
- `components.css` — class-based styling for all of the above (lives in the global closure).

**`guidelines/`** — foundation specimen cards (Design System tab): colors, type, tracking, serif, spacing, hairlines/ticks, logo lockups, telemetry dressing.

**`ui_kits/console/`** — the **Console** reference product: `index.html` (login → dashboard → comms, interactive), `screens.jsx`.

**`assets/`** — `logo-black.svg`, `logo-white.svg`, `logo-color-light.svg`, `logo-color-dark.svg` (+ `fonts/` Berkeley Mono & Akira Expanded).
