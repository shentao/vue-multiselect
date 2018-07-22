<template>
  <button
    class="multiselect-wrapper"
    :class="{
      'multiselect-wrapper--active': isOpen,
      'multiselect-wrapper--disabled': disabled
    }"
    @click.stop="toggle()"
    @keyup.space.prevent.self.stop="toggle()"
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

<style>
.multiselect-wrapper {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: left;
  color: #35495E;
  -webkit-appearance: none;
  padding: 8px 40px 8px 8px;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  background: #fff;
  font-size: 14px;
}

.multiselect-wrapper--active {
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
