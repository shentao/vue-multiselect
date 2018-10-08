<template>
  <MultiselectCore
    v-bind="$props"
    v-on="$listeners"
  >
    <div
      slot-scope="{
        activate,
        deactivate,
        handleKeydown,
        search,
        disabled,
        id,
        isOpen,
        placeholder,
        updateSearch,
        internalValue,
        filteredOptions,
        select,
        toggle,
        visibleValues,
        isSingleLabelVisible,
        singleValue,
        isPlaceholderVisible,
        currentOptionLabel,
        limit,
        limitText,
        getOptionLabel,
        removeElement,
        multiple,
        max,
        contentStyle,
        optimizedHeight,
        isAbove,
        pointerSet,
        showNoResults,
        pointerPosition,
        visibleElements,
        optionHeight,
        showPointer,
        pointer,
        computedPlaceholder,
        isFocused,
        focus,
        blur
      }"
      style="position: relative;"
    >
      <MultiselectWrapper
        v-bind="{
          activate,
          deactivate,
          handleKeydown,
          search,
          disabled,
          id,
          isOpen,
          placeholder,
          toggle,
          isFocused,
          focus,
          blur
        }"
      >
        <MultiselectValue
          v-bind="{
            toggle,
            search,
            visibleValues,
            getOptionLabel,
            removeElement,
            internalValue,
            loading,
            isSingleLabelVisible,
            singleValue,
            placeholder,
            isPlaceholderVisible,
            currentOptionLabel,
            limit,
            limitText,
            multiple,
            isOpen
          }"
          :class="{
            'multiselect--disabled': disabled
          }"
        >
          <MultiselectInput
            v-if="searchable"
            slot="control"
            v-bind="{
              activate,
              deactivate,
              handleKeydown,
              search,
              disabled,
              id,
              isOpen,
              placeholder,
              updateSearch,
              computedPlaceholder
            }"
          />
          <template slot="singleLabel" slot-scope="props">
            <slot name="singleLabel" v-bind="props">
              {{ props.currentOptionLabel }}
            </slot>
          </template>
          <template slot="placeholder" slot-scope="props">
            <slot name="placeholder" v-bind="props">
              <span class="multiselect__single">
                {{ props.placeholder }}
              </span>
            </slot>
          </template>
        </MultiselectValue>
      </MultiselectWrapper>

      <slot
        name="options"
        v-bind="$attrs"
        :is-open="isOpen"
        :value="internalValue"
        :filtered-options="filteredOptions"
        :select="select"
      >
        <MultiselectOptions
          v-bind="{
            activate,
            deactivate,
            handleKeydown,
            search,
            disabled,
            id,
            isOpen,
            placeholder,
            updateSearch,
            internalValue,
            filteredOptions,
            select,
            toggle,
            visibleValues,
            isSingleLabelVisible,
            singleValue,
            isPlaceholderVisible,
            currentOptionLabel,
            limit,
            limitText,
            getOptionLabel,
            removeElement,
            multiple,
            max,
            contentStyle,
            optimizedHeight,
            isAbove,
            pointerSet,
            showNoResults,
            pointerPosition,
            visibleElements,
            optionHeight,
            showPointer,
            pointer,
            loading
          }"
        >
          <template slot="_beforeList">
            <slot name="beforeList"></slot>
          </template>

          <template slot="_maxElements">
            <slot name="maxElements">
              Maximum of {{ max }} options selected. First remove a selected option to select another.
            </slot>
          </template>

          <template slot="_option" slot-scope="props">
            <slot name="option" v-bind="props">
              <span>{{ getOptionLabel(props.option) }}</span>
            </slot>
          </template>

          <template slot="_optionGroup" slot-scope="props">
            <slot name="optionGroup" v-bind="props">
              <span>{{ getOptionLabel(props.option) }}</span>
            </slot>
          </template>

          <template slot="_afterList" slot-scope="props">
            <slot name="afterList" v-bind="props"></slot>
          </template>

          <!-- TODO: Those cause the: "Duplicate presence of slot "noResult" found in the same render tree - this will likely cause render errors." to appear -->
          <template slot="_noResult" slot-scope="props">
            <slot name="noResult" v-bind="props">
              No options found. Consider changing the search query.
            </slot>
          </template>
        </MultiselectOptions>
      </slot>
    </div>
  </MultiselectCore>
</template>

<script>
import MultiselectCore from './MultiselectCore'
import MultiselectOptions from './MultiselectOptions'
import MultiselectInput from './MultiselectInput'
import MultiselectWrapper from './MultiselectWrapper'
import MultiselectValue from './MultiselectValue'
import multiselectCorePropsMixin from './multiselectCorePropsMixin'

export default {
  name: 'vue-multiselect',
  mixins: [multiselectCorePropsMixin],
  components: {
    MultiselectInput,
    MultiselectCore,
    MultiselectOptions,
    MultiselectWrapper,
    MultiselectValue
  }
}
</script>

<style>
.multiselect__single {
  font-family: inherit;
  font-size: 16px;
  touch-action: manipulation;
}

.multiselect--active {
  z-index: 50;
}

.multiselect--active:not(.multiselect--above) .multiselect__current,
.multiselect--active:not(.multiselect--above) .multiselect__input {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.multiselect--above.multiselect--active .multiselect__current,
.multiselect--above.multiselect--active .multiselect__input {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.multiselect__single {
  position: relative;
  display: inline-block;
  min-height: 22px;
  line-height: 22px;
  margin: 3px 0;
  border: none;
  border-radius: 5px;
  background: #fff;
  /* padding: 0 0 0 5px; */
  width: calc(100%);
  transition: border 0.1s ease;
  box-sizing: border-box;
  vertical-align: top;
}

.multiselect__tag ~ .multiselect__input,
.multiselect__tag ~ .multiselect__single {
  width: auto;
}

.multiselect__single:hover {
  border-color: #cfcfcf;
}

.multiselect__single:focus {
  border-color: #a8a8a8;
  outline: none;
}

.multiselect__single {
  padding-left: 5px;
}

.multiselect__current {
  line-height: 16px;
  min-height: 40px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 8px 12px 0;
  padding-right: 30px;
  white-space: nowrap;
  margin: 0;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid #E8E8E8;
  cursor: pointer;
}

.multiselect__placeholder {
  color: #ADADAD;
  display: inline-block;
  margin-bottom: 10px;
  padding-top: 2px;
}

.multiselect--active .multiselect__placeholder {
  display: none;
}

.multiselect__content {
  list-style: none;
  display: inline-block;
  padding: 0;
  margin: 0;
  min-width: 100%;
  vertical-align: top;
}

.multiselect--above .multiselect__content-wrapper {
  bottom: 100%;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: none;
  border-top: 1px solid #E8E8E8;
}

.multiselect__content::webkit-scrollbar {
  display: none;
}

.multiselect--disabled {
  background: #ededed;
  pointer-events: none;
}

.multiselect--disabled .multiselect__current {
  background: #ededed;
  color: #a6a6a6;
}

.multiselect-enter-active,
.multiselect-leave-active {
  transition: all 0.15s ease;
}

.multiselect-enter,
.multiselect-leave-active {
  opacity: 0;
}

.multiselect__strong {
  margin: 3px 0 3px 5px;
  line-height: 22px;
  display: inline-block;
  vertical-align: top;
}

*[dir="rtl"] .multiselect__content {
    text-align: right;
}

*[dir="rtl"] .multiselect__option:after {
    right: auto;
    left: 0;
}

*[dir="rtl"] .multiselect__clear {
    right: auto;
    left: 12px;
}

*[dir="rtl"] .multiselect__spinner {
    right: auto;
    left: 1px;
}

@keyframes spinning {
  from { transform:rotate(0) }
  to { transform:rotate(2turn) }
}
</style>
