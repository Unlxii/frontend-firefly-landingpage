/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      navtext: "#54A997",
      white: "#ffffff",
      black: "#000000",
      gradient: {
        from: "#FFEDAB",
        to: "#81B96C",
      },
    },
    extend: {},
  },
  plugins: [],
};
