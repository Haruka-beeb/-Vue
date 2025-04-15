import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import AddBook from '@/components/AddBook.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'AddBook',
      component: AddBook
    }
  ]
})
