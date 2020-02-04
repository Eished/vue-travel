<template>
  <div class="wrapper">
    <swiper :options="swiperOption"
            v-if="show">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: '.swiper-pagination',
        autoplay: 2000, // 可设置数值来指定播放速度
        autoplayDisableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
        speed: 400, // 切换图片速度
        loop: true // 循环播放
      }
    }
  },
  computed: {
    show () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// 样式穿透 可加 !important
.wrapper >>> .swiper-pagination-bullet-active
  background white
.wrapper
  // 自适应高宽代码
  overflow hidden
  width 100%
  height 0
  padding-bottom 30.476%
  .swiper-img
    width 100%
</style>
