import type { APIRoute } from 'astro';

export const get: APIRoute = ({ site }) => {
  const sitemap = new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site);
  return { body: `User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n` };
};
