<template lang="pug">
div
  label.typo__label Vuex example.
  multiselect(
    placeholder="Pick action",
    :value="value",
    :options="options",
    :searchable="false",
    @input="updateValueAction",
  )
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'
import Multiselect from 'vue-multiselect'

const { mapActions, mapState } = Vuex

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    value: 'Vuex',
    options: ['Vuex', 'Vue', 'Vuelidate', 'Vue-Multiselect', 'Vue-Router']
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
