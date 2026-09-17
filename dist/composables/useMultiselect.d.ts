import { Ref, ShallowRef, ExtractPropTypes, ComputedRef } from 'vue';
import { multiselectProps } from '../props';
type Props = ExtractPropTypes<typeof multiselectProps>;
type MultiselectEmit = (event: any, ...args: any[]) => void;
/**
 * Template element references the multiselect logic needs. When building a
 * custom component, provide refs bound to the equivalent elements.
 */
export interface MultiselectRefs {
    root: Ref<HTMLElement | null>;
    search: Readonly<ShallowRef<HTMLInputElement | null>>;
    list: Ref<HTMLElement | null>;
}
/**
 * Core multiselect logic (formerly `multiselectMixin`), combined with the
 * keyboard pointer logic. Returns everything needed to render a select.
 */
export declare function useMultiselect(props: Props, emit: MultiselectEmit, refs: MultiselectRefs): {
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
};
export type UseMultiselectReturn = ReturnType<typeof useMultiselect>;
export {};
//# sourceMappingURL=useMultiselect.d.ts.map