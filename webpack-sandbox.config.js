const currentTask = process.env.npm_lifecycle_event; //return dev or build npm run script
const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  context: path.resolve(__dirname, 'sandbox'),
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            // plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Index page generated',
      filename: 'index.html',
      template: './pages/index.html',
      chunks: ['index'], // from entry name
    }),
  ],
};

if (currentTask == 'dev-sandbox') {
  config.entry = {
    index: './scripts/index.js',
  };
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'sandbox/dist'),
    clean: {
      dry: true,
    },
  };
  config.devServer = {
    contentBase: path.join(__dirname, 'sandbox/dist'),
    index: 'sandbox.html',
    port: 9000,
  };
  config.mode = 'development';
  config.module.rules.push(
    {
      test: /\.(css)$/,
      use: ['style-loader', 'css-loader'],
      // use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.(scss)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }
  );
  config.plugins = [
    new HtmlWebpackPlugin({
      filename: 'sandbox.html',
      template: './pages/sandbox.html',
      chunks: ['index'], // from entry name
    }),
  ];
}

module.exports = config;
