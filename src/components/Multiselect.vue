<template lang="jade">
  .multiselect(
    tabindex="0",
    :class="{ 'multiselect--active': isOpen }"
    @focus="activate()"
    @blur="searchable ? false : deactivate()"
    @keydown.self.down.prevent="pointerForward()"
    @keydown.self.up.prevent="pointerBackward()"
    @keydown.enter.stop.prevent.self="addPointerElement()"
    @keyup.esc="deactivate()"
  )
    .multiselect__select(@mousedown.prevent="toggle()")
    .multiselect__tags(v-el:tags)
      span.multiselect__tag(
        v-if="multiple"
        v-for="option in visibleValue"
        track-by="$index"
        onmousedown="event.preventDefault()"
      )
        | {{ getOptionLabel(option) }}
        i.multiselect__tag-icon(
          aria-hidden="true"
          tabindex="1"
          @keydown.enter.prevent="removeElement(option)"
          @mousedown.prevent="removeElement(option)"
        )
      template(v-if="value.length > limit")
        strong and {{ value.length }} more
      .multiselect__spinner(v-show="loading" transition="multiselect__loading")
      input.multiselect__input(
        name="search"
        type="text"
        autocomplete="off",
        :placeholder="placeholder"
        v-el:search
        v-if="searchable"
        v-model="search"
        @focus.prevent="activate()"
        @blur.prevent="deactivate()"
        @input="pointerReset()"
        @keyup.esc="deactivate()"
        @keyup.down="pointerForward()"
        @keyup.up="pointerBackward()"
        @keydown.enter.stop.prevent.self="addPointerElement()"
        @keydown.delete="removeLastElement()"
      )
      span.multiselect__single(v-if="!searchable && !multiple")
        | {{ getOptionLabel(value) ? getOptionLabel(value) : placeholder }}
    ul.multiselect__content(
      transition="multiselect",
      :style="{ maxHeight: maxHeight + 'px' }"
      v-el:list
      v-show="isOpen"
    )
      slot(name="beforeList")
      li(
        v-for="option in filteredOptions"
        track-by="$index"
      )
        span.multiselect__option(
          tabindex="0",
          :class="{ 'multiselect__option--highlight': $index === pointer && this.showPointer, 'multiselect__option--selected': !isNotSelected(option) }"
          @mousedown.prevent="select(option)"
          @mouseover="pointerSet($index)",
          :data-select="selectLabel",
          :data-selected="selectedLabel",
          :data-deselect="deselectLabel"
        )
          | {{ getOptionLabel(option) }}
      li(v-show="filteredOptions.length === 0")
        span.multiselect__option
          slot(name="noResult")
            | No elements found. Consider changing the search query.
      slot(name="afterList")
</template>

<script>
  import multiselectMixin from '../mixins/multiselectMixin'
  import pointerMixin from '../mixins/pointerMixin'

  export default {
    mixins: [multiselectMixin, pointerMixin],
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
      }
    }
  }
</script>

<style lang="sass">
  @import '../assets/functions'

  $multiselect-height: 40px !default
  $multiselect-font: inherit !default
  $multiselect-font-size: 14px !default
  $multiselect-line-height: 16px !default
  $multiselect-font-weight: 300 !default
  $multiselect-color: #41B883 !default
  $multiselect-remove-color: #FF6A6A !default
  $multiselect-color-text: #35495E !default
  $multiselect-color-secondary: #F3F3F3 !default
  $multiselect-background: #fff !default
  $multiselect-hover-bg: $multiselect-color !default
  $multiselect-border: #E8E8E8 !default
  $multiselect-border-width: 1px !default
  $multiselect-border-radius: 5px !default
  $multiselect-padding: ($multiselect-height - $multiselect-line-height) / 2 !default

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
    padding: 1px 0 0 5px
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
      font-size: rem($multiselect-font-size)

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
    cursor: pointer

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
        content: attr(data-select)
        color: white

    &--selected
      background: $multiselect-color-secondary
      color: $multiselect-color-text
      font-weight: bold

      &:after
        content: attr(data-selected)
        font-weight: 300
        color: darken($multiselect-color-secondary, 20%)

  .multiselect__option--selected.multiselect__option--highlight
    background: $multiselect-remove-color
    color: #fff
    font-weight: $multiselect-font-weight

    &:after
      content: attr(data-deselect)
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
