import { ExtractPublicPropTypes, PropType } from 'vue';
/**
 * Props for the core multiselect logic (formerly `multiselectMixin`).
 */
export declare const multiselectCoreProps: {
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
        type: PropType<any[]>;
        required: true;
    };
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
        type: StringConstructor;
    };
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
        type: StringConstructor;
    };
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
        type: PropType<(option: any, label?: string) => any>;
        default(option: any, label?: string): any;
    };
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
        type: null;
        default: null;
    };
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
        type: StringConstructor;
    };
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
        type: StringConstructor;
    };
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
        type: PropType<string[]>;
        default(): never[];
    };
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
        type: PropType<(a: any, b: any) => number>;
        default: null;
    };
};
/**
 * Props for the keyboard pointer logic (formerly `pointerMixin`).
 */
export declare const pointerProps: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    optionHeight: {
        type: NumberConstructor;
        default: number;
    };
};
/**
 * Props specific to the default `Multiselect` component view.
 */
export declare const multiselectViewProps: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    modelValue: {
        type: null;
        default(): never[];
    };
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
        type: PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the teleportTarget element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Target selector for teleporting the dropdown element
     * @default 'body'
     * @type {String|Object}
     */
    teleportTarget: {
        type: PropType<string | object>;
        default: string;
    };
    /**
     * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
     * the teleported element
     */
    contentWrapperClass: {
        type: PropType<string | unknown[] | Record<string, unknown>>;
        default: string;
    };
};
/**
 * Full set of props used by the `Multiselect` component. Consumers building a
 * custom-templated select with `useMultiselect` / `usePointer` can reuse these.
 */
export declare const multiselectProps: {
    /**
     * name attribute to match optional label element
     * @default ''
     * @type {String}
     */
    name: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Presets the selected options value.
     * @type {Object||Array||String||Integer}
     */
    modelValue: {
        type: null;
        default(): never[];
    };
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an option
     * @default 'Press enter to select'
     * @type {String}
     */
    selectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show next to selected option
     * @default 'Selected'
     * @type {String}
     */
    selectedLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * String to show when pointing to an already selected option
     * @default 'Press enter to remove'
     * @type {String}
     */
    deselectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Decide whether to show pointer labels
     * @default true
     * @type {Boolean}
     */
    showLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Limit the display of selected options. The rest will be hidden within the limitText string.
     * @default 99999
     * @type {Integer}
     */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Sets maxHeight style value of the dropdown
     * @default 300
     * @type {Integer}
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Function that process the message shown when selected
     * elements pass the defined limit.
     * @default 'and * more'
     * @param {Int} count Number of elements more than limit
     * @type {Function}
     */
    limitText: {
        type: PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    /**
     * Set true to trigger the loading spinner.
     * @default False
     * @type {Boolean}
     */
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disables the multiselect if true.
     * @default false
     * @type {Boolean}
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enables search input's spellcheck if true.
     * @default false
     * @type {Boolean}
     */
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Fixed opening direction
     * @default ''
     * @type {String}
     */
    openDirection: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Shows slot with message about empty options
     * @default true
     * @type {Boolean}
     */
    showNoOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    showNoResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Adds Required attribute to the input element when there is no value selected
     * @default false
     * @type {Boolean}
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Uses Vue Teleport's feature. Teleports the open dropdown to the bottom of the teleportTarget element
     * @default false
     * @type {Boolean}
     */
    useTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Target selector for teleporting the dropdown element
     * @default 'body'
     * @type {String|Object}
     */
    teleportTarget: {
        type: PropType<string | object>;
        default: string;
    };
    /**
     * Classes to apply to the `multiselect__content-wrapper` element. This element is a teleport element (when enabled), so can be used to specifically target
     * the teleported element
     */
    contentWrapperClass: {
        type: PropType<string | unknown[] | Record<string, unknown>>;
        default: string;
    };
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    optionHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Decide whether to filter the results based on search query.
     * Useful for async filtering, where we search through more complex data.
     * @type {Boolean}
     */
    internalSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Array of available options: Objects, Strings or Integers.
     * If array of objects, visible label will default to option.label.
     * If `labal` prop is passed, label will equal option['label']
     * @type {Array}
     */
    options: {
        type: PropType<any[]>;
        required: true;
    };
    /**
     * Equivalent to the `multiple` attribute on a `<select>` input.
     * @default false
     * @type {Boolean}
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Key to compare objects
     * @default 'id'
     * @type {String}
     */
    trackBy: {
        type: StringConstructor;
    };
    /**
     * Label to look for in option Object
     * @default 'label'
     * @type {String}
     */
    label: {
        type: StringConstructor;
    };
    /**
     * Enable/disable search in options
     * @default true
     * @type {Boolean}
     */
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Clear the search input after `)
     * @default true
     * @type {Boolean}
     */
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Hide already selected options
     * @default false
     * @type {Boolean}
     */
    hideSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Equivalent to the `placeholder` attribute on a `<select>` input.
     * @default 'Select option'
     * @type {String}
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Allow to remove all selected values
     * @default true
     * @type {Boolean}
     */
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Reset this.internalValue, this.search after this.internalValue changes.
     * Useful if want to create a stateless dropdown.
     * @default false
     * @type {Boolean}
     */
    resetAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Enable/disable closing after selecting an option
     * @default true
     * @type {Boolean}
     */
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Function to interpolate the custom label
     * @default false
     * @type {Function}
     */
    customLabel: {
        type: PropType<(option: any, label?: string) => any>;
        default(option: any, label?: string): any;
    };
    /**
     * Disable / Enable tagging
     * @default false
     * @type {Boolean}
     */
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * String to show when highlighting a potential tag
     * @default 'Press enter to create a tag'
     * @type {String}
    */
    tagPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * By default new tags will appear above the search results.
     * Changing to 'bottom' will revert this behaviour
     * and will proritize the search results
     * @default 'top'
     * @type {String}
    */
    tagPosition: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Number of allowed selected options. No limit if 0.
     * @default 0
     * @type {Number}
    */
    max: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    /**
     * Will be passed with all events as second param.
     * Useful for identifying events origin.
     * @default null
     * @type {String|Integer}
    */
    id: {
        type: null;
        default: null;
    };
    /**
     * Limits the options displayed in the dropdown
     * to the first X options.
     * @default 1000
     * @type {Integer}
    */
    optionsLimit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Name of the property containing
     * the group values
     * @default 1000
     * @type {String}
    */
    groupValues: {
        type: StringConstructor;
    };
    /**
     * Name of the property containing
     * the group label
     * @default 1000
     * @type {String}
    */
    groupLabel: {
        type: StringConstructor;
    };
    /**
     * Allow to select all group values
     * by selecting the group label
     * @default false
     * @type {Boolean}
     */
    groupSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Array of keyboard keys to block
     * when selecting
     * @default 1000
     * @type {String}
    */
    blockKeys: {
        type: PropType<string[]>;
        default(): never[];
    };
    /**
     * Prevent from wiping up the search value
     * @default false
     * @type {Boolean}
    */
    preserveSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Select 1st options if value is empty
     * @default false
     * @type {Boolean}
    */
    preselectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Prevent autofocus
     * @default false
     * @type {Boolean}
     */
    preventAutofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Allows a custom function for sorting search/filtered results.
     * @default null
     * @type {Function}
     */
    filteringSortFunc: {
        type: PropType<(a: any, b: any) => number>;
        default: null;
    };
};
export type MultiselectCoreProps = ExtractPublicPropTypes<typeof multiselectCoreProps>;
export type PointerProps = ExtractPublicPropTypes<typeof pointerProps>;
export type MultiselectViewProps = ExtractPublicPropTypes<typeof multiselectViewProps>;
export type MultiselectProps = ExtractPublicPropTypes<typeof multiselectProps>;
/** Events emitted by the multiselect. */
export declare const multiselectEmits: readonly ["open", "search-change", "close", "select", "update:modelValue", "remove", "tag"];
//# sourceMappingURL=props.d.ts.map