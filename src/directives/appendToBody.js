export default {
  inserted (el, bindings, { context, child }) {
    child.$watch('isOpen', isOpen => {
      if (isOpen) {
        context.$children.map(chld => {
          const optionsRef = chld.$refs.list
          if (optionsRef) {
            const { top, left, width } = optionsRef.getBoundingClientRect()
            let scrollX = window.scrollX || window.pageXOffset
            let scrollY = window.scrollY || window.pageYOffset

            optionsRef.setAttribute(
              'style',
              `position:absolute;
               width:${width}px;
               left:${scrollX + left}px;
               top:${scrollY + top}px;
               z-index:999`
            )
            document.body.appendChild(optionsRef)
            el._optionsRef = optionsRef
          }
        })
      }
    })
  },

  unbind (el, bindings, { context }) {
    if (el._optionsRef) {
      document.body.removeChild(el._optionsRef)
    }
  }
}
