<template lang="html">
  <VueMultiselect
    v-model="value"
    tag-placeholder="Add this as new tag"
    placeholder="Search or add a tag"
    label="name"
    track-by="code"
    :options="options"
    :multiple="true"
    :taggable="true"
    @tag="addTag"
  />
</template>

<script>
export default {
  data () {
    return {
      value: [
        { name: 'Javascript', code: 'js' }
      ],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' }
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
</script>
