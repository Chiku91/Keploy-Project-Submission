/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ REQUIRED
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
