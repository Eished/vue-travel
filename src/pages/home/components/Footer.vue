<template>
  <div class="footer">
    <p class="copyright">
      <span>Copyright ©2019 asdf.com</span>
      <a href="#">京公网安备1101asdf30542</a>
      <a href="#">京ICP备asdf7号</a>
      <a href="#">营业执照信息</a>
      <a href="#">保险经纪资质</a>
    </p>
    <p class="copyright">
      <span>违法和不良信息举报电话：010-69194277</span>
      <span>违法和不良信息举报邮箱：tousu@qunar.com</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'qnFooter'
}
</script>

<style lang="stylus" scoped>
.footer
  width 90%
  margin 2rem auto 0 auto
  .copyright
    margin 0.2rem auto
    text-align center
  a, p
    margin 0.1rem
</style>
