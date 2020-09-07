const { resolve } = require('path');

module.exports = {
  entry: resolve('./GameOfChips.js'),
  mode: 'production',
  watch: false,
  output: {
    filename: 'bundle.min.js',
    path: resolve('./dist/'),
  },
}