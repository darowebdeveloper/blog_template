// module.exports = {
//   plugins: [require('autoprefixer'), require('cssnano')],
// };

module.exports = ({ env }) => {
  // console.log('PostCss', env);
  if (env == 'production') {
    return {
      plugins: {
        autoprefixer: {},
        cssnano: {},
      },
    };
  } else {
    return {
      plugins: {
        autoprefixer: {},
      },
    };
  }
};
