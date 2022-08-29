/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./img/sten_simons.webp')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
