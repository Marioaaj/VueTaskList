/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#504B43',
        foreground: '#A7C2CC',
        comment: '#676e95',
        accent: '#A7C2CC',
        redish: '#ff5370',
        orangish: '#f78c6c',
        yellowish: '#ffcb6b',
        greenish: '#c3e88d',
        bluish: '#82aaff',
        purplish: '#c792ea',
      },
    },
  },
  plugins: [],
}
