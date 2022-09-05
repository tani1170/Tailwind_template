/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      cursor: {
        curly:
          "url(img/icons8-curly-arrow-70.png), pointer",
        sling:
          "url(img/icons8-squiggly-arrow-70.png) 55 0, pointer",
        mypointer:
          "url(img/icons8-cursor-65.png), pointer",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};
