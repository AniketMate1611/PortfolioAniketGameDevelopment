/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
          fontFamily: {
      arcade: ['"Press Start 2P"', 'cursive'],
    },
      colors: {
        darkBg: '#351518', // Dark background
        card: '#351518',
        neonBlue: '#00FFFF',
        neonPurple: '#9f00ff',
        neonPink: '#ff00c8',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(135deg, #00FFFF, #9f00ff)',
        'cyber-gradient': 'linear-gradient(135deg, #f61247ff, #00ff9dff)',
        'electric-gradient': 'linear-gradient(135deg, #62272d, #A03232, #cd7e85)',
      },
    },
  },
  plugins: [],
};
