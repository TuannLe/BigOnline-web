/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#07443d',
        'primary-100': '#07443d38',
        'gray-1': '#fafafa',
        'price': '#ee4d2d',
      }
    },
  },
  plugins: [],
}

