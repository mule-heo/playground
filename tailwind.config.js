/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      width: {
        192: '48rem',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(255, 255, 255, 0.25)',
        '4xl': [
          '0 35px 35px rgba(255, 255, 255, 0.25)',
          '0 45px 65px rgba(255, 255, 255, 0.15)',
        ],
      },
    },
  },
  plugins: [],
};
