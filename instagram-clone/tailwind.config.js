module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Takeaway: Added form plugin to customize html form elements.
    require('@tailwindcss/forms'),
    // Takeaway: Added scroll bar plugin to customize html scrollbars.
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}
