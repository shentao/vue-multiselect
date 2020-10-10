export default {
  inserted (el, bindings, { context, child }) {
    let hideScrollLevel = 5 // remove overflow scroll and set it to overflow hidden up to 5 parents by default (useful for scrollable parents)
    let optionsZIndex = 999 // set zindex of options to 999 by default (useful for popups)
    /* usage:
     *  1. => v-append-to-body // default optionsZindex = 999 , default hideScrollLevel = 5
     *  2. => v-append-to-body="true" // default optionsZindex = 999 , default hideScrollLevel = 5
     *  3. => v-append-to-body="{optionsZindex: 999, hideScrollLevel: 5}" // override the optionsZindex and hideScrollLevel
     *  4. => v-append-to-body="{optionsZindex: 999, hideScrollLevel: 5, value: true}" // override the optionsZindex and hideScrollLevel, value is not requried to be set true
     */
    let overflowStates = []
    if (bindings.value === false) {
      return false
    } else if (typeof bindings.value === 'object') {
      if (bindings.value.value === false) {
        return false
      }
      hideScrollLevel = bindings.value.hideScrollLevel || hideScrollLevel
      optionsZIndex = bindings.value.optionsZIndex || optionsZIndex
    }
    child.$watch('isOpen', isOpen => {
      if (isOpen) {
        context.$children.map(chld => {
          const optionsRef = chld.$refs.list
          if (optionsRef) {
            const { top, left, width, height } = el.getBoundingClientRect()
            let scrollX = window.scrollX || window.pageXOffset
            let scrollY = window.scrollY || window.pageYOffset
            optionsRef.setAttribute(
              'style',
              `position:absolute;
               width:${width}px;
               left:${scrollX + left}px;
               top:${scrollY + top + height}px;
               z-index:${optionsZIndex}`
            )
            let tempIndex = Number(hideScrollLevel)

            let parentNode = el.parentNode
            while (tempIndex) {
              overflowStates[tempIndex] = parentNode.style.overflow
              parentNode.style.overflow = 'hidden'
              parentNode = parentNode.parentNode
              tempIndex -= 1
            }
            document.body.appendChild(optionsRef)
            el._optionsRef = optionsRef
          }
        })
      } else {
        let parentNode = el.parentNode
        let tempIndex = Number(hideScrollLevel)
        while (tempIndex) {
          parentNode.style.overflow = overflowStates[tempIndex]
          parentNode = parentNode.parentNode
          tempIndex -= 1
        }
      }
    })
  },

  unbind (el, bindings, { context }) {
    if (el._optionsRef) {
      document.body.removeChild(el._optionsRef)
    }
  }
}
