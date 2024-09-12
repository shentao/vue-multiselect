const e=`<template>
<div>
  <label class="typo__label">Open console to see logs.</label>
  <multiselect placeholder="Pick action" :options="actions" :searchable="false" :reset-after="true" @select="dispatchAction"></multiselect>
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
<\/script>
`;export{e as default};
