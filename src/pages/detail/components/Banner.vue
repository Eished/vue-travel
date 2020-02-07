<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <div class="banner-img-box">
        <img class="banner-img"
             :src="this.bannerImg">
      </div>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62e;</span>{{this.bannerImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="bannerImgs"
                      v-show="showGallary"
                      @close="handleGallaryClose">
      </common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'

export default {
  name: 'detailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.banner
  position relative
  overflow hidden
  width 100%
  .banner-img-box
    overflow hidden
    width 100%
    height 0
    padding-bottom 55%
    text-align center
    .banner-img
      width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height 0.6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size 0.3rem
      padding 0 0.2rem
      ellipsis()
    .banner-number
      margin-top 0.1rem
      margin-right 0.1rem
      padding 0 0.2rem
      line-height 0.34rem
      height 0.34rem
      border-radius 0.2rem
      font-size 0.2rem
      background rgba(0, 0, 0, 0.4)
      .banner-icon
        padding 0 0.1rem
        font-size 0.2rem
</style>
