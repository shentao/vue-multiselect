<template lang="html">
  <div class="slot">
    <div class="slot-name-wrapper">
      <div class="slot-name">
        <span :style="{ background }">
          <slot name="slotName"/>
        </span>
      </div>
      <div class="line"/>
    </div>
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: '#fff'
    }
  }
}
</script>

<style lang="stylus" scoped>
.slot-name-wrapper
  width: 20px
  text-transform: uppercase

.slot-name
  display: block
  height: 0
  width: 0
  z-index: 10
  overflow: visible
  position: absolute
  letter-spacing: 0.5px
  bottom: 0
  top: 50%
  color: #3eaf7c

  & > span
    transform: rotateZ(-90deg) translateY(-23px) translateX(-33%)
    transform-origin: left
    white-space: nowrap
    background: #fff
    padding: 6px 8px
    font-weight: 700
    display: inline-block

.slot
  padding-left: 30px
  position: relative
  display: flex
  margin-top: 20px
  flex-direction: column

.line
  position: absolute
  left: 5px
  width: 3px
  height: 100%
  border-radius: 10px
  background: #3eaf7c
</style>
