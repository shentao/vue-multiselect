<template>
  <div id="app">
    <h1><img class="logo" src="./assets/logo.png"> Vue-multiselect</h1>
    <multiselect
      :options="options"
      :selected="selected"
      :multiple="multiple"
      :searchable="searchable"
      :placeholder="placeholder"
    >
    </multiselect>

    <h2>Config</h2>
    <label>
      <input type="checkbox" name="name" v-model="multiple"> Multiple
    </label>
    <label>
      <input type="checkbox" name="name" v-model="searchable"> Searchable
    </label>
    <label>Placeholder</label>
    <input type="text" name="name" v-model="placeholder">

    <multiselect
      :options="source"
      :selected="value"
      :multiple="true"
      :searchable="true"
      :placeholder="placeholder"
      label="name"
    >
    </multiselect>

  </div>
</template>

<script>
import Multiselect from './components/Multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      options: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      selected: ['onChange'],
      multiple: true,
      searchable: false,
      placeholder: 'Select props',
      source: [{ name: '1' }, { name: '2' }, { name: '3' }],
      value: [{ name: '2' }]
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: #fafafa;
  color: #35495E;
}

#app {
  margin-top: -100px;
  width: 500px;
  max-width: 500px;
  font-family: 'Lato', Helvetica, sans-serif;
  text-align: center;
}

#app {
  text-decoration: none;
}

h1 {
  font-size: 48px;
  vertical-align: middle;
  line-height: 40px;
}

.logo {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  vertical-align: middle;
  display: inline-block;
}
</style>
