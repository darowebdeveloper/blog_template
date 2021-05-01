const currentTask = process.env.npm_lifecycle_event; //return dev or build npm run script
const path = require('path');
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  context: path.resolve(__dirname, 'twitter'),
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
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

if (currentTask == 'dev-twitter') {
  config.entry = {
    index: './index.js',
  };
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'twitter/dist'),
    clean: {
      dry: true,
    },
  };
  config.devServer = {
    contentBase: path.join(__dirname, 'twitter/dist'),
    index: 'index.html',
    // publicPath: 'twitter/dist',
    host: '0.0.0.0',
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
}

if (currentTask == 'build-twitter') {
  config.entry = {
    index: './index.js',
  };
  config.output = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'twitter/dist'),
    clean: {
      dry: true,
    },
  };
  config.mode = 'production';
  config.module.rules.push(
    {
      test: /\.(css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.(scss)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }
  );
  config.plugins.push(
    new MiniCssExtractPlugin({
      // filename: 'styles.[contenthash].css',
      filename: 'styles.[chunkhash].css',
    })
  );
}

module.exports = config;
