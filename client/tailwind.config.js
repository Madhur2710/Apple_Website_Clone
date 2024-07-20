/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontSize:{
        sml : '13px'
      },
      screens:{
        medium : '834px'
      }
    },
  },
  plugins: [],
};
