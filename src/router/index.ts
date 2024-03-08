import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import LayoutPage from '@/layout/LayoutPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'index',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: '首页',
        component: () => import('@/pages/HomePage/HomePage.vue'),
      },
    ],
  },
  {
    path: '/1',
    name: '菜单一',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: '表格',
        component: () => import('@/pages/MenuOne/OnePage.vue'),
      },
      {
        path: '/1-2',
        name: '日历',
        component: () => import('@/pages/MenuOne/TwoPage.vue'),
      },
      {
        path: '/1-3-1',
        name: '信息描述',
        component: () => import('@/pages/MenuOne/ThreePage/ThreePageOne.vue'),
      },
    ],
  },

  {
    path: '/2',
    name: '菜单二',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: '抽屉',
        component: () => import('@/pages/MenuTwo/OnePage.vue'),
      },
      {
        path: '/2-2',
        name: '弹出框',
        component: () => import('@/pages/MenuTwo/TwoPage.vue'),
      },
    ],
  },
  {
    path: '/3',
    name: '菜单三',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: '标签页',
        component: () => import('@/pages/MenuThree/OnePage.vue'),
      },
      {
        path: '/3-2',
        name: '时间线-漫游引导',
        component: () => import('@/pages/MenuThree/TwoPage.vue'),
      },
    ],
  },
  {
    path: '/4',
    name: '菜单四',
    component: LayoutPage,
    children: [
      {
        path: '',
        name: '加载',
        component: () => import('@/pages/MenuFour/OnePage.vue'),
      },
      {
        path: '/4-2',
        name: '水印指令',
        component: () => import('@/pages/MenuFour/TwoPage.vue'),
      },
      {
        path: '/4-3',
        name: '打印',
        component: () => import('@/pages/MenuFour/ThreePage.vue'),
      },
      {
        path: '/4-4',
        name: '打印图片',
        component: () => import('@/pages/MenuFour/FourPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
