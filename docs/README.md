---
home: true
actionText: Get Started →
actionLink: /guide/
features:
- title: Fully Featured
  details: Minimal.
- title: Completely Customizable
  details: Enjoy.
- title: Zero Dependencies
  details: VuePress.
footer: MIT Licensed | Copyright © 2016-present Damian Dulisz
---

<!-- <div class="badges">
  <img src="https://img.shields.io/github/stars/shentao/vue-multiselect.svg?label=Stars">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat">
  <img src="https://img.shields.io/npm/dm/vue-multiselect.svg" alt="npm" data-canonical-src="https://img.shields.io/npm/dm/vue-multiselect.svg" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" alt="No Dependencies" data-canonical-src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" style="max-width: 100%;">
</div> -->

## Installation
### via npm

```bash
npm install vue-multiselect
# or
yarn add vue-multiselect
```

### via CDN
```html
<script src="https://unpkg.com/vue-multiselect@latest"></script>
<link rel="stylesheet" href="https://unpkg.com/vue-multiselect@latest/dist/vue-multiselect.min.css">
```

## Basic Usage
### via npm

```vue
<!-- Vue component -->
<template>
  <div>
    <VueMultiselect v-model="value" :options="options"></VueMultiselect>
  </div>
</template>

<script>
  import VueMultiselect from 'vue-multiselect'

  // register globally
  Vue.component('vue-multiselect', VueMultiselect)

  export default {
    // OR register locally
    components: { VueMultiselect },
    data () {
      return {
        value: null,
        options: ['list', 'of', 'options']
      }
    }
  }
</script>

<!-- Add Multiselect CSS. Can be added as a static asset or inside a component. -->
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  your styles
</style>
```
