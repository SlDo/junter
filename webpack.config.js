const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'junter.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
