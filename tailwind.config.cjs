/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        image1: "url(/src/Images/image1.jpg)",
      },
    },
  },
  plugins: [],
}
