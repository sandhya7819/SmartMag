import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E54E53", // SmartMag Red
          dark: "#C53D42",
        },
        secondary: {
          DEFAULT: "#19232D", // SmartMag Dark Blue/Gray
        },
        accent: "#F4F4F4",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "sans-serif"],
        serif: ["var(--font-roboto-slab)", "serif"],
        "pt-serif": ["var(--font-pt-serif)", "serif"],
        bitter: ["var(--font-bitter)", "serif"],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        slideDown: 'slideDown 0.3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
