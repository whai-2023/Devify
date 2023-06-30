/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#D5D2D1',
      },
      fontFamily: {
        sans: [
          'Inter',
          'Roboto Slab',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
