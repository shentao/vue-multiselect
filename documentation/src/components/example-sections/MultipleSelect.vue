<template>
  <div class="grid__row">
    <div class="grid__column"><h2 id="sub-multiple-select" data-section="" class="typo__h2">Multiple select</h2>
      <p>To allow multiple selections pass the <code>:multiple="true"</code> prop.</p> <h4>Optional configuration
        flags:</h4>
      <ul>
        <li><code>:close-on-select="false"</code> – the dropdown stays open after selecting an option</li>
        <li><code>:clear-on-select="false"</code> – the search query stays the same after selecting an option</li>
        <li>You can pass <code>&lt;template slot="tag" slot-scope="props"&gt;&lt;Your
          code&gt;&lt;/template&gt;</code> to use a different markup for selected options (tags)
        </li>
      </ul>
    </div>
    <CodeDemoAndExample demo-name="MultiSelect"/>
  </div>
</template>

<script>

import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'MultipleSelect',
  components: {CodeDemoAndExample}
}
</script>

