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
    placeholder: {
      type: String
    },
    id: {
      type: String
    }
  },
  mounted () {
    this.$el.focus()
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
