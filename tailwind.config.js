/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    screens: {
      mob: "375px",
      tab: "834px",
      desk: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,

      "dark-gray": "#3C3E3D",
      "card-dark-gray": "#2A2A2E",
      "main-dark-gray": "#333339",
      "filter-dark-gray": "#313035",
      gray: "#76757E",

      modalBg: "rgba(0, 0, 0, 0.63)",
      "accent-green": "#00CF78",
      "accent-yellow": "#FAFF00",
      "yellow-light": "#FEFFC9",
    },

    extend: {
      spacing: {
        0.5: "0.0625rem",
        1: "0.125rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        15: "3.875rem",
        17: "4.5rem",
        30: "7.5rem" /* 112px */,
      },
      fontSize: {
        xxs: "0.625rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
      },
      lineHeight: {
        "3.5xl": "2.25rem",
        11: "3rem",
        12: "3.5rem",
      },
    },
  },
  plugins: [],
};
