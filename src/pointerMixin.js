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
  computed: {
    pointerPosition () {
      return this.pointer * 40
    }
  },
  watch: {
    'filteredOptions' () {
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
    addPointerElement () {
      if (this.filteredOptions[this.pointer].isLabel) return
      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer])
      }
      this.pointerReset()
    },
    pointerForward () {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++
        if (this.$refs.list.scrollTop <= this.pointerPosition - this.visibleElements * 40) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * 40
        }
      }
    },
    pointerBackward () {
      if (this.pointer > 0) {
        this.pointer--
        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition
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
