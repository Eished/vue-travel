<template>
  <div class="list"
       ref="wrapper">
    <div class="content">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hotCities"
               :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <div class="title  border-topbottom">{{key}}</div>
        <div class="item-list"
             v-for="inneritem of item"
             :key="inneritem.id">
          <div class="item border-bottom">{{inneritem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: { Array, Object },
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element, 100)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  .area
    .title
      line-height 0.54rem
      font-size 0.26rem
      background #eee
      padding-left 0.2rem
      color #666
    .button-list
      overflow hidden
      padding 0.1rem 0.6rem 0.1rem 0.1rem
      .button-wrapper
        width 33.33%
        float left
        .button
          padding 0.1rem 0
          text-align center
          margin 0.1rem
          border 0.02rem solid #ccc
          border-radius 0.06rem
    .item-list
      .item
        line-height 0.66rem
        padding-left 0.2rem
</style>
