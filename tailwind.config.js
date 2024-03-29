module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      purple: '#682ae9',
      brightpurple: '#6919FF',
      background: '#0D0F17',
      white: '#F6F5FF',
      mint: '#5eead4',
      error: '#f56565',
    },
    extend: {
      fontFamily: {
        machine: ['MACHINE'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      background: ['autofill'],
    },
  },
  plugins: [require('tailwind-scrollbar'), require('tailwindcss-autofill')],
};
