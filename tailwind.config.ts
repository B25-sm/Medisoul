import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0A0F2C",
          accent: "#FFD100",
          support: "#E5E5E5",
        },
        dark: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        maroon: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        }
      },
      borderRadius: {
        xl: "1rem",
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #7c3aed 75%, #991b1b 100%)',
        'maroon-gradient': 'linear-gradient(135deg, #991b1b 0%, #dc2626 50%, #7c3aed 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #991b1b 100%)',
      }
    },
  },
  plugins: [],
};

export default config;


