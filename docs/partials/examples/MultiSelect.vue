<template lang="pug">
div
  label.typo__label Simple select / dropdown
  multiselect(
    v-model="value",
    :options="options",
    :multiple="true",
    :close-on-select="false",
    :clear-on-select="false",
    :hide-selected="true",
    placeholder="Pick some"
    label="name",
    track-by="name"
  )
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
      value: [
        { name: 'Vue.js', language: 'JavaScript' }
      ],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
