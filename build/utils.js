const path  = require('path')
const multi = require('multi-loader')

const config = require('../config')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.docs.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

const processedExtractor = new ExtractTextPlugin({
  filename: 'vue-multiselect.min.css'
})

const rawExtractor = new ExtractTextPlugin({
  filename: 'vue-multiselect.scss'
})

exports.processedExtractor = processedExtractor
exports.rawExtractor = rawExtractor

exports.cssLoaders = function (options) {
  options = options || {}

  // generate loader string to be used with extract text plugin
  function generateLoaders () {
    // Extract CSS when that option is specified
    // (which is the case during production build)
    const sourceLoaders = ['css-loader', 'sass-loader'].map(loader => loader + (options.sourceMap ? '?sourceMap' : ''))

    if (options.extract) {
      return rawExtractor.extract({
        use: 'raw-loader',
        fallback: 'vue-style-loader'
      })
      // return multi([
      //   processedExtractor.extract({
      //     use: sourceLoaders,
      //     fallback: 'vue-style-loader'
      //   }),
      //   rawExtractor.extract({
      //     use: 'raw-loader',
      //     fallback: 'vue-style-loader'
      //   })
      // ])
    } else {
      return ['vue-style-loader', sourceLoaders].join('!')
    }
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    scss: generateLoaders(['css', 'sass'])
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output  = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader
    })
  }
  return output
}
