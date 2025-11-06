/* eslint-disable */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx, md, mdx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'serif'],
        spectral: ['Spectral', 'serif'],
        fraunces: ['Fraunces', 'serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
        ibmplex: ['IBM Plex Sans', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
