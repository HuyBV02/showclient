/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        sans: [
          '"Roboto Condensed", sans-serif',

          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
    extend: {
      backgroundImage: {
        'layout-d': "url('./src/assets/img/layoutDoc.jpg')",
        'layout-n': "url('./src/assets/img/layoutNgang.jpg')",
      }
    },
    plugins: [],
};
