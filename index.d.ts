// Type definitions originally for Vue-Multislect 2.1.0, rebuilt and tested with Vue 3 version
// Originally written by: Akshay Jat https://github.com/akki-jat
import { DefineComponent } from 'vue';

export interface MultiselectMixinProps {
  /**
   * Decide whether to filter the results based on search query.
   * Useful for async filtering, where we search through more complex data.
   * @type {Boolean}
   */
  internalSearch?: boolean;
  /**
   * Array of available options: Objects, Strings or Integers.
   * If array of objects, visible label will default to option.label.
   * If `labal` prop is passed, label will equal option['label']
   * @type {Array}
   */
  options: Array<string | number> | Array<any>;
  /**
   * Equivalent to the `multiple` attribute on a `<select>` input.
   * @default false
   * @type {Boolean}
   */
  multiple?: boolean;
  /**
   * Key to compare objects
   * @default 'id'
   * @type {String}
   */
  trackBy?: string;
  /**
   * Label to look for in option Object
   * @default 'label'
   * @type {String}
   */
  label?: string;
  /**
   * Enable/disable search in options
   * @default true
   * @type {Boolean}
   */
  searchable?: boolean;
  /**
   * Clear the search input after `)
   * @default true
   * @type {Boolean}
   */
  clearOnSelect?: boolean;
  /**
   * Hide already selected options
   * @default false
   * @type {Boolean}
   */
  hideSelected?: boolean;
  /**
   * Equivalent to the `placeholder` attribute on a `<select>` input.
   * @default 'Select option'
   * @type {String}
   */
  placeholder?: string;
  /**
   * Allow to remove all selected values
   * @default true
   * @type {Boolean}
   */
  allowEmpty?: boolean;
  /**
   * Reset this.internalValue, this.search after this.internalValue changes.
   * Useful if want to create a stateless dropdown.
   * @default false
   * @type {Boolean}
   */
  resetAfter?: boolean;
  /**
   * Enable/disable closing after selecting an option
   * @default true
   * @type {Boolean}
   */
  closeOnSelect?: boolean;
  /**
   * Function to interpolate the custom label
   * @default false
   * @type {Function}
   */
  customLabel?: (option: any, label: any) => string;
  /**
   * Disable / Enable tagging
   * @default false
   * @type {Boolean}
   */
  taggable?: boolean;
  /**
   * String to show when highlighting a potential tag
   * @default 'Press enter to create a tag'
   * @type {String}
   */
  tagPlaceholder?: string;
  /**
   * By default new tags will appear above the search results.
   * Changing to 'bottom' will revert this behaviour
   * and will proritize the search results
   * @default 'top'
   * @type {String}
   */
  tagPosition?: string;
  /**
   * Number of allowed selected options. No limit if 0.
   * @default 0
   * @type {Number}
   */
  max?: number | boolean;
  /**
   * Will be passed with all events as second param.
   * Useful for identifying events origin.
   * @default null
   * @type {String|Integer}
   */
  id?: string | number | null;
  /**
   * Limits the options displayed in the dropdown
   * to the first X options.
   * @default 1000
   * @type {Integer}
   */
  optionsLimit?: number;
  /**
   * Name of the property containing
   * the group values
   * @default 1000
   * @type {String}
   */
  groupValues?: string;
  /**
   * Name of the property containing
   * the group label
   * @default 1000
   * @type {String}
   */
  groupLabel?: string;
  /**
   * Allow to select all group values
   * by selecting the group label
   * @default false
   * @type {Boolean}
   */
  groupSelect?: boolean;
  /**
   * Array of keyboard keys to block
   * when selecting
   * @default 1000
   * @type {String}
   */
  blockKeys?: string[];
  /**
   * Prevent from wiping up the search value
   * @default false
   * @type {Boolean}
   */
  preserveSearch?: boolean;
  /**
   * Select 1st options if value is empty
   * @default false
   * @type {Boolean}
   */
  preselectFirst?: boolean;
  /**
   * Prevent autofocus
   * @default false
   * @type {Boolean}
   */
  preventAutofocus?: boolean;
  /** 
   * Allows a custom function for sorting search/filtered results. 
   * @default null 
   * @type {Function} 
   */ 
  filteringSortFunc?: (a: any, b: any) => number;
}

export interface PointerMixinProps {
  /**
   * Enable/disable highlighting of the pointed value.
   * @type {Boolean}
   * @default true
   */
  showPointer?: boolean;
  optionHeight?: number;
}

export interface ComponentProps {
  /**
   * name attribute to match optional label element
   * @default ''
   * @type {String}
   */
  name?: string;
  /**
   * Presets the selected options value.
   * @type {Object||Array||String||Integer||null}
   */
  modelValue?: object | any[] | string | number | null;
  /**
   * String to show when pointing to an option
   * @default 'Press enter to select'
   * @type {String}
   */
  selectLabel?: string;
  /**
   * String to show when pointing to an option
   * @default 'Press enter to select'
   * @type {String}
   */
  selectGroupLabel?: string;
  /**
   * String to show next to selected option
   * @default 'Selected'
   * @type {String}
   */
  selectedLabel?: string;
  /**
   * String to show when pointing to an already selected option
   * @default 'Press enter to remove'
   * @type {String}
   */
  deselectLabel?: string;
  /**
   * String to show when pointing to an already selected option
   * @default 'Press enter to remove'
   * @type {String}
   */
  deselectGroupLabel?: string;
  /**
   * Decide whether to show pointer labels
   * @default true
   * @type {Boolean}
   */
  showLabels?: boolean;
  /**
   * Limit the display of selected options. The rest will be hidden within the limitText string.
   * @default 99999
   * @type {Integer}
   */
  limit?: number;
  /**
   * Sets maxHeight style value of the dropdown
   * @default 300
   * @type {Integer}
   */
  maxHeight?: number;
  /**
   * Function that process the message shown when selected
   * elements pass the defined limit.
   * @default 'and * more'
   * @param {Int} count Number of elements more than limit
   * @type {Function}
   */
  limitText?: (count: number) => string;
  /**
   * Set true to trigger the loading spinner.
   * @default False
   * @type {Boolean}
   */
  loading?: boolean;
  /**
   * Disables the multiselect if true.
   * @default false
   * @type {Boolean}
   */
  disabled?: boolean;
  /**
   * Enables search input's spellcheck if true.
   * @default false
   * @type {Boolean}
   */
  spellcheck?: boolean;
  /**
   * Fixed opening direction
   * @default ''
   * @type {String}
   */
  openDirection?: string;
  /**
   * Shows slot with message about empty options
   * @default true
   * @type {Boolean}
   */
  showNoOptions?: boolean;
  showNoResults?: boolean;
  tabindex?: number;
  required?: boolean;
}

export type MultiselectProps = ComponentProps & MultiselectMixinProps & PointerMixinProps;

export const multiselectMixin: DefineComponent<MultiselectMixinProps>;
export const pointerMixin: DefineComponent<PointerMixinProps>;
export const Multiselect: DefineComponent<
  ComponentProps,
  {},
  {},
  {},
  { activate(): void; deactivate(): void },
  typeof multiselectMixin | typeof pointerMixin
>;

export default Multiselect;