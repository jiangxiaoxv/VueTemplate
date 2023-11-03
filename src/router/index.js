import * as VueRouter from 'vue-router'
import HomeView from '../views/home/index.vue'

const routes = [
  {
    path: '/',
    meta: { title: '根路径' },
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    redirect: '/home/welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('../views/home/welcome/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/index.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const loginStatus = true
  if (to.path != '/login' && !loginStatus) {
    next({
      path: '/login',
      query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
    })
  } else {
    next()
  }
})

export default router
