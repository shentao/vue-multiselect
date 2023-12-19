<template>
  <div class="single-select">
    <h2 id="sub-single-select" data-section="" class="typo__h2">Single select</h2>
    <p>The basic single select / dropdown doesn’t require much configuration.</p>
    <p>The <code>options</code> prop must be an <code>Array</code>.</p>
    <h4>Optional configuration flags:</h4>
    <ul>
      <li><code>:searchable="false"</code> – disables the search functionality</li>
      <li><code>:close-on-select="false"</code> –&nbsp;the dropdown stays open after selecting an option</li>
      <li><code>:show-labels="false"</code> –&nbsp;the highlighted option doesn’t have a label on it</li>
    </ul>
    <CodeDemoAndExample demo-name="SingleSelectPrimitive"/>
  </div>
</template>
<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'SingleSelectPrimitive',
  components: {CodeDemoAndExample}
}
</script>
