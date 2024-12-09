/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit : ["Outfit, sans-serif"],
        inter : ["Inter, sans-serif"]
      },
      colors:{
        darkBlue : '#000816',
        lightBlue : '#003BA4'
      }
    },
  },
  plugins: [],
}

