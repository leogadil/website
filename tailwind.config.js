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
      'th-light-light': '#E9D7D0',
      'accent-1': '#FD5D5D',
      'accent-2': '#845BB3',
      'accent-2-light': '#9d7cc2',
      'main-accent': '#D85C27',
      'main-accent-hover': '#e07d52',
      'gray-1': '#a7a19b',
      'gray-2': '#484542',
    },
    extend: {
      fontFamily: {
        'mplus': ['"M PLUS Rounded 1c"', "sans-serif"],
        'caveat': ['"Caveat"', "cursive"],
       },
    },
  },
  plugins: [],
}
