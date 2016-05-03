export default {
  data () {
    return {
      search: '',
      isOpen: false,
      pointer: 0,
      value: [],
      loading: false
    }
  },
  props: {
    options: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selected: {
      required: true
    },
    label: {
      type: String,
      default: 'value'
    },
    searchable: {
      type: Boolean,
      default: true
    },
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    hideSelected: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: 'Select option'
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    allowEmpty: {
      type: Boolean,
      default: true
    },
    showLabels: {
      type: Boolean,
      default: true
    },
    onChange: {
      type: Function,
      default: false
    },
    onSearchChange: {
      type: Function,
      default: false
    },
    touched: {
      type: Boolean,
      default: false
    },
    resetAfter: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    }
  },
  created () {
    if (!this.selected) {
      this.$set('value', this.multiple ? [] : null)
    } else {
      this.$set('value', JSON.parse(JSON.stringify(this.selected)))
    }
    if (this.searchable && !this.multiple) {
      this.search = this.getOptionLabel(this.value)
    }
  },
  computed: {
    filteredOptions () {
      let options = this.hideSelected
        ? this.options.filter(this.isNotSelected)
        : this.options
      return this.$options.filters.filterBy(options, this.search)
    }
  },
  watch: {
    'value' () {
      if (this.onChange) {
        this.onChange(this.value)
      } else {
        this.$set('selected', this.value)
      }
      if (this.resetAfter) {
        this.$set('value', null)
        this.$set('search', null)
        this.$set('selected', null)
      }
    },
    'search' () {
      if (this.onSearchChange) {
        this.onSearchChange(this.search)
        this.loading = true
      }
    },
    'options' () {
      if (this.onSearchChange) {
        this.loading = false
      }
    }
  },
  methods: {
    isNotSelected (option) {
      return JSON.stringify(this.value).indexOf(JSON.stringify(option)) === -1
    },
    isSelected (option) {
      if (this.value && this.multiple) {
        return JSON.stringify(this.value).indexOf(JSON.stringify(option)) !== -1
      }
      return JSON.stringify(this.value) === JSON.stringify(option)
    },
    getOptionLabel (option) {
      if (typeof option === 'object' && option !== null) {
        if (this.label && option[this.label]) {
          return option[this.label]
        } else if (option.label) {
          return option.label
        }
      }
      return option
    },
    select (option) {
      if (this.multiple) {
        if (this.isSelected(option)) {
          this.removeElement(option)
        } else {
          this.value.push(option)
          if (this.clearOnSelect) { this.search = '' }
        }
      } else {
        if (this.isSelected(option)) {
          if (this.allowEmpty) {
            this.$set('value', null)
          }
        } else {
          this.$set('value', option)
        }
        if (this.closeOnSelect) {
          this.searchable
            ? this.$els.search.blur()
            : this.$el.blur()
        }
      }
    },
    removeElement (option) {
      if (this.allowEmpty || this.value.length > 1) {
        this.value.$remove(option)
      }
    },
    removeLastElement () {
      if (this.search.length === 0 && Array.isArray(this.value)) {
        this.removeElement(this.value[this.value.length - 1])
      }
    },
    activate () {
      if (this.isOpen) return

      this.isOpen = true
      if (this.searchable) {
        this.search = ''
        this.$els.search.focus()
      } else {
        this.$el.focus()
      }
    },
    deactivate () {
      if (!this.isOpen) return

      this.isOpen = false
      this.touched = true
      if (this.searchable) {
        this.$els.search.blur()
        this.search = this.multiple
          ? ''
          : this.getOptionLabel(this.value)
      } else {
        this.$el.blur()
      }
    },
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate()
    }
  }
}
