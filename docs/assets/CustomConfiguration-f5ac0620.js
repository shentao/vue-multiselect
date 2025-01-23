const e=`<template>
<div :class="{ 'invalid': isInvalid }">
  <label class="typo__label">Customized multiselect</label>
  <multiselect id="custom-configuration" placeholder="Pick at least one" select-label="Enter doesn’t work here!" :model-value="value" :options="options" :multiple="true" :searchable="true" :allow-empty="false" :prevent-autofocus="true" :hide-selected="true" :max-height="150" :max="3" :disabled="isDisabled" :block-keys="['Tab', 'Enter']" @update:modelValue="onChange" @close="onTouch" @select="onSelect"></multiselect>
  <label class="typo__label form__label" v-show="isInvalid">Must have at least one value</label>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      isDisabled: false,
      isTouched: false,
      value: [],
      options: ['Select option', 'Disable me!', 'Reset me!', 'mulitple', 'label', 'searchable']
    }
  },
  computed: {
    isInvalid () {
      return this.isTouched && this.value.length === 0
    }
  },
  methods: {
    onChange (value) {
      this.value = value
      if (value.indexOf('Reset me!') !== -1) this.value = []
    },
    onSelect (option) {
      if (option === 'Disable me!') this.isDisabled = true
    },
    onTouch () {
      this.isTouched = true
    }
  }
}
<\/script>

`;export{e as default};
