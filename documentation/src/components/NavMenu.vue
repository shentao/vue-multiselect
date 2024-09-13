<template>
  <ul class="list" :class="{ 'list--sticky': isNavSticky }">
    <multiselect class="list__multiselect" :options="versions" :model-value="version" :allow-empty="false"
                 :searchable="false"
                 @update:model-value="pickVersion" select-label="Go to" deselect-label=""
                 selected-label=""></multiselect>
    <li class="list__heading">Setup</li>
    <li class="list__element"><a href="#sub-getting-started" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-getting-started' }">Getting Started</a></li>
    <li class="list__element"><a href="#sub-migration-guide" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-migration-guide' }">Migration Guide</a></li>
    <li class="list__heading"><a href="#examples" class="link blank__link" :class="{ 'list__link--active': currentPosition === 'sub-examples' }">Examples</a></li>
    <li class="list__element"><a href="#sub-single-select" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-single-select' }">Single select</a></li>
    <li class="list__element"><a href="#sub-single-select-object" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-single-select-object' }">Single select (object)</a>
    </li>
    <li class="list__element"><a href="#sub-select-with-search" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-select-with-search' }">Select with search</a></li>
    <li class="list__element"><a href="#sub-multiple-select" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-multiple-select' }">Multiple select</a></li>
    <li class="list__element"><a href="#sub-asynchronous-select" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-asynchronous-select' }">Asynchronous select</a></li>
    <li class="list__element"><a href="#sub-tagging" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-tagging' }">Tagging</a></li>
    <li class="list__element"><a href="#sub-custom-option-template" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-custom-option-template' }">Custom option template</a>
    </li>
    <li class="list__element"><a href="#sub-option-groups" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-option-groups' }">Option groups</a></li>
    <li class="list__element"><a href="#sub-vuex-support" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-vuex-support' }">Vuex support</a></li>
    <li class="list__element"><a href="#sub-action-dispatcher" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-action-dispatcher' }">Action dispatcher</a></li>
    <li class="list__element"><a href="#sub-custom-configuration" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-custom-configuration' }">Custom configuration</a></li>
    <li class="list__element"><a href="#sub-programmatic-control" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-programmatic-control' }">Programmatic control</a></li>
    <li class="list__heading">API</li>
    <li class="list__element"><a href="#sub-props" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-props' }">Props</a></li>
    <li class="list__element"><a href="#sub-events" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-events' }">Events</a></li>
    <li class="list__element"><a href="#sub-slots" class="link list__link" :class="{ 'list__link--active': currentPosition === 'sub-slots' }">Slots</a></li>
    <li class="list__heading">Our other libraries</li>
    <li class="list__element"><a target="_BLANK" href="https://vuelidate.netlify.com"
                                 class="link list__link">Vuelidate<img
      src="https://img.shields.io/github/stars/vuelidate/vuelidate.svg?style=social&amp;label=Stars"
      class="list__img"><span class="list__desc">Simple model-based validation plugin for Vue.js</span></a></li>
  </ul>
</template>
<script>

function calculateNavPositions () {
  sections = Array
    .from(document.querySelectorAll('[data-section]'))
    .map(section => {
      return {
        id: section.id,
        offset: section.getBoundingClientRect().top + window.pageYOffset - 50
      }
    })
}

let sections

export default {
  name: 'NavMenu',
  data () {
    return {
      isNavSticky: false,
      versions: ['v1.x', 'v2.x', 'v3.x'],
      version: 'v3.x',
      currentPosition: ''
    }
  },
  methods: {
    adjustNav () {
      this.isNavSticky = window.scrollY > window.innerHeight
      if (!sections) calculateNavPositions()
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY > sections[i].offset) {
          this.currentPosition = sections[i].id
          break
        }
      }
    },
    pickVersion (version) {
      switch (version) {
        case 'v1.x':
          window.location.assign('v1/index.html')
          break
        case 'v2.x':
          window.location.assign('v2/index.html')
          break
        case 'v3.x':
          window.location.assign('https://vue-multiselect.js.org/')
          break
      }
    }
  },
  mounted () {
    this.adjustNav()
    window.addEventListener('scroll', this.adjustNav)
    setTimeout(function () {
      calculateNavPositions()
    }, 1000)
  }
}
</script>
