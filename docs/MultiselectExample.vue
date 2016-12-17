<template lang="pug">
div
  multiselect(
    v-model="value",
    label="name",
    track-by="name",
    placeholder="Pick badges",
    :options="badges",
    :multiple="true",
    :show-labels="false",
    :limit="3",
    :option-function="customRender",
    @tag="onTagging"
  )
    span(slot="noResult").
      Badge not found. Suggest a badge <a class="typo__link" href="https://github.com/monterail/vue-multiselect/issues" target="_blank">here</a>.
</template>

<script>
import Multiselect from '../src/Multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      badges: [
        { img: 'https://camo.githubusercontent.com/d0e25b09a82bc4bfde9f1e048a092752eebbb4f3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e7376673f7374796c653d666c6174', name: 'License' },
        { img: 'https://img.shields.io/github/stars/monterail/vue-multiselect.svg?label=Stars', name: 'GitHub Stars' },
        { img: 'https://camo.githubusercontent.com/64f9a2333bb303d34b1587e1436b24dee6a8e134/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652d6d756c746973656c6563742e737667', name: 'Npm Monthly Downloads' },
        { img: 'https://camo.githubusercontent.com/47ff0923e959e736113988e900268dfc7a601d3b/68747470733a2f2f636972636c6563692e636f6d2f67682f6d6f6e74657261696c2f7675652d6d756c746973656c6563742f747265652f6d61737465722e7376673f7374796c653d736869656c6426636972636c652d746f6b656e3d35633933316666323866643132353837363130663833353437326265636464353134643039636566', name: 'Full Test Coverage' },
        { img: 'https://camo.githubusercontent.com/51bc9432092f4def26f97d24824c857ad5891c1c/68747470733a2f2f696d672e736869656c64732e696f2f67656d6e617369756d2f6d6f6e74657261696c2f7675652d6d756c746973656c6563742e7376673f7374796c653d666c6174', name: 'NO Dependencies' }
      ],
      value: []
    }
  },
  methods: {
    onTagging (newTag) {
      this.source.push({ name: newTag, language: newTag })
      this.value.push({ name: newTag, language: newTag })
    },
    customRender (h, option) {
      return <div>
        <span class="badge__name">{ option.name }</span>
        <img class="badge__img" src={ option.img } alt={ option.name }/>
      </div>
    }
  }
}
</script>

<style lang="sass">
  .badge__img
    vertical-align: middle
    float: right

  .badge__name
    vertical-align: middle
    display: inline-block
    margin-left: 5px
</style>
