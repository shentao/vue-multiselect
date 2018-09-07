<template lang="html">
  <input
    slot="control"
    class="multiselect__input"
    :class="isOpen && 'multiselect__input--show'"
    type="text"
    autocomplete="off"
    :id="id"
    :placeholder="placeholder"
    :value="search"
    :disabled="disabled"
    @click.stop=""
    @keyup.space.stop.prevent=""
    @keydown.self.down.prevent="handleKeydown('down')"
    @keydown.self.delete="handleKeydown('delete')"
    @keydown.self.up.prevent="handleKeydown('up')"
    @keydown.enter.stop.self="handleKeydown('enter', $event)"
    @keyup.esc="deactivate()"
    @keyup.tab="deactivate()"
    @input="updateSearch($event.target.value)"
  />
</template>

<script>
import MultiselectValue from './MultiselectValue'

export default {
  components: { MultiselectValue },
  inject: [
    '_activate',
    '_deactivate',
    '_handleKeydown',
    '_search',
    '_disabled',
    '_id',
    '_isOpen',
    '_placeholder',
    '_updateSearch'
  ],
  props: {
    activate: {
      type: Function,
      default () {
        return this._activate
      }
    },
    deactivate: {
      type: Function,
      default () {
        return this._deactivate
      }
    },
    handleKeydown: {
      type: Function,
      default () {
        return this._handleKeydown
      }
    },
    updateSearch: {
      type: Function,
      default () {
        return this._updateSearch
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
    search: {
      type: String,
      default () {
        return this._search
      }
    },
    placeholder: {
      type: String,
      default () {
        return this._placeholder
      }
    },
    id: {
      type: String,
      default () {
        return this._id
      }
    }
  },
  mounted () {
    this.$el.focus()
  }
}
</script>

<style lang="scss">
.multiselect--disabled {
  pointer-events: none;
  opacity: 0.6;
}

.multiselect__input {
  position: relative;
  display: inline-block;
  min-height: 22px;
  line-height: 22px;
  border: none;
  border-radius: 5px;
  background: #fff;
  padding: 0 0 0 5px;
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  vertical-align: top;
  margin: 3px 0;
  width: 0;
}

.multiselect__input--show {
  width: auto;
}

.multiselect__input::placeholder {
  color: #35495E;
}

.multiselect__input:hover {
  border-color: #cfcfcf;
}

.multiselect__input:focus {
  border-color: #a8a8a8;
  outline: none;
}

.multiselect__input {
  font-family: inherit;
  font-size: 16px;
  touch-action: manipulation;
}
</style>
