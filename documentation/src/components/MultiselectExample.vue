<template>
  <div>
    <multiselect :options="badges"
                 v-model="value"
                 label="name"
                 id="badges"
                 track-by="name"
                 placeholder="Pick badges"
                 :multiple="true"
                 :show-labels="false"
                 :limit="3"
                 @tag="onTagging">

      <template #option="props">
        <span class="badge__name">
          {{ props.option.name }}
        </span>
        <img v-if="props.option.img !== ''" class="badge__img" :src="props.option.img" :alt="props.option.name"/>
      </template>
      <template #noResult>
        <span>
            Badge not found. Suggest a badge <a class="typo__link"
                                                href="https://github.com/shentao/vue-multiselect/issues"
                                                target="_blank">here</a>.
        </span>
      </template>
    </multiselect>
  </div>
</template>

<script>

export default {
  data () {
    return {
      badges: [
        {
          img: 'https://camo.githubusercontent.com/d0e25b09a82bc4bfde9f1e048a092752eebbb4f3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e7376673f7374796c653d666c6174',
          name: 'License'
        },
        {img: 'https://img.shields.io/github/stars/shentao/vue-multiselect.svg?label=Stars', name: 'GitHub Stars'},
        {
          img: 'https://camo.githubusercontent.com/64f9a2333bb303d34b1587e1436b24dee6a8e134/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652d6d756c746973656c6563742e737667',
          name: 'Npm Monthly Downloads'
        },
        {
          img: '',
          name: 'Full Test Coverage'
        },
        {img: 'https://img.shields.io/badge/dependencies-none-brightgreen.svg?style=flat', name: 'NO Dependencies'}
      ],
      value: []
    }
  },
  methods: {
    onTagging (newTag) {
      this.source.push({name: newTag, language: newTag})
      this.value.push({name: newTag, language: newTag})
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
  float: left
</style>
