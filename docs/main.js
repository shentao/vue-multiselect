import Vue from 'vue'

import Multiselect from '../src/Multiselect'
import countries from './data/countries.json'

require('./docs.scss')

const SL = ', 100%, 87%'

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
      first: 230,
      second: 197,
      actions: ['alert', 'console.log', 'scrollTop'],
      action: null,
      isTouched: false,
      exampleValue6: []
    }
  },
  computed: {
    gradient () {
      // return 'linear-gradient(to left bottom, #C1C6FF 0%, #E7FFEB 100%) fixed'
      return `linear-gradient(to left bottom, hsl(${this.first + SL}) 0%, hsl(${this.second + SL}) 100%)`
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
        setTimeout(() => {
          this.countries = countries.filter((element, index, array) => {
            return element.name.toLowerCase().includes(query.toLowerCase())
          })
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
      console.log('@change: ', value)
      this.exampleValue6 = value
    },
    updateValue (value) {
      console.log('@change: ', value)
      this.value = value
    },
    updateMultiValue (value) {
      console.log('@change: ', value)
      this.multiValue = value
    },
    updateValuePrimitive (value) {
      console.log('@change: ', value)
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
    }
  }
})
