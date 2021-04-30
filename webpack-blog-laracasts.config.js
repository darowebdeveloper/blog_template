const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  // console.log('Evn: ', env); // true
  let config = {};

  config = {
    context: path.resolve(__dirname, 'blog_laracasts'),
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
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/i,
          use: [
            // Creates `style` nodes from JS strings
            env.production ? MiniCssExtractPlugin.loader : 'style-loader',
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
        filename: '[name].css',
      }),
      new HtmlWebpackPlugin({
        title: 'Development',
        template: './pages/index.html',
      }),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'blog_laracasts/dist'),
      port: 9000,
      host: '0.0.0.0',
    },
    // error with browserslist
    target: 'web', // https://stackoverflow.com/a/66157895
    output: {
      path: path.resolve(__dirname, 'blog_laracasts/dist'),
      // publicPath: '/dist',
      filename: '[name].bundle.js',
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
    config.devtool = 'inline-source-map';
  }
  return config;
};
