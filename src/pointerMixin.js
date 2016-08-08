module.exports = {
  data () {
    return {
      pointer: 0,
      visibleElements: this.maxHeight / this.optionHeight
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
    },
    /**
     * Sets the height of the option. Used for scroll calculations
     * @type {Number}
     * @default 40
     */
    optionHeight: {
      type: Number,
      default: 40
    }
  },
  computed: {
    pointerPosition () {
      return this.pointer * this.optionHeight
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
        if (this.$els.list.scrollTop <= this.pointerPosition - this.visibleElements * this.optionHeight) {
          this.$els.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
        }
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        if (this.$els.list.scrollTop >= this.pointerPosition) {
          this.$els.list.scrollTop = this.pointerPosition
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
