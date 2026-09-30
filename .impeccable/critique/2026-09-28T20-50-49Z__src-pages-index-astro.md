---
target: the site (index/projects/resume/404)
total_score: 21
max_score: 28
na_heuristics: 5,7,10
p0_count: 0
p1_count: 3
target_identity: "file:/Users/janiavdv/Documents/GitHub/janiavdv.github.io/src/pages/index.astro"
target_fingerprint: "sha256:bafa59b81ba97817e5577d94b24d29e269fbb8e678f8537982ca9e9fec2a13ae"
target_path: /Users/janiavdv/Documents/GitHub/janiavdv.github.io/src/pages/index.astro
timestamp: 2026-09-28T20-50-49Z
slug: src-pages-index-astro
closed: true
---
# `/impeccable critique` — janiavdv.github.io

**Method: dual-agent (A: design review · B: detector + browser evidence)**

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Toggle/theme states update immediately and legibly |
| 2 | Match System / Real World | 3 | Notebook/timeline metaphor fits a CS researcher's site |
| 3 | User Control and Freedom | 3 | Back/home always reachable; 404 has two escape routes |
| 4 | Consistency and Standards | 2 | 404 buttons use raw daisyUI primitives instead of the site's own pill-CTA language |
| 5 | Error Prevention | n/a | No forms, no destructive actions |
| 6 | Recognition Rather Than Recall | 4 | 3-item nav, always visible, no memory burden |
| 7 | Flexibility and Efficiency | n/a | Not a meaningful axis for a read-only portfolio |
| 8 | Aesthetic and Minimalist Design | 3 | Clean and restrained, undercut by fixed-height card dead space |
| 9 | Error Recovery | 3 | 404 copy is warm and on-voice despite the visual break |
| 10 | Help and Documentation | n/a | Not applicable to a portfolio |
| **Total** | | **21/28** | **Good** (75%) |

## Design Specificity Verdict

**LLM assessment:** Mostly generic template energy with a few genuinely authored touches — the mono-italic timestamp treatment, the per-language tag-dot taxonomy, and the real profile photo all read as intentional. But content curation undercuts it: the homepage's 3 "featured" experience slots all go to near-duplicate MongoDB internships, while the most distinctive line on the resume — 3 years as Head TA for ML/Data Structures/Discrete Math at Brown — is `featured: false` and never surfaces on the page a recruiter skims in under a minute.

**Deterministic scan:** `impeccable detect --json src public` returned 2 advisory findings (both `design-system-font-size`: the `text-[0.64rem]`/`text-[0.72rem]` tag-chip labels sit outside DESIGN.md's formal typography tokens — a documentation gap, not a defect). The browser overlay pass (injected across all 4 pages, both themes) surfaced the real findings — see Priority Issues below. Two categories read as likely false positives: a `layout-transition` finding on `body`'s `margin-top` fired identically on every page (systemic, not per-page), and one on `#extra-projects-grid`'s `max-height` is the intentional "Show more" accordion animation.

**Visual overlays:** Overlay ran successfully in an isolated tab that's since been closed; no overlay is currently visible in the browser. Findings below are pulled from its console output.

## Overall Impression

A solid, coherent, accessible-*feeling* portfolio with two real contrast bugs hiding under that polish, plus one content-curation choice quietly working against the "systems/ML infra" positioning the hero copy promises.

## What's Working

1. Keyboard focus states are genuinely solid across nav, social icons, and timeline entries in both themes.
2. Empty-state discipline — `interests: []` and tag-less projects both render cleanly instead of showing empty scaffolding.
3. The dark theme is a real second theme (hue shifts, not a tint) and holds up across every page on real navigation.

## Priority Issues

**[P1] CTA button text fails WCAG contrast site-wide, in both themes**
- Why it matters: every primary CTA is white text on secondary fill — 2.0:1 light / 2.4:1 dark, both under the 4.5:1 (and 3:1 large-text) floor.
- Fix: darken the fill or switch button text to a dark ink token that contrasts in both themes.
- Suggested command: /impeccable audit or /impeccable colorize

**[P1] Course-list tooltip is completely keyboard-inaccessible**
- Why it matters: bare `<svg>` trigger with `group-hover:block`, no tabindex/focus handling — keyboard users cannot reach the education timeline's course content at all.
- Fix: real focusable trigger element, show on `:focus-within` as well as `:hover`.
- Suggested command: /impeccable harden or /impeccable audit

**[P1] Project/experience description text is unreadable in dark mode**
- Why it matters: `Grid.astro:79` / `ResumeTimeline.astro:102` hardcode `text-gray-600` (forbidden by DESIGN.md's own Don't list) — ~2.0-2.7:1 against the dark card background, confirmed independently by both assessments.
- Fix: `text-base-content/70` or equivalent theme-aware token.
- Suggested command: /impeccable audit

**[P2] The 404 page breaks the design system at the site's one dead-end moment**
- Why it matters: uses daisyUI's stock `.btn-primary` (documented as dormant) and `.btn-outline.btn-accent` at rest, violating the "Marigold only on hover" rule.
- Fix: rebuild with the standard `bg-secondary hover:bg-accent` pill pattern used everywhere else.
- Suggested command: /impeccable polish

**[P2] Homepage's 3 featured slots are near-duplicate, burying what's distinctive**
- Why it matters: all 3 "Recent Work Experience" cards are MongoDB internships; the Brown Head TA role and research-flavored projects are invisible in a <60s skim.
- Fix: re-curate `featured` flags in `resume.ts`.
- Suggested command: /impeccable clarify (content change, not really a visual-design command's job)

## Persona Red Flags

**Jordan (first-timer/recruiter):** Hero promises "systems/ML infra" interests; homepage shows MongoDB x3 instead.
**Sam (accessibility):** Course-tooltip keyboard trap + dark-mode description contrast both land directly on Sam.
**Casey (mobile):** Layout holds up well at ~390px; only a sub-perceptible mid-animation overlap during the mobile menu's open transition.

## Minor Observations

- Tag-chip text renders at 10.24px across 13 instances per page/theme.
- Footer's commit-hash link hardcodes `text-blue-500`, a third off-palette color at the page's closing moment.
- Fixed-height cards (`h-[280px] overflow-hidden`) create uneven whitespace and a silent-truncation risk.
- `List.astro` and `BetterIcon.astro` are fully built but unused anywhere.
- Every page shares the identical generic OG/meta description.
- DESIGN.md's micro-label sizes aren't represented in the frontmatter typography tokens.
- "Neon text on dark background" and "zero-offset glow" detector findings in dark mode likely false positives (intentional accent color; no matching source for the glow).

## Questions to Consider

1. Is `featured` in `resume.ts` doing real curation work, or did it default to "most recent 3"?
2. DESIGN.md documents `primary` as dormant — the 404 page uses it anyway. In scope for a fix?
3. Was dark mode QA'd against real content, or mainly the hero/marketing sections?
