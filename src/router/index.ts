import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import LayoutPage from "@/layout/LayoutPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "",
    name: "index",
    component: LayoutPage,
    children: [
      {
        path: "",
        name: "首页",
        component: () => import("@/pages/HomePage/HomePage.vue"),
      },
    ],
  },
  {
    path: "/1",
    name: "菜单一",
    component: LayoutPage,
    children: [
      {
        path: "",
        name: "1-1",
        component: () => import("@/pages/MenuOne/OnePage.vue"),
      },
      {
        path: "/1-2",
        name: "1-2",
        component: () => import("@/pages/MenuOne/TwoPage.vue"),
      },
      {
        path: "/1-3-1",
        name: "1-3-1",
        component: () => import("@/pages/MenuOne/ThreePage/ThreePageOne.vue"),
      },
    ],
  },

  {
    path: "/2",
    name: "菜单二",
    component: LayoutPage,
    children: [
      {
        path: "",
        name: "2-1",
        component: () => import("@/pages/MenuTwo/OnePage.vue"),
      },
      {
        path: "/2-2",
        name: "2-2",
        component: () => import("@/pages/MenuTwo/TwoPage.vue"),
      },
    ],
  },
  {
    path: "/3",
    name: "菜单三",
    component: LayoutPage,
    children: [
      {
        path: "",
        name: "3-1",
        component: () => import("@/pages/MenuThree/OnePage.vue"),
      },
      {
        path: "/3-2",
        name: "3-2",
        component: () => import("@/pages/MenuThree/TwoPage.vue"),
      },
    ],
  },
  {
    path: "/4",
    name: "菜单四",
    component: LayoutPage,
    children: [
      {
        path: "",
        name: "4-1",
        component: () => import("@/pages/MenuFour/OnePage.vue"),
      },
      {
        path: "/4-2",
        name: "4-2",
        component: () => import("@/pages/MenuFour/TwoPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
