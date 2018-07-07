<template lang="html">
  <button
    class="multiselect"
    :class="{
      'multiselect--active': isOpen,
      'multiselect--disabled': disabled,
      'multiselect--above': isAbove
    }"
    @click.stop="toggle()"
    @keyup.space.self.stop="toggle()"
    @keydown.down.prevent.self="handleKeydown('down')"
    @keydown.up.prevent.self="handleKeydown('up')"
    @keydown.enter="handleKeydown('enter', $event)"
    @keydown.tab="handleKeydown('tab', $event)"
    @keyup.esc="deactivate()"
  >
    <slot/>
  </button>
</template>

<script>
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
    }
  },
  watch: {
    isOpen (isOpen) {
      if (isOpen) this.$el.focus()
    }
  }
}
</script>

<style lang="scss">
.multiselect {
  // box-sizing: content-box;
  display: block;
  position: relative;
  width: 100%;
  min-height: 40px;
  text-align: left;
  color: #35495E;
  -webkit-appearance: none;
  padding: 0;
  border: none;
}

// .multiselect * {
//   box-sizing: border-box;
// }

// .multiselect:focus {
//   outline: none;
// }

.multiselect--disabled {
  pointer-events: none;
  opacity: 0.6;
}
</style>
