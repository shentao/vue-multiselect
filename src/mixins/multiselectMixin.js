module.exports = {
  data () {
    return {
      search: '',
      isOpen: false,
      value: [],
      loading: false
    }
  },
  props: {
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
      type: Array,
      required: true
    },
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * Required. Presets the selected options. Add `.sync` to
     * update parent value. If this.onChange callback is present,
     * this will not update. In that case, the parent is responsible
     * for updating this value.
     * @type {Object||Array||String||Integer}
     */
    selected: {
      required: true
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    key: {
      type: String,
      default: 'id'
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String,
      default: 'label'
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    limit: {
      type: Number,
      default: 99999
    },
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
      type: Boolean,
      default: true
    },
    /**
     * Clear the search input after select()
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
      type: Boolean,
      default: true
    },
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
      type: Boolean,
      default: false
    },
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
      type: String,
      default: 'Select option'
    },
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
      type: Number,
      default: 300
    },
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
      type: Boolean,
      default: true
    },
    /**
     * Callback function to call after this.value changes
     * @callback onChange
     * @default false
     * @param {Array||Object||String||Integer} Current this.value
     * @param {Integer} $index of current selection
     * @type {Function}
     */
    onChange: {
      type: Function,
      default: false
    },
    /**
     * Callback function to call after this.search changes
     * @callback onSearchChange
     * @default false
     * @param {String} Pass current search String
     * @type {Function}
     */
    onSearchChange: {
      type: Function,
      default: false
    },
    /**
     * Value that indicates if the dropdown has been used.
     * Useful for validation.
     * @default false
     * @type {Boolean}
     */
    touched: {
      type: Boolean,
      default: false
    },
    /**
     * Reset this.value, this.search, this.selected after this.value changes.
     * Useful if want to create a stateless dropdown, that fires the this.onChange
     * callback function with different params.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
      type: Boolean,
      default: false
    },
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
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
    },
    allKeys () {
      return this.value.map((element) => {
        return element[this.key]
      })
    },
    visibleValue () {
      return this.multiple
        ? this.value.slice(0, this.limit)
        : this.value
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
      if (!this.multiple && this.searchable && !this.clearOnSelect) {
        this.search = this.getOptionLabel(this.value)
      }
    },
    'search' () {
      if (this.onSearchChange) {
        this.onSearchChange(this.search)
        this.loading = true
      }
    },
    'options' () {
      this.onSearchChange && (this.loading = false)
    },
    'selected' (newVal, oldVal) {
      newVal !== oldVal && (this.value = this.selected)
    }
  },
  methods: {
    /**
     * Finds out if the given element is NOT already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is not selected
     */
    isNotSelected (option) {
      if (!this.value) return true
      if (typeof option === 'object' && option !== null) {
        if (this.value && this.multiple) {
          return this.allKeys.indexOf(option[this.key]) === -1
        } else {
          return this.value[this.key] !== option[this.key]
        }
      } else {
        if (this.value && this.multiple) {
          return this.value.indexOf(option) === -1
        } else {
          return this.value !== option
        }
      }
    },
    /**
     * Returns the option[this.label]
     * if option is Object. Otherwise check for option.label.
     * If non is found, return entrie option.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
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
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     */
    select (option) {
      if (this.multiple) {
        if (!this.isNotSelected(option)) {
          this.removeElement(option)
        } else {
          this.value.push(option)
          if (this.clearOnSelect) { this.search = '' }
        }
      } else {
        this.$set('value',
          !this.isNotSelected(option) && this.allowEmpty
            ? null
            : option
        )
        if (this.closeOnSelect) {
          this.searchable
            ? this.$els.search.blur()
            : this.$el.blur()
        }
      }
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement (option) {
      if (this.allowEmpty || this.value.length > 1) {
        if (this.multiple && typeof option === 'object') {
          const index = this.allKeys.indexOf(option[this.key])
          this.value.splice(index, 1)
        } else {
          this.value.$remove(option)
        }
      }
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.value (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.value)) {
        this.removeElement(this.value[this.value.length - 1])
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      if (!this.isOpen) {
        this.isOpen = true
        /* istanbul ignore else  */
        if (this.searchable) {
          this.search = ''
          this.$els.search.focus()
        } else {
          this.$el.focus()
        }
      }
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      if (this.isOpen) {
        this.isOpen = false
        this.touched = true
        /* istanbul ignore else  */
        if (this.searchable) {
          this.$els.search.blur()
          this.search = this.multiple
          ? ''
          : this.getOptionLabel(this.value)
        } else {
          this.$el.blur()
        }
      }
    },
    /**
     * Call this.activate() or this.deactivate()
     * depending on this.isOpen value.
     *
     * @fires this#activate || this#deactivate
     * @property {Boolean} isOpen indicates if dropdown is open
     */
    toggle () {
      this.isOpen
        ? this.deactivate()
        : this.activate()
    }
  }
}
