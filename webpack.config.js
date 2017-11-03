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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
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
