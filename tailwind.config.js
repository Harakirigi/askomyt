/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                accent: {
                    10: 'rgba(159,239,0,0.1)',
                    50: 'rgba(159,239,0,0.5)',
                    DEFAULT: '#9FEF00',
                    hover: '#75CA06',
                    dark: '#3DA113',
                    darker: '#34731A',
                    darkest: '#1E5508',
                },
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                funky: ['"Comic Sans MS"', 'cursive'],
            },
            spacing: {
                '72': '18rem',
                '84': '21rem',
                '96': '24rem',
            },
            screens: {
                xs: '480px',
                '3xl': '1920px',
            },
        },
    },
    plugins: [],
}

export default config