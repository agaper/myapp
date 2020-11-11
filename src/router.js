import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

/**
 * 重写路由的push方法，解决重定向到自己报错的bug
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
})

export default router
