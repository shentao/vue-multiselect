# Changelog

## 4.0.0-alpha.0

Full rewrite in **TypeScript** using the **Composition API** (Vue 3.5+) and a modernized toolchain. Component behaviour, UI, props, events and slots are unchanged.

### Highlights

- Rewritten from JavaScript + Options API mixins to TypeScript + Composition API (`<script setup>`), with the logic extracted into the `useMultiselect` and `usePointer` composables.
- Build migrated from Vue CLI + Rollup to **Vite library mode** (`vite-plugin-dts` for type generation).
- Tests migrated from Jest to **Vitest**.
- Linting migrated to **ESLint flat config** (`typescript-eslint` + `eslint-plugin-vue`).
- All dependencies updated to their latest supported versions (Vue 3.5, Vite 8, TypeScript 6, Vitest 4, ESLint 10, shiki 4 for docs).
- Types are now generated from source (`dist/index.d.ts`); the hand-written `index.d.ts` was removed.

### Breaking changes

- **Removed the `multiselectMixin` and `pointerMixin` exports.** Use the `useMultiselect` / `usePointer` composables instead (see the "Migration to v4" section in the README). The default `Multiselect` component and its public API are unchanged.
- **`dist` output filenames changed.** The build now emits `vue-multiselect.esm.js` (ESM), `vue-multiselect.cjs` (CommonJS, the successor to the removed `*.common.js`; `main`/`require` resolve here), `vue-multiselect.umd.js` (UMD, for `<script>`/CDN) and `vue-multiselect.css`. The `*.common.js`, `*.ssr.js`, `*.min.css`, `*.esm.css` and `*.ssr.css` files are no longer produced.
- **Minimum requirements:** Vue `^3.5.0` and Node `>= 20.19`.
