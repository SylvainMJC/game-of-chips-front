const { resolve } = require('path');

module.exports = {
  entry: resolve('./GameOfChips.js'),
  mode: 'development',
  watch: true,
  output: {
    filename: 'bundle.min.js',
    path: resolve('./dist/'),
  },
}