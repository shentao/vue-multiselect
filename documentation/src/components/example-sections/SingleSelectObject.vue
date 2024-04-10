<template>
  <div class="grid__column">
    <h2 id="sub-single-select-object" data-section="" class="typo__h2">Single select (object)</h2>
    <p>When working with objects, you must provide additional props: <code>label</code> and <code>track-by</code>.</p>
    <p><code>track-by</code> is used to identify the option within the options list thus it’s value has to be unique. In
      this example the <code>name</code> property is unique across all options, so it can be used as
      <code>track-by</code> value.</p>
    <p><code>label</code> is used to display the option.</p><h4>Optional configuration flags:</h4>
    <ul>
      <li><code>:searchable="false"</code> – disables the search functionality</li>
      <li><code>:allow-empty="false"</code> – once there is a value it can’t be deselected</li>
      <li><code>deselect-label="Can't remove this value"</code> – when highlighted, the already selected option will
        have the <em>Can't remove this value</em> helper label. Useful for single selects that don’t allow empty
        selection.
      </li>
    </ul>
    <CodeDemoAndExample demo-name="SingleSelectObject"/>
  </div>
</template>

<script>

import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'SingleSelectObject',
  components: {CodeDemoAndExample}
}
</script>

