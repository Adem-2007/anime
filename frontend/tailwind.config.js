/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      fontFamily: {
        abril: ["'Abril Fatface'", "cursive"],
        unifraktur: ["'UnifrakturMaguntia'", "cursive"],
        geostar: ["'Geostar'", "sans-serif"],
        cinzel: ["'Cinzel Decorative'", "serif"],
        lobster: ["'Lobster'", "cursive"],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        'rubik-distressed': ["Rubik Distressed", "cursive"],
        mystery: ["'Mystery Quest'", "cursive"],
      },
    
    },
  },
  plugins: [],
}