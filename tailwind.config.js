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
                    light: '#28CFBD',
                    DEFAULT: '#10AAA6',
                    dark: '#090B0C',
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