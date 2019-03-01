import Vue from 'vue'
import * as examples from './partials/examples'
import LangSwitcher from './LangSwitcher'
import MultiselectExample from './MultiselectExample'
import Multiselect from 'vue-multiselect'
require('es6-promise').polyfill()

import './docs.scss'

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

const SL = ', 100%, 85%'
let sections

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    ...examples,
    MultiselectExample,
    LangSwitcher,
    Multiselect
  },
  data () {
    return {
      markupLangs: ['pug', 'html'],
      markupLanguage: 'pug',
      isNavSticky: false,
      firstColor: Math.floor(Math.random() * 255),
      secondColor: Math.floor(Math.random() * 255),
      currentPosition: '',
      versions: ['v1.x', 'v2.0'],
      version: 'v2.0'
    }
  },
  computed: {
    gradient () {
      return {
        background: `linear-gradient(to left bottom, hsl(${this.firstColor + SL}) 0%, hsl(${this.secondColor + SL}) 100%)`
      }
    }
  },
  methods: {
    pickVersion (version) {
      switch (version) {
        case 'v1.x':
          window.location.assign('v1/index.html')
          break
        case 'v2.0':
          window.location.assign('https://vue-multiselect.js.org/')
          break
      }
    },
    selectLanguage (lang) {
      this.markupLanguage = lang
    },
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
    onTagging (newTag) {
      this.source.push({ name: newTag, language: newTag })
      this.value.push({ name: newTag, language: newTag })
    }
  },
  mounted () {
    this.adjustNav()
    window.addEventListener('scroll', this.adjustNav)
    setTimeout(function () {
      calculateNavPositions()
    }, 1000)
  }
})
