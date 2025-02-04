<template>
  <div><label class="typo__label">Simple select / dropdown</label>
    <multiselect id="multiselect" v-model="value" :options="options" :multiple="true" :close-on-select="false" :clear-on-select="false"
                 :preserve-search="true" placeholder="Pick some" label="name" track-by="name" :preselect-first="true">
      <template #selection="{ values, search, isOpen }">
        <span class="multiselect__single"
              v-if="values.length"
              v-show="!isOpen">{{ values.length }} options selected</span>
      </template>
    </multiselect>
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
      value: [],
      options: [
        {name: 'Vue.js', language: 'JavaScript'},
        {name: 'Adonis', language: 'JavaScript'},
        {name: 'Rails', language: 'Ruby'},
        {name: 'Sinatra', language: 'Ruby'},
        {name: 'Laravel', language: 'PHP'},
        {name: 'Phoenix', language: 'Elixir'}
      ]
    }
  }
}
</script>

<style lang="sass">
.custom__tag
  display: inline-block
  padding: 3px 12px
  background: #d2d7ff
  margin-right: 8px
  margin-bottom: 8px
  border-radius: 10px
  cursor: pointer

  &:nth-child(even)
    background: #daffee

  &:hover
    background: #eaeaea

.custom__remove
  padding: 0px
  font-size: 10px
  margin-left: 5px
</style>
