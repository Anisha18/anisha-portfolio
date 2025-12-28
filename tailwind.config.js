/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        zoomIn: { "0%": { opacity: "0", transform: "scale(0.8)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        slideInRight: { "0%": { opacity: "0", transform: "translateX(-40px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        zoomIn: "zoomIn 0.6s ease-out forwards",
        slideInRight: "slideInRight 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
