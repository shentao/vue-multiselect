<template>
  <div class="component">
    <h1>
      <slot name="name"/>
    </h1>
    <p>
      <slot name="desc"/>
    </p>
    <slot/>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" scoped>
h1
  font-size: 20px
  letter-spacing: 0.5
  color: #2C3E50
  margin: 0
  padding: 0 0 15px

p
  font-size: 16px
  color: #2C3E50
  margin: 0 0 15px 0

.component
  border: 3px solid #2C3E50
  border-radius: 10px
  padding: 15px
</style>
