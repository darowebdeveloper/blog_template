// module.exports = {
//   plugins: [require('autoprefixer'), require('cssnano')],
// };

module.exports = ({ env }) => {
  // console.log('PostCss', env);
  if (env == 'production') {
    return {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
        cssnano: {},
      },
    };
  } else {
    return {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
      // plugins: [
      //   require('tailwindcss')('./tailwind.config.js'),
      //   require('autoprefixer'),
      // ],
    };
  }
};
