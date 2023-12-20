<template>
  <div class="grid__row">
    <div class="grid__column"><h2 id="sub-action-dispatcher" data-section="" class="typo__h2">Action dispatcher</h2>
      <p>The component may also act as dispatcher for different actions/methods. In this case there is no need for the
        <code>:modelValue</code> prop.
        Instead of <code>@update:modelValue</code> you can listen on the <code>@select</code> event. The difference between the two
        is that <code>@select</code> only receives the currently selected value instead of the whole list of selected
        values (if select is multiple).</p>
       <h4>Optional configuration flags:</h4>
    <ul>
      <li><code>:reset-after="true"</code> – Resets the internal value after each select action inside the component.</li>
    </ul>
    </div>
    <CodeDemoAndExample demo-name="ActionDispatcher"/>
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'VuexSupport',
  components: {CodeDemoAndExample}
}
</script>
