import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    // console.log('has token')
    if (to.path === '/login' || to.path === '/select') {
      // 不需要权限验证
      next()
      NProgress.done()
    } else {
      // 需要权限验证
      if (store.getters.roles.length === 0) {
        // console.log('1111')
        // 没有角色信息
        store.dispatch('GetInfo').then(res => {
          // console.log(2222)
          // 获取角色成功，生成侧边路由
          const roles = res.roles
          // 根据roles权限生成可访问的路由表
          store.dispatch('GenerateRoutes', { roles }).then(() => {
            // console.log(roles)
            // 动态添加可访问路由表
            router.addRoutes(store.getters.addRouters)
            next({ ...to, replace: true })
          }).catch(err => {
            console.log(err)
          })
        }).catch((err) => {
          // 获取角色失败
          Message.error(err || '用户角色获取失败')
          store.dispatch('Logout').then(() => {
            next({ path: '/' })
          })
        })
      } else {
        // console.log(2222)
        // console.log('1.3 已经有角色')
        next()
      }
    }
  } else {
    // console.log('has no token')
    if (whiteList.indexOf(to.path) !== -1) {
      // console.log('1.未登录-白名单页面跳转')
      next()
    } else {
      // console.log('1.未登录-跳入登陆页面')
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
