<template lang="html">
  <IsComponent background="#3eaf7c" color="#fff" border="none">
    <span slot="name">Multiselect.vue</span>
    <span slot="desc">
      The default composition that implements the features known from Vue-Multiselect v2.x. It proxies all of its props and listeners to the MultiselectCore component.
    </span>
    <span slot="type">Composition</span>
    <IsComponent background="#f5f5f5" border="none">
      <span slot="name">MultiselectCore.js</span>
      <span slot="desc">
        The renderless core component containing all VueMultiselect logic. It exposes all the data, computed properties and methods to all of its chidren through a slot scope.
      </span>
      <span slot="type">Renderless</span>
      <InSlot background="#f5f5f5">
        <span slot="slotName">Default</span>
        <IsComponent>
          <span slot="name">MultiselectWrapper.vue</span>
          <span slot="desc">
            The root component responsible for positioning the component as well as handling focus and keyboard events.
          </span>
          <span slot="type">Leaf</span>
          <InSlot>
            <span slot="slotName">Default</span>
            <IsComponent>
              <span slot="name">MultiselectValue.vue</span>
              <span slot="desc">
                The component responsible for displaying the selected results. It contains multiple slots like: tag, loading, caret, singleLabel, placeholder and control.
              </span>
              <span slot="type">Leaf</span>
              <InSlot>
                <span slot="slotName">Control</span>
                <IsComponent>
                  <span slot="name">MultiselectInput.vue</span>
                  <span slot="desc">
                    Text input component used for changing the search value. Present only when the dropdown is open. When present, it controls the keyboard events.
                  </span>
                  <span slot="type">Leaf</span>
                </IsComponent>
              </InSlot>
            </IsComponent>
          </InSlot>
        </IsComponent>
        <InSlot background="#f5f5f5">
          <span slot="slotName">Options</span>
          <IsComponent>
            <span slot="name">MultiselectOptions.vue</span>
            <span slot="desc">
              Component responsible for the list of options and the way they are displayed and navigated. Handles mouse clicks and highlights elements based on the pointer value and already selected options.
            </span>
            <span slot="type">Leaf</span>
          </IsComponent>
        </InSlot>
      </InSlot>
    </IsComponent>
  </IsComponent>
</template>

<script>
import IsComponent from './IsComponent'
import InSlot from './InSlot'
export default {
  components: { IsComponent, InSlot }
}
</script>
