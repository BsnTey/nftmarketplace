/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: {
          base: '#2B2B2B',
          second: '#3B3B3B',
          action: '#A259FF',
        },
      }

    },
  },
  plugins: [],
}

