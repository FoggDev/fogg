const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './sandbox/entry.tsx',
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]_[local]_[hash:base64]'
              },
              sourceMap: true
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.scss', '.js', '.jsx', '.svg']
  },
  devtool: devMode ? 'source-map' : '',
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
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
