/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient: "linear-gradient(to left, #FF4D00, #FFA100)",
      },
      boxShadow: {
        "primary-glow": "0px 0px 5px 0px #FF4D00",
      },
      colors: {
        primary: {
          point1: "#FF3D00",
          point2: "#FFA100",
          bg: "#171717",
        },

        text: {
          main: "#f3f3f3",
          sub: "#D7D7D7",
        },
      },
    },
  },
};
