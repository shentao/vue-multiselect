<template>
<div><label class="typo__label">Vuex example.</label>
    <multiselect placeholder="Pick action" :value="value" :options="options" :searchable="false" @update:modelValue="updateValueAction"></multiselect>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { createStore, mapActions, mapState } from 'vuex'

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

export default {
  store,
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
</script>
