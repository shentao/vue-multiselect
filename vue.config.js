const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'vue3-multiselect': path.resolve(__dirname, 'src/')
      }
    }
  }
}
