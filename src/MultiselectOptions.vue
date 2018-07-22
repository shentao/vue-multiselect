<template lang="html">
  <transition name="multiselect">
    <div
      ref="list"
      class="multiselect__content-wrapper"
      :class="{
        'multiselect--above': $parent.isAbove
      }"
      :style="{ maxHeight: $parent.optimizedHeight + 'px' }"
      v-if="$parent.isOpen"
      @focus="$parent.activate"
      @click.prevent
    >
      <ul class="multiselect__content" :style="$parent.contentStyle">

        <slot name="beforeList"></slot>

        <li v-if="$parent.multiple && $parent.max === $parent.internalValue.length">
          <span class="multiselect__option">
            <slot name="maxElements">
              Maximum of {{ $parent.max }} options selected. First remove a selected option to select another.
            </slot>
          </span>
        </li>

        <template v-if="!$parent.max || $parent.internalValue.length < $parent.max">
          <li
            v-for="(option, index) of $parent.filteredOptions"
            class="multiselect__element"
            :key="index"
          >

            <span
              v-if="!(option && (option.$isLabel || option.$isDisabled))"
              class="multiselect__option"
              :class="$parent.optionHighlight(index, option)"
              @click.stop.prevent="$parent.select(option)"
              @mousedown.stop.prevent=""
              @mouseenter.self="$parent.pointerSet(index)"
            >
              <slot name="option" :option="option">
                <span>{{ $parent.getOptionLabel(option) }}</span>
              </slot>
            </span>

            <span
              v-if="option && option.$isLabel"
              class="multiselect__option"
              :class="$parent.groupHighlight(index, option)"
              @mouseenter.self="$parent.groupSelect && $parent.pointerSet(index)"
              @mousedown.prevent="$parent.selectGroup(option)"
            >
              <slot name="optionGroup" :option="option" :search="$parent.search">
                <span>{{ $parent.getOptionLabel(option) }}</span>
              </slot>
            </span>

          </li>
        </template>

        <li
          v-show="$parent.showNoResults && ($parent.filteredOptions.length === 0 && $parent.search && !$parent.loading)"
          class="multiselect__option"
        >
          <slot name="noResult">
            No elements found. Consider changing the search query.
          </slot>
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

<style>
.multiselect__content-wrapper {
  position: absolute;
  display: block;
  background: #fff;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #E8E8E8;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
}

.multiselect__option {
  display: block;
  padding: 12px;
  min-height: 40px;
  line-height: 16px;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
}

.multiselect__option:after {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 40px;
  padding-right: 12px;
  padding-left: 20px;
  font-size: 13px;
}

.multiselect__option--highlight {
  background: #41B883;
  outline: none;
  color: white;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: #41B883;
  color: white;
}

.multiselect__option--selected {
  background: #F3F3F3;
  color: #35495E;
  font-weight: bold;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  color: silver;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #FF6A6A;
  color: #fff;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  background: #FF6A6A;
  content: attr(data-deselect);
  color: #fff;
}

.multiselect__option--disabled {
  background: #ededed;
  color: #a6a6a6;
  cursor: text;
  pointer-events: none;
}

.multiselect__option--group {
  background: #ededed;
  color: #35495E;
}

.multiselect__option--group.multiselect__option--highlight {
  background: #35495E;
  color: #fff;
}

.multiselect__option--group.multiselect__option--highlight:after {
  background: #35495E;
}

.multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede;
}

.multiselect__option--group-selected.multiselect__option--highlight {
  background: #FF6A6A;
  color: #fff;
}

.multiselect__option--group-selected.multiselect__option--highlight:after {
  background: #FF6A6A;
  content: attr(data-deselect);
  color: #fff;
}
</style>
