// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryPurple: "#560526",
        gold: "#FFC700",
      },
      fontFamily: {
        inder: ["Inder"],
      },
      backgroundImage: {
        mainBackground: "url('/assets/background.png')",
      },
      dropShadow: {
        gold: "0px 6px 4px rgba(255, 199, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
