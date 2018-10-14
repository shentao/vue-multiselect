<template lang="html">
  <div class="slot">
    <div class="slot-name">
      <slot name="slotName"/>
      <div class="line"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
.slot-name
  width: 20px
  text-transform: uppercase
  text-align: center
  display: flex
  align-items: center
  justify-content: flex-end

  & > span
    transform: rotateZ(-90deg) translateY(22px) translateX(0%)
    transform-origin: top
    white-space: nowrap
    background: #fff
    padding: 8px
    font-weight: 700
    display: inline-block
    z-index: 10

.slot
  padding-left: 15px
  position: relative
  display: flex

.line
  position: absolute
  left: 5px
  width: 3px
  height: 100%
  border-radius: 10px
  background: #2C3E50
</style>
