import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FAF6EE",
        bgAlt: "#F0EAD9",
        surface: "#FFFFFF",
        ink: "#1B1712",
        inkMuted: "#5C5648",
        inkInverse: "#FAF6EE",
        bgInverse: "#1B1712",
        border: "#DED5C2",
        leather: "#6B4226",
        olive: "#6B6F47",
        rust: "#B5502B",
        rustHover: "#96401F",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(27,23,18,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
