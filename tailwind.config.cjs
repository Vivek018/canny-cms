/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1800px",
      lg: "1200px",
      md: "900px",
      sm: "600px",
      xs: "400px",
    },
    colors: {
      primary: "#0093D0",
      secondary: "#D08500",
      "accent-primary": "#00A863",
      "accent-secondary": "#E6007E",
      "neutral-primary": "#F8F8F8",
      "neutral-secondary": "#CCCCCC",
      "neutral-tertiary": "#333333",
      "neutral-shadow": "#33333310",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
