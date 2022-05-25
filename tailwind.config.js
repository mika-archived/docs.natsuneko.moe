module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "#2081e2",
          secondary: "#1d74cb",
          white: "#ffffff",
          black: "#332633",
          text: "#353840",
          link: "#2081e2",
          graytext: "#4f5a66",
          bg: "#ebf4fc",
        },
        sakura: {
          primary: "#ff90bf",
          secondary: "#ff7baf",
          white: "#ffffff",
          black: "#eeeeee",
          text: "#353840",
          link: "#ff7baf",
          graytext: "#4f5a66",
          bg: "#ebf4fc",
        },
        mono: {
          primary: "#f4f5f7",
          secondary: "#d2d6d9",
          white: "#332633",
          black: "#eeeeee",
          text: "#353840",
          link: "#2081e2",
          graytext: "#4f5a66",
          bg: "#ebf4fc",
        },
        ocean: {
          primary: "#2081e2",
          secondary: "#1d74cb",
          white: "#ffffff",
          black: "#332633",
          text: "#353840",
          link: "#2081e2",
          graytext: "#4f5a66",
          bg: "#ebf4fc",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: "600px",
          },
          "@screen md": {
            maxWidth: "700px",
          },
          "@screen lg": {
            maxWidth: "900px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
        },
      });
    },
  ],
};
