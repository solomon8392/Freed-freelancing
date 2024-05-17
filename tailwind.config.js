/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas-neue)"],
        sans: ['Montserrat'],
      },
    },
  },
  plugins: [],
}