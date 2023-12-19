<template>
  <div class="grid__row">
    <div class="grid__column"><h2 id="sub-programmatic-control" data-section="" class="typo__h2">Programmatic control</h2>
      <p>In some cases, you might to programmatically open and close your multiselect.
        There are various ways you can do this:</p>
      <ul>
        <li><code>activate()</code> and <code>deactivate()</code> – You can access these methods on the multiselect.
        </li>
        <li><code>focus()</code> – You can dispatch a focus event on the multiselects <code>$el</code> or on the search
          input directly.
        </li>
      </ul>
    </div>
    <CodeDemoAndExample demo-name="ProgrammaticControl"/>
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'VuexSupport',
  components: {CodeDemoAndExample}
}
</script>
