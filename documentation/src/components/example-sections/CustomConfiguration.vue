<template>
  <div class="grid__row">
    <div class="grid__column"><h2 id="sub-custom-configuration" data-section="" class="typo__h2">Custom configuration</h2>
      <p>Shows error when touched, but nothing is selected.</p>
      <h4>Optional configuration flags:</h4>
      <ul>
        <li><code>:max-height="150"</code> – Set the dropdown height to 150px</li>
        <li><code>:max="3"</code> –&nbsp;Set the maximal number of selections</li>
        <li><code>:allow-empty="false"</code> – Doesn’t allow to remove the last option if it exists</li>
        <li><code>:prevent-autofocus="true"</code> – Doesn’t focus to input search on open</li>
        <li><code>:block-keys="['Tab', 'Enter']"</code> – Block the <code>Tab</code> and <code>Enter</code> keys from
          triggering their default behaviour
        </li>
        <li><code>@close="onTouch"</code> – Event emitted when closing the dropdown</li>
      </ul>
    </div>
    <CodeDemoAndExample demo-name="CustomConfiguration"/>
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'VuexSupport',
  components: {CodeDemoAndExample}
}
</script>
