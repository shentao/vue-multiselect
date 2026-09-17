# vue-multiselect

## v4 (alpha)

> **`4.0.0-alpha.0`** is a full rewrite in **TypeScript** using the **Composition API** (Vue 3.5+). Component behaviour, props, events, slots and styling are unchanged — but the internal `multiselectMixin` / `pointerMixin` exports have been **replaced by composables**. See [Migration to v4](#migration-to-v4-alpha) below. This is a pre-release; install with `npm install vue-multiselect@alpha`.

## Documentation for version 3 (Compatible with Vue 3)

Documentation for v3.0.0 is almost the same as for v2.x as it is mostly backward compatible. For the full docs for v3 and previous versions, check out: [vue-multiselect.js.org](https://vue-multiselect.js.org/#sub-getting-started)

## Sponsors

<p align="center">
  <a href="https://getform.io/" target="_blank">
    <img src="./svg/getform.svg" alt="GetForm Logo">
  </a>
</p>

<p align="center">
  <a href="https://suade.org/" target="_blank">
    <img src="./svg/suade.svg" alt="Suade Logo">
  </a>
</p>

<p align="center">
  <a href="https://www.storyblok.com/developers?utm_source=newsletter&utm_medium=logo&utm_campaign=vuejs-newsletter" target="_blank">
    <img src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png" alt="Storyblok" width="240px">
  </a>
</p>

<p align="center">
  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="./svg/vuemastery.svg" alt="Vue Mastery Logo">
  </a>
</p>

## Features & characteristics:
* Vue 3 Compatible
* NO dependencies
* Single select
* Multiple select
* Tagging
* Dropdowns
* Filtering
* Search with suggestions
* Logic split into composables
* Basic component and support for custom components
* V-model support
* Vuex support
* Async options support
* Fully configurable (see props list below)


## Install & basic usage

```bash
npm install vue-multiselect
```

```vue
<template>
  <div>
    <VueMultiselect
      v-model="selected"
      :options="options">
    </VueMultiselect>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
```

## JSFiddle

[Example JSFiddle](https://jsfiddle.net/mattelen/8cyt3hrn/5/) – Use this for issue reproduction.

## Examples

### Single select / dropdown
```vue
<VueMultiselect
  :model-value="value"
  :options="source"
  :searchable="false"
  :close-on-select="false"
  :allow-empty="false"
  @update:model-value="updateSelected"
  label="name"
  placeholder="Select one"
  track-by="name"
/>
```

### Single select with search
```vue
<VueMultiselect
  v-model="value"
  :options="source"
  :close-on-select="true"
  :clear-on-select="false"
  placeholder="Select one"
  label="name"
  track-by="name"
/>
```

### Multiple select with search
```vue
<VueMultiselect
  v-model="multiValue"
  :options="source"
  :multiple="true"
  :close-on-select="true"
  placeholder="Pick some"
  label="name"
  track-by="name"
/>
```

### Tagging
with `@tag` event
```vue
<VueMultiselect
  v-model="taggingSelected"
  :options="taggingOptions"
  :multiple="true"
  :taggable="true"
  @tag="addTag"
  tag-placeholder="Add this as new tag"
  placeholder="Type to search or add tag"
  label="name"
  track-by="code"
/>
```

``` javascript

addTag (newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  this.taggingOptions.push(tag)
  this.taggingSelected.push(tag)
},
```

### Asynchronous dropdown
```vue
<VueMultiselect
  v-model="selectedCountries"
  :options="countries"
  :multiple="multiple"
  :searchable="searchable"
  @search-change="asyncFind"
  placeholder="Type to search"
  label="name"
  track-by="code"
>
  <template #noResult>
    Oops! No elements found. Consider changing the search query.
  </template>
</VueMultiselect>
```

``` javascript
methods: {
  asyncFind (query) {
    this.countries = findService(query)
  }
}
```

## Migration to v4 (alpha)

v4 is a TypeScript + Composition API rewrite. For the vast majority of users nothing changes — the component, its props, events, slots and CSS are identical:

```vue
<script setup>
import VueMultiselect from 'vue-multiselect'
</script>
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
```

### Breaking changes

- **`multiselectMixin` / `pointerMixin` exports were removed.** Vue [no longer recommends mixins](https://vuejs.org/guide/reusability/composables.html#vs-mixins); they are replaced by composables. If you built a custom-templated component on top of the mixins, use `useMultiselect` / `usePointer` instead:

  ```vue
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useMultiselect, usePointer, multiselectProps } from 'vue-multiselect'

  // Reuse the same prop schema (or define your own)
  const props = defineProps(multiselectProps)
  const emit = defineEmits([
    'open', 'search-change', 'close', 'select', 'update:modelValue', 'remove', 'tag'
  ])

  const root = ref(null)
  const searchInput = ref(null)
  const list = ref(null)

  // `useMultiselect` returns all state + methods, including the pointer API.
  const ms = useMultiselect(props, emit, { root, search: searchInput, list })
  // `ms.filteredOptions`, `ms.select`, `ms.removeElement`, `ms.activate`, `ms.pointerForward`, ...
  </script>

  <template>
    <!-- your own markup + styling, driven by `ms.*` -->
  </template>
  ```

  Options API users can call the composable inside `setup()` and return its bindings.

- **`dist` filenames.** The build now emits `dist/vue-multiselect.esm.js` (ESM, for bundlers), `dist/vue-multiselect.cjs` (CommonJS, for `require()`), `dist/vue-multiselect.umd.js` (UMD, for `<script>`/CDN) and `dist/vue-multiselect.css`. The old `*.common.js`, `*.ssr.js`, `*.min.css` / `*.esm.css` / `*.ssr.css` variants are gone; import `vue-multiselect/dist/vue-multiselect.css` for styles. The UMD CDN global remains `window['vue-multiselect']` (use `window['vue-multiselect'].default` for the component).
- **Types** are now generated from source (`dist/index.d.ts`) instead of the hand-written `index.d.ts`.

## Special Thanks

Thanks to Matt Elen for contributing this version!

> A Vue 3 upgrade of [@shentao's](https://github.com/shentao) [vue-mulitselect](https://github.com/shentao/vue-multiselect) component. The idea is that when you upgrade to Vue 3, you can swap the two components out, and everything should simply work. Feel free to check out our story of how we upgraded our product to Vue 3 on our blog at  [suade.org](https://suade.org/a-products-vue-3-migration-a-real-life-story/)

## Contributing

``` bash
# lint
npm run lint

# type-check
npm run typecheck

# run unit tests (Vitest)
npm run test

# distribution build (Vite library mode)
npm run build

# lint + typecheck + test + build
npm run finish

# run the documentation site locally
npm run dev
```
