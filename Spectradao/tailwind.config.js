/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#FF5733",
          200: "#FF4500",
          300: "#FF6347",
          400: "#FF6F61",
          500: "#FF7256",
          600: "#E34234",
          700: "#C0392B",
          800: "#A93226",
          900: "#8B241D",
        },
        kggrey: {
          100: "#F2F2F2",
          200: "#9999A5",
          300: "#636363",
          400: "#3D3D3D",
          500: "#1A1A1A",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        soulmaze: "MADE Soulmaze, Poppins",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
    },
  },
  plugins: [],
};
