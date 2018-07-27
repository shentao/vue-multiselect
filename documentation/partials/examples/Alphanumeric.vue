<template lang="pug">
div
  label.typo__label Use your keyboard to select an item
  multiselect(
    v-model="value",
    track-by="name",
    label="name",
    placeholder="Select one using your keyboard",
    :options="options",
    :searchable="false",
    :allow-empty="false",
    :enable-alphanumeric-selection="true"
  )
    template(slot="singleLabel", slot-scope="{ option }")
      | {{ option.name }}
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
      value: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: '3. Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: '6. Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
