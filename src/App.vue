<template lang="jade">
  section.start
    .center-vertically
      h1
        img.logo(src="./assets/logo.png")
        | Vue-multiselect
      h2 The most complete select/multiselect/dropdown solution for Vue.js

      .grid__row
        .grid__column.grid__unit--md-4
          .multiselect-example__container
            multiselect(
            :options="options",
            :selected="selected",
            :multiple="multiple",
            :searchable="searchable",
            :placeholder="placeholder",
            :hide-selected="true",
            :on-change="afterChange",
            :show-labels="true"
            select-label="Enter to select"
            )
        .grid__column.grid__unit--md-4
          pre.language-json
            code
              {{ selected | json }}

  section.docs
    h1.typo__h1 Asynchronous dropdown
    .grid__row
      .grid__column.grid__unit--md-4
        label.typo__label Async multiselect
        multiselect(
          :options="countries",
          :selected="selectedCountries",
          :multiple="multiple",
          :searchable="searchable",
          placeholder="Type to search",
          :on-search-change="asyncFind",
          label="name"
        )
          span(slot="noResult").
            Oops! No elements found. Consider changing the search query.

      .grid__column.grid__unit--md-8
        pre.language-jade
          code.
            multiselect(
              :options="countries",
              :selected="selectedCountries",
              :multiple="multiple",
              :searchable="searchable",
              placeholder="Type to search",
              :on-search-change="asyncFind",
              label="name"
            )
              span(slot="noResult").
                Oops! No elements found. Consider changing the search query.

    h1.typo__h1 Simple select dropdown
    .grid__row
      .grid__column.grid__unit--md-4
        label.typo__label Simple select / dropdown
        multiselect(
          :options="source",
          :selected="value",
          :multiple="false",
          :searchable="false",
          placeholder="Select one",
          label="name",
          :close-on-select="false",
          key="name"
        )

      .grid__column.grid__unit--md-8
        pre.language-jade
          code.
            multiselect(
              :options="source",
              :selected="value",
              :multiple="false",
              :searchable="false",
              placeholder="Select one",
              label="name",
              :close-on-select="false",
              key="name"
            )

    h1.typo__h1 Single select with search
    .grid__row
      .grid__column.grid__unit--md-4
        label.typo__label Simple select / dropdown
        multiselect(
          :options="source",
          :selected="value",
          :multiple="false",
          :searchable="true",
          placeholder="Select one",
          label="name",
          :close-on-select="true"
        )

      .grid__column.grid__unit--md-8
        pre.language-jade
          code.
            multiselect(
              :options="source",
              :selected="value",
              :multiple="false",
              :searchable="false",
              placeholder="Select one",
              label="name",
              :close-on-select="false",
              key="name"
            )

    h1.typo__h1 Multiple select with search
    .grid__row
      .grid__column.grid__unit--md-4
        label.typo__label Simple select / dropdown
        multiselect(
          :options="source",
          :selected="multiValue",
          :multiple="true",
          :searchable="true",
          placeholder="Select one",
          label="name",
          :close-on-select="true"
        )

      .grid__column.grid__unit--md-8
        pre.language-jade
          code.
            multiselect(
              :options="source",
              :selected="multiValue",
              :multiple="false",
              :searchable="false",
              placeholder="Select one",
              label="name",
              :close-on-select="false",
              key="name"
            )

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
      selected: ['Select option'],
      source: [{ name: 'Vue.js' }, { name: 'Javascript' }, { name: 'Monterail' }, { name: 'Open Source' }],
      value: { name: 'Vue.js' },
      multiValue: [{ name: 'Vue.js' }],
      multiple: true,
      searchable: true,
      placeholder: 'Select props',
      countries: [],
      selectedCountries: []
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
  text-align: center;
  font-family: 'Lato', Helvetica, sans-serif;
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
