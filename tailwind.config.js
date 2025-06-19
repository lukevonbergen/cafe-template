/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',           // Include config folder for siteConfig.js
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(red|green|blue|yellow|amber|rose|lime|orange|gray|slate|neutral|stone|purple|pink|teal|cyan|indigo|violet|fuchsia|emerald|sky|zinc|brown)-(\d{2,3})$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-playpen)', 'cursive'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
