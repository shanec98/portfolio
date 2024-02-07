/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#fff6e9',
        cream: '#FFF9C6'
      },
      borderWidth: {
        10: '10px',
        15: '15px',
        30: '30px'
      }
    }
  },
  plugins: []
}
