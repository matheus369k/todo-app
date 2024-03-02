/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'darkMode-bg': 'hsl(235, 21%, 11%)',
        'darkMode-container': 'hsl(235, 24%, 19%)',
        'gradientColor-btn-from': 'hsl(192, 100%, 67%)',
        'gradientColor-btn-to': ' hsl(280, 87%, 65%)'
      },
      width: {
        '500': '500px',
      },
      borderWidth: {
        '1': '1px',
      },
      fontFamily: {
        'Josefin': ['Josefin', 'sans-serif'] 
      }
    },
  },
  plugins: [],
}