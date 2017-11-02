const path = require('path');

module.exports = {
  entry: {
    bundle: './index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool : 'source-map',
  devServer : {
    contentBase: './public',
    port : 8080,
    hot: true,
    stats: { colors: true },
  }
}
