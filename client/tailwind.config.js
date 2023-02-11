/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        app: {
          blue: {
            DEFAULT: "rgb(7 71 166)",
          }
        }
      }
    },
  },
  plugins: [],
}