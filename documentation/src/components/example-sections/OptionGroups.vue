<template>
  <div class="grid__column"><h2 id="sub-option-groups" data-section="" class="typo__h2">Option groups</h2>
    <p>The options list can also contain groups. It requires passing 3 additional props: <code>group-label</code>,
      <code>group-values</code> and <code>group-select</code>. <code>group-label</code> is used to locate the group
      label. <code>group-values</code> should point to the group’s option list. <code>group-select</code> is used to
      define if selecting the group label should select/unselect all values in the group, or do nothing.</p>
    <p>Despite that the available options are grouped, the selected options are stored as a flat array of objects.</p>
    <p>Please look at the provided example for a example options list structure.</p>
    <CodeDemoAndExample demo-name="OptionGroups" />
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'OptionGroups',
  components: {CodeDemoAndExample}
}
</script>

<style scoped>

</style>
