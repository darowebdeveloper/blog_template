const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  // console.log('Evn: ', env); // true
  let config = {};

  config = {
    context: path.resolve(__dirname, 'sandbox'),
    entry: {
      index: './src/index.js',
      // blog: './src/blog.js',
    },
    mode: env.production ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            // Creates `style` nodes from JS strings
            env.production || env.withCss
              ? MiniCssExtractPlugin.loader
              : 'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: { sourceMap: env.production ? false : true },
            },
            {
              loader: 'postcss-loader',
              options: { sourceMap: env.production ? false : true },
            },
            // Compiles Sass to CSS
            {
              loader: 'sass-loader',
              options: { sourceMap: env.production ? false : true },
            },
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: './styles/[name].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'sandbox.html',
        template: './pages/sandbox.html',
        chunks: ['index'], // from entry name
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'sandbox/dist'),
      port: 9000,
      host: '0.0.0.0',
      index: 'sandbox.html',
      // publicPath: 'http://localhost:9000/',
    },
    // error with browserslist
    target: 'web', // https://stackoverflow.com/a/66157895
    output: {
      path: path.resolve(__dirname, 'sandbox/dist'),
      // publicPath: '/dist',
      filename: './scripts/[name].bundle.js',
      assetModuleFilename: 'images/[hash][ext][query]',
      clean: true,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  };
  if (env.production) {
  } else {
    // config.devtool = 'inline-source-map'; // no source map for tailwind build tool due to compiling time too long
    config.devtool = 'eval-cheap-module-source-map';
  }
  return config;
};

// const config = {
//   context: path.resolve(__dirname, 'sandbox'),
//   target: 'web',
//   module: {
//     rules: [
//       {
//         test: /\.(png|svg|jpg|jpeg|gif)$/i,
//         type: 'asset/resource',
//       },
//       {
//         test: /\.html$/i,
//         loader: 'html-loader',
//       },

//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             // presets: ['@babel/env'],
//             // plugins: ['transform-class-properties'],
//           },
//         },
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Index page generated',
//       filename: 'index.html',
//       template: './pages/index.html',
//       chunks: ['index'], // from entry name
//     }),
//   ],
// };

// config.entry = {
//   index: './src/index.js',
// };
// config.output = {
//   filename: 'bundle.js',
//   path: path.resolve(__dirname, 'sandbox/dist'),
//   assetModuleFilename: 'images/[hash][ext][query]',
//   clean: {
//     dry: true,
//   },
// };
// config.devServer = {
//   contentBase: path.join(__dirname, 'sandbox/dist'),
//   index: 'sandbox.html',
//   port: 9000,
// };
// config.mode = 'development';
// config.module.rules.push(
//   {
//     test: /\.(css)$/,
//     use: ['style-loader', 'css-loader', 'postcss-loader'],
//     // use: [MiniCssExtractPlugin.loader, 'css-loader'],
//   },
//   {
//     test: /\.(scss)$/,
//     use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
//     // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
//   }
// );
// config.plugins = [
//   new HtmlWebpackPlugin({
//     filename: 'sandbox.html',
//     template: './pages/sandbox.html',
//     chunks: ['index'], // from entry name
//   }),
// ];

// module.exports = config;
