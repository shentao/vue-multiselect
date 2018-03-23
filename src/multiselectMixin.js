/* eslint-disable camelcase,one-var,no-unused-vars,no-undef */
function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

function not (fun) {
  return (...params) => !fun(...params)
}

function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined'
  if (str === null) str = 'null'
  if (str === false) str = 'false'
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

function filtering (options, search, label, lvl) {
  var result = []

  for (var i = 0, len = options.length; i < len; i++) {
    var lookupItem = options[i],
      val = label ? lookupItem[label] : lookupItem,
      dist = distance(search, val.toLowerCase(), lvl + 1)
    result.push({
      origin: lookupItem,
      dist: dist,
      index: i
    })
  }

// filter
  result = result.filter(function (r) {
    return r.dist <= lvl ? r : null
  })

// sort
  result.sort(function (a, b) {
    return (a.dist - b.dist) ||
                (a.index - b.index) // save order
            // || ([a.suggest, b.suggest].sort()[0] == a.suggest ? -1 : 1); // secondary sort as alfabet
  })

// slice
  result = result.slice(0, 9999)

  return result
}

function distance (q, s, threshold) {
    // string params must be in lower case

  var WORDS_SEPARATOR = /[^a-zа-яё]+/

  var qd
  var fi
    // words
  var qw = q ? q.trim().split(WORDS_SEPARATOR) : [],
    qw_length = qw.length,
    sw = s ? s.trim().split(WORDS_SEPARATOR) : [],
    sw_length = sw.length,
    w_max = Math.max(qw.length, sw.length)

  if (qw_length > sw_length) return Infinity

    // source words positions
  var si2p = []
  for (var si = 0; si < sw_length; si++) { si2p.push(si) }

    // compare (mini/max method)
  for (var qi = 0, sd = -Infinity; qi < qw_length; qi++) {
    q = qw[qi]
    for (si = 0, qd = Infinity, fi = -1; si < sw_length; si++) {
      s = sw[si]

            // ignore: not equals first letters
      if (q.substr(0, 1) !== s.substr(0, 1)) continue

      var d = leftHandLevenshtein(q, s, threshold)

            // delta position [0..1)
      d += Math.abs(qi - si2p[si]) / w_max

            // find minimal delta
      if (qd > d) {
        qd = d
        fi = si
      }
    }
    if (fi === -1) return Infinity

        // cut finding word
    sw.splice(fi, 1)
    sw_length--
    si2p.splice(fi, 1)

        // save max delta
    sd = Math.max(sd, qd)
  }
  return sd
}

// left-hand levenshtein
function leftHandLevenshtein (q, s, threshold) {
  var base = levenshteinAlg(q, s, threshold)

  for (var i = 0, l = s.length; i < l; i++) {
    var d = levenshteinAlg(q, s.substr(0, i), threshold)

    if (d < base) base = d
  }

  return base
}

// thanks for https://gist.github.com/graphnode/979790
function levenshteinAlg (s1, s2, threshold) {
    // string lengths diff gte threshold
  if (Math.abs(s1.length - s2.length) >= threshold) { return threshold }

    // equals
  if (s1 === s2) { return 0 }

  var s1_len = s1.length
  var s2_len = s2.length
  if (s1_len === 0) {
    return s2_len
  }
  if (s2_len === 0) {
    return s1_len
  }

    // BEGIN STATIC
  var split = false
  try {
    split = !('0')[0]
  } catch (e) {
    split = true // Earlier IE may not support access by string index
  }
    // END STATIC
  if (split) {
    s1 = s1.split('')
    s2 = s2.split('')
  }

  var v0 = new Array(s1_len + 1)
  var v1 = new Array(s1_len + 1)

  var s1_idx = 0, s2_idx = 0
  for (s1_idx = 0; s1_idx < s1_len + 1; s1_idx++) {
    v0[s1_idx] = s1_idx
  }
  var char_s1 = '', char_s2 = ''
  for (s2_idx = 1; s2_idx <= s2_len; s2_idx++) {
    v1[0] = s2_idx
    char_s2 = s2[s2_idx - 1]

    for (s1_idx = 0; s1_idx < s1_len; s1_idx++) {
      char_s1 = s1[s1_idx]
      var cost = (char_s1 === char_s2) ? 0 : 1
      var m_min = v0[s1_idx + 1] + 1
      var b = v1[s1_idx] + 1
      var c = v0[s1_idx] + cost
      if (b < m_min) {
        m_min = b
      }
      if (c < m_min) {
        m_min = c
      }
      v1[s1_idx + 1] = m_min
    }
    var v_tmp = v0
    v0 = v1
    v1 = v_tmp
  }
  return v0[s1_len]
}

// switch keyboard layout
function en2ru (s) {
  var en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.'
  var ru = 'йцукенгшщзхъфывапролджэячсмитьбю'

  for (var i = 0; i < en.length; i++) {
    s = s.split(en.substr(i, 1)).join(ru.substr(i, 1))
  }
  return s
}

function filterOptions (options, search, label, customLabel, levenshtein) {
  if (levenshtein >= 0) {
    var result = filtering(options, search, label, levenshtein)
    if (!result.length) {
// trying to change keyboard layout
      result = filtering(options, en2ru(search), label, levenshtein)
    }
    result = result.map(function (item) {
      return item.origin
    })
    return result
  } else {
    return options.filter(option => includes(customLabel(option, label), search))
  }
}

function stripGroups (options) {
  return options.filter(option => !option.$isLabel)
}

function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

function filterGroups (search, label, values, groupLabel, customLabel, levenshtein) {
  return (groups) =>
    groups.map(group => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`)
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel, levenshtein)

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

const flow = (...fns) => x => fns.reduce((v, f) => f(v), x)

export default {
  data () {
    return {
      search: '',
      isOpen: false,
      prefferedOpenDirection: 'below',
      optimizedHeight: this.maxHeight
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
      default () {
        return []
      }
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
     * Clear the search input after `)
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
        if (isEmpty(option)) return ''
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
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
      type: String,
      default: 'top'
    },
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
      type: [Number, Boolean],
      default: false
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
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
      type: Boolean,
      default: false
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
    },
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
      type: Boolean,
      default: false
    },
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
      type: Boolean,
      default: false
    },
    /**
     * Levenshtein lvl
     * @default -1
     * @type {Number}
    */
    levenshtein: {
      type: Number,
      default: -1
    }
  },
  mounted () {
    /* istanbul ignore else */
    if (!this.multiple && !this.clearOnSelect) {
      console.warn('[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false.')
    }
    if (!this.multiple && this.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.')
    }
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
      console.log('Search: ', this.search)
      const search = this.search || ''
      const normalizedSearch = search.toLowerCase().trim()

      let options = this.options.concat()

      /* istanbul ignore else */
      if (this.internalSearch) {
        options = this.groupValues
          ? this.filterAndFlat(options, normalizedSearch, this.label)
          : filterOptions(options, normalizedSearch, this.label, this.customLabel, this.levenshtein)
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
    }
  },
  methods: {
    addPointerElement () {
      alert(1)
      // this.$emit('search-change', this.search, this.id)
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
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel, this.levenshtein),
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
      if (this.blockKeys.indexOf(key) !== -1 ||
        this.disabled ||
        option.$isDisabled ||
        option.$isLabel
      ) return
      /* istanbul ignore else */
      if (this.max && this.multiple && this.internalValue.length === this.max) return
      /* istanbul ignore else */
      if (key === 'Tab' && !this.pointerDirty) return
      if (option.isTag) {
        this.$emit('tag', option.label, this.id)
        this.search = ''
        if (this.closeOnSelect && !this.multiple) this.deactivate()
      } else {
        const isSelected = this.isSelected(option)

        if (isSelected) {
          if (key !== 'Tab') this.removeElement(option)
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
    /**
     * Opens the multiselect’s dropdown.
     * Sets this.isOpen to TRUE
     */
    activate () {
      /* istanbul ignore else */
      if (this.isOpen || this.disabled) return

      this.adjustPosition()
      /* istanbul ignore else  */
      if (this.groupValues && this.pointer === 0 && this.filteredOptions.length) {
        this.pointer = 1
      }

      this.isOpen = true
      /* istanbul ignore else  */
      if (this.searchable) {
        if (!this.preserveSearch) this.search = ''
        this.$nextTick(() => this.$refs.search.focus())
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
      } else {
        this.$el.blur()
      }
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
    }
  }
}
