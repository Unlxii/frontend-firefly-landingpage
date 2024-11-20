/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navtext: "#54A997",
      white: "#ffffff",
      black: "#000000",
      color3: "#1B202F",
      bgmain: "#F5F4F8",
      red: colors.red,
      color10: "rgba(48, 72, 127, 1)",
      greengradient: "#6EF2B7",
      bluegradient: " #282F62",
      cardgradentleft: "#FFFCEF",
      cardgradentright: "#F2FAFF",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #FFEDAB, #81B96C)",
        "custom-gradient2": "linear-gradient(to right,#FFEFDB, #E5F0F6)",
        "custom-gradient3": "linear-gradient(to right, #6EF2B7, #282F62)",
        "custom-gradient4":
          "linear-gradient(96.72deg, #1B202F 46.35%, #443B57 138.9%), linear-gradient(90.62deg, rgba(84, 169, 151, 0) 51.36%, rgba(84, 169, 151, 0.2) 101.27%)",
      },
      backgroundClip: ["text"],
    },
  },
  plugins: [],
};
