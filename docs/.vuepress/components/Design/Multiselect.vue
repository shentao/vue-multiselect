<template lang="html">
  <IsComponent>
    <span slot="name">Multiselect.vue</span>
    <span slot="desc">
      The default composition that implements the features known from Vue-Multiselect v2.x. It proxies all of it’s props and listeners to the MultiselectCore component.
    </span>
    <InSlot>
      <span slot="slotName">Default slot</span>
      <IsComponent>
        <span slot="name">MultiselectCore.js</span>
        <span slot="desc">
          The renderless core component containing all VueMultiselect logic. It exposes all the data, computed properties and methods to all of its chidren through a slot scope.
        </span>
        <IsComponent>
          <span slot="name">MultiselectWrapper.vue</span>
          <span slot="desc">
            The root component responsible for positioning the component as well as handling focus and keyboard events.
          </span>
          <IsComponent>
            <span slot="name">MultiselectValue.vue</span>
            <span slot="desc">
              The component responsible for displaying the selected results. It contains multiple slots like: tag, loading, caret, singleLabel, placeholder and control.
            </span>
            <IsComponent>
              <span slot="name">MultiselectInput.vue</span>
              <span slot="desc">
                Text input component used for changing the search value. Present only when the dropdown is open. When present, it controls the keyboard events.
              </span>
            </IsComponent>
          </IsComponent>
        </IsComponent>
      </IsComponent>
    </InSlot>
  </IsComponent>
</template>

<script>
import IsComponent from './IsComponent'
import InSlot from './InSlot'
export default {
  components: { IsComponent, InSlot }
}
</script>
