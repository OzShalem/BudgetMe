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
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        backgroundImage: {
          'custom-conic': 'conic-gradient(from 90deg, #ecfdf5, #86efac, #4ade80, #16a34a)',
        },
      },
      plugins: [],
    }
  }
}

