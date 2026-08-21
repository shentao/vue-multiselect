import Multiselect from './Multiselect.vue'
import { useMultiselect } from './composables/useMultiselect'
import { usePointer } from './composables/usePointer'

export default Multiselect

export { Multiselect, useMultiselect, usePointer }

export {
  multiselectProps,
  multiselectCoreProps,
  pointerProps,
  multiselectViewProps,
  multiselectEmits
} from './props'

export type {
  MultiselectProps,
  MultiselectCoreProps,
  PointerProps,
  MultiselectViewProps
} from './props'

export type { MultiselectRefs, UseMultiselectReturn } from './composables/useMultiselect'
export type { UsePointerContext, UsePointerReturn } from './composables/usePointer'
