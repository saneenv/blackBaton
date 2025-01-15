/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ['"DM Sans"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" }, // Start immediately visible
          "100%": { transform: "translateX(-100%)" }, // Move completely out of view
        },
      },
    },
  },
  plugins: [],
}

