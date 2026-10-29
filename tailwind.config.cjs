/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,ts,js,md}'],
  theme: {
    extend: {
      colors: {
        coal: { DEFAULT: '#14110E', 900: '#0E0C0A', 800: '#1C1814', 700: '#27211B', 600: '#3A3129' },
        cream: { DEFAULT: '#F4EBDD', 200: '#E8DCC8', 400: '#B9AC98', 600: '#857A6B' },
        // MTB orange, sampled from the restaurant's logo and promo images
        amber: { DEFAULT: '#F7931E', 300: '#FFB25C', 600: '#D9730A' },
        mustard: { DEFAULT: '#E0A400', 300: '#F2C744' },
        ketchup: { DEFAULT: '#D9600A', 600: '#B54E06' },
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Bricolage Grotesque Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: { tightest: '-0.03em' },
      maxWidth: { site: '84rem' },
    },
  },
  plugins: [],
};
