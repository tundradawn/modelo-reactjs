const webpack = require('webpack'); //to access built-in plugins
const path = require('path'); //native nodejs module
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'core.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, exclude: '/node_modules/', use: ['babel-loader'] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new CopyPlugin([{
      from: 'public/lib',
      to: 'lib'
    }])
  ]
};
