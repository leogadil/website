module.exports = {
  darkMode: 'class',
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
      'main-accent': '#D85C27',
      'gray-1': '#808080',
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
