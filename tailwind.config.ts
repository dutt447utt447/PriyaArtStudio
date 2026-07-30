import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          pure: "#FFFFFF",
          linen: "#FAF9F6",
          soft: "#F5F4F0",
          card: "#FAFAFA",
        },
        ebony: {
          dark: "#111827",
          charcoal: "#1A1A1A",
          muted: "#4B5563",
          light: "#6B7280",
        },
        gold: {
          accent: "#C5A059",
          light: "#E6C687",
          dark: "#9A7B38",
          champagne: "#F7F2E7",
        },
        rose: {
          tint: "#FDF4F6",
          soft: "#F9ECEF",
          border: "#F3D5DD",
        },
        brand: {
          textDark: "#111827",
          textMuted: "#4B5563",
          textLight: "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        subheading: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-poppins)", "Poppins", "sans-serif"],
        button: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #C5A059 100%)",
        "dark-gradient": "linear-gradient(135deg, #1A1A1A 0%, #111827 100%)",
        "cream-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FAF9F6 100%)",
        "glass-white": "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(250,249,246,0.9) 100%)",
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 20px rgba(197, 160, 89, 0.12)",
        goldGlow: "0 0 25px rgba(197, 160, 89, 0.3)",
        card: "0 4px 20px -4px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        shimmer: "shimmer 2.5s infinite linear",
        pulseGlow: "pulseGlow 3s infinite ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1.5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
