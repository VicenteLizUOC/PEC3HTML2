/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,scss,css}",
  ],
  theme: {
    extend: {
      colors: {
        'uoc-corporate': '#e84615',
        'uoc-masterbrand': '#eed8d5',
        'uoc-bg': '#faf5f4',
        'uoc-black-bg': '#181818',
        'primary': '#d9534f',
        'body-bg': '#f9f9f9',
      },
      fontFamily: {
        'sans': ['Open Sans', '-apple-system', 'sans-serif'],
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
      screens: {
        'uoc-mq': '420px',
      }
    },
  },
  plugins: [],
}