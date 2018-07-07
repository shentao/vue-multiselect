export function isEmpty (opt) {
  if (opt === 0) return false
  if (Array.isArray(opt) && opt.length === 0) return true
  return !opt
}

export function isSelected (option, value, trackBy) {
  const opt = trackBy
    ? option[trackBy]
    : option
  return value.indexOf(opt) > -1
}

export function not (fun) {
  return (...params) => !fun(...params)
}

export function includes (str, query) {
  /* istanbul ignore else */
  if (str === undefined) str = 'undefined'
  if (str === null) str = 'null'
  if (str === false) str = 'false'
  const text = str.toString().toLowerCase()
  return text.indexOf(query.trim()) !== -1
}

export function filterOptions (options, search, label, customLabel) {
  return options.filter(option => includes(customLabel(option, label), search))
}

export function stripGroups (options) {
  return options.filter(option => !option.$isLabel)
}

export function flattenOptions (values, label) {
  return (options) =>
    options.reduce((prev, curr) => {
      /* istanbul ignore else */
      if (curr[values] && curr[values].length) {
        prev.push({
          $groupLabel: curr[label],
          $isLabel: true
        })
        return prev.concat(curr[values])
      }
      return prev
    }, [])
}

export function filterGroups (search, label, values, groupLabel, customLabel) {
  return (groups) =>
    groups.map(group => {
      /* istanbul ignore else */
      if (!group[values]) {
        console.warn(`Options passed to vue-multiselect do not contain groups, despite the config.`)
        return []
      }
      const groupOptions = filterOptions(group[values], search, label, customLabel)

      return groupOptions.length
        ? {
          [groupLabel]: group[groupLabel],
          [values]: groupOptions
        }
        : []
    })
}

export function flow (...fns) {
  return x => fns.reduce((v, f) => f(v), x)
}

/**
 * Scroll node into view if necessary
 * @param {HTMLElement} node - the element that should scroll into view
 * @param {HTMLElement} rootNode - the root element of the component
 * @param {Boolean} alignToTop - align element to the top of the visible area of the scrollable ancestor
 */
// eslint-disable-next-line complexity
export function scrollIntoView (node, rootNode) {
  const scrollParent = getClosestScrollParent(node, rootNode)
  if (scrollParent === null) {
    return
  }
  const scrollParentStyles = window.getComputedStyle(scrollParent)
  const scrollParentRect = scrollParent.getBoundingClientRect()
  const scrollParentBorderTopWidth = parseInt(
    scrollParentStyles.borderTopWidth,
    10,
  )
  const scrollParentBorderBottomWidth = parseInt(
    scrollParentStyles.borderBottomWidth,
    10,
  )
  const bordersWidth =
    scrollParentBorderTopWidth + scrollParentBorderBottomWidth
  const scrollParentTop = scrollParentRect.top + scrollParentBorderTopWidth
  const nodeRect = node.getBoundingClientRect()

  if (nodeRect.top < 0 && scrollParentRect.top < 0) {
    scrollParent.scrollTop += nodeRect.top
    return
  }

  if (nodeRect.top < 0) {
    // the item is above the viewport and the parent is not above the viewport
    scrollParent.scrollTop += nodeRect.top - scrollParentTop
    return
  }

  if (nodeRect.top > 0 && scrollParentRect.top < 0) {
    if (
      scrollParentRect.bottom > 0 &&
      nodeRect.bottom + bordersWidth > scrollParentRect.bottom
    ) {
      // the item is below scrollable area
      scrollParent.scrollTop +=
        nodeRect.bottom - scrollParentRect.bottom + bordersWidth
    }
    // item and parent top are on different sides of view top border (do nothing)
    return
  }

  const nodeOffsetTop = nodeRect.top + scrollParent.scrollTop
  const nodeTop = nodeOffsetTop - scrollParentTop
  if (nodeTop < scrollParent.scrollTop) {
    // the item is above the scrollable area
    scrollParent.scrollTop = nodeTop
  } else if (
    nodeTop + nodeRect.height + bordersWidth >
    scrollParent.scrollTop + scrollParentRect.height
  ) {
    // the item is below the scrollable area
    scrollParent.scrollTop =
      nodeTop + nodeRect.height - scrollParentRect.height + bordersWidth
  }
  // the item is within the scrollable area (do nothing)
}

const getClosestScrollParent = findParent.bind(
  null,
  node => node.scrollHeight > node.clientHeight,
)

function findParent (finder, node, rootNode) {
  if (node !== null && node !== rootNode.parentNode) {
    if (finder(node)) {
      if (node === document.body && node.scrollTop === 0) {
        // in chrome body.scrollTop always return 0
        return document.documentElement
      }
      return node
    } else {
      return findParent(finder, node.parentNode, rootNode)
    }
  } else {
    return null
  }
}
