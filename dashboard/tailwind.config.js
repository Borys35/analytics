const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.pink,
        neutral: colors.slate,
        error: colors.red[500],
      },
      fontFamily: {
        sans: ["var(--font-source-sans-pro)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
