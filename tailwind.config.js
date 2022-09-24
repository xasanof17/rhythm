/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
      },
      colors: {
        white: "#fff",
        lightwhite: "#EEEEEE",
        black: "#121212",
        lightblack: "#262626",
        brown: "#FF6428",
        gray: "#B2B2B2",
        darkgray: "#666666",
      },
    },
  },
  plugins: [],
}