import Layout from "@/Layout/Index.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    redirect: "/token",
    children: [
      {
        path: "/token",
        name: "token",
        mate: {
          icon: "el-icon-money",
          title: "Token List",
        },
        component: () => import("@/views/Token/Index.vue"),
      },
      {
        path: "/transfer",
        name: "transfer",
        mate: {
          icon: "el-icon-cpu",
          title: "批量发送Token",
        },
        component: () => import("@/views/Transfer/Index.vue"),
      },
      {
        path: "/balance",
        name: "balance",
        mate: {
          icon: "el-icon-search",
          title: "批量查询Token",
        },
        component: () => import("@/views/Balance/Index.vue"),
      },
      {
        path: "/ping",
        name: "ping",
        mate: {
          icon: "el-icon-finished",
          title: "RPC节点测速",
        },
        component: () => import("@/views/Ping/Index.vue"),
      },
      {
        path: "/convert",
        name: "convert",
        mate: {
          icon: "el-icon-refresh",
          title: "单位转换",
        },
        component: () => import("@/views/Convert/Index.vue"),
      },
      {
        path: "/record",
        name: "record",
        mate: {
          icon: "el-icon-connection",
          title: "链上记录",
        },
        component: () => import("@/views/Record/Index.vue"),
      },
    ],
  },
];

export default routes;
