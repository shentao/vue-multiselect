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
        removeElement
      }"
      style="position: relative;"
    >
      <label>Search</label>
      <MultiselectInput
        v-bind="{ handleKeydown, updateSearch }"
        class="input"
        computedPlaceholder="Search libraries"
      />
      <div style="display: flex;">
        <table>
          <thead>Available</thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr v-for="record of filteredOptions">
            <td>{{ record.id }}</td>
            <td>{{ record.name }}</td>
            <td>{{ record.desc }}</td>
            <td>
              <button type="button" @click="select(record)">
                Select
              </button>
            </td>
          </tr>
        </table>
        <table>
          <thead>Selected</thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
          <tr v-for="record of value">
            <td>{{ record.id }}</td>
            <td>{{ record.name }}</td>
            <td>{{ record.desc }}</td>
            <td>
              <button type="button" @click="removeElement(record)">
                Remove
              </button>
            </td>
          </tr>
        </table>
      </div>
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
