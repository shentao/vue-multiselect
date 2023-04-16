# vue-multiselect ![Build Status](https://circleci.com/gh/shentao/vue-multiselect/tree/2.0.svg?style=shield&circle-token=5c931ff28fd12587610f835472becdd514d09cef)[![Codecov branch](https://img.shields.io/codecov/c/github/shentao/vue-multiselect/2.0.svg)](https://codecov.io/gh/shentao/vue-multiselect/branch/2.0)[![npm](https://img.shields.io/npm/v/vue-multiselect.svg)](https://www.npmjs.com/package/vue-multiselect)
Probably the most complete *selecting* solution for Vue.js 2.0, without jQuery.

### Vue 3.0 Support
For Vue 3.0 compatible version see [`next`](https://github.com/shentao/vue-multiselect/tree/next) branch.

<a href="https://vue-multiselect.js.org/">
  <img src="/multiselect-screen-203.png" alt="Vue-Multiselect Screen">
</a>

## Documentation
Visit: [vue-multiselect.js.org](https://vue-multiselect.js.org/#sub-getting-started)

## Sponsors

<p align="center">
  <a href="https://getform.io/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/1002927810710605875/1034915542596845728/getform.png" alt="Get Form" width="240px">
  </a>
</p>

<p align="center">
  <a href="https://suade.org/" target="_blank">
    <img src="https://tinyurl.com/suadelogo" alt="Suade Labs" width="200px">
  </a>
</p>

<p align="center">
  <a href="https://www.storyblok.com/developers?utm_source=newsletter&utm_medium=logo&utm_campaign=vuejs-newsletter" target="_blank">
    <img src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png" alt="Storyblok" width="240px">
  </a>
</p>

<p align="center">
  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267759130607630/Vue-Mastery-Big.png" alt="Vue Mastery logo" width="180px">
  </a>
</p>

## Features & characteristics:
* NO dependencies
* Single select
* Multiple select
* Tagging
* Dropdowns
* Filtering
* Search with suggestions
* Logic split into mixins
* Basic component and support for custom components
* V-model support
* Vuex support
* Async options support
* \> 95% test coverage
* Fully configurable (see props list below)

## Breaking changes:
* Instead of Vue.partial for custom option templates you can use a custom render function.
* The `:key` props has changed to `:track-by`, due to conflicts with Vue 2.0.
* Support for `v-model`
* `@update` has changed to `@input` to also work with v-model
* `:selected` has changed to `:value` for the same reason
* Browserify users: if you wish to import `.vue` files, please add `vueify` transform.

## Install & basic usage

```bash
npm install vue-multiselect
```

```vue
<template>
  <div>
    <multiselect
      v-model="selected"
      :options="options">
    </multiselect>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    components: { Multiselect },
    data () {
      return {
        selected: null,
        options: ['list', 'of', 'options']
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
```

## JSFiddle

[Example JSFiddle](https://jsfiddle.net/mattelen/8cyt3hrn/5/) – Use this for issue reproduction.

## Examples
in jade-lang/pug-lang

### Single select / dropdown
``` jade
multiselect(
  :value="value",
  :options="source",
  :searchable="false",
  :close-on-select="false",
  :allow-empty="false",
  @input="updateSelected",
  label="name",
  placeholder="Select one",
  track-by="name"
)
```

### Single select with search
``` jade
multiselect(
  v-model="value",
  :options="source",
  :close-on-select="true",
  :clear-on-select="false",
  placeholder="Select one",
  label="name",
  track-by="name"
)
```

### Multiple select with search
``` jade
multiselect(
  v-model="multiValue",
  :options="source",
  :multiple="true",
  :close-on-select="true",
  placeholder="Pick some",
  label="name",
  track-by="name"
)
```

### Tagging
with `@tag` event
``` jade
multiselect(
  v-model="taggingSelected",
  :options="taggingOptions",
  :multiple="true",
  :taggable="true",
  @tag="addTag",
  tag-placeholder="Add this as new tag",
  placeholder="Type to search or add tag",
  label="name",
  track-by="code"
)
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
``` jade
multiselect(
  v-model="selectedCountries",
  :options="countries",
  :multiple="multiple",
  :searchable="searchable",
  @search-change="asyncFind",
  placeholder="Type to search",
  label="name"
  track-by="code"
)
  span(slot="noResult").
    Oops! No elements found. Consider changing the search query.
```

``` javascript
methods: {
  asyncFind (query) {
    this.countries = findService(query)
  }
}
```

## Contributing

``` bash
# serve with hot reload at localhost:8080
npm run dev

# distribution build with minification
npm run bundle

# build the documentation into docs
npm run docs

# run unit tests
npm run test

# run unit tests watch
npm run unit

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
