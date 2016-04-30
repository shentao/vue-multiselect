<template lang="jade">
  .multiselect(
    @focus="tryActivate()",
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.stop.prevent.self="addPointerElement('enter')"
    @keyup.esc="deactivate()"
    tabindex="0",
    @blur="tryDeactivate()",
    :class="{ 'multiselect--active': isOpen }"
  )
    .multiselect__select(@mousedown.prevent="toggle()")
    .multiselect__tags(v-el:tags)
      span.multiselect__tag(
        v-for="option in value"
        track-by="$index"
        v-if="multiple"
        onmousedown="event.preventDefault()"
      )
        | {{ getOptionLabel(option) }}
        i.multiselect__tag-icon(
          aria-hidden="true"
          tabindex="1"
          @keydown.enter.prevent="removeElement(option)"
          @mousedown.prevent="removeElement(option)"
        )
      .multiselect__spinner(v-show="loading" transition="multiselect__loading")
      input.multiselect__input(
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
      span.multiselect__single(v-if="!searchable && !multiple")
        | {{ getOptionLabel(value) ? getOptionLabel(value) : placeholder }}
    ul.multiselect__content(
      transition="multiselect",
      v-el:list,
      v-if="isOpen",
      :style="{ maxHeight: maxHeight + 'px' }"
    )
      li(
        v-for="option in filteredOptions"
        track-by="$index"
      )
        a.multiselect__option(
          tabindex="0"
          @mousedown.prevent="select(option)",
          :class="{ 'multiselect__option--highlight': $index === pointer && this.showLabels, 'multiselect__option--selected': isSelected(option) }"
          @mouseover="pointerSet($index)"
        )
          | {{ getOptionLabel(option) }}
      li(v-show="filteredOptions.length === 0")
        span.multiselect__option
          slot(name="noResult")
            | No elements found. Consider changing the search query.
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        isOpen: false,
        pointer: 0,
        value: [],
        loading: false
      }
    },
    props: {
      options: {
        type: Array,
        required: true,
        default () {
          return []
        }
      },
      multiple: {
        type: Boolean,
        default: false
      },
      selected: {
        required: true
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
      onSearchChange: {
        type: Function,
        default: false
      },
      touched: {
        type: Boolean,
        default: false
      },
      resetAfter: {
        type: Boolean,
        default: false
      },
      closeOnSelect: {
        type: Boolean,
        default: true
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
        if (this.resetAfter) {
          this.$set('value', null)
          this.$set('search', null)
          this.$set('selected', null)
        }
      },
      'search' () {
        if (this.onSearchChange) {
          this.onSearchChange(this.search)
          this.loading = true
        }
      },
      'options' () {
        if (this.onSearchChange) {
          this.loading = false
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
            this.removeElement(option)
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
          if (this.closeOnSelect) {
            this.$el.blur()
            if (this.searchable) {
              this.$els.search.blur()
            }
            this.deactivate()
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
        if (this.allowEmpty || this.value.length > 1) {
          this.value.$remove(option)
        }
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
        if (!this.isOpen) return
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
          this.removeElement(this.value[this.value.length - 1])
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

  $multiselect-height: 40px
  $multiselect-font: inherit
  $multiselect-font-size: 14px
  $multiselect-line-height: 16px
  $multiselect-font-weight: 300
  $multiselect-color: #41B883
  $multiselect-remove-color: #FF6A6A
  $multiselect-color-text: #35495E
  $multiselect-color-secondary: #F3F3F3
  $multiselect-background: #fff
  $multiselect-hover-bg: $multiselect-color
  $multiselect-border: #E8E8E8
  $multiselect-border-width: 1px
  $multiselect-border-radius: 5px
  $multiselect-padding: ($multiselect-height - $multiselect-line-height) / 2

  .multiselect__spinner
    @include spinner(16px, $multiselect-color)

    position: absolute
    right: 1px
    top: 1px
    width: 48px
    height: 35px
    background: $multiselect-background
    display: block

  .multiselect__loading-transition
    transition: opacity 0.4s ease-in-out
    opacity: 1

  .multiselect__loading-enter,
  .multiselect__loading-leave
    opacity: 0

  .multiselect,
  .multiselect__input,
  .multiselect__single
    font:
      family: $multiselect-font
      size: rem($multiselect-font-size)
      weight: $multiselect-font-weight

  .multiselect
    box-sizing: content-box

    *
      box-sizing: border-box

    display: block
    position: relative
    width: 100%
    min-height: rem($multiselect-height)
    text-align: left
    color: $multiselect-color-text

    &:focus
      outline: none

    &--active
      z-index: 50

      .multiselect__current,
      .multiselect__input,
      .multiselect__tags
        border-bottom-left-radius: 0
        border-bottom-right-radius: 0

      .multiselect__select
        transform: rotateZ(180deg)

  .multiselect__input,
  .multiselect__single
    position: relative
    display: inline-block
    min-height: rem(20px)
    line-height: rem(20px)
    border: none
    border-radius: $multiselect-border-radius
    background: $multiselect-background
    padding: 1px 0 0 0
    width: auto
    transition: border .1s ease
    box-sizing: border-box
    margin-bottom: rem(8px)

    &:hover
      border-color: darken($multiselect-border, 10%)

    &:focus
      border-color: darken($multiselect-border, 25%)
      outline: none

  .multiselect__single
    padding-left: rem(6px)
    margin-bottom: rem(8px)

  .multiselect__tags
    min-height: rem($multiselect-height)
    display: block
    padding: rem(8px 40px 0 8px)
    border-radius: $multiselect-border-radius
    border: 1px solid $multiselect-border
    background: $multiselect-background

  .multiselect__tag
    position: relative
    display: inline-block
    padding: rem(4px 26px 4px 10px)
    border-radius: $multiselect-border-radius
    margin-right: rem(10px)
    color: #fff
    line-height: 1
    background: $multiselect-color
    margin-bottom: rem(8px)

  .multiselect__tag-icon
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
    border-radius: $multiselect-border-radius

    &:after
      content: "\00D7"
      color: darken($multiselect-color, 20%)
      font-size: rem(14px)

    &:focus, &:hover
      background: darken($multiselect-color, 8%)

      &:after
        color: white

  .multiselect__current
    line-height: rem($multiselect-line-height)
    min-height: rem($multiselect-height)
    box-sizing: border-box
    display: block
    overflow: hidden
    padding: rem(8px $multiselect-padding 0)
    padding-right: 30px
    white-space: nowrap
    margin: 0
    text-decoration: none
    border-radius: $multiselect-border-radius
    border: 1px solid $multiselect-border
    cursor: pointer

  .multiselect__select
    line-height: rem(16px)
    display: block
    position: absolute
    box-sizing: border-box
    width: rem($multiselect-height)
    height: rem($multiselect-height - 2px)
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
      top: $multiselect-height / 2 - 8
      color: #999
      margin-top: rem(4px)
      border-style: solid
      border-width: 5px 5px 0 5px
      border-color: #999999 transparent transparent transparent
      content: ""

  .multiselect__placeholder
    color: #ADADAD
    display: inline-block
    margin-bottom: rem(10px)
    padding-top: rem(2px)

    .multiselect--active &
      display: none

  .multiselect__content
    position: absolute
    list-style: none
    display: block
    background: $multiselect-background
    width: 100%
    max-height: rem(200px + $multiselect-height)
    overflow: auto
    padding: 0
    margin: 0
    border: 1px solid $multiselect-border
    border-top: none
    border-bottom-left-radius: $multiselect-border-radius
    border-bottom-right-radius: $multiselect-border-radius
    z-index: 50

    &::webkit-scrollbar
      display: none

  .multiselect__option
    display: block
    padding: rem($multiselect-padding)
    min-height: rem($multiselect-height)
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
      line-height: rem($multiselect-height)
      padding-right: rem(12px)
      padding-left: rem(20px)

    &--highlight
      background: $multiselect-color
      outline: none
      color: white

      &:after
        content: "Press enter to add"
        color: white

    &--selected
      background: $multiselect-color-secondary
      color: $multiselect-color-text
      font-weight: bold

      &:after
        content: "Selected"
        font-weight: 300
        color: darken($multiselect-color-secondary, 20%)

  .multiselect__option--selected.multiselect__option--highlight
    background: $multiselect-remove-color
    color: #fff
    font-weight: $multiselect-font-weight

    &:after
      content: "Press enter to remove"
      color: #fff

  .multiselect--disabled
    background: darken($multiselect-background, 7%)
    pointer-events: none

    .multiselect__current,
    .multiselect__select
      background: darken($multiselect-background, 7%)
      color: darken($multiselect-background, 35%)

  .multiselect__option--disabled
    background: darken($multiselect-background, 7%)
    color: darken($multiselect-background, 35%)
    cursor: text
    pointer-events: none

    &:visited
      color: darken($multiselect-background, 35%)

    &:hover,
    &:focus
      background: darken($multiselect-hover-bg, 3%)

  .multiselect-transition
    transition: all .3s ease

  .multiselect-enter, .multiselect-leave
    opacity: 0
    max-height: 0 !important
</style>
