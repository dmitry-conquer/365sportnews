module.exports = {
  content: ["./src/scss/**/*.scss", "./src/**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D33737",
          "danger": "#DF0D0D",
          "dark": "#4B0000",
        },
        secondary: {
          DEFAULT: "#2F2A2A",
          "dark": "#131212",
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require("@tailwindcss/typography")],
};
