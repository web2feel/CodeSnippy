module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
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
        "Roboto-Mono": "Roboto Mono, monospace",
        "Space-Mono": "Space Mono, monospace",
        "JetBrains-Mono": "JetBrains Mono, monospace",
        "Source-Code-Pro": "Source Code Pro, monospace",
        "Fira-Code": "Fira Code, monospace",
      },
      spacing: {
        vm: "calc(100vh - 4rem)",
        hm: "calc(100vw - 20rem)",
        half: "48%",
        22: "5.5rem",
        76: "19rem",
        15:"3.8rem"
      },
      maxWidth: {
        sm: "400px",
      },
      minHeight: {
        vm: "calc(100vh - 4rem)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
