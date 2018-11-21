<template lang="html">
  <MultiselectCore
    v-bind="$props"
    v-on="$listeners"
  >
    <div
      slot-scope="{
        filteredOptions,
        updateSearch,
        handleKeydown,
        select,
        removeElement,
        value
      }"
      style="position: relative;"
    >
      <label>Search</label>
      <MultiselectInput
        v-bind="{ handleKeydown, updateSearch }"
        @enter="selectAllVisible(filteredOptions, value)"
        class="input"
        computedPlaceholder="Press enter to select all visible results"
      />
      <button class="button" @click="selectAllVisible(filteredOptions, value)">Select all</button>
    </div>
  </MultiselectCore>
</template>

<script>
import MultiselectCore from '../../../../src/MultiselectCore.js'
import MultiselectOptions from '../../../../src/MultiselectOptions.vue'
import MultiselectInput from '../../../../src/MultiselectInput.vue'
import MultiselectWrapper from '../../../../src/MultiselectWrapper.vue'
import MultiselectValue from '../../../../src/MultiselectValue.vue'
import multiselectCorePropsMixin from '../../../../src/multiselectCorePropsMixin'

export default {
  inheritAttrs: false,
  mixins: [multiselectCorePropsMixin],
  components: {
    MultiselectCore,
    MultiselectInput
  },
  methods: {
    selectAllVisible (options, value) {
      this.$emit('input', value.concat(options))
    }
  }
}
</script>

<style lang="stylus" scoped>
.input
  padding: 7px 15px
  border: 1px solid #f0f0f0

table
  width: 50%
  flex-grow: 0
  flex-shrink: 0
</style>
