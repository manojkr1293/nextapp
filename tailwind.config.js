/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {
	extend: {
		animation: {
			gradientShift: 'gradientShift 5s ease-in-out infinite',
			greenGradient: 'greenGradient 10s ease-in-out infinite',
			yellowRotate: 'yellowRotate 8s ease-in-out infinite',
			gradientQuotes: 'gradientQuotes 8s ease infinite',
			pulsecustom: 'pulseAnimation 2s infinite ease-in-out',
			dash: 'dashAnimation 2s linear infinite',
			border: 'gradientBorder 6s ease infinite',
			heartbeat: 'heartbeat 1.8s ease-in-out infinite',
			spinslow: 'spinslow 6s linear infinite',
		},
		
		keyframes: {
		
			gradientBorder: {
				'0%, 100%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
			},
			pulseAnimation: {
				'0%': { opacity: 1 },
				'50%': { opacity: 0.5 },
				'100%': { opacity: 1 },
			},
			dashAnimation: {
				'0%': { strokeDashoffset: '0px' },
				'100%': { strokeDashoffset: '-100px' },
			},
			gradientQuotes: {
				'0%': { backgroundPosition: '0% 50%' },
				'50%': { backgroundPosition: '100% 50%' },
				'100%': { backgroundPosition: '0% 50%' },
			},
			heartbeat: {
					'0%, 100%': { transform: 'scale(1)' },
					'14%': { transform: 'scale(1.3)' },
					'28%': { transform: 'scale(1)' },
					'42%': { transform: 'scale(1.2)' },
					'70%': { transform: 'scale(1)' }
			},
			spinslow: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
			},
			yellowRotate : {
				'0%': {
					transform: 'translateX(-50%) rotate(0deg)',
				},
				'50%': {
					transform: 'translateX(-50%) rotate(180deg)',
				},
				'100%': {
					transform: 'translateX(-50%) rotate(360deg)'
				}
			},
			gradientShift: {
				'0%': {
            background: 'radial-gradient(61.58% 84.06% at 12.02% 16.21%, rgba(154, 146, 220, 0.6) 0%, rgba(154, 146, 220, 0.298) 52.77%, rgba(154, 146, 220, 0) 100%)',
            transform: 'translate(-120px, -50px)',
            opacity: '1',
          },
          '25%': {
            background: 'radial-gradient(66.21% 87.45% at 12.02% 16.21%, rgba(153, 146, 220, 0.6) 0%, rgba(153, 146, 220, 0.298) 53.42%, rgba(154, 146, 220, 0) 100%)',
            transform: 'translate(-60px, 0px)',
            opacity: '1',
          },
          '50%': {
            background: 'radial-gradient(72.21% 91.45% at 12.02% 16.21%, rgba(153, 146, 220, 0.6) 0%, rgba(153, 146, 220, 0.298) 51.42%, rgba(154, 146, 220, 0) 100%)',
            transform: 'translate(-10px, 0px)',
            opacity: '1',
          },
          '75%': {
            background: 'radial-gradient(68.21% 88.45% at 12.02% 16.21%, rgba(152, 146, 220, 0.6) 0%, rgba(152, 146, 220, 0.298) 52.22%, rgba(154, 146, 220, 0) 100%)',
            transform: 'translate(0px, -30px)',
            opacity: '1',
          },
          '100%': {
            background: 'radial-gradient(61.58% 84.06% at 12.02% 16.21%, rgba(154, 146, 220, 0.6) 0%, rgba(154, 146, 220, 0.298) 52.77%, rgba(154, 146, 220, 0) 100%)',
            transform: 'translate(-120px, -50px)',
            opacity: '1',
          },
			},
			greenGradient: {
				'0%': {
					background: 'radial-gradient(61.58% 84.06% at 88% 16.21%, rgba(146, 220, 154, 0.6) 0%, rgba(146, 220, 154, 0.298) 52.77%, rgba(146, 220, 154, 0) 100%)',
					transform: 'translate(0px, -120px)',
					opacity: '1',
				},
				'25%': {
					background: 'radial-gradient(66.21% 87.45% at 88% 16.21%, rgba(146, 220, 153, 0.6) 0%, rgba(146, 220, 153, 0.298) 53.42%, rgba(146, 220, 153, 0) 100%)',
					transform: 'translate(10px, -150px)',
					opacity: '1',
				},
				'50%': {
					background: 'radial-gradient(72.21% 91.45% at 88% 16.21%, rgba(146, 220, 152, 0.6) 0%, rgba(146, 220, 152, 0.298) 51.42%, rgba(146, 220, 152, 0) 100%)',
					transform: 'translate(150px, -100px)',
					opacity: '1',
				},
				'75%': {
					background: 'radial-gradient(68.21% 88.45% at 88% 16.21%, rgba(146, 220, 151, 0.6) 0%, rgba(146, 220, 151, 0.298) 52.22%, rgba(146, 220, 151, 0) 100%)',
					transform: 'translate(10px, -30px)',
					opacity: '1',
				},
				'100%': {
					background: 'radial-gradient(61.58% 84.06% at 88% 16.21%, rgba(146, 220, 154, 0.6) 0%, rgba(146, 220, 154, 0.298) 52.77%, rgba(146, 220, 154, 0) 100%)',
					transform: 'translate(0px, -120px)',
					opacity: '1',
				},
			},
			
		},
		colors: {
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
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
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
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		}
	}
},
plugins: [
		require("tailwindcss-animate")
],
};
