import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
        "primary": "#000000",
        "primary-focus": "#E07575",        
        "secondary": "#38CB89",
        "secondary-focus": "A0BCE0",        
        "accent": "#7D8184",
        "neutral": "#120d01",
        "base-100": "#f8ffe8",
        "info": "#0092ff",
        "success": "#00ffa8",
        "warning": "#ff9100",
        "error": "#ff516d",
        },
      },
    ],
  },
};
export default config;
