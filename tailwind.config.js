module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      color1: '#f2f5f2',
      color2: '#fee9e9',
      color3: '#e6f3f3',
    }),
    extend: {
      fontFamily: {
        primary: "'Bebas Neue', cursive",
        secondary: "'Ubuntu', sans-serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
