<template>
  <div>
    <div class="hot-title">
      <span class="hot"><span>✈</span>当季热门度假</span>
    </div>
    <div class="on-sales">
      <div class="on-sale"
           v-for="item of saleList"
           :key="item.id">
        <div class="on-sale-img">
          <img class="sale-img"
               :src="item.imgUrl">
        </div>
        <div class="sale-details">
          <p class="sale-title">{{item.title}}</p>
          <div class="sale-price"><em>¥{{item.price}}</em></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  data () {
    return {
      saleList: [{
        id: '0001',
        title: '杭州当地游 3天跟团游',
        desc: '纯玩江南3日 人间天堂 江南水乡 杭州印象 乌镇西栅、西湖、西塘、西溪湿地',
        price: '3880',
        imgUrl: 'https://imgs.qunarzz.com/p/p19/1809/b9/2a3d362aabcbb02.jpg_256x160_28907832.jpg'
      }, {
        id: '0002',
        title: '上海-舟山 2天跟团游',
        desc: '普陀山2日跟团游【官方推荐，祈福无购物】登佛顶山，宿精装客栈含早 多套餐可选',
        price: '3880',
        imgUrl: 'https://imgs.qunarzz.com/p/p64/1809/46/ddb72937ac938a02.jpg_256x160_5f99ddba.jpg'
      }, {
        id: '0003',
        title: '上海当地游 1天跟团游',
        desc: '上海经典一日游!上海东方明珠+外滩+黄浦江游轮高端纯玩一日游! 日/夜游可选',
        price: '2910',
        imgUrl: 'https://imgs.qunarzz.com/p/p97/1512/73/97da2a9e39df59f7.jpg_256x160_acb41adf.jpg'
      }, {
        id: '0004',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '1980',
        imgUrl: 'https://imgs.qunarzz.com/p/p42/1809/7b/6d86726444ca4e02.jpg_256x160_3e1f83e1.jpg'
      }, {
        id: '0005',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '1183',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1809/9d/f8db3b5cb0007702.jpg_r_480x320x90_2f6b0821.jpg'
      }, {
        id: '1608',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '16680',
        imgUrl: 'https://imgs.qunarzz.com/p/p56/1809/c4/90ba238a586bf802.jpg_256x160_aec92188.jpg'
      }, {
        id: '0007',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '2850',
        imgUrl: 'https://imgs.qunarzz.com/p/p56/1809/c4/90ba238a586bf802.jpg_256x160_aec92188.jpg'
      }, {
        id: '0008',
        title: '上海-名古屋 5天自由行',
        desc: '确认后100%出行🎉赠一晚酒店💕上海🛫名古屋5-7日自由行🎁代办签证',
        price: '1608',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1809/9d/f8db3b5cb0007702.jpg_r_480x320x90_2f6b0821.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.hot-title
  margin-top 0.4rem
  overflow hidden
  .hot
    float left
    display block
    padding 0.15rem 0
    border-radius 0.1rem
    margin-left 0.2rem
    height 0.3rem
    line-height 0.35rem
    font-size 0.4rem
.on-sales
  width 100%
  height 50%
  overflow hidden
  position relative
  .on-sale
    overflow hidden
    float left
    width 46%
    height 48.7%
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
    .sale-price
      color #FF7400
      font-size 0.4rem
      padding 0.1rem 0 0.05rem 0
</style>
