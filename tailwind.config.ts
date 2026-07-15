import type { Config } from "tailwindcss";

/** rgb(var(--token) / <alpha-value>) helper so opacity utilities keep working */
const withVar = (token: string) => `rgb(var(${token}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens (theme-aware via CSS variables)
        background: withVar("--background"),
        surface: {
          DEFAULT: withVar("--surface"),
          muted: withVar("--surface-muted"),
        },
        border: withVar("--border"),
        foreground: withVar("--foreground"),
        "muted-foreground": withVar("--muted-foreground"),
        primary: {
          DEFAULT: withVar("--primary"),
          foreground: withVar("--primary-foreground"),
        },
        accent: withVar("--accent"),
        ring: withVar("--ring"),
        // Fixed brand indigo scale (used for gradients / accents)
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-arabic)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 1px 2px -1px rgb(var(--shadow-color) / 0.08), 0 4px 16px -4px rgb(var(--shadow-color) / 0.10)",
        elevated:
          "0 4px 12px -2px rgb(var(--shadow-color) / 0.10), 0 16px 48px -12px rgb(var(--shadow-color) / 0.18)",
        glow: "0 12px 40px -8px rgb(var(--primary) / 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
