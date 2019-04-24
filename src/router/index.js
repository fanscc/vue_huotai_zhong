import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Layout from "../components/layout/Layout";

export const constantRouterMap = [
  {
    path: "/404",
    component: () => import("@/views/errorPage/404"),
    hidden: true
  },
  {
    path: "/401",
    component: () => import("@/views/errorPage/401"),
    hidden: true
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
    name: "login",
    hidden: true
  },
  {
    path: "",
    component: Layout,
    redirect: "/dashboard/dashboard"
  },
  {
    path: "/dashboard",
    component: Layout,
    redirect: "/dashboard/dashboard",
    meta: { title: "首页", icon: "dashboard" },
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/dashboard/dashboard"),
        meta: { title: "首页", icon: "dashboard" }
      }
    ]
  },
  // 图表
  {
    path: "/charts",
    component: Layout,
    redirect: "/charts/DiscountFigure",
    name: "charts",
    meta: { title: "图表", icon: "chart" },
    children: [
      {
        path: "DiscountFigure",
        name: "DiscountFigure",
        component: () => import("@/views/charts/DiscountFigure"),
        meta: { title: "折线图", icon: "discounting" }
      },
      {
        path: "columnar",
        name: "columnar",
        component: () => import("@/views/charts/columnar"),
        meta: { title: "柱状图", icon: "columnar" }
      },
      {
        path: "barGraph",
        name: "barGraph",
        component: () => import("@/views/charts/barGraph"),
        meta: { title: "百分图", icon: "barGraph" }
      },
      {
        path: "barGraph1",
        name: "barGraph1",
        component: () => import("@/views/charts/barGraph"),
        meta: { title: "cky", icon: "barGraph" }
      }
    ]
  }
];

export const asyncRouterMap = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "permission",
    alwaysShow: true, // will always show the root menu
    meta: {
      title: "权限测试",
      icon: "lock",
      roles: ["admin", "editor"] // you can set roles in root nav
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page"),
        name: "pagePermission",
        meta: {
          title: "权限测试1",
          roles: ["admin"] // or you can only set roles in sub nav
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive"),
        name: "directivePermission",
        meta: {
          title: "权限测试2"
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  { path: "*", redirect: "/404", hidden: true }
];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
