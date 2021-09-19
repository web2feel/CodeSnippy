module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: "#F5F6FB",
        dark: "#0b0b0f",
        't-light':"#e8e9ea",
        'd-bcol':"#202020",
        'code-l':'rgba(255,255,255,0.5)',
      },
      fontFamily:{
        "Poppins":"Poppins, sans-serif",
        "Blinker":"Blinker"
      },
      spacing:{
        'vm':"calc(100vh - 4rem)",
        'hm':"calc(100vw - 20rem)",
        'half':'48%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
