<template lang="html">
  <VueMultiselect
    v-model="value"
    placeholder="Fav No Man’s Sky path"
    label="title"
    track-by="title"
    :options="options"
    :option-height="104"
    :custom-label="customLabel"
    :show-labels="false"
  >
    <template slot="singleLabel" slot-scope="props">
      <img
        class="option__image"
        :src="props.option.img"
        alt="No Man’s Sky"
      >
      <span class="option__desc">
        <span class="option__title">{{ props.option.title }}</span>
      </span>
    </template>
    <template slot="option" slot-scope="props">
      <img
        class="option__image"
        :src="props.option.img"
        alt="No Man’s Sky"
      >
      <span class="option__desc">
        <span class="option__title"> {{ props.option.title }}</span>
        <span class="option__small"> {{ props.option.desc }}</span>
      </span>
    </template>
  </VueMultiselect>
</template>

<script>
export default {
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
