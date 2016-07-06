// Copied from Vuex’s util.js
function deepClone (obj) {
  if (Array.isArray(obj)) {
    return obj.map(deepClone)
  } else if (obj && typeof obj === 'object') {
    var cloned = {}
    var keys = Object.keys(obj)
    for (var i = 0, l = keys.length; i < l; i++) {
      var key = keys[i]
      cloned[key] = deepClone(obj[key])
    }
    return cloned
  } else {
    return obj
  }
}

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
      default: false
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String,
      default: false
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
    },
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
      type: Function,
      default: false
    },
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
      type: Boolean,
      default: false
    },
    /**
     * Callback function to run when attemting to add a tag
     * @default suitable for primitive values
     * @param {String} Tag string to build a tag
     * @type {Function}
     */
    onTag: {
      type: Function,
      default: function (tag) {
        this.options.push(tag)
        this.value.push(tag)
      }
    },
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
      type: String,
      default: 'Press enter to create a tag'
    },
    /**
     * Number of allowed selected options. No limit if false.
     * @default False
     * @type {Number}
    */
    max: {
      type: Number,
      default: false
    }
  },
  created () {
    if (!this.selected) {
      this.$set('value', this.multiple ? [] : null)
    } else {
      this.value = deepClone(this.selected)
    }
    if (this.searchable && !this.multiple) {
      this.search = this.getOptionLabel(this.value)
    }
  },
  computed: {
    searchEmpty (){
      return this.search || ''
    },
    filteredOptions () {
      let options = this.hideSelected
        ? this.options.filter(this.isNotSelected)
        : this.options
      options = this.$options.filters.filterBy(options, this.search)
      if (this.taggable && this.searchEmpty && !this.isExistingOption(this.search)) {
        options.unshift({ isTag: true, label: this.search })
      }
      return options
    },
    valueKeys () {
      if (this.key) {
        return this.multiple
          ? this.value.map(element => element[this.key])
          : this.value[this.key]
      } else {
        return this.value
      }
    },
    optionKeys () {
      return this.label
        ? this.options.map(element => element[this.label])
        : this.options
    }
  },
  watch: {
    'value' () {
      if (this.onChange && JSON.stringify(this.value) !== JSON.stringify(this.selected)) {
        this.onChange(deepClone(this.value))
      } else {
        this.$set('selected', deepClone(this.value))
      }
      if (this.resetAfter) {
        this.$set('value', null)
        this.$set('search', null)
        this.$set('selected', null)
      }
      if (!this.multiple && this.searchable && this.clearOnSelect) {
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
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        this.value = deepClone(this.selected)
      }
    }
  },
  methods: {
    /**
     * Finds out if the given query is already present
     * in the available options
     * @param  {String}
     * @returns {Boolean} returns true if element is available
     */
    isExistingOption (query) {
      return !this.options
        ? false
        : this.optionKeys.indexOf(query) > -1
    },
    /**
     * Finds out if the given element is already present
     * in the result value
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is selected
     */
    isSelected (option) {
      /* istanbul ignore else */
      if (!this.value) return false
      const opt = this.key
        ? option[this.key]
        : option

      if (this.multiple) {
        return this.valueKeys.indexOf(opt) > -1
      } else {
        return this.valueKeys === opt
      }
    },
    /**
     * Finds out if the given element is NOT already present
     * in the result value. Negated isSelected method.
     * @param  {Object||String||Integer} option passed element to check
     * @returns {Boolean} returns true if element is not selected
     */
    isNotSelected (option) {
      return !this.isSelected(option)
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
        if (this.customLabel) {
          return this.customLabel(option)
        } else {
          if (this.label && option[this.label]) {
            return option[this.label]
          } else if (option.label) {
            return option.label
          }
        }
      } else {
        return option
      }
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     */
    select (option) {
      if (this.max && this.multiple && this.value.length === this.max) return
      if (option.isTag) {
        this.onTag(option.label)
        this.search = ''
      } else {
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
      /* istanbul ignore else */
      if (this.allowEmpty || this.value.length > 1) {
        if (this.multiple && typeof option === 'object') {
          const index = this.valueKeys.indexOf(option[this.key])
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
      /* istanbul ignore else */
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
      /* istanbul ignore else */
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
