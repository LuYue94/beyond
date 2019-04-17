var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: "app.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /^node_modules$/,
      loader: "babel-loader"
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};