import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f0f7ff",
          100: "#e6f2ff",
          200: "#d1e5ff",
          300: "#b3d7ff",
          400: "#85c1ff",
          500: "#5ba3f5",
          600: "#4a8fd6",
          700: "#3a75b8",
          800: "#2d5a91",
          900: "#1e3a5f",
        },
        teal: {
          50: "#f0f7ff",
          100: "#e6f2ff",
          200: "#d1e5ff",
          300: "#b3d7ff",
          400: "#85c1ff",
          500: "#5ba3f5",
          600: "#4a8fd6",
          700: "#3a75b8",
          800: "#2d5a91",
          900: "#1e3a5f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "sky-glow": "0 0 20px rgba(14, 165, 233, 0.3)",
        "teal-glow": "0 0 20px rgba(14, 165, 233, 0.3)",
      },
    },
  },
  plugins: [],
} satisfies Config;
