<template>
  <div class="grid__column"><h2 id="sub-select-with-search" data-section="" class="typo__h2">Select with search</h2>
    <p>By default <code>searchable</code> is set to true, thus using search doesn’t require any prop.</p>
    <p>The internal search engine is based on the <code>label</code> prop. In other words –&nbsp;when searching,
      vue-multiselect only compares the option labels with the current search query. If you want to search inside other
      object properties look at the <a href="#sub-asynchronous-select">ajax search example</a>.</p>
    <p><code>custom-label</code> accepts a function with the <code>option</code> object as the first param. It should
      return a string which is then used to display a custom label.</p>
    <p>When sorting a filtered list, <code>filteringSortFunc</code> accepts a function for use in <code>Array.sort()</code>.
      By default, it orders by the ascending length of each option.</p>
    <CodeDemoAndExample demo-name="SingleSelectSearch"/>
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'SelectWithSearch',
  components: {CodeDemoAndExample}
}
</script>
