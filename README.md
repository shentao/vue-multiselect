# vue-multiselect

## Documentation

> Documentation for v3.0.0 is the same as for v2.x as it is mostly backward compatible.

Visit: [vue-multiselect.js.org](https://vue-multiselect.js.org/#sub-getting-started)

## Sponsors

### Gold

<p align="center">
  <a href="https://vuejs.amsterdam/?utm_source=newsletter&utm_medium=logo&utm_campaign=vuejs-newsletter" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/793583797454503976/793583831369646120/vuejsamsterdam.png" alt="Vuejs Amsterdam" width="380px">
  </a>
</p>
<p align="center">
  <a href="https://theroadtoenterprise.com/?utm_source=newsletter&utm_medium=logo&utm_campaign=vuejs-newsletter" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/793583797454503976/809062891420123166/logo.png" alt="Vue - The Road To Enterprise" width="380px">
  </a>
</p>

### Silver

<p align="center">
  <a href="https://www.storyblok.com/developers?utm_source=newsletter&utm_medium=logo&utm_campaign=vuejs-newsletter" target="_blank">
    <img src="https://a.storyblok.com/f/51376/3856x824/fea44d52a9/colored-full.png" alt="Storyblok" width="240px">
  </a>
</p>

### Bronze

<p align="center">
  <a href="https://www.vuemastery.com/" target="_blank">
    <img src="https://cdn.discordapp.com/attachments/258614093362102272/557267759130607630/Vue-Mastery-Big.png" alt="Vue Mastery logo" width="180px">
  </a>
</p>

## Install & basic usage

```bash
npm install vue-multiselect@next
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
  <span slot="noResult">
    Oops! No elements found. Consider changing the search query.
  </span>
</VueMultiselect>
```

``` javascript
methods: {
  asyncFind (query) {
    this.countries = findService(query)
  }
}
```

## Special Thanks

Thanks to Matt Elen for contributing this version!

> A Vue 3 upgrade of [@shentao's](https://github.com/shentao) [vue-mulitselect](https://github.com/shentao/vue-multiselect) component. The idea is that when you upgrade to Vue 3, you can swap the two components out, and everything should simply work. Feel free to check out our story of how we upgraded our product to Vue 3 on our blog at  [suade.org](https://suade.org/dev/a-products-vue-3-migration-a-real-life-story/)

## Contributing

``` bash
# distribution build with minification
npm run bundle

# run unit tests
npm run test

```
