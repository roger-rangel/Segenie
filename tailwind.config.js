/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': 'Raleway'
      },
      maxWidth: {
        '1/2': '300px',       
      },
    },
    colors: {

    }
  },
  plugins: [],
}
