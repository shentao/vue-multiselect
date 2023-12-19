<template>
  <div class="grid__row">
    <div class="grid__column"><h2 id="sub-vuex-support" data-section="" class="typo__h2">Vuex support</h2>
      <p>Due to the one-way data-flow enforced by Vuex you should not be using <code>v-model</code> for manipulating the
        currently selected value.
        Because Vue-Multiselect always uses it’s own internal copy of the value it never mutates the <code>:modelValue</code>
        by itself, which means it can can safely used with Vuex or even Redux.</p>
      <p>In Vue 3.0 <code>v-model</code> is just a syntax sugar for <code>:modelValue</code> and <code>@update:modelValue</code>. Because
        of this we can use the <code>@update:modelValue</code> event to trigger Vuex actions or mutations. Whenever we mutate the
        <code>:modelValue</code> in Vuex, Multiselect’s internal value will update.</p></div>
    <CodeDemoAndExample demo-name="VuexSupport" />
  </div>
</template>

<script>
import CodeDemoAndExample from '../CodeDemoAndExample.vue'

export default {
  name: 'VuexSupport',
  components: {CodeDemoAndExample}
}
</script>
