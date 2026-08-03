import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#141613",
        stone: {
          25: "#FBFBF9",
          50: "#F6F6F3",
          100: "#EDEDE8",
          200: "#DDDDD5",
          400: "#9A9C93",
          500: "#6E7168",
        },
        forest: {
          DEFAULT: "#1E5C43",
          dark: "#154434",
          light: "#EAF1ED",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: { content: "72rem" },
    },
  },
  plugins: [],
};
export default config;
