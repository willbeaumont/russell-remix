/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: { colors: { about: { link: "#0284c7", text: "#333333" } } },
  },
  plugins: [],
};
