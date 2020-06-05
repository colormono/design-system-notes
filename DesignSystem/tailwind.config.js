const config = require('./tailwind-full.config');

const defaultTheme = config.theme;

module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        sm: '512px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      fontSize: {
        xs: ['11px', '14px'],
      },
      fontFamily: {
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          100: '#000000',
          200: '#D1D1D7',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#575372',
          800: '#2A1846',
          900: '#000000',
        },
        primary: {
          100: '#000000',
          200: '#0FD08B',
          300: '#000000',
          400: '#000000',
          500: '#0FD08B',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
        secondary: {
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#442E83',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
};
