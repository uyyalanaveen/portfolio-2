/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
        'black-ops-one': ['Black Ops One', 'cursive'],
      }
    },
  },
  plugins: [],
}
