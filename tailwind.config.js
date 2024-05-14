/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "rgb(44,62,80)",
        hamburger: "#232B34",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "2.2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
