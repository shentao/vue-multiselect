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
  inject: [
    '_activate',
    '_deactivate',
    '_handleKeydown',
    '_search',
    '_disabled',
    '_id',
    '_isOpen',
    '_placeholder',
    '_toggle'
  ],
  props: {
    activate: {
      type: Function,
      default () {
        return this._activate()
      }
    },
    deactivate: {
      type: Function,
      default () {
        return this._deactivate()
      }
    },
    handleKeydown: {
      type: Function,
      default () {
        return this._handleKeydown(...arguments)
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return this._disabled
      }
    },
    isAbove: {
      type: Boolean,
      default () {
        return this._isAbove
      }
    },
    isOpen: {
      type: Boolean,
      default () {
        return this._isOpen
      }
    },
    toggle: {
      type: Function,
      default () {
        return this._toggle()
      }
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
