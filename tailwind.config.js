/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-black': '#191414',
        'spotify-white': '#FFFFFF',
        'spotify-grey': '#B3B3B3',
        'spotify-dark-grey': '#282828',
        'spotify-light-grey': '#404040'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 