/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        howell: ['Howell', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rouge: ['RougeScript', 'sans-serif'],
      },
      colors: {
        primary: {
          dark: '#ff477e',
          DEFAULT: '#ff477e',
        },
      },
    },
  },
  plugins: [],
}

