import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// Library build configuration. Produces:
//   dist/vue-multiselect.esm.js  (ES module, used by bundlers)
//   dist/vue-multiselect.cjs     (CommonJS, used by `require()`)
//   dist/vue-multiselect.umd.js  (UMD build, `window['vue-multiselect']` global, external `vue`)
//   dist/vue-multiselect.css     (extracted styles)
//   dist/index.d.ts (+ mirrored .d.ts files)  (generated types)
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src'],
      tsconfigPath: './tsconfig.json',
      staticImport: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
      name: 'vue-multiselect',
      formats: ['es', 'umd', 'cjs'],
      fileName: (format) => {
        if (format === 'es') return 'vue-multiselect.esm.js'
        if (format === 'cjs') return 'vue-multiselect.cjs'
        return 'vue-multiselect.umd.js'
      },
      cssFileName: 'vue-multiselect'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
