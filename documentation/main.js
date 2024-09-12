import {createApp, h} from 'vue'
import Multiselect from '../src/index'
import App from './src/App.vue'
import {createStore} from 'vuex'
import { setCDN, getHighlighter } from 'shiki'
setCDN('shiki/')
import './docs.scss'

const store = createStore({
  state () {
    return {
      value: 'Vuex',
      options: ['Vuex', 'Vue', 'Vuelidate', 'Vue-Multiselect', 'Vue-Router']
    }
  },
  mutations: {
    updateValue (state, value) {
      state.value = value
    }
  },
  actions: {
    updateValueAction ({ commit }, value) {
      commit('updateValue', value)
    }
  }
})
// import 'highlight.js/styles/intellij-light.css'
// import hljsVuePlugin from '@highlightjs/vue-plugin'

const app = createApp({
  render: () => h(App),
  data () {
    return {
      markupLangs: ['html'],
      markupLanguage: 'html',
      isNavSticky: false,
      currentPosition: ''
    }
  },
  methods: {
    selectLanguage (lang) {
      this.markupLanguage = lang
    },
    onTagging (newTag) {
      this.source.push({ name: newTag, language: newTag })
      this.value.push({ name: newTag, language: newTag })
    }
  }
}).component('multiselect', Multiselect).use(store)

getHighlighter({
  theme: 'github-light',
  langs: ['javascript', 'html', 'bash']
}).then(highlighter => {
  app.config.globalProperties.highlighter = highlighter
  app.mount('#app')
})

