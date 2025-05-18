/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0F0F0F',       // Main background (body, overlays)
        'bg-secondary': '#1C1C1E',     // Cards, navbars, modals
        'text-primary': '#EAEAEA',     // Main text
        'text-secondary': '#9E9E9E',   // Subtext, muted text
        'accent-primary': '#FF6B6B',   // Buttons, hover effects, icons
      },
    },
  },
  plugins: [],
}
