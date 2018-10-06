<template lang="html">
  <VueMultiselect
    v-model="value"
    :options="options"
    :multiple="true"
    group-values="libs"
    group-label="language"
    :group-select="true"
    placeholder="Type to search"
    track-by="name"
    label="name"
  >
    <span slot="noResult">
      | Oops! No options found. Consider changing the search query.
    </span>
  </VueMultiselect>
</template>

<script>
export default {
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
