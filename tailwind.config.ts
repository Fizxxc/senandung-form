import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E6",
        beige: "#D9BF9A",
        outline: "#8C4B3A",
        leafDark: "#2F4A3A",
        leafLight: "#4E6B4E",
        orangeBrown: "#B06A3C",
        darkBrown: "#3A241C",
      },
      boxShadow: {
        vintage: "0 12px 30px rgba(58,36,28,0.18)",
        press: "0 6px 0 rgba(140,75,58,0.8)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 1px 1px, rgba(58,36,28,0.07) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
} satisfies Config;
