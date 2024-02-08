import vue from '@vitejs/plugin-vue'
const path = require('path')

export default {
  plugins: [vue()],
  define: {
    '__APP_VERSION__': JSON.stringify(process.env.npm_package_version)
  },
  resolve: {
    alias: {
      'vue-multiselect': path.resolve(__dirname, '../src')
    }
  }
}
