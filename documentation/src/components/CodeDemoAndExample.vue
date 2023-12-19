<template>
  <div class="example grid__row">
    <div class="grid__column grid__unit--md-5">
      <div>
        <component :is="demoComponent" />
      </div>
    </div>
    <div class="grid__column grid__unit--md-7"><label class="typo__label">Code sample</label>
      <pre><code class="javascript-code-sample sample" v-html="javascriptContents" /></pre>
      <pre><code class="html-code-sample sample" v-html="htmlContents" /></pre>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'CodeDemoAndExample',
  props: {
    demoName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      javascriptContents:'',
      htmlContents: '',
      htmlCode:null,
    }
  },
  computed: {
    demoComponent() {
      return defineAsyncComponent(() => import(`./example-code/${this.demoName}.vue`))
    }
  },
  mounted: function (){
    if (this.demoName === "SingleSelectPrimitive" || true) {
      import(`./example-code/${this.demoName}.vue?raw`).then(contents => {
        const htmlCode = /<template>(.*)<\/template>/gmis.exec(contents.default)[1].trim();
        this.htmlContents = this.highlighter.codeToHtml(htmlCode, {lang: 'html'})
        this.htmlCode = htmlCode;
        this.javascriptContents = this.highlighter.codeToHtml(/<script>(.*)<\/script>/gmis.exec(contents.default)[1].trim(), {lang: 'javascript'})
      })
    }
  }
}
</script>

<style scoped>
.javascript-code-sample{
  background: #F3F5F6;
}
.html-code-sample{
  background: #F3F5F6;
}
</style>
