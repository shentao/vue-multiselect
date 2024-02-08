<template>
  <div><label class="typo__label">Single select</label>
    <multiselect v-model="value" :options="options" :searchable="false" :close-on-select="false" :show-labels="false"
                 placeholder="Pick a value"></multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
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
