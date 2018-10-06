<template lang="html">
  <VueMultiselect
    v-model="value"
    :options="options"
    :custom-label="nameWithLang"
    placeholder="Select one"
    label="name"
    track-by="name"
  />
</template>

<script>
export default {
  data () {
    return {
      value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
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
