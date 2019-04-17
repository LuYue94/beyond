# vue-router
以 / 开头为根路径

## router-link
to
replace
append    
tag       渲染成某种标签
active-class
exact
event
exact-active-class

## router-view

<transition>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</transition>


## history
与window.history {pushState,replaceState,go} 一一对应
router.push(location, onComplete?, onAbort?)
router.replace(location, onComplete?, onAbort?)
router.go(n)


## beforeRouteUpdate
复用组件时，想对路由参数的变化作出响应的话
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}

## redirect
重定向

## alias
别名

## mode history
vue-router 默认 hash 模式 

### 滚动行为
// 记录滚动位置
scrollBehavior (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}
// 滚动到锚点
scrollBehavior (to, from, savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
}

## 导航守卫
router.beforeEach((to, from, next) => {
  // ...
})
router.beforeResolve()
router.afterEach((to, from)

路由内
beforeEnter: (to, from, next) => {
  // ...
}

组件内
beforeRouteEnter
beforeRouteUpdate (2.2 新增)
beforeRouteLeave 


## 完整的导航解析流程

1   导航被触发。
    在失活的组件里调用离开守卫。
    调用全局的 beforeEach 守卫。
    在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
    在路由配置里调用 beforeEnter。
    解析异步路由组件。
    在被激活的组件里调用 beforeRouteEnter。
    调用全局的 beforeResolve 守卫 (2.5+)。
    导航被确认。
    调用全局的 afterEach 钩子。
    触发 DOM 更新。
12  用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。 

## 动态路由
const Foo = () => import('./Foo.vue')

## 把组件按组分块
```js
const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
```