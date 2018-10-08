<template lang="html">
  <VueMultiselect
    v-model="value"
    deselect-label="Can't remove this value"
    track-by="name"
    label="name"
    placeholder="Select one"
    :options="options"
    :searchable="false"
    :allow-empty="false"
  >
    <template slot="singleLabel" slot-scope="{ option }">
      {{ option.name + ' | ' + option.language }}
    </template>
    <template slot="option" slot-scope="{ option }">
      {{ option.name + ' | ' + option.language }}
    </template>
  </VueMultiselect>
</template>

<script>
export default {
  data () {
    return {
      value: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
}
</script>
