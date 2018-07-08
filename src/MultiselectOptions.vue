<template lang="html">
  <transition name="multiselect">
    <div
      class="multiselect__content-wrapper"
      v-if="$parent.isOpen"
      @focus="$parent.activate"
      @click.prevent
      :style="{ maxHeight: $parent.optimizedHeight + 'px' }"
      ref="list"
    >
      <ul class="multiselect__content" :style="$parent.contentStyle">
        <slot name="beforeList"></slot>
        <li v-if="$parent.multiple && $parent.max === $parent.internalValue.length">
          <span class="multiselect__option">
            <slot name="maxElements">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>
          </span>
        </li>
        <template v-if="!$parent.max || internalValue.length < max">
          <li
            class="multiselect__element"
            v-for="(option, index) of $parent.filteredOptions"
            :key="index"
          >
            <span
              v-if="!(option && (option.$isLabel || option.$isDisabled))"
              :class="$parent.optionHighlight(index, option)"
              @click.stop.prevent="$parent.select(option)"
              @mousedown.stop.prevent=""
              @mouseenter.self="$parent.pointerSet(index)"
              class="multiselect__option"
            >
              <slot name="option" :option="option">
                <span>{{ $parent.getOptionLabel(option) }}</span>
              </slot>
            </span>
            <span
              v-if="option && (option.$isLabel || option.$isDisabled)"
              :class="$parent.groupHighlight(index, option)"
              @mouseenter.self="$parent.groupSelect && $parent.pointerSet(index)"
              @mousedown.prevent="$parent.selectGroup(option)"
              class="multiselect__option"
            >
              <slot name="option" :option="option" :search="$parent.search">
                <span>{{ $parent.getOptionLabel(option) }}</span>
              </slot>
            </span>
          </li>
        </template>
        <li
          v-show="$parent.showNoResults && ($parent.filteredOptions.length === 0 && search && !loading)"
        >
          <span class="multiselect__option">
            <slot name="noResult">
              No elements found. Consider changing the search query.
            </slot>
          </span>
        </li>
        <slot name="afterList"></slot>
      </ul>
    </div>
  </transition>
</template>

<script>
import {
  isSelected,
  isEmpty
} from './utils'

export default {
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': isSelected(option, this.$parent.value)
      }
    },
    getOptionLabel (option) {
      if (isEmpty(option)) return ''
      /* istanbul ignore else */
      if (option.isTag) return option.label
      /* istanbul ignore else */
      if (option.$isLabel) return option.$groupLabel

      let label = this.$parent.customLabel(option, this.label)
      /* istanbul ignore else */
      if (isEmpty(label)) return ''
      return label
    }
  }
}
</script>
