/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        museo: ['"MuseoModerno"', "sans-serif"],
        source: ['"Source Sans Pro"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
