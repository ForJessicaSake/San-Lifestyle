/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: "#5446D0",
          secondary: "#2f35d4",
          gray: "#778ca3",
          ash: "#bfc7d3",
      }, 
    
      fontFamily: {
        fontsp: ["Poppins", "sans-serif"],
        font: ['Montserrat', 'sans-serif'],
    }, },
  plugins: [],
}}