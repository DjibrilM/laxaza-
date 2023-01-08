/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme:
  {

    extend: {
      screens: {
        'custom-tablet': '782px',
        // => @media (min-width: 640px) { ... }

        'mini-laptop': '1200px',

        'custom-laptop': '1200px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        text: '#000'
      },
      fontFamily: {
        'primary': ['Inconsolata', 'monospace'],
        'semi-primary': ['K2D', 'sans-serif'],
        'secondary': ['Josefin Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}