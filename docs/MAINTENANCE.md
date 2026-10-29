# Maintenance

Everything that changes routinely lives in `src/data/`. No layout code needs editing.

| I want to… | Edit | Field |
|---|---|---|
| Change a price | `src/data/menu.ts` | `price` in **cents** (11,90 € → `1190`), and `priceNote` for the menu price |
| Add / remove a dish | `src/data/menu.ts` | add or remove an object in the category's `items` |
| Change the dishes featured on the homepage | `src/components/Featured.astro` | the `spotlight` list (keep each `kicker` text truthful) |
| Change opening hours | `src/data/restaurant.ts` | `hours` (`'24:00'` = midnight, `[]` = closed that day) |
| Change Instagram / add TikTok | `src/data/restaurant.ts` | `links.instagram`, `links.instagramHandle`, `links.tiktok` |
| Update the Google rating | `src/data/restaurant.ts` | `rating.value`, `rating.count` **and** `rating.checkedOn` |
| Add a photo | see `docs/ASSETS.md` → "Re-processing photos" | |
| Update the date prices were checked | `src/data/menu.ts` | `menuMeta.checkedOn` |

After any change:

```bash
npm run check
npm run build
npm run preview
```

`build` must end with "Complete!". Then commit and push to `main`: GitHub Actions rebuilds and republishes the site in about 2 minutes (see the *Actions* tab).

If the cheapest smash burger price changes, re-run `python tools/make-images.py` to refresh the share image.

## Monthly routine (10 minutes)

- [ ] Compare prices on Uber Eats, Deliveroo and at the counter.
- [ ] Update the Google rating snapshot and its date.
- [ ] Check public-holiday hours (Christmas, 1 January, 1 May…).
- [ ] Click every external link once.

## Technical notes

- **Stack:** Astro 2.10 (static output), Tailwind CSS 3.3, TypeScript, about 4 KB of vanilla JS. Chosen because the dev machine runs Node 16; Astro outputs plain HTML, which suits local SEO and slow phones.
- **Base path:** the site lives under `/mtb-antony/` on GitHub Pages. Always build internal links with `url()` from `src/lib/url.ts` — never a bare `"/..."`.
- **Upgrade path:** on Node 20+, upgrade to the latest Astro (`npx @astrojs/upgrade`), re-enable `compressHTML` (off because Astro 2 drops the space between `{a} {b}` expressions), and remove the `sitemap` override in `package.json`.
- **Motion:** CSS keyframes + IntersectionObserver in `src/scripts/site.ts`, no animation library — the effects are simple enough that a library would only add weight. All motion is disabled under `prefers-reduced-motion`, and all content is visible without JavaScript.
- **Privacy:** no cookies, no analytics, self-hosted fonts, map loads only on click → no consent banner needed. If analytics are added later, use a cookieless tool (Plausible, Netlify Analytics) or add a consent banner.
- **No English version:** the audience is local and French-speaking; not worth the upkeep today.
