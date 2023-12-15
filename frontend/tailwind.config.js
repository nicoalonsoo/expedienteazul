/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
        'open-sans': ['Open Sans', 'sans'],
        'inter': ['Inter', 'sans-serif'],
        'catamaran': ['Catamaran', 'sans-serif'],
      },
      fontSize: {
        '12px': '12px',
        '10px': '10px',
        '0.875rem': '0.875rem',
      },
      lineHeight: {
        '1.25rem': '1.25rem',
        'custom': '1.77rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-blue': '#3b8fd8',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
});
