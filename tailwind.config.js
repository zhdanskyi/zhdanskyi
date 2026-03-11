/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00FF00',
        'neon-purple': '#6D28D9',
        'dark-bg': '#030303',
        'dark-box': '#050505',
        'terminal-header': '#111111',
        'terminal-bg': 'rgba(3,3,3,0.95)',
        'error-red': '#ff5f56',
        'warn-yellow': '#ffbd2e',
        'success-green': '#27c93f'
      },
      fontFamily: {
        'head': ['"Press Start 2P"', 'cursive'],
        'body': ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 10px rgba(0, 255, 0, 0.3)',
        'neon-green-hover': '10px 10px 0px #00FF00',
        'neon-purple': '5px 5px 0px rgba(109, 40, 217, 0.3)',
        'terminal': '0 0 30px rgba(0,255,0,0.1), inset 0 0 10px rgba(0,255,0,0.05)'
      },
      backgroundImage: {
        'matrix-pattern': 'linear-gradient(rgba(0, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.03) 1px, transparent 1px)',
        'terminal-scanlines': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))'
      }
    },
  },
  plugins: [],
}
