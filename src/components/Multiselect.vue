<template lang="jade">
  .dropdown(
    @focus="tryActivate()",
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.stop.prevent.self="addPointerElement('enter')"
    @keyup.esc="deactivate()"
    tabindex="0",
    @blur="tryDeactivate()",
    :class="{ 'dropdown--active': isOpen }"
  )
    .dropdown__select(@mousedown.prevent="toggle()")
    .dropdown__tags(v-el:tags)
      span.dropdown__tag(
        v-for="option in value"
        track-by="$index"
        v-if="multiple"
        onmousedown="event.preventDefault()"
      )
        | {{ getOptionLabel(option) }}
        i.dropdown__tag-icon(
          aria-hidden="true"
          tabindex="1"
          @keydown.enter.prevent="removeElement(option)"
          @mousedown.prevent="removeElement(option)"
        )
      input.dropdown__input(
        name="search"
        type="search"
        autocomplete="off"
        v-el:search
        v-if="searchable"
        v-model="search",
        :placeholder="placeholder"
        @input="pointerReset()"
        @blur="deactivate()"
        @focus.prevent="activate()"
        @keyup.esc="deactivate()"
        @keyup.down="pointerForward()"
        @keyup.up="pointerBackward()"
        @keydown.enter.stop.prevent.self="addPointerElement('enter')"
        @keydown.delete="removeLastElement()"
      )
      span.dropdown__single(v-if="!searchable && !multiple")
        | {{ getOptionLabel(value) ? getOptionLabel(value) : placeholder }}
    ul.dropdown__content(
      transition="dropdown",
      v-el:list,
      v-if="isOpen",
      :style="{ maxHeight: maxHeight + 'px' }"
    )
      li(
        v-for="option in filteredOptions"
        track-by="$index"
      )
        a.dropdown__option(
          tabindex="0"
          @mousedown.prevent="select(option)",
          :class="{ 'dropdown__option--highlight': $index === pointer && this.showLabels, 'dropdown__option--selected': isSelected(option) }"
          @mouseover="pointerSet($index)"
        )
          | {{ getOptionLabel(option) }}
      li(v-show="filteredOptions.length === 0")
        span.dropdown__option No elements found. Consider changing the search query.
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        isOpen: false,
        pointer: 0,
        value: []
      }
    },
    props: {
      multiple: {
        type: Boolean,
        default: false
      },
      selected: {
        required: true
      },
      options: {
        type: Array,
        required: true,
        default: []
      },
      label: {
        type: String,
        default: 'value'
      },
      searchable: {
        type: Boolean,
        default: true
      },
      clearOnSelect: {
        type: Boolean,
        default: true
      },
      hideSelected: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: 'Select option'
      },
      maxHeight: {
        type: Number,
        default: 300
      },
      allowEmpty: {
        type: Boolean,
        default: true
      },
      showLabels: {
        type: Boolean,
        default: true
      },
      onChange: {
        type: Function,
        default: false
      },
      touched: {
        type: Boolean,
        default: false
      }
    },
    created: function () {
      if (!this.selected) {
        this.$set('value', this.multiple ? [] : null)
      } else {
        this.$set('value', JSON.parse(JSON.stringify(this.selected)))
      }
      if (this.searchable && !this.multiple) {
        this.search = this.getOptionLabel(this.value)
      }
    },
    computed: {
      filteredOptions () {
        let options = this.hideSelected
          ? this.options.filter(this.isNotSelected)
          : this.options
        return this.$options.filters.filterBy(options, this.search)
      }
    },
    watch: {
      'value' () {
        if (this.onChange) {
          this.onChange(this.value)
        } else {
          this.$set('selected', this.value)
        }
      }
    },
    methods: {
      isNotSelected (option) {
        return JSON.stringify(this.value).indexOf(JSON.stringify(option)) === -1
      },
      isSelected (option) {
        if (this.value && this.multiple) {
          return JSON.stringify(this.value).indexOf(JSON.stringify(option)) !== -1
        }
        return JSON.stringify(this.value) === JSON.stringify(option)
      },
      getOptionLabel (option) {
        if (typeof option === 'object' && option !== null) {
          if (this.label && option[this.label]) {
            return option[this.label]
          } else if (option.label) {
            return option.label
          }
        }
        return option
      },
      select (option) {
        if (this.multiple) {
          if (this.isSelected(option)) {
            if (this.allowEmpty) {
              this.value.$remove(option)
            }
          } else {
            this.value.push(option)
            if (this.clearOnSelect) { this.search = '' }
          }
        } else {
          if (this.isSelected(option)) {
            if (this.allowEmpty) {
              this.$set('value', null)
            }
          } else {
            this.$set('value', option)
          }
          this.$el.blur()
          if (this.searchable) {
            this.$els.search.blur()
          }
        }
      },
      toggle () {
        if (this.isOpen) {
          if (this.searchable) {
            this.$els.search.blur()
          } else {
            this.isOpen = false
          }
        } else {
          this.$el.focus()
        }
      },
      removeElement (option) {
        this.value.$remove(option)
      },
      tryActivate () {
        if (!this.isOpen) {
          this.activate()
        }
      },
      activate () {
        if (this.isOpen) { return }
        this.isOpen = true
        if (this.searchable) {
          this.search = ''
          this.$nextTick(function () {
            this.$els.search.focus()
          })
        }
      },
      tryDeactivate () {
        if (!this.searchable && this.isOpen) {
          this.deactivate()
        }
      },
      deactivate () {
        this.touched = true
        if (this.searchable) {
          this.multiple
            ? this.search = ''
            : this.search = this.getOptionLabel(this.value)
          this.$els.search.blur()
        }
        this.isOpen = false
      },
      removeLastElement () {
        if (this.search.length === 0 && Array.isArray(this.value)) {
          this.value.pop()
        }
      },
      addPointerElement () {
        if (this.filteredOptions.length > 0) {
          this.select(this.filteredOptions[this.pointer])
        }
        this.pointerReset()
      },
      pointerForward () {
        if (this.pointer < this.filteredOptions.length - 1) {
          this.pointer++
          let pointerPosition = this.pointer * 40
          let visibleElements = this.maxHeight / 40
          if (this.$els.list.scrollTop <= pointerPosition - visibleElements * 40) {
            this.$els.list.scrollTop = pointerPosition - (visibleElements - 1) * 40
          }
        }
      },
      pointerBackward () {
        if (this.pointer > 0) {
          this.pointer--
          let pointerPosition = this.pointer * 40
          if (this.$els.list.scrollTop >= pointerPosition) {
            this.$els.list.scrollTop = pointerPosition
          }
        }
      },
      pointerReset () {
        this.pointer = 0
        if (this.$els.list) {
          this.$els.list.scrollTop = 0
        }
      },
      pointerSet (index) {
        this.pointer = index
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../assets/functions'

  $dropdown-height: 40px
  $dropdown-font: inherit
  $dropdown-font-size: 14px
  $dropdown-line-height: 16px
  $dropdown-font-weight: 300
  $dropdown-color: #41B883
  $dropdown-remove-color: #FF6A6A
  $dropdown-color-text: #35495E
  $dropdown-color-secondary: #F3F3F3
  $dropdown-background: #fff
  $dropdown-hover-bg: $dropdown-color
  $dropdown-border: #E8E8E8
  $dropdown-border-width: 1px
  $dropdown-border-radius: 5px
  $dropdown-padding: ($dropdown-height - $dropdown-line-height) / 2

  .dropdown,
  .dropdown__input,
  .dropdown__single
    font:
      family: $dropdown-font
      size: rem($dropdown-font-size)
      weight: $dropdown-font-weight

  .dropdown
    box-sizing: content-box

    *
      box-sizing: border-box

    display: block
    position: relative
    width: 100%
    min-height: rem($dropdown-height)
    text-align: left
    color: $dropdown-color-text

    &:focus
      outline: none

    &--active
      z-index: 50

      .dropdown__current,
      .dropdown__input,
      .dropdown__tags
        border-bottom-left-radius: 0
        border-bottom-right-radius: 0

      .dropdown__select
        transform: rotateZ(180deg)

  .dropdown__input,
  .dropdown__single
    position: relative
    display: inline-block
    min-height: rem(20px)
    line-height: rem(20px)
    border: none
    border-radius: $dropdown-border-radius
    background: $dropdown-background
    padding: 1px 0 0 0
    width: auto
    transition: border .1s ease
    box-sizing: border-box
    margin-bottom: rem(8px)

    &:hover
      border-color: darken($dropdown-border, 10%)

    &:focus
      border-color: darken($dropdown-border, 25%)
      outline: none

  .dropdown__single
    padding-left: rem(6px)
    margin-bottom: rem(8px)

  .dropdown__tags
    min-height: rem($dropdown-height)
    display: block
    padding: rem(8px 40px 0 8px)
    border-radius: $dropdown-border-radius
    border: 1px solid $dropdown-border
    background: $dropdown-background

  .dropdown__tag
    position: relative
    display: inline-block
    padding: rem(4px 26px 4px 10px)
    border-radius: $dropdown-border-radius
    margin-right: rem(10px)
    color: #fff
    line-height: 1
    background: $dropdown-color
    margin-bottom: rem(8px)

  .dropdown__tag-icon
    cursor: pointer
    margin-left: 7px
    position: absolute
    right: 0
    top: 0
    bottom: 0
    font:
      weight: 700
      style: initial
    width: rem(22px)
    text-align: center
    line-height: rem(22px)
    transition: all 0.2s ease
    border-radius: $dropdown-border-radius

    &:after
      content: "\00D7"
      color: darken($dropdown-color, 20%)
      font-size: rem(14px)

    &:focus, &:hover
      background: darken($dropdown-color, 8%)

      &:after
        color: white

  .dropdown__current
    line-height: rem($dropdown-line-height)
    min-height: rem($dropdown-height)
    box-sizing: border-box
    display: block
    overflow: hidden
    padding: rem(8px $dropdown-padding 0)
    padding-right: 30px
    white-space: nowrap
    margin: 0
    text-decoration: none
    border-radius: $dropdown-border-radius
    border: 1px solid $dropdown-border
    cursor: pointer

  .dropdown__select
    line-height: rem(16px)
    display: block
    position: absolute
    box-sizing: border-box
    width: rem($dropdown-height)
    height: rem($dropdown-height - 2px)
    right: rem(1px)
    top: rem(1px)
    padding: rem(4px 8px)
    margin: 0
    text-decoration: none
    text-align: center
    cursor: pointer
    transition: transform 0.2s ease

    &:before
      position: absolute
      right: 15px
      top: $dropdown-height / 2 - 8
      color: #999
      margin-top: rem(4px)
      border-style: solid
      border-width: 5px 5px 0 5px
      border-color: #999999 transparent transparent transparent
      content: ""

  .dropdown__placeholder
    color: #ADADAD
    display: inline-block
    margin-bottom: rem(10px)
    padding-top: rem(2px)

    .dropdown--active &
      display: none

  .dropdown__content
    position: absolute
    list-style: none
    display: block
    background: $dropdown-background
    width: 100%
    max-height: rem(200px + $dropdown-height)
    overflow: auto
    padding: 0
    margin: 0
    border: 1px solid $dropdown-border
    border-top: none
    border-bottom-left-radius: $dropdown-border-radius
    border-bottom-right-radius: $dropdown-border-radius
    z-index: 50

    &::webkit-scrollbar
      display: none

  .dropdown__option
    display: block
    padding: rem($dropdown-padding)
    min-height: rem($dropdown-height)
    line-height: rem(16px)
    font-weight: 300
    text-decoration: none
    text-transform: none
    vertical-align: middle
    position: relative

    &:after
      top: 0
      right: 0
      position: absolute
      line-height: rem($dropdown-height)
      padding-right: rem(12px)
      padding-left: rem(20px)

    &--highlight
      background: $dropdown-color
      outline: none
      color: white

      &:after
        content: "Press enter to add"
        color: white

    &--selected
      background: $dropdown-color-secondary
      color: $dropdown-color-text
      font-weight: bold

      &:after
        content: "Selected"
        font-weight: 300
        color: darken($dropdown-color-secondary, 20%)

  .dropdown__option--selected.dropdown__option--highlight
    background: $dropdown-remove-color
    color: #fff
    font-weight: $dropdown-font-weight

    &:after
      content: "Press enter to remove"
      color: #fff

  .dropdown--disabled
    background: darken($dropdown-background, 7%)
    pointer-events: none

    .dropdown__current,
    .dropdown__select
      background: darken($dropdown-background, 7%)
      color: darken($dropdown-background, 35%)

  .dropdown__option--disabled
    background: darken($dropdown-background, 7%)
    color: darken($dropdown-background, 35%)
    cursor: text
    pointer-events: none

    &:visited
      color: darken($dropdown-background, 35%)

    &:hover,
    &:focus
      background: darken($dropdown-hover-bg, 3%)

  .dropdown-transition
    transition: all .3s ease

  .dropdown-enter, .dropdown-leave
    opacity: 0
    max-height: 0 !important
</style>
