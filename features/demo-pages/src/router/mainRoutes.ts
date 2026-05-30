import type { RouteRecordRaw } from "vue-router"
import { ROUTE_NAME, ROUTE_PATH } from "@/types"

export const routes: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.HOME,
    component: () => import("@/layouts/default.vue"),
    children: [
      {
        path: "",
        name: ROUTE_NAME.HOME,
        component: () => import("@/views/HomeView.vue")
      },
      {
        path: ROUTE_PATH.ABOUT,
        name: ROUTE_NAME.ABOUT,
        component: () => import("@/views/AboutView.vue")
      }
    ]
  }
]
