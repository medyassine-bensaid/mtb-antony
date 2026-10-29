# MTB — Research notes

Research date: **29 October 2026**. Every fact on the site comes from this file.

> **Owner confirmation (29/10/2026):** the owner confirmed the published information (hours, prices, services, phone ordering) and authorised the use of the restaurant's photos found on Google Maps and online.

Legend: ✅ verified (2+ sources or an official source) · 🟡 single source / may be outdated · ❓ needs owner confirmation

---

## 1. Identity

| Fact | Value | Status | Sources |
|---|---|---|---|
| Trading name | METS-TOI BIEN (MTB) | ✅ | Google Maps, SIRENE |
| Legal entity | METS TOI BIEN, SAS, acronym MTB | ✅ | recherche-entreprises.api.gouv.fr |
| SIREN / SIRET | 988 262 119 / 988 262 119 00015 | ✅ | SIRENE, Uber Eats legal footer |
| Registered | 1 July 2025, one establishment, active | ✅ | SIRENE |
| NAF | 56.10C (quick-service restaurant) | ✅ | SIRENE, PagesJaunes |
| President | Muhammad Ghias (since 20/06/2025) — publication director | ✅ | SIRENE, Pappers |
| Share capital | 1 000 € | ✅ | Pappers |
| VAT | FR90 988 262 119 | ✅ | Pappers (matches the SIREN key) |
| RCS | Nanterre, 988 262 119 (registered 20/06/2025) | ✅ | Pappers |
| Contact email | Not found | ❓ | Add to `restaurant.ts → legal.email` when available |
| Address | 209 avenue de la Division Leclerc, 92160 Antony | ✅ | Google Maps, PagesJaunes, Mappy, Uber Eats, Deliveroo, SIRENE |
| GPS | 48.7380451, 2.3022064 (Plus code P8Q2+6V) | ✅ | Google Maps |
| Phone | 01 46 15 38 92 | ✅ | Google Maps, PagesJaunes (restaurants-de-france masks the same number) |
| Merchant mobile on Uber Eats | Present in the platform's legal footer | — | **Not published on the site** (may be personal) |
| Website | None found | ✅ | Google Maps shows "Ajouter un site Web" |
| Instagram | @metstoibien_france (≈79 followers, 38 posts on 29/10) | ✅ | Handle printed on the storefront sign; account checked |
| TikTok / Facebook | None found | 🟡 | Web searches |
| Logo | Orange disc, white "MTB" letters, mustard background | ✅ | Instagram profile picture, lit sign by the door |

Similar names to avoid confusing: "Smatch", "Gimmy", "Oh My Cheese" (other smash-burger brands in Antony, 210 rue Adolphe Pajeaud) — not related.

## 2. Hours

| Source | Hours |
|---|---|
| Google Maps (29/10/2026) | Every day 11:30 – 00:00 ("may vary" around Toussaint) |
| PagesJaunes | Mon–Thu & Sat–Sun 11:30 – 00:00, **Friday 15:00 – 00:00** |
| Mappy (data from PagesJaunes) | Same as PagesJaunes |
| Uber Eats / Deliveroo | Delivery window 11:30 – 23:30 |

Site uses the Google hours (every day 11:30–midnight), **confirmed by the owner**. PagesJaunes' Friday 15:00 is outdated — the owner should correct the PagesJaunes listing.

## 3. Services & ordering

| Fact | Status | Source |
|---|---|---|
| Dine-in, takeaway, no-contact delivery | ✅ | Google Maps (screenshot + live), restaurants-de-france |
| Uber Eats store active | ✅ | `ubereats.com/fr/store/mets-toi-bien/eeh8TVrrQNyxJ8iqht4NmQ` — 4.6 (71) on 29/10 |
| Deliveroo store active | ✅ | `deliveroo.fr/fr/menu/paris/antony-rabats/mets-toi-bien` — 4.1 (14) on 29/10. Note: the longer slug `.../mets-toi-bien-209-avenue-de-la-division-leclerc` redirects to a generic page — don't use it. |
| Google "Commander" button | ✅ | Points to Uber Eats and Deliveroo (pickup) |
| Meal vouchers on Uber Eats | ✅ | Pluxee, UpDéjeuner, Bimpli, Swile, Ticket Restaurant® |
| Meal vouchers / cards in store | ❓ | Not found |
| Phone orders for takeaway | ✅ | Confirmed by the owner |
| Own delivery | ❓ | Not found — site only mentions platforms |

## 4. Menu

Source: Uber Eats store page and Deliveroo store page, read 29/10/2026. Names, descriptions and prices were **identical on both**. Full data in `src/data/menu.ts`.

- Categories: Riz crousty, Menu smash burger, Menu sandwichs, Smash burgers seuls, Sandwichs seuls, Menu enfant, Finger foods, Frites classiques, Frites twister, Desserts, Boissons.
- Price range: €4.00 (frites nature) – €15.90 (menus El Guzman / Le Mix Up).
- Uber Eats "most liked" ranking: 1. Crousty au choix, 2. Smash Classique menu, 3. Le Suprême menu → used for the "Incontournables" section, plus Le Triple MTB (carries the restaurant's name).
- Customer reviews mention: smash burger, bacon smash, tasty, tenders, riz crousty, chicken sandwich, tiramisu (one review: €3.50 in store vs €4.10 on Uber Eats → **in-store prices probably differ**).

Prices confirmed by the owner (29/10/2026).

❓ Still open:
1. ~~In-store prices~~ — confirmed.
2. Crousty bases and preparations offered ("au choix").
3. Drinks list and prices; tiramisu flavours; fruit coulis options.
4. Allergen information (legal requirement to make it available) — site says "on request at the counter".
5. Halal status of the meat — **not stated anywhere; the site makes no claim.** If confirmed with certification, add it.
6. "Sauce maison" and "pain maison" are the restaurant's own wording on the platforms — kept as-is.
7. Le Mix Up is only listed as a menu (15,90 €), no solo price.

## 5. Reputation

| Platform | Rating (29/10/2026) |
|---|---|
| Google | 4.8 / 5 — 198 reviews (181×5★, 8×4★, 2×3★, 0×2★, 7×1★ per restaurants-de-france mirror) |
| Uber Eats | 4.6 — 71 ratings |
| Deliveroo | 4.1 — 14 reviews |
| PagesJaunes | 5/5 — 1 review |

Recurring themes in Google reviews (Google's own topic chips + reading): smash burger (11 mentions), cashiers/staff welcome (9), "incroyable" (7), box; generous quantities; fast service. One critical review: tenders disappointing, food "bonne mais sans plus".

**Site policy:** the Google rating is shown with its date and a link; themes are paraphrased; no review is quoted and no reviewer is named. No `aggregateRating` in structured data (Google ignores/penalises self-served review markup for local businesses).

## 6. Competitors (Antony, delivery platforms)

Smatch / Gimmy / Oh My Cheese smash-burger brands (210 rue Adolphe Pajeaud), Tasty Crouspy, Joker Smash Burger, Poulette, G La Dalle, Point B, Crousty One Antony (rue du Midi, ~300 m). Typical smash menu €12–15; MTB's Smash Classique menu at €11.90 is at the low end — a real price argument, used on the site via "Smash dès 8,20 €".

## 7. Local SEO opportunities

Target queries: *smash burger Antony*, *riz crousty Antony*, *tasty crousty Antony*, *fast food Antony ouvert tard*, *restaurant ouvert dimanche Antony*, *burger Antony livraison*, *restaurant 92160*, *Mets toi bien Antony*.

Done on the site: Restaurant + FastFoodRestaurant JSON-LD with full menu, hours, geo, phone; unique title/description; one H1; French `lang`; sitemap; Open Graph image; NAP (name/address/phone) identical everywhere.

To do by the owner (biggest wins):
1. Add the website URL to the Google Business Profile ("Ajouter un site Web").
2. Claim the PagesJaunes listing and fix Friday hours.
3. Upload real photos to Google (85 user photos currently, quality unknown).
4. Reply to Google reviews.
5. Link the website from the Instagram bio.
