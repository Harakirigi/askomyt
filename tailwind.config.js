/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            brand: {
                light: '#3AB0FF',
                DEFAULT: '#0081CF',
                dark: '#005B99'
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                funky: ['"Comic Sans MS"', 'cursive']
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem'
            },
            screens: {
                'xs': '480px',
                '3xl': '1920px'
            }
        }
      },
    },
    plugins: [],
  }
  