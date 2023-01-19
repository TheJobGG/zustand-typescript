/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        emoji: {
          "0%": {transform: 'rotate(0.0deg)'},
          "50%": {transform: 'rotate(25deg)'},
          "100%": {transform: 'rotate(0.0deg)'}
        }
      },
      animation: {
        emoji: 'emoji 250ms ease'
      }
    },
  },
  plugins: [],
}