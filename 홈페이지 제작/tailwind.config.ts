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
        urban: {
          black: "#111827",
          dark: "#0B0F19",
          card: "#1F2937",
          pink: "#F43F5E",
          pinkLight: "#FDA4AF",
          pinkHover: "#E11D48",
          cyan: "#06B6D4",
          blue: "#0284C7",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
