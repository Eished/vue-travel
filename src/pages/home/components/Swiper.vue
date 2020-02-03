<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }]
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
