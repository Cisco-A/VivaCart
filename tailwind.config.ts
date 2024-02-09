import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        lightTheme: {
        "primary": "#DB4444",
        "primary-focus": "#E07575",        
        "secondary": "#00FF66",
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
