const e=`<template>
<div><label class="typo__label">Vuex example.</label>
    <multiselect placeholder="Pick action" :modelValue="value" :options="options" :searchable="false" @update:modelValue="updateValueAction"></multiselect>
</div>
</template>

<script>
/* Example of store setup
const store = createStore({
  state () {
    return {
      value: 'Vuex',
      options: ['Vuex', 'Vue', 'Vuelidate', 'Vue-Multiselect', 'Vue-Router']
    }
  },
  mutations: {
    updateValue (state, value) {
      state.value = value
    }
  },
  actions: {
    updateValueAction ({ commit }, value) {
      commit('updateValue', value)
    }
  }
})
 */

import Multiselect from 'vue-multiselect'
import {mapActions, mapState} from 'vuex'

export default {
  components: {
    Multiselect
  },
  computed: {
    ...mapState(['value', 'options'])
  },
  methods: {
    ...mapActions(['updateValueAction'])
  }
}
<\/script>
`;export{e as default};
