<template lang="pug">
div
  label.typo__label Custom option template
  multiselect(
    v-model="value",
    placeholder="Fav No Man’s Sky path",
    label="title",
    track-by="title",
    :options="options",
    :option-height="104",
    :custom-label="customLabel",
    :show-labels="false",
    :option-function="customRender"
  )
    span(slot="noResult").
      Oops! No elements found. Consider changing the search query.
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
  },
  methods: {
    customLabel ({ title, desc }) {
      return `${title} – ${desc}`
    },
    customRender (h, option) {
      return <div>
        <img class="option__image" src={ option.img } alt="No Man’s Sky" />
        <div class="option__desc">
          <span class="option__title">{ option.title }</span>
          <span class="option__small">{ option.desc }</span>
        </div>
      </div>
    }
  }
}
</script>

<style>
.option__image {
  max-height: 80px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.option__desc {
  display: inline-block;
  vertical-align: middle;
  padding: rem(10px);
}

.option__title {
  font-size: rem(24px);
}

.option__small {
  margin-top: rem(10px);
  display: block;
}
</style>
