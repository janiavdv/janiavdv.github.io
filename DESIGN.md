---
name: Jania Vandevoorde — Personal Site
description: A dual-themed CS/ML portfolio built on unmodified daisyUI cupcake (light) and dracula (dark) themes.
colors:
  cupcake-pink: "oklch(78.94% 0.101 356.3)"
  dracula-violet: "oklch(74.2% 0.149 301.88)"
  marigold-light: "oklch(79.38% 0.146 78.62)"
  marigold-dark: "oklch(83.39% 0.124 66.56)"
  teal-reserve: "oklch(76.17% 0.089 200.03)"
  magenta-reserve: "oklch(75.46% 0.183 346.81)"
  ink-plum: "oklch(23.57% 0.066 313.19)"
  slate-dusk: "oklch(39.45% 0.033 275.52)"
  paper-cream: "oklch(97.79% 0.004 56.38)"
  card-cream: "oklch(93.98% 0.008 61.45)"
  hairline-cream: "oklch(91.59% 0.007 53.44)"
  void-navy: "oklch(28.82% 0.022 277.51)"
  card-navy: "oklch(26.81% 0.021 277.51)"
  hairline-navy: "oklch(24.79% 0.019 277.51)"
  moonlight: "oklch(97.75% 0.008 106.55)"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    letterSpacing: "normal"
rounded:
  sm: "0.5rem"
  md: "0.75rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2rem"
  xl: "3rem"
components:
  button-cta:
    backgroundColor: "{colors.cupcake-pink}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "8px 24px"
  button-cta-hover:
    backgroundColor: "{colors.marigold-light}"
  card:
    backgroundColor: "{colors.card-cream}"
    rounded: "{rounded.sm}"
    padding: "24px"
  tag-chip:
    backgroundColor: "{colors.paper-cream}"
    rounded: "{rounded.full}"
    padding: "4px 8px"
---

# Design System: Jania Vandevoorde — Personal Site

## Overview

**Creative North Star: "The Lab Notebook"**

This is a working researcher's notebook, not a marketing site: monospace italic timestamps sit beside bold sans headlines the way a date stamp sits beside a lab entry, and every skill, project, and role is tagged with a small colored dot the way you'd annotate a page in the margin. The site is built entirely on daisyUI's stock "cupcake" (light) and "dracula" (dark) themes with zero color overrides — a deliberate choice to spend effort on content and precision rather than bespoke chrome. The voice is warm and approachable: cupcake's soft cream-and-pink palette in light mode, dracula's cozy purple-and-navy palette in dark mode, both rendered through the same rounded, friendly, tactile component language. Nothing here is cold or corporate; pills, rounded cards, and a gentle hover-lift keep every surface inviting.

Surfaces are flat at rest and only announce themselves on interaction — a card, a timeline entry, a CTA all sit quietly until hovered, then lift with a shadow and a subtle scale. This keeps the page calm and lets the content (experience, projects, skills) carry the visual weight, with color reserved for actionable and identifying moments: the accent pink on a name, a hover state, a skill-level bar, a project tag dot.

**Key Characteristics:**
- Two complete, unmodified daisyUI themes (cupcake / dracula) swapped via `data-theme`, no custom palette
- Friendly, tactile components: pill-shaped CTAs, generous rounding, hover-lift on every interactive surface
- Monospace italic timestamps as a recurring "lab notebook" signature against bold sans headlines
- Flat-at-rest, lift-on-hover elevation — depth is earned by interaction, never ambient
- Colored per-language tag dots as a lightweight taxonomy across skills, projects, and experience

## Colors

Two full palettes, not one palette with light/dark variants of the same hues — cupcake and dracula shift hue as well as lightness between modes (secondary swings pink → violet, primary swings teal → magenta), so each role is documented per theme rather than as a single canonical value.

### Primary — reserved (dormant)
- **Teal Reserve** (`#65c3c8` light / `oklch(76.17% 0.089 200.03)`) / **Magenta Reserve** (`#ff79c6` dark / `oklch(75.46% 0.183 346.81)`): daisyUI's `primary` token is fully defined by both themes but not part of the active visual language — it appears only in the unreferenced `BetterIcon` component and the 404 page's stock `.btn-primary`. Treat it as available, not adopted.

### Secondary — the real accent
- **Cupcake Pink** (`#ef9fbc` light / `oklch(78.94% 0.101 356.3)`) / **Dracula Violet** (`#bd93f9` dark / `oklch(74.2% 0.149 301.88)`): does essentially all of the accent work — the name highlight in the hero, every CTA pill, nav hover states, filled skill-level bars, hover text on card titles and timeline icons. This is the color to reach for, not primary.

### Marigold — hover escalation
- **Marigold** (`#eeaf3a` light / `oklch(79.38% 0.146 78.62)`, `#ffb86c` dark / `oklch(83.39% 0.124 66.56)`): the one-step-further color. Every place Cupcake Pink appears at rest, Marigold appears on hover/active — CTA buttons, filled skill bars, timeline icons. It never appears at rest on its own.

### Neutral
- **Ink Plum** (`#291334` light / `oklch(23.57% 0.066 313.19)`): `neutral` and `base-content` in cupcake — all body text and headings in light mode.
- **Slate Dusk** (`#414558` dark / `oklch(39.45% 0.033 275.52)`): `neutral` in dracula, used for the theme-toggle track and low-emphasis dark-mode surfaces.
- **Paper Cream** (`#faf7f5` light / `oklch(97.79% 0.004 56.38)`): `base-100`, the page background in light mode.
- **Card Cream** (`#efeae6` light / `oklch(93.98% 0.008 61.45)`): `base-200`, the resting background for every card, chip, and grouped surface in light mode.
- **Hairline Cream** (`#e7e2df` light / `oklch(91.59% 0.007 53.44)`): `base-300`, tag-chip borders and unfilled skill-bar segments in light mode.
- **Void Navy** (`#282a36` dark / `oklch(28.82% 0.022 277.51)`): `base-100`, the page background in dark mode (Dracula's canonical background).
- **Card Navy** (`#232530` dark / `oklch(26.81% 0.021 277.51)`): `base-200`, card background in dark mode.
- **Hairline Navy** (`#1f202a` dark / `oklch(24.79% 0.019 277.51)`): `base-300`, borders and unfilled bar segments in dark mode.
- **Moonlight** (`#f8f8f2` dark / `oklch(97.75% 0.008 106.55)`): `base-content` in dark mode — Dracula's canonical foreground, used for all dark-mode text.

### Named Rules
**The One Accent Rule.** Only Cupcake Pink (secondary) and Marigold (accent) carry semantic color. Primary stays dormant; everything else is neutral. A page with three competing "brand" colors is a page that broke this rule.

**The Dot-Not-Fill Rule.** Per-language/tool identity (Python, TypeScript, AWS, etc., defined in `tagStyles.ts`) is carried by a small 2–2.5px colored dot inside an otherwise neutral chip — never by filling the whole chip with the brand hue. This keeps the taxonomy legible without letting a grid of tags turn into a color explosion.

## Typography

**Body & Display Font:** ui-sans-serif, system-ui, sans-serif (Tailwind's default system stack — no custom font is loaded)
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace

**Character:** The default system sans carries all prose and headings without ornament — the typographic personality comes entirely from weight contrast (black/bold headlines over regular body) and the mono/italic treatment reserved for dates, which reads as a deliberate "timestamp" voice against the plain sans everywhere else.

### Hierarchy
- **Display** (font-black, 8rem `text-9xl`): the 404 page's numeral only — the one place the type scale goes maximal.
- **Headline** (font-bold, 2.25rem `text-4xl`): the hero's "Welcome! I'm [Name]" — the one large statement per page.
- **Title** (font-bold, 1.875rem `text-3xl`, or 1.5rem→1.875rem `text-2xl md:text-3xl`): page titles ("Technical Projects") and section headers (Grid/List titles, "Education", "Experiences").
- **Card title** (font-bold, 1.125rem→1.25rem `text-lg md:text-xl`): project/experience card headings inside Grid; timeline entry titles use font-black at the same size for extra weight.
- **Body** (font-normal, 1rem `text-base` default, or 0.875rem→1rem `text-sm md:text-base` for card descriptions): prose copy. No explicit max-width constraint on line length beyond the container.
- **Label** (font-mono italic, 1rem, no case transform): dates and timestamps only — `<time>` elements in the resume timeline, the footer's commit hash.
- **Micro-label** (font-semibold, `text-[0.64rem]`–`text-[0.72rem]`, uppercase, tracking-wide): tag-chip text, an arbitrary size below Tailwind's default scale reserved for the tag taxonomy.

### Named Rules
**The Timestamp-Is-Mono Rule.** Any date or time value renders in italic monospace, never the body sans. It's the one recurring typographic signature in the system — keep it exclusive to actual chronology, not decoration.

## Layout

Single-column, content-centered layout with no persistent sidebar. The `<main>` container caps at `max-w-5xl` (page content) while the sticky navbar caps narrower at `max-w-screen-lg`; the resume/timeline column narrows further to `max-w-3xl` for readability, and the projects grid removes the cap (`max-w-none`) to use the full content width for its 1/2/3-column card grid.

Section rhythm is built from plain `border-b`/`border-t` dividers (unthemed — they inherit `currentColor`, i.e. the active theme's text color, rather than a dedicated divider token) with `py-12` between major page sections and `mb-6`–`mb-12` between sub-blocks. Card and grid gaps step from `gap-4` (mobile) to `gap-6` (`md:`) for the project/skill grid, and the grid itself steps 1 → 2 → 3 columns at `sm:` and `lg:`. Nearly every spacing and type value in the system follows this same two-step mobile→`md:` responsive pattern rather than a full breakpoint ladder.

## Elevation & Depth

Flat by default, lifted only on interaction. No component carries a resting shadow; cards, timeline entries, and CTAs sit as flat colored surfaces against the page background and only gain `shadow-lg` plus a `scale-105` lift when hovered (`transition-transform duration-200`). Tag chips are the one exception, carrying a constant `shadow-sm` as a subtle separation device since they sit on top of card surfaces.

### Named Rules
**The Flat-Until-Touched Rule.** Every interactive surface (project/experience cards, timeline entries, CTA buttons) starts with zero elevation. Shadow and scale exist only as a response to hover — they are earned by interaction, never ambient. A new component with a resting `shadow-*` breaks this rule.

## Shapes

Generous, friendly rounding throughout. Cards and list items use `rounded-lg`/`rounded-xl` (0.5–0.75rem); CTA buttons, tag chips, icon containers, and the profile photo mask all use `rounded-full` — the system reaches for a full pill or circle before it reaches for a moderate corner. Borders are used sparingly and only where a surface needs to read as detached from an identically-colored background (tag chips at `border-base-300` on a `base-100` fill sitting atop `base-200` cards); cards and CTAs otherwise rely on background-color contrast alone, no border.

## Components

### Buttons
- **Shape:** `rounded-full` pill (the dominant, custom pattern) — `bg-secondary text-white`, `px-6 py-2` (page CTAs like "More Projects") or `px-4 py-2` with a circular icon badge (resume/project action buttons).
- **Hover:** background steps from Cupcake Pink to Marigold (`hover:bg-accent`), `transition-colors duration-200`. Icon-badge buttons also scale their icon 1.25× on hover.
- **Note:** the 404 page uses daisyUI's native `.btn .btn-primary` / `.btn .btn-outline .btn-accent` primitives instead of the custom pill pattern — an isolated exception, not the system's button language. New buttons should follow the custom pill pattern above, not the 404 page.

### Tags / Chips
- **Style:** `rounded-full` pill, `bg-base-100` fill with a `border-base-300` hairline, `shadow-sm`, uppercase micro-label text with a leading colored dot (`getTagStyle`) sized `h-2 w-2`–`h-2.5 w-2.5`.
- **State:** static; no selected/unselected toggle — chips are always-on identity markers, not filters.

### Cards / Containers
- **Corner Style:** `rounded-lg` (Grid project/experience cards) or `rounded-xl` (List items).
- **Background:** `bg-base-200` (Card Cream / Card Navy) against the `bg-base-100` page.
- **Shadow Strategy:** flat at rest, `shadow-lg` + `scale-105` on hover (see Elevation & Depth).
- **Border:** none.
- **Internal Padding:** `p-4` mobile → `p-6` at `md:`.

### Skill-Level Bar
- **Style:** five `flex-1` segments, `h-2`–`h-3`, `rounded-lg`. Filled segments (`level` count) are Cupcake Pink, escalating to Marigold on card hover; unfilled segments are `bg-base-300` (Hairline Cream/Navy).

### Timeline (Resume)
- **Style:** daisyUI `timeline timeline-vertical timeline-snap-icon`, alternating left/right entries. Icon marker is a checkmark-circle SVG, Cupcake Pink when `colored`, filling solid and turning white on entry hover (`group-hover:bg-accent`). Dates render in the mono-italic label style; entry titles are `font-black`. The whole entry scales 1.05× on hover.

### Navigation
- **Style:** sticky `bg-base-100` bar, `max-w-screen-lg`. Links are `text-lg` with `rounded-full` hover pills (`hover:bg-secondary/20`) — the one place secondary is used as a soft translucent fill rather than a solid.
- **Mobile:** hamburger toggle reveals a slide-down `bg-base-100` panel with the same rounded hover-pill links, opacity/scale-transitioned in/out over 200ms.

### Theme Toggle
- **Style:** daisyUI `toggle theme-controller` styled with `bg-base-content`, sun/moon SVG icons inlined at each end — a signature small custom composition rather than a bare daisyUI default.

## Do's and Don'ts

### Do:
- **Do** use Cupcake Pink (`secondary`) for any new accent, CTA, or highlighted state; escalate to Marigold (`accent`) on hover only.
- **Do** keep new interactive surfaces flat at rest and lift them with `shadow-lg` + a subtle `scale` only on hover/focus.
- **Do** reach for `rounded-full` first for buttons, chips, and icon containers; use `rounded-lg`/`rounded-xl` for cards and larger containers.
- **Do** render any date/timestamp in italic monospace — it's the system's one consistent typographic signature.
- **Do** follow the two-step `[mobile] md:[desktop]` responsive pattern already used for type size and spacing, rather than introducing `sm:`/`lg:` steps for values that don't already have them.

### Don't:
- **Don't** introduce `primary` as an active accent color — it's reserved/dormant by design; use secondary/accent instead.
- **Don't** give a card, chip, or button a resting shadow — elevation is earned by hover, never ambient.
- **Don't** fill a whole tag chip with a brand/language color; carry per-language identity as a small dot inside a neutral chip.
- **Don't** introduce a third semantic color alongside Cupcake Pink and Marigold without a documented reason — the system deliberately runs on one accent pair.
- **Don't** hardcode a custom color value outside the daisyUI theme tokens (`base-100/200/300`, `base-content`, `secondary`, `accent`, `neutral`) except the intentional per-language `tagStyles.ts` palette, which is a documented, closed exception.
