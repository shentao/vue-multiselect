<template lang="pug">
div
  label.typo__label Groups
  multiselect(
    v-model="value",
    :options="options",
    :multiple="true",
    group-values="libs",
    group-label="language",
    :group-select="true",
    placeholder="Type to search",
    track-by="name",
    label="name",
  )
    span(slot="noResult").
      Oops! No elements found. Consider changing the search query.
  pre.language-json
    code.
      {{ value  }}
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: [
        {
          language: 'Javascript',
          libs: [
            { name: 'Vue.js', category: 'Front-end' },
            { name: 'Adonis', category: 'Backend' }
          ]
        },
        {
          language: 'Ruby',
          libs: [
            { name: 'Rails', category: 'Backend' },
            { name: 'Sinatra', category: 'Backend' }
          ]
        },
        {
          language: 'Other',
          libs: [
            { name: 'Laravel', category: 'Backend' },
            { name: 'Phoenix', category: 'Backend' }
          ]
        }
      ],
      value: []
    }
  }
}
</script>

<style lang="css">
</style>
