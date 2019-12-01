const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'lib',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devtool: devMode ? 'source-map' : '',
  mode: devMode ? 'development' : 'production'
}
