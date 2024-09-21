/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm' : {'max': '767px'},
      'md' : {'min' : '320px', 'max': '1023px'},
      'lg' : {'min': '768px', 'max': '1023px'},
      'xl' : {'min' : '1024px'},
      '2xl' : {'min': '1024px', 'max': '1439px'}
    },

    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
      outfit: ['Outfit', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-100' : '#E6D8CC',
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