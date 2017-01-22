import Vue from 'vue'

import Multiselect from '../src/Multiselect'
import countries from './data/countries.json'
import customOptionPartial from './partials/customOptionPartial.html'

Vue.partial('customOptionPartial', customOptionPartial)

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

require('./docs.scss')

/* eslint-disable no-new */
new Vue({
  el: 'body',
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
      actions: ['alert', 'console.log', 'scrollTop'],
      action: null,
      isTouched: false,
      exampleValue6: [],
      isLoading: false,
      isNavSticky: false,
      firstColor: Math.floor(Math.random() * 255),
      secondColor: Math.floor(Math.random() * 255),
      styleList: [
        { title: 'Space Pirate', desc: 'More space battles!', img: 'static/posters/fleet.png' },
        { title: 'Merchant', desc: 'PROFIT!', img: 'static/posters/trading_post.png' },
        { title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' },
        { title: 'Miner', desc: 'We need to go deeper!', img: 'static/posters/resource_lab.png' }
      ],
      selectedStyle: { title: 'Explorer', desc: 'Discovering new species!', img: 'static/posters/creatures.png' }
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
      this.selected = selectValue
    },
    onTagging (newTag) {
      this.options.push(newTag)
      this.selected.push(newTag)
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
    updateSelectedStyle (style) {
      this.selectedStyle = style
    },
    nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    },
    styleLabel ({ title, desc }) {
      return `${title} – ${desc}`
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
  ready () {
    this.adjustNav()
    window.addEventListener('scroll', throttle(this.adjustNav, 50))
  }
})
