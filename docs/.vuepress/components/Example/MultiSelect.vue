<template lang="html">
  <VueMultiselect
    v-model="value"
    :options="options"
    :multiple="true"
    :close-on-select="false"
    :clear-on-select="false"
    :hide-selected="true"
    :preserve-search="true"
    placeholder="Pick some"
    label="name"
    track-by="name"
    :preselect-first="true"
  >
    <template slot="tag" slot-scope="props">
      <span class="custom__tag">
        {{ props.option.language }}
        <span
          class="custom__remove"
          @click="props.remove(props.option)"
        >
          ❌
        </span>
      </span>
    </template>
  </VueMultiselect>
</template>

<script>
export default {
  data () {
    return {
      value: [],
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
}
</script>

<style lang="stylus">
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
