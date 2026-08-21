import { computed, ref, watch, type ComputedRef, type Ref, type ShallowRef } from 'vue'
import type { multiselectProps } from '../props'
import type { ExtractPropTypes } from 'vue'

type Props = ExtractPropTypes<typeof multiselectProps>

/**
 * Dependencies the pointer logic needs from the surrounding multiselect.
 * Provided by `useMultiselect`, or by a consumer building a custom component.
 */
export interface UsePointerContext {
  filteredOptions: ComputedRef<any[]>
  optimizedHeight: Ref<number>
  isOpen: Ref<boolean>
  isSelected: (option: any) => boolean
  wholeGroupDisabled: (group: any) => boolean
  wholeGroupSelected: (group: any) => boolean
  select: (option: any, key?: string) => void
  listRef: Ref<HTMLElement | null>
  searchRef: Readonly<ShallowRef<HTMLInputElement | null>>
}

/**
 * Keyboard pointer / highlighting logic (formerly `pointerMixin`).
 */
export function usePointer (props: Props, ctx: UsePointerContext) {
  const pointer = ref(0)
  const pointerDirty = ref(false)

  const pointerPosition = computed(() => pointer.value * props.optionHeight)
  const visibleElements = computed(() => ctx.optimizedHeight.value / props.optionHeight)

  function optionHighlight (index: number, option: any) {
    return {
      'multiselect__option--highlight': index === pointer.value && props.showPointer,
      'multiselect__option--selected': ctx.isSelected(option)
    }
  }

  function groupHighlight (index: number, selectedGroup: any) {
    if (!props.groupSelect) {
      return [
        'multiselect__option--disabled',
        { 'multiselect__option--group': selectedGroup.$isLabel }
      ]
    }

    const group = props.options.find((option: any) => {
      return option[props.groupLabel as string] === selectedGroup.$groupLabel
    })

    return group && !ctx.wholeGroupDisabled(group)
      ? [
          'multiselect__option--group',
          { 'multiselect__option--highlight': index === pointer.value && props.showPointer },
          { 'multiselect__option--group-selected': ctx.wholeGroupSelected(group) }
        ]
      : 'multiselect__option--disabled'
  }

  function addPointerElement ({ key }: any = 'Enter') {
    /* istanbul ignore else */
    if (ctx.filteredOptions.value.length > 0) {
      ctx.select(ctx.filteredOptions.value[pointer.value], key)
    }
    pointerReset()
  }

  function pointerForward () {
    /* istanbul ignore else */
    if (pointer.value < ctx.filteredOptions.value.length - 1) {
      pointer.value++
      const list = ctx.listRef.value
      /* istanbul ignore next */
      if (list && list.scrollTop <= pointerPosition.value - (visibleElements.value - 1) * props.optionHeight) {
        list.scrollTop = pointerPosition.value - (visibleElements.value - 1) * props.optionHeight
      }
      /* istanbul ignore else */
      if (
        ctx.filteredOptions.value[pointer.value] &&
        ctx.filteredOptions.value[pointer.value].$isLabel &&
        !props.groupSelect
      ) pointerForward()
    }
    pointerDirty.value = true
  }

  function pointerBackward () {
    if (pointer.value > 0) {
      pointer.value--
      const list = ctx.listRef.value
      /* istanbul ignore else */
      if (list && list.scrollTop >= pointerPosition.value) {
        list.scrollTop = pointerPosition.value
      }
      /* istanbul ignore else */
      if (
        ctx.filteredOptions.value[pointer.value] &&
        ctx.filteredOptions.value[pointer.value].$isLabel &&
        !props.groupSelect
      ) pointerBackward()
    } else {
      /* istanbul ignore else */
      if (
        ctx.filteredOptions.value[pointer.value] &&
        ctx.filteredOptions.value[0].$isLabel &&
        !props.groupSelect
      ) pointerForward()
    }
    pointerDirty.value = true
  }

  function pointerReset () {
    /* istanbul ignore else */
    if (!props.closeOnSelect) return
    pointer.value = 0
    /* istanbul ignore else */
    if (ctx.listRef.value) {
      ctx.listRef.value.scrollTop = 0
    }
  }

  function pointerAdjust () {
    /* istanbul ignore else */
    if (pointer.value >= ctx.filteredOptions.value.length - 1) {
      pointer.value = ctx.filteredOptions.value.length
        ? ctx.filteredOptions.value.length - 1
        : 0
    }

    if (ctx.filteredOptions.value.length > 0 &&
      ctx.filteredOptions.value[pointer.value] &&
      ctx.filteredOptions.value[pointer.value].$isLabel &&
      !props.groupSelect
    ) {
      pointerForward()
    }
  }

  function pointerSet (index: number) {
    pointer.value = index
    pointerDirty.value = true
  }

  watch(ctx.filteredOptions, () => {
    pointerAdjust()
  })

  watch(ctx.isOpen, () => {
    pointerDirty.value = false
  })

  watch(pointer, () => {
    if (ctx.searchRef.value) {
      ctx.searchRef.value.setAttribute('aria-activedescendant', props.id + '-' + pointer.value.toString())
    }
  })

  return {
    pointer,
    pointerDirty,
    pointerPosition,
    visibleElements,
    optionHighlight,
    groupHighlight,
    addPointerElement,
    pointerForward,
    pointerBackward,
    pointerReset,
    pointerAdjust,
    pointerSet
  }
}

export type UsePointerReturn = ReturnType<typeof usePointer>
