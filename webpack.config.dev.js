const HtmlWebPackPlugin = require("html-webpack-plugin");
const Webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new Webpack.DefinePlugin({
      'ENV': JSON.stringify('development')
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    inline: true,
    open: true,
    port: 3000,
    historyApiFallback: true
  },
  performance: {
    hints: false
  }
};
