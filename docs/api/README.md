---
sidebar: auto
---

# API

## Props

### id
- type: `Integer | String`
- default:

ed to identify the component in events.


### options
- type: `Array`
- default:

Array of available options: Objects, Strings or Integers. If array of objects, visible label will default to option.label.


### value
- type: `Object | Array | String | Integer`
- default:

Presets the selected options.


### multiple
- type: `Boolean`
- default: `false`

Allow for multiple selections.


### trackBy
- type: `String`
- default:

Used to compare objects.
    strong  Only use if options are objects.


### label
- type: `String`
- default:

Label from option Object, that will be visible in the dropdown.


### searchable
- type: `Boolean`
- default: `true`

Add / removes search input.


### clearOnSelect
- type: `Boolean`
- default: `true`

Clear the search input after `select()`. Use only when multiple is true.


### hideSelected
- type: `Boolean`
- default: `false`

Hide already selected options


### placeholder
- type: `String`
- default: `'Select option'`

Equivalent to the `placeholder` attribute on a `<select>` input.


### allowEmpty
- type: `Boolean`
- default: `true`

Allows to remove all selected values. Otherwise one must be left selected.


### resetAfter
- type: `Boolean`
- default: `false`

Reset <kbd>this.value</kbd>, <kbd>this.search</kbd>, <kbd>this.selected</kbd> after <kbd>this.value</kbd> changes.


### closeOnSelect
- type: `Boolean`
- default: `true`

Enable/disable closing after selecting an option


### customLabel
- type: `Function => String`
- default:

Function used to create a custom label


### taggable
- type: `Boolean`
- default: `false`

Disable / Enable tagging


### tagPlaceholder
- type: `String`
- default: `'Press enter to create a tag'`

String to show when highlighting a potential tag


### max
- type: `Number`
- default:

Number of allowed selected options.


### optionsLimit
- type: `Number`
- default: `1000`

Limits the options displayed in the dropdown to the first X options.


### groupValues
- type: `String`
- default:

Name of the property containing the group values


### groupLabel
- type: `String`
- default:

Name of the property containing the group label


### groupSelect
- type: `Boolean`
- default: `false`

Allow to select all group values by selecting the group label


### blockKeys
- type: `Array`
- default: `[]`

Array of keyboard key aliases to block when selecting


### internalSearch
- type: `Boolean`
- default: `true`

Decide whether to filter the results internally based on search query.
Useful for async filtering, where we search through more complex data.


### preserveSearch
- type: `Boolean`
- default: `false`

If set to true, will preserve the search query when opening/closing the component.


### preselectFirst
- type: `Boolean`
- default: `false`

Selects the first option if initial value is empty


## Events
