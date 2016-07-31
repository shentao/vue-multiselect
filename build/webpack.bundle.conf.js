const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const base = require('./webpack.base.conf')
const config = require('../config')

base.entry = {
  lib: './src/'
}

base.output = {
  path: config.bundle.assetsRoot,
  publicPath: config.bundle.assetsPublicPath,
  filename: 'vue-multiselect.min.js',
  library: 'VueMultiselect',
  libraryTarget: 'umd'
}

var webpackConfig = Object.assign({}, base)

webpackConfig.devtool = '#source-map'
webpackConfig.plugins = (webpackConfig.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new CopyWebpackPlugin([
    { from: './src/' }
  ], {
    ignore: ['.DS_Store', 'index.js']
  })
])

module.exports = webpackConfig
