module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        32: "2rem",
        sm: ".875rem",
      },
      fontFamily: {
        body: ["avenir", "sans-serif"],
      },
      colors: {
        primary: "#2A4A42",
        secondary: "#3F4B4C",
        tertiary: "#DAE9E5",
      },
      keyframes: {},
      animation: {},
      screens: {
        "3xl": "1843px",
      },
    },
  },
  plugins: [],
};
