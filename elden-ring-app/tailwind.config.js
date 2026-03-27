/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        "gold-light": "var(--gold-light)",
        "gold-dim": "var(--gold-dim)",

        "bg-deep": "var(--bg-deep)",
        "bg-mid": "var(--bg-mid)",
        "bg-card": "var(--bg-card)",

        "text-main": "var(--text-main)",
        "text-dim": "var(--text-dim)",

        "red-rune": "var(--red-rune)",
        "red-glow": "var(--red-glow)",

        border: "var(--border)",
      },
    },
  },
  plugins: [],
};
