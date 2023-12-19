<template>
  <div class="grid__column"><h2 id="sub-custom-option-template" data-section="" class="typo__h2">Custom option
    template</h2>
    <p>You can use <code>option</code> <a href="https://vuejs.org/v2/guide/components.html#Scoped-Slots">scoped slot</a>
      to provide a custom option template. The available <code>props</code> include <code>props.option</code> and <code>props.search</code>.
      Look at the provided example for more details.</p>
    <p>To ensure the keyboard navigation works properly, remember to set the <code>:option-height</code> so it equals
      the height of the option template. By default, the component assumes an option height of 40px.</p> <h4>Optional
      configuration flags:</h4>
    <ul>
      <li><code>:option-height="104"</code> – The height of the custom option template.</li>
    </ul>
  </div>
  <CodeDemoAndExample demo-name="CustomOptions" />
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'CustomOptionTemplate',
  components: {CodeDemoAndExample}
}
</script>
