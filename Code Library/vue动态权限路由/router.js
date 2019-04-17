import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    name: 'login',
    redirect: '/login'
  },
  {
    path: '/select',
    hidden: true,
    name: 'select',
    component: () => import('@/views/select/index')
  },
  {
    path: '/setting',
    hidden: true,
    name: 'setting',
    component: Layout,
    children: [
      {
        path: 'setting-index',
        name: 'setting-index',
        component: () => import('@/views/setting/index'),
        meta: { title: '账户设置' }
      }
    ]
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

// 动态路由
export const asyncRouterMap = [
  {
    path: '/home',
    component: Layout,
    name: 'home',
    redirect: '/home/home-index',
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        path: 'home-index',
        name: 'home-index',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'home',
          roles: ['home:*', 'home:order:count', 'home:order:sum', 'home:profit', 'home:merchant:new', 'home:merchant:stat', 'home:user:stat',
            'home:todo:list', 'home:order:stat', 'home:order:market', 'home:order:monprofit', 'home:month:order:profit', 'home:order:data'] }
      },
      {
        path: '/employee',
        component: () => import('@/views/employee/employee'),
        redirect: '/employee/employee-list',
        name: 'employee',
        meta: { title: '成员管理', icon: 'comapny', roles: ['staff:*', 'staff:view', 'staff:modify', 'staff:create'] },
        children: [
          {
            path: 'employee-list',
            name: 'employeeList',
            component: () => import('@/views/employee/list'),
            meta: { title: '成员列表', icon: 'chengyuan', roles: ['staff:view'] }
          },
          {
            hidden: true,
            path: 'add-employee',
            name: 'addEmployee',
            component: () => import('@/views/employee/addEmployee'),
            meta: { title: '添加成员', icon: 'comapny', roles: ['staff:modify', 'staff:create'] }
          }
        ]
      },
      {
        path: '/balance',
        component: () => import('@/views/balance/balance'),
        redirect: '/balance/balance-list',
        name: 'balance',
        meta: { title: '结算中心', icon: 'comapny', roles: ['settle:*', 'settle:income:acc', 'settle:income:close', 'settle:income:open', 'settle:detail:month', 'settle:payment'] },
        children: [
          {
            path: 'balance-list',
            name: 'balanceList',
            component: () => import('@/views/balance/list'),
            meta: { title: '结算中心', icon: 'jiesuan', roles: ['settle:*', 'settle:income:acc', 'settle:income:close', 'settle:income:open', 'settle:detail:month', 'settle:payment'] }
          },
          {
            path: 'balance-detail',
            name: 'balanceDetail',
            hidden: true,
            component: () => import('@/views/balance/detail'),
            meta: { title: '结算明细', icon: 'jiesuan' }
          }
        ]
      },
      {
        path: '/morder',
        component: () => import('@/views/morder/morder'),
        redirect: '/morder/morder-list',
        name: 'morder',
        meta: { title: '商家月结单', icon: 'yuejie', roles: ['settle:*', 'settle:income:acc', 'settle:income:close', 'settle:income:open', 'settle:detail:month', 'settle:payment'] },
        children: [
          {
            path: 'morder-list',
            name: 'morderList',
            component: () => import('@/views/morder/list'),
            meta: { title: '商家月结单', icon: 'yuejie' }
          }

        ]
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
