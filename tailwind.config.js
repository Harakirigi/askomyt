/** @type {import('tailwindcss').Config} */
const config = {
    darkMode: ['class'],
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
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
                secondary: {
                    lighter: '#7F5CFB',
                    light: '#6E4CE9',
                    DEFAULT: '#623CEA',
                    hover: '#4F25E8',
                    dark: '#4F25E8',
                    darker: '#401AC8',
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
    				'10': 'rgba(219,39,99,0.1)',
    				'50': 'rgba(219,39,99,0.5)',
    				DEFAULT: '#DB2763'
    			},
    			success: {
    				'10': 'rgba(18,234,234,0.1)',
    				'50': 'rgba(18,234,234,0.5)',
    				DEFAULT: '#12EAEA',
    				dark: '#028090',
    				darker: '#1A5E63'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		fontFamily: {
    			sans: [
    				'var(--font-geist-sans)',
    				'ui-sans-serif'
    			],
    			mono: [
    				'var(--font-geist-mono)',
    				'monospace'
    			]
    		},
    		spacing: {
    			'72': '18rem',
    			'84': '21rem',
    			'96': '24rem'
    		},
    		screens: {
    			smallMobile: { max: '499px' },
                mobile: { max: '699px' },
                bigMobile: { max: '799px' },
                tablet: { max: '999px' },
                bigTablet: { max: '1199px' },
                responsive: { max: '1799px' },
                PC: { min: '1800px'}
    		},
    		fontSize: {
    			buttonTextSize: '1rem',
    			headingSize: '3.75rem',
    			heading2Size: '3rem',
    			heading3Size: '2.25rem'
    		},
    		clipPath: {
    			'erased-shape': 'polygon(15% 0, 100% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 100%, 0 15%)'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
            keyframes: {
                bounceUp: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-6px)' },
                    },
            },
            animation: {
                bounceUp: 'bounceUp 1s ease-in-out infinite',
            },
    	}
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.clip-erased-shape': {
                    clipPath: 'polygon(15% 0, 100% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 100%, 0 15%)',
                },
            });
        },
        require("tailwindcss-animate")
    ],
}

export default config