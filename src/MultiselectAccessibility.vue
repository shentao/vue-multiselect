<template>
  <div class="multiselect__visually-hidden">
    <div v-if="isFocused" aria-live="polite">
      {{ currentAnnouncement }}
    </div>
    <div v-if="tmpAnnouncement.length" aria-live="assertive">
      {{ tmpAnnouncement.join(', ') + '.' }}
    </div>
  </div>
</template>

<script>
const DEFAULT_MESSAGES = {
  menu: ({ disabled, currentlyFocusedElementLabel, valueLabels }) => `
    ${ valueLabels.length ? 'Currently selected options: ' + valueLabels + '. ' : '' }
    Use Up and Down arrow keys to browse options${disabled ? '' : ', press Enter to select the currently focused option'}, press Escape to exit the menu.
  `,
  input: ({ focusedElement, searchable, multiple, options, pointer }) => `
    Option ${focusedElement} is focused,
    option ${pointer + 1} of ${options.length},
    ${searchable ? ', type to refine list' : ''}
    ${multiple ? ', press left to focus selected values' : ''}
  `
}

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    pointer: {
      type: Number,
      required: true
    },
    value: {
      type: null,
      default: () => []
    },
    isFocused: {
      type: Boolean,
      default: false
    },
    isOpen: {
      type: Boolean,
      required: true
    },
    searchable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    a11yMessages: {
      type: Function,
      default: () => ({})
    },
    getOptionLabel: {
      type: Function,
      default: () => ''
    }
  },
  data () {
    return {
      tmpAnnouncement: []
    }
  },
  computed: {
    currentlyFocusedElement () {
      return this.options[this.pointer]
    },
    currentlyFocusedElementLabel () {
      return this.getOptionLabel(this.currentlyFocusedElement)
    },
    selectedElementAnnouncement () {
      return `Option ${this.currentlyFocusedElementLabel} is focused`
    },
    currentValueAnnouncement () {
      const valueLabels = this.value.map(this.getOptionLabel)
      return `Selected options: ${valueLabels.join(', ')}`
    },
    currentAnnouncement () {
      const valueLabels = this.value.map(this.getOptionLabel)

      const messages = {
        ...DEFAULT_MESSAGES,
        ...this.a11yMessages
      }
      const status = this.isOpen
        ? 'input'
        : 'menu'

      return messages[status]({
        searchable: this.searchable,
        multiple: this.multiple,
        disabled: this.disabled,
        options: this.options,
        pointer: this.pointer,
        focusedElement: this.currentlyFocusedElementLabel,
        valueLabels
      })
    }
  },
  watch: {
    value (newValue, oldValue) {
      const newValueLabels = newValue.map(this.getOptionLabel)
      const oldValueLabels = oldValue.map(this.getOptionLabel)
      let toRemove = 0

      if (newValueLabels.length > oldValueLabels.length) {
        const addedValues = newValueLabels.filter(label => !oldValueLabels.includes(label)).map(label => `${label} added`)
        this.tmpAnnouncement.push(...addedValues)
        toRemove = addedValues.length

      } else if (newValueLabels.length < oldValueLabels.length) {
        const removedValues = oldValueLabels.filter(label => !newValueLabels.includes(label)).map(label => `${label} removed`)
        this.tmpAnnouncement.push(...removedValues)
        toRemove = removedValues.length
      } else if (newValueLabels.length === 1 && oldValueLabels.length === 1){
        this.tmpAnnouncement.push(...newValueLabels).map(label => `${label} selected`)
        toRemove = 1
      }

      setTimeout(() => {
        this.tmpAnnouncement.splice(0, toRemove)
      }, 1500);
    }
  }
}
</script>

<style>
.multiselect__visually-hidden {
  font-size: 30px;
  position: absolute;
  top: -100px;
  left: 400px;
}
</style>
