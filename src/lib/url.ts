/** Prefixes an internal path with the deploy base (e.g. "/mtb-antony" on GitHub Pages). */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}
