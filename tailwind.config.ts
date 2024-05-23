import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./common/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'small': '14px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "titles-gradient": "linear-gradient(180deg, #032019 3.33%, rgba(3, 32, 25, 0.9) 68.98%, rgba(4, 52, 41, 0.5) 81.07%)"
      },
      colors: {
        emerald: {
          1000: "#032019"
        },
        paragraph: {
          DEFAULT: "#6B7280",
        },
        brand: {
          DEFAULT: "#059669",
        }
      },
      fontFamily: {
        brsonoma: "BR Sonoma",
        brsonoma_semibold: "BR Sonoma Semibold",
        brsonoma_bold: "BR Sonoma Bold"
      }
    },
  },
  plugins: [],
};
export default config;
