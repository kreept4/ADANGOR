# Design System — Prof. Z. Adangor (SAN) & Co

<!-- impeccable:design-schema 1 -->
<!-- STATUS: homepage redesign committed to editorial mock + master palette. -->

## Direction

Sophisticated editorial chambers site: full-bleed photography, asymmetric rules, generous whitespace, serif display + sans UI. Aesop restraint (hairlines, scarce accent, no chrome noise) informs discipline; the inspiration mock sets composition (full-bleed hero, insights card, watchword grid, expertise panel).

## Color — Master Palette

### Neutrals
`#FFFFFF` `#FAFAFA` `#F8FAFA` `#FEF7EE` `#F5EFE8` `#F4F4F4` `#EEDDC4` `#E6E1D8` `#DDDDDD` `#DDD6CD` `#DDD5CA` `#D5D1C8` `#C5C6C8`

### Browns & Taupes
`#332524` `#4D4A44` `#675845` `#6C6459` `#754C29` `#787776` `#8D7961`

### Greys / Blacks
`#818283` `#4F5052` `#2F2F2F` `#2A2A2A` `#282728` `#0D0E10` `#000000`

### Accent
`#FA5C01` `#FF9A60` `#FFEEB0`

### Roles in code (`globals.css`)
| Token | Hex | Use |
|---|---|---|
| `--cream` | `#FEF7EE` | Page / nav / watchword floor |
| `--brown-ink` | `#332524` | Primary text |
| `--gold-mute` | `#8D7961` | Rules / scarce lines |
| `--brown-accent` | `#754C29` | Watchword labels |
| `--grey-soft` | `#F4F4F4` | Expertise band |
| `--accent` | `#FA5C01` | Focus / CTA hover / open row |

## Typography

- **Scale retained:** `--fs-hero` … `--fs-micro` clamps from the prior system.
- **Display:** Cormorant Garamond (`--font-display`) — hero title, insight citations, expertise numerals.
- **UI / body:** Instrument Sans (`--font-ui`) — nav, buttons, watchword, lists.

## Surfaces

1. **Header** — sticky cream bar, hairline bottom, centered wordmark, graphite mail CTA.
2. **Hero** — full-bleed holographic plate, grain + veil, white serif thesis, retained Speak CTA, frosted insights card.
3. **Watchword** — cream, right-aligned title, gold rules, stats | values + prose.
4. **Expertise** — grey band, white rounded panel, name · blurb · numeral rows.

## Motion

Entrance rise on hero; citation fade; expertise blur falloff. Respect `prefers-reduced-motion`.
