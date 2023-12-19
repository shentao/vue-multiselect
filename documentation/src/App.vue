<template>
  <div>
    <div id="mixins"></div>
    <start/>
    <div class="grid__row docs">
      <div class="grid__columns grid__unit--sm-3 small--hidden">
        <NavMenu/>
      </div>
      <div class="grid__columns grid__unit--sm-12 grid__unit--md-9">
        <GettingStarted/>
        <Examples/>
        <hr class="typo__hr"/>
        <Props/>
        <Events/>
        <Slots/>
      </div>
    </div>
    <div id="footer">
      <section class="utils--center">
        <h4 class="typo__h4">Created by Damian Dulisz<strong>
          <a class="typo__link"
             href="https://twitter.com/DamianDulisz" target="_BLANK">
            @DamianDulisz</a></strong></h4>
      </section>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

import Start from './components/_start.vue'
import NavMenu from './components/NavMenu.vue'
import GettingStarted from './GettingStarted.vue'
import Examples from './components/example-sections/Examples.vue'
import Props from './components/Props.vue'
import Events from './components/Events.vue'
import Slots from './components/Slots.vue'

export default defineComponent({
  name: 'App',
  components: {Slots, Events, Props, Examples, GettingStarted, NavMenu, Start},
})
</script>

