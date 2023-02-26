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
      lato: ["Lato", "sans-serif"],
    },
    colors: {
      'white': '#ffffff',
      'grey': '#e5e7eb',
      'dark_green': '#4B4D0B',
      'green': '#00C897',
      'body': '#0b9265',
      'orange': '#FFD365',
      'yellow': '#FDFFA9',
      'emerald': {
        500: '#019267',
      },
      'blue': '#93c5fd',
      'red': '#ef4444',
      'dark_red': '#CD1515',
    },
    extend: {
      backgroundImage: {
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
        },
        scrollx: {
          '0%': { transform: "translateX(0)"},
          '100%': { transform: "translateX(calc(-100% - 30px))"}
        }
      },
      animation: {
        full: 'full 1s linear',
        scrollx: 'scrollx 10s linear infinite'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
