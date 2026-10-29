# Deployment

| | URL | Role |
|---|---|---|
| **Main site** | https://metstoibien.vercel.app | Vercel (free Hobby plan), global CDN, canonical URL |
| Mirror | https://medyassine-bensaid.github.io/mtb-antony/ | GitHub Pages, marked `noindex` so Google only lists the main site |
| Code | https://github.com/medyassine-bensaid/mtb-antony | |

## How it deploys

Every push to `main` redeploys both automatically:
- **Vercel** builds via its GitHub app (settings in `vercel.json`, which also sets long cache headers on assets). Default config: `SITE_URL=https://metstoibien.vercel.app`, `BASE_PATH=/`.
- **GitHub Pages** builds via `.github/workflows/deploy.yml` with `BASE_PATH=/mtb-antony` and `PUBLIC_NOINDEX=1`.

To drop the mirror: delete the workflow file and set *Settings → Pages* to disabled.

## Local build

```bash
npm ci
npm run build      # uses base /mtb-antony by default
npm run preview    # http://localhost:4321/
```

## Moving to a custom domain (recommended later)

1. Buy the domain (e.g. `metstoibien-antony.fr`, about €10/year).
2. Vercel → project *metstoibien* → *Settings → Domains* → add it and create the DNS records Vercel shows. HTTPS is automatic.
3. Change the default `site` in `astro.config.mjs` to the new domain, push.
4. Put the new address on the Google Business Profile and the Instagram bio.

## After each deploy — checklist

- [ ] On a phone: *Appeler* opens the dialler with 01 46 15 38 92; *Itinéraire* opens Google Maps; Uber Eats, Deliveroo and Instagram open the right pages.
- [ ] https://search.google.com/test/rich-results → paste the URL → "Restaurant" detected.
- [ ] https://pagespeed.web.dev → mobile score.
- [ ] Google Search Console: add the property, submit `sitemap-index.xml`.
- [ ] Google Business Profile: add the website URL.
