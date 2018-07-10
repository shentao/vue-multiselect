/**
 * Adds some functionality to allow the list to be always fully visible
 * @version 0.0.1
 */

/**
 * Calculates the position of the drop-down list relative to the input.
 */
function calculateListPosition (node, vue) {
  let dimensions = node.getBoundingClientRect()
  vue.listStyleTop = dimensions.bottom
  vue.listStyleLeft = dimensions.left
  vue.listStyleWidth = dimensions.width
}

export default {
  data () {
    return {
      listStyleTop: 0,
      listStyleLeft: 0,
      listStyleWidth: 0
    }
  },
  props: {
    /**
     * Determines if the list is placed as a direct child of the body element
     * to improve styling, e.g. when wrapped in a fixed element.
     * @default false
     * @type {Boolean}
    */
    position: {
      type: Boolean,
      default: false
    },
    /**
     * Defines how the list will be positioned,
     * should be changed to fixed when its wrapped within another fixed element
     * @default 'absolute'
     * @type {'absolute' | 'fixed'}
     */
    positionStrategy: {
      type: String,
      default: 'absolute',
      validator: (value) => value === 'absolute' || value === 'fixed'
    },
    /**
     * Locates the list to a specific side for better customization.
     * @default 'left'
     * @type {'left' | 'right'}
    */
    positionToSide: {
      type: String,
      default: 'left',
      validator: (value) => value === 'left' || value === 'right'
    }
  },
  watch: {
    value () {
      this.$nextTick(calculateListPosition.bind(this, this.$refs.tags, this))
    },
    isOpen () {
      this.$nextTick(calculateListPosition.bind(this, this.$refs.tags, this))
    }
  },
  mounted () {
    if (this.position) {
      document.body.appendChild(this.$refs.list)
      window.addEventListener(
        'resize',
        calculateListPosition.bind(this, this.$refs.tags, this),
        { passive: true, capture: true }
      )
      calculateListPosition(this.$refs.tags, this)
    }
  },
  computed: {
    listStyle () {
      if (!this.position) return { maxHeight: this.optimizedHeight }

      let left = this.listStyleLeft
      let top = this.listStyleTop

      if (this.positionStrategy === 'absolute') {
        left += window.scrollX
        top += window.scrollY
      }

      if (this.positionToSide === 'right') {
        return {
          maxHeight: this.optimizedHeight,
          position: this.positionStrategy,
          top: top + 'px',
          right: document.firstElementChild.clientWidth - left - this.listStyleWidth + 'px',
          width: this.listStyleWidth + 'px'
        }
      } else {
        return {
          maxHeight: this.optimizedHeight,
          position: this.positionStrategy,
          top: top + 'px',
          left: left + 'px',
          width: this.listStyleWidth + 'px'
        }
      }
    }
  }
}
