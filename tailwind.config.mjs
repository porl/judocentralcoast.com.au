/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0071ce',
        secondary: '#ebaa00',
        'bg-dark': colors.neutral[900],
        'bg-light': colors.neutral[200],
      },
    },
  },
  plugins: [],
}
