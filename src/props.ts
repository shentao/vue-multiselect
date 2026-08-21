import type { ExtractPublicPropTypes, PropType } from 'vue'
import { isEmpty } from './utils'

/**
 * Props for the core multiselect logic (formerly `multiselectMixin`).
 */
export const multiselectCoreProps = {
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
    type: Array as PropType<any[]>,
    required: true as const
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
    type: Function as PropType<(option: any, label?: string) => any>,
    default (option: any, label?: string) {
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
    type: [Number, Boolean] as PropType<number | boolean>,
    default: false
  },
  /**
   * Will be passed with all events as second param.
   * Useful for identifying events origin.
   * @default null
   * @type {String|Integer}
  */
  id: {
    type: null,
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
    type: Array as PropType<string[]>,
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
   * Prevent autofocus
   * @default false
   * @type {Boolean}
   */
  preventAutofocus: {
    type: Boolean,
    default: false
  },
  /**
   * Allows a custom function for sorting search/filtered results.
   * @default null
   * @type {Function}
   */
  filteringSortFunc: {
    type: Function as PropType<(a: any, b: any) => number>,
    default: null
  }
}

/**
 * Props for the keyboard pointer logic (formerly `pointerMixin`).
 */
export const pointerProps = {
  /**
   * Enable/disable highlighting of the pointed value.
   * @type {Boolean}
   * @default true
   */
  showPointer: {
    type: Boolean,
    default: true
  },
  optionHeight: {
    type: Number,
    default: 40
  }
}

/**
 * Props specific to the default `Multiselect` component view.
 */
export const multiselectViewProps = {
  /**
   * name attribute to match optional label element
   * @default ''
   * @type {String}
   */
  name: {
    type: String,
    default: ''
  },
  /**
   * Presets the selected options value.
   * @type {Object||Array||String||Integer}
   */
  modelValue: {
    type: null,
    default () {
      return []
    }
  },
  /**
   * String to show when pointing to an option
   * @default 'Press enter to select'
   * @type {String}
   */
  selectLabel: {
    type: String,
    default: 'Press enter to select'
  },
  /**
   * String to show when pointing to an option
   * @default 'Press enter to select'
   * @type {String}
   */
  selectGroupLabel: {
    type: String,
    default: 'Press enter to select group'
  },
  /**
   * String to show next to selected option
   * @default 'Selected'
   * @type {String}
   */
  selectedLabel: {
    type: String,
    default: 'Selected'
  },
  /**
   * String to show when pointing to an already selected option
   * @default 'Press enter to remove'
   * @type {String}
   */
  deselectLabel: {
    type: String,
    default: 'Press enter to remove'
  },
  /**
   * String to show when pointing to an already selected option
   * @default 'Press enter to remove'
   * @type {String}
   */
  deselectGroupLabel: {
    type: String,
    default: 'Press enter to deselect group'
  },
  /**
   * Decide whether to show pointer labels
   * @default true
   * @type {Boolean}
   */
  showLabels: {
    type: Boolean,
    default: true
  },
  /**
   * Limit the display of selected options. The rest will be hidden within the limitText string.
   * @default 99999
   * @type {Integer}
   */
  limit: {
    type: Number,
    default: 99999
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
   * Function that process the message shown when selected
   * elements pass the defined limit.
   * @default 'and * more'
   * @param {Int} count Number of elements more than limit
   * @type {Function}
   */
  limitText: {
    type: Function as PropType<(count: number) => string>,
    default: (count: number) => `and ${count} more`
  },
  /**
   * Set true to trigger the loading spinner.
   * @default False
   * @type {Boolean}
   */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * Disables the multiselect if true.
   * @default false
   * @type {Boolean}
   */
  disabled: {
    type: Boolean,
    default: false
  },
  /**
   * Enables search input's spellcheck if true.
   * @default false
   * @type {Boolean}
   */
  spellcheck: {
    type: Boolean,
    default: false
  },
  /**
   * Fixed opening direction
   * @default ''
   * @type {String}
   */
  openDirection: {
    type: String,
    default: ''
  },
  /**
   * Shows slot with message about empty options
   * @default true
   * @type {Boolean}
   */
  showNoOptions: {
    type: Boolean,
    default: true
  },
  showNoResults: {
    type: Boolean,
    default: true
  },
  tabindex: {
    type: Number,
    default: 0
  },
  /**
   * Adds Required attribute to the input element when there is no value selected
   * @default false
   * @type {Boolean}
   */
  required: {
    type: Boolean,
    default: false
  },
  /**
   * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the teleportTarget element
   * @default false
   * @type {Boolean}
   */
  useTeleport: {
    type: Boolean,
    default: false
  },
  /**
   * Target selector for teleporting the dropdown element
   * @default 'body'
   * @type {String|Object}
   */
  teleportTarget: {
    type: [String, Object] as PropType<string | object>,
    default: 'body'
  },
  /**
   * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
   * the teleported element
   */
  contentWrapperClass: {
    type: [String, Array, Object] as PropType<string | unknown[] | Record<string, unknown>>,
    default: ''
  }
}

/**
 * Full set of props used by the `Multiselect` component. Consumers building a
 * custom-templated select with `useMultiselect` / `usePointer` can reuse these.
 */
export const multiselectProps = {
  ...multiselectCoreProps,
  ...pointerProps,
  ...multiselectViewProps
}

export type MultiselectCoreProps = ExtractPublicPropTypes<typeof multiselectCoreProps>
export type PointerProps = ExtractPublicPropTypes<typeof pointerProps>
export type MultiselectViewProps = ExtractPublicPropTypes<typeof multiselectViewProps>
export type MultiselectProps = ExtractPublicPropTypes<typeof multiselectProps>

/** Events emitted by the multiselect. */
export const multiselectEmits = [
  'open',
  'search-change',
  'close',
  'select',
  'update:modelValue',
  'remove',
  'tag'
] as const
