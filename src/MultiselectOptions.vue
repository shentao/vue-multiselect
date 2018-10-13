<template lang="html">
  <transition name="multiselect">
    <div
      ref="list"
      class="multiselect__content-wrapper"
      :class="{
        'multiselect--above': isAbove
      }"
      :style="{ maxHeight: optimizedHeight + 'px' }"
      v-if="isOpen"
      @focus="activate"
      @click.prevent
    >
      <ul class="multiselect__content" :style="contentStyle">

        <slot name="_beforeList"></slot>

        <li v-if="multiple && max === internalValue.length">
          <span class="multiselect__option">
            <slot name="_maxElements">
              Maximum of {{ max }} options selected. First remove a selected option to select another.
            </slot>
          </span>
        </li>

        <template v-if="!max || internalValue.length < max">
          <li
            v-for="(option, index) of filteredOptions"
            class="multiselect__element"
            :key="index"
          >

            <span
              v-if="!(option && (option.$isLabel || option.$isDisabled))"
              class="multiselect__option"
              :class="optionHighlight(index, option)"
              @click.stop.prevent="select(option)"
              @mousedown.stop.prevent=""
              @mouseenter.self="pointerSet(index)"
            >
              <slot name="_option" :option="option">
                <span>{{ getOptionLabel(option) }}</span>
              </slot>
            </span>

            <span
              v-if="option && option.$isLabel"
              class="multiselect__option"
              :class="groupHighlight(index, option)"
              @mouseenter.self="groupSelect && pointerSet(index)"
              @mousedown.prevent="selectGroup(option)"
            >
              <slot name="_optionGroup" :option="option" :search="search">
                <span>{{ getOptionLabel(option) }}</span>
              </slot>
            </span>

          </li>
        </template>

        <li
          v-if="showNoResults && (filteredOptions.length === 0 && search && !loading)"
          class="multiselect__option"
        >
          <slot name="_noResult">
            No elements found.
          </slot>
        </li>

        <slot name="_afterList"></slot>
      </ul>
    </div>
  </transition>
</template>

<script>
import {
  isSelected
} from './utils'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    activate: {
      type: Function
    },
    deactivate: {
      type: Function
    },
    handleKeydown: {
      type: Function,
      required: true
    },
    search: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    id: {
      type: [String, Number]
    },
    isOpen: {
      type: Boolean
    },
    placeholder: {
      type: String
    },
    updateSearch: {
      type: Function
    },
    internalValue: {
      type: Array
    },
    filteredOptions: {
      type: Array
    },
    select: {
      type: Function
    },
    toggle: {
      type: Function
    },
    visibleValues: {
      type: Array
    },
    isSingleLabelVisible: {
      type: Boolean
    },
    singleValue: {
      type: [Object, Number, String]
    },
    isPlaceholderVisible: {
      type: Boolean
    },
    currentOptionLabel: {
      type: String
    },
    limit: {
      type: Number
    },
    limitText: {
      type: Function
    },
    getOptionLabel: {
      type: Function
    },
    removeElement: {
      type: Function
    },
    multiple: {
      type: Boolean
    },
    max: {
      type: [Number, Boolean]
    },
    contentStyle: {
      type: Object
    },
    optimizedHeight: {
      type: Number
    },
    isAbove: {
      type: Boolean
    },
    pointerSet: {
      type: Function
    },
    showNoResults: {
      type: Boolean
    },
    pointerPosition: {
      type: Number
    },
    visibleElements: {
      type: Number
    },
    optionHeight: {
      type: Number
    },
    showPointer: {
      type: Boolean
    },
    pointer: {
      type: Number
    },
    loading: {
      type: Boolean
    },
    groupHighlight: {
      type: Function
    },
    groupSelect: {
      type: Boolean,
      default: false
    },
    selectGroup: {
      type: Function
    }
  },
  watch: {
    pointerPosition (newPos, oldPos) {
      if (!this.$refs.list) return

      if (newPos > oldPos) {
        this.handlePointerForward()
      } else {
        this.handlePointerBackward()
      }
    }
  },
  methods: {
    handlePointerForward () {
      /* istanbul ignore next */
      if (this.$refs.list.scrollTop <= this.pointerPosition - (this.visibleElements - 1) * this.optionHeight) {
        this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
      }
    },
    handlePointerBackward () {
      /* istanbul ignore next */
      if (this.$refs.list.scrollTop >= this.pointerPosition) {
        this.$refs.list.scrollTop = this.pointerPosition
      }
    },
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': isSelected(option, this.internalValue)
      }
    }
  }
}
</script>

<style>
.multiselect__content-wrapper {
  position: absolute;
  box-sizing: border-box;
  display: block;
  background: #fff;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border: 1px solid #41B883;
  border-top: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
}

.multiselect__option {
  display: block;
  padding: 12px;
  /* min-height: 40px; */
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
