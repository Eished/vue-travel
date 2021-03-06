import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Tweet from '@/pages/tweet/Tweet'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/tweet',
    name: 'Tweet',
    component: Tweet
  }],
  scrollBehavior(to, form, savedPostion) {
    return {
      x: 0,
      y: 0
    }
  }
})
