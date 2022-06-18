import Layout from "@/Layout/Index.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [
      {
        path: "/token",
        name: "token",
        component: () => import("@/views/Token/Index.vue"),
      },
      {
        path: "/transfer",
        name: "transfer",
        component: () => import("@/views/Token/Index.vue"),
      },
      {
        path: "/balance",
        name: "balance",
        component: () => import("@/views/Balance/Index.vue"),
      },
      {
        path: "/ping",
        name: "ping",
        component: () => import("@/views/Ping/Index.vue"),
      },
      {
        path: "/convert",
        name: "convert",
        component: () => import("@/views/Convert/Index.vue"),
      },
      {
        path: "/record",
        name: "record",
        component: () => import("@/views/Record/Index.vue"),
      },
    ],
  },
];

export default routes;
