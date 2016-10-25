import deepClone from './utils'

function includes (str, query) {
  if (!str) return false
  const text = str.toString().toLowerCase()
  return text.indexOf(query) !== -1
}

module.exports = {
  data () {
    return {
      search: '',
      isOpen: false,
      internalValue: this.value || this.value === 0
        ? deepClone(this.value)
        : this.multiple ? [] : null
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    localSearch: {
      type: Boolean,
      default: true
    },
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
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    value: {
      type: null,
      default: null
    },
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
      type: String
    },
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
      type: String
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
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
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
      default (option, label) {
        return label ? option[label] : option
      }
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
      type: Number
    },
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
      default: null
    },
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
      type: Number,
      default: 1000
    },
    groupKey: {
      type: String
    }
  },
  created () {
    if (this.searchable) this.adjustSearch()
  },
  computed: {
    filteredOptions () {
      // let search = this.search || ''

      let options = []

      if (this.localSearch) {
        if (!this.groupKey) {
          options = this.label
            ? this.options.filter(option => includes(option[this.label], this.search))
            : this.options.filter(option => includes(option, this.search))
        } else {
          options = this.options.map(group => {
            const tmp = {
              groupLabel: group.groupLabel,
              [this.groupKey]: this.label
                ? group[this.groupKey].filter(option => includes(option[this.label], this.search))
                : group[this.groupKey].filter(option => includes(option, this.search))
            }
            return tmp[this.groupKey].length
              ? tmp
              : []
          })
        }
        console.log(options)
      }
      options = this.hideSelected
        ? options.filter(this.isNotSelected)
        : options
      // if (this.taggable && search.length && !this.isExistingOption(search)) {
      //   options.unshift({ isTag: true, label: search })
      // }

      if (this.groupKey) {
        options = options.reduce((prev, curr) => {
          prev.push({
            label: curr.groupLabel,
            isLabel: true
          })
          return prev.concat(curr[this.groupKey])
        }, [])
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.multiple
          ? this.internalValue.map(element => element[this.trackBy])
          : this.internalValue[this.trackBy]
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      return this.label
        ? this.options.map(element => element[this.label].toString().toLowerCase())
        : this.options.map(element => element.toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.getOptionLabel(this.internalValue)
    }
  },
  watch: {
    'internalValue' () {
      if (this.resetAfter) {
        this.internalValue = null
        this.search = ''
      }
      this.adjustSearch()
    },
    'search' () {
      /* istanbul ignore else */
      if (this.search === this.currentOptionLabel) return

      this.$emit('search-change', this.search, this.id)
    },
    'value' () {
      this.internalValue = deepClone(this.value)
    }
  },
  methods: {
    updateSearch (query) {
      this.search = query.trim().toLowerCase()
    },
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
      if (!this.internalValue) return false
      const opt = this.trackBy
        ? option[this.trackBy]
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
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (!option && option !== 0) return ''
      if (option.isTag) return option.label
      return this.customLabel(option, this.label) + ''
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     */
    select (option) {
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
      } else {
        if (this.multiple) {
          if (this.isSelected(option)) {
            this.removeElement(option)
            return
          } else {
            this.internalValue.push(option)
          }
        } else {
          const isSelected = this.isSelected(option)

          /* istanbul ignore else */
          if (isSelected && !this.allowEmpty) return

          this.internalValue = isSelected ? null : option
        }
        this.$emit('select', deepClone(option), this.id)
        this.$emit('input', deepClone(this.internalValue), this.id)

        if (this.closeOnSelect) this.deactivate()
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
      if (!this.allowEmpty && this.internalValue.length <= 1) return

      const index = (this.multiple && typeof option === 'object')
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option)

      this.internalValue.splice(index, 1)
      this.$emit('remove', deepClone(option), this.id)
      this.$emit('input', deepClone(this.internalValue), this.id)
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1])
      }
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen) return

      this.isOpen = true
      /* istanbul ignore else  */
      if (this.searchable) {
        this.search = ''
        this.$refs.search.focus()
      } else {
        this.$el.focus()
      }
      this.$emit('open', this.id)
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      this.isOpen = false
      /* istanbul ignore else  */
      if (this.searchable) {
        this.$refs.search.blur()
        this.adjustSearch()
      } else {
        this.$el.blur()
      }
      this.$emit('close', deepClone(this.internalValue), this.id)
    },
    /**
     * Adjusts the Search property to equal the correct value
     * depending on the selected value.
     */
    adjustSearch () {
      if (!this.searchable || !this.clearOnSelect) return

      this.search = this.multiple
        ? ''
        : this.currentOptionLabel
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
