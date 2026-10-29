import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Public URL. Override with SITE_URL / BASE_PATH (e.g. a custom domain → BASE_PATH=/).
const site = process.env.SITE_URL || 'https://medyassine-bensaid.github.io';
const base = process.env.BASE_PATH ?? '/mtb-antony';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: { inlineStylesheets: 'auto' },
  // Astro 2's HTML compression drops spaces between expressions ({a} {b}); keep it off.
  compressHTML: false,
});
