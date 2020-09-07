const { resolve } = require('path');

module.exports = {
  entry: resolve('./loader.js'),
  mode: 'development',
  output: {
    filename: 'loader.min.js',
    path: resolve('./'),
  },
}