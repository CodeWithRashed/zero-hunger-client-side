/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
      },
    },
  },
  plugins: [require("daisyui"),  require('flowbite/plugin')],
  daisyui: {
    themes: ["light", "dark"]
  }
};
