module.exports = {
  // purge: {
  //   enabled: true,
  //   content: ['./sandbox/src/**/*.js'],
  // },
  purge: ['./sandbox/src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // brand: '#0fa9e6',
        // 'brand-light': '#3fbaeb',
        // 'brand-dark': '#0c87b8',
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
      },
      fontFamily: {
        headline: 'Poppins, sans-serif',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      fontSize: ['hover'],
    },
  },
  plugins: [],
};
