<template>
  <div>
    <button @click="toggle" class="button button-small">Toggle</button>
    <button @click="open" class="button button-small">Open</button>
    <button @click="close" class="button button-small">Close</button>
    <pre>Multiselect Open: {{ isOpen }}</pre>
    <label class="typo__label">Controlling multiselect programmatically</label>
    <multiselect id="programmatic-control" ref="multiselect" placeholder="Pick at least one" :value="value" :options="options" :multiple="true"
                 :searchable="true" :allow-empty="false" :hide-selected="true" :max-height="150" :max="3"
                 @open="isOpen = true" @close="isOpen = false"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      isOpen: false,
      value: [],
      options: ['Select option', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']
    }
  },
  methods: {
    toggle () {
      this.$refs.multiselect.$el.focus()

      setTimeout(() => {
        this.$refs.multiselect.$refs.search.blur()
      }, 1000)
    },
    open () {
      this.$refs.multiselect.activate()
    },
    close () {
      this.$refs.multiselect.deactivate()
    }
  }
}
</script>
