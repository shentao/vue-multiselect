module.exports = {
  data () {
    return {
      pointer: 0
    }
  },
  props: {
    /**
     * Enable/disable highlighting of the pointed value.
     * @type {Boolean}
     * @default true
     */
    showPointer: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    'filteredOptions' () {
      this.pointerAdjust()
    }
  },
  methods: {
    addPointerElement () {
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer])
      }
      this.pointerReset()
    },
    pointerForward () {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        var pointerPosition = this.pointer * 40
        var visibleElements = this.maxHeight / 40
        if (this.$refs.list.scrollTop <= pointerPosition - visibleElements * 40) {
          this.$refs.list.scrollTop = pointerPosition - (visibleElements - 1) * 40
        }
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        var pointerPosition = this.pointer * 40
        if (this.$refs.list.scrollTop >= pointerPosition) {
          this.$refs.list.scrollTop = pointerPosition
        }
      }
    },
    pointerReset () {
      if (!this.closeOnSelect) return

      this.pointer = 0
      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0
      }
    },
    pointerAdjust () {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length
          ? this.filteredOptions.length - 1
          : 0
      }
    },
    pointerSet (index) {
      this.pointer = index
    }
  }
}
