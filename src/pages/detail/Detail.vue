<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      id: null
    }
  },
  methods: {
    async getDetailInfo () {
      // let res = await axios.get('/api/detail.json?id=' + this.$route.params.id)
      let res = await axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
      res = res.data
      if (res.ret && res.data) {
        this.list = res.data.categoryList
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.gallaryImgs = res.data.gallaryImgs
        this.id = this.$route.params.id
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  activated () {
    if (this.id !== this.$route.params.id && this.id !== null) {
      this.getDetailInfo()
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
