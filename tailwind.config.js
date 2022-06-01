module.exports = {
  content: [
    "docs/*.md",
    "docs/.vitepress/theme/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      screens: {
        'navbar': '720px',
        '32xl': '1536px',
      }
    },
  },
  plugins: [],
}
