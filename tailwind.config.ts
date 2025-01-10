import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        pulse: "pulse 3s ease-in-out infinite",
        marquee: "marquee 20s linear infinite", // Continuous scrolling
      },
      keyframes: {
        pulse: {
          "0%": { opacity: "0.2" },
          "50%": { opacity: "0.4" },
          "100%": { opacity: "0.2" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" }, // Start off-screen
          "100%": { transform: "translateX(-100%)" }, // End off-screen
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
