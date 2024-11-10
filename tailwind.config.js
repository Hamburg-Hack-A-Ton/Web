
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ux/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
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
  		},
		keyframes: {
        "collapse-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "collapse-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "overlayShow": {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        "contentShow": {
          from: { opacity: '0', transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
        },
        "slideUpAndFade": {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "slideRightAndFade": {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        "slideDownAndFade": {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        "slideLeftAndFade": {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        "shine": {
            "0%": { backgroundPosition: '200% 0', opacity: '0.5' },
            "50%": { backgroundPosition: '-200% 0', opacity: '1' },
            "100%": { backgroundPosition: '200% 0', opacity: '0.5' },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "collapse-down": "collapse-down 0.2s ease-out",
        "collapse-up": "collapse-up 0.2s ease-out",
        "overlayShow": 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        "contentShow": 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideUpAndFade": 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideRightAndFade": 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideDownAndFade": 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "slideLeftAndFade": 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        "shine": "shine 8s ease-in-out infinite",
        "skeleton": "shine 2.5s cubic-bezier(.55,.35,.29,.9) infinite",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
  	}
  },
  plugins: ["tailwindcss-animate"],
}
