/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white1: "#E5E1DE",
        green1: "#3a4e3f",
        green2: "#85A188",
        green3: "#525940",
        brown1: "#8c664b",
        brown2: "#9d845f",
        // brown3: "#AE8F7A",
        brown3: "#937374",
        brown4: "#af7d47",
      },
      spacing: {
        1.5: "6px",
        2.5: "10px",
        4.5: "18px",
        15: "58px",
      },
    },
  },
  plugins: [],
};
