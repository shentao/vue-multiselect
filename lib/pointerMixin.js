'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      pointer: 0,
      visibleElements: this.maxHeight / this.optionHeight
    };
  },

  props: {
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
    pointerPosition: function pointerPosition() {
      return this.pointer * this.optionHeight;
    }
  },
  watch: {
    filteredOptions: function filteredOptions() {
      this.pointerAdjust();
    }
  },
  methods: {
    optionHighlight: function optionHighlight(index, option) {
      return {
        'multiselect__option--highlight': index === this.pointer && this.showPointer,
        'multiselect__option--selected': this.isSelected(option)
      };
    },
    addPointerElement: function addPointerElement() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Enter',
          key = _ref.key;

      if (this.filteredOptions.length > 0) {
        this.select(this.filteredOptions[this.pointer], key);
      }
      this.pointerReset();
    },
    pointerForward: function pointerForward() {
      if (this.pointer < this.filteredOptions.length - 1) {
        this.pointer++;

        if (this.$refs.list.scrollTop <= this.pointerPosition - this.visibleElements * this.optionHeight) {
          this.$refs.list.scrollTop = this.pointerPosition - (this.visibleElements - 1) * this.optionHeight;
        }

        if (this.filteredOptions[this.pointer].$isLabel) this.pointerForward();
      }
    },
    pointerBackward: function pointerBackward() {
      if (this.pointer > 0) {
        this.pointer--;

        if (this.$refs.list.scrollTop >= this.pointerPosition) {
          this.$refs.list.scrollTop = this.pointerPosition;
        }

        if (this.filteredOptions[this.pointer].$isLabel) this.pointerBackward();
      } else {
        if (this.filteredOptions[0].$isLabel) this.pointerForward();
      }
    },
    pointerReset: function pointerReset() {
      if (!this.closeOnSelect) return;
      this.pointer = 0;

      if (this.$refs.list) {
        this.$refs.list.scrollTop = 0;
      }
    },
    pointerAdjust: function pointerAdjust() {
      if (this.pointer >= this.filteredOptions.length - 1) {
        this.pointer = this.filteredOptions.length ? this.filteredOptions.length - 1 : 0;
      }
    },
    pointerSet: function pointerSet(index) {
      this.pointer = index;
    }
  }
};