var path = require('path');

module.exports = {
  module: {
    rules: []
  },

  entry: './main.js',

  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, './')
  },

  mode: 'development'
}