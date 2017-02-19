import deepClone from './utils'

function includes (str, query) {
  if (!str) return false
  const text = str.toString().toLowerCase()
  return text.indexOf(query) !== -1
}

function filterOptions (options, search, label) {
  return label
    ? options.filter(option => includes(option[label], search))
    : options.filter(option => includes(option, search))
}

function stripGroups (options) {
  return options.filter(option => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev.concat(curr)
    }, [])
}

function filterGroups (search, label, values, groupLabel) {
  return (groups) =>
    groups.map(group => {
      const groupOptions = filterOptions(group[values], search, label)

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => x => fns.reduce((v, f) => f(v), x)

module.exports = {
  data () {
    return {
      search: '',
      isOpen: false,
      hasEnoughSpace: true,
      internalValue: this.value || this.value === 0
        ? this.multiple
          ? deepClone(this.value)
          : deepClone([this.value])
        : []
    }
  },
  props: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
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
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
      type: String
    },
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
      type: String
    },
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
      type: Array,
      default () {
        return []
      }
    }
  },
  created () {
    if (this.searchable) this.adjustSearch()
    if (!this.multiple && !this.clearOnSelect) {
      console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.')
    }
  },
  computed: {
    filteredOptions () {
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase()

      let options = this.options

      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label)

        options = this.hideSelected
          ? options.filter(this.isNotSelected)
          : options
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options
      }

      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        options.unshift({ isTag: true, label: search })
      }

      return options.slice(0, this.optionsLimit)
    },
    valueKeys () {
      if (this.trackBy) {
        return this.internalValue.map(element => element[this.trackBy])
      } else {
        return this.internalValue
      }
    },
    optionKeys () {
      const options = this.groupValues ? this.flatAndStrip(this.options) : this.options
      return this.label
        ? options.map(element => element[this.label].toString().toLowerCase())
        : options.map(element => element.toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.getOptionLabel(this.internalValue[0]) + ''
    }
  },
  watch: {
    'internalValue' () {
      if (this.resetAfter) {
        this.internalValue = []
        this.search = ''
      }
      this.adjustSearch()
    },
    'search' () {
      this.$emit('search-change', this.search, this.id)
    },
    'value' () {
      this.internalValue = deepClone(this.multiple ? this.value : [this.value])
    }
  },
  methods: {
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat (options) {
      return flow(
        filterGroups(this.search, this.label, this.groupValues, this.groupLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    updateSearch (query) {
      this.search = query.trim().toString()
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
      const opt = this.trackBy
        ? option[this.trackBy]
        : option
      return this.valueKeys.indexOf(opt) > -1
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
      return this.customLabel(option, this.label) || ''
    },
    /**
     * Add the given option to the list of selected options
     * or sets the option as the selected option.
     * If option is already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} option to select/deselect
     * @param  {Boolean} block removing
     */
    select (option, key) {
      if (this.blockKeys.indexOf(key) !== -1 || this.disabled) return
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      if (option.$isLabel) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
      } else {
        const isSelected = this.isSelected(option)
        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option)
          return
        } else if (this.multiple) {
          this.internalValue.push(option)
        } else {
          this.internalValue = [option]
        }
        this.$emit('select', deepClone(option), this.id)
        const value = this.multiple
          ? this.internalValue
          : this.internalValue[0]
        this.$emit('input', deepClone(value), this.id)

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
      if (this.disabled) return
      if (!this.allowEmpty && this.internalValue.length <= 1) return

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option)

      this.internalValue.splice(index, 1)
      this.$emit('remove', deepClone(option), this.id)
      const value = this.multiple
        ? this.internalValue
        : this.internalValue[0]
      this.$emit('input', deepClone(value), this.id)
    },
    /**
     * Calls this.removeElement() with the last element
     * from this.internalValue (selected element Array)
     *
     * @fires this#removeElement
     */
    removeLastElement () {
      /* istanbul ignore else */
      if (this.blockKeys.indexOf('Delete') !== -1) return
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
      if (this.disabled) return

      this.adjustPosition()
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1
      }

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
      const value = this.multiple
        ? this.internalValue
        : this.internalValue[0]
      this.$emit('close', deepClone(value), this.id)
    },
    /**
     * Adjusts the Search property to equal the correct value
     * depending on the selected value.
     */
    adjustSearch () {
      if (!this.searchable || !this.clearOnSelect) return

      setTimeout(() => {
        this.search = this.multiple
          ? ''
          : this.currentOptionLabel
      }, 150)
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
    },
    /**
     * Updates the hasEnoughSpace variable used for
     * detecting where to expand the dropdown
     */
    adjustPosition () {
      this.hasEnoughSpace = this.$el.getBoundingClientRect().top + this.maxHeight < window.innerHeight
    }
  }
}
