# Dastarkhan 2036 — Future Vision (MEDIART213 Week 1)

## Font note
Fonts are loaded with `@import` on line 1 of `style.css`:

| Font | Used for | How to refer to it in CSS |
| --- | --- | --- |
| Fraunces | h1–h3, deck, times | `font-family: 'Fraunces', Georgia, serif;` |
| Spline Sans Mono | body text, labels | `font-family: 'Spline Sans Mono', monospace;` |

## Heading logic
- `h1` — one title for the whole page
- `h2` — the three big movements (01 / 02 / 03)
- `h3` — a question that belongs inside a section
- `h4` — the smallest label, nested under an h3 ("House rules")
- No levels skipped. Levels chosen by importance, not by how they look.

## Semantic elements used
header, nav, main, article (x3), aside, details/summary, figure/figcaption, mark, time, footer

## Embedded content used
- `svg` — inline Silk Road route map (interactive: hover or Tab to a city)
- `canvas` — animated steam over a pot in the header (static for reduced-motion users)
- `picture` + `img` — "Stories for a past we can dream about" banner, with a fallback image and alt text
- `audio` — rhythm of 05:30 (assets/audio). NOTE: this is a synthesized sketch; replace with a real recording if you have one.

## Accessibility
prefers-reduced-motion respected, alt text on images, aria-live on the map note, keyboard-focusable map stops.
