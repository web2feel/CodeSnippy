module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode:false,
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        light: "#F5F6FB",
        "t-light": "#e8e9ea",
        "code-l": "rgba(255,255,255,0.5)",
      },
      fontFamily: {
        Poppins: "Poppins, sans-serif",
        Blinker: "Blinker",
      },
      spacing: {
        vm: "calc(100vh - 4rem)",
        hm: "calc(100vw - 20rem)",
        half: "48%",
        22: "5.5rem",
      },
      maxWidth:{
        'sm':'400px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
