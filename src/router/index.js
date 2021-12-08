import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import myheroes from '@/views/myheroes'


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
