import Vue from 'vue'
import Router from 'vue-router'
import App from './app'
import Channel from './channel'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/channel/:id',
      name: 'Channel',
      component: Channel
    }
  ]
})
