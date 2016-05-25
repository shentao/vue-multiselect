<template lang="jade">
div
  section.start
    .center-vertically
      h1
        img.logo(src="./assets/logo.png")
        | Vue-multiselect
      h2 The most complete selecting solution for
        = ' '
        a.typo__link(href="http://vuejs.org" target="_BLANK") Vue.js

      .grid__row.grid__row--centered
        .grid__column.grid__unit--md-6
          .multiselect-example__container
            multiselect(
              :options="options",
              :selected="selected",
              :multiple="multiple",
              :searchable="searchable",
              :placeholder="placeholder",
              :on-change="afterChange",
              :show-labels="true",
              :limit="3"
              select-label="Enter to select"
            )
            .grid__row
              .grid__column.grid__unit--md-6.list
                ul.list__ul
                  li.typo__li Single select
                  li.typo__li Multiple select
                  li.typo__li Dropdowns
                  li.typo__li Search
                  li.typo__li Mixins
                  li.typo__li Custom components
              .grid__column.grid__unit--md-6.list
                ul.list__ul
                  li.typo__li Vuex support
                  li.typo__li Async options
                  li.typo__li Fully tested
                  li.typo__li Fully configurable
                  li.typo__li No dependencies
                  li.typo__li And more...

      .grid__row.grid__row--centered
        .grid__column.grid__unit--md-6.utils--center
          .button__group
            a.button.button--secondary.button--large(href="https://github.com/monterail/vue-multiselect" target="_BLANK") View project on Github
            a.button.button--large(href="#getting-started") Getting started & examples

  .grid__row
    .grid__column
      section.docs#getting-started
        h1.typo__h1 Getting started
        hr.typo__hr

        .grid__row
          .grid__column.grid__unit--md-6
            h2.typo__h2 Installation
            pre.language-bash
              code.
                npm install vue-multiselect --save

            h2.typo__h2 Package content
            p.typo__p
              | The package consist of of multiple files:
              strong  Multiselect.vue
              |  which includes the template and styling of the default component. This component extends 2 additional mixins:
              strong  multiselectMixin.js
              |  and
              strong  pointerMixin.js
              |  , which contain the logic behind the multiselect. This way you can actually use the multiselect logic with your own template and styling.
          .grid__column.grid__unit--md-6
            h2.typo__h2 Basic usage
            pre.language-jade
              code.
                multiselect(
                  :selected.sync="selected",
                  :options="options"
                )
            pre.language-javascript
              code.
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

  .grid__row
    .grid__column
      section.docs
        h1.typo__h1 Examples
        hr.typo__hr
        h2.typo__h2 Single select dropdown (primitive value)
        p.typo__p Disabled all highlight label text.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Single select / dropdown
            multiselect(
              :options="options",
              :selected.sync="valuePrimitive",
              :multiple="false",
              :searchable="false",
              :close-on-select="false",
              :show-labels="false"
              placeholder="Select one"
              label="name"
              key="name"
            )
            pre.language-json
              code.
                {{ valuePrimitive | json }}

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="options",
                  :selected.sync="valuePrimitive",
                  :multiple="false",
                  :searchable="false",
                  :close-on-select="false",
                  :show-labels="false"
                  placeholder="Select one"
                  label="name"
                  key="name"
                )

        h2.typo__h2 Single select dropdown (object)
        p.typo__p Can’t become empty. Showing custom deselect label.
        p.typo__p The selected value is referencing the same object as the next example, to show that dynamic preselection works.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Single select / dropdown
            multiselect(
              :options="source",
              :selected.sync="value",
              :multiple="false",
              :searchable="false",
              :close-on-select="false",
              :allow-empty="false",
              deselect-label="Can’t remove this value"
              key="name"
              label="name"
              placeholder="Select one"
            )
            pre.language-json
              code.
                {{ value | json }}

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="source",
                  :selected.sync="value",
                  :multiple="false",
                  :searchable="false",
                  :close-on-select="false",
                  :allow-empty="false",
                  deselect-label="Can’t remove this value"
                  key="name"
                  label="name"
                  placeholder="Select one"
                )

        hr.typo__hr
        h2.typo__h2 Single select with search
        p.typo__p The selected value is referencing the same object as the previous example, to show that dynamic preselection works.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Simple select / dropdown
            multiselect(
              :options="source",
              :selected.sync="value",
              :multiple="false",
              :searchable="true",
              placeholder="Select one",
              label="name",
              key="name"
            )
            pre.language-json
              code.
                {{ value | json }}

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="source",
                  :selected.sync="value",
                  :multiple="false",
                  :searchable="true",
                  placeholder="Select one",
                  label="name",
                  key="name"
                )

        hr.typo__hr
        h2.typo__h2 Multiple select with search
        p.typo__p Limit visible results to 2.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Simple select / dropdown
            multiselect(
              :options="source",
              :selected.sync="multiValue",
              :multiple="true",
              :searchable="true",
              :close-on-select="true",
              :clear-on-select="false",
              :limit="2"
              placeholder="Pick some"
              label="name",
              key="name"
            )
            pre.language-json
              code.
                {{ multiValue | json }}

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="source",
                  :selected.sync="multiValue",
                  :multiple="true",
                  :searchable="true",
                  :close-on-select="true",
                  :clear-on-select="false",
                  placeholder="Pick some"
                  label="name",
                  key="name"
                )

        hr.typo__hr
        h2.typo__h2 Asynchronous dropdown
        p.typo__p
          | Changing the search query calls the <kbd><code>:on-search-change=""</code></kbd> callback function,
          | passing the search query as param. It also sets the <kbd><code>loading = true</code></kbd>.
        p.typo__p
          | To disable <kbd><code>loading</code></kbd> options have to be updated.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Async multiselect
            multiselect(
              :options="countries",
              :selected.sync="selectedCountries",
              :multiple="multiple",
              :searchable="searchable",
              placeholder="Type to search",
              :on-search-change="asyncFind",
              :clear-on-select="false",
              label="name"
              key="code"
            )
              span(slot="noResult").
                Oops! No elements found. Consider changing the search query.
            pre.language-json
              code.
                {{ selectedCountries | json }}

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="countries",
                  :selected.sync="selectedCountries",
                  :multiple="multiple",
                  :searchable="searchable",
                  placeholder="Type to search",
                  :on-search-change="asyncFind",
                  :clear-on-select="false",
                  label="name"
                  key="code"
                )
                  span(slot="noResult").
                    Oops! No elements found. Consider changing the search query.

        hr.typo__hr
        h2.typo__h2 on-change props
        p.typo__p
          | If set triggers the passed callback function after value changes, passing the new value as param.
        p.typo__p
          | For <strong>Vuex</strong> integration simply remove
          <kbd><code>:reset-after="true"</code></kbd>
          | prop.
        p.typo__p
          | May also act as dispatcher for different actions, like in this example.
        .grid__row
          .grid__column.grid__unit--md-5
            label.typo__label Open console to see logs.
            multiselect(
              :options="actions",
              :selected="action",
              :multiple="false",
              :searchable="false",
              placeholder="Pick action",
              :reset-after="true",
              :on-change="dispatchAction"
            )

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="actions",
                  :selected="action",
                  :multiple="false",
                  :searchable="false",
                  placeholder="Pick action",
                  :reset-after="true",
                  :on-change="dispatchAction"
                )

        hr.typo__hr

        h2.typo__h2 Custom configuration
        p.typo__p Can’t remove the last value.
        p.typo__p Hides already selected options.
        p.typo__p Shows error when touched, but nothing is selected.
        .grid__row
          .grid__column.grid__unit--md-5
            div(:class="{ 'invalid': isInvalid }")
              label.typo__label Must have at least one value
              multiselect(
                :options="options",
                :selected.sync="exampleValue6",
                :multiple="true",
                :searchable="true",
                :allow-empty="false",
                :hide-selected="true",
                :touched.sync="isTouched",
                :max-height="400"
                placeholder="Pick at least one"
              )

          .grid__column.grid__unit--md-7
            label.typo__label Code sample
            pre.language-jade
              code.
                multiselect(
                  :options="options",
                  :selected.sync="exampleValue6",
                  :multiple="true",
                  :searchable="true",
                  :allow-empty="false",
                  :hide-selected="true",
                  :touched.sync="isTouched",
                  :max-height="400"
                  placeholder="Pick at least one"
                )

        hr.typo__hr

      section.docs
        h1.typo__h1 Config
        hr.typo__hr
        h2.typo__h2 Props
        .grid__row
          .grid__column
            pre.language-javascript
              code.
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

      section.utils--center
        hr.typo__hr
        h4.typo__h4 Created by Damian Dulisz
          strong
            a.typo__link(href="https://twitter.com/DamianDulisz" target="_BLANK")  @DamianDulisz
        h4.typo__h4 With love from
          strong
            a.typo__link.monterail-link(href="http://monterail.com" target="_BLANK")  Monterail
        a(href="http://monterail.com" target="_BLANK")
          img.monterail-logo(src="/static/monterail-logo.png")
</template>

<script>
import Multiselect from './components/Multiselect'
import countries from './data/countries.json'

const SL = ', 100%, 87%'

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
      valuePrimitive: 'showLabels',
      multiValue: [{ name: 'Vue.js' }],
      multiple: true,
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
    }
  }
}
</script>

<style lang="scss">
@import './assets/main';
@import './assets/prism';

$multiselect-height: 140px;
$multiselect-background: #000;

.invalid {
  .typo__label {
    color: $error-color;
  }
  .multiselect__tags {
    border-color: $error-color !important;
  }

}

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
  background: linear-gradient(to left bottom, #C1C6FF 0%, #E7FFEB 100%) fixed;
}

.docs {
  text-align: left;
  padding-top: rem(60px)
}

.center-vertically {
  position: absolute;
  height: 600px;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.multiselect-example__container {
  margin: 0 auto 60px;
}

h1 {
  font-size: 48px;
  vertical-align: middle;
  line-height: 40px;
}

.button {
  margin-right: rem(20px)
}

.logo {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
}

.monterail-logo {
  width: 100px;
  height: 100px;
  margin-bottom: rem(30px)
}

.monterail-link {
  color: #D20C03
}
</style>
