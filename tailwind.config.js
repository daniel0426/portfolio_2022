module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      purple: '#682ae9',
      background: '#0D0F17',
      white: '#F6F5FF',
      mint: '#5eead4',
    },
    extend: {
      fontFamily: {
        machine: ['MACHINE'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
