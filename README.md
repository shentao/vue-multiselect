# vue-multiselect ![Build Status](https://circleci.com/gh/monterail/vue-multiselect/tree/master.svg?style=shield&circle-token=5c931ff28fd12587610f835472becdd514d09cef)![No Dependencies](https://img.shields.io/gemnasium/monterail/vue-multiselect.svg?style=flat)![Current Release](https://img.shields.io/github/release/monterail/vue-multiselect.svg?style=flat)![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)

The most complete *selecting* solution for Vue.js, without jQuery.

#### Current version: 1.1.4

#### For Vue 2.0 users:
Vue-multiselect 2.0-beta is available: `npm install vue-multiselect@next`.
API changes:
* Instead of Vue.partial for custom option templates you can use a custom render function.
* The `:key` props has changed to `:track-by`, due to conflicts with Vue 2.0.
* Added support for `v-model`
* `@update` has changed to `@input` to also work with v-model
* `:selected` has changed to `:value` for the same reason

### Features & characteristics:
* NO dependencies
* Single select
* Multiple select
* Tagging
* Custom option templates (1.1.0+)
* Dropdowns
* Filtering
* Search with suggestions
* Logic split into mixins
* Basic component and support for custom components
* Vuex support
* Async options support
* \> 99% test coverage
* Fully configurable (see props list below)

## Demo & docs

[http://monterail.github.io/vue-multiselect/](http://monterail.github.io/vue-multiselect/)

## Install & basic usage

``` bash
npm install vue-multiselect
```

``` html
<template>
  <div>
    <multiselect
      :selected="selected"
      :options="options"
      @update="updateSelected">
    </multiselect>
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
  },
  methods: {
    updateSelected (newSelected) {
      this.selected = newSelected
    }
  }
}
```

You can now author custom components based on *vue-multiselect* mixins.

``` javascript
import { multiselectMixin, pointerMixin } from 'vue-multiselect'
export default {
  mixins: [multiselectMixin, pointerMixin],
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options']
    }
  }
}
```

## Roadmap:

* Grouping
* Examples of custom components / templates ready to use in project

## Examples
in jade-lang/pug-lang

### Single select / dropdown
``` jade
multiselect(
  :options="source",
  :selected="value",
  :searchable="false",
  :close-on-select="false",
  :allow-empty="false",
  @update="updateSelected",
  label="name",
  placeholder="Select one",
  key="name"
)
```

### Single select with search
``` jade
multiselect(
  :options="source",
  :selected="value",
  :close-on-select="true",
  @update="updateValue",
  placeholder="Select one",
  label="name",
  key="name"
)
```

### Multiple select with search
```jade
multiselect(
  :options="source",
  :selected="multiValue",
  :multiple="true",
  :close-on-select="true",
  @update="updateMultiValue",
  placeholder="Pick some",
  label="name",
  key="name"
)
```

### Tagging
with `@tag` event
```jade
multiselect(
  :options="taggingOptions",
  :selected="taggingSelected",
  :multiple="true",
  :taggable="true",
  @tag="addTag",
  @update="updateSelectedTagging",
  tag-placeholder="Add this as new tag",
  placeholder="Type to search or add tag",
  label="name",
  key="code"
)
```

```javascript
addTag (newTag) {
  const tag = {
    name: newTag,
    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
  }
  this.taggingOptions.push(tag)
  this.taggingSelected.push(tag)
},
```

### Custom option template
Using partial API
```jade
multiselect(
  :options="styleList",
  :selected="selectedStyle",
  :option-height="130",
  :custom-label="styleLabel",
  @update="updateSelectedStyle",
  option-partial="customOptionPartial"
  placeholder="Fav No Man’s Sky path"
  label="title"
  key="title"
)
```

``` javascript
import customOptionPartial from './partials/customOptionPartial.html'
Vue.partial('customOptionPartial', customOptionPartial)

// ...Inside Vue component
methods: {
  styleLabel ({ title, desc }) {
    return `${title} – ${desc}`
  },
  updateSelectedStyle (style) {
    this.selectedStyle = style
  }
}
```

``` html
<div>
  <img class="option__image" :src="option.img" alt="No Man’s Sky" />
  <div class="option__desc">
    <span class="option__title">{{ option.title }}</span>
    <span class="option__small">
      {{ option.desc }}
    </span>
  </div>
</div>

```

### Asynchronous dropdown
``` jade
multiselect(
  :options="countries",
  :selected="selectedCountries",
  :multiple="multiple",
  :searchable="searchable",
  @search-change="asyncFind",
  placeholder="Type to search",
  label="name"
  key="code"
)
  span(slot="noResult").
    Oops! No elements found. Consider changing the search query.
```

```javascript
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
   * @type {Array}
   */
  options: {
    type: Array,
    required: true
  },
  /**
   * Equivalent to the `multiple` attribute on a `<select>` input.
   * @default false
   * @type {Boolean}
   */
  multiple: {
    type: Boolean,
    default: false
  },
  /**
   * Presets the selected options value.
   * @type {Object||Array||String||Integer}
   */
  selected: {},
  /**
   * Key to compare objects.
   * @type {String}
   */
  key: {
    type: String,
    default: false
  },
  /**
   * Label to look for in option Object
   * @type {String}
   */
  label: {
    type: String,
    default: false
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
   * Equivalent to the `placeholder` attribute on a `<select>` input.
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
  },
  /**
   * Function to interpolate the custom label
   * @default false
   * @type {Function}
   */
  customLabel: {
    type: Function,
    default: false
  },
  /**
   * Disable / Enable tagging
   * @default false
   * @type {Boolean}
   */
  taggable: {
    type: Boolean,
    default: false
  },
  /**
   * String to show when highlighting a potential tag
   * @default 'Press enter to create a tag'
   * @type {String}
  */
  tagPlaceholder: {
    type: String,
    default: 'Press enter to create a tag'
  },
  /**
   * Number of allowed selected options. No limit if false.
   * @default False
   * @type {Number}
  */
  max: {
    type: Number,
    default: false
  },
  /**
   * Will be passed with all events as second param.
   * Useful for identifying events origin.
   * @default null
   * @type {String|Integer}
  */
  id: {
    default: null
  },
  /**
   * Limits the options displayed in the dropdown
   * to the first X options.
   * @default 1000
   * @type {Integer}
  */
  optionsLimit: {
    type: Number,
    default: 1000
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
},

// Multiselect.vue

props: {
  /**
   * String to show when pointing to an option
   * @default 'Press enter to select'
   * @type {String}
   */
  selectLabel: {
    type: String,
    default: 'Press enter to select'
  },
  /**
   * String to show next to selected option
   * @default 'Selected'
   * @type {String}
  */
  selectedLabel: {
    type: String,
    default: 'Selected'
  },
  /**
   * String to show when pointing to an alredy selected option
   * @default 'Press enter to remove'
   * @type {String}
  */
  deselectLabel: {
    type: String,
    default: 'Press enter to remove'
  },
  /**
   * Decide whether to show pointer labels
   * @default true
   * @type {Boolean}
  */
  showLabels: {
    type: Boolean,
    default: true
  },
  /**
   * Limit the display of selected options. The rest will be hidden within the limitText string.
   * @default 'label'
   * @type {String}
   */
  limit: {
    type: Number,
    default: 99999
  },
  /**
   * Function that process the message shown when selected
   * elements pass the defined limit.
   * @default 'and * more'
   * @param {Int} count Number of elements more than limit
   * @type {Function}
   */
  limitText: {
    type: Function,
    default: count => `and ${count} more`
  },
  /**
   * Set true to trigger the loading spinner.
   * @default False
   * @type {Boolean}
  */
  loading: {
    type: Boolean,
    default: false
  },
  /**
   * Disables the multiselect if true.
   * @default false
   * @type {Boolean}
  */
  disabled: {
    type: Boolean,
    default: false
  }
}
```

## Contributing

``` bash
# serve with hot reload at localhost:8080
npm run dev

# lib distribution build with minification
npm run bundle

# build the docs into gh-pages
npm run docs

# run unit tests
npm run test

# run unit tests watch
npm run unit-watch

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016 Damian Dulisz
