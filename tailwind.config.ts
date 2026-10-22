import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B1120",
        darkCard: "#111B2E",
        darkCardHover: "#162238",
        darkBorder: "#1E293B",
        brand: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8", // primary
          500: "#0EA5E9", // secondary
          600: "#0284C7",
          700: "#0369A1",
        },
        priority: {
          must: "#EF4444",
          mustBg: "rgba(239, 68, 68, 0.12)",
          should: "#F59E0B",
          shouldBg: "rgba(245, 158, 11, 0.12)",
          skip: "#64748B",
          skipBg: "rgba(100, 116, 139, 0.12)",
          done: "#10B981",
          doneBg: "rgba(16, 185, 129, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(56, 189, 248, 0.35)",
        "glow-lg": "0 0 35px -5px rgba(56, 189, 248, 0.5)",
        "glow-danger": "0 0 25px -5px rgba(239, 68, 68, 0.35)",
        "glow-success": "0 0 25px -5px rgba(16, 185, 129, 0.35)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
