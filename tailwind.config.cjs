/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Клубная палитра: глубокий navy + royal / electric blue
        navy: {
          950: "#040914",
          900: "#060D1F",
          850: "#0A1428",
          800: "#0D1B36",
          700: "#122447",
          600: "#1B3260",
        },
        royal: {
          DEFAULT: "#1E5EFF",
          dark: "#1747C4",
          deep: "#0E2E7E",
        },
        electric: {
          DEFAULT: "#4DA3FF",
          light: "#8CC5FF",
          soft: "#BFDCFF",
        },
        // Легаси-алиасы: старые страницы, использующие ink/gold/ash,
        // автоматически получают клубные цвета
        ink: {
          DEFAULT: "#060D1F",
          card: "#0A1428",
          soft: "#0D1B36",
          border: "#16274A",
        },
        gold: {
          DEFAULT: "#4DA3FF",
          light: "#8CC5FF",
          dark: "#1E5EFF",
        },
        ash: "#8DA2C6",
      },
      fontFamily: {
        display: ["Clash Display", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["General Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["General Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1440px",
      },
      boxShadow: {
        glow: "0 0 32px rgba(77, 163, 255, 0.25)",
        "glow-strong": "0 0 48px rgba(77, 163, 255, 0.4)",
        card: "0 24px 48px -24px rgba(4, 9, 20, 0.8)",
      },
      backgroundImage: {
        "club-gradient": "linear-gradient(135deg, #040914 0%, #0E2E7E 55%, #1E5EFF 130%)",
      },
    },
  },
  plugins: [],
};
