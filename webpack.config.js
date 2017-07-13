const path = require('path');

module.exports = {
  entry: {
    index: path.resolve(__dirname, './assets/index'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  externals: [
  ],
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  }
};
