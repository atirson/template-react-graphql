/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      main: '#00ADB5',
      light: '#EEEEEE',

      gray: {
        100: '#F5F5F5',
        200: '#E8E8E8',
        300: '#D8D8D8',
        400: '#A8A8A8',
        500: '#959DA9',
        600: '#393E46',
        700: '#222831',
        800: '#1D222A',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [require("daisyui")],
}
