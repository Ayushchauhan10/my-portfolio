/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg:'rgba(15,23,42,1)',
        lightBg:'rgba(221,225,231,1)',
        lightTheme:'rgba(245,102,146,1)',
        darkTheme:'rgba(56,189,249,1)',
        greyText:'#424242'
      }
    },
  },
  plugins: [],
}