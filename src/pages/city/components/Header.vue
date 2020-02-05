<template>
  <div class="header">
    <router-link to="/">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </router-link>
    <div class="city-selec">
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color white
  font-size 0.32rem
  background $bgColor
  .header-left
    position absolute
    top 0
    left 0
    width 0.64rem
    color white
    float left
    .back-icon
      text-align center
      font-size 0.4rem
</style>
