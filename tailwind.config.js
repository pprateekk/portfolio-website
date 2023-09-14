/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#ffffff",
      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        700: "#78716c",
      },
    },
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        sacramento: ["Sacramento", "cursive"],
        julius: ["Julius Sans One", "sans-serif"],
        playfair: ["Playfair", "serif"],
      },
    },
  },
  plugins: [],
};
