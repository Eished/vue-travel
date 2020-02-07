<template>
  <div>
    <div class="recommend-title">
      <span class="discount">今日特惠</span>
      <span class="more-discount">更多特惠 ></span>
    </div>
    <div class="on-sales">
      <router-link tag="div"
                   :to="'/detail/'+item.id"
                   class="on-sale"
                   v-for="item of saleList"
                   :key="item.id">
        <div class="on-sale-img">
          <img class="sale-img"
               :src="item.imgUrl">
        </div>
        <div class="sale-details">
          <p class="sale-title">{{item.title}}</p>
          <p class="sale-desc">{{item.desc}}</p>
          <div class="sale-price"><em>¥{{item.price}}</em><em class="sale-price-desc"> 起</em></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
      saleList: [{
        id: '0001',
        title: '杭州当地游 3天跟团游',
        desc: '纯玩江南3日 人间天堂 江南水乡 杭州印象 乌镇西栅、西湖、西塘、西溪湿地',
        price: '658',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1708/f7/9e813b99cb980c02.jpg_r_480x320x90_49733292.jpg'
      }, {
        id: '0002',
        title: '上海-舟山 2天跟团游',
        desc: '普陀山2日跟团游【官方推荐，祈福无购物】登佛顶山，宿精装客栈含早 多套餐可选',
        price: '375',
        imgUrl: 'https://imgs.qunarzz.com/p/tts7/1803/87/2544eb608b632002.jpg_r_480x320x90_d491cc98.jpg'
      }, {
        id: '0003',
        title: '上海当地游 1天跟团游',
        desc: '上海经典一日游!上海东方明珠+外滩+黄浦江游轮高端纯玩一日游! 日/夜游可选',
        price: '209',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_vs_tts/bb4e26c0-2d6b-43f4-a525-2b1e14875ae4.jpg_r_480x320x90_bbfe8901.jpg'
      }, {
        id: '0004',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '799',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1809/9d/f8db3b5cb0007702.jpg_r_480x320x90_2f6b0821.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top 0.2rem
  overflow hidden
  .discount
    float left
    display block
    padding 0.15rem 0.25rem 0.15rem 0.25rem
    border-radius 0.1rem
    margin-left 0.2rem
    background #17C0C8
    height 0.3rem
    text-align center
    line-height 0.35rem
    font-size 0.24rem
    color white
  .more-discount
    display block
    height 0.7rem
    line-height 0.9rem
    margin-right 0.6rem
    font-size 0.2rem
    float right
    color #757575
.on-sales
  width 100%
  // height 50%
  overflow hidden
  position relative
  .on-sale
    overflow hidden
    float left
    width 46%
    // height 48.7%
    margin-left 2.7%
    margin-top 0.1rem
    .on-sale-img
      // 自适应高宽代码
      overflow hidden
      height 0
      padding-bottom 64%
      border-radius 0.1rem
    .sale-img
      width 100%
  .sale-details
    width 94.7%
    margin 0.16rem 0.1rem 0.1rem 0.1rem
    .sale-title
      left 0
      right 0
      bottom 0
      height 0.44rem
      font-size 0.27rem
      line-height 0.44rem
      color $darkTextColor
      ellipsis()
    .sale-desc
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      font-size 0.25rem
      color #777
      ellipsis()
    .sale-price
      color #FF7400
      font-size 0.4rem
      padding 0.1rem 0 0.05rem 0
      .sale-price-desc
        font-size 0.3rem
</style>
