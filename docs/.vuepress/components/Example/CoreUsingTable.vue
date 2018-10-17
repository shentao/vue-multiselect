<template lang="html">
  <TableSelect
    v-model="value"
    :options="[
      { id: 1, name: 'Vue.js', desc: 'The Progressive Framework' },
      { id: 2, name: 'Vue-Multiselect', desc: 'Multiselect Dropdown Library' },
      { id: 3, name: 'Vue-Global-Events', desc: 'Global Events Handling' },
      { id: 4, name: 'Vuelidate', desc: 'Valdiation library' }
    ]"
    track-by="id"
    :multiple="true"
    :custom-label="mergeLabels"
    :hide-selected="true"
  />
</template>

<script>
import TableSelect from './TableSelect.vue'

export default {
  components: {
    TableSelect
  },
  data () {
    return {
      value: []
    }
  },
  methods: {
    mergeLabels (o) {
      return `${o.id} ${o.name} ${o.desc}`
    }
  }
}
</script>

<style lang="css">
</style>
