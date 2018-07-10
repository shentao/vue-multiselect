<template>
  <div
    :tabindex="searchable ? -1 : tabindex"
    :class="{ 'multiselect--active': isOpen, 'multiselect--disabled': disabled, 'multiselect--above': isAbove }"
    @focus="activate()"
    @blur="searchable ? false : deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.tab.stop.self="addPointerElement($event)"
    @keyup.esc="deactivate()"
    class="multiselect">
      <slot name="caret" :toggle="toggle">
        <div @mousedown.prevent.stop="toggle()" class="multiselect__select"></div>
      </slot>
      <slot name="clear" :search="search"></slot>
      <div ref="tags" class="multiselect__tags">
        <input
          ref="search"
          v-if="searchable"
          :name="name"
          :id="id"
          type="text"
          autocomplete="off"
          :placeholder="placeholder"
          :style="inputStyle"
          :value="search"
          :disabled="disabled"
          :tabindex="tabindex"
          @input="updateSearch($event.target.value)"
          @focus.prevent="activate()"
          @blur.prevent="deactivate()"
          @keyup.esc="deactivate()"
          @keydown.down.prevent="pointerForward()"
          @keydown.up.prevent="pointerBackward()"
          @keydown.enter.prevent.stop.self="addPointerElement($event)"
          @keydown.delete.stop="removeLastElement()"
          class="multiselect__input"/>
        <span
          v-if="isPlaceholderVisible"
          class="multiselect__placeholder"
          @mousedown.prevent="toggle"
          @touchstart="toggle">
          <slot name="placeholder">
              {{ placeholder }}
          </slot>
        </span>
        <div class="multiselect__tags-wrap" v-show="visibleValues.length > 0">
          <template v-for="option of visibleValues" @mousedown.prevent>
            <slot name="tag" :option="option" :search="search" :remove="removeElement">
              <span class="multiselect__tag">
                <span v-text="getOptionLabel(option)"></span>
                <i aria-hidden="true" tabindex="1" @keydown.enter.prevent="removeElement(option)"  @mousedown.prevent="removeElement(option)" class="multiselect__tag-icon"></i>
              </span>
            </slot>
          </template>
        </div>
        <template v-if="internalValue && internalValue.length > limit">
          <slot name="limit">
            <strong class="multiselect__strong" v-text="limitText(internalValue.length - limit)"/>
          </slot>
        </template>
        <transition name="multiselect__loading">
          <slot name="loading">
            <div v-show="loading" class="multiselect__spinner"/>
          </slot>
        </transition>
        <span
          v-if="isSingleLabelVisible"
          class="multiselect__single"
          @mousedown.prevent="toggle"
          @touchstart="toggle"
          >
          <slot name="singleLabel" :option="singleValue">
            <template>{{ currentOptionLabel }}</template>
          </slot>
        </span>
      </div>
      <transition name="multiselect">
        <div
          class="multiselect__content-wrapper"
          v-show="isOpen"
          @focus="activate"
          @mousedown.prevent
          :style="listStyle"
          ref="list">
          <ul class="multiselect__content" :style="contentStyle">
            <slot name="beforeList"></slot>
            <li v-if="multiple && max === internalValue.length">
              <span class="multiselect__option">
                <slot name="maxElements">Maximum of {{ max }} options selected. First remove a selected option to select another.</slot>
              </span>
            </li>
            <template v-if="!max || internalValue.length < max">
              <li class="multiselect__element" v-for="(option, index) of filteredOptions" :key="index">
                <span
                  v-if="!(option && (option.$isLabel || option.$isDisabled))"
                  :class="optionHighlight(index, option)"
                  @click.stop="select(option)"
                  @mouseenter.self="pointerSet(index)"
                  :data-select="option && option.isTag ? tagPlaceholder : selectLabelText"
                  :data-selected="selectedLabelText"
                  :data-deselect="deselectLabelText"
                  class="multiselect__option">
                    <slot name="option" :option="option" :search="search">
                      <span>{{ getOptionLabel(option) }}</span>
                    </slot>
                </span>
                <span
                  v-if="option && (option.$isLabel || option.$isDisabled)"
                  :data-select="groupSelect && selectGroupLabelText"
                  :data-deselect="groupSelect && deselectGroupLabelText"
                  :class="groupHighlight(index, option)"
                  @mouseenter.self="groupSelect && pointerSet(index)"
                  @mousedown.prevent="selectGroup(option)"
                  class="multiselect__option">
                    <slot name="option" :option="option" :search="search">
                      <span>{{ getOptionLabel(option) }}</span>
                    </slot>
                </span>
              </li>
            </template>
            <li v-show="showNoResults && (filteredOptions.length === 0 && search && !loading)">
              <span class="multiselect__option">
                <slot name="noResult">No elements found. Consider changing the search query.</slot>
              </span>
            </li>
            <li v-show="showNoOptions && (options.length === 0 && !search && !loading)">
              <span class="multiselect__option">
                <slot name="noOptions">List is empty.</slot>
              </span>
            </li>
            <slot name="afterList"></slot>
          </ul>
        </div>
      </transition>
  </div>
</template>

<script>
  import multiselectMixin from './multiselectMixin'
  import pointerMixin from './pointerMixin'
  import positionMixin from './positionMixin'

  export default {
    name: 'vue-multiselect',
    mixins: [multiselectMixin, pointerMixin, positionMixin],
    props: {

      /**
       * name attribute to match optional label element
       * @default ''
       * @type {String}
       */
      name: {
        type: String,
        default: ''
      },
      /**
       * String to show when pointing to an option
       * @default 'Press enter to select'
       * @type {String}
       */
      selectLabel: {
        type: String,
        default: 'Press enter to select'
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
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
      */
      selectedLabel: {
        type: String,
        default: 'Selected'
      },
      /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
      */
      deselectLabel: {
        type: String,
        default: 'Press enter to remove'
      },
      /**
       * String to show when pointing to an already selected option
       * @default 'Press enter to remove'
       * @type {String}
      */
      deselectGroupLabel: {
        type: String,
        default: 'Press enter to deselect group'
      },
      /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
      */
      showLabels: {
        type: Boolean,
        default: true
      },
      /**
       * Limit the display of selected options. The rest will be hidden within the limitText string.
       * @default 99999
       * @type {Integer}
       */
      limit: {
        type: Number,
        default: 99999
      },
      /**
       * Sets maxHeight style value of the dropdown
       * @default 300
       * @type {Integer}
       */
      maxHeight: {
        type: Number,
        default: 300
      },
      /**
       * Function that process the message shown when selected
       * elements pass the defined limit.
       * @default 'and * more'
       * @param {Int} count Number of elements more than limit
       * @type {Function}
       */
      limitText: {
        type: Function,
        default: count => `and ${count} more`
      },
      /**
       * Set true to trigger the loading spinner.
       * @default False
       * @type {Boolean}
      */
      loading: {
        type: Boolean,
        default: false
      },
      /**
       * Disables the multiselect if true.
       * @default false
       * @type {Boolean}
      */
      disabled: {
        type: Boolean,
        default: false
      },
      /**
       * Fixed opening direction
       * @default ''
       * @type {String}
      */
      openDirection: {
        type: String,
        default: ''
      },
      /**
       * Shows slot with message about empty options
       * @default true
       * @type {Boolean}
       */
      showNoOptions: {
        type: Boolean,
        default: true
      },
      showNoResults: {
        type: Boolean,
        default: true
      },
      tabindex: {
        type: Number,
        default: 0
      }
    },
    computed: {
      isSingleLabelVisible () {
        return this.singleValue &&
          (!this.isOpen || !this.searchable) &&
          !this.visibleValues.length
      },
      isPlaceholderVisible () {
        return (!this.internalValue.length || this.multiple) && (!this.searchable || !this.isOpen)
      },
      visibleValues () {
        return this.multiple
          ? this.internalValue.slice(0, this.limit)
          : []
      },
      singleValue () {
        return this.internalValue[0]
      },
      deselectLabelText () {
        return this.showLabels
          ? this.deselectLabel
          : ''
      },
      deselectGroupLabelText () {
        return this.showLabels
          ? this.deselectGroupLabel
          : ''
      },
      selectLabelText () {
        return this.showLabels
          ? this.selectLabel
          : ''
      },
      selectGroupLabelText () {
        return this.showLabels
          ? this.selectGroupLabel
          : ''
      },
      selectedLabelText () {
        return this.showLabels
          ? this.selectedLabel
          : ''
      },
      inputStyle () {
        if (this.searchable || (this.multiple && this.value && this.value.length)) {
          // Hide input by setting the width to 0 allowing it to receive focus
          return this.isOpen ? { } : { 'width': '0', 'position': 'absolute', 'padding': '0' }
        }
      },
      contentStyle () {
        return this.options.length
          ? { 'display': 'inline-block' }
          : { 'display': 'block' }
      },
      isAbove () {
        if (this.openDirection === 'above' || this.openDirection === 'top') {
          return true
        } else if (this.openDirection === 'below' || this.openDirection === 'bottom') {
          return false
        } else {
          return this.prefferedOpenDirection === 'above'
        }
      },
      showSearchInput () {
        return this.searchable && (this.hasSingleSelectedSlot && (this.visibleSingleValue || this.visibleSingleValue === 0) ? this.isOpen : true)
      }
    }
  }
</script>

<style lang="scss">
@import url("https://d1azc1qln24ryf.cloudfront.net/26905/Studyportalslineariconset/style-cf.css?p6k6l4");

/* Brand orange colors. */
// $BrandOrangeL: #F96A4B;
$BrandOrange: #f95c39;
$BrandOrangeD: #CC4C2F;

// /* Grey palette. */
$GreyDD: #313233;
$GreyD: #929699;
$Grey: #C4C9CC;
// $GreyL: #DCE1E5;
$GreyLL: #E8ECED;
$GreyLLL: #EDF2F4;
$White: #FFFFFF;

$root: 16;

%FontSize-S{
	font-size: (11 / $root)+rem;
	line-height: 1rem;
}

%FontSize-SN{
  font-size: (13 / $root)+rem;
  line-height: 1rem;
}

%FontSize-N{
  font-size: (15 / $root)+rem;
  line-height: 1.5rem;
}

fieldset[disabled] .multiselect {
  pointer-events: none;
}

.multiselect__spinner {
  position: absolute;
  right: 1px;
  top: 1px;
  width: 48px;
  height: 35px;
  background: $White;
  display: block;
}

.multiselect__spinner:before,
.multiselect__spinner:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -8px 0 0 -8px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  border-color: $BrandOrange transparent transparent;
  border-style: solid;
  border-width: 2px;
  box-shadow: 0 0 0 1px transparent;
}

.multiselect__spinner:before {
  animation: spinning 2.4s cubic-bezier(0.41, 0.26, 0.2, 0.62);
  animation-iteration-count: infinite;
}

.multiselect__spinner:after {
  animation: spinning 2.4s cubic-bezier(0.51, 0.09, 0.21, 0.8);
  animation-iteration-count: infinite;
}

.multiselect__loading-enter-active,
.multiselect__loading-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}

.multiselect__loading-enter,
.multiselect__loading-leave-active {
  opacity: 0;
}

.multiselect,
.multiselect__input,
.multiselect__single,
.multiselect__placeholder {
  @extend %FontSize-N;
  font-family: inherit;
  touch-action: manipulation;
  margin: 0.25rem 0;
}

.multiselect {
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 40px;
  text-align: left;
  color: $GreyD;
}

.multiselect * {
  box-sizing: border-box;
}

.multiselect:focus {
  outline: none;
}

.multiselect--disabled {
  pointer-events: none;
  opacity: 0.6;
}

.multiselect--active {
  z-index: 50;
}

.multiselect--active .multiselect__select {
  transform: rotateX(180deg);
}

.multiselect__input,
.multiselect__single,
.multiselect__placeholder {
  position: relative;
  display: inline-block;
  min-height: 20px;
  line-height: 20px;
  border: none;
  border-radius: 3px;
  background: $White;
  padding-top: 2px;
  width: 100%;
  transition: border 0.1s ease;
  box-sizing: border-box;
  vertical-align: middle;
}

.multiselect__input::placeholder {
  color: $GreyD;
}

.multiselect__tag ~ .multiselect__input,
.multiselect__tag ~ .multiselect__single {
  width: auto;
}

/* CAN BE REMOVeD */
.multiselect__input:hover,
.multiselect__single:hover {
  border-color: #cfcfcf;
}

.multiselect__input:focus,
.multiselect__single:focus {
  border-color: #a8a8a8;
  outline: none;
}
/* END OF UNNEEDED CODE */

.multiselect__single {
  padding-left: 5px;
  margin-bottom: 8px;
}

.multiselect__tags-wrap {
  display: inline
}

.multiselect__input {
  display: block !important;
}

.multiselect__tags {
  min-height: 40px;
  /* display: block; */
  padding: 0.25rem 2rem 0.25rem 0.5rem;
  /* border: 1px solid #DCE1E5; */
  background: $White;
  /* font-size: 14px; */
  font-size: 0.95rem;
  line-height: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid $Grey;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 2rem 0.25rem 0.5rem;
  border-radius: 3px;
  margin: 0.25rem 0.5rem 0.25rem 0;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
  vertical-align: middle;
  color: $GreyD;
  border: 1px solid $GreyD;
}

.multiselect__tag-icon {
  cursor: pointer;
  margin-left: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: initial;
  width: 1.5rem;
  text-align: center;
  line-height: 1.5rem;
  transition: all 0.2s ease;
  border-radius: 5px;
}

.multiselect__tag-icon:after {
  @extend %FontSize-SN;
  content: "×";
  color: $GreyD;
  vertical-align: middle;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: $Grey;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: $White;
}

/* Looks unused */
.multiselect__current {
  line-height: 16px;
  min-height: 40px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 8px 12px 0;
  padding-right: 30px;
  white-space: nowrap;
  margin: 0;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  cursor: pointer;
}
/* End of unused code */

.multiselect__select {
  line-height: 16px;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: 32px;
  height: 38px;
  right: 1px;
  top: 1px;
  padding: 11px 8px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.multiselect__select:before {
  @extend %FontSize-N;
  position: relative;
  right: 0;
  line-height: 1;
  color: $GreyD;
  content: "\E93A";
  font-family: icomoon;
}

.multiselect__placeholder {
  color: #ADADAD;
}

.multiselect--active .multiselect__placeholder {
  display: none;
}

.multiselect__content-wrapper {
  position: absolute;
  display: block;
  background: $White;
  width: 100%;
  max-height: 240px;
  overflow: auto;
  border-top: none;
  border-radius: 2px;
  z-index: 200;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0 1px 1px $GreyD;
  margin-top: 0.25rem;

  @at-root .multiselect--above & {
    bottom: 100%;
    box-shadow: 0 -1px 1px $GreyD;
    margin-bottom: 0.25rem;
  }
}

.multiselect__content {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  min-width: 100%;
  vertical-align: top;
}

.multiselect__content::webkit-scrollbar {
  display: none;
}

.multiselect__element {
  display: block;
}

.multiselect__option {
  @extend %FontSize-SN;
  cursor: pointer;
  display: block;
  padding: 0.25rem 1rem;
  position: relative;
  min-height: 1rem;
  text-decoration: none;
  text-transform: none;
}

.multiselect__option:after {
  @extend %FontSize-SN;
  top: 0;
  right: 0;
  position: absolute;
  line-height: 1.5rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
}

.multiselect__option--highlight {
  background: $BrandOrange;
  outline: none;
  color: $White;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  background: $BrandOrange;
  color: $White;
}

.multiselect__option--selected {
  background: $GreyLLL;
  color: $GreyD;
  font-weight: bold;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  color: $Grey;
}

.multiselect__option--selected.multiselect__option--highlight,
.multiselect__option--group-selected.multiselect__option--highlight {
  background: $BrandOrangeD;
  color: $White;
  font-weight: 400;
}

.multiselect__option--selected.multiselect__option--highlight:after,
.multiselect__option--group-selected.multiselect__option--highlight:after {
  background: $BrandOrangeD;
  content: attr(data-deselect);
  color: $White;
}

.multiselect--disabled:not(.multiselect__option--group) {
  background: $GreyLL;
  pointer-events: none;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: $GreyLL;
  color: $Grey;
}

.multiselect__option--disabled:not(.multiselect__option--group) {
  background: $GreyLL;
  color: $Grey;
  cursor: text;
  pointer-events: none;
}

.multiselect__option--group {
  color: $GreyD;
  font-size: 0.75rem;
  padding-left: 0.5rem;
  text-transform: capitalize;
}

.multiselect__option--group.multiselect__option--highlight {
  color: $White;
}

.multiselect__option--disabled.multiselect__option--highlight {
  background: #dedede;
}

.multiselect-enter-active,
.multiselect-leave-active {
  transition: all 0.15s ease;
}

.multiselect-enter,
.multiselect-leave-active {
  opacity: 0;
}

.multiselect__strong {
  margin-bottom: 8px;
  line-height: 20px;
  display: inline-block;
  vertical-align: top;
}

*[dir="rtl"] .multiselect {
    text-align: right;
}

*[dir="rtl"] .multiselect__select {
    right: auto;
    left: 1px;
}

*[dir="rtl"] .multiselect__tags {
    padding: 8px 8px 0px 40px;
}

*[dir="rtl"] .multiselect__content {
    text-align: right;
}

*[dir="rtl"] .multiselect__option:after {
    right: auto;
    left: 0;
}

*[dir="rtl"] .multiselect__clear {
    right: auto;
    left: 12px;
}

*[dir="rtl"] .multiselect__spinner {
    right: auto;
    left: 1px;
}

@keyframes spinning {
  from { transform:rotate(0) }
  to { transform:rotate(2turn) }
}
</style>
