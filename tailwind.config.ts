import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        brand: {
          blue: {
            DEFAULT: "#3b82f6",
            light: "#60a5fa",
            dark: "#1d4ed8",
            glow: "rgba(59, 130, 246, 0.15)",
          },
          purple: {
            DEFAULT: "#a855f7",
            light: "#c084fc",
            dark: "#7e22ce",
            glow: "rgba(168, 85, 247, 0.15)",
          },
          dark: {
            950: "#030712", // very dark blue-gray
            900: "#0b0f19",
            800: "#111827",
            700: "#1f2937",
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cyber-grid": "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s infinite linear",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(59, 130, 246, 0.1), 0 0 20px rgba(168, 85, 247, 0.05)" },
          "100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.25), 0 0 35px rgba(168, 85, 247, 0.2)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
};

export default config;
