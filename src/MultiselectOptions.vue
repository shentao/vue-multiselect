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
            v-for="(option, index) of optionsList"
            class="multiselect__element"
            :id="`${id}${pointer}HighlightedOption`"
            :key="index"
          >
            <span
              v-if="!(option && (option.$isLabel || option.$isDisabled))"
              class="multiselect__option"
              :class="optionHighlight(index, option)"
              @click.stop.prevent="select(option)"
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
              @click.stop.prevent="selectGroup(option)"
              @mouseenter.self="groupSelect && pointerSet(index)"
            >
              <slot name="_optionGroup" :option="option" :search="search">
                <span>{{ getOptionLabel(option) }}</span>
              </slot>
            </span>

          </li>
        </template>

        <li
          v-if="showNoResults && (optionsList.length === 0 && !loading)"
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
  isSelected,
  not,
  flattenOptions,
  flow,
  filterGroups,
  stripGroups
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
    /**
     * String to show when pointing to an alredy selected option
     * @default 'Press enter to remove'
     * @type {String}
    */
    deselectGroupLabel: {
      type: String,
      default: 'Press enter to deselect group'
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
    select: {
      type: Function,
      required: true
    },
    remove: {
      type: Function,
      required: true
    },
    customLabel: {
      type: Function
    },
    isSelected: {
      type: Function
    },
    label: {
      type: String
    }
  },
  computed: {
    deselectGroupLabelText () {
      return this.showLabels
        ? this.deselectGroupLabel
        : ''
    },
    selectGroupLabelText () {
      return this.showLabels
        ? this.selectGroupLabel
        : ''
    },
    optionsList () {
      return this.groupSelect
        ? this.filterAndFlat(this.filteredOptions, this.search, this.label)
        : this.filteredOptions
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
    },
    /**
     * Add the given group options to the list of selected options
     * If all group optiona are already selected -> remove it from the results.
     *
     * @param  {Object||String||Integer} group to select/deselect
     */
    selectGroup (selectedGroup) {
      const group = this.filteredOptions.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      if (!group) return

      if (this.wholeGroupSelected(group)) {
        this.remove(group[this.groupValues])
      } else {
        const optionsToAdd = group[this.groupValues].filter(not(this.isSelected))

        this.select(optionsToAdd, this.id)
      }
    },
    groupHighlight (index, selectedGroup) {
      if (!this.groupSelect) {
        return ['multiselect__option--disabled']
      }

      const group = this.filteredOptions.find(option => {
        return option[this.groupLabel] === selectedGroup.$groupLabel
      })

      return [
        this.groupSelect ? 'multiselect__option--group' : 'multiselect__option--disabled',
        { 'multiselect__option--highlight': index === this.pointer && this.showPointer },
        { 'multiselect__option--group-selected': this.wholeGroupSelected(group) }
      ]
    },
    /**
     * Filters and then flattens the options list
     * @param  {Array}
     * @returns {Array} returns a filtered and flat options list
     */
    filterAndFlat (options, search, label) {
      return flow(
        filterGroups(search, label, this.groupValues, this.groupLabel, this.customLabel),
        flattenOptions(this.groupValues, this.groupLabel)
      )(options)
    },
    /**
     * Flattens and then strips the group labels from the options list
     * @param  {Array}
     * @returns {Array} returns a flat options list without group labels
     */
    flatAndStrip (options) {
      return flow(
        flattenOptions(this.groupValues, this.groupLabel),
        stripGroups
      )(options)
    },
    /**
     * Helper to identify if all values in a group are selected
     *
     * @param {Object} group to validated selected values against
     */
    wholeGroupSelected (group) {
      return group[this.groupValues].every(this.isSelected)
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
  margin-top: 5px;
  border: 1px solid #cecdcd;
  border-radius: 5px;
  z-index: 50;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 2px 10px 4px #31313126;
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
  background: #e2f7ed;
  outline: none;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: #e2f7ed;
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
