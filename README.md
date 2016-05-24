# vue-multiselect
Probably the most complete *selecting* solution for Vue.js, without jQuery.

### Features & characteristics:
* NO dependencies
* Single select
* Multiple select
* Dropdowns
* Filtering
* Search with suggestions
* Logic split into mixins
* Basic component and support for custom components
* Vuex support
* Async options support
* \> 90% test coverage
* Fully configurable (see props list below)

## Demo & docs

[IN PROGRESS]

## Install & basic usage

``` bash
npm install vue-multiselect
```

``` html
<template>
  <div>
    <multiselect :selected.sync="selected" :options="options"></multiselect>
  </div>
</template>
```

``` javascript
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
```

## Examples
in jade-lang/pug-lang

### Single select / dropdown
``` jade
multiselect(
  :options="source",
  :selected.sync="value",
  :multiple="false",
  :searchable="false",
  placeholder="Select one",
  label="name",
  :close-on-select="false",
  :allow-empty="false",
  key="name"
)
```

### Single select with search
``` jade
multiselect(
  :options="source",
  :selected.sync="value",
  :multiple="false",
  :searchable="true",
  placeholder="Select one",
  label="name",
  :close-on-select="true",
  :clear-on-select="false"
  key="name"
)
```

### Multiple select with search
``` jade
multiselect(
  :options="source",
  :selected.sync="multiValue",
  :multiple="true",
  :searchable="true",
  placeholder="Pick some",
  label="name",
  :close-on-select="true"
  key="name"
)
```

### Vuex supporting example
with `:on-change` callback function

``` jade
multiselect(
  :options="source",
  :selected="value",
  :multiple="false",
  :searchable="false",
  placeholder="Select one",
  :on-change="onChangeAction"
)
```

``` javascript
methods: {
  onChangeAction (newValue) {
    dispatch('SET_SELECT_VALUE', newValue)
  }
}
```

### Asynchronous dropdown
``` jade
multiselect(
  :options="countries",
  :selected.sync="selectedCountries",
  :multiple="multiple",
  :searchable="searchable",
  placeholder="Type to search",
  :on-search-change="asyncFind",
  label="name"
  key="code"
)
  span(slot="noResult").
    Oops! No elements found. Consider changing the search query.
```

``` javascript
methods: {
  asyncFind (query) {
    this.countries = findService(query)
  }
}
```

## Props config

``` javascript
// multiselectMixin.js

props: {
  /**
   * Array of available options: Objects, Strings or Integers.
   * If array of objects, visible label will default to option.label.
   * If `labal` prop is passed, label will equal option['label']
   * @type {Array}
   */
  options: {
    type: Array,
    required: true,
    /* istanbul ignore next  */
    default () {
      return []
    }
  },
  /**
   * Equivalent to the `multiple` attribute on a select input.
   * @default false
   * @type {Boolean}
   */
  multiple: {
    type: Boolean,
    default: false
  },
  /**
   * Required. Presets the selected options. Add `.sync` to
   * update parent value. If this.onChange callback is present,
   * this will not update. In that case, the parent is responsible
   * for updating this value.
   * @type {Object||Array||String||Integer}
   */
  selected: {
    required: true
  },
  /**
   * Key to compare objects
   * @default 'id'
   * @type {String}
   */
  key: {
    type: String,
    default: 'id'
  },
  /**
   * Label to look for in option Object
   * @default 'label'
   * @type {String}
   */
  label: {
    type: String,
    default: 'label'
  },
  /**
   * Label to look for in option Object
   * @default 'label'
   * @type {String}
   */
  limit: {
    type: Number,
    default: 99999
  },
  /**
   * Enable/disable search in options
   * @default true
   * @type {Boolean}
   */
  searchable: {
    type: Boolean,
    default: true
  },
  /**
   * Clear the search input after select()
   * @default true
   * @type {Boolean}
   */
  clearOnSelect: {
    type: Boolean,
    default: true
  },
  /**
   * Hide already selected options
   * @default false
   * @type {Boolean}
   */
  hideSelected: {
    type: Boolean,
    default: false
  },
  /**
   * Equivalent to the placeholder attribute on a select input.
   * @default 'Select option'
   * @type {String}
   */
  placeholder: {
    type: String,
    default: 'Select option'
  },
  /**
   * Sets maxHeight style value of the dropdown
   * @default 300
   * @type {Integer}
   */
  maxHeight: {
    type: Number,
    default: 300
  },
  /**
   * Allow to remove all selected values
   * @default true
   * @type {Boolean}
   */
  allowEmpty: {
    type: Boolean,
    default: true
  },
  /**
   * Callback function to call after this.value changes
   * @callback onChange
   * @default false
   * @param {Array||Object||String||Integer} Current this.value
   * @param {Integer} $index of current selection
   * @type {Function}
   */
  onChange: {
    type: Function,
    default: false
  },
  /**
   * Callback function to call after this.search changes
   * @callback onSearchChange
   * @default false
   * @param {String} Pass current search String
   * @type {Function}
   */
  onSearchChange: {
    type: Function,
    default: false
  },
  /**
   * Value that indicates if the dropdown has been used.
   * Useful for validation.
   * @default false
   * @type {Boolean}
   */
  touched: {
    type: Boolean,
    default: false
  },
  /**
   * Reset this.value, this.search, this.selected after this.value changes.
   * Useful if want to create a stateless dropdown, that fires the this.onChange
   * callback function with different params.
   * @default false
   * @type {Boolean}
   */
  resetAfter: {
    type: Boolean,
    default: false
  },
  /**
   * Enable/disable closing after selecting an option
   * @default true
   * @type {Boolean}
   */
  closeOnSelect: {
    type: Boolean,
    default: true
  }
}

// pointerMixin.js

props: {
  /**
   * Enable/disable highlighting of the pointed value.
   * @type {Boolean}
   * @default true
   */
  showPointer: {
    type: Boolean,
    default: true
  }
}
```

## Contributing

``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run unit tests watch
npm run unit-watch

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
