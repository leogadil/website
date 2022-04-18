module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'th-dark': '#18191A',
      'th-light-dark': '#242526',
      'th-light': '#EFE6DD',
      'accent-1': '#FD5D5D',
      'accent-2': '#39AEA9',
    },
    extend: {
      fontFamily: {
        'mplus': ['"M PLUS Rounded 1c"', "sans-serif"],
       },
    },
  },
  plugins: [],
}
