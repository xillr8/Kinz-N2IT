/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandTeal: "#00BFC2",
      },
      height: {
        hero: "70vh", // Hero section height (10% taller than before)
      },
    },
  },
  plugins: [],
}



