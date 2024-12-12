/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,edge}", "./app/**/*.js"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#37517e",
        based: "#f6f9ff",
        white: "#ffffff",
      },
    },
  },
};
