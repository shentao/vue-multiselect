<template>
  <div class="grid__column"><h2 id="sub-asynchronous-select" data-section="" class="typo__h2">Asynchronous select</h2>
    <p>Vue-Multiselect supports changing the option list on the fly, thus can be also used a type-a-head search box.</p>
    <p>To react to the search query changes, set a handler function on the <code>@search-change</code> event. It
      receives the <code>searchQuery</code> as the first param, which can be used to make an asynchronous API call.</p>
    <p>It is convenient to set the <code>:loading</code> prop to <code>true</code>, whenever a request is in progress.
      Look at the provided <code>asyncFind</code> method for an example usage.</p> <h4>Optional configuration
      flags:</h4>
    <ul>
      <li><code>:hide-selected="true"</code> – already selected options will not be displayed in the dropdown</li>
      <li><code>:internal-search="false"</code> – disables the multiselect’s internal search engine. If you do that, you
        have to manually update the available <code>:options</code>.
      </li>
      <li><code>:limit="3"</code> – limits the visible results to 3.</li>
      <li><code>:limit-text="limitText"</code> – function that receives the current selected options count and should
        return a string to show when the <code>:limit</code> count is exceed
      </li>
      <li><code>:options-limit="300"</code> – limits the displayed options to <code>300</code>. Useful for optimisations
        purposes.
      </li>
      <li><code>id="ajax"</code> – every event is emitted with this as the second param. Useful for identification which
        component instance triggered the method (in loops for example). NEW: Can also be used for pointing with <code>&lt;label
          :for="id"&gt;</code>.
      </li>
      <li><code>open-direction="bottom"</code> – forces the multiselect to always open below. Use <code>top</code> or
        <code>above</code> to always open above. By default the multiselect will open whereever there is more space once
        there is not enough space below to open at <code>maxHeight</code>.
      </li>
    </ul>
    <CodeDemoAndExample demo-name="AjaxSearch"/>
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'AsynchronousSelect',
  components: {CodeDemoAndExample}
}
</script>
