<template lang="html">
  <vue-multiselect
    v-model="value"
    :options="[1,2]"
  />
</template>

<script>
export default {
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style lang="css">
</style>
