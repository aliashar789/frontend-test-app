/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f9f9f9",
        grey: "#d9d9d9",
        blue: "#242e69",
        steelblue: "#57619c",
        black: "#000",
        "success-success-4": "#ecfcf2",
        "success-success-3": "#b8dbca",
        "success-100": "#087443",
        red: "#eb4643",
        gray: "#808080",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
      },
      borderRadius: {
        "3xs": "10px",
        mini: "15px",
        "8xs": "5px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      xs: "12px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};