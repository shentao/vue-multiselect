<template>
  <div :class="{ 'multiselect--disabled': disabled }">
    <slot name="caret" :toggle="toggle" :isOpen="isOpen">
      <div
        class="multiselect__caret"
        :class="{ 'multiselect__caret--active': isOpen }"
      />
    </slot>

    <transition name="multiselect__loading">
      <slot name="loading">
        <div v-show="loading" class="multiselect__spinner"/>
      </slot>
    </transition>

    <slot
      name="value"
      v-bind="{
        toggle,
        search,
        visibleValues,
        getOptionLabel,
        removeElement,
        internalValue,
        loading,
        isSingleLabelVisible,
        singleValue,
        placeholder,
        isPlaceholderVisible,
        currentOptionLabel,
        limit,
        limitText,
        isOpen
      }"
    >
      <template v-for="(option, index) of visibleValues">
        <slot
          name="tag"
          :option="option"
          :search="search"
          :remove="removeElement"
        >
          <span class="multiselect__tag" :key="index">
            <span v-text="getOptionLabel(option)"></span>
            <i
              aria-hidden="true"
              @keydown.enter.prevent="removeElement(option)"
              @click.prevent.stop="removeElement(option)"
              class="multiselect__tag-icon"
            />
          </span>
        </slot>
      </template>

      <slot v-if="isOpen" name="control"/>

      <template v-if="internalValue && internalValue.length > limit">
        <slot name="limit">
          <strong
            class="multiselect__strong"
            v-text="limitText(internalValue.length - limit)"
          />
        </slot>
      </template>

      <span
        v-if="isSingleLabelVisible"
        class="multiselect__single"
      >
        <slot
          name="singleLabel"
          v-bind="{
            option: singleValue,
            currentOptionLabel
          }"
        >
          {{ currentOptionLabel }}
        </slot>
      </span>
      <span v-if="isPlaceholderVisible">
        <slot name="placeholder" :placeholder="placeholder">
          <span class="multiselect__single">
            {{ placeholder }}
          </span>
        </slot>
      </span>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    toggle: {
      type: Function
    },
    search: {
      type: String
    },
    visibleValues: {
      type: Array
    },
    getOptionLabel: {
      type: Function
    },
    removeElement: {
      type: Function
    },
    internalValue: {
      type: Array
    },
    loading: {
      type: Boolean
    },
    isSingleLabelVisible: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    singleValue: {},
    placeholder: {},
    isPlaceholderVisible: {},
    currentOptionLabel: {},
    limit: {},
    limitText: {},
    isOpen: {}
  }
}
</script>

<style lang="stylus">
.multiselect__caret {
  line-height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  width: 40px;
  height: 28px;
  right: 0;
  padding: 4px 8px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:before {
    position: relative;
    right: 0;
    color: #999;
    border-style: solid;
    border-width: 5px 5px 0 5px;
    border-color: #999999 transparent transparent transparent;
    content: "";
    transition: transform 0.2s ease;
  }
}

.multiselect__caret--active:before {
  transform: rotateZ(180deg);
}

.multiselect--disabled .multiselect__caret {
  background: #ededed;
  color: #a6a6a6;
}

*[dir="rtl"] .multiselect__caret {
    right: auto;
    left: 1px;
}

.multiselect-value {
  /* min-height: 40px; */
  // display: flex;
  // align-items: center;
}

*[dir="rtl"] .multiselect-value {
    padding: 8px 8px 0px 40px;
}

.multiselect--active:not(.multiselect--above) .multiselect-value {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.multiselect--above.multiselect--active .multiselect-value {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

// .multiselect-value-wrap {
//   display: flex;
//   flex-wrap: wrap;
// }

.multiselect__tag {
  position: relative;
  display: inline-block;
  padding: 4px 26px 4px 10px;
  border-radius: 5px;
  margin: 2px 3px 1px;
  color: #fff;
  line-height: 1;
  background: #41B883;
  white-space: nowrap;
  overflow: hidden;
  max-width: 100%;
  text-overflow: ellipsis;
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
  width: 22px;
  text-align: center;
  line-height: 22px;
  transition: all 0.2s ease;
  border-radius: 5px;
}

.multiselect__tag-icon:after {
  content: "×";
  color: #266d4d;
  font-size: 14px;
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
  background: #369a6e;
}

.multiselect__tag-icon:focus:after,
.multiselect__tag-icon:hover:after {
  color: white;
}

.multiselect__spinner {
  position: absolute;
  right: 1px;
  top: 1px;
  width: 48px;
  height: 40px;
  background: #fff;
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

.multiselect__loading-enter-active,
.multiselect__loading-leave-active {
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
}

.multiselect__loading-enter,
.multiselect__loading-leave-active {
  opacity: 0;
}

.multiselect--disabled {
  background: #ededed;
  pointer-events: none;
}

.multiselect--disabled .multiselect__current {
  background: #ededed;
  color: #a6a6a6;
}
</style>
