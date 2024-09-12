<template>
  <div id="examples">
    <SingleSelectPrimitive/>
    <SingleSelectObject/>
    <SelectWithSearch />
    <MultipleSelect />
    <AsynchronousSelect />
    <Tagging />
    <CustomOptionTemplate />
    <OptionGroups />
    <VuexSupport />
    <ActionDispatcher/>
    <CustomConfiguration />
    <ProgrammaticControl />
  </div>
</template>
<script>

import SingleSelectPrimitive from './SingleSelectPrimitive.vue'
import SingleSelectObject from './SingleSelectObject.vue'
import SelectWithSearch from './SelectWithSearch.vue'
import MultipleSelect from './MultipleSelect.vue'
import AsynchronousSelect from './AsynchronousSelect.vue'
import Tagging from './Tagging.vue'
import CustomOptionTemplate from './CustomOptionTemplate.vue'
import OptionGroups from './OptionGroups.vue'
import VuexSupport from './VuexSupport.vue'
import ActionDispatcher from './ActionDispatcher.vue'
import CustomConfiguration from './CustomConfiguration.vue'
import ProgrammaticControl from './ProgrammaticControl.vue'

export default {
  name: 'Examples',
  components: {
    ProgrammaticControl,
    CustomConfiguration,
    ActionDispatcher,
    VuexSupport,
    OptionGroups,
    CustomOptionTemplate,
    Tagging,
    AsynchronousSelect,
    MultipleSelect,
    SelectWithSearch,
    SingleSelectObject,
    SingleSelectPrimitive}
}
</script>
