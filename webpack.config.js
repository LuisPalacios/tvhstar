// Webpack configuration file that will be used when
// you perform: npm run prod
//
//
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  name: 'server',
  target: 'node',
  context: __dirname + '/src',
  entry: './server.js',

  // Cómo quiero que se llame el bundle de salida, es decir
  // la que será mi aplicación.
  output: {
    path: __dirname + '/build',
    filename: 'server.js',
  },
  //
  //
  module: {
    loaders: [
      {
        test: /\.js$/ ,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
  externals: nodeModules,
}
