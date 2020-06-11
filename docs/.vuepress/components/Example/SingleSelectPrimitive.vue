<template>
  <VueMultiselect
    v-model="value"
    :options="options"
    :searchable="false"
    :multiple="false"
    :close-on-select="false"
    :show-labels="false"
    placeholder="Pick a value"
  />
</template>

<script>
export default {
  data () {
    return {
      value: [],
      options: [
        'options',
        'selected',
        'multiple',
        'label',
        'searchable',
        'clearOnSelect',
        'hideSelected',
        'maxHeight',
        'allowEmpty',
        'showLabels',
        'onChange',
        'touched'
      ]
    }
  }
}
</script>
