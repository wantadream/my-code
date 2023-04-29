import Vue from "vue";
import VueRouter from "vue-router";
import LayOut from "@/layouts/index";


Vue.use(VueRouter);


export const routes = [
  {
    path: "/",
    component: LayOut,
    redirect: "/index",
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "index",
        name: "home",
        component: () => import("@/views/index"),
        meta: {
          title: "首页",
          icon: "el-icon-s-home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/vab",
    component: LayOut,
    redirect: "/vab",
    meta: { title: "组件", icon: "box-open" },
    children: [
      {
        path: "icon",
        name: "icon",
        component: () => import("@/views/vab"),
        meta: {
          title: "图标",
          permissions: ["admin"],
        },
        children: [
          {
            path: "awesomeIcon",
            name: "AwesomeIcon",
            component: () => import("@/views/vab/icon/index"),
            meta: { title: "常规图标" },
          },
          {
            path: "colorfulIcon",
            name: "ColorfulIcon",
            component: () => import("@/views/vab/icon/colorfulIcon"),
            meta: { title: "多彩图标" },
          },
        ],
      },
      {
        path: "table",
        name: "table",
        component: () => import("@/views/vab/table"),
        meta: {
          title: "表格",
          permissions: ["admin"],
        },
      },
      {
        path: "guess",
        name: "guess",
        component: () => import("@/views/vab/guess"),
        meta: {
          title: "答题环节",
          permissions: ["admin"],
        },
      },
    ],
  },
  {
    path: "/personnelManagement",
    component: LayOut,
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "配置", icon: "users-cog" },

    children: [
      {
        path: "userManagement",
        name: "UserManagement",
        component: () => import("@/views/personnelManagement/userManagement"),
        meta: { title: "用户管理" },
      },
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () => import("@/views/personnelManagement/roleManagement"),
        meta: { title: "角色管理" },
      },
      {
        path: "menuManagement",
        name: "MenuManagement",
        component: () => import("@/views/personnelManagement/roleManagement"),
        meta: { title: "菜单管理", badge: "New" },
      },
    ],
  },
  {
    path: "/mall",
    component: LayOut,
    redirect: "noRedirect",
    name: "Mall",
    meta: { title: "商城", icon: "shopping-cart" },

    children: [
      {
        path: "pay",
        name: "Pay",
        component: () => import("@/views/mall/pay/index"),
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: () => import("@/views/mall/goodsList/index"),
        meta: {
          title: "商品列表",
        },
      },
    ],
  },
  {
    path: "/error",
    component: LayOut,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },

    children: [
      {
        path: "icon",
        name: "icon",
        component: () => import("@/views/vab"),
        meta: { title: "401" },
      },
    ],
  },
  {
    path: "/test",
    component: LayOut,
    name: "test",

    meta: {
      title: "测试",
      icon: "bug",
      permissions: ["admin"],
    },
    children: [
      {
        path: "test",
        component: () => import("@/views/test"),
        meta: {
          title: "测试",
        },
      },
    ],
  },
];


const router = new VueRouter({
  base: '',
  mode: 'hash',
  scrollBehavior: () => ({
    y: 0,
  }),
  routes,
});

export function resetRouter() {
  location.reload();
}

export default router;