/**
 * Photo slots. Leave `src` empty ('') to fall back to the built-in illustration.
 * Files live in /public/images/ — see docs/ASSETS.md for sources and permissions.
 */
export const photos = {
  /** Hero, portrait 4:5. Storefront at night (Google Maps cover photo; people blurred). */
  hero: {
    src: '/images/storefront.webp',
    srcSm: '/images/storefront-sm.webp',
    alt: 'La devanture de Mets-toi bien la nuit : enseigne lumineuse « Mets-toi bien ! » et grandes baies vitrées éclairées sur la salle',
  },
  /** "Le lieu" section, landscape. Leave empty to show the street plan. */
  interior: { src: '', srcSm: '', alt: '' },
};
