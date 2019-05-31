const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './sandbox/entry.jsx',
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devtool: devMode ? 'source-map' : '',
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Sandbox',
      template: './sandbox/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  mode: devMode ? 'development' : 'production'
}
