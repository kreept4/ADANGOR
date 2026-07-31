---
version: alpha
name: Aesop
website: "https://www.aesop.com"
description: >-
  An apothecary-grade commerce interface anchored on warm graphite ink (#333333) over a cream canvas (#fffef2), with every button, input, and product tile rendered at a 0px corner — the brand's signature right-angle geometry. Body type runs SuisseIntl at 14px / 21px line-height, while the homeward "New and notable" headline ladders up to Zapf-Humanist serif at 31px — the only humanist break in an otherwise grotesque-led page. Photography carries the warmth (warm taupe #f7ecdd, terracotta-leather #945c26), and the system refuses gradients, drop shadows, and rounded chrome.

seo:
  title: "Aesop Design System for React — SuisseIntl, graphite #333333, 18 components"
  metaDescription: "Aesop's apothecary e-commerce design system as a DESIGN.md file. Cream canvas #fffef2, graphite ink #333333, SuisseIntl + Zapf-Humanist, 0px corners. For React and AI tools."
  highlights:
    - "Zero-radius geometry — every button, input, product tile, and category card sits at 0px corners; only avatar dots use 50%"
    - "Two-typeface system — SuisseIntl grotesque at 14px / 16px for 90% of the page, Zapf-Humanist serif reserved for the single 'New and notable' headline at 31px"
    - "Graphite ink (#333333) over off-cream canvas (#fffef2) — 2101 ink occurrences against 280 cream, the dominant warm-monochrome contrast"
    - "Terracotta-leather accent (#945c26) appears in just 10 borders — a scarcity move that lets photography carry the brand warmth instead of pigment"
    - "13px 24px 12px asymmetric button padding — taller cap-side than baseline, a small typographic correction inherited from print apothecary labels"
  tags:
    - "E-commerce & Retail"
  lastUpdated: "2026-05-13"
  author:
    name: "Dov Azencot"
    url: "https://x.com/dovazencot"
  opening: |
    Aesop's storefront is built around one observation: a global skincare brand can sell at luxury price points without using a single drop shadow, gradient, or rounded corner. The canvas is a warm cream (#fffef2) tinted just enough to read as paper, not screen. Ink is a warm graphite (#333333) used 2101 times across text and 1px hairlines — never the pure black that would feel pharmaceutical. Photography handles every moment of brand warmth: amber bottle glass, warm taupe (#f7ecdd) studio walls, terracotta-leather (#945c26) accents in the gift-set tiles. The chrome stays out of the way.

    This page packages the storefront into a DESIGN.md file. Inside: 18 color tokens grouped into ink, surface, hairline, and accent layers; 12 type styles built on SuisseIntl grotesque with one Zapf-Humanist serif moment for the "New and notable" headline; a 2-step corner radius (0px almost everywhere, 50% only on avatar dots); a 4px-based spacing scale that pivots at 13px 24px 12px for the signature button, and 18 components covering the top-nav, hero band, product tile, category grid, newsletter input, and footer.

    Feed the file to Claude, Cursor, or GitHub Copilot. The agent reproduces Aesop's apothecary discipline — right-angle buttons, hairline borders, cream canvas, SuisseIntl labels — instead of a generic SaaS theme. Reference tokens directly in Tailwind config or CSS variables, audit an existing storefront against this baseline, or use the file as a teaching artifact for what restraint actually looks like when every component is asked to recede.
  related:
    - href: "/design"
      title: "Browse all design systems"
      description: "The full directory of DESIGN.md files on shadcn.io, with live mockups for each."
    - href: "https://www.aesop.com"
      title: "Aesop — official site"
      description: "The Australian skin, hair, and body care brand's own storefront — the source for this design system."
    - href: "https://github.com/google-labs-code/design.md"
      title: "The DESIGN.md specification"
      description: "Google Labs' open spec for machine-readable design system files."
  questions:
    - id: "primary-color"
      title: "What is Aesop's primary brand color?"
      answer: "Aesop does not run a single saturated brand voltage. The dominant token is warm graphite #333333 with 2101 occurrences across text and 1px hairlines — never the pure black that would feel pharmaceutical. The cream canvas #fffef2 (280 occurrences) sits underneath as the warm-paper floor. The closest thing to an accent is the terracotta-leather #945c26 used in 10 border instances around gift-set tiles, and warm taupe #f7ecdd used as a backdrop in 3 product hero photos. The brand resists pigment as a positioning move — photography carries the warmth instead."
    - id: "typography"
      title: "What typography does Aesop use, and what should I use if SuisseIntl is unavailable?"
      answer: "Aesop runs SuisseIntl (and SuisseIntl-Medium) as the grotesque sans for 90% of the page — body text, navigation, buttons, and inputs all sit at 14px with 21px line-height. The single humanist break is Zapf-Humanist serif at 31px / 41.23px for the homepage 'New and notable' headline. If SuisseIntl is unavailable, Söhne or Inter at weight 400/500 are the closest substitutes — both keep the humanist proportions Aesop needs. For Zapf-Humanist, Optima or Albertus are open-source approximations; never substitute a slab-serif or transitional like Garamond, which would shift the brand from apothecary to publication."
    - id: "zero-radius"
      title: "Why does Aesop use 0px corners everywhere?"
      answer: "Every button, input, product tile, category card, and modal panel renders at 0px border-radius. Only avatar dots and a few decorative motion-player elements use 50%. The right-angle geometry inherits from print apothecary labels and museum-display typography — the corners refuse to soften, refuse to look 'web-friendly', refuse to look like every other e-commerce template. The design move forces the rest of the system (hairlines, photography, type) to do the warmth work that rounded corners would otherwise handle in a softer skincare brand."
    - id: "use-in-project"
      title: "Can I use this DESIGN.md to build my own React app?"
      answer: "Yes — the file is structured to feed into Claude, Cursor, or any AI tool that reads design tokens. The agent reproduces Aesop's apothecary discipline (cream canvas, graphite ink, 0px corners, SuisseIntl grotesque, hairline borders) rather than a generic shadcn theme. Every color, type style, radius, and spacing value is a quoted token you can paste into Tailwind config, CSS variables, or your own component library. The button padding of 13px 24px 12px is preserved as a literal string — the small top-bottom asymmetry is intentional and inherited from print label baselines."
    - id: "spacing-scale"
      title: "What spacing rhythm does Aesop use?"
      answer: "The base unit is 4px, but the page leans on 12px (70 occurrences) and 8px (44 occurrences) as the dominant rhythm. Tile internal padding sits at 0px 15px and 12px 0px 0px — narrow horizontal breathing room with deliberate vertical separation between image and label. The primary button uses 13px 24px 12px — taller cap-side than baseline by 1px, a typographic correction that compensates for SuisseIntl's optical descender. Section gaps run 40px 0px 30px between category rails and 17px 0px between newsletter form rows."
    - id: "known-gaps"
      title: "What's missing from this DESIGN.md spec?"
      answer: "A handful of items documented in the Known Gaps section. SuisseIntl and Zapf-Humanist are licensed typefaces and not available as public web fonts — substitutes are listed but not exact. Aesop's product photography (warm-lit amber bottles, ceramic dishes, white cloth backdrops) is the brand's load-bearing visual asset, and photography direction is out of scope for a token document. Cart flyout, checkout, and account-area chrome are not extracted from the homepage capture. The store-locator map, ingredient-modal overlay, and gift-personalisation flow each carry component variants not present in the homepage extraction. Motion (hover-fade product tiles, drawer-slide cart) is undocumented."

colors:
  ink: "#333333"
  ink-soft: "#666666"
  ink-deep: "#242424"
  ink-quiet: "#999999"
  ink-mid: "#505050"
  ink-pure: "#000000"
  canvas: "#fffef2"
  surface-warm-taupe: "#f7ecdd"
  surface-cool-gray: "#e4e9ea"
  on-ink: "#fffef2"
  hairline: "#333333"
  hairline-soft: "#666666"
  accent-terracotta: "#945c26"
  accent-deep-teal: "#193d46"
  accent-slate: "#435d63"
  accent-stone: "#a7b4b8"
  accent-mist: "#a6a6a6"
  accent-amber: "#e9962d"

typography:
  display-serif:
    fontFamily: "Zapf-Humanist, Optima, sans-serif"
    fontSize: 31px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  heading-md:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 30px
    fontWeight: 400
    lineHeight: 1.33
    letterSpacing: 0
  heading-sm:
    fontFamily: "SuisseIntl-Medium, Söhne, Inter, sans-serif"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: 0
  title-md:
    fontFamily: "SuisseIntl-Medium, Söhne, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0
  body-lg:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0
  caption:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  nav-link:
    fontFamily: "SuisseIntl-Medium, Söhne, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: 0
  button:
    fontFamily: "SuisseIntl-Medium, Söhne, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  link-emphasis:
    fontFamily: "SuisseIntl, Söhne, Inter, sans-serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: 0
  link-label:
    fontFamily: "SuisseIntl-Medium, Söhne, Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  none: "0px"
  pebble: "20px"
  full: "9999px"

spacing:
  xxs: "4px"
  xs: "8px"
  sm: "10px"
  md: "12px"
  base: "15px"
  lg: "16px"
  xl: "17px"
  xxl: "20px"
  section: "24px"
  band: "40px"

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 24px 12px"
    height: "48px"
    border: "0"
  button-primary-hover:
    backgroundColor: "{colors.ink-deep}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "13px 24px 12px"
    height: "48px"
    border: "1px solid {colors.ink}"
  button-text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.link-emphasis}"
    rounded: "{rounded.none}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: "51px"
    padding: "17px"
    border: "0"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    padding: "17px"
    rounded: "{rounded.none}"
  hero-band:
    backgroundColor: "{colors.surface-warm-taupe}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    padding: "40px 0px 30px"
  hero-overlay-card:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: "20px"
  category-rail:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.display-serif}"
    padding: "40px 0px 30px"
  product-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.none}"
    padding: "12px 0px 0px"
    border: "1px solid {colors.hairline}"
  product-tile-label:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "0px 15px"
  product-tile-price:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: "0px 15px"
  feature-card-split:
    backgroundColor: "{colors.surface-warm-taupe}"
    textColor: "{colors.ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: "20px"
  feature-card-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    typography: "{typography.heading-md}"
    rounded: "{rounded.none}"
    padding: "20px"
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px 16px"
    height: "40px"
    border: "1px solid {colors.ink}"
  newsletter-form:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "0px 23px"
  avatar-dot:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
    rounded: "{rounded.full}"
    height: "8px"
  hairline-rule:
    backgroundColor: "{colors.hairline}"
    height: "1px"
    border: "0"
  footer:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    padding: "40px 0px 30px"
    border: "1px solid {colors.hairline}"
---

## Overview

Aesop's storefront is the most restrained interface in luxury skincare — a cream-paper canvas (`{colors.canvas}` — #fffef2) carrying warm-graphite ink (`{colors.ink}` — #333333), with every interactive surface rendered at a 0px corner. Where most beauty brands sell with pillowed cards, photographic gradients, and bold rose-gold accents, Aesop holds the chrome at right angles and lets the product photography carry the entire emotional load.

The type system is bi-modal. **SuisseIntl** grotesque at 14px / 21px line-height handles 90% of the page — body text, navigation, button labels, input fields, footer columns. The single humanist break is **Zapf-Humanist serif** at 31px / 41.23px, reserved for the "New and notable" homepage headline. No other section gets the serif. This is the system's strongest editorial decision: one typeface holds the page; one serif holds a single moment.

**Apothecary discipline**: Aesop's interface inherits from print apothecary labels — right-angle frames, hairline borders, narrow vertical type rhythm, no decorative depth. Where most e-commerce systems use rounded corners as a warmth signal, Aesop strips the corners entirely and asks photography to do that work. Where most luxury beauty brands amplify with rose-gold, mauve, or champagne accents, Aesop allows just one terracotta-leather (`{colors.accent-terracotta}` — #945c26) tint, scoped to 10 hairline borders around gift-set tiles.

**Key Characteristics:**
- Warm graphite ink (`{colors.ink}` — #333333) used 2101 times across text and hairlines — never pure black, which would feel pharmaceutical.
- Cream-paper canvas (`{colors.canvas}` — #fffef2) — slightly warm, deliberately not pure white. 280 surface occurrences.
- 0px corners on every button, input, tile, and card. `{rounded.full}` (50%) reserved for tiny avatar dots; `{rounded.pebble}` (20px) appears only on motion-player chrome.
- SuisseIntl grotesque dominates; Zapf-Humanist serif appears exactly once, on the "New and notable" headline.
- Asymmetric button padding `13px 24px 12px` — 1px taller cap-side than baseline, an optical correction inherited from label typography.
- Photography carries warmth: amber bottle glass, warm taupe (`{colors.surface-warm-taupe}` — #f7ecdd) studio walls, ceramic dishes, hand-skin tones.
- 1px hairline borders in `{colors.hairline}` replace shadows everywhere — there is no `box-shadow` in the system.
- Section rhythm `40px 0px 30px` — narrower than the 96px SaaS-marketing standard, denser than a magazine, calibrated for browsing 6+ products per scroll.

## Colors

### Ink
- **Graphite** (`{colors.ink}` — #333333): frequency 2101. Used as text (1035), border (1034), background (28), shadow (4). The dominant token — every body paragraph, hairline, primary-button fill, and product label sits on this exact warm gray. Not pure black, not slate — a warm graphite that reads as ink-on-paper.
- **Soft Graphite** (`{colors.ink-soft}` — #666666): frequency 68. Used as text (34) and border (34) — for secondary labels, sub-nav items, and meta information beside product titles.
- **Deep Graphite** (`{colors.ink-deep}` — #242424): frequency 4. Used as background (2), text (1), border (1). Reserved for the hover state of `{component.button-primary}` and the rare emphasised text block.
- **Mid Graphite** (`{colors.ink-mid}` — #505050): the `--darkgray-light-20` variable — a one-step lift used in form field hint text.
- **Quiet** (`{colors.ink-quiet}` — #999999): a near-mid gray used in disabled states and form placeholder text.
- **Pure Black** (`{colors.ink-pure}` — #000000): frequency 98. Used as text (46), border (46), background (2). Reserved for SVG icon strokes and a small handful of overlay frames — Aesop avoids it for body text because it reads colder than graphite.

### Surface
- **Canvas** (`{colors.canvas}` — #fffef2): frequency 280. Used as text (138 — on dark surfaces), border (125), background (16). The default page floor. Tinted just enough to read as paper rather than screen.
- **Warm Taupe** (`{colors.surface-warm-taupe}` — #f7ecdd): frequency 3, all as background. The hero-band backdrop and feature-card-split fill — the photograph-friendly warm wall behind product hero shots.
- **Cool Gray** (`{colors.surface-cool-gray}` — #e4e9ea): a faint cool-gray reserved for the motion-player chrome and very-quiet section dividers.

### Hairline
- **Hairline** (`{colors.hairline}` — #333333): the 1px border tone on every product tile, text input, and footer column rule. Same hex as `{colors.ink}` — borders feel like ink lines rather than separate elevation steps. This single design move (ink = border) is why Aesop's pages read as one continuous sheet of paper rather than stacked cards.
- **Hairline Soft** (`{colors.hairline-soft}` — #666666): the secondary divider tone used inside dropdown menus and sub-nav rows.

### Accent
- **Terracotta Leather** (`{colors.accent-terracotta}` — #945c26): frequency 20. Used as text (10) and border (10). The closest thing to a brand accent — appears in gift-set tile borders, deluxe-product labels, and a handful of season-collection markers. Scoped narrowly. Never as a button fill.
- **Deep Teal** (`{colors.accent-deep-teal}` — #193d46): a near-charcoal teal reserved for the on-page motion player chrome — outside the brand-tone palette.
- **Slate** (`{colors.accent-slate}` — #435d63): paired with deep teal in player UI.
- **Stone** (`{colors.accent-stone}` — #a7b4b8): a cool stone for icon-only badges in the motion player.
- **Mist** (`{colors.accent-mist}` — #a6a6a6): the disabled-text variant — appears on greyed-out form labels.
- **Amber** (`{colors.accent-amber}` — #e9962d): a warm amber used as a single highlight in product-rating indicators — not a brand voltage, deployed once or twice per page.

## Typography

### Font Family
The system runs **SuisseIntl** and **SuisseIntl-Medium** as the grotesque sans for body, navigation, buttons, inputs, footer columns — every label that isn't the homepage hero headline. **Zapf-Humanist** serif at 31px appears exactly once, on the "New and notable" headline. The fallback stacks walk `Söhne, Inter, sans-serif` for the grotesque and `Optima, sans-serif` for the humanist serif.

The split is editorial:
- SuisseIntl grotesque (weight 400) → body, captions, footer
- SuisseIntl-Medium (weight 400, slightly heavier glyph) → buttons, nav, h2 sub-heads, emphasized labels
- Zapf-Humanist serif (weight 400) → exactly one h2 ("New and notable")

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-serif}` | 31px | 400 | 1.33 | 0 | The single "New and notable" headline — Zapf-Humanist |
| `{typography.heading-md}` | 30px | 400 | 1.33 | 0 | Hero overlay h2 ("New Solais Replenishing Hand Serum") — SuisseIntl |
| `{typography.heading-sm}` | 18px | 700 | 1.5 | 0 | Footer column heads and emphasis blocks |
| `{typography.title-md}` | 16px | 400 | 1.7 | 0 | Product-tile titles, feature sub-heads — SuisseIntl-Medium |
| `{typography.body-lg}` | 16px | 400 | 1.5 | 0 | Lead paragraphs in feature cards |
| `{typography.body-md}` | 14px | 400 | 1.5 | 0 | Default running text — SuisseIntl |
| `{typography.body-sm}` | 12px | 400 | 1.6 | 0 | Footer body, fine-print, breadcrumbs |
| `{typography.caption}` | 11px | 400 | 1.2 | 0 | Product prices, meta labels |
| `{typography.nav-link}` | 14px | 400 | 1.2 | 0 | Top-nav menu items — SuisseIntl-Medium |
| `{typography.button}` | 14px | 400 | 1.5 | 0 | Standard button labels |
| `{typography.link-emphasis}` | 14px | 700 | 1.6 | 0 | Inline emphasised body links |
| `{typography.link-label}` | 16px | 400 | 1.5 | 0 | Newsletter-form links and footer column rows |

### Principles
Aesop's type system stays at weight 400 across every display tier — there is no 600 or 800. The SuisseIntl-Medium variant carries the "heavier" labels without ever entering a true bold weight. Letter-spacing stays at zero everywhere. Line-heights run loose at 1.5–1.7 for body and tight at 1.2 for tiny captions — the rhythm reads as a printed catalogue, not a SaaS dashboard.

If SuisseIntl is unavailable, **Söhne** or **Inter** at weight 400/500 are the closest substitutes — both keep the humanist proportions Aesop needs. For Zapf-Humanist, **Optima** or **Albertus** are acceptable approximations; **never substitute a slab-serif or transitional** like Garamond, which would shift the brand from apothecary to publication.

## Layout

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 10px · `{spacing.md}` 12px · `{spacing.base}` 15px · `{spacing.lg}` 16px · `{spacing.xl}` 17px · `{spacing.xxl}` 20px · `{spacing.section}` 24px · `{spacing.band}` 40px.
- **Dominant rhythm:** 12px (70 occurrences) and 8px (44) — the body breathing units.
- **Section padding:** `40px 0px 30px` between major rails — denser than the 96px SaaS-marketing standard, calibrated for browsing 6+ products per scroll.
- **Product-tile padding:** `12px 0px 0px` between image and label, then `0px 15px` for horizontal label gutters.
- **Button padding:** `13px 24px 12px` — the asymmetric label-typographic correction.

### Grid & Container
- **Max content width:** ~1170px centered (heroHeading width measures 1170px in the extraction).
- **Product rail:** 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Hero band:** 50/50 split between full-bleed image and overlay copy card.
- **Footer:** 4-column link list at desktop, single column at mobile.

### Whitespace Philosophy
The cream canvas + zero-radius geometry + dense product rails create a catalogue pacing — Aesop reads as a printed apothecary index rather than a marketing storefront. Section gaps stay narrow (40px) so the eye can scan four product rails without leaving the fold; internal tile padding stays generous so the photography breathes.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Body sections, top nav, footer |
| Hairline | 1px `{colors.hairline}` border | Product tiles, text inputs, footer column rules |
| Inverse panel | `{colors.ink}` background on cream | Hero overlay cards, dark feature splits |
| Warm taupe surface | `{colors.surface-warm-taupe}` background | Hero band, photo-friendly section backdrops |
| Drop shadow | Used only on the motion-player overlay (`box-shadow` count: 4) | Not part of the brand chrome — strictly video-component scope |

The elevation philosophy is **hairline as border**: the same warm graphite serves as both ink and 1px rule, so a bordered tile reads as inked-on-paper rather than a stacked card. No drop shadows on product chrome. No gradients. The depth comes from photography composition (foreground bottle on warm taupe wall) and from the inverse panel — dark `{colors.ink}` blocks on cream — rather than from shadows or elevation steps.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | Every button, input, product tile, hero card, footer rule — the system default |
| `{rounded.pebble}` | 20px | Motion-player chrome only (timeline scrubber thumb, control buttons) — outside brand chrome |
| `{rounded.full}` | 9999px / 50% | Avatar dots and a small handful of indicator pips — 18 occurrences in the extraction, all decorative |

### Photography
Aesop's photography is the brand's load-bearing visual asset:
- Warm-lit amber bottle glass against warm taupe (`{colors.surface-warm-taupe}` — #f7ecdd) studio walls
- Ceramic dishes, brass droppers, raw stone surfaces in product hero shots
- Hand-skin tones in the "appreciate gesture" feature card — never face crops, often partial gesture
- Gift-set arrangements with terracotta-leather (`{colors.accent-terracotta}` — #945c26) accents

When photography is absent, the system falls back to inverse panels (dark `{colors.ink}` block) or warm taupe surfaces. Photography is never decorative — every shot carries a product.

## Components

### Top Navigation

**`top-nav`** — Cream nav bar pinned to the top of every page. 51px tall, `{colors.canvas}` background, no border. Carries the Aesop wordmark at left, primary horizontal menu (Skin, Hair, Body, Home, Read) and a search / cart / sign-in cluster at right. Menu items in `{typography.nav-link}` (SuisseIntl-Medium 14px / 1.2) with 17px padding.

**`nav-link`** — Individual top-nav item. Transparent background, `{colors.ink}` text, 17px padding all sides, `{rounded.none}` corners. No underline at rest; hover state is undocumented.

### Buttons

**`button-primary`** — The signature graphite CTA. Background `{colors.ink}` (#333333), text `{colors.on-ink}` (#fffef2), type `{typography.button}` (SuisseIntl-Medium 14px / 1.5), padding `13px 24px 12px`, height 48px, `{rounded.none}`. Used for "Add to cart", "Add all to cart", "Discover".

**`button-primary-hover`** — Hover state darkens to `{colors.ink-deep}` (#242424). The only state change documented in the system — Aesop intentionally avoids press-state animation.

**`button-secondary`** — Cream button with hairline outline. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.ink}` border, same padding and height as primary. Used for "Browse all" and "Read more" CTAs.

**`button-text-link`** — Inline text button, no background. Used for "Find out more" beneath feature cards. Type `{typography.link-emphasis}` (SuisseIntl 14px / 700).

### Cards & Containers

**`hero-band`** — Warm taupe-tinted hero with a 50/50 split: a full-bleed product photograph on one side, an inverse-panel overlay card on the other. Background `{colors.surface-warm-taupe}`, padding `40px 0px 30px`.

**`hero-overlay-card`** — The inverse-panel sitting inside the hero band. Background `{colors.ink}`, text `{colors.on-ink}`, type `{typography.heading-md}` (SuisseIntl 30px), 20px padding, `{rounded.none}`. Carries the product name, a 2-line description, and a `{component.button-primary}`.

**`category-rail`** — The "New and notable" section. Cream background, Zapf-Humanist serif headline in `{typography.display-serif}` (31px), followed by a 3-up product-tile grid. Padding `40px 0px 30px`. This is the only place the serif appears.

**`product-tile`** — The atomic catalogue unit. Background `{colors.canvas}`, 1px `{colors.hairline}` border, `{rounded.none}`. Internal padding `12px 0px 0px` from image to label, then `0px 15px` horizontal gutter on `{component.product-tile-label}` and `{component.product-tile-price}`. Carries a product photograph, a 16px SuisseIntl-Medium title, a 12px caption price, and a `{component.button-primary}` at the bottom.

**`product-tile-label`** — The title row inside a product tile. Type `{typography.body-md}` (SuisseIntl 14px / 1.5), `{colors.ink}` text, padding `0px 15px`.

**`product-tile-price`** — The price line. Type `{typography.caption}` (SuisseIntl 11px), `{colors.ink}` text, padding `0px 15px`.

**`feature-card-split`** — A two-column feature card. One side carries warm taupe surface (`{colors.surface-warm-taupe}`) with a product photograph; the other carries the headline and body copy. `{rounded.none}` corners, 20px internal padding.

**`feature-card-dark`** — The inverse variant. Background `{colors.ink}`, text `{colors.on-ink}`, used for season-collection callouts and limited-edition announcements. Same padding and geometry as the warm taupe version.

### Inputs & Forms

**`text-input`** — Standard form field. Background `{colors.canvas}`, text `{colors.ink}`, 1px `{colors.ink}` border, type `{typography.body-md}` (SuisseIntl 14px), `{rounded.none}` corners, padding `0px 16px`, height 40px. Used for the email field in the newsletter form.

**`newsletter-form`** — Pre-footer email-capture row. Single `{component.text-input}` field on the left, `{component.button-primary}` ("Subscribe") on the right, both at 40px height. Internal padding `0px 23px`.

### Decoration

**`avatar-dot`** — One of only two `{rounded.full}` elements in the system. 8px diameter, `{colors.ink}` fill. Used as section-progress indicators and decorative pips next to ingredient lists.

**`hairline-rule`** — 1px horizontal rule in `{colors.hairline}`. Replaces every place a drop-shadow would normally separate sections in other systems.

### Footer

**`footer`** — Cream-canvas footer with 4-column link list. Background `{colors.canvas}`, text `{colors.ink}`, 1px top border, padding `40px 0px 30px`. Column heads in `{typography.heading-sm}` (SuisseIntl 18px / 700), link rows in `{typography.link-label}` (SuisseIntl-Medium 16px / 1.5). The footer never inverts — Aesop refuses the dark-footer convention that most e-commerce brands use.

## Do's and Don'ts

### Do
- Anchor every page on the cream canvas `{colors.canvas}` (#fffef2). Pure white reads as pharmacy; the warm tint is the brand differentiator.
- Use `{colors.ink}` (#333333) for both text and hairline borders. The shared hex is what makes pages read as one continuous sheet rather than stacked cards.
- Render every interactive surface at `{rounded.none}` (0px). The right-angle geometry is the system's strongest editorial decision.
- Reserve the Zapf-Humanist serif for exactly one moment per page. The "New and notable" h2 is the canonical use — never apply it to product titles or button labels.
- Preserve the asymmetric `13px 24px 12px` button padding verbatim. The 1px top-bottom asymmetry is an optical correction inherited from print labels.
- Use photography to carry brand warmth. The chrome stays neutral; the bottle glass, warm taupe wall, and hand-gesture shots do the emotional work.
- Apply hairline borders (`1px solid {colors.hairline}`) instead of drop shadows for every elevation moment.

### Don't
- Don't use pure black (#000000) for body text — it reads as pharmaceutical against cream and breaks the warm-graphite continuity. Reserve #000000 for SVG icon strokes only.
- Don't round any corner beyond `{rounded.full}` (50%) on avatar dots. A 4px or 8px radius on a product tile or button immediately reads as a different brand.
- Don't use Zapf-Humanist for more than one headline per page. Aesop's serif scarcity is the design — running it on h3 or button labels destroys the singular editorial moment.
- Don't paint a saturated accent across the storefront. The terracotta `{colors.accent-terracotta}` (#945c26) appears in just 10 hairline borders — never as a button fill or text color.
- Don't add `box-shadow` to product tiles, cards, or modals. The system uses hairline borders for separation; shadows immediately read as Material-Design.
- Don't invert the footer to dark. Aesop's footer is cream-on-cream because the brand refuses the e-commerce convention of dark-footer chrome.
- Don't substitute Garamond or another transitional serif for Zapf-Humanist. The humanist proportions are essential — a transitional would shift the page from apothecary to publication.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Hamburger nav; hero band stacks vertically; product rails 1-up; footer 4 cols → 1 |
| Tablet | 768–1024px | Top nav stays horizontal; product rails 2-up; feature cards stack |
| Desktop | 1024–1440px | Full top-nav with all menu items; 3-up product rails; 50/50 hero split |
| Wide | > 1440px | Same as desktop with more outer breathing room; max content width caps at 1170px |

### Touch Targets
- `{component.button-primary}` at 48px height — comfortably above WCAG 44px.
- `{component.text-input}` at 40px height — slightly below 44px but visually centered with the adjacent submit button.
- `{component.nav-link}` at 51px effective tap area with 17px padding.
- `{component.product-tile}` entire card is tappable; effective tap area >> 44px.

### Collapsing Strategy
- Top nav collapses to hamburger at < 768px; menu opens as a full-screen cream sheet.
- Hero band's 50/50 split collapses to single-column on mobile — image first, overlay card below.
- Product rails reduce columns rather than scaling tiles down. A 3-up desktop rail becomes 2-up tablet, 1-up mobile.
- Footer columns collapse 4 → 1 on mobile with rule dividers between groups.

## Known Gaps

- SuisseIntl and Zapf-Humanist are licensed typefaces not available as public web fonts. Substitutes (Söhne / Inter for SuisseIntl; Optima / Albertus for Zapf-Humanist) are documented in the typography section.
- Aesop's product photography is the brand's load-bearing visual asset — photography direction, lighting setup, and prop styling are out of scope for a token document.
- Cart flyout, checkout flow, and account-area chrome are not extracted from the homepage capture.
- The store-locator map, ingredient-modal overlay, and gift-personalisation flow each carry component variants not present in the homepage.
- Motion behavior (hover-fade product tiles, drawer-slide cart, image-carousel pagination) is undocumented.
- The motion-player chrome that appears in some campaign pages (`{colors.accent-deep-teal}`, `{colors.accent-slate}`, 20px corners) is a third-party Flowplayer component outside the Aesop brand system — those tokens are extracted but should not be treated as canonical Aesop chrome.
