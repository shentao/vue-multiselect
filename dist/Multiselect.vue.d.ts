import { CSSProperties, DefineComponent, ExtractPropTypes, PropType, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare var __VLS_1: {
    toggle: () => void;
}, __VLS_3: {
    search: string;
}, __VLS_5: {
    search: string;
    remove: (option: any, shouldClose?: boolean) => void;
    values: any[];
    isOpen: boolean;
}, __VLS_7: {
    option: any;
    search: string;
    remove: (option: any, shouldClose?: boolean) => void;
}, __VLS_9: {}, __VLS_17: {}, __VLS_19: {
    option: any;
}, __VLS_21: {}, __VLS_35: {}, __VLS_37: {}, __VLS_39: {
    option: any;
    search: string;
    index: number;
}, __VLS_41: {
    option: any;
    search: string;
    index: number;
}, __VLS_43: {
    search: string;
}, __VLS_45: {}, __VLS_47: {};
type __VLS_Slots = {} & {
    caret?: (props: typeof __VLS_1) => any;
} & {
    clear?: (props: typeof __VLS_3) => any;
} & {
    selection?: (props: typeof __VLS_5) => any;
} & {
    tag?: (props: typeof __VLS_7) => any;
} & {
    limit?: (props: typeof __VLS_9) => any;
} & {
    loading?: (props: typeof __VLS_17) => any;
} & {
    singleLabel?: (props: typeof __VLS_19) => any;
} & {
    placeholder?: (props: typeof __VLS_21) => any;
} & {
    beforeList?: (props: typeof __VLS_35) => any;
} & {
    maxElements?: (props: typeof __VLS_37) => any;
} & {
    option?: (props: typeof __VLS_39) => any;
} & {
    option?: (props: typeof __VLS_41) => any;
} & {
    noResult?: (props: typeof __VLS_43) => any;
} & {
    noOptions?: (props: typeof __VLS_45) => any;
} & {
    afterList?: (props: typeof __VLS_47) => any;
};
declare const __VLS_base: DefineComponent<ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default(): never[];
    };
    selectLabel: {
        type: StringConstructor;
        default: string;
    };
    selectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    selectedLabel: {
        type: StringConstructor;
        default: string;
    };
    deselectLabel: {
        type: StringConstructor;
        default: string;
    };
    deselectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    showLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    limitText: {
        type: PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDirection: {
        type: StringConstructor;
        default: string;
    };
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
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    useTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportTarget: {
        type: PropType<string | object>;
        default: string;
    };
    contentWrapperClass: {
        type: PropType<string | unknown[] | Record<string, unknown>>;
        default: string;
    };
    showPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    optionHeight: {
        type: NumberConstructor;
        default: number;
    };
    internalSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<any[]>;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    trackBy: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    customLabel: {
        type: PropType<(option: any, label?: string) => any>;
        default(option: any, label?: string): any;
    };
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    tagPosition: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    id: {
        type: null;
        default: null;
    };
    optionsLimit: {
        type: NumberConstructor;
        default: number;
    };
    groupValues: {
        type: StringConstructor;
    };
    groupLabel: {
        type: StringConstructor;
    };
    groupSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    blockKeys: {
        type: PropType<string[]>;
        default(): never[];
    };
    preserveSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    preselectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventAutofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    filteringSortFunc: {
        type: PropType<(a: any, b: any) => number>;
        default: null;
    };
}>, {
    search: Ref<string, string>;
    isOpen: Ref<boolean, boolean>;
    preferredOpenDirection: Ref<string, string>;
    optimizedHeight: Ref<number, number>;
    internalValue: ComputedRef<any[]>;
    filteredOptions: ComputedRef<any[]>;
    valueKeys: ComputedRef<any[]>;
    optionKeys: ComputedRef<any>;
    currentOptionLabel: ComputedRef<any>;
    getValue: () => any;
    filterAndFlat: (options: any[], searchValue: string, label?: string) => any;
    flatAndStrip: (options: any[]) => any;
    updateSearch: (query: string) => void;
    isExistingOption: (query: string) => boolean;
    isSelected: (option: any) => boolean;
    isOptionDisabled: (option: any) => boolean;
    getOptionLabel: (option: any) => any;
    select: (option: any, key?: string) => void;
    selectGroup: (selectedGroup: any) => void;
    wholeGroupSelected: (group: any) => any;
    wholeGroupDisabled: (group: any) => any;
    removeElement: (option: any, shouldClose?: boolean) => void;
    removeLastElement: () => void;
    activate: () => void;
    deactivate: () => void;
    toggle: () => void;
    adjustPosition: () => void;
    filterOptions: (options: any[], searchValue: string, label: string | undefined, customLabel: (option: any, label?: string) => any) => any[];
    filterGroups: (searchValue: string, label: string | undefined, values: string, groupLabel: string, customLabel: (option: any, label?: string) => any) => (groups: any[]) => (never[] | {
        [x: string]: any;
    })[];
    pointer: Ref<number, number>;
    pointerDirty: Ref<boolean, boolean>;
    pointerPosition: ComputedRef<number>;
    visibleElements: ComputedRef<number>;
    optionHighlight: (index: number, option: any) => {
        'multiselect__option--highlight': boolean;
        'multiselect__option--selected': boolean;
    };
    groupHighlight: (index: number, selectedGroup: any) => "multiselect__option--disabled" | (string | {
        'multiselect__option--group': any;
    })[] | (string | {
        'multiselect__option--highlight': boolean;
        'multiselect__option--group-selected'?: undefined;
    } | {
        'multiselect__option--group-selected': boolean;
        'multiselect__option--highlight'?: undefined;
    })[];
    addPointerElement: ({ key }?: any) => void;
    pointerForward: () => void;
    pointerBackward: () => void;
    pointerReset: () => void;
    pointerAdjust: () => void;
    pointerSet: (index: number) => void;
    dropdownStyles: Ref<Record<string, string | number>, Record<string, string | number>>;
    ready: Ref<boolean, boolean>;
    hasOptionGroup: ComputedRef<boolean | "" | undefined>;
    visibleValues: ComputedRef<any[]>;
    singleValue: ComputedRef<any>;
    isSingleLabelVisible: ComputedRef<any>;
    isPlaceholderVisible: ComputedRef<boolean>;
    deselectLabelText: ComputedRef<string>;
    deselectGroupLabelText: ComputedRef<string>;
    selectLabelText: ComputedRef<string>;
    selectGroupLabelText: ComputedRef<string>;
    selectedLabelText: ComputedRef<string>;
    inputStyle: ComputedRef<string | CSSProperties>;
    contentStyle: ComputedRef<CSSProperties>;
    isAbove: ComputedRef<boolean>;
    isRequired: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    open: (...args: any[]) => void;
    "search-change": (...args: any[]) => void;
    close: (...args: any[]) => void;
    select: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    remove: (...args: any[]) => void;
    tag: (...args: any[]) => void;
}, string, PublicProps, Readonly< ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: null;
        default(): never[];
    };
    selectLabel: {
        type: StringConstructor;
        default: string;
    };
    selectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    selectedLabel: {
        type: StringConstructor;
        default: string;
    };
    deselectLabel: {
        type: StringConstructor;
        default: string;
    };
    deselectGroupLabel: {
        type: StringConstructor;
        default: string;
    };
    showLabels: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    limitText: {
        type: PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    spellcheck: {
        type: BooleanConstructor;
        default: boolean;
    };
    openDirection: {
        type: StringConstructor;
        default: string;
    };
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
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    useTeleport: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportTarget: {
        type: PropType<string | object>;
        default: string;
    };
    contentWrapperClass: {
        type: PropType<string | unknown[] | Record<string, unknown>>;
        default: string;
    };
    showPointer: {
        type: BooleanConstructor;
        default: boolean;
    };
    optionHeight: {
        type: NumberConstructor;
        default: number;
    };
    internalSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<any[]>;
        required: true;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    trackBy: {
        type: StringConstructor;
    };
    label: {
        type: StringConstructor;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideSelected: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    allowEmpty: {
        type: BooleanConstructor;
        default: boolean;
    };
    resetAfter: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    customLabel: {
        type: PropType<(option: any, label?: string) => any>;
        default(option: any, label?: string): any;
    };
    taggable: {
        type: BooleanConstructor;
        default: boolean;
    };
    tagPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    tagPosition: {
        type: StringConstructor;
        default: string;
    };
    max: {
        type: PropType<number | boolean>;
        default: boolean;
    };
    id: {
        type: null;
        default: null;
    };
    optionsLimit: {
        type: NumberConstructor;
        default: number;
    };
    groupValues: {
        type: StringConstructor;
    };
    groupLabel: {
        type: StringConstructor;
    };
    groupSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    blockKeys: {
        type: PropType<string[]>;
        default(): never[];
    };
    preserveSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    preselectFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    preventAutofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    filteringSortFunc: {
        type: PropType<(a: any, b: any) => number>;
        default: null;
    };
}>> & Readonly<{
    onOpen?: ((...args: any[]) => any) | undefined;
    "onSearch-change"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
    onTag?: ((...args: any[]) => any) | undefined;
}>, {
    internalSearch: boolean;
    multiple: boolean;
    searchable: boolean;
    clearOnSelect: boolean;
    hideSelected: boolean;
    placeholder: string;
    allowEmpty: boolean;
    resetAfter: boolean;
    closeOnSelect: boolean;
    customLabel: (option: any, label?: string) => any;
    taggable: boolean;
    tagPlaceholder: string;
    tagPosition: string;
    max: number | boolean;
    id: any;
    optionsLimit: number;
    groupSelect: boolean;
    blockKeys: string[];
    preserveSearch: boolean;
    preselectFirst: boolean;
    preventAutofocus: boolean;
    filteringSortFunc: (a: any, b: any) => number;
    showPointer: boolean;
    optionHeight: number;
    name: string;
    modelValue: any;
    selectLabel: string;
    selectGroupLabel: string;
    selectedLabel: string;
    deselectLabel: string;
    deselectGroupLabel: string;
    showLabels: boolean;
    limit: number;
    maxHeight: number;
    limitText: (count: number) => string;
    loading: boolean;
    disabled: boolean;
    spellcheck: boolean;
    openDirection: string;
    showNoOptions: boolean;
    showNoResults: boolean;
    tabindex: number;
    required: boolean;
    useTeleport: boolean;
    teleportTarget: string | object;
    contentWrapperClass: string | unknown[] | Record<string, unknown>;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Multiselect.vue.d.ts.map