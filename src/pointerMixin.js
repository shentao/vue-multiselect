module.exports = {
  data () {
    return {
      pointer: 0,
      visibleElements: this.maxHeight / 40
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
        const pointerPosition = this.pointer * 40
        if (this.$els.list.scrollTop <= pointerPosition - this.visibleElements * 40) {
          this.$els.list.scrollTop = pointerPosition - (this.visibleElements - 1) * 40
        }
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        const pointerPosition = this.pointer * 40
        if (this.$els.list.scrollTop >= pointerPosition) {
          this.$els.list.scrollTop = pointerPosition
        }
      }
    },
    pointerReset () {
      if (!this.closeOnSelect) return

      this.pointer = 0
      if (this.$els.list) {
        this.$els.list.scrollTop = 0
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
