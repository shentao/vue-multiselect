<template lang="jade">
section.start
  .center-vertically
    h1.typo__h1
      img.logo(src="../static/vue-logo.png")
      | Vue-multiselect
      small.version (v2.0.0-beta)
    h3.typo__h3 The most complete selecting solution for
      = ' '
      a.typo__link(href="http://vuejs.org" target="_BLANK") Vue.js

    .grid__row.grid__row--centered
      .grid__column.grid__unit--md-6
        .multiselect-example__container
          multiselect(
            v-model="value",
            :options="groups",
            :multiple="true",
            :searchable="searchable",
            :show-labels="true",
            :limit="3",
            :taggable="true",
            label="name",
            track-by="name",
            @tag="onTagging"
            placeholder="Select option",
            select-label="Enter to select"
          )
            span(slot="noResult").
              Tag not found. Press semi-colon <kbd>;</kbd> to create a tag from search query.
          .grid__row.start__list
            .grid__column.grid__unit--md-6.list
              ul.list__ul
                li.typo__li Single / multi select
                li.typo__li Dropdowns
                li.typo__li: a.typo__link(href="#search") Searchable
                li.typo__li: a.typo__link(href="#tagging") Tagging
                li.typo__li: a.typo__link(href="#action") Action dispatcher
            .grid__column.grid__unit--md-6.list
              ul.list__ul
                li.typo__li Vuex support by default
                li.typo__li: a.typo__link(href="#ajax") Ajax options
                li.typo__li: a.typo__link(href="#custom") Fully configurable
                li.typo__li +99% test coverage
                li.typo__li No dependencies

    .grid__row.grid__row--centered
      .grid__column.utils--center
        a.button.button--large.button--secondary.button--github(href="https://github.com/monterail/vue-multiselect" target="_BLANK") View on GitHub
        a.button.button--large(href="#getting-started") Getting started & examples
</template>

<script>
import countries from './data/countries.json'
import Multiselect from '../src/Multiselect'

function throttle (callback, limit) {
  var wait = false
  return function () {
    if (!wait) {
      callback.call()
      wait = true
      setTimeout(function () {
        wait = false
      }, limit)
    }
  }
}

const SL = ', 100%, 85%'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      selected: ['Select option'],
      source: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      value: [{ name: 'Vue.js', language: 'Javascript' }],
      valuePrimitive: 'showLabels',
      multiValue: [{ name: 'Vue.js', language: 'Javascript' }],
      multiple: true,
      taggingOptions: [{ name: 'Vue.js', code: 'vu' }, { name: 'Javascript', code: 'js' }, { name: 'Monterail', code: 'pl' }, { name: 'Open Source', code: 'os' }],
      taggingSelected: [],
      searchable: true,
      placeholder: 'Select props',
      countries: [],
      selectedCountries: [],
      actions: ['alert', 'console.log', 'scrollTop'],
      action: null,
      isTouched: false,
      exampleValue6: [],
      isLoading: false,
      isNavSticky: false,
      firstColor: Math.floor(Math.random() * 255),
      secondColor: Math.floor(Math.random() * 255)
    }
  },
  computed: {
    gradient () {
      return {
        background: `linear-gradient(to left bottom, hsl(${this.firstColor + SL}) 0%, hsl(${this.secondColor + SL}) 100%)`
      }
    },
    isInvalid () {
      return this.isTouched && this.exampleValue6.length === 0
    }
  },
  methods: {
    asyncFind (query) {
      if (query.length === 0) {
        this.countries = []
      } else {
        this.isLoading = true
        setTimeout(() => {
          this.countries = countries.filter((element, index, array) => {
            return element.name.toLowerCase().includes(query.toLowerCase())
          })
          this.isLoading = false
        }, 1000)
      }
    },
    asyncUpdate (newVal) {
      this.selectedCountries = newVal
    },
    afterChange (selectValue) {
      this.value = selectValue
    },
    onTagging (newTag) {
      this.source.push({ name: newTag, language: newTag })
      this.value.push({ name: newTag, language: newTag })
    },
    onClose (val) {
      console.log('close: ', val)
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
      }
      this.taggingOptions.push(tag)
      this.taggingSelected.push(tag)
    },
    updateSelectedTagging (value) {
      console.log('@tag: ', value)
      this.taggingSelected = value
    },
    dispatchAction (actionName) {
      switch (actionName) {
        case 'alert':
          window.alert('You just dispatched "alert" action!')
          break
        case 'console.log':
          console.log('You just dispatched "console.log" action!')
          break
        case 'scrollTop':
          window.scrollTo(0, 0)
          break
      }
    },
    updateExampleValue (value) {
      console.log('@update: ', value)
      this.exampleValue6 = value
    },
    onTouch () {
      this.isTouched = true
    },
    updateValue (value) {
      console.log('@update: ', value)
      this.value = value
    },
    updateMultiValue (value) {
      console.log('@update: ', value)
      this.multiValue = value
    },
    updateValuePrimitive (value) {
      console.log('@update: ', value)
      this.valuePrimitive = value
    },
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    },
    onSelect (option) {
      console.log('@select: ', option)
    },
    onRemove (option) {
      console.log('@remove: ', option)
    },
    adjustNav () {
      this.isNavSticky = window.scrollY > window.innerHeight
    }
    // calculateNavPositions () {
    //   /*eslint-disable */
    //   for (let position of this.navPositions) {
    //     const elem = document.getElementById(position[0])
    //     if (elem) position[1] = elem.offsetTop - 200
    //   }
    //   this.navPositions = this.navPositions.sort((a, b) => a[1] - b[1])
    //   /*eslint-enable */
    // }
  },
  mounted () {
    this.adjustNav()
    window.addEventListener('scroll', throttle(this.adjustNav, 50))
  }
}
</script>

<style lang="sass">
  @import "./docs.scss"
</style>
