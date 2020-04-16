// Component Template
<template>
  <transition-group
    v-on:appear="appear"
    v-if="isGroup"
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-bind:class="false"
    class="transition-auto-axis"
  >
    <slot></slot>
  </transition-group>
  <transition
    v-on:appear="appear"
    v-else
    v-on:enter="enter"
    v-on:before-leave="beforeLeave"
    v-bind:class="false"
    class="transition-auto-axis"
  >
    <slot></slot>
  </transition>
</template>

// Component
<script>
import Vue from 'vue'

export default Vue.extend({
  components: {},
  props: {
    axis: {
      type: String,
      required: false,
      default: 'Y'
    },
    isGroup: {
      type: Boolean,
      required: false,
      defaut: false
    }
  },
  name: 'transition-auto-axis',
  data() {
    return {
      animationSpeed: 500,
      animationCheckInterval: null
    }
  },
  methods: {
    appear(el) {
      el.style.transition = `height ${this.$data.animationSpeed /
        1000}s, opacity ${this.$data.animationSpeed /
        1000}s, margin-bottom ${this.$data.animationSpeed / 1000}s`
    },
    enter(el, done) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.marginBottom = '0'

      el.style.height = '0'
      setTimeout(() => {
        el.style.height = height
      })

      el.style.transition = `height ${this.$data.animationSpeed /
        1000}s, opacity ${this.$data.animationSpeed /
        1000}s, margin-bottom ${this.$data.animationSpeed / 1000}s`

      this.$data.animationCheckInterval = setInterval(() => {
        el.style.height = 'auto'
        clearInterval(this.$data.animationCheckInterval)
      }, this.$data.animationSpeed)

      done()
    },
    beforeLeave(el) {
      clearInterval(this.$data.animationCheckInterval)

      const height = getComputedStyle(el).height
      el.style.height = height
      setTimeout(() => {
        el.style.height = '0'
        el.style.marginBottom = '0'
      })
    }
  }
})
</script>
