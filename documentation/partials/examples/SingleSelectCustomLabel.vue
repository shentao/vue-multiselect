<template lang="pug">
div
  label.typo__label Single select / dropdown
  multiselect(
    v-model="value",
    deselect-label="Can't remove this value",
    track-by="img",
    label="img",
    placeholder="Select one",
    :options="options",
    :searchable="false",
    :allow-empty="false"
  )
    template(slot="singleLabel", slot-scope="props")
      img.label-image(:src="props.currentOptionLabel", alt="No Man’s Sky")
      span.label-text
        | this is
        | html
  pre.language-json
    code.
      {{ value  }}

</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: { title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
      options: [
        { title: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png' },
        { title: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png' },
        { title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
        { title: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png' }
      ]
    }
  }
}
</script>

<style lang="css">
.label-image {
  max-height: 50px;
}
.label-text {
  padding: 1px;
  color: #41B883;
  margin: 10px;
}
</style>
