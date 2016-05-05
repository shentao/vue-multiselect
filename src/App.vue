<template>
  <div id="app">
    <h1><img class="logo" src="./assets/logo.png"> Vue-multiselect</h1>
    <multiselect
      :options="options"
      :selected="selected"
      :multiple="multiple"
      :searchable="searchable"
      :placeholder="placeholder"
      :hide-selected="true"
    >
      <li slot="beforeList">
        <a href="#" class="multiselect__option">Some action!</a>
      </li>
    </multiselect>

    <multiselect
      :options="countries"
      :selected="selectedCountries"
      :multiple="multiple"
      :searchable="searchable"
      :placeholder="placeholder"
      :on-search-change="asyncFind"
      label="name"
    >
      <span slot="noResult">
        Oops! No elements found. Consider changing the search query.
      </span>
    </multiselect>

    <h2>Config</h2>
    <label>
      <input type="checkbox" name="name" v-model="multiple"> Multiple
    </label>
    <label>
      <input type="checkbox" name="name" v-model="searchable"> Searchable
    </label>
    <label>Placeholder</label>
    <input type="text" name="name" v-model="placeholder">

    <multiselect
      :options="source"
      :selected="value"
      :multiple="false"
      :searchable="true"
      :placeholder="placeholder"
      label="name"
      :close-on-select="false"
    >
    </multiselect>

  </div>
</template>

<script>
import Multiselect from './components/Multiselect'
import countries from './data/countries.json'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      selected: [''],
      multiple: true,
      searchable: true,
      placeholder: 'Select props',
      source: [{ name: '1' }, { name: '2' }, { name: '3' }],
      value: { name: '1' },
      countries: [],
      selectedCountries: []
    }
  },
  methods: {
    asyncFind (query) {
      setTimeout(() => {
        this.countries = countries.filter((element, index, array) => {
          return element.name.toLowerCase().includes(query.toLowerCase())
        })
      }, 1500)
    }
  }
}
</script>

<style lang="scss">
$multiselect-height: 140px;
$multiselect-background: #000;

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fafafa;
  color: #35495E;
}

#app {
  margin-top: -100px;
  width: 450px;
  max-width: 500px;
  font-family: 'Lato', Helvetica, sans-serif;
  text-align: center;
}

#app {
  text-decoration: none;
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
