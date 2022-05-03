module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'th-dark': '#18191A',
      'th-light-dark': '#212324',
      'th-light': '#EFE6DD',
      'th-light-light': '#e2d2c2',
      'accent-1': '#FD5D5D',
      'accent-2': '#845BB3',
      'accent-2-half': '#845BB340',
      'accent-2-half-full': '#71499e',
      'accent-2-light': '#9d7cc2',
      'main-accent': '#D85C27',
      'main-accent-half': '#D85C2740',
      'main-accent-half-full': '#b74e21',
      'main-accent-hover': '#e07d52',
      'gray-1': '#a7a19b',
      'gray-2': '#484542',
      'special-1': '#86C232',
      'special-2': '#79af2d',
      'white-1': '#ffffff',
    },
    extend: {
      fontFamily: {
        'mplus': ['"M PLUS Rounded 1c"', "sans-serif"],
        'caveat': ['"Caveat"', "cursive"],
        'kaushan': ['"Kaushan Script"', "cursive"],
        'roboto': ['"Roboto"', "sans-serif"],
       },
    },
  },
  plugins: [],
}
