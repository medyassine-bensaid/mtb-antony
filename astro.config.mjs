import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Main public URL (Vercel). The GitHub Pages mirror overrides SITE_URL / BASE_PATH in its workflow.
const site = process.env.SITE_URL || 'https://metstoibien.vercel.app';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: { inlineStylesheets: 'auto' },
  // Astro 2's HTML compression drops spaces between expressions ({a} {b}); keep it off.
  compressHTML: false,
});
