import { ComputedRef, Ref, ShallowRef, ExtractPropTypes } from 'vue';
import { multiselectProps } from '../props';
type Props = ExtractPropTypes<typeof multiselectProps>;
/**
 * Dependencies the pointer logic needs from the surrounding multiselect.
 * Provided by `useMultiselect`, or by a consumer building a custom component.
 */
export interface UsePointerContext {
    filteredOptions: ComputedRef<any[]>;
    optimizedHeight: Ref<number>;
    isOpen: Ref<boolean>;
    isSelected: (option: any) => boolean;
    wholeGroupDisabled: (group: any) => boolean;
    wholeGroupSelected: (group: any) => boolean;
    select: (option: any, key?: string) => void;
    listRef: Ref<HTMLElement | null>;
    searchRef: Readonly<ShallowRef<HTMLInputElement | null>>;
}
/**
 * Keyboard pointer / highlighting logic (formerly `pointerMixin`).
 */
export declare function usePointer(props: Props, ctx: UsePointerContext): {
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
};
export type UsePointerReturn = ReturnType<typeof usePointer>;
export {};
//# sourceMappingURL=usePointer.d.ts.map