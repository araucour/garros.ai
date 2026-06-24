import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette de marque (style Anthropic / Claude — tons chauds)
        cream: "#F5F0E8", // fond principal — beige crème
        copper: {
          DEFAULT: "#D4763B", // accents / CTA / liens — orange cuivré
          dark: "#B85F2A", // état hover
        },
        espresso: "#2D1B0E", // texte & titres — brun foncé
        ivory: "#FAF7F2", // cartes / sections — blanc cassé
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
