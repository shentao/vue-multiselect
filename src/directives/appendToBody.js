export default {
  inserted (el, bindings, { context, child }) {
    let parentCount = 5 // remove scroll up to 5 parents by default
    let optionsZIndex = 999 // set zindex of options to 999 by default
    let overflowStates = []
    if (!bindings.value) {
      return false
    } else if (typeof bindings.value === 'object') {
      if (bindings.value.value === false) {
        return false
      }
      parentCount = bindings.value.parentCount || parentCount
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
            let tempIndex = Number(parentCount)

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
        let tempIndex = Number(parentCount)
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
