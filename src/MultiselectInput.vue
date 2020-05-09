<template lang="html">
  <input
    slot="control"
    autocapitalize="none"
    autocorrect="off"
    autocomplete="off"
    spellcheck="false"
    aria-autocomplete="list"
    type="text"
    class="multiselect__input"
    :id="id"
    :placeholder="computedPlaceholder"
    :value="search"
    :disabled="disabled"
    role="combobox"
    :aria-expanded="isOpen ? 'true' : 'false'"
    aria-haspopup="true"
    :aria-controls="`${id}OptionsList`"
    :aria-aria-activedescendant="`${id}${pointer}HighlightedOption`"
    @click.stop=""
    @keydown.space.stop="$emit('space', $event)"
    @keydown.self.up.prevent="$emit('up')"
    @keydown.self.down.prevent="$emit('down')"
    @keydown.self.delete="$emit('delete')"
    @keydown.enter.stop.self="$emit('enter', $event)"
    @keyup.tab="$emit('tab')"
    @keyup.esc="$emit('esc')"
    @input="updateSearch($event.target.value)"
  />
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
    updateSearch: {
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
    search: {
      type: String
    },
    computedPlaceholder: {
      type: [String, Object]
    },
    id: {
      type: [String, Number]
    },
    pointer: {
      type: Number
    }
  },
  mounted () {
    this.$el.focus()
  }
}
</script>

<style lang="stylus">
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
}

.multiselect__input::placeholder {
  color: #999;
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
