module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode:false,
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
        76:'19rem'
      },
      maxWidth:{
        'sm':'400px'
      },
      minHeight:{
        'vm':'calc(100vh - 4rem)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
