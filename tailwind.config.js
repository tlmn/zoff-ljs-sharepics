const Color = require("color");

const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

module.exports = {
  purge: {
    content: [
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
    options: {
      safelist: ["items-start", "items-center", "items-end"],
    },
  },
  theme: {
    extend: {},
    colors: {
      darkGray: {
        DEFAULT: "#252525",
        lighter: lighten("#252525", 0.8),
      },
      lightGray: "#858585",
      red: "#E2190C",
      turquoise: { DEFAULT: "#00FFC2", lighter: darken("#00FFC2", 0.15) },
      violet: "#C9CEFF",
      white: "#fff",
      black: "#000",
    },
    spacing: {
      0: "0",
      1: "8px",
      2: "20px",
      3: "40px",
      4: "80px",
    },
    lineHeight: {
      none: 1,
      tight: 1.15,
      normal: 1.2,
    },
    fontSize: {
      small: "12px",
      base: "18px",
      md: "30px",
      lg: "40px",
      xl: "48px",
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      move: "move",
    },
    fontFamily: {
      headline: "Gilroy ExtraBold",
      body: "Hind",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: {
        default: "0.8rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  variants: {
    margin: ["last"],
  },
  options: { important: true },
};
