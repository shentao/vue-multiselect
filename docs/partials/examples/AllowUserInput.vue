<template lang="pug">
div
  label.typo__label Custom option template
  multiselect(
    :value="value",
    placeholder="Enter A value",
    :options="options",
    :option-height="104",
    :show-labels="false",
    :allow-user-input="true",
    :multiple="false"
    :clear-on-select="true",
    :allow-empty="true",
    :hide-selected="true",
    @select="setValue"
  )
    template(slot="option", scope="props")
      img.option__image(:src="props.option.img", alt="No Man’s Sky")
      .option__desc
        span.option__title {{ props.option.label }}
        span.option__small {{ props.option.desc }}
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
      value: '',
      options: [
        { label: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png' },
        { label: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png' },
        { label: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
        { label: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png' }
      ]
    }
  },
  methods: {
    setValue(value, id) {
      this.value = value;
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
