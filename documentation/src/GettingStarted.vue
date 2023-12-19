<template>
  <div class="grid__row">
    <div class="grid__column">
      <section id="sub-getting-started" data-section="data-section">
        <h1 class="typo__h1">Getting started</h1>
        <hr class="typo__hr"/>
        <div class="grid__row">
          <div class="grid__column">
            <h2 class="typo__h2">Installation</h2>
            <h3 class="typo__h3">via npm</h3>
            <pre>
              <code ref="npm-install">npm install vue-multiselect --save</code>
            </pre>
            <h3 class="typo__h3">via CDN</h3>
             <pre>
              <code ref="cdn-install">&lt;script src="https://unpkg.com/vue-multiselect">&lt;/script>
&lt;link rel="stylesheet" href="https://unpkg.com/vue-multiselect/dist/vue-multiselect.min.css"></code>
            </pre>
          </div>
          <div class="grid__column">
            <h2 class="typo__h2">Basic usage</h2>
            <h3 class="typo__h3">via npm</h3>
            <pre><code ref="basic-usage">&lt;!-- Vue component -->
&lt;template>
  &lt;div>
    &lt;multiselect v-model="value" :options="options">&lt;/multiselect>
  &lt;/div>
&lt;/template>

&lt;script>
  import Multiselect from 'vue-multiselect'

  export default {
    // OR register locally
    components: { Multiselect },
    data () {
      return {
        value: null,
        options: ['list', 'of', 'options']
      }
    }
  }
&lt;/script>

&lt;!-- Add Multiselect CSS. Can be added as a static asset or inside a component. -->
&lt;style src="vue-multiselect/dist/vue-multiselect.min.css">&lt;/style>

&lt;style>
  your styles
&lt;/style>
</code></pre>
            <h3 class="typo__h3">via CDN</h3>
            <pre><code ref="cdn-usage">// register globally
app.component('vue-multiselect', window.VueMultiselect.default)</code></pre>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import {getHighlighter, setCDN} from 'shiki'
//
// setCDN('shiki/')

export default {
  name: 'GettingStarted',
  mounted: function () {
    // const highlighter = await getHighlighter({
    //   theme: 'nord',
    //   langs: ['javascript', 'html', 'bash']
    // })
    this.$refs['basic-usage'].innerHTML = this.highlighter.codeToHtml(this.$refs['basic-usage'].innerText, {lang: 'html'})
    this.$refs['npm-install'].innerHTML = this.highlighter.codeToHtml(this.$refs['npm-install'].innerText, {lang: 'bash'})
    this.$refs['cdn-install'].innerHTML = this.highlighter.codeToHtml(this.$refs['cdn-install'].innerText, {lang: 'html'})
    this.$refs['cdn-usage'].innerHTML = this.highlighter.codeToHtml(this.$refs['cdn-usage'].innerText, {lang: 'javascript'})
  }
}
</script>
