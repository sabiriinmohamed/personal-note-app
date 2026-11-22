/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#172B4D',
          dark: '#0F1C33',
          light: '#243B66',
        },
        gold: {
          DEFAULT: '#D29A46',
          light: '#E5B869',
          dark: '#B57E2F',
        },
        graylight: '#F1F3F7',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
