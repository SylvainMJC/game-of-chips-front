const { resolve } = require('path');

module.exports = {
  entry: resolve('./loader.js'),
  output: {
    filename: 'loader.min.js',
    path: resolve('./'),
  },
}