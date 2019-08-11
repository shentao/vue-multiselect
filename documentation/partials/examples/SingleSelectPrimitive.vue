<template lang="pug">
div
  label.typo__label Single select
  multiselect(
    v-model="value",
    :options="options",
    :searchable="false",
    :close-on-select="false",
    :show-labels="false"
    placeholder="Pick a value"
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
      value: '',
      options: ['Select option', 'options', 'selected', 'multiple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
    }
  }
}
</script>
