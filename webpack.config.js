// uses ES5

import Path from 'path';

var webpack = require('webpack');
//var path = require('path');

var BUILD_DIR = Path.resolve(__dirname, 'dist');
var APP_DIR = Path.resolve(__dirname, '');

module.exports = {
  entry: APP_DIR + '/main.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
        inline: true,
        port: 8080
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
      // it is here i need to add other loaders too
      // for e.g CSS preprocessors
      // js minification
    ]
  }
}
