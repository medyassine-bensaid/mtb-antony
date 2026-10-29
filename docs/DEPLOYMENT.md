# Deployment

The site is hosted for free on **GitHub Pages**:

- Live URL: https://medyassine-bensaid.github.io/mtb-antony/
- Repository: https://github.com/medyassine-bensaid/mtb-antony

## How it deploys

`.github/workflows/deploy.yml` runs on every push to `main`: install → type check → build → publish `dist/` to Pages. The build gets `SITE_URL` and `BASE_PATH` from the repo name, so links, sitemap and canonical URLs are correct automatically.

One-time setting (already done): *Settings → Pages → Build and deployment → Source: GitHub Actions*.

## Local build

```bash
npm ci
npm run build      # uses base /mtb-antony by default
npm run preview    # http://localhost:4321/mtb-antony/
```

## Moving to a custom domain (recommended later)

1. Buy the domain (e.g. `metstoibien-antony.fr`).
2. In the workflow, set `SITE_URL: https://www.<domain>` and `BASE_PATH: /`, and add a `public/CNAME` file containing `www.<domain>`.
3. *Settings → Pages → Custom domain* → enter it, then add the DNS records GitHub shows (CNAME `www` → `medyassine-bensaid.github.io`).
4. Tick *Enforce HTTPS* once the certificate is issued.
5. Update the website on the Google Business Profile.

Moving to Netlify, Cloudflare Pages or Vercel instead: build command `npm run build`, output `dist`, env `BASE_PATH=/` and `SITE_URL=https://<domain>`. Update the "Hébergement" block in `src/pages/mentions-legales.astro`.

## After each deploy — checklist

- [ ] On a phone: *Appeler* opens the dialler with 01 46 15 38 92; *Itinéraire* opens Google Maps; Uber Eats, Deliveroo and Instagram open the right pages.
- [ ] https://search.google.com/test/rich-results → paste the URL → "Restaurant" detected.
- [ ] https://pagespeed.web.dev → mobile score.
- [ ] Google Search Console: add the property, submit `sitemap-index.xml`.
- [ ] Google Business Profile: add the website URL.
