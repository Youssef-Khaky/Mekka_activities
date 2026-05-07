# Content Schema — فعاليات مكة

This document defines the **shape** of every record that powers the site.
Use it as a Google Sheet header row, an Airtable schema, or a JSON contract.
Two record types: **Place** (cafe / lookout / trail / shop / studio) and **Event** (one-off or recurring).

---

## 1. Place

Anywhere a person can go and stay (cafe, trail, lookout, mosque, market, gym, library).

| field | type | required | notes / examples |
|---|---|---|---|
| `id` | slug | ✅ | url-safe, e.g. `mqha-al-bann` |
| `name_ar` | string | ✅ | `مقهى البَنّ` |
| `name_en` | string |  | `Al-Bann Coffee` (used for SEO + EN toggle) |
| `category` | enum | ✅ | one of: `outdoors` / `skills-craft` / `food-coffee` / `heritage` / `family-life` |
| `subcategory` | string | ✅ | matches `subs` list, e.g. `قهوة مختصة` |
| `tagline_ar` | string | ✅ | one-line hook, ≤ 80 chars |
| `description_ar` | text | ✅ | 1–3 short paragraphs, editorial tone |
| `cover_photo` | image | ✅ | 4:3, ≥ 1600×1200, golden-hour preferred |
| `gallery` | image[] |  | up to 8 photos |
| `district` | string | ✅ | `العزيزية` / `أم القرى` / `الششة` / `الزاهر` … |
| `coords` | `{lat, lng}` |  | for map view |
| `address_ar` | string |  | full street address |
| `hours` | object |  | `{ sat: "9:00-23:00", sun: "...", ... }` or `"open-24h"` or `"by-appointment"` |
| `season` | string |  | e.g. `يفضّل الزيارة في الشتاء` |
| `price_band` | enum |  | `free` / `$` / `$$` / `$$$` |
| `family_friendly` | bool |  | for filter |
| `kid_age_min` | int |  | for kids activities |
| `accessibility` | string[] |  | tags: `wheelchair` / `prayer-room` / `parking` |
| `instagram` | handle |  | `@al.bann` (no URL — we render the link) |
| `whatsapp` | phone |  | E.164, e.g. `+966500000000` |
| `phone` | phone |  | |
| `website` | url |  | |
| `tags` | string[] |  | freeform, e.g. `["نباتي", "هادئ", "واي فاي"]` |
| `featured` | bool |  | promotes to hero / featured slot |
| `submitted_by` | string |  | for community submissions |
| `verified` | bool |  | editorial review passed |
| `created_at` | date | ✅ | |
| `updated_at` | date | ✅ | |

---

## 2. Event

Time-bound happening that may occur **at** a Place.

| field | type | required | notes |
|---|---|---|---|
| `id` | slug | ✅ | |
| `title_ar` | string | ✅ | `أمسية شعرية في مقهى البَنّ` |
| `title_en` | string |  | |
| `category` | enum | ✅ | always `events` (subcategory differentiates) |
| `subcategory` | string | ✅ | `أمسيات شعرية` / `موسيقى وعود` / `أسواق موسمية` / … |
| `description_ar` | text | ✅ | what happens, who it's for |
| `cover_photo` | image | ✅ | |
| `place_id` | slug FK |  | links to a Place if held at one |
| `venue_text` | string |  | if no Place record (one-off venue) |
| `start_at` | datetime | ✅ | ISO, e.g. `2026-05-20T16:30:00+03:00` |
| `end_at` | datetime |  | omit for unknown duration |
| `recurrence` | enum |  | `none` / `weekly` / `monthly` / `seasonal` |
| `recurrence_note_ar` | string |  | `كل جمعة طوال شوّال` |
| `price_sar` | int / `"free"` |  | |
| `capacity` | int |  | |
| `booking_url` | url |  | |
| `organizer_name_ar` | string | ✅ | `أوتار شوّال` |
| `organizer_instagram` | handle |  | |
| `tags` | string[] |  | |
| `featured` | bool |  | |
| `verified` | bool |  | |

---

## 3. Category (reference table — already locked)

| id | ar | en | subs |
|---|---|---|---|
| `outdoors` | استكشاف | Outdoors | المسارات، المطلات، ركوب الخيل، الجبال والوديان، رحلات يوم |
| `skills-craft` | تجارب وحرف | Skills & Craft | نجارة، حدادة وفصالة، فخار وخزف، روبوتات للأطفال، فنون الخط، تصوير |
| `food-coffee` | طعام ومقاهٍ | Food & Coffee | قهوة مختصة، مطاعم تراثية، حلويات، فطور، سفرة عائلية، مأكولات شعبية |
| `heritage` | تراث ومواقع | Heritage | مواقع تاريخية، مساجد قديمة، متاحف، جولات مرشدة، العمرة والمناسك |
| `events` | فعاليات | Events | أمسيات شعرية، موسيقى وعود، أسواق موسمية، مهرجانات، محاضرات، معارض |
| `family-life` | عائلة وحياة | Family & Life | أنشطة الأطفال، صالات رياضية، مكتبات ومجالس، حدائق، تسوّق |

---

## 4. Editorial tone for content writers

- **Voice**: warm, curated, calm. Like a knowledgeable local friend, not a tourism brochure.
- **Length**: tagline ≤ 80 chars; description 60–180 words.
- **No marketing fluff**: avoid "أفضل"، "الأول من نوعه"، "تجربة لا تُنسى". Show, don't claim.
- **Specifics win**: "قهوة يمنية مُحمَّصة في الموقع" beats "قهوة مميزة".
- **Numbers**: Arabic-Indic (٤:٣٠ م، ٢٢ كم) — not Western digits — for editorial copy.
- **Honorifics**: keep place names in their natural form; don't translate proper nouns.

---

## 5. Suggested first batch (to seed launch)

To make the site feel alive on day one, aim for:
- **30 Places** spread across all 6 categories (5 each min)
- **10 Events** mixing one-off and recurring
- **20 cover photos minimum** at usable resolution
- **10 verified** records with full Instagram + contact info

That's enough to populate the home feed, all 6 category landing pages, and ~5 well-stocked subcategories.
