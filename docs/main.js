import Vue from 'vue/dist/vue.js'

require('./docs.scss')

import countries from './data/countries.json'
import Multiselect from '../src/Multiselect'

let moreCountries = []
for (var i = 0; i < 100; i++) {
  moreCountries = moreCountries.concat(countries)
}
console.log(moreCountries.length)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    Multiselect
  },
  data () {
    return {
      groups: [
        {
          groupLabel: 'grupa 1',
          values: ['1', '1a', '1b']
        },
        {
          groupLabel: 'grupa 2',
          values: ['2', '2a', '2b']
        }
      ],
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      selected: ['Select option'],
      source: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ],
      value: [{ name: 'Vue.js', language: 'JavaScript' }],
      valueSearch: { name: 'Vue.js', language: 'JavaScript' },
      valueObject: { name: 'Vue.js', language: 'JavaScript' },
      valuePrimitive: 'showLabels',
      multiValue: [{ name: 'Vue.js', language: 'JavaScript' }],
      multiple: true,
      taggingOptions: [{ name: 'Vue.js', code: 'vu' }, { name: 'Javascript', code: 'js' }, { name: 'Monterail', code: 'pl' }, { name: 'Open Source', code: 'os' }],
      taggingSelected: [],
      searchable: true,
      placeholder: 'Select props',
      countries: moreCountries,
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
      this.countries = moreCountries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))
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
    onTouch () {
      this.isTouched = true
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
})
