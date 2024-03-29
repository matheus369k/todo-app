/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'darkMode-bg': 'hsl(235, 21%, 11%)',
        'darkMode-container': 'hsl(235, 24%, 19%)',
        'lightMode-bg': 'hsl(0, 0%, 98%)',
        'lightMode-container': 'hsl(236, 33%, 92%)',
        'gradientColor-btn-from': 'hsl(192, 100%, 67%)',
        'gradientColor-btn-to': ' hsl(280, 87%, 65%)'
      },
      width: {
        '600': '600px',
      },
      borderWidth: {
        '1': '1px',
      },
      fontFamily: {
        'Josefin': ['Josefin', 'sans-serif'] 
      },
      boxShadow: {
        'spread': '4px 4px 10px 0'
      },
      boxShadowColor: {
        'dark-opacity': 'hsl(235, 24%, 19%, .4)'
      }
    },
  },
  plugins: [],
}