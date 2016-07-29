import Vue from 'vue'

import Multiselect from '../src/Multiselect'
import countries from './data/countries.json'

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

require('./docs.scss')

/* eslint-disable no-new */
new Vue({
  render: h => h(Multiselect),
  data () {
    return {
      // TODO: Auto-Index
      options: [{index: 0, value: 'Select option'}, {index: 1, value: 'options'}, {index: 2, value: 'selected'}, {index: 3, value: 'mulitple'}, {index: 4, value: 'label'}, {index: 6, value: 'searchable'}, {index: 7, value: 'clearOnSelect'}, {index: 8, value: 'hideSelected'}, {index: 9, value: 'maxHeight'}, {index: 10, value: 'allowEmpty'}, {index: 11, value: 'showLabels'}, {index: 12, value: 'onChange'}, {index: 13, value: 'touched'}],
      selected: ['Select option'],
      source: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      value: { name: 'Vue.js', language: 'Javascript' },
      valuePrimitive: 'showLabels',
      multiValue: [{ name: 'Vue.js', language: 'Javascript' }],
      multiple: true,
      taggingOptions: [{ name: 'Vue.js', code: 'vu' }, { name: 'Javascript', code: 'js' }, { name: 'Monterail', code: 'pl' }, { name: 'Open Source', code: 'os' }],
      taggingSelected: [],
      searchable: true,
      placeholder: 'Select props',
      countries: [],
      selectedCountries: [],
      first: 230,
      second: 197,
      actions: ['alert', 'console.log', 'scrollTop'],
      action: null,
      isTouched: false,
      exampleValue6: [],
      isLoading: false,
      isNavSticky: false,
      navPositions: [
        ['getting-started', 0],
        ['select-primitive', 0],
        ['select-object', 0],
        ['select-search', 0],
        ['multiselect-search', 0],
        ['ajax', 0],
        ['tagging', 0],
        ['vuex', 0],
        ['custom', 0]
      ],
      scroll: 0
    }
  },
  computed: {
    isInvalid () {
      return this.isTouched && this.exampleValue6.length === 0
    },
    currentPosition () {
      for (let i = 1; i < this.navPositions.length - 1; i++) {
        if (this.scroll >= this.navPositions[i][1] && this.scroll < this.navPositions[i + 1][1]) {
          return this.navPositions[i - 1][0]
        }
      }
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
    afterChange (selectValue) {
      this.selected = selectValue
    },
    onTagging (newTag) {
      this.options.push(newTag)
      this.selected.push(newTag)
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
      console.log('adjust')
      this.scroll = window.scrollY
      console.log(this.scroll)
      console.log(this.currentPosition)
      this.isNavSticky = window.scrollY > window.innerHeight
    },
    calculateNavPositions () {
      /*eslint-disable */
      for (let position of this.navPositions) {
        const elem = document.getElementById(position[0])
        if (elem) position[1] = elem.offsetTop - 200
      }
      this.navPositions = this.navPositions.sort((a, b) => a[1] - b[1])
      /*eslint-enable */
    }
  },
  ready () {
    this.adjustNav()
    window.addEventListener('scroll', throttle(this.adjustNav, 50))
    this.calculateNavPositions()
  }
}).$mount('#app')
