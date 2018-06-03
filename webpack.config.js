var path = require('path');

module.exports = {
  module: {
    rules: []
  },

  entry: './modules and tests/main.js',

  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development'
}