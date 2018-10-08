import {
  isEmpty,
  not,
  flattenOptions,
  flow,
  filterOptions,
  filterGroups,
  stripGroups
} from './utils'
import multiselectCorePropsMixin from './multiselectCorePropsMixin'

export default {
  name: 'vue-multiselect-core',
  mixins: [multiselectCorePropsMixin],
  render () {
    return this.$scopedSlots.default(this)
  },
  data () {
    return {
      search: '',
      isFocused: false,
      isOpen: false,
      prefferedOpenDirection: 'below',
      optimizedHeight: this.maxHeight,
      pointer: 0,
      pointerDirty: false
    }
  },
  mounted () {
    /* istanbul ignore else */
    // if (!this.multiple && !this.clearOnSelect) {
    //   console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.')
    // }
    // if (!this.multiple && this.max) {
    //   console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.')
    // }
    if (
      this.preselectFirst &&
      !this.internalValue.length &&
      this.options.length
    ) {
      this.select(this.filteredOptions[0])
    }
  },
  computed: {
    internalValue () {
      return this.value || this.value === 0
        ? Array.isArray(this.value) ? this.value : [this.value]
        : []
    },
    filteredOptions () {
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase().trim()

      let options = this.options.concat()

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel)
      } else {
        options = this.groupValues ? flattenOptions(this.groupValues, this.groupLabel)(options) : options
      }

      options = this.hideSelected
        ? options.filter(not(this.isSelected))
        : options

      /* istanbul ignore else */
      if (this.taggable && normalizedSearch.length && !this.isExistingOption(normalizedSearch)) {
        if (this.tagPosition === 'bottom') {
          options.push({ isTag: true, label: search })
        } else {
          options.unshift({ isTag: true, label: search })
        }
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
      return options.map(element => this.customLabel(element, this.label).toString().toLowerCase())
    },
    currentOptionLabel () {
      return this.multiple
        ? this.searchable ? '' : this.placeholder
        : this.internalValue.length
          ? this.getOptionLabel(this.internalValue[0])
          : this.searchable ? '' : this.placeholder
    },
    isSingleLabelVisible () {
      return this.singleValue &&
        (!this.isOpen || !this.searchable) &&
        !this.visibleValues.length
    },
    isPlaceholderVisible () {
      return !this.internalValue.length && (!this.searchable || !this.isOpen)
    },
    visibleValues () {
      return this.multiple
        ? this.internalValue.slice(0, this.limit)
        : []
    },
    singleValue () {
      return this.internalValue[0]
    },
    deselectLabelText () {
      return this.showLabels
        ? this.deselectLabel
        : ''
    },
    deselectGroupLabelText () {
      return this.showLabels
        ? this.deselectGroupLabel
        : ''
    },
    selectLabelText () {
      return this.showLabels
        ? this.selectLabel
        : ''
    },
    selectGroupLabelText () {
      return this.showLabels
        ? this.selectGroupLabel
        : ''
    },
    selectedLabelText () {
      return this.showLabels
        ? this.selectedLabel
        : ''
    },
    inputStyle () {
      if (this.multiple && this.value && this.value.length) {
        // Hide input by setting the width to 0 allowing it to receive focus
        return this.isOpen ? { 'width': 'auto' } : { 'width': '0', 'position': 'absolute', 'padding': '0' }
      }
    },
    contentStyle () {
      return this.options.length
        ? { 'display': 'inline-block' }
        : { 'display': 'block' }
    },
    isAbove () {
      if (this.openDirection === 'above' || this.openDirection === 'top') {
        return true
      } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
        return false
      } else {
        return this.prefferedOpenDirection === 'above'
      }
    },
    showSearchInput () {
      return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true)
    },
    pointerPosition () {
      return this.pointer * this.optionHeight
    },
    visibleElements () {
      return this.optimizedHeight / this.optionHeight
    },
    computedPlaceholder () {
      return this.multiple
        ? this.placeholder
        : this.singleValue || this.placeholder
    }
  },
  watch: {
    internalValue () {
      /* istanbul ignore else */
      if (this.resetAfter && this.internalValue.length) {
        this.search = ''
        this.$emit('input', this.multiple ? [] : null)
      }
    },
    search () {
      this.$emit('search-change', this.search, this.id)
    },
    filteredOptions () {
      this.pointerAdjust()
    },
    isOpen () {
      this.pointerDirty = false
    }
  },
  methods: {
    handleKeydown (key, $event) {
      switch (key) {
        case 'up':
          this.activate()
          this.pointerBackward()
          return

        case 'down':
          this.activate()
          this.pointerForward()
          return

        case 'enter':
          if (!this.isOpen) this.activate()
          else this.addPointerElement()
          return

        case 'esc':
          this.deactivate()
          return

        case 'delete':
          this.removeLastElement()
          return

        case 'space':
          if (!this.isOpen) {
            this.activate()
            $event.preventDefault()
          } else if (!this.search.length) {
            this.addPointerElement()
            $event.preventDefault()
          }
          return

        case 'tab':
          this.deactivate()
      }
    },
    /**
     * Returns the internalValue in a way it can be emited to the parent
     * @returns {Object||Array||String||Integer}
     */
    getValue () {
      return this.multiple
        ? this.internalValue
        : this.internalValue.length === 0
          ? null
          : this.internalValue[0]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
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
    /**
     * Updates the search value
     * @param  {String}
     */
    updateSearch (query) {
      this.search = query
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
     * Returns empty string when options is null/undefined
     * Returns tag query if option is tag.
     * Returns the customLabel() results and casts it to string.
     *
     * @param  {Object||String||Integer} Passed option
     * @returns {Object||String}
     */
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      let label = this.customLabel(option, this.label)
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
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
      /* istanbul ignore else */
      if (option.$isLabel && this.groupSelect) {
        this.selectGroup(option)
        return
      }
      // if (this.blockKeys.indexOf(key) !== -1 ||
      //   this.disabled ||
      //   option.$isDisabled ||
      //   option.$isLabel
      // ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      // if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
        if (this.closeOnSelect && !this.multiple) this.deactivate()
      } else {
        const isSelected = this.isSelected(option)

        if (isSelected) {
          // if (key !== 'Tab') this.removeElement(option)
          this.removeElement(option)
          return
        }

        this.$emit('select', option, this.id)

        if (this.multiple) {
          this.$emit('input', this.internalValue.concat([option]), this.id)
        } else {
          this.$emit('input', option, this.id)
        }

        /* istanbul ignore else */
        if (this.clearOnSelect) this.search = ''
      }
      /* istanbul ignore else */
      if (this.closeOnSelect) this.deactivate()
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.$emit('remove', group[this.groupValues], this.id)

        const newValue = this.internalValue.filter(
          option => group[this.groupValues].indexOf(option) === -1
        )

        this.$emit('input', newValue, this.id)
      } else {
        const optionsToAdd = group[this.groupValues].filter(not(this.isSelected))

        this.$emit('select', optionsToAdd, this.id)
        this.$emit(
          'input',
          this.internalValue.concat(optionsToAdd),
          this.id
        )
      }
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every(this.isSelected)
    },
    /**
     * Removes the given option from the selected options.
     * Additionally checks this.allowEmpty prop if option can be removed when
     * it is the last selected option.
     *
     * @param  {type} option description
     * @returns {type}        description
     */
    removeElement (option, shouldClose = true) {
      /* istanbul ignore else */
      if (this.disabled) return
      /* istanbul ignore else */
      if (!this.allowEmpty && this.internalValue.length <= 1) {
        this.deactivate()
        return
      }

      const index = typeof option === 'object'
        ? this.valueKeys.indexOf(option[this.trackBy])
        : this.valueKeys.indexOf(option)

      this.$emit('remove', option, this.id)
      if (this.multiple) {
        const newValue = this.internalValue.slice(0, index).concat(this.internalValue.slice(index + 1))
        this.$emit('input', newValue, this.id)
      } else {
        this.$emit('input', null, this.id)
      }

      /* istanbul ignore else */
      if (this.closeOnSelect && shouldClose) this.deactivate()
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
      /* istanbul ignore else */
      if (this.search.length === 0 && Array.isArray(this.internalValue)) {
        this.removeElement(this.internalValue[this.internalValue.length - 1], false)
      }
    },
    clickOutsideHandler (e) {
      if (!this.$el.contains(e.target)) {
        this.deactivate()
      }
    },
    focus () {
      this.isFocused = true
    },
    blur () {
      this.isFocused = false
    },
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      window.addEventListener('click', this.clickOutsideHandler)

      this.adjustPosition()
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1
      }

      this.isOpen = true
      /* istanbul ignore else  */
      // if (this.searchable && !this.preserveSearch) this.search = ''
      // this.$emit('open', this.id)
    },
    /**
     * Closes the multiselect’s dropdown.
     * Sets this.isOpen to FALSE
     */
    deactivate () {
      /* istanbul ignore else */
      if (!this.isOpen) return

      window.removeEventListener('click', this.clickOutsideHandler)

      this.$nextTick(() => {
        this.isOpen = false
      })

      if (!this.preserveSearch) this.search = ''
      this.$emit('close', this.getValue(), this.id)
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
      if (typeof window === 'undefined') return

      const spaceAbove = this.$el.getBoundingClientRect().top
      const spaceBelow = window.innerHeight - this.$el.getBoundingClientRect().bottom
      const hasEnoughSpaceBelow = spaceBelow > this.maxHeight

      if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || this.openDirection === 'below' || this.openDirection === 'bottom') {
        this.prefferedOpenDirection = 'below'
        this.optimizedHeight = Math.min(spaceBelow - 40, this.maxHeight)
      } else {
        this.prefferedOpenDirection = 'above'
        this.optimizedHeight = Math.min(spaceAbove - 40, this.maxHeight)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return ['multiselect__option--disabled']
      }

      const group = this.options.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      return [
        this.groupSelect ? 'multiselect__option--group' : 'multiselect__option--disabled',
        { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
        { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
      ]
    },
    addPointerElement () {
      /* istanbul ignore else */
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer])
      }
      this.pointerReset()
    },
    pointerForward () {
      /* istanbul ignore else */
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        // /* istanbul ignore next */
        // if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
        //   this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
        // }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        /* istanbul ignore else */
        // if (this.$refs.list.scrollTop >= this.pointerPosition) {
        //   this.$refs.list.scrollTop = this.pointerPosition
        // }
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[this.pointer].$isLabel &&
          !this.groupSelect
        ) this.pointerBackward()
      } else {
        /* istanbul ignore else */
        if (
          this.filteredOptions[this.pointer] &&
          this.filteredOptions[0].$isLabel &&
          !this.groupSelect
        ) this.pointerForward()
      }
      this.pointerDirty = true
    },
    pointerReset () {
      /* istanbul ignore else */
      if (!this.closeOnSelect) return
      this.pointer = 0
      /* istanbul ignore else */
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0
      }
    },
    pointerAdjust () {
      /* istanbul ignore else */
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0
      }

      if (this.filteredOptions.length > 0 &&
        this.filteredOptions[this.pointer].$isLabel &&
        !this.groupSelect
      ) {
        this.pointerForward()
      }
    },
    pointerSet (index) {
      this.pointer = index
      this.pointerDirty = true
    }
  }
}
