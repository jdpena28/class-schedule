module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
