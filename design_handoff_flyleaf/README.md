# Handoff: Flyleaf — Daily Sketch Community

## Overview
Flyleaf is a daily-prompt sketching community for Losq Studios ("Art Friends"). Members post one sketch per daily prompt, react to each other's work, browse the global community, and follow artists. This bundle covers four connected pages: the Flyleaf home (daily prompt + wall + archive), Browse (global feed at scale), User Sketchbook (profile), and The Studio.

## About the Design Files
The files here are **design references created in HTML** — interactive prototypes showing intended look and behavior, not production code. The task is to **recreate these designs in the target codebase's environment** (React/Next or whatever ArtFriends standardizes on) using its established patterns. The `.dc.html` files open directly in a browser for reference; `support.js` and `_ds/` are their runtime + design-system bundle and are not meant to ship.

## Fidelity
**High-fidelity.** Colors, type, spacing, and interaction states are final and follow the LosqStudios Design System. Recreate pixel-perfectly. The artwork tiles are gradient placeholders — production always renders real user images in their place.

## Design System (binding)
LosqStudios Design System, included under `_ds/`. Key rules:
- Neutral ramp: `#000` page → `#0a0a0a` panel → `#111` panel-hi; hairline borders `#2a2a2a` (1px, everywhere).
- Accents: crimson `#d7003a` (primary), lime `#d4fe01`, periwinkle `#dce5f9` — one accent per view, used sparingly.
- Type: Berkeley Mono for all UI/body (local font, no substitute); Akira Expanded for titles; uppercase + letterspacing (0.5/1.5/3px) is the default.
- Radius 0, no shadows, no gradients in chrome (gradients appear only as artwork placeholders).
- Spacing: 4px ramp. Fixed 40px telemetry spine on the left of every page; 1180px/1100px content max.
- Copy voice: terse telemetry — zero-padded counts ("04 posted"), middot separators, `→` on actions, `●`/`◆` status marks. No emoji in chrome (reaction emoji are user content).
- Motion: 0.12–0.2s property fades, `cubic-bezier(0.2,0,0,1)`. Hover dims primaries to .85 opacity; outline elements brighten toward white/accent.

## Screens / Views

### 1. Flyleaf home (`Flyleaf.dc.html`)
- **Masthead**: FLYLEAF title (Akira Expanded) + handwritten lime subline SVG (`assets/subline-lime.svg`, 181px wide, flush with title); right column holds member/online counts and theme toggle.
- **Today's prompt panel** (`.ls-ticks` corner-tick frame): prompt number, title, rule line, countdown to rollover.
- **"Today's wall · everyone"**: horizontal snap scroller of ~10 cards (190px, square image, name + ♥ count) drawn as a **random snapshot** of all community posts (stable per session — reshuffles per visit, not per render). Ends with a dashed "Browse everyone →" tile linking to Browse.
- **"Crew · NN posted"**: the user's circle. Responsive grid `repeat(auto-fill, minmax(230px,1fr))`, full cards with reaction rows. "+ Post today's sketch" primary button (crimson) appears here until posted, then "◆ You've posted today" badge.
- **Archive**: previous prompts, each with a tile grid.
- Lightbox on artwork click.

### 2. Browse (`Browse.dc.html`)
Global feed for today's prompt at community scale (12,431 posts modeled).
- Header: "Everyone · {prompt title}", total posted, sort toggle (Random / Newest / Most loved) as segmented hairline buttons.
- Grid: `repeat(auto-fill, minmax(150px,1fr))`, square tiles; crew posts get a crimson "CREW" corner badge; bottom strip on each tile shows name + ♥ count on rgba(0,0,0,.7).
- Cursor pagination: "Load more · N remaining" (24 per page). Production note: random sort should be server-sampled; consider reshuffle instead of load-more for Random.
- Lightbox: artwork, name, hearts, prompt meta, and **"View sketchbook →"** linking to the artist's profile (`?u=<crew index>` or `?h=<handle>` for community artists).

### 3. User Sketchbook (`User Sketchbook.dc.html`)
- Profile header: square initials avatar, name, `@handle`, member-since, role line, social channels; stats (streak, best streak, total posts).
- **Follow**: non-owner profiles show a `+ Follow` / `● Following` button (crimson outline → filled). Follow state persists (prototype: localStorage key `flyleaf-follows`; production: follow edge on the user graph).
- **Privacy**: profiles can be full-private (handle + subline only for non-owners: see Sol, Ines T.) and pins can be private separately.
- **Tabs (owner only)**: "Sketchbook" (pins + post feed) and "Following · NN" — the following list is **private to the owner**, rendered as a grid `repeat(auto-fill, minmax(250px,1fr))` of rows (avatar, handle → link to their sketchbook, ✕ Unfollow button). Empty state links to Browse. Tabs are hairline segmented buttons; active tab uses panel-hi fill + accent border.
- Community-artist profiles (via `?h=@handle`) are synthesized in the prototype: no pins section, "Community artist" role; production fetches the real user record by handle.

### 4. The Studio (`The Studio.dc.html`)
Included for context — "Crew" on the home page ties into Studio grouping down the line.

## Interactions & Behavior
- Wall scroller: CSS scroll-snap x-mandatory; "swipe →" affordance scrolls programmatically.
- Reactions: emoji picker per post (choices 🔥👀💡🙌❤️😂🎯🤙🖌️💀), aggregate counts, reactor names in tooltip (cap at "X and N others" at scale).
- One post per member per prompt; posting flips the CTA to the posted badge.
- Lightboxes close on backdrop click or ✕.
- Sort switch in Browse resets pagination to page 1.
- Responsive: `data-m` attributes carry mobile overrides under 640px (grids tighten, paddings shrink). A fuller mobile polish pass is still pending.

## State Management
- Session: current user (crew index 0 = "You"), theme (dark default, `.light` inverts).
- Follows: set of handles; toggled from profile; read by the Following tab. (Prototype seeds 40 demo follows once via `flyleaf-follows-seeded` — strip this in production.)
- Feeds: today's wall (random sample query), crew feed (follow/circle graph), browse (cursor-paginated query keyed by prompt + sort).
- Data model direction discussed: users keyed by stable `@handle` IDs; posts keyed `(promptId, userId)` — one-per-prompt is a natural shard; reactions stored as counters + capped reactor sample; follow graph as its own edge table; all feeds are paginated queries, never full lists.

## Design Tokens
See `_ds/.../tokens/*.css` for the authoritative set. Highlights: `--accent #d7003a`, `--accent-dim #b31f54`, lime `#d4fe01`, periwinkle `#dce5f9`, `--border #2a2a2a`, panels `#0a0a0a`/`#111`, labels ~9px/1.5px tracking uppercase, corner-tick `.ls-ticks` frames.

## Assets
- `assets/subline-lime.svg` — handwritten subline (lime recolor), masthead.
- `assets/flywheel-white.svg` — Flyleaf mark used on the telemetry spine.
- `_ds/.../assets/` — Losq logo lockups + Berkeley Mono / Akira Expanded fonts (licensed — confirm distribution before committing fonts to a public repo).

## Files
- `Flyleaf.dc.html` — home: prompt, wall, crew, archive
- `Browse.dc.html` — global feed + lightbox → sketchbook
- `User Sketchbook.dc.html` — profile, follow, privacy, tabs
- `The Studio.dc.html` — studio context page
- `support.js` — prototype runtime (reference only, do not ship)
- `_ds/` — LosqStudios Design System (tokens, components.css, bundle)
