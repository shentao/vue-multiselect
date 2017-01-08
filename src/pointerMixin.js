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
    filteredOptions () {
      this.pointerAdjust()
    }
  },
  methods: {
    optionHighlight (index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      }
    },
    addPointerElement ({ key } = 'Enter') {
      if (this.filteredOptions.length > 0) {
        if (this.filteredOptions[this.pointer].isLabel) return
        this.select(this.filteredOptions[this.pointer], key)
      }
      this.pointerReset()
    },
    pointerForward () {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        if (this.$refs.list.scrollTop <= this.pointerPosition - this.visibleElements * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight
        }
        if (this.filteredOptions[this.pointer].$isLabel) this.pointerForward()
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition
        }
        if (this.filteredOptions[this.pointer].$isLabel) this.pointerBackward()
      } else {
        if (this.filteredOptions[0].$isLabel) this.pointerForward()
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
