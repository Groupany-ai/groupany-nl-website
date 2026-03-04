import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // Matches --font-plus-jakarta CSS variable from layout.tsx
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark:    "#1D4ED8",
          light:   "#3B82F6",
        },
        accent: "#6366F1",
      },
    },
  },
  plugins: [],
}
export default config
