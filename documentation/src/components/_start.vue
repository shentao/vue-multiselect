<template>
<section class="start" :style="gradient">
    <div class="center-vertically">
        <h1 class="typo__h1"><img class="logo" src="/assets/vue-logo.png" alt="vuejs logo"/>Vue-multiselect<small class="version">{{version}}</small></h1>
        <h3 class="typo__h3">The most complete selecting solution for <a class="typo__link" href="http://vuejs.org" target="_BLANK">Vue.js</a></h3>
        <div class="badges"><img src="https://img.shields.io/github/stars/shentao/vue-multiselect.svg?label=Stars" alt="vue-multiselect library github stars" /><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" alt="License" data-canonical-src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat" /><img src="https://img.shields.io/npm/dm/vue-multiselect.svg" alt="npm" data-canonical-src="https://img.shields.io/npm/dm/vue-multiselect.svg" style="max-width:100%;" /><img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" alt="No Dependencies" data-canonical-src="https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat" style="max-width:100%;" /></div>
        <div class="grid__row grid__row--centered">
            <div class="grid__column grid__unit--md-6">
                <div class="multiselect-example__container">
                    <multiselect-example></multiselect-example>
                    <div class="grid__row start__list">
                        <div class="grid__column grid__unit--md-6 list">
                            <ul class="list__ul">
                                <li class="typo__li">Single / multiple select</li>
                                <li class="typo__li">Dropdowns</li>
                                <li class="typo__li"><a class="typo__link" href="#sub-select-with-search">Searchable</a></li>
                                <li class="typo__li"><a class="typo__link" href="#sub-tagging">Tagging</a></li>
                                <li class="typo__li">Server-side Rendering support</li>
                            </ul>
                        </div>
                        <div class="grid__column grid__unit--md-6 list">
                            <ul class="list__ul">
                                <li class="typo__li">Vue 3 Compatible</li>
                                <li class="typo__li"><a class="typo__link" href="#sub-vuex-support">Vuex support by default</a></li>
                                <li class="typo__li"><a class="typo__link" href="#sub-asynchronous-select">Ajax support</a></li>
                                <li class="typo__li"><a class="typo__link" href="#sub-custom-configuration">Fully configurable</a></li>
                                <li class="typo__li">+99% test coverage</li>
                                <li class="typo__li">No dependencies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid__row grid__row--centered">
            <div class="grid__column utils--center"><a class="button button--large button--secondary button--github" href="https://github.com/shentao/vue-multiselect" target="_BLANK">View on GitHub</a><a class="button button--large" href="#sub-getting-started">Getting started & example</a></div>
        </div>
    </div>
</section>
</template>
<script>
import {defineComponent} from 'vue'
const SL = ', 100%, 85%'
import multiselectExample from './MultiselectExample.vue';

export default defineComponent({
  name: 'Start',
  components: {
    multiselectExample
  },
  data () {
    return {
      // eslint-disable-next-line no-undef
      version: __APP_VERSION__,
      firstColor: Math.floor(Math.random() * 255),
      secondColor: Math.floor(Math.random() * 255)
    }
  },
  computed: {
    gradient () {
      return {
        background: `linear-gradient(to left bottom, hsl(${this.firstColor + SL}) 0%, hsl(${this.secondColor + SL}) 100%)`
      }
    }
  }
})
</script>

<style scoped>

</style>
