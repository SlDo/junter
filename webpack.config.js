const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'juster.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
