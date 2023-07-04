/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1500px",
      lg: "1000px",
      md: "720px",
      sm: "470px",
      xs: "350px",
    },
    colors: {
      primary: "#0093D0",
      accent: "#E6007E",
      "neutral-primary": "#F8F8F8",
      "neutral-secondary": "#CCCCCC",
      "neutral-shadow": "#33333310",
      white: "#FFFFFF",
      black: "#000000",
      gray: "#333333",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "footer-gradient": "linear-gradient(135deg, #0093D0, #00B7E5);",
        "title-gradient": "linear-gradient(to bottom left, #0093D0 , #E6007E);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
