<template lang="html">
  <VueMultiselect
    v-model="value"
    placeholder="Select your path"
    label="title"
    track-by="title"
    :options="options"
    :option-height="104"
    :custom-label="customLabel"
    :show-labels="false"
  >
    <template slot="singleLabel" slot-scope="props">
      <img :src="props.option.img" class="option__image">
      <span class="option__desc">
        <span class="option__title">{{ props.option.title }}</span>
        <span class="option__small">{{ props.option.desc }}</span>
      </span>
    </template>
    <template slot="option" slot-scope="props">
      <img :src="props.option.img" class="option__image">
      <span class="option__desc">
        <span class="option__title"> {{ props.option.title }}</span>
        <span class="option__small"> {{ props.option.desc }}</span>
      </span>
    </template>
  </VueMultiselect>
</template>

<script>
const creaturesImg = require('../../../images/posters/creatures.png')
const fleetImg = require('../../../images/posters/fleet.png')
const tradingImg = require('../../../images/posters/trading_post.png')
const labImg = require('../../../images/posters/resource_lab.png')

export default {
  data () {
    return {
      value: { title: 'Explorer', desc: 'Discovering new species!', img: creaturesImg },
      options: [
        { title: 'Space Pirate', desc: 'More space battles!', img: fleetImg },
        { title: 'Merchant', desc: 'PROFIT!', img: tradingImg },
        { title: 'Explorer', desc: 'Discovering new species!', img: creaturesImg },
        { title: 'Miner', desc: 'We need to go deeper!', img: labImg }
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

<style scoped>
.option__image {
  max-height: 40px;
  margin-right: 10px;
  display: inline-block;
  vertical-align: middle;
}

.option__desc {
  display: inline-block;
  vertical-align: middle;
}

.option__title {
  font-size: 18px;
  line-height: 1;
}

.option__small {
  margin-top: 3px;
  font-size: 12px;
  display: block;
  line-height: 1;
}
</style>
