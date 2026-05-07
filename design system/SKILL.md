---
name: faaliyat-makkah-design
description: Use this skill to generate well-branded interfaces and assets for فعاليات مكة (Faaliyat Makkah) — a refined, classical-Arabic, warm-artisan editorial brand for discovering activities, places, and events in Mecca. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files (`colors_and_type.css`, `assets/`, `preview/`, `ui_kits/web/`).

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out of this folder and create static HTML files for the user to view. Always:
- Set `dir="rtl"` on `<html>` and prefer Arabic copy in فصحى راقية register
- Load fonts (Amiri, Noto Naskh Arabic, IBM Plex Sans Arabic, Tajawal) from Google Fonts
- Pull design tokens from `colors_and_type.css` rather than reinventing
- Use Lucide icons via CDN; never emoji
- Use the warm parchment background (`#faf6ee`), not pure white pages
- Cards: 4px radius, hairline borders, soft warm shadows — never glow or colored shadows
- Pair editorial photography with Arabic typographic overlays where imagery is central

If working on production code, copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about scope/screens/tone, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
