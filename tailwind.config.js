/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: {
          base: "#2B2B2B",
          second: "#3B3B3B",
          action: "#A259FF",
        },
      },
      colors: {
        "regal-violet": "#A259FF",
        greyDark: "#858584"
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      fontSize: {
        "2xl": "1.375rem",
        "3xl": "1.75rem",
        "3.5xl": "1.5rem",
        "4xl": "2.375rem",
        "5xl": "3.187rem",
        "6xl": [
          "4.187rem",
          {
            fontWeight: "600",
          },
        ],
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        space: ["Space Mono", "monospace"],
        workSans: ["Work Sans", "sans-serif"],
      },
      width: {
        "fit-content": "fit-content",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
