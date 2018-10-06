<template lang="html">
  <VueMultiselect
    placeholder="Pick action"
    :options="actions"
    :searchable="false"
    :reset-after="true"
    @select="dispatchAction"
  />
</template>

<script>
export default {
  data () {
    return {
      actions: ['alert', 'console.log', 'scrollTop']
    }
  },
  methods: {
    dispatchAction (actionName) {
      switch (actionName) {
        case 'alert':
          window.alert('You just dispatched "alert" action!')
          break
        case 'console.log':
          console.log('You just dispatched "console.log" action!')
          break
        case 'scrollTop':
          window.scrollTo(0, 0)
          break
      }
    }
  }
}
</script>
