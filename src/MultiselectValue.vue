<template lang="html">
<div>
  <slot name="caret" :toggle="toggle">
    <div class="multiselect__select"/>
  </slot>
  <slot name="clear" :search="search"></slot>
  <div ref="tags" class="multiselect__tags">
    <div class="multiselect__tags-wrap">
      <template v-for="option of visibleValues" @mousedown.prevent>
        <slot
          name="tag"
          :option="option"
          :search="search"
          :remove="removeElement"
        >
          <span class="multiselect__tag">
            <span v-text="getOptionLabel(option)"></span>
            <i
              aria-hidden="true"
              tabindex="1"
              @keydown.enter.prevent="removeElement(option)"
              @click.prevent.stop="removeElement(option)"
              class="multiselect__tag-icon"
            ></i>
          </span>
        </slot>
      </template>
      <slot v-if="isOpen" name="control"/>
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
    >
      <slot name="singleLabel" :option="singleValue">
        <template>{{ currentOptionLabel }}</template>
      </slot>
    </span>
    <span v-if="isPlaceholderVisible">
      <slot name="placeholder">
        <span class="multiselect__single">
          {{ placeholder }}
        </span>
      </slot>
    </span>
  </div>
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
    singleValue: {
    },
    placeholder: {},
    isPlaceholderVisible: {},
    currentOptionLabel: {},
    limit: {},
    limitText: {},
    isOpen: {}
  }
}
</script>

<style lang="css">
</style>
