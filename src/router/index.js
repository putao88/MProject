import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/index'
import myheroes from '@/views/myheroes/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/myheroes',
      name: 'myheroes',
      component: myheroes
    }
  ]
})
