/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        primary: "#12495A",
        secondary: "#BEFFF7",
        accent: "#205464",
      },
    },
  },
  plugins: [],
};
