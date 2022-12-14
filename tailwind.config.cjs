/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  plugins: [],
  theme: {
    colors: {
      black: '#000',
      cyan: {
        500: '#81d8f7',
        300: '#9be1fb',
      },
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },
      transparent: 'transparent',
      white: '#fff'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32,
    },
  },
}
