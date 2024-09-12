const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue-multiselect': path.resolve(__dirname, 'src/')
      }
    }
  }
}
