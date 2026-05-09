import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"
import { createMemoryHistory, createRouter } from "vue-router"
import App from "@/App.vue"

function createTestRouter() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      {
        path: "/",
        name: "home",
        component: { template: "<div>home</div>" }
      }
    ]
  })
  router.push("/")
  return router
}

describe("App", () => {
  it("renders RouterView", () => {
    const router = createTestRouter()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.findComponent({ name: "RouterView" }).exists()).toBe(true)
  })

  it("has correct background class", () => {
    const router = createTestRouter()
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })
    const root = wrapper.find("div")
    expect(root.classes()).toContain("bg-background")
    expect(root.classes()).toContain("min-h-screen")
  })
})
