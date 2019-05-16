<template lang="pug">
div
  label.typo__label Select with search
  multiselect(
    v-model="value",
    :options="options",
    :custom-label="nameWithLang"
    placeholder="Select one",
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
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
        { name: 'Frac Sample Number One', language: 'Frac Sample Number One' },
        { name: 'Sample Frac One Number', language: 'Sample Frac One Number' },
        { name: 'Frac Sample', language: 'Frac Sample' },
        { name: 'Sample Number One', language: 'Sample Number One' },
      ]
    }
  },
  methods: {
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    }
  }
}
</script>

<style lang="css">
</style>
