const webpack = require('webpack')
const base = require('./webpack.base.conf')
const config = require('../config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack4')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.bundle.env

base.entry = {
  'VueMultiselect': './src/index.js'
}

const webpackConfig = merge(base, {
  mode: process.env.NODE_ENV,
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicPath,
    filename: 'vue-multiselect.min.js',
    library: 'VueMultiselect',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  devtool: config.bundle.productionSourceMap ? '#source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: 'vue-multiselect.min.css'
    }),
    new VueLoaderPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano')
    })
  ]
})

module.exports = webpackConfig
