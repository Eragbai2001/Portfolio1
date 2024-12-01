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
        'custom-orange': '#D97706',
        'custom-purple': '#7C3AED',
        'custom-green': '#15803D',
        'custom-blue': '#1D4ED8',
      },
      opacity: {
        '44': '0.44',
      },
      mixBlendMode: {
        'color-dodge': 'color-dodge',
      },
    },
  },
  plugins: [],
};

export default config;