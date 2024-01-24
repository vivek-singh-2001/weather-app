/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00668A",
        "weather-secondary": "#004E71",
        "grey-white": "#f2f2f2",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true /* margin : auto */,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
  corePlugins: {
    // padding:false,
  },
};
