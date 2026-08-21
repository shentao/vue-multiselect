import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  build: {
    outDir: '../docs/'
  },
  base: '',
  resolve: {
    alias: {
      'vue-multiselect': fileURLToPath(new URL('../src', import.meta.url))
    }
  }
})
