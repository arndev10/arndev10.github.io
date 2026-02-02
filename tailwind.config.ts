import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contexts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: {
          50: '#ccd6f6',
          100: '#a8b2d1',
          200: '#8892b0',
          300: '#64748b',
          400: '#495670',
          500: '#233554',
          600: '#112240',
          700: '#0f172a',
          800: '#0a1628',
          900: '#020c1b',
          950: '#0a192f',
        },
        accent: {
          DEFAULT: '#64ffda',
          dim: 'rgba(100, 255, 218, 0.1)',
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
export default config;
