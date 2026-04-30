import type { MountingOptions } from "@vue/test-utils"
import { mount } from "@vue/test-utils"
import type { Component } from "vue"
import { createRouter, createMemoryHistory } from "vue-router"
import { createPinia } from "pinia"
import { createI18n } from "vue-i18n"
import { ROUTE_NAME, ROUTE_PATH, LOCALES } from "@/types"
import enMessages from "@/i18n/locales/en.json"
import ruMessages from "@/i18n/locales/ru.json"

export function mountWithPlugins(
  component: Component,
  options: Omit<MountingOptions<any>, "global"> & {
    global?: Omit<MountingOptions<any>["global"], "plugins">
  } = {},
  locale: LOCALES = LOCALES.EN
) {
  const pinia = createPinia()

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

  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: LOCALES.EN,
    messages: {
      [LOCALES.EN]: enMessages,
      [LOCALES.RU]: ruMessages
    }
  })

  return mount(component, {
    global: {
      plugins: [pinia, router, i18n],
      ...options.global
    },
    attachTo: document.body,
    ...options
  })
}
