<template>
  <div id="app">
    <section class="start">
      <div class="center-vertically">
        <h1><img class="logo" src="./assets/logo.png"> Vue-multiselect</h1>
        <h2>The most complete select/multiselect/dropdown solution for Vue.js</h2>

        <div class="multiselect-example__container">
          <multiselect
          :options="options"
          :selected="selected"
          :multiple="multiple"
          :searchable="searchable"
          :placeholder="placeholder"
          :hide-selected="true"
          :on-change="afterChange"
          :show-labels="true"
          >
        </multiselect>
      </div>
      </div>
    </section>

    <section class="docs">
      <h1 class="typo__h1">Asynchronous dropdown</h1>
      <div class="grid__row">
        <div class="grid__column grid__unit--md-4">
          <multiselect
          :options="countries"
          :selected="selectedCountries"
          :multiple="multiple"
          :searchable="searchable"
          placeholder="Type to search"
          :on-search-change="asyncFind"
          label="name"
          >
            <span slot="noResult">
              Oops! No elements found. Consider changing the search query.
            </span>
          </multiselect>
        </div>
        <div class="grid__column grid__unit--md-8">

        </div>
      </div>

      <h1 class="typo__h1">Simple select dropdown</h1>
      <div class="grid__row">
        <div class="grid__column grid__unit--md-4">
          <multiselect
            :options="source"
            :selected="value"
            :multiple="false"
            :searchable="false"
            :placeholder="placeholder"
            label="name"
            :close-on-select="false"
            :show-pointer="false"
          >
          </multiselect>
        </div>
        <div class="grid__column grid__unit--md-8">
          <pre class="language-html">
            <code>
              <multiselect
                :options="source"
                :selected="value"
                :multiple="false"
                :searchable="false"
                :placeholder="placeholder"
                label="name"
                :close-on-select="false"
                :show-pointer="false"
              >
              </multiselect>
            </code>
          </pre>
        </div>
      </div>

      <h2>Config</h2>
      <label>
        <input type="checkbox" name="name" v-model="multiple"> Multiple
      </label>
      <label>
        <input type="checkbox" name="name" v-model="searchable"> Searchable
      </label>
      <label>Placeholder</label>
      <input type="text" name="name" v-model="placeholder">
    </section>

  </div>
</template>

<script>
import Multiselect from './components/Multiselect'
import countries from './data/countries.json'
import prism from './prism'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      selected: ['Select option'],
      multiple: true,
      searchable: true,
      placeholder: 'Select props',
      source: [{ name: '1' }, { name: '2' }, { name: '3' }],
      value: { name: '1' },
      countries: [],
      selectedCountries: []
    }
  },
  ready () {
    prism()
  },
  methods: {
    asyncFind (query) {
      setTimeout(() => {
        this.countries = countries.filter((element, index, array) => {
          return element.name.toLowerCase().includes(query.toLowerCase())
        })
      }, 1500)
    },
    afterChange (selectValue) {
      this.selected = selectValue
    }
  }
}
</script>

<style lang="scss">
@import './assets/main';
@import './assets/prism';

$multiselect-height: 140px;
$multiselect-background: #000;

html {
  height: 100%;
}

body {
  height: 100%;
  background: #fafafa;
  color: #35495E;
}

#app {
  font-family: 'Lato', Helvetica, sans-serif;
  text-align: center;
}

#app {
  text-decoration: none;
}

.start {
  min-height: 100vh;
  display: block;
}

.center-vertically {
  position: absolute;
  height: 400px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.multiselect-example__container {
  max-width: 400px;
  margin: 0 auto 60px;
}

h1 {
  font-size: 48px;
  vertical-align: middle;
  line-height: 40px;
}

.logo {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
}
</style>
