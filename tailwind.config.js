/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/App.tsx',
    './src/**/index.tsx',
    './public/index.html',
    './src/components/**/*.{tsx, js, html, jsx}',
    './src/pages/**/*.{tsx, js, html, jsx}'
  ],
  theme: {
    fontFamily: {
      lato: ['Lato', 'sans-serif']
    },
    colors: {
      white: '#ffffff',
      grey: '#e5e7eb',
      green: '#4B4D0B',
      dark_green: '#00C897',
      body: '#0b9265',
      orange: '#FFD365',
      yellow: '#FDFFA9',
      emerald: {
        500: '#019267'
      },
      blue: '#93c5fd',
      red: '#ef4444',
      dark_red: '#CD1515'
    },
    extend: {
      backgroundImage: {
        'row-icon':
          "#4B4D0B url('../../../assets/icons/arrow.svg') no-repeat left"
      },
      rotate: {
        45: '45deg',
        225: '225deg'
      },
      keyframes: {
        full: {
          '0%': { width: '0%' },
          '100%': { width: '75%' }
        },
        primary: {
          '0%': { left: '0%' },
          '100%': { left: '-200%' }
        },
        secondary: {
          '0%': { left: '200%' },
          '100%': { left: '0%' }
        }
      },
      animation: {
        full: 'full 1s linear',
        scrollx_primary: 'primary 30s linear infinite',
        scrollx_secondary: 'secondary 30s linear infinite'
      }
    }
  },
  plugins: [require('tailwindcss'), require('autoprefixer')]
};
