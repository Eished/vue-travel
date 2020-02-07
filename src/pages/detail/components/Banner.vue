<template>
  <div>
    <div class="banner"
         @click="handleBannerClick">
      <div class="banner-img-box">
        <img class="banner-img"
             src="https://img1.qunarzz.com/p/tts6/1807/bb/83a45651a3b7a02.jpg_r_640x420x90_899fe65f.jpg">
      </div>
      <div class="banner-info">
        <div class="banner-title">洪崖洞轻轨穿楼+峨眉山船游乐山大佛+夜览长江</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe62e;</span>85</div>
      </div>
    </div>
    <common-gallary :imgs="imgs"
                    v-show="showGallary"
                    @close="handleGallaryClose">
    </common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'detailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://img1.qunarzz.com/p/tts3/201406/18/55cf3e1e86f781b0c8d65eac.jpg_r_1280x840x90_3c2ab527.jpg', 'https://img1.qunarzz.com/p/tts9/201406/18/8b1ce3f39ef6837bc8d65eac.jpg_r_640x420x90_17f7b3ff.jpg']
    }
  },
  components: {
    CommonGallary
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
