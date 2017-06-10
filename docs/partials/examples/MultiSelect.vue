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
    :preserve-search="true",
    placeholder="Pick some"
    label="name",
    track-by="name"
  )
    template(slot="tag", scope="props")
      span.custom__tag
        span {{ props.option.language }}
        span.custom__remove(@click="props.remove(props.option)") ❌
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

<style lang="sass">
.custom__tag
  display: inline-block
  padding: 2px 6px
  background: #ddd
  margin-right: 4px

.custom__remove
  padding: 3px
</style>
