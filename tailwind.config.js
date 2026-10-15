/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Neon palette
        acid: '#C6FF00',       // electric lime
        cyan: '#00F0FF',       // electric cyan
        magenta: '#FF006E',    // hot magenta
        ink: '#0A0A0A',        // near-black
        bone: '#F5F5F0',       // off-white
        // semantic
        primary: '#C6FF00',
        accent: '#00F0FF',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '6px 6px 0 0 #0A0A0A',
        'brutal-acid': '6px 6px 0 0 #C6FF00',
        'brutal-cyan': '6px 6px 0 0 #00F0FF',
        'brutal-magenta': '6px 6px 0 0 #FF006E',
        glow: '0 0 24px rgba(198,255,0,0.4)',
        'glow-cyan': '0 0 24px rgba(0,240,255,0.4)',
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        marquee: 'marquee 25s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        glitch: 'glitch 3s infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 1px)' },
          '40%': { transform: 'translate(-2px, -1px)' },
          '60%': { transform: 'translate(2px, 1px)' },
          '80%': { transform: 'translate(2px, -1px)' },
        },
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'grid-light':
          'linear-gradient(rgba(10,10,10,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.08) 1px, transparent 1px)',
        'noise':
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: '40px 40px',
      },
    },
  },
  plugins: [],
};