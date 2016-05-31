<template>
  <div
    tabindex="0"
    :class="{ 'multiselect--active': isOpen }"
    @focus="activate()"
    @blur="searchable ? false : deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.stop.prevent.self="addPointerElement()"
    @keyup.esc="deactivate()"
    class="multiselect">
      <div @mousedown.prevent="toggle()" class="multiselect__select"></div>
      <div v-el:tags="v-el:tags" class="multiselect__tags">
        <span v-if="multiple" v-for="option in visibleValue" track-by="$index" onmousedown="event.preventDefault()" class="multiselect__tag">
          {{ getOptionLabel(option) }}
          <i aria-hidden="true" tabindex="1" @keydown.enter.prevent="removeElement(option)" @mousedown.prevent="removeElement(option)" class="multiselect__tag-icon"></i>
        </span>
        <template v-if="value && value.length > limit">
          <strong>and {{ value.length - limit }} more</strong>
        </template>
        <div v-show="loading" transition="multiselect__loading" class="multiselect__spinner"></div>
        <input
          name="search"
          type="text"
          autocomplete="off"
          :placeholder="placeholder"
          v-el:search="v-el:search"
          v-if="searchable"
          v-model="search"
          @focus.prevent="activate()"
          @blur.prevent="deactivate()"
          @input="pointerReset()"
          @keyup.esc="deactivate()"
          @keyup.down="pointerForward()"
          @keyup.up="pointerBackward()"
          @keydown.enter.stop.prevent.self="addPointerElement()"
          @keydown.delete="removeLastElement()"
          class="multiselect__input"/>
          <span v-if="!searchable && !multiple" class="multiselect__single">{{ getOptionLabel(value) ? getOptionLabel(value) : placeholder }}</span>
      </div>
      <ul transition="multiselect" :style="{ maxHeight: maxHeight + 'px' }" v-el:list="v-el:list" v-show="isOpen" class="multiselect__content">
        <slot name="beforeList"></slot>
        <li v-for="option in filteredOptions" track-by="$index">
          <span
            tabindex="0"
            :class="{ 'multiselect__option--highlight': $index === pointer && this.showPointer, 'multiselect__option--selected': !isNotSelected(option) }"
            @mousedown.prevent="select(option)"
            @mouseover="pointerSet($index)"
            :data-select="selectLabel"
            :data-selected="selectedLabel"
            :data-deselect="deselectLabel"
            class="multiselect__option">
              {{ getOptionLabel(option) }}
          </span>
        </li>
        <li v-show="filteredOptions.length === 0">
          <span class="multiselect__option">
            <slot name="noResult">No elements found. Consider changing the search query.</slot>
          </span>
        </li>
        <slot name="afterList"></slot>
    </ul>
  </div>
</template>

<script>
  import multiselectMixin from '../mixins/multiselectMixin'
  import pointerMixin from '../mixins/pointerMixin'

  export default {
    mixins: [multiselectMixin, pointerMixin],
    props: {
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
       * String to show next to selected option
       * @default 'Selected'
       * @type {String}
      */
      selectedLabel: {
        type: String,
        default: 'Selected'
      },
      /**
       * String to show when pointing to an alredy selected option
       * @default 'Press enter to remove'
       * @type {String}
      */
      deselectLabel: {
        type: String,
        default: 'Press enter to remove'
      },
      /**
       * Decide whether to show pointer labels
       * @default true
       * @type {Boolean}
      */
      showLabels: {
        type: Boolean,
        default: true
      }
    },
    ready () {
      if (!this.showLabels) {
        this.deselectLabel = this.selectedLabel = this.selectLabel = ''
      }
    }
  }
</script>

<style scoped>
.multiselect__spinner {
  position: absolute;
  right: 1px;
  top: 1px;
  width: 3rem;
  height: 2.1875rem;
  background: #fff;
  display: block;
}

.multiselect__spinner:before,
.multiselect__spinner:after {
  position: absolute;
  content: "";
  top: 50%;
  left: 50%;
  margin: -0.5rem 0 0 -0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border-color: #41B883 transparent transparent;
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

.multiselect__loading-transition {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}

.multiselect__loading-enter,
.multiselect__loading-leave {
  opacity: 0;
}

.multiselect,
.multiselect__input,
.multiselect__single {
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: lighter;
}

.multiselect {
  box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 2.5rem;
  text-align: left;
  color: #35495E;
}

.multiselect * {
  box-sizing: border-box;
}

.multiselect:focus {
  outline: none;
}

.multiselect--active {
  z-index: 50;
}

.multiselect--active .multiselect__current,
.multiselect--active .multiselect__input,
.multiselect--active .multiselect__tags {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.multiselect--active .multiselect__select {
  transform: rotateZ(180deg);
}

.multiselect__input,
.multiselect__single {
  position: relative;
  display: inline-block;
  min-height: 1.25rem;
  line-height: 1.25rem;
  border: none;
  border-radius: 0.3125rem;
  background: #fff;
  padding: 1px 0 0 0.3125rem;
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  margin-bottom: 0.5rem;
}

.multiselect__tag ~ .multiselect__input {
  width: auto;
}

.multiselect__input:hover,
.multiselect__single:hover {
  border-color: #cfcfcf;
}

.multiselect__input:focus,
.multiselect__single:focus {
  border-color: #a8a8a8;
  outline: none;
}

.multiselect__single {
  padding-left: 0.375rem;
  margin-bottom: 0.5rem;
}

.multiselect__tags {
  min-height: 2.5rem;
  display: block;
  padding: 0.5rem 2.5rem 0 0.5rem;
  border-radius: 0.3125rem;
  border: 1px solid #E8E8E8;
  background: #fff;
}

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 0.25rem 1.625rem 0.25rem 0.625rem;
  border-radius: 0.3125rem;
  margin-right: 0.625rem;
  color: #fff;
  line-height: 1;
  background: #41B883;
  margin-bottom: 0.5rem;
}

.multiselect__tag-icon {
  cursor: pointer;
  margin-left: 7px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  font-weight: 700;
  font-style: initial;
  width: 1.375rem;
  text-align: center;
  line-height: 1.375rem;
  transition: all 0.2s ease;
  border-radius: 0.3125rem;
}

.multiselect__tag-icon:after {
  content: "×";
  color: #266d4d;
  font-size: 0.875rem;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #369a6e;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: white;
}

.multiselect__current {
  line-height: 1rem;
  min-height: 2.5rem;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 0.5rem 0.75rem 0;
  padding-right: 1.875rem;
  white-space: nowrap;
  margin: 0;
  text-decoration: none;
  border-radius: 0.3125rem;
  border: 1px solid #E8E8E8;
  cursor: pointer;
}

.multiselect__select {
  line-height: 1rem;
  display: block;
  position: absolute;
  box-sizing: border-box;
  width: 2.5rem;
  height: 2.375rem;
  right: 1px;
  top: 1px;
  padding: 0.25rem 0.5rem;
  margin: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.multiselect__select:before {
  position: relative;
  right: 0;
  top: 65%;
  color: #999;
  margin-top: 0.25rem;
  border-style: solid;
  border-width: 0.3125rem 0.3125rem 0 0.3125rem;
  border-color: #999999 transparent transparent transparent;
  content: "";
}

.multiselect__placeholder {
  color: #ADADAD;
  display: inline-block;
  margin-bottom: 0.625rem;
  padding-top: 0.125rem;
}

.multiselect--active .multiselect__placeholder {
  display: none;
}

.multiselect__content {
  position: absolute;
  list-style: none;
  display: block;
  background: #fff;
  width: 100%;
  max-height: 15rem;
  overflow: auto;
  padding: 0;
  margin: 0;
  border: 1px solid #E8E8E8;
  border-top: none;
  border-bottom-left-radius: 0.3125rem;
  border-bottom-right-radius: 0.3125rem;
  z-index: 50;
}

.multiselect__content::webkit-scrollbar {
  display: none;
}

.multiselect__option {
  display: block;
  padding: 0.75rem;
  min-height: 2.5rem;
  line-height: 1rem;
  font-weight: 300;
  text-decoration: none;
  text-transform: none;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
}

.multiselect__option:after {
  top: 0;
  right: 0;
  position: absolute;
  line-height: 2.5rem;
  padding-right: 0.75rem;
  padding-left: 1.25rem;
}

.multiselect__option--highlight {
  background: #41B883;
  outline: none;
  color: white;
}

.multiselect__option--highlight:after {
  content: attr(data-select);
  color: white;
}

.multiselect__option--selected {
  background: #F3F3F3;
  color: #35495E;
  font-weight: bold;
}

.multiselect__option--selected:after {
  content: attr(data-selected);
  font-weight: 300;
  color: silver;
}

.multiselect__option--selected.multiselect__option--highlight {
  background: #FF6A6A;
  color: #fff;
  font-weight: lighter;
}

.multiselect__option--selected.multiselect__option--highlight:after {
  content: attr(data-deselect);
  color: #fff;
}

.multiselect--disabled {
  background: #ededed;
  pointer-events: none;
}

.multiselect--disabled .multiselect__current,
.multiselect--disabled .multiselect__select {
  background: #ededed;
  color: #a6a6a6;
}

.multiselect__option--disabled {
  background: #ededed;
  color: #a6a6a6;
  cursor: text;
  pointer-events: none;
}

.multiselect__option--disabled:visited {
  color: #a6a6a6;
}

.multiselect__option--disabled:hover,
.multiselect__option--disabled:focus {
  background: #3dad7b;
}

.multiselect-transition {
  transition: all 0.3s ease;
}

.multiselect-enter,
.multiselect-leave {
  opacity: 0;
  max-height: 0 !important;
}
</style>
