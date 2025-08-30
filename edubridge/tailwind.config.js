/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF6FF",
          100: "#D9ECFF",
          200: "#B6D9FF",
          300: "#8AC0FF",
          400: "#5EA8FF",
          500: "#2E8BFF",
          600: "#1E6CD4",
          700: "#174FA3",
          800: "#103571",
          900: "#0A2148"
        }
      }
    }
  },
  plugins: []
};
