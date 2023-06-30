/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: "1500px",
      lg: "950px",
      md: "700px",
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
