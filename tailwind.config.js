/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#87CEEB',
        royalBlue: '#4169E1',
        goldenYellow: '#FFD700',
        kukuOrange: '#FFA500',
        kukuPurple: '#800080',
        kukuGreen: '#008000',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
