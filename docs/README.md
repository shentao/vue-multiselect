# Hello VuePress


### The most complete selecting solution for <a href="http://vuejs.org" target="_BLANK" class="typo__link">Vue.js</a>
<div class="badges">
  <img src="https://img.shields.io/github/stars/shentao/vue-multiselect.svg?label=Stars">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat">
  <img src="https://img.shields.io/npm/dm/vue-multiselect.svg" alt="npm" data-canonical-src="https://img.shields.io/npm/dm/vue-multiselect.svg" style="max-width: 100%;">
  <img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" alt="No Dependencies" data-canonical-src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" style="max-width: 100%;">
</div>

## Single Select

The basic single select / dropdown doesn’t require much configuration.

The `options` prop must be an `Array`.

#### Optional configuration flags:
- `:searchable="false"` – disables the search functionality
- `:close-on-select="false"` – the dropdown stays open after selecting an option
- `:show-labels="false"` – the highlighted option doesn’t have a label on it

<SplitTab>
  <Example-Landing slot="example"/>
  <<< @/docs/.vuepress/components/Example/Landing.vue
</SplitTab>
