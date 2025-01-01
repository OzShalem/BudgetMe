/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'verylarge': '1900px', // Example: 1400px and above
        'verysmall': '300px', // Example: 1400px and above
      }
    },
  },
  plugins: [],
}

