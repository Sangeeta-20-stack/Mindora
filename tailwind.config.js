/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#144d25",   // dark green
          DEFAULT: "#0f3a1b", // deeper green
        },
        surface: {
          light: "#f7f6d5",   // beige background
          dark: "#1a1a1a",    // dark mode section bg
        },
        text: {
          light: "#144d25",   // primary text color in light
          dark: "#f7f6d5",    // primary text color in dark
          muted: "#666666",   // secondary text
        },
      },
    },
  },
  darkMode: "class", // ✅ ensures manual/system toggle works
  plugins: [],
}
