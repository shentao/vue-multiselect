const n=`<template>
  <div><label class="typo__label">Tagging</label>
    <multiselect v-model="value" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
                 track-by="code" :options="options" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
    <pre class="language-json"><code>{{ value }}</code></pre>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: [
        {name: 'Javascript', code: 'js'}
      ],
      options: [
        {name: 'Vue.js', code: 'vu'},
        {name: 'Javascript', code: 'js'},
        {name: 'Open Source', code: 'os'}
      ]
    }
  },
  methods: {
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.options.push(tag)
      this.value.push(tag)
    }
  }
}
<\/script>
`;export{n as default};
