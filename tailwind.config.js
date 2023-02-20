/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'purple': "#5034C4",
      'red': '#FF6414',
      'green_light': "#F4F7FA",
      'deep-grey': '#BAC2C9',
      'grey': '#8F8E9B',
      'primary-black': '#2F2E3E',
      'light-lemon': '#F3FBF5',
      'light-red': '#E23938',
      'white': '#ffff',
      'gray': "#E3E2E7",
      'green': '#1ecaab',
      'gray-100': '#ABABC4',
      'gray-200': '#4f4f4f',
      'light-gray': '#bdc4cc',
      'hover': "lighten(rgba(30, 202, 171, 0.2), 40%)"
    },
    extend: {
      fontFamily: {
        helvetica_extraLight: ['helvetica_extraLight', 'sans-serif'],
        helvetica_r: ['helvetica_r', 'sans-serif'],
        helvetica_m: ['helvetica_m', 'sans-serif'],
        helvetica_sb: ['helvetica_sb', 'sans-serif'],
        helvetica_b: ['helvetica_b', 'sans-serif']
      },
      fontSize: {
      },
      boxShadow: {
        // cardShadow: '0px 4px 30px rgba(0, 0, 0, 0.02)',
        shadowOne: '0px 4px 8px rgba(167, 167, 167, 0.25)',
        shadowTwo: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;'
        // iconShadow: '2px 2px 25px rgba(128, 128, 128, 0.15)'
      },
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [
  ]
};
