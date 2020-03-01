<template>
  <div>
    <ul v-for="(item, index) in list"
        :key="index">
      <li>{{index}}</li>
      <li>{{item.tweet.full_text}}</li>
      <li>{{item.tweet.created_at}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'tweet',
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getDetailInfo () {
      // let res = await axios.get('/api/detail.json?id=' + this.$route.params.id)
      let res = await axios.get('/api/tweet.json')
      res = res.data
      console.log(res)
      this.list = res
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped></style>
