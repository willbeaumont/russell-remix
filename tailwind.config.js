/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: { colors: { about: { link: "#4B727C", text: "#333333" } } },
  },
  plugins: [],
};
