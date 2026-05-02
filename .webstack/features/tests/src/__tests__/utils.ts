import type { MountingOptions } from "@vue/test-utils"
import { mount } from "@vue/test-utils"
import type { Component } from "vue"
import { createRouter, createMemoryHistory } from "vue-router"
// @webstack:utils-imports
import { ROUTE_NAME, ROUTE_PATH } from "@/types"
// @webstack:utils-type-imports

export function mountWithPlugins(
  component: Component,
  options: Omit<MountingOptions<any>, "global"> & {
    global?: Omit<MountingOptions<any>["global"], "plugins">
  } = {}
) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: ROUTE_PATH.HOME,
        name: ROUTE_NAME.HOME,
        component: { template: "<div>home</div>" }
      },
      {
        path: ROUTE_PATH.ABOUT,
        name: ROUTE_NAME.ABOUT,
        component: { template: "<div>about</div>" }
      }
    ]
  })

  router.push(ROUTE_PATH.HOME)

  // @webstack:utils-init

  return mount(component, {
    global: {
      plugins: [
        router,
        // @webstack:utils-plugins
      ],
      ...options.global
    },
    attachTo: document.body,
    ...options
  })
}
