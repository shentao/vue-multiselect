<template>
  <div class="grid__column"><h2 id="sub-tagging" data-section="" class="typo__h2">Tagging</h2>
    <p>To add tagging functionality to single/multiple selects, set the <code>:taggable</code> prop to <code>true</code>.
      This will add an additional option at the beginning of the options list whenever you type a phrase that doesn’t
      have an exact match in the available options. Selecting this temporary option will emit the <code>@tag</code>
      event with the current typed search query as the first param. The event handler should add the received <strong>tag</strong>
      to both the options list and the value.</p>
    <p>Remember that when working with objects as options, you have to transform the received tag string to an object
      that matches the objects structure of the options list. In this example, the <code>addTag</code> method generates
      an object with a unique <code>code</code> property.</p> <h4>Optional configuration flags:</h4>
    <ul>
      <li><code>tag-placeholder="Add this as new tag"</code> – A helper label that will be displayed when highlighting
        the just typed tag suggestion.
      </li>
      <li><code>tag-position="bottom"</code> – By default the tag position will be set to 'top' and new tags will appear
        above the search results. Changing the tag positon to 'bottom' will revert this behaviour and will prioritize
        the search results.
      </li>
    </ul>
  <CodeDemoAndExample demo-name="Tagging" />
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'Tagging',
  components: {CodeDemoAndExample}
}
</script>
