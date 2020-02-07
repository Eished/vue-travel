<template>
  <div>
    <router-link tag="div"
                 to="/"
                 class="header-abs"
                 v-show="this.showAbs">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
    <div class="header-fixed"
         v-show="!showAbs"
         :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left 0.2rem
  top 0.2rem
  width 0.8rem
  height 0.8rem
  text-align center
  line-height 0.8rem
  border-radius 0.4rem
  background rgba(0, 0, 0, 0.5)
  .back-icon
    color white
    font-size 0.4rem
.header-fixed
  position fixed
  top 0
  left 0
  right 0
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  text-align center
  color white
  font-size 0.32rem
  background $bgColor
  .back-icon
    color white
    font-size 0.4rem
    padding 0 0.2rem
    position absolute
</style>
