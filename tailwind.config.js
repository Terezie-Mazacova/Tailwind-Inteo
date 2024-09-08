/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-600' : '#996830',

        'neutral-300' : '#D9D9D6',
        'neutral-700' : '#444444',
        'neutral-900' : '#2C2C2C',
      },
      maxWidth: {
        '1440' : '1440px',
      },
    },
  },
  plugins: [],
}