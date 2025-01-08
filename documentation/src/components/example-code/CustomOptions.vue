<template>
  <div><label class="typo__label">Custom option template</label>
    <multiselect id="custom-options" v-model="value" placeholder="Fav No Man’s Sky path" label="title" track-by="title" :options="options"
                 :option-height="104" :custom-label="customLabel" :show-labels="false">
      <template #singleLabel="props"><img class="option__image" :src="props.option.img"
                                                           alt="No Man’s Sky"/><span class="option__desc"><span
        class="option__title">{{ props.option.title }}</span></span></template>
      <template #option="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky"/>
        <div class="option__desc"><span class="option__title">{{ props.option.title }}</span><span
          class="option__small">{{ props.option.desc }}</span></div>
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
      value: {title: 'Explorer', desc: 'Discovering new species!', img: 'assets/posters/creatures.png'},
      options: [
        {title: 'Space Pirate', desc: 'More space battles!', img: 'assets/posters/fleet.png'},
        {title: 'Merchant', desc: 'PROFIT!', img: 'assets/posters/trading_post.png'},
        {title: 'Explorer', desc: 'Discovering new species!', img: 'assets/posters/creatures.png'},
        {title: 'Miner', desc: 'We need to go deeper!', img: 'assets/posters/resource_lab.png'}
      ]
    }
  },
  methods: {
    customLabel ({title, desc}) {
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
