/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      graff : ['Calligraffitti', 'cursive'],
    },
    extend: {
      position :{
        "box-hide" :"absolute",
      },
    },
  },
  plugins: [],
}
