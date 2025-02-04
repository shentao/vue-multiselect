<template>
  <div><label class="typo__label">Single select / dropdown</label>
    <multiselect id="single-select-object" v-model="value" deselect-label="Can't remove this value" track-by="name" label="name"
                 placeholder="Select one" :options="options" :searchable="false" :allow-empty="false"
                 aria-label="pick a value">
      <template v-slot:singleLabel="{ option }"><strong>{{ option.name }}</strong> is written in <strong>
        {{ option.language }}</strong></template>
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
      value: null,
      options: [
        {name: 'Vue.js', language: 'JavaScript'},
        {name: 'Rails', language: 'Ruby'},
        {name: 'Sinatra', language: 'Ruby'},
        {name: 'Laravel', language: 'PHP', $isDisabled: true},
        {name: 'Phoenix', language: 'Elixir'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
