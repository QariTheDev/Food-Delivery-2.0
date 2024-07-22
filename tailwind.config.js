/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        textColor: '#ffffff',
        buttonColorLight: 'rgba(0, 188, 168, 0.29)',
        buttonColor: '#00BCA8',
        buttonHoverColor: '#00A896',
        darkGrey: '#333333',
        black: '#000000',
        transBlack: 'rgba(0, 0, 0, 0.1)',
        transBlackNavbar: 'rgba(0, 0, 0, 0.7)',
        footerUpper: '#d6d6d6',
      },
      fontFamily: {
        fira: ['Federo', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      margin: {
        110: '48rem',
      }
    },
  },
  plugins: [],
}