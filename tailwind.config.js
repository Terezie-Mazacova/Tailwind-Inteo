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

        'neutral-900' : '#2C2C2C',
        'neutral-700' : '#444444',
      },
      maxWidth: {
        '1440' : '1440px',
      },

      padding: {
        '112' : '112px'
      },
    },
  },
  plugins: [],
}