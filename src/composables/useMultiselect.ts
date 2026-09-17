import { computed, nextTick, onMounted, ref, watch, type Ref, type ShallowRef } from 'vue'
import type { ExtractPropTypes } from 'vue'
import type { multiselectProps } from '../props'
import { flattenOptions, flow, includes, isEmpty, not, stripGroups } from '../utils'
import { usePointer } from './usePointer'

type Props = ExtractPropTypes<typeof multiselectProps>
type MultiselectEmit = (event: any, ...args: any[]) => void

/**
 * Template element references the multiselect logic needs. When building a
 * custom component, provide refs bound to the equivalent elements.
 */
export interface MultiselectRefs {
  root: Ref<HTMLElement | null>
  search: Readonly<ShallowRef<HTMLInputElement | null>>
  list: Ref<HTMLElement | null>
}

/**
 * Core multiselect logic (formerly `multiselectMixin`), combined with the
 * keyboard pointer logic. Returns everything needed to render a select.
 */
export function useMultiselect (props: Props, emit: MultiselectEmit, refs: MultiselectRefs) {
  const search = ref('')
  const isOpen = ref(false)
  const preferredOpenDirection = ref('below')
  const optimizedHeight = ref(props.maxHeight)

  const internalValue = computed(() => {
    return props.modelValue || props.modelValue === 0
      ? Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
      : []
  })

  const filteredOptions = computed(() => {
    const searchValue = search.value || ''
    const normalizedSearch = searchValue.toLowerCase().trim()

    let options = (props.options as any[]).concat()

    /* istanbul ignore else */
    if (props.internalSearch) {
      options = props.groupValues
        ? filterAndFlat(options, normalizedSearch, props.label)
        : filterOptions(options, normalizedSearch, props.label, props.customLabel)
    } else {
      options = props.groupValues ? flattenOptions(props.groupValues, props.groupLabel as string)(options) : options
    }

    options = props.hideSelected
      ? options.filter(not(isSelected))
      : options

    /* istanbul ignore else */
    if (props.taggable && normalizedSearch.length && !isExistingOption(normalizedSearch)) {
      if (props.tagPosition === 'bottom') {
        options.push({ isTag: true, label: searchValue })
      } else {
        options.unshift({ isTag: true, label: searchValue })
      }
    }

    return options.slice(0, props.optionsLimit)
  })

  const valueKeys = computed(() => {
    if (props.trackBy) {
      return internalValue.value.map((element: any) => element[props.trackBy as string])
    } else {
      return internalValue.value
    }
  })

  const optionKeys = computed(() => {
    const options = props.groupValues ? flatAndStrip(props.options as any[]) : (props.options as any[])
    return options.map((element: any) => props.customLabel(element, props.label).toString().toLowerCase())
  })

  const currentOptionLabel = computed(() => {
    return props.multiple
      ? props.searchable ? '' : props.placeholder
      : internalValue.value.length
        ? getOptionLabel(internalValue.value[0])
        : props.searchable ? '' : props.placeholder
  })

  /**
   * Returns the internalValue in a way it can be emited to the parent
   * @returns {Object||Array||String||Integer}
   */
  function getValue () {
    return props.multiple
      ? internalValue.value
      : internalValue.value.length === 0
        ? null
        : internalValue.value[0]
  }

  /**
   * Filters and then flattens the options list
   * @param  {Array}
   * @return {Array} returns a filtered and flat options list
   */
  function filterAndFlat (options: any[], searchValue: string, label?: string) {
    return flow(
      filterGroups(searchValue, label, props.groupValues as string, props.groupLabel as string, props.customLabel),
      flattenOptions(props.groupValues as string, props.groupLabel as string)
    )(options)
  }

  /**
   * Flattens and then strips the group labels from the options list
   * @param  {Array}
   * @return {Array} returns a flat options list without group labels
   */
  function flatAndStrip (options: any[]) {
    return flow(
      flattenOptions(props.groupValues as string, props.groupLabel as string),
      stripGroups
    )(options)
  }

  /**
   * Updates the search value
   * @param  {String}
   */
  function updateSearch (query: string) {
    search.value = query
  }

  /**
   * Finds out if the given query is already present
   * in the available options
   * @param  {String}
   * @return {Boolean} returns true if element is available
   */
  function isExistingOption (query: string) {
    return !props.options
      ? false
      : optionKeys.value.indexOf(query) > -1
  }

  /**
   * Finds out if the given element is already present
   * in the result value
   * @param  {Object||String||Integer} option passed element to check
   * @returns {Boolean} returns true if element is selected
   */
  function isSelected (option: any) {
    const opt = props.trackBy
      ? option[props.trackBy]
      : option
    return valueKeys.value.indexOf(opt) > -1
  }

  /**
   * Finds out if the given option is disabled
   * @param  {Object||String||Integer} option passed element to check
   * @returns {Boolean} returns true if element is disabled
   */
  function isOptionDisabled (option: any) {
    return !!option.$isDisabled
  }

  /**
   * Returns empty string when options is null/undefined
   * Returns tag query if option is tag.
   * Returns the customLabel() results and casts it to string.
   *
   * @param  {Object||String||Integer} Passed option
   * @returns {Object||String}
   */
  function getOptionLabel (option: any) {
    if (isEmpty(option)) return ''
    /* istanbul ignore else */
    if (option.isTag) return option.label
    /* istanbul ignore else */
    if (option.$isLabel) return option.$groupLabel

    const label = props.customLabel(option, props.label)
    /* istanbul ignore else */
    if (isEmpty(label)) return ''
    return label
  }

  /**
   * Add the given option to the list of selected options
   * or sets the option as the selected option.
   * If option is already selected -> remove it from the results.
   *
   * @param  {Object||String||Integer} option to select/deselect
   * @param  {Boolean} block removing
   */
  function select (option: any, key?: string) {
    /* istanbul ignore else */
    if (option.$isLabel && props.groupSelect) {
      selectGroup(option)
      return
    }
    if (props.blockKeys.indexOf(key as string) !== -1 ||
      props.disabled ||
      option.$isDisabled ||
      option.$isLabel
    ) return
    /* istanbul ignore else */
    if (props.max && props.multiple && internalValue.value.length === props.max) return
    /* istanbul ignore else */
    if (key === 'Tab' && !pointerApi.pointerDirty.value) return
    if (option.isTag) {
      emit('tag', option.label, props.id)
      search.value = ''
      if (props.closeOnSelect && !props.multiple) deactivate()
    } else {
      const isOptionSelected = isSelected(option)

      if (isOptionSelected) {
        if (key !== 'Tab') removeElement(option)
        return
      }

      if (props.multiple) {
        emit('update:modelValue', internalValue.value.concat([option]))
      } else {
        emit('update:modelValue', option)
      }

      emit('select', option, props.id)

      /* istanbul ignore else */
      if (props.clearOnSelect) search.value = ''
    }
    /* istanbul ignore else */
    if (props.closeOnSelect) deactivate()
  }

  /**
   * Add the given group options to the list of selected options
   * If all group optiona are already selected -> remove it from the results.
   *
   * @param  {Object||String||Integer} group to select/deselect
   */
  function selectGroup (selectedGroup: any) {
    const group = (props.options as any[]).find((option: any) => {
      return option[props.groupLabel as string] === selectedGroup.$groupLabel
    })

    if (!group) return

    if (wholeGroupSelected(group)) {
      emit('remove', group[props.groupValues as string], props.id)

      const groupValues = props.trackBy ? group[props.groupValues as string].map((val: any) => val[props.trackBy as string]) : group[props.groupValues as string]
      const newValue = internalValue.value.filter(
        (option: any) => groupValues.indexOf(props.trackBy ? option[props.trackBy as string] : option) === -1
      )

      emit('update:modelValue', newValue)
    } else {
      const optionsToAdd = group[props.groupValues as string].filter(
        (option: any) => !(isOptionDisabled(option) || isSelected(option))
      )

      // if max is defined then just select options respecting max
      if (props.max) {
        optionsToAdd.splice(props.max as number - internalValue.value.length)
      }

      emit('select', optionsToAdd, props.id)
      emit(
        'update:modelValue',
        internalValue.value.concat(optionsToAdd)
      )
    }

    if (props.closeOnSelect) deactivate()
  }

  /**
   * Helper to identify if all values in a group are selected
   *
   * @param {Object} group to validated selected values against
   */
  function wholeGroupSelected (group: any) {
    return group[props.groupValues as string].every((option: any) => isSelected(option) || isOptionDisabled(option)
    )
  }

  /**
   * Helper to identify if all values in a group are disabled
   *
   * @param {Object} group to check for disabled values
   */
  function wholeGroupDisabled (group: any) {
    return group[props.groupValues as string].every(isOptionDisabled)
  }

  /**
   * Removes the given option from the selected options.
   * Additionally checks this.allowEmpty prop if option can be removed when
   * it is the last selected option.
   *
   * @param  {type} option description
   * @return {type}        description
   */
  function removeElement (option: any, shouldClose = true) {
    /* istanbul ignore else */
    if (props.disabled) return
    /* istanbul ignore else */
    if (option.$isDisabled) return
    /* istanbul ignore else */
    if (!props.allowEmpty && internalValue.value.length <= 1) {
      deactivate()
      return
    }

    const index = typeof option === 'object'
      ? valueKeys.value.indexOf(option[props.trackBy as string])
      : valueKeys.value.indexOf(option)

    if (props.multiple) {
      const newValue = internalValue.value.slice(0, index).concat(internalValue.value.slice(index + 1))
      emit('update:modelValue', newValue)
    } else {
      emit('update:modelValue', null)
    }
    emit('remove', option, props.id)

    /* istanbul ignore else */
    if (props.closeOnSelect && shouldClose) deactivate()
  }

  /**
   * Calls this.removeElement() with the last element
   * from this.internalValue (selected element Array)
   *
   * @fires this#removeElement
   */
  function removeLastElement () {
    /* istanbul ignore else */
    if (props.blockKeys.indexOf('Delete') !== -1) return
    /* istanbul ignore else */
    if (search.value.length === 0 && Array.isArray(internalValue.value) && internalValue.value.length) {
      removeElement(internalValue.value[internalValue.value.length - 1], false)
    }
  }

  /**
   * Opens the multiselect’s dropdown.
   * Sets this.isOpen to TRUE
   */
  function activate () {
    /* istanbul ignore else */
    if (isOpen.value || props.disabled) return

    adjustPosition()
    /* istanbul ignore else  */
    if (props.groupValues && pointerApi.pointer.value === 0 && filteredOptions.value.length) {
      pointerApi.pointer.value = 1
    }

    isOpen.value = true
    /* istanbul ignore else  */
    if (props.searchable) {
      if (!props.preserveSearch) search.value = ''
      if (!props.preventAutofocus) nextTick(() => refs.search.value && refs.search.value.focus())
    } else if (!props.preventAutofocus) {
      if (typeof refs.root.value !== 'undefined' && refs.root.value !== null) refs.root.value.focus()
    }
    emit('open', props.id)
  }

  /**
   * Closes the multiselect’s dropdown.
   * Sets this.isOpen to FALSE
   */
  function deactivate () {
    /* istanbul ignore else */
    if (!isOpen.value) return

    isOpen.value = false
    /* istanbul ignore else  */
    if (props.searchable) {
      if (refs.search.value !== null && typeof refs.search.value !== 'undefined') refs.search.value.blur()
    } else {
      if (typeof refs.root.value !== 'undefined' && refs.root.value !== null) refs.root.value.blur()
    }
    if (!props.preserveSearch) search.value = ''
    emit('close', getValue(), props.id)
  }

  /**
   * Call this.activate() or this.deactivate()
   * depending on this.isOpen value.
   *
   * @fires this#activate || this#deactivate
   * @property {Boolean} isOpen indicates if dropdown is open
   */
  function toggle () {
    if (isOpen.value) {
      deactivate()
    } else {
      activate()
    }
  }

  /**
   * Updates the hasEnoughSpace variable used for
   * detecting where to expand the dropdown
   */
  function adjustPosition () {
    if (typeof window === 'undefined') return

    const el = refs.root.value as HTMLElement
    const spaceAbove = el.getBoundingClientRect().top
    const spaceBelow = window.innerHeight - el.getBoundingClientRect().bottom
    const hasEnoughSpaceBelow = spaceBelow > props.maxHeight

    if (hasEnoughSpaceBelow || spaceBelow > spaceAbove || props.openDirection === 'below' || props.openDirection === 'bottom') {
      preferredOpenDirection.value = 'below'
      optimizedHeight.value = Math.min(spaceBelow - 40, props.maxHeight)
    } else {
      preferredOpenDirection.value = 'above'
      optimizedHeight.value = Math.min(spaceAbove - 40, props.maxHeight)
    }
  }

  /**
   * Filters and sorts the options ready for selection
   * @param {Array} options
   * @param {String} search
   * @param {String} label
   * @param {Function} customLabel
   * @returns {Array}
   */
  function filterOptions (options: any[], searchValue: string, label: string | undefined, customLabel: (option: any, label?: string) => any) {
    return searchValue
      ? options
        .filter((option: any) => includes(customLabel(option, label), searchValue))
        .sort((a: any, b: any) => {
          if (typeof props.filteringSortFunc === 'function') {
            return props.filteringSortFunc(a, b)
          }
          return customLabel(a, label).length - customLabel(b, label).length
        })
      : options
  }

  /**
   *
   * @param {String} search
   * @param {String} label
   * @param {String} values
   * @param {String} groupLabel
   * @param {function} customLabel
   * @returns {function(*): *}
   */
  function filterGroups (searchValue: string, label: string | undefined, values: string, groupLabel: string, customLabel: (option: any, label?: string) => any) {
    return (groups: any[]) => groups.map((group: any) => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn('Options passed to vue-multiselect do not contain groups, despite the config.')
        return []
      }
      const groupOptions = filterOptions(group[values], searchValue, label, customLabel)

      return groupOptions.length
        ? {
            [groupLabel]: group[groupLabel], [values]: groupOptions
          }
        : []
    })
  }

  watch(internalValue, () => {
    /* istanbul ignore else */
    if (props.resetAfter && internalValue.value.length) {
      search.value = ''
      emit('update:modelValue', props.multiple ? [] : null)
    }
  }, { deep: true })

  watch(search, () => {
    emit('search-change', search.value)
  })

  // Set up the keyboard pointer logic. Registered after the multiselect
  // watchers above to preserve the original watcher execution order; the
  // methods above reference `pointerApi` lazily (only at runtime).
  const pointerApi = usePointer(props, {
    filteredOptions,
    optimizedHeight,
    isOpen,
    isSelected,
    wholeGroupDisabled,
    wholeGroupSelected,
    select,
    listRef: refs.list,
    searchRef: refs.search
  })

  onMounted(() => {
    /* istanbul ignore else */
    if (!props.multiple && props.max) {
      console.warn('[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.')
    }
    if (
      props.preselectFirst &&
      !internalValue.value.length &&
      (props.options as any[]).length
    ) {
      select(filteredOptions.value[0])
    }
  })

  return {
    // state
    search,
    isOpen,
    preferredOpenDirection,
    optimizedHeight,
    // computed
    internalValue,
    filteredOptions,
    valueKeys,
    optionKeys,
    currentOptionLabel,
    // methods
    getValue,
    filterAndFlat,
    flatAndStrip,
    updateSearch,
    isExistingOption,
    isSelected,
    isOptionDisabled,
    getOptionLabel,
    select,
    selectGroup,
    wholeGroupSelected,
    wholeGroupDisabled,
    removeElement,
    removeLastElement,
    activate,
    deactivate,
    toggle,
    adjustPosition,
    filterOptions,
    filterGroups,
    // pointer
    ...pointerApi
  }
}

export type UseMultiselectReturn = ReturnType<typeof useMultiselect>
