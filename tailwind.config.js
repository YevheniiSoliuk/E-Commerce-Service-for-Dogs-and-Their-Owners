/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/App.tsx",
    "./src/**/index.tsx",
    "./public/index.html",
    "./src/components/**/*.{tsx, js, html, jsx}",
    "./src/pages/**/*.{tsx, js, html, jsx}",
  ],
  theme: {
    fontFamily: {
      lemon: ["Lemon", "sans-serif"],
    },
    colors: {
      'white': '#ffffff',
      'grey': '#e5e7eb',
      'green': '#4B4D0B',
      'dark_green': '#00C897',
      'orange': '#FFD365',
      'yellow': '#FDFFA9',
      'emerald': 
      {
        500: '#019267',
      },
      'blue': '#93c5fd',
      'red': '#ef4444',
      'dark_red': '#CD1515',
    },
    extend: {
      backgroundImage:
      {
        'row-icon': "#4B4D0B url('../../../assets/icons/arrow.svg') no-repeat left",
      },
      rotate: {
        '45': '45deg',
        '225': '225deg',
      },
      keyframes: {
        full: {
          '0%': { width: '0%' },
          '100%': { width: '75%' },
        }
      },
      animation: {
        full: 'full 1s linear',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
