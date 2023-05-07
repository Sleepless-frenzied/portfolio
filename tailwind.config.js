/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors:{
        'light': '#f7f9fb',
        'lightNav':"#fdfdfe",
        'lightTxt':'#000000',
        'lightButton':'#fdfdfe',
        'lightModule':'#fdfdfe',
        'lightDivi':'#000000',
        'lightHR':'#413b3b',



        'dark':'#282a2e',
        'darkNav':"#070707",
        'darkTxt':'#ffffff',
        'darkButton':'#0048ff',
        'darkModule':'#313338',
        'darkDivi':'#398bff',
        'darkHR':'#1677ff'



      },
    },
  },
  plugins: [],
}

