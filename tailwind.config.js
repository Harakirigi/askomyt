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
                black: {
                    lighter: '#1E2A3C',
                    light: '#192435',
                    DEFAULT: '#141D2B',
                    dark: '#111926',
                    darker: '#0D141F',
                },
                white: {
                    DEFAULT: '#FFFFFF',
                    100: '#EAEAEA',
                    200: '#D7D7D7',
                    300: '#C3C3C3',
                    400: '#ADADAD',
                    500: '#9D9D9D',
                    600: '#848484',
                },
                danger: {
                    10: 'rgba(219,39,99,0.1)',
                    50: 'rgba(219,39,99,0.5)',
                    DEFAULT: '#DB2763',
                },
                success: {
                    10: 'rgba(18,234,234,0.1)',
                    50: 'rgba(18,234,234,0.5)',
                    DEFAULT: '#12EAEA',
                    dark: '#028090',
                    darker: '#1A5E63',
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