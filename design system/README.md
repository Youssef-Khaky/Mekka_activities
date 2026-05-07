# فعاليات مكة — Design System

> **Faaliyat Makkah** — A discovery platform for activities, events, places, and skills in and around Mecca. Categories include time-bound events, coffee culture, hiking trails, horseback riding, historic sites, hands-on skill workshops (welding, woodworking, fencing), and kids' robotics.

The brand is **refined classical Arabic, editorial, warm and artisan** — sand and terracotta tones, generous whitespace, photography paired with Arabic typographic overlays. Think *a heritage magazine that helps you go do something today.*

## Sources & status
- **Brief**: provided by the user (in chat).
- **No codebase, Figma, or assets** were attached. This system is built from scratch following the user's chosen direction:
  - Visual: warm & artisan, evokes Mecca's heritage
  - Tone: فصحى راقية (refined classical)
  - Imagery: editorial photo + Arabic typographic overlays
  - Surface: responsive web (mobile + desktop)
- **Fonts**: Loaded from Google Fonts (Amiri, Noto Naskh Arabic, IBM Plex Sans Arabic, Tajawal, IBM Plex Mono). The user requested font samples — see `preview/Type-Specimens.html` and the type cards in the Design System tab to choose a primary.
- **Logo**: User asked for wordmark options. See `assets/logo/` and `preview/Logo-Options.html`.
- **Icons**: Lucide via CDN. We chose Lucide for its even stroke weight and large set; flagged here as a substitution since no in-house icon set was provided.

---

## Index

| File / folder | What it is |
|---|---|
| `README.md` | This file — fundamentals, tone, visual rules. |
| `SKILL.md` | Cross-compatible skill manifest for Claude Code. |
| `colors_and_type.css` | All design tokens as CSS custom properties + semantic type classes. |
| `assets/logo/` | Wordmark logo options (SVG). |
| `assets/imagery/` | Reference imagery placeholders + style notes. |
| `preview/` | Cards rendered in the Design System tab — type specimens, color scales, components, etc. |
| `ui_kits/web/` | Responsive Home / discovery-feed UI kit (React + JSX components). |

---

## Brand Pillars

1. **رفعة (Elevation)** — Mecca is sacred, and its surrounding life is rich. The visual language must feel dignified, never noisy.
2. **حرفية (Craft)** — Every detail considered: type pairings, generous margins, soft shadows, intentional restraint.
3. **اكتشاف (Discovery)** — The product helps people *find and do* — so cards, lists, and maps are practical and scannable, not decorative-only.
4. **حرارة (Warmth)** — Color, texture, and language carry the warmth of place — coffee, sand at golden hour, dates, mountains.

---

## Content Fundamentals

### Language & register
- **Arabic-first, RTL.** All marketing and listings are in **فصحى راقية (Modern Standard Arabic, refined register)** — full diacritics on poetic lines and headers when they aid prosody, plain script for body and listings.
- **Latin/English** is secondary. When used (e.g. mixing brand names, social handles, geocodes), it's set in the same UI font for harmony.
- **Address the reader as أنت / صيغة الجمع المخاطب** when warm; use neutral nominalization in listings (e.g. "ركوب الخيل في وادي…", not "اركب الخيل في وادي…").

### Voice
| Trait | We are | We are not |
|---|---|---|
| Tone | Refined, calm, considered | Casual, slangy, hype-y |
| Verbs | Active but unhurried | Imperative-shouty |
| Length | Concise, magazine cutlines | Long-winded blog posts |
| Emoji | **Not used.** Heritage and dignity > playfulness. | Emoji-laden |
| Exclamation | Almost never | Frequent |

### Casing & punctuation
- Arabic does not have casing — **rely on type weight and size** for hierarchy, not all-caps.
- Latin words inside Arabic copy: keep their natural case (e.g. *Instagram*, *WhatsApp*).
- Use **Arabic punctuation** correctly: ، (comma), ؛ (semicolon), ؟ (question), … (ellipsis).
- **Arabic-Indic numerals (٠١٢٣٤٥٦٧٨٩)** for editorial body and dates; **Latin numerals (0–9)** OK in dense data tables and prices to aid scanning. Be consistent within a surface.

### Example copy

**Hero (home page)**
> فعاليات مكة
> اكتشف ما تفعله اليوم — في الجبل، في المقهى، في ورشة الحرفة.

**Listing card title**
> ركوب الخيل في وادي إبراهيم

**Listing card cutline**
> رحلات صباحية ومسائية لجميع المستويات. مرشد محلي، شاي، استراحة عند صخرة الفجر.

**Event card**
> الجمعة ٢٠ شوال • ٤:٣٠ م
> أمسية شعرية في مقهى البَنّ
> دخول مجاني، الأماكن محدودة.

**Microcopy / actions**
- زيارة الموقع
- حجز الآن
- إضافة إلى رحلتي
- شارك
- موقع البزنس على Instagram
- جميع المقاهي
- جميع الفعاليات

### What we don't write
- ❌ "احجز الآن!! 🔥🔥" (over-eager + emoji)
- ❌ "أفضل مكان لازم تزوره يا صاحبي" (too casual)
- ❌ "Don't miss out!" (English imperative, not on-brand)
- ❌ Full block of caps in Latin loanwords ("INSTAGRAM" → use "Instagram").

---

## Visual Foundations

### Color
- **Palette**: warm neutrals (parchment, sand, ink) anchor the system. Brand accent is **terracotta `#c97a4a`**, used for primary actions, key links, and editorial pull-quotes. Secondary accents: **oasis green `#1f3d2b`** (calm, grounding) and **saffron `#b8884a`** (highlight only — used sparingly).
- **Backgrounds**: pages use `parchment-50 #faf6ee` not pure white — the warmth is essential. Surfaces (cards) are pure white `#ffffff` to add contrast and editorial precision.
- **Text**: deep ink `#1a1612` for primary, warm slate `#4a3f2f` for secondary. We avoid pure black.
- See `colors_and_type.css` for the full scale and semantic tokens.

### Typography
- **Single typeface umbrella: Tajawal.** A geometric humanist sans with weights 300 / 400 / 500 / 700 / 900 — the entire UI/body/display system rides on it.
  - **Tajawal 900 (Black)** — magazine display, hero, section titles.
  - **Tajawal 700 (Bold)** — H4/H5, card titles, button-strong.
  - **Tajawal 500 (Medium)** — UI labels, nav, eyebrows.
  - **Tajawal 400 (Regular)** — body paragraphs, descriptions.
  - **Tajawal 300 (Light)** — secondary metadata, deck captions.
- **Amiri italic** is kept *only* as a pull-quote accent (editorial moments). Not for general copy.
- **IBM Plex Mono** for code, timestamps, GPS, prices in dense tables.
- All loaded from Google Fonts. **Final pick: Tajawal** (locked in by user).

### Spacing & layout
- 8px base grid (with 4px half-step for tight UI).
- Three container widths: `narrow 720px` (article), `default 1080px` (most pages), `wide 1320px` (home grid).
- Generous margins. Editorial feel comes from **whitespace**, not from decoration.
- RTL by default — flip paddings, use logical properties (`margin-inline-start`).

### Backgrounds & surfaces
- Pages: solid `parchment-50`. **Never gradients on backgrounds.**
- Section dividers: full-bleed photography or a calm flat color block (oasis green for "calm" sections, ink-900 for "premium / featured" sections).
- Optional **subtle paper-texture overlay** at very low opacity (~3–5%) for hero blocks, never on cards or body.
- Cards: white surface, hairline border `1px var(--border-subtle)`, soft shadow `--shadow-xs`. **No drop shadows on imagery cards** — let the photography breathe; use border only.

### Imagery
- **Editorial photography** with warm, slightly desaturated treatment (think *Cereal* / *Kinfolk* / *Brownbook*). Golden-hour, natural light, occasional film grain at low opacity.
- **Mecca-rooted subjects**: dates, coffee, mountains, alleys, craft hands, children, horses, calligraphy. **Never** generic stock or AI-glossy.
- Photo treatment: 5% warm overlay (parchment tone) to unify a feed; never heavy filters.
- Pair photos with **Arabic typographic overlays** — large Amiri/Noto Naskh set in saffron or parchment-50, off-grid, occasionally rotated 0–4°. Type and photo are equal partners.

### Borders & rules
- Hairline rules `1px rgba(ink, 0.12)` for editorial dividers.
- Card borders: `1px parchment-200`.
- **Avoid heavy borders.** This isn't a UI library, it's an editorial layout.

### Corners
- Mostly **square or 2–4px**. Editorial sharpness.
- Cards: 4px.
- Pills/tags: full pill `999px` (these are the only round things).
- Avatars/circles: `999px`.
- **No 12–16px rounded "soft modern" corners.** Too SaaS.

### Shadows
- All shadows are **warm-tinted** (use `rgba(45, 38, 32, …)`), never neutral gray.
- Hierarchy: `xs` for cards at rest, `sm` on hover, `md` for popovers, `lg` for modals.
- **No glow shadows.** No colored shadows.

### Animation
- **Restrained.** Easings: `cubic-bezier(0.2, 0.7, 0.2, 1)` for most things (a soft out-curve, no bounce).
- Durations: `140ms` micro-interactions, `220ms` standard, `420ms` page-level transitions.
- Hover/press states fade — **no scale-up bounces.** No rotation on hover. No parallax.
- Page enter: optional 12px fade-up on hero copy, never on body.

### Hover & press states
- **Hover**: slight darkening (e.g. `terracotta-500 → terracotta-600`), text underline appears on links (offset 2px). On cards: shadow steps up `xs → sm`, image saturation +5%.
- **Press**: deeper color (`terracotta-700`), no scale-down. Buttons keep their footprint.
- **Focus**: 2px terracotta outline, 2px offset. Never remove focus rings.

### Transparency & blur
- Used **only** for: sticky header backdrop (`rgba(parchment-50, 0.85)` + `backdrop-filter: blur(12px)`), modal scrim (`rgba(ink-900, 0.5)`).
- Otherwise opaque. No glassmorphism on cards.

### Layout rules
- **Sticky header**: yes, with subtle backdrop-blur.
- **Fixed CTA bar on mobile** for business detail pages ("اتصال" / "زيارة الموقع").
- **Anchor everything to the 8px grid.**
- **Asymmetric editorial moments are encouraged**: the hero can break the grid with an oversized type slab over a photo. Listing pages stay strict.

### "Card" anatomy (universal)
- White surface, 4px radius, 1px parchment-200 border, `--shadow-xs` at rest.
- Image: 4:3 or 3:2, no inner radius.
- Eyebrow (uppercase Latin or small spaced Arabic) → Title (Amiri H4) → Cutline (Noto Naskh body-sm) → meta row (UI font, ink-700).
- Hover: shadow → `sm`, image slightly more saturated.

---

## Iconography

- **Library**: **Lucide** via CDN — `https://unpkg.com/lucide@latest`.
- **Why**: even 1.5px stroke, large set, rounded line-joins; visually compatible with the warm editorial aesthetic. **This is a substitution** — no in-house set was provided.
- **Default size**: 20×20px in body, 16×16px in dense lists, 24×24 in feature cards. Stroke `currentColor`.
- **Color**: inherits text color. We do **not** color icons in brand red except for active filter pills.
- **No emoji** anywhere in the product or marketing.
- **No unicode glyph icons** (★, ✓, etc.) — always Lucide.
- For RTL flip: arrow icons (`arrow-left`, `arrow-right`, `chevron-*`) are mirrored via `transform: scaleX(-1)` automatically when inside `[dir="rtl"]`.
- Specific icons we use frequently: `map-pin`, `clock`, `calendar`, `phone`, `instagram`, `share-2`, `bookmark`, `arrow-left`, `chevron-down`, `coffee`, `mountain`, `sparkles`, `users`, `compass`.

---

## Layouts (high level)
- **Home / discovery feed**: hero with editorial type slab over photo → category rail → "حدث اليوم" featured card → mixed feed (events + places).
- **Category page**: filter rail (sticky) + 3-column card grid on desktop, 1-column on mobile.
- **Business detail**: hero photo, sticky CTA bar, description, hours, social links, similar places.
- **Event detail**: time-bound banner, date/time chip, location, organizer, share.

See `ui_kits/web/` for the working version.

---

## Caveats / open questions
1. **Font locked: Tajawal** (300/400/500/700/900) for the entire system; Amiri italic kept as a pull-quote accent only.
2. **Logo locked: Option B** — stacked editorial, Tajawal Black, twin orange rules with no center dot.
3. **Imagery** — All photography in this kit is placeholder (warm gradient blocks). Replace with real Mecca-region editorial shoots when references are ready.
4. **Categories** — مطلات added; rail now shows 16 categories including مطاعم وأكلات, عائلات وأطفال, تسوّق وأسواق, رحلات وعمرة, صالات رياضية, مكتبات ومجالس. Keep sending more — the rail is extensible.
5. **Icons** — Lucide is a substitution. If you want a custom hand-drawn or culturally-rooted icon set, we'd commission that separately.
