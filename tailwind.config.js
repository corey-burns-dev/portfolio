module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx, md, mdx}', './public/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        clash: ['Clash Display', 'serif'],
        ibmplex: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
