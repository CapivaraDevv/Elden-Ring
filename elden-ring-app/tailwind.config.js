/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "rgb(var(--gold) / <alpha-value>)",
        "gold-light": "rgb(var(--gold-light) / <alpha-value>)",
        "gold-dim": "rgb(var(--gold-dim) / <alpha-value>)",

        "bg-deep": "rgb(var(--bg-deep) / <alpha-value>)",
        "bg-mid": "rgb(var(--bg-mid) / <alpha-value>)",
        "bg-card": "rgb(var(--bg-card) / <alpha-value>)",

        "text-main": "rgb(var(--text-main) / <alpha-value>)",
        "text-dim": "rgb(var(--text-dim) / <alpha-value>)",

        "red-rune": "rgb(var(--red-rune) / <alpha-value>)",
        "red-glow": "rgb(var(--red-glow) / <alpha-value>)",

        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
