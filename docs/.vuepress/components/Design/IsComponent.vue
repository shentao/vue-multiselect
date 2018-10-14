<template>
  <div class="component" :style="{ background, color, border }">
    <p class="component-name">
      <slot name="name"/>
    </p>
    <p class="component-desc">
      <slot name="desc"/>
    </p>
    <slot/>
    <p class="component-type" :style="{ color: color }">
      <slot name="type"/>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: '#fff'
    },
    color: {
      type: String,
      default: '#2C3E50'
    },
    border: {
      type: String,
      default: '3px solid #2C3E50'
    }
  }
}
</script>

<style lang="stylus" scoped>
.component-name
  font-size: 20px
  letter-spacing: 0.5px
  margin: 0
  padding: 0 0 5px
  font-weight: 700

.component-desc
  font-size: 16px
  margin: 0 0 15px 0

.component-type
  position: absolute
  right: 20px
  top: 0px
  letter-spacing: 1px
  font-weight: 700
  font-size: 14px
  text-transform: uppercase

.component
  border: 3px solid #2C3E50
  border-radius: 10px
  padding: 20px
  position: relative
</style>
