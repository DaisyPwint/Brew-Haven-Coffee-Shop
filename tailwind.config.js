/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "Montserrat",
      secondary: "Poppins", 
    },
    extend: {
      colors:{
        primary: {
          100 : '#fb923c',
          200 : '#f97316',
          300: '#431407'
        },
        accent: '#f2f2f2'
      }
    },
  },
  plugins: [
  ],
}

