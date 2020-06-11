<template>
  <div
    class="multiselect-wrapper"
    :class="{
      'multiselect-wrapper--active': isFocused || isOpen,
      'multiselect-wrapper--open': isOpen,
      'multiselect-wrapper--disabled': disabled
    }"
    @click.stop="toggle()"
  >
    <slot/>
  </div>
</template>

<script>
// @blur="blur()"
// @click.stop="toggle()"
// @keyup.space.prevent.self.stop="handleKeydown('space', $event)"
// @keydown.down.prevent.self="handleKeydown('down')"
// @keydown.up.prevent.self="handleKeydown('up')"
// @keydown.enter="handleKeydown('enter', $event)"
// @keyup.esc="deactivate()"
// @keydown.tab="handleKeydown('tab', $event)"
export default {
  props: {
    activate: {
      type: Function
    },
    deactivate: {
      type: Function
    },
    handleKeydown: {
      type: Function
    },
    disabled: {
      type: Boolean
    },
    isAbove: {
      type: Boolean
    },
    isOpen: {
      type: Boolean
    },
    toggle: {
      type: Function
    },
    focus: {
      type: Function
    },
    blur: {
      type: Function
    },
    isFocused: {
      type: Boolean
    }
  }
}
</script>

<style>
.multiselect-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  /* width: 100%; */
  text-align: left;
  color: #35495E;
  -webkit-appearance: none;
  padding: 8px 40px 8px 8px;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  background: #fff;
  font-size: 14px;
  z-index: 51;
}

.multiselect-wrapper:focus {
  outline: none;
}

.multiselect-wrapper--active {
  border-color: #41B883;
  box-shadow: 0 0 0px 1px #41B883;
  z-index: 50;
}

.multiselect-wrapper--disabled {
  pointer-events: none;
  opacity: 0.6;
}

fieldset[disabled] .multiselect-wrapper {
  pointer-events: none;
}

*[dir="rtl"] .multiselect-wrapper {
  text-align: right;
}
</style>
