/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1d1d1f",
        muted: "#6e6e73",
        surface: "#ffffff",
        canvas: "#f5f5f7",
        hairline: "#e5e5e7",
        brand: {
          50: "#eef6ff",
          100: "#d9ecff",
          400: "#3395ff",
          500: "#0a84ff",
          600: "#0071e3",
          700: "#0058b0",
        },
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "Segoe UI", "Helvetica Neue", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(0,0,0,0.12)",
        "card-hover": "0 1px 2px rgba(0,0,0,0.04), 0 20px 40px -12px rgba(0,0,0,0.16)",
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};